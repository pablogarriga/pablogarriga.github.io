# pablogarriga.github.io

Personal academic website built with Jekyll and hosted on GitHub Pages.

## About

This site is an academic-style personal webpage focused on research, publications, CV, and related work. It is designed to be simple to maintain and fully compatible with GitHub Pages.

## Inspiration and credit

Built with [al-folio](https://github.com/alshedivat/al-folio) by Alshedivat, inspired by [Santiago Hermo's](https://github.com/santiagohermo/santiagohermo.github.io) layout.

## Codex project

This repository is being actively refactored as a Codex project. Changes are planned and tracked in `AGENTS.md`.

## Run Jekyll locally (macOS)

Use Homebrew Ruby (not macOS system Ruby), install the required Bundler version, then serve:

```sh
brew install ruby@3.3
echo 'export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install bundler -v 4.0.4
cd /Users/pablo/github/pablogarriga.github.io
bundle install
bundle exec jekyll serve
```

Open: http://127.0.0.1:4000

If needed:

- Port conflict: `bundle exec jekyll serve --port 5000`
- Bundler mismatch: `gem install bundler -v 4.0.4`

## Run Prettier locally (to match GitHub Actions)

Install once:

```sh
cd /Users/pablo/github/pablogarriga.github.io
npm install --save-dev prettier @shopify/prettier-plugin-liquid
```

Check formatting (same as CI):

```sh
npx prettier . --check
```

Auto-fix formatting:

```sh
npx prettier . --write
```

Common issues:

- CI fails with `Code style issues found ...`: run `npx prettier . --write`, then commit and push.
- Error `Cannot find package '@shopify/prettier-plugin-liquid'`: install dependencies with the `npm install` command above.

## Research page customizations

### 1) Group papers by publication type

File: `/Users/pablo/github/pablogarriga.github.io/_pages/research.md`

```liquid
<div class="publications">
  <h2>Working papers</h2>
  {% bibliography -g group -q @*[group=Working papers]* %}

  <h2>Publications</h2>
  {% bibliography -g group -q @*[group=Publications]* %}

  <h2>Policy reports</h2>
  {% bibliography -g group -q @*[group=Policy reports]* %}
</div>
```

Grouping options:

- No year headings: `-g none`
- Group by year: `-g year`
- Group by custom BibTeX field: `-g group`

### 2) Add publication type and abstract in BibTeX entries

File: `/Users/pablo/github/pablogarriga.github.io/_bibliography/papers.bib`

- Add `group={Working papers|Publications|Policy reports}` to each entry.
- Add `abstract={...}` to each entry to enable the `Abs` button and hidden abstract content.

### 3) Add preview images for papers

File: `/Users/pablo/github/pablogarriga.github.io/_bibliography/papers.bib`

Example:

```bibtex
preview={collection-agents.png},
```

Image path must be:
`/Users/pablo/github/pablogarriga.github.io/assets/img/publication_preview/collection-agents.png`

### 4) Buttons and abstract toggle behavior

File: `/Users/pablo/github/pablogarriga.github.io/_layouts/bib.liquid`

- `Abs` button is shown when `entry.abstract` exists.
- Abstract stays hidden by default (`<div class="abstract hidden">`) and opens when `Abs` is clicked.
- Other buttons are shown only if the matching fields exist in BibTeX:
  - `doi`, `arxiv`, `hal`, `pdf`, `html`, `supp`, `video`, `blog`, `code`, `poster`, `slides`, `website`
  - `bibtex_show={true}` for the `Bib` button

### 5) Make preview images larger

File: `/Users/pablo/github/pablogarriga.github.io/_layouts/bib.liquid`

- Thumbnail column changed from `col-sm-2` to `col-sm-3`
- Text column changed from `col-sm-8` to `col-sm-9`
- Figure size hint changed from `sizes = "200px"` to `sizes = "280px"`
