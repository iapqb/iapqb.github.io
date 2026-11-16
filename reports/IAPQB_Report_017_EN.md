# Packages that do not exist

**How AI coding tools invent package names, and how developers and registries respond**

IAPQB Report No. 17 · Research digest · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In a 2025 study of 16 AI coding models, 19.7% of 2.23 million suggested software packages did not exist, and many invented names came back when a question was repeated [1].
- In 2023, a researcher published an empty package under a name AI models kept inventing. It was downloaded thousands of times, and an Alibaba project told users to install it [2, 3].
- In 2026, the security firm Aikido registered an invented name that 237 public repositories told AI agents to install, and saw downloads it attributes to agents [4, 5].
- Practitioners check unfamiliar packages, lock versions and limit which packages can be installed. Registries screen for misspelt names, and most invented Python names in the 2025 study were not simple misspellings [1, 6, 7, 8].

## 1. A familiar situation

A developer asks an AI coding assistant how to do a Python task. The answer includes a pip install command for a package with a sensible name, and the developer pastes it into a terminal. If no such package exists, the command fails. If someone has published one, it installs. The pip documentation says that by default pip "involves running arbitrary code from distributions" [9]. The screen does not show who published the package, or when.

## 2. Why it happens

A code-writing model produces package names the way it produces other text. The OWASP Gen AI Security Project says hallucinations happen when models "fill gaps in their training data using statistical patterns" [10]. Invented package names are called package hallucinations, and they often sound real [1, 4, 11].

Public registries such as PyPI (Python) and npm (JavaScript) let anyone publish under an unused name [1, 4]. An attacker can test popular coding assistants, note names they often invent and publish harmful packages under them [10]. Seth Larson of the Python Software Foundation named this "slopsquatting", after typosquatting, which uses misspelt or similar names. He said counting install attempts caused by hallucinations is "difficult, and likely impossible," without more openness from AI providers [11].

> **IAPQB view.** In cases 3.1 and 3.3, the risk arose when people or agents ran an install command without checking the package. Both times, the command reached others through shared files: a company's README and instruction files for AI agents [3, 4].

## 3. Three cases

### 3.1 PyPI, 2023 to 2024: an empty package that thousands downloaded

In a Lasso Security study published on 28 March 2024, researcher Bar Lanyado asked four AI models 47,803 coding questions. Depending on the model, 22.2% to 64.5% of answers included an invented package [2, 3].

One invented name, huggingface-cli, kept appearing; the real Hugging Face tool installs under another name [3]. In December 2023 Lanyado published an empty package with that name on PyPI, plus a dummy package to estimate downloads by scanners. His post reports more than 30,000 authentic downloads in three months; The Register, citing him the same day, gave more than 15,000 [2, 3]. By February 2024, the README instructions of GraphTranslator, an Alibaba project, told users to install it, and Lanyado said a Hugging Face project had used it until he alerted the company. Alibaba did not respond to The Register [3]. On 16 November 2026 the README no longer had the command, and PyPI returned "Not Found" for the name. The sources do not say when or why [12, 13].

### 3.2 USENIX Security, 2025: one suggested package in five did not exist

In a USENIX Security 2025 paper, researchers at three US universities tested 16 code-generating models on Python and JavaScript tasks [1]. Of 2.23 million packages suggested for 576,000 code samples, 440,445 (19.7%) did not exist, with 205,474 different invented names. Commercial models averaged at least 5.2% and open-source models 21.7% [1].

Across 500 prompts that had produced invented names, each repeated ten times, 43% of those names came back every time and 39% never did. Only 13.4% of invented Python names were one or two characters away from a real package [1]. Retraining one model cut its rate from 16.14% to 2.66%, but its score on a coding test fell from 51.4% to 25.3%. The researchers informed OpenAI, Meta, DeepSeek and Mistral AI, and for ethical reasons did not publish packages under invented names [1].

### 3.3 npm, 2026: an invented command in instructions for AI agents

On 14 January 2026, a researcher at Aikido registered the npm name react-codeshift, which no one had published before [4, 5]. He had found it in "skill" files, which tell AI agents what to do, in 237 GitHub repositories. All traced back to one October 2025 commit that added 47 AI-generated skills to a public repository [4].

His package is an empty placeholder [4, 5]. Packages that nobody uses usually get downloads only on their first day, from mirrors and scanners, Aikido says; this one kept getting 1 to 4 a day, which it attributes to agents. Aikido reported no compromised systems, and said only its early registration kept the name from attackers [4]. npm counted 295 downloads by 15 November 2026, 60 of them from 17 October [5].

## 4. How practitioners handle it now

**Unfamiliar packages are checked before anyone installs them.** Germany's and France's cyber security agencies, BSI and ANSSI, advise checking when an unknown library was created, how widely it is used and how active its repository is [6]. Larson advised checking that a package is well known, that its name has no typos and that its content has been reviewed [11]. The USENIX authors warn that existence alone proves little, because an attacker can publish an invented name at once [1].

**Versions are locked, so builds install only what is listed.** The Open Source Security Foundation tells teams to have AI assistants use the official package manager and specify versions known to be secure [7]. pip can check every download against hashes recorded in advance [9]. In automated builds, npm ci installs only from a lock file and stops if it does not match the project's dependency list [14].

**Installs can be limited to approved packages.** BSI and ANSSI suggest an allowlist where a company has rules on permitted packages [6], and Larson suggested mirroring a subset of PyPI internally [11]. The USENIX authors find a curated list of known good packages better than a list of all existing names, and still call it "blunt and reactive" [1].

