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
                  try {
                        var instance = new Factory.classes[_obj]();
                        console.log('instance: ', instance);

                        return instance;
                  } catch (error) {
                        throw 'this is not a valid class';
                  }
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

var Inventory = function () {
      function Inventory() {
            _classCallCheck(this, Inventory);
      }

      _createClass(Inventory, [{
            key: 'list',
            value: function list(_player) {}
      }, {
            key: 'display',
            value: function display() {}
      }]);

      return Inventory;
}();

},{"./items":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Soldier = exports.Soldier = function Soldier() {
      _classCallCheck(this, Soldier);

      console.log('soldier created');
};

var Tank = exports.Tank = function Tank() {
      _classCallCheck(this, Tank);

      console.log('tank created');
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

// when the page is ready


window.addEventListener('load', function () {

      var main = Main.getInstance();

      // listen to the form
      document.getElementById('create').addEventListener('submit', function (e) {
            e.preventDefault();
            // form fields
            var selectOption = document.getElementById('type');
            var createType = selectOption.options[selectOption.selectedIndex].value;

            console.log('which one?', createType);
            var create = _factory.Factory.createObj(createType);
      });
});

},{"./factory":1}]},{},[3]);
