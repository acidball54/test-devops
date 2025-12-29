# GitHub Actions CI/CD

This repository includes GitHub Actions workflows for continuous integration and deployment.

## Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)
Comprehensive CI/CD pipeline with separate jobs for:
- **Lint**: Runs ESLint to check code quality
- **Build**: Builds the Next.js application
- **Type Check**: Validates TypeScript types

### 2. Deploy (`deploy.yml`)
Deployment workflow that runs after successful CI pipeline completion.

### 3. Simple CI/CD (`ci-cd-simple.yml`)
A simplified single-job workflow that runs all checks sequentially.

## Setup

### Required Secrets (for deployment)

If you want to deploy automatically, add these secrets to your GitHub repository:

#### For Vercel:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

#### For AWS:
- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key

## How to Add Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the required secrets

## Workflow Triggers

Workflows run automatically on:
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main`, `master`, or `develop` branches

## Customization

### Adding Tests

If you add tests, update the workflow:

```yaml
- name: Run tests
  run: npm test
```

### Custom Deployment

Edit `.github/workflows/deploy.yml` and uncomment/modify the deployment steps for your platform.

## Status Badge

Add this to your README.md to show CI/CD status:

```markdown
![CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/CD%20Pipeline/badge.svg)
```

