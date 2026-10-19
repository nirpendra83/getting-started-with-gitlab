# Getting Started with GitLab

This repository provides a practical starter guide for GitLab administrators and engineering teams who want to learn the basics of GitLab, GitLab CI/CD, and deployment workflows.

## What is included

- GitLab admin overview and setup guidance
- User, group, and permission model
- GitLab CI/CD fundamentals and runner setup
- Example pipeline files and deployment notes
- Troubleshooting and best-practice recommendations

## Repository structure

```text
.
├── README.md
├── .gitlab-ci.yml
├── docs/
│   ├── index.md
│   ├── 01-gitlab-admin-overview.md
│   ├── 02-installation-and-setup.md
│   ├── 03-user-groups-and-permissions.md
│   ├── 05-ci-cd-fundamentals.md
│   ├── 06-gitlab-runner-setup.md
│   ├── 07-helm-and-kubernetes-deployments.md
│   ├── 08-best-practices.md
│   ├── 09-troubleshooting.md
│   └── 10-examples.md
├── mkdocs.yml
├── requirements.txt
└── LICENSE
```

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
mkdocs serve
```

Open the local URL displayed by MkDocs, usually:

```text
http://127.0.0.1:8000
```

## Documentation highlights

### GitLab admin

- Project and group management
- Authentication and access controls
- Runner and security configuration
- Backup, maintenance, and environment hygiene

### CI/CD

- Pipeline structure with stages and jobs
- Variables, artifacts, and caching
- Runner registration and executor selection
- Deployment patterns for Kubernetes and Helm

## Example CI pipeline

```yaml
stages:
  - test

job_test:
  stage: test
  script:
    - echo "Running tests"
    - python --version
```

## Next steps

1. Review the admin guide in `docs/01-gitlab-admin-overview.md`
2. Read the CI/CD fundamentals in `docs/05-ci-cd-fundamentals.md`
3. Customize the examples to fit your GitLab setup and deployment workflow

---

This repository is intended as a starter resource for GitLab onboarding and training.
