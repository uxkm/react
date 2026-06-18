

function CheckMacagReferencePage() {

  return (
    <>
      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">모바일 앱 접근성 요약 보고서</h2>
      	<p className="mt_ml indent">
      		모바일 앱 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table">
      			<ul className="head">
      				<li className="guide" data-tit="검사항목(41개)">검사항목(41개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(41개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						1. 텍스트 아닌 콘텐츠 [유지]<br />
      						(KS X 3253:2016 대체텍스트)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						2. 자막 또는 수어 [강화]<br />
      						(KS X 3253:2016 자막, 수화 등의 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠는 자막 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						3. 화면해설 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">멀티미디어 콘텐츠에서 음성 정보가 없는 시각 정보는 인식할 수 있도록 화면해설을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						4. 표의 구성 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5. 콘텐츠의 선형구조 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6. 다양한 감각 지원 [통합]<br />
      						(KS X 3253:2016 명확한 지시사항)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">지시사항이나 알림정보 등은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 다양한 감각으로 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7. 방향 설정 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 특정 화면 방향으로만 고정하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8. 입력 목적 식별 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 서식의 목적은 식별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						9. 색에 무관한 콘텐츠 [유지]<br />
      						(KS X 3253:2016 색에 무관한 인식)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 색에 관계없이 인식할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						10. 소리 자동 재생 [유지]<br />
      						(KS X 3253:2016 자동재생 금지)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">소리는 자동으로 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						11. 콘텐츠의 명도대비 [강화]<br />
      						(KS X 3253:2016 명도대비)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠와 배경 간의 명도는 충분하게 대비되도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						12. 콘텐츠 간의 구분 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">이웃한 콘텐츠는 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						13. 텍스트 크기 조정 [강화]<br />
      						(KS X 3253:2016 폰트기능의 활용)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용이나 기능의 손실 없이 200%까지 크기 조정이 가능해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						14. 이미지 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 이미지로 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						15. 리플로우 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 화면 크기에 따라 손실 없이 표시되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						16. 텍스트 간격 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트는 내용과 기능의 손실 없이 간격을 조정할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						17. 초점 이동과 표시 [유지]<br />
      						(KS X 3253:2016 초점)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">의미나 기능을 갖는 모든 콘텐츠 요소는 초점이 적용되고, 초점은 논리적인 순서로 이동해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						18. 조작 가능한 크기 [현행화]<br />
      						(KS X 3253:2016 컨트롤의 크기와 간격)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력 및 컨트롤은 조작 가능한 충분한 크기로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						19. 단일 문자 단축키 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 문자 단축키는 오동작으로 인한 오류를 방지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						20. 응답시간 조절 [유지]<br />
      						(KS X 3253:2016 응답 시간 조절)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						21. 움직임 제어 [유지]<br />
      						(KS X 3253:2016 정지 기능 제공)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						22. 깜빡임과 번쩍임 [유지]<br />
      						(KS X 3253:2016 깜박거림의 사용 제한)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						23. 제목 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						24. 링크 텍스트 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						25. 다양한 탐색 방법 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">콘텐츠는 다양한 방법으로 탐색할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						26. 단일 포인터 입력 [유지]<br />
      						(KS X 3253:2016 누르기 동작 지원)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">다중 포인트 동작 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						27. 포인터 입력 취소 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						28. 네임 안의 레이블 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						29. 동작기반 작동 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						30. 기본 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">주로 사용하는 언어는 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						31. 부분 언어 표시 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">기본 언어와 구별되는 다른 언어는 해당 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						32. 사용자 요구에 따른 실행 [유지]<br />
      						(KS X 3253:2016 예측가능성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자가 의도하지 않은 기능은 자동적으로 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						33. 사용자 인터페이스 컴포넌트의 일관성 [강화]<br />
      						(KS X 3253:2016 사용자 인터페이스의 일관성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 일관성 있게 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						34. 도움 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">도움 정보가 제공되는 경우, 각 페이지에 동일한 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						35. 오류 정정 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						36. 레이블 [분리]<br />
      						(KS X 3253:2016 입력도움)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						37. 오류 방지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 정보가 제출되기 전 되돌리기 어려운 오류를 방지할 수 있는 수단을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						38. 반복 입력 정보 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">동일한 정보를 반복하여 입력하지 않도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						39. 접근 가능한 인증 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						40. 사용자 인터페이스 컴포넌트 [강화]<br />
      						(KS X 3253:2016 보조기술과의 호환성)
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">사용자 인터페이스 컴포넌트는 보조기술을 이용하여 사용할 수 있도록 해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						41. 상태 메시지 [신규]
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">중요한 상태 메시지는 보조기술 사용자에게도 전달되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      </section>

      <footer className="reference_box">
      	<strong className="tit"> - 모바일 앱 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/mobile/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility at W3C</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/mobile-accessibility-mapping/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile</a></li>
      		<li className="reference"><a href="https://www.w3.org/news/2015/first-public-working-draft-performance-timeline-level-2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C First Public Working Draft</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UAAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C User Agent Accessibility Guidelines (UAAG) 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Mobile Accessibility Examples from UAAG 2.0 Reference</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN Mobile accessibility checklist</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" target="_blank" rel="noreferrer" title="새창 열림" className="fas">보건복지부 블로그</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckMacagReferencePage
