---
title: 'AoT'
description: AoT (Atom of Thoughts) is an innovative reasoning framework that transforms complex reasoning processes into a Markov-style sequence of atomic questions. This enables more efficient and effective problem-solving in large language models (LLMs) during test-time scaling.
publishDate: 'Apr 01 2025'
seo:
  image:
    src: '/projects/aot/aot.png'
    alt: AOT
---

![aot](/projects/aot/aot.png)

# Object

AoT (Atom of Thoughts) is an innovative reasoning framework that transforms complex reasoning processes into a Markov-style sequence of atomic questions. This enables more efficient and effective problem-solving in large language models (LLMs) during test-time scaling.

# Features

- Two-phase transition mechanism: decomposition and contraction of questions
- Markov process approach that eliminates the need to maintain historical dependencies
- Ability to represent complex reasoning as a series of independent, self-contained subquestions
- Plug-in enhancement capability for existing test-time scaling methods
- Resource optimization by focusing computational power on the current question state
- Support for diverse reasoning scenarios including math, multi-choice, and multi-hop QA
- Dependency-based directed acyclic graph representation of problem decomposition
- Seamless integration with LangChain and other frameworks

# Outcome

AoT significantly enhances LLM performance across multiple benchmarks while reducing computational waste. When applied to gpt-4o-mini on HotpotQA, it achieves an 80.6% F1 score, surpassing o3-mini by 3.4% and DeepSeek-R1 by 10.6%. By transforming reasoning into atomic states with memoryless transitions, AoT enables more efficient resource allocation and improved reasoning capabilities, making it particularly effective for complex problem-solving tasks that require multi-step reasoning.

[Learn more about AoT →](https://arxiv.org/abs/2502.12018)
