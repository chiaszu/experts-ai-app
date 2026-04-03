# Experts AI

> **Top 15 Finalist — CMU Hack-a-Startup**

Experts AI is an AI-powered pre-consultation engine built for professional services firms — starting with law firms. It screens and qualifies every inbound inquiry against a firm's specific engagement criteria before a single billable hour is spent.

## The Problem

Professional firms lose 15–20% of weekly capacity to unqualified consultations — prospects with budget mismatches, out-of-scope needs, or missing documents. At an average billing rate of $450/hr, that adds up to $180K+ in annual losses per partner.

## The Solution

Experts AI intercepts inbound inquiries and runs them through a multi-layer screening flow:

1. **Intelligent Intake** — Prospects engage with an AI-powered intake form before any scheduling
2. **Multi-Layer Screening** — AI evaluates project merit, industry fit, budget alignment, and urgency
3. **Qualified or Redirected** — Qualified leads proceed to booking; others receive resources or referrals
4. **Informed Consultation** — Firms receive an AI-generated case brief before the meeting

Results: 87% reduction in unqualified consultations, 73% of expert time reclaimed, 94% qualification rate.

## What's in This Repo

This repo contains the **marketing landing page** for Experts AI. The full platform (client chat interface + attorney dashboard) lives in a separate repo.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS** + **shadcn/ui** — styling and components
- **React Router** — routing

## Running Locally

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

App runs at `http://localhost:8080` by default.

The demo CTA links to the Experts AI app at `http://localhost:8081/demo` — start that server separately to use the live demo.

## Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn/ui component library
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Main headline + demo CTA
│   ├── Problem.tsx       # The billable hour leak
│   ├── Solution.tsx      # How Experts AI solves it
│   ├── HowItWorks.tsx    # 4-step process
│   ├── Benefits.tsx      # ROI stats
│   ├── CTA.tsx           # Final call-to-action
│   └── Footer.tsx
└── pages/
    └── Index.tsx
```
