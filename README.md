# \<uxl-progress-indicator\>

A progress indicator component

[![Build Status](https://travis-ci.org/uxland/uxl-porgress-indicator.svg?branch=master)](https://travis-ci.org/uxland/uxl-progress-indicator)
[![npm version](https://badge.fury.io/js/%40uxland%2Fuxl-progress-indicator.svg)](https://badge.fury.io/js/%40uxland%2Fuxl-progress-indicator)

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

### Description

`<uxl-progress-indicator>` is a component that provides two types of material design based progress indicators with optional message:

- Circular spinner:
- Bouncing balls:

### Options

If you want to personalize, you can use options. These options are typed as UxlProgressIndicatorOptions

1. **type**: _String_ `Specifies the spinner type`

   Possible values: `"spinner", "bouncing"`

   Default value: `"spinner"`

2. **text**: _String_ `Specifies the message of spinner`

   Default value: `undefined`

3. **position**: _String_ `Specifies the position between the spinner and the message`

   Possible values: `"vertical", "horizontal", "vertical-reverse", "horizontal-reverse"`

   Default value: `"vertical"`

4. **fit**: _Boolean_ `Specifies whether the spiner's position is centered fixed in the screen or not`

   Possible values: `"true" or "false"`

   Default value: `"false"`

###Custom CSS properties

`<uxl-progress-indicator>` provides the following custom properties for styling:

| Custom property                               |       Description       |             Default |
| --------------------------------------------- | :---------------------: | ------------------: |
| --uxl-progress-indicator-spinner-width:       |      spinner width      |                30px |
| --uxl-progress-indicator-spinner-height:      |     spinner height      |                30px |
| --uxl-progress-indicator-spinner-stroke       |     spinner stroke      |                 3px |
| --uxl-progress-indicator-color                |  Color of the spinner   |             #009688 |
| --uxl-progress-indicator-background-color     |    background color     |         transparent |
| --uxl-progress-indicator-bouncing-ball-width  |  bouncing balls width   |                10px |
| --uxl-progress-indicator-bouncing-ball-height |  bouncing balls width   |                10px |
| --uxl-progress-indicator-title-color          | font color for message  | rgba(0, 0, 0, 0.87) |
| --uxl-progress-indicator-title-size           |  font size for message  |                1rem |
| --uxl-progress-indicator-title-weight         | font weight for message |               light |

###Demo

You can see the demos:

url: `localhost/components/uxl-progress-indicator/demo/index.html`
