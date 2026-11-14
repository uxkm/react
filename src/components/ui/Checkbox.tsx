'use client'

/**
 * 체크박스.
 * label · button · indeterminate · labelEnd를 공통 클래스로 표현한다.
 */
import {
  useEffect, // effect 훅
  useId, // 고유 id 훅
  useRef, // ref 훅
  type ChangeEvent, // ChangeEvent 타입
  type InputHTMLAttributes, // InputHTMLAttributes 타입
  type ReactNode // ReactNode 타입
} from 'react' // React
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

/** 체크박스가 받는 값 */
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size' | 'color'> {
  label?: ReactNode
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  labelEnd?: boolean
  button?: boolean
  ripple?: boolean
  ariaLabel?: string
  children?: ReactNode
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

/**
 * 다중 선택이 가능한 체크박스.
 * 단독·버튼·레이블 배치 변형을 지원한다.
 */
export function Checkbox ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  labelEnd = false,
  button = false,
  ripple = false,
  ariaLabel,
  children,
  className,
  onChange,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = id ?? generatedId
  const content = children ?? label
  const standalone = content == null || content === ''

  const classes = classNames(
    'checkbox',
    labelEnd && 'checkbox_label-end',
    button && 'checkbox_button',
    className
  )

  // checked 유무로 제어/비제어 판정. onChange 만으로는 제어 모드가 되지 않는다.
  const checkedProps = checked !== undefined
    ? { checked, onChange }
    : { defaultChecked, onChange }

  const input = (
    <input
      {...props}
      ref={inputRef}
      id={standalone ? id : inputId}
      type="checkbox"
      aria-label={props['aria-label'] ?? ariaLabel}
      className="checkbox_input"
      disabled={disabled}
      {...checkedProps}
    />
  )
  const rippleAttrs = ripple ? { 'data-ripple': 'true' as const } : {}

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = Boolean(indeterminate)
  }, [indeterminate])

  if (standalone) {
    return (
      <label
        className={classNames('checkbox_control', className)}
        {...rippleAttrs}
      >
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </label>
    )
  }

  if (button) {
    return (
      <label className={classes} {...rippleAttrs}>
        {input}
        <span className="checkbox_label">{content}</span>
      </label>
    )
  }

  return (
    <div className={classes} {...rippleAttrs}>
      {labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
      <span className="checkbox_control">
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </span>
      {!labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
    </div>
  )
}

export default Checkbox
