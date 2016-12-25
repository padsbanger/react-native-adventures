Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var Button=function Button(_ref){var onPress=_ref.onPress,children=_ref.children;return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPress,style:styles.buttonStyle},
_react2.default.createElement(_reactNative.Text,{style:styles.textStyle},children)));};



var styles={
buttonStyle:{
flex:1,
alignSelf:'stretch',
backgroundColor:'#fff',
borderRadius:5,
borderColor:'#007aff',
borderWidth:1,
marginLeft:5,
marginRight:5},

textStyle:{
alignSelf:'center',
color:'#007aff',
fontWeight:'600',
paddingTop:10,
paddingBottom:10}};exports.



Button=Button;