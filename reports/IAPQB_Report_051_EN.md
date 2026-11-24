# The EU code for general-purpose AI models

**What the 2025 code asks of AI model providers, who signed it, and how it fits the AI Act**

IAPQB Report No. 51 · Rule explainer · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- On 10 July 2025 the European Commission received the final General-Purpose AI Code of Practice, developed by 13 independent experts, with chapters on transparency, copyright, and safety and security [1, 2].
- The code is voluntary. The AI Act's duties for model providers have applied since 2 August 2025, and since 2 August 2026 the Commission can enforce them with fines [3, 4, 5].
- The Commission's page, last updated on 7 October 2026, lists 22 signatories, including Google, Microsoft and OpenAI. xAI signed only the safety chapter. Meta refused [2, 6, 7].
- The code's Transparency chapter offers a Model Documentation Form, and its Copyright chapter offers practical solutions for the copyright policy that the AI Act requires [2].

## 1. A familiar situation

A small Spanish software firm builds a contract-review tool on a language model from a bigger provider. A customer asks what data the model learned from, what it does badly, and whether it can repeat protected texts. The product lead writes to the provider, unsure what it must send, how quickly, and whether its signature on an EU code matters.

## 2. Why the code exists

Article 53(1) of the AI Act gives providers of general-purpose AI models four duties: technical documentation for the AI Office and national authorities; information for the companies that build the model into their systems, which the Act calls "downstream providers"; a policy to comply with EU copyright law; and a public summary of training content [8]. Providers of the most advanced models, those with "systemic risk", have extra duties under Article 55 [2, 8]. Providers of free and open-source models whose weights and model details are public are exempt from the first two duties unless the model has systemic risk [8].

Annexes XI and XII of the Act list the minimum content of the documentation and of the information for downstream providers [8]. Article 53(4) lets providers rely on a code of practice to show compliance until a harmonised standard is published. Others must show "alternative adequate means of compliance for assessment by the Commission" [8].

> **IAPQB view.** In the cases below, signing changed how a provider shows compliance [9]. The duties applied to Meta, which refused, as they did to Google, which signed while voicing concerns about the code [6, 7, 8, 10]. For signatories, the code offers a documentation form and practical solutions for the copyright policy [2].

## 3. Four cases

### 3.1 Brussels, 2025: a late code and a short run-up

The AI Act said codes of practice should be ready by 2 May 2025 [8]. The final code reached the Commission on 10 July 2025, 23 days before the duties applied on 2 August [1, 3]. Models placed on the market before that date have until 2 August 2027 [3, 8]. On 1 August the Commission and the Member States confirmed that the code is "an adequate voluntary tool" for providers to show compliance [3, 11]. For the first year, the Commission said signatories that had not yet met every commitment would be seen as acting in good faith, with fines possible from 2 August 2026 [4].

### 3.2 EU, 2025: Meta declines to sign

In a LinkedIn post reported on 18 July 2025, Meta's chief global affairs officer, Joel Kaplan, said Meta would not sign. He said the code brings "legal uncertainties for model developers" and measures that go far beyond the scope of the AI Act [6, 7]. Under the Commission's guidance, a non-signatory must report how it complies by other means, for instance with a gap analysis, and may face more requests for information and model evaluations [9]. Meta is not on the Commission's list of signatories [2].

### 3.3 EU, 2025: who signed, and for which chapters

Google said on 30 July 2025 that it would sign, while warning about "departures from EU copyright law" and "requirements that expose trade secrets" [10]. The Commission's page, last updated on 7 October 2026, lists 22 signatories, including Aleph Alpha, IBM, Microsoft, Mistral AI and OpenAI [2]. xAI signed only the Safety and Security chapter, so it must show that it meets the transparency and copyright duties "via alternative adequate means" [2]. A provider that opts out of a chapter loses the code's benefit for that part [9].

### 3.4 Brussels, 2026: enforcement starts and the AI Act is amended

The AI Omnibus, Regulation (EU) 2026/1744, entered into force on 27 July 2026. It moved the high-risk rules to 2 December 2027 and 2 August 2028 [12, 13]. It left Articles 53 and 55 and the dates for general-purpose models unchanged [8, 13]. It rewrote Article 56(6): the Commission now assesses codes "taking utmost account of the opinion of the Board" [13]. Before the change, the Commission's guidance on signing spoke of assessment by the AI Office and the AI Board [9]. The Commission's power to approve a code by an implementing act was removed as not strictly necessary, since such codes "do not grant a presumption of conformity" [13, recital 41]. From 2 August 2026 the AI Office can enforce the rules for model providers, and the Commission can fine them up to 3% of worldwide annual turnover or €15 million, whichever is higher [5, 8].

## 4. How practitioners handle it now

**Each model is documented against a fixed list.** The AI Act sets the minimum content: the model's intended tasks, acceptable use policies, methods of distribution and licence, architecture and number of parameters, training process, training data, computing power and energy use [8, Annex XI]. The code's Transparency chapter offers a Model Documentation Form for recording this information [2].

**Authorities get the documentation on request; downstream providers must be given their part.** A Commission request must state its legal basis and purpose, and information obtained under Article 53 must be kept confidential [8]. OpenAI, for example, runs one web form to "request EU AI Act model documentation" or to complain about its compliance with the copyright chapter [14].

**Infringing outputs and rightsholders' complaints have their own measures.** The Copyright chapter has measures on mitigating copyright-infringing outputs and on contact points for complaints [15]. At a March 2026 meeting of the signatories' taskforce, chaired by the AI Office, participants said such safeguards are typically applied throughout the model lifecycle, from data curation to deployment. On complaints, they said practices may change as experience grows [2, 15].

