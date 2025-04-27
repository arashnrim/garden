function toggleCallout(this: HTMLElement) {
  const outerBlock = this.parentElement!
  outerBlock.classList.toggle("is-collapsed")
  const content = outerBlock.getElementsByClassName("callout-content")[0] as HTMLElement
  if (!content) return
  const collapsed = outerBlock.classList.contains("is-collapsed")
  content.style.gridTemplateRows = collapsed ? "0fr" : "1fr"
}

function setupCallout() {
  const collapsible = document.getElementsByClassName(
    `callout is-collapsible`,
  ) as HTMLCollectionOf<HTMLElement>
  for (const div of collapsible) {
    const title = div.firstElementChild

    if (title) {
      title.addEventListener("click", toggleCallout)
      window.addCleanup(() => title.removeEventListener("click", toggleCallout))

      const collapsed = div.classList.contains("is-collapsed")
      const height = collapsed ? title.scrollHeight : div.scrollHeight
      div.style.maxHeight = height + "px"
    }
  }
}

document.addEventListener("nav", setupCallout)
window.addEventListener("resize", setupCallout)
