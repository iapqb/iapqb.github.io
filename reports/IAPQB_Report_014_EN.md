# When an algorithm adjusted a year's exam grades

**England's 2020 A level model, its reversal after four days, and what official reviews said**

IAPQB Report No. 14 · Case file · Published 17 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- With exams cancelled in 2020, England's exam regulator Ofqual adjusted teachers' grades with a statistical model based mainly on each school's past results. It lowered 39.1% of 718,276 A level grades [1].
- Four days after results, on 17 August 2020, Ofqual gave students the teacher's grade or the model's, whichever was higher [2]. Scotland had dropped its model on 11 August, after lowering 124,565 entries [3, 4].
- The statistics regulator found that the models' limits were not fully explained, methods were not fully published in advance and individual results had little human review [5].
- The reviews' lessons: publish methods and limits early, check individual results, assess equality effects from the start, seek outside challenge and make appeals clear. EU rules for AI that scores exams start on 2 December 2027 [4, 5, 6].

## 1. A familiar situation

An analyst at a public body will release several hundred thousand results on one morning. National totals are close to past years, and checks by group show no widening gap. Some results look wrong, such as two grades below a teacher's estimate. There is no time to check them all, and appeals exist. Ofqual was in a similar position in August 2020 [1, 5, 7].

## 2. Why it happens

The government directed Ofqual to keep national results close to earlier years [1, 7]. Teachers' centre assessment grades (CAGs) were higher than usual and would have raised A level A* grades from 7.7% in 2019 to 13.9% [1], so holding the total meant lowering many grades. The model predicted each school's grades in each subject from its past results and students' prior attainment; teachers' rank orders decided who moved [1]. For groups under 15 students, counting past entries, the model relied more on the CAGs, and the smallest groups kept them [1].

A strong student in a school with weaker past results could be held down by that history; Ofqual's chair put this at about 0.2% of grades, not identifiable in advance [8]. Very small classes could not be standardised, which he said benefited smaller schools and "affected private schools in particular" [8]. At grade A and above, independent schools rose 4.7 percentage points on 2019 and comprehensives 2.0 [1]. Ofqual linked such gaps mainly to differing shares of small classes [9].

Ofqual found no evidence that the process introduced bias [1]. The Office for Statistics Regulation (OSR) found that, despite this, students from lower socio-economic groups were seen as disadvantaged on results day, in its view "a key cause of the public dissatisfaction" [5].

> **IAPQB view.** In England and Scotland, the models passed the checks on averages: gaps between groups of students did not widen [4, 5, 8]. Both were still withdrawn within a week, over individual results [4, 8]. These results had little human review before release, and OSR called the concerns predictable [5].

## 3. Four cases

### 3.1 England, 2020: 39% of A level grades lowered

A level results came out on 13 August 2020 for about 275,000 students [1, 9]. Of 718,276 grades, 58.7% matched the CAG, 35.6% were one grade lower, 3.3% two lower and 0.2% three or more lower; 2.2% were higher [1, 9]. A* and A grades made up 27.6%, up 2.4 percentage points on 2019. The CAGs would have given 37.7% [1].

### 3.2 England, 2020: four days to a reversal

Shortly before results, the government added a "triple-lock" letting a higher mock exam result stand, which the Education Committee said appeared "last-minute and rushed" [10]. Ofqual had "not been consulted fully" on it, and on 15 August its board withdrew a published statement on appeals [11]. On 16 August the board agreed to award the higher of the CAG and the calculated grade, weighing factors such as public opinion, the decisions in Scotland and Northern Ireland, and appeals finishing too late [11]. On 17 August Ofqual announced this for AS, A level and GCSE and said "we are extremely sorry" [2]. In the end, 97.8% of A level grades were the CAG, and grades A and above rose 12.9 percentage points on 2019 [9].

### 3.3 Scotland, 2020: the same pattern, earlier in August

