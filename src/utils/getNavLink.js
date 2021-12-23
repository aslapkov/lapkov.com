import translateLink from "./translateLink"

export default function getNavLink(path, selectedLanguage) {
  const i18nPagePathRegex = /^([a-z]{2})(\/\S+|\?.+)/
  const i18nHomePageRegex = /^[a-z]{2}$/
  const i18nPageMatched = path.match(i18nPagePathRegex)
  const isHomePage = i18nHomePageRegex.test(path)

  if (selectedLanguage === "en") {
    if (isHomePage) {
      return "/"
    }
    if (i18nPageMatched != null) {
      return i18nPageMatched[2]
    }
    return path
  }

  const targetPath =
    i18nPageMatched != null
      ? i18nPageMatched[2].substr(1)
      : isHomePage
      ? ""
      : path
  return translateLink(targetPath, selectedLanguage)
}
