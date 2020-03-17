"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Debug = require('debug');
var https_1 = __importDefault(require("https"));
var Covid19USWA = /** @class */ (function () {
    function Covid19USWA() {
        this.CURRENT_FILE = "../data/current.json";
        this.DATA_URL = "https://www.doh.wa.gov/emergencies/coronavirus";
        this.CURRENT_URL = "https://nlt-other.s3.amazonaws.com/current.json";
        this.HISTORY_URL = "https://nlt-other.s3.amazonaws.com/history.json";
        this.SHORT_HISTORY_URL = "https://nlt-other.s3.amazonaws.com/short_history.json";
        this.debug = Debug("Covid19USWA");
    }
    Covid19USWA.prototype.getURI = function () {
        return this.DATA_URL;
    };
    Covid19USWA.prototype.getCurrentHTMLData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            https_1.default.get(_this.getURI(), function (res) {
                var body = "";
                _this.debug("status code", res.statusCode);
                res.on("data", function (data) {
                    body += data;
                });
                res.on("end", function () {
                    _this.debug("Body response", body);
                    resolve(body);
                });
            }).on('error', function (e) {
                console.error(e);
                reject(e);
            });
        });
    };
    Covid19USWA.prototype.getCurrentData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            https_1.default.get(_this.CURRENT_URL, function (res) {
                var body = "";
                _this.debug("status code", res.statusCode);
                res.on("data", function (data) {
                    body += data;
                });
                res.on("end", function () {
                    var waData = JSON.parse(body);
                    _this.debug("Body response", waData);
                    resolve(waData);
                });
            }).on('error', function (e) {
                console.error(e);
                reject(e);
            });
        });
    };
    Covid19USWA.prototype.getHistoryData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            https_1.default.get(_this.HISTORY_URL, function (res) {
                var body = "";
                _this.debug("status code", res.statusCode);
                res.on("data", function (data) {
                    body += data;
                });
                res.on("end", function () {
                    var waData = JSON.parse(body);
                    _this.debug("Body response", waData);
                    resolve(waData);
                });
            }).on('error', function (e) {
                console.error(e);
                reject(e);
            });
        });
    };
    Covid19USWA.prototype.getShortHistoryData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            https_1.default.get(_this.SHORT_HISTORY_URL, function (res) {
                var body = "";
                _this.debug("status code", res.statusCode);
                res.on("data", function (data) {
                    body += data;
                });
                res.on("end", function () {
                    var waData = JSON.parse(body);
                    _this.debug("Body response", waData);
                    resolve(waData);
                });
            }).on('error', function (e) {
                console.error(e);
                reject(e);
            });
        });
    };
    Covid19USWA.prototype.extractHTMLData = function (html) {
        return html;
    };
    return Covid19USWA;
}());
exports.Covid19USWA = Covid19USWA;
//# sourceMappingURL=covid19-us-wa.js.map