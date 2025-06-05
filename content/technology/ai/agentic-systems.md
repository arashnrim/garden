---
title: Agentic systems
date: 2025-02-04
tags:
  - spark
  - knowledge
---
A natural evolution of [[generative-ai|generative AI]], where several models with pre-defined roles and prompts interoperate together cohesively as a team. There's usually a focus on autonomy and a broadly-defined "free reign" of control by agents.

Frameworks like [LangChain](https://langchain.com) (+ [LangGraph](https://langchain.com/langgraph)), [AutoGen](https://microsoft.github.io/autogen/stable/), and [AutoGPT](https://agpt.co/) make implementing these systems much easier, with there generally the ability to create different agents with pre-defined models and prompts, create and assign tools for agents to use, and define the appropriate flow of the system with agents linked to each other.