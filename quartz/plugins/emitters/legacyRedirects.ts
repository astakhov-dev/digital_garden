import { FullSlug, resolveRelative } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
// Карта старых (кириллических) слагов на новые (транслитерированные), см.
// quartz/util/path.ts. Пересобирается вручную при переименовании заметок,
// у которых уже есть внешние ссылки на старый адрес.
import redirectMap from "../../legacy-redirects.json"

function renderRedirect(oldSlug: FullSlug, redirUrl: string): string {
  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
    <title>${oldSlug}</title>
    <link rel="canonical" href="${redirUrl}">
    <meta name="robots" content="noindex">
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${redirUrl}">
    </head>
    </html>
    `
}

export const LegacyRedirects: QuartzEmitterPlugin = () => ({
  name: "LegacyRedirects",
  async *emit(ctx) {
    for (const [oldSlug, newSlug] of Object.entries(redirectMap as Record<string, string>)) {
      const redirUrl = resolveRelative(oldSlug as FullSlug, newSlug as FullSlug)
      yield write({
        ctx,
        content: renderRedirect(oldSlug as FullSlug, redirUrl),
        slug: oldSlug as FullSlug,
        ext: ".html",
      })
    }
  },
  async *partialEmit(ctx) {
    for (const [oldSlug, newSlug] of Object.entries(redirectMap as Record<string, string>)) {
      const redirUrl = resolveRelative(oldSlug as FullSlug, newSlug as FullSlug)
      yield write({
        ctx,
        content: renderRedirect(oldSlug as FullSlug, redirUrl),
        slug: oldSlug as FullSlug,
        ext: ".html",
      })
    }
  },
})
