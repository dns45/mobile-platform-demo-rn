# Mobile Platform Demo React Native

Demo React Native mobile project for testing purposes developed by Mobile Platform team.

## Prerequisites

- Xcode 14.0 (Swift 5.7)
- Homebrew -> [how to install](https://brew.sh)
- rbenv -> [how to install](https://github.com/rbenv/rbenv)
- Ruby 3.1.2 (installed via `rbenv install 3.1.2`)
- NVM -> [how to install](https://github.com/nvm-sh/nvm)
- Node v16.17.0 (installed via `nvm install 16.17.0`)
- Yarn (it's a part of Node, run this to enable it: `corepack enable`)
- Watchman (installed via `brew install watchman`)

## Setup

- Run `bundle` to install Gem dependencies
- Run `yarn` to install NPM dependencies
- Run `yarn pod` to install Cocoapods dependencies

## Build

To compile TypeScript code run:

`yarn build`

## Static analysis

To lint project run:

`yarn lint` (shows linter warnings/errors)

or

`yarn lintfix` (shows linter warnings/errors, tries also to automatically fix issues)

## Testing

To run Jest unit tests use this command:

`yarn test`

## Running the app

### iOS

You have 2 options to run the iOS app locally in simulator:

`yarn ios`

or

- open `ios/ccPackagingVerificationApp.xcworkspace`
- build and run the app from Xcode

### Android

🚧 TBD 🚧
