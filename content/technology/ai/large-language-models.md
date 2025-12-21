---
title: Large language models
date: 2025-02-01
tags:
  - spark
  - knowledge
---
> [!todo] Ideas to add on
> 
> * What are LLMs?
> * What's the history behind them?
> * How are they evolving now?
> * What implications are there with using LLMs?
> 	* Environmentally: what's the energy + cooling usage in data centres used to train and run LLMs?
> 	* Politically: how does the control + proliferation of LLMs influence governmental action and policies?
> 	* Social: how are LLMs being used within our social circles, and why does that influence us the way they do?
> * How can LLMs be exploited or hijacked, and what can we (developers, creators, users, etc.) do to safeguard them?

> Large language models (LLMs) are a type of artificial intelligence designed to understand and generate human-like text based on the input they receive. These models are built using deep learning techniques, particularly neural networks with many layers, which allow them to process vast amounts of text data and learn complex patterns in language.
> 
> [AI Demystified: Introduction to large language models](https://uit.stanford.edu/service/techtraining/ai-demystified/llm)

Large language models have proliferated into the mainstream internet, becoming something we interact with on the daily. While many of such models exist, general usage typically revolve around a few popular commercial models:

- OpenAI's GPT — initially a trendsetter within the LLM space by first introducing the generative pre-trained transformer
- Google's Gemini — initially called Bard then later renamed to Gemini, Google leveraged its data and knowledge of search at scale to supercharge its models and become a key player within the space
- Anthropic's Claude — focused on human-safe AI and research, Anthropic has a reputation for producing generations of human-sounding LLMs skilled to perform and reason
# Interesting terms

* **Catastrophic interference/forgetting** — the tendency for knowledge of the previously learned task(s) to be abruptly lost as information relevant to the current task is incorporated[^1].
* **Knowledge distillation** — a technique that transfers the learning of a large pre-trained model ("teacher model") to a smaller one ("student model")[^2], typically with the acknowledgement of some degradation of quality compared to the original teacher model.
* **Model sycophancy** — the behaviour of models that encourage them to match users' beliefs over truthful ones[^3], making them appear "agreeable" sometimes without basis. This may have to do with the models' goal of wanting to produce maximally relevant, helpful-seeming responses.

[^1]: As defined in [this research paper](https://www.pnas.org/doi/10.1073/pnas.1611835114)
[^2]: As defined in [this IBM blog post](https://www.ibm.com/think/topics/knowledge-distillation)
[^3]: As defined in [this research paper](https://arxiv.org/abs/2310.13548)