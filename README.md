# covid19-us-wa

[![NPM](https://nodei.co/npm/covid19-us.png)](https://nodei.co/npm/covid19-us-wa/)

## What is covid19-us-wa?

"covid19-us-wa" is a library that retrieves current published COVID-19 data from 
the Washington State Department of Health website. Data is starting March 11, 2020. Data source is updated
daily by WADOH and history is incorporated within few hours of the published report. 

Data is retrieved daily from https://www.doh.wa.gov/emergencies/coronavirus

Historic visualization of the dataset is on the projects page: https://winfinit.github.io/covid19-us-wa/

## Methods

#### getCurrentData()

Returns latest data from the states site

#### getHistoryData()

Returns historic data, including latest update.

#### getShortHistoryData()

Returns abbreviated historic data by removing county key.

## Usage

### Node.js

```javascript
let Covid19USWA = require("covid19-us-wa").Covid19USWA;

let covid19USWA = new Covid19USWA();
covid19USWA.getCurrentData().then(data => {
    console.log("data", data);
    /*
        Sample output: 
            {
                "county":{
                    "Clark":{
                        "positive":1,
                        "deaths":0
                    },
                    "Grant":{
                        "positive":1,
                        "deaths":1
                    }
                },
                "total":{
                    "positive":366,
                    "deaths":29,
                    "new_positive":33,
                    "new_deaths":1
                },
                "total_tests":{
                    "positive":366,
                    "negative":3037,
                    "new_positive":11,
                    "new_negative":44
                },
                "last_updated":"2020-03-23T07:00:00.000Z"
            }
    */
});

covid19USWA.getHistoryData().then(data => {
    console.log("data", data);
    /* 
        Sample output:
            {
                "03/11/2020":{
                    "county":{
                        "Clark":{
                            "positive":1,
                            "deaths":0
                        },
                        "Grant":{
                            "positive":1,
                            "deaths":0
                        }
                    },
                    "total":{
                        "positive":366,
                        "deaths":29,
                        "new_positive":33,
                        "new_deaths":1
                    },
                    "total_tests":{
                        "positive":366,
                        "negative":3037,
                        "new_positive":11,
                        "new_negative":44
                    },
                    "last_updated":"2020-03-23T07:00:00.000Z"
                }
            }
    */
});

covid19USWA.getShortHistoryData().then(data => {
    console.log("data", data);
    /* 
        Sample output:
    {
        "2020-03-23": {
            "total": {
                "positive": 2221,
                "deaths": 110,
                "new_deaths": 15,
                "new_positive": 225
            },
            "total_tests": {
                "negative": 31712,
                "positive": 2221,
                "new_positive": 225,
                "new_negative": 2833
            }
        }
    }
    */
});
```

### TypeScript

```typescript
import {
    Covid19USWA,
    ICovid19USWACurrent,
    ICovid19USWAHistory,
    ICovid19USWAShortHistory
} from 'covid19-us';

let covid19USWA = new Covid19USWA();
covid19USWA.getCurrentData().then((data: ICovid19USWACurrent) => {
    console.log(data);
}); 

covid19USWA.getHistoryData().then((data: ICovid19USWAHistory) => {
    console.log(data);
}); 

covid19USWA.getShortHistoryData().then((data: ICovid19USWAShortHistory) => {
    console.log(data);
}); 
```