**Opt-outs are respected, and crawler details are published.** The AI Act requires the copyright policy to identify and comply with rightsholders' reservations of rights, "including through state-of-the-art technologies" [8]. Under the code, signatories commit to let rightsholders obtain information about their web crawlers and the crawlers' robots.txt features. This information must be public, with a way for rightsholders to be notified automatically of changes; the AI Office gave signatories an overview of this commitment in July 2026 [16].

## 5. What to take from this

**For teams that build products on a general-purpose model.** The information that providers must give them includes the model's intended tasks, the acceptable use policies, the technical means needed to integrate it, and the type and provenance of its training data [8, Annex XII]. The AI Office runs a channel for complaints from downstream providers [5].

**For managers at model providers.** The Article 53 duties apply whether or not a provider signs, with fines possible since 2 August 2026 [4, 8, 9]. The code turns them into tasks: a documentation form for each model, a copyright policy, published crawler details and a contact point for complaints [2, 15, 16].

**For trainers, buyers and compliance staff.** The skills involved are practical: reading a Model Documentation Form, checking how a crawler treats robots.txt, and handling a complaint from a rightsholder [2, 15, 16].

## 6. Limits of this report

The question-and-answer pages cited give the Commission's reading of the law [4, 9]. The texts of the code's chapters and of its documentation form were not opened for this report, because the Commission's website asks automated tools not to fetch them. Their content is given here only as the Commission's pages and the taskforce reports describe it [2, 15, 16]. Meta's refusal is known from two news reports of a LinkedIn post that was not opened here. The signatory list may lag behind new signatures, signatories may withdraw at any time, and the AI Office will review the code at least every two years [2, 4, 9]. No fine or formal decision against a model provider was found in the pages read. The safety chapter is covered only in outline. No model or form was tested.

## References

[1] European Commission (10 July 2025). General-Purpose AI Code of Practice now available. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/general-purpose-ai-code-practice-now-available

[2] European Commission. The General-Purpose AI Code of Practice. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai (accessed 16 November 2026; page last updated 7 October 2026)

[3] European Commission (1 August 2025). EU rules on general-purpose AI models start to apply, bringing more transparency, safety and accountability. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/eu-rules-general-purpose-ai-models-start-apply-bringing-more-transparency-safety-and-accountability

[4] European Commission. Questions and answers on the code of practice for General-Purpose AI. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/faqs/questions-and-answers-code-practice-general-purpose-ai (accessed 16 November 2026; page last updated 20 July 2026)

[5] European Commission (31 July 2026). Commission starts enforcing AI Act rules and new transparency requirements on 2 August. Press release IP/26/1714. https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1714 (full text read through the press corner's document service at https://ec.europa.eu/commission/presscorner/api/documents?reference=IP/26/1714&language=en; short version at https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august)

[6] Claburn, T. (18 July 2025). Meta declines to abide by voluntary EU AI safety guidelines. The Register. https://www.theregister.com/software/2025/07/18/meta-declines-to-abide-by-voluntary-eu-ai-safety-guidelines/1132583

[7] Iyer, R. (18 July 2025). Meta refuses to sign EU’s AI code of practice. TechCrunch. https://techcrunch.com/2025/07/18/meta-refuses-to-sign-eus-ai-code-of-practice/

[8] European Union. Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence and amending Regulations (EC) No 300/2008, (EU) No 167/2013, (EU) No 168/2013, (EU) 2018/858, (EU) 2018/1139 and (EU) 2019/2144 and Directives 2014/90/EU, (EU) 2016/797 and (EU) 2020/1828 (Artificial Intelligence Act). Consolidated text of 27 July 2026 (02024R1689-20260727), Articles 3, 53, 55, 56, 91, 101, 111 and 113 and Annexes XI and XII. EUR-Lex. https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng

[9] European Commission. Signing the General-Purpose AI code of practice [questions and answers]. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/faqs/signing-general-purpose-ai-code-practice (accessed 16 November 2026; page last updated 17 July 2025)

[10] Walker, K. (30 July 2025). We will sign the EU AI Code of Practice. Google. https://blog.google/company-news/inside-google/around-the-globe/google-europe/eu-ai-code-practice/

[11] European Commission (1 August 2025). Commission Opinion on the assessment of the General-Purpose AI Code of Practice. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/library/commission-opinion-assessment-general-purpose-ai-code-practice

[12] European Commission (27 July 2026). AI Omnibus enters into force. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force

[13] European Union (8 July 2026). Regulation (EU) 2026/1744 of the European Parliament and of the Council of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 as regards the simplification of the implementation of harmonised rules on artificial intelligence (Digital Omnibus on AI). OJ L, 2026/1744, 24.7.2026. Recital 41 and Article 1, points (21) and (40). EUR-Lex. https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng

[14] OpenAI. Submit an EU AI Act inquiry. https://openai.com/form/eu-ai-act/ (accessed 16 November 2026)

[15] European Commission (8 April 2026). Second GPAI Signatory Taskforce meeting - Copyright Chapter. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/second-gpai-signatory-taskforce-meeting-copyright-chapter

[16] European Commission (3 August 2026). Fourth GPAI Signatory Taskforce meeting. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/fourth-gpai-signatory-taskforce-meeting

## How to cite

IAPQB (2026). The EU code for general-purpose AI models: what the 2025 code asks of AI model providers, who signed it, and how it fits the AI Act. IAPQB Report No. 51. International AI Practice Qualification Board. https://iapqb.org/research/051-eu-gpai-code.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
