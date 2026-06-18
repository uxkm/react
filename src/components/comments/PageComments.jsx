import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  deletePageComment,
  fetchPageComments,
  isCommentsEnabled,
  submitPageComment,
  usesDevCommentStorage,
} from '@/lib/commentsApi'
import { COMMENTS_CHANGED_EVENT } from '@/lib/commentsDevStorage'
import { buildCommentTree } from '@/lib/commentTree'
import {
  ADMIN_COMMENT_AUTHOR_NAME,
  COMMENT_AUTHOR_MAX,
  COMMENT_BODY_MAX,
  COMMENT_ERROR_MESSAGES,
  COMMENT_PASSWORD_MAX,
  COMMENT_PASSWORD_MIN,
  COMMENT_REPLY_BODY_MAX,
  TURNSTILE_SITE_KEY,
} from '@/lib/commentsConfig'
import {
  ADMIN_SESSION_CHANGED_EVENT,
  isCommentsAdminLoggedIn,
} from '@/lib/commentsAdminApi'
import { isCommentsConfigured } from '@/lib/supabase'
import TurnstileWidget from './TurnstileWidget'

function formatCommentDate(value) {
  return new Date(value).toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function CommentActions({
  comment,
  enabled,
  submitting,
  deletingId,
  onReply,
  onDelete,
  isReplyOpen,
  isReply = false,
}) {
  return (
    <div className="page_comments__actions_inline">
      {enabled && !comment.is_pending && !isReply ? (
        <button
          type="button"
          className="page_comments__reply_btn"
          onClick={() => onReply(comment)}
          aria-expanded={isReplyOpen}
        >
          답글
        </button>
      ) : null}
      {enabled ? (
        <button
          type="button"
          className="page_comments__delete_btn"
          onClick={() => onDelete(comment.id)}
          disabled={submitting || deletingId === comment.id}
        >
          {deletingId === comment.id ? '삭제 중…' : '삭제'}
        </button>
      ) : null}
    </div>
  )
}

function CommentContent({ comment, isReply = false }) {
  return (
    <>
      <header className="page_comments__meta">
        <strong className="page_comments__author">{comment.author_name}</strong>
        <time className="page_comments__date" dateTime={comment.created_at}>
          {formatCommentDate(comment.created_at)}
        </time>
        {comment.is_pending ? (
          <span className="page_comments__badge">검수 대기</span>
        ) : null}
      </header>
      <p className="page_comments__body">{comment.body}</p>
      {isReply ? null : (
        <p className="sound_only">
          {comment.replies?.length
            ? `답글 ${comment.replies.length}개`
            : '답글 없음'}
        </p>
      )}
    </>
  )
}

function CommentBodyField({
  id,
  label,
  name,
  value,
  onChange,
  maxLength,
  rows = 5,
  className = '',
  disabled = false,
  required = false,
  placeholder = '내용을 입력',
}) {
  const counterId = `${id}-counter`
  const isNearLimit = value.length >= maxLength * 0.9

  return (
    <div className="page_comments__field mt_m">
      <label className="page_comments__label" htmlFor={id}>
        {label}
      </label>
      <div className="page_comments__textarea_wrap">
        <textarea
          id={id}
          className={['page_comments__textarea', className].filter(Boolean).join(' ')}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          rows={rows}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={counterId}
        />
        <span
          id={counterId}
          className={[
            'page_comments__counter',
            isNearLimit ? 'page_comments__counter--near' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-live="polite"
        >
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  )
}

function CommentAntiSpamFields({
  honeypotId,
  botCheck,
  onBotCheckChange,
  turnstileKey,
  showTurnstile,
  onTurnstileVerify,
  onTurnstileExpire,
}) {
  return (
    <>
      <div className="page_comments__honeypot" aria-hidden="true">
        <label htmlFor={honeypotId}>Bot check</label>
        <input
          id={honeypotId}
          type="text"
          name="bot-check"
          tabIndex={-1}
          autoComplete="off"
          readOnly
          value={botCheck}
          onChange={(event) => onBotCheckChange(event.target.value)}
        />
      </div>

      {showTurnstile ? (
        <TurnstileWidget
          key={turnstileKey}
          siteKey={TURNSTILE_SITE_KEY}
          onVerify={onTurnstileVerify}
          onExpire={onTurnstileExpire}
        />
      ) : null}
    </>
  )
}

function PasswordFields({
  idPrefix,
  password,
  passwordConfirm,
  replyPassword,
  replyPasswordConfirm,
  isReply,
  submitting,
  disabled,
  onPasswordChange,
  onPasswordConfirmChange,
  onReplyPasswordChange,
  onReplyPasswordConfirmChange,
}) {
  const currentPassword = isReply ? replyPassword : password
  const currentConfirm = isReply ? replyPasswordConfirm : passwordConfirm
  const onPassword = isReply ? onReplyPasswordChange : onPasswordChange
  const onConfirm = isReply ? onReplyPasswordConfirmChange : onPasswordConfirmChange

  return (
    <div className="page_comments__password_group mt_m">
      <div className="page_comments__password_row">
        <div className="page_comments__field">
          <label className="page_comments__label" htmlFor={`${idPrefix}-password`}>
            비밀번호
          </label>
          <input
            id={`${idPrefix}-password`}
            className="page_comments__input"
            type="password"
            name={isReply ? 'reply_password' : 'password'}
            value={currentPassword}
            onChange={(event) => onPassword(event.target.value)}
            minLength={COMMENT_PASSWORD_MIN}
            maxLength={COMMENT_PASSWORD_MAX}
            autoComplete="new-password"
            placeholder="비밀번호 입력"
            required
            disabled={disabled || submitting}
          />
        </div>

        <div className="page_comments__field">
          <label
            className="page_comments__label"
            htmlFor={`${idPrefix}-password-confirm`}
          >
            비밀번호 확인
          </label>
          <input
            id={`${idPrefix}-password-confirm`}
            className="page_comments__input"
            type="password"
            name={isReply ? 'reply_password_confirm' : 'password_confirm'}
            value={currentConfirm}
            onChange={(event) => onConfirm(event.target.value)}
            minLength={COMMENT_PASSWORD_MIN}
            maxLength={COMMENT_PASSWORD_MAX}
            autoComplete="new-password"
            placeholder="비밀번호 입력 후 확인"
            required
            disabled={disabled || submitting}
          />
        </div>
      </div>
      <p className="page_comments__help">
        삭제 시 필요합니다. {COMMENT_PASSWORD_MIN}~{COMMENT_PASSWORD_MAX}자
      </p>
    </div>
  )
}

function PageComments() {
  const { pathname } = useLocation()
  const enabled = isCommentsEnabled()
  const devStorage = usesDevCommentStorage()
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(enabled)
  const [loadError, setLoadError] = useState(null)
  const [authorName, setAuthorName] = useState(() =>
    isCommentsAdminLoggedIn() ? ADMIN_COMMENT_AUTHOR_NAME : '',
  )
  const [body, setBody] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [replyBody, setReplyBody] = useState('')
  const [replyPassword, setReplyPassword] = useState('')
  const [replyPasswordConfirm, setReplyPasswordConfirm] = useState('')
  const [botCheck, setBotCheck] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [deleteTargetId, setDeleteTargetId] = useState(null)
  const [deletePassword, setDeletePassword] = useState('')
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitPendingReview, setSubmitPendingReview] = useState(true)
  const [formResetKey, setFormResetKey] = useState(0)
  const [replyTo, setReplyTo] = useState(null)
  const [replyTurnstileKey, setReplyTurnstileKey] = useState(0)
  const mainFormOpenedAtRef = useRef(0)
  const replyFormOpenedAtRef = useRef(null)

  const commentTree = useMemo(() => buildCommentTree(comments), [comments])
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() =>
    isCommentsAdminLoggedIn(),
  )
  const displayAuthorName = isAdminLoggedIn
    ? ADMIN_COMMENT_AUTHOR_NAME
    : authorName
  const showTurnstile =
    isCommentsConfigured() && Boolean(TURNSTILE_SITE_KEY) && !isAdminLoggedIn

  useEffect(() => {
    mainFormOpenedAtRef.current = Date.now()
  }, [formResetKey, pathname])

  useEffect(() => {
    const syncAdminSession = () => {
      const loggedIn = isCommentsAdminLoggedIn()
      setIsAdminLoggedIn(loggedIn)
      setAuthorName(loggedIn ? ADMIN_COMMENT_AUTHOR_NAME : '')
    }

    syncAdminSession()
    window.addEventListener(ADMIN_SESSION_CHANGED_EVENT, syncAdminSession)
    window.addEventListener('storage', syncAdminSession)
    window.addEventListener('focus', syncAdminSession)

    return () => {
      window.removeEventListener(ADMIN_SESSION_CHANGED_EVENT, syncAdminSession)
      window.removeEventListener('storage', syncAdminSession)
      window.removeEventListener('focus', syncAdminSession)
    }
  }, [])

  const reloadComments = useCallback(async () => {
    const { comments: nextComments, error } = await fetchPageComments(pathname)
    setComments(nextComments)
    setLoadError(error)
  }, [pathname])

  useEffect(() => {
    if (!enabled) return undefined

    let cancelled = false

    void (async () => {
      const { comments: nextComments, error } = await fetchPageComments(pathname)
      if (cancelled) return
      setComments(nextComments)
      setLoadError(error)
      setLoading(false)
    })()

    return () => {
      cancelled = true
    }
  }, [enabled, pathname])

  useEffect(() => {
    if (!devStorage) return undefined

    const handleCommentsChanged = () => {
      void reloadComments()
    }

    window.addEventListener(COMMENTS_CHANGED_EVENT, handleCommentsChanged)
    return () => {
      window.removeEventListener(COMMENTS_CHANGED_EVENT, handleCommentsChanged)
    }
  }, [devStorage, reloadComments])

  const handleTurnstileVerify = useCallback((token) => {
    setTurnstileToken(token)
    setSubmitError(null)
  }, [])

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken('')
  }, [])

  async function handleSubmit(event, parentId = null) {
    event.preventDefault()
    setSubmitError(null)
    setSubmitSuccess(false)

    if (!enabled) {
      setSubmitError(COMMENT_ERROR_MESSAGES.not_configured)
      return
    }

    const trimmedName = (
      isAdminLoggedIn ? ADMIN_COMMENT_AUTHOR_NAME : authorName
    ).trim()
    const sourceBody = parentId ? replyBody : body
    const sourcePassword = parentId ? replyPassword : password
    const sourcePasswordConfirm = parentId ? replyPasswordConfirm : passwordConfirm
    const trimmedBody = sourceBody.trim()

    if (!trimmedName || !trimmedBody) {
      setSubmitError(COMMENT_ERROR_MESSAGES.invalid)
      return
    }

    if (
      !isAdminLoggedIn &&
      sourcePassword !== sourcePasswordConfirm
    ) {
      setSubmitError(COMMENT_ERROR_MESSAGES.password_mismatch)
      return
    }

    setSubmitting(true)

    const result = await submitPageComment({
      pagePath: pathname,
      authorName: trimmedName,
      body: trimmedBody,
      password: sourcePassword,
      website: botCheck,
      turnstileToken,
      parentId,
      formOpenedAt: parentId
        ? replyFormOpenedAtRef.current
        : mainFormOpenedAtRef.current,
    })

    setSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.error ?? COMMENT_ERROR_MESSAGES.server_error)
      return
    }

    if (parentId) {
      setReplyBody('')
      setReplyPassword('')
      setReplyPasswordConfirm('')
      setReplyTo(null)
      replyFormOpenedAtRef.current = null
    } else {
      setBody('')
      setPassword('')
      setPasswordConfirm('')
    }

    if (!isAdminLoggedIn) {
      setAuthorName('')
    }

    setBotCheck('')
    setTurnstileToken('')
    setSubmitPendingReview(result.pendingReview ?? true)
    setSubmitSuccess(true)
    setFormResetKey((key) => key + 1)
    await reloadComments()
  }

  function openDeleteForm(commentId) {
    setDeleteTargetId(commentId)
    setDeletePassword('')
    setSubmitError(null)
    setSubmitSuccess(false)
  }

  function closeDeleteForm() {
    setDeleteTargetId(null)
    setDeletePassword('')
  }

  async function handleDeleteSubmit(event) {
    event.preventDefault()
    if (!deleteTargetId) return

    setSubmitError(null)
    setSubmitSuccess(false)
    setDeletingId(deleteTargetId)

    const result = await deletePageComment({
      pagePath: pathname,
      commentId: deleteTargetId,
      password: deletePassword,
    })

    setDeletingId(null)

    if (!result.ok) {
      setSubmitError(result.error ?? COMMENT_ERROR_MESSAGES.delete_failed)
      return
    }

    if (replyTo?.id === deleteTargetId) {
      setReplyTo(null)
      setReplyBody('')
      setReplyPassword('')
    }

    closeDeleteForm()
    setSubmitSuccess(true)
    await reloadComments()
  }

  function handleAuthorNameChange(value) {
    if (isAdminLoggedIn) return
    setAuthorName(value)
  }

  function openReply(comment) {
    setReplyTo({ id: comment.id, authorName: comment.author_name })
    setReplyBody('')
    setReplyPassword('')
    setReplyPasswordConfirm('')
    setTurnstileToken('')
    setReplyTurnstileKey((key) => key + 1)
    replyFormOpenedAtRef.current = Date.now()
    setSubmitError(null)
    setSubmitSuccess(false)
    closeDeleteForm()
  }

  function closeReply() {
    setReplyTo(null)
    setReplyBody('')
    setReplyPassword('')
    setReplyPasswordConfirm('')
    replyFormOpenedAtRef.current = null
    setSubmitError(null)
  }

  return (
    <section
      className="page_comments indent mt_xxl"
      aria-labelledby="page-comments-title"
    >
      <h2 id="page-comments-title" className="ml_mn t_blue">
        댓글
      </h2>

      {devStorage ? (
        <p className="page_comments__notice mt_m" role="status">
          로컬 테스트 모드입니다. 댓글은 이 브라우저에만 저장됩니다.
        </p>
      ) : null}

      {!enabled ? (
        <p className="page_comments__notice mt_m" role="status">
          댓글 기능을 사용하려면 Supabase 환경 변수를 설정해 주세요. (
          <code>.env.example</code> 참고)
        </p>
      ) : null}

      <div className="page_comments__list mt_ml" aria-live="polite">
        {loading ? <p className="page_comments__status">댓글을 불러오는 중…</p> : null}
        {loadError ? (
          <p className="page_comments__status page_comments__status--error">
            {loadError}
          </p>
        ) : null}
        {!loading && !loadError && commentTree.length === 0 ? (
          <p className="page_comments__status">아직 등록된 댓글이 없습니다.</p>
        ) : null}
        {commentTree.length > 0 ? (
          <ol className="page_comments__items">
            {commentTree.map((thread) => (
              <li key={thread.id} className="page_comments__item">
                <CommentContent comment={thread} />
                <CommentActions
                  comment={thread}
                  enabled={enabled}
                  submitting={submitting}
                  deletingId={deletingId}
                  onReply={openReply}
                  onDelete={openDeleteForm}
                  isReplyOpen={replyTo?.id === thread.id}
                />

                {deleteTargetId === thread.id ? (
                  <form
                    className="page_comments__delete_form"
                    onSubmit={handleDeleteSubmit}
                    noValidate
                  >
                    <p className="page_comments__reply_target">댓글 삭제</p>
                    <div className="page_comments__field">
                      <label
                        className="page_comments__label"
                        htmlFor={`delete-password-${thread.id}`}
                      >
                        비밀번호
                      </label>
                      <input
                        id={`delete-password-${thread.id}`}
                        className="page_comments__input"
                        type="password"
                        value={deletePassword}
                        onChange={(event) => setDeletePassword(event.target.value)}
                        autoComplete="current-password"
                        required
                      />
                    </div>
                    <div className="page_comments__reply_actions">
                      <button
                        type="submit"
                        className="page_comments__submit page_comments__submit--danger"
                        disabled={deletingId === thread.id}
                      >
                        {deletingId === thread.id ? '삭제 중…' : '삭제 확인'}
                      </button>
                      <button
                        type="button"
                        className="page_comments__cancel"
                        onClick={closeDeleteForm}
                        disabled={deletingId === thread.id}
                      >
                        취소
                      </button>
                    </div>
                  </form>
                ) : null}

                {replyTo?.id === thread.id ? (
                  <form
                    className="page_comments__reply_form"
                    onSubmit={(event) => handleSubmit(event, thread.id)}
                    noValidate
                  >
                    <p className="page_comments__reply_target">
                      <strong>{replyTo.authorName}</strong>님에게 답글
                    </p>

                    <div className="page_comments__field mt_m">
                      <label
                        className="page_comments__label"
                        htmlFor={`comment-reply-author-${thread.id}`}
                      >
                        이름
                      </label>
                      <input
                        id={`comment-reply-author-${thread.id}`}
                        className="page_comments__input"
                        type="text"
                        name="reply_author_name"
                        key={`reply-author-${formResetKey}`}
                        value={displayAuthorName}
                        onChange={(event) =>
                          handleAuthorNameChange(event.target.value)
                        }
                        maxLength={COMMENT_AUTHOR_MAX}
                        autoComplete="off"
                        placeholder="이름을 입력"
                        readOnly={isAdminLoggedIn}
                        required
                        disabled={submitting}
                      />
                    </div>

                    <CommentBodyField
                      id={`comment-reply-body-${thread.id}`}
                      label="답글 내용"
                      name="reply_body"
                      value={replyBody}
                      onChange={(event) => setReplyBody(event.target.value)}
                      maxLength={COMMENT_REPLY_BODY_MAX}
                      rows={4}
                      className="page_comments__textarea--reply"
                      required
                      disabled={submitting}
                    />

                    {isAdminLoggedIn ? null : (
                      <PasswordFields
                        idPrefix={`comment-reply-${thread.id}`}
                        password={password}
                        passwordConfirm={passwordConfirm}
                        replyPassword={replyPassword}
                        replyPasswordConfirm={replyPasswordConfirm}
                        isReply
                        submitting={submitting}
                        disabled={false}
                        onPasswordChange={setPassword}
                        onPasswordConfirmChange={setPasswordConfirm}
                        onReplyPasswordChange={setReplyPassword}
                        onReplyPasswordConfirmChange={setReplyPasswordConfirm}
                      />
                    )}

                    <CommentAntiSpamFields
                      honeypotId={`comment-reply-bot-check-${thread.id}`}
                      botCheck={botCheck}
                      onBotCheckChange={setBotCheck}
                      turnstileKey={`turnstile-reply-${thread.id}-${replyTurnstileKey}`}
                      showTurnstile={showTurnstile}
                      onTurnstileVerify={handleTurnstileVerify}
                      onTurnstileExpire={handleTurnstileExpire}
                    />

                    <div className="page_comments__reply_actions">
                      <button
                        type="submit"
                        className="page_comments__submit"
                        disabled={submitting}
                      >
                        {submitting ? '등록 중…' : '답글 등록'}
                      </button>
                      <button
                        type="button"
                        className="page_comments__cancel"
                        onClick={closeReply}
                        disabled={submitting}
                      >
                        취소
                      </button>
                    </div>
                  </form>
                ) : null}

                {thread.replies.length > 0 ? (
                  <ol className="page_comments__replies">
                    {thread.replies.map((reply) => (
                      <li
                        key={reply.id}
                        className="page_comments__item page_comments__item--reply"
                      >
                        <CommentContent comment={reply} isReply />
                        <CommentActions
                          comment={reply}
                          enabled={enabled}
                          submitting={submitting}
                          deletingId={deletingId}
                          onReply={openReply}
                          onDelete={openDeleteForm}
                          isReplyOpen={false}
                          isReply
                        />

                        {deleteTargetId === reply.id ? (
                          <form
                            className="page_comments__delete_form"
                            onSubmit={handleDeleteSubmit}
                            noValidate
                          >
                            <p className="page_comments__reply_target">댓글 삭제</p>
                            <div className="page_comments__field">
                              <label
                                className="page_comments__label"
                                htmlFor={`delete-password-${reply.id}`}
                              >
                                비밀번호
                              </label>
                              <input
                                id={`delete-password-${reply.id}`}
                                className="page_comments__input"
                                type="password"
                                value={deletePassword}
                                onChange={(event) =>
                                  setDeletePassword(event.target.value)
                                }
                                autoComplete="current-password"
                                required
                              />
                            </div>
                            <div className="page_comments__reply_actions">
                              <button
                                type="submit"
                                className="page_comments__submit page_comments__submit--danger"
                                disabled={deletingId === reply.id}
                              >
                                {deletingId === reply.id ? '삭제 중…' : '삭제 확인'}
                              </button>
                              <button
                                type="button"
                                className="page_comments__cancel"
                                onClick={closeDeleteForm}
                                disabled={deletingId === reply.id}
                              >
                                취소
                              </button>
                            </div>
                          </form>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </li>
            ))}
          </ol>
        ) : null}
      </div>

      <form
        className="page_comments__form mt_xl"
        onSubmit={(event) => handleSubmit(event)}
        noValidate
        autoComplete="off"
      >
        <h3 className="page_comments__form_title ml_mn">댓글 남기기</h3>
        <p className="page_comments__form_desc mt_s">
          {isAdminLoggedIn
            ? '관리자로 로그인되어 비밀번호 없이 댓글이 바로 공개됩니다.'
            : '작성한 댓글은 관리자 검수 후 공개됩니다. 삭제 시 등록한 비밀번호가 필요합니다.'}
        </p>

        <div className="page_comments__field mt_m">
          <label className="page_comments__label" htmlFor="comment-author">
            이름
          </label>
          <input
            id="comment-author"
            className="page_comments__input"
            type="text"
            name="author_name"
            key={`author-${formResetKey}`}
            value={displayAuthorName}
            onChange={(event) => handleAuthorNameChange(event.target.value)}
            maxLength={COMMENT_AUTHOR_MAX}
            autoComplete="off"
            placeholder="이름을 입력"
            readOnly={isAdminLoggedIn}
            required
            disabled={!enabled || submitting}
          />
        </div>

        <CommentBodyField
          id="comment-body"
          label="내용"
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          maxLength={COMMENT_BODY_MAX}
          rows={5}
          required
          disabled={!enabled || submitting}
        />

        {isAdminLoggedIn ? null : (
          <PasswordFields
            idPrefix="comment"
            password={password}
            passwordConfirm={passwordConfirm}
            replyPassword={replyPassword}
            replyPasswordConfirm={replyPasswordConfirm}
            isReply={false}
            submitting={submitting}
            disabled={!enabled}
            onPasswordChange={setPassword}
            onPasswordConfirmChange={setPasswordConfirm}
            onReplyPasswordChange={setReplyPassword}
            onReplyPasswordConfirmChange={setReplyPasswordConfirm}
          />
        )}

        <CommentAntiSpamFields
          honeypotId="comment-bot-check"
          botCheck={botCheck}
          onBotCheckChange={setBotCheck}
          turnstileKey={`turnstile-${formResetKey}`}
          showTurnstile={showTurnstile}
          onTurnstileVerify={handleTurnstileVerify}
          onTurnstileExpire={handleTurnstileExpire}
        />

        {submitError ? (
          <p className="page_comments__status page_comments__status--error mt_m" role="alert">
            {submitError}
          </p>
        ) : null}

        {submitSuccess ? (
          <p className="page_comments__status page_comments__status--success mt_m" role="status">
            {submitPendingReview
              ? '댓글이 등록되었습니다. 관리자 승인 후 공개됩니다.'
              : '댓글이 등록되었습니다.'}
          </p>
        ) : null}

        <div className="page_comments__actions mt_ml">
          <button
            type="submit"
            className="page_comments__submit"
            disabled={!enabled || submitting}
          >
            {submitting ? '등록 중…' : '댓글 등록'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default PageComments
