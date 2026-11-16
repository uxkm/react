import FooterTypeA from './FooterTypeA'
import FooterTypeB from './FooterTypeB'

/** 기존 원본은 typeA, 현재 시안은 typeB로 구분합니다. */
export default function Footer ({ designType = 'typeB' }: { designType?: 'typeA' | 'typeB' }) {
  return designType === 'typeA' ? <FooterTypeA /> : <FooterTypeB />
}
