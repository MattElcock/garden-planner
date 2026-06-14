# Garden Planner

A React Native mobile application built with Expo for planning and managing your garden.

## 📋 Requirements

- Node.js (v18 or higher)
- npm (v9 or higher)
- Android SDK and Android emulator, or physical Android device
- Optional: Xcode and iOS simulator for iOS development

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:MattElcock/garden-planner.git
   cd garden-planner
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

Start the Expo development server:

```bash
npm start
```

#### Android

To run on Android emulator:

```bash
npm run android
```

Or press `a` in the Expo CLI after running `npm start`.

#### iOS

To run on iOS simulator (macOS only):

```bash
npm run ios
```

Or press `i` in the Expo CLI after running `npm start`.

#### Web

To run on web:

```bash
npm run web
```

## 🏗️ Project Structure

```
src/
├── app/                 # Expo Router pages and navigation
├── components/          # Reusable React components
├── screens/             # Screen components
├── data/                # Data models and constants
├── storage/             # Local storage utilities
├── constants/           # App-wide constants
├── hooks/               # Custom React hooks
└── assets/              # Images and other static files
```

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Routing**: Expo Router
- **Navigation**: React Navigation Stack Navigator
- **Language**: TypeScript
- **Gesture Handling**: React Native Gesture Handler
- **Code Quality**: ESLint & Prettier

## 📝 Code Quality

### Linting

Run ESLint to check for code style issues:

```bash
npm run lint
```

### Formatting

The project uses Prettier for automatic code formatting. Your IDE should format files on save if configured.

To manually format all files:

```bash
npx prettier --write .
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [React Navigation Documentation](https://reactnavigation.org/)

## 📄 License

This project is licensed under the MIT License.
