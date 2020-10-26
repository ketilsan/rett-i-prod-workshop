"use strict";

var _superImportantService = require("./super-important-service");

test('hello should be world', function () {
  var _superImportantServic = (0, _superImportantService.superImportantService)(),
      hello = _superImportantServic.hello;

  expect(hello).toBe("world");
}); //test('This should fail', () => {
//    expect(superImportantService()).toBe("world");
//});