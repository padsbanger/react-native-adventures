






























"use strict";

var mergeInto=require('mergeInto');








var merge=function merge(one,two){
var result={};
mergeInto(result,one);
mergeInto(result,two);
return result;
};

module.exports=merge;