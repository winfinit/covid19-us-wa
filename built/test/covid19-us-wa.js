"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
var covid19_us_wa_1 = require("../src/covid19-us-wa");
describe('covid19USWA class', function () {
    it('should return URI', function () {
        var covid19USWA = new covid19_us_wa_1.Covid19USWA();
        expect(covid19USWA.getURI()).to.be.a("string");
    });
    it('should return HTML from WA website', function () {
        var covid19USWA = new covid19_us_wa_1.Covid19USWA();
        covid19USWA.getCurrentHTMLData().then(function (html) {
            expect(html).to.be.an("string");
        });
    });
    it('should return current info for WA', function () {
        var covid19USWA = new covid19_us_wa_1.Covid19USWA();
        covid19USWA.getCurrentData().then(function (data) {
            expect(data).to.be.an("object");
        });
    });
    it('should return history info for WA', function () {
        var covid19USWA = new covid19_us_wa_1.Covid19USWA();
        covid19USWA.getHistoryData().then(function (data) {
            expect(data).to.be.an("object");
        });
    });
    it('should return short history info for WA', function () {
        var covid19USWA = new covid19_us_wa_1.Covid19USWA();
        covid19USWA.getShortHistoryData().then(function (data) {
            expect(data).to.be.an("object");
        });
    });
});
//# sourceMappingURL=covid19-us-wa.js.map