The Scottish Qualifications Authority (SQA) released results on 4 August 2020 [4]. It checked each centre's estimates, by course and grade, against its past results plus a tolerance, and moved entries to fit [3]. Of 511,070 entries, 133,762 (26.2%) were adjusted, 124,565 of them downwards; 45,454 moved down from grades A, B or C to D or No Award [3]. Under a ministerial direction of 11 August, students received their teachers' estimates where these were higher [4, 5]. A review led by Professor Mark Priestley found that schools in more deprived areas were downgraded more, with "anomalies in grade adjustment" for subject classes and individuals [4]. Equality concerns "had been raised repeatedly from April onwards", but the government and SQA seemed to under-emphasise them until late in the process [4].

### 3.4 United Kingdom, 2020 to 2021: what the reviews found

In July 2020, the House of Commons Education Committee asked Ofqual to "publish the model immediately to allow time for scrutiny" [12]. On 2 September, Ofqual's chair told the committee in writing that the approach "failed to win public confidence", even when it worked "exactly as we had intended" [8]. In November, the committee's chair wrote that the final model was understood to have "a predictive accuracy of around 60%" [10]. In March 2021, OSR found that none of the four UK models commanded public confidence [5].

## 4. How practitioners handle it now

**The method and its limits are published early.** OSR's first principle includes transparency "about the aims of the model and the model itself (including limitations)" [5]. In December 2020, Ofqual put on GitHub the code it developed for the exam boards, without the data [5, 13]. Since February 2024, UK government departments must publish records of algorithmic tools that significantly influence decisions affecting the public [14, 15].

**Individual results and equality effects are checked before release.** OSR said cases far from the teacher's estimate "should be explored as part of quality assurance", with front-line staff checking results [5]. Ofqual's outlier criteria flagged 0.3% to 0.4% of A level entries, but it could not confirm which grades were wrong and found advance identification "impossible" [7]. The Scottish review recommended equality and children's rights impact assessments "at the outset" [4].

**Methods face outside challenge.** OSR asks for methods to be exposed "to the widest possible professional audience", including red teams or independent advisory panels [5]. A Royal Statistical Society offer of fellows to help Ofqual was not taken up, though the two sides have disputed the details [5].

**Appeal routes are clear before the decision.** OSR asks bodies to explain "from the outset" how individuals can appeal, and to resolve errors before the decision [5]. In England, appeals could not challenge the model itself; Ofqual told OSR that allowing this would have gone against government policy [5].

**EU law treats AI that scores exams as high-risk.** The European Commission lists "scoring of exams" among high-risk uses, which need risk assessment, good-quality data, logs, documentation and human oversight [6]. Under the Digital Omnibus on AI, in force since 27 July 2026, these rules apply from 2 December 2027 [6, 16].

## 5. What to take from this

**For people who build or run scoring models at work.** Checking the results furthest from a human estimate before release is the step OSR found limited in 2020 [5]. Ofqual's own case-by-case checks of flagged students still left "significant uncertainty" [7].

**For managers and officials who commission models.** OSR's first lesson for commissioners is that "A statistical model might not always be the best approach", and it recommends clear roles for the commissioner, typically a minister, and the model's developers [5]. The Education Committee regretted that Ofqual decided not to raise wider fairness concerns, and Ofqual's chair said it "could have rejected" the direction [8, 10].

**For schools, exam boards and training providers.** Teachers' grades and rank orders fed the 2020 models [1, 5]. The Scottish review found that the evidence behind estimates varied between centres, and recommended validated assessments and "fully transparent and proportionate" moderation [4].

## 6. Limits of this report

The cases come from one unusual year, and Wales and Northern Ireland appear only through OSR. No source says whether models like those of 2020 count as AI systems under the EU AI Act. Where Ofqual's text and tables differ, this report uses the tables [1, 9]. The 60% figure is the committee's understanding, not checked against Ofqual's charts [10]. Sources came from official pages and their links, without a web search or news reports.

## References

[1] Ofqual (13 August 2020). Awarding GCSE, AS, A level, advanced extension awards and extended project qualifications in summer 2020: interim report. GOV.UK (report PDF on this page). https://www.gov.uk/government/publications/awarding-gcse-as-a-levels-in-summer-2020-interim-report

