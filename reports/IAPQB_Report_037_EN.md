# Words nobody said

**How health services and regulators handle AI scribes that invent content in medical notes**

IAPQB Report No. 37 · Practice report · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- In a 2024 study of OpenAI's Whisper, about 1% of transcripts contained phrases or sentences nobody said, and 38% of these included harms such as violence or made-up details [1].
- In October 2024 the Associated Press reported that a Whisper-based medical tool used by over 30,000 clinicians erased the audio, so transcripts could not be compared with it [2].
- In a 2025 study of mostly AI-drafted clinical notes, 1.47% of sentences had no support in the transcript, and 44% of those could affect a patient's diagnosis or care [3].
- Guidance in England, Australia and the United States says clinicians must check AI-drafted records, and patients should be told or asked for consent [4, 5, 6].

## 1. A familiar situation

A family doctor uses an AI scribe in a busy clinic. She has about a minute to approve each draft note. One draft says a patient was started on a medicine that was only discussed as a possibility. The wrong sentence reads as smoothly as the rest. The recording was deleted when the note was made, so her memory is the only check.

## 2. Why it happens

An AI scribe usually does two jobs: speech recognition makes a transcript, and a language model turns it into a note [4]. Errors can enter at either step.

OpenAI says that Whisper's output "may include texts that are not actually spoken in the audio input". It suggests the models mix predicting the next word with transcribing the audio [7]. The 2024 study found more invented text for speakers with long pauses, common in aphasia, a condition that affects speech [1]. A language model writing the note can add facts, reverse what was said or mix up topics [3]. NHS England warns of "mistaking a patient's hypothetical statement for a confirmed diagnosis" [4].

These errors sit among accurate sentences [1]. Without the full consultation, a reader may struggle to tell which of two contradicting statements is true [3].

> **IAPQB view.** In the two studies below, invented text was found by comparing outputs with a record of what was said [1, 3]. In the AP case, the audio had been erased, so that comparison was no longer possible [2].

## 3. Three cases

### 3.1 United States, 2024: a study counts sentences nobody said

In a June 2024 conference paper, researchers from four US universities report running 13,140 short audio segments through OpenAI's Whisper service in 2023 [1]. The recordings were research interviews with people with and without aphasia. Invented text appeared in roughly 1% of transcriptions. Of the invented passages, 38% included harms: violence (19%), made-up names, relationships or health conditions (13%), and false authority such as website links (8%). Speakers with aphasia were affected more often (1.7% against 1.2%). The authors warned that a patient note could gain "untrue lists of prescribed drugs" [1]. After Whisper updates, 12 of the 187 problem segments still produced invented text in December 2023. On these segments, services from five other companies produced no comparable cases [1].

### 3.2 United States, 2024: a medical tool built on Whisper, and no audio to check

In October 2024 the AP reported that over 30,000 clinicians and 40 health systems had started using a Whisper-based tool built by Nabla. The tool erased the original audio for "data safety reasons", so transcripts could not be compared with recordings [2]. A research engineer who had left OpenAI said: "You can't catch errors if you take away the ground truth" [2]. Nabla said its tool currently requires providers to quickly edit and approve notes, but this could change [2]. OpenAI advises against using Whisper in high-risk decision-making contexts [7].

Two days later, Nabla said its model adds changes to Whisper to suppress hallucinations, and that a language model checks each fact in a note against the transcript. It said storing all recordings by default would cause more ethics and privacy problems than it solved. Clinicians may have audio stored, visit by visit, if their organisation allows it and the patient consents. Nabla said some transcription errors were reported across 9 million encounters, but that hallucination "has never been reported as a significant issue". These are Nabla's own statements [8].

### 3.3 London, 2025: invented lines in AI-drafted clinical notes

In May 2025, researchers at Tortus AI, a London company, reported a study of the note-writing step in npj Digital Medicine [3]. GPT-4 drafted most of the 450 notes from transcripts of mock primary care consultations, and clinicians checked each sentence against the transcript. Of 12,999 sentences, 191 (1.47%) had no support in the transcript. Of these, 84 (44%) were major: they could affect the patient's diagnosis or care if left uncorrected. Fabrications were the largest group (43%). Negations (30%) mostly appeared in the plan and contradicted what was said. The authors say changes to prompts and workflow brought major errors below rates reported for human note-taking. All the authors worked for the company at the time [3].

## 4. How practitioners handle it now

**The clinician who saw the patient checks and approves the note.** NHS England tells organisations to "ensure users review and approve any product outputs prior to further actions" [4]. Ahpra, Australia's health practitioner regulator, says that with an AI scribe the practitioner "is responsible for checking the accuracy and relevance of records" [5]. The US Federation of State Medical Boards (FSMB) says physicians keep their duty to review records created with AI [6]. Stanford Medicine described clinicians editing the draft and approving the final version [9].

**Guidance names the errors to look for.** NHS England names hazards including missing critical information, incorrect information or context, and hypothetical statements taken as diagnoses [4]. In an Ahpra example, a scribe writes notes and a referral letter, which includes an extra plausible diagnosis; Ahpra says the practitioner remains responsible [10].

**Audio is kept or deleted under a deliberate rule.** NHS England asks organisations how long they keep each type of data, including audio and transcripts [4]. Ahpra says practitioners need to know where patient data is stored, and for how long [10]. Nabla's 2024 default of no audio is one such rule (see 3.2) [8].

