# React Native project using Expo Router, Native Wind and gluestack-ui

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/mrlinnth/expo-gluestack-template)

## Comes with

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev)
- [gluestack-ui](https://gluestack.io/)
- [NativeWind](https://www.nativewind.dev/)

Created using [Create Expo Stack](https://rn.new/)

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```text
/
├── app/
│   ├── (drawer)/
│   │   └── _layout_.tsx
│   │   └── index.tsx
│   ├── _layout.tsx
│   └── +html.tsx
│   └── +not-found.tsx
├── assets/
├── components/
│   ├── ui/
│   │   └── box/
│   │   └── button/
│   ├── ScreenContent.tsx
└── app.json
└── gluestack-ui.config.json
└── tailwind.config.json
└── package.json
```

All the screens are inside `app` folder. Default entry point is the `app/_layout.tsx`. Assets will have media and asset files. Components has gluestack-ui components inside `components/ui` folder. All other components are in `components/` folder.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                                            |
| :---------------- | :-------------------------------------------------------------------------------- |
| `yarn install`    | Installs dependencies                                                             |
| `yarn go`         | Starts local expo server. Scan the QR using mobile phone to test with Expo GO app |
| `yarn build:dev`  | Build your development release                                                    |
| `yarn build:prod` | Build your production release                                                     |
