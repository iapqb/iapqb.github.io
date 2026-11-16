# Who owns the code an AI assistant suggests?

**What the Copilot lawsuit decided, what vendors promise, and how teams check AI-written code for licences**

IAPQB Report No. 20 · Practice report · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- A US court dismissed most claims in the GitHub Copilot class action in 2023 and 2024. In September 2026, an appeals court held that, as alleged, Copilot creates new code, so it does not "remove or alter" author and copyright notices. Two contract claims are pending [1, 2, 3].
- In 2023, Microsoft promised to defend paying commercial Copilot customers against copyright claims, on conditions. GitHub tied its own protection to blocking matching code or following cited licences; since April 2026, Microsoft lists no such step for GitHub [4, 5, 6].
- GitHub's general terms claim no ownership of Copilot's output and leave third-party licences to the user. US copyright needs a human author, and prompts alone are unlikely to make the user one [7, 8, 9].
- Practitioners set the public-code filter centrally, read the licence of any match, scan contributions, check the conditions of vendor promises and record the tool used [10, 11, 12, 13].

## 1. A familiar situation

A developer asks a coding assistant to finish a function and gets twenty lines that work. They look like part of a well-known library, but nothing shows their source or licence. The code ships to a client, whose lawyer asks who owns it and whose licence comes with it.

## 2. Why it happens

Copilot was trained on millions of GitHub projects, many under open-source licences. A common licence condition is that the licence, with the author's name and copyright notice, goes with any copy [3]. GitHub says that typically under one percent of Copilot's inline suggestions match public code [11]. The Copilot plaintiffs say such code arrives without its licence or author's name [3].

GitHub's general terms claim no ownership of output and make the user responsible for any third-party licence [7]. Copyright in the output needs a human author, a US appeals court held in March 2025; the Supreme Court declined to review the case on 2 March 2026 [8, 14]. The US Copyright Office says AI output can be protected where a human determined its expressive elements, and that "prompts alone" are unlikely to be enough [9].

> **IAPQB view.** Four years on, the Copilot case has produced no ruling on whether any suggestion infringed copyright; the appeal dealt only with removed author and copyright notices [3]. So far, contracts and project rules decide who carries the risk: vendor promises with conditions [13, 15] and projects that refuse or restrict AI-written code [16, 17, 18].

## 3. Three cases

### 3.1 California, 2022 to 2026: the Copilot class action

On 3 November 2022, two anonymous programmers sued GitHub, Microsoft and OpenAI in federal court in San Francisco [3, 19]. The combined case's complaint made twelve claims, including breach of open-source licences and removal of "copyright management information" (CMI), such as author names, under the Digital Millennium Copyright Act (DMCA) [1, 3]. On 11 May 2023, Judge Jon S. Tigar let the licence claim and part of the DMCA claim go forward, and dismissed the other ten claims, two of them for good [1].

The court then held that a DMCA claim needs identical copies, and the plaintiffs' examples showed modified or functionally equivalent code [3]. On 24 June 2024, it dismissed that claim for good and let the claim for breach of six open-source licences continue [2]. It later certified that ruling for an early appeal [3].

On 16 September 2026, the US Court of Appeals for the Ninth Circuit upheld the dismissal. On the facts alleged, it held, Copilot does not "remove or alter" CMI, because it creates "new works that never contained that information" [3]. It expressed no view on whether similar output could support a copyright infringement claim [3]. Two contract claims remain pending, and the judgment took effect on 8 October 2026 [3, 20].

### 3.2 Microsoft and GitHub, 2023 to 2026: a promise with conditions

On 7 September 2023, Microsoft announced its Copilot Copyright Commitment for paid commercial Copilot services, including GitHub Copilot. If such a customer is sued for copyright infringement for using a Copilot or its output, Microsoft will defend it and pay any adverse judgment or settlement, if it used the built-in guardrails and content filters. In November 2023, the promise was extended to the Azure OpenAI Service [4].

In September 2024, GitHub wrote that business customers who blocked matching suggestions were protected by its indemnity. So were those who used code referencing and complied with the licences it cites [5]. From 3 April 2026, Microsoft lists no additional required steps for GitHub offerings and says the Duplicate Detection filter is no longer required [6]. Its Product Terms keep other conditions: the customer must not have disabled or evaded the content filters or other safety systems, or used output in a way it "knows, or should know, is likely to infringe" [6, 13].

### 3.3 Open-source projects, 2024 and 2025: AI-written code banned or restricted

On 14 April 2024, the Gentoo Council forbade contributions made with the help of natural language processing AI tools. It named copyright first: such material could infringe, weaken Gentoo's own copyright claims and "void the guarantees given by copyleft licensing" [16]. NetBSD's commit guidelines say code generated by tools such as Copilot or ChatGPT is "presumed to be tainted code" and needs the core team's prior written approval [17]. In June 2025, QEMU decided to decline contributions believed to include or derive from AI-generated content. Contributors must certify each patch under the Developer's Certificate of Origin, and QEMU calls the copyright and licence status of AI output "ill-defined" [18].

## 4. How practitioners handle it now

**The public-code filter is set for the whole organisation.** With blocking on, most Copilot products hide suggestions that match or nearly match public code on GitHub, checking about 150 characters of surrounding code too. Staff who get Copilot through an organisation on GitHub Enterprise Cloud inherit its setting [5, 10].

**Where matches are allowed, the licence is read before the code stays.** Copilot records the URLs and any detected licences of public code matching an accepted suggestion, so users can decide whether to use, attribute or remove it. Its index covers only public code on GitHub [11]. For Azure OpenAI code, Microsoft's commitment requires its protected material code model in "annotate" or "filter" mode, and in annotate mode the customer must follow any cited licence [6].

**Contributions are checked for copied code, within known limits.** The Apache Software Foundation prefers that AI-generated code hold no third-party material, or use it with permission, for example under a compatible licence. The tool's similarity information or code scanning can show this, though many tools give none and scanning finds only known open-source code [12].

**Vendor promises are read for their conditions and gaps.** AWS defends users of Amazon Q and Kiro, except free tiers, against infringement claims over output, and gives no defence to customers who "fail to enable available filters and other tools" [15]. GitHub's Terms of Service, which govern Copilot users not covered by GitHub's business terms or Microsoft's, contain no defence promise and make users defend GitHub against claims over output [7, 21].

**The commit names the tool and the person responsible.** Apache recommends a commit line such as "Generated-by:" naming the tool and version [12]. In QEMU, a "Signed-off-by" line states that the author takes responsibility for the whole patch, including any parts generated or assisted by AI or other tools [18].

## 5. What to take from this

**For people who write code with AI assistants.** Treat a long, familiar-looking suggestion as someone else's code until its source is known, and read the licence in the code reference before keeping it [11]. Check project rules too: Gentoo and QEMU refuse AI-written code [16, 18].

**For managers and legal teams.** Set filter and code-reference policies centrally and record them: Microsoft and AWS both ask customers seeking a defence to show they qualify [6, 15]. Check which plans staff use: free tiers fall outside the AWS promise, and GitHub's general terms contain none [7, 15].

**For schools, training providers and employers.** The Copilot case left open whether matching code infringes [3]. Courses can cover what open-source licences require, how to read a code reference and how to record the tool used [11, 12].

## 6. Limits of this report

The law described is US law. The Copilot case continues; the docket lists entries of 26 and 28 October 2026 whose full text could not be read [22]. GitHub's business terms could not be read; their conditions here come from Microsoft's terms and GitHub's 2024 post. Vendor terms change; all pages were read on 16 November 2026. This report does not test any AI tool.

## References

[1] Doe v. GitHub, Inc., No. 4:22-cv-06823-JST (N.D. Cal.), order granting in part and denying in part motions to dismiss, Document 95, filed 11 May 2023. https://storage.courtlistener.com/recap/gov.uscourts.cand.403220/gov.uscourts.cand.403220.95.0.pdf

[2] Doe v. GitHub, Inc., No. 4:22-cv-06823-JST (N.D. Cal.), order granting in part denying in part motions to dismiss [the second amended complaint], Document 253, dated 24 June 2024. https://storage.courtlistener.com/recap/gov.uscourts.cand.403220/gov.uscourts.cand.403220.253.0.pdf

[3] Doe v. GitHub, Inc., No. 24-7700 (9th Cir.), opinion, argued 11 February 2026, filed 16 September 2026. United States Court of Appeals for the Ninth Circuit. https://cdn.ca9.uscourts.gov/datastore/opinions/2026/09/16/24-7700.pdf

[4] Smith, B., & Nowbar, H. (7 September 2023). Microsoft announces new Copilot Copyright Commitment for customers. Microsoft On the Issues. https://blogs.microsoft.com/on-the-issues/2023/09/07/copilot-copyright-commitment-ai-legal-concerns/

