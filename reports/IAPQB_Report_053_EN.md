# Do legal AI tools still make things up?

**What a Stanford test found, how the vendors replied, and how lawyers now check the answers**

IAPQB Report No. 53 · Research digest · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In 2024, Stanford researchers put 202 legal questions to AI research tools from LexisNexis and Thomson Reuters. The tools gave false or misleading answers 17% to 33% of the time, against 43% for GPT-4 [1].
- Some wrong answers cited real cases that do not support the point, an error the authors judged harder to spot than an invented case [1].
- Both vendors questioned the results. Thomson Reuters cited internal tests showing about 90% accuracy, and later wrote that all AI answers must be independently verified [2, 3, 4, 5].
- Neither vendor took part in an independent 2025 benchmark of research tools [6, 7]. Since June 2026, Florida has required anyone signing a court filing to represent that its legal authorities exist and are accurately cited [8].

## 1. A familiar situation

A junior lawyer has a court filing due in the morning. The firm's AI research tool gives an answer with citations to real cases, each one a link. The lawyer clicks two links and sees that the cases exist. The screen does not show whether they say what the answer claims, or whether a higher court has overruled them.

## 2. Why the errors continue

An earlier Stanford study found general-purpose AI models wrong 58% to 88% of the time on checkable questions about US federal cases [9]. Legal publishers turned to retrieval-augmented generation (RAG), in which a language model writes its answer from documents found in a legal database [1]. LexisNexis advertised "100% hallucination-free linked legal citations", and Thomson Reuters said it avoided hallucinations by relying on Westlaw content [1].

Errors can enter at both steps. The search can return a case from another jurisdiction or an overruled one, and the model can misread a document, for example by presenting a party's argument as the court's decision [1]. The Stanford team counted an answer as a hallucination if it was incorrect or "misgrounded", citing a source that does not support the claim. Such errors, they wrote, are "potentially more dangerous than fabricating a case outright", because they are harder to spot [1].

> **IAPQB view.** In the Stanford test, some false answers linked to real cases, so a check that only asked whether a cited case exists would have passed them [1]. Thomson Reuters' 2025 guidance and Florida's 2026 rule both ask for more than that check [5, 8].

## 3. Three cases

### 3.1 Stanford, 2024: tools built for lawyers

A team working with Stanford's RegLab and Institute for Human-Centered AI (HAI) tested tools sold to lawyers. They registered 202 questions in advance and put them to Lexis+ AI (LexisNexis), Ask Practical Law AI and Westlaw AI-Assisted Research (Thomson Reuters), and GPT-4. Thomson Reuters had refused three requests for access to the Westlaw tool and allowed it after the first results appeared in May 2024 [1, 2].

Lexis+ AI was accurate on 65% of the questions and hallucinated on 17%; Westlaw AI-Assisted Research, on 42% and 33%. Ask Practical Law AI hallucinated on 17% and gave incomplete answers, such as refusals, on more than 60%. In one answer, Lexis+ AI described a ruling as good law, citing the case that had overturned it [1]. The authors call for public benchmarking led by professional organisations and independent third parties. This report uses the 2025 journal version, whose figures match the May 2024 preprint [1].

### 3.2 United States, 2024: the vendors reply

Both companies replied within days. Thomson Reuters said the study had used Ask Practical Law AI for primary law research, "which is not its intended use", and that benchmarks should be set with the industry. LexisNexis's chief product officer said the authors had not contacted the company, whose own analysis suggested a much lower rate. "Linked", he said, meant that users can open each cited source, and a new version released in late April 2024 addressed many of the issues [2, 3].

In June 2024, Thomson Reuters said its internal tests showed about 90% accuracy [4, 10]. A later Stanford paper says the gap may reflect how the tests were built, which cannot be known without the company's details [10].

### 3.3 United States, 2025 and 2026: few independent tests

In October 2025, Vals AI published a blind benchmark of legal research tools, using questions from law firms. Alexi, Counsel Stack, Midpage and ChatGPT all scored higher than lawyers who answered the same questions [6]. Products from Thomson Reuters, LexisNexis and vLex were not tested; Vals says vendors that had opted in earlier chose not to be included [6, 7]. A Stanford paper for a March 2026 conference tested the 50-state survey tools in Westlaw and Lexis+ AI, using a benchmark of 1,647 yes-or-no questions on unemployment insurance law. They were accurate on 58% (Westlaw) and 64% (Lexis+ AI), and on a combined score did worse than answering yes every time [11]. In February 2026, LexisNexis replaced Lexis+ AI with Lexis+ with Protégé [12].

## 4. How practitioners handle it now

