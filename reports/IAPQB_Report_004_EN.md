# Faster on some tasks, wrong on others

**What three field studies found about where AI helps at work, and how teams can find out for themselves**

IAPQB Report No. 4 · Research digest with practice notes · Published 15 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In a 2023 experiment with 758 consultants at Boston Consulting Group, those given GPT-4 completed 12.2% more tasks, 25.1% faster, with work rated more than 40% higher in quality on tasks the AI handled well. On a task outside its abilities, they were 19 percentage points less likely to reach a correct answer [1].
- Among more than 5,000 customer support agents, an AI assistant raised issues resolved per hour by about 14% on average and by 34% for novice and low-skilled agents, with minimal effect for the most experienced [2].
- In 2025, sixteen experienced open-source developers took 19% longer on tasks when AI tools were allowed, and afterwards still believed AI had made them 20% faster [3].
- Teams that use these findings test AI on their own tasks, measure time and errors directly, and keep human review where AI is weak [1, 3, 4].

## 1. A familiar situation

A team lead hears that AI saves hours. Some colleagues rely on it every day, and others say it slows them down. Both groups can be right, because they do different tasks, and because the feeling of speed and the measured result can differ.

## 2. Why results differ

The consulting study describes a "jagged technological frontier": AI does some tasks very well and fails at others that look about as hard, and professionals find the edge between them hard to see [1]. NIST's Generative AI Profile names a related risk, human-AI configuration, which includes automation bias and over-reliance on generative AI systems [5].

> **IAPQB view.** In all three studies, the useful question was on which tasks AI helps a given person, and by how much. The answer changed with the task, the worker's experience and the tool version, and in one study the workers' own impressions pointed the wrong way [1, 2, 3].

## 3. Three studies

### 3.1 Consultants, 2023

In a Harvard Business School working paper, researchers report a field experiment with 758 consultants at Boston Consulting Group, about 7% of the firm's individual-contributor consultants. The AI was GPT-4 as it was at the end of April 2023 [1]. On 18 tasks inside the frontier, consultants with AI completed 12.2% more tasks, worked 25.1% faster and produced work rated more than 40% higher in quality than a control group. Consultants in the bottom half of the group improved by 43%, and those in the top half by 17% [1]. On a task chosen to lie outside the frontier, consultants using AI were 19 percentage points less likely to produce a correct solution [1]. The authors describe two working styles: "Centaurs", who divide the work between themselves and the AI, and "Cyborgs", who work with the AI continuously [1].

### 3.2 Customer support agents

In the working-paper version of their study, later published in The Quarterly Journal of Economics, Erik Brynjolfsson, Danielle Li and Lindsey Raymond report on 5,179 customer support agents at a company that introduced an AI assistant in stages [2]. Issues resolved per hour rose by about 14% on average. Novice and low-skilled agents improved by 34%, while the most experienced and skilled saw minimal change [2]. The authors also report better customer sentiment and higher staff retention, and suggestive evidence that the AI spread the practices of the most able workers to newer ones [2].

### 3.3 Experienced developers

The research group METR ran a randomised trial with 16 experienced open-source developers working on 246 real issues in large projects they had contributed to for years. Each issue was randomly assigned to allow or forbid AI tools; when allowed, the developers mostly used Cursor Pro with Claude 3.5 and 3.7 Sonnet [3]. With AI allowed, issues took 19% longer to complete. Before the study the developers expected AI to speed them up by 24%, and afterwards they still believed it had sped them up by 20% [3]. METR described the result as a snapshot of early-2025 tools in one setting and did not claim it held for most software work [3]. In February 2026 METR said the data from its follow-up study was an unreliable signal, partly because more developers refused to work without AI, and that the true effect was probably more favourable to AI than its new estimates showed [6].

## 4. How practitioners handle it now

**Find the frontier on your own tasks.** The consulting study found the edge of AI ability uneven and hard to see [1]. The UK Government's AI Playbook asks teams to know what AI is and what its limits are, to "employ techniques to increase the accuracy and correctness of their outputs, and have a process in place to test them", and to use the right tool for the job [4].

**Measure with numbers.** METR assigned tasks at random to AI-allowed and AI-forbidden conditions and timed them, and the developers' own estimates pointed the other way [3]. A team can borrow the idea on a small scale: take tasks of the same kind, split them at random, and compare time and error counts.

**Human control where the risk is high.** The fourth principle of the UK Playbook is meaningful human control at the right stage, including making sure "that humans validate any high-risk decisions influenced by AI" [4]. NIST names over-reliance and automation bias as part of the human-AI configuration risk [5].

**Lift newcomers, with experienced review.** The largest gains in both the support and the consulting studies went to less experienced or lower-scoring workers [1, 2]. In the consulting study, AI users also lost accuracy on the task outside the frontier [1], the kind of error an experienced reviewer is placed to catch.

**Re-test when tools change.** The consulting study used GPT-4 as of April 2023 [1]. METR now calls its 2025 results out of date and has changed its study design [3, 6].

## 5. What to take from this

**For people who use AI at work.** Keep track of the tasks where AI helped and the tasks where it got things wrong, and check the second group every time.

**For managers.** Before setting a savings target, time a small sample of real tasks with and without AI [3]. Where errors are costly, make human validation a rule [4].

**For trainers and assessors.** All three studies point to the same practical skill: judging, task by task, whether AI output can be relied on [1, 2, 3].

## 6. Limits of this report

The three studies cover three settings: consulting tasks designed by researchers, customer support at one company, and open-source software. Tools have changed since each was run. METR notes that its developers and projects do not represent most software work [3, 6]. The support figures come from the working paper; the published journal version reports 5,172 agents, and its other figures may differ slightly [2].

## References

[1] Dell'Acqua, F., McFowland III, E., Mollick, E. R., et al. (2023). Navigating the jagged technological frontier: Field experimental evidence of the effects of AI on knowledge worker productivity and quality. Harvard Business School Working Paper No. 24-013. https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf

[2] Brynjolfsson, E., Li, D., & Raymond, L. (2023). Generative AI at work. NBER Working Paper No. 31161 (revised November 2023). https://www.nber.org/papers/w31161. Published as: The Quarterly Journal of Economics, 140(2), 889-942 (2025). https://doi.org/10.1093/qje/qjae044

[3] METR (10 July 2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

[4] UK Government (10 February 2025). Artificial Intelligence Playbook for the UK Government. https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html

[5] National Institute of Standards and Technology (July 2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1), section 2. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

[6] METR (24 February 2026). We are changing our developer productivity experiment design. https://metr.org/blog/2026-02-24-uplift-update/

## How to cite

IAPQB (2026). Faster on some tasks, wrong on others: what three field studies found about where AI helps at work. IAPQB Report No. 4. International AI Practice Qualification Board. https://iapqb.org/research/004-where-ai-helps-at-work.html

## About this report

Prepared by IAPQB. Each figure comes from the sources listed, and each source was opened and checked on 15 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
