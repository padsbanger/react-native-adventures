Object.defineProperty(exports,"__esModule",{value:true});exports.CardSection=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var

CardSection=function(_Component){babelHelpers.inherits(CardSection,_Component);function CardSection(){babelHelpers.classCallCheck(this,CardSection);return babelHelpers.possibleConstructorReturn(this,(CardSection.__proto__||Object.getPrototypeOf(CardSection)).apply(this,arguments));}babelHelpers.createClass(CardSection,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.containerStyle},this.props.children));

}}]);return CardSection;}(_react.Component);


var styles={
containerStyle:{
borderBottomWidth:1,
padding:5,
backgroundColor:'#fff',
justifyContent:'flex-start',
flexDirection:'row',
borderColor:'#ddd',
position:'relative'}};exports.



CardSection=CardSection;