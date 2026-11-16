# A new AI app on the work phone

**What regulators asked DeepSeek, why governments removed it from their devices, and how organisations now check new AI apps**

IAPQB Report No. 22 · Practice report · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In January 2025, Italy's data protection authority asked DeepSeek what data it collected and whether it was stored in China. Two days later it ordered an immediate limit on processing Italian users' data [1, 2, 3].
- In February 2025, on the Korean privacy regulator's advice, DeepSeek withdrew its app from Korean stores. The review found undisclosed transfers abroad, including user input sent to another company [4, 5].
- Australia ordered DeepSeek off federal government systems and devices in February 2025. A US order of July 2026 removes DeepSeek, and products built on it, from civilian agencies [6, 7, 8, 9].
- Organisations now check where data is stored, read the local privacy policy, trace who else receives the data, and set rules for devices, purchases and staff input [5, 9, 10, 11].

## 1. A familiar situation

A policy officer in a government department hears colleagues praise a new AI chatbot. It is quick and free, and she wants to use it on her work phone to summarise a long report before a meeting. Nobody in her team has read the app's privacy policy, and the IT unit has not said whether the app is allowed.

## 2. Why it happens

A chatbot app sends what people type to its provider's servers. The privacy policy says where those servers are and who else receives the data, if it says so at all. DeepSeek's policy said the data was stored in China [2], and its current version still does [12]. Governments also ask whether a foreign state can reach the data [9].

Checks take time. DeepSeek had been downloaded by millions of people within days, the Italian authority noted [3]. The Korean review ran from 31 January to 23 April 2025, and existing users could keep using the app meanwhile [4, 5].

> **IAPQB view.** In Italy and Korea, the regulators first asked what data DeepSeek collected, on what legal basis, and whether it was stored in China [1, 4]. Part of the answer was in DeepSeek's own privacy policy, and part appeared only when the Korean regulator analysed the app's traffic [2, 5]. An employer could ask the same questions before staff install an app; the regulators' findings came after many people were already using it.

## 3. Four cases

### 3.1 Rome, 2025: a block within two days

On 28 January 2025, Italy's data protection authority, the Garante, asked DeepSeek's two companies what personal data they collected, for what purposes, on what legal basis, and whether it was stored on servers in China [1]. The companies replied that they did not operate in Italy and that EU law did not apply to them [2, 3].

On 30 January, the Garante held that EU law applied because the service was offered to people in Italy. The privacy policy was only in English, gave no precise legal basis for each use of data and said the data was stored in China. The companies had no representative in the EU, and registered users could still reach the website [2]. The Garante ordered an immediate limit on processing Italian users' data and opened an investigation [2, 3].

In a decision announced in December 2024, the same authority had fined OpenAI €15 million over ChatGPT, for failings that included training on users' data without a proper legal basis. In March 2026, the Court of Rome upheld the appeal against that decision [13].

### 3.2 Seoul, 2025: downloads paused while the regulator checked

Korea's Personal Information Protection Commission (PIPC) sent DeepSeek an inquiry on 31 January 2025 and analysed the app with the Korea Internet & Security Agency [5]. On 15 February, on the PIPC's advice, DeepSeek removed its app from Korean app stores. Existing users could still use it [4].

The PIPC's findings of 23 April showed that the app had launched in Korea on 15 January with a privacy policy only in Chinese and English. Data went to servers in China and the United States without separate consent or disclosure. Device, network, app and user input data went to another company, Beijing Volcano Engine Technology [5]. During the review, DeepSeek submitted a Korean policy, added an opt-out from model training and stopped sending user input to Volcano Engine. The PIPC recommended corrections, including deletion of the input already sent [5]. DeepSeek's Korean policy, last updated in May 2026, names three overseas recipients, Volcano Engine among them [14].

### 3.3 Canberra, 2025: off every federal device