**Each point is checked against the source it cites.** The Stanford authors conclude that users must keep checking that the cited sources support each key point [1]. Thomson Reuters describes three steps: review the AI answer, review the cited material, then confirm both with a citator or other standard tools. All AI answers, it says, "must be independently verified" [5].

**The person who signs a filing answers for its authorities.** Since 15 June 2026, Florida's court rules have required the signer of any filing to represent that "the legal authorities identified exist and are accurately cited" [8, 13]. After notice and a chance to be heard, courts may impose sanctions such as a reprimand, striking the filing or dismissal [8].

**A bar regulator has proposed a duty to check citations.** A State Bar of California committee has proposed that, before filing, a lawyer must check that no cited authority, including one produced with AI, is "fabricated, misstated, or taken out of context". A revised version, open for comment until 6 August 2026, would also require checking authorities cited to clients and other parties. On 16 November 2026 the State Bar's pages still presented the changes as proposals [14].

**Vendors add checking tools.** Thomson Reuters says its Verify function, launched in February 2026, shows each statement in a research report beside its sources, and that the lawyer remains responsible [15]. In October 2026, LexisNexis described Shepard's Verify, which helps users assess citation status, quotations and whether a cited authority supports the point it is cited for [16].

**An industry group offers a standard form for reporting tests.** In June 2024, the Legal IT Innovators Group (LITIG) launched a benchmarking initiative, citing the gap between the 90% and 42% accuracy figures [17, 18]. Finding metric benchmarks hard to agree, it now offers a transparency charter and a standard statement of a product's models, intended use, performance, limitations and testing [19]. On 16 November 2026, its register listed 11 signatories, including Lexis Nexis UK and Harvey. Thomson Reuters was not on the list [20].

## 5. What to take from this

**For lawyers and others who use legal AI tools.** In the Stanford test, a working link showed only that a case existed [1]. Thomson Reuters' own steps add a citator check [5].

**For managers at law firms and legal departments.** Checking takes time, and longer answers take longer: in 2024, Westlaw's answers averaged 350 words and Lexis+ AI's 219 [1]. Thomson Reuters suggests measuring both how often users reach the right answer after checking and how long the checks take [5]. Before buying, firms can ask for test information in a standard form such as LITIG's statement [19].

**For law schools, training providers and bar regulators.** The Stanford typology separates a false statement, a cited source that does not support the claim, and a claim with no source [1]. Training that covers only invented cases leaves out the second. California's proposals would also make clear that lawyers must instruct and supervise non-lawyer staff on their use of AI [14].

## 6. Limits of this report

The tests cover US law and the tools as tested; both vendors have since changed their products [12, 15]. Thomson Reuters' 90% figure comes from its own tests [4, 10]. Most of the studies come from one Stanford group. The 2026 test covered one area of law, and the best-scoring tool came from earlier work involving its authors [11]. The Florida court's website blocks automated access, so changes after comments closed on 11 August 2026 could not be checked [8]. Court decisions penalising lawyers for false citations are covered in IAPQB Report No. 2. No AI tool was tested for this report.

## References

[1] Magesh, V., Surani, F., Dahl, M., Suzgun, M., Manning, C. D., & Ho, D. E. (2025). Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools. Journal of Empirical Legal Studies, 22(2), 216-242 (published online 23 April 2025). https://doi.org/10.1111/jels.12413 (open-access journal version read at https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf; preprint: arXiv:2405.20362, 30 May 2024, https://arxiv.org/abs/2405.20362)

[2] Ambrogi, B. (28 May 2024). Stanford Will Augment Its Study Finding that AI Legal Research Tools Hallucinate in 17% of Queries, As Some Raise Questions About the Results. LawSites. https://www.lawnext.com/2024/05/stanford-will-augment-its-study-finding-that-ai-legal-research-tools-hallucinate-in-17-of-queries-as-some-raise-questions-about-the-results.html

[3] Artificial Lawyer (24 May 2024). Stanford GenAI Study Debacle - Thomson Reuters + LexisNexis Both Reply + HAI Comment. https://www.artificiallawyer.com/2024/05/24/stanford-genai-study-debacle-thomson-reuters-replies/

[4] Artificial Lawyer (10 June 2024). Thomson Reuters Contradicts Stanford GenAI Study - ‘We Are 90% Accurate’. https://www.artificiallawyer.com/2024/06/10/thomson-reuters-contradicts-stanford-genai-study-we-are-90-accurate/

[5] Dahn, M., & Herrmannova, D. (12 February 2025). Thomson Reuters Best Practices for Benchmarking AI for Legal Research. Thomson Reuters Innovation Blog. https://www.thomsonreuters.com/en-us/posts/innovation/thomson-reuters-best-practices-for-benchmarking-ai-for-legal-research/

