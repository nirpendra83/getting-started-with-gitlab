# Troubleshooting

This page lists common issues and a simple way to investigate them.

## Common GitLab problems

### 1. User cannot access a project

Check:

- project visibility setting
- group membership
- user role and access level
- SSO or LDAP sync status

### 2. Runner is offline

Check:

- runner service status
- network connectivity
- registration token validity
- executor configuration

### 3. Pipeline is stuck or never starts

Check:

- runner availability and tags
- job configuration and syntax
- GitLab project settings
- token or variable issues

### 4. Deployment fails in Kubernetes

Check:

- cluster access credentials
- Helm chart values files
- correct namespace and release name
- quota or resource constraints

### 5. SSL or certificate errors

Check:

- certificate validity
- hostname mapping
- reverse proxy configuration
- time sync across servers

## Useful debugging methods

- Check pipeline logs in GitLab
- Review runner logs
- Inspect GitLab system hooks and logs
- Verify environment variables and secrets
- Validate YAML syntax with a local linter when possible

## General guidance

Troubleshooting is easier when your GitLab environment is documented, your runners are monitored, and your deployment process is standardized.
