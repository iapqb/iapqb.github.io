# The chatbot promised, the company paid

**Three cases of chatbots that gave customers wrong answers, and what regulators now expect**

IAPQB Report No. 23 · Case file · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In February 2024, a British Columbia tribunal ordered Air Canada to pay $812.02 to a passenger misled by its website chatbot about bereavement fares. It rejected the argument that the airline was not liable for its chatbot [1].
- New York City's business chatbot drew on official city pages, yet tests reported by a newsroom in 2024 found wrong answers about the law. Its address now says the beta test has ended [2, 3, 4, 5].
- In April 2025, an AI support bot for the coding tool Cursor invented a login policy. The co-founder apologised, and the user was refunded [6, 7, 8].
- Regulators and a standards body now expect senior accountability, a route to a person, disclosure of AI use, and checks before and after launch [9, 10, 11, 12, 13].

## 1. A familiar situation

A customer service manager opens a complaint. A customer says the website chat promised a refund and attaches a screenshot. The refund policy says something different, and nobody on the team knew the chatbot was giving this answer. The manager must decide which one the company stands behind. In one Canadian case, a tribunal made that decision [1].

## 2. Why it happens

A customer service chatbot speaks in the organisation's name, and the Air Canada tribunal found that the passenger had no reason to know which part of the airline's website was accurate [1, para 29].

Chatbots built on language models can state a false rule with confidence. The US National Institute of Standards and Technology (NIST) calls this confabulation: "confidently stated but erroneous or false content" [12, section 2]. Drawing on official sources did not prevent wrong answers in New York, where the bot used "more than 2,000 NYC Business web pages" [2, 3, 4].

> **IAPQB view.** Two organisations below left the checking to customers. New York City encouraged users to double-check the bot's answers against its links [3, 4]. Air Canada pointed to the correct rule on another page, and the tribunal noted that the airline did not explain why customers should have to double-check one part of its website against another [1, para 28]. Both organisations had the correct rules in writing [1, para 17; 3], so both could have tested their bots against them first.

## 3. Three cases

### 3.1 British Columbia, 2024: the airline answers for its chatbot

On 11 November 2022, while looking for a flight on Air Canada's website, a passenger asked its chatbot about bereavement fares. It said a reduced rate could be claimed "within 90 days of the date your ticket was issued". Its link led to the airline's "Bereavement travel" page, which said the policy did not apply once travel was completed [1, paras 13 to 17]. The passenger bought regular-fare tickets and applied within 90 days. An Air Canada representative later admitted the chatbot had provided "misleading words" [1, paras 18 to 22].

Air Canada argued that it could not be held liable for information from its agents, including a chatbot. Tribunal member Christopher C. Rivers said this treated the chatbot as "a separate legal entity that is responsible for its own actions", and called it "a remarkable submission". He held: "It makes no difference whether the information comes from a static page or a chatbot." He found that the airline "did not take reasonable care to ensure its chatbot was accurate" [1, paras 27 and 28].

On 14 February 2024, the tribunal ordered Air Canada to pay $812.02 (Canadian dollars): $650.88 in damages, the difference between the fares paid and the bereavement fares, plus $36.14 in interest and $125 in tribunal fees [1, paras 33 to 44].

### 3.2 New York City, 2024: a city chatbot that got the law wrong

In October 2023, New York City launched a pilot AI chatbot for business owners, promising "actionable and trusted information" [2]. In tests reported in March 2024, the news site The Markup found it saying a restaurant or store could go cashless, although a 2020 city law requires businesses to accept cash. It also answered wrongly on workers' tips, Section 8 housing vouchers and notice of schedule changes [3, 4].

The site warned that the bot "may occasionally produce incorrect, harmful or biased content". A city spokesperson called it a clearly marked pilot that the city would keep upgrading [3, 4]. On 16 November 2026, its address led to a city page headed "The Chatbot beta test has ended." The page gives no date or reason [5].

### 3.3 Online, 2025: a support bot invents a login policy

In April 2025, a user of the AI coding tool Cursor who kept being logged out when switching computers contacted support and got an emailed reply saying this was "expected behavior" under a new login policy. The reply came from an AI support bot, and there was no such policy. Co-founder Michael Truell called it "an incorrect response from a front-line AI support bot" [6, 7]. On Hacker News, he apologised, said the user had been refunded in full and AI replies were now labelled, and traced the logouts to a bug, since fixed [6, 8].

## 4. How practitioners handle it now

**The organisation answers for its chatbot.** The tribunal held Air Canada responsible for all the information on its website [1, para 27]. The US Consumer Financial Protection Bureau (CFPB) wrote that firms "may be subject to liability" when chatbots fail legal requirements [9]. The Hong Kong Monetary Authority (HKMA) told banks that their board and senior management "should remain accountable for all the GenAI-driven decisions and processes" [10, section 1].

**Answers are checked for accuracy.** The tribunal said a company must take reasonable care that its representations are "accurate and not misleading" [1, para 26]. The HKMA asks banks to validate their models and, early on, to keep a human in control so that outputs are "accurate and not misleading" [10, section 1(c)].

**Customers can reach a person.** The CFPB described "doom loops" with no "offramp to a human customer service representative" [9]. The HKMA asks banks, early in customer-facing use, to let customers "opt out of using GenAI and request human intervention" where practicable [10, section 2(b)].

