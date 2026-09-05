document.addEventListener("nav", () => {
  const sidebars = document.querySelectorAll<HTMLElement>(".sidebar")
  if (sidebars.length === 0) return

  let lastScrollY = window.scrollY
  let ticking = false
  const threshold = 80 // сколько прокрутить от самого верха, прежде чем начать прятать

  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const currentY = window.scrollY
      const goingDown = currentY > lastScrollY

      if (currentY > threshold && goingDown) {
        document.documentElement.classList.add("sidebars-hidden")
      } else {
        document.documentElement.classList.remove("sidebars-hidden")
      }

      lastScrollY = currentY
      ticking = false
    })
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onScroll))
})
