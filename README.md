# My App Monorepo

This is a monorepo using Turborepo to manage multiple packages and applications in a single repository. The project is configured with development best practices and modern tools.

## 🚀 Core Technologies

- Node.js (>=18)
- Turborepo
- TypeScript
- ESLint
- Prettier
- Husky
- Commitlint

## 📦 Project Structure

```
my-app-monorepo/
├── apps/          # Project applications
├── packages/      # Shared packages
│   ├── config-eslint/     # Shared ESLint configuration
│   ├── config-typescript/ # Shared TypeScript configuration
│   └── database/         # Database configuration and utilities
├── .husky/        # Git hooks configuration
└── ...config files
```

## 📚 Packages

### Configuration Packages

- **config-eslint**: Shared ESLint configuration to maintain code style consistency.
- **config-typescript**: Base TypeScript configuration for all projects.
- **database**: Database configuration and management utilities.

## 🛠️ Available Scripts

- `npm run db:migrate:deploy` - Run database migrations
- `npm run db:migrate:dev` - Run migrations in development mode
- `npm run db:push` - Update database schema
- `npm run db:seed` - Seed the database with initial data

## 🔧 Environment Setup

1. Ensure you have Node.js >=18 installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure necessary environment variables

## 🎯 Code Conventions

- ESLint and Prettier are used to maintain consistent code style
- Commits follow the conventional format (Conventional Commits)
- Git hooks with Husky are used to ensure code quality

## 📝 License

This project is private and confidential.
