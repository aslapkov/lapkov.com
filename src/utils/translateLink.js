import languages from "../data/languages"

const translateLink = (link, currentLanguage) => {
  if (currentLanguage === languages.defaultLangKey) {
    return link
  }

  return `/${currentLanguage}${
    link ? (link.startsWith("/") ? link : "/" + link) : ""
  }`
}
export default translateLink
