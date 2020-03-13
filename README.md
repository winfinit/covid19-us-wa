# covid19-us-wa

[![NPM](https://nodei.co/npm/covid19-us.png)](https://nodei.co/npm/covid19-us-wa/)

## What is covid19-us-wa?

"covid19-us-wa" is a library that retrieves current published COVID-19 data from 
the Washington State Department of Health website. Data is starting March 11, 2020. Data is not updated daily but history will be blank if no update is provided on that particular date.

## Usage

### Node.js

```javascript
let Covid19USWA = require("covid19-us-wa").Covid19USWA;

let covid19USWA = new Covid19USWA();
covid19USWA.getCurrentData().then(data => {
    console.log("data", data);
    /*
        Sample output: 
        { county:
            { Clark: { positive: 1, deaths: 0 },
                Grant: { positive: 1, deaths: 1 },
                Island: { positive: 1, deaths: 0 },
                Jefferson: { positive: 1, deaths: 0 },
                King: { positive: 236, deaths: 26 },
                Kitsap: { positive: 2, deaths: 0 },
                Kittitas: { positive: 2, deaths: 0 },
                Pierce: { positive: 17, deaths: 0 },
                Skagit: { positive: 1, deaths: 0 },
                Snohomish: { positive: 68, deaths: 2 },
                Thurston: { positive: 1, deaths: 0 },
                Whatcom: { positive: 1, deaths: 0 },
                Unassigned: { positive: 36, deaths: 0 } },
            total: { positive: 366, deaths: 29 },
            total_tests: { positive: 366, negative: 3037 },
            last_updated: '03/11/2020 2:25PM PDT' 
        }
    */
});

covid19USWA.getHistoryData().then(data => {
    console.log("data", data);
    /* 
        Sample output:
        { '03/11/2020':
            { county:
                { Clark: { positive: 1, deaths: 0 },
                    Grant: [{ positive: 1, deaths: 0 },
                    Island: { positive: 1, deaths: 0 },
                    Jefferson: { positive: 1, deaths: 0 },
                    King: { positive: 1, deaths: 0 },
                    Kitsap: { positive: 1, deaths: 0 },
                    Kittitas: { positive: 1, deaths: 0 },
                    Pierce: { positive: 1, deaths: 0 },
                    Skagit: { positive: 1, deaths: 0 },
                    Snohomish: { positive: 1, deaths: 0 },
                    Thurston: { positive: 1, deaths: 0 },
                    Whatcom: { positive: 1, deaths: 0 },
                    Unassigned: { positive: 1, deaths: 0 }, },
                total: { positive: 366, deaths: 29 },
                total_tests: { positive: 366, negative: 3037 } },
            last_updated: '03/11/2020 2:25PM PDT' 
        }
    */
});
```

### TypeScript

```typescript
import {
    Covid19USWA,
    ICovid19USWACurrent,
    ICovid19USWAHistory
} from 'covid19-us';

let covid19USWA = new Covid19USWA();
covid19USWA.getCurrentData().then((data: ICovid19USWACurrent) => {
    console.log(data);
}); 

covid19USWA.getCurrentData().then((data: ICovid19USWAHistory) => {
    console.log(data);
}); 
```


## NOTE

currently library is using static files that are scraped manually, next 
version will pull them from some other place