"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("./app/app.config");
var app_component_1 = require("./app/app.component");
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, app_config_1.appConfig)
    .catch(function (err) { return console.error(err); });
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;

let numeros = [1, 2, 3];

//usando função .map com js vanilla
numeros.map(function (valor) {
  return valor * PI;
});
//usando arrow function .map :
numeros.map(valor => valor * PI); //ES 6

class Matematica {
  soma(x,y) {
    return x + y;
  }
}
