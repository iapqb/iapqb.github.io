# Training AI on other people's photos

**What the Getty Images v Stability AI judgment decided, and how licences, opt-outs and training records are used now**

IAPQB Report No. 40 · Case file · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- On 4 November 2025, the High Court in London ruled that Stable Diffusion, which does not store Getty Images' pictures, is not an "infringing copy", and rejected Getty's remaining copyright claim against Stability AI [1].
- Getty won part of its trade mark claim over watermarks from early model versions, findings the judge called "both historic and extremely limited in scope" [1]. Getty's appeal on the copyright point was expected on 11 November 2026 [2].
- The court did not rule on the training, for lack of evidence that it took place in the UK [1]. In the US, the Copyright Office says fair use in training depends on the works, their source, the purpose and the controls on outputs [3].
- Current practice uses training licences, output controls, machine-readable opt-outs and published training summaries; the EU requires the last two from providers of general-purpose AI models [1, 4, 5, 6].

## 1. A familiar situation

A design team plans to use an AI image generator for a client's campaign. The client's lawyer asks what images the model learned from, whether anyone licensed them, and who answers if an output shows another company's watermark. The tool's website offers one line about public web data.

## 2. Why it happens

Training an image model starts with copies. Stable Diffusion was trained on parts of LAION-5B, a list of 5.85 billion image addresses and captions [1, paras 46, 47]. Stability said it downloaded the images and kept copies in the cloud during training [1, para 48]. The court found that the finished model does not store them [1, paras 7, 600].

Copyright law is national. Getty accepted there was no evidence of training in the UK and dropped that claim, and the court made no finding on how many Getty works were used [1, paras 9, 758].

> **IAPQB view.** In the Getty case, the outcome turned on facts about data: where the copies were made, whether the model kept any, and how often watermarks appeared [1]. Getty said it spent millions of pounds to get that far against one provider [7]. The EU's training summaries aim to help rights holders enforce their rights [6].

## 3. Three cases

### 3.1 London, 2025: no infringing copy, some watermarks

Getty argued that Stable Diffusion was an infringing copy brought into the UK, because making it in the UK would have infringed copyright [1, paras 10, 11]. On 4 November 2025, Mrs Justice Joanna Smith accepted that an "article" can be intangible, so a model could in principle qualify [1, para 758; 8, section B, para 112]. She held, however, that the model weights "are not themselves an infringing copy and they do not store an infringing copy" [1, para 600].

On trade marks, Getty won for iStock watermarks from version 1.x models used through Stability's DreamStudio or Developer Platform, and for Getty Images watermarks from version 2.x [1, para 758]. The judge rejected the argument that users alone were responsible, since the model depends on training data "over which Stability has absolute control and/or responsibility" [1, paras 348, 350, 398]. There was no evidence that any UK user got watermarks from the later models, and for the earlier ones it was impossible to know how many were made. A further claim under section 10(3) failed, and passing off was not decided [1, para 758].

### 3.2 London and California, 2025 to 2026: an appeal and a second case

In December 2025, the High Court granted Getty an injunction, awarded Stability interim costs for issues Getty lost or dropped, and let Getty appeal on the infringing copy point. The High Court and then the Court of Appeal refused Stability permission to appeal the trade mark ruling. Getty's filing of 16 November 2026 says the appeal "is expected to be held on November 11, 2026" [2]. In August 2025, Getty also sued Stability in a US federal court in California over the alleged copying of about 12 million images; on 30 October 2026, after a joint request, the court paused the case for 75 days [2]. The UK government calls the Getty finding fact specific, and for now proposes to leave the law on AI systems developed abroad unchanged [8, sections C and H].

### 3.3 Washington, 2025: the US Copyright Office on training

On 9 May 2025, the US Copyright Office released a pre-publication version of Part 3 of its AI report, on training [3]. It said collecting and training on works can infringe unless fair use applies. Various training uses are likely to give works a new purpose, but how far they are fair depends on the works used, their source, the purpose and the controls on outputs. Commercial use of vast numbers of works to make content that competes with them in existing markets goes beyond established fair use, "especially where this is accomplished through illegal access". The Office saw a risk of "diluting markets for works of the same kind as in their training data" and advised against government intervention in licensing for now [3]. It was still the only version listed on 16 November 2026 [3].

## 4. How practitioners handle it now

**Training on licensed images, with payment to contributors.** In 2023 Getty said its own generator was "trained solely from Getty Images' vast creative library" and that contributors would be paid when their content was used in training [4]. Adobe says its own Firefly models are trained on licensed Adobe Stock content and public domain content [9]. The Copyright Office found such licensing emerging fast in some sectors, with uneven availability [3].

**Opt-outs that machines can read.** Signatories of the EU Code of Practice for general-purpose AI models commit to crawlers that follow robots.txt and other machine-readable reservations, to skip sites that EU courts or authorities have found to be persistently infringing, and to publish details of their crawlers [5]. The Copyright Office says requiring owners to opt out conflicts with the principle of consent, and robots.txt alone is not enough, as many owners do not control the sites showing their works [3]. In March 2026 the UK government said it no longer prefers a broad exception with an opt-out [8, section A, para 27].

**A public summary of training data.** Since 2 August 2025, providers of general-purpose AI models on the EU market must publish a summary of their training content on a Commission template. It asks for the main datasets, the crawlers used, the top 10% of website domains by content scraped and the opt-out measures honoured. Older models have until 2 August 2027, and AI Office enforcement began on 2 August 2026 [6, 10]. The Digital Omnibus on AI, in force since 27 July 2026, delayed some high-risk rules; its text leaves these duties unchanged [10, 11]. In the Getty case, the court identified the training datasets from published model cards [1, para 47].

