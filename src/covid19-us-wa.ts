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
    CURRENT_URL: string = "https://nlt-other.s3.amazonaws.com/current.json";
    HISTORY_URL: string = "https://nlt-other.s3.amazonaws.com/history.json";
    
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
            https.get(this.CURRENT_URL, (res) => {
                let body: string = "";
                this.debug("status code", res.statusCode);
                res.on("data", (data) => {
                    body += data;
                })
                res.on("end", () => {
                    let waData: ICovid19USWACurrent = JSON.parse(body);
                    this.debug("Body response", waData);
                    resolve(waData);
                });
            }).on('error', (e) => {
                console.error(e);
                reject(e);
            });
        });
    }
    
    getHistoryData(): Promise<ICovid19USWAHistory> {
        return new Promise<ICovid19USWAHistory>((resolve, reject) => {
            https.get(this.HISTORY_URL, (res) => {
                let body: string = "";
                this.debug("status code", res.statusCode);
                res.on("data", (data) => {
                    body += data;
                })
                res.on("end", () => {
                    let waData: ICovid19USWAHistory = JSON.parse(body);
                    this.debug("Body response", waData);
                    resolve(waData);
                });
            }).on('error', (e) => {
                console.error(e);
                reject(e);
            });
        });
    }
    
    extractHTMLData(html: string): any {
        return html;
    }
}