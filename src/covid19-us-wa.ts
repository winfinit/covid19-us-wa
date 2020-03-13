const Debug: any = require('debug');

import https from 'https';

export interface ICovid19USWACurrent {
    "county": ICovid19USWAStatNode;
    "total": ICovid19USWAStatNode;
    "total_tests": {
        "positive": number,
        "negative": number
    };
    "last_updated": string
}

export interface ICovid19USWAHistory {
    [date: string]: {
        "county": ICovid19USWAStatNode;
        "total": ICovid19USWAStatNode;
        "total_tests": {
            "positive": number,
            "negative": number
        };
    };
}

export interface ICovid19USWAStatNode {
    [county: string]: {
        positive: number,
        deaths: number
    }
}


export class Covid19USWA {
    CURRENT_FILE: string = "../data/current.json";
    DATA_URL: string = "https://www.doh.wa.gov/emergencies/coronavirus";
    debug: any;
    
    constructor() {
        this.debug = Debug("Covid19USWA");    
    }
    
    getURI(): string {
        return this.DATA_URL;
    }
    
    getCurrentHTMLData(): Promise<string> {
        
        return new Promise<string>((resolve, reject) => {
            https.get(this.getURI(), (res) => {
                let body: string = "";
                this.debug("status code", res.statusCode);
                res.on("data", (data) => {
                    body += data;
                })
                res.on("end", () => {
                    this.debug("Body response", body);
                    resolve(body);
                });
            }).on('error', (e) => {
                console.error(e);
                reject(e);
            });
        });
    }
    
    getCurrentData(): Promise<ICovid19USWACurrent> {
        return new Promise<ICovid19USWACurrent>((resolve, reject) => {
            let inflatedData: ICovid19USWACurrent = require('../../data/current.json');
            resolve(inflatedData);
        });
    }
    
    getHistoryData(): Promise<ICovid19USWAHistory> {
        return new Promise<ICovid19USWAHistory>((resolve, reject) => {
            let inflatedData: ICovid19USWAHistory = require('../../data/history.json');
            resolve(inflatedData);
        });
    }
    
    extractHTMLData(html: string): any {
        return html;
    }
    
}