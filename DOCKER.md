# Docker Deployment Guide

This project includes a production-ready Docker setup for deploying to Docker Hub.

## Prerequisites

1. Docker Hub account
2. Docker Hub Access Token (not password)
3. GitHub Secrets configured

## Setup GitHub Secrets

Add these secrets to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `DOCKER_HUB_USERNAME` | Your Docker Hub username | `yourusername` |
| `DOCKER_HUB_ACCESS_TOKEN` | Docker Hub access token | `dckr_pat_xxxxx` |

### How to create Docker Hub Access Token

1. Log in to [Docker Hub](https://hub.docker.com/)
2. Go to **Account Settings** → **Security** → **New Access Token**
3. Give it a name (e.g., "GitHub Actions")
4. Copy the token and add it as `DOCKER_HUB_ACCESS_TOKEN` secret

## Dockerfile Structure

The Dockerfile uses a multi-stage build:

1. **deps**: Installs production dependencies
2. **builder**: Builds the Next.js application
3. **runner**: Creates minimal production image

## Image Tags

The workflow automatically creates tags:

- `latest` - Latest build from main/master branch
- `main-<sha>` - Specific commit SHA from main branch
- `v1.0.0` - Semantic version tags (when you push tags like `v1.0.0`)
- `1.0` - Major.minor version tags

## Local Development

### Build image locally

```bash
docker build -t test-app:local .
```

### Run container

```bash
docker run -p 3000:3000 test-app:local
```

### Test with production build

```bash
docker build -t test-app:local .
docker run -p 3000:3000 test-app:local
```

Visit `http://localhost:3000`

## Deployment

### Automatic Deployment

The workflow automatically builds and pushes images when:
- CI/CD Pipeline completes successfully
- Push to `main` or `master` branch
- Push tags like `v1.0.0`

### Manual Deployment

```bash
# Login to Docker Hub
docker login -u YOUR_USERNAME

# Build and tag
docker build -t YOUR_USERNAME/test-app:latest .

# Push
docker push YOUR_USERNAME/test-app:latest
```

## Pull and Run

After deployment, pull and run the image:

```bash
docker pull YOUR_USERNAME/test-app:latest
docker run -p 3000:3000 YOUR_USERNAME/test-app:latest
```

## Multi-Architecture Support

The workflow builds for both:
- `linux/amd64` (Intel/AMD)
- `linux/arm64` (Apple Silicon, ARM servers)

## Security Best Practices

- ✅ Non-root user in container
- ✅ Minimal Alpine Linux base image
- ✅ Multi-stage build to reduce image size
- ✅ Only production dependencies in final image
- ✅ BuildKit cache for faster builds

## Image Size Optimization

- Uses Alpine Linux (smaller base image)
- Multi-stage build removes build dependencies
- Only includes production files
- Standalone Next.js output

## Troubleshooting

### Build fails with "standalone" error

Make sure `next.config.ts` has:
```typescript
output: 'standalone',
```

### Authentication fails

- Verify `DOCKER_HUB_USERNAME` is correct
- Use Access Token, not password
- Check token has write permissions

### Image too large

- Check `.dockerignore` includes all unnecessary files
- Verify multi-stage build is working correctly
- Consider using `docker image prune` to clean up

## CI/CD Integration

The deployment workflow:
1. Waits for CI/CD Pipeline to succeed
2. Builds Docker image with BuildKit
3. Pushes to Docker Hub with multiple tags
4. Creates deployment summary in GitHub Actions

