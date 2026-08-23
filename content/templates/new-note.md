---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:
  - spark
---
<%*
const title = tp.file.title;
let newTitle;
let sluggedNewTitle;
if (title.startsWith("Untitled")) { 
    newTitle = await tp.system.prompt("Enter note title");
    sluggedNewTitle = newTitle.replace(" ", "-").toLowerCase();
    await tp.file.rename(sluggedNewTitle);
}

tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["title"] = newTitle;
  });
});
-%>