On 4 February 2025, the Department of Home Affairs issued PSPF Direction 001-2025 on DeepSeek products, applications and web services, under the federal Protective Security Policy Framework [6]. Entities had to prevent the use or installation of DeepSeek products and remove existing instances from government systems and devices [7, 8]. The government gave national security as the reason and spoke of an "unacceptable risk" [7, 15].

### 3.4 Washington, 2026: an order that reaches products built on DeepSeek

On 24 July 2026, the US Secretary of Homeland Security issued an exclusion and removal order under the Federal Acquisition Supply Chain Security Act. Published on 20 October 2026, it covers federal civilian agencies except their national security and secure compartmented information systems [9]. Agencies must stop buying DeepSeek products, including through approved product lists and e-commerce markets. They must remove them immediately, along with third-party products "developed using DeepSeek implementations", or ask for an exception within 60 days [9]. Its reasons include that DeepSeek's servers are in China, that Chinese law allows state access to company infrastructure, and that staff prompts may send sensitive data to China [9].

## 4. How practitioners handle it now

**Data location is checked before approval.** Both regulators first asked whether data was stored in China [1, 4]. A report by an outside expert, published by the European Data Protection Board (EDPB), tells users, deployers and buyers of LLM services to "verify with the provider where the data processing is taking place" [10].

**The privacy policy is read for the users' own country.** Between them, the Italian and Korean regulators found that DeepSeek's policy lacked a local-language version, a precise legal basis for each use of data, the privacy officer's details and disclosure of transfers abroad [2, 5]. The PIPC has published compliance checklists for foreign businesses that launch services in Korea [5].

**Third parties are traced, including inside other products.** The Korean review found transfers to third parties, including user input sent to Volcano Engine [4, 5]. The US order also covers third-party products built on DeepSeek [9].

**Device and purchase rules can include a written route for exceptions.** Australia's direction covers all federal systems and devices [7, 8]. Korea's foreign, trade and defence ministries restricted access on office computers in February 2025 [11]. The US order also bars purchases, and an exception needs a written request with a compelling justification and any planned safeguards. Agencies are encouraged to monitor traffic until removal is complete [9].

**Staff get a rule on what to type.** During the Korean review, the PIPC advised users not to enter personal information [4]. In February 2025, Korea's unification ministry said it had barred undisclosed official data from all generative AI since 2023, at the request of the National Intelligence Service and the interior ministry [11].

## 5. What to take from this

**For people who use AI at work.** Personal data stays out of a new app until it is checked, as the Korean regulator advised; one ministry has barred undisclosed official data from all generative AI [4, 11].

**For managers and IT teams.** The regulators' questions and findings make an approval list: what data, on what legal basis, stored where, shared with whom, and whether the provider has a local representative [1, 2, 5]. Some answers appeared only in network traffic, and DeepSeek's policies changed again in 2026, so the check is repeated [5, 12, 14].

**For public bodies and buyers.** The US order joins removal with purchase rules and a written exception process. Because it reaches products built on DeepSeek, supplier questions can ask which AI models a product uses [9].

## 6. Limits of this report

The Australian direction itself could not be opened, as the PSPF website refused automated access; its content comes from the Home Affairs annual report and three news reports, and its current status is unknown [6, 7, 8, 15]. PIPC texts are unofficial English translations. No outcome of the Italian investigation into DeepSeek was found; the Garante's press releases to 14 November 2026 include none. The Rome judgment on OpenAI was not read, and any further appeal could not be checked [13]. All four cases concern one app, and this report does not test any AI tool.

## References

[1] Garante per la protezione dei dati personali (28 January 2025). COMUNICATO STAMPA - IA: il Garante privacy chiede informazioni a DeepSeek. Possibile rischio per i dati di milioni di persone in Italia [press release in Italian, with English version]. Doc. web n. 10096856. https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10096856

[2] Garante per la protezione dei dati personali (30 January 2025). Provvedimento del 30 gennaio 2025 [10098477] [order no. 33 of 30 January 2025 against Hangzhou DeepSeek Artificial Intelligence Co., Ltd. and Beijing DeepSeek Artificial Intelligence Co., Ltd., in Italian with English text]. https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10098477

