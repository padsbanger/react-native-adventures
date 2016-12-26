'use strict';

exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

exports.default=connectAdvanced;

var _hoistNonReactStatics=require('hoist-non-react-statics');

var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);

var _invariant=require('invariant');

var _invariant2=_interopRequireDefault(_invariant);

var _react=require('react');

var _Subscription=require('../utils/Subscription');

var _Subscription2=_interopRequireDefault(_Subscription);

var _storeShape=require('../utils/storeShape');

var _storeShape2=_interopRequireDefault(_storeShape);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}

function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var hotReloadingVersion=0;
function connectAdvanced(














selectorFactory){
var _contextTypes,_childContextTypes;

var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref$getDisplayName=_ref.getDisplayName,
getDisplayName=_ref$getDisplayName===undefined?function(name){
return'ConnectAdvanced('+name+')';
}:_ref$getDisplayName,
_ref$methodName=_ref.methodName,
methodName=_ref$methodName===undefined?'connectAdvanced':_ref$methodName,
_ref$renderCountProp=_ref.renderCountProp,
renderCountProp=_ref$renderCountProp===undefined?undefined:_ref$renderCountProp,
_ref$shouldHandleStat=_ref.shouldHandleStateChanges,
shouldHandleStateChanges=_ref$shouldHandleStat===undefined?true:_ref$shouldHandleStat,
_ref$storeKey=_ref.storeKey,
storeKey=_ref$storeKey===undefined?'store':_ref$storeKey,
_ref$withRef=_ref.withRef,
withRef=_ref$withRef===undefined?false:_ref$withRef,
connectOptions=_objectWithoutProperties(_ref,['getDisplayName','methodName','renderCountProp','shouldHandleStateChanges','storeKey','withRef']);

var subscriptionKey=storeKey+'Subscription';
var version=hotReloadingVersion++;

var contextTypes=(_contextTypes={},_contextTypes[storeKey]=_storeShape2.default,_contextTypes[subscriptionKey]=_react.PropTypes.instanceOf(_Subscription2.default),_contextTypes);
var childContextTypes=(_childContextTypes={},_childContextTypes[subscriptionKey]=_react.PropTypes.instanceOf(_Subscription2.default),_childContextTypes);

return function wrapWithConnect(WrappedComponent){
(0,_invariant2.default)(typeof WrappedComponent=='function','You must pass a component to the function returned by '+('connect. Instead received '+WrappedComponent));

var wrappedComponentName=WrappedComponent.displayName||WrappedComponent.name||'Component';

var displayName=getDisplayName(wrappedComponentName);

var selectorFactoryOptions=_extends({},connectOptions,{
getDisplayName:getDisplayName,
methodName:methodName,
renderCountProp:renderCountProp,
shouldHandleStateChanges:shouldHandleStateChanges,
storeKey:storeKey,
withRef:withRef,
displayName:displayName,
wrappedComponentName:wrappedComponentName,
WrappedComponent:WrappedComponent});


var Connect=function(_Component){
_inherits(Connect,_Component);

function Connect(props,context){
_classCallCheck(this,Connect);

var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));

_this.version=version;
_this.state={};
_this.renderCount=0;
_this.store=_this.props[storeKey]||_this.context[storeKey];
_this.parentSub=props[subscriptionKey]||context[subscriptionKey];

_this.setWrappedInstance=_this.setWrappedInstance.bind(_this);

(0,_invariant2.default)(_this.store,'Could not find "'+storeKey+'" in either the context or '+('props of "'+displayName+'". ')+'Either wrap the root component in a <Provider>, '+('or explicitly pass "'+storeKey+'" as a prop to "'+displayName+'".'));



_this.getState=_this.store.getState.bind(_this.store);

_this.initSelector();
_this.initSubscription();
return _this;
}

Connect.prototype.getChildContext=function getChildContext(){
var _ref2;

return _ref2={},_ref2[subscriptionKey]=this.subscription,_ref2;
};

Connect.prototype.componentDidMount=function componentDidMount(){
if(!shouldHandleStateChanges)return;







this.subscription.trySubscribe();
this.selector.run(this.props);
if(this.selector.shouldComponentUpdate)this.forceUpdate();
};

Connect.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){
this.selector.run(nextProps);
};

Connect.prototype.shouldComponentUpdate=function shouldComponentUpdate(){
return this.selector.shouldComponentUpdate;
};

Connect.prototype.componentWillUnmount=function componentWillUnmount(){
if(this.subscription)this.subscription.tryUnsubscribe();


this.subscription=null;
this.store=null;
this.parentSub=null;
this.selector.run=function(){};
};

Connect.prototype.getWrappedInstance=function getWrappedInstance(){
(0,_invariant2.default)(withRef,'To access the wrapped instance, you need to specify '+('{ withRef: true } in the options argument of the '+methodName+'() call.'));
return this.wrappedInstance;
};

Connect.prototype.setWrappedInstance=function setWrappedInstance(ref){
this.wrappedInstance=ref;
};

Connect.prototype.initSelector=function initSelector(){
var dispatch=this.store.dispatch;
var getState=this.getState;

var sourceSelector=selectorFactory(dispatch,selectorFactoryOptions);


var selector=this.selector={
shouldComponentUpdate:true,
props:sourceSelector(getState(),this.props),
run:function runComponentSelector(props){
try{
var nextProps=sourceSelector(getState(),props);
if(selector.error||nextProps!==selector.props){
selector.shouldComponentUpdate=true;
selector.props=nextProps;
selector.error=null;
}
}catch(error){
selector.shouldComponentUpdate=true;
selector.error=error;
}
}};

};

Connect.prototype.initSubscription=function initSubscription(){
var _this2=this;

if(shouldHandleStateChanges){
(function(){
var subscription=_this2.subscription=new _Subscription2.default(_this2.store,_this2.parentSub);
var dummyState={};

subscription.onStateChange=function onStateChange(){
this.selector.run(this.props);

if(!this.selector.shouldComponentUpdate){
subscription.notifyNestedSubs();
}else{
this.componentDidUpdate=function componentDidUpdate(){
this.componentDidUpdate=undefined;
subscription.notifyNestedSubs();
};

this.setState(dummyState);
}
}.bind(_this2);
})();
}
};

Connect.prototype.isSubscribed=function isSubscribed(){
return Boolean(this.subscription)&&this.subscription.isSubscribed();
};

Connect.prototype.addExtraProps=function addExtraProps(props){
if(!withRef&&!renderCountProp)return props;




var withExtras=_extends({},props);
if(withRef)withExtras.ref=this.setWrappedInstance;
if(renderCountProp)withExtras[renderCountProp]=this.renderCount++;
return withExtras;
};

Connect.prototype.render=function render(){
var selector=this.selector;
selector.shouldComponentUpdate=false;

if(selector.error){
throw selector.error;
}else{
return(0,_react.createElement)(WrappedComponent,this.addExtraProps(selector.props));
}
};

return Connect;
}(_react.Component);

Connect.WrappedComponent=WrappedComponent;
Connect.displayName=displayName;
Connect.childContextTypes=childContextTypes;
Connect.contextTypes=contextTypes;
Connect.propTypes=contextTypes;

if(process.env.NODE_ENV!=='production'){
Connect.prototype.componentWillUpdate=function componentWillUpdate(){

if(this.version!==version){
this.version=version;
this.initSelector();

if(this.subscription)this.subscription.tryUnsubscribe();
this.initSubscription();
if(shouldHandleStateChanges)this.subscription.trySubscribe();
}
};
}

return(0,_hoistNonReactStatics2.default)(Connect,WrappedComponent);
};
}