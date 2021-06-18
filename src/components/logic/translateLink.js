import * as language from "../../data/languages"

const translateLink = (link, currentLanguage) => {
	if (currentLanguage === language.defaultLangKey) {
    return link
  }

  return `/${currentLanguage}${
    link ? (link.startsWith("/") ? link : "/" + link) : ""
  }`
}
export default translateLink
