export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? ''

export const COMMENT_BODY_MAX = 500
export const COMMENT_REPLY_BODY_MAX = 200
export const COMMENT_AUTHOR_MAX = 40
export const ADMIN_COMMENT_AUTHOR_NAME = 'uxkm'

export const COMMENT_PASSWORD_MIN = 4
export const COMMENT_PASSWORD_MAX = 32
export const COMMENT_MIN_SUBMIT_MS = 3000
export const COMMENT_RATE_LIMIT_PER_HOUR = 3

export const COMMENT_ERROR_MESSAGES = {
  invalid: '입력 내용을 확인해 주세요.',
  invalid_password: `비밀번호는 ${COMMENT_PASSWORD_MIN}~${COMMENT_PASSWORD_MAX}자로 입력해 주세요.`,
  wrong_password: '비밀번호가 일치하지 않습니다.',
  password_mismatch: '비밀번호 확인이 일치하지 않습니다.',
  turnstile_failed: '보안 확인에 실패했습니다. 다시 시도해 주세요.',
  rate_limit: '댓글 작성 횟수 제한에 도달했습니다. 잠시 후 다시 시도해 주세요.',
  spam: '댓글을 등록할 수 없습니다.',
  prohibited:
    '가이드라인상 제한되는 표현(욕설·혐오·위협·개인정보 노출 등)이 포함되어 있습니다.',
  storage: '브라우저 저장소를 사용할 수 없습니다. 일반 창에서 다시 시도해 주세요.',
  forbidden: '삭제 권한이 없습니다.',
  delete_failed: '댓글을 삭제하지 못했습니다.',
  server_error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  not_configured: '댓글 기능이 아직 설정되지 않았습니다.',
  turnstile_required: '보안 확인을 완료해 주세요.',
  admin_forbidden: '관리자 비밀번호가 올바르지 않습니다.',
}
