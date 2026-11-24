# Cloned voices in robocalls

**How US rules treat AI voices and faked caller ID, and what regulators ask of carriers and call recipients**

IAPQB Report No. 48 · Rule explainer · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- On 21 January 2024, 9,581 robocalls with a fake voice of President Biden told likely Democratic voters in New Hampshire to "save your vote" for November. The caller ID showed a local party figure's number [1].
- In February 2024 the US Federal Communications Commission (FCC) confirmed that AI voices are "artificial" voices under the Telephone Consumer Protection Act (TCPA), so such calls generally need prior consent [2].
- The FCC fined the consultant behind the calls $6 million for faking the caller ID, and one carrier, Lingo Telecom, agreed to pay $1 million [1, 3, 4]. A state jury acquitted the consultant in June 2025 [5, 6].
- Regulators ask carriers to vouch only for numbers they have checked, and people to test a familiar voice by calling back on a known number [3, 4, 7, 8, 9].

## 1. A familiar situation

A press officer at a state agency gets a voice message that sounds like a senior official she knows. It asks her to switch to another messaging app and send a colleague's number. The voice sounds right, but the number is new. In May 2025 the FBI warned of such messages aimed at officials and their contacts, some with AI voices that "can sound nearly identical" to real ones [7].

## 2. Why it happens

People judge a call by the number shown and by the voice. In New Hampshire both were false. The voice was made for $150 with Eleven Labs software the day before the calls, and the consultant chose a local number because people are "more likely to pick up" [1].

The network's check covers only the number. Under STIR/SHAKEN, required on US internet-based networks since June 2021, the first carrier rates each call with an "attestation". An "A" means the carrier knows the customer and has verified its right to use the number. Later carriers use the rating in deciding whether to block or flag calls [3].

One call can break several rules: the TCPA's consent rule [2]; the Truth in Caller ID Act, which bans faking caller ID to defraud or cause harm [1]; carriers' STIR/SHAKEN duties [3]; and state criminal law [5]. To collect an unpaid FCC fine, the government "must prove its case to a jury" in a new trial, the Supreme Court said in June 2026 [10].

> **IAPQB view.** In New Hampshire the network's check rested on paperwork. Lingo relied on its customer's certification, its past checks and a 16-year history, and took "no additional steps" [4, para 9]. The checks that worked came later: a complaint the next morning, an industry traceback, and an FCC cease-and-desist letter to the carrier after 16 days [1, 11]. The criminal case ended in acquittal [5].

## 3. What happened

### 3.1 New Hampshire, 2024: a fake president two days before the primary

On Sunday 21 January 2024 a calling firm sent 9,581 calls to likely Democratic voters [1]. A voice made to sound like President Biden said: "It's important that you save your vote for the November election" [1, para 6]. The caller ID showed the number of a former state Democratic Party chair whose political committee was urging a write-in vote for Biden [1]. Lingo Telecom carried 3,978 of the calls for its customer Life Corp. and gave them all an "A", relying on a one-page form from 2021 in which Life certified it had verified its customers' numbers [1, 3, 4]. On 6 February the FCC sent Lingo a cease-and-desist letter, and told other carriers they could block its traffic if it did not act within 48 hours [11, 12].

### 3.2 Washington, 2024: the FCC says AI voices are "artificial"

On 8 February 2024 the FCC released a unanimous declaratory ruling [1, 2]. It confirmed that the TCPA's limits on calls using an "artificial or prerecorded voice" cover "current AI technologies that generate human voices", fully synthetic or resembling a real person's voice taken from an "audio clip" [2, paras 2, 8]. Such calls need the prior express consent of the person called, unless the call is for an emergency purpose or an exemption applies [2]. The FCC chair said this lets state attorneys general sue such callers for damages [2].

### 3.3 Washington, 2024: fines for the caller and the carrier

The FCC fined the consultant under the Truth in Caller ID Act, which applies whatever the call says [1]. It set $1,000 per call, doubled it for intentional, egregious and harmful conduct, and applied it to 3,000 verified calls. He did not respond, and the $6 million fine was confirmed on 26 September 2024 [1]. For Lingo the FCC proposed $2 million, $1,000 for each of 2,000 verified calls [3]. In August 2024 Lingo settled for $1 million and a 36-month compliance plan [4].

