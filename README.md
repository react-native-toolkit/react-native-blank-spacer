<div align="center">

# React Native Blank Spacer 📦↔️📦

Free your components from margins using the blank spacer!

<!-- [![Build Status][build-badge]][build]
[![Maintainability][maintainability-badge]][maintainability-url]
[![Test Coverage][coverage-badge]][coverage-url] -->

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

---

### Compatible with Expo & React Native Web 🚀

### PRs Welcome 👍✨

</div>

- 💡 [Why use blank spacer?](#why-use-blank-spacer)
- 📦 [Installation](#installation)
- ℹ️ [Usage](#usage)
- 📕 [Recipes](#recipes)

## Why use blank spacer

A good component should be usable in any layout & context. This means the component should not influence anything outside of it's own children.

Margins however break this rule by defining how much space another component should distance itself from your component. This has made many components difficult to use in certain layouts and also made maintaining the design system very difficult in the long run for my personal projects.

[Max Stoiber](https://mxstbr.com/thoughts/margin) has written a nice blog post on why we shouldn't use margins and move to spacers.

React Native Blank Spacer is component which can be used to apply blank spaces between components effectively removing the need to apply margins in general 🎉

## Installation

```sh
#npm
npm install --save react-native-blank-spacer

#yarn
yarn add react-native-blank-spacer
```

## Usage

```jsx
import BlankSpacer from "react-native-blank-spacer";

const App = () => (
  <View>
    <Text>Hello!</Text>
    <BlankSpacer height={16} />
    <Text>Nice to Meet you!</Text>
  <View>
);

export default App;
```

## Recipes

<!-- [build]: https://github.com/DaniAkash/react-native-blank-spacer/actions
[build-badge]: https://github.com/daniakash/react-native-blank-spacer/workflows/build/badge.svg
[coverage-badge]: https://api.codeclimate.com/v1/badges/0cf535fb8d3da2aa4a91/test_coverage
[coverage-url]: https://codeclimate.com/github/DaniAkash/react-native-blank-spacer/test_coverage
[maintainability-badge]: https://api.codeclimate.com/v1/badges/0cf535fb8d3da2aa4a91/maintainability
[maintainability-url]: https://codeclimate.com/github/DaniAkash/react-native-blank-spacer/maintainability -->

[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/react-native-blank-spacer
[bundle-phobia]: https://bundlephobia.com/result?p=react-native-blank-spacer
[downloads-badge]: https://img.shields.io/npm/dm/react-native-blank-spacer.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-native-blank-spacer
[package]: https://www.npmjs.com/package/react-native-blank-spacer
[version-badge]: https://img.shields.io/npm/v/react-native-blank-spacer.svg?style=flat-square
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/DaniAkash/react-native-blank-spacer.svg?style=social
[github-watch]: https://github.com/DaniAkash/react-native-blank-spacer/watchers
[github-star-badge]: https://img.shields.io/github/stars/DaniAkash/react-native-blank-spacer.svg?style=social
[github-star]: https://github.com/DaniAkash/react-native-blank-spacer/stargazers