[3] Garante per la protezione dei dati personali (30 January 2025). COMUNICATO STAMPA - Intelligenza artificiale: il Garante privacy blocca DeepSeek [press release in Italian, with English version "Artificial Intelligence: The Italian Data Protection Authority blocks DeepSeek"]. Doc. web n. 10097450. https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450

[4] Personal Information Protection Commission, Republic of Korea (17 February 2025). DeepSeek Temporarily Suspends Its Application Service in Korea [press release, unofficial English translation]. https://www.pipc.go.kr/eng/user/ltn/new/noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=2784

[5] Personal Information Protection Commission, Republic of Korea (24 April 2025). The PIPC Announces Status Examination Results of DeepSeek Service [press release, unofficial English translation]. https://www.pipc.go.kr/eng/user/ltn/new/noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=2819

[6] Department of Home Affairs, Australia (2025). Australian Government Department of Home Affairs 2024-25 Annual Report [Annual Performance Statement, Target 13, pp. 39-40]. https://www.homeaffairs.gov.au/reports-and-pubs/Annualreports/home-affairs-annual-report-2024-25.pdf

[7] Gerken, T. (4 February 2025). Australia bans DeepSeek on government devices over security risk. BBC News. https://www.bbc.com/news/articles/c8d95v0nr1yo

[8] Sharwood, S. (5 February 2025). DeepSeek rated too dodgy down under: Banned from Australian government devices. The Register. https://www.theregister.com/software/2025/02/05/deepseek-banned-from-australian-government-devices/910171

[9] U.S. Department of Homeland Security (20 October 2026). Notice of Order Regarding Exclusion and Removal of DeepSeek Products From Federal Civilian Executive Branch Information Technology Systems and Procurements. Federal Register, Vol. 91, No. 201, pp. 66346-66350 (FR Doc. 2026-21447; Docket No. DHS-2026-0628). Appendix: Exclusion and Removal Order #2026-01, original release date 24 July 2026. https://www.govinfo.gov/content/pkg/FR-2026-10-20/pdf/2026-21447.pdf

[10] Barberá, I. (10 April 2025). AI Privacy Risks & Mitigations Large Language Models (LLMs). Support Pool of Experts programme, European Data Protection Board. https://www.edpb.europa.eu/system/files/documents/2025-04/ai-privacy-risks-and-mitigations-in-llms.pdf

[11] Kim, H.-j. (6 February 2025). (LEAD) Finance ministry to block DeepSeek access citing technical concerns. Yonhap News Agency. https://en.yna.co.kr/view/AEN20250206003051320

[12] DeepSeek (last update 10 February 2026). DeepSeek Privacy Policy. https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html (accessed 16 November 2026)

[13] Garante per la protezione dei dati personali (20 December 2024, with a later note on Court of Rome judgment No. 4153/2026). COMUNICATO STAMPA - ChatGPT, il Garante privacy chiude l’istruttoria. OpenAI dovrà realizzare una campagna informativa di sei mesi e pagare una sanzione di 15 milioni di euro. [press release in Italian, with English version]. Doc. web n. 10085432. https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432

[14] DeepSeek (last update 6 May 2026). DeepSeek 개인정보 처리방침 [DeepSeek Privacy Policy, Korean version]. https://cdn.deepseek.com/policies/ko-KR/deepseek-privacy-policy.html (accessed 16 November 2026)

[15] Lim, L. (6 February 2025). South Korea’s government is the latest to block China’s DeepSeek on official devices, following Australia and Taiwan. Fortune. https://fortune.com/asia/2025/02/06/south-korea-blocks-deepseek-government-devices-china-ai-taiwan-australia/

## How to cite

IAPQB (2026). A new AI app on the work phone: what regulators asked DeepSeek, why governments removed it from their devices, and how organisations now check new AI apps. IAPQB Report No. 22. International AI Practice Qualification Board. https://iapqb.org/research/022-deepseek-work-devices.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
