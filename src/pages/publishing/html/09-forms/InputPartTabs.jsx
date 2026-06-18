import { NavLink } from "react-router-dom";

const INPUT_PART_TABS = [
  {
    key: "part1",
    label: "주요 역할 및 특징",
    href: "/publishing/html/09-forms/03-input_element_part1",
  },
  {
    key: "part2",
    label: "기본 입력 필드",
    href: "/publishing/html/09-forms/03-input_element_part2",
  },
  {
    key: "part3",
    label: "선택 및 조작 요소",
    href: "/publishing/html/09-forms/03-input_element_part3",
  },
  {
    key: "part4",
    label: "숫자 및 범위",
    href: "/publishing/html/09-forms/03-input_element_part4",
  },
  {
    key: "part5",
    label: "날짜 및 시간",
    href: "/publishing/html/09-forms/03-input_element_part5",
  },
];
const TAB_SCROLL_STATE = { tabMenuScroll: true };
const TAB_SCROLL_Y_KEY = "tabMenuScrollY";

function InputPartTabs({ active = {} }) {
  const handleTabClick = () => {
    try {
      window.sessionStorage.setItem(TAB_SCROLL_Y_KEY, String(window.scrollY));
    } catch {
      // ignore
    }
  };

  return (
    <nav className="tab_menu mt_xxl" aria-label="input 파트 탭 메뉴">
      <ul className="input_part_tab two_line_tab x6">
        {INPUT_PART_TABS.map((tab) => (
          <li key={tab.key} className={active[tab.key] ? "active" : ""}>
            <NavLink
              to={tab.href}
              state={TAB_SCROLL_STATE}
              style={{ textDecoration: "none" }}
              onClick={handleTabClick}
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default InputPartTabs;