### 3.4 Belknap County, 2025: a jury acquits

In May 2024 New Hampshire charged the consultant with 13 felony counts of voter suppression and 13 misdemeanour counts of impersonating a candidate [13]. At trial the defence argued that the primary was meaningless because the Democratic National Committee had not sanctioned it, and that the message never named Biden [5, 6]. On 13 June 2025 the jury acquitted him on all counts [5, 6]. He told the Associated Press he would not pay the FCC fine; WMUR reported officials as saying it "still stands" [5, 6].

## 4. How practitioners handle it now

**Callers must get consent and say who they are.** An AI-voice call needs prior consent, and must name the caller at the start and give a phone number [2, 14]. In August 2024 the FCC also proposed a notice at the start of each call that it uses AI-generated technology [14].

**One carrier may now give an "A" only to numbers it provided.** Under its consent decree, Lingo may apply an A-level attestation only if it has itself provided the caller ID number [4]. The FCC said that a customer's "blanket self-attestation" did not establish that the customer could use the number [3].

**Customers and upstream carriers must be checked.** Lingo must document each customer that buys its SIP trunks (internet calling lines), including a company's good standing and any past robocall rulings. Before carrying another provider's calls, it must check that provider's Robocall Mitigation Database filing and its record of answering traceback requests on time over the past 12 months [4]. USTelecom's Industry Traceback Group traced the calls to Lingo [1].

**Regulators advise checking a familiar voice through a second channel.** The Federal Trade Commission (FTC) advises: "Don't trust the voice", and to call back on "a phone number you know is theirs" [8]. The FBI advises hanging up and calling the organisation's own number, agreeing a secret word with family, and finding an official's number independently [7, 9].

**Public bodies say what they never ask for by phone.** The FBI states that law enforcement and government authorities "will never contact members of the public by telephone or text message to demand any form of payment" [15]. From January 2025 to July 2026 it logged nearly 61,000 complaints of law enforcement or government impersonation scams, AI or not, with losses above $1.6 billion [15].

## 5. What to take from this

**For people who take calls at work.** In New Hampshire both the voice and the number were false [1]. The FBI and the FTC advise checking any request for money or information by calling back on a number found independently [7, 8, 9].

**For compliance teams at carriers.** Lingo's "A" ratings rested on a one-page form and a long customer relationship [3, 4]. Its consent decree lists what the FCC accepted as a remedy: customer records, checks on upstream carriers and no cash, gift card or cryptocurrency payments [4].

**For managers in public bodies and election offices.** Staff and the public need a fixed test, such as the FBI's: officials never demand payment by phone [15]. In New Hampshire the party figure whose number was used reported the calls the next morning [1].

## 6. Limits of this report

This report covers US rules only. Since June 2025, courts in enforcement cases are "not bound by the agency's interpretation" of a law and give it "appropriate respect" [16]; the 2024 ruling is such an interpretation [2]. No source opened shows whether the FCC adopted its August 2024 proposals, or whether the fine was paid or a collection suit filed [1, 5, 10, 14]. The sources do not explain why the trial counts (11 and 11) differ from the May 2024 charges (13 and 13) [5, 13]. The League of Women Voters' civil suit is not covered [1]. This report is not legal advice.

## References

[1] Federal Communications Commission (adopted 26 September 2024, released 30 September 2024). In the Matter of Steve Kramer, Forfeiture Order, FCC 24-104, File No. EB-TCD-24-00036094 (with statements of Chairwoman Rosenworcel and Commissioner Gomez). https://docs.fcc.gov/public/attachments/FCC-24-104A1.pdf

[2] Federal Communications Commission (adopted 2 February 2024, released 8 February 2024). In the Matter of Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, CG Docket No. 23-362, Declaratory Ruling, FCC 24-17 (with statements of Chairwoman Rosenworcel and Commissioners Starks and Gomez). https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf

