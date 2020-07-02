"use strict";
exports.__esModule = true;
exports.compBFunc = void 0;
var ComponentA_1 = require("../../ComponentA");
function compBFunc() {
    ComponentA_1.compAFunc();
    console.log("Ran component B!");
}
exports.compBFunc = compBFunc;
