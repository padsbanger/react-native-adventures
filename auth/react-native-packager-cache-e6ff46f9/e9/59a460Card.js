Object.defineProperty(exports,"__esModule",{value:true});exports.Card=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var

Card=function(_Component){babelHelpers.inherits(Card,_Component);function Card(){babelHelpers.classCallCheck(this,Card);return babelHelpers.possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments));}babelHelpers.createClass(Card,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.containerStyle},this.props.children));

}}]);return Card;}(_react.Component);


var styles={
containerStyle:{
borderWidth:1,
borderRadius:2,
borderColor:'#ddd',
borderBottomWidth:0,
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.1,
shadowRadius:2,
elevation:1,
marginLeft:5,
marginRight:5,
marginTop:10}};exports.



Card=Card;