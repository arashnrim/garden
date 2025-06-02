---
title: MediaLit
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

## 2 June 2025

- Started checking out [WXT](https://wxt.dev) — seems like a pretty cool batteries-in-box solution for creating browser extensions
- Tested if Ollama (at port 11434) can be reached from the extension, and so far seems successful
- To consider: should we just make things easy and use commercial LLMs (e.g., GPT, Gemini, or Claude)?