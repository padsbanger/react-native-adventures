Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var

LibraryList=function(_Component){babelHelpers.inherits(LibraryList,_Component);function LibraryList(){babelHelpers.classCallCheck(this,LibraryList);return babelHelpers.possibleConstructorReturn(this,(LibraryList.__proto__||Object.getPrototypeOf(LibraryList)).apply(this,arguments));}babelHelpers.createClass(LibraryList,[{key:'componentWillMount',value:function componentWillMount()

{
var data=new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}});


this.dataSource=data.cloneWithRows(this.props.libraries);
}},{key:'renderRow',value:function renderRow()

{

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.ListView,{
renderRow:this.renderRow,
dataSource:this.dataSource}));


}}]);return LibraryList;}(_react.Component);


function mapStateToProps(state){
return{
libaries:state.libraries};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps)(LibraryList);