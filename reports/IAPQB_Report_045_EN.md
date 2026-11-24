# Wrongly branded as fraudsters

**What the Dutch childcare benefits scandal shows about fraud-risk scoring in public services**

IAPQB Report No. 45 · Case file · Published 24 November 2026
International AI Practice Qualification Board (IAPQB)

## In one minute

- From 2013 the Dutch Tax Administration used a self-learning model to pick childcare benefit applications for checks. Until October 2018 Dutch or non-Dutch nationality was one of its indicators, and staff did not know why a case had been picked [1].
- In December 2020 a parliamentary committee found that fundamental principles of the rule of law had been violated. The government resigned on 15 January 2021 [2, 3].
- The data protection authority fined the agency €2.75 million over nationality data and €3.7 million over FSV, a fraud blacklist of about 270,000 people [4, 5]. By 23 October 2026, 44,143 parents had been recognised as affected. The cabinet's goal is full compensation by the end of 2027 [6, 7].
- Official findings and EU law now point to five practices: legal limits on flagging data, outside bias checks, systems open to scrutiny, proportionate handling of mistakes, and a rights assessment before use [4, 5, 8, 9, 10, 11].

## 1. A familiar situation

An official at a benefits agency opens a queue of applications picked by a risk model. Each file shows a score, and none shows why. One form lacks a signature from the childcare provider, and under the rules any irregularity means repaying the whole year's benefit. The official must decide, with little to go on, whether this is fraud or a paperwork error.

## 2. Why it happens

A fraud-risk model scores each application, and staff check the highest scores. The Dutch model learned from examples of correct and incorrect applications and used several dozen indicators [1, p. 14]. Staff assessed the selected files by hand, but the agency told the regulator that they did not know why the system had picked a case [1, p. 16].

What followed a flag depended on rules outside the model. Any irregularity led the agency to reclaim the whole year's benefit [2, p. 20]. Until October 2019 the Council of State, hearing parents' appeals, held that this approach need not be tested for proportionality [2, p. 29]. Between 2012 and 2019 an estimated 25,000 to 35,000 people were labelled as having acted with intent or gross negligence; a later sample found that, by current standards, the label could be called unjustified in 94% of cases [2, p. 25].

> **IAPQB view.** Every selected application had a human check. The person checking could not see why the model had picked the case [1, p. 16], and any irregularity could cost a family a whole year's benefit [2, p. 20]. Checks made without the reason for a flag, under a rule with no room to weigh the error, did not stop parents being wrongly branded as intentional fraudsters [2, p. 7].

## 3. Four cases

### 3.1 The Hague, 2020: the regulator finds a discriminatory model

On 17 July 2020 the Dutch Data Protection Authority (Autoriteit Persoonsgegevens, AP) concluded that the benefits service had discriminated by processing applicants' nationality [3]. It found the nationality indicator in the risk model, and the use of nationality against organised fraud, unlawful and discriminatory [1, p. 3]. In December 2021 the AP fined the Tax Administration €2.75 million [4, 5].

### 3.2 The Hague, 2020 and 2021: "unprecedented injustice" and a resignation

On 17 December 2020 the parliamentary committee on childcare benefits published its report, Ongekend onrecht ("Unprecedented injustice") [2; 10, p. 3]. It found that fundamental principles of the rule of law had been violated, and held the benefits service, the legislature and the courts responsible [2, p. 7]. On 22 December 2020 the cabinet decided that all known affected parents would receive €30,000. On 15 January 2021 the cabinet of Prime Minister Mark Rutte resigned over the scandal [3].

### 3.3 The Hague, 2020 to 2022: a blacklist of 270,000 people

The agency also used a fraud blacklist, FSV (Fraude Signalering Voorziening), until 27 February 2020 [5, 12]. For more than six years it held signals on about 270,000 people, and some did not get a payment plan or debt rescheduling because of it. The AP cited internal research showing that staff "were instructed to base their fraud risk analysis in part on factors like nationality and physical appearance". It found six breaches of data protection law and, in April 2022, imposed a fine of €3.7 million, then its highest [5]. Under compensation rules set in November 2022, being on the list did not by itself lead to a payment [13].

### 3.4 The Netherlands, 2026: repair is still under way

By 23 October 2026, 69,741 parents had registered with the recovery organisation. Of these, 44,143 were recognised as affected and 25,598 were found not affected. It had paid €795.5 million after first checks and €1.76 billion after full assessments. Still waiting were 5,174 objections and 2,858 formal notices about late decisions [6]. In September 2026 the cabinet's goal was still for all affected parents to be able to receive full compensation by the end of 2027 [7].

