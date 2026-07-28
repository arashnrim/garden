---
title: <% tp.file.title.charAt(0).toUpperCase() + tp.file.title.slice(1).replace("-", " ") %>
created: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:
  - spark
---
<%*
const title = tp.file.title;
let newTitle;
if (title.startsWith("Untitled")) { 
    newTitle = await tp.system.prompt("Enter note title");
    newTitle = newTitle.replace(" ", "-").toLowerCase();
    await tp.file.rename(newTitle);
}
-%>