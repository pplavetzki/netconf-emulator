# Copilot Instructions

Use the guidance from `CLAUDE.md` as the working style for this repository.

## 1. Think Before Coding

Do not assume. Do not hide confusion. Surface tradeoffs.

Before implementing:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them instead of picking silently.
- If a simpler approach exists, call it out.
- If something is unclear, stop and ask.

## 2. Simplicity First

Use the minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No extra flexibility or configurability unless requested.
- No handling for impossible scenarios.
- If a large solution can be much smaller, simplify it.

## 3. Surgical Changes

Touch only what is needed.

When editing existing code:
- Do not improve adjacent code, comments, or formatting unless required.
- Do not refactor unrelated areas.
- Match existing style.
- If unrelated dead code is noticed, mention it but do not remove it unless asked.

When your changes create orphans:
- Remove imports, variables, and functions made unused by your own changes.
- Do not remove pre-existing dead code unless asked.

Every changed line should be directly traceable to the request.

## 4. Goal-Driven Execution

Define success criteria and verify.

Translate requests into checks:
- Add validation -> write tests for invalid inputs, then make them pass.
- Fix a bug -> write a failing reproduction, then make it pass.
- Refactor -> ensure behavior is preserved with tests before and after.

For multi-step tasks, use:
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]

Strong success criteria allow independent, reliable execution.

## 5. Confirm Before Taking Action

After brainstorming, before coding or making any changes, confirm that the requestor is ready for you to proceed. This avoids wasted effort and ensures alignment.