[3] Federal Communications Commission (adopted 23 May 2024, released 28 May 2024). In the Matter of Lingo Telecom, LLC, Notice of Apparent Liability for Forfeiture, FCC 24-60. https://docs.fcc.gov/public/attachments/FCC-24-60A1.pdf

[4] Federal Communications Commission, Enforcement Bureau (21 August 2024). In the Matter of Lingo Telecom, LLC, Order and Consent Decree, DA 24-790. https://docs.fcc.gov/public/attachments/DA-24-790A1.pdf

[5] Ramer, H. (13 June 2025). New Hampshire jury acquits consultant behind AI robocalls mimicking Biden on all charges. Associated Press, as published by News4JAX. https://www.news4jax.com/news/politics/2025/06/13/new-hampshire-jury-acquits-consultant-behind-ai-robocalls-mimicking-biden-on-all-charges/

[6] Downey, K. C. (13 June 2025). Man found not guilty on all counts at trial over AI robocalls sent to New Hampshire primary voters. WMUR. https://www.wmur.com/article/steven-kramer-trial-new-hampshire-robocalls-61325/65060141

[7] Federal Bureau of Investigation, Internet Crime Complaint Center (15 May 2025). Senior US Officials Impersonated in Malicious Messaging Campaign. Public service announcement I-051525-PSA. https://www.ic3.gov/PSA/2025/PSA250515

[8] Puig, A. (20 March 2023). Scammers use AI to enhance their family emergency schemes. Federal Trade Commission, Consumer Advice. https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes

[9] Federal Bureau of Investigation, Internet Crime Complaint Center (3 December 2024). Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud. Public service announcement I-120324-PSA. https://www.ic3.gov/PSA/2024/PSA241203

[10] Federal Communications Commission, et al. v. AT&T, Inc., No. 25-406 (together with No. 25-567, Verizon Communications, Inc. v. Federal Communications Commission, et al.), 608 U.S. 531, Supreme Court of the United States, 4 June 2026 (preliminary print). https://www.supremecourt.gov/opinions/25pdf/608us2r43_m648.pdf

[11] Federal Communications Commission, Enforcement Bureau (6 February 2024). [Letter to Lingo Telecom, LLC] Re: Notice of Suspected Illegal Traffic. https://docs.fcc.gov/public/attachments/DOC-400264A1.pdf

[12] Federal Communications Commission, Enforcement Bureau (6 February 2024). Robocall Enforcement Notice to All U.S.-Based Voice Service Providers: FCC Enforcement Bureau Notifies All U.S.-Based Providers of Rules Permitting Them to Block Robocalls Transmitting from Lingo Telecom, LLC. Public Notice, DA 24-102. https://docs.fcc.gov/public/attachments/DA-24-102A1.pdf

[13] Bond, S. (23 May 2024). A political consultant faces charges and fines for Biden deepfake robocalls. NPR. https://www.npr.org/2024/05/23/nx-s1-4977582/fcc-ai-deepfake-robocall-biden-new-hampshire-political-operative

[14] Federal Communications Commission (adopted 7 August 2024, released 8 August 2024). In the Matter of Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, CG Docket No. 23-362, Notice of Proposed Rulemaking and Notice of Inquiry, FCC 24-84. https://docs.fcc.gov/public/attachments/FCC-24-84A1.pdf

[15] Federal Bureau of Investigation, Internet Crime Complaint Center (17 September 2026). Scammers Impersonating Law Enforcement and Government Officials in Fraud Schemes. Public service announcement I-091726-PSA. https://www.ic3.gov/PSA/2026/PSA260917

[16] McLaughlin Chiropractic Associates, Inc. v. McKesson Corp. et al., No. 23-1226, Supreme Court of the United States, 20 June 2025 (slip opinion). https://www.supremecourt.gov/opinions/24pdf/23-1226_1a72.pdf

## How to cite

IAPQB (2026). Cloned voices in robocalls: how US rules treat AI voices and faked caller ID, and what regulators ask of carriers and call recipients. IAPQB Report No. 48. International AI Practice Qualification Board. https://iapqb.org/research/048-ai-voice-robocalls.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
