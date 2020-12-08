#!/usr/bin/env node

/**
 * This is the CLI version of the package which makes it
 * possible to get days-until-christmas from the command line:
 *
 * ```bash
 * $ days-until-christmas
 * > 16
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

console.log(daysUntilChristmas());