**Controls on what the model produces.** Stability blocked the prompts that Getty said produced infringing outputs, and Getty then dropped that claim [1, para 9]. A watermark filter was used in training version 1.2, but Stability's own expert accepted that it had "plainly not removed the potential" for watermarks [1, paras 91, 147]. EU Code signatories commit to safeguards against infringing outputs and to banning infringing uses in their terms [5]. The Copyright Office notes that "none of these approaches is infallible" [3].

## 5. What to take from this

**For people who use AI image tools at work.** Check generated images for watermarks and logos before publishing. The UK government notes that users, providers and later handlers of infringing output may all be liable [8, section H, para 18].

**For managers and buyers of AI tools.** Ask providers what their models were trained on, under which licences, and which opt-outs they honoured. In the EU, the published training summary answers part of this [6].

**For schools, training providers and employers.** Teach the three questions that decided the Getty case: where the copies were made, what the model keeps and what it outputs [1]. Getty's appeal and its US case were still open in November 2026 [2].

## 6. Limits of this report

The report covers the UK, the US and the EU; rules elsewhere differ. Details of the December 2025 hearing, the appeal and the US case come from Getty's own filings; no appeal judgment was found [2]. Getty's parent company and some subsidiaries entered Chapter 11 bankruptcy on 21 October 2026; the filing does not link this to the cases [2]. Licensing contracts are a private matter, so the deals named here may not be typical [8, section G, para 18]. This report is not legal advice.

## References

[1] Getty Images (US) Inc & Ors v Stability AI Limited [2025] EWHC 2863 (Ch), High Court of Justice, Business and Property Courts of England and Wales, Intellectual Property List (ChD), 4 November 2025. https://caselaw.nationalarchives.gov.uk/ewhc/ch/2025/2863 (full text read in the PDF version: https://caselaw.nationalarchives.gov.uk/ewhc/ch/2025/2863/data.pdf)

[2] Getty Images Holdings, Inc. (16 November 2026). Form 10-Q for the quarterly period ended September 30, 2026, Note 2 (Chapter 11 Proceedings and Restructuring Transactions) and Note 13 (Legal Proceedings and Contingencies), Stability AI Lawsuits. Filed with the U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1898496/000162828026074191/gety-20260930.htm (notes read at https://www.sec.gov/Archives/edgar/data/1898496/000162828026074191/R9.htm and https://www.sec.gov/Archives/edgar/data/1898496/000162828026074191/R20.htm)

[3] U.S. Copyright Office (May 2025). Copyright and Artificial Intelligence, Part 3: Generative AI Training. Pre-publication version, released 9 May 2025. A Report of the Register of Copyrights. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf. Status checked on the Office's page Copyright and Artificial Intelligence, https://www.copyright.gov/ai/ (accessed 16 November 2026).

[4] Getty Images (25 September 2023). Getty Images Launches Commercially Safe Generative AI Offering. Getty Images Newsroom. https://newsroom.gettyimages.com/en/getty-images/getty-images-launches-commercially-safe-generative-ai-offering

[5] European Commission (10 July 2025; prepared by independent experts). Code of Practice for General-Purpose AI Models: Copyright Chapter. https://ec.europa.eu/newsroom/dae/redirection/document/118115 (linked from The General-Purpose AI Code of Practice, https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai, last updated 7 October 2026)

[6] European Commission (24 July 2025). Explanatory Notice and Template for the Public Summary of Training Content for general-purpose AI models. https://digital-strategy.ec.europa.eu/en/library/explanatory-notice-and-template-public-summary-training-content-general-purpose-ai-models (page last updated 26 March 2026). Text read in Communication from the Commission C(2025) 8311 final of 5 December 2025, Explanatory Notice and Template for the Public Summary of Training Content for general-purpose AI models required by Article 53 (1)(d) of Regulation (EU) 2024/1689 (AI Act): https://ec.europa.eu/newsroom/dae/redirection/document/118480

[7] Getty Images (4 November 2025). Getty Images issues statement on ruling in Stability AI UK litigation. Getty Images Newsroom. https://newsroom.gettyimages.com/en/getty-images/getty-images-issues-statement-on-ruling-in-stability-ai-uk-litigation

[8] Department for Science, Innovation and Technology, Department for Culture, Media and Sport and Intellectual Property Office (18 March 2026). Report on Copyright and Artificial Intelligence. GOV.UK. https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence (PDF: https://assets.publishing.service.gov.uk/media/69ba692226909a14239612e4/CP2602959_-_Report_on_Copyright_and_Artificial_Intelligence_web.pdf)

[9] Adobe. Adobe Firefly - Free Generative AI for Creatives [Firefly product page and FAQ]. https://www.adobe.com/products/firefly.html (accessed 16 November 2026)

[10] European Commission. AI Act [policy page, last update 19 October 2026]. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (accessed 16 November 2026)

[11] Regulation (EU) 2026/1744 of the European Parliament and of the Council of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 as regards the simplification of the implementation of harmonised rules on artificial intelligence (Digital Omnibus on AI). Official Journal of the European Union, L series, 24 July 2026. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744 (entered into force 27 July 2026)

## How to cite

IAPQB (2026). Training AI on other people's photos: what the Getty Images v Stability AI judgment decided, and how licences, opt-outs and training records are used now. IAPQB Report No. 40. International AI Practice Qualification Board. https://iapqb.org/research/040-getty-v-stability-ai.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
