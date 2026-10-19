# Deployment Strategies

This section describes common deployment strategies used with GitLab CI/CD.

## Typical deployment models

### 1. Direct deployment

A pipeline builds and deploys an application directly to a target environment after successful validation.

Use when:

- the environment is simple
- release cadence is moderate
- a standard deployment process is established

### 2. Blue/green deployment

Two production environments run in parallel. One is active while the other receives the next release.

Benefits:

- minimal downtime
- safer rollback
- easier validation before promotion

### 3. Canary deployment

A small percentage of traffic is moved to a new version before full rollout.

Benefits:

- controlled risk exposure
- better production monitoring
- quicker rollback if issues appear

### 4. Rolling deployment

New versions replace old instances gradually, one by one.

Benefits:

- minimal service disruption
- good for container-based platform workloads
- common in Kubernetes environments

## GitLab deployment flow

```text
code push -> pipeline builds -> tests run -> artifacts created -> deploy to environment -> verification
```

## Recommended deployment practices

- separate deployment jobs for dev, test, and prod
- use environment protection rules
- require approvals for production
- keep rollback steps documented
- publish deployment status into the GitLab UI

## Example production approval job

```yaml
production_deploy:
  stage: deploy
  script:
    - echo "Deploying to production"
  environment:
    name: production
  when: manual
  only:
    - main
```

## Integration with Kubernetes and Helm

GitLab works well with Kubernetes by:

- building and pushing container images
- deploying with Helm charts
- managing values per environment
- tracking releases in GitLab CI/CD

## Summary

A mature deployment strategy balances speed, reliability, and rollback safety. GitLab CI/CD can support a wide range of deployment models, from simple release pipelines to advanced progressive delivery workflows.
