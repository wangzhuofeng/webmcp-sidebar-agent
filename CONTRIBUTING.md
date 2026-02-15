# Contributing

## Development

1. Load extension from `chrome-webmcp-sidebar/` in `chrome://extensions`
2. Make changes in source files
3. Click **Reload** in extension page to test

## Pull Requests

- Keep changes focused and small
- Include a short test note in PR description
- Never commit API keys or secrets

## Repository Setup & Publish

### Option A: GitHub Web UI

1. Create a new public repository on GitHub (do not add README/license there)
2. In local project root, run:

```bash
git init
git add .
git commit -m "chore: initial open-source release"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Option B: GitHub CLI (`gh`)

```bash
git init
git add .
git commit -m "chore: initial open-source release"
git branch -M main
gh repo create <repo-name> --public --source=. --remote=origin --push
```

## Recommended Repo Settings

- Visibility: Public
- Default branch: `main`
- Enable Issues
- Enable Discussions (optional)
- Protect `main` branch (optional, if collaborating)
