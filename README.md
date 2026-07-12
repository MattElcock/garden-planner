# Garden Planner

Garden Planner is a React Native app built with Expo and Expo Router. It uses Expo SQLite with Drizzle ORM for local data storage.

## Tech Stack

- React Native + Expo
- Expo Router
- TypeScript
- Expo SQLite
- Drizzle ORM
- Drizzle Kit for schema migrations
- ESLint + Prettier

## Project Structure

```text
src/
├── app/                  # Expo Router screens and layouts
├── components/           # Reusable UI components
├── db/                   # Database client, schema, and migration wiring
├── design-system/        # Shared design system primitives
├── hooks/                # Custom hooks for data access and mutations
└── global.css            # Global app styles

drizzle/
├── meta/                 # Drizzle migration metadata
└── migrations.js         # Expo-compatible migration bundle
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- Android Studio / emulator, or a physical Android device
- Optional: Xcode and an iOS simulator for iOS development

### Install dependencies

```bash
git clone <your-repo-url>
cd garden-planner
npm install
```

### Run the app

Start the Expo development server:

```bash
npm start
```

Then choose one of the following:

```bash
npm run android
```

```bash
npm run ios
```

```bash
npm run web
```

You can also press `a`, `i`, or `w` in the Expo CLI after the dev server starts.

## Database and Migrations

The app uses Drizzle ORM with Expo SQLite. The schema lives in [src/db/schema.ts](src/db/schema.ts), and the Expo-compatible migration bundle is generated into [drizzle/migrations.js](drizzle/migrations.js).

Drizzle Kit generates SQL migration files for history and tooling, but the app consumes the Expo-ready bundle in [drizzle/migrations.js](drizzle/migrations.js) at runtime. The SQL files are not required by the app itself unless you want to inspect or keep a human-readable migration history.

### Create a new migration

When you change the database schema:

1. Update the schema in [src/db/schema.ts](src/db/schema.ts)
2. Generate a new migration:

```bash
npx drizzle-kit generate
```

3. Review the generated files in [drizzle](drizzle)
4. Restart the Expo app so the new migration bundle is picked up

### Useful development commands

```bash
npm run lint
npx prettier --write .
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checks
4. Open a pull request with a clear summary of the changes

## License

This project is licensed under the MIT License.
