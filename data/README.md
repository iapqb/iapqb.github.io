# AI-related private qualifications in South Korea: 2024 examination records

**IAPQB Open Data Release 01** · compiled 2026-08-12

This dataset reports how many people actually sat and passed examinations for AI-related private qualifications in South Korea in 2024, aggregated from the official government release at the level of individual qualifications.

At the time of compilation, no issuing body in this market published its own pass rate. The rates here are computed from the raw government file, not taken from any issuer's disclosure.

---

## Source

Korea Research Institute for Vocational Education and Training (KRIVET), *Private Qualification Acquisition Status* (한국직업능력연구원_민간자격취득현황_20250908), released 2025-09-08. Downloaded from the Korean public data portal (data.go.kr) on 2026-08-12. The file contains 183,147 rows covering 23,068 registration numbers.

The raw file is not redistributed here. It is publicly downloadable without login from the portal. Only derived tables and the script that produces them are included, so that the numbers can be checked against the original.

---

## Method

A qualification was counted as AI-related when its registered name matches any of: 인공지능, AI, A.I, 생성형, 챗지피티, 챗GPT, ChatGPT, 프롬프트, 머신러닝, 딥러닝 (case-insensitive). Matching is on the qualification name only. Duplicates were removed by registration number. This yields **107 qualifications**.

Rows with 검정연도 = 2024 were summed per registration number. Where a qualification has multiple grades, grade-level rows were added together, so the pass rate reported here is recomputed at qualification level rather than copied from the grade-level 합격률 column.

**Three states are kept separate, and this distinction matters.** A qualification may have a 2024 row with candidates above zero (it held an examination), a 2024 row reporting zero (the body filed a nil return), or no 2024 row at all (nothing was filed). The portal itself warns that the presence or absence of data does not indicate whether a qualification is actually operating. Collapsing "reported zero" and "no record" into a single "zero candidates" figure produces a materially wrong picture, and an earlier draft of our own report made exactly that error before this dataset was built.

---

## Headline figures

Of 107 AI-related qualifications, **50 held an examination with at least one candidate** in 2024, 5 filed a nil return, and 52 filed nothing.

Across the 50 that examined, there were **25,416 candidates and 15,708 passes** (61.8%). The three largest account for 78.0% of all candidates. **34 of the 50 had fewer than 100 candidates.**

By pass rate: **20 qualifications passed every candidate who sat** (100%), 13 fell between 90 and 99%, 13 between 70 and 90%, and 4 below 70%.

---

## Files

`aggregate.py` reproduces everything. Run `python3 aggregate.py <source.csv> 2024`.

`ai_qualifications_2024.csv` gives one row per qualification: registration number, name, issuing body, candidates, passers, pass rate, and which of the three states it falls into.

`summary.txt` gives the counts quoted above in machine-readable form.

---

## Limits

**The keyword list is our operational definition of "AI-related", not an official one.** A different list produces a different count. Qualifications whose names do not contain these words but whose content is AI-related are excluded; qualifications named for AI whose content is not are included.

**The underlying figures are self-reported by issuing bodies.** Non-filing and misfiling are both possible and cannot be distinguished from the file alone.

**Pass rate is passers divided by candidates within a single calendar year.** Candidates who sat in December and passed in January are not tracked across the boundary.

**2025 is excluded.** The file was released in September 2025 and the 2025 rows are largely empty, since results are typically filed in the following year.

**A high pass rate is not by itself evidence of a low standard.** Where only students who completed a full course are permitted to sit, a high rate follows naturally. What can be said is narrower: a qualification that passes every candidate is not being used to distinguish between them.

---

## Conflict of interest

IAPQB is preparing to enter this market as an examining body. It has held no examination and has no candidates. This dataset was compiled by an interested party and should be read as such. Every figure is reproducible from the public source with the script provided, which is the reason the script is included.

---

## How to cite

> International AI Practice Qualification Board (2026). *AI-related private qualifications in South Korea: 2024 examination records.* IAPQB Open Data Release 01.

---

## Licence

Derived tables and the script may be reused and redistributed with attribution. The source file remains under the terms of the Korean public data portal. Corrections are accepted at contact@iapqb.org and will be published with the correction history.