[6] Vals AI (updated 14 October 2025). VLAIR - Legal Research. https://www.vals.ai/industry-reports/vlair-10-14-25

[7] Ambrogi, B. (23 October 2025). Vals AI's Latest Benchmark Finds Legal and General AI Now Outperform Lawyers in Legal Research Accuracy. LawSites. https://www.lawnext.com/2025/10/vals-ais-latest-benchmark-finds-legal-and-general-ai-now-outperform-lawyers-in-legal-research-accuracy.html

[8] Supreme Court of Florida. In re: Amendments to Florida Rule of General Practice and Judicial Administration 2.515, No. SC2026-0673, opinion of 28 May 2026 (per curiam). Copy of the opinion hosted by LawSites: https://www.lawnext.com/wp-content/uploads/2026/05/Opinion_SC2026-0673.pdf

[9] Dahl, M., Magesh, V., Suzgun, M., & Ho, D. E. (2024). Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models. Journal of Legal Analysis, 16, 64-93 (advance access 26 June 2024). https://doi.org/10.1093/jla/laae003 (read at https://dho.stanford.edu/wp-content/uploads/Hallucinations_JLA.pdf)

[10] Guha, N., Zhang, A. K., Tsang, C., Manning, C. D., Nyarko, J., & Ho, D. E. (20 July 2026). There is no free benchmark: An institutional view of legal AI benchmarking. Proceedings of the National Academy of Sciences, 123(30), e2509757122. https://doi.org/10.1073/pnas.2509757122 (read at https://dho.stanford.edu/wp-content/uploads/PNAS_Bench.pdf)

[11] Afane, M., Hariri, E., Ouyang, D., & Ho, D. E. (2026). Benchmarking Legal RAG: The Promise and Limits of AI Statutory Surveys. In CS&law '26: ACM Symposium on Computer Science and Law, 3 to 5 March 2026, Berkeley. Author's copy: https://dho.stanford.edu/wp-content/uploads/Stat_Surveys.pdf

[12] LexisNexis (24 February 2026). General Availability of Lexis+ with Protégé Sets New Standard for Automating Legal Work with Easy-to-Use, Authoritative AI Workflows. LexisNexis Newsroom. https://www.lexisnexis.com/news/en/general-availability-of-lexis-with-protege-sets-new-standard-for-automating-legal-work-with-easy-to-use-authoritative-ai-workflows

[13] Robert, A. (1 June 2026). Florida Supreme Court issues new AI rules for lawyers. ABA Journal. https://www.abajournal.com/news/article/florida-supreme-court-issues-new-ai-rules-for-lawyers

[14] The State Bar of California. Proposed Amendments to the Rules of Professional Conduct Related to Artificial Intelligence [public comment page for the revised proposals; deadline 6 August 2026]. https://www.calbar.ca.gov/public-comment/proposed-amendments-rules-professional-conduct-related-artificial-intelligence (accessed 16 November 2026)

[15] Colbert, E. (5 May 2026). If You Can't Verify It, You Can't Sign It. Thomson Reuters Innovation Blog. https://www.thomsonreuters.com/en-us/posts/innovation/if-you-cant-verify-it-you-cant-sign-it/

[16] LexisNexis (27 October 2026). As Lawyers Face AI Switching Overload, Lexis+ with Protégé Redefines Integrated, Verified Legal Work - in a Single Prompt Box. LexisNexis Newsroom. https://www.lexisnexis.com/news/en/as-lawyers-face-ai-switching-overload-lexis-with-protege-redefines-integrated-verified-legal-work-in-a-single-prompt-box

[17] Artificial Lawyer (28 June 2024). LITIG Forms Legal Industry AI Benchmarking Initiative. https://www.artificiallawyer.com/2024/06/28/litig-forms-legal-industry-ai-benchmarking-initiative/

[18] Litig (Legal IT Innovators Group) (3 July 2024). Industry Collaboration around Benchmarking/Tracking Gen AI Accuracy etc. https://www.litig.org/news/industry-collaboration-around-benchmarkingtracking-gen-ai-accuracy-etc

[19] Litig (Legal IT Innovators Group). Introduction [home page of the Litig AI Benchmark Initiative documentation site]. https://www.litig.org/ai/introduction (accessed 16 November 2026)

[20] Litig (Legal IT Innovators Group). Litig AI Benchmark Initiative - Registered Organisations. https://www.litig.org/ai/register (accessed 16 November 2026)

## How to cite

IAPQB (2026). Do legal AI tools still make things up? What a Stanford test found, how the vendors replied, and how lawyers now check the answers. IAPQB Report No. 53. International AI Practice Qualification Board. https://iapqb.org/research/053-legal-ai-hallucinations.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
