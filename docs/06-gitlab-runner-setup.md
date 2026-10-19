# GitLab Runner Setup

GitLab Runner is the execution engine for CI/CD jobs. It runs the job scripts inside containers, virtual machines, or shell environments.

## What a runner does

A GitLab Runner connects to a GitLab instance and receives jobs from a project. It then runs the commands defined in the pipeline and reports the results back to GitLab.

## Runner types

Common runner executors include:

- shell
- docker
- docker+machine
- kubernetes
- custom executor

## Installation example

On Ubuntu:

```bash
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
sudo apt-get install gitlab-runner
```

## Register a runner

```bash
sudo gitlab-runner register \
  --url https://gitlab.example.com \
  --token YOUR_RUNNER_TOKEN \
  --executor docker \
  --description "docker-runner" \
  --tag-list "docker,linux"
```

## Runner configuration

A typical runner configuration file is stored at:

```text
/etc/gitlab-runner/config.toml
```

It can be customized for:

- concurrency limits
- tags
- Docker image defaults
- networking constraints
- security policies

## Tagging runners

Tags let you direct jobs to the right runner, such as:

- `docker`
- `kubernetes`
- `windows`
- `prod`

## Best practices

- Use separate runners for production and development workloads
- Tag runners clearly
- Keep runner images lean and secure
- Monitor runner health and offline state
- Limit privileges for sensitive jobs

## Common issues

- Runner offline or disconnected
- Docker privileges not available
- Job fails because of missing environment variables
- Network restrictions block the runner

## Next steps

- Review the examples page
- Create pipelines for build, test, and deploy jobs
- Integrate with Kubernetes or Helm-based deployment strategies
