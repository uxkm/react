'use client'

/**
 * 한 줄 입력.
 * size · clearable · prefix/suffix · error 상태를 공통 클래스로 표현한다.
 */
import {
  useMemo, // 메모 훅
  useRef, // ref 훅
  useState, // 상태 훅
  type ChangeEvent, // ChangeEvent 타입
  type ClipboardEvent, // ClipboardEvent 타입
  type InputHTMLAttributes, // InputHTMLAttributes 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합
import { useFormReset } from '@/hooks/react/useFormReset'
import { Icon } from './Icon' // Icon 컴포넌트

const VALID_SIZES = new Set(['sm', 'md', 'lg'])

/** 입력창 크기 */
export type InputSize = 'sm' | 'md' | 'lg'

/** 입력창이 받는 값 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'onChange'> {
  size?: InputSize
  error?: boolean
  block?: boolean
  clearable?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void
}

/**
 * 한 줄 텍스트 입력.
 * clearable · prefix · suffix가 있으면 래퍼/그룹으로 묶는다.
 */
export function Input ({
  size = 'md',
  disabled = false,
  error = false,
  placeholder,
  type = 'text',
  block = false,
  clearable = false,
  value,
  defaultValue = '',
  prefix,
  suffix,
  className,
  onChange,
  onPaste,
  onClear,
  readOnly,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    maxLength: maxLengthProp,
    maxlength,
    inputMode,
    inputmode,
    ...restProps
  } = props as Omit<InputProps, 'size' | 'prefix' | 'onChange'> & {
    maxlength?: number | string
    inputmode?: InputProps['inputMode']
  }
  const resolvedMaxLength = Number(maxLengthProp ?? maxlength)
  const nativeMaxLength =
    Number.isInteger(resolvedMaxLength) && resolvedMaxLength >= 0 ? resolvedMaxLength : undefined
  const resolvedInputMode = inputMode ?? inputmode

  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'
  const controlled = value !== undefined
  const [innerValue, setInnerValue] = useState(() => String(defaultValue ?? ''))
  const currentValue = controlled ? String(value ?? '') : innerValue
  const hasAddon = prefix != null || suffix != null
  useFormReset(inputRef, controlled ? undefined : setInnerValue)

  const inputClasses = useMemo(
    () =>
      classNames(
        'input',
        resolvedSize === 'sm' && 'input_sm',
        resolvedSize === 'lg' && 'input_lg',
        block && 'input_block',
        error && 'is-error',
        type === 'password' && String(currentValue).length > 0 && 'input_masked',
        !hasAddon && !clearable && className
      ),
    [resolvedSize, block, error, type, currentValue, hasAddon, clearable, className]
  )

  const numericOnly = resolvedInputMode === 'numeric'

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget
    if (numericOnly) {
      const digits = input.value.replace(/\D/g, '').slice(0, nativeMaxLength)
      if (digits !== input.value) input.value = digits
    }
    if (!controlled) setInnerValue(input.value)
    onChange?.(event)
  }

  function handlePaste (event: ClipboardEvent<HTMLInputElement>) {
    onPaste?.(event)
    const input = event.currentTarget
    const { selectionStart: start, selectionEnd: end } = input
    if (event.defaultPrevented || !numericOnly || disabled || readOnly || start == null || end == null) return
    event.preventDefault()
    const available = nativeMaxLength == null
      ? undefined
      : Math.max(0, nativeMaxLength - (input.value.length - (end - start)))
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, available)
    if (!pasted) return
    const next = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`
    setInputValue(input, next)
    input.setSelectionRange(start + pasted.length, start + pasted.length)
    input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertFromPaste', data: pasted }))
  }

  function setInputValue (input: HTMLInputElement, next: string) {
    const descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
    descriptor?.set?.call(input, next)
  }

  function handleClear () {
    if (disabled || readOnly) return
    const input = inputRef.current
    if (!input) return
    setInputValue(input, '')
    input.dispatchEvent(new Event('input', { bubbles: true }))
    input.dispatchEvent(new Event('change', { bubbles: true }))
    onClear?.()
    input.focus()
  }

  const clearButton = (
    <button
      type="button"
      className="input_clear"
      aria-label="입력 지우기"
      hidden={String(currentValue).length === 0 || disabled || !!readOnly}
      onClick={handleClear}
    >
      <Icon name="close" />
    </button>
  )

  const input = (
    <input
      {...restProps}
      ref={inputRef}
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      inputMode={resolvedInputMode}
      maxLength={nativeMaxLength}
      {...(controlled ? { value: currentValue } : { defaultValue })}
      aria-invalid={error ? 'true' : restProps['aria-invalid']}
      onChange={handleChange}
      onPaste={handlePaste}
    />
  )

  const control = clearable
    ? (
      <span
        className={classNames(
          'input_clearable',
          String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled'
        )}
      >
        {input}
        {clearButton}
      </span>
      )
    : (
        input
      )

  if (!hasAddon) {
    return clearable
      ? (
        <span
          className={classNames(
            'input_clearable',
            String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled',
            className
          )}
        >
          {input}
          {clearButton}
        </span>
        )
      : (
          input
        )
  }

  return (
    <div className={classNames('input_group', className)}>
      {prefix != null && (
        <span className="input_group-addon" aria-hidden="true">
          {prefix}
        </span>
      )}
      {control}
      {suffix != null && <span className="input_group-addon">{suffix}</span>}
    </div>
  )
}

export default Input
