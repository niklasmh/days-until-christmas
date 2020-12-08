# Days Until Christmas

This package keeps track of days until the 24th of December.

Try it out [here](https://codepen.io/niklasmh/pen/wvzWqgO)!

## Install

```bash
npm i --save days-until-christmas
# OR
yarn add days-until-christmas
```

## Usage

There are four ways to use this package:

### Through the command-line

```bash
npx days-until-christmas # Can be used without installation
# OR
days-until-christmas # Requires a global installation of the package
# E.g: `npm i -g days-until-christmas` OR `yarn add global days-until-christmas`
```

### In Node.js

```javascript
const daysUntilChristmas = require("days-until-christmas");

console.log(daysUntilChristmas());
```

### In a [create-react-app](https://github.com/facebook/create-react-app)

```javascript
import daysUntilChristmas from "days-until-christmas";

console.log(daysUntilChristmas());
```

### In any browser

```html
<script type="module">
  import daysUntilChristmas from "https://cdn.jsdelivr.net/npm/days-until-christmas@latest/index.mjs";

  console.log(daysUntilChristmas());
</script>
```