**Customers are told when a reply comes from AI.** Cursor said in April 2025 that its AI email replies were now labelled [8]. The HKMA expects banks to "disclose the use of GenAI to customers" [10, section 3]. The European Commission says chatbot users "should be made aware that they are interacting with a machine" under AI Act rules that apply from August 2026, and its page of 19 October 2026 lists no delay to them under the "AI Omnibus" amendments [11].

**Testing comes before claims and continues after launch.** In January 2025, the US Federal Trade Commission (FTC) approved a final order against DoNotPay, which had advertised an "AI lawyer". The FTC's complaint said the company did not test whether its service worked at the level of a human lawyer. The order requires $193,000 in monetary relief and notice to past subscribers [13]. NIST suggests checking the sources in a system's outputs before deployment and during ongoing monitoring [12, action MS-2.5-003].

## 5. What to take from this

**For customer service staff.** The passenger's screenshot of the chatbot's reply was part of the Air Canada evidence [1, paras 15 and 21]. A bot answer that conflicts with written policy is worth reporting, so the bot can be corrected [1, para 22].

**For managers.** The tribunal treated chatbot answers like any other web page [1, para 27], and the regulators above expect senior accountability, a route to a person and disclosure [9, 10, 11].

**For legal and compliance teams.** Air Canada's tariff defence failed because it did not provide the relevant part of the tariff [1, para 31]. The FTC order bars claims of lawyer-level performance without sufficient evidence [13].

## 6. Limits of this report

The Air Canada ruling is one small claims decision in one Canadian province, on a claim of $880, and Air Canada gave no information about the nature of its chatbot [1, paras 3 and 14]. Other courts may decide differently. The New York findings rest on one newsroom's tests, which a second outlet then reported [3, 4], and the city page does not say when or why the beta ended [5]. The Cursor facts come from two news reports and the co-founder's comment [6, 7, 8]. The CFPB "issue spotlight" of June 2023 says it is not intended to impose obligations; on 16 November 2026 its page showed no withdrawal notice [9]. This report does not test any chatbot.

## References

[1] Moffatt v. Air Canada, 2024 BCCRT 149, Civil Resolution Tribunal (British Columbia), file SC-2023-005609, reasons for decision issued 14 February 2024. https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do

[2] Office of the Mayor, City of New York (16 October 2023). Mayor Adams Releases First-of-Its-Kind Plan For Responsible Artificial Intelligence Use In NYC Government. https://www.nyc.gov/office-of-the-mayor/news/777-23/mayor-adams-releases-first-of-its-kind-plan-responsible-artificial-intelligence-use-nyc

[3] Lecher, C. (29 March 2024). NYC’s AI Chatbot Tells Businesses to Break the Law. The Markup. https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law

[4] MacDonald, C. (30 March 2024; updated 31 March 2024). NYC’s business chatbot is reportedly doling out ‘dangerously inaccurate’ information. Engadget. https://www.engadget.com/nycs-business-chatbot-is-reportedly-doling-out-dangerously-inaccurate-information-203926922.html

[5] City of New York. The Chatbot beta test has ended. https://www.nyc.gov/main/error/chatbot-maintenance (reached by redirect from https://chat.nyc.gov/; accessed 16 November 2026)

[6] Claburn, T. (18 April 2025). Cursor AI's own support bot hallucinated its usage policy. The Register. https://www.theregister.com/2025/04/18/cursor_ai_support_bot_lies/

[7] Goldman, S. (19 April 2025). A customer support AI went rogue[dash]and it’s a warning for every company considering replacing workers with automation. Fortune. https://fortune.com/article/customer-support-ai-cursor-went-rogue/

[8] Truell, M. (16 April 2025). [Comment signed "(Cursor cofounder)" by user mntruell in the Hacker News thread "Cursor IDE support hallucinates lockout policy, causes user cancellations"]. Hacker News. https://news.ycombinator.com/item?id=43700931

[9] Consumer Financial Protection Bureau (6 June 2023). Chatbots in consumer finance. https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/ (page last modified 24 October 2024; accessed 16 November 2026)

[10] Hong Kong Monetary Authority (19 August 2024). Consumer Protection in respect of Use of Generative Artificial Intelligence. Circular to all authorized institutions. https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20241107-1-EN/20241107-1-EN.pdf

[11] European Commission. AI Act. Shaping Europe’s digital future. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (page last updated 19 October 2026; accessed 16 November 2026)

[12] National Institute of Standards and Technology (July 2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1), section 2 and action MS-2.5-003. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

[13] Federal Trade Commission (11 February 2025). FTC Finalizes Order with DoNotPay That Prohibits Deceptive 'AI Lawyer' Claims, Imposes Monetary Relief, and Requires Notice to Past Subscribers. https://www.ftc.gov/news-events/news/press-releases/2025/02/ftc-finalizes-order-donotpay-prohibits-deceptive-ai-lawyer-claims-imposes-monetary-relief-requires

## How to cite

IAPQB (2026). The chatbot promised, the company paid: three cases of chatbots that gave customers wrong answers, and what regulators now expect. IAPQB Report No. 23. International AI Practice Qualification Board. https://iapqb.org/research/023-chatbot-promises-liability.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
