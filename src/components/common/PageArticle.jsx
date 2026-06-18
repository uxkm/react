function PageArticle({ children, className = '', ...props }) {
  const mergedClassName = ['indent', className].filter(Boolean).join(' ')

  return (
    <article className={mergedClassName} {...props}>
      {children}
    </article>
  )
}

export default PageArticle
