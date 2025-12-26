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
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        // { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.Flex({
        direction: "column",
        components: [
          {
            Component: Component.RecentNotes({
              title: "Latest thought",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("thoughts") || false
              },
              limit: 1,
              linkToMore: "/tags/thoughts" as SimpleSlug,
            }),
            align: "start",
          },
          {
            Component: Component.RecentNotes({
              title: "Latest knowledge",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("knowledge") || false
              },
              limit: 1,
              linkToMore: "/tags/knowledge" as SimpleSlug,
            }),
            align: "start",
          },
          {
            Component: Component.RecentNotes({
              title: "Latest project",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("projects") || false
              },
              limit: 1,
              linkToMore: "/tags/projects" as SimpleSlug,
            }),
            align: "start",
          },
        ],
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Graph()),
    Component.Backlinks(),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Latest notes",
        limit: 3,
      }),
    ),
  ],
  // afterBody: [
  //   Component.MobileOnly(Component.TableOfContents()),
  //   Component.MobileOnly(Component.Graph()),
  // ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        // { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.Flex({
        direction: "column",
        components: [
          {
            Component: Component.RecentNotes({
              title: "Latest thought",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("thoughts") || false
              },
              limit: 1,
              linkToMore: "/tags/thoughts" as SimpleSlug,
            }),
            align: "start",
          },
          {
            Component: Component.RecentNotes({
              title: "Latest knowledge",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("knowledge") || false
              },
              limit: 1,
              linkToMore: "/tags/knowledge" as SimpleSlug,
            }),
            align: "start",
          },
          {
            Component: Component.RecentNotes({
              title: "Latest project",
              filter: (f) => {
                return f.frontmatter?.tags?.includes("projects") || false
              },
              limit: 1,
              linkToMore: "/tags/projects" as SimpleSlug,
            }),
            align: "start",
          },
        ],
      }),
    ),
  ],
  right: [
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Latest notes",
        limit: 3,
      }),
    ),
  ],
}
