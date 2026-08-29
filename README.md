# Microsoft Power BI Data Analyst PL-300 Exam Prep by Melarks

A responsive, static PL-300 study website designed for Power BI analysts with practical experience who want focused certification preparation.

## What is included

- 6 study modules aligned to the current Microsoft PL-300 skills measured
- 30 focused concepts
- 160 original exam-style practice questions
- Immediate feedback and option-by-option explanations in study/practice mode
- `localStorage` progress tracking on the learner's current browser/device
- Timed mock exam with shuffled questions, deferred feedback, final score, and incorrect-answer review
- Single-select, multi-select, Yes/No, matching, ordering, and case-study question formats
- Searchable DAX and Power Query M formula reference
- Printable/downloadable exam cheat sheet
- Dark/light theme toggle
- Mobile-responsive navigation and layouts
- SEO metadata, Open Graph image, structured data, sitemap, robots.txt, and web manifest
- Netlify configuration

## Project structure

```text
pl300-melarks/
├── index.html
├── prepare-data.html
├── data-modeling.html
├── dax-filter-context.html
├── visualize-analyze.html
├── service-security.html
├── exam-extras.html
├── formula-reference.html
├── practice.html
├── mock-exam.html
├── cheat-sheet.html
├── exam-strategy.html
├── about.html
├── 404.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── topics.js
│   ├── questions.js
│   ├── practice.js
│   └── mock.js
├── assets/
│   ├── favicon.svg
│   ├── og-cover.png
│   └── pl300-cheat-sheet.txt
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── netlify.toml
```


## Progress storage

Study progress is saved with browser `localStorage`.

Keys used:

- `pl300ProgressV1` — lesson/practice completion
- `pl300MockHistoryV1` — recent mock attempts
- `pl300Theme` — light/dark preference

This means progress is local to that browser/device. It is not synchronized to another device and can be lost if the learner clears site data.

## Updating questions

The question bank is stored in:

```text
js/questions.js
```

Each question has an ID and topic. Keep IDs unique. The practice and mock engines use this file automatically.

Lesson pages use elements like:

```html
<div class="inline-quiz" data-topic="context_calculate" data-limit="5"></div>
```

The script finds questions with the matching topic and inserts them.

## Updating formulas

The dedicated formula page is static HTML in `formula-reference.html`. Add another `<article class="formula-card" data-formula-card>` to make it searchable automatically.

## Important certification note

This is an independent study resource. It is not affiliated with, endorsed by, or sponsored by Microsoft and is not a replacement for Microsoft Learn, the official PL-300 study guide, exam sandbox, or official practice assessment.

The curriculum in this initial build is based on Microsoft PL-300 skills measured as of April 20, 2026. Recheck the official Microsoft study guide periodically before publishing updates.

Mock-exam percentages are study metrics only. Microsoft's certification exam uses scaled scoring.
