import * as React from "react"

const dataContact = {
  h1: "Contacts",
  h1Span: "Contact page",
  p: (
    <React.Fragment>
      To contact me you can send an <a href="mailto:email@lapkov.com">email</a>, message to {" "}
      <a href="https://t.me/aslapkov" target="_blank" rel="noopener noreferrer">telegram</a> {" "}
      or fill <strong>the form</strong> below. You can also find me in <strong>social networks</strong>.
    </React.Fragment>
  ),
  h4: "Contact form",
  h3: "I'll be glad to hear from you",
  fill: "Don’t fill this out:",
  name: "Name",
  message: "Message",
  loading: "Sending...",
  send: "Send message",
  success: "Your message was sent. Thanks!",
}

export default dataContact
