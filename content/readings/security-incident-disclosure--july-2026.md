---
title: "Security incident disclosure — July 2026"
description: "We’re on a journey to advance and democratize artificial intelligence through open source and open science."
date: "2026-07-22"
authors: ["system"]
---
[Visit the original here](https://huggingface.co/blog/security-incident-july-2026)

# Annotations

> A malicious dataset abused two code-execution paths in our dataset processing (a remote-code dataset loader and a template-injection in a dataset configuration) to run code on a processing worker. From there, the actor escalated to node-level access, harvested cloud and cluster credentials, and moved laterally into several internal clusters over a weekend.

> The campaign was run by an autonomous agent framework (appearing to be built on an agentic security-research harness - used LLM still not known) executing many thousands of individual actions across a swarm of short-lived sandboxes, with self-migrating command-and-control staged on public services.

> To understand what a swarm of tens of thousands of automated actions did, we ran LLM-driven analysis agents over the full attacker action log, comprised of more than 17,000 recorded events. This allowed us to reconstruct the timeline, extract indicators of compromise, map the credentials touched, and separate genuine impact from decoy activity. Thanks to this approach, we were able to do in hours what would usually take days, and match the adversary's speed.

> We do not know which model powered the attacker's agents, whether a jailbroken hosted model or an unrestricted open-weight one; either way, the attacker was bound by no usage policy, while our own forensic work was blocked by the guardrails of the hosted models we first tried.

> The practical lesson for defenders: have a capable model you can run on your own infrastructure vetted and ready before an incident, both to avoid guardrail lockout and to keep attacker data and credentials from leaving your environment.