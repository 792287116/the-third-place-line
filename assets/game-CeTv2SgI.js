(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Jc="180",rp=0,Wu=1,sp=2,Qc=1,op=2,Pi=3,ki=0,On=1,Jt=2,Rn=0,as=1,$l=2,Xu=3,qu=4,Rd=5,Ii=100,ap=101,lp=102,cp=103,up=104,Zl=200,hp=201,dp=202,fp=203,Jl=204,Ql=205,Cd=206,pp=207,Pd=208,mp=209,gp=210,_p=211,vp=212,xp=213,Mp=214,ec=0,tc=1,nc=2,hs=3,ic=4,rc=5,sc=6,oc=7,Ld=0,yp=1,bp=2,or=0,Dd=1,Id=2,Nd=3,eu=4,Ud=5,Od=6,Fd=7,Yu="attached",Sp="detached",Bd=300,ds=301,fs=302,ac=303,lc=304,Fa=306,vi=1e3,ir=1001,wa=1002,gn=1003,kd=1004,js=1005,Pn=1006,da=1007,Ni=1008,xi=1009,zd=1010,Hd=1011,oo=1012,tu=1013,Pr=1014,Wn=1015,qn=1016,nu=1017,iu=1018,ps=1020,Vd=35902,Gd=35899,Wd=1021,Xd=1022,Xn=1023,ao=1026,ms=1027,Ba=1028,ru=1029,qd=1030,su=1031,ou=1033,fa=33776,pa=33777,ma=33778,ga=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,Mc=37812,yc=37813,bc=37814,Sc=37815,wc=37816,Ec=37817,Tc=37818,Ac=37819,Rc=37820,Cc=37821,Pc=36492,Lc=36494,Dc=36495,Ic=36283,Nc=36284,Uc=36285,Oc=36286,lo=2300,co=2301,sl=2302,Ku=2400,ju=2401,$u=2402,wp=2500,Ep=0,Yd=1,Fc=2,Tp=3200,Ap=3201,au=0,Rp=1,er="",Nt="srgb",Dn="srgb-linear",Ea="linear",Rt="srgb",Gr=7680,Zu=519,Cp=512,Pp=513,Lp=514,Kd=515,Dp=516,Ip=517,Np=518,Up=519,Bc=35044,Ju=35048,Qu="300 es",pi=2e3,Ta=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const Js=Math.PI/180,gs=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function lu(i,e){return(i%e+e)%e}function Op(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fp(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function Bp(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function kp(i,e=1){return e-Math.abs(lu(i,e*2)-e)}function zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function Xp(i){i!==void 0&&(eh=i);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(i){return i*Js}function Yp(i){return i*gs}function Kp(i){return(i&i-1)===0&&i!==0}function jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Js,RAD2DEG:gs,generateUUID:ii,clamp:ft,euclideanModulo:lu,mapLinear:Op,inverseLerp:Fp,lerp:Qs,damp:Bp,pingpong:kp,smoothstep:zp,smootherstep:Hp,randInt:Vp,randFloat:Gp,randFloatSpread:Wp,seededRandom:Xp,degToRad:qp,radToDeg:Yp,isPowerOfTwo:Kp,ceilPowerOfTwo:jp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:Zp,normalize:Ct,denormalize:ti};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const T=Math.sqrt(w),M=Math.atan2(T,p*y);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new P,th=new cr;class ut{constructor(e,t,n,r,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],w=r[4],x=r[7],T=r[2],M=r[5],A=r[8];return s[0]=o*_+a*y+l*T,s[3]=o*m+a*w+l*M,s[6]=o*p+a*x+l*A,s[1]=c*_+u*y+h*T,s[4]=c*m+u*w+h*M,s[7]=c*p+u*x+h*A,s[2]=d*_+f*y+g*T,s[5]=d*m+f*w+g*M,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new ut;function jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){const i=uo("canvas");return i.style.display="block",i}const nh={};function ho(i){i in nh||(nh[i]=!0,console.warn(i))}function Qp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ih=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){const i={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ho("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ho("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dn]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const bt=em();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wr;class tm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=uo("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ll(r[o].image)):s.push(ll(r[o]))}else s=ll(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;const cl=new P;class rn extends Ss{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=ir,r=ir,s=Pn,o=Ni,a=Xn,l=xi,c=rn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ii(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Bd;rn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(f+1)/2,T=(p+1)/2,M=(u+d)/4,A=(h+_)/4,L=(g+m)/4;return w>x&&w>T?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=M/n,s=A/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=M/r,s=L/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=L/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends Ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new rn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $d extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sm extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ro.subVectors(this.max,Us),Xr.subVectors(e.a,Us),qr.subVectors(e.b,Us),Yr.subVectors(e.c,Us),Wi.subVectors(qr,Xr),Xi.subVectors(Yr,qr),mr.subVectors(Xr,Yr);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-mr.z,mr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,mr.z,0,-mr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-mr.y,mr.x,0];return!ul(t,Xr,qr,Yr,Ro)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Xr,qr,Yr,Ro))?!1:(Co.crossVectors(Wi,Xi),t=[Co.x,Co.y,Co.z],ul(t,Xr,qr,Yr,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,Ao=new sn,Xr=new P,qr=new P,Yr=new P,Wi=new P,Xi=new P,mr=new P,Us=new P,Ro=new P,Co=new P,gr=new P;function ul(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gr.fromArray(i,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),u=n.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const om=new sn,Os=new P,hl=new P;class yi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(hl)),this.expandByPoint(Os.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ei=new P,dl=new P,Po=new P,qi=new P,fl=new P,Lo=new P,pl=new P;class ws{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dl.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=qi.dot(this.direction),l=-qi.dot(Po),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(dl).addScaledVector(Po,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,r,s){fl.subVectors(t,e),Lo.subVectors(n,e),pl.crossVectors(fl,Lo);let o=this.direction.dot(pl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Lo.crossVectors(qi,Lo));if(l<0)return null;const c=a*this.direction.dot(fl.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(pl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(am,e,lm)}lookAt(e,t,n){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Yi.crossVectors(n,Bn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Yi.crossVectors(n,Bn)),Yi.normalize(),Do.crossVectors(Bn,Yi),r[0]=Yi.x,r[4]=Do.x,r[8]=Bn.x,r[1]=Yi.y,r[5]=Do.y,r[9]=Bn.y,r[2]=Yi.z,r[6]=Do.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],w=n[7],x=n[11],T=n[15],M=r[0],A=r[4],L=r[8],b=r[12],v=r[1],R=r[5],O=r[9],k=r[13],z=r[2],Z=r[6],U=r[10],B=r[14],V=r[3],W=r[7],j=r[11],se=r[15];return s[0]=o*M+a*v+l*z+c*V,s[4]=o*A+a*R+l*Z+c*W,s[8]=o*L+a*O+l*U+c*j,s[12]=o*b+a*k+l*B+c*se,s[1]=u*M+h*v+d*z+f*V,s[5]=u*A+h*R+d*Z+f*W,s[9]=u*L+h*O+d*U+f*j,s[13]=u*b+h*k+d*B+f*se,s[2]=g*M+_*v+m*z+p*V,s[6]=g*A+_*R+m*Z+p*W,s[10]=g*L+_*O+m*U+p*j,s[14]=g*b+_*k+m*B+p*se,s[3]=y*M+w*v+x*z+T*V,s[7]=y*A+w*R+x*Z+T*W,s[11]=y*L+w*O+x*U+T*j,s[15]=y*b+w*k+x*B+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,w=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,x=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,M=t*y+n*w+r*x+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=y*A,e[1]=(_*d*s-h*m*s-_*r*f+n*m*f+h*r*p-n*d*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*A,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*A,e[4]=w*A,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*A,e[8]=x*A,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=l*c,w=l*u,x=l*h,T=n.x,M=n.y,A=n.z;return r[0]=(1-(_+p))*T,r[1]=(f+x)*T,r[2]=(g-w)*T,r[3]=0,r[4]=(f-x)*M,r[5]=(1-(d+p))*M,r[6]=(m+y)*M,r[7]=0,r[8]=(g+w)*A,r[9]=(m-y)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,u=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=pi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===pi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ta)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=pi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===pi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ta)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kr=new P,$n=new ot,am=new P(0,0,0),lm=new P(1,1,1),Yi=new P,Do=new P,Bn=new P,sh=new ot,oh=new cr;class Mi{constructor(e=0,t=0,n=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cm=0;const ah=new P,jr=new cr,Ti=new ot,Io=new P,Fs=new P,um=new P,hm=new cr,lh=new P(1,0,0),ch=new P(0,1,0),uh=new P(0,0,1),hh={type:"added"},dm={type:"removed"},$r={type:"childadded",child:null},ml={type:"childremoved",child:null};class Ut extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new P,t=new Mi,n=new cr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new ut}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Fs,Io,this.up):Ti.lookAt(Io,Fs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(Ti),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new P,Ai=new P,gl=new P,Ri=new P,Zr=new P,Jr=new P,dh=new P,_l=new P,vl=new P,xl=new P,Ml=new yt,yl=new yt,bl=new yt;class ni{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ai.subVectors(n,t),gl.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(Ai),l=Zn.dot(gl),c=Ai.dot(Ai),u=Ai.dot(gl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ml.setScalar(0),yl.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),bl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ml,s.x),o.addScaledVector(yl,s.y),o.addScaledVector(bl,s.z),o}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ai.subVectors(e,t),Zn.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Zn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,n),Jr.subVectors(s,n),_l.subVectors(e,n);const l=Zr.dot(_l),c=Jr.dot(_l);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,r);const u=Zr.dot(vl),h=Jr.dot(vl);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zr,o);xl.subVectors(e,s);const f=Zr.dot(xl),g=Jr.dot(xl);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Jr,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return dh.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(dh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Zr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},No={h:0,s:0,l:0};function Sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=lu(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sl(o,s,e+1/3),this.g=Sl(o,s,e),this.b=Sl(o,s,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return bt.workingToColorSpace(Mn.copy(this),e),Math.round(ft(Mn.r*255,0,255))*65536+Math.round(ft(Mn.g*255,0,255))*256+Math.round(ft(Mn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Mn.copy(this),t);const n=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Nt){bt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,r=Mn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(No);const n=Qs(Ki.h,No.h,t),r=Qs(Ki.s,No.s,t),s=Qs(Ki.l,No.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new it;it.NAMES=Zd;let fm=0;class ri extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=as,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tt extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new P,Uo=new Oe;let pm=0;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}}class Jd extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qd extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mm=0;const Vn=new ot,wl=new Ut,Qr=new P,kn=new sn,Bs=new sn,un=new P;class Ht extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(kn.min,Bs.min),kn.expandByPoint(un),un.addVectors(kn.max,Bs.max),kn.expandByPoint(un)):(kn.expandByPoint(Bs.min),kn.expandByPoint(Bs.max))}kn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),un.add(Qr)),r=Math.max(r,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;const c=new P,u=new P,h=new P,d=new Oe,f=new Oe,g=new Oe,_=new P,m=new P;function p(L,b,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[L].add(_),a[b].add(_),a[v].add(_),l[L].add(m),l[b].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,b=y.length;L<b;++L){const v=y[L],R=v.start,O=v.count;for(let k=R,z=R+O;k<z;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new P,x=new P,T=new P,M=new P;function A(L){T.fromBufferAttribute(r,L),M.copy(T);const b=a[L];w.copy(b),w.sub(T.multiplyScalar(T.dot(b))).normalize(),x.crossVectors(M,b);const R=x.dot(l[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,R)}for(let L=0,b=y.length;L<b;++L){const v=y[L],R=v.start,O=v.count;for(let k=R,z=R+O;k<z;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new fn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new ot,_r=new ws,Oo=new yi,ph=new P,Fo=new P,Bo=new P,ko=new P,El=new P,zo=new P,mh=new P,Ho=new P;class lt extends Ut{constructor(e=new Ht,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(El.fromBufferAttribute(h,e),o?zo.addScaledVector(El,u):zo.addScaledVector(El.sub(t),u))}t.add(zo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Oo.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Oo,ph)===null||_r.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(s).invert(),_r.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,T=w;x<T;x+=3){const M=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);r=Vo(this,p,e,n,c,u,h,M,A,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);r=Vo(this,o,e,n,c,u,h,y,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,T=w;x<T;x+=3){const M=x,A=x+1,L=x+2;r=Vo(this,p,e,n,c,u,h,M,A,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,w=m+1,x=m+2;r=Vo(this,o,e,n,c,u,h,y,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gm(i,e,t,n,r,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function Vo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,ko);const u=gm(i,e,t,n,Fo,Bo,ko,mh);if(u){const h=new P;ni.getBarycoord(mh,Fo,Bo,ko,h),r&&(u.uv=ni.getInterpolatedAttribute(r,a,l,c,h,new Oe)),s&&(u.uv1=ni.getInterpolatedAttribute(s,a,l,c,h,new Oe)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};ni.getNormal(Fo,Bo,ko,d.normal),u.face=d,u.barycoord=h}return u}class Es extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(_,m,p,y,w,x,T,M,A,L,b){const v=x/A,R=T/L,O=x/2,k=T/2,z=M/2,Z=A+1,U=L+1;let B=0,V=0;const W=new P;for(let j=0;j<U;j++){const se=j*R-k;for(let Me=0;Me<Z;Me++){const je=Me*v-O;W[_]=je*y,W[m]=se*w,W[p]=z,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=M>0?1:-1,u.push(W.x,W.y,W.z),h.push(Me/A),h.push(1-j/L),B+=1}}for(let j=0;j<L;j++)for(let se=0;se<A;se++){const Me=d+se+Z*j,je=d+se+Z*(j+1),Ke=d+(se+1)+Z*(j+1),Xe=d+(se+1)+Z*j;l.push(Me,je,Xe),l.push(je,Ke,Xe),V+=6}a.addGroup(f,V,b),f+=V,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=_s(i[t]);for(const r in n)e[r]=n[r]}return e}function _m(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const mi={clone:_s,merge:An};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tf extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new P,gh=new Oe,_h=new Oe;class dn extends tf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class Mm extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(es,ts,e,t);r.layers=this.layers,this.add(r);const s=new dn(es,ts,e,t);s.layers=this.layers,this.add(s);const o=new dn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new dn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new dn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new dn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nf extends rn{constructor(e=[],t=ds,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ym extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Rn});s.uniforms.tEquirect.value=t;const o=new lt(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Pn),new Mm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class et extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bm={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new hu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new P;class du{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vh=new P,xh=new yt,Mh=new yt,Em=new P,yh=new ot,Go=new P,Al=new yi,bh=new ot,Rl=new ws;class Tm extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(r),e.ray.intersectsSphere(Al)!==!1&&(bh.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;xh.fromBufferAttribute(r.attributes.skinIndex,e),Mh.fromBufferAttribute(r.attributes.skinWeight,e),vh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mh.getComponent(s);if(o!==0){const a=xh.getComponent(s);yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Em.copy(vh).applyMatrix4(yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rf extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fu extends rn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=gn,u=gn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new ot,Am=new ot;class pu{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Am;Sh.multiplyMatrices(a,t[s]),Sh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new pu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fu(t,e,e,Xn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new rf),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Aa extends fn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new ot,wh=new ot,Wo=[],Eh=new sn,Rm=new ot,ks=new lt,zs=new yi;class Ra extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Eh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),zs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ns),wh.multiplyMatrices(n,ns),ks.matrixWorld=wh,ks.raycast(e,Wo);for(let o=0,a=Wo.length;o<a;o++){const l=Wo[o];l.instanceId=s,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fu(new Float32Array(r*this.count),r,this.count,Ba,Wn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cl=new P,Cm=new P,Pm=new ut;class Qi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Cl.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pm.getNormalMatrix(e),r=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new yi,Lm=new Oe(.5,.5),Xo=new P;class ka{constructor(e=new Qi,t=new Qi,n=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],w=s[13],x=s[14],T=s[15];if(r[0].setComponents(c-o,f-u,p-g,T-y).normalize(),r[1].setComponents(c+o,f+u,p+g,T+y).normalize(),r[2].setComponents(c+a,f+h,p+_,T+w).normalize(),r[3].setComponents(c-a,f-h,p-_,T-w).normalize(),n)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(c-l,f-d,p-m,T-x).normalize();else if(r[4].setComponents(c-l,f-d,p-m,T-x).normalize(),t===pi)r[5].setComponents(c+l,f+d,p+m,T+x).normalize();else if(t===Ta)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const t=Lm.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class za extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new P,Pa=new P,Th=new ot,Hs=new ws,qo=new yi,Pl=new P,Ah=new P;class mu extends Ut{constructor(e=new Ht,t=new za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Pa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;Th.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),w=Yo(this,e,Hs,l,p,y,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Yo(this,e,Hs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Yo(this,e,Hs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Yo(this,e,Hs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yo(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Pa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Pa,Pl,Ah)>n)return;Pl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:Ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Rh=new P,Ch=new P;class gu extends mu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rh.fromBufferAttribute(t,r),Ch.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dm extends mu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sf extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new ot,kc=new ws,Ko=new yi,jo=new P;class _u extends Ut{constructor(e=new Ht,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Ph.copy(r).invert(),kc.copy(e.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);jo.fromBufferAttribute(h,m),Lh(jo,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jo.fromBufferAttribute(h,g),Lh(jo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lh(i,e,t,n,r,s,o){const a=kc.distanceSqToPoint(i);if(a<t){const l=new P;kc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ts extends rn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vu extends rn{constructor(e,t,n=Pr,r,s,o,a=gn,l=gn,c,u=ao,h=1){if(u!==ao&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class of extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lr extends Ht{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,u=new Oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ar extends Ht{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(){const x=new P,T=new P;let M=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const b=[],v=L/s,R=v*(t-e)+e;for(let O=0;O<=r;O++){const k=O/r,z=k*l+a,Z=Math.sin(z),U=Math.cos(z);T.x=R*Z,T.y=-v*n+m,T.z=R*U,h.push(T.x,T.y,T.z),x.set(Z,A,U).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-v),b.push(g++)}_.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const v=_[b][L],R=_[b+1][L],O=_[b+1][L+1],k=_[b][L+1];(e>0||b!==0)&&(u.push(v,R,k),M+=3),(t>0||b!==s-1)&&(u.push(R,O,k),M+=3)}c.addGroup(p,M,0),p+=M}function w(x){const T=g,M=new Oe,A=new P;let L=0;const b=x===!0?e:t,v=x===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let O=0;O<=r;O++){const z=O/r*l+a,Z=Math.cos(z),U=Math.sin(z);A.x=b*U,A.y=m*v,A.z=b*Z,h.push(A.x,A.y,A.z),d.push(0,v,0),M.x=Z*.5+.5,M.y=U*.5*v+.5,f.push(M.x,M.y),g++}for(let O=0;O<r;O++){const k=T+O,z=R+O;x===!0?u.push(z,z+1,k):u.push(z+1,z,k),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xu extends ar{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Oe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,r=[],s=[],o=[],a=new P,l=new ot;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ft(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(ft(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class af extends Vi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Oe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends af{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mu(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const $o=new P,Ll=new Mu,Dl=new Mu,Il=new Mu;class lf extends Vi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:($o.subVectors(r[0],r[1]).add(r[0]),c=$o);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:($o.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ll.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Dl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Il.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Dl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Il.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ll.calc(l),Dl.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dh(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Nm(i,e){const t=1-i;return t*t*e}function Um(i,e){return 2*(1-i)*i*e}function Om(i,e){return i*i*e}function eo(i,e,t,n){return Nm(i,e)+Um(i,t)+Om(i,n)}function Fm(i,e){const t=1-i;return t*t*t*e}function Bm(i,e){const t=1-i;return 3*t*t*i*e}function km(i,e){return 3*(1-i)*i*i*e}function zm(i,e){return i*i*i*e}function to(i,e,t,n,r){return Fm(i,e)+Bm(i,t)+km(i,n)+zm(i,r)}class Hm extends Vi{constructor(e=new Oe,t=new Oe,n=new Oe,r=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Oe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(to(e,r.x,s.x,o.x,a.x),to(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vm extends Vi{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(to(e,r.x,s.x,o.x,a.x),to(e,r.y,s.y,o.y,a.y),to(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gm extends Vi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wm extends Vi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xm extends Vi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(eo(e,r.x,s.x,o.x),eo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cf extends Vi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(eo(e,r.x,s.x,o.x),eo(e,r.y,s.y,o.y),eo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qm extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Dh(a,l.x,c.x,u.x,h.x),Dh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Oe().fromArray(r))}return this}}var Ym=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:lf,CubicBezierCurve:Hm,CubicBezierCurve3:Vm,EllipseCurve:af,LineCurve:Gm,LineCurve3:Wm,QuadraticBezierCurve:Xm,QuadraticBezierCurve3:cf,SplineCurve:qm});class yu extends Ht{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ft(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new P,d=new Oe,f=new P,g=new P,_=new P;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const w=n+y*u*r,x=Math.sin(w),T=Math.cos(w);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*x,h.y=e[M].y,h.z=e[M].x*T,o.push(h.x,h.y,h.z),d.x=y/t,d.y=M/(e.length-1),a.push(d.x,d.y);const A=l[3*M+0]*x,L=l[3*M+1],b=l[3*M+0]*T;c.push(A,L,b)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){const x=w+y*e.length,T=x,M=x+e.length,A=x+e.length+1,L=x+1;s.push(T,M,L),s.push(A,L,M)}this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.points,e.segments,e.phiStart,e.phiLength)}}class Yn extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let w=0;w<c;w++){const x=w*h-s;g.push(x,-y,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const w=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),M=y+1+c*p;f.push(w,x,M),f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class La extends Ht{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,f=new P,g=new Oe;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,w=y,x=y+n+1,T=y+n+2,M=y+1;a.push(w,x,M),a.push(x,T,M)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Dr extends Ht{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const M=T/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(M+x,1-w),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const w=u[p][y+1],x=u[p][y],T=u[p+1][y],M=u[p+1][y+1];(p!==0||o>0)&&f.push(w,x,M),(p!==n-1||l<Math.PI)&&f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fo extends Ht{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,y=(r+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bu extends Ht{constructor(e=new cf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new Oe;let u=new P;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function _(){for(let w=0;w<t;w++)m(w);m(s===!1?t:0),y(),p()}function m(w){u=e.getPointAt(w/t,u);const x=o.normals[w],T=o.binormals[w];for(let M=0;M<=r;M++){const A=M/r*Math.PI*2,L=Math.sin(A),b=-Math.cos(A);l.x=b*x.x+L*T.x,l.y=b*x.y+L*T.y,l.z=b*x.z+L*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let x=1;x<=r;x++){const T=(r+1)*(w-1)+(x-1),M=(r+1)*w+(x-1),A=(r+1)*w+x,L=(r+1)*(w-1)+x;g.push(T,M,L),g.push(M,A,L)}}function y(){for(let w=0;w<=t;w++)for(let x=0;x<=r;x++)c.x=w/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bu(new Ym[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Km extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ct extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jm extends ri{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $m extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zm extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qm(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ih(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function uf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class vo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eg extends vo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:s=e,a=2*t-n;break;case $u:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:o=e,l=2*n-t;break;case $u:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+y*o[c+T]+w*o[l+T]+x*o[h+T];return s}}class tg extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class ng extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Jm(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=co;class As extends ui{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=lo;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class hf extends ui{constructor(e,t,n,r){super(e,t,n,r)}}hf.prototype.ValueTypeName="color";class vs extends ui{constructor(e,t,n,r){super(e,t,n,r)}}vs.prototype.ValueTypeName="number";class ig extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)cr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class xs extends ui{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ig(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends ui{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=lo;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends ui{constructor(e,t,n,r){super(e,t,n,r)}}Ms.prototype.ValueTypeName="vector";class rg{constructor(e="",t=-1,n=[],r=wp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(og(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(ui.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Qm(l);l=Ih(l,1,u),c=Ih(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];uf(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const w=d[g];m.push(w.time),p.push(w.morphTarget===_?1:0)}r.push(new vs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ms,f+".position",d,"pos",r),n(xs,f+".quaternion",d,"rot",r),n(Ms,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function sg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return hf;case"quaternion":return xs;case"bool":case"boolean":return As;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function og(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sg(i.type);if(i.times===void 0){const t=[],n=[];uf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ag{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lg=new ag;class Cs{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class cg extends Error{constructor(e,t){super(e),this.response=t}}class df extends Cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ui.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:r});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:w,value:x})=>{if(w)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,A=u.length;M<A;M++){const L=u[M];L.onProgress&&L.onProgress(T)}p.enqueue(x),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new cg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ui.add(`file:${e}`,c);const u=Ci[e];delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class Su extends Cs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=is.get(o);h===void 0&&(h=[],is.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=uo("img");function l(){u(),t&&t(this);const h=is.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}is.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Ui.remove(`image:${e}`);const d=is.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ui.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class po extends Cs{constructor(e){super(e)}load(e,t,n,r){const s=new rn,o=new Su(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ha extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ug extends Ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nl=new ot,Nh=new P,Uh=new P;class wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hg extends wu{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Va extends Ha{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new hg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oh=new ot,Vs=new P,Ul=new P;class dg extends wu{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,n.coordinateSystem,n.reversedDepth)}}class nn extends Ha{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new dg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ga extends tf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fg extends wu{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new fg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class no{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ol=new WeakMap;class mg extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ui.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Ol.has(o)===!0)r&&r(Ol.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Ol.set(l,c),Ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ui.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class gg extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ff{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Eu="\\[\\]\\.:\\/",_g=new RegExp("["+Eu+"]","g"),Tu="[^"+Eu+"]",vg="[^"+Eu.replace("\\.","")+"]",xg=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Mg=/(WCOD+)?/.source.replace("WCOD",vg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),Sg=new RegExp("^"+xg+Mg+yg+bg+"$"),wg=["material","materials","bones","map"];class Eg{constructor(e,t,n){const r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(e){const t=Sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);wg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Eg;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fh=new ot;class pf{constructor(e,t,n=0,r=1/0){this.ray=new ws(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(e,t=!0,n=[]){return zc(e,this,n,t),n.sort(Bh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)zc(e[r],this,n,t);return n.sort(Bh),n}}function Bh(i,e){return i.distance-e.distance}function zc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)zc(s[o],e,t,!0)}}function kh(i,e,t,n){const r=Tg(n);switch(t){case Wd:return i*e;case Ba:return i*e/r.components*r.byteLength;case ru:return i*e/r.components*r.byteLength;case qd:return i*e*2/r.components*r.byteLength;case su:return i*e*2/r.components*r.byteLength;case Xd:return i*e*3/r.components*r.byteLength;case Xn:return i*e*4/r.components*r.byteLength;case ou:return i*e*4/r.components*r.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ic:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(i){switch(i){case xi:case zd:return{byteLength:1,components:1};case oo:case Hd:case qn:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case Pr:case tu:case Wn:return{byteLength:4,components:1};case Vd:case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);function mf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ag(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Lg,alphatest_fragment:Dg,alphatest_pars_fragment:Ig,aomap_fragment:Ng,aomap_pars_fragment:Ug,batching_pars_vertex:Og,batching_vertex:Fg,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:zg,iridescence_fragment:Hg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:Kg,color_pars_vertex:jg,color_vertex:$g,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:r0,colorspace_pars_fragment:s0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:v0,lights_pars_begin:x0,lights_toon_fragment:y0,lights_toon_pars_fragment:b0,lights_phong_fragment:S0,lights_phong_pars_fragment:w0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:I0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:O0,map_particle_pars_fragment:F0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:k0,morphinstance_vertex:z0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:K0,normal_vertex:j0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:e_,opaque_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:r_,dithering_fragment:s_,dithering_pars_fragment:o_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:u_,shadowmap_vertex:h_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:v_,tonemapping_fragment:x_,tonemapping_pars_fragment:M_,transmission_fragment:y_,transmission_pars_fragment:b_,uv_pars_fragment:S_,uv_pars_vertex:w_,uv_vertex:E_,worldpos_vertex:T_,background_vert:A_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:P_,cube_vert:L_,cube_frag:D_,depth_vert:I_,depth_frag:N_,distanceRGBA_vert:U_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:B_,linedashed_vert:k_,linedashed_frag:z_,meshbasic_vert:H_,meshbasic_frag:V_,meshlambert_vert:G_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:K_,meshphong_vert:j_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:Q_,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},ke={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},di={basic:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new it(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:An([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:An([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new it(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:An([ke.points,ke.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:An([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:An([ke.common,ke.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:An([ke.sprite,ke.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:An([ke.common,ke.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:An([ke.lights,ke.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};di.physical={uniforms:An([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Jo={r:0,b:0,g:0},xr=new Mi,av=new ot;function lv(i,e,t,n,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function _(w){let x=!1;const T=g(w);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Fa)?(u===void 0&&(u=new lt(new Es(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:_s(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(x.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(xr)),u.material.toneMapped=bt.getTransfer(T.colorSpace)!==Rt,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new lt(new Yn(2,2),new zt({name:"BackgroundMaterial",uniforms:_s(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=bt.getTransfer(T.colorSpace)!==Rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Jo,ef(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m,dispose:y}}function cv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(v,R,O,k,z){let Z=!1;const U=h(k,O,R);s!==U&&(s=U,c(s.object)),Z=f(v,k,O,z),Z&&g(v,k,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(v,R,O,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,O){const k=O.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let Z=z[R.id];Z===void 0&&(Z={},z[R.id]=Z);let U=Z[k];return U===void 0&&(U=d(l()),Z[k]=U),U}function d(v){const R=[],O=[],k=[];for(let z=0;z<t;z++)R[z]=0,O[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,R,O,k){const z=s.attributes,Z=R.attributes;let U=0;const B=O.getAttributes();for(const V in B)if(B[V].location>=0){const j=z[V];let se=Z[V];if(se===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function g(v,R,O,k){const z={},Z=R.attributes;let U=0;const B=O.getAttributes();for(const V in B)if(B[V].location>=0){let j=Z[V];j===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const se={};se.attribute=j,j&&j.data&&(se.data=j.data),z[V]=se,U++}s.attributes=z,s.attributesNum=U,s.index=k}function _(){const v=s.newAttributes;for(let R=0,O=v.length;R<O;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const O=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;O[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),z[v]!==R&&(i.vertexAttribDivisor(v,R),z[v]=R)}function y(){const v=s.newAttributes,R=s.enabledAttributes;for(let O=0,k=R.length;O<k;O++)R[O]!==v[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function w(v,R,O,k,z,Z,U){U===!0?i.vertexAttribIPointer(v,R,O,z,Z):i.vertexAttribPointer(v,R,O,k,z,Z)}function x(v,R,O,k){_();const z=k.attributes,Z=O.getAttributes(),U=R.defaultAttributeValues;for(const B in Z){const V=Z[B];if(V.location>=0){let W=z[B];if(W===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){const j=W.normalized,se=W.itemSize,Me=e.get(W);if(Me===void 0)continue;const je=Me.buffer,Ke=Me.type,Xe=Me.bytesPerElement,K=Ke===i.INT||Ke===i.UNSIGNED_INT||W.gpuType===tu;if(W.isInterleavedBufferAttribute){const le=W.data,be=le.stride,Ve=W.offset;if(le.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)p(V.location+Se,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Se=0;Se<V.locationSize;Se++)w(V.location+Se,se/V.locationSize,Ke,j,be*Xe,(Ve+se/V.locationSize*Se)*Xe,K)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,W.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,je);for(let le=0;le<V.locationSize;le++)w(V.location+le,se/V.locationSize,Ke,j,se*Xe,se/V.locationSize*le*Xe,K)}}else if(U!==void 0){const j=U[B];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}y()}function T(){L();for(const v in n){const R=n[v];for(const O in R){const k=R[O];for(const z in k)u(k[z].object),delete k[z];delete R[O]}delete n[v]}}function M(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const O in R){const k=R[O];for(const z in k)u(k[z].object),delete k[z];delete R[O]}delete n[v.id]}function A(v){for(const R in n){const O=n[R];if(O[v.id]===void 0)continue;const k=O[v.id];for(const z in k)u(k[z].object),delete k[z];delete O[v.id]}}function L(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function uv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Wn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:T,maxSamples:M}}function dv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Qi,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,w=y*4;let x=p.clippingState||null;l.value=x,x=u(g,d,w,f);for(let T=0;T!==w;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==_;++w,x+=4)o.copy(h[w]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function fv(i){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=ds:a===lc&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===lc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ym(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const os=4,zh=[.125,.215,.35,.446,.526,.582],Er=20,Fl=new Ga,Hh=new it;let Bl=null,kl=0,zl=0,Hl=!1;const Sr=(1+Math.sqrt(5))/2,rs=1/Sr,Vh=[new P(-Sr,rs,0),new P(Sr,rs,0),new P(-rs,0,Sr),new P(rs,0,Sr),new P(0,Sr,-rs),new P(0,Sr,rs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],pv=new P;class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=pv}=s;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,zl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:qn,format:Xn,colorSpace:Dn,depthBuffer:!1},r=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(s)),this._blurMaterial=gv(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,r,s){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Hh),h.toneMapping=or,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new Tt({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new lt(new Es,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Hh),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const T=this._cubeSize;Qo(r,x*T,w>2?T:0,T,T),h.setRenderTarget(r),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ds||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vh[(r-s-1)%Vh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let y=0;for(let A=0;A<Er;++A){const L=A/_,b=Math.exp(-L*L/2);p.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[r],T=3*x*(r>w-os?r-w+os:0),M=4*(this._cubeSize-x);Qo(t,T,M,3*x,2*x),l.setRenderTarget(t),l.render(h,Fl)}}function mv(i){const e=[],t=[],n=[];let r=i;const s=i-os+1+zh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-os?l=zh[o-i+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,L=M>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(b,_*g*M),w.set(d,m*g*M);const v=[M,M,M,M,M,M];x.set(v,p*g*M)}const T=new Ht;T.setAttribute("position",new fn(y,_)),T.setAttribute("uv",new fn(w,m)),T.setAttribute("faceIndex",new fn(x,p)),e.push(T),r>os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wh(i,e,t){const n=new yn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gv(i,e,t){const n=new Float32Array(Er),r=new P(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Xh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function qh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _v(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,u=l===ds||l===fs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Gh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Gh(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ho("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xv(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let w=0,x=y.length;w<x;w+=3){const T=y[w+0],M=y[w+1],A=y[w+2];d.push(T,M,M,A,A,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let w=0,x=y.length/3-1;w<x;w+=3){const T=w+0,M=w+1,A=w+2;d.push(T,M,M,A,A,T)}}else return;const m=new(jd(d)?Qd:Jd)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mv(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bv(i,e,t){const n=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,M=1;T>e.maxTextureSize&&(M=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*M*4*h),L=new $d(A,T,M,h);L.type=Wn,L.needsUpdate=!0;const b=x*4;for(let R=0;R<h;R++){const O=p[R],k=y[R],z=w[R],Z=T*M*4*R;for(let U=0;U<O.count;U++){const B=U*b;g===!0&&(r.fromBufferAttribute(O,U),A[Z+B+0]=r.x,A[Z+B+1]=r.y,A[Z+B+2]=r.z,A[Z+B+3]=0),_===!0&&(r.fromBufferAttribute(k,U),A[Z+B+4]=r.x,A[Z+B+5]=r.y,A[Z+B+6]=r.z,A[Z+B+7]=0),m===!0&&(r.fromBufferAttribute(z,U),A[Z+B+8]=r.x,A[Z+B+9]=r.y,A[Z+B+10]=r.z,A[Z+B+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new Oe(T,M)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Sv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const gf=new rn,Yh=new vu(1,1),_f=new $d,vf=new sm,xf=new nf,Kh=[],jh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Kh[r];if(s===void 0&&(s=new Float32Array(r),Kh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),an(t,n)}}function Cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),an(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),an(t,n)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function kv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=Kd,s=Yh):s=gf,t.setTexture2D(e||s,r)}function zv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vf,r)}function Hv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xf,r)}function Vv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_f,r)}function Gv(i){switch(i){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Ov;case 36295:return Fv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Wv(i,e){i.uniform1fv(this.addr,e)}function Xv(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jv(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $v(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Jv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function rx(i,e){i.uniform4uiv(this.addr,e)}function sx(i,e,t){const n=this.cache,r=e.length,s=Wa(t,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gf,s[o])}function ox(i,e,t){const n=this.cache,r=e.length,s=Wa(t,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vf,s[o])}function ax(i,e,t){const n=this.cache,r=e.length,s=Wa(t,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xf,s[o])}function lx(i,e,t){const n=this.cache,r=e.length,s=Wa(t,r);on(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_f,s[o])}function cx(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return jv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gv(t.type)}}class hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}}class dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Qh(i,e){i.seq.push(e),i.map[e.id]=e}function fx(i,e,t){const n=i.name,r=n.length;for(Vl.lastIndex=0;;){const s=Vl.exec(n),o=Vl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qh(t,c===void 0?new ux(a,i,e):new hx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new dx(a),Qh(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ed(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const px=37297;let mx=0;function gx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const td=new ut;function _x(i){bt._getMatrix(td,bt.workingColorSpace,i);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+gx(i.getShaderSource(e),a)}else return s}function vx(i,e){const t=_x(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xx(i,e){let t;switch(e){case Dd:t="Linear";break;case Id:t="Reinhard";break;case Nd:t="Cineon";break;case eu:t="ACESFilmic";break;case Od:t="AgX";break;case Fd:t="Neutral";break;case Ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new P;function Mx(){bt.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function bx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function id(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(wx,Tx)}const Ex=new Map;function Tx(i,e){let t=dt[e];if(t===void 0){const n=Ex.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(Ax,Rx)}function Rx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function od(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===op?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Px(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fs&&(e="ENVMAP_MODE_REFRACTION"),e}function Dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case yp:e="ENVMAP_BLENDING_MIX";break;case bp:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nx(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cx(t),c=Px(t),u=Lx(t),h=Dx(t),d=Ix(t),f=yx(t),g=bx(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?dt.tonemapping_pars_fragment:"",t.toneMapping!==or?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,vx("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Hc(o),o=id(o,t),o=rd(o,t),a=Hc(a),a=id(a,t),a=rd(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+o,x=y+p+a,T=ed(r,r.VERTEX_SHADER,w),M=ed(r,r.FRAGMENT_SHADER,x);r.attachShader(_,T),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(T)||"",z=r.getShaderInfoLog(M)||"",Z=O.trim(),U=k.trim(),B=z.trim();let V=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,M);else{const j=nd(r,T,"vertex"),se=nd(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+j+`
`+se)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(U===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:V,programLog:Z,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(T),r.deleteShader(M),L=new _a(r,_),b=Sx(r,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,px)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}let Ux=0;class Ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fx(e),t.set(e,n)),n}}class Fx{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}}function Bx(i,e,t,n,r,s,o){const a=new uu,l=new Ox,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,R,O,k){const z=O.fog,Z=k.geometry,U=b.isMeshStandardMaterial?O.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),V=B&&B.mapping===Fa?B.image.height:null,W=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=j!==void 0?j.length:0;let Me=0;Z.morphAttributes.position!==void 0&&(Me=1),Z.morphAttributes.normal!==void 0&&(Me=2),Z.morphAttributes.color!==void 0&&(Me=3);let je,Ke,Xe,K;if(W){const xt=di[W];je=xt.vertexShader,Ke=xt.fragmentShader}else je=b.vertexShader,Ke=b.fragmentShader,l.update(b),Xe=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);const le=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ve=k.isInstancedMesh===!0,Se=k.isBatchedMesh===!0,J=!!b.map,ge=!!b.matcap,I=!!B,Pe=!!b.aoMap,N=!!b.lightMap,H=!!b.bumpMap,G=!!b.normalMap,ve=!!b.displacementMap,ne=!!b.emissiveMap,Ue=!!b.metalnessMap,Je=!!b.roughnessMap,fe=b.anisotropy>0,D=b.clearcoat>0,S=b.dispersion>0,Y=b.iridescence>0,re=b.sheen>0,_e=b.transmission>0,oe=fe&&!!b.anisotropyMap,Be=D&&!!b.clearcoatMap,ye=D&&!!b.clearcoatNormalMap,ze=D&&!!b.clearcoatRoughnessMap,He=Y&&!!b.iridescenceMap,Ee=Y&&!!b.iridescenceThicknessMap,Ie=re&&!!b.sheenColorMap,$=re&&!!b.sheenRoughnessMap,ue=!!b.specularMap,pe=!!b.specularColorMap,xe=!!b.specularIntensityMap,F=_e&&!!b.transmissionMap,he=_e&&!!b.thicknessMap,ce=!!b.gradientMap,Te=!!b.alphaMap,me=b.alphaTest>0,de=!!b.alphaHash,Ne=!!b.extensions;let Qe=or;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const Pt={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:Ke,defines:b.defines,customVertexShaderID:Xe,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Se,batchingColor:Se&&k._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&k.instanceColor!==null,instancingMorph:Ve&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Dn,alphaToCoverage:!!b.alphaToCoverage,map:J,matcap:ge,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:V,aoMap:Pe,lightMap:N,bumpMap:H,normalMap:G,displacementMap:d&&ve,emissiveMap:ne,normalMapObjectSpace:G&&b.normalMapType===Rp,normalMapTangentSpace:G&&b.normalMapType===au,metalnessMap:Ue,roughnessMap:Je,anisotropy:fe,anisotropyMap:oe,clearcoat:D,clearcoatMap:Be,clearcoatNormalMap:ye,clearcoatRoughnessMap:ze,dispersion:S,iridescence:Y,iridescenceMap:He,iridescenceThicknessMap:Ee,sheen:re,sheenColorMap:Ie,sheenRoughnessMap:$,specularMap:ue,specularColorMap:pe,specularIntensityMap:xe,transmission:_e,transmissionMap:F,thicknessMap:he,gradientMap:ce,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:de,combine:b.combine,mapUv:J&&_(b.map.channel),aoMapUv:Pe&&_(b.aoMap.channel),lightMapUv:N&&_(b.lightMap.channel),bumpMapUv:H&&_(b.bumpMap.channel),normalMapUv:G&&_(b.normalMap.channel),displacementMapUv:ve&&_(b.displacementMap.channel),emissiveMapUv:ne&&_(b.emissiveMap.channel),metalnessMapUv:Ue&&_(b.metalnessMap.channel),roughnessMapUv:Je&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:Be&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:$&&_(b.sheenRoughnessMap.channel),specularMapUv:ue&&_(b.specularMap.channel),specularColorMapUv:pe&&_(b.specularColorMap.channel),specularIntensityMapUv:xe&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:he&&_(b.thicknessMap.channel),alphaMapUv:Te&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(G||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(J||Te),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:J&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jt,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)v.push(R),v.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(v,b),w(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function y(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function w(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const v=g[b.type];let R;if(v){const O=di[v];R=mi.clone(O.uniforms)}else R=b.uniforms;return R}function T(b,v){let R;for(let O=0,k=u.length;O<k;O++){const z=u[O];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Nx(i,v,b,s),u.push(R)),R}function M(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:L}}function kx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function zx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ld(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||zx),n.length>1&&n.sort(d||ad),r.length>1&&r.sort(d||ad)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Hx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ld,i.set(n,[o])):r>=s.length?(o=new ld,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new it};break;case"SpotLight":t={position:new P,direction:new P,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wx=0;function Xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i){const e=new Vx,t=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,s=new ot,o=new ot;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,w=0,x=0,T=0,M=0,A=0;c.sort(Xx);for(let b=0,v=c.length;b<v;b++){const R=c[b],O=R.color,k=R.intensity,z=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*k,h+=O.g*k,d+=O.b*k;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],k);A++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,V=t.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=U,f++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(O).multiplyScalar(k),U.distance=z,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[_]=U;const B=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,B.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[_]=B.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,x++}_++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(O).multiplyScalar(k),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=U,m++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const B=R.shadow,V=t.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=U,g++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(k),U.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=A,n.version=Wx++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function cd(i){const e=new qx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cd(i),e.set(r,[a])):s>=o.length?(a=new cd(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $x(i,e,t){let n=new ka;const r=new Oe,s=new Oe,o=new yt,a=new $m({depthPacking:Ap}),l=new Zm,c={},u=t.maxTextureSize,h={[ki]:On,[On]:ki,[Jt]:Jt},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Kx,fragmentShader:jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let p=this.type;this.render=function(M,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Rn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==Pi&&this.type===Pi,z=p===Pi&&this.type!==Pi;for(let Z=0,U=M.length;Z<U;Z++){const B=M[Z],V=B.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const W=V.getFrameExtents();if(r.multiply(W),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,V.mapSize.y=s.y)),V.map===null||k===!0||z===!0){const se=this.type!==Pi?{minFilter:gn,magFilter:gn}:{};V.map!==null&&V.map.dispose(),V.map=new yn(r.x,r.y,se),V.map.texture.name=B.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const j=V.getViewportCount();for(let se=0;se<j;se++){const Me=V.getViewport(se);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(o),V.updateMatrices(B,se),n=V.getFrustum(),x(A,L,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&y(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,R)};function y(M,A){const L=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yn(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function w(M,A,L,b){let v=null;const R=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)v=R;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=v.uuid,k=A.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let Z=z[k];Z===void 0&&(Z=v.clone(),z[k]=Z,A.addEventListener("dispose",T)),v=Z}if(v.visible=A.visible,v.wireframe=A.wireframe,b===Pi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=L}return v}function x(M,A,L,b,v){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Pi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const k=e.update(M),z=M.material;if(Array.isArray(z)){const Z=k.groups;for(let U=0,B=Z.length;U<B;U++){const V=Z[U],W=z[V.materialIndex];if(W&&W.visible){const j=w(M,W,b,v);M.onBeforeShadow(i,M,A,L,k,j,V),i.renderBufferDirect(L,null,k,j,M,V),M.onAfterShadow(i,M,A,L,k,j,V)}}}else if(z.visible){const Z=w(M,z,b,v);M.onBeforeShadow(i,M,A,L,k,Z,null),i.renderBufferDirect(L,null,k,Z,M,null),M.onAfterShadow(i,M,A,L,k,Z,null)}}const O=M.children;for(let k=0,z=O.length;k<z;k++)x(O[k],A,L,b,v)}function T(M){M.target.removeEventListener("dispose",T);for(const L in c){const b=c[L],v=M.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const Zx={[ec]:tc,[nc]:sc,[ic]:oc,[hs]:rc,[tc]:ec,[sc]:nc,[oc]:ic,[rc]:hs};function Jx(i,e){function t(){let F=!1;const he=new yt;let ce=null;const Te=new yt(0,0,0,0);return{setMask:function(me){ce!==me&&!F&&(i.colorMask(me,me,me,me),ce=me)},setLocked:function(me){F=me},setClear:function(me,de,Ne,Qe,Pt){Pt===!0&&(me*=Qe,de*=Qe,Ne*=Qe),he.set(me,de,Ne,Qe),Te.equals(he)===!1&&(i.clearColor(me,de,Ne,Qe),Te.copy(he))},reset:function(){F=!1,ce=null,Te.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,ce=null,Te=null,me=null;return{setReversed:function(de){if(he!==de){const Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),he=de;const Qe=me;me=null,this.setClear(Qe)}},getReversed:function(){return he},setTest:function(de){de?le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(de){ce!==de&&!F&&(i.depthMask(de),ce=de)},setFunc:function(de){if(he&&(de=Zx[de]),Te!==de){switch(de){case ec:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case nc:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case ic:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=de}},setLocked:function(de){F=de},setClear:function(de){me!==de&&(he&&(de=1-de),i.clearDepth(de),me=de)},reset:function(){F=!1,ce=null,Te=null,me=null,he=!1}}}function r(){let F=!1,he=null,ce=null,Te=null,me=null,de=null,Ne=null,Qe=null,Pt=null;return{setTest:function(xt){F||(xt?le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(xt){he!==xt&&!F&&(i.stencilMask(xt),he=xt)},setFunc:function(xt,bn,_n){(ce!==xt||Te!==bn||me!==_n)&&(i.stencilFunc(xt,bn,_n),ce=xt,Te=bn,me=_n)},setOp:function(xt,bn,_n){(de!==xt||Ne!==bn||Qe!==_n)&&(i.stencilOp(xt,bn,_n),de=xt,Ne=bn,Qe=_n)},setLocked:function(xt){F=xt},setClear:function(xt){Pt!==xt&&(i.clearStencil(xt),Pt=xt)},reset:function(){F=!1,he=null,ce=null,Te=null,me=null,de=null,Ne=null,Qe=null,Pt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,w=null,x=null,T=null,M=null,A=new it(0,0,0),L=0,b=!1,v=null,R=null,O=null,k=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=B>=2);let W=null,j={};const se=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),je=new yt().fromArray(se),Ke=new yt().fromArray(Me);function Xe(F,he,ce,Te){const me=new Uint8Array(4),de=i.createTexture();i.bindTexture(F,de),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ce;Ne++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(he+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return de}const K={};K[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(hs),H(!1),G(Wu),le(i.CULL_FACE),Pe(Rn);function le(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function be(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ve(F,he){return h[F]!==he?(i.bindFramebuffer(F,he),h[F]=he,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Se(F,he){let ce=f,Te=!1;if(F){ce=d.get(he),ce===void 0&&(ce=[],d.set(he,ce));const me=F.textures;if(ce.length!==me.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ne=me.length;de<Ne;de++)ce[de]=i.COLOR_ATTACHMENT0+de;ce.length=me.length,Te=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ce)}function J(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ge={[Ii]:i.FUNC_ADD,[ap]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};ge[cp]=i.MIN,ge[up]=i.MAX;const I={[Zl]:i.ZERO,[hp]:i.ONE,[dp]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[fp]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[Mp]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(F,he,ce,Te,me,de,Ne,Qe,Pt,xt){if(F===Rn){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),F!==Rd){if(F!==m||xt!==b){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),xt)switch(F){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.ONE,i.ONE);break;case Xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,w=null,T=null,M=null,A.set(0,0,0),L=0,m=F,b=xt}return}me=me||he,de=de||ce,Ne=Ne||Te,(he!==p||me!==x)&&(i.blendEquationSeparate(ge[he],ge[me]),p=he,x=me),(ce!==y||Te!==w||de!==T||Ne!==M)&&(i.blendFuncSeparate(I[ce],I[Te],I[de],I[Ne]),y=ce,w=Te,T=de,M=Ne),(Qe.equals(A)===!1||Pt!==L)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Pt),A.copy(Qe),L=Pt),m=F,b=!1}function N(F,he){F.side===Jt?be(i.CULL_FACE):le(i.CULL_FACE);let ce=F.side===On;he&&(ce=!ce),H(ce),F.blending===as&&F.transparent===!1?Pe(Rn):Pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Te=F.stencilWrite;a.setTest(Te),Te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function G(F){F!==rp?(le(i.CULL_FACE),F!==R&&(F===Wu?i.cullFace(i.BACK):F===sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),R=F}function ve(F){F!==O&&(U&&i.lineWidth(F),O=F)}function ne(F,he,ce){F?(le(i.POLYGON_OFFSET_FILL),(k!==he||z!==ce)&&(i.polygonOffset(he,ce),k=he,z=ce)):be(i.POLYGON_OFFSET_FILL)}function Ue(F){F?le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Je(F){F===void 0&&(F=i.TEXTURE0+Z-1),W!==F&&(i.activeTexture(F),W=F)}function fe(F,he,ce){ce===void 0&&(W===null?ce=i.TEXTURE0+Z-1:ce=W);let Te=j[ce];Te===void 0&&(Te={type:void 0,texture:void 0},j[ce]=Te),(Te.type!==F||Te.texture!==he)&&(W!==ce&&(i.activeTexture(ce),W=ce),i.bindTexture(F,he||K[F]),Te.type=F,Te.texture=he)}function D(){const F=j[W];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function $(F){Ke.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ke.copy(F))}function ue(F,he){let ce=c.get(he);ce===void 0&&(ce=new WeakMap,c.set(he,ce));let Te=ce.get(F);Te===void 0&&(Te=i.getUniformBlockIndex(he,F.name),ce.set(F,Te))}function pe(F,he){const Te=c.get(he).get(F);l.get(he)!==Te&&(i.uniformBlockBinding(he,Te,F.__bindingPointIndex),l.set(he,Te))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,j={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,w=null,x=null,T=null,M=null,A=new it(0,0,0),L=0,b=!1,v=null,R=null,O=null,k=null,z=null,je.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Ve,drawBuffers:Se,useProgram:J,setBlending:Pe,setMaterial:N,setFlipSided:H,setCullFace:G,setLineWidth:ve,setPolygonOffset:ne,setScissorTest:Ue,activeTexture:Je,bindTexture:fe,unbindTexture:D,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:He,texImage3D:Ee,updateUBOMapping:ue,uniformBlockBinding:pe,texStorage2D:ye,texStorage3D:ze,texSubImage2D:re,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:Be,scissor:Ie,viewport:$,reset:xe}}function Qx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return f?new OffscreenCanvas(D,S):uo("canvas")}function _(D,S,Y){let re=1;const _e=fe(D);if((_e.width>Y||_e.height>Y)&&(re=Y/Math.max(_e.width,_e.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(re*_e.width),Be=Math.floor(re*_e.height);h===void 0&&(h=g(oe,Be));const ye=S?g(oe,Be):h;return ye.width=oe,ye.height=Be,ye.getContext("2d").drawImage(D,0,0,oe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+oe+"x"+Be+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(D,S,Y,re,_e=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=S;if(S===i.RED&&(Y===i.FLOAT&&(oe=i.R32F),Y===i.HALF_FLOAT&&(oe=i.R16F),Y===i.UNSIGNED_BYTE&&(oe=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.R8UI),Y===i.UNSIGNED_SHORT&&(oe=i.R16UI),Y===i.UNSIGNED_INT&&(oe=i.R32UI),Y===i.BYTE&&(oe=i.R8I),Y===i.SHORT&&(oe=i.R16I),Y===i.INT&&(oe=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(oe=i.RG32F),Y===i.HALF_FLOAT&&(oe=i.RG16F),Y===i.UNSIGNED_BYTE&&(oe=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Y===i.UNSIGNED_INT&&(oe=i.RG32UI),Y===i.BYTE&&(oe=i.RG8I),Y===i.SHORT&&(oe=i.RG16I),Y===i.INT&&(oe=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Y===i.UNSIGNED_INT&&(oe=i.RGB32UI),Y===i.BYTE&&(oe=i.RGB8I),Y===i.SHORT&&(oe=i.RGB16I),Y===i.INT&&(oe=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Y===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Y===i.BYTE&&(oe=i.RGBA8I),Y===i.SHORT&&(oe=i.RGBA16I),Y===i.INT&&(oe=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),S===i.RGBA){const Be=_e?Ea:bt.getTransfer(re);Y===i.FLOAT&&(oe=i.RGBA32F),Y===i.HALF_FLOAT&&(oe=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(oe=Be===Rt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(D,S){let Y;return D?S===null||S===Pr||S===ps?Y=i.DEPTH24_STENCIL8:S===Wn?Y=i.DEPTH32F_STENCIL8:S===oo&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pr||S===ps?Y=i.DEPTH_COMPONENT24:S===Wn?Y=i.DEPTH_COMPONENT32F:S===oo&&(Y=i.DEPTH_COMPONENT16),Y}function T(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==gn&&D.minFilter!==Pn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function M(D){const S=D.target;S.removeEventListener("dispose",M),L(S),S.isVideoTexture&&u.delete(S)}function A(D){const S=D.target;S.removeEventListener("dispose",A),v(S)}function L(D){const S=n.get(D);if(S.__webglInit===void 0)return;const Y=D.source,re=d.get(Y);if(re){const _e=re[S.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(D),Object.keys(re).length===0&&d.delete(Y)}n.remove(D)}function b(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const Y=D.source,re=d.get(Y);delete re[S.__cacheKey],o.memory.textures--}function v(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let _e=0;_e<S.__webglFramebuffer[re].length;_e++)i.deleteFramebuffer(S.__webglFramebuffer[re][_e]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=D.textures;for(let re=0,_e=Y.length;re<_e;re++){const oe=n.get(Y[re]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(Y[re])}n.remove(D)}let R=0;function O(){R=0}function k(){const D=R;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),R+=1,D}function z(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function Z(D,S){const Y=n.get(D);if(D.isVideoTexture&&Ue(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,D,S);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function U(D,S){const Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){K(Y,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function B(D,S){const Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){K(Y,D,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function V(D,S){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){le(Y,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const W={[vi]:i.REPEAT,[ir]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},j={[gn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},se={[Cp]:i.NEVER,[Up]:i.ALWAYS,[Pp]:i.LESS,[Kd]:i.LEQUAL,[Lp]:i.EQUAL,[Np]:i.GEQUAL,[Dp]:i.GREATER,[Ip]:i.NOTEQUAL};function Me(D,S){if(S.type===Wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Pn||S.magFilter===da||S.magFilter===js||S.magFilter===Ni||S.minFilter===Pn||S.minFilter===da||S.minFilter===js||S.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,W[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,j[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==js&&S.minFilter!==Ni||S.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(D,S){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",M));const re=S.source;let _e=d.get(re);_e===void 0&&(_e={},d.set(re,_e));const oe=z(S);if(oe!==D.__cacheKey){_e[oe]===void 0&&(_e[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),_e[oe].usedTimes++;const Be=_e[D.__cacheKey];Be!==void 0&&(_e[D.__cacheKey].usedTimes--,Be.usedTimes===0&&b(S)),D.__cacheKey=oe,D.__webglTexture=_e[oe].texture}return Y}function Ke(D,S,Y){return Math.floor(Math.floor(D/Y)/S)}function Xe(D,S,Y,re){const oe=D.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,re,S.data);else{oe.sort((Ee,Ie)=>Ee.start-Ie.start);let Be=0;for(let Ee=1;Ee<oe.length;Ee++){const Ie=oe[Be],$=oe[Ee],ue=Ie.start+Ie.count,pe=Ke($.start,S.width,4),xe=Ke(Ie.start,S.width,4);$.start<=ue+1&&pe===xe&&Ke($.start+$.count-1,S.width,4)===pe?Ie.count=Math.max(Ie.count,$.start+$.count-Ie.start):(++Be,oe[Be]=$)}oe.length=Be+1;const ye=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,Ie=oe.length;Ee<Ie;Ee++){const $=oe[Ee],ue=Math.floor($.start/4),pe=Math.ceil($.count/4),xe=ue%S.width,F=Math.floor(ue/S.width),he=pe,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,xe,F,he,ce,Y,re,S.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function K(D,S,Y){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const _e=je(D,S),oe=S.source;t.bindTexture(re,D.__webglTexture,i.TEXTURE0+Y);const Be=n.get(oe);if(oe.version!==Be.__version||_e===!0){t.activeTexture(i.TEXTURE0+Y);const ye=bt.getPrimaries(bt.workingColorSpace),ze=S.colorSpace===er?null:bt.getPrimaries(S.colorSpace),He=S.colorSpace===er||ye===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ee=_(S.image,!1,r.maxTextureSize);Ee=Je(S,Ee);const Ie=s.convert(S.format,S.colorSpace),$=s.convert(S.type);let ue=w(S.internalFormat,Ie,$,S.colorSpace,S.isVideoTexture);Me(re,S);let pe;const xe=S.mipmaps,F=S.isVideoTexture!==!0,he=Be.__version===void 0||_e===!0,ce=oe.dataReady,Te=T(S,Ee);if(S.isDepthTexture)ue=x(S.format===ms,S.type),he&&(F?t.texStorage2D(i.TEXTURE_2D,1,ue,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,ue,Ee.width,Ee.height,0,Ie,$,null));else if(S.isDataTexture)if(xe.length>0){F&&he&&t.texStorage2D(i.TEXTURE_2D,Te,ue,xe[0].width,xe[0].height);for(let me=0,de=xe.length;me<de;me++)pe=xe[me],F?ce&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,pe.width,pe.height,Ie,$,pe.data):t.texImage2D(i.TEXTURE_2D,me,ue,pe.width,pe.height,0,Ie,$,pe.data);S.generateMipmaps=!1}else F?(he&&t.texStorage2D(i.TEXTURE_2D,Te,ue,Ee.width,Ee.height),ce&&Xe(S,Ee,Ie,$)):t.texImage2D(i.TEXTURE_2D,0,ue,Ee.width,Ee.height,0,Ie,$,Ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ue,xe[0].width,xe[0].height,Ee.depth);for(let me=0,de=xe.length;me<de;me++)if(pe=xe[me],S.format!==Xn)if(Ie!==null)if(F){if(ce)if(S.layerUpdates.size>0){const Ne=kh(pe.width,pe.height,S.format,S.type);for(const Qe of S.layerUpdates){const Pt=pe.data.subarray(Qe*Ne/pe.data.BYTES_PER_ELEMENT,(Qe+1)*Ne/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Qe,pe.width,pe.height,1,Ie,Pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,pe.width,pe.height,Ee.depth,Ie,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ue,pe.width,pe.height,Ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,pe.width,pe.height,Ee.depth,Ie,$,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ue,pe.width,pe.height,Ee.depth,0,Ie,$,pe.data)}else{F&&he&&t.texStorage2D(i.TEXTURE_2D,Te,ue,xe[0].width,xe[0].height);for(let me=0,de=xe.length;me<de;me++)pe=xe[me],S.format!==Xn?Ie!==null?F?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ue,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ce&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,pe.width,pe.height,Ie,$,pe.data):t.texImage2D(i.TEXTURE_2D,me,ue,pe.width,pe.height,0,Ie,$,pe.data)}else if(S.isDataArrayTexture)if(F){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ue,Ee.width,Ee.height,Ee.depth),ce)if(S.layerUpdates.size>0){const me=kh(Ee.width,Ee.height,S.format,S.type);for(const de of S.layerUpdates){const Ne=Ee.data.subarray(de*me/Ee.data.BYTES_PER_ELEMENT,(de+1)*me/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Ee.width,Ee.height,1,Ie,$,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,$,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Ee.width,Ee.height,Ee.depth,0,Ie,$,Ee.data);else if(S.isData3DTexture)F?(he&&t.texStorage3D(i.TEXTURE_3D,Te,ue,Ee.width,Ee.height,Ee.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,$,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Ee.width,Ee.height,Ee.depth,0,Ie,$,Ee.data);else if(S.isFramebufferTexture){if(he)if(F)t.texStorage2D(i.TEXTURE_2D,Te,ue,Ee.width,Ee.height);else{let me=Ee.width,de=Ee.height;for(let Ne=0;Ne<Te;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ue,me,de,0,Ie,$,null),me>>=1,de>>=1}}else if(xe.length>0){if(F&&he){const me=fe(xe[0]);t.texStorage2D(i.TEXTURE_2D,Te,ue,me.width,me.height)}for(let me=0,de=xe.length;me<de;me++)pe=xe[me],F?ce&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ie,$,pe):t.texImage2D(i.TEXTURE_2D,me,ue,Ie,$,pe);S.generateMipmaps=!1}else if(F){if(he){const me=fe(Ee);t.texStorage2D(i.TEXTURE_2D,Te,ue,me.width,me.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,$,Ee)}else t.texImage2D(i.TEXTURE_2D,0,ue,Ie,$,Ee);m(S)&&p(re),Be.__version=oe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function le(D,S,Y){if(S.image.length!==6)return;const re=je(D,S),_e=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Y);const oe=n.get(_e);if(_e.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+Y);const Be=bt.getPrimaries(bt.workingColorSpace),ye=S.colorSpace===er?null:bt.getPrimaries(S.colorSpace),ze=S.colorSpace===er||Be===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!He&&!Ee?Ie[de]=_(S.image[de],!0,r.maxCubemapSize):Ie[de]=Ee?S.image[de].image:S.image[de],Ie[de]=Je(S,Ie[de]);const $=Ie[0],ue=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),xe=w(S.internalFormat,ue,pe,S.colorSpace),F=S.isVideoTexture!==!0,he=oe.__version===void 0||re===!0,ce=_e.dataReady;let Te=T(S,$);Me(i.TEXTURE_CUBE_MAP,S);let me;if(He){F&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,xe,$.width,$.height);for(let de=0;de<6;de++){me=Ie[de].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const Qe=me[Ne];S.format!==Xn?ue!==null?F?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Qe.width,Qe.height,ue,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,xe,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Qe.width,Qe.height,ue,pe,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,xe,Qe.width,Qe.height,0,ue,pe,Qe.data)}}}else{if(me=S.mipmaps,F&&he){me.length>0&&Te++;const de=fe(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,xe,de.width,de.height)}for(let de=0;de<6;de++)if(Ee){F?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,ue,pe,Ie[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,xe,Ie[de].width,Ie[de].height,0,ue,pe,Ie[de].data);for(let Ne=0;Ne<me.length;Ne++){const Pt=me[Ne].image[de].image;F?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,Pt.width,Pt.height,ue,pe,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,xe,Pt.width,Pt.height,0,ue,pe,Pt.data)}}else{F?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ue,pe,Ie[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,xe,ue,pe,Ie[de]);for(let Ne=0;Ne<me.length;Ne++){const Qe=me[Ne];F?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,ue,pe,Qe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,xe,ue,pe,Qe.image[de])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),oe.__version=_e.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function be(D,S,Y,re,_e,oe){const Be=s.convert(Y.format,Y.colorSpace),ye=s.convert(Y.type),ze=w(Y.internalFormat,Be,ye,Y.colorSpace),He=n.get(S),Ee=n.get(Y);if(Ee.__renderTarget=S,!He.__hasExternalTextures){const Ie=Math.max(1,S.width>>oe),$=Math.max(1,S.height>>oe);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,oe,ze,Ie,$,S.depth,0,Be,ye,null):t.texImage2D(_e,oe,ze,Ie,$,0,Be,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,_e,Ee.__webglTexture,0,ve(S)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,_e,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(D,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const re=S.depthTexture,_e=re&&re.isDepthTexture?re.type:null,oe=x(S.stencilBuffer,_e),Be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=ve(S);ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,oe,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,D)}else{const re=S.textures;for(let _e=0;_e<re.length;_e++){const oe=re[_e],Be=s.convert(oe.format,oe.colorSpace),ye=s.convert(oe.type),ze=w(oe.internalFormat,Be,ye,oe.colorSpace),He=ve(S);Y&&ne(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ze,S.width,S.height):ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ze,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ze,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const _e=re.__webglTexture,oe=ve(S);if(S.depthTexture.format===ao)ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(S.depthTexture.format===ms)ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function J(D){const S=n.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const _e=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",_e)};re.addEventListener("dispose",_e),S.__depthDisposeCallback=_e}S.__boundDepthTexture=re}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const re=D.texture.mipmaps;re&&re.length>0?Se(S.__webglFramebuffer[0],D):Se(S.__webglFramebuffer,D)}else if(Y){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),Ve(S.__webglDepthbuffer[re],D,!1);else{const _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,oe)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ve(S.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(D,S,Y){const re=n.get(D);S!==void 0&&be(re.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&J(D)}function I(D){const S=D.texture,Y=n.get(D),re=n.get(S);D.addEventListener("dispose",A);const _e=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Be=_e.length>1;if(Be||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,o.memory.textures++),oe){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let ze=0;ze<S.mipmaps.length;ze++)Y.__webglFramebuffer[ye][ze]=i.createFramebuffer()}else Y.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Be)for(let ye=0,ze=_e.length;ye<ze;ye++){const He=n.get(_e[ye]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ne(D)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ye=0;ye<_e.length;ye++){const ze=_e[ye];Y.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ye]);const He=s.convert(ze.format,ze.colorSpace),Ee=s.convert(ze.type),Ie=w(ze.internalFormat,He,Ee,ze.colorSpace,D.isXRRenderTarget===!0),$=ve(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Ie,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Me(i.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)be(Y.__webglFramebuffer[ye][ze],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze);else be(Y.__webglFramebuffer[ye],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let ye=0,ze=_e.length;ye<ze;ye++){const He=_e[ye],Ee=n.get(He);let Ie=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ee.__webglTexture),Me(Ie,He),be(Y.__webglFramebuffer,D,He,i.COLOR_ATTACHMENT0+ye,Ie,0),m(He)&&p(Ie)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),Me(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)be(Y.__webglFramebuffer[ze],D,S,i.COLOR_ATTACHMENT0,ye,ze);else be(Y.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,ye,0);m(S)&&p(ye),t.unbindTexture()}D.depthBuffer&&J(D)}function Pe(D){const S=D.textures;for(let Y=0,re=S.length;Y<re;Y++){const _e=S[Y];if(m(_e)){const oe=y(D),Be=n.get(_e).__webglTexture;t.bindTexture(oe,Be),p(oe),t.unbindTexture()}}}const N=[],H=[];function G(D){if(D.samples>0){if(ne(D)===!1){const S=D.textures,Y=D.width,re=D.height;let _e=i.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(D),ye=S.length>1;if(ye)for(let He=0;He<S.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let He=0;He<S.length;He++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const Ee=n.get(S[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,_e,i.NEAREST),l===!0&&(N.length=0,H.length=0,N.push(i.COLOR_ATTACHMENT0+He),D.depthBuffer&&D.resolveDepthBuffer===!1&&(N.push(oe),H.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let He=0;He<S.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const Ee=n.get(S[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ve(D){return Math.min(r.maxSamples,D.samples)}function ne(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(D){const S=o.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function Je(D,S){const Y=D.colorSpace,re=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Dn&&Y!==er&&(bt.getTransfer(Y)===Rt?(re!==Xn||_e!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ne}function e1(i,e){function t(n,r=er){let s;const o=bt.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zd)return i.BYTE;if(n===Hd)return i.SHORT;if(n===oo)return i.UNSIGNED_SHORT;if(n===tu)return i.INT;if(n===Pr)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Wd)return i.ALPHA;if(n===Xd)return i.RGB;if(n===Xn)return i.RGBA;if(n===ao)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===ru)return i.RED_INTEGER;if(n===qd)return i.RG;if(n===su)return i.RG_INTEGER;if(n===ou)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===uc||n===hc||n===dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fc||n===pc)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===_c||n===vc||n===xc||n===Mc||n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Lc||n===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pc)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Nc||n===Uc||n===Oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new of(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends Ss{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new i1,p={},y=t.getContextAttributes();let w=null,x=null;const T=[],M=[],A=new Oe;let L=null;const b=new dn;b.viewport=new yt;const v=new dn;v.viewport=new yt;const R=[b,v],O=new gg;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=T[K];return le===void 0&&(le=new Tl,T[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=T[K];return le===void 0&&(le=new Tl,T[K]=le),le.getGripSpace()},this.getHand=function(K){let le=T[K];return le===void 0&&(le=new Tl,T[K]=le),le.getHandSpace()};function Z(K){const le=M.indexOf(K.inputSource);if(le===-1)return;const be=T[le];be!==void 0&&(be.update(K.inputSource,K.frame,c||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",B);for(let K=0;K<T.length;K++){const le=M[K];le!==null&&(M[K]=null,T[K].disconnect(le))}k=null,z=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(w),f=null,d=null,h=null,r=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",U),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?ms:ao,Ve=y.stencil?ps:Pr);const J={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(J),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new yn(d.textureWidth,d.textureHeight,{format:Xn,type:xi,depthTexture:new vu(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new yn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(K){for(let le=0;le<K.removed.length;le++){const be=K.removed[le],Ve=M.indexOf(be);Ve>=0&&(M[Ve]=null,T[Ve].disconnect(be))}for(let le=0;le<K.added.length;le++){const be=K.added[le];let Ve=M.indexOf(be);if(Ve===-1){for(let J=0;J<T.length;J++)if(J>=M.length){M.push(be),Ve=J;break}else if(M[J]===null){M[J]=be,Ve=J;break}if(Ve===-1)break}const Se=T[Ve];Se&&Se.connect(be)}}const V=new P,W=new P;function j(K,le,be){V.setFromMatrixPosition(le.matrixWorld),W.setFromMatrixPosition(be.matrixWorld);const Ve=V.distanceTo(W),Se=le.projectionMatrix.elements,J=be.projectionMatrix.elements,ge=Se[14]/(Se[10]-1),I=Se[14]/(Se[10]+1),Pe=(Se[9]+1)/Se[5],N=(Se[9]-1)/Se[5],H=(Se[8]-1)/Se[0],G=(J[8]+1)/J[0],ve=ge*H,ne=ge*G,Ue=Ve/(-H+G),Je=Ue*-H;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(Ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const fe=ge+Ue,D=I+Ue,S=ve-Je,Y=ne+(Ve-Je),re=Pe*I/D*fe,_e=N*I/D*fe;K.projectionMatrix.makePerspective(S,Y,re,_e,fe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let le=K.near,be=K.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(be=m.depthFar)),O.near=v.near=b.near=le,O.far=v.far=b.far=be,(k!==O.near||z!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,z=O.far),O.layers.mask=K.layers.mask|6,b.layers.mask=O.layers.mask&3,v.layers.mask=O.layers.mask&5;const Ve=K.parent,Se=O.cameras;se(O,Ve);for(let J=0;J<Se.length;J++)se(Se[J],Ve);Se.length===2?j(O,b,v):O.projectionMatrix.copy(b.projectionMatrix),Me(K,O,Ve)};function Me(K,le,be){be===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let je=null;function Ke(K,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ve=!1;be.length!==O.cameras.length&&(O.cameras.length=0,Ve=!0);for(let I=0;I<be.length;I++){const Pe=be[I];let N=null;if(f!==null)N=f.getViewport(Pe);else{const G=h.getViewSubImage(d,Pe);N=G.viewport,I===0&&(e.setRenderTargetTextures(x,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(x))}let H=R[I];H===void 0&&(H=new dn,H.layers.enable(I),H.viewport=new yt,R[I]=H),H.matrix.fromArray(Pe.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Pe.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(N.x,N.y,N.width,N.height),I===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ve===!0&&O.cameras.push(H)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const I=h.getDepthInformation(be[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<be.length;I++){const Pe=be[I].camera;if(Pe){let N=p[Pe];N||(N=new of,p[Pe]=N);const H=h.getCameraImage(Pe);N.sourceTexture=H}}}}for(let be=0;be<T.length;be++){const Ve=M[be],Se=T[be];Ve!==null&&Se!==void 0&&Se.update(Ve,le,c||o)}je&&je(K,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const Xe=new mf;Xe.setAnimationLoop(Ke),this.setAnimationLoop=function(K){je=K},this.dispose=function(){}}}const Mr=new Mi,s1=new ot;function o1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ef(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,x=y.envMapRotation;w&&(m.envMap.value=w,Mr.copy(x),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(Mr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const x=w.program;n.uniformBlockBinding(y,x)}function c(y,w){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(y,T);const M=e.render.frame;s[y.id]!==M&&(d(y),s[y.id]=M)}function u(y){const w=h();y.__bindingPointIndex=w;const x=i.createBuffer(),T=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=r[y.id],x=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,A=x.length;M<A;M++){const L=Array.isArray(x[M])?x[M]:[x[M]];for(let b=0,v=L.length;b<v;b++){const R=L[b];if(f(R,M,b,T)===!0){const O=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let Z=0;Z<k.length;Z++){const U=k[Z],B=_(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,O+z,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,x,T){const M=y.value,A=w+"_"+x;if(T[A]===void 0)return typeof M=="number"||typeof M=="boolean"?T[A]=M:T[A]=M.clone(),!0;{const L=T[A];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return T[A]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(y){const w=y.uniforms;let x=0;const T=16;for(let A=0,L=w.length;A<L;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let v=0,R=b.length;v<R;v++){const O=b[v],k=Array.isArray(O.value)?O.value:[O.value];for(let z=0,Z=k.length;z<Z;z++){const U=k[z],B=_(U),V=x%T,W=V%B.boundary,j=V+W;x+=W,j!==0&&T-j<B.storage&&(x+=T-j),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=B.storage}}}const M=x%T;return M>0&&(x+=T-M),y.__size=x,y.__cache={},this}function _(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){const w=y.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class l1{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=Nt;let M=0,A=0,L=null,b=-1,v=null;const R=new yt,O=new yt;let k=null;const z=new it(0);let Z=0,U=t.width,B=t.height,V=1,W=null,j=null;const se=new yt(0,0,U,B),Me=new yt(0,0,U,B);let je=!1;const Ke=new ka;let Xe=!1,K=!1;const le=new ot,be=new P,Ve=new yt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ge(){return L===null?V:1}let I=n;function Pe(E,X){return t.getContext(E,X)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const X="webgl2";if(I=Pe(X,E),I===null)throw Pe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let N,H,G,ve,ne,Ue,Je,fe,D,S,Y,re,_e,oe,Be,ye,ze,He,Ee,Ie,$,ue,pe,xe;function F(){N=new vv(I),N.init(),ue=new e1(I,N),H=new hv(I,N,e,ue),G=new Jx(I,N),H.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),ve=new yv(I),ne=new kx,Ue=new Qx(I,N,G,ne,H,ue,ve),Je=new fv(x),fe=new _v(x),D=new Ag(I),pe=new cv(I,D),S=new xv(I,D,ve,pe),Y=new Sv(I,S,D,ve),Ee=new bv(I,H,Ue),ye=new dv(ne),re=new Bx(x,Je,fe,N,H,pe,ye),_e=new o1(x,ne),oe=new Hx,Be=new Yx(N),He=new lv(x,Je,fe,G,Y,f,l),ze=new $x(x,Y,H),xe=new a1(I,ve,H,G),Ie=new uv(I,N,ve),$=new Mv(I,N,ve),ve.programs=re.programs,x.capabilities=H,x.extensions=N,x.properties=ne,x.renderLists=oe,x.shadowMap=ze,x.state=G,x.info=ve}F();const he=new r1(x,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=N.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=N.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(U,B,!1))},this.getSize=function(E){return E.set(U,B)},this.setSize=function(E,X,Q=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,B=X,t.width=Math.floor(E*V),t.height=Math.floor(X*V),Q===!0&&(t.style.width=E+"px",t.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(U*V,B*V).floor()},this.setDrawingBufferSize=function(E,X,Q){U=E,B=X,V=Q,t.width=Math.floor(E*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,X,Q,ie){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,X,Q,ie),G.viewport(R.copy(se).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,X,Q,ie){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,X,Q,ie),G.scissor(O.copy(Me).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){G.setScissorTest(je=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,Q=!0){let ie=0;if(E){let q=!1;if(L!==null){const we=L.texture.format;q=we===ou||we===su||we===ru}if(q){const we=L.texture.type,Ae=we===xi||we===Pr||we===oo||we===ps||we===nu||we===iu,Ye=He.getClearColor(),We=He.getClearAlpha(),qe=Ye.r,nt=Ye.g,$e=Ye.b;Ae?(g[0]=qe,g[1]=nt,g[2]=$e,g[3]=We,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=qe,_[1]=nt,_[2]=$e,_[3]=We,I.clearBufferiv(I.COLOR,0,_))}else ie|=I.COLOR_BUFFER_BIT}X&&(ie|=I.DEPTH_BUFFER_BIT),Q&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",me,!1),He.dispose(),oe.dispose(),Be.dispose(),ne.dispose(),Je.dispose(),fe.dispose(),Y.dispose(),pe.dispose(),xe.dispose(),re.dispose(),he.dispose(),he.removeEventListener("sessionstart",_n),he.removeEventListener("sessionend",Gi),bi.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ve.autoReset,X=ze.enabled,Q=ze.autoUpdate,ie=ze.needsUpdate,q=ze.type;F(),ve.autoReset=E,ze.enabled=X,ze.autoUpdate=Q,ze.needsUpdate=ie,ze.type=q}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function de(E){const X=E.target;X.removeEventListener("dispose",de),Ne(X)}function Ne(E){Qe(E),ne.remove(E)}function Qe(E){const X=ne.get(E).programs;X!==void 0&&(X.forEach(function(Q){re.releaseProgram(Q)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,Q,ie,q,we){X===null&&(X=Se);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Ye=Is(E,X,Q,ie,q);G.setMaterial(ie,Ae);let We=Q.index,qe=1;if(ie.wireframe===!0){if(We=S.getWireframeAttribute(Q),We===void 0)return;qe=2}const nt=Q.drawRange,$e=Q.attributes.position;let gt=nt.start*qe,Et=(nt.start+nt.count)*qe;we!==null&&(gt=Math.max(gt,we.start*qe),Et=Math.min(Et,(we.start+we.count)*qe)),We!==null?(gt=Math.max(gt,0),Et=Math.min(Et,We.count)):$e!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,$e.count));const Ft=Et-gt;if(Ft<0||Ft===1/0)return;pe.setup(q,ie,Ye,Q,We);let Lt,wt=Ie;if(We!==null&&(Lt=D.get(We),wt=$,wt.setIndex(Lt)),q.isMesh)ie.wireframe===!0?(G.setLineWidth(ie.wireframeLinewidth*ge()),wt.setMode(I.LINES)):wt.setMode(I.TRIANGLES);else if(q.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),G.setLineWidth(tt*ge()),q.isLineSegments?wt.setMode(I.LINES):q.isLineLoop?wt.setMode(I.LINE_LOOP):wt.setMode(I.LINE_STRIP)}else q.isPoints?wt.setMode(I.POINTS):q.isSprite&&wt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ho("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))wt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tt=q._multiDrawStarts,ht=q._multiDrawCounts,rt=q._multiDrawCount,Sn=We?D.get(We).bytesPerElement:1,wn=ne.get(ie).currentProgram.getUniforms();for(let En=0;En<rt;En++)wn.setValue(I,"_gl_DrawID",En),wt.render(tt[En]/Sn,ht[En])}else if(q.isInstancedMesh)wt.renderInstances(gt,Ft,q.count);else if(Q.isInstancedBufferGeometry){const tt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ht=Math.min(Q.instanceCount,tt);wt.renderInstances(gt,Ft,ht)}else wt.render(gt,Ft)};function Pt(E,X,Q){E.transparent===!0&&E.side===Jt&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,Hn(E,X,Q),E.side=ki,E.needsUpdate=!0,Hn(E,X,Q),E.side=Jt):Hn(E,X,Q)}this.compile=function(E,X,Q=null){Q===null&&(Q=E),p=Be.get(Q),p.init(X),w.push(p),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),E!==Q&&E.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ie=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Ae=0;Ae<we.length;Ae++){const Ye=we[Ae];Pt(Ye,Q,q),ie.add(Ye)}else Pt(we,Q,q),ie.add(we)}),p=w.pop(),ie},this.compileAsync=function(E,X,Q=null){const ie=this.compile(E,X,Q);return new Promise(q=>{function we(){if(ie.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){q(E);return}setTimeout(we,10)}N.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let xt=null;function bn(E){xt&&xt(E)}function _n(){bi.stop()}function Gi(){bi.start()}const bi=new mf;bi.setAnimationLoop(bn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(E){xt=E,he.setAnimationLoop(E),E===null?bi.stop():bi.start()},he.addEventListener("sessionstart",_n),he.addEventListener("sessionend",Gi),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,X,L),p=Be.get(E,w.length),p.init(X),w.push(p),le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ke.setFromProjectionMatrix(le,pi,X.reversedDepth),K=this.localClippingEnabled,Xe=ye.init(this.clippingPlanes,K),m=oe.get(E,y.length),m.init(),y.push(m),he.enabled===!0&&he.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&ur(we,X,-1/0,x.sortObjects)}ur(E,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,j),J=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,J&&He.addToRenderList(m,E),this.info.render.frame++,Xe===!0&&ye.beginShadows();const Q=p.state.shadowsArray;ze.render(Q,E,X),Xe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const we=X.cameras;if(q.length>0)for(let Ae=0,Ye=we.length;Ae<Ye;Ae++){const We=we[Ae];So(ie,q,E,We)}J&&He.render(E);for(let Ae=0,Ye=we.length;Ae<Ye;Ae++){const We=we[Ae];vn(m,E,We,We.viewport)}}else q.length>0&&So(ie,q,E,X),J&&He.render(E),vn(m,E,X);L!==null&&A===0&&(Ue.updateMultisampleRenderTarget(L),Ue.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,X),pe.resetDefaultState(),b=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],Xe===!0&&ye.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ur(E,X,Q,ie){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ke.intersectsSprite(E)){ie&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Ae=Y.update(E),Ye=E.material;Ye.visible&&m.push(E,Ae,Ye,Q,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ke.intersectsObject(E))){const Ae=Y.update(E),Ye=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ve.copy(Ae.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(Ye)){const We=Ae.groups;for(let qe=0,nt=We.length;qe<nt;qe++){const $e=We[qe],gt=Ye[$e.materialIndex];gt&&gt.visible&&m.push(E,Ae,gt,Q,Ve.z,$e)}}else Ye.visible&&m.push(E,Ae,Ye,Q,Ve.z,null)}}const we=E.children;for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)ur(we[Ae],X,Q,ie)}function vn(E,X,Q,ie){const q=E.opaque,we=E.transmissive,Ae=E.transparent;p.setupLightsView(Q),Xe===!0&&ye.setGlobalState(x.clippingPlanes,Q),ie&&G.viewport(R.copy(ie)),q.length>0&&Or(q,X,Q),we.length>0&&Or(we,X,Q),Ae.length>0&&Or(Ae,X,Q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function So(E,X,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new yn(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?qn:xi,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const we=p.state.transmissionRenderTarget[ie.id],Ae=ie.viewport||R;we.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Ye=x.getRenderTarget(),We=x.getActiveCubeFace(),qe=x.getActiveMipmapLevel();x.setRenderTarget(we),x.getClearColor(z),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),J&&He.render(Q);const nt=x.toneMapping;x.toneMapping=or;const $e=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),Xe===!0&&ye.setGlobalState(x.clippingPlanes,ie),Or(E,Q,ie),Ue.updateMultisampleRenderTarget(we),Ue.updateRenderTargetMipmap(we),N.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Et=0,Ft=X.length;Et<Ft;Et++){const Lt=X[Et],wt=Lt.object,tt=Lt.geometry,ht=Lt.material,rt=Lt.group;if(ht.side===Jt&&wt.layers.test(ie.layers)){const Sn=ht.side;ht.side=On,ht.needsUpdate=!0,wo(wt,Q,ie,tt,ht,rt),ht.side=Sn,ht.needsUpdate=!0,gt=!0}}gt===!0&&(Ue.updateMultisampleRenderTarget(we),Ue.updateRenderTargetMipmap(we))}x.setRenderTarget(Ye,We,qe),x.setClearColor(z,Z),$e!==void 0&&(ie.viewport=$e),x.toneMapping=nt}function Or(E,X,Q){const ie=X.isScene===!0?X.overrideMaterial:null;for(let q=0,we=E.length;q<we;q++){const Ae=E[q],Ye=Ae.object,We=Ae.geometry,qe=Ae.group;let nt=Ae.material;nt.allowOverride===!0&&ie!==null&&(nt=ie),Ye.layers.test(Q.layers)&&wo(Ye,X,Q,We,nt,qe)}}function wo(E,X,Q,ie,q,we){E.onBeforeRender(x,X,Q,ie,q,we),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(x,X,Q,ie,E,we),q.transparent===!0&&q.side===Jt&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,x.renderBufferDirect(Q,X,ie,q,E,we),q.side=ki,q.needsUpdate=!0,x.renderBufferDirect(Q,X,ie,q,E,we),q.side=Jt):x.renderBufferDirect(Q,X,ie,q,E,we),E.onAfterRender(x,X,Q,ie,q,we)}function Hn(E,X,Q){X.isScene!==!0&&(X=Se);const ie=ne.get(E),q=p.state.lights,we=p.state.shadowsArray,Ae=q.state.version,Ye=re.getParameters(E,q.state,we,X,Q),We=re.getProgramCacheKey(Ye);let qe=ie.programs;ie.environment=E.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(E.isMeshStandardMaterial?fe:Je).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",de),qe=new Map,ie.programs=qe);let nt=qe.get(We);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Ae)return Fr(E,Ye),nt}else Ye.uniforms=re.getUniforms(E),E.onBeforeCompile(Ye,x),nt=re.acquireProgram(Ye,We),qe.set(We,nt),ie.uniforms=Ye.uniforms;const $e=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&($e.clippingPlanes=ye.uniform),Fr(E,Ye),ie.needsLights=fr(E),ie.lightsStateVersion=Ae,ie.needsLights&&($e.ambientLightColor.value=q.state.ambient,$e.lightProbe.value=q.state.probe,$e.directionalLights.value=q.state.directional,$e.directionalLightShadows.value=q.state.directionalShadow,$e.spotLights.value=q.state.spot,$e.spotLightShadows.value=q.state.spotShadow,$e.rectAreaLights.value=q.state.rectArea,$e.ltc_1.value=q.state.rectAreaLTC1,$e.ltc_2.value=q.state.rectAreaLTC2,$e.pointLights.value=q.state.point,$e.pointLightShadows.value=q.state.pointShadow,$e.hemisphereLights.value=q.state.hemi,$e.directionalShadowMap.value=q.state.directionalShadowMap,$e.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$e.spotShadowMap.value=q.state.spotShadowMap,$e.spotLightMatrix.value=q.state.spotLightMatrix,$e.spotLightMap.value=q.state.spotLightMap,$e.pointShadowMap.value=q.state.pointShadowMap,$e.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function hr(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=_a.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Fr(E,X){const Q=ne.get(E);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Is(E,X,Q,ie,q){X.isScene!==!0&&(X=Se),Ue.resetTextureUnits();const we=X.fog,Ae=ie.isMeshStandardMaterial?X.environment:null,Ye=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Dn,We=(ie.isMeshStandardMaterial?fe:Je).get(ie.envMap||Ae),qe=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!Q.morphAttributes.position,gt=!!Q.morphAttributes.normal,Et=!!Q.morphAttributes.color;let Ft=or;ie.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Lt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,wt=Lt!==void 0?Lt.length:0,tt=ne.get(ie),ht=p.state.lights;if(Xe===!0&&(K===!0||E!==v)){const cn=E===v&&ie.id===b;ye.setState(ie,E,cn)}let rt=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ht.state.version||tt.outputColorSpace!==Ye||q.isBatchedMesh&&tt.batching===!1||!q.isBatchedMesh&&tt.batching===!0||q.isBatchedMesh&&tt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&tt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&tt.instancing===!1||!q.isInstancedMesh&&tt.instancing===!0||q.isSkinnedMesh&&tt.skinning===!1||!q.isSkinnedMesh&&tt.skinning===!0||q.isInstancedMesh&&tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&tt.instancingMorph===!1&&q.morphTexture!==null||tt.envMap!==We||ie.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ye.numPlanes||tt.numIntersection!==ye.numIntersection)||tt.vertexAlphas!==qe||tt.vertexTangents!==nt||tt.morphTargets!==$e||tt.morphNormals!==gt||tt.morphColors!==Et||tt.toneMapping!==Ft||tt.morphTargetsCount!==wt)&&(rt=!0):(rt=!0,tt.__version=ie.version);let Sn=tt.currentProgram;rt===!0&&(Sn=Hn(ie,X,q));let wn=!1,En=!1,Si=!1;const Mt=Sn.getUniforms(),ln=tt.uniforms;if(G.useProgram(Sn.program)&&(wn=!0,En=!0,Si=!0),ie.id!==b&&(b=ie.id,En=!0),wn||v!==E){G.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",E.projectionMatrix),Mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Wt=Mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,be.setFromMatrixPosition(E.matrixWorld)),H.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,En=!0,Si=!0)}if(q.isSkinnedMesh){Mt.setOptional(I,q,"bindMatrix"),Mt.setOptional(I,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Mt.setValue(I,"boneTexture",cn.boneTexture,Ue))}q.isBatchedMesh&&(Mt.setOptional(I,q,"batchingTexture"),Mt.setValue(I,"batchingTexture",q._matricesTexture,Ue),Mt.setOptional(I,q,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",q._indirectTexture,Ue),Mt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",q._colorsTexture,Ue));const Yt=Q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Ee.update(q,Q,Sn),(En||tt.receiveShadow!==q.receiveShadow)&&(tt.receiveShadow=q.receiveShadow,Mt.setValue(I,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ln.envMap.value=We,ln.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(ln.envMapIntensity.value=X.environmentIntensity),En&&(Mt.setValue(I,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&dr(ln,Si),we&&ie.fog===!0&&_e.refreshFogUniforms(ln,we),_e.refreshMaterialUniforms(ln,ie,V,B,p.state.transmissionRenderTarget[E.id]),_a.upload(I,hr(tt),ln,Ue)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(_a.upload(I,hr(tt),ln,Ue),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Mt.setValue(I,"center",q.center),Mt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Mt.setValue(I,"normalMatrix",q.normalMatrix),Mt.setValue(I,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const cn=ie.uniformsGroups;for(let Wt=0,zr=cn.length;Wt<zr;Wt++){const In=cn[Wt];xe.update(In,Sn),xe.bind(In,Sn)}}return Sn}function dr(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function fr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,X,Q){const ie=ne.get(E);ie.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ne.get(E.texture).__webglTexture=X,ne.get(E.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:Q,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const Q=ne.get(E);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const el=I.createFramebuffer();this.setRenderTarget=function(E,X=0,Q=0){L=E,M=X,A=Q;let ie=!0,q=null,we=!1,Ae=!1;if(E){const We=ne.get(E);if(We.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(I.FRAMEBUFFER,null),ie=!1;else if(We.__webglFramebuffer===void 0)Ue.setupRenderTarget(E);else if(We.__hasExternalTextures)Ue.rebindTextures(E,ne.get(E.texture).__webglTexture,ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $e=E.depthTexture;if(We.__boundDepthTexture!==$e){if($e!==null&&ne.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ae=!0);const nt=ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?q=nt[X][Q]:q=nt[X],we=!0):E.samples>0&&Ue.useMultisampledRTT(E)===!1?q=ne.get(E).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[Q]:q=nt,R.copy(E.viewport),O.copy(E.scissor),k=E.scissorTest}else R.copy(se).multiplyScalar(V).floor(),O.copy(Me).multiplyScalar(V).floor(),k=je;if(Q!==0&&(q=el),G.bindFramebuffer(I.FRAMEBUFFER,q)&&ie&&G.drawBuffers(E,q),G.viewport(R),G.scissor(O),G.setScissorTest(k),we){const We=ne.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,We.__webglTexture,Q)}else if(Ae){const We=X;for(let qe=0;qe<E.textures.length;qe++){const nt=ne.get(E.textures[qe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qe,nt.__webglTexture,Q,We)}}else if(E!==null&&Q!==0){const We=ne.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,Q)}b=-1},this.readRenderTargetPixels=function(E,X,Q,ie,q,we,Ae,Ye=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(We=We[Ae]),We){G.bindFramebuffer(I.FRAMEBUFFER,We);try{const qe=E.textures[Ye],nt=qe.format,$e=qe.type;if(!H.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-ie&&Q>=0&&Q<=E.height-q&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ye),I.readPixels(X,Q,ie,q,ue.convert(nt),ue.convert($e),we))}finally{const qe=L!==null?ne.get(L).__webglFramebuffer:null;G.bindFramebuffer(I.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,X,Q,ie,q,we,Ae,Ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(We=We[Ae]),We)if(X>=0&&X<=E.width-ie&&Q>=0&&Q<=E.height-q){G.bindFramebuffer(I.FRAMEBUFFER,We);const qe=E.textures[Ye],nt=qe.format,$e=qe.type;if(!H.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ye),I.readPixels(X,Q,ie,q,ue.convert(nt),ue.convert($e),0);const Et=L!==null?ne.get(L).__webglFramebuffer:null;G.bindFramebuffer(I.FRAMEBUFFER,Et);const Ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Qp(I,Ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.deleteBuffer(gt),I.deleteSync(Ft),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,Q=0){const ie=Math.pow(2,-Q),q=Math.floor(E.image.width*ie),we=Math.floor(E.image.height*ie),Ae=X!==null?X.x:0,Ye=X!==null?X.y:0;Ue.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Ae,Ye,q,we),G.unbindTexture()};const Br=I.createFramebuffer(),kr=I.createFramebuffer();this.copyTextureToTexture=function(E,X,Q=null,ie=null,q=0,we=null){we===null&&(q!==0?(ho("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=q,q=0):we=0);let Ae,Ye,We,qe,nt,$e,gt,Et,Ft;const Lt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Q!==null)Ae=Q.max.x-Q.min.x,Ye=Q.max.y-Q.min.y,We=Q.isBox3?Q.max.z-Q.min.z:1,qe=Q.min.x,nt=Q.min.y,$e=Q.isBox3?Q.min.z:0;else{const Yt=Math.pow(2,-q);Ae=Math.floor(Lt.width*Yt),Ye=Math.floor(Lt.height*Yt),E.isDataArrayTexture?We=Lt.depth:E.isData3DTexture?We=Math.floor(Lt.depth*Yt):We=1,qe=0,nt=0,$e=0}ie!==null?(gt=ie.x,Et=ie.y,Ft=ie.z):(gt=0,Et=0,Ft=0);const wt=ue.convert(X.format),tt=ue.convert(X.type);let ht;X.isData3DTexture?(Ue.setTexture3D(X,0),ht=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ue.setTexture2DArray(X,0),ht=I.TEXTURE_2D_ARRAY):(Ue.setTexture2D(X,0),ht=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=I.getParameter(I.UNPACK_ROW_LENGTH),Sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),En=I.getParameter(I.UNPACK_SKIP_ROWS),Si=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const Mt=E.isDataArrayTexture||E.isData3DTexture,ln=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const Yt=ne.get(E),cn=ne.get(X),Wt=ne.get(Yt.__renderTarget),zr=ne.get(cn.__renderTarget);G.bindFramebuffer(I.READ_FRAMEBUFFER,Wt.__webglFramebuffer),G.bindFramebuffer(I.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let In=0;In<We;In++)Mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ne.get(E).__webglTexture,q,$e+In),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,we,Ft+In)),I.blitFramebuffer(qe,nt,Ae,Ye,gt,Et,Ae,Ye,I.DEPTH_BUFFER_BIT,I.NEAREST);G.bindFramebuffer(I.READ_FRAMEBUFFER,null),G.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||ne.has(E)){const Yt=ne.get(E),cn=ne.get(X);G.bindFramebuffer(I.READ_FRAMEBUFFER,Br),G.bindFramebuffer(I.DRAW_FRAMEBUFFER,kr);for(let Wt=0;Wt<We;Wt++)Mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,q,$e+Wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,q),ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,we,Ft+Wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,we),q!==0?I.blitFramebuffer(qe,nt,Ae,Ye,gt,Et,Ae,Ye,I.COLOR_BUFFER_BIT,I.NEAREST):ln?I.copyTexSubImage3D(ht,we,gt,Et,Ft+Wt,qe,nt,Ae,Ye):I.copyTexSubImage2D(ht,we,gt,Et,qe,nt,Ae,Ye);G.bindFramebuffer(I.READ_FRAMEBUFFER,null),G.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ln?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ht,we,gt,Et,Ft,Ae,Ye,We,wt,tt,Lt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(ht,we,gt,Et,Ft,Ae,Ye,We,wt,Lt.data):I.texSubImage3D(ht,we,gt,Et,Ft,Ae,Ye,We,wt,tt,Lt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,gt,Et,Ae,Ye,wt,tt,Lt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,gt,Et,Lt.width,Lt.height,wt,Lt.data):I.texSubImage2D(I.TEXTURE_2D,we,gt,Et,Ae,Ye,wt,tt,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,En),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Si),we===0&&X.generateMipmaps&&I.generateMipmap(ht),G.unbindTexture()},this.initRenderTarget=function(E){ne.get(E).__webglFramebuffer===void 0&&Ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ue.setTextureCube(E,0):E.isData3DTexture?Ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ue.setTexture2DArray(E,0):Ue.setTexture2D(E,0),G.unbindTexture()},this.resetState=function(){M=0,A=0,L=null,G.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function c1(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ht;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=ud(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=ud(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ud(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new fn(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function hd(i,e){if(e===Ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Fc||e===Yd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Fc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class u1 extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new C1(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=no.extractUrlBase(e);o=no.resolveURL(c,this.path)}else o=no.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new df(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mf){try{o[vt.KHR_BINARY_GLTF]=new P1(e)}catch(h){r&&r(h);return}s=JSON.parse(o[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new G1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:o[h]=new f1;break;case vt.KHR_DRACO_MESH_COMPRESSION:o[h]=new L1(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:o[h]=new D1;break;case vt.KHR_MESH_QUANTIZATION:o[h]=new I1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function h1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d1{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new it(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nn(u),c.distance=h;break;case"spot":c=new Va(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class f1{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){const r=[];e.color=new it(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Nt))}return Promise.all(r)}}class p1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class g1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class _1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class M1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(a[0],a[1],a[2],Dn),Promise.all(s)}}class y1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class b1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(a[0],a[1],a[2],Dn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(s)}}class S1{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class w1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class E1{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class T1{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class A1{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class R1{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class C1{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ot,m=new P,p=new cr,y=new P(1,1,1),w=new Ra(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),w.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const T=l[x];w.instanceColor=new Aa(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ut.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Mf="glTF",Gs=12,dd={JSON:1313821514,BIN:5130562};class P1{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Gs,s=new DataView(e,Gs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===dd.JSON){const c=new Uint8Array(e,Gs+o,a);this.content=n.decode(c)}else if(l===dd.BIN){const c=Gs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class L1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Vc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Vc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=cs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Dn,d)})})}}class D1{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class I1{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class yf extends vo{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,w=p-d+h;for(let x=0;x!==a;x++){const T=o[_+x+a],M=o[_+x+l]*u,A=o[g+x+a],L=o[g+x]*u;s[x]=y*T+w*M+m*A+p*L}return s}}const N1=new cr;class U1 extends yf{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return N1.fromArray(s).normalize().toArray(s),s}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fd={9728:gn,9729:Pn,9984:kd,9985:da,9986:js,9987:Ni},pd={33071:ir,33648:wa,10497:vi},Gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O1={CUBICSPLINE:void 0,LINEAR:co,STEP:lo},Wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function yr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function B1(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function k1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z1(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xl(t.attributes):e=i.indices+":"+Xl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Xl(i.targets[n]);return e}function Xl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Gc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const V1=new ot;class G1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new po(this.options.manager):this.textureLoader=new mg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new df(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return yr(s,a,r),hi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(no.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Gl[r.type],a=cs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new fn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Gl[r.type],c=cs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let w=t.cache.get(y);w||(_=new c(a,p*f,r.count*f/u),w=new wm(_,f/u),t.cache.add(y,w)),m=new du(w,l,d%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),m=new fn(_,l,g);if(r.sparse!==void 0){const p=Gl.SCALAR,y=cs[r.sparse.indices.componentType],w=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,T=new y(o[1],w,r.sparse.count*p),M=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=T.length;A<L;A++){const b=T[A];if(m.setX(b,M[A*l]),l>=2&&m.setY(b,M[A*l+1]),l>=3&&m.setZ(b,M[A*l+2]),l>=4&&m.setW(b,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=fd[d.magFilter]||Pn,u.minFilter=fd[d.minFilter]||Ni,u.wrapS=pd[d.wrapS]||vi,u.wrapT=pd[d.wrapT]||vi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Pn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new rn(_);m.needsUpdate=!0,d(m)}),t.load(no.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hi(h,o),h.userData.mimeType=o.mimeType||H1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sf,ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new za,ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ct}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){const h=r[vt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Dn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Jt);const u=s.alphaMode||Wl.OPAQUE;if(u===Wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Tt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Tt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Tt){const h=s.emissiveFactor;a.emissive=new it().setRGB(h[0],h[1],h[2],Dn)}return s.emissiveTexture!==void 0&&o!==Tt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Nt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),hi(h,s),t.associations.set(h,{materials:e}),s.extensions&&yr(r,h,s),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return md(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=z1(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=md(new Ht,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?F1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const y=c[f];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Tm(_,y):new lt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=hd(p.geometry,Yd):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=hd(p.geometry,Fc));else if(m.mode===Gn.LINES)p=new gu(_,y);else if(m.mode===Gn.LINE_STRIP)p=new mu(_,y);else if(m.mode===Gn.LINE_LOOP)p=new Dm(_,y);else if(m.mode===Gn.POINTS)p=new _u(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&k1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),hi(p,s),m.extensions&&yr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&yr(r,h[0],s),h[0];const d=new et;s.extensions&&yr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(kt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ga(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ot;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pu(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let w=0,x=d.length;w<x;w++){const T=d[w],M=f[w],A=g[w],L=_[w],b=m[w];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const v=n._createAnimationTracks(T,M,A,L,b);if(v)for(let R=0;R<v.length;R++)p.push(v[R])}const y=new rg(s,void 0,p);return hi(y,r),y})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,V1)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new rf:c.length>1?u=new et:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),hi(u,s),s.extensions&&yr(n,u,s),s.matrix!==void 0){const h=new ot;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new et;n.name&&(s.name=r.createUniqueName(n.name)),hi(s,n),n.extensions&&yr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof ri||d instanceof rn)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];$i[s.path]===$i.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch($i[s.path]){case $i.weights:c=vs;break;case $i.rotation:c=xs;break;case $i.translation:case $i.scale:c=Ms;break;default:n.itemSize===1?c=vs:c=Ms;break}const u=r.interpolation!==void 0?O1[r.interpolation]:co,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+$i[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Gc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof xs?U1:yf;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function W1(i,e,t){const n=e.attributes,r=new sn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Gc(cs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Gc(cs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new yi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function md(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Vc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return bt.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),hi(i,e),W1(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?B1(i,e.targets,t):i})}const Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ur{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X1=new Ga(-1,1,1,-1,0,1);class q1 extends Ht{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const Y1=new q1;class Xa{constructor(e){this._mesh=new lt(Y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class K1 extends Ur{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gd extends Ur{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class j1 extends Ur{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new K1(Rr),this.copyPass.material.blending=Rn,this.clock=new ff}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gd!==void 0&&(o instanceof gd?n=!0:o instanceof j1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z1 extends Ur{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}class J1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,_=t-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const y=g-m+u,w=_-p+u,x=g-1+2*u,T=_-1+2*u,M=l&255,A=c&255,L=this.perm[M+this.perm[A]]%12,b=this.perm[M+m+this.perm[A+p]]%12,v=this.perm[M+1+this.perm[A+1]]%12;let R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[L],g,_));let O=.5-y*y-w*w;O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[b],y,w));let k=.5-x*x-T*T;return k<0?s=0:(k*=k,s=k*k*this._dot(this.grad3[v],x,T)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,_=u-g,m=h-g,p=d-g,y=e-_,w=t-m,x=n-p;let T,M,A,L,b,v;y>=w?w>=x?(T=1,M=0,A=0,L=1,b=1,v=0):y>=x?(T=1,M=0,A=0,L=1,b=0,v=1):(T=0,M=0,A=1,L=1,b=0,v=1):w<x?(T=0,M=0,A=1,L=0,b=1,v=1):y<x?(T=0,M=1,A=0,L=0,b=1,v=1):(T=0,M=1,A=0,L=1,b=1,v=0);const R=y-T+f,O=w-M+f,k=x-A+f,z=y-L+2*f,Z=w-b+2*f,U=x-v+2*f,B=y-1+3*f,V=w-1+3*f,W=x-1+3*f,j=u&255,se=h&255,Me=d&255,je=this.perm[j+this.perm[se+this.perm[Me]]]%12,Ke=this.perm[j+T+this.perm[se+M+this.perm[Me+A]]]%12,Xe=this.perm[j+L+this.perm[se+b+this.perm[Me+v]]]%12,K=this.perm[j+1+this.perm[se+1+this.perm[Me+1]]]%12;let le=.6-y*y-w*w-x*x;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[je],y,w,x));let be=.6-R*R-O*O-k*k;be<0?s=0:(be*=be,s=be*be*this._dot3(this.grad3[Ke],R,O,k));let Ve=.6-z*z-Z*Z-U*U;Ve<0?o=0:(Ve*=Ve,o=Ve*Ve*this._dot3(this.grad3[Xe],z,Z,U));let Se=.6-B*B-V*V-W*W;return Se<0?a=0:(Se*=Se,a=Se*Se*this._dot3(this.grad3[K],B,V,W)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,f,g;const _=(e+t+n+r)*l,m=Math.floor(e+_),p=Math.floor(t+_),y=Math.floor(n+_),w=Math.floor(r+_),x=(m+p+y+w)*c,T=m-x,M=p-x,A=y-x,L=w-x,b=e-T,v=t-M,R=n-A,O=r-L,k=b>v?32:0,z=b>R?16:0,Z=v>R?8:0,U=b>O?4:0,B=v>O?2:0,V=R>O?1:0,W=k+z+Z+U+B+V,j=o[W][0]>=3?1:0,se=o[W][1]>=3?1:0,Me=o[W][2]>=3?1:0,je=o[W][3]>=3?1:0,Ke=o[W][0]>=2?1:0,Xe=o[W][1]>=2?1:0,K=o[W][2]>=2?1:0,le=o[W][3]>=2?1:0,be=o[W][0]>=1?1:0,Ve=o[W][1]>=1?1:0,Se=o[W][2]>=1?1:0,J=o[W][3]>=1?1:0,ge=b-j+c,I=v-se+c,Pe=R-Me+c,N=O-je+c,H=b-Ke+2*c,G=v-Xe+2*c,ve=R-K+2*c,ne=O-le+2*c,Ue=b-be+3*c,Je=v-Ve+3*c,fe=R-Se+3*c,D=O-J+3*c,S=b-1+4*c,Y=v-1+4*c,re=R-1+4*c,_e=O-1+4*c,oe=m&255,Be=p&255,ye=y&255,ze=w&255,He=a[oe+a[Be+a[ye+a[ze]]]]%32,Ee=a[oe+j+a[Be+se+a[ye+Me+a[ze+je]]]]%32,Ie=a[oe+Ke+a[Be+Xe+a[ye+K+a[ze+le]]]]%32,$=a[oe+be+a[Be+Ve+a[ye+Se+a[ze+J]]]]%32,ue=a[oe+1+a[Be+1+a[ye+1+a[ze+1]]]]%32;let pe=.6-b*b-v*v-R*R-O*O;pe<0?u=0:(pe*=pe,u=pe*pe*this._dot4(s[He],b,v,R,O));let xe=.6-ge*ge-I*I-Pe*Pe-N*N;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(s[Ee],ge,I,Pe,N));let F=.6-H*H-G*G-ve*ve-ne*ne;F<0?d=0:(F*=F,d=F*F*this._dot4(s[Ie],H,G,ve,ne));let he=.6-Ue*Ue-Je*Je-fe*fe-D*D;he<0?f=0:(he*=he,f=he*he*this._dot4(s[$],Ue,Je,fe,D));let ce=.6-S*S-Y*Y-re*re-_e*_e;return ce<0?g=0:(ce*=ce,g=ce*ce*this._dot4(s[ue],S,Y,re,_e)),27*(u+h+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}}const ta={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Oe},cameraProjectionMatrix:{value:new ot},cameraInverseProjectionMatrix:{value:new ot},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},na={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ia={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class tr extends Ur{constructor(e,t,n=512,r=512,s=32){super(),this.width=n,this.height=r,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(s),this._generateRandomKernelRotations();const o=new vu;o.format=ms,o.type=ps,this.normalRenderTarget=new yn(this.width,this.height,{minFilter:gn,magFilter:gn,type:qn,depthTexture:o}),this.ssaoRenderTarget=new yn(this.width,this.height,{type:qn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new zt({defines:Object.assign({},ta.defines),uniforms:mi.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:Rn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new jm,this.normalMaterial.blending=Rn,this.blurMaterial=new zt({defines:Object.assign({},ia.defines),uniforms:mi.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new zt({defines:Object.assign({},na.defines),uniforms:mi.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,blending:Rn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new zt({uniforms:mi.clone(Rr.uniforms),vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pd,blendDst:Zl,blendEquation:Ii,blendSrcAlpha:Cd,blendDstAlpha:Zl,blendEquationAlpha:Ii}),this._fsQuad=new Xa(null),this._originalClearColor=new it}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case tr.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case tr.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case tr.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case tr.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case tr.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Rd,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,r,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,r,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const r=new P;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=n/e;s=kt.lerp(.1,1,s*s),r.multiplyScalar(s),t.push(r)}}_generateRandomKernelRotations(){const n=new J1,r=16,s=new Float32Array(r);for(let o=0;o<r;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;s[o]=n.noise3d(a,l,c)}this.noiseTexture=new fu(s,4,4,Ba,Wn),this.noiseTexture.wrapS=vi,this.noiseTexture.wrapT=vi,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}tr.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ys extends Ur{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(s,o,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new yn(s,o,{type:qn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new yn(s,o,{type:qn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Q1;this.highPassUniforms=mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Oe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone(Rr.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,blending:$l,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new Tt,this._fsQuad=new Xa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Oe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ys.BlurDirectionX=new Oe(1,0);ys.BlurDirectionY=new Oe(0,1);class Tr extends lt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new dn;const n=this,r=t.color!==void 0?new it(t.color):new it(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Tr.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Qi,h=new P,d=new P,f=new P,g=new ot,_=new P(0,0,-1),m=new yt,p=new P,y=new P,w=new yt,x=new ot,T=this.camera,M=new yn(s,o,{samples:c,type:qn}),A=new zt({name:l.name!==void 0?l.name:"unspecified",uniforms:mi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=M.texture,A.uniforms.color.value=r,A.uniforms.textureMatrix.value=x,this.material=A,this.onBeforeRender=function(L,b,v){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),y.subVectors(d,_),y.reflect(h).negate(),y.add(d),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(y),T.far=v.far,T.updateMatrixWorld(),T.projectionMatrix.copy(v.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(T.projectionMatrix),x.multiply(T.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const O=T.projectionMatrix;w.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],w.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],w.z=-1,w.w=(1+O.elements[10])/O.elements[14],m.multiplyScalar(2/m.dot(w)),O.elements[2]=m.x,O.elements[6]=m.y,O.elements[10]=m.z+1-a,O.elements[14]=m.w,n.visible=!1;const k=L.getRenderTarget(),z=L.xr.enabled,Z=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(M),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(b,T),L.xr.enabled=z,L.shadowMap.autoUpdate=Z,L.setRenderTarget(k);const U=v.viewport;U!==void 0&&L.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}}Tr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Wc=i=>{const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function bf(i,e,t,n,r,s){const o=Math.floor(i/e),a=o*e+t+Wc(o+s)*n,l=(i-a)/r;return l<=0||l>=1?0:Math.sin(Math.PI*l)**2}function eM(i){const e=Math.floor(i/40),t=.95+Wc(e+72)*.55;return 1-(.24+Wc(e+19)*.1)*bf(i,40,13,17,t,502)}function tM(i){return .17*bf(i,71,24,28,2.6,1987)}function nM(i){const e=new P,t=[],n=[],r=[];i.updateMatrixWorld(!0),i.traverse(c=>{c.isLight&&/HALL_FLUOR/i.test(c.name)&&t.push(c),c.isMesh&&/Hall.fluorescent.tube/i.test(c.name)&&n.push(c),c.isLight&&c.castShadow&&/DINING|HALL_FLUOR_0$/i.test(c.name)&&r.push(c)}),t.sort((c,u)=>Math.abs(c.getWorldPosition(e).x)-Math.abs(u.getWorldPosition(e).x));const s=t[0],o=s?.intensity??1;let a=[];if(s){const c=s.getWorldPosition(new P);if(n.sort((u,h)=>u.getWorldPosition(e).distanceToSquared(c)-h.getWorldPosition(e).distanceToSquared(c)),n[0]){const u=n[0],d=(Array.isArray(u.material)?u.material:[u.material]).map(f=>f.clone());u.material=Array.isArray(u.material)?d:d[0],a=d.map(f=>({material:f,base:f.emissiveIntensity}))}}let l=-1/0;return{update(c,u=!1){const h=u?1:eM(c);s&&(s.intensity=o*h);for(const d of a)d.material.emissiveIntensity=d.base*h},doorMoved(c,u=!1){if(!(!u&&c-l<.12)){for(const h of r)h.shadow.needsUpdate=!0;l=c}}}}const ql=9.81,us=6;function iM(i,e){const t=Math.sqrt(2*(e.height-e.floor)/ql),n=((i+e.offset)%e.period+e.period)%e.period;return{falling:n<t,y:Math.max(e.floor,e.height-.5*ql*n*n),speed:ql*Math.min(n,t),impactAge:n-t}}function rM(i){const e=[];return i.updateMatrixWorld(!0),i.traverse(t=>{if(!t.isMesh||!t.userData.water_surface||e.length>=us)return;const r=new sn().setFromObject(t).getCenter(new P),s=e.length;e.push({x:r.x,z:r.z,floor:.021,height:2.94,period:2.7+s*.47,offset:s*.83})}),e}function sM(i,e,t){let n;if(e.traverse(l=>{/Recessed.rainy.living.window/i.test(l.name)&&(n=l)}),!n)return null;const r=new sn().setFromObject(n),s=r.getSize(new P),o=r.getCenter(new P),a=new lt(new Yn(s.z,s.y),new zt({name:"Rain on recessed window glass",uniforms:{time:t,storm:{value:0}},vertexShader:`varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float time; uniform float storm;
      varying vec2 vUv;
      float hash(float x) { return fract(sin(x * 127.1) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        float sky = smoothstep(0.0, 1.0, uv.y);
        vec3 color = mix(vec3(.012, .026, .038), vec3(.065, .105, .15), sky);
        float skyline = step(uv.y, .12 + hash(floor(uv.x * 18.0)) * .18);
        color *= 1.0 - skyline * .65;
        // Several scales of running water: beads, thin trails and distant rain.
        float rivulets = 0.0;
        float glints = 0.0;
        for (int i = 0; i < 2; i++) {
          float density = i == 0 ? 37.0 : 81.0;
          float lane = floor(uv.x * density);
          float seed = hash(lane + float(i) * 53.0);
          float head = fract(seed * 17.0 - time * (.065 + seed * .115));
          float x = fract(uv.x * density) - .5 - .12 * sin(uv.y * 24.0 + seed * 50.0);
          float y = uv.y - head;
          float trail = (1.0 - smoothstep(.013, .05, abs(x))) * step(0.0, y) * (1.0 - smoothstep(.0, .37, y));
          float bead = 1.0 - smoothstep(.5, 1.0, length(vec2(x * 9.0, y * 170.0)));
          float highlight = 1.0 - smoothstep(.016, .045, abs(x + .045));
          rivulets += trail * .36 + bead * .65;
          glints += highlight * bead;
        }
        float distantRain = pow(max(0.0, sin((uv.x + uv.y * .09) * 970.0 + floor(uv.y * 75.0 - time * 8.0) * 3.7)), 28.0);
        color += vec3(.08, .12, .15) * rivulets + vec3(.18, .23, .25) * glints;
        color += distantRain * .012;
        color *= 1.0 + storm * 1.8;
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return a.name="Weather window rain",a.rotation.y=-Math.PI/2,a.position.set(r.min.x-.002,o.y,o.z),i.add(a),a}function oM(i,e){const n=[],r=[];let s=502;const o=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let c=0;c<110;c+=1)n.push(1+o()*4.3,.35+o()*2.25,-2.65+o()*4),r.push(o());const a=new Ht;a.setAttribute("position",new mt(n,3)),a.setAttribute("seed",new mt(r,1));const l=new _u(a,new zt({name:"Sparse motes in window light",transparent:!0,depthWrite:!1,uniforms:{time:e},vertexShader:`
      uniform float time; attribute float seed; varying float fade;
      void main() {
        vec3 p = position + vec3(sin(time * .13 + seed * 31.0) * .12, sin(time * .09 + seed * 74.0) * .14, cos(time * .11 + seed * 54.0) * .08);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((4.0 + seed * 3.0) / -mv.z, .8, 2.5);
        float windowLight = smoothstep(2.1, 5.3, p.x);
        fade = (.018 + windowLight * .095) * smoothstep(.15, .8, -mv.z);
      }`,fragmentShader:`varying float fade;
      void main() {
        float alpha = 1.0 - smoothstep(.08, .5, length(gl_PointCoord - .5));
        gl_FragColor = vec4(.49, .59, .60, alpha * fade);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return l.name="Weather suspended motes",i.add(l),l}function aM(i,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#050607",n.fillRect(0,0,256,256);const r=n.createRadialGradient(128,128,12,128,128,126);r.addColorStop(0,"#91abb9"),r.addColorStop(.65,"#647f91"),r.addColorStop(1,"#050607"),n.fillStyle=r;for(let a=16;a<244;a+=12)n.fillRect(12,a,232,5);const s=new Va(10140624,22,8,.67,.85,2);s.name="Window rainlight",s.position.set(5.48,2.2,-1.56),s.target.position.set(2.3,.35,1.5),s.map=new Ts(t),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.bias=-2e-4,s.shadow.normalBias=.018,s.shadow.autoUpdate=!1,s.shadow.needsUpdate=!0,i.add(s,s.target);let o;return e.traverse(a=>{/LIGHT_WINDOW_COOL/.test(a.name)&&(o=a)}),o&&o.removeFromParent(),s}function lM(i,e,t){const n={value:0},r=rM(e),s=new Map;e.traverse(m=>{if(!m.isMesh||!/raincoat/i.test(m.name))return;const p=m.material;s.has(p)||s.set(p,new ci({name:"Rain-soaked coated fabric",color:p.color,map:p.map,normalMap:p.normalMap,normalScale:p.normalScale,roughness:.33,metalness:0,clearcoat:.42,clearcoatRoughness:.23,side:p.side})),m.material=s.get(p)}),r.push({x:3.83,z:-6.74,floor:.708,height:1.017,period:3.45,offset:.6});const o=Array.from({length:us},()=>new yt(0,0,-1,0)),a=sM(i,e,n),l=oM(i,n),c=aM(i,e),u=new Ra(new Dr(1,7,6),new Tt({color:9680062,transparent:!0,opacity:.38}),r.length);u.name="Weather falling drips",u.instanceMatrix.setUsage(Ju),u.frustumCulled=!1,i.add(u);const h=new Yn(2,2),d=new Aa(new Float32Array(r.length),1);h.setAttribute("impactAlpha",d);const f=new Ra(h,new zt({name:"Droplet impact surface tension",transparent:!0,depthWrite:!1,vertexShader:`attribute float impactAlpha; varying vec2 vUv; varying float fade;
      void main() { vUv = uv; fade = impactAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec2 vUv; varying float fade;
      void main() {
        float r = length(vUv * 2.0 - 1.0);
        float ring = (1.0 - smoothstep(.015, .075, abs(r - .78))) * .55;
        ring += (1.0 - smoothstep(.012, .055, abs(r - .53))) * .16;
        gl_FragColor = vec4(.32, .40, .42, ring * fade);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),r.length);f.name="Weather droplet impact rings",f.instanceMatrix.setUsage(Ju),f.frustumCulled=!1,i.add(f);const g=new Ut,_={ripples:o,setQuality(m){l.visible=m.mode==="quality",s.forEach(p=>{p.clearcoat=m.mode==="quality"?.42:0}),c.shadow.mapSize.set(Math.min(512,m.shadowSize),Math.min(512,m.shadowSize)),c.shadow.map?.dispose(),c.shadow.map=null,c.shadow.needsUpdate=!0},update(m){n.value=m;const p=tM(m);a&&(a.material.uniforms.storm.value=p),c.intensity=22*(1+p*1.6),r.forEach((y,w)=>{const x=iM(m,y);g.position.set(y.x,x.y,y.z),g.rotation.set(0,0,0);const T=x.falling?.0032:0;g.scale.set(T,x.falling?.006+x.speed*.003:0,T),g.updateMatrix(),u.setMatrixAt(w,g.matrix);const M=x.impactAge,A=M>=0&&M<1.45,L=w===r.length-1?.11:.24,b=A?Math.min(L,.015+M*.19):0;g.position.set(y.x,y.floor+.001,y.z),g.rotation.x=-Math.PI/2,g.scale.setScalar(b),g.updateMatrix(),f.setMatrixAt(w,g.matrix),d.setX(w,A?(1-M/1.45)*.46:0),w<us&&o[w].set(y.x,y.z,M,A?1:0)}),u.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=d.needsUpdate=!0}};return _.setQuality(t),_.update(0),_}function cM(i){const e=[],t=[],n=new P;for(const s of i){const o=s.geometry.index?s.geometry.toNonIndexed():s.geometry,a=o.getAttribute("position"),l=[],c=new Map;for(let h=0;h<a.count;h+=1)n.fromBufferAttribute(a,h).applyMatrix4(s.matrixWorld),e.push(n.x,-n.z,0),l.push(`${n.x.toFixed(5)},${n.z.toFixed(5)}`);for(let h=0;h<l.length;h+=3)for(const[d,f]of[[h,h+1],[h+1,h+2],[h+2,h]]){const g=[l[d],l[f]].sort(),_=g.join("|"),m=c.get(_)||{pair:g,count:0};m.count+=1,c.set(_,m)}const u=new Set;c.forEach(({pair:h,count:d})=>{d===1&&h.forEach(f=>u.add(f))}),l.forEach(h=>t.push(u.has(h)?0:1)),o!==s.geometry&&o.dispose()}const r=new Ht;return r.setAttribute("position",new mt(e,3)),r.setAttribute("edgeDistance",new mt(t,1)),r.setAttribute("uv",new mt(new Float32Array(e.length/3*2),2)),r.computeVertexNormals(),r.computeBoundingSphere(),r}function uM(i,e,t,n={},r=null){let s=n.reflectionSize||768,o=1/(n.reflectionFPS||30),a=0;const l=[],c=e.getObjectByName("EVENT_BATHROOM_PRESENCE"),u=[];e.traverse(m=>{m.userData.hide_in_reflection&&u.push(m)});let h=!1;const d=m=>({...Tr.ReflectorShader,uniforms:{...Tr.ReflectorShader.uniforms,texel:{value:new Oe(1/s,1/s)},water:{value:m?1:0},time:{value:0},detail:{value:n.mode==="smooth"?0:1},presenceVisible:{value:0},impacts:{value:Array.from({length:us},()=>new yt(0,0,-1,0))}},vertexShader:`
      uniform mat4 textureMatrix;
      attribute float edgeDistance;
      varying vec4 vUv;
      varying vec2 surfaceUV;
      varying vec3 surfacePosition;
      varying float edgeFade;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        surfaceUV = uv;
        surfacePosition = (modelMatrix * vec4(position, 1.0)).xyz;
        edgeFade = edgeDistance;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform vec2 texel;
      uniform float water, time, detail, presenceVisible;
      uniform vec4 impacts[${us}];
      varying vec4 vUv;
      varying vec2 surfaceUV;
      varying vec3 surfacePosition;
      varying float edgeFade;
      #include <logdepthbuf_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + 1.0), f.x), f.y);
      }
      void main() {
        #include <logdepthbuf_fragment>
        vec2 uv = vUv.xy / vUv.w;
        float rippleHighlight = 0.0;
        if (water > .5) {
          vec2 p = surfacePosition.xz;
          vec2 rippleNormal = vec2(sin(p.x * 51.0 + p.y * 29.0 + time * .75), cos(p.y * 47.0 - time * .6)) * .00014;
          for (int i = 0; i < ${us}; i++) {
            vec2 d = p - impacts[i].xy;
            float age = max(0.0, impacts[i].z);
            float distanceToImpact = length(d);
            float ring = distanceToImpact - age * .28;
            float envelope = exp(-abs(ring) * 27.0) * exp(-age * 2.1) * impacts[i].w;
            float wave = sin(ring * 155.0) * envelope;
            rippleNormal += d / max(distanceToImpact, .001) * wave * .0025;
            rippleHighlight += max(0.0, wave) * .012;
          }
          uv += rippleNormal;
        }
        vec2 blur = texel * mix(1.15, 1.9, water);
        vec3 reflected = texture2D(tDiffuse, uv).rgb * .5;
        reflected += texture2D(tDiffuse, uv + blur).rgb * .25;
        reflected += texture2D(tDiffuse, uv - blur).rgb * .25;
        if (detail > .5) {
          reflected = reflected * .8 + texture2D(tDiffuse, uv + vec2(blur.x, -blur.y)).rgb * .1
                      + texture2D(tDiffuse, uv - vec2(blur.x, -blur.y)).rgb * .1;
        }
        if (water > .5) {
          vec3 view = normalize(cameraPosition - surfacePosition);
          float fresnel = pow(1.0 - abs(view.y), 3.0);
          float edge = smoothstep(0.0, .14, edgeFade);
          vec3 wet = reflected * vec3(.76, .86, .85) + vec3(.004, .009, .009) + rippleHighlight;
          gl_FragColor = vec4(wet, (.18 + fresnel * .59) * edge);
        } else {
          vec2 p = surfaceUV;
          float edge = min(min(p.x, 1.0-p.x), min(p.y, 1.0-p.y));
          float mottling = noise(p * 13.0) * .65 + noise(p * 43.0) * .35;
          float fogging = .32 + mottling * .075 + (1.0-smoothstep(0.0, .12, edge)) * .12;
          vec2 wipePoint = (p-vec2(.5,.57))*vec2(3.7,5.0);
          fogging -= exp(-dot(wipePoint, wipePoint)) * .035;
          // The stain stays embedded in the fogged glass during the encounter.
          vec2 facePatch = (p-vec2(.42,.41))*vec2(7.5,7.0);
          fogging -= presenceVisible * .16 * exp(-dot(facePatch,facePatch));
          float lane = floor(p.x * 79.0);
          float head = fract(hash(vec2(lane, 7.0)) * 13.0 - time * .006);
          float trail = (1.0-smoothstep(.015, .08, abs(fract(p.x*79.0)-.5)))
                      * step(head, p.y) * (1.0-smoothstep(0.0, .17, p.y-head));
          vec3 silver = reflected * vec3(.73, .79, .75);
          silver = mix(silver, vec3(.16, .183, .17), clamp(fogging, 0.0, .6));
          silver += trail * .005;
          gl_FragColor = vec4(silver, 1.0);
        }
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `});function f(m){r&&(m.material.uniforms.impacts.value=r.ripples);const p=m.onBeforeRender;m.userData.lastCapture=-1/0,m.onBeforeRender=function(y,w,x){if(h||w.overrideMaterial||a-m.userData.lastCapture<o)return;m.userData.lastCapture=a,h=!0;const T=[...l,...u].filter(M=>M!==this&&M.visible);T.forEach(M=>{M.visible=!1});try{p.call(this,y,w,x)}finally{T.forEach(M=>{M.visible=!0}),h=!1}},m.castShadow=!1,m.receiveShadow=!1,l.push(m),i.add(m)}const g=[],_=[];if(e.updateMatrixWorld(!0),e.traverse(m=>{m.isMesh&&m.userData.mirror_surface&&g.push(m),m.isMesh&&m.userData.water_surface&&_.push(m)}),g.length){const m=new sn;g.forEach(T=>m.union(new sn().setFromObject(T)));const p=m.getSize(new P),y=m.getCenter(new P),w=new Yn(p.x,p.y);w.setAttribute("edgeDistance",new mt([1,1,1,1],1));const x=new Tr(w,{textureWidth:s,textureHeight:s,clipBias:.001,multisample:0,shader:d(!1)});x.name="Realtime tarnished cabinet reflection",x.position.copy(y),x.position.z=m.max.z+5e-4,g.forEach(T=>{T.visible=!1,T.castShadow=!1}),f(x)}if(_.length){const m=cM(_);_.forEach(y=>{y.visible=!1});const p=new Tr(m,{textureWidth:s,textureHeight:s,clipBias:.002,multisample:0,shader:d(!0)});p.name="Realtime shallow puddle reflection",p.rotation.x=-Math.PI/2,p.position.y=.016,p.material.transparent=!0,p.material.depthWrite=!1,f(p)}return{surfaces:l,update(m){a=m,l.forEach(p=>{p.material.uniforms.time.value=m,p.material.uniforms.presenceVisible.value=c?.visible?1:0})},invalidate(){l.forEach(m=>{m.userData.lastCapture=-1/0})},setQuality(m){s=m.reflectionSize,o=1/m.reflectionFPS,l.forEach(p=>{p.getRenderTarget().setSize(s,s),p.material.uniforms.texel.value.set(1/s,1/s),p.material.uniforms.detail.value=m.mode==="smooth"?0:1,p.userData.lastCapture=-1/0})}}}function Ru(i){const e=new Map,t=new P;i.updateMatrixWorld(!0),i.traverse(n=>{if(!n.isMesh||!n.visible||Array.isArray(n.material)||n.material.transparent||n.userData.mirror_surface||n.userData.water_surface||n.userData.hide_in_reflection)return;for(let a=n;a&&a!==i;a=a.parent)if(a.userData.story_dynamic||a.userData.start_hidden||a.userData.interaction||a.name.startsWith("INT_")||a.name.startsWith("EVENT_"))return;const r=Object.keys(n.geometry.attributes).sort().join(",");n.getWorldPosition(t);const o=`${`${Math.floor(t.x/5)},${Math.floor(t.y/3)},${Math.floor(t.z/5)}`}:${n.material.uuid}:${n.castShadow}:${r}`;e.has(o)||e.set(o,[]),e.get(o).push(n)});for(const n of e.values()){if(n.length<2)continue;const r=n.map(a=>{const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrixWorld),l.clearGroups(),l}),s=c1(r,!1);if(r.forEach(a=>a.dispose()),!s)continue;const o=new lt(s,n[0].material);o.name=`Static material batch: ${n[0].material.name}`,o.castShadow=n[0].castShadow,o.receiveShadow=!0,s.computeBoundingSphere(),n.forEach(a=>{a.userData.collider?(a.userData.batched_collider=!0,a.layers.set(1)):a.removeFromParent()}),i.add(o)}}const ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hM extends Ur{constructor(){super(),this.uniforms=mi.clone(ra.uniforms),this.material=new Km({name:ra.name,uniforms:this.uniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._fsQuad=new Xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Id?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ud&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function dM(){const i=new hM;return i.material.name="Rain night film output",i.material.fragmentShader=i.material.fragmentShader.replace("// color space",`
    float luminance = dot(gl_FragColor.rgb, vec3(.2126, .7152, .0722));
    float shadows = 1.0 - smoothstep(.015, .22, luminance);
    float highlights = smoothstep(.19, .7, luminance);
    // Keep black black; tint low light towards slate and tungsten towards amber.
    gl_FragColor.rgb *= mix(vec3(1.0), vec3(.90, 1.015, 1.055), shadows * .42);
    gl_FragColor.rgb *= mix(vec3(1.0), vec3(1.035, 1.012, .96), highlights * .5);
    gl_FragColor.rgb = mix(vec3(luminance), gl_FragColor.rgb, .95);
    float edge = smoothstep(.18, .77, length((vUv - .5) * vec2(1.0, .85)));
    gl_FragColor.rgb *= 1.0 - edge * .14;
    // color space
  `),i}const Zi={"weather-radio":{file:"weather-radio.mp3",speaker:"车载电台",text:"台风预警持续生效。今晚沿海地区有暴雨，低洼路段积水，请减速慢行，注意安全。",voice:"zh-CN-YunyangNeural",rate:"+2%",filter:"phone"},"mother-arrival":{file:"mother-arrival.mp3",speaker:"妈妈 · 22:17 留言",text:"晚晚，别回家。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone",duration:9},"mother-return":{file:"mother-return.mp3",speaker:"妈妈 · 保存的留言",text:"晚晚，别回来。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-look-back":{file:"mother-look-back.mp3",speaker:"妈妈 · 保存的留言",text:"晚晚，别回头。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-warning":{file:"mother-warning.mp3",speaker:"妈妈 · 电话",text:"晚晚，别回家。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"father-tape":{file:"father-tape.mp3",speaker:"父亲 · 生日磁带",text:"等爸爸出差回来，给你买自行车。",voice:"zh-CN-YunjianNeural",rate:"+0%",filter:"tape"},"stranger-return":{file:"stranger-echo.mp3",speaker:"磁带里的声音",text:"等爸爸出差回来，给你买自行车。",voice:"zh-CN-YunxiNeural",rate:"-4%",filter:"tape"},"mother-run":{file:"mother-run.mp3",speaker:"墙里的妈妈",text:"晚晚，快走，别回头。",voice:"zh-CN-XiaoxiaoNeural",rate:"+5%",filter:"room"},"mother-full":{file:"mother-full.mp3",speaker:"妈妈 · 完整留言",text:"别回家。家里已经三口人了。你再回来，就四口了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-empty":{file:"mother-empty.mp3",speaker:"妈妈 · 电话",text:"晚晚，这次你没进门。好，那它就还只能找我。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"phone-disconnected":{file:"phone-disconnected.mp3",speaker:"电话提示",text:"您拨打的号码是空号。",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"phone"},"wang-neighbor":{file:"wang-neighbor.mp3",speaker:"王姨 · 门后",text:"晚晚回来了？建平呢？刚才还听他在家走路。你们家三口，我多包了几个。你爸前两天还帮我修过灯呢。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"room"},"wan-deny":{file:"wan-deny.mp3",speaker:"林晚",text:"王姨，家里只有我和妈妈。",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"room"},"wan-echo":{file:"wan-echo.mp3",speaker:"客厅里 · 你的声音",text:"别回家。家里已经三口人了。",voice:"zh-CN-XiaoyiNeural",rate:"-2%",filter:"room"},"mother-wall-answer":{file:"mother-wall-answer.mp3",speaker:"电话里的妈妈",text:"我知道。我一直都在墙这边。",voice:"zh-CN-XiaoxiaoNeural",rate:"-3%",filter:"phone"},"stranger-soup":{file:"stranger-soup.mp3",speaker:"留言末尾的声音",text:"晚晚，妈妈让你盛汤。",voice:"zh-CN-YunxiNeural",rate:"-4%",filter:"phone"},"father-sit":{file:"father-sit.mp3",speaker:"镜子里",text:"晚晚，坐下。",voice:"zh-CN-YunjianNeural",rate:"-3%",filter:"room"},"wan-answer":{file:"wan-answer.mp3",speaker:"林晚",text:"谁在里面？",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"room"},"wan-father":{file:"wan-father.mp3",speaker:"林晚",text:"爸，是你吗？",voice:"zh-CN-XiaoyiNeural",rate:"-2%",filter:"room"},"community-call":{file:"community-call.mp3",speaker:"社区 · 次日来电",text:"是林晚吗？五栋五零二昨晚煤气泄漏。你母亲的死亡时间，大约是昨晚十点二十分。屋里只有两副碗筷。请你过来一趟。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"phone"},"wang-breakfast":{file:"wang-breakfast.mp3",speaker:"门外 · 王姨",text:"晚晚，吃饭了。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"room"},"mother-eat":{file:"mother-eat.mp3",speaker:"妈妈",text:"吃吧。别等她了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"room"}},Sf=Object.freeze({music:.55,effects:.65,voice:1});function _d(i={}){return Object.fromEntries(Object.entries(Sf).map(([e,t])=>[e,typeof i?.[e]=="number"&&Number.isFinite(i[e])?Math.max(0,Math.min(1,i[e])):t]))}const vd=i=>new URL(`./audio/${i}`,document.baseURI).href;class fM{constructor({onSubtitle:e=()=>{},onStatus:t=()=>{}}={}){this.ctx=null,this.onSubtitle=e,this.onStatus=t,this.buffers=new Map,this.voiceNodes=[],this.cues=[],this.voiceToken=0,this.voiceEnd=0,this.voiceLoading=!1,this.ducked=!1,this.musicReady=!1,this.preview=null;let n;try{n=JSON.parse(localStorage.getItem("third-place-audio"))}catch{}this.mix=_d(n)}start(){if(this.stopPreview(),this.ctx){this.ctx.resume().catch(()=>this.onStatus("点“继续游戏”恢复声音"));return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return this.onStatus("此浏览器暂不支持游戏音频");this.ctx=new e,this.ctx.onstatechange=()=>this.reportStatus(),this.master=this.ctx.createGain(),this.master.gain.value=.8,this.master.connect(this.ctx.destination),this.buses={};for(const[t,n]of Object.entries(this.mix)){const r=this.ctx.createGain();r.gain.value=n,r.connect(this.master),this.buses[t]=r}this.musicDuck=this.ctx.createGain(),this.musicDuck.connect(this.buses.music),this.createAmbience(),this.onStatus("正在载入配乐与角色语音…"),this.load("rain-night-score.mp3").then(t=>{const n=this.ctx.createBufferSource(),r=this.ctx.createGain();this.musicFade=r,n.buffer=t,n.loop=!0,r.gain.setValueAtTime(0,this.ctx.currentTime),r.gain.linearRampToValueAtTime(this.finishedNight?0:1,this.ctx.currentTime+1.8),n.connect(r).connect(this.musicDuck),n.start(),this.musicReady=!0,this.reportStatus()}).catch(()=>this.onStatus("配乐未载入，请检查网络后重新载入")),this.load(Zi["mother-warning"].file).catch(()=>{}),this.ctx.resume().catch(()=>this.onStatus("点“继续游戏”恢复声音"))}load(e){if(!this.buffers.has(e)){const t=fetch(vd(e)).then(n=>{if(!n.ok)throw new Error(`Audio ${n.status}: ${e}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).catch(n=>{throw this.buffers.delete(e),n});this.buffers.set(e,t)}return this.buffers.get(e)}reportStatus(){this.onStatus(this.musicReady?this.ctx.state==="running"?"配乐已开启 · 旁白时自动降低背景声":"声音已暂停 · 可单独试听":"正在载入配乐与角色语音…")}createAmbience(){this.ambienceGain=this.ctx.createGain(),this.ambienceGain.connect(this.buses.effects);const e=this.ctx.createBuffer(1,this.ctx.sampleRate*7,this.ctx.sampleRate),t=e.getChannelData(0);let n=0;for(let o=0;o<t.length;o+=1)n=n*.996+(Math.random()*2-1)*.018,t[o]=(Math.random()*2-1)*.18+n;for(const[o,a,l]of[["bandpass",1250,.24],["lowpass",280,.22]]){const c=this.ctx.createBufferSource(),u=this.ctx.createBiquadFilter(),h=this.ctx.createGain();c.buffer=e,c.loop=!0,u.type=o,u.frequency.value=a,u.Q.value=.46,h.gain.value=l,c.connect(u).connect(h).connect(this.ambienceGain),c.start()}const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.frequency.value=49.7,s.gain.value=.015,r.connect(s).connect(this.ambienceGain),r.start()}setVolume(e,t){if(e in Sf){this.mix=_d({...this.mix,[e]:t}),this.ctx&&this.buses[e].gain.setTargetAtTime(this.mix[e],this.ctx.currentTime,.05),this.preview&&(this.preview.volume=.8*this.mix[this.previewChannel]);try{localStorage.setItem("third-place-audio",JSON.stringify(this.mix))}catch{}}}tone(e=220,t=.4,n=.08,r="sine",s=0){if(!this.ctx)return;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createBiquadFilter(),c=this.ctx.currentTime+s;o.type=r==="sawtooth"?"triangle":r,o.frequency.setValueAtTime(e,c),o.frequency.exponentialRampToValueAtTime(Math.max(35,e*.72),c+t),l.type="lowpass",l.frequency.value=Math.max(650,e*2.4),a.gain.setValueAtTime(1e-4,c),a.gain.exponentialRampToValueAtTime(n,c+.025),a.gain.exponentialRampToValueAtTime(1e-4,c+t),o.connect(l).connect(a).connect(this.buses.effects),o.onended=()=>{o.disconnect(),l.disconnect(),a.disconnect()},o.start(c),o.stop(c+t+.02)}knock(){this.tone(92,.13,.16,"square"),this.tone(78,.18,.13,"square",.17)}china(){this.tone(1370,.5,.045),this.tone(1760,.28,.025,"sine",.08)}playVoice(e,t){return this.playSequence([e],t)}get voiceBusy(){return this.voiceLoading||this.fallbackVoice>0||!!(this.ctx&&this.voiceEnd>this.ctx.currentTime)}async playSequence(e,{delay:t=0,gap:n=2,onComplete:r,onCancel:s}={}){if(this.stopVoice(),!this.ctx){const a=e.map(l=>`${Zi[l].speaker}：${Zi[l].text}`).join(`
`);this.fallbackVoice=Math.max(8.5,a.length/5),this.voiceCancel=s,this.voiceComplete=r,this.onSubtitle(a,this.fallbackVoice*1e3);return}const o=this.voiceToken;this.voiceLoading=!0,this.voiceCancel=s;try{const a=await Promise.all(e.map(c=>this.load(Zi[c].file)));if(o!==this.voiceToken)return;this.voiceLoading=!1;let l=this.ctx.currentTime+t;e.forEach((c,u)=>{const h=Zi[c],d=this.ctx.createBufferSource(),f=this.ctx.createBiquadFilter(),g=this.ctx.createBiquadFilter(),_=this.ctx.createGain();d.buffer=a[u],f.type="highpass",f.frequency.value=h.filter==="phone"?240:100,g.type="lowpass",g.frequency.value=h.filter==="phone"?3700:h.filter==="tape"?4700:6500;const m=l+d.buffer.duration;_.gain.setValueAtTime(0,l),_.gain.linearRampToValueAtTime(1.1,l+.025),_.gain.setValueAtTime(1.1,Math.max(l+.025,m-.04)),_.gain.linearRampToValueAtTime(0,m),d.connect(f).connect(g).connect(_).connect(this.buses.voice),d.onended=()=>{d.disconnect(),f.disconnect(),g.disconnect(),_.disconnect()},d.start(l),this.voiceNodes.push(d),this.cues.push({start:l,end:m,text:`${h.speaker}：${h.text}`,shown:!1}),l=m+n}),this.voiceEnd=l-n,this.voiceComplete=r}catch{if(o!==this.voiceToken)return;this.voiceLoading=!1,this.onSubtitle(e.map(a=>`${Zi[a].speaker}：${Zi[a].text}`).join(`
`),8500),this.onStatus("这段语音未载入，已显示完整字幕"),this.voiceEnd=this.ctx.currentTime+8.5,this.voiceComplete=r}}stopVoice(){const e=this.voiceCancel;this.voiceCancel=null,e&&e(),this.voiceToken+=1;for(const t of this.voiceNodes)try{t.stop()}catch{}this.voiceNodes=[],this.cues=[],this.voiceEnd=0,this.voiceLoading=!1,this.fallbackVoice=0,this.voiceComplete=null,this.setDuck(!1)}setDuck(e){if(!this.ctx||this.ducked===e)return;this.ducked=e;const t=this.ctx.currentTime;this.musicDuck.gain.cancelScheduledValues(t),this.musicDuck.gain.setTargetAtTime(e?.24:1,t,e?.12:.65)}update(e=0){if(this.fallbackVoice>0&&Number.isFinite(e)&&e>0){if(this.fallbackVoice=Math.max(0,this.fallbackVoice-e),this.fallbackVoice===0){const n=this.voiceComplete;this.voiceComplete=this.voiceCancel=null,n?.()}return}if(!this.ctx||this.ctx.state!=="running")return;const t=this.ctx.currentTime;this.setDuck(this.cues.some(n=>t>=n.start-.2&&t<n.end+.3));for(const n of this.cues)!n.shown&&t>=n.start&&(n.shown=!0,t<n.end&&this.onSubtitle(n.text,(n.end-t)*1e3+450));if(this.voiceComplete&&t>=this.voiceEnd){const n=this.voiceComplete;this.voiceComplete=null,this.voiceCancel=null,n()}}noiseBuffer(){if(!this.noise){this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate);const e=this.noise.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}return this.noise}effect(e,t=.7,n=0){if(!this.ctx)return;const r={paper:[1800,.035],cloth:[640,.035],chair:[180,.085],footstep:[78,.13],water:[2100,.038],breath:[410,.045],cough:[620,.09],breaker:[95,.09]}[e]||[300,.03],s=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();s.buffer=this.noiseBuffer(),s.loop=!0,o.type="bandpass",o.frequency.value=r[0],o.Q.value=e==="chair"?8:.75;const l=this.ctx.currentTime;a.gain.setValueAtTime(1e-4,l),a.gain.exponentialRampToValueAtTime(r[1],l+Math.min(.15,t*.22)),a.gain.exponentialRampToValueAtTime(1e-4,l+t),s.connect(o).connect(a);const c=this.ctx.createStereoPanner?.();c?(c.pan.value=n,a.connect(c).connect(this.buses.effects)):a.connect(this.buses.effects),s.start(),s.stop(l+t+.03),s.onended=()=>{s.disconnect(),o.disconnect(),a.disconnect(),c?.disconnect()}}setWater(e){if(!this.ctx)return;if(!e){this.water&&(this.water.source.stop(),this.water.gain.disconnect(),this.water=null);return}if(this.water)return;const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),r=this.ctx.createGain();t.buffer=this.noiseBuffer(),t.loop=!0,n.type="bandpass",n.frequency.value=2400,n.Q.value=.5,r.gain.value=.035,t.connect(n).connect(r).connect(this.buses.effects),t.start(),t.onended=()=>{t.disconnect(),n.disconnect()},this.water={source:t,gain:r}}quietRoomSources(){if(this.ctx)for(const e of this.roomSources?.values()||[])e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.06)}locateListener(e,t){if(!this.ctx)return;const n=this.ctx.listener,r=this.ctx.currentTime;if(n.positionX)for(const[s,o]of[["position",e],["forward",t],["up",{x:0,y:1,z:0}]])for(const a of["x","y","z"])n[s+a.toUpperCase()].setTargetAtTime(o[a],r,.025);else n.setPosition(e.x,e.y,e.z),n.setOrientation(t.x,t.y,t.z,0,1,0)}roomSource(e,t,n,r,s=1){if(!this.ctx)return;this.roomSources||=new Map;let o=this.roomSources.get(e);if(!o){if(n<=0)return;const a=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain(),u=this.ctx.createPanner();a.buffer=this.noiseBuffer(),a.loop=!0,l.type="bandpass",l.frequency.value=r,l.Q.value=s,c.gain.value=0,u.panningModel="HRTF",u.distanceModel="inverse",u.refDistance=1.6,u.maxDistance=18,u.rolloffFactor=1.3,u.positionX.value=t[0],u.positionY.value=t[1],u.positionZ.value=t[2],a.connect(l).connect(c).connect(u).connect(this.buses.effects),a.start(),o={source:a,filter:l,gain:c,panner:u},this.roomSources.set(e,o)}for(const[a,l]of["X","Y","Z"].entries())o.panner["position"+l].value=t[a];o.gain.gain.setTargetAtTime(Math.max(0,n),this.ctx.currentTime,.045)}finishNight(e){if(this.finishedNight=e,!this.ctx)return;this.setWater(!1);for(const o of this.roomSources?.values()||[])o.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.3);if(this.musicFade?.gain.setTargetAtTime(0,this.ctx.currentTime,1.8),this.ambienceGain?.gain.setTargetAtTime(0,this.ctx.currentTime,1.5),e==="wall"||this.cicadas)return;this.cicadas=!0;const t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),r=this.ctx.createGain(),s=this.ctx.createGain();t.frequency.value=3700,n.frequency.value=17,r.gain.value=.005,s.gain.value=.008,n.connect(r).connect(s.gain),t.connect(s).connect(this.buses.effects),t.start(),n.start()}pause(){this.stopPreview(),this.ctx?.suspend()}stopPreview(){this.preview&&(this.preview.pause(),this.preview.removeAttribute("src"),this.preview.load(),this.preview=null)}async audition(e){this.stopPreview(),this.previewChannel=e;const t=new Audio(vd(e==="music"?"rain-night-score.mp3":Zi["mother-warning"].file));this.preview=t,t.volume=.8*this.mix[e],t.onended=()=>{this.preview===t&&(this.stopPreview(),this.reportStatus())};try{await t.play(),this.preview===t&&this.onStatus(e==="music"?"正在试听雨夜配乐 · 继续游戏即停止试听":"正在试听妈妈的电话留言")}catch{this.preview===t&&this.onStatus("试听未能播放，请检查音量或网络")}}}function pM({userAgent:i="",platform:e="",maxTouchPoints:t=0,userAgentMobile:n=!1,coarsePointer:r=!1,hoverNone:s=!1,override:o}={}){return o==="1"?!0:o==="0"?!1:n||/Android|iPhone|iPad|iPod/i.test(i)||/Mac/i.test(e||i)&&t>1?!0:r&&s}function mM(i){return i.y<-.45&&Math.hypot(i.x,i.y)>=.9}function gM(i,{isActive:e,onStart:t,onRelease:n,onCancel:r}){let s=null,o=!1;const a=()=>{const l=s;s=null,(l!==null||o)&&(o=!1,r(),l!==null&&i.hasPointerCapture?.(l)&&i.releasePointerCapture(l))};i.addEventListener("pointerdown",l=>{!e()||s!==null||o||l.button>0||(l.preventDefault(),s=l.pointerId,i.setPointerCapture(s),t())}),i.addEventListener("pointerup",l=>{if(l.pointerId!==s)return;l.preventDefault();const c=s;s=null,e()?n():r(),i.hasPointerCapture?.(c)&&i.releasePointerCapture(c)});for(const l of["pointercancel","lostpointercapture"])i.addEventListener(l,c=>{c.pointerId===s&&a()});return i.addEventListener("keydown",l=>{["Space","Enter"].includes(l.code)&&!l.repeat&&e()&&s===null&&!o&&(l.preventDefault(),o=!0,t())}),i.addEventListener("keyup",l=>{["Space","Enter"].includes(l.code)&&o&&(l.preventDefault(),o=!1,e()?n():r())}),i.addEventListener("blur",a),{reset:a}}function _M(i,{isActive:e,onTap:t,onLook:n=()=>{}}){let r=null,s=0,o=0,a=0,l=0,c=0,u=!1;function h(){const d=r;r=null,u=!1,d!==null&&i.hasPointerCapture?.(d)&&i.releasePointerCapture(d)}i.addEventListener("pointerdown",d=>{!e()||r!==null||d.button>0||(d.preventDefault(),r=d.pointerId,s=a=d.clientX,o=l=d.clientY,c=d.timeStamp,u=!1,i.setPointerCapture(r))}),i.addEventListener("pointermove",d=>{if(r===d.pointerId){if(!e())return h();!u&&Math.hypot(d.clientX-s,d.clientY-o)>10&&(u=!0),u&&(n((d.clientX-a)*.0034,(d.clientY-l)*.0031),a=d.clientX,l=d.clientY)}}),i.addEventListener("pointerup",d=>{if(r!==d.pointerId)return;d.preventDefault();const f=!u&&Math.hypot(d.clientX-s,d.clientY-o)<=10&&d.timeStamp-c<650;h(),f&&e()&&t()});for(const d of["pointercancel","lostpointercapture"])i.addEventListener(d,f=>{r===f.pointerId&&h()});return i.addEventListener("click",d=>{d.detail===0&&e()&&t()}),{reset:h}}function wf(i="smooth",e=!0){const t=i==="quality";return{mode:t?"quality":"smooth",label:t?"画质优先":"流畅优先",maxPixelRatio:e?t?1.75:1.25:t?1.5:1,maxPixels:e?t?16e5:9e5:t?27e5:16e5,shadowSize:e?t?512:256:t?1024:512,flashlightSize:t?1024:512,reflectionSize:e?t?512:384:t?768:384,reflectionFPS:t?30:15,ambientOcclusion:t}}function Ef(i,e,t,n){return Math.min(Math.max(.5,t||1),n.maxPixelRatio,Math.sqrt(n.maxPixels/Math.max(1,i*e)))}function vM(i,e,t=48,n=.12){const r=Math.hypot(i,e);if(r<=t*n)return{x:0,y:0};const s=Math.min(1,(r/t-n)/(1-n));return{x:i/r*s,y:e/r*s}}function xM({canvas:i,root:e,enabled:t,isActive:n,onLook:r,onAction:s,onHold:o}){const a={x:0,y:0},l=e.querySelector("#move-stick"),c=e.querySelector("#stick-knob");let u=null,h=null,d=0,f=0,g=0,_=0;const m=new Map,p=M=>{const A=m.get(M.pointerId);A&&(m.delete(M.pointerId),e.querySelector(`[data-hold="${A}"]`)?.classList.remove("held"))};function y(){a.x=a.y=0,u=h=null,c.style.transform="";for(const M of m.values())o(M,!1);m.clear(),e.querySelectorAll(".held").forEach(M=>M.classList.remove("held"))}if(!t)return{movement:a,reset:y};l.addEventListener("pointerdown",M=>{if(!n()||u!==null)return;M.preventDefault(),u=M.pointerId;const A=l.getBoundingClientRect();d=A.left+A.width/2,f=A.top+A.height/2,l.setPointerCapture(M.pointerId),w(M)});function w(M){if(M.pointerId!==u)return;if(!n()){y();return}const A=M.clientX-d,L=M.clientY-f,b=l.clientWidth*.34;Object.assign(a,vM(A,L,b));const v=Math.min(1,b/(Math.hypot(A,L)||1));c.style.transform=`translate(${A*v}px, ${L*v}px)`}l.addEventListener("pointermove",w);const x=M=>{M.pointerId===u&&(u=null,a.x=a.y=0,c.style.transform="")};for(const M of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(M,x);i.addEventListener("pointerdown",M=>{!n()||h!==null||M.button>0||(M.preventDefault(),h=M.pointerId,g=M.clientX,_=M.clientY,i.setPointerCapture(M.pointerId))}),i.addEventListener("pointermove",M=>{if(M.pointerId===h){if(!n()){y();return}r((M.clientX-g)*.0034,(M.clientY-_)*.0031),g=M.clientX,_=M.clientY}});const T=M=>{M.pointerId===h&&(h=null)};for(const M of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(M,T);return e.querySelectorAll("[data-action]").forEach(M=>{M.addEventListener("click",()=>{n()&&s(M.dataset.action)})}),e.querySelectorAll("[data-hold]").forEach(M=>{M.addEventListener("pointerdown",A=>{!n()||m.has(A.pointerId)||(A.preventDefault(),M.setPointerCapture(A.pointerId),m.set(A.pointerId,M.dataset.hold),M.classList.add("held"),o(M.dataset.hold,!0))});for(const A of["pointerup","pointercancel","lostpointercapture"])M.addEventListener(A,p)}),window.addEventListener("blur",y),document.addEventListener("visibilitychange",y),{movement:a,reset:y}}const xd=new ws,MM=new P,Md=new P,sa=new P,Ws=new P;function qa(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}function yM(i,e){if(!i?.isMesh)return null;for(let t=i;t&&t!==e;t=t.parent)if(t.userData.interaction)return t;return null}function bM(i,e){for(let t=i;t;t=t.parent)if(t===e)return!0;for(let t=e;t;t=t.parent)if(t===i)return!0;return!1}function Ar(i,e,t,n){const r=i.distanceTo(e);xd.set(i,MM.subVectors(e,i).normalize());for(const{object:s,box:o}of n)if(!(!qa(s)||bM(t,s))&&xd.intersectBox(o,Md)&&i.distanceTo(Md)<r-.08)return!1;return!0}function SM(i,e=new P){return i.userData.hintAnchor?e.fromArray(i.userData.hintAnchor).applyMatrix4(i.matrixWorld):i.geometry?(i.geometry.boundingBox||i.geometry.computeBoundingBox(),i.geometry.boundingBox.getCenter(e).applyMatrix4(i.matrixWorld),/^door_/.test(i.userData.interaction||"")&&(e.y+=.25),e):i.getWorldPosition(e)}function Tf(i,e,t,n,r){if(!qa(i))return null;i.updateWorldMatrix(!0,!1),SM(i,sa);const s=e.position.distanceTo(sa);if(s>3.4||(Ws.copy(sa).project(e),Ws.z<-1||Ws.z>1))return null;const o=(Ws.x+1)*n/2,a=(1-Ws.y)*r/2+(i.userData.hintBelow?45:0);return o<92||o>n-92||a<86||a>r-40||!Ar(e.position,sa,i,t)?null:{x:o,y:a,distance:s}}const Bi=Object.freeze(["entry","living","photos","bedroom","kitchen"]),Af=Object.freeze({battery:38,outageSeconds:0,housePhase:0,houseChanged:Object.freeze(Bi.map(()=>0)),houseNoticed:Object.freeze(Bi.map(()=>0)),houseDoorOpen:!0,houseReported:Object.freeze(Bi.map(()=>0)),stoveLit:!0,pipeHeard:!1,pipeSeconds:0,wallLocated:!1,wallListenSeconds:0,breathSeconds:0});function Rf(i){return i.wallOpen?2:i.discovered.some(e=>["mirror","messages"].includes(e))?1:0}function wM(i,e){const t=i.houseChanged[e];return!Number.isInteger(e)||e<0||e>=Bi.length||t>=i.housePhase||i.houseNoticed[e]<t?!1:(i.houseChanged[e]++,Bi[e]==="bedroom"&&(i.houseDoorOpen=!1),!0)}function EM(i,e){return!Number.isInteger(e)||e<0||e>=Bi.length||i.houseNoticed[e]>=i.houseChanged[e]?!1:(i.houseNoticed[e]=i.houseChanged[e],!0)}function TM(i){return(1-Math.cos(Math.max(0,i)*Math.PI/4))*.5*Math.min(1,Math.max(0,i)/12)}function AM(i){return .24+.76*Math.min(1,Math.max(0,(i-3)/12))}function RM(i,e,{active:t=!0,flashlight:n=!1,phoneAvailable:r=!0,listeningPipe:s=!1,listeningWall:o=!1}={}){if(!t||!Number.isFinite(e)||e<=0)return[];const a=[],l=Rf(i);if(l>i.housePhase&&(i.housePhase=l,a.push("house-phase")),i.powerOut){i.outageSeconds===0&&(i.battery=Math.min(i.battery,18),a.push("reserve-mode")),i.outageSeconds+=e;const c=i.battery;r&&(i.battery=Math.max(3,i.battery-e*(n?.12:.003))),c>8&&i.battery<=8&&a.push("battery-low"),i.pipeHeard||(i.pipeSeconds=s?Math.min(6,i.pipeSeconds+e):0,i.pipeSeconds>=6&&(i.pipeHeard=!0,a.push("pipe-heard"))),i.pipeHeard&&!i.wallLocated&&(i.wallListenSeconds=o?Math.min(2,i.wallListenSeconds+e):0,i.wallListenSeconds>=2&&(i.wallLocated=!0,a.push("wall-located")))}return i.discovered.includes("wash-echo")&&!i.ritualComplete&&i.ritual!=="given"&&(i.breathSeconds+=e),a}const Xc=3,qc=4.5,mo=Object.freeze(["rules","tape","household","messages","neighbor","balcony"]);function Cf(){return{...structuredClone(Af),familyEcho:!1,familyPortrait:"",discovered:[],messages:[],tools:[],bowl:"table",bowlTouched:!1,bagOpened:!1,drawerKey:!1,drawerUnlocked:!1,rulesSides:[],wallOpen:!1,letter:!1,sealDrawn:!1,ritualComplete:!1,admitted:!1,calledFather:!1,coughReplies:0,dumplings:"none",neighborMet:!1,deniedThird:!1,mirrorGaze:0,mirrorEncounter:"waiting",powerOut:!1,ritual:"idle",holdSeconds:0,holding:!1,endingLocked:null}}function It(i,e){return i.discovered.includes(e)?!1:(i.discovered.push(e),!0)}function Cu(i){return mo.filter(e=>i.discovered.includes(e)).length}function xo(i,e,t){const n=r=>({ok:!1,reason:r});if(i.endingLocked&&!["cancel-hold"].includes(e))return n("这一夜已经结束。");switch(e){case"open-bag":if(i.bagOpened)return n("包的夹层已经打开了。");i.bagOpened=!0;break;case"take-drawer-key":if(!i.bagOpened)return n("先打开包的夹层。");if(i.drawerKey)return n("钥匙已经收好了。");i.drawerKey=!0;break;case"unlock-drawer":if(i.drawerUnlocked)return n("抽屉已经打开了。");if(!i.drawerKey)return n("抽屉锁着。妈妈总把小钥匙放在沙发上的包里。");i.drawerUnlocked=!0;break;case"read-rules-side":if(!["front","back"].includes(t))return n("没有这一面。");i.rulesSides.includes(t)||i.rulesSides.push(t),i.rulesSides.length===2&&It(i,"rules");break;case"tool":if(!["scraper","alcohol","medicine"].includes(t))return n("不能拿取这个物件。");if(i.tools.includes(t))return n("已经收好了。");i.tools.push(t);break;case"message":if(!i.drawerUnlocked)return n("妈妈的手机在锁着的床头柜抽屉里。");if(!Number.isInteger(t)||t<0||t>=Xc)return n("没有这条短信。");i.messages.includes(t)||i.messages.push(t),i.messages.length===Xc&&It(i,"messages");break;case"meet-neighbor":i.neighborMet=!0,It(i,"neighbor");break;case"deny-third":if(!i.neighborMet)return n("门还没开。");i.deniedThird=!0;break;case"take-dumplings":if(!i.neighborMet||i.dumplings!=="none")return n("没有可以接过的饺子。");i.dumplings="kept";break;case"eat-dumplings":if(i.dumplings!=="kept")return n("没有可吃的饺子。");i.dumplings="eaten";break;case"discard-dumplings":if(i.dumplings!=="kept")return n("没有需要倒掉的饺子。");i.dumplings="discarded";break;case"take-bowl":if(!["table","inverted","served"].includes(i.bowl))return n("碗已经在手里。");i.bowlTouched=!0,i.bowl=i.bowl==="inverted"?"held-inverted":"held-dirty";break;case"put-bowl":if(!i.bowl.startsWith("held"))return n("手里没有碗。");i.bowl=i.bowl==="held-inverted"?"inverted":"table";break;case"wash-start":if(!i.wallOpen||!i.letter)return n("先看看墙里那封信。");if(i.bowl!=="held-dirty")return n("先把第三副碗带来。");i.bowl="washing";break;case"wash-finish":if(i.bowl!=="washing")return n("碗没有在清洗。");i.bowl="clean";break;case"invert-bowl":if(i.bowl!=="clean")return n("先洗净碗里的汤。");i.bowl="inverted";break;case"serve":if(!i.bowl.startsWith("held"))return n("先拿起第三副碗。");i.bowl="served",i.admitted=!0;break;case"open-wall":if(i.wallOpen)return n("墙纸已经撕开了。");if(!i.powerOut)return n("先找到妈妈留下的线索。");if(!i.wallLocated)return n("厨房水管里有敲击声。先听清它从哪里传来。");if(!i.tools.includes("scraper")||!i.tools.includes("alcohol"))return n("需要厨房的铲刀和卧室的工业酒精。");i.wallOpen=!0;break;case"read-letter":if(!i.wallOpen)return n("信还封在墙里。");i.letter=!0;break;case"draw-seal":if(!i.letter)return n("先翻看信背面的步骤。");if(!i.tools.includes("medicine"))return n("朱砂藏在妈妈的药瓶里。");if(!["inverted","held-inverted"].includes(i.bowl))return n("先洗净第三副碗，再倒扣。");if(i.sealDrawn)return n("封已经画好了。");i.sealDrawn=!0;break;case"ritual-start":if(!i.sealDrawn||i.bowl!=="held-inverted")return n("拿起倒扣的碗，再对准小镜子。");if(i.ritual!=="idle")return n("镜面已经吸住了碗。");i.ritual="ready",i.holdSeconds=0;break;case"hold":if(i.ritual!=="ready")return n("现在不需要按住。");i.holding=!0;break;case"release":if(i.ritual!=="ready"||!i.holding)return n("还没有抓住碗。");i.holding=!1,i.ritual="given",i.admitted=!0,i.bowl="offered";break;case"cancel-hold":i.holding=!1,i.holdSeconds=0;break;case"call-father":i.calledFather=!0,i.admitted=!0;break;case"reply-cough":i.coughReplies=Math.min(3,i.coughReplies+1);break;case"break-wall":if(!i.wallOpen||!i.tools.includes("scraper"))return n("还无法撬动墙里的砖。");i.endingLocked="wall";break;default:return n("没有这个动作。")}return{ok:!0}}function CM(i,e,t){return i.ritual!=="ready"||!i.holding||(i.holdSeconds=Math.min(qc,i.holdSeconds+e),i.holdSeconds<qc)?!1:(i.ritual="resisted",i.holding=!1,i.ritualComplete=!0,!0)}function PM(i,e,t,n){return i.mirrorGaze=t?i.mirrorGaze+e:0,i.mirrorGaze<=3||i.admitted?!1:(i.admitted=!0,!0)}function LM(i,{beforeMidnight:e,lookedBack:t=!1}={}){return i.endingLocked==="wall"?"wall":!e||i.admitted||t||i.dumplings==="eaten"?"seat":i.ritualComplete&&i.sealDrawn&&!i.calledFather?"two":null}function Da(i,{outside:e,atMidnight:t}={}){return!!(e&&t&&!i.bowlTouched&&i.deniedThird&&!i.admitted&&i.messages.length===Xc&&Cu(i)===mo.length)}function va(i,e,t,n=new P){const r=new et;r.name=`EVENT_${e}`,r.userData.story_dynamic=!0,r.position.copy(n),i.add(r),i.updateMatrixWorld(!0);const s=new Set(t.filter(Boolean));for(const o of s){let a=!1;for(let l=o.parent;l;l=l.parent)s.has(l)&&(a=!0);a||r.attach(o)}return r}function Bt(i){return i&&(i.userData.story_dynamic=!0),i}function ee(i,e,t,n,r){const s=new lt(new Es(...t),r);if(r.userData?.worldTextureScale){const o=s.geometry.attributes.uv,a=r.userData.worldTextureScale;for(let l=0;l<6;l++){const[c,u]=l<2?[t[2],t[1]]:l<4?[t[0],t[2]]:[t[0],t[1]];for(let h=l*4;h<l*4+4;h++)o.setXY(h,o.getX(h)*c*a,o.getY(h)*u*a)}}return s.name=e,s.position.set(...n),s.castShadow=s.receiveShadow=!0,i.add(s),s}function go(i,e=.65){const t=i.clone();t.userData.worldTextureScale=e;for(const n of["map","normalMap","roughnessMap","metalnessMap","aoMap"])t[n]&&(t[n]=t[n].clone(),t[n].wrapS=t[n].wrapT=vi,t[n].needsUpdate=!0);return t}function Li(i,e,t,n,r){const s=new lt(new yu(t.map(o=>new Oe(...o)),32),r);return s.name=e,s.position.set(...n),s.castShadow=s.receiveShadow=!0,i.add(s),s}function Un(i,e,t,n,r){const s=new lf(t.map(a=>new P(...a))),o=new lt(new bu(s,Math.max(8,t.length*4),n,6,!1),r);return o.name=e,o.castShadow=!0,i.add(o),o}function Ln(i,e=512,t=512){const n=document.createElement("canvas");n.width=e,n.height=t,i(n.getContext("2d"),e,t);const r=new Ts(n);return r.colorSpace=Nt,r}function Oi(i,e,{red:t=[],dark:n=!1}={}){return Ln((r,s,o)=>{r.fillStyle=n?"#15201d":"#c6b991",r.fillRect(0,0,s,o);for(let a=0;a<12e3;a++)r.fillStyle=`rgba(65,48,22,${a%5*.014})`,r.fillRect(a*137.51%s,a*53.77%o,2,2);r.strokeStyle=n?"#84978d":"#6b6350",r.strokeRect(24,24,s-48,o-48),r.fillStyle=n?"#ced8c9":"#312e25",r.font='34px "Songti SC", serif',r.fillText(i,42,85),r.font='25px "Songti SC", serif',e.forEach((a,l)=>{r.fillStyle=t.includes(l)?"#8b291e":n?"#b5c4b6":"#39382f",r.fillText(a,42,150+l*59),t.includes(l)&&(r.strokeStyle="#8b291e",r.lineWidth=3,r.beginPath(),r.ellipse(s/2,142+l*59,s*.41,27,-.055,0,Math.PI*2),r.stroke())})},512,640)}function Dt(i,e,t,n,r,s){const o=new lt(new Yn(t,n),s);return o.name=e,o.position.set(...r),i.add(o),o}function xa(i,{radius:e=.07,height:t=.38,count:n=16}={}){const r=new Ht,s=new Float32Array(n*3);r.setAttribute("position",new fn(s,3));const o=new zt({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:.13}},vertexShader:"void main(){ vec4 p=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*p; gl_PointSize=clamp(18./-p.z,2.,36.); }",fragmentShader:"uniform float opacity; void main(){vec2 p=(gl_PointCoord-.5)*vec2(3.8,1.7);float d=length(p);gl_FragColor=vec4(.74,.79,.72,exp(-d*d*4.)*(1.-smoothstep(.6,1.,d))*opacity);}"}),a=new _u(r,o);return a.frustumCulled=!1,i.add(a),{mesh:a,update(l){for(let c=0;c<n;c++){const u=(l*.21+c*.618)%1;s[c*3]=Math.sin(c*2.8+u*3)*e*(.3+u),s[c*3+1]=u*t,s[c*3+2]=Math.cos(c*6.1+u*2)*e*(.3+u)}r.attributes.position.needsUpdate=!0}}}function DM(i,e,t=640,n=400){const r=new yn(t,n,{minFilter:Pn});r.texture.colorSpace=Nt;const s=new Uint8Array(t*n*4),o=document.createElement("canvas");o.width=t,o.height=n;const a=o.getContext("2d"),l=a.createImageData(t,n);return{canvas:o,render(c,u=()=>()=>{}){const h=i.getRenderTarget(),d=i.getViewport(new yt),f=[];e.traverse(_=>{_.visible&&(_.isReflector||_.userData.captureHidden)&&(f.push(_),_.visible=!1)});const g=u();try{e.updateMatrixWorld(!0),i.setRenderTarget(r),i.clear(),i.render(e,c),i.readRenderTargetPixels(r,0,0,t,n,s);for(let _=0;_<n;_++)l.data.set(s.subarray((n-_-1)*t*4,(n-_)*t*4),_*t*4);return a.putImageData(l,0,0),o}finally{g?.(),f.forEach(_=>{_.visible=!0}),i.setRenderTarget(h),i.setViewport(d)}},dispose(){r.dispose()}}}function IM(i){return i.y<.5||i.z>4.2?"outside":i.x>10?"balcony":i.z<-3?i.x<-2?"old-bedroom":i.x<2?"mother-bedroom":"bathroom":i.x>6?"kitchen":"living"}function NM(i,e){const t=n=>i.discovered.includes(n);return!t("mirror")||i.wallOpen?null:e==="old-bedroom"&&!t("heard-return")?"mother-return":e==="balcony"&&t("balcony")&&!t("heard-look-back")?"mother-look-back":null}function rr(i){return!i.discovered.includes("phone-missing")||i.discovered.includes("phone-recovered")}function yd(i,e=!1){const t=Math.max(0,Math.floor(i));return`${e?"▶ 回放":"● REC"}　${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function UM(i){return{"mother-return":"heard-return","mother-look-back":"heard-look-back"}[i]||null}function OM(i,e,t,n,r){if(!i.discovered.includes("wash-echo")||i.discovered.includes("phone-dropped")||i.ritual==="ready")return!1;const s=e.x-t.x,o=e.z-t.z,a=Math.hypot(s,o);return a>.55&&a<3.1&&(s*n.x+o*n.z)/a>.28&&r}const Yl=new Map;function bd(i="back",e=0){const t=`${i}:${e}`;if(Yl.has(t))return Yl.get(t);const n=document.createElement("canvas");n.width=256,n.height=512;const r=n.getContext("2d"),s=r.createLinearGradient(0,40,0,512);s.addColorStop(0,"#0d1716"),s.addColorStop(.7,"#101b19"),s.addColorStop(1,"#101b1900"),r.fillStyle=s,r.beginPath(),r.moveTo(113,117),r.bezierCurveTo(77,129,57,126,48,174),r.lineTo(33,413),r.lineTo(72,426),r.lineTo(81,241),r.lineTo(75,505),r.lineTo(183,505),r.lineTo(175,241),i==="wave"?(r.lineTo(177,182),r.lineTo(207,174)):(r.lineTo(187,426),r.lineTo(224,413),r.lineTo(207,174)),r.bezierCurveTo(198,131,177,128,143,117),r.closePath(),r.fill();const o=i==="profile";r.beginPath(),r.ellipse(o?133:128,81,o?24:31,43,-.04,0,Math.PI*2),r.fill(),r.fillRect(113,105,30,29),o&&(r.beginPath(),r.moveTo(154,69),r.lineTo(165,84),r.lineTo(154,90),r.fill()),i==="front"&&(r.fillStyle="#6b756738",r.beginPath(),r.ellipse(128,84,22,31,0,0,Math.PI*2),r.fill(),r.fillStyle="#060e0e",r.fillRect(113,79,8,3),r.fillRect(135,79,8,3)),i==="wave"&&(r.strokeStyle="#101b19",r.lineWidth=21,r.lineCap="round",r.beginPath(),r.moveTo(186,159),r.lineTo(217,174),r.lineTo(222+Math.sin(e*Math.PI/3)*11,83),r.stroke()),r.globalCompositeOperation="destination-out";for(let l=0;l<512;l+=4)r.fillStyle=`rgba(0,0,0,${.025+l%7*.007})`,r.fillRect(0,l,256,1);const a=new Ts(n);return a.colorSpace=Nt,Yl.set(t,a),a}function Ia(i,e,{width:t=.7,height:n=1.8,pose:r="back",opacity:s=.9}={}){const o=new et;o.name=e,o.userData.story_dynamic=!0,o.userData.flatPresence=!0;const a=new Tt({map:bd(r),transparent:!0,opacity:s,depthWrite:!1,side:Jt}),l=new lt(new Yn(t,n),a);return l.name=`${e} / glass image`,l.position.y=n/2,o.add(l),i.add(o),o.userData.setFrame=(c,u=0)=>{a.map=bd(c,u)},o.userData.opacity=c=>{a.opacity=c},o}function FM(i){const e=new et;e.name="EVENT_EMPTY_RAINCOAT",e.userData.story_dynamic=!0,i.add(e);const t=new ct({color:2108720,roughness:.97,side:Jt}),n=new Yn(.59,.77,16,20),r=n.attributes.position;for(let a=0;a<r.count;a++){const l=r.getX(a),c=r.getY(a);r.setZ(a,Math.sin(l*22)*.023+Math.max(0,c)*-.26)}n.computeVertexNormals();const s=new lt(n,t);s.name="Empty jacket folded over chair",s.position.set(0,1.02,0),e.add(s);for(const a of[-1,1]){const l=new lt(new Yn(.15,.52,2,4),t);l.name="Empty hanging jacket sleeve",l.position.set(a*.3,.92,.025),l.rotation.z=a*.16,e.add(l)}const o=e.children.map(a=>({object:a,y:a.position.y}));return e.userData.collapse=a=>{for(const{object:l,y:c}of o)l.scale.y=1-a*.82,l.position.y=.58+(c-.58)*(1-a)},e}function BM(i){return{time:0,step:0,x:i.x,z:i.z-3.4}}function kM(i,e,t,{active:n=!0,lightOff:r=!1}={}){if(!n||!Number.isFinite(e)||e<=0)return null;if(r||(i.time+=e,t.z>-2.2&&i.time>2))return"escaped";if(i.time>=20)return"caught";let s=!1;for(;i.step<Math.floor(i.time/2.4);){i.step++,s=!0;const o=t.x-i.x,a=t.z-i.z,l=Math.hypot(o,a),c=Math.min(1,l);l>0&&(i.x+=o/l*c,i.z+=a/l*c)}return Math.hypot(t.x-i.x,t.z-i.z)<.62?"caught":s?"step":null}async function zM(){return new Su().loadAsync(new URL("./story/future-dinner.png",document.baseURI).href)}function Sd(i,e=!1){const t=document.createElement("canvas");t.width=e?320:640,t.height=400;const n=t.getContext("2d");return e?n.drawImage(i,i.width*.38,i.height*.24,i.width*.24,i.height*.43,0,0,320,400):n.drawImage(i,0,0,640,400),t}function HM({world:i,parent:e=i,story:t,sound:n,emit:r}){const s=Bt(new et);s.name="EVENT_HOME_SEARCH",e.add(s);const o=[],a=(U,B,V)=>(Bt(U),Object.assign(U.userData,{interaction:B,prompt:V}),o.push(U),U),l=(U,B=.8,V={})=>new ct({color:U,roughness:B,...V}),c=l(4470314),u=l(1317912),h=l(3883318),d=l(10849875,.33,{metalness:.7}),f=U=>i.getObjectByName(U)||i.getObjectByName(St.sanitizeNodeName(U));let g=null;const _=U=>U*U*(3-2*U),m=new et;m.name="Mother bag pocket",m.position.set(-4.02,.92,2.17),s.add(m),a(m,"mother_bag","打开妈妈包上的夹层"),ee(m,"Pocket dark lining",[.37,.21,.012],[0,-.105,.013],u);const p=new et;p.name="Mother bag pocket flap",m.add(p),ee(p,"Faded bag pocket fabric",[.39,.215,.016],[0,-.105,0],h),ee(p,"Bag pocket clasp",[.037,.026,.01],[0,-.16,-.014],d);const y=new et;y.name="Mother drawer key",y.position.set(-4.02,.83,2.155),y.rotation.y=Math.PI,s.add(y),a(y,"drawer_key","收起标着“床头柜”的钥匙");const w=new lt(new fo(.022,.004,8,24),d);w.position.set(-.075,.024,.006),y.add(w),ee(y,"Key shaft",[.009,.075,.009],[-.075,-.029,.006],d);for(const U of[-.048,-.061])ee(y,"Key tooth",[.024,.006,.009],[-.068,U,.006],d);const x=Ln((U,B,V)=>{U.fillStyle="#c6b991",U.fillRect(0,0,B,V),U.strokeStyle="#75664a",U.lineWidth=5,U.strokeRect(12,12,B-24,V-24),U.fillStyle="#312e25",U.textAlign="center",U.textBaseline="middle",U.font='80px "Songti SC", serif',U.fillText("床头柜",B/2,V/2)},384,192);Dt(y,"Key paper tag",.17,.085,[.045,0,0],new Tt({map:x,side:Jt}));const T=new et;T.name="Mother bedside cabinet",T.position.set(-1.35,0,-6.25),s.add(T);for(const[U,B,V]of[["Cabinet left side",[.035,.63,.48],[-.232,.35,0]],["Cabinet right side",[.035,.63,.48],[.232,.35,0]],["Cabinet back",[.43,.63,.025],[0,.35,-.227]],["Cabinet top",[.51,.038,.51],[0,.695,0]],["Cabinet lower shelf",[.43,.035,.44],[0,.17,0]]])ee(T,U,B,V,c).userData.collider=!0;ee(T,"Lower cabinet door",[.425,.275,.025],[0,.325,.225],c);const M=new et;M.name="Mother sliding drawer",M.position.y=.565,T.add(M);const A=a(ee(M,"Mother drawer front",[.435,.16,.028],[0,0,.244],c),"mother_drawer","拉开床头柜的抽屉");ee(M,"Drawer floor",[.414,.014,.42],[0,-.074,.015],c);for(const U of[-.203,.203])ee(M,"Drawer tray side",[.014,.13,.42],[U,-.016,.015],c);ee(M,"Drawer tray back",[.414,.13,.014],[0,-.016,-.19],c),ee(A,"Drawer metal handle",[.115,.022,.025],[0,.006,.03],d);const L=new lt(new Lr(.012,16),u);L.position.set(.142,-.025,.016),A.add(L);const b=new et;b.name="Mother phone in drawer",b.position.set(.018,-.046,.06),b.rotation.x=-Math.PI/2,M.add(b),a(b,"messages","查看妈妈未发送的短信"),ee(b,"Mother phone body",[.145,.275,.019],[0,0,0],u),Dt(b,"Mother phone screen",.126,.238,[0,0,.011],new Tt({map:Oi("未发送",["收件人：晚晚","今晚别回来住","家里有人","草稿　3 条"],{dark:!0})}));const v=Dt(M,"Drawer lining receipt",.15,.22,[-.12,-.064,-.025],new ct({map:Oi("维修",["床头柜锁","2007 年"]),side:Jt,roughness:1}));v.rotation.x=-Math.PI/2;const R=Bt(f("INT_RULES"));R.visible=!1;const O={front:Oi("住户须知",["南街新村 · 第五幢","1987 年 6 月","请核对户籍登记人数","背面有妈妈写的字"]),back:Oi("入住家规",["只准承认两口活人","第三口只能在墙里","不能摆碗，不能叫它","不能看它的脸","血回来的那天","它会要座位"],{red:[4,5]})},k=Dt(s,"Two-sided household notice",.43,.56,[9.1,1.44,-1.278],new ct({map:O.front,roughness:1}));a(k,"rules","取下住户须知，查看正反面"),R.userData.prompt=k.userData.prompt;function z(U,B,V){g={duration:U,age:0,update:B,complete:V},B(0)}const Z={root:s,targets:o,get busy(){return!!g},available(U){return U==="mother_bag"?!t.bagOpened&&!g:U==="drawer_key"?t.bagOpened&&!t.drawerKey&&!g:U==="mother_drawer"?!t.drawerUnlocked&&!g:U==="messages"?t.drawerUnlocked&&!g:!0},interact(U){if(g||!Z.available(U))return;const B={mother_bag:"open-bag",drawer_key:"take-drawer-key",mother_drawer:"unlock-drawer"}[U];if(!B)return;U==="mother_drawer"&&It(t,"drawer-checked");const V=xo(t,B);if(!V.ok){n.effect("wood",.15),r("hint",V.reason),r("changed");return}n.effect(U==="mother_bag"?"cloth":"wood",.4),U==="mother_bag"&&z(.75,W=>{p.rotation.x=_(W)*1.95,y.visible=W>.55},()=>r("hint","夹层里有一把小钥匙，纸签上写着“床头柜”。")),U==="drawer_key"&&z(.55,W=>{y.position.y=.83+Math.sin(W*Math.PI)*.11,y.scale.setScalar(1-_(W)*.8)},()=>{y.visible=!1,r("hint","钥匙收好了。妈妈卧室的床头柜还锁着。")}),U==="mother_drawer"&&z(1.1,W=>{M.position.z=_(W)*.37,b.visible=W>.6},()=>r("hint","抽屉最里面，是妈妈一直没寄出的那些话。")),r("changed")},showRulesSide(U){k.material.map=O[U]||O.front},setArtMode(U){R.visible=!!U},restore(){g=null,p.rotation.x=t.bagOpened?1.95:0,y.position.y=.83,y.scale.setScalar(1),y.visible=t.bagOpened&&!t.drawerKey,M.position.z=t.drawerUnlocked?.37:0,b.visible=t.drawerUnlocked,Z.showRulesSide(t.rulesSides.includes("back")?"back":"front")},update(U,B=!0){if(!(!B||!g||!Number.isFinite(U)||U<=0)&&(g.age=Math.min(g.duration,g.age+U),g.update(g.age/g.duration),g.age===g.duration)){const V=g.complete;g=null,V(),r("changed")}}};return Z.restore(),Z}function VM(i){if(!["two","seat","wall","empty"].includes(i))throw new Error("Unknown ending");return{type:i,phase:i==="two"?"hotel":"voice",time:0,phaseTime:0,call:"ringing",reportRead:!1,receiptRead:!1,windowSeen:!1,voiceDone:!1,shown:!1}}function br(i,e){if(!i||i.type!=="two"||i.phase!=="hotel")return!1;if(e==="answer"&&i.call==="ringing")i.call="playing";else if(e==="heard"&&i.call==="playing")i.call="heard";else if(e==="cancel-call"&&i.call==="playing")i.call="ringing";else if(e==="report"&&i.call==="heard")i.reportRead=!0;else if(e==="receipt")i.receiptRead=!0;else if(e==="window")i.windowSeen=!0;else if(e==="leave"&&i.call==="heard"&&i.reportRead)i.phase="table",i.phaseTime=0;else return!1;return!0}function GM(i,e,t=!0){return!i||i.shown||!t||!Number.isFinite(e)||e<=0?null:(i.time+=e,i.phaseTime+=e,i.phase==="voice"&&i.voiceDone?(i.phase=i.type==="wall"?"silence":"table",i.phaseTime=0,i.voiceDone=!1,i.type==="empty"?"empty-table":null):i.type==="empty"&&i.phase==="table"&&i.voiceDone?(i.phase="reply",i.phaseTime=0,i.voiceDone=!1,null):(i.type==="two"?i.phase==="table"&&i.phaseTime>=8:i.type==="seat"?i.phase==="table"&&i.phaseTime>=11:i.type==="wall"?i.phase==="silence"&&i.phaseTime>=3:i.phase==="reply"&&i.phaseTime>=5.5)?(i.shown=!0,"ending-title"):null)}function WM(i){return i.call==="ringing"?"床头的手机响了。接听社区来电":i.call==="playing"?"听完来电，可以在房间里走走":i.reportRead?"带上门边的房卡，离开宾馆":"手机收到了一份现场记录"}function XM({parent:i,tag:e,sound:t,emit:n,look:r,changed:s,getEnding:o}){const a=new et;a.name="EVENT_MORNING_HOTEL",a.position.set(23,0,0),i.add(a),a.visible=!1;const l=(v,R=.9)=>new ct({color:v,roughness:R});let c;i.parent.traverse(v=>{!c&&v.isMesh&&/Third.chair|Chair.mother.seat/.test(v.name)&&(c=v.material)});const u=c?go(c,.65):l(5851447),h=l(12894376),d=l(11842980),f=l(1385504,.3);h.map=Ln((v,R,O)=>{v.fillStyle="#c8c4ae",v.fillRect(0,0,R,O);for(let k=0;k<R;k+=4)v.fillStyle=k%8?"#c2bfa9":"#cec9b5",v.fillRect(k,0,1,O),v.fillRect(0,k,R,1)},256,256),h.map.wrapS=h.map.wrapT=vi,h.map.repeat.set(3,4);const g=(v,R,O,k)=>{const z=ee(a,v,R,O,k);return z.userData.collider=!0,z};ee(a,"Hotel carpet",[4.6,.12,5],[0,-.06,0],l(6711639));for(const[v,R]of[[[.15,3,5],[-2.3,1.5,0]],[[.15,3,5],[2.3,1.5,0]],[[4.6,3,.15],[0,1.5,2.5]],[[4.6,3,.15],[0,1.5,-2.5]]])g("Hotel room wall",v,R,d);ee(a,"Hotel ceiling",[4.6,.12,5],[0,3.02,0],d),g("Hotel bed base",[1.61,.68,2.1],[-.7,.34,-.5],u),ee(a,"Hotel white duvet",[1.62,.22,2.1],[-.7,.58,-.5],h),ee(a,"Hotel folded duvet edge",[1.64,.03,.42],[-.7,.7,-1.08],l(13683117));for(const v of[-1.02,-.38]){const R=new lt(new Dr(1,24,12),h);R.name="Hotel soft pillow",R.scale.set(.31,.11,.23),R.position.set(v,.77,-1.22),a.add(R)}ee(a,"Hotel headboard",[1.8,1.1,.09],[-.7,.65,-1.63],u),g("Hotel bedside table",[.55,.62,.52],[.52,.31,-1.15],u);const _=e(ee(a,"Morning phone",[.19,.026,.33],[.52,.645,-1.15],f),"morning_phone","接听社区来电"),m=v=>Ln((R,O,k)=>{R.fillStyle="#243c36",R.fillRect(0,0,O,k),R.fillStyle="#e1dbc0",R.textAlign="center",R.font="25px serif",R.fillText("08:06",O/2,53),R.font="28px serif",R.fillText(v,O/2,155),R.font="18px serif",R.fillText("林晚",O/2,204),R.strokeStyle="#bdd2b8",R.beginPath(),R.arc(O/2,k-70,26,0,Math.PI*2),R.stroke()},256,448),p=[m("社区来电"),m("通话中"),m("现场记录")],y=Dt(_,"Morning phone screen",.166,.299,[0,.015,0],new Tt({map:p[0]}));y.rotation.x=-Math.PI/2;const w=e(Dt(a,"Dawn through hotel window",1.7,1.55,[0,1.92,-2.407],new Tt({map:Ln((v,R,O)=>{const k=v.createLinearGradient(0,0,0,O);k.addColorStop(0,"#aac1ba"),k.addColorStop(1,"#e2d9b3"),v.fillStyle=k,v.fillRect(0,0,R,O),v.fillStyle="#899b91";for(let z=0;z<12;z++)v.fillRect(z*48,O*.68+z%3*23,43,O)})})),"morning_window","看看台风后的街道");for(const v of[-.88,0,.88])ee(a,"Hotel window frame",[.035,1.65,.035],[v,1.92,-2.37],u);for(const v of[-1.04,1.04])ee(a,"Hotel drawn curtains",[.27,2.35,.12],[v,1.77,-2.23],l(8549981));g("Hotel writing desk",[.48,.83,1.2],[1.85,.415,.5],u);const x=e(Dt(a,"Hotel single guest receipt",.27,.4,[1.85,.837,.45],new ct({map:Oi("入住登记",["00:17 · 单人房","入住人：林晚","来客人数：一人"]),roughness:1})),"morning_receipt","查看昨夜的入住单");x.rotation.x=-Math.PI/2;const T=e(ee(a,"Hotel door",[.9,2.28,.05],[1.17,1.14,2.407],u),"morning_leave","拿起房卡，离开宾馆");ee(a,"Hotel brass handle",[.17,.035,.06],[.9,1.06,2.35],l(9994841,.35));const M=Dt(a,"Hotel key card",.21,.14,[1.78,1.25,2.39],new ct({map:Oi("房卡",["203"])}));M.rotation.y=Math.PI;for(const v of[.07,2.92])ee(a,"Hotel wall trim",[4.5,.055,.032],[0,v,2.39],u);ee(a,"Hotel door frame",[1.04,.08,.08],[1.17,2.33,2.37],u);for(const v of[.67,1.67])ee(a,"Hotel door frame",[.065,2.32,.08],[v,1.16,2.37],u);const A=new nn(14868415,19,7,2);A.position.set(.2,2.5,-1.9),a.add(A);const L=new nn(13416595,4,5,2);L.position.set(1.5,2.4,1.7),a.add(L);const b=()=>{const v=o();!v||v.type!=="two"||(y.material.map=p[v.call==="ringing"?0:v.call==="playing"?1:2],_.userData.prompt=v.call==="ringing"?"接听社区来电":v.call==="playing"?"社区正在说话":"阅读社区发来的现场记录",n("morning-objective",WM(v)))};return{root:a,targets:[_,w,x,T],show(){a.visible=!0,r(new P(24.35,1.65,.1),new P(23.52,.645,-1.15)),s(),b()},hide(){a.visible=!1,s()},refresh:b,interact(v){const R=o();!R||R.type!=="two"||R.phase!=="hotel"||(v==="morning_phone"?br(R,"answer")?(b(),t.playVoice("community-call",{onComplete(){o()===R&&(br(R,"heard"),b())},onCancel(){o()===R&&(br(R,"cancel-call"),b())}})):R.call==="heard"&&n("ending-document",{kicker:"社区 · 现场记录",title:"墙是完整的",body:"<p>502 煤气泄漏。屋内两副碗筷，客厅墙面完整。</p><p>林秀珍，死亡时间约为昨晚 <strong>22:20</strong>。</p><p>手机里的最后一条留言停在 <strong>22:17</strong>，只有九秒。</p><p>她留给我的路，是从墙里出去的。</p>",actions:[{label:"放下手机",onSelect(){br(R,"report"),b()}}]}):v==="morning_receipt"?(br(R,"receipt"),n("ending-document",{kicker:"宾馆 · 入住登记",title:"只登记了一个人",body:"<p>入住时间：00:17。房型：单人房。</p><p>姓名栏里只有林晚两个字。笔迹很重，最后一笔划破了纸。</p>"})):v==="morning_window"?(br(R,"window"),n("hint","积水退到了路沿。楼下有人扫树枝。蝉已经开始叫了。")):v==="morning_leave"&&(br(R,"leave")?n("morning-leave"):n("hint",R.call==="ringing"?"手机还在响。":R.call==="playing"?"电话那边还没有说完。":"社区发来的现场记录还在手机上。")))}}}const en=i=>i*i*(3-2*i),Ze=i=>new P(...i);function qM({world:i,scene:e,camera:t,renderer:n,story:r,sound:s,emit:o,view:a,collidersChanged:l,presenceArt:c,echoPortrait:u=null}){const h=C=>i.getObjectByName(C)||i.getObjectByName(St.sanitizeNodeName(C)),d=C=>{const ae=[];return i.traverse(Ce=>{C(Ce)&&ae.push(Ce)}),ae},f=new et;f.name="EVENT_LIVE_STORY",i.add(f);const g=(C,ae=.83,Ce={})=>new ct({color:C,roughness:ae,...Ce}),_=g(3484448),m=g(6515557,.35,{metalness:.72}),p=g(12765369,.2),y=g(1054743),w=g(7481630,.91),x=[],T=(C,ae,Ce)=>(C.userData.hintBelow=["bowl_third","take_scraper","take_alcohol","take_medicine","dumplings","wall_mirror"].includes(ae),C.userData.interaction=ae,C.userData.prompt=Ce,Bt(C),x.push(C),C);let M=0,A=null,L=!1,b=null,v=!1,R=!1,O=!1,k=!1,z=0,Z=!1,U=!1,B=!1,V=!1,W=null,j=null,se=24,Me=-1/0,je=!1,Ke=null;const Xe=Bt(h("INT_TAPE")),K=Xe.position.clone();Xe.position.set(-4.5,.155,-4.91),Xe.userData.prompt="抽出床底的生日磁带";const le=d(C=>/^Tape.reel/.test(C.name));le.forEach(Bt);const be=new P,Ve=new P,Se=()=>({position:t.position.clone(),quaternion:t.quaternion.clone(),fov:t.fov});function J(C){t.position.copy(C.position),t.quaternion.copy(C.quaternion),t.fov=C.fov,t.updateProjectionMatrix(),a()}function ge(C,ae){t.position.copy(C),t.lookAt(ae),a()}function I(C,ae,Ce=()=>{},st=!0){return A?!1:(A={duration:C,time:0,update:ae,complete:Ce,lock:st},ae(0),!0)}function Pe(C,ae){const Ce=xo(r,C,ae);return Ce.ok?o("changed"):o("hint",Ce.reason),Ce.ok}const N=d(C=>/Third.chair.draped.raincoat|Raincoat.sleeve/.test(C.name));N.forEach(C=>{Bt(C),C.visible=!1});const H=Bt(h("Third chair")),G=H?.position.clone();let ve=0,ne=0;const Ue=d(C=>/^Mirror.handwritten/.test(C.name));Ue.forEach(C=>{Bt(C),C.material=C.material.clone(),C.material.transparent=!0,C.material.opacity=0,C.visible=!1});const Je=h("INT_BOWL_THIRD");delete Je.userData.interaction;const fe=va(i,"CARRIABLE_THIRD_BOWL",d(C=>C.name.startsWith("INT_BOWL_THIRD")||/^Quiet.soup.surface$/.test(C.name)),Ze([2.28,.789,.3]));T(fe,"bowl_third","拿起第三副碗");const D=fe.position.clone(),S=h("Quiet soup surface"),Y=xa(fe);Y.mesh.position.y=.07;const re=new et;re.name="EVENT_HELD_BOWL",t.add(re),re.userData.captureHidden=!0,re.position.set(.17,-.28,-.54),re.visible=!1,t.layers.enable(2),re.traverse(C=>C.layers.set(2));const _e=new nn(12964027,.32,1.8,2);_e.position.set(.1,-.08,-.12),_e.layers.set(2),t.add(_e);const oe=Ze([7.45,.96,-2.31]),Be=Ze([8.06,1.006,-2.24]),ye=(C,ae=!1)=>{i.attach(fe),fe.position.copy(C),fe.rotation.set(0,0,ae?Math.PI:0),re.visible=!1,fe.traverse(Ce=>Ce.layers.set(0))},ze=()=>{re.visible=!0,re.add(fe),fe.position.set(0,0,0),fe.rotation.set(.1,0,r.bowl==="held-inverted"?Math.PI:0),fe.traverse(C=>C.layers.set(2))},He=HM({world:i,parent:f,story:r,sound:s,emit:o});x.push(...He.targets);const Ee=Dt(f,"Household registration copy",.34,.45,[0,.817,-6.32],new ct({map:Oi("户口登记复印件",["户主　林秀珍","女儿　林晚","林建平　离异迁出","登记备注：已迁出"],{red:[2]}),roughness:.98,side:Jt}));Ee.rotation.x=-Math.PI/2,T(Ee,"household","拿出枕头下的户口本");const Ie=Bt(h("Mother pillow")),$=new et;$.position.set(8.05,1.04,-2.21),f.add($),ee($,"Scraper blade",[.16,.009,.14],[0,0,-.05],m),ee($,"Scraper wooden handle",[.045,.026,.18],[0,.012,.1],_),T($,"take_scraper","拿起铲刀");const ue=Li(f,"Industrial alcohol bottle",[[.06,0],[.061,.2],[.028,.235],[.026,.3]],[-1.46,.7,-6.35],g(8031610,.2,{transparent:!0,opacity:.83}));T(ue,"take_alcohol","拿起工业酒精");const pe=Dt(ue,"Alcohol label",.087,.12,[0,.135,.061],new ct({map:Oi("酒精",["工业用"])}));pe.material.side=Jt;const xe=h("Medicine bottle");xe&&(xe.visible=!1);const F=Li(f,"Mother medicine bottle",[[.034,0],[.034,.11],[.023,.125],[.023,.15]],[-3.64,.84,2.35],g(7955274));T(F,"take_medicine","收好妈妈的药瓶"),Li(F,"Medicine cap",[[.027,0],[.027,.026]],[0,.147,0],p);const he=h("Kitchen sink");he&&(he.visible=!1);const ce=h("Kitchen faucet");ce&&(ce.visible=!1),Un(f,"Kitchen curved faucet",[[7.45,1.02,-2.53],[7.45,1.29,-2.53],[7.45,1.39,-2.46],[7.45,1.36,-2.31]],.017,m),Li(f,"Kitchen tap base",[[.029,0],[.029,.035]],[7.45,1.012,-2.53],m),ee(f,"Kitchen tap lever",[.07,.012,.023],[7.49,1.1,-2.53],m);const Te=new et;Te.position.set(7.45,1.012,-2.31),f.add(Te);const me=g(2571063,.21,{metalness:.75});ee(Te,"Sink dark water basin",[.62,.015,.46],[0,.01,0],me);for(const C of[-.235,.235])ee(Te,"Sink rolled rim",[.72,.045,.032],[0,.025,C],m);for(const C of[-.344,.344])ee(Te,"Sink rolled rim",[.032,.045,.48],[C,.025,0],m);T(Te,"kitchen_sink","把碗放到水龙头下");const de=new lt(new ar(.008,.011,.37,10),new ct({color:10732990,transparent:!0,opacity:.57,roughness:.13,emissive:1847340}));de.position.set(7.45,1.17,-2.31),de.visible=!1,f.add(de);const Ne=[];for(let C=0;C<12;C++){const ae=new lt(new Dr(.007,5,4),de.material);f.add(ae),ae.visible=!1,Ne.push(ae)}const Qe=Li(f,"Warm egg soup pot",[[.12,0],[.19,.04],[.19,.19],[.183,.2],[.172,.185],[.172,.03]],[8.45,1.06,-2.25],m),Pt=va(i,"CHOPPING_BOARD",d(C=>/^Cut.vegetable/.test(C.name)),Ze([8.45,1.06,-2.23]));Pt.position.x=6.63,T(Qe,"serve_soup","给第三副碗盛汤");const xt=new lt(new Lr(.17,32),g(10523212,.22));xt.rotation.x=-Math.PI/2,xt.position.y=.16,Qe.add(xt);const bn=xa(Qe,{radius:.12,height:.48});bn.mesh.position.y=.17;const _n=Ia(f,"EVENT_PEEPHOLE_IMAGE");_n.position.set(.05,0,6.25),_n.visible=!1;const Gi=new sn;for(const C of d(ae=>ae.isMesh&&ae.userData.mirror_surface))Gi.union(new sn().setFromObject(C));const bi=Gi.getCenter(new P),ur=Gi.getSize(new P),vn=Ia(f,"EVENT_BATHROOM_PRESENCE",{width:ur.x*.58,height:ur.y*.93,opacity:.72});vn.position.set(bi.x-.1,Gi.min.y+.02,Gi.max.z+.008),vn.children[0].userData.hide_in_reflection=!0,vn.visible=!1;const So=vn.position.clone().add(Ze([0,ur.y*.77,0])),Or=Ze([3.6,1.5,-4.78]),wo=ee(f,"Bathroom wall switch",[.13,.2,.026],[4.64,1.35,-3.09],p);T(wo,"bath_switch","关掉卫生间的灯");const Hn=d(C=>C.isLight&&/BATHROOM/.test(C.name))[0],hr=Hn?.intensity||4.5,Fr=d(C=>C.isLight).map(C=>({object:C,base:C.intensity})),Is=d(C=>C.isMesh&&/filament.bulb|tungsten.bulb|Hall.fluorescent.tube/i.test(C.name)).map(C=>(Bt(C),C.material=C.material.clone(),{object:C,base:C.material.emissiveIntensity})),dr=new nn(9943714,0,8,2);dr.position.set(.8,2.58,3.5),f.add(dr),ee(f,"502 emergency light",[.38,.08,.12],[.8,2.75,3.88],p);const fr=new et;fr.position.set(-5.4,.91,-1.8),fr.rotation.y=Math.PI/2,f.add(fr);const el=ee(f,"Television low cabinet",[.55,.49,1.12],[-5.4,.245,-1.8],_);el.userData.collider=!0,ee(fr,"Old television cabinet",[1.05,.79,.43],[0,0,0],y);const Br=new Tt({color:9217685});Dt(fr,"Television static",.82,.58,[0,.03,.222],Br);const kr=document.createElement("canvas");kr.width=128,kr.height=96;const E=kr.getContext("2d"),X=new Ts(kr);X.colorSpace=Nt,Br.map=X;const Q=new nn(7507337,.75,3.2,2);Q.position.set(-5.08,1.1,-1.8),f.add(Q);const ie=h("INT_DOOR_501");delete ie.userData.interaction;const q=va(i,"NEIGHBOR_DOOR",d(C=>C===ie||/501.recessed.panel|501.door.handle/.test(C.name)),Ze([-.68,0,7.91]));T(q,"door_501","敲 501 的门"),q.userData.hintAnchor=[.68,1.45,0],ee(f,"501 darkness",[1.42,2.48,.12],[0,1.23,8.85],y);const we=new nn(13612923,1.1,2.8,2);we.position.set(.3,1.8,8.25),f.add(we),we.visible=!1,T(ee(f,"Answer at 501",[.22,.14,.015],[.52,1.52,7.85],new Tt({transparent:!0,opacity:0,depthWrite:!1})),"deny_third","“家里只有我和妈妈。”");const Ae=Li(f,"Wang dumpling bowl",[[.05,0],[.13,.045],[.16,.11],[.148,.12],[.13,.095],[.04,.025]],[.52,.025,7.6],p);T(Ae,"dumplings","拿起门口的热饺子"),Ae.visible=!1;const Ye=new et;Ae.add(Ye);for(let C=0;C<7;C++){const ae=new lt(new Dr(1,12,8,0,Math.PI*2,0,Math.PI*.75),g(13288617,.57));ae.scale.set(.038,.021,.024),ae.rotation.y=C*2.7,ae.position.set(Math.sin(C*2.7)*.082,.075,Math.cos(C*2.7)*.065),Ye.add(ae)}const We=xa(Ae);We.mesh.position.y=.11,T(ee(f,"Discard at sink",[.18,.08,.13],[7.15,1.06,-2.05],m),"discard_dumplings","把饺子倒进水槽");const qe=Bt(h("INT_WALL_SEAL"));qe.position.x=-5.675;const nt=qe.position.clone(),$e=h("EVENT_WALL_BRICKS"),gt=h("Wall letter");gt.visible=!1;const Et=Dt($e,"Mother unfinished letter",.51,.72,[.11,1.24,0],new ct({map:Oi("晚晚：",["不是你爸回来了。","是房子要把他留下。","我守了十九年。","你是钥匙。","如果它坐下来——"],{red:[4]}),roughness:.95}));Et.rotation.y=Math.PI/2,T(Et,"wall_letter","取下妈妈没写完的信");const Ft=h("Wall small mirror");Ft&&(Ft.visible=!1);const Lt=new yn(384,384,{minFilter:Pn}),wt=Dt($e,"Impossible wall mirror",.34,.38,[.095,1.9,0],new Tt({map:Lt.texture}));wt.userData.captureHidden=!0,wt.rotation.y=Math.PI/2,T(wt,"wall_mirror","把倒扣的碗对准镜子");const tt=new dn(42,1,.08,35);tt.position.set(.2,1.45,1.6),tt.lookAt(2.8,1.02,.47);const ht=FM(f);ht.position.set(2.88,0,.47),ht.rotation.y=-Math.PI/2,ht.visible=!1;const rt=T(ee(f,"Lin Wan phone on the third chair",[.145,.018,.275],[2.88,.594,.47],y),"recover_phone","拿起椅子上正在录像的手机");rt.visible=!1,rt.userData.hintBelow=!0;const Sn=Dt(rt,"Dropped phone recording screen",.13,.248,[0,.011,0],new Tt({map:Ln((C,ae,Ce)=>{C.fillStyle="#172b29",C.fillRect(0,0,ae,Ce),C.fillStyle="#b23229",C.beginPath(),C.arc(30,30,10,0,7),C.fill(),C.fillStyle="#b6c8b9",C.font="22px monospace",C.fillText("REC",52,38),C.strokeStyle="#829b8c",C.strokeRect(15,66,ae-30,Ce-90)},256,448)}));Sn.rotation.x=-Math.PI/2;let wn=null;const En=DM(n,e),Si=new dn(71,1.6,.05,30);Si.position.set(2.88,.616,.47),Si.lookAt(2,2.2,4.1);const Mt=Bt(h("Lin family photo"));Mt&&(Mt.rotation.y=Math.PI),Mt?.traverse(Bt),Mt?.traverse(C=>{/Lin.family.photo.(face|body)/.test(C.name)&&(C.visible=!1)});const ln=new po().load(new URL("./story/corridor-photos.png",document.baseURI).href);if(ln.colorSpace=Nt,ln.repeat.set(1/3,.5),ln.offset.set(0,.5),r.familyEcho&&(ln.offset.x=2/3),Mt&&Dt(Mt,"Mother and daughter old photograph",.913,.651,[0,0,.048],g(12960174,.88,{map:ln})),Mt&&T(Mt,"family_photo","看看全家福"),Mt&&r.familyEcho&&u){const C=Dt(Mt,"Fourth face pasted in family photograph",.195,.235,[.209,.091,.052],new Tt({transparent:!0,depthWrite:!1,color:13221278}));C.visible=!1,new Su().load(u,ae=>{C.material.map=Ln((Ce,st,De)=>{Ce.beginPath(),Ce.ellipse(st/2,De/2,st*.49,De*.49,0,0,Math.PI*2),Ce.clip(),Ce.drawImage(ae,0,0,st,De)},192,240),C.material.needsUpdate=!0,C.visible=!0})}const Yt=new et;Mt?.add(Yt),Yt.visible=!1,Dt(Yt,"Third photo body",.115,.22,[0,-.11,.05],y);const cn=new lt(new Lr(.062,20),g(10264204));cn.position.set(0,.11,.052),Yt.add(cn);const Wt=Yt.clone(!0);Wt.name="Third figure in photo glass",Mt?.add(Wt),Wt.visible=!1,Wt.traverse(C=>{C.isMesh&&(C.material=C.material.clone(),C.material.transparent=!0,C.material.opacity=.3)});const zr=new po().load(new URL("./story/father-portrait.png",document.baseURI).href);zr.colorSpace=Nt;for(let C=0;C<21;C++){const ae=new et;ae.position.set(.065+C%3*.002,.38+C%7*.28,-.85+Math.floor(C/7)*.68),ae.rotation.x=(C%4-1.5)*.18,$e.add(ae);const Ce=zr.clone();Ce.repeat.set(.72,.76),Ce.offset.set(.14+C%3*.015,.12);const st=g(C%3?12432283:10264211,.98,{map:Ce,side:Jt}),De=Dt(ae,"Buried photograph fragment",.18,.22,[0,0,0],st);De.rotation.y=Math.PI/2}const In=new lt(new ar(.055,.055,2.24,14),qe.material);In.rotation.x=Math.PI/2,f.add(In),In.visible=!1;const Eo=new et;Eo.name="EVENT_CINNABAR_SEAL",f.add(Eo);const Hr=[],tl=[[[-.8,.6],[-.8,2.65],[.8,2.65],[.8,.6],[-.8,.6]],[[-.64,2.46],[.64,2.46]],[[-.48,2.25],[.48,2.25]],[[-.6,.94],[-.15,1.18],[.1,.81],[.4,1.2],[.61,.95]],[[-.69,1.48],[-.38,1.3]],[[.38,1.3],[.69,1.48]],[[0,2.6],[0,2.17]],[[-.52,2.12],[-.65,1.8]],[[.52,2.12],[.65,1.8]]];tl.forEach((C,ae)=>{const Ce=Un(Eo,`Cinnabar stroke ${ae}`,C.map(([st,De])=>[-5.65,De,st]),.014,w);Ce.visible=!1,Hr.push(Ce)}),T(ee(f,"Seal drawing place",[.025,.3,.34],[-5.67,1.05,.5],new Tt({transparent:!0,opacity:0,depthWrite:!1})),"draw_seal","用药瓶里的朱砂画封");const Zf=T(ee(f,"Pry wall brick",[.09,.18,.25],[-5.66,.53,-.7],g(4802619)),"break_wall","用铲刀撬开整面墙"),Jf=T(ee(f,"Answer the wall",[.035,.17,.2],[-5.71,1.42,1],qe.material),"answer_wall","回应墙里的咳嗽");T(ee(f,"Father name on wall",[.012,.19,.22],[-5.63,1.17,-.64],new Tt({transparent:!0,opacity:0,depthWrite:!1})),"call_father","轻声叫“爸”");const Fn=new lt(new La(.045,.053,64),new Tt({color:12110784,transparent:!0,opacity:.5,depthWrite:!1,side:Jt}));Fn.name="EVENT_MIRROR_TENSION",Fn.rotation.y=Math.PI/2,Fn.position.set(-5.57,1.9,0),f.add(Fn),Fn.visible=!1;const Hu=d(C=>/^(Bowl.(Lin.Wan|mother)|INT_BOWL_THIRD).chopstick/.test(C.name)).map(C=>(Bt(C),{object:C,position:C.position.clone(),rotation:C.rotation.clone()})),Qf=["Chair mother","Chair Lin Wan"].map(h).filter(Boolean).map(C=>(Bt(C),{object:C,position:C.position.clone()}));for(const C of["Clock hour hand","Clock minute hand"]){const ae=h(C);ae&&(ae.visible=!1)}const nl=[];for(const[C,ae,Ce]of[["hour",.112,.008],["minute",.167,.005]]){const st=new et;st.position.set(2.32,2.14,-2.813),f.add(st),ee(st,`Live ${C} hand`,[Ce,ae,.004],[0,ae/2,0],y),nl.push(st)}const Vr=XM({parent:f,tag:T,sound:s,emit:o,look:ge,changed:l,getEnding:()=>j}),Vu=d(C=>/^Bowl.Lin.Wan/.test(C.name));Vu.forEach(Bt);const pr=new lt(new La(.09,.112,64),new ct({color:6902579,transparent:!0,opacity:.68,roughness:.95,side:Jt}));pr.name="Dry soup ring after the night",pr.rotation.x=-Math.PI/2,pr.position.copy(D),pr.position.y=.793,pr.visible=!1,f.add(pr);const ep=()=>{Vr.hide(),ge(Ze([3.52,1.72,1.98]),Ze([1.73,.8,.21])),o("ending-table")};function To(C,ae={}){const Ce=j;s.playVoice(C,{...ae,onComplete(){j===Ce&&(Ce.voiceDone=!0)}})}function tp(C){const ae=GM(j,C);if(j.type==="two"&&j.phase==="hotel"&&j.call==="ringing"){const Ce=Math.floor(j.phaseTime/5);Ce!==j.lastRing&&(j.lastRing=Ce,s.tone(680,.18,.018),s.tone(850,.18,.018,"sine",.25))}if(ae==="empty-table"&&(ge(Ze([3.75,1.48,2.38]),Ze([1.45,.94,.24])),o("ending-time-reset"),To("mother-eat",{delay:2.5})),j.type!=="wall"&&!(j.type==="empty"&&j.phase==="voice")){e.background.set(j.type==="empty"?1120535:3686201);for(const{object:_t,base:Xt}of Fr)_t.intensity=Xt*.85;for(const{object:_t,base:Xt}of Is)_t.material.emissiveIntensity=Xt*.85;dr.intensity=0,Q.intensity=0;const Ce=(j.type==="seat"&&j.phase==="table"||j.type==="empty"&&j.phase==="reply")&&!j.shown,st=Math.min(j.phaseTime,j.type==="empty"?4.8:9.6)%4.8,De=Ce?kt.smoothstep(st,.6,1.75)*(1-kt.smoothstep(st,2.7,4.25)):0;for(const{object:_t,position:Xt,rotation:rl}of Hu){const ip=j.type==="seat"||j.type==="empty"&&fe.children.includes(_t);_t.position.copy(Xt),_t.rotation.copy(rl),ip&&(_t.position.y+=De*.027,_t.rotation.z+=De*.08)}if(j.type==="seat"&&Ce)for(const{object:_t,position:Xt}of Qf)_t.position.z=Xt.z+Math.sin(Math.min(1,j.phaseTime/2)*Math.PI/2)*.035;if(j.type==="empty"&&(fe.position.x=D.x+De*.035,fe.rotation.z=De*.035),Ce&&["seat","empty"].includes(j.type)){const _t=Math.floor(j.phaseTime/4.8);st>=1.7&&_t!==j.lastClink&&(j.lastClink=_t,s.china())}}ae==="ending-title"&&o(ae)}function Ns(C,ae=.97,Ce=4){return t.getWorldDirection(Ve),be.copy(C).sub(t.position),be.length()<Ce&&Ve.dot(be.normalize())>ae}function Gu(){!R||!k||Ns(Ze([2.9,1,.47]),.5,20)||(N.forEach(C=>{C.visible=!0}),R=!1,s.effect?.("chair",.7),o("coat-appeared"))}function il(){r.powerOut||Cu(r)<mo.length||!r.discovered.includes("mirror")||(r.powerOut=!0,s.effect?.("breaker",.5),o("blackout"))}function np(){if(!r.wallOpen&&!j||M-Me<.15||t.position.distanceTo(Ze([-5.7,1.8,0]))>4&&!j)return;Me=M;const C=[];e.traverse(st=>{(st.isReflector||st===wt||st===re)&&st.visible&&(C.push(st),st.visible=!1)});const ae=ht.visible;ht.visible=!0;const Ce=n.getRenderTarget();try{n.setRenderTarget(Lt),n.render(e,tt)}finally{n.setRenderTarget(Ce),ht.visible=ae,C.forEach(st=>{st.visible=!0})}}const Kn={targets:x,root:f,bowl:fe,mirrorPresence:vn,async prewarmEndings(){const C=f.visible;f.visible=!0,Vr.root.visible=!0;try{await n.compileAsync(e,t)}finally{Vr.root.visible=!1,f.visible=C}},selfPortrait(){return Sd(c,!0)},houseBreath(C,ae){j||(r.powerOut&&(dr.intensity*=1-C*.075,Q.intensity*=1-C*.11),Br.color.setHex(9217685).multiplyScalar(1-C*.13),ae?(xt.scale.setScalar(1+C*.018),bn.mesh.scale.y=1+C*.1):(xt.scale.setScalar(1),bn.mesh.scale.y=1))},phonePhoto(){return Sd(c)},phoneRecording(){return En.render(Si)},recoverPhone(){!rt.visible||wn<.8||(rt.visible=!1,s.effect("cloth",.45),o("phone-recovered"))},get playableEnding(){return j?.type==="two"&&j.phase==="hotel"},get endingState(){return j},morning:C=>Vr.interact(C),inspectFamily(){const C=r.familyEcho;o("ending-document",{kicker:"客厅 · 全家福",title:C?"照片里原来有四个人吗？":"我和妈妈",body:'<div class="family-photo-detail '+(C?"has-echo":"")+'">'+(C&&u?'<img class="echo-face" alt="第四个人的脸" src="'+u+'">':"")+"</div><p>"+(C?"背面还是妈妈写的日期。最右边的人，像是一直站在那里。":"那年拍完照片，妈妈把旁边的椅子搬走了。")+"</p>"})},search:He,get locked(){return!!(A?.lock||He.busy||r.ritual==="ready"||j&&!Kn.playableEnding)},get busy(){return!!(A||He.busy)},available(C){return j?Kn.playableEnding&&C.startsWith("morning_"):C.startsWith("morning_")||!He.available(C)?!1:C==="mirror"?b===null&&!r.letter:C==="door_502"?!0:C==="door_501"?!r.neighborMet:C==="wall_seal"?!r.wallOpen:C==="peephole"?r.discovered.includes("table")&&t.position.z<4.2&&!O:C==="bowl_third"?["table","inverted","clean","served"].includes(r.bowl):C==="dining_table"?!r.discovered.includes("table")||r.bowl.startsWith("held"):C==="take_scraper"?!r.tools.includes("scraper"):C==="take_alcohol"?!r.tools.includes("alcohol"):C==="take_medicine"?!r.tools.includes("medicine"):C==="kitchen_sink"?r.bowl==="held-dirty"&&r.letter:C==="serve_soup"?r.bowl.startsWith("held"):C==="deny_third"?r.neighborMet&&!r.deniedThird:C==="dumplings"?r.neighborMet&&["none","kept"].includes(r.dumplings):C==="discard_dumplings"?r.dumplings==="kept":C==="wall_letter"?r.wallOpen&&!r.letter:C==="draw_seal"?r.letter&&!r.sealDrawn&&["inverted","held-inverted"].includes(r.bowl):C==="wall_mirror"?r.letter&&r.sealDrawn&&r.bowl==="held-inverted"&&r.ritual==="idle":C==="break_wall"?r.letter&&r.ritual==="idle"&&!r.bowl.startsWith("held"):C==="answer_wall"?r.discovered.includes("rules")&&!r.wallOpen&&r.coughReplies<3:C==="call_father"?r.letter&&!r.calledFather&&!r.sealDrawn:C==="bath_switch"?B&&!V:C==="recover_phone"?rt.visible&&wn>=.8:!0},setArtMode(C){L=!!C,f.visible=!L,He.setArtMode(L),he&&(he.visible=L),ce&&(ce.visible=L),N.forEach(ae=>{ae.visible=L}),Ue.forEach(ae=>{ae.visible=L,ae.material.opacity=L?1:0})},doorOpened(){k=!0,Gu()},table(){r.bowl.startsWith("held")?Pe("put-bowl")&&ye(D.clone().add(Ze([0,r.bowl==="inverted"?.093:0,0])),r.bowl==="inverted"):(It(r,"table"),Wt.visible=!r.familyEcho,s.china(),ne=Math.max(ne,.065),o("changed"))},mirror(){b===null&&(b=M,Ue.forEach(C=>{C.visible=!0}),s.effect?.("breath",4.8))},peephole(){if(A||O)return;const C=Se();_n.visible=!0,s.effect?.("breath",3.8),o("peephole-enter"),t.fov=91,t.updateProjectionMatrix(),I(4,ae=>{ge(Ze([.05,1.66,4.31]),Ze([.05,1.58,6.45]))},()=>{_n.visible=!1,J(C),o("peephole-exit"),O=!0,R=!0,k=!1,It(r,"peephole"),o("changed")})},takeTool(C){const ae=C.replace("take_","");if(!Pe("tool",ae))return;const Ce={scraper:$,alcohol:ue,medicine:F}[ae],st=Ce.position.clone();s.effect?.("cloth",.35),I(.65,De=>{Ce.position.y=st.y+Math.sin(De*Math.PI)*.12,Ce.scale.setScalar(1-en(De)*.85)},()=>{Ce.visible=!1})},uncoverBook(C){if(r.discovered.includes("household"))return C();const ae=Ie.position.clone();I(.85,Ce=>{Ie.position.x=ae.x+en(Ce)*.42,Ie.rotation.z=Ce*-.13},C)},neighbor(){r.neighborMet||A||(s.knock(),we.visible=!0,I(2.2,C=>{q.rotation.y=en(C)*-.13},()=>{Pe("meet-neighbor"),l();const C=()=>{!j&&Ke===null&&(Ke=0)};s.playVoice("wang-neighbor",{onComplete:C,onCancel:C})}))},denyThird(){Pe("deny-third")&&s.playVoice("wan-deny")},dumplings(){if(r.dumplings==="none"){if(!Pe("take-dumplings"))return;const C=Ae.position.clone(),ae=Ze([2.3,1.385,3.64]);I(1.2,Ce=>{Ae.position.lerpVectors(C,ae,en(Ce)),Ae.position.y+=Math.sin(Ce*Math.PI)*.25}),Ae.userData.prompt="吃一只饺子"}else Pe("eat-dumplings")&&(s.effect?.("cloth",.4),Ye.children.slice(0,3).forEach(C=>{C.visible=!1}),o("ate-dumplings"))},discard(){if(!Pe("discard-dumplings"))return;const C=Ae.position.clone();I(2.1,ae=>{Ae.position.lerpVectors(C,oe.clone().add(Ze([-.16,.3,0])),en(Math.min(1,ae*2))),Ae.rotation.z=Math.max(0,ae-.45)*3,ae>.7&&(Ye.visible=!1)},()=>{Ae.visible=!1,s.effect?.("water",.8)})},takeBowl(){if(r.bowl==="clean"){if(!Pe("invert-bowl"))return;const Ce=fe.rotation.z;I(1.2,st=>{fe.rotation.z=Ce+en(st)*Math.PI,fe.position.y=Be.y+en(st)*.093+Math.sin(st*Math.PI)*.1},()=>s.china());return}if(!Pe("take-bowl"))return;const C=fe.getWorldPosition(new P);i.attach(fe);const ae=t.localToWorld(Ze([.17,-.28,-.54]));I(.8,Ce=>{fe.position.lerpVectors(C,ae,en(Ce))},()=>{ze(),s.china()})},wash(){if(!Pe("wash-start"))return;const C=Se(),ae=fe.getWorldPosition(new P);ye(ae),Z=!0,de.visible=!0,s.setWater?.(!0),I(6.5,Ce=>{ge(Ze([7.08,1.6,-1.05]),Ze([7.46,1.02,-2.3])),fe.position.lerpVectors(ae,oe,en(Math.min(1,Ce*4))),Ce>.2&&(fe.rotation.x=Math.sin(Ce*28)*.27,fe.position.y=.976+Math.sin(Ce*20)*.018),S&&(S.visible=Ce<.55),Ce>.22&&!U&&(U=!0,s.playSequence(["wan-echo","mother-wall-answer"],{gap:1.1}),ht.visible=!0,ht.userData.collapse(0),N.forEach(st=>{st.visible=!1}),It(r,"wash-echo"),It(r,"phone-missing"),o("wash-echo"))},()=>{Z=!1,de.visible=!1,s.setWater?.(!1),Pe("wash-finish"),ye(Be),fe.userData.prompt="把洗净的碗倒扣",J(C)})},serve(){if(!Pe("serve"))return;const C=fe.getWorldPosition(new P);ye(C),S&&(S.visible=!0),I(2.8,ae=>{fe.position.lerpVectors(C,D,en(ae)),fe.position.y+=Math.sin(ae*Math.PI)*.22},()=>{ne=.36,ht.visible=!0,ht.userData.collapse(0),N.forEach(ae=>{ae.visible=!1}),s.china(),o("admitted")})},openWall(){if(!Pe("open-wall"))return;$e.visible=!0,In.visible=!0,s.effect?.("paper",5.2);const C=Se();I(5.2,ae=>{ge(Ze([-4.43,1.64,.45]),Ze([-5.72,1.58,0])),qe.scale.y=Math.max(.008,1-en(ae)),qe.position.y=nt.y+en(ae)*1.18,In.position.set(-5.58,nt.y-1.18+en(ae)*2.36,0)},()=>{qe.visible=!1,In.visible=!1,J(C),Yt.visible=!r.familyEcho,Wt.visible=!1,o("wall-opened")})},drawSeal(){if(!Pe("draw-seal"))return;const C=Se(),ae=F.clone();ae.name="EVENT_SEAL_BOTTLE",f.add(ae),ae.visible=!0,ae.scale.setScalar(1),delete ae.userData.interaction,I(4.5,Ce=>{ge(Ze([-4.38,1.63,.32]),Ze([-5.68,1.6,0]));const st=Math.min(Hr.length-1,Math.floor(Ce*Hr.length));Hr.forEach((Xt,rl)=>{Xt.visible=rl<=st});const[De,_t]=tl[st][Math.min(1,tl[st].length-1)];ae.position.set(-5.48,_t-.12,De),ae.rotation.z=-.7},()=>{ae.removeFromParent(),J(C),s.effect?.("cloth",.6)})},ritual(){if(!Pe("ritual-start"))return;const C=Se();Kn.ritualView=C,ge(Ze([-4.85,1.62,0]),Ze([-5.64,1.87,0])),Fn.visible=!0,s.effect?.("breath",4.5),o("hint","碗被镜面吸住了。抓牢，别给它。"),o("ritual-ready")},holdRitual(){return Pe("hold")},releaseRitual(C=!1){if(C){Pe("cancel-hold");return}Pe("release")&&Kn.finishRitual(!1)},finishRitual(C){o("ritual-finished"),Fn.visible=!0,C||ye(Ze([-5.37,1.77,0]),!0);const ae=fe.getWorldPosition(new P);I(3,Ce=>{Fn.scale.setScalar(1+Math.sin(Ce*Math.PI)*1.8),Fn.material.opacity=.6*(1-Ce),C?(qe.visible=!0,qe.scale.y=Math.max(.01,en(Ce)),qe.position.y=nt.y+(1-en(Ce))*1.18):(fe.position.lerpVectors(ae,Ze([-5.82,1.8,0]),en(Ce)),fe.scale.setScalar(1-Ce*.8))},()=>{Fn.visible=!1,C&&($e.visible=!1),re.visible=!1,fe.visible=!1,Kn.ritualView&&J(Kn.ritualView),o(C&&!r.admitted?"sealed":"admitted")})},answerWall(){Pe("reply-cough")&&(s.playVoice("wan-answer"),r.coughReplies===3&&(ne=.43,s.effect?.("chair",1.6)))},callFather(){Pe("call-father")&&(s.playVoice("wan-father"),ne=.43,o("admitted"))},breakWall(){if(!Pe("break-wall"))return;const C=[];$e.traverse(ae=>{/^Wall.brick./.test(ae.name)&&C.push({object:ae,position:ae.position.clone()})}),s.effect?.("breaker",2),I(3,ae=>{C.forEach(({object:Ce,position:st},De)=>{Ce.position.copy(st),Ce.position.x+=ae*(.3+De%4*.12),Ce.position.y-=ae*ae*(.5+De%5*.14),Ce.rotation.z=ae*(De%3-1)})},()=>o("ending","wall"))},bathSwitch(){V=!0,vn.visible=!1,W=null,s.roomSource?.("bath-presence",[3.6,1.4,-4.78],0,170),r.mirrorEncounter="escaped",s.effect?.("breaker",.25),o("bath-light-off")},checkpointClues(){il()},setTapePlaying(C){je=C},uncoverTape(C){if(r.discovered.includes("tape-found"))return C();const ae=Xe.position.clone(),Ce=Se();I(1.8,st=>{Xe.position.lerpVectors(ae,K,en(st)),ge(Ce.position,Xe.position)},()=>{It(r,"tape-found"),Xe.userData.prompt="播放九岁生日磁带",J(Ce),C()})},restoreCheckpoint(){A=null,Ke=null,r.holding=!1,r.mirrorGaze=0,He.restore(),r.discovered.includes("tape")&&Xe.position.copy(K);for(const[C,ae]of Object.entries({scraper:$,alcohol:ue,medicine:F}))ae.visible=!r.tools.includes(C);v=r.discovered.includes("mirror"),b=v?-10:null,Ue.forEach(C=>{C.visible=v,C.material.opacity=v?1:0}),qe.visible=!r.wallOpen||r.ritualComplete,qe.scale.y=1,qe.position.copy(nt),$e.visible=r.wallOpen&&!r.ritualComplete,Yt.visible=r.wallOpen&&!r.familyEcho,Hr.forEach(C=>{C.visible=r.sealDrawn&&!r.ritualComplete}),ye(D),fe.visible=!r.ritualComplete&&r.ritual!=="given",S&&(S.visible=r.bowl==="served"||r.bowl==="table"),ht.visible=r.admitted||r.discovered.includes("wash-echo")&&!r.discovered.includes("phone-dropped"),rt.visible=r.discovered.includes("phone-dropped")&&!r.discovered.includes("phone-recovered"),wn=rt.visible?.8:null,rt.position.y=.594,rt.rotation.y=.25,O=r.discovered.includes("peephole"),N.forEach(C=>{C.visible=O}),q.rotation.y=0,we.visible=!1,Ae.visible=r.neighborMet&&["none","kept"].includes(r.dumplings),r.dumplings==="none"&&(Ae.position.set(.52,.025,7.6),Ae.userData.prompt="拿起门口的热饺子"),r.dumplings==="kept"&&(Ae.position.set(2.3,1.385,3.64),Ae.userData.prompt="吃一只饺子"),B=!0,V=!0,vn.visible=!1,W=null,r.mirrorEncounter="escaped",ge(Ze([.05,1.65,2.5]),Ze([.05,1.55,4.2])),l()},prepareEnding(C){j=VM(C),A=null,Ke=null,re.visible=!1,fe.visible=!0,ye(D),fe.scale.setScalar(1),Vr.hide(),t.fov=67,t.updateProjectionMatrix(),vn.visible=!1,_n.visible=!1,W=null,Fn.visible=!1,de.visible=!1,Z=!1,s.setWater?.(!1),ht.visible=!1,rt.visible=!1,N.forEach(ae=>{ae.visible=!1}),Y.mesh.visible=bn.mesh.visible=We.mesh.visible=!1,Ne.forEach(ae=>{ae.visible=!1}),Eo.visible=!1;for(const{object:ae,position:Ce,rotation:st}of Hu)ae.position.copy(Ce),ae.rotation.copy(st);for(const ae of Vu)ae.visible=C!=="empty";j.lastClink=-1,pr.visible=C==="two",qe.visible=!0,qe.scale.y=1,qe.position.copy(nt),$e.visible=!1,Br.color.setHex(528140),Q.intensity=0,Wt.visible=!1,C==="seat"&&(ne=.38,H&&G&&(H.position.x=G.x+.38),S&&(S.visible=!0)),C==="two"?(fe.visible=!1,Vr.show()):C==="seat"&&ge(Ze([3.18,1.15,.47]),Ze([1.3,.92,.12])),s.finishNight?.(C),C==="seat"&&(s.knock(),To("wang-breakfast",{delay:1.2})),C==="empty"&&To("mother-empty",{delay:1}),C==="wall"&&To("mother-full",{delay:1})},leaveMorning(){j?.type==="two"&&j.phase==="table"&&ep()},update(C,ae,Ce=!0){if(L||(nl[0].rotation.z=-(ae%720)/720*Math.PI*2,nl[1].rotation.z=-(ae%60)/60*Math.PI*2,!Ce))return;if(j){tp(C);return}if(He.update(C),M+=C,Y.update(M),bn.update(M),We.update(M),Ke!==null&&Ke<1&&(Ke=Math.min(1,Ke+C/1.4),q.rotation.y=-.13*(1-en(Ke)),l(),Ke===1&&(we.visible=!1,Ae.visible=r.dumplings==="none",s.china(),o("hint","门合上了。门口多了一碗热饺子。"),il())),je)for(const De of le)De.rotation.y+=C*2.6;if(Zf.visible=r.letter&&r.ritual==="idle",Jf.visible=!r.wallOpen,Y.mesh.visible=!!S?.visible&&!["washing","clean","inverted","held-inverted"].includes(r.bowl),fe.userData.prompt=r.bowl==="clean"?"把洗净的碗倒扣":r.bowl==="inverted"?"拿起倒扣的碗":"拿起第三副碗",A){const De=A;if(De.time+=C,De.update(Math.min(1,De.time/De.duration)),De.time>=De.duration&&A===De){A=null,De.complete();for(const{object:_t}of Fr)_t.shadow&&(_t.shadow.needsUpdate=!0);o("changed")}}if(b!==null&&!v){const De=M-b;Ue.forEach((_t,Xt)=>{_t.material.opacity=kt.smoothstep(De,Xt*.9+.25,Xt*.9+1.6)}),De>5.2&&(v=!0,It(r,"mirror"),o("mirror-complete"),il())}b===null&&r.discovered.includes("note")&&r.discovered.includes("table")&&Ns(Ze([3.83,1.9,-6.87]),.86,2.7)&&Kn.mirror();const st=kt.damp(ve,ne,2,C);if(H&&Math.abs(st-ve)>1e-4&&(ve=st,H.position.x=G.x+ve,l()),Gu(),!j&&ht.visible&&OM(r,t.position,ht.position,{x:-1,z:0},Ns(ht.position.clone().add(Ze([0,1.2,0])),.72,3.5))&&(It(r,"phone-dropped"),rt.visible=!0,wn=0,rt.position.y=1.05,s.effect("cloth",.55),o("changed")),wn!==null&&wn<.8){wn+=C;const De=Math.min(1,wn/.8);rt.position.y=.594+(1-De*De)*.456,rt.rotation.y=De*.25,ht.userData.collapse(en(De)),De===1&&s.effect("chair",.12)}if(r.discovered.includes("rules")&&!r.wallOpen&&M>se&&!A&&(se=M+25+Math.sin(M)*6,s.effect?.("cough",1.1,-.6)),z=kt.damp(z,r.powerOut?1:0,2.4,C),r.powerOut){for(const{object:De,base:_t}of Fr)De.intensity=_t*(1-z);dr.intensity=2.7*z,Q.intensity=1.1}for(const{object:De,base:_t}of Is){const Xt=/Bathroom/.test(De.name);De.material.emissiveIntensity=_t*(Xt&&B?V?0:1:1-z)}if(B&&Hn&&(Hn.intensity=V?0:hr),!j&&r.letter&&!B&&t.position.x>2.6&&t.position.x<5.3&&t.position.z<-3.4&&(B=!0,vn.visible=!0,r.mirrorEncounter="active",s.playVoice("father-sit")),B&&!V&&!W&&r.mirrorEncounter==="active"&&(vn.userData.opacity(.63+Math.sin(M*.85)*.065),PM(r,C,Ns(So,.997,6))&&o("admitted"),Ns(Or,.95,4)&&(W=BM(t.position),vn.visible=!1,r.mirrorEncounter="chase",s.effect?.("chair",1.1),o("hint","身后空着。脚步却从镜子里追了出来。")),t.position.z>-3.1&&(r.mirrorEncounter="escaped",vn.visible=!1)),W){const De=kM(W,C,t.position,{lightOff:V});De==="step"&&(s.effect?.("footstep",.42),s.effect?.("breaker",.18)),Hn&&(Hn.intensity=W.time%2.4<.35?hr*.08:hr),s.roomSource?.("bath-presence",[W.x,1.4,W.z],.014+(W.time%2.4<.4?.035:0),170,2),(De==="escaped"||De==="caught")&&(W=null,vn.visible=!1,s.roomSource?.("bath-presence",[3.6,1.4,-4.78],0,170),r.mirrorEncounter=De==="escaped"?"escaped":"caught",De==="caught"&&o("ending","seat"))}if(B&&Hn)for(const{object:De,base:_t}of Is)/Bathroom/.test(De.name)&&(De.material.emissiveIntensity=_t*kt.clamp(Hn.intensity/hr,0,1));for(let De=0;De<Ne.length;De++){const _t=Ne[De];if(_t.visible=Z,Z){const Xt=(M*1.7+De*.137)%1;_t.position.set(7.45+Math.sin(De*2.4)*Xt*.1,.99+Math.sin(Xt*Math.PI)*.1,-2.31+Math.cos(De*2.4)*Xt*.08)}}if(de.scale.x=de.scale.z=1+Math.sin(M*39)*.15,CM(r,C)&&Kn.finishRitual(!0),r.ritual==="ready"){const De=r.holdSeconds/qc;Fn.scale.setScalar(1+M*1.2%1*1.8),Fn.material.opacity=.5*(1-M*1.2%1),re.position.set(.17+Math.sin(M*35)*.008,-.23,-.54-De*.13),o("ritual-progress",De)}if(Math.floor(M*8)!==Kn.tvFrame){if(Kn.tvFrame=Math.floor(M*8),r.powerOut){const De=E.createImageData(128,96);for(let _t=0;_t<De.data.length;_t+=4){const Xt=Math.random()*100+50;De.data[_t]=Xt*.85,De.data[_t+1]=Xt,De.data[_t+2]=Xt*.92,De.data[_t+3]=255}E.putImageData(De,0,0)}else{E.fillStyle="#131714",E.fillRect(0,0,128,96),E.fillStyle="#754e31",E.fillRect(8,10,112,72),E.fillStyle="#273b3e",E.fillRect(17,20,94,62);for(let De=0;De<7;De++)E.fillStyle=De%2?"#bba873":"#8e3030",E.beginPath(),E.ellipse(23+De*14,58+Math.sin(M+De)*2,5,17,Math.sin(M)*.08,0,7),E.fill();E.fillStyle="#a29965",E.font="9px serif",E.fillText("欢 度 春 节",36,17)}for(let De=0;De<96;De+=3)E.fillStyle="#00000035",E.fillRect(0,De,128,1);X.needsUpdate=!0}np()},rehearsal(C){for(const ae of["entered","note","table"])It(r,ae);if(!C.startsWith("ending-")){if(C==="family"){ge(Ze([-3,1.65,2.6]),Ze([-3,1.85,4.05]));return}if(C==="mirror"){ge(Ze([3.83,1.65,-5]),Ze([3.83,1.9,-6.87]));return}if(C==="peephole"){ge(Ze([.05,1.65,3.3]),Ze([.05,1.65,4.2]));return}if(C==="neighbor"){ge(Ze([.1,1.65,6.4]),Ze([.1,1.6,7.91]));return}if(C==="search"){ge(Ze([-4.02,1.65,1.02]),Ze([-4.02,.83,2.17]));return}if(C==="rules"){ge(Ze([9.1,1.65,.05]),Ze([9.1,1.44,-1.278]));return}if(C==="bedroom"){ge(Ze([-.4,1.65,-4.6]),Ze([-.1,.88,-6.2]));return}if(C==="tape"){ge(Ze([-4.3,1.65,-3.8]),Ze([-4.5,.16,-4.91]));return}for(const ae of["mirror","rules","tape","household","messages","neighbor","balcony"])It(r,ae);if(v=!0,b=-10,Ue.forEach(ae=>{ae.visible=!0,ae.material.opacity=1}),r.messages=[0,1,2],r.tools=["scraper","alcohol","medicine"],r.powerOut=!0,r.neighborMet=!0,r.bagOpened=r.drawerKey=r.drawerUnlocked=!0,r.rulesSides=["front","back"],He.restore(),C==="outage"){r.tools=[],ge(Ze([7.8,1.65,-.9]),Ze([8.6,1.25,-2.4])),o("blackout");return}if(r.wallLocated=r.pipeHeard=!0,C==="hidden"){r.deniedThird=!0;return}if(C==="wall"){ge(Ze([-4.2,1.65,.4]),Ze([-5.7,1.6,0]));return}if(r.wallOpen=!0,r.letter=!0,qe.visible=!1,$e.visible=!0,Yt.visible=!r.familyEcho,C==="bath"){ge(Ze([3.83,1.65,-5.7]),Ze([3.83,1.85,-6.87]));return}if(r.bowlTouched=!0,C==="wash"){r.bowl="held-dirty",ze(),ge(Ze([7.44,1.65,-1]),Ze([7.45,1.1,-2.31]));return}r.bowl="held-inverted",S&&(S.visible=!1),ze(),ge(Ze([-4.35,1.65,.3]),Ze([-5.7,1.55,0])),C==="ritual"&&(r.sealDrawn=!0,Hr.forEach(ae=>{ae.visible=!0}))}}};return Kn}const Na=1.3,wd=.45,YM=3;function KM(){return{elapsed:0,extensions:0,pendingExtensions:0,falseExits:[],gaze:{seconds:0,triggered:!1,target:null},backSeconds:0,lookedBack:!1,bolt:"latched",boltSeconds:0}}function jM(i,e,t,n=!0){return!n||!Number.isFinite(e)||e<=0?!1:t?(i.target!==t&&(i.seconds=0,i.triggered=!1,i.target=t),i.seconds=Math.min(Na,i.seconds+e),i.seconds<Na||i.triggered?!1:(i.triggered=!0,!0)):(i.seconds=0,i.triggered=!1,i.target=null,!1)}function Pf(i){return i.extensions+i.pendingExtensions>=YM?!1:(i.pendingExtensions++,!0)}function $M(i,e){return e||i.pendingExtensions===0?!1:(i.pendingExtensions--,i.extensions++,!0)}function ZM(i,e){return![0,1].includes(e)||i.falseExits.includes(e)?!1:(i.falseExits.push(e),Pf(i),!0)}function JM(i,e,{active:t=!0,inCorridor:n=!1,photo:r=null,lookingBack:s=!1}={}){if(!t||!Number.isFinite(e)||e<=0)return[];i.elapsed+=e;const o=[],a=i.gaze.seconds>=wd&&i.gaze.target===r;return jM(i.gaze,e,n?r:null)&&Pf(i)?o.push("counted"):!a&&i.gaze.seconds>=wd&&o.push("photo-warning"),i.backSeconds=n&&s?i.backSeconds+e:0,!i.lookedBack&&i.backSeconds>=1&&(i.lookedBack=!0,o.push("looked-back")),i.bolt==="moving"&&(i.boltSeconds=Math.min(1,i.boltSeconds+e),i.boltSeconds>=1&&(i.bolt="open",o.push("unbolted"))),o}function QM(i){return i.x<-12.57&&i.z>3.25&&i.z<9.15?-2.72:i.x>=-6.12||i.z<=5||i.z>=7.4?0:-Math.min(16,Math.floor((-6.12-i.x)/.3)+1)*.17}function ey({world:i,camera:e,story:t,sound:n,changed:r,emit:s,colliders:o=()=>[]}){const a=new et;a.name="EVENT_ESCAPE_ROUTE",i.add(a);const l=$=>i.getObjectByName($)||i.getObjectByName(St.sanitizeNodeName($)),c=[];i.traverse($=>{/^(Stair|Handrail|Service.door|LIGHT_STAIR)/.test($.name)&&!$.name.startsWith("EVENT_")&&(c.push($),$.userData.story_dynamic=!0,$.visible=!1)});const u=$=>{let ue;return i.traverse(pe=>{!ue&&pe.isMesh&&$.test(pe.name)&&!Array.isArray(pe.material)&&(ue=pe.material)}),ue?go(ue):new ct({color:5464409,roughness:.95})},h=u(/Hall.west.upper/),d=u(/Hall.floor/),f=new ct({color:3361857,roughness:.92}),g=new ct({color:3555127,roughness:.71,metalness:.4}),_=new ct({color:922900,roughness:.96}),m=new ct({color:12899765,emissive:7839369,emissiveIntensity:.2}),p=new Tt({color:8827802}),y=[];function w($,ue,pe){const xe=new Ut;return xe.intensity=ue,xe.distance=pe,xe.userData.lightColor=$,xe.userData.lightPosition=new P,y.push(xe),xe}const x=($,ue=[],pe=!1)=>new ct({map:Ln((xe,F,he)=>{xe.fillStyle=pe?"#393326":"#203c34",xe.fillRect(0,0,F,he),xe.strokeStyle="#849886",xe.lineWidth=5,xe.strokeRect(12,12,F-24,he-24),xe.fillStyle="#d5dac3",xe.textAlign="center",xe.font='52px "Songti SC",serif',xe.fillText($,F/2,78),xe.font='29px "Songti SC",serif',ue.forEach((ce,Te)=>xe.fillText(ce,F/2,143+Te*49))},512,ue.length?320:128),roughness:.9,emissive:6454630,emissiveIntensity:.15}),T=($,ue,pe,xe,F,he,ce=0,Te=!1)=>{const me=Dt($,ue,...F,he,x(pe,xe,Te));return me.rotation.y=ce,me},M=($,ue,pe,xe)=>{const F=ee(a,$,ue,pe,xe);return F.userData.collider=!0,F},A=l("INT_BUILDING_EXIT");delete A.userData.interaction;const L=va(i,"STAIR_ENTRY",[A],new P(-5.92,0,7));L.userData.interaction="stair_entry",L.userData.prompt="推开楼梯间的门",L.userData.hintAnchor=[0,1.4,-.82];let b=0,v=0,R=0,O=0,k=0,z=null,Z=!1,U=!1;const B=KM(),V=-6.12,W=-2.72,j=6.18;for(let $=0;$<16;$++){const ue=V-.15-$*.3,pe=-($+1)*.17;ee(a,`Fourth floor step ${$}`,[.3,.17,1.96],[ue,pe-.085,j],d),ee(a,`Worn step edge ${$}`,[.025,.015,1.96],[ue+.14,pe+.006,j],f)}ee(a,"Fourth floor landing",[1.66,.12,1.96],[-11.75,W-.06,j],d);for(const $ of[5.11,7.25]){$===5.11?M("Enclosed descending stair wall",[6.5,5.9,.16],[-9.35,.22,$],h):(M("Descending wall above 4F opening",[6.5,3.04,.16],[-9.35,1.65,$],h),M("Descending wall east of opening",[4.84,2.9,.16],[-8.52,-1.3,$],h),M("Descending wall west of opening",[.4,2.9,.16],[-12.4,-1.3,$],h));const ue=[[-6.08,1.04,$===5.11?5.24:7.12],[-10.97,-1.68,$===5.11?5.24:7.12]];$===5.11&&ue.push([-12.1,-1.68,5.24]),Un(a,"Descending stair rail",ue,.027,g)}ee(a,"Stair ceiling",[6.7,.14,2.3],[-9.37,3.04,j],h);const se=w(9547679,3.3,8);se.position.set(-8.4,1.6,j),a.add(se),ee(a,"Stair old fluorescent",[.68,.035,.07],[-8.4,1.78,j],m);const Me=new et;Me.name="EVENT_FOURTH_FLOOR_FIRE_DOOR",Me.position.set(-12.5,W,7),a.add(Me);const je=ee(Me,"Extra fire door leaf",[.09,2.45,1.64],[0,1.225,-.82],g);je.userData.collider=!0,Me.userData.interaction="fire_door",Me.userData.prompt="推开多出来的防火门",Me.userData.hintAnchor=[0,1.4,-.82],ee(Me,"Old fire door push bar",[.13,.045,1.07],[.08,1.03,-.82],g),M("Fire door lintel",[.2,.58,2.14],[-12.5,W+2.74,j],h);for(const $ of[5.29,7.07])M("Fire door steel frame",[.2,2.49,.15],[-12.5,W+1.245,$],g);const Ke=T(Me,"EVENT_ESCAPE_NOTE","四楼 · 防火门",["别数照片里的人","认准墙脚绿线","听门外雨声"],[.74,.48],[.052,1.73,-.82],Math.PI/2);Ke.userData.interaction="escape_note",Ke.userData.prompt="读防火门上的字",T(a,"Fourth floor marker","4 楼",[],[.66,.22],[-11.6,W+2.25,5.205]);const Xe=xa(a,{radius:.035,height:.65,count:12});Xe.mesh.position.set(-12.42,W+.06,6.3);const K=w(13080930,.35,2.4);K.position.set(-12.35,W+.3,6.3),a.add(K);const le=[],be=[],Ve=[],Se=[],J=new po().load(new URL("./story/corridor-photos.png",document.baseURI).href);J.colorSpace=Nt;const ge=Array.from({length:6},($,ue)=>{const pe=J.clone();return pe.repeat.set(1/3,.5),pe.offset.set(ue%3/3,ue<3?.5:0),new ct({map:pe,color:12105372,roughness:.92,emissiveMap:pe,emissive:7502182,emissiveIntensity:.16})});function I($,ue,pe){const xe=pe>j?1:-1,F=pe+xe*.82;ee(a,"False exit alcove floor",[1.8,.12,1.8],[ue,W-.06,F],d),ee(a,"False exit alcove ceiling",[1.8,.12,1.8],[ue,W+3.05,F],h);for(const Ne of[ue-.9,ue+.9])M("False exit alcove side",[.16,3.04,1.8],[Ne,W+1.52,F],h);M("False exit sealed wall",[1.96,3.04,.12],[ue,W+1.52,pe+xe*1.65],h);const he=new et;he.name=`EVENT_FALSE_EXIT_${$}`,he.position.set(ue,W,pe+xe*1.26),he.rotation.y=xe===1?Math.PI:0,a.add(he);const ce=ee(he,"False exit unmoving leaf",[1.58,2.45,.08],[0,1.225,0],g);ce.userData.collider=!0,he.userData.interaction=`false_exit_${$}`,he.userData.prompt="推开标着安全出口的门",he.userData.hintAnchor=[0,1.4,.06],ee(he,"False exit push bar",[1.05,.05,.14],[0,1.04,.1],g);const Te=T(he,"False exit misleading sign","安全出口",[],[1.03,.25],[0,1.86,.047],0,!0),me=T(he,"False exit returning number","502",["家里已经三口人了"],[1.03,.64],[0,1.63,.05],0,!0);me.visible=!1;const de=w(13214831,.9,3);de.position.set(ue,W+2.3,pe+xe*.6),a.add(de),Se.push({door:he,plate:Te,reveal:me,lamp:de,side:xe,originZ:he.position.z,amount:0})}let Pe=-12.57;function N(){const $=Pe,ue=$-6,pe=($+ue)/2,xe=k++;ee(a,"Impossible corridor floor",[6,.12,1.96],[pe,W-.06,j],d),ee(a,"Impossible corridor ceiling",[6,.12,2.15],[pe,W+3.05,j],h);const F=xe%2?5.63:6.73,he=$-4.65;M(`Corridor staggered partition ${xe}`,[.16,2.78,1.08],[$-3.3,W+1.39,xe%2?6.64:5.72],h),Un(a,`Corridor floor guide ${xe}`,[[$-.08,W+.025,j],[$-2.2,W+.025,F],[$-4.15,W+.025,F],[ue+.08,W+.025,j]],.018,p);for(const Te of[5.11,7.25]){const me=xe<2&&Te===(xe===0?7.25:5.11),de=me?[[ue,he-.8],[he+.8,$]]:[[ue,$]];for(const[Ne,Qe]of de)M("Impossible corridor wall",[Qe-Ne,3.04,.16],[(Ne+Qe)/2,W+1.52,Te],h),ee(a,"Corridor green dado",[Qe-Ne,1.2,.025],[(Ne+Qe)/2,W+.6,Te===5.11?5.2:7.16],f);me&&I(xe,he,Te);for(let Ne=0;Ne<3;Ne++){const Qe=new et;Qe.name=`EVENT_COUNTED_PHOTO_${xe}_${Ne}_${Te}`,Qe.position.set($-.85-Ne*.8,W+1.66,Te===5.11?5.22:7.14),Qe.rotation.y=Te===5.11?0:Math.PI,a.add(Qe),ee(Qe,"Family frame",[.68,.52,.045],[0,0,0],g),be.push(Dt(Qe,"Yellowed family photograph",.59,.43,[0,0,.027],ge[Math.min(5,xe*3+Ne)])),le.push(Qe)}}const ce=w(8952451,2.4,7);ce.position.set(pe,W+2.65,j),a.add(ce),Ve.push(ce),ee(a,"Corridor slow lamp",[.44,.035,.09],[pe,W+2.75,j],m),Pe=ue}for(let $=0;$<3;$++)N();const H=Array.from({length:3},()=>{const $=new nn(8952451,0,7,2);return a.add($),$}),G=new et;G.name="EVENT_REAL_BUILDING_EXIT",a.add(G);const ve=ee(G,"Ground exit door leaf",[.11,2.6,1.94],[0,1.3,0],g);ve.userData.collider=!0,G.userData.interaction="building_exit",G.userData.prompt="推开单元门",G.userData.hintAnchor=[0,1.4,0],T(G,"Real exit sign","单元门",["门外传来雨声"],[1.06,.5],[.063,1.98,0],Math.PI/2),ee(G,"Real exit cold light seam",[.13,.035,1.82],[0,.045,0],p);const ne=ee(G,"EVENT_ESCAPE_BOLT",[.09,.075,.92],[.13,1.34,0],g);ne.userData.interaction="escape_bolt",ne.userData.prompt="拉开单元门的横闩";for(const $ of[-.45,.45])ee(G,"Exit bolt keeper",[.15,.15,.08],[.1,1.34,$],g);ee(ne,"Exit bolt grip",[.14,.22,.08],[.07,0,.15],m);const Ue=w(11256496,1.2,3);Ue.position.set(.2,2.3,0),G.add(Ue);const Je=()=>G.position.set(Pe+.02,W,j);Je();const fe=new et;fe.name="EVENT_OUTSIDE_COURTYARD",a.add(fe);const D=new ct({color:2634545,roughness:.36,metalness:.12});ee(fe,"Courtyard wet pavement",[22,.12,17],[0,-.06,24.5],D);const S=ee(fe,"Five storey building facade",[18,17,.4],[0,8.5,16.5],h);S.userData.collider=!0;for(let $=0;$<5;$++)for(let ue=0;ue<5;ue++){const pe=ee(fe,"Dark apartment window",[1.25,1.65,.08],[-6+ue*3,2+$*3,16.76],_);if(ee(fe,"Weathered window sill",[1.43,.09,.23],[-6+ue*3,1.14+$*3,16.84],g),$===4&&ue===3){pe.material=new Tt({color:10258773});for(let xe=0;xe<3;xe++){const F=Ia(fe,`EVENT_WINDOW_SILHOUETTE_${xe}`,{width:.48,height:1.38,pose:xe===2?"wave":"back"});F.position.set(2.58+xe*.34,13.24,16.84),xe===2&&(fe.userData.waving=F)}}}const Y=new nn(9743794,105,35,2);Y.position.set(-4,9,24),fe.add(Y);for(const $ of[-10.5,10.5]){const ue=ee(fe,"Courtyard boundary",[.3,3,17],[$,1.5,24.5],h);ue.userData.collider=!0}const re=ee(fe,"Courtyard boundary",[22,3,.3],[0,1.5,32.8],h);re.userData.collider=!0,fe.visible=!1;const _e=new pf,oe=new P,Be=new P,ye=new P,ze=()=>!z&&v>0&&e.position.x<-12.57&&e.position.z>3.25&&e.position.z<9.15&&Math.abs(e.position.y-(W+1.65))<.9,He=()=>(G.updateWorldMatrix(!0,!0),Be.set(.16,1.34,0).applyMatrix4(G.matrixWorld),v>0&&e.position.distanceTo(Be)<3.4&&Ar(e.position,Be,G,o()));function Ee(){e.updateMatrixWorld(),G.updateWorldMatrix(!0,!0);for(const $ of[.12,1.3,2.55])for(const ue of[-.9,0,.9])if(Be.set(.07,$,ue).applyMatrix4(G.matrixWorld),ye.copy(Be).project(e),ye.z>=-1&&ye.z<=1&&Math.abs(ye.x)<1.1&&Math.abs(ye.y)<1.1&&Ar(e.position,Be,G,o()))return!0;return!1}function Ie($){n.roomSource("escape-rain",[Pe+.1,W+1.2,j],$?.14:0,1800,.45),n.roomSource("escape-photo-paper",[e.position.x,W+1.66,B.gaze.target?.parent.position.z??j],$?B.gaze.seconds/Na*.045:0,750,2)}return{targets:[L,Me,Ke,G,ne,...Se.map($=>$.door)],photos:le,get outside(){return!!z},get active(){return U&&!z},get inCorridor(){return ze()},get gazePressure(){return B.gaze.seconds/Na},get progress(){return{elapsed:B.elapsed,extensions:B.extensions,pendingExtensions:B.pendingExtensions,falseExits:[...B.falseExits],bolt:B.bolt,lookedBack:B.lookedBack}},get objective(){return e.position.x>-6.1?"离开 502，推开楼梯间的门":v?He()?B.bolt==="open"?"雨声就在门外，推开单元门":B.bolt==="moving"?"横闩正在滑开":"雨声就在门外，拉开单元门横闩":"沿墙脚绿线往前走，找有雨声的门；不要回头":"下到四楼，找多出来的防火门"},floorAt:QM,begin(){U=!0},openEntry(){b=1,A.userData.open=!0,n.effect("chair",.6),r()},readInstructions(){s("hint","别数照片里的人。沿墙脚绿线往前走，听门外的雨声。不要回头。")},openFire($){if(!$&&!Da(t,{outside:!0,atMidnight:!0})){s("hint","门缝里的气是热的。门推不开。");return}v||(U=!0,v=1,je.userData.open=!0,Xe.mesh.visible=!1,n.effect("chair",.9),r(),s("hint","门后的绿线一直往前。别数照片里的人，听门外的雨声。"))},falseExit($){const ue=Se[$];return!U||z||!ue||(ue.door.updateWorldMatrix(!0,!0),Be.set(0,1.4,.1).applyMatrix4(ue.door.matrixWorld),e.position.distanceTo(Be)>3.4||!Ar(e.position,Be,ue.door,o())||!ZM(B,$))?!1:(ue.plate.visible=!1,ue.reveal.visible=!0,ue.amount=1,ue.door.userData.prompt="门牌是 502",n.effect("wood",.7),s("hint","门牌变成了 502。门外没有雨声。退回绿线，继续往前。"),!0)},unbolt(){return!U||z||!He()||B.bolt!=="latched"?!1:(B.bolt="moving",n.effect("chair",.55),!0)},available($){return $==="stair_entry"?b===0:$==="fire_door"?v===0:$==="escape_note"?!v:$==="escape_bolt"?U&&!z&&B.bolt==="latched":$==="building_exit"?U&&!z&&B.bolt!=="moving":$.startsWith("false_exit_")?U&&!z&&!B.falseExits.includes(Number($.slice(-1))):!0},leave({beforeMidnight:$,lookedBack:ue}){if(z||!U||!He())return!1;if(B.bolt!=="open")return s("hint","横闩还没有拉开。"),!1;const pe=Da(t,{outside:!0,atMidnight:!0}),xe=LM(t,{beforeMidnight:$,lookedBack:ue||B.lookedBack});return!xe&&!pe?(s("hint","封还没有完成。"),!1):(z={time:0,type:xe,hidden:!xe&&pe,midnight:!1},fe.visible=!0,Ie(!1),e.position.set(0,1.65,29),e.fov=55,e.updateProjectionMatrix(),e.lookAt(2,9.4,16.5),s("outside",z.hidden),n.finishNight("two"),!0)},setArtMode($){Z=!!$,a.visible=!Z,L.visible=!Z,c.forEach(ue=>{ue.visible=Z})},update($,ue,pe){if(!ue||Z){Ie(!1);return}R+=$,Xe.update(R),pe&&(U=!0),se.intensity=e.position.distanceTo(se.position)<10?3.3:0,K.intensity=e.position.distanceTo(K.position)<5?.35:0;for(const ce of Se){ce.lamp.intensity=e.position.distanceTo(ce.lamp.position)<5?.9:0;const Te=ce.amount>0;ce.amount=Math.max(0,ce.amount-$*1.5),ce.door.position.z=ce.originZ+Math.sin(ce.amount*Math.PI*4)*.016,Te&&r()}const xe=L.rotation.y,F=Me.rotation.y;if(L.rotation.y=kt.damp(xe,-b*1.45,3,$),Me.rotation.y=kt.damp(F,-v*1.45,2.2,$),(Math.abs(xe-L.rotation.y)>5e-4||Math.abs(F-Me.rotation.y)>5e-4)&&r(),U&&!z){e.updateMatrixWorld(),i.updateMatrixWorld(!0),e.getWorldDirection(oe),_e.set(e.position,oe),_e.far=3.5;const ce=ze()?_e.intersectObjects(be,!1).find(me=>Ar(e.position,me.point,me.object.parent,o())):null,Te=JM(B,$,{inCorridor:ze(),photo:ce?.object,lookingBack:oe.x>.65});for(const me of Te)me==="counted"&&(n.effect("breath",1.1),s("hint","相纸里响了一声。把视线移开，继续走。")),me==="photo-warning"&&s("hint","相纸在响。低头，别接着数。"),me==="looked-back"&&(s("looked-back"),s("hint","身后的门响了。已经回过头，还是得先离开这里。")),me==="unbolted"&&s("hint","横闩开了。推门。");B.pendingExtensions&&B.bolt==="latched"&&$M(B,Ee())&&(N(),Je(),r(),O=1,s("corridor-extended"))}ne.position.z=B.boltSeconds*.63,G.userData.prompt=B.bolt==="open"?"推开单元门":"拉开单元门的横闩",Ie(U&&!z&&ze()),O=Math.max(0,O-$*.6);for(const ce of Ve)ce.intensity=2.4*(1-O*.55);for(const ce of y){ce.getWorldPosition(ce.userData.lightPosition);const Te=ce.userData.lightPosition.distanceTo(e.position);ce.userData.lightRank=ce.intensity>0&&Te<ce.distance?Te/ce.distance:1/0}const he=[...y].sort((ce,Te)=>ce.userData.lightRank-Te.userData.lightRank);if(H.forEach((ce,Te)=>{const me=he[Te];ce.position.copy(me.userData.lightPosition),ce.color.setHex(me.userData.lightColor),ce.distance=me.distance,ce.intensity=!z&&Number.isFinite(me.userData.lightRank)?me.intensity:0}),z){z.time+=$;const ce=fe.userData.waving;ce&&ce.userData.setFrame("wave",Math.floor(z.time*3)%6),z.hidden&&!z.midnight&&z.time>13&&(z.midnight=!0,s("midnight")),!z.hidden&&z.time>9&&!z.done&&(z.done=!0,s("ending",z.type))}},rehearsal($="corridor"){U=!0,b=1,v=1,Xe.mesh.visible=!1,L.rotation.y=-1.45,Me.rotation.y=-1.45,A.userData.open=je.userData.open=!0,$==="outside"?(fe.visible=!0,e.position.set(0,1.65,29),e.lookAt(2,9.4,16.5)):(e.position.set($==="exit"?Pe+1.8:-13.1,W+1.65,j),e.lookAt(Pe,W+1.3,j)),s("view"),r()}}}const Pu="third-place-memory-v1",Yc=()=>({version:1,wallSeen:!1,portrait:null}),Lf=i=>typeof i=="string"&&i.length<=16e4&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(i);function Df(i){try{const e=JSON.parse(i);if(e?.version!==1||typeof e.wallSeen!="boolean")return Yc();const t=Lf(e.portrait)?e.portrait:null;return{version:1,wallSeen:e.wallSeen,portrait:e.wallSeen?t:null}}catch{return Yc()}}function ty(i,e=Pu){for(const t of i)try{const n=t()?.getItem(e);if(n)return Df(n)}catch{}return Yc()}function Lu(i,e,t=Pu){const n=JSON.stringify(Df(JSON.stringify(i)));let r=!1;for(const s of e)try{const o=s();o&&(o.setItem(t,n),r=!0)}catch{}return r}const If=1,ny="third-place-2350-v1";function Nf(i,e){return!["seal","admit"].includes(e)||e==="seal"&&!i.ritualComplete||e==="admit"&&!i.admitted?null:{version:If,choice:e,story:structuredClone(i)}}function iy(i){try{const e=JSON.parse(i);if(e?.version!==If||!e.story)return null;const t=Cf();if("familyEcho"in e.story||(e.story.familyEcho=!1),"familyPortrait"in e.story||(e.story.familyPortrait=""),e.story.familyPortrait&&(!e.story.familyEcho||!Lf(e.story.familyPortrait)))return null;const n=!("houseChanged"in e.story)&&!("houseNoticed"in e.story);if(!n&&(!("houseChanged"in e.story)||!("houseNoticed"in e.story)))return null;!n&&!("houseReported"in e.story)&&(e.story.houseReported=structuredClone(e.story.houseNoticed));for(const[s,o]of Object.entries(Af))s in e.story||(e.story[s]=structuredClone(o));for(const s of["bagOpened","drawerKey","drawerUnlocked"])s in e.story||(e.story[s]=!!e.story.messages?.length);"rulesSides"in e.story||(e.story.rulesSides=e.story.discovered?.includes("rules")?["front","back"]:[]),e.story.wallOpen&&(e.story.wallLocated=e.story.pipeHeard=!0);for(const[s,o]of Object.entries(t)){const a=e.story[s];if(Array.isArray(o)){if(!Array.isArray(a)||a.length>40||a.some(l=>!["string","number"].includes(typeof l)))return null}else{if(o===null?a!==null:typeof a!=typeof o)return null;if(typeof a=="number"&&!Number.isFinite(a))return null}}if(!["table","held-dirty","clean","inverted","held-inverted","served","offered"].includes(e.story.bowl)||e.story.rulesSides.some(s=>!["front","back"].includes(s))||new Set(e.story.rulesSides).size!==e.story.rulesSides.length||e.story.drawerUnlocked&&!e.story.drawerKey||e.story.drawerKey&&!e.story.bagOpened||e.story.battery<3||e.story.battery>100||!Number.isInteger(e.story.housePhase)||e.story.housePhase<0||e.story.housePhase>2||["outageSeconds","pipeSeconds","wallListenSeconds","breathSeconds"].some(s=>e.story[s]<0)||(e.story.housePhase=Math.max(e.story.housePhase,Rf(e.story)),n&&(e.story.houseChanged.fill(e.story.housePhase),e.story.houseNoticed.fill(e.story.housePhase),e.story.houseReported.fill(e.story.housePhase)),["houseChanged","houseNoticed","houseReported"].some(s=>e.story[s].length!==Bi.length||e.story[s].some(o=>!Number.isInteger(o)||o<0||o>e.story.housePhase))||e.story.houseNoticed.some((s,o)=>s>e.story.houseChanged[o])||e.story.houseReported.some((s,o)=>s>e.story.houseNoticed[o])))return null;const r=Object.fromEntries(Object.keys(t).map(s=>[s,e.story[s]]));return Nf(r,e.choice)}catch{return null}}const pt=-10.88,Uf=Object.freeze([{from:-12.52,to:-7.56,z:10,floor:pt},{from:-7.56,to:-12.52,z:12.35,floor:-8.16},{from:-12.52,to:-7.56,z:10,floor:-5.44}]);function ry(i){const{x:e,z:t,y:n=pt+1.65}=i;if(t>13.48&&e>-20&&e<15&&t<36)return pt;const r=[];e>=-14&&e<=-12.5&&t>=9&&t<=13.65&&r.push(pt,-5.44),e>=-7.58&&e<=-5.8&&t>=8.1&&t<=13.45&&r.push(-8.16,-2.72),e>=-12.55&&e<=-5.8&&t>7.12&&t<=9.08&&r.push(-2.72);for(const s of Uf){if(e<-12.54||e>-7.54||Math.abs(t-s.z)>.92)continue;const o=Math.max(0,Math.min(1,(e-s.from)/(s.to-s.from)));r.push(s.floor+Math.ceil(o*16)*.17)}return r.length?r.reduce((s,o)=>Math.abs(o-(n-1.65))<Math.abs(s-(n-1.65))?o:s):null}function sy(i,e,t,n=!0){return n&&(t&&i.delay===null&&i.on<=0&&(i.delay=.55),i.delay!==null&&(i.delay-=e,i.delay<=0&&(i.delay=null,i.on=14)),i.on>0&&(i.on=t?14:Math.max(0,i.on-e))),i}const Jn=i=>new P(...i),oa=i=>i*i*(3-2*i);function oy({world:i,camera:e,story:t,sound:n,emit:r,changed:s}){const o=new et;o.name="EVENT_HOMECOMING",i.add(o);const a=[],l=[],c=[],u=[],h=(N,H)=>{let G;return i.traverse(ve=>{!G&&ve.isMesh&&N.test(ve.name)&&!Array.isArray(ve.material)&&(G=ve.material)}),G?go(G):new ct({color:H,roughness:.93})},d=h(/Hall.west.upper/,5004113),f=h(/Hall.floor/,4278850),g=new ct({color:3558464,roughness:.91}),_=new ct({color:3424060,roughness:.52,metalness:.56}),m=new ct({color:1186331,roughness:.87}),p=new ct({color:10988192,roughness:.87}),y=(N,H,G,ve=d)=>{const ne=ee(o,N,H,G,ve);return ne.userData.collider=!0,ne},w=(N,H,G)=>(Bt(N),N.userData.interaction=H,N.userData.prompt=G,a.push(N),N),x=(N,H,G,ve,ne=0)=>{const Ue=Ln((fe,D,S)=>{fe.fillStyle="#253e34",fe.fillRect(0,0,D,S),fe.strokeStyle="#9bada0",fe.lineWidth=7,fe.strokeRect(12,12,D-24,S-24),fe.fillStyle="#c6d0bd",fe.font='76px "Songti SC",serif',fe.textAlign="center",fe.textBaseline="middle",fe.fillText(N,D/2,S/2)},512,192),Je=Dt(o,`Building sign ${N}`,H,G,ve,new ct({map:Ue,roughness:.9}));return Je.rotation.y=ne,Je};function T(N,H,G,ve){const ne=new ct({color:8558728,emissive:11585701,emissiveIntensity:0}),Ue=Bt(ee(o,`EVENT_LANDING_BULB_${ve}`,[.55,.045,.12],[H,N+2.28,G],ne)),Je=new nn(11518624,0,6.2,2);Je.position.set(H,N+2.12,G),o.add(Je),l.push({light:Je,bulb:Ue,floor:N,delay:null,on:0,sounded:!1})}for(const[N,H]of Uf.entries()){const G=Math.sign(H.to-H.from);for(let ve=0;ve<16;ve++){const ne=H.from+G*(ve+.5)*.31,Ue=H.floor+(ve+1)*.17;ee(o,`Arrival stair ${N}-${ve}`,[.31,.17,1.8],[ne,Ue-.085,H.z],f),ee(o,"Worn concrete nosing",[.023,.014,1.8],[ne-G*.144,Ue+.008,H.z],p)}for(const ve of[H.z-.89,H.z+.89]){const ne=Un(o,"Stair steel handrail",[[H.from,H.floor+.98,ve],[H.to,H.floor+3.7,ve]],.031,_);ne.userData.collider=!0;for(const Ue of[.08,.38,.68,.94])Un(o,"Railing upright",[[H.from+(H.to-H.from)*Ue,H.floor+2.72*Ue,ve],[H.from+(H.to-H.from)*Ue,H.floor+2.72*Ue+.98,ve]],.019,_)}}for(const[N,H]of[[pt,-13.25],[-8.16,-6.67],[-5.44,-13.25],[-2.72,-6.67]]){ee(o,"Stair turning landing",[1.5,.14,4.38],[H,N-.07,11.32],f),T(N,H,11.55,Math.round((N-pt)/2.72)+1);const G=`${Math.round((N-pt)/2.72)+1} 楼`;x(G,.69,.26,[H<-10?-13.96:-5.84,N+1.85,11.32],H<-10?Math.PI/2:-Math.PI/2),N<-2.73&&y("Lower landing front guard",[1.5,1,.1],[H,N+.5,9.1],_)}ee(o,"Fourth floor connecting landing",[6.76,.14,1.86],[-9.17,-2.79,8.15],f),y("Lower stair east wall",[.15,11.15,4.58],[-5.73,-5.37,11.15]),y("Lower stair west wall",[.15,11.15,4.58],[-14.08,-5.37,11.15]),y("Stair inner dividing wall",[4.92,10.98,.12],[-10.04,-5.37,11.18]),y("North stair flights enclosure",[5.02,11.1,.13],[-10.04,-5.35,9.025]),y("Fourth landing guard east",[4.95,1,.1],[-8.26,-2.22,7.31],_),y("Fourth landing guard west",[.4,1,.1],[-12.33,-2.22,7.31],_),y("Fourth landing west edge",[.12,3,1.86],[-12.62,-1.22,8.2]);const M=w(y("EVENT_CLOSED_LOWER_STAIR",[1.14,2.5,.1],[-11.58,-1.47,7.39],_),"lower_stair_blocked","查看通往三楼的门");M.visible=!1;const A=x("三楼以下封闭",.93,.25,[-11.58,-.85,7.33],Math.PI);M.attach(A),y("South stair enclosure",[8.25,10.9,.16],[-9.9,-2.43,13.56]),y("Ground entrance header",[1.64,.57,.2],[-13.22,pt+2.83,13.56]);for(const N of[-14.01,-12.41])y("Ground entrance frame",[.13,2.58,.2],[N,pt+1.29,13.56],_);const L=new et;L.name="EVENT_GROUND_ENTRY",L.position.set(-14,pt,13.59),o.add(L);const b=ee(L,"Unit door steel leaf",[1.45,2.48,.07],[.725,1.24,0],_);b.userData.collider=!0,ee(L,"Unit door push plate",[.035,.43,.055],[1.19,1.16,.07],p),w(L,"arrival_entry","推开没上锁的单元门"),L.userData.hintAnchor=[.75,1.3,.06],x("5 栋",1.08,.4,[-13.23,pt+3.31,13.71]),x("501 / 502 ↑",.93,.34,[-6.62,-.95,9.1]),x("5 楼",.7,.29,[-6,1.8,5.12]),T(0,-6.6,6.18,5);const v=new ct({color:2505531,roughness:.38,metalness:.18});ee(o,"Wet residential forecourt",[32,.16,21],[-2.5,pt-.08,24],v),y("Apartment front facade",[22.6,14.35,.3],[-1.07,pt+7.175,13.63]);for(let N=0;N<5;N++)for(let H=0;H<7;H++){const G=-10.5+H*3.1,ve=pt+1.73+N*2.72,ne=(N+H)%5===2;ee(o,"Recessed residential window",[1.38,1.62,.06],[G,ve,13.81],m),ee(o,"Old residential window glass",[1.23,1.44,.028],[G,ve,13.852],new ct({color:ne?8616278:1716278,emissive:ne?7036985:726040,emissiveIntensity:ne?.48:.1,roughness:.47})),ee(o,"Window central mullion",[.05,1.46,.05],[G,ve,13.88],_),ee(o,"Old balcony sill",[1.62,.11,.38],[G,ve-.88,13.96],d)}for(const N of[-18.3,12.8])y("Forecourt boundary",[.2,3,21],[N,pt+1.5,24]);y("Parking back boundary",[31,.9,.3],[-2.5,pt+.45,34.4],g);for(let N=0;N<4;N++){const H=-15.4+N*7.9;Un(o,"Streetlamp post",[[H,pt,19.6],[H,pt+4.1,19.6],[H+.55,pt+4.1,19.6]],.049,_);const G=new ct({color:12764321,emissive:12109978,emissiveIntensity:N%2?0:1.2});if(ee(o,"Streetlamp cover",[.47,.08,.21],[H+.55,pt+4.08,19.6],G),N%2===0){const ve=new nn(11978662,24,12,2);ve.position.set(H+.55,pt+3.9,19.6),o.add(ve),c.push(ve)}}const R=new nn(7839664,45,30,2);R.position.set(-9,pt+8,26),o.add(R),c.push(R);for(let N=0;N<7;N++){ee(o,"Faded parking stripe",[.05,.006,4.7],[-15+N*3.7,pt+.005,27.2],p);const H=new et;H.position.set(-10+N*.58,pt,14.7),H.rotation.y=.2,o.add(H);for(const G of[-.47,.47]){const ve=new lt(new fo(.26,.026,6,20),m);ve.rotation.y=Math.PI/2,ve.position.set(0,.28,G),H.add(ve)}Un(H,"Bicycle frame",[[0,.28,-.47],[0,.64,0],[0,.28,.47],[0,.32,-.12],[0,.28,-.47]],.018,_),ee(H,"Bicycle seat",[.18,.05,.25],[0,.69,-.06],m)}const O=new et;O.name="EVENT_ARRIVAL_CAR",O.position.set(-10,pt,25),o.add(O);const k=new ct({color:2309699,roughness:.32,metalness:.5});ee(O,"Car lower body",[1.75,.57,3.6],[0,.59,0],k).userData.collider=!0,ee(O,"Car bonnet",[1.68,.14,1.07],[0,.97,-1.2],k),ee(O,"Car dashboard",[1.6,.28,.55],[0,.96,-.57],m),ee(O,"Car interior floor",[1.65,.08,1.9],[0,.4,.27],m),ee(O,"Car roof",[1.75,.1,1.86],[0,1.79,.22],k);for(const N of[-.83,.83])for(const H of[-.69,1.12]){const G=ee(O,"Car roof pillar",[.065,.81,.07],[N,1.35,H],k);G.rotation.x=H<0?-.2:.16}for(const N of[-.48,.48])ee(O,"Car seat cushion",[.62,.2,.7],[N,.62,.43],m),ee(O,"Car seat back",[.62,.73,.16],[N,.97,.87],m),ee(O,"Car headrest",[.42,.23,.12],[N,1.43,.9],m);const z=new lt(new fo(.23,.026,8,32),m);z.position.set(-.46,1.1,-.39),z.rotation.x=-.2,O.add(z);for(const N of[-.88,.88])for(const H of[-1.17,1.2]){const G=new lt(new ar(.3,.3,.17,20),m);G.rotation.z=Math.PI/2,G.position.set(N,.31,H),O.add(G)}const Z=Ln((N,H,G)=>{N.fillStyle="#142a29",N.fillRect(0,0,H,G),N.fillStyle="#92b9a5",N.font="24px monospace",N.fillText("FM  98.4",25,42),N.font="18px serif",N.fillText("台风预警",25,76)},256,96);Dt(O,"Dashboard radio display",.3,.12,[.12,1.06,-.278],new Tt({map:Z}));const U=new nn(8564132,.27,2,2);U.position.set(0,1.21,-.2),O.add(U),u.push(U);const B=new et;B.name="EVENT_CAR_DRIVER_DOOR",B.position.set(-.86,.45,-.59),O.add(B),ee(B,"Driver door lower",[.065,.55,1.65],[0,.24,.82],k),ee(B,"Driver interior handle",[.05,.06,.2],[.07,.58,.43],p),w(B,"arrival_car_exit","打开车门，下车"),B.userData.hintAnchor=[.06,.59,.4];const V=[];for(const N of[-.39,.37]){const H=new et;H.position.set(N,1.1,-.82),O.add(H),Un(H,"Windshield wiper",[[0,0,0],[.18,.48,-.06]],.014,m),V.push(H)}const W=w(ee(O,"Lin Wan phone on console",[.145,.022,.27],[.03,.97,-.1],m),"arrival_phone","拿起手机，听妈妈的留言"),j=Ln((N,H,G)=>{N.fillStyle="#17312c",N.fillRect(0,0,H,G),N.fillStyle="#d2ddd0",N.textAlign="center",N.font="38px serif",N.fillText("妈妈",H/2,100),N.font="22px sans-serif",N.fillText("22:17  留言",H/2,174),N.fillText("00:09",H/2,222),N.fillText("▶",H/2,320)},256,448),se=Dt(W,"Opening phone screen",.132,.245,[0,.013,0],new Tt({map:j}));se.rotation.x=-Math.PI/2;const Me=new et;Me.name="EVENT_OPENING_PHONE_GRIP",e.add(Me),Me.visible=!1,Me.position.set(.03,-.12,-.5);for(const N of[-.6,.6]){const H=new Va(12899787,28,17,.46,.85,2);H.position.set(N,.86,-1.73),H.target.position.set(N,-.1,-13),O.add(H,H.target),u.push(H),ee(O,"Car headlight",[.37,.14,.045],[N,.83,-1.79],new Tt({color:11978165}))}const je=new Ht,Ke=new Float32Array(420*6);for(let N=0;N<420;N++)for(let H=0;H<2;H++){const G=N*6+H*3;Ke[G]=-18+N*3.71%31,Ke[G+1]=pt+N*1.71%8+H*.24,Ke[G+2]=14+N*7.27%20+H*.04}je.setAttribute("position",new fn(Ke,3));const Xe=new gu(je,new za({color:9349798,transparent:!0,opacity:.16}));Xe.name="EVENT_PARKING_RAIN",o.add(Xe);let K="idle",le=0,be=0,Ve=0,Se=0,J=null,ge=!1,I=!1;const Pe=(N,H)=>{e.position.copy(N),e.lookAt(H),r("view")};return Ru(o),{root:o,targets:a,floorAt:ry,get active(){return!["idle","home"].includes(K)},get locked(){return["driving","exiting"].includes(K)},get seated(){return["driving","car","listening"].includes(K)},get objective(){return{driving:"台风夜，回到五栋",car:ge?"打开车门，去五栋":"手机上有一条妈妈的留言",listening:"妈妈的留言 · 00:09",exiting:"雨还没有停",courtyard:"五栋的单元门没有锁",stairs:"上五楼，找到 502",home:"打开 502 的门"}[K]},begin(){K="driving",le=0,O.position.z=29,Pe(Jn([-10.46,pt+1.35,29.24]),Jn([-10.4,pt+1.3,13.7])),n.playVoice("weather-radio",{delay:.3})},phone(){K==="car"&&(K="listening",le=0,Me.visible=!0,Me.add(W),W.position.set(0,-.19,-.08),W.rotation.set(Math.PI/2,0,-.05),r("changed"),n.playVoice("mother-arrival",{onComplete(){ge=!0,K="car",It(t,"opening-call"),W.visible=!1,Me.visible=!1,r("phone-collected"),r("changed")}}))},exitCar(){!ge||K!=="car"||(K="exiting",le=0,J={position:e.position.clone(),quaternion:e.quaternion.clone()},n.effect("chair",1.1),r("changed"))},openEntry(){Se||(Se=1,b.userData.open=!0,K="stairs",n.effect("chair",1),s(),r("changed"))},available(N){return N==="lower_stair_blocked"?M.visible:N==="arrival_phone"?K==="car"&&!ge:N==="arrival_car_exit"?K==="car"&&ge:N==="arrival_entry"?!Se&&!["driving","car","listening","exiting"].includes(K):!0},inspectLowerGate(){r("hint","通往三楼的门被焊死了。旁边却多出一道防火门，门下有绿光。")},setArtMode(N){I=!!N,o.visible=!I},update(N,H,G){if(I||!H)return;if(be+=N,le+=N,K==="driving"){const ne=Math.min(1,le/4.5);O.position.z=29-4*oa(ne),Pe(Jn([-10.46,pt+1.35,O.position.z+.24]),Jn([-10.4,pt+1.3,13.7])),ne===1&&(K="car",le=0,Pe(Jn([-10.46,pt+1.35,25.24]),Jn([-9.97,pt+.99,24.9])),r("changed"))}if(K==="exiting"){const ne=Math.min(1,le/1.7);Ve=oa(ne),B.rotation.y=Ve*1.25,e.position.lerpVectors(J.position,Jn([-11.55,pt+1.65,24.6]),oa(ne)),e.lookAt(-13.22,pt+1.5,13.6),r("view"),ne===1&&(K="courtyard",It(t,"arrived-courtyard"),r("changed"))}if(K==="listening"){const ne=Math.min(1,le/.75);W.position.y=-.19+.25*oa(ne)}L.rotation.y=kt.damp(L.rotation.y,-Se*1.4,3,N),Se&&Math.abs(L.rotation.y+1.4)>.001&&s();const ve=e.position.y<pt+7&&e.position.z>9;if(c.forEach(ne=>{ne.visible=ve}),u.forEach(ne=>{ne.visible=ve&&e.position.z>12}),Xe.visible=ve,ve)for(const ne of V)ne.rotation.z=Math.sin(be*2.2)*.76;Xe.position.y=-(be*4%2.5);for(const ne of l){const Ue=Math.abs(e.position.y-1.65-ne.floor)<1.2&&e.position.distanceTo(ne.light.position)<4.8;sy(ne,N,Ue);const Je=ne.on>0&&!t.powerOut;ne.light.visible=e.position.distanceTo(ne.light.position)<8,ne.light.intensity=Je?6.2:0,ne.bulb.material.emissiveIntensity=Je?1.15:0,Je&&!ne.sounded&&(n.effect("breaker",.09),ne.sounded=!0),Je||(ne.sounded=!1)}K==="stairs"&&e.position.x>-5.85&&e.position.y>.9&&e.position.z<7.4&&(K="home",It(t,"arrived-502"),r("changed")),(G||Da(t,{outside:!0,atMidnight:!0}))&&!M.visible&&(M.visible=!0,s())},rehearsal(N){ge=!0,W.visible=!1,Se=1,L.rotation.y=-1.4,b.userData.open=!0,K="stairs",N==="courtyard"?(K="courtyard",Pe(Jn([-11.55,pt+1.65,24.6]),Jn([-13.22,pt+1.5,13.6]))):Pe(Jn([-13.25,pt+1.65,12.25]),Jn([-12.52,pt+1.65,10])),s()}}}function ay(i,e,t,n=!0){return!n||i.complete||(i.seconds=t?i.seconds+e:0,i.seconds<2.4)?!1:(i.complete=!0,!0)}function ly({world:i,camera:e,story:t,sound:n,emit:r,changed:s}){const o=new et;o.name="EVENT_BALCONY",i.add(o);const a=[],l=[],c=(N,H=.91,G={})=>new ct({color:N,roughness:H,...G});let u,h;i.traverse(N=>{N.isMesh&&/^Kitchen.east/.test(N.name)&&(l.push(N),Bt(N),N.visible=!1,u||=N.material),N.isMesh&&/^Kitchen.floor/.test(N.name)&&(h||=N.material)}),u=u?go(u):c(6648679),h=h?go(h):c(3492680);const d=c(4217168,.5,{metalness:.65}),f=c(4406059),g=c(1121054),_=c(11908256),m=(N,H,G,ve=u)=>{const ne=ee(o,N,H,G,ve);return ne.userData.collider=!0,ne},p=(N,H,G)=>(Bt(N),N.userData.interaction=H,N.userData.prompt=G,a.push(N),N);for(const[N,H]of[[-3,.8],[2.2,4.2]])m("Kitchen wall beside balcony",[.18,3.1,H-N],[10,1.55,(N+H)/2]);m("Balcony doorway lintel",[.18,.69,1.4],[10,2.755,1.5]),ee(o,"Balcony weathered tile floor",[3.8,.12,7.2],[11.9,-.065,.6],h),ee(o,"Balcony corrugated roof",[3.98,.14,7.32],[11.93,3.06,.6],d);for(const N of[-3.02,4.22])m("Balcony side wall",[3.8,3,.13],[11.9,1.5,N]);m("Balcony concrete parapet",[.16,.88,7.2],[13.75,.44,.6]),m("Balcony upper window beam",[.13,.35,7.2],[13.75,2.88,.6],d);for(const N of[-2.98,-1.2,.6,2.4,4.18])m("Balcony window upright",[.08,2,.06],[13.75,1.79,N],d);const y=new et;y.name="EVENT_BALCONY_DOOR",y.position.set(10,0,.8),o.add(y);const w=new et;w.name="Glazed balcony door",y.add(w),w.userData.collider=!0;for(const N of[.04,1.33])ee(w,"Balcony door vertical frame",[.07,2.36,.08],[0,1.18,N],d);ee(w,"Balcony door lower panel",[.07,.56,1.37],[0,.28,.685],d);for(const N of[.59,2.32])ee(w,"Balcony door horizontal frame",[.07,.08,1.37],[0,N,.685],d);ee(w,"Door frosted glass",[.038,1.67,1.21],[0,1.455,.685],c(5600111,.4,{transparent:!0,opacity:.44})),ee(y,"Balcony door handle",[.14,.045,.055],[-.085,1.04,1.17],_),p(y,"balcony_door","推开厨房通往阳台的门"),y.userData.hintAnchor=[-.05,1.28,.7];const x=Ln((N,H,G)=>{N.fillStyle="#a2a497",N.fillRect(0,0,H,G);for(let ve=0;ve<H;ve+=3)N.fillStyle=ve%9?"#798b8123":"#34483d28",N.fillRect(ve,0,1,G);for(let ve=0;ve<G;ve+=3)N.fillStyle="#c0c1a826",N.fillRect(0,ve,H,1)},256,256),T=new Yn(2.7,1.85,36,28),M=T.attributes.position.array.slice(),A=new lt(T,c(8886153,.96,{map:x,side:Jt}));A.name="EVENT_BLOWN_CURTAIN",A.position.set(13.66,1.85,.05),A.rotation.y=-Math.PI/2,A.castShadow=!0,o.add(A),p(A,"balcony_curtain","拉开贴在窗上的湿窗帘");const L=new nn(9616314,3.2,5,2);L.position.set(12.5,2.5,.7),o.add(L);const b=new Ht,v=[];for(let N=0;N<120;N++){const H=-3+N*.137%7,G=N*.347%3;v.push(13.97,G,H,14.02,G+.18,H+.07)}b.setAttribute("position",new mt(v,3));const R=new gu(b,new za({color:10600118,transparent:!0,opacity:.19}));R.name="EVENT_BALCONY_RAIN",o.add(R);for(const N of[-2.75,3.9])Un(o,"Balcony drain pipe",[[13.52,.12,N],[13.52,2.99,N]],.046,d),Un(o,"Hanging washing line",[[10.3,2.78,N],[13.45,2.72,N]],.012,d);for(let N=0;N<4;N++){const H=ee(o,"Weathered plant pot",[.29,.31,.28],[12.95,.155,-2.54+N*.4],f);H.rotation.y=N*.3;for(let G=0;G<4;G++)Un(o,"Plant stems",[[12.95,.31,-2.54+N*.4],[12.95+Math.sin(G*2)*.15,.61+G*.06,-2.54+N*.4+Math.cos(G)*.12]],.017,c(4283716))}const O=new et;O.name="EVENT_BALCONY_TOOLBOX",O.position.set(11.85,.37,3.12),o.add(O),m("Balcony wooden stool",[.87,.36,.54],[11.85,.18,3.12],f),ee(O,"Toolbox bottom",[.79,.04,.41],[0,.02,0],g);for(const N of[-.377,.377])ee(O,"Toolbox side",[.035,.25,.41],[N,.125,0],d);for(const N of[-.187,.187])ee(O,"Toolbox front and back",[.79,.25,.035],[0,.125,N],d);const k=new et;k.position.set(0,.25,.205),O.add(k),ee(k,"Toolbox hinged lid",[.81,.06,.43],[0,.03,-.215],d),Un(k,"Toolbox handle",[[-.14,.07,-.2],[-.14,.15,-.2],[.14,.15,-.2],[.14,.07,-.2]],.02,g),p(O,"balcony_toolbox","打开阳台工具箱");const z=new et;z.position.set(0,.295,.035),O.add(z);for(const N of[-.115,.115]){const H=new lt(new ar(.07,.085,.29,20),g);H.rotation.x=Math.PI/2,H.position.x=N,z.add(H);for(const G of[-.15,.15]){const ve=new lt(new Lr(.061,20),c(5274498,.13,{metalness:.5}));ve.position.set(N,0,G),G<0&&(ve.rotation.y=Math.PI),z.add(ve)}}ee(z,"Binocular bridge",[.21,.06,.08],[0,0,0],d),p(z,"balcony_binoculars","拿起工具箱里的望远镜"),z.visible=!1;const Z=p(ee(o,"Balcony viewing window",[.008,1.55,1.73],[13.66,1.78,1.5],c(8625815,.17,{transparent:!0,opacity:.018,depthWrite:!1})),"balcony_view","用望远镜看对楼");ee(o,"Balcony window catch",[.045,.09,.14],[13.6,1.21,.98],d),Z.userData.hintBelow=!0;const U=new et;U.name="EVENT_OPPOSITE_BUILDING",o.add(U);for(const[N,H]of[[[.3,9,18],[33,7.2,0]],[[.3,7.8,18],[33,-4.12,0]],[[.3,2.52,6.5],[33,1.26,-5.75]],[[.3,2.52,7],[33,1.26,5.5]]])ee(U,"Dark opposite facade",N,H,u);for(let N=-2;N<4;N++)for(const H of[-7.7,-4.7,4.3,7.3])ee(U,"Unlit opposite window",[.055,1.45,1.42],[32.81,N*2.8+1.5,H],g),ee(U,"Opposite window sill",[.28,.07,1.65],[32.73,N*2.8+.72,H],d);ee(U,"Occupied room floor",[3.6,.12,4.2],[34.4,-.08,-.5],f),ee(U,"Occupied room back wall",[.12,2.65,4.2],[36.13,1.31,-.5],c(7563852));for(const N of[-2.57,1.57])ee(U,"Occupied room side",[3.6,2.65,.1],[34.4,1.31,N],c(5857357));ee(U,"Occupied room ceiling",[3.6,.1,4.2],[34.4,2.67,-.5],u),ee(U,"Opposite family dining table",[1.35,.1,1.48],[34,.78,-.48],f);for(const N of[33.48,34.52])for(const H of[-1.03,.06])ee(U,"Opposite dining table leg",[.065,.75,.065],[N,.375,H],f);for(const[N,H]of[[33.95,-.98],[33.95,.1],[34.48,-.48]]){const G=new lt(new ar(.115,.065,.09,20),_);G.position.set(N,.875,H),U.add(G)}const B=[{position:[33.78,0,-1.52],rotation:0,woman:!0},{position:[33.78,0,.55],rotation:Math.PI,woman:!1},{position:[35.06,0,-.48],rotation:-Math.PI/2,woman:!0}].map((N,H)=>{const G=new et;G.position.fromArray(N.position),G.rotation.y=N.rotation,U.add(G),ee(G,"Opposite chair seat",[.48,.07,.47],[0,.48,.02],f);for(const ne of[-.19,.19])for(const Ue of[-.16,.2])ee(G,"Opposite chair leg",[.045,.45,.045],[ne,.225,Ue],f);for(const ne of[-.19,.19])ee(G,"Opposite chair back post",[.045,.62,.045],[ne,.79,-.2],f);ee(G,"Opposite chair back rail",[.42,.1,.045],[0,1.05,-.2],f);const ve=Ia(U,`EVENT_OPPOSITE_SILHOUETTE_${H+1}`,{width:.62,height:1.26,pose:H<2?"profile":"back"});return ve.position.fromArray(N.position),ve.position.y=.25,ve.rotation.y=-Math.PI/2,ve}),V=new nn(13876092,14,6,2);V.position.set(34.1,2.31,-.47),U.add(V),ee(U,"Occupied room lamp",[.27,.06,.27],[34.1,2.45,-.47],new Tt({color:13351801}));const W=document.createElement("div");W.id="binocular-view",W.className="is-hidden",W.innerHTML='<div class="binocular-mask"></div><span class="binocular-optics">8 × 30</span><button type="button">放下望远镜 <kbd>E / Esc</kbd></button>',document.body.appendChild(W);let j=0,se=0,Me=!1,je=0,Ke=!1,Xe=!1,K=0,le=0,be=!1,Ve=null,Se=!1;const J={seconds:0,complete:t.discovered.includes("balcony")},ge=new P,I=new P,Pe=()=>{be&&(be=!1,e.position.copy(Ve.position),e.quaternion.copy(Ve.quaternion),e.fov=Ve.fov,e.updateProjectionMatrix(),W.classList.add("is-hidden"),r("scope-close"),r("view"))};return W.querySelector("button").addEventListener("click",Pe),Ru(o),{targets:a,get scoping(){return be},get locked(){return!1},openDoor(){j=j?0:1,w.userData.open=!!j,n.effect("chair",.7),s()},pullCurtain(){Ke||(Ke=!0,n.effect("cloth",2),It(t,"curtain"),r("changed"))},openBox(){Me||(Me=!0,se=.001,n.effect("chair",.5))},takeBinoculars(){Xe=!0,z.visible=!1,It(t,"binoculars"),n.effect("cloth",.35),r("changed")},view(){if(be)return Pe();Xe&&(Ve={position:e.position.clone(),quaternion:e.quaternion.clone(),fov:e.fov},be=!0,e.position.set(13.12,1.65,.75),e.lookAt(34,1.3,-.48),e.fov=10,e.updateProjectionMatrix(),W.classList.remove("is-hidden"),r("scope-open"),r("view"))},closeScope:Pe,available(N){return N==="balcony_curtain"?!Ke:N==="balcony_toolbox"?!Me:N==="balcony_binoculars"?Me&&se>=1&&!Xe:N==="balcony_view"?Xe&&je>.98&&!be:!be},setArtMode(N){Se=!!N,o.visible=!Se,l.forEach(H=>{H.visible=Se})},update(N,H){if(Se||!H)return;K+=N;const G=y.rotation.y;y.rotation.y=kt.damp(G,j*1.42,3,N),Math.abs(y.rotation.y-G)>5e-4&&s(),y.userData.prompt=j?"关上阳台门":"推开厨房通往阳台的门",Me&&se<1&&(se=Math.min(1,se+N),k.rotation.x=se*1.9,se===1&&(z.visible=!Xe)),Ke&&(je=Math.min(1,je+N*.55)),A.position.z=.05+je*3.15,A.position.y=1.85-je*.37;const ve=T.attributes.position;if(e.position.x>8){for(let ne=0;ne<ve.count;ne++){const Ue=M[ne*3],Je=M[ne*3+1],fe=Math.exp(-((Ue/.43)**2+(Je/.59)**2)*2),D=Math.exp(-((Ue/.085)**2+((Je+.04)/.18)**2)*2),S=Math.exp(-(((Math.abs(Ue)-.16)/.1)**2+((Je-.16)/.09)**2)*2);ve.setZ(ne,(fe*.16+D*.12-S*.062)*(1-je)+Math.sin(Je*17+Ue*9+K*2.4)*(.025+je*.05))}ve.needsUpdate=!0,T.computeVertexNormals()}if(R.position.y=-(K*1.5%.9),L.visible=e.position.x>8&&e.position.x<17,V.visible=e.position.x>8,be&&(e.getWorldDirection(ge),I.set(34,1.2,-.48).sub(e.position).normalize(),ay(J,N,ge.dot(I)>.992)&&n.effect("cloth",.7)),J.complete){le=Math.min(1,le+N*.38);for(const ne of B.slice(0,2))ne.userData.setFrame(le>.55?"front":"profile"),ne.userData.opacity(.92-Math.sin(le*Math.PI)*.55);le===1&&!t.discovered.includes("balcony")&&(It(t,"balcony"),r("balcony-complete"),r("changed"))}},rehearsal(){j=1,y.rotation.y=1.42,w.userData.open=!0,e.position.set(11.3,1.65,.85),e.lookAt(13.66,1.85,.05),r("view"),s()}}}function cy({story:i,camera:e,sound:t,narrative:n,emit:r,gameTime:s,canOpen:o,dial:a}){const l=document.createElement("section");l.id="personal-phone",l.className="is-hidden",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-label","林晚的手机"),l.innerHTML=`<div class="personal-phone-body"><header><span data-phone-clock>22:17</span><span>▂▄▆　<span data-phone-battery></span></span></header>
    <div class="phone-app-title"><span>林晚的手机</span><button type="button" data-phone-close aria-label="收起手机">收起 <kbd>P / Esc</kbd></button></div>
    <nav aria-label="手机应用"><button data-phone-tab="calls">电话</button><button data-phone-tab="voicemail">留言</button><button data-phone-tab="photos">相册 <i data-photo-dot></i></button></nav>
    <div data-phone-content></div><footer>▁</footer></div>`,document.body.appendChild(l);const c=l.querySelector("[data-phone-content]"),u=l.querySelector("[data-phone-clock]"),h=document.querySelector("#phone-status"),d=new Set(["mother-arrival"]);let f=!1,g="calls",_=null,m=!1,p=0,y=0,w=-100,x=-1,T=null,M=!1;const A={"mother-arrival":"22:17　妈妈 · 00:09","mother-return":"22:17　妈妈 · 已保存","mother-look-back":"22:17　妈妈 · 已保存","wall-voicemail":"22:17　妈妈 · 已保存"},L=(U,B)=>{const V=document.createElement("button");return V.type="button",V.textContent=U,V.addEventListener("click",B),V},b=(U,B="")=>{const V=document.createElement("p");return V.className=B,V.textContent=U,V};function v(){f&&(f=!1,m=!1,l.classList.add("is-hidden"),r("phone-close"))}function R(U){T=U,w=y;const B={onComplete(){const V=UM(U);V&&It(i,V),T=null,r("changed"),f&&g==="voicemail"&&z()},onCancel(){T=null}};U==="wall-voicemail"?t.playSequence(["mother-warning","stranger-soup"],{...B,gap:.45}):t.playVoice(U,B),f&&g==="voicemail"&&z()}function O(){delete h.dataset.notification,l.querySelector("[data-photo-dot]").textContent="",c.replaceChildren(),c.append(b("今天　23:40","phone-media-date"));const U=document.createElement("img");U.alt="今晚的饭桌合照，母亲、成年林晚与父亲坐在桌边，林晚举着筷子看向镜头",U.src=_,U.className="phone-photo",c.append(U),c.append(b("IMG_2340.JPG　　1 / 1","phone-media-meta")),c.append(L("返回相册",z)),It(i,"future-photo-seen"),r("changed")}function k(){M=i.discovered.includes("recording-viewed"),c.replaceChildren(),c.append(b("今天　23:47","phone-media-date"));const U=document.createElement("canvas");U.width=640,U.height=400,U.className="phone-recording",U.setAttribute("aria-label","座位上的手机摄像画面"),c.append(U);const B=b(yd(0,M),"recording-timer");c.append(B),p=0,m=!0,x=-1,c.append(L(M?"返回相册":"结束录像",()=>{m=!1,It(i,"recording-viewed"),r("changed"),z()})),c.append(b("后置摄像头　·　声音已录入","phone-media-meta"))}function z(){if(m=!1,c.replaceChildren(),u.textContent=s(),l.querySelectorAll("[data-phone-tab]").forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.phoneTab===g))),g==="calls")c.append(b("置顶联系人","phone-section-label"),b("妈妈","phone-contact-name"),b("最后通话　22:17","phone-muted"),b("通话时长　00:09","phone-muted")),c.append(L("回拨妈妈",()=>{v(),a()})),c.append(b("通话记录","phone-section-label"),b("妈妈　　22:17　　已结束","phone-call-entry"));else if(g==="voicemail"){c.append(b("语音留言","phone-section-label"));for(const U of d)c.append(L(`${T===U?"Ⅱ":"▶"}　${A[U]}`,()=>R(U)));c.append(b("保存时间均为今晚 22:17","phone-muted"))}else{if(c.append(b("最近项目","phone-section-label")),_){const U=L("今天　23:40　查看照片",O),B=document.createElement("img");B.src=_,B.alt="饭桌合照缩略图",U.prepend(B),U.className="phone-photo-tile",c.append(U)}i.discovered.includes("phone-recovered")&&c.append(L(i.discovered.includes("recording-viewed")?"▶　23:47　查看已保存的录像":"●　23:47　打开正在录像的画面",k)),!_&&!i.discovered.includes("phone-recovered")&&c.append(b("没有最近照片","phone-muted"))}}function Z(U="calls"){if(!o()||!rr(i)){rr(i)||r("hint","口袋里没有手机。");return}!_&&i.discovered.includes("future-photo")&&(_=n.phonePhoto().toDataURL("image/jpeg",.9)),i.discovered.includes("heard-return")&&d.add("mother-return"),i.discovered.includes("heard-look-back")&&d.add("mother-look-back"),i.wallOpen&&d.add("wall-voicemail"),f=!0,g=U,l.classList.remove("is-hidden"),r("phone-open"),z(),l.querySelector("[data-phone-close]").focus()}return l.querySelector("[data-phone-close]").addEventListener("click",v),l.querySelectorAll("[data-phone-tab]").forEach(U=>U.addEventListener("click",()=>{g=U.dataset.phoneTab,z()})),{get open(){return f},show:Z,close:v,toggle(){f?v():Z()},collected(){d.add("mother-arrival"),h.classList.add("has-phone")},wallOpened(){_||(_=n.phonePhoto().toDataURL("image/jpeg",.9),d.add("wall-voicemail"),It(i,"future-photo"),h.dataset.notification="1",l.querySelector("[data-photo-dot]").textContent="1",t.tone(810,.09,.035),t.tone(620,.12,.025,"sine",.13),t.playSequence(["mother-warning","stranger-soup"],{delay:1.2,gap:.45}))},recovered(){It(i,"phone-recovered"),r("changed"),Z("photos"),k()},update(U,B){if(!B)return;if(y+=U,h.classList.toggle("phone-missing",!rr(i)),l.querySelector("[data-phone-battery]").textContent=`${Math.floor(i.battery)}%${i.battery<=3?" 省电":""}`,f){if(u.textContent=s(),m){p+=U;const W=Math.floor(p*8);if(W!==x){x=W;const j=c.querySelector("canvas");j&&(j.getContext("2d").drawImage(n.phoneRecording(p),0,0),c.querySelector(".recording-timer").textContent=yd(p,M))}}return}if(!rr(i)||t.voiceBusy||y-w<13)return;const V=NM(i,IM(e.position));V&&(d.add(V),R(V))},rehearsal(){_=n.phonePhoto().toDataURL("image/jpeg",.9),d.add("mother-return"),d.add("mother-look-back"),d.add("wall-voicemail")}}}const io=i=>new P(...i),Xs=(i,e)=>new sn(io(i),io(e)),aa=Bi.indexOf("bedroom"),Ed=Bi.indexOf("kitchen"),uy={entry:["拖鞋刚才是朝着门的。湿脚印却往屋里走。","湿痕没了。拖鞋并得整整齐齐，鞋尖朝着饭桌。"],living:["妈妈的位置不太对。像有人刚刚起身。","沙发平了，椅子也收好了。像从来没人住过。"],photos:["相框全歪向了同一边。","每张照片里都是我。可我不记得拍过。"],bedroom:["旧卧室的门什么时候掩上了？里面还有声音。","门缝的光没了。那声响，挪到了墙后。"],kitchen:["抹布还湿着，水槽边却没有人。","水槽已经干了。滴水声怎么还在客厅？"]};function hy({world:i,parent:e,camera:t,story:n,sound:r,narrative:s,emit:o,colliders:a,changed:l}){const c=new et;c.name="EVENT_HOUSE_CHANGES",e.add(c);const u=(J,ge=.85)=>new ct({color:J,roughness:ge}),h=u(4338985),d=u(9605756),f=J=>i.getObjectByName(J)||i.getObjectByName(St.sanitizeNodeName(J)),g=f("INT_DOOR_502")?.material?.clone()||u(5657412),_=new ka,m=new ot,p=new P;let y=null,w=0,x=0,T=!1,M=!1;const A=new et;A.name="House entrance slippers",c.add(A);for(const J of[-1,1]){const ge=new lt(new Dr(1,16,10),u(4410176));ge.scale.set(.071,.028,.145),ge.position.x=J*.087,A.add(ge);const I=ee(A,"Worn slipper strap",[.133,.042,.087],[J*.087,.025,-.035],u(7829346));I.rotation.x=.2}const L=new et;L.name="House wet footprints",c.add(L);const b=Ln((J,ge,I)=>{J.fillStyle="#fff";const Pe=(N,H,G,ve,ne=0)=>{J.beginPath(),J.ellipse(N*ge,H*I,G*ge,ve*I,ne,0,Math.PI*2),J.fill()};Pe(.48,.78,.22,.16),Pe(.45,.5,.24,.27,-.12),Pe(.51,.32,.32,.15);for(let N=0;N<5;N++)Pe(.23+N*.135,.12+N*.019,.095-N*.009,.087-N*.008)},128,256),v=new ct({color:2702388,map:b,roughness:.12,transparent:!0,opacity:.56,depthWrite:!1});for(let J=0;J<10;J++){const ge=Dt(L,"Wet bare footprint",.13,.26,[.4-J*.47,.028,2.14+(J%2?-.1:.1)],v);ge.rotation.set(-Math.PI/2,0,Math.PI/2+.12),ge.scale.x=J%2?-1:1}const R=[];i.traverse(J=>{J.isMesh&&/^Sofa.cushion/.test(J.name)&&(Bt(J),R.push({object:J,position:J.position.clone(),scale:J.scale.clone(),rotation:J.rotation.clone()}))});const O=ee(c,"Discarded household cloth",[.52,.026,.46],[-2.45,.86,2.55],d),k=Bt(f("Chair mother")),z=k&&{position:k.position.clone(),rotation:k.rotation.clone()},Z=new po().load(new URL("./story/corridor-photos.png",document.baseURI).href);Z.colorSpace=Nt,Z.repeat.set(1/3,.5),Z.offset.set(0,.5);const U=[[4.68,1.75,-2.79],[-4.76,1.78,-6.96],[-1.55,1.88,-7.04]].map((J,ge)=>{const I=new et;I.name=`House keepsake frame ${ge}`,I.position.fromArray(J),c.add(I),ee(I,"Family keepsake frame",[.48,.59,.055],[0,0,0],h);const Pe=Dt(I,"Familiar family photograph",.414,.523,[0,0,.031],new Tt({map:Z,color:11380627}));return{frame:I,photo:Pe}}),B=new et;B.name="House old bedroom door",B.position.set(-4.71,0,-2.99),c.add(B),B.userData.interaction="house_door",B.userData.prompt="推开旧卧室的门",B.userData.hintAnchor=[.95,1.25,0];const V=ee(B,"Old bedroom door leaf",[1.4,2.36,.045],[.7,1.23,0],g);V.userData.collider=!0;for(const J of[-.03,.03])ee(B,"Old bedroom recessed panel",[1.17,1.71,.012],[.7,1.35,J],g),ee(B,"Old bedroom brass handle",[.13,.025,.06],[1.23,1.13,J*2],u(10195314,.38));const W=Dt(c,"Light below old bedroom door",1.32,.34,[-4.01,.03,-2.83],new Tt({color:12297835,transparent:!0,opacity:0,depthWrite:!1}));W.rotation.x=-Math.PI/2;const j=new nn(12889202,0,2,2);j.position.set(-4,.17,-2.82),c.add(j);const se=ee(c,"Kitchen drying cloth",[.34,.024,.26],[6.95,1.023,-2.18],u(9607049)),Me=Ln((J,ge,I)=>{const Pe=J.createRadialGradient(ge*.5,I*.5,0,ge*.5,I*.5,ge*.47);Pe.addColorStop(0,"rgba(255,255,255,.85)"),Pe.addColorStop(1,"rgba(255,255,255,0)"),J.fillStyle=Pe,J.fillRect(0,0,ge,I)},128,128),je=Dt(c,"Wet mark by kitchen sink",.7,.38,[6.96,1.01,-2.12],new ct({color:2373678,map:Me,transparent:!0,opacity:.6,roughness:.08,depthWrite:!1}));je.rotation.x=-Math.PI/2;const Ke=(J,ge)=>({object:J,position:io(ge)}),Xe=[{key:"entry",bounds:[Xs([-4.1,0,1.75],[1.55,.25,3.94])],anchors:[Ke(A,[1.05,.07,3.59]),Ke(L,[-1.45,.04,2.14])],source:[1.05,.15,3.5],apply(J){A.position.set(J===1?1.19:J===2?.67:1.05,.035,3.59),A.rotation.y=J===1?Math.PI:J===2?.7:0,L.visible=J===1}},{key:"living",bounds:[Xs([-4.2,.4,2],[-1.6,1.1,3.1]),Xs([-.1,0,-.25],[1.05,1.2,.85])],anchors:[Ke(O,[-2.5,.9,2.5]),Ke(k,[.39,.7,.25])],source:[.39,.6,.25],safe:()=>!k||Math.hypot(t.position.x-z.position.x,t.position.z-z.position.z)>1,apply(J){for(const ge of R)ge.object.position.copy(ge.position),ge.object.scale.copy(ge.scale),ge.object.rotation.copy(ge.rotation),J===1&&(ge.object.scale.y*=.65,ge.object.position.y-=.045,ge.object.rotation.z=.025),J===2&&(ge.object.position.z-=.055);O.visible=J!==2,O.rotation.y=J===1?.65:.31,O.position.y=J===1?.786:.86,k&&(k.position.copy(z.position),k.rotation.copy(z.rotation),J===1&&(k.position.x-=.17,k.rotation.y+=.28)),l()}},{key:"photos",bounds:U.map(({frame:J})=>new sn().setFromCenterAndSize(J.position,io([.8,.85,.14]))),anchors:U.map(({photo:J,frame:ge})=>Ke(J,ge.position.clone().add(io([0,0,.035])).toArray())),source:[4.68,1.75,-2.79],apply(J){J===2&&!y&&(y=new Ts(s.selfPortrait()),y.colorSpace=Nt);for(const{frame:ge,photo:I}of U)ge.rotation.z=J===1?.09:0,I.material.map=J===2?y:Z,I.material.color.set(J===2?12171684:11380627)}},{key:"bedroom",bounds:[Xs([-4.85,0,-4.55],[-3.15,2.48,-2.6])],anchors:[Ke(B,[-3.75,1.3,-2.96])],source:[-4,1.25,-3.4],apply(){B.rotation.y=K()},safe:()=>Math.hypot(t.position.x+4.71,t.position.z+2.99)>1.9},{key:"kitchen",bounds:[Xs([6.5,.98,-2.6],[7.43,1.22,-1.78])],anchors:[Ke(se,[6.95,1.07,-2.12])],source:[6.95,1.15,-2.12],apply(J){se.scale.set(J===1?1.25:1,J===1?2.4:1,J===1?.7:1),se.rotation.y=J===1?.55:0,se.material.color.set(J===1?6254953:9607049),je.visible=J===1}}];for(const J of Xe)J.hidden=0,J.seen=0,J.cue=0;function K(){return n.houseDoorOpen?1.5:n.houseChanged[aa]===1?.055:0}function le(){k&&(k.position.copy(z.position),k.rotation.copy(z.rotation),l())}function be(){M=!1,x=0,Xe.forEach((J,ge)=>{J.hidden=J.seen=J.cue=0,J.apply(n.houseChanged[ge])}),B.rotation.y=K(),l()}function Ve(J){return J.anchors.find(({object:ge,position:I})=>!ge||t.position.distanceTo(I)>4.8?!1:(p.copy(I).project(t),Math.abs(p.x)<.88&&Math.abs(p.y)<.88&&p.z>=-1&&p.z<=1&&Ar(t.position,I,ge,a())))}const Se={root:c,targets:[B],restore:be,openDoor(){n.houseDoorOpen||M||(n.houseDoorOpen=!0,Xe[aa].cue=.8,o("changed"))},finish(){M||(M=!0,le(),W.material.opacity=0,j.intensity=0)},setArtMode(J){if(T=!!J,T){le();for(const ge of R)ge.object.position.copy(ge.position),ge.object.scale.copy(ge.scale),ge.object.rotation.copy(ge.rotation)}else be()},rehearsal(J){J==="house-return"&&(n.discovered.includes("mirror")||n.discovered.push("mirror"),n.housePhase=1),J==="house-late"&&(n.housePhase=2,n.houseChanged.fill(1),n.houseNoticed.fill(1),n.houseReported.fill(1),n.houseDoorOpen=!0),be(),t.position.set(.05,1.65,2.8),t.lookAt(1.05,.05,3.59),o("view")},update(J,{allowChanges:ge=!0,ended:I=!1}={}){if(T||!Number.isFinite(J)||J<=0)return;I&&Se.finish(),w+=J,x=Math.max(0,x-J),t.updateMatrixWorld(),m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_.setFromProjectionMatrix(m);const Pe=t.position.y>.5&&t.position.y<2.8&&t.position.x>-6&&t.position.x<10&&t.position.z<4.2,N=ge&&!M&&!r.voiceBusy;for(const[Je,fe]of Xe.entries()){const D=!fe.bounds.some(re=>_.intersectsBox(re));fe.hidden=ge&&!M&&D?fe.hidden+J:0,fe.hidden>=.4&&(!fe.safe||fe.safe())&&wM(n,Je)&&(fe.apply(n.houseChanged[Je]),fe.hidden=0,fe.seen=0,fe.cue=.85,l(),o("changed"));const S=ge&&!M&&Pe&&n.houseReported[Je]<n.houseChanged[Je]?Ve(fe):null;fe.seen=S?fe.seen+J:0,fe.seen>=.65&&EM(n,Je)&&o("changed"),S&&N&&x===0&&n.houseNoticed[Je]===n.houseChanged[Je]&&n.houseReported[Je]<n.houseNoticed[Je]&&(n.houseReported[Je]=n.houseNoticed[Je],x=5,fe.cue=.7,o("hint",uy[fe.key][n.houseChanged[Je]-1]),o("changed")),fe.cue=Math.max(0,fe.cue-J);const Y=fe.cue>0?Math.sin(Math.min(1,fe.cue/.85)*Math.PI)*.032:0;r.roomSource(`house-change-${fe.key}`,fe.source,N&&Pe?Y:0,fe.key==="living"?180:560,3)}if(!M){const Je=kt.damp(B.rotation.y,K(),5,J);Math.abs(Je-B.rotation.y)>1e-4&&(B.rotation.y=Je,l());const fe=n.houseChanged[aa]===1&&!n.houseDoorOpen?Math.max(0,1-B.rotation.y):0;W.material.opacity=fe*.38,j.intensity=fe*.7}const H=n.houseChanged[Ed]===2,G=w%7.3,ve=G<.17?Math.sin(G/.17*Math.PI):G>.43&&G<.57?Math.sin((G-.43)/.14*Math.PI)*.5:0;r.roomSource("house-familiar-drip",H?[-5.64,1.4,.5]:[7.45,1.1,-2.31],N&&Pe?ve*(n.houseChanged[Ed]===0?.008:.033):0,1200,7);const ne=n.houseChanged[aa],Ue=ne===2||ne===1&&!n.houseDoorOpen;r.roomSource("house-door-rustle",ne===2?[-5.64,1.2,.5]:[-4,1.2,-3.8],N&&Pe&&Ue?.016*(.5+.5*Math.sin(w*.9)):0,330,1.4)}};return be(),Se}function dy({world:i,camera:e,story:t,sound:n,narrative:r,emit:s,colliders:o=()=>[],changed:a=()=>{}}){const l=new et;l.name="EVENT_CHANGING_HOUSE",i.add(l);const c=(se,Me=.85)=>new ct({color:se,roughness:Me}),u=c(2831667,.39),h=c(8883322,.3),d=new P,f=new P,g=new P(6.88,1.52,-2.67),_=new P(-5.64,1.4,.5);let m=0,p=!1,y=!1,w=0,x=0;const T=[],M=(se,Me,je)=>(Bt(se),se.userData.interaction=Me,se.userData.prompt=je,T.push(se),se),A=(se,Me=.6,je=12)=>(e.getWorldDirection(d),f.copy(se).sub(e.position),f.length()<je&&d.dot(f.normalize())>Me);ee(l,"Kitchen enamel hob",[.78,.035,.59],[8.45,1.023,-2.27],h),Li(l,"Hob burner",[[.205,0],[.205,.025],[.19,.027]],[8.45,1.042,-2.25],u);for(const se of[0,Math.PI/2]){const Me=ee(l,"Pot support",[.48,.014,.026],[8.45,1.063,-2.25],u);Me.rotation.y=se}const L=M(Li(l,"Gas ignition knob",[[.043,0],[.043,.033]],[8.45,1.067,-1.989],u),"gas_stove","转动旋钮，点亮灶火"),b=ee(L,"Ignition indicator",[.005,.004,.033],[0,.037,0],h),v=new Ra(new xu(.014,.073,7),new Tt({color:3570674,transparent:!0,opacity:.68,depthWrite:!1}),28),R=new Ut;for(let se=0;se<28;se++){const Me=se/28*Math.PI*2;R.position.set(8.45+Math.cos(Me)*.2,1.094,-2.25+Math.sin(Me)*.2),R.rotation.z=Math.sin(Me)*.18,R.updateMatrix(),v.setMatrixAt(se,R.matrix)}v.name="Blue gas flame ring",v.visible=!1,l.add(v);const O=new nn(7376600,0,4.4,2);O.name="Gas flame local light",O.position.set(8.45,1.18,-2.05),l.add(O),Un(l,"Kitchen water riser",[[6.88,.25,-2.72],[6.88,2.66,-2.72],[5.1,2.66,-2.72]],.023,u);for(const se of[.6,1.45,2.35])ee(l,"Water pipe bracket",[.11,.026,.065],[6.88,se,-2.755],h);const k=M(Li(l,"Listen at the water valve",[[.085,0],[.085,.018]],g.toArray(),u),"listen_pipe","靠近水管，听一会儿");k.rotation.x=Math.PI/2;const z=new lt(new Lr(.072,32),new ct({roughness:.42,map:Ln((se,Me,je)=>{se.fillStyle="#aaa994",se.fillRect(0,0,Me,je),se.strokeStyle="#2c3833",se.lineWidth=5,se.beginPath(),se.arc(Me/2,je/2,Me*.4,0,Math.PI*2),se.moveTo(Me/2,je/2),se.lineTo(Me*.74,je*.35),se.stroke()},128,128)}));z.name="Old valve face",z.position.set(0,.023,0),z.rotation.x=-Math.PI/2,k.add(z);const Z=Dt(l,"Damp seam betraying the sealed wall",.045,1.38,[-5.635,1.5,.52],new ct({color:6387066,roughness:.28,transparent:!0,opacity:0,depthWrite:!1}));Z.rotation.y=Math.PI/2;const U=new et;U.position.set(7.95,2.39,-2.65),l.add(U),ee(U,"Old extractor housing",[.43,.43,.055],[0,0,0],h);const B=new et;U.add(B);for(let se=0;se<4;se++){const Me=ee(B,"Extractor blade",[.09,.25,.014],[0,.075,.041],u);Me.rotation.z=se*Math.PI/2,Me.position.set(Math.sin(se*Math.PI/2)*.077,Math.cos(se*Math.PI/2)*.077,.041)}const V=[];for(let se=0;se<5;se++)V.push(ee(U,"Extractor louver",[.39,.043,.02],[0,-.15+se*.074,.07],h));const W=hy({world:i,parent:l,camera:e,story:t,sound:n,narrative:r,emit:s,colliders:o,changed:a}),j={root:l,targets:[...T,...W.targets],changes:W,door:()=>W.openDoor(),restore:()=>W.restore(),finish:()=>W.finish(),rehearsal:se=>W.rehearsal(se),available(se){return se==="listen_pipe"?t.powerOut&&!t.wallOpen:se==="house_door"?!t.houseDoorOpen:!0},stove(){t.stoveLit=!t.stoveLit,n.tone(135,.08,.03,"square"),n.effect("breaker",.16),s("changed")},listen(){if(j.available("listen_pipe")){if(e.position.distanceTo(g)>2.1){s("hint","再靠近水管一点。");return}p=!p,k.userData.prompt=p?"离开水管":"靠近水管，听一会儿"}},setArtMode(se){y=!!se,l.visible=!y,W.setArtMode(y)},get flashlightPower(){return t.powerOut?AM(t.battery):1},update(se,{active:Me=!0,flashlight:je=!1,phoneAvailable:Ke=!0,allowCapture:Xe=!0,ended:K=!1}={}){if(y)return;if(!Me){n.quietRoomSources();return}m+=se,e.position.distanceTo(g)>2.1&&(p=!1);const le=K?[]:RM(t,se,{active:Me,flashlight:je,phoneAvailable:Ke,listeningPipe:p,listeningWall:!t.wallOpen&&A(_,.9,2.8)});for(const G of le)G==="reserve-mode"&&s("hint","屏幕只剩 18%。厨房的灶台旁传来水管声。"),G==="battery-low"&&s("hint","照明开始变暗。最后一点电留给电话和近处的路。"),G==="pipe-heard"&&(p=!1,k.userData.prompt="再听一遍水管"),G==="wall-located"&&n.effect("paper",.7,-.6),s("changed");W.update(se,{allowChanges:Xe,ended:K});const be=t.breathSeconds>0&&!t.ritualComplete&&t.ritual!=="given"&&!K;x=kt.damp(x,be?TM(t.breathSeconds):0,5,se),r.houseBreath(x,be),w=kt.damp(w,t.stoveLit&&!K?1:0,5,se),v.visible=w>.01,v.material.opacity=w*(.67+.025*Math.sin(m*9)),O.intensity=w*2.8*(1-.045*x),b.rotation.y=w*1.2,L.userData.prompt=t.stoveLit?"关掉灶火":"转动旋钮，点亮灶火",B.rotation.z+=se*(be?.24+x*1.25:.17);for(const G of V)G.rotation.x=x*.12;Z.material.opacity=t.wallOpen?0:t.wallLocated?.5:t.pipeHeard?.18:0;const Ve=e.position.y>-.6&&e.position.x>-7&&e.position.x<10&&e.position.z<4.8,Se=!K&&Ve?1:0;n.locateListener(e.position,e.getWorldDirection(d));const J=p&&!t.pipeHeard?t.pipeSeconds%2:m%5,ge=J<.22||J>.47&&J<.69?Math.sin((J<.22?J:J-.47)/.22*Math.PI)**2:0,I=t.powerOut&&!t.wallOpen&&!t.wallLocated,Pe=t.pipeHeard?2:Math.min(2,Math.floor(t.pipeSeconds/2));[[6.88,1.7,-2.7],[4.6,2.64,-2.7],[-5.64,1.4,.5]].forEach((G,ve)=>n.roomSource(`pipe-${ve}`,G,I&&Pe===ve?Se*ge*.16:0,175+ve*32,8));const H=n.voiceBusy?.45:1;n.roomSource("house-pipes",[6.88,2,-2.7],Se*x*.065*H,190,1.2),n.roomSource("house-extractor",[7.95,2.39,-2.65],Se*x*.045*H,740,.65),n.roomSource("house-next-tv",[-4.9,1.3,6.9],Se*x*.07*H,390,.9),n.roomSource("gas-hiss",[8.45,1.1,-2.25],Se*w*.017,2100,.4)}};return j}async function fy(i){if(!i||!["image/jpeg","image/png","image/webp"].includes(i.type)||i.size>8*1024*1024)throw new Error("请选择 8 MB 以内的 JPG、PNG 或 WebP 正面照片。");const e=URL.createObjectURL(i);try{const t=new Image;t.src=e,await t.decode();const n=document.createElement("canvas");n.width=192,n.height=240;const r=n.getContext("2d"),s=Math.min(t.naturalWidth,t.naturalHeight*.8),o=s/.8;return r.drawImage(t,(t.naturalWidth-s)/2,(t.naturalHeight-o)/2,s,o,0,0,192,240),n.toDataURL("image/jpeg",.8)}catch{throw new Error("这张照片无法读取，请换一张。")}finally{URL.revokeObjectURL(e)}}function py(i,e,t){const n={x:i.x+e.x,y:i.y,z:i.z+e.z};return n.y+=t(n)-t(i),n}const Re=i=>document.querySelector(i),Ya=new URLSearchParams(location.search),Ka=Pu+"",ja=[()=>sessionStorage,()=>localStorage],gi=ty(ja,Ka),Td=Ya.get("view"),Qt=pM({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,userAgentMobile:navigator.userAgentData?.mobile,coarsePointer:matchMedia("(pointer: coarse)").matches,hoverNone:matchMedia("(hover: none)").matches,override:Ya.get("touch")});let Of;try{Of=localStorage.getItem("third-place-quality")}catch{}let hn=wf(Ya.get("quality")||Of||(Qt?"smooth":"quality"),Qt);document.body.classList.toggle("touch-device",Qt);document.body.dataset.inputMode=Qt?"touch":"desktop";Re("#ritual-input-hint").textContent=Qt?"持续按住这里，抓牢碗":"持续按住 E，抓牢碗";let At=["dining","bathroom","hallway","stairs"].includes(Td)?Td:null;const Fe={game:Re("#game"),title:Re("#title-screen"),start:Re("#start-button"),loading:Re("#loading-screen"),loadingFill:Re("#loading-fill"),loadingLabel:Re("#loading-label"),hud:Re("#hud"),chapterNumber:Re("#chapter-number"),chapterTitle:Re("#chapter-title"),clock:Re("#clock-time"),objective:Re("#objective-text"),prompt:Re("#interaction-prompt"),promptText:Re("#interaction-prompt span"),crosshair:Re("#crosshair"),flashlight:Re("#flashlight-state"),subtitle:Re("#subtitle"),pause:Re("#pause-hint"),modal:Re("#modal"),modalCard:Re("#modal-card"),modalKicker:Re("#modal-kicker"),modalTitle:Re("#modal-title"),modalBody:Re("#modal-body"),modalActions:Re("#modal-actions"),peephole:Re("#peephole"),lookAway:Re("#look-away"),lookAwayFill:Re("#look-away i"),damage:Re("#damage-flash"),timer:Re("#timer"),timerValue:Re("#timer-value"),ending:Re("#ending"),endingCode:Re("#ending-code"),endingTitle:Re("#ending-title"),endingBody:Re("#ending-body"),restart:Re("#restart-button")},Le=Cf();Le.familyEcho=gi.wallSeen;Le.familyPortrait=gi.portrait||"";const Du=ny+"";let _i=null;try{_i=iy(sessionStorage.getItem(Du))}catch{}const Mo=Ya.get("continue")==="2350"&&_i&&!At;Mo&&Object.assign(Le,structuredClone(_i.story));const te={loaded:!1,started:!1,paused:!1,pointerLocked:!1,modalOpen:!1,entered:!1,note:!1,table:!1,mirror:!1,rules:!1,tape:!1,peephole:!1,wall:!1,bowlTouched:!1,finalPhase:!1,finalChoice:null,ended:!1,gameMinutes:1337,countdown:78,danger:0,qHeld:!1},Cn=new Sm;Cn.background=new it(329735);Cn.fog=new hu(593424,.014);const at=new dn(67,innerWidth/innerHeight,.05,85);at.rotation.order="YXZ";const Gt=new l1({antialias:!0,powerPreference:"high-performance"});let Cr=Ef(innerWidth,innerHeight,devicePixelRatio,hn);Gt.setPixelRatio(Cr);Gt.setSize(innerWidth,innerHeight);Gt.outputColorSpace=Nt;Gt.toneMapping=eu;Gt.toneMappingExposure=.66;Gt.shadowMap.enabled=!0;Gt.shadowMap.type=Qc;Fe.game.appendChild(Gt.domElement);const lr=new $1(Gt);lr.setPixelRatio(Cr);lr.addPass(new Z1(Cn,at));const Ls=new tr(Cn,at,innerWidth,innerHeight);Ls.kernelRadius=5;Ls.minDistance=.0015;Ls.maxDistance=.065;Ls.enabled=hn.ambientOcclusion;lr.addPass(Ls);lr.addPass(new ys(new Oe(innerWidth,innerHeight),.16,.42,1.12));lr.addPass(dM());Cn.add(new ug(9411994,3156254,.12));const Ff=new nn(10008748,1.8,9,2);Ff.position.set(0,2.4,5.6);Cn.add(Ff);const qt=new Va(13820127,18,13,.51,.78,2);qt.position.set(.13,-.08,.02);qt.castShadow=!0;qt.shadow.mapSize.set(hn.flashlightSize,hn.flashlightSize);qt.shadow.bias=-15e-5;qt.shadow.radius=4;qt.target.position.set(0,-.06,-6);const $a=document.createElement("canvas");$a.width=256;$a.height=256;const Iu=$a.getContext("2d"),yo=Iu.createRadialGradient(128,128,8,128,128,124);yo.addColorStop(0,"rgba(255,255,242,1)");yo.addColorStop(.52,"rgba(222,235,218,.84)");yo.addColorStop(.78,"rgba(158,181,162,.28)");yo.addColorStop(1,"rgba(0,0,0,0)");Iu.fillStyle=yo;Iu.fillRect(0,0,256,256);qt.map=new Ts($a);at.add(qt,qt.target);Cn.add(at);let zn=!0;const Di=new Set,Kc=new pf;Kc.far=3.4;const my=new Oe(0,0),gy=new ff,sr=new P,Qn=new P,la=new P,ca=new P;let tn=0,mn=0,Za=!1,Kl=0,Ji=0,fi=0,ro=null,pn,jl,ei,Bf=0,_y,vy,bo,Ua,jc,Ge,Vt,Kt,jt,si,oi,Ma=0;const so=[],zi=[],xy=[],Oa=[],Ot=new fM({onSubtitle:(i,e)=>_o(i,e),onStatus:i=>{Re("#audio-status").textContent=i}});function ai(){if(!Qt)try{const i=Gt.domElement.requestPointerLock?.();i?.catch&&i.catch(()=>{})}catch{}}function Zs(i){let e;return pn?.traverse(t=>{!e&&t.name.startsWith(i)&&(e=t)}),e}function Nu(i){return i.userData.prompt||i.name.replace(/^INT_/,"").replaceAll("_"," ")}function ss(){zi.length=0,pn.updateMatrixWorld(!0),pn.traverse(i=>{i.isMesh&&i.userData.collider&&zi.push({object:i,box:new sn().setFromObject(i)})})}function My(){return new Promise((i,e)=>{new u1().load("./models/third_place.glb",async n=>{try{Fe.loadingFill.style.width="78%",Fe.loadingLabel.textContent="正在整理房间……",await new Promise(s=>setTimeout(s,0)),pn=n.scene,Cn.add(pn),pn.traverse(s=>{if(s.isMesh&&(s.castShadow=s.userData.cast_shadow!==!1,/filament_bulb|tungsten_bulb|fluorescent_tube/i.test(s.name)&&(s.castShadow=!1),s.receiveShadow=s.userData.receive_shadow!==!1,s.material?.map&&(s.material.map.colorSpace=Nt,s.material.map.anisotropy=Math.min(8,Gt.capabilities.getMaxAnisotropy()))),s.userData.start_hidden&&(s.visible=!1,xy.push(s)),(s.userData.interaction||s.name.startsWith("INT_"))&&so.push(s),s.isLight){if(/HALL_FLUOR/i.test(s.name)?s.intensity=34:/DINING/i.test(s.name)?s.intensity=12:/BATHROOM/i.test(s.name)?s.intensity=4.5:/WINDOW_COOL/i.test(s.name)?s.intensity=3:/STAIR_COLD/i.test(s.name)?s.intensity=5:/STAIR_WARM/i.test(s.name)?s.intensity=6:/KITCHEN/i.test(s.name)?s.intensity=16:s.intensity=12,s.distance=/HALL/i.test(s.name)?5.8:8,s.decay=2,/DINING|BATHROOM|STAIR|HALL/i.test(s.name)){s.castShadow=!0;const o=Math.min(512,hn.shadowSize);s.shadow.mapSize.set(o,o),s.shadow.bias=-3e-4,s.shadow.normalBias=.018,s.shadow.radius=4,s.shadow.autoUpdate=!1,s.shadow.needsUpdate=!0}s.userData.baseIntensity=s.intensity}}),jl=Zs("SPAWN_START"),ei=Zs("INT_DOOR_502"),_y=Zs("INT_WALL_SEAL"),vy=Zs("EVENT_WALL_BRICKS"),ei&&(Bf=ei.rotation.y),Fe.loadingLabel.textContent="正在冲洗那张不该存在的照片……";const r=await zM();Ge=qM({world:pn,scene:Cn,camera:at,renderer:Gt,story:Le,sound:Ot,presenceArt:r,echoPortrait:Le.familyPortrait,emit:wr,view(){tn=at.rotation.y,mn=at.rotation.x,sr.set(0,0,0)},collidersChanged:ss}),Vt=ey({world:pn,camera:at,story:Le,sound:Ot,changed:ss,emit:wr,colliders:()=>zi}),Kt=oy({world:pn,camera:at,story:Le,sound:Ot,changed:ss,emit:wr}),jt=ly({world:pn,camera:at,story:Le,sound:Ot,changed:ss,emit:wr}),si=cy({story:Le,camera:at,sound:Ot,narrative:Ge,emit:wr,gameTime:()=>`${String(Math.floor(te.gameMinutes/60)%24).padStart(2,"0")}:${String(te.gameMinutes%60).padStart(2,"0")}`,canOpen:()=>!te.ended&&li()&&!Kt?.seated&&!jt?.scoping&&!At,dial:qf}),oi=dy({world:pn,camera:at,story:Le,sound:Ot,narrative:Ge,emit:wr,colliders:()=>zi,changed:ss}),so.length=0,pn.traverse(s=>{s.userData.interaction&&so.push(s)}),ss(),jl?jl.getWorldPosition(at.position):at.position.set(0,1.65,6.7),at.position.y=1.65,tn=0,mn=-.02;for(const[s,o,a,l]of[[[1.65,1.35,.25],11903615,1.7,5.2],[[3.8,1.4,-5.4],9349799,1.6,3.5]]){const c=new nn(o,a,l,2);c.position.fromArray(s),Cn.add(c)}jc=nM(pn),Ua=lM(Cn,pn,hn),bo=uM(Cn,pn,Gt,hn,Ua),Ru(pn),Qt&&ky(),At&&Uu(At),Mo&&(Ge.restoreCheckpoint(),oi.restore()),Fe.loadingFill.style.width="92%",Fe.loadingLabel.textContent="正在点亮楼道……",await new Promise(s=>setTimeout(s,0)),await Ge.prewarmEndings(),await Gt.compileAsync(Cn,at),te.loaded=!0,Fe.loadingFill.style.width="100%",Fe.loadingLabel.textContent="门没有锁。",i()}catch(r){e(r)}},n=>{const r=n.total?Math.min(.76,n.loaded/n.total*.76):Math.min(.7,n.loaded/34e6*.76);Fe.loadingFill.style.width=`${Math.round(r*100)}%`,Fe.loadingLabel.textContent=`正在载入 5 栋…… ${(n.loaded/1048576).toFixed(1)} MB`},e)})}let kf;const yy=My().catch(i=>{console.error(i),kf=i});function by(){if(te.started=!0,document.body.classList.add("is-playing"),Fe.loading.classList.remove("is-visible"),Fe.hud.classList.remove("is-hidden"),Fe.hud.setAttribute("aria-hidden","false"),Ot.start(),ku(),At||ai(),document.pointerLockElement||Fe.pause.classList.add("is-hidden"),At){document.body.classList.add("art-review"),Re("#art-toolbar").classList.remove("is-hidden"),Uu(At);return}if(Ou("打开 502 的门"),nr("第一幕","回家"),Zt(),Mo){$c(_i.choice);return}{Kt.begin(),Zt();return}}Fe.start.addEventListener("click",async()=>{if(!te.started){if(Fe.title.classList.remove("is-visible"),Fe.loading.classList.add("is-visible"),Ot.start(),Ja(),At||ai(),await yy,kf){Fe.loadingLabel.textContent="场景载入失败，请检查网络后重试。",Re("#loading-retry").classList.remove("is-hidden");return}setTimeout(by,450)}});function Uu(i){At=i,Ge?.setArtMode(!0),Vt?.setArtMode(!0),Kt?.setArtMode(!0),jt?.setArtMode(!0),oi?.setArtMode(!0);const t={dining:{position:[3.45,1.58,3.95],target:[2.9,1.14,-.3],fov:49,label:"饭厅 · 第三副碗"},bathroom:{position:[3.83,1.52,-4.16],target:[3.85,1.5,-6.86],fov:55,label:"盥洗室 · 回来就好"},hallway:{position:[-4.7,1.65,6.6],target:[1,1.6,4.8],fov:58,label:"旧楼 · 502 门外"},stairs:{position:[-6.63,1.55,6.22],target:[-10.9,2.67,6.1],fov:59,label:"楼梯间 · 灯慢了半拍"}}[i];at.position.fromArray(t.position),at.fov=t.fov,at.lookAt(new P(...t.target)),tn=at.rotation.y,mn=at.rotation.x,at.updateProjectionMatrix(),sr.set(0,0,0),Re("#art-view-name").textContent=t.label,Re("#art-toolbar > span").textContent=i==="stairs"?"拖动查看 · F 手电 · 下方切换场景":"拖动查看 · WASD 移动 · F 手电 · Esc 释放鼠标",Re("#art-toolbar").querySelectorAll("[data-view]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.view===i))}),zn=i!=="bathroom"&&i!=="stairs",qt.visible=zn,qt.target.position.set(0,i==="dining"?-2.1:-.06,-6),qt.intensity=i==="dining"?22:18,Fe.flashlight.classList.toggle("on",zn),bo?.invalidate()}Re("#art-toolbar").addEventListener("click",i=>{const e=i.target.closest("[data-view]");e&&Uu(e.dataset.view)});At&&(Fe.start.textContent="查看新版场景",Re(".tagline").innerHTML="美术重制 · 实时 3D 场景<br />饭厅 / 盥洗室 / 旧楼道");function zf(){const i=new URL(location.href);i.searchParams.set("continue","2350"),i.searchParams.delete("rehearsal"),location.href=i.href}Fe.restart.addEventListener("click",()=>{const i=new URL(location.href);i.searchParams.delete("continue"),i.searchParams.delete("rehearsal");try{sessionStorage.removeItem(Du)}catch{}location.href=i.href});let ya=0;Re("#ending-portrait").addEventListener("change",async i=>{const e=i.target.files?.[0];if(!e)return;const t=++ya;Fe.restart.disabled=!0,Re("#portrait-status").textContent="正在冲洗照片……";try{const n=await fy(e);if(t!==ya)return;gi.portrait=n;const r=Lu(gi,ja,Ka);Re("#portrait-preview").src=n,Re("#portrait-preview").classList.remove("is-hidden"),Re("#portrait-status").textContent=r?"这张脸会留在下次回家的全家福里。照片只保存在此浏览器。":"浏览器无法保存照片。重新开局可能无法保留。"}catch(n){Re("#portrait-status").textContent=n.message}finally{t===ya&&(Fe.restart.disabled=!1)}});Re("#remove-portrait").addEventListener("click",()=>{ya++,Fe.restart.disabled=!1,gi.portrait=null,Lu(gi,ja,Ka),Re("#ending-portrait").value="",Re("#portrait-preview").removeAttribute("src"),Re("#portrait-preview").classList.add("is-hidden"),Re("#portrait-status").textContent="下次回家会使用原来的第四张脸。"});Re("#retry-checkpoint").addEventListener("click",zf);Re("#continue-checkpoint").addEventListener("click",zf);Re("#continue-checkpoint").classList.toggle("is-hidden",!_i||!!Mo||!!At);Mo&&(Fe.start.textContent="继续 23:50 的逃离");function Ou(i){Fe.objective.animate([{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"none"}],{duration:420}),Fe.objective.textContent=i}function nr(i,e){Fe.chapterNumber.textContent=i,Fe.chapterTitle.textContent=e}function ba(i,e){te.gameMinutes=Math.max(te.gameMinutes,i*60+e),Ir()}function Hi(i){te.gameMinutes=Math.min(1438,te.gameMinutes+i),Ir()}function Ir(){const i=Math.floor(te.gameMinutes/60)%24,e=te.gameMinutes%60;Fe.clock.textContent=`${String(i).padStart(2,"0")}:${String(e).padStart(2,"0")}`}let Hf=0;function _o(i,e=2800){Fe.subtitle.textContent=i,Fe.subtitle.classList.add("visible"),Hf=Ma+e/1e3}function Nr({kicker:i="发现",title:e,body:t,dark:n=!1,actions:r=[{label:"收好"}]}){te.modalOpen=!0,Nn(),document.exitPointerLock?.(),Fe.modalKicker.textContent=i,Fe.modalTitle.textContent=e,Fe.modalBody.innerHTML=t,Fe.modalCard.classList.toggle("dark",n),Fe.modalActions.replaceChildren(),r.forEach(s=>{const o=document.createElement("button");o.textContent=s.label,s.danger&&o.classList.add("danger"),o.addEventListener("click",()=>{s.onSelect&&s.onSelect(),s.close!==!1&&Sy()}),Fe.modalActions.appendChild(o)}),Fe.modal.classList.remove("is-hidden")}function Sy(){Fe.modal.classList.add("is-hidden"),te.modalOpen=!1,(!te.ended||Ge?.playableEnding)&&ai()}function Ad(){return Cu(Le)}function Fu(){if(te.ended)return;let i;Kt?.active?i=Kt.objective:te.outside?i=te.gameMinutes===1440?"十二点了。再拨一次妈妈的电话":"502 的窗子还亮着":te.finalPhase||Vt?.active?i=Vt.objective:Le.discovered.includes("entered")?Le.discovered.includes("note")?Le.bagOpened&&!Le.drawerKey?i="包的夹层打开了，收起里面标着“床头柜”的钥匙":Le.discovered.includes("drawer-checked")&&!Le.drawerKey?i="床头柜锁着；小钥匙在沙发上妈妈的包里":Le.drawerKey&&!Le.drawerUnlocked?i="去妈妈卧室，用小钥匙打开床头柜抽屉":Le.drawerUnlocked&&!Le.discovered.includes("messages")?i="抽屉里有妈妈的手机，查看三条未发送短信":Le.discovered.includes("table")?Le.discovered.includes("mirror")?Ad()<mo.length?i=`搜屋：家规、磁带、户口本、短信、对门与阳台（${Ad()} / ${mo.length}）`:Le.powerOut&&!Le.pipeHeard&&!Le.wallOpen?i="厨房水管在响，靠近听一会儿；灶火可以照亮台面":Le.powerOut&&!Le.wallLocated&&!Le.wallOpen?i="沿着敲击声找过去，靠近那块新墙纸":!Le.wallOpen&&!Le.tools.includes("scraper")?i="厨房里有一把铲刀":!Le.wallOpen&&!Le.tools.includes("alcohol")?i="找找母亲床边的工业酒精":Le.wallOpen?Le.letter?Le.bowl==="washing"?i="洗掉第三副碗里的汤":Le.bowl==="clean"?i="把水槽旁洗净的碗倒扣":["inverted","held-inverted"].includes(Le.bowl)?Le.tools.includes("medicine")?Le.sealDrawn?Le.bowl!=="held-inverted"?i="拿起厨房里倒扣的碗":i="把倒扣的碗对准墙上的小镜子":i="用药瓶里的朱砂，在墙上画封":i="妈妈的药瓶里藏着封墙的朱砂":i=Le.bowl==="held-dirty"?"把第三副碗带到厨房水龙头下":"拿起第三副碗，带到厨房洗净":i="取下墙里没写完的信，翻看背面":i="用铲刀和酒精揭开新墙纸":i="卫生间里，水声停了":i="看看第三副碗":i="找找妈妈留下的东西":i="打开 502 的门",Fe.objective.textContent!==i&&Ou(i)}function Zt(){for(const t of["entered","note","table","mirror","rules","tape"])te[t]=Le.discovered.includes(t);te.wall=Le.wallOpen,te.bowlTouched=Le.bowlTouched,te.ateDumplings=Le.dumplings==="eaten";const i={scraper:"铲刀",alcohol:"工业酒精",medicine:"妈妈的药瓶"},e=Le.tools.map(t=>i[t]);Le.drawerKey&&e.push("床头柜钥匙"),Le.bowl.startsWith("held")&&!Le.ritualComplete&&e.push(Le.bowl==="held-inverted"?"洗净倒扣的碗":"第三副碗"),Le.dumplings==="kept"&&e.push("饺子放在玄关"),Re("#inventory-note").textContent=e.length?e.join(" · "):"",Fu()}function wr(i,e){if(i==="ending-document"){Nr(e);return}if(i==="morning-objective"){Ou(e);return}if(i==="morning-leave"){Ge.leaveMorning();return}if(i==="ending-table"){Nn(),document.exitPointerLock?.(),Fe.hud.classList.add("is-hidden"),document.body.classList.remove("ending-morning");return}if(i==="ending-time-reset"){te.gameMinutes=1337,Ir(),_o("通话记录上的时间，又回到了 22:17。",4500);return}if(i==="view"){tn=at.rotation.y,mn=at.rotation.x,sr.set(0,0,0);return}if(i==="phone-open"){te.modalOpen=!0,Nn(),document.exitPointerLock?.(),Fe.pause.classList.add("is-hidden");return}if(i==="phone-close"){te.modalOpen=!1,ai();return}if(i==="scope-open"){Nn(),qt.visible=!1,ai();return}if(i==="scope-close"){Nn(),qt.visible=zn&&rr(Le),ai();return}if(i==="phone-collected"){si?.collected();return}if(i==="phone-recovered"){si?.recovered(),qt.visible=zn;return}if(i==="balcony-complete"){Ge?.checkpointClues(),Zt();return}if(i==="wash-echo"){ba(23,47),nr("第四幕","入席"),qt.visible=!1;return}if(i==="outside"){te.outside=!0,te.finalPhase=!1,Fe.lookAway.classList.add("is-hidden"),Fe.prompt.classList.remove("visible"),nr("第五幕","楼外"),wr("view"),Zt();return}if(i==="midnight"){te.gameMinutes=1440,Ir(),Zt(),Ot.tone(425,.14,.035);return}if(i==="looked-back"){te.lookedBack=!0;return}if(i==="hint")return _o(e,3500);if(i==="changed"){Zt(),Ge?.checkpointClues();return}if(i==="mirror-complete"){Hi(7),nr("第二幕","家规"),Zt();return}if(i==="blackout"){ba(23,11),nr("第三幕","墙里"),Zt();return}if(i==="wall-opened"){ba(23,20),nr("第三幕","墙里"),si?.wallOpened(),Zt();return}if(i==="peephole-enter"){Nn(),fi=0,Fe.peephole.classList.remove("is-hidden"),Fe.peephole.classList.add("world-peephole");return}if(i==="peephole-exit"){Fe.peephole.classList.add("is-hidden"),Zt();return}if(i==="ate-dumplings"){Hi(10),Zt();return}if(i==="ritual-ready"){Nn(),document.exitPointerLock?.(),Re("#ritual-grip").classList.remove("is-hidden");return}if(i==="ritual-progress"){Re("#ritual-grip i").style.transform=`scaleX(${e})`;return}if(i==="ritual-finished"){Re("#ritual-grip").classList.add("is-hidden");return}if(i==="sealed"){$c("seal");return}if(i==="admitted"){(Le.bowl==="served"||Le.ritual==="given"||Le.ritualComplete)&&$c("admit"),Zt();return}if(i==="ending"){Bu(e);return}if(i==="ending-title"){te.endingPresented=!0,Nn(),document.exitPointerLock?.(),Fe.ending.classList.add("is-visible");return}}function wy(){te.entered||(It(Le,"entered"),Hi(3),Ot.effect("chair",.6)),fi=fi>.5?0:1,fi===1&&Ge.doorOpened(),Ot.effect("wood",.45),Zt()}function Ey(){It(Le,"note")&&Hi(5),Nr({kicker:"妈妈的字条",title:"晚晚，如果你看到这个",body:'<p>说明我没能把第三副收走。</p><p class="red">别盛汤。别应。<br />十二点前走。</p><p class="faded">抽屉的小钥匙，还在包的夹层里。</p>',actions:[{label:"收好字条"}]}),Zt()}function Ty(){Le.discovered.includes("table")||Hi(4),Ge.table(),Zt()}function Ay(){Ge.mirror()}function Vf(i="front"){const e=()=>{const n=Le.discovered.includes("rules");xo(Le,"read-rules-side",i),!n&&Le.discovered.includes("rules")&&Hi(6),Zt(),Ge.checkpointClues()},t=i==="front";Ge.search.showRulesSide(i),Nr({kicker:`1987 年住户须知 · ${t?"正面":"背面"}`,title:t?"第五幢住户须知":"入住家规",body:t?'<p class="faded">南街新村 · 1987 年 6 月<br />油印件，折痕处已经透光。</p><span class="rule">入住后，请核对册内登记人数。</span><span class="rule">楼道保持畅通，不得私改公用水管。</span><span class="rule">夜间听见异响，先检查门窗，勿擅自凿墙。</span><p>纸背面透出几行手写字，墨色深浅不一。</p>':'<span class="rule">一、家里只准承认两口活人。</span><span class="rule">二、第三口只能在墙里。</span><span class="rule">三、不能摆碗，不能叫它，不能看它的脸。</span><span class="rule">四、听见有人叫乳名，不要应。</span><p class="faded">前几行已经褪成褐色，最后一句却像刚写上去。</p><p class="red">血回来的那天，它会要座位。</p>',actions:[{label:t?"翻到背面，看妈妈的字":"翻回正面",close:!1,onSelect:()=>{e(),Vf(t?"back":"front")}},{label:"把须知放回冰箱",onSelect:e}]})}function Ry(){Ge.uncoverBook(()=>{It(Le,"household")&&Hi(6),Nr({kicker:"户口登记 · 复印件",title:"林建平",body:'<p>户主：林秀珍。<br />与户主关系：配偶。</p><p class="red"><s>失踪</s>　离异迁出</p><p>子女：林晚。迁出时年龄：九岁。</p><p class="faded">父亲那一栏被红笔圈过，又重重涂掉。</p>',actions:[{label:"放回枕头下面"}]}),Zt(),Ge.checkpointClues()})}const qs=[{date:"七年前 · 11 月 16 日",text:"晚晚，今晚别回来住，家里有人。",after:"未发送"},{date:"三年前 · 除夕",text:"妈不是不让你回家。听见有人叫你，别答应。我们家只有两个人。",after:"未发送"},{date:"今天 · 22:08",text:"墙又湿了。我怕这次撑不到天亮。晚晚，如果电话打通了，你一定听妈妈的。",after:"未发送"}];function Gf(i=0){if(!Ge.available("messages"))return;const e=qs[i];Nr({kicker:`妈妈的手机 · 草稿 ${i+1} / ${qs.length}`,title:e.date,body:`<p>${e.text}</p><p class="red">${e.after} · 收件人：晚晚</p>`,actions:[{label:i+1<qs.length?"下一条":"放下手机",close:i+1===qs.length,onSelect:()=>{const t=Le.discovered.includes("messages");xo(Le,"message",i),!t&&Le.discovered.includes("messages")&&Hi(4),Zt(),Ge.checkpointClues(),i+1<qs.length&&Gf(i+1)}}]})}let Ys=!1;function Wf(i=!1){if(!i&&!Le.discovered.includes("tape-found"))return Ge.uncoverTape(()=>Wf(!0));const e=Zs("INT_TAPE");if(Ys){Ys=!1,Ot.stopVoice(),e.userData.prompt="播放九岁生日磁带",Ge.setTapePlaying?.(!1);return}Ys=!0,e.userData.prompt="按停磁带",Ge.setTapePlaying?.(!0),Ot.playSequence(["father-tape","stranger-return"],{delay:.25,gap:2,onCancel(){Ys=!1,e.userData.prompt="重新播放九岁生日磁带",Ge.setTapePlaying(!1)},onComplete(){Ys=!1,e.userData.prompt="重听九岁生日磁带",Ge.setTapePlaying?.(!1),It(Le,"tape")&&Hi(8),Zt(),Ge.checkpointClues()}})}function Cy(){Ge.peephole()}function Py(){Ge.neighbor()}function Ly(){Ge.openWall()}function Xf(i=!1){Nr(i?{kicker:"墙里的信 · 背面",title:"封回",body:'<p>一、洗净第三副碗筷，倒扣。</p><p>二、药瓶里不是药，是朱砂和你爸爸的头发。在墙上重新画封。</p><p>三、把倒扣的碗对着墙上的小镜子。碗被镜面吸住的时候，抓牢，别给它。</p><p class="red">午夜前离开，不要回头。</p>',actions:[{label:"收好这封信",onSelect:()=>{xo(Le,"read-letter"),Zt()}}]}:{kicker:"墙里的信 · 正面",title:"不是你爸回来了",body:'<p>是这房子一直要把他留下。</p><p>我把它按在墙里十九年，用我不叫它的名字，用不给它盛饭。</p><p>你一进门，它就认出你了。你是钥匙。</p><p class="red">晚晚，求你，今晚装作家里只有我们两个。</p><p>如果它坐下来——</p>',actions:[{label:"翻到背面",close:!1,onSelect:()=>Xf(!0)}]})}function Dy(){Ge.takeBowl()}function $c(i){if(!(te.finalPhase||te.ended)){te.finalChoice=i,te.finalPhase=!0,Vt.begin(),te.countdown=Le.dumplings==="eaten"?360:420,te.finaleDuration=te.countdown,ba(23,50),te.finaleStartMinute=te.gameMinutes,_i=Nf(Le,i),te.checkpointThisRun=!!_i;try{_i&&sessionStorage.setItem(Du,JSON.stringify(_i))}catch{}nr("第四幕","入席"),Fe.timer.classList.add("is-hidden"),i==="seal"&&Ot.playVoice("mother-run"),Fu(),ai()}}function qf(){if(!te.ended&&!(!li()||At)){if(!rr(Le)){_o("口袋里没有手机。",2500);return}if(Da(Le,{outside:te.outside,atMidnight:te.gameMinutes===1440})){Bu("empty");return}Ot.tone(425,.16,.035),Ot.tone(425,.16,.035,"sine",.37),Ot.playVoice("phone-disconnected",{delay:.85})}}function Iy(){if(Vt.progress.bolt!=="open"){Vt.unbolt();return}Vt.leave({beforeMidnight:!te.finalPhase||te.countdown>0,lookedBack:te.lookedBack})}function Bu(i){if(!te.ended){if(te.ended=!0,te.finalPhase=!1,(i==="two"||i==="seat")&&(te.gameMinutes=486,Ir()),te.endingType=i,Nn(),Ot.stopVoice(),document.exitPointerLock?.(),qt.visible=!1,Cn.children.filter(e=>e.isHemisphereLight).forEach(e=>{e.intensity=i==="two"?.55:.24}),Fe.hud.classList.add("is-hidden"),Fe.pause.classList.add("is-hidden"),Fe.lookAway.classList.add("is-hidden"),Re("#ritual-grip").classList.add("is-hidden"),Re("#ending").classList.toggle("wall-ending",i==="wall"),document.body.classList.toggle("ending-in-world",i!=="wall"),i==="wall"&&Re("#ending-blackout").classList.remove("is-hidden"),Fe.endingCode.textContent={two:"结局 A",seat:"结局 B",wall:"结局 C",empty:"隐藏结局 D"}[i],Fe.endingTitle.textContent={two:"两口人",seat:"入席",wall:"三口都在墙里",empty:"空号"}[i],Fe.endingBody.textContent={two:"第三副的位置，只剩一圈干掉的汤渍。",seat:"你终于坐到了自己的位置上。",wall:"“你再回来，就四口了。”",empty:"“吃吧。别等她了。”"}[i],Re("#retry-checkpoint").classList.toggle("is-hidden",!_i||!te.checkpointThisRun),Re("#ending-memory").classList.toggle("is-hidden",i!=="wall"),i==="wall"){gi.wallSeen=!0;const e=Lu(gi,ja,Ka);Re("#portrait-status").textContent=e?"下次回家，相框里会多一个人。可以留下一张自己的正面照片。":"浏览器无法保存周目变化，请允许此站点使用本地存储后再回去。",gi.portrait&&(Re("#portrait-preview").src=gi.portrait,Re("#portrait-preview").classList.remove("is-hidden"))}document.body.classList.toggle("ending-morning",i==="two"),i==="two"&&(Fe.hud.classList.remove("is-hidden"),nr("第五幕","次日 · 宾馆")),oi?.finish(),Ge.prepareEnding(i),Ge.playableEnding&&ai()}}function Yf(i){if(!i||!li()||At)return;const e=i.userData.interaction;if(!Qa(i))return;({family_photo:()=>Ge.inspectFamily(),morning_phone:()=>Ge.morning("morning_phone"),morning_receipt:()=>Ge.morning("morning_receipt"),morning_window:()=>Ge.morning("morning_window"),morning_leave:()=>Ge.morning("morning_leave"),gas_stove:()=>oi.stove(),listen_pipe:()=>oi.listen(),house_door:()=>oi.door(),door_502:wy,mother_note:Ey,dining_table:Ty,mirror:Ay,rules:Vf,tape:Wf,peephole:Cy,door_501:Py,wall_seal:Ly,bowl_third:Dy,building_exit:Iy,household:Ry,messages:()=>Gf(),mother_bag:()=>Ge.search.interact("mother_bag"),drawer_key:()=>Ge.search.interact("drawer_key"),mother_drawer:()=>Ge.search.interact("mother_drawer"),stair_entry:()=>Vt.openEntry(),fire_door:()=>Vt.openFire(te.finalPhase),escape_note:()=>Vt.readInstructions(),escape_bolt:()=>Vt.unbolt(),false_exit_0:()=>Vt.falseExit(0),false_exit_1:()=>Vt.falseExit(1),lower_stair_blocked:()=>Kt.inspectLowerGate(),take_scraper:()=>Ge.takeTool("take_scraper"),take_alcohol:()=>Ge.takeTool("take_alcohol"),take_medicine:()=>Ge.takeTool("take_medicine"),kitchen_sink:()=>Ge.wash(),serve_soup:()=>Ge.serve(),deny_third:()=>Ge.denyThird(),dumplings:()=>Ge.dumplings(),discard_dumplings:()=>Ge.discard(),wall_letter:()=>Xf(),draw_seal:()=>Ge.drawSeal(),wall_mirror:()=>Ge.ritual(),bath_switch:()=>Ge.bathSwitch(),answer_wall:()=>Ge.answerWall(),call_father:()=>Ge.callFather(),break_wall:()=>Ge.breakWall(),arrival_phone:()=>Kt.phone(),arrival_car_exit:()=>Kt.exitCar(),arrival_entry:()=>Kt.openEntry(),balcony_door:()=>jt.openDoor(),balcony_curtain:()=>jt.pullCurtain(),balcony_toolbox:()=>jt.openBox(),balcony_binoculars:()=>jt.takeBinoculars(),balcony_view:()=>jt.view(),recover_phone:()=>Ge.recoverPhone()})[e]?.()}function Kf(){if(!te.ended){if(!rr(Le)){_o("口袋里没有手机。",2500);return}zn=!zn,qt.visible=zn&&!Kt?.seated&&!jt?.scoping,Fe.flashlight.classList.toggle("on",zn),Re("#touch-flashlight").setAttribute("aria-pressed",String(zn)),Ot.tone(zn?710:430,.07,.025,"square")}}Re("#phone-status").addEventListener("click",()=>si?.toggle());document.addEventListener("keydown",i=>{if(si?.open){["Escape","KeyP"].includes(i.code)&&(i.preventDefault(),si.close());return}if(jt?.scoping&&["Escape","KeyE"].includes(i.code)){i.preventDefault(),jt.closeScope();return}if(i.code==="Escape"&&te.started&&!te.modalOpen&&!te.endingPresented){Ds(!te.paused);return}if(!(te.paused||bs())){if(i.code==="KeyE"&&Le.ritual==="ready"&&!te.ended){i.preventDefault(),i.repeat||Ge.holdRitual();return}if(!(i.repeat&&i.code!=="KeyQ")){if(Di.add(i.code),li()){const e=jt?.scoping?.16:1;i.code==="ArrowLeft"&&(tn+=.12*e),i.code==="ArrowRight"&&(tn-=.12*e),i.code==="ArrowUp"&&(mn=kt.clamp(mn+.08*e,-1.12,1.05)),i.code==="ArrowDown"&&(mn=kt.clamp(mn-.08*e,-1.12,1.05)),["KeyW","KeyA","KeyS","KeyD"].includes(i.code)&&Fy(i.code)}i.code==="KeyE"&&ro&&!At&&Yf(ro),i.code==="KeyF"&&te.started&&!te.modalOpen&&Kf(),i.code==="KeyR"&&!At&&qf(),i.code==="KeyP"&&!At&&si?.toggle(),i.code==="KeyQ"&&(te.qHeld=!0)}}});document.addEventListener("keyup",i=>{Di.delete(i.code),i.code==="KeyE"&&Le.ritual==="ready"&&Le.holding&&!te.paused&&Ge.releaseRitual(),i.code==="KeyQ"&&(te.qHeld=!1)});document.addEventListener("mousemove",i=>{if(Qt||te.paused||!te.pointerLocked&&!Za||te.modalOpen||te.ended&&!Ge?.playableEnding)return;const e=jt?.scoping?.16:1;tn-=i.movementX*.0018*e,mn-=i.movementY*.00165*e,mn=kt.clamp(mn,-1.12,1.05)});document.addEventListener("pointerlockchange",()=>{te.pointerLocked=document.pointerLockElement===Gt.domElement,Qt||te.paused||!te.started||te.ended||te.modalOpen?Fe.pause.classList.add("is-hidden"):Fe.pause.classList.toggle("is-hidden",te.pointerLocked)});Gt.domElement.addEventListener("click",()=>{!At&&!te.paused&&te.started&&!te.modalOpen&&(!te.ended||Ge?.playableEnding)&&!te.pointerLocked&&ai()});Gt.domElement.addEventListener("pointerdown",i=>{!Qt&&!te.paused&&i.button===0&&te.started&&!te.modalOpen&&(Za=!0)});document.addEventListener("pointerup",()=>{Za=!1});Fe.pause.addEventListener("click",()=>{Fe.pause.classList.add("is-hidden"),ai()});function bs(){return Qt&&innerHeight>innerWidth}function li(){return te.started&&!te.paused&&!te.modalOpen&&(!te.ended||Ge?.playableEnding)&&!document.hidden&&!bs()&&!Ge?.locked&&!Kt?.locked}const Ny=gM(Re("#ritual-grip"),{isActive:()=>Le.ritual==="ready"&&!te.paused&&!te.ended&&!document.hidden&&!bs(),onStart:()=>Ge.holdRitual(),onRelease:()=>Ge.releaseRitual(),onCancel:()=>Ge.releaseRitual(!0)}),Sa=xM({canvas:Gt.domElement,root:Re("#touch-controls"),enabled:Qt,isActive:li,onLook(i,e){const t=jt?.scoping?.16:1;tn-=i*t,mn=kt.clamp(mn-e*t,-1.12,1.05)},onAction(i){i==="flashlight"&&Kf(),i==="phone"&&!At&&si?.toggle()},onHold(){}});function Nn(){Di.clear(),Sa.reset(),te.qHeld=Za=!1;for(const i of Oa)i.gesture.reset();Ny.reset(),Le.ritual==="ready"&&Ge?.releaseRitual(!0),sr.set(0,0,0)}function Ds(i){!te.started||te.endingPresented||(te.paused=i,Nn(),Re("#game-menu").classList.toggle("is-hidden",!i),Fe.pause.classList.add("is-hidden"),i?(document.exitPointerLock?.(),Ot.pause()):(Ot.start(),!At&&(!te.ended||Ge?.playableEnding)&&ai()))}function Ja(){if(Qt)try{document.documentElement.requestFullscreen?.({navigationUI:"hide"})?.then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}}function ku(){document.querySelectorAll("[data-quality]").forEach(i=>{i.setAttribute("aria-pressed",String(i.dataset.quality===hn.mode))}),Re("#performance-label").textContent=`${hn.label} · ${Math.round(innerWidth*Cr)} × ${Math.round(innerHeight*Cr)}`}function jf(){Cr=Ef(innerWidth,innerHeight,devicePixelRatio,hn),at.aspect=innerWidth/innerHeight,at.updateProjectionMatrix(),Gt.setPixelRatio(Cr),Gt.setSize(innerWidth,innerHeight),lr.setPixelRatio(Cr),lr.setSize(innerWidth,innerHeight),bo?.invalidate(),ku()}function Uy(i){hn=wf(i,Qt);try{localStorage.setItem("third-place-quality",hn.mode)}catch{}Ls.enabled=hn.ambientOcclusion,Cn.traverse(e=>{if(!e.isLight||!e.shadow)return;const t=e===qt?hn.flashlightSize:e.isPointLight?Math.min(512,hn.shadowSize):hn.shadowSize;e.shadow.mapSize.set(t,t),e.shadow.map?.dispose(),e.shadow.map=null,e.shadow.needsUpdate=!0}),bo?.setQuality(hn),Ua?.setQuality(hn),jf()}document.querySelectorAll("[data-quality]").forEach(i=>i.addEventListener("click",()=>Uy(i.dataset.quality)));document.querySelectorAll("[data-audio]").forEach(i=>{const e=i.dataset.audio,t=Re(`#${i.id}-value`);i.value=Math.round(Ot.mix[e]*100),t.value=`${i.value}%`,i.addEventListener("input",()=>{Ot.setVolume(e,Number(i.value)/100),t.value=`${i.value}%`})});document.querySelectorAll("[data-audition]").forEach(i=>i.addEventListener("click",()=>{Ot.audition(i.dataset.audition)}));Re("#menu-button").addEventListener("click",()=>Ds(!0));Re("#resume-button").addEventListener("click",()=>{Ja(),Ds(!1)});Re("#fullscreen-button").addEventListener("click",Ja);Re("#loading-retry").addEventListener("click",()=>location.reload());Re("#rotate-fullscreen").addEventListener("click",Ja);document.addEventListener("visibilitychange",()=>{document.hidden&&(Nn(),te.started&&!te.endingPresented&&Ds(!0),Ot.pause())});window.addEventListener("blur",Nn);Gt.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),Nn(),te.started&&Ds(!0),Re("#context-warning").classList.remove("is-hidden")});Re("#context-reload").addEventListener("click",()=>location.reload());ku();function Oy(i){const e=zu(i);return new sn(new P(i.x-.25,e+.14,i.z-.25),new P(i.x+.25,e+1.78,i.z+.25))}function zu(i){return te.ended||At||Vt?.outside?0:Kt?.floorAt(i)??Vt?.floorAt(i)??0}function Zc(i){const e=Oy(i);return zi.some(({object:t,box:n})=>!qa(t)||t.userData.open||t===ei&&Ji>.26?!1:n.intersectsBox(e))}function Fy(i){if(At==="stairs"||Kt?.seated||jt?.scoping)return;const e=new P(-Math.sin(tn),0,-Math.cos(tn)),t=new P(Math.cos(tn),0,-Math.sin(tn)),n=new P;i==="KeyW"&&n.add(e),i==="KeyS"&&n.sub(e),i==="KeyD"&&n.add(t),i==="KeyA"&&n.sub(t),n.multiplyScalar(.12);const r=new P().copy(py(at.position,n,zu));Zc(r)||at.position.copy(r)}function By(i){if(!li())return;if(Kt?.seated||jt?.scoping){at.rotation.set(mn,tn,0);return}Qn.set(0,0,0),ca.set(-Math.sin(tn),0,-Math.cos(tn)),la.set(Math.cos(tn),0,-Math.sin(tn)),Di.has("KeyW")&&Qn.add(ca),Di.has("KeyS")&&Qn.sub(ca),Di.has("KeyD")&&Qn.add(la),Di.has("KeyA")&&Qn.sub(la),Qn.addScaledVector(ca,-Sa.movement.y),Qn.addScaledVector(la,Sa.movement.x),At==="stairs"&&Qn.set(0,0,0),Qn.lengthSq()>1&&Qn.normalize();const e=Qt&&mM(Sa.movement)||Di.has("ShiftLeft")||Di.has("ShiftRight"),t=e?2.65:1.72;Re("#move-stick").classList.toggle("sprinting",e&&Qt),sr.lerp(Qn.multiplyScalar(t),1-Math.exp(-11*i));const n=at.position.clone();n.x+=sr.x*i,Zc(n)||(at.position.x=n.x);const r=at.position.clone();r.z+=sr.z*i,Zc(r)||(at.position.z=r.z);const s=sr.lengthSq()>.06;s&&(Kl+=i*(e?11:7.5));const o=s?Math.sin(Kl)*.018:0,a=At==="bathroom"?1.52:At==="dining"?1.58:At==="stairs"?1.55:1.65,l=zu(at.position);at.position.y=kt.lerp(at.position.y,l+a+o,1-Math.exp(-13*i));const c=te.qHeld&&Vt?.active?-.9:mn;at.rotation.set(kt.lerp(at.rotation.x,c,1-Math.exp(-9*i)),tn,s?Math.sin(Kl*.5)*.005:0)}function Qa(i){const e=i.userData.interaction;return(Ge?.available(e)??!0)&&(Vt?.available(e)??!0)&&(Kt?.available(e)??!0)&&(jt?.available(e)??!0)&&(oi?.available(e)??!0)}function ky(){const i=Re("#interaction-hotspots");for(const e of so){const t=document.createElement("button");t.type="button",t.className="scene-hotspot",t.classList.toggle("hint-below",!!e.userData.hintBelow),t.dataset.interaction=e.userData.interaction,t.textContent=Nu(e),t.hidden=!0;const n=_M(t,{isActive:()=>li()&&!At,onLook(r,s){tn-=r,mn=kt.clamp(mn-s,-1.12,1.05)},onTap(){at.updateMatrixWorld(),!t.hidden&&Qa(e)&&Tf(e,at,zi,innerWidth,innerHeight)&&Yf(e)}});i.appendChild(t),Oa.push({object:e,button:t,gesture:n})}}function zy(){at.updateMatrixWorld();const i=[],e=Oa.map(t=>({...t,point:Qa(t.object)?Tf(t.object,at,zi,innerWidth,innerHeight):null})).sort((t,n)=>{const r=s=>s.point&&s.object.userData.interaction==="bowl_third"?-1:0;return r(t)-r(n)||(t.point?.distance??1/0)-(n.point?.distance??1/0)});for(const{button:t,point:n}of e){const r=n&&n.x<200&&n.y>innerHeight-180,s=n&&i.some(o=>Math.abs(o.x-n.x)<175&&Math.abs(o.y-n.y)<60);t.hidden=!n||r||s||i.length>=3,t.hidden||(t.textContent=Nu(Oa.find(o=>o.button===t).object),t.style.left=`${n.x.toFixed(1)}px`,t.style.top=`${n.y.toFixed(1)}px`,i.push(n))}}function Hy(){if(!li()||At||te.ended&&!Ge?.playableEnding||jt?.scoping){ro=null,Fe.prompt.classList.remove("visible"),Fe.crosshair.classList.remove("active");return}if(Qt){ro=null,Fe.prompt.classList.remove("visible"),zy();return}at.updateMatrixWorld(),Kc.setFromCamera(my,at);const i=Kc.intersectObjects(so,!0);let e=null;for(const t of i){if(t.distance>3.4)continue;const n=yM(t.object,pn);if(n&&Qa(n)&&qa(n)&&Ar(at.position,t.point,n,zi)){e=n;break}}ro=e,Fe.prompt.classList.toggle("visible",!!e),Fe.crosshair.classList.toggle("active",!!e),e&&(Fe.promptText.textContent=Nu(e))}function Vy(i){if(!te.finalPhase||!li())return;te.countdown-=i,te.gameMinutes=Math.min(1440,te.finaleStartMinute+Math.floor((1-Math.max(0,te.countdown)/te.finaleDuration)*(1440-te.finaleStartMinute))),Ir();const e=Math.max(0,Math.ceil(te.countdown));Fe.timerValue.textContent=`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`,te.countdown<=0&&Bu("seat")}function Gy(){const i=Vt?.active&&Vt.inCorridor&&!te.ended;if(Fe.lookAway.classList.toggle("is-hidden",!i),i){const e=Vt.gazePressure;Fe.lookAway.querySelector("span").textContent=e>.3?"相纸在响 · 移开视线，别接着数":Qt?"低头沿绿线前进，听雨声":"按住 Q 低头 · 沿绿线前进，听雨声",Fe.lookAwayFill.style.width=`${Math.round(e*100)}%`}Vt?.active&&!te.ended&&Fu()}let ua=0,Ks=0;function $f(){requestAnimationFrame($f);const i=gy.getDelta();if(Re("#touch-controls").classList.toggle("is-hidden",!Qt||!li()),Re("#interaction-hotspots").classList.toggle("is-hidden",!Qt||!li()||!!At),Re("#ritual-grip").classList.toggle("is-hidden",Le.ritual!=="ready"||te.paused||bs()||te.ended),Re("#menu-button").classList.toggle("is-hidden",!te.started||te.endingPresented||te.modalOpen||te.paused),document.hidden||!te.started||te.paused||bs()){Ks=ua=0,ha=performance.now();return}if(Ks+=i,Ks<1/60-.001)return;const e=Math.min(Ks,.05);!te.modalOpen&&te.endingPresented,Ks=0,Ma+=e;const t=Ma;if(Ot.update(e),Ma>=Hf&&Fe.subtitle.classList.remove("visible"),te.loaded){if(By(e),Hy(),Vy(e),ei&&Math.abs(Ji-fi)>.001){Ji=kt.damp(Ji,fi,3,e),Math.abs(Ji-fi)<.005&&(Ji=fi),ei.rotation.y=Bf-Ji*1.48,ei.updateMatrixWorld(!0);const r=zi.find(s=>s.object===ei);r&&r.box.setFromObject(ei),jc?.doorMoved(t,Ji===fi)}jc?.update(t,!!At),ei&&(ei.userData.prompt=fi>.5?"关上 502 的门":"推开 502"),Ge?.update(e,te.gameMinutes,!te.modalOpen),Vt?.update(e,!te.modalOpen&&!te.ended,te.finalPhase),Gy(),Kt?.update(e,!te.modalOpen&&!te.ended,te.finalPhase),Kt?.active&&(qt.visible=zn&&!Kt.seated),jt?.update(e,!te.modalOpen&&!te.ended),oi?.update(e,{active:!te.modalOpen,flashlight:zn&&!Kt?.seated&&!jt?.scoping,phoneAvailable:rr(Le),allowCapture:!Ge?.busy,ended:te.ended}),At||(qt.intensity=18*(oi?.flashlightPower??1),qt.distance=3.6+9.4*(oi?.flashlightPower??1)),Le.powerOut&&(Fe.flashlight.textContent=`手机照明 · ${Math.floor(Le.battery)}%${Le.battery<=3?" · 省电":""}`),si?.update(e,!te.ended&&(!te.modalOpen||si.open)&&!Ge?.busy&&!Kt?.active&&!jt?.scoping),Gt.toneMappingExposure=kt.damp(Gt.toneMappingExposure,te.ended&&te.endingType!=="wall"?.9:te.wall?.54:.66,1.2,e)}Ua?.update(t),bo?.update(t),te.endingType!=="wall"&&lr.render(e),ua+=1;const n=performance.now();n-ha>=1e3&&(Re("#fps-value").textContent=`${Math.round(ua*1e3/(n-ha))} FPS`,ha=n,ua=0)}let ha=performance.now();window.addEventListener("resize",()=>{Nn(),jf(),bs()&&te.started&&!te.ended&&Ds(!0)});Fe.flashlight.classList.add("on");Ir();$f();
