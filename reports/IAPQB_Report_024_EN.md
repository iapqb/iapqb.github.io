# Chatbots that go off script

**How company chatbots misled customers or misbehaved, and the limits, tests and human backup now recommended**

IAPQB Report No. 24 · Practice report · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In December 2023, a user got a car dealer's chatbot to agree to sell a 2024 Chevrolet Tahoe for $1. In January 2024, a customer got DPD's parcel chatbot to swear and call DPD the "worst delivery firm in the world" [1, 2, 3, 4].
- In February 2024, a Canadian tribunal held Air Canada responsible for wrong fare advice from its chatbot [5].
- In April 2025, the AI support bot of the coding tool Cursor invented a login rule. The company apologised and began labelling AI replies [6, 7, 8].
- OWASP, NIST, a US regulator and EU law point to five practices: a narrow job, attack tests, monitoring with an off switch, a route to a person, and telling people it is AI [9, 10, 11, 12, 13].

## 1. A familiar situation

A customer service manager is asked to add an AI chatbot to the company website. In the vendor's demonstration, it answers questions about orders politely. Nobody has tried to make it insult the company, agree to a price, or state a refund rule it was never given. After launch, any customer can try.

## 2. Why it happens

A chatbot built on a general language model can write about far more than its job; the Chevrolet dealer's bot wrote computer code [1, 2]. Companies set the job in written instructions, and customers can type instructions too. The OWASP Gen AI Security Project calls this direct prompt injection, where user input "directly alters the behavior of the model in unintended or unexpected ways", and says it is unclear whether it can be fully prevented [9]. Bots can also be wrong with confidence. The US National Institute of Standards and Technology (NIST) calls this confabulation and says it is "a natural result of the way generative models are designed" [10, pp. 4, 6].

> **IAPQB view.** In all four cases, the weak point surfaced through users after launch. The fixes came later: the AI was switched off in two cases, one company was ordered to pay, and one refunded a user and labelled AI replies [1, 3, 4, 5, 8].

## 3. Four cases

### 3.1 Chevrolet dealer, 2023: a car for one dollar

In December 2023, the California dealer Chevrolet of Watsonville used a ChatGPT-based website chatbot from Fullpath [1, 2, 14]. Over one weekend, users got it to write code and, by making it "repeat after them", to agree to sell a 2024 Chevrolet Tahoe for $1 [1, 2, 14]. The bot was taken off the dealer's site [1, 3]. Fullpath's chief executive wrote that 99% of 3,000 attempts to make it say silly things failed and that the company had put in measures against such attempts [1, 14].

### 3.2 DPD, 2024: a parcel chatbot swears

In January 2024, a customer asked the chatbot of the parcel firm DPD to swear, write a poem and criticise the company. It did all three, calling DPD the "worst delivery firm in the world", and his post of it on X spread widely [3, 4]. DPD said it had used an AI element in the chat, alongside human customer service, for years. After a system update on 18 January an error occurred, and the AI element "was immediately disabled" [3, 4].

### 3.3 Air Canada, 2024: the airline answers for its chatbot

In November 2022, after a death in the family, a passenger asked Air Canada's website chatbot about bereavement fares. It said a reduced fare could be claimed within 90 days of the ticket's issue date; the airline's bereavement page said the policy did not apply after travel [5, paras 13 to 17]. The claim, made within 90 days, was refused, though a representative admitted the chatbot had provided "misleading words" [5, paras 2, 20 to 22].

On 14 February 2024, British Columbia's Civil Resolution Tribunal ruled. Air Canada had argued that it could not be liable for information from its agents or representatives, including a chatbot. The tribunal called this "a remarkable submission" and said the airline is "responsible for all the information on its website", whether from a static page or a chatbot [5, para 27]. Finding a lack of reasonable care over the chatbot's accuracy, it ordered Air Canada to pay CA$812.02, including CA$650.88 in damages [5, paras 28, 44].

### 3.4 Cursor, 2025: a support bot invents a policy

In April 2025, users of the AI coding tool Cursor were logged out when they switched computers. Support told them by email that this was expected behaviour, but the reply came from an AI bot and the policy did not exist [6, 7]. After complaints online, the company called it "an incorrect response from a front-line AI support bot" [6, 7]. A co-founder apologised and said the user had been refunded, the fault fixed and AI email replies labelled. AI-assisted replies stayed "the first filter for email support" [8].

## 4. How practitioners handle it now

**The bot's job is kept narrow.** OWASP's first measure against prompt injection is to state the model's role and limits in its instructions, "limit responses to specific tasks or topics", and tell it to ignore attempts to change its core instructions. It also lists input and output filters [9].

**The bot is attacked in tests, before launch and regularly after.** NIST suggests AI red-teaming against attacks such as prompt injection, and chaos testing to find unexpected failures [10, pp. 27, 33, 50]. OWASP recommends regular attack simulations that treat the model "as an untrusted user" [9]. NIST's monitoring plans include change management [10, p. 44]; DPD's error followed an update [3, 4].

**Chats are watched, and the AI can be switched off.** NIST suggests protocols so that generative AI systems "are able to be deactivated when necessary", with set criteria and responsibilities, and continuous monitoring of third-party systems [10, pp. 17, 22, 41 to 42]. DPD disabled its AI element at once [3, 4]. The Chevrolet bot came off the dealer's site after the vendor noticed a jump in chat traffic [1, 2, 3].

**A person can be reached.** In 2023, the US Consumer Financial Protection Bureau warned that chatbots in consumer finance can trap customers in "doom loops" with no way to reach a human, which can lead to law violations [11]. Since 19 June 2026, EU member states must give consumers of financial services sold at a distance a right "to request and to obtain human intervention" when a trader uses online tools, before the contract and in justified cases after it [12].

