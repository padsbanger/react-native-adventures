Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _common=require('./components/common');
var _LibraryList=require('./components/LibraryList');var _LibraryList2=babelHelpers.interopRequireDefault(_LibraryList);

var _reducers=require('../src/reducers');var _reducers2=babelHelpers.interopRequireDefault(_reducers);var

App=function(_Component){babelHelpers.inherits(App,_Component);function App(){babelHelpers.classCallCheck(this,App);return babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}babelHelpers.createClass(App,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactRedux.Provider,{store:(0,_redux.createStore)(_reducers2.default)},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_common.Header,{title:'Feed'}),
_react2.default.createElement(_LibraryList2.default,null))));



}}]);return App;}(_react.Component);exports.default=App;