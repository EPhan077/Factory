(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Inventory = exports.Factory = undefined;

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
            value: function createObj(_type, _life, _firePower) {
                  try {
                        var instance = new Factory.classes[_type](_type, _life, _firePower);
                        var print = Inventory.display(instance);
                        // console.log(instance);

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

var Inventory = exports.Inventory = function () {
      function Inventory() {
            _classCallCheck(this, Inventory);
      }

      _createClass(Inventory, [{
            key: 'list',
            value: function list(_player) {}
      }], [{
            key: 'display',
            value: function display(_template) {
                  var template = '\n                  <ul>\n                        <li><span>Life: </span>' + _template.life + '</li>\n                        <li><span>Power: </span>' + _template.power + '</li>\n                        <li><span> Type: </span>' + _template.type + '</li>\n                  </ul>\n                  <hr>\n            ';
                  document.getElementById('playerList').insertAdjacentHTML('afterbegin', template);
            }
      }, {
            key: 'displaySum',
            value: function displaySum(_template) {
                  var template = '\n                  <ul>\n                        <li><span>Life: </span>' + _template.life + '</li>\n                        <li><span>Power: </span>' + _template.power + '</li>\n                        <li><span> Type: </span>' + _template.type + '</li>\n                  </ul>\n                  <hr>\n            ';
                  document.getElementById('playerList').insertAdjacentHTML('afterbegin', template);
            }
      }]);

      return Inventory;
}();

},{"./items":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SetUp = function SetUp(_type, _life, _firePower) {
      _classCallCheck(this, SetUp);

      this.life = _life;
      this.power = _firePower;
      this.type = _type;
};

var Soldier = exports.Soldier = function (_SetUp) {
      _inherits(Soldier, _SetUp);

      function Soldier(_type, _life, _firePower) {
            _classCallCheck(this, Soldier);

            return _possibleConstructorReturn(this, (Soldier.__proto__ || Object.getPrototypeOf(Soldier)).call(this, _type, _life, _firePower));
      }

      return Soldier;
}(SetUp);

var Tank = exports.Tank = function (_SetUp2) {
      _inherits(Tank, _SetUp2);

      function Tank(_type, _life, _firePower) {
            _classCallCheck(this, Tank);

            return _possibleConstructorReturn(this, (Tank.__proto__ || Object.getPrototypeOf(Tank)).call(this, _type, _life, _firePower));
      }

      return Tank;
}(SetUp);

var Jet = exports.Jet = function (_SetUp3) {
      _inherits(Jet, _SetUp3);

      function Jet(_type, _life, _firePower) {
            _classCallCheck(this, Jet);

            return _possibleConstructorReturn(this, (Jet.__proto__ || Object.getPrototypeOf(Jet)).call(this, _type, _life, _firePower));
      }

      return Jet;
}(SetUp);

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
            var life = document.getElementById('life').value;
            var firePower = document.getElementById('firePower').value;
            var selectOption = document.getElementById('type');
            var createType = selectOption.options[selectOption.selectedIndex].value;

            console.log('which one?', createType);
            var create = _factory.Factory.createObj(createType, life, firePower);
      });
});

},{"./factory":1}]},{},[3]);
