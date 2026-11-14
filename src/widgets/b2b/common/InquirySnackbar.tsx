'use client'

import { PageSnackbar } from '@/comp/layout/PageSnackbar'
import { Icon } from '@/comp/ui/Icon'
import { Link } from '@/lib/router'

/** 호출한 페이지에서 표시하며 사용자가 닫기 전까지 유지하는 기업교육 문의 안내. */
export default function InquirySnackbar () {
  return (
    <PageSnackbar
      className="inquiry-snackbar"
      regionClassName="inquiry-snackbar-region"
      role="region"
      aria-label="기업교육 문의 안내"
      openOnLoad
      round
      showIcon={false}
      closable
    >
      <span className="inquiry-snackbar_text">대기업의 <strong>96%</strong>가 함께하는 멀티캠퍼스 기업교육</span>
      <Link className="inquiry-snackbar_action" to="/b2b/contact/education">
        지금 바로 문의하기
        <Icon name="chevron-right" size={16} />
      </Link>
    </PageSnackbar>
  )
}
