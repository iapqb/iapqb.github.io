# Company secrets in a chatbot

**How organisations responded when staff pasted internal data into AI tools**

IAPQB Report No. 3 · Practice report · Published 15 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In spring 2023, Samsung engineers put sensitive internal source code into ChatGPT. Samsung then banned generative AI tools on company devices in a large division and warned that breaking the rule could lead to dismissal [1, 2, 3].
- Around the same time, large US banks and the Korean firms SK Hynix and POSCO Holdings also restricted staff use [2, 3].
- The UK National Cyber Security Centre warned in March 2023 that what staff type into a public AI service is visible to the provider and is stored [4].
- Organisations now combine five measures: a clear rule on what may be entered, an approved tool under business terms, technical blocks, AI inside normal risk management, and staff skills [3, 4, 5, 6, 7].

## 1. A familiar situation

An engineer has a block of failing code and a deadline. A public chatbot can suggest a fix in seconds, and pasting the code takes one keystroke. The engineer is thinking about the bug. Where the pasted text goes next is easy to forget.

## 2. Why it happens

A chat window looks like a private notebook. In fact it is a service run by another company on its own servers. In March 2023 the UK National Cyber Security Centre (NCSC) wrote that a query "will be visible to the organisation providing the LLM", and that queries are stored and "will almost certainly be used for developing the LLM service or model at some point" [4]. Bloomberg reported that Samsung gave its staff the same reason: data sent to such services is kept on outside servers and is hard to retrieve or delete [3]. Terms differ between business products and the free versions staff can open without asking anyone, and they change over time (see 3.3).

NIST's Generative AI Profile names data privacy as one of twelve risks of generative AI, covering "leakage and unauthorized use, disclosure, or de-anonymization" of personal or other sensitive data [7].

> **IAPQB view.** The people who pasted the code at Samsung were engineers doing their normal work. The ban covered tools, devices and networks. The work that had led them to paste the code remained, which is why the same reports describe Samsung building its own tools for translation, summaries and software development [2, 3].

## 3. What happened

### 3.1 Samsung, 2023

In April 2023, according to Bloomberg, Samsung engineers uploaded sensitive internal source code to ChatGPT [3]. An internal survey that month found that 65% of respondents saw generative AI as a security risk [2, 3]. In a memo sent at the end of April, Samsung banned ChatGPT, Google Bard and Bing AI on company computers, tablets and phones in its consumer devices (DX) division, and told staff not to enter company or personal information into such services from their own devices either. Use in its semiconductor division was sharply limited [2]. Bloomberg reported that the ban also covered internal networks and that breaking the rules could lead to dismissal [3], and The Register reported the same penalty [1]. Samsung confirmed the memo, which Bloomberg had seen [1].

### 3.2 Banks and Korean industry

In February 2023, JPMorgan Chase, Bank of America and Citigroup banned or restricted staff use of ChatGPT [2, 3]. In Korea, SK Hynix and POSCO Holdings barred employees from using generative AI chatbots at work, according to the Korea Economic Daily [2].

### 3.3 The provider side

From 1 March 2023, OpenAI stopped using data sent through its API to train models by default, and kept such data for up to 30 days to monitor abuse [1]. Its enterprise privacy page now states: "We do not train on your business data" [5]. The same page lists controls for business customers, including retention settings for ChatGPT Enterprise, single sign-on, a SOC 2 audit and encryption of data at rest and in transit [5].

### 3.4 Samsung's next step

Samsung said it was building its own AI tools for translation, document summaries and software development, and was working on ways to block uploads of sensitive information to outside services [2, 3].

## 4. How practitioners handle it now

**A rule on what may be entered.** The NCSC advises "not to include sensitive information in queries to public LLMs", and not to submit queries that would cause problems if they were made public [4]. Samsung extended its rule to staff's own devices [2].

**An approved tool under business terms.** OpenAI, for example, now sells business versions whose terms exclude training on customer data and give administrators control over retention and access [5]. Samsung's response included building its own tools for the same jobs [2, 3].

**Technical blocks.** Samsung worked on blocking uploads of sensitive information to outside services [3]. The UK Government's AI Playbook makes secure use one of its ten principles ("You know how to use AI securely") and asks teams to consider how they protect personal data and to minimise the risk of privacy intrusion [6].

**AI inside normal risk management.** NIST released its AI Risk Management Framework on 26 January 2023 and its Generative AI Profile in July 2024 [8, 7]. The profile names data privacy and information security among the risks organisations should manage [7].

**Staff skills.** The ninth principle of the UK Playbook is "You have the skills and expertise needed to implement and use AI" [6].

## 5. What to take from this

**For people at work.** The NCSC test is easy to apply: would it cause a problem if this query were made public [4]? If so, use the approved tool or leave the content out.

**For managers.** A ban on its own leaves the work that prompted the paste. The organisations above paired restrictions with approved or in-house tools [2, 3, 5].

**For IT and security teams.** Read each provider's business terms on training and retention, and set technical controls that match the rule on what may be entered [3, 5, 6].

## 6. Limits of this report

Details of Samsung's memo come from news reports, and the Korea Economic Daily and Bloomberg give slightly different dates. Provider terms change; the OpenAI page was read on 15 November 2026. The NCSC post dates from March 2023 and describes services as they were then.

## References

[1] Karabus, J. (2 May 2023). Samsung puts ChatGPT back in the box after 'code leak'. The Register. https://www.theregister.com/2023/05/02/samsung_generative_ai_ban/

[2] Kim, I.-H. (2 May 2023). Spooked by data leak, Samsung bans use of ChatGPT, other AI tools. KED Global (The Korea Economic Daily). https://www.kedglobal.com/artificial-intelligence/newsView/ked202305020022

[3] Bloomberg (2 May 2023). Samsung bans staff's AI use after spotting ChatGPT data leak. https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak (text read in the Taipei Times reprint of 3 May 2023: https://www.taipeitimes.com/News/biz/archives/2023/05/03/2003799008)

[4] Chismon, D., & Paul J. (14 March 2023). ChatGPT and large language models: what's the risk? National Cyber Security Centre (UK). https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk

[5] OpenAI. [Enterprise privacy page, "Our commitments"]. https://openai.com/enterprise-privacy/ (accessed 15 November 2026)

[6] UK Government (10 February 2025). Artificial Intelligence Playbook for the UK Government. https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html

[7] National Institute of Standards and Technology (July 2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1), section 2. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

[8] National Institute of Standards and Technology (26 January 2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework

## How to cite

IAPQB (2026). Company secrets in a chatbot: how organisations responded when staff pasted internal data into AI tools. IAPQB Report No. 3. International AI Practice Qualification Board. https://iapqb.org/research/003-company-data-in-chatbots.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 15 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
