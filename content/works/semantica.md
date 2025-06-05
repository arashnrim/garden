---
title: Semantica
date: 2025-06-02
tags:
  - spark
  - works
---
A browser extension and digital literacy tool to help you scrutinise and understand the media you consume better.

# Implementation plan

## Features

- News sources: using a local-based LLM (maybe Ollama?) to highlight phrases that suggest, imply, or carry additional meaning beyond their literal wording (e.g. emotive language)
- News sources: fact-checking?

# Devlog

## 5 June 2025

* Trying to understand the core concepts of browser extensions that seem to be applicable to both Chrome and Firefox:
	* Pop-ups (the easiest to understand): HTML pages that show when you click on the extension icon in the extensions menu (usually the top-right corner of the browser)
	* Content scripts: files that run in the context of web pages — have the ability to interact, read, and alter the [[document-object-model|DOM]] 
	* Service workers (also background scripts): ephemeral (loaded when needed, unloaded when dormant) scripts that run; has no access to the DOM, but can use messaging to communicate with other components (i.e. content scripts) if needed
* Came across a common problem when attempting to scrape news sites: how do we only get the main content, instead of everything else (e.g., recommendations, ads, whitespaces) in the way?
	* Experimented with [`@mozilla/readability`](https://github.com/mozilla/readability/) — had the thought that since WXT already uses Node, this may be used
	* `@mozilla/readability` works! All hail open source
* Turns out that Hugging Face Transformers works! Came across an issue with authentication with a private model (Gemma 3) though, so will KIV for now and stick with local models with Ollama
* [[cross-origin-resource-sharing|CORS]] once again comes to ruin my life :')
	* Ollama by default limits the "Access-Control-Allow-Headers" header which might result in a failed connection because of CORS. The solution is to set these two environment variables in the system you have Ollama installed in:
		* `OLLAMA_HOST` to `0.0.0.0`
		* `OLLAMA_ORIGINS` to `*` (or more specific if you'd like)
* Prompt engineering has been super crucial in ensuring that the model understands its responsibilities, though I'm concerned that more distilled models (like Gemma 3 8B) might not entirely understand them
	* From experiments so far, thinking models (like Qwen 3 8B) seem to perform a lot better — the thinking process likely meant that these models could understand the instructions provided to them deeper
	* Ollama's API accepts a `format` value that specifies the expected JSON format the model should return. [This blog post about `format`](https://ollama.com/blog/structured-outputs) helps a lot, and it's even more helpful that [Zod can be used to define a schema and convert that to the JSON schema format](https://zod.dev/json-schema) that Ollama expects

## 2 June 2025

- Started checking out [WXT](https://wxt.dev) — seems like a pretty cool batteries-in-box solution for creating browser extensions
- Tested if Ollama (at port 11434) can be reached from the extension, and so far seems successful
- To consider: should we just make things easy and use commercial LLMs (e.g., GPT, Gemini, or Claude)?