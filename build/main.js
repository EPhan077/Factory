(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Factory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _items = require('./items');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Factory to instanciate the class dynamically
var Factory = exports.Factory = function () {
      function Factory() {
            _classCallCheck(this, Factory);
      }

      _createClass(Factory, null, [{
            key: 'createObj',
            value: function createObj(_obj) {
                  return new Factory.classes[_obj]();
            }
      }, {
            key: 'setClasses',
            value: function setClasses() {
                  Factory.classes = {
                        Soldier: _items.Soldier,
                        Tank: _items.Tank
                  };
            }
      }]);

      return Factory;
}();

},{"./items":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Soldier = exports.Soldier = function Soldier() {
      _classCallCheck(this, Soldier);

      console.log('testing created');
};

var Tank = exports.Tank = function Tank() {
      _classCallCheck(this, Tank);

      console.log('testing2222 created');
};

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('./factory');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
      function Main() {
            _classCallCheck(this, Main);

            this.factory = _factory.Factory.setClasses();
      }
      // Singleton


      _createClass(Main, null, [{
            key: 'getInstance',
            value: function getInstance() {
                  if (!Main._instance) {
                        Main._instance = new Main();

                        return Main._instance;
                  } else {
                        throw 'Main was already created';
                  }
            }
      }]);

      return Main;
}();

// document.addEventListener


var main = Main.getInstance();
var test100 = _factory.Factory.createObj('Soldier');

},{"./factory":1}]},{},[3]);
