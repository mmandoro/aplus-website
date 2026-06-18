# 🆘 Don't panic — how to keep working when Claude runs out

## First: your work is 100% safe
Everything is saved in **GitHub** (https://github.com/mmandoro/aplus-website) and
auto-publishes through **Netlify**. If Claude stops, **nothing is lost.** Your live
site keeps running, and you can continue from any computer with any AI.

## The only rule that matters
> **Any change saved to GitHub → Netlify publishes it automatically.**

So *any* tool that can edit a file and save it to GitHub keeps you moving.
You are never locked to one AI.

---

# Which AI to use — in priority order

## 🥇 Plan A — ChatGPT or Gemini + GitHub (free / you already have it, nothing to install)
Best when Claude is out and you just want to keep going *now*.

1. Open **ChatGPT** (chatgpt.com — you have it) or **Gemini** (gemini.google.com — free).
2. Paste the **Handoff Prompt** below so it understands the project.
3. Tell it what you want changed. Ask it to "give me the full updated file."
4. Go to https://github.com/mmandoro/aplus-website, open the file (usually `index.html`),
   click the ✏️ pencil, paste the new version, click **Commit changes**.
5. Netlify publishes in ~1 minute. Done.

> Tip: on the repo page press the `.` key to open a full editor in your browser.

## 🥈 Plan B — Cursor (free tier — closest feeling to Claude)
Best when you want the AI to edit the files for you, like Claude does.

1. Download **Cursor** (cursor.com) — free tier is fine to start.
2. Open the folder `~/aplus-website`.
3. Paste the **Handoff Prompt**, then just chat. It edits the files directly.
4. Commit + push from inside Cursor (it walks you through it) → Netlify publishes.

Alternatives that work the same way: **Windsurf** (free tier), **GitHub Copilot** in VS Code (~$10/mo).

## 🥉 Plan C — No limits, ever (pay only for what you use)
Best when you keep hitting time-based caps and never want to wait again.

- **OpenRouter** (openrouter.ai) — one login, access to very cheap models
  (Gemini Flash, DeepSeek). Plug the key into Cursor. Cents per session.
- **Anthropic Console** (console.anthropic.com) — Claude, billed per use, no daily wall.

---

# 📋 Handoff Prompt — paste this into ANY new AI first
Copy everything between the lines so the new AI instantly understands your project:

---
I'm continuing work on my business website. Here's the context:

- Business: **A-Plus Branding Technologies** — web design + AI receptionists, Cape Town.
- The whole site is plain **HTML/CSS/JavaScript** (no build step, no frameworks).
- Main file: **index.html** (one file). Blog pages live in the **/blog/** folder.
  Shared files: **assets/blog.css** (blog styling) and **assets/posts.js** (the blog post list).
- Images are in **assets/** (brand logos, hero, logos, portfolio).
- Editable settings are at the BOTTOM of index.html in two objects:
  **BIZ** (phone, WhatsApp, email, Google link) and **SITE** (hero slides, logos, portfolio, hero emblem).
- Design: dark theme, teal (#2DE1C2) + blue (#5B8DEF) accents.
  Fonts: Bricolage Grotesque (headings) + Hanken Grotesk (body). Keep this style.
- Hosting: the repo is on GitHub (mmandoro/aplus-website) and auto-deploys to **Netlify**.
  To publish a change, I just commit it to GitHub.

Please help me make this change: [DESCRIBE WHAT YOU WANT].
Give me the complete updated file so I can paste it into GitHub.
---

---

# Cheat sheet — making any change
1. Decide the change.
2. Get the code from whichever AI is available (use the Handoff Prompt).
3. Save it to GitHub (pencil → commit, or your editor pushes it).
4. Wait ~1 minute. Netlify publishes it. Refresh your site.

That's it. Claude, ChatGPT, Gemini, Cursor — mix and match. You never lose progress.
