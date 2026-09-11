(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const kc="180",Of=0,Eu=1,Ff=2,zc=1,Bf=2,Ri=3,Fi=0,On=1,Rn=2,An=0,ir=1,Fl=2,Au=3,Ru=4,rd=5,Di=100,kf=101,zf=102,Hf=103,Vf=104,Bl=200,Gf=201,Wf=202,Xf=203,kl=204,zl=205,od=206,qf=207,ad=208,Yf=209,Kf=210,$f=211,jf=212,Zf=213,Jf=214,Hl=0,Vl=1,Gl=2,ar=3,Wl=4,Xl=5,ql=6,Yl=7,ld=0,Qf=1,ep=2,rs=0,cd=1,ud=2,hd=3,Hc=4,dd=5,fd=6,pd=7,Cu="attached",tp="detached",md=300,lr=301,cr=302,Kl=303,$l=304,Aa=306,Bi=1e3,ts=1001,ga=1002,vn=1003,gd=1004,Yr=1005,Cn=1006,ra=1007,Ii=1008,vi=1009,_d=1010,vd=1011,io=1012,Vc=1013,Es=1014,Gn=1015,Xn=1016,Gc=1017,Wc=1018,ur=1020,xd=35902,Md=35899,yd=1021,bd=1022,Wn=1023,so=1026,hr=1027,Ra=1028,Xc=1029,Sd=1030,qc=1031,Yc=1033,oa=33776,aa=33777,la=33778,ca=33779,jl=35840,Zl=35841,Jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,_c=36492,vc=36494,xc=36495,Mc=36283,yc=36284,bc=36285,Sc=36286,ro=2300,oo=2301,Ya=2302,Pu=2400,Lu=2401,Du=2402,np=2500,ip=0,wd=1,wc=2,sp=3200,rp=3201,Kc=0,op=1,Qi="",It="srgb",Pn="srgb-linear",_a="linear",Rt="srgb",ks=7680,Iu=519,ap=512,lp=513,cp=514,Td=515,up=516,hp=517,dp=518,fp=519,Tc=35044,Nu=35048,Uu="300 es",gi=2e3,va=2001;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ou=1234567;const $r=Math.PI/180,dr=180/Math.PI;function ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mp(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function gp(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function _p(s,e=1){return e-Math.abs($c(s,e*2)-e)}function vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yp(s,e){return s+Math.random()*(e-s)}function bp(s){return s*(.5-Math.random())}function Sp(s){s!==void 0&&(Ou=s);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(s){return s*$r}function Tp(s){return s*dr}function Ep(s){return(s&s-1)===0&&s!==0}function Ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ht={DEG2RAD:$r,RAD2DEG:dr,generateUUID:ti,clamp:pt,euclideanModulo:$c,mapLinear:pp,inverseLerp:mp,lerp:jr,damp:gp,pingpong:_p,smoothstep:vp,smootherstep:xp,randInt:Mp,randFloat:yp,randFloatSpread:bp,seededRandom:Sp,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ep,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:Ct,denormalize:Qn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*M);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const v=a*M;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new D,Fu=new us;class ht{constructor(e,t,n,i,r,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],y=i[4],v=i[7],T=i[2],w=i[5],A=i[8];return r[0]=o*_+a*M+l*T,r[3]=o*m+a*y+l*w,r[6]=o*p+a*v+l*A,r[1]=c*_+u*M+h*T,r[4]=c*m+u*y+h*w,r[7]=c*p+u*v+h*A,r[2]=d*_+f*M+g*T,r[5]=d*m+f*y+g*w,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new ht;function Ed(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pp(){const s=ao("canvas");return s.style.display="block",s}const Bu={};function lo(s){s in Bu||(Bu[s]=!0,console.warn(s))}function Lp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ku=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){const s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qi?_a:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const yt=Dp();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class Ip{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=ao("canvas")),zs.width=e.width,zs.height=e.height;const i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Np=0;class jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ja(i[o].image)):r.push(ja(i[o]))}else r=ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;const Za=new D;class nn extends yr{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=ts,i=ts,r=Cn,o=Ii,a=Wn,l=vi,c=nn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ti(),this.name="",this.source=new jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=md;nn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,T=(p+1)/2,w=(u+d)/4,A=(h+_)/4,L=(g+m)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=A/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=L/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends yr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new nn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new jc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ad extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),yo.subVectors(this.max,Ir),Hs.subVectors(e.a,Ir),Vs.subVectors(e.b,Ir),Gs.subVectors(e.c,Ir),Wi.subVectors(Vs,Hs),Xi.subVectors(Gs,Vs),hs.subVectors(Hs,Gs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-hs.z,hs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,hs.z,0,-hs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-hs.y,hs.x,0];return!Ja(t,Hs,Vs,Gs,yo)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,Hs,Vs,Gs,yo))?!1:(bo.crossVectors(Wi,Xi),t=[bo.x,bo.y,bo.z],Ja(t,Hs,Vs,Gs,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,Mo=new Ln,Hs=new D,Vs=new D,Gs=new D,Wi=new D,Xi=new D,hs=new D,Ir=new D,yo=new D,bo=new D,ds=new D;function Ja(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ds.fromArray(s,r);const a=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bp=new Ln,Nr=new D,Qa=new D;class Mi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Qa)),this.expandByPoint(Nr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new D,el=new D,So=new D,qi=new D,tl=new D,wo=new D,nl=new D;class br{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){el.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(el);const r=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=qi.dot(this.direction),l=-qi.dot(So),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(el).addScaledVector(So,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){tl.subVectors(t,e),wo.subVectors(n,e),nl.crossVectors(tl,wo);let o=this.direction.dot(nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(wo.crossVectors(qi,wo));if(l<0)return null;const c=a*this.direction.dot(tl.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,zp)}lookAt(e,t,n){const i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Yi.crossVectors(n,Fn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Yi.crossVectors(n,Fn)),Yi.normalize(),To.crossVectors(Fn,Yi),i[0]=Yi.x,i[4]=To.x,i[8]=Fn.x,i[1]=Yi.y,i[5]=To.y,i[9]=Fn.y,i[2]=Yi.z,i[6]=To.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],T=n[15],w=i[0],A=i[4],L=i[8],b=i[12],x=i[1],N=i[5],U=i[9],k=i[13],Y=i[2],B=i[6],G=i[10],K=i[14],V=i[3],le=i[7],he=i[11],Te=i[15];return r[0]=o*w+a*x+l*Y+c*V,r[4]=o*A+a*N+l*B+c*le,r[8]=o*L+a*U+l*G+c*he,r[12]=o*b+a*k+l*K+c*Te,r[1]=u*w+h*x+d*Y+f*V,r[5]=u*A+h*N+d*B+f*le,r[9]=u*L+h*U+d*G+f*he,r[13]=u*b+h*k+d*K+f*Te,r[2]=g*w+_*x+m*Y+p*V,r[6]=g*A+_*N+m*B+p*le,r[10]=g*L+_*U+m*G+p*he,r[14]=g*b+_*k+m*K+p*Te,r[3]=M*w+y*x+v*Y+T*V,r[7]=M*A+y*N+v*B+T*le,r[11]=M*L+y*U+v*G+T*he,r[15]=M*b+y*k+v*K+T*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,w=t*M+n*y+i*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=M*A,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=y*A,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,y=l*u,v=l*h,T=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+v)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+y)*A,i[9]=(m-M)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ws.set(i[0],i[1],i[2]).length();const o=Ws.set(i[4],i[5],i[6]).length(),a=Ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kn.copy(this);const c=1/r,u=1/o,h=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=gi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===gi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===va)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=gi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===gi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===va)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ws=new D,Kn=new ot,kp=new D(0,0,0),zp=new D(1,1,1),Yi=new D,To=new D,Fn=new D,Hu=new ot,Vu=new us;class xi{constructor(e=0,t=0,n=0,i=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const Gu=new D,Xs=new us,wi=new ot,Eo=new D,Ur=new D,Vp=new D,Gp=new us,Wu=new D(1,0,0),Xu=new D(0,1,0),qu=new D(0,0,1),Yu={type:"added"},Wp={type:"removed"},qs={type:"childadded",child:null},il={type:"childremoved",child:null};class Ut extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,t=new xi,n=new us,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new ht}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ur,Eo,this.up):wi.lookAt(Eo,Ur,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(wi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new D,Ti=new D,sl=new D,Ei=new D,Ys=new D,Ks=new D,Ku=new D,rl=new D,ol=new D,al=new D,ll=new Mt,cl=new Mt,ul=new Mt;class ei{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),Ti.subVectors(n,t),sl.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Ti),l=$n.dot(sl),c=Ti.dot(Ti),u=Ti.dot(sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),Ti.subVectors(e,t),$n.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ys.subVectors(i,n),Ks.subVectors(r,n),rl.subVectors(e,n);const l=Ys.dot(rl),c=Ks.dot(rl);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,i);const u=Ys.dot(ol),h=Ks.dot(ol);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ys,o);al.subVectors(e,r);const f=Ys.dot(al),g=Ks.dot(al);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ks,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ku.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ku,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ys,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=$c(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return yt.workingToColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,r=yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=It){yt.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Ao);const n=jr(Ki.h,Ao.h,t),i=jr(Ki.s,Ao.s,t),r=jr(Ki.l,Ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Je;Je.NAMES=Rd;let Xp=0;class ni extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ir,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=zl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ft extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new D,Ro=new Pe;let qp=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Cd extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pd extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yp=0;const zn=new ot,dl=new Ut,$s=new D,Bn=new Ln,Or=new Ln,on=new D;class Ot extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Pd:Cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Bn.min,Or.min),Bn.expandByPoint(on),on.addVectors(Bn.max,Or.max),Bn.expandByPoint(on)):(Bn.expandByPoint(Or.min),Bn.expandByPoint(Or.max))}Bn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),on.add($s)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,d=new Pe,f=new Pe,g=new Pe,_=new D,m=new D;function p(L,b,x){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),a[L].add(_),a[b].add(_),a[x].add(_),l[L].add(m),l[b].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,b=M.length;L<b;++L){const x=M[L],N=x.start,U=x.count;for(let k=N,Y=N+U;k<Y;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new D,v=new D,T=new D,w=new D;function A(L){T.fromBufferAttribute(i,L),w.copy(T);const b=a[L];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);const N=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,N)}for(let L=0,b=M.length;L<b;++L){const x=M[L],N=x.start,U=x.count;for(let k=N,Y=N+U;k<Y;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new ot,fs=new br,Co=new Mi,ju=new D,Po=new D,Lo=new D,Do=new D,fl=new D,Io=new D,Zu=new D,No=new D;class Xe extends Ut{constructor(e=new Ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(fl.fromBufferAttribute(h,e),o?Io.addScaledVector(fl,u):Io.addScaledVector(fl.sub(t),u))}t.add(Io)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Co.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Co,ju)===null||fs.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&($u.copy(r).invert(),fs.copy(e.ray).applyMatrix4($u),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const w=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);i=Uo(this,p,e,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Uo(this,o,e,n,c,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const w=v,A=v+1,L=v+2;i=Uo(this,p,e,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;i=Uo(this,o,e,n,c,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Kp(s,e,t,n,i,r,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fi,a),l===null)return null;No.copy(a),No.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:s}}function Uo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Po),s.getVertexPosition(l,Lo),s.getVertexPosition(c,Do);const u=Kp(s,e,t,n,Po,Lo,Do,Zu);if(u){const h=new D;ei.getBarycoord(Zu,Po,Lo,Do,h),i&&(u.uv=ei.getInterpolatedAttribute(i,a,l,c,h,new Pe)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,l,c,h,new Pe)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Po,Lo,Do,d.normal),u.face=d,u.barycoord=h}return u}class Sr extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(_,m,p,M,y,v,T,w,A,L,b){const x=v/A,N=T/L,U=v/2,k=T/2,Y=w/2,B=A+1,G=L+1;let K=0,V=0;const le=new D;for(let he=0;he<G;he++){const Te=he*N-k;for(let Ne=0;Ne<B;Ne++){const je=Ne*x-U;le[_]=je*M,le[m]=Te*y,le[p]=Y,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ne/A),h.push(1-he/L),K+=1}}for(let he=0;he<L;he++)for(let Te=0;Te<A;Te++){const Ne=d+Te+B*he,je=d+Te+B*(he+1),st=d+(Te+1)+B*(he+1),Se=d+(Te+1)+B*he;l.push(Ne,je,Se),l.push(je,st,Se),V+=6}a.addGroup(f,V,b),f+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const n=fr(s[t]);for(const i in n)e[i]=n[i]}return e}function $p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ld(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const _i={clone:fr,merge:En};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dd extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new D,Ju=new Pe,Qu=new Pe;class jt extends Dd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Qu),t.subVectors(Qu,Ju)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Zs=1;class Jp extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(js,Zs,e,t);i.layers=this.layers,this.add(i);const r=new jt(js,Zs,e,t);r.layers=this.layers,this.add(r);const o=new jt(js,Zs,e,t);o.layers=this.layers,this.add(o);const a=new jt(js,Zs,e,t);a.layers=this.layers,this.add(a);const l=new jt(js,Zs,e,t);l.layers=this.layers,this.add(l);const c=new jt(js,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Id extends nn{constructor(e=[],t=lr,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Id(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sr(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:An});r.uniforms.tEquirect.value=t;const o=new Xe(i,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Cn),new Jp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ze extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(em)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new Jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new D;class Qc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const eh=new D,th=new Mt,nh=new Mt,im=new D,ih=new ot,Oo=new D,ml=new Mi,sh=new ot,gl=new br;class sm extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),e.ray.intersectsSphere(ml)!==!1&&(sh.copy(i).invert(),gl.copy(e.ray).applyMatrix4(sh),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;th.fromBufferAttribute(i.attributes.skinIndex,e),nh.fromBufferAttribute(i.attributes.skinWeight,e),eh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=nh.getComponent(r);if(o!==0){const a=th.getComponent(r);ih.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(im.copy(eh).applyMatrix4(ih),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nd extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eu extends nn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=vn,u=vn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new ot,rm=new ot;class tu{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:rm;rh.multiplyMatrices(a,t[r]),rh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eu(t,e,e,Wn,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nd),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class xa extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new ot,oh=new ot,Fo=[],ah=new Ln,om=new ot,Fr=new Xe,Br=new Mi;class Ma extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,om)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),ah.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ah)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Br.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),oh.multiplyMatrices(n,Js),Fr.matrixWorld=oh,Fr.raycast(e,Fo);for(let o=0,a=Fo.length;o<a;o++){const l=Fo[o];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new eu(new Float32Array(i*this.count),i,this.count,Ra,Gn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _l=new D,am=new D,lm=new ht;class Ji{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lm.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Mi,cm=new Pe(.5,.5),Bo=new D;class nu{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,r=new Ji,o=new Ji){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],y=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,f-u,p-g,T-M).normalize(),i[1].setComponents(c+o,f+u,p+g,T+M).normalize(),i[2].setComponents(c+a,f+h,p+_,T+y).normalize(),i[3].setComponents(c-a,f-h,p-_,T-y).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-v).normalize(),t===gi)i[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(t===va)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=cm.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bo.x=i.normal.x>0?e.max.x:e.min.x,Bo.y=i.normal.y>0?e.max.y:e.min.y,Bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ca extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new D,ba=new D,lh=new ot,kr=new br,ko=new Mi,vl=new D,ch=new D;class iu extends Ut{constructor(e=new Ot,t=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ya.fromBufferAttribute(t,i-1),ba.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ya.distanceTo(ba);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;lh.copy(i).invert(),kr.copy(e.ray).applyMatrix4(lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),y=zo(this,e,kr,l,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=zo(this,e,kr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=zo(this,e,kr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=zo(this,e,kr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zo(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(ya,ba,vl,ch)>n)return;vl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(vl);if(!(c<e.near||c>e.far))return{distance:c,point:ch.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const uh=new D,hh=new D;class su extends iu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)uh.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uh.distanceTo(hh);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class um extends iu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ud extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dh=new ot,Ec=new br,Ho=new Mi,Vo=new D;class ru extends Ut{constructor(e=new Ot,t=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;dh.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Vo.fromBufferAttribute(h,m),fh(Vo,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Vo.fromBufferAttribute(h,g),fh(Vo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fh(s,e,t,n,i,r,o){const a=Ec.distanceSqToPoint(s);if(a<t){const l=new D;Ec.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ho extends nn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ou extends nn{constructor(e,t,n=Es,i,r,o,a=vn,l=vn,c,u=so,h=1){if(u!==so&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Od extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ns extends Ot{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,_=i+1,m=new D,p=new D;for(let M=0;M<=g;M++){let y=0,v=0,T=0,w=0;if(M<=n){const b=M/n,x=b*Math.PI/2;v=-u-e*Math.cos(x),T=e*Math.sin(x),w=-e*Math.cos(x),y=b*h}else if(M<=n+r){const b=(M-n)/r;v=-u+b*t,T=e,w=0,y=h+b*d}else{const b=(M-n-r)/n,x=b*Math.PI/2;v=u+e*Math.sin(x),T=e*Math.cos(x),w=e*Math.sin(x),y=h+d+b*h}const A=Math.max(0,Math.min(1,y/f));let L=0;M===0?L=.5/i:M===g&&(L=-.5/i);for(let b=0;b<=i;b++){const x=b/i,N=x*Math.PI*2,U=Math.sin(N),k=Math.cos(N);p.x=-T*k,p.y=v,p.z=T*U,a.push(p.x,p.y,p.z),m.set(-T*k,w,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+L,A)}if(M>0){const b=(M-1)*_;for(let x=0;x<i;x++){const N=b+x,U=b+x+1,k=M*_+x,Y=M*_+x+1;o.push(N,U,k),o.push(U,Y,k)}}}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class pr extends Ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,u=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ri extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function M(){const v=new D,T=new D;let w=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const b=[],x=L/r,N=x*(t-e)+e;for(let U=0;U<=i;U++){const k=U/i,Y=k*l+a,B=Math.sin(Y),G=Math.cos(Y);T.x=N*B,T.y=-x*n+m,T.z=N*G,h.push(T.x,T.y,T.z),v.set(B,A,G).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-x),b.push(g++)}_.push(b)}for(let L=0;L<i;L++)for(let b=0;b<r;b++){const x=_[b][L],N=_[b+1][L],U=_[b+1][L+1],k=_[b][L+1];(e>0||b!==0)&&(u.push(x,N,k),w+=3),(t>0||b!==r-1)&&(u.push(N,U,k),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const T=g,w=new Pe,A=new D;let L=0;const b=v===!0?e:t,x=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const N=g;for(let U=0;U<=i;U++){const Y=U/i*l+a,B=Math.cos(Y),G=Math.sin(Y);A.x=b*G,A.y=m*x,A.z=b*B,h.push(A.x,A.y,A.z),d.push(0,x,0),w.x=B*.5+.5,w.y=G*.5*x+.5,f.push(w.x,w.y),g++}for(let U=0;U<i;U++){const k=T+U,Y=N+U;v===!0?u.push(Y,Y+1,k):u.push(Y+1,Y,k),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends ri{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],r=[],o=[],a=new D,l=new ot;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(pt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fd extends zi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hm extends Fd{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Go=new D,xl=new au,Ml=new au,yl=new au;class Bd extends zi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Go.subVectors(i[0],i[1]).add(i[0]),c=Go);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Go.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Ml.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),yl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ml.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),yl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(xl.calc(l),Ml.calc(l),yl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ph(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function dm(s,e){const t=1-s;return t*t*e}function fm(s,e){return 2*(1-s)*s*e}function pm(s,e){return s*s*e}function Zr(s,e,t,n){return dm(s,e)+fm(s,t)+pm(s,n)}function mm(s,e){const t=1-s;return t*t*t*e}function gm(s,e){const t=1-s;return 3*t*t*s*e}function _m(s,e){return 3*(1-s)*s*s*e}function vm(s,e){return s*s*s*e}function Jr(s,e,t,n,i){return mm(s,e)+gm(s,t)+_m(s,n)+vm(s,i)}class xm extends zi{constructor(e=new Pe,t=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,i.x,r.x,o.x,a.x),Jr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mm extends zi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,i.x,r.x,o.x,a.x),Jr(e,i.y,r.y,o.y,a.y),Jr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ym extends zi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bm extends zi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sm extends zi{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Zr(e,i.x,r.x,o.x),Zr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends zi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Zr(e,i.x,r.x,o.x),Zr(e,i.y,r.y,o.y),Zr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wm extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ph(a,l.x,c.x,u.x,h.x),ph(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Pe().fromArray(i))}return this}}var Tm=Object.freeze({__proto__:null,ArcCurve:hm,CatmullRomCurve3:Bd,CubicBezierCurve:xm,CubicBezierCurve3:Mm,EllipseCurve:Fd,LineCurve:ym,LineCurve3:bm,QuadraticBezierCurve:Sm,QuadraticBezierCurve3:kd,SplineCurve:wm});class lu extends Ot{constructor(e=[new Pe(0,-.5),new Pe(.5,0),new Pe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=pt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,d=new Pe,f=new D,g=new D,_=new D;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const y=n+M*u*i,v=Math.sin(y),T=Math.cos(y);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*T,o.push(h.x,h.y,h.z),d.x=M/t,d.y=w/(e.length-1),a.push(d.x,d.y);const A=l[3*w+0]*v,L=l[3*w+1],b=l[3*w+0]*T;c.push(A,L,b)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const v=y+M*e.length,T=v,w=v+e.length,A=v+e.length+1,L=v+1;r.push(T,w,L),r.push(A,L,w)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.points,e.segments,e.phiStart,e.phiLength)}}class Hi extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,v=M+c*(p+1),T=M+1+c*(p+1),w=M+1+c*p;f.push(y,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends Ot{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new D,g=new Pe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,y=M,v=M+n+1,T=M+n+2,w=M+1;a.push(y,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bn extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;h.x=-e*Math.cos(i+w*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-y),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=u[p][M+1],v=u[p][M],T=u[p+1][M],w=u[p+1][M+1];(p!==0||o>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sa extends Ot{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uu extends Ot{constructor(e=new kd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new Pe;let u=new D;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){u=e.getPointAt(y/t,u);const v=o.normals[y],T=o.binormals[y];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,L=Math.sin(A),b=-Math.cos(A);l.x=b*v.x+L*T.x,l.y=b*v.y+L*T.y,l.z=b*v.z+L*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),A=(i+1)*y+v,L=(i+1)*(y-1)+v;g.push(T,w,L),g.push(w,A,L)}}function M(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new uu(new Tm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Em extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gt extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Am extends ni{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Rm extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cm extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Pm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Lm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function zd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class fo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dm extends fo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lu:r=e,a=2*t-n;break;case Du:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:o=e,l=2*n-t;break;case Du:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+M*o[c+T]+y*o[l+T]+v*o[h+T];return r}}class Im extends fo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Nm extends fo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case oo:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Pm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=oo;class wr extends li{constructor(e,t,n){super(e,t,n)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=ro;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hd extends li{constructor(e,t,n,i){super(e,t,n,i)}}Hd.prototype.ValueTypeName="color";class mr extends li{constructor(e,t,n,i){super(e,t,n,i)}}mr.prototype.ValueTypeName="number";class Um extends fo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)us.slerpFlat(r,0,o,c-a,o,c,l);return r}}class gr extends li{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Um(this.times,this.values,this.getValueSize(),e)}}gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends li{constructor(e,t,n){super(e,t,n)}}Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=ro;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends li{constructor(e,t,n,i){super(e,t,n,i)}}_r.prototype.ValueTypeName="vector";class Om{constructor(e="",t=-1,n=[],i=np){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(li.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Lm(l);l=mh(l,1,u),c=mh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];zd(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new mr(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(_r,f+".position",d,"pos",i),n(gr,f+".quaternion",d,"rot",i),n(_r,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Fm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return Hd;case"quaternion":return gr;case"bool":case"boolean":return wr;case"string":return Tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fm(s.type);if(s.times===void 0){const t=[],n=[];zd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class km{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const zm=new km;class Er{constructor(e){this.manager=e!==void 0?e:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class Hm extends Error{constructor(e,t){super(e),this.response=t}}class Vd extends Er{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,A=u.length;w<A;w++){const L=u[w];L.onProgress&&L.onProgress(T)}p.enqueue(v),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Hm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ni.add(`file:${e}`,c);const u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qs=new WeakMap;class Vm extends Er{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Qs.get(o);h===void 0&&(h=[],Qs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=ao("img");function l(){u(),t&&t(this);const h=Qs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),Ni.remove(`image:${e}`);const d=Qs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class co extends Er{constructor(e){super(e)}load(e,t,n,i){const r=new nn,o=new Vm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class La extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gm extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bl=new ot,gh=new D,_h=new D;class hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wm extends hu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Da extends La{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vh=new ot,zr=new D,Sl=new D;class Xm extends hu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,n.coordinateSystem,n.reversedDepth)}}class Wt extends La{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ia extends Dd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qm extends hu{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wl=new WeakMap;class Km extends Er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(wl.has(o)===!0)i&&i(wl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wl.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $m extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const du="\\[\\]\\.:\\/",jm=new RegExp("["+du+"]","g"),fu="[^"+du+"]",Zm="[^"+du.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",fu),Qm=/(WCOD+)?/.source.replace("WCOD",Zm),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),ng=new RegExp("^"+Jm+Qm+eg+tg+"$"),ig=["material","materials","bones","map"];class sg{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){const t=ng.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=sg;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xh=new ot;class Wd{constructor(e,t,n=0,i=1/0){this.ray=new br(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(e,t=!0,n=[]){return Ac(e,this,n,t),n.sort(Mh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ac(e[i],this,n,t);return n.sort(Mh),n}}function Mh(s,e){return s.distance-e.distance}function Ac(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}function yh(s,e,t,n){const i=rg(n);switch(t){case yd:return s*e;case Ra:return s*e/i.components*i.byteLength;case Xc:return s*e/i.components*i.byteLength;case Sd:return s*e*2/i.components*i.byteLength;case qc:return s*e*2/i.components*i.byteLength;case bd:return s*e*3/i.components*i.byteLength;case Wn:return s*e*4/i.components*i.byteLength;case Yc:return s*e*4/i.components*i.byteLength;case oa:case aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(s,16)*Math.max(e,8)/4;case jl:case Jl:return Math.max(s,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _c:case vc:case xc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mc:case yc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bc:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(s){switch(s){case vi:case _d:return{byteLength:1,components:1};case io:case vd:case Xn:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Es:case Vc:case Gn:return{byteLength:4,components:1};case xd:case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);function Xd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function og(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,o0=`
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
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
}`,f_=`#if DEPTH_PACKING == 3200
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
}`,p_=`#define DISTANCE
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
}`,m_=`#define DISTANCE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,x_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,y_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,S_=`#define LAMBERT
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
}`,w_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,E_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,I_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,F_=`uniform vec3 color;
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
}`,B_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:ag,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:Mg,bumpmap_pars_fragment:yg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Tg,color_fragment:Eg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:$g,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:o0,lights_fragment_maps:a0,lights_fragment_end:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:M0,morphnormal_vertex:y0,morphtarget_pars_vertex:b0,morphtarget_vertex:S0,normal_fragment_begin:w0,normal_fragment_maps:T0,normal_pars_fragment:E0,normal_pars_vertex:A0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:I0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:O0,project_vertex:F0,dithering_fragment:B0,dithering_pars_fragment:k0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:G0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:K0,skinnormal_vertex:$0,specularmap_fragment:j0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:u_,cube_frag:h_,depth_vert:d_,depth_frag:f_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:__,linedashed_vert:v_,linedashed_frag:x_,meshbasic_vert:M_,meshbasic_frag:y_,meshlambert_vert:b_,meshlambert_frag:S_,meshmatcap_vert:w_,meshmatcap_frag:T_,meshnormal_vert:E_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:P_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:I_,points_vert:N_,points_frag:U_,shadow_vert:O_,shadow_frag:F_,sprite_vert:B_,sprite_frag:k_},Le={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},pi={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Xo={r:0,b:0,g:0},ms=new xi,z_=new ot;function H_(s,e,t,n,i,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const T=g(y);T===null?p(a,l):T&&T.isColor&&(p(T,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Aa)?(u===void 0&&(u=new Xe(new Sr(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:fr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ms.copy(v.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z_.makeRotationFromEuler(ms)),u.material.toneMapped=yt.getTransfer(T.colorSpace)!==Rt,(h!==T||d!==T.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Xe(new Hi(2,2),new Bt({name:"BackgroundMaterial",uniforms:fr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=yt.getTransfer(T.colorSpace)!==Rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Xo,Ld(s)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:M}}function V_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,N,U,k,Y){let B=!1;const G=h(k,U,N);r!==G&&(r=G,c(r.object)),B=f(x,k,U,Y),B&&g(x,k,U,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(x,N,U,k),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function u(x){return s.deleteVertexArray(x)}function h(x,N,U){const k=U.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let B=Y[N.id];B===void 0&&(B={},Y[N.id]=B);let G=B[k];return G===void 0&&(G=d(l()),B[k]=G),G}function d(x){const N=[],U=[],k=[];for(let Y=0;Y<t;Y++)N[Y]=0,U[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,N,U,k){const Y=r.attributes,B=N.attributes;let G=0;const K=U.getAttributes();for(const V in K)if(K[V].location>=0){const he=Y[V];let Te=B[V];if(Te===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),he===void 0||he.attribute!==Te||Te&&he.data!==Te.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(x,N,U,k){const Y={},B=N.attributes;let G=0;const K=U.getAttributes();for(const V in K)if(K[V].location>=0){let he=B[V];he===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Te={};Te.attribute=he,he&&he.data&&(Te.data=he.data),Y[V]=Te,G++}r.attributes=Y,r.attributesNum=G,r.index=k}function _(){const x=r.newAttributes;for(let N=0,U=x.length;N<U;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){const U=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;U[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),Y[x]!==N&&(s.vertexAttribDivisor(x,N),Y[x]=N)}function M(){const x=r.newAttributes,N=r.enabledAttributes;for(let U=0,k=N.length;U<k;U++)N[U]!==x[U]&&(s.disableVertexAttribArray(U),N[U]=0)}function y(x,N,U,k,Y,B,G){G===!0?s.vertexAttribIPointer(x,N,U,Y,B):s.vertexAttribPointer(x,N,U,k,Y,B)}function v(x,N,U,k){_();const Y=k.attributes,B=U.getAttributes(),G=N.defaultAttributeValues;for(const K in B){const V=B[K];if(V.location>=0){let le=Y[K];if(le===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const he=le.normalized,Te=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;const je=Ne.buffer,st=Ne.type,Se=Ne.bytesPerElement,J=st===s.INT||st===s.UNSIGNED_INT||le.gpuType===Vc;if(le.isInterleavedBufferAttribute){const ie=le.data,ge=ie.stride,de=le.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve,ie.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ve=0;ve<V.locationSize;ve++)y(V.location+ve,Te/V.locationSize,st,he,ge*Se,(de+Te/V.locationSize*ve)*Se,J)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)p(V.location+ie,le.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<V.locationSize;ie++)m(V.location+ie);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ie=0;ie<V.locationSize;ie++)y(V.location+ie,Te/V.locationSize,st,he,Te*Se,Te/V.locationSize*ie*Se,J)}}else if(G!==void 0){const he=G[K];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(V.location,he);break;case 3:s.vertexAttrib3fv(V.location,he);break;case 4:s.vertexAttrib4fv(V.location,he);break;default:s.vertexAttrib1fv(V.location,he)}}}}M()}function T(){L();for(const x in n){const N=n[x];for(const U in N){const k=N[U];for(const Y in k)u(k[Y].object),delete k[Y];delete N[U]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const N=n[x.id];for(const U in N){const k=N[U];for(const Y in k)u(k[Y].object),delete k[Y];delete N[U]}delete n[x.id]}function A(x){for(const N in n){const U=n[N];if(U[x.id]===void 0)continue;const k=U[x.id];for(const Y in k)u(k[Y].object),delete k[Y];delete U[x.id]}}function L(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function G_(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function X_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ji,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,y=M*4;let v=p.clippingState||null;l.value=v,v=u(g,d,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function q_(s){let e=new WeakMap;function t(o,a){return a===Kl?o.mapping=lr:a===$l&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kl||a===$l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qp(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const nr=4,bh=[.125,.215,.35,.446,.526,.582],ys=20,Tl=new Ia,Sh=new Je;let El=null,Al=0,Rl=0,Cl=!1;const vs=(1+Math.sqrt(5))/2,er=1/vs,wh=[new D(-vs,er,0),new D(vs,er,0),new D(-er,0,vs),new D(er,0,vs),new D(0,vs,-er),new D(0,vs,er),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Y_=new D;class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Y_}=r;El=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Al,Rl),this._renderer.xr.enabled=Cl,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Xn,format:Wn,colorSpace:Pn,depthBuffer:!1},i=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K_(r)),this._blurMaterial=$_(r,e,t)}return i}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,i,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Sh),h.toneMapping=rs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new Ft({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new Xe(new Sr,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Sh),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const T=this._cubeSize;qo(i,v*T,y>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===lr||e.mapping===cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(i-r-1)%wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);const p=[];let M=0;for(let A=0;A<ys;++A){const L=A/_,b=Math.exp(-L*L/2);p.push(b),A===0?M+=b:A<m&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-nr?i-y+nr:0),w=4*(this._cubeSize-v);qo(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Tl)}}function K_(s){const e=[],t=[],n=[];let i=s;const r=s-nr+1+bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-nr?l=bh[o-s+nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,L=w>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];M.set(b,_*g*w),y.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const T=new Ot;T.setAttribute("position",new ln(M,_)),T.setAttribute("uv",new ln(y,m)),T.setAttribute("faceIndex",new ln(v,p)),e.push(T),i>nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eh(s,e,t){const n=new wn(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function $_(s,e,t){const n=new Float32Array(ys),i=new D(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pu(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ah(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Rh(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function j_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kl||l===$l,u=l===lr||l===cr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Th(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Th(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J_(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,v=M.length;y<v;y+=3){const T=M[y+0],w=M[y+1],A=M[y+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const T=y+0,w=y+1,A=y+2;d.push(T,w,w,A,A,T)}}else return;const m=new(Ed(d)?Pd:Cd)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Q_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ev(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tv(s,e,t){const n=new WeakMap,i=new Mt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*h),L=new Ad(A,T,w,h);L.type=Gn,L.needsUpdate=!0;const b=v*4;for(let N=0;N<h;N++){const U=p[N],k=M[N],Y=y[N],B=T*w*4*N;for(let G=0;G<U.count;G++){const K=G*b;g===!0&&(i.fromBufferAttribute(U,G),A[B+K+0]=i.x,A[B+K+1]=i.y,A[B+K+2]=i.z,A[B+K+3]=0),_===!0&&(i.fromBufferAttribute(k,G),A[B+K+4]=i.x,A[B+K+5]=i.y,A[B+K+6]=i.z,A[B+K+7]=0),m===!0&&(i.fromBufferAttribute(Y,G),A[B+K+8]=i.x,A[B+K+9]=i.y,A[B+K+10]=i.z,A[B+K+11]=Y.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new Pe(T,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function nv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const qd=new nn,Ch=new ou(1,1),Yd=new Ad,Kd=new Fp,$d=new Id,Ph=[],Lh=[],Dh=new Float32Array(16),Ih=new Float32Array(9),Nh=new Float32Array(4);function Ar(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ph[i];if(r===void 0&&(r=new Float32Array(i),Ph[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Na(s,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function iv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function rv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function ov(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function av(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Nh.set(n),s.uniformMatrix2fv(this.addr,!1,Nh),rn(t,n)}}function lv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Ih.set(n),s.uniformMatrix3fv(this.addr,!1,Ih),rn(t,n)}}function cv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Dh.set(n),s.uniformMatrix4fv(this.addr,!1,Dh),rn(t,n)}}function uv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function fv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function pv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function gv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function _v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function vv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ch.compareFunction=Td,r=Ch):r=qd,t.setTexture2D(e||r,i)}function xv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kd,i)}function Mv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$d,i)}function yv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yd,i)}function bv(s){switch(s){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return yv}}function Sv(s,e){s.uniform1fv(this.addr,e)}function wv(s,e){const t=Ar(e,this.size,2);s.uniform2fv(this.addr,t)}function Tv(s,e){const t=Ar(e,this.size,3);s.uniform3fv(this.addr,t)}function Ev(s,e){const t=Ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Av(s,e){const t=Ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rv(s,e){const t=Ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cv(s,e){const t=Ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pv(s,e){s.uniform1iv(this.addr,e)}function Lv(s,e){s.uniform2iv(this.addr,e)}function Dv(s,e){s.uniform3iv(this.addr,e)}function Iv(s,e){s.uniform4iv(this.addr,e)}function Nv(s,e){s.uniform1uiv(this.addr,e)}function Uv(s,e){s.uniform2uiv(this.addr,e)}function Ov(s,e){s.uniform3uiv(this.addr,e)}function Fv(s,e){s.uniform4uiv(this.addr,e)}function Bv(s,e,t){const n=this.cache,i=e.length,r=Na(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qd,r[o])}function kv(s,e,t){const n=this.cache,i=e.length,r=Na(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kd,r[o])}function zv(s,e,t){const n=this.cache,i=e.length,r=Na(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$d,r[o])}function Hv(s,e,t){const n=this.cache,i=e.length,r=Na(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yd,r[o])}function Vv(s){switch(s){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Iv;case 5125:return Nv;case 36294:return Uv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}class Gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class Xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function Uh(s,e){s.seq.push(e),s.map[e.id]=e}function qv(s,e,t){const n=s.name,i=n.length;for(Pl.lastIndex=0;;){const r=Pl.exec(n),o=Pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uh(t,c===void 0?new Gv(a,s,e):new Wv(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Xv(a),Uh(t,h)),t=h}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);qv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Oh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yv=37297;let Kv=0;function $v(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fh=new ht;function jv(s){yt._getMatrix(Fh,yt.workingColorSpace,s);const e=`mat3( ${Fh.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case _a:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$v(s.getShaderSource(e),a)}else return r}function Zv(s,e){const t=jv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(s,e){let t;switch(e){case cd:t="Linear";break;case ud:t="Reinhard";break;case hd:t="Cineon";break;case Hc:t="ACESFilmic";break;case fd:t="AgX";break;case pd:t="Neutral";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new D;function Qv(){yt.getLuminanceCoefficients(Yo);const s=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function tx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kr(s){return s!==""}function kh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(s){return s.replace(ix,rx)}const sx=new Map;function rx(s,e){let t=ft[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(s){return s.replace(ox,ax)}function ax(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===cr&&(e="ENVMAP_MODE_REFRACTION"),e}function hx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ep:e="ENVMAP_BLENDING_ADD";break}return e}function dx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lx(t),c=cx(t),u=ux(t),h=hx(t),d=dx(t),f=ex(t),g=tx(r),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?ft.tonemapping_pars_fragment:"",t.toneMapping!==rs?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Zv("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Rc(o),o=kh(o,t),o=zh(o,t),a=Rc(a),a=kh(a,t),a=zh(a,t),o=Hh(o),a=Hh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,T=Oh(i,i.VERTEX_SHADER,y),w=Oh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(N){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(T)||"",Y=i.getShaderInfoLog(w)||"",B=U.trim(),G=k.trim(),K=Y.trim();let V=!0,le=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,w);else{const he=Bh(i,T,"vertex"),Te=Bh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+he+`
`+Te)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||K==="")&&(le=!1);le&&(N.diagnostics={runnable:V,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(T),i.deleteShader(w),L=new ua(i,_),b=nx(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Yv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function _x(s,e,t,n,i,r,o){const a=new Zc,l=new mx,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,N,U,k){const Y=U.fog,B=k.geometry,G=b.isMeshStandardMaterial?U.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),V=K&&K.mapping===Aa?K.image.height:null,le=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Te=he!==void 0?he.length:0;let Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let je,st,Se,J;if(le){const vt=pi[le];je=vt.vertexShader,st=vt.fragmentShader}else je=b.vertexShader,st=b.fragmentShader,l.update(b),Se=l.getVertexShaderID(b),J=l.getFragmentShaderID(b);const ie=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),de=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,j=!!b.map,be=!!b.matcap,C=!!K,$=!!b.aoMap,I=!!b.lightMap,O=!!b.bumpMap,z=!!b.normalMap,te=!!b.displacementMap,ae=!!b.emissiveMap,we=!!b.metalnessMap,fe=!!b.roughnessMap,it=b.anisotropy>0,R=b.clearcoat>0,S=b.dispersion>0,W=b.iridescence>0,ne=b.sheen>0,ce=b.transmission>0,Q=it&&!!b.anisotropyMap,Ue=R&&!!b.clearcoatMap,Me=R&&!!b.clearcoatNormalMap,ze=R&&!!b.clearcoatRoughnessMap,Ve=W&&!!b.iridescenceMap,_e=W&&!!b.iridescenceThicknessMap,Ae=ne&&!!b.sheenColorMap,Ke=ne&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Ee=!!b.specularColorMap,Qe=!!b.specularIntensityMap,F=ce&&!!b.transmissionMap,pe=ce&&!!b.thicknessMap,ye=!!b.gradientMap,Oe=!!b.alphaMap,xe=b.alphaTest>0,oe=!!b.alphaHash,He=!!b.extensions;let rt=rs;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Pt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:st,defines:b.defines,customVertexShaderID:Se,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:de,instancingColor:de&&k.instanceColor!==null,instancingMorph:de&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Pn,alphaToCoverage:!!b.alphaToCoverage,map:j,matcap:be,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:V,aoMap:$,lightMap:I,bumpMap:O,normalMap:z,displacementMap:d&&te,emissiveMap:ae,normalMapObjectSpace:z&&b.normalMapType===op,normalMapTangentSpace:z&&b.normalMapType===Kc,metalnessMap:we,roughnessMap:fe,anisotropy:it,anisotropyMap:Q,clearcoat:R,clearcoatMap:Ue,clearcoatNormalMap:Me,clearcoatRoughnessMap:ze,dispersion:S,iridescence:W,iridescenceMap:Ve,iridescenceThicknessMap:_e,sheen:ne,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:Ge,specularColorMap:Ee,specularIntensityMap:Qe,transmission:ce,transmissionMap:F,thicknessMap:pe,gradientMap:ye,opaque:b.transparent===!1&&b.blending===ir&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:xe,alphaHash:oe,combine:b.combine,mapUv:j&&_(b.map.channel),aoMapUv:$&&_(b.aoMap.channel),lightMapUv:I&&_(b.lightMap.channel),bumpMapUv:O&&_(b.bumpMap.channel),normalMapUv:z&&_(b.normalMap.channel),displacementMapUv:te&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:fe&&_(b.roughnessMap.channel),anisotropyMapUv:Q&&_(b.anisotropyMap.channel),clearcoatMapUv:Ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&_(b.sheenRoughnessMap.channel),specularMapUv:Ge&&_(b.specularMap.channel),specularColorMapUv:Ee&&_(b.specularColorMap.channel),specularIntensityMapUv:Qe&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:pe&&_(b.thicknessMap.channel),alphaMapUv:Oe&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(z||it),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(j||Oe),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:j&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)x.push(N),x.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(M(x,b),y(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function M(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function y(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const x=g[b.type];let N;if(x){const U=pi[x];N=_i.clone(U.uniforms)}else N=b.uniforms;return N}function T(b,x){let N;for(let U=0,k=u.length;U<k;U++){const Y=u[U];if(Y.cacheKey===x){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new fx(s,x,b,r),u.push(N)),N}function w(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function vx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||xx),n.length>1&&n.sort(d||Gh),i.length>1&&i.sort(d||Gh)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Mx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wh,s.set(n,[o])):i>=r.length?(o=new Wh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function bx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sx=0;function wx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tx(s){const e=new yx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ot,o=new ot;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,T=0,w=0,A=0;c.sort(wx);for(let b=0,x=c.length;b<x;b++){const N=c[b],U=N.color,k=N.intensity,Y=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=U.r*k,h+=U.g*k,d+=U.b*k;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],k);A++}else if(N.isDirectionalLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,V=t.get(N);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=N.shadow.matrix,M++}n.directional[f]=G,f++}else if(N.isSpotLight){const G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=Y,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[_]=G;const K=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,K.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,N.castShadow){const V=t.get(N);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=B,v++}_++}else if(N.isRectAreaLight){const G=e.get(N);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){const K=N.shadow,V=t.get(N);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=G,g++}else if(N.isHemisphereLight){const G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(k),G.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=A,n.version=Sx++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xh(s){const e=new Tx(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ex(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Xh(s),e.set(i,[a])):r>=o.length?(a=new Xh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(s,e,t){let n=new nu;const i=new Pe,r=new Pe,o=new Mt,a=new Rm({depthPacking:rp}),l=new Cm,c={},u=t.maxTextureSize,h={[Fi]:On,[On]:Fi,[Rn]:Rn},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),U=s.state;U.setBlending(An),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==Ri&&this.type===Ri,Y=p===Ri&&this.type!==Ri;for(let B=0,G=w.length;B<G;B++){const K=w[B],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const le=V.getFrameExtents();if(i.multiply(le),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/le.x),i.x=r.x*le.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/le.y),i.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||k===!0||Y===!0){const Te=this.type!==Ri?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new wn(i.x,i.y,Te),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const he=V.getViewportCount();for(let Te=0;Te<he;Te++){const Ne=V.getViewport(Te);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),U.viewport(o),V.updateMatrices(K,Te),n=V.getFrustum(),v(A,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Ri&&M(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,N)};function M(w,A){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,L,f,_,null)}function y(w,A,L,b){let x=null;const N=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)x=N;else if(x=L.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=x.uuid,k=A.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let B=Y[k];B===void 0&&(B=x.clone(),Y[k]=B,A.addEventListener("dispose",T)),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,b===Ri?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=s.properties.get(x);U.light=L}return x}function v(w,A,L,b,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const k=e.update(w),Y=w.material;if(Array.isArray(Y)){const B=k.groups;for(let G=0,K=B.length;G<K;G++){const V=B[G],le=Y[V.materialIndex];if(le&&le.visible){const he=y(w,le,b,x);w.onBeforeShadow(s,w,A,L,k,he,V),s.renderBufferDirect(L,null,k,he,w,V),w.onAfterShadow(s,w,A,L,k,he,V)}}}else if(Y.visible){const B=y(w,Y,b,x);w.onBeforeShadow(s,w,A,L,k,B,null),s.renderBufferDirect(L,null,k,B,w,null),w.onAfterShadow(s,w,A,L,k,B,null)}}const U=w.children;for(let k=0,Y=U.length;k<Y;k++)v(U[k],A,L,b,x)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const b=c[L],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Px={[Hl]:Vl,[Gl]:ql,[Wl]:Yl,[ar]:Xl,[Vl]:Hl,[ql]:Gl,[Yl]:Wl,[Xl]:ar};function Lx(s,e){function t(){let F=!1;const pe=new Mt;let ye=null;const Oe=new Mt(0,0,0,0);return{setMask:function(xe){ye!==xe&&!F&&(s.colorMask(xe,xe,xe,xe),ye=xe)},setLocked:function(xe){F=xe},setClear:function(xe,oe,He,rt,Pt){Pt===!0&&(xe*=rt,oe*=rt,He*=rt),pe.set(xe,oe,He,rt),Oe.equals(pe)===!1&&(s.clearColor(xe,oe,He,rt),Oe.copy(pe))},reset:function(){F=!1,ye=null,Oe.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,ye=null,Oe=null,xe=null;return{setReversed:function(oe){if(pe!==oe){const He=e.get("EXT_clip_control");oe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;const rt=xe;xe=null,this.setClear(rt)}},getReversed:function(){return pe},setTest:function(oe){oe?ie(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(oe){ye!==oe&&!F&&(s.depthMask(oe),ye=oe)},setFunc:function(oe){if(pe&&(oe=Px[oe]),Oe!==oe){switch(oe){case Hl:s.depthFunc(s.NEVER);break;case Vl:s.depthFunc(s.ALWAYS);break;case Gl:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case Wl:s.depthFunc(s.EQUAL);break;case Xl:s.depthFunc(s.GEQUAL);break;case ql:s.depthFunc(s.GREATER);break;case Yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=oe}},setLocked:function(oe){F=oe},setClear:function(oe){xe!==oe&&(pe&&(oe=1-oe),s.clearDepth(oe),xe=oe)},reset:function(){F=!1,ye=null,Oe=null,xe=null,pe=!1}}}function i(){let F=!1,pe=null,ye=null,Oe=null,xe=null,oe=null,He=null,rt=null,Pt=null;return{setTest:function(vt){F||(vt?ie(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(vt){pe!==vt&&!F&&(s.stencilMask(vt),pe=vt)},setFunc:function(vt,Dn,cn){(ye!==vt||Oe!==Dn||xe!==cn)&&(s.stencilFunc(vt,Dn,cn),ye=vt,Oe=Dn,xe=cn)},setOp:function(vt,Dn,cn){(oe!==vt||He!==Dn||rt!==cn)&&(s.stencilOp(vt,Dn,cn),oe=vt,He=Dn,rt=cn)},setLocked:function(vt){F=vt},setClear:function(vt){Pt!==vt&&(s.clearStencil(vt),Pt=vt)},reset:function(){F=!1,pe=null,ye=null,Oe=null,xe=null,oe=null,He=null,rt=null,Pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,w=null,A=new Je(0,0,0),L=0,b=!1,x=null,N=null,U=null,k=null,Y=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let le=null,he={};const Te=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),je=new Mt().fromArray(Te),st=new Mt().fromArray(Ne);function Se(F,pe,ye,Oe){const xe=new Uint8Array(4),oe=s.createTexture();s.bindTexture(F,oe),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ye;He++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return oe}const J={};J[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(ar),O(!1),z(Eu),ie(s.CULL_FACE),$(An);function ie(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function ge(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function de(F,pe){return h[F]!==pe?(s.bindFramebuffer(F,pe),h[F]=pe,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=pe),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ve(F,pe){let ye=f,Oe=!1;if(F){ye=d.get(pe),ye===void 0&&(ye=[],d.set(pe,ye));const xe=F.textures;if(ye.length!==xe.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,He=xe.length;oe<He;oe++)ye[oe]=s.COLOR_ATTACHMENT0+oe;ye.length=xe.length,Oe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(ye)}function j(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const be={[Di]:s.FUNC_ADD,[kf]:s.FUNC_SUBTRACT,[zf]:s.FUNC_REVERSE_SUBTRACT};be[Hf]=s.MIN,be[Vf]=s.MAX;const C={[Bl]:s.ZERO,[Gf]:s.ONE,[Wf]:s.SRC_COLOR,[kl]:s.SRC_ALPHA,[Kf]:s.SRC_ALPHA_SATURATE,[ad]:s.DST_COLOR,[od]:s.DST_ALPHA,[Xf]:s.ONE_MINUS_SRC_COLOR,[zl]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[qf]:s.ONE_MINUS_DST_ALPHA,[$f]:s.CONSTANT_COLOR,[jf]:s.ONE_MINUS_CONSTANT_COLOR,[Zf]:s.CONSTANT_ALPHA,[Jf]:s.ONE_MINUS_CONSTANT_ALPHA};function $(F,pe,ye,Oe,xe,oe,He,rt,Pt,vt){if(F===An){_===!0&&(ge(s.BLEND),_=!1);return}if(_===!1&&(ie(s.BLEND),_=!0),F!==rd){if(F!==m||vt!==b){if((p!==Di||v!==Di)&&(s.blendEquation(s.FUNC_ADD),p=Di,v=Di),vt)switch(F){case ir:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFunc(s.ONE,s.ONE);break;case Au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ru:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,y=null,T=null,w=null,A.set(0,0,0),L=0,m=F,b=vt}return}xe=xe||pe,oe=oe||ye,He=He||Oe,(pe!==p||xe!==v)&&(s.blendEquationSeparate(be[pe],be[xe]),p=pe,v=xe),(ye!==M||Oe!==y||oe!==T||He!==w)&&(s.blendFuncSeparate(C[ye],C[Oe],C[oe],C[He]),M=ye,y=Oe,T=oe,w=He),(rt.equals(A)===!1||Pt!==L)&&(s.blendColor(rt.r,rt.g,rt.b,Pt),A.copy(rt),L=Pt),m=F,b=!1}function I(F,pe){F.side===Rn?ge(s.CULL_FACE):ie(s.CULL_FACE);let ye=F.side===On;pe&&(ye=!ye),O(ye),F.blending===ir&&F.transparent===!1?$(An):$(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Oe=F.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function O(F){x!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),x=F)}function z(F){F!==Of?(ie(s.CULL_FACE),F!==N&&(F===Eu?s.cullFace(s.BACK):F===Ff?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),N=F}function te(F){F!==U&&(G&&s.lineWidth(F),U=F)}function ae(F,pe,ye){F?(ie(s.POLYGON_OFFSET_FILL),(k!==pe||Y!==ye)&&(s.polygonOffset(pe,ye),k=pe,Y=ye)):ge(s.POLYGON_OFFSET_FILL)}function we(F){F?ie(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function fe(F){F===void 0&&(F=s.TEXTURE0+B-1),le!==F&&(s.activeTexture(F),le=F)}function it(F,pe,ye){ye===void 0&&(le===null?ye=s.TEXTURE0+B-1:ye=le);let Oe=he[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[ye]=Oe),(Oe.type!==F||Oe.texture!==pe)&&(le!==ye&&(s.activeTexture(ye),le=ye),s.bindTexture(F,pe||J[F]),Oe.type=F,Oe.texture=pe)}function R(){const F=he[le];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(F){je.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function Ke(F){st.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Ge(F,pe){let ye=c.get(pe);ye===void 0&&(ye=new WeakMap,c.set(pe,ye));let Oe=ye.get(F);Oe===void 0&&(Oe=s.getUniformBlockIndex(pe,F.name),ye.set(F,Oe))}function Ee(F,pe){const Oe=c.get(pe).get(F);l.get(pe)!==Oe&&(s.uniformBlockBinding(pe,Oe,F.__bindingPointIndex),l.set(pe,Oe))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},le=null,he={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,w=null,A=new Je(0,0,0),L=0,b=!1,x=null,N=null,U=null,k=null,Y=null,je.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:ge,bindFramebuffer:de,drawBuffers:ve,useProgram:j,setBlending:$,setMaterial:I,setFlipSided:O,setCullFace:z,setLineWidth:te,setPolygonOffset:ae,setScissorTest:we,activeTexture:fe,bindTexture:it,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Ve,texImage3D:_e,updateUBOMapping:Ge,uniformBlockBinding:Ee,texStorage2D:Me,texStorage3D:ze,texSubImage2D:ne,texSubImage3D:ce,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ue,scissor:Ae,viewport:Ke,reset:Qe}}function Dx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):ao("canvas")}function _(R,S,W){let ne=1;const ce=it(R);if((ce.width>W||ce.height>W)&&(ne=W/Math.max(ce.width,ce.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(ne*ce.width),Ue=Math.floor(ne*ce.height);h===void 0&&(h=g(Q,Ue));const Me=S?g(Q,Ue):h;return Me.width=Q,Me.height=Ue,Me.getContext("2d").drawImage(R,0,0,Q,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+Ue+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,S,W,ne,ce=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===s.RED&&(W===s.FLOAT&&(Q=s.R32F),W===s.HALF_FLOAT&&(Q=s.R16F),W===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.R8UI),W===s.UNSIGNED_SHORT&&(Q=s.R16UI),W===s.UNSIGNED_INT&&(Q=s.R32UI),W===s.BYTE&&(Q=s.R8I),W===s.SHORT&&(Q=s.R16I),W===s.INT&&(Q=s.R32I)),S===s.RG&&(W===s.FLOAT&&(Q=s.RG32F),W===s.HALF_FLOAT&&(Q=s.RG16F),W===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RG8UI),W===s.UNSIGNED_SHORT&&(Q=s.RG16UI),W===s.UNSIGNED_INT&&(Q=s.RG32UI),W===s.BYTE&&(Q=s.RG8I),W===s.SHORT&&(Q=s.RG16I),W===s.INT&&(Q=s.RG32I)),S===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),W===s.UNSIGNED_INT&&(Q=s.RGB32UI),W===s.BYTE&&(Q=s.RGB8I),W===s.SHORT&&(Q=s.RGB16I),W===s.INT&&(Q=s.RGB32I)),S===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),W===s.UNSIGNED_INT&&(Q=s.RGBA32UI),W===s.BYTE&&(Q=s.RGBA8I),W===s.SHORT&&(Q=s.RGBA16I),W===s.INT&&(Q=s.RGBA32I)),S===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),S===s.RGBA){const Ue=ce?_a:yt.getTransfer(ne);W===s.FLOAT&&(Q=s.RGBA32F),W===s.HALF_FLOAT&&(Q=s.RGBA16F),W===s.UNSIGNED_BYTE&&(Q=Ue===Rt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(R,S){let W;return R?S===null||S===Es||S===ur?W=s.DEPTH24_STENCIL8:S===Gn?W=s.DEPTH32F_STENCIL8:S===io&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Es||S===ur?W=s.DEPTH_COMPONENT24:S===Gn?W=s.DEPTH_COMPONENT32F:S===io&&(W=s.DEPTH_COMPONENT16),W}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&u.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),x(S)}function L(R){const S=n.get(R);if(S.__webglInit===void 0)return;const W=R.source,ne=d.get(W);if(ne){const ce=ne[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(R),Object.keys(ne).length===0&&d.delete(W)}n.remove(R)}function b(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const W=R.source,ne=d.get(W);delete ne[S.__cacheKey],o.memory.textures--}function x(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ce=0;ce<S.__webglFramebuffer[ne].length;ce++)s.deleteFramebuffer(S.__webglFramebuffer[ne][ce]);else s.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)s.deleteFramebuffer(S.__webglFramebuffer[ne]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=R.textures;for(let ne=0,ce=W.length;ne<ce;ne++){const Q=n.get(W[ne]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(W[ne])}n.remove(R)}let N=0;function U(){N=0}function k(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function B(R,S){const W=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,R,S);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+S)}function G(R,S){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){J(W,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+S)}function K(R,S){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){J(W,R,S);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+S)}function V(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ie(W,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+S)}const le={[Bi]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},he={[vn]:s.NEAREST,[gd]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},Te={[ap]:s.NEVER,[fp]:s.ALWAYS,[lp]:s.LESS,[Td]:s.LEQUAL,[cp]:s.EQUAL,[dp]:s.GEQUAL,[up]:s.GREATER,[hp]:s.NOTEQUAL};function Ne(R,S){if(S.type===Gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===ra||S.magFilter===Yr||S.magFilter===Ii||S.minFilter===Cn||S.minFilter===ra||S.minFilter===Yr||S.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,le[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,le[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,le[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==Yr&&S.minFilter!==Ii||S.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const ne=S.source;let ce=d.get(ne);ce===void 0&&(ce={},d.set(ne,ce));const Q=Y(S);if(Q!==R.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[Q].usedTimes++;const Ue=ce[R.__cacheKey];Ue!==void 0&&(ce[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(S)),R.__cacheKey=Q,R.__webglTexture=ce[Q].texture}return W}function st(R,S,W){return Math.floor(Math.floor(R/W)/S)}function Se(R,S,W,ne){const Q=R.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,W,ne,S.data);else{Q.sort((_e,Ae)=>_e.start-Ae.start);let Ue=0;for(let _e=1;_e<Q.length;_e++){const Ae=Q[Ue],Ke=Q[_e],Ge=Ae.start+Ae.count,Ee=st(Ke.start,S.width,4),Qe=st(Ae.start,S.width,4);Ke.start<=Ge+1&&Ee===Qe&&st(Ke.start+Ke.count-1,S.width,4)===Ee?Ae.count=Math.max(Ae.count,Ke.start+Ke.count-Ae.start):(++Ue,Q[Ue]=Ke)}Q.length=Ue+1;const Me=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),Ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let _e=0,Ae=Q.length;_e<Ae;_e++){const Ke=Q[_e],Ge=Math.floor(Ke.start/4),Ee=Math.ceil(Ke.count/4),Qe=Ge%S.width,F=Math.floor(Ge/S.width),pe=Ee,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Qe,F,pe,ye,W,ne,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Me),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function J(R,S,W){let ne=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=s.TEXTURE_3D);const ce=je(R,S),Q=S.source;t.bindTexture(ne,R.__webglTexture,s.TEXTURE0+W);const Ue=n.get(Q);if(Q.version!==Ue.__version||ce===!0){t.activeTexture(s.TEXTURE0+W);const Me=yt.getPrimaries(yt.workingColorSpace),ze=S.colorSpace===Qi?null:yt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Qi||Me===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let _e=_(S.image,!1,i.maxTextureSize);_e=fe(S,_e);const Ae=r.convert(S.format,S.colorSpace),Ke=r.convert(S.type);let Ge=y(S.internalFormat,Ae,Ke,S.colorSpace,S.isVideoTexture);Ne(ne,S);let Ee;const Qe=S.mipmaps,F=S.isVideoTexture!==!0,pe=Ue.__version===void 0||ce===!0,ye=Q.dataReady,Oe=T(S,_e);if(S.isDepthTexture)Ge=v(S.format===hr,S.type),pe&&(F?t.texStorage2D(s.TEXTURE_2D,1,Ge,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Ae,Ke,null));else if(S.isDataTexture)if(Qe.length>0){F&&pe&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,Qe[0].width,Qe[0].height);for(let xe=0,oe=Qe.length;xe<oe;xe++)Ee=Qe[xe],F?ye&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Ae,Ke,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,Ge,Ee.width,Ee.height,0,Ae,Ke,Ee.data);S.generateMipmaps=!1}else F?(pe&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,_e.width,_e.height),ye&&Se(S,_e,Ae,Ke)):t.texImage2D(s.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Ae,Ke,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ge,Qe[0].width,Qe[0].height,_e.depth);for(let xe=0,oe=Qe.length;xe<oe;xe++)if(Ee=Qe[xe],S.format!==Wn)if(Ae!==null)if(F){if(ye)if(S.layerUpdates.size>0){const He=yh(Ee.width,Ee.height,S.format,S.type);for(const rt of S.layerUpdates){const Pt=Ee.data.subarray(rt*He/Ee.data.BYTES_PER_ELEMENT,(rt+1)*He/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,rt,Ee.width,Ee.height,1,Ae,Pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,_e.depth,Ae,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ge,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,_e.depth,Ae,Ke,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ge,Ee.width,Ee.height,_e.depth,0,Ae,Ke,Ee.data)}else{F&&pe&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,Qe[0].width,Qe[0].height);for(let xe=0,oe=Qe.length;xe<oe;xe++)Ee=Qe[xe],S.format!==Wn?Ae!==null?F?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ye&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Ae,Ke,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,Ge,Ee.width,Ee.height,0,Ae,Ke,Ee.data)}else if(S.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ge,_e.width,_e.height,_e.depth),ye)if(S.layerUpdates.size>0){const xe=yh(_e.width,_e.height,S.format,S.type);for(const oe of S.layerUpdates){const He=_e.data.subarray(oe*xe/_e.data.BYTES_PER_ELEMENT,(oe+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,_e.width,_e.height,1,Ae,Ke,He)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ke,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,_e.width,_e.height,_e.depth,0,Ae,Ke,_e.data);else if(S.isData3DTexture)F?(pe&&t.texStorage3D(s.TEXTURE_3D,Oe,Ge,_e.width,_e.height,_e.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ke,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,_e.width,_e.height,_e.depth,0,Ae,Ke,_e.data);else if(S.isFramebufferTexture){if(pe)if(F)t.texStorage2D(s.TEXTURE_2D,Oe,Ge,_e.width,_e.height);else{let xe=_e.width,oe=_e.height;for(let He=0;He<Oe;He++)t.texImage2D(s.TEXTURE_2D,He,Ge,xe,oe,0,Ae,Ke,null),xe>>=1,oe>>=1}}else if(Qe.length>0){if(F&&pe){const xe=it(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Oe,Ge,xe.width,xe.height)}for(let xe=0,oe=Qe.length;xe<oe;xe++)Ee=Qe[xe],F?ye&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ae,Ke,Ee):t.texImage2D(s.TEXTURE_2D,xe,Ge,Ae,Ke,Ee);S.generateMipmaps=!1}else if(F){if(pe){const xe=it(_e);t.texStorage2D(s.TEXTURE_2D,Oe,Ge,xe.width,xe.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ke,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Ae,Ke,_e);m(S)&&p(ne),Ue.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,W){if(S.image.length!==6)return;const ne=je(R,S),ce=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const Q=n.get(ce);if(ce.version!==Q.__version||ne===!0){t.activeTexture(s.TEXTURE0+W);const Ue=yt.getPrimaries(yt.workingColorSpace),Me=S.colorSpace===Qi?null:yt.getPrimaries(S.colorSpace),ze=S.colorSpace===Qi||Ue===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let oe=0;oe<6;oe++)!Ve&&!_e?Ae[oe]=_(S.image[oe],!0,i.maxCubemapSize):Ae[oe]=_e?S.image[oe].image:S.image[oe],Ae[oe]=fe(S,Ae[oe]);const Ke=Ae[0],Ge=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),Qe=y(S.internalFormat,Ge,Ee,S.colorSpace),F=S.isVideoTexture!==!0,pe=Q.__version===void 0||ne===!0,ye=ce.dataReady;let Oe=T(S,Ke);Ne(s.TEXTURE_CUBE_MAP,S);let xe;if(Ve){F&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,Qe,Ke.width,Ke.height);for(let oe=0;oe<6;oe++){xe=Ae[oe].mipmaps;for(let He=0;He<xe.length;He++){const rt=xe[He];S.format!==Wn?Ge!==null?F?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,rt.width,rt.height,Ge,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Qe,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,rt.width,rt.height,Ge,Ee,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Qe,rt.width,rt.height,0,Ge,Ee,rt.data)}}}else{if(xe=S.mipmaps,F&&pe){xe.length>0&&Oe++;const oe=it(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(_e){F?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae[oe].width,Ae[oe].height,Ge,Ee,Ae[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Ae[oe].width,Ae[oe].height,0,Ge,Ee,Ae[oe].data);for(let He=0;He<xe.length;He++){const Pt=xe[He].image[oe].image;F?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,Pt.width,Pt.height,Ge,Ee,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Qe,Pt.width,Pt.height,0,Ge,Ee,Pt.data)}}else{F?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ge,Ee,Ae[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Ge,Ee,Ae[oe]);for(let He=0;He<xe.length;He++){const rt=xe[He];F?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,Ge,Ee,rt.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Qe,Ge,Ee,rt.image[oe])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Q.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ge(R,S,W,ne,ce,Q){const Ue=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),ze=y(W.internalFormat,Ue,Me,W.colorSpace),Ve=n.get(S),_e=n.get(W);if(_e.__renderTarget=S,!Ve.__hasExternalTextures){const Ae=Math.max(1,S.width>>Q),Ke=Math.max(1,S.height>>Q);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,ze,Ae,Ke,S.depth,0,Ue,Me,null):t.texImage2D(ce,Q,ze,Ae,Ke,0,Ue,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ae(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ce,_e.__webglTexture,0,te(S)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ce,_e.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(R,S,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const ne=S.depthTexture,ce=ne&&ne.isDepthTexture?ne.type:null,Q=v(S.stencilBuffer,ce),Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=te(S);ae(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,Q,S.width,S.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,R)}else{const ne=S.textures;for(let ce=0;ce<ne.length;ce++){const Q=ne[ce],Ue=r.convert(Q.format,Q.colorSpace),Me=r.convert(Q.type),ze=y(Q.internalFormat,Ue,Me,Q.colorSpace),Ve=te(S);W&&ae(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,ze,S.width,S.height):ae(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,ze,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ze,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const ce=ne.__webglTexture,Q=te(S);if(S.depthTexture.format===so)ae(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(S.depthTexture.format===hr)ae(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function j(R){const S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",ce)};ne.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=ne}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const ne=R.texture.mipmaps;ne&&ne.length>0?ve(S.__webglFramebuffer[0],R):ve(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=s.createRenderbuffer(),de(S.__webglDepthbuffer[ne],R,!1);else{const ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Q)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),de(S.__webglDepthbuffer,R,!1);else{const ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(R,S,W){const ne=n.get(R);S!==void 0&&ge(ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&j(R)}function C(R){const S=R.texture,W=n.get(R),ne=n.get(S);R.addEventListener("dispose",A);const ce=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ue=ce.length>1;if(Ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=S.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let ze=0;ze<S.mipmaps.length;ze++)W.__webglFramebuffer[Me][ze]=s.createFramebuffer()}else W.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)W.__webglFramebuffer[Me]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let Me=0,ze=ce.length;Me<ze;Me++){const Ve=n.get(ce[Me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ae(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<ce.length;Me++){const ze=ce[Me];W.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const Ve=r.convert(ze.format,ze.colorSpace),_e=r.convert(ze.type),Ae=y(ze.internalFormat,Ve,_e,ze.colorSpace,R.isXRRenderTarget===!0),Ke=te(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Ae,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),de(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)ge(W.__webglFramebuffer[Me][ze],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ze);else ge(W.__webglFramebuffer[Me],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Me=0,ze=ce.length;Me<ze;Me++){const Ve=ce[Me],_e=n.get(Ve);let Ae=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),Ne(Ae,Ve),ge(W.__webglFramebuffer,R,Ve,s.COLOR_ATTACHMENT0+Me,Ae,0),m(Ve)&&p(Ae)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,ne.__webglTexture),Ne(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)ge(W.__webglFramebuffer[ze],R,S,s.COLOR_ATTACHMENT0,Me,ze);else ge(W.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,Me,0);m(S)&&p(Me),t.unbindTexture()}R.depthBuffer&&j(R)}function $(R){const S=R.textures;for(let W=0,ne=S.length;W<ne;W++){const ce=S[W];if(m(ce)){const Q=M(R),Ue=n.get(ce).__webglTexture;t.bindTexture(Q,Ue),p(Q),t.unbindTexture()}}}const I=[],O=[];function z(R){if(R.samples>0){if(ae(R)===!1){const S=R.textures,W=R.width,ne=R.height;let ce=s.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(R),Me=S.length>1;if(Me)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ve]);const _e=n.get(S[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,W,ne,0,0,W,ne,ce,s.NEAREST),l===!0&&(I.length=0,O.length=0,I.push(s.COLOR_ATTACHMENT0+Ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(I.push(Q),O.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ve]);const _e=n.get(S[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function te(R){return Math.min(i.maxSamples,R.samples)}function ae(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function fe(R,S){const W=R.colorSpace,ne=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Pn&&W!==Qi&&(yt.getTransfer(W)===Rt?(ne!==Wn||ce!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=be,this.setupRenderTarget=C,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ae}function Ix(s,e){function t(n,i=Qi){let r;const o=yt.getTransfer(i);if(n===vi)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_d)return s.BYTE;if(n===vd)return s.SHORT;if(n===io)return s.UNSIGNED_SHORT;if(n===Vc)return s.INT;if(n===Es)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===yd)return s.ALPHA;if(n===bd)return s.RGB;if(n===Wn)return s.RGBA;if(n===so)return s.DEPTH_COMPONENT;if(n===hr)return s.DEPTH_STENCIL;if(n===Ra)return s.RED;if(n===Xc)return s.RED_INTEGER;if(n===Sd)return s.RG;if(n===qc)return s.RG_INTEGER;if(n===Yc)return s.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===Zl||n===Jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===tc)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===vc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===yc||n===bc||n===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends yr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ox,p={},M=t.getContextAttributes();let y=null,v=null;const T=[],w=[],A=new Pe;let L=null;const b=new jt;b.viewport=new Mt;const x=new jt;x.viewport=new Mt;const N=[b,x],U=new $m;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=T[J];return ie===void 0&&(ie=new pl,T[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=T[J];return ie===void 0&&(ie=new pl,T[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=T[J];return ie===void 0&&(ie=new pl,T[J]=ie),ie.getHandSpace()};function B(J){const ie=w.indexOf(J.inputSource);if(ie===-1)return;const ge=T[ie];ge!==void 0&&(ge.update(J.inputSource,J.frame,c||o),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let J=0;J<T.length;J++){const ie=w[J];ie!==null&&(w[J]=null,T[J].disconnect(ie))}k=null,Y=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(y),f=null,d=null,h=null,i=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,de=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?hr:so,de=M.stencil?ur:Es);const j={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(j),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new wn(d.textureWidth,d.textureHeight,{format:Wn,type:vi,depthTexture:new ou(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(J){for(let ie=0;ie<J.removed.length;ie++){const ge=J.removed[ie],de=w.indexOf(ge);de>=0&&(w[de]=null,T[de].disconnect(ge))}for(let ie=0;ie<J.added.length;ie++){const ge=J.added[ie];let de=w.indexOf(ge);if(de===-1){for(let j=0;j<T.length;j++)if(j>=w.length){w.push(ge),de=j;break}else if(w[j]===null){w[j]=ge,de=j;break}if(de===-1)break}const ve=T[de];ve&&ve.connect(ge)}}const V=new D,le=new D;function he(J,ie,ge){V.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const de=V.distanceTo(le),ve=ie.projectionMatrix.elements,j=ge.projectionMatrix.elements,be=ve[14]/(ve[10]-1),C=ve[14]/(ve[10]+1),$=(ve[9]+1)/ve[5],I=(ve[9]-1)/ve[5],O=(ve[8]-1)/ve[0],z=(j[8]+1)/j[0],te=be*O,ae=be*z,we=de/(-O+z),fe=we*-O;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(fe),J.translateZ(we),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const it=be+we,R=C+we,S=te-fe,W=ae+(de-fe),ne=$*C/R*it,ce=I*C/R*it;J.projectionMatrix.makePerspective(S,W,ne,ce,it,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Te(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ie=J.near,ge=J.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),U.near=x.near=b.near=ie,U.far=x.far=b.far=ge,(k!==U.near||Y!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,Y=U.far),U.layers.mask=J.layers.mask|6,b.layers.mask=U.layers.mask&3,x.layers.mask=U.layers.mask&5;const de=J.parent,ve=U.cameras;Te(U,de);for(let j=0;j<ve.length;j++)Te(ve[j],de);ve.length===2?he(U,b,x):U.projectionMatrix.copy(b.projectionMatrix),Ne(J,U,de)};function Ne(J,ie,ge){ge===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let je=null;function st(J,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let de=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,de=!0);for(let C=0;C<ge.length;C++){const $=ge[C];let I=null;if(f!==null)I=f.getViewport($);else{const z=h.getViewSubImage(d,$);I=z.viewport,C===0&&(e.setRenderTargetTextures(v,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(v))}let O=N[C];O===void 0&&(O=new jt,O.layers.enable(C),O.viewport=new Mt,N[C]=O),O.matrix.fromArray($.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(I.x,I.y,I.width,I.height),C===0&&(U.matrix.copy(O.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),de===!0&&U.cameras.push(O)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const C=h.getDepthInformation(ge[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<ge.length;C++){const $=ge[C].camera;if($){let I=p[$];I||(I=new Od,p[$]=I);const O=h.getCameraImage($);I.sourceTexture=O}}}}for(let ge=0;ge<T.length;ge++){const de=w[ge],ve=T[ge];de!==null&&ve!==void 0&&ve.update(de,ie,c||o)}je&&je(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Se=new Xd;Se.setAnimationLoop(st),this.setAnimationLoop=function(J){je=J},this.dispose=function(){}}}const gs=new xi,Bx=new ot;function kx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ld(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,gs.copy(v),gs.x*=-1,gs.y*=-1,gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(gs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(M,T);const w=e.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function u(M){const y=h();M.__bindingPointIndex=y;const v=s.createBuffer(),T=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],v=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,x=L.length;b<x;b++){const N=L[b];if(f(N,w,b,T)===!0){const U=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let B=0;B<k.length;B++){const G=k[B],K=_(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+Y,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,v,T){const w=M.value,A=y+"_"+v;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const L=T[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(M){const y=M.uniforms;let v=0;const T=16;for(let A=0,L=y.length;A<L;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,N=b.length;x<N;x++){const U=b[x],k=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,B=k.length;Y<B;Y++){const G=k[Y],K=_(G),V=v%T,le=V%K.boundary,he=V+le;v+=le,he!==0&&T-he<K.storage&&(v+=T-he),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=K.storage}}}const w=v%T;return w>0&&(v+=T-w),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Hx{constructor(e={}){const{canvas:t=Pp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=It;let w=0,A=0,L=null,b=-1,x=null;const N=new Mt,U=new Mt;let k=null;const Y=new Je(0);let B=0,G=t.width,K=t.height,V=1,le=null,he=null;const Te=new Mt(0,0,G,K),Ne=new Mt(0,0,G,K);let je=!1;const st=new nu;let Se=!1,J=!1;const ie=new ot,ge=new D,de=new Mt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function be(){return L===null?V:1}let C=n;function $(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),C===null){const H="webgl2";if(C=$(H,E),C===null)throw $(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let I,O,z,te,ae,we,fe,it,R,S,W,ne,ce,Q,Ue,Me,ze,Ve,_e,Ae,Ke,Ge,Ee,Qe;function F(){I=new Z_(C),I.init(),Ge=new Ix(C,I),O=new W_(C,I,e,Ge),z=new Lx(C,I),O.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),te=new ev(C),ae=new vx,we=new Dx(C,I,z,ae,O,Ge,te),fe=new q_(v),it=new j_(v),R=new og(C),Ee=new V_(C,R),S=new J_(C,R,te,Ee),W=new nv(C,S,R,te),_e=new tv(C,O,we),Me=new X_(ae),ne=new _x(v,fe,it,I,O,Ee,Me),ce=new kx(v,ae),Q=new Mx,Ue=new Ex(I),Ve=new H_(v,fe,it,z,W,f,l),ze=new Cx(v,W,O),Qe=new zx(C,te,O,z),Ae=new G_(C,I,te),Ke=new Q_(C,I,te),te.programs=ne.programs,v.capabilities=O,v.extensions=I,v.properties=ae,v.renderLists=Q,v.shadowMap=ze,v.state=z,v.info=te}F();const pe=new Fx(v,C);this.xr=pe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=I.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=I.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,H,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=H,t.width=Math.floor(E*V),t.height=Math.floor(H*V),q===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(E,H,q){G=E,K=H,V=q,t.width=Math.floor(E*q),t.height=Math.floor(H*q),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,H,q,Z){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,H,q,Z),z.viewport(N.copy(Te).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,H,q,Z){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,H,q,Z),z.scissor(U.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){z.setScissorTest(je=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,q=!0){let Z=0;if(E){let X=!1;if(L!==null){const ue=L.texture.format;X=ue===Yc||ue===qc||ue===Xc}if(X){const ue=L.texture.type,Ce=ue===vi||ue===Es||ue===io||ue===ur||ue===Gc||ue===Wc,Ie=Ve.getClearColor(),ke=Ve.getClearAlpha(),et=Ie.r,tt=Ie.g,qe=Ie.b;Ce?(g[0]=et,g[1]=tt,g[2]=qe,g[3]=ke,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=et,_[1]=tt,_[2]=qe,_[3]=ke,C.clearBufferiv(C.COLOR,0,_))}else Z|=C.COLOR_BUFFER_BIT}H&&(Z|=C.DEPTH_BUFFER_BIT),q&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ve.dispose(),Q.dispose(),Ue.dispose(),ae.dispose(),fe.dispose(),it.dispose(),W.dispose(),Ee.dispose(),Qe.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",cn),pe.removeEventListener("sessionend",un),yi.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=te.autoReset,H=ze.enabled,q=ze.autoUpdate,Z=ze.needsUpdate,X=ze.type;F(),te.autoReset=E,ze.enabled=H,ze.autoUpdate=q,ze.needsUpdate=Z,ze.type=X}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const H=E.target;H.removeEventListener("dispose",oe),He(H)}function He(E){rt(E),ae.remove(E)}function rt(E){const H=ae.get(E).programs;H!==void 0&&(H.forEach(function(q){ne.releaseProgram(q)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,q,Z,X,ue){H===null&&(H=ve);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Ie=Ds(E,H,q,Z,X);z.setMaterial(Z,Ce);let ke=q.index,et=1;if(Z.wireframe===!0){if(ke=S.getWireframeAttribute(q),ke===void 0)return;et=2}const tt=q.drawRange,qe=q.attributes.position;let ut=tt.start*et,St=(tt.start+tt.count)*et;ue!==null&&(ut=Math.max(ut,ue.start*et),St=Math.min(St,(ue.start+ue.count)*et)),ke!==null?(ut=Math.max(ut,0),St=Math.min(St,ke.count)):qe!=null&&(ut=Math.max(ut,0),St=Math.min(St,qe.count));const at=St-ut;if(at<0||at===1/0)return;Ee.setup(X,Z,Ie,q,ke);let dt,At=Ae;if(ke!==null&&(dt=R.get(ke),At=Ke,At.setIndex(dt)),X.isMesh)Z.wireframe===!0?(z.setLineWidth(Z.wireframeLinewidth*be()),At.setMode(C.LINES)):At.setMode(C.TRIANGLES);else if(X.isLine){let We=Z.linewidth;We===void 0&&(We=1),z.setLineWidth(We*be()),X.isLineSegments?At.setMode(C.LINES):X.isLineLoop?At.setMode(C.LINE_LOOP):At.setMode(C.LINE_STRIP)}else X.isPoints?At.setMode(C.POINTS):X.isSprite&&At.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,Lt=X._multiDrawCounts,xt=X._multiDrawCount,hn=ke?R.get(ke).bytesPerElement:1,dn=ae.get(Z).currentProgram.getUniforms();for(let In=0;In<xt;In++)dn.setValue(C,"_gl_DrawID",In),At.render(We[In]/hn,Lt[In])}else if(X.isInstancedMesh)At.renderInstances(ut,at,X.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Lt=Math.min(q.instanceCount,We);At.renderInstances(ut,at,Lt)}else At.render(ut,at)};function Pt(E,H,q){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,ci(E,H,q),E.side=Fi,E.needsUpdate=!0,ci(E,H,q),E.side=Rn):ci(E,H,q)}this.compile=function(E,H,q=null){q===null&&(q=E),p=Ue.get(q),p.init(H),y.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==q&&E.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ue=X.material;if(ue)if(Array.isArray(ue))for(let Ce=0;Ce<ue.length;Ce++){const Ie=ue[Ce];Pt(Ie,q,X),Z.add(Ie)}else Pt(ue,q,X),Z.add(ue)}),p=y.pop(),Z},this.compileAsync=function(E,H,q=null){const Z=this.compile(E,H,q);return new Promise(X=>{function ue(){if(Z.forEach(function(Ce){ae.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){X(E);return}setTimeout(ue,10)}I.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let vt=null;function Dn(E){vt&&vt(E)}function cn(){yi.stop()}function un(){yi.start()}const yi=new Xd;yi.setAnimationLoop(Dn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(E){vt=E,pe.setAnimationLoop(E),E===null?yi.stop():yi.start()},pe.addEventListener("sessionstart",cn),pe.addEventListener("sessionend",un),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(H),H=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,L),p=Ue.get(E,y.length),p.init(H),y.push(p),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),st.setFromProjectionMatrix(ie,gi,H.reversedDepth),J=this.localClippingEnabled,Se=Me.init(this.clippingPlanes,J),m=Q.get(E,M.length),m.init(),M.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&qn(ue,H,-1/0,v.sortObjects)}qn(E,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,he),j=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,j&&Ve.addToRenderList(m,E),this.info.render.frame++,Se===!0&&Me.beginShadows();const q=p.state.shadowsArray;ze.render(q,E,H),Se===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,X=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ue=H.cameras;if(X.length>0)for(let Ce=0,Ie=ue.length;Ce<Ie;Ce++){const ke=ue[Ce];Ps(Z,X,E,ke)}j&&Ve.render(E);for(let Ce=0,Ie=ue.length;Ce<Ie;Ce++){const ke=ue[Ce];Cs(m,E,ke,ke.viewport)}}else X.length>0&&Ps(Z,X,E,H),j&&Ve.render(E),Cs(m,E,H);L!==null&&A===0&&(we.updateMultisampleRenderTarget(L),we.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,H),Ee.resetDefaultState(),b=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],Se===!0&&Me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function qn(E,H,q,Z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||st.intersectsSprite(E)){Z&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ce=W.update(E),Ie=E.material;Ie.visible&&m.push(E,Ce,Ie,q,de.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||st.intersectsObject(E))){const Ce=W.update(E),Ie=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),de.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),de.copy(Ce.boundingSphere.center)),de.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(Ie)){const ke=Ce.groups;for(let et=0,tt=ke.length;et<tt;et++){const qe=ke[et],ut=Ie[qe.materialIndex];ut&&ut.visible&&m.push(E,Ce,ut,q,de.z,qe)}}else Ie.visible&&m.push(E,Ce,Ie,q,de.z,null)}}const ue=E.children;for(let Ce=0,Ie=ue.length;Ce<Ie;Ce++)qn(ue[Ce],H,q,Z)}function Cs(E,H,q,Z){const X=E.opaque,ue=E.transmissive,Ce=E.transparent;p.setupLightsView(q),Se===!0&&Me.setGlobalState(v.clippingPlanes,q),Z&&z.viewport(N.copy(Z)),X.length>0&&Vi(X,H,q),ue.length>0&&Vi(ue,H,q),Ce.length>0&&Vi(Ce,H,q),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ps(E,H,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new wn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Xn:vi,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||N;ue.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),ke=v.getActiveCubeFace(),et=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(Y),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),j&&Ve.render(q);const tt=v.toneMapping;v.toneMapping=rs;const qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Se===!0&&Me.setGlobalState(v.clippingPlanes,Z),Vi(E,q,Z),we.updateMultisampleRenderTarget(ue),we.updateRenderTargetMipmap(ue),I.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let St=0,at=H.length;St<at;St++){const dt=H[St],At=dt.object,We=dt.geometry,Lt=dt.material,xt=dt.group;if(Lt.side===Rn&&At.layers.test(Z.layers)){const hn=Lt.side;Lt.side=On,Lt.needsUpdate=!0,Gi(At,q,Z,We,Lt,xt),Lt.side=hn,Lt.needsUpdate=!0,ut=!0}}ut===!0&&(we.updateMultisampleRenderTarget(ue),we.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ie,ke,et),v.setClearColor(Y,B),qe!==void 0&&(Z.viewport=qe),v.toneMapping=tt}function Vi(E,H,q){const Z=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ue=E.length;X<ue;X++){const Ce=E[X],Ie=Ce.object,ke=Ce.geometry,et=Ce.group;let tt=Ce.material;tt.allowOverride===!0&&Z!==null&&(tt=Z),Ie.layers.test(q.layers)&&Gi(Ie,H,q,ke,tt,et)}}function Gi(E,H,q,Z,X,ue){E.onBeforeRender(v,H,q,Z,X,ue),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(v,H,q,Z,E,ue),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,v.renderBufferDirect(q,H,Z,X,E,ue),X.side=Fi,X.needsUpdate=!0,v.renderBufferDirect(q,H,Z,X,E,ue),X.side=Rn):v.renderBufferDirect(q,H,Z,X,E,ue),E.onAfterRender(v,H,q,Z,X,ue)}function ci(E,H,q){H.isScene!==!0&&(H=ve);const Z=ae.get(E),X=p.state.lights,ue=p.state.shadowsArray,Ce=X.state.version,Ie=ne.getParameters(E,X.state,ue,H,q),ke=ne.getProgramCacheKey(Ie);let et=Z.programs;Z.environment=E.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(E.isMeshStandardMaterial?it:fe).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,et===void 0&&(E.addEventListener("dispose",oe),et=new Map,Z.programs=et);let tt=et.get(ke);if(tt!==void 0){if(Z.currentProgram===tt&&Z.lightsStateVersion===Ce)return Ls(E,Ie),tt}else Ie.uniforms=ne.getUniforms(E),E.onBeforeCompile(Ie,v),tt=ne.acquireProgram(Ie,ke),et.set(ke,tt),Z.uniforms=Ie.uniforms;const qe=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=Me.uniform),Ls(E,Ie),Z.needsLights=Lr(E),Z.lightsStateVersion=Ce,Z.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=tt,Z.uniformsList=null,tt}function _o(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=ua.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Ls(E,H){const q=ae.get(E);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Ds(E,H,q,Z,X){H.isScene!==!0&&(H=ve),we.resetTextureUnits();const ue=H.fog,Ce=Z.isMeshStandardMaterial?H.environment:null,Ie=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pn,ke=(Z.isMeshStandardMaterial?it:fe).get(Z.envMap||Ce),et=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let at=rs;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(at=v.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=dt!==void 0?dt.length:0,We=ae.get(Z),Lt=p.state.lights;if(Se===!0&&(J===!0||E!==x)){const Yt=E===x&&Z.id===b;Me.setState(Z,E,Yt)}let xt=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Lt.state.version||We.outputColorSpace!==Ie||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==ke||Z.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==tt||We.morphTargets!==qe||We.morphNormals!==ut||We.morphColors!==St||We.toneMapping!==at||We.morphTargetsCount!==At)&&(xt=!0):(xt=!0,We.__version=Z.version);let hn=We.currentProgram;xt===!0&&(hn=ci(Z,H,X));let dn=!1,In=!1,ui=!1;const wt=hn.getUniforms(),Vt=We.uniforms;if(z.useProgram(hn.program)&&(dn=!0,In=!0,ui=!0),Z.id!==b&&(b=Z.id,In=!0),dn||x!==E){z.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(C,"projectionMatrix",E.projectionMatrix),wt.setValue(C,"viewMatrix",E.matrixWorldInverse);const kt=wt.map.cameraPosition;kt!==void 0&&kt.setValue(C,ge.setFromMatrixPosition(E.matrixWorld)),O.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,In=!0,ui=!0)}if(X.isSkinnedMesh){wt.setOptional(C,X,"bindMatrix"),wt.setOptional(C,X,"bindMatrixInverse");const Yt=X.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),wt.setValue(C,"boneTexture",Yt.boneTexture,we))}X.isBatchedMesh&&(wt.setOptional(C,X,"batchingTexture"),wt.setValue(C,"batchingTexture",X._matricesTexture,we),wt.setOptional(C,X,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",X._indirectTexture,we),wt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",X._colorsTexture,we));const Gt=q.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&_e.update(X,q,hn),(In||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,wt.setValue(C,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Vt.envMap.value=ke,Vt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Vt.envMapIntensity.value=H.environmentIntensity),In&&(wt.setValue(C,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Qt(Vt,ui),ue&&Z.fog===!0&&ce.refreshFogUniforms(Vt,ue),ce.refreshMaterialUniforms(Vt,Z,V,K,p.state.transmissionRenderTarget[E.id]),ua.upload(C,_o(We),Vt,we)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ua.upload(C,_o(We),Vt,we),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(C,"center",X.center),wt.setValue(C,"modelViewMatrix",X.modelViewMatrix),wt.setValue(C,"normalMatrix",X.normalMatrix),wt.setValue(C,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Yt=Z.uniformsGroups;for(let kt=0,Us=Yt.length;kt<Us;kt++){const Nn=Yt[kt];Qe.update(Nn,hn),Qe.bind(Nn,hn)}}return hn}function Qt(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Lr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,H,q){const Z=ae.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=H,ae.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const q=ae.get(E);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Is=C.createFramebuffer();this.setRenderTarget=function(E,H=0,q=0){L=E,w=H,A=q;let Z=!0,X=null,ue=!1,Ce=!1;if(E){const ke=ae.get(E);if(ke.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(C.FRAMEBUFFER,null),Z=!1;else if(ke.__webglFramebuffer===void 0)we.setupRenderTarget(E);else if(ke.__hasExternalTextures)we.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const qe=E.depthTexture;if(ke.__boundDepthTexture!==qe){if(qe!==null&&ae.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(E)}}const et=E.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const tt=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(tt[H])?X=tt[H][q]:X=tt[H],ue=!0):E.samples>0&&we.useMultisampledRTT(E)===!1?X=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[q]:X=tt,N.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest}else N.copy(Te).multiplyScalar(V).floor(),U.copy(Ne).multiplyScalar(V).floor(),k=je;if(q!==0&&(X=Is),z.bindFramebuffer(C.FRAMEBUFFER,X)&&Z&&z.drawBuffers(E,X),z.viewport(N),z.scissor(U),z.setScissorTest(k),ue){const ke=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,q)}else if(Ce){const ke=H;for(let et=0;et<E.textures.length;et++){const tt=ae.get(E.textures[et]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+et,tt.__webglTexture,q,ke)}}else if(E!==null&&q!==0){const ke=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ke.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(E,H,q,Z,X,ue,Ce,Ie=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke){z.bindFramebuffer(C.FRAMEBUFFER,ke);try{const et=E.textures[Ie],tt=et.format,qe=et.type;if(!O.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-Z&&q>=0&&q<=E.height-X&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ie),C.readPixels(H,q,Z,X,Ge.convert(tt),Ge.convert(qe),ue))}finally{const et=L!==null?ae.get(L).__webglFramebuffer:null;z.bindFramebuffer(C.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(E,H,q,Z,X,ue,Ce,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke)if(H>=0&&H<=E.width-Z&&q>=0&&q<=E.height-X){z.bindFramebuffer(C.FRAMEBUFFER,ke);const et=E.textures[Ie],tt=et.format,qe=et.type;if(!O.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.bufferData(C.PIXEL_PACK_BUFFER,ue.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ie),C.readPixels(H,q,Z,X,Ge.convert(tt),Ge.convert(qe),0);const St=L!==null?ae.get(L).__webglFramebuffer:null;z.bindFramebuffer(C.FRAMEBUFFER,St);const at=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Lp(C,at,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ue),C.deleteBuffer(ut),C.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,q=0){const Z=Math.pow(2,-q),X=Math.floor(E.image.width*Z),ue=Math.floor(E.image.height*Z),Ce=H!==null?H.x:0,Ie=H!==null?H.y:0;we.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,Ce,Ie,X,ue),z.unbindTexture()};const vo=C.createFramebuffer(),Ns=C.createFramebuffer();this.copyTextureToTexture=function(E,H,q=null,Z=null,X=0,ue=null){ue===null&&(X!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let Ce,Ie,ke,et,tt,qe,ut,St,at;const dt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(q!==null)Ce=q.max.x-q.min.x,Ie=q.max.y-q.min.y,ke=q.isBox3?q.max.z-q.min.z:1,et=q.min.x,tt=q.min.y,qe=q.isBox3?q.min.z:0;else{const Gt=Math.pow(2,-X);Ce=Math.floor(dt.width*Gt),Ie=Math.floor(dt.height*Gt),E.isDataArrayTexture?ke=dt.depth:E.isData3DTexture?ke=Math.floor(dt.depth*Gt):ke=1,et=0,tt=0,qe=0}Z!==null?(ut=Z.x,St=Z.y,at=Z.z):(ut=0,St=0,at=0);const At=Ge.convert(H.format),We=Ge.convert(H.type);let Lt;H.isData3DTexture?(we.setTexture3D(H,0),Lt=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(we.setTexture2DArray(H,0),Lt=C.TEXTURE_2D_ARRAY):(we.setTexture2D(H,0),Lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const xt=C.getParameter(C.UNPACK_ROW_LENGTH),hn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),dn=C.getParameter(C.UNPACK_SKIP_PIXELS),In=C.getParameter(C.UNPACK_SKIP_ROWS),ui=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,et),C.pixelStorei(C.UNPACK_SKIP_ROWS,tt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe);const wt=E.isDataArrayTexture||E.isData3DTexture,Vt=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Gt=ae.get(E),Yt=ae.get(H),kt=ae.get(Gt.__renderTarget),Us=ae.get(Yt.__renderTarget);z.bindFramebuffer(C.READ_FRAMEBUFFER,kt.__webglFramebuffer),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Nn=0;Nn<ke;Nn++)wt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,X,qe+Nn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,ue,at+Nn)),C.blitFramebuffer(et,tt,Ce,Ie,ut,St,Ce,Ie,C.DEPTH_BUFFER_BIT,C.NEAREST);z.bindFramebuffer(C.READ_FRAMEBUFFER,null),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||ae.has(E)){const Gt=ae.get(E),Yt=ae.get(H);z.bindFramebuffer(C.READ_FRAMEBUFFER,vo),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ns);for(let kt=0;kt<ke;kt++)wt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,X,qe+kt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gt.__webglTexture,X),Vt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,ue,at+kt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,ue),X!==0?C.blitFramebuffer(et,tt,Ce,Ie,ut,St,Ce,Ie,C.COLOR_BUFFER_BIT,C.NEAREST):Vt?C.copyTexSubImage3D(Lt,ue,ut,St,at+kt,et,tt,Ce,Ie):C.copyTexSubImage2D(Lt,ue,ut,St,et,tt,Ce,Ie);z.bindFramebuffer(C.READ_FRAMEBUFFER,null),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Vt?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Lt,ue,ut,St,at,Ce,Ie,ke,At,We,dt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(Lt,ue,ut,St,at,Ce,Ie,ke,At,dt.data):C.texSubImage3D(Lt,ue,ut,St,at,Ce,Ie,ke,At,We,dt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ue,ut,St,Ce,Ie,At,We,dt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ue,ut,St,dt.width,dt.height,At,dt.data):C.texSubImage2D(C.TEXTURE_2D,ue,ut,St,Ce,Ie,At,We,dt);C.pixelStorei(C.UNPACK_ROW_LENGTH,xt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,hn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,dn),C.pixelStorei(C.UNPACK_SKIP_ROWS,In),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ui),ue===0&&H.generateMipmaps&&C.generateMipmap(Lt),z.unbindTexture()},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&we.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,z.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function Vx(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=qh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=qh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function qh(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new ln(o,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Yh(s,e){if(e===ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wc||e===wd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===wc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Gx extends Er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qr.extractUrlBase(e);o=Qr.resolveURL(c,this.path)}else o=Qr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jd){try{o[_t.KHR_BINARY_GLTF]=new cM(e)}catch(h){i&&i(h);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new qx;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new uM(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new hM;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new dM;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Wx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xx{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ym(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wt(u),c.distance=h;break;case"spot":c=new Da(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class qx{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class Yx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Kx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(r)}}class $x{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Zx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Jx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Qx{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(a[0],a[1],a[2],Pn),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(a[0],a[1],a[2],Pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class rM{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class oM{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class aM{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class lM{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ot,m=new D,p=new us,M=new D(1,1,1),y=new Ma(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,M));for(const v in l)if(v==="_COLOR_0"){const T=l[v];y.instanceColor=new xa(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Ut.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const jd="glTF",Hr=12,Kh={JSON:1313821514,BIN:5130562};class cM{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hr,r=new DataView(e,Hr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Kh.JSON){const c=new Uint8Array(e,Hr+o,a);this.content=n.decode(c)}else if(l===Kh.BIN){const c=Hr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=rr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Pn,d)})})}}class hM{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dM{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class Zd extends fo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+h;for(let v=0;v!==a;v++){const T=o[_+v+a],w=o[_+v+l]*u,A=o[g+v+a],L=o[g+v]*u;r[v]=M*T+y*w+m*A+p*L}return r}}const fM=new us;class pM extends Zd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return fM.fromArray(r).normalize().toArray(r),r}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$h={9728:vn,9729:Cn,9984:gd,9985:ra,9986:Yr,9987:Ii},jh={33071:ts,33648:ga,10497:Bi},Ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mM={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},Dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),s.DefaultMaterial}function _s(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _M(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xM(s){let e;const t=s.extensions&&s.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Il(t.attributes):e=s.indices+":"+Il(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Il(s.targets[n]);return e}function Il(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yM=new ot;class bM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new co(this.options.manager):this.textureLoader=new Km(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _s(r,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Qr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ll[i.type],a=rr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ln(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ll[i.type],c=rr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(_=new c(a,p*f,i.count*f/u),y=new nm(_,f/u),t.cache.add(M,y)),m=new Qc(y,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new ln(_,l,g);if(i.sparse!==void 0){const p=Ll.SCALAR,M=rr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new M(o[1],y,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new ln(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=T.length;A<L;A++){const b=T[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=$h[d.magFilter]||Cn,u.minFilter=$h[d.minFilter]||Ii,u.wrapS=jh[d.wrapS]||Bi,u.wrapT=jh[d.wrapT]||Bi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==vn&&u.minFilter!==Cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new nn(_);m.needsUpdate=!0,d(m)}),t.load(Qr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),fi(h,o),h.userData.mimeType=o.mimeType||MM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ud,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ca,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){const h=i[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rn);const u=r.alphaMode||Dl.OPAQUE;if(u===Dl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Dl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft){const h=r.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Pn)}return r.emissiveTexture!==void 0&&o!==Ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&_s(i,h,r),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=xM(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Zh(new Ot,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?gM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=c[f];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new sm(_,M):new Xe(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=Yh(p.geometry,wd):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=Yh(p.geometry,wc));else if(m.mode===Hn.LINES)p=new su(_,M);else if(m.mode===Hn.LINE_STRIP)p=new iu(_,M);else if(m.mode===Hn.LINE_LOOP)p=new um(_,M);else if(m.mode===Hn.POINTS)p=new ru(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&_s(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_s(i,h[0],r),h[0];const d=new Ze;r.extensions&&_s(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Ht.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ia(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ot;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tu(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,v=d.length;y<v;y++){const T=d[y],w=f[y],A=g[y],L=_[y],b=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const x=n._createAnimationTracks(T,w,A,L,b);if(x)for(let N=0;N<x.length;N++)p.push(x[N])}const M=new Om(r,void 0,p);return fi(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Nd:c.length>1?u=new Ze:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),fi(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){const h=new ot;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ze;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&_s(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ni||d instanceof nn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ji[r.path]){case ji.weights:c=mr;break;case ji.rotation:c=gr;break;case ji.translation:case ji.scale:c=_r;break;default:n.itemSize===1?c=mr:c=_r;break}const u=i.interpolation!==void 0?mM[i.interpolation]:oo,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ji[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof gr?pM:Zd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function SM(s,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Pc(rr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Pc(rr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Zh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Cc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return yt.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),fi(s,e),SM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_M(s,e.targets,t):s})}const ws={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wM=new Ia(-1,1,1,-1,0,1);class TM extends Ot{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const EM=new TM;class Ua{constructor(e){this._mesh=new Xe(EM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class AM extends Rs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ua(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jh extends Rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class RM extends Rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class CM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new AM(ws),this.copyPass.material.blending=An,this.clock=new Gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jh!==void 0&&(o instanceof Jh?n=!0:o instanceof RM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PM extends Rs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}class LM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,_=t-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const M=g-m+u,y=_-p+u,v=g-1+2*u,T=_-1+2*u,w=l&255,A=c&255,L=this.perm[w+this.perm[A]]%12,b=this.perm[w+m+this.perm[A+p]]%12,x=this.perm[w+1+this.perm[A+1]]%12;let N=.5-g*g-_*_;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[L],g,_));let U=.5-M*M-y*y;U<0?i=0:(U*=U,i=U*U*this._dot(this.grad3[b],M,y));let k=.5-v*v-T*T;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[x],v,T)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,_=u-g,m=h-g,p=d-g,M=e-_,y=t-m,v=n-p;let T,w,A,L,b,x;M>=y?y>=v?(T=1,w=0,A=0,L=1,b=1,x=0):M>=v?(T=1,w=0,A=0,L=1,b=0,x=1):(T=0,w=0,A=1,L=1,b=0,x=1):y<v?(T=0,w=0,A=1,L=0,b=1,x=1):M<v?(T=0,w=1,A=0,L=0,b=1,x=1):(T=0,w=1,A=0,L=1,b=1,x=0);const N=M-T+f,U=y-w+f,k=v-A+f,Y=M-L+2*f,B=y-b+2*f,G=v-x+2*f,K=M-1+3*f,V=y-1+3*f,le=v-1+3*f,he=u&255,Te=h&255,Ne=d&255,je=this.perm[he+this.perm[Te+this.perm[Ne]]]%12,st=this.perm[he+T+this.perm[Te+w+this.perm[Ne+A]]]%12,Se=this.perm[he+L+this.perm[Te+b+this.perm[Ne+x]]]%12,J=this.perm[he+1+this.perm[Te+1+this.perm[Ne+1]]]%12;let ie=.6-M*M-y*y-v*v;ie<0?i=0:(ie*=ie,i=ie*ie*this._dot3(this.grad3[je],M,y,v));let ge=.6-N*N-U*U-k*k;ge<0?r=0:(ge*=ge,r=ge*ge*this._dot3(this.grad3[st],N,U,k));let de=.6-Y*Y-B*B-G*G;de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[Se],Y,B,G));let ve=.6-K*K-V*V-le*le;return ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[J],K,V,le)),32*(i+r+o+a)}noise4d(e,t,n,i){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,f,g;const _=(e+t+n+i)*l,m=Math.floor(e+_),p=Math.floor(t+_),M=Math.floor(n+_),y=Math.floor(i+_),v=(m+p+M+y)*c,T=m-v,w=p-v,A=M-v,L=y-v,b=e-T,x=t-w,N=n-A,U=i-L,k=b>x?32:0,Y=b>N?16:0,B=x>N?8:0,G=b>U?4:0,K=x>U?2:0,V=N>U?1:0,le=k+Y+B+G+K+V,he=o[le][0]>=3?1:0,Te=o[le][1]>=3?1:0,Ne=o[le][2]>=3?1:0,je=o[le][3]>=3?1:0,st=o[le][0]>=2?1:0,Se=o[le][1]>=2?1:0,J=o[le][2]>=2?1:0,ie=o[le][3]>=2?1:0,ge=o[le][0]>=1?1:0,de=o[le][1]>=1?1:0,ve=o[le][2]>=1?1:0,j=o[le][3]>=1?1:0,be=b-he+c,C=x-Te+c,$=N-Ne+c,I=U-je+c,O=b-st+2*c,z=x-Se+2*c,te=N-J+2*c,ae=U-ie+2*c,we=b-ge+3*c,fe=x-de+3*c,it=N-ve+3*c,R=U-j+3*c,S=b-1+4*c,W=x-1+4*c,ne=N-1+4*c,ce=U-1+4*c,Q=m&255,Ue=p&255,Me=M&255,ze=y&255,Ve=a[Q+a[Ue+a[Me+a[ze]]]]%32,_e=a[Q+he+a[Ue+Te+a[Me+Ne+a[ze+je]]]]%32,Ae=a[Q+st+a[Ue+Se+a[Me+J+a[ze+ie]]]]%32,Ke=a[Q+ge+a[Ue+de+a[Me+ve+a[ze+j]]]]%32,Ge=a[Q+1+a[Ue+1+a[Me+1+a[ze+1]]]]%32;let Ee=.6-b*b-x*x-N*N-U*U;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this._dot4(r[Ve],b,x,N,U));let Qe=.6-be*be-C*C-$*$-I*I;Qe<0?h=0:(Qe*=Qe,h=Qe*Qe*this._dot4(r[_e],be,C,$,I));let F=.6-O*O-z*z-te*te-ae*ae;F<0?d=0:(F*=F,d=F*F*this._dot4(r[Ae],O,z,te,ae));let pe=.6-we*we-fe*fe-it*it-R*R;pe<0?f=0:(pe*=pe,f=pe*pe*this._dot4(r[Ke],we,fe,it,R));let ye=.6-S*S-W*W-ne*ne-ce*ce;return ye<0?g=0:(ye*=ye,g=ye*ye*this._dot4(r[Ge],S,W,ne,ce)),27*(u+h+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}const Ko={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Pe},cameraProjectionMatrix:{value:new ot},cameraInverseProjectionMatrix:{value:new ot},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},$o={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},jo={uniforms:{tDiffuse:{value:null},resolution:{value:new Pe}},vertexShader:`varying vec2 vUv;

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

		}`};class es extends Rs{constructor(e,t,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const o=new ou;o.format=hr,o.type=ur,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:vn,magFilter:vn,type:Xn,depthTexture:o}),this.ssaoRenderTarget=new wn(this.width,this.height,{type:Xn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Bt({defines:Object.assign({},Ko.defines),uniforms:_i.clone(Ko.uniforms),vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,blending:An}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Am,this.normalMaterial.blending=An,this.blurMaterial=new Bt({defines:Object.assign({},jo.defines),uniforms:_i.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Bt({defines:Object.assign({},$o.defines),uniforms:_i.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:An}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:_i.clone(ws.uniforms),vertexShader:ws.vertexShader,fragmentShader:ws.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ad,blendDst:Bl,blendEquation:Di,blendSrcAlpha:od,blendDstAlpha:Bl,blendEquationAlpha:Di}),this._fsQuad=new Ua(null),this._originalClearColor=new Je}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case es.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=An,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case es.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=An,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case es.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case es.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=An,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case es.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=rd,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new D;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=Ht.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){const n=new LM,i=16,r=new Float32Array(i);for(let o=0;o<i;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new eu(r,4,4,Ra,Gn),this.noiseTexture.wrapS=Bi,this.noiseTexture.wrapT=Bi,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}es.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const DM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vr extends Rs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new wn(r,o,{type:Xn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new wn(r,o,{type:Xn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=DM;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_i.clone(ws.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:ws.vertexShader,fragmentShader:ws.fragmentShader,blending:Fl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new Ft,this._fsQuad=new Ua(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=vr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}vr.BlurDirectionX=new Pe(1,0);vr.BlurDirectionY=new Pe(0,1);class Ss extends Xe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new jt;const n=this,i=t.color!==void 0?new Je(t.color):new Je(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Ss.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Ji,h=new D,d=new D,f=new D,g=new ot,_=new D(0,0,-1),m=new Mt,p=new D,M=new D,y=new Mt,v=new ot,T=this.camera,w=new wn(r,o,{samples:c,type:Xn}),A=new Bt({name:l.name!==void 0?l.name:"unspecified",uniforms:_i.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=w.texture,A.uniforms.color.value=i,A.uniforms.textureMatrix.value=v,this.material=A,this.onBeforeRender=function(L,b,x){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),M.subVectors(d,_),M.reflect(h).negate(),M.add(d),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(M),T.far=x.far,T.updateMatrixWorld(),T.projectionMatrix.copy(x.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(T.projectionMatrix),v.multiply(T.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const U=T.projectionMatrix;y.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],y.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],y.z=-1,y.w=(1+U.elements[10])/U.elements[14],m.multiplyScalar(2/m.dot(y)),U.elements[2]=m.x,U.elements[6]=m.y,U.elements[10]=m.z+1-a,U.elements[14]=m.w,n.visible=!1;const k=L.getRenderTarget(),Y=L.xr.enabled,B=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(w),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(b,T),L.xr.enabled=Y,L.shadowMap.autoUpdate=B,L.setRenderTarget(k);const G=x.viewport;G!==void 0&&L.state.viewport(G),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}Ss.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Lc=s=>{const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function Jd(s,e,t,n,i,r){const o=Math.floor(s/e),a=o*e+t+Lc(o+r)*n,l=(s-a)/i;return l<=0||l>=1?0:Math.sin(Math.PI*l)**2}function IM(s){const e=Math.floor(s/40),t=.95+Lc(e+72)*.55;return 1-(.24+Lc(e+19)*.1)*Jd(s,40,13,17,t,502)}function NM(s){return .17*Jd(s,71,24,28,2.6,1987)}function UM(s){const e=new D,t=[],n=[],i=[];s.updateMatrixWorld(!0),s.traverse(c=>{c.isLight&&/HALL_FLUOR/i.test(c.name)&&t.push(c),c.isMesh&&/Hall.fluorescent.tube/i.test(c.name)&&n.push(c),c.isLight&&c.castShadow&&/DINING|HALL_FLUOR_0$/i.test(c.name)&&i.push(c)}),t.sort((c,u)=>Math.abs(c.getWorldPosition(e).x)-Math.abs(u.getWorldPosition(e).x));const r=t[0],o=r?.intensity??1;let a=[];if(r){const c=r.getWorldPosition(new D);if(n.sort((u,h)=>u.getWorldPosition(e).distanceToSquared(c)-h.getWorldPosition(e).distanceToSquared(c)),n[0]){const u=n[0],d=(Array.isArray(u.material)?u.material:[u.material]).map(f=>f.clone());u.material=Array.isArray(u.material)?d:d[0],a=d.map(f=>({material:f,base:f.emissiveIntensity}))}}let l=-1/0;return{update(c,u=!1){const h=u?1:IM(c);r&&(r.intensity=o*h);for(const d of a)d.material.emissiveIntensity=d.base*h},doorMoved(c,u=!1){if(!(!u&&c-l<.12)){for(const h of i)h.shadow.needsUpdate=!0;l=c}}}}const Nl=9.81,or=6;function OM(s,e){const t=Math.sqrt(2*(e.height-e.floor)/Nl),n=((s+e.offset)%e.period+e.period)%e.period;return{falling:n<t,y:Math.max(e.floor,e.height-.5*Nl*n*n),speed:Nl*Math.min(n,t),impactAge:n-t}}function FM(s){const e=[];return s.updateMatrixWorld(!0),s.traverse(t=>{if(!t.isMesh||!t.userData.water_surface||e.length>=or)return;const i=new Ln().setFromObject(t).getCenter(new D),r=e.length;e.push({x:i.x,z:i.z,floor:.021,height:2.94,period:2.7+r*.47,offset:r*.83})}),e}function BM(s,e,t){let n;if(e.traverse(l=>{/Recessed.rainy.living.window/i.test(l.name)&&(n=l)}),!n)return null;const i=new Ln().setFromObject(n),r=i.getSize(new D),o=i.getCenter(new D),a=new Xe(new Hi(r.z,r.y),new Bt({name:"Rain on recessed window glass",uniforms:{time:t,storm:{value:0}},vertexShader:`varying vec2 vUv;
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
      }`}));return a.name="Weather window rain",a.rotation.y=-Math.PI/2,a.position.set(i.min.x-.002,o.y,o.z),s.add(a),a}function kM(s,e){const n=[],i=[];let r=502;const o=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);for(let c=0;c<110;c+=1)n.push(1+o()*4.3,.35+o()*2.25,-2.65+o()*4),i.push(o());const a=new Ot;a.setAttribute("position",new ct(n,3)),a.setAttribute("seed",new ct(i,1));const l=new ru(a,new Bt({name:"Sparse motes in window light",transparent:!0,depthWrite:!1,uniforms:{time:e},vertexShader:`
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
      }`}));return l.name="Weather suspended motes",s.add(l),l}function zM(s,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#050607",n.fillRect(0,0,256,256);const i=n.createRadialGradient(128,128,12,128,128,126);i.addColorStop(0,"#91abb9"),i.addColorStop(.65,"#647f91"),i.addColorStop(1,"#050607"),n.fillStyle=i;for(let a=16;a<244;a+=12)n.fillRect(12,a,232,5);const r=new Da(10140624,22,8,.67,.85,2);r.name="Window rainlight",r.position.set(5.48,2.2,-1.56),r.target.position.set(2.3,.35,1.5),r.map=new ho(t),r.castShadow=!0,r.shadow.mapSize.set(512,512),r.shadow.bias=-2e-4,r.shadow.normalBias=.018,r.shadow.autoUpdate=!1,r.shadow.needsUpdate=!0,s.add(r,r.target);let o;return e.traverse(a=>{/LIGHT_WINDOW_COOL/.test(a.name)&&(o=a)}),o&&o.removeFromParent(),r}function HM(s,e,t){const n={value:0},i=FM(e),r=new Map;e.traverse(m=>{if(!m.isMesh||!/raincoat/i.test(m.name))return;const p=m.material;r.has(p)||r.set(p,new ai({name:"Rain-soaked coated fabric",color:p.color,map:p.map,normalMap:p.normalMap,normalScale:p.normalScale,roughness:.33,metalness:0,clearcoat:.42,clearcoatRoughness:.23,side:p.side})),m.material=r.get(p)}),i.push({x:3.83,z:-6.74,floor:.708,height:1.017,period:3.45,offset:.6});const o=Array.from({length:or},()=>new Mt(0,0,-1,0)),a=BM(s,e,n),l=kM(s,n),c=zM(s,e),u=new Ma(new bn(1,7,6),new Ft({color:9680062,transparent:!0,opacity:.38}),i.length);u.name="Weather falling drips",u.instanceMatrix.setUsage(Nu),u.frustumCulled=!1,s.add(u);const h=new Hi(2,2),d=new xa(new Float32Array(i.length),1);h.setAttribute("impactAlpha",d);const f=new Ma(h,new Bt({name:"Droplet impact surface tension",transparent:!0,depthWrite:!1,vertexShader:`attribute float impactAlpha; varying vec2 vUv; varying float fade;
      void main() { vUv = uv; fade = impactAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec2 vUv; varying float fade;
      void main() {
        float r = length(vUv * 2.0 - 1.0);
        float ring = (1.0 - smoothstep(.015, .075, abs(r - .78))) * .55;
        ring += (1.0 - smoothstep(.012, .055, abs(r - .53))) * .16;
        gl_FragColor = vec4(.32, .40, .42, ring * fade);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),i.length);f.name="Weather droplet impact rings",f.instanceMatrix.setUsage(Nu),f.frustumCulled=!1,s.add(f);const g=new Ut,_={ripples:o,setQuality(m){l.visible=m.mode==="quality",r.forEach(p=>{p.clearcoat=m.mode==="quality"?.42:0}),c.shadow.mapSize.set(Math.min(512,m.shadowSize),Math.min(512,m.shadowSize)),c.shadow.map?.dispose(),c.shadow.map=null,c.shadow.needsUpdate=!0},update(m){n.value=m;const p=NM(m);a&&(a.material.uniforms.storm.value=p),c.intensity=22*(1+p*1.6),i.forEach((M,y)=>{const v=OM(m,M);g.position.set(M.x,v.y,M.z),g.rotation.set(0,0,0);const T=v.falling?.0032:0;g.scale.set(T,v.falling?.006+v.speed*.003:0,T),g.updateMatrix(),u.setMatrixAt(y,g.matrix);const w=v.impactAge,A=w>=0&&w<1.45,L=y===i.length-1?.11:.24,b=A?Math.min(L,.015+w*.19):0;g.position.set(M.x,M.floor+.001,M.z),g.rotation.x=-Math.PI/2,g.scale.setScalar(b),g.updateMatrix(),f.setMatrixAt(y,g.matrix),d.setX(y,A?(1-w/1.45)*.46:0),y<or&&o[y].set(M.x,M.z,w,A?1:0)}),u.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=d.needsUpdate=!0}};return _.setQuality(t),_.update(0),_}function VM(s){const e=[],t=[],n=new D;for(const r of s){const o=r.geometry.index?r.geometry.toNonIndexed():r.geometry,a=o.getAttribute("position"),l=[],c=new Map;for(let h=0;h<a.count;h+=1)n.fromBufferAttribute(a,h).applyMatrix4(r.matrixWorld),e.push(n.x,-n.z,0),l.push(`${n.x.toFixed(5)},${n.z.toFixed(5)}`);for(let h=0;h<l.length;h+=3)for(const[d,f]of[[h,h+1],[h+1,h+2],[h+2,h]]){const g=[l[d],l[f]].sort(),_=g.join("|"),m=c.get(_)||{pair:g,count:0};m.count+=1,c.set(_,m)}const u=new Set;c.forEach(({pair:h,count:d})=>{d===1&&h.forEach(f=>u.add(f))}),l.forEach(h=>t.push(u.has(h)?0:1)),o!==r.geometry&&o.dispose()}const i=new Ot;return i.setAttribute("position",new ct(e,3)),i.setAttribute("edgeDistance",new ct(t,1)),i.setAttribute("uv",new ct(new Float32Array(e.length/3*2),2)),i.computeVertexNormals(),i.computeBoundingSphere(),i}function GM(s,e,t,n={},i=null){let r=n.reflectionSize||768,o=1/(n.reflectionFPS||30),a=0;const l=[],c=[];e.traverse(_=>{_.userData.hide_in_reflection&&c.push(_)});let u=!1;const h=_=>({...Ss.ReflectorShader,uniforms:{...Ss.ReflectorShader.uniforms,texel:{value:new Pe(1/r,1/r)},water:{value:_?1:0},time:{value:0},detail:{value:n.mode==="smooth"?0:1},impacts:{value:Array.from({length:or},()=>new Mt(0,0,-1,0))}},vertexShader:`
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
      uniform float water, time, detail;
      uniform vec4 impacts[${or}];
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
          for (int i = 0; i < ${or}; i++) {
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
    `});function d(_){i&&(_.material.uniforms.impacts.value=i.ripples);const m=_.onBeforeRender;_.userData.lastCapture=-1/0,_.onBeforeRender=function(p,M,y){if(u||M.overrideMaterial||a-_.userData.lastCapture<o)return;_.userData.lastCapture=a,u=!0;const v=[...l,...c].filter(T=>T!==this&&T.visible);v.forEach(T=>{T.visible=!1});try{m.call(this,p,M,y)}finally{v.forEach(T=>{T.visible=!0}),u=!1}},_.castShadow=!1,_.receiveShadow=!1,l.push(_),s.add(_)}const f=[],g=[];if(e.updateMatrixWorld(!0),e.traverse(_=>{_.isMesh&&_.userData.mirror_surface&&f.push(_),_.isMesh&&_.userData.water_surface&&g.push(_)}),f.length){const _=new Ln;f.forEach(v=>_.union(new Ln().setFromObject(v)));const m=_.getSize(new D),p=_.getCenter(new D),M=new Hi(m.x,m.y);M.setAttribute("edgeDistance",new ct([1,1,1,1],1));const y=new Ss(M,{textureWidth:r,textureHeight:r,clipBias:.001,multisample:0,shader:h(!1)});y.name="Realtime tarnished cabinet reflection",y.position.copy(p),y.position.z=_.max.z+5e-4,f.forEach(v=>{v.visible=!1,v.castShadow=!1}),d(y)}if(g.length){const _=VM(g);g.forEach(p=>{p.visible=!1});const m=new Ss(_,{textureWidth:r,textureHeight:r,clipBias:.002,multisample:0,shader:h(!0)});m.name="Realtime shallow puddle reflection",m.rotation.x=-Math.PI/2,m.position.y=.016,m.material.transparent=!0,m.material.depthWrite=!1,d(m)}return{surfaces:l,update(_){a=_,l.forEach(m=>{m.material.uniforms.time.value=_})},invalidate(){l.forEach(_=>{_.userData.lastCapture=-1/0})},setQuality(_){r=_.reflectionSize,o=1/_.reflectionFPS,l.forEach(m=>{m.getRenderTarget().setSize(r,r),m.material.uniforms.texel.value.set(1/r,1/r),m.material.uniforms.detail.value=_.mode==="smooth"?0:1,m.userData.lastCapture=-1/0})}}}function mu(s){const e=new Map,t=new D;s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh||!n.visible||Array.isArray(n.material)||n.material.transparent||n.userData.mirror_surface||n.userData.water_surface||n.userData.hide_in_reflection)return;for(let a=n;a&&a!==s;a=a.parent)if(a.userData.story_dynamic||a.userData.start_hidden||a.userData.interaction||a.name.startsWith("INT_")||a.name.startsWith("EVENT_"))return;const i=Object.keys(n.geometry.attributes).sort().join(",");n.getWorldPosition(t);const o=`${`${Math.floor(t.x/5)},${Math.floor(t.y/3)},${Math.floor(t.z/5)}`}:${n.material.uuid}:${n.castShadow}:${i}`;e.has(o)||e.set(o,[]),e.get(o).push(n)});for(const n of e.values()){if(n.length<2)continue;const i=n.map(a=>{const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrixWorld),l.clearGroups(),l}),r=Vx(i,!1);if(i.forEach(a=>a.dispose()),!r)continue;const o=new Xe(r,n[0].material);o.name=`Static material batch: ${n[0].material.name}`,o.castShadow=n[0].castShadow,o.receiveShadow=!0,r.computeBoundingSphere(),n.forEach(a=>{a.userData.collider?(a.userData.batched_collider=!0,a.layers.set(1)):a.removeFromParent()}),s.add(o)}}const Zo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class WM extends Rs{constructor(){super(),this.uniforms=_i.clone(Zo.uniforms),this.material=new Em({name:Zo.name,uniforms:this.uniforms,vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader}),this._fsQuad=new Ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ud?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===dd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function XM(){const s=new WM;return s.material.name="Rain night film output",s.material.fragmentShader=s.material.fragmentShader.replace("// color space",`
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
  `),s}const tr={"weather-radio":{file:"weather-radio.mp3",speaker:"车载电台",text:"台风预警持续生效。今晚沿海地区有暴雨，低洼路段积水，请减速慢行，注意安全。",voice:"zh-CN-YunyangNeural",rate:"+2%",filter:"phone"},"mother-arrival":{file:"mother-arrival.mp3",speaker:"妈妈 · 22:17 留言",text:"晚晚，别回家。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone",duration:9},"mother-return":{file:"mother-return.mp3",speaker:"妈妈 · 保存的留言",text:"晚晚，别回来。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-look-back":{file:"mother-look-back.mp3",speaker:"妈妈 · 保存的留言",text:"晚晚，别回头。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-warning":{file:"mother-warning.mp3",speaker:"妈妈 · 电话",text:"晚晚，别回家。听妈妈说，家里已经三口人了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"father-tape":{file:"father-tape.mp3",speaker:"父亲 · 生日磁带",text:"等爸爸出差回来，给你买自行车。",voice:"zh-CN-YunjianNeural",rate:"+0%",filter:"tape"},"stranger-return":{file:"stranger-echo.mp3",speaker:"磁带里的声音",text:"等爸爸出差回来，给你买自行车。",voice:"zh-CN-YunxiNeural",rate:"-4%",filter:"tape"},"mother-run":{file:"mother-run.mp3",speaker:"墙里的妈妈",text:"晚晚，快走，别回头。",voice:"zh-CN-XiaoxiaoNeural",rate:"+5%",filter:"room"},"mother-full":{file:"mother-full.mp3",speaker:"妈妈 · 完整留言",text:"别回家。家里已经三口人了。你再回来，就四口了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"mother-empty":{file:"mother-empty.mp3",speaker:"妈妈 · 电话",text:"晚晚，这次你没进门。好，那它就还只能找我。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"phone"},"phone-disconnected":{file:"phone-disconnected.mp3",speaker:"电话提示",text:"您拨打的号码是空号。",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"phone"},"wang-neighbor":{file:"wang-neighbor.mp3",speaker:"王姨 · 门后",text:"晚晚回来了？建平呢？刚才还听他在家走路。你们家三口，我多包了几个。你爸前两天还帮我修过灯呢。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"room"},"wan-deny":{file:"wan-deny.mp3",speaker:"林晚",text:"王姨，家里只有我和妈妈。",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"room"},"wan-echo":{file:"wan-echo.mp3",speaker:"客厅里 · 你的声音",text:"别回家。家里已经三口人了。",voice:"zh-CN-XiaoyiNeural",rate:"-2%",filter:"room"},"mother-wall-answer":{file:"mother-wall-answer.mp3",speaker:"电话里的妈妈",text:"我知道。我一直都在墙这边。",voice:"zh-CN-XiaoxiaoNeural",rate:"-3%",filter:"phone"},"stranger-soup":{file:"stranger-soup.mp3",speaker:"留言末尾的声音",text:"晚晚，妈妈让你盛汤。",voice:"zh-CN-YunxiNeural",rate:"-4%",filter:"phone"},"father-sit":{file:"father-sit.mp3",speaker:"镜子里",text:"晚晚，坐下。",voice:"zh-CN-YunjianNeural",rate:"-3%",filter:"room"},"wan-answer":{file:"wan-answer.mp3",speaker:"林晚",text:"谁在里面？",voice:"zh-CN-XiaoyiNeural",rate:"+0%",filter:"room"},"wan-father":{file:"wan-father.mp3",speaker:"林晚",text:"爸，是你吗？",voice:"zh-CN-XiaoyiNeural",rate:"-2%",filter:"room"},"community-call":{file:"community-call.mp3",speaker:"社区 · 次日来电",text:"是林晚吗？五栋五零二昨晚煤气泄漏。你母亲的死亡时间，大约是昨晚十点二十分。屋里只有两副碗筷。请你过来一趟。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"phone"},"wang-breakfast":{file:"wang-breakfast.mp3",speaker:"门外 · 王姨",text:"晚晚，吃饭了。",voice:"zh-CN-XiaoxiaoNeural",rate:"+0%",filter:"room"},"mother-eat":{file:"mother-eat.mp3",speaker:"妈妈",text:"吃吧。别等她了。",voice:"zh-CN-XiaoxiaoNeural",rate:"-2%",filter:"room"}},Qd=Object.freeze({music:.55,effects:.65,voice:1});function Qh(s={}){return Object.fromEntries(Object.entries(Qd).map(([e,t])=>[e,typeof s?.[e]=="number"&&Number.isFinite(s[e])?Math.max(0,Math.min(1,s[e])):t]))}const ed=s=>new URL(`./audio/${s}`,document.baseURI).href;class qM{constructor({onSubtitle:e=()=>{},onStatus:t=()=>{}}={}){this.ctx=null,this.onSubtitle=e,this.onStatus=t,this.buffers=new Map,this.voiceNodes=[],this.cues=[],this.voiceToken=0,this.voiceEnd=0,this.voiceLoading=!1,this.ducked=!1,this.musicReady=!1,this.preview=null;let n;try{n=JSON.parse(localStorage.getItem("third-place-audio"))}catch{}this.mix=Qh(n)}start(){if(this.stopPreview(),this.ctx){this.ctx.resume().catch(()=>this.onStatus("点“继续游戏”恢复声音"));return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return this.onStatus("此浏览器暂不支持游戏音频");this.ctx=new e,this.ctx.onstatechange=()=>this.reportStatus(),this.master=this.ctx.createGain(),this.master.gain.value=.8,this.master.connect(this.ctx.destination),this.buses={};for(const[t,n]of Object.entries(this.mix)){const i=this.ctx.createGain();i.gain.value=n,i.connect(this.master),this.buses[t]=i}this.musicDuck=this.ctx.createGain(),this.musicDuck.connect(this.buses.music),this.createAmbience(),this.onStatus("正在载入配乐与角色语音…"),this.load("rain-night-score.mp3").then(t=>{const n=this.ctx.createBufferSource(),i=this.ctx.createGain();this.musicFade=i,n.buffer=t,n.loop=!0,i.gain.setValueAtTime(0,this.ctx.currentTime),i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+1.8),n.connect(i).connect(this.musicDuck),n.start(),this.musicReady=!0,this.reportStatus()}).catch(()=>this.onStatus("配乐未载入，请检查网络后重新载入")),this.load(tr["mother-warning"].file).catch(()=>{}),this.ctx.resume().catch(()=>this.onStatus("点“继续游戏”恢复声音"))}load(e){if(!this.buffers.has(e)){const t=fetch(ed(e)).then(n=>{if(!n.ok)throw new Error(`Audio ${n.status}: ${e}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).catch(n=>{throw this.buffers.delete(e),n});this.buffers.set(e,t)}return this.buffers.get(e)}reportStatus(){this.onStatus(this.musicReady?this.ctx.state==="running"?"配乐已开启 · 旁白时自动降低背景声":"声音已暂停 · 可单独试听":"正在载入配乐与角色语音…")}createAmbience(){this.ambienceGain=this.ctx.createGain(),this.ambienceGain.connect(this.buses.effects);const e=this.ctx.createBuffer(1,this.ctx.sampleRate*7,this.ctx.sampleRate),t=e.getChannelData(0);let n=0;for(let o=0;o<t.length;o+=1)n=n*.996+(Math.random()*2-1)*.018,t[o]=(Math.random()*2-1)*.18+n;for(const[o,a,l]of[["bandpass",1250,.24],["lowpass",280,.22]]){const c=this.ctx.createBufferSource(),u=this.ctx.createBiquadFilter(),h=this.ctx.createGain();c.buffer=e,c.loop=!0,u.type=o,u.frequency.value=a,u.Q.value=.46,h.gain.value=l,c.connect(u).connect(h).connect(this.ambienceGain),c.start()}const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=49.7,r.gain.value=.015,i.connect(r).connect(this.ambienceGain),i.start()}setVolume(e,t){if(e in Qd){this.mix=Qh({...this.mix,[e]:t}),this.ctx&&this.buses[e].gain.setTargetAtTime(this.mix[e],this.ctx.currentTime,.05),this.preview&&(this.preview.volume=.8*this.mix[this.previewChannel]);try{localStorage.setItem("third-place-audio",JSON.stringify(this.mix))}catch{}}}tone(e=220,t=.4,n=.08,i="sine",r=0){if(!this.ctx)return;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createBiquadFilter(),c=this.ctx.currentTime+r;o.type=i==="sawtooth"?"triangle":i,o.frequency.setValueAtTime(e,c),o.frequency.exponentialRampToValueAtTime(Math.max(35,e*.72),c+t),l.type="lowpass",l.frequency.value=Math.max(650,e*2.4),a.gain.setValueAtTime(1e-4,c),a.gain.exponentialRampToValueAtTime(n,c+.025),a.gain.exponentialRampToValueAtTime(1e-4,c+t),o.connect(l).connect(a).connect(this.buses.effects),o.onended=()=>{o.disconnect(),l.disconnect(),a.disconnect()},o.start(c),o.stop(c+t+.02)}knock(){this.tone(92,.13,.16,"square"),this.tone(78,.18,.13,"square",.17)}china(){this.tone(1370,.5,.045),this.tone(1760,.28,.025,"sine",.08)}playVoice(e,t){return this.playSequence([e],t)}get voiceBusy(){return this.voiceLoading||!!(this.ctx&&this.voiceEnd>this.ctx.currentTime)}async playSequence(e,{delay:t=0,gap:n=2,onComplete:i,onCancel:r}={}){if(this.stopVoice(),!this.ctx)return;const o=this.voiceToken;this.voiceLoading=!0,this.voiceCancel=r;try{const a=await Promise.all(e.map(c=>this.load(tr[c].file)));if(o!==this.voiceToken)return;this.voiceLoading=!1;let l=this.ctx.currentTime+t;e.forEach((c,u)=>{const h=tr[c],d=this.ctx.createBufferSource(),f=this.ctx.createBiquadFilter(),g=this.ctx.createBiquadFilter(),_=this.ctx.createGain();d.buffer=a[u],f.type="highpass",f.frequency.value=h.filter==="phone"?240:100,g.type="lowpass",g.frequency.value=h.filter==="phone"?3700:h.filter==="tape"?4700:6500;const m=l+d.buffer.duration;_.gain.setValueAtTime(0,l),_.gain.linearRampToValueAtTime(1.1,l+.025),_.gain.setValueAtTime(1.1,Math.max(l+.025,m-.04)),_.gain.linearRampToValueAtTime(0,m),d.connect(f).connect(g).connect(_).connect(this.buses.voice),d.onended=()=>{d.disconnect(),f.disconnect(),g.disconnect(),_.disconnect()},d.start(l),this.voiceNodes.push(d),this.cues.push({start:l,end:m,text:`${h.speaker}：${h.text}`,shown:!1}),l=m+n}),this.voiceEnd=l-n,this.voiceComplete=i}catch{if(o!==this.voiceToken)return;this.voiceLoading=!1,this.onSubtitle(e.map(a=>`${tr[a].speaker}：${tr[a].text}`).join(`
`),8500),this.onStatus("这段语音未载入，已显示完整字幕"),this.voiceEnd=this.ctx.currentTime+8.5,this.voiceComplete=i}}stopVoice(){const e=this.voiceCancel;this.voiceCancel=null,e&&e(),this.voiceToken+=1;for(const t of this.voiceNodes)try{t.stop()}catch{}this.voiceNodes=[],this.cues=[],this.voiceEnd=0,this.voiceLoading=!1,this.voiceComplete=null,this.setDuck(!1)}setDuck(e){if(!this.ctx||this.ducked===e)return;this.ducked=e;const t=this.ctx.currentTime;this.musicDuck.gain.cancelScheduledValues(t),this.musicDuck.gain.setTargetAtTime(e?.24:1,t,e?.12:.65)}update(){if(!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime;this.setDuck(this.cues.some(t=>e>=t.start-.2&&e<t.end+.3));for(const t of this.cues)!t.shown&&e>=t.start&&(t.shown=!0,e<t.end&&this.onSubtitle(t.text,(t.end-e)*1e3+450));if(this.voiceComplete&&e>=this.voiceEnd){const t=this.voiceComplete;this.voiceComplete=null,this.voiceCancel=null,t()}}noiseBuffer(){if(!this.noise){this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate);const e=this.noise.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}return this.noise}effect(e,t=.7,n=0){if(!this.ctx)return;const i={paper:[1800,.035],cloth:[640,.035],chair:[180,.085],water:[2100,.038],breath:[410,.045],cough:[620,.09],breaker:[95,.09]}[e]||[300,.03],r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=this.noiseBuffer(),r.loop=!0,o.type="bandpass",o.frequency.value=i[0],o.Q.value=e==="chair"?8:.75;const l=this.ctx.currentTime;a.gain.setValueAtTime(1e-4,l),a.gain.exponentialRampToValueAtTime(i[1],l+Math.min(.15,t*.22)),a.gain.exponentialRampToValueAtTime(1e-4,l+t),r.connect(o).connect(a);const c=this.ctx.createStereoPanner?.();c?(c.pan.value=n,a.connect(c).connect(this.buses.effects)):a.connect(this.buses.effects),r.start(),r.stop(l+t+.03),r.onended=()=>{r.disconnect(),o.disconnect(),a.disconnect(),c?.disconnect()}}setWater(e){if(!this.ctx)return;if(!e){this.water&&(this.water.source.stop(),this.water.gain.disconnect(),this.water=null);return}if(this.water)return;const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer(),t.loop=!0,n.type="bandpass",n.frequency.value=2400,n.Q.value=.5,i.gain.value=.035,t.connect(n).connect(i).connect(this.buses.effects),t.start(),t.onended=()=>{t.disconnect(),n.disconnect()},this.water={source:t,gain:i}}quietRoomSources(){if(this.ctx)for(const e of this.roomSources?.values()||[])e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.06)}locateListener(e,t){if(!this.ctx)return;const n=this.ctx.listener,i=this.ctx.currentTime;if(n.positionX)for(const[r,o]of[["position",e],["forward",t],["up",{x:0,y:1,z:0}]])for(const a of["x","y","z"])n[r+a.toUpperCase()].setTargetAtTime(o[a],i,.025);else n.setPosition(e.x,e.y,e.z),n.setOrientation(t.x,t.y,t.z,0,1,0)}roomSource(e,t,n,i,r=1){if(!this.ctx)return;this.roomSources||=new Map;let o=this.roomSources.get(e);if(!o){if(n<=0)return;const a=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain(),u=this.ctx.createPanner();a.buffer=this.noiseBuffer(),a.loop=!0,l.type="bandpass",l.frequency.value=i,l.Q.value=r,c.gain.value=0,u.panningModel="HRTF",u.distanceModel="inverse",u.refDistance=1.6,u.maxDistance=18,u.rolloffFactor=1.3,u.positionX.value=t[0],u.positionY.value=t[1],u.positionZ.value=t[2],a.connect(l).connect(c).connect(u).connect(this.buses.effects),a.start(),o={source:a,filter:l,gain:c,panner:u},this.roomSources.set(e,o)}o.gain.gain.setTargetAtTime(Math.max(0,n),this.ctx.currentTime,.045)}finishNight(e){if(!this.ctx)return;this.setWater(!1);for(const o of this.roomSources?.values()||[])o.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.3);if(this.musicFade?.gain.setTargetAtTime(0,this.ctx.currentTime,1.8),this.ambienceGain?.gain.setTargetAtTime(0,this.ctx.currentTime,1.5),e==="wall"||this.cicadas)return;this.cicadas=!0;const t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createGain();t.frequency.value=3700,n.frequency.value=17,i.gain.value=.005,r.gain.value=.008,n.connect(i).connect(r.gain),t.connect(r).connect(this.buses.effects),t.start(),n.start()}pause(){this.stopPreview(),this.ctx?.suspend()}stopPreview(){this.preview&&(this.preview.pause(),this.preview.removeAttribute("src"),this.preview.load(),this.preview=null)}async audition(e){this.stopPreview(),this.previewChannel=e;const t=new Audio(ed(e==="music"?"rain-night-score.mp3":tr["mother-warning"].file));this.preview=t,t.volume=.8*this.mix[e],t.onended=()=>{this.preview===t&&(this.stopPreview(),this.reportStatus())};try{await t.play(),this.preview===t&&this.onStatus(e==="music"?"正在试听雨夜配乐 · 继续游戏即停止试听":"正在试听妈妈的电话留言")}catch{this.preview===t&&this.onStatus("试听未能播放，请检查音量或网络")}}}function YM({userAgent:s="",platform:e="",maxTouchPoints:t=0,userAgentMobile:n=!1,coarsePointer:i=!1,hoverNone:r=!1,override:o}={}){return o==="1"?!0:o==="0"?!1:n||/Android|iPhone|iPad|iPod/i.test(s)||/Mac/i.test(e||s)&&t>1?!0:i&&r}function KM(s){return s.y<-.45&&Math.hypot(s.x,s.y)>=.9}function $M(s,e,t=!1){return t||s&&e<=-.58}function jM(s,{isActive:e,onStart:t,onRelease:n,onCancel:i}){let r=null,o=!1;const a=()=>{const l=r;r=null,(l!==null||o)&&(o=!1,i(),l!==null&&s.hasPointerCapture?.(l)&&s.releasePointerCapture(l))};s.addEventListener("pointerdown",l=>{!e()||r!==null||o||l.button>0||(l.preventDefault(),r=l.pointerId,s.setPointerCapture(r),t())}),s.addEventListener("pointerup",l=>{if(l.pointerId!==r)return;l.preventDefault();const c=r;r=null,e()?n():i(),s.hasPointerCapture?.(c)&&s.releasePointerCapture(c)});for(const l of["pointercancel","lostpointercapture"])s.addEventListener(l,c=>{c.pointerId===r&&a()});return s.addEventListener("keydown",l=>{["Space","Enter"].includes(l.code)&&!l.repeat&&e()&&r===null&&!o&&(l.preventDefault(),o=!0,t())}),s.addEventListener("keyup",l=>{["Space","Enter"].includes(l.code)&&o&&(l.preventDefault(),o=!1,e()?n():i())}),s.addEventListener("blur",a),{reset:a}}function ZM(s,{isActive:e,onTap:t,onLook:n=()=>{}}){let i=null,r=0,o=0,a=0,l=0,c=0,u=!1;function h(){const d=i;i=null,u=!1,d!==null&&s.hasPointerCapture?.(d)&&s.releasePointerCapture(d)}s.addEventListener("pointerdown",d=>{!e()||i!==null||d.button>0||(d.preventDefault(),i=d.pointerId,r=a=d.clientX,o=l=d.clientY,c=d.timeStamp,u=!1,s.setPointerCapture(i))}),s.addEventListener("pointermove",d=>{if(i===d.pointerId){if(!e())return h();!u&&Math.hypot(d.clientX-r,d.clientY-o)>10&&(u=!0),u&&(n((d.clientX-a)*.0034,(d.clientY-l)*.0031),a=d.clientX,l=d.clientY)}}),s.addEventListener("pointerup",d=>{if(i!==d.pointerId)return;d.preventDefault();const f=!u&&Math.hypot(d.clientX-r,d.clientY-o)<=10&&d.timeStamp-c<650;h(),f&&e()&&t()});for(const d of["pointercancel","lostpointercapture"])s.addEventListener(d,f=>{i===f.pointerId&&h()});return s.addEventListener("click",d=>{d.detail===0&&e()&&t()}),{reset:h}}function ef(s="smooth",e=!0){const t=s==="quality";return{mode:t?"quality":"smooth",label:t?"画质优先":"流畅优先",maxPixelRatio:e?t?1.75:1.25:t?1.5:1,maxPixels:e?t?16e5:9e5:t?27e5:16e5,shadowSize:e?t?512:256:t?1024:512,flashlightSize:t?1024:512,reflectionSize:e?t?512:384:t?768:384,reflectionFPS:t?30:15,ambientOcclusion:t}}function tf(s,e,t,n){return Math.min(Math.max(.5,t||1),n.maxPixelRatio,Math.sqrt(n.maxPixels/Math.max(1,s*e)))}function JM(s,e,t=48,n=.12){const i=Math.hypot(s,e);if(i<=t*n)return{x:0,y:0};const r=Math.min(1,(i/t-n)/(1-n));return{x:s/i*r,y:e/i*r}}function QM({canvas:s,root:e,enabled:t,isActive:n,onLook:i,onAction:r,onHold:o}){const a={x:0,y:0},l=e.querySelector("#move-stick"),c=e.querySelector("#stick-knob");let u=null,h=null,d=0,f=0,g=0,_=0;const m=new Map,p=w=>{const A=m.get(w.pointerId);A&&(m.delete(w.pointerId),e.querySelector(`[data-hold="${A}"]`)?.classList.remove("held"))};function M(){a.x=a.y=0,u=h=null,c.style.transform="";for(const w of m.values())o(w,!1);m.clear(),e.querySelectorAll(".held").forEach(w=>w.classList.remove("held"))}if(!t)return{movement:a,reset:M};l.addEventListener("pointerdown",w=>{if(!n()||u!==null)return;w.preventDefault(),u=w.pointerId;const A=l.getBoundingClientRect();d=A.left+A.width/2,f=A.top+A.height/2,l.setPointerCapture(w.pointerId),y(w)});function y(w){if(w.pointerId!==u)return;if(!n()){M();return}const A=w.clientX-d,L=w.clientY-f,b=l.clientWidth*.34;Object.assign(a,JM(A,L,b));const x=Math.min(1,b/(Math.hypot(A,L)||1));c.style.transform=`translate(${A*x}px, ${L*x}px)`}l.addEventListener("pointermove",y);const v=w=>{w.pointerId===u&&(u=null,a.x=a.y=0,c.style.transform="")};for(const w of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(w,v);s.addEventListener("pointerdown",w=>{!n()||h!==null||w.button>0||(w.preventDefault(),h=w.pointerId,g=w.clientX,_=w.clientY,s.setPointerCapture(w.pointerId))}),s.addEventListener("pointermove",w=>{if(w.pointerId===h){if(!n()){M();return}i((w.clientX-g)*.0034,(w.clientY-_)*.0031),g=w.clientX,_=w.clientY}});const T=w=>{w.pointerId===h&&(h=null)};for(const w of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(w,T);return e.querySelectorAll("[data-action]").forEach(w=>{w.addEventListener("click",()=>{n()&&r(w.dataset.action)})}),e.querySelectorAll("[data-hold]").forEach(w=>{w.addEventListener("pointerdown",A=>{!n()||m.has(A.pointerId)||(A.preventDefault(),w.setPointerCapture(A.pointerId),m.set(A.pointerId,w.dataset.hold),w.classList.add("held"),o(w.dataset.hold,!0))});for(const A of["pointerup","pointercancel","lostpointercapture"])w.addEventListener(A,p)}),window.addEventListener("blur",M),document.addEventListener("visibilitychange",M),{movement:a,reset:M}}const td=new br,e1=new D,nd=new D,Jo=new D,Vr=new D;function Oa(s){for(let e=s;e;e=e.parent)if(!e.visible)return!1;return!0}function t1(s,e){if(!s?.isMesh)return null;for(let t=s;t&&t!==e;t=t.parent)if(t.userData.interaction)return t;return null}function n1(s,e){for(let t=s;t;t=t.parent)if(t===e)return!0;for(let t=e;t;t=t.parent)if(t===s)return!0;return!1}function nf(s,e,t,n){const i=s.distanceTo(e);td.set(s,e1.subVectors(e,s).normalize());for(const{object:r,box:o}of n)if(!(!Oa(r)||n1(t,r))&&td.intersectBox(o,nd)&&s.distanceTo(nd)<i-.08)return!1;return!0}function i1(s,e=new D){return s.userData.hintAnchor?e.fromArray(s.userData.hintAnchor).applyMatrix4(s.matrixWorld):s.geometry?(s.geometry.boundingBox||s.geometry.computeBoundingBox(),s.geometry.boundingBox.getCenter(e).applyMatrix4(s.matrixWorld),/^door_/.test(s.userData.interaction||"")&&(e.y+=.25),e):s.getWorldPosition(e)}function sf(s,e,t,n,i){if(!Oa(s))return null;s.updateWorldMatrix(!0,!1),i1(s,Jo);const r=e.position.distanceTo(Jo);if(r>3.4||(Vr.copy(Jo).project(e),Vr.z<-1||Vr.z>1))return null;const o=(Vr.x+1)*n/2,a=(1-Vr.y)*i/2+(s.userData.hintBelow?45:0);return o<92||o>n-92||a<86||a>i-40||!nf(e.position,Jo,s,t)?null:{x:o,y:a,distance:r}}const rf=Object.freeze({battery:38,outageSeconds:0,housePhase:0,stoveLit:!0,pipeHeard:!1,pipeSeconds:0,wallLocated:!1,wallListenSeconds:0,breathSeconds:0});function s1(s){return s.wallOpen?2:s.discovered.includes("mirror")?1:0}function r1(s){return(1-Math.cos(Math.max(0,s)*Math.PI/4))*.5*Math.min(1,Math.max(0,s)/12)}function o1(s){return .24+.76*Math.min(1,Math.max(0,(s-3)/12))}function a1(s,e,{active:t=!0,flashlight:n=!1,phoneAvailable:i=!0,listeningPipe:r=!1,listeningWall:o=!1}={}){if(!t||!Number.isFinite(e)||e<=0)return[];const a=[],l=s1(s);if(l>s.housePhase&&(s.housePhase=l,a.push("house-phase")),s.powerOut){s.outageSeconds===0&&(s.battery=Math.min(s.battery,18),a.push("reserve-mode")),s.outageSeconds+=e;const c=s.battery;i&&(s.battery=Math.max(3,s.battery-e*(n?.12:.003))),c>8&&s.battery<=8&&a.push("battery-low"),s.pipeHeard||(s.pipeSeconds=r?Math.min(6,s.pipeSeconds+e):0,s.pipeSeconds>=6&&(s.pipeHeard=!0,a.push("pipe-heard"))),s.pipeHeard&&!s.wallLocated&&(s.wallListenSeconds=o?Math.min(2,s.wallListenSeconds+e):0,s.wallListenSeconds>=2&&(s.wallLocated=!0,a.push("wall-located")))}return s.discovered.includes("wash-echo")&&!s.ritualComplete&&s.ritual!=="given"&&(s.breathSeconds+=e),a}const Dc=3,wa=4.5,uo=Object.freeze(["rules","tape","household","messages","neighbor","balcony"]);function of(){return{...rf,discovered:[],messages:[],tools:[],bowl:"table",bowlTouched:!1,wallOpen:!1,letter:!1,sealDrawn:!1,ritualComplete:!1,admitted:!1,calledFather:!1,coughReplies:0,dumplings:"none",neighborMet:!1,deniedThird:!1,mirrorGaze:0,mirrorEncounter:"waiting",powerOut:!1,ritual:"idle",holdSeconds:0,holding:!1,endingLocked:null}}function Dt(s,e){return s.discovered.includes(e)?!1:(s.discovered.push(e),!0)}function gu(s){return uo.filter(e=>s.discovered.includes(e)).length}function _u(s,e,t){const n=i=>({ok:!1,reason:i});if(s.endingLocked&&!["cancel-hold"].includes(e))return n("这一夜已经结束。");switch(e){case"tool":if(!["scraper","alcohol","medicine"].includes(t))return n("不能拿取这个物件。");if(s.tools.includes(t))return n("已经收好了。");s.tools.push(t);break;case"message":if(!Number.isInteger(t)||t<0||t>=Dc)return n("没有这条短信。");s.messages.includes(t)||s.messages.push(t),s.messages.length===Dc&&Dt(s,"messages");break;case"meet-neighbor":s.neighborMet=!0,Dt(s,"neighbor");break;case"deny-third":if(!s.neighborMet)return n("门还没开。");s.deniedThird=!0;break;case"take-dumplings":if(!s.neighborMet||s.dumplings!=="none")return n("没有可以接过的饺子。");s.dumplings="kept";break;case"eat-dumplings":if(s.dumplings!=="kept")return n("没有可吃的饺子。");s.dumplings="eaten";break;case"discard-dumplings":if(s.dumplings!=="kept")return n("没有需要倒掉的饺子。");s.dumplings="discarded";break;case"take-bowl":if(!["table","inverted","served"].includes(s.bowl))return n("碗已经在手里。");s.bowlTouched=!0,s.bowl=s.bowl==="inverted"?"held-inverted":"held-dirty";break;case"put-bowl":if(!s.bowl.startsWith("held"))return n("手里没有碗。");s.bowl=s.bowl==="held-inverted"?"inverted":"table";break;case"wash-start":if(!s.wallOpen||!s.letter)return n("先看看墙里那封信。");if(s.bowl!=="held-dirty")return n("先把第三副碗带来。");s.bowl="washing";break;case"wash-finish":if(s.bowl!=="washing")return n("碗没有在清洗。");s.bowl="clean";break;case"invert-bowl":if(s.bowl!=="clean")return n("先洗净碗里的汤。");s.bowl="inverted";break;case"serve":if(!s.bowl.startsWith("held"))return n("先拿起第三副碗。");s.bowl="served",s.admitted=!0;break;case"open-wall":if(s.wallOpen)return n("墙纸已经撕开了。");if(!s.powerOut)return n("先找到妈妈留下的线索。");if(!s.wallLocated)return n("厨房水管里有敲击声。先听清它从哪里传来。");if(!s.tools.includes("scraper")||!s.tools.includes("alcohol"))return n("需要厨房的铲刀和卧室的工业酒精。");s.wallOpen=!0;break;case"read-letter":if(!s.wallOpen)return n("信还封在墙里。");s.letter=!0;break;case"draw-seal":if(!s.letter)return n("先翻看信背面的步骤。");if(!s.tools.includes("medicine"))return n("朱砂藏在妈妈的药瓶里。");if(!["inverted","held-inverted"].includes(s.bowl))return n("先洗净第三副碗，再倒扣。");if(s.sealDrawn)return n("封已经画好了。");s.sealDrawn=!0;break;case"ritual-start":if(!s.sealDrawn||s.bowl!=="held-inverted")return n("拿起倒扣的碗，再对准小镜子。");if(s.ritual!=="idle")return n("镜子已经伸出了手。");s.ritual="ready",s.holdSeconds=0;break;case"hold":if(s.ritual!=="ready")return n("现在不需要按住。");s.holding=!0;break;case"release":if(s.ritual!=="ready"||!s.holding)return n("还没有抓住碗。");s.holding=!1,s.ritual="given",s.admitted=!0,s.bowl="offered";break;case"cancel-hold":s.holding=!1,s.holdSeconds=0;break;case"call-father":s.calledFather=!0,s.admitted=!0;break;case"reply-cough":s.coughReplies=Math.min(3,s.coughReplies+1);break;case"break-wall":if(!s.wallOpen||!s.tools.includes("scraper"))return n("还无法撬动墙里的砖。");s.endingLocked="wall";break;default:return n("没有这个动作。")}return{ok:!0}}function l1(s,e,t){return s.ritual!=="ready"||!s.holding||(s.holdSeconds=Math.min(wa,s.holdSeconds+e),s.holdSeconds<wa)?!1:(s.ritual="resisted",s.holding=!1,s.ritualComplete=!0,!0)}function c1(s,e,t,n){return s.mirrorGaze=t?s.mirrorGaze+e:0,s.mirrorGaze<=3||s.admitted?!1:(s.admitted=!0,!0)}function u1(s,{beforeMidnight:e,lookedBack:t=!1}={}){return s.endingLocked==="wall"?"wall":!e||s.admitted||t||s.dumplings==="eaten"?"seat":s.ritualComplete&&s.sealDrawn&&!s.calledFather?"two":null}function Ic(s,{outside:e,atMidnight:t}={}){return!!(e&&t&&!s.bowlTouched&&s.deniedThird&&!s.admitted&&s.messages.length===Dc&&gu(s)===uo.length)}function ha(s,e,t,n=new D){const i=new Ze;i.name=`EVENT_${e}`,i.userData.story_dynamic=!0,i.position.copy(n),s.add(i),s.updateMatrixWorld(!0);const r=new Set(t.filter(Boolean));for(const o of r){let a=!1;for(let l=o.parent;l;l=l.parent)r.has(l)&&(a=!0);a||i.attach(o)}return i}function mn(s){return s&&(s.userData.story_dynamic=!0),s}function re(s,e,t,n,i){const r=new Xe(new Sr(...t),i);if(i.userData?.worldTextureScale){const o=r.geometry.attributes.uv,a=i.userData.worldTextureScale;for(let l=0;l<6;l++){const[c,u]=l<2?[t[2],t[1]]:l<4?[t[0],t[2]]:[t[0],t[1]];for(let h=l*4;h<l*4+4;h++)o.setXY(h,o.getX(h)*c*a,o.getY(h)*u*a)}}return r.name=e,r.position.set(...n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function Nc(s,e=.65){const t=s.clone();t.userData.worldTextureScale=e;for(const n of["map","normalMap","roughnessMap","metalnessMap","aoMap"])t[n]&&(t[n]=t[n].clone(),t[n].wrapS=t[n].wrapT=Bi,t[n].needsUpdate=!0);return t}function Pi(s,e,t,n,i){const r=new Xe(new lu(t.map(o=>new Pe(...o)),32),i);return r.name=e,r.position.set(...n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function Sn(s,e,t,n,i){const r=new Bd(t.map(a=>new D(...a))),o=new Xe(new uu(r,Math.max(8,t.length*4),n,6,!1),i);return o.name=e,o.castShadow=!0,s.add(o),o}function os(s,e=512,t=512){const n=document.createElement("canvas");n.width=e,n.height=t,s(n.getContext("2d"),e,t);const i=new ho(n);return i.colorSpace=It,i}function Qo(s,e,{red:t=[],dark:n=!1}={}){return os((i,r,o)=>{i.fillStyle=n?"#15201d":"#c6b991",i.fillRect(0,0,r,o);for(let a=0;a<12e3;a++)i.fillStyle=`rgba(65,48,22,${a%5*.014})`,i.fillRect(a*137.51%r,a*53.77%o,2,2);i.strokeStyle=n?"#84978d":"#6b6350",i.strokeRect(24,24,r-48,o-48),i.fillStyle=n?"#ced8c9":"#312e25",i.font='34px "Songti SC", serif',i.fillText(s,42,85),i.font='25px "Songti SC", serif',e.forEach((a,l)=>{i.fillStyle=t.includes(l)?"#8b291e":n?"#b5c4b6":"#39382f",i.fillText(a,42,150+l*59),t.includes(l)&&(i.strokeStyle="#8b291e",i.lineWidth=3,i.beginPath(),i.ellipse(r/2,142+l*59,r*.41,27,-.055,0,Math.PI*2),i.stroke())})},512,640)}function gn(s,e,t,n,i,r){const o=new Xe(new Hi(t,n),r);return o.name=e,o.position.set(...i),s.add(o),o}function eo(s,e=1){const t=new Ze;s.add(t);const n=new gt({color:9141612,roughness:.85}),i=new gt({color:1844775,roughness:.96}),r=new Xe(new bn(1,12,8),n);r.scale.set(.049,.022,.065),t.add(r);for(let l=0;l<4;l++){const c=new Xe(new ns(.009,.037-Math.abs(l-1)*.005,3,6),n);c.rotation.x=1.15,c.position.set((l-1.5)*.018,.014,-.055),t.add(c)}const o=new Xe(new ns(.012,.042,3,6),n);o.rotation.z=e*.7,o.position.set(e*.045,.013,-.011),t.add(o);const a=new Xe(new ri(.047,.055,.24,12),i);return a.rotation.x=Math.PI/2,a.position.z=.15,t.add(a),t.traverse(l=>{l.castShadow=!1}),t}function Ci(s,e,{woman:t=!1,seated:n=!1,color:i=1778724}={}){const r=new Ze;r.name=e,s.add(r);const o=new gt({color:i,roughness:.94}),a=new gt({color:8682864,roughness:.89}),l=new gt({color:t?2698283:1186330,roughness:1}),c=n?-.43:0,u=new Xe(new ri(.205,.235,.67,16),o);u.scale.z=.61,u.position.y=1.1+c,r.add(u);const h=new Xe(new bn(1,16,10),o);h.scale.set(.265,.11,.15),h.position.y=1.4+c,r.add(h);const d=new Xe(new ri(.045,.05,.12,12),a);d.position.y=1.47+c,r.add(d);for(const v of[-1,1]){const T=re(r,`${e} collar`,[.082,.14,.02],[v*.052,1.38+c,.143],o);T.rotation.z=v*.5}for(let v=0;v<4;v++){const T=new Xe(new bn(.008,6,5),l);T.position.set(0,1.27+c-v*.105,.15),r.add(T)}const f=new Ze;f.position.y=1.64+c,r.add(f);const g=new Xe(new bn(1,20,16),a);g.scale.set(.112,.157,.108),f.add(g);const _=new Xe(new bn(.116,16,10,0,Math.PI*2,0,t?1.3:1.34),l);if(_.scale.y=t?1.48:1.42,_.position.set(0,.012,-.015),f.add(_),t){const v=new Xe(new bn(.12,16,12,Math.PI,Math.PI,.85,1.7),l);v.scale.y=1.55,v.position.z=-.014,f.add(v)}const m=new gt({color:11643808,roughness:.76});for(const v of[-1,1]){const T=new Xe(new bn(.013,12,8),m);T.scale.y=.48,T.position.set(v*.042,.021,.098),f.add(T);const w=new Xe(new bn(.006,10,8),l);w.scale.z=.38,w.position.set(v*.042,.021,.111),f.add(w),Sn(f,`${e} brow`,[[v*.022,.045,.099],[v*.042,.05,.099],[v*.062,.046,.086]],.0035,l);const A=new Xe(new bn(1,10,8),a);A.scale.set(.023,.035,.018),A.position.set(v*.109,-.006,-.002),f.add(A)}const p=new Xe(new Pa(.021,.054,6),a);p.rotation.x=Math.PI/2,p.position.set(0,-.017,.108),f.add(p);const M=re(f,`${e} mouth`,[.037,.005,.004],[0,-.065,.102],new gt({color:5257777,roughness:.9})),y=[];for(const v of[-1,1]){const T=new Ze;T.position.set(v*.24,1.35+c,0),r.add(T);const w=new Xe(new ns(.06,.26,4,10),o);w.position.y=-.15,T.add(w);const A=new Ze;A.position.y=-.31,T.add(A);const L=new Xe(new ns(.046,.22,4,10),o);L.position.y=-.12,A.add(L);const b=eo(A,v);b.scale.setScalar(.9),b.position.y=-.27,b.rotation.x=-Math.PI/2,n&&(T.rotation.x=-.4,A.rotation.x=-1.06),y.push({arm:T,forearm:A});const x=new Xe(new ns(.081,.35,4,10),o);x.position.set(v*.12,n?.47:.55,n?.15:0),x.rotation.x=n?Math.PI/2:0,r.add(x);const N=new Xe(new ns(.065,.32,4,10),o);N.position.set(v*.12,.23,n?.35:0),r.add(N);const U=new Xe(new bn(1,12,8),l);U.scale.set(.077,.052,.13),U.position.set(v*.12,.065,n?.4:.06),r.add(U)}return r.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),r.userData.rig={head:f,mouth:M,arms:y,torso:u},r}function da(s,{radius:e=.07,height:t=.38,count:n=16}={}){const i=new Ot,r=new Float32Array(n*3);i.setAttribute("position",new ln(r,3));const o=new Bt({transparent:!0,depthWrite:!1,uniforms:{opacity:{value:.13}},vertexShader:"void main(){ vec4 p=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*p; gl_PointSize=clamp(18./-p.z,2.,36.); }",fragmentShader:"uniform float opacity; void main(){vec2 p=(gl_PointCoord-.5)*vec2(3.8,1.7);float d=length(p);gl_FragColor=vec4(.74,.79,.72,exp(-d*d*4.)*(1.-smoothstep(.6,1.,d))*opacity);}"}),a=new ru(i,o);return a.frustumCulled=!1,s.add(a),{mesh:a,update(l){for(let c=0;c<n;c++){const u=(l*.21+c*.618)%1;r[c*3]=Math.sin(c*2.8+u*3)*e*(.3+u),r[c*3+1]=u*t,r[c*3+2]=Math.cos(c*6.1+u*2)*e*(.3+u)}i.attributes.position.needsUpdate=!0}}}function h1(s,e,t=640,n=400){const i=new wn(t,n,{minFilter:Cn});i.texture.colorSpace=It;const r=new Uint8Array(t*n*4),o=document.createElement("canvas");o.width=t,o.height=n;const a=o.getContext("2d"),l=a.createImageData(t,n);return{canvas:o,render(c,u=()=>()=>{}){const h=s.getRenderTarget(),d=s.getViewport(new Mt),f=[];e.traverse(_=>{_.visible&&(_.isReflector||_.userData.captureHidden)&&(f.push(_),_.visible=!1)});const g=u();try{e.updateMatrixWorld(!0),s.setRenderTarget(i),s.clear(),s.render(e,c),s.readRenderTargetPixels(i,0,0,t,n,r);for(let _=0;_<n;_++)l.data.set(r.subarray((n-_-1)*t*4,(n-_)*t*4),_*t*4);return a.putImageData(l,0,0),o}finally{g?.(),f.forEach(_=>{_.visible=!0}),s.setRenderTarget(h),s.setViewport(d)}},dispose(){i.dispose()}}}function d1(s){return s.y<.5||s.z>4.2?"outside":s.x>10?"balcony":s.z<-3?s.x<-2?"old-bedroom":s.x<2?"mother-bedroom":"bathroom":s.x>6?"kitchen":"living"}function f1(s,e){const t=n=>s.discovered.includes(n);return!t("mirror")||s.wallOpen?null:e==="old-bedroom"&&!t("heard-return")?"mother-return":e==="balcony"&&t("balcony")&&!t("heard-look-back")?"mother-look-back":null}function is(s){return!s.discovered.includes("phone-missing")||s.discovered.includes("phone-recovered")}function p1(s){return{"mother-return":"heard-return","mother-look-back":"heard-look-back"}[s]||null}function m1(s,e,t,n,i){if(!s.discovered.includes("wash-echo")||s.discovered.includes("phone-dropped")||s.ritual==="ready")return!1;const r=e.x-t.x,o=e.z-t.z,a=Math.hypot(r,o);return a>.55&&a<3.1&&(r*n.x+o*n.z)/a>.28&&i}const fn=s=>s*s*(3-2*s),Ye=s=>new D(...s);function g1({world:s,scene:e,camera:t,renderer:n,story:i,sound:r,emit:o,view:a,collidersChanged:l}){const c=P=>s.getObjectByName(P)||s.getObjectByName(Tt.sanitizeNodeName(P)),u=P=>{const se=[];return s.traverse(me=>{P(me)&&se.push(me)}),se},h=new Ze;h.name="EVENT_LIVE_STORY",s.add(h);const d=(P,se=.83,me={})=>new gt({color:P,roughness:se,...me}),f=d(3484448),g=d(6515557,.35,{metalness:.72}),_=d(12765369,.2),m=d(1054743),p=d(7481630,.91),M=[],y=(P,se,me)=>(P.userData.hintBelow=["bowl_third","take_scraper","take_alcohol","take_medicine","dumplings","wall_mirror"].includes(se),P.userData.interaction=se,P.userData.prompt=me,mn(P),M.push(P),P);let v=0,T=null,w=!1,A=null,L=!1,b=!1,x=!1,N=!1,U=0,k=!1,Y=!1,B=!1,G=!1,K=null,V=null,le=24,he=-1/0,Te=!1;const Ne=mn(c("INT_TAPE")),je=Ne.position.clone();Ne.position.set(-4.5,.155,-4.91),Ne.userData.prompt="抽出床底的生日磁带";const st=u(P=>/^Tape.reel/.test(P.name));st.forEach(mn);const Se=new D,J=new D,ie=()=>({position:t.position.clone(),quaternion:t.quaternion.clone(),fov:t.fov});function ge(P){t.position.copy(P.position),t.quaternion.copy(P.quaternion),t.fov=P.fov,t.updateProjectionMatrix(),a()}function de(P,se){t.position.copy(P),t.lookAt(se),a()}function ve(P,se,me=()=>{},lt=!0){return T?!1:(T={duration:P,time:0,update:se,complete:me,lock:lt},se(0),!0)}function j(P,se){const me=_u(i,P,se);return me.ok?o("changed"):o("hint",me.reason),me.ok}const be=u(P=>/Third.chair.draped.raincoat|Raincoat.sleeve/.test(P.name));be.forEach(P=>{mn(P),P.visible=!1});const C=mn(c("Third chair")),$=C?.position.clone();let I=0,O=0;const z=u(P=>/^Mirror.handwritten/.test(P.name));z.forEach(P=>{mn(P),P.material=P.material.clone(),P.material.transparent=!0,P.material.opacity=0,P.visible=!1});const te=c("EVENT_MIRROR_SHADOW");te&&(te.visible=!1);const ae=c("EVENT_TABLE_SHADOW");ae&&(ae.visible=!1);const we=c("INT_BOWL_THIRD");delete we.userData.interaction;const fe=ha(s,"CARRIABLE_THIRD_BOWL",u(P=>P.name.startsWith("INT_BOWL_THIRD")||/^Quiet.soup.surface$/.test(P.name)),Ye([2.28,.789,.3]));y(fe,"bowl_third","拿起第三副碗");const it=fe.position.clone(),R=c("Quiet soup surface"),S=da(fe);S.mesh.position.y=.07;const W=new Ze;W.name="EVENT_HELD_BOWL",t.add(W),W.userData.captureHidden=!0,W.position.set(.17,-.28,-.54),W.visible=!1;for(const P of[-1,1]){const se=eo(W,P);se.position.set(P*.105,-.027,.04),se.rotation.z=P*-.25}t.layers.enable(2),W.traverse(P=>P.layers.set(2));const ne=new Wt(12964027,.32,1.8,2);ne.position.set(.1,-.08,-.12),ne.layers.set(2),t.add(ne);const ce=Ye([7.45,.96,-2.31]),Q=Ye([8.06,1.006,-2.24]),Ue=(P,se=!1)=>{s.attach(fe),fe.position.copy(P),fe.rotation.set(0,0,se?Math.PI:0),W.visible=!1,fe.traverse(me=>me.layers.set(0))},Me=()=>{W.visible=!0,W.add(fe),fe.position.set(0,0,0),fe.rotation.set(.1,0,i.bowl==="held-inverted"?Math.PI:0),fe.traverse(P=>P.layers.set(2))},ze=re(h,"Mother bedside cabinet",[.48,.69,.48],[-1.35,.345,-6.25],f);ze.userData.collider=!0;const Ve=gn(h,"Household registration copy",.34,.45,[0,.817,-6.32],new gt({map:Qo("户口登记复印件",["户主　林秀珍","女儿　林晚","林建平　离异迁出","登记备注：已迁出"],{red:[2]}),roughness:.98,side:Rn}));Ve.rotation.x=-Math.PI/2,y(Ve,"household","拿出枕头下的户口本");const _e=mn(c("Mother pillow")),Ae=new Ze;Ae.position.set(8.05,1.04,-2.21),h.add(Ae),re(Ae,"Scraper blade",[.16,.009,.14],[0,0,-.05],g),re(Ae,"Scraper wooden handle",[.045,.026,.18],[0,.012,.1],f),y(Ae,"take_scraper","拿起铲刀");const Ke=Pi(h,"Industrial alcohol bottle",[[.06,0],[.061,.2],[.028,.235],[.026,.3]],[-1.46,.7,-6.35],d(8031610,.2,{transparent:!0,opacity:.83}));y(Ke,"take_alcohol","拿起工业酒精");const Ge=gn(Ke,"Alcohol label",.087,.12,[0,.135,.061],new gt({map:Qo("酒精",["工业用"])}));Ge.material.side=Rn;const Ee=c("Medicine bottle");Ee&&(Ee.visible=!1);const Qe=Pi(h,"Mother medicine bottle",[[.034,0],[.034,.11],[.023,.125],[.023,.15]],[-3.64,.84,2.35],d(7955274));y(Qe,"take_medicine","收好妈妈的药瓶"),Pi(Qe,"Medicine cap",[[.027,0],[.027,.026]],[0,.147,0],_);const F=new Ze;F.position.set(-1.28,.705,-6.18),F.rotation.x=-Math.PI/2,h.add(F),re(F,"Mother phone body",[.14,.275,.018],[0,0,0],m),gn(F,"Mother phone screen",.124,.235,[0,.006,.012],new Ft({map:Qo("未发送",["收件人：晚晚","今晚别回来住","家里有人","草稿　3 条"],{dark:!0})})),y(F,"messages","查看妈妈未发送的短信");const pe=c("Kitchen sink");pe&&(pe.visible=!1);const ye=c("Kitchen faucet");ye&&(ye.visible=!1),Sn(h,"Kitchen curved faucet",[[7.45,1.02,-2.53],[7.45,1.29,-2.53],[7.45,1.39,-2.46],[7.45,1.36,-2.31]],.017,g),Pi(h,"Kitchen tap base",[[.029,0],[.029,.035]],[7.45,1.012,-2.53],g),re(h,"Kitchen tap lever",[.07,.012,.023],[7.49,1.1,-2.53],g);const Oe=new Ze;Oe.position.set(7.45,1.012,-2.31),h.add(Oe);const xe=d(2571063,.21,{metalness:.75});re(Oe,"Sink dark water basin",[.62,.015,.46],[0,.01,0],xe);for(const P of[-.235,.235])re(Oe,"Sink rolled rim",[.72,.045,.032],[0,.025,P],g);for(const P of[-.344,.344])re(Oe,"Sink rolled rim",[.032,.045,.48],[P,.025,0],g);y(Oe,"kitchen_sink","把碗放到水龙头下");const oe=new Xe(new ri(.008,.011,.37,10),new gt({color:10732990,transparent:!0,opacity:.57,roughness:.13,emissive:1847340}));oe.position.set(7.45,1.17,-2.31),oe.visible=!1,h.add(oe);const He=[];for(let P=0;P<12;P++){const se=new Xe(new bn(.007,5,4),oe.material);h.add(se),se.visible=!1,He.push(se)}const rt=Pi(h,"Warm egg soup pot",[[.12,0],[.19,.04],[.19,.19],[.183,.2],[.172,.185],[.172,.03]],[8.45,1.06,-2.25],g),Pt=ha(s,"CHOPPING_BOARD",u(P=>/^Cut.vegetable/.test(P.name)),Ye([8.45,1.06,-2.23]));Pt.position.x=6.63,y(rt,"serve_soup","给第三副碗盛汤");const vt=new Xe(new pr(.17,32),d(10523212,.22));vt.rotation.x=-Math.PI/2,vt.position.y=.16,rt.add(vt);const Dn=da(rt,{radius:.12,height:.48});Dn.mesh.position.y=.17;const cn=Ci(h,"Peephole father");cn.position.set(.05,0,6.25),cn.visible=!1;const un=Ci(h,"Bathroom father");un.position.set(3.83,0,-4.78),un.rotation.y=Math.PI,un.visible=!1;const yi=re(h,"Bathroom wall switch",[.13,.2,.026],[4.64,1.35,-3.09],_);y(yi,"bath_switch","关掉卫生间的灯");const qn=u(P=>P.isLight&&/BATHROOM/.test(P.name))[0],Cs=qn?.intensity||4.5,Ps=u(P=>P.isLight).map(P=>({object:P,base:P.intensity})),Vi=u(P=>P.isMesh&&/filament.bulb|tungsten.bulb|Hall.fluorescent.tube/i.test(P.name)).map(P=>(mn(P),P.material=P.material.clone(),{object:P,base:P.material.emissiveIntensity})),Gi=new Wt(9943714,0,8,2);Gi.position.set(.8,2.58,3.5),h.add(Gi),re(h,"502 emergency light",[.38,.08,.12],[.8,2.75,3.88],_);const ci=new Ze;ci.position.set(-5.4,.91,-1.8),ci.rotation.y=Math.PI/2,h.add(ci);const _o=re(h,"Television low cabinet",[.55,.49,1.12],[-5.4,.245,-1.8],f);_o.userData.collider=!0,re(ci,"Old television cabinet",[1.05,.79,.43],[0,0,0],m);const Ls=new Ft({color:9217685});gn(ci,"Television static",.82,.58,[0,.03,.222],Ls);const Ds=document.createElement("canvas");Ds.width=128,Ds.height=96;const Qt=Ds.getContext("2d"),Lr=new ho(Ds);Lr.colorSpace=It,Ls.map=Lr;const Is=new Wt(7507337,.75,3.2,2);Is.position.set(-5.08,1.1,-1.8),h.add(Is);const vo=c("INT_DOOR_501");delete vo.userData.interaction;const Ns=ha(s,"NEIGHBOR_DOOR",u(P=>P===vo||/501.recessed.panel|501.door.handle/.test(P.name)),Ye([-.68,0,7.91]));y(Ns,"door_501","敲 501 的门"),Ns.userData.hintAnchor=[.68,1.45,0],re(h,"501 darkness",[1.42,2.48,.12],[0,1.23,8.85],m);const E=Ci(h,"Aunt Wang",{woman:!0,color:4015168});E.position.set(.52,0,8.22),E.rotation.y=Math.PI,E.visible=!1,E.userData.rig.arms.forEach(({arm:P,forearm:se},me)=>{P.rotation.x=-.65,P.rotation.z=me?-.22:.22,se.rotation.x=-1.05});const H=new Wt(13612923,1.6,2.8,2);H.position.set(.3,1.8,8.25),h.add(H),H.visible=!1,y(re(h,"Answer at 501",[.22,.14,.015],[.52,1.52,7.85],new Ft({transparent:!0,opacity:0,depthWrite:!1})),"deny_third","“家里只有我和妈妈。”");const q=Pi(h,"Wang dumpling bowl",[[.05,0],[.13,.045],[.16,.11],[.148,.12],[.13,.095],[.04,.025]],[.52,1.02,7.72],_);y(q,"dumplings","接过热饺子"),q.visible=!1;const Z=new Ze;q.add(Z);for(let P=0;P<7;P++){const se=new Xe(new bn(1,12,8,0,Math.PI*2,0,Math.PI*.75),d(13288617,.57));se.scale.set(.038,.021,.024),se.rotation.y=P*2.7,se.position.set(Math.sin(P*2.7)*.082,.075,Math.cos(P*2.7)*.065),Z.add(se)}const X=da(q);X.mesh.position.y=.11,y(re(h,"Discard at sink",[.18,.08,.13],[7.15,1.06,-2.05],g),"discard_dumplings","把饺子倒进水槽");const ue=mn(c("INT_WALL_SEAL"));ue.position.x=-5.675;const Ce=ue.position.clone(),Ie=c("EVENT_WALL_BRICKS"),ke=c("Wall letter");ke.visible=!1;const et=gn(Ie,"Mother unfinished letter",.51,.72,[.11,1.24,0],new gt({map:Qo("晚晚：",["不是你爸回来了。","是房子要把他留下。","我守了十九年。","你是钥匙。","如果它坐下来——"],{red:[4]}),roughness:.95}));et.rotation.y=Math.PI/2,y(et,"wall_letter","取下妈妈没写完的信");const tt=c("Wall small mirror");tt&&(tt.visible=!1);const qe=new wn(384,384,{minFilter:Cn}),ut=gn(Ie,"Impossible wall mirror",.34,.38,[.095,1.9,0],new Ft({map:qe.texture}));ut.userData.captureHidden=!0,ut.rotation.y=Math.PI/2,y(ut,"wall_mirror","把倒扣的碗对准镜子");const St=new jt(42,1,.08,35);St.position.set(.2,1.45,1.6),St.lookAt(2.8,1.02,.47);const at=Ci(h,"Mirror seated Lin Wan",{woman:!0,seated:!0,color:2108720});at.position.set(2.88,0,.47),at.rotation.y=-Math.PI/2,at.visible=!1;const dt=y(re(h,"Lin Wan phone on the third chair",[.145,.018,.275],[2.88,.594,.47],m),"recover_phone","拿起椅子上正在录像的手机");dt.visible=!1,dt.userData.hintBelow=!0;const At=gn(dt,"Dropped phone recording screen",.13,.248,[0,.011,0],new Ft({map:os((P,se,me)=>{P.fillStyle="#172b29",P.fillRect(0,0,se,me),P.fillStyle="#b23229",P.beginPath(),P.arc(30,30,10,0,7),P.fill(),P.fillStyle="#b6c8b9",P.font="22px monospace",P.fillText("REC",52,38),P.strokeStyle="#829b8c",P.strokeRect(15,66,se-30,me-90)},256,448)}));At.rotation.x=-Math.PI/2;let We=null;const Lt=h1(n,e),xt=new jt(47,1.6,.05,35);xt.position.set(3.7,1.67,2.9),xt.lookAt(1.55,1.04,.12);const hn=new jt(71,1.6,.05,30);hn.position.set(2.88,.616,.47),hn.lookAt(2,2.2,4.1);const dn=new Ze;dn.name="EVENT_FUTURE_PHOTOGRAPH",h.add(dn),dn.visible=!1;const ui=[{x:.39,z:.25,woman:!0,rotation:Math.PI/2},{x:1.55,z:-.57,woman:!0,rotation:0},{x:2.88,z:.47,woman:!1,rotation:-Math.PI/2}].map((P,se)=>{const me=Ci(dn,`Future family ${se}`,{woman:P.woman,seated:!0,color:se===1?2108720:se===0?6448727:3160891});return me.position.set(P.x,0,P.z),me.rotation.y=P.rotation,me}),wt=ui[1];wt.userData.rig.head.rotation.y=.48,wt.userData.rig.arms[1].arm.rotation.x=-.95,wt.userData.rig.arms[1].forearm.rotation.x=-1.3;for(const P of[-1,1])Sn(wt.userData.rig.arms[1].forearm,"Future photograph raised chopstick",[[P*.012,-.255,.03],[P*.017,-.42,.18]],.004,f);const Vt=new Wt(14075044,8,6,2);Vt.position.set(2,2.6,1.3),dn.add(Vt);const Gt=mn(c("Lin family photo"));Gt&&(Gt.rotation.y=Math.PI),Gt?.traverse(mn),Gt?.traverse(P=>{/Lin.family.photo.(face|body)/.test(P.name)&&(P.visible=!1)});const Yt=new co().load(new URL("./story/corridor-photos.png",document.baseURI).href);Yt.colorSpace=It,Yt.repeat.set(1/3,.5),Yt.offset.set(0,.5),Gt&&gn(Gt,"Mother and daughter old photograph",.913,.651,[0,0,.048],d(12960174,.88,{map:Yt}));const kt=new Ze;Gt?.add(kt),kt.visible=!1,re(kt,"Third photo body",[.115,.22,.006],[0,-.11,.05],m);const Us=new Xe(new pr(.062,20),d(10264204));Us.position.set(0,.11,.052),kt.add(Us);const Nn=kt.clone(!0);Nn.name="Third figure in photo glass",Gt?.add(Nn),Nn.visible=!1,Nn.traverse(P=>{P.isMesh&&(P.material=P.material.clone(),P.material.transparent=!0,P.material.opacity=.3)});const Su=new co().load(new URL("./story/father-portrait.png",document.baseURI).href);Su.colorSpace=It;for(let P=0;P<21;P++){const se=new Ze;se.position.set(.065+P%3*.002,.38+P%7*.28,-.85+Math.floor(P/7)*.68),se.rotation.x=(P%4-1.5)*.18,Ie.add(se);const me=Su.clone();me.repeat.set(.72,.76),me.offset.set(.14+P%3*.015,.12);const lt=d(P%3?12432283:10264211,.98,{map:me,side:Rn}),Re=gn(se,"Buried photograph fragment",.18,.22,[0,0,0],lt);Re.rotation.y=Math.PI/2}const Os=new Xe(new ri(.055,.055,2.24,14),ue.material);Os.rotation.x=Math.PI/2,h.add(Os),Os.visible=!1;const xo=new Ze;xo.name="EVENT_CINNABAR_SEAL",h.add(xo);const Fs=[],Ga=[[[-.8,.6],[-.8,2.65],[.8,2.65],[.8,.6],[-.8,.6]],[[-.64,2.46],[.64,2.46]],[[-.48,2.25],[.48,2.25]],[[-.6,.94],[-.15,1.18],[.1,.81],[.4,1.2],[.61,.95]],[[-.69,1.48],[-.38,1.3]],[[.38,1.3],[.69,1.48]],[[0,2.6],[0,2.17]],[[-.52,2.12],[-.65,1.8]],[[.52,2.12],[.65,1.8]]];Ga.forEach((P,se)=>{const me=Sn(xo,`Cinnabar stroke ${se}`,P.map(([lt,Re])=>[-5.65,Re,lt]),.014,p);me.visible=!1,Fs.push(me)}),y(re(h,"Seal drawing place",[.025,.3,.34],[-5.67,1.05,.5],new Ft({transparent:!0,opacity:0,depthWrite:!1})),"draw_seal","用药瓶里的朱砂画封");const Rf=y(re(h,"Pry wall brick",[.09,.18,.25],[-5.66,.53,-.7],d(4802619)),"break_wall","用铲刀撬开整面墙"),Cf=y(re(h,"Answer the wall",[.035,.17,.2],[-5.71,1.42,1],ue.material),"answer_wall","回应墙里的咳嗽");y(re(h,"Father name on wall",[.012,.19,.22],[-5.63,1.17,-.64],new Ft({transparent:!0,opacity:0,depthWrite:!1})),"call_father","轻声叫“爸”");const hi=new Ze;hi.position.set(-5.55,1.77,0),hi.rotation.z=Math.PI/2,h.add(hi),hi.visible=!1,eo(hi,1).scale.setScalar(1.4);for(const P of["Clock hour hand","Clock minute hand"]){const se=c(P);se&&(se.visible=!1)}const Wa=[];for(const[P,se,me]of[["hour",.112,.008],["minute",.167,.005]]){const lt=new Ze;lt.position.set(2.32,2.14,-2.813),h.add(lt),re(lt,`Live ${P} hand`,[me,se,.004],[0,se/2,0],m),Wa.push(lt)}const en=new Ze;en.name="EVENT_MORNING_HOTEL",en.position.set(23,0,0),h.add(en),en.visible=!1;const Pf=d(11184530,.96),Lf=d(12106148,.97);re(en,"Hotel carpet",[4.6,.12,5],[0,-.06,0],d(5593936,.99));for(const[P,se]of[[[.15,3,5],[-2.3,1.5,0]],[[.15,3,5],[2.3,1.5,0]],[[4.6,3,.15],[0,1.5,2.5]],[[4.6,3,.15],[0,1.5,-2.5]]]){const me=re(en,"Hotel room wall",P,se,Pf);me.userData.collider=!0}const Df=re(en,"Hotel bed base",[1.55,.4,2.05],[-.7,.2,-.5],f);Df.userData.collider=!0,re(en,"Hotel white duvet",[1.61,.26,2.1],[-.7,.53,-.5],Lf),re(en,"Hotel pillows",[1.15,.15,.44],[-.7,.74,-1.22],_),re(en,"Hotel headboard",[1.8,1.1,.09],[-.7,.65,-1.63],f);const If=re(en,"Hotel bedside table",[.55,.56,.52],[.52,.28,-1.15],f);If.userData.collider=!0,re(en,"Morning phone",[.14,.016,.25],[.52,.576,-1.15],m),gn(en,"Dawn through hotel window",1.7,1.55,[0,1.92,-2.407],new Ft({color:12109759}));for(const P of[-.88,0,.88])re(en,"Hotel window frame",[.035,1.65,.035],[P,1.92,-2.37],f);for(const P of[-1.04,1.04])re(en,"Hotel drawn curtains",[.27,2.35,.12],[P,1.77,-2.23],d(8549981));const wu=new Wt(14278082,15,7,2);wu.position.set(.2,2.5,-1.9),en.add(wu),re(en,"Hotel door",[.9,2.28,.05],[1.17,1.14,2.407],f);function Dr(P,se=.97,me=4){return t.getWorldDirection(J),Se.copy(P).sub(t.position),Se.length()<me&&J.dot(Se.normalize())>se}function Tu(){!b||!N||Dr(Ye([2.9,1,.47]),.5,20)||(be.forEach(P=>{P.visible=!0}),b=!1,r.effect?.("chair",.7),o("coat-appeared"))}function Xa(){i.powerOut||gu(i)<uo.length||!i.discovered.includes("mirror")||(i.powerOut=!0,r.effect?.("breaker",.5),o("blackout"))}function Nf(){if(!i.wallOpen&&!V||v-he<.15||t.position.distanceTo(Ye([-5.7,1.8,0]))>4&&!V)return;he=v;const P=[];e.traverse(lt=>{(lt.isReflector||lt===ut||lt===W)&&lt.visible&&(P.push(lt),lt.visible=!1)});const se=at.visible;at.visible=!0;const me=n.getRenderTarget();try{n.setRenderTarget(qe),n.render(e,St)}finally{n.setRenderTarget(me),at.visible=se,P.forEach(lt=>{lt.visible=!0})}}const di={targets:M,root:h,bowl:fe,mirrorFather:un,selfPortrait(){const P=new jt(31,1.6,.05,20);P.position.set(1.55,1.22,.65),P.lookAt(1.55,1.17,-.57);const se=Lt.render(P,()=>{const lt=dn.visible,Re=wt.userData.rig.head.rotation.y,bt=Vt.position.clone(),xn=Vt.intensity;Vt.position.set(1.3,1.7,.6),Vt.intensity=5;const qa=ui.map(Bs=>Bs.visible);return dn.visible=!0,ui.forEach(Bs=>{Bs.visible=Bs===wt}),wt.userData.rig.head.rotation.y=0,()=>{dn.visible=lt,Vt.position.copy(bt),Vt.intensity=xn,wt.userData.rig.head.rotation.y=Re,ui.forEach((Bs,Uf)=>{Bs.visible=qa[Uf]})}}),me=document.createElement("canvas");return me.width=320,me.height=400,me.getContext("2d").drawImage(se,160,0,320,400,0,0,320,400),me},houseBreath(P,se){V||(i.powerOut&&(Gi.intensity*=1-P*.075,Is.intensity*=1-P*.11),Ls.color.setHex(9217685).multiplyScalar(1-P*.13),se?(vt.scale.setScalar(1+P*.018),Dn.mesh.scale.y=1+P*.1):(vt.scale.setScalar(1),Dn.mesh.scale.y=1))},phonePhoto(){return Lt.render(xt,()=>{const P=at.visible;return at.visible=!1,dn.visible=!0,()=>{at.visible=P,dn.visible=!1}})},phoneRecording(){return Lt.render(hn)},recoverPhone(){!dt.visible||We<.8||(dt.visible=!1,r.effect("cloth",.45),o("phone-recovered"))},get playableEnding(){return V?.type==="two"&&V.time<18},get locked(){return!!(T?.lock||i.ritual==="ready"||V&&!di.playableEnding)},get busy(){return!!T},available(P){return P==="mirror"?A===null&&!i.letter:P==="door_502"?!0:P==="door_501"?!i.neighborMet:P==="wall_seal"?!i.wallOpen:P==="peephole"?i.discovered.includes("table")&&t.position.z<4.2&&!x:P==="bowl_third"?["table","inverted","clean","served"].includes(i.bowl):P==="dining_table"?!i.discovered.includes("table")||i.bowl.startsWith("held"):P==="take_scraper"?!i.tools.includes("scraper"):P==="take_alcohol"?!i.tools.includes("alcohol"):P==="take_medicine"?!i.tools.includes("medicine"):P==="kitchen_sink"?i.bowl==="held-dirty"&&i.letter:P==="serve_soup"?i.bowl.startsWith("held"):P==="deny_third"?i.neighborMet&&!i.deniedThird:P==="dumplings"?i.neighborMet&&["none","kept"].includes(i.dumplings):P==="discard_dumplings"?i.dumplings==="kept":P==="wall_letter"?i.wallOpen&&!i.letter:P==="draw_seal"?i.letter&&!i.sealDrawn&&["inverted","held-inverted"].includes(i.bowl):P==="wall_mirror"?i.letter&&i.sealDrawn&&i.bowl==="held-inverted"&&i.ritual==="idle":P==="break_wall"?i.letter&&i.ritual==="idle"&&!i.bowl.startsWith("held"):P==="answer_wall"?i.discovered.includes("rules")&&!i.wallOpen&&i.coughReplies<3:P==="call_father"?i.letter&&!i.calledFather&&!i.sealDrawn:P==="bath_switch"?B&&!G:P==="recover_phone"?dt.visible&&We>=.8:!0},setArtMode(P){w=!!P,h.visible=!w,pe&&(pe.visible=w),ye&&(ye.visible=w),be.forEach(se=>{se.visible=w}),z.forEach(se=>{se.visible=w,se.material.opacity=w?1:0})},doorOpened(){N=!0,Tu()},table(){i.bowl.startsWith("held")?j("put-bowl")&&Ue(it.clone().add(Ye([0,i.bowl==="inverted"?.093:0,0])),i.bowl==="inverted"):(Dt(i,"table"),Nn.visible=!0,r.china(),O=Math.max(O,.065),o("changed"))},mirror(){A===null&&(A=v,z.forEach(P=>{P.visible=!0}),r.effect?.("breath",4.8))},peephole(){if(T||x)return;const P=ie();cn.visible=!0,o("peephole-enter"),t.fov=91,t.updateProjectionMatrix(),ve(4,se=>{de(Ye([.05,1.66,4.31]),Ye([.05,1.58,6.45])),cn.userData.rig.torso.scale.x=1+Math.sin(se*5)*.012},()=>{cn.visible=!1,ge(P),o("peephole-exit"),x=!0,b=!0,N=!1,Dt(i,"peephole"),o("changed")})},takeTool(P){const se=P.replace("take_","");if(!j("tool",se))return;const me={scraper:Ae,alcohol:Ke,medicine:Qe}[se],lt=me.position.clone();r.effect?.("cloth",.35),ve(.65,Re=>{me.position.y=lt.y+Math.sin(Re*Math.PI)*.12,me.scale.setScalar(1-fn(Re)*.85)},()=>{me.visible=!1})},uncoverBook(P){if(i.discovered.includes("household"))return P();const se=_e.position.clone();ve(.85,me=>{_e.position.x=se.x+fn(me)*.42,_e.rotation.z=me*-.13},P)},neighbor(){i.neighborMet||(r.knock(),E.visible=!0,H.visible=!0,ve(2.2,P=>{Ns.rotation.y=fn(P)*-.62,P>.8&&(q.visible=!0)},()=>{j("meet-neighbor"),r.playVoice("wang-neighbor"),l(),Xa()}))},denyThird(){j("deny-third")&&r.playVoice("wan-deny")},dumplings(){if(i.dumplings==="none"){if(!j("take-dumplings"))return;const P=q.position.clone(),se=Ye([2.3,1.385,3.64]);ve(1.2,me=>{q.position.lerpVectors(P,se,fn(me)),q.position.y+=Math.sin(me*Math.PI)*.25}),q.userData.prompt="吃一只饺子"}else j("eat-dumplings")&&(r.effect?.("cloth",.4),Z.children.slice(0,3).forEach(P=>{P.visible=!1}),o("ate-dumplings"))},discard(){if(!j("discard-dumplings"))return;const P=q.position.clone();ve(2.1,se=>{q.position.lerpVectors(P,ce.clone().add(Ye([-.16,.3,0])),fn(Math.min(1,se*2))),q.rotation.z=Math.max(0,se-.45)*3,se>.7&&(Z.visible=!1)},()=>{q.visible=!1,r.effect?.("water",.8)})},takeBowl(){if(i.bowl==="clean"){if(!j("invert-bowl"))return;const me=fe.rotation.z;ve(1.2,lt=>{fe.rotation.z=me+fn(lt)*Math.PI,fe.position.y=Q.y+fn(lt)*.093+Math.sin(lt*Math.PI)*.1},()=>r.china());return}if(!j("take-bowl"))return;const P=fe.getWorldPosition(new D);s.attach(fe);const se=t.localToWorld(Ye([.17,-.28,-.54]));ve(.8,me=>{fe.position.lerpVectors(P,se,fn(me))},()=>{Me(),r.china()})},wash(){if(!j("wash-start"))return;const P=ie(),se=fe.getWorldPosition(new D);Ue(se),k=!0,oe.visible=!0,r.setWater?.(!0),ve(6.5,me=>{de(Ye([7.08,1.6,-1.05]),Ye([7.46,1.02,-2.3])),fe.position.lerpVectors(se,ce,fn(Math.min(1,me*4))),me>.2&&(fe.rotation.x=Math.sin(me*28)*.27,fe.position.y=.976+Math.sin(me*20)*.018),R&&(R.visible=me<.55),me>.22&&!Y&&(Y=!0,r.playSequence(["wan-echo","mother-wall-answer"],{gap:1.1}),at.visible=!0,Dt(i,"wash-echo"),Dt(i,"phone-missing"),o("wash-echo"))},()=>{k=!1,oe.visible=!1,r.setWater?.(!1),j("wash-finish"),Ue(Q),fe.userData.prompt="把洗净的碗倒扣",ge(P)})},serve(){if(!j("serve"))return;const P=fe.getWorldPosition(new D);Ue(P),R&&(R.visible=!0),ve(2.8,se=>{fe.position.lerpVectors(P,it,fn(se)),fe.position.y+=Math.sin(se*Math.PI)*.22},()=>{O=.36,at.visible=!0,r.china(),o("admitted")})},openWall(){if(!j("open-wall"))return;Ie.visible=!0,Os.visible=!0,r.effect?.("paper",5.2);const P=ie();ve(5.2,se=>{de(Ye([-4.43,1.64,.45]),Ye([-5.72,1.58,0])),ue.scale.y=Math.max(.008,1-fn(se)),ue.position.y=Ce.y+fn(se)*1.18,Os.position.set(-5.58,Ce.y-1.18+fn(se)*2.36,0)},()=>{ue.visible=!1,Os.visible=!1,ge(P),kt.visible=!0,Nn.visible=!1,o("wall-opened")})},drawSeal(){if(!j("draw-seal"))return;const P=ie(),se=eo(h,1);se.rotation.z=Math.PI/2,ve(4.5,me=>{de(Ye([-4.38,1.63,.32]),Ye([-5.68,1.6,0]));const lt=Math.min(Fs.length-1,Math.floor(me*Fs.length));Fs.forEach((xn,qa)=>{xn.visible=qa<=lt});const[Re,bt]=Ga[lt][Math.min(1,Ga[lt].length-1)];se.position.set(-5.5,bt,Re)},()=>{se.removeFromParent(),ge(P),r.effect?.("cloth",.6)})},ritual(){if(!j("ritual-start"))return;const P=ie();di.ritualView=P,de(Ye([-4.85,1.62,0]),Ye([-5.64,1.87,0])),hi.visible=!0,o("ritual-ready")},holdRitual(){return j("hold")},releaseRitual(P=!1){if(P){j("cancel-hold");return}j("release")&&di.finishRitual(!1)},finishRitual(P){o("ritual-finished"),hi.visible=!0,P||Ue(Ye([-5.37,1.77,0]),!0);const se=fe.getWorldPosition(new D);ve(3,me=>{hi.position.x=-5.55+Math.sin(me*Math.PI)*.28,P?(ue.visible=!0,ue.scale.y=Math.max(.01,fn(me)),ue.position.y=Ce.y+(1-fn(me))*1.18):(fe.position.lerpVectors(se,Ye([-5.82,1.8,0]),fn(me)),fe.scale.setScalar(1-me*.8))},()=>{hi.visible=!1,P&&(Ie.visible=!1),W.visible=!1,fe.visible=!1,di.ritualView&&ge(di.ritualView),o(P&&!i.admitted?"sealed":"admitted")})},answerWall(){j("reply-cough")&&(r.playVoice("wan-answer"),i.coughReplies===3&&(O=.43,r.effect?.("chair",1.6)))},callFather(){j("call-father")&&(r.playVoice("wan-father"),O=.43,o("admitted"))},breakWall(){if(!j("break-wall"))return;const P=[];Ie.traverse(se=>{/^Wall.brick./.test(se.name)&&P.push({object:se,position:se.position.clone()})}),r.effect?.("breaker",2),ve(3,se=>{P.forEach(({object:me,position:lt},Re)=>{me.position.copy(lt),me.position.x+=se*(.3+Re%4*.12),me.position.y-=se*se*(.5+Re%5*.14),me.rotation.z=se*(Re%3-1)})},()=>o("ending","wall"))},bathSwitch(){G=!0,un.visible=!1,i.mirrorEncounter="escaped",r.effect?.("breaker",.25),o("bath-light-off")},checkpointClues(){Xa()},setTapePlaying(P){Te=P},uncoverTape(P){if(i.discovered.includes("tape-found"))return P();const se=Ne.position.clone(),me=ie();ve(1.8,lt=>{Ne.position.lerpVectors(se,je,fn(lt)),de(me.position,Ne.position)},()=>{Dt(i,"tape-found"),Ne.userData.prompt="播放九岁生日磁带",ge(me),P()})},restoreCheckpoint(){T=null,i.holding=!1,i.mirrorGaze=0,i.discovered.includes("tape")&&Ne.position.copy(je);for(const[P,se]of Object.entries({scraper:Ae,alcohol:Ke,medicine:Qe}))se.visible=!i.tools.includes(P);L=i.discovered.includes("mirror"),A=L?-10:null,z.forEach(P=>{P.visible=L,P.material.opacity=L?1:0}),ue.visible=!i.wallOpen||i.ritualComplete,ue.scale.y=1,ue.position.copy(Ce),Ie.visible=i.wallOpen&&!i.ritualComplete,kt.visible=i.wallOpen,Fs.forEach(P=>{P.visible=i.sealDrawn&&!i.ritualComplete}),Ue(it),fe.visible=!i.ritualComplete&&i.ritual!=="given",R&&(R.visible=i.bowl==="served"||i.bowl==="table"),at.visible=i.admitted||i.discovered.includes("wash-echo")&&!i.discovered.includes("phone-dropped"),dt.visible=i.discovered.includes("phone-dropped")&&!i.discovered.includes("phone-recovered"),We=dt.visible?.8:null,dt.position.y=.594,dt.rotation.y=.25,x=i.discovered.includes("peephole"),be.forEach(P=>{P.visible=x}),Ns.rotation.y=i.neighborMet?-.62:0,E.visible=H.visible=i.neighborMet,q.visible=i.dumplings==="kept",q.visible&&(q.position.set(2.3,1.385,3.64),q.userData.prompt="吃一只饺子"),B=!0,G=!0,i.mirrorEncounter="escaped",de(Ye([.05,1.65,2.5]),Ye([.05,1.55,4.2])),l()},prepareEnding(P){V={type:P,time:0},T=null,W.visible=!1,fe.visible=!0,Ue(it),t.fov=67,t.updateProjectionMatrix(),fe.scale.setScalar(1),un.visible=!1,cn.visible=!1,oe.visible=!1,r.setWater?.(!1);const se=[];if(P==="seat"||P==="empty"){const me=Ci(h,"Mother at the table",{woman:!0,seated:!0,color:6448727});me.position.set(.39,0,.25),me.rotation.y=Math.PI/2,se.push(me)}if(P==="seat"){const me=Ci(h,"Father at the table",{seated:!0,color:3160891});me.position.set(1.55,0,-.57),se.push(me),at.visible=!0,se.push(at),R&&(R.visible=!0)}else at.visible=!1;V.people=se;for(const me of se){const lt=me.userData.rig.arms[1].forearm;for(const Re of[-1,1])Sn(lt,"Breakfast chopstick",[[Re*.012,-.255,.03],[Re*.017,-.4,.2]],.004,f)}if(P==="two"){fe.visible=!1,be.forEach(lt=>{lt.visible=!1}),ue.visible=!0,ue.scale.y=1,ue.position.copy(Ce),Ie.visible=!1,xo.visible=!1;const me=new Xe(new cu(.09,.112,48),new gt({color:6313273,transparent:!0,opacity:.55,roughness:.95,side:Rn}));me.rotation.x=-Math.PI/2,me.position.copy(it),me.position.y=.79,h.add(me)}P==="two"?(en.visible=!0,de(Ye([24.45,1.65,1.05]),Ye([22.5,1.15,-1.2])),l()):P!=="wall"&&de(Ye([3.94,1.47,2.72]),Ye([1.65,1,.05])),r.finishNight?.(P),P==="two"&&r.playVoice("community-call",{delay:1.5}),P==="seat"&&(r.knock(),r.playVoice("wang-breakfast",{delay:1.2})),P==="empty"&&r.playSequence(["mother-empty","mother-eat"],{delay:1,gap:3}),P==="wall"&&r.playVoice("mother-full",{delay:1})},update(P,se,me=!0){if(w||(Wa[0].rotation.z=-(se%720)/720*Math.PI*2,Wa[1].rotation.z=-(se%60)/60*Math.PI*2,!me))return;if(v+=P,S.update(v),Dn.update(v),X.update(v),Te)for(const Re of st)Re.rotation.y+=P*2.6;if(Rf.visible=i.letter&&i.ritual==="idle",Cf.visible=!i.wallOpen,S.mesh.visible=!!R?.visible&&!["washing","clean","inverted","held-inverted"].includes(i.bowl),fe.userData.prompt=i.bowl==="clean"?"把洗净的碗倒扣":i.bowl==="inverted"?"拿起倒扣的碗":"拿起第三副碗",T){const Re=T;if(Re.time+=P,Re.update(Math.min(1,Re.time/Re.duration)),Re.time>=Re.duration&&T===Re){T=null,Re.complete();for(const{object:bt}of Ps)bt.shadow&&(bt.shadow.needsUpdate=!0);o("changed")}}if(A!==null&&!L){const Re=v-A;z.forEach((bt,xn)=>{bt.material.opacity=Ht.smoothstep(Re,xn*.9+.25,xn*.9+1.6)}),Re>5.2&&(L=!0,Dt(i,"mirror"),o("mirror-complete"),Xa())}A===null&&i.discovered.includes("note")&&i.discovered.includes("table")&&Dr(Ye([3.83,1.9,-6.87]),.86,2.7)&&di.mirror();const lt=Ht.damp(I,O,2,P);if(C&&Math.abs(lt-I)>1e-4&&(I=lt,C.position.x=$.x+I,l()),Tu(),!V&&at.visible&&m1(i,t.position,at.position,{x:-1,z:0},Dr(at.position.clone().add(Ye([0,1.2,0])),.72,3.5))&&(at.visible=!1,Dt(i,"phone-dropped"),dt.visible=!0,We=0,dt.position.y=1.05,r.effect("cloth",.55),o("changed")),We!==null&&We<.8){We+=P;const Re=Math.min(1,We/.8);dt.position.y=.594+(1-Re*Re)*.456,dt.rotation.y=Re*.25,Re===1&&r.effect("chair",.12)}if(i.discovered.includes("rules")&&!i.wallOpen&&v>le&&!T&&(le=v+25+Math.sin(v)*6,r.effect?.("cough",1.1,-.6)),U=Ht.damp(U,i.powerOut?1:0,2.4,P),i.powerOut){for(const{object:Re,base:bt}of Ps)Re.intensity=bt*(1-U);Gi.intensity=2.7*U,Is.intensity=1.1}for(const{object:Re,base:bt}of Vi){const xn=/Bathroom/.test(Re.name);Re.material.emissiveIntensity=bt*(xn&&B?G?0:1:1-U)}if(B&&qn&&(qn.intensity=G?0:Cs),i.letter&&!B&&t.position.x>2.6&&t.position.x<5.3&&t.position.z<-3.4&&(B=!0,un.visible=!0,i.mirrorEncounter="active",r.playVoice("father-sit")),B&&!G&&!K&&i.mirrorEncounter==="active"){un.userData.rig.mouth.scale.y=1+Math.max(0,Math.sin(v*5))*5;const Re=Ye([3.83,1.64,-8.97]);c1(i,P,Dr(Re,.997,6))&&o("admitted"),Dr(un.position.clone().add(Ye([0,1.5,0])),.73,4)&&(K={time:0,step:0},i.mirrorEncounter="chase",o("mirror-chase")),t.position.z>-3.1&&(i.mirrorEncounter="escaped",un.visible=!1)}if(K){K.time+=P;const Re=Math.floor(K.time/2.4);if(Re>K.step){K.step=Re,Se.copy(t.position).sub(un.position),Se.y=0;const bt=Se.length();bt>.9&&un.position.add(Se.normalize().multiplyScalar(Math.min(1,bt-.8))),r.effect?.("breaker",.16)}qn&&(qn.intensity=K.time%2.4<.14?0:Cs),t.position.z>-2.2&&K.time>2?(K=null,un.visible=!1,i.mirrorEncounter="escaped"):(K.time>=20||un.position.distanceTo(Ye([t.position.x,0,t.position.z]))<.62)&&(K=null,o("ending","seat"))}if(B&&qn)for(const{object:Re,base:bt}of Vi)/Bathroom/.test(Re.name)&&(Re.material.emissiveIntensity=bt*Ht.clamp(qn.intensity/Cs,0,1));for(let Re=0;Re<He.length;Re++){const bt=He[Re];if(bt.visible=k,k){const xn=(v*1.7+Re*.137)%1;bt.position.set(7.45+Math.sin(Re*2.4)*xn*.1,.99+Math.sin(xn*Math.PI)*.1,-2.31+Math.cos(Re*2.4)*xn*.08)}}if(oe.scale.x=oe.scale.z=1+Math.sin(v*39)*.15,l1(i,P)&&di.finishRitual(!0),i.ritual==="ready"&&(hi.position.x=-5.55+i.holdSeconds/wa*.33,W.position.x=.17+Math.sin(v*35)*.008,o("ritual-progress",i.holdSeconds/wa)),V){if(V.time+=P,V.type==="two"&&V.time>=18&&!V.tableShot&&(V.tableShot=!0,en.visible=!1,de(Ye([3.94,1.47,2.72]),Ye([1.65,1,.05]))),V.type!=="wall"){e.background.set(3686201);for(const{object:Re,base:bt}of Ps)Re.intensity=bt*.85;Gi.intensity=0;for(const{object:Re,base:bt}of Vi)Re.material.emissiveIntensity=bt*.85;for(const Re of V.people)for(const bt of Re.userData.rig.arms)bt.forearm.rotation.x=-1.04+Math.sin(V.time*1.3)*.22;V.type==="seat"&&(at.userData.rig.head.rotation.y=(1-Ht.smoothstep(V.time,4,11))*2.01),V.type==="empty"&&(fe.position.x=it.x+Math.sin(V.time*2.3)*.018,fe.rotation.z=Math.sin(V.time*1.8)*.05)}V.time>(V.type==="two"?26:18)&&!V.shown&&(V.shown=!0,o("ending-title"))}if(Math.floor(v*8)!==di.tvFrame){if(di.tvFrame=Math.floor(v*8),i.powerOut){const Re=Qt.createImageData(128,96);for(let bt=0;bt<Re.data.length;bt+=4){const xn=Math.random()*100+50;Re.data[bt]=xn*.85,Re.data[bt+1]=xn,Re.data[bt+2]=xn*.92,Re.data[bt+3]=255}Qt.putImageData(Re,0,0)}else{Qt.fillStyle="#131714",Qt.fillRect(0,0,128,96),Qt.fillStyle="#754e31",Qt.fillRect(8,10,112,72),Qt.fillStyle="#273b3e",Qt.fillRect(17,20,94,62);for(let Re=0;Re<7;Re++)Qt.fillStyle=Re%2?"#bba873":"#8e3030",Qt.beginPath(),Qt.ellipse(23+Re*14,58+Math.sin(v+Re)*2,5,17,Math.sin(v)*.08,0,7),Qt.fill();Qt.fillStyle="#a29965",Qt.font="9px serif",Qt.fillText("欢 度 春 节",36,17)}for(let Re=0;Re<96;Re+=3)Qt.fillStyle="#00000035",Qt.fillRect(0,Re,128,1);Lr.needsUpdate=!0}Nf()},rehearsal(P){for(const se of["entered","note","table"])Dt(i,se);if(P==="mirror"){de(Ye([3.83,1.65,-5]),Ye([3.83,1.9,-6.87]));return}if(P==="peephole"){de(Ye([.05,1.65,3.3]),Ye([.05,1.65,4.2]));return}if(P==="neighbor"){de(Ye([.1,1.65,6.4]),Ye([.1,1.6,7.91]));return}if(P==="bedroom"){de(Ye([-.4,1.65,-4.6]),Ye([-.1,.88,-6.2]));return}if(P==="tape"){de(Ye([-4.3,1.65,-3.8]),Ye([-4.5,.16,-4.91]));return}for(const se of["mirror","rules","tape","household","messages","neighbor","balcony"])Dt(i,se);if(i.messages=[0,1,2],i.tools=["scraper","alcohol","medicine"],i.powerOut=!0,i.neighborMet=!0,P==="outage"){i.tools=[],de(Ye([7.8,1.65,-.9]),Ye([8.6,1.25,-2.4])),o("blackout");return}if(i.wallLocated=i.pipeHeard=!0,P==="hidden"){i.deniedThird=!0;return}if(P==="wall"){de(Ye([-4.2,1.65,.4]),Ye([-5.7,1.6,0]));return}if(i.wallOpen=!0,i.letter=!0,ue.visible=!1,Ie.visible=!0,kt.visible=!0,P==="bath"){de(Ye([3.83,1.65,-5.7]),Ye([3.83,1.85,-6.87]));return}if(i.bowlTouched=!0,P==="wash"){i.bowl="held-dirty",Me(),de(Ye([7.44,1.65,-1]),Ye([7.45,1.1,-2.31]));return}i.bowl="held-inverted",R&&(R.visible=!1),Me(),de(Ye([-4.35,1.65,.3]),Ye([-5.7,1.55,0])),P==="ritual"&&(i.sealDrawn=!0,Fs.forEach(se=>{se.visible=!0}))}};return di}function _1(s){return s.x>=-6.12||s.z<=5||s.z>=7.4?0:-Math.min(16,Math.floor((-6.12-s.x)/.3)+1)*.17}function v1(s,e,t,n=!0){return n?t?(s.seconds+=e,s.seconds<1.3||s.triggered?!1:(s.triggered=!0,!0)):(s.seconds=0,s.triggered=!1,!1):!1}function x1({world:s,camera:e,story:t,sound:n,changed:i,emit:r}){const o=new Ze;o.name="EVENT_ESCAPE_ROUTE",s.add(o);const a=O=>s.getObjectByName(O)||s.getObjectByName(Tt.sanitizeNodeName(O)),l=[];s.traverse(O=>{/^(Stair|Handrail|Service.door|LIGHT_STAIR)/.test(O.name)&&!O.name.startsWith("EVENT_")&&(l.push(O),O.userData.story_dynamic=!0,O.visible=!1)});const c=O=>{let z;return s.traverse(te=>{!z&&te.isMesh&&O.test(te.name)&&!Array.isArray(te.material)&&(z=te.material)}),z?.clone()||new gt({color:5464409,roughness:.95})},u=c(/Hall.west.upper/),h=c(/Hall.floor/),d=new gt({color:3361857,roughness:.92}),f=new gt({color:3555127,roughness:.71,metalness:.4}),g=new gt({color:922900,roughness:.96}),_=new gt({color:12899765,emissive:7839369,emissiveIntensity:.2}),m=(O,z,te,ae)=>{const we=re(o,O,z,te,ae);return we.userData.collider=!0,we},p=a("INT_BUILDING_EXIT");delete p.userData.interaction;const M=ha(s,"STAIR_ENTRY",[p],new D(-5.92,0,7));M.userData.interaction="stair_entry",M.userData.prompt="推开楼梯间的门",M.userData.hintAnchor=[0,1.4,-.82];let y=0,v=0,T=0,w=0,A=0,L=null,b=!1;const x={seconds:0,triggered:!1},N=-6.12,U=-2.72,k=6.18;for(let O=0;O<16;O++){const z=N-.15-O*.3,te=-(O+1)*.17;re(o,`Fourth floor step ${O}`,[.3,.17,1.96],[z,te-.085,k],h),re(o,`Worn step edge ${O}`,[.025,.015,1.96],[z+.14,te+.006,k],d)}re(o,"Fourth floor landing",[1.66,.12,1.96],[-11.75,U-.06,k],h);for(const O of[5.11,7.25]){O===5.11?m("Enclosed descending stair wall",[6.5,5.9,.16],[-9.35,.22,O],u):(m("Descending wall above 4F opening",[6.5,3.04,.16],[-9.35,1.65,O],u),m("Descending wall east of opening",[4.84,2.9,.16],[-8.52,-1.3,O],u),m("Descending wall west of opening",[.4,2.9,.16],[-12.4,-1.3,O],u));const z=[[-6.08,1.04,O===5.11?5.24:7.12],[-10.97,-1.68,O===5.11?5.24:7.12]];O===5.11&&z.push([-12.1,-1.68,5.24]),Sn(o,"Descending stair rail",z,.027,f)}re(o,"Stair ceiling",[6.7,.14,2.3],[-9.37,3.04,k],u);const Y=new Wt(9547679,3.3,8,2);Y.position.set(-8.4,1.6,k),o.add(Y),re(o,"Stair old fluorescent",[.68,.035,.07],[-8.4,1.78,k],_);const B=new Ze;B.name="EVENT_FOURTH_FLOOR_FIRE_DOOR",B.position.set(-12.5,U,7),o.add(B);const G=re(B,"Extra fire door leaf",[.09,2.45,1.64],[0,1.225,-.82],f);G.userData.collider=!0,B.userData.interaction="fire_door",B.userData.prompt="推开多出来的防火门",B.userData.hintAnchor=[0,1.4,-.82],re(B,"Old fire door push bar",[.13,.045,1.07],[.08,1.03,-.82],f),m("Fire door lintel",[.2,.58,2.14],[-12.5,U+2.74,k],u);for(const O of[5.29,7.07])m("Fire door steel frame",[.2,2.49,.15],[-12.5,U+1.245,O],f);const K=da(o,{radius:.035,height:.65,count:12});K.mesh.position.set(-12.42,U+.06,6.3);const V=new Wt(13080930,.35,2.4,2);V.position.set(-12.35,U+.3,6.3),o.add(V);const le=[],he=[],Te=new co().load(new URL("./story/corridor-photos.png",document.baseURI).href);Te.colorSpace=It;const Ne=Array.from({length:6},(O,z)=>{const te=Te.clone();return te.repeat.set(1/3,.5),te.offset.set(z%3/3,z<3?.5:0),new gt({map:te,color:12105372,roughness:.92})});let je=-12.57;function st(){const O=je,z=O-6,te=(O+z)/2,ae=A++;re(o,"Impossible corridor floor",[6,.12,1.96],[te,U-.06,k],h),re(o,"Impossible corridor ceiling",[6,.12,2.15],[te,U+3.05,k],u);for(const fe of[5.11,7.25]){m("Impossible corridor wall",[6,3.04,.16],[te,U+1.52,fe],u),re(o,"Corridor green dado",[6,1.2,.025],[te,U+.6,fe===5.11?5.2:7.16],d);for(let it=0;it<3;it++){const R=new Ze;R.name=`EVENT_COUNTED_PHOTO_${ae}_${it}_${fe}`,R.position.set(O-1-it*1.75,U+1.66,fe===5.11?5.22:7.14),R.rotation.y=fe===5.11?0:Math.PI,o.add(R),re(R,"Family frame",[.68,.52,.045],[0,0,0],f),gn(R,"Yellowed family photograph",.59,.43,[0,0,.027],Ne[Math.min(5,ae*3+it)]),le.push(R)}}const we=new Wt(8952451,2.4,7,2);we.position.set(te,U+2.65,k),o.add(we),he.push(we),re(o,"Corridor slow lamp",[.44,.035,.09],[te,U+2.75,k],_),je=z}for(let O=0;O<3;O++)st();const Se=new Ze;Se.name="EVENT_REAL_BUILDING_EXIT",o.add(Se);const J=re(Se,"Ground exit door leaf",[.11,2.6,1.94],[0,1.3,0],f);J.userData.collider=!0,Se.userData.interaction="building_exit",Se.userData.prompt="推开单元门",Se.userData.hintAnchor=[0,1.4,0];const ie=new Wt(11256496,1.2,3,2);ie.position.set(.2,2.3,0),Se.add(ie);const ge=()=>Se.position.set(je+.02,U,k);ge();const de=new Ze;de.name="EVENT_OUTSIDE_COURTYARD",o.add(de);const ve=new gt({color:2634545,roughness:.36,metalness:.12});re(de,"Courtyard wet pavement",[22,.12,17],[0,-.06,24.5],ve);const j=re(de,"Five storey building facade",[18,17,.4],[0,8.5,16.5],u);j.userData.collider=!0;for(let O=0;O<5;O++)for(let z=0;z<5;z++){const te=re(de,"Dark apartment window",[1.25,1.65,.08],[-6+z*3,2+O*3,16.76],g);if(re(de,"Weathered window sill",[1.43,.09,.23],[-6+z*3,1.14+O*3,16.84],f),O===4&&z===3){te.material=new Ft({color:10258773});for(let ae=0;ae<3;ae++){const we=Ci(de,`Window silhouette ${ae}`,{woman:ae!==1,color:1054230});we.position.set(2.58+ae*.42,13.2,16.84),we.scale.setScalar(.75),ae===2&&(de.userData.waving=we)}}}const be=new Wt(9743794,105,35,2);be.position.set(-4,9,24),de.add(be);for(const O of[-10.5,10.5]){const z=re(de,"Courtyard boundary",[.3,3,17],[O,1.5,24.5],u);z.userData.collider=!0}const C=re(de,"Courtyard boundary",[22,3,.3],[0,1.5,32.8],u);C.userData.collider=!0,de.visible=!1;const $=new Wd,I=new D;return{targets:[M,B,Se],photos:le,get outside(){return!!L},floorAt:_1,openEntry(){y=1,p.userData.open=!0,n.effect("chair",.6),i()},openFire(O){if(!O&&!Ic(t,{outside:!0,atMidnight:!0})){r("hint","门缝里的气是热的。门推不开。");return}v=1,G.userData.open=!0,K.mesh.visible=!1,n.effect("chair",.9),i()},available(O){return O==="stair_entry"?y===0:O==="fire_door"?v===0:!0},leave({beforeMidnight:O,lookedBack:z}){if(L)return!1;const te=Ic(t,{outside:!0,atMidnight:!0}),ae=u1(t,{beforeMidnight:O,lookedBack:z});return!ae&&!te?(r("hint","封还没有完成。"),!1):(L={time:0,type:ae,hidden:!ae&&te,midnight:!1},de.visible=!0,e.position.set(0,1.65,29),e.fov=55,e.updateProjectionMatrix(),e.lookAt(2,9.4,16.5),r("outside",L.hidden),n.finishNight("two"),!0)},setArtMode(O){b=!!O,o.visible=!b,M.visible=!b,l.forEach(z=>{z.visible=b})},update(O,z,te){if(!z||b)return;T+=O,K.update(T),Y.visible=e.position.distanceTo(Y.position)<10,V.visible=e.position.distanceTo(V.position)<5;for(const fe of he)fe.visible=e.position.distanceTo(fe.position)<8;const ae=M.rotation.y,we=B.rotation.y;if(M.rotation.y=Ht.damp(ae,-y*1.45,3,O),B.rotation.y=Ht.damp(we,-v*1.45,2.2,O),(Math.abs(ae-M.rotation.y)>5e-4||Math.abs(we-B.rotation.y)>5e-4)&&i(),te&&e.position.x<-13&&e.position.z>5&&e.position.z<7.4){e.getWorldDirection(I),$.set(e.position,I),$.far=3.5;const fe=$.intersectObjects(le,!0).length>0;v1(x,O,fe)&&A<6&&(st(),ge(),i(),w=1,n.effect("breath",1.5),r("corridor-extended")),I.x>.65&&r("looked-back")}w=Math.max(0,w-O*.6);for(const fe of he)fe.intensity=2.4*(1-w*.55);if(L){L.time+=O;const fe=de.userData.waving;if(fe){const it=fe.userData.rig.arms[1];it.arm.rotation.z=-1.7,it.forearm.rotation.z=Math.sin(T*1.7)*.3}L.hidden&&!L.midnight&&L.time>13&&(L.midnight=!0,r("midnight")),!L.hidden&&L.time>9&&!L.done&&(L.done=!0,r("ending",L.type))}},rehearsal(){y=1,v=1,M.rotation.y=-1.45,B.rotation.y=-1.45,p.userData.open=G.userData.open=!0,e.position.set(-13.8,U+1.65,k),e.lookAt(-20,U+1.65,k),r("view"),i()}}}const af=1,lf="third-place-2350-v1";function cf(s,e){return!["seal","admit"].includes(e)||e==="seal"&&!s.ritualComplete||e==="admit"&&!s.admitted?null:{version:af,choice:e,story:structuredClone(s)}}function M1(s){try{const e=JSON.parse(s);if(e?.version!==af||!e.story)return null;const t=of();for(const[i,r]of Object.entries(rf))i in e.story||(e.story[i]=r);e.story.wallOpen&&(e.story.wallLocated=e.story.pipeHeard=!0);for(const[i,r]of Object.entries(t)){const o=e.story[i];if(Array.isArray(r)){if(!Array.isArray(o)||o.length>40||o.some(a=>!["string","number"].includes(typeof a)))return null}else{if(r===null?o!==null:typeof o!=typeof r)return null;if(typeof o=="number"&&!Number.isFinite(o))return null}}if(!["table","held-dirty","clean","inverted","held-inverted","served","offered"].includes(e.story.bowl)||e.story.battery<3||e.story.battery>100||!Number.isInteger(e.story.housePhase)||e.story.housePhase<0||e.story.housePhase>2||["outageSeconds","pipeSeconds","wallListenSeconds","breathSeconds"].some(i=>e.story[i]<0))return null;const n=Object.fromEntries(Object.keys(t).map(i=>[i,e.story[i]]));return cf(n,e.choice)}catch{return null}}const mt=-10.88,uf=Object.freeze([{from:-12.52,to:-7.56,z:10,floor:mt},{from:-7.56,to:-12.52,z:12.35,floor:-8.16},{from:-12.52,to:-7.56,z:10,floor:-5.44}]);function y1(s){const{x:e,z:t,y:n=mt+1.65}=s;if(t>13.48&&e>-20&&e<15&&t<36)return mt;const i=[];e>=-14&&e<=-12.5&&t>=9&&t<=13.65&&i.push(mt,-5.44),e>=-7.58&&e<=-5.8&&t>=8.1&&t<=13.45&&i.push(-8.16,-2.72),e>=-12.55&&e<=-5.8&&t>7.12&&t<=9.08&&i.push(-2.72);for(const r of uf){if(e<-12.54||e>-7.54||Math.abs(t-r.z)>.92)continue;const o=Math.max(0,Math.min(1,(e-r.from)/(r.to-r.from)));i.push(r.floor+Math.ceil(o*16)*.17)}return i.length?i.reduce((r,o)=>Math.abs(o-(n-1.65))<Math.abs(r-(n-1.65))?o:r):null}function b1(s,e,t,n=!0){return n&&(t&&s.delay===null&&s.on<=0&&(s.delay=.55),s.delay!==null&&(s.delay-=e,s.delay<=0&&(s.delay=null,s.on=14)),s.on>0&&(s.on=t?14:Math.max(0,s.on-e))),s}const jn=s=>new D(...s),ea=s=>s*s*(3-2*s);function S1({world:s,camera:e,story:t,sound:n,emit:i,changed:r}){const o=new Ze;o.name="EVENT_HOMECOMING",s.add(o);const a=[],l=[],c=[],u=[],h=($,I)=>{let O;return s.traverse(z=>{!O&&z.isMesh&&$.test(z.name)&&!Array.isArray(z.material)&&(O=z.material)}),O?Nc(O):new gt({color:I,roughness:.93})},d=h(/Hall.west.upper/,5004113),f=h(/Hall.floor/,4278850),g=new gt({color:3558464,roughness:.91}),_=new gt({color:3424060,roughness:.52,metalness:.56}),m=new gt({color:1186331,roughness:.87}),p=new gt({color:10988192,roughness:.87}),M=($,I,O,z=d)=>{const te=re(o,$,I,O,z);return te.userData.collider=!0,te},y=($,I,O)=>(mn($),$.userData.interaction=I,$.userData.prompt=O,a.push($),$),v=($,I,O,z,te=0)=>{const ae=os((fe,it,R)=>{fe.fillStyle="#253e34",fe.fillRect(0,0,it,R),fe.strokeStyle="#9bada0",fe.lineWidth=7,fe.strokeRect(12,12,it-24,R-24),fe.fillStyle="#c6d0bd",fe.font='76px "Songti SC",serif',fe.textAlign="center",fe.textBaseline="middle",fe.fillText($,it/2,R/2)},512,192),we=gn(o,`Building sign ${$}`,I,O,z,new gt({map:ae,roughness:.9}));return we.rotation.y=te,we};function T($,I,O,z){const te=new gt({color:8558728,emissive:11585701,emissiveIntensity:0}),ae=mn(re(o,`EVENT_LANDING_BULB_${z}`,[.55,.045,.12],[I,$+2.28,O],te)),we=new Wt(11518624,0,6.2,2);we.position.set(I,$+2.12,O),o.add(we),l.push({light:we,bulb:ae,floor:$,delay:null,on:0,sounded:!1})}for(const[$,I]of uf.entries()){const O=Math.sign(I.to-I.from);for(let z=0;z<16;z++){const te=I.from+O*(z+.5)*.31,ae=I.floor+(z+1)*.17;re(o,`Arrival stair ${$}-${z}`,[.31,.17,1.8],[te,ae-.085,I.z],f),re(o,"Worn concrete nosing",[.023,.014,1.8],[te-O*.144,ae+.008,I.z],p)}for(const z of[I.z-.89,I.z+.89]){const te=Sn(o,"Stair steel handrail",[[I.from,I.floor+.98,z],[I.to,I.floor+3.7,z]],.031,_);te.userData.collider=!0;for(const ae of[.08,.38,.68,.94])Sn(o,"Railing upright",[[I.from+(I.to-I.from)*ae,I.floor+2.72*ae,z],[I.from+(I.to-I.from)*ae,I.floor+2.72*ae+.98,z]],.019,_)}}for(const[$,I]of[[mt,-13.25],[-8.16,-6.67],[-5.44,-13.25],[-2.72,-6.67]]){re(o,"Stair turning landing",[1.5,.14,4.38],[I,$-.07,11.32],f),T($,I,11.55,Math.round(($-mt)/2.72)+1);const O=`${Math.round(($-mt)/2.72)+1} 楼`;v(O,.69,.26,[I<-10?-13.96:-5.84,$+1.85,11.32],I<-10?Math.PI/2:-Math.PI/2),$<-2.73&&M("Lower landing front guard",[1.5,1,.1],[I,$+.5,9.1],_)}re(o,"Fourth floor connecting landing",[6.76,.14,1.86],[-9.17,-2.79,8.15],f),M("Lower stair east wall",[.15,11.15,4.58],[-5.73,-5.37,11.15]),M("Lower stair west wall",[.15,11.15,4.58],[-14.08,-5.37,11.15]),M("Stair inner dividing wall",[4.92,10.98,.12],[-10.04,-5.37,11.18]),M("North stair flights enclosure",[5.02,11.1,.13],[-10.04,-5.35,9.025]),M("Fourth landing guard east",[4.95,1,.1],[-8.26,-2.22,7.31],_),M("Fourth landing guard west",[.4,1,.1],[-12.33,-2.22,7.31],_),M("Fourth landing west edge",[.12,3,1.86],[-12.62,-1.22,8.2]),M("South stair enclosure",[8.25,10.9,.16],[-9.9,-2.43,13.56]),M("Ground entrance header",[1.64,.57,.2],[-13.22,mt+2.83,13.56]);for(const $ of[-14.01,-12.41])M("Ground entrance frame",[.13,2.58,.2],[$,mt+1.29,13.56],_);const w=new Ze;w.name="EVENT_GROUND_ENTRY",w.position.set(-14,mt,13.59),o.add(w);const A=re(w,"Unit door steel leaf",[1.45,2.48,.07],[.725,1.24,0],_);A.userData.collider=!0,re(w,"Unit door push plate",[.035,.43,.055],[1.19,1.16,.07],p),y(w,"arrival_entry","推开没上锁的单元门"),w.userData.hintAnchor=[.75,1.3,.06],v("5 栋",1.08,.4,[-13.23,mt+3.31,13.71]),v("501 / 502 ↑",.93,.34,[-6.62,-.95,9.1]),v("5 楼",.7,.29,[-6,1.8,5.12]),T(0,-6.6,6.18,5);const L=new gt({color:2505531,roughness:.38,metalness:.18});re(o,"Wet residential forecourt",[32,.16,21],[-2.5,mt-.08,24],L),M("Apartment front facade",[22.6,14.35,.3],[-1.07,mt+7.175,13.63]);for(let $=0;$<5;$++)for(let I=0;I<7;I++){const O=-10.5+I*3.1,z=mt+1.73+$*2.72,te=($+I)%5===2;re(o,"Recessed residential window",[1.38,1.62,.06],[O,z,13.81],m),re(o,"Old residential window glass",[1.23,1.44,.028],[O,z,13.852],new gt({color:te?8616278:1716278,emissive:te?7036985:726040,emissiveIntensity:te?.48:.1,roughness:.47})),re(o,"Window central mullion",[.05,1.46,.05],[O,z,13.88],_),re(o,"Old balcony sill",[1.62,.11,.38],[O,z-.88,13.96],d)}for(const $ of[-18.3,12.8])M("Forecourt boundary",[.2,3,21],[$,mt+1.5,24]);M("Parking back boundary",[31,.9,.3],[-2.5,mt+.45,34.4],g);for(let $=0;$<4;$++){const I=-15.4+$*7.9;Sn(o,"Streetlamp post",[[I,mt,19.6],[I,mt+4.1,19.6],[I+.55,mt+4.1,19.6]],.049,_);const O=new gt({color:12764321,emissive:12109978,emissiveIntensity:$%2?0:1.2});if(re(o,"Streetlamp cover",[.47,.08,.21],[I+.55,mt+4.08,19.6],O),$%2===0){const z=new Wt(11978662,24,12,2);z.position.set(I+.55,mt+3.9,19.6),o.add(z),c.push(z)}}const b=new Wt(7839664,45,30,2);b.position.set(-9,mt+8,26),o.add(b),c.push(b);for(let $=0;$<7;$++){re(o,"Faded parking stripe",[.05,.006,4.7],[-15+$*3.7,mt+.005,27.2],p);const I=new Ze;I.position.set(-10+$*.58,mt,14.7),I.rotation.y=.2,o.add(I);for(const O of[-.47,.47]){const z=new Xe(new Sa(.26,.026,6,20),m);z.rotation.y=Math.PI/2,z.position.set(0,.28,O),I.add(z)}Sn(I,"Bicycle frame",[[0,.28,-.47],[0,.64,0],[0,.28,.47],[0,.32,-.12],[0,.28,-.47]],.018,_),re(I,"Bicycle seat",[.18,.05,.25],[0,.69,-.06],m)}const x=new Ze;x.name="EVENT_ARRIVAL_CAR",x.position.set(-10,mt,25),o.add(x);const N=new gt({color:2309699,roughness:.32,metalness:.5});re(x,"Car lower body",[1.75,.57,3.6],[0,.59,0],N).userData.collider=!0,re(x,"Car bonnet",[1.68,.14,1.07],[0,.97,-1.2],N),re(x,"Car dashboard",[1.6,.28,.55],[0,.96,-.57],m),re(x,"Car interior floor",[1.65,.08,1.9],[0,.4,.27],m),re(x,"Car roof",[1.75,.1,1.86],[0,1.79,.22],N);for(const $ of[-.83,.83])for(const I of[-.69,1.12]){const O=re(x,"Car roof pillar",[.065,.81,.07],[$,1.35,I],N);O.rotation.x=I<0?-.2:.16}for(const $ of[-.48,.48])re(x,"Car seat cushion",[.62,.2,.7],[$,.62,.43],m),re(x,"Car seat back",[.62,.73,.16],[$,.97,.87],m),re(x,"Car headrest",[.42,.23,.12],[$,1.43,.9],m);const U=new Xe(new Sa(.23,.026,8,32),m);U.position.set(-.46,1.1,-.39),U.rotation.x=-.2,x.add(U);for(const $ of[-.88,.88])for(const I of[-1.17,1.2]){const O=new Xe(new ri(.3,.3,.17,20),m);O.rotation.z=Math.PI/2,O.position.set($,.31,I),x.add(O)}const k=os(($,I,O)=>{$.fillStyle="#142a29",$.fillRect(0,0,I,O),$.fillStyle="#92b9a5",$.font="24px monospace",$.fillText("FM  98.4",25,42),$.font="18px serif",$.fillText("台风预警",25,76)},256,96);gn(x,"Dashboard radio display",.3,.12,[.12,1.06,-.278],new Ft({map:k}));const Y=new Wt(8564132,.27,2,2);Y.position.set(0,1.21,-.2),x.add(Y),u.push(Y);const B=new Ze;B.name="EVENT_CAR_DRIVER_DOOR",B.position.set(-.86,.45,-.59),x.add(B),re(B,"Driver door lower",[.065,.55,1.65],[0,.24,.82],N),re(B,"Driver interior handle",[.05,.06,.2],[.07,.58,.43],p),y(B,"arrival_car_exit","打开车门，下车"),B.userData.hintAnchor=[.06,.59,.4];const G=[];for(const $ of[-.39,.37]){const I=new Ze;I.position.set($,1.1,-.82),x.add(I),Sn(I,"Windshield wiper",[[0,0,0],[.18,.48,-.06]],.014,m),G.push(I)}const K=y(re(x,"Lin Wan phone on console",[.145,.022,.27],[.03,.97,-.1],m),"arrival_phone","拿起手机，听妈妈的留言"),V=os(($,I,O)=>{$.fillStyle="#17312c",$.fillRect(0,0,I,O),$.fillStyle="#d2ddd0",$.textAlign="center",$.font="38px serif",$.fillText("妈妈",I/2,100),$.font="22px sans-serif",$.fillText("22:17  留言",I/2,174),$.fillText("00:09",I/2,222),$.fillText("▶",I/2,320)},256,448),le=gn(K,"Opening phone screen",.132,.245,[0,.013,0],new Ft({map:V}));le.rotation.x=-Math.PI/2;const he=new Ze;he.name="EVENT_OPENING_PHONE_GRIP",e.add(he),he.visible=!1,he.position.set(.03,-.12,-.5);const Te=eo(he,1);Te.position.set(.07,-.08,-.1),Te.rotation.set(1.15,0,-.25);for(const $ of[-.6,.6]){const I=new Da(12899787,28,17,.46,.85,2);I.position.set($,.86,-1.73),I.target.position.set($,-.1,-13),x.add(I,I.target),u.push(I),re(x,"Car headlight",[.37,.14,.045],[$,.83,-1.79],new Ft({color:11978165}))}const Ne=new Ot,je=new Float32Array(420*6);for(let $=0;$<420;$++)for(let I=0;I<2;I++){const O=$*6+I*3;je[O]=-18+$*3.71%31,je[O+1]=mt+$*1.71%8+I*.24,je[O+2]=14+$*7.27%20+I*.04}Ne.setAttribute("position",new ln(je,3));const st=new su(Ne,new Ca({color:9349798,transparent:!0,opacity:.16}));st.name="EVENT_PARKING_RAIN",o.add(st);let Se="idle",J=0,ie=0,ge=0,de=0,ve=null,j=!1,be=!1;const C=($,I)=>{e.position.copy($),e.lookAt(I),i("view")};return mu(o),{root:o,targets:a,floorAt:y1,get active(){return!["idle","home"].includes(Se)},get locked(){return["driving","exiting"].includes(Se)},get seated(){return["driving","car","listening"].includes(Se)},get objective(){return{driving:"台风夜，回到五栋",car:j?"打开车门，去五栋":"手机上有一条妈妈的留言",listening:"妈妈的留言 · 00:09",exiting:"雨还没有停",courtyard:"五栋的单元门没有锁",stairs:"上五楼，找到 502",home:"打开 502 的门"}[Se]},begin(){Se="driving",J=0,x.position.z=29,C(jn([-10.46,mt+1.35,29.24]),jn([-10.4,mt+1.3,13.7])),n.playVoice("weather-radio",{delay:.3})},phone(){Se==="car"&&(Se="listening",J=0,he.visible=!0,he.add(K),K.position.set(0,-.19,-.08),K.rotation.set(Math.PI/2,0,-.05),i("changed"),n.playVoice("mother-arrival",{onComplete(){j=!0,Se="car",Dt(t,"opening-call"),K.visible=!1,he.visible=!1,i("phone-collected"),i("changed")}}))},exitCar(){!j||Se!=="car"||(Se="exiting",J=0,ve={position:e.position.clone(),quaternion:e.quaternion.clone()},n.effect("chair",1.1),i("changed"))},openEntry(){de||(de=1,A.userData.open=!0,Se="stairs",n.effect("chair",1),r(),i("changed"))},available($){return $==="arrival_phone"?Se==="car"&&!j:$==="arrival_car_exit"?Se==="car"&&j:$==="arrival_entry"?!de&&!["driving","car","listening","exiting"].includes(Se):!0},setArtMode($){be=!!$,o.visible=!be},update($,I,O){if(be||!I)return;if(ie+=$,J+=$,Se==="driving"){const te=Math.min(1,J/4.5);x.position.z=29-4*ea(te),C(jn([-10.46,mt+1.35,x.position.z+.24]),jn([-10.4,mt+1.3,13.7])),te===1&&(Se="car",J=0,C(jn([-10.46,mt+1.35,25.24]),jn([-9.97,mt+.99,24.9])),i("changed"))}if(Se==="exiting"){const te=Math.min(1,J/1.7);ge=ea(te),B.rotation.y=ge*1.25,e.position.lerpVectors(ve.position,jn([-11.55,mt+1.65,24.6]),ea(te)),e.lookAt(-13.22,mt+1.5,13.6),i("view"),te===1&&(Se="courtyard",Dt(t,"arrived-courtyard"),i("changed"))}if(Se==="listening"){const te=Math.min(1,J/.75);K.position.y=-.19+.25*ea(te)}w.rotation.y=Ht.damp(w.rotation.y,-de*1.4,3,$),de&&Math.abs(w.rotation.y+1.4)>.001&&r();const z=e.position.y<mt+7&&e.position.z>9;if(c.forEach(te=>{te.visible=z}),u.forEach(te=>{te.visible=z&&e.position.z>12}),st.visible=z,z)for(const te of G)te.rotation.z=Math.sin(ie*2.2)*.76;st.position.y=-(ie*4%2.5);for(const te of l){const ae=Math.abs(e.position.y-1.65-te.floor)<1.2&&e.position.distanceTo(te.light.position)<4.8;b1(te,$,ae);const we=te.on>0&&!t.powerOut;te.light.visible=e.position.distanceTo(te.light.position)<8,te.light.intensity=we?6.2:0,te.bulb.material.emissiveIntensity=we?1.15:0,we&&!te.sounded&&(n.effect("breaker",.09),te.sounded=!0),we||(te.sounded=!1)}Se==="stairs"&&e.position.x>-5.85&&e.position.y>.9&&e.position.z<7.4&&(Se="home",Dt(t,"arrived-502"),i("changed")),O&&!o.userData.sealed&&(o.userData.sealed=!0,M("EVENT_CLOSED_LOWER_STAIR",[1.14,2.5,.1],[-11.58,-1.47,7.39],_),r())},rehearsal($){j=!0,K.visible=!1,de=1,w.rotation.y=-1.4,A.userData.open=!0,Se="stairs",$==="courtyard"?(Se="courtyard",C(jn([-11.55,mt+1.65,24.6]),jn([-13.22,mt+1.5,13.6]))):C(jn([-13.25,mt+1.65,12.25]),jn([-12.52,mt+1.65,10])),r()}}}function w1(s,e,t,n=!0){return!n||s.complete||(s.seconds=t?s.seconds+e:0,s.seconds<2.4)?!1:(s.complete=!0,!0)}function T1({world:s,camera:e,story:t,sound:n,emit:i,changed:r}){const o=new Ze;o.name="EVENT_BALCONY",s.add(o);const a=[],l=[],c=(I,O=.91,z={})=>new gt({color:I,roughness:O,...z});let u,h;s.traverse(I=>{I.isMesh&&/^Kitchen.east/.test(I.name)&&(l.push(I),mn(I),I.visible=!1,u||=I.material),I.isMesh&&/^Kitchen.floor/.test(I.name)&&(h||=I.material)}),u=u?Nc(u):c(6648679),h=h?Nc(h):c(3492680);const d=c(4217168,.5,{metalness:.65}),f=c(4406059),g=c(1121054),_=c(11908256),m=(I,O,z,te=u)=>{const ae=re(o,I,O,z,te);return ae.userData.collider=!0,ae},p=(I,O,z)=>(mn(I),I.userData.interaction=O,I.userData.prompt=z,a.push(I),I);for(const[I,O]of[[-3,.8],[2.2,4.2]])m("Kitchen wall beside balcony",[.18,3.1,O-I],[10,1.55,(I+O)/2]);m("Balcony doorway lintel",[.18,.69,1.4],[10,2.755,1.5]),re(o,"Balcony weathered tile floor",[3.8,.12,7.2],[11.9,-.065,.6],h),re(o,"Balcony corrugated roof",[3.98,.14,7.32],[11.93,3.06,.6],d);for(const I of[-3.02,4.22])m("Balcony side wall",[3.8,3,.13],[11.9,1.5,I]);m("Balcony concrete parapet",[.16,.88,7.2],[13.75,.44,.6]),m("Balcony upper window beam",[.13,.35,7.2],[13.75,2.88,.6],d);for(const I of[-2.98,-1.2,.6,2.4,4.18])m("Balcony window upright",[.08,2,.06],[13.75,1.79,I],d);const M=new Ze;M.name="EVENT_BALCONY_DOOR",M.position.set(10,0,.8),o.add(M);const y=new Ze;y.name="Glazed balcony door",M.add(y),y.userData.collider=!0;for(const I of[.04,1.33])re(y,"Balcony door vertical frame",[.07,2.36,.08],[0,1.18,I],d);re(y,"Balcony door lower panel",[.07,.56,1.37],[0,.28,.685],d);for(const I of[.59,2.32])re(y,"Balcony door horizontal frame",[.07,.08,1.37],[0,I,.685],d);re(y,"Door frosted glass",[.038,1.67,1.21],[0,1.455,.685],c(5600111,.4,{transparent:!0,opacity:.44})),re(M,"Balcony door handle",[.14,.045,.055],[-.085,1.04,1.17],_),p(M,"balcony_door","推开厨房通往阳台的门"),M.userData.hintAnchor=[-.05,1.28,.7];const v=os((I,O,z)=>{I.fillStyle="#a2a497",I.fillRect(0,0,O,z);for(let te=0;te<O;te+=3)I.fillStyle=te%9?"#798b8123":"#34483d28",I.fillRect(te,0,1,z);for(let te=0;te<z;te+=3)I.fillStyle="#c0c1a826",I.fillRect(0,te,O,1)},256,256),T=new Hi(2.7,1.85,36,28),w=T.attributes.position.array.slice(),A=new Xe(T,c(8886153,.96,{map:v,side:Rn}));A.name="EVENT_BLOWN_CURTAIN",A.position.set(13.66,1.85,.05),A.rotation.y=-Math.PI/2,A.castShadow=!0,o.add(A),p(A,"balcony_curtain","拉开贴在窗上的湿窗帘");const L=new Wt(9616314,3.2,5,2);L.position.set(12.5,2.5,.7),o.add(L);const b=new Ot,x=[];for(let I=0;I<120;I++){const O=-3+I*.137%7,z=I*.347%3;x.push(13.97,z,O,14.02,z+.18,O+.07)}b.setAttribute("position",new ct(x,3));const N=new su(b,new Ca({color:10600118,transparent:!0,opacity:.19}));N.name="EVENT_BALCONY_RAIN",o.add(N);for(const I of[-2.75,3.9])Sn(o,"Balcony drain pipe",[[13.52,.12,I],[13.52,2.99,I]],.046,d),Sn(o,"Hanging washing line",[[10.3,2.78,I],[13.45,2.72,I]],.012,d);for(let I=0;I<4;I++){const O=re(o,"Weathered plant pot",[.29,.31,.28],[12.95,.155,-2.54+I*.4],f);O.rotation.y=I*.3;for(let z=0;z<4;z++)Sn(o,"Plant stems",[[12.95,.31,-2.54+I*.4],[12.95+Math.sin(z*2)*.15,.61+z*.06,-2.54+I*.4+Math.cos(z)*.12]],.017,c(4283716))}const U=new Ze;U.name="EVENT_BALCONY_TOOLBOX",U.position.set(11.85,.37,3.12),o.add(U),m("Balcony wooden stool",[.87,.36,.54],[11.85,.18,3.12],f),re(U,"Toolbox bottom",[.79,.04,.41],[0,.02,0],g);for(const I of[-.377,.377])re(U,"Toolbox side",[.035,.25,.41],[I,.125,0],d);for(const I of[-.187,.187])re(U,"Toolbox front and back",[.79,.25,.035],[0,.125,I],d);const k=new Ze;k.position.set(0,.25,.205),U.add(k),re(k,"Toolbox hinged lid",[.81,.06,.43],[0,.03,-.215],d),Sn(k,"Toolbox handle",[[-.14,.07,-.2],[-.14,.15,-.2],[.14,.15,-.2],[.14,.07,-.2]],.02,g),p(U,"balcony_toolbox","打开阳台工具箱");const Y=new Ze;Y.position.set(0,.295,.035),U.add(Y);for(const I of[-.115,.115]){const O=new Xe(new ri(.07,.085,.29,20),g);O.rotation.x=Math.PI/2,O.position.x=I,Y.add(O);for(const z of[-.15,.15]){const te=new Xe(new pr(.061,20),c(5274498,.13,{metalness:.5}));te.position.set(I,0,z),z<0&&(te.rotation.y=Math.PI),Y.add(te)}}re(Y,"Binocular bridge",[.21,.06,.08],[0,0,0],d),p(Y,"balcony_binoculars","拿起工具箱里的望远镜"),Y.visible=!1;const B=p(re(o,"Balcony viewing window",[.008,1.55,1.73],[13.66,1.78,1.5],c(8625815,.17,{transparent:!0,opacity:.018,depthWrite:!1})),"balcony_view","用望远镜看对楼");re(o,"Balcony window catch",[.045,.09,.14],[13.6,1.21,.98],d),B.userData.hintBelow=!0;const G=new Ze;G.name="EVENT_OPPOSITE_BUILDING",o.add(G);for(const[I,O]of[[[.3,9,18],[33,7.2,0]],[[.3,7.8,18],[33,-4.12,0]],[[.3,2.52,6.5],[33,1.26,-5.75]],[[.3,2.52,7],[33,1.26,5.5]]])re(G,"Dark opposite facade",I,O,u);for(let I=-2;I<4;I++)for(const O of[-7.7,-4.7,4.3,7.3])re(G,"Unlit opposite window",[.055,1.45,1.42],[32.81,I*2.8+1.5,O],g),re(G,"Opposite window sill",[.28,.07,1.65],[32.73,I*2.8+.72,O],d);re(G,"Occupied room floor",[3.6,.12,4.2],[34.4,-.08,-.5],f),re(G,"Occupied room back wall",[.12,2.65,4.2],[36.13,1.31,-.5],c(7563852));for(const I of[-2.57,1.57])re(G,"Occupied room side",[3.6,2.65,.1],[34.4,1.31,I],c(5857357));re(G,"Occupied room ceiling",[3.6,.1,4.2],[34.4,2.67,-.5],u),re(G,"Opposite family dining table",[1.35,.1,1.48],[34,.78,-.48],f);for(const I of[33.48,34.52])for(const O of[-1.03,.06])re(G,"Opposite dining table leg",[.065,.75,.065],[I,.375,O],f);for(const[I,O]of[[33.95,-.98],[33.95,.1],[34.48,-.48]]){const z=new Xe(new ri(.115,.065,.09,20),_);z.position.set(I,.875,O),G.add(z)}const K=[{position:[33.78,0,-1.52],rotation:0,woman:!0},{position:[33.78,0,.55],rotation:Math.PI,woman:!1},{position:[35.06,0,-.48],rotation:-Math.PI/2,woman:!0}].map((I,O)=>{const z=new Ze;z.position.fromArray(I.position),z.rotation.y=I.rotation,G.add(z),re(z,"Opposite chair seat",[.48,.07,.47],[0,.48,.02],f);for(const ae of[-.19,.19])for(const we of[-.16,.2])re(z,"Opposite chair leg",[.045,.45,.045],[ae,.225,we],f);for(const ae of[-.19,.19])re(z,"Opposite chair back post",[.045,.62,.045],[ae,.79,-.2],f);re(z,"Opposite chair back rail",[.42,.1,.045],[0,1.05,-.2],f);const te=Ci(G,`Opposite diner ${O+1}`,{woman:I.woman,seated:!0,color:O===0?6447180:2437422});return te.position.fromArray(I.position),te.rotation.y=I.rotation,te}),V=new Wt(13876092,14,6,2);V.position.set(34.1,2.31,-.47),G.add(V),re(G,"Occupied room lamp",[.27,.06,.27],[34.1,2.45,-.47],new Ft({color:13351801}));const le=document.createElement("div");le.id="binocular-view",le.className="is-hidden",le.innerHTML='<div class="binocular-mask"></div><span class="binocular-optics">8 × 30</span><button type="button">放下望远镜 <kbd>E / Esc</kbd></button>',document.body.appendChild(le);let he=0,Te=0,Ne=!1,je=0,st=!1,Se=!1,J=0,ie=0,ge=!1,de=null,ve=!1;const j={seconds:0,complete:t.discovered.includes("balcony")},be=new D,C=new D,$=()=>{ge&&(ge=!1,e.position.copy(de.position),e.quaternion.copy(de.quaternion),e.fov=de.fov,e.updateProjectionMatrix(),le.classList.add("is-hidden"),i("scope-close"),i("view"))};return le.querySelector("button").addEventListener("click",$),mu(o),{targets:a,get scoping(){return ge},get locked(){return!1},openDoor(){he=he?0:1,y.userData.open=!!he,n.effect("chair",.7),r()},pullCurtain(){st||(st=!0,n.effect("cloth",2),Dt(t,"curtain"),i("changed"))},openBox(){Ne||(Ne=!0,Te=.001,n.effect("chair",.5))},takeBinoculars(){Se=!0,Y.visible=!1,Dt(t,"binoculars"),n.effect("cloth",.35),i("changed")},view(){if(ge)return $();Se&&(de={position:e.position.clone(),quaternion:e.quaternion.clone(),fov:e.fov},ge=!0,e.position.set(13.12,1.65,.75),e.lookAt(34,1.3,-.48),e.fov=10,e.updateProjectionMatrix(),le.classList.remove("is-hidden"),i("scope-open"),i("view"))},closeScope:$,available(I){return I==="balcony_curtain"?!st:I==="balcony_toolbox"?!Ne:I==="balcony_binoculars"?Ne&&Te>=1&&!Se:I==="balcony_view"?Se&&je>.98&&!ge:!ge},setArtMode(I){ve=!!I,o.visible=!ve,l.forEach(O=>{O.visible=ve})},update(I,O){if(ve||!O)return;J+=I;const z=M.rotation.y;M.rotation.y=Ht.damp(z,he*1.42,3,I),Math.abs(M.rotation.y-z)>5e-4&&r(),M.userData.prompt=he?"关上阳台门":"推开厨房通往阳台的门",Ne&&Te<1&&(Te=Math.min(1,Te+I),k.rotation.x=Te*1.9,Te===1&&(Y.visible=!Se)),st&&(je=Math.min(1,je+I*.55)),A.position.z=.05+je*3.15,A.position.y=1.85-je*.37;const te=T.attributes.position;if(e.position.x>8){for(let ae=0;ae<te.count;ae++){const we=w[ae*3],fe=w[ae*3+1],it=Math.exp(-((we/.43)**2+(fe/.59)**2)*2),R=Math.exp(-((we/.085)**2+((fe+.04)/.18)**2)*2),S=Math.exp(-(((Math.abs(we)-.16)/.1)**2+((fe-.16)/.09)**2)*2);te.setZ(ae,(it*.16+R*.12-S*.062)*(1-je)+Math.sin(fe*17+we*9+J*2.4)*(.025+je*.05))}te.needsUpdate=!0,T.computeVertexNormals()}N.position.y=-(J*1.5%.9),L.visible=e.position.x>8&&e.position.x<17,V.visible=e.position.x>8,ge&&(e.getWorldDirection(be),C.set(34,1.2,-.48).sub(e.position).normalize(),w1(j,I,be.dot(C)>.992)&&n.effect("cloth",.7)),j.complete&&(ie=Math.min(1,ie+I*.38),K[0].userData.rig.head.rotation.y=-ie*Math.PI/2,K[1].userData.rig.head.rotation.y=ie*Math.PI/2,ie===1&&!t.discovered.includes("balcony")&&(Dt(t,"balcony"),i("balcony-complete"),i("changed")))},rehearsal(){he=1,M.rotation.y=1.42,y.userData.open=!0,e.position.set(11.3,1.65,.85),e.lookAt(13.66,1.85,.05),i("view"),r()}}}function E1({story:s,camera:e,sound:t,narrative:n,emit:i,gameTime:r,canOpen:o,dial:a}){const l=document.createElement("section");l.id="personal-phone",l.className="is-hidden",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-label","林晚的手机"),l.innerHTML=`<div class="personal-phone-body"><header><span data-phone-clock>22:17</span><span>▂▄▆　<span data-phone-battery></span></span></header>
    <div class="phone-app-title"><span>林晚的手机</span><button type="button" data-phone-close aria-label="收起手机">收起 <kbd>P / Esc</kbd></button></div>
    <nav aria-label="手机应用"><button data-phone-tab="calls">电话</button><button data-phone-tab="voicemail">留言</button><button data-phone-tab="photos">相册 <i data-photo-dot></i></button></nav>
    <div data-phone-content></div><footer>▁</footer></div>`,document.body.appendChild(l);const c=l.querySelector("[data-phone-content]"),u=l.querySelector("[data-phone-clock]"),h=document.querySelector("#phone-status"),d=new Set(["mother-arrival"]);let f=!1,g="calls",_=null,m=!1,p=0,M=0,y=-100,v=-1,T=null;const w={"mother-arrival":"22:17　妈妈 · 00:09","mother-return":"22:17　妈妈 · 已保存","mother-look-back":"22:17　妈妈 · 已保存","wall-voicemail":"22:17　妈妈 · 已保存"},A=(B,G)=>{const K=document.createElement("button");return K.type="button",K.textContent=B,K.addEventListener("click",G),K},L=(B,G="")=>{const K=document.createElement("p");return K.className=G,K.textContent=B,K};function b(){f&&(f=!1,m=!1,l.classList.add("is-hidden"),i("phone-close"))}function x(B){T=B,y=M;const G={onComplete(){const K=p1(B);K&&Dt(s,K),T=null,i("changed"),f&&g==="voicemail"&&k()},onCancel(){T=null}};B==="wall-voicemail"?t.playSequence(["mother-warning","stranger-soup"],{...G,gap:.45}):t.playVoice(B,G),f&&g==="voicemail"&&k()}function N(){delete h.dataset.notification,l.querySelector("[data-photo-dot]").textContent="",c.replaceChildren(),c.append(L("今天　23:40","phone-media-date"));const B=document.createElement("img");B.alt="今晚的饭桌合照，三人坐在桌边，中间的人举着筷子看向镜头",B.src=_,B.className="phone-photo",c.append(B),c.append(L("IMG_2340.JPG　　1 / 1","phone-media-meta")),c.append(A("返回相册",k)),Dt(s,"future-photo-seen"),i("changed")}function U(){c.replaceChildren(),c.append(L("今天　23:47","phone-media-date"));const B=document.createElement("canvas");B.width=640,B.height=400,B.className="phone-recording",B.setAttribute("aria-label","座位上的手机摄像画面"),c.append(B);const G=L("● REC　00:00","recording-timer");c.append(G),p=0,m=!0,v=-1,c.append(A("结束录像",()=>{m=!1,Dt(s,"recording-viewed"),k()})),c.append(L("后置摄像头　·　声音已录入","phone-media-meta"))}function k(){if(m=!1,c.replaceChildren(),u.textContent=r(),l.querySelectorAll("[data-phone-tab]").forEach(B=>B.setAttribute("aria-pressed",String(B.dataset.phoneTab===g))),g==="calls")c.append(L("置顶联系人","phone-section-label"),L("妈妈","phone-contact-name"),L("最后通话　22:17","phone-muted"),L("通话时长　00:09","phone-muted")),c.append(A("回拨妈妈",()=>{b(),a()})),c.append(L("通话记录","phone-section-label"),L("妈妈　　22:17　　已结束","phone-call-entry"));else if(g==="voicemail"){c.append(L("语音留言","phone-section-label"));for(const B of d)c.append(A(`${T===B?"Ⅱ":"▶"}　${w[B]}`,()=>x(B)));c.append(L("保存时间均为今晚 22:17","phone-muted"))}else{if(c.append(L("最近项目","phone-section-label")),_){const B=A("今天　23:40　查看照片",N),G=document.createElement("img");G.src=_,G.alt="饭桌合照缩略图",B.prepend(G),B.className="phone-photo-tile",c.append(B)}s.discovered.includes("phone-recovered")&&c.append(A("●　23:47　打开正在录像的画面",U)),!_&&!s.discovered.includes("phone-recovered")&&c.append(L("没有最近照片","phone-muted"))}}function Y(B="calls"){if(!o()||!is(s)){is(s)||i("hint","口袋里没有手机。");return}!_&&s.discovered.includes("future-photo")&&(_=n.phonePhoto().toDataURL("image/jpeg",.9)),s.discovered.includes("heard-return")&&d.add("mother-return"),s.discovered.includes("heard-look-back")&&d.add("mother-look-back"),s.wallOpen&&d.add("wall-voicemail"),f=!0,g=B,l.classList.remove("is-hidden"),i("phone-open"),k(),l.querySelector("[data-phone-close]").focus()}return l.querySelector("[data-phone-close]").addEventListener("click",b),l.querySelectorAll("[data-phone-tab]").forEach(B=>B.addEventListener("click",()=>{g=B.dataset.phoneTab,k()})),{get open(){return f},show:Y,close:b,toggle(){f?b():Y()},collected(){d.add("mother-arrival"),h.classList.add("has-phone")},wallOpened(){_||(_=n.phonePhoto().toDataURL("image/jpeg",.9),d.add("wall-voicemail"),Dt(s,"future-photo"),h.dataset.notification="1",l.querySelector("[data-photo-dot]").textContent="1",t.tone(810,.09,.035),t.tone(620,.12,.025,"sine",.13),t.playSequence(["mother-warning","stranger-soup"],{delay:1.2,gap:.45}))},recovered(){Dt(s,"phone-recovered"),i("changed"),Y("photos"),U()},update(B,G){if(!G)return;if(M+=B,h.classList.toggle("phone-missing",!is(s)),l.querySelector("[data-phone-battery]").textContent=`${Math.floor(s.battery)}%${s.battery<=3?" 省电":""}`,f){if(u.textContent=r(),m){p+=B;const V=Math.floor(p*8);if(V!==v){v=V;const le=c.querySelector("canvas");le&&(le.getContext("2d").drawImage(n.phoneRecording(p),0,0),c.querySelector(".recording-timer").textContent=`● REC　00:${String(Math.floor(p)).padStart(2,"0")}`)}}return}if(!is(s)||t.voiceBusy||M-y<13)return;const K=f1(s,d1(e.position));K&&(d.add(K),x(K))},rehearsal(){_=n.phonePhoto().toDataURL("image/jpeg",.9),d.add("mother-return"),d.add("mother-look-back"),d.add("wall-voicemail")}}}function A1({world:s,camera:e,story:t,sound:n,narrative:i,emit:r}){const o=new Ze;o.name="EVENT_CHANGING_HOUSE",s.add(o);const a=(j,be=.85)=>new gt({color:j,roughness:be}),l=a(2831667,.39),c=a(8883322,.3),u=a(4338985),h=new D,d=new D,f=new D(6.88,1.52,-2.67),g=new D(-5.64,1.4,.5);let _=0,m=!1,p=!1,M=null,y=0,v=0;const T=[],w=(j,be,C)=>(mn(j),j.userData.interaction=be,j.userData.prompt=C,T.push(j),j),A=(j,be=.6,C=12)=>(e.getWorldDirection(h),d.copy(j).sub(e.position),d.length()<C&&h.dot(d.normalize())>be);re(o,"Kitchen enamel hob",[.78,.035,.59],[8.45,1.023,-2.27],c),Pi(o,"Hob burner",[[.205,0],[.205,.025],[.19,.027]],[8.45,1.042,-2.25],l);for(const j of[0,Math.PI/2]){const be=re(o,"Pot support",[.48,.014,.026],[8.45,1.063,-2.25],l);be.rotation.y=j}const L=w(Pi(o,"Gas ignition knob",[[.043,0],[.043,.033]],[8.45,1.067,-1.989],l),"gas_stove","转动旋钮，点亮灶火"),b=re(L,"Ignition indicator",[.005,.004,.033],[0,.037,0],c),x=new Ma(new Pa(.014,.073,7),new Ft({color:3570674,transparent:!0,opacity:.68,depthWrite:!1}),28),N=new Ut;for(let j=0;j<28;j++){const be=j/28*Math.PI*2;N.position.set(8.45+Math.cos(be)*.2,1.094,-2.25+Math.sin(be)*.2),N.rotation.z=Math.sin(be)*.18,N.updateMatrix(),x.setMatrixAt(j,N.matrix)}x.name="Blue gas flame ring",x.visible=!1,o.add(x);const U=new Wt(7376600,0,4.4,2);U.name="Gas flame local light",U.position.set(8.45,1.18,-2.05),o.add(U),Sn(o,"Kitchen water riser",[[6.88,.25,-2.72],[6.88,2.66,-2.72],[5.1,2.66,-2.72]],.023,l);for(const j of[.6,1.45,2.35])re(o,"Water pipe bracket",[.11,.026,.065],[6.88,j,-2.755],c);const k=w(Pi(o,"Listen at the water valve",[[.085,0],[.085,.018]],f.toArray(),l),"listen_pipe","靠近水管，听一会儿");k.rotation.x=Math.PI/2;const Y=new Xe(new pr(.072,32),new gt({roughness:.42,map:os((j,be,C)=>{j.fillStyle="#aaa994",j.fillRect(0,0,be,C),j.strokeStyle="#2c3833",j.lineWidth=5,j.beginPath(),j.arc(be/2,C/2,be*.4,0,Math.PI*2),j.moveTo(be/2,C/2),j.lineTo(be*.74,C*.35),j.stroke()},128,128)}));Y.name="Old valve face",Y.position.set(0,.023,0),Y.rotation.x=-Math.PI/2,k.add(Y);const B=gn(o,"Damp seam betraying the sealed wall",.045,1.38,[-5.635,1.5,.52],new gt({color:6387066,roughness:.28,transparent:!0,opacity:0,depthWrite:!1}));B.rotation.y=Math.PI/2;const G=new Ze;G.position.set(7.95,2.39,-2.65),o.add(G),re(G,"Old extractor housing",[.43,.43,.055],[0,0,0],c);const K=new Ze;G.add(K);for(let j=0;j<4;j++){const be=re(K,"Extractor blade",[.09,.25,.014],[0,.075,.041],l);be.rotation.z=j*Math.PI/2,be.position.set(Math.sin(j*Math.PI/2)*.077,Math.cos(j*Math.PI/2)*.077,.041)}const V=[];for(let j=0;j<5;j++)V.push(re(G,"Extractor louver",[.39,.043,.02],[0,-.15+j*.074,.07],c));const le=[];s.traverse(j=>{j.isMesh&&/^Sofa.cushion/.test(j.name)&&(mn(j),le.push({object:j,position:j.position.clone(),scale:j.scale.clone(),phase:0}))});const he=new Ze;he.position.set(1.05,.035,3.59),o.add(he);for(const j of[-1,1]){const be=new Xe(new bn(1,16,10),a(4410176));be.scale.set(.071,.028,.145),be.position.x=j*.087,he.add(be);const C=re(he,"Worn slipper strap",[.133,.042,.087],[j*.087,.025,-.035],a(7829346));C.rotation.x=.2}let Te=0;const Ne=new Ze;o.add(Ne),Ne.visible=!1;const je=os((j,be,C)=>{j.fillStyle="#ffffff";const $=(I,O,z,te,ae=0)=>{j.beginPath(),j.ellipse(I*be,O*C,z*be,te*C,ae,0,Math.PI*2),j.fill()};$(.48,.78,.22,.16),$(.45,.5,.24,.27,-.12),$(.51,.32,.32,.15);for(let I=0;I<5;I++)$(.23+I*.135,.12+I*.019,.095-I*.009,.087-I*.008)},128,256),st=new gt({color:2306348,map:je,roughness:.16,transparent:!0,opacity:.38,depthWrite:!1});for(let j=0;j<10;j++){const be=gn(Ne,"Wet bare footprint",.1,.23,[.4-j*.47,.027,2.14+(j%2?-.1:.1)],st);be.rotation.x=-Math.PI/2,be.rotation.z=Math.PI/2+.12,be.scale.x=j%2?-1:1}const Se=re(o,"Discarded household cloth",[.52,.026,.46],[-2.45,.925,2.55],a(8947828));Se.rotation.y=.31;const J=new co().load(new URL("./story/corridor-photos.png",document.baseURI).href);J.colorSpace=It,J.repeat.set(1/3,.5),J.offset.set(0,.5);const ie=[];for(const[j,be,C,$]of[[4.68,1.75,-2.79,0],[-4.76,1.78,-6.96,0],[-1.55,1.88,-7.04,0]]){const I=new Ze;I.position.set(j,be,C),I.rotation.y=$,o.add(I),re(I,"Family keepsake frame",[.48,.59,.055],[0,0,0],u);const O=gn(I,"Familiar family photograph",.414,.523,[0,0,.031],new Ft({map:J,color:11380627}));ie.push({object:I,photo:O,phase:0})}const ge=new D;function de(j){const be=t.housePhase;Te<be&&!A(he.position)&&(Te=be,he.rotation.y=be===1?Math.PI:.7,he.position.x=be===1?1.19:.67,Ne.visible=be===1,Se.visible=be!==2);for(const C of le)C.phase<be&&!A(C.position)&&(C.phase=be,C.object.position.copy(C.position),C.object.scale.copy(C.scale),be===1?(C.object.scale.y*=.71,C.object.position.y-=.033,C.object.rotation.z=.028):(C.object.rotation.z=0,C.object.position.z-=.055));for(const C of ie)if(C.object.getWorldPosition(ge),!(C.phase>=be||A(ge))){if(be===2){if(!M){if(!j)continue;M=new ho(i.selfPortrait()),M.colorSpace=It}C.photo.material=C.photo.material.clone(),C.photo.material.map=M,C.photo.material.color.set(12171684)}else C.object.rotation.z=.055;be===2&&(C.object.rotation.z=0),C.phase=be}}const ve={root:o,targets:T,available(j){return j==="listen_pipe"?t.powerOut&&!t.wallOpen:!0},stove(){t.stoveLit=!t.stoveLit,n.tone(135,.08,.03,"square"),n.effect("breaker",.16),r("changed")},listen(){if(ve.available("listen_pipe")){if(e.position.distanceTo(f)>2.1){r("hint","再靠近水管一点。");return}m=!m,k.userData.prompt=m?"离开水管":"靠近水管，听一会儿"}},setArtMode(j){p=!!j,o.visible=!p},get flashlightPower(){return t.powerOut?o1(t.battery):1},update(j,{active:be=!0,flashlight:C=!1,phoneAvailable:$=!0,allowCapture:I=!0,ended:O=!1}={}){if(p)return;if(!be){n.quietRoomSources();return}_+=j,e.position.distanceTo(f)>2.1&&(m=!1);const z=O?[]:a1(t,j,{active:be,flashlight:C,phoneAvailable:$,listeningPipe:m,listeningWall:!t.wallOpen&&A(g,.9,2.8)});for(const ce of z)ce==="reserve-mode"&&r("hint","屏幕只剩 18%。厨房的灶台旁传来水管声。"),ce==="battery-low"&&r("hint","照明开始变暗。最后一点电留给电话和近处的路。"),ce==="pipe-heard"&&(m=!1,k.userData.prompt="再听一遍水管"),ce==="wall-located"&&n.effect("paper",.7,-.6),r("changed");O||de(I);const te=t.breathSeconds>0&&!t.ritualComplete&&t.ritual!=="given"&&!O;v=Ht.damp(v,te?r1(t.breathSeconds):0,5,j),i.houseBreath(v,te),y=Ht.damp(y,t.stoveLit&&!O?1:0,5,j),x.visible=y>.01,x.material.opacity=y*(.67+.025*Math.sin(_*9)),U.intensity=y*2.8*(1-.045*v),b.rotation.y=y*1.2,L.userData.prompt=t.stoveLit?"关掉灶火":"转动旋钮，点亮灶火",K.rotation.z+=j*(te?.24+v*1.25:.17);for(const ce of V)ce.rotation.x=v*.12;B.material.opacity=t.wallOpen?0:t.wallLocated?.5:t.pipeHeard?.18:0;const ae=e.position.y>-.6&&e.position.x>-7&&e.position.x<10&&e.position.z<4.8,we=!O&&ae?1:0;n.locateListener(e.position,e.getWorldDirection(h));const fe=m&&!t.pipeHeard?t.pipeSeconds%2:_%5,it=fe<.22||fe>.47&&fe<.69?Math.sin((fe<.22?fe:fe-.47)/.22*Math.PI)**2:0,R=t.powerOut&&!t.wallOpen&&!t.wallLocated,S=t.pipeHeard?2:Math.min(2,Math.floor(t.pipeSeconds/2));[[6.88,1.7,-2.7],[4.6,2.64,-2.7],[-5.64,1.4,.5]].forEach((ce,Q)=>n.roomSource(`pipe-${Q}`,ce,R&&S===Q?we*it*.16:0,175+Q*32,8));const ne=n.voiceBusy?.45:1;n.roomSource("house-pipes",[6.88,2,-2.7],we*v*.065*ne,190,1.2),n.roomSource("house-extractor",[7.95,2.39,-2.65],we*v*.045*ne,740,.65),n.roomSource("house-next-tv",[-4.9,1.3,6.9],we*v*.07*ne,390,.9),n.roomSource("gas-hiss",[8.45,1.1,-2.25],we*y*.017,2100,.4)}};return ve}const De=s=>document.querySelector(s),Fa=new URLSearchParams(location.search),id=Fa.get("view"),Jt=YM({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,userAgentMobile:navigator.userAgentData?.mobile,coarsePointer:matchMedia("(pointer: coarse)").matches,hoverNone:matchMedia("(hover: none)").matches,override:Fa.get("touch")});let hf;try{hf=localStorage.getItem("third-place-quality")}catch{}let an=ef(Fa.get("quality")||hf||(Jt?"smooth":"quality"),Jt);document.body.classList.toggle("touch-device",Jt);document.body.dataset.inputMode=Jt?"touch":"desktop";let Et=["dining","bathroom","hallway","stairs"].includes(id)?id:null;const Be={game:De("#game"),title:De("#title-screen"),start:De("#start-button"),loading:De("#loading-screen"),loadingFill:De("#loading-fill"),loadingLabel:De("#loading-label"),hud:De("#hud"),chapterNumber:De("#chapter-number"),chapterTitle:De("#chapter-title"),clock:De("#clock-time"),objective:De("#objective-text"),prompt:De("#interaction-prompt"),promptText:De("#interaction-prompt span"),crosshair:De("#crosshair"),flashlight:De("#flashlight-state"),subtitle:De("#subtitle"),pause:De("#pause-hint"),modal:De("#modal"),modalCard:De("#modal-card"),modalKicker:De("#modal-kicker"),modalTitle:De("#modal-title"),modalBody:De("#modal-body"),modalActions:De("#modal-actions"),peephole:De("#peephole"),lookAway:De("#look-away"),lookAwayFill:De("#look-away i"),damage:De("#damage-flash"),timer:De("#timer"),timerValue:De("#timer-value"),ending:De("#ending"),endingCode:De("#ending-code"),endingTitle:De("#ending-title"),endingBody:De("#ending-body"),restart:De("#restart-button")},Fe=of();let Oi=null;try{Oi=M1(sessionStorage.getItem(lf))}catch{}const po=Fa.get("continue")==="2350"&&Oi&&!Et;po&&Object.assign(Fe,structuredClone(Oi.story));const ee={loaded:!1,started:!1,paused:!1,pointerLocked:!1,modalOpen:!1,entered:!1,note:!1,table:!1,mirror:!1,rules:!1,tape:!1,peephole:!1,wall:!1,bowlTouched:!1,finalPhase:!1,finalChoice:null,ended:!1,gameMinutes:1337,countdown:78,danger:0,qHeld:!1},Un=new tm;Un.background=new Je(329735);Un.fog=new Jc(593424,.014);const nt=new jt(67,innerWidth/innerHeight,.05,85);nt.rotation.order="YXZ";const zt=new Hx({antialias:!0,powerPreference:"high-performance"});let Ts=tf(innerWidth,innerHeight,devicePixelRatio,an);zt.setPixelRatio(Ts);zt.setSize(innerWidth,innerHeight);zt.outputColorSpace=It;zt.toneMapping=Hc;zt.toneMappingExposure=.66;zt.shadowMap.enabled=!0;zt.shadowMap.type=zc;Be.game.appendChild(zt.domElement);const ls=new CM(zt);ls.setPixelRatio(Ts);ls.addPass(new PM(Un,nt));const Rr=new es(Un,nt,innerWidth,innerHeight);Rr.kernelRadius=5;Rr.minDistance=.0015;Rr.maxDistance=.065;Rr.enabled=an.ambientOcclusion;ls.addPass(Rr);ls.addPass(new vr(new Pe(innerWidth,innerHeight),.16,.42,1.12));ls.addPass(XM());Un.add(new Gm(9411994,3156254,.12));const df=new Wt(10008748,1.8,9,2);df.position.set(0,2.4,5.6);Un.add(df);const qt=new Da(13820127,18,13,.51,.78,2);qt.position.set(.13,-.08,.02);qt.castShadow=!0;qt.shadow.mapSize.set(an.flashlightSize,an.flashlightSize);qt.shadow.bias=-15e-5;qt.shadow.radius=4;qt.target.position.set(0,-.06,-6);const Ba=document.createElement("canvas");Ba.width=256;Ba.height=256;const vu=Ba.getContext("2d"),mo=vu.createRadialGradient(128,128,8,128,128,124);mo.addColorStop(0,"rgba(255,255,242,1)");mo.addColorStop(.52,"rgba(222,235,218,.84)");mo.addColorStop(.78,"rgba(158,181,162,.28)");mo.addColorStop(1,"rgba(0,0,0,0)");vu.fillStyle=mo;vu.fillRect(0,0,256,256);qt.map=new ho(Ba);nt.add(qt,qt.target);Un.add(nt);let kn=!0;const Li=new Set,Uc=new Wd;Uc.far=3.4;const R1=new Pe(0,0),C1=new Gd,ss=new D,Zn=new D,ta=new D,na=new D;let tn=0,_n=0,ka=!1,Ul=0,Zi=0,mi=0,to=null,pn,Ol,Jn,ff=0,P1,L1,D1,I1,go,Ta,Oc,$e,cs,Zt,Xt,ii,as,fa=0;const no=[],As=[],N1=[],Ea=[],Nt=new qM({onSubtitle:(s,e)=>za(s,e),onStatus:s=>{De("#audio-status").textContent=s}});function si(){if(!Jt)try{const s=zt.domElement.requestPointerLock?.();s?.catch&&s.catch(()=>{})}catch{}}function xs(s){let e;return pn?.traverse(t=>{!e&&t.name.startsWith(s)&&(e=t)}),e}function xu(s){return s.userData.prompt||s.name.replace(/^INT_/,"").replaceAll("_"," ")}function Gr(){As.length=0,pn.updateMatrixWorld(!0),pn.traverse(s=>{s.isMesh&&s.userData.collider&&As.push({object:s,box:new Ln().setFromObject(s)})})}function U1(){return new Promise((s,e)=>{new Gx().load("./models/third_place.glb",async n=>{try{Be.loadingFill.style.width="78%",Be.loadingLabel.textContent="正在整理房间……",await new Promise(i=>setTimeout(i,0)),pn=n.scene,Un.add(pn),pn.traverse(i=>{if(i.isMesh&&(i.castShadow=i.userData.cast_shadow!==!1,/filament_bulb|tungsten_bulb|fluorescent_tube/i.test(i.name)&&(i.castShadow=!1),i.receiveShadow=i.userData.receive_shadow!==!1,i.material?.map&&(i.material.map.colorSpace=It,i.material.map.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()))),i.userData.start_hidden&&(i.visible=!1,N1.push(i)),(i.userData.interaction||i.name.startsWith("INT_"))&&no.push(i),i.isLight){if(/HALL_FLUOR/i.test(i.name)?i.intensity=34:/DINING/i.test(i.name)?i.intensity=12:/BATHROOM/i.test(i.name)?i.intensity=4.5:/WINDOW_COOL/i.test(i.name)?i.intensity=3:/STAIR_COLD/i.test(i.name)?i.intensity=5:/STAIR_WARM/i.test(i.name)?i.intensity=6:/KITCHEN/i.test(i.name)?i.intensity=16:i.intensity=12,i.distance=/HALL/i.test(i.name)?5.8:8,i.decay=2,/DINING|BATHROOM|STAIR|HALL/i.test(i.name)){i.castShadow=!0;const r=Math.min(512,an.shadowSize);i.shadow.mapSize.set(r,r),i.shadow.bias=-3e-4,i.shadow.normalBias=.018,i.shadow.radius=4,i.shadow.autoUpdate=!1,i.shadow.needsUpdate=!0}i.userData.baseIntensity=i.intensity}}),Ol=xs("SPAWN_START"),Jn=xs("INT_DOOR_502"),P1=xs("INT_WALL_SEAL"),L1=xs("EVENT_WALL_BRICKS"),D1=xs("EVENT_TABLE_SHADOW"),I1=xs("EVENT_MIRROR_SHADOW"),Jn&&(ff=Jn.rotation.y),$e=g1({world:pn,scene:Un,camera:nt,renderer:zt,story:Fe,sound:Nt,emit:Ms,view(){tn=nt.rotation.y,_n=nt.rotation.x,ss.set(0,0,0)},collidersChanged:Gr}),cs=x1({world:pn,camera:nt,story:Fe,sound:Nt,changed:Gr,emit:Ms}),Zt=S1({world:pn,camera:nt,story:Fe,sound:Nt,changed:Gr,emit:Ms}),Xt=T1({world:pn,camera:nt,story:Fe,sound:Nt,changed:Gr,emit:Ms}),ii=E1({story:Fe,camera:nt,sound:Nt,narrative:$e,emit:Ms,gameTime:()=>`${String(Math.floor(ee.gameMinutes/60)%24).padStart(2,"0")}:${String(ee.gameMinutes%60).padStart(2,"0")}`,canOpen:()=>oi()&&!Zt?.seated&&!Xt?.scoping&&!Et,dial:bf}),as=A1({world:pn,camera:nt,story:Fe,sound:Nt,narrative:$e,emit:Ms}),no.length=0,pn.traverse(i=>{i.userData.interaction&&no.push(i)}),Gr(),Ol?Ol.getWorldPosition(nt.position):nt.position.set(0,1.65,6.7),nt.position.y=1.65,tn=0,_n=-.02;for(const[i,r,o,a]of[[[1.65,1.35,.25],11903615,1.7,5.2],[[3.8,1.4,-5.4],9349799,1.6,3.5]]){const l=new Wt(r,o,a,2);l.position.fromArray(i),Un.add(l)}Oc=UM(pn),Ta=HM(Un,pn,an),go=GM(Un,pn,zt,an,Ta),mu(pn),Jt&&ty(),Et&&Mu(Et),po&&$e.restoreCheckpoint(),Be.loadingFill.style.width="92%",Be.loadingLabel.textContent="正在点亮楼道……",await new Promise(i=>setTimeout(i,0)),await zt.compileAsync(Un,nt),ee.loaded=!0,Be.loadingFill.style.width="100%",Be.loadingLabel.textContent="门没有锁。",s()}catch(i){e(i)}},n=>{const i=n.total?Math.min(.76,n.loaded/n.total*.76):Math.min(.7,n.loaded/34e6*.76);Be.loadingFill.style.width=`${Math.round(i*100)}%`,Be.loadingLabel.textContent=`正在载入 5 栋…… ${(n.loaded/1048576).toFixed(1)} MB`},e)})}let pf;const O1=U1().catch(s=>{console.error(s),pf=s});function F1(){if(ee.started=!0,document.body.classList.add("is-playing"),Be.loading.classList.remove("is-visible"),Be.hud.classList.remove("is-hidden"),Be.hud.setAttribute("aria-hidden","false"),Nt.start(),bu(),Et||si(),document.pointerLockElement||Be.pause.classList.add("is-hidden"),Et){document.body.classList.add("art-review"),De("#art-toolbar").classList.remove("is-hidden"),Mu(Et);return}if(gf("打开 502 的门"),bs("第一幕","回家"),$t(),po){Fc(Oi.choice);return}{Zt.begin(),$t();return}}Be.start.addEventListener("click",async()=>{if(!ee.started){if(Be.title.classList.remove("is-visible"),Be.loading.classList.add("is-visible"),Nt.start(),Ha(),Et||si(),await O1,pf){Be.loadingLabel.textContent="场景载入失败，请检查网络后重试。",De("#loading-retry").classList.remove("is-hidden");return}setTimeout(F1,450)}});function Mu(s){Et=s,$e?.setArtMode(!0),cs?.setArtMode(!0),Zt?.setArtMode(!0),Xt?.setArtMode(!0),as?.setArtMode(!0);const t={dining:{position:[3.45,1.58,3.95],target:[2.9,1.14,-.3],fov:49,label:"饭厅 · 第三副碗"},bathroom:{position:[3.83,1.52,-4.16],target:[3.85,1.5,-6.86],fov:55,label:"盥洗室 · 回来就好"},hallway:{position:[-4.7,1.65,6.6],target:[1,1.6,4.8],fov:58,label:"旧楼 · 502 门外"},stairs:{position:[-6.63,1.55,6.22],target:[-10.9,2.67,6.1],fov:59,label:"楼梯间 · 灯慢了半拍"}}[s];nt.position.fromArray(t.position),nt.fov=t.fov,nt.lookAt(new D(...t.target)),tn=nt.rotation.y,_n=nt.rotation.x,nt.updateProjectionMatrix(),ss.set(0,0,0),De("#art-view-name").textContent=t.label,De("#art-toolbar > span").textContent=s==="stairs"?"拖动查看 · F 手电 · 下方切换场景":"拖动查看 · WASD 移动 · F 手电 · Esc 释放鼠标",De("#art-toolbar").querySelectorAll("[data-view]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.view===s))}),kn=s!=="bathroom"&&s!=="stairs",qt.visible=kn,qt.target.position.set(0,s==="dining"?-2.1:-.06,-6),qt.intensity=s==="dining"?22:18,Be.flashlight.classList.toggle("on",kn),go?.invalidate()}De("#art-toolbar").addEventListener("click",s=>{const e=s.target.closest("[data-view]");e&&Mu(e.dataset.view)});Et&&(Be.start.textContent="查看新版场景",De(".tagline").innerHTML="美术重制 · 实时 3D 场景<br />饭厅 / 盥洗室 / 旧楼道");function mf(){const s=new URL(location.href);s.searchParams.set("continue","2350"),s.searchParams.delete("rehearsal"),location.href=s.href}Be.restart.addEventListener("click",()=>{const s=new URL(location.href);s.searchParams.delete("continue"),location.href=s.href});De("#retry-checkpoint").addEventListener("click",mf);De("#continue-checkpoint").addEventListener("click",mf);De("#continue-checkpoint").classList.toggle("is-hidden",!Oi||!!po||!!Et);po&&(Be.start.textContent="继续 23:50 的逃离");function gf(s){Be.objective.animate([{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"none"}],{duration:420}),Be.objective.textContent=s}function bs(s,e){Be.chapterNumber.textContent=s,Be.chapterTitle.textContent=e}function pa(s,e){ee.gameMinutes=Math.max(ee.gameMinutes,s*60+e),Cr()}function ki(s){ee.gameMinutes=Math.min(1438,ee.gameMinutes+s),Cr()}function Cr(){const s=Math.floor(ee.gameMinutes/60)%24,e=ee.gameMinutes%60;Be.clock.textContent=`${String(s).padStart(2,"0")}:${String(e).padStart(2,"0")}`}let _f=0;function za(s,e=2800){Be.subtitle.textContent=s,Be.subtitle.classList.add("visible"),_f=fa+e/1e3}function xr({kicker:s="发现",title:e,body:t,dark:n=!1,actions:i=[{label:"收好"}]}){ee.modalOpen=!0,Vn(),document.exitPointerLock?.(),Be.modalKicker.textContent=s,Be.modalTitle.textContent=e,Be.modalBody.innerHTML=t,Be.modalCard.classList.toggle("dark",n),Be.modalActions.replaceChildren(),i.forEach(r=>{const o=document.createElement("button");o.textContent=r.label,r.danger&&o.classList.add("danger"),o.addEventListener("click",()=>{r.onSelect&&r.onSelect(),r.close!==!1&&B1()}),Be.modalActions.appendChild(o)}),Be.modal.classList.remove("is-hidden")}function B1(){Be.modal.classList.add("is-hidden"),ee.modalOpen=!1,ee.ended||si()}function sd(){return gu(Fe)}function vf(){if(ee.ended)return;let s;Zt?.active?s=Zt.objective:ee.outside?s=ee.gameMinutes===1440?"十二点了。再拨一次妈妈的电话":"502 的窗子还亮着":ee.finalPhase?s="离开 502，下楼。别数照片里的人":Fe.discovered.includes("entered")?Fe.discovered.includes("note")?Fe.discovered.includes("table")?Fe.discovered.includes("mirror")?sd()<uo.length?s=`搜屋：家规、磁带、户口本、短信、对门与阳台（${sd()} / ${uo.length}）`:Fe.powerOut&&!Fe.pipeHeard&&!Fe.wallOpen?s="厨房水管在响，靠近听一会儿；灶火可以照亮台面":Fe.powerOut&&!Fe.wallLocated&&!Fe.wallOpen?s="沿着敲击声找过去，靠近那块新墙纸":!Fe.wallOpen&&!Fe.tools.includes("scraper")?s="厨房里有一把铲刀":!Fe.wallOpen&&!Fe.tools.includes("alcohol")?s="找找母亲床边的工业酒精":Fe.wallOpen?Fe.letter?ee.finalPhase?s="离开 502。别数楼道照片里的人":Fe.bowl==="washing"?s="洗掉第三副碗里的汤":Fe.bowl==="clean"?s="把水槽旁洗净的碗倒扣":["inverted","held-inverted"].includes(Fe.bowl)?Fe.tools.includes("medicine")?Fe.sealDrawn?Fe.bowl!=="held-inverted"?s="拿起厨房里倒扣的碗":s="把倒扣的碗对准墙上的小镜子":s="用药瓶里的朱砂，在墙上画封":s="妈妈的药瓶里藏着封墙的朱砂":s=Fe.bowl==="held-dirty"?"把第三副碗带到厨房水龙头下":"拿起第三副碗，带到厨房洗净":s="取下墙里没写完的信，翻看背面":s="用铲刀和酒精揭开新墙纸":s="卫生间里，水声停了":s="看看第三副碗":s="找找妈妈留下的东西":s="打开 502 的门",Be.objective.textContent!==s&&gf(s)}function $t(){for(const t of["entered","note","table","mirror","rules","tape"])ee[t]=Fe.discovered.includes(t);ee.wall=Fe.wallOpen,ee.bowlTouched=Fe.bowlTouched,ee.ateDumplings=Fe.dumplings==="eaten";const s={scraper:"铲刀",alcohol:"工业酒精",medicine:"妈妈的药瓶"},e=Fe.tools.map(t=>s[t]);Fe.bowl.startsWith("held")&&!Fe.ritualComplete&&e.push(Fe.bowl==="held-inverted"?"洗净倒扣的碗":"第三副碗"),Fe.dumplings==="kept"&&e.push("饺子放在玄关"),De("#inventory-note").textContent=e.length?e.join(" · "):"",vf()}function Ms(s,e){if(s==="view"){tn=nt.rotation.y,_n=nt.rotation.x,ss.set(0,0,0);return}if(s==="phone-open"){ee.modalOpen=!0,Vn(),document.exitPointerLock?.(),Be.pause.classList.add("is-hidden");return}if(s==="phone-close"){ee.modalOpen=!1,si();return}if(s==="scope-open"){Vn(),qt.visible=!1,si();return}if(s==="scope-close"){Vn(),qt.visible=kn&&is(Fe),si();return}if(s==="phone-collected"){ii?.collected();return}if(s==="phone-recovered"){ii?.recovered(),qt.visible=kn;return}if(s==="balcony-complete"){$e?.checkpointClues(),$t();return}if(s==="wash-echo"){pa(23,47),bs("第四幕","入席"),qt.visible=!1;return}if(s==="outside"){ee.outside=!0,ee.finalPhase=!1,Be.lookAway.classList.add("is-hidden"),Be.prompt.classList.remove("visible"),bs("第五幕","楼外"),Ms("view"),$t();return}if(s==="midnight"){ee.gameMinutes=1440,Cr(),$t(),Nt.tone(425,.14,.035);return}if(s==="looked-back"){ee.lookedBack=!0;return}if(s==="hint")return za(e,3500);if(s==="changed"){$t(),$e?.checkpointClues();return}if(s==="mirror-complete"){ki(7),bs("第二幕","家规"),$t();return}if(s==="blackout"){pa(23,11),bs("第三幕","墙里"),$t();return}if(s==="wall-opened"){pa(23,20),bs("第三幕","墙里"),ii?.wallOpened(),$t();return}if(s==="peephole-enter"){Vn(),mi=0,Be.peephole.classList.remove("is-hidden"),Be.peephole.classList.add("world-peephole");return}if(s==="peephole-exit"){Be.peephole.classList.add("is-hidden"),$t();return}if(s==="ate-dumplings"){ki(10),$t();return}if(s==="ritual-ready"){Vn(),document.exitPointerLock?.(),De("#ritual-grip").classList.remove("is-hidden");return}if(s==="ritual-progress"){De("#ritual-grip i").style.transform=`scaleX(${e})`;return}if(s==="ritual-finished"){De("#ritual-grip").classList.add("is-hidden");return}if(s==="sealed"){Fc("seal");return}if(s==="admitted"){(Fe.bowl==="served"||Fe.ritual==="given"||Fe.ritualComplete)&&Fc("admit"),$t();return}if(s==="ending"){yu(e);return}if(s==="ending-title"){Be.ending.classList.add("is-visible");return}}function k1(){ee.entered||(Dt(Fe,"entered"),ki(3),Nt.effect("chair",.6)),mi=mi>.5?0:1,mi===1&&$e.doorOpened(),Nt.effect("wood",.45),$t()}function z1(){Dt(Fe,"note")&&ki(5),xr({kicker:"妈妈的字条",title:"晚晚，如果你看到这个",body:'<p>说明我没能把第三副收走。</p><p class="red">别盛汤。别应。<br />十二点前走。</p>',actions:[{label:"收好字条"}]}),$t()}function H1(){Fe.discovered.includes("table")||ki(4),$e.table(),$t()}function V1(){$e.mirror()}function G1(){Dt(Fe,"rules")&&ki(6),xr({kicker:"1987 年住户须知 · 背面",title:"入住家规",body:'<span class="rule">一、家里只准承认两口活人。</span><span class="rule">二、第三口只能在墙里。</span><span class="rule">三、不能摆碗，不能叫它，不能看它的脸。</span><span class="rule">四、听见有人叫乳名，不要应。</span><p class="red">血回来的那天，它会要座位。</p>',actions:[{label:"把须知放回冰箱"}]}),$t(),$e.checkpointClues()}function W1(){$e.uncoverBook(()=>{Dt(Fe,"household")&&ki(6),xr({kicker:"户口登记 · 复印件",title:"林建平",body:'<p>户主：林秀珍。<br />与户主关系：配偶。</p><p class="red"><s>失踪</s>　离异迁出</p><p>子女：林晚。迁出时年龄：九岁。</p><p class="faded">父亲那一栏被红笔圈过，又重重涂掉。</p>',actions:[{label:"放回枕头下面"}]}),$t(),$e.checkpointClues()})}const Wr=[{date:"七年前 · 11 月 16 日",text:"晚晚，今晚别回来住，家里有人。",after:"未发送"},{date:"三年前 · 除夕",text:"妈不是不让你回家。听见有人叫你，别答应。我们家只有两个人。",after:"未发送"},{date:"今天 · 22:08",text:"墙又湿了。我怕这次撑不到天亮。晚晚，如果电话打通了，你一定听妈妈的。",after:"未发送"}];function xf(s=0){const e=Wr[s];xr({kicker:`妈妈的手机 · 草稿 ${s+1} / ${Wr.length}`,title:e.date,body:`<p>${e.text}</p><p class="red">${e.after} · 收件人：晚晚</p>`,actions:[{label:s+1<Wr.length?"下一条":"放下手机",close:s+1===Wr.length,onSelect:()=>{const t=Fe.discovered.includes("messages");_u(Fe,"message",s),!t&&Fe.discovered.includes("messages")&&ki(4),$t(),$e.checkpointClues(),s+1<Wr.length&&xf(s+1)}}]})}let Xr=!1;function Mf(s=!1){if(!s&&!Fe.discovered.includes("tape-found"))return $e.uncoverTape(()=>Mf(!0));const e=xs("INT_TAPE");if(Xr){Xr=!1,Nt.stopVoice(),e.userData.prompt="播放九岁生日磁带",$e.setTapePlaying?.(!1);return}Xr=!0,e.userData.prompt="按停磁带",$e.setTapePlaying?.(!0),Nt.playSequence(["father-tape","stranger-return"],{delay:.25,gap:2,onCancel(){Xr=!1,e.userData.prompt="重新播放九岁生日磁带",$e.setTapePlaying(!1)},onComplete(){Xr=!1,e.userData.prompt="重听九岁生日磁带",$e.setTapePlaying?.(!1),Dt(Fe,"tape")&&ki(8),$t(),$e.checkpointClues()}})}function X1(){$e.peephole()}function q1(){$e.neighbor()}function Y1(){$e.openWall()}function yf(s=!1){xr(s?{kicker:"墙里的信 · 背面",title:"封回",body:'<p>一、洗净第三副碗筷，倒扣。</p><p>二、药瓶里不是药，是朱砂和你爸爸的头发。在墙上重新画封。</p><p>三、把倒扣的碗对着墙上的小镜子。它伸手的时候，抓牢，别给它。</p><p class="red">午夜前离开，不要回头。</p>',actions:[{label:"收好这封信",onSelect:()=>{_u(Fe,"read-letter"),$t()}}]}:{kicker:"墙里的信 · 正面",title:"不是你爸回来了",body:'<p>是这房子一直要把他留下。</p><p>我把它按在墙里十九年，用我不叫它的名字，用不给它盛饭。</p><p>你一进门，它就认出你了。你是钥匙。</p><p class="red">晚晚，求你，今晚装作家里只有我们两个。</p><p>如果它坐下来——</p>',actions:[{label:"翻到背面",close:!1,onSelect:()=>yf(!0)}]})}function K1(){$e.takeBowl()}function Fc(s){if(!(ee.finalPhase||ee.ended)){ee.finalChoice=s,ee.finalPhase=!0,ee.countdown=Fe.dumplings==="eaten"?360:420,ee.finaleDuration=ee.countdown,pa(23,50),ee.finaleStartMinute=ee.gameMinutes,Oi=cf(Fe,s);try{Oi&&sessionStorage.setItem(lf,JSON.stringify(Oi))}catch{}bs("第四幕","入席"),Be.timer.classList.add("is-hidden"),s==="seal"&&Nt.playVoice("mother-run"),vf(),si()}}function bf(){if(!(!oi()||Et)){if(!is(Fe)){za("口袋里没有手机。",2500);return}if(Ic(Fe,{outside:ee.outside,atMidnight:ee.gameMinutes===1440})){yu("empty");return}Nt.tone(425,.16,.035),Nt.tone(425,.16,.035,"sine",.37),Nt.playVoice("phone-disconnected",{delay:.85})}}function $1(){cs.leave({beforeMidnight:!ee.finalPhase||ee.countdown>0,lookedBack:ee.lookedBack})}function yu(s){ee.ended||(ee.ended=!0,ee.finalPhase=!1,(s==="two"||s==="seat")&&(ee.gameMinutes=486,Cr()),ee.endingType=s,Vn(),Nt.stopVoice(),document.exitPointerLock?.(),Be.hud.classList.add("is-hidden"),Be.pause.classList.add("is-hidden"),Be.lookAway.classList.add("is-hidden"),De("#ritual-grip").classList.add("is-hidden"),De("#ending").classList.toggle("wall-ending",s==="wall"),document.body.classList.toggle("ending-in-world",s!=="wall"),s==="wall"&&De("#ending-blackout").classList.remove("is-hidden"),Be.endingCode.textContent={two:"结局 A",seat:"结局 B",wall:"结局 C",empty:"隐藏结局 D"}[s],Be.endingTitle.textContent={two:"两口人",seat:"入席",wall:"三口都在墙里",empty:"空号"}[s],Be.endingBody.textContent={two:"第三副的位置，只剩一圈干掉的汤渍。",seat:"你终于坐到了自己的位置上。",wall:"“你再回来，就四口了。”",empty:"“吃吧。别等她了。”"}[s],De("#retry-checkpoint").classList.toggle("is-hidden",!Oi),$e.prepareEnding(s),$e.playableEnding&&si())}function Sf(s){if(!s||!oi()||Et)return;const e=s.userData.interaction;if(!Va(s))return;({gas_stove:()=>as.stove(),listen_pipe:()=>as.listen(),door_502:k1,mother_note:z1,dining_table:H1,mirror:V1,rules:G1,tape:Mf,peephole:X1,door_501:q1,wall_seal:Y1,bowl_third:K1,building_exit:$1,household:W1,messages:()=>xf(),stair_entry:()=>cs.openEntry(),fire_door:()=>cs.openFire(ee.finalPhase),take_scraper:()=>$e.takeTool("take_scraper"),take_alcohol:()=>$e.takeTool("take_alcohol"),take_medicine:()=>$e.takeTool("take_medicine"),kitchen_sink:()=>$e.wash(),serve_soup:()=>$e.serve(),deny_third:()=>$e.denyThird(),dumplings:()=>$e.dumplings(),discard_dumplings:()=>$e.discard(),wall_letter:()=>yf(),draw_seal:()=>$e.drawSeal(),wall_mirror:()=>$e.ritual(),bath_switch:()=>$e.bathSwitch(),answer_wall:()=>$e.answerWall(),call_father:()=>$e.callFather(),break_wall:()=>$e.breakWall(),arrival_phone:()=>Zt.phone(),arrival_car_exit:()=>Zt.exitCar(),arrival_entry:()=>Zt.openEntry(),balcony_door:()=>Xt.openDoor(),balcony_curtain:()=>Xt.pullCurtain(),balcony_toolbox:()=>Xt.openBox(),balcony_binoculars:()=>Xt.takeBinoculars(),balcony_view:()=>Xt.view(),recover_phone:()=>$e.recoverPhone()})[e]?.()}function wf(){if(!is(Fe)){za("口袋里没有手机。",2500);return}kn=!kn,qt.visible=kn&&!Zt?.seated&&!Xt?.scoping,Be.flashlight.classList.toggle("on",kn),De("#touch-flashlight").setAttribute("aria-pressed",String(kn)),Nt.tone(kn?710:430,.07,.025,"square")}De("#phone-status").addEventListener("click",()=>ii?.toggle());document.addEventListener("keydown",s=>{if(ii?.open){["Escape","KeyP"].includes(s.code)&&(s.preventDefault(),ii.close());return}if(Xt?.scoping&&["Escape","KeyE"].includes(s.code)){s.preventDefault(),Xt.closeScope();return}if(s.code==="Escape"&&ee.started&&!ee.modalOpen&&!ee.ended){Pr(!ee.paused);return}if(!(ee.paused||Mr())){if(s.code==="KeyE"&&Fe.ritual==="ready"&&!ee.ended){s.preventDefault(),s.repeat||$e.holdRitual();return}if(!(s.repeat&&s.code!=="KeyQ")){if(Li.add(s.code),oi()){const e=Xt?.scoping?.16:1;s.code==="ArrowLeft"&&(tn+=.12*e),s.code==="ArrowRight"&&(tn-=.12*e),s.code==="ArrowUp"&&(_n=Ht.clamp(_n+.08*e,-1.12,1.05)),s.code==="ArrowDown"&&(_n=Ht.clamp(_n-.08*e,-1.12,1.05)),["KeyW","KeyA","KeyS","KeyD"].includes(s.code)&&Q1(s.code)}s.code==="KeyE"&&to&&!Et&&Sf(to),s.code==="KeyF"&&ee.started&&!ee.modalOpen&&wf(),s.code==="KeyR"&&!Et&&bf(),s.code==="KeyP"&&!Et&&ii?.toggle(),s.code==="KeyQ"&&(ee.qHeld=!0)}}});document.addEventListener("keyup",s=>{Li.delete(s.code),s.code==="KeyE"&&Fe.ritual==="ready"&&Fe.holding&&!ee.paused&&$e.releaseRitual(),s.code==="KeyQ"&&(ee.qHeld=!1)});document.addEventListener("mousemove",s=>{if(Jt||ee.paused||!ee.pointerLocked&&!ka||ee.modalOpen||ee.ended&&!$e?.playableEnding)return;const e=Xt?.scoping?.16:1;tn-=s.movementX*.0018*e,_n-=s.movementY*.00165*e,_n=Ht.clamp(_n,-1.12,1.05)});document.addEventListener("pointerlockchange",()=>{ee.pointerLocked=document.pointerLockElement===zt.domElement,Jt||ee.paused||!ee.started||ee.ended||ee.modalOpen?Be.pause.classList.add("is-hidden"):Be.pause.classList.toggle("is-hidden",ee.pointerLocked)});zt.domElement.addEventListener("click",()=>{!Et&&!ee.paused&&ee.started&&!ee.modalOpen&&(!ee.ended||$e?.playableEnding)&&!ee.pointerLocked&&si()});zt.domElement.addEventListener("pointerdown",s=>{!Jt&&!ee.paused&&s.button===0&&ee.started&&!ee.modalOpen&&(ka=!0)});document.addEventListener("pointerup",()=>{ka=!1});Be.pause.addEventListener("click",()=>{Be.pause.classList.add("is-hidden"),si()});function Mr(){return Jt&&innerHeight>innerWidth}function oi(){return ee.started&&!ee.paused&&!ee.modalOpen&&(!ee.ended||$e?.playableEnding)&&!document.hidden&&!Mr()&&!$e?.locked&&!Zt?.locked}const j1=jM(De("#ritual-grip"),{isActive:()=>Fe.ritual==="ready"&&!ee.paused&&!ee.ended&&!document.hidden&&!Mr(),onStart:()=>$e.holdRitual(),onRelease:()=>$e.releaseRitual(),onCancel:()=>$e.releaseRitual(!0)}),ma=QM({canvas:zt.domElement,root:De("#touch-controls"),enabled:Jt,isActive:oi,onLook(s,e){const t=Xt?.scoping?.16:1;tn-=s*t,_n=Ht.clamp(_n-e*t,-1.12,1.05)},onAction(s){s==="flashlight"&&wf(),s==="phone"&&!Et&&ii?.toggle()},onHold(){}});function Vn(){Li.clear(),ma.reset(),ee.qHeld=ka=!1;for(const s of Ea)s.gesture.reset();j1.reset(),Fe.ritual==="ready"&&$e?.releaseRitual(!0),ss.set(0,0,0)}function Pr(s){!ee.started||ee.ended||(ee.paused=s,Vn(),De("#game-menu").classList.toggle("is-hidden",!s),Be.pause.classList.add("is-hidden"),s?(document.exitPointerLock?.(),Nt.pause()):(Nt.start(),Et||si()))}function Ha(){if(Jt)try{document.documentElement.requestFullscreen?.({navigationUI:"hide"})?.then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}}function bu(){document.querySelectorAll("[data-quality]").forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.quality===an.mode))}),De("#performance-label").textContent=`${an.label} · ${Math.round(innerWidth*Ts)} × ${Math.round(innerHeight*Ts)}`}function Tf(){Ts=tf(innerWidth,innerHeight,devicePixelRatio,an),nt.aspect=innerWidth/innerHeight,nt.updateProjectionMatrix(),zt.setPixelRatio(Ts),zt.setSize(innerWidth,innerHeight),ls.setPixelRatio(Ts),ls.setSize(innerWidth,innerHeight),go?.invalidate(),bu()}function Z1(s){an=ef(s,Jt);try{localStorage.setItem("third-place-quality",an.mode)}catch{}Rr.enabled=an.ambientOcclusion,Un.traverse(e=>{if(!e.isLight||!e.shadow)return;const t=e===qt?an.flashlightSize:e.isPointLight?Math.min(512,an.shadowSize):an.shadowSize;e.shadow.mapSize.set(t,t),e.shadow.map?.dispose(),e.shadow.map=null,e.shadow.needsUpdate=!0}),go?.setQuality(an),Ta?.setQuality(an),Tf()}document.querySelectorAll("[data-quality]").forEach(s=>s.addEventListener("click",()=>Z1(s.dataset.quality)));document.querySelectorAll("[data-audio]").forEach(s=>{const e=s.dataset.audio,t=De(`#${s.id}-value`);s.value=Math.round(Nt.mix[e]*100),t.value=`${s.value}%`,s.addEventListener("input",()=>{Nt.setVolume(e,Number(s.value)/100),t.value=`${s.value}%`})});document.querySelectorAll("[data-audition]").forEach(s=>s.addEventListener("click",()=>{Nt.audition(s.dataset.audition)}));De("#menu-button").addEventListener("click",()=>Pr(!0));De("#resume-button").addEventListener("click",()=>{Ha(),Pr(!1)});De("#fullscreen-button").addEventListener("click",Ha);De("#loading-retry").addEventListener("click",()=>location.reload());De("#rotate-fullscreen").addEventListener("click",Ha);document.addEventListener("visibilitychange",()=>{document.hidden&&(Vn(),ee.started&&!ee.ended&&Pr(!0),Nt.pause())});window.addEventListener("blur",Vn);zt.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),Vn(),ee.started&&Pr(!0),De("#context-warning").classList.remove("is-hidden")});De("#context-reload").addEventListener("click",()=>location.reload());bu();function J1(s){const e=Ef(s);return new Ln(new D(s.x-.25,e+.14,s.z-.25),new D(s.x+.25,e+1.78,s.z+.25))}function Ef(s){return Et?0:Zt?.floorAt(s)??cs?.floorAt(s)??0}function Bc(s){const e=J1(s);return As.some(({object:t,box:n})=>!Oa(t)||t.userData.open||t===Jn&&Zi>.26?!1:n.intersectsBox(e))}function Q1(s){if(Et==="stairs"||Zt?.seated||Xt?.scoping)return;const e=new D(-Math.sin(tn),0,-Math.cos(tn)),t=new D(Math.cos(tn),0,-Math.sin(tn)),n=new D;s==="KeyW"&&n.add(e),s==="KeyS"&&n.sub(e),s==="KeyD"&&n.add(t),s==="KeyA"&&n.sub(t),n.multiplyScalar(.12);const i=nt.position.clone().add(n);Bc(i)||nt.position.copy(i)}function ey(s){if(!oi())return;if(Zt?.seated||Xt?.scoping){nt.rotation.set(_n,tn,0);return}Zn.set(0,0,0),na.set(-Math.sin(tn),0,-Math.cos(tn)),ta.set(Math.cos(tn),0,-Math.sin(tn)),Li.has("KeyW")&&Zn.add(na),Li.has("KeyS")&&Zn.sub(na),Li.has("KeyD")&&Zn.add(ta),Li.has("KeyA")&&Zn.sub(ta),Zn.addScaledVector(na,-ma.movement.y),Zn.addScaledVector(ta,ma.movement.x),Et==="stairs"&&Zn.set(0,0,0),Zn.lengthSq()>1&&Zn.normalize();const e=Jt&&KM(ma.movement)||Li.has("ShiftLeft")||Li.has("ShiftRight"),t=e?2.65:1.72;De("#move-stick").classList.toggle("sprinting",e&&Jt),ss.lerp(Zn.multiplyScalar(t),1-Math.exp(-11*s));const n=nt.position.clone();n.x+=ss.x*s,Bc(n)||(nt.position.x=n.x);const i=nt.position.clone();i.z+=ss.z*s,Bc(i)||(nt.position.z=i.z);const r=ss.lengthSq()>.06;r&&(Ul+=s*(e?11:7.5));const o=r?Math.sin(Ul)*.018:0,a=Et==="bathroom"?1.52:Et==="dining"?1.58:Et==="stairs"?1.55:1.65,l=Ef(nt.position);nt.position.y=Ht.lerp(nt.position.y,l+a+o,1-Math.exp(-13*s));const c=ee.qHeld&&ee.finalPhase?-.9:_n;nt.rotation.set(Ht.lerp(nt.rotation.x,c,1-Math.exp(-9*s)),tn,r?Math.sin(Ul*.5)*.005:0)}function Va(s){const e=s.userData.interaction;return($e?.available(e)??!0)&&(cs?.available(e)??!0)&&(Zt?.available(e)??!0)&&(Xt?.available(e)??!0)&&(as?.available(e)??!0)}function ty(){const s=De("#interaction-hotspots");for(const e of no){const t=document.createElement("button");t.type="button",t.className="scene-hotspot",t.classList.toggle("hint-below",!!e.userData.hintBelow),t.dataset.interaction=e.userData.interaction,t.textContent=xu(e),t.hidden=!0;const n=ZM(t,{isActive:()=>oi()&&!Et,onLook(i,r){tn-=i,_n=Ht.clamp(_n-r,-1.12,1.05)},onTap(){nt.updateMatrixWorld(),!t.hidden&&Va(e)&&sf(e,nt,As,innerWidth,innerHeight)&&Sf(e)}});s.appendChild(t),Ea.push({object:e,button:t,gesture:n})}}function ny(){nt.updateMatrixWorld();const s=[],e=Ea.map(t=>({...t,point:Va(t.object)?sf(t.object,nt,As,innerWidth,innerHeight):null})).sort((t,n)=>{const i=r=>r.point&&r.object.userData.interaction==="bowl_third"?-1:0;return i(t)-i(n)||(t.point?.distance??1/0)-(n.point?.distance??1/0)});for(const{button:t,point:n}of e){const i=n&&n.x<200&&n.y>innerHeight-180,r=n&&s.some(o=>Math.abs(o.x-n.x)<175&&Math.abs(o.y-n.y)<60);t.hidden=!n||i||r||s.length>=3,t.hidden||(t.textContent=xu(Ea.find(o=>o.button===t).object),t.style.left=`${n.x.toFixed(1)}px`,t.style.top=`${n.y.toFixed(1)}px`,s.push(n))}}function iy(){if(!oi()||Et||ee.ended||Xt?.scoping){to=null,Be.prompt.classList.remove("visible"),Be.crosshair.classList.remove("active");return}if(Jt){to=null,Be.prompt.classList.remove("visible"),ny();return}nt.updateMatrixWorld(),Uc.setFromCamera(R1,nt);const s=Uc.intersectObjects(no,!0);let e=null;for(const t of s){if(t.distance>3.4)continue;const n=t1(t.object,pn);if(n&&Va(n)&&Oa(n)&&nf(nt.position,t.point,n,As)){e=n;break}}to=e,Be.prompt.classList.toggle("visible",!!e),Be.crosshair.classList.toggle("active",!!e),e&&(Be.promptText.textContent=xu(e))}function sy(s){if(!ee.finalPhase||!oi())return;ee.countdown-=s,ee.gameMinutes=Math.min(1440,ee.finaleStartMinute+Math.floor((1-Math.max(0,ee.countdown)/ee.finaleDuration)*(1440-ee.finaleStartMinute))),Cr();const e=Math.max(0,Math.ceil(ee.countdown));Be.timerValue.textContent=`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`;const t=nt.position.x<-12.6&&nt.position.z>5&&nt.position.z<7.4;if(Be.lookAway.classList.toggle("is-hidden",!t),t){const n=$M(Jt,nt.rotation.x,ee.qHeld);Be.lookAway.querySelector("span").textContent=Jt?n?"保持低头，继续往出口走":"把视角转向地面，别看照片":"别数照片里的人 · 按住 Q 低头",Be.lookAwayFill.style.width="0"}ee.countdown<=0&&yu("seat")}let ia=0,qr=0;function Af(){requestAnimationFrame(Af);const s=C1.getDelta();if(De("#touch-controls").classList.toggle("is-hidden",!Jt||!oi()),De("#interaction-hotspots").classList.toggle("is-hidden",!Jt||!oi()||!!Et),De("#ritual-grip").classList.toggle("is-hidden",Fe.ritual!=="ready"||ee.paused||Mr()||ee.ended),De("#menu-button").classList.toggle("is-hidden",!ee.started||ee.ended||ee.modalOpen||ee.paused),document.hidden||!ee.started||ee.paused||Mr()){qr=ia=0,sa=performance.now();return}if(qr+=s,qr<1/60-.001)return;const e=Math.min(qr,.05);qr=0,fa+=e;const t=fa;if(Nt.update(),fa>=_f&&Be.subtitle.classList.remove("visible"),ee.loaded){if(ey(e),iy(),sy(e),Jn&&Math.abs(Zi-mi)>.001){Zi=Ht.damp(Zi,mi,3,e),Math.abs(Zi-mi)<.005&&(Zi=mi),Jn.rotation.y=ff-Zi*1.48,Jn.updateMatrixWorld(!0);const i=As.find(r=>r.object===Jn);i&&i.box.setFromObject(Jn),Oc?.doorMoved(t,Zi===mi)}Oc?.update(t,!!Et),Jn&&(Jn.userData.prompt=mi>.5?"关上 502 的门":"推开 502"),$e?.update(e,ee.gameMinutes,!ee.modalOpen),cs?.update(e,!ee.modalOpen&&!ee.ended,ee.finalPhase),Zt?.update(e,!ee.modalOpen&&!ee.ended,ee.finalPhase),Zt?.active&&(qt.visible=kn&&!Zt.seated),Xt?.update(e,!ee.modalOpen&&!ee.ended),as?.update(e,{active:!ee.modalOpen,flashlight:kn&&!Zt?.seated&&!Xt?.scoping,phoneAvailable:is(Fe),allowCapture:!$e?.busy,ended:ee.ended}),Et||(qt.intensity=18*(as?.flashlightPower??1),qt.distance=3.6+9.4*(as?.flashlightPower??1)),Fe.powerOut&&(Be.flashlight.textContent=`手机照明 · ${Math.floor(Fe.battery)}%${Fe.battery<=3?" · 省电":""}`),ii?.update(e,!ee.ended&&(!ee.modalOpen||ii.open)&&!$e?.busy&&!Zt?.active&&!Xt?.scoping),zt.toneMappingExposure=Ht.damp(zt.toneMappingExposure,ee.ended&&ee.endingType!=="wall"?.9:ee.wall?.54:.66,1.2,e)}Ta?.update(t),go?.update(t),ls.render(e),ia+=1;const n=performance.now();n-sa>=1e3&&(De("#fps-value").textContent=`${Math.round(ia*1e3/(n-sa))} FPS`,sa=n,ia=0)}let sa=performance.now();window.addEventListener("resize",()=>{Vn(),Tf(),Mr()&&ee.started&&!ee.ended&&Pr(!0)});Be.flashlight.classList.add("on");Cr();Af();
