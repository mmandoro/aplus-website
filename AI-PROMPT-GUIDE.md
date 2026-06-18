# 🎯 How to drive the AI on your projects (without it going off the rails)

A simple system for getting exactly what you want from any AI (Claude, ChatGPT,
Gemini, Cursor) — and stopping it from "improving" things you didn't ask for.

---

## The 4-part prompt formula — use this every time

Every good request has four parts:

1. **CONTEXT** — what the project is (or "read the repo first").
2. **GOAL** — the ONE thing you want, and what "done" looks like.
3. **BOUNDARIES** — what it must NOT change.
4. **OUTPUT** — how you want it back (e.g. "the complete file").

Miss these and the AI guesses — and guessing is where it wanders off.

---

## ✅ Copy-paste prompt template

```
CONTEXT: This is my [business] website. First read the project files so you
understand it. The design is dark/teal — keep that style.

GOAL: [Exactly what you want]. It's done when [what you should see].

BOUNDARIES: Only change [the specific part]. Do NOT touch anything else —
keep the layout, colours, fonts and other sections exactly as they are.
Don't add new features I didn't ask for.

OUTPUT: Show me your plan in 2–3 bullet points first and wait for my "go".
Then give me the complete updated file.
```

---

## 🧷 Guardrail phrases (keep these handy)

Drop these into any prompt to keep the AI on a leash:

- "**Only change [X]. Do not touch anything else.**"
- "**Show me the plan first. Don't write code until I say go.**"
- "**Keep the exact same design, fonts and colours.**"
- "**Don't add features or pages I didn't ask for.**"
- "**Give me the complete updated file**, not snippets."
- "**If you're not sure, ask me — don't guess.**"
- "**Make the smallest change that achieves this.**"

---

## 👍 Good vs 👎 vague prompts

| 👎 Vague (AI wanders) | 👍 Clear (AI stays on track) |
|---|---|
| "Make the site better" | "On the homepage hero, change the headline to '…'. Nothing else." |
| "Add a contact thing" | "In the footer, add a phone link showing 061 201 7287. Keep the rest." |
| "Fix the colours" | "Change the button colour from green to teal #2DE1C2. Don't change anything else." |
| "Redo the about page" | "Rewrite only the first paragraph of about.html to say […]. Leave the layout." |

Rule of thumb: **if you can't picture the exact result, the AI can't either.**

---

## 🚦 The workflow that prevents disasters

1. **One goal per request.** Don't stack 5 changes — do them one at a time.
2. **Ask for the plan first** on anything bigger than a tiny tweak.
   ("Plan only, no code yet.") Approve it, *then* let it build.
3. **Review before publishing.** Read what changed; if it touched things you
   didn't ask about, push back.
4. **Publish, then look at the live site.** Confirm it's what you wanted.

---

## 🛟 When it goes off track — recover fast

- "**Stop. You changed things I didn't ask for. Undo those and only do [X].**"
- "**Go back to how it was before that change. Keep everything, just do [X].**"
- Worst case: **GitHub keeps every version.** You can always restore an older one
  (repo → the file → "History" → pick the good version). You can't truly break it.

---

## 🔑 Golden rules
- Be specific. Vague in = messy out.
- One change at a time.
- Tell it what NOT to touch.
- Plan first, build second.
- Save to GitHub → it publishes → check the live site.

You're the director. The AI is the worker. Tell it exactly what scene you want.
