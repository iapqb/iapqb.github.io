# Training a legal AI tool on a rival's work

**What the courts decided in Thomson Reuters v. Ross, and how firms now record their rights to training data**

IAPQB Report No. 41 · Case file · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In February 2025, a US court in Delaware held that ROSS Intelligence's use of 2,243 copied Westlaw headnotes to train a legal search tool, built to compete with Westlaw, was not fair use [1].
- On 29 September 2026, the US appeals court for the Third Circuit affirmed: ROSS could have used the free court opinions, and "ease is not a justification for copying" [2].
- In June 2025, a California judge held that training a generative AI model on books was fair use and that building a library of pirated copies was not [3]. A $1.5 billion settlement was approved on 20 July 2026 [4].
- Documented practice: content obtained by agreement or written in-house, records of each dataset's source and terms, supplier contracts on rights, customer documents kept out of training, and EU summaries of training content [2, 3, 5, 6, 7, 8].

## 1. A familiar situation

A product team at a legal technology start-up needs thousands of sample questions, each paired with passages from court opinions that answer it, to train a search tool. A contractor offers them in weeks. Its writers work from a commercial legal database whose editors have already summarised each point of law. The contract says nothing about where the material comes from.

## 2. Why it happens

In the United States, anyone may copy court opinions [1, 2]. Westlaw's editors add headnotes, short statements of each point of law, and these can be protected by copyright [2]. "Headnotes are not law; judicial opinions are," the appeals court wrote [2]. Headnotes gave ROSS an "easy" way to write the questions its search tool learned from [2].

Fair use is the US defence for some copying without permission. Courts weigh the purpose of the use, the nature of the work, the amount taken and the effect on the market, and the party claiming fair use must prove it [1, 3].

> **IAPQB view.** In both disputes below, the company claiming fair use had to prove it, and the court traced the training data to its source [1, 3]. Anthropic's failure to put on the record which copies it used for training was held against it [3]. What each company could show about the source and terms of its data shaped the result.

## 3. Three rulings

### 3.1 Delaware, 2025: a trial judge revises his ruling

ROSS Intelligence built an AI tool that answered legal questions with passages from court opinions, without generating new text [1, 2]. Thomson Reuters, which owns Westlaw, refused ROSS a licence because ROSS was a competitor. ROSS then bought about 25,000 memos of questions and answers from LegalEase, whose guide told its writers to use Westlaw headnotes without simply copying and pasting them [1]. After Thomson Reuters sued in 2020, ROSS announced it would close its platform in January 2021, saying the lawsuit had left it unable to raise funds [9].

On 11 February 2025, Judge Stephanos Bibas revised his 2023 ruling, which had left the main questions for a jury [1, 2]. He found 2,243 headnotes copied and rejected fair use. ROSS's use was commercial and had no "further purpose or different character" from Thomson Reuters's use. He noted that "only non-generative AI is before me today" [1].

### 3.2 Philadelphia, 2026: the appeals court affirms

The Third Circuit heard argument on 11 June 2026 and affirmed on 29 September 2026 [2]. It held that the 2,243 headnotes are original and the use was not fair: both companies used the headnotes to build legal research platforms, so ROSS's use shared "the same ultimate purpose". ROSS could have freely copied the underlying opinions to make its memos: "Unlike necessity, ease is not a justification for copying." The court found that a market for licensing headnotes as AI training data "is rapidly developing" [2].

The court distinguished a September 2026 US Department of Justice filing in the OpenAI copyright litigation, which argued that training models that can "generate original responses" serves a new purpose. ROSS's tool "cannot generate original expression" [2]. Other questions, including whether some headnote copyrights had expired, had been left for trial [1].

### 3.3 San Francisco, 2025: training allowed, pirate library not

