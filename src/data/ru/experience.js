import * as React from "react"
import { Link } from "gatsby"

const dataExperience = [
  {
    period: `Авг 2017 - сейчас.`,
    position: `Веб-разработчик, дизайнер, SEO`,
    loc: `Фриланс – `,
    siteUrl: `https://lapkov.com`,
    siteName: `lapkov.com`,
    info: (
      <React.Fragment>
        Я узнал много информации о веб-технологиях, включая JavaScript, Node, React, 
        различные базы данных, веб-серверы и прочее. Впоследствии я создал и участвовал в десятке 
        проектов с использованием этих технологий. Я делал большинство проектов на React и Node, 
        почти все они закрытые системы. К сожалению, я не могу показать и сказать, что я в них участвовал из-за NDA. 
        Сейчас я активно изучаю все, что связано с JavaScript и всей современной сетью. На старинице проектов
        находится часть работ <Link to="/ru/works/">lapkov.com/ru/works</Link>,
        в основном это небольшие сайты, интернет-магазины, в которых я принимал участие как фрилансер.
      </React.Fragment>
    ),
  },
  {
    period: `Авг 2019 - Сен 2020.`,
    position: `Помощник веб-разработчика`,
    siteUrl: `https://exadel.com`,
    siteName: `exadel.com`,
    loc: `EXADEL, Минск – `,
    info: `Разработка веб-приложений для клиентов с использованием React, Node.js в качестве веб-сервера, MongoDB и
    Firebase в качестве базы данных. Разработка и поддержка REST-сервисов. Работал неполный рабочий день помощником
    веб-разработчика.`,
  },
  {
    period: `Июн 2017 - сейчас.`,
    position: `Веб-разработчик, SEO`,
    loc: `Sister's, Минск – `,
    siteUrl: `https://sisters.by`,
    siteName: `sisters.by`,
    info: `Поддержка, доработка, SEO и консультации для известного бренда на белорусском рынке одежды.
    Сейчас я готовлюсь к разработке и оформлению нового сайта для Sister's. Я также участвую в других
    связанных с ними проектах: primabotti.ru и primabotti.by - оптовые интернет-магазины.`,
  },
  {
    period: `Окт 2017 - Июл 2020.`,
    position: `Веб-разработчик, дизайнер, SEO`,
    loc: `Elite Nails, Гомель – `,
    siteUrl: `https://elitenails.by`,
    siteName: `elitenails.by`,
    info: `Дизайн и разработка интернет-магазина косметики для ногтей и маникюра. Веб-сайт на основе
    Wordpress + Woocommerce с использованием nginx в качестве веб-сервера.
    В настоящее время я не поддерживаю этот проект`,
  },
  {
    period: `Апр 2015 - Сен 2021.`,
    position: `Веб-разработчик, дизайнер, SEO`,
    loc: `Сати, Гомель – `,
    siteUrl: `https://sati.by`,
    siteName: `sati.by`,
    info: `Моя первая индивидуальная работа, полностью сделанная мной. Этот сайт в основном получает
    клиентов через поиск Google и Яндекс. В 2017 году я переделал этот проект и обновил всю систему.
    Веб-приложение на основе LEMP (Linux, Nginx, MySQL и PHP).`,
  },
  {
    period: `Дек 2013 - Май 2016`,
    position: `SEO`,
    loc: `Hipway & HipClub, Москва – (сайт не работает)`,
    siteUrl: ``,
    siteName: ``,
    info: `Первая работа в IT в моей жизни. Я работал удаленно специалистом по SEO в туристической компании Hipway
    и ее смежном продукте Hipclub. Здесь я вырос из рядового сотрудника до начальника отдела SEO.`,
  },
]

export default dataExperience
