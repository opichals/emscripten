// TODO: " u s e   s t r i c t ";

/*
// Capture the output of this into a variable, if you want
(function(Module, args) {
  Module = Module || {};
  Module.arguments = args || [];
*/

///*
// Runs much faster, for some reason
if (!this['Module']) {
  this['Module'] = {};
}
// nodejs
if (typeof process !== 'undefined') {
    if (typeof global !== 'undefined') global.Module = this['Module'];
    var scriptArgs = process.argv.slice(2);
}
// define global for the browser as all functions are there
if (typeof global === 'undefined') this['global'] = this;

if (!Module.arguments) {
  try {
    Module.arguments = scriptArgs;
  } catch(e) {
    try {
      Module.arguments = arguments;
    } catch(e) {
      Module.arguments = [];
    }
  }
}
//*/

  {{BODY}}

  // {{MODULE_ADDITIONS}}

/*
  return Module;
}).call(this, {}, arguments); // Replace parameters as needed
*/

