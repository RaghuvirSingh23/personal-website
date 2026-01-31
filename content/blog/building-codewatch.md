---
title: "building codewatch"
date: "2025-01-15"
excerpt: "how we built a system that autonomously fixed 100k+ code defects at cisco."
tags: ["ai", "systems"]
---

at cisco, i got to work on one of those problems that sounds simple but isn't: fixing code defects at scale.

## the problem

large codebases accumulate thousands of static analysis warnings over time. these aren't style nitpicks—they're potential bugs, security issues, maintainability problems. fixing them manually takes forever.

## what we built

codewatch is a multi-agent system that:
- analyzes defects from existing tooling
- understands the context around each issue
- generates fixes autonomously  
- validates nothing breaks
- creates prs for human review

the key was making it horizontally scalable. each defect gets processed independently, so we can spin up as many workers as needed.

## results

100k+ defects fixed. got featured on openai's website. top 3 at anthropic's mcp hackathon among 400+ teams.

## what i learned

ai in production is about reliability. the technical stuff matters, but so does building systems people actually trust. validation at every step isn't optional.
