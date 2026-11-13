/**
 * 공통 하단 푸터 UI.
 * children 이 있으면 그 내용, 없으면 기본 문구(@Publish Guide).
 */
import type { HTMLAttributes, ReactNode } from 'react' // React
import { classNames } from '@/utils/classNames' // 조건부 className 조합
import { hasNodes } from '@/utils/react' // has Nodes

/** 앱 푸터가 받는 값 */
export interface AppFooterProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

/**
 * 공통 하단 푸터.
 * children 이 있으면 그 내용, 없으면 기본 문구.
 */
export function AppFooter ({ children, className, ...rest }: AppFooterProps) {
  return (
    <footer {...rest} className={classNames('app-footer', className)}>
      <div className="app-footer_inner">
        {hasNodes(children)
          ? children
          : <p className="app-footer_text">@Publish Guide</p>}
      </div>
    </footer>
  )
}

export default AppFooter