In a lawsuit by authors, Judge William Alsup ruled on 23 June 2025 that training Anthropic's Claude models on books was fair use, as was scanning print books the company had bought [3]. The order describes more than seven million pirated copies of books, and for those used to build a central library, "every factor points against fair use". It said Anthropic had not put into the record which copies were used for training, and that such gaps "must be held against Anthropic" [3].

The case settled before trial for $1.5 billion, about $3,000 per work [4, 10]. Anthropic must destroy the files it downloaded from two pirate libraries, unless the law or a court requires it to keep them, and certify this in writing. The agreement states that its release is not a licence to train AI models [10]. The court approved the settlement on 20 July 2026, overruling all objections, including requests to delete AI models [4].

## 4. How practitioners handle it now

**Editorial content comes through an agreement, or is written in-house.** Thomson Reuters has trained its AI search on its own headnotes, and LexisNexis writes different headnotes for the same opinions [2]. In June 2025, LexisNexis and the legal AI company Harvey announced an alliance to bring LexisNexis case law, statutes and Shepard's Citations into Harvey's platform [6].

**Each dataset has a record of its source and terms.** The Bartz court required "a separate justification" for each use of a copy, and could not rule on some copies because "the record is too poorly developed" [3]. In the settlement, Anthropic states that neither the LibGen nor the PiLiMi dataset was in the training corpus of its commercially released models [10].

**Supplier contracts state rights and origin.** On appeal, ROSS did not dispute that its contractors' copying counted as its own [2], and the contractor's instruction not to copy and paste did not prevent the copying [1]. NIST suggests contracts that "specify content ownership, usage rights" and "content provenance expectations" [5].

**Customer documents stay out of training unless the customer asks.** Harvey says it does not use customers' inputs, outputs or uploaded documents to train the underlying models, and that it contractually bars its model providers from training on customer data. Client data trains only a firm's own model, at its request [7].

**In the EU, model providers publish a summary of training content.** Article 53 of the AI Act, which the Digital Omnibus on AI left unchanged, requires providers of general-purpose AI models to put in place a copyright policy and publish "a sufficiently detailed summary" of training content [8]. The Commission's template asks about licensing agreements and for the top 10% of web domains scraped [11]. These duties have applied since 2 August 2025, with Commission enforcement from 2 August 2026; models placed on the market earlier have until 2 August 2027 [12]. Signatories of the voluntary EU Code of Practice also commit not to get around paywalls when crawling the web [13, 14].

## 5. What to take from this

**For people who build or buy AI tools at work.** Ask where each dataset came from and on what terms, and keep the answer. In Ross, a contractor's copying counted against ROSS [1, 2].

**For managers.** The EU code commits signatories to assign responsibility for their copyright policy [14], and in Bartz, gaps in the record about training copies were held against Anthropic [3]. Supplier contracts can set out ownership, permitted uses and origin [5].

**For law firms, legal publishers and training providers.** Editorial summaries can be protected even when the law they describe is free [2]. Ross concerned a non-generative tool; the appeals court noted a pending generative AI case in New York [1, 2].

## 6. Limits of this report

The cases are from US courts, and the EU rules discussed apply to providers of general-purpose AI models. The Bartz fair use ruling came from a trial court, and the case then settled [3, 4]. Facts about the companies' conduct come from the courts' summaries of the evidence. Steps after 29 September 2026, such as a rehearing request or Supreme Court review, could not be checked because the court dockets did not open. ROSS's reason for closing and Harvey's and LexisNexis's practices come from their own statements [6, 7, 9]. Anthropic, a party in one case, makes one of the AI tools used to draft this report; facts about that case come only from court documents [3, 4, 10].

## References

[1] Thomson Reuters Enterprise Centre GmbH and West Publishing Corp. v. Ross Intelligence Inc., No. 1:20-cv-613-SB (D. Del.), memorandum opinion, Document 770, filed 11 February 2025. https://storage.courtlistener.com/recap/gov.uscourts.ded.72109/gov.uscourts.ded.72109.770.0.pdf

