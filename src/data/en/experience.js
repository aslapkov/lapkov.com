import * as React from "react"
import { Link } from "gatsby"

const dataExperience = [
  {
    period: `Aug 2017 - pres.`,
    position: `Web developer, designer, SEO`,
    loc: `Freelance – `,
    siteUrl: `https://lapkov.com`,
    siteName: `lapkov.com`,
    info: (
      <React.Fragment>
        I've learned a lot of information about web technologies, including JavaScript, Node, React,
        different databases, web servers and other. Afterwards I've created and participated in a dozen projects
        using these technologies. I did most of these projects on React and Node, they are all closed systems.
        Unfortunately I can't show and tell that I participated in them of the NDA. Now I'm diligently studying everything
        related to JavaScript and the whole modern web. There are some projects in the works page{" "}
        <Link to="/works/">lapkov.com/works</Link>, this is mostly small sites, online stores,
        in which I took part as a freelancer.
      </React.Fragment>
    ),
  },
  {
    period: `Aug 2019 - Sep 2020.`,
    position: `Assistant Web dev`,
    loc: `EXADEL, Minsk – `,
    siteUrl: `https://exadel.com`,
    siteName: `exadel.com`,
    info: `Developing web apps for clients using React, Node.js as a web server, MongoDB and Firebase as a database.
    Development and support of REST services. Worked part-time as a web developer assistant.`,
  },
  {
    period: `Jun 2017 - pres.`,
    position: `Front-end dev, SEO`,
    loc: `Sister's, Minsk – `,
    siteUrl: `https://sisters.by`,
    siteName: `sisters.by`,
    info: `Support, revision, SEO and consultations for a famous brand in Belarusian clothing market.
    Now I'm getting ready to develop and design a new site for Sister's. I also participate in other projects
    related to them: primabotti.ru and primabotti.by - wholesale online stores. I support them for couple of
    hours a week too.`,
  },
  {
    period: `Oct 2017 - Jul 2020.`,
    position: `Front-end dev, designer, SEO`,
    loc: `Elite Nails, Gomel – `,
    siteUrl: `https://elitenails.by`,
    siteName: `elitenails.by`,
    info: `Design and development online store of cosmetics for nails and manicure.
    Web site based on Wordpress + Woocommerce using nginx as a web server. Currently I don't support this project`,
  },
  {
    period: `Apr 2015 - Sep 2021.`,
    position: `Front-end dev, designer, SEO`,
    loc: `Sati, Gomel – `,
    siteUrl: `https://sati.by`,
    siteName: `sati.by`,
    info: `My first individual work that is completely done by myself. This site mainly gets customers through
    the Google and Yandex search. In 2017, I redesigned this project and updated the entire system. Web app based
    on LEMP (Linux, Nginx, MySQL, and PHP).`,
  },
  {
    period: `Dec 2013 - May 2016`,
    position: `SEO`,
    loc: `Hipway & HipClub, Moscow – (site does not work)`,
    siteUrl: ``,
    siteName: ``,
    info: `The first IT work in my life. I worked remotely as a SEO specialist in a travel company Hipway and
    their related product Hipclub. Here I grew from an ordinary employee to the head of SEO departament.`,
  },
]

export default dataExperience