**Patients are told, and asked, before recording starts.** Ahpra says AI scribes generally need informed consent, ideally noted in the record. Transcription software "should include an explicit consent requirement as an initial step", and recording without consent may have criminal implications [5]. NHS England suggests giving patients "the chance to object" [4]. The FSMB asks for consent before an AI tool is applied to a patient's care [6]. Stanford described clinicians obtaining consent before recording [9], and OpenAI cautions against transcribing people recorded without their consent [7].

**The tool is checked before use and audited after.** NHS England says a scribe that uses generative AI to summarise is likely to be a medical device, which must be registered with the UK regulator, the MHRA. It also expects "ongoing audits of clinical documentation" [4]. Ahpra says tools should be tested before clinical use [5]. Tests need repeating, because the same Whisper audio gave different results after an update [1].

## 5. What to take from this

**For clinicians who sign AI-drafted notes.** Ahpra and the FSMB hold the clinician responsible for the record, whatever the tool got wrong [5, 6, 10]. In the London study, major invented sentences were most common in the plan and assessment, and some reversed what was said [3]. Those sections need the closest reading.

**For managers of clinics and health systems.** In the AP case, erasing the audio made comparison with the recording impossible [2]. A clear rule on how long audio and transcripts are kept answers the question NHS England asks [4]. Consent can be built into the start of each visit, and a sample of notes can be audited against the source [4, 5].

**For medical schools, trainers and employers.** The error types in these studies can be taught with examples: invented facts, reversed statements, wrong context and hypotheticals recorded as diagnoses [3, 4]. Tests of a tool can include patients with speech conditions, who were more affected in the 2024 study [1].

## 6. Limits of this report

The Whisper study used research interviews and 2023 versions of Whisper, and results may differ for clinic audio or newer versions [1, 7]. The AP report and that study share an author, Hilke Schellmann [1, 2]. The London study used mock consultations and written transcripts, so it did not test speech recognition [3]. NHS England's guidance covers England only and shows no publication date. Ahpra's pages were last reviewed in August 2024, and the FSMB document is guidance [4, 5, 6, 10]. Rules elsewhere differ. This report does not test any AI scribe.

## References

[1] Koenecke, A., Choi, A. S. G., Mei, K. X., Schellmann, H., & Sloane, M. (2024). Careless Whisper: Speech-to-Text Hallucination Harms. ACM Conference on Fairness, Accountability, and Transparency (FAccT '24), Rio de Janeiro, Brazil. arXiv:2402.08021, version 2 of 3 May 2024. https://arxiv.org/abs/2402.08021. Conference DOI as given in the paper: https://doi.org/10.1145/3630106.3658996

[2] Burke, G., & Schellmann, H. (26 October 2024). Researchers say an AI-powered transcription tool used in hospitals invents things no one ever said. Associated Press. https://apnews.com/article/ai-artificial-intelligence-health-business-90020cdf5fa16c79ca2e5b6c4c9bbb14 (the AP page could not be opened; text read in the Fortune reprint of 26 October 2024, published there under a different headline: https://fortune.com/2024/10/26/openai-transcription-tool-whisper-hallucination-rate-ai-tools-hospitals-patients-doctors/)

[3] Asgari, E., Montaña-Brown, N., Dubois, M., et al. (13 May 2025). A framework to assess clinical safety and hallucination rates of LLMs for medical text summarisation. npj Digital Medicine, 8, 274. https://doi.org/10.1038/s41746-025-01670-7

[4] NHS England. Guidance on the use of AI-enabled ambient scribing products in health and care settings. Version 2, publication reference PRN01734_i. https://www.england.nhs.uk/long-read/guidance-on-the-use-of-ai-enabled-ambient-scribing-products-in-health-and-care-settings/ (accessed 16 November 2026)

[5] Australian Health Practitioner Regulation Agency (Ahpra). Meeting your professional obligations when using Artificial Intelligence in healthcare. https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx (page reviewed 22 August 2024; accessed 16 November 2026)

[6] Federation of State Medical Boards (April 2024). Navigating the Responsible and Ethical Incorporation of Artificial Intelligence into Clinical Practice. Adopted by the FSMB House of Delegates. https://www.fsmb.org/siteassets/advocacy/policies/incorporation-of-ai-into-practice.pdf

[7] OpenAI. Model Card: Whisper. GitHub, openai/whisper repository. https://github.com/openai/whisper/blob/main/model-card.md (accessed 16 November 2026)

[8] Raison, M., & Humeau, S. (28 October 2024). How Nabla Uses Whisper. Nabla. https://www.nabla.com/blog/how-nabla-uses-whisper

[9] Armitage, H. (11 March 2024). Ambient artificial intelligence technology to assist Stanford Medicine clinicians with taking notes. Stanford Medicine News Center. https://med.stanford.edu/news/all-news/2024/03/ambient-listening-notes.html

[10] Australian Health Practitioner Regulation Agency (Ahpra). Case studies [page section: Examples of newer generative AI tools used in healthcare]. https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare/Case-studies (page reviewed 22 August 2024; accessed 16 November 2026)

## How to cite

IAPQB (2026). Words nobody said: how health services and regulators handle AI scribes that invent content in medical notes. IAPQB Report No. 37. International AI Practice Qualification Board. https://iapqb.org/research/037-ai-scribes-invented-notes.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
