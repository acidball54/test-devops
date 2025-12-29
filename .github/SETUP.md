# GitHub Actions Setup Guide

## Required Secrets

To enable Docker Hub deployment, add these secrets to your GitHub repository:

### 1. Docker Hub Username
- **Secret Name:** `DOCKER_HUB_USERNAME`
- **Value:** Your Docker Hub username (e.g., `johndoe`)

### 2. Docker Hub Access Token
- **Secret Name:** `DOCKER_HUB_ACCESS_TOKEN`
- **Value:** Your Docker Hub access token (not password!)

### How to Create Docker Hub Access Token

1. Go to [Docker Hub](https://hub.docker.com/)
2. Sign in to your account
3. Click on your username → **Account Settings**
4. Go to **Security** tab
5. Click **New Access Token**
6. Give it a name (e.g., "GitHub Actions")
7. Set permissions to **Read & Write**
8. Click **Generate**
9. **Copy the token immediately** (you won't see it again!)
10. Add it as `DOCKER_HUB_ACCESS_TOKEN` secret in GitHub

## Adding Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:
   - Name: `DOCKER_HUB_USERNAME`
   - Value: Your Docker Hub username
5. Repeat for `DOCKER_HUB_ACCESS_TOKEN`

## Workflow Behavior

### Automatic Deployment
- Triggers after successful CI/CD Pipeline completion
- Also triggers on direct push to `main`/`master`
- Builds and pushes Docker image to Docker Hub

### Image Tags Created
- `latest` - Latest build from main/master
- `main-<sha>` - Specific commit SHA
- `v1.0.0` - Semantic version (when you push tags)
- `1.0` - Major.minor version

### Example Image Name
If your Docker Hub username is `johndoe`, images will be:
- `johndoe/test-app:latest`
- `johndoe/test-app:main-abc123`
- `johndoe/test-app:v1.0.0`

## Testing Locally

Before pushing, test the Docker build locally:

```bash
# Build image
docker build -t test-app:local .

# Run container
docker run -p 3000:3000 test-app:local

# Test in browser
open http://localhost:3000
```

## Troubleshooting

### "Authentication failed"
- Verify `DOCKER_HUB_USERNAME` is correct
- Make sure you're using Access Token, not password
- Check token has Read & Write permissions

### "Image name invalid"
- Docker Hub username must be lowercase
- No special characters except hyphens and underscores

### Workflow doesn't trigger
- Check workflow file is in `.github/workflows/` directory
- Verify branch names match (`main` or `master`)
- Ensure CI/CD Pipeline workflow completes successfully first

