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
```
<uxl-progress-indicator type="spinner"></uxl-progress-indicator>
```
- Progress bar:
```
<uxl-progress-indicator type="progress"></uxl-progress-indicator>
```

### Properties

The following properties are available for this component:

1. **type**: *String* `Specifies the spinner type`

    Possible values: `"spinner", "progress"`

    Default value: `"spinner"`
2. **text**: *String* `Specifies the message of spinner `

    Default value: `undefined`
4. **active**: *Boolean* `Specifies whether the spinner is displayed or not `

    Possible values: `"true" or "false"`

    Default value: `"false"`
5. **position**: *String* `Specifies the position between the spinner and the message `

    Possible values: `"vertical", "horizontal", "vertical-reverse", "horizontal-reverse"`

    Default value: `"vertical"`
5. **fit**: *Boolean* `Specifies whether the spiner's position is centered fixed in the screen or not `

    Possible values: `"true" or "false"`

    Default value: `"false"`

### Customize message

You can customize the title using **"text"** property
```
<uxl-progress-indicator type="spinner" 
                    text="Loading spinner">
</uxl-progress-indicator>
```

### Display (active mode)
You can control displaying spinner by the **"active"** property. If it's *true*, spinner will appear on screen. By default, i'ts *false*.
```
<uxl-progress-indicator active></uxl-progress-indicator>
```

### Position
You can custom distribution of spinner by **"position"** property. You have 4 options:
#####Default (that setups in vertical): 
```
<uxl-progress-indicator></uxl-progress-indicator>
```
#####*"horizontal"* (that setups in horizontal position): 
```
<uxl-progress-indicator position="horizontal"></uxl-progress-indicator>
```
#####*"vertical-reverse"* (that setups in vertical reverse elements position): 
```
<uxl-progress-indicator position="vertical-reverse"></uxl-progress-indicator>
```
#####*"horizontal-reverse"* (that setups in horizontal reverse elements position): 
```
<uxl-progress-indicator position="horizontal-reverse"></uxl-progress-indicator>
```

###Fit
You can set the distribution of spinner in the screen by **"fit"** property. You have 2 options:
#####"Default" (that setups fit = false): 
```
<uxl-progress-indicator></uxl-progress-indicatorr>
```
#####*"Fit"* (that setups fit = true and place spinner centered fixed in the screen): 
```
<uxl-progress-indicator fit></uxl-progress-indicator>
```

###Custom CSS properties

`<uxl-progress-indicator>` provides the following custom properties for styling:

| Custom property        | Description           | Default  |
| ------------- |:-------------:| -----:|
|  --uxl-progress-indicator-width | spinner width | 8vh |
|  --uxl-progress-indicator-heigth      | spinner height      |   8vh |
|  --uxl-progress-indicator-stroke| spinner stroke     |    2px |
|  --uxl-progress-indicator-color| Color of the spinner/progress-bar     |    #009688 |
|  --uxl-progress-indicator-background-color | background color      |    white |
|  --uxl-progress-indicator-title-color | message color      |   #424242 |
|  --uxl-progress-indicator-title-size | message size      |    1rem |
|  --uxl-progress-indicator-title | Mixin applied to the title       |    {} |


###Mixins

`<uxl-progress-indicator>` provides the following mixins for styling:

    @apply(--uxl-progress-indicator-title)

|  Property    | Value  |
|:-------------:|: -----:|
|  font-family | 'Roboto', 'Noto', sans-serif|
|  font-size | 1rem|
|  font-weight | normal|
|  line-height | normal|
|  text-transform | none|
|  color | #424242|

###Slot mode
`<uxl-progress-indicator>` The standar form to use this component, is place the html that wants to hide when spinner is active, inside the tag

    <uxl-progress-indicator active=${isFetching}>
        <div id ="my-div"></div>
    </uxl-progress-indicator>
    
Because of our components has got a **slot**, when active property it's *true* the component hides content and display a spinner until active became **false**:

###Demo

You can see the demos: 

url: `localhost/components/uxl-progress-indicator/demo/index.html`

###Use Examples

#####Default
      <uxl-progress-indicator></uxl-progress-indicator>
#####Spinner horizontal not active     
      <uxl-progress-indicator type="spinner"
                          title="Cargando con Spinner vertical"                         
                          position="horizontal">
      </uxl-progress-indicator>
#####Spinner-lite horizontal-reverse active and placed in middle fixed of screen    
      <uxl-progress-indicator type="spinner"
                          title="Cargando con Spinner-lite horizontal"                         
                          position="horizontal-reverse"
                          active
                          fit>
      </uxl-progress-indicator>
#####Spinner default without title and vertical-reverse position     
      <uxl-progress-indicator                         
                          position="vertical-reverse"
                          active>
      </uxl-progress-indicator>
      
#####Progress bar without title and vertical-reverse position     
      <uxl-progress-indicator type="progress"                                                  
                          position="vertical-reverse"
                          active>
      </uxl-progress-indicator>
#####Spinner-lite with slot 
      <uxl-progress-indicator type="spinner"
                          title="Cargando con Spinner-lite horizontal"                         
                          position="vertical"
                          active>
        <div>HELLO WORLD></div>
      </uxl-progress-indicator>
               




