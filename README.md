# colorifyjs [![ci status](https://travis-ci.org/QuantumPhi/colorifyjs.svg?branch=master)](https://travis-ci.org/QuantumPhi/colorifyjs) [![dependency status](https://david-dm.org/QuantumPhi/colorifyjs.png)](https://david-dm.org/QuantumPhi/colorifyjs#info=dependencies) [![devDependency status](https://david-dm.org/QuantumPhi/colorifyjs/dev-status.png)](https://david-dm.org/QuantumPhi/colorifyjs#info=devDependencies)

`npm` package for fetching Github language colors.

### Installation
```
npm install colorifyjs
```

### Usage
```
var colorify = require('colorifyjs')
colorify(function(colors) {
    /*
     * Logic with colors array -> e.g.:
     * console.log(colors['Javascript'])
     */
})
```
