import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/arashnrim/garden",
      Blog: "https://blog.arash.codes",
      About: "https://arash.codes",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Latest thought",
        filter: (f) => {
          return f.frontmatter?.tags?.includes("thoughts") || false
        },
        limit: 1,
        linkToMore: "/tags/thoughts" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Latest knowledge",
        filter: (f) => {
          return f.frontmatter?.tags?.includes("knowledge") || false
        },
        limit: 1,
        linkToMore: "/tags/knowledge" as SimpleSlug,
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Latest thought",
        filter: (f) => {
          return f.frontmatter?.tags?.includes("thoughts") || false
        },
        limit: 1,
        linkToMore: "/tags/thoughts" as SimpleSlug,
      }),
    ),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Latest knowledge",
        filter: (f) => {
          return f.frontmatter?.tags?.includes("knowledge") || false
        },
        limit: 1,
        linkToMore: "/tags/knowledge" as SimpleSlug,
      }),
    ),
  ],
  afterBody: [
    Component.MobileOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Graph()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [],
  afterBody: [],
}
