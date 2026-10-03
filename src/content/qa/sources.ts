import type { ArticleSource } from "@/content/articles";

/** Reference list shared by the Q&A articles. Every URL was checked when the article was written. */
export const src = {
  // Relationships
  gottmanStartup: { label: "The Gottman Institute — How to fight smarter: soften your start-up", url: "https://www.gottman.com/blog/softening-startup/" },
  gottmanRepair: { label: "The Gottman Institute — 5 steps to fight better if your relationship is worth fighting for", url: "https://www.gottman.com/blog/5-steps-to-fight-better-if-your-relationship-is-worth-fighting-for/" },
  lppknCounselling: { label: "MyGOV — Kaunseling keluarga (LPPKN)", url: "https://www.malaysia.gov.my/my/categories/institusi-keluarga/mengurus-keluarga/kaunseling-keluarga" },
  heal: { label: "Majlis Keselamatan Negara — Talian bantuan krisis kesihatan mental HEAL 15555 (KKM)", url: "https://www.mkn.gov.my/web/ms/2024/02/25/talian-bantuan-krisis-kesihatan-mental/" },
  // Sleep, stress, tiredness
  cdcSleep: { label: "US CDC — About sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
  aasmSleep: { label: "Consensus Conference Panel / Watson NF et al. (2015). Recommended amount of sleep for a healthy adult: AASM and SRS joint consensus statement. J Clin Sleep Med 11(6):591–592", url: "https://pubmed.ncbi.nlm.nih.gov/25979105/" },
  nhsInsomnia: { label: "NHS — Insomnia", url: "https://www.nhs.uk/conditions/insomnia/" },
  nhsSleepApnoea: { label: "NHS — Sleep apnoea", url: "https://www.nhs.uk/conditions/sleep-apnoea/" },
  whoStress: { label: "World Health Organization — Stress (questions and answers)", url: "https://www.who.int/news-room/questions-and-answers/item/stress" },
  nhsStress: { label: "NHS — Stress", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/" },
  nhsTired: { label: "NHS — Tiredness and fatigue", url: "https://www.nhs.uk/symptoms/tiredness-and-fatigue/" },
  nhsIron: { label: "NHS — Iron deficiency anaemia", url: "https://www.nhs.uk/conditions/iron-deficiency-anaemia/" },
  // Activity, weight, smoking, screening
  whoActivity: { label: "World Health Organization — Physical activity (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" },
  whoObesity: { label: "World Health Organization — Obesity and overweight (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" },
  cpgObesity: { label: "Malaysian Clinical Practice Guidelines: Management of Obesity (2nd ed., 2023)", url: "https://mems.my/wp-content/uploads/2024/08/MEMS_CPG-Management-Obesity_May-2023.pdf" },
  mdg: { label: "Kementerian Kesihatan Malaysia / NCCFN — Malaysian Dietary Guidelines 2020", url: "https://hq.moh.gov.my/nutrition/wp-content/uploads/2024/03/latest-01.Buku-MDG-2020_12Mac2024.pdf" },
  whoTobacco: { label: "World Health Organization — Tobacco (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/tobacco" },
  mquit: { label: "JomQuit (KKM) — Perkhidmatan mQuit", url: "https://jomquit.my/perkhidmatan-mquit" },
  quitClinics: { label: "Info Sihat KKM — Klinik Berhenti Merokok", url: "https://infosihat.moh.gov.my/direktori-pegawai-1/klinik-berhenti-merokok.html" },
  sehati: { label: "PERKESO — SEHATi (saringan kesihatan)", url: "https://sehati.perkeso.gov.my/" },
  // Ingredients
  nccihGinseng: { label: "NCCIH (NIH) — Asian ginseng: usefulness and safety", url: "https://www.nccih.nih.gov/health/asian-ginseng" },
  ginsengFatigue: { label: "Li X et al. (2023). Ginseng and ginseng herbal formulas for symptomatic management of fatigue: a systematic review and meta-analysis. J Integr Complement Med 29(8):468–482", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10457628/" },
  macaReview: { label: "Shin BC et al. (2010). Maca (L. meyenii) for improving sexual function: a systematic review. BMC Complement Altern Med 10:44", url: "https://doi.org/10.1186/1472-6882-10-44" },
  macaSemen: { label: "Lee HW et al. (2022). Maca (Lepidium meyenii Walp.) on semen quality parameters: a systematic review and meta-analysis. Front Pharmacol 13:934740", url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2022.934740/full" },
  mskMaca: { label: "Memorial Sloan Kettering Cancer Center — About Herbs: Maca", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/maca" },
  honeyCough: { label: "Oduwole O et al. (2018). Honey for acute cough in children. Cochrane Database Syst Rev", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6513626/" },
  nhsBabyFoods: { label: "NHS — Foods to avoid giving babies and young children (honey)", url: "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/" },
  whoSugars: { label: "World Health Organization (2015) — Guideline: sugars intake for adults and children", url: "https://www.who.int/publications/i/item/9789241549028" },
  honeyReview: { label: "Mohd Kamal DA et al. (2021). Physicochemical and medicinal properties of Tualang, Gelam and Kelulut honeys: a comprehensive review. Nutrients 13(1):197", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7827892/" },
  trehalulose: { label: "Fletcher MT et al. (2020). Stingless bee honey, a novel source of trehalulose: a biologically active disaccharide with health benefits. Sci Rep 10:12128", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7376065/" },
  datesGi: { label: "Alkaabi JM et al. (2011). Glycemic indices of five varieties of dates in healthy and diabetic subjects. Nutrition Journal 10:59", url: "https://nutritionj.biomedcentral.com/articles/10.1186/1475-2891-10-59" },
  nigellaLipids: { label: "Sahebkar A et al. (2016). Nigella sativa (black seed) effects on plasma lipid concentrations in humans: a systematic review and meta-analysis. Pharmacol Res 106:37–50", url: "https://pubmed.ncbi.nlm.nih.gov/26875640/" },
  nigellaBp: { label: "Sahebkar A et al. (2016). A systematic review and meta-analysis of randomized controlled trials investigating the effects of supplementation with Nigella sativa (black seed) on blood pressure. J Hypertens 34(11):2127–2135", url: "https://pubmed.ncbi.nlm.nih.gov/27512971/" },
  mskBlackCumin: { label: "Memorial Sloan Kettering Cancer Center — About Herbs: Nigella sativa (black seed)", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/nigella-sativa" },
  // Buying
  pharmacyMal: { label: "Program Perkhidmatan Farmasi KKM — Bagaimana mengenal pasti ubat-ubatan berdaftar?", url: "https://pharmacy.moh.gov.my/ms/soalan-lazim/bagaimana-mengenal-pasti-ubat-ubatan-berdaftar.html" },
  quest: { label: "NPRA — QUEST3+ Product Search", url: "https://quest3plus.bpfk.gov.my/pmo2/index.php" },
  odsSupplements: { label: "NIH Office of Dietary Supplements — Dietary supplements: what you need to know", url: "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/" },
  nccihWisely: { label: "NCCIH (NIH) — Using dietary supplements wisely", url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely" },
  nanBao: { label: "NPRA (18 Mac 2019) — Produk tradisional dikesan mengandungi racun berjadual sildenafil dan tadalafil", url: "https://www.npra.gov.my/index.php/my/industry-news-announcements/more-recent-updates/412-english/press-release/press-release-2019/2066-kenyataan-akhbar-kpk-18-mac-2019-produk-tradisional-nan-bao-capsule-dikesan-mengandungi-racun-berjadual-sildenafil-dan-tadalafil.html" },
  ninjaScam: { label: "Ninja Van Malaysia — Nasihat penipuan penghantaran bungkusan", url: "https://www.ninjavan.co/ms-my/support/consignee-support/parcel-scams-advisory" },
  malayMailCod: { label: "Malay Mail (17 Jun 2025) — Paying for nothing: how Malaysians are scammed using parcels they never ordered", url: "https://www.malaymail.com/news/malaysia/2025/06/17/paying-for-nothing-how-malaysians-are-scammed-using-parcels-they-never-ordered/179959" },
  pdpa: { label: "Jabatan Perlindungan Data Peribadi — Akta Perlindungan Data Peribadi 2010", url: "https://www.pdp.gov.my/" },
} satisfies Record<string, ArticleSource>;
