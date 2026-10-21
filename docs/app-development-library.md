# App Development Library

Updated 2026-10-20. Public GitHub identities verified. Reference catalog only, not installation or license/security approval.

## Recommended stacks

- GamePilot S24: Kotlin and Jetpack Compose; add tests and benchmark ONNX Runtime, MediaPipe and LiteRT for on-device AI.
- Future consumer mobile apps: React Native with Expo, navigation, Reanimated and selected backend.
- Flutter: alternative for customized cross-platform UI.
- Desktop engineering applications: Tauri; Electron alternative.
- Web-first apps packaged for phones: Capacitor, where device requirements allow.

## Frameworks

| Repository | Role |
|---|---|
| [flutter/flutter](https://github.com/flutter/flutter) | Flutter cross-platform |
| [facebook/react-native](https://github.com/facebook/react-native) | React Native |
| [expo/expo](https://github.com/expo/expo) | React Native app tooling |
| [ionic-team/capacitor](https://github.com/ionic-team/capacitor) | Web-to-mobile |
| [JetBrains/compose-multiplatform](https://github.com/JetBrains/compose-multiplatform) | Kotlin shared UI |
| [JetBrains/kotlin](https://github.com/JetBrains/kotlin) | Android Kotlin |
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | Desktop/mobile Rust web shell |
| [electron/electron](https://github.com/electron/electron) | Desktop app alternative |
| [dotnet/maui](https://github.com/dotnet/maui) | .NET cross-platform |
| [NativeScript/NativeScript](https://github.com/NativeScript/NativeScript) | NativeScript alternative |

## Android architecture

| Repository | Role |
|---|---|
| [android/nowinandroid](https://github.com/android/nowinandroid) | Modern Android reference |
| [android/architecture-samples](https://github.com/android/architecture-samples) | Android architecture |
| [android/compose-samples](https://github.com/android/compose-samples) | Compose UI |
| [android/camera-samples](https://github.com/android/camera-samples) | Camera examples |
| [android/health-samples](https://github.com/android/health-samples) | Health integrations |
| [googlemaps/android-maps-compose](https://github.com/googlemaps/android-maps-compose) | Maps |
| [google/accompanist](https://github.com/google/accompanist) | Compose helpers |
| [google/oboe](https://github.com/google/oboe) | Audio |
| [google/filament](https://github.com/google/filament) | 3D rendering |
| [Kotlin/kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines) | Concurrency |
| [Kotlin/kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization) | Serialization |
| [ktorio/ktor](https://github.com/ktorio/ktor) | Networking |
| [google/gson](https://github.com/google/gson) | JSON alternative |

## React Native components

| Repository | Role |
|---|---|
| [react-navigation/react-navigation](https://github.com/react-navigation/react-navigation) | Navigation |
| [software-mansion/react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) | Animation |
| [callstack/react-native-paper](https://github.com/callstack/react-native-paper) | UI components |
| [shopify/flash-list](https://github.com/shopify/flash-list) | High performance lists |
| [TanStack/router](https://github.com/TanStack/router) | Web routing alternative |
| [reduxjs/redux-toolkit](https://github.com/reduxjs/redux-toolkit) | App state |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | Lightweight state |
| [invertase/react-native-firebase](https://github.com/invertase/react-native-firebase) | Firebase RN |
| [firebase/firebase-android-sdk](https://github.com/firebase/firebase-android-sdk) | Firebase Android |
| [supabase/supabase-flutter](https://github.com/supabase/supabase-flutter) | Supabase Flutter |

## Testing and release

| Repository | Role |
|---|---|
| [flutter/samples](https://github.com/flutter/samples) | Flutter examples |
| [fastlane/fastlane](https://github.com/fastlane/fastlane) | Release automation |
| [mobile-dev-inc/Maestro](https://github.com/mobile-dev-inc/Maestro) | Mobile UI tests |
| [wix/Detox](https://github.com/wix/Detox) | RN E2E tests |
| [appium/appium](https://github.com/appium/appium) | Device automation |
| [cashapp/paparazzi](https://github.com/cashapp/paparazzi) | Android screenshot tests |
| [robolectric/robolectric](https://github.com/robolectric/robolectric) | Android JVM tests |
| [square/leakcanary](https://github.com/square/leakcanary) | Android memory leak checks |
| [getsentry/sentry-react-native](https://github.com/getsentry/sentry-react-native) | RN monitoring |

## AI

| Repository | Role |
|---|---|
| [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) | Model inference |
| [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | Vision pipelines |
| [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT) | Mobile model inference |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | Python agents for backend |

## Safety and deployment

Choose one main framework per app. Before adoption verify licenses, maintenance, vulnerabilities and compatibility. Keep GitHub secrets private; require reviewed PRs, reproducible builds, unit and UI tests, accessibility, memory and battery profiling. Test mobile AI on real target devices. Do not change live GamePilot or other projects until a separate scoped implementation is approved.

## Pilot sequence

1. Add Maestro, Robolectric and LeakCanary to a disposable GamePilot branch.
2. Benchmark ONNX Runtime against MediaPipe/LiteRT on device.
3. Create a reusable Expo starter for new apps.
4. Prototype a Tauri engineering desktop utility.

This complements the other catalogs under docs/ and does not replace them.
