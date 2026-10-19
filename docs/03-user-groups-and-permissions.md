# Users, Groups, and Permissions

Effective access control is one of the most important responsibilities of a GitLab administrator.

## Access levels in GitLab

GitLab provides role-based access control. Common roles include:

- Guest: read-only access to limited content
- Reporter: can view issues and merge requests
- Developer: can push code and create branches
- Maintainer: can manage project settings and merge requests
- Owner: full administrative rights within a group or project

## Groups

Groups are useful when multiple projects share the same team or policy model. They help administrators:

- assign team permissions consistently
- organize projects by department or product
- apply shared policies and visibility

## Best practices for group structure

- Keep groups aligned to business units or product lines
- Use subgroups for large organizations
- Grant least privilege instead of broad access
- Protect production branches and sensitive repositories

## Project permissions

Project-level permissions should reflect the team’s real workflow. For example:

- Developers: write code, open merge requests
- Maintainers: approve and merge, manage CI/CD settings
- Security team: read-only access or audit responsibilities

## Branch protection

Protected branches should be configured for critical branches such as `main` and `release/*`.

Recommended rules:

- require merge request reviews
- require status checks to pass
- restrict who can push directly
- require approvals before merge

## SSO and authentication

Many organizations integrate GitLab with:

- LDAP
- Active Directory
- Google Workspace or other SSO providers
- SAML or OIDC identity providers

## Example group policy

```text
Platform Team
  ├── Maintainers: infrastructure and settings
  ├── Developers: application code changes
  └── Reporters: read-only access for stakeholders
```

## Next steps

- Learn about CI/CD pipeline fundamentals
- Review runner setup and security policy
- Add branch protection and review requirements
