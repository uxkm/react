# 접근성 참고 문서

화면 제작 시 참고할 KWCAG 2.2 수동 체크리스트를 보관합니다.

- [KWCAG 2.2 수동 체크리스트](./kwcag-2.2-checklist.md)

- [공통 컴포넌트 접근성 검토 (2026-11-14)](./component-review-2026-11-14.md)
- [전체 페이지·위젯·모듈 접근성 검토 (2026-11-14)](./site-review-2026-11-14.md)

가이드 자동 검사와 키보드 회귀 테스트는 `tests/browser/component-audit.spec.mjs`, `component-keyboard.spec.mjs`에 있습니다. 자동 검사 결과만으로 실제 스크린리더 사용성을 보증하지 않습니다.

전체 문서 검사는 `tests/browser/site-audit.spec.mjs`, 페이지 상호작용 검사는 `site-keyboard.spec.mjs`로 실행합니다. `AUDIT_ALL_THEMES=1`로 라이트·다크를 함께 검사합니다.
