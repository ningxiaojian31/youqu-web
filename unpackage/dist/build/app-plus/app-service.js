var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'nodes']])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'audio']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'img']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'file']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'mix-refresh-content'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'pageDeviation']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'+'],[[7],[3,'pageTransition']],[1,'s']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pd-10 bg-fff'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'userid']],[[6],[[7],[3,'user']],[3,'userid']]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[6])
Z(z[7])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-body'])
Z([[2,'>'],[[6],[[7],[3,'indexList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'indexList']])
Z(z[2])
Z([3,'__e'])
Z([3,'flex pd-10 bg-fff bdb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'indexList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'gid']],[1,0]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[10])
Z(z[11])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[10])
Z(z[2])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,0])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z([[7],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'scroll-content'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'newsList']])
Z([3,'id'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'images']],[3,'length']],[1,0]])
Z([[7],[3,'loading']])
Z([3,'__l'])
Z([3,'mix-loading'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([3,'__l'])
Z([3,'mix-loading'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'mixAdvert'])
Z([3,'/static/advert.jpg'])
Z([1,8])
Z([[7],[3,'advertNavUrl']])
Z([3,'1'])
Z(z[1])
Z([3,'__e'])
Z(z[9])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,90])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[9])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper'])
Z([3,'__i0__'])
Z([3,'tabItem'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[9])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'tabItem']],[3,'newsList']])
Z(z[31])
Z(z[9])
Z([3,'news-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetails']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'tabBars']],[1,'id']],[[6],[[7],[3,'tabItem']],[3,'id']]]]],[[4],[[5],[[5],[[5],[1,'newsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'images']],[3,'length']],[1,0]])
Z([3,'imgIndex'])
Z([3,'imgItem'])
Z([[6],[[7],[3,'item']],[3,'images']])
Z(z[39])
Z([[6],[[7],[3,'item']],[3,'videoSrc']])
Z(z[1])
Z([[6],[[7],[3,'tabItem']],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'__i0__']]],[1,',']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/chatmsg.wxml','./components/footer.wxml','./components/mix-advert/vue/mix-advert.wxml','./components/mix-load-more/mix-load-more.wxml','./components/mix-loading/mix-loading.wxml','./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml','./pages/chat/chat.wxml','./pages/chat/index.wxml','./pages/component/component.wxml','./pages/details/details.wxml','./pages/details/videoDetails.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/shilu-login/blog.wxml','./pages/shilu-login/forget.wxml','./pages/shilu-login/login.wxml','./pages/shilu-login/reg.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_n('view')
var cI=_v()
_(oH,cI)
if(_oz(z,4,fE,oD,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,5,fE,oD,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,6,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oH,aL)
if(_oz(z,7,fE,oD,gg)){aL.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,2,xC,e,s,gg,oB,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oR=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var fS=_n('slot')
_(oR,fS)
_(r,oR)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var hU=_n('view')
_rz(z,hU,'class',0,e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,1,e,s,gg)){oV.wxVkey=1
var cW=_v()
_(oV,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_n('view')
var o4=_v()
_(b3,o4)
if(_oz(z,5,aZ,lY,gg)){o4.wxVkey=1
var x5=_mz(z,'chat-msg',['bind:__l',6,'content',1,'vueId',2],[],aZ,lY,gg)
_(o4,x5)
}
else{o4.wxVkey=2
var o6=_mz(z,'chat-msg',['bind:__l',9,'content',1,'vueId',2],[],aZ,lY,gg)
_(o4,o6)
}
o4.wxXCkey=1
o4.wxXCkey=3
o4.wxXCkey=3
_(t1,b3)
return t1
}
cW.wxXCkey=4
_2z(z,4,oX,e,s,gg,cW,'item','index','')
}
else{oV.wxVkey=2
}
oV.wxXCkey=1
oV.wxXCkey=3
_(r,hU)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c8=_n('view')
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,1,e,s,gg)){o0.wxVkey=1
var cAB=_v()
_(o0,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],aDB,lCB,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,9,aDB,lCB,gg)){oHB.wxVkey=1
var xIB=_mz(z,'chat-msg',['bind:__l',10,'content',1,'vueId',2],[],aDB,lCB,gg)
_(oHB,xIB)
}
else{oHB.wxVkey=2
var oJB=_mz(z,'chat-msg',['bind:__l',13,'content',1,'vueId',2],[],aDB,lCB,gg)
_(oHB,oJB)
}
oHB.wxXCkey=1
oHB.wxXCkey=3
oHB.wxXCkey=3
_(tEB,bGB)
return tEB
}
cAB.wxXCkey=4
_2z(z,4,oBB,e,s,gg,cAB,'item','index','index')
}
else{o0.wxVkey=2
}
o0.wxXCkey=1
o0.wxXCkey=3
_(c8,h9)
var fKB=_mz(z,'mt-footer',['bind:__l',16,'tab',1,'vueId',2],[],e,s,gg)
_(c8,fKB)
_(r,c8)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hMB=_mz(z,'mix-pulldown-refresh',['bind:__l',0,'bind:refresh',1,'class',1,'data-event-opts',2,'data-ref',3,'top',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oNB=_mz(z,'mix-load-more',['bind:__l',8,'status',1,'vueId',2],[],e,s,gg)
_(hMB,oNB)
_(r,hMB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oPB=_n('view')
_rz(z,oPB,'class',0,e,s,gg)
var aRB=_v()
_(oPB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_v()
_(oVB,oXB)
if(_oz(z,5,bUB,eTB,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
return oVB
}
aRB.wxXCkey=2
_2z(z,3,tSB,e,s,gg,aRB,'item','__i0__','id')
var lQB=_v()
_(oPB,lQB)
if(_oz(z,6,e,s,gg)){lQB.wxVkey=1
var fYB=_mz(z,'mix-loading',['bind:__l',7,'class',1,'vueId',2],[],e,s,gg)
_(lQB,fYB)
}
lQB.wxXCkey=1
lQB.wxXCkey=3
_(r,oPB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_v()
_(r,h1B)
if(_oz(z,0,e,s,gg)){h1B.wxVkey=1
var o2B=_mz(z,'mix-loading',['bind:__l',1,'class',1,'vueId',2],[],e,s,gg)
_(h1B,o2B)
}
h1B.wxXCkey=1
h1B.wxXCkey=3
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o4B=_n('view')
_rz(z,o4B,'class',0,e,s,gg)
var l5B=_mz(z,'mix-advert',['bind:__l',1,'class',1,'data-ref',2,'imageUrl',3,'timedown',4,'url',5,'vueId',6],[],e,s,gg)
_(o4B,l5B)
var a6B=_mz(z,'mix-pulldown-refresh',['bind:__l',8,'bind:refresh',1,'bind:setEnableScroll',2,'class',3,'data-event-opts',4,'data-ref',5,'top',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var t7B=_mz(z,'swiper',['bindchange',17,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
var b9B=function(xAC,o0B,oBC,gg){
var cDC=_mz(z,'scroll-view',['bindscrolltolower',27,'class',1,'data-event-opts',2,'scrollY',3],[],xAC,o0B,gg)
var hEC=_v()
_(cDC,hEC)
var oFC=function(oHC,cGC,lIC,gg){
var tKC=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2],[],oHC,cGC,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,38,oHC,cGC,gg)){eLC.wxVkey=1
var bMC=_v()
_(eLC,bMC)
var oNC=function(oPC,xOC,fQC,gg){
var hSC=_v()
_(fQC,hSC)
if(_oz(z,43,oPC,xOC,gg)){hSC.wxVkey=1
}
hSC.wxXCkey=1
return fQC
}
bMC.wxXCkey=2
_2z(z,41,oNC,oHC,cGC,gg,bMC,'imgItem','imgIndex','imgIndex')
}
else{eLC.wxVkey=2
}
eLC.wxXCkey=1
_(lIC,tKC)
return lIC
}
hEC.wxXCkey=2
_2z(z,33,oFC,xAC,o0B,gg,hEC,'item','index','index')
var oTC=_mz(z,'mix-load-more',['bind:__l',44,'status',1,'vueId',2],[],xAC,o0B,gg)
_(cDC,oTC)
_(oBC,cDC)
return oBC
}
e8B.wxXCkey=4
_2z(z,25,b9B,e,s,gg,e8B,'tabItem','__i0__','id')
_(a6B,t7B)
_(o4B,a6B)
_(r,o4B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/component/component","pages/details/details","pages/details/videoDetails","pages/shilu-login/blog","pages/shilu-login/forget","pages/shilu-login/login","pages/shilu-login/reg","pages/me/me","pages/chat/index","pages/chat/chat"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"新闻模版","navigationBarBackgroundColor":"#ec706b","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/chat/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"信息中心"},{"pagePath":"pages/me/me","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"个人中心"}]},"nvue":{"pages":{"pages/nvue/nvue.html":{"window":{"usingComponents":{},"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none"},"nvue":true}}},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"友趣社区","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/chatmsg.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chatmsg.wxml']=$gwx('./components/chatmsg.wxml');

__wxAppCode__['components/footer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/footer.wxml']=$gwx('./components/footer.wxml');

__wxAppCode__['components/mix-advert/vue/mix-advert.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-advert/vue/mix-advert.wxml']=$gwx('./components/mix-advert/vue/mix-advert.wxml');

__wxAppCode__['components/mix-load-more/mix-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-load-more/mix-load-more.wxml']=$gwx('./components/mix-load-more/mix-load-more.wxml');

__wxAppCode__['components/mix-loading/mix-loading.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-loading/mix-loading.wxml']=$gwx('./components/mix-loading/mix-loading.wxml');

__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxml']=$gwx('./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarTitleText":"正在聊天","navigationBarBackgroundColor":"#3B7ED5","navigationBarTextStyle":"white","usingComponents":{"chat-msg":"/components/chatmsg"}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/chat/index.json']={"navigationBarTitleText":"信息中心","navigationBarBackgroundColor":"#3B7ED5","navigationBarTextStyle":"white","usingComponents":{"mt-footer":"/components/footer","chat-msg":"/components/chatmsg"}};
__wxAppCode__['pages/chat/index.wxml']=$gwx('./pages/chat/index.wxml');

__wxAppCode__['pages/component/component.json']={"navigationBarTitleText":"组件使用示例","bounce":"none","usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more"}};
__wxAppCode__['pages/component/component.wxml']=$gwx('./pages/component/component.wxml');

__wxAppCode__['pages/details/details.json']={"navigationBarTitleText":"详情","navigationBarTextStyle":"white","bounce":"none","usingComponents":{"mix-loading":"/components/mix-loading/mix-loading"}};
__wxAppCode__['pages/details/details.wxml']=$gwx('./pages/details/details.wxml');

__wxAppCode__['pages/details/videoDetails.json']={"navigationBarTitleText":"","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{"mix-loading":"/components/mix-loading/mix-loading"}};
__wxAppCode__['pages/details/videoDetails.wxml']=$gwx('./pages/details/videoDetails.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","bounce":"none","usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more","mix-advert":"/components/mix-advert/vue/mix-advert"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.json']={"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#3B7ED5","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/shilu-login/blog.json']={"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/blog.wxml']=$gwx('./pages/shilu-login/blog.wxml');

__wxAppCode__['pages/shilu-login/forget.json']={"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/forget.wxml']=$gwx('./pages/shilu-login/forget.wxml');

__wxAppCode__['pages/shilu-login/login.json']={"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/login.wxml']=$gwx('./pages/shilu-login/login.wxml');

__wxAppCode__['pages/shilu-login/reg.json']={"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/reg.wxml']=$gwx('./pages/shilu-login/reg.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"3a6f":function(e,n,t){"use strict";(function(e){t("b554"),t("921b");var n=u(t("66fd")),o=u(t("c1e3"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,o.default.mpType="app";var a=new n.default(c({},o.default));e(a).$mount()}).call(this,t("6e42")["createApp"])},"6f33":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},b2fe:function(e,n,t){"use strict";t.r(n);var o=t("6f33"),u=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=u.a},be88:function(e,n,t){"use strict";var o=t("c921"),u=t.n(o);u.a},c1e3:function(e,n,t){"use strict";t.r(n);var o=t("b2fe");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("be88");var c,r,a=t("2877"),f=Object(a["a"])(o["default"],c,r,!1,null,null,null);n["default"]=f.exports},c921:function(e,n,t){}},[["3a6f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, l = t[0], u = t[1], m = t[2], c = 0, s = []; c < l.length; c++) {
      o = l[c], i[o] && s.push(i[o][0]), i[o] = 0;
    }

    for (r in u) {
      Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    }

    p && p(t);

    while (s.length) {
      s.shift()();
    }

    return a.push.apply(a, m || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== i[l] && (r = !1);
      }

      r && (a.splice(t--, 1), e = u(u.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      a = [];

  function l(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
  }

  u.e = function (e) {
    var t = [],
        n = {
      "components/mix-advert/vue/mix-advert": 1,
      "components/mix-pulldown-refresh/mix-pulldown-refresh": 1,
      "components/mix-load-more/mix-load-more": 1,
      "components/mix-loading/mix-loading": 1,
      "components/chatmsg": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/mix-advert/vue/mix-advert": "components/mix-advert/vue/mix-advert",
        "components/mix-pulldown-refresh/mix-pulldown-refresh": "components/mix-pulldown-refresh/mix-pulldown-refresh",
        "components/mix-load-more/mix-load-more": "components/mix-load-more/mix-load-more",
        "components/mix-loading/mix-loading": "components/mix-loading/mix-loading",
        "components/chatmsg": "components/chatmsg",
        "components/footer": "components/footer"
      }[e] || e) + ".wxss", i = u.p + r, a = document.getElementsByTagName("link"), l = 0; l < a.length; l++) {
        var m = a[l],
            c = m.getAttribute("data-href") || m.getAttribute("href");
        if ("stylesheet" === m.rel && (c === r || c === i)) return t();
      }

      var s = document.getElementsByTagName("style");

      for (l = 0; l < s.length; l++) {
        m = s[l], c = m.getAttribute("data-href");
        if (c === r || c === i) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || i,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], p.parentNode.removeChild(p), n(a);
      }, p.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var a = new Promise(function (t, n) {
        r = i[e] = [t, n];
      });
      t.push(r[2] = a);
      var m,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = l(e), m = function m(t) {
        c.onerror = c.onload = null, clearTimeout(s);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, n[1](a);
          }

          i[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        m({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = m, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, u.m = e, u.c = r, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      u.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var m = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = m.push.bind(m);
  m.push = t, m = m.slice();

  for (var s = 0; s < m.length; s++) {
    t(m[s]);
  }

  var p = c;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return T}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return I}),n.d(e,"mapGetters",function(){return N}),n.d(e,"mapActions",function(){return V}),n.d(e,"createNamespacedHelpers",function(){return P});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,p);var l=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;f(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){f([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new u(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,function(e,i){r.register(t.concat(i),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,b(this,i,[],this._modules.root),m(this,i),n.forEach(function(t){return t(e)}),h.config.devtools&&o(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function g(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;b(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,o={};a(i,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:o}),h.config.silent=s,t.strict&&S(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function b(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!o&&!i){var s=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){h.set(s,c,r.state)})}var u=r.context=_(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,i=e.handler||e;x(t,r,i,u)}),r.forEachGetter(function(e,n){var r=a+n;j(t,r,e,u)}),r.forEachChild(function(r,o){b(t,e,n.concat(o),r,i)})}function _(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return k(t.state,n)}}}),i}function A(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function w(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function x(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return c(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function j(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function O(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function T(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),b(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),g(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),g(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var E=U(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=q(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),I=U(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=q(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),N=U(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||q(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),V=U(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=q(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),P=function(t){return{mapState:E.bind(null,t),mapGetters:N.bind(null,t),mapMutations:I.bind(null,t),mapActions:V.bind(null,t)}};function D(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function U(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function q(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:d,install:T,version:"3.0.1",mapState:E,mapMutations:I,mapGetters:N,mapActions:V,createNamespacedHelpers:P};e["default"]=R},3137:function(t,e,n){"use strict";(function(e){var r=i(n("b16f"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=new r.default;a.init("chatdb","chat"),t.exports=o({table:"chatdb",indexKey:"pmIndexList",pmKey:"pmList",chatKey:"chatList",indexList:function(){return e.getStorageSync(this.indexKey)},add:function(t){a.setTable("chat").insert(t),a.setTable("chatIndex").replaceInsert(t,{gid:t.gid,uid:t.uid,touid:t.touid})},addGroup:function(t){a.setTable("chat").insert(t),a.setTable("chatIndex").replaceInsert(t,{gid:t.gid})},msgList:function(t){return a.setTable("chat").getAll(t)}},"indexList",function(t){return a.setTable("chatIndex").getAll(t)})}).call(this,n("6e42")["default"])},"439e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,r=null,i=null;function o(e,r){var i={top:"0px",left:"0px",backgroundColor:"#333333",height:"100%",width:"100%"};n=new plus.nativeObj.View("advert",i);var o={tag:"img",id:"adverBg",src:e,position:{top:"0px",left:"0px",width:"100%",height:"100%"}};n.draw([o]),n.show(),n.addEventListener("click",function(){t.navigateTo({url:r}),s()},!1)}function a(e){var n=t.getSystemInfoSync().statusBarHeight||34,o=t.getSystemInfoSync().windowWidth,a={top:n+10+"px",left:o-t.upx2px(170)+"px",height:"28px",width:"68px"};r=new plus.nativeObj.View("adverts",a);var c={tag:"rect",id:"rect",rectStyles:{color:"rgba(0,0,0,0.4)",radius:"14px"},position:{top:0,left:0,width:"68px",height:"28px"}},u={tag:"font",id:"adverText",text:"跳过",position:{top:"0px",left:"0px",width:"68px",height:"28px",zIndex:"11"},textStyles:{size:"15px",color:"#fff"}};u.text="跳过 ".concat(e),r.draw([c,u]),r.show(),i=setInterval(function(){e--,e<1?s():(u.text="跳过 ".concat(e),r.draw([u,c]))},1e3),r.addEventListener("click",function(){s()},!1)}function s(){i&&clearInterval(i),i=null,n.close(),r.close()}function c(t){var e=t.timer,n=t.url,r=t.imageUrl;e=e||4,o(r,n),a(e)}var u={initAdvert:c};e.default=u}).call(this,n("6e42")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function p(t){return"[object Object]"===u.call(t)}function l(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=A(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),j=A(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=A(function(t){return t.replace(S,"-$1").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function T(t,e){return t.bind(e)}var E=Function.prototype.bind?T:O;function I(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function V(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function P(t,e,n){}var D=function(t,e,n){return!1},U=function(t){return t};function q(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return q(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return q(t[n],e[n])})}catch(u){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(q(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:P,parsePlatformTagName:U,mustUseProp:D,async:!0,_lifecycleHooks:F},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function C(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function z(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+G.source+".$_\\d]");function L(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},J="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Z&&WXEnvironment.platform.toLowerCase(),X=J&&window.navigator.userAgent.toLowerCase(),$=X&&/msie|trident/.test(X),tt=(X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),et=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===Q),nt=(X&&/chrome\/\d+/.test(X),X&&/phantomjs/.test(X),X&&X.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===K&&(K=!J&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ot=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=P,pt=0,lt=function(){this.id=pt++,this.subs=[]};function ft(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){m(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,_t=Object.create(bt),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=bt[t];z(_t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(_t),xt=!0;function jt(t){xt=t}var St=function(t){this.value=t,this.dep=new lt,this.vmCount=0,z(t,"__ob__",this),Array.isArray(t)?(Y?t.push!==t.__proto__.push?Ot(t,_t,wt):kt(t,_t):Ot(t,_t,wt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function Ot(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];z(t,o,e[o])}}function Tt(t,e){var n;if(c(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:xt&&!it()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,i){var o=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Tt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Vt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&Tt(e),o.notify())}})}}function It(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Nt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Vt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Vt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Tt(t[e])};var Pt=H.optionMergeStrategies;function Dt(t,e){if(!e)return t;for(var n,r,i,o=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&p(r)&&p(i)&&Dt(r,i):It(t,n,i));return t}function Ut(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Dt(r,i):i}:e?t?function(){return Dt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function qt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Mt(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Pt.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},F.forEach(function(t){Pt[t]=qt}),B.forEach(function(t){Pt[t+"s"]=Mt}),Pt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in N(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Pt.props=Pt.methods=Pt.inject=Pt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Pt.provide=Ut;var Bt=function(t,e){return void 0===e?t:e};function Ft(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=x(i),a[o]={type:null})}else if(p(n))for(var s in n)i=n[s],o=x(s),a[o]=p(i)?i:{type:i};else 0;t.props=a}}function Ht(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(p(n))for(var o in n){var a=n[o];r[o]=p(a)?N({from:o},a):{from:a}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ct(t,e,n){if("function"===typeof e&&(e=e.options),Ft(e,n),Ht(e,n),Gt(e),!e._base&&(e.extends&&(t=Ct(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ct(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)_(t,o)||s(o);function s(r){var i=Pt[r]||Bt;a[r]=i(t[r],e[r],n,r)}return a}function zt(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var o=x(n);if(_(i,o))return i[o];var a=j(o);if(_(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Wt(t,e,n,r){var i=e[t],o=!_(n,t),a=n[t],s=Jt(Boolean,i.type);if(s>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===k(t)){var c=Jt(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Lt(r,i,t);var u=xt;jt(!0),Tt(a),jt(u)}return a}function Lt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Kt(e.type)?r.call(t):r}}function Kt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Yt(t,e){return Kt(t)===Kt(e)}function Jt(t,e){if(!Array.isArray(e))return Yt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Yt(e[n],t))return n;return-1}function Zt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Xt(ei,r,"errorCaptured hook")}}}Xt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(t){return Zt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Zt(ei,r,i)}return o}function Xt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&$t(ei,null,"config.errorHandler")}$t(t,e,n)}function $t(t,e,n){if(!J&&!Z||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(P)}}else if($||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Zt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function pe(t){le(t,ue),ue.clear()}function le(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var fe=A(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Qt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var c,u,p,l;for(c in t)u=t[c],p=e[c],l=fe(c),r(u)||(r(p)?(r(u.fns)&&(u=t[c]=he(u,s)),o(l.once)&&(u=t[c]=a(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==p&&(p.fns=u,t[c]=p));for(c in e)r(t[c])&&(l=fe(c),i(l.name,e[c],l.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var p=k(u);ye(a,c,u,p,!0)||ye(a,s,u,p,!1)}return a}}function ye(t,e,n,r,o){if(i(e)){if(_(e,n))return t[n]=e[n],o||delete e[n],!0;if(_(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[gt(t)]:Array.isArray(t)?_e(t):void 0}function be(t){return i(t)&&i(t.text)&&a(t.isComment)}function _e(t,e){var n,a,c,u,p=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=p.length-1,u=p[c],Array.isArray(a)?a.length>0&&(a=_e(a,(e||"")+"_"+n),be(a[0])&&be(u)&&(p[c]=gt(u.text+a[0].text),a.shift()),p.push.apply(p,a)):s(a)?be(u)?p[c]=gt(u.text+a):""!==a&&p.push(gt(a)):be(a)&&be(u)?p[c]=gt(u.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),p.push(a)));return p}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=xe(t.$options.inject,t);e&&(jt(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),jt(!0))}function xe(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&_(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function je(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Se)&&delete n[u];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Oe(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Te(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),z(i,"$stable",a),z(i,"$key",s),z(i,"$hasNormal",o),i}function Oe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Te(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),p=u.next();while(!p.done)n.push(e(p.value,n.length)),p=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ie(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=N(N({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ne(t){return zt(this.$options,"filters",t,!0)||U}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Pe(t,e,n,r,i){var o=H.keyCodes[e]||n;return i&&r&&!H.keyCodes[e]?Ve(i,r):o?Ve(o,t):r?k(r)!==e:void 0}function De(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=V(n));var a=function(a){if("class"===a||"style"===a||g(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(a),u=k(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var p=t.on||(t.on={});p["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ue(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function qe(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Me(t[r],e+"_"+r,n);else Me(t,e,n)}function Me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(p(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Fe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Fe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function He(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ge(t,e){return"string"===typeof t?e+t:t}function Ce(t){t._o=qe,t._n=v,t._s=d,t._l=Ee,t._t=Ie,t._q=q,t._i=R,t._m=Ue,t._f=Ne,t._k=Pe,t._b=De,t._v=gt,t._e=yt,t._u=Fe,t._g=Be,t._d=He,t._p=Ge}function ze(t,e,r,i,a){var s,c=this,u=a.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var p=o(u._compiled),l=!p;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=xe(u.inject,i),this.slots=function(){return c.$slots||ke(t.scopedSlots,c.$slots=je(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),p&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function We(t,e,r,o,a){var s=t.options,c={},u=s.props;if(i(u))for(var p in u)c[p]=Wt(p,u,e||n);else i(r.attrs)&&Ke(c,r.attrs),i(r.props)&&Ke(c,r.props);var l=new ze(r,c,a,o,t),f=s.render.call(null,l._c,l);if(f instanceof dt)return Le(f,r,l.parent,s,l);if(Array.isArray(f)){for(var h=me(f)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Le(h[v],r,l.parent,s,l);return d}}function Le(t,e,n,r,i){var o=mt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ke(t,e){for(var n in e)t[x(n)]=e[n]}Ce(ze.prototype);var Ye={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ye.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,xn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;On(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Cn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?In(e,!0):e.$destroy())}},Je=Object.keys(Ye);function Ze(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var p;if(r(t.cid)&&(p=t,t=dn(p,u),void 0===t))return hn(p,e,n,a,s);e=e||{},fr(t),i(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(o(t.options.functional))return We(t,l,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Xe(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:s,children:a},p);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Xe(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],i=e[r],o=Ye[r];i===o||i&&i._merged||(e[r]=i?$e(o,i):o)}}function $e(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return yt();if(i(n)&&i(n.is)&&(e=n.is),!e)return yt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=me(r):o===en&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),a=H.isReservedTag(e)?new dt(H.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=zt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ze(c,n,t,r,e)):a=Ze(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&an(c,e,n)}}function sn(t){c(t.style)&&pe(t.style),c(t.class)&&pe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=je(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;Et(t,"$attrs",o&&o.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var un,pn=null;function ln(t){Ce(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=ke(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{pn=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Zt(ei,e,"render"),t=e._vnode}finally{pn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=i,t}}function fn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hn(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=pn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,u=null,p=null;n.$on("hook:destroyed",function(){return m(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==p&&(clearTimeout(p),p=null))},f=M(function(n){t.resolved=fn(n,e),s?a.length=0:l(!0)}),d=M(function(e){i(t.errorComp)&&(t.error=!0,l(!0))}),v=t(f,d);return c(v)&&(h(v)?r(t.resolved)&&v.then(f,d):h(v.component)&&(v.component.then(f,d),i(v.error)&&(t.errorComp=fn(v.error,e)),i(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),i(v.timeout)&&(p=setTimeout(function(){p=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){un.$on(t,e)}function bn(t,e){un.$off(t,e)}function _n(t,e){var n=un;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function An(t,e,n){un=t,de(e,n||{},mn,bn,_n,t),un=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?I(n):n;for(var r=I(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Qt(n[o],e,r,e,i)}return e}}var xn=null;function jn(t){var e=xn;return xn=t,function(){xn=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=jn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){jt(!1);for(var p=t._props,l=t.$options._propKeys||[],f=0;f<l.length;f++){var h=l[f],d=t.$options.props;p[h]=Wt(h,d,e,t)}jt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),u&&(t.$slots=je(o,i.context),t.$forceUpdate())}function Tn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,Tn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Nn(t,"activated")}}function In(t,e){if((!e||(t._directInactive=!0,!Tn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)In(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Qt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Vn=[],Pn=[],Dn={},Un=!1,qn=!1,Rn=0;function Mn(){Rn=Vn.length=Pn.length=0,Dn={},Un=qn=!1}var Bn=Date.now;if(J&&!$){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Fn.now()})}function Hn(){var t,e;for(Bn(),qn=!0,Vn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Vn.length;Rn++)t=Vn[Rn],t.before&&t.before(),e=t.id,Dn[e]=null,t.run();var n=Pn.slice(),r=Vn.slice();Mn(),zn(n),Gn(r),ot&&H.devtools&&ot.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Nn(r,"updated")}}function Cn(t){t._inactive=!1,Pn.push(t)}function zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Wn(t){var e=t.id;if(null==Dn[e]){if(Dn[e]=!0,qn){var n=Vn.length-1;while(n>Rn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);Un||(Un=!0,ce(Hn))}}var Ln=0,Kn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=L(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Kn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Zt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&pe(t),ht(),this.cleanupDeps()}return t},Kn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Kn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Kn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},Kn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Zt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Kn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Kn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Yn={enumerable:!0,configurable:!0,get:P,set:P};function Jn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Zn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&or(t,e.methods),e.data?Xn(t):Tt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||jt(!1);var a=function(o){i.push(o);var a=Wt(o,e,n,t);Et(r,o,a),o in t||Jn(t,"_props",o)};for(var s in e)a(s);jt(!0)}function Xn(t){var e=t.$options.data;e=t._data="function"===typeof e?$n(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&_(r,o)||C(o)||Jn(t,"_data",o)}Tt(e,!0)}function $n(t,e){ft();try{return t.call(e,e)}catch(ei){return Zt(ei,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Kn(t,a||P,P,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Yn.get=r?rr(e):ir(n),Yn.set=P):(Yn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):P,Yn.set=n.set||P),Object.defineProperty(t,e,Yn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:E(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=It,t.prototype.$delete=Nt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Kn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Zt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var ur=0;function pr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Ct(fr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),gn(e),cn(e),Nn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Zn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fr(t){var e=t.options;if(t.super){var n=fr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=hr(t);i&&N(t.extendOptions,i),e=t.options=Ct(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=I(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Ct(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ct(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=N({},a.options),i[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function _r(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ar(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function xr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=Ar(a.componentOptions);s&&!e(s)&&jr(n,o,r,i)}}}function jr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,m(n,e)}pr(dr),cr(dr),wn(dr),kn(dr),ln(dr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){xr(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){xr(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=Ar(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!wr(o,r))||a&&r&&wr(a,r))return e;var s=this,c=s.cache,u=s.keys,p=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[p]?(e.componentInstance=c[p].componentInstance,m(u,p),u.push(p)):(c[p]=e,u.push(p),this.max&&u.length>parseInt(this.max)&&jr(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Or={KeepAlive:kr};function Tr(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:N,mergeOptions:Ct,defineReactive:Et},t.set=It,t.delete=Nt,t.nextTick=ce,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,N(t.options.components,Or),vr(t),yr(t),gr(t),_r(t)}Tr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:ze}),dr.version="2.6.10";var Er="[object Array]",Ir="[object Object]";function Nr(t,e){var n={};return Vr(t,e),Pr(t,e,"",n),n}function Vr(t,e){if(t!==e){var n=Ur(t),r=Ur(e);if(n==Ir&&r==Ir){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Vr(o,e[i])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Vr(t[n],e)})}}function Pr(t,e,n,r){if(t!==e){var i=Ur(t),o=Ur(e);if(i==Ir)if(o!=Ir||Object.keys(t).length<Object.keys(e).length)Dr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Ur(o),c=Ur(a);if(s!=Er&&s!=Ir)o!=e[i]&&Dr(r,(""==n?"":n+".")+i,o);else if(s==Er)c!=Er?Dr(r,(""==n?"":n+".")+i,o):o.length<a.length?Dr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Pr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Ir)if(c!=Ir||Object.keys(o).length<Object.keys(a).length)Dr(r,(""==n?"":n+".")+i,o);else for(var u in o)Pr(o[u],a[u],(""==n?"":n+".")+i+"."+u,r)};for(var s in t)a(s)}else i==Er?o!=Er?Dr(r,n,t):t.length<e.length?Dr(r,n,t):t.forEach(function(t,i){Pr(t,e[i],n+"["+i+"]",r)}):Dr(r,n,t)}}function Dr(t,e,n){t[e]=n}function Ur(t){return Object.prototype.toString.call(t)}function qr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Vn.find(function(e){return t._watcher===e})}function Mr(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Zt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Br(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Fr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Br(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Nr(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,qr(n)})):qr(this)}};function Hr(){}function Gr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Hr),t.$options.render||(t.$options.render=Hr),"mp-toutiao"!==t.mpHost&&Nn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Kn(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}},!0),n=!1,t}function Cr(t,e){return i(t)||i(e)?zr(t,Wr(e)):""}function zr(t,e){return t?e?t+" "+e:t:e||""}function Wr(t){return Array.isArray(t)?Lr(t):c(t)?Kr(t):"string"===typeof t?t:""}function Lr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Wr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Kr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Yr=A(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?V(t):"string"===typeof t?Yr(t):t}var Zr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Xr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:I(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Zr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Qt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return p(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Cr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?N(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(c(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var $r=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==$r.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;$r.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=$r}dr.prototype.__patch__=Fr,dr.prototype.$mount=function(t,e){return Gr(this,t,e)},ti(dr),Xr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=je,e.createPage=xe,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return h(t)||f(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function g(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function b(t,e){return v.call(t,e)}function _(){}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=A(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),j=["invoke","success","fail","complete","returnValue"],S={},k={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?T(n):n}function T(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function I(t,e){Object.keys(e).forEach(function(n){-1!==j.indexOf(n)&&y(e[n])&&(t[n]=O(t[n],e[n]))})}function N(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==j.indexOf(n)&&y(e[n])&&E(t[n],e[n])})}function V(t,e){"string"===typeof t&&m(e)?I(k[t]||(k[t]={}),e):m(t)&&I(S,t)}function P(t,e){"string"===typeof t?m(e)?N(k[t],e):delete k[t]:m(t)&&N(S,t)}function D(t){return function(e){return t(e)||e}}function U(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function q(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(D(i));else{var o=i(e);if(U(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){q(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function M(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,p(S.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,p(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function F(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=B(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=q(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(i))})}return e.apply(void 0,[R(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var H={returnValue:function(t){return U(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},G=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,C=/^create|Manager$/,z=/^on/;function W(t){return C.test(t)}function L(t){return G.test(t)}function K(t){return z.test(t)}function Y(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(W(t)||L(t)||K(t))}function Z(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return y(n.success)||y(n.fail)||y(n.complete)?M(t,F.apply(void 0,[t,e,n].concat(i))):M(t,Y(new Promise(function(r,o){F.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,X=750,$=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,$="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/X*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==et&&$?.5:1:t<0?-n:n}var it={promiseInterceptor:H},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:V,removeInterceptor:P}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function pt(t,e,n){return function(r){return e(ft(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var o=!0===i?e:{};for(var a in y(n)&&(n=n(e,o)||{}),e)if(b(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,o)),s?g(s)?o[s]=e[a]:m(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=pt(t,e[a],r):i||(o[a]=e[a]);return o}return y(e)&&(e=pt(t,e,r)),e}function ft(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(b(at,t)){var n=at[t];return n?function(e,r){var i=n;y(n)&&(i=n(e)),e=lt(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return L(t)?ft(t,a,i.returnValue,W(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(i),y(r)&&r(i)}}vt.forEach(function(t){dt[t]=yt(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function bt(){return mt(gt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return mt(gt(),"$off",Array.prototype.slice.call(arguments))}function At(){return mt(gt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return mt(gt(),"$emit",Array.prototype.slice.call(arguments))}var xt=Object.freeze({$on:bt,$off:_t,$once:At,$emit:wt});function jt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;jt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}var Ot=Object.freeze({getSubNVueById:kt,requireNativePlugin:jt}),Tt=Page,Et=Component,It=/:/g,Nt=A(function(t){return x(t.replace(It,"-"))});function Vt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Nt(n)].concat(i))}}}function Pt(t,e){var n=e[t];e[t]=n?function(){Vt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Vt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("onLoad",t),Tt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("created",t),Et(t)};var Dt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ut(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){b(n,e)&&(t[e]=n[e])})}function qt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return qt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){qt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Mt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ft(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ht(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||b(n,t)||(n[t]=r[t])}),n}var Gt=[String,Number,Boolean,Object,Array,null];function Ct(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function zt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Lt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Lt(t.props,!0)}))}),a}function Wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Lt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ct(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var i=r["default"];y(i)&&(i=i()),r.type=Wt(e,r.type),n[e]={type:-1!==Gt.indexOf(r.type)?r.type:null,value:i,observer:Ct(e)}}else{var o=Wt(e,r);n[e]={type:-1!==Gt.indexOf(o)?o:null,observer:Ct(e)}}}),n}function Kt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},b(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Yt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Yt(t,e)}),r}function Zt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Zt(t)):"string"===typeof t&&b(s,t)?c.push(s[t]):c.push(t)}),c}var Xt="~",$t="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Kt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===$t;r=s?r.slice(1):r;var c=r.charAt(0)===Xt;r=c?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}o.push(a.apply(i,Qt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Ut(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Rt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function pe(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function le(t){return re(t,{mocks:ie,initRefs:ue})}var fe=["onUniNViewMessage"];function he(t){var e=le(t);return Rt(e,fe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Mt(r.default,t),s=o(a,2),c=s[0],u=s[1],p={options:{multipleSlots:!0,addGlobalClass:!0},data:Ht(u,r.default.prototype),behaviors:zt(u,ae),properties:Lt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ft(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:pe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,c]}function ye(t){return ve(t,{isPage:se,initRelation:ce})}function ge(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function be(t,e){e.isPage,e.initRelation;var n=ge(t);return Rt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function _e(t){return be(t,{isPage:se,initRelation:ce})}me.push.apply(me,Dt);var Ae=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return Rt(e.methods,Ae),e}function xe(t){return Component(we(t))}function je(t){return Component(ge(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(ot).forEach(function(t){Se[t]=ot[t]}),Object.keys(xt).forEach(function(t){Se[t]=xt[t]}),Object.keys(Ot).forEach(function(t){Se[t]=Z(t,Ot[t])}),Object.keys(wx).forEach(function(t){(b(wx,t)||b(at,t))&&(Se[t]=Z(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=xt),wx.createApp=de,wx.createPage=xe,wx.createComponent=je;var ke=Se,Oe=ke;e.default=Oe}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var l=e.version,f="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function b(){var e="";if("n"===x()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(g)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,e)}catch(n){t.setStorageSync(g,m)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},A=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},j=function(){var e="";return"wx"!==x()&&"qq"!==x()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===x()?plus.runtime.version:""},k=function(){var t=x(),e="";return"n"===t&&(e=plus.runtime.channel),e},O=function(e){var n=x(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},T="First__Visit__Time",E="Last__Visit__Time",I=function(){var e=t.getStorageSync(T),n=0;return e?n=e:(n=w(),t.setStorageSync(T,n),t.removeStorageSync(E)),n},N=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,w()),n},V="__page__residence__time",P=0,D=0,U=function(){return P=w(),"n"===x()&&t.setStorageSync(V,w()),P},q=function(){return D=w(),"n"===x()&&(P=t.getStorageSync(V)),D-P},R="Total__Visit__Count",M=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},B=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},F=0,H=0,G=function(){var t=(new Date).getTime();return F=t,H=0,t},C=function(){var t=(new Date).getTime();return H=t,t},z=function(t){var e=0;if(0!==F&&(e=H-F),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},W=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===x()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},L=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===x()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},K=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Y=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("f53d").default,Z=n("9d38").default||n("9d38"),Q=t.getSystemInfoSync(),X=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:b(),ut:x(),mpn:j(),ak:Z.appid,usv:l,v:S(),ch:k(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return p(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){C();var t=z("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,C();var n=z();G();var r=L(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=L(this),e=W();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return G(),this.__licationShow=!1,void(this._lastPageRoute=t);C(),this._lastPageRoute=t;var n=z("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}G()}},{key:"_pageHide",value:function(){if(!this.__licationHide){C();var t=z("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=O(t.scene),this.statData.fvts=I(),this.statData.lvts=N(),this.statData.tvc=M(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=w(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===x()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===x()&&t.setStorageSync("__UNI__STAT__DATA",a),!(q()<y)||n){var s=this._reportingRequestData;"n"===x()&&(s=t.getStorageSync("__UNI__STAT__DATA")),U();var c=[],u=[],p=[],f=function(t){var e=s[t];e.forEach(function(e){var n=A(e);0===t?c.push(n):3===t?p.push(n):u.push(n)})};for(var h in s)f(h);c.push.apply(c,u.concat(p));var d={usv:l,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===x()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(B(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){Y(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),$=function(e){function n(){var e;return c(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),p(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),p(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,U(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,K(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,K(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(X),tt=$.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,p=e.regeneratorRuntime;if(p)u&&(t.exports=p);else{p=e.regeneratorRuntime=u?t.exports:{},p.wrap=_;var l="suspendedStart",f="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(V([])));m&&m!==r&&i.call(m,a)&&(y=m);var b=j.prototype=w.prototype=Object.create(y);x.prototype=b.constructor=j,j.constructor=x,j[c]=x.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},p.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[s]=function(){return this},p.AsyncIterator=k,p.async=function(t,e,n,r){var i=new k(_(t,e,n,r));return p.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},p.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},p.values=V,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:V(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=O(t,n,a),o}function A(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function x(){}function j(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,o,a){var s=A(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=A(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=A(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function V(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9d38":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__DA7D006"};e.default=r},a34a:function(t,e,n){t.exports=n("bbdd")},b16f:function(t,e,n){"use strict";(function(e){t.exports=function(){return{db:"chat",table:"msg",init:function(t,e){this.db=t,this.table=e},setTable:function(t){return this.table=t,this},find:function(t){},getAll:function(t){var n=this.db+"."+this.table,r=e.getStorageSync(n);if(void 0==t)return r;var i=t,o=new Array;if(r)for(var a,s=0;s<r.length;s++){a=r[s];var c=!0;for(var u in i)a.hasOwnProperty(u)&&a[u]==i[u]||(c=!1);c&&o.push(a)}return o},insert:function(t){var n=this.db+"."+this.table,r=e.getStorageSync(n);if(r)r.push(t),e.setStorageSync(n,r);else{var i=new Array;i.push(t),e.setStorageSync(n,i)}},delete:function(t){},replaceInsert:function(t,n){var r=this.db+"."+this.table,i=e.getStorageSync(r);if(i){for(var o=new Array,a=0;a<i.length;a++){var s=i[a],c=!0;for(var u in n)if(s.hasOwnProperty(u)&&s[u]!=n[u]){c=!1;break}c||o.unshift(s)}if(0==o.length){p=new Array;p.push(t),e.setStorageSync(r,p)}else o.unshift(t),e.setStorageSync(r,o)}else{var p=new Array;p.push(t),e.setStorageSync(r,p)}}}}}).call(this,n("6e42")["default"])},b554:function(t,e,n){},b635:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=[{name:"关注",id:"1"},{name:"推荐",id:"2"},{name:"体育",id:"3"},{name:"热点",id:"4"},{name:"财经",id:"5"},{name:"娱乐",id:"6"},{name:"军事",id:"7"},{name:"历史",id:"8"},{name:"本地",id:"9"}],i=[{id:1,title:"从亲密无间到相爱相杀，这就是人类一败涂地的真相",author:"TapTap",images:["http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg","http://fc-feed.cdn.bcebos.com/0/pic/dc4b0610241d7016279f4f4652ea0886.jpg","http://fc-feed.cdn.bcebos.com/0/pic/0f6effa42536fb5c2ca945bd46c59335.jpg"],time:"2小时前",type:3},{id:2,title:"别再玩手机了，赶紧学前端，晚一年能少掉5根头发",author:"爱考过",images:["https://paimgcdn.baidu.com/v.777468F4BED7DDDA5B4958C671B07659?src=http%3A%2F%2Ffc-feed.cdn.bcebos.com%2F0%2Fpic%2F0bcc93ff9222cafa4526c980c17f69ec.jpg&rz=ar_3_370_245"],time:"30分钟前",type:1},{id:3,title:"将府公园成居民身边“大绿肺”",author:"新京报",images:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1692298215,2450965851&fm=15&gp=0.jpg"],time:"2小时前",type:3},{id:4,title:"骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠",author:"神说要唱歌",images:["data:image/jpeg;base64,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"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"2019-04-10 11:43",type:2},{id:5,title:"继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”",author:"全球加盟网",images:["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2892004605,2174659864&fm=26&gp=0.jpg"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"5分钟前",type:3},{id:6,title:"奔驰车主哭诉维权续：双方再次协商无果",author:"环球网",images:[],time:"5分钟前",type:3},{id:7,title:"靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计",author:"车品",images:["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2133231534,4242817610&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB42BC55E2A26076B2D1301030060C6","https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1276936674,3021787485&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB02FC40B00064332AD45170300D0C7","https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1909353310,863816541&fm=173&app=49&f=JPEG?w=218&h=146&s=25F67E844C002445437DE8810300E0D3"],time:"2019-04-14 ：10:58",type:3},{id:8,title:"程序员浪漫起来有多可怕，看完这3段代码眼睛湿润了!",author:"车品",images:["http://p3-tt.bytecdn.cn/list/pgc-image/15394993934784aeea82ef5","http://p1-tt.bytecdn.cn/list/pgc-image/153949939338547b7a69cf6","http://p1-tt.bytecdn.cn/list/509a000211b25f210c77"],time:"2019-04-14 ：10:58",type:3}],o=[{src:"http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。"},{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"楼上说的好有道理。"}],a={tabList:r,newsList:i,evaList:o};e.default=a},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cf5f:function(t,e,n){"use strict";t.exports={emoHost:"http://wss.deituicms.com/",emoList:function(){for(var t=new Array,e=0;e<48;e++)t.push("emo"+e);return t},emoIndex:function(t){t=t.replace(/\s*/g,"");for(var e=this.emoList(),n=0;n<e.length;n++)if(e[n]==t)return n;return-1},decodeEmo:function(t){var e=this;t+=" ";var n=t.match(/(\\[^\s]+)\s/g);if(null!=n)for(var r=0;r<n.length;r++){var i=n[r].replace("\\","");i=n[r].replace("\\","");var o=this.emoIndex(i);o>=0&&(t=t.replace(n[r],'<img src="'+e.emoHost+"/emo/jx2/"+(o+1)+'.gif" />'))}return t}}},e397:function(t,e,n){"use strict";(function(e,n){t.exports={incList:[],mp:null,url:"",play:function(t){var r;t=t.replace(/\.\.\/\.\.\//g,"./"),null==this.mp?(r=e.createInnerAudioContext(),this.mp=r,r.src=t,this.url=t,r.onCanplay(function(){r.play()}),r.onPlay(function(){}),r.onError(function(t){})):(r=this.mp,this.url!=t?(r.src=t,this.url=t,r.onCanplay(function(){console.log(n("canplay"," at common\\audio.class.js:35")),r.play()})):r.paused?(r.play(),console.log(n("play"," at common\\audio.class.js:41"))):(r.pause(),console.log(n("stop"," at common\\audio.class.js:44"))))}}}).call(this,n("6e42")["default"],n("0de9")["default"])},f53d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"首页",bounce:"none"},"pages/component/component":{navigationBarTitleText:"组件使用示例",bounce:"none"},"pages/details/details":{navigationBarTitleText:"详情",navigationBarTextStyle:"white",bounce:"none"},"pages/details/videoDetails":{navigationBarTitleText:"",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/blog":{navigationBarTitleText:"首页",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/forget":{navigationBarTitleText:"首页",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/login":{navigationBarTitleText:"首页",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/reg":{navigationBarTitleText:"首页",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/me/me":{navigationBarTitleText:"个人中心",navigationBarBackgroundColor:"#3B7ED5",navigationBarTextStyle:"white"},"pages/chat/index":{navigationBarTitleText:"信息中心",navigationBarBackgroundColor:"#3B7ED5",navigationBarTextStyle:"white"},"pages/chat/chat":{navigationBarTitleText:"正在聊天",navigationBarBackgroundColor:"#3B7ED5",navigationBarTextStyle:"white"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"新闻模版",navigationBarBackgroundColor:"#ec706b",backgroundColor:"#f8f8f8"}};e.default=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/chatmsg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chatmsg.js';

define('components/chatmsg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chatmsg"], {
  "7f3f": function f3f(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var c = o(e("cf5f")),
          u = o(e("e397"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var f = {
        props: {
          content: ""
        },
        data: function data() {
          return {
            nodes: []
          };
        },
        created: function created() {
          var t,
              n = this.content,
              e = new RegExp(/\[([^=]*)=([^\]]*)\]/g, "g");
          t = e.exec(n), t ? (n = t[2], this.nodes = [{
            type: t[1],
            src: n,
            content: ""
          }]) : this.nodes = [{
            type: "text",
            content: c.default.decodeEmo(this.content)
          }];
        },
        methods: {
          playMusic: function playMusic(t) {
            u.default.play(t);
          },
          downFile: function downFile(n) {
            t.downloadFile({
              url: n,
              success: function success(t) {
                t.statusCode;
              }
            });
          },
          getGift: function getGift(t) {
            this.$emit("call-parent", {
              type: "gift",
              giftid: t
            });
          }
        }
      };
      n.default = f;
    }).call(this, e("6e42")["default"]);
  },
  "9d9c": function d9c(t, n, e) {},
  c37b: function c37b(t, n, e) {
    "use strict";

    var c = e("9d9c"),
        u = e.n(c);
    u.a;
  },
  cd7b: function cd7b(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("7f3f"),
        u = e.n(c);

    for (var o in c) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  ee8d: function ee8d(t, n, e) {
    "use strict";

    var c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return c;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  f0d0: function f0d0(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("ee8d"),
        u = e("cd7b");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("c37b");
    var f = e("2877"),
        i = Object(f["a"])(u["default"], c["a"], c["b"], !1, null, null, null);
    n["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chatmsg-create-component', {
  'components/chatmsg-create-component': function componentsChatmsgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f0d0"));
  }
}, [['components/chatmsg-create-component']]]);
});
require('components/chatmsg.js');
__wxRoute = 'components/footer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/footer.js';

define('components/footer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/footer"], {
  "5c39": function c39(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("e77b"),
        a = e("7dc2");

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    var r = e("2877"),
        o = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  "7dc2": function dc2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("bfe0"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  bfe0: function bfe0(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        props: {
          tab: ""
        },
        data: function data() {
          return {
            tabActive: ""
          };
        },
        created: function created() {
          this.tabActive = this.tab;
        },
        methods: {
          goIndex: function goIndex() {
            n.reLaunch({
              url: "../../pages/index/index"
            });
          },
          goContact: function goContact() {
            n.reLaunch({
              url: "../../pages/contact/index"
            });
          },
          goUser: function goUser() {
            n.reLaunch({
              url: "../../pages/user/index"
            });
          },
          goNews: function goNews() {
            n.reLaunch({
              url: "../../pagesblog/sblog/index"
            });
          },
          goMatch: function goMatch() {
            n.reLaunch({
              url: "../../pages/match/index"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  e77b: function e77b(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/footer-create-component', {
  'components/footer-create-component': function componentsFooterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5c39"));
  }
}, [['components/footer-create-component']]]);
});
require('components/footer.js');
__wxRoute = 'components/mix-advert/vue/mix-advert';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-advert/vue/mix-advert.js';

define('components/mix-advert/vue/mix-advert.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-advert/vue/mix-advert"], {
  "08af": function af(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("778c"),
        i = n.n(r);

    for (var u in r) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(u);
    }

    e["default"] = i.a;
  },
  "10b4": function b4(t, e, n) {},
  "285e": function e(t, _e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(_e, "a", function () {
      return r;
    }), n.d(_e, "b", function () {
      return i;
    });
  },
  "778c": function c(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(n("439e"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var u = {
      data: function data() {
        return {
          advertState: 0,
          interval: null,
          timer: 8
        };
      },
      props: {
        timedown: {
          type: Number,
          default: 8
        },
        imageUrl: {
          type: String,
          default: "/static/advert.jpg"
        },
        url: {
          type: String,
          default: "/pages/test1/test1"
        }
      },
      created: function created() {
        this.timer = this.timedown;
      },
      methods: {
        initAdvert: function initAdvert() {
          this.clickEvent;
          var t = {
            timer: this.timer,
            imageUrl: this.imageUrl,
            url: this.url
          };
          r.default.initAdvert(t);
        }
      }
    };
    e.default = u;
  },
  ae5f: function ae5f(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("285e"),
        i = n("08af");

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    n("ce7e");
    var a = n("2877"),
        c = Object(a["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  ce7e: function ce7e(t, e, n) {
    "use strict";

    var r = n("10b4"),
        i = n.n(r);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-advert/vue/mix-advert-create-component', {
  'components/mix-advert/vue/mix-advert-create-component': function componentsMixAdvertVueMixAdvertCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ae5f"));
  }
}, [['components/mix-advert/vue/mix-advert-create-component']]]);
});
require('components/mix-advert/vue/mix-advert.js');
__wxRoute = 'components/mix-load-more/mix-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-load-more/mix-load-more.js';

define('components/mix-load-more/mix-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-load-more/mix-load-more"], {
  "9b98": function b98(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  a519: function a519(t, e, n) {},
  ae1f: function ae1f(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "mix-load-more",
      props: {
        status: {
          type: Number,
          default: 0
        },
        text: {
          type: Array,
          default: function _default() {
            return ["上拉显示更多", "正在加载...", "没有更多数据了"];
          }
        }
      }
    };
    e.default = u;
  },
  c269: function c269(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("9b98"),
        a = n("e453");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("d148");
    var o = n("2877"),
        f = Object(o["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  d148: function d148(t, e, n) {
    "use strict";

    var u = n("a519"),
        a = n.n(u);
    a.a;
  },
  e453: function e453(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("ae1f"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-load-more/mix-load-more-create-component', {
  'components/mix-load-more/mix-load-more-create-component': function componentsMixLoadMoreMixLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c269"));
  }
}, [['components/mix-load-more/mix-load-more-create-component']]]);
});
require('components/mix-load-more/mix-load-more.js');
__wxRoute = 'components/mix-loading/mix-loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-loading/mix-loading.js';

define('components/mix-loading/mix-loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-loading/mix-loading"], {
  "0b5a": function b5a(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4bbd"),
        a = e("ce36");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("0fc3");
    var o = e("2877"),
        c = Object(o["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "0ed7": function ed7(t, n, e) {},
  "0fc3": function fc3(t, n, e) {
    "use strict";

    var u = e("0ed7"),
        a = e.n(u);
    a.a;
  },
  "25af": function af(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        top: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {};
      },
      methods: {}
    };
    n.default = u;
  },
  "4bbd": function bbd(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  ce36: function ce36(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("25af"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-loading/mix-loading-create-component', {
  'components/mix-loading/mix-loading-create-component': function componentsMixLoadingMixLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0b5a"));
  }
}, [['components/mix-loading/mix-loading-create-component']]]);
});
require('components/mix-loading/mix-loading.js');
__wxRoute = 'components/mix-pulldown-refresh/mix-pulldown-refresh';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-pulldown-refresh/mix-pulldown-refresh.js';

define('components/mix-pulldown-refresh/mix-pulldown-refresh.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"], {
  "0412": function _(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("0f59"),
        a = n.n(i);

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "0f59": function f59(e, t, n) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i,
          a,
          r,
          s,
          o = 500,
          u = 0,
          f = {
        props: {
          top: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            pageDeviation: 0,
            pageTransition: 0,
            refreshReady: !1,
            refreshing: !1
          };
        },
        computed: {
          pageTop: function pageTop() {
            return e.upx2px(this.top);
          }
        },
        created: function created() {
          e.getSystemInfo({
            success: function success(e) {
              console.log(n(e, " at components\\mix-pulldown-refresh\\mix-pulldown-refresh.vue:74")), r = e.platform, o = e.windowHeight;
            }
          });
        },
        methods: {
          pageTouchstart: function pageTouchstart(e) {
            s = !1, this.pageTransition = 0, i = e.touches[0].pageY;
          },
          pageTouchmove: function pageTouchmove(e) {
            s || (a = .4 * (e.touches[0].pageY - i), a >= 0 && (this.pageDeviation = a, this.$emit("setEnableScroll", !1)), a >= 50 && !1 === this.refreshReady ? this.refreshReady = !0 : a < 50 && !0 === this.refreshReady && (this.refreshReady = !1), "ios" === r && e.touches[0].pageY > o + 10 && this.pageTouchend());
          },
          pageTouchend: function pageTouchend() {
            s = !0, 0 !== a && (this.pageTransition = .3, a >= 50 ? this.startPulldownRefresh() : this.pageDeviation = 0, !0 === this.refreshReady && (this.refreshReady = !1), this.$emit("setEnableScroll", !0), i = a = 0);
          },
          startPulldownRefresh: function startPulldownRefresh() {
            +new Date() - u < 100 || (u = +new Date(), this.refreshing = !0, this.pageDeviation = e.upx2px(90), this.$emit("refresh"));
          },
          endPulldownRefresh: function endPulldownRefresh() {
            this.refreshing = !1, this.pageDeviation = e.upx2px(0);
          }
        }
      };
      t.default = f;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  "71fd": function fd(e, t, n) {},
  "8a0e": function a0e(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("a5eb"),
        a = n("0412");

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    n("bbca");
    var s = n("2877"),
        o = Object(s["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  a5eb: function a5eb(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  bbca: function bbca(e, t, n) {
    "use strict";

    var i = n("71fd"),
        a = n.n(i);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component', {
  'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component': function componentsMixPulldownRefreshMixPulldownRefreshCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8a0e"));
  }
}, [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]]);
});
require('components/mix-pulldown-refresh/mix-pulldown-refresh.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1606:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"383c":function(e,t,n){"use strict";n.r(t);var r=n("1606"),a=n("e715");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("c9a1");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},"7a42":function(e,t,n){},ab2a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),a=o(n("b635"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,u,"next",e)}function u(e){i(o,r,a,s,u,"throw",e)}s(void 0)})}}var u,c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},l=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},d=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},f=0,h=!1,b={components:{mixPulldownRefresh:l,mixLoadMore:d,mixAdvert:c},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[]}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=s(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:f=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 2:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){this.$refs.mixAdvert.initAdvert()},methods:{loadTabbars:function(){var e=a.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadNewsList("add")},loadNewsList:function(e){var t=this,n=this.tabBars[this.tabCurrentIndex];if("add"===e){if(2===n.loadMoreStatus)return;n.loadMoreStatus=1}else"refresh"===e&&(n.refreshing=!0);setTimeout(function(){var r=a.default.newsList;r.sort(function(e,t){return Math.random()>.5?-1:1}),"refresh"===e&&(n.newsList=[]),r.forEach(function(e){e.id=parseInt(1e4*Math.random()),n.newsList.push(e)}),"refresh"===e&&(t.$refs.mixPulldownRefresh&&t.$refs.mixPulldownRefresh.endPulldownRefresh(),n.refreshing=!1,n.loadMoreStatus=0),"add"===e&&(n.loadMoreStatus=n.newsList.length>40?2:0)},600)},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},r=t.videoSrc?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(r,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){this.loadNewsList("refresh")},loadMore:function(){this.loadNewsList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=s(r.default.mark(function e(t){var n,a,o,i,s,c=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(h&&(clearTimeout(h),h=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof u){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:u=e.sent;case 7:u.scrollLeft,a=0,o=0,i=0;case 11:if(!(i<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+i);case 14:s=e.sent,a+=s.width,i===n&&(o=s.width);case 17:i++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),h=setTimeout(function(){c.scrollLeft=a-o/2>f/2?a-o/2-f/2:0,"object"===typeof t&&(c.tabCurrentIndex=n),c.tabCurrentIndex=n;var e=c.tabBars[c.tabCurrentIndex];0!==c.tabCurrentIndex&&!0!==e.loaded&&(c.loadNewsList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,r){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=b}).call(this,n("6e42")["default"])},c9a1:function(e,t,n){"use strict";var r=n("7a42"),a=n.n(r);a.a},df4b:function(e,t,n){"use strict";(function(e){n("b554"),n("921b");r(n("66fd"));var t=r(n("383c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e715:function(e,t,n){"use strict";n.r(t);var r=n("ab2a"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a}},[["df4b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/component/component';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/component.js';

define('pages/component/component.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/component"],{1515:function(n,e,t){"use strict";t.r(e);var o=t("6508"),a=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=a.a},6508:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(t.bind(null,"8a0e"))},a=function(){return t.e("components/mix-load-more/mix-load-more").then(t.bind(null,"c269"))},r={components:{mixPulldownRefresh:o,mixLoadMore:a},data:function(){return{list:[],loadMoreStatus:0}},onLoad:function(){this.loadData("add")},onReachBottom:function(){this.loadData("add")},methods:{loadData:function(n){var e=this;"add"===n&&(this.loadMoreStatus=1),setTimeout(function(){"refresh"===n&&(e.list=[]);for(var t=e.list.length,o=t;o<t+10;o++)e.list.push(o);"add"===n&&(e.loadMoreStatus=0),"refresh"===n&&e.$refs.mixPulldownRefresh&&e.$refs.mixPulldownRefresh.endPulldownRefresh()},1e3)},onPulldownReresh:function(){this.loadData("refresh")}}};e.default=r},6684:function(n,e,t){},"7f68":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},"8fc0":function(n,e,t){"use strict";(function(n){t("b554"),t("921b");o(t("66fd"));var e=o(t("bad3"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},a707:function(n,e,t){"use strict";var o=t("6684"),a=t.n(o);a.a},bad3:function(n,e,t){"use strict";t.r(e);var o=t("7f68"),a=t("1515");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("a707");var u=t("2877"),l=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=l.exports}},[["8fc0","common/runtime","common/vendor"]]]);
});
require('pages/component/component.js');
__wxRoute = 'pages/details/details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/details/details.js';

define('pages/details/details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0a99":function(t,n,a){"use strict";var e=a("4c67"),i=a.n(e);i.a},2702:function(t,n,a){"use strict";a.r(n);var e=a("ab31"),i=a("8a7e");for(var p in i)"default"!==p&&function(t){a.d(n,t,function(){return i[t]})}(p);a("0a99");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=o.exports},"2bcb":function(t,n,a){"use strict";(function(t){a("b554"),a("921b");e(a("66fd"));var n=e(a("2702"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},"4c67":function(t,n,a){},"6ee7":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=p(a("a34a")),i=p(a("b635"));function p(t){return t&&t.__esModule?t:{default:t}}function r(t,n,a,e,i,p,r){try{var o=t[p](r),d=o.value}catch(s){return void a(s)}o.done?n(d):Promise.resolve(d).then(e,i)}function o(t){return function(){var n=this,a=arguments;return new Promise(function(e,i){var p=t.apply(n,a);function o(t){r(p,e,i,o,d,"next",t)}function d(t){r(p,e,i,o,d,"throw",t)}o(void 0)})}}var d=function(){return a.e("components/mix-loading/mix-loading").then(a.bind(null,"0b5a"))},s={components:{mixLoading:d},data:function(){return{loading:!0,detailData:{},newsList:[],evaList:[]}},onLoad:function(t){this.detailData=JSON.parse(t.data),this.loadNewsList(),this.loadEvaList()},methods:{loadNewsList:function(){var t=o(e.default.mark(function t(){var n,a=this;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.default.newsList;case 2:n=t.sent,setTimeout(function(){n.sort(function(t,n){return Math.random()>.5?-1:1}),n.length=5,n.forEach(function(t){a.newsList.push(t)}),a.detailData.flow='<div style="font-size:15px;color: #555;line-height: 25px"><h1 style="margin: 0px; font-weight: normal; font-size: 26px; font-family: 微软雅黑; text-align: center; line-height: 30px; white-space: normal; background-color: rgb(255, 255, 255);"><br/></h1><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><img style="width: 100%;max-width: 100% !important;" src="http://app.shundecity.com/data/upload/yangtata/20190414/1555206583915888.jpg" border="0" hspace="0" vspace="0" data-bd-imgshare-binded="1" style="margin: 0px; padding: 0px; border: none; max-width: 90%;"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;">市委常委、顺德区委书记郭文海赴勒流调研。<br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; text-align: center;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　昨日（4月13日），市委常委、顺德区委书记郭文海利用周末时间到勒流街道江村、黄连社区调研村级工业园改造、乡村振兴工作。郭文海表示，村级工业园改造和城乡形态提升是勒流目前面临的两大任务，要下定决心以城产人融合标准做好村级工业园连片改造的规划，健全生态体系建设；文化振兴是乡村振兴战略的源头活水，勒流要挖掘弘扬乡村民俗文化，为乡村振兴战略提供坚实的文化支撑，同时要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造美丽文明乡村。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　勒流今年以五金创新小镇·滨水生态区、中部产业园及富安工业区为着力点，重点推进龙眼、江村、新安三个村级工业园区的改造，吸引优质产业集聚，打造南、中、北三大产业集中布局组团，借助村级工业园改造的契机，让勒流的产业布局和城市面貌得到优化和提升。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　其中，江村工业区计划由改造方分单元进行连片改造，以绿色环保为导向，突出智能制造，打造“环境科技产业基地”；新安工业区初步划分为东、中、西三个改造区域，通过“退二进三”，建设集居住、商业、娱乐于一体的生活服务区，为富安工业区及周边村居提供配套设施服务。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海表示，勒流位于顺德的地理中心，是顺德的腹地，且工业基础雄厚，工业产值在顺德镇街中排名第三，发展潜力巨大，在村级工业园改造升级过程中，要下定决心做好连片改造的规划，腾出空间完善城市配套，以城产人融合标准健全生态体系建设，形成经济效益、生态效益、社会效益的三重丰收，为进驻企业提供优质的工作生活环境。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　古韵绵绵，河水潺潺，组成一幅优美的岭南水乡画卷。在千年古村黄连，文化营造和水乡生态修复、乡土美食推广、民宿建设构成了黄连振兴乡村，建设美丽文明村居的四大发展思路。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海参观了画家艺术村、藩侯何公祠、广绣坊。目前，黄连画家艺术村设有8个入驻画家工作室和10个流动流动艺术家创作驿站，画家村艺术活动非常活跃；黄连广绣作为顺德的传统文化和国家级非物质文化遗产，如今在黄连广绣坊开展有师资培训班、绣娘屋、亲子夏令营、广绣传承进校园等活动，激活、创新广绣技艺。值得一提的是，黄连社区把“厕所革命”与生态文明建设有机结合，优化提升人居环境和文旅公共服务水平。</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">　　郭文海分别与画家村驻村画家及广绣坊学员亲切交流，并“点赞”黄连社区乡村振兴工作的开展成效。郭文海表示，文化振兴是乡村振兴战略的源头活水，千年古村黄连拥有深厚的民俗文化底蕴，需要挖掘、弘扬和发扬光大，将黄连的民俗文化做成黄连特色，必然会为乡村振兴提供坚实的文化支撑；同时，黄连的乡村振兴工作也离不开党建引领和社区营造，要充分发挥党建引领作用，广泛发动群众参与社区营造，自己家园自己建，打造“近者悦，远者来”的美丽文明乡村。（姚易　通讯员顺宣）</p><p><br/></p></div>',a.loading=!1},1e3);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),loadEvaList:function(){var t=o(e.default.mark(function t(){return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.default.evaList;case 2:this.evaList=t.sent;case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=s},"8a7e":function(t,n,a){"use strict";a.r(n);var e=a("6ee7"),i=a.n(e);for(var p in e)"default"!==p&&function(t){a.d(n,t,function(){return e[t]})}(p);n["default"]=i.a},ab31:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})}},[["2bcb","common/runtime","common/vendor"]]]);
});
require('pages/details/details.js');
__wxRoute = 'pages/details/videoDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/details/videoDetails.js';

define('pages/details/videoDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/videoDetails"],{"0b7f":function(t,n,e){},"0d80":function(t,n,e){"use strict";var a=e("0b7f"),i=e.n(a);i.a},"9dc1":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");a(e("66fd"));var n=a(e("caaf"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},abdc:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},b1c2:function(t,n,e){"use strict";e.r(n);var a=e("de23"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},caaf:function(t,n,e){"use strict";e.r(n);var a=e("abdc"),i=e("b1c2");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("0d80");var r=e("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},de23:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a")),u=r(e("b635"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,a,i,u,r){try{var o=t[u](r),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(a,i)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(a,i){var u=t.apply(n,e);function r(t){o(u,a,i,r,c,"next",t)}function c(t){o(u,a,i,r,c,"throw",t)}r(void 0)})}}var s=function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"0b5a"))},d={components:{mixLoading:s},data:function(){return{loading:!0,detailData:{},newsList:[],evaList:[]}},onLoad:function(n){console.log(t(n.data," at pages\\details\\videoDetails.vue:120")),this.detailData=JSON.parse(n.data),this.loadNewsList(),this.loadEvaList()},methods:{loadNewsList:function(){var t=c(i.default.mark(function t(){var n,e=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.newsList;case 2:n=t.sent,setTimeout(function(){n.sort(function(t,n){return Math.random()>.5?-1:1}),n.forEach(function(t){t.images.length>0&&e.newsList.push(t)}),e.loading=!1},1e3);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),loadEvaList:function(){var t=c(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.evaList;case 2:this.evaList=t.sent;case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),redirectToDetail:function(){a.redirectTo({url:"details"})}}};n.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["9dc1","common/runtime","common/vendor"]]]);
});
require('pages/details/videoDetails.js');
__wxRoute = 'pages/shilu-login/blog';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/blog.js';

define('pages/shilu-login/blog.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/blog"],{"0ea0":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},2840:function(e,t,n){"use strict";n.r(t);var u=n("0ea0"),r=n("c674");for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);var a=n("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"95ec":function(e,t,n){"use strict";(function(e){n("b554"),n("921b");u(n("66fd"));var t=u(n("2840"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c5e2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{articleurl:"",webviewStyles:{progress:{color:"#FF7200"}}}},onLoad:function(e){this.articleurl="协议网址"}};t.default=u},c674:function(e,t,n){"use strict";n.r(t);var u=n("c5e2"),r=n.n(u);for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);t["default"]=r.a}},[["95ec","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/blog.js');
__wxRoute = 'pages/shilu-login/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/forget.js';

define('pages/shilu-login/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/forget"],{"4bf3":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},s=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return s})},"62c8":function(t,n,o){"use strict";o.r(n);var e=o("4bf3"),s=o("c2b7");for(var a in s)"default"!==a&&function(t){o.d(n,t,function(){return s[t]})}(a);o("8490");var c=o("2877"),i=Object(c["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=i.exports},8392:function(t,n,o){"use strict";(function(t){var o,e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{phoneno:"",second:0,code:"",showPassword:!1,password:""}},onLoad:function(){o=this},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},getcode:function(){this.second>0||t.request({url:"http://***/getcode.html",data:{phoneno:this.phoneno,code_type:"reg"},method:"POST",dataType:"json",success:function(n){200!=n.data.code?(t.showToast({title:n.data.msg,icon:"none"}),o.second=0):(t.showToast({title:n.data.msg}),o.second=60,e=setInterval(function(){o.second--,0==o.second&&clearInterval(e)},1e3))}})},bindLogin:function(){11==this.phoneno.length?this.password.length<6?t.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?t.request({url:"http://***/forget.html",data:{phoneno:this.phoneno,password:this.password,code:this.code},method:"POST",dataType:"json",success:function(n){200!=n.data.code?t.showToast({title:n.data.msg,icon:"none"}):(t.showToast({title:n.data.msg}),setTimeout(function(){t.navigateBack()},1500))}}):t.showToast({icon:"none",title:"验证码不正确"}):t.showToast({icon:"none",title:"手机号不正确"})}}};n.default=s}).call(this,o("6e42")["default"])},8490:function(t,n,o){"use strict";var e=o("fb57"),s=o.n(e);s.a},ba96:function(t,n,o){"use strict";(function(t){o("b554"),o("921b");e(o("66fd"));var n=e(o("62c8"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},c2b7:function(t,n,o){"use strict";o.r(n);var e=o("8392"),s=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=s.a},fb57:function(t,n,o){}},[["ba96","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/forget.js');
__wxRoute = 'pages/shilu-login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/login.js';

define('pages/shilu-login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/login"],{"100a":function(t,n,e){"use strict";e.r(n);var o=e("bd74"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},"17cb":function(t,n,e){"use strict";e.r(n);var o=e("d20a"),a=e("100a");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("8ad7");var i=e("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"51e4":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");o(e("66fd"));var n=o(e("17cb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8ad7":function(t,n,e){"use strict";var o=e("c127"),a=e.n(o);a.a},bd74:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i={onLoad:function(){this},data:function(){return{phoneno:"",password:""}},methods:a({},(0,o.mapMutations)(["login"]),{bindLogin:function(){var n=this;11==this.phoneno.length?this.password.length<6?t.showToast({icon:"none",title:"密码不正确"}):t.request({url:"http://***/login.html",data:{phoneno:this.phoneno,password:this.password},method:"POST",dataType:"json",success:function(e){200!=e.data.code?t.showToast({title:e.data.msg,icon:"none"}):(t.setStorageSync("user_data",JSON.stringify(e.data.data)),n.login(),t.navigateBack())}}):t.showToast({icon:"none",title:"手机号不正确"})}})};n.default=i}).call(this,e("6e42")["default"])},c127:function(t,n,e){},d20a:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["51e4","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/login.js');
__wxRoute = 'pages/shilu-login/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/reg.js';

define('pages/shilu-login/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/reg"],{"048f":function(t,n,o){},"5ea5":function(t,n,o){"use strict";var e=o("048f"),s=o.n(e);s.a},"65ce":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},s=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return s})},"6c4f":function(t,n,o){"use strict";(function(t){o("b554"),o("921b");e(o("66fd"));var n=e(o("82cd"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},"783d":function(t,n,o){"use strict";(function(t){var o,e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={onLoad:function(){o=this},onUnload:function(){clearInterval(e),this.second=0},data:function(){return{phoneno:"",password:"",code:"",invitation:"",xieyi:!0,showPassword:!1,second:0}},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},xieyitong:function(){this.xieyi=!this.xieyi},getcode:function(){this.second>0||(this.second=60,t.request({url:"http://***/getcode.html",data:{phoneno:this.phoneno,code_type:"reg"},method:"POST",dataType:"json",success:function(n){200!=n.data.code?t.showToast({title:n.data.msg,icon:"none"}):(t.showToast({title:n.data.msg}),e=setInterval(function(){o.second--,0==o.second&&clearInterval(e)},1e3))}}))},bindLogin:function(){0!=this.xieyi?11==this.phoneno.length?this.password.length<6?t.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?t.request({url:"http://***/reg.html",data:{phoneno:this.phoneno,password:this.password,code:this.code,invitation:this.invitation},method:"POST",dataType:"json",success:function(n){200!=n.data.code?t.showToast({title:n.data.msg,icon:"none"}):(t.showToast({title:n.data.msg}),setTimeout(function(){t.navigateBack()},1500))}}):t.showToast({icon:"none",title:"验证码不正确"}):t.showToast({icon:"none",title:"手机号不正确"}):t.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}};n.default=s}).call(this,o("6e42")["default"])},"82cd":function(t,n,o){"use strict";o.r(n);var e=o("65ce"),s=o("a339");for(var i in s)"default"!==i&&function(t){o.d(n,t,function(){return s[t]})}(i);o("5ea5");var a=o("2877"),c=Object(a["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},a339:function(t,n,o){"use strict";o.r(n);var e=o("783d"),s=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=s.a}},[["6c4f","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/reg.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"1e7a":function(t,n,e){"use strict";e.r(n);var a=e("86e9"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},"3cb3":function(t,n,e){"use strict";e.r(n);var a=e("e3ab"),o=e("1e7a");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("a5fb");var i=e("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},4015:function(t,n,e){},"86e9":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{avatarUrl:"../../static/icon/avatar.png",nickName:"点击登录",token:"",loginState:""}},onLoad:function(){},onShow:function(){this.token=t.getStorageSync("token")},methods:{BindGetUserInfo:function(){if(1==this.loginState);else{console.log(e("还没登录"," at pages\\me\\me.vue:116")),t.navigateTo({url:"../shilu-login/login"})}}}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},a5fb:function(t,n,e){"use strict";var a=e("4015"),o=e.n(a);o.a},e3ab:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},ef0b:function(t,n,e){"use strict";(function(t){e("b554"),e("921b");a(e("66fd"));var n=a(e("3cb3"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["ef0b","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
__wxRoute = 'pages/chat/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/index.js';

define('pages/chat/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/index"],{1597:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"2cf2":function(t,n,e){"use strict";e.r(n);var i=e("1597"),u=e("9e53");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);var a=e("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"70b8":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");i(e("66fd"));var n=i(e("2cf2"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8da9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("3137"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/footer").then(e.bind(null,"5c39"))},o=function(){return Promise.all([e.e("common/vendor"),e.e("components/chatmsg")]).then(e.bind(null,"f0d0"))},a={components:{mtFooter:u,chatMsg:o},data:function(){return{userList:[],groupList:[],indexList:[],isLoad:!1}},onLoad:function(){var n=this;if(!this.app.isLogin())return t.reLaunch({url:"../login/index"}),!1;this.pmList(),setTimeout(function(){n.isLoad=!0},1e3)},onShow:function(){this.isLoad&&this.pmList()},methods:{playMusic:function(t){audioClass.play(t)},goItem:function(n){0!=n.gid||""!=n.gid?t.navigateTo({url:"chat?groupid="+n.groupid}):t.navigateTo({url:"pm?uuid="+n.touserid})},pmList:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=im_msg_index",success:function(n){t.indexList=n.data.list}})}}};n.default=a}).call(this,e("6e42")["default"])},"9e53":function(t,n,e){"use strict";e.r(n);var i=e("8da9"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a}},[["70b8","common/runtime","common/vendor"]]]);
});
require('pages/chat/index.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{"1d28":function(e,t,a){"use strict";a.r(t);var o=a("4034"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);t["default"]=n.a},4034:function(t,a,o){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;s(o("3137"));var i=s(o("cf5f"));function s(e){return e&&e.__esModule?e:{default:e}}var c,r,u,l,p=function(){return Promise.all([o.e("common/vendor"),o.e("components/chatmsg")]).then(o.bind(null,"f0d0"))},d=Date.parse(new Date),f="",h=!1,g=0,m=!1,v={duration:1e4,sampleRate:44100,numberOfChannels:1,encodeBitRate:192e3,format:"mp3",frameSize:50},T={components:{chatMsg:p},data:function(){return{per_page:0,list:[],content:"",wsConn:!1,group:{},user:{},toUser:{},emoList:[],sch:0,oldsch:0,scrollTop:1e4,emoClass:"",aRecordClass:"",aRecordIng:!1,time:0}},onPageScroll:function(e){0!=e.scrollTop||m||(this.getList(),m=!0,setTimeout(function(){m=!1},2e3))},onLoad:function(a){var o=t.getSystemInfoSync();g=o.windowHeight;var s=this;this.emoList=i.default.emoList(),r=a.groupid,this.getPage(),l=wx.getRecorderManager(),l.onStop(function(e){e.tempFilePath&&s.recordUpload(e.tempFilePath)}),l.onError(function(t){console.log(n(e," at pages\\chat\\chat.vue:157"))})},onHide:function(){if(h)return!1;u.close({success:function(e){}})},onShow:function(){if(h)return!1;var e=this;this.wsConn&&e.wsInit()},methods:{scrollY:function(e){this.sch=e.detail.scrollHeight},scTop:function(e){0==this.oldsch&&(this.oldsch=this.sch);var t=this;t.scrollTop=0,this.getList()},getList:function(){this.time=Date.parse(new Date)/1e3;var e=this;if(0==this.per_page)return!1;e.app.get({url:e.app.apiHost+"/module.php?m=im_group&a=home&ajax=1&groupid="+r,data:{per_page:e.per_page},success:function(a){e.per_page=a.data.per_page;var o=e.list;for(var n in a.data.list)o.unshift(a.data.list[n]);e.list=o,setTimeout(function(){e.scrollTop+=10},100),setTimeout(function(){var a=t.createSelectorQuery().in(e);a.select("#main").boundingClientRect(function(a){if(0==e.oldsch)t.pageScrollTo({scrollTop:1e5,duration:1});else{var o=a.height-e.oldsch-g+160;t.pageScrollTo({scrollTop:o,duration:1})}e.oldsch=a.height}).exec()},10)}})},getPage:function(){var e=this;e.app.get({url:e.app.apiHost+"/module.php?m=im_group&a=home&ajax=1&groupid="+r,success:function(a){c=a.data.ws_gid,e.per_page=a.data.per_page,e.group=a.data.group,e.user=a.data.user,t.setNavigationBarTitle({title:a.data.group.title}),e.list=a.data.list,e.wsInit(),setTimeout(function(){e.wsConn=!0},1e3);setTimeout(function(){var a=t.createSelectorQuery().in(e);a.select("#main").boundingClientRect(function(t){e.oldsch=t.height}).exec(),t.pageScrollTo({scrollTop:e.scrollTop+10,duration:1})},30)}})},wsInit:function(){var e=this;this.wsConn&&u.close(),u=t.connectSocket({url:e.app.wsHost,complete:function(e){}}),u.onOpen(function(t){var a=JSON.stringify({type:"login",k:d,gid:c,appGroupId:e.group.groupid,content:"login"});u.send({data:a})}),u.onError(function(e){}),u.onMessage(function(a){var o=JSON.parse(a.data);switch(console.log(n(o," at pages\\chat\\chat.vue:303")),o.type){case"login":break;case"say":var i={gid:c,imgurl:e.group.imgurl,appGroupId:e.group.groupid,appGroupTitle:e.group.title,uid:o.wsclient_from,touid:o.wsclient_to,content:o.content,time:o.time,isme:d==o.wsclient_from};e.addMsg(i),setTimeout(function(){t.pageScrollTo({scrollTop:1e6})},100);break}})},addMsg:function(e){var t=this.list;t.push(e),this.list=t},addEmo:function(e){e="\\"+e+" ",this.content+=e},send:function(e,t){var a,o=this;switch(e){case"pic":a="[img="+t+"]";break;case"audio":a="[audio="+t+"]";break;case"video":a="[video="+t+"]";break;case"file":a=t.substring(t.lastIndexOf("/")+1)+" [file="+t+"]";break;case"content":if(a=o.content,""==a)return!1;break}var i=JSON.stringify({wsclient_to:f,type:"say",gid:c,content:a,user_head:o.user.user_head,nickname:o.user.nickname,userid:o.user.userid});console.log(n(a," at pages\\chat\\chat.vue:373")),i,u.send({data:i}),o.saveHost(a),o.content=""},saveHost:function(e){var t=this;t.app.post({url:t.app.apiHost+"/module.php?m=im_group_msg&a=save",data:{groupid:t.group.groupid,content:e},success:function(e){console.log(n(e," at pages\\chat\\chat.vue:391"))}})},choiceImg:function(){var e=this;h=!0,t.chooseImage({sourceType:["album"],fail:function(e){h=!1},success:function(a){h=!1,t.uploadFile({url:e.app.apiHost+"/index.php?m=upload&a=img&ajax=1&authcode="+e.app.getAuthCode(),filePath:a.tempFilePaths[0],name:"upimg",dataType:"json",success:function(t){if(!t.data.error){var a=JSON.parse(t.data);a.error||e.send("pic",a.data.trueimgurl)}}})}})},choiceFile:function(){var e=this;h=!0,t.chooseImage({fail:function(e){h=!1},success:function(a){h=!1,t.uploadFile({url:e.app.apiHost+"/index.php?m=upload&a=upload&ajax=1&authcode="+e.app.getAuthCode(),filePath:a.tempFilePaths[0],name:"upimg",dataType:"json",success:function(t){if(!t.error){var a=JSON.parse(t.data);a.error||e.send("file",a.trueimgurl)}}})}})},catchImg:function(){var e=this;h=!0,t.chooseImage({fail:function(e){h=!1},sourceType:["camera"],success:function(a){h=!1,t.uploadFile({url:e.app.apiHost+"/index.php?m=upload&a=img&ajax=1&authcode="+e.app.getAuthCode(),filePath:a.tempFilePaths[0],name:"upimg",dataType:"json",success:function(t){if(!t.data.error){var a=JSON.parse(t.data);a.data.error||e.send("pic",a.data.trueimgurl)}}})}})},videoRecord:function(){var e=this;t.chooseVideo({count:1,success:function(a){t.uploadFile({url:e.app.apiHost+"/index.php?m=upload&a=uploadmp4&ajax=1&authcode="+e.app.getAuthCode(),filePath:a.tempFilePath,name:"upimg",dataType:"json",success:function(t){if(!t.data.error){var a=JSON.parse(t.data);a.error||e.send("video",a.trueimgurl)}}})}})},recordUpload:function(e){var a=this;console.log(n(e," at pages\\chat\\chat.vue:506")),t.uploadFile({url:a.app.apiHost+"/index.php?m=upload&a=uploadmp4&ajax=1&authcode="+a.app.getAuthCode(),filePath:e,fileType:"audio",name:"upimg",dataType:"json",success:function(e){if(!e.data.error){var t=JSON.parse(e.data);t.error||a.send("audio",t.trueimgurl)}}})},aRecordToggle:function(){this.aRecordIng?(console.log(n("stop"," at pages\\chat\\chat.vue:526")),l.stop(),this.aRecordIng=!1):(this.aRecordIng=!0,l.start(v))}}};a.default=T}).call(this,o("6e42")["default"],o("0de9")["default"])},"7f34":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.aRecordClass="flex-col"},e.e1=function(t){e.emoClass="flex-col"},e.e2=function(t){e.emoClass=""},e.e3=function(t){e.aRecordClass=""})},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},b8e3:function(e,t,a){},c31f:function(e,t,a){"use strict";(function(e){a("b554"),a("921b");o(a("66fd"));var t=o(a("c3c9"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},c3c9:function(e,t,a){"use strict";a.r(t);var o=a("7f34"),n=a("1d28");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("d4a0");var s=a("2877"),c=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},d4a0:function(e,t,a){"use strict";var o=a("b8e3"),n=a.n(o);n.a}},[["c31f","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/nvue/nvue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/nvue/nvue.js';

define('pages/nvue/nvue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/nvue/nvue.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

