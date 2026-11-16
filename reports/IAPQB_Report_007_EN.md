# Hired under a stolen name

**How fake candidates got remote jobs, and the checks employers now use**

IAPQB Report No. 7 · Practice report · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In June 2022 the FBI reported more complaints about people who used deepfakes and stolen personal data to apply for remote jobs [1].
- In July 2024 the security company KnowBe4 said a software engineer it hired had passed four video interviews and a background check using a stolen US identity and an AI-altered photo. Its security software caught malware on the new laptop [2].
- US prosecutors say North Korean IT workers used stolen identities and US "laptop farms" to get jobs at hundreds of companies. In July 2025 an Arizona woman who hosted laptops for them was sentenced to 102 months in prison [3, 4].
- Current checks come in layers: identity at several stages, live video with filters off, laptops sent only to checked addresses, and monitoring after hire [5, 6, 7]. In October 2026 the FBI said no single sign identifies these workers reliably [6].

## 1. A familiar situation

A hiring manager needs a remote developer who can start soon. One candidate has a strong CV, does well on video and passes the background check. The company sends a laptop to the address the new hire gives. Nobody on the team has met the person, and each step has checked only one thing.

## 2. Why it happens

In remote hiring, each check answers a narrow question. A background check asks whether a name belongs to a real person with a clean record, and a stolen identity can pass [2]. In 2022 the FBI said background checks had found that data given by some applicants belonged to someone else [1]. A video call shows a face, and AI tools can change faces. The FBI described interviews in which lip movements did not fully match the sound [1], and in 2025 it reported face-swapping in video job interviews [5]. A home delivery shows only that someone there signed for it [7].

The US Justice Department says North Korean IT worker schemes aim to evade sanctions and fund the regime's weapons programmes [3].

> **IAPQB view.** At KnowBe4, four video interviews, a background check, other standard checks and email-only reference checks all passed [2, 7]. Each check confirmed one fact, and a stolen identity with an AI-altered photo satisfied each one. The problem came to light only after the laptop arrived [2]. In 2026 the FBI said these workers "cannot be identified reliably with a single indicator" [6].

## 3. Three cases

### 3.1 United States, 2024: a security company hires a fake IT worker

On 23 July 2024 KnowBe4 described a hire for its internal IT AI team [2]. HR held four video interviews and confirmed the person matched the application photo, and the background check came back clear. The company said the hire was a North Korean worker, "a real person using a valid but stolen US-based identity", and that the photo was AI "enhanced", starting from a stock photo [2]. It later said it had no reason to believe AI was used in the CV or interviews [7].

KnowBe4 sent a Mac workstation to the address given, and the device began loading malware the moment it arrived. Security software raised alerts from 9:55 pm EST on 15 July 2024, and the security team contained the device at about 10:20 pm [2]. KnowBe4 said no data was lost, and it shared what it collected with Mandiant and the FBI [2]. In October 2024 it published ten changes to its hiring process [2, 7].

### 3.2 Arizona, 2025: a home laptop farm and jobs at 309 companies

On 24 July 2025 a federal judge in the District of Columbia sentenced an Arizona woman to 102 months in prison. She had pleaded guilty to wire fraud conspiracy, aggravated identity theft and money laundering conspiracy [4]. The Justice Department said North Korean IT workers used 68 stolen US identities to get jobs at 309 US companies, and the scheme generated more than $17 million [4]. She hosted company laptops at home so employers believed the work was done in the US. Investigators seized more than 90 laptops there, and she had shipped 49 laptops and other devices abroad [4]. The US Attorney said: "Corporations failing to verify virtual employees pose a security risk for all" [4]. In June 2025 the department had announced searches of 29 known or suspected laptop farms in 16 states [3].

### 3.3 United States, 2025 to 2026: screening at scale, and stand-ins on camera

In December 2025 Amazon's chief security officer wrote on LinkedIn that the company had stopped more than 1,800 suspected North Korean operatives from joining since April 2024. It had detected 27% more such applications quarter over quarter that year [8, 9]. He said its detections "combine AI-powered screening with human verification" [8].

On 13 October 2026 the FBI said the workers were paying Americans to appear on camera, take part in interviews, lend their identities and keep work laptops online. They now used more laptop farms, each with fewer laptops. Some subcontracted whole jobs to freelancers, usually in Pakistan, India, Nigeria or nearby countries [6].

## 4. How practitioners handle it now

**Identity is checked at several stages.** The FBI asks companies to verify identity during interviewing, onboarding and throughout employment [5]. In 2026 it called this "identity in depth" and said E-Verify, a US passport requirement, several identity documents or live verification can "raise friction" for these workers [6]. KnowBe4 said it was moving to a verification provider with fake-ID detection and face matching [7].

**Video stays on, filters stay off, and questions test the story.** KnowBe4 requires video in interviews and asks applicants to turn off background blur and filters. When doubts remain, its recruiters ask casual questions, for example about local food, to test a claimed location [7]. The FBI suggests "soft" questions about location and education, and as much in-person hiring and onboarding as possible [5].

