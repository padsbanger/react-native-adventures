










'use strict';var _require=

require('React'),PropTypes=_require.PropTypes;

var ImageURISourcePropType=PropTypes.shape({






uri:PropTypes.string,





bundle:PropTypes.string,



method:PropTypes.string,




headers:PropTypes.objectOf(PropTypes.string),





body:PropTypes.string,




width:PropTypes.number,
height:PropTypes.number,




scale:PropTypes.number});


var ImageSourcePropType=PropTypes.oneOfType([
ImageURISourcePropType,

PropTypes.number,

PropTypes.arrayOf(ImageURISourcePropType)]);


module.exports=ImageSourcePropType;