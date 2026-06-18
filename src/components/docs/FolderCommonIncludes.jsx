import { useLocation } from 'react-router-dom'
import { findAccessibilityPage } from '../../data/accessibilityNavigation.js'
import { findGulpPage } from '../../data/gulpNavigation.js'
import { getPublishingPageTitle, getPublishingSectionTitle } from '../../data/publishingTitles.js'

const noteModules = import.meta.glob('../../pages/**/_note.jsx', { eager: true })
const referenceModules = import.meta.glob('../../pages/**/_reference.jsx', { eager: true })

function FolderCommonIncludes({ showNote = true, showReference = true }) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  let notePath = null
  let referencePath = null
  let sectionTitle = ''
  let pageTitle = ''

  if (
    segments.length >= 4 &&
    segments[0] === 'publishing' &&
    ['html', 'css', 'scss'].includes(segments[1])
  ) {
    const [, type, category, slug] = segments
    notePath = `../../pages/publishing/${type}/${category}/_note.jsx`
    referencePath = `../../pages/publishing/${type}/${category}/_reference.jsx`
    sectionTitle = getPublishingSectionTitle(type, category)
    pageTitle = slug ? getPublishingPageTitle(type, category, slug) : ''
  }

  if (segments.length >= 4 && segments[0] === 'accessibility') {
    const [, group, section, slug] = segments
    notePath = `../../pages/accessibility/${group}/${section}/_note.jsx`
    referencePath = `../../pages/accessibility/${group}/${section}/_reference.jsx`
    const info = slug ? findAccessibilityPage(group, section, slug) : null
    sectionTitle = info?.sectionInfo?.title ?? sectionTitle
    pageTitle = info?.pageInfo?.title ?? pageTitle
  }

  if (
    segments.length >= 4 &&
    segments[0] === 'build-system' &&
    segments[1] === 'gulp'
  ) {
    const [, , section, slug] = segments
    notePath = `../../pages/buildSystem/gulp/${section}/_note.jsx`
    referencePath = `../../pages/buildSystem/gulp/${section}/_reference.jsx`
    const info = slug ? findGulpPage(section, slug) : null
    sectionTitle = info?.sectionInfo?.title ?? sectionTitle
    pageTitle = info?.pageInfo?.title ?? pageTitle
  }

  const NoteComponent = showNote && notePath ? noteModules[notePath]?.default : null
  const ReferenceComponent =
    showReference && referencePath ? referenceModules[referencePath]?.default : null

  if (!NoteComponent && !ReferenceComponent) {
    return null
  }

  return (
    <>
      {NoteComponent ? <NoteComponent sectionTitle={sectionTitle} pageTitle={pageTitle} /> : null}
      {ReferenceComponent ? (
        <ReferenceComponent sectionTitle={sectionTitle} pageTitle={pageTitle} />
      ) : null}
    </>
  )
}

export default FolderCommonIncludes
