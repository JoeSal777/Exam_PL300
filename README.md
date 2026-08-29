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

## Using CodePen

CodePen is best used to test an individual page or component, not the entire multi-page website.

For a simple page test:

1. Open the HTML file you want to test.
2. Copy the markup inside `<body>...</body>` into CodePen's **HTML** pane. You do not need the `<html>`, `<head>`, or `<body>` tags in a normal Pen.
3. Copy `css/styles.css` into the **CSS** pane.
4. Copy JavaScript into the **JS** pane in this order:
   - `js/app.js`
   - `js/topics.js` when topic labels are needed
   - `js/questions.js` for quizzes/mock questions
   - `js/practice.js` for module quizzes or the practice page
   - **or** `js/mock.js` for the mock exam page
5. Because one CodePen Pen is a single page, links to the other local HTML files will not behave like the complete site unless those pages are separately hosted.

For full multi-page testing, use a local static server or GitHub/Netlify preview instead.

### Quick local server

If Python is installed, open a terminal inside the project folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Push to GitHub

1. Create a new GitHub repository, for example `pl300-exam-prep`.
2. Put the **contents** of this folder in the repository root.
3. Commit and push the files.
4. Keep `index.html`, `netlify.toml`, `robots.txt`, and `sitemap.xml` at repository root.

Example commands:

```bash
git init
git add .
git commit -m "Initial PL-300 exam prep site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pl300-exam-prep.git
git push -u origin main
```

## Deploy to Netlify

1. Sign in to Netlify.
2. Choose **Add new site → Import an existing project**.
3. Connect GitHub and select the repository.
4. Build command: **leave blank**.
5. Publish directory: `.` (repository root).
6. Deploy.
7. In **Domain management**, add `melarks.com` as the custom domain.
8. Follow Netlify's DNS instructions and enable HTTPS.

The HTML already uses canonical URLs based on `https://melarks.com`. If the final domain changes, search the project for `https://melarks.com` and update the canonical, Open Graph, structured-data, robots, and sitemap URLs.

## SEO launch checklist

The site includes strong technical/on-page SEO, but no implementation can guarantee the top search-engine position. Rankings also depend on content usefulness, competition, backlinks, reputation, engagement, and time.

After deployment:

1. Confirm every page returns HTTP 200 and is usable on mobile.
2. Verify `https://melarks.com/robots.txt`.
3. Verify `https://melarks.com/sitemap.xml`.
4. Add the domain to **Google Search Console** and submit the sitemap.
5. Add the domain to **Bing Webmaster Tools** and submit the sitemap.
6. Use Google Rich Results Test / Schema.org validator to inspect structured data.
7. Run Lighthouse/PageSpeed Insights and address performance/accessibility warnings.
8. Keep the PL-300 curriculum updated whenever Microsoft changes the skills measured.
9. Add genuinely useful internal links when new learning content is published.
10. Earn relevant backlinks naturally by sharing the resource with Power BI communities, study groups, professional networks, and useful resource directories.

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
