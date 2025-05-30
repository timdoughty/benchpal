# BenchPal

This is an Expo project bootstrapped with `create-expo-app`.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Start the development server:**
    ```bash
    npx expo start
    ```
    This will open Expo Go on your mobile device or an emulator. You can also open the project in a web browser.

## Key Dependencies Installed

This project includes the following key libraries and tools:

*   **UI & Styling:**
    *   `nativewind`: Utility-first styling for React Native.
    *   `tailwindcss`: (Peer dependency for NativeWind)
    *   `react-native-gesture-handler`: Declarative API for handling touch and gestures.
    *   `react-native-reanimated`: Library for creating smooth animations and interactions.
    *   `expo-splash-screen`: Control the native splash screen.
    *   `expo-font`: Load and use custom fonts.
    *   `expo-haptics`: Provide haptic feedback.

*   **Navigation:**
    *   `expo-router`: File-system based routing for Expo and React Native apps.

*   **State Management:**
    *   `@tanstack/react-query`: Data fetching and state synchronization.
    *   `zustand`: Small, fast, and scalable bearbones state-management solution.

*   **Storage:**
    *   `expo-secure-store`: Encrypted storage for sensitive data.
    *   `@react-native-async-storage/async-storage`: Asynchronous, unencrypted, persistent key-value storage.

*   **Expo SDK & Tools:**
    *   `expo`: The Expo SDK.
    *   `expo-updates`: Over-the-air updates for your app.
    *   `eas-cli`: Command-line interface for Expo Application Services (EAS).
    *   `expo-dev-client`: Create development builds of your app.
    *   `expo-notifications`: Send and receive push notifications.
    *   `expo-localization`: Access device locale information.
    *   `expo-application`: Get application-specific information.

## Available Scripts

In the project directory, you can run:

*   `npx expo start`: Runs the app in development mode.
*   `npx expo android`: Opens the app on a connected Android device or emulator.
*   `npx expo ios`: Opens the app on an iOS simulator (macOS only).
*   `npx expo web`: Runs the app in a web browser.
*   `npx eas build -p [android|ios|all]`: Builds your app for submission to app stores using EAS Build.
*   `npx eas submit -p [android|ios]`: Submits your app to the respective app store using EAS Submit.

## Learn More

*   [Expo Documentation](https://docs.expo.dev/)
*   [React Native Documentation](https://reactnative.dev/docs)
*   [NativeWind Documentation](https://www.nativewind.dev/)
*   [Expo Router Documentation](https://expo.github.io/router/)
*   [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
