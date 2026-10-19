# GitLab Runner Hardening and Operations

GitLab Runners are a critical execution layer for pipelines. Because they run build and deployment commands, they must be configured securely and operated carefully.

## Runner security responsibilities

A GitLab admin should ensure that runners:

- run only the required jobs
- have minimal privileges
- are isolated from sensitive systems
- are updated frequently
- are monitored for health and failure rates

## Common runner types

- shell runners
- Docker runners
- Kubernetes runners
- custom executors

For production workloads, Docker or Kubernetes runners are often preferred because they provide better isolation and scaling behavior.

## Hardening recommendations

- Use dedicated runners for production workloads
- Keep runner images minimized and patched
- Restrict direct access to sensitive infrastructure
- Use tags to ensure jobs go to the intended runners
- Limit concurrent jobs when needed for stability

## Runner health checklist

- monitor runner status in GitLab UI
- review logs for failed jobs and performance issues
- confirm Docker or kubernetes connectivity
- verify token validity and registration status
- replace stale or unhealthy runners

## Example runner tags

```text
docker
linux
prod
kubernetes
```

This allows pipelines to target specific runners based on workload, environment, or platform.

## Recommended operational controls

- separate build, test, and deploy runners
- isolate privileged pipelines from normal developer jobs
- define clear ownership for runner maintenance
- review runner configuration periodically
- keep environment variables and credentials out of untrusted jobs

## Summary

Runner hardening is a core DevSecOps practice. Secure, well-managed runners reduce the risk of accidental privilege escalation and pipeline failures in production environments.
