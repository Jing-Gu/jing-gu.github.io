import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir}>
      <img src="/static/jgu_profile.jpeg" alt="" class="profile desktop-only" />
      <h2 class={classNames(displayClass, "page-title")}>
        {title}
      </h2>
    </a>
  )
}

PageTitle.css = `
.profile {
  width: 100px;
  height: 100px;
  border-radius: 500px;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
