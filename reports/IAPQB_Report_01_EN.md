# Mandated but unmeasured: AI literacy obligations and the evidence available to satisfy them

**IAPQB Report 01** · International AI Practice Qualification Board · 12 August 2026

*This is a working report. It has not been peer reviewed. All underlying data and the aggregation script are published alongside it.*

---

## Summary

**Background.** Article 4 of the EU AI Act requires providers and deployers of AI systems to ensure a sufficient level of AI literacy among staff, and from August 2026 national authorities may enforce it. Comparable national programmes are in place or announced in Japan, China, Singapore and across most US states. None of these instruments specifies what evidence demonstrates that the obligation has been met. Employers are therefore being asked to prove a competence for which no agreed measure exists.

**Methods.** Two strands. First, the full 2024 examination record for AI-related private qualifications in one national market was aggregated from the official government release (183,147 rows, 23,068 registration numbers), matching qualifications by registered name and separating three filing states that are commonly conflated. Second, published instruments for measuring AI literacy were reviewed against evidence on the relationship between self-report and performance measures of competence.

**Findings.** Of 107 AI-related qualifications, 50 held an examination with at least one candidate in 2024, 5 filed a nil return, and 52 filed nothing. Across the 50, 25,416 people sat and 15,708 passed. **Twenty qualifications passed every candidate who sat.** Thirty-four of the 50 had fewer than 100 candidates, and the three largest accounted for 78% of all candidates. No issuing body published its own pass rate; every rate reported here was computed from the raw file.

A systematic review of AI literacy instruments identified 16 scales, of which **13 are self-report and 3 are performance-based**, and none had been tested for cross-cultural validity or measurement error (Lintner, 2024). In a study that applied both kinds of measure to the same sample of 288 teachers, the objective and self-reported factors correlated between **r = .07 and r = .24**, and the authors conclude that the two cannot be used interchangeably (Zhang et al., 2026).

**Interpretation.** The obligation and the measurement are misaligned. Regulation asks whether staff can work competently with AI; the instruments available mostly ask whether staff believe they can, and the two scores are weakly enough related that one cannot stand in for the other. Meanwhile the qualification market that would ordinarily supply proof is not publishing the one figure that would let a buyer judge it. A qualification that passes every candidate is not distinguishing between them, and at present a buyer cannot tell which qualifications those are without recomputing the figure from government data.

**Recommendations.** Issuing bodies should publish candidate numbers and pass rates for each examination cycle. Regulators and auditors should treat self-report instruments as insufficient evidence of AI literacy on their own. Where performance-based assessment is used, the criteria and scoring rubric should be published before the examination, and assessment records should state what was assessed, against which published criterion, and by whom.

**Declaration of interests.** IAPQB is preparing to enter this market as an examining body. It has held no examination and has no candidates. This report was written by an interested party and should be read as such. Every figure in the first strand is reproducible from the public source using the script published with it, which is why the script is published.

**Data sharing.** Derived tables, the aggregation script and the full method are available at github.com/iapqb/iapqb.github.io/tree/main/data. The source file is downloadable without registration from the Korean public data portal. Corrections are accepted at contact@iapqb.org and will be published with their history.

---

## 1. The obligation arrived before the measure

Article 4 of the EU AI Act took effect on 2 February 2025 and requires that staff dealing with AI systems have a sufficient level of AI literacy. From August 2026 national authorities may enforce the provision. The text does not define what a sufficient level is, nor what an organisation should hold to show that it reached one.

This is not confined to Europe. Japan's first AI Basic Plan, approved in December 2025, commits about ¥1 trillion over five years with universal AI literacy education and workforce reskilling among its pillars; its university-level certification already covers roughly 500,000 students a year across 590 institutions. Five Chinese ministries issued a joint AI-in-education action plan in April 2026, with Beijing mandating a minimum number of AI education hours per student. Singapore declared AI literacy a national priority in its 2026 budget. In the United States, 37 states had published K-12 AI guidance by June 2026.

What none of these instruments provide is an answer to the question an employer will be asked first: what do you hold that shows your staff are competent.

## 2. What the qualification market is supplying

Where a competence must be demonstrated, a qualification market usually forms to supply the demonstration. One has formed. The question is what it is supplying.

In the market examined here, 107 private qualifications carried AI-related names. In 2024, 50 of them held an examination that at least one person sat. Twenty of those 50 passed every candidate.

