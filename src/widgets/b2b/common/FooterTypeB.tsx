'use client'

import Image from 'next/image'
import { Accordion } from '@/comp/ui/Accordion'
import { Icon } from '@/comp/ui/Icon'
import { Link } from '@/lib/router'
import { useMediaQuery } from '@/hooks/layout/useMediaQuery'
import {
  footerCompanyLinks, footerGuideLinks, footerTypeBCertifications, footerTypeBFamilySites,
  footerTypeBLegalLinks, footerTypeBSocials, type FooterMenuLink
} from './footerTypeBData'

function FooterMenu ({ items }: { items: readonly FooterMenuLink[] }) {
  return (
    <ul className="footer-b_menu">
      {items.map(item => {
        const external = Boolean(item.href?.startsWith('https://'))
        return <li key={item.label}>{item.href ? (
          <Link to={item.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
            {item.label}{external && <Icon name="external" size={12} aria-hidden />}
          </Link>
        ) : <span>{item.label}</span>}</li>
      })}
    </ul>
  )
}

/** 어두운 배경의 typeB 푸터. 태블릿·모바일에서는 링크 그룹을 아코디언으로 표시합니다. */
export default function FooterTypeB () {
  const compact = useMediaQuery('(max-width: 1099px)')
  const groups = [
    { value: 'company', label: '회사', links: footerCompanyLinks },
    { value: 'guide', label: '안내', links: footerGuideLinks },
    { value: 'family', label: 'Family site', links: footerTypeBFamilySites }
  ]

  return (
    <footer className="footer footer_typeB" aria-label="멀티캠퍼스 회사 정보">
      <div className="footer-b_inner">
        <div className="footer-b_grid">
          <div className="footer-b_brand">
            <Link to="/b2b" className="footer-b_logo" aria-label="멀티캠퍼스 홈">
              <Image src="/images/common/logo_black.png" alt="multicampus" width={180} height={31} loading="eager" />
            </Link>
            <p className="footer-b_intro">30년간 기업의 성장을 설계해 온 Total HRD 파트너.<br />진단부터 설계·운영·성과관리까지 함께합니다.</p>
            <ul className="footer-b_socials" aria-label="공식 SNS">
              {footerTypeBSocials.map(site => (
                <li key={site.icon} className={`footer-b_social-${site.icon}`}><a href={site.href} target="_blank" title="새 창 열림" rel="noopener noreferrer" aria-label={site.label}><Icon name={site.icon} size={24} aria-hidden /></a></li>
              ))}
            </ul>
          </div>
          {!compact && groups.slice(0, 2).map(group => (
            <nav key={group.value} className={`footer-b_group footer-b_${group.value}`} aria-label={`하단 ${group.label}`}>
              <h3>{group.label}</h3><FooterMenu items={group.links} />
            </nav>
          ))}
          <section className="footer-b_customer" aria-labelledby="footer-b-customer-title">
            <h3 id="footer-b-customer-title">고객센터</h3>
            <a className="footer-b_phone" href="tel:15449001" aria-label="고객센터 1544-9001">1544-9001</a>
            <p>평일 08:00~20:00 · 휴일 09:00~18:00<br />(점심시간 12:00~13:00 제외)</p>
            <div className="footer-b_contacts">
              <a href="mailto:partner@multicampus.com">제휴 문의 partner@multicampus.com</a>
              <a href="mailto:ads@multicampus.com">광고 문의 ads@multicampus.com</a>
            </div>
          </section>
          {!compact && <nav className="footer-b_group footer-b_family" aria-label="패밀리사이트"><h3>Family site</h3><FooterMenu items={footerTypeBFamilySites} /></nav>}
        </div>
        {compact && (
          <Accordion className="footer-b_accordion" skin="flush" headingLevel={3} defaultValue={null}
            items={groups.map(group => ({ value: group.value, label: group.label, content: <FooterMenu items={group.links} /> }))}
          />
        )}
        <div className="footer-b_business">
          <address>
            <p>㈜멀티캠퍼스 : 서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</p>
            <div className="footer-b_business-details">
              <span>대표이사 : 안재우</span><span>사업자등록번호 : 104-81-53114</span>
              <span>통신판매신고번호 : 제2016-서울강남-00515호</span><span>개인정보 보호책임자 : 고민정 센터장</span>
            </div>
          </address>
          <p className="footer-b_copyright footer-b_copyright-desktop">© Multicampus. All rights reserved.</p>
        </div>
        <nav className="footer-b_legal" aria-label="약관 및 사업자 정보">
          {footerTypeBLegalLinks.map(item => item.href ? (
            <Link key={item.label} to={item.href} className={item.strong ? 'footer-b_privacy' : undefined} target="_blank" rel="noopener noreferrer">{item.label}</Link>
          ) : (
            <a key={item.label} href="" className={item.strong ? 'footer-b_privacy' : undefined}>{item.label}</a>
          ))}
        </nav>
        <ul className="footer-b_certifications" aria-label="수상 및 인증 정보">
          {footerTypeBCertifications.map(item => (
            <li key={item.mark}>
              <span className="footer-b_certification-mark">
                <Image src={`/images/common/footer/${item.mark}`} width={item.width} height={item.height} alt={item.alt} />
              </span>
              <span className="footer-b_certification-info">
                {item.lines.map(line => <span key={line}>{line}</span>)}
              </span>
            </li>
          ))}
        </ul>
        <p className="footer-b_copyright footer-b_copyright-mobile">© Multicampus. All rights reserved.</p>
      </div>
    </footer>
  )
}
