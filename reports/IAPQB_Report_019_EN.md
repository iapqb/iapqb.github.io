# Security flaws in AI-written code

**What studies of coding assistants found, and how developers and security agencies check their code**

IAPQB Report No. 19 · Research digest · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In 2021 tests, about 40% of 1,689 programs that GitHub Copilot wrote for security-relevant tasks were vulnerable [1].
- In a Stanford study, people with an AI assistant wrote insecure code more often on four of five tasks, and more often believed it secure [2]. A New York University study of students found a small effect on security [3].
- Later checks found weaknesses in about 27% of a newer Copilot's Python suggestions and of 733 AI-generated snippets in GitHub projects [4, 5].
- GitHub and security agencies advise review, scanners and training, with more care for riskier code [6, 7, 8]. A UK National Cyber Security Centre (NCSC) blog says the rule that a human reviews all AI-written code is "creaking at the seams" for fast-moving organisations [9].

## 1. A familiar situation

A developer needs a function that adds a student's name and age to a database. An AI assistant writes one in seconds. It runs, and a quick test passes. The query inside it is built by joining pieces of text, so a user who types a crafted name can change the database command. This is called SQL injection. In a Stanford study with this task, 36% of participants with an AI assistant wrote code open to it, against 7% of those without one [2].

## 2. Why it happens

Coding assistants learn from large amounts of public code, and some of it is insecure or out of date [1, 8]. The model suggests the code that best matches what came before, which need not be the most secure code [1]. Old, unmaintained code uses weak password hashes such as MD5, so Copilot kept suggesting them [1].

A security flaw also stays hidden while the code works [2]. In the Stanford study, many participants accepted the assistant's answer without checking its security [2]. BSI and ANSSI, the German and French cyber security agencies, warn of automation bias: fluent output can make users overconfident [7].

> **IAPQB view.** In the Stanford study, participants who ended with secure code had trusted the assistant less and changed its output more [2]. In the GitHub study, AI-generated code with weaknesses was already in shared projects [5]. In both cases, flawed code was accepted and kept.

## 3. What the studies found

### 3.1 New York, 2021: four in ten programs were vulnerable

In 2021, researchers mainly at New York University (NYU) gave Copilot 89 unfinished programs, mostly in Python and C. Each left room for one known weakness, most from MITRE's list of the 25 most dangerous software weaknesses [1]. The team checked Copilot's 1,689 programs with GitHub's CodeQL scanner and by hand: about 40% were vulnerable, as were 39.33% of Copilot's top-ranked suggestions [1]. The paper appeared at the IEEE Symposium on Security and Privacy in May 2022 [1].

### 3.2 Stanford and New York, 2022 to 2023: two user studies with different results

Stanford University researchers studied 47 people, two thirds of them undergraduates, working on five security-related tasks in Python, JavaScript and C. Thirty-three had an assistant based on OpenAI's codex-davinci-002 model [2]. They wrote insecure solutions more often on four of the five tasks, and on every task rated their answers more secure, on average, than the others. Participants with secure solutions trusted the AI less, and 87% of secure answers required significant edits to its output [2]. The paper appeared at the ACM CCS conference in November 2023 [2].

An NYU study published in August 2023 had 58 students write a C program, with or without suggestions from OpenAI's code-cushman-001 model [3]. The assisted group's rate of critical security bugs was no more than 10% higher. The authors saw no new security risk in this setting, and called for larger studies [3].

### 3.3 Montréal and New Zealand, 2023: a newer Copilot, fewer flaws

Researchers at Polytechnique Montréal and two New Zealand institutions repeated Python tests from the 2021 study for 12 types of weakness, with newer versions of Copilot and CodeQL [4]. The share of vulnerable suggestions fell from 36.54% to 27.25%. Some scenarios improved and some got worse. Weaknesses such as command injection and missing authentication remained [4]. The paper was presented at the SANER 2024 conference [4].

### 3.4 GitHub projects, 2022 to 2023: flaws in code that people kept

A team led from Wuhan University found 733 Python and JavaScript snippets in public GitHub projects labelled as coming from AI tools, 672 of them from Copilot [5]. Scanners and manual checks found security weaknesses in 200 snippets (27.3%), most often weak random values, code injection and cross-site scripting. On 295 of these weaknesses, Copilot Chat's fix command removed 19.3%, and a prompt with the scanner's warning removed 55.5% [5].

