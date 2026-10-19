# GitLab Admin Overview

GitLab is a complete DevSecOps platform that combines source code management, CI/CD, issue tracking, code review, security scanning, and deployment orchestration in one system.

## Core responsibilities of a GitLab admin

A GitLab administrator is typically responsible for:

- Managing users and groups
- Configuring access permissions and security policies
- Installing and maintaining GitLab instances
- Managing GitLab Runner registration and execution
- Monitoring system health and backups
- Enforcing compliance and lifecycle standards

## Typical GitLab architecture

A standard GitLab environment includes:

- GitLab application server
- PostgreSQL database
- Redis cache
- Object storage or file storage
- GitLab Runner nodes for CI/CD execution
- Optional reverse proxy and SSL termination

## Common GitLab concepts

### Projects

A project is where code, pipelines, issues, and merge requests live.

### Groups

Groups help organize multiple related projects and apply shared permissions.

### Users and access levels

GitLab supports multiple access levels such as:

- Guest
- Reporter
- Developer
- Maintainer
- Owner

### Protected branches

Protected branches help enforce review and approval rules before code can be merged into important branches like `main` or `production`.

## Why GitLab is useful

GitLab reduces tooling fragmentation by combining:

- Code hosting
- Collaboration and code review
- CI/CD pipelines
- Security scanning
- Deployment automation

This makes it easier for teams to standardize development and release practices.

## Admin checklist

- Configure user authentication and SSO
- Define groups and project permissions
- Register runners for CI/CD
- Configure backup and restore procedures
- Review security settings and branch protection
- Monitor usage and pipelines

## Next steps

- Review the installation guide
- Learn how groups and permissions work
- Configure CI/CD runners
