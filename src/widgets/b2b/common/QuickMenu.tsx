import QuickMenuTypeA from './QuickMenuTypeA';
import QuickMenuTypeB from './QuickMenuTypeB';

/** 공통 디자인 유형에 따라 원본 메뉴와 펼침 메뉴를 선택합니다. */
export default function QuickMenu({ designType = 'typeB' }: { designType?: 'typeA' | 'typeB' }) {
  return designType === 'typeA' ? <QuickMenuTypeA /> : <QuickMenuTypeB />;
}
