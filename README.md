# Getting Started with GitLab

This repository contains training materials and a hands-on guide for GitLab administration and GitLab CI/CD workflows. It uses MkDocs with the Material theme and is designed for modern onboarding and practical learning.

## Contents

- docs/ — documentation source
- examples/ — sample GitLab CI/CD pipeline files
- .github/workflows/ — automation to build and publish the docs site

## Quick start

1. Read the docs in the `docs/` folder.
2. Review the example CI files under `examples/`.
3. Customize the content and pipelines for your environment.

## View the documentation locally

To preview the documentation website in your browser:

```bash
python -m venv .venv
source .venv/bin/activate   # On Windows use: .venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
mkdocs serve
```

Then open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:8000
```

You can also build the static site with:

```bash
mkdocs build
```

This creates a `site/` folder with the generated documentation.

## Local preview

```bash
python -m pip install -r requirements.txt
mkdocs serve
```