**Registries block some names and remove malware.** npm says it detects and blocks typosquatting, and scans packages for malicious content with Microsoft [15]. PyPI says it now flags possible typosquatting at project creation, and in 2025 handled 92% of over 2,000 malware reports within 24 hours [8]. NuGet, the .NET registry, rejects packages with a reserved prefix unless they come from the prefix's owner [16], which Lanyado found kept many invented .NET names out of attackers' reach [2]. Typosquatting checks look for misspelt names; most invented Python names in the USENIX study were not simple misspellings [1, 15].

**Instructions for AI agents are reviewed like code.** Aikido advises reviewing skill files like source code and checking, before committing an install command, that the package exists and comes from the expected publisher [4]. BSI and ANSSI add sandboxed development environments and staff awareness [6].

## 5. What to take from this

**For people who use AI to write code.** In the USENIX study, 43% of invented names came back every time a prompt was repeated, so a repeated name is no sign that a package is real [1].

**For managers.** In both field cases, the command spread through README and skill files [3, 4]. Such files can go through code review, and shared builds can install from lock files only [4, 14].

**For security teams.** Registry checks are one layer [8, 15]. BSI, ANSSI and Larson name others: an allowlist or internal mirror, sandboxing, and a software bill of materials, which later shows whether vulnerable libraries were used [6, 11].

## 6. Limits of this report

The field cases rest mainly on the researchers' own accounts, though The Register reported the first and npm's records confirm the registration date in the second [3, 5]. Download counts include automated traffic, and PyPI says they are not an accurate measure of how many people use a package [4, 17]. The two studies count differently, by answers and by packages, so their rates are not directly comparable [1, 3]. Newer models have appeared since [1]. Lanyado said in 2024 that he knew of no real attack using a package hallucination, and that such an attack "doesn't leave a lot of footsteps" [3]. None of the other sources documents one. No web search was available. This report does not test any AI tool.

## References

[1] Spracklen, J., Wijewickrama, R., Sakib, A. H. M. N., Maiti, A., Viswanath, B., & Jadliwala, M. (2025). We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs. Proceedings of the 34th USENIX Security Symposium, 3687-3706. USENIX Association. https://www.usenix.org/conference/usenixsecurity25/presentation/spracklen (paper: https://www.usenix.org/system/files/usenixsecurity25-spracklen.pdf)

[2] Lanyado, B. (28 March 2024). Diving Deeper into AI Package Hallucinations. Lasso Security. https://www.lasso.security/blog/ai-package-hallucinations

[3] Claburn, T. (28 March 2024). AI bots hallucinate software packages and devs download them. The Register. https://www.theregister.com/2024/03/28/ai_bots_hallucinate_software_packages/

[4] Eriksen, C. (21 January 2026, last updated 17 March 2026). Agent Skills Are Spreading Hallucinated npx Commands. Aikido Security. https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands

[5] npm. [Registry record and public download counts for the package react-codeshift]. https://registry.npmjs.org/react-codeshift and https://api.npmjs.org/downloads/point/2026-01-14:2026-11-15/react-codeshift and https://api.npmjs.org/downloads/point/2026-10-17:2026-11-15/react-codeshift (accessed 16 November 2026)

[6] Federal Office for Information Security (BSI) and French Cybersecurity Agency (ANSSI) (September 2024). AI Coding Assistants. BSI. https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/KI/ANSSI_BSI_AI_Coding_Assistants.pdf?__blob=publicationFile&v=7

[7] OpenSSF Best Practices and AI/ML Working Groups (1 August 2025). Security-Focused Guide for AI Code Assistant Instructions. Open Source Security Foundation. https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions

[8] Ingram, D. (31 December 2025). PyPI in 2025: A Year in Review. The Python Package Index Blog. https://blog.pypi.org/posts/2025-12-31-pypi-2025-in-review/

[9] The pip developers. Secure installs. pip documentation v26.3. https://pip.pypa.io/en/stable/topics/secure-installs/ (accessed 16 November 2026)

[10] OWASP Gen AI Security Project. LLM09:2025 Misinformation. https://genai.owasp.org/llmrisk/llm092025-misinformation/ (accessed 16 November 2026)

[11] Claburn, T. (12 April 2025). AI code suggestions sabotage software supply chain. The Register. https://www.theregister.com/2025/04/12/ai_code_suggestions_sabotage_supply_chain/

[12] Alibaba. GraphTranslator: Aligning Graph Model to Large Language Model for Open-ended Tasks [README of the GraphTranslator repository]. GitHub. https://github.com/alibaba/GraphTranslator (text read at https://raw.githubusercontent.com/alibaba/GraphTranslator/main/README.md; accessed 16 November 2026)

[13] Python Package Index. [JSON record for the project name huggingface-cli; the service answered "Not Found"]. https://pypi.org/pypi/huggingface-cli/json (accessed 16 November 2026)

[14] npm Docs. npm-ci. https://docs.npmjs.com/cli/v11/commands/npm-ci (accessed 16 November 2026)

[15] npm Docs. npm: Threats and Mitigations. https://docs.npmjs.com/threats-and-mitigations (accessed 16 November 2026)

[16] Microsoft. Package ID prefix reservation. Microsoft Learn. https://learn.microsoft.com/en-us/nuget/nuget-org/id-prefix-reservation (accessed 16 November 2026)

[17] Fiedler, M. (31 August 2026). Metadata requests no longer tracked in PyPI download counts. The Python Package Index Blog. https://blog.pypi.org/posts/2026-08-31-download-counts/

## How to cite

IAPQB (2026). Packages that do not exist: how AI coding tools invent package names, and how developers and registries respond. IAPQB Report No. 17. International AI Practice Qualification Board. https://iapqb.org/research/017-hallucinated-packages.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
