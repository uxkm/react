export const GULP_DEFAULT_LAYOUT = {
  type: 'build_system',
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
}

export const gulpNavigation = [
  {
    key: '01-gulp_start',
    title: 'Gulp 시작',
    pages: [
      {
        slug: '01-intro',
        title: '걸프(Gulp)란?',
        mainClass: 'gulp-intro',
        description:
          'Gulp는 자바스크립트 기반의 빌드 자동화 도구로, 파일 변환, 최적화, 웹 서버 실행 등 반복적인 작업을 자동화하여 개발 효율성을 높이는 도구입니다. 이 페이지에서는 Gulp의 기본 개념과 주요 기능을 설명합니다.',
        keyword:
          '걸프, Gulp, 걸프란?, Gulp 란?, 빌드시스템, Build System, Web Server, Live Reload, SCSS 컴파일, javascript 트랜스파일',
      },
      {
        slug: '02-gulp_of_uxkm',
        title: 'UXKM의 Gulp',
        mainClass: 'gulf_of_uxkm',
        contentList: false,
        description:
          'UXKM의 Gulp 강의는 실무에서 사용할 수 있는 빌드 시스템을 구축하는 방법을 단계별로 학습할 수 있도록 구성되었습니다. 이 페이지에서는 UXKM Gulp 강의의 목적과 학습 내용을 소개합니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build System, UXKM Gulp',
      },
    ],
  },
  {
    key: '02-scaffolding',
    title: 'Gulp 기본 설정',
    pages: [
      {
        slug: '01-folder_terminal',
        title: '폴더 생성 및 터미널 활용',
        mainClass: 'folder_terminal',
        description:
          'Gulp 프로젝트를 시작하기 위해서는 먼저 작업할 폴더를 생성하고 터미널을 활용하여 기본적인 명령어를 실행할 수 있어야 합니다. 이 페이지에서는 Gulp를 세팅할 폴더 생성 방법과 터미널 활용 기초 정보를 다룹니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build System, Gulp 기본 세팅, Terminal, 터미널',
      },
      {
        slug: '02-nodejs_npm',
        title: 'Node.js와 NPM',
        mainClass: 'nodejs_npm',
        description:
          'Node.js는 자바스크립트를 서버 환경에서 실행할 수 있게 해주는 런타임 환경이며, NPM(Node Package Manager)은 Node.js 패키지를 관리하는 도구입니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build System, Node.js, node, NPM, npm, npm install',
      },
      {
        slug: '03-package_json',
        title: 'package.json 생성',
        mainClass: 'package_json',
        description:
          'package.json은 Node.js 프로젝트의 메타데이터와 의존성 패키지 정보를 담는 파일로, 프로젝트의 이름, 버전, 스크립트, 설치된 패키지 목록 등을 관리합니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build, package.json, package',
      },
      {
        slug: '04-base_setting',
        title: 'Gulp 기초 세팅',
        mainClass: 'base_setting',
        description:
          'Gulp를 사용하기 위해서는 전역 및 지역에 Gulp를 설치하고, 프로젝트 디렉터리 구조를 설정하며 테스트를 위한 기초 파일을 생성해야 합니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, 전역설치, 지역설치, gulp dev, gulpfile.js, gulp build',
      },
      {
        slug: '05-gulp_babel',
        title: 'Gulp + Babel',
        mainClass: 'gulp_babel',
        description:
          'Babel은 최신 자바스크립트 문법(ES6+)을 구형 브라우저에서도 동작하도록 변환해주는 트랜스파일러로, Gulp에 Babel을 통합하면 최신 문법을 사용할 수 있는 개발 환경을 구축할 수 있습니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build, Babel, gulp-babel, register, core, preset-env',
      },
    ],
  },
  {
    key: '03-gulp_api',
    title: 'Gulp 기본 API',
    pages: [
      {
        slug: 'gulp_api',
        title: '기본 문법',
        mainClass: 'gulp_syntax',
        description:
          'Gulp API는 빌드 작업을 구성하기 위한 핵심 메서드들로, gulp.task(), gulp.src(), gulp.dest(), gulp.watch() 등이 있으며 각각의 역할과 사용법을 이해하면 다양한 빌드 작업을 구현할 수 있습니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, gulp api, gulp task, gulp src, gulp dest, gulp pipe, gulp watch',
      },
    ],
  },
  {
    key: '04-gulp_njk',
    title: 'HTML 편집 (Gulp NJK)',
    pages: [
      {
        slug: '01-njk_setting',
        title: 'Gulp NJK 세팅',
        mainClass: 'njk_setting',
        description:
          'gulp-nunjucks-render는 Gulp 환경에서 Nunjucks 템플릿 엔진을 사용하여 HTML을 편리하게 편집할 수 있도록 해주는 플러그인입니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build, gulp-nunjucks-render, gulp-njk, html 편집, html include',
      },
      {
        slug: '02-njk_syntax',
        title: 'Gulp NJK 문법',
        mainClass: 'njk_syntax',
        description:
          'Nunjucks는 자바스크립트 기반의 템플릿 엔진으로, HTML 파일에 변수, 반복문, 조건문 등을 사용하여 동적인 콘텐츠를 생성할 수 있게 해줍니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, gulp-nunjucks-render, gulp-njk, html 편집, njk 문법, gulp-nunjucks-render syntax',
      },
    ],
  },
  {
    key: '05-ws_watch',
    title: 'Web Server & Watching Files',
    pages: [
      {
        slug: '01-webserver',
        title: 'Web Server',
        mainClass: 'gulp_webserver',
        description:
          'gulp-webserver는 Gulp 환경에서 로컬 웹 서버를 간편하게 실행할 수 있게 해주는 플러그인으로, 개발 중인 프로젝트를 브라우저에서 바로 확인할 수 있도록 도와줍니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build, gulp-webserver, 걸프 웹 서버, webserver, 웹 서버',
      },
      {
        slug: '02-watch',
        title: 'Watching Files',
        mainClass: 'gulp_watch',
        description:
          'Gulp의 watch 기능은 파일 변경을 감지하여 자동으로 빌드 작업을 실행하고, 웹 서버와 연동하여 변경 사항을 실시간으로 브라우저에 반영할 수 있게 해줍니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, gulp-watch, 실시간 파일 감시, watch, webserver, Watching Files',
      },
    ],
  },
  {
    key: '06-assets',
    title: 'Assets 세팅',
    pages: [
      {
        slug: '01-scss_compilation',
        title: 'SCSS 컴파일',
        mainClass: 'scss_compilation',
        description:
          'SCSS는 CSS 전처리기로, 변수, 중첩, 믹스인 등 고급 기능을 사용하여 더 효율적으로 스타일을 작성할 수 있으며 Gulp 환경에서 SCSS를 CSS로 컴파일하는 작업을 자동화할 수 있습니다. 이 페이지에서는 SCSS를 Gulp 환경에서 설정하여 CSS 전처리기를 세팅하는 방법을 알아봅니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, SASS(SCSS), SCSS, gulp-scss, dart-sass, SCSS 컴파일, CSS 전처리기',
      },
      {
        slug: '02-babel_support',
        title: 'JS - Babel Support',
        mainClass: 'babel_support',
        description:
          'Babel은 최신 자바스크립트 문법을 구형 브라우저에서도 동작하도록 변환해주는 트랜스파일러로, Gulp에 Babel을 통합하면 ES6+ 문법을 사용하여 개발하고 자동으로 변환된 코드를 배포할 수 있습니다. 이 페이지에서는 Gulp에 Babel을 통합하여 ES6+ 문법을 사용할 수 있는 빌드 환경을 설정하는 방법을 소개합니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, Babel, Babel Support, javascript, gulp-bro, babelify, uglifyify, gulp-babel, es2016, Transpiler, 트랜스파일러',
      },
      {
        slug: '03-image_optimization',
        title: 'image 최적화',
        mainClass: 'image_optimization',
        description:
          '이미지 최적화는 웹 페이지의 로딩 속도를 개선하기 위해 이미지 파일의 크기를 줄이는 작업으로, gulp-image 플러그인을 사용하면 PNG, JPEG, GIF, SVG 등의 이미지를 자동으로 최적화할 수 있습니다. 이 페이지에서는 gulp-image를 이용하여 PNG, JPEG, GIF, SVG 등의 이미지를 최적화하는 방법을 소개합니다.',
        keyword: '걸프, Gulp, 빌드시스템, Build, gulp-image, 이미지 최적화, Image Optimization',
      },
    ],
  },
  {
    key: '07-deploying',
    title: '배포(Deploying)',
    pages: [
      {
        slug: '01-repository_push',
        title: '원격 저장소 생성과 Push',
        mainClass: 'repository_push',
        description:
          'GitHub는 코드 버전 관리와 협업을 위한 플랫폼으로, 원격 저장소를 생성하고 Gulp로 제작한 결과물을 Git을 통해 원격 저장소에 Push하여 관리할 수 있습니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, GitHub, 원격 저장소, 저장소, Repository, git, git add, pull, push, commit',
      },
      {
        slug: '02-github_deploy',
        title: 'GitHub에 배포',
        mainClass: 'github_deploy',
        description:
          'GitHub Pages는 GitHub 저장소의 정적 웹사이트를 무료로 호스팅해주는 서비스로, gulp-gh-pages 플러그인을 사용하면 Gulp로 제작한 결과물을 자동으로 GitHub Pages에 배포할 수 있습니다. 이 페이지에서는 Gulp로 제작한 결과물을 gulp-gh-pages를 이용하여 GitHub에 배포하는 방법을 알아봅니다.',
        keyword:
          '걸프, Gulp, 빌드시스템, Build, 배포, Deploying, Deploy, gulp-gh-pages, gh-pages, 깃허브 배포',
      },
    ],
  },
]

export function findGulpPage(sectionKey, slug) {
  const sectionInfo = gulpNavigation.find((item) => item.key === sectionKey)
  if (!sectionInfo) return null

  const pageInfo = sectionInfo.pages.find((item) => item.slug === slug)
  if (!pageInfo) return null

  return { sectionInfo, pageInfo }
}

/** GNB 순서 기준 depth3·depth4 번호 (1-based). */
export function getGulpPageNumbering(sectionKey, slug) {
  let sectionIndex = 1
  let pageIndex = 1

  for (const section of gulpNavigation) {
    if (section.key === sectionKey) {
      pageIndex = section.pages.findIndex((page) => page.slug === slug) + 1
      if (pageIndex === 0) pageIndex = 1
      return {
        sectionDataNumber: `${sectionIndex}. `,
        h1DataNumber: `${sectionIndex}.${pageIndex}. `,
      }
    }
    sectionIndex += 1
  }

  return { sectionDataNumber: '1. ', h1DataNumber: '1.1. ' }
}

/** GNB·사이트맵 1뎁스 링크 */
export const GULP_HOME_HREF = `/build-system/gulp/${gulpNavigation[0].key}/${gulpNavigation[0].pages[0].slug}`
