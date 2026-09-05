import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/sidebarautohide.inline"

// Компонент без разметки: только подключает скрипт, который плавно
// прячет боковые панели при скролле вниз и возвращает их при скролле вверх.
const SidebarAutoHide: QuartzComponent = (_props: QuartzComponentProps) => null

SidebarAutoHide.afterDOMLoaded = script

export default (() => SidebarAutoHide) satisfies QuartzComponentConstructor