**A high pass rate is not by itself evidence of a low standard.** Where only candidates who have completed a full course of instruction are permitted to sit, a high rate follows naturally and says more about the course than the examination. The narrower claim is the one that matters: an examination that passes every candidate is not being used to distinguish between them. Whatever else such a qualification records, it does not record that its holder was selected.

The market is also thinner than its size suggests. Thirty-four of the 50 had fewer than 100 candidates in the year, and the three largest took 78% of all candidates. The count of registered qualifications and the count of qualifications that anyone actually sits are different numbers by an order of magnitude.

The finding that bears most directly on the regulatory question is a negative one. **No issuing body published its own pass rate.** Every rate in this report was computed by dividing passers by candidates in the government file. A buyer who wants to know how selective a qualification is must do the same, and most will not.

## 3. What the measurement literature supplies

Sixteen published instruments for measuring AI literacy were identified in a systematic review assessed against COSMIN criteria. Thirteen rely on self-report; three are performance-based. Structural validity and internal consistency were generally adequate. Content validity, reliability, construct validity and responsiveness had been examined for only a few. Cross-cultural validity and measurement error had been examined for none.

The imbalance between self-report and performance matters more than it first appears, because the two do not measure the same thing. In metacognition, a standardised performance-based test predicted academic attainment while a self-report instrument covering the same construct did not, and the correlation between the two was effectively zero. In emotional intelligence, performance-based and self-report measures likewise showed no relationship with each other while relating to different external variables. A Korean study of core competency assessment found the same pattern with the same construct measured both ways.

The interpretation offered in that literature is not that self-report is a poorer version of performance measurement. It is that self-report measures self-perception and performance measures capability, and these are separate attributes. Both may be worth knowing. Only one of them answers the question an auditor is asking.

## 4. Where this leaves an employer

An employer under Article 4 must hold something. The instruments most readily available ask staff to rate their own capability. Those ratings, on the available evidence, do not predict what staff will actually do. The qualification market offers certificates, but the figure that would let the employer judge which certificates mean something is not published by the bodies that issue them.

None of this makes the obligation unmeetable. It makes the current default insufficient. Three things would change that, and none require new law.

**Publish the pass rate.** Candidate numbers and pass rates, per cycle, per qualification. The data already exist inside every issuing body. Publishing them costs nothing and is the fastest available correction to an information asymmetry that currently favours the least selective providers.

**Do not accept self-report alone.** An auditor presented with self-assessment scores as evidence of AI literacy is being shown a measure of confidence. Where a self-report instrument is used for triage or for course design, that is a legitimate use; as evidence of competence to a regulator, it is not supported.

**Publish criteria before assessment, and record what was assessed.** If a performance-based assessment is used, the criteria and scoring rubric should be public before the examination, and the record should state what was assessed, against which published criterion, and by whom. An assessment record that cannot be audited is not evidence of an audited competence.

## 5. Limits of this report

The market strand covers one country and one year. The keyword list used to identify AI-related qualifications is an operational definition and a different list yields a different count. The underlying figures are self-reported by issuing bodies, so non-filing and misfiling cannot be distinguished from the file alone. Pass rate is computed within a single calendar year and does not track candidates across a year boundary.

The measurement strand is a reading of published reviews and primary studies, not a new systematic review. The one direct comparison cited here is a single sample of 288 teachers in one education system, so **the size of the gap between self-report and performance is established for that population and not for working professionals in general**. A wider estimate requires an examining body that holds both kinds of score for the same people, which is a study this report's author is positioned to run and therefore cannot treat as an independent finding.

## References

Lintner, T. (2024). A systematic review of AI literacy scales. *npj Science of Learning*, 9(1), 50. https://doi.org/10.1038/s41539-024-00264-4

Zhang, S., Xiao, R., Botelho, A. F., Liao, G., Chiu, T. K. F., Stamper, J., & Koedinger, K. R. (2026). How to assess AI literacy: Misalignment between self-reported and objective-based measures. *Proceedings of LAK26: 16th International Learning Analytics and Knowledge Conference*. https://doi.org/10.1145/3785022.3785088

Korea Research Institute for Vocational Education and Training. (2025). *Registered private qualifications: 2024 examination records* [Data set]. Public data release.

European Commission. (2025). *AI literacy — questions and answers*. Directorate-General for Communications Networks, Content and Technology.

---

*Correspondence: contact@iapqb.org*
