# Helm and Kubernetes Deployments

GitLab CI/CD can deploy applications to Kubernetes clusters using Helm charts and pipeline automation.

## Why Kubernetes with GitLab

GitLab works well with Kubernetes because it can:

- build container images
- deploy to a cluster with Helm
- update release environments
- integrate with secret management and approvals

## Typical deployment process

```text
Build image -> push to registry -> update Helm values -> deploy to cluster
```

## Example Helm deployment job

```yaml
deploy_to_k8s:
  stage: deploy
  image: alpine:3.18
  script:
    - apk add --no-cache curl bash
    - echo "Deploying with Helm"
    - helm upgrade --install my-app ./charts/my-app --namespace production
  only:
    - main
```

## Recommended patterns

- Store cluster credentials in GitLab CI/CD variables
- Use environment-specific values files
- Separate dev, test, and production values
- Use protected environments for production
- Require approvals before deployment to production

## Example environment strategy

```text
dev -> test -> staging -> production
```

## Security considerations

- Use scoped credentials and service accounts
- Do not hard-code secrets in YAML files
- Store secrets in GitLab CI/CD variables or Kubernetes Secrets
- Restrict cluster access by environment and namespace

## Next steps

- Review the example pipelines document
- Add approval gates for production deployment
- Connect the pipeline to your cluster registry and Helm releases
