import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Δ Delta",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://analytics.arash.codes",
      websiteId: "6446197b-3f33-438f-8c07-591881b7b36a",
    },
    locale: "en-GB",
    baseUrl: "garden.arash.codes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "General Sans",
        body: "General Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#0a0a0a",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#fffff0",
          dark: "#fffafa",
          secondary: "#ffffff",
          tertiary: "#ffffff",
          highlight: "#ffffff26",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#fffff0",
          dark: "#fffafa",
          secondary: "#ffffff",
          tertiary: "#ffffff",
          highlight: "#ffffff26",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "rose-pine-dawn",
          dark: "rose-pine",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
