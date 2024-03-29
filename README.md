# Automatic Bus Routing System

This project is a React Native application designed to optimize bus routes and schedules using automatic routing algorithms. It aims to provide efficient public transportation solutions by dynamically adjusting to traffic conditions, passenger demands, and other factors.

## Table of Contents

1. [Introduction](#introduction)
1. [Features](#features)
1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
1. [Usage](#usage)
1. [Troubleshoot](#troubleshoot)

## Introduction

[Provide a brief introduction about the automatic bus routing system, its objectives, and how it uses React Native for its implementation.]

## Features

- Dynamic routing based on real-time data
- User-friendly interface for route planning
- Integration with local traffic updates
- [More Features...]

## Getting Started

### Prerequisites

- [Expo Go app](https://expo.dev/client) (for testing on mobile devices)
- Ventura with Xcode 15.2 with command line tools (download from the App Store)
- [Homebrew](https://brew.sh/)
- [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/) (for iOS builds)
- [detox](https://wix.github.io/Detox/docs/introduction/environment-setup) (for e2e testing)

### Installation

#### Clone the repo

```sh
git clone https://github.com/maferelo/solaris-client
```

#### [Install NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (Node Version Manager)

#### Install Node.js

```sh
nvm install
```

#### Install Node Modules

```sh
npm install
```

## Usage

### Run the Application

```sh
npm run start
```

### Build the Application

```sh
npm run build
```

### Run e2e Tests

```sh
npm run start
npm run test
```

### Run the Docs

```sh
npm run docs
```

### [Best Practices](docs/best-practices.md)

### [Manage Dependencies](docs/managing-dependencies.md)

## Troubleshoot

### Check for Issues

```sh
npx expo-doctor
```

### Kill a Process Running on a Specific Port

```sh
PORT_NUMBER=8081
lsof -i tcp:${PORT_NUMBER} | \
  awk 'NR!=1 {print $2}' | \
  xargs kill
```
