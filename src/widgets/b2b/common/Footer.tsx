'use client'

import { useState } from 'react' // 상태 훅
import Image from 'next/image' // 이미지 최적화
import { Dropdown } from '@/comp/ui/Dropdown' // Dropdown 컴포넌트
import { Button } from '@/comp/ui/Button' // Button 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import {
  familySites, // family Sites
  footerLinks, // footer Links
  footerSocials, // footer Socials
  footerCertifications // footer Certifications
} from './footerData' // footer Data

/** 고객센터 안내부터 시작하는 B2B 공통 푸터. */
export default function Footer () {
  const [familySite, setFamilySite] = useState('')

  return (
    <footer className="footer footer_default" aria-label="멀티캠퍼스 회사 정보">
      <div className="footer_support">
        <div className="footer_support-inner">
          <div className="footer_customer">
            <a href="tel:15449001">
              <strong>고객센터 1544-9001</strong>
            </a>
            <span>평일 08:00~20:00</span>
            <span>휴일 09:00~18:00 (점심시간 12:00~13:00 제외)</span>
          </div>
          <div className="footer_tools">
            <ul className="footer_socials" aria-label="공식 SNS">
              {footerSocials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    title="새 창 열림"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <Image
                      src={`/images/common/footer/${item.image}`}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="footer_family">
              <Dropdown
                className="footer_family-dropdown"
                label="FAMILY SITE"
                placeholder="FAMILY SITE"
                value={familySite}
                onChange={setFamilySite}
                items={familySites.map((item) => ({ key: item.href, label: item.label }))}
                triggerVariant="select"
                placement="bottom-end"
                maxVisibleItems={6}
                block
              />
              <Button
                type="button"
                variant="outline"
                color="default"
                className="footer_family-go"
                disabled={!familySite}
                ariaLabel="선택한 패밀리사이트로 이동"
                title="새 창 열림"
                onClick={() => {
                  if (familySite) window.open(familySite, '_blank', 'noopener,noreferrer')
                }}
              >
                GO
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_inner">
        <ul className="footer_certifications" aria-label="수상 및 인증 정보">
          {footerCertifications.map((item) => (
            <li key={item.image}>
              <Image
                src={`/images/common/footer/${item.image}`}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </li>
          ))}
        </ul>
        <div className="footer_bottom">
          <nav className="footer_links" aria-label="하단 메뉴">
            <Link to="/b2b" className="footer_logo" aria-label="멀티캠퍼스 홈">
              <Image
                src="/images/common/logo_black.png"
                alt="multicampus"
                width={104}
                height={18}
              />
            </Link>
            {footerLinks.map((item) => {
              const external = item.href.startsWith('https://')

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={item.strong ? 'footer_privacy' : undefined}
                  target={external ? '_blank' : undefined}
                  title={external ? '새 창 열림' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <address className="footer_company">
            <p>㈜멀티캠퍼스 : 서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</p>
            <div className="footer_company-details">
              <span>대표이사 : 안재우</span>
              <span>사업자등록번호 : 104-81-53114</span>
              <span>통신판매신고번호 : 제2016-서울강남-00515호</span>
              <span>개인정보 보호책임자 : 고민정 센터장</span>
            </div>
          </address>
          <p className="footer_copyright">© Multicampus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
