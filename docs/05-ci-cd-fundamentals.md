# CI/CD Fundamentals

GitLab CI/CD is the automation layer that helps teams build, test, package, and deploy software from code repositories.

## Core CI/CD concepts

### Pipeline

A pipeline is a collection of jobs and stages. It represents the delivery workflow for a project.

### Stage

Stages define the order of execution. For example:

- build
- test
- deploy

### Job

A job is a unit of work executed by a runner. Jobs can run shell commands, build artifacts, or deploy applications.

### Runner

A runner executes jobs within a project or group pipeline.

## Basic `.gitlab-ci.yml` example

```yaml
stages:
  - build
  - test

build_job:
  stage: build
  script:
    - echo "Building application"
    - make build

unit_test:
  stage: test
  script:
    - echo "Running unit tests"
    - make test
```

## Variables

GitLab supports predefined and custom variables. They are useful for:

- environment configuration
- credentials
- deployment targets
- per-branch behavior

## Artifacts

Artifacts store generated output from jobs, such as:

- build binaries
- test reports
- documentation output
- deployment bundles

## Caches

Use caching to speed up workflows by reusing dependencies across pipeline runs.

```yaml
cache:
  paths:
    - .npm/
    - node_modules/
```

## Typical GitLab pipeline flow

```text
Code pushed -> pipeline starts -> build -> test -> deploy -> release
```

## When to use CI/CD

Use GitLab CI/CD for:

- automated unit and integration tests
- linting and static analysis
- packaging and image build
- application deployment to dev/test/prod
- environment approvals and release tracking

## Good practices

- Keep pipeline definitions in version control
- Split work into small, focused jobs
- Use caches and artifacts strategically
- Fail fast on errors
- Add environment approval gates for production

## Next steps

- Set up GitLab Runner
- Review example pipeline scripts
- Learn deployment patterns for Kubernetes
