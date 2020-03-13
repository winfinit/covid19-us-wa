export interface ICovid19USWACurrent {
    "county": ICovid19USWAStatNode;
    "total": ICovid19USWAStatNode;
    "total_tests": {
        "positive": number;
        "negative": number;
    };
    "last_updated": string;
}
export interface ICovid19USWAHistory {
    [date: string]: {
        "county": ICovid19USWAStatNode;
        "total": ICovid19USWAStatNode;
        "total_tests": {
            "positive": number;
            "negative": number;
        };
    };
}
export interface ICovid19USWAStatNode {
    [county: string]: {
        positive: number;
        deaths: number;
    };
}
export declare class Covid19USWA {
    CURRENT_FILE: string;
    DATA_URL: string;
    debug: any;
    constructor();
    getURI(): string;
    getCurrentHTMLData(): Promise<string>;
    getCurrentData(): Promise<ICovid19USWACurrent>;
    getHistoryData(): Promise<ICovid19USWAHistory>;
    extractHTMLData(html: string): any;
}
//# sourceMappingURL=covid19-us-wa.d.ts.map