(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){var r=n(17),a=n(21),o={bumblebee:new Uint8Array([10,8,184,134,67,54,134,68,149,63,130,97,225,6,234,62,248,202,23,224,158,52,167,109,111,127,49,29,112,122,89,67,224,231,160,206,49,229,19,59,137,210,56,196,150,208,82,222,107,225,68,82,129,158,102,217,245,225,214,239,160,212,245,23,190,202,2,135,161,200,137,76,48,60,110,52,99,109,59,19,28,136,156,124,200,242,197,26,175,236,149,149]),porcupine:new Uint8Array([94,67,85,18,187,176,223,102,157,118,115,198,24,24,76,101,41,133,228,64,138,139,78,243,28,215,194,42,69,149,146,148,94,58,57,27,120,40,203,12,145,50,119,91,229,228,236,17,68,64,161,15,208,145,131,40,124,108,90,196,241,13,60,6,39,197,137,109,204,106,94,191,161,177,18,71,163,87,167,128,155,161,216,48,144,180,87,29,66,241,223,131,180,22,246,140]),dragonfly:new Uint8Array([180,202,219,72,237,36,224,160,145,126,211,186,242,77,6,189,14,66,184,0,179,159,46,212,70,210,131,196,224,2,17,74,15,122,12,199,176,42,128,183,122,82,147,70,36,243,168,74,181,33,166,128,158,0,205,239,90,78,175,195,88,134,136,10,140,28,99,155,251,132,252,6,196,57,41,238,246,71,18,247,206,115,200,214,134,174,125,163,154,168,193,123,253,27,215,227]),caterpillar:new Uint8Array([120,231,40,255,224,239,196,76,82,230,133,110,205,75,12,109,170,112,45,213,8,96,99,61,243,102,150,85,187,45,184,130,198,49,202,23,31,14,243,252,53,157,11,57,192,75,250,4,19,8,118,6,222,124,211,214,135,255,2,74,66,36,249,246,123,46,78,33,84,79,147,134,244,74,216,163,234,251,158,195,252,148,126,230,166,159,251,183,33,224,63,61,58,0,60,29]),grasshopper:new Uint8Array([116,64,159,221,19,174,187,126,2,209,104,114,216,67,199,19,168,151,252,53,144,200,165,8,154,180,148,98,45,171,185,50,250,254,226,200,232,70,182,113,83,34,217,123,63,237,38,133,95,149,75,190,83,226,107,114,70,241,11,118,217,189,198,230,147,23,188,119,122,44,114,125,17,11,95,217,61,207,53,125,156,117,128,51,27,5,213,129,122,176,88,108,171,102,185,91]),terminator:new Uint8Array([154,153,78,115,141,206,15,151,142,224,141,86,186,62,43,69,219,41,115,205,243,107,220,0,226,97,64,48,69,103,17,33,14,118,88,94,25,226,7,79,225,171,88,217,116,84,40,35,167,82,156,102,95,77,223,27,23,165,100,192,252,209,22,34,0,137,19,152,43,34,41,195,122,201,21,118,58,109,205,28,161,185,242,3,67,48,98,9,128,162,38,210]),christina:new Uint8Array([58,207,95,94,244,150,34,98,103,194,190,32,254,141,15,78,50,85,47,200,13,72,132,165,89,38,237,45,134,214,103,71,122,161,2,20,143,217,79,209,31,133,153,205,0,175,12,242,187,77,109,3,50,150,156,20,71,204,31,203,39,96,184,212,210,41,234,138,228,171,132,199,31,89,95,251,150,210,181,229,78,106,1,97,226,150,111,63,176,7,115,210]),francesca:new Uint8Array([29,170,78,9,161,89,237,197,6,192,136,50,78,118,10,229,153,202,119,131,28,240,202,24,183,200,126,100,109,35,68,252,18,221,193,3,33,156,19,107,141,245,154,252,183,12,7,170,248,90,132,98,34,186,244,246,74,149,104,246,249,66,91,165,10,189,75,130,206,157,113,50,156,150,107,216,149,255,22,107,250,250,215,108,156,32,21,203,23,84,126,19,201,43,55,114])},i=Object.keys(o);function s(e){e&&e.hotword&&this.setHotword(e.hotword),e&&e.sensitivity&&this.sensitivity(e.sensitivity)}s.prototype.setHotword=function(e){if(null===e||""===e)this.hotword=null;else{if(!(i.indexOf(e)>-1))throw new Error("invalid hotword");this.hotword=e}},s.prototype.sensitivity=function(e){this.sensitivities=new Float32Array([e,1,1,1,1,1])},s.prototype.stop=function(){this.audioManager.stop()},s.prototype.createPorcupine=function(){return this.porcupine||(this.porcupine=r.create(Object.values(o),this.sensitivities)),this.porcupine},s.prototype.start=function(e){var t=this;this.audioManager=new a,this.audioManager.start(this.createPorcupine(),function(n){if(n>-1){var r=i[n];null===t.hotword?e&&e(r):r===t.hotword?e&&e(t.hotword):console.log("invalid key",n,r)}},function(e){console.log("error",e)})};var u=new s({hotword:"bumblebee",sensitivity:.5});e.exports=u},,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){var r,a,o,i,s,u,l=n(18)();l.then(function(e){r=e.cwrap("pv_porcupine_wasm_init","number",["number","number","number","number"]),a=e.cwrap("pv_porcupine_wasm_delete",["number"]),o=e.cwrap("pv_porcupine_wasm_process","number",["number","number"]),i=e.cwrap("pv_wasm_sample_rate","number",[])(),s=e.cwrap("pv_porcupine_wasm_frame_length","number",[])(),u=e.cwrap("pv_porcupine_wasm_version","string",[])()});e.exports={create:function(e,t){var n=Int32Array.from(e.map(function(e){return e.byteLength})),c=l._malloc(n.byteLength);new Uint8Array(l.HEAPU8.buffer,c,n.byteLength).set(new Uint8Array(n.buffer));var f=Uint32Array.from(e.map(function(e){var t=l._malloc(e.byteLength);return new Uint8Array(l.HEAPU8.buffer,t,e.byteLength).set(e),t})),p=l._malloc(f.byteLength);new Uint8Array(l.HEAPU8.buffer,p,f.byteLength).set(new Uint8Array(f.buffer));var m=l._malloc(t.byteLength);new Uint8Array(l.HEAPU8.buffer,m,t.byteLength).set(new Uint8Array(t.buffer));var y=r(e.length,c,p,m);if(0===y)throw new Error("failed to initialize porcupine.");var d=l._malloc(2*this.frameLength);return{release:function(){a(y),l._free(d)},process:function(e){new Uint8Array(l.HEAPU8.buffer,d,e.byteLength).set(new Uint8Array(e.buffer));var t=o(y,d);if(-2===t)throw new Error("porcupine failed to process audio");return t},sampleRate:i,frameLength:s,version:u}}}},function(e,t,n){(function(t,r){var a=function(e){var a,o="undefined"!==typeof(e=e||{})?e:{},i={};for(a in o)o.hasOwnProperty(a)&&(i[a]=o[a]);o.arguments=[],o.thisProgram="./this.program",o.quit=function(e,t){throw t},o.preRun=[],o.postRun=[];var s,u,l=!1,c=!1;l="object"===typeof window,c="function"===typeof importScripts,s="object"===typeof t&&!l&&!c,u=!l&&!s&&!c;var f,p,m="";function y(e){return o.locateFile?o.locateFile(e,m):m+e}s?(m=r+"/",o.read=function(e,t){var r;return f||(f=n(19)),p||(p=n(20)),e=p.normalize(e),r=f.readFileSync(e),t?r:r.toString()},o.readBinary=function(e){var t=o.read(e,!0);return t.buffer||(t=new Uint8Array(t)),_(t.buffer),t},t.argv.length>1&&(o.thisProgram=t.argv[1].replace(/\\/g,"/")),o.arguments=t.argv.slice(2),t.on("uncaughtException",function(e){if(!(e instanceof ce))throw e}),t.on("unhandledRejection",function(e,n){t.exit(1)}),o.quit=function(e){t.exit(e)},o.inspect=function(){return"[Emscripten Module object]"}):u?("undefined"!=typeof read&&(o.read=function(e){return read(e)}),o.readBinary=function(e){var t;return"function"===typeof readbuffer?new Uint8Array(readbuffer(e)):(_("object"===typeof(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs?o.arguments=scriptArgs:"undefined"!=typeof arguments&&(o.arguments=arguments),"function"===typeof quit&&(o.quit=function(e){quit(e)})):(l||c)&&(m=document.location.href.substring(0,document.location.href.lastIndexOf("/")+1),o.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},c&&(o.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),o.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},o.setWindowTitle=function(e){document.title=e});var d=o.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),h=o.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||d);for(a in i)i.hasOwnProperty(a)&&(o[a]=i[a]);i=void 0;var v=16;function w(e,t){return t||(t=v),e=Math.ceil(e/t)*t}var b={"f64-rem":function(e,t){return e%t},debugger:function(){}};new Array(0);var g=!1;function _(e,t){e||pe("Assertion failed: "+t)}function A(e){var t=o["_"+e];return _(t,"Cannot call unknown function "+e+", make sure it is exported"),t}var S={stackSave:function(){le()},stackRestore:function(){ue()},arrayToC:function(e){var t,n,r=se(e.length);return t=e,n=r,R.set(t,n),r},stringToC:function(e){var t=0;if(null!==e&&void 0!==e&&0!==e){var n=1+(e.length<<2);!function(e,t,n){!function(e,t,n,r){if(!(r>0))return 0;for(var a=n+r-1,o=0;o<e.length;++o){var i=e.charCodeAt(o);if(i>=55296&&i<=57343){var s=e.charCodeAt(++o);i=65536+((1023&i)<<10)|1023&s}if(i<=127){if(n>=a)break;t[n++]=i}else if(i<=2047){if(n+1>=a)break;t[n++]=192|i>>6,t[n++]=128|63&i}else if(i<=65535){if(n+2>=a)break;t[n++]=224|i>>12,t[n++]=128|i>>6&63,t[n++]=128|63&i}else if(i<=2097151){if(n+3>=a)break;t[n++]=240|i>>18,t[n++]=128|i>>12&63,t[n++]=128|i>>6&63,t[n++]=128|63&i}else if(i<=67108863){if(n+4>=a)break;t[n++]=248|i>>24,t[n++]=128|i>>18&63,t[n++]=128|i>>12&63,t[n++]=128|i>>6&63,t[n++]=128|63&i}else{if(n+5>=a)break;t[n++]=252|i>>30,t[n++]=128|i>>24&63,t[n++]=128|i>>18&63,t[n++]=128|i>>12&63,t[n++]=128|i>>6&63,t[n++]=128|63&i}}t[n]=0}(e,L,t,n)}(e,t=se(n),n)}return t}},T={string:S.stringToC,array:S.arrayToC};function E(e,t){if(0===t||!e)return"";for(var n,r=0,a=0;r|=n=L[e+a>>0],(0!=n||t)&&(a++,!t||a!=t););t||(t=a);var o="";if(r<128){for(var i;t>0;)i=String.fromCharCode.apply(String,L.subarray(e,e+Math.min(t,1024))),o=o?o+i:i,e+=1024,t-=1024;return o}return function(e){return k(L,e)}(e)}var M="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function k(e,t){for(var n=t;e[n];)++n;if(n-t>16&&e.subarray&&M)return M.decode(e.subarray(t,n));for(var r,a,o,i,s,u="";;){if(!(r=e[t++]))return u;if(128&r)if(a=63&e[t++],192!=(224&r))if(o=63&e[t++],224==(240&r)?r=(15&r)<<12|a<<6|o:(i=63&e[t++],240==(248&r)?r=(7&r)<<18|a<<12|o<<6|i:(s=63&e[t++],r=248==(252&r)?(3&r)<<24|a<<18|o<<12|i<<6|s:(1&r)<<30|a<<24|o<<18|i<<12|s<<6|63&e[t++])),r<65536)u+=String.fromCharCode(r);else{var l=r-65536;u+=String.fromCharCode(55296|l>>10,56320|1023&l)}else u+=String.fromCharCode((31&r)<<6|a);else u+=String.fromCharCode(r)}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var C,R,L,H,U,O,x,I,P,B,W=65536,F=16777216;function D(){o.HEAP8=R=new Int8Array(C),o.HEAP16=new Int16Array(C),o.HEAP32=H=new Int32Array(C),o.HEAPU8=L=new Uint8Array(C),o.HEAPU16=new Uint16Array(C),o.HEAPU32=new Uint32Array(C),o.HEAPF32=new Float32Array(C),o.HEAPF64=new Float64Array(C)}function j(){pe("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+V+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function z(){j()}U=B=0;var N=o.TOTAL_STACK||5242880,V=o.TOTAL_MEMORY||16777216;function K(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var n=t.func;"number"===typeof n?void 0===t.arg?o.dynCall_v(n):o.dynCall_vi(n,t.arg):n(void 0===t.arg?null:t.arg)}else t()}}V<N&&h("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+V+"! (TOTAL_STACK="+N+")"),o.buffer?C=o.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(o.wasmMemory=new WebAssembly.Memory({initial:V/W,maximum:V/W}),C=o.wasmMemory.buffer):C=new ArrayBuffer(V),o.buffer=C),D();var G=[],q=[],X=[],Y=[],J=!1;Math.abs,Math.ceil,Math.floor,Math.min;var Z=0,$=null,Q=null;o.preloadedImages={},o.preloadedAudios={};var ee="data:application/octet-stream;base64,";function te(e){return String.prototype.startsWith?e.startsWith(ee):0===e.indexOf(ee)}!function(){var e="pv_porcupine.wast",t="pv_porcupine.wasm",n="pv_porcupine.temp.asm.js";te(e)||(e=y(e)),te(t)||(t=y(t)),te(n)||(n=y(n));var r={global:null,env:null,asm2wasm:b,parent:o},a=null;function i(e){var t=o.buffer;e.byteLength<t.byteLength&&h("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var n,r=new Int8Array(t);new Int8Array(e).set(r),n=e,o.buffer=C=n,D()}function s(){try{if(o.wasmBinary)return new Uint8Array(o.wasmBinary);if(o.readBinary)return o.readBinary(t);throw"both async and sync fetching of the wasm failed"}catch(h){pe(h)}}function u(e,n,u){if("object"!==typeof WebAssembly)return h("no native wasm support detected"),!1;if(!(o.wasmMemory instanceof WebAssembly.Memory))return h("no native wasm Memory in use"),!1;function f(e,t){(a=e.exports).memory&&i(a.memory),o.asm=a,o.usingWasm=!0,function(e){if(Z--,o.monitorRunDependencies&&o.monitorRunDependencies(Z),0==Z&&(null!==$&&(clearInterval($),$=null),Q)){var t=Q;Q=null,t()}}()}if(n.memory=o.wasmMemory,r.global={NaN:NaN,Infinity:1/0},r["global.Math"]=Math,r.env=n,Z++,o.monitorRunDependencies&&o.monitorRunDependencies(Z),o.instantiateWasm)try{return o.instantiateWasm(r,f)}catch(y){return h("Module.instantiateWasm callback failed with error: "+y),!1}function p(e){f(e.instance,e.module)}function m(e){(o.wasmBinary||!l&&!c||"function"!==typeof fetch?new Promise(function(e,t){e(s())}):fetch(t,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()}).catch(function(){return s()})).then(function(e){return WebAssembly.instantiate(e,r)}).then(e).catch(function(e){h("failed to asynchronously prepare wasm: "+e),pe(e)})}return o.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||te(t)||"function"!==typeof fetch?m(p):WebAssembly.instantiateStreaming(fetch(t,{credentials:"same-origin"}),r).then(p).catch(function(e){h("wasm streaming compile failed: "+e),h("falling back to ArrayBuffer instantiation"),m(p)}),{}}o.asmPreload=o.asm;var f=o.reallocBuffer;o.reallocBuffer=function(e){return"asmjs"===p?f(e):function(e){var t,n,r=o.usingWasm?W:F;(t=e)%(n=r)>0&&(t+=n-t%n),e=t;var a=o.buffer.byteLength;if(o.usingWasm)try{return-1!==o.wasmMemory.grow((e-a)/65536)?o.buffer=o.wasmMemory.buffer:null}catch(i){return null}}(e)};var p="";o.asm=function(e,t,n){var r;if(!(t=t).table){var a=o.wasmTableSize;void 0===a&&(a=1024);var i=o.wasmMaxTableSize;"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?t.table=void 0!==i?new WebAssembly.Table({initial:a,maximum:i,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):t.table=new Array(a),o.wasmTable=t.table}return t.memoryBase||(t.memoryBase=o.STATIC_BASE),t.tableBase||(t.tableBase=0),_(r=u(0,t),"no binaryen method succeeded."),r}}(),U=1416032,q.push(),o.STATIC_BASE=1024,o.STATIC_BUMP=1415008;var ne=U;U+=16;var re={varargs:0,get:function(e){return re.varargs+=4,H[re.varargs-4>>2]},getStr:function(){return E(re.get())},get64:function(){var e=re.get(),t=re.get();return _(e>=0?0===t:-1===t),e},getZero:function(){_(0===re.get())}};function ae(e,t){re.varargs=t;try{var n=re.get(),r=re.get(),a=re.get(),o=0;ae.buffers||(ae.buffers=[null,[],[]],ae.printChar=function(e,t){var n=ae.buffers[e];_(n),0===t||10===t?((1===e?d:h)(k(n,0)),n.length=0):n.push(t)});for(var i=0;i<a;i++){for(var s=H[r+8*i>>2],u=H[r+(8*i+4)>>2],l=0;l<u;l++)ae.printChar(n,L[s+l]);o+=u}return o}catch(c){return"undefined"!==typeof FS&&c instanceof FS.ErrnoError||pe(c),-c.errno}}function oe(){var e=oe;return e.LLVM_SAVEDSTACKS||(e.LLVM_SAVEDSTACKS=[]),e.LLVM_SAVEDSTACKS.push(le()),e.LLVM_SAVEDSTACKS.length-1}B=function(e){var t=U;return U=U+e+15&-16,t}(4),O=x=w(U),P=w(I=O+N),H[B>>2]=P,o.wasmTableSize=6,o.wasmMaxTableSize=6,o.asmGlobalArg={},o.asmLibraryArg={abort:pe,assert:_,enlargeMemory:z,getTotalMemory:function(){return V},abortOnCannotGrowMemory:j,invoke_ii:function(e,t){var n=le();try{return o.dynCall_ii(e,t)}catch(r){if(ue(n),"number"!==typeof r&&"longjmp"!==r)throw r;o.setThrew(1,0)}},invoke_iiii:function(e,t,n,r){var a=le();try{return o.dynCall_iiii(e,t,n,r)}catch(i){if(ue(a),"number"!==typeof i&&"longjmp"!==i)throw i;o.setThrew(1,0)}},___setErrNo:function(e){return o.___errno_location&&(H[o.___errno_location()>>2]=e),e},___syscall140:function(e,t){re.varargs=t;try{var n=re.getStreamFromFD(),r=(re.get(),re.get()),a=re.get(),o=re.get(),i=r;return FS.llseek(n,i,o),H[a>>2]=n.position,n.getdents&&0===i&&0===o&&(n.getdents=null),0}catch(s){return"undefined"!==typeof FS&&s instanceof FS.ErrnoError||pe(s),-s.errno}},___syscall146:ae,___syscall54:function(e,t){re.varargs=t;try{return 0}catch(n){return"undefined"!==typeof FS&&n instanceof FS.ErrnoError||pe(n),-n.errno}},___syscall6:function(e,t){re.varargs=t;try{var n=re.getStreamFromFD();return FS.close(n),0}catch(r){return"undefined"!==typeof FS&&r instanceof FS.ErrnoError||pe(r),-r.errno}},_emscripten_memcpy_big:function(e,t,n){return L.set(L.subarray(t,t+n),e),e},_llvm_stackrestore:function(e){var t=oe,n=t.LLVM_SAVEDSTACKS[e];t.LLVM_SAVEDSTACKS.splice(e,1),ue(n)},_llvm_stacksave:oe,_time:function(e){var t=Date.now()/1e3|0;return e&&(H[e>>2]=t),t},flush_NO_FILESYSTEM:function(){var e=o._fflush;e&&e(0);var t=ae.printChar;if(t){var n=ae.buffers;n[1].length&&t(1,10),n[2].length&&t(2,10)}},DYNAMICTOP_PTR:B,tempDoublePtr:ne,STACKTOP:x,STACK_MAX:I};var ie=o.asm(o.asmGlobalArg,o.asmLibraryArg,C);o.asm=ie,o.___errno_location=function(){return o.asm.___errno_location.apply(null,arguments)},o._free=function(){return o.asm._free.apply(null,arguments)},o._llvm_bswap_i32=function(){return o.asm._llvm_bswap_i32.apply(null,arguments)},o._malloc=function(){return o.asm._malloc.apply(null,arguments)},o._memcpy=function(){return o.asm._memcpy.apply(null,arguments)},o._memset=function(){return o.asm._memset.apply(null,arguments)},o._pv_porcupine_wasm_delete=function(){return o.asm._pv_porcupine_wasm_delete.apply(null,arguments)},o._pv_porcupine_wasm_frame_length=function(){return o.asm._pv_porcupine_wasm_frame_length.apply(null,arguments)},o._pv_porcupine_wasm_init=function(){return o.asm._pv_porcupine_wasm_init.apply(null,arguments)},o._pv_porcupine_wasm_process=function(){return o.asm._pv_porcupine_wasm_process.apply(null,arguments)},o._pv_porcupine_wasm_version=function(){return o.asm._pv_porcupine_wasm_version.apply(null,arguments)},o._pv_wasm_sample_rate=function(){return o.asm._pv_wasm_sample_rate.apply(null,arguments)},o._sbrk=function(){return o.asm._sbrk.apply(null,arguments)},o.establishStackSpace=function(){return o.asm.establishStackSpace.apply(null,arguments)},o.getTempRet0=function(){return o.asm.getTempRet0.apply(null,arguments)},o.runPostSets=function(){return o.asm.runPostSets.apply(null,arguments)},o.setTempRet0=function(){return o.asm.setTempRet0.apply(null,arguments)},o.setThrew=function(){return o.asm.setThrew.apply(null,arguments)};var se=o.stackAlloc=function(){return o.asm.stackAlloc.apply(null,arguments)},ue=o.stackRestore=function(){return o.asm.stackRestore.apply(null,arguments)},le=o.stackSave=function(){return o.asm.stackSave.apply(null,arguments)};function ce(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function fe(e){function t(){o.calledRun||(o.calledRun=!0,g||(J||(J=!0,K(q)),K(X),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)e=o.postRun.shift(),Y.unshift(e);var e;K(Y)}()))}e=e||o.arguments,Z>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)e=o.preRun.shift(),G.unshift(e);var e;K(G)}(),Z>0||o.calledRun||(o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),t()},1)):t()))}function pe(e){throw o.onAbort&&o.onAbort(e),void 0!==e?(d(e),h(e),e=JSON.stringify(e)):e="",g=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(o.dynCall_ii=function(){return o.asm.dynCall_ii.apply(null,arguments)},o.dynCall_iiii=function(){return o.asm.dynCall_iiii.apply(null,arguments)},o.asm=ie,o.cwrap=function(e,t,n,r){var a=(n=n||[]).every(function(e){return"number"===e});return"string"!==t&&a&&!r?A(e):function(){return function(e,t,n,r,a){var o=A(e),i=[],s=0;if(r)for(var u=0;u<r.length;u++){var l=T[n[u]];l?(0===s&&(s=le()),i[u]=l(r[u])):i[u]=r[u]}var c=o.apply(null,i);return c=function(e){return"string"===t?E(e):"boolean"===t?Boolean(e):e}(c),0!==s&&ue(s),c}(e,t,n,arguments)}},o.then=function(e){if(o.calledRun)e(o);else{var t=o.onRuntimeInitialized;o.onRuntimeInitialized=function(){t&&t(),e(o)}}return o},ce.prototype=new Error,ce.prototype.constructor=ce,Q=function e(){o.calledRun||fe(),o.calledRun||(Q=e)},o.run=fe,o.abort=pe,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return o.noExitRuntime=!0,fe(),e};e.exports=a}).call(this,n(3),"/")},,,function(e,t){e.exports=function(){if("undefined"!==typeof navigator){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;var e,t,n,r=!1,a=[],o=function(o){var i=(new(window.AudioContext||window.webkitAudioContext)).createMediaStreamSource(o);e=i.context.sampleRate;var s=i.context.createScriptProcessor(2048,1,1);s.onaudioprocess=function(o){!function(o){if(r){for(var i=0;i<o.length;i++)a.push(32767*o[i]);for(;a.length*t.sampleRate/e>t.frameLength;){for(var s=new Int16Array(t.frameLength),u=0,l=0,c=0,f=0;c<t.frameLength;){for(u=0,l=0;f<Math.min(a.length,(c+1)*e/t.sampleRate);)u+=a[f],l+=1,f++;s[c]=u/l,c++}n(t.process(s)),a=a.slice(f)}}}(o.inputBuffer.getChannelData(0))},i.connect(s),s.connect(i.context.destination)};this.start=function(e,a,i){e&&(navigator.getUserMedia||i("this browser does not support audio capture"),navigator.getUserMedia({audio:!0},o,i),t=e,n=a,r=!0)},this.stop=function(){r=!1,a=[]}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=(n(16),n(5)),u=n(6),l=n(8),c=n(7),f=n(9),p=n(1),m=n.n(p),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).state={hotwords:["bumblebee","porcupine","dragonfly","caterpillar","grasshopper","terminator","christina","francesca"],bumblebee_started:!1,spokenHotwords:[],selectedHotword:"bumblebee",sensivitiyChanged:!1,sensitivity:.5},e.sound=new Audio("transform.wav"),e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){m.a.setHotword(this.state.selectedHotword)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},"Hotword: ",a.a.createElement("select",{value:this.state.selectedHotword,onChange:function(t){return e.changeHotword(t)}},this.renderHotwordOptions()),a.a.createElement("br",null),"Sensitivity: ",a.a.createElement("select",{value:this.state.sensitivity,onChange:function(t){return e.changeSensitivity(t)}},this.renderSensitivities()),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(t){return e.toggleHotword()}},this.state.bumblebee_started?"Stop":"Start"),this.renderSay(),this.renderBumblebees())}},{key:"renderSay",value:function(){if(this.state.bumblebee_started)return this.state.selectedHotword?a.a.createElement("h3",null,'Say "',this.state.selectedHotword,'":'):a.a.createElement("h4",null,"Say any of the following: ",this.state.hotwords.join(", "),":")}},{key:"renderHotwordOptions",value:function(){var e=this.state.hotwords.map(function(e,t){return a.a.createElement("option",{key:t,value:e},e)});return e.unshift(a.a.createElement("option",{key:"null",value:""},"* Any *")),e}},{key:"renderSensitivities",value:function(e){for(var t=[],n=0;n<=10;n++){var r=n/10,o=10*n;t.push(a.a.createElement("option",{key:n,value:r},o,"%"))}return t}},{key:"changeSensitivity",value:function(e){var t=e.target.options[e.target.selectedIndex].value;this.state.sensivitiyChanged?alert("Sensitivity can only be set before .start(), reload and try again"):(this.setState({sensitivity:t}),m.a.sensitivity(t))}},{key:"changeHotword",value:function(e){var t=e.target.options[e.target.selectedIndex].value;m.a.setHotword(t),this.setState({selectedHotword:t,spokenHotwords:[]})}},{key:"toggleHotword",value:function(){var e=this,t=this.state.selectedHotword;this.state.bumblebee_started?(m.a.stop(),this.setState({bumblebee_started:!1,spokenHotwords:[]})):(console.log("starting",t),this.setState({bumblebee_started:!0,spokenHotwords:[],sensivitiyChanged:!0}),m.a.start(function(t){e.recognizeHotword(t)}))}},{key:"recognizeHotword",value:function(e){if(e!==this.state.selectedHotword&&this.state.selectedHotword)console.log("did not recognize",e);else{this.sound.play();var t=this.state.spokenHotwords;t.push(e),console.log("recognized hotword",e),this.setState({spokenHotwords:t})}}},{key:"renderBumblebees",value:function(){var e=this.state.spokenHotwords.map(function(e,t){return a.a.createElement("li",{key:t},e)});return a.a.createElement("ul",null,e)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.60575932.chunk.js.map