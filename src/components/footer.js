import React from 'react'

import footer from './footer.module.css'
import layout from './layout.module.css'

const Footer = () => (
  <footer className={layout.footerLayout}>
    <div style={{ float: `left`, weight: `50%`}}>
      <span className={footer.availablePoint}></span>
      <span className={footer.availableTag}>
        Available for Freelance Projects
      </span>
    </div>
    <div style={{ float: `right`, weight: `50%`}}>
      <div style={{ fontSize: `.7em`, }}>
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

