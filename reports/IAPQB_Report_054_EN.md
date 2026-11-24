# Testing AI before trusting it

**How Singapore tests AI applications, from a government toolkit to accredited outside testers**

IAPQB Report No. 54 · Practice report · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In 2022, Singapore's Infocomm Media Development Authority (IMDA) launched AI Verify, a toolkit for organisations to test their own AI, with no guarantee that a tested system is safe [1].
- In 2025, a pilot paired 17 organisations using generative AI with 16 testing firms, and 13 of the 17 participants named finding the right test data as a major challenge [2, 3].
- A public hospital had its report summariser tested on about 100 past reports labelled by its experts [4]. Singapore's national health technology agency had its chatbot attacked with 700 generated test cases [5].
- Voluntary testing guidelines followed in January 2026. Five testing firms were accredited in October 2026, with no certification that their testing is independent [6, 7, 8].

## 1. A familiar situation

A project team in a government agency has built a chatbot that answers residents' questions from the agency's web pages. Its model scores well on public tests, and the launch is two weeks away. Nobody has written down which wrong answers are unacceptable, how many test questions are enough, or what score counts as a pass.

## 2. Why it happens

Much AI testing work focuses on the safety of the underlying models, the pilot report says [3]. Organisations launch applications, which join a model to their own data sources, processes and systems [3]. Applications add context, such as a "lower tolerance for error in a clinical application than a customer service chatbot", and more points of failure [3]. Singapore's Model AI Governance Framework for Generative AI (May 2024) says the two main methods, benchmark tests and red teaming (attacking a system on purpose), "still fall far short" of a sound assessment of model performance and safety [9]. IMDA's testing guidelines add that "each organisation must determine its own safety threshold or baseline" [6].

> **IAPQB view.** In the public-sector cases below, much of the hard work lay outside the test runs: deciding which risks mattered, defining a good answer, and getting time from busy experts [4, 5, 10]. The results stayed with each deployer and its tester, and the organisers did not see them [3, 4].

## 3. Four cases

### 3.1 Davos, 2022: a toolkit that checks the owner's own claims

In May 2022, Singapore announced AI Verify at the World Economic Forum in Davos: a testing framework and toolkit that combines technical tests with process checks [1]. The launch release said that it "does not define ethical standards", that it validates the owner's claims, and that it does not guarantee a tested system "will be free from risks or biases or is completely safe" [1]. Ten companies, including DBS Bank, Singapore Airlines, and NCS with the Land Transport Authority, had tested it or given feedback [1]. In June 2023, AI Verify was opened to the open-source community, and the AI Verify Foundation was launched [11].

### 3.2 Singapore, 2025: seventeen applications, sixteen outside testers

Singapore announced the Global AI Assurance Pilot, run by IMDA and the Foundation, at the AI Action Summit in Paris in February 2025 [12]. Each application had to use a large language or multimodal model, be live or about to go live, and be tested by an outside organisation [3]. Seventeen deployers from 10 industries, including finance, healthcare and the public sector, worked with 16 testing firms, and 16 of the 17 applications were already in production [2, 3]. Most testers used a few hundred test cases, and many pairs spent 50 to 100 hours over two to four weeks [3]. IMDA and the Foundation "sought no access to the actual results" of the tests [3].

### 3.3 Singapore, 2025: a hospital's summaries checked fact by fact

Changi General Hospital, "a major public hospital in Singapore", built an application that summarises colonoscopy and histopathology reports and, following a US guideline, suggests to doctors when a patient should next be checked [4]. Its tester, SoftServe, checked whether the application extracted eight key facts correctly, and whether its recommendation matched the guideline's answer, with the guideline written as rules in Python code [3, 4]. The tests used about 100 anonymised past reports, with answers set by the hospital's experts, and took about 30 hours of staff time [4]. Sometimes the recommendation was right although a fact was wrong [4]. The results are confidential, and the case study says real reports vary too much to be "captured within 100 documents" [4].

