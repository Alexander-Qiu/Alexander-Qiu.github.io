# Alexander Qiu — personal website

A minimal bilingual personal page. Plain HTML, CSS, and JavaScript; no build step.

## Preview

    python3 -m http.server 4173 --bind 127.0.0.1

Open http://127.0.0.1:4173/ or open index.html directly.

## Files

- index.html: introduction, work history, education, and publication links.
- assets/style.css: narrow-column layout and light/dark themes.
- assets/app.js: language and theme preferences.
- legacy/: the original campus-map experiment.
- [Companion GitHub profile](https://github.com/Alexander-Qiu/Alexander-Qiu): profile README.

English content works without JavaScript. The data-en and data-zh attributes hold translations.

## Links

- [Personal website](https://Alexander-Qiu.github.io/)
- [GitHub profile](https://github.com/Alexander-Qiu)
- [Google Scholar](https://scholar.google.com/citations?user=gqi0igQAAAAJ&hl=en)

## Deployment

GitHub Pages publishes the repository root from the master branch.

## Daily automated activity

[Daily automated commit](.github/workflows/daily-activity.yml) runs daily at
09:23 Asia/Shanghai (01:23 UTC), with a manual run option in GitHub Actions.
It updates only .github/daily-activity.json and skips a second commit on the
same local date. The file and commit message explicitly identify the activity
as automated; this is not a record of manual development work.

The author is Alexander-Qiu using the account's GitHub noreply address; the
committer is github-actions[bot]. The workflow uses the repository GITHUB_TOKEN
with contents: write and does not require a personal access token.

GitHub schedules can be delayed or dropped under load. To stop future runs,
disable this workflow in the repository's Actions tab. GitHub can also disable
scheduled workflows after 60 days without repository activity.
