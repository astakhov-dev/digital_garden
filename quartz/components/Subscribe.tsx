import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Subscribe: QuartzComponent = () => {
  return (
    <div class="subscribe-form">
      <p class="subscribe-title">Подписаться на рассылку</p>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/ТВОЙ_USERNAME"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.com/ТВОЙ_USERNAME', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <input type="submit" value="Подписаться" />
      </form>
    </div>
  )
}

Subscribe.css = `
.subscribe-form {
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid var(--lightgray);
}
.subscribe-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.subscribe-form input[type="email"] {
  padding: 0.4rem 0.6rem;
  margin-right: 0.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 4px;
}
.subscribe-form input[type="submit"] {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}
`

export default (() => Subscribe) satisfies QuartzComponentConstructor