### 3.4 Singapore, 2026: written guidance and accredited testers

In July 2025, the pilot was expanded into a Global AI Assurance Sandbox covering agentic AI, with the aim of developing accreditation for testers [13]. In January 2026, IMDA issued version 1.0 of its Starter Kit, voluntary guidelines for testing applications built on large language models before launch [6]. On 14 October 2026, the Foundation named its first five accredited firms, each for one year: AIDX Tech, Knovel Engineering, PwC Singapore, Resaro and Vulcan [7]. All five names appear among the pilot's testers [3]. The 2024 framework had called independence "key" to objective test results [9]. The Foundation now states that it "does not certify that testing conducted by accredited testing firms are independent" [8].

## 4. How practitioners handle it now

**Risks and a pass mark come first.** The Starter Kit's first step is to name the relevant risks and set thresholds, "akin to the passing mark" [6]. Pilot deployers chose their own risks: content offending religious, cultural or racial sensitivities for a chatbot serving public-sector and utility clients in Malaysia, and wrong facts or follow-up advice for the hospital [3]. The Synapxe case warns that a score of 4.9 out of 5 "could still conceal critical risks" without a clear threshold [5].

**Test data is built for the use case, with experts.** Ready-made benchmark datasets were rarely used in the pilot, except to test content safety in public-facing applications [3]. HTX, the Home Team Science and Technology Agency, had its assistant tested with 150 documents for accuracy and 100 for attacks, including non-English inputs, and people reviewed the generated attack samples [10]. Synapxe's tester used about 500 benchmark cases and 700 generated test cases for attacks [5].

**The whole application is tested, and so are its parts.** The Starter Kit separates output testing of the end-to-end result from component testing of parts such as retrieval, filters and the system prompt [6]. The hospital's check of each extracted fact is one example [4]. GovTech, the government's technology agency, has a safety testing tool called Litmus and suggests that agencies "test systems with Litmus before launch" [14].

**People check the automated judges.** In 14 of the 17 pilot cases a language model scored the outputs, and the report says such judges "require careful design and human calibration" [3]. The hospital's tests also compared its existing automatic summary score with the tester's new checks, which used fixed rules in Python [4].

**Outside testers are used, and wider use comes in stages.** The pilot required an outside tester, although HTX's tester was "an industry partner of HTX" [3, 10]. GovTech first limited its agentic coding assistants to its own staff and low-risk systems, and tested them against attacks before a wider rollout [15]. A firm's accreditation does not cover changes made after its assessment [16].

## 5. What to take from this

**For people who build or test AI applications.** In the pilot, so much time went into deciding what and how to test that little was left for running the tests [3]. The hospital and HTX both name the coverage of their test sets as a challenge [4, 10].

**For managers who approve a launch or buy testing.** The Starter Kit sets the pass mark in its first step, before any test runs [6]. Accreditation covers a stated scope, and the buyer remains responsible for the remaining risk [16].

**For public bodies, training providers and employers.** The public-sector cases depended on experts who could name risks, define correct answers and judge automated scores, such as a designated doctor at the hospital [3, 4]. The pilot report found "inadequate appreciation" of how much this asks of them [3].

## 6. Limits of this report

Almost all sources come from IMDA, its non-profit subsidiary the AI Verify Foundation, GovTech, or pilot participants describing their own work [3]. The report does not use news coverage or independent reviews. Test results were not published, and 16 of the 17 applications were already live [3, 4]. The May 2025 draft Starter Kit named four risks; this report uses version 1.0, which names five [2, 6]. GovTech's testing platform site blocked automated access, so Litmus is described from one article [14]. No AI system was tested for this report.

## References

[1] Infocomm Media Development Authority (IMDA), Ministry of Digital Development and Information (MDDI) and Personal Data Protection Commission (PDPC) (25 May 2022). Singapore launches world's first AI testing framework and toolkit to promote transparency; Invites companies to pilot and contribute to international standards development. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/sg-launches-worlds-first-ai-testing-framework-and-toolkit-to-promote-transparency

