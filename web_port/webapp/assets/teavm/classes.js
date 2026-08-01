"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hW=f;}
function $rt_cls(cls){return Ju(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ep(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.B.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_stecls(){return E;}
function $rt_throwableMessage(t){return Ph(t);}
function $rt_throwableCause(t){return Pp(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Ub());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Uc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var Ci=$rt_compare;var Ud=$rt_nullCheck;var F=$rt_cls;var BJ=$rt_createArray;var Qf=$rt_isInstance;var Ue=$rt_nativeThread;var Uf=$rt_suspending;var Ug=$rt_resuming;var Uh=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var CJ=$rt_imul;var Da=$rt_wrapException;var Ui=$rt_checkBounds;var Uj=$rt_checkUpperBound;var Uk=$rt_checkLowerBound;var Ul=$rt_wrapFunction0;var Um=$rt_wrapFunction1;var Un=$rt_wrapFunction2;var Uo=$rt_wrapFunction3;var Up=$rt_wrapFunction4;var H=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var TO=$rt_createCharArrayFromData;var Uq=$rt_createByteArrayFromData;var T7=$rt_createShortArrayFromData;var C1=$rt_createIntArrayFromData;var Ur=$rt_createBooleanArrayFromData;var Us=$rt_createFloatArrayFromData;var Ut=$rt_createDoubleArrayFromData;var G2=$rt_createLongArrayFromData;var Uu=$rt_createBooleanArray;var OI=$rt_createByteArray;var Uv=$rt_createShortArray;var BU=$rt_createCharArray;var BY=$rt_createIntArray;var Uw=$rt_createLongArray;var Ux=$rt_createFloatArray;var Uy=$rt_createDoubleArray;var Ci
=$rt_compare;var Uz=$rt_castToClass;var UA=$rt_castToInterface;var UB=$rt_equalDoubles;var UC=Long_toNumber;var U=Long_fromInt;var UD=Long_fromNumber;var C=Long_create;var BN=Long_ZERO;var UE=Long_hi;var D3=Long_lo;
function E(){this.$id$=0;}
function CN(a){return Ju(a.constructor);}
function N8(a){var b,c;b=IX(FH(a));c=new T;W(c);N(N(c,B(0)),b);return S(c);}
function FH(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function LE(a){var b,c,d;if(!Qf(a,Co)&&a.constructor.$meta.item===null){b=new E3;Z(b);L(b);}b=Mh(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var BO=H();
var UF=null;var UG=null;var UH=null;var UI=null;var UJ=null;var UK=null;var UL=0;var UM=0;var UN=0;var UO=0;var UP=null;var UQ=null;var UR=0.0;function BI(){BI=Bt(BO);OU();}
function P7(b){var c,d,e,f;KD();Jq();JM();JW();KI();Lz();J6();Lo();KZ();K2();JJ();Jn();JN();JD();BI();c=UF.getElementById("polyglot-container");if(c!==null){d="";c.innerHTML=d;e=UF.createElement("audio");UK=e;d="assets/river.wav";e.src=d;d=UK;e="game-background-music";d.id=e;d=UK;e=!!1;d.loop=e;d=UK;c.appendChild(d);f=$rt_globals.window;d=new HK;f.addEventListener("focusin",Cg(d,"handleEvent"));f=$rt_globals.window;e=new HJ;f.addEventListener("blur",Cg(e,"handleEvent"));d=UF.createElement("div");UJ=d;c.appendChild(d);Et();}}
function Et(){var b,c,d,e;BI();UL=0;b=UK;if(b!==null){b.pause();b=UK;c=0.0;b.currentTime=c;}c=UJ;b="";c.innerHTML=b;d=UF.createElement("div");d.style.setProperty("display","flex");d.style.setProperty("align-items","center");d.style.setProperty("justify-content","center");d.style.setProperty("gap","20px");e=UF.createElement("img");b="assets/polyglot_logo.png";e.src=b;e.style.setProperty("max-width","250px");d.appendChild(e);e=UF.createElement("p");b="- Steer your raft using the LEFT and RIGHT arrow keys.<br>- Avoid obstacles: Rocks, Logs, and Shallows damage your raft.<br>- Hit green ramps to jump over obstacles.<br>- Collect letters to form words from your chosen languages.<br>- Forming valid words restores health and boosts your score.<br>- The game gets faster the more words you find!<br><br><b>Note:</b> Choose from our top 23 languages! We support 6,000 words per language.<br><br>Press \'Next\' to select your languages.";e.innerHTML
=b;e.style.setProperty("font-size","18px");e.style.setProperty("margin","0");d.appendChild(e);UJ.appendChild(d);d=UF.createElement("button");b="Next";d.innerHTML=b;c=new HM;d.addEventListener("click",Cg(c,"handleEvent"));UJ.appendChild(d);}
function J7(){var b,c,d,e,f,g,h,i,j,k,l;BI();b=UJ;c="";b.innerHTML=c;d=UF.createElement("h2");b="Select Languages";d.innerHTML=b;UJ.appendChild(d);e=UF.createElement("div");e.style.setProperty("display","grid");e.style.setProperty("grid-template-columns","repeat(5, 1fr)");e.style.setProperty("gap","4px");f=0;while(true){g=UP.data;if(f>=g.length)break;b=g[f];h=UQ.data[f];i=UF.createElement("div");i.style.setProperty("display","flex");i.style.setProperty("align-items","center");j=UF.createElement("button");c=
HT();N(N(c,B(1)),b);c=$rt_ustr(CA(c));j.id=c;j.style.setProperty("display","flex");j.style.setProperty("align-items","center");j.style.setProperty("justify-content","center");j.style.setProperty("cursor","pointer");j.style.setProperty("border","2px solid #ccc");j.style.setProperty("border-radius","4px");j.style.setProperty("background-color","#444");j.style.setProperty("color","white");j.style.setProperty("padding","3px");j.style.setProperty("margin","0");j.style.setProperty("font-size","14px");if(!By(b,B(2)))j.setAttribute("data-selected",
"false");else{j.setAttribute("data-selected","true");j.style.setProperty("border-color","#00ff00");j.style.setProperty("background-color","#226622");}k=Tp(j);j.addEventListener("click",Cg(k,"handleEvent"));c=UF.createElement("img");l=HT();N(N(N(l,B(3)),b),B(4));d=CA(l);c.setAttribute("src",$rt_ustr(d));c.style.setProperty("width","30px");c.style.setProperty("height","20px");c.style.setProperty("margin-right","8px");l=UF.createElement("span");b=$rt_ustr(h);l.innerHTML=b;j.appendChild(c);j.appendChild(l);i.appendChild(j);e.appendChild(i);f
=f+1|0;}UJ.appendChild(e);e=UF.createElement("button");b="Start Rafting!";e.innerHTML=b;e.style.setProperty("margin-top","10px");e.style.setProperty("padding","8px 16px");e.style.setProperty("font-size","16px");d=S5();e.addEventListener("click",Cg(d,"handleEvent"));UJ.appendChild(e);}
function JC(){var b,c,d,e,f,g;BI();b=UJ;c="";b.innerHTML=c;d=UF.createElement("div");d.style.setProperty("display","flex");b=UF.createElement("canvas");UG=b;c=600;b.width=c;b=UG;c=600;b.height=c;UG.style.setProperty("width","460px");UG.style.setProperty("height","460px");UG.style.setProperty("background-color","#000");UH=UG.getContext("2d");e=UF.createElement("div");e.style.setProperty("width","280px");e.style.setProperty("height","460px");e.style.setProperty("background-color","#333");e.style.setProperty("display",
"flex");e.style.setProperty("flex-direction","column");b=UF.createElement("div");UI=b;b.style.setProperty("box-sizing","border-box");UI.style.setProperty("padding","10px");UI.style.setProperty("color","#fff");UI.style.setProperty("flex-grow","1");UI.style.setProperty("display","flex");UI.style.setProperty("flex-direction","column");UI.style.setProperty("overflow-y","auto");UI.style.setProperty("min-height","0");f=UF.createElement("button");b="New Game";f.innerHTML=b;f.style.setProperty("margin","10px");f.style.setProperty("padding",
"10px");f.style.setProperty("cursor","pointer");f.style.setProperty("background-color","#4CAF50");f.style.setProperty("color","white");f.style.setProperty("border","none");f.style.setProperty("border-radius","5px");f.style.setProperty("font-weight","bold");f.style.setProperty("font-size","16px");g=TB();f.addEventListener("click",Cg(g,"handleEvent"));b=UI;e.appendChild(b);e.appendChild(f);b=UG;d.appendChild(b);d.appendChild(e);UJ.appendChild(d);c=$rt_globals.window;e=Tc();c.addEventListener("keydown",Cg(e,"handleEvent"));c
=$rt_globals.window;e=T2();c.addEventListener("keyup",Cg(e,"handleEvent"));if(UO!=(-1)){$rt_globals.window;$rt_globals.clearInterval(UO);}$rt_globals.window;UO=$rt_globals.setInterval(Cg(SD(),"onTimer"),16);}
function KO(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl;BI();UR=UR+0.05000000074505806;b=UG.width;c=UG.height;d=UH;e=b;f=d.createLinearGradient(0.0,0.0,e,0.0);f.addColorStop(0.0,"#0a64b4");f.addColorStop(1.0,"#1478c8");UH.fillStyle=f;d=UH;g=c;d.fillRect(0.0,0.0,e,g);h=0;while(h<15){i=b/16|0;j=h+1|0;k=CJ(i,j);UH.beginPath();l=20+((h%3|0)*15|0)|0;d=UH;m=l/255.0;n=HT();CV(Kk(N(n,B(5)),m),41);n=$rt_ustr(CA(n));d.strokeStyle=n;d=UH;n=2+(h%2|0)|0;d.lineWidth=n;o=1;p
=0;while(p<c){if(ML()<0.05){o=o?0:1;if(o){UH.stroke();UH.beginPath();}}if(o){m=UR;q=p;r=Qg(m+q*0.01+h)*15.0|0;if(p){d=UH;m=k+r|0;d.lineTo(m,q);}else{d=UH;m=k+r|0;d.moveTo(m,q);}}p=p+20|0;}if(o)UH.stroke();h=j;}a:{s=$rt_str($rt_globals.window.polyglotInstance.getObstaclesData());if(s!==null&&!BP(s)){t=(CT(s,B(6))).data;i=t.length;u=0;v=b;w=c;while(true){if(u>=i)break a;x=t[u];if(!BP(x)){y=(CT(x,B(7))).data;Jg(Kn(y[0]),DN(y[1])*v|0,DN(y[2])*w|0);}u=u+1|0;}}}b:{z=$rt_str($rt_globals.window.polyglotInstance.getLettersData());if
(z!==null&&!BP(z)){t=(CT(z,B(6))).data;i=t.length;u=0;v=b;w=c;while(true){if(u>=i)break b;d=t[u];if(!BP(d)){y=(CT(d,B(7))).data;ba=y[0];bb=DN(y[1])*v|0;p=DN(y[2])*w|0;if(O(ba)>0)Hu(ba,0);d=UH;n=$rt_ustr(Jj(ba,0));d.fillStyle=n;UH.beginPath();d=UH;m=bb;q=p;d.arc(m,q,15.0,0.0,6.283185307179586);UH.fill();d=UH;n="black";d.strokeStyle=n;UH.stroke();x=UH;d="black";x.fillStyle=d;x=UH;d="bold 18px sans-serif";x.font=d;f=UH;m=bb-6|0;q=p+6|0;f.fillText($rt_ustr(ba),m,q);}u=u+1|0;}}}i=$rt_globals.window.polyglotInstance.getRaftX()
*b|0;u=0.8999999761581421*c|0;d=UH;n="rgba(0,0,0,0.5)";d.shadowColor=n;d=UH;n=10.0;d.shadowBlur=n;d=UH;n=5.0;d.shadowOffsetX=n;d=UH;n=5.0;d.shadowOffsetY=n;d=UH;h=i-20|0;m=h;bb=u-30|0;q=bb;g=i+20|0;e=u+30|0;n=d.createLinearGradient(m,q,g,e);n.addColorStop(0.0,"#f5deb3");n.addColorStop(1.0,"#8b4513");UH.fillStyle=n;EW(UH,h,bb,40,60,15);d=UH;n=0.0;d.shadowBlur=n;d=UH;n=0.0;d.shadowOffsetX=n;d=UH;n=0.0;d.shadowOffsetY=n;d=UH;n="#cd853f";d.fillStyle=n;EW(UH,i-10|0,u-20|0,20,40,5);d=UH;n="red";d.fillStyle=n;UH.beginPath();d
=UH;q=i;g=u-10|0;d.arc(q,g,6.0,0.0,6.283185307179586);UH.fill();d=UH;n="blue";d.fillStyle=n;UH.beginPath();d=UH;m=u+10|0;d.arc(q,m,6.0,0.0,6.283185307179586);UH.fill();bc=HT();Y(Bh(Y(bc,B(8)),$rt_globals.window.polyglotInstance.getScore()),B(9));Y(Bh(Y(bc,B(10)),$rt_globals.window.polyglotInstance.getHealth()),B(11));Y(bc,B(12));Y(Bh(Y(bc,B(13)),$rt_globals.window.polyglotInstance.getHealth()*2|0),B(14));Y(bc,B(15));v=$rt_globals.window.polyglotInstance.getWordLockTimer();if(v>0.0){bd=K8(B(16),G(E,[Gk(v|0),
Gk((v*1000.0|0)%1000|0)]));Y(Y(Y(bc,B(17)),bd),B(18));Y(Bh(Y(bc,B(19)),v/15.0*200.0|0),B(20));}c:{Y(bc,B(21));Y(bc,B(22));be=$rt_str($rt_globals.window.polyglotInstance.getActiveLanguagesCsv());bf=$rt_str($rt_globals.window.polyglotInstance.getCurrentLanguage());if(be!==null&&!BP(be)){t=(CT(be,B(7))).data;c=t.length;i=0;while(true){if(i>=c)break c;bg=t[i];if(!BP(LA(bg))){bh=!By(bg,bf)?B(23):B(24);Y(bc,B(25));Y(Y(Y(Y(Y(bc,B(26)),bg),B(27)),bh),B(28));Y(Y(Y(bc,B(29)),bg),B(30));Y(bc,B(21));}i=i+1|0;}}}d:{Y(bc,
B(21));Y(Y(Y(bc,B(31)),$rt_str($rt_globals.window.polyglotInstance.getActiveWord())),B(32));Y(bc,B(33));Y(bc,B(34));bi=$rt_str($rt_globals.window.polyglotInstance.getFoundWords());if(bi!==null&&!BP(bi)){t=(CT(bi,B(7))).data;h=t.length-1|0;while(true){if(h<0)break d;e:{bj=t[h];Y(bc,B(35));bk=$rt_str($rt_globals.window.polyglotInstance.getWordLanguages($rt_ustr(bj)));if(bk!==null&&!BP(bk)){y=(CT(bk,B(7))).data;c=y.length;i=0;while(true){if(i>=c)break e;bl=y[i];if(!BP(bl))Y(Y(Y(bc,B(26)),bl),B(36));i=i+1|0;}}}Y(Y(Y(bc,
B(37)),bj),B(38));h=h+(-1)|0;}}}Y(bc,B(21));d=UI;n=$rt_ustr(CA(bc));d.innerHTML=n;}
function Jj(b,c){var d,e;BI();d=O(b)<=0?0:Hu(b,0);if(d<688)return B(39);e=BJ(Bq,6).data;e[0]=B(40);e[1]=B(41);e[2]=B(42);e[3]=B(43);e[4]=B(44);e[5]=B(45);return e[(d+c|0)%e.length|0];}
function EW(b,c,d,e,f,g){var h,i,j,k,l,m,n;BI();b.beginPath();h=c+g|0;i=d;b.moveTo(h,i);e=c+e|0;j=e-g|0;b.lineTo(j,i);k=e;l=d+g|0;b.quadraticCurveTo(k,i,k,l);d=d+f|0;m=d-g|0;b.lineTo(k,m);n=d;b.quadraticCurveTo(k,n,j,n);b.lineTo(h,n);j=c;b.quadraticCurveTo(j,n,j,m);b.lineTo(j,l);b.quadraticCurveTo(j,i,h,i);b.closePath();b.fill();}
function Jg(b,c,d){var e,f,g,h,i,j,k,l,m;BI();a:{e=UH;f="rgba(0,0,0,0.5)";e.shadowColor=f;e=UH;f=8.0;e.shadowBlur=f;e=UH;f=3.0;e.shadowOffsetX=f;e=UH;f=3.0;e.shadowOffsetY=f;UH.beginPath();switch(b){case 0:e=UH;g=c-5|0;h=d-5|0;i=c;j=d;k=e.createRadialGradient(g,h,2.0,i,j,20.0);k.addColorStop(0.0,"#aaaaaa");k.addColorStop(1.0,"#555555");UH.fillStyle=k;UH.arc(i,j,20.0,0.0,6.283185307179586);UH.fill();break a;case 1:e=UH;l=c-10|0;m=l;d=d-40|0;g=d;h=c+10|0;f=e.createLinearGradient(m,g,h,g);f.addColorStop(0.0,"#8b4513");f.addColorStop(0.5,
"#a0522d");f.addColorStop(1.0,"#5c3317");UH.fillStyle=f;EW(UH,l,d,20,80,5);break a;case 2:break;case 3:e=UH;f="#32cd32";e.fillStyle=f;e=UH;m=c-20|0;g=d+20|0;e.moveTo(m,g);e=UH;h=c+20|0;e.lineTo(h,g);e=UH;h=c;i=d-20|0;e.lineTo(h,i);UH.fill();e=UH;f="#7cfc00";e.fillStyle=f;UH.beginPath();UH.moveTo(h,i);UH.lineTo(m,g);UH.lineTo(h,g);UH.fill();break a;default:break a;}e=UH;f="transparent";e.shadowColor=f;e=UH;f="rgba(135,206,250,0.5)";e.fillStyle=f;e=UH;m=c;g=d;e.arc(m,g,30.0,0.0,6.283185307179586);UH.fill();}e
=UH;f="transparent";e.shadowColor=f;e=UH;f=0.0;e.shadowBlur=f;e=UH;f=0.0;e.shadowOffsetX=f;e=UH;f=0.0;e.shadowOffsetY=f;}
function OU(){UF=$rt_globals.window.document;UL=0;UM=0;UN=0;UO=(-1);UP=G(Bq,[B(2),B(46),B(47),B(48),B(49),B(50),B(51),B(52),B(53),B(54),B(55),B(56),B(57),B(58),B(59),B(60),B(61),B(62),B(63),B(64),B(65),B(66),B(67)]);UQ=G(Bq,[B(68),B(69),B(70),B(71),B(72),B(73),B(74),B(75),B(76),B(77),B(78),B(79),B(80),B(81),B(82),B(83),B(84),B(85),B(86),B(87),B(88),B(89),B(90)]);UR=0.0;}
var F3=H(0);
var FE=H(0);
function H0(){E.call(this);this.b_=null;}
function Ju(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new H0;c.b_=b;d=c;b.classObject=d;}return c;}
function LT(a){var b,c;b=FH(a);c=new T;W(c);Bh(N(c,B(91)),b);return S(c);}
function D_(a){return a.b_.$meta.primitive?1:0;}
function DM(a){return Ju(a.b_.$meta.item);}
var J$=H();
function Cg(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function EK(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var JT=H();
function Mh(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Jx(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Jx(d[e],c))return 1;e=e+1|0;}return 0;}
function DG(){var a=this;E.call(a);a.df=null;a.fE=null;a.c$=0;a.dW=0;}
function US(a){var b=new DG();Bc(b,a);return b;}
function Bc(a,b){a.c$=1;a.dW=1;a.df=b;}
function P6(a){return a;}
function Ph(a){return a.df;}
function Pp(a){var b;b=a.fE;if(b===a)b=null;return b;}
var Ct=H(DG);
function UT(){var a=new Ct();Z(a);return a;}
function Z(a){a.c$=1;a.dW=1;}
var Bx=H(Ct);
function UU(){var a=new Bx();Jk(a);return a;}
function Uc(a){var b=new Bx();Rf(b,a);return b;}
function Jk(a){Z(a);}
function Rf(a,b){Bc(a,b);}
var Ls=H(Bx);
var BZ=H(0);
var Ce=H(0);
var Fe=H(0);
function Bq(){var a=this;E.call(a);a.B=null;a.cj=0;}
var UV=null;var UW=null;var UX=null;function CU(){CU=Bt(Bq);QL();}
function Ep(a){var b=new Bq();EB(b,a);return b;}
function G6(a,b,c){var d=new Bq();IZ(d,a,b,c);return d;}
function EB(a,b){CU();IZ(a,b,0,b.data.length);}
function IZ(a,b,c,d){var e;CU();e=BU(d);a.B=e;EE(b,c,e,0,d);}
function I(a,b){var c,d;if(b>=0){c=a.B.data;if(b<c.length)return c[b];}d=new DE;Z(d);L(d);}
function Hu(a,b){var c;a:{if(b<(O(a)-1|0)&&BG(I(a,b))){c=b+1|0;if(BS(I(a,c))){b=Cy(I(a,b),I(a,c));break a;}}b=I(a,b);}return b;}
function O(a){return a.B.data.length;}
function BP(a){return a.B.data.length?0:1;}
function GB(a,b,c){var d,e,f;if((c+O(b)|0)>O(a))return 0;d=0;while(d<O(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IK(a,b){if(a===b)return 1;return GB(a,b,0);}
function CK(a,b,c){var d,e,f,g,h;d=B7(0,c);if(b<65536){e=b&65535;while(true){f=a.B.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=El(b);h=D9(b);while(true){f=a.B.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Dl(a,b,c){var d,e,f,g,h;d=BT(c,O(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.B.data[d]==e)break;d=d+(-1)|0;}return d;}f=El(b);g=D9(b);while(true){if(d<1)return (-1);h=a.B.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Kx(a,b,c){var d,e,f;d=B7(0,c);e=O(a)-O(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=O(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function BM(a,b,c){var d,e;d=Ci(b,c);if(d>0){e=new BA;Z(e);L(e);}if(!d){CU();return UW;}if(!b&&c==O(a))return a;return G6(a.B,b,c-b|0);}
function DB(a,b){return BM(a,b,O(a));}
function HN(a,b,c){return BM(a,b,c);}
function LA(a){var b,c;b=0;c=O(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return BM(a,b,c+1|0);}
function N7(a){return a;}
function Fm(a){var b,c,d,e,f;b=a.B.data;c=BU(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DJ(b){var c,d;CU();c=new Bq;d=BU(1);d.data[0]=b;EB(c,d);return c;}
function Gg(b){var c;CU();c=new T;W(c);return S(Bh(c,b));}
function By(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bq))return 0;c=b;if(O(c)!=O(a))return 0;d=0;while(d<O(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gi(a){var b,c,d,e;a:{if(!a.cj){b=a.B.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cj=(31*a.cj|0)+e|0;d=d+1|0;}}}return a.cj;}
function CT(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(b===null){b=new CG;Bc(b,B(92));L(b);}UY=1;c=new Ii;c.dd=BJ(BR,10);c.bO=(-1);c.bv=(-1);c.F=(-1);d=new Dk;d.bu=1;d.L=b;d.y=BU(O(b)+2|0);EE(Fm(b),0,d.y,0,O(b));e=d.y.data;f=e.length;e[f-1|0]=0;e[f-2|0]=0;d.ea=f;d.bU=0;CW(d);CW(d);c.c=d;c.be=0;c.cQ=IQ(c,(-1),0,null);if(!Cc(c.c)){b=new Eb;c=c.c;ED(b,B(93),c.L,c.Y);L(b);}if(c.er)c.cQ.bp();b=Go();d=new FA;d.cD=(-1);d.dt=(-1);d.gS=c;d.e5=c.cQ;d.cJ=a;d.cD=0;g=O(a);d.dt=g;h=new Hl;i=d.cD;j=c.bO;f=c.bv+1|0;k=c.F+1|0;h.b$=(-1);l
=j+1|0;h.eQ=l;h.bf=BY(l*2|0);e=BY(k);h.cI=e;EP(e,(-1));if(f>0)h.dV=BY(f);EP(h.bf,(-1));IJ(h,a,i,g);d.S=h;h.bD=1;f=0;j=0;if(!O(a)){e=BJ(Bq,1);e.data[0]=B(93);}else{while(true){l=O(d.cJ);if(!Js(d))l=d.dt;c=d.S;if(c.bo>=0&&KV(c)==1){c=d.S;c.bo=Eq(c);if(Eq(d.S)==JZ(d.S)){c=d.S;c.bo=c.bo+1|0;}g=d.S.bo;g=g<=l&&FJ(d,g)?1:0;}else g=FJ(d,d.cD);if(!g)break;f=f+1|0;BK(b,HN(a,j,Ll(d)));j=KF(d);}BK(b,HN(a,j,O(a)));m=f+1|0;a:{while(true){m=m+(-1)|0;if(m<0)break;if(O(Ca(b,m)))break a;Hv(b,m);}}if(m<0)m=0;e=HI(b,BJ(Bq,m));}return e;}
function K8(b,c){var d,e,f,$$je;CU();d=new HL;e=F8();f=new T;W(f);d.cq=f;d.gI=e;Im(d);a:{try{if(c===null)c=BJ(E,1);Kq(TU(d,d.cq,e,b,c));break a;}catch($$e){$$je=Da($$e);if($$je instanceof GD){b=$$je;}else{throw $$e;}}d.hn=b;}Im(d);return S(d.cq);}
function QL(){var b,c;b=BU(0);UV=b;c=new Bq;CU();c.B=b;UW=c;UX=new Hy;}
var DC=H(DG);
var DK=H(DC);
var K9=H(DK);
var BX=H();
function CP(){BX.call(this);this.bW=0;}
var UZ=null;var U0=null;function Qt(a){var b=new CP();Ku(b,a);return b;}
function Ku(a,b){a.bW=b;}
function IX(b){return Eu(b,4);}
function Dp(b){return (Gc(TQ(20),b,10)).ba();}
function DV(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Bw;Bc(b,B(94));L(b);}d=O(b);if(0==d){b=new Bw;Bc(b,B(95));L(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Bw;Z(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=He(I(b,f));if(i<0){j=new Bw;k=BM(b,0,d);b=new T;W(b);N(N(b,B(96)),k);Bc(j,S(b));L(j);}if(i>=c){j=new Bw;l=BM(b,0,d);b=new T;W(b);N(N(Bh(N(b,B(97)),c),B(98)),l);Bc(j,S(b));L(j);}g=CJ(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Bw;k=BM(b,0,d);b=new T;W(b);N(N(b,B(99)),k);Bc(j,S(b));L(j);}b=new Bw;j=new T;W(j);Bh(N(j,B(100)),c);Bc(b,S(j));L(b);}
function Kn(b){return DV(b,10);}
function Gk(b){var c,d;if(b>=(-128)&&b<=127){a:{if(U0===null){U0=BJ(CP,256);c=0;while(true){d=U0.data;if(c>=d.length)break a;d[c]=Qt(c-128|0);c=c+1|0;}}}return U0.data[b+128|0];}return Qt(b);}
function Jv(a){return a.bW;}
function EI(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Dn(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function KD(){UZ=F($rt_intcls());}
function Dy(){var a=this;E.call(a);a.t=null;a.k=0;}
function U1(){var a=new Dy();W(a);return a;}
function TQ(a){var b=new Dy();Di(b,a);return b;}
function W(a){Di(a,16);}
function Di(a,b){a.t=BU(b);}
function Gc(a,b,c){return Lf(a,a.k,b,c);}
function Lf(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)BF(a,b,b+1|0);else{BF(a,b,b+2|0);f=a.t.data;g=b+1|0;f[b]=45;b=g;}a.t.data[b]=CF(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=CJ(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;BF(a,b,b+i|0);if(e)e=b;else{f=a.t.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.t.data;b=e+1|0;f[e]=CF($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Ks(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Ci(c,0.0);if(!d){if(1.0/c===Infinity){BF(a,b,b+3|0);e=a.t.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}BF(a,b,b+4|0);e=a.t.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){BF(a,b,b+3|0);e=a.t.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){BF(a,b,b+8|0);d=b;}else{BF(a,b,b+9|0);e=a.t.data;d=b+1|0;e[b]=45;}e=a.t.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=U2;Lj(c,f);g=f.cR;h=f.c8;i=f.ep;j=1;k=1;if(i)k=2;l=18;m=NX(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=B7(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;BF(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.t.data;k=b+1|0;e[b]=45;}p=C(1569325056, 23283064);if(o){e=a.t.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(PJ(p,BN))d=0;else{d=D3(J8(g,p));g=Ml(g,p);}e=a.t.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=J8(p,U(10));q=q+1|0;}if(h){e=a.t.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function NX(b){var c,d,e,f,g;c=U(1);d=0;e=16;f=U3.data;g=f.length-1|0;while(g>=0){if(CO(Ml(b,Bp(c,f[g])),BN)){d=d|e;c=Bp(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Bv(a,b){return a.dA(a.k,b);}
function IB(a,b,c){BF(a,b,b+1|0);a.t.data[b]=c;return a;}
function EM(a,b){var c,d;c=a.t.data.length;if(c>=b)return;d=c>=1073741823?2147483647:B7(b,B7(c*2|0,5));a.t=Jw(a.t,d);}
function S(a){return G6(a.t,0,a.k);}
function F0(a,b){var c;if(b>=0&&b<a.k)return a.t.data[b];c=new BA;Z(c);L(c);}
function Iq(a,b,c,d){return a.c7(a.k,b,c,d);}
function F1(a,b,c,d,e){var f,g,h,i;BF(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.t.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function DW(a,b){return a.dF(b,0,b.data.length);}
function BF(a,b,c){var d,e,f,g;d=a.k;e=d-b|0;a.cd((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.t.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.k=a.k+(c-b|0)|0;}
var E_=H(0);
var T=H(Dy);
function HT(){var a=new T();RG(a);return a;}
function RG(a){W(a);}
function N(a,b){IY(a,a.k,b===null?B(101):b.ba());return a;}
function Y(a,b){IY(a,a.k,b);return a;}
function Bh(a,b){Gc(a,b,10);return a;}
function Kk(a,b){Ks(a,a.k,b);return a;}
function CV(a,b){Bv(a,b);return a;}
function Cx(a,b){var c,d,e,f,g;c=0;d=b.dr();e=a.k;if(c<=d&&d<=b.dr()){BF(a,e,(e+d|0)-c|0);while(c<d){f=a.t.data;g=e+1|0;f[e]=b.de(c);c=c+1|0;e=g;}return a;}b=new BA;Jk(b);L(b);}
function K7(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Ci(b,c);if(d<=0){e=a.k;if(b<=e){if(d){if(c>e)c=e;f=e-c|0;a.k=e-(c-b|0)|0;e=0;while(e<f){g=a.t.data;d=b+1|0;h=c+1|0;g[b]=g[c];e=e+1|0;b=d;c=h;}}return a;}}}i=new DE;Z(i);L(i);}
function HQ(a,b){var c,d,e,f;if(b>=0){c=a.k;if(b<c){c=c-1|0;a.k=c;while(b<c){d=a.t.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new DE;Z(f);L(f);}
function R8(a,b,c,d,e){F1(a,b,c,d,e);return a;}
function Px(a,b,c,d){Iq(a,b,c,d);return a;}
function QD(a,b){return F0(a,b);}
function Gs(a){return a.k;}
function CA(a){return S(a);}
function Sh(a,b){EM(a,b);}
function L0(a,b,c){IB(a,b,c);return a;}
function IY(a,b,c){var d,e,f;if(b>=0&&b<=a.k){a:{if(c===null)c=B(101);else if(BP(c))break a;EM(a,a.k+O(c)|0);d=a.k-1|0;while(d>=b){a.t.data[d+O(c)|0]=a.t.data[d];d=d+(-1)|0;}a.k=a.k+O(c)|0;d=0;while(d<O(c)){e=a.t.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new DE;Z(c);L(c);}
var Dv=H(DK);
var JF=H(Dv);
function U4(a){var b=new JF();Oe(b,a);return b;}
function Oe(a,b){Bc(a,b);}
var KX=H(Dv);
function U5(a){var b=new KX();Oz(b,a);return b;}
function Oz(a,b){Bc(a,b);}
var JL=H();
function SH(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ES(b)&&(e+f|0)<=ES(d)){a:{b:{if(b!==d){g=DM(CN(b));h=DM(CN(d));if(g!==null&&h!==null){if(g===h)break b;if(!D_(g)&&!D_(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.b_;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&Jx(n.constructor,o)?1:0)){Fo(b,c,d,e,j);b=new Ea;Z(b);L(b);}j=j+1|0;k=m;}Fo(b,c,d,e,f);return;}if(!D_(g))break a;if(D_(h))break b;else break a;}b=new Ea;Z(b);L(b);}}Fo(b,c,d,
e,f);return;}b=new Ea;Z(b);L(b);}b=new BA;Z(b);L(b);}d=new CG;Bc(d,B(102));L(d);}
function EE(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ES(b)&&(e+f|0)<=ES(d)){Fo(b,c,d,e,f);return;}b=new BA;Z(b);L(b);}
function Fo(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var Ko=H();
function Eu(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(103);d=1<<c;e=d-1|0;f=(((32-EI(b)|0)+c|0)-1|0)/c|0;g=BU(f);h=g.data;i=CJ(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=CF((b>>>i|0)&e,d);i=i-c|0;j=k;}return Ep(g);}
var B9=H(0);
var CI=H(0);
var Hs=H(0);
var Iy=H(0);
var Ip=H(0);
var Ge=H(0);
var Is=H(0);
var G5=H(0);
var GX=H(0);
var G_=H(0);
var Jt=H();
function Nn(a,b){b=a.f_(b);Fg();return b===null?null:b instanceof $rt_objcls()&&b instanceof Cv?EY(b):b;}
function PT(a,b,c){a.iF($rt_str(b),EK(c,"handleEvent"));}
function Ps(a,b,c){a.jN($rt_str(b),EK(c,"handleEvent"));}
function Nj(a,b,c,d){a.iN($rt_str(b),EK(c,"handleEvent"),d?1:0);}
function Rd(a,b){return !!a.iK(b);}
function Oo(a){return a.i9();}
function Me(a,b,c,d){a.kN($rt_str(b),EK(c,"handleEvent"),d?1:0);}
var Cw=H(0);
var HK=H();
function Og(a,b){BI();if(UL)UK.play();}
var HJ=H();
function OC(a,b){BI();UK.pause();}
var IC=H(0);
var Hy=H();
var BA=H(Bx);
var Jm=H();
function ES(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(U6());}return b.data.length;}
function JY(b,c){if(b===null){b=new CG;Z(b);L(b);}if(b===F($rt_voidcls())){b=new Bg;Z(b);L(b);}if(c>=0)return Rm(b.b_,c);b=new I0;Z(b);L(b);}
function Rm(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CG=H(Bx);
var Ea=H(Bx);
var BW=H();
var U7=null;var U8=null;var U9=null;var U$=null;var U_=null;var Va=null;var Vb=null;var Vc=null;var Vd=null;var Ve=null;function If(b){var c,d;c=new Bq;d=BU(1);d.data[0]=b;EB(c,d);return c;}
function Fa(b){return b>=65536&&b<=1114111?1:0;}
function BG(b){return (b&64512)!=55296?0:1;}
function BS(b){return (b&64512)!=56320?0:1;}
function It(b){return !BG(b)&&!BS(b)?0:1;}
function DO(b,c){return BG(b)&&BS(c)?1:0;}
function Cy(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function El(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function D9(b){return (56320|b&1023)&65535;}
function CQ(b){return Dh(b)&65535;}
function Dh(b){if(U$===null){if(Vb===null)Vb=JR();U$=I_(K4((Vb.value!==null?$rt_str(Vb.value):null)));}return HO(U$,b);}
function Ch(b){return De(b)&65535;}
function De(b){if(U9===null){if(Vc===null)Vc=KG();U9=I_(K4((Vc.value!==null?$rt_str(Vc.value):null)));}return HO(U9,b);}
function HO(b,c){var d,e,f,g,h,i;d=b.d9.data;if(c<d.length)return c+d[c]|0;d=b.fQ.data;e=0;f=d.length;g=(f/2|0)-1|0;a:{while(true){h=(e+g|0)/2|0;i=Ci(d[h*2|0],c);if(!i)break;if(i<=0){e=h+1|0;if(e>g)break a;}else{h=h-1|0;if(h<e)break a;g=h;}}}if(h>=0){h=h*2|0;if(h<f)return c+d[h+1|0]|0;}return 0;}
function G4(b,c){if(c>=2&&c<=36){b=He(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function He(b){var c,d,e,f,g,h,i,j,k,l;if(U8===null){if(Vd===null)Vd=K_();c=(Vd.value!==null?$rt_str(Vd.value):null);d=Pr(Fm(c));e=ER(d);f=BY(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+F4(d)|0;j=j+F4(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}U8=f;}g=U8.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=Ci(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function CF(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function C_(b){var c;if(b<65536){c=BU(1);c.data[0]=b&65535;return c;}return TO([El(b),D9(b)]);}
function BB(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&It(b&65535))return 19;if(U_===null){if(Ve===null)Ve=LF();d=(Ve.value!==null?$rt_str(Ve.value):null);e=BJ(F$,16384);f=e.data;g=OI(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<O(d)){m=Fn(I(d,l));if(m==64){l=l+1|0;m=Fn(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|CJ(c,Fn(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Fn(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=Qc(k,k+i|0,K1(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else{c
=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=Qc(k,k+i|0,K1(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}U_=Lh(e,j);}e=U_.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.d7)o=p+1|0;else{c=d.e9;if(b>=c)return d.fa.data[b-c|0];c=p-1|0;}}return 0;}
function EH(b){a:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function DA(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return BB(b)!=16?0:1;}
function Hx(b){switch(BB(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ij(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Hx(b);}return 1;}
function Jq(){U7=F($rt_charcls());Va=BJ(BW,128);}
function JR(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function KG(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function K_(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function LF(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var HM=H();
function PP(a,b){BI();UL=1;UK.play();J7();}
function Cv(){E.call(this);this.ew=null;}
var Vf=null;var Vg=null;var Vh=null;var Vi=null;var Vj=null;var Vk=null;var Vl=null;function Fg(){Fg=Bt(Cv);Ox();}
function Ez(a){var b=new Cv();Jd(b,a);return b;}
function Jd(a,b){Fg();a.ew=b;}
function Lw(b){var c,d,e,f,g,h,i;Fg();if(b===null)return null;c=b;d=$rt_str(typeof c);e=!By(d,B(104))&&!By(d,B(105))?0:1;if(e&&b[Vm]===true)return b;b=Vg;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Ez(c);Vg.set(c,new $rt_globals.WeakRef(h));return h;}if(By(d,B(106))){f=Vh.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Ez(c);i=h;Vh.set(c,new $rt_globals.WeakRef(i));Gh(Vk,i,c);return h;}if
(By(d,B(107))){f=Vi.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Ez(c);i=h;Vi.set(c,new $rt_globals.WeakRef(i));Gh(Vl,i,c);return h;}if(By(d,B(108))){f=Vj;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=Ez(c);Vj=new $rt_globals.WeakRef(h);return h;}}return Ez(c);}
function EY(b){Fg();if(b===null)return null;return !(b[Vm]===true)?b.ew:b;}
function FM(b){Fg();if(b===null)return null;return b instanceof $rt_objcls()?b:Lw(b);}
function Ox(){Vf=new $rt_globals.WeakMap();Vg=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();Vh=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Vi=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Vk=Vh===null?null:new $rt_globals.FinalizationRegistry(Cg(new FX,"accept"));Vl=Vi===null?null:new $rt_globals.FinalizationRegistry(Cg(new FW,"accept"));}
function Gh(b,c,d){return b.register(c,d);}
var Li=H();
var KU=H();
var LL=H();
var EZ=H(0);
var FX=H();
function QT(a,b){var c;b=FM(b);c=Vh;b=EY(b);c.delete(b);}
var K6=H();
var FW=H();
function M5(a,b){var c;b=FM(b);c=Vi;b=EY(b);c.delete(b);}
var LP=H();
var DE=H(BA);
var LC=H();
function S5(){var a=new LC();Sf(a);return a;}
function Sf(a){}
function So(a,b){var c,d,e,f,g,h,i,j;BI();b=Go();c=UP.data;d=c.length;e=0;while(e<d){f=c[e];g=UF;h=new T;W(h);N(N(h,B(1)),f);h=S(h);i=g.getElementById($rt_ustr(h));if(i!==null&&By(B(109),$rt_str(i.getAttribute("data-selected"))))BK(b,f);e=e+1|0;}if(b.H?0:1)BK(b,B(2));CU();b=E4(b);if(!DS(b))b=B(93);else{j=new T;W(j);Cx(j,D7(b));while(DS(b)){Cx(j,B(7));Cx(j,D7(b));}b=S(j);}$rt_globals.window.polyglotInstance.setLanguages($rt_ustr(b));$rt_globals.window.polyglotInstance.startGame();JC();}
function LD(){E.call(this);this.eD=null;}
function Tp(a){var b=new LD();Of(b,a);return b;}
function Of(a,b){a.eD=b;}
function MG(a,b){b=a.eD;BI();if(!By(B(109),$rt_str(b.getAttribute("data-selected")))){b.setAttribute("data-selected","true");b.style.setProperty("border-color","#00ff00");b.style.setProperty("background-color","#226622");}else{b.setAttribute("data-selected","false");b.style.setProperty("border-color","#ccc");b.style.setProperty("background-color","#444");}}
var HR=H(0);
var EL=H(0);
var En=H();
function HI(a,b){var c,d,e,f,g,h;c=b.data;d=a.H;e=c.length;if(e<d)b=JY(DM(CN(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=E4(a);while(DS(f)){g=b.data;h=e+1|0;g[e]=D7(f);e=h;}return b;}
var IR=H(0);
var FR=H(0);
function EO(){En.call(this);this.bw=0;}
function E4(a){var b;b=new Gf;b.ex=a;b.ff=a.bw;b.fi=a.H;b.ec=(-1);return b;}
var Co=H(0);
var Gx=H(0);
function JI(){var a=this;EO.call(a);a.br=null;a.H=0;}
function Go(){var a=new JI();Qm(a);return a;}
function Qm(a){a.br=BJ(E,10);}
function Ga(a,b){var c,d;c=a.br.data.length;if(c<b){d=c>=1073741823?2147483647:B7(b,B7(c*2|0,5));a.br=Lh(a.br,d);}}
function Ca(a,b){FP(a,b);return a.br.data[b];}
function BK(a,b){var c,d;Ga(a,a.H+1|0);c=a.br.data;d=a.H;a.H=d+1|0;c[d]=b;a.bw=a.bw+1|0;return 1;}
function Hv(a,b){var c,d,e,f;FP(a,b);c=a.br.data;d=c[b];e=a.H-1|0;a.H=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bw=a.bw+1|0;return d;}
function FP(a,b){var c;if(b>=0&&b<a.H)return;c=new BA;Z(c);L(c);}
var I$=H();
function Q9(){return $rt_globals.window.polyglotInstance.reset();}
var Kf=H();
function TB(){var a=new Kf();PB(a);return a;}
function PB(a){}
function Pa(a,b){var c;BI();$rt_globals.window;$rt_globals.clearInterval(UO);UO=(-1);b=UF.getElementById("game-background-music");if(b!==null){b.pause();c=0.0;b.currentTime=c;}Q9();Et();}
var Kd=H();
function Tc(){var a=new Kd();RZ(a);return a;}
function RZ(a){}
function Nh(a,b){BI();if(By($rt_str(b.key),B(110)))UM=1;if(By($rt_str(b.key),B(111)))UN=1;}
var Kc=H();
function T2(){var a=new Kc();Om(a);return a;}
function Om(a){}
function RU(a,b){BI();if(By($rt_str(b.key),B(110)))UM=0;if(By($rt_str(b.key),B(111)))UN=0;}
var Iv=H(0);
var Ke=H();
function SD(){var a=new Ke();Mt(a);return a;}
function Mt(a){}
function R1(a){var b,c;BI();if(By(B(112),$rt_str($rt_globals.window.polyglotInstance.getStatus()))){if(UM)$rt_globals.window.polyglotInstance.moveRaft((-0.014999999664723873));if(UN)$rt_globals.window.polyglotInstance.moveRaft(0.014999999664723873);$rt_globals.window.polyglotInstance.update(0.01600000075995922);KO();}else if(By(B(113),$rt_str($rt_globals.window.polyglotInstance.getStatus()))){$rt_globals.window;$rt_globals.clearInterval(UO);UO=(-1);$rt_globals.window;b=$rt_globals.window.polyglotInstance.getScore();c
=new T;W(c);Bh(N(c,B(114)),b);$rt_globals.alert($rt_ustr(S(c)));Et();}}
var Bg=H(Bx);
var Ho=H(0);
function Gf(){var a=this;E.call(a);a.dD=0;a.ff=0;a.fi=0;a.ec=0;a.ex=null;}
function DS(a){return a.dD>=a.fi?0:1;}
function D7(a){var b,c,d;b=a.ff;c=a.ex;if(b<c.bw){c=new H1;Z(c);L(c);}d=a.dD;a.ec=d;a.dD=d+1|0;return Ca(c,d);}
var Lc=H();
function Qg(b){return Math.sin(b);}
function ML(){return Sb();}
function Sb(){return Math.random();}
function BT(b,c){if(b<c)c=b;return c;}
function B7(b,c){if(b>c)c=b;return c;}
function L$(b){if(b<0)b= -b|0;return b;}
var Iw=H(BX);
var Vn=null;function DN(b){var c,d,e,f,g,h,i,j,k,l,m;if(BP(b)){b=new Bw;Z(b);L(b);}c=0;d=O(b);while(true){if(I(b,c)>32){while(I(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(I(b,c)==45){c=c+1|0;e=1;}else if(I(b,c)==43)c=c+1|0;if(c==d){b=new Bw;Z(b);L(b);}a:{f=I(b,c);g=0;h=(-1);i=100000000;j=0;if(f!=46){j=1;if(f>=48&&f<=57){b:{while(c<d){if(I(b,c)!=48)break b;c=c+1|0;}}while(c<d){k=I(b,c);if(k<48)break a;if(k>57)break a;if(i>0){g=g+CJ(i,k-48|0)|0;i=$rt_udiv(i,10);}h=h+1|0;c=c+1|0;}}else{b=new Bw;Z(b);L(b);}}}if(c<d&&I(b,
c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;f=I(b,c);k=Ci(f,48);if(k<0)break c;if(f>57)break;if(!g&&!k)h=h+(-1)|0;else if(i>0){g=g+CJ(i,f-48|0)|0;i=$rt_udiv(i,10);}c=c+1|0;j=1;}}if(!j){b=new Bw;Z(b);L(b);}}if(c<d){f=I(b,c);if(f!=101&&f!=69){b=new Bw;Z(b);L(b);}f=c+1|0;l=0;if(f==d){b=new Bw;Z(b);L(b);}if(I(b,f)==45){f=f+1|0;l=1;}else if(I(b,f)==43)f=f+1|0;m=0;c=0;d:{while(true){if(f>=d)break d;i=I(b,f);if(i<48)break d;if(i>57)break;m=(10*m|0)+(i-48|0)|0;c=1;f=f+1|0;}}if(!c){b=new Bw;Z(b);L(b);}if(l)m= -m|
0;h=h+m|0;}return Ln(g,h,e);}c=c+1|0;if(c==d)break;}b=new Bw;Z(b);L(b);}
function JM(){Vn=F($rt_floatcls());}
var Bw=H(Bg);
var Ev=H();
var Vo=null;var Vp=null;function Ln(b,c,d){var e,f,g,h,i,j;e=50+c|0;if(b){f=Vo.data;if(e<=f.length&&e>=0){g=UE(Bp(B8(U(b),C(4294967295, 0)),B8(U(f[e]),C(4294967295, 0))));h=Vp.data[e]-1|0;i=(32-EI(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){b=b>>BT(( -c|0)+1|0,32);c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return $rt_intBitsToFloat(j);}}return $rt_intBitsToFloat(!d?0:(-2147483648));}
function JW(){Vo=C1([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);Vp=C1([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
var IP=H(0);
var F7=H(0);
var G1=H(0);
function HL(){var a=this;E.call(a);a.gI=null;a.cq=null;a.hn=null;}
function Im(a){var b;if(a.cq!==null)return;b=new Fw;Z(b);L(b);}
var D4=H();
var Vq=0;var Vr=null;var Vs=null;function KI(){Vq=$rt_udiv((-1),10);Vr=C1([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),
(-1519409735),(-2074521247),(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),
(-1933784055),(-517074110),(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Vs=C1([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,
52,56,59,62,65,69,72,75,79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Bm(){var a=this;E.call(a);a.cb=null;a.b3=null;a.eZ=null;}
var Vt=null;var Vu=null;var Vv=null;var Vw=null;var Vx=null;var Vy=null;var Vz=null;var VA=null;var VB=null;var VC=null;var VD=null;var VE=null;var VF=null;var VG=null;var VH=null;var VI=null;var VJ=null;var VK=null;var VL=null;var VM=null;var VN=null;var VO=null;var VP=null;function Je(){Je=Bt(Bm);RA();}
function Bu(a,b){var c=new Bm();Ly(c,a,b);return c;}
function S9(a,b,c){var d=new Bm();Hd(d,a,b,c);return d;}
function Ly(a,b,c){Je();Hd(a,b,c,B(93));}
function Hd(a,b,c,d){Je();if(b!==null&&c!==null&&d!==null){if(!O(b)&&!O(c)){a.b3=B(93);a.cb=B(93);a.eZ=d;return;}a.b3=b;a.cb=c;a.eZ=d;return;}b=new CG;Z(b);L(b);}
function F8(){Je();return Vt;}
function RA(){var b,c;Vu=Bu(B(2),B(115));Vv=Bu(B(49),B(115));Vw=Bu(B(47),B(116));Vx=Bu(B(47),B(93));Vy=Bu(B(2),B(93));Vz=Bu(B(49),B(117));VA=Bu(B(49),B(93));VB=Bu(B(56),B(93));VC=Bu(B(56),B(118));VD=Bu(B(65),B(93));VE=Bu(B(65),B(119));VF=Bu(B(57),B(120));VG=Bu(B(57),B(93));VH=Bu(B(63),B(121));VI=Bu(B(63),B(93));VJ=Bu(B(47),B(116));VK=Bu(B(47),B(116));VL=Bu(B(47),B(122));VM=Bu(B(47),B(122));VN=Bu(B(2),B(123));VO=Bu(B(2),B(124));VP=Bu(B(93),B(93));if(VQ===null)VQ=M7();b=(VQ.value!==null?$rt_str(VQ.value):null);c
=CK(b,95,0);Vt=S9(BM(b,0,c),DB(b,c+1|0),B(93));}
var Dm=H();
var VR=null;var VQ=null;var VS=null;var VT=null;function J0(b,c){var d;if(!BP(c)){d=new T;W(d);b=N(d,b);Bv(b,45);N(b,c);b=S(d);}return b;}
function Pg(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"tdu":{"value":"tdu-Latn-MY"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"}
,"xmr":{"value":"xmr-Merc-SD"},"tem":{"value":"tem-Latn-SL"},"und-Mroo":{"value":"mro-Mroo-BD"},"teo":{"value":"teo-Latn-UG"},"tet":{"value":"tet-Latn-TL"},"ktm":{"value":"ktm-Latn-ZZ"},"glk":{"value":"glk-Arab-IR"},"kto":{"value":"kto-Latn-ZZ"},"ktr":{"value":"ktr-Latn-MY"},"und-Soyo":{"value":"cmg-Soyo-MN"},"xna":{"value":"xna-Narb-SA"},"tfi":{"value":"tfi-Latn-ZZ"},"kub":{"value":"kub-Latn-ZZ"},"kue":{"value":"kue-Latn-ZZ"},"kud":{"value":"kud-Latn-ZZ"},"xnr":{"value":"xnr-Deva-IN"},"ceb":{"value":"ceb-Latn-PH"}
,"kuj":{"value":"kuj-Latn-ZZ"},"kum":{"value":"kum-Cyrl-RU"},"kun":{"value":"kun-Latn-ZZ"},"gmm":{"value":"gmm-Latn-ZZ"},"kup":{"value":"kup-Latn-ZZ"},"kus":{"value":"kus-Latn-ZZ"},"gmv":{"value":"gmv-Ethi-ZZ"},"tgc":{"value":"tgc-Latn-ZZ"},"xog":{"value":"xog-Latn-UG"},"und-Arab-YT":{"value":"swb-Arab-YT"},"und-Latn-ET":{"value":"en-Latn-ET"},"xon":{"value":"xon-Latn-ZZ"},"ha-CM":{"value":"ha-Arab-CM"},"gnd":{"value":"gnd-Latn-ZZ"},"kvg":{"value":"kvg-Latn-ZZ"},"tgo":{"value":"tgo-Latn-ZZ"},"cfa":{"value":
"cfa-Latn-ZZ"},"gng":{"value":"gng-Latn-ZZ"},"tgu":{"value":"tgu-Latn-ZZ"},"und-Latn-GE":{"value":"ku-Latn-GE"},"kvr":{"value":"kvr-Latn-ID"},"kvx":{"value":"kvx-Arab-PK"},"und-Gujr":{"value":"gu-Gujr-IN"},"thl":{"value":"thl-Deva-NP"},"xpr":{"value":"xpr-Prti-IR"},"thq":{"value":"thq-Deva-NP"},"god":{"value":"god-Latn-ZZ"},"gof":{"value":"gof-Ethi-ZZ"},"kwj":{"value":"kwj-Latn-ZZ"},"ky-Arab":{"value":"ky-Arab-CN"},"thr":{"value":"thr-Deva-NP"},"goi":{"value":"goi-Latn-ZZ"},"cgg":{"value":"cgg-Latn-UG"},"kwo":
{"value":"kwo-Latn-ZZ"},"gom":{"value":"gom-Deva-IN"},"kwq":{"value":"kwq-Latn-ZZ"},"gon":{"value":"gon-Telu-IN"},"gos":{"value":"gos-Latn-NL"},"gor":{"value":"gor-Latn-ID"},"und-Latn-CY":{"value":"tr-Latn-CY"},"got":{"value":"got-Goth-UA"},"tif":{"value":"tif-Latn-ZZ"},"tig":{"value":"tig-Ethi-ER"},"kxa":{"value":"kxa-Latn-ZZ"},"kxc":{"value":"kxc-Ethi-ZZ"},"pag":{"value":"pag-Latn-PH"},"tik":{"value":"tik-Latn-ZZ"},"kxe":{"value":"kxe-Latn-ZZ"},"tim":{"value":"tim-Latn-ZZ"},"pal":{"value":"pal-Phli-IR"},"tio":
{"value":"tio-Latn-ZZ"},"pam":{"value":"pam-Latn-PH"},"und-Marc":{"value":"bo-Marc-CN"},"pap":{"value":"pap-Latn-AW"},"und-Latn-CN":{"value":"za-Latn-CN"},"tiv":{"value":"tiv-Latn-NG"},"kxm":{"value":"kxm-Thai-TH"},"kxp":{"value":"kxp-Arab-PK"},"pau":{"value":"pau-Latn-PW"},"chk":{"value":"chk-Latn-FM"},"chm":{"value":"chm-Cyrl-RU"},"xrb":{"value":"xrb-Latn-ZZ"},"chp":{"value":"chp-Latn-CA"},"cho":{"value":"cho-Latn-US"},"kxw":{"value":"kxw-Latn-ZZ"},"und-Latn-DZ":{"value":"fr-Latn-DZ"},"chr":{"value":"chr-Cher-US"}
,"kxz":{"value":"kxz-Latn-ZZ"},"und-Batk":{"value":"bbc-Batk-ID"},"und-Bass":{"value":"bsq-Bass-LR"},"kye":{"value":"kye-Latn-ZZ"},"pbi":{"value":"pbi-Latn-ZZ"},"und-Deva-MU":{"value":"bho-Deva-MU"},"cic":{"value":"cic-Latn-US"},"und-Sgnw":{"value":"ase-Sgnw-US"},"xsa":{"value":"xsa-Sarb-YE"},"kyx":{"value":"kyx-Latn-ZZ"},"xsi":{"value":"xsi-Latn-ZZ"},"pcd":{"value":"pcd-Latn-FR"},"und-Latn-AM":{"value":"ku-Latn-AM"},"xsm":{"value":"xsm-Latn-ZZ"},"tkl":{"value":"tkl-Latn-TK"},"und-Thai-CN":{"value":"lcp-Thai-CN"}
,"grb":{"value":"grb-Latn-ZZ"},"xsr":{"value":"xsr-Deva-NP"},"und-Latn-AF":{"value":"tk-Latn-AF"},"grc":{"value":"grc-Cprt-CY"},"kzj":{"value":"kzj-Latn-MY"},"tkr":{"value":"tkr-Latn-AZ"},"cja":{"value":"cja-Arab-KH"},"pcm":{"value":"pcm-Latn-NG"},"tkt":{"value":"tkt-Deva-NP"},"und-Olck":{"value":"sat-Olck-IN"},"kzr":{"value":"kzr-Latn-ZZ"},"kzt":{"value":"kzt-Latn-MY"},"cjm":{"value":"cjm-Cham-VN"},"grt":{"value":"grt-Beng-IN"},"und-Arab-TJ":{"value":"fa-Arab-TJ"},"und-Arab-TG":{"value":"apd-Arab-TG"},"und-Arab-TH":
{"value":"mfa-Arab-TH"},"und-Deva-PK":{"value":"btv-Deva-PK"},"grw":{"value":"grw-Latn-ZZ"},"cjv":{"value":"cjv-Latn-ZZ"},"pdc":{"value":"pdc-Latn-US"},"tlf":{"value":"tlf-Latn-ZZ"},"und-Arab-TR":{"value":"az-Arab-TR"},"ckb":{"value":"ckb-Arab-IQ"},"tly":{"value":"tly-Latn-AZ"},"pdt":{"value":"pdt-Latn-CA"},"tlx":{"value":"tlx-Latn-ZZ"},"ckl":{"value":"ckl-Latn-ZZ"},"cko":{"value":"cko-Latn-ZZ"},"gsw":{"value":"gsw-Latn-CH"},"ped":{"value":"ped-Latn-ZZ"},"tmh":{"value":"tmh-Latn-NE"},"cky":{"value":"cky-Latn-ZZ"}
,"kk-Arab":{"value":"kk-Arab-CN"},"und-Runr":{"value":"non-Runr-SE"},"cla":{"value":"cla-Latn-ZZ"},"peo":{"value":"peo-Xpeo-IR"},"tmy":{"value":"tmy-Latn-ZZ"},"pex":{"value":"pex-Latn-ZZ"},"ky-TR":{"value":"ky-Latn-TR"},"tnh":{"value":"tnh-Latn-ZZ"},"guc":{"value":"guc-Latn-CO"},"gub":{"value":"gub-Latn-BR"},"gud":{"value":"gud-Latn-ZZ"},"pfl":{"value":"pfl-Latn-DE"},"cme":{"value":"cme-Latn-ZZ"},"cmg":{"value":"cmg-Soyo-MN"},"gur":{"value":"gur-Latn-GH"},"xwe":{"value":"xwe-Latn-ZZ"},"guw":{"value":"guw-Latn-ZZ"}
,"tof":{"value":"tof-Latn-ZZ"},"gux":{"value":"gux-Latn-ZZ"},"guz":{"value":"guz-Latn-KE"},"tog":{"value":"tog-Latn-MW"},"gvf":{"value":"gvf-Latn-ZZ"},"toq":{"value":"toq-Latn-ZZ"},"gvr":{"value":"gvr-Deva-NP"},"und-Guru":{"value":"pa-Guru-IN"},"gvs":{"value":"gvs-Latn-ZZ"},"tpi":{"value":"tpi-Latn-PG"},"tpm":{"value":"tpm-Latn-ZZ"},"und-Tfng":{"value":"zgh-Tfng-MA"},"gwc":{"value":"gwc-Arab-ZZ"},"und-Arab-PK":{"value":"ur-Arab-PK"},"phl":{"value":"phl-Arab-ZZ"},"und-Aghb":{"value":"lez-Aghb-RU"},"phn":{"value"
:"phn-Phnx-LB"},"gwi":{"value":"gwi-Latn-CA"},"tpz":{"value":"tpz-Latn-ZZ"},"cop":{"value":"cop-Copt-EG"},"gwt":{"value":"gwt-Arab-ZZ"},"lab":{"value":"lab-Lina-GR"},"lad":{"value":"lad-Hebr-IL"},"lah":{"value":"lah-Arab-PK"},"pil":{"value":"pil-Latn-ZZ"},"lag":{"value":"lag-Latn-TZ"},"tqo":{"value":"tqo-Latn-ZZ"},"laj":{"value":"laj-Latn-UG"},"pip":{"value":"pip-Latn-ZZ"},"und-Khmr":{"value":"km-Khmr-KH"},"las":{"value":"las-Latn-ZZ"},"sd-Deva":{"value":"sd-Deva-IN"},"und-Khoj":{"value":"sd-Khoj-IN"},"cps":
{"value":"cps-Latn-PH"},"kk-AF":{"value":"kk-Arab-AF"},"und-Arab-MU":{"value":"ur-Arab-MU"},"lbe":{"value":"lbe-Cyrl-RU"},"und-Arab-NG":{"value":"ha-Arab-NG"},"gyi":{"value":"gyi-Latn-ZZ"},"tru":{"value":"tru-Latn-TR"},"trw":{"value":"trw-Arab-ZZ"},"trv":{"value":"trv-Latn-TW"},"lbu":{"value":"lbu-Latn-ZZ"},"lbw":{"value":"lbw-Latn-ID"},"tsd":{"value":"tsd-Grek-GR"},"tsf":{"value":"tsf-Deva-NP"},"pka":{"value":"pka-Brah-IN"},"tsg":{"value":"tsg-Latn-PH"},"tsj":{"value":"tsj-Tibt-BT"},"und-Deva-FJ":{"value":
"hif-Deva-FJ"},"pko":{"value":"pko-Latn-KE"},"lcm":{"value":"lcm-Latn-ZZ"},"crh":{"value":"crh-Cyrl-UA"},"lcp":{"value":"lcp-Thai-CN"},"tsw":{"value":"tsw-Latn-ZZ"},"crj":{"value":"crj-Cans-CA"},"crl":{"value":"crl-Cans-CA"},"und-Arab-MN":{"value":"kk-Arab-MN"},"crk":{"value":"crk-Cans-CA"},"crm":{"value":"crm-Cans-CA"},"und-Arab-MM":{"value":"rhg-Arab-MM"},"pla":{"value":"pla-Latn-ZZ"},"tte":{"value":"tte-Latn-ZZ"},"crs":{"value":"crs-Latn-SC"},"ttd":{"value":"ttd-Latn-ZZ"},"ldb":{"value":"ldb-Latn-ZZ"},"ttj":
{"value":"ttj-Latn-UG"},"kk-CN":{"value":"kk-Arab-CN"},"und-Yiii":{"value":"ii-Yiii-CN"},"tts":{"value":"tts-Thai-TH"},"csb":{"value":"csb-Latn-PL"},"ttr":{"value":"ttr-Latn-ZZ"},"ttt":{"value":"ttt-Latn-AZ"},"csw":{"value":"csw-Cans-CA"},"tuh":{"value":"tuh-Latn-ZZ"},"led":{"value":"led-Latn-ZZ"},"tul":{"value":"tul-Latn-ZZ"},"lee":{"value":"lee-Latn-ZZ"},"tum":{"value":"tum-Latn-MW"},"und-Arab-KH":{"value":"cja-Arab-KH"},"tuq":{"value":"tuq-Latn-ZZ"},"ctd":{"value":"ctd-Pauc-MM"},"lem":{"value":"lem-Latn-ZZ"}
,"lep":{"value":"lep-Lepc-IN"},"pms":{"value":"pms-Latn-IT"},"leq":{"value":"leq-Latn-ZZ"},"und-Pauc":{"value":"ctd-Pauc-MM"},"und-Sogo":{"value":"sog-Sogo-UZ"},"leu":{"value":"leu-Latn-ZZ"},"lez":{"value":"lez-Cyrl-RU"},"tvd":{"value":"tvd-Latn-ZZ"},"mn-CN":{"value":"mn-Mong-CN"},"sr-TR":{"value":"sr-Latn-TR"},"png":{"value":"png-Latn-ZZ"},"tvl":{"value":"tvl-Latn-TV"},"und-Brah":{"value":"pka-Brah-IN"},"und-Brai":{"value":"fr-Brai-FR"},"pnn":{"value":"pnn-Latn-ZZ"},"tvu":{"value":"tvu-Latn-ZZ"},"pnt":{"value"
:"pnt-Grek-GR"},"uz-CN":{"value":"uz-Cyrl-CN"},"ha-SD":{"value":"ha-Arab-SD"},"twh":{"value":"twh-Latn-ZZ"},"und-Takr":{"value":"doi-Takr-IN"},"lgg":{"value":"lgg-Latn-ZZ"},"pon":{"value":"pon-Latn-FM"},"twq":{"value":"twq-Latn-NE"},"und-Arab-ID":{"value":"ms-Arab-ID"},"und-Arab-IN":{"value":"ur-Arab-IN"},"ppa":{"value":"ppa-Deva-IN"},"txg":{"value":"txg-Tang-CN"},"yam":{"value":"yam-Latn-ZZ"},"und-Talu":{"value":"khb-Talu-CN"},"yao":{"value":"yao-Latn-MZ"},"yap":{"value":"yap-Latn-FM"},"yas":{"value":"yas-Latn-ZZ"}
,"yat":{"value":"yat-Latn-ZZ"},"ppo":{"value":"ppo-Latn-ZZ"},"yav":{"value":"yav-Latn-CM"},"yay":{"value":"yay-Latn-ZZ"},"yaz":{"value":"yaz-Latn-ZZ"},"und-Tale":{"value":"tdd-Tale-CN"},"ybb":{"value":"ybb-Latn-CM"},"yba":{"value":"yba-Latn-ZZ"},"tya":{"value":"tya-Latn-ZZ"},"lia":{"value":"lia-Latn-ZZ"},"lid":{"value":"lid-Latn-ZZ"},"und-Latn-TW":{"value":"trv-Latn-TW"},"lif":{"value":"lif-Deva-NP"},"lih":{"value":"lih-Latn-ZZ"},"lig":{"value":"lig-Latn-ZZ"},"lij":{"value":"lij-Latn-IT"},"hag":{"value":"hag-Latn-ZZ"}
,"und-Latn-TN":{"value":"fr-Latn-TN"},"tyv":{"value":"tyv-Cyrl-RU"},"yby":{"value":"yby-Latn-ZZ"},"und-Arab-GB":{"value":"ks-Arab-GB"},"hak":{"value":"hak-Hans-CN"},"und-Taml":{"value":"ta-Taml-IN"},"ham":{"value":"ham-Latn-ZZ"},"lis":{"value":"lis-Lisu-CN"},"und-Latn-SY":{"value":"fr-Latn-SY"},"ky-Latn":{"value":"ky-Latn-TR"},"pra":{"value":"pra-Khar-PK"},"haw":{"value":"haw-Latn-US"},"haz":{"value":"haz-Arab-AF"},"ku-LB":{"value":"ku-Arab-LB"},"prd":{"value":"prd-Arab-IR"},"prg":{"value":"prg-Latn-001"},"tzm":
{"value":"tzm-Latn-MA"},"hbb":{"value":"hbb-Latn-ZZ"},"und-Latn-UA":{"value":"pl-Latn-UA"},"ljp":{"value":"ljp-Latn-ID"},"und-Tang":{"value":"txg-Tang-CN"},"yue-Hans":{"value":"yue-Hans-CN"},"und-Latn-RU":{"value":"krl-Latn-RU"},"lki":{"value":"lki-Arab-IR"},"pss":{"value":"pss-Latn-ZZ"},"lkt":{"value":"lkt-Latn-US"},"sr-RO":{"value":"sr-Latn-RO"},"und-Arab-CN":{"value":"ug-Arab-CN"},"lle":{"value":"lle-Latn-ZZ"},"und-Cyrl":{"value":"ru-Cyrl-RU"},"uz-AF":{"value":"uz-Arab-AF"},"yer":{"value":"yer-Latn-ZZ"},
"und-Beng":{"value":"bn-Beng-BD"},"ptp":{"value":"ptp-Latn-ZZ"},"lln":{"value":"lln-Latn-ZZ"},"sr-RU":{"value":"sr-Latn-RU"},"hdy":{"value":"hdy-Ethi-ZZ"},"unr-NP":{"value":"unr-Deva-NP"},"und-Mend":{"value":"men-Mend-SL"},"lmn":{"value":"lmn-Telu-IN"},"lmp":{"value":"lmp-Latn-ZZ"},"lmo":{"value":"lmo-Latn-IT"},"puu":{"value":"puu-Latn-GA"},"und-Arab-CC":{"value":"ms-Arab-CC"},"pal-Phlp":{"value":"pal-Phlp-CN"},"ygr":{"value":"ygr-Latn-ZZ"},"ygw":{"value":"ygw-Latn-ZZ"},"lns":{"value":"lns-Latn-ZZ"},"ky-CN":
{"value":"ky-Arab-CN"},"lnu":{"value":"lnu-Latn-ZZ"},"pwa":{"value":"pwa-Latn-ZZ"},"und-Chrs":{"value":"xco-Chrs-UZ"},"und-Mahj":{"value":"hi-Mahj-IN"},"rif-NL":{"value":"rif-Latn-NL"},"loj":{"value":"loj-Latn-ZZ"},"lol":{"value":"lol-Latn-CD"},"lok":{"value":"lok-Latn-ZZ"},"lor":{"value":"lor-Latn-ZZ"},"und-Sora":{"value":"srb-Sora-IN"},"los":{"value":"los-Latn-ZZ"},"loz":{"value":"loz-Latn-ZM"},"und-202":{"value":"en-Latn-NG"},"und-Latn-MR":{"value":"fr-Latn-MR"},"ku-Yezi":{"value":"ku-Yezi-GE"},"hhy":{"value"
:"hhy-Latn-ZZ"},"hia":{"value":"hia-Latn-ZZ"},"hif":{"value":"hif-Latn-FJ"},"dad":{"value":"dad-Latn-ZZ"},"hih":{"value":"hih-Latn-ZZ"},"hig":{"value":"hig-Latn-ZZ"},"daf":{"value":"daf-Latn-ZZ"},"ubu":{"value":"ubu-Latn-ZZ"},"dah":{"value":"dah-Latn-ZZ"},"hil":{"value":"hil-Latn-PH"},"dag":{"value":"dag-Latn-ZZ"},"und-Mero":{"value":"xmr-Mero-SD"},"dak":{"value":"dak-Latn-US"},"und-Merc":{"value":"xmr-Merc-SD"},"dar":{"value":"dar-Cyrl-RU"},"dav":{"value":"dav-Latn-KE"},"lrc":{"value":"lrc-Arab-IR"},"yko":
{"value":"yko-Latn-ZZ"},"und-Latn-MK":{"value":"sq-Latn-MK"},"und-Latn-MM":{"value":"kac-Latn-MM"},"dbd":{"value":"dbd-Latn-ZZ"},"und-Latn-MO":{"value":"pt-Latn-MO"},"und-Latn-MA":{"value":"fr-Latn-MA"},"und-Bali":{"value":"ban-Bali-ID"},"und-Tavt":{"value":"blt-Tavt-VN"},"dbq":{"value":"dbq-Latn-ZZ"},"yle":{"value":"yle-Latn-ZZ"},"ylg":{"value":"ylg-Latn-ZZ"},"und-Maka":{"value":"mak-Maka-ID"},"yll":{"value":"yll-Latn-ZZ"},"udm":{"value":"udm-Cyrl-RU"},"dcc":{"value":"dcc-Arab-IN"},"yml":{"value":"yml-Latn-ZZ"}
,"hla":{"value":"hla-Latn-ZZ"},"und-Latn-IR":{"value":"tk-Latn-IR"},"ltg":{"value":"ltg-Latn-LV"},"und-Latn-KM":{"value":"fr-Latn-KM"},"ddn":{"value":"ddn-Latn-ZZ"},"hlu":{"value":"hlu-Hluw-TR"},"lua":{"value":"lua-Latn-CD"},"und-Bamu":{"value":"bax-Bamu-CM"},"hmd":{"value":"hmd-Plrd-CN"},"ded":{"value":"ded-Latn-ZZ"},"luo":{"value":"luo-Latn-KE"},"und-142":{"value":"zh-Hans-CN"},"und-143":{"value":"uz-Latn-UZ"},"den":{"value":"den-Latn-CA"},"und-Gran":{"value":"sa-Gran-IN"},"hmt":{"value":"hmt-Latn-ZZ"},"uga":
{"value":"uga-Ugar-SY"},"luz":{"value":"luz-Arab-IR"},"luy":{"value":"luy-Latn-KE"},"und-145":{"value":"ar-Arab-SA"},"und-Cakm":{"value":"ccp-Cakm-BD"},"und-Dupl":{"value":"fr-Dupl-FR"},"yon":{"value":"yon-Latn-ZZ"},"ug-MN":{"value":"ug-Cyrl-MN"},"hne":{"value":"hne-Deva-IN"},"hnd":{"value":"hnd-Arab-PK"},"hnj":{"value":"hnj-Hmng-LA"},"hno":{"value":"hno-Arab-PK"},"hnn":{"value":"hnn-Latn-PH"},"ug-KZ":{"value":"ug-Cyrl-KZ"},"und-154":{"value":"en-Latn-GB"},"und-155":{"value":"de-Latn-DE"},"und-150":{"value"
:"ru-Cyrl-RU"},"und-151":{"value":"ru-Cyrl-RU"},"und-Sylo":{"value":"syl-Sylo-BD"},"hoc":{"value":"hoc-Deva-IN"},"dga":{"value":"dga-Latn-ZZ"},"lwl":{"value":"lwl-Thai-TH"},"und-Ital":{"value":"ett-Ital-IT"},"hoj":{"value":"hoj-Deva-IN"},"dgh":{"value":"dgh-Latn-ZZ"},"dgi":{"value":"dgi-Latn-ZZ"},"dgl":{"value":"dgl-Arab-ZZ"},"hot":{"value":"hot-Latn-ZZ"},"dgr":{"value":"dgr-Latn-CA"},"dgz":{"value":"dgz-Latn-ZZ"},"yrb":{"value":"yrb-Latn-ZZ"},"yre":{"value":"yre-Latn-ZZ"},"und-Lyci":{"value":"xlc-Lyci-TR"}
,"und-Cans":{"value":"cr-Cans-CA"},"und-Hluw":{"value":"hlu-Hluw-TR"},"und-Nand":{"value":"sa-Nand-IN"},"yrl":{"value":"yrl-Latn-BR"},"dia":{"value":"dia-Latn-ZZ"},"und-Grek":{"value":"el-Grek-GR"},"und-Mong":{"value":"mn-Mong-CN"},"und-Lydi":{"value":"xld-Lydi-TR"},"yss":{"value":"yss-Latn-ZZ"},"und-Newa":{"value":"new-Newa-NP"},"lzh":{"value":"lzh-Hans-CN"},"dje":{"value":"dje-Latn-NE"},"lzz":{"value":"lzz-Latn-TR"},"uli":{"value":"uli-Latn-FM"},"hsb":{"value":"hsb-Latn-DE"},"und-Xsux":{"value":"akk-Xsux-IQ"}
,"hsn":{"value":"hsn-Hans-CN"},"und-Cari":{"value":"xcr-Cari-TR"},"und-Syrc":{"value":"syr-Syrc-IQ"},"yua":{"value":"yua-Latn-MX"},"yue":{"value":"yue-Hant-HK"},"umb":{"value":"umb-Latn-AO"},"yuj":{"value":"yuj-Latn-ZZ"},"yut":{"value":"yut-Latn-ZZ"},"yuw":{"value":"yuw-Latn-ZZ"},"und-Bopo":{"value":"zh-Bopo-TW"},"und-Yezi":{"value":"ku-Yezi-GE"},"und":{"value":"en-Latn-US"},"und-Egyp":{"value":"egy-Egyp-EG"},"und-Tglg":{"value":"fil-Tglg-PH"},"unr":{"value":"unr-Beng-IN"},"hui":{"value":"hui-Latn-ZZ"},"und-Elba":
{"value":"sq-Elba-AL"},"unx":{"value":"unx-Beng-IN"},"und-Narb":{"value":"xna-Narb-SA"},"pa-PK":{"value":"pa-Arab-PK"},"und-Hebr-CA":{"value":"yi-Hebr-CA"},"uok":{"value":"uok-Latn-ZZ"},"und-Geor":{"value":"ka-Geor-GE"},"und-Shrd":{"value":"sa-Shrd-IN"},"dnj":{"value":"dnj-Latn-CI"},"und-Diak":{"value":"dv-Diak-MV"},"dob":{"value":"dob-Latn-ZZ"},"und-Mymr-TH":{"value":"mnw-Mymr-TH"},"doi":{"value":"doi-Arab-IN"},"dop":{"value":"dop-Latn-ZZ"},"und-Sund":{"value":"su-Sund-ID"},"dow":{"value":"dow-Latn-ZZ"},"sr-ME":
{"value":"sr-Latn-ME"},"und-Hung":{"value":"hu-Hung-HU"},"mad":{"value":"mad-Latn-ID"},"mag":{"value":"mag-Deva-IN"},"maf":{"value":"maf-Latn-CM"},"mai":{"value":"mai-Deva-IN"},"mak":{"value":"mak-Latn-ID"},"man":{"value":"man-Latn-GM"},"mas":{"value":"mas-Latn-KE"},"maw":{"value":"maw-Latn-ZZ"},"maz":{"value":"maz-Latn-MX"},"uri":{"value":"uri-Latn-ZZ"},"mbh":{"value":"mbh-Latn-ZZ"},"urt":{"value":"urt-Latn-ZZ"},"mbo":{"value":"mbo-Latn-ZZ"},"urw":{"value":"urw-Latn-ZZ"},"mbq":{"value":"mbq-Latn-ZZ"},"mbu":
{"value":"mbu-Latn-ZZ"},"und-Hebr-GB":{"value":"yi-Hebr-GB"},"usa":{"value":"usa-Latn-ZZ"},"mbw":{"value":"mbw-Latn-ZZ"},"mci":{"value":"mci-Latn-ZZ"},"dri":{"value":"dri-Latn-ZZ"},"mcq":{"value":"mcq-Latn-ZZ"},"drh":{"value":"drh-Mong-CN"},"mcp":{"value":"mcp-Latn-ZZ"},"mcr":{"value":"mcr-Latn-ZZ"},"mcu":{"value":"mcu-Latn-ZZ"},"drs":{"value":"drs-Ethi-ZZ"},"mda":{"value":"mda-Latn-ZZ"},"mdf":{"value":"mdf-Cyrl-RU"},"mde":{"value":"mde-Arab-ZZ"},"mdh":{"value":"mdh-Latn-PH"},"dsb":{"value":"dsb-Latn-DE"},"mdj":
{"value":"mdj-Latn-ZZ"},"utr":{"value":"utr-Latn-ZZ"},"mdr":{"value":"mdr-Latn-ID"},"mdx":{"value":"mdx-Ethi-ZZ"},"mee":{"value":"mee-Latn-ZZ"},"med":{"value":"med-Latn-ZZ"},"mek":{"value":"mek-Latn-ZZ"},"men":{"value":"men-Latn-SL"},"az-RU":{"value":"az-Cyrl-RU"},"mis-Medf":{"value":"mis-Medf-NG"},"mer":{"value":"mer-Latn-KE"},"dtm":{"value":"dtm-Latn-ML"},"meu":{"value":"meu-Latn-ZZ"},"met":{"value":"met-Latn-ZZ"},"dtp":{"value":"dtp-Latn-MY"},"dts":{"value":"dts-Latn-ZZ"},"uvh":{"value":"uvh-Latn-ZZ"},"dty":
{"value":"dty-Deva-NP"},"mfa":{"value":"mfa-Arab-TH"},"uvl":{"value":"uvl-Latn-ZZ"},"mfe":{"value":"mfe-Latn-MU"},"dua":{"value":"dua-Latn-CM"},"dud":{"value":"dud-Latn-ZZ"},"duc":{"value":"duc-Latn-ZZ"},"mfn":{"value":"mfn-Latn-ZZ"},"dug":{"value":"dug-Latn-ZZ"},"mfo":{"value":"mfo-Latn-ZZ"},"mfq":{"value":"mfq-Latn-ZZ"},"und-Phag":{"value":"lzh-Phag-CN"},"dva":{"value":"dva-Latn-ZZ"},"mgh":{"value":"mgh-Latn-MZ"},"mgl":{"value":"mgl-Latn-ZZ"},"mgo":{"value":"mgo-Latn-CM"},"mgp":{"value":"mgp-Deva-NP"},"mgy":
{"value":"mgy-Latn-TZ"},"zag":{"value":"zag-Latn-SD"},"mhi":{"value":"mhi-Latn-ZZ"},"mhl":{"value":"mhl-Latn-ZZ"},"dww":{"value":"dww-Latn-ZZ"},"mif":{"value":"mif-Latn-ZZ"},"und-Mymr-IN":{"value":"kht-Mymr-IN"},"min":{"value":"min-Latn-ID"},"mis":{"value":"mis-Hatr-IQ"},"ian":{"value":"ian-Latn-ZZ"},"miw":{"value":"miw-Latn-ZZ"},"iar":{"value":"iar-Latn-ZZ"},"uz-Arab":{"value":"uz-Arab-AF"},"ibb":{"value":"ibb-Latn-NG"},"iba":{"value":"iba-Latn-MY"},"dyo":{"value":"dyo-Latn-SN"},"dyu":{"value":"dyu-Latn-BF"}
,"iby":{"value":"iby-Latn-ZZ"},"zdj":{"value":"zdj-Arab-KM"},"ica":{"value":"ica-Latn-ZZ"},"mki":{"value":"mki-Arab-ZZ"},"und-Wcho":{"value":"nnp-Wcho-IN"},"ich":{"value":"ich-Latn-ZZ"},"mkl":{"value":"mkl-Latn-ZZ"},"dzg":{"value":"dzg-Latn-ZZ"},"mkp":{"value":"mkp-Latn-ZZ"},"zea":{"value":"zea-Latn-NL"},"mkw":{"value":"mkw-Latn-ZZ"},"mle":{"value":"mle-Latn-ZZ"},"idd":{"value":"idd-Latn-ZZ"},"idi":{"value":"idi-Latn-ZZ"},"lif-Limb":{"value":"lif-Limb-IN"},"mlp":{"value":"mlp-Latn-ZZ"},"mls":{"value":"mls-Latn-SD"}
,"idu":{"value":"idu-Latn-ZZ"},"quc":{"value":"quc-Latn-GT"},"qug":{"value":"qug-Latn-EC"},"und-Jamo":{"value":"ko-Jamo-KR"},"mmo":{"value":"mmo-Latn-ZZ"},"mmu":{"value":"mmu-Latn-ZZ"},"mmx":{"value":"mmx-Latn-ZZ"},"zgh":{"value":"zgh-Tfng-MA"},"mna":{"value":"mna-Latn-ZZ"},"mnf":{"value":"mnf-Latn-ZZ"},"ife":{"value":"ife-Latn-TG"},"mni":{"value":"mni-Beng-IN"},"mnw":{"value":"mnw-Mymr-MM"},"moa":{"value":"moa-Latn-ZZ"},"moe":{"value":"moe-Latn-CA"},"igb":{"value":"igb-Latn-ZZ"},"ige":{"value":"ige-Latn-ZZ"}
,"moh":{"value":"moh-Latn-CA"},"und-Hebr-SE":{"value":"yi-Hebr-SE"},"zhx":{"value":"zhx-Nshu-CN"},"mos":{"value":"mos-Latn-BF"},"und-Shaw":{"value":"en-Shaw-GB"},"zia":{"value":"zia-Latn-ZZ"},"mox":{"value":"mox-Latn-ZZ"},"vag":{"value":"vag-Latn-ZZ"},"vai":{"value":"vai-Vaii-LR"},"van":{"value":"van-Latn-ZZ"},"mpp":{"value":"mpp-Latn-ZZ"},"mpt":{"value":"mpt-Latn-ZZ"},"mps":{"value":"mps-Latn-ZZ"},"mpx":{"value":"mpx-Latn-ZZ"},"und-Hebr-US":{"value":"yi-Hebr-US"},"hi-Latn":{"value":"hi-Latn-IN"},"mql":{"value"
:"mql-Latn-ZZ"},"und-Hebr-UA":{"value":"yi-Hebr-UA"},"mrd":{"value":"mrd-Deva-NP"},"zkt":{"value":"zkt-Kits-CN"},"mrj":{"value":"mrj-Cyrl-RU"},"ijj":{"value":"ijj-Latn-ZZ"},"mro":{"value":"mro-Mroo-BD"},"und-Modi":{"value":"mr-Modi-IN"},"ebu":{"value":"ebu-Latn-KE"},"zlm":{"value":"zlm-Latn-TG"},"arc-Palm":{"value":"arc-Palm-SY"},"ikk":{"value":"ikk-Latn-ZZ"},"ikt":{"value":"ikt-Latn-CA"},"ikw":{"value":"ikw-Latn-ZZ"},"vec":{"value":"vec-Latn-IT"},"ikx":{"value":"ikx-Latn-ZZ"},"zmi":{"value":"zmi-Latn-MY"},
"mtc":{"value":"mtc-Latn-ZZ"},"mtf":{"value":"mtf-Latn-ZZ"},"vep":{"value":"vep-Latn-RU"},"zh-Bopo":{"value":"zh-Bopo-TW"},"mti":{"value":"mti-Latn-ZZ"},"und-Ethi":{"value":"am-Ethi-ET"},"mtr":{"value":"mtr-Deva-IN"},"und-Thai-LA":{"value":"kdt-Thai-LA"},"ilo":{"value":"ilo-Latn-PH"},"zne":{"value":"zne-Latn-ZZ"},"mua":{"value":"mua-Latn-CM"},"und-Thai-KH":{"value":"kdt-Thai-KH"},"imo":{"value":"imo-Latn-ZZ"},"mus":{"value":"mus-Latn-US"},"mur":{"value":"mur-Latn-ZZ"},"mva":{"value":"mva-Latn-ZZ"},"inh":{"value"
:"inh-Cyrl-RU"},"mvn":{"value":"mvn-Latn-ZZ"},"efi":{"value":"efi-Latn-NG"},"mvy":{"value":"mvy-Arab-PK"},"und-Java":{"value":"jv-Java-ID"},"mwk":{"value":"mwk-Latn-ML"},"mwr":{"value":"mwr-Deva-IN"},"und-021":{"value":"en-Latn-US"},"egl":{"value":"egl-Latn-IT"},"mww":{"value":"mww-Hmnp-US"},"mwv":{"value":"mwv-Latn-ID"},"iou":{"value":"iou-Latn-ZZ"},"und-029":{"value":"es-Latn-CU"},"vic":{"value":"vic-Latn-SX"},"egy":{"value":"egy-Egyp-EG"},"und-Ugar":{"value":"uga-Ugar-SY"},"mxc":{"value":"mxc-Latn-ZW"},"raj":
{"value":"raj-Deva-IN"},"rai":{"value":"rai-Latn-ZZ"},"rao":{"value":"rao-Latn-ZZ"},"viv":{"value":"viv-Latn-ZZ"},"mxm":{"value":"mxm-Latn-ZZ"},"und-034":{"value":"hi-Deva-IN"},"und-030":{"value":"zh-Hans-CN"},"und-039":{"value":"it-Latn-IT"},"und-035":{"value":"id-Latn-ID"},"ug-Cyrl":{"value":"ug-Cyrl-KZ"},"myk":{"value":"myk-Latn-ZZ"},"mym":{"value":"mym-Ethi-ZZ"},"aai":{"value":"aai-Latn-ZZ"},"aak":{"value":"aak-Latn-ZZ"},"myw":{"value":"myw-Latn-ZZ"},"myv":{"value":"myv-Cyrl-RU"},"myx":{"value":"myx-Latn-UG"}
,"myz":{"value":"myz-Mand-IR"},"und-Sinh":{"value":"si-Sinh-LK"},"und-Sind":{"value":"sd-Sind-IN"},"aau":{"value":"aau-Latn-ZZ"},"rcf":{"value":"rcf-Latn-RE"},"und-Orkh":{"value":"otk-Orkh-MN"},"mzk":{"value":"mzk-Latn-ZZ"},"mzn":{"value":"mzn-Arab-IR"},"iri":{"value":"iri-Latn-ZZ"},"mzm":{"value":"mzm-Latn-ZZ"},"mzp":{"value":"mzp-Latn-ZZ"},"und-053":{"value":"en-Latn-AU"},"abi":{"value":"abi-Latn-ZZ"},"und-054":{"value":"en-Latn-PG"},"mzw":{"value":"mzw-Latn-ZZ"},"mzz":{"value":"mzz-Latn-ZZ"},"abr":{"value"
:"abr-Latn-GH"},"abq":{"value":"abq-Cyrl-ZZ"},"abt":{"value":"abt-Latn-ZZ"},"und-057":{"value":"en-Latn-GU"},"aby":{"value":"aby-Latn-ZZ"},"eka":{"value":"eka-Latn-ZZ"},"vls":{"value":"vls-Latn-BE"},"ace":{"value":"ace-Latn-ID"},"acd":{"value":"acd-Latn-ZZ"},"ach":{"value":"ach-Latn-UG"},"vmf":{"value":"vmf-Latn-DE"},"eky":{"value":"eky-Kali-MM"},"rej":{"value":"rej-Latn-ID"},"rel":{"value":"rel-Latn-ZZ"},"ada":{"value":"ada-Latn-GH"},"res":{"value":"res-Latn-ZZ"},"vmw":{"value":"vmw-Latn-MZ"},"ade":{"value"
:"ade-Latn-ZZ"},"adj":{"value":"adj-Latn-ZZ"},"und-Hira":{"value":"ja-Hira-JP"},"adp":{"value":"adp-Tibt-BT"},"adz":{"value":"adz-Latn-ZZ"},"ady":{"value":"ady-Cyrl-RU"},"ema":{"value":"ema-Latn-ZZ"},"und-Deva":{"value":"hi-Deva-IN"},"aeb":{"value":"aeb-Arab-TN"},"emi":{"value":"emi-Latn-ZZ"},"und-009":{"value":"en-Latn-AU"},"aey":{"value":"aey-Latn-ZZ"},"und-002":{"value":"en-Latn-NG"},"und-003":{"value":"en-Latn-US"},"und-005":{"value":"pt-Latn-BR"},"rgn":{"value":"rgn-Latn-IT"},"vot":{"value":"vot-Latn-RU"}
,"enn":{"value":"enn-Latn-ZZ"},"enq":{"value":"enq-Latn-ZZ"},"und-011":{"value":"en-Latn-NG"},"rhg":{"value":"rhg-Arab-MM"},"und-017":{"value":"sw-Latn-CD"},"und-018":{"value":"en-Latn-ZA"},"und-019":{"value":"en-Latn-US"},"und-013":{"value":"es-Latn-MX"},"und-014":{"value":"sw-Latn-TZ"},"und-015":{"value":"ar-Arab-EG"},"agc":{"value":"agc-Latn-ZZ"},"und-Zanb":{"value":"cmg-Zanb-MN"},"iwm":{"value":"iwm-Latn-ZZ"},"agd":{"value":"agd-Latn-ZZ"},"agg":{"value":"agg-Latn-ZZ"},"iws":{"value":"iws-Latn-ZZ"},"agm":
{"value":"agm-Latn-ZZ"},"ago":{"value":"ago-Latn-ZZ"},"agq":{"value":"agq-Latn-CM"},"ria":{"value":"ria-Latn-IN"},"rif":{"value":"rif-Tfng-MA"},"nac":{"value":"nac-Latn-ZZ"},"naf":{"value":"naf-Latn-ZZ"},"nak":{"value":"nak-Latn-ZZ"},"nan":{"value":"nan-Hans-CN"},"aha":{"value":"aha-Latn-ZZ"},"nap":{"value":"nap-Latn-IT"},"naq":{"value":"naq-Latn-NA"},"zza":{"value":"zza-Latn-TR"},"nas":{"value":"nas-Latn-ZZ"},"ahl":{"value":"ahl-Latn-ZZ"},"en-Shaw":{"value":"en-Shaw-GB"},"und-Copt":{"value":"cop-Copt-EG"},
"aho":{"value":"aho-Ahom-IN"},"vro":{"value":"vro-Latn-EE"},"rjs":{"value":"rjs-Deva-NP"},"nca":{"value":"nca-Latn-ZZ"},"ncf":{"value":"ncf-Latn-ZZ"},"nce":{"value":"nce-Latn-ZZ"},"nch":{"value":"nch-Latn-MX"},"izh":{"value":"izh-Latn-RU"},"izi":{"value":"izi-Latn-ZZ"},"rkt":{"value":"rkt-Beng-BD"},"nco":{"value":"nco-Latn-ZZ"},"eri":{"value":"eri-Latn-ZZ"},"ajg":{"value":"ajg-Latn-ZZ"},"ncu":{"value":"ncu-Latn-ZZ"},"ndc":{"value":"ndc-Latn-MZ"},"esg":{"value":"esg-Gonm-IN"},"nds":{"value":"nds-Latn-DE"},"akk":
{"value":"akk-Xsux-IQ"},"esu":{"value":"esu-Latn-US"},"neb":{"value":"neb-Latn-ZZ"},"rmf":{"value":"rmf-Latn-FI"},"und-061":{"value":"sm-Latn-WS"},"und-Limb":{"value":"lif-Limb-IN"},"vun":{"value":"vun-Latn-TZ"},"ff-Adlm":{"value":"ff-Adlm-GN"},"vut":{"value":"vut-Latn-ZZ"},"rmo":{"value":"rmo-Latn-CH"},"ala":{"value":"ala-Latn-ZZ"},"rmt":{"value":"rmt-Arab-IR"},"rmu":{"value":"rmu-Latn-SE"},"ali":{"value":"ali-Latn-ZZ"},"nex":{"value":"nex-Latn-ZZ"},"new":{"value":"new-Deva-NP"},"aln":{"value":"aln-Latn-XK"}
,"etr":{"value":"etr-Latn-ZZ"},"und-Rohg":{"value":"rhg-Rohg-MM"},"ett":{"value":"ett-Ital-IT"},"rna":{"value":"rna-Latn-ZZ"},"etu":{"value":"etu-Latn-ZZ"},"alt":{"value":"alt-Cyrl-RU"},"etx":{"value":"etx-Latn-ZZ"},"rng":{"value":"rng-Latn-MZ"},"und-Linb":{"value":"grc-Linb-GR"},"und-Lina":{"value":"lab-Lina-GR"},"und-Jpan":{"value":"ja-Jpan-JP"},"man-GN":{"value":"man-Nkoo-GN"},"nfr":{"value":"nfr-Latn-ZZ"},"amm":{"value":"amm-Latn-ZZ"},"und-Arab":{"value":"ar-Arab-EG"},"amo":{"value":"amo-Latn-NG"},"amn":
{"value":"amn-Latn-ZZ"},"rob":{"value":"rob-Latn-ID"},"amp":{"value":"amp-Latn-ZZ"},"ngb":{"value":"ngb-Latn-ZZ"},"rof":{"value":"rof-Latn-TZ"},"nga":{"value":"nga-Latn-ZZ"},"ngl":{"value":"ngl-Latn-MZ"},"roo":{"value":"roo-Latn-ZZ"},"anc":{"value":"anc-Latn-ZZ"},"ank":{"value":"ank-Latn-ZZ"},"ann":{"value":"ann-Latn-ZZ"},"und-Bhks":{"value":"sa-Bhks-IN"},"nhb":{"value":"nhb-Latn-ZZ"},"nhe":{"value":"nhe-Latn-MX"},"any":{"value":"any-Latn-ZZ"},"und-Orya":{"value":"or-Orya-IN"},"ewo":{"value":"ewo-Latn-CM"},
"nhw":{"value":"nhw-Latn-MX"},"aoj":{"value":"aoj-Latn-ZZ"},"aom":{"value":"aom-Latn-ZZ"},"zh-Hanb":{"value":"zh-Hanb-TW"},"und-Kits":{"value":"zkt-Kits-CN"},"jab":{"value":"jab-Latn-ZZ"},"nif":{"value":"nif-Latn-ZZ"},"aoz":{"value":"aoz-Latn-ID"},"nij":{"value":"nij-Latn-ID"},"nii":{"value":"nii-Latn-ZZ"},"zh-PH":{"value":"zh-Hant-PH"},"nin":{"value":"nin-Latn-ZZ"},"zh-Hant":{"value":"zh-Hant-TW"},"zh-PF":{"value":"zh-Hant-PF"},"und-Ahom":{"value":"aho-Ahom-IN"},"apd":{"value":"apd-Arab-TG"},"apc":{"value"
:"apc-Arab-ZZ"},"ape":{"value":"ape-Latn-ZZ"},"jam":{"value":"jam-Latn-JM"},"zh-PA":{"value":"zh-Hant-PA"},"niu":{"value":"niu-Latn-NU"},"niz":{"value":"niz-Latn-ZZ"},"niy":{"value":"niy-Latn-ZZ"},"ext":{"value":"ext-Latn-ES"},"apr":{"value":"apr-Latn-ZZ"},"aps":{"value":"aps-Latn-ZZ"},"apz":{"value":"apz-Latn-ZZ"},"rro":{"value":"rro-Latn-ZZ"},"njo":{"value":"njo-Latn-IN"},"jbo":{"value":"jbo-Latn-001"},"jbu":{"value":"jbu-Latn-ZZ"},"zh-MO":{"value":"zh-Hant-MO"},"nkg":{"value":"nkg-Latn-ZZ"},"zh-MY":{"value"
:"zh-Hant-MY"},"arc":{"value":"arc-Armi-IR"},"nko":{"value":"nko-Latn-ZZ"},"arh":{"value":"arh-Latn-ZZ"},"pa-Arab":{"value":"pa-Arab-PK"},"und-Mtei":{"value":"mni-Mtei-IN"},"arn":{"value":"arn-Latn-CL"},"aro":{"value":"aro-Latn-BO"},"und-Cyrl-RO":{"value":"bg-Cyrl-RO"},"arq":{"value":"arq-Arab-DZ"},"ars":{"value":"ars-Arab-SA"},"arz":{"value":"arz-Arab-EG"},"ary":{"value":"ary-Arab-MA"},"rtm":{"value":"rtm-Latn-FJ"},"asa":{"value":"asa-Latn-TZ"},"und-Grek-TR":{"value":"bgx-Grek-TR"},"ase":{"value":"ase-Sgnw-US"}
,"asg":{"value":"asg-Latn-ZZ"},"aso":{"value":"aso-Latn-ZZ"},"ast":{"value":"ast-Latn-ES"},"rue":{"value":"rue-Cyrl-UA"},"rug":{"value":"rug-Latn-SB"},"nmg":{"value":"nmg-Latn-CM"},"ata":{"value":"ata-Latn-ZZ"},"jen":{"value":"jen-Latn-ZZ"},"atg":{"value":"atg-Latn-ZZ"},"atj":{"value":"atj-Latn-CA"},"nmz":{"value":"nmz-Latn-ZZ"},"unr-Deva":{"value":"unr-Deva-NP"},"nnf":{"value":"nnf-Latn-ZZ"},"nnh":{"value":"nnh-Latn-CM"},"nnk":{"value":"nnk-Latn-ZZ"},"nnm":{"value":"nnm-Latn-ZZ"},"nnp":{"value":"nnp-Wcho-IN"}
,"az-IR":{"value":"az-Arab-IR"},"und-Adlm":{"value":"ff-Adlm-GN"},"az-IQ":{"value":"az-Arab-IQ"},"und-Nbat":{"value":"arc-Nbat-JO"},"sd-Khoj":{"value":"sd-Khoj-IN"},"nod":{"value":"nod-Lana-TH"},"auy":{"value":"auy-Latn-ZZ"},"noe":{"value":"noe-Deva-IN"},"rwk":{"value":"rwk-Latn-TZ"},"und-Cyrl-MD":{"value":"uk-Cyrl-MD"},"rwo":{"value":"rwo-Latn-ZZ"},"non":{"value":"non-Runr-SE"},"nop":{"value":"nop-Latn-ZZ"},"jgk":{"value":"jgk-Latn-ZZ"},"jgo":{"value":"jgo-Latn-CM"},"und-Vaii":{"value":"vai-Vaii-LR"},"nou":
{"value":"nou-Latn-ZZ"},"avl":{"value":"avl-Arab-ZZ"},"avn":{"value":"avn-Latn-ZZ"},"wae":{"value":"wae-Latn-CH"},"avt":{"value":"avt-Latn-ZZ"},"avu":{"value":"avu-Latn-ZZ"},"waj":{"value":"waj-Latn-ZZ"},"wal":{"value":"wal-Ethi-ET"},"wan":{"value":"wan-Latn-ZZ"},"zh-HK":{"value":"zh-Hant-HK"},"war":{"value":"war-Latn-PH"},"awa":{"value":"awa-Deva-IN"},"und-Plrd":{"value":"hmd-Plrd-CN"},"awb":{"value":"awb-Latn-ZZ"},"awo":{"value":"awo-Latn-ZZ"},"und-Knda":{"value":"kn-Knda-IN"},"zh-ID":{"value":"zh-Hant-ID"}
,"jib":{"value":"jib-Latn-ZZ"},"awx":{"value":"awx-Latn-ZZ"},"wbp":{"value":"wbp-Latn-AU"},"und-Sidd":{"value":"sa-Sidd-IN"},"fab":{"value":"fab-Latn-ZZ"},"wbr":{"value":"wbr-Deva-IN"},"faa":{"value":"faa-Latn-ZZ"},"wbq":{"value":"wbq-Telu-IN"},"und-Kali":{"value":"eky-Kali-MM"},"fag":{"value":"fag-Latn-ZZ"},"nqo":{"value":"nqo-Nkoo-GN"},"fai":{"value":"fai-Latn-ZZ"},"ryu":{"value":"ryu-Kana-JP"},"fan":{"value":"fan-Latn-GQ"},"wci":{"value":"wci-Latn-ZZ"},"nrb":{"value":"nrb-Latn-ZZ"},"und-Phlp":{"value":"pal-Phlp-CN"}
,"ayb":{"value":"ayb-Latn-ZZ"},"und-Phli":{"value":"pal-Phli-IR"},"cu-Glag":{"value":"cu-Glag-BG"},"und-Cyrl-XK":{"value":"sr-Cyrl-XK"},"az-Arab":{"value":"az-Arab-IR"},"ks-Deva":{"value":"ks-Deva-IN"},"und-Thai":{"value":"th-Thai-TH"},"nsk":{"value":"nsk-Cans-CA"},"nsn":{"value":"nsn-Latn-ZZ"},"nso":{"value":"nso-Latn-ZA"},"und-Thaa":{"value":"dv-Thaa-MV"},"und-Nshu":{"value":"zhx-Nshu-CN"},"nss":{"value":"nss-Latn-ZZ"},"zh-VN":{"value":"zh-Hant-VN"},"und-Hmnp":{"value":"mww-Hmnp-US"},"und-Kana":{"value":"ja-Kana-JP"}
,"und-Hmng":{"value":"hnj-Hmng-LA"},"wer":{"value":"wer-Latn-ZZ"},"zh-TW":{"value":"zh-Hant-TW"},"ntm":{"value":"ntm-Latn-ZZ"},"ntr":{"value":"ntr-Latn-ZZ"},"zh-US":{"value":"zh-Hant-US"},"und-Xpeo":{"value":"peo-Xpeo-IR"},"jmc":{"value":"jmc-Latn-TZ"},"nui":{"value":"nui-Latn-ZZ"},"jml":{"value":"jml-Deva-NP"},"nup":{"value":"nup-Latn-ZZ"},"und-Cyrl-SK":{"value":"uk-Cyrl-SK"},"nus":{"value":"nus-Latn-SS"},"nuv":{"value":"nuv-Latn-ZZ"},"nux":{"value":"nux-Latn-ZZ"},"zh-TH":{"value":"zh-Hant-TH"},"wgi":{"value"
:"wgi-Latn-ZZ"},"und-Phnx":{"value":"phn-Phnx-LB"},"und-Cyrl-TR":{"value":"kbd-Cyrl-TR"},"ffi":{"value":"ffi-Latn-ZZ"},"und-Elym":{"value":"arc-Elym-IR"},"ffm":{"value":"ffm-Latn-ML"},"und-Rjng":{"value":"rej-Rjng-ID"},"whg":{"value":"whg-Latn-ZZ"},"nwb":{"value":"nwb-Latn-ZZ"},"zh-SR":{"value":"zh-Hant-SR"},"wib":{"value":"wib-Latn-ZZ"},"und-Hebr":{"value":"he-Hebr-IL"},"saf":{"value":"saf-Latn-GH"},"sah":{"value":"sah-Cyrl-RU"},"saq":{"value":"saq-Latn-KE"},"wiu":{"value":"wiu-Latn-ZZ"},"sas":{"value":"sas-Latn-ID"}
,"wiv":{"value":"wiv-Latn-ZZ"},"nxq":{"value":"nxq-Latn-CN"},"sat":{"value":"sat-Olck-IN"},"nxr":{"value":"nxr-Latn-ZZ"},"sav":{"value":"sav-Latn-SN"},"saz":{"value":"saz-Saur-IN"},"wja":{"value":"wja-Latn-ZZ"},"sba":{"value":"sba-Latn-ZZ"},"sbe":{"value":"sbe-Latn-ZZ"},"wji":{"value":"wji-Latn-ZZ"},"mn-Mong":{"value":"mn-Mong-CN"},"und-419":{"value":"es-Latn-419"},"fia":{"value":"fia-Arab-SD"},"sbp":{"value":"sbp-Latn-TZ"},"und-NO":{"value":"nb-Latn-NO"},"nyn":{"value":"nyn-Latn-UG"},"nym":{"value":"nym-Latn-TZ"}
,"und-NL":{"value":"nl-Latn-NL"},"und-NP":{"value":"ne-Deva-NP"},"fil":{"value":"fil-Latn-PH"},"bal":{"value":"bal-Arab-PK"},"ban":{"value":"ban-Latn-ID"},"bap":{"value":"bap-Deva-NP"},"fit":{"value":"fit-Latn-SE"},"bar":{"value":"bar-Latn-AT"},"bas":{"value":"bas-Latn-CM"},"bav":{"value":"bav-Latn-ZZ"},"bax":{"value":"bax-Bamu-CM"},"jra":{"value":"jra-Latn-ZZ"},"sck":{"value":"sck-Deva-IN"},"nzi":{"value":"nzi-Latn-GH"},"scl":{"value":"scl-Arab-ZZ"},"sco":{"value":"sco-Latn-GB"},"scn":{"value":"scn-Latn-IT"}
,"aa":{"value":"aa-Latn-ET"},"bba":{"value":"bba-Latn-ZZ"},"und-MN":{"value":"mn-Cyrl-MN"},"ab":{"value":"ab-Cyrl-GE"},"und-MM":{"value":"my-Mymr-MM"},"und-Osma":{"value":"so-Osma-SO"},"bbc":{"value":"bbc-Latn-ID"},"scs":{"value":"scs-Latn-CA"},"und-ML":{"value":"bm-Latn-ML"},"bbb":{"value":"bbb-Latn-ZZ"},"und-MK":{"value":"mk-Cyrl-MK"},"ae":{"value":"ae-Avst-IR"},"und-MR":{"value":"ar-Arab-MR"},"af":{"value":"af-Latn-ZA"},"bbd":{"value":"bbd-Latn-ZZ"},"und-MQ":{"value":"fr-Latn-MQ"},"und-Wara":{"value":"hoc-Wara-IN"}
,"und-MO":{"value":"zh-Hant-MO"},"und-MV":{"value":"dv-Thaa-MV"},"und-MU":{"value":"mfe-Latn-MU"},"ak":{"value":"ak-Latn-GH"},"und-MT":{"value":"mt-Latn-MT"},"bbj":{"value":"bbj-Latn-CM"},"am":{"value":"am-Ethi-ET"},"und-MZ":{"value":"pt-Latn-MZ"},"an":{"value":"an-Latn-ES"},"und-MY":{"value":"ms-Latn-MY"},"und-MX":{"value":"es-Latn-MX"},"ar":{"value":"ar-Arab-EG"},"bbp":{"value":"bbp-Latn-ZZ"},"as":{"value":"as-Beng-IN"},"bbr":{"value":"bbr-Latn-ZZ"},"sdc":{"value":"sdc-Latn-IT"},"und-NC":{"value":"fr-Latn-NC"}
,"av":{"value":"av-Cyrl-RU"},"sdh":{"value":"sdh-Arab-IR"},"und-NA":{"value":"af-Latn-NA"},"ay":{"value":"ay-Latn-BO"},"az":{"value":"az-Latn-AZ"},"und-NE":{"value":"ha-Latn-NE"},"und-NI":{"value":"es-Latn-NI"},"ba":{"value":"ba-Cyrl-RU"},"wls":{"value":"wls-Latn-WF"},"und-Kore":{"value":"ko-Kore-KR"},"und-LK":{"value":"si-Sinh-LK"},"be":{"value":"be-Cyrl-BY"},"bcf":{"value":"bcf-Latn-ZZ"},"bg":{"value":"bg-Cyrl-BG"},"bch":{"value":"bch-Latn-ZZ"},"bi":{"value":"bi-Latn-VU"},"und-LU":{"value":"fr-Latn-LU"},"bci":
{"value":"bci-Latn-CI"},"und-LT":{"value":"lt-Latn-LT"},"und-LS":{"value":"st-Latn-LS"},"bm":{"value":"bm-Latn-ML"},"bcn":{"value":"bcn-Latn-ZZ"},"bn":{"value":"bn-Beng-BD"},"und-LY":{"value":"ar-Arab-LY"},"bcm":{"value":"bcm-Latn-ZZ"},"bo":{"value":"bo-Tibt-CN"},"bco":{"value":"bco-Latn-ZZ"},"und-LV":{"value":"lv-Latn-LV"},"br":{"value":"br-Latn-FR"},"bcq":{"value":"bcq-Ethi-ZZ"},"bs":{"value":"bs-Latn-BA"},"bcu":{"value":"bcu-Latn-ZZ"},"sef":{"value":"sef-Latn-CI"},"und-MA":{"value":"ar-Arab-MA"},"sei":{"value"
:"sei-Latn-MX"},"seh":{"value":"seh-Latn-MZ"},"und-MF":{"value":"fr-Latn-MF"},"wmo":{"value":"wmo-Latn-ZZ"},"und-ME":{"value":"sr-Latn-ME"},"und-MD":{"value":"ro-Latn-MD"},"und-MC":{"value":"fr-Latn-MC"},"ca":{"value":"ca-Latn-ES"},"und-MG":{"value":"mg-Latn-MG"},"ses":{"value":"ses-Latn-ML"},"ce":{"value":"ce-Cyrl-RU"},"und-Cyrl-BA":{"value":"sr-Cyrl-BA"},"bdd":{"value":"bdd-Latn-ZZ"},"und-KP":{"value":"ko-Kore-KP"},"ch":{"value":"ch-Latn-GU"},"und-KM":{"value":"ar-Arab-KM"},"und-KR":{"value":"ko-Kore-KR"}
,"co":{"value":"co-Latn-FR"},"flr":{"value":"flr-Latn-ZZ"},"und-KW":{"value":"ar-Arab-KW"},"wnc":{"value":"wnc-Latn-ZZ"},"und-Dogr":{"value":"doi-Dogr-IN"},"cr":{"value":"cr-Cans-CA"},"cs":{"value":"cs-Latn-CZ"},"cu":{"value":"cu-Cyrl-RU"},"und-KZ":{"value":"ru-Cyrl-KZ"},"cv":{"value":"cv-Cyrl-RU"},"wni":{"value":"wni-Arab-KM"},"und-LA":{"value":"lo-Laoo-LA"},"cy":{"value":"cy-Latn-GB"},"und-LB":{"value":"ar-Arab-LB"},"und-LI":{"value":"de-Latn-LI"},"da":{"value":"da-Latn-DK"},"und-Cyrl-AL":{"value":"mk-Cyrl-AL"}
,"wnu":{"value":"wnu-Latn-ZZ"},"de":{"value":"de-Latn-DE"},"bef":{"value":"bef-Latn-ZZ"},"beh":{"value":"beh-Latn-ZZ"},"und-JO":{"value":"ar-Arab-JO"},"bej":{"value":"bej-Arab-SD"},"fmp":{"value":"fmp-Latn-ZZ"},"jut":{"value":"jut-Latn-DK"},"bem":{"value":"bem-Latn-ZM"},"und-JP":{"value":"ja-Jpan-JP"},"wob":{"value":"wob-Latn-ZZ"},"sga":{"value":"sga-Ogam-IE"},"bet":{"value":"bet-Latn-ZZ"},"dv":{"value":"dv-Thaa-MV"},"bex":{"value":"bex-Latn-ZZ"},"bew":{"value":"bew-Latn-ID"},"bez":{"value":"bez-Latn-TZ"},"dz":
{"value":"dz-Tibt-BT"},"ms-ID":{"value":"ms-Latn-ID"},"wos":{"value":"wos-Latn-ZZ"},"und-KH":{"value":"km-Khmr-KH"},"und-KG":{"value":"ky-Cyrl-KG"},"sgs":{"value":"sgs-Latn-LT"},"und-KE":{"value":"sw-Latn-KE"},"ee":{"value":"ee-Latn-GH"},"bfd":{"value":"bfd-Latn-CM"},"sgw":{"value":"sgw-Ethi-ZZ"},"und-IN":{"value":"hi-Deva-IN"},"und-IL":{"value":"he-Hebr-IL"},"el":{"value":"el-Grek-GR"},"sgz":{"value":"sgz-Latn-ZZ"},"und-IR":{"value":"fa-Arab-IR"},"en":{"value":"en-Latn-US"},"und-IQ":{"value":"ar-Arab-IQ"},
"und-Perm":{"value":"kv-Perm-RU"},"eo":{"value":"eo-Latn-001"},"bfq":{"value":"bfq-Taml-IN"},"es":{"value":"es-Latn-ES"},"und-IT":{"value":"it-Latn-IT"},"et":{"value":"et-Latn-EE"},"und-IS":{"value":"is-Latn-IS"},"eu":{"value":"eu-Latn-ES"},"bft":{"value":"bft-Arab-PK"},"bfy":{"value":"bfy-Deva-IN"},"shi":{"value":"shi-Tfng-MA"},"shk":{"value":"shk-Latn-ZZ"},"shn":{"value":"shn-Mymr-MM"},"fod":{"value":"fod-Latn-ZZ"},"fa":{"value":"fa-Arab-IR"},"bgc":{"value":"bgc-Deva-IN"},"ff":{"value":"ff-Latn-SN"},"shu":
{"value":"shu-Arab-ZZ"},"fi":{"value":"fi-Latn-FI"},"fj":{"value":"fj-Latn-FJ"},"fon":{"value":"fon-Latn-BJ"},"und-HM":{"value":"und-Latn-HM"},"und-HK":{"value":"zh-Hant-HK"},"bgn":{"value":"bgn-Arab-PK"},"for":{"value":"for-Latn-ZZ"},"fo":{"value":"fo-Latn-FO"},"und-HN":{"value":"es-Latn-HN"},"fr":{"value":"fr-Latn-FR"},"und-HU":{"value":"hu-Latn-HU"},"und-HT":{"value":"ht-Latn-HT"},"ku-Arab":{"value":"ku-Arab-IQ"},"sid":{"value":"sid-Latn-ET"},"und-HR":{"value":"hr-Latn-HR"},"sig":{"value":"sig-Latn-ZZ"},
"bgx":{"value":"bgx-Grek-TR"},"fy":{"value":"fy-Latn-NL"},"sim":{"value":"sim-Latn-ZZ"},"sil":{"value":"sil-Latn-ZZ"},"fpe":{"value":"fpe-Latn-ZZ"},"ga":{"value":"ga-Latn-IE"},"bhb":{"value":"bhb-Deva-IN"},"gd":{"value":"gd-Latn-GB"},"und-ID":{"value":"id-Latn-ID"},"und-IC":{"value":"es-Latn-IC"},"bhg":{"value":"bhg-Latn-ZZ"},"und-GH":{"value":"ak-Latn-GH"},"bhi":{"value":"bhi-Deva-IN"},"und-GF":{"value":"fr-Latn-GF"},"und-GE":{"value":"ka-Geor-GE"},"und-GL":{"value":"kl-Latn-GL"},"gl":{"value":"gl-Latn-ES"}
,"bhl":{"value":"bhl-Latn-ZZ"},"gn":{"value":"gn-Latn-PY"},"bho":{"value":"bho-Deva-IN"},"und-GP":{"value":"fr-Latn-GP"},"und-GN":{"value":"fr-Latn-GN"},"und-GT":{"value":"es-Latn-GT"},"und-GS":{"value":"und-Latn-GS"},"gu":{"value":"gu-Gujr-IN"},"und-GR":{"value":"el-Grek-GR"},"gv":{"value":"gv-Latn-IM"},"und-GQ":{"value":"es-Latn-GQ"},"und-Palm":{"value":"arc-Palm-SY"},"und-GW":{"value":"pt-Latn-GW"},"bhy":{"value":"bhy-Latn-ZZ"},"ha":{"value":"ha-Latn-NG"},"wrs":{"value":"wrs-Latn-ZZ"},"bib":{"value":"bib-Latn-ZZ"}
,"sjr":{"value":"sjr-Latn-ZZ"},"he":{"value":"he-Hebr-IL"},"big":{"value":"big-Latn-ZZ"},"hi":{"value":"hi-Deva-IN"},"und-Cyrl-GE":{"value":"ab-Cyrl-GE"},"bik":{"value":"bik-Latn-PH"},"bin":{"value":"bin-Latn-NG"},"und-Cham":{"value":"cjm-Cham-VN"},"und-FI":{"value":"fi-Latn-FI"},"bim":{"value":"bim-Latn-ZZ"},"ho":{"value":"ho-Latn-PG"},"tg-PK":{"value":"tg-Arab-PK"},"und-FO":{"value":"fo-Latn-FO"},"bio":{"value":"bio-Latn-ZZ"},"fqs":{"value":"fqs-Latn-ZZ"},"hr":{"value":"hr-Latn-HR"},"skc":{"value":"skc-Latn-ZZ"}
,"wsg":{"value":"wsg-Gong-IN"},"biq":{"value":"biq-Latn-ZZ"},"ht":{"value":"ht-Latn-HT"},"hu":{"value":"hu-Latn-HU"},"und-FR":{"value":"fr-Latn-FR"},"wsk":{"value":"wsk-Latn-ZZ"},"hy":{"value":"hy-Armn-AM"},"hz":{"value":"hz-Latn-NA"},"frc":{"value":"frc-Latn-US"},"ia":{"value":"ia-Latn-001"},"sks":{"value":"sks-Latn-ZZ"},"id":{"value":"id-Latn-ID"},"skr":{"value":"skr-Arab-PK"},"ig":{"value":"ig-Latn-NG"},"und-GA":{"value":"fr-Latn-GA"},"bji":{"value":"bji-Ethi-ZZ"},"ii":{"value":"ii-Yiii-CN"},"bjh":{"value"
:"bjh-Latn-ZZ"},"und-EE":{"value":"et-Latn-EE"},"ik":{"value":"ik-Latn-US"},"bjj":{"value":"bjj-Deva-IN"},"und-EC":{"value":"es-Latn-EC"},"und-Cprt":{"value":"grc-Cprt-CY"},"frp":{"value":"frp-Latn-FR"},"in":{"value":"in-Latn-ID"},"bjo":{"value":"bjo-Latn-ZZ"},"frs":{"value":"frs-Latn-DE"},"io":{"value":"io-Latn-001"},"und-EH":{"value":"ar-Arab-EH"},"bjn":{"value":"bjn-Latn-ID"},"frr":{"value":"frr-Latn-DE"},"und-EG":{"value":"ar-Arab-EG"},"is":{"value":"is-Latn-IS"},"sld":{"value":"sld-Latn-ZZ"},"bjr":{"value"
:"bjr-Latn-ZZ"},"it":{"value":"it-Latn-IT"},"iu":{"value":"iu-Cans-CA"},"und-ER":{"value":"ti-Ethi-ER"},"bjt":{"value":"bjt-Latn-SN"},"iw":{"value":"iw-Hebr-IL"},"und-Tirh":{"value":"mai-Tirh-IN"},"sli":{"value":"sli-Latn-PL"},"und-EU":{"value":"en-Latn-GB"},"wtm":{"value":"wtm-Deva-IN"},"sll":{"value":"sll-Latn-ZZ"},"und-ET":{"value":"am-Ethi-ET"},"bjz":{"value":"bjz-Latn-ZZ"},"und-ES":{"value":"es-Latn-ES"},"und-EZ":{"value":"de-Latn-EZ"},"ja":{"value":"ja-Jpan-JP"},"zh-GF":{"value":"zh-Hant-GF"},"bkc":{"value"
:"bkc-Latn-ZZ"},"zh-GB":{"value":"zh-Hant-GB"},"und-Cyrl-GR":{"value":"mk-Cyrl-GR"},"ji":{"value":"ji-Hebr-UA"},"und-DE":{"value":"de-Latn-DE"},"sly":{"value":"sly-Latn-ID"},"bkm":{"value":"bkm-Latn-CM"},"sma":{"value":"sma-Latn-SE"},"bkq":{"value":"bkq-Latn-ZZ"},"und-DK":{"value":"da-Latn-DK"},"und-DJ":{"value":"aa-Latn-DJ"},"bkv":{"value":"bkv-Latn-ZZ"},"jv":{"value":"jv-Latn-ID"},"bku":{"value":"bku-Latn-PH"},"jw":{"value":"jw-Latn-ID"},"und-DO":{"value":"es-Latn-DO"},"smj":{"value":"smj-Latn-SE"},"smn":
{"value":"smn-Latn-FI"},"ka":{"value":"ka-Geor-GE"},"smq":{"value":"smq-Latn-ZZ"},"wuu":{"value":"wuu-Hans-CN"},"smp":{"value":"smp-Samr-IL"},"sms":{"value":"sms-Latn-FI"},"wuv":{"value":"wuv-Latn-ZZ"},"und-DZ":{"value":"ar-Arab-DZ"},"kg":{"value":"kg-Latn-CD"},"und-EA":{"value":"es-Latn-EA"},"ki":{"value":"ki-Latn-KE"},"kj":{"value":"kj-Latn-NA"},"kk":{"value":"kk-Cyrl-KZ"},"man-Nkoo":{"value":"man-Nkoo-GN"},"und-CD":{"value":"sw-Latn-CD"},"kl":{"value":"kl-Latn-GL"},"und-Telu":{"value":"te-Telu-IN"},"km":
{"value":"km-Khmr-KH"},"kn":{"value":"kn-Knda-IN"},"ko":{"value":"ko-Kore-KR"},"und-CH":{"value":"de-Latn-CH"},"und-CG":{"value":"fr-Latn-CG"},"und-CF":{"value":"fr-Latn-CF"},"kr":{"value":"kr-Latn-ZZ"},"ks":{"value":"ks-Arab-IN"},"und-CL":{"value":"es-Latn-CL"},"snc":{"value":"snc-Latn-ZZ"},"ku":{"value":"ku-Latn-TR"},"blt":{"value":"blt-Tavt-VN"},"kv":{"value":"kv-Cyrl-RU"},"und-CI":{"value":"fr-Latn-CI"},"kw":{"value":"kw-Latn-GB"},"und-CP":{"value":"und-Latn-CP"},"und-CO":{"value":"es-Latn-CO"},"ky":{"value"
:"ky-Cyrl-KG"},"und-CN":{"value":"zh-Hans-CN"},"und-CM":{"value":"fr-Latn-CM"},"snk":{"value":"snk-Latn-ML"},"fub":{"value":"fub-Arab-CM"},"und-CR":{"value":"es-Latn-CR"},"fud":{"value":"fud-Latn-WF"},"snp":{"value":"snp-Latn-ZZ"},"la":{"value":"la-Latn-VA"},"und-CW":{"value":"pap-Latn-CW"},"fuf":{"value":"fuf-Latn-GN"},"lb":{"value":"lb-Latn-LU"},"und-CV":{"value":"pt-Latn-CV"},"fue":{"value":"fue-Latn-ZZ"},"und-CU":{"value":"es-Latn-CU"},"fuh":{"value":"fuh-Latn-ZZ"},"und-CZ":{"value":"cs-Latn-CZ"},"lg":{"value"
:"lg-Latn-UG"},"und-CY":{"value":"el-Grek-CY"},"bmh":{"value":"bmh-Latn-ZZ"},"snx":{"value":"snx-Latn-ZZ"},"li":{"value":"li-Latn-NL"},"sny":{"value":"sny-Latn-ZZ"},"wwa":{"value":"wwa-Latn-ZZ"},"bmk":{"value":"bmk-Latn-ZZ"},"und-Cher":{"value":"chr-Cher-US"},"fur":{"value":"fur-Latn-IT"},"ln":{"value":"ln-Latn-CD"},"und-BA":{"value":"bs-Latn-BA"},"fuq":{"value":"fuq-Latn-NE"},"lo":{"value":"lo-Laoo-LA"},"und-BG":{"value":"bg-Cyrl-BG"},"und-BF":{"value":"fr-Latn-BF"},"fuv":{"value":"fuv-Latn-NG"},"und-BE":{"value"
:"nl-Latn-BE"},"bmq":{"value":"bmq-Latn-ML"},"und-BD":{"value":"bn-Beng-BD"},"lt":{"value":"lt-Latn-LT"},"lu":{"value":"lu-Latn-CD"},"und-BJ":{"value":"fr-Latn-BJ"},"lv":{"value":"lv-Latn-LV"},"ogc":{"value":"ogc-Latn-ZZ"},"sog":{"value":"sog-Sogd-UZ"},"und-BI":{"value":"rn-Latn-BI"},"bmu":{"value":"bmu-Latn-ZZ"},"fuy":{"value":"fuy-Latn-ZZ"},"und-BH":{"value":"ar-Arab-BH"},"und-BO":{"value":"es-Latn-BO"},"und-BN":{"value":"ms-Latn-BN"},"sok":{"value":"sok-Latn-ZZ"},"und-BL":{"value":"fr-Latn-BL"},"und-BR":
{"value":"pt-Latn-BR"},"und-BQ":{"value":"pap-Latn-BQ"},"soq":{"value":"soq-Latn-ZZ"},"und-BV":{"value":"und-Latn-BV"},"und-BT":{"value":"dz-Tibt-BT"},"sou":{"value":"sou-Thai-TH"},"bng":{"value":"bng-Latn-ZZ"},"mg":{"value":"mg-Latn-MG"},"und-BY":{"value":"be-Cyrl-BY"},"und-Glag":{"value":"cu-Glag-BG"},"mh":{"value":"mh-Latn-MH"},"mi":{"value":"mi-Latn-NZ"},"soy":{"value":"soy-Latn-ZZ"},"mk":{"value":"mk-Cyrl-MK"},"ml":{"value":"ml-Mlym-IN"},"bnm":{"value":"bnm-Latn-ZZ"},"mn":{"value":"mn-Cyrl-MN"},"mo":{"value"
:"mo-Latn-RO"},"und-Prti":{"value":"xpr-Prti-IR"},"fvr":{"value":"fvr-Latn-SD"},"und-AF":{"value":"fa-Arab-AF"},"bnp":{"value":"bnp-Latn-ZZ"},"mr":{"value":"mr-Deva-IN"},"und-AE":{"value":"ar-Arab-AE"},"ms":{"value":"ms-Latn-MY"},"spd":{"value":"spd-Latn-ZZ"},"und-AD":{"value":"ca-Latn-AD"},"mt":{"value":"mt-Latn-MT"},"my":{"value":"my-Mymr-MM"},"zh-BN":{"value":"zh-Hant-BN"},"und-AM":{"value":"hy-Armn-AM"},"spl":{"value":"spl-Latn-ZZ"},"und-AL":{"value":"sq-Latn-AL"},"und-AR":{"value":"es-Latn-AR"},"und-AQ":
{"value":"und-Latn-AQ"},"na":{"value":"na-Latn-NR"},"und-AO":{"value":"pt-Latn-AO"},"nb":{"value":"nb-Latn-NO"},"nd":{"value":"nd-Latn-ZW"},"und-AT":{"value":"de-Latn-AT"},"ne":{"value":"ne-Deva-NP"},"sps":{"value":"sps-Latn-ZZ"},"und-AS":{"value":"sm-Latn-AS"},"und-AZ":{"value":"az-Latn-AZ"},"ng":{"value":"ng-Latn-NA"},"und-AX":{"value":"sv-Latn-AX"},"und-AW":{"value":"nl-Latn-AW"},"boj":{"value":"boj-Latn-ZZ"},"nl":{"value":"nl-Latn-NL"},"bon":{"value":"bon-Latn-ZZ"},"nn":{"value":"nn-Latn-NO"},"bom":{"value"
:"bom-Latn-ZZ"},"no":{"value":"no-Latn-NO"},"nr":{"value":"nr-Latn-ZA"},"arc-Nbat":{"value":"arc-Nbat-JO"},"und-Medf":{"value":"mis-Medf-NG"},"nv":{"value":"nv-Latn-US"},"kaa":{"value":"kaa-Cyrl-UZ"},"ny":{"value":"ny-Latn-MW"},"kac":{"value":"kac-Latn-MM"},"kab":{"value":"kab-Latn-DZ"},"kad":{"value":"kad-Latn-ZZ"},"kai":{"value":"kai-Latn-ZZ"},"oc":{"value":"oc-Latn-FR"},"zh-AU":{"value":"zh-Hant-AU"},"kaj":{"value":"kaj-Latn-NG"},"kam":{"value":"kam-Latn-KE"},"und-Tagb":{"value":"tbw-Tagb-PH"},"kao":{"value"
:"kao-Latn-ML"},"und-Ogam":{"value":"sga-Ogam-IE"},"om":{"value":"om-Latn-ET"},"srb":{"value":"srb-Sora-IN"},"or":{"value":"or-Orya-IN"},"tg-Arab":{"value":"tg-Arab-PK"},"os":{"value":"os-Cyrl-GE"},"und-Sogd":{"value":"sog-Sogd-UZ"},"bpy":{"value":"bpy-Beng-IN"},"kbd":{"value":"kbd-Cyrl-RU"},"srn":{"value":"srn-Latn-SR"},"pa":{"value":"pa-Guru-IN"},"srr":{"value":"srr-Latn-SN"},"bqc":{"value":"bqc-Latn-ZZ"},"und-Kthi":{"value":"bho-Kthi-IN"},"kbm":{"value":"kbm-Latn-ZZ"},"kbp":{"value":"kbp-Latn-ZZ"},"srx":
{"value":"srx-Deva-IN"},"bqi":{"value":"bqi-Arab-IR"},"kbq":{"value":"kbq-Latn-ZZ"},"pl":{"value":"pl-Latn-PL"},"bqp":{"value":"bqp-Latn-ZZ"},"kbx":{"value":"kbx-Latn-ZZ"},"kby":{"value":"kby-Arab-NE"},"ps":{"value":"ps-Arab-AF"},"pt":{"value":"pt-Latn-BR"},"ssd":{"value":"ssd-Latn-ZZ"},"und-Nkoo":{"value":"man-Nkoo-GN"},"bqv":{"value":"bqv-Latn-CI"},"ssg":{"value":"ssg-Latn-ZZ"},"und-Mymr":{"value":"my-Mymr-MM"},"kcg":{"value":"kcg-Latn-NG"},"bra":{"value":"bra-Deva-IN"},"kck":{"value":"kck-Latn-ZW"},"kcl":
{"value":"kcl-Latn-ZZ"},"okr":{"value":"okr-Latn-ZZ"},"ssy":{"value":"ssy-Latn-ER"},"brh":{"value":"brh-Arab-PK"},"okv":{"value":"okv-Latn-ZZ"},"kct":{"value":"kct-Latn-ZZ"},"und-Hani":{"value":"zh-Hani-CN"},"und-Bugi":{"value":"bug-Bugi-ID"},"und-Hang":{"value":"ko-Hang-KR"},"qu":{"value":"qu-Latn-PE"},"brx":{"value":"brx-Deva-IN"},"und-Samr":{"value":"smp-Samr-IL"},"brz":{"value":"brz-Latn-ZZ"},"stk":{"value":"stk-Latn-ZZ"},"und-Hano":{"value":"hnn-Hano-PH"},"kde":{"value":"kde-Latn-TZ"},"kdh":{"value":"kdh-Arab-TG"}
,"stq":{"value":"stq-Latn-DE"},"kdl":{"value":"kdl-Latn-ZZ"},"bsj":{"value":"bsj-Latn-ZZ"},"und-Hanb":{"value":"zh-Hanb-TW"},"kdt":{"value":"kdt-Thai-TH"},"rm":{"value":"rm-Latn-CH"},"rn":{"value":"rn-Latn-BI"},"ro":{"value":"ro-Latn-RO"},"sua":{"value":"sua-Latn-ZZ"},"und-Deva-BT":{"value":"ne-Deva-BT"},"bsq":{"value":"bsq-Bass-LR"},"bst":{"value":"bst-Ethi-ZZ"},"sue":{"value":"sue-Latn-ZZ"},"bss":{"value":"bss-Latn-CM"},"ru":{"value":"ru-Cyrl-RU"},"und-Buhd":{"value":"bku-Buhd-PH"},"rw":{"value":"rw-Latn-RW"}
,"kea":{"value":"kea-Latn-CV"},"suk":{"value":"suk-Latn-TZ"},"grc-Linb":{"value":"grc-Linb-GR"},"sa":{"value":"sa-Deva-IN"},"sc":{"value":"sc-Latn-IT"},"sus":{"value":"sus-Latn-GN"},"sd":{"value":"sd-Arab-PK"},"sur":{"value":"sur-Latn-ZZ"},"se":{"value":"se-Latn-NO"},"sg":{"value":"sg-Latn-CF"},"ken":{"value":"ken-Latn-CM"},"si":{"value":"si-Sinh-LK"},"und-Hant":{"value":"zh-Hant-TW"},"und-Hans":{"value":"zh-Hans-CN"},"sk":{"value":"sk-Latn-SK"},"sl":{"value":"sl-Latn-SI"},"sm":{"value":"sm-Latn-WS"},"sn":{"value"
:"sn-Latn-ZW"},"bto":{"value":"bto-Latn-PH"},"so":{"value":"so-Latn-SO"},"sq":{"value":"sq-Latn-AL"},"sr":{"value":"sr-Cyrl-RS"},"ss":{"value":"ss-Latn-ZA"},"kez":{"value":"kez-Latn-ZZ"},"st":{"value":"st-Latn-ZA"},"su":{"value":"su-Latn-ID"},"btt":{"value":"btt-Latn-ZZ"},"sv":{"value":"sv-Latn-SE"},"sw":{"value":"sw-Latn-TZ"},"btv":{"value":"btv-Deva-PK"},"ong":{"value":"ong-Latn-ZZ"},"ta":{"value":"ta-Taml-IN"},"onn":{"value":"onn-Latn-ZZ"},"bua":{"value":"bua-Cyrl-RU"},"bud":{"value":"bud-Latn-ZZ"},"buc":
{"value":"buc-Latn-YT"},"te":{"value":"te-Telu-IN"},"tg":{"value":"tg-Cyrl-TJ"},"th":{"value":"th-Thai-TH"},"und-Gong":{"value":"wsg-Gong-IN"},"bug":{"value":"bug-Latn-ID"},"kfo":{"value":"kfo-Latn-CI"},"ons":{"value":"ons-Latn-ZZ"},"ti":{"value":"ti-Ethi-ET"},"kfr":{"value":"kfr-Deva-IN"},"tk":{"value":"tk-Latn-TM"},"tl":{"value":"tl-Latn-PH"},"und-Lisu":{"value":"lis-Lisu-CN"},"buk":{"value":"buk-Latn-ZZ"},"tn":{"value":"tn-Latn-ZA"},"bum":{"value":"bum-Latn-CM"},"to":{"value":"to-Latn-TO"},"buo":{"value"
:"buo-Latn-ZZ"},"swc":{"value":"swc-Latn-CD"},"tr":{"value":"tr-Latn-TR"},"und-Gonm":{"value":"esg-Gonm-IN"},"kfy":{"value":"kfy-Deva-IN"},"swb":{"value":"swb-Arab-YT"},"ts":{"value":"ts-Latn-ZA"},"tt":{"value":"tt-Cyrl-RU"},"bus":{"value":"bus-Latn-ZZ"},"swg":{"value":"swg-Latn-DE"},"buu":{"value":"buu-Latn-ZZ"},"ty":{"value":"ty-Latn-PF"},"kge":{"value":"kge-Latn-ID"},"kgf":{"value":"kgf-Latn-ZZ"},"swp":{"value":"swp-Latn-ZZ"},"bvb":{"value":"bvb-Latn-GQ"},"ug":{"value":"ug-Arab-CN"},"swv":{"value":"swv-Deva-IN"}
,"kgp":{"value":"kgp-Latn-BR"},"uk":{"value":"uk-Cyrl-UA"},"ur":{"value":"ur-Arab-PK"},"kk-IR":{"value":"kk-Arab-IR"},"khb":{"value":"khb-Talu-CN"},"kha":{"value":"kha-Latn-IN"},"uz":{"value":"uz-Latn-UZ"},"sxn":{"value":"sxn-Latn-ID"},"xav":{"value":"xav-Latn-BR"},"opm":{"value":"opm-Latn-ZZ"},"bwd":{"value":"bwd-Latn-ZZ"},"und-Mlym":{"value":"ml-Mlym-IN"},"ve":{"value":"ve-Latn-ZA"},"khn":{"value":"khn-Deva-IN"},"sxw":{"value":"sxw-Latn-ZZ"},"vi":{"value":"vi-Latn-VN"},"khq":{"value":"khq-Latn-ML"},"kht":
{"value":"kht-Mymr-IN"},"khs":{"value":"khs-Latn-ZZ"},"vo":{"value":"vo-Latn-001"},"khw":{"value":"khw-Arab-PK"},"bwr":{"value":"bwr-Latn-ZZ"},"khz":{"value":"khz-Latn-ZZ"},"und-ZW":{"value":"sn-Latn-ZW"},"xbi":{"value":"xbi-Latn-ZZ"},"gaa":{"value":"gaa-Latn-GH"},"syl":{"value":"syl-Beng-BD"},"wa":{"value":"wa-Latn-BE"},"gag":{"value":"gag-Latn-MD"},"gaf":{"value":"gaf-Latn-ZZ"},"kij":{"value":"kij-Latn-ZZ"},"syr":{"value":"syr-Syrc-IQ"},"und-YE":{"value":"ar-Arab-YE"},"gah":{"value":"gah-Latn-ZZ"},"gaj":{"value"
:"gaj-Latn-ZZ"},"gam":{"value":"gam-Latn-ZZ"},"bxh":{"value":"bxh-Latn-ZZ"},"gan":{"value":"gan-Hans-CN"},"kiu":{"value":"kiu-Latn-TR"},"kiw":{"value":"kiw-Latn-ZZ"},"wo":{"value":"wo-Latn-SN"},"gaw":{"value":"gaw-Latn-ZZ"},"und-Sarb":{"value":"xsa-Sarb-YE"},"gay":{"value":"gay-Latn-ID"},"und-YT":{"value":"fr-Latn-YT"},"kjd":{"value":"kjd-Latn-ZZ"},"szl":{"value":"szl-Latn-PL"},"xco":{"value":"xco-Chrs-UZ"},"xcr":{"value":"xcr-Cari-TR"},"gba":{"value":"gba-Latn-ZZ"},"und-Mult":{"value":"skr-Mult-PK"},"kjg":
{"value":"kjg-Laoo-LA"},"gbf":{"value":"gbf-Latn-ZZ"},"oro":{"value":"oro-Latn-ZZ"},"und-Hatr":{"value":"mis-Hatr-IQ"},"bye":{"value":"bye-Latn-ZZ"},"xh":{"value":"xh-Latn-ZA"},"gbm":{"value":"gbm-Deva-IN"},"oru":{"value":"oru-Arab-ZZ"},"kjs":{"value":"kjs-Latn-ZZ"},"byn":{"value":"byn-Ethi-ER"},"und-XK":{"value":"sq-Latn-XK"},"yue-CN":{"value":"yue-Hans-CN"},"und-Lepc":{"value":"lep-Lepc-IN"},"byr":{"value":"byr-Latn-ZZ"},"kjy":{"value":"kjy-Latn-ZZ"},"osa":{"value":"osa-Osge-US"},"bys":{"value":"bys-Latn-ZZ"}
,"byv":{"value":"byv-Latn-CM"},"gbz":{"value":"gbz-Arab-IR"},"gby":{"value":"gby-Latn-ZZ"},"byx":{"value":"byx-Latn-ZZ"},"kkc":{"value":"kkc-Latn-ZZ"},"und-VU":{"value":"bi-Latn-VU"},"bza":{"value":"bza-Latn-ZZ"},"und-Goth":{"value":"got-Goth-UA"},"kkj":{"value":"kkj-Latn-CM"},"bze":{"value":"bze-Latn-ML"},"und-Avst":{"value":"ae-Avst-IR"},"bzf":{"value":"bzf-Latn-ZZ"},"yi":{"value":"yi-Hebr-001"},"bzh":{"value":"bzh-Latn-ZZ"},"und-WF":{"value":"fr-Latn-WF"},"yo":{"value":"yo-Latn-NG"},"gcr":{"value":"gcr-Latn-GF"}
,"ota":{"value":"ota-Arab-ZZ"},"und-WS":{"value":"sm-Latn-WS"},"bzw":{"value":"bzw-Latn-ZZ"},"und-UZ":{"value":"uz-Latn-UZ"},"und-UY":{"value":"es-Latn-UY"},"otk":{"value":"otk-Orkh-MN"},"xes":{"value":"xes-Latn-ZZ"},"za":{"value":"za-Latn-CN"},"gde":{"value":"gde-Latn-ZZ"},"kln":{"value":"kln-Latn-KE"},"und-VA":{"value":"it-Latn-VA"},"zh":{"value":"zh-Hans-CN"},"gdn":{"value":"gdn-Latn-ZZ"},"klq":{"value":"klq-Latn-ZZ"},"und-Saur":{"value":"saz-Saur-IN"},"klt":{"value":"klt-Latn-ZZ"},"und-VE":{"value":"es-Latn-VE"}
,"gdr":{"value":"gdr-Latn-ZZ"},"klx":{"value":"klx-Latn-ZZ"},"und-VN":{"value":"vi-Latn-VN"},"kk-MN":{"value":"kk-Arab-MN"},"zu":{"value":"zu-Latn-ZA"},"und-Armn":{"value":"hy-Armn-AM"},"kmb":{"value":"kmb-Latn-AO"},"und-TR":{"value":"tr-Latn-TR"},"geb":{"value":"geb-Latn-ZZ"},"und-TW":{"value":"zh-Hant-TW"},"kmh":{"value":"kmh-Latn-ZZ"},"und-TV":{"value":"tvl-Latn-TV"},"und-TZ":{"value":"sw-Latn-TZ"},"kmo":{"value":"kmo-Latn-ZZ"},"gej":{"value":"gej-Latn-ZZ"},"und-UA":{"value":"uk-Cyrl-UA"},"gel":{"value":
"gel-Latn-ZZ"},"kms":{"value":"kms-Latn-ZZ"},"kmu":{"value":"kmu-Latn-ZZ"},"kmw":{"value":"kmw-Latn-ZZ"},"und-Tibt":{"value":"bo-Tibt-CN"},"und-UG":{"value":"sw-Latn-UG"},"und-Armi":{"value":"arc-Armi-IR"},"gez":{"value":"gez-Ethi-ET"},"und-ST":{"value":"pt-Latn-ST"},"knf":{"value":"knf-Latn-GW"},"und-SR":{"value":"nl-Latn-SR"},"und-SV":{"value":"es-Latn-SV"},"und-SY":{"value":"ar-Arab-SY"},"knp":{"value":"knp-Latn-ZZ"},"gfk":{"value":"gfk-Latn-ZZ"},"und-TD":{"value":"fr-Latn-TD"},"und-TH":{"value":"th-Thai-TH"}
,"und-TG":{"value":"fr-Latn-TG"},"und-TF":{"value":"fr-Latn-TF"},"und-TM":{"value":"tk-Latn-TM"},"und-TL":{"value":"pt-Latn-TL"},"und-TK":{"value":"tkl-Latn-TK"},"und-TJ":{"value":"tg-Cyrl-TJ"},"und-TO":{"value":"to-Latn-TO"},"und-TN":{"value":"ar-Arab-TN"},"und-RS":{"value":"sr-Cyrl-RS"},"koi":{"value":"koi-Cyrl-RU"},"und-RW":{"value":"rw-Latn-RW"},"kok":{"value":"kok-Deva-IN"},"und-RU":{"value":"ru-Cyrl-RU"},"kol":{"value":"kol-Latn-ZZ"},"kos":{"value":"kos-Latn-FM"},"ggn":{"value":"ggn-Deva-NP"},"und-SD":
{"value":"ar-Arab-SD"},"und-SC":{"value":"fr-Latn-SC"},"und-SA":{"value":"ar-Arab-SA"},"koz":{"value":"koz-Latn-ZZ"},"und-SE":{"value":"sv-Latn-SE"},"und-SK":{"value":"sk-Latn-SK"},"und-SJ":{"value":"nb-Latn-SJ"},"und-SI":{"value":"sl-Latn-SI"},"taj":{"value":"taj-Deva-NP"},"und-SO":{"value":"so-Latn-SO"},"tal":{"value":"tal-Latn-ZZ"},"und-SN":{"value":"fr-Latn-SN"},"und-Osge":{"value":"osa-Osge-US"},"und-SM":{"value":"it-Latn-SM"},"kpf":{"value":"kpf-Latn-ZZ"},"tan":{"value":"tan-Latn-ZZ"},"kpe":{"value":"kpe-Latn-LR"}
,"und-QO":{"value":"en-Latn-DG"},"taq":{"value":"taq-Latn-ZZ"},"kpo":{"value":"kpo-Latn-ZZ"},"kpr":{"value":"kpr-Latn-ZZ"},"kpx":{"value":"kpx-Latn-ZZ"},"ghs":{"value":"ghs-Latn-ZZ"},"und-Lana":{"value":"nod-Lana-TH"},"tbc":{"value":"tbc-Latn-ZZ"},"und-RE":{"value":"fr-Latn-RE"},"tbd":{"value":"tbd-Latn-ZZ"},"tbg":{"value":"tbg-Latn-ZZ"},"tbf":{"value":"tbf-Latn-ZZ"},"und-RO":{"value":"ro-Latn-RO"},"kqb":{"value":"kqb-Latn-ZZ"},"tbo":{"value":"tbo-Latn-ZZ"},"kqf":{"value":"kqf-Latn-ZZ"},"und-PT":{"value":"pt-Latn-PT"}
,"und-PS":{"value":"ar-Arab-PS"},"cad":{"value":"cad-Latn-US"},"und-PR":{"value":"es-Latn-PR"},"tbw":{"value":"tbw-Latn-PH"},"und-PY":{"value":"gn-Latn-PY"},"gim":{"value":"gim-Latn-ZZ"},"und-PW":{"value":"pau-Latn-PW"},"gil":{"value":"gil-Latn-KI"},"kqs":{"value":"kqs-Latn-ZZ"},"tbz":{"value":"tbz-Latn-ZZ"},"und-Laoo":{"value":"lo-Laoo-LA"},"can":{"value":"can-Latn-ZZ"},"und-QA":{"value":"ar-Arab-QA"},"kqy":{"value":"kqy-Ethi-ZZ"},"ms-CC":{"value":"ms-Arab-CC"},"tci":{"value":"tci-Latn-ZZ"},"krc":{"value":
"krc-Cyrl-RU"},"krj":{"value":"krj-Latn-PH"},"kri":{"value":"kri-Latn-SL"},"ozm":{"value":"ozm-Latn-ZZ"},"und-OM":{"value":"ar-Arab-OM"},"krl":{"value":"krl-Latn-RU"},"gjk":{"value":"gjk-Arab-PK"},"cbj":{"value":"cbj-Latn-ZZ"},"gjn":{"value":"gjn-Latn-ZZ"},"tcy":{"value":"tcy-Knda-IN"},"xla":{"value":"xla-Latn-ZZ"},"krs":{"value":"krs-Latn-ZZ"},"xlc":{"value":"xlc-Lyci-TR"},"kru":{"value":"kru-Deva-IN"},"und-PA":{"value":"es-Latn-PA"},"xld":{"value":"xld-Lydi-TR"},"gju":{"value":"gju-Arab-PK"},"und-PE":{"value"
:"es-Latn-PE"},"tdd":{"value":"tdd-Tale-CN"},"tdg":{"value":"tdg-Deva-NP"},"tdh":{"value":"tdh-Deva-NP"},"und-PH":{"value":"fil-Latn-PH"},"und-PG":{"value":"tpi-Latn-PG"},"ksb":{"value":"ksb-Latn-TZ"},"und-PF":{"value":"fr-Latn-PF"},"und-PM":{"value":"fr-Latn-PM"},"ksd":{"value":"ksd-Latn-ZZ"},"und-PL":{"value":"pl-Latn-PL"},"und-PK":{"value":"ur-Arab-PK"},"ksf":{"value":"ksf-Latn-CM"}};}
function M7(){return {"value":"en_GB"};}
function MR(){return {"root":{"value":"#,##0.###"},"en":{"value":"#,##0.###"}};}
function O0(){return {"root":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37},"en":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37}};}
var Km=H();
var JS=H();
function K4(b){var c,d,e,f,g,h,i;c=Pr(Fm(b));d=ER(c);e=BY(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+ER(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=F4(c);h=h+1|0;}return e;}
function I_(b){var c,d,e,f,g,h,i,j,k,l;c=BY(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;KH(c,e,k,f);g=g+2|0;e=k;f=j;}}l=new HH;l.fQ=b;l.d9=c;return l;}
function Fn(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Kb(){var a=this;E.call(a);a.eF=null;a.fw=0;}
function Pr(a){var b=new Kb();Pl(b,a);return b;}
function Pl(a,b){a.eF=b;}
var K3=H();
function ER(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.eF.data;f=b.fw;b.fw=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+CJ(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function F4(b){var c,d;c=ER(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var JG=H();
function Jw(b,c){var d,e,f,g;b=b.data;d=BU(c);e=d.data;f=BT(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function K1(b,c){var d,e,f,g;b=b.data;d=OI(c);e=d.data;f=BT(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Lh(b,c){var d,e,f,g;d=b.data;e=JY(DM(CN(b)),c);f=BT(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function KH(b,c,d,e){var f,g,h;if(c>d){f=new Bg;Z(f);L(f);}while(c<d){g=b.data;h=c+1|0;g[c]=e;c=h;}}
function EP(b,c){KH(b,0,b.data.length,c);}
function Ii(){var a=this;E.call(a);a.c=null;a.be=0;a.dd=null;a.er=0;a.bO=0;a.bv=0;a.F=0;a.cQ=null;}
function E1(a){return a.c.L;}
function IQ(a,b,c,d){var e,f,g,h,i,j;e=Go();f=a.be;g=0;if(c!=f)a.be=c;a:{switch(b){case -1073741784:h=new IM;c=a.F+1|0;a.F=c;C8(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new HG;c=a.F+1|0;a.F=c;C8(h,c);break a;case -33554392:h=new FQ;c=a.F+1|0;a.F=c;C8(h,c);break a;default:c=a.bO+1|0;a.bO=c;if(d!==null)h=Tj(c);else{h=new CY;C8(h,0);g=1;}c=a.bO;if(c<=(-1))break a;if(c>=10)break a;a.dd.data[c]=h;break a;}h=new IL;C8(h,(-1));}while(true){if(CR(a.c)&&a.c.e==(-536870788))
{d=QV(Br(a,2),Br(a,64));while(!Cc(a.c)&&CR(a.c)){i=a.c;j=i.e;if(j&&j!=(-536870788)&&j!=(-536870871))break;BD(d,V(i));i=a.c;if(i.z!=(-536870788))continue;V(i);}i=Fs(a,d);i.s(h);}else if(a.c.z==(-536870788)){i=Dr(h);V(a.c);}else{i=Hh(a,h);d=a.c;if(d.z==(-536870788))V(d);}if(i!==null)BK(e,i);if(Cc(a.c))break;if(a.c.z==(-536870871))break;}if(a.c.dx==(-536870788))BK(e,Dr(h));if(a.be!=f&&!g){a.be=f;d=a.c;d.bU=f;d.e=d.z;d.bB=d.by;j=d.Y;d.i=j+1|0;d.cc=j;CW(d);}switch(b){case -1073741784:break;case -536870872:d=new FI;CZ(d,
e,h);return d;case -268435416:d=new HP;CZ(d,e,h);return d;case -134217688:d=new In;CZ(d,e,h);return d;case -67108824:d=new Gd;CZ(d,e,h);return d;case -33554392:d=new Cr;CZ(d,e,h);return d;default:switch(e.H){case 0:break;case 1:return S3(Ca(e,0),h);default:return T8(e,h);}return Dr(h);}d=new Ej;CZ(d,e,h);return d;}
function Kr(a){var b,c,d,e,f,g,h;b=BY(4);c=(-1);d=(-1);if(!Cc(a.c)&&CR(a.c)){e=b.data;c=V(a.c);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BU(3);b=e.data;b[0]=c&65535;f=a.c;g=f.z;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;V(f);f=a.c;g=f.z;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;V(f);return QG(e,3);}return QG(e,2);}if(!Br(a,2))return Kp(b[0]);if(Br(a,64))return OE(b[0]);return Oj(b[0]);}e=b.data;c=1;while(c<4&&!Cc(a.c)&&CR(a.c)){h=c+1|0;e[c]=V(a.c);c=h;}if(c==1){h=e[0];if(!(VU.hg(h)==VV?0:1))return II(a,e[0]);}if(!Br(a,2))return T$(b,
c);if(Br(a,64)){f=new Iz;Gq(f,b,c);return f;}f=new Gn;Gq(f,b,c);return f;}
function Hh(a,b){var c,d,e,f,g,h,i;if(CR(a.c)&&!EQ(a.c)&&E$(a.c.e)){if(Br(a,128)){c=Kr(a);if(!Cc(a.c)){d=a.c;e=d.z;if(!(e==(-536870871)&&!(b instanceof CY))&&e!=(-536870788)&&!CR(d))c=Fj(a,b,c);}}else if(!Gw(a.c)&&!Hn(a.c)){f=new Gy;W(f);while(!Cc(a.c)&&CR(a.c)&&!Gw(a.c)&&!Hn(a.c)){if(!(!EQ(a.c)&&!a.c.e)&&!(!EQ(a.c)&&E$(a.c.e))){g=a.c.e;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=V(a.c);if(!Fa(e))Bv(f,e&65535);else DW(f,C_(e));}if(!Br(a,2)){c=new IG;Cp(c);c.T
=S(f);e=f.k;c.K=e;c.dp=M0(e);c.cS=M0(c.K);h=0;while(h<(c.K-1|0)){Ir(c.dp,I(c.T,h),(c.K-h|0)-1|0);Ir(c.cS,I(c.T,(c.K-h|0)-1|0),(c.K-h|0)-1|0);h=h+1|0;}}else if(Br(a,64))c=T9(f);else{c=new F6;Cp(c);c.ch=S(f);c.K=f.k;}}else c=Fj(a,b,Ix(a,b));}else{d=a.c;if(d.z!=(-536870871))c=Fj(a,b,Ix(a,b));else{if(b instanceof CY)L(Bs(B(93),d.L,Gv(d)));c=Dr(b);}}a:{if(!Cc(a.c)){e=a.c.z;if(!(e==(-536870871)&&!(b instanceof CY))&&e!=(-536870788)){f=Hh(a,b);if(c instanceof B5&&!(c instanceof CX)&&!(c instanceof BV)&&!(c instanceof CH))
{i=c;if(!f.M(i.p)){c=new HZ;CM(c,i.p,i.b,i.b8);c.p.s(c);}}if((f.ca()&65535)!=43)c.s(f);else c.s(f.p);break a;}}if(c===null)return null;c.s(b);}if((c.ca()&65535)!=43)return c;return c.p;}
function Fj(a,b,c){var d,e,f,g,h;d=a.c;e=d.z;if(c!==null&&!(c instanceof Bn)){switch(e){case -2147483606:V(d);d=new I1;B_(d,c,b,e);Fq();c.s(VW);return d;case -2147483605:V(d);d=new HC;B_(d,c,b,(-2147483606));Fq();c.s(VW);return d;case -2147483585:V(d);d=new Hm;B_(d,c,b,(-536870849));Fq();c.s(VW);return d;case -2147483525:f=new F5;d=C4(d);g=a.bv+1|0;a.bv=g;Ew(f,d,c,b,(-536870849),g);Fq();c.s(VW);return f;case -1073741782:case -1073741781:V(d);d=new IE;B_(d,c,b,e);c.s(d);return d;case -1073741761:V(d);d=new H4;B_(d,
c,b,(-536870849));c.s(b);return d;case -1073741701:h=new Ha;d=C4(d);e=a.bv+1|0;a.bv=e;Ew(h,d,c,b,(-536870849),e);c.s(h);return h;case -536870870:case -536870869:V(d);if(c.ca()!=(-2147483602)){d=new BV;B_(d,c,b,e);}else if(Br(a,32)){d=new IF;B_(d,c,b,e);}else{d=new GE;f=Hp(a.be);B_(d,c,b,e);d.dv=f;}c.s(d);return d;case -536870849:V(d);d=new Db;B_(d,c,b,(-536870849));c.s(b);return d;case -536870789:h=new C5;d=C4(d);e=a.bv+1|0;a.bv=e;Ew(h,d,c,b,(-536870849),e);c.s(h);return h;default:}return c;}f=null;if(c!==null)f
=c;switch(e){case -2147483606:case -2147483605:V(d);d=new I2;CM(d,f,b,e);f.b=d;return d;case -2147483585:V(d);c=new HV;CM(c,f,b,(-2147483585));return c;case -2147483525:c=new Hg;IW(c,C4(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:V(d);d=new H2;CM(d,f,b,e);f.b=d;return d;case -1073741761:V(d);c=new Gr;CM(c,f,b,(-1073741761));return c;case -1073741701:c=new Io;IW(c,C4(d),f,b,(-1073741701));return c;case -536870870:case -536870869:V(d);d=Tb(f,b,e);f.b=d;return d;case -536870849:V(d);c=new CH;CM(c,
f,b,(-536870849));return c;case -536870789:return Tt(C4(d),f,b,(-536870789));default:}return c;}
function Ix(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof CY;while(true){a:{e=a.c;f=e.z;if((f&(-2147418113))==(-2147483608)){V(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.be=g;else{if(f!=(-1073741784))g=a.be;c=IQ(a,f,g,b);e=a.c;if(e.z!=(-536870871))L(Bs(B(93),e.L,e.Y));V(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:V(e);c
=Qo(0);break a;case -2147483577:V(e);c=new GA;Bi(c);break a;case -2147483558:V(e);c=new Ih;h=a.F+1|0;a.F=h;KM(c,h);break a;case -2147483550:V(e);c=Qo(1);break a;case -2147483526:V(e);c=new H7;Bi(c);break a;case -536870876:V(e);a.F=a.F+1|0;if(Br(a,8)){if(Br(a,1)){c=TL(a.F);break a;}c=SP(a.F);break a;}if(Br(a,1)){c=SG(a.F);break a;}c=Tq(a.F);break a;case -536870866:V(e);if(Br(a,32)){c=TP();break a;}c=Tg(Hp(a.be));break a;case -536870821:V(e);i=0;c=a.c;if(c.z==(-536870818)){i=1;V(c);}c=Fs(a,Do(a,i));c.s(b);e=a.c;if
(e.z!=(-536870819))L(Bs(B(93),e.L,e.Y));G3(e,1);V(a.c);break a;case -536870818:V(e);a.F=a.F+1|0;if(!Br(a,8)){c=new Fc;Bi(c);break a;}c=new F9;e=Hp(a.be);Bi(c);c.d3=e;break a;case 0:j=e.by;if(j!==null)c=Fs(a,j);else{if(Cc(e)){c=Dr(b);break a;}c=Kp(f&65535);}V(a.c);break a;default:break b;}V(e);c=new Fc;Bi(c);break a;}h=(f&2147483647)-48|0;if(a.bO<h)L(Bs(B(93),C7(e),Gv(a.c)));V(e);a.F=a.F+1|0;c=!Br(a,2)?SV(h,a.F):Br(a,64)?TM(h,a.F):T4(h,a.F);a.dd.data[h].da=1;a.er=1;break a;}if(f>=0&&!Ds(e)){c=II(a,f);V(a.c);}
else if(f==(-536870788))c=Dr(b);else{if(f!=(-536870871)){b=new Eb;c=!Ds(a.c)?If(f&65535):a.c.by.ba();e=a.c;ED(b,c,e.L,e.Y);L(b);}if(d){b=new Eb;e=a.c;ED(b,B(93),e.L,e.Y);L(b);}c=Dr(b);}}}if(f!=(-16777176))break;}return c;}
function Do(a,b){var c,d,e,f,g,h,i,j,$$je;c=QV(Br(a,2),Br(a,64));CE(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Cc(a.c))break a;h=a.c;b=h.z;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)BD(c,d);d=V(a.c);h=a.c;if(h.z!=(-536870874)){d=38;break d;}if(h.e==(-536870821)){V(h);e=1;d=(-1);break d;}V(h);if(g){c=Do(a,0);break d;}if(a.c.z==(-536870819))break d;H_(c,Do(a,0));break d;case -536870867:if(!g){b=h.e;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){V(h);h=a.c;i=h.z;if(Ds(h))break c;if
(i<0){j=a.c.e;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(E$(i))break e;i=i&65535;break e;}catch($$e){$$je=Da($$e);if($$je instanceof Ct){break b;}else{throw $$e;}}}try{Bk(c,d,i);}catch($$e){$$je=Da($$e);if($$je instanceof Ct){break b;}else{throw $$e;}}V(a.c);d=(-1);break d;}}if(d>=0)BD(c,d);d=45;V(a.c);break d;case -536870821:if(d>=0){BD(c,d);d=(-1);}V(a.c);j=0;h=a.c;if(h.z==(-536870818)){V(h);j=1;}if(!e)I9(c,Do(a,j));else H_(c,Do(a,j));e=0;V(a.c);break d;case -536870819:if(d>=0)BD(c,d);d=
93;V(a.c);break d;case -536870818:if(d>=0)BD(c,d);d=94;V(a.c);break d;case 0:if(d>=0)BD(c,d);h=a.c.by;if(h===null)d=0;else{LJ(c,h);d=(-1);}V(a.c);break d;default:}if(d>=0)BD(c,d);d=V(a.c);}g=0;}L(Bs(B(93),E1(a),a.c.Y));}L(Bs(B(93),E1(a),a.c.Y));}if(!f){if(d>=0)BD(c,d);return c;}L(Bs(B(93),E1(a),a.c.Y-1|0));}
function II(a,b){var c,d,e;c=Fa(b);if(Br(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Oj(b&65535);}if(Br(a,64)&&b>128){if(c){d=new FD;Cp(d);d.K=2;d.fz=Dh(De(b));return d;}if(G$(b))return M8(b&65535);if(!FC(b))return OE(b&65535);return Ru(b&65535);}}if(!c){if(G$(b))return M8(b&65535);if(!FC(b))return Kp(b&65535);return Ru(b&65535);}d=new Cu;Cp(d);d.K=2;d.bN=b;e=(C_(b)).data;d.cL=e[0];d.cB=e[1];return d;}
function Fs(a,b){var c,d,e;if(!Jb(b)){if(!b.r){if(b.b5())return Q2(b);return Qp(b);}if(!b.b5())return R0(b);c=new Ex;GC(c,b);return c;}c=JB(b);d=new FO;Bi(d);d.e$=c;d.f5=c.A;if(!b.r){if(b.b5())return JO(Q2(DX(b)),d);return JO(Qp(DX(b)),d);}if(!b.b5())return JO(R0(DX(b)),d);c=new HU;e=new Ex;GC(e,DX(b));Lr(c,e,d);return c;}
function D0(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Br(a,b){return (a.be&b)!=b?0:1;}
var H1=H(Bx);
var I0=H(Bx);
function Bd(){var a=this;E.call(a);a.b=null;a.P=0;a.eU=null;a.b8=0;}
var UY=0;function Bi(a){var b;b=UY;UY=b+1|0;a.eU=Dp(b);}
function Fr(a,b){var c;c=UY;UY=c+1|0;a.eU=Dp(c);a.b=b;}
function D2(a,b,c,d){var e;e=d.j;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function D$(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function OP(a,b){a.b8=b;}
function N1(a){return a.b8;}
function PO(a){return a.b;}
function QK(a,b){a.b=b;}
function QJ(a,b){return 1;}
function RF(a){return null;}
function Er(a){var b;a.P=1;b=a.b;if(b!==null){if(!b.P){b=b.bF();if(b!==null){a.b.P=1;a.b=b;}a.b.bp();}else if(b instanceof DF&&b.bs.da)a.b=b.b;}}
function Lz(){UY=1;}
function BR(){var a=this;Bd.call(a);a.da=0;a.bh=0;}
var VW=null;function Fq(){Fq=Bt(BR);PX();}
function Tj(a){var b=new BR();C8(b,a);return b;}
function C8(a,b){Fq();Bi(a);a.bh=b;}
function Ne(a,b,c,d){var e,f;e=D1(d,a.bh);EN(d,a.bh,b);f=a.b.a(b,c,d);if(f<0)EN(d,a.bh,e);return f;}
function Md(a){return a.bh;}
function NP(a,b){return 0;}
function PX(){var b;b=new Gz;Bi(b);VW=b;}
function Dk(){var a=this;E.call(a);a.y=null;a.bU=0;a.bu=0;a.e_=0;a.dx=0;a.z=0;a.e=0;a.ea=0;a.by=null;a.bB=null;a.i=0;a.ce=0;a.Y=0;a.cc=0;a.L=null;}
var VX=null;var VU=null;var VV=0;function G3(a,b){if(b>0&&b<3)a.bu=b;if(b==1){a.e=a.z;a.bB=a.by;a.i=a.cc;a.cc=a.Y;CW(a);}}
function Ds(a){return a.by===null?0:1;}
function EQ(a){return a.bB===null?0:1;}
function V(a){CW(a);return a.dx;}
function C4(a){var b;b=a.by;CW(a);return b;}
function CW(a){var b,c,d,e,f,g,h,$$je;a.dx=a.z;a.z=a.e;a.by=a.bB;a.Y=a.cc;a.cc=a.i;while(true){b=0;c=a.i>=a.y.data.length?0:E0(a);a.e=c;a.bB=null;if(a.bu==4){if(c!=92)return;c=a.i;d=a.y.data;c=c>=d.length?0:d[Bl(a)];a.e=c;switch(c){case 69:break;default:a.e=92;a.i=a.ce;return;}a.bu=a.e_;a.e=a.i>(a.y.data.length-2|0)?0:E0(a);}a:{c=a.e;if(c!=92){e=a.bu;if(e==1)switch(c){case 36:a.e=(-536870876);break a;case 40:if(a.y.data[a.i]!=63){a.e=(-2147483608);break a;}Bl(a);c=a.y.data[a.i];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.e=(-134217688);Bl(a);break b;default:L(Bs(B(93),C7(a),a.i));}a.e=(-67108824);Bl(a);}else{switch(c){case 33:break;case 60:Bl(a);c=a.y.data[a.i];e=1;break b;case 61:a.e=(-536870872);Bl(a);break b;case 62:a.e=(-33554392);Bl(a);break b;default:f=LB(a);a.e=f;if(f<256){a.bU=f;f=f<<16;a.e=f;a.e=(-1073741784)|f;break b;}f=f&255;a.e=f;a.bU=f;f=f<<16;a.e=f;a.e=(-16777176)|f;break b;}a.e=(-268435416);Bl(a);}}if(!e)break;}break a;case 41:a.e=(-536870871);break a;case 42:case 43:case 63:e=a.i;d
=a.y.data;switch(e>=d.length?42:d[e]){case 43:a.e=c|(-2147483648);Bl(a);break a;case 63:a.e=c|(-1073741824);Bl(a);break a;default:}a.e=c|(-536870912);break a;case 46:a.e=(-536870866);break a;case 91:a.e=(-536870821);G3(a,2);break a;case 93:if(e!=2)break a;a.e=(-536870819);break a;case 94:a.e=(-536870818);break a;case 123:a.bB=K0(a,c);break a;case 124:a.e=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.e=(-536870874);break a;case 45:a.e=(-536870867);break a;case 91:a.e=(-536870821);break a;case 93:a.e
=(-536870819);break a;case 94:a.e=(-536870818);break a;default:}}else{c=a.i>=(a.y.data.length-2|0)?(-1):E0(a);c:{a.e=c;switch(c){case -1:L(Bs(B(93),C7(a),a.i));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.e
=Jy(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bu!=1)break a;a.e=(-2147483648)|c;break a;case 65:a.e=(-2147483583);break a;case 66:a.e=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(Bs(B(93),C7(a),a.i));case 68:case 83:case 87:case 100:case 115:case 119:a.bB=IV(G6(a.y,
a.ce,1),0);a.e=0;break a;case 71:a.e=(-2147483577);break a;case 80:case 112:break c;case 81:a.e_=a.bu;a.bu=4;b=1;break a;case 90:a.e=(-2147483558);break a;case 97:a.e=7;break a;case 98:a.e=(-2147483550);break a;case 99:c=a.i;d=a.y.data;if(c>=(d.length-2|0))L(Bs(B(93),C7(a),a.i));a.e=d[Bl(a)]&31;break a;case 101:a.e=27;break a;case 102:a.e=12;break a;case 110:a.e=10;break a;case 114:a.e=13;break a;case 116:a.e=9;break a;case 117:a.e=HE(a,4);break a;case 120:a.e=HE(a,2);break a;case 122:a.e=(-2147483526);break a;default:}break a;}g
=Jl(a);h=0;if(a.e==80)h=1;try{a.bB=IV(g,h);}catch($$e){$$je=Da($$e);if($$je instanceof EA){L(Bs(B(93),C7(a),a.i));}else{throw $$e;}}a.e=0;}}if(b)continue;else break;}}
function Jl(a){var b,c,d,e,f,g;b=new T;Di(b,10);c=a.i;d=a.y;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=G6(d,Bl(a),1);f=new T;W(f);N(N(f,B(125)),b);return S(f);}Bl(a);c=0;a:{while(true){g=a.i;d=a.y.data;if(g>=(d.length-2|0))break;c=d[Bl(a)];if(c==125)break a;Bv(b,c);}}if(c!=125)L(Bs(B(93),a.L,a.i));}if(!b.k)L(Bs(B(93),a.L,a.i));f=S(b);if(O(f)==1){b=new T;W(b);N(N(b,B(125)),f);return S(b);}b:{c:{if(O(f)>3){if(IK(f,B(125)))break c;if(IK(f,B(126)))break c;}break b;}f=DB(f,2);}return f;}
function K0(a,b){var c,d,e,f,g,$$je;c=new T;Di(c,4);d=(-1);e=2147483647;a:{while(true){f=a.i;g=a.y.data;if(f>=g.length)break a;b=g[Bl(a)];if(b==125)break a;if(b==44&&d<0)try{d=DV(CA(c),10);K7(c,0,Gs(c));continue;}catch($$e){$$je=Da($$e);if($$je instanceof Bw){break;}else{throw $$e;}}Bv(c,b&65535);}L(Bs(B(93),a.L,a.i));}if(b!=125)L(Bs(B(93),a.L,a.i));if(c.k>0)b:{try{e=DV(CA(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Da($$e);if($$je instanceof Bw){}else{throw $$e;}}L(Bs(B(93),a.L,a.i));}else if(d<0)L(Bs(B(93),
a.L,a.i));if((d|e|(e-d|0))<0)L(Bs(B(93),a.L,a.i));b=a.i;g=a.y.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.e=(-2147483525);Bl(a);break c;case 63:a.e=(-1073741701);Bl(a);break c;default:}a.e=(-536870789);}c=new FZ;c.bC=d;c.bz=e;return c;}
function C7(a){return a.L;}
function Cc(a){return !a.z&&!a.e&&a.i==a.ea&&!Ds(a)?1:0;}
function E$(b){return b<0?0:1;}
function CR(a){return !Cc(a)&&!Ds(a)&&E$(a.z)?1:0;}
function Gw(a){var b;b=a.z;return b<=56319&&b>=55296?1:0;}
function Hn(a){var b;b=a.z;return b<=57343&&b>=56320?1:0;}
function FC(b){return b<=56319&&b>=55296?1:0;}
function G$(b){return b<=57343&&b>=56320?1:0;}
function HE(a,b){var c,d,e,f,$$je;c=new T;Di(c,b);d=a.y.data.length-2|0;e=0;while(true){f=Ci(e,b);if(f>=0)break;if(a.i>=d)break;Bv(c,a.y.data[Bl(a)]);e=e+1|0;}if(!f)a:{try{b=DV(CA(c),16);}catch($$e){$$je=Da($$e);if($$je instanceof Bw){break a;}else{throw $$e;}}return b;}L(Bs(B(93),a.L,a.i));}
function Jy(a){var b,c,d,e,f,g;b=3;c=1;d=a.y.data;e=d.length-2|0;f=G4(d[a.i],8);switch(f){case -1:break;default:if(f>3)b=2;Bl(a);a:{while(true){if(c>=b)break a;g=a.i;if(g>=e)break a;g=G4(a.y.data[g],8);if(g<0)break;f=(f*8|0)+g|0;Bl(a);c=c+1|0;}}return f;}L(Bs(B(93),a.L,a.i));}
function LB(a){var b,c,d,e;b=1;c=a.bU;a:while(true){d=a.i;e=a.y.data;if(d>=e.length)L(Bs(B(93),a.L,d));b:{c:{switch(e[d]){case 41:Bl(a);return c|256;case 45:if(!b)L(Bs(B(93),a.L,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Bl(a);}Bl(a);return c;}
function Bl(a){var b,c,d,e,f;b=a.i;a.ce=b;if(!(a.bU&4))a.i=b+1|0;else{c=a.y.data.length-2|0;a.i=b+1|0;a:while(true){d=a.i;if(d<c&&Ij(a.y.data[d])){a.i=a.i+1|0;continue;}d=a.i;if(d>=c)break;e=a.y.data;if(e[d]!=35)break;a.i=d+1|0;while(true){f=a.i;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.i=f+1|0;}}}return a.ce;}
function KT(b){return VX.kx(b);}
function E0(a){var b,c,d,e;b=a.y.data[Bl(a)];if(BG(b)){c=a.ce+1|0;d=a.y.data;if(c<d.length){e=d[c];if(BS(e)){Bl(a);return Cy(b,e);}}}return b;}
function Gv(a){return a.Y;}
function Eb(){var a=this;Bg.call(a);a.gF=null;a.fZ=null;a.ft=0;}
function Bs(a,b,c){var d=new Eb();ED(d,a,b,c);return d;}
function ED(a,b,c,d){Z(a);a.ft=(-1);a.gF=b;a.fZ=c;a.ft=d;}
var IM=H(BR);
function ME(a,b,c,d){var e;e=a.bh;Be(d,e,b-Cf(d,e)|0);return a.b.a(b,c,d);}
function Po(a,b){return 0;}
var IL=H(BR);
function OM(a,b,c,d){return b;}
var HG=H(BR);
function N0(a,b,c,d){if(Cf(d,a.bh)!=b)b=(-1);return b;}
function FQ(){BR.call(this);this.ek=0;}
function MN(a,b,c,d){var e;e=a.bh;Be(d,e,b-Cf(d,e)|0);a.ek=b;return b;}
function NI(a,b){return 0;}
var CY=H(BR);
function Q5(a,b,c,d){if(d.cA!=1&&b!=d.j)return (-1);d.cM=1;EN(d,0,b);return b;}
function Bn(){Bd.call(this);this.K=0;}
function Cp(a){Bi(a);a.K=1;}
function Sa(a,b,c,d){var e;if((b+a.N()|0)>d.j){d.Z=1;return (-1);}e=a.E(b,c);if(e<0)return (-1);return a.b.a(b+e|0,c,d);}
function P9(a){return a.K;}
function RL(a,b){return 1;}
var KL=H(Bn);
function Dr(a){var b=new KL();Mq(b,a);return b;}
function Mq(a,b){Fr(a,b);a.K=1;a.b8=1;a.K=0;}
function PI(a,b,c){return 0;}
function P5(a,b,c,d){var e,f,g;e=d.j;f=d.V;while(true){g=Ci(b,e);if(g>0)return (-1);if(g<0&&BS(I(c,b))&&b>f&&BG(I(c,b-1|0))){b=b+1|0;continue;}if(a.b.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function OB(a,b,c,d,e){var f,g;f=e.j;g=e.V;while(true){if(c<b)return (-1);if(c<f&&BS(I(d,c))&&c>g&&BG(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.b.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function MJ(a,b){return 0;}
function Bj(){var a=this;Bd.call(a);a.J=null;a.bs=null;a.v=0;}
function T8(a,b){var c=new Bj();CZ(c,a,b);return c;}
function CZ(a,b,c){Bi(a);a.J=b;a.bs=c;a.v=c.bh;}
function QN(a,b,c,d){var e,f,g,h;if(a.J===null)return (-1);e=C3(d,a.v);Cn(d,a.v,b);f=a.J.H;g=0;while(true){if(g>=f){Cn(d,a.v,e);return (-1);}h=(Ca(a.J,g)).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function NA(a,b){a.bs.b=b;}
function Sy(a,b){var c;a:{c=a.J;if(c!==null){c=E4(c);while(true){if(!DS(c))break a;if(!(D7(c)).M(b))continue;else return 1;}}}return 0;}
function Or(a,b){return D1(b,a.v)>=0&&C3(b,a.v)==D1(b,a.v)?0:1;}
function Ov(a){var b,c,d,e,f,g,h,i,j;a.P=1;b=a.bs;if(b!==null&&!b.P)Er(b);a:{b=a.J;if(b!==null){c=b.H;d=0;while(true){if(d>=c)break a;b=Ca(a.J,d);e=b.bF();if(e===null)e=b;else{b.P=1;Hv(a.J,d);f=a.J;if(d<0)break;g=f.H;if(d>g)break;Ga(f,g+1|0);h=f.H;i=h;while(i>d){j=f.br.data;j[i]=j[i-1|0];i=i+(-1)|0;}f.br.data[d]=e;f.H=h+1|0;f.bw=f.bw+1|0;}if(!e.P)e.bp();d=d+1|0;}b=new BA;Z(b);L(b);}}if(a.b!==null)Er(a);}
var Ej=H(Bj);
function Nm(a,b,c,d){var e,f,g,h;e=Cf(d,a.v);Be(d,a.v,b);f=a.J.H;g=0;while(true){if(g>=f){Be(d,a.v,e);return (-1);}h=(Ca(a.J,g)).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function OY(a,b){return !Cf(b,a.v)?0:1;}
var Cr=H(Ej);
function Pj(a,b,c,d){var e,f,g;e=Cf(d,a.v);Be(d,a.v,b);f=a.J.H;g=0;while(g<f){if((Ca(a.J,g)).a(b,c,d)>=0)return a.b.a(a.bs.ek,c,d);g=g+1|0;}Be(d,a.v,e);return (-1);}
function Ow(a,b){a.b=b;}
var FI=H(Cr);
function Nu(a,b,c,d){var e,f;e=a.J.H;f=0;while(f<e){if((Ca(a.J,f)).a(b,c,d)>=0)return a.b.a(b,c,d);f=f+1|0;}return (-1);}
function QQ(a,b){return 0;}
var HP=H(Cr);
function NL(a,b,c,d){var e,f;e=a.J.H;f=0;while(true){if(f>=e)return a.b.a(b,c,d);if((Ca(a.J,f)).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function Qh(a,b){return 0;}
var In=H(Cr);
function Oq(a,b,c,d){var e,f,g,h;e=a.J.H;f=d.ck?0:d.V;a:{g=a.b.a(b,c,d);if(g>=0){Be(d,a.v,b);h=0;while(true){if(h>=e)break a;if((Ca(a.J,h)).Q(f,b,c,d)>=0){Be(d,a.v,(-1));return g;}h=h+1|0;}}}return (-1);}
function Sw(a,b){return 0;}
var Gd=H(Cr);
function Ma(a,b,c,d){var e,f;e=a.J.H;Be(d,a.v,b);f=0;while(true){if(f>=e)return a.b.a(b,c,d);if((Ca(a.J,f)).Q(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function Pb(a,b){return 0;}
function DF(){Bj.call(this);this.W=null;}
function S3(a,b){var c=new DF();Ka(c,a,b);return c;}
function Ka(a,b,c){Bi(a);a.W=b;a.bs=c;a.v=c.bh;}
function Mv(a,b,c,d){var e,f;e=C3(d,a.v);Cn(d,a.v,b);f=a.W.a(b,c,d);if(f>=0)return f;Cn(d,a.v,e);return (-1);}
function L2(a,b,c,d){var e;e=a.W.R(b,c,d);if(e>=0)Cn(d,a.v,e);return e;}
function Pt(a,b,c,d,e){var f;f=a.W.Q(b,c,d,e);if(f>=0)Cn(e,a.v,f);return f;}
function St(a,b){return a.W.M(b);}
function NE(a){var b;b=new F2;Ka(b,a.W,a.bs);a.b=b;return b;}
function RI(a){var b;a.P=1;b=a.bs;if(b!==null&&!b.P)Er(b);b=a.W;if(b!==null&&!b.P){b=b.bF();if(b!==null){a.W.P=1;a.W=b;}a.W.bp();}}
var Dq=H();
function P(){var a=this;Dq.call(a);a.A=0;a.O=0;a.q=null;a.cG=null;a.c3=null;a.r=0;}
var VY=null;function GY(){GY=Bt(P);O2();}
function Bb(a){var b;GY();b=new Id;b.l=BY(64);a.q=b;}
function NN(a){return null;}
function MY(a){return a.q;}
function Jb(a){var b,c,d,e,f;if(!a.O)b=DI(a.q,0)>=2048?0:1;else{a:{c=a.q;b=0;d=c.C;if(b<d){e=c.l.data;f=(e[0]^(-1))>>>0|0;if(f)b=Dn(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Dn(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function Q1(a){return a.r;}
function P3(a){return a;}
function JB(a){var b,c;if(a.c3===null){b=a.bx();c=new HY;c.hp=a;c.ev=b;Bb(c);a.c3=c;CE(c,a.O);}return a.c3;}
function DX(a){var b,c;if(a.cG===null){b=a.bx();c=new HW;c.gG=a;c.eY=b;c.fd=a;Bb(c);a.cG=c;CE(c,a.A);a.cG.r=a.r;}return a.cG;}
function RD(a){return 0;}
function CE(a,b){var c;c=a.A;if(c^b){a.A=c?0:1;a.O=a.O?0:1;}if(!a.r)a.r=1;return a;}
function P$(a){return a.A;}
function E7(b,c){GY();return b.f(c);}
function DU(b,c){var d,e;GY();if(b.bd()!==null&&c.bd()!==null){b=b.bd();c=c.bd();d=BT(b.l.data.length,c.l.data.length);e=0;a:{while(e<d){if(b.l.data[e]&c.l.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function IV(b,c){var d,e,f;GY();d=0;while(true){O_();e=VZ.data;if(d>=e.length){f=new EA;Bc(f,B(93));f.hL=B(93);f.hv=b;L(f);}e=e[d].data;if(By(b,e[0]))break;d=d+1|0;}return Kh(e[1],c);}
function O2(){var b;b=new Dw;O_();VY=b;}
function J4(){var a=this;P.call(a);a.cU=0;a.ej=0;a.bP=0;a.dP=0;a.bj=0;a.bJ=0;a.n=null;a.G=null;}
function B$(){var a=new J4();Sl(a);return a;}
function QV(a,b){var c=new J4();ON(c,a,b);return c;}
function Sl(a){Bb(a);a.n=Sx();}
function ON(a,b,c){Bb(a);a.n=Sx();a.cU=b;a.ej=c;}
function BD(a,b){a:{if(a.cU){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bj){Ft(a.n,D0(b&65535));break a;}EU(a.n,D0(b&65535));break a;}if(a.ej&&b>128){a.bP=1;b=Dh(De(b));}}}if(!(!FC(b)&&!G$(b))){if(a.dP)Ft(a.q,b-55296|0);else EU(a.q,b-55296|0);}if(a.bj)Ft(a.n,b);else EU(a.n,b);if(!a.r&&Fa(b))a.r=1;return a;}
function LJ(a,b){var c,d,e;if(!a.r&&b.r)a.r=1;if(a.dP){if(!b.O)Dc(a.q,b.bx());else B6(a.q,b.bx());}else if(!b.O)C9(a.q,b.bx());else{Dd(a.q,b.bx());B6(a.q,b.bx());a.O=a.O?0:1;a.dP=1;}if(!a.bJ&&b.bd()!==null){if(a.bj){if(!b.A)Dc(a.n,b.bd());else B6(a.n,b.bd());}else if(!b.A)C9(a.n,b.bd());else{Dd(a.n,b.bd());B6(a.n,b.bd());a.A=a.A?0:1;a.bj=1;}}else{c=a.A;d=a.G;if(d!==null){if(!c){e=new GT;e.gJ=a;e.fo=c;e.e7=d;e.e2=b;Bb(e);a.G=e;}else{e=new GU;e.hO=a;e.fL=c;e.fA=d;e.fj=b;Bb(e);a.G=e;}}else{if(c&&!a.bj&&Fd(a.n))
{d=new GQ;d.fX=a;d.fH=b;Bb(d);a.G=d;}else if(!c){d=new GO;d.dC=a;d.cP=c;d.eO=b;Bb(d);a.G=d;}else{d=new GP;d.c5=a;d.cW=c;d.e4=b;Bb(d);a.G=d;}a.bJ=1;}}return a;}
function Bk(a,b,c){var d,e,f,g,h;if(b>c){d=new Bg;Z(d);L(d);}a:{b:{if(!a.cU){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;BD(a,b);b=b+1|0;}}if(!a.bj)Ee(a.n,b,c+1|0);else{d=a.n;c=c+1|0;if(b>=0&&b<=c){e=d.C;if(b<e){f=BT(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.l.data;h[g]=h[g]&(DQ(d,b)|D5(d,f));}else{h=d.l.data;h[g]=h[g]&DQ(d,b);e=g+1|0;while(e<c){d.l.data[e]=0;e=e+1|0;}if(f&31){h=d.l.data;h[c]=h[c]&D5(d,f);}}Dz(d);}}}else{d=new BA;Z(d);L(d);}}}return a;}
function I9(a,b){var c,d,e;if(!a.r&&b.r)a.r=1;if(b.bP)a.bP=1;c=a.O;if(!(c^b.O)){if(!c)C9(a.q,b.q);else B6(a.q,b.q);}else if(c)Dc(a.q,b.q);else{Dd(a.q,b.q);B6(a.q,b.q);a.O=1;}if(!a.bJ&&B1(b)!==null){c=a.A;if(!(c^b.A)){if(!c)C9(a.n,B1(b));else B6(a.n,B1(b));}else if(c)Dc(a.n,B1(b));else{Dd(a.n,B1(b));B6(a.n,B1(b));a.A=1;}}else{c=a.A;d=a.G;if(d!==null){if(!c){e=new GI;e.gb=a;e.eK=c;e.e3=d;e.fh=b;Bb(e);a.G=e;}else{e=new Hi;e.gX=a;e.fg=c;e.eb=d;e.em=b;Bb(e);a.G=e;}}else{if(!a.bj&&Fd(a.n)){if(!c){d=new GR;d.hV=a;d.fc
=b;Bb(d);a.G=d;}else{d=new GS;d.g0=a;d.fb=b;Bb(d);a.G=d;}}else if(!c){d=new GV;d.eL=a;d.d6=b;d.fG=c;Bb(d);a.G=d;}else{d=new GW;d.ed=a;d.en=b;d.et=c;Bb(d);a.G=d;}a.bJ=1;}}}
function H_(a,b){var c,d,e;if(!a.r&&b.r)a.r=1;if(b.bP)a.bP=1;c=a.O;if(!(c^b.O)){if(!c)B6(a.q,b.q);else C9(a.q,b.q);}else if(!c)Dc(a.q,b.q);else{Dd(a.q,b.q);B6(a.q,b.q);a.O=0;}if(!a.bJ&&B1(b)!==null){c=a.A;if(!(c^b.A)){if(!c)B6(a.n,B1(b));else C9(a.n,B1(b));}else if(!c)Dc(a.n,B1(b));else{Dd(a.n,B1(b));B6(a.n,B1(b));a.A=0;}}else{c=a.A;d=a.G;if(d!==null){if(!c){e=new GK;e.gE=a;e.eN=c;e.eu=d;e.fK=b;Bb(e);a.G=e;}else{e=new GL;e.hb=a;e.ey=c;e.d8=d;e.eJ=b;Bb(e);a.G=e;}}else{if(!a.bj&&Fd(a.n)){if(!c){d=new GG;d.g5=
a;d.e0=b;Bb(d);a.G=d;}else{d=new GH;d.hN=a;d.e6=b;Bb(d);a.G=d;}}else if(!c){d=new GM;d.fO=a;d.fn=b;d.eg=c;Bb(d);a.G=d;}else{d=new GF;d.ee=a;d.eC=b;d.fN=c;Bb(d);a.G=d;}a.bJ=1;}}}
function B2(a,b){var c;c=a.G;if(c!==null)return a.A^c.f(b);return a.A^Cj(a.n,b);}
function B1(a){if(!a.bJ)return a.n;return null;}
function PW(a){return a.q;}
function Qz(a){var b,c;if(a.G!==null)return a;b=B1(a);c=new GJ;c.f6=a;c.cC=b;Bb(c);return CE(c,a.A);}
function MO(a){var b,c,d;b=new T;W(b);c=DI(a.n,0);while(c>=0){DW(b,C_(c));Bv(b,124);c=DI(a.n,c+1|0);}d=b.k;if(d>0)HQ(b,d-1|0);return S(b);}
function P_(a){return a.bP;}
function EA(){var a=this;Bx.call(a);a.hL=null;a.hv=null;}
function Cs(){Bd.call(this);this.p=null;}
function B_(a,b,c,d){Fr(a,c);a.p=b;a.b8=d;}
function Sk(a){return a.p;}
function Pu(a,b){return !a.p.M(b)&&!a.b.M(b)?0:1;}
function QY(a,b){return 1;}
function Mk(a){var b;a.P=1;b=a.b;if(b!==null&&!b.P){b=b.bF();if(b!==null){a.b.P=1;a.b=b;}a.b.bp();}b=a.p;if(b!==null){if(!b.P){b=b.bF();if(b!==null){a.p.P=1;a.p=b;}a.p.bp();}else if(b instanceof DF&&b.bs.da)a.p=b.b;}}
function B5(){Cs.call(this);this.w=null;}
function Tb(a,b,c){var d=new B5();CM(d,a,b,c);return d;}
function CM(a,b,c,d){B_(a,b,c,d);a.w=b;}
function Mc(a,b,c,d){var e,f;e=0;a:{while((b+a.w.N()|0)<=d.j){f=a.w.E(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.b.a(b,c,d);if(f>=0)break;b=b-a.w.N()|0;e=e+(-1)|0;}return f;}
function CX(){B5.call(this);this.cz=null;}
function Tt(a,b,c,d){var e=new CX();IW(e,a,b,c,d);return e;}
function IW(a,b,c,d,e){CM(a,c,d,e);a.cz=b;}
function Ni(a,b,c,d){var e,f,g,h,i;e=a.cz;f=e.bC;g=e.bz;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.w.N()|0)>d.j)break a;i=a.w.E(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.b.a(b,c,d);if(i>=0)break;b=b-a.w.N()|0;h=h+(-1)|0;}return i;}if((b+a.w.N()|0)>d.j){d.Z=1;return (-1);}i=a.w.E(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var BV=H(Cs);
function Mu(a,b,c,d){var e;if(!a.p.o(d))return a.b.a(b,c,d);e=a.p.a(b,c,d);if(e>=0)return e;return a.b.a(b,c,d);}
var CH=H(B5);
function L8(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<0)e=a.b.a(b,c,d);return e;}
function SA(a,b){a.b=b;a.p.s(b);}
var HZ=H(B5);
function R5(a,b,c,d){while((b+a.w.N()|0)<=d.j&&a.w.E(b,c)>0){b=b+a.w.N()|0;}return a.b.a(b,c,d);}
function MM(a,b,c,d){var e,f,g;e=a.b.R(b,c,d);if(e<0)return (-1);f=e-a.w.N()|0;while(f>=b&&a.w.E(f,c)>0){g=f-a.w.N()|0;e=f;f=g;}return e;}
function R(){var a=this;E.call(a);a.c9=null;a.dz=null;}
function Kh(a,b){if(!b&&a.c9===null)a.c9=a.m();else if(b&&a.dz===null)a.dz=CE(a.m(),1);if(b)return a.dz;return a.c9;}
function FZ(){var a=this;Dq.call(a);a.bC=0;a.bz=0;}
function MV(a){var b,c,d,e,f;b=a.bC;c=a.bz;d=c!=2147483647?Dp(c):B(93);e=new T;W(e);Bv(e,123);f=Bh(e,b);Bv(f,44);Bv(N(f,d),125);return S(e);}
var Gz=H(Bd);
function R3(a,b,c,d){return b;}
function Nz(a,b){return 0;}
function Id(){var a=this;E.call(a);a.l=null;a.C=0;}
function Sx(){var a=new Id();Od(a);return a;}
function Od(a){a.l=BY(2);}
function EU(a,b){var c,d,e;if(b<0){c=new BA;Z(c);L(c);}d=b/32|0;if(b>=a.C){DY(a,d+1|0);a.C=b+1|0;}e=a.l.data;e[d]=e[d]|1<<(b%32|0);}
function Ee(a,b,c){var d,e,f,g,h;if(b>=0){d=Ci(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.C){DY(a,e+1|0);a.C=c;}if(d==e){f=a.l.data;f[d]=f[d]|D5(a,b)&DQ(a,c);}else{f=a.l.data;f[d]=f[d]|D5(a,b);g=d+1|0;while(g<e){a.l.data[g]=(-1);g=g+1|0;}if(c&31){f=a.l.data;f[e]=f[e]|DQ(a,c);}}return;}}h=new BA;Z(h);L(h);}
function D5(a,b){return (-1)<<(b%32|0);}
function DQ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Ft(a,b){var c,d,e,f,g;if(b<0){c=new BA;Z(c);L(c);}d=b/32|0;e=a.l.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.C-1|0))Dz(a);}}
function Cj(a,b){var c,d,e;if(b<0){c=new BA;Z(c);L(c);}d=b/32|0;e=a.l.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
function DI(a,b){var c,d,e,f,g;if(b<0){c=new BA;Z(c);L(c);}d=a.C;if(b>=d)return (-1);e=b/32|0;f=a.l.data;g=f[e]>>>(b%32|0)|0;if(g)return Dn(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Dn(f[g])|0;g=g+1|0;}return (-1);}
function DY(a,b){var c,d,e,f;c=a.l.data.length;if(c>=b)return;c=B7((b*3|0)/2|0,(c*2|0)+1|0);d=a.l.data;e=BY(c);f=e.data;b=BT(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.l=e;}
function Dz(a){var b,c,d;b=(a.C+31|0)/32|0;a.C=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EI(a.l.data[c]);if(d<32)break;c=c+(-1)|0;a.C=a.C-32|0;}a.C=a.C-d|0;}}
function B6(a,b){var c,d,e,f;c=BT(a.l.data.length,b.l.data.length);d=0;while(d<c){e=a.l.data;e[d]=e[d]&b.l.data[d];d=d+1|0;}while(true){f=a.l.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.C=BT(a.C,b.C);Dz(a);}
function Dc(a,b){var c,d,e;c=BT(a.l.data.length,b.l.data.length);d=0;while(d<c){e=a.l.data;e[d]=e[d]&(b.l.data[d]^(-1));d=d+1|0;}Dz(a);}
function C9(a,b){var c,d,e;c=B7(a.C,b.C);a.C=c;DY(a,(c+31|0)/32|0);c=BT(a.l.data.length,b.l.data.length);d=0;while(d<c){e=a.l.data;e[d]=e[d]|b.l.data[d];d=d+1|0;}}
function Dd(a,b){var c,d,e;c=B7(a.C,b.C);a.C=c;DY(a,(c+31|0)/32|0);c=BT(a.l.data.length,b.l.data.length);d=0;while(d<c){e=a.l.data;e[d]=e[d]^b.l.data[d];d=d+1|0;}Dz(a);}
function Fd(a){return a.C?0:1;}
function FO(){var a=this;Bj.call(a);a.e$=null;a.f5=0;}
function HU(){var a=this;Bj.call(a);a.du=null;a.c6=null;}
function JO(a,b){var c=new HU();Lr(c,a,b);return c;}
function Lr(a,b,c){Bi(a);a.du=b;a.c6=c;}
function Nb(a,b,c,d){var e,f,g,h,i;e=a.du.a(b,c,d);if(e<0)a:{f=a.c6;g=d.V;e=d.j;h=b+1|0;e=Ci(h,e);if(e>0){d.Z=1;e=(-1);}else{i=I(c,b);if(!f.e$.f(i))e=(-1);else{if(BG(i)){if(e<0&&BS(I(c,h))){e=(-1);break a;}}else if(BS(i)&&b>g&&BG(I(c,b-1|0))){e=(-1);break a;}e=f.b.a(h,c,d);}}}if(e>=0)return e;return (-1);}
function Nk(a,b){a.b=b;a.c6.b=b;a.du.s(b);}
function N4(a,b){return 1;}
function NM(a,b){return 1;}
function Cq(){var a=this;Bj.call(a);a.bl=null;a.h1=0;}
function R0(a){var b=new Cq();GC(b,a);return b;}
function GC(a,b){Bi(a);a.bl=b.co();a.h1=b.A;}
function PQ(a,b,c,d){var e,f,g,h;e=d.j;if(b<e){f=b+1|0;g=I(c,b);if(a.f(g)){h=a.b.a(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(DO(g,f)&&a.f(Cy(g,f)))return a.b.a(b,c,d);}}return (-1);}
function Qn(a,b){return a.bl.f(b);}
function M9(a,b){if(b instanceof Cu)return E7(a.bl,b.bN);if(b instanceof CC)return E7(a.bl,b.bb);if(b instanceof Cq)return DU(a.bl,b.bl);if(!(b instanceof CD))return 1;return DU(a.bl,b.bG);}
function RW(a){return a.bl;}
function PY(a,b){a.b=b;}
function P0(a,b){return 1;}
var Ex=H(Cq);
function RM(a,b){return a.bl.f(Dh(De(b)));}
function JU(){var a=this;Bn.call(a);a.fq=null;a.hG=0;}
function Q2(a){var b=new JU();M1(b,a);return b;}
function M1(a,b){Cp(a);a.fq=b.co();a.hG=b.A;}
function R6(a,b,c){return !a.fq.f(CQ(Ch(I(c,b))))?(-1):1;}
function CD(){var a=this;Bn.call(a);a.bG=null;a.gg=0;}
function Qp(a){var b=new CD();N6(b,a);return b;}
function N6(a,b){Cp(a);a.bG=b.co();a.gg=b.A;}
function Fy(a,b,c){return !a.bG.f(I(c,b))?(-1):1;}
function NB(a,b){if(b instanceof CC)return E7(a.bG,b.bb);if(b instanceof CD)return DU(a.bG,b.bG);if(!(b instanceof Cq)){if(!(b instanceof Cu))return 1;return 0;}return DU(a.bG,b.bl);}
function GZ(){var a=this;Bj.call(a);a.bY=null;a.dh=null;a.cw=0;}
function QG(a,b){var c=new GZ();Mw(c,a,b);return c;}
function Mw(a,b,c){Bi(a);a.bY=b;a.cw=c;}
function L6(a,b){a.b=b;}
function H5(a){if(a.dh===null)a.dh=Ep(a.bY);return a.dh;}
function L7(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.j;f=BY(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?C1([k,l]):C1([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.cw;if(b!=n)return (-1);while(true){if(l>=n)return a.b.a(i,c,d);if(m[l]!=a.bY.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.cw==3){k=f[0];m=a.bY.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.b.a(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.cw==2){b=f[0];m=a.bY.data;if(b==m[0]&&f[1]==m[1]){b=a.b.a(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function NV(a,b){return b instanceof GZ&&!By(H5(b),H5(a))?0:1;}
function QE(a,b){return 1;}
function CC(){Bn.call(this);this.bb=0;}
function Kp(a){var b=new CC();Ob(b,a);return b;}
function Ob(a,b){Cp(a);a.bb=b;}
function RT(a){return 1;}
function Q0(a,b,c){return a.bb!=I(c,b)?(-1):1;}
function PN(a,b,c,d){var e,f,g;if(!(c instanceof Bq))return D2(a,b,c,d);e=d.j;while(true){if(b>=e)return (-1);f=CK(c,a.bb,b);if(f<0)return (-1);g=a.b;b=f+1|0;if(g.a(b,c,d)>=0)break;}return f;}
function RY(a,b,c,d,e){var f;if(!(d instanceof Bq))return D$(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Dl(d,a.bb,c);if(f<0)break a;if(f<b)break a;if(a.b.a(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function Qv(a,b){if(b instanceof CC)return b.bb!=a.bb?0:1;if(!(b instanceof CD)){if(b instanceof Cq)return b.f(a.bb);if(!(b instanceof Cu))return 1;return 0;}return Fy(b,0,If(a.bb))<=0?0:1;}
function La(){Bn.call(this);this.d5=0;}
function OE(a){var b=new La();MK(b,a);return b;}
function MK(a,b){Cp(a);a.d5=CQ(Ch(b));}
function LV(a,b,c){return a.d5!=CQ(Ch(I(c,b)))?(-1):1;}
function Ja(){var a=this;Bn.call(a);a.fl=0;a.es=0;}
function Oj(a){var b=new Ja();O6(b,a);return b;}
function O6(a,b){Cp(a);a.fl=b;a.es=D0(b);}
function Mm(a,b,c){return a.fl!=I(c,b)&&a.es!=I(c,b)?(-1):1;}
function C6(){var a=this;Bj.call(a);a.b0=0;a.dj=null;a.cT=null;a.cO=0;}
function T$(a,b){var c=new C6();Gq(c,a,b);return c;}
function Gq(a,b,c){Bi(a);a.b0=1;a.cT=b;a.cO=c;}
function RH(a,b){a.b=b;}
function Nl(a,b,c,d){var e,f,g,h,i,j,k,l;e=BY(4);f=d.j;if(b>=f)return (-1);g=Fh(a,b,c,f);h=b+a.b0|0;i=KT(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;EE(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Fh(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(KT(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.b0|0;if(h>=f){b=k;break a;}g=Fh(a,h,c,f);b=k;}}}if(b!=a.cO)return (-1);i=e.data;g=0;while(true){if(g>=
b)return a.b.a(h,c,d);if(i[g]!=a.cT.data[g])break;g=g+1|0;}return (-1);}
function H9(a){var b,c;if(a.dj===null){b=new T;W(b);c=0;while(c<a.cO){DW(b,C_(a.cT.data[c]));c=c+1|0;}a.dj=S(b);}return a.dj;}
function Fh(a,b,c,d){var e,f,g;a.b0=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(DO(e,f)){g=BU(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&BG(g[0])&&BS(g[1])?Cy(g[0],g[1]):g[0];a.b0=2;}}return e;}
function R7(a,b){return b instanceof C6&&!By(H9(b),H9(a))?0:1;}
function OA(a,b){return 1;}
var Iz=H(C6);
var Gn=H(C6);
var I1=H(BV);
function OS(a,b,c,d){var e;while(true){e=a.p.a(b,c,d);if(e<=0)break;b=e;}return a.b.a(b,c,d);}
var HC=H(BV);
function MA(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.p.a(e,c,d);if(b<=e)break;e=b;}b=e;}return a.b.a(b,c,d);}
var Db=H(BV);
function PS(a,b,c,d){var e;if(!a.p.o(d))return a.b.a(b,c,d);e=a.p.a(b,c,d);if(e>=0)return e;return a.b.a(b,c,d);}
function Q_(a,b){a.b=b;a.p.s(b);}
var Hm=H(Db);
function RV(a,b,c,d){var e;e=a.p.a(b,c,d);if(e<=0)e=b;return a.b.a(e,c,d);}
function MW(a,b){a.b=b;}
function C5(){var a=this;BV.call(a);a.bR=null;a.bc=0;}
function V0(a,b,c,d,e){var f=new C5();Ew(f,a,b,c,d,e);return f;}
function Ew(a,b,c,d,e,f){B_(a,c,d,e);a.bR=b;a.bc=f;}
function Ss(a,b,c,d){var e,f;e=FT(d,a.bc);if(!a.p.o(d))return a.b.a(b,c,d);if(e>=a.bR.bz)return a.b.a(b,c,d);f=a.bc;e=e+1|0;CB(d,f,e);f=a.p.a(b,c,d);if(f>=0){CB(d,a.bc,0);return f;}f=a.bc;e=e+(-1)|0;CB(d,f,e);if(e>=a.bR.bC)return a.b.a(b,c,d);CB(d,a.bc,0);return (-1);}
var F5=H(C5);
function Ro(a,b,c,d){var e,f,g;e=0;f=a.bR.bz;a:{while(true){g=a.p.a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.bR.bC)return (-1);return a.b.a(b,c,d);}
var IE=H(BV);
function RS(a,b,c,d){var e;if(!a.p.o(d))return a.b.a(b,c,d);e=a.b.a(b,c,d);if(e>=0)return e;return a.p.a(b,c,d);}
var H4=H(Db);
function N5(a,b,c,d){var e;if(!a.p.o(d))return a.b.a(b,c,d);e=a.b.a(b,c,d);if(e<0)e=a.p.a(b,c,d);return e;}
var Ha=H(C5);
function MP(a,b,c,d){var e,f,g;e=FT(d,a.bc);if(!a.p.o(d))return a.b.a(b,c,d);f=a.bR;if(e>=f.bz){CB(d,a.bc,0);return a.b.a(b,c,d);}if(e<f.bC){CB(d,a.bc,e+1|0);g=a.p.a(b,c,d);}else{g=a.b.a(b,c,d);if(g>=0){CB(d,a.bc,0);return g;}CB(d,a.bc,e+1|0);g=a.p.a(b,c,d);}return g;}
var IF=H(Cs);
function Sg(a,b,c,d){var e;e=d.j;if(e>b)return a.b.Q(b,e,c,d);return a.b.a(b,c,d);}
function P4(a,b,c,d){var e;e=d.j;if(a.b.Q(b,e,c,d)>=0)return b;return (-1);}
function GE(){Cs.call(this);this.dv=null;}
function NF(a,b,c,d){var e,f;e=d.j;f=Hc(a,b,e,c);if(f>=0)e=f;if(e>b)return a.b.Q(b,e,c,d);return a.b.a(b,c,d);}
function L_(a,b,c,d){var e,f,g,h;e=d.j;f=a.b.R(b,c,d);if(f<0)return (-1);g=Hc(a,f,e,c);if(g>=0)e=g;g=B7(f,a.b.Q(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.dv.b4(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Hc(a,b,c,d){while(true){if(b>=c)return (-1);if(a.dv.b4(I(d,b)))break;b=b+1|0;}return b;}
var CS=H();
var V1=null;var V2=null;function Hp(b){var c;if(!(b&1)){c=V2;if(c!==null)return c;c=new Hr;V2=c;return c;}c=V1;if(c!==null)return c;c=new Hq;V1=c;return c;}
var I2=H(B5);
function MT(a,b,c,d){var e;a:{while(true){if((b+a.w.N()|0)>d.j)break a;e=a.w.E(b,c);if(e<1)break;b=b+e|0;}}return a.b.a(b,c,d);}
var HV=H(CH);
function Mz(a,b,c,d){var e;if((b+a.w.N()|0)<=d.j){e=a.w.E(b,c);if(e>=1)b=b+e|0;}return a.b.a(b,c,d);}
var Hg=H(CX);
function Pv(a,b,c,d){var e,f,g,h,i;e=a.cz;f=e.bC;g=e.bz;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.w.N()|0)>d.j)break a;i=a.w.E(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.b.a(b,c,d);}if((b+a.w.N()|0)>d.j){d.Z=1;return (-1);}i=a.w.E(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var H2=H(B5);
function Nw(a,b,c,d){var e;while(true){e=a.b.a(b,c,d);if(e>=0)break;if((b+a.w.N()|0)<=d.j){e=a.w.E(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Gr=H(CH);
function M4(a,b,c,d){var e;e=a.b.a(b,c,d);if(e>=0)return e;return a.p.a(b,c,d);}
var Io=H(CX);
function PK(a,b,c,d){var e,f,g,h,i,j;e=a.cz;f=e.bC;g=e.bz;h=0;while(true){if(h>=f){a:{while(true){i=a.b.a(b,c,d);if(i>=0)break;if((b+a.w.N()|0)<=d.j){i=a.w.E(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.w.N()|0)>d.j){d.Z=1;return (-1);}j=a.w.E(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Fc=H(Bd);
function Sv(a,b,c,d){if(b&&!(d.bD&&b==d.V))return (-1);return a.b.a(b,c,d);}
function RB(a,b){return 0;}
function Ky(){Bd.call(this);this.e8=0;}
function Qo(a){var b=new Ky();RP(b,a);return b;}
function RP(a,b){Bi(a);a.e8=b;}
function NK(a,b,c,d){var e,f,g;e=b<d.j?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.ck?0:d.V;return (e!=32&&!H6(a,e,b,g,c)?0:1)^(f!=32&&!H6(a,f,b-1|0,g,c)?0:1)^a.e8?(-1):a.b.a(b,c,d);}
function NU(a,b){return 0;}
function H6(a,b,c,d,e){var f;if(!EH(b)&&b!=95){a:{if(BB(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(EH(f))return 0;if(BB(f)!=6)return 1;}}return 1;}return 0;}
var GA=H(Bd);
function RO(a,b,c,d){if(b!=d.b$)return (-1);return a.b.a(b,c,d);}
function Sn(a,b){return 0;}
function Ih(){Bd.call(this);this.bV=0;}
function Tq(a){var b=new Ih();KM(b,a);return b;}
function KM(a,b){Bi(a);a.bV=b;}
function Ok(a,b,c,d){var e,f,g;e=!d.bD?O(c):d.j;if(b>=e){Be(d,a.bV,0);return a.b.a(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){Be(d,a.bV,0);return a.b.a(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Be(d,a.bV,0);return a.b.a(b,c,d);}
function OG(a,b){var c;c=!Cf(b,a.bV)?0:1;Be(b,a.bV,(-1));return c;}
var H7=H(Bd);
function Nf(a,b,c,d){if(b<(d.ck?O(c):d.j))return (-1);d.Z=1;d.g7=1;return a.b.a(b,c,d);}
function LU(a,b){return 0;}
function F9(){Bd.call(this);this.d3=null;}
function Os(a,b,c,d){a:{if(b!=d.j){if(!b)break a;if(d.bD&&b==d.V)break a;if(a.d3.eA(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.b.a(b,c,d);}
function QB(a,b){return 0;}
var KY=H(Bj);
function TP(){var a=new KY();M$(a);return a;}
function M$(a){Bi(a);}
function RX(a,b,c,d){var e,f,g,h;e=d.j;f=b+1|0;if(f>e){d.Z=1;return (-1);}g=I(c,b);if(BG(g)){h=b+2|0;if(h<=e&&DO(g,I(c,f)))return a.b.a(h,c,d);}return a.b.a(f,c,d);}
function NZ(a,b){a.b=b;}
function M3(a){return (-2147483602);}
function NW(a,b){return 1;}
function J1(){Bj.call(this);this.dX=null;}
function Tg(a){var b=new J1();OD(b,a);return b;}
function OD(a,b){Bi(a);a.dX=b;}
function Na(a,b,c,d){var e,f,g,h;e=d.j;f=b+1|0;if(f>e){d.Z=1;return (-1);}g=I(c,b);if(BG(g)){b=b+2|0;if(b<=e){h=I(c,f);if(DO(g,h))return a.dX.b4(Cy(g,h))?(-1):a.b.a(b,c,d);}}return a.dX.b4(g)?(-1):a.b.a(f,c,d);}
function Pi(a,b){a.b=b;}
function LR(a){return (-2147483602);}
function R_(a,b){return 1;}
function KS(){Bd.call(this);this.ci=0;}
function SG(a){var b=new KS();Qy(b,a);return b;}
function Qy(a,b){Bi(a);a.ci=b;}
function R$(a,b,c,d){var e;e=!d.bD?O(c):d.j;if(b>=e){Be(d,a.ci,0);return a.b.a(b,c,d);}if((e-b|0)==1&&I(c,b)==10){Be(d,a.ci,1);return a.b.a(b+1|0,c,d);}return (-1);}
function Qu(a,b){var c;c=!Cf(b,a.ci)?0:1;Be(b,a.ci,(-1));return c;}
function Jf(){Bd.call(this);this.bZ=0;}
function TL(a){var b=new Jf();Q4(b,a);return b;}
function Q4(a,b){Bi(a);a.bZ=b;}
function Nd(a,b,c,d){if((!d.bD?O(c)-b|0:d.j-b|0)<=0){Be(d,a.bZ,0);return a.b.a(b,c,d);}if(I(c,b)!=10)return (-1);Be(d,a.bZ,1);return a.b.a(b+1|0,c,d);}
function Qj(a,b){var c;c=!Cf(b,a.bZ)?0:1;Be(b,a.bZ,(-1));return c;}
function I8(){Bd.call(this);this.bI=0;}
function SP(a){var b=new I8();Su(b,a);return b;}
function Su(a,b){Bi(a);a.bI=b;}
function Rr(a,b,c,d){var e,f,g;e=!d.bD?O(c)-b|0:d.j-b|0;if(!e){Be(d,a.bI,0);return a.b.a(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Be(d,a.bI,0);return a.b.a(b,c,d);case 13:if(g!=10){Be(d,a.bI,0);return a.b.a(b,c,d);}Be(d,a.bI,0);return a.b.a(b,c,d);default:}return (-1);}
function OK(a,b){var c;c=!Cf(b,a.bI)?0:1;Be(b,a.bI,(-1));return c;}
function Dx(){var a=this;Bj.call(a);a.eh=0;a.bX=0;}
function T4(a,b){var c=new Dx();G9(c,a,b);return c;}
function G9(a,b,c){Bi(a);a.eh=b;a.bX=c;}
function MX(a,b,c,d){var e,f,g,h;e=Du(a,d);if(e!==null&&(b+O(e)|0)<=d.j){f=0;while(true){if(f>=O(e)){Be(d,a.bX,O(e));return a.b.a(b+O(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&D0(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function Ou(a,b){a.b=b;}
function Du(a,b){var c,d;c=a.eh;d=C3(b,c);c=D1(b,c);return (c|d|(c-d|0))>=0&&c<=O(b.d2)?BM(b.d2,d,c):null;}
function OZ(a,b){var c;c=!Cf(b,a.bX)?0:1;Be(b,a.bX,(-1));return c;}
var KW=H(Dx);
function SV(a,b){var c=new KW();QZ(c,a,b);return c;}
function QZ(a,b,c){G9(a,b,c);}
function OR(a,b,c,d){var e,f;e=Du(a,d);if(e!==null&&(b+O(e)|0)<=d.j){f=!GB(c,e,b)?(-1):O(e);if(f<0)return (-1);Be(d,a.bX,f);return a.b.a(b+f|0,c,d);}return (-1);}
function QM(a,b,c,d){var e,f;e=Du(a,d);f=d.V;if(e!==null&&(b+O(e)|0)<=f){while(true){if(b>f)return (-1);b=Kx(c,e,b);if(b<0)return (-1);if(a.b.a(b+O(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function MH(a,b,c,d,e){var f,g;f=Du(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=BT(c,O(d)-O(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=O(f))break c;if(I(d,g+c|0)!=I(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.b.a(g+O(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Mr(a,b){return 1;}
var K$=H(Dx);
function TM(a,b){var c=new K$();Qs(c,a,b);return c;}
function Qs(a,b,c){G9(a,b,c);}
function LZ(a,b,c,d){var e,f;e=Du(a,d);if(e!==null&&(b+O(e)|0)<=d.j){f=0;while(true){if(f>=O(e)){Be(d,a.bX,O(e));return a.b.a(b+O(e)|0,c,d);}if(CQ(Ch(I(e,f)))!=CQ(Ch(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Gy=H(Dy);
function Qb(a,b,c,d,e){F1(a,b,c,d,e);return a;}
function NO(a,b,c,d){Iq(a,b,c,d);return a;}
function Oa(a,b){EM(a,b);}
function P8(a,b,c){IB(a,b,c);return a;}
function IG(){var a=this;Bn.call(a);a.T=null;a.dp=null;a.cS=null;}
function Pe(a,b,c){return !Fb(a,c,b)?(-1):a.K;}
function NC(a,b,c,d){var e,f,g;e=d.j;while(true){if(b>e)return (-1);f=I(a.T,a.K-1|0);a:{while(true){g=a.K;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Fb(a,c,b))break;b=b+FF(a.dp,g)|0;}}if(b<0)return (-1);if(a.b.a(b+a.K|0,c,d)>=0)break;b=b+1|0;}return b;}
function QA(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.T,0);g=(O(d)-c|0)-a.K|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Fb(a,d,c))break;c=c-FF(a.cS,g)|0;}}if(c<0)return (-1);if(a.b.a(c+a.K|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Q$(a,b){var c;if(b instanceof CC)return b.bb!=I(a.T,0)?0:1;if(b instanceof CD)return Fy(b,0,BM(a.T,0,1))<=0?0:1;if(!(b instanceof Cq)){if(!(b instanceof Cu))return 1;return O(a.T)>1&&b.bN==Cy(I(a.T,0),I(a.T,1))?1:0;}a:{b:{b=b;if(!b.f(I(a.T,0))){if(O(a.T)<=1)break b;if(!b.f(Cy(I(a.T,0),I(a.T,1))))break b;}c=1;break a;}c=0;}return c;}
function Fb(a,b,c){var d;d=0;while(d<a.K){if(I(b,d+c|0)!=I(a.T,d))return 0;d=d+1|0;}return 1;}
function I6(){Bn.call(this);this.cm=null;}
function T9(a){var b=new I6();Qx(b,a);return b;}
function Qx(a,b){var c,d;Cp(a);c=new T;W(c);d=0;while(d<b.k){Bv(c,CQ(Ch(F0(b,d))));d=d+1|0;}a.cm=S(c);a.K=c.k;}
function L4(a,b,c){var d;d=0;while(true){if(d>=O(a.cm))return O(a.cm);if(I(a.cm,d)!=CQ(Ch(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function F6(){Bn.call(this);this.ch=null;}
function Py(a,b,c){var d,e,f;d=0;while(true){if(d>=O(a.ch))return O(a.ch);e=I(a.ch,d);f=b+d|0;if(e!=I(c,f)&&D0(I(a.ch,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Dw=H();
var V3=null;var V4=null;var VZ=null;function O_(){O_=Bt(Dw);PF();}
function PF(){V3=TA();V4=T6();VZ=G($rt_arraycls(E),[G(E,[B(127),T5()]),G(E,[B(128),SO()]),G(E,[B(129),Tw()]),G(E,[B(130),TH()]),G(E,[B(131),V4]),G(E,[B(132),SK()]),G(E,[B(133),T0()]),G(E,[B(134),SX()]),G(E,[B(135),SS()]),G(E,[B(136),S4()]),G(E,[B(137),Tx()]),G(E,[B(138),S0()]),G(E,[B(139),Ta()]),G(E,[B(140),SL()]),G(E,[B(141),TC()]),G(E,[B(142),Tu()]),G(E,[B(143),SI()]),G(E,[B(144),Ts()]),G(E,[B(145),SJ()]),G(E,[B(146),S$()]),G(E,[B(147),TN()]),G(E,[B(148),Tf()]),G(E,[B(149),SQ()]),G(E,[B(150),Tv()]),G(E,[B(151),
Tr()]),G(E,[B(152),TK()]),G(E,[B(153),S8()]),G(E,[B(154),Te()]),G(E,[B(155),V3]),G(E,[B(156),SW()]),G(E,[B(157),SY()]),G(E,[B(158),V3]),G(E,[B(159),SF()]),G(E,[B(160),V4]),G(E,[B(161),TD()]),G(E,[B(162),J(0,127)]),G(E,[B(163),J(128,255)]),G(E,[B(164),J(256,383)]),G(E,[B(165),J(384,591)]),G(E,[B(166),J(592,687)]),G(E,[B(167),J(688,767)]),G(E,[B(168),J(768,879)]),G(E,[B(169),J(880,1023)]),G(E,[B(170),J(1024,1279)]),G(E,[B(171),J(1280,1327)]),G(E,[B(172),J(1328,1423)]),G(E,[B(173),J(1424,1535)]),G(E,[B(73),J(1536,
1791)]),G(E,[B(174),J(1792,1871)]),G(E,[B(175),J(1872,1919)]),G(E,[B(176),J(1920,1983)]),G(E,[B(177),J(2304,2431)]),G(E,[B(74),J(2432,2559)]),G(E,[B(178),J(2560,2687)]),G(E,[B(179),J(2688,2815)]),G(E,[B(180),J(2816,2943)]),G(E,[B(83),J(2944,3071)]),G(E,[B(81),J(3072,3199)]),G(E,[B(181),J(3200,3327)]),G(E,[B(182),J(3328,3455)]),G(E,[B(183),J(3456,3583)]),G(E,[B(89),J(3584,3711)]),G(E,[B(184),J(3712,3839)]),G(E,[B(185),J(3840,4095)]),G(E,[B(186),J(4096,4255)]),G(E,[B(187),J(4256,4351)]),G(E,[B(188),J(4352,4607)]),
G(E,[B(189),J(4608,4991)]),G(E,[B(190),J(4992,5023)]),G(E,[B(191),J(5024,5119)]),G(E,[B(192),J(5120,5759)]),G(E,[B(193),J(5760,5791)]),G(E,[B(194),J(5792,5887)]),G(E,[B(85),J(5888,5919)]),G(E,[B(195),J(5920,5951)]),G(E,[B(196),J(5952,5983)]),G(E,[B(197),J(5984,6015)]),G(E,[B(198),J(6016,6143)]),G(E,[B(199),J(6144,6319)]),G(E,[B(200),J(6400,6479)]),G(E,[B(201),J(6480,6527)]),G(E,[B(202),J(6528,6623)]),G(E,[B(203),J(6624,6655)]),G(E,[B(204),J(6656,6687)]),G(E,[B(205),J(7424,7551)]),G(E,[B(206),J(7552,7615)]),
G(E,[B(207),J(7616,7679)]),G(E,[B(208),J(7680,7935)]),G(E,[B(209),J(7936,8191)]),G(E,[B(210),J(8192,8303)]),G(E,[B(211),J(8304,8351)]),G(E,[B(212),J(8352,8399)]),G(E,[B(213),J(8400,8447)]),G(E,[B(214),J(8448,8527)]),G(E,[B(215),J(8528,8591)]),G(E,[B(216),J(8592,8703)]),G(E,[B(217),J(8704,8959)]),G(E,[B(218),J(8960,9215)]),G(E,[B(219),J(9216,9279)]),G(E,[B(220),J(9280,9311)]),G(E,[B(221),J(9312,9471)]),G(E,[B(222),J(9472,9599)]),G(E,[B(223),J(9600,9631)]),G(E,[B(224),J(9632,9727)]),G(E,[B(225),J(9728,9983)]),
G(E,[B(226),J(9984,10175)]),G(E,[B(227),J(10176,10223)]),G(E,[B(228),J(10224,10239)]),G(E,[B(229),J(10240,10495)]),G(E,[B(230),J(10496,10623)]),G(E,[B(231),J(10624,10751)]),G(E,[B(232),J(10752,11007)]),G(E,[B(233),J(11008,11263)]),G(E,[B(234),J(11264,11359)]),G(E,[B(235),J(11392,11519)]),G(E,[B(236),J(11520,11567)]),G(E,[B(237),J(11568,11647)]),G(E,[B(238),J(11648,11743)]),G(E,[B(239),J(11776,11903)]),G(E,[B(240),J(11904,12031)]),G(E,[B(241),J(12032,12255)]),G(E,[B(242),J(12272,12287)]),G(E,[B(243),J(12288,
12351)]),G(E,[B(244),J(12352,12447)]),G(E,[B(245),J(12448,12543)]),G(E,[B(246),J(12544,12591)]),G(E,[B(247),J(12592,12687)]),G(E,[B(248),J(12688,12703)]),G(E,[B(249),J(12704,12735)]),G(E,[B(250),J(12736,12783)]),G(E,[B(251),J(12784,12799)]),G(E,[B(252),J(12800,13055)]),G(E,[B(253),J(13056,13311)]),G(E,[B(254),J(13312,19893)]),G(E,[B(255),J(19904,19967)]),G(E,[B(256),J(19968,40959)]),G(E,[B(257),J(40960,42127)]),G(E,[B(258),J(42128,42191)]),G(E,[B(259),J(42752,42783)]),G(E,[B(260),J(43008,43055)]),G(E,[B(261),
J(44032,55203)]),G(E,[B(262),J(55296,56191)]),G(E,[B(263),J(56192,56319)]),G(E,[B(264),J(56320,57343)]),G(E,[B(265),J(57344,63743)]),G(E,[B(266),J(63744,64255)]),G(E,[B(267),J(64256,64335)]),G(E,[B(268),J(64336,65023)]),G(E,[B(269),J(65024,65039)]),G(E,[B(270),J(65040,65055)]),G(E,[B(271),J(65056,65071)]),G(E,[B(272),J(65072,65103)]),G(E,[B(273),J(65104,65135)]),G(E,[B(274),J(65136,65279)]),G(E,[B(275),J(65280,65519)]),G(E,[B(276),J(0,1114111)]),G(E,[B(277),S1()]),G(E,[B(278),Bf(0,1)]),G(E,[B(279),Ed(62,1)]),
G(E,[B(280),Bf(1,1)]),G(E,[B(281),Bf(2,1)]),G(E,[B(282),Bf(3,0)]),G(E,[B(283),Bf(4,0)]),G(E,[B(284),Bf(5,1)]),G(E,[B(285),Ed(448,1)]),G(E,[B(286),Bf(6,1)]),G(E,[B(287),Bf(7,0)]),G(E,[B(288),Bf(8,1)]),G(E,[B(289),Ed(3584,1)]),G(E,[B(290),Bf(9,1)]),G(E,[B(291),Bf(10,1)]),G(E,[B(292),Bf(11,1)]),G(E,[B(293),Ed(28672,0)]),G(E,[B(294),Bf(12,0)]),G(E,[B(295),Bf(13,0)]),G(E,[B(296),Bf(14,0)]),G(E,[B(297),TW(983040,1,1)]),G(E,[B(298),Bf(15,0)]),G(E,[B(299),Bf(16,1)]),G(E,[B(300),Bf(18,1)]),G(E,[B(301),Ua(19,0,1)]),G(E,
[B(302),Ed(1643118592,1)]),G(E,[B(303),Bf(20,0)]),G(E,[B(304),Bf(21,0)]),G(E,[B(305),Bf(22,0)]),G(E,[B(306),Bf(23,0)]),G(E,[B(307),Bf(24,1)]),G(E,[B(308),Ed(2113929216,1)]),G(E,[B(309),Bf(25,1)]),G(E,[B(310),Bf(26,0)]),G(E,[B(311),Bf(27,0)]),G(E,[B(312),Bf(28,1)]),G(E,[B(313),Bf(29,0)]),G(E,[B(314),Bf(30,0)])]);}
function FD(){Bn.call(this);this.fz=0;}
function PD(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.fz!=Dh(De(Cy(e,d)))?(-1):2;}
function Es(){Bj.call(this);this.bL=0;}
function M8(a){var b=new Es();N9(b,a);return b;}
function N9(a,b){Bi(a);a.bL=b;}
function Ns(a,b){a.b=b;}
function OH(a,b,c,d){var e,f;e=b+1|0;if(e>d.j){d.Z=1;return (-1);}f=I(c,b);if(b>d.V&&BG(I(c,b-1|0)))return (-1);if(a.bL!=f)return (-1);return a.b.a(e,c,d);}
function Q8(a,b,c,d){var e,f,g,h;if(!(c instanceof Bq))return D2(a,b,c,d);e=d.V;f=d.j;while(true){if(b>=f)return (-1);g=CK(c,a.bL,b);if(g<0)return (-1);if(g>e&&BG(I(c,g-1|0))){b=g+1|0;continue;}h=a.b;b=g+1|0;if(h.a(b,c,d)>=0)break;}return g;}
function Pq(a,b,c,d,e){var f,g;if(!(d instanceof Bq))return D$(a,b,c,d,e);f=e.V;a:{while(true){if(c<b)return (-1);g=Dl(d,a.bL,c);if(g<0)break a;if(g<b)break a;if(g>f&&BG(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.b.a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function MD(a,b){if(b instanceof CC)return 0;if(b instanceof CD)return 0;if(b instanceof Cq)return 0;if(b instanceof Cu)return 0;if(b instanceof EJ)return 0;if(!(b instanceof Es))return 1;return b.bL!=a.bL?0:1;}
function Qk(a,b){return 1;}
function EJ(){Bj.call(this);this.bQ=0;}
function Ru(a){var b=new EJ();Nc(b,a);return b;}
function Nc(a,b){Bi(a);a.bQ=b;}
function N_(a,b){a.b=b;}
function Mb(a,b,c,d){var e,f,g,h;e=d.j;f=b+1|0;g=Ci(f,e);if(g>0){d.Z=1;return (-1);}h=I(c,b);if(g<0&&BS(I(c,f)))return (-1);if(a.bQ!=h)return (-1);return a.b.a(f,c,d);}
function NS(a,b,c,d){var e,f;if(!(c instanceof Bq))return D2(a,b,c,d);e=d.j;while(true){if(b>=e)return (-1);f=CK(c,a.bQ,b);if(f<0)return (-1);b=f+1|0;if(b<e&&BS(I(c,b))){b=f+2|0;continue;}if(a.b.a(b,c,d)>=0)break;}return f;}
function Pw(a,b,c,d,e){var f,g;if(!(d instanceof Bq))return D$(a,b,c,d,e);f=e.j;a:{while(true){if(c<b)return (-1);g=Dl(d,a.bQ,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&BS(I(d,c))){c=g+(-1)|0;continue;}if(a.b.a(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Pf(a,b){if(b instanceof CC)return 0;if(b instanceof CD)return 0;if(b instanceof Cq)return 0;if(b instanceof Cu)return 0;if(b instanceof Es)return 0;if(!(b instanceof EJ))return 1;return b.bQ!=a.bQ?0:1;}
function N3(a,b){return 1;}
function Cu(){var a=this;Bn.call(a);a.cL=0;a.cB=0;a.bN=0;}
function O1(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.cL==e&&a.cB==d?2:(-1);}
function MQ(a,b,c,d){var e,f;if(!(c instanceof Bq))return D2(a,b,c,d);e=d.j;while(b<e){b=CK(c,a.cL,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.cB==f&&a.b.a(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function N$(a,b,c,d,e){var f;if(!(d instanceof Bq))return D$(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Dl(d,a.cB,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.cL==I(d,f)&&a.b.a(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function OL(a,b){if(b instanceof Cu)return b.bN!=a.bN?0:1;if(b instanceof Cq)return b.f(a.bN);if(b instanceof CC)return 0;if(!(b instanceof CD))return 1;return 0;}
var Hq=H(CS);
function Ol(a,b){return b!=10?0:1;}
function OT(a,b,c){return b!=10?0:1;}
var Hr=H(CS);
function PM(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Rz(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function J2(){var a=this;E.call(a);a.dT=null;a.cV=null;a.b2=0;a.fB=0;}
function M0(a){var b=new J2();RN(b,a);return b;}
function RN(a,b){var c,d;while(true){c=a.b2;if(b<c)break;a.b2=c<<1|1;}d=c<<1|1;a.b2=d;d=d+1|0;a.dT=BY(d);a.cV=BY(d);a.fB=b;}
function Ir(a,b,c){var d,e,f,g;d=0;e=a.b2;f=b&e;while(true){g=a.dT.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.cV.data[f]=c;}
function FF(a,b){var c,d,e,f;c=a.b2;d=b&c;e=0;while(true){f=a.dT.data[d];if(!f)break;if(f==b)return a.cV.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.fB;}
var Jo=H();
var Eo=H(R);
function TA(){var a=new Eo();Rp(a);return a;}
function Rp(a){}
function Lb(a){return BD(Bk(B$(),9,13),32);}
var E2=H(R);
function T6(){var a=new E2();Qa(a);return a;}
function Qa(a){}
function I5(a){return Bk(B$(),48,57);}
var JX=H(R);
function T5(){var a=new JX();QO(a);return a;}
function QO(a){}
function Pn(a){return Bk(B$(),97,122);}
var Kv=H(R);
function SO(){var a=new Kv();RR(a);return a;}
function RR(a){}
function Ql(a){return Bk(B$(),65,90);}
var Kw=H(R);
function Tw(){var a=new Kw();ND(a);return a;}
function ND(a){}
function PR(a){return Bk(B$(),0,127);}
var Fu=H(R);
function TH(){var a=new Fu();OV(a);return a;}
function OV(a){}
function J5(a){return Bk(Bk(B$(),97,122),65,90);}
var ET=H(Fu);
function SK(){var a=new ET();Ry(a);return a;}
function Ry(a){}
function KR(a){return Bk(J5(a),48,57);}
var LI=H(R);
function T0(){var a=new LI();MB(a);return a;}
function MB(a){}
function Q7(a){return Bk(Bk(Bk(B$(),33,64),91,96),123,126);}
var Fv=H(ET);
function SX(){var a=new Fv();Op(a);return a;}
function Op(a){}
function I4(a){return Bk(Bk(Bk(KR(a),33,64),91,96),123,126);}
var Lp=H(Fv);
function SS(){var a=new Lp();P2(a);return a;}
function P2(a){}
function Mo(a){return BD(I4(a),32);}
var LM=H(R);
function S4(){var a=new LM();Pz(a);return a;}
function Pz(a){}
function O9(a){return BD(BD(B$(),32),9);}
var Kt=H(R);
function Tx(){var a=new Kt();Rn(a);return a;}
function Rn(a){}
function Mi(a){return BD(Bk(B$(),0,31),127);}
var J_=H(R);
function S0(){var a=new J_();NT(a);return a;}
function NT(a){}
function RC(a){return Bk(Bk(Bk(B$(),48,57),97,102),65,70);}
var KA=H(R);
function Ta(){var a=new KA();Ng(a);return a;}
function Ng(a){}
function MZ(a){var b;b=new FY;b.h0=a;Bb(b);b.r=1;return b;}
var LQ=H(R);
function SL(){var a=new LQ();OO(a);return a;}
function OO(a){}
function L9(a){var b;b=new FL;b.f1=a;Bb(b);b.r=1;return b;}
var J3=H(R);
function TC(){var a=new J3();NJ(a);return a;}
function NJ(a){}
function Rv(a){var b;b=new IT;b.hy=a;Bb(b);return b;}
var JP=H(R);
function Tu(){var a=new JP();Mj(a);return a;}
function Mj(a){}
function O4(a){var b;b=new IS;b.g9=a;Bb(b);return b;}
var KP=H(R);
function SI(){var a=new KP();OQ(a);return a;}
function OQ(a){}
function O7(a){var b;b=new Ia;b.hi=a;Bb(b);Ee(b.q,0,2048);b.r=1;return b;}
var JE=H(R);
function Ts(){var a=new JE();Oh(a);return a;}
function Oh(a){}
function PA(a){var b;b=new Hb;b.gl=a;Bb(b);b.r=1;return b;}
var Ji=H(R);
function SJ(){var a=new Ji();L1(a);return a;}
function L1(a){}
function Rt(a){var b;b=new Gu;b.hM=a;Bb(b);b.r=1;return b;}
var J9=H(R);
function S$(){var a=new J9();MC(a);return a;}
function MC(a){}
function LW(a){var b;b=new Ib;b.h2=a;Bb(b);return b;}
var Kl=H(R);
function TN(){var a=new Kl();Re(a);return a;}
function Re(a){}
function Sd(a){var b;b=new FG;b.fT=a;Bb(b);b.r=1;return b;}
var KK=H(R);
function Tf(){var a=new KK();MI(a);return a;}
function MI(a){}
function PG(a){var b;b=new FK;b.gs=a;Bb(b);b.r=1;return b;}
var I3=H(R);
function SQ(){var a=new I3();On(a);return a;}
function On(a){}
function QC(a){var b;b=new Gm;b.he=a;Bb(b);b.r=1;return b;}
var Lm=H(R);
function Tv(){var a=new Lm();Sp(a);return a;}
function Sp(a){}
function Sj(a){var b;b=new Ht;b.hz=a;Bb(b);b.r=1;return b;}
var Ki=H(R);
function Tr(){var a=new Ki();MU(a);return a;}
function MU(a){}
function QH(a){var b;b=new Hw;b.hA=a;Bb(b);return b;}
var K5=H(R);
function TK(){var a=new K5();Oi(a);return a;}
function Oi(a){}
function Oc(a){var b;b=new Gj;b.gA=a;Bb(b);return b;}
var KJ=H(R);
function S8(){var a=new KJ();O5(a);return a;}
function O5(a){}
function MS(a){var b;b=new FB;b.f0=a;Bb(b);b.r=1;return b;}
var LO=H(R);
function Te(){var a=new LO();Rc(a);return a;}
function Rc(a){}
function Pd(a){var b;b=new FV;b.hX=a;Bb(b);b.r=1;return b;}
var EF=H(R);
function SW(){var a=new EF();PL(a);return a;}
function PL(a){}
function LN(a){return BD(Bk(Bk(Bk(B$(),97,122),65,90),48,57),95);}
var KQ=H(EF);
function SY(){var a=new KQ();Rh(a);return a;}
function Rh(a){}
function MF(a){var b;b=CE(LN(a),1);b.r=1;return b;}
var Lu=H(Eo);
function SF(){var a=new Lu();Ra(a);return a;}
function Ra(a){}
function Nv(a){var b;b=CE(Lb(a),1);b.r=1;return b;}
var KE=H(E2);
function TD(){var a=new KE();R2(a);return a;}
function R2(a){}
function QX(a){var b;b=CE(I5(a),1);b.r=1;return b;}
function Kg(){var a=this;R.call(a);a.fu=0;a.fP=0;}
function J(a,b){var c=new Kg();Rq(c,a,b);return c;}
function Rq(a,b,c){a.fu=b;a.fP=c;}
function SB(a){return Bk(B$(),a.fu,a.fP);}
var KB=H(R);
function S1(){var a=new KB();RJ(a);return a;}
function RJ(a){}
function Rj(a){return Bk(Bk(B$(),65279,65279),65520,65533);}
function Lg(){var a=this;R.call(a);a.dl=0;a.cN=0;a.eW=0;}
function Bf(a,b){var c=new Lg();OJ(c,a,b);return c;}
function Ua(a,b,c){var d=new Lg();Rs(d,a,b,c);return d;}
function OJ(a,b,c){a.cN=c;a.dl=b;}
function Rs(a,b,c,d){a.eW=d;a.cN=c;a.dl=b;}
function Qe(a){var b;b=TZ(a.dl);if(a.eW)Ee(b.q,0,2048);b.r=a.cN;return b;}
function Lq(){var a=this;R.call(a);a.dk=0;a.cZ=0;a.el=0;}
function Ed(a,b){var c=new Lq();PH(c,a,b);return c;}
function TW(a,b,c){var d=new Lq();LY(d,a,b,c);return d;}
function PH(a,b,c){a.cZ=c;a.dk=b;}
function LY(a,b,c,d){a.el=d;a.cZ=c;a.dk=b;}
function LX(a){var b;b=new IO;JA(b,a.dk);if(a.el)Ee(b.q,0,2048);b.r=a.cZ;return b;}
function HH(){var a=this;E.call(a);a.fQ=null;a.d9=null;}
function F$(){var a=this;E.call(a);a.e9=0;a.d7=0;a.fa=null;}
function Qc(a,b,c){var d=new F$();P1(d,a,b,c);return d;}
function P1(a,b,c,d){a.e9=b;a.d7=c;a.fa=d;}
function Jh(){var a=this;E.call(a);a.fr=null;a.bT=null;a.ds=null;a.D=null;a.bH=null;a.u=0;a.fy=0;a.eB=0;a.X=0;a.fF=0;a.bg=0;a.bM=0;a.U=0;}
function TU(a,b,c,d,e){var f=new Jh();Nx(f,a,b,c,d,e);return f;}
function Nx(a,b,c,d,e,f){a.fr=b;a.bT=c;a.ds=d;a.D=e;a.bH=f;}
function Kq(a){var b,c,d;a:while(true){b=CK(a.D,37,a.u);if(b<0){Cx(a.bT,DB(a.D,a.u));return;}Cx(a.bT,BM(a.D,a.u,b));b=b+1|0;a.u=b;a.fy=b;c=Jp(a);if(a.U&256)a.X=B7(0,a.fF);if(a.X==(-1)){d=a.eB;a.eB=d+1|0;a.X=d;}b:{a.fF=a.X;switch(c){case 66:break;case 67:H8(a,c,1);break b;case 68:Gl(a,c,1);break b;case 69:case 70:case 71:case 73:case 74:case 75:case 76:case 77:case 78:case 80:case 81:case 82:case 84:case 85:case 86:case 87:case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:case 101:case 102:case 103:case 105:case 106:case 107:case 108:case 109:case 110:case 112:case 113:case 114:case 116:case 117:case 118:case 119:break a;case 72:FN(a,
c,1);break b;case 79:Em(a,c,3,1);break b;case 83:HD(a,c,1);break b;case 88:Em(a,c,4,1);break b;case 98:Gb(a,c,0);break b;case 99:H8(a,c,0);break b;case 100:Gl(a,c,0);break b;case 104:FN(a,c,0);break b;case 111:Em(a,c,3,0);break b;case 115:HD(a,c,0);break b;case 120:Em(a,c,4,0);break b;default:break a;}Gb(a,c,1);}}L(Sz(DJ(c)));}
function Gb(a,b,c){var d;EX(a,b);d=a.bH.data[a.X];CL(a,c,!(d instanceof DH?d.jK():d===null?0:1)?B(315):B(109));}
function FN(a,b,c){var d;EX(a,b);d=a.bH.data[a.X];CL(a,c,d===null?B(101):IX(d.bW));}
function HD(a,b,c){var d,e;EX(a,b);d=a.bH.data[a.X];if(!Qf(d,ID)){CU();CL(a,c,d===null?B(101):Dp(d.bW));}else{e=a.U&7;if(c)e=e|2;d.j9(a.fr,e,a.bg,a.bM);}}
function H8(a,b,c){var d,e,f;DR(a,b,259);d=a.bH.data[a.X];e=a.bM;if(e>=0)L(Rb(e));if(d instanceof BW)e=d.id();else if(d instanceof Dj)e=d.gT()&65535;else if(d instanceof DL)e=d.g1()&65535;else{if(!(d instanceof CP)){if(d===null){CL(a,c,B(101));return;}L(Le(b,CN(d)));}e=d.bW;if(!(e>=0&&e<=1114111?1:0)){d=new Ic;f=new T;W(f);N(Bh(N(f,B(316)),e),B(317));Bc(d,S(f));d.f9=e;L(d);}}CL(a,c,Ep(C_(e)));}
function Gl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;DR(a,b,507);Hz(a);d=a.bH.data[a.X];if(!(d instanceof Ek)){if(!(d instanceof CP)&&!(d instanceof Dj)&&!(d instanceof DL))L(Le(b,d===null?null:CN(d)));e=Jv(d);f=Dp(L$(e));g=e>=0?0:1;}else{h=d.gm();b=Se(h,BN);if(b<0)h=My(h);f=new T;W(f);e=f.k;i=1;if(To(h,BN)){i=0;h=My(h);}a:{if(Ck(h,U(10))<0){if(i)BF(f,e,e+1|0);else{BF(f,e,e+2|0);j=f.t.data;i=e+1|0;j[e]=45;e=i;}f.t.data[e]=CF(D3(h),10);}else{k=1;l=U(1);m=B3(U(-1),U(10));b:{while(true){n=Bp(l,U(10));if
(Ck(n,h)>0){n=l;break b;}k=k+1|0;if(Ck(n,m)>0)break;l=n;}}if(!i)k=k+1|0;BF(f,e,e+k|0);if(i)o=e;else{j=f.t.data;o=e+1|0;j[e]=45;}while(true){if(CO(n,BN))break a;j=f.t.data;e=o+1|0;j[o]=CF(D3((B3(h,n))),10);h=Jr(h,n);n=B3(n,U(10));o=e;}}}f=S(f);g=b>=0?0:1;}i=0;p=new T;W(p);if(g){if(!(a.U&128)){Bv(p,45);i=1;}else{Bv(p,40);i=2;}}else{b=a.U;if(b&8){CV(p,43);i=1;}else if(b&16){CV(p,32);i=1;}}q=new T;W(q);if(!(a.U&64))Y(q,f);else{r=(Nt(a.ds)).eo;d=a.ds;s=d.b3;t=d.cb;if(VS===null)VS=MR();u=VS;v=J0(s,t);v=u.hasOwnProperty($rt_ustr(v))
?u[$rt_ustr(v)]:u.hasOwnProperty($rt_ustr(s))?u[$rt_ustr(s)]:u.root;v=(v.value!==null?$rt_str(v.value):null);t=new Ei;u=Nt(d);t.eV=1;t.cr=40;t.di=1;t.cF=3;Si();t.g2=V5;t.fR=R4(F8());t.fx=BJ(B4,0);j=BJ(B4,1);j.data[0]=Eh(B(318));t.cH=j;t.fe=BJ(B4,0);t.eM=BJ(B4,0);t.fk=1;t.gZ=Kj(u);LK(t,v);w=t.eG;o=O(f)%w|0;if(!o)o=w;k=0;while(o<O(f)){Y(q,BM(f,k,o));CV(q,r);x=o+w|0;k=o;o=x;}Y(q,DB(f,k));}c:{if(a.U&32){o=Gs(q)+i|0;while(true){if(o>=a.bg)break c;CV(p,CF(0,10));o=o+1|0;}}}Cx(p,q);if(g&&a.U&128)CV(p,41);CL(a,c,CA(p));}
function Em(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;DR(a,b,423);Hz(a);e=a.bH.data[a.X];if(!(e instanceof Ek)){if(e instanceof CP)f=Eu(e.bW,c);else if(e instanceof DL)f=Eu(e.g1()&65535,c);else{if(!(e instanceof Dj))L(Le(b,e===null?null:CN(e)));f=Eu(e.gT()&255,c);}}else{g=e.gm();b=Se(g,BN);if(!b)f=B(103);else{h=1<<c;i=h-1|0;if(!b)b=64;else{j=0;k=B0(g,32);if(PU(k,BN))j=32;else k=g;l=B0(k,16);if(CO(l,BN))l=k;else j=j|16;k=B0(l,8);if(CO(k,BN))k=l;else j=j|8;l=B0(k,4);if(CO(l,BN))l=k;else j=j|4;k=B0(l,2);if(CO(k,BN))k
=l;else j=j|2;if(PU(B0(k,1),BN))j=j|1;b=(64-j|0)-1|0;}b=(((64-b|0)+c|0)-1|0)/c|0;m=BU(b);n=m.data;b=CJ(b-1|0,c);j=0;while(b>=0){o=j+1|0;n[j]=CF(D3(B0(g,b))&i,h);b=b-c|0;j=o;}f=Ep(m);}}p=new T;W(p);if(a.U&4){q=c!=4?B(103):B(319);e=new T;W(e);N(N(e,q),f);f=S(e);}a:{if(a.U&32){h=O(f);while(true){if(h>=a.bg)break a;Bv(p,CF(0,10));h=h+1|0;}}}Y(p,f);CL(a,d,S(p));}
function Hz(a){var b,c,d,e,f;b=a.U;if(b&8&&b&16)L(Mn(B(320)));if(b&32&&b&1)L(Mn(B(321)));c=a.bM;if(c>=0)L(Rb(c));if(b&1&&a.bg<0){d=new Iu;e=BM(a.D,a.fy,a.u);f=new T;W(f);N(N(f,B(322)),e);Bc(d,S(f));d.gh=e;L(d);}}
function CL(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.bM;if(d>0)c=BM(c,0,d);if(b&&!BP(c)){b=0;e=0;f=c.B.data;g=f.length;h=0;a:{while(h<g){d=f[h];if(Ch(d)!=d){b=1;break a;}if(It(d))e=1;h=h+1|0;}}if(b){if(!e){f=BU(c.B.data.length);i=f.data;b=0;while(true){j=c.B.data;if(b>=j.length)break;i[b]=Ch(j[b]);b=b+1|0;}c=Ep(f);}else{f=BY(c.B.data.length).data;d=0;b=0;while(true){j=c.B.data;e=j.length;if(b>=e)break;b:{if(b!=(e-1|0)&&BG(j[b])){j=c.B.data;h=b+1|0;if(BS(j[h])){e=d+1|0;j=c.B.data;f[d]=De(Cy(j[b],j[h]));b=h;break b;}}e
=d+1|0;f[d]=Ch(c.B.data[b]);}b=b+1|0;d=e;}c=new Bq;b=0;c.B=BU(d*2|0);e=0;g=0;while(g<d){h=b+1|0;b=f[b];if(b<65536){j=c.B.data;k=e+1|0;j[e]=b&65535;}else{j=c.B.data;l=e+1|0;j[e]=El(b);j=c.B.data;k=l+1|0;j[l]=D9(b);}g=g+1|0;b=h;e=k;}f=c.B;if(e<f.data.length)c.B=Jw(f,e);}}}if(!(a.U&1)){Ik(a,c);Cx(a.bT,c);}else{Cx(a.bT,c);Ik(a,c);}}
function EX(a,b){DR(a,b,263);}
function DR(a,b,c){var d,e,f,g;d=a.U;if((d|c)==c)return;e=new Gp;f=DJ(I(B(323),Dn(d&(c^(-1)))));g=new T;W(g);Bv(N(N(N(g,B(324)),f),B(325)),b);Bc(e,S(g));e.g$=f;e.gy=b;L(e);}
function Ik(a,b){var c,d,e;if(a.bg>O(b)){c=a.bg-O(b)|0;d=new T;Di(d,c);e=0;while(e<c){Bv(d,32);e=e+1|0;}Cx(a.bT,d);}}
function Jp(a){var b,c,d,e,f,g;a.U=0;a.X=(-1);a.bg=(-1);a.bM=(-1);b=I(a.D,a.u);if(b!=48&&Fi(b)){c=E6(a);if(a.u<O(a.D)&&I(a.D,a.u)==36){a.u=a.u+1|0;a.X=c-1|0;}else a.bg=c;}a:{b:{while(true){if(a.u>=O(a.D))break a;c:{b=I(a.D,a.u);switch(b){case 32:break;case 33:case 34:case 36:case 37:case 38:case 39:case 41:case 42:case 46:case 47:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:break b;case 35:c=4;break c;case 40:c=128;break c;case 43:c=8;break c;case 44:c=64;break c;case 45:c
=1;break c;case 48:c=32;break c;case 60:c=256;break c;default:break b;}c=16;}d=a.U;if(d&c)break;a.U=d|c;a.u=a.u+1|0;}e=new Fx;f=DJ(b);g=new T;W(g);N(N(g,B(326)),f);Bc(e,S(g));e.gM=f;L(e);}}if(a.bg<0&&a.u<O(a.D)&&Fi(I(a.D,a.u)))a.bg=E6(a);if(a.u<O(a.D)&&I(a.D,a.u)==46){b=a.u+1|0;a.u=b;if(b<O(a.D)&&Fi(I(a.D,a.u)))a.bM=E6(a);else L(Sz(DJ(I(a.D,a.u-1|0))));}if(a.u<O(a.D)){e=a.D;c=a.u;a.u=c+1|0;return I(e,c);}e=new G7;f=a.D;LH(e,DJ(I(f,O(f)-1|0)));L(e);}
function E6(a){var b,c,d,e;b=0;while(a.u<O(a.D)&&Fi(I(a.D,a.u))){c=b*10|0;d=a.D;e=a.u;a.u=e+1|0;b=c+(I(d,e)-48|0)|0;}return b;}
function Fi(b){return b>=48&&b<=57?1:0;}
var GD=H(Ct);
function HY(){var a=this;P.call(a);a.ev=null;a.hp=null;}
function PV(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.O^Cj(a.ev,c):0;}
function HW(){var a=this;P.call(a);a.eY=null;a.fd=null;a.gG=null;}
function Ms(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.O^Cj(a.eY,c):0;return a.fd.f(b)&&!d?1:0;}
function GJ(){var a=this;P.call(a);a.cC=null;a.f6=null;}
function Sr(a,b){return a.A^Cj(a.cC,b);}
function QI(a){var b,c,d;b=new T;W(b);c=DI(a.cC,0);while(c>=0){DW(b,C_(c));Bv(b,124);c=DI(a.cC,c+1|0);}d=b.k;if(d>0)HQ(b,d-1|0);return S(b);}
function GQ(){var a=this;P.call(a);a.fH=null;a.fX=null;}
function O3(a,b){return a.fH.f(b);}
function GO(){var a=this;P.call(a);a.cP=0;a.eO=null;a.dC=null;}
function PC(a,b){return !(a.cP^Cj(a.dC.n,b))&&!(a.cP^a.dC.bj^a.eO.f(b))?0:1;}
function GP(){var a=this;P.call(a);a.cW=0;a.e4=null;a.c5=null;}
function L3(a,b){return !(a.cW^Cj(a.c5.n,b))&&!(a.cW^a.c5.bj^a.e4.f(b))?1:0;}
function GT(){var a=this;P.call(a);a.fo=0;a.e7=null;a.e2=null;a.gJ=null;}
function PE(a,b){return a.fo^(!a.e7.f(b)&&!a.e2.f(b)?0:1);}
function GU(){var a=this;P.call(a);a.fL=0;a.fA=null;a.fj=null;a.hO=null;}
function LS(a,b){return a.fL^(!a.fA.f(b)&&!a.fj.f(b)?0:1)?0:1;}
function GR(){var a=this;P.call(a);a.fc=null;a.hV=null;}
function QP(a,b){return B2(a.fc,b);}
function GS(){var a=this;P.call(a);a.fb=null;a.g0=null;}
function L5(a,b){return B2(a.fb,b)?0:1;}
function GV(){var a=this;P.call(a);a.d6=null;a.fG=0;a.eL=null;}
function QR(a,b){return !B2(a.d6,b)&&!(a.fG^Cj(a.eL.n,b))?0:1;}
function GW(){var a=this;P.call(a);a.en=null;a.et=0;a.ed=null;}
function OX(a,b){return !B2(a.en,b)&&!(a.et^Cj(a.ed.n,b))?1:0;}
function GI(){var a=this;P.call(a);a.eK=0;a.e3=null;a.fh=null;a.gb=null;}
function SC(a,b){return !(a.eK^a.e3.f(b))&&!B2(a.fh,b)?0:1;}
function Hi(){var a=this;P.call(a);a.fg=0;a.eb=null;a.em=null;a.gX=null;}
function QU(a,b){return !(a.fg^a.eb.f(b))&&!B2(a.em,b)?1:0;}
function GG(){var a=this;P.call(a);a.e0=null;a.g5=null;}
function OW(a,b){return B2(a.e0,b);}
function GH(){var a=this;P.call(a);a.e6=null;a.hN=null;}
function Qr(a,b){return B2(a.e6,b)?0:1;}
function GM(){var a=this;P.call(a);a.fn=null;a.eg=0;a.fO=null;}
function RQ(a,b){return B2(a.fn,b)&&a.eg^Cj(a.fO.n,b)?1:0;}
function GF(){var a=this;P.call(a);a.eC=null;a.fN=0;a.ee=null;}
function Qq(a,b){return B2(a.eC,b)&&a.fN^Cj(a.ee.n,b)?0:1;}
function GK(){var a=this;P.call(a);a.eN=0;a.eu=null;a.fK=null;a.gE=null;}
function NQ(a,b){return a.eN^a.eu.f(b)&&B2(a.fK,b)?1:0;}
function GL(){var a=this;P.call(a);a.ey=0;a.d8=null;a.eJ=null;a.hb=null;}
function N2(a,b){return a.ey^a.d8.f(b)&&B2(a.eJ,b)?0:1;}
var DT=H(Bx);
var Fw=H(DT);
var HB=H(BX);
var V6=null;function J6(){V6=F($rt_doublecls());}
var C0=H();
var V7=null;var V8=null;var U3=null;var U2=null;var V9=null;function Lo(){V7=C1([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);V8=G2([U(1),U(10),U(100),U(1000),U(10000),U(100000),U(1000000),U(10000000),U(100000000),U(1000000000),C(1410065408, 2),C(1215752192, 23),C(3567587328, 232),C(1316134912, 2328),C(276447232, 23283),C(2764472320, 232830),C(1874919424, 2328306),C(1569325056, 23283064),C(2808348672, 232830643)]);U3=G2([U(1),U(10),U(100),U(10000),U(100000000),C(1874919424, 2328306)]);U2
=new Gt;V9=new HA;}
var DZ=H();
var V$=BN;var V_=null;var Wa=null;function Lj(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):C(0, 2146959360);c.ep=CO(B8(d,C(0, 2147483648)),BN)?0:1;e=B8(d,C(4294967295, 1048575));f=D3(TX(d,52))&2047;if(CO(e,BN)&&!f){c.cR=BN;c.c8=0;return;}if(f)e=Ty(e,C(0, 1048576));else{e=DD(e,1);while(CO(B8(e,C(0, 1048576)),BN)){e=DD(e,1);f=f+(-1)|0;}}g=Wa.data;h=f<<16>>16;i=0;j=g.length;if(i>j){c=new Bg;Z(c);L(c);}k=j-1|0;a:{while(true){if(i>k){j=( -i|0)-1|0;break a;}j=(i
+k|0)/2|0;l=Ci(g[j],h);if(!l)break;if(l<=0)i=j+1|0;else k=j-1|0;}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Eg(e,V_.data[h],i);if(PJ(m,V$)){while(Ck(m,V$)<=0){j=j+(-1)|0;m=BL(Bp(m,U(10)),U(9));}g=Wa.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Eg(e,V_.data[h],i);}e=DD(e,1);d=BL(e,U(1));g=V_.data;h=j+1|0;n=g[h];f=i-1|0;n=Eg(d,n,f);o=Eg(TS(e,U(1)),V_.data[h],f);p=U(1);while(true){q=Bp(p,U(10));if(Ck(B3(m,q),B3(o,q))<=0)break;p=q;}r=U(1);while(true){s=Bp(r,U(10));if(Ck(B3(m,s),B3(n,s))>=0)break;r=s;}h=Ck(p,r);e=h>0?Bp(B3(m,
p),p):h<0?BL(Bp(B3(m,r),r),r):Bp(B3(BL(m,J8(r,U(2))),r),r);if(Ck(e,C(2808348672, 232830643))>=0)while(true){j=j+1|0;e=B3(e,U(10));if(Ck(e,C(2808348672, 232830643))<0)break;}else if(Ck(e,C(1569325056, 23283064))<0){j=j+(-1)|0;e=Bp(e,U(10));}c.cR=e;c.c8=j-330|0;}
function Eg(b,c,d){var e,f,g,h,i,j,k,l;e=B8(b,U(65535));f=B8(B0(b,16),U(65535));g=B8(B0(b,32),U(65535));h=B8(B0(b,48),U(65535));i=B8(c,U(65535));j=B8(B0(c,16),U(65535));k=B8(B0(c,32),U(65535));l=B8(B0(c,48),U(65535));return BL(BL(BL(DD(Bp(l,h),32+d|0),DD(BL(Bp(l,g),Bp(k,h)),16+d|0)),DD(BL(BL(Bp(l,f),Bp(k,g)),Bp(j,h)),d)),B0(BL(BL(BL(Bp(k,e),Bp(j,f)),Bp(i,g)),DD(BL(BL(BL(Bp(l,e),Bp(k,f)),Bp(j,g)),Bp(i,h)),16)),32-d|0));}
function K2(){V$=B3(U(-1),U(10));V_=G2([C(3251292512, 2194092222),C(1766094183, 3510547556),C(553881887, 2808438045),C(443105509, 2246750436),C(3285949193, 3594800697),C(910772436, 2875840558),C(2446604867, 2300672446),C(2196580869, 3681075914),C(2616258154, 2944860731),C(1234013064, 2355888585),C(1974420903, 3769421736),C(720543263, 3015537389),C(1435428070, 2412429911),C(578697993, 3859887858),C(2180945313, 3087910286),C(885762791, 2470328229),C(3135207384, 3952525166),C(1649172448, 3162020133),C(3037324877, 2529616106),
C(3141732885, 4047385770),C(2513386308, 3237908616),C(1151715587, 2590326893),C(983751480, 4144523029),C(1645994643, 3315618423),C(3034782633, 2652494738),C(3996658754, 4243991581),C(2338333544, 3395193265),C(1870666835, 2716154612),C(4073513845, 2172923689),C(3940641775, 3476677903),C(575533043, 2781342323),C(2178413352, 2225073858),C(2626467905, 3560118173),C(3819161242, 2848094538),C(478348616, 2278475631),C(3342338164, 3645561009),C(3532863990, 2916448807),C(1108304273, 2333159046),C(55299919, 3733054474),
C(903233395, 2986443579),C(1581580175, 2389154863),C(1671534821, 3822647781),C(478234397, 3058118225),C(382587518, 2446494580),C(612140029, 3914391328),C(2207698941, 3131513062),C(48172235, 2505210450),C(77075576, 4008336720),C(61660460, 3206669376),C(3485302205, 2565335500),C(1281516232, 4104536801),C(166219527, 3283629441),C(3568949458, 2626903552),C(2274345296, 4203045684),C(2678469696, 3362436547),C(424788838, 2689949238),C(2057817989, 2151959390),C(3292508783, 3443135024),C(3493000485, 2754508019),C(3653393847, 2203606415),
C(1550462860, 3525770265),C(1240370288, 2820616212),C(3569276608, 2256492969),C(3133862195, 3610388751),C(1648096297, 2888311001),C(459483578, 2310648801),C(3312154103, 3697038081),C(1790729823, 2957630465),C(1432583858, 2366104372),C(3151127633, 3785766995),C(2520902106, 3028613596),C(1157728226, 2422890877),C(2711358621, 3876625403),C(3887073815, 3101300322),C(1391672133, 2481040258),C(1367681954, 3969664413),C(2812132482, 3175731530),C(2249705985, 2540585224),C(1022549199, 4064936359),C(1677032818, 3251949087),
C(3918606632, 2601559269),C(3692790234, 4162494831),C(2095238728, 3329995865),C(1676190982, 2663996692),C(3540899031, 4262394707),C(1114732307, 3409915766),C(32792386, 2727932613),C(1744220827, 2182346090),C(2790753324, 3491753744),C(3091596118, 2793402995),C(2473276894, 2234722396),C(2239256113, 3575555834),C(2650398349, 2860444667),C(402331761, 2288355734),C(2361717736, 3661369174),C(2748367648, 2929095339),C(3057687578, 2343276271),C(3174313206, 3749242034),C(3398444024, 2999393627),C(1000768301, 2399514902),
C(2460222741, 3839223843),C(3686165111, 3071379074),C(3807925548, 2457103259),C(3515700499, 3931365215),C(2812560399, 3145092172),C(532061401, 2516073738),C(4287272078, 4025717980),C(3429817663, 3220574384),C(3602847589, 2576459507),C(2328582306, 4122335212),C(144878926, 3297868170),C(115903141, 2638294536),C(2762425404, 4221271257),C(491953404, 3377017006),C(3829536560, 2701613604),C(3922622707, 2161290883),C(1122235577, 3458065414),C(1756781920, 2766452331),C(546432077, 2213161865),C(874291324, 3541058984),
C(1558426518, 2832847187),C(3823721592, 2266277749),C(3540974170, 3626044399),C(3691772795, 2900835519),C(3812411695, 2320668415),C(1804891416, 3713069465),C(1443913133, 2970455572),C(3732110884, 2376364457),C(2535403578, 3802183132),C(310335944, 3041746506),C(3684242592, 2433397204),C(3317807769, 3893435527),C(936259297, 3114748422),C(3325987815, 2491798737),C(1885606668, 3986877980),C(1508485334, 3189502384),C(2065781726, 2551601907),C(4164244222, 4082563051),C(2472401918, 3266050441),C(1118928075, 2612840353),
C(931291461, 4180544565),C(745033169, 3344435652),C(3173006913, 2675548521),C(3358824142, 4280877634),C(3546052773, 3424702107),C(1118855300, 2739761686),C(36090780, 2191809349),C(1775732167, 3506894958),C(3138572652, 2805515966),C(1651864662, 2244412773),C(1783990001, 3591060437),C(4004172378, 2872848349),C(4062331362, 2298278679),C(3922749802, 3677245887),C(1420212923, 2941796710),C(1136170338, 2353437368),C(958879082, 3765499789),C(1626096725, 3012399831),C(441883920, 2409919865),C(707014273, 3855871784),
C(1424604878, 3084697427),C(3716664280, 2467757941),C(4228675929, 3948412706),C(2523947284, 3158730165),C(2019157827, 2526984132),C(4089645983, 4043174611),C(2412723327, 3234539689),C(2789172121, 2587631751),C(2744688475, 4140210802),C(477763862, 3312168642),C(2959191467, 2649734913),C(3875712888, 4239575861),C(2241576851, 3391660689),C(2652254940, 2713328551),C(1262810493, 2170662841),C(302509870, 3473060546),C(3677981733, 2778448436),C(2083391927, 2222758749),C(756446706, 3556413999),C(1464150824, 2845131199),
C(2030314118, 2276104959),C(671522212, 3641767935),C(537217769, 2913414348),C(2147761134, 2330731478),C(2577424355, 3729170365),C(2061939484, 2983336292),C(4226531965, 2386669033),C(1608490388, 3818670454),C(2145785770, 3054936363),C(3434615534, 2443949090),C(1200417559, 3910318545),C(960334047, 3128254836),C(4204241074, 2502603868),C(1572824964, 4004166190),C(1258259971, 3203332952),C(3583588354, 2562666361),C(4015754449, 4100266178),C(635623181, 3280212943),C(2226485463, 2624170354),C(985396364, 4198672567),
C(3365297469, 3358938053),C(115257597, 2687150443),C(1810192996, 2149720354),C(319328417, 3439552567),C(2832443111, 2751642053),C(3983941407, 2201313642),C(2938332415, 3522101828),C(4068652850, 2817681462),C(1536935362, 2254145170),C(2459096579, 3606632272),C(249290345, 2885305818),C(1917419194, 2308244654),C(490890333, 3693191447),C(2969692644, 2954553157),C(657767197, 2363642526),C(3629407892, 3781828041),C(2044532855, 3025462433),C(3353613202, 2420369946),C(3647794205, 3872591914),C(3777228823, 3098073531),
C(2162789599, 2478458825),C(3460463359, 3965534120),C(2768370687, 3172427296),C(1355703090, 2537941837),C(3028118404, 4060706939),C(3281488183, 3248565551),C(1766197087, 2598852441),C(1107928421, 4158163906),C(27349277, 3326531125),C(21879422, 2661224900),C(35007075, 4257959840),C(28005660, 3406367872),C(2599384905, 2725094297),C(361521006, 2180075438),C(4014407446, 3488120700),C(3211525957, 2790496560),C(2569220766, 2232397248),C(3251759766, 3571835597),C(883420894, 2857468478),C(2424723634, 2285974782),C(443583977, 3657559652),
C(2931847559, 2926047721),C(1486484588, 2340838177),C(3237368801, 3745341083),C(12914663, 2996272867),C(2587312108, 2397018293),C(3280705914, 3835229269),C(3483558190, 3068183415),C(2786846552, 2454546732),C(1022980646, 3927274772),C(3395364895, 3141819817),C(998304997, 2513455854),C(3315274914, 4021529366),C(1793226472, 3217223493),C(3152568096, 2573778794),C(2467128576, 4118046071),C(1114709402, 3294436857),C(3468747899, 2635549485),C(1255029343, 4216879177),C(3581003852, 3373503341),C(2005809622, 2698802673),
C(3322634616, 2159042138),C(162254630, 3454467422),C(2706784082, 2763573937),C(447440347, 2210859150),C(715904555, 3537374640),C(572723644, 2829899712),C(3035159293, 2263919769),C(2279274491, 3622271631),C(964426134, 2897817305),C(771540907, 2318253844),C(2952452370, 3709206150),C(2361961896, 2967364920),C(1889569516, 2373891936),C(1305324308, 3798227098),C(2762246365, 3038581678),C(3927784010, 2430865342),C(2848480580, 3889384548),C(3996771382, 3111507638),C(620436728, 2489206111),C(3569679143, 3982729777),
C(1137756396, 3186183822),C(3487185494, 2548947057),C(2143522954, 4078315292),C(4291798741, 3262652233),C(856458615, 2610121787),C(2229327243, 4176194859),C(2642455254, 3340955887),C(395977285, 2672764710),C(633563656, 4276423536),C(3942824761, 3421138828),C(577279431, 2736911063),C(2179810463, 2189528850),C(3487696741, 3503246160),C(2790157393, 2802596928),C(3950112833, 2242077542),C(2884206696, 3587324068),C(4025352275, 2869859254),C(4079275279, 2295887403),C(1372879692, 3673419846),C(239310294, 2938735877),
C(2768428613, 2350988701),C(2711498862, 3761581922),C(451212171, 3009265538),C(2078956655, 2407412430),C(3326330649, 3851859888),C(84084141, 3081487911),C(3503241150, 2465190328),C(451225085, 3944304526),C(3796953905, 3155443620),C(3037563124, 2524354896),C(3142114080, 4038967834),C(3372684723, 3231174267),C(980160860, 2584939414),C(3286244294, 4135903062),C(911008517, 3308722450),C(728806813, 2646977960),C(1166090902, 4235164736),C(73879262, 3388131789),C(918096869, 2710505431),C(4170451332, 2168404344),C(4095741754, 3469446951),
C(2417599944, 2775557561),C(1075086496, 2220446049),C(3438125312, 3552713678),C(173519872, 2842170943),C(1856802816, 2273736754),C(393904128, 3637978807),C(2892103680, 2910383045),C(2313682944, 2328306436),C(1983905792, 3725290298),C(3305111552, 2980232238),C(67108864, 2384185791),C(2684354560, 3814697265),C(2147483648, 3051757812),C(0, 2441406250),C(0, 3906250000),C(0, 3125000000),C(0, 2500000000),C(0, 4000000000),C(0, 3200000000),C(0, 2560000000),C(0, 4096000000),C(0, 3276800000),C(0, 2621440000),C(0, 4194304000),
C(0, 3355443200),C(0, 2684354560),C(0, 2147483648),C(3435973836, 3435973836),C(1889785610, 2748779069),C(2370821947, 2199023255),C(3793315115, 3518437208),C(457671715, 2814749767),C(2943117749, 2251799813),C(3849994940, 3602879701),C(2221002492, 2882303761),C(917808535, 2305843009),C(3186480574, 3689348814),C(3408177918, 2951479051),C(1867548875, 2361183241),C(1270091283, 3777893186),C(157079567, 3022314549),C(984657113, 2417851639),C(3293438299, 3868562622),C(916763721, 3094850098),C(2451397895, 2475880078),
C(3063243173, 3961408125),C(2450594538, 3169126500),C(1960475630, 2535301200),C(3136761009, 4056481920),C(2509408807, 3245185536),C(1148533586, 2596148429),C(3555640657, 4153837486),C(1985519066, 3323069989),C(2447408712, 2658455991),C(2197867021, 4253529586),C(899300158, 3402823669),C(1578433585, 2722258935),C(1262746868, 2177807148),C(1161401530, 3484491437),C(3506101601, 2787593149),C(3663874740, 2230074519),C(3285219207, 3568119231),C(1769181906, 2854495385),C(1415345525, 2283596308),C(1405559381, 3653754093),
C(2842434423, 2923003274),C(3132940998, 2338402619),C(2435725219, 3741444191),C(1089586716, 2993155353),C(2589656291, 2394524282),C(707476229, 3831238852),C(3142961361, 3064991081),C(1655375629, 2451992865),C(2648601007, 3923188584),C(2977874265, 3138550867),C(664312493, 2510840694),C(2780886908, 4017345110),C(2224709526, 3213876088),C(3497754539, 2571100870),C(1301439967, 4113761393),C(2759138892, 3291009114),C(3066304573, 2632807291),C(3188100398, 4212491666),C(1691486859, 3369993333),C(3071176406, 2695994666),
C(1597947665, 2156795733),C(1697722806, 3450873173),C(3076165163, 2760698538),C(4178919049, 2208558830),C(2391303182, 3533694129),C(2772036005, 2826955303),C(3935615722, 2261564242),C(2861011319, 3618502788),C(4006795973, 2894802230),C(3205436779, 2315841784),C(2551718468, 3705346855),C(2041374775, 2964277484),C(2492093279, 2371421987),C(551375410, 3794275180),C(441100328, 3035420144),C(1211873721, 2428336115),C(1938997954, 3885337784),C(2410191822, 3108270227),C(210166539, 2486616182),C(1195259923, 3978585891),
C(97214479, 3182868713),C(1795758501, 2546294970),C(2873213602, 4074071952),C(580583963, 3259257562),C(3041447548, 2607406049),C(2289335700, 4171849679),C(2690462019, 3337479743),C(3870356534, 2669983794),C(3615590076, 4271974071),C(2033478602, 3417579257),C(4203763259, 2734063405),C(3363010607, 2187250724),C(2803836594, 3499601159),C(3102062734, 2799680927),C(763663269, 2239744742),C(2080854690, 3583591587),C(4241664129, 2866873269),C(4252324763, 2293498615),C(2508752324, 3669597785),C(2007001859, 2935678228),
C(3323588406, 2348542582),C(1881767613, 3757668132),C(4082394468, 3006134505),C(3265915574, 2404907604),C(2648484541, 3847852167),C(400800715, 3078281734),C(1179634031, 2462625387),C(2746407909, 3940200619),C(3056119786, 3152160495),C(2444895829, 2521728396),C(2193846408, 4034765434),C(2614070585, 3227812347),C(373269550, 2582249878),C(4033205117, 4131599804),C(4085557553, 3305279843),C(691465664, 2644223875),C(1106345063, 4230758200),C(885076050, 3384606560),C(708060840, 2707685248),C(2284435591, 2166148198),
C(2796103486, 3465837117),C(518895870, 2772669694),C(1274110155, 2218135755),C(2038576249, 3549017208),C(3348847917, 2839213766),C(1820084875, 2271371013),C(2053142340, 3634193621),C(783520413, 2907354897),C(3203796708, 2325883917),C(1690100896, 3721414268),C(3070067635, 2977131414),C(3315047567, 2381705131),C(3586089190, 3810728210),C(2868871352, 3048582568),C(4013084000, 2438866054),C(3843954022, 3902185687),C(1357176299, 3121748550),C(1085741039, 2497398840),C(1737185663, 3995838144),C(2248741989, 3196670515),
C(1798993591, 2557336412),C(3737383206, 4091738259),C(3848900024, 3273390607),C(1361133101, 2618712486),C(459826043, 4189939978),C(2085847752, 3351951982),C(4245658579, 2681561585),C(2498086431, 4290498537),C(280482227, 3432398830),C(224385781, 2745919064),C(1038502084, 2196735251),C(4238583712, 3514776401),C(2531873511, 2811821121),C(1166505349, 2249456897),C(2725402018, 3599131035),C(2180321615, 2879304828),C(3462244210, 2303443862),C(2103616899, 3685510180),C(1682893519, 2948408144),C(2205308275, 2358726515),
C(3528493240, 3773962424),C(3681788051, 3019169939),C(3804423900, 2415335951),C(74124026, 3864537523),C(1777286139, 3091630018),C(3139815829, 2473304014),C(2446724950, 3957286423),C(3675366878, 3165829138),C(363313125, 2532663311),C(3158281377, 4052261297),C(808638183, 3241809038),C(2364897465, 2593447230),C(3783835944, 4149515568),C(450088378, 3319612455),C(360070702, 2655689964),C(2294100042, 4249103942),C(117293115, 3399283154),C(952827951, 2719426523),C(2480249279, 2175541218),C(3109405388, 3480865949),
C(3346517769, 2784692759),C(3536207675, 2227754207),C(2221958443, 3564406732),C(59579836, 2851525386),C(3483637705, 2281220308),C(419859574, 3649952494),C(1194881118, 2919961995),C(955904894, 2335969596),C(4106428209, 3737551353),C(708162189, 2990041083),C(2284516670, 2392032866),C(1937239754, 3827252586),C(690798344, 3061802069),C(1411632134, 2449441655),C(2258611415, 3919106648),C(3524876050, 3135285318),C(242920462, 2508228255),C(388672740, 4013165208),C(2028925110, 3210532166),C(764146629, 2568425733),C(363641147, 4109481173),
C(2008899836, 3287584938),C(3325106787, 2630067950),C(1025203564, 4208108721),C(4256136688, 3366486976),C(2545915891, 2693189581),C(1177739254, 2154551665),C(1884382806, 3447282664),C(2366499704, 2757826131),C(1034206304, 2206260905),C(1654730086, 3530017448),C(3041770987, 2824013958),C(4151403708, 2259211166),C(629291719, 3614737867),C(3080413753, 2891790293),C(4182317920, 2313432234),C(4114728295, 3701491575),C(3291782636, 2961193260),C(2633426109, 2368954608),C(3354488315, 3790327373),C(106610275, 3032261899),
C(944281679, 2425809519),C(3228837605, 3881295230),C(2583070084, 3105036184),C(2925449526, 2484028947),C(1244745405, 3974446316),C(136802865, 3179557053),C(1827429210, 2543645642),C(3782880196, 4069833027),C(1308317238, 3255866422),C(3623634168, 2604693137),C(2361840832, 4167509020),C(1889472666, 3334007216),C(652584673, 2667205773),C(185142018, 4267529237),C(2725093992, 3414023389),C(3039068653, 2731218711),C(1572261463, 2184974969),C(4233605259, 3495959950),C(3386884207, 2796767960),C(2709507366, 2237414368),
C(3476218326, 3579862989),C(3639968120, 2863890391),C(2052981037, 2291112313),C(2425776200, 3665779701),C(1081627501, 2932623761),C(6308541, 2346099009),C(1728080585, 3753758414),C(2241457927, 3003006731),C(934172882, 2402405385),C(1494676612, 3843848616),C(336747830, 3075078893),C(1987385183, 2460063114),C(602835915, 3936100983),C(2200255650, 3148880786),C(901211061, 2519104629),C(3159924616, 4030567406),C(1668946233, 3224453925),C(1335156987, 2579563140),C(2136251179, 4127301024),C(2567994402, 3301840819),
C(2913388981, 2641472655),C(366455074, 4226356249),C(1152157518, 3381084999),C(1780719474, 2704867999),C(2283569038, 2163894399),C(1076730083, 3462231039),C(1720377526, 2769784831),C(517308561, 2215827865),C(827693699, 3545324584),C(1521148418, 2836259667),C(3793899112, 2269007733),C(916277824, 3630412374),C(1592015718, 2904329899),C(2132606034, 2323463919),C(835189277, 3717542271),C(4104125258, 2974033816),C(2424306747, 2379227053),C(3019897337, 3806763285),C(2415917869, 3045410628),C(3650721214, 2436328502),
C(2405180105, 3898125604),C(2783137543, 3118500483),C(3944496953, 2494800386),C(298240911, 3991680619),C(1097586188, 3193344495),C(878068950, 2554675596),C(3981890698, 4087480953),C(608532181, 3269984763),C(2204812663, 2615987810),C(3527700261, 4185580496),C(1963166749, 3348464397),C(4147513777, 2678771517),C(3200048207, 4286034428),C(4278025484, 3428827542),C(1704433468, 2743062034),C(2222540234, 2194449627),C(120090538, 3511119404),C(955065889, 2808895523),C(2482039630, 2247116418),C(3112269949, 3595386269),
C(3348809418, 2876309015),C(2679047534, 2301047212),C(850502218, 3681675540),C(680401775, 2945340432),C(3121301797, 2356272345),C(699115580, 3770035753),C(2277279382, 3016028602),C(103836587, 2412822882),C(1025131999, 3860516611),C(4256079436, 3088413288),C(827883168, 2470730631),C(3901593088, 3953169009)]);Wa=T7([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Gt(){var a=this;E.call(a);a.cR=BN;a.c8=0;a.ep=0;}
var Ek=H(BX);
var Wb=null;function B3(b,c){return Long_udiv(b, c);}
function Jr(b,c){return Long_urem(b, c);}
function Ck(b,c){return Long_ucompare(b, c);}
function KZ(){Wb=F($rt_longcls());}
var HA=H();
var F2=H(DF);
function Qi(a,b,c,d){var e,f,g;e=0;f=d.j;a:{while(true){if(b>f){b=e;break a;}g=C3(d,a.v);Cn(d,a.v,b);e=a.W.a(b,c,d);if(e>=0)break;Cn(d,a.v,g);b=b+1|0;}}return b;}
function Sq(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=C3(e,a.v);Cn(e,a.v,c);f=a.W.a(c,d,e);if(f>=0)break;Cn(e,a.v,g);c=c+(-1)|0;}}return c;}
function OF(a){return null;}
var E8=H(0);
function FA(){var a=this;E.call(a);a.gS=null;a.e5=null;a.cJ=null;a.S=null;a.cD=0;a.dt=0;}
function FJ(a,b){var c,d,e;c=O(a.cJ);if(b>=0&&b<=c){IJ(a.S,null,(-1),(-1));d=a.S;d.cA=1;d.bo=b;c=d.b$;if(c<0)c=b;d.b$=c;b=a.e5.R(b,a.cJ,d);if(b==(-1))a.S.Z=1;if(b>=0){d=a.S;if(d.cM){e=d.bf.data;if(e[0]==(-1)){c=d.bo;e[0]=c;e[1]=c;}d.b$=Eq(d);return 1;}}a.S.bo=(-1);return 0;}d=new BA;Bc(d,Gg(b));L(d);}
function Ll(a){return Hf(a.S,0);}
function KF(a){return IU(a.S,0);}
function Js(a){return a.S.ck;}
var BC=H(Bg);
function G7(){BC.call(this);this.hS=null;}
function Sz(a){var b=new G7();LH(b,a);return b;}
function LH(a,b){var c;c=new T;W(c);N(N(c,B(327)),b);Bc(a,S(c));a.hS=b;}
function Fx(){BC.call(this);this.gM=null;}
function DH(){E.call(this);this.hK=0;}
var Wc=null;var Wd=null;var We=null;function NY(a){var b=new DH();JQ(b,a);return b;}
function JQ(a,b){a.hK=b;}
function JJ(){Wc=NY(1);Wd=NY(0);We=F($rt_booleancls());}
function Lv(){BC.call(this);this.hQ=0;}
function Rb(a){var b=new Lv();M_(b,a);return b;}
function M_(a,b){var c;c=new T;W(c);Bh(N(c,B(328)),b);Bc(a,S(c));a.hQ=b;}
var Dj=H(BX);
var Wf=null;function Jn(){Wf=F($rt_bytecls());}
var DL=H(BX);
var Wg=null;function JN(){Wg=F($rt_shortcls());}
function Ic(){BC.call(this);this.f9=0;}
function Jc(){var a=this;BC.call(a);a.fY=0;a.gY=null;}
function Le(a,b){var c=new Jc();Qw(c,a,b);return c;}
function Qw(a,b,c){var d,e;d=new T;W(d);e=N(N(N(d,B(329)),c),B(330));Bv(e,b);N(e,B(331));Bc(a,S(d));a.fY=b;a.gY=c;}
function JH(){var a=this;E.call(a);a.gr=null;a.f8=0;a.eo=0;a.ho=0;a.go=0;a.gd=0;a.gz=0;a.hD=0;a.ge=null;a.gP=null;a.gO=0;a.h3=0;a.f$=null;}
function Nt(a){var b=new JH();Rk(b,a);return b;}
function Rk(a,b){var c,d,e;a.gr=b;c=b.b3;d=b.cb;if(VT===null)VT=O0();e=VT;b=J0(c,d);e=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)]:e.hasOwnProperty($rt_ustr(c))?e[$rt_ustr(c)]:e.root;a.f8=48;a.eo=e.groupingSeparator&65535;a.ho=e.decimalSeparator&65535;a.go=e.perMille&65535;a.gd=e.percent&65535;a.gz=35;a.hD=59;a.ge=(e.naN!==null?$rt_str(e.naN):null);a.gP=(e.infinity!==null?$rt_str(e.infinity):null);a.gO=e.minusSign&65535;a.h3=e.decimalSeparator&65535;a.f$=(e.exponentSeparator!==null?$rt_str(e.exponentSeparator)
:null);}
function Kj(a){var b,c,d,$$je;a:{try{b=LE(a);}catch($$e){$$je=Da($$e);if($$je instanceof E3){c=$$je;break a;}else{throw $$e;}}return b;}d=new Il;d.c$=1;d.dW=1;d.df=B(332);d.fE=c;L(d);}
var Ey=H();
function EC(){var a=this;Ey.call(a);a.eV=0;a.cr=0;a.di=0;a.cF=0;a.eH=0;a.g2=null;a.fR=null;}
function Ei(){var a=this;EC.call(a);a.gZ=null;a.fx=null;a.cH=null;a.fe=null;a.eM=null;a.fk=0;a.eG=0;a.ha=0;a.ga=0;a.gq=null;}
var Wh=null;var Wi=null;function LK(a,b){var c,d,e,f,g,h;c=new FU;c.cl=0;c.dU=0;c.db=0;c.dO=0;c.cn=0;c.cx=1;c.x=b;c.g=0;c.eI=Ef(c,0,0);if(c.g==O(b)){c=new Bg;d=new T;W(d);N(N(d,B(333)),b);Bc(c,S(d));L(c);}Ie(c,1);c.dm=null;c.dZ=null;if(c.g<O(b)&&I(b,c.g)!=59)c.dn=Ef(c,1,0);if(c.g<O(b)){e=c.g;c.g=e+1|0;if(I(b,e)!=59){d=new Bg;f=c.g;c=new T;W(c);N(N(Bh(N(c,B(334)),f),B(335)),b);Bc(d,S(c));L(d);}c.dm=Ef(c,0,1);Ie(c,0);c.dZ=Ef(c,1,1);}g=c.eI;a.fx=g;a.fe=c.dn;h=c.dm;if(h!==null)a.cH=h;else{e=g.data.length;h=BJ(B4,
e+1|0);a.cH=h;EE(g,0,h,1,e);a.cH.data[0]=new E9;}g=c.dZ;if(g===null)g=c.dn;a.eM=g;f=c.cl;a.eG=f;a.eV=f<=0?0:1;e=!c.cn?c.dc:B7(1,c.dc);if(e<0)e=0;a.di=e;if(a.cr<e)a.cr=e;f=c.ei;if(f<0)f=0;a.cr=f;if(f<e)a.di=f;f=c.dU;if(f<0)f=0;a.eH=f;if(a.cF<f)a.cF=f;e=c.db;if(e<0)e=0;a.cF=e;if(e<f)a.eH=e;a.ha=c.cn;a.ga=c.dO;a.fk=c.cx;a.gq=b;}
function JD(){Wh=G2([U(1),U(10),U(100),U(1000),U(10000),U(100000),U(1000000),U(10000000),U(100000000),U(1000000000),C(1410065408, 2),C(1215752192, 23),C(3567587328, 232),C(1316134912, 2328),C(276447232, 23283),C(2764472320, 232830),C(1874919424, 2328306),C(1569325056, 23283064),C(2808348672, 232830643)]);Wi=C1([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);}
var ID=H(0);
function Gp(){var a=this;BC.call(a);a.g$=null;a.gy=0;}
function JV(){BC.call(this);this.hm=null;}
function Mn(a){var b=new JV();Mx(b,a);return b;}
function Mx(a,b){var c;c=new T;W(c);N(N(c,B(336)),b);Bc(a,S(c));a.hm=b;}
function Iu(){BC.call(this);this.gh=null;}
var B4=H(0);
function I7(){E.call(this);this.f7=null;}
function Eh(a){var b=new I7();Pc(b,a);return b;}
function Pc(a,b){a.f7=b;}
function Fp(){var a=this;E.call(a);a.gt=null;a.g6=0;}
function Cd(){Fp.call(this);this.hd=0;}
var Wj=null;var Wk=null;var Wl=null;var Wm=null;var Wn=null;var Wo=null;var V5=null;var Wp=null;var Wq=null;function Si(){Si=Bt(Cd);QF();}
function Df(a,b,c){var d=new Cd();Lk(d,a,b,c);return d;}
function Lk(a,b,c,d){Si();a.gt=b;a.g6=c;a.hd=d;}
function QF(){var b;Wj=Df(B(337),0,0);Wk=Df(B(338),1,1);Wl=Df(B(339),2,2);Wm=Df(B(340),3,3);Wn=Df(B(341),4,4);Wo=Df(B(342),5,5);V5=Df(B(343),6,6);b=Df(B(344),7,7);Wp=b;Wq=G(Cd,[Wj,Wk,Wl,Wm,Wn,Wo,V5,b]);}
function EG(){E.call(this);this.gK=null;}
var Wr=null;function R4(b){var c,d,e,f,g,h,i,j,k;if(b===null){b=new CG;Z(b);L(b);}c=b.b3;d=b.cb;if(BP(d)){if(VR===null)VR=Pg();b=VR;if(b.hasOwnProperty($rt_ustr(c)))c=(b[$rt_ustr(c)].value!==null?$rt_str(b[$rt_ustr(c)].value):null);e=Dl(c,95,O(c)-1|0);d=e<=0?B(93):DB(c,e+1|0);}if(Ws===null)Ws=Sc();c=Ws;if(!c.hasOwnProperty($rt_ustr(d)))return null;b=(c[$rt_ustr(d)].value!==null?$rt_str(c[$rt_ustr(d)].value):null);if(b===null){b=new CG;Z(b);L(b);}if(Wr===null){c=new IH;f=Ld(16);c.b1=0;c.bi=BJ(DP,f);c.fI=0.75;G8(c);Wr
=c;if(Wt===null)Wt=Rl();g=Wt;f=0;while(f<g.length){d=g[f];h=Wr;i=(d.code!==null?$rt_str(d.code):null);c=new EG;c.gK=d;if(i===null){d=LG(h);if(d===null){h.cK=h.cK+1|0;d=G0(h,null,0,0);e=h.b1+1|0;h.b1=e;if(e>h.dN)Hj(h);}}else{j=Gi(i);k=j&(h.bi.data.length-1|0);d=HS(h,i,k,j);if(d===null){h.cK=h.cK+1|0;d=G0(h,i,k,j);e=h.b1+1|0;h.b1=e;if(e>h.dN)Hj(h);}}d.dy=c;f=f+1|0;}}c=Wr;e=Gi(b);c=HS(c,b,e&(c.bi.data.length-1|0),e);c=c===null?null:c.dy;if(c!==null)return c;c=new Bg;d=new T;W(d);N(N(d,B(345)),b);Bc(c,S(d));L(c);}
var Ff=H();
var Wt=null;var Ws=null;function Rl(){return [{"code":"AFN","fractionDigits":2,"numericCode":971},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ALL","fractionDigits":2,"numericCode":8},{"code":"DZD","fractionDigits":2,"numericCode":12},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AOA","fractionDigits":2,"numericCode":973},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":null,"fractionDigits":0,"numericCode":0},{"code"
:"XCD","fractionDigits":2,"numericCode":951},{"code":"ARS","fractionDigits":2,"numericCode":32},{"code":"AMD","fractionDigits":2,"numericCode":51},{"code":"AWG","fractionDigits":2,"numericCode":533},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AZN","fractionDigits":2,"numericCode":944},{"code":"BSD","fractionDigits":2,"numericCode":44},{"code":"BHD","fractionDigits":3,"numericCode":48},{"code":"BDT","fractionDigits":2,"numericCode":50},{"code"
:"BBD","fractionDigits":2,"numericCode":52},{"code":"BYR","fractionDigits":0,"numericCode":974},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"BZD","fractionDigits":2,"numericCode":84},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BMD","fractionDigits":2,"numericCode":60},{"code":"BTN","fractionDigits":2,"numericCode":64},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"BOB","fractionDigits":2,"numericCode":68},{"code":"BOV","fractionDigits":2,"numericCode":984},{"code"
:"USD","fractionDigits":2,"numericCode":840},{"code":"BAM","fractionDigits":2,"numericCode":977},{"code":"BWP","fractionDigits":2,"numericCode":72},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"BRL","fractionDigits":2,"numericCode":986},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"BND","fractionDigits":2,"numericCode":96},{"code":"BGN","fractionDigits":2,"numericCode":975},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BIF","fractionDigits":0,"numericCode":108},{"code"
:"KHR","fractionDigits":2,"numericCode":116},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CAD","fractionDigits":2,"numericCode":124},{"code":"CVE","fractionDigits":2,"numericCode":132},{"code":"KYD","fractionDigits":2,"numericCode":136},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CLF","fractionDigits":4,"numericCode":990},{"code":"CLP","fractionDigits":0,"numericCode":152},{"code":"CNY","fractionDigits":2,"numericCode":156}
,{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"COP","fractionDigits":2,"numericCode":170},{"code":"COU","fractionDigits":2,"numericCode":970},{"code":"KMF","fractionDigits":0,"numericCode":174},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CDF","fractionDigits":2,"numericCode":976},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"CRC","fractionDigits":2,"numericCode":188},{"code":"XOF","fractionDigits":0,"numericCode"
:952},{"code":"HRK","fractionDigits":2,"numericCode":191},{"code":"CUC","fractionDigits":2,"numericCode":931},{"code":"CUP","fractionDigits":2,"numericCode":192},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"CZK","fractionDigits":2,"numericCode":203},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"DJF","fractionDigits":0,"numericCode":262},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"DOP","fractionDigits":2,"numericCode"
:214},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EGP","fractionDigits":2,"numericCode":818},{"code":"SVC","fractionDigits":2,"numericCode":222},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"ERN","fractionDigits":2,"numericCode":232},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ETB","fractionDigits":2,"numericCode":230},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"FKP","fractionDigits":2,"numericCode"
:238},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"FJD","fractionDigits":2,"numericCode":242},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"GMD","fractionDigits":2,"numericCode":270},{"code":"GEL","fractionDigits":2,"numericCode"
:981},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GHS","fractionDigits":2,"numericCode":936},{"code":"GIP","fractionDigits":2,"numericCode":292},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"GTQ","fractionDigits":2,"numericCode":320},{"code":"GBP","fractionDigits":2,"numericCode"
:826},{"code":"GNF","fractionDigits":0,"numericCode":324},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"GYD","fractionDigits":2,"numericCode":328},{"code":"HTG","fractionDigits":2,"numericCode":332},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"HNL","fractionDigits":2,"numericCode":340},{"code":"HKD","fractionDigits":2,"numericCode":344},{"code":"HUF","fractionDigits":2,"numericCode"
:348},{"code":"ISK","fractionDigits":0,"numericCode":352},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"IDR","fractionDigits":2,"numericCode":360},{"code":"XDR","fractionDigits":-1,"numericCode":960},{"code":"IRR","fractionDigits":2,"numericCode":364},{"code":"IQD","fractionDigits":3,"numericCode":368},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"ILS","fractionDigits":2,"numericCode":376},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"JMD","fractionDigits":2,"numericCode":388},{"code":"JPY","fractionDigits":0,"numericCode":392},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"JOD","fractionDigits":3,"numericCode":400},{"code":"KZT","fractionDigits":2,"numericCode":398},{"code":"KES","fractionDigits":2,"numericCode":404},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"KPW","fractionDigits":2,"numericCode":408},{"code":"KRW","fractionDigits":0,"numericCode":410},{"code":"KWD","fractionDigits":3,"numericCode"
:414},{"code":"KGS","fractionDigits":2,"numericCode":417},{"code":"LAK","fractionDigits":2,"numericCode":418},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LBP","fractionDigits":2,"numericCode":422},{"code":"LSL","fractionDigits":2,"numericCode":426},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"LRD","fractionDigits":2,"numericCode":430},{"code":"LYD","fractionDigits":3,"numericCode":434},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MOP","fractionDigits":2,"numericCode":446},{"code":"MKD","fractionDigits":2,"numericCode":807},{"code":"MGA","fractionDigits":2,"numericCode":969},{"code":"MWK","fractionDigits":2,"numericCode":454},{"code":"MYR","fractionDigits":2,"numericCode":458},{"code":"MVR","fractionDigits":2,"numericCode":462},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MRO","fractionDigits":2,"numericCode":478},{"code":"MUR","fractionDigits":2,"numericCode":480},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XUA","fractionDigits":-1,"numericCode":965},{"code":"MXN","fractionDigits":2,"numericCode":484},{"code":"MXV","fractionDigits":2,"numericCode":979},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"MDL","fractionDigits":2,"numericCode":498},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"MNT","fractionDigits":2,"numericCode":496},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"MZN","fractionDigits":2,"numericCode":943},{"code":"MMK","fractionDigits":2,"numericCode":104},{"code":"NAD","fractionDigits":2,"numericCode":516},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"NPR","fractionDigits":2,"numericCode"
:524},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"NIO","fractionDigits":2,"numericCode":558},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NGN","fractionDigits":2,"numericCode":566},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"NOK","fractionDigits":2,"numericCode"
:578},{"code":"OMR","fractionDigits":3,"numericCode":512},{"code":"PKR","fractionDigits":2,"numericCode":586},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"PAB","fractionDigits":2,"numericCode":590},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"PGK","fractionDigits":2,"numericCode":598},{"code":"PYG","fractionDigits":0,"numericCode":600},{"code":"PEN","fractionDigits":2,"numericCode":604},{"code":"PHP","fractionDigits":2,"numericCode"
:608},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"PLN","fractionDigits":2,"numericCode":985},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"QAR","fractionDigits":2,"numericCode":634},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"RON","fractionDigits":2,"numericCode":946},{"code":"RUB","fractionDigits":2,"numericCode":643},{"code":"RWF","fractionDigits":0,"numericCode":646},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"SHP","fractionDigits":2,"numericCode":654},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"WST","fractionDigits":2,"numericCode":882},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"STD","fractionDigits":2,"numericCode":678},{"code":"SAR","fractionDigits":2,"numericCode"
:682},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"RSD","fractionDigits":2,"numericCode":941},{"code":"SCR","fractionDigits":2,"numericCode":690},{"code":"SLL","fractionDigits":2,"numericCode":694},{"code":"SGD","fractionDigits":2,"numericCode":702},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"XSU","fractionDigits":-1,"numericCode":994},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"SBD","fractionDigits":2,"numericCode"
:90},{"code":"SOS","fractionDigits":2,"numericCode":706},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"SSP","fractionDigits":2,"numericCode":728},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LKR","fractionDigits":2,"numericCode":144},{"code":"SDG","fractionDigits":2,"numericCode":938},{"code":"SRD","fractionDigits":2,"numericCode":968},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"SZL","fractionDigits":2,"numericCode"
:748},{"code":"SEK","fractionDigits":2,"numericCode":752},{"code":"CHE","fractionDigits":2,"numericCode":947},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"CHW","fractionDigits":2,"numericCode":948},{"code":"SYP","fractionDigits":2,"numericCode":760},{"code":"TWD","fractionDigits":2,"numericCode":901},{"code":"TJS","fractionDigits":2,"numericCode":972},{"code":"TZS","fractionDigits":2,"numericCode":834},{"code":"THB","fractionDigits":2,"numericCode":764},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"TOP","fractionDigits":2,"numericCode":776},{"code":"TTD","fractionDigits":2,"numericCode":780},{"code":"TND","fractionDigits":3,"numericCode":788},{"code":"TRY","fractionDigits":2,"numericCode":949},{"code":"TMT","fractionDigits":2,"numericCode":934},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"UGX","fractionDigits":0,"numericCode"
:800},{"code":"UAH","fractionDigits":2,"numericCode":980},{"code":"AED","fractionDigits":2,"numericCode":784},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USN","fractionDigits":2,"numericCode":997},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"UYI","fractionDigits":0,"numericCode":940},{"code":"UYU","fractionDigits":2,"numericCode":858},{"code":"UZS","fractionDigits":2,"numericCode":860},{"code":"VUV","fractionDigits":0,"numericCode"
:548},{"code":"VEF","fractionDigits":2,"numericCode":937},{"code":"VND","fractionDigits":0,"numericCode":704},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"YER","fractionDigits":2,"numericCode":886},{"code":"ZMW","fractionDigits":2,"numericCode":967},{"code":"ZWL","fractionDigits":2,"numericCode":932},{"code":"XBA","fractionDigits":-1,"numericCode"
:955},{"code":"XBB","fractionDigits":-1,"numericCode":956},{"code":"XBC","fractionDigits":-1,"numericCode":957},{"code":"XBD","fractionDigits":-1,"numericCode":958},{"code":"XTS","fractionDigits":-1,"numericCode":963},{"code":"XXX","fractionDigits":-1,"numericCode":999},{"code":"XAU","fractionDigits":-1,"numericCode":959},{"code":"XPD","fractionDigits":-1,"numericCode":964},{"code":"XPT","fractionDigits":-1,"numericCode":962},{"code":"XAG","fractionDigits":-1,"numericCode":961}];}
function Sc(){return {"":{"value":"CYP"},"PR":{"value":"USD"},"PT":{"value":"EUR"},"PW":{"value":"USD"},"PY":{"value":"PYG"},"QA":{"value":"QAR"},"AC":{"value":"SHP"},"AD":{"value":"EUR"},"AE":{"value":"AED"},"AF":{"value":"AFN"},"AG":{"value":"XCD"},"AI":{"value":"XCD"},"AL":{"value":"ALL"},"AM":{"value":"AMD"},"AN":{"value":"ANG"},"AO":{"value":"AOA"},"242":{"value":"Brazzaville"},"AQ":{"value":""},"AR":{"value":"ARS"},"243":{"value":"Kinshasa"},"AS":{"value":"USD"},"AT":{"value":"EUR"},"RE":{"value":"EUR"}
,"AU":{"value":""},"AW":{"value":"AWG"},"AX":{"value":"EUR"},"AZ":{"value":"AMD"},"RO":{"value":"RON"},"BA":{"value":"BAM"},"BB":{"value":"BBD"},"RS":{"value":"RSD"},"BD":{"value":"BDT"},"BE":{"value":"EUR"},"RU":{"value":"RUB"},"BF":{"value":"XOF"},"BG":{"value":"BGN"},"RW":{"value":"RWF"},"27":{"value":""},"BH":{"value":"BHD"},"BI":{"value":"BIF"},"BJ":{"value":"XOF"},"BM":{"value":"BMD"},"BN":{"value":"BND"},"BO":{"value":"BOB"},"SA":{"value":"SAR"},"SB":{"value":"SBD"},"BR":{"value":"BRL"},"SC":{"value"
:"SCR"},"SD":{"value":"SDD"},"BT":{"value":"BTN"},"SE":{"value":"SEK"},"SG":{"value":"SGD"},"BV":{"value":""},"BW":{"value":"BWP"},"SH":{"value":"SHP"},"SI":{"value":"EUR"},"BY":{"value":"BYR"},"SJ":{"value":"NOK"},"BZ":{"value":"BZD"},"SK":{"value":"SKK"},"SL":{"value":"SLL"},"SM":{"value":"EUR"},"SN":{"value":"XOF"},"SO":{"value":""},"CA":{"value":"CAD"},"SR":{"value":"SRD"},"CC":{"value":"AUD"},"ST":{"value":"STD"},"CF":{"value":"XAF"},"SV":{"value":"USD"},"CH":{"value":"CHF"},"CI":{"value":"XOF"},"SY":{"value"
:"SYP"},"SZ":{"value":"SZL"},"CK":{"value":"NZD"},"CL":{"value":"CLP"},"CM":{"value":"XAF"},"CO":{"value":"COP"},"TA":{"value":"SHP"},"CR":{"value":"CRC"},"TC":{"value":"USD"},"TD":{"value":"XAF"},"CU":{"value":"CUP"},"TF":{"value":""},"CV":{"value":"CVE"},"TG":{"value":"XOF"},"TH":{"value":"THB"},"CX":{"value":"AUD"},"CY":{"value":"TRY"},"TJ":{"value":"TJS"},"CZ":{"value":"CZK"},"TK":{"value":"NZD"},"TL":{"value":"USD"},"TM":{"value":"TMM"},"TN":{"value":"TND"},"TO":{"value":"TOP"},"TR":{"value":"TRY"},"TT":
{"value":"TTD"},"DE":{"value":"EUR"},"TV":{"value":"AUD"},"DJ":{"value":"DJF"},"TZ":{"value":"TZS"},"DK":{"value":"DKK"},"DM":{"value":"XCD"},"DO":{"value":"DOP"},"UA":{"value":"UAH"},"UG":{"value":"UGX"},"DZ":{"value":"DZD"},"UM":{"value":""},"EC":{"value":"USD"},"US":{"value":"USD"},"EE":{"value":"EEK"},"EG":{"value":"EGP"},"UY":{"value":"UYU"},"UZ":{"value":"UZS"},"VA":{"value":"EUR"},"ER":{"value":"ERN"},"VC":{"value":"XCD"},"ES":{"value":"EUR"},"ET":{"value":"ETB"},"VE":{"value":"VEB"},"VG":{"value":"USD"}
,"VI":{"value":"USD"},"VN":{"value":"VND"},"VU":{"value":"VUV"},"FI":{"value":"EUR"},"FJ":{"value":"FJD"},"FK":{"value":"FKP"},"FM":{"value":"USD"},"FO":{"value":"DKK"},"FR":{"value":"EUR"},"WF":{"value":"XPF"},"850":{"value":"Pyongyang"},"GA":{"value":"XAF"},"GB":{"value":"GBP"},"WS":{"value":"WST"},"GD":{"value":"XCD"},"GE":{"value":"RUB and GEL"},"GF":{"value":"EUR"},"GG":{"value":"GGP"},"GH":{"value":"GHC"},"GI":{"value":"GIP"},"GL":{"value":"DKK"},"GN":{"value":"GNF"},"GP":{"value":"EUR"},"GQ":{"value"
:"XAF"},"GR":{"value":"EUR"},"GS":{"value":""},"GT":{"value":"GTQ"},"GU":{"value":"USD"},"GW":{"value":"XOF"},"GY":{"value":"GYD"},"-241":{"value":"Nassau"},"82":{"value":"Seoul"},"86":{"value":"Beijing"},"HK":{"value":"HKD"},"HM":{"value":""},"HN":{"value":"HNL"},"HR":{"value":"HRK"},"HT":{"value":"HTG"},"YE":{"value":"YER"},"HU":{"value":"HUF"},"ID":{"value":"IDR"},"YT":{"value":"EUR"},"IE":{"value":"EUR"},"IL":{"value":"ILS"},"IM":{"value":"IMP"},"IN":{"value":"INR"},"IO":{"value":""},"IQ":{"value":"IQD"}
,"IR":{"value":"IRR"},"IS":{"value":"ISK"},"IT":{"value":"EUR"},"ZM":{"value":"ZMK"},"886":{"value":"Taipei"},"JE":{"value":"JEP"},"ZW":{"value":"ZWD"},"JM":{"value":"JMD"},"JO":{"value":"JOD"},"JP":{"value":"JPY"},"KE":{"value":"KES"},"KG":{"value":"KGS"},"KH":{"value":"KHR"},"KI":{"value":"AUD"},"KM":{"value":"KMF"},"KN":{"value":"XCD"},"KW":{"value":"KWD"},"KY":{"value":"KYD"},"KZ":{"value":"KZT"},"LA":{"value":"LAK"},"LB":{"value":"LBP"},"LC":{"value":"XCD"},"LI":{"value":"CHF"},"LK":{"value":"LKR"},"LR":
{"value":"LRD"},"LS":{"value":"LSL"},"LT":{"value":"LTL"},"LU":{"value":"EUR"},"LV":{"value":"LVL"},"LY":{"value":"LYD"},"MA":{"value":"MAD"},"MC":{"value":"EUR"},"MD":{"value":""},"ME":{"value":"EUR"},"MG":{"value":"MGA"},"MH":{"value":"USD"},"MK":{"value":"MKD"},"ML":{"value":"XOF"},"MM":{"value":"MMK"},"MN":{"value":"MNT"},"MO":{"value":"MOP"},"MP":{"value":"USD"},"MQ":{"value":"EUR"},"MR":{"value":"MRO"},"MS":{"value":"XCD"},"MT":{"value":"MTL"},"MU":{"value":"MUR"},"MV":{"value":"MVR"},"MW":{"value":"MWK"}
,"MX":{"value":"MXN"},"MY":{"value":"MYR"},"MZ":{"value":"MZM"},"NA":{"value":"NAD"},"NC":{"value":"XPF"},"NE":{"value":"XOF"},"NF":{"value":"AUD"},"NG":{"value":"NGN"},"NI":{"value":"NIO"},"NL":{"value":"EUR"},"NO":{"value":"NOK"},"NP":{"value":"NPR"},"NR":{"value":"AUD"},"NU":{"value":"NZD"},"NZ":{"value":"NZD"},"OM":{"value":"OMR"},"220":{"value":"Banjul"},"PA":{"value":"PAB"},"PE":{"value":"PEN"},"PF":{"value":""},"PG":{"value":"PGK"},"PH":{"value":"PHP"},"PK":{"value":"PKR"},"PL":{"value":"PLN"},"PM":{"value"
:"EUR"},"PN":{"value":"NZD"}};}
var FS=H(0);
var EV=H();
function IH(){var a=this;EV.call(a);a.b1=0;a.bi=null;a.cK=0;a.fI=0.0;a.dN=0;}
function Ld(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function G8(a){a.dN=a.bi.data.length*a.fI|0;}
function HS(a,b,c,d){var e,f;e=a.bi.data[c];while(e!==null){if(e.cX==d){f=e.dg;if(b!==f&&!By(b,f)?0:1)break;}e=e.b7;}return e;}
function LG(a){var b;b=a.bi.data[0];while(b!==null&&b.dg!==null){b=b.b7;}return b;}
function G0(a,b,c,d){var e,f,g;e=new DP;f=null;e.dg=b;e.dy=f;e.cX=d;g=a.bi.data;e.b7=g[c];g[c]=e;return e;}
function Hj(a){var b,c,d,e,f,g,h,i;b=a.bi.data.length;b=Ld(!b?1:b<<1);c=BJ(DP,b);d=c.data;e=0;f=b-1|0;while(true){g=a.bi.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.cX&f;i=h.b7;h.b7=d[b];d[b]=h;h=i;}e=e+1|0;}a.bi=c;G8(a);}
var Fz=H(0);
function Fl(){var a=this;E.call(a);a.dg=null;a.dy=null;}
function DP(){var a=this;Fl.call(a);a.cX=0;a.b7=null;}
function FY(){P.call(this);this.h0=null;}
function Q3(a,b){return BB(b)!=2?0:1;}
function FL(){P.call(this);this.f1=null;}
function Nq(a,b){return BB(b)!=1?0:1;}
function IT(){P.call(this);this.hy=null;}
function M2(a,b){return Ij(b);}
function IS(){P.call(this);this.g9=null;}
function Qd(a,b){return 0;}
function Ia(){P.call(this);this.hi=null;}
function RE(a,b){return !BB(b)?0:1;}
function Hb(){P.call(this);this.gl=null;}
function Q6(a,b){return BB(b)!=9?0:1;}
function Gu(){P.call(this);this.hM=null;}
function Np(a,b){return DA(b);}
function Ib(){P.call(this);this.h2=null;}
function O$(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function FG(){P.call(this);this.fT=null;}
function R9(a,b){a:{b:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=DA(b);}return b;}
function FK(){P.call(this);this.gs=null;}
function Pm(a,b){a:{b:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=DA(b);}return b;}
function Gm(){P.call(this);this.he=null;}
function Rg(a,b){a:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ht(){P.call(this);this.hz=null;}
function Mf(a,b){return EH(b);}
function Hw(){P.call(this);this.hA=null;}
function Ot(a,b){return Hx(b);}
function Gj(){P.call(this);this.gA=null;}
function QS(a,b){return BB(b)!=3?0:1;}
function FB(){P.call(this);this.f0=null;}
function RK(a,b){a:{b:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=DA(b);}return b;}
function FV(){P.call(this);this.hX=null;}
function O8(a,b){a:{b:{switch(BB(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=DA(b);}return b;}
function Fk(){P.call(this);this.cY=0;}
function TZ(a){var b=new Fk();JA(b,a);return b;}
function JA(a,b){Bb(a);a.cY=b;}
function Nr(a,b){return a.A^(a.cY!=BB(b&65535)?0:1);}
var IO=H(Fk);
function PZ(a,b){return a.A^(!(a.cY>>BB(b&65535)&1)?0:1);}
var E3=H(Ct);
var Il=H(DC);
function FU(){var a=this;E.call(a);a.eI=null;a.dn=null;a.dm=null;a.dZ=null;a.cl=0;a.dc=0;a.ei=0;a.dU=0;a.db=0;a.dO=0;a.cn=0;a.x=null;a.g=0;a.cx=0;}
function Ef(a,b,c){var d,e,f,g,h,i;d=Go();e=new T;W(e);a:{b:{c:while(true){if(a.g>=O(a.x))break a;d:{f=I(a.x,a.g);switch(f){case 35:case 48:if(!b)break a;d=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(346)),b),B(335)),g);Bc(d,S(h));L(d);case 37:if(e.k>0){BK(d,Eh(S(e)));e.k=0;}BK(d,new IA);a.g=a.g+1|0;a.cx=100;break d;case 39:f=a.g+1|0;a.g=f;i=CK(a.x,39,f);if(i<0){d=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(347)),b),B(348)),g);Bc(d,S(h));L(d);}f=a.g;if(i!=f)Y(e,BM(a.x,f,i));else Bv(e,39);a.g=i+1|0;break d;case 45:if
(e.k>0){BK(d,Eh(S(e)));e.k=0;}BK(d,new E9);a.g=a.g+1|0;break d;case 46:case 69:break c;case 59:break b;case 164:if(e.k>0){BK(d,Eh(S(e)));e.k=0;}BK(d,new Ig);a.g=a.g+1|0;break d;case 8240:if(e.k>0){BK(d,Eh(S(e)));e.k=0;}BK(d,new F_);a.g=a.g+1|0;a.cx=1000;break d;default:}Bv(e,f);a.g=a.g+1|0;}}d=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(346)),b),B(335)),g);Bc(d,S(h));L(d);}if(c){d=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(346)),b),B(335)),g);Bc(d,S(h));L(d);}}if(e.k>0)BK(d,Eh(S(e)));return HI(d,BJ(B4,d.H));}
function Ie(a,b){var c,d,e,f,g,h;KC(a,b);if(a.g<O(a.x)&&I(a.x,a.g)==46){a.g=a.g+1|0;c=0;d=0;e=0;a:{b:while(true){if(a.g>=O(a.x))break a;c:{switch(I(a.x,a.g)){case 35:break;case 44:f=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(349)),b),B(335)),g);Bc(f,S(h));L(f);case 46:f=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(350)),b),B(335)),g);Bc(f,S(h));L(f);case 48:if(c)break b;d=d+1|0;e=e+1|0;break c;default:break a;}d=d+1|0;c=1;}a.g=a.g+1|0;}f=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(351)),b),B(335)),g);Bc(f,
S(h));L(f);}if(b){a.db=d;a.dU=e;a.cn=d?0:1;}}if(a.g<O(a.x)&&I(a.x,a.g)==69){a.g=a.g+1|0;c=0;d:{e:while(true){if(a.g>=O(a.x))break d;switch(I(a.x,a.g)){case 35:case 44:case 46:case 69:break e;case 48:break;default:break d;}c=c+1|0;a.g=a.g+1|0;}f=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(352)),b),B(335)),g);Bc(f,S(h));L(f);}if(!c){f=new Bg;b=a.g;g=a.x;h=new T;W(h);N(N(Bh(N(h,B(353)),b),B(335)),g);Bc(f,S(h));L(f);}if(b)a.dO=c;}}
function KC(a,b){var c,d,e,f,g,h,i,j,k;c=a.g;d=1;e=0;f=0;g=c;a:{b:while(true){if(a.g>=O(a.x))break a;c:{d:{switch(I(a.x,a.g)){case 35:if(!d){h=new Bg;b=a.g;i=a.x;j=new T;W(j);N(N(Bh(N(j,B(354)),b),B(335)),i);Bc(h,S(j));L(h);}e=e+1|0;break c;case 44:break d;case 48:break;default:break a;}d=0;e=e+1|0;f=f+1|0;break c;}k=a.g;if(g==k)break b;if(b)a.cl=k-g|0;g=k+1|0;}a.g=a.g+1|0;}h=new Bg;i=a.x;j=new T;W(j);N(N(Bh(N(j,B(355)),k),B(335)),i);Bc(h,S(j));L(h);}if(!e){h=new Bg;b=a.g;i=a.x;j=new T;W(j);N(N(Bh(N(j,B(356)),
b),B(335)),i);Bc(h,S(j));L(h);}d=a.g;if(g==d){h=new Bg;i=a.x;j=new T;W(j);N(N(Bh(N(j,B(357)),d),B(335)),i);Bc(h,S(j));L(h);}if(b&&g>c)a.cl=d-g|0;if(b){a.ei=e;a.dc=f;}}
function Hl(){var a=this;E.call(a);a.bf=null;a.cI=null;a.dV=null;a.d2=null;a.eQ=0;a.cM=0;a.V=0;a.j=0;a.bo=0;a.ck=0;a.bD=0;a.Z=0;a.g7=0;a.b$=0;a.cA=0;}
function Be(a,b,c){a.cI.data[b]=c;}
function Cf(a,b){return a.cI.data[b];}
function Eq(a){return IU(a,0);}
function IU(a,b){IN(a,b);return a.bf.data[(b*2|0)+1|0];}
function Cn(a,b,c){a.bf.data[b*2|0]=c;}
function EN(a,b,c){a.bf.data[(b*2|0)+1|0]=c;}
function C3(a,b){return a.bf.data[b*2|0];}
function D1(a,b){return a.bf.data[(b*2|0)+1|0];}
function JZ(a){return Hf(a,0);}
function Hf(a,b){IN(a,b);return a.bf.data[b*2|0];}
function FT(a,b){return a.dV.data[b];}
function CB(a,b,c){a.dV.data[b]=c;}
function IN(a,b){var c;if(!a.cM){c=new DT;Z(c);L(c);}if(b>=0&&b<a.eQ)return;c=new BA;Bc(c,Gg(b));L(c);}
function IJ(a,b,c,d){a.cM=0;a.cA=2;EP(a.bf,(-1));EP(a.cI,(-1));if(b!==null)a.d2=b;if(c>=0){a.V=c;a.j=d;}a.bo=a.V;}
function KV(a){return a.cA;}
var E9=H();
var F_=H();
var Ig=H();
var IA=H();
var JK=H();
$rt_packages([]);
$rt_metadata([E,0,0,[],0,3,0,0,["ba",Ul(N8)],BO,0,E,[],0,3,0,BI,0,F3,0,E,[],3,3,0,0,0,FE,0,E,[],3,3,0,0,0,H0,0,E,[F3,FE],0,3,0,0,["ba",Ul(LT)],J$,0,E,[],4,0,0,0,0,JT,0,E,[],4,3,0,0,0,DG,0,E,[],0,3,0,0,0,Ct,0,DG,[],0,3,0,0,0,Bx,0,Ct,[],0,3,0,0,0,Ls,0,Bx,[],0,3,0,0,0,BZ,0,E,[],3,3,0,0,0,Ce,0,E,[],3,3,0,0,0,Fe,0,E,[],3,3,0,0,0,Bq,0,E,[BZ,Ce,Fe],0,3,0,CU,["de",Um(I),"dr",Ul(O),"ba",Ul(N7)],DC,0,DG,[],0,3,0,0,0,DK,0,DC,[],0,3,0,0,0,K9,0,DK,[],0,3,0,0,0,BX,0,E,[BZ],1,3,0,0,0,CP,0,BX,[Ce],0,3,0,0,0,Dy,0,E,[BZ,Fe],
0,0,0,0,["cd",Um(EM),"ba",Ul(S)],E_,0,E,[],3,3,0,0,0,T,0,Dy,[E_],0,3,0,0,["c7",Up(R8),"dF",Uo(Px),"de",Um(QD),"dr",Ul(Gs),"ba",Ul(CA),"cd",Um(Sh),"dA",Un(L0)],Dv,0,DK,[],0,3,0,0,0,JF,0,Dv,[],0,3,0,0,0,KX,0,Dv,[],0,3,0,0,0,JL,0,E,[],4,3,0,0,0,Ko,0,E,[],4,3,0,0,0,B9,0,E,[],3,3,0,0,0,CI,0,E,[B9],3,3,0,0,0,Hs,0,E,[CI],3,3,0,0,0,Iy,0,E,[CI],3,3,0,0,0,Ip,0,E,[CI],3,3,0,0,0,Ge,0,E,[CI],3,3,0,0,0,Is,0,E,[CI],3,3,0,0,0,G5,0,E,[CI,Hs,Iy,Ip,Ge,Is],3,3,0,0,0,GX,0,E,[],3,3,0,0,0,G_,0,E,[B9],3,3,0,0,0,Jt,0,E,[B9,G5,GX,G_],
1,3,0,0,["ki",Um(Nn),"jr",Un(PT),"kj",Un(Ps),"im",Uo(Nj),"j6",Um(Rd),"j_",Ul(Oo),"i5",Uo(Me)],Cw,0,E,[B9],3,3,0,0,0,HK,0,E,[Cw],0,0,0,0,["bE",Um(Og)],HJ,0,E,[Cw],0,0,0,0,["bE",Um(OC)],IC,0,E,[],3,3,0,0,0,Hy,0,E,[IC],0,3,0,0,0,BA,0,Bx,[],0,3,0,0,0,Jm,0,E,[],4,3,0,0,0,CG,0,Bx,[],0,3,0,0,0,Ea,0,Bx,[],0,3,0,0,0,BW,0,E,[Ce],0,3,0,0,0,HM,0,E,[Cw],0,0,0,0,["bE",Um(PP)]]);
$rt_metadata([Cv,0,E,[],4,3,0,Fg,0,Li,0,E,[B9],1,3,0,0,0,KU,0,E,[B9],1,3,0,0,0,LL,0,E,[B9],1,3,0,0,0,EZ,0,E,[B9],3,3,0,0,0,FX,0,E,[EZ],0,3,0,0,["hP",Um(QT)],K6,0,E,[B9],1,3,0,0,0,FW,0,E,[EZ],0,3,0,0,["hP",Um(M5)],LP,0,E,[],4,3,0,0,0,DE,0,BA,[],0,3,0,0,0,LC,0,E,[Cw],0,3,0,0,["bE",Um(So)],LD,0,E,[Cw],0,3,0,0,["bE",Um(MG)],HR,0,E,[],3,3,0,0,0,EL,0,E,[HR],3,3,0,0,0,En,0,E,[EL],1,3,0,0,0,IR,0,E,[EL],3,3,0,0,0,FR,0,E,[IR],3,3,0,0,0,EO,0,En,[FR],1,3,0,0,0,Co,0,E,[],3,3,0,0,0,Gx,0,E,[],3,3,0,0,0,JI,0,EO,[Co,BZ,Gx],
0,3,0,0,0,I$,0,E,[],0,3,0,0,0,Kf,0,E,[Cw],0,3,0,0,["bE",Um(Pa)],Kd,0,E,[Cw],0,3,0,0,["bE",Um(Nh)],Kc,0,E,[Cw],0,3,0,0,["bE",Um(RU)],Iv,0,E,[B9],3,3,0,0,0,Ke,0,E,[Iv],0,3,0,0,["kY",Ul(R1)],Bg,0,Bx,[],0,3,0,0,0,Ho,0,E,[],3,3,0,0,0,Gf,0,E,[Ho],0,0,0,0,0,Lc,0,E,[],4,3,0,0,0,Iw,0,BX,[Ce],0,3,0,0,0,Bw,0,Bg,[],0,3,0,0,0,Ev,0,E,[],4,3,0,0,0,IP,0,E,[],3,3,0,0,0,F7,0,E,[IP],3,3,0,0,0,G1,0,E,[],3,3,0,0,0,HL,0,E,[F7,G1],4,3,0,0,0,D4,0,E,[],4,3,0,0,0,Bm,0,E,[Co,BZ],4,3,0,Je,0,Dm,0,E,[],4,3,0,0,0,Km,0,E,[],4,0,0,0,0,JS,0,
E,[],4,3,0,0,0,Kb,0,E,[],0,3,0,0,0,K3,0,E,[],4,3,0,0,0,JG,0,E,[],0,3,0,0,0,Ii,0,E,[BZ],4,3,0,0,0,H1,0,Bx,[],0,3,0,0,0,I0,0,Bx,[],0,3,0,0,0,Bd,0,E,[],1,0,0,0,["R",Uo(D2),"Q",Up(D$),"ca",Ul(N1),"s",Um(QK),"M",Um(QJ),"bF",Ul(RF),"bp",Ul(Er)]]);
$rt_metadata([BR,0,Bd,[],0,0,0,Fq,["a",Uo(Ne),"o",Um(NP)],Dk,0,E,[],0,0,0,0,0,Eb,0,Bg,[],0,3,0,0,0,IM,0,BR,[],0,0,0,0,["a",Uo(ME),"o",Um(Po)],IL,0,BR,[],0,0,0,0,["a",Uo(OM)],HG,0,BR,[],0,0,0,0,["a",Uo(N0)],FQ,0,BR,[],0,0,0,0,["a",Uo(MN),"o",Um(NI)],CY,0,BR,[],0,0,0,0,["a",Uo(Q5)],Bn,0,Bd,[],1,0,0,0,["a",Uo(Sa),"N",Ul(P9),"o",Um(RL)],KL,0,Bn,[],0,0,0,0,["E",Un(PI),"R",Uo(P5),"Q",Up(OB),"o",Um(MJ)],Bj,0,Bd,[],0,0,0,0,["a",Uo(QN),"s",Um(NA),"M",Um(Sy),"o",Um(Or),"bp",Ul(Ov)],Ej,0,Bj,[],0,0,0,0,["a",Uo(Nm),"o",
Um(OY)],Cr,0,Ej,[],0,0,0,0,["a",Uo(Pj),"s",Um(Ow)],FI,0,Cr,[],0,0,0,0,["a",Uo(Nu),"o",Um(QQ)],HP,0,Cr,[],0,0,0,0,["a",Uo(NL),"o",Um(Qh)],In,0,Cr,[],0,0,0,0,["a",Uo(Oq),"o",Um(Sw)],Gd,0,Cr,[],0,0,0,0,["a",Uo(Ma),"o",Um(Pb)],DF,0,Bj,[],0,0,0,0,["a",Uo(Mv),"R",Uo(L2),"Q",Up(Pt),"M",Um(St),"bF",Ul(NE),"bp",Ul(RI)],Dq,0,E,[],1,0,0,0,0,P,0,Dq,[],1,0,0,GY,["bd",Ul(NN),"bx",Ul(MY),"co",Ul(P3),"b5",Ul(RD)],J4,0,P,[],0,0,0,0,["f",Um(B2),"bd",Ul(B1),"bx",Ul(PW),"co",Ul(Qz),"ba",Ul(MO),"b5",Ul(P_)],EA,0,Bx,[],0,3,0,0,0,Cs,
0,Bd,[],1,0,0,0,["M",Um(Pu),"o",Um(QY),"bp",Ul(Mk)],B5,0,Cs,[],0,0,0,0,["a",Uo(Mc)],CX,0,B5,[],0,0,0,0,["a",Uo(Ni)],BV,0,Cs,[],0,0,0,0,["a",Uo(Mu)],CH,0,B5,[],0,0,0,0,["a",Uo(L8),"s",Um(SA)],HZ,0,B5,[],0,0,0,0,["a",Uo(R5),"R",Uo(MM)],R,0,E,[],1,0,0,0,0,FZ,0,Dq,[Co],0,0,0,0,["ba",Ul(MV)],Gz,0,Bd,[],0,0,0,0,["a",Uo(R3),"o",Um(Nz)],Id,0,E,[Co,BZ],0,3,0,0,0,FO,0,Bj,[],0,0,0,0,0,HU,0,Bj,[],0,0,0,0,["a",Uo(Nb),"s",Um(Nk),"o",Um(N4),"M",Um(NM)],Cq,0,Bj,[],0,0,0,0,["a",Uo(PQ),"f",Um(Qn),"M",Um(M9),"s",Um(PY),"o",Um(P0)],Ex,
0,Cq,[],0,0,0,0,["f",Um(RM)],JU,0,Bn,[],0,0,0,0,["E",Un(R6)],CD,0,Bn,[],0,0,0,0,["E",Un(Fy),"M",Um(NB)],GZ,0,Bj,[],0,0,0,0,["s",Um(L6),"a",Uo(L7),"M",Um(NV),"o",Um(QE)],CC,0,Bn,[],0,0,0,0,["N",Ul(RT),"E",Un(Q0),"R",Uo(PN),"Q",Up(RY),"M",Um(Qv)],La,0,Bn,[],0,0,0,0,["E",Un(LV)],Ja,0,Bn,[],0,0,0,0,["E",Un(Mm)],C6,0,Bj,[],0,0,0,0,["s",Um(RH),"a",Uo(Nl),"M",Um(R7),"o",Um(OA)],Iz,0,C6,[],0,0,0,0,0,Gn,0,C6,[],0,0,0,0,0,I1,0,BV,[],0,0,0,0,["a",Uo(OS)],HC,0,BV,[],0,0,0,0,["a",Uo(MA)],Db,0,BV,[],0,0,0,0,["a",Uo(PS),"s",
Um(Q_)],Hm,0,Db,[],0,0,0,0,["a",Uo(RV),"s",Um(MW)],C5,0,BV,[],0,0,0,0,["a",Uo(Ss)]]);
$rt_metadata([F5,0,C5,[],0,0,0,0,["a",Uo(Ro)],IE,0,BV,[],0,0,0,0,["a",Uo(RS)],H4,0,Db,[],0,0,0,0,["a",Uo(N5)],Ha,0,C5,[],0,0,0,0,["a",Uo(MP)],IF,0,Cs,[],0,0,0,0,["a",Uo(Sg),"R",Uo(P4)],GE,0,Cs,[],0,0,0,0,["a",Uo(NF),"R",Uo(L_)],CS,0,E,[],1,0,0,0,0,I2,0,B5,[],0,0,0,0,["a",Uo(MT)],HV,0,CH,[],0,0,0,0,["a",Uo(Mz)],Hg,0,CX,[],0,0,0,0,["a",Uo(Pv)],H2,0,B5,[],0,0,0,0,["a",Uo(Nw)],Gr,0,CH,[],0,0,0,0,["a",Uo(M4)],Io,0,CX,[],0,0,0,0,["a",Uo(PK)],Fc,0,Bd,[],4,0,0,0,["a",Uo(Sv),"o",Um(RB)],Ky,0,Bd,[],0,0,0,0,["a",Uo(NK),
"o",Um(NU)],GA,0,Bd,[],0,0,0,0,["a",Uo(RO),"o",Um(Sn)],Ih,0,Bd,[],4,0,0,0,["a",Uo(Ok),"o",Um(OG)],H7,0,Bd,[],0,0,0,0,["a",Uo(Nf),"o",Um(LU)],F9,0,Bd,[],0,0,0,0,["a",Uo(Os),"o",Um(QB)],KY,0,Bj,[],0,0,0,0,["a",Uo(RX),"s",Um(NZ),"ca",Ul(M3),"o",Um(NW)],J1,0,Bj,[],4,0,0,0,["a",Uo(Na),"s",Um(Pi),"ca",Ul(LR),"o",Um(R_)],KS,0,Bd,[],4,0,0,0,["a",Uo(R$),"o",Um(Qu)],Jf,0,Bd,[],0,0,0,0,["a",Uo(Nd),"o",Um(Qj)],I8,0,Bd,[],0,0,0,0,["a",Uo(Rr),"o",Um(OK)],Dx,0,Bj,[],0,0,0,0,["a",Uo(MX),"s",Um(Ou),"o",Um(OZ)],KW,0,Dx,[],0,
0,0,0,["a",Uo(OR),"R",Uo(QM),"Q",Up(MH),"M",Um(Mr)],K$,0,Dx,[],0,0,0,0,["a",Uo(LZ)],Gy,0,Dy,[E_],0,3,0,0,["c7",Up(Qb),"dF",Uo(NO),"cd",Um(Oa),"dA",Un(P8)],IG,0,Bn,[],0,0,0,0,["E",Un(Pe),"R",Uo(NC),"Q",Up(QA),"M",Um(Q$)],I6,0,Bn,[],0,0,0,0,["E",Un(L4)],F6,0,Bn,[],0,0,0,0,["E",Un(Py)],Dw,0,E,[],4,0,0,O_,0,FD,0,Bn,[],0,0,0,0,["E",Un(PD)],Es,0,Bj,[],0,0,0,0,["s",Um(Ns),"a",Uo(OH),"R",Uo(Q8),"Q",Up(Pq),"M",Um(MD),"o",Um(Qk)],EJ,0,Bj,[],0,0,0,0,["s",Um(N_),"a",Uo(Mb),"R",Uo(NS),"Q",Up(Pw),"M",Um(Pf),"o",Um(N3)],Cu,
0,Bn,[],0,0,0,0,["E",Un(O1),"R",Uo(MQ),"Q",Up(N$),"M",Um(OL)],Hq,0,CS,[],0,0,0,0,["b4",Um(Ol),"eA",Un(OT)],Hr,0,CS,[],0,0,0,0,["b4",Um(PM),"eA",Un(Rz)],J2,0,E,[],0,0,0,0,0,Jo,0,E,[],0,0,0,0,0,Eo,0,R,[],0,0,0,0,["m",Ul(Lb)],E2,0,R,[],0,0,0,0,["m",Ul(I5)],JX,0,R,[],0,0,0,0,["m",Ul(Pn)],Kv,0,R,[],0,0,0,0,["m",Ul(Ql)],Kw,0,R,[],0,0,0,0,["m",Ul(PR)],Fu,0,R,[],0,0,0,0,["m",Ul(J5)],ET,0,Fu,[],0,0,0,0,["m",Ul(KR)],LI,0,R,[],0,0,0,0,["m",Ul(Q7)],Fv,0,ET,[],0,0,0,0,["m",Ul(I4)],Lp,0,Fv,[],0,0,0,0,["m",Ul(Mo)]]);
$rt_metadata([LM,0,R,[],0,0,0,0,["m",Ul(O9)],Kt,0,R,[],0,0,0,0,["m",Ul(Mi)],J_,0,R,[],0,0,0,0,["m",Ul(RC)],KA,0,R,[],0,0,0,0,["m",Ul(MZ)],LQ,0,R,[],0,0,0,0,["m",Ul(L9)],J3,0,R,[],0,0,0,0,["m",Ul(Rv)],JP,0,R,[],0,0,0,0,["m",Ul(O4)],KP,0,R,[],0,0,0,0,["m",Ul(O7)],JE,0,R,[],0,0,0,0,["m",Ul(PA)],Ji,0,R,[],0,0,0,0,["m",Ul(Rt)],J9,0,R,[],0,0,0,0,["m",Ul(LW)],Kl,0,R,[],0,0,0,0,["m",Ul(Sd)],KK,0,R,[],0,0,0,0,["m",Ul(PG)],I3,0,R,[],0,0,0,0,["m",Ul(QC)],Lm,0,R,[],0,0,0,0,["m",Ul(Sj)],Ki,0,R,[],0,0,0,0,["m",Ul(QH)],K5,
0,R,[],0,0,0,0,["m",Ul(Oc)],KJ,0,R,[],0,0,0,0,["m",Ul(MS)],LO,0,R,[],0,0,0,0,["m",Ul(Pd)],EF,0,R,[],0,0,0,0,["m",Ul(LN)],KQ,0,EF,[],0,0,0,0,["m",Ul(MF)],Lu,0,Eo,[],0,0,0,0,["m",Ul(Nv)],KE,0,E2,[],0,0,0,0,["m",Ul(QX)],Kg,0,R,[],0,0,0,0,["m",Ul(SB)],KB,0,R,[],0,0,0,0,["m",Ul(Rj)],Lg,0,R,[],0,0,0,0,["m",Ul(Qe)],Lq,0,R,[],0,0,0,0,["m",Ul(LX)],HH,0,E,[],0,3,0,0,0,F$,0,E,[],0,3,0,0,0,Jh,0,E,[],0,0,0,0,0,GD,0,Ct,[],0,3,0,0,0,HY,0,P,[],0,0,0,0,["f",Um(PV)],HW,0,P,[],0,0,0,0,["f",Um(Ms)],GJ,0,P,[],0,0,0,0,["f",Um(Sr),
"ba",Ul(QI)],GQ,0,P,[],0,0,0,0,["f",Um(O3)],GO,0,P,[],0,0,0,0,["f",Um(PC)],GP,0,P,[],0,0,0,0,["f",Um(L3)],GT,0,P,[],0,0,0,0,["f",Um(PE)],GU,0,P,[],0,0,0,0,["f",Um(LS)],GR,0,P,[],0,0,0,0,["f",Um(QP)],GS,0,P,[],0,0,0,0,["f",Um(L5)],GV,0,P,[],0,0,0,0,["f",Um(QR)],GW,0,P,[],0,0,0,0,["f",Um(OX)],GI,0,P,[],0,0,0,0,["f",Um(SC)],Hi,0,P,[],0,0,0,0,["f",Um(QU)],GG,0,P,[],0,0,0,0,["f",Um(OW)],GH,0,P,[],0,0,0,0,["f",Um(Qr)],GM,0,P,[],0,0,0,0,["f",Um(RQ)],GF,0,P,[],0,0,0,0,["f",Um(Qq)],GK,0,P,[],0,0,0,0,["f",Um(NQ)]]);
$rt_metadata([GL,0,P,[],0,0,0,0,["f",Um(N2)],DT,0,Bx,[],0,3,0,0,0,Fw,0,DT,[],0,3,0,0,0,HB,0,BX,[Ce],0,3,0,0,0,C0,0,E,[],0,0,0,0,0,DZ,0,E,[],4,3,0,0,0,Gt,0,E,[],0,3,0,0,0,Ek,0,BX,[Ce],0,3,0,0,0,HA,0,E,[],0,3,0,0,0,F2,0,DF,[],0,0,0,0,["R",Uo(Qi),"Q",Up(Sq),"bF",Ul(OF)],E8,0,E,[],3,3,0,0,0,FA,0,E,[E8],4,3,0,0,0,BC,0,Bg,[],0,3,0,0,0,G7,0,BC,[],0,3,0,0,0,Fx,0,BC,[],0,3,0,0,0,DH,0,E,[BZ,Ce],0,3,0,0,0,Lv,0,BC,[],0,3,0,0,0,Dj,0,BX,[Ce],0,3,0,0,0,DL,0,BX,[Ce],0,3,0,0,0,Ic,0,BC,[],0,3,0,0,0,Jc,0,BC,[],0,3,0,0,0,JH,0,
E,[Co],0,3,0,0,0,Ey,0,E,[BZ,Co],1,3,0,0,0,EC,0,Ey,[],1,3,0,0,0,Ei,0,EC,[],0,3,0,0,0,ID,0,E,[],3,3,0,0,0,Gp,0,BC,[],0,3,0,0,0,JV,0,BC,[],0,3,0,0,0,Iu,0,BC,[],0,3,0,0,0,B4,0,E,[],3,0,0,0,0,I7,0,E,[B4],0,0,0,0,0,Fp,0,E,[Ce,BZ],1,3,0,0,0,Cd,0,Fp,[],12,3,0,Si,0,EG,0,E,[BZ],4,3,0,0,0,Ff,0,E,[],4,3,0,0,0,FS,0,E,[],3,3,0,0,0,EV,0,E,[FS],1,3,0,0,0,IH,0,EV,[Co,BZ],0,3,0,0,0,Fz,0,E,[],3,3,0,0,0,Fl,0,E,[Fz,Co],0,0,0,0,0,DP,0,Fl,[],0,0,0,0,0,FY,0,P,[],0,0,0,0,["f",Um(Q3)],FL,0,P,[],0,0,0,0,["f",Um(Nq)],IT,0,P,[],0,0,0,0,
["f",Um(M2)],IS,0,P,[],0,0,0,0,["f",Um(Qd)],Ia,0,P,[],0,0,0,0,["f",Um(RE)],Hb,0,P,[],0,0,0,0,["f",Um(Q6)],Gu,0,P,[],0,0,0,0,["f",Um(Np)],Ib,0,P,[],0,0,0,0,["f",Um(O$)],FG,0,P,[],0,0,0,0,["f",Um(R9)]]);
$rt_metadata([FK,0,P,[],0,0,0,0,["f",Um(Pm)],Gm,0,P,[],0,0,0,0,["f",Um(Rg)],Ht,0,P,[],0,0,0,0,["f",Um(Mf)],Hw,0,P,[],0,0,0,0,["f",Um(Ot)],Gj,0,P,[],0,0,0,0,["f",Um(QS)],FB,0,P,[],0,0,0,0,["f",Um(RK)],FV,0,P,[],0,0,0,0,["f",Um(O8)],Fk,0,P,[],0,0,0,0,["f",Um(Nr)],IO,0,Fk,[],0,0,0,0,["f",Um(PZ)],E3,0,Ct,[],0,3,0,0,0,Il,0,DC,[],0,3,0,0,0,FU,0,E,[],0,0,0,0,0,Hl,0,E,[E8],0,0,0,0,0,E9,0,E,[B4],0,0,0,0,0,F_,0,E,[B4],0,0,0,0,0,Ig,0,E,[B4],0,0,0,0,0,IA,0,E,[B4],0,0,0,0,0,JK,0,E,[],0,0,0,0,0]);
function $rt_array(cls,data){this.mD=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","cb_","en","assets/flags/",".png","rgba(255,255,255,",";",",","<h3 style=\'margin: 0 0 5px 0;\'>Score: ","</h3>","<h4 style=\'margin: 0 0 5px 0;\'>Health: ","</h4>","<div style=\'width:200px;height:15px;background:#aa0000;border-radius:10px;box-shadow: 2px 2px 5px rgba(0,0,0,0.5);overflow:hidden;\'>","<div style=\'width:","px;height:15px;background:#00aa00;border-radius:10px;\'></div></div>",
"<div style=\'height: 40px;\'>","%d.%03d","<h4 style=\'color:orange; margin: 5px 0;\'>Lock Timer: ","s</h4>","<div style=\'width:200px;height:10px;background:gray;border-radius:5px;\'><div style=\'width:","px;height:10px;background:yellow;border-radius:5px;\'></div></div>","</div>","<div style=\'margin-top:20px; display:flex; flex-wrap:wrap;\'>","border: 1px solid #ccc;","border: 4px solid red;","<div style=\'margin:5px; text-align:center;\'>","<img src=\'assets/flags/",".png\' style=\'width:32px;height:32px;",
"\'><br>","<span style=\'font-size: 12px;\'>","</span>","<div style=\'margin-top:10px;font-size:18px;font-weight:bold;color:yellow;\'>Building: <bdi>","</bdi></div>","<h4 style=\'margin: 10px 0 5px 0;\'>Found Words:</h4>","<div style=\'flex-grow: 1; overflow-y: auto; background-color: #222; padding: 10px; border-radius: 5px;\'>","<div style=\'display:flex;align-items:center;margin-bottom:5px;\'>",".png\' style=\'width:24px;height:24px;margin-right:4px;vertical-align:middle;\'> ","<span>","</span></div>","#ffffe0",
"#ffb3ba","#ffdfba","#ffffba","#baffc9","#bae1ff","#e6e6fa","es","zh","hi","fr","ar","bn","ru","pt","id","ur","de","ja","te","tr","ta","vi","tl","ko","fa","it","th","pl","English","Spanish","Mandarin","Hindi","French","Arabic","Bengali","Russian","Portuguese","Indonesian","Urdu","German","Japanese","Telugu","Turkish","Tamil","Vietnamese","Tagalog","Korean","Persian","Italian","Thai","Polish","javaClass@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",
": ","The value is too big for int type: ","Illegal radix: ","null","Either src or dest is null","0","object","function","string","number","undefined","true","ArrowLeft","ArrowRight","playing","gameover","Game Over! Score: ","CA","CN","FR","DE","IT","JP","KR","TW","GB","US","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl",
"javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Syriac","ArabicSupplement","Thaana","Devanagari","Gurmukhi","Gujarati","Oriya","Kannada","Malayalam","Sinhala",
"Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows",
"MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement",
"KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs",
"AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","false","Can\'t convert code point "," to char","-","0x","+ ","0-","Missing format with for specifier ",
"--#+ 0,(<","Illegal format flags "," for conversion ","Duplicate format flags: ","Unknown format conversion: ","Illegal precision: ","Can\'t format argument of "," using "," conversion","This exception should not been thrown","Positive number pattern not found in ","Expected \';\' at "," in ","Illegal format flags: ","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","Currency not found: ","Prefix contains special character at ","Quote opened at "," was not closed in ","Group separator found at fractional part at ",
"Unexpected second decimal separator at ","Unexpected \'0\' at optional digit part at ","Unexpected char at exponent at ","Pattern does not specify exponent digits at ","Unexpected \'#\' at non-optional digit part at ","Two group separators at ","Pattern does not specify integer digits at ","Group separator at the end of number at "]);
Bq.prototype.toString=function(){return $rt_ustr(this);};
Bq.prototype.valueOf=Bq.prototype.toString;E.prototype.toString=function(){return $rt_ustr(N8(this));};
E.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var BL=Long_add;var TS=Long_sub;var Bp=Long_mul;var J8=Long_div;var Ml=Long_rem;var Ty=Long_or;var B8=Long_and;var Wu=Long_xor;var DD=Long_shl;var TX=Long_shr;var B0=Long_shru;var Se=Long_compare;var CO=Long_eq;var PU=Long_ne;var To=Long_lt;var PJ=Long_le;var Wv=Long_gt;var Ww=Long_ge;var Wx=Long_not;var My=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(P7);
$rt_exports.main.javaException=$rt_javaException;
let Vm=$rt_globals.Symbol('jsoClass');
(function(){var c;c=Jt.prototype;c.removeEventListener=c.im;c.dispatchEvent=c.j6;c.get=c.ki;c.addEventListener=c.i5;Object.defineProperty(c,"length",{get:c.j_});c=HK.prototype;c[Vm]=true;c.handleEvent=c.bE;c=HJ.prototype;c[Vm]=true;c.handleEvent=c.bE;c=HM.prototype;c[Vm]=true;c.handleEvent=c.bE;c=FX.prototype;c[Vm]=true;c.accept=c.hP;c=FW.prototype;c[Vm]=true;c.accept=c.hP;c=LC.prototype;c[Vm]=true;c.handleEvent=c.bE;c=LD.prototype;c[Vm]=true;c.handleEvent=c.bE;c=Kf.prototype;c[Vm]=true;c.handleEvent=c.bE;c
=Kd.prototype;c[Vm]=true;c.handleEvent=c.bE;c=Kc.prototype;c[Vm]=true;c.handleEvent=c.bE;c=Ke.prototype;c[Vm]=true;c.onTimer=c.kY;})();
}));
