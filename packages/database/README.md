# @my-app/db

This is the database of my monorepo app.

## Commands

We first run migrations and then run generate to create the types of that migrations.

1. Migrate `prisma.schema` and generate types.

```bash
npx turbo db:migrate
```

2. Generate `prisma.schema`.

```bash
npx turbo db:generate
```