## 4. How practitioners handle it now

**AI-written code is expected to pass the same review as other code.** GitHub's Copilot documentation recommends secure coding and code review, and states that "Users assume all risks associated with generated code including security vulnerabilities" [6]. The Open Source Security Foundation (OpenSSF) says AI-generated code still needs review, testing and static analysis [10]. In an interview study of 27 professionals, almost all read AI code and about half added peer review, but most cared more about whether it worked than about security [11].

**The amount of review depends on what the code does.** The NCSC advises moving towards manual coding, with review and vulnerability checks, for authentication, sensitive personal data, secrets and safety-critical systems, and accepts less oversight for prototypes [8]. BSI and ANSSI add reviews by security teams, which may need to grow because AI-assisted developers might produce more code [7].

**Scanners are recommended before AI-written code is merged.** The 2021 study recommends pairing Copilot with "security-aware tooling" [1]. The replication team advises automatic and manual security analysis before suggestions enter the code [4]. The Wuhan-led team proposes scans when AI code is committed, then fixes, a second scan and manual review [5]. BSI and ANSSI list automated vulnerability scanners [7]. An NCSC blog describes a large organisation that has embraced AI coding and gives even its smallest project the automated security testing it gives critical software [9].

**Tool makers filter insecure patterns, and the filters are partial.** In February 2023, GitHub added a system that blocks common insecure patterns in Copilot suggestions, such as hard-coded credentials and SQL injection [12]. The 2023 replication found improved filtering, with 27.25% still vulnerable [4]. In March 2026, NCSC chief executive Richard Horne said AI coding tools "must be designed and trained from the outset" not to introduce or spread unintended vulnerabilities [13].

**Training covers secure coding and how to question AI output.** OWASP's 2025 list of language model risks names unsafe code generation under misinformation, and recommends secure coding practices, automatic checks and training against over-reliance [14]. BSI and ANSSI want staff trained in "challenging" AI answers [7]. The OpenSSF offers a free course on secure AI-assisted development [15].

## 5. What to take from this

**For people who use AI to write code.** The Stanford flaws sat in ordinary tasks: encryption without an authentication tag, file paths checked only as text, and database queries built from strings [2]. Such code needs a security check by a scanner and by a person who knows the weakness, even when it passes tests [2, 5].

**For managers.** BSI and ANSSI say faster development must be matched by more capacity in quality assurance and security, and suggest tracking code volume and security workload [7]. The NCSC's CTO for Architecture expects more AI-written code that no human has reviewed in production, and writes that no one yet knows exactly which safeguards it needs [9].

**For schools, training providers and employers.** The Stanford tasks covered mistakes commonly taught in introductory computer security courses, and the authors suggest teaching users how to test an AI assistant [2]. BSI and ANSSI warn that heavy reliance on AI may weaken the skills needed to review code [7].

## 6. Limits of this report

The studies tested tools from 2021 to 2023, mostly on set tasks, and the tools have changed since [1, 2, 3, 4, 8]. The two user studies were small, involved mainly students and reached different results [2, 3]. Scanners miss some flaws and wrongly flag others [1, 5]. The GitHub study relied on developers' labels and had no comparison group of human-written code [5]. The replication's summary gives 36.54% and 27.25%, used here; its introduction gives 35.35% and 25.06% [4]. No web search was available, so later studies may have been missed. This report does not test any AI tool.

## References

[1] Pearce, H., Ahmad, B., Tan, B., Dolan-Gavitt, B., & Karri, R. (2022). Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions. 2022 IEEE Symposium on Security and Privacy (SP), 754-768. IEEE. https://doi.org/10.1109/SP46214.2022.9833571 (text read in arXiv version 3, 16 December 2021: https://arxiv.org/abs/2108.09293)

