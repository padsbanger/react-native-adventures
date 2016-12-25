Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _common=require('./common');
var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);var

LoginForm=function(_Component){babelHelpers.inherits(LoginForm,_Component);
function LoginForm(){babelHelpers.classCallCheck(this,LoginForm);var _this=babelHelpers.possibleConstructorReturn(this,(LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call(this));

_this.state={
email:'',
password:'',
error:''};

_this.onButtonPress=_this.onButtonPress.bind(_this);
_this.onLoginSuccess=_this.onLoginSuccess.bind(_this);return _this;
}babelHelpers.createClass(LoginForm,[{key:'onLoginSuccess',value:function onLoginSuccess()

{
this.setState({
email:'',
password:''});

}},{key:'onButtonPress',value:function onButtonPress()

{var _this2=this;
this.setState({
error:''});

_firebase2.default.auth().signInWithEmailAndPassword(this.state.email,this.state.password).
then(this.onLoginSuccess).
catch(function(){
_firebase2.default.auth().createUserWithEmailAndPassword(_this2.state.email,_this2.state.password).
then(_this2.onLoginSuccess).
catch(function(error){
_this2.setState({error:'There was an error'});
});
});

}},{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(_common.Card,null,
_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
label:'Email',
placeholder:'Enter email',
value:this.state.email,
autoCorrect:false,
secureTextEntry:false,
onChangeText:function onChangeText(email){_this3.setState({email:email});}})),

_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Input,{
label:'Password',
placeholder:'Enter password',
secureTextEntry:true,
value:this.state.password,
autoCorrect:false,
onChangeText:function onChangeText(password){_this3.setState({password:password});}})),

_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_common.Button,{onPress:this.onButtonPress},'Log in')),



_react2.default.createElement(_common.CardSection,null,
_react2.default.createElement(_reactNative.Text,null,this.state.error))));



}}]);return LoginForm;}(_react.Component);exports.default=


LoginForm;