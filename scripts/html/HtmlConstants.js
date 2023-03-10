"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE_PROXY_SRC = exports.SWALLOW_API_SRC = exports.OLD_AGENT_SRC = exports.HTML_IDENTIFIER = exports.DEFAULT_COOKIE_PROXY_INJECTION = exports.DEFAULT_SWALLOW_API_INJECTION = void 0;
var CordovaPluginConfigurationConstants_1 = require("../config/cordova/CordovaPluginConfigurationConstants");
exports.DEFAULT_SWALLOW_API_INJECTION = true;
exports.DEFAULT_COOKIE_PROXY_INJECTION = CordovaPluginConfigurationConstants_1.DEFAULT_COOKIE_PROXY;
exports.HTML_IDENTIFIER = ['ion-app', 'app-root'];
exports.OLD_AGENT_SRC = 'assets/dtAgent.js';
exports.SWALLOW_API_SRC = 'assets/dtrum-swallow-api.js';
exports.COOKIE_PROXY_SRC = 'assets/dt-cookie-proxy.js';
