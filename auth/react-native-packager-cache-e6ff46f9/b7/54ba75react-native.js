









'use strict';

var warning=require('fbjs/lib/warning');

if(__DEV__){
var warningDedupe={};
var addonWarn=function addonWarn(prevName,newPackageName){
warning(
warningDedupe[prevName],
'React.addons.'+prevName+' is deprecated. Please import the "'+
newPackageName+'" package instead.');

warningDedupe[prevName]=true;
};
}


var ReactNative={

get ActivityIndicator(){return require('ActivityIndicator');},
get ART(){return require('ReactNativeART');},
get Button(){return require('Button');},
get DatePickerIOS(){return require('DatePickerIOS');},
get DrawerLayoutAndroid(){return require('DrawerLayoutAndroid');},
get Image(){return require('Image');},
get ImageEditor(){return require('ImageEditor');},
get ImageStore(){return require('ImageStore');},
get KeyboardAvoidingView(){return require('KeyboardAvoidingView');},
get ListView(){return require('ListView');},
get MapView(){return require('MapView');},
get Modal(){return require('Modal');},
get Navigator(){return require('Navigator');},
get NavigatorIOS(){return require('NavigatorIOS');},
get Picker(){return require('Picker');},
get PickerIOS(){return require('PickerIOS');},
get ProgressBarAndroid(){return require('ProgressBarAndroid');},
get ProgressViewIOS(){return require('ProgressViewIOS');},
get ScrollView(){return require('ScrollView');},
get SegmentedControlIOS(){return require('SegmentedControlIOS');},
get Slider(){return require('Slider');},
get SnapshotViewIOS(){return require('SnapshotViewIOS');},
get Switch(){return require('Switch');},
get RecyclerViewBackedScrollView(){return require('RecyclerViewBackedScrollView');},
get RefreshControl(){return require('RefreshControl');},
get StatusBar(){return require('StatusBar');},
get SwipeableListView(){return require('SwipeableListView');},
get TabBarIOS(){return require('TabBarIOS');},
get Text(){return require('Text');},
get TextInput(){return require('TextInput');},
get ToastAndroid(){return require('ToastAndroid');},
get ToolbarAndroid(){return require('ToolbarAndroid');},
get Touchable(){return require('Touchable');},
get TouchableHighlight(){return require('TouchableHighlight');},
get TouchableNativeFeedback(){return require('TouchableNativeFeedback');},
get TouchableOpacity(){return require('TouchableOpacity');},
get TouchableWithoutFeedback(){return require('TouchableWithoutFeedback');},
get View(){return require('View');},
get ViewPagerAndroid(){return require('ViewPagerAndroid');},
get WebView(){return require('WebView');},


get ActionSheetIOS(){return require('ActionSheetIOS');},
get AdSupportIOS(){return require('AdSupportIOS');},
get Alert(){return require('Alert');},
get AlertIOS(){return require('AlertIOS');},
get Animated(){return require('Animated');},
get AppRegistry(){return require('AppRegistry');},
get AppState(){return require('AppState');},
get AsyncStorage(){return require('AsyncStorage');},
get BackAndroid(){return require('BackAndroid');},
get CameraRoll(){return require('CameraRoll');},
get Clipboard(){return require('Clipboard');},
get DatePickerAndroid(){return require('DatePickerAndroid');},
get Dimensions(){return require('Dimensions');},
get Easing(){return require('Easing');},
get I18nManager(){return require('I18nManager');},
get ImagePickerIOS(){return require('ImagePickerIOS');},
get InteractionManager(){return require('InteractionManager');},
get Keyboard(){return require('Keyboard');},
get LayoutAnimation(){return require('LayoutAnimation');},
get Linking(){return require('Linking');},
get NativeEventEmitter(){return require('NativeEventEmitter');},
get NavigationExperimental(){return require('NavigationExperimental');},
get NetInfo(){return require('NetInfo');},
get PanResponder(){return require('PanResponder');},
get PermissionsAndroid(){return require('PermissionsAndroid');},
get PixelRatio(){return require('PixelRatio');},
get PushNotificationIOS(){return require('PushNotificationIOS');},
get Settings(){return require('Settings');},
get Share(){return require('Share');},
get StatusBarIOS(){return require('StatusBarIOS');},
get StyleSheet(){return require('StyleSheet');},
get Systrace(){return require('Systrace');},
get TimePickerAndroid(){return require('TimePickerAndroid');},
get UIManager(){return require('UIManager');},
get Vibration(){return require('Vibration');},
get VibrationIOS(){return require('VibrationIOS');},


get DeviceEventEmitter(){return require('RCTDeviceEventEmitter');},
get NativeAppEventEmitter(){return require('RCTNativeAppEventEmitter');},
get NativeModules(){return require('NativeModules');},
get Platform(){return require('Platform');},
get processColor(){return require('processColor');},
get requireNativeComponent(){return require('requireNativeComponent');},


get ColorPropType(){return require('ColorPropType');},
get EdgeInsetsPropType(){return require('EdgeInsetsPropType');},
get PointPropType(){return require('PointPropType');},


addons:{
get LinkedStateMixin(){
if(__DEV__){
addonWarn('LinkedStateMixin','react-addons-linked-state-mixin');
}
return require('react/lib/LinkedStateMixin');
},
get PureRenderMixin(){
if(__DEV__){
addonWarn('PureRenderMixin','react-addons-pure-render-mixin');
}
return require('react/lib/ReactComponentWithPureRenderMixin');
},
get TestModule(){
if(__DEV__){
warning(
warningDedupe.TestModule,
'React.addons.TestModule is deprecated. '+
'Use ReactNative.NativeModules.TestModule instead.');

warningDedupe.TestModule=true;
}
return require('NativeModules').TestModule;
},
get batchedUpdates(){
if(__DEV__){
warning(
warningDedupe.batchedUpdates,
'React.addons.batchedUpdates is deprecated. '+
'Use ReactNative.unstable_batchedUpdates instead.');

warningDedupe.batchedUpdates=true;
}
return require('ReactUpdates').batchedUpdates;
},
get createFragment(){
if(__DEV__){
addonWarn('createFragment','react-addons-create-fragment');
}
return require('react/lib/ReactFragment').create;
},
get update(){
if(__DEV__){
addonWarn('update','react-addons-update');
}
return require('react/lib/update');
}}};




if(__DEV__){(function(){
var throwOnWrongReactAPI=require('throwOnWrongReactAPI');
var reactAPIs=['createClass','Component'];var _loop=function _loop(

key){
Object.defineProperty(ReactNative,key,{
get:function get(){throwOnWrongReactAPI(key);},
enumerable:false,
configurable:false});};for(var _iterator=reactAPIs,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var key=_ref;_loop(key);

}})();
}



var ReactNativeInternal=require('ReactNative');
function applyForwarding(key){
if(__DEV__){
Object.defineProperty(
ReactNative,
key,
Object.getOwnPropertyDescriptor(ReactNativeInternal,key));

return;
}
ReactNative[key]=ReactNativeInternal[key];
}
for(var key in ReactNativeInternal){
applyForwarding(key);
}
module.exports=ReactNative;