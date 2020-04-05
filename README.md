# UsCovid

WIP interactive chart of US COVID-19 data

Running here https://ali-raheem.github.io/US-COVID-19/, doesn't work very well.

## Running

1. Click `Load`.
2. Click states to toggle them in and out.
2. Click `Reset` to clear.

## Todo

* Switch to scatter
* Calculate new cases (diff)
* Logarithmic axis

## Building

### Dependencies
* Angular
* Charts.js
* ng2-charts
* Bootstrap

### Locally
```
ng serve
```

### The github pages version
```
ng build --prod --base-href "https://ali-raheem.github.io/US-COVID-19/"
```

## Data source

* The New York Times - https://github.com/nytimes/covid-19-data - https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html