[2] Ofqual (17 August 2020). Statement from Roger Taylor, Chair, Ofqual. GOV.UK. https://www.gov.uk/government/news/statement-from-roger-taylor-chair-ofqual

[3] Scottish Qualifications Authority (August 2020). Technical Report National Qualifications 2020 Awarding [dash] Methodology Report. Publication code BA8262. https://www.sqa.org.uk/sqa/files_ccc/SQAAwardingMethodology2020Report.pdf

[4] Scottish Government (7 October 2020). National Qualifications experience 2020: rapid review. Independent report led by Professor Mark Priestley, University of Stirling. https://www.gov.scot/publications/rapid-review-national-qualifications-experience-2020/

[5] Office for Statistics Regulation (2 March 2021). Ensuring statistical models command public confidence: Learning lessons from the approach to developing models for awarding grades in the UK in 2020. https://osr.statisticsauthority.gov.uk/publication/ensuring-statistical-models-command-public-confidence/

[6] European Commission (last updated 19 October 2026). AI Act. Shaping Europe’s digital future. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (accessed 16 November 2026)

[7] Ofqual (December 2020). Standardisation of grades in general qualifications in summer 2020: outliers. Ofqual/20/6732. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/945802/Standardisation_of_grades_in_general_qualifications_in_summer_2020_-_outliers.pdf

[8] Ofqual (2 September 2020). Written statement from Chair of Ofqual to the Education Select Committee. GOV.UK. https://www.gov.uk/government/news/written-statement-from-chair-of-ofqual-to-the-education-select-committee

[9] Ofqual (December 2020). Summer 2020 results analysis – GCSE, AS and A level: Update to the interim report. Ofqual/20/6729. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/945861/Summer_2020_results_analysis_-_GCSE_AS_and_A_level_171220.pdf

[10] Halfon, R., Chair of the House of Commons Education Committee (10 November 2020). Cancellation of 2020 exams and 2021 exams series [letter to the Secretary of State for Education]. UK Parliament. https://committees.parliament.uk/publications/3401/documents/32495/default/

[11] Ofqual (published 22 October 2020, last updated 28 April 2021). Ofqual board minutes for 2020 [documents "15 August 2020 Ofqual emergency board minutes" and "16 August 2020 21:30 Ofqual emergency board minutes"]. GOV.UK. https://www.gov.uk/government/publications/ofqual-board-minutes-for-2020

[12] House of Commons Education Committee (11 July 2020). Getting the grades they’ve earned: Covid-19: the cancellation of exams and ‘calculated’ grades. First Report of Session 2019-21, HC 617, chapter 2. https://publications.parliament.uk/pa/cm5801/cmselect/cmeduc/617/61705.htm

[13] Ofqual. Summer 2020 code used to grade qualifications [GitHub repository]. https://github.com/OfqualGovUK/Summer-2020-code-used-to-grade-qualifications (accessed 16 November 2026)

[14] Government Digital Service (5 January 2023, last updated 8 May 2025). Algorithmic Transparency Recording Standard Hub. GOV.UK. https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub

[15] Government Digital Service (17 December 2024). Algorithmic Transparency Recording Standard Mandatory Scope and Exemptions Policy. GOV.UK. https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-mandatory-scope-and-exemptions-policy

[16] European Parliament and Council of the European Union (8 July 2026). Regulation (EU) 2026/1744 of the European Parliament and of the Council of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 as regards the simplification of the implementation of harmonised rules on artificial intelligence (Digital Omnibus on AI) (Text with EEA relevance). OJ L, 2026/1744, 24.7.2026. EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744

## How to cite

IAPQB (2026). When an algorithm adjusted a year's exam grades: England's 2020 A level model, its reversal after four days, and what official reviews said. IAPQB Report No. 14. International AI Practice Qualification Board. https://iapqb.org/research/014-algorithm-exam-grades-2020.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
