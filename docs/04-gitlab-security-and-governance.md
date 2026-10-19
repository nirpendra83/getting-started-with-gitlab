# GitLab Security and Governance

Security and governance are essential for any GitLab environment, especially when multiple teams and production workloads are involved.

## Why governance matters

GitLab often becomes the center of software delivery for a team or organization. Because it controls code, review workflows, deployment automation, and project collaboration, it should be governed carefully.

## Core governance areas

### 1. Access control

Ensure that users have the correct role based on responsibility.

Recommended controls:

- use least-privilege access models
- define project roles clearly
- restrict guest access to only the necessary users
- apply group-level policies consistently

### 2. Branch protection

Protect important branches such as `main`, `develop`, and `production`.

Recommended settings:

- require merge requests
- require approvals
- require status checks to pass
- restrict direct pushes
- require signed commits when supported

### 3. Secret management

Never store secrets directly in repository files.

Use:

- GitLab CI/CD variables
- masked variables
- Kubernetes Secrets
- external secret managers such as Vault or cloud secret stores

### 4. Audit and compliance

Enable audit logs and review changes to important repositories and projects.

Track:

- who pushed code
- who approved a merge request
- when production deployments occurred
- which users changed permissions

## Security checklist for admins

- Enable SSL and TLS for all production endpoints
- enforce MFA for privileged users
- verify runner security configuration
- restrict public repository exposure when not required
- review group access regularly
- remove stale users and unused projects

## Example branch protection policy

```text
Branch: main
Rules:
- no direct pushes
- at least 1 approval required
- pipeline must pass before merge
- protected by maintainer-only policy
```

## Recommended operational controls

- maintain version and patch discipline
- define backup and recovery procedures
- separate development and production runners
- record environment ownership and responsibilities
- review access on a scheduled basis

## Summary

Security and governance in GitLab are about protecting code quality, access, and deployment safety. A strong policy framework reduces risk while keeping teams productive.
