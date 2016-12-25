Object.defineProperty(exports,"__esModule",{value:true});exports.Input=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var

Input=function(_Component){babelHelpers.inherits(Input,_Component);function Input(){babelHelpers.classCallCheck(this,Input);return babelHelpers.possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));}babelHelpers.createClass(Input,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,this.props.label),
_react2.default.createElement(_reactNative.TextInput,{
value:this.props.value,
placeholder:this.props.placeholder,
autoCorrect:this.props.autocorrect,
secureTextEntry:this.props.password,
onChangeText:this.props.onChangeText,
style:{
height:20,
width:150}})));



}}]);return Input;}(_react.Component);exports.


Input=Input;