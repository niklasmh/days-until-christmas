/**
 * This is the commonjs version of the package which makes it
 * possible to import it through the require function:
 *
 * ```javascript
 * const daysUntilChristmas = require('days-until-christmas');
 * ```
 */

function daysUntilChristmas() {
  const timeInADay = 24 * 60 * 60 * 1000;
  const now = new Date();
  const thisYear = now.getFullYear();
  let dateOfChristmas = new Date(thisYear, 11, 24).getTime();
  if (dateOfChristmas < now - timeInADay) {
    dateOfChristmas = new Date(thisYear + 1, 11, 24).getTime();
  }
  return Math.abs(Math.ceil((dateOfChristmas - now) / timeInADay));
}

module.exports = daysUntilChristmas;
