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
