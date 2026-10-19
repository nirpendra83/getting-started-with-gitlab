# Examples

This page provides a few simple GitLab CI/CD examples that you can adapt.

## Example 1: Build and test

```yaml
stages:
  - build
  - test

build_app:
  stage: build
  script:
    - echo "Build step"
    - make build

test_app:
  stage: test
  script:
    - echo "Running tests"
    - make test
```

## Example 2: Python project

```yaml
stages:
  - lint
  - test

python_lint:
  stage: lint
  image: python:3.12
  script:
    - pip install flake8
    - flake8 .

python_test:
  stage: test
  image: python:3.12
  script:
    - pip install -r requirements.txt
    - pytest -q
```

## Example 3: Deployment to Kubernetes

```yaml
stages:
  - build
  - deploy

build_image:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t my-registry/my-app:${CI_COMMIT_SHA} .
    - docker push my-registry/my-app:${CI_COMMIT_SHA}

deploy_image:
  stage: deploy
  script:
    - echo "Deploy to Kubernetes"
    - helm upgrade --install my-app ./helm/my-app --set image.tag=${CI_COMMIT_SHA}
  only:
    - main
```

## Tips

- Keep jobs simple and auditable
- Use tags to route jobs to appropriate runners
- Add approvals for production deployments
- Store runtime variables in GitLab CI/CD settings