**Laptops go only to a checked address.** KnowBe4 said it would ship equipment only to the address on the application or to a nearby UPS store that checks the recipient's ID, and only after all other checks [7]. In the Arizona case, laptops for many employers sat in one home [4].

**Monitoring continues after the start date.** At KnowBe4, security software on the device raised the first alert [2]. The FBI advises watching for remote desktop software, logins to one account from various IP addresses in a short time, data moved to cloud accounts, and software that runs several video calls at once [5]. In 2026 it added remote-control hardware, extra laptops used to control company devices, and frequent changes of bank account or address [6].

**HR, IT and security work together, and cases are reported.** KnowBe4 recruiters take any suspicion straight to the chief information security officer [7]. The FBI says IT, HR, security and management staff each have insights that work better combined [6], and asks companies to report cases to IC3 [1, 5, 6].

**Controls are tuned to protect real applicants.** The FBI warns that aggressive controls carry "unusually high risks of generating false positives" that could harm legitimate employees and filter out qualified applicants. Relying only on "ban lists" of names can block qualified applicants and may harm potential victims of identity theft [6].

## 5. What to take from this

**For recruiters and HR teams.** Most of the changes KnowBe4 made after its case were recruiter tasks: checking whether a phone number is VoIP, calling references, asking for filters to be off and passing doubts to the security lead [7].

**For IT and security teams.** At KnowBe4, monitoring caught what the hiring checks missed [2]. Many signs on the FBI's lists also appear in legitimate remote work [5, 6], and the FBI asks for careful calibration [6].

**For freelancers and people seeking extra income.** The FBI says the workers target Americans under financial stress for tasks such as hosting laptops or lending identities, and pay freelancers in South Asia and West Africa to apply for jobs, do the work or sit interviews [6]. Paid offers of this kind fit the patterns the FBI describes. The Arizona woman who hosted laptops was sentenced to 102 months in prison [4].

## 6. Limits of this report

Most sources are FBI notices, Justice Department press releases and one company's own account. The Amazon figures come from two news reports of a LinkedIn post [8, 9]. Indictments contain allegations [3]; the Arizona case ended in a guilty plea [4]. KnowBe4 limited its details because of an FBI investigation [2]. All three cases involve North Korean schemes; fraud by individual job seekers is not covered. This report tests no verification product, and rules on background checks, biometric data and staff monitoring differ by country.

## References

[1] Federal Bureau of Investigation, Internet Crime Complaint Center (28 June 2022). Deepfakes and Stolen PII Utilized to Apply for Remote Work Positions. Public service announcement I-062822-PSA. https://www.ic3.gov/PSA/2022/PSA220628

[2] Sjouwerman, S. (23 July 2024). How a North Korean Fake IT Worker Tried to Infiltrate Us. KnowBe4 blog (updated 19 October 2024). https://blog.knowbe4.com/how-a-north-korean-fake-it-worker-tried-to-infiltrate-us

[3] US Department of Justice, Office of Public Affairs (30 June 2025). Justice Department Announces Coordinated, Nationwide Actions to Combat North Korean Remote Information Technology Workers’ Illicit Revenue Generation Schemes. Press release 25-680, updated 3 July 2025. https://www.justice.gov/opa/pr/justice-department-announces-coordinated-nationwide-actions-combat-north-korean-remote

[4] US Department of Justice, Office of Public Affairs (24 July 2025). Arizona Woman Sentenced for $17M Information Technology Worker Fraud Scheme that Generated Revenue for North Korea. Press release 25-785. https://www.justice.gov/opa/pr/arizona-woman-sentenced-17m-information-technology-worker-fraud-scheme-generated-revenue

[5] Federal Bureau of Investigation, Internet Crime Complaint Center (23 January 2025). North Korean IT Workers Conducting Data Extortion. Public service announcement I-012325-PSA. https://www.ic3.gov/psa/2025/psa250123

[6] Federal Bureau of Investigation, Internet Crime Complaint Center (13 October 2026). North Korean IT Workers Expanding Use of Facilitators, Broadening Recruitment. Public service announcement I-101326-PSA. https://www.ic3.gov/PSA/2026/PSA261013

[7] Sjouwerman, S. (19 October 2024). North Korean IT Worker Threat: 10 Critical Updates to Your Hiring Process. KnowBe4 blog. https://blog.knowbe4.com/north-korean-it-worker-threat-10-critical-updates-to-your-hiring-process

[8] Lyons, J. (18 December 2025). Amazon blocked 1,800 suspected North Korean scammers seeking jobs. The Register. https://www.theregister.com/2025/12/18/amazon_blocked_fake_dprk_workers/

[9] Aliieva, E. (23 December 2025). North Korean agents are trying to infiltrate Amazon, chief security officer says. NBC News. https://www.nbcnews.com/world/north-korea/north-korea-agents-amazon-jobs-laptop-farms-ai-rcna250627

## How to cite

IAPQB (2026). Hired under a stolen name: how fake candidates got remote jobs, and the checks employers now use. IAPQB Report No. 7. International AI Practice Qualification Board. https://iapqb.org/research/007-fake-candidates-remote-hiring.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