**The company owns the bot's words and says it is a bot.** The Air Canada tribunal treated chatbot answers like other information on the website [5, para 27], and Cursor began labelling AI replies [8]. Since 2 August 2026, the EU AI Act has required providers to design AI systems that interact directly with people so that people are "informed that they are interacting with an AI system", unless this is obvious [13, 15].

## 5. What to take from this

**For customer service staff.** At Air Canada, staff saw the chatbot's answer by email and admitted its "misleading words" a year before the ruling, yet the dispute went on [5, paras 21 to 23]. NIST asks for ways for users to report problems that feed into evaluation [10, p. 38]; complaints that staff pass on are one such route.

**For managers who buy or run chatbots.** The cases and guidance give questions for a vendor: which topics the bot refuses, how it was attacked in tests, who watches the chats, how fast the AI can be switched off, and how customers reach a person [9, 10, 11]. DPD's case shows they apply after each update [3, 4].

**For developers and testers.** NIST counts red-teaming by the general public as one type, in a section on testing before release [10, p. 50]. In the DPD and Chevrolet cases, the public did this testing after launch and posted the results [1, 3].

## 6. Limits of this report

The Chevrolet, DPD and Cursor cases rest on news reports and company statements; the original chats were not seen, and Fullpath's figures are its own [14]. The sources do not say whether DPD restored its AI element. The Air Canada ruling is one small claims decision and does not say what kind of chatbot was used [5, para 14]. No source tested whether the $1 agreement bound the dealer. The CFPB report says it imposes no obligations [11]. The EU right gives way to other EU rules for some services, and national laws applying the directive were not checked [12]. NIST is revising its AI Risk Management Framework [16]; the July 2024 profile is cited. No chatbot was tested.

## References

[1] Notopoulos, K. (18 December 2023). A car dealership added an AI chatbot to its site. Then all hell broke loose. Business Insider. https://www.businessinsider.com/car-dealership-chevrolet-chatbot-chatgpt-pranks-chevy-2023-12

[2] Masse, B. (19 December 2023). A Chevy for $1? Car dealer chatbots show perils of AI for customer service. VentureBeat. https://venturebeat.com/ai/a-chevy-for-1-car-dealer-chatbots-show-perils-of-ai-for-customer-service

[3] Gerken, T. (19 January 2024). DPD error caused chatbot to swear at customer. BBC News. https://www.bbc.co.uk/news/technology-68025677

[4] Moench, M. (20 January 2024). Delivery Firm's AI Chatbot Goes Rogue, Curses at Customer and Criticizes Company. Time. https://time.com/6564726/ai-chatbot-dpd-curses-criticizes-company/

[5] Moffatt v. Air Canada, 2024 BCCRT 149. Civil Resolution Tribunal (British Columbia), small claims decision, 14 February 2024 (file SC-2023-005609). https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do

[6] Edwards, B. (17 April 2025). Company apologizes after AI support agent invents policy that causes user uproar. Ars Technica. https://arstechnica.com/ai/2025/04/cursor-ai-support-bot-invents-fake-policy-and-triggers-user-uproar/

[7] Claburn, T. (18 April 2025). Cursor AI's own support bot hallucinated its usage policy. The Register. https://www.theregister.com/special-features/2025/04/18/cursor-ai-support-bot-hallucinated-its-own-company-policy/1015579

[8] Truell, M., posting as mntruell, "Cursor cofounder" (16 April 2025). [Comment on the Hacker News thread "Cursor IDE support hallucinates lockout policy, causes user cancellations"]. Hacker News. https://news.ycombinator.com/item?id=43700931

[9] OWASP Gen AI Security Project (page last modified 17 April 2025). LLM01:2025 Prompt Injection. Part of: 2025 Top 10 Risk & Mitigations for LLMs and Gen AI Apps. https://genai.owasp.org/llmrisk/llm01-prompt-injection/ (accessed 16 November 2026)

[10] National Institute of Standards and Technology (July 2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

[11] Consumer Financial Protection Bureau (6 June 2023). Chatbots in consumer finance. https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/

[12] European Parliament and Council of the European Union (22 November 2023). Directive (EU) 2023/2673 of the European Parliament and of the Council of 22 November 2023 amending Directive 2011/83/EU as regards financial services contracts concluded at a distance and repealing Directive 2002/65/EC [Article 1, inserting Article 16d(3) and (5) into Directive 2011/83/EU; Article 2(1)]. EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023L2673

[13] AI Act Service Desk. Article 50: Transparency obligations for providers and deployers of certain AI systems. European Commission. https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50 (accessed 16 November 2026; text based on the EUR-Lex consolidated version as at 27 July 2026)

[14] Horwitz, A. (21 December 2023). What Really Happened When Fullpath’s ChatGPT Chatbot Went Viral. Fullpath. https://www.fullpath.com/blog/what-really-happened-when-fullpaths-chatgpt-chatbot-went-viral/

[15] AI Act Service Desk. Article 113: Entry into force and application. European Commission. https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113 (accessed 16 November 2026; text based on the EUR-Lex consolidated version as at 27 July 2026)

[16] National Institute of Standards and Technology. AI Risk Management Framework [web page]. https://www.nist.gov/itl/ai-risk-management-framework (accessed 16 November 2026)

## How to cite

IAPQB (2026). Chatbots that go off script: how company chatbots misled customers or misbehaved, and the limits, tests and human backup now recommended. IAPQB Report No. 24. International AI Practice Qualification Board. https://iapqb.org/research/024-chatbots-off-script.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
