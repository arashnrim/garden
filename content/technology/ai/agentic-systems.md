---
title: Agentic systems
date: 2025-02-04
tags:
  - spark
  - knowledge
---
A natural evolution of [[generative-ai|generative AI]], where several models with pre-defined roles and prompts interoperate together cohesively as a team. There's usually a focus on autonomy and a broadly-defined "free reign" of control by agents.

Frameworks like [LangChain](https://langchain.com) (+ [LangGraph](https://langchain.com/langgraph)), [AutoGen](https://microsoft.github.io/autogen/stable/), and [AutoGPT](https://agpt.co/) make implementing these systems much easier, with there generally the ability to create different agents with pre-defined models and prompts, create and assign tools for agents to use, and define the appropriate flow of the system with agents linked to each other.

> [!todo] Sources to evaluate
> 
> - [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html)
> - [The Anatomy of an Agent Harness](https://www.langchain.com/blog/the-anatomy-of-an-agent-harness)
> - [What even is the harness in AI?](https://www.redhat.com/en/blog/what-even-harness-ai)

In more modern contexts, harnesses refer to a broadly-defined group of tools, code, and frameworks that wrap around large language models to steer and guide their execution. Especially with the launch of [OpenClaw](https://openclaw.ai/) and the many harnesses that have since appeared, these harnesses power LLMs with additional capabilities — particularly in tool, memory, and token management.

Some agentic systems are focused on general-purpose execution — like [Hermes Agent](https://hermes-agent.nousresearch.com/) — while others, powered by harnesses specifically built for a conversational development style, are focused on software development and programming — like [Claude Code](https://claude.com/product/claude-code), [OpenCode](https://opencode.ai/), and [Codex](https://openai.com/codex/).

I'm currently testing out agentic systems with one of my side projects; check out [[pip|Pip]]!