# Project Hyperion Intro Blog

This repository now uses a project-introduction blog format, aligned with the GitHub Pages workflow from the referenced tutorial:

1. Keep content in a username.github.io repository.
2. Update pages locally.
3. Push to main branch.
4. Serve with GitHub Pages.

## Local Preview

Option A:

- Open index.html directly.

Option B (recommended):

```powershell
cd thiel-scholarship-blog
py -3 -m http.server 8080
```

Open http://127.0.0.1:8080

## Blog Structure

- Sticky header and section navigation
- Featured project update
- Filterable post stream by tag
- Sidebar with milestones, archives, and application kit
- Architecture explainer section
- 12-month roadmap timeline

## Where To Edit

- index.html: layout and sections
- styles.css: visual design and responsiveness
- script.js: post data, tag filters, archives, and dialog behavior

## Deployment (GitHub Pages)

```powershell
git add .
git commit -m "Update project intro blog"
git push
```

Then verify GitHub Pages is enabled on the main branch in repository settings.