[2] Thomson Reuters Enterprise Centre GmbH; West Publishing Corp v. Ross Intelligence Inc, No. 25-2153 (3d Cir.), opinion of the court, argued 11 June 2026, filed 29 September 2026. https://www2.ca3.uscourts.gov/opinarch/252153p.pdf

[3] Bartz v. Anthropic PBC, No. C 24-05417 WHA (N.D. Cal.), order on fair use, Document 231, filed 23 June 2025. https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.231.0.pdf

[4] Bartz v. Anthropic PBC, No. 3:24-cv-05417-AMO (N.D. Cal.), order granting final approval of class action settlement; granting in part motion for attorney's fees, reimbursement of expenses, and plaintiff service awards; judgment, Document 680, filed 20 July 2026. https://assets-us-01.kc-usercontent.com:443/1eeb16db-4934-006e-40a6-38fa91285ebb/36cce252-a32c-4cbb-a624-31dd8ac9574c/2026-07-20%20Order%20Granting%20Final%20_dckt%20680_0_.pdf (linked from the settlement website's Important Documents page)

[5] National Institute of Standards and Technology (July 2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1), section GOVERN 6.1, suggested action GV-6.1-004. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

[6] LexisNexis (18 June 2025). LexisNexis and Harvey Announce Strategic Alliance to Integrate Trusted, High-Quality AI Technology and Legal Content and Develop Advanced Workflows. LexisNexis Newsroom. https://www.lexisnexis.com/news/en/lexisnexis-and-harvey-announce-strategic-alliance-to-integrate-trusted-high-quality-ai-technology-and-legal-content-and-develop-advanced-workflows

[7] Harvey. Secure legal AI for the most sensitive matters [security page: "No Model Training" and questions and answers]. https://www.harvey.ai/security (accessed 16 November 2026)

[8] AI Act Service Desk, European Commission. Article 53: Obligations for providers of general-purpose AI models [text based on the EUR-Lex consolidated version of the AI Act as at 27 July 2026]. https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-53 (accessed 16 November 2026)

[9] ROSS Intelligence (11 December 2020). Announcement. ROSS Intelligence blog. https://blog.rossintelligence.com/post/announcement

[10] Bartz v. Anthropic PBC, No. 3:24-cv-05417-WHA (N.D. Cal.), Class Action Settlement Agreement, dated 5 September 2025, filed as Document 363-3. https://assets-us-01.kc-usercontent.com:443/1eeb16db-4934-006e-40a6-38fa91285ebb/d8578720-9fd0-4c27-9c7f-041bac826869/Class%20Action%20Settlement%20Agreement.pdf

[11] European Commission (5 December 2025). Communication from the Commission: Explanatory Notice and Template for the Public Summary of Training Content for general-purpose AI models required by Article 53 (1)(d) of Regulation (EU) 2024/1689 (AI Act), C(2025) 8311 final. https://ec.europa.eu/newsroom/dae/redirection/document/118480 (English PDF linked from the Commission page of the same name, published 24 July 2025: https://digital-strategy.ec.europa.eu/en/library/explanatory-notice-and-template-public-summary-training-content-general-purpose-ai-models)

[12] European Commission. Guidelines for providers of general-purpose AI models. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers (accessed 16 November 2026; page last updated 28 April 2026)

[13] European Commission. The General-Purpose AI Code of Practice. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai (accessed 16 November 2026; page last updated 7 October 2026)

[14] Peukert, A., & Castets-Renard, C. (10 July 2025). Code of Practice for General-Purpose AI Models: Copyright Chapter, Measures 1.1 and 1.2. European Commission. https://ec.europa.eu/newsroom/dae/redirection/document/118115

## How to cite

IAPQB (2026). Training a legal AI tool on a rival's work: what the courts decided in Thomson Reuters v. Ross, and how firms now record their rights to training data. IAPQB Report No. 41. International AI Practice Qualification Board. https://iapqb.org/research/041-thomson-reuters-v-ross.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
