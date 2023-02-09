import * as React from "react"

const dataContact = {
  h1: "Контакты",
  h1Span: "Страница контактов",
  p: (
    <React.Fragment>
      Чтобы связаться со мной, вы можете отправить <a href="mailto:email@lapkov.com">email</a>, сообщение в {" "}
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">telegram</a> {" "}
      или заполнить <strong>форму</strong> ниже. Вы также можете найти меня в <strong>социальных сетях</strong>.
    </React.Fragment>
  ),
  h4: "Контактная форма",
  h3: "Буду рад услышать вас",
  fill: "Не заполняйте это:",
  name: "Имя",
  message: "Сообщение",
  loading: "Идет отправка...",
  send: "Отправить сообщение",
  success: "Ваше сообщение было отправлено. Спасибо!",
}

export default dataContact
