import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { FullSlug } from "../../util/path"
import { BuildCtx } from "../../util/ctx"

// Отдаёт /robots.txt в корне сайта (а не в /static/, куда Static-эмиттер
// кладёт статические файлы) и указывает поисковикам на sitemap.xml —
// чтобы Google быстрее находил и переобходил карту сайта.
export const RobotsTxt: QuartzEmitterPlugin = () => ({
  name: "RobotsTxt",
  async *emit({ argv, cfg }) {
    const baseUrl = cfg.configuration.baseUrl
    const lines = ["User-agent: *", "Allow: /", ""]
    if (baseUrl) {
      lines.push(`Sitemap: https://${baseUrl}/sitemap.xml`)
    }

    yield write({
      ctx: { argv } as BuildCtx,
      slug: "robots" as FullSlug,
      ext: ".txt",
      content: lines.join("\n") + "\n",
    })
  },
  async *partialEmit() {},
})