[2] IMDA (29 May 2025). Singapore Unveils Insights from World's First Technical Testing of Real World Applications of GenAI. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/sg-unveils-insights-from-worlds-first-technical-testing-of-real-world-applications-of-genai

[3] IMDA and AI Verify Foundation (May 2025). Testing Real World GenAI Systems. Global AI Assurance Pilot, Main Report. https://aiverifyfoundation.sg/wp-content/uploads/2026/08/Assurance-Pilot-Main-Report.pdf (web version: https://aiverifyfoundation.sg/ai-assurance/2025-main-report/)

[4] IMDA and AI Verify Foundation. Medical Report Summarisation [Global AI Assurance Pilot case study: Changi General Hospital with SoftServe]. https://aiverifyfoundation.sg/wp-content/uploads/2026/08/CGH-x-Softserve.pdf (accessed 16 November 2026)

[5] IMDA and AI Verify Foundation. HealthHub AI Conversational Assistant [Global AI Assurance Pilot case study: Synapxe with AIDX Tech]. https://aiverifyfoundation.sg/wp-content/uploads/2026/08/AIDX-x-Synapxe.pdf (accessed 16 November 2026)

[6] IMDA (January 2026). Starter Kit for Testing LLM-Based Applications for Safety and Reliability, Version 1.0. https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/large-language-model-starter-kit.pdf

[7] IMDA (14 October 2026). Singapore Introduces New Initiatives to Strengthen AI Safety and Resilience. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/new-initiatives-to-strengthen-ai-safety-and-resilience

[8] AI Verify Foundation. Accredited Testers under AI Tester Accreditation Programme. https://aiverifyfoundation.sg/ai-assurance/accredited-testers/ (accessed 16 November 2026)

[9] IMDA and AI Verify Foundation (30 May 2024). Model AI Governance Framework for Generative AI: Fostering a Trusted Ecosystem. https://aiverifyfoundation.sg/wp-content/uploads/2026/06/Model-AI-Governance-Framework-for-Generative-AI-19-June-2024.pdf

[10] IMDA and AI Verify Foundation. Productivity Co-pilot [Global AI Assurance Pilot case study: Home Team Science and Technology Agency (HTX) with Knovel Engineering]. https://aiverifyfoundation.sg/wp-content/uploads/2026/08/HTX-x-Knovel.pdf (accessed 16 November 2026)

[11] IMDA (7 June 2023). Singapore launches AI Verify Foundation to shape the future of international AI standards through collaboration. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/singapore-launches-ai-verify-foundation

[12] MDDI and IMDA (11 February 2025). Singapore announces new AI Safety initiatives at the global AI Action Summit in France. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/singapore-ai-safety-initiatives-global-ai-summit-france

[13] IMDA, PDPC and AI Verify Foundation (7 July 2025). Singapore launches new tools to help businesses protect data and deploy AI in a trusted ecosystem. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/singapore-launches-new-tools-to-help-businesses-protect-data-and-deploy-ai-in-a-trusted-ecosystem

[14] Government Technology Agency of Singapore (GovTech) (21 November 2025). What is Responsible AI? Singapore's Framework & Examples. https://www.tech.gov.sg/technews/engineering-responsible-ai/

[15] IMDA (20 May 2026). Updated Model AI Governance Framework for Agentic AI. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/updated-model-ai-governance-framework-for-agentic-ai

[16] AI Verify Foundation. AI Tester Accreditation Programme. https://aiverifyfoundation.sg/ai-assurance/tester-accreditation/ (accessed 16 November 2026)

## How to cite

IAPQB (2026). Testing AI before trusting it: how Singapore tests AI applications, from a government toolkit to accredited outside testers. IAPQB Report No. 54. International AI Practice Qualification Board. https://iapqb.org/research/054-singapore-ai-testing.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
