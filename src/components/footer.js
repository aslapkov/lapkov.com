import React from 'react'

import footerStyle from './footer.module.css'
import layoutStyle from './layout.module.css'

const Footer = () => (
  <footer className={layoutStyle.footerLayout}>
    <div style={{ float: `left`, weight: `50%`}}>
      <span className={footerStyle.availablePoint}></span>
      <span className={footerStyle.availableTag}>Available for Freelance Projects.</span>
    </div>
    <div style={{ float: `right`, weight: `50%`}}>
      <div style={{ fontSize: `.8em`, }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://github.com/aslapkov/lapkov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </div>
    </div>
  </footer>
)

export default Footer

