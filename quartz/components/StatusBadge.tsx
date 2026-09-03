import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const StatusBadge: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const status = fileData.frontmatter?.status as string | undefined
  if (!status) return null
  return <span class="status-badge">{status}</span>
}

StatusBadge.css = `
.status-badge {
  display: inline-block;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: var(--lightgray);
  font-size: 0.8rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}
`

export default (() => StatusBadge) satisfies QuartzComponentConstructor