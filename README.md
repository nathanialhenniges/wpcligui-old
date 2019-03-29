# [WP CLI Gui](https://github.com/nathanhenniges/wpcligui)

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nathanhenniges/wpcligui/master/LICENSE)
[![dependencies Status](https://david-dm.org/nathanhenniges/wpcligui/status.svg)](https://david-dm.org/nathanhenniges/wpcligui)
[![devDependencies Status](https://david-dm.org/nathanhenniges/wpcligui/dev-status.svg)](https://david-dm.org/nathanhenniges/wpcligui?type=dev)

## Description

## Download and Installation

To begin using this template, choose one of the following options to get started:
* Clone the repo: `git clone https://github.com/nathanhenniges/wpcligui.git`
* [Fork, Clone, or Download on GitHub](https://github.com/nathanhenniges/wpcligui)

### Basic Usage
#### Edit the .env.example with basic config
```sh
cp .env.example .env
```
```sh
nano .env
```
#### Install node packages
```sh
npm install
```

#### Start bot
```sh
npm start
```

If you want to start everything at once you can do

You will need PM2 installed to use the 2nd command.
```sh
npm install -g pm2
```
```sh
pm2 start process.yml
```
### Want help develop the?
You can use this command to start up with nodemon so you can work on it and test.

```sh
npm run dev-web
```

### Issues
Have a bug or an issue with this bot? [Open a new issue](https://github.com/nathanhenniges/wpcligui/issues) here on GitHub.

## Copyright and License

Copyright 2019 Nathan Henniges. Code released under the [MIT](https://github.com/nathanhenniges/wpcligui/blob/master/LICENSE) license.
