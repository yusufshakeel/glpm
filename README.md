# glpm (gitlab-pipelines-monitor)

This project will monitor the pipelines of your GitLab projects.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/glpm)
[![npm version](https://img.shields.io/badge/npm-0.3.1-blue.svg)](https://www.npmjs.com/package/glpm)
[![npm Downloads](https://img.shields.io/npm/dm/glpm.svg)](https://www.npmjs.com/package/glpm)

![Image](./assets/screenshot.png?v=1)

![Image](./assets/monitor.png?v=1)

## Table of Contents

- [glpm (gitlab-pipelines-monitor)](#glpm-gitlab-pipelines-monitor)
  - [Table of Contents](#table-of-contents)
  - [Prerequisite](#prerequisite)
  - [Getting started](#getting-started)
  - [Run](#run)
  - [Initialise](#initialise)
  - [Check status](#check-status)
  - [Help](#help)
  - [Server](#server)
  - [License](#license)
  - [Donate](#donate)

## Prerequisite

- Node (v14 or higher)

## Getting started

Install the package globally.

```shell
npm i -g glpm
```

## Run

```shell
glpm
```

## Initialise

```shell
glpm init
```

## Check status

```shell
glpm status
```

Run in watch mode.

```shell
glpm status -watch -interval=10000
```

## Help

```shell
glpm --help
```

## Server

```shell
glpm server
```

This will run the localhost server. https://localhost:9000

Set the HTTP_PORT environment to run the localhost server on different port.

```shell
export HTTP_PORT=10000
```

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/glpm/blob/main/LICENSE) Copyright (c) 2024 Yusuf Shakeel

## Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)
