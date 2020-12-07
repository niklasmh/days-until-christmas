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

There are three ways to include this package:

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
