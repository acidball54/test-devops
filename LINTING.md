# Linting Setup Guide

This project uses ESLint for code quality and consistency.

## Quick Start

### Run Linter
```bash
npm run lint
```

### Auto-fix Issues
```bash
npm run lint:fix
```

### Run All Checks
```bash
npm run check  # Runs lint + type-check
```

## Configuration

### ESLint Config (`eslint.config.mjs`)

The project uses:
- **Next.js ESLint config** - Optimized for Next.js applications
- **TypeScript support** - Full TypeScript linting
- **React rules** - React and React Hooks best practices
- **Accessibility rules** - JSX a11y checks

### Key Rules

- **No console.log** - Warns on console.log (allows console.warn/error)
- **Unused variables** - Warns on unused variables (ignores variables starting with `_`)
- **React hooks** - Validates React hooks dependencies
- **Accessibility** - Checks for accessible anchor tags and other a11y issues

## VS Code Integration

If you're using VS Code, install the ESLint extension for automatic linting:

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. The `.vscode/settings.json` file is configured to auto-fix on save

## CI/CD Integration

Linting runs automatically in GitHub Actions on:
- Push to main/master/develop branches
- Pull requests to main/master/develop branches

## Common Issues & Fixes

### Anchor tag warnings
If you see `jsx-a11y/anchor-is-valid` warnings:
- Use proper href values (not `#`)
- Or use Next.js `Link` component for internal navigation
- Or use `button` element if it's not a navigation link

### Unused variables
Prefix unused variables with `_`:
```typescript
const _unusedVar = something; // Won't trigger warning
```

### Console.log warnings
Use `console.warn()` or `console.error()` instead, or remove console statements in production code.

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint on all files |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run lint:next` | Run Next.js built-in lint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run check` | Run lint + type-check |

