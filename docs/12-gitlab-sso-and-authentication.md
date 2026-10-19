# GitLab SSO and Authentication

Single sign-on (SSO) and authentication are critical parts of a secure GitLab deployment. They help organizations manage user identities consistently and reduce password sprawl.

## Common authentication methods

GitLab supports multiple authentication approaches, including:

- local GitLab users
- LDAP integration
- Active Directory
- SAML-based SSO
- OIDC and OAuth providers
- external identity providers for enterprise environments

## Why SSO matters

SSO helps organizations:

- centralize identity management
- enforce MFA and access policies
- simplify user onboarding and offboarding
- reduce operational overhead for administrators

## Recommended identity design

- Use a centralized identity provider for user management
- Keep admin rights limited to a small group
- Enforce MFA for privileged roles
- Use groups to map identity-based access policies to repositories

## Example SSO flow

```text
User logs in -> Identity provider validates credentials -> GitLab receives trusted identity -> user is mapped to GitLab account -> access is granted based on group or project role
```

## GitLab and LDAP/AD

In many enterprise environments, GitLab is integrated with LDAP or Active Directory. This allows authentication and authorization to be managed centrally.

Typical benefits:

- consistent user accounts
- easier onboarding/offboarding
- centralized policy enforcement

## SAML and OIDC

SAML and OIDC are commonly used in enterprise GitLab setups, especially when integrating with cloud IAM services or identity platforms.

Important considerations:

- verify the correct certificate and claim mappings
- test login behavior for new users and service accounts
- protect the identity provider configuration carefully

## Identity lifecycle security

When a user leaves the organization:

- disable their account in the identity provider
- revoke access to groups and projects
- confirm they no longer have runner or deployment permissions
- remove stale SSH keys and tokens

## Best practices

- review access regularly
- use group mapping instead of ad hoc project permissions
- avoid broad admin access
- document the identity integration and recovery steps

## Summary

A well-designed GitLab authentication strategy balances security, user experience, and operational simplicity. Centralized identity reduces risk and makes governance easier to enforce.
