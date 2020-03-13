var expect = require('chai').expect;
import {
    Covid19USWA,
    ICovid19USWACurrent,
    ICovid19USWAHistory
} from '../src/covid19-us-wa';

describe('covid19USWA class', function() {
    it('should return URI', function(){
        let covid19USWA = new Covid19USWA();
        expect(covid19USWA.getURI()).to.be.a("string");
    });
    
    it('should return structured of current WA info', function(){
        let covid19USWA = new Covid19USWA();
        covid19USWA.getCurrentHTMLData().then((html) => {
            expect(html).to.be.an("string");
        });       
        
    });

    it('should return structured of current WA info', function(){
        let covid19USWA = new Covid19USWA();
        covid19USWA.getCurrentData().then((data: ICovid19USWACurrent) => {
            expect(data).to.be.an("object");
        });       
        
    });

    it('should return structured of current WA info', function(){
        let covid19USWA = new Covid19USWA();
        covid19USWA.getHistoryData().then((data: ICovid19USWAHistory) => {
            expect(data).to.be.an("object");
        });       
        
    });

});