## 4. How practitioners handle it now

**Data used to flag people needs a legal basis and limits.** The AP states: "It is unlawful, and therefore prohibited, to use nationality data to assess applications, combat fraud and determine risk" [4]. Its FSV fine covered six points: no legal basis, no purpose specified in advance, incorrect and outdated data, signals kept far too long, weak security, and late consultation of the data protection officer [5]. The agency has since written that it handled data carelessly [12].

**Risk models are tested for bias and reviewed from outside.** In 2022 the Netherlands Court of Audit found that only three of nine government algorithms it audited met all basic requirements; the benefits department's IT general controls were not in order [8]. Since March 2023 an independent committee has advised the Ministry of Finance on analytics, and its published advice includes bias and fairness testing for the benefits service [14].

**Systems that score citizens must be open to scrutiny.** In February 2020 the District Court of The Hague ruled that the law behind SyRI, a government fraud-detection tool, breached Article 8 of the European Convention on Human Rights. It found no fair balance and said "the application of SyRI is insufficiently transparent and verifiable" [9]. Dutch public bodies have published information on their algorithms in a national register since December 2022, though this is not yet mandatory [15].

**Errors are judged in proportion.** Proportional assessment replaced the all-or-nothing approach on 25 December 2019 [2, p. 22]. In 2024 a parliamentary committee of inquiry found: "Mistakes were classified as fraud." It recommended a humane enforcement and sanctioning policy and a right to personal contact [10, p. 7, 9, 10].

**EU law now treats AI in benefit decisions as high-risk.** Under the AI Act, AI systems used by or for public authorities to judge eligibility for essential public assistance benefits, or to grant, reduce, revoke or reclaim them, are high-risk [16]. Public bodies must assess the impact on fundamental rights before using one [11]. Under the AI Omnibus, in force since 27 July 2026, these rules apply from 2 December 2027 [17].

## 5. What to take from this

**For caseworkers and analysts who act on risk scores.** In the Dutch case, the person checking a file could not see why it had been selected [1, p. 16]. Treat a flag as a reason to examine the file. Before recording fraud, write down the evidence of intent, so that the family can challenge it [2, p. 25].

**For managers in public bodies.** Keep a written record of the legal basis, purpose and retention period for every risk indicator and every list of flagged people. Both AP fines turned on these points [4, 5]. Plan for repair as well: almost six years after the government resigned, 5,174 objections were still waiting [6].

**For auditors, oversight bodies and trainers.** The Ministry of Finance's advisory committee works from five areas set out by the Court of Audit: governance and accountability, model and data, privacy, IT general controls, and ethics [14]. Training for staff who use risk models can follow the same five areas.

## 6. Limits of this report

Several sources were read in Dutch; the English renderings are IAPQB's. Of the 2024 inquiry, this report uses only the English summary. The SyRI ruling is described from the court's English press release of 13 February 2020. The recovery figures are updated weekly [6]. All four cases come from the Netherlands, and rules elsewhere differ. This report does not assess whether the 2013 model counts as an AI system under the AI Act.

## References

[1] Autoriteit Persoonsgegevens (16 July 2020). Belastingdienst/Toeslagen: De verwerking van de nationaliteit van aanvragers van kinderopvangtoeslag. Onderzoeksrapport z2018-22445. https://www.autoriteitpersoonsgegevens.nl/sites/default/files/atoms/files/onderzoek_belastingdienst_kinderopvangtoeslag.pdf

[2] Parlementaire ondervragingscommissie Kinderopvangtoeslag (17 December 2020). Ongekend onrecht. Verslag. Tweede Kamer der Staten-Generaal. https://www.tweedekamer.nl/sites/default/files/atoms/files/20201217_eindverslag_parlementaire_ondervragingscommissie_kinderopvangtoeslag.pdf

[3] Uitvoeringsorganisatie Herstel Toeslagen (UHT). Tijdlijn problemen kinderopvangtoeslag. https://herstel.toeslagen.nl/tijdlijn/ (accessed 16 November 2026)

[4] Autoriteit Persoonsgegevens (7 December 2021). Tax Administration fined for discriminatory and unlawful data processing. https://www.autoriteitpersoonsgegevens.nl/en/current/tax-administration-fined-for-discriminatory-and-unlawful-data-processing. Dutch version: Boete Belastingdienst voor discriminerende en onrechtmatige werkwijze. https://www.autoriteitpersoonsgegevens.nl/actueel/boete-belastingdienst-voor-discriminerende-en-onrechtmatige-werkwijze

[5] Autoriteit Persoonsgegevens (12 April 2022). Tax Administration fined for fraud blacklist. https://www.autoriteitpersoonsgegevens.nl/en/current/tax-administration-fined-for-fraud-blacklist. Dutch version: Boete Belastingdienst voor zwarte lijst FSV. https://www.autoriteitpersoonsgegevens.nl/actueel/boete-belastingdienst-voor-zwarte-lijst-fsv

[6] Uitvoeringsorganisatie Herstel Toeslagen (UHT). Feiten en cijfers [figures measured on 23 October 2026]. https://herstel.toeslagen.nl/dashboard-kinderopvangtoeslag/ (accessed 16 November 2026)

[7] Uitvoeringsorganisatie Herstel Toeslagen (18 September 2026). 23e Voortgangsrapportage: steeds meer ouders ronden hun aanvullende schade af. https://herstel.toeslagen.nl/23e-voortgangsrapportage-steeds-meer-ouders-ronden-hun-aanvullende-schade-af/

[8] Netherlands Court of Audit (18 May 2022). An Audit of 9 Algorithms used by the Dutch Government. https://english.rekenkamer.nl/documents/2022/05/18/an-audit-of-9-algorithms-used-by-the-dutch-government

[9] De Rechtspraak, District Court of The Hague (13 February 2020). SyRI legislation in breach of European Convention on Human Rights [press release]. https://www.rechtspraak.nl/organisatie-en-contact/organisatie/rechtbanken/rechtbank-den-haag/nieuws/2020/02/syri-legislation-in-breach-of-european-convention-on-human-rights

[10] Parlementaire enquêtecommissie Fraudebeleid en Dienstverlening (26 February 2024). Blind voor mens en recht: Report of the parliamentary committee of inquiry into Fraud Policy and Public Service [English translation of the summary, conclusions and recommendations]. Tweede Kamer der Staten-Generaal. https://www.tweedekamer.nl/sites/default/files/2024-04/20240226%20Rapport%20PEFD%20Engelstalige%20samenvatting%20conclusie%20en%20aanbevelingen.pdf (full report in Dutch: https://tweedekamer.nl/sites/default/files/2024-02/Rapport%20PEFD%20Blind%20voor%20mens%20en%20recht%2026022024.pdf)

[11] European Commission, AI Act Service Desk. Article 27: Fundamental rights impact assessment for high-risk AI systems. https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27 (accessed 16 November 2026; text as consolidated on 27 July 2026)

[12] Belastingdienst (29 November 2022). Fraude Signalering Voorziening (FSV). Over de Belastingdienst. https://over-ons.belastingdienst.nl/onderwerpen/omgaan-met-gegevens/fsv/

[13] Rijksoverheid (4 November 2022). Tegemoetkomingsbeleid FSV vastgesteld door kabinet. https://www.rijksoverheid.nl/actueel/nieuws/2022/11/04/tegemoetkomingsbeleid-fsv-vastgesteld-door-kabinet

[14] Belastingdienst (17 March 2023). Adviescommissie Analytics. Over de Belastingdienst. https://over-ons.belastingdienst.nl/onderwerpen/omgaan-met-gegevens/adviescommissie-analytics-financien/

[15] Algoritmeregister (Dutch government). Over het Algoritmeregister. https://algoritmes.overheid.nl/nl/footer/over (accessed 16 November 2026)

[16] European Commission, AI Act Service Desk. ANNEX III [Regulation (EU) 2024/1689, point 5(a)]. https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3 (accessed 16 November 2026)

[17] European Commission (27 July 2026, last updated 31 July 2026). AI Omnibus enters into force. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force

## How to cite

IAPQB (2026). Wrongly branded as fraudsters: what the Dutch childcare benefits scandal shows about fraud-risk scoring in public services. IAPQB Report No. 45. International AI Practice Qualification Board. https://iapqb.org/research/045-dutch-childcare-benefits.html

## About this report

Prepared by IAPQB. Each fact comes from the sources listed, and each source was opened and checked on 16 November 2026; anything that could not be checked was left out. AI tools were used to search and to draft, and IAPQB checked every claim against its source and is responsible for the text. IAPQB runs an AI work qualification; this report does not promote it. Corrections: contact@iapqb.org or an issue at github.com/iapqb/iapqb.github.io. Licence: CC BY 4.0.
