import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { useStaticQuery, graphql } from "gatsby"
import { useStateMachine } from "little-state-machine"
import { updateCurrentLanguage } from "../actions/languageActions"

const Seo = ({
  location,
  title,
  description,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            siteUrl
            social {
              twitter
            }
            languages {
              langs
              defaultLangKey
            }
          }
        }
      }
    `
  )

  const { actions } = useStateMachine({ updateCurrentLanguage })

  const metaDescription = description || site.siteMetadata.description
  const { langs, defaultLangKey } = site.siteMetadata.languages
  const url = location.pathname
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/")

  React.useEffect(() => {
    actions.updateCurrentLanguage(
      getLangs(langs, langKey, getUrlForLang(homeLink, url)).filter(
        ({ selected }) => selected
      )[0].langKey
    )
  }, [])

  return (
    <Helmet
      htmlAttributes={{
        lang: langKey,
      }}
      title={title}
      // titleTemplate={`%s`}
      link={[
        {
          rel: `canonical`,
          href: url,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

Seo.defaultProps = {
  location: {
    pathname: ``
  },
  title: ``,
  description: ``,
}

Seo.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Seo
