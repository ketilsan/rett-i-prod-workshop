"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _superImportantService = require("../controller/super-important-service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res, next) {
  res.send((0, _superImportantService.superImportantService)());
});
var _default = router;
exports["default"] = _default;