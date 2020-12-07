/**
 * This is the ES module version of the package which makes it
 * possible to import it through ES import statements:
 *
 * ```javascript
 * import daysUntilChristmas from 'days-until-christmas';
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

export default daysUntilChristmas;
