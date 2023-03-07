"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeDoctor = void 0;
var PackageJsonReader_1 = require("../package/PackageJsonReader");
var PathHelper_1 = require("../helpers/PathHelper");
var Framework_1 = require("../model/Framework");
var ConfigurationReader_1 = require("../config/ConfigurationReader");
var DoctorHelper_1 = require("./DoctorHelper");
var DoctorAnalyzer_1 = require("./DoctorAnalyzer");
var DoctorBuilder_1 = require("./DoctorBuilder");
var executeDoctor = function () { return __awaiter(void 0, void 0, void 0, function () {
    var doctorBuilder, _a, _b, packageJsonReader, _c, _d, configurationReader, doctorAnalyzer, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                doctorBuilder = new DoctorBuilder_1.DoctorBuilder();
                _b = (_a = doctorBuilder).setLatestPluginVersion;
                return [4, (0, DoctorHelper_1.getLatestPluginVersion)()];
            case 1:
                _b.apply(_a, [_g.sent()]);
                doctorBuilder.setPlatforms((0, DoctorHelper_1.getAvailablePlatforms)());
                packageJsonReader = new PackageJsonReader_1.PackageJsonReader((0, PathHelper_1.getApplicationPackage)());
                _d = (_c = doctorBuilder).setPackageJson;
                return [4, packageJsonReader.readPackageJson()];
            case 2:
                _d.apply(_c, [_g.sent()]);
                if ((0, PathHelper_1.isCapacitorApp)()) {
                    doctorBuilder.setFramework(Framework_1.Framework.Capacitor);
                }
                else if ((0, PathHelper_1.isIonic)()) {
                    doctorBuilder.setFramework(Framework_1.Framework.Ionic);
                }
                configurationReader = new ConfigurationReader_1.ConfigurationReader();
                doctorBuilder.setDynatraceConfigFile(configurationReader.readConfiguration((0, PathHelper_1.getConfigFilePath)()));
                doctorAnalyzer = new DoctorAnalyzer_1.DoctorAnalyzer(doctorBuilder.build());
                _f = (_e = console).log;
                return [4, doctorAnalyzer.toString()];
            case 3:
                _f.apply(_e, [_g.sent()]);
                return [4, doctorAnalyzer.storeFullLogs()];
            case 4:
                _g.sent();
                return [2];
        }
    });
}); };
exports.executeDoctor = executeDoctor;
