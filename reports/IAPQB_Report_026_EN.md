# When a city's chatbot got the law wrong

**New York City's business chatbot, the city's response, and how the UK tested GOV.UK Chat**

IAPQB Report No. 26 · Case file · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In tests published by the newsroom The Markup in March 2024, New York City's pilot business chatbot said businesses could refuse cash and take workers' tips, and landlords could refuse tenants with housing vouchers. All three answers were wrong [1, 2, 3].
- The city kept the bot online, citing its disclaimer [2, 4]. In January 2026, the next mayor called it "functionally unusable", and the pilot has since ended [5, 6].
- The UK tested GOV.UK Chat in stages from 2023, reported accuracy rising from 76% to 90%, and opened it to GOV.UK app users [7, 8, 9, 10].
- UK and Canadian guidance asks for testing before launch, checks after it, labelled AI answers and clear accountability [11, 12].

## 1. A familiar situation

A New York restaurant owner asks the city's business chatbot whether she can stop taking cash. In The Markup's 2024 tests, the bot replied: "Yes, you can make your restaurant cash-free" [1]. At the time, a 2020 city law required businesses to accept cash [1, 2]. A small note said the bot "may occasionally produce incorrect, harmful or biased content" [1, 2]. Nothing in the answer showed it was wrong [1].

## 2. Why it happens

A chatbot built on a large language model predicts likely words. The UK Government's AI Playbook says such models "cannot be trusted to produce factual content", and that a government chatbot could leave someone "misled about a government service, policy or point of law" [11].

Official sources help only in part. New York's bot drew on "more than 2,000 NYC Business web pages" [13]; the first UK test, also based on official pages, fell short of the accuracy GOV.UK needs [7]. Such sources also raise trust: some UK test users believed answers "could not be inaccurate, because the information came from GOV.UK" [14].

> **IAPQB view.** New York launched its chatbot on the day it published an AI action plan that set work on an AI risk review process to begin within 12 months [13, 15]. The city offered the bot for questions on "compliance with codes and regulations" [13]. After the wrong answers, it pointed to a disclaimer against relying on the bot for legal or professional advice [2, 4]. That left the checking to the business owners the bot was meant to help.

## 3. Three cases

### 3.1 New York City, 2023 to 2024: a city chatbot gets the law wrong

On 16 October 2023, Mayor Eric Adams launched the MyCity Business site, a joint project of the city's Office of Technology and Innovation (OTI) and Department of Small Business Services, with "a pilot for New York City's first citywide AI chatbot" [13].

In tests The Markup published on 29 March 2024, the bot said landlords need not accept tenants with Section 8 vouchers, a restaurant could go cash-free, employers could take workers' tips, and no rules covered telling staff about schedule changes. All four answers were wrong [1, 2]. Refusing tenants who pay with vouchers has been illegal in the city since 2008, with some exceptions [3].

OTI called the bot a pilot that would improve. It told Engadget that the site's disclaimer asks users to check answers against the links and not to use them as a substitute for professional advice [1, 2].

### 3.2 New York City, 2024 to 2026: the bot stays, then the pilot ends

On 2 April 2024, at a press conference, a reporter asked Mayor Adams why the bot was still online. He said: "It's wrong in some areas, and we've got to fix it," and "You can't stay in the lab forever." A deputy mayor said updates were planned and that a disclaimer told New Yorkers not to rely on the bot for legal advice [4].

On 28 January 2026, discussing savings at a budget press conference, Mayor Zohran Mamdani said the previous administration's chatbot "was functionally unusable" and was "costing the administration around half a million dollars" [5]. On 16 November 2026, its address led to a city page, with no date or reason, headed "The Chatbot beta test has ended." [6]

### 3.3 United Kingdom, 2023 to 2026: GOV.UK Chat is tested in stages

The Government Digital Service (GDS) built its first GOV.UK Chat prototype in July 2023 [16]. In the first test, colleagues across government tried to break it ("red teaming"), experts assessed answers at each stage, and 1,000 users were then invited to a private pilot. Accuracy fell short of the site's standard [7].

In a business pilot from November 2024, GDS scored accuracy with subject experts from HM Revenue and Customs (HMRC), compared answers with example answers by content designers, and linked every answer to its source [8]. Its warnings had also been tested: versions on a start page and a "before you start" page did not work well enough, so they moved into timed messages in the chat. Afterwards, just under 80% of research participants understood that the tool could be wrong [14].

By March 2026, more than 10,000 users had asked 26,000 questions in two public pilots. Judged by subject experts and automated tools, accuracy rose from 76% to 90%, so about one answer in ten still fell short. Guardrails blocked all 508 attempts to trick the tool into harmful answers [9]. GOV.UK Chat is now in the GOV.UK app, described as experimental [10, 17].

## 4. How practitioners handle it now

**Testing comes before launch.** The UK AI Playbook says teams "should fully test the product before deployment" and check the live tool regularly [11, Principle 4]. Canada's guide treats a public chatbot as a higher-risk use and asks for performance tests across a variety of uses before deployment [12].

**Release happens in stages.** GDS reviewed the data after each early phase [7] and widened access on the basis of its pilot findings [9]. Canada's guide says to "Document problems, pause deployment, and update the tool if performance levels are not being achieved" [12].

**Labels and warnings are used and tested.** The UK Playbook asks that automated responses to the public say they were written by an AI chatbot [11, Principle 7]. Canada's guide suggests a disclaimer where relevant, alongside telling users that they are dealing with AI [12]. GDS redesigned its warnings after testing them [14].

**The organisation answers for its bot.** A British Columbia tribunal found Air Canada liable for its chatbot's wrong advice: "It makes no difference whether the information comes from a static page or a chatbot" [18, paras 27 and 32]. The UK Playbook cites this case and asks for a senior responsible owner who "will be accountable for the use of AI in a specific project" [11]. Canada's guide asks institutions to "take responsibility for the content generated by these tools" [12].

**Checks continue after launch, with a route to a person.** GDS monitors live use and flags safety and quality issues for human review [16]. The UK Playbook asks for ways for users to report issues and prompt a human review [11, Principle 4], and Canada's guide asks for "alternative non-automated means of communicating" [12]. In March 2026, handing users over to department staff, which some wanted, was longer-term work at GDS [9].

## 5. What to take from this

**For people who use AI at work.** An official chatbot can be wrong about the law, as New York's was on cash, tips and vouchers [1, 2]. Answers about legal duties are worth checking at the linked source page before acting [2, 8].

**For managers of public services.** The UK team kept and published figures on accuracy, blocked attacks and unanswered questions [9]. In New York, despite the disclaimer, the mayor and two deputy mayors had to answer for the bot's errors in public [4].

**For schools, training providers and employers.** The UK work used skills that can be taught: writing example answers, scoring accuracy with subject experts, red teaming, and testing whether users understand a warning [7, 8, 14].

## 6. Limits of this report

The New York findings rest on one newsroom's tests, reported by a second outlet that did not repeat them [1, 2]. No published city evaluation of the pilot was found. The city's page gives no end date or reason [6]; one news report, in an update of 4 February 2026, said the bot had been taken down [19], with no second source found. The cost figure is the mayor's own [5], and the UK figures come from GDS's own tests [7, 9, 14]. The UK and Canadian documents are guidance; the Air Canada ruling is one small claims decision [11, 12, 18]. This report does not test any chatbot.

## References

[1] Lecher, C. (29 March 2024). NYC’s AI Chatbot Tells Businesses to Break the Law. The Markup (co-published with Documented and The City). https://themarkup.org/artificial-intelligence/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law

[2] MacDonald, C. (30 March 2024; updated 31 March 2024). NYC’s business chatbot is reportedly doling out ‘dangerously inaccurate’ information. Engadget. https://www.engadget.com/nycs-business-chatbot-is-reportedly-doling-out-dangerously-inaccurate-information-203926922.html

[3] NYC Commission on Human Rights. Source of Income Discrimination. https://www.nyc.gov/site/cchr/media/source-of-income.page (accessed 16 November 2026)

[4] Office of the Mayor, City of New York (2 April 2024). Transcript: Mayor Adams Holds In-Person Media Availability. https://www.nyc.gov/mayors-office/news/2024/04/transcript-mayor-adams-holds-in-person-media-availability-april-02

[5] Office of the Mayor, City of New York (28 January 2026). Mayor Mamdani Details “Adams Budget Crisis” [statement with press conference transcript]. https://www.nyc.gov/mayors-office/news/2026/01/mayor-mamdani-details--adams-budget-crisis-

[6] City of New York. The Chatbot beta test has ended. https://www.nyc.gov/main/error/chatbot-maintenance (reached by redirect from https://chat.nyc.gov/; accessed 16 November 2026)

[7] Gregory, M., Tosi, A., McDonald, S., & Sewell, R. (18 January 2024). The findings of our first generative AI experiment: GOV.UK Chat. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2024/01/18/the-findings-of-our-first-generative-ai-experiment-gov-uk-chat/

[8] Dub, S., & Davey, J. (5 November 2024). We’re running a private beta of GOV.UK Chat. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2024/11/05/were-running-a-private-beta-of-gov-uk-chat/

[9] Dub, S., & McDonald, S. (16 March 2026). 5 things we learned testing GOV.UK Chat: an AI assistant for government. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/

[10] Government Digital Service (1 July 2025; last updated 13 February 2026). Download the GOV.UK app. GOV.UK. https://www.gov.uk/guidance/download-the-govuk-app (accessed 16 November 2026)

[11] Government Digital Service (10 February 2025). Artificial Intelligence Playbook for the UK Government. Principles 4 and 7, and the sections "Accountability and responsibility" and "Hallucinations". GOV.UK. https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html

[12] Treasury Board of Canada Secretariat. Guide on the use of generative artificial intelligence. Government of Canada. https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html (page dated 24 September 2026; accessed 16 November 2026)

[13] Office of the Mayor, City of New York (16 October 2023). Mayor Adams Releases First-of-Its-Kind Plan For Responsible Artificial Intelligence Use In NYC Government. https://www.nyc.gov/mayors-office/news/2023/10/mayor-adams-releases-first-of-its-kind-plan-responsible-artificial-intelligence-use-nyc

[14] Bartwicki, K., McDonald, S., McArthur, L., Sweeney, A., & Sewell, R. (28 November 2024). How we’re designing GOV.UK Chat. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2024/11/28/how-were-designing-gov-uk-chat/

[15] New York City Office of Technology and Innovation (October 2023). The New York City Artificial Intelligence Action Plan, action 1.6. https://www.nyc.gov/assets/oti/downloads/pdf/reports/artificial-intelligence-action-plan.pdf

[16] Tosi, A., & Lange, N. (15 May 2026; editor's note of 2 June 2026). Developing GOV.UK Chat: Our data science and AI engineering journey. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2026/05/15/developing-gov-uk-chat-our-data-science-and-ai-engineering-journey/

[17] Wuerth, C., & Crusellas, M. (19 August 2026). Designing GOV.UK Chat for the GOV.UK app. Inside GOV.UK blog, Government Digital Service. https://insidegovuk.blog.gov.uk/2026/08/19/designing-gov-uk-chat-for-the-gov-uk-app/

[18] Moffatt v. Air Canada, 2024 BCCRT 149, Civil Resolution Tribunal (British Columbia), file SC-2023-005609, reasons for decision issued 14 February 2024. https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do

[19] Lecher, C., & Honan, K. (30 January 2026; update of 4 February 2026). Mamdani to kill the NYC AI chatbot we caught telling businesses to break the law. The Markup (co-reported with THE CITY). https://themarkup.org/artificial-intelligence/2026/01/30/mamdani-to-kill-the-nyc-ai-chatbot-we-caught-telling-businesses-to-break-the-law

## How to cite

IAPQB (2026). When a city's chatbot got the law wrong: New York City's business chatbot, the city's response, and how the UK tested GOV.UK Chat. IAPQB Report No. 26. International AI Practice Qualification Board. https://iapqb.org/research/026-city-chatbot-wrong-law.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
