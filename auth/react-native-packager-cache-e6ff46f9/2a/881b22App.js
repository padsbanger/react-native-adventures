Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _common=require('./components/common');
var _LoginForm=require('./components/LoginForm');var _LoginForm2=babelHelpers.interopRequireDefault(_LoginForm);
var _firebase=require('firebase');var _firebase2=babelHelpers.interopRequireDefault(_firebase);var

App=function(_Component){babelHelpers.inherits(App,_Component);
function App(){babelHelpers.classCallCheck(this,App);var _this=babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this));

_this.state={
loggedIn:false};return _this;

}babelHelpers.createClass(App,[{key:'componentWillMount',value:function componentWillMount()
{var _this2=this;
var config={
apiKey:"AIzaSyBEKpSU36nHSq8JmBdwxNxzDmxQv1SkufU",
authDomain:"auth-9a3f5.firebaseapp.com",
databaseURL:"https://auth-9a3f5.firebaseio.com",
storageBucket:"auth-9a3f5.appspot.com",
messagingSenderId:"481354015312"};

_firebase2.default.initializeApp(config);
_firebase2.default.auth().onAuthStateChanged(function(user){
if(user){
_this2.setState({loggedIn:true});
}else{
_this2.setState({loggedIn:false});
}
});
}},{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_common.Header,{title:'Auth'}),
!this.state.loggedIn?_react2.default.createElement(_LoginForm2.default,null):_react2.default.createElement(_reactNative.View,null,_react2.default.createElement(_common.Button,null,'Log out'))));


}}]);return App;}(_react.Component);exports.default=


App;