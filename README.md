# Getting Started with GitLab

This repository is a practical starter guide for learning GitLab administration, GitLab CI/CD, and modern DevOps workflows. It is designed for beginners and intermediate learners who want a clear path to understanding GitLab as a complete platform for code collaboration, automation, and deployment.

## Repository purpose

The materials in this project cover:

- GitLab fundamentals and architecture
- GitLab administration and governance
- Users, groups, access control, and protection rules
- CI/CD pipelines, runners, and deployment automation
- Kubernetes and Helm-based release workflows
- Security, troubleshooting, and best practices
- Advanced admin topics including SSO, runner hardening, backups, and production operations

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
│   ├── 04-gitlab-security-and-governance.md
│   ├── 05-ci-cd-fundamentals.md
│   ├── 06-gitlab-runner-setup.md
│   ├── 07-helm-and-kubernetes-deployments.md
│   ├── 08-best-practices.md
│   ├── 09-troubleshooting.md
│   ├── 10-examples.md
│   ├── 11-deployment-strategies.md
│   ├── 12-gitlab-sso-and-authentication.md
│   ├── 13-runner-hardening-and-operations.md
│   └── 14-backup-and-disaster-recovery.md
├── mkdocs.yml
├── requirements.txt
├── LICENSE
└── site/
```

## Local setup

To preview the documentation locally:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
mkdocs serve
```

Then open the local URL displayed in the terminal, usually:

```text
http://127.0.0.1:8000
```

## GitLab admin topics

This guide focuses on the key responsibilities of a GitLab administrator, including:

- user and group management
- authentication and access control
- project and branch protection
- GitLab Runner operations
- backup, monitoring, and system maintenance
- compliance and governance
- SSO integration and user lifecycle control
- runner security and hardening

## GitLab CI/CD topics

The CI/CD section provides core understanding of:

- pipeline stages and jobs
- variables, artifacts, and cache usage
- GitLab Runner execution
- test automation
- deployment approvals and release workflows
- Kubernetes and Helm deployment patterns

## Example CI pipeline

```yaml
stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - echo "Building application"

unit_test:
  stage: test
  script:
    - echo "Running tests"

deploy_job:
  stage: deploy
  script:
    - echo "Deploying application"
  only:
    - main
```

## Suggested learning path

1. Read the GitLab admin overview
2. Review installation and setup guidance
3. Learn group permissions and access control
4. Understand CI/CD fundamentals and runner setup
5. Use Helm and Kubernetes deployment examples
6. Apply best practices and troubleshoot issues
7. Review SSO, runner hardening, and backup strategies

---

This repository serves as a starter reference for GitLab onboarding and DevOps training.