[5] Prabhakaran, Y. (30 September 2024, updated 7 October 2024). Code referencing now generally available in GitHub Copilot and with Microsoft Azure AI. The GitHub Blog. https://github.blog/news-insights/product-news/code-referencing-now-generally-available-in-github-copilot-and-with-microsoft-azure-ai/

[6] Microsoft. Customer Copyright Commitment Required Mitigations. Microsoft Learn. https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/customer-copyright-commitment (accessed 16 November 2026; page last updated 20 March 2026)

[7] GitHub (effective 27 April 2026). GitHub Terms of Service, section J: AI Features, Training, and Your Data. GitHub Docs. https://docs.github.com/en/site-policy/github-terms/github-terms-of-service

[8] Thaler v. Perlmutter, No. 23-5233 (D.C. Cir.), opinion, decided 18 March 2025. United States Court of Appeals for the District of Columbia Circuit. https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf

[9] U.S. Copyright Office (January 2025). Copyright and Artificial Intelligence, Part 2: Copyrightability. A Report of the Register of Copyrights. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf

[10] GitHub. Managing GitHub Copilot policies as an individual subscriber [section "Enabling or disabling suggestions matching public code"]. GitHub Docs. https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies (accessed 16 November 2026)

[11] GitHub. GitHub Copilot in IDEs [section "References to matching public code"]. GitHub Docs. https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides (accessed 16 November 2026)

[12] The Apache Software Foundation. ASF Generative Tooling Guidance. https://www.apache.org/legal/generative-tooling.html (accessed 16 November 2026)

[13] Microsoft. Microsoft Product Terms [For Online Services, Microsoft Generative AI Services: "Customer Copyright Commitment"]. https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all (accessed 16 November 2026)

[14] Supreme Court of the United States. Docket for 25-449 [Thaler v. Perlmutter; petition for a writ of certiorari denied 2 March 2026]. https://www.supremecourt.gov/docket/docketfiles/html/public/25-449.html (accessed 16 November 2026)

[15] Amazon Web Services (last updated 5 November 2026). AWS Service Terms, section 50.10: Defense of Claims and Indemnity for Indemnified Generative AI Services. https://aws.amazon.com/service-terms/

[16] Gentoo Council (policy voted 14 April 2024; page last edited 11 September 2026). Project:Council/AI policy. Gentoo wiki. https://wiki.gentoo.org/wiki/Project:Council/AI_policy

[17] The NetBSD Foundation. NetBSD Commit Guidelines. https://www.netbsd.org/developers/commit-guidelines.html (accessed 16 November 2026)

[18] The QEMU Project Developers. Code provenance [section "Use of AI-generated content"]. QEMU documentation, version 11.1.90. https://www.qemu.org/docs/master/devel/code-provenance.html (accessed 16 November 2026). The policy was added by the commit "docs: define policy forbidding use of AI code generators", committed 24 June 2025: https://gitlab.com/api/v4/projects/qemu-project%2Fqemu/repository/commits/3d40db0efc22520fa6c399cf73960dced423b048

[19] Doe 1 v. GitHub, Inc., No. 3:22-cv-06823 (N.D. Cal., San Francisco Division), class action complaint, Document 1, filed 3 November 2022. https://githubcopilotlitigation.com/pdf/06823/1-0-github_complaint.pdf

[20] Doe v. GitHub, Inc., No. 24-7700 (9th Cir.), mandate, filed 8 October 2026, entered as Document 297 in No. 4:22-cv-06823-JST (N.D. Cal.). https://storage.courtlistener.com/recap/gov.uscourts.cand.403220/gov.uscourts.cand.403220.297.0.pdf

[21] GitHub. GitHub Terms for Additional Products and Features [section "GitHub Copilot"]. GitHub Docs. https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features (accessed 16 November 2026)

[22] Free Law Project. DOE 1 v. GitHub, Inc. (4:22-cv-06823) [court docket, District Court, N.D. California]. CourtListener. https://www.courtlistener.com/docket/65669506/doe-1-v-github-inc/ (accessed 16 November 2026; last known filing 28 October 2026)

## How to cite

IAPQB (2026). Who owns the code an AI assistant suggests? What the Copilot lawsuit decided, what vendors promise, and how teams check AI-written code for licences. IAPQB Report No. 20. International AI Practice Qualification Board. https://iapqb.org/research/020-ai-code-ownership.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