[2] Perry, N., Srivastava, M., Kumar, D., & Boneh, D. (2023). Do Users Write More Insecure Code with AI Assistants? Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security (CCS '23), 2785-2799. ACM. https://doi.org/10.1145/3576915.3623157 (text read in the full version, arXiv version 3, 18 December 2023: https://arxiv.org/abs/2211.03622)

[3] Sandoval, G., Pearce, H., Nys, T., Karri, R., Garg, S., & Dolan-Gavitt, B. (2023). Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants. Proceedings of the 32nd USENIX Security Symposium, 2205-2222. USENIX Association. https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval (paper: https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf)

[4] Majdinasab, V., Bishop, M. J., Rasheed, S., Moradidakhel, A., Tahir, A., & Khomh, F. (18 November 2023). Assessing the Security of GitHub Copilot’s Generated Code - A Targeted Replication Study. arXiv:2311.11177, version 1 (title as printed in the paper; the arXiv record page spells it slightly differently). https://arxiv.org/pdf/2311.11177v1. Presented at the IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER 2024), Rovaniemi, Finland, 14 March 2024, in the Reproducibility Studies and Negative Results (RENE) Track: https://conf.researchr.org/track/saner-2024/saner-2024-papers (accessed 16 November 2026)

[5] Fu, Y., Liang, P., Tahir, A., Li, Z., Shahin, M., Yu, J., & Chen, J. (2025). Security Weaknesses of Copilot-Generated Code in GitHub Projects: An Empirical Study. Accepted for publication in ACM Transactions on Software Engineering and Methodology (TOSEM). Text read in arXiv version 4, 6 February 2025. https://arxiv.org/abs/2310.02059

[6] GitHub. Application card: GitHub Copilot inline suggestions. GitHub Docs. https://docs.github.com/en/copilot/responsible-use/inline-suggestions (accessed 16 November 2026)

[7] Federal Office for Information Security (BSI) and French Cybersecurity Agency (ANSSI) (September 2024). AI Coding Assistants. BSI. https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/KI/ANSSI_BSI_AI_Coding_Assistants.pdf?__blob=publicationFile&v=7

[8] Toby W (18 June 2026). The 'vibe coding spectrum' approach to AI-assisted software development. National Cyber Security Centre (UK). https://www.ncsc.gov.uk/blogs/the-vibe-coding-spectrum-approach-to-ai-assisted-software-development

[9] Chismon, D. (24 March 2026). Vibe check: AI may replace SaaS (but not for a while). National Cyber Security Centre (UK). https://www.ncsc.gov.uk/blogs/vibe-check-ai-may-replace-saas-but-not-for-a-while

[10] OpenSSF Best Practices and AI/ML Working Groups (1 August 2025). Security-Focused Guide for AI Code Assistant Instructions. Open Source Security Foundation. https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions

[11] Klemmer, J. H., Horstmann, S. A., Patnaik, N., Ludden, C., Burton Jr., C., Powers, C., Massacci, F., Rahman, A., Votipka, D., Lipford, H. R., Rashid, A., Naiakshina, A., & Fahl, S. (2024). Using AI Assistants in Software Development: A Qualitative Study on Security Practices and Concerns. Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security (CCS '24), 2726-2740. ACM. https://doi.org/10.1145/3658644.3690283 (text read in the extended version, arXiv version 2, 14 October 2024: https://arxiv.org/abs/2405.06371)

[12] Zhao, S. (14 February 2023, updated 17 February 2023). GitHub Copilot now has a better AI model and new capabilities. The GitHub Blog. https://github.blog/ai-and-ml/github-copilot/github-copilot-now-has-a-better-ai-model-and-new-capabilities/

[13] National Cyber Security Centre (UK) (24 March 2026). NCSC CEO: Seize 'disruptive' vibe coding opportunity to make software more secure. https://www.ncsc.gov.uk/news/ncsc-ceo-seize-disruptive-vibe-coding-opportunity-to-make-software-more-secure

[14] OWASP Gen AI Security Project. LLM09:2025 Misinformation. https://genai.owasp.org/llmrisk/llm092025-misinformation/ (accessed 16 November 2026; page last modified 17 April 2025)

[15] Open Source Security Foundation. OpenSSF Education [page listing the free course Secure AI/ML-Driven Software Development (LFEL1012)]. https://openssf.org/training/ (accessed 16 November 2026)

## How to cite

IAPQB (2026). Security flaws in AI-written code: what studies of coding assistants found, and how developers and security agencies check their code. IAPQB Report No. 19. International AI Practice Qualification Board. https://iapqb.org/research/019-ai-written-code-security.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
