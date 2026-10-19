# Installation and Setup

This section explains how to set up a GitLab environment for a small team or a production organization.

## Deployment models

GitLab can be deployed in several ways:

- GitLab.com (hosted SaaS)
- Self-managed GitLab on Linux servers
- Kubernetes-based deployment using Helm charts
- Docker/Compose for testing and local lab setups

## Prerequisites

Before installing GitLab, verify the following:

- Supported Linux distribution
- Adequate CPU, memory, and disk storage
- DNS name or hostname configured
- Firewall rules opened for required ports
- SMTP or mail service for notifications
- Backups and restore strategy

## Example: Ubuntu installation

```bash
sudo apt update
sudo apt install -y curl ca-certificates tzdata
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
sudo EXTERNAL_URL="https://gitlab.example.com" apt install gitlab-ce
```

## Post-installation tasks

After installation, complete the following:

- Log in as root or initial administrator
- Change the default password
- Set up hostname and SSL certificates
- Configure email notifications
- Create the first group and project
- Register one or more runners

## Configuration tips

- Keep the instance updated with the latest patch releases
- Use SSL/TLS certificates for production deployments
- Configure backups regularly
- Enable monitoring for resource issues
- Use separate environments for dev, test, and production

## Example self-managed architecture

```text
GitLab server
  ├── web application
  ├── PostgreSQL
  ├── Redis
  ├── object storage
  └── GitLab Runner
```

## Troubleshooting

Common issues during setup include:

- hostname mismatch
- missing DNS records
- port 80/443 not open
- insufficient disk space
- SSL certificate errors

## Next steps

- Review group and permission setup
- Add runners for CI/CD execution
- Enforce branch protection and code review policies
