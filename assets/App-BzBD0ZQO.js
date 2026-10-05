const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-D2jqCs_E.js","assets/index.esm-5hTPqsnb.js","assets/engine-CO6MNU1C.js","assets/accountDeletionRecovery-fvMTc-ZG.js","assets/checkpointCodec-CtcDVfT_.js","assets/accountDeletionRecovery-B6-itbSk.css","assets/towerStructures-BDd081np.js","assets/gameHost-CS01NhuW.js","assets/gameStorageScope-5jy167aW.js","assets/gameHost-ddLCKsNx.css","assets/loginProgressRuntime-5X1ycbwE.js","assets/gameArchive-DK_-X-LZ.js","assets/session-BCB1KGsq.js","assets/session-CwnimWgw.css","assets/accountRecovery-BmyDIZTE.js","assets/accountRepositories-BFge79xE.js","assets/localGameStore-geWoDKzL.js","assets/sharedRepository-DNlSOiEO.js","assets/cloudActions-6nEk61yL.js","assets/cloudDatabase-BFFXrDVW.js","assets/index.esm-D8oeDOV7.js","assets/firestoreCheckpoint-DzLFhad6.js","assets/autoSyncRuntime-CwiaPM5I.js","assets/signOutBackup-DflnU7vY.js","assets/loginBackupRecovery-BMmH1Vac.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,_ as n,f as r,g as i,p as a,v as o,y as s}from"./accountDeletionRecovery-fvMTc-ZG.js";import{$ as c,$n as l,A as u,An as d,Ar as f,B as p,Br as m,C as h,Cn as g,Ct as _,D as v,Dn as y,E as b,En as x,Et as S,F as C,Fn as w,Fr as T,Gn as E,Gr as D,H as O,I as k,In as A,Ir as j,J as ee,Jn as M,Jr as te,K as N,Kn as ne,Kr as P,L as re,Ln as ie,Lr as ae,M as F,Mn as oe,Mt as se,N as I,Nn as L,Nt as ce,O as R,Ot as le,P as z,Pn as ue,Q as de,Qn as B,Qr as fe,R as pe,Rn as me,Rr as he,S as ge,Sn as _e,St as ve,T as ye,Tn as be,Tt as xe,U as Se,Un as Ce,Ur as we,V as Te,Vn as Ee,W as V,Wn as De,Wr as Oe,X as ke,Xn as Ae,Xr as je,Y as H,Yn as Me,Yr as Ne,Z as Pe,Zn as Fe,Zr as Ie,_ as Le,_n as Re,_r as ze,_t as Be,ar as Ve,at as U,b as He,br as Ue,bt as We,c as Ge,cr as Ke,ct as qe,d as Je,dn as Ye,dr as Xe,dt as Ze,er as Qe,et as $e,f as et,fn as tt,fr as nt,ft as rt,g as it,gn as at,gr as ot,gt as st,h as ct,hn as lt,hr as ut,ht as dt,ir as ft,it as pt,j as mt,jn as ht,k as gt,kn as _t,l as vt,ln as yt,lr as bt,lt as xt,mn as St,mt as Ct,nr as wt,nt as Tt,o as Et,or as Dt,ot as Ot,p as kt,pr as At,pt as jt,q as Mt,qn as Nt,rr as Pt,rt as Ft,sr as It,st as Lt,tr as Rt,tt as zt,u as Bt,un as Vt,ur as Ht,ut as Ut,v as Wt,vr as Gt,vt as Kt,w as qt,wn as Jt,wt as Yt,x as Xt,xr as Zt,xt as Qt,y as $t,yt as en,zn as W,zr as tn}from"./gameHost-CS01NhuW.js";import{$ as nn,A as rn,C as an,D as G,E as on,F as sn,G as cn,H as ln,J as un,L as dn,O as fn,P as pn,Q as mn,T as hn,U as gn,W as _n,Y as vn,Z as yn,_t as bn,at as xn,ct as Sn,dt as Cn,et as wn,ft as Tn,gt as En,ht as Dn,k as On,m as kn,mt as An,n as jn,ot as Mn,pt as Nn,s as Pn,t as Fn,vt as In,w as Ln,x as Rn,z as zn}from"./towerStructures-BDd081np.js";/* empty css                     */import{n as Bn,o as Vn,r as Hn,t as Un}from"./nativeGoogleSignIn-Cp5WVpTN.js";import{t as Wn}from"./gameStorageScope-5jy167aW.js";import{n as Gn,r as Kn,t as qn}from"./localGameStore-geWoDKzL.js";import{n as Jn}from"./checkpointCodec-CtcDVfT_.js";var K=t(),Yn=[`bell-enter`,`bell-select`,`bell-cover`,`bell-swap`,`bell-prompt`,`bell-found`,`bell-miss`],Xn=e=>Yn.includes(e),Zn=Math.PI*2;function Qn(e,t){let n=e===`bell-miss`?1.25:e===`bell-found`?.95:e===`bell-enter`?.9:.42,r=new Float32Array(Math.ceil(t*n)),i=0,a=7413,o=0,s={"bell-enter":146.83,"bell-select":220,"bell-cover":98,"bell-swap":180,"bell-prompt":293.66,"bell-found":293.66,"bell-miss":155.56}[e];for(let c=0;c<r.length;c++){let l=c/t,u=l/n,d=Math.min(1,l/.035)*Math.max(0,1-u)**1.7;a=Math.imul(a,1664525)+1013904223>>>0,o=o*.96+(a/4294967295*2-1)*.04;let f=e===`bell-miss`?s*(1-.38*u)*(1+.009*Math.sin(Zn*4*l)):e===`bell-found`?s*(u<.28?1:u<.55?1.25:1.5):s;i+=Zn*f/t;let p=Math.sin(i)*.65+Math.sin(i*2)*.2+Math.sin(i*3)*.1,m=e===`bell-swap`?o*1.8+Math.sin(i)*.18:e===`bell-cover`?p*.6+o*.8:e===`bell-miss`?p+Math.sin(i*1.006)*.15:p+Math.sin(i*2.76)*.08;r[c]=m*d*(e===`bell-swap`?.12:.22)}return r}function $n(e=22050){let t=Math.round(24*e),n=[new Float32Array(t),new Float32Array(t)],r=[[146.83,174.61,220],[130.81,174.61,220],[130.81,164.81,196],[110,146.83,164.81]],i=(r,i,a,o,s,c)=>{for(let l=0;l<i*e;l++){let u=l/e,d=u/i,f=(Math.round(r*e)+l)%t,p=c?Math.min(1,u/.012)*Math.exp(-4*d)*(1-d):Math.sin(Math.PI*d)**2,m=Zn*a*u,h=Math.sin(m)*.7+Math.sin(m*2+.08*Math.sin(Zn*.7*u))*.16+Math.sin(m*3)*.045;n[0][f]+=h*p*o*Math.sqrt((1-s)/2),n[1][f]+=h*p*o*Math.sqrt((1+s)/2)}};for(let e=0;e<4;e++){let t=r[e];t.forEach((t,n)=>i(e*6,8,t/2,.075,(n-1)*.6,!1));for(let n=0;n<8;n++)i(e*6+n*.75,1.4,t[[0,2,1,2,0,1,2,1][n]]*2,.065,n%2?.4:-.4,!0);i(e*6,1.8,55,.09,0,!0),i(e*6+3,1.2,73.415,.04,0,!0)}return[...n]}var er=[`siege-enter`,`siege-hit`,`siege-miss`,`siege-push`,`siege-clear`,`siege-blast`],tr=e=>er.includes(e);function nr(e,t){if(e===`siege-blast`)return rr(t);let n=e===`siege-clear`?1.4:e===`siege-enter`?1.2:.65,r=new Float32Array(Math.ceil(n*t)),i=0,a=81537,o=0;for(let s=0;s<r.length;s++){let c=s/t,l=c/n;a=Math.imul(a,1664525)+1013904223>>>0,o=.9*o+.1*(a/4294967295*2-1);let u=e===`siege-hit`||e===`siege-clear`;i+=Math.PI*2*(u?98:65)*(1+.8*Math.exp(-c*30))/t;let d=Math.sin(i)*Math.exp(-c*7)+o*.8*Math.exp(-c*22),f=u?(Math.sin(c*2*Math.PI*196)+.45*Math.sin(c*2*Math.PI*293.66))*.22*Math.exp(-c*2):0;r[s]=(d*.45+f)*Math.min(1,c/.006)*(1-l)**1.5*.7}return r}function rr(e){let t=1.15,n=new Float32Array(Math.ceil(t*e)),r=97291,i=0,a=0,o=1-Math.exp(-2*Math.PI*650/e);for(let s=0;s<n.length;s++){let c=s/e;r=Math.imul(r,1664525)+1013904223>>>0;let l=r/4294967295*2-1;i+=o*(l-i),a+=2*Math.PI*(45+80*Math.exp(-c*18))/e;let u=Math.sin(a)*Math.exp(-c*9)*.42,d=i*Math.exp(-c*4)*.68,f=l*Math.max(0,Math.sin(c*2*Math.PI*31))*Math.exp(-c*7)*.12,p=Math.min(1,c/.007)*(1-c/t)**2;n[s]=(u+d+f)*p*.62}return n}function ir(e=22050){let t=Math.round(9.6*e),n=new Float32Array(t),r=new Float32Array(t),i=nr(`siege-push`,e);for(let a=0;a<16;a++)for(let o=0;o<i.length;o++){let s=(Math.round(a*.6*e)+o)%t,c=i[o]*(a%4==0?.55:.25);n[s]+=c,r[s]+=c}for(let i=0;i<t;i++){let t=i/e,a=[73.415,65.406,58.27,65.406][Math.floor(t/2.4)],o=Math.sin(t%2.4*Math.PI/2.4)**2,s=(Math.sin(2*Math.PI*a*t)+.3*Math.sin(2*Math.PI*a*1.5*t))*.06*o;n[i]+=s,r[i]+=s*.94}return[n,r]}var ar=e=>e===`game`||e===`bells`||e===`siege`,or={game:40},sr=(e,t)=>Math.min(t.duration,or[e]??t.duration),cr={intro:`./assets/audio/treasury-intro-v1.m4a`,game:`./assets/audio/treasury-game-loop-v1.m4a`,dragon:`./assets/audio/treasury-dragon-v1.m4a`},lr=class{ctx;output;buffers=new Map;loading=new Set;failed=new Set;active=null;retiring=new Set;track=null;offset=0;suspended=!1;muted=!1;ducked=!1;disposed=!1;constructor(e,t){this.ctx=e,this.output=t}setTrack(e,t){this.disposed||(e!==this.track&&(this.fadeOut(),this.track=e,this.offset=0),t!==void 0&&Number.isFinite(t)&&(this.offset=Math.max(0,t),this.active&&Math.abs(this.position()-this.offset)>.3&&this.stopCurrent()),e&&!this.buffers.has(e)&&this.load(e),this.refresh())}async load(e){if(!(this.loading.has(e)||this.failed.has(e))){this.loading.add(e);try{if(e===`bells`||e===`siege`){let t=e===`siege`?ir():$n(),n=this.ctx.createBuffer(2,t[0].length,22050);t.forEach((e,t)=>n.getChannelData(t).set(e)),this.buffers.set(e,n),this.refresh();return}let t=await fetch(cr[e]);if(!t.ok)throw Error(`Music asset unavailable`);let n=await t.arrayBuffer();if(this.disposed)return;let r=await this.ctx.decodeAudioData(n);if(this.disposed)return;this.buffers.set(e,r),this.refresh()}catch{this.disposed||this.failed.add(e)}finally{this.loading.delete(e)}}}setSuspended(e){e!==this.suspended&&(e&&this.freeze(),this.suspended=e,this.refresh())}setMuted(e){e!==this.muted&&(e&&this.freeze(),this.muted=e,this.refresh())}setDucked(e){this.ducked=e,this.active&&this.ramp(this.active,this.volume(),.12)}volume(){return(this.track===`siege`?.45:this.track===`bells`||this.track===`game`?.38:.8)*(this.ducked?.23:1)}position(){if(!this.active)return this.offset;let e=this.active.offset+Math.max(0,this.ctx.currentTime-this.active.started),t=this.buffers.get(this.active.track);return ar(this.active.track)&&t?e%sr(this.active.track,t):e}ramp(e,t,n){let r=e.gain.gain,i=this.ctx.currentTime;r.cancelScheduledValues(i),r.setValueAtTime(r.value,i),r.linearRampToValueAtTime(t,i+n)}cleanup(e,t=!0){if(e.source.onended=null,t)try{e.source.stop()}catch{}e.source.disconnect(),e.gain.disconnect(),this.retiring.delete(e),this.active===e&&(this.active=null)}stopCurrent(){this.active&&this.cleanup(this.active)}fadeOut(){for(let e of[...this.retiring])this.cleanup(e);let e=this.active;if(e){this.active=null,this.retiring.add(e),this.ramp(e,0,.22);try{e.source.stop(this.ctx.currentTime+.23)}catch{this.cleanup(e)}}}freeze(){this.offset=this.position(),this.stopCurrent();for(let e of[...this.retiring])this.cleanup(e)}refresh(){if(this.disposed||this.muted||this.suspended||!this.track||this.active||this.ctx.state!==`running`)return;let e=this.buffers.get(this.track);if(!e||!ar(this.track)&&this.offset>=e.duration)return;let t=this.ctx.createBufferSource(),n=this.ctx.createGain(),r=ar(this.track)?this.offset%sr(this.track,e):this.offset;t.buffer=e,t.loop=ar(this.track),t.loop&&(t.loopEnd=sr(this.track,e)),t.connect(n),n.connect(this.output),n.gain.value=0;let i={source:t,gain:n,track:this.track,offset:r,started:this.ctx.currentTime};this.active=i,t.onended=()=>{this.active===i&&(this.offset=ar(i.track)?this.position():e.duration),this.cleanup(i,!1)};try{t.start(0,r),this.ramp(i,this.volume(),.3)}catch{this.cleanup(i)}}getState(){return{track:this.track,playing:this.active?.track??null,offset:this.position(),voices:Number(!!this.active)+this.retiring.size,suspended:this.suspended,muted:this.muted,ducked:this.ducked,loaded:[...this.buffers.keys()],failed:[...this.failed]}}dispose(){this.disposed||(this.disposed=!0,this.freeze(),this.buffers.clear())}};function ur(e){let t=new Float32Array(Math.ceil(e*1.15)),n=7123,r=0,i=0;for(let a=0;a<t.length;a++){let o=a/e;n=Math.imul(n,1664525)+1013904223>>>0,r+=(n/4294967295*2-1-r)*.06,i+=2*Math.PI*(42+48*Math.exp(-o*6))/e;let s=Math.min(1,o/.012),c=Math.min(1,(1.15-o)/.15);t[a]=s*c*(.09*Math.sin(i)*Math.exp(-o*5)+.12*r*Math.exp(-o*3))}return t}var dr=[`wheel-start`,`wheel-tick`,`wheel-stop`,`wheel-jackpot`,`wheel-pour`,`wheel-done`],fr=e=>dr.includes(e),pr=Math.PI*2;function mr(e,t){let n={"wheel-start":.9,"wheel-tick":.07,"wheel-stop":1.1,"wheel-jackpot":2.2,"wheel-pour":.5,"wheel-done":.7}[e],r=new Float32Array(Math.ceil(n*t)),i=51937,a=0,o=0,s=0,c=e===`wheel-pour`?[0,.07,.13,.22,.3,.41].map((e,t)=>({at:e,freq:[1864,2217,2489,2093,2794,2349][t]})):[];for(let l=0;l<r.length;l++){let u=l/t,d=u/n;i=Math.imul(i,1664525)+1013904223>>>0,a=.88*a+.12*(i/4294967295*2-1);let f=0;if(e===`wheel-start`)o+=pr*(55+70*d)/t,f=Math.sin(o)*.4*Math.exp(-u*2.2)+Math.sin(o*2.01)*.14*Math.exp(-u*3)+a*.5*Math.exp(-u*18);else if(e===`wheel-tick`)o+=pr*1250/t,f=(Math.sin(o)*.35+a*.6)*Math.exp(-u*90);else if(e===`wheel-stop`)o+=pr*220/t,s+=pr*(62+30*Math.exp(-u*20))/t,f=(Math.sin(o)*.5+Math.sin(o*2.76)*.22+Math.sin(o*5.4)*.1)*Math.exp(-u*4.5)+Math.sin(s)*.35*Math.exp(-u*9)+a*.4*Math.exp(-u*40);else if(e===`wheel-jackpot`){let e=[587.33,739.99,880].map((e,t)=>{let n=t*.22,r=u-n;return r<0?0:(Math.sin(pr*e*r)*.55+Math.sin(pr*e*2.4*r)*.18+Math.sin(pr*e*.5*r)*.12)*Math.exp(-r*1.6)});f=(e[0]+e[1]+e[2])*.34*(1+.06*Math.sin(pr*5.5*u))}else if(e===`wheel-pour`){for(let e of c){let t=u-e.at;t>=0&&(f+=Math.sin(pr*e.freq*t)*.22*Math.exp(-t*26))}f+=a*.06*Math.exp(-u*6)}else o+=pr*(d<.45?392:293.66)/t,f=(Math.sin(o)*.4+Math.sin(o*2)*.12)*Math.exp(-u*3.2);let p=Math.min(1,u/.004)*Math.max(0,1-d)**(e===`wheel-jackpot`?.8:1.4);r[l]=Math.max(-1,Math.min(1,f*p*(e===`wheel-tick`?.5:.8)))}return r}var hr=[{id:`soft`,label:`柔和落槽`,sample:`coin-soft`,file:`./assets/audio/coin-soft-slot-v1.wav`},{id:`dry`,label:`乾脆短點`,sample:`coin-dry-click`,file:`./assets/audio/coin-dry-click-v1.wav`},{id:`metal`,label:`原金屬聲（低音量）`,sample:`coin-drop`,file:`./assets/audio/coin-insert-v2.wav`}],gr=.32,_r={sound:`soft`,volume:.5},vr=`crusader.coin-audio.v1`,yr=e=>hr.some(t=>t.id===e),br=e=>Number.isFinite(e)?Math.max(0,Math.min(1,e)):_r.volume;function xr(){try{let e=JSON.parse(localStorage.getItem(vr)??`null`);return{sound:yr(e?.sound)?e.sound:_r.sound,volume:typeof e?.volume==`number`?br(e.volume):_r.volume}}catch{return{..._r}}}function Sr(e){try{localStorage.setItem(vr,JSON.stringify(e))}catch{}}var Cr={"coin-drop":`./assets/audio/coin-insert-v2.wav`,"coin-collect":`./assets/audio/coin-collect.wav`,"tower-ready":`./assets/audio/tower-ready.wav`,"coin-big-win":`./assets/audio/coin-big-win-c.m4a`,"coin-soft":`./assets/audio/coin-soft-slot-v1.wav`,"coin-dry-click":`./assets/audio/coin-dry-click-v1.wav`},wr=6,Tr=class{ctx=null;masterGain=null;buffers=new Map;loadPromise=null;coinSound=_r.sound;coinVolume=_r.volume;loadStarted=!1;voices=new Map;muted=!1;disposed=!1;music=null;musicTrack=null;musicPosition;musicSuspended=!1;dropVariant=0;syncContextState=()=>{if(this.disposed||!this.ctx)return;let e=this.ctx.state===`running`;e||this.stopAll(),this.music?.setSuspended(this.musicSuspended||!e),e&&this.music?.refresh()};unlock(){if(!this.disposed){if(!this.ctx)try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=+!this.muted,this.masterGain.connect(this.ctx.destination),this.music=new lr(this.ctx,this.masterGain),this.ctx.onstatechange=this.syncContextState,this.music.setMuted(this.muted),this.music.setSuspended(this.musicSuspended||this.ctx.state!==`running`),this.music.setTrack(this.musicTrack,this.musicPosition)}catch{this.ctx=null,this.masterGain=null;return}if(this.syncContextState(),this.ctx.state!==`running`&&this.ctx.state!==`closed`){let e=this.ctx;e.resume().then(()=>{!this.disposed&&this.ctx===e&&this.syncContextState()}).catch(()=>{})}this.loadStarted||(this.loadStarted=!0,this.loadPromise=this.loadAll().catch(()=>{}))}}setMuted(e){this.muted=e,this.masterGain&&(this.masterGain.gain.value=+!e),e&&this.stopAll(),this.music?.setMuted(e)}setCoinSound(e){yr(e)&&e!==this.coinSound&&(this.stopCoinDrop(),this.coinSound=e)}setCoinVolume(e){this.coinVolume=br(e);let t=[...this.voices.values()].some(e=>e.name===`coin-big-win`);this.voices.forEach(e=>{e.name===`coin-drop`&&(e.gain.gain.value=this.coinVolume*gr*(t?.3:1))})}stopCoinDrop(){for(let[e,t]of this.voices)t.name===`coin-drop`&&this.stopVoice(e)}async prepareCoinSound(){if(!this.ctx||this.disposed)return!1;if(this.buffers.has(hr.find(e=>e.id===this.coinSound).sample))return!0;let e;try{return await Promise.race([this.loadPromise,new Promise(t=>{e=setTimeout(t,4e3)})]),!this.disposed&&this.buffers.has(hr.find(e=>e.id===this.coinSound).sample)}finally{clearTimeout(e)}}setMusic(e,t){this.musicTrack=e,this.musicPosition=t,this.music?.setTrack(e,t)}setMusicSuspended(e){this.musicSuspended=e,this.music?.setSuspended(e||this.ctx?.state!==`running`)}async loadAll(){let e=this.ctx;e&&await Promise.all(Object.keys(Cr).map(async t=>{try{let n=await fetch(Cr[t]);if(!n.ok)return;let r=await n.arrayBuffer();if(this.disposed)return;let i=await e.decodeAudioData(r);if(this.disposed)return;this.buffers.set(t,i)}catch{}}))}play(e){if(this.disposed||this.muted||!this.ctx||!this.masterGain||this.ctx.state!==`running`||e===`coin-drop`&&this.coinVolume===0)return!1;if((e===`tower-collapse`||Xn(e)||tr(e)||fr(e))&&!this.buffers.has(e))try{let t=e===`tower-collapse`?ur(this.ctx.sampleRate):fr(e)?mr(e,this.ctx.sampleRate):tr(e)?nr(e,this.ctx.sampleRate):Qn(e,this.ctx.sampleRate),n=this.ctx.createBuffer(1,t.length,this.ctx.sampleRate);n.getChannelData(0).set(t),this.buffers.set(e,n)}catch{return!1}let t=this.buffers.get(e===`coin-drop`?hr.find(e=>e.id===this.coinSound).sample:e);if(!t)return!1;let n=[...this.voices.values()].some(e=>e.name===`coin-big-win`);if(n&&e!==`coin-drop`)return!1;if(e===`coin-drop`){let e=[...this.voices].filter(([,e])=>e.name===`coin-drop`);for(;e.length>=2;)this.stopVoice(e.shift()[0])}if(e===`coin-big-win`)this.stopAll();else if(this.voices.size>=wr)return!1;let r=this.ctx.createBufferSource(),i=this.ctx.createGain();r.buffer=t,e===`coin-drop`&&(r.playbackRate.value=[1,.97,1.035,1.015][this.dropVariant++%4]),i.gain.value=e===`coin-drop`?this.coinVolume*gr*(n?.3:1):1,r.connect(i),i.connect(this.masterGain),this.voices.set(r,{name:e,gain:i}),r.onended=()=>{this.voices.delete(r)&&(r.disconnect(),i.disconnect(),e===`coin-big-win`&&this.music?.setDucked(!1))};try{return r.start(),e===`coin-big-win`&&this.music?.setDucked(!0),!0}catch{return this.stopVoice(r),!1}}stopVoice(e){let t=this.voices.get(e);if(t){this.voices.delete(e),e.onended=null;try{e.stop()}catch{}e.disconnect(),t.gain.disconnect()}}stopAll(){for(let e of this.voices.keys())this.stopVoice(e);this.music?.setDucked(!1)}getPlaybackState(){return{loaded:[...this.buffers.keys()],playing:[...this.voices.values()].map(e=>e.name),contextState:this.ctx?.state??`locked`,muted:this.muted,music:this.music?.getState()??null,coinSound:this.coinSound,coinVolume:this.coinVolume,coinGain:this.coinVolume*gr}}dispose(){this.disposed=!0,this.stopAll(),this.music?.dispose(),this.music=null,this.ctx&&(this.ctx.onstatechange=null),this.ctx?.close().catch(()=>{}),this.ctx=null,this.masterGain=null,this.buffers.clear(),this.loadStarted=!1}},Er=(e,t)=>t?`${t.id}:${t.phase}:${t.bellSlots.join()}:${t.swap?.a}:${t.swap?.b}`:e?`choice:${e.id}`:``,Dr=class{previous=``;pendingResult=null;reset(e,t){this.previous=Er(e,t),this.pendingResult=null}observe(e,t){let n=Er(e,t),r=[];return n!==this.previous&&(this.previous=n,this.pendingResult=null,!t&&e?r.push(`bell-enter`):t?.phase===`show`?r.push(`bell-select`):t?.phase===`cover`?r.push(`bell-cover`):t?.phase===`shuffle`?r.push(`bell-swap`):t?.phase===`guess`?r.push(`bell-prompt`):t?.phase===`reveal`&&(this.pendingResult=t.id)),t?.phase===`reveal`&&this.pendingResult===t.id&&t.elapsed>=.24&&t.won!==null&&(r.push(t.won?`bell-found`:`bell-miss`),this.pendingResult=null),r}},Or=s.siege.bomb,kr=e=>Math.max(0,Math.min(1,e)),Ar=e=>{let t=kr(e);return t*t*(3-2*t)},jr=e=>Math.max(1,Math.min(Or.maxCount,Math.floor(e))),Mr=e=>Or.anticipationSeconds+Or.dropSeconds+e*Or.staggerSeconds;function Nr(e,t=!1){if(!e||e.phase===`rhythm`)return[];let n=e.phase===`cleared`;return Array.from({length:jr(e.hits)},(r,i)=>{let a=Or.anticipationSeconds+i*Or.staggerSeconds,o=e.elapsed-Mr(i),s=n?1:Ar(o/Or.smokeBloomSeconds);return{index:i,bomb:!n&&o<0&&(t||e.elapsed>=a),drop:t?1:kr((e.elapsed-a)/Or.dropSeconds),blast:!t&&!n&&o>=0&&o<Or.blastSeconds,blastProgress:kr(o/Or.blastSeconds),smoke:s*(n?1-Ar(e.elapsed/Or.fadeSeconds):1),bloom:s,drift:t||n?0:Math.max(0,o)*Or.smokeDriftRate}})}var Pr=class{id=null;consumed=0;elapsed=0;reset(e){this.id=e?.id??null,this.elapsed=e?.phase===`push`?e.elapsed:0,this.consumed=e?.phase===`push`?this.due(e):0}due(e){let t=0;for(;t<jr(e.hits)&&e.elapsed>=Mr(t);)t++;return t}observe(e){if(!e||e.phase!==`push`||(this.id!==e.id&&(this.id=e.id,this.consumed=0,this.elapsed=0),e.elapsed<this.elapsed))return this.reset(e),[];this.elapsed=e.elapsed;let t=this.due(e),n=[];for(let r=this.consumed;r<t;r++)e.elapsed-Mr(r)<=s.siege.bomb.audioFreshSeconds&&n.push(`siege-blast`);return this.consumed=t,n}},Fr=class{id=null;phase=`idle`;elapsed=0;slot=-1;pourCues=0;reset(e){this.id=e?.id??null,this.phase=e?.phase??`idle`,this.elapsed=e?.elapsed??0,this.slot=e&&e.phase===`spinning`?bn(e.angle):-1,this.pourCues=e&&e.phase===`pouring`?Math.floor(e.poured/10)+ +(e.poured>0):0}observe(e){if(!e)return this.reset(null),[];let t=[],n=e.id!==this.id;if(n&&e.phase===`idle`||!n&&e.phase===this.phase&&e.elapsed<this.elapsed)return this.reset(e),[];if(n&&(e.phase===`spinning`&&e.elapsed<.5&&t.push(`wheel-start`),this.id=e.id,this.phase=`spinning`,this.slot=bn(e.angle),this.pourCues=0),e.phase===`spinning`){let r=bn(e.angle);r!==this.slot&&!n&&t.push(`wheel-tick`),this.slot=r}if(e.phase!==this.phase&&(e.phase===`stopped`&&this.phase===`spinning`&&t.push(e.prize===300?`wheel-jackpot`:`wheel-stop`),e.phase===`settling`&&this.phase===`pouring`&&t.push(`wheel-done`),e.phase===`pouring`&&(this.pourCues=0),this.phase=e.phase),e.phase===`pouring`){let n=e.poured>0?Math.floor((e.poured-1)/10)+1:0;n>this.pourCues&&(t.push(`wheel-pour`),this.pourCues=n)}return this.elapsed=e.elapsed,t}},q=n(),Ir=o({...s.customProperties,...s.siege.css});function Lr({frame:e,suspended:t,onStrike:n,onAudioUnlock:r}){let i=(0,K.useRef)(null),a=(0,K.useRef)(null),o=(0,K.useRef)({frame:e,suspended:t,at:performance.now()});return o.current={frame:e,suspended:t,at:performance.now()},(0,K.useEffect)(()=>{let e=()=>{let e=o.current;if(!i.current)return;let t=e.frame.elapsed+(e.suspended?0:Math.min(s.siege.interpolationLimit,(performance.now()-e.at)/1e3));i.current.style.left=`${On.needle(t)*100}%`};return je.ticker.add(e),()=>je.ticker.remove(e)},[]),(0,K.useEffect)(()=>{if(!a.current||t||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let n=je.fromTo(a.current,{scale:e.lastHit?s.siege.hitScale:1},{scale:1,duration:s.siege.hitSeconds,ease:`power2.out`});return()=>{n.kill()}},[e.revision,t]),e.phase===`rhythm`?(0,q.jsxs)(`section`,{className:`siege-panel`,style:Ir,"data-phase":e.phase,"data-suspended":t,"aria-label":`攻城疏通任務`,children:[(0,q.jsxs)(`header`,{children:[(0,q.jsx)(`span`,{className:`siege-panel__seal`,"aria-hidden":`true`,children:`✠`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`small`,{children:`免費疏通 · 不扣幣`}),(0,q.jsx)(`h2`,{children:`攻城戰鼓`})]}),(0,q.jsx)(`span`,{className:`siege-panel__stars`,"aria-label":`命中 ${e.hits} 次`,children:[0,1,2].map(t=>(0,q.jsx)(`i`,{"data-lit":t<e.hits,children:`◆`},t))})]}),(0,q.jsxs)(`div`,{className:`siege-panel__play`,children:[(0,q.jsxs)(`button`,{ref:a,type:`button`,className:`siege-panel__drum`,disabled:t,"aria-label":`敲響戰鼓`,onPointerDown:()=>r?.(),onClick:()=>{r?.(),n(e.id,e.attempt)},children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:`✠`}),(0,q.jsx)(`b`,{children:`敲鼓`})]}),(0,q.jsxs)(`div`,{className:`siege-panel__timing`,children:[(0,q.jsx)(`p`,{children:`指針進入金色區時敲鼓`}),(0,q.jsxs)(`div`,{className:`siege-panel__track`,"aria-hidden":`true`,children:[(0,q.jsx)(`b`,{style:{left:`${(.5-fn.hitWindow)*100}%`,width:`${fn.hitWindow*200}%`}}),(0,q.jsx)(`span`,{ref:i})]}),(0,q.jsxs)(`p`,{children:[(0,q.jsxs)(`strong`,{children:[`剩餘 `,3-e.attempt,` 次`]}),` · `,Math.max(0,Math.ceil(fn.attemptSeconds-e.elapsed)),` 秒`]}),(0,q.jsx)(`p`,{children:e.lastHit===null?`等待敲鼓`:`第 ${e.attempt} 拍：${e.lastHit?`命中`:`錯過`}`})]})]}),(0,q.jsx)(`p`,{className:`siege-panel__note`,children:`命中可強化推進；未操作自動使用基本推進。`}),(0,q.jsx)(`footer`,{children:`普通幣以前口實收計分，演出本身不加分。`})]}):(0,q.jsx)(`div`,{className:`siege-panel__status`,style:Ir,role:`status`,"aria-live":`polite`,"data-phase":e.phase,children:e.phase===`cleared`?`空間已釋放`:`${e.hits?`強化疏通`:`基本疏通`}，${jr(e.hits)} 顆炸彈，疏通中。`})}var Rr=Object.freeze({threshold:100,windowMs:3e3,quietGapMs:1200}),zr=class{receipts=[];total=0;lastAt=null;celebrated=!1;record(e,t){if(!Number.isSafeInteger(e)||e<=0||!Number.isFinite(t)||t<0)return!1;for(this.lastAt!==null&&(t<this.lastAt||t-this.lastAt>=Rr.quietGapMs)&&this.reset(),this.lastAt=t;this.receipts.length&&this.receipts[0].at<t-Rr.windowMs;)this.total-=this.receipts.shift().count;let n=this.receipts[this.receipts.length-1];return n?.at===t?n.count+=e:this.receipts.push({at:t,count:e}),this.total+=e,!this.celebrated&&this.total>=Rr.threshold&&(this.celebrated=!0,!0)}reset(){this.receipts=[],this.total=0,this.lastAt=null,this.celebrated=!1}},Br=class{isDisabled;onStart;onEnd;onRelease;owner=null;constructor(e,t,n,r){this.isDisabled=e,this.onStart=t,this.onEnd=n,this.onRelease=r}press(e){return this.isDisabled()||this.owner?!1:(this.owner=e,this.onStart(),!0)}release(e){this.matches(e)&&(this.owner=null,this.isDisabled()?this.onEnd():this.onRelease?this.onRelease(e):this.onEnd())}matches(e){return this.owner?.kind===`pointer`&&e.kind===`pointer`?this.owner.id===e.id:this.owner?.kind===`keyboard`&&e.kind===`keyboard`&&this.owner.key===e.key}cancelSource(e){this.matches(e)&&this.cancel()}cancel(){this.owner&&(this.owner=null,this.onEnd())}},Vr={"feature-wait":`請先完成選塔或等候護欄收回；沒有扣幣。`,"no-balance":`金幣已用盡，開始新局吧！`,"board-full":`場面已滿，請稍候金幣清空。`,"invalid-position":`落點無效，請重新選擇。`,"drop-blocked":`落點暫時被金幣擋住，請稍等或改變落點。`};function Hr(e){if(e.error)return{kind:`unavailable`,symbol:`!`,label:`暫時無法進入寶庫`};if(e.loading)return{kind:`unavailable`,symbol:`…`,label:`正在準備金幣與機台`};if(e.paused)return{kind:`unavailable`,symbol:`—`,label:`返回遊戲後自動接續`};if(e.settingsOpen)return{kind:`unavailable`,symbol:`—`,label:`設定與玩法`};let t=e.feedback?.sequence===e.dismissedSequence?void 0:e.feedback;return e.wallet<=0&&!e.freeRemaining&&(t?.kind!==`blocked`||t.reason!==`no-balance`)?{kind:`unavailable`,symbol:`—`,label:Vr[`no-balance`]}:t?.kind===`accepted`?{kind:`accepted`,symbol:`✓`,label:`已投幣`}:t?.kind===`aim-only`?{kind:`aim-only`,symbol:`↔`,label:`僅瞄準・未投幣`}:t?.kind===`blocked`?{kind:`blocked`,symbol:`!`,label:`受阻・未扣幣`,detail:Vr[t.reason]}:{kind:`idle`,symbol:`↔`,label:e.rearSweepEnabled?`後方按住滑投・其餘盤面拖曳轉鏡頭`:`點擊幣床投幣・拖曳轉動鏡頭`}}function Ur(e,t){return e&&t?.kind===`blocked`&&t.reason===`drop-blocked`}var Wr=class{changed;visible=!1;active=!1;timer;constructor(e){this.changed=e}update(e){e!==this.active&&(this.active=e,this.timer!==void 0&&clearTimeout(this.timer),this.timer=void 0,this.visible=!1,e&&(this.timer=setTimeout(()=>{this.timer=void 0,this.active&&(this.visible=!0,this.changed())},800)))}dispose(){this.update(!1)}};function Gr(e,t){let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=je.context(()=>{!n.matches&&!document.hidden&&t()},e),i=()=>r.revert(),a=()=>{document.hidden&&i()};return n.addEventListener(`change`,i),document.addEventListener(`visibilitychange`,a),window.addEventListener(`blur`,i),()=>{n.removeEventListener(`change`,i),document.removeEventListener(`visibilitychange`,a),window.removeEventListener(`blur`,i),r.revert()}}function Kr(){let e=s.motion,t=s.interaction.feedbackPulseMs/1e3,n={scale:e.restScale,opacity:e.visibleOpacity},r=je.timeline({paused:!0}).fromTo(n,{scale:e.restScale,opacity:e.visibleOpacity},{scale:s.interaction.feedbackPulseScale,opacity:e.expiredOpacity,duration:t,ease:e.ringEase,immediateRender:!1}),i=!1;return{sample(t,a){let o=!i&&t>=0&&t<s.interaction.feedbackPulseMs;return o&&r.seek(t/1e3,!0),{active:o,scale:o&&!a?n.scale:e.restScale,opacity:o?a?e.visibleOpacity:n.opacity:e.expiredOpacity}},dispose(){i||(i=!0,r.kill())}}}function qr(e){let t=(0,K.useRef)(null),n=(0,K.useRef)(e.score),r=s.motion;return(0,K.useLayoutEffect)(()=>{if(!t.current)return;let e=t.current.querySelector(`.crusader-game__brand`),n=t.current.querySelector(`.crusader-game__console-inner`);return Gr(t.current,()=>{je.timeline({defaults:{duration:r.entranceSeconds,ease:r.ease}}).fromTo(e,{y:-r.entranceY},{y:r.restY},0).fromTo(n,{y:r.entranceY},{y:r.restY},0)})},[r]),(0,K.useLayoutEffect)(()=>{if(!t.current||e.feedbackKind!==`accepted`&&e.feedbackKind!==`blocked`)return;let n=t.current.querySelector(`.crusader-game__feedback-label`);if(n)return Gr(t.current,()=>{je.fromTo(n,{scale:e.feedbackKind===`accepted`?r.acceptedScale:r.blockedScale},{scale:r.restScale,duration:r.feedbackSeconds,ease:r.ease})})},[e.feedbackKind,e.sequence,r]),(0,K.useLayoutEffect)(()=>{let i=e.score>n.current;if(n.current=e.score,!t.current||!i||e.overlay||e.settingsOpen)return;let a=t.current.querySelector(`.crusader-game__stat--win strong`);return Gr(t.current,()=>{je.fromTo(a,{scale:r.collectScale},{scale:r.restScale,duration:r.collectSeconds,ease:r.ease})})},[e.score,e.overlay,e.settingsOpen,r]),(0,K.useLayoutEffect)(()=>{if(!t.current||!e.overlay&&!e.settingsOpen)return;let n=t.current.querySelector(e.settingsOpen?`.crusader-game__settings`:`.crusader-game__overlay-card`);return Gr(t.current,()=>{je.fromTo(n,{y:r.panelY},{y:r.restY,duration:r.panelSeconds,ease:r.ease})})},[e.overlay,e.settingsOpen,r]),t}function Jr({moving:e,disabled:t,onReset:n}){let r=!!(t||e);return(0,q.jsx)(`div`,{className:`camera-controls`,role:`group`,"aria-label":`遊戲視角`,"aria-busy":!!e,children:(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button camera-controls__reset`,disabled:r,title:`鏡頭回正`,"aria-label":`鏡頭回正`,onClick:()=>{r||n()},children:`回正`})})}function Yr({value:e,disabled:t,onChange:n}){let[r,i]=(0,K.useState)(!1),a=(0,K.useRef)(null),o=(0,K.useRef)(null),s=(0,K.useRef)(null),c=(0,K.useId)(),l=r&&!t;return(0,K.useEffect)(()=>{t&&i(!1)},[t]),(0,K.useEffect)(()=>{if(!l)return;s.current?.focus({preventScroll:!0});let e=e=>{e.target instanceof Node&&!a.current?.contains(e.target)&&i(!1)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[l]),(0,q.jsxs)(`div`,{ref:a,className:`speed-control`,onPointerDown:e=>e.stopPropagation(),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||i(!1)},onKeyDown:e=>{e.key===`Escape`&&l&&(e.preventDefault(),e.stopPropagation(),i(!1),o.current?.focus())},children:[(0,q.jsxs)(`button`,{ref:o,type:`button`,className:`speed-control__trigger`,disabled:t,"aria-label":`自動投幣速度 ${e} 倍`,"aria-expanded":l,"aria-controls":c,onClick:()=>{t||i(e=>!e)},children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:`⚡`}),(0,q.jsxs)(`span`,{children:[e,`×`]})]}),l&&(0,q.jsxs)(`div`,{id:c,className:`speed-control__panel`,role:`group`,"aria-label":`調整自動投幣速度`,children:[(0,q.jsxs)(`label`,{htmlFor:`${c}-range`,children:[`自動投幣速度 `,(0,q.jsxs)(`output`,{children:[e,`×`]})]}),(0,q.jsx)(`input`,{ref:s,id:`${c}-range`,type:`range`,min:`1`,max:`3`,step:`0.25`,value:e,"aria-label":`自動投幣速度`,"aria-valuetext":`${e} 倍`,disabled:t,onChange:e=>{let r=Number(e.target.value);!t&&Number.isFinite(r)&&n(Math.max(1,Math.min(3,r)))}}),(0,q.jsxs)(`div`,{className:`speed-control__ticks`,"aria-hidden":`true`,children:[(0,q.jsx)(`span`,{children:`1×`}),(0,q.jsx)(`span`,{children:`2×`}),(0,q.jsx)(`span`,{children:`3×`})]})]})]})}function Xr({treasury:e,paidDropsPerKey:t,choice:n,bells:r,autoSelection:i,disabled:a,onChoose:o,onGuessBell:s}){let c=(0,K.useRef)(null),l=(0,K.useRef)(null);(0,K.useEffect)(()=>{n&&!a&&c.current?.querySelector(`button:not(:disabled)`)?.focus()},[n?.id,a]),(0,K.useEffect)(()=>{r&&!a&&(l.current?.querySelector(`button:not(:disabled)`)??l.current)?.focus()},[r?.id,r?.phase,a]),(0,K.useEffect)(()=>{i?.kind===`tower`?c.current?.focus():i?.kind===`bell`&&l.current?.focus()},[i?.kind,i?.eventId]);let u=i?.kind===`tower`&&i.eventId===n?.id?i:null,d=i?.kind===`bell`&&i.eventId===r?.id?i:null;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${G.art.background}`}),(0,q.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${G.art.metal}`}),e&&!r&&(0,q.jsxs)(`div`,{className:`treasury-feature-status`,"aria-label":`御庫鑰匙與護欄`,role:`status`,children:[(0,q.jsxs)(`span`,{children:[(0,q.jsxs)(`svg`,{className:`treasury-key-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,q.jsx)(`circle`,{cx:`8`,cy:`7`,r:`5`}),(0,q.jsx)(`path`,{d:`m11 11 9 9m-5-5 3-3m-1 5 3-3`})]}),`鑰匙 `,e.keys,` / 3`]}),e.phase===`active`?(0,q.jsxs)(`strong`,{children:[`聖盾護欄 · 免費 `,e.freeRemaining,` 次`]}):e.phase===`draining`?(0,q.jsx)(`strong`,{children:`免費已投完 · 護欄保留至完整推進`}):e.phase===`retracting`?(0,q.jsx)(`strong`,{children:`護欄收回中 · 未扣幣`}):(0,q.jsx)(`span`,{children:e.pendingKeys?`鑰匙待送出 ${e.pendingKeys} 把`:`送鑰匙進度 ${e.paidProgress}${t?` / ${t}`:``}`})]}),n&&(0,q.jsx)(`div`,{className:`treasury-choice-backdrop`,style:G.css,children:(0,q.jsx)(`div`,{ref:c,className:`treasury-choice`,role:`dialog`,"aria-modal":`true`,"aria-label":`選擇撞擊目標`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=c.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:(0,q.jsx)(`div`,{className:`treasury-choice-targets`,children:n.targets.map((e,t)=>(0,q.jsxs)(`button`,{type:`button`,className:`treasury-target`,"aria-label":`${[`左`,`中`,`右`][e.slot]}塔：塔內 ${e.coins} 枚，猜中才撞塔`,"data-auto-focus":u?.focusIndex===t||void 0,"data-auto-confirmed":u?.confirming&&u.selectedIndex===t||void 0,"aria-current":u?.confirming&&u.selectedIndex===t?`true`:void 0,disabled:a||!!u||!o,onClick:()=>o?.(n.id,e.towerId),children:[(0,q.jsx)(`span`,{className:`treasury-target-auto-mark`,"aria-hidden":`true`,children:`✓`}),(0,q.jsxs)(`span`,{className:`treasury-target-details`,children:[(0,q.jsxs)(`span`,{className:`treasury-target-count`,children:[`塔內 `,(0,q.jsx)(`b`,{children:e.coins}),` 枚`]}),(0,q.jsx)(`span`,{className:`treasury-target-rule`,children:`猜中才撞塔`})]})]},e.towerId))})})}),r&&(0,q.jsxs)(`div`,{ref:l,className:`dragon-bell-game`,"data-phase":r.phase,style:G.css,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dragon-bell-title`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=l.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:[(0,q.jsxs)(`div`,{className:`dragon-bell-caption`,"aria-live":`polite`,children:[(0,q.jsx)(`span`,{className:`dragon-bell-ordinal`,"aria-hidden":`true`,children:`II`}),(0,q.jsxs)(`h2`,{id:`dragon-bell-title`,children:[`三鐘尋龍 · `,{high:`高塔`,mid:`中塔`,low:`低塔`}[r.target.tier]]}),(0,q.jsx)(`p`,{className:r.phase===`show`?`dragon-bell-intro-hint`:void 0,children:r.phase===`show`?(0,q.jsxs)(q.Fragment,{children:[`記住 `,r.dragonCount,` 隻小龍的位置`,(0,q.jsxs)(`small`,{children:[G.showSeconds,` 秒後自動換位`]})]}):r.phase===`cover`?`鐘罩落下，請留意位置。`:r.phase===`shuffle`?`三鐘換位中，跟住小龍。`:r.phase===`guess`?`命中可獲得 ${r.target.coins.toLocaleString()} 枚金幣`:r.won?`找到小龍！接著撞塔，尚未入帳。`:`沒有找到小龍，本次不撞塔、不加分。`})]}),r.phase===`guess`&&(0,q.jsx)(`div`,{className:`dragon-bell-picks`,children:[`左`,`中`,`右`].map((e,t)=>(0,q.jsx)(`button`,{type:`button`,className:`dragon-bell-pick`,"aria-label":`選擇${e}鐘`,"data-auto-focus":d?.focusIndex===t||void 0,"data-auto-confirmed":d?.confirming&&d.selectedIndex===t||void 0,"aria-current":d?.confirming&&d.selectedIndex===t?`true`:void 0,disabled:a||!!d||!s,onClick:()=>s?.(r.id,t),children:(0,q.jsxs)(`span`,{className:`crusader-game__small-button`,children:[e,`鐘`]})},t))})]})]})}var Zr={collector:`collector.webp`,tower:`tower.webp`,dragon:`dragon.webp`,treasury:`treasury.webp`,"trial-pairs":`trial-pairs.webp`,"trial-bells":`trial-bells.webp`,"trial-lock":`trial-lock.webp`,"trial-path":`trial-path.webp`,"trial-mint":`trial-mint.webp`,"trial-stack":`trial-stack.webp`,"trial-seals":`trial-seals.webp`,"trial-orb":`trial-orb.webp`,"trial-mirrors":`trial-mirrors.webp`,"trial-vault":`trial-vault.webp`,"trial-mines":`trial-mines.webp`};function Qr({trophy:e}){return e===`crusader`?(0,q.jsxs)(`svg`,{className:`treasury-trophy`,"data-trophy":e,viewBox:`0 0 40 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{d:`M3 4 20 1 37 4 35 27Q31 40 20 46 9 40 5 27Z`,fill:`currentColor`,fillOpacity:`.12`}),(0,q.jsx)(`path`,{d:`M17 10h6v10h9v6h-9v13h-6V26H8v-6h9Z`})]}):(0,q.jsx)(`img`,{className:`treasury-trophy`,"data-trophy":e,src:`./assets/trophies/${Zr[e]}`,alt:``,loading:`lazy`,decoding:`async`,draggable:!1})}var $r=o(s.customProperties),ei={front:`前口收集`,dragon:`巨龍入帳`,hatch:`洞內流失`,side:`側落／盤外流失`},ti={crusader:`遠征盾徽`,collector:`前口初收`,tower:`高塔擊破`,dragon:`巨龍命中`,treasury:`御庫開啟`,"trial-pairs":`聖印對對牌`,"trial-bells":`鐘樓聖序`,"trial-lock":`王庫密鎖`,"trial-path":`聖光迴廊`,"trial-mint":`御庫鑄幣`,"trial-stack":`聖塔疊金`,"trial-seals":`騎士破印`,"trial-orb":`龍珠入庫`,"trial-mirrors":`聖光折鏡`,"trial-vault":`寶庫移陣`,"trial-mines":`龍穴探金`};function ni({name:e}){return(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e===`settings`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`circle`,{cx:`12`,cy:`12`,r:`7`}),(0,q.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.6`}),(0,q.jsx)(`path`,{d:`M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2`})]}):e===`pause`?(0,q.jsx)(`path`,{d:`M8 5v14M16 5v14`}):e===`play`?(0,q.jsx)(`path`,{d:`m8 4 11 8-11 8Z`}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`path`,{d:`M3 9h4l5-5v16l-5-5H3Z`}),e===`muted`?(0,q.jsx)(`path`,{d:`m17 9 5 6m0-6-5 6`}):(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(`path`,{d:`M16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14`})})]})})}function ri(e){if(e.key!==`Tab`)return;let t=Array.from(e.currentTarget.querySelectorAll(`button:not(:disabled), select:not(:disabled), input:not(:disabled), summary, a[href], textarea:not(:disabled)`)).filter(e=>e.getClientRects().length>0&&!e.closest(`[hidden], [inert]`)),n=t[0],r=t[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&(e.target===n||e.target===e.currentTarget)&&(e.preventDefault(),r?.focus()),!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())}function ii(e){let[t,n]=(0,K.useState)(!1),[r,i]=(0,K.useState)(`game`),a=(0,K.useRef)(null),[o,c]=(0,K.useState)(null),l=e.treasuryFeatures?.treasury?.freeRemaining??0,u=e.treasuryFeatures?.choice,d=e.treasuryFeatures?.bells,f=!!u||!!d,p=[`draining`,`retracting`].includes(e.treasuryFeatures?.treasury?.phase??`idle`),h=e.wallet<=0&&l<=0,g=e.navigationLocked||e.loading||!!e.error||e.paused||h||t||e.cameraMoving||e.cabinetOverview||!!e.dragonBonus||f||p,_=e.loading||!!e.error,v=!!_;(0,K.useEffect)(()=>{(_||e.paused||t||e.wallet<=0&&e.feedback?.kind!==`blocked`)&&e.feedback&&e.feedback.kind!==`idle`&&c(e.feedback.sequence)},[_,e.paused,e.wallet,e.feedback,t]);let y=Hr({...e,freeRemaining:l,settingsOpen:t,dismissedSequence:o}),[,b]=(0,K.useState)(0),x=(0,K.useRef)(null);x.current||=new Wr(()=>b(e=>e+1));let S=y.kind===`blocked`&&Ur(!!e.autoFiring,e.feedback);(0,K.useEffect)(()=>(x.current.update(S&&!g),()=>x.current.dispose()),[S,g]);let C=y.kind===`blocked`&&(!S||!g&&x.current.visible),w=qr({feedbackKind:S&&!C?`idle`:y.kind,sequence:e.feedback?.sequence,score:e.score,overlay:e.error?`error`:e.loading?`loading`:null,settingsOpen:t}),T=(0,K.useRef)({disabled:g,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease});T.current={disabled:g,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease};let E=(0,K.useRef)(null);E.current||=new Br(()=>!!T.current.disabled,()=>T.current.onStart(),()=>T.current.onEnd(),e=>T.current.onRelease?T.current.onRelease(e.kind):T.current.onEnd());let D=E.current,O=(0,K.useCallback)(()=>{D.cancel(),T.current.onEnd()},[D]);(0,K.useEffect)(()=>{g&&O()},[g,O]),(0,K.useEffect)(()=>()=>O(),[O]);let k=!!e.autoFiring,A=(0,K.useRef)(null),j=(0,K.useRef)(null),ee=(0,K.useRef)(`game`),M=(0,K.useRef)(null),te=(0,K.useRef)(v),N=(0,K.useRef)(t),ne=(0,K.useRef)(f);(0,K.useEffect)(()=>{!f&&ne.current&&!t&&!v&&!e.paused&&A.current?.focus(),ne.current=f},[f,t,v,e.paused]);let P=()=>{e.onCoinPreviewCancel?.(),e.onSettingsOpenChange?.(!1),n(!1)};(0,K.useEffect)(()=>{e.progressRecovery&&t&&(e.onCoinPreviewCancel?.(),e.onSettingsOpenChange?.(!1),n(!1))},[!!e.progressRecovery,t,e.onCoinPreviewCancel,e.onSettingsOpenChange]),(0,K.useEffect)(()=>{t?(i(ee.current),ee.current=`game`,j.current?.focus()):N.current&&!v&&A.current?.focus(),N.current=t},[t,v]),(0,K.useEffect)(()=>{v&&!t&&document.hasFocus()&&M.current?.focus(),!v&&te.current&&document.hasFocus()&&A.current?.focus(),te.current=v},[v,t]);let re=e=>e>=1e4?new Intl.NumberFormat(`zh-TW`,{notation:`compact`,maximumFractionDigits:1}).format(e):e.toLocaleString();return(0,q.jsxs)(`main`,{ref:w,className:`crusader-game${e.wheelShow?` crusader-game--wheel-show`:``}`,style:$r,children:[(0,q.jsxs)(`header`,{className:`crusader-game__header`,inert:t||v||f,children:[(0,q.jsxs)(`div`,{className:`crusader-game__brand`,children:[!e.trophies||e.trophies.selected===`crusader`?(0,q.jsx)(`img`,{src:`./assets/treasury-crest.svg`,alt:``,className:`crusader-game__crest`}):(0,q.jsx)(`span`,{title:`收藏盾徽：${ti[e.trophies.selected]}`,children:(0,q.jsx)(Qr,{trophy:e.trophies.selected})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h1`,{children:`聖城幣塔`}),(0,q.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`CRUSADER COIN PUSHER`})]})]}),(0,q.jsxs)(`nav`,{className:`crusader-game__tools`,"aria-label":`遊戲設定`,children:[e.onCameraReset&&e.cameraOffset&&(0,q.jsx)(Jr,{moving:e.cameraMoving,disabled:e.navigationLocked||_||e.paused||t||e.cabinetOverview,onReset:()=>{O(),e.onCameraReset?.()}}),e.trialsNavigation&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__trial-entry`,disabled:_||e.trialsNavigation.state===`saving`||e.localSave?.state===`loading`,onClick:()=>{O(),e.trialsNavigation?.onOpen()},"aria-label":e.trialsNavigation.state===`saving`?`正在儲存並前往御庫試煉`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試前往御庫試煉`:`前往御庫試煉`,children:e.trialsNavigation.state===`saving`?`儲存中…`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試御庫試煉`:`御庫試煉`}),(0,q.jsx)(`button`,{ref:A,type:`button`,className:`crusader-game__tool`,disabled:e.navigationLocked,onClick:()=>{O(),e.onSettingsOpenChange?.(!t),n(!t)},"aria-label":`設定與玩法`,title:`設定與玩法`,"aria-expanded":t,"aria-controls":`game-settings`,children:(0,q.jsx)(ni,{name:`settings`})})]})]}),t&&(0,q.jsx)(`button`,{type:`button`,tabIndex:-1,className:`crusader-game__settings-backdrop`,"aria-label":`關閉設定遮罩`,onClick:P}),t&&(0,q.jsxs)(`aside`,{ref:j,id:`game-settings`,className:`crusader-game__settings`,role:`dialog`,"aria-modal":`true`,"aria-label":`設定與玩法`,tabIndex:-1,onKeyDown:e=>{e.key===`Escape`&&(e.preventDefault(),P()),ri(e)},children:[(0,q.jsxs)(`div`,{className:`crusader-game__settings-heading`,children:[(0,q.jsx)(`h2`,{children:`設定與玩法`}),(0,q.jsx)(`button`,{className:`crusader-game__small-button`,type:`button`,onClick:P,children:`關閉`})]}),(0,q.jsx)(`nav`,{className:`crusader-game__settings-categories`,"aria-label":`設定分類`,children:[[`game`,`遊戲設定`,`menu-game-v1.webp`],[`account`,`帳號與進度`,`menu-account-v1.webp`],[`records`,`收藏與紀錄`,`menu-records-v1.webp`],[`help`,`玩法說明`,`menu-help-v1.webp`]].map(([t,n,o])=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":r===t,onClick:()=>{e.onCoinPreviewCancel?.(),i(t),a.current?.scrollTo(0,0)},children:[(0,q.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/settings/${o}`,width:`144`,height:`144`,alt:``,"aria-hidden":`true`,decoding:`async`}),(0,q.jsx)(`span`,{children:n})]},t))}),(0,q.jsxs)(`div`,{ref:a,className:`crusader-game__settings-content`,children:[(0,q.jsx)(`div`,{hidden:r!==`account`,children:e.accountPanel}),e.trophies&&(0,q.jsxs)(`section`,{hidden:r!==`records`,"aria-label":`騎士戰利品收藏`,children:[(0,q.jsx)(`h3`,{children:`騎士戰利品收藏`}),(0,q.jsx)(`p`,{children:`主場事件與每款御庫試煉第 15 關可解鎖對應盾徽；只改外觀，不影響機率或得分。保存在本機瀏覽器。`}),(0,q.jsx)(`h4`,{children:`聖城戰利品`}),(0,q.jsx)(`div`,{className:`treasury-collection`,children:tn.map(t=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===t,disabled:!e.trophies.unlocked.includes(t)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(t),children:[(0,q.jsx)(Qr,{trophy:t}),ti[t],!e.trophies.unlocked.includes(t)&&` · 未解鎖`]},t))}),(0,q.jsx)(`h4`,{children:`御庫試煉 · 第 15 關紀念`}),(0,q.jsx)(`div`,{className:`treasury-collection`,children:m.map(t=>{let n=`trial-${t}`;return(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===n,disabled:!e.trophies.unlocked.includes(n)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(n),children:[(0,q.jsx)(Qr,{trophy:n}),ti[n],!e.trophies.unlocked.includes(n)&&` · 第 15 關解鎖`]},n)})})]}),(0,q.jsx)(`div`,{hidden:r!==`help`,children:(0,q.jsxs)(`details`,{children:[(0,q.jsx)(`summary`,{children:`鑰匙、御庫大轉盤與巨龍`}),e.treasuryFeatures&&(0,q.jsxs)(`section`,{"aria-label":`御庫特色規則`,children:[(0,q.jsx)(`h3`,{children:`御庫鑰匙與聖盾`}),(0,q.jsxs)(`p`,{children:[e.treasuryFeatures.paidDropsPerKey?`每成功投入${e.treasuryFeatures.paidDropsPerKey}枚一般金幣，`:`一般金幣達標後，`,`送出1把實體鑰匙；落點受阻時延後。鑰匙須真正推入前口，收齊3把，後牆的御庫大轉盤就會自動轉動；鑰匙本身不計分，側落或落洞不返還。`]}),(0,q.jsx)(`p`,{children:`轉盤不必點按、盤面不暫停，約6秒後停格，停格的格數就是獎勵金幣數：5枚35%、10枚30%、20枚18%、50枚10%、100枚5%、300枚2%（扇區寬度即機率）。獎勵金幣從塔頂落到推台上，每秒約10枚；盤面接近上限時會等空位，不會少給。結果由本局亂數決定並先寫入存檔，換裝置接手會續播同一次轉動。`}),(0,q.jsx)(`p`,{children:`轉盤期間仍可投幣；轉盤金幣是盤面上的實體金幣，推入前口才計分，不直接加到可用金幣。轉動期間不生成新鑰匙。`}),(0,q.jsx)(`p`,{children:`巨龍觸發時暫停盤面：先選塔、記住小龍，再猜三鐘。高塔有1隻小龍，中／低塔有2隻，分藏不同鐘；只能選一次，選塔三秒、選鐘五秒未操作會隨機選取，不額外扣幣。猜中才撞塔，命中才入帳；猜錯保留塔並恢復盤面。倒塌光影與收藏解鎖不另加分。`})]})]})}),(0,q.jsx)(`div`,{className:`crusader-game__menu-actions`,hidden:r!==`game`,children:(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onMute,"aria-pressed":e.muted,children:[(0,q.jsx)(ni,{name:e.muted?`muted`:`sound`}),e.muted?`開啟音效`:`關閉音效`]})}),(0,q.jsxs)(`div`,{className:`crusader-game__menu-actions`,hidden:r!==`records`,children:[e.onReplayIntro&&(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:_||!!e.dragonBonus||!!u||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`,onClick:()=>{D.cancel(),P(),e.onReplayIntro?.()},children:[(0,q.jsx)(ni,{name:`play`}),`重看序章`]}),e.onReplayHighTower&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:_||!!e.dragonBonus||!!u||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`||!e.boardFeedback?.highTowerReplayAvailable,onClick:()=>{O(),P(),e.onReplayHighTower?.()},children:`重看最高塔演出`})]}),e.boardFeedback&&(0,q.jsxs)(`section`,{hidden:r!==`records`,className:`crusader-game__records`,"aria-label":`本局來源與近期紀錄`,children:[(0,q.jsx)(`h3`,{children:`本局已入帳`}),(0,q.jsx)(`dl`,{children:[`front`,`dragon`].map(t=>(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:ei[t]}),(0,q.jsxs)(`dd`,{children:[e.boardFeedback.totals[t].toLocaleString(),` 分`]})]},t))}),(0,q.jsx)(`p`,{children:`前緣燈帶：前口收集；側邊警示紋：側落不計分；洞口叉紋：開洞不計分；藍色輪廓環：巨龍已結算幣，不重複計分。倒塔與故事演出本身不加分。`}),(0,q.jsx)(`h3`,{children:`近期紀錄`}),e.boardFeedback.records.length===0?(0,q.jsx)(`p`,{children:`尚無收集或流失紀錄。`}):(0,q.jsx)(`ol`,{children:e.boardFeedback.records.map(e=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`span`,{children:ei[e.source]}),(0,q.jsx)(`strong`,{children:e.source===`front`||e.source===`dragon`?`+${e.amount.toLocaleString()} 分`:`${e.amount.toLocaleString()} 枚 · 不計分`})]},e.id))}),(0,q.jsxs)(`p`,{children:[`本局來源總計保留整局；近期紀錄僅顯示最近 `,s.boardFeedback.recordLimit,` 筆合併事件，不是淨獲利。`]})]}),(0,q.jsxs)(`div`,{hidden:r!==`game`,children:[e.onCoinSoundChange&&(0,q.jsxs)(`section`,{className:`crusader-game__coin-audio`,"aria-label":`投幣聲設定`,children:[(0,q.jsxs)(`label`,{className:`crusader-game__quality`,children:[`投幣音色`,(0,q.jsx)(`select`,{"aria-label":`投幣音色`,value:e.coinSound??`soft`,disabled:_,onChange:t=>e.onCoinSoundChange?.(t.target.value),children:hr.map(e=>(0,q.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,q.jsxs)(`label`,{className:`crusader-game__coin-volume`,children:[`投幣音量 `,(0,q.jsx)(`input`,{"aria-label":`投幣音量`,type:`range`,min:`0`,max:`100`,step:`1`,value:Math.round((e.coinVolume??.5)*100),disabled:_||!e.onCoinVolumeChange,onChange:t=>e.onCoinVolumeChange?.(Number(t.target.value)/100)}),(0,q.jsxs)(`output`,{children:[Math.round((e.coinVolume??.5)*100),`%`]})]}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:_||e.paused||e.muted||e.coinVolume===0||e.coinPreviewState===`loading`||!e.onCoinPreview,onClick:e.onCoinPreview,children:e.coinPreviewState===`loading`?`音效準備中…`:`試聽投幣聲`}),(0,q.jsx)(`p`,{role:`status`,children:e.muted?`請先開啟音效，再進行試聽。`:e.coinPreviewState===`error`?`音效暫時無法播放，請再試一次。`:`試聽不會投幣或扣幣；此音量不影響配樂與大獎音效。`})]}),(0,q.jsxs)(`label`,{className:`crusader-game__quality`,children:[`畫質`,(0,q.jsxs)(`select`,{"aria-label":`畫質`,value:e.quality,onChange:t=>e.onQualityChange(t.target.value),children:[(0,q.jsx)(`option`,{value:`low`,children:`流暢`}),(0,q.jsx)(`option`,{value:`high`,children:`精緻`})]})]}),e.onBonusFullMotionChange&&(0,q.jsxs)(`label`,{children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:!!e.bonusFullMotion,onChange:t=>e.onBonusFullMotionChange?.(t.target.checked)}),`完整 BONUS 飛行動態（覆蓋系統減少動態偏好）`]})]}),(0,q.jsxs)(`div`,{hidden:r!==`help`,children:[(0,q.jsxs)(`details`,{children:[(0,q.jsx)(`summary`,{children:`投幣與鏡頭操作`}),(0,q.jsx)(`p`,{children:`後方投幣區按住可左右滑動連投，放開即停。其餘幣床點按投入 1 枚，拖曳則轉動鏡頭、放開不投幣；「回正」恢復視角。硬幣皆從後方推板投入。`}),e.onFireRelease&&(0,q.jsxs)(`p`,{children:[`投幣鈕點按投入一枚；按住會連投，長按至少 `,s.interaction.autoFireHoldMs/1e3,` 秒後在按鈕內放開，會持續自動連投。閃電滑桿只調整自動投幣速度，最高 3 倍，推板速度不變。再按一次停止，不會多扣幣。選塔、猜鐘、動畫、設定與御庫試煉期間暫停扣幣，回到可投的盤面自動續投；按停止、開新局、金幣與免費次數皆用盡或關閉頁面才結束。`]})]}),(0,q.jsxs)(`details`,{children:[(0,q.jsx)(`summary`,{children:`建塔與計分規則`}),(0,q.jsx)(`p`,{children:`每局以隨機散幣、零座幣塔開場；成功投入20枚喚醒首塔。每座塔獨立等機會抽高／中／低，可重複，不綁定塔位。前方收集的金幣會回收為可用金幣，可以繼續投入。`}),(0,q.jsx)(`p`,{children:`一般硬幣在前方收集計分，兩側及升塔洞內落幣不返還、不計分。巨龍 BONUS 命中時，每枚尚未結算的塔幣計 1 分並加入可用金幣；這批幣後續落點不再加分或扣回。有效投幣且有完整幣塔、無升塔或其他演出時才抽選 BONUS；目前為可調機率的單機測試版，非正式機率。`}),(0,q.jsx)(`p`,{children:`可抽選投幣有 4% 建塔機會；觸發後單塔 70%、雙塔 23%、三塔 7%。等待空位或建塔期間不進行新抽選。`}),(0,q.jsx)(`p`,{children:`場上幣塔全倒後，成功投入20枚即可排入補塔；蓄能期間不抽新事件，已獲得的待建塔保留。台面開洞後，舊幣落入洞內，新塔旋轉升起，關洞後可繼續推動。`})]})]}),(0,q.jsx)(`div`,{hidden:r!==`account`,children:e.localSave&&e.localSave.state!==`saved`&&(0,q.jsxs)(`section`,{"aria-label":`存檔狀態`,children:[(0,q.jsx)(`p`,{role:`status`,children:e.localSave.message}),e.localSave.state===`error`&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:_,onClick:e.localSave.onSave,children:`重試存檔`})]})}),(0,q.jsxs)(`div`,{hidden:r!==`game`,children:[(0,q.jsx)(`div`,{className:`crusader-game__new-game-section`,children:(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button crusader-game__new-game-button`,disabled:e.loading||e.navigationLocked,onClick:()=>{D.cancel(),e.onNewGame(),P()},children:`開始新局`})}),e.testMode&&(0,q.jsxs)(`section`,{className:`crusader-game__debug`,"aria-label":`測試模式`,children:[(0,q.jsx)(`strong`,{children:`測試模式`}),(0,q.jsx)(`span`,{children:`強制建塔，不代表自然中獎機率`}),(0,q.jsx)(`div`,{children:[1,2,3].map(t=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:_||e.paused||!e.onTestTowers,onClick:()=>e.onTestTowers?.(t),children:[t,` 塔`]},t))})]}),e.testMode&&e.onTestDragon&&(0,q.jsxs)(`div`,{className:`crusader-game__debug`,children:[[`left`,`center`,`right`].map((t,n)=>(0,q.jsxs)(`button`,{className:`crusader-game__small-button`,type:`button`,disabled:_||e.paused||!!e.dragonBonus,onClick:()=>{D.cancel(),e.onTestDragon?.(t),P()},children:[`BONUS `,[`左斜入`,`正衝`,`右斜入`][n]]},t)),e.onTestWheel&&(0,q.jsx)(`button`,{className:`crusader-game__small-button`,type:`button`,disabled:_||e.paused,onClick:()=>{D.cancel(),e.onTestWheel?.(),P()},children:`測試御庫大轉盤`})]})]})]})]}),(0,q.jsxs)(`section`,{className:`crusader-game__stage`,"aria-label":`3D 推幣機`,inert:t||v,children:[e.localSave?.state===`error`&&(0,q.jsx)(`p`,{className:`crusader-game__save-warning`,role:`alert`,children:e.localSave.message}),e.cloudBackup&&e.localSave?.state!==`error`&&!f&&!v&&!e.navigationLocked&&(0,q.jsx)(Ne,{...e.cloudBackup,className:`crusader-game__save-warning`,buttonClassName:`crusader-game__small-button`,onInspect:()=>{ee.current=`account`,O(),e.onSettingsOpenChange?.(!0),n(!0)}}),!e.cloudBackup&&e.cloudWarning&&e.localSave?.state!==`error`&&!f&&!v&&!e.navigationLocked&&(0,q.jsxs)(`div`,{className:`crusader-game__save-warning`,role:`alert`,children:[(0,q.jsxs)(`span`,{children:[e.cloudWarning,` `]}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:()=>{ee.current=`account`,O(),e.onSettingsOpenChange?.(!0),n(!0)},children:`查看帳號與進度`})]}),e.children,(0,q.jsx)(`div`,{className:`crusader-game__feedback-channel`,role:`status`,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,children:C&&!f&&(0,q.jsxs)(`p`,{className:`crusader-game__feedback crusader-game__feedback--blocked`,children:[(0,q.jsxs)(`span`,{className:`crusader-game__feedback-label`,children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:y.symbol}),y.label]}),(0,q.jsx)(`span`,{className:`crusader-game__feedback-detail`,children:y.detail})]})}),e.treasuryFeatures&&(0,q.jsx)(Xr,{...e.treasuryFeatures,disabled:e.navigationLocked||_||e.paused||t||e.treasuryFeatures.disabled}),e.dragonBonus&&(0,q.jsxs)(`div`,{className:`crusader-game__bonus`,role:`status`,children:[(0,q.jsx)(`span`,{children:`巨龍 BONUS`}),(0,q.jsx)(`strong`,{children:e.dragonBonus.phase===`hit`?`已命中`:e.dragonBonus.phase===`miss`?`目標已失效 · 未入帳`:`接近中 · 尚未入帳`})]}),!_&&!e.paused&&!t&&!e.cabinetOverview&&e.boardFeedback&&(0,q.jsxs)(`div`,{className:`crusader-game__receipts`,"aria-label":`已確認盤面結果`,role:`status`,"aria-live":`polite`,children:[e.boardFeedback.receipts.map(e=>(0,q.jsxs)(`p`,{"data-source":e.source,children:[(0,q.jsx)(`span`,{children:e.source===`front`?`金幣掉落`:`${ei[e.source]} · 已入帳`}),(0,q.jsxs)(`strong`,{children:[e.source===`front`?``:`+`,e.amount.toLocaleString(),` 枚`]})]},e.source)),!e.dragonBonus&&e.boardFeedback.highTower&&(0,q.jsxs)(`p`,{className:`crusader-game__collapse`,children:[(0,q.jsx)(`span`,{children:`最高塔倒塌`}),(0,q.jsx)(`small`,{children:`倒塔不加分，普通幣以前口實收計分`})]})]})]}),v&&!t&&(0,q.jsx)(`div`,{className:`crusader-game__overlay`,children:(0,q.jsxs)(`div`,{ref:M,className:`crusader-game__overlay-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`game-recovery-title`,tabIndex:-1,onKeyDown:ri,children:[(0,q.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`聖城幣塔`}),(0,q.jsx)(`h2`,{id:`game-recovery-title`,children:e.progressRecovery?.conflict?`需要重新接續進度`:e.error?`暫時無法進入寶庫`:`正在準備金幣與機台`}),e.error&&(0,q.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.error&&(e.progressRecovery?(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.progressRecovery.busy,onClick:e.progressRecovery.onRecover,children:e.progressRecovery.busy?`正在保留盤面…`:`讀取最新進度`}):e.onRetryScene&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.navigationLocked,onClick:e.onRetryScene,children:`重新載入畫面`}))]})}),(0,q.jsx)(`section`,{className:`crusader-game__console`,"aria-label":`投幣控制`,inert:t||v||f,children:(0,q.jsxs)(`div`,{className:`crusader-game__console-inner`,children:[(0,q.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--win`,children:[(0,q.jsx)(`span`,{children:`本局獲得金幣`}),(0,q.jsx)(`strong`,{"aria-label":`${e.score} 枚`,title:String(e.score),children:re(e.score)})]}),(0,q.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--wallet`,children:[(0,q.jsx)(`span`,{children:`可用金幣`}),(0,q.jsx)(`strong`,{"aria-label":`${e.wallet} 枚`,title:String(e.wallet),children:re(e.wallet)})]}),!h&&e.onAutoSpeedChange&&(0,q.jsx)(Yr,{value:e.autoSpeed??1,disabled:_||e.navigationLocked||e.paused||t||f||!!e.dragonBonus,onChange:e.onAutoSpeedChange}),(0,q.jsxs)(`div`,{className:`crusader-game__fire-wrap${h?` crusader-game__fire-wrap--empty`:``}`,children:[(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__fire`,disabled:g,onPointerDown:e=>{e.button===0&&e.isPrimary&&(e.pointerType===`touch`&&e.preventDefault(),D.press({kind:`pointer`,id:e.pointerId})&&e.currentTarget.setPointerCapture(e.pointerId))},onPointerUp:e=>{let t=e.currentTarget.getBoundingClientRect(),n={kind:`pointer`,id:e.pointerId};e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom?D.cancelSource(n):D.release(n)},onPointerCancel:e=>D.cancelSource({kind:`pointer`,id:e.pointerId}),onLostPointerCapture:e=>D.cancelSource({kind:`pointer`,id:e.pointerId}),onKeyDown:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),e.repeat||D.press({kind:`keyboard`,key:e.key}))},onKeyUp:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),D.release({kind:`keyboard`,key:e.key}))},onBlur:O,onContextMenu:e=>e.preventDefault(),"aria-pressed":e.onFireRelease?k:void 0,"aria-label":k?`停止自動連投`:e.onFireRelease?`投入金幣，點按一枚，長按後放開自動連投，再按停止`:`投入金幣，點按一枚，長按連投`,children:[(0,q.jsx)(`span`,{children:h?`已用盡`:k?`停 止`:l>0?`免 費`:`投 幣`}),(0,q.jsx)(`small`,{children:k?g?`自動待續`:`自動連投中`:`長按自動`})]}),h&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__restart`,disabled:e.loading||t||e.navigationLocked,onClick:e.onNewGame,children:`開始新局`})]})]})})]})}function ai(e){let t=(0,K.useId)(),[n,r]=(0,K.useState)(``),[i,a]=(0,K.useState)(``),[o,s]=(0,K.useState)(``),[c,l]=(0,K.useState)(!1),[u,d]=(0,K.useState)(null),f=(0,K.useRef)(null),p=(0,K.useRef)(0),m=(0,K.useRef)(!1),h=(0,K.useRef)(!1),g=(0,K.useRef)(null),_=(0,K.useRef)(null),v=(0,K.useRef)(!1),y=e.screen===`register`,b=e.disabled||c||!!u;(0,K.useEffect)(()=>(m.current=!0,()=>{m.current=!1,p.current++,f.current=null}),[]),(0,K.useEffect)(()=>{u&&g.current&&!g.current.open&&g.current.showModal(),!u&&!b&&v.current&&(v.current=!1,_.current?.focus())},[u,b]);function x(){h.current||(p.current++,f.current=null,v.current=!0,d(null),r(``),a(``))}async function S(t,n,i,o){if(e.disabled||h.current)return;let c=++p.current;h.current=!0,l(!0),s(``),r(``),a(``);try{let r=await e.onSubmit(t,n,i,o);if(!m.current||c!==p.current)return;!i&&r?.kind===`registration-offer`?(f.current={email:t,password:n,guard:{expectedUid:r.expectedUid,expectedAnonymous:r.expectedAnonymous}},d(r.reason)):r?.kind===`error`&&s(r.message)}catch{m.current&&c===p.current&&s(`帳號操作未確認成功，請重新輸入後再試。`)}finally{h.current=!1,m.current&&c===p.current&&l(!1)}}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`form`,{className:`account-panel__credentials`,"aria-label":y?`建立帳號表單`:`登入表單`,onSubmit:t=>{if(t.preventDefault(),!b){if(y&&n!==i){s(`兩次輸入的密碼不一致，請重新確認。`);return}S(e.email.trim(),n,y)}},children:[(0,q.jsx)(`label`,{htmlFor:`${t}-email`,children:`Email`}),(0,q.jsx)(`input`,{id:`${t}-email`,name:`email`,type:`email`,autoComplete:`email`,required:!0,disabled:b,value:e.email,onChange:t=>e.onEmailChange(t.target.value)}),(0,q.jsx)(`label`,{htmlFor:`${t}-password`,children:y?`設定密碼`:`密碼`}),(0,q.jsx)(`input`,{id:`${t}-password`,name:`password`,type:`password`,autoComplete:y?`new-password`:`current-password`,required:!0,disabled:b,value:n,onChange:e=>{r(e.target.value),s(``)}}),y&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`label`,{htmlFor:`${t}-confirmation`,children:`確認密碼`}),(0,q.jsx)(`input`,{id:`${t}-confirmation`,name:`password-confirmation`,type:`password`,autoComplete:`new-password`,required:!0,disabled:b,"aria-invalid":!!o,"aria-describedby":o?`${t}-error`:void 0,value:i,onChange:e=>{a(e.target.value),s(``)}})]}),o&&(0,q.jsx)(`p`,{id:`${t}-error`,className:`crusader-game__error`,role:`alert`,children:o}),(0,q.jsx)(`button`,{ref:_,className:`crusader-game__small-button account-panel__primary`,disabled:b,type:`submit`,children:y?`建立帳號`:`登入`})]}),u&&(0,q.jsxs)(`dialog`,{ref:g,className:`account-panel__confirm`,"aria-labelledby":`${t}-confirm-title`,"aria-describedby":`${t}-confirm-detail`,onCancel:e=>{e.preventDefault(),x()},children:[(0,q.jsx)(`h3`,{id:`${t}-confirm-title`,children:`是否建立帳號？`}),(0,q.jsx)(`p`,{id:`${t}-confirm-detail`,children:u===`not-found`?`此 Email 尚未註冊。是否使用剛才輸入的 Email 與密碼建立帳號？`:`登入未成功，可能是 Email 或密碼有誤。若你尚未註冊，是否使用剛才輸入的資料建立帳號？`}),(0,q.jsx)(`p`,{children:`只有確認後才會註冊；原本遊戲進度會保留。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,autoFocus:!0,disabled:c,onClick:x,children:`返回檢查登入資料`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__primary`,disabled:e.disabled||c,onClick:()=>{if(e.disabled||h.current)return;let t=f.current;f.current=null,d(null),t&&S(t.email,t.password,!0,t.guard)},children:`確認註冊並登入`})]})]})}function oi({kind:e}){let[t,n]=(0,K.useState)(!1);return(0,q.jsx)(`div`,{className:`account-panel__art`,"aria-hidden":`true`,children:(0,q.jsx)(`img`,{className:t?`account-panel__art-image is-unavailable`:`account-panel__art-image`,src:`/crusader-coin-pusher-demo/assets/account/${e===`login`?`treasury-login-v1.webp`:`treasury-register-v1.webp`}`,alt:``,width:2172,height:724,decoding:`async`,loading:`lazy`,draggable:!1,onError:()=>n(!0)})})}function si(e){let[t,n]=(0,K.useState)(!1);return(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__provider`,"aria-label":e.label,"aria-expanded":e.expanded,"aria-controls":e.controls,disabled:e.disabled,onClick:e.onSelect,children:[(0,q.jsx)(`span`,{className:`account-panel__provider-seal`,"aria-hidden":`true`,children:e.kind===`google`?(0,q.jsx)(`span`,{className:`account-panel__provider-google-backing`,style:{background:s.premium.colors.white},children:(0,q.jsx)(`img`,{alt:``,width:200,height:204,draggable:!1,decoding:`async`,className:t?`account-panel__provider-image is-unavailable`:`account-panel__provider-image`,src:`/crusader-coin-pusher-demo/assets/account/google-g-official-v1.png`,onError:()=>n(!0)})}):(0,q.jsx)(`svg`,{className:`account-panel__provider-color`,viewBox:`0 0 24 24`,focusable:`false`,children:e.kind===`email`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`rect`,{className:`account-panel__icon-blue`,x:`1`,y:`4`,width:`22`,height:`16`,rx:`3`}),(0,q.jsx)(`path`,{className:`account-panel__icon-light`,d:`m2 5 10 9L22 5Z`}),(0,q.jsx)(`path`,{className:`account-panel__icon-blue`,d:`m2 19 7-7 3 3 3-3 7 7Z`}),(0,q.jsx)(`path`,{className:`account-panel__icon-gold`,d:`m1.5 6 10.5 8.5L22.5 6v2L12 16.5 1.5 8Z`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`circle`,{className:`account-panel__icon-blue`,cx:`12`,cy:`12`,r:`11`}),(0,q.jsx)(`path`,{className:`account-panel__icon-red`,d:`M3.5 19c.5-4.3 4-6 8.5-6s8 1.7 8.5 6A11 11 0 0 1 3.5 19Z`}),(0,q.jsx)(`path`,{className:`account-panel__icon-gold`,d:`M9 12h6v3l-3 2-3-2Z`}),(0,q.jsx)(`circle`,{className:`account-panel__icon-light`,cx:`12`,cy:`8`,r:`4.5`})]})})}),(0,q.jsx)(`span`,{className:`account-panel__provider-label`,children:e.label}),(0,q.jsx)(`span`,{className:`account-panel__provider-trailing`,"aria-hidden":`true`,children:(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,focusable:`false`,children:e.kind===`email`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),!e.expanded&&(0,q.jsx)(`path`,{d:`M12 5v14`})]}):(0,q.jsx)(`path`,{d:`m9 5 7 7-7 7`})})})]})}function ci(e){let t=(0,q.jsx)(`a`,{className:`account-panel__legal`,href:`https://johnwu0626.github.io/crusader-coin-pusher-demo/privacy/`,target:e.externalLinkTarget??`_blank`,rel:`noopener noreferrer`,children:`隱私權政策`}),[n,r]=(0,K.useState)(``),[i,a]=(0,K.useState)(`login`),[o,s]=(0,K.useState)(!1),[c,l]=(0,K.useState)(!1),[u,d]=(0,K.useState)(null),f=(0,K.useId)(),p=(0,K.useRef)(null),[m,h]=(0,K.useState)(!0),[g,_]=(0,K.useState)(null),[v,y]=(0,K.useState)(null),[b,x]=(0,K.useState)(null);(0,K.useEffect)(()=>{x(null)},[e.backups,e.user?.uid]),(0,K.useEffect)(()=>{y(null)},[e.progressChoices]),(0,K.useEffect)(()=>{d(null)},[e.cloudChoices]);let S=(0,K.useRef)(null),C=(0,K.useRef)(!1),w=!e.enabled||e.busy,T=!e.user||e.user.isAnonymous,E=T&&i===`register`,D=T&&(!!e.entry||c),O=e.user?.email?.replace(/^(.)([^@]*)(@.*)$/,`$1＊＊＊$3`);(0,K.useEffect)(()=>{C.current&&=(S.current?.focus(),!1)},[i]),(0,K.useEffect)(()=>{T||(a(`login`),s(!1),h(!0))},[T]),(0,K.useEffect)(()=>{o&&!E&&p.current?.querySelector(`input`)?.focus()},[o,E]);function k(e){w||(C.current=!0,h(!1),s(!1),a(e))}let A=(0,q.jsx)(ai,{screen:i,email:n,disabled:w,onEmailChange:r,onSubmit:(t,n,r,i)=>(h(!0),e.onEmail(t,n,r,i))},`${i}:${e.user?.uid??``}:${!!e.user?.isAnonymous}`);return e.busy&&!E&&!D?(0,q.jsxs)(`section`,{className:`account-panel`,"aria-label":`帳號與進度`,"aria-busy":`true`,children:[(0,q.jsxs)(`div`,{className:`account-panel__status-card`,role:`status`,children:[(0,q.jsx)(`span`,{className:`account-panel__loading`,"aria-hidden":`true`}),(0,q.jsx)(`h3`,{children:e.progressStatus||`正在登入…`})]}),e.onCancelConnection&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{children:`連線較久，可先返回遊戲。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelConnection,children:`先返回遊戲`})]}),e.onRestartSignIn&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.restartingSignIn,onClick:e.onRestartSignIn,children:`保存盤面並重新載入登入`}),e.error&&(0,q.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),t]}):E?(0,q.jsxs)(`section`,{className:`account-panel`,"aria-label":`建立帳號`,"aria-busy":e.busy,children:[(0,q.jsx)(oi,{kind:`register`},`register`),(0,q.jsx)(`h3`,{ref:S,tabIndex:-1,children:`建立帳號`}),(0,q.jsx)(`p`,{children:`使用 Email 建立帳號，原進度會保留。`}),e.busy&&(0,q.jsx)(`p`,{role:`status`,children:`正在建立帳號…`}),m&&e.error&&(0,q.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),!e.enabled&&!e.busy&&(0,q.jsx)(`p`,{children:`登入尚未啟用；你仍可繼續本機遊玩。`}),A,(0,q.jsxs)(`div`,{className:`account-panel__navigation`,children:[(0,q.jsx)(`p`,{children:`已有帳號？`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>k(`login`),children:`返回登入`})]}),t]}):(0,q.jsxs)(`section`,{className:`account-panel`,"aria-label":`帳號與雲端存檔`,"aria-busy":e.busy,children:[D&&(0,q.jsx)(oi,{kind:`login`},`login`),(0,q.jsx)(`h3`,{ref:S,tabIndex:-1,children:T?e.entry?`或登入帳號`:`綁定／登入帳號`:`帳號與存檔`}),!T&&(0,q.jsxs)(`div`,{className:`account-panel__identity`,children:[(0,q.jsx)(`strong`,{children:`已登入`}),(0,q.jsx)(`span`,{children:O||`已綁定帳號`}),!e.progressChoices&&!e.cloudChoices&&!e.signOutWarning&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onSignOut,children:`登出`})]}),e.busy&&D&&(0,q.jsx)(`p`,{role:`status`,children:`正在登入…`}),e.notice&&(T||e.notice.startsWith(`註冊完成`))&&(0,q.jsx)(`p`,{role:`status`,children:e.notice}),!e.entry&&T&&(0,q.jsx)(`p`,{children:`綁定帳號，換裝置也能接著玩。`}),!e.enabled&&(0,q.jsx)(`p`,{children:`登入尚未啟用；你仍可繼續本機遊玩。`}),(m||!T)&&e.error&&(0,q.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.onRestartSignIn&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.restartingSignIn,onClick:e.onRestartSignIn,children:e.restartingSignIn?`正在保存盤面…`:`保存盤面並重新載入登入`}),e.progressStatus&&(0,q.jsx)(`p`,{role:`status`,children:e.progressStatus}),!T&&e.sync&&(0,q.jsxs)(`div`,{className:`account-panel__status-card`,role:e.syncNeedsAttention?`alert`:`status`,children:[e.syncNeedsAttention?(0,q.jsx)(`p`,{children:`發現不同進度，需要你確認。`}):(0,q.jsx)(`p`,{children:e.sync.phase===`syncing`?`正在備份…`:e.sync.phase===`offline`?`目前離線，雲端備份未完成。`:e.sync.phase===`error`?`雲端備份未完成。`:e.sync.phase===`slow`?`雲端仍未確認，請檢查連線。`:e.sync.phase===`pending`?`有新進度待備份。`:e.sync.confirmedAt?`遊玩時會自動備份。`:`尚未確認雲端備份。`}),e.sync.confirmedAt&&(0,q.jsxs)(`small`,{children:[`上次雲端確認：`,new Date(e.sync.confirmedAt).toLocaleString(`zh-TW`)]}),e.syncNeedsAttention&&!e.cloudChoices&&e.onInspectConflict&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onInspectConflict,children:`選擇接續進度`}),!e.syncNeedsAttention&&(e.syncRetrying||[`error`,`offline`,`slow`].includes(e.sync.phase))&&e.onUpload&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||e.syncRetrying||e.sync.phase===`slow`||e.sync.phase===`syncing`,onClick:e.onUpload,children:e.sync.phase===`slow`?`等待雲端確認…`:e.syncRetrying?`正在重試…`:`重試備份`})]}),e.signOutWarning&&(0,q.jsxs)(`div`,{className:`account-panel__status-card`,role:`alert`,children:[(0,q.jsx)(`h3`,{children:`最新進度尚未確認上雲端`}),(0,q.jsx)(`p`,{children:`本機備份已確認；換裝置可能讀到較早進度。仍要登出嗎？`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onSignOut,children:`重試同步再登出`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelSignOut,children:`先留在遊戲`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onSignOutLocally,children:`仍要登出`})]}),e.onRetryAdoption&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onRetryAdoption,children:`重試接續進度`}),e.cloudChoices&&(0,q.jsxs)(`div`,{className:`account-panel__choices`,role:`group`,"aria-label":`選擇雲端或本機進度`,children:[(0,q.jsx)(`h3`,{children:`要接著玩哪一份？`}),(0,q.jsx)(`p`,{children:`確認後先備份，再切換進度；金幣不合併。`}),e.cloudChoices.map(e=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__choice`,"aria-pressed":u===e.id,onClick:()=>d(e.id),children:[(0,q.jsx)(`strong`,{children:e.label}),(0,q.jsxs)(`span`,{children:[`金幣 `,e.balance.toLocaleString(`zh-TW`),` 枚`]}),(0,q.jsx)(`small`,{children:e.summary}),(0,q.jsxs)(`small`,{children:[`盤面保存：`,new Date(e.savedAt).toLocaleString(`zh-TW`)]})]},e.id)),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:!u,onClick:()=>{u&&e.onChooseCloud?.(u)},children:`使用所選進度`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelCloud,children:`取消，保留目前盤面`})]}),e.progressChoices&&(0,q.jsxs)(`div`,{className:`account-panel__choices`,role:`group`,"aria-label":`選擇接續進度`,children:[(0,q.jsx)(`h3`,{children:`要接著玩哪份進度？`}),(0,q.jsx)(`p`,{children:`不合併金幣；確認後會先備份。`}),e.progressChoices.map(e=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__choice`,disabled:w,"aria-pressed":v===e.id,onClick:()=>y(e.id),children:[e.label,` · 金幣 `,e.balance.toLocaleString(`zh-TW`),(0,q.jsx)(`br`,{}),`盤面保存：`,new Date(e.savedAt).toLocaleString(`zh-TW`),e.summary&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`br`,{}),e.summary]})]},e.id)),v&&(0,q.jsx)(`p`,{children:`將使用所選進度更新此帳號；其他版本先保留備份。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||!v,onClick:()=>{v&&e.onChooseProgress?.(v)},children:`確認接續`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.busy,onClick:e.onCancelProgress,children:`取消，保留目前盤面`})]}),!e.entry&&!e.progressChoices&&!e.cloudChoices&&!T&&!e.signOutWarning&&(0,q.jsxs)(`details`,{className:`account-panel__details`,children:[(0,q.jsx)(`summary`,{children:`更多帳號選項`}),e.onDeleteAccount&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onDeleteAccount,children:`刪除帳號`}),e.onBrowseBackups&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onBrowseBackups,children:`查看綁定前備份`}),e.backups&&(0,q.jsxs)(`div`,{role:`group`,"aria-label":`綁定前備份`,children:[e.backups.length===0&&(0,q.jsx)(`p`,{children:`這台裝置尚無綁定前備份。`}),e.backups.map(e=>(0,q.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,"aria-pressed":b===e.revision,onClick:()=>x(e.revision),children:[`備份 `,e.revision,` · 金幣 `,e.balance.toLocaleString(`zh-TW`),` · `,new Date(e.savedAt).toLocaleString(`zh-TW`)]},e.revision)),b!==null&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{children:`還原到本機；目前盤面會先備份，不合併金幣。雲端若有不同進度，仍需確認。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>e.onRestoreBackup?.(b),children:`確認還原備份`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>x(null),children:`取消還原`})]})]}),e.user&&(0,q.jsxs)(`p`,{children:[`玩家 ID：`,(0,q.jsx)(`span`,{children:e.user.uid}),(0,q.jsx)(`br`,{}),e.user.email]}),(0,q.jsx)(`p`,{children:e.cloudEnabled?`確認時間指此裝置最近一次收到雲端回覆，不是目前盤面全部上傳的保證。`:`雲端同步尚未開放。登入不會上傳或替換存檔。`}),(0,q.jsxs)(`details`,{children:[(0,q.jsx)(`summary`,{children:`進度修復`}),e.user&&e.activeOwner===e.user.uid&&e.onResolve&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{children:`版本衝突時不合併金幣。請選擇要接著玩的進度；被替換的版本會先備份。`}),e.cloudEnabled&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`local`),children:`保留本機，更新雲端`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`cloud`),children:`改用雲端進度`})]}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`backup`),children:`還原最近一次替換前備份`}),g&&(0,q.jsxs)(`div`,{role:`group`,"aria-label":`確認進度來源`,children:[(0,q.jsx)(`p`,{children:g===`local`?`將以目前本機進度更新雲端，先保留原雲端備份。`:g===`cloud`?`將以雲端進度替換本機，先保留目前本機備份。`:`將還原最近一次替換前備份，目前進度也會先備份。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>{let t=g;_(null),e.onResolve?.(t)},children:`確認使用此版本`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(null),children:`取消`})]})]}),e.user&&e.cloudEnabled&&e.activeOwner===e.user.uid&&(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||e.syncRetrying||e.sync?.phase===`syncing`||e.sync?.phase===`slow`||e.activeOwner!==e.user.uid,onClick:()=>{h(!0),e.onUpload?.()},children:`上傳目前進度`})}),e.user&&e.activeOwner!==e.user.uid&&e.onActivate&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{children:`啟用此帳號進度；新裝置優先接續既有雲端存檔，否則複製目前訪客進度。原訪客存檔保留，不合併金幣。`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>{h(!0),e.onActivate?.()},children:`使用此帳號進度`})]})]})]}),!e.entry&&T&&!D&&(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__primary`,disabled:w,onClick:()=>l(!0),children:`綁定／登入帳號`}),!e.progressChoices&&D&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(si,{kind:`google`,label:`Google 登入`,disabled:w||!e.googleEnabled,onSelect:()=>{s(!1),h(!0),e.onGoogle()}}),e.enabled&&!e.googleEnabled&&(0,q.jsx)(`p`,{children:`此版本尚未支援 Android Google 登入。`}),(0,q.jsx)(si,{kind:`email`,label:`Email 登入`,expanded:o,controls:f,disabled:w,onSelect:()=>{w||(s(!o),h(!1))}}),(0,q.jsx)(`div`,{id:f,ref:p,className:`account-panel__email`,hidden:!o,children:o&&(0,q.jsxs)(q.Fragment,{children:[A,(0,q.jsxs)(`div`,{className:`account-panel__navigation`,children:[(0,q.jsx)(`p`,{children:`還沒有帳號？`}),(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>k(`register`),children:`前往註冊`})]})]})})]}),t]})}function li(e){let t=(0,K.useRef)(null);return(0,K.useEffect)(()=>{t.current?.focus()},[]),(0,q.jsx)(`div`,{className:`crusader-game account-entry`,style:o(s.customProperties),children:(0,q.jsxs)(`div`,{className:`account-entry__card`,role:`dialog`,"aria-modal":`true`,"aria-label":`進入聖城幣塔`,tabIndex:-1,ref:t,onKeyDown:e=>{if(e.stopPropagation(),e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),select:not(:disabled),[tabindex="0"]`)].filter(e=>e.getClientRects().length>0),n=t[0],r=t.at(-1);if(!n){e.preventDefault();return}e.shiftKey&&(e.target===n||e.target===e.currentTarget)?(e.preventDefault(),r?.focus()):!e.shiftKey&&(e.target===r||e.target===e.currentTarget)&&(e.preventDefault(),n.focus())},onKeyUp:e=>e.stopPropagation(),children:[(0,q.jsx)(`h2`,{children:`進入聖城幣塔`}),e.preparing&&(0,q.jsx)(`p`,{role:`status`,children:`正在準備盤面…`}),(0,q.jsxs)(`div`,{className:`account-entry__continue`,children:[(0,q.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.busy||e.preparing,onClick:e.onContinue,children:e.accountProgress?`繼續遊戲`:`立即遊玩`}),(0,q.jsx)(`p`,{children:`訪客進度保存在這台裝置，之後可綁定帳號。`})]}),e.children]})})}var ui=class{localSequence=null;attempts=new Set;continueLocally(e){this.localSequence=e}take(e,t){if(this.localSequence!==null&&t<=this.localSequence)return!1;let n=JSON.stringify([e,t]);return!this.attempts.has(n)&&(this.attempts.add(n),!0)}},di=class{serial=0;reading=!1;begin(){return this.reading=!0,++this.serial}current(e){return e===this.serial}commit(e){if(!this.current(e))throw Error(`Account operation cancelled`);this.reading=!1}cancel(){return this.reading?(this.reading=!1,this.serial++,!0):!1}finish(e){this.current(e)&&(this.reading=!1)}};function fi(e,t){let n=new t.GoogleAuthProvider;return n.setCustomParameters({prompt:`select_account`}),e.currentUser?.isAnonymous?t.linkWithPopup(e.currentUser,n):t.signInWithPopup(e,n)}function pi(e,t=2e4){let n=setTimeout(e,t);return()=>clearTimeout(n)}function mi(e){let t=typeof e==`object`&&e&&`code`in e?e.code:``;return t===`auth/credential-already-in-use`||t===`auth/email-already-in-use`?`此帳號已存在。訪客進度未合併；請先保留本機進度，再登入既有帳號。`:t===`auth/popup-closed-by-user`||t===`auth/cancelled-popup-request`?`已取消登入，本機進度未變更。`:t===`auth/popup-blocked`?`登入視窗被瀏覽器阻擋，請允許彈出視窗後再按 Google 登入。本機進度未變更。`:t===`auth/web-storage-unsupported`?`瀏覽器無法保存登入狀態。請使用一般瀏覽模式重試，勿清除遊戲網站資料。`:`登入操作未成功，請確認網路及帳號資料後再試。本機進度未變更。`}function hi(e){return typeof e==`object`&&e&&`code`in e&&typeof e.code==`string`?e.code:``}function gi(e){return e===`auth/email-already-in-use`||e===`auth/credential-already-in-use`?`此 Email 已有帳號，未建立新帳號。請返回登入，確認密碼或改用原本的登入方式。`:e===`auth/weak-password`||e===`auth/password-does-not-meet-requirements`?`密碼不符合安全要求，請設定較長的密碼後重試。`:e===`auth/network-request-failed`?`網路連線未成功，請稍後重試。本機進度未變更。`:e===`auth/too-many-requests`?`嘗試次數過多，請稍後再試。本機進度未變更。`:e===`auth/user-disabled`?`此帳號目前無法登入，請聯絡開發者。本機進度未變更。`:`登入操作未成功，請確認 Email、密碼與網路後重試。本機進度未變更。`}async function _i(e,t,n,r,i){let a=e.current(),o=a?.uid??null,s=!!a?.isAnonymous;if(i&&(i.expectedUid!==o||i.expectedAnonymous!==s))return{kind:`error`,message:`登入身分已變更，請重新輸入後再試。本機進度未變更。`};try{let i=await(r?s&&o?e.link(o,t,n):e.create(t,n):e.login(t,n));return e.current()?.uid===i.uid?{kind:`success`,registered:r}:{kind:`error`,message:`登入身分已變更，請重新確認帳號。本機進度未變更。`}}catch(t){let n=hi(t);return!r&&(e.current()?.uid??null)===o&&!!e.current()?.isAnonymous===s&&(n===`auth/user-not-found`||n===`auth/invalid-credential`)?{kind:`registration-offer`,reason:n===`auth/user-not-found`?`not-found`:`unconfirmed`,expectedUid:o,expectedAnonymous:s}:{kind:`error`,message:gi(n)}}}function vi(){let[e,t]=(0,K.useState)(!1),[n,r]=(0,K.useState)(!1),[o,s]=(0,K.useState)(null),[c,l]=(0,K.useState)(null),[u,d]=(0,K.useState)(``),[f,p]=(0,K.useState)(0),[m,h]=(0,K.useState)(!1),g=(0,K.useRef)(null),_=(0,K.useRef)(null),v=(0,K.useRef)(0),y=(0,K.useRef)(void 0),b=(0,K.useRef)(!1),x=(0,K.useRef)(!1);(0,K.useEffect)(()=>{x.current=!0;let e=!1,n;return(async()=>{try{let r=await i(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1]));if(e)return;let o=await a();if(e)return;g.current=o,_.current=r,n=r.onAuthStateChanged(o,n=>{e||(s(n),t(!0))})}catch{e||l(`登入初始化失敗；本機進度未變更。請稍後再試。`)}})(),()=>{e=!0,x.current=!1,v.current++,y.current?.(),n?.(),g.current=null,_.current=null}},[!0]);async function S(e,t=!1){if(!g.current||!_.current||b.current)return;let n=++v.current;b.current=!0,r(!0),l(null),d(``),h(!1),t&&(y.current=pi(()=>{x.current&&v.current===n&&(h(!0),l(`Google 登入尚未完成。若登入視窗停在錯誤頁，可返回這裡，保存盤面後重新載入登入。`))}));try{await e(g.current,_.current,()=>x.current&&v.current===n),x.current&&v.current===n&&t&&p(e=>e+1)}catch(e){x.current&&v.current===n&&l(mi(e))}finally{v.current===n&&(y.current?.(),b.current=!1,x.current&&(r(!1),h(!1)))}}async function C(e,t,n,a){let o=g.current;if(!o||b.current)return{kind:`error`,message:`帳號服務尚未準備完成，請稍後再試。`};let s=o.currentUser?.uid??null,c=!!o.currentUser?.isAnonymous;b.current=!0,r(!0),l(null),d(``);try{let r=await i(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1]));if(!x.current||o!==g.current||(o.currentUser?.uid??null)!==s||!!o.currentUser?.isAnonymous!==c)return{kind:`error`,message:`登入身分已變更，請重新確認帳號。`};let l=await _i({current:()=>o.currentUser,login:async(e,t)=>(await r.signInWithEmailAndPassword(o,e,t)).user,create:async(e,t)=>(await r.createUserWithEmailAndPassword(o,e,t)).user,link:async(e,t,n)=>{if(o.currentUser?.uid!==e||!o.currentUser.isAnonymous)throw Error(`Identity changed`);return(await r.linkWithCredential(o.currentUser,r.EmailAuthProvider.credential(t,n))).user}},e,t,n,a);return x.current&&l.kind===`success`&&(d(l.registered?`註冊完成，已登入。`:`已登入。`),p(e=>e+1)),l}catch{return{kind:`error`,message:`登入操作未成功，請稍後再試。本機進度未變更。`}}finally{b.current=!1,x.current&&r(!1)}}return{externalLinkTarget:Vn.isNativePlatform()?`_self`:`_blank`,signInSequence:f,googleRestartAvailable:m,enabled:e,googleEnabled:Hn()!==`unsupported`,busy:n||!e&&!c,initializing:!e&&!n,user:o?{uid:o.uid,email:o.email,isAnonymous:o.isAnonymous}:null,error:c,notice:u,onGoogle:()=>{let e=Hn();e!==`unsupported`&&S(e===`android`?Un:fi,!0)},onEmail:C,onGuest:()=>{S((e,t)=>t.signInAnonymously(e))},onSignOut:()=>{S(async(e,t,n)=>{let r=e.currentUser?.uid??null;if(Hn()===`android`&&e.currentUser?.providerData.some(e=>e.providerId===`google.com`)&&await Bn(),!n()||(e.currentUser?.uid??null)!==r)throw Error(`Identity changed`);await t.signOut(e)})}}}function yi(e,t){let n=e.main.data;if(n.engine.ledger.balance!==t||n.feedback.sequence>0||n.feedback.records.length>0||e.trophies.unlocked.length>1)return!0;let r=e.trial;return!!r&&(r.spent>0||r.rewards>0||r.sequence>0)}var J={asset:`assets/human-study/human-walk-knight-v2.json`,timeoutMs:3e4,sceneReadyTimeoutMs:35e3,fps:60,sceneHeight:4.46,cycle:{startFrame:5,frameCount:184,distance:.980941,seamBlend:.16},reachStart:2.7,reachEnd:3.8,releaseStart:4.55,releaseEnd:5.25,braceStart:2.9,braceEnd:3.3,braceRelease:4.35,palmOffset:[0,-.035,.025],elbowPole:[.35,-.8,-.18],stanceX:.175,stanceZ:.16,lean:.1,envIntensity:.65,envBlur:.04,reachFraction:.82,maximumAdvance:.48,pushPeak:4.4,sideAlign:.3,pelvisDrop:.09,stanceForward:.13,carryReach:.93,doorImpulseEnd:5.1,doorImpulseFraction:.35,sword:{handX:.29,handY:1.02,handZ:-.055,tipDistance:1.32,tipClearance:.008,bladeStart:.1,bladeWidth:.082,bladeThickness:.011,bladeRoll:.6,guardWidth:.32,guardRadius:.015,gripRadius:.023,gripLength:.15,pommelRadius:.032,gripCurl:[.55,1.05,.7]}};function bi(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xi(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Si={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Y={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new M},probesMax:{value:new M},probesResolution:{value:new M}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ci={basic:{uniforms:Dt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Si.meshbasic_vert,fragmentShader:Si.meshbasic_frag},lambert:{uniforms:Dt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Si.meshlambert_vert,fragmentShader:Si.meshlambert_frag},phong:{uniforms:Dt([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Si.meshphong_vert,fragmentShader:Si.meshphong_frag},standard:{uniforms:Dt([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Si.meshphysical_vert,fragmentShader:Si.meshphysical_frag},toon:{uniforms:Dt([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new $t(0)}}]),vertexShader:Si.meshtoon_vert,fragmentShader:Si.meshtoon_frag},matcap:{uniforms:Dt([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Si.meshmatcap_vert,fragmentShader:Si.meshmatcap_frag},points:{uniforms:Dt([Y.points,Y.fog]),vertexShader:Si.points_vert,fragmentShader:Si.points_frag},dashed:{uniforms:Dt([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Si.linedashed_vert,fragmentShader:Si.linedashed_frag},depth:{uniforms:Dt([Y.common,Y.displacementmap]),vertexShader:Si.depth_vert,fragmentShader:Si.depth_frag},normal:{uniforms:Dt([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Si.meshnormal_vert,fragmentShader:Si.meshnormal_frag},sprite:{uniforms:Dt([Y.sprite,Y.fog]),vertexShader:Si.sprite_vert,fragmentShader:Si.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Si.background_vert,fragmentShader:Si.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Si.backgroundCube_vert,fragmentShader:Si.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Si.cube_vert,fragmentShader:Si.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Si.equirect_vert,fragmentShader:Si.equirect_frag},distance:{uniforms:Dt([Y.common,Y.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Si.distance_vert,fragmentShader:Si.distance_frag},shadow:{uniforms:Dt([Y.lights,Y.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Si.shadow_vert,fragmentShader:Si.shadow_frag}};Ci.physical={uniforms:Dt([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Si.meshphysical_vert,fragmentShader:Si.meshphysical_frag};var wi={r:0,b:0,g:0},Ti=new pt,Ei=new Ft;Ei.set(-1,0,0,0,1,0,0,0,1);function Di(e,t,n,r,i,a){let o=new $t(0),s=i===!0?0:1,c,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?v(o,s):i&&i.isColor&&(v(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let i=m(n);i&&(i.isCubeTexture||i.mapping===306)?(u===void 0&&(u=new U(new Je(1,1,1),new be({name:`BackgroundCubeMaterial`,uniforms:l(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ti.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ei),u.material.toneMapped=He.getTransfer(i.colorSpace)!==g,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new ve(2,2),new be({name:`BackgroundMaterial`,uniforms:l(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=He.getTransfer(i.colorSpace)!==g,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function v(t,r){t.getRGB(wi,ft(e)),n.buffers.color.setClear(wi.r,wi.g,wi.b,r,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,v(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,v(o,s)},render:h,addToRenderList:_,dispose:y}}function Oi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ki(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ai(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ke(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ke(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ji(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qt,s=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Mi=4,Ni=6,Pi=20,Fi=256,Ii=new Kt,Li=new $t,Ri=null,zi=0,Bi=0,Vi=!1,Hi=new M,Ui=new M,Wi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Hi}=i;Ri=this._renderer.getRenderTarget(),zi=this._renderer.getActiveCubeFace(),Bi=this._renderer.getActiveMipmapLevel(),Vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ri,zi,Bi),this._renderer.xr.enabled=Vi,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ri=this._renderer.getRenderTarget(),zi=this._renderer.getActiveCubeFace(),Bi=this._renderer.getActiveMipmapLevel(),Vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Te,format:se,colorSpace:$e,depthBuffer:!1},r=Ki(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ki(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gi(r)),this._blurMaterial=Yi(r,e,t),this._ggxMaterial=Ji(r,e,t)}return r}_compileMaterial(e){let t=new U(new kt,e);this._renderer.compile(t,Ii)}_sceneToCubeUV(e,t,n,r,i){let a=new We(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Li),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new Je,new Ot({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Li),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;qi(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;qi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ii)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Mi?n-d+Mi:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,qi(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ii),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,qi(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ii)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];qi(t,3*l*(r>this._lodMax-Mi?r-this._lodMax+Mi:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ii)}};function Gi(e){let t=[],n=[],r=e,i=e-Mi+1+Ni;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ui.set(1,r,n):e===1?Ui.set(-n,1,-r):e===2?Ui.set(-n,r,1):e===3?Ui.set(-1,r,-n):e===4?Ui.set(-n,-1,r):Ui.set(n,r,-1),Ui.toArray(l,(e*6+t)*3)}}let u=new kt;u.setAttribute(`position`,new et(c,3)),u.setAttribute(`outputDirection`,new et(l,3)),n.push(new U(u,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:t}}function Ki(e,t,n){let r=new Fe(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function qi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ji(e,t,n){return new be({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yi(e,t,n){return new be({name:`SphericalGaussianBlur`,defines:{SAMPLES:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xi(){return new be({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zi(){return new be({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $i=class extends Fe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new h(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Je(5,5,5),i=new be({name:`CubemapFromEquirect`,uniforms:l(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Pe),new Xt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ea(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $i(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Wi(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Wi(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ta(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&bt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function na(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ie:A)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ra(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ia(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:wt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function aa(e,t,n){let r=new WeakMap,i=new Me;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new b(h,p,m,u);g.type=re,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Nt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function oa(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var sa={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ca(e,t,n,r,i,a){let o=new Fe(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new kt;l.setAttribute(`position`,new k([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new k([0,2,0,0,2,0],2));let u=new Ye({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new U(l,u),f=new Kt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Fe(t,n,{type:Te,depthBuffer:!1,stencilBuffer:!1}),c=new Fe(t,n,{type:Te,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},He.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=sa[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var la=new oe,ua=new u(1,1),da=new b,fa=new ye,pa=new h,ma=[],ha=[],ga=new Float32Array(16),_a=new Float32Array(9),va=new Float32Array(4);function ya(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ma[i];if(a===void 0&&(a=new Float32Array(i),ma[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ba(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sa(e,t){let n=ha[t];n===void 0&&(n=new Int32Array(t),ha[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ca(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2fv(this.addr,t),xa(n,t)}}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ba(n,t))return;e.uniform3fv(this.addr,t),xa(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4fv(this.addr,t),xa(n,t)}}function Da(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;va.set(r),e.uniformMatrix2fv(this.addr,!1,va),xa(n,r)}}function Oa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;_a.set(r),e.uniformMatrix3fv(this.addr,!1,_a),xa(n,r)}}function ka(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;ga.set(r),e.uniformMatrix4fv(this.addr,!1,ga),xa(n,r)}}function Aa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2iv(this.addr,t),xa(n,t)}}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ba(n,t))return;e.uniform3iv(this.addr,t),xa(n,t)}}function Na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4iv(this.addr,t),xa(n,t)}}function Pa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2uiv(this.addr,t),xa(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ba(n,t))return;e.uniform3uiv(this.addr,t),xa(n,t)}}function La(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4uiv(this.addr,t),xa(n,t)}}function Ra(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ua.compareFunction=n.isReversedDepthBuffer()?518:515,a=ua):a=la,n.setTexture2D(t||a,i)}function za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fa,i)}function Ba(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||pa,i)}function Va(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||da,i)}function Ha(e){switch(e){case 5126:return Ca;case 35664:return wa;case 35665:return Ta;case 35666:return Ea;case 35674:return Da;case 35675:return Oa;case 35676:return ka;case 5124:case 35670:return Aa;case 35667:case 35671:return ja;case 35668:case 35672:return Ma;case 35669:case 35673:return Na;case 5125:return Pa;case 36294:return Fa;case 36295:return Ia;case 36296:return La;case 35678:case 36198:case 36298:case 36306:case 35682:return Ra;case 35679:case 36299:case 36307:return za;case 35680:case 36300:case 36308:case 36293:return Ba;case 36289:case 36303:case 36311:case 36292:return Va}}function Ua(e,t){e.uniform1fv(this.addr,t)}function Wa(e,t){let n=ya(t,this.size,2);e.uniform2fv(this.addr,n)}function Ga(e,t){let n=ya(t,this.size,3);e.uniform3fv(this.addr,n)}function Ka(e,t){let n=ya(t,this.size,4);e.uniform4fv(this.addr,n)}function qa(e,t){let n=ya(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ja(e,t){let n=ya(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ya(e,t){let n=ya(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xa(e,t){e.uniform1iv(this.addr,t)}function Za(e,t){e.uniform2iv(this.addr,t)}function Qa(e,t){e.uniform3iv(this.addr,t)}function $a(e,t){e.uniform4iv(this.addr,t)}function eo(e,t){e.uniform1uiv(this.addr,t)}function to(e,t){e.uniform2uiv(this.addr,t)}function no(e,t){e.uniform3uiv(this.addr,t)}function ro(e,t){e.uniform4uiv(this.addr,t)}function io(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ua:la;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ao(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fa,a[e])}function oo(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||pa,a[e])}function so(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||da,a[e])}function co(e){switch(e){case 5126:return Ua;case 35664:return Wa;case 35665:return Ga;case 35666:return Ka;case 35674:return qa;case 35675:return Ja;case 35676:return Ya;case 5124:case 35670:return Xa;case 35667:case 35671:return Za;case 35668:case 35672:return Qa;case 35669:case 35673:return $a;case 5125:return eo;case 36294:return to;case 36295:return no;case 36296:return ro;case 35678:case 36198:case 36298:case 36306:case 35682:return io;case 35679:case 36299:case 36307:return ao;case 35680:case 36300:case 36308:case 36293:return oo;case 36289:case 36303:case 36311:case 36292:return so}}var lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ha(t.type)}},uo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=co(t.type)}},fo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},po=/(\w+)(\])?(\[|\.)?/g;function mo(e,t){e.seq.push(t),e.map[t.id]=t}function ho(e,t,n){let r=e.name,i=r.length;for(po.lastIndex=0;;){let a=po.exec(r),o=po.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mo(n,l===void 0?new lo(s,e,t):new uo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fo(s),mo(n,e)),n=e}}}var go=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ho(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _o(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vo=37297,yo=0;function bo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xo=new Ft;function So(e){He._getMatrix(xo,He.workingColorSpace,e);let t=`mat3( ${xo.elements.map(e=>e.toFixed(4))} )`;switch(He.getTransfer(e)){case zt:return[t,`LinearTransferOETF`];case g:return[t,`sRGBTransferOETF`];default:return Ke(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Co(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bo(e.getShaderSource(t),r)}return i}function wo(e,t){let n=So(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var To={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Eo(e,t){let n=To[t];return n===void 0?(Ke(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Do=new M;function Oo(){return He.getLuminanceCoefficients(Do),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Do.x.toFixed(4)}, ${Do.y.toFixed(4)}, ${Do.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ko(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mo).join(`
`)}function Ao(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function jo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mo(e){return e!==``}function No(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Po(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fo=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(e){return e.replace(Fo,Ro)}var Lo=new Map;function Ro(e,t){let n=Si[t];if(n===void 0){let e=Lo.get(t);if(e!==void 0)n=Si[e],Ke(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Io(n)}var zo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(e){return e.replace(zo,Vo)}function Vo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ho(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Uo={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Wo(e){return Uo[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Go={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ko(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Go[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var qo={302:`ENVMAP_MODE_REFRACTION`};function Jo(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:qo[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Yo={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Xo(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Yo[e.combine]||`ENVMAP_BLENDING_NONE`}function Zo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Qo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wo(n),l=Ko(n),u=Jo(n),d=Xo(n),f=Zo(n),p=ko(n),m=Ao(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mo).join(`
`),_.length>0&&(_+=`
`)):(g=[Ho(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mo).join(`
`),_=[Ho(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Si.tonemapping_pars_fragment,n.toneMapping===0?``:Eo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Si.colorspace_pars_fragment,wo(`linearToOutputTexel`,n.outputColorSpace),Oo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mo).join(`
`)),o=Io(o),o=No(o,n),o=Po(o,n),s=Io(s),s=No(s,n),s=Po(s,n),o=Bo(o),s=Bo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_o(i,i.VERTEX_SHADER,y),S=_o(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Co(i,x,`vertex`),n=Co(i,S,`fragment`);wt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ke(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new go(i,h),T=jo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var $o=0,es=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ts(e),t.set(e,n)),n}},ts=class{constructor(e){this.id=$o++,this.code=e,this.usedTimes=0}};function ns(e){return e===1030||e===37490||e===36285}function rs(e,t,n,r,i,a){let o=new Mt,s=new es,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Ke(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ci[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,N=!!i.map,ne=!!i.matcap,P=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,L=!!i.roughnessMap,ce=i.anisotropy>0,R=i.clearcoat>0,le=i.dispersion>0,z=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,B=i.transmission>0,fe=ce&&!!i.anisotropyMap,pe=R&&!!i.clearcoatMap,me=R&&!!i.clearcoatNormalMap,he=R&&!!i.clearcoatRoughnessMap,ge=ue&&!!i.iridescenceMap,_e=ue&&!!i.iridescenceThicknessMap,ve=de&&!!i.sheenColorMap,ye=de&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=B&&!!i.transmissionMap,we=B&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,V=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:ne,envMap:P,envMapMode:P&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&ns(i.normalMap.format),metalnessMap:I,roughnessMap:L,anisotropy:ce,anisotropyMap:fe,clearcoat:R,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:le,retroreflection:z,iridescence:ue,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:B,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:V,alphaHash:De,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:L&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:we&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&He.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&He.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ci[t];n=me.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Qo(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function is(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function as(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function os(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ss(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||as),r.length>1&&r.sort(t||os),i.length>1&&i.sort(t||os)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function cs(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ss,e.set(t,[i])):n>=r.length?(i=new ss,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ls(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new M,color:new $t};break;case`SpotLight`:n={position:new M,direction:new M,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new M,color:new $t,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new M,skyColor:new $t,groundColor:new $t};break;case`RectAreaLight`:n={color:new $t,position:new M,halfWidth:new M,halfHeight:new M}}return e[t.id]=n,n}}}function us(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ds=0;function fs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ps(e){let t=new ls,n=us(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new M);let i=new M,a=new pt,o=new pt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(fs);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ds++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ms(e){let t=new ps(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function hs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ms(e),t.set(n,[a])):r>=i.length?(a=new ms(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var gs=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_s=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vs=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],ys=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],bs=new pt,xs=new M,Ss=new M;function Cs(e,t,n){let r=new pe,i=new Nt,a=new Nt,o=new Me,s=new Lt,c=new qe,l={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:gs,fragmentShader:_s}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new kt;h.setAttribute(`position`,new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new U(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(Ke(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],f=l.shadow;if(f===void 0){Ke(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let h=f.getFrameExtents();i.multiply(h),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/h.x),i.x=a.x*h.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/h.y),i.y=a.y*h.y,f.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(l.isPointLight){Ke(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new Fe(i.x,i.y,{format:yt,type:Te,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),f.map.texture.name=l.name+`.shadowMap`,f.map.depthTexture=new u(i.x,i.y,re),f.map.depthTexture.name=l.name+`.shadowMapDepth`,f.map.depthTexture.format=R,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=jt,f.map.depthTexture.magFilter=jt}else l.isPointLight?(f.map=new $i(i.x),f.map.depthTexture=new ge(i.x,Ce)):(f.map=new Fe(i.x,i.y),f.map.depthTexture=new u(i.x,i.y,Ce)),f.map.depthTexture.name=l.name+`.shadowMap`,f.map.depthTexture.format=R,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=Pe,f.map.depthTexture.magFilter=Pe):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=jt,f.map.depthTexture.magFilter=jt);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let _=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();l.isPointLight!==!0&&f.updateMatrices(l,s);for(let t=0;t<_;t++){let i=f.getCamera(t);if(l.isPointLight){let e=f.camera,n=f.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),xs.setFromMatrixPosition(l.matrixWorld),e.position.copy(xs),Ss.copy(e.position),Ss.add(vs[t]),e.up.copy(ys[t]),e.lookAt(Ss),e.updateMatrixWorld(),n.makeTranslation(-xs.x,-xs.y,-xs.z),bs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(bs,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=f.getFrustum(t),x(n,s,i,l,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,s),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Fe(i.x,i.y,{format:yt,type:Te}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ws(e,t){function n(){let t=!1,n=new Me,r=null,i=new Me(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $t(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=te>=1);let ne=null,P={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Me().fromArray(re),F=new Me().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),I(e.CULL_FACE),de(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function R(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let z={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};z[103]=e.MIN,z[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(L(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:wt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:wt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:wt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:wt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(z[n],z[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function B(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(M&&e.lineWidth(t),k=t)}function he(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ge(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function ve(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function ye(){let t=P[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function V(){try{e.texStorage3D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){wt(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function H(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,P={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $t(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:L,bindFramebuffer:ce,drawBuffers:R,useProgram:le,setBlending:de,setMaterial:B,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Ee,texStorage3D:V,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:je,viewport:H,reset:Fe}}function Ts(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Nt,d=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):Rt(`canvas`)}function _(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ke(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ke(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ke(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Ke(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?zt:He.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ke(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t)}function E(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&D(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function D(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function O(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let k=0;function A(){k=0}function j(){return k}function ee(e){k=e}function M(){let e=k;return e>=i.maxTextures&&Ke(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),k+=1,e}function te(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ke(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ke(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){R(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[lt]:e.REPEAT,[Wt]:e.CLAMP_TO_EDGE,[rt]:e.MIRRORED_REPEAT},ae={[jt]:e.NEAREST,[dt]:e.NEAREST_MIPMAP_NEAREST,[Ct]:e.NEAREST_MIPMAP_LINEAR,[Pe]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[de]:e.LINEAR_MIPMAP_LINEAR},F={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function oe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Ke(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,F[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=te(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&D(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(e,t,n){return Math.floor(Math.floor(e/n)/t)}function L(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=I(n.start,r.width,4),c=I(t.start,r.width,4);n.start<=i+1&&a===c&&I(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=He.getPrimaries(He.workingColorSpace),r=o.colorSpace===``?null:He.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);oe(c,o);let h,g=o.mipmaps,b=o.isVideoTexture!==!0,w=d.__version===void 0||l===!0,T=u.dataReady,E=C(o,t);if(o.isDepthTexture)m=S(o.format===gt,o.type),w&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&L(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(b){if(T){if(o.layerUpdates.size>0){let t=Pt(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Pt(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&w){let t=Se(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(w){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function R(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=He.getPrimaries(He.workingColorSpace),r=o.colorSpace===``?null:He.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,g,b,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(o,h);oe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ye(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ve(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ye(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);ye(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=ve(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)ye(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)ye(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function B(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ue(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ue(i.__webglFramebuffer[0],t,0):ue(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),z(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),z(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&B(t)}function pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ye(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ve(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),z(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),oe(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),oe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&B(t)}function me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let he=[],ge=[];function _e(t){if(t.samples>0){if(ye(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(he.length=0,ge.length=0,he.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(he.push(c),ge.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ve(e){return Math.min(i.maxSamples,e.samples)}function ye(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(He.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ke(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):wt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=M,this.resetTextureUnits=A,this.getTextureUnits=j,this.setTextureUnits=ee,this.setTexture2D=N,this.setTexture2DArray=ne,this.setTexture3D=P,this.setTextureCube=re,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Es(e,t){function n(n,r=``){let i,a=He.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ds=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Os=`
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

}`,ks=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new z(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new be({vertexShader:Ds,fragmentShader:Os,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},As=class extends I{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new ks,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new Nt,w=null,T=null,E=new We;E.viewport=new Me;let D=new We;D.viewport=new Me;let O=[E,D],k=new Ge,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new B,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new B,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new B,x[e]=t),t.getHandSpace()};function ee(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}A=null,j=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(y),p=null,f=null,d=null,r=null,b=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ke(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ke(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&h&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,N),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?gt:R,a=v.stencil?Ee:Ce);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Fe(f.textureWidth,f.textureHeight,{format:se,type:W,depthTexture:new u(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Fe(p.framebufferWidth,p.framebufferHeight,{format:se,type:W,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new M,P=new M;function re(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ie(k,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,k,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=le*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let F=null;function oe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new We,o.layers.enable(n),o.viewport=new Me,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new z,_[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let I=new bi;I.setAnimationLoop(oe),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},js=new pt,Ms=new Ft;Ms.set(-1,0,0,0,1,0,0,0,1);function Ns(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ft(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(js.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ms),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ps(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return wt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ke(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ke(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Fs=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Is=null;function Ls(){return Is===null&&(Is=new v(Fs,16,16,yt,Te),Is.name=`DFG_LUT`,Is.minFilter=Pe,Is.magFilter=Pe,Is.wrapS=Wt,Is.wrapT=Wt,Is.generateMipmaps=!1,Is.needsUpdate=!0),Is}var Rs=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=W}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ce,Vt,St]),g=new Set([W,Ce,ne,Ee,De,E]),_=new Uint32Array(4),v=new Int32Array(4),y=new M,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,D=!1,O=null,k=null,A=null,j=null;this._outputColorSpace=_e;let ee=0,te=0,N=null,P=-1,re=null,ie=new Me,ae=new Me,F=null,oe=new $t(0),se=0,I=t.width,L=t.height,R=1,le=null,z=null,ue=new Me(0,0,I,L),B=new Me(0,0,I,L),fe=!1,me=new pe,he=!1,ge=!1,ve=new pt,ye=new M,be=new Me,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function we(){return N===null?R:1}let V=n;function Oe(e,n){return t.getContext(e,n)}let ke,je,H,Ne,Pe,Ie,Le,Re,ze,Be,U,Ue,We,Ge,qe,Je,Ye,Xe,Ze,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),V===null){let t=`webgl2`;if(V=Oe(t,e),V===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),wt(`WebGLRenderer: `+e.message),e}function rt(){ke=new ta(V),ke.init(),et=new Es(V,ke),je=new Ai(V,ke,e,et),H=new ws(V,ke),je.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),k=V.createFramebuffer(),A=V.createFramebuffer(),j=V.createFramebuffer(),Ne=new ia(V),Pe=new is,Ie=new Ts(V,ke,H,Pe,je,et,Ne),Le=new ea(T),Re=new xi(V),tt=new Oi(V,Re),ze=new na(V,Re,Ne,tt),Be=new oa(V,ze,Re,tt,Ne),Xe=new aa(V,je,Ie),qe=new ji(Pe),U=new rs(T,Le,ke,je,tt,qe),Ue=new Ns(T,Pe),We=new cs,Ge=new hs(ke),Ye=new Di(T,Le,H,Be,p,s),Je=new Cs(T,Be,je),nt=new Ps(V,Ne,je,H),Ze=new ki(V,ke,Ne),$e=new ra(V,ke,Ne),Ne.programs=U.programs,T.capabilities=je,T.extensions=ke,T.properties=Pe,T.renderLists=We,T.shadowMap=Je,T.state=H,T.info=Ne}m!==1009&&(w=new ca(m,t.width,t.height,o,r,i));let it=new As(T,V);this.xr=it,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(e){e!==void 0&&(R=e,this.setSize(I,L,!1))},this.getSize=function(e){return e.set(I,L)},this.setSize=function(e,n,r=!0){if(it.isPresenting){Ke(`WebGLRenderer: Can't change size while VR device is presenting.`);return}I=e,L=n,t.width=Math.floor(e*R),t.height=Math.floor(n*R),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(I*R,L*R).floor()},this.setDrawingBufferSize=function(e,n,r){I=e,L=n,R=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){wt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ke(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ie)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),H.viewport(ie.copy(ue).multiplyScalar(R).round())},this.getScissor=function(e){return e.copy(B)},this.setScissor=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),H.scissor(ae.copy(B).multiplyScalar(R).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(e){H.setScissorTest(fe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){z=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,V.clearBufferiv(V.COLOR,0,v))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),O=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Ye.dispose(),We.dispose(),Ge.dispose(),Pe.dispose(),Le.dispose(),Be.dispose(),tt.dispose(),nt.dispose(),U.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,ht),it.removeEventListener(`sessionend`,gt),_t.stop()};function at(e){e.preventDefault(),Ve(`WebGLRenderer: Context Lost.`),D=!0}function ot(){Ve(`WebGLRenderer: Context Restored.`),D=!1;let e=Ne.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;rt(),Ne.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function st(e){wt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),Pe.remove(e)}function ut(e){let t=Pe.get(e).programs;t!==void 0&&(t.forEach(function(e){U.releaseProgram(e)}),e.isShaderMaterial&&U.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Re.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*we()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*we()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=Pe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){O!==null&&e.isNodeMaterial&&O.setObject(r,e),he===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),O!==null&&O.renderStart(e,t,n),x=Ge.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),O!==null&&O.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=qe.init(this.clippingPlanes,ge),he===!0&&qe.setGlobalState(this.clippingPlanes,t),O!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),O!==null&&O.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Pe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function mt(e){ft&&ft(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new bi;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?_t.stop():_t.start()},it.addEventListener(`sessionstart`,ht),it.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){wt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(D===!0)return;O!==null&&O.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ge.get(e,C.length),x.init(t),x.state.textureUnits=Ie.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(ve,Ae,t.reversedDepth),ge=this.localClippingEnabled,he=qe.init(this.clippingPlanes,ge),b=We.get(e,S.length),b.init(),S.push(b),it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,T.sortObjects)}vt(e,t,0,T.sortObjects),b.finish(),O!==null&&O.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,z),Se=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Se&&Ye.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),he===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Se&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(b,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Se&&Ye.render(e),yt(b,e,t)}N!==null&&te===0&&(Ie.updateMultisampleRenderTarget(N),Ie.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),P=-1,re=null,C.pop(),C.length>0?(x=C[C.length-1],Ie.setTextureUnits(x.state.textureUnits),he===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,O!==null&&O.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(me)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Be.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(me))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&H.viewport(ie.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Fe(1,1,{generateMipmaps:!0,type:e?Te:W,minFilter:de,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ie;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&qe.setGlobalState(T.clippingPlanes,r),xt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){O!==null&&i.isNodeMaterial&&O.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=xe);let r=Pe.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=U.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=U.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=U.getUniforms(e),O!==null&&e.isNodeMaterial&&O.build(e,n,s),e.onBeforeCompile(s,T),d=U.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=go.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=Pe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:He.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Pe.get(r),y=x.state.lights;if(he===!0&&(ge===!0||e!==re)){let t=e===re&&r.id===P;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Tt(r,t,i),O&&r.isNodeMaterial&&O.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,D=S.getUniforms(),k=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=Ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||re!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(V,`projectionMatrix`,e.projectionMatrix),D.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(V,ye.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&D.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),re!==e&&(re=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(V,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&D.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&D.setValue(V,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&D.setValue(V,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){D.setOptional(V,i,`bindMatrix`),D.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(V,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(D.setOptional(V,i,`batchingTexture`),D.setValue(V,`batchingTexture`,i._matricesTexture,Ie),D.setOptional(V,i,`batchingIdTexture`),D.setValue(V,`batchingIdTexture`,i._indirectTexture,Ie),D.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(V,`batchingColorTexture`,i._colorsTexture,Ie));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Xe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Ls()),w){if(D.setValue(V,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&At(k,E),a&&r.fog===!0&&Ue.refreshFogUniforms(k,a),Ue.refreshMaterialUniforms(k,r,R,L,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}go.upload(V,Et(v),k,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(go.upload(V,Et(v),k,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(V,`center`,i.center),D.setValue(V,`modelViewMatrix`,i.modelViewMatrix),D.setValue(V,`normalMatrix`,i.normalMatrix),D.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=Pe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Pe.get(e.texture).__webglTexture=t,Pe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Pe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=Pe.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),ie.copy(e.viewport),ae.copy(e.scissor),F=e.scissorTest,H.viewport(ie),H.scissor(ae),H.setScissorTest(F),P=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,Pe.get(e.texture).__webglTexture,Pe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Pe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Pe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?Pe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ie.copy(e.viewport),ae.copy(e.scissor),F=e.scissorTest}else ie.copy(ue).multiplyScalar(R).floor(),ae.copy(B).multiplyScalar(R).floor(),F=fe;if(n!==0&&(r=k),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(ie),H.scissor(ae),H.setScissorTest(F),i){let r=Pe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Pe.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Pe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}P=-1};function Mt(e){let t=Pe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){wt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){wt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){wt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=N===null?null:Pe.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=N===null?null:Pe.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await It(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Pe.get(e),r=Pe.get(t),h=Pe.get(n.__renderTarget),g=Pe.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Pe.has(e)){let n=Pe.get(e),r=Pe.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,A),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,j);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){Pe.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){ee=0,te=0,N=null,H.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ae}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function zs(e){let t=s.treasuryScene.surface,n=[new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4)],r=(e,n,r=1)=>{let i=Math.abs(e/r),a=Math.abs(n/r);return i<t.crossStroke&&a<t.crossArm||a<t.crossStroke&&i<t.crossArm||i<t.crossTip&&Math.abs(a-t.crossArm)<t.crossTipDepth||a<t.crossTip&&Math.abs(i-t.crossArm)<t.crossTipDepth};for(let i=0;i<t.size;i++)for(let a=0;a<t.size;a++){let o=(a+.5)/t.size*2-1,s=(i+.5)/t.size*2-1,c=Math.hypot(o,s),l=Math.atan2(s,o),u=Math.sin(i*t.grainFrequency)*t.grainAmplitude,d=!1;if(e===`coin`){let e=Math.round(l*t.beadCount/(Math.PI*2))*Math.PI*2/t.beadCount;d=Math.abs(c-t.rimRadius)<t.rimWidth||Math.abs(c-t.innerRadius)<t.innerWidth||Math.hypot(o-Math.cos(e)*t.beadRadius,s-Math.sin(e)*t.beadRadius)<t.beadSize||r(o,s)||r(Math.abs(o)-t.satelliteOffset,Math.abs(s)-t.satelliteOffset,t.satelliteScale)}let f=e===`coin`?[(d?t.reliefAlbedo:t.fieldAlbedo)+u,(d?t.reliefHeight:t.fieldHeight)+u,(d?t.reliefRoughness:t.fieldRoughness)+u]:[t.reliefAlbedo+u,t.fieldHeight+u,t.fieldRoughness+u];for(let e=0;e<n.length;e++){let r=n[e],o=(i*t.size+a)*4,s=Math.round(Tt.clamp(f[e],0,1)*255);r[o]=r[o+1]=r[o+2]=s,r[o+3]=255}}let i=n.map((n,r)=>{let i=new v(n,t.size,t.size,se);return i.name=`${e}-${[`albedo`,`height`,`roughness`][r]}`,i.colorSpace=r===0?_e:``,i.magFilter=Pe,i.minFilter=de,i.generateMipmaps=!0,e===`steel`&&(i.wrapS=i.wrapT=lt),i.needsUpdate=!0,i});return{albedo:i[0],height:i[1],roughness:i[2]}}function Bs(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function Vs(e){let{doors:t,fov:n}=s.cinematic,r=Number.isFinite(e)&&e>0?e:1,i=n*Math.PI/360;return Math.max(t.height+t.frameWidth*2,(t.width+t.frameWidth*2)/r)/(2*Math.tan(i))*t.cameraMargin+t.frameDepth}function Hs(e,t,n=`gentle`){let{doors:r,introSeconds:i}=s.cinematic,a=Number.isFinite(e)?Math.max(0,Math.min(i,e)):0,o=n===`push`?Bs(a,r.openStart,J.doorImpulseEnd)*J.doorImpulseFraction+Bs(a,J.doorImpulseEnd,r.openEnd)*(1-J.doorImpulseFraction):Bs(a,r.openStart,r.openEnd),c=Bs(a,r.pushStart,i),l=Vs(t),u=l*(1-r.approachFraction*o);return{angle:o*r.openDegrees*Math.PI/180,opening:o,cameraZ:u+(r.endCameraZ-u)*c,cameraY:r.startCameraY+(r.endCameraY-r.startCameraY)*c,fitZ:l,light:r.lightStart+(r.lightEnd-r.lightStart)*o}}function Us(e=`gentle`){let t=s.cinematic.doors,n=s.premium,r=new p;r.name=`vault-door-portal`;let i=new Set,a=new Set,o=new Set,c=new Set([`door`,`wall`]),l=!1,u,d=()=>{},f=new Promise(e=>{d=e}),m=()=>{},h=new Promise(e=>{m=e}),g=e=>(i.add(e),e),y=e=>(a.add(e),e),b=()=>{l||(l=!0,clearTimeout(u),d(),m(),i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),o.forEach(e=>e.dispose()),r.clear())};try{let i=g(new Je),a=y(new Ze({color:n.colors.champagne,metalness:n.materials.metalness,roughness:n.materials.goldRoughness})),s=y(new Ze({color:n.colors.coinSide,metalness:t.faceMetalness,roughness:t.faceRoughness})),x=new Uint8Array(t.stoneSize*t.stoneSize*4),S=t.stoneSize/t.stoneRows,C=t.stoneSize/t.stoneColumns;for(let e=0;e<t.stoneSize;e++)for(let n=0;n<t.stoneSize;n++){let r=Math.floor(e/S),i=(n+r%2*C/2)%C,a=e%S<t.stoneGroutPx||i<t.stoneGroutPx,o=Math.sin(n*t.goldenAngle+e)*Math.cos(e*t.goldenAngle-n),s=Math.round(255*(a?t.stoneGroutValue:t.stoneValue+o*t.stoneNoise)),c=(e*t.stoneSize+n)*4;x[c]=x[c+1]=x[c+2]=s,x[c+3]=255}let w=new v(x,t.stoneSize,t.stoneSize);w.wrapS=w.wrapT=lt,w.magFilter=Pe,w.minFilter=de,w.generateMipmaps=!0,w.needsUpdate=!0,o.add(w);let T=y(new Ze({color:t.stoneColor,metalness:0,roughness:t.stoneRoughness,map:w,bumpMap:w,bumpScale:t.stoneBump})),E=y(new Ot({color:n.colors.white,toneMapped:!1,visible:!1})),D=y(new Ot({color:n.colors.white,toneMapped:!1,visible:!1})),O=y(new Ze({color:n.colors.edge,metalness:n.materials.metalness,roughness:n.materials.goldRoughness,emissive:n.colors.coinSide,emissiveIntensity:t.sealEmissive})),k=(e,t,n,r)=>{let a=new U(i,r);return a.scale.set(...t),a.position.set(...n),e.add(a),a},A=t.width/2,j=t.height/2,ee=(e,n,i,a,o,s)=>{let c=g(new ve(n-e,a-i)),l=c.getAttribute(`position`),u=c.getAttribute(`uv`);for(let r=0;r<u.count;r++){let o=l.getX(r)+(e+n)/2,c=l.getY(r)+(i+a)/2;u.setXY(r,s?o/t.wallArtWidth+.5:o/t.stoneRepeatWorld,s?(c-t.wallArtCenterY)/t.wallArtHeight+.5:c/t.stoneRepeatWorld)}let d=new U(c,o);d.name=s?`vault-facade-wall`:`vault-stone-wall`,d.position.set((e+n)/2,(i+a)/2,t.thickness/2+t.faceLift*(s?2:1)),r.add(d)};for(let e of[-1,1])k(r,[t.wallExtent,t.height+t.wallExtent*2,t.thickness],[e*(A+t.wallExtent/2),0,0],T),k(r,[t.width,t.wallExtent,t.thickness],[0,e*(j+t.wallExtent/2),0],T),k(r,[t.frameWidth,t.height+t.frameWidth*2,t.frameDepth],[e*(A+t.frameWidth/2),0,t.frameDepth/2],a),k(r,[t.width,t.frameWidth,t.frameDepth],[0,e*(j+t.frameWidth/2),t.frameDepth/2],a);ee(-t.wallExtent,-A,-t.wallExtent,t.wallExtent,T,!1),ee(A,t.wallExtent,-t.wallExtent,t.wallExtent,T,!1),ee(-A,A,j,t.wallExtent,T,!1),ee(-A,A,-t.wallExtent,-j,T,!1);let M=t.wallArtCenterY-t.wallArtHeight/2,te=t.wallArtCenterY+t.wallArtHeight/2;ee(-t.wallArtWidth/2,-A,M,te,E,!0),ee(A,t.wallArtWidth/2,M,te,E,!0),ee(-A,A,j,te,E,!0),ee(-A,A,M,-j,E,!0);let N=g(new qt(t.pillarRadius,t.pillarRadius,t.pillarHeight,t.pillarSegments)),ne=g(new qt(t.pillarRadius*t.pillarRimScale,t.pillarRadius*t.pillarRimScale,t.pillarRimHeight,t.pillarSegments)),P=g(new ht(t.sconceRadius,t.boltSegments,t.boltSegments)),re=y(new Ot({color:n.colors.light,toneMapped:!1}));for(let e of[-1,1]){let i=e*(A+t.pillarOffset),o=new U(N,T);o.position.set(i,0,t.frameDepth),r.add(o);for(let e of[-1,1]){let n=new U(ne,a);n.position.set(i,e*(t.pillarHeight/2-t.pillarRimHeight),t.frameDepth),r.add(n)}let s=new U(P,re);s.position.set(i,t.sconceY,t.sconceZ),r.add(s);let c=new _(n.colors.light,t.sconceIntensity,t.sconceDistance,t.sconceDecay);c.position.copy(s.position),r.add(c)}let ie=g(new qt(t.hingeRadius,t.hingeRadius,t.hingeHeight,t.hingeSegments)),ae=g(new ht(t.boltRadius,t.boltSegments,t.boltSegments)),F=g(new ue(t.sealRadius,t.sealTube,t.hingeSegments,t.sealSegments,Math.PI)),oe=[];for(let e of[-1,1]){let n=new p;n.name=e<0?`vault-left-hinge`:`vault-right-hinge`,n.position.x=e*A,r.add(n),oe.push(n);let i=-e*A/2;k(n,[A+t.seamOverlap,t.height,t.thickness],[i,0,0],s);let o=g(new ve(A+t.seamOverlap,t.height)),c=o.getAttribute(`uv`);for(let t=0;t<c.count;t++)c.setX(t,c.getX(t)/2+(e>0?.5:0));let l=new U(o,D);l.position.set(i,0,t.thickness/2+t.faceLift),n.add(l);let u=t.thickness/2+t.innerRail/2+t.faceLift;for(let e of[-1,1]){k(n,[t.innerRail,t.height-t.railInset*2,t.innerRail],[i+e*(A/2-t.railInset),0,u],a),k(n,[A-t.railInset*2,t.innerRail,t.innerRail],[i,e*(j-t.railInset),u],a);for(let r=0;r<t.boltRows;r++){let o=new U(ae,a);o.position.set(i+e*(A/2-t.boltInset),-j+t.boltInset+(t.height-t.boltInset*2)*r/(t.boltRows-1),u),n.add(o)}}for(let e of[-1,0,1]){let r=new U(ie,a);r.position.set(0,e*t.hingeSpacing,t.thickness/2),n.add(r)}let d=new U(F,O);d.position.set(-e*A,t.sealY,u+t.sealLift),d.rotation.z=e<0?Math.PI/2:-Math.PI/2,n.add(d)}let se=new _(n.colors.light,t.lightStart,t.lightDistance,t.lightDecay);se.position.set(t.lightPosition[0],t.lightPosition[1],t.lightPosition[2]),r.add(se);let I=e=>{c.delete(e),e===`door`&&m(),c.size===0&&(clearTimeout(u),d())};u=setTimeout(()=>{c.clear(),m(),d()},t.textureTimeoutMs);let ce=(e,t,r)=>{let i=new L().load(t,t=>{if(l){t.dispose();return}t.colorSpace=_e,t.anisotropy=n.texture.anisotropy,r.map=t,r.visible=!0,r.needsUpdate=!0,I(e)},void 0,()=>I(e));o.add(i)};return ce(`door`,t.faceAsset,D),ce(`wall`,t.wallAsset,E),{root:r,ready:f,frontReady:h,draw(t,n){let i=Hs(t,n,e);return oe[0].rotation.y=i.angle,oe[1].rotation.y=-i.angle,se.intensity=i.light,r.updateMatrixWorld(!0),i},dispose:b}}catch(e){throw b(),e}}var Ws={height:1.8,colors:{background:`#171c24`,body:`#aab0b3`,floor:`#30363e`,grid:`#58626d`,light:`#fff3e1`,fill:`#adc8ec`,text:`#e4e8ef`},material:{roughness:.68,metalness:.04},camera:{fov:38,near:.05,far:60,distance:3.1,height:1.2,targetY:.95},light:{ambient:2,key:3.2,fill:1.3,shadowSize:1024},floor:{size:30,divisions:60,y:-.015},knight:{startFrame:181,frameCount:421,elbowBendScale:.55,elbowMin:.24,elbowMax:.48,fingerCurl:[.3,.42,.25]},pixelRatio:1.5,timeoutMs:12e3};function Gs(e){let t=new p,n=new kt;n.setAttribute(`position`,new k(e.positions,3)),n.setAttribute(`skinIndex`,new A(e.skinIndex,4)),n.setAttribute(`skinWeight`,new k(e.skinWeight,4)),n.setIndex(e.indices),n.computeVertexNormals();let r=new Ze({color:Ws.colors.body,...Ws.material}),i=new d(n,r);i.name=`makehuman-continuous-body`,i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let a=e.bones.map(e=>{let t=new vt;return t.name=e.name,t});e.bones.forEach((t,n)=>{a[n].position.fromArray(t.head),t.parent>=0?(a[n].position.sub(new M().fromArray(e.bones[t.parent].head)),a[t.parent].add(a[n])):i.add(a[n])}),t.add(i),t.updateMatrixWorld(!0);let o=new _t(a);i.bind(o);let s=(e.frames.length-1)/e.fps,c=new S,l=new S,u=e.positions.reduce((t,n,r)=>(r%3==1&&e.positions[r]<.16&&t.push((r-1)/3),t),[]),f=0,m=!1;function h(n){if(m)return;let r=Tt.clamp(Number.isFinite(n)?n:0,0,s)*e.fps,i=Math.floor(r),o=e.frames[i],u=e.frames[Math.min(i+1,e.frames.length-1)],d=r-i;a.forEach((e,t)=>{c.fromArray(o.q,t*4),l.fromArray(u.q,t*4),e.quaternion.copy(c).slerp(l,d).normalize()}),t.position.fromArray(o.root).lerp(new M().fromArray(u.root),d),t.position.y+=f,t.updateMatrixWorld(!0)}h(0);let g=new M,_=1/0;for(let e of u)i.getVertexPosition(e,g),_=Math.min(_,g.y);return f=e.groundOffset??-_,h(0),{root:t,mesh:i,bones:a,skeleton:o,duration:s,draw:h,dispose(){m||(m=!0,n.dispose(),r.dispose(),o.dispose())}}}var X={colors:{mail:`#56616a`,steel:`#a9b4bb`,brass:`#b49a57`,linen:`#dad0b6`,red:`#622b34`,leather:`#30221c`,dark:`#111419`},material:{mail:{roughness:.84,metalness:.35},steel:{roughness:.38,metalness:.78},brass:{roughness:.48,metalness:.72},cloth:{roughness:.96,metalness:0},leather:{roughness:.86,metalness:.02}},assets:{mail:`assets/knight/chainmail-v1.webp`,steel:`assets/knight/forged-steel-v1.webp`,linen:`assets/knight/ivory-linen-v1.webp`},texture:{timeoutMs:3e4,repeatPerMetre:7,anisotropy:4,mailBump:.0014,clothBump:5e-4},surface:{mailOffset:.008,gloveOffset:.005,handThreshold:.4,mailMinY:.24,mailMaxY:1.58,coveredMinY:.65,coveredMaxY:1.28,coveredMaxX:.24,slitInnerX:.105},coat:{segments:48,folds:12,foldDepth:.003,armholeY:1.32,armholeWidth:.8,rows:[[.96,.194,.158,.023],[1.04,.178,.152,.034],[1.12,.178,.154,.04],[1.22,.2,.162,.034],[1.32,.221,.152,.03],[1.41,.238,.131,.024],[1.47,.213,.1,.02],[1.51,.148,.082,.027],[1.525,.071,.065,.027]],hemY:.61,split:.025,hemFlare:.08,skirtRows:12,legBlendHeight:.12},belt:{y:1.058,height:.04,x:.181,z:.155,centerZ:.035,buckleWidth:.059,buckleHeight:.048,buckleTube:.004},helmet:{segments:32,rows:[[1.548,.105,.125,.055],[1.61,.117,.14,.055],[1.71,.116,.143,.055],[1.785,.112,.137,.046],[1.818,.072,.096,.038],[1.825,.001,.001,.038]],eyeY:1.7,eyeHeight:.012,eyeWidth:.072,eyeX:.049,browY:1.715,browHeight:.009,noseWidth:.017,noseHeight:.135,rivetRadius:.003,ventRadius:.0024},cross:{centerY:1.338,width:.175,height:.225,stroke:.044,offset:.003},cape:{width:.49,flare:.08,topY:1.47,length:.77,topZ:-.145,bottomZ:-.28,columns:20,rows:24,folds:5,foldDepth:.014,physics:{fps:60,gravity:9.81,damping:.991,drag:2.8,iterations:7,relaxFrames:35,shear:.55,bend:.13,gust:1.2,gustFrequency:3.8,ripple:.35,lateralGust:1.4,lateralFrequency:2.8,bodyRadius:.185,thighRadius:.087,collisionMargin:.007}},boot:{height:.3,ankleWidth:.047,calfWidth:.057,footWidth:.061,toeZ:.205,heelZ:-.071,soleY:.008,instepY:.087,segments:32},clothMotion:{amplitude:.01,frequency:5.4},fitting:{neighbours:3,epsilon:1e-4,torsoMaxX:.235,thighRadius:.124,clothClearance:.008,waistPinY:.947,collisionIterations:3,slitTopY:.82,capeBands:40,capeLowY:.45,capeHighY:1.58,capeGarmentGap:.022},mantle:{segments:64,rows:8,neckX:.075,neckZ:.074,neckY:1.535,shoulderX:.26,frontZ:.165,rearZ:.155,centerZ:.01,edgeY:1.42,backRise:.05,overlap:.015},detail:{tubeSides:6,curveSegments:32,buttonRadius:.011},studio:{environmentIntensity:.75,environmentBlur:.04,ambient:.9,key:2,fill:.9,exposure:.95}},Ks=X.cape,qs=Ks.physics,Js=Tt.clamp,Ys=new WeakMap;function Xs(e){let t=(e-.5)*Ks.width,n=Math.sqrt(Math.max(0,1-(t/X.mantle.shoulderX)**2));return new M(t,X.mantle.edgeY+X.mantle.backRise*n,X.mantle.centerZ-X.mantle.rearZ*n)}function Zs(){let e=new Float32Array((Ks.columns+1)*(Ks.rows+1)*3),t=[],n=[];for(let r=0;r<=Ks.rows;r++)for(let i=0;i<=Ks.columns;i++){let a=r/Ks.rows,o=i/Ks.columns,s=(r*(Ks.columns+1)+i)*3,c=Xs(o);if(e[s]=c.x+(o-.5)*Ks.flare*a,e[s+1]=Tt.lerp(c.y,Ks.topY-Ks.length,a),e[s+2]=Tt.lerp(c.z,Ks.bottomZ,a)+Math.cos(o*Math.PI*2*Ks.folds)*Ks.foldDepth*a,t.push(o,a),r<Ks.rows&&i<Ks.columns){let e=s/3,t=e+1,r=e+Ks.columns+1,i=r+1;n.push(e,r,t,t,r,i)}}return{positions:e,uv:t,indices:n}}function Qs(e){let t=[`spine01`,`spine03`,`spine05`,`upperleg01.L`,`upperleg01.R`,`lowerleg01.L`,`lowerleg01.R`],n=new Set;for(let r of t){let t=e.bones.findIndex(e=>e.name===r);if(t<0)throw Error(`Missing cape collider bone: `+r);for(;t>=0;)n.add(t),t=e.bones[t].parent}let r=[...n].sort((e,t)=>e-t),i=e.bones.map(()=>new pt),a=new pt,o=new S,s=new S,c=new M,l=new M(1,1,1),u=t=>e.bones.findIndex(e=>e.name===t),d=u(`spine01`),f=new pt,p=new M,m=new M().fromArray(e.bones[d].head);return t=>{let n=Js(t*e.fps,0,e.frames.length-1),h=Math.floor(n),g=e.frames[h],_=e.frames[Math.min(h+1,e.frames.length-1)],v=n-h;p.fromArray(g.root).lerp(new M().fromArray(_.root),v);for(let t of r){let n=e.bones[t];c.fromArray(n.head),n.parent>=0&&c.sub(new M().fromArray(e.bones[n.parent].head)),o.fromArray(g.q,t*4),s.fromArray(_.q,t*4),o.slerp(s,v).normalize(),a.compose(c,o,l),n.parent>=0?i[t].multiplyMatrices(i[n.parent],a):i[t].copy(a)}f.copy(i[d]).multiply(new pt().makeTranslation(-m.x,-m.y,-m.z));let y=e=>new M().setFromMatrixPosition(i[u(e)]).add(p),b=[{a:y(`spine05`),b:y(`spine01`),radius:qs.bodyRadius}];for(let e of[`L`,`R`])b.push({a:y(`upperleg01.`+e),b:y(`lowerleg01.`+e),radius:qs.thighRadius});return{skin:f.clone(),root:p.clone(),capsules:b}}}function $s(e){let t=Zs(),n=t.positions.length/3,r=Ks.columns+1,i=new Float64Array(t.positions.length),a=new Float64Array(i.length),o=[],s=Qs(e),c=1/qs.fps,l=c*c,u=(e.frames.length-1)/e.fps;function d(e,n,r){let i=t.positions[e*3]-t.positions[n*3],a=t.positions[e*3+1]-t.positions[n*3+1],s=t.positions[e*3+2]-t.positions[n*3+2];o.push({a:e,b:n,length:Math.hypot(i,a,s),strength:r})}for(let e=0;e<=Ks.rows;e++)for(let t=0;t<=Ks.columns;t++){let n=e*r+t;t<Ks.columns&&d(n,n+1,1),e<Ks.rows&&d(n,n+r,1),t<Ks.columns&&e<Ks.rows&&(d(n,n+r+1,qs.shear),d(n+1,n+r,qs.shear)),t+2<=Ks.columns&&d(n,n+2,qs.bend),e+2<=Ks.rows&&d(n,n+r*2,qs.bend)}let f=s(0),p=new M;for(let e=0;e<n;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(i,e*3);a.set(i);let m=new Float64Array(r*3),h=new M,g=new M,_=new M;function v(u,d=!1){let f=s(u);for(let e=0;e<r;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(m,e*3);let v=e.heading??0,y=Math.sin(v),b=Math.cos(v);for(let e=r;e<n;e++){let t=Math.floor(e/r)/Ks.rows,n=e%r/Ks.columns,o=d?0:Math.sin(u*qs.gustFrequency-t*2+n)*qs.gust+Math.sin(u*7+n*5-t*4)*qs.ripple,s=d?0:Math.sin(u*qs.lateralFrequency-t+n)*qs.lateralGust;for(let t=0;t<3;t++){let n=e*3+t,r=i[n],u=r-a[n],d=t===1?-qs.gravity:o*(t===0?y:b)+s*(t===0?b:-y);i[n]=r+u*qs.damping+(d-qs.drag*u/c)*l,a[n]=r}}let x=()=>{for(let e=0;e<m.length;e++)i[e]=m[e]};x();for(let e=0;e<qs.iterations;e++){for(let e of o){let t=e.a*3,n=e.b*3,a=i[n]-i[t],o=i[n+1]-i[t+1],s=i[n+2]-i[t+2],c=Math.hypot(a,o,s);if(c<1e-9)continue;let l=+(e.a>=r),u=+(e.b>=r),d=l+u;if(!d)continue;let f=(c-e.length)/c*e.strength/d,p=a*f,m=o*f,h=s*f;i[t]=i[t]+p*l,i[t+1]=i[t+1]+m*l,i[t+2]=i[t+2]+h*l,i[n]=i[n]-p*u,i[n+1]=i[n+1]-m*u,i[n+2]=i[n+2]-h*u}for(let e of f.capsules){h.copy(e.b).sub(e.a);let t=h.lengthSq(),a=e.radius+qs.collisionMargin;for(let o=r;o<n;o++){let n=o*3;p.fromArray(i,n),g.copy(p).sub(e.a),_.copy(e.a).addScaledVector(h,Js(g.dot(h)/t,0,1)),g.copy(p).sub(_);let r=g.length();r<a&&r>1e-9&&(p.copy(_).addScaledVector(g,a/r),p.toArray(i,n))}}x()}for(let e=0;e<m.length;e++)a[e]=m[e];return f}for(let e=0;e<qs.relaxFrames;e++)v(0,!0);a.set(i);let y=[];function b(e){let t=new Float32Array(i.length);for(let r=0;r<n;r++)t[r*3]=i[r*3]-e.x,t[r*3+1]=i[r*3+1]-e.y,t[r*3+2]=i[r*3+2]-e.z;y.push(t)}b(f.root);for(let e=1;e<=Math.ceil(u*qs.fps);e++)b(v(Math.min(u,e/qs.fps)).root);return{frames:y,duration:u,fps:qs.fps,pinCount:r,pattern:t}}function ec(e){let t=Ys.get(e);t||(t=$s(e),Ys.set(e,t));let{frames:n,duration:r,fps:i}=t;return{...t,sample(e,t){let a=Js(Number.isFinite(e)?e:0,0,r)*i,o=Math.floor(a),s=Math.min(o+1,n.length-1),c=a-o;for(let e=0;e<t.length;e++)t[e]=Tt.lerp(n[o][e],n[s][e],c)}}}function tc(e){let t=[`L`,`R`].map(t=>({upper:e.bones.find(e=>e.name===`upperleg01.`+t),lower:e.bones.find(e=>e.name===`lowerleg01.`+t),a:new M,b:new M,radius:X.fitting.thighRadius+X.fitting.clothClearance})),n=e.bones.map(()=>new pt),r=new pt,i=new pt,a=new pt,o=new M,s=new M,c=new M,l=new M,u=new M,d=new M;return{capsules:t,update(){a.copy(e.mesh.matrixWorld).invert(),t.forEach(e=>{e.a.setFromMatrixPosition(e.upper.matrixWorld).applyMatrix4(a),e.b.setFromMatrixPosition(e.lower.matrixWorld).applyMatrix4(a)}),n.forEach((t,n)=>t.multiplyMatrices(e.bones[n].matrixWorld,e.skeleton.boneInverses[n]))},project(e,a){let f=e.geometry.getAttribute(`position`);if(f.getY(a)>=X.fitting.waistPinY)return;let p=e.geometry.getAttribute(`skinIndex`),m=e.geometry.getAttribute(`skinWeight`);r.elements.fill(0);for(let e=0;e<4;e++){let t=m.array[a*4+e];if(!t)continue;let i=n[p.array[a*4+e]].elements;for(let e=0;e<16;e++)r.elements[e]=r.elements[e]+i[e]*t}i.copy(e.bindMatrixInverse).multiply(r).multiply(e.bindMatrix),u.set(f.getX(a),0,f.getZ(a)-X.coat.rows[0][3]).normalize().transformDirection(i),o.fromBufferAttribute(f,a).applyMatrix4(i);let h=!1;for(let e=0;e<X.fitting.collisionIterations;e++)for(let e of t){s.copy(e.b).sub(e.a),c.copy(o).sub(e.a),l.copy(e.a).addScaledVector(s,Tt.clamp(c.dot(s)/s.lengthSq(),0,1)),c.copy(o).sub(l);let t=c.length();if(t<e.radius&&t>1e-8){let t=t=>(d.copy(o).addScaledVector(u,t),c.copy(d).sub(e.a),l.copy(e.a).addScaledVector(s,Tt.clamp(c.dot(s)/s.lengthSq(),0,1)),d.distanceToSquared(l)>=e.radius*e.radius),n=0,r=e.radius*2;for(let e=0;e<8&&!t(r);e++)r*=2;for(let e=0;e<14;e++){let e=(n+r)/2;t(e)?r=e:n=e}o.addScaledVector(u,r),h=!0}}h&&(o.applyMatrix4(i.invert()),f.setXYZ(a,o.x,o.y,o.z))}}}function nc(e,t){let n=X.fitting,r=n.capeBands,i=Array.from({length:r},()=>({minX:1/0,maxX:-1/0,back:1/0})),a=e.bones.find(e=>e.name===`root`),o=new pt,s=new pt,c=new M,l=e=>Tt.clamp((e-n.capeLowY)/(n.capeHighY-n.capeLowY)*(r-1),0,r-1);function u(){o.copy(a.matrixWorld).multiply(e.skeleton.boneInverses[e.bones.indexOf(a)]).invert().multiply(e.root.matrixWorld),s.copy(o).invert(),i.forEach(e=>{e.minX=1/0,e.maxX=-1/0,e.back=1/0});for(let e of t){let t=e.geometry.getAttribute(`position`);for(let n=0;n<t.count;n++){e.getVertexPosition(n,c),c.applyMatrix4(o);let t=l(c.y),a=Math.max(0,Math.floor(t)-1),s=Math.min(r-1,Math.ceil(t)+1);for(let e=a;e<=s;e++){let t=i[e];t.minX=Math.min(t.minX,c.x),t.maxX=Math.max(t.maxX,c.x),t.back=Math.min(t.back,c.z)}}}}function d(e,t){u();for(let a=t;a<e.count;a++){c.fromBufferAttribute(e,a).applyMatrix4(o);let t=l(c.y),u=i[Math.floor(t)],d=i[Math.min(r-1,Math.ceil(t))],f=Math.min(u.back,d.back),p=Math.min(u.minX,d.minX),m=Math.max(u.maxX,d.maxX);Number.isFinite(f)&&c.x>=p-n.capeGarmentGap&&c.x<=m+n.capeGarmentGap&&c.z>f-n.capeGarmentGap&&(c.z=f-n.capeGarmentGap,c.applyMatrix4(s),e.setXYZ(a,c.x,c.y,c.z))}}return{project:d}}var rc=Tt.clamp,ic=Tt.lerp;function ac(e,t){let n=new p;n.name=`knight-outfit`,e.root.add(n);let r=new Set,i=new Set,a=[],o=[],s=[],c=!1,l=!0,u=tc(e),f=e=>{let n=t.bones.findIndex(t=>t.name===e);if(n<0)throw Error(`Missing outfit bone: `+e);return n},m=(e,t)=>{let n=new Ze({color:e,...t,side:2});return i.add(n),n},h=m(X.colors.mail,X.material.mail),g=m(X.colors.steel,X.material.steel),_=m(X.colors.brass,X.material.brass),v=m(X.colors.linen,X.material.cloth),y=m(X.colors.red,X.material.cloth),b=m(X.colors.leather,X.material.leather),x=m(X.colors.dark,X.material.cloth),S=[`spine05`,`spine04`,`spine03`,`spine02`,`spine01`];function C(e){for(let n=0;n<S.length-1;n++){let r=f(S[n]),i=f(S[n+1]),a=t.bones[r].head[1],o=t.bones[i].head[1];if(e<=o){let t=rc((e-a)/(o-a),0,1);return[[r,1-t],[i,t]]}}return[[f(`spine01`),1]]}function T(e){return Array.from({length:4},(n,r)=>[t.skinIndex[e*4+r],t.skinWeight[e*4+r]])}function E(t,i,a,s){let c=new kt,l=[],u=[],f=[],p=[];i.forEach(e=>{l.push(...e.position.toArray()),p.push(...e.uv);let t=new Map;e.weights.forEach(([e,n])=>t.set(e,(t.get(e)??0)+n));let n=[...t].filter(([,e])=>e>0).sort((e,t)=>t[1]-e[1]).slice(0,4),r=n.reduce((e,t)=>e+t[1],0);for(let e=0;e<4;e++)f.push(n[e]?.[0]??0),u.push((n[e]?.[1]??0)/r)}),c.setAttribute(`position`,new k(l,3)),c.setAttribute(`uv`,new k(p,2)),c.setAttribute(`skinIndex`,new A(f,4)),c.setAttribute(`skinWeight`,new k(u,4)),c.setIndex(a),c.computeVertexNormals(),r.add(c);let m=new d(c,s);return m.name=t,m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1,m.bind(e.skeleton,e.mesh.bindMatrix),n.add(m),o.push(m),m}let D=(e,t,n=(e,t)=>!0)=>{let r=[];for(let i=0;i<t;i++)for(let t=0;t<e;t++)if(n(t,i)){let n=i*(e+1)+t,a=n+1,o=n+e+1,s=o+1;r.push(n,o,a,a,o,s)}return r};function O(n,r,i,a){let o=e.mesh.geometry.getAttribute(`normal`),s=[],c=[];for(let e=0;e<t.positions.length/3;e++){let n=new M().fromArray(t.positions,e*3).addScaledVector(new M().fromBufferAttribute(o,e),i);s.push({position:n,weights:T(e),uv:[n.x*X.texture.repeatPerMetre,n.y*X.texture.repeatPerMetre]})}for(let e=0;e<t.indices.length;e+=3){let n=t.indices.slice(e,e+3);n.some(a)&&c.push(...n)}return E(n,s,c,r)}let j=e=>T(e).reduce((e,[n,r])=>e+(/^(wrist|finger)/.test(t.bones[n].name)?r:0),0);O(`continuous-chainmail`,h,X.surface.mailOffset,e=>{let n=t.positions[e*3+1],r=Math.abs(t.positions[e*3]),i=n>X.surface.coveredMinY&&n<X.surface.coveredMaxY&&r<X.surface.coveredMaxX,a=n<X.fitting.slitTopY&&r<X.surface.slitInnerX;return(!i||a)&&n>=X.surface.mailMinY&&n<=X.surface.mailMaxY&&j(e)<X.surface.handThreshold}),O(`articulated-leather-gloves`,b,X.surface.gloveOffset,e=>j(e)>=X.surface.handThreshold);function ee(e){let t=X.coat.rows;for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(e<=i[0]){let t=rc((e-r[0])/(i[0]-r[0]),0,1);return r.map((e,n)=>ic(e,i[n],t))}}return t.at(-1)}function te(e,t,n=0){let r=ee(e),i=Math.sin(t*X.coat.folds)*X.coat.foldDepth;return new M(Math.sin(t)*(r[1]+i+n),e,r[3]+Math.cos(t)*(r[2]+i+n))}let N=[];X.coat.rows.forEach(e=>{for(let t=0;t<=X.coat.segments;t++){let n=t/X.coat.segments*Math.PI*2;N.push({position:te(e[0],n),weights:C(e[0]),uv:[t/X.coat.segments,e[0]]})}}),E(`tailored-sleeveless-surcoat`,N,D(X.coat.segments,X.coat.rows.length-1,(e,t)=>{let n=(e+.5)/X.coat.segments*Math.PI*2,r=X.coat.rows[t][0];return r<X.coat.armholeY||r>X.coat.rows.at(-3)[0]||Math.abs(Math.sin(n))<X.coat.armholeWidth}),v);for(let e=0;e<4;e++){let t=X.coat.segments/4,n=[];for(let r=0;r<=X.coat.skirtRows;r++)for(let i=0;i<=t;i++){let a=r/X.coat.skirtRows,o=ic(X.coat.rows[0][0],X.coat.hemY,a),s=(e+i/t)*Math.PI/2,c=X.coat.rows[0],l=c[1]+X.coat.hemFlare*a,u=Math.sin(s*X.coat.folds)*X.coat.foldDepth*(1+a),d=Math.sin(s)*(l+u),p=rc((X.fitting.slitTopY-o)/(X.fitting.slitTopY-X.coat.hemY),0,1);Math.abs(Math.sin(s))<X.coat.split&&(d+=(e<2?1:-1)*X.coat.split*p);let m=new M(d,o,c[3]+Math.cos(s)*(c[2]+u)),h=f(`upperleg02.`+(d>=0?`L`:`R`)),g=rc((X.fitting.slitTopY-o)/X.coat.legBlendHeight,0,1);n.push({position:m,weights:[[f(`spine05`),1-g],[h,g]],uv:[d,o]})}let r=E(`split-surcoat-panel-`+e,n,D(t,X.coat.skirtRows),v);s.push({mesh:r,rest:new Float32Array(r.geometry.getAttribute(`position`).array),kind:`skirt`})}function ne(e,t,n,r,i,a){let o=[];for(let e=0;e<=8;e++)for(let a=0;a<=8;a++){let s=ic(t,n,a/8),c=ic(r,i,e/8),l=ee(c),u=te(c,Math.asin(rc(s/l[1],-1,1)),X.cross.offset);u.x=s,o.push({position:u,weights:C(c),uv:[s,c]})}return E(e,o,D(8,8),a)}ne(`embroidered-cross-stem`,-X.cross.stroke/2,X.cross.stroke/2,X.cross.centerY-X.cross.height/2,X.cross.centerY+X.cross.height/2,y);for(let e of[-1,1])ne(`embroidered-cross-arm-`+e,e<0?-X.cross.width/2:X.cross.stroke/2,e<0?-X.cross.stroke/2:X.cross.width/2,X.cross.centerY-X.cross.stroke/2,X.cross.centerY+X.cross.stroke/2,y);let P=[];for(let e of[X.belt.y-X.belt.height/2,X.belt.y+X.belt.height/2])for(let t=0;t<=X.coat.segments;t++){let n=t/X.coat.segments*Math.PI*2;P.push({position:new M(Math.sin(n)*X.belt.x,e,X.belt.centerZ+Math.cos(n)*X.belt.z),weights:C(e),uv:[t/X.coat.segments,e]})}E(`leather-waist-belt`,P,D(X.coat.segments,1),b);function re(n,i,s,c,l){r.add(i);let u=new U(i,s),d=f(c);return u.name=n,u.position.copy(l).sub(new M().fromArray(t.bones[d].head)),u.castShadow=!0,u.receiveShadow=!0,e.bones[d].add(u),a.push(u),o.push(u),u}function ie(e,t,n,r,i){return re(e,new w(new it(t),X.detail.curveSegments,n,X.detail.tubeSides,!1),r,i,new M)}let ae=X.belt.y,F=X.belt.centerZ+X.belt.z+X.belt.buckleTube,oe=X.belt.buckleWidth/2,se=X.belt.buckleHeight/2;ie(`brass-belt-buckle`,[new M(-oe,ae-se,F),new M(oe,ae-se,F),new M(oe,ae+se,F),new M(-oe,ae+se,F),new M(-oe,ae-se,F)],X.belt.buckleTube,_,`spine04`);let I=[];X.helmet.rows.forEach(e=>{for(let t=0;t<=X.helmet.segments;t++){let n=t/X.helmet.segments*Math.PI*2;I.push({position:new M(Math.sin(n)*e[1],e[0],e[3]+Math.cos(n)*e[2]),weights:[[f(`head`),1]],uv:[t/X.helmet.segments,e[0]]})}}),E(`fitted-great-helm`,I,D(X.helmet.segments,X.helmet.rows.length-1),g);function L(e,t,n){let r=X.helmet.rows,i=r[0];for(let e=0;e<r.length-1;e++){let n=r[e],a=r[e+1];if(t<=a[0]){let e=rc((t-n[0])/(a[0]-n[0]),0,1);i=n.map((t,n)=>ic(t,a[n],e));break}}return new M(e,t,i[3]+i[2]*Math.sqrt(Math.max(0,1-(e/i[1])**2))+n)}function ce(e,t,n,r,i,a,o){let s=[];for(let e=0;e<=1;e++)for(let a=0;a<=12;a++){let c=ic(t,n,a/12),l=ic(r,i,e);s.push({position:L(c,l,o),weights:[[f(`head`),1]],uv:[a/12,e]})}E(e,s,D(12,1),a)}for(let e of[-1,1]){let t=e*X.helmet.eyeX;ce(`helmet-eye-aperture-`+e,t-X.helmet.eyeWidth/2,t+X.helmet.eyeWidth/2,X.helmet.eyeY-X.helmet.eyeHeight/2,X.helmet.eyeY+X.helmet.eyeHeight/2,x,.0015)}ce(`helmet-brow-band`,-.11,.11,X.helmet.browY-X.helmet.browHeight/2,X.helmet.browY+X.helmet.browHeight/2,_,.002),ce(`helmet-nasal-band`,-X.helmet.noseWidth/2,X.helmet.noseWidth/2,X.helmet.browY-X.helmet.noseHeight,X.helmet.browY,_,.003);for(let e of[-1,1])for(let t=0;t<3;t++)for(let n=0;n<4;n++){let r=e*(.038+n*.014),i=1.612+t*.015,a=re(`helmet-breathing-aperture`,new Le(X.helmet.ventRadius,8),x,`head`,L(r,i,.002));a.rotation.y=e*.4}for(let e of[-.095,-.045,0,.045,.095])re(`helmet-rivet`,new ht(X.helmet.rivetRadius,8,6),_,`head`,L(e,X.helmet.browY,.004));let R=[];for(let e=0;e<=X.mantle.rows;e++)for(let t=0;t<=X.mantle.segments;t++){let n=e/X.mantle.rows,r=t/X.mantle.segments*Math.PI*2,i=Math.cos(r),a=Math.max(0,-i),o=Math.sin(r)*ic(X.mantle.neckX,X.mantle.shoulderX,n),s=X.mantle.centerZ+i*ic(X.mantle.neckZ,i>=0?X.mantle.frontZ:X.mantle.rearZ,n),c=X.mantle.edgeY+X.mantle.backRise*a-X.mantle.overlap*a,l=ic(X.mantle.neckY,c,n)+Math.sin(r*X.cape.folds)*X.cape.foldDepth*n*(1-n);R.push({position:new M(o,l,s),weights:[[f(`spine01`),1]],uv:[t/X.mantle.segments,n]})}E(`shoulder-draped-cloak-mantle`,R,D(X.mantle.segments,X.mantle.rows),y);let le=ec(t),z=new kt;z.setAttribute(`position`,new k(le.pattern.positions,3)),z.setAttribute(`uv`,new k(le.pattern.uv,2)),z.setIndex(le.pattern.indices);let ue=new U(z,y);ue.name=`inertial-cloth-cape`,ue.castShadow=!0,ue.receiveShadow=!0,ue.frustumCulled=!1,r.add(z),o.push(ue),n.add(ue);let de=nc(e,o.filter(e=>e instanceof d&&e.name.includes(`surcoat`)));for(let e of[-1,1])re(`cloak-clasp`,new ht(X.detail.buttonRadius,12,8),_,`spine01`,new M(e*.052,1.47,.136));for(let e of[`L`,`R`]){let n=e===`L`?1:-1,r=f(`foot.`+e),i=f(`lowerleg02.`+e),a=t.bones[r].head,o=[[X.boot.soleY,X.boot.footWidth,(X.boot.toeZ-X.boot.heelZ)/2,(X.boot.toeZ+X.boot.heelZ)/2],[X.boot.instepY,X.boot.footWidth*.87,(X.boot.toeZ-X.boot.heelZ)*.41,(X.boot.toeZ+X.boot.heelZ)*.35],[.135,X.boot.ankleWidth,.056,0],[X.boot.height,X.boot.calfWidth,.06,0]],s=[];o.forEach(([e,t,o,c])=>{for(let l=0;l<=X.boot.segments;l++){let u=l/X.boot.segments*Math.PI*2,d=rc((e-.08)/.12,0,1),f=a[0]-n*(e-.08)*.16;s.push({position:new M(f+Math.sin(u)*t,e,c+Math.cos(u)*o),weights:[[r,1-d],[i,d]],uv:[l/X.boot.segments,e]})}}),E(`fitted-leather-boot-`+e,s,D(X.boot.segments,o.length-1),b)}function B(t){c||(l=t,n.visible=t,a.forEach(e=>e.visible=t),e.mesh.material.visible=!t)}function fe(t){if(c)return;let n=rc(Number.isFinite(t)?t:0,0,e.duration);u.update();for(let{mesh:e,rest:t}of s){let r=e.geometry.getAttribute(`position`);for(let i=0;i<r.count;i++){let a=t[i*3],o=t[i*3+1],s=t[i*3+2],c=rc((X.coat.rows[0][0]-o)/(X.coat.rows[0][0]-X.coat.hemY),0,1);r.setXYZ(i,a,o,s+Math.sin(n*X.clothMotion.frequency+a*8)*X.clothMotion.amplitude*c*c),u.project(e,i)}r.needsUpdate=!0,e.geometry.computeVertexNormals()}let r=z.getAttribute(`position`);le.sample(n,r.array),de.project(r,le.pinCount),r.needsUpdate=!0,z.computeVertexNormals()}return B(!0),fe(0),{group:n,meshes:o,materials:i,moving:s,cape:ue,capeMotion:le,draw:fe,setVisible:B,setTextures(e){if(!c)for(let[t,n,r]of[[h,e.mail,X.texture.mailBump],[g,e.steel,0],[v,e.linen,X.texture.clothBump],[y,e.linen,X.texture.clothBump]])t.map=n??null,t.bumpMap=r?n??null:null,t.bumpScale=r,t.needsUpdate=!0},wireframe(e){c||i.forEach(t=>t.wireframe=e)},dispose(){c||(c=!0,n.removeFromParent(),a.forEach(e=>e.removeFromParent()),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),l&&(e.mesh.material.visible=!0))}}}function oc(e,t=`normal`,n=new L){let r=[`mail`,`steel`,`linen`],i=new Set(r),a=new Set,o=new Set,s={},c=!1,l=0,u=0,d,f=new Promise(e=>{d=e}),p=e=>{o.has(e)||(o.add(e),a.delete(e),e.dispose())},m=setTimeout(()=>{u+=i.size,i.clear(),d({loaded:l,failed:u})},X.texture.timeoutMs),h=(e,t)=>{i.delete(e)&&(t?l++:u++,i.size||(clearTimeout(m),d({loaded:l,failed:u})))};if(t!==`slow`)for(let l of r){let r;try{let u=t===`missing`?`assets/knight/qa-missing-${l}.png`:X.assets[l];r=n.load(`/crusader-coin-pusher-demo/${u}`,t=>{if(c||!i.has(l)){p(t);return}a.add(t),t.colorSpace=_e,t.wrapS=t.wrapT=lt,t.anisotropy=X.texture.anisotropy,s[l]=t,e({...s}),h(l,!0)},void 0,()=>{r&&p(r),h(l,!1)}),o.has(r)||a.add(r)}catch{h(l,!1)}}return{ready:f,dispose(){c||(c=!0,clearTimeout(m),i.clear(),a.forEach(p),d({loaded:l,failed:u}))}}}var sc={assets:{steel:`./assets/knight/forged-steel-v1.webp`,linen:`./assets/knight/ivory-linen-v1.webp`},colors:{steel:`#b1b8bf`,mail:`#747b80`,gold:`#a78952`,linen:`#d9cdb4`,cloak:`#631e2a`,leather:`#302821`,black:`#0f1217`,floor:`#9c9d99`},material:{steelMetalness:.82,steelRoughness:.46,steelBump:.004,clothRoughness:.92,clothBump:.009,mailRoughness:.54},rig:{floorY:-3.5,pelvisY:2.19,chestY:3.09,headY:3.98,helmetHeight:.58,height:4.46,shoulderY:3.68,shoulderX:.55,upperArm:.77,forearm:.72,thigh:1.08,shin:1.08,hipX:.235,ankleY:.14,stanceDrop:.065,handY:-.19,contactInset:.62,palmDepth:.045,palmY:-.13},motion:{walkEnd:3.3,reachStart:2.7,reachEnd:3.8,releaseStart:6.35,releaseEnd:7.18,clearStart:7.1,clearEnd:11,strideSeconds:1.36,startZ:3.9,braceZ:1.3,endZ:-4.5,exitX:-1.65,lean:.18,clothWave:.024,stepLift:.18,heelRoll:.15,rootBob:.024,hipSway:.026},path:[[0,0,3.9],[.65,0,3.58],[1.45,0,2.73],[2.25,0,1.91],[3.3,0,1.3],[4,0,1.3],[5,0,1.01],[6,0,-.26],[6.35,0,-.67],[7.1,-.08,-1.5],[8,-.55,-2.47],[9.2,-1.25,-3.55],[11,-1.65,-4.5]],footsteps:{left:[[.1,.75],[1.45,2.15],[2.68,3.3],[4.58,5.24],[5.96,6.62],[7.28,7.94],[8.64,9.3],[9.94,10.6]],right:[[.8,1.43],[2.18,2.82],[3.32,3.8],[5.28,5.94],[6.64,7.26],[7.98,8.62],[9.32,9.92],[10.62,11.22]]},geometry:{radialSegments:32,clothRows:32,clothColumns:28,cloakBoneRows:7,cloakBoneColumns:5,mailRows:18,mailColumns:24},garment:{capeTop:3.72,capeLength:2.15,capeTopWidth:.94,capeBottomWidth:1.15,capeTopDepth:.24,capeBottomDepth:.37,capeFoldDepth:.04,capeFoldCount:7,hemUneven:.035},floor:{asset:`./assets/knight/limestone-floor-v2.webp`,interiorAsset:`./assets/knight/treasury-floor-v2.webp`,width:36,depth:32,doorZ:0,tileWorld:6,size:256,rows:4,columns:3,grout:.026,roughness:.88,bump:.055,fallbackNoise:.05,interiorColor:`#a4a09a`,interiorRoughness:.32,interiorBump:.016,interiorMetalness:.08},textureTimeoutMs:4e3,lighting:{shadowSize:1024,keyIntensity:3.6,fillIntensity:1.2}},cc=(e,t,n)=>Tt.smootherstep(e,t,n),lc=e=>Number.isFinite(e)?Tt.clamp(e,0,s.cinematic.introSeconds):0;function uc(e,t){let n=sc.path;if(e<=n[0][0])return n[0][t];if(e>=n[n.length-1][0])return n[n.length-1][t];let r=e=>{if(e===0||e===n.length-1)return 0;let r=n[e-1],i=n[e],a=n[e+1],o=(i[t]-r[t])/(i[0]-r[0]),s=(a[t]-i[t])/(a[0]-i[0]);return o*s<=0?0:2*o*s/(o+s)},i=n.findIndex((t,r)=>r<n.length-1&&e>=t[0]&&e<n[r+1][0]),a=n[i],o=n[i+1],s=o[0]-a[0],c=(e-a[0])/s;return(2*c**3-3*c**2+1)*a[t]+(c**3-2*c**2+c)*s*r(i)+(-2*c**3+3*c**2)*o[t]+(c**3-c**2)*s*r(i+1)}function dc(e){return{x:uc(e,1),z:uc(e,2),yaw:.43*cc(e,6.65,8.25)*(1-cc(e,9.6,11.4))}}function fc(e,t){let n=lc(e),r=t<0?sc.footsteps.left:sc.footsteps.right,i=new M(t*sc.rig.hipX,sc.rig.floorY+sc.rig.ankleY,sc.motion.startZ+(t>0?.16:-.1)),a=0;for(let[e,o]of r){if(n<e)break;let r=dc(Math.min(sc.motion.clearEnd,o+.24)),s=o>=3&&o<=4,c=new M(t*sc.rig.hipX,0,s&&t>0?.36:-.14);c.applyAxisAngle(new M(0,1,0),r.yaw);let l=new M(r.x+c.x,i.y,r.z+c.z);if(n<o){let t=(n-e)/(o-e),s=cc(t,0,1),c=i.distanceTo(l),u=Math.sin(Math.PI*t)**2;return i.lerp(l,s),i.y+=u*Math.min(sc.motion.stepLift,c*.25),{point:i,yaw:Tt.lerp(a,r.yaw,s),swing:u,roll:Math.sin(t*Math.PI*2)*Math.sin(t*Math.PI)**2*sc.motion.heelRoll,planted:!1}}i=l,a=r.yaw}return{point:i,yaw:a,swing:0,roll:0,planted:!0}}function pc(e){let t=sc.motion,n=lc(e),r=dc(n),i=fc(n,-1),a=fc(n,1),o=cc(n,t.releaseStart,t.clearEnd),s=Math.max(i.swing,a.swing);return{time:n,...r,reach:cc(n,t.reachStart,t.reachEnd),release:cc(n,t.releaseStart,t.releaseEnd),lean:t.lean*cc(n,3.55,4.8)*(1-cc(n,6.35,7.45)),stride:n/t.strideSeconds*Math.PI*2,leave:o,walking:s,bob:-t.rootBob*s,sway:t.hipSway*(i.swing-a.swing),twist:.035*(i.swing-a.swing)}}function mc(e,t,n,r,i){let a=t.clone().sub(e),o=Tt.clamp(a.length(),Math.abs(r-i)+1e-5,r+i-1e-5);a.lengthSq()<1e-10?a.set(0,-1,0):a.normalize();let s=n.clone().addScaledVector(a,-n.dot(a));s.lengthSq()<1e-8&&s.set(1,0,0).addScaledVector(a,-a.x),s.lengthSq()<1e-8&&s.set(0,0,1),s.normalize();let c=(r*r-i*i+o*o)/(2*o);return{elbow:e.clone().addScaledVector(a,c).addScaledVector(s,Math.sqrt(Math.max(0,r*r-c*c))),end:e.clone().addScaledVector(a,o)}}function hc(e,t){let n=n=>new M().fromArray(e.bones.find(e=>e.name===n+`.`+t).head),r=n(`wrist`),i=n(`finger3-1`).sub(r),a=i.clone().normalize(),o=n(`finger5-1`).sub(n(`finger2-1`)),s=new M().crossVectors(o,a).normalize().multiplyScalar(t===`R`?-1:1),c=new M().crossVectors(a,s).normalize(),l=new S().setFromRotationMatrix(new pt().makeBasis(c,a,s)).invert();return{palmOffset:i.clone().multiplyScalar(.5).addScaledVector(s,.007),gripOffset:e=>i.clone().multiplyScalar(.95).addScaledVector(s,e+.008),fingerAxis:a.clone(),curlAxis:c.clone(),fitFinger(n,a,o){let l=i.clone().multiplyScalar(.95).addScaledVector(s,o+.008),u=[1,2,3].map(r=>e.bones.find(e=>e.name===`finger${n}-${r}.${t}`));for(let e=40;e>=0;e--){let t=e/40,n=new M().fromArray(u[0].head).sub(r),i=0,s=!0;for(let e=0;e<3;e++){i+=a[e]*t;let r=u[e],d=new M().fromArray(r.tail).sub(new M().fromArray(r.head)).applyAxisAngle(c,i);for(let e=0;e<=8;e++){let t=n.clone().addScaledVector(d,e/8).sub(l);t.addScaledVector(c,-t.dot(c)),t.length()<o+.005&&(s=!1)}n.add(d)}if(s)return a.map(e=>e*t)}return[0,0,0]},rotation(e,t){let n=e.clone().normalize(),r=t.clone().addScaledVector(n,-t.dot(n)).normalize(),i=new M().crossVectors(n,r).normalize();return new S().setFromRotationMatrix(new pt().makeBasis(i,n,r)).multiply(l)}}}var gc=new WeakMap;function _c(e,t,n){let r=t===`L`?-1:1,i=s.cinematic.doors,a=-r*Hs(e,1,`push`).angle,o=i.width/2,c=-r*(o-sc.rig.contactInset),l=i.thickness/2+i.faceLift,u=new M(r*o+c*Math.cos(a)+l*Math.sin(a),sc.rig.handY,-c*Math.sin(a)+l*Math.cos(a));return new M(-u.x/n,(u.y-sc.rig.floorY)/n,-u.z/n)}function vc(e){let t=gc.get(e);if(t)return t;let n=Gs(e),r=J.sceneHeight/e.height,i={L:hc(e,`L`),R:hc(e,`R`)},a=Array.from({length:4},(e,t)=>i.L.fitFinger(t+2,J.sword.gripCurl,J.sword.gripRadius)),o=[],c=new M(0,1,0),l=new S,u=new S,d=e=>{let t=n.bones.find(t=>t.name===e);if(!t)throw Error(`Missing intro bone `+e);return t},f=e=>e.getWorldPosition(new M);function p(e,t){e.parent.getWorldQuaternion(u).invert(),e.quaternion.copy(u).multiply(t),e.updateWorldMatrix(!1,!0)}function m(e,t,n){let r=f(e),i=f(t).sub(r).normalize(),a=n.clone().sub(r).normalize(),o=new S().setFromUnitVectors(i,a);e.getWorldQuaternion(l),p(e,o.multiply(l))}function h(e,t,r,i,a,o){if(o<=0)return;let s=e.quaternion.clone(),c=t.quaternion.clone(),l=f(e),u=f(t),d=f(r),p=mc(l,i,a,l.distanceTo(u),u.distanceTo(d));m(e,t,p.elbow),m(t,r,p.end),e.quaternion.copy(s.slerp(e.quaternion,o)),t.quaternion.copy(c.slerp(t.quaternion,o)),n.root.updateMatrixWorld(!0)}let g=0,_=pc(0),v=new Map;function y(e){let t=-Hs(Math.min(e,J.releaseStart),1,`push`).angle;return i.R.rotation(c,new M(0,0,1).applyAxisAngle(c,t))}try{for(let t=0;t<=Math.round(s.cinematic.introSeconds*J.fps);t++){let s=t/J.fps,u=pc(s);g+=Math.hypot(u.x-_.x,u.z-_.z)/r,_=u;let m=g/J.cycle.distance%1,b=(J.cycle.startFrame+m*J.cycle.frameCount)/e.fps;if(n.draw(b),m>1-J.cycle.seamBlend){let t=n.bones.map(e=>e.quaternion.clone());n.draw(J.cycle.startFrame/e.fps);let r=cc(m,1-J.cycle.seamBlend,1);n.bones.forEach((e,n)=>e.quaternion.copy(t[n].slerp(e.quaternion,r)))}let x=n.root.position.y;n.root.position.set(-u.x/r,x,-u.z/r),d(`root`).quaternion.premultiply(new S().setFromAxisAngle(c,u.yaw));let C=cc(s,J.reachEnd,J.pushPeak)*(1-cc(s,J.releaseStart,J.releaseEnd));d(`spine03`).quaternion.multiply(new S().setFromAxisAngle(new M(1,0,0),J.lean*C)),n.root.updateMatrixWorld(!0);let w=cc(s,J.reachStart,J.reachEnd)*(1-cc(s,J.releaseStart,J.releaseEnd));n.root.position.x-=J.sideAlign*w,n.root.position.y-=J.pelvisDrop*C,n.root.updateMatrixWorld(!0);let T=0;for(let e of[`R`]){let t=f(d(`upperarm01.`+e)),n=f(d(`lowerarm01.`+e)),a=f(d(`wrist.`+e)),o=Math.min(s,J.releaseStart),c=y(s),l=_c(o,e,r).sub(i.R.palmOffset.clone().applyQuaternion(c)).sub(t),u=(t.distanceTo(n)+n.distanceTo(a))*J.reachFraction,p=Math.sqrt(Math.max(0,u*u-l.x*l.x-l.y*l.y));T=Math.max(T,l.z-p)}n.root.position.z+=Math.min(J.maximumAdvance,Math.max(0,T))*w,n.root.updateMatrixWorld(!0);let E=cc(s,J.braceStart,J.braceEnd)*(1-cc(s,J.releaseStart,J.releaseEnd));for(let t of[`L`,`R`]){let o=t===`L`?1:-1,m=d(`foot.`+t),g=new M(o*J.stanceX,e.bones[n.bones.indexOf(m)].head[1],-o*J.stanceZ).add(new M(n.root.position.x,0,n.root.position.z+J.stanceForward));if(!v.has(t)&&s>=J.braceEnd&&v.set(t,g),h(d(`upperleg01.`+t),d(`lowerleg01.`+t),m,v.get(t)??g,new M(0,0,1),E),E>0&&(m.getWorldQuaternion(l),p(m,l.clone().slerp(new S().setFromAxisAngle(c,u.yaw),E))),t===`L`){let e=new M(J.sword.handX,J.sword.handY,J.sword.handZ).applyAxisAngle(c,u.yaw).add(n.root.position),t=d(`wrist.L`),r=f(d(`upperarm01.L`)),o=f(d(`lowerarm01.L`)),s=(r.distanceTo(o)+o.distanceTo(f(t)))*J.carryReach;e.distanceTo(r)>s&&e.sub(r).setLength(s).add(r),h(d(`upperarm01.L`),d(`lowerarm01.L`),t,e,new M(.25,0,-1),1);let l=f(t).sub(f(d(`lowerarm01.L`))).normalize(),m=i.L.curlAxis.clone().cross(i.L.fingerAxis).applyQuaternion(t.getWorldQuaternion(new S));p(t,i.L.rotation(l,new M(-1,0,0).applyAxisAngle(c,u.yaw)));for(let e=0;e<2;e++){let n=t.localToWorld(i.L.gripOffset(J.sword.gripRadius)).y-J.sword.tipClearance,r=Math.sqrt(Math.max(0,J.sword.tipDistance**2-n**2)),a=new M(0,-n,-r).applyAxisAngle(c,u.yaw).normalize(),o=new M(1,0,0).applyAxisAngle(c,u.yaw);o.addScaledVector(a,-o.dot(a)).normalize();let s=new M().crossVectors(o,a).normalize();s.dot(l)<0&&(s.negate(),o.negate());let h=i.L.rotation(s,o);if(e===0){let e=e=>e.addScaledVector(l,-e.dot(l)).normalize(),n=e(m),r=e(o.clone()),i=Math.atan2(l.dot(new M().crossVectors(n,r)),n.dot(r));for(let e of[`lowerarm01.L`,`lowerarm02.L`]){let n=d(e),r=f(t).sub(f(n)).normalize();p(n,new S().setFromAxisAngle(r,i/2).multiply(n.getWorldQuaternion(new S)))}}p(t,h)}for(let e of n.bones.filter(e=>/^finger[2-5]-[123]\.L$/.test(e.name))){let t=Number(e.name.split(`-`)[1][0])-1,n=Number(e.name[6])-2;e.quaternion.setFromAxisAngle(i.L.curlAxis,a[n][t])}d(`finger1-1.L`).quaternion.setFromAxisAngle(i.L.fingerAxis,-.55).multiply(new S().setFromAxisAngle(i.L.curlAxis,.35)),d(`finger1-2.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.55),d(`finger1-3.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.4);continue}let _=cc(s,J.reachStart,J.reachEnd)*(1-cc(s,J.releaseStart,J.releaseEnd)),b=d(`wrist.`+t),x=Math.min(s,J.releaseStart),C=y(s),w=_c(x,t,r).sub(i.R.palmOffset.clone().applyQuaternion(C)),T=new M(o*J.elbowPole[0],J.elbowPole[1],J.elbowPole[2]);h(d(`upperarm01.`+t),d(`lowerarm01.`+t),b,w,T,_),b.getWorldQuaternion(l),p(b,l.clone().slerp(C,_));for(let e of n.bones.filter(e=>e.name.startsWith(`finger`)&&e.name.endsWith(`.`+t)))e.quaternion.slerp(new S,_)}n.root.updateMatrixWorld(!0),o.push({root:n.root.position.toArray(),q:n.bones.flatMap(e=>e.quaternion.toArray())})}}finally{n.dispose()}let b={...e,source:e.source+` + authored door-contact choreography`,fps:J.fps,groundOffset:0,frames:o};return gc.set(e,b),b}function yc(e,t){let n=J.sword,r=new p;r.name=`battle-worn-dragged-sword`,e.root.add(r);let i=new Ze({color:X.colors.steel,...X.material.steel}),a=new Ze({color:X.colors.leather,...X.material.leather}),o=new Ze({color:X.colors.brass,...X.material.brass}),s=[];function c(e,t,n=0){s.push(e);let i=new U(e,t);return i.position.y=n,i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}let l=new kt,u=n.bladeWidth/2,d=n.bladeThickness;l.setAttribute(`position`,new k([-u,-n.bladeStart,0,0,-n.bladeStart,d,u,-n.bladeStart,0,0,-n.bladeStart,-d,-u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,d*.6,u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,-d*.6,0,-n.tipDistance,0],3));let f=[];for(let e=0;e<4;e++){let t=(e+1)%4;f.push(e,t,e+4,t,t+4,e+4,e+4,t+4,8)}f.push(0,2,1,0,3,2),l.setIndex(f),l.computeVertexNormals(),c(l,i),c(new qt(n.gripRadius,n.gripRadius,n.gripLength,12),a);let m=c(new qt(n.guardRadius,n.guardRadius,n.guardWidth,12),o,-n.bladeStart);m.rotation.z=Math.PI/2,c(new ht(n.pommelRadius,16,10),i,n.gripLength/2+n.pommelRadius);let h=e.bones.find(e=>e.name===`wrist.L`),g=e.bones.find(e=>e.name===`root`),_=hc(t,`L`),v=new pt,y=new M,b=new M,x=!1;function C(){if(x)return;e.root.updateMatrixWorld(!0),v.copy(e.root.matrixWorld).invert(),r.position.copy(h.localToWorld(_.gripOffset(n.gripRadius)).applyMatrix4(v)),y.set(0,0,1).transformDirection(g.matrixWorld).transformDirection(v),y.y=0,y.normalize();let t=n.tipClearance-e.root.position.y,i=Math.max(0,r.position.y-t),a=Math.sqrt(Math.max(0,n.tipDistance*n.tipDistance-i*i));b.copy(r.position).addScaledVector(y,-a),b.y=Math.max(t,r.position.y-n.tipDistance),r.quaternion.setFromUnitVectors(new M(0,-1,0),b.sub(r.position).normalize()),r.quaternion.multiply(new S().setFromAxisAngle(new M(0,1,0),n.bladeRoll)),r.updateMatrixWorld(!0)}return C(),{root:r,draw:C,setSteelMap(e){x||(i.map=e??null,i.needsUpdate=!0)},tipPosition(){return r.localToWorld(new M(0,-n.tipDistance,0))},dispose(){x||(x=!0,r.removeFromParent(),s.forEach(e=>e.dispose()),i.dispose(),a.dispose(),o.dispose())}}}function bc(){let e=new p;e.name=`human-vault-knight`,e.rotation.y=Math.PI,e.position.y=sc.rig.floorY;let t,n,r,i,a,o=!1,s=0,c=new AbortController,l,u=new Promise(e=>{l=e}),d,f=new Promise((e,t)=>{d=t}),m=setTimeout(()=>{c.abort(),d(Error(`Human knight loading timed out`))},J.timeoutMs),h=e=>{o||(s=e,t?.draw(e),n?.draw(e),r?.draw())};i=oc(e=>{o||(a=e,n?.setTextures(e),r?.setSteelMap(e.steel),h(s))});let g=(async()=>{let l=await fetch(`/crusader-coin-pusher-demo/${J.asset}`,{signal:c.signal});if(!l.ok)throw Error(`Human knight HTTP `+l.status);let u=await l.json();if(o||c.signal.aborted)return;clearTimeout(m);let d=vc(u);t=Gs(d),e.scale.setScalar(J.sceneHeight/d.height),e.add(t.root),e.updateMatrixWorld(!0),n=ac(t,d),r=yc(t,d),a&&(n.setTextures(a),r.setSteelMap(a.steel)),h(s);let f=await i.ready;if(!o){if(f.failed>0)throw Error(`Human knight materials incomplete`);h(s)}})();return{root:e,ready:Promise.race([g,f,u]).finally(()=>clearTimeout(m)),draw:h,dispose(){o||(o=!0,clearTimeout(m),c.abort(),l(),i?.dispose(),r?.dispose(),n?.dispose(),t?.dispose(),e.clear())}}}var xc=class extends Jt{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Je;e.deleteAttribute(`uv`);let t=new Ze({side:1}),n=new Ze,r=new _(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new U(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new V(e,n,6),o=new st;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new U(e,Sc(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new U(e,Sc(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new U(e,Sc(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new U(e,Sc(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new U(e,Sc(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new U(e,Sc(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Sc(e){return new xt({color:0,emissive:16777215,emissiveIntensity:e})}function Cc(){let e=wc(!1),t=wc(!0),n=new p;return n.name=`vault-threshold-floors`,n.add(e.root,t.root),{root:n,ready:Promise.all([e.ready,t.ready]).then(()=>{}),dispose(){e.dispose(),t.dispose()}}}function wc(e){let t=sc.floor,n=new Uint8Array(t.size*t.size*4);for(let r=0;r<t.size;r++)for(let i=0;i<t.size;i++){let a=r/t.size*(e?t.columns:t.rows),o=e?0:Math.floor(a)%2*.5,s=i/t.size*t.columns+o,c=s%1,l=a%1,u=Math.min(c,1-c,l,1-l),d=Tt.smoothstep(u,t.grout*.4,t.grout*1.5),f=Math.sin(i*12.93+r*7.71)*Math.sin(r*4.12-i*3.31)*t.fallbackNoise,p=Math.sin(Math.floor(a)*19.7+Math.floor(s)*17.3)*.04,m=Math.round(255*(e?.3-d*(.16+f+p):.28+d*(.4+f+p))),h=(r*t.size+i)*4;n[h]=m,n[h+1]=m,n[h+2]=e?m*.88:m,n[h+3]=255}let r=new v(n,t.size,t.size),i=new Set([r]),a=new Set,o=e=>{e.wrapS=e.wrapT=lt,e.repeat.set(t.width/t.tileWorld,t.depth/2/t.tileWorld),e.anisotropy=4,e.colorSpace=_e,e.generateMipmaps=!0,e.minFilter=de,e.magFilter=Pe,e.needsUpdate=!0};o(r);let s=new Ze({color:e?t.interiorColor:sc.colors.floor,map:r,bumpMap:r,bumpScale:e?t.interiorBump:t.bump,roughness:e?t.interiorRoughness:t.roughness,metalness:e?t.interiorMetalness:0}),c=new ve(t.width,t.depth/2),l=new U(c,s);l.name=e?`vault-interior-marble-floor`:`vault-exterior-limestone-floor`,l.rotation.x=-Math.PI/2,l.position.set(0,sc.rig.floorY-.008,t.doorZ+(e?-1:1)*t.depth/4),l.receiveShadow=!0;let u=!1,d=!1,f,p=new Promise(e=>{f=e}),m=setTimeout(()=>{d=!0,f()},sc.textureTimeoutMs),h=()=>{d=!0,clearTimeout(m),f()},g=e=>{a.has(e)||(a.add(e),i.delete(e),e.dispose())};try{let n=new L().load(`/crusader-coin-pusher-demo/${(e?t.interiorAsset:t.asset).replace(/^\.\//,``)}`,e=>{if(u||d){g(e);return}i.add(e),o(e),s.map=s.bumpMap=e,s.needsUpdate=!0,h()},void 0,h);a.has(n)||i.add(n)}catch{h()}return{root:l,ready:p,dispose(){u||(u=!0,h(),c.dispose(),s.dispose(),[...i].forEach(g))}}}function Tc(e){let t=s.cinematic,n=t.doors,r=s.premium,i=new Set,a=e=>(i.add(e),e),o,c,l,u,d,f=!1,p=()=>{f||(f=!0,c?.disconnect(),l?.dispose(),u?.dispose(),d?.dispose(),i.forEach(e=>e.dispose()),o?.dispose(),o?.forceContextLoss(),o?.domElement.remove())};try{u=bc(),l=Us(`push`),o=new Rs({alpha:!0,antialias:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),o.setClearColor(0,0),o.toneMapping=4,o.toneMappingExposure=n.exposure,o.shadowMap.enabled=!0,o.shadowMap.type=1;let i=new Jt,s=new We(t.fov,1,t.near,t.far);i.add(l.root,u.root);let m=new xc,h=new Wi(o);try{i.environment=a(h.fromScene(m,J.envBlur)).texture,i.environmentIntensity=J.envIntensity}finally{m.dispose(),h.dispose()}d=Cc(),i.add(d.root),i.add(new O(r.colors.light,r.colors.gunmetal,n.ambient));let g=new mt(r.colors.light,n.keyIntensity);g.position.set(n.keyPosition[0],n.keyPosition[1],n.keyPosition[2]),i.add(g),g.castShadow=!0,g.shadow.mapSize.setScalar(sc.lighting.shadowSize),a(g.shadow),Object.assign(g.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:22}),g.shadow.bias=-4e-4,g.shadow.normalBias=.035;let _=new mt(r.colors.fill,n.rimIntensity);_.position.set(n.rimPosition[0],n.rimPosition[1],n.rimPosition[2]),i.add(_);let v=new mt(r.colors.fill,sc.lighting.fillIntensity);v.position.set(1,2,5),i.add(v);let y=a(new kt),b=new Float32Array(n.sparkCount*3);for(let e=0;e<n.sparkCount;e++)b[e*3]=Math.sin(e*n.goldenAngle)*n.sparkSpreadX,b[e*3+1]=Math.cos(e*n.goldenAngle)*n.sparkSpreadY,b[e*3+2]=n.sparkZ+Math.sin(e)*n.sparkSpreadZ;y.setAttribute(`position`,new et(b,3));let x=a(new xe({color:r.colors.edge,size:n.sparkSize,transparent:!0,opacity:0,depthWrite:!1})),S=new Yt(y,x);i.add(S);let C=0;function w(e){if(f)return;C=Number.isFinite(e)?Math.max(0,Math.min(t.introSeconds,e)):0;let r=l.draw(C,s.aspect);u.draw(C),s.position.set(0,r.cameraY,r.cameraZ),s.lookAt(0,r.cameraY,r.cameraZ-n.lookDistance),S.rotation.z=C*n.sparkRotation,S.position.y=C*n.sparkRise,x.opacity=Tt.smoothstep(C,n.sparkFadeStart,n.sparkFadeEnd)*n.sparkOpacity,o.render(i,s)}let T=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);o.setSize(t,n),s.aspect=t/n,s.updateProjectionMatrix(),w(C)};return e.appendChild(o.domElement),c=new ResizeObserver(T),c.observe(e),T(),{draw:w,dispose:p,ready:Promise.all([l.frontReady,u.ready]).then(()=>{f||w(C)})}}catch(e){throw p(),e}}var Ec={assets:{scales:`./assets/dragon-study/bronze-scales-v1.webp`,membrane:`./assets/dragon-study/burgundy-membrane-v1.webp`},colors:{skin:`#b89761`,belly:`#d0a76b`,wing:`#752e28`,horn:`#b79a6d`,claw:`#382c23`,mouth:`#2b1010`,eye:`#ffd27b`,pupil:`#150d08`,background:`#141921`,floor:`#242a31`,light:`#ffe5b4`,rim:`#7cafd2`,accent:`#ddbb7c`,white:`#ffffff`},material:{skinRoughness:.67,skinMetalness:.24,bump:.032,wingRoughness:.84,wingMetalness:.02,wingBump:.013,eyeEmission:1.7},geometry:{bodyRings:100,bodySides:32,wingStrips:16,wingSpans:8,limbSides:16,curveRings:30,hornSides:12},motion:{duration:8,wingHz:.75,downAngle:-.32,upAngle:.82,elbowPhase:.38,wristPhase:.68,tailPhase:.54,bodyBob:.1,bodyPitch:.06,diveStart:2.7,diveEnd:4.9,recoverEnd:6.8},camera:{fov:37,near:.1,far:120,targetY:.25,radius:15.5,portraitRadius:22,heroAzimuth:-.78,heroElevation:.3,maxPixelRatio:1.5},lighting:{exposure:1.05,ambient:1.35,key:3.6,fill:1.1,rim:3.2,shadowSize:1024},textureTimeoutMs:12e3,css:{"--ds-bg":`#141921`,"--ds-panel":`#1a2029`,"--ds-text":`#f0e7d5`,"--ds-muted":`#b8b9bc`,"--ds-accent":`#ddbb7c`,"--ds-line":`#48505b`,"--ds-selected":`#453a29`,"--ds-error":`#edb5a5`,"--ds-space-xs":`4px`,"--ds-space-sm":`8px`,"--ds-space-md":`12px`,"--ds-space-lg":`20px`,"--ds-space-xl":`28px`,"--ds-radius":`8px`,"--ds-target":`44px`,"--ds-text-sm":`12px`,"--ds-text-md":`14px`,"--ds-text-lg":`19px`,"--ds-text-title":`25px`,"--ds-stage-min":`200px`,"--ds-border":`1px`,"--ds-outline":`2px`,"--ds-disabled":`0.42`,"--ds-track":`130px`,"--ds-font":`'Segoe UI', 'Microsoft JhengHei', sans-serif`}};function Dc(e,t){if(!t.length)throw Error(`A skinning chain requires at least one joint.`);if(t.length===1)return{indices:[t[0].index,0,0,0],weights:[1,0,0,0]};let n=1/0,r=0,i=0,a=new M,o=new M,s=new M;for(let c=0;c<t.length-1;c++){let l=t[c].position,u=t[c+1].position;a.subVectors(u,l),o.subVectors(e,l);let d=Tt.clamp(o.dot(a)/Math.max(a.lengthSq(),1e-8),0,1),f=s.copy(l).addScaledVector(a,d).distanceToSquared(e);f<n&&(n=f,r=c,i=d)}return{indices:[t[r].index,t[r+1].index,0,0],weights:[1-i,i,0,0]}}function Oc(e,t,n,r,i=2){let a=new it(e.map(e=>new M(...e.center))),o=[],s=[],c=[],l=[],u=[],d=new M(0,1,0),f=new M,p=new M;for(let m=0;m<=n;m++){let h=m/n,g=a.getPoint(h),_=a.getTangent(h).normalize();f.crossVectors(d,_).normalize(),f.lengthSq()<.01&&f.set(1,0,0),p.crossVectors(_,f).normalize();let v=h*(e.length-1),y=Math.min(e.length-2,Math.floor(v)),b=v-y,x=b*b*(3-2*b),S=Tt.lerp(e[y].width,e[y+1].width,x),C=Tt.lerp(e[y].height,e[y+1].height,x),w=Dc(g,t);for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,a=g.clone().addScaledVector(f,Math.cos(t)*S).addScaledVector(p,Math.sin(t)*C);if(o.push(a.x,a.y,a.z),s.push(e/r*i,h*i*2.5),l.push(...w.indices),u.push(...w.weights),m<n&&e<r){let t=m*(r+1)+e,n=t+r+1;c.push(t,t+1,n,n,t+1,n+1)}}}return kc(o,s,c,l,u)}function kc(e,t,n,r,i){let a=new kt;return a.setAttribute(`position`,new k(e,3)),a.setAttribute(`uv`,new k(t,2)),a.setAttribute(`skinIndex`,new A(r,4)),a.setAttribute(`skinWeight`,new k(i,4)),a.setIndex(n),a.computeVertexNormals(),a}function Ac(e,t,n,r,i,a){let o=[],s=[],c=[],l=[],u=[],d=(i+1)*(a+1);for(let f=0;f<t.length-1;f++){let p=t[f],m=t[f+1],h=o.length/3;for(let t=0;t<2;t++)for(let g=0;g<=i;g++)for(let _=0;_<=a;_++){let v=g/i,y=_/a,b=1-.17*Math.sin(y*Math.PI)**.75*v*v,x=p.clone().lerp(m,y).sub(e).multiplyScalar(v*b).add(e);x.y+=Math.sin(v*Math.PI)*Math.sin(y*Math.PI)*.13+(t===0?.004:-.004),o.push(x.x,x.y,x.z),s.push(Math.abs(x.x)/4,x.z/3);let S=Tt.smoothstep(v,.03,.75);if(l.push(n,r[f],r[f+1],0),u.push(1-S,S*(1-y),S*y,0),g<i&&_<a){let e=h+t*d+g*(a+1)+_,n=e+a+1;t===0?c.push(e,n,e+1,n,n+1,e+1):c.push(e,e+1,n,n,e+1,n+1)}}let g=(e,t)=>c.push(h+e,h+t,h+e+d,h+t,h+t+d,h+e+d);for(let e=0;e<i;e++)g(e*(a+1),(e+1)*(a+1)),g(e*(a+1)+a,(e+1)*(a+1)+a);for(let e=0;e<a;e++)g(i*(a+1)+e,i*(a+1)+e+1)}return kc(o,s,c,l,u)}var jc=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Mc(e,t){let n=Ec.motion,r=Number.isFinite(e)?Math.max(0,e)%n.duration:0,i=r*n.wingHz*Math.PI*2,a=t===`dive`?jc(r,n.diveStart,n.diveStart+.6)*(1-jc(r,n.diveEnd,n.recoverEnd)):0,o=t===`turn`?Math.sin(r/n.duration*Math.PI*2):0,s=e=>Math.sin(e)*.55+Math.sin(e*2+.2)*.09;return{time:r,phase:i,fold:a,shoulder:.16+s(i)*(1-a*.86)+a*.25,elbow:-.04+s(i-n.elbowPhase)*.46*(1-a)-a*.85,wrist:.08+s(i-n.wristPhase)*.38*(1-a)+a*.45,sweep:a*1,pitch:Math.cos(i-.3)*n.bodyPitch*(1-a)-a*.67,bob:-Math.sin(i-.4)*n.bodyBob*(1-a)-a*.55,yaw:o*.78,bank:-o*.15,neck:Math.cos(i-.55)*.045+a*.12,jaw:-.1-a*.16,tail:Array.from({length:8},(e,t)=>({yaw:Math.sin(i*.5-t*n.tailPhase)*(.045+t*.013)-o*.055,pitch:Math.sin(i-t*.36)*.024+a*.045}))}}function Nc(){let e=new p;e.name=`original-treasury-dragon`;let t=[],n=[],r=[],i=new Set,a=new Set,o=(r,i,a)=>{let o=new vt;o.name=r;let s=new M(...i);o.position.copy(s),a!==void 0&&o.position.sub(n[a]),(a===void 0?e:t[a]).add(o);let c=t.length;return t.push(o),n.push(s),c},s=e=>({index:e,position:n[e]}),c=e=>e.map(s),l=(e,t,n=t)=>({center:e,width:t,height:n}),u=e=>{let t=new Ze(e);return a.add(t),t},f=u({color:Ec.colors.skin,roughness:Ec.material.skinRoughness,metalness:Ec.material.skinMetalness}),m=u({color:Ec.colors.belly,roughness:.57,metalness:.2}),h=u({color:Ec.colors.wing,roughness:Ec.material.wingRoughness,metalness:Ec.material.wingMetalness,side:2}),g=u({color:Ec.colors.horn,roughness:.49,metalness:.12}),_=u({color:Ec.colors.claw,roughness:.46,metalness:.12}),v=u({color:Ec.colors.mouth,roughness:.9}),y=u({color:Ec.colors.eye,emissive:Ec.colors.eye,emissiveIntensity:Ec.material.eyeEmission,roughness:.19}),b=u({color:Ec.colors.pupil,roughness:.23}),x=(t,n,a=f)=>{i.add(n);let o=new d(n,a);return o.name=t,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,e.add(o),r.push(o),o},S=o(`pelvis`,[0,-.05,1.05],o(`root`,[0,0,0])),C=o(`chest`,[0,.18,-.45],S),w=o(`neck-base`,[0,.45,-1.15],C),T=o(`neck-middle`,[0,.82,-1.9],w),E=o(`head`,[0,1.02,-2.65],T),D=o(`jaw`,[0,.79,-2.7],E),O=[];for(let e=0;e<8;e++)O.push(o(`tail-${e}`,[0,-.1-e*.025,1.5+e*.63],e?O[e-1]:S));let k=c([E,T,w,C,S,...O]);x(`neck-thorax-abdomen-tail`,Oc([l([0,1.01,-2.57],.24,.29),l([0,.91,-2.04],.255,.31),l([0,.57,-1.39],.32,.4),l([0,.23,-.85],.58,.66),l([0,.12,-.27],.65,.68),l([0,.02,.42],.52,.53),l([0,-.03,1.06],.43,.45),l([0,-.1,1.63],.29,.3),l([0,-.13,2.2],.205,.22),l([0,-.17,2.88],.145,.16),l([0,-.2,3.6],.1,.12),l([0,-.25,4.3],.075,.09),l([0,-.28,5.05],.045,.06),l([0,-.3,5.86],.008,.009)],k,Ec.geometry.bodyRings,Ec.geometry.bodySides,2.5)),x(`sculpted-cranium-and-snout`,Oc([l([0,1.02,-2.34],.2,.24),l([0,1.04,-2.62],.4,.36),l([0,1.02,-2.95],.365,.26),l([0,.96,-3.18],.265,.18),l([0,.92,-3.48],.23,.135),l([0,.92,-3.68],.175,.11),l([0,.92,-3.75],.015,.035)],c([E]),32,24,1)),x(`lower-jaw`,Oc([l([0,.77,-2.6],.22,.1),l([0,.77,-2.89],.3,.115),l([0,.78,-3.23],.215,.07),l([0,.79,-3.58],.16,.045),l([0,.8,-3.67],.012,.015)],c([D]),24,20,1)),x(`mouth-interior`,Oc([l([0,.8,-2.72],.21,.025),l([0,.82,-3.08],.24,.028),l([0,.83,-3.52],.16,.022),l([0,.83,-3.62],.01,.006)],c([E]),15,12,1),v);let A=(e,t,n,r,i=g,a=Ec.geometry.hornSides)=>x(e,Oc(t.map((e,t)=>l(e,n[t])),r,Math.max(9,t.length*5),a,1),i),j=(e,r,a,o,s)=>{let c=new ht(1,16,10);i.add(c);let l=new U(c,s);return l.name=e,l.scale.set(...o),l.position.set(...a).sub(n[r]),l.castShadow=!0,t[r].add(l),l};for(let e of[-1,1]){let t=t=>[t[0]*e,t[1],t[2]];A(`crown-horn-${e}`,[[.27,1.29,-2.53],[.43,1.51,-2.32],[.53,1.69,-1.94],[.49,1.79,-1.61]].map(e=>t(e)),[.13,.1,.052,.001],c([E])),A(`temple-horn-${e}`,[[.34,1.09,-2.57],[.6,1.17,-2.39],[.72,1.24,-2.14]].map(e=>t(e)),[.1,.072,.001],c([E])),A(`jaw-spike-${e}`,[[.24,.73,-2.71],[.43,.65,-2.47],[.53,.66,-2.26]].map(e=>t(e)),[.075,.052,.001],c([D])),A(`eye-brow-${e}`,[[.25,1.18,-3.14],[.36,1.25,-2.94],[.41,1.25,-2.71]].map(e=>t(e)),[.025,.09,.025],c([E]),f),j(`orbital-socket-${e}`,E,t([.324,1.115,-2.96]),[.08,.12,.15],v),j(`amber-eye-${e}`,E,t([.376,1.12,-2.99]),[.044,.067,.095],y),j(`vertical-pupil-${e}`,E,t([.413,1.12,-3.005]),[.009,.052,.014],b),j(`nostril-${e}`,E,t([.177,.985,-3.51]),[.018,.028,.06],v);for(let n=0;n<6;n++){let r=-3.46+n*.117,i=.18+n*.017;A(`tooth-${e}-${n}`,[t([i,.83,r]),t([i,.735-n%2*.025,r+.02])],[.027,.001],c([E]),g,7)}}for(let e=0;e<18;e++){let t=-1.92+e*.36,n=t<-1?.99:t<.5?.77-(t+.5)*.08:t<1.6?.46:.18-(t-1.6)*.062,r=.27*(1-e/24);A(`dorsal-scutum-${e}`,[[0,n,t],[0,n+r*.8,t+.09],[0,n+r,t+.22]],[.09-e*.003,.055-e*.002,.001],k)}for(let e=0;e<12;e++){let t=-1.55+e*.24,n=t<-.8?.24+(t+1.55)*.3:.48-Math.max(0,t+.1)*.15,r=t<-.8?.2-(t+1.55)*.7:-.5+Math.max(0,t)*.1;x(`ventral-plate-${e}`,Oc([l([0,r,t-.11],n*.68,.035),l([0,r-.035,t],n,.055),l([0,r,t+.105],n*.76,.012)],k,6,14,1),m)}let ee=[];for(let e of[!1,!0])for(let t of[-1,1]){let n=e?[[t*.36,-.04,1],[t*.73,-.49,1.34],[t*.64,-.92,.95],[t*.65,-1.03,.54]]:[[t*.5,.08,-.67],[t*.79,-.52,-.26],[t*.62,-.98,-.87],[t*.61,-1.04,-1.13]],r=o(`${e?`hind`:`fore`}-upper-${t}`,n[0],e?S:C),i=o(`${e?`hind`:`fore`}-lower-${t}`,n[1],r),a=o(`${e?`hind`:`fore`}-foot-${t}`,n[2],i),s=c([r,i,a]);x(`limb-${e}-${t}`,Oc(n.map((t,n)=>l(t,[e?.255:.22,.175,.105,.025][n],[e?.27:.23,.185,.1,.02][n])),s,26,Ec.geometry.limbSides,1.3));for(let r=0;r<3;r++){let i=n[3],o=i[0]+(r-1)*.095;A(`finger-${e}-${t}-${r}`,[[i[0],i[1],i[2]+.15],[o,i[1]-.035,i[2]-.03],[o,i[1]-.08,i[2]-.16]],[.055,.04,.026],c([a]),f,9),A(`talon-${e}-${t}-${r}`,[[o,i[1]-.08,i[2]-.12],[o,i[1]-.1,i[2]-.23],[o,i[1]-.18,i[2]-.25]],[.037,.025,.001],c([a]),_,9)}ee.push({upper:r,lower:i,foot:a,side:t,rear:e})}let te=[];for(let e of[-1,1]){let t=[e*.48,.49,-.56],n=[e*1.5,.56,-.93],r=[e*2.65,.43,-1.21],i=o(`wing-shoulder-${e}`,t,C),a=o(`wing-elbow-${e}`,n,i),s=o(`wing-wrist-${e}`,r,a),u=c([i,a,s]);x(`wing-leading-arm-${e}`,Oc([l(t,.2,.22),l(n,.115,.135),l(r,.087,.09)],u,28,16,1.3));let d=[[e*5,.38,-.98],[e*4.27,.2,.32],[e*3.35,.08,1.46],[e*2.26,.01,2.05],[e*1.25,.04,1.69],[e*.59,.1,1.02]],p=d.map((t,n)=>o(`wing-finger-${e}-${n}`,r,s));for(let t=0;t<d.length;t++){let n=d[t],i=new M(...r),a=new M(...n),o=i.clone().lerp(a,.53);o.y+=.045;let l=A(`wing-ray-${e}-${t}`,[r,o.toArray(),n],[.073-t*.006,.047-t*.004,.008],c([s]),f,10),u=l.geometry.getAttribute(`skinIndex`),m=l.geometry.getAttribute(`skinWeight`);for(let e=0;e<m.count;e++){let n=Math.floor(e/11)/15,r=Tt.smoothstep(n,.03,.75);u.setXYZW(e,s,t===d.length-1?C:p[t],0,0),m.setXYZW(e,1-r,r,0,0)}}let m=[...p.slice(0,-1),C],_=Ac(new M(...r),d.map(e=>new M(...e)),s,m,Ec.geometry.wingStrips,Ec.geometry.wingSpans);x(`deforming-wing-membrane-${e}`,_,h),x(`wing-root-web-${e}`,Ac(new M(...r),[n,t,d[d.length-1]].map(e=>new M(...e)),s,[a,i,C],Ec.geometry.wingStrips,Ec.geometry.wingSpans),h),A(`wing-thumb-${e}`,[r,[e*2.76,.62,-1.47],[e*2.88,.59,-1.61]],[.09,.063,.001],c([s]),g),te.push({shoulder:i,elbow:a,wrist:s,fingers:p,side:e})}e.updateMatrixWorld(!0);let N=new _t(t);for(let e of r)e.bind(N),e.normalizeSkinWeights();let ne=t.map(e=>({position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone()})),P=!1;return{root:e,skeleton:N,bones:t,meshes:r,materials:{skin:f,wing:h,belly:m,horn:g},stats:()=>{let n=0,i=0,a=0;return e.traverse(e=>{e instanceof U&&(a++,i+=e.geometry.getAttribute(`position`).count,n+=(e.geometry.index?.count??e.geometry.getAttribute(`position`).count)/3)}),{bones:t.length,skinnedMeshes:r.length,meshes:a,vertices:i,triangles:n}},draw:(n,r)=>{if(P)return;let i=Mc(n,r);t.forEach((e,t)=>{e.position.copy(ne[t].position),e.quaternion.copy(ne[t].rotation),e.scale.copy(ne[t].scale)}),e.position.y=i.bob,e.rotation.set(i.pitch,i.yaw,i.bank),t[C].rotation.x=Math.sin(i.phase-.4)*.025,t[w].rotation.x=i.neck,t[T].rotation.x=-i.neck*.6,t[E].rotation.x=-i.pitch*.22,t[E].rotation.y=-i.yaw*.12,t[D].rotation.x=i.jaw,O.forEach((e,n)=>{t[e].rotation.y=i.tail[n].yaw,t[e].rotation.x=i.tail[n].pitch});for(let e of te)t[e.shoulder].rotation.z=e.side*i.shoulder,t[e.shoulder].rotation.y=-e.side*i.sweep*.4,t[e.elbow].rotation.z=e.side*i.elbow,t[e.elbow].rotation.y=-e.side*i.sweep*.72,t[e.wrist].rotation.z=e.side*i.wrist,t[e.wrist].rotation.y=e.side*i.sweep*.13,e.fingers.forEach((n,r)=>{t[n].rotation.x=Math.sin(i.phase-.8-r*.13)*.032*(1-i.fold)+i.fold*.08,t[n].rotation.y=e.side*i.fold*(r-2)*.07});for(let e of ee)t[e.upper].rotation.x=-.13+i.fold*.35+Math.sin(i.phase-.6)*.03,t[e.upper].rotation.z=e.side*.04,t[e.lower].rotation.x=.16+i.fold*.18,t[e.foot].rotation.x=-.17;return e.updateMatrixWorld(!0),N.update(),i},setWireframe(e){a.forEach(t=>{t instanceof Ze&&(t.wireframe=e)})},setTextures(e,t){f.map=e,f.bumpMap=e,f.bumpScale=Ec.material.bump,h.map=t,h.bumpMap=t,h.bumpScale=Ec.material.wingBump,f.color.set(e?Ec.colors.white:Ec.colors.skin),h.color.set(t?Ec.colors.white:Ec.colors.wing),f.needsUpdate=h.needsUpdate=!0},dispose(){P||(P=!0,i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),N.dispose(),e.clear())}}}var Pc=s.cinematic.dragon,Fc=e=>Math.max(0,Math.min(1,e)),Ic=e=>{let t=Fc(e);return t*t*(3-2*t)},Lc=(e,t,n)=>e+(t-e)*n;function Rc(e){let t=Number.isFinite(e)?Math.max(0,e):0,n=Fc((t-Pc.enterSeconds)/(Pc.impactSeconds-Pc.enterSeconds)),r=Fc((t-Pc.impactSeconds)/(Pc.exitSeconds-Pc.impactSeconds)),i=Math.max(0,t-Pc.impactSeconds),a=n*n;return{skeletonTime:i?Lc(Pc.hitPoseTime,Pc.exitPoseTime,r):Lc(Pc.startPoseTime,Pc.hitPoseTime,n),yaw:i?Lc(Pc.hitYaw,Pc.exitYaw,Ic(r)):Lc(Pc.startYaw,Pc.hitYaw,Ic(n)),bank:i?Lc(0,Pc.exitBank,Ic(r)):Lc(Pc.startBank,0,Ic(n)),x:i?Lc(Pc.hitX,Pc.exitX,r):Lc(Pc.startX,Pc.hitX,a),y:i?Lc(Pc.hitY,Pc.exitY,r*r):Lc(Pc.startY,Pc.hitY,a),z:i?Lc(Pc.hitZ,Pc.exitZ,r):Lc(Pc.startZ,Pc.hitZ,a),scale:i?Lc(Pc.hitScale,Pc.exitScale,r):Lc(Pc.startScale,Pc.hitScale,a),opacity:Ic((t-Pc.enterSeconds)/.25)*(1-Ic((r-.55)/.45)),flight:i,impact:i>0?Math.exp(-i*Pc.shakeDecay):0,shake:i>0?Math.sin(i*Pc.shakeFrequency)*Math.exp(-i*Pc.shakeDecay)*Pc.cameraShake:0,fade:1-Ic((t-Pc.settleSeconds)/(s.cinematic.winSeconds-Pc.settleSeconds))}}function zc(){let e=s.cinematic.dragon,t=new p;t.name=`treasury-skinned-dragon-flight`;let n=new p;t.add(n);let r=Nc();n.add(r.root);let i=r.bones.find(e=>e.name===`head`),a=new st;a.name=`muzzle-contact`,a.position.set(e.muzzleLocal[0],e.muzzleLocal[1],e.muzzleLocal[2]),i.add(a);let o=new Set;r.root.traverse(e=>{e instanceof U&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.transparent=!0,o.add(e)})});let c=new Set,l=new Set,u={},d=!1,f=!1,m,h,g=e=>{l.has(e)||(l.add(e),c.delete(e),e.dispose())},_=new Promise((e,t)=>{m=n=>{f||(f=!0,clearTimeout(h),n?t(n):e())}});_.catch(()=>{}),h=setTimeout(()=>m(Error(`Dragon textures timed out`)),s.cinematic.doors.textureTimeoutMs);let v=new L;for(let e of[`scales`,`membrane`]){if(f)break;try{let t=v.load(`/crusader-coin-pusher-demo/${Ec.assets[e].replace(/^\.\//,``)}`,t=>{if(d||f){g(t);return}c.add(t),t.colorSpace=_e,t.wrapS=t.wrapT=lt,t.anisotropy=s.premium.texture.anisotropy,u[e]=t,u.scales&&u.membrane&&(r.setTextures(u.scales,u.membrane),m())},void 0,()=>m(Error(`Dragon textures unavailable`)));l.has(t)||c.add(t)}catch{m(Error(`Dragon textures unavailable`))}}let y=new M,b=new pt,x=e=>{d||(r.draw(e.skeletonTime,`dive`),n.rotation.set(0,e.yaw,e.bank),t.scale.setScalar(e.scale),t.updateWorldMatrix(!0,!0),b.copy(t.matrixWorld).invert(),a.getWorldPosition(y).applyMatrix4(b).multiplyScalar(e.scale),t.position.set(e.x,e.y,e.z).sub(y),t.visible=e.opacity>0,o.forEach(t=>{t.opacity=e.opacity}),t.updateWorldMatrix(!0,!0),r.skeleton.update())},S=e=>x(Rc(e));return S(0),{root:t,ready:_,draw:S,drawPose:x,dispose:()=>{d||(d=!0,m(),clearTimeout(h),r.dispose(),[...c].forEach(g),t.clear())},strikePoint:a,model:r}}function Bc(e,t){if(t===`intro`)return Tc(e);let n=s.cinematic,r=n.dragon,i=s.premium,a=new Rs({alpha:!0,antialias:!0}),o=new Set,c=e=>(o.add(e),e),l,u=!1,d=()=>{u||(u=!0,l?.disconnect(),o.forEach(e=>e.dispose()),a.dispose(),a.forceContextLoss(),a.domElement.remove())};try{a.setPixelRatio(Math.min(window.devicePixelRatio||1,n.pixelRatio)),a.setClearColor(0,0),a.toneMapping=4,a.toneMappingExposure=1.15;let t=new Jt,o=new p;t.add(o);let s=new We(n.fov,1,n.near,n.far),f=zs(`coin`);Object.values(f).forEach(c);let m=c(new Ze({color:r.coinColor,metalness:n.doors.coinMetalness,roughness:i.materials.coinRoughness,map:f.albedo,bumpMap:f.height,bumpScale:.012,roughnessMap:f.roughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),h=c(new Ze({color:i.colors.coinSide,metalness:n.doors.coinMetalness,roughness:i.materials.goldRoughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),g=c(new qt(n.coinRadius,n.coinRadius,n.coinHeight,n.coinSegments)),v=n.towerLayers*n.towerRing,y=c(new V(g,[h,m,m],v));y.frustumCulled=!1,o.add(y);let b=c(zc());o.add(b.root),t.add(new O(i.colors.light,i.colors.gunmetal,r.ambient));let x=new mt(i.colors.light,r.keyIntensity);x.position.set(-3,5,4),t.add(x);let S=new mt(i.colors.fill,r.rimIntensity);S.position.set(3,2,-2),t.add(S);let C=new _(i.colors.edge,0,r.flashDistance);C.position.set(r.towerX,.4,1.8),o.add(C);let w=c(new Ot({color:i.colors.edge,transparent:!0,opacity:.5})),T=c(new ue(1.2,.008,6,96)),E=new p;for(let e=0;e<3;e++){let t=new U(T,w);t.scale.setScalar(1+e*.12),t.rotation.x=e*.16,E.add(t)}o.add(E);let D=c(new kt),k=new Float32Array(540);for(let e=0;e<180;e++)k[e*3]=Math.sin(e*12.31)*7,k[e*3+1]=Math.cos(e*9.7)*5,k[e*3+2]=-2+Math.sin(e)*2;D.setAttribute(`position`,new et(k,3));let A=c(new xe({color:i.colors.edge,size:.022,transparent:!0,opacity:.6})),j=new Yt(D,A);o.add(j);let ee=new st,M=0;function te(e){if(u)return;M=e;let i=Rc(e);b.draw(e);let c=s.aspect<.8;o.scale.setScalar(c?r.portraitScale:1),s.position.set(i.shake,.25+i.shake*.5,(c?n.portraitCameraZ:n.cameraZ)-e*.06),s.lookAt(0,.2,0),j.rotation.z=e*.035,j.position.y=e*.06;{let t=i.flight;m.opacity=h.opacity=i.fade;for(let i=0;i<v;i++){let a=Math.floor(i/n.towerRing),o=(i%n.towerRing+a%2*.5)*Math.PI*2/n.towerRing,s=Math.max(0,t-(1-a/n.towerLayers)*.12),c=o+a*.43,l=.6+a/n.towerLayers;ee.position.set(r.towerX+Math.cos(o)*n.ringRadius+s*(r.towerPush*l+Math.cos(c)*r.towerSpread),-1.3+a*n.towerPitch+s*(.45+Math.sin(i*2.3)*.55)-s*s*r.gravity,Math.sin(o)*n.ringRadius+Math.sin(c)*s*r.towerSpread),ee.rotation.set(i%7*s,e*.1+i%9*s,i%5*s),ee.scale.setScalar(1),ee.updateMatrix(),y.setMatrixAt(i,ee.matrix)}w.opacity=i.impact*.7,E.scale.setScalar(.8+t*3.5),C.intensity=i.impact*r.flashIntensity}E.rotation.z=e*.13,y.instanceMatrix.needsUpdate=!0,a.render(t,s)}let N=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);a.setSize(t,n),s.aspect=t/n,s.updateProjectionMatrix(),te(M)};return e.appendChild(a.domElement),l=new ResizeObserver(N),l.observe(e),N(),{draw:te,ready:b.ready,dispose:d}}catch(e){throw d(),e}}var Vc=[[`遠征歸來`,`聖城御庫，仍在沉睡。`],[`誓印之幣`,`每一枚金幣，都是喚醒機關的鑰匙。`],[`聖城幣塔`,`推動金幣，揭開御庫的封印。`]],Hc=[`御庫封印解除`,`最高幣塔擊破`];function Uc(e,t=!1){return e===`high-tower`&&t?s.cinematic.reducedWinSeconds:e===`intro`?s.cinematic.introSeconds:s.cinematic.winSeconds}function Wc(e,t){return!t||e===`high-tower`}function Gc(e,t){return e===`intro`?t<s.cinematic.introCuts[0]?0:t<s.cinematic.introCuts[1]?1:2:0}function Kc(e,t,n,r){let i=!1,a=e=>{i||(i=!0,clearTimeout(o),n(e))},o=setTimeout(()=>a(Error(`Cinematic scene loading timed out`)),r);return Promise.resolve(e).then(()=>{if(!i){try{t()}catch(e){a(e);return}a()}},e=>a(e)),()=>{i=!0,clearTimeout(o)}}var qc=o({...s.customProperties,...s.cinematic.css});function Jc(e){let[t]=(0,K.useState)(()=>`/crusader-coin-pusher-demo/${window.innerHeight>window.innerWidth?s.introVideo.portrait:s.introVideo.wide}`),[n,r]=(0,K.useState)(!1),[i,a]=(0,K.useState)(!1),[o,c]=(0,K.useState)(!1),l=(0,K.useRef)(null),u=(0,K.useRef)(null),d=(0,K.useRef)(null),f=(0,K.useRef)(!1),p=(0,K.useRef)(0),m=(0,K.useRef)(e);m.current=e;let h=()=>{f.current||(f.current=!0,l.current?.pause(),m.current.onComplete())},g=async()=>{let e=l.current,t=p.current;if(!(!e||m.current.suspended||f.current)){try{await e.play()}catch{if(t!==p.current||l.current!==e||m.current.suspended||f.current)return;e.muted=!0,c(!!m.current.soundEnabled);try{await e.play()}catch{}}t===p.current&&(m.current.suspended||f.current||l.current!==e)&&e.pause()}},_=()=>{m.current.onAudioUnlock?.(),l.current&&m.current.soundEnabled&&!m.current.suspended&&(l.current.muted=!1,c(!1),g())};return(0,K.useEffect)(()=>{let e=document.activeElement;return d.current?.focus({preventScroll:!0}),m.current.onPlaybackTime?.(0,!1),()=>{e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,K.useEffect)(()=>{let e=l.current;if(e)return e.src=t,()=>{p.current++,e.pause(),e.removeAttribute(`src`),e.load()}},[t]),(0,K.useEffect)(()=>{let t=l.current;t&&(t.muted=!e.soundEnabled,e.suspended||i?t.pause():g())},[e.suspended,e.soundEnabled,i]),(0,K.useEffect)(()=>{if(i||e.suspended)return;let t=-1,n=0,r=window.setInterval(()=>{let e=l.current?.currentTime??0;n=e>t?0:n+s.introVideo.pollMs,t=e,n>=s.introVideo.stallTimeoutMs&&a(!0)},s.introVideo.pollMs);return()=>window.clearInterval(r)},[i,e.suspended]),(0,K.useEffect)(()=>{if(!i||e.suspended)return;let t=window.setTimeout(h,s.introVideo.errorReturnMs);return()=>window.clearTimeout(t)},[i,e.suspended]),(0,q.jsxs)(`div`,{ref:u,className:`vault-film vault-film--video`,style:qc,role:`dialog`,"aria-modal":`true`,"aria-label":`御庫序章`,"data-kind":`intro`,"data-motion":`full`,"data-state":i?`fallback`:n?`ready`:`loading`,onPointerDownCapture:e=>{e.target.closest(`button`)||_()},onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),h()),e.key===`Tab`){let t=u.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[(0,q.jsx)(`video`,{ref:l,className:`vault-film__video`,src:t,autoPlay:!e.suspended&&!i,playsInline:!0,preload:`auto`,onPlaying:()=>r(!0),onEnded:h,onError:()=>a(!0)}),!n&&(0,q.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,q.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,q.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,q.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,q.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,q.jsxs)(`div`,{className:`vault-film__top`,children:[(0,q.jsx)(`span`,{children:`聖城御庫 · 序章`}),(0,q.jsxs)(`div`,{className:`vault-film__actions`,children:[e.onSoundToggle&&(0,q.jsx)(`button`,{type:`button`,disabled:e.suspended,"aria-pressed":!!e.soundEnabled&&!o,onClick:()=>{o&&e.soundEnabled?_():e.onSoundToggle?.()},children:e.soundEnabled&&!o?`關閉音效`:`開啟音效`}),(0,q.jsx)(`button`,{ref:d,type:`button`,onClick:t=>{t.stopPropagation(),e.onAudioUnlock?.(),h()},children:`跳過開場 ›`})]})]}),(i||!n)&&(0,q.jsxs)(`div`,{className:`vault-film__caption`,children:[!i&&(0,q.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),i&&(0,q.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]})]})}var Yc=o({...s.customProperties,...s.cinematic.css});function Xc(e){return e.kind===`intro`&&s.introVideo.enabled?(0,q.jsx)(Jc,{...e}):(0,q.jsx)(Zc,{...e})}function Zc({kind:e,suspended:t,onComplete:n,soundEnabled:r,onSoundToggle:i,onAudioUnlock:a,onPlaybackTime:o}){let[c,l]=(0,K.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),[u,d]=(0,K.useState)(!1),f=c&&!u,p=!f||e===`high-tower`,[m,h]=(0,K.useState)(0),[g,_]=(0,K.useState)(!1),[v,y]=(0,K.useState)(!1),[b,x]=(0,K.useState)(),[S,C]=(0,K.useState)(!1),[w,T]=(0,K.useState)(!1),E=(0,K.useRef)(null),D=(0,K.useRef)(null),O=(0,K.useRef)(null),k=(0,K.useRef)(null),A=(0,K.useRef)(null),j=(0,K.useRef)(null),ee=(0,K.useRef)(!1),M=(0,K.useRef)({suspended:t,onComplete:n,onPlaybackTime:o});M.current={suspended:t,onComplete:n,onPlaybackTime:o};let te=()=>{ee.current||(ee.current=!0,j.current?.kill(),M.current.onComplete())},N=(0,K.useRef)(te);N.current=te,(0,K.useEffect)(()=>{let e=document.activeElement;A.current?.focus({preventScroll:!0});let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n=()=>l(t.matches);return t.addEventListener(`change`,n),()=>{t.removeEventListener(`change`,n),e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,K.useEffect)(()=>{if(S||g)return;let e=window.setTimeout(()=>_(!0),s.cinematic.loadTimeoutMs);return()=>window.clearTimeout(e)},[S,g]),(0,K.useEffect)(()=>{if(!D.current||f&&e===`intro`)return;let t=!1;T(!1),y(!1),x(void 0);let n;try{n=Bc(D.current,e)}catch(e){x(e instanceof Error?e.message:`Scene initialization failed`),y(!0)}let r=D.current.querySelector(`canvas`),i=e=>{e.preventDefault(),x(`WebGL context lost`),y(!0),n?.dispose(),n=void 0,T(!0)};r?.addEventListener(`webglcontextlost`,i);let a={time:0},o=-1,c=Uc(e,f),l=je.timeline({paused:!0,onComplete:()=>N.current()});l.data=`vault-film`,j.current=l,l.to(a,{time:c,duration:c,ease:`none`,onUpdate:()=>{if(f)return;let t=a.time;M.current.onPlaybackTime?.(t,!M.current.suspended);try{n?.draw(t)}catch(e){n?.dispose(),n=void 0,x(e instanceof Error?e.message:`Scene draw failed`),y(!0)}if(e===`high-tower`&&E.current){let e=s.cinematic.dragon;E.current.style.setProperty(`--film-win-caption-opacity`,String(Math.max(0,Math.min(1,(t-e.captionStart)/(e.captionEnd-e.captionStart)))))}let r=Gc(e,t);r!==o&&(o=r,h(r)),O.current&&(O.current.style.transform=`scale(${1+Math.max(0,(t-(e===`intro`?9:0))/c)*.24})`),k.current&&(k.current.style.transform=`scaleX(${t/c})`)}});let u=Kc(n&&`ready`in n?n.ready:void 0,()=>n?.draw(f?s.cinematic.dragon.stillSeconds:0),r=>{t||(r&&(n?.dispose(),n=void 0,x(r instanceof Error?r.message:`Scene asset loading failed`),y(!0)),T(!0),!Wc(e,f)||M.current.suspended?l.pause():l.resume())},e===`intro`?J.sceneReadyTimeoutMs:s.cinematic.loadTimeoutMs);return()=>{t=!0,u(),M.current.onPlaybackTime?.(l.time(),!1),l.kill(),j.current===l&&(j.current=null),r?.removeEventListener(`webglcontextlost`,i),n?.dispose()}},[e,f]),(0,K.useEffect)(()=>{let n=!t&&w&&Wc(e,f);n?j.current?.resume():j.current?.pause(),M.current.onPlaybackTime?.(j.current?.time()??0,n&&!f)},[e,t,w,f]);let ne=e===`intro`?Vc[f?2:m]:Hc;return(0,q.jsxs)(`div`,{ref:E,className:`vault-film`,role:`dialog`,"aria-modal":`true`,"aria-label":e===`intro`?`御庫序章`:`最高幣塔擊破演出`,"data-kind":e,"data-beat":m,"data-state":g||v?`fallback`:S&&(!p||w)?`ready`:`loading`,"data-motion":f?`reduced`:`full`,"data-scene-ready":w,"data-scene-error":b,style:Yc,...Et(()=>a?.()),onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),a?.(),te()),e.key===`Tab`){let t=E.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[(0,q.jsx)(`img`,{ref:O,className:`vault-film__plate`,src:s.cinematic.treasureAsset,alt:``,onLoad:()=>{C(!0),_(!1)},onError:()=>_(!0)}),(0,q.jsx)(`div`,{ref:D,className:`vault-film__scene`,"aria-hidden":`true`}),e===`intro`&&!f&&!w&&(0,q.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,q.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,q.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,q.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,q.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,q.jsx)(`div`,{className:`vault-film__shade`}),(0,q.jsxs)(`div`,{className:`vault-film__top`,children:[(0,q.jsx)(`span`,{children:e===`intro`?`聖城御庫 · 序章`:`聖城御庫 · 封印解放`}),(0,q.jsxs)(`div`,{className:`vault-film__actions`,children:[i&&(0,q.jsx)(`button`,{type:`button`,disabled:t,"aria-pressed":!!r,onClick:i,children:r?`關閉音效`:`開啟音效`}),(0,q.jsxs)(`button`,{ref:A,type:`button`,onClick:e=>{e.stopPropagation(),a?.(),te()},children:[e===`intro`?f?`進入御庫`:`跳過開場`:`返回機台`,` `,(0,q.jsx)(`span`,{"aria-hidden":`true`,children:` ›`})]})]})]}),(0,q.jsxs)(`div`,{className:`vault-film__caption`,children:[(0,q.jsx)(`p`,{className:`vault-film__kicker`,children:e===`intro`?`THE OATH OF THE TREASURY`:`THE SEAL IS BROKEN`}),(0,q.jsx)(`h2`,{children:ne[0]}),(0,q.jsx)(`p`,{children:ne[1]}),f&&e===`intro`&&(0,q.jsx)(`p`,{className:`vault-film__note`,children:`遠征歸來，以誓印之幣喚醒古老機關。最高幣塔崩落之時，御庫重見天光。`}),e===`high-tower`&&(0,q.jsx)(`p`,{className:`vault-film__note`,children:`得分依實際收集計算`}),(!S||p&&!w)&&!g&&!v&&(0,q.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),f&&(0,q.jsx)(`button`,{type:`button`,disabled:t,onClick:()=>{a?.(),d(!0),A.current?.focus()},children:`播放完整動畫`}),(g||v)&&(0,q.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]},`${e}-${f?`still`:m}`),!f&&(0,q.jsx)(`div`,{className:`vault-film__progress`,"aria-hidden":`true`,children:(0,q.jsx)(`span`,{ref:k})})]})}var Qc=class{totals={front:0,dragon:0,hatch:0,side:0};records=[];settled=new Set;awards=new Set;collapsed=new Set;paid=new Set;sequence=0;frontAt=null;highTower=null;replay=!1;transientAfter=-1/0;add(e,t,n){if(!Number.isSafeInteger(t)||t<=0)return;this.totals[e]+=t;let r=this.records[0],i=s.boardFeedback;e!==`dragon`&&r?.source===e&&r.at>this.transientAfter&&(n-r.at)*1e3<=i.mergeGapMs&&(n-r.startedAt)*1e3<=i.mergeMaxMs?this.records[0]={...r,amount:r.amount+t,at:n}:(this.records.unshift({id:++this.sequence,source:e,amount:t,startedAt:n,at:n}),this.records.length=Math.min(this.records.length,i.recordLimit)),e===`front`&&(this.frontAt=n)}record(e,t){if(Number.isFinite(t))for(let n of e){for(let e of n.dragonAwards??[])this.awards.has(e.eventId)||(this.awards.add(e.eventId),e.coinIds.forEach(e=>{this.settled.add(e),this.paid.add(e)}),this.add(`dragon`,e.amount,t));let e=0,r=0,i=0;for(let t of n.scored)this.settled.has(t)||(this.settled.add(t),e++);for(let e of n.lost)this.settled.has(e.id)||e.zone!==`score`&&(this.settled.add(e.id),e.zone===`loss-hatch`?r++:i++);this.add(`front`,e,t),this.add(`hatch`,r,t),this.add(`side`,i,t);for(let e of n.towerCollapses){if(this.collapsed.has(e.id)||(this.collapsed.add(e.id),e.tier!==`high`))continue;this.replay=!0;let n=this.highTower&&(t-this.highTower.at)*1e3<s.boardFeedback.collapseMs?[...new Set([...this.highTower.slots,e.slotIndex])]:[e.slotIndex];this.highTower={slots:n,at:t}}}}snapshot(e){let t=(t,n)=>t>this.transientAfter&&(e-t)*1e3<n,n=[`front`,`dragon`].flatMap(e=>{let n=this.records.find(t=>t.source===e);return n&&t(n.at,s.boardFeedback.receiptMs)?[{...n}]:[]});return{totals:{...this.totals},records:this.records.map(e=>({...e})),receipts:n,frontAt:this.frontAt!==null&&t(this.frontAt,s.boardFeedback.frontPulseMs)?this.frontAt:null,highTower:this.highTower&&t(this.highTower.at,s.boardFeedback.collapseMs)?this.highTower:null,highTowerReplayAvailable:this.replay,paidCoinIds:this.paid}}clearTransient(e){this.transientAfter=e}saveState(){return structuredClone({totals:this.totals,records:this.records,settled:this.settled,awards:this.awards,collapsed:this.collapsed,paid:this.paid,sequence:this.sequence,replay:this.replay})}restoreState(e){let t=structuredClone(e);this.totals=t.totals,this.records=t.records,this.settled=t.settled,this.awards=t.awards,this.collapsed=t.collapsed,this.paid=t.paid,this.sequence=t.sequence,this.replay=t.replay,this.frontAt=null,this.highTower=null,this.transientAfter=Math.max(0,...t.records.map(e=>e.at))}};function $c(e,t){if(Object.is(e,t))return!0;if(!e||!t||typeof e!=`object`||typeof t!=`object`)return!1;if(e instanceof Set||t instanceof Set)return e instanceof Set&&t instanceof Set&&e.size===t.size&&[...e].every(e=>t.has(e));if(Array.isArray(e)||Array.isArray(t))return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((e,n)=>$c(e,t[n]));if(Object.getPrototypeOf(e)!==Object.prototype||Object.getPrototypeOf(t)!==Object.prototype)return!1;let n=e,r=t,i=Object.keys(n);return i.length===Object.keys(r).length&&i.every(e=>Object.prototype.hasOwnProperty.call(r,e)&&$c(n[e],r[e]))}function el(e,t){return $c(e,t)?e:t}function tl(e){let t=e.engine,{rapier:n,elapsedSeconds:r,...i}=t.physics??{};return Jn({engine:{...t,physics:i},feedback:e.feedback,aim:e.aim})}function nl(e,t){let n=t.boardHalfWidth-t.coinRadius-t.upperRailHalfThickness*2;return![e.x,e.y,e.z,n].every(Number.isFinite)||n<=0||Math.abs(e.x)>t.boardHalfWidth||e.z<t.upperBackZ||e.z>t.lowerFrontZ?null:Math.max(-1,Math.min(1,e.x/n))}function rl(e,t){let n=t.rearWall;if(!n||![e.x,e.y,e.z].every(Number.isFinite))return!1;let r=1e-6;return Math.abs(e.x)<=t.boardHalfWidth+r&&Math.abs(e.y-n.centerY)<=n.halfHeight+r&&Math.abs(e.z-n.centerZ)<=n.halfDepth+r}function il(e,t){let n=null,r=e=>Number.isFinite(e.clientX)&&Number.isFinite(e.clientY),i=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,a=()=>{let e=n!==null;n=null,t.onPreview(null),e&&t.onBusyChange(!1)},o=r=>{if(!n||(Math.hypot(r.clientX-n.x,r.clientY-n.y)>e&&(n.dragged=!0),!n.dragged))return;let i=r.clientX-n.lastX,a=r.clientY-n.lastY;n.lastX=r.clientX,n.lastY=r.clientY,t.onPreview(null),(i||a)&&t.onOrbit(i,a)};return{pointerId:()=>n?.id??null,dragging:()=>n?.dragged??!1,cancel:a,begin(e,o){return n?(n.id!==e.pointerId&&a(),!1):t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==1||!r(e)||!i(o)?!1:(n={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,dragged:!1},t.onBusyChange(!0),t.onPreview(o),!0)},move(e,s){if(t.isDisabled()){a();return}if(!n){e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0&&t.onPreview(i(s)?s:null);return}if(n.id===e.pointerId){if(!e.isPrimary||e.buttons!==1||!r(e)){a();return}o(e),n.dragged||t.onPreview(i(s)?s:null)}},end(e,s){if(!n||n.id!==e.pointerId)return;if(t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==0||!r(e)){a();return}o(e);let c=!n.dragged&&i(s);a(),c&&s!==null&&!t.isDisabled()&&t.onTap(s)},leave(){n||t.onPreview(null)}}}function al(e){let t=null,n=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,r=()=>{t!==null&&(t=null,e.onStop())};return{pointerId:()=>t,cancel:r,begin(i,a){return t===null?e.isDisabled()||!i.isPrimary||i.button!==0||i.buttons!==1||!n(a)?!1:(t=i.pointerId,e.onStart(a),!0):(t!==i.pointerId&&r(),!1)},move(i,a){if(t===i.pointerId){if(e.isDisabled()||i.buttons!==1||!n(a)){r();return}e.onAim(a)}},end(e){t===e.pointerId&&r()}}}function ol(e,t,n,r){if(![e.yaw,e.pitch,t,n,r].every(Number.isFinite)||r<=0)return{yaw:e.yaw,pitch:e.pitch};let i=s.cameraOrbit,a=Math.max(r,i.minDragExtent),o=(e,t,n)=>Math.max(t,Math.min(n,e));return{yaw:o(e.yaw-t/a*i.yawSensitivity,-i.yawLimit,i.yawLimit),pitch:Math.tan(o(Math.atan(e.pitch)-n/a*i.elevationSensitivity,i.minElevation,i.maxElevation))}}var sl=new M;function cl(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;sl.copy(t),sl[r]=0,sl.normalize();let l=.5*o/(o+s),u=1-sl.angleTo(e)/c;return Math.sign(sl[n])===1?u*l:s/(o+s)+l+l*(1-u)}var ll=class e extends Je{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new M,c=new M,l=new M(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new M,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=cl(m,c,`z`,`y`,i,n),f[a+1]=1-cl(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-cl(m,c,`z`,`y`,i,n),f[a+1]=1-cl(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-cl(m,c,`x`,`z`,i,e),f[a+1]=cl(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-cl(m,c,`x`,`z`,i,e),f[a+1]=1-cl(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-cl(m,c,`x`,`y`,i,e),f[a+1]=1-cl(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=cl(m,c,`x`,`y`,i,e),f[a+1]=1-cl(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function ul(e,t,n){let r=s.premium,i=r.geometry,a=s.treasuryScene,o=a.geometry,c=[],l=[],u=[],d=!1,f,m,h=[],g,_=()=>{d||(d=!0,c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),u.forEach(e=>e.dispose()),h.forEach(e=>e.dispose()),g?.dispose(),f?.dispose(),e.environment=null,m?.dispose())};try{f=new Wi(t);let v=new Jt;v.background=new $t(r.studio.background),g=new Ot({color:new $t(r.colors.light).multiplyScalar(r.studio.panelIntensity),side:2});for(let e of r.studio.panels){let t=new Je(e.size[0],e.size[1],e.size[2]);h.push(t);let n=new U(t,g);n.position.fromArray(e.position),n.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),v.add(n)}m=f.fromScene(v,r.lighting.environmentBlur),e.environment=m.texture,e.environmentIntensity=r.materials.envIntensity,h.splice(0).forEach(e=>e.dispose()),g.dispose(),g=void 0,f.dispose(),f=void 0;let b=e=>{let n=new L().load(`./assets/${e}`,e=>{d&&e.dispose()});return n.colorSpace=_e,n.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),u.push(n),n},S=document.createElement(`canvas`);S.width=S.height=r.texture.brushSize;let w=S.getContext(`2d`);if(w){w.fillStyle=r.colors.brushBase,w.fillRect(0,0,S.width,S.height),w.strokeStyle=r.colors.brushLine,w.globalAlpha=r.texture.brushOpacity;for(let e=0;e<r.texture.brushLines;e++){let t=e*73%r.texture.brushLines/r.texture.brushLines*S.height;w.beginPath(),w.moveTo(0,t),w.lineTo(S.width,t),w.stroke()}}let T=new ct(S);T.colorSpace=_e,T.wrapS=T.wrapT=lt,T.repeat.set(r.texture.brushRepeat,r.texture.brushRepeat),u.push(T);let E=(e,t,n,i=r.materials.metalness)=>{let a=new Ze({color:e,roughness:t,metalness:i,...n?{map:n}:{}});return l.push(a),a},D=E(r.colors.champagne,r.materials.goldRoughness),k=E(r.colors.edge,r.materials.goldRoughness),A=E(r.colors.steel,r.materials.steelRoughness,T),j=E(r.colors.gunmetal,r.materials.darkRoughness,void 0,r.materials.darkMetalness),te=E(r.colors.black,r.materials.darkRoughness,void 0,r.materials.darkMetalness),N=new Ut({map:b(`premium-enamel-v1.webp`),color:r.colors.white,metalness:r.materials.enamelMetalness,roughness:r.materials.enamelRoughness,clearcoat:r.materials.clearcoat}),ne=new Ut({color:r.colors.glass,transparent:!0,opacity:r.materials.glassOpacity,roughness:r.materials.glassRoughness,metalness:0,depthWrite:!1,side:2});l.push(N,ne);let P=zs(`steel`);u.push(...Object.values(P)),A.bumpMap=P.height,A.bumpScale=a.surface.steelBump,A.roughnessMap=P.roughness,A.roughness=a.materials.etchedRoughness,A.metalness=a.materials.etchedMetalness,A.envMap=m.texture,A.envMapIntensity=a.materials.etchedEnvironmentIntensity;let re=new L().load(`./assets/${a.assets.etchedSteel}`,e=>{if(d){e.dispose();return}A.map=e,A.needsUpdate=!0},void 0,()=>{});re.colorSpace=_e,re.wrapS=re.wrapT=lt,re.repeat.set(o.steelRepeat,o.steelRepeat),re.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),u.push(re);let ie=E(a.colors.ivory,a.materials.ivoryRoughness,void 0,a.materials.shieldMetalness),ae=E(a.colors.cross,a.materials.crossRoughness,void 0,a.materials.shieldMetalness),oe=E(a.colors.recess,a.materials.recessRoughness,void 0,r.materials.darkMetalness),se=E(a.colors.warmTrim,a.materials.trimRoughness),I=(t,n,r,a,o,s,l,u=!0)=>{let d=u?new ll(t,n,r,i.bevelSegments,Math.min(i.bevel,t/2,n/2,r/2)):new Je(t,n,r);c.push(d);let f=new U(d,l);return f.position.set(a,o,s),f.castShadow=l!==ne,f.receiveShadow=!0,e.add(f),f},ce=(t,n,r,a,o,s,l=Math.PI*2)=>{let u=new ue(t,n,i.boltSegments,i.archSegments,l);c.push(u);let d=new U(u,s);return d.position.set(r,a,o),e.add(d),d},R=n.boardHalfWidth*2,le=n.lowerFrontZ-n.upperBackZ,z=(n.lowerFrontZ+n.upperBackZ)/2,de=n.upperBackZ-i.rearOffset,B=[],fe=n.hatches??[];for(let e of on(n.boardHalfWidth,n.lowerBackZ,n.lowerFrontZ,fe)){let t=I(e.halfWidth*2,n.lowerHalfThickness*2,e.halfDepth*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,A,!1);t.name=`physical-lower-bed`,B.push(t)}let pe=fe.map((e,t)=>{let r=I(e.halfSize*2,n.lowerHalfThickness*2,e.halfSize*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,A,!1);r.name=`physical-hatch-lid-${t}`,B.push(r);for(let t of[-1,1])I(i.stripeThickness,i.stripeThickness,e.halfSize*2,e.x+t*(e.halfSize+i.stripeThickness/2),n.lowerY-i.stripeThickness/2,e.z,se,!1).name=`hatch-inset-frame`,I(e.halfSize*2,i.stripeThickness,i.stripeThickness,e.x,n.lowerY-i.stripeThickness/2,e.z+t*(e.halfSize+i.stripeThickness/2),se,!1).name=`hatch-inset-frame`;return r}),me=e=>{e||pe.forEach((e,t)=>{let r=fe[t];e.position.set(r.x,n.lowerY-n.lowerHalfThickness,r.z),e.quaternion.identity()});for(let t of e??[]){let e=pe[t.index];e&&(e.position.set(t.position.x,t.position.y,t.position.z),e.quaternion.set(t.rotation.x,t.rotation.y,t.rotation.z,t.rotation.w))}},he=I(R,n.upperHalfThickness*2,n.upperFrontZ-n.upperBackZ,0,n.upperY-n.upperHalfThickness,(n.upperBackZ+n.upperFrontZ)/2,A,!1);he.name=`physical-upper-deck`,B.push(he);let ge=I(R,n.pusherHalfHeight*2,n.pusherHalfDepth*2,0,n.pusherCenterY??n.upperY+n.pusherHalfHeight,n.upperBackZ,A,!1);if(ge.name=`physical-pusher`,B.push(ge),n.rearWall){let e=I(R,n.rearWall.halfHeight*2,n.rearWall.halfDepth*2,0,n.rearWall.centerY,n.rearWall.centerZ,A,!1);e.name=`physical-rear-wall`,B.push(e)}for(let e of on(n.boardHalfWidth+o.frameWidth,n.upperBackZ,n.lowerFrontZ+i.trayDepth,fe))I(e.halfWidth*2,i.bodyDepth,e.halfDepth*2,e.x,n.lowerY-i.bodyDepth,e.z,te,!1).name=`treasury-chassis`;let ve=I(R,i.rim,i.trayDepth,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth/2,A);ve.name=`collection-tray`,I(R+o.frameWidth*2,i.rim*2,i.rim,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth,j);for(let e of[-1,1])I(R+o.frameWidth*2,o.frameTrim,o.frameTrim,0,n.lowerY-i.trayDrop+e*i.rim,n.lowerFrontZ+i.trayDepth+i.rim/2,k);I(R,i.stripeThickness,i.stripeThickness,0,n.lowerY-i.stripeThickness/2,n.lowerFrontZ+i.stripeThickness/2,k,!1),I(R+o.frameWidth*2,o.rearFasciaHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight/2,de,j).name=`treasury-low-rear-fascia`,I(R,o.rearFasciaHeight-o.frameInset*2,o.frameTrim,0,n.lowerY+o.rearFasciaHeight/2,de+o.rearFasciaDepth/2,A),I(R+o.frameWidth*2,o.rearCopingHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight,de,se);let ye=new ht(o.bossRadius,o.bossSegments,o.bossSegments);c.push(ye);let be=(t,n,r)=>{let i=new U(ye,k);return i.position.set(t,n,r),i.scale.z=o.bossHeight/o.bossRadius,e.add(i),i},xe=new x,Se=o.shieldWidth,Ce=o.shieldHeight;xe.moveTo(-Se/2,Ce/2),xe.lineTo(Se/2,Ce/2),xe.lineTo(Se/2,Ce*o.shieldShoulderY),xe.bezierCurveTo(Se/2,-Ce*o.shieldShoulderControl,Se*o.shieldTipControl,-Ce*o.shieldTipControl,0,-Ce/2),xe.bezierCurveTo(-Se*o.shieldTipControl,-Ce*o.shieldTipControl,-Se/2,-Ce*o.shieldShoulderControl,-Se/2,Ce*o.shieldShoulderY),xe.closePath();let we=new C(xe,{depth:o.shieldDepth,bevelEnabled:!0,bevelSegments:i.bevelSegments,steps:1,bevelSize:o.shieldBevel,bevelThickness:o.shieldBevel,curveSegments:o.ornamentSegments});c.push(we);let Te=new ht(1,o.ornamentSegments,o.ornamentSegments);c.push(Te);for(let t of[-1,1]){let r=o.frameWidth-i.glassOffset,s=t*(n.boardHalfWidth+i.glassOffset+r/2),u=le+i.trayDepth,d=z+i.trayDepth/2;I(r,o.frameHeight,u,s,n.lowerY-o.frameHeight/2,d,j).name=`treasury-side-chassis-${t}`,I(r-o.frameInset*2,o.frameTrim,u-o.frameInset*2,s,n.lowerY,d,N).name=`treasury-side-enamel-${t}`;for(let e of[-1,1])I(o.frameTrim,o.frameTrim,u,s+e*(r-o.frameTrim)/2,n.lowerY+o.frameTrim/2,d,se).name=`treasury-side-trim-${t}-${e}`;let f=t*(n.boardHalfWidth+o.frameWidth-o.columnWidth/2),p=n.upperBackZ+le*o.columnForwardFraction,m=p+o.columnDepth/2,h=a.sideGutter.columnClearance,g=o.columnHeight-h;I(r-o.frameTrim*2,h,o.columnDepth,s,n.lowerY+h/2,p,j).name=`treasury-column-pedestal-${t}`,I(o.columnWidth,g,o.columnDepth,f,n.lowerY+h+g/2,p,j).name=`treasury-column-${t}`,I(o.columnChannelWidth,g-o.columnCap*2,o.columnChannelDepth,f,n.lowerY+h+g/2,m,oe);for(let e of[-1,1])I(o.frameTrim,g,o.columnChannelDepth,f+e*(o.columnWidth-o.frameTrim)/2,n.lowerY+h+g/2,m,se),I(o.columnWidth+o.frameTrim,o.columnCap,o.columnDepth+o.frameTrim,f,n.lowerY+(e<0?h+o.columnCap/2:o.columnHeight),p,D);let _=m+o.columnChannelDepth,v=new U(we,k);v.position.set(f,n.lowerY+o.shieldY,_),v.name=`treasury-shield-outline-${t}`,v.castShadow=!0,e.add(v);let b=new U(we,ie);b.scale.set(o.shieldFaceScale,o.shieldFaceScale,1),b.position.set(f,n.lowerY+o.shieldY,_+o.shieldFaceLift),b.name=`treasury-shield-ivory-${t}`,b.castShadow=!0,e.add(b);let S=_+o.shieldFaceLift+o.shieldDepth+o.crossRelief/2;I(o.crossStroke,o.crossHeight,o.crossRelief,f,n.lowerY+o.shieldY,S,ae).name=`treasury-cross-upright-${t}`,I(o.crossWidth,o.crossStroke,o.crossRelief,f,n.lowerY+o.shieldY+o.crossArmY,S,ae).name=`treasury-cross-arm-${t}`;for(let t of[-1,1]){for(let r=0;r<o.leafCount;r++){let i=new U(Te,se);i.scale.set(o.leafWidth,o.leafLength,o.leafDepth),i.rotation.z=-t*o.laurelAngle,i.position.set(f+t*o.laurelWidth,n.lowerY+o.laurelY+r*o.laurelStep,_),i.name=`treasury-laurel-relief`,e.add(i)}let r=ce(o.scrollRadius,o.scrollTube,f+t*o.scrollRadius,n.lowerY+o.columnHeight+o.scrollHeight,m,D,o.scrollAngle);r.rotation.z=t*Math.PI/2,r.name=`treasury-scroll-finial`}be(f,n.lowerY+o.columnHeight,m+o.columnChannelDepth),be(f,n.lowerY+h+o.columnCap/2,m+o.columnChannelDepth);let C=new x;C.moveTo(n.upperBackZ,0),C.lineTo(n.lowerFrontZ,0),C.lineTo(n.lowerFrontZ,o.guardFrontHeight),C.lineTo(n.upperBackZ+o.guardInset,o.guardHeight+o.guardRearLift),C.lineTo(n.upperBackZ,o.guardHeight),C.closePath();let w=new y(C);c.push(w);let T=new U(w,ne);T.rotation.y=-Math.PI/2,T.position.set(t*(n.boardHalfWidth+i.glassOffset),n.lowerY,0),T.name=`treasury-glass-guard-${t}`,e.add(T);let E=new kt().setFromPoints([new M(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardFrontHeight,n.lowerFrontZ),new M(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight+o.guardRearLift,n.upperBackZ+o.guardInset),new M(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight,n.upperBackZ)]);c.push(E);let O=new H({color:a.colors.edgeLight});l.push(O);let P=new ee(E,O);P.name=`treasury-glass-edge`,P.raycast=()=>{},e.add(P),I(n.upperRailHalfThickness*2,n.upperRailHalfHeight*2,n.upperFrontZ-n.upperBackZ,t*(n.boardHalfWidth-n.upperRailHalfThickness),n.upperY+n.upperRailHalfHeight,(n.upperBackZ+n.upperFrontZ)/2,A,!1).name=`physical-upper-rail-${t}`,I(i.glassOffset,o.frameTrim,n.lowerFrontZ-n.lowerBackZ,t*(n.boardHalfWidth+i.glassOffset/2),n.lowerY-a.sideGutter.depth-o.frameTrim/2,(n.lowerBackZ+n.lowerFrontZ)/2,te,!1).name=`treasury-side-loss-channel-${t}`;for(let e=0;e<o.sideBoltCount;e++){let t=be(s,n.lowerY+o.frameTrim,n.upperBackZ+o.boltInset+e*(u-o.boltInset*2)/(o.sideBoltCount-1));t.rotation.x=-Math.PI/2}}let Ee=new ht(i.boltRadius,i.boltSegments,i.boltSegments);c.push(Ee);for(let t=0;t<i.boltCount;t++){let r=new U(Ee,k);r.position.set(-n.boardHalfWidth+R*t/(i.boltCount-1),n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth+i.rim/2),e.add(r)}let De=new qt(n.coinRadius,n.coinRadius,n.coinHalfHeight*2,i.segments,i.coinHeightSegments),Oe=De.getAttribute(`position`);for(let e=0;e<Oe.count;e++)Math.abs(Oe.getY(e))>n.coinHalfHeight*i.coinBevelThreshold&&(Oe.setX(e,Oe.getX(e)*i.coinBevelRadius),Oe.setZ(e,Oe.getZ(e)*i.coinBevelRadius));De.computeVertexNormals(),c.push(De);let ke=zs(`coin`);u.push(...Object.values(ke));for(let e of Object.values(ke))e.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy());let Ae=E(a.surface.coinColor,a.surface.coinRoughness,ke.albedo);Ae.bumpMap=ke.height,Ae.bumpScale=a.surface.coinBump,Ae.roughnessMap=ke.roughness,Ae.envMap=m.texture,Ae.envMapIntensity=a.surface.coinEnvironmentIntensity;let je=b(`coin-edge.svg`);je.wrapS=lt,je.repeat.x=r.texture.coinEdgeRepeat;let Me=E(r.colors.coinSide,r.materials.coinRoughness,je);Me.roughness=a.materials.coinSideRoughness;let Ne=new V(De,[Me,Ae,Ae],n.capacity);Ne.count=0,Ne.castShadow=!0,Ne.receiveShadow=!0,Ne.frustumCulled=!1,Ne.instanceMatrix.setUsage(F),e.add(Ne),B.push(Ne);let Pe=new Ot({color:s.interaction.aimColor,transparent:!0,opacity:r.effects.aimOpacity,depthWrite:!1});l.push(Pe);let Fe=new p;Fe.name=`rear-drop-indicator`,e.add(Fe);let Ie=n.coinRadius*r.effects.aimRadiusScale,Le=ce(Ie,r.effects.aimTube,0,0,0,Pe);Le.rotation.x=-Math.PI/2,Fe.add(Le);for(let e of[!1,!0]){let t=I(e?Ie*2:r.effects.aimTube,r.effects.aimTube,e?r.effects.aimTube:Ie*2,0,0,0,Pe,!1);t.castShadow=!1,t.receiveShadow=!1,Fe.add(t)}e.add(new O(r.colors.light,r.colors.gunmetal,r.lighting.ambient));let Re=new mt(r.colors.light,r.lighting.key);Re.position.fromArray(r.lighting.keyPosition),Re.shadow.mapSize.set(s.scene.shadowMapSize,s.scene.shadowMapSize),Re.shadow.camera.left=Re.shadow.camera.bottom=-r.effects.shadowExtent,Re.shadow.camera.right=Re.shadow.camera.top=r.effects.shadowExtent,Re.shadow.bias=r.effects.shadowBias,Re.shadow.normalBias=r.effects.shadowNormalBias,e.add(Re);let ze=new mt(r.colors.fill,r.lighting.fill);ze.position.fromArray(r.lighting.fillPosition),e.add(ze);let Be=new mt(r.colors.white,r.lighting.rim);return Be.position.fromArray(r.lighting.rimPosition),e.add(Be),{coins:Ne,pusher:ge,aim:Fe,key:Re,hitTargets:B,updateHatches:me,dispose:_}}catch(e){throw _(),e}}function dl(e,t){return Math.abs(e.yaw-t.yaw)>1e-6||Math.abs(e.pitch-t.pitch)>1e-6}function fl(e,t){let n=s.cameraViews;return e===`overhead`?{yaw:0,pitch:n.overheadPitch}:e===`left`||e===`right`?{yaw:e===`left`?-n.sideYaw:n.sideYaw,pitch:n.sidePitch}:{yaw:0,pitch:t<s.premium.camera.portraitAspect?s.premium.camera.portraitPitch:s.premium.camera.pitch}}function pl(e,t=!1){let n=s.premium,r=s.treasuryScene.geometry,i=e.boardHalfWidth+(t?n.camera.portraitFrameSideExtra:n.camera.frameSideExtra),a=[-i,i].flatMap(t=>[new M(t,e.lowerY,e.upperBackZ),new M(t,e.lowerY,e.lowerFrontZ),new M(t,e.lowerY-n.geometry.trayDrop,e.lowerFrontZ+n.geometry.trayDepth+n.geometry.rim)]);if(t)for(let t of[-i,i])a.push(new M(t,e.lowerY-n.geometry.bodyDepth-n.geometry.bodyDepth/2,e.lowerFrontZ+n.geometry.trayDepth));let o=e.upperBackZ+(e.lowerFrontZ-e.upperBackZ)*r.columnForwardFraction,c=e.lowerY+r.columnHeight+r.scrollHeight+r.scrollRadius+r.scrollTube;for(let e of[-i,i])a.push(new M(e,c,o+r.columnDepth/2));for(let t of[-e.boardHalfWidth,e.boardHalfWidth]){for(let n of[e.upperBackZ,e.upperFrontZ])a.push(new M(t,e.upperY+e.upperRailHalfHeight*2,n));e.rearWall&&a.push(new M(t,e.rearWall.centerY+e.rearWall.halfHeight,e.rearWall.centerZ))}if(e.towerEnvelopes?.length)for(let t of e.towerEnvelopes)for(let e of[t.x-t.radius,t.x+t.radius])for(let n of[t.z-t.radius,t.z+t.radius])a.push(new M(e,t.topY,n));else for(let t of[-e.boardHalfWidth,e.boardHalfWidth])for(let r of[e.lowerBackZ,e.lowerFrontZ])a.push(new M(t,e.towerTopY??e.lowerY+n.camera.frameTop,r));return a}function ml(e,t,n,r=fl(`front`,n),i=1,a=[]){let o=s.premium;e.aspect=n;let{pitch:c,yaw:l}=r,u=new M(Math.sin(l),c,Math.cos(l)).normalize(),d=new M(Math.cos(l),0,-Math.sin(l)),f=new M().crossVectors(u,d).normalize(),p=(t.lowerFrontZ+t.upperBackZ)/2,m=new M(0,t.lowerY+o.camera.targetY,p+o.camera.targetZBias),h=[...pl(t,n<o.camera.portraitAspect),...a],g=h.map(e=>e.clone().sub(m).dot(f));m.addScaledVector(f,(Math.min(...g)+Math.max(...g))/2);let _=h.map(e=>e.clone().sub(m).dot(d));m.addScaledVector(d,(Math.min(..._)+Math.max(..._))/2);let v=Math.tan(Tt.degToRad(e.fov/2)),y=v*n,b=e.near;for(let t of h){let n=t.clone().sub(m),r=n.dot(u);b=Math.max(b,Math.abs(n.dot(d))/y+r,Math.abs(n.dot(f))/v+r,e.near+r)}let x=b*o.camera.margin*i;if(n<o.camera.portraitAspect){let e=s.treasuryScene.camera,t=x*v*e.portraitCenterOffset;for(let n of h){let r=n.clone().sub(m),i=x-r.dot(u);t=Math.min(t,r.dot(f)+(1-e.portraitBottomPadding)*i*v)}m.addScaledVector(f,Math.max(0,t))}e.position.copy(m).addScaledVector(u,x),e.lookAt(m),e.updateProjectionMatrix(),e.updateMatrixWorld()}function hl(e){let t=s.interaction,n=s.premium,r=e.boardHalfWidth-e.coinRadius-e.upperRailHalfThickness*2,i=e.coinRadius*n.effects.aimRadiusScale,a=(e.pusherCenterY??e.upperY+e.pusherHalfHeight)+e.pusherHalfHeight,o=Math.max(e.upperY,a)+n.effects.aimSurfaceOffset,c=new p;c.name=`rear-entry-guides`,c.position.set(0,o,e.dropZ);let l=[],u=[],d=(e,t)=>{let n=new Ot({color:e,transparent:!0,opacity:t,depthWrite:!1});return u.push(n),n},f=(e,t,n)=>{let r=new ue(e,t,s.scene.rivetSegments,s.scene.ringSegments);l.push(r);let i=new U(r,n);return i.rotation.x=-Math.PI/2,i},m=f(i*t.aimOutlineScale,t.aimOutlineTube,d(t.aimOutlineColor,n.effects.aimOpacity));m.name=`selected-aim-outline`,c.add(m);let h=f(i,n.effects.aimTube,d(t.aimColor,t.previewOpacity));h.name=`aim-preview-ring`,h.visible=!1,c.add(h);let g=new kt().setFromPoints([new M(-r,0,0),new M(r,0,0),new M(-r,0,-i),new M(-r,0,i),new M(r,0,-i),new M(r,0,i)]);l.push(g);let _=new H({color:t.aimColor,transparent:!0,opacity:t.previewOpacity,depthWrite:!1});u.push(_);let v=new ke(g,_);v.name=`rear-entry-range`,c.add(v);let y=d(t.acceptedColor,n.effects.aimOpacity),b=f(i*t.aimOutlineScale,t.aimOutlineTube,y);b.name=`accepted-drop-ring`,b.visible=!1,c.add(b);let x=new kt().setFromPoints([new M(-i,0,-i),new M(i,0,i),new M(-i,0,i),new M(i,0,-i)]);l.push(x);let S=new H({color:t.blockedColor,transparent:!0,opacity:n.effects.aimOpacity,depthWrite:!1});u.push(S);let C=new ke(x,S);C.name=`blocked-drop-cross`,C.visible=!1,c.add(C);let w,T=-1/0,E=!1,D=Kr();return{root:c,surfaceY:o,update(e,t,i,a,o,s){if(E)return;c.visible=!a,m.position.x=e*r,h.visible=!a&&t!==null,t!==null&&(h.position.x=t*r),i?.sequence!==w&&(w=i?.sequence,T=o),a&&(T=-1/0);let l=o-T,u=D.sample(l,s),d=!a&&u.active;b.visible=d&&i?.kind===`accepted`,C.visible=d&&i?.kind===`blocked`,i&&i.kind!==`idle`&&(b.position.x=C.position.x=i.aim*r),b.scale.setScalar(u.scale),y.opacity=n.effects.aimOpacity*u.opacity},dispose(){E||(E=!0,D.dispose(),c.removeFromParent(),l.forEach(e=>e.dispose()),u.forEach(e=>e.dispose()))}}}function gl(e){let t={...e},n={...e},r,i=0,a=!1,o=()=>{r?.kill(),r=void 0,Object.assign(t,n)};return{start(e,c,l){if(!a){if(r?.kill(),n={...e},i=c,l){o();return}r=je.timeline({paused:!0}).to(t,{...n,duration:s.cameraViews.transitionSeconds,ease:s.motion.ease})}},sample(e,n){if(r){let t=Math.max(0,(e-i)/1e3);n||t>=s.cameraViews.transitionSeconds?o():r.seek(t,!0)}return t},moving:()=>!!r,finish:o,dispose(){a||(a=!0,o())}}}function _l(e,t,n,r,i){if(![e,n,r,i].every(Number.isFinite)||n<=0)return null;t.updateMatrixWorld();let a=e=>new Me(e,r,i,1).applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix),o=a(-n),s=a(n);if(o.w<=0||s.w<=0)return null;let c=o.x/o.w,l=s.x/s.w;if(![c,l].every(Number.isFinite)||l<=c)return null;let u=Tt.clamp(e,c,l),d=u*(s.w-o.w)-(s.x-o.x);if(!Number.isFinite(d)||Math.abs(d)<2**-52)return null;let f=(o.x-u*o.w)/d;return Number.isFinite(f)?Tt.clamp(f*2-1,-1,1):null}function vl(){let e={approach:0,exit:0},t=je.timeline({paused:!0,data:`dragon-board-bonus`});return t.to(e,{approach:1,duration:hn.impactSeconds,ease:`power2.in`},0).to(e,{exit:1,duration:hn.durationSeconds-hn.impactSeconds,ease:`power1.out`},hn.impactSeconds),{sample(n,r=!1){let i=Math.max(0,Math.min(hn.durationSeconds,n.elapsed));t.totalTime(i,!0);let a=n.direction===`left`?1:n.direction===`right`?-1:0,o=new M(a,0,1).normalize(),s=r?-hn.reducedDistance:-hn.approachDistance*(1-e.approach)+hn.exitDistance*e.exit;return{x:n.target.x+o.x*s,y:n.target.y+(r?hn.reducedHeight:hn.approachHeight*(1-e.approach)+hn.exitHeight*e.exit),z:n.target.z+o.z*s,yaw:Math.atan2(-o.x,-o.z),bank:r?0:-a*hn.bank*(1-e.exit),scale:hn.modelScale,skeletonTime:r?0:i,opacity:r?1:Math.min(1,i/hn.fadeInSeconds,(hn.durationSeconds-i)/hn.fadeOutSeconds)}},dispose(){t.kill()}}}function yl(){let e=zc(),t=vl(),n=new p;n.name=`live-board-dragon-bonus`,n.add(e.root),n.visible=!1;let r=new Re(hn.impactRadius*.8,hn.impactRadius,40),i=new Ot({color:hn.impactColor,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1}),a=new U(r,i);n.add(a);let o=!1,s=!1,c=e.ready.then(()=>{o=!0});return c.catch(()=>{}),{root:n,ready:c,draw(r,c=!1){if(s||(n.visible=o&&!!r,!r||!o))return;e.drawPose(t.sample(r,c));let l=r.elapsed-hn.impactSeconds,u=l/hn.impactLife;a.visible=r.phase===`hit`&&l>=0&&u<1,a.position.copy(r.target),a.scale.setScalar(c?1:1+hn.impactExpansion*Math.max(0,u)),a.rotation.y=r.direction===`left`?Math.PI/4:r.direction===`right`?-Math.PI/4:0,i.opacity=hn.impactOpacity*(1-Math.max(0,u))},dispose(){s||(s=!0,t.dispose(),e.dispose(),r.dispose(),i.dispose(),n.clear())}}}var bl=s.cabinetHousing,Z=bl.geometry,xl=s.premium.colors;function Sl(e){let t=new p;t.name=`complete-cabinet`;let n=new p;n.name=`cabinet-exterior-only`,t.add(n);let r=new Set,i=new Set,a=new Set,o=new Set,c=e=>{o.has(e)||(o.add(e),e.dispose())},l=[],u=!1,d=e=>(r.add(e),e),f=e=>(i.add(e),e),m=f(new Ze({color:xl.gunmetal,metalness:bl.materials.bodyMetalness,roughness:bl.materials.bodyRoughness})),h=f(new Ze({color:xl.black,metalness:bl.materials.bodyMetalness,roughness:bl.materials.bodyRoughness})),g=f(new Ze({color:xl.champagne,metalness:s.premium.materials.metalness,roughness:bl.materials.brassRoughness})),_=f(new Ze({color:xl.edge,metalness:s.premium.materials.metalness,roughness:bl.materials.brassRoughness})),v=f(new Ut({color:xl.enamel,metalness:bl.materials.enamelMetalness,roughness:bl.materials.enamelRoughness,clearcoat:s.premium.materials.clearcoat})),y=f(new Ze({color:xl.light,metalness:bl.materials.enamelMetalness,roughness:bl.materials.enamelRoughness})),b=f(new Ze({color:bl.materials.bannerColor,roughness:bl.materials.bannerRoughness,metalness:bl.materials.bannerMetalness,emissive:bl.materials.bannerColor,emissiveIntensity:bl.materials.bannerEmissiveIntensity})),S=f(new Ze({color:xl.light,emissive:xl.edge,emissiveIntensity:bl.materials.lightIntensity,toneMapped:!1})),w=f(new Ut({color:xl.glass,transparent:!0,opacity:bl.materials.glassOpacity,roughness:bl.materials.glassRoughness,side:2,depthWrite:!1})),T=d(new Je(1,1,1)),E=d(new ht(Z.rivetRadius,Z.curveSegments/2,Z.curveSegments/2)),D=(e,n,r,i=t,a=!0)=>{let o=new U(n,r);return o.name=e,o.castShadow=r!==w&&r!==S,o.receiveShadow=!0,i.add(o),a?l.push(o):o.raycast=()=>{},o},O=(e,n,r,i,a,o,s,c,l=t)=>{let u=D(e,T,c,l,c!==w);return u.scale.set(n,r,i),u.position.set(a,o,s),u},k=(e,t=Z.shieldDepth)=>d(new C(e,{depth:t,bevelEnabled:!0,bevelSize:Z.bevel,bevelThickness:Z.bevel,bevelSegments:Z.bevelSegments,curveSegments:Z.curveSegments,steps:1})),A=(e,t,n)=>{let r=new x;return r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(e/2,t),r.bezierCurveTo(e/3,t+n*.6,e/6,t+n,0,t+n),r.bezierCurveTo(-e/6,t+n,-e/3,t+n*.6,-e/2,t),r.closePath(),r},j=new x;j.moveTo(-.5,.45),j.lineTo(0,.58),j.lineTo(.5,.45),j.quadraticCurveTo(.5,-.25,0,-.58),j.quadraticCurveTo(-.5,-.25,-.5,.45);let ee=k(j),te=(e,n,r,i,a,o=t)=>{let s=D(`${e}-rim`,ee,g,o);s.position.set(n,r,i),s.scale.set(a,a,1);let c=D(`${e}-ivory`,ee,y,o);c.position.set(n,r,i+Z.shieldDepth),c.scale.set(a*.86,a*.86,1),O(`${e}-cross-vertical`,a*.15,a*.72,Z.shieldDepth,n,r,i+Z.shieldDepth*3,v,o),O(`${e}-cross-horizontal`,a*.57,a*.15,Z.shieldDepth,n,r+a*.1,i+Z.shieldDepth*3,v,o)},N=e.boardHalfWidth+Z.sideClearance,ne=e.upperBackZ-Z.backSetback,P=e.lowerFrontZ+Z.frontExtension,re=P-ne,ie=Z.baseTopY-Z.floorY,ae=(Z.baseTopY+Z.floorY)/2;O(`cabinet-plinth`,N*2,ie,re,0,ae,(P+ne)/2,m),O(`cabinet-base-enamel`,N*2-Z.postWidth*2,ie-Z.footHeight*2,Z.panelThickness,0,ae,P+Z.panelThickness/2,v);for(let e of[Z.baseTopY,Z.floorY+Z.footHeight])O(`cabinet-plinth-gold-band`,N*2+Z.trim*2,Z.trim,re+Z.trim*2,0,e,(ne+P)/2,g);for(let e of[-1,1]){for(let t of[ne+Z.postDepth,P-Z.postDepth])O(`cabinet-leveling-foot`,Z.postWidth*2,Z.footHeight,Z.postDepth*2,e*(N-Z.postWidth),Z.floorY-Z.footHeight/2,t,h);O(`cabinet-base-corner`,Z.postWidth,ie,Z.postDepth,e*(N-Z.postWidth/2),ae,P,g),D(`cabinet-arched-service-inset`,k(A(Z.bannerWidth*1.5,ie*.55,Z.archRise/2)),h).position.set(e*N*.65,Z.floorY+Z.footHeight*2,P+Z.panelThickness);for(let t=0;t<Z.ventCount;t++)O(`cabinet-service-vent`,Z.ventWidth,Z.trim/3,Z.trim,e*N*.65,Z.floorY+Z.footHeight*3+t*Z.ventSpacing,P+Z.panelThickness*2,g);for(let t of[Z.floorY+Z.footHeight*2,Z.baseTopY-Z.footHeight])D(`cabinet-service-rivet`,E,_).position.set(e*N*.9,t,P+Z.postDepth/2)}let F=D(`cabinet-front-medallion`,d(new qt(Z.medallionRadius,Z.medallionRadius,Z.panelThickness,Z.curveSegments*2)),g);F.rotation.x=Math.PI/2,F.position.set(0,ae,P+Z.panelThickness),te(`cabinet-front-shield`,0,ae,P+Z.panelThickness*2,Z.medallionRadius*1.4),O(`cabinet-control-shelf`,N*2+Z.postWidth,Z.ledgeHeight,Z.ledgeDepth,0,Z.baseTopY+Z.ledgeHeight/2,P+Z.ledgeDepth/2,h,n),O(`cabinet-control-shelf-trim`,N*2+Z.postWidth,Z.trim,Z.ledgeDepth,0,Z.baseTopY+Z.ledgeHeight,P+Z.ledgeDepth/2,g,n);for(let t of[-1,1]){for(let e of[ne,P])O(`cabinet-glass-post`,Z.postWidth,Z.chamberTopY-Z.baseTopY,Z.postDepth,t*N,(Z.chamberTopY+Z.baseTopY)/2,e,m),O(`cabinet-post-inlay`,Z.trim*2,Z.chamberTopY-Z.baseTopY,Z.trim,t*N,(Z.chamberTopY+Z.baseTopY)/2,e+Z.postDepth/2,g),O(`cabinet-post-light`,Z.lightWidth,Z.chamberTopY,Z.trim/2,t*(N-Z.postWidth/2),Z.chamberTopY/2,e+Z.postDepth/2,S);O(`cabinet-side-glazing`,Z.trim/3,Z.chamberTopY-e.lowerY,re,t*N,(Z.chamberTopY+e.lowerY)/2,(ne+P)/2,w),O(`cabinet-side-canopy-rail`,Z.postWidth,Z.trim*3,re,t*N,Z.chamberTopY,(ne+P)/2,g,n)}O(`cabinet-front-glazing`,N*2,Z.chamberTopY,Z.trim/3,0,Z.chamberTopY/2,P,w,n),O(`cabinet-canopy`,N*2+Z.postWidth,Z.panelThickness,re+Z.postDepth,0,Z.chamberTopY,(ne+P)/2,h,n),O(`cabinet-rear-panel`,N*2,Z.chamberTopY-e.lowerY,Z.panelThickness,0,(Z.chamberTopY+e.lowerY)/2,ne,v),D(`cabinet-rear-seal`,d(new ue(Z.rearSealRadius,Z.trim,Z.curveSegments/2,Z.curveSegments*3)),g).position.set(0,Z.rearSealY,ne+Z.panelThickness),te(`cabinet-rear-shield`,0,Z.rearSealY,ne+Z.panelThickness,Z.rearSealRadius*1.25);let oe=new x;oe.moveTo(-Z.bannerWidth/2,Z.bannerHeight/2),oe.lineTo(Z.bannerWidth/2,Z.bannerHeight/2),oe.lineTo(Z.bannerWidth/2,-Z.bannerHeight/2+Z.bannerHeight*Z.bannerPointRatio),oe.lineTo(0,-Z.bannerHeight/2),oe.lineTo(-Z.bannerWidth/2,-Z.bannerHeight/2+Z.bannerHeight*Z.bannerPointRatio),oe.closePath();let se=k(oe,Z.trim/2);for(let e of[-1,1]){D(`cabinet-banner-border`,se,g).position.set(e*Z.bannerOffset,Z.bannerCenterY,ne+Z.panelThickness);let t=D(`cabinet-rear-banner`,se,b);t.scale.set(Z.bannerFaceScale,Z.bannerFaceScale,1),t.position.set(e*Z.bannerOffset,Z.bannerCenterY,ne+Z.panelThickness+Z.trim),te(`cabinet-banner-shield`,e*Z.bannerOffset,Z.bannerCenterY,ne+Z.panelThickness*2,Z.bannerWidth*Z.bannerShieldScale)}D(`cabinet-arched-marquee`,k(A(N*2+Z.postWidth,Z.marqueeHeight,Z.archRise),Z.marqueeDepth),g,n).position.set(0,Z.chamberTopY,P-Z.marqueeDepth),D(`cabinet-marquee-enamel`,k(A(N*2-Z.trim*2,Z.marqueeHeight-Z.trim*2,Z.archRise-Z.trim),Z.trim),v,n).position.set(0,Z.chamberTopY+Z.trim,P+Z.trim),te(`cabinet-crown`,0,Z.chamberTopY+Z.marqueeHeight+Z.archRise,P+Z.trim,Z.medallionRadius,n);let I=document.createElement(`canvas`);I.width=Z.labelWidth,I.height=Z.labelHeight;let ce=I.getContext(`2d`);if(ce){ce.textAlign=`center`,ce.textBaseline=`middle`,ce.fillStyle=xl.edge,ce.font=`700 ${bl.label.titleSize}px "Noto Serif TC", "Microsoft JhengHei", serif`,ce.fillText(`聖 城 幣 塔`,I.width/2,I.height*bl.label.titleY),ce.font=`${bl.label.subtitleSize}px Georgia, serif`,ce.fillText(`C R U S A D E R   C O I N   P U S H E R`,I.width/2,I.height*bl.label.subtitleY);let e=new ct(I);e.colorSpace=_e,a.add(e);let t=f(new Ze({map:e,transparent:!0,depthWrite:!1,emissive:xl.edge,emissiveMap:e,emissiveIntensity:bl.materials.labelIntensity,roughness:bl.materials.brassRoughness}));D(`cabinet-marquee-lettering`,d(new ve(N*1.5,Z.marqueeHeight)),t,n,!1).position.set(0,Z.chamberTopY+Z.marqueeHeight/2+Z.trim,P+Z.trim*3)}let R=new L,le=(e,t,n,r)=>{let i=t.color.clone();try{let o=R.load(`/crusader-coin-pusher-demo/${e.replace(/^\.\//,``)}`,e=>{if(u){c(e);return}t.color.set(xl.white),t.needsUpdate=!0},void 0,()=>{u||(t.map=null,t.color.copy(i),t.needsUpdate=!0)});a.add(o),o.colorSpace=_e,o.wrapS=o.wrapT=lt,o.repeat.set(n,r),t.map=o,t.needsUpdate=!0}catch{}};le(`./assets/premium-enamel-v1.webp`,v,2,2),le(`./assets/treasury-etched-steel-v1.webp`,m,2,1),t.updateMatrixWorld(!0);let z=new Bt().setFromObject(t),de=[z.min.x,z.max.x].flatMap(e=>[z.min.y,z.max.y].flatMap(t=>[z.min.z,z.max.z].map(n=>new M(e,t,n)))),B=e=>{n.visible=e};return B(!1),{root:t,fullBounds:de,setOverview:B,getOccluders:()=>l.filter(e=>e.parent!==n||n.visible),dispose(){u||(u=!0,t.removeFromParent(),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),a.forEach(c))}}}function Cl(e,t,n){if(n<t)return;let r=t*e.itemSize,i=(n+1)*e.itemSize;for(let t of e.updateRanges)r=Math.min(r,t.start),i=Math.max(i,t.start+t.count);e.clearUpdateRanges(),e.addUpdateRange(r,i-r),e.needsUpdate=!0}function wl(e,t,n){let r=Math.min(...e.map(e=>e.instanceMatrix.count)),i=new Float64Array(r),a=new Float64Array(r*7),o=new pt,s=new M,c=new S,l=new M(1,1,1),u=new $t,d=0;for(let t of e)t.instanceMatrix.setUsage(F);return{update(f){let p=0,m=r,h=-1,g=r,_=-1;for(let v of f){if(p>=r)break;if(!t(v))continue;let f=p++,y=f*7,b=v.position,x=v.rotation,S=f>=d||i[f]!==v.id;if(S||a[y]!==b.x||a[y+1]!==b.y||a[y+2]!==b.z||a[y+3]!==x.x||a[y+4]!==x.y||a[y+5]!==x.z||a[y+6]!==x.w){s.set(b.x,b.y,b.z),c.set(x.x,x.y,x.z,x.w),o.compose(s,c,l);for(let t of e)t.setMatrixAt(f,o);a[y]=b.x,a[y+1]=b.y,a[y+2]=b.z,a[y+3]=x.x,a[y+4]=x.y,a[y+5]=x.z,a[y+6]=x.w,m=Math.min(m,f),h=f}if(S&&n){let t=n(v.id);u.setRGB(t,t,t);for(let t of e)t.setColorAt(f,u);g=Math.min(g,f),_=f}i[f]=v.id}for(let t of e)t.count=p,Cl(t.instanceMatrix,m,h),t.instanceColor&&n&&Cl(t.instanceColor,g,_);d=p}}}function Tl(e){let t=s.boardFeedback,n=new p;n.name=`board-result-guides`;let r=new Set,i=e=>(r.add(e),e),a=(e,n=t.idleOpacity)=>i(new Ot({color:e,transparent:!0,opacity:n,depthWrite:!1})),o=a(t.frontColor),c=new U(i(new Je(e.boardHalfWidth*2,t.lineWidth,t.lineWidth)),o);c.name=`confirmed-front-collection-edge`,c.position.set(0,e.lowerY+t.lineLift,e.lowerFrontZ),n.add(c);let l=Math.max(0,e.lowerFrontZ-e.lowerBackZ-t.sideEndInset*2),u=i(new Je(t.sideBandWidth,t.lineWidth,l)),d=a(s.premium.colors.gunmetal,t.sideBandOpacity),f=[],m=t.sideBandWidth/2;for(let e=-l/2;e+t.sideStripeSlant+t.sideStripeDepth<=l/2;e+=t.sideStripePitch){let n=[-m,t.lineWidth,e],r=[-m,t.lineWidth,e+t.sideStripeDepth],i=[m,t.lineWidth,e+t.sideStripeSlant+t.sideStripeDepth],a=[m,t.lineWidth,e+t.sideStripeSlant];f.push(...n,...r,...a,...r,...i,...a)}let h=i(new kt);h.setAttribute(`position`,new k(f,3));let g=a(t.lossColor,t.lossOpacity);for(let r of[-1,1]){let i=new p;i.name=r<0?`side-loss-warning-left`:`side-loss-warning-right`,i.position.set(r*(e.boardHalfWidth-m),e.lowerY+t.lineLift,(e.lowerBackZ+e.lowerFrontZ)/2),i.add(new U(u,d),new U(h,g)),n.add(i)}let _=i(new H({color:t.lossColor,transparent:!0,opacity:t.lossOpacity})),v=(e.hatches??[]).map((r,a)=>{let o=r.halfSize,s=[[-o,-o],[o,-o],[o,-o],[o,o],[o,o],[-o,o],[-o,o],[-o,-o],[-o,-o],[o,o],[-o,o],[o,-o]].map(([e,t])=>new M(e,0,t)),c=new ke(i(new kt().setFromPoints(s)),_);return c.name=`opening-hatch-warning-${a}`,c.position.set(r.x,e.lowerY+t.lineLift,r.z),c.visible=!1,n.add(c),c}),y=i(new ue(e.coinRadius*t.paidRingScale,t.paidRingTube,s.scene.rivetSegments,s.scene.ringSegments));y.rotateX(-Math.PI/2);let b=new V(y,a(t.paidColor,t.activeOpacity),e.capacity);b.name=`already-settled-dragon-coin-rims`,b.count=0,b.frustumCulled=!1,n.add(b),r.add(b);let x=a(t.frontColor,t.activeOpacity),S=(e.towerEnvelopes??[]).map(r=>{let a=i(new ue(r.radius,t.lineWidth/2,s.scene.rivetSegments,s.scene.ringSegments));a.rotateX(-Math.PI/2);let o=new U(a,x);return o.position.set(r.x,e.lowerY+t.lineLift,r.z),o.visible=!1,n.add(o),o}),C={glow:0,scale:1},w=je.timeline({paused:!0,data:`confirmed-board-feedback`}).fromTo(C,{glow:1,scale:t.collapseScale},{glow:0,scale:1,duration:1,ease:`power2.out`}),T,E=wl([b],t=>!!T?.has(t.id)&&t.position.y>=e.lowerY-e.lowerHalfThickness*2),D=!1;return{root:n,update(e,r,i=!1){if(D)return;n.visible=!i;let a=e.boardFeedback,s=e.elapsedSeconds??0,c=a?.frontAt==null?1:Math.max(0,(s-a.frontAt)*1e3/t.frontPulseMs);w.totalTime(Math.min(1,c),!0),o.opacity=a?.frontAt!=null&&r?t.activeOpacity:t.idleOpacity+(t.activeOpacity-t.idleOpacity)*C.glow,v.forEach((t,n)=>{t.visible=!!e.openingHatches?.includes(n)||(e.hatches?.find(e=>e.index===n)?.open??0)>0}),S.forEach((n,i)=>{n.visible=!e.dragonBonus&&!!a?.highTower?.slots.includes(i);let o=a?.highTower?(s-a.highTower.at)*1e3/t.collapseMs:1;w.totalTime(Math.max(0,Math.min(1,o)),!0),n.scale.setScalar(r?1:C.scale)}),T=a?.paidCoinIds,E.update(e.coins)},dispose(){D||(D=!0,w.kill(),n.removeFromParent(),r.forEach(e=>e.dispose()))}}}var El={keyColor:`#3e98aa`,keyMetal:`#fff0ae`,railColor:`#74e6ff`,railOpacity:.62,keyMetalness:.75,keyRoughness:.28,segments:24,tubeSegments:8,railEmissive:.25,railMetalness:.5,railRoughness:.25,keyBowRadius:.009,keyBowTube:.002,keyBowZ:-.014,keyStemWidth:.004,keyStemLength:.028,keyStemZ:.009,keyToothWidth:.009,keyToothDepth:.004,keyToothZ:.019,keyReliefY:.006,keyReliefHeight:.002,choiceTube:.004,choiceRadius:.142,choiceY:.009,momentSeconds:2,momentIntensity:3,momentDistance:2.2,momentHeight:.6,shadowColor:`#15121b`,shadowOpacity:.35,shadowScale:.42,shadowHeight:.011,shadowStartX:-1.2,shadowEndX:1.2};function Dl(e){let t=new p;t.name=`treasury-features`;let n=new Set,r=e=>(n.add(e),e),i=r(new Ze({color:El.keyMetal,metalness:El.keyMetalness,roughness:El.keyRoughness})),a=r(new Ze({color:El.keyColor,metalness:El.keyMetalness,roughness:El.keyRoughness})),o=r(new qt(e.coinRadius,e.coinRadius,e.coinHalfHeight*2,El.segments)),s=r(new ue(El.keyBowRadius,El.keyBowTube,El.tubeSegments,El.segments));s.rotateX(-Math.PI/2),s.translate(0,El.keyReliefY,El.keyBowZ);let c=r(new Je(El.keyStemWidth,El.keyReliefHeight,El.keyStemLength));c.translate(0,El.keyReliefY,El.keyStemZ);let l=r(new Je(El.keyToothWidth,El.keyReliefHeight,El.keyToothDepth));l.translate(El.keyStemWidth,El.keyReliefY,El.keyToothZ);let u=[o,s,c,l].map((n,o)=>{let s=r(new V(n,o?i:a,e.capacity));return s.name=o?`key-relief-${o}`:`physical-key-medallions`,s.count=0,s.frustumCulled=!1,t.add(s),s}),d=r(new Ze({color:El.railColor,emissive:El.railColor,emissiveIntensity:El.railEmissive,transparent:!0,opacity:El.railOpacity,metalness:El.railMetalness,roughness:El.railRoughness})),f=r(new Je(an.halfWidth*2,an.halfHeight*2,an.halfDepth*2)),m=[-1,1].map(e=>{let n=new U(f,d);return n.name=`physical-shield-${e}`,n.position.set(e*an.x,Ln(0),an.z),t.add(n),n}),h=r(new ue(El.choiceRadius,El.choiceTube,El.tubeSegments,El.segments));h.rotateX(-Math.PI/2);let g=r(new Ot({color:El.railColor})),v=(e.hatches??[]).map((e,n)=>{let r=new U(h,g);return r.name=`dragon-target-${n}`,r.position.set(e.x,El.choiceY,e.z),r.visible=!1,t.add(r),r}),b=new _(El.keyMetal,0,El.momentDistance);b.name=`high-tower-local-light`,t.add(b);let S=new x;[[0,-.65],[-.1,-.18],[-.3,-.4],[-1,-.3],[-.65,0],[-.4,.1],[-.15,.06],[-.08,.3],[0,.5],[.08,.3],[.15,.06],[.4,.1],[.65,0],[1,-.3],[.3,-.4],[.1,-.18],[0,-.65]].forEach(([e,t],n)=>n?S.lineTo(e,t):S.moveTo(e,t));let C=r(new Ot({color:El.shadowColor,transparent:!0,opacity:0,depthWrite:!1,side:2})),w=new U(r(new y(S)),C);w.name=`high-tower-dragon-shadow`,w.rotation.x=-Math.PI/2,w.scale.setScalar(El.shadowScale),t.add(w);let T={light:0,shadow:0,x:El.shadowStartX},E=je.timeline({paused:!0,data:`high-tower-local-moment`}).fromTo(T,{light:El.momentIntensity},{light:0,duration:El.momentSeconds,ease:`power2.out`},0).fromTo(T,{x:El.shadowStartX},{x:El.shadowEndX,duration:El.momentSeconds,ease:`power1.inOut`},0).fromTo(T,{shadow:0},{shadow:El.shadowOpacity,duration:El.momentSeconds/3,yoyo:!0,repeat:1,ease:`sine.inOut`},0),D=wl(u,e=>e.kind===`key`),O=!1;return{root:t,update(n,r,i=!1){if(O)return;t.visible=!i,D.update(n.coins);for(let e of m)e.visible=(n.treasury?.shield??0)>0,e.position.y=Ln(n.treasury?.shield??0);v.forEach((e,t)=>{e.visible=!!n.dragonChoice?.targets.some(e=>e.slot===t)});let a=n.boardFeedback?.highTower,o=a?Math.max(0,(n.elapsedSeconds??0)-a.at):El.momentSeconds;E.totalTime(Math.min(El.momentSeconds,o),!0);let s=!!a&&!n.dragonBonus&&!n.dragonChoice&&o<El.momentSeconds&&!r,c=e.hatches?.[a?.slots[0]??0];b.position.set(c?.x??0,El.momentHeight,c?.z??0),b.intensity=s?T.light:0,w.visible=s,C.opacity=T.shadow,w.position.set(T.x,e.lowerY+El.shadowHeight,(e.lowerBackZ+e.lowerFrontZ)/2)},dispose(){O||(O=!0,E.kill(),t.removeFromParent(),n.forEach(e=>e.dispose()))}}}var Q={radius:.47,centerY:.585,faceOffset:.012,layerGap:.004,gearTeeth:40,gearInner:.475,gearOuter:.508,toothHeight:.026,gearDepth:.02,hubRadius:.12,pointerLength:.08,pointerWidth:.052,textureSize:1024,hubTextureSize:256,fontPx:62,jackpotFontPx:40,resultFontPx:118,numberRadiusRatio:.64,colors:{slot5:`#2a2d33`,slot10:`#7c1b2a`,slot20:`#5a4426`,slot50:`#b08d4a`,slot100:`#e9d9a8`,slot300:`#ff4d2e`,ink5:`#cbb17d`,ink10:`#fff0c9`,ink20:`#fff0c9`,ink50:`#1a1208`,ink100:`#4a2a10`,ink300:`#fff7d6`,rim:`#cbb17d`,rimDark:`#1a1512`,gear:`#5a3d1c`,gearEdge:`#d8b978`,hub:`#9c7541`,hubLight:`#f9e7b1`,hubEdge:`#ead298`,shield:`#fff4dc`,cross:`#b42c49`,pointer:`#fff0c9`,pointerTip:`#b42c49`,lamp:`#ffd98a`,lampOff:`#3a2d18`,beam:`#ffd98a`,win:`#fff7dc`,jackpot:`#ff9a3c`,resultBadge:`#1a1512`},materials:{gearMetalness:.75,gearRoughness:.32,faceMetalness:.15,faceRoughness:.5,faceEmissive:.12,hubMetalness:.6,hubRoughness:.3},gearCounterRatio:.3,lampAngles:[-150,-90,-30],lampRadius:.022,lampEmissive:1.4,beamWidth:.18,beamBottomY:.12,beamOpacity:.55,beamTextureSize:64,spot:{intensity:5,jackpotIntensity:8,distance:3.5,offsetZ:1.2,offsetY:.25},houseDim:.5,camera:{pitchFactor:.73,zoom:.97,easeSeconds:.8,frameIdleTop:1.2,frameShowPadding:.04},pulseHz:1.6,flashSeconds:.25,winGlow:.85,segments:96},Ol=Math.PI/180,kl=1;function Al(e){if(typeof document>`u`)return null;let t=document.createElement(`canvas`);return t?(t.width=e,t.height=e,{canvas:t,ctx:typeof t.getContext==`function`?t.getContext(`2d`):null}):null}function jl(e,t){let n=Q.colors,r=t/2,i=t/2-6;e.clearRect(0,0,t,t),e.save(),e.translate(r,r),e.beginPath(),e.arc(0,0,i+4,0,Math.PI*2),e.fillStyle=n.rimDark,e.fill();for(let t=0;t<En.length;t++){let r=En[t],a=(In(t)-90)*Ol,o=a+r.arc*Ol;if(e.beginPath(),e.moveTo(0,0),e.arc(0,0,i,a,o),e.closePath(),e.fillStyle=n[`slot${r.value}`],e.fill(),e.lineWidth=r.value===300?5:2,e.strokeStyle=n.rim,e.stroke(),r.value===300){let t=e.createRadialGradient(0,0,i*.55,0,0,i);t.addColorStop(0,`rgba(255,154,60,0)`),t.addColorStop(1,`rgba(255,154,60,0.55)`),e.fillStyle=t,e.fill()}let s=In(t)+r.arc/2;e.save(),e.rotate(s*Ol),e.translate(0,-i*Q.numberRadiusRatio),e.rotate(-Math.PI/2),e.fillStyle=n[`ink${r.value}`],e.font=`800 ${r.value===300?Q.jackpotFontPx:Q.fontPx}px Inter, "Noto Sans TC", sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineWidth=4,e.strokeStyle=`rgba(0,0,0,0.35)`,e.strokeText(String(r.value),0,0),e.fillText(String(r.value),0,0),e.restore()}for(let t=0;t<En.length;t++){let r=(In(t)-90)*Ol;e.beginPath(),e.arc(Math.cos(r)*(i-10),Math.sin(r)*(i-10),7,0,Math.PI*2),e.fillStyle=n.pointer,e.fill(),e.lineWidth=2,e.strokeStyle=n.gear,e.stroke()}e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.lineWidth=6,e.strokeStyle=n.rim,e.stroke(),e.restore()}function Ml(e,t,n){let r=Q.colors,i=t/2,a=t/2-4;e.clearRect(0,0,t,t),e.save(),e.translate(i,i);let o=e.createRadialGradient(-a*.3,-a*.4,a*.1,0,0,a);if(o.addColorStop(0,r.hubLight),o.addColorStop(.55,r.hub),o.addColorStop(1,`#3c2b1c`),e.beginPath(),e.arc(0,0,a,0,Math.PI*2),e.fillStyle=o,e.fill(),e.lineWidth=6,e.strokeStyle=r.hubEdge,e.stroke(),n===null){let t=a*.62,n=a*.78;e.beginPath(),e.moveTo(-t/2,-n/2),e.lineTo(t/2,-n/2),e.lineTo(t/2,n*.1),e.quadraticCurveTo(t/2,n/2,0,n/2),e.quadraticCurveTo(-t/2,n/2,-t/2,n*.1),e.closePath(),e.fillStyle=r.shield,e.fill(),e.lineWidth=4,e.strokeStyle=r.hubEdge,e.stroke(),e.fillStyle=r.cross,e.fillRect(-t*.09,-n*.36,t*.18,n*.7),e.fillRect(-t*.3,-n*.2,t*.6,n*.16)}else e.beginPath(),e.arc(0,0,a*.8,0,Math.PI*2),e.fillStyle=r.resultBadge,e.fill(),e.lineWidth=4,e.strokeStyle=n===300?r.jackpot:r.rim,e.stroke(),e.fillStyle=n===300?r.jackpot:r.win,e.font=`800 ${n>=100?Q.resultFontPx*.78:Q.resultFontPx}px Inter, "Noto Sans TC", sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(String(n),0,4);e.restore()}function Nl(){let e=new x,t=Q.gearTeeth,n=Math.PI*2/t;for(let r=0;r<t;r++){let t=r*n,i=t+n*.45,a=t+n*.55,o=t+n,s=Q.gearOuter+Q.toothHeight,c=(e,t)=>[Math.cos(t)*e,Math.sin(t)*e];r===0?e.moveTo(...c(Q.gearOuter,t)):e.lineTo(...c(Q.gearOuter,t)),e.lineTo(...c(s,t+n*.1)),e.lineTo(...c(s,i)),e.lineTo(...c(Q.gearOuter,a)),e.lineTo(...c(Q.gearOuter,o))}e.closePath();let r=new en;return r.absarc(0,0,Q.gearInner,0,Math.PI*2,!0),e.holes.push(r),e}function Pl(e){return e?e.phase===`spinning`?Math.min(1,e.elapsed/Q.camera.easeSeconds):e.phase===`stopped`||e.phase===`pouring`?1:e.phase===`settling`?Math.max(0,1-e.elapsed/kl):0:0}function Fl(e,t={}){let n=new p;n.name=`treasury-wheel`;let r=new Set,i=e=>(r.add(e),e),a=Q.colors,o=s.cabinetHousing.geometry,c=e.upperBackZ-o.backSetback+o.panelThickness+Q.faceOffset;n.position.set(0,Q.centerY,c);let l=i(new Ze({color:a.gear,metalness:Q.materials.gearMetalness,roughness:Q.materials.gearRoughness,emissive:a.gearEdge,emissiveIntensity:0})),u=new U(i(new C(Nl(),{depth:Q.gearDepth,bevelEnabled:!1})),l);u.name=`treasury-wheel-gear`,u.position.z=-Q.gearDepth,n.add(u);let d=Al(Q.textureSize);d?.ctx&&jl(d.ctx,Q.textureSize);let f=i(d?new ct(d.canvas):new oe);f.colorSpace=_e,f.anisotropy=4;let m=i(new Ze({map:f,emissiveMap:f,emissive:`#ffffff`,emissiveIntensity:Q.materials.faceEmissive,metalness:Q.materials.faceMetalness,roughness:Q.materials.faceRoughness})),h=new U(i(new Le(Q.radius,Q.segments)),m);h.name=`treasury-wheel-disc`,n.add(h);let g=i(new Ot({color:a.win,transparent:!0,opacity:0,blending:2,depthWrite:!1})),v=null,b=-1,S=Al(Q.hubTextureSize),w=i(S?new ct(S.canvas):new oe);w.colorSpace=_e;let T,E=e=>{T!==e&&(T=e,S?.ctx&&(Ml(S.ctx,Q.hubTextureSize,e),w.needsUpdate=!0))};E(null);let D=i(new Ze({map:w,metalness:Q.materials.hubMetalness,roughness:Q.materials.hubRoughness,emissiveMap:w,emissive:`#ffffff`,emissiveIntensity:.1})),O=new U(i(new Le(Q.hubRadius,Q.segments)),D);O.name=`treasury-wheel-hub`,O.position.z=Q.layerGap*2,n.add(O);let k=new x;k.moveTo(-Q.pointerWidth/2,Q.pointerLength/2),k.lineTo(Q.pointerWidth/2,Q.pointerLength/2),k.lineTo(0,-Q.pointerLength/2),k.closePath();let A=i(new Ze({color:a.pointer,emissive:a.pointerTip,emissiveIntensity:.2,metalness:.5,roughness:.35})),j=new U(i(new y(k)),A);j.name=`treasury-wheel-pointer`,j.position.set(0,Q.radius+Q.pointerLength*.35,Q.layerGap*3),n.add(j);let ee=i(new Ze({color:a.lamp,emissive:a.lamp,emissiveIntensity:Q.lampEmissive})),te=i(new Ze({color:a.lampOff,emissive:a.lampOff,emissiveIntensity:.1})),N=i(new Le(Q.lampRadius,24)),ne=Q.lampAngles.map((e,t)=>{let r=new U(N,te);r.name=`treasury-wheel-lamp-${t}`;let i=(Q.gearInner+Q.gearOuter)/2,a=(90-e)*Ol;return r.position.set(Math.cos(a)*i,Math.sin(a)*i,Q.layerGap),n.add(r),r}),P=Al(Q.beamTextureSize);if(P?.ctx){let e=P.ctx.createLinearGradient(0,0,0,Q.beamTextureSize);e.addColorStop(0,`rgba(255,240,201,1)`),e.addColorStop(.5,`rgba(255,217,138,0.45)`),e.addColorStop(1,`rgba(255,217,138,0)`),P.ctx.fillStyle=e,P.ctx.fillRect(0,0,Q.beamTextureSize,Q.beamTextureSize)}let re=i(P?new ct(P.canvas):new oe),ie=Q.centerY+Q.radius,ae=ie-Q.beamBottomY,F=i(new Ot({map:re,color:a.beam,transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2})),se=new U(i(new ve(Q.beamWidth,ae)),F),I=Math.max(0,e.dropZ-c);se.name=`treasury-wheel-beam`,se.rotation.x=-Math.atan2(I,ae),se.position.set(0,(ie+Q.beamBottomY)/2-Q.centerY,Q.layerGap*4+I/2),se.visible=!1,n.add(se);let L=new _(a.lamp,0,Q.spot.distance);L.name=`treasury-wheel-spot`,L.position.set(0,Q.spot.offsetY,Q.spot.offsetZ),n.add(L);let ce=new Map,R=[t.keyLight,t.ambient].filter(e=>!!e);for(let e of R)ce.set(e,e.intensity);let le=-1,z=-1,ue=0,de=!1,B=(e,t)=>{v&&=(n.remove(v),v.geometry.dispose(),null);let r=In(e)+t,i=En[e].arc,a=new x;a.moveTo(0,0),a.absarc(0,0,Q.radius,(90-r-i)*Ol,(90-r)*Ol,!1),a.closePath(),v=new U(new y(a,12),g),v.name=`treasury-wheel-win`,v.position.z=Q.layerGap,n.add(v),b=e};return{root:n,show:()=>ue,frameBounds:e=>{let t=c+Q.layerGap*4,n=Q.gearOuter+Q.toothHeight+Q.camera.frameShowPadding;return e<=0?[new M(0,Q.centerY+Q.radius*Q.camera.frameIdleTop,t)]:[new M(0,Q.centerY+Q.radius+Q.pointerLength+Q.camera.frameShowPadding,t),new M(0,Q.centerY-n,t),new M(-n,Q.centerY,t),new M(n,Q.centerY,t)]},update(e,t,r=!1){if(de)return;n.visible=!r;let i=e.wheel??null,o=e.elapsedSeconds??0;ue=Pl(i);let s=i?.angle??0;h.rotation.z=-s*Ol,u.rotation.z=s*Ol*Q.gearCounterRatio;let c=e.treasury?.keys??0,d=!!i&&i.phase!==`idle`;ne.forEach((e,t)=>{e.material=d||t<c?ee:te});let f=i?.prize===300,p=t?1:.7+.3*Math.sin(o*Math.PI*2*Q.pulseHz);if(i?.phase===`spinning`){let e=bn(s);e!==le&&(le=e,z=o+Q.flashSeconds),A.emissiveIntensity=!t&&o<z?1.2:.2}else A.emissiveIntensity=i&&i.phase!==`idle`?.6:.2;let m=i&&(i.phase===`stopped`||i.phase===`pouring`||i.phase===`settling`)&&i.slot!==null;m&&b!==i.slot&&B(i.slot,s),v&&(v.visible=!!m,g.opacity=m?Q.winGlow*(i.phase===`settling`?ue:p):0,g.color.set(f?a.jackpot:a.win)),m||(b=-1),E(m?i.prize:null),se.visible=!!m,F.opacity=m?Q.beamOpacity*(i.phase===`settling`?ue:p):0,L.intensity=(f?Q.spot.jackpotIntensity:Q.spot.intensity)*ue,l.emissiveIntensity=f&&m?.6*p:0;for(let e of R)e.intensity=ce.get(e)*(1-Q.houseDim*ue)},dispose(){if(!de){de=!0;for(let e of R)e.intensity=ce.get(e);v&&v.geometry.dispose(),n.removeFromParent(),r.forEach(e=>e.dispose())}}}}function Il(){let e={progress:0},t=je.timeline({paused:!0,data:`dragon-bells`}).to(e,{progress:1,duration:1,ease:`sine.inOut`});return{sample(n,r,i=!1){let a=n.bellSlots[r],o=n.swap;if(!o||r!==o.a&&r!==o.b)return{slot:a,arc:0,spin:0};t.totalTime(o.progress,!0);let s=r===o.a?o.b:o.a,c=e.progress;return{slot:a+(n.bellSlots[s]-a)*c,arc:i?0:Math.sin(c*Math.PI)*(r===o.a?1:-1)*G.arcHeight,spin:i?0:c*G.spinRadians}},dispose(){t.kill()}}}function Ll(){let e={scale:1},t=je.timeline({paused:!0,data:`dragon-auto-choice`}).to(e,{scale:G.autoChoice.ringScale,duration:1,ease:`sine.out`});return{sample(n,r){return t.totalTime(n.confirming?n.confirmProgress:0,!0),r&&n.confirming?G.autoChoice.ringScale:e.scale},dispose(){t.kill()}}}function Rl(e={}){let t=G.art,n=new Jt,r=new Kt(-G.layoutWidth/2,G.layoutWidth/2,G.layoutHeight/2,-G.layoutHeight/2,G.camera.near,G.camera.far);r.position.set(0,G.camera.y,G.camera.z),r.lookAt(0,0,0),n.add(r),n.environment=e.environment??null,n.environmentIntensity=t.environmentIntensity,n.add(new O(G.gold,G.shadow,G.ambientIntensity));let i=new mt(G.gold,G.keyIntensity);i.position.fromArray(G.lightPosition),n.add(i);let a=new mt(t.rim,t.fillIntensity);a.position.fromArray(t.fillPosition),n.add(a);let o=Il(),s=Ll(),c=new Set,l=new Set,u=new Set,d=new WeakSet,f=e=>{d.has(e)||(d.add(e),e.dispose())},m=e=>{let t=new Ze({color:e,metalness:G.metalness,roughness:G.roughness});return l.add(t),t},h=m(G.brass),g=m(G.gold),_=m(G.enamel),v=new Ut({color:t.gem,metalness:t.gemMetalness,roughness:t.gemRoughness,clearcoat:t.gemClearcoat});l.add(v);let y=(e,t,n,r=0)=>{c.add(e);let i=new U(e,t);return i.position.y=r,n.add(i),i},b=(e,t,n)=>{let r=y(new ue(t,G.ringTube,G.ringSegments,G.bellSegments),g,e,n);return r.rotation.x=Math.PI/2,r},x=new Ot({color:G.gold,transparent:!0,opacity:G.autoChoice.ringOpacity,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(x);let S=y(new ue(t.shadowRadius,G.ringTube,G.ringSegments,G.bellSegments),x,n);S.name=`auto-choice-focus`,S.rotation.x=Math.PI/2,S.renderOrder=100,S.visible=!1;let C=new Se(t.gemRadius,1),w=new ht(t.beadRadius,G.ringSegments,G.ringSegments),T=e=>{let n=y(new qt(G.platformRadius,G.platformRadius,t.padDepth,G.bellSegments),_,e,G.padY);for(let n of t.padTrimY)b(e,G.platformRadius,n);b(e,G.platformRadius*t.shadowFalloff,t.padTop);let r=new Ot({color:G.shadow,transparent:!0,opacity:t.shadowOpacity/t.shadowLayers,depthWrite:!1});l.add(r);for(let n=0;n<t.shadowLayers;n++){let i=y(new Le(t.shadowRadius*(1-n/t.shadowLayers*(1-t.shadowFalloff)),G.bellSegments),r,e,t.shadowY+n*t.shadowLayerY);i.rotation.x=-Math.PI/2}return n},E=G.profile.map(([e,t])=>new Nt(e*G.bellRadius,t*G.bellHeight)),D=Array.from({length:3},(e,r)=>{let i=new p,a=new p;i.name=`bell-${r}`,i.add(a),n.add(i),y(new N(E,G.bellSegments),h,a).name=`engraved-bell-shell`;for(let{y:e,radiusScale:t}of G.rings)b(a,G.bellRadius*t,e);let o=y(new ue(G.handleRadius,G.handleTube,G.handleRadialSegments,G.handleSegments),g,a,G.bellHeight+G.handleRadius);o.rotation.y=0;for(let e=0;e<t.beadCount;e++){let n=y(w,g,a,t.beadY),r=e/t.beadCount*Math.PI*2;n.position.x=Math.sin(r)*t.beadRing,n.position.z=Math.cos(r)*t.beadRing}let s=y(new qt(t.medallionRadius,t.medallionRadius,t.medallionDepth,G.bellSegments),g,a,t.gemY);s.rotation.x=Math.PI/2,s.position.z=t.gemZ;let c=y(C,v,a,t.gemY);return c.position.z=t.gemZ+t.medallionDepth,{root:i,lid:a,pad:T(i)}}),k=Array.from({length:2},()=>{let e=new p,t=Nc();return e.add(t.root),n.add(e),e.scale.setScalar(G.dragonScale),e.rotation.y=G.dragonYaw,{holder:e,model:t}}),A=new Ot({color:t.fallback,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(A);let j=y(new ve(1,1),A,r);j.position.z=-t.backdropDepth,j.renderOrder=-100;let ee=zs(`coin`);Object.values(ee).forEach(e=>u.add(e));let M=m(G.gold);M.map=ee.albedo,M.bumpMap=ee.height,M.bumpScale=t.coinBump;let te=m(t.coinEdge);te.roughness=t.coinEdgeRoughness;let ne=new qt(t.coinRadius,t.coinRadius,1,t.coinSegments);c.add(ne);let P=Array.from({length:3},()=>{let e=new p;return n.add(e),{root:e,pad:T(e),coins:null}}),re=!1,ie=``,ae=null,F=null,oe=null,se={pending:e.loadTextures===!1?0:4,failed:0};if(e.loadTextures!==!1){let e=new L,n=(n,r)=>{let i=e.load(`/crusader-coin-pusher-demo/${n}`,e=>{if(re){f(e);return}se.pending--,e.colorSpace=_e,e.anisotropy=t.textureAnisotropy,r(e)},void 0,()=>{re||(se.pending--,se.failed++)});u.add(i)};n(t.background,e=>{ae=e,A.map=e,A.color.set(t.white),A.needsUpdate=!0}),n(t.metal,e=>{e.wrapS=e.wrapT=lt,e.repeat.fromArray(t.metalRepeat),h.map=e,h.color.set(t.white),h.needsUpdate=!0});let r=()=>k.forEach(e=>e.model.setTextures(F,oe));n(t.scales,e=>{F=e,r()}),n(t.membrane,e=>{oe=e,r()})}let I=e=>{let n=Math.max(G.layoutWidth,G.layoutHeight*e),i=n/e;if(r.left=-n/2,r.right=n/2,r.top=i/2,r.bottom=-i/2,r.updateProjectionMatrix(),j.scale.set(n,i,1),ae){let n=ae.image,r=n?.width&&n?.height?n.width/n.height:t.backgroundAspect,i=Math.min(1,e/r),a=Math.min(1,r/e);ae.repeat.set(i,a),ae.offset.set((1-i)/2,(1-a)/2)}return{width:n,baseY:-i*t.baseFraction,x:(e,r=3)=>((e+.5)/r-.5)*n*t.columnWidth}},ce=e=>{let t=e.autoClear;try{e.autoClear=!1,e.clearDepth(),e.render(n,r)}finally{e.autoClear=t}},R=(e,n,r,i,a,o)=>{S.visible=!!n&&n.kind===r&&n.eventId===i&&n.focusIndex>=0&&n.focusIndex<a,S.visible&&n&&(S.position.set(e.x(n.focusIndex,a),e.baseY+t.padTrimY[1]+G.ringTube,0),S.scale.setScalar(s.sample(n,o)))};return{scene:n,bells:D,dragons:k,towers:P,artState:se,drawChoice(e,n,r,i,a=!1){if(re)return;let o=I(n),s=JSON.stringify(r);D.forEach(e=>{e.root.visible=!1}),k.forEach(e=>{e.holder.visible=!1}),ie!==s&&(ie=s,P.forEach((e,n)=>{e.coins&&=(e.root.remove(e.coins),e.coins.dispose(),null);let i=r.targets[n];if(!i)return;let a=Math.min(t.towerCapacity,Math.max(0,i.coins)),o=new V(ne,[te,M,M],a);e.coins=o,e.root.add(o);let s=i.structure===`double`?6:7,c=Math.ceil(a/s),l=t.towerHeights[i.tier]/Math.max(1,c),u=new st;for(let e=0;e<a;e++){let n=Math.floor(e/s),r=e%s,a=i.structure===`double`,d=r/(a?3:s)*Math.PI*2+n%2*Math.PI/s,f=i.structure===`tiered`&&n/c>t.tieredThreshold?t.tieredUpperScale:1,p=a?t.doubleOrbit:t.towerOrbit;u.position.set(Math.cos(d)*p*f+(a?(r<3?-1:1)*t.doubleOffset:0),t.padTop+(n+.5)*l,Math.sin(d)*p*f),u.rotation.y=d,u.scale.set(f,l*t.coinThickness,f),u.updateMatrix(),o.setMatrixAt(e,u.matrix)}o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()})),P.forEach((e,t)=>{e.root.visible=t<r.targets.length,e.root.position.set(o.x(t,r.targets.length),o.baseY,0)}),R(o,i,`tower`,r.id,r.targets.length,a),ce(e)},draw(e,t,n,r,i){if(!n||re)return;let a=I(t);P.forEach(e=>{e.root.visible=!1});let s=n.phase===`show`?1:n.phase===`cover`?Math.max(0,1-n.elapsed/G.coverSeconds):n.phase===`reveal`?Math.min(1,n.elapsed/G.coverSeconds):0;D.forEach((e,t)=>{let i=o.sample(n,t,r);e.root.visible=!0,e.root.position.set(a.x(i.slot),a.baseY,i.arc),e.lid.position.y=s*G.bellLift,e.lid.rotation.y=i.spin}),k.forEach(({holder:e,model:t},i)=>{let o=n.visibleDragonBells[i];e.visible=o!==void 0&&s>G.visibleLift,o!==void 0&&(e.position.set(a.x(n.bellSlots[o]),a.baseY+G.dragonHeight,G.dragonZ),t.draw(r?0:n.elapsed,`flight`))}),R(a,i,`bell`,n.id,n.bellSlots.length,r),ce(e)},dispose(){re||(re=!0,o.dispose(),s.dispose(),P.forEach(e=>e.coins?.dispose()),k.forEach(e=>e.model.dispose()),c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),u.forEach(f),n.environment=null,n.clear())}}}function zl(e,t,n){let r=s.cabinetHousing.camera,i=new M(Math.sin(r.yaw),r.pitch,Math.cos(r.yaw)).normalize(),a=new M(Math.cos(r.yaw),0,-Math.sin(r.yaw)),o=new M().crossVectors(i,a).normalize(),c=new Bt().setFromPoints([...t]).getCenter(new M),l=Math.tan(Tt.degToRad(e.fov/2)),u=e.near;for(let r of t){let t=r.clone().sub(c),s=t.dot(i);u=Math.max(u,Math.abs(t.dot(a))/(l*n)+s,Math.abs(t.dot(o))/l+s,e.near+s)}e.aspect=n,e.position.copy(c).addScaledVector(i,u*r.margin),e.lookAt(c),e.updateProjectionMatrix(),e.updateMatrixWorld()}function Bl(e){let t={value:+!!e},n=t.value,r=0,i,a=!1,o=()=>{i?.kill(),i=void 0,t.value=n};return{start(e,c,l){if(!a){if(i?.kill(),n=+!!e,r=c,l||t.value===n){o();return}i=je.timeline({paused:!0}).to(t,{value:n,duration:s.cabinetHousing.camera.transitionSeconds,ease:s.motion.ease})}},sample(e,n){if(i){let t=Math.max(0,(e-r)/1e3);n||t>=s.cabinetHousing.camera.transitionSeconds?o():i.seek(t,!0)}return t.value},moving:()=>!!i,finish:o,dispose(){a||(a=!0,o())}}}var Vl=3e3,Hl=3e3,Ul=1e3/30,Wl=.6,Gl=1e3,Kl=class{enabled;requested;lowered=!1;previous=null;elapsed=0;warmup=Vl;frames=0;slow=0;constructor(e,t){this.enabled=t,this.requested=e}quality(){return this.requested===`low`||this.lowered?`low`:`high`}request(e){return e!==this.requested&&(this.requested=e,this.lowered=!1,this.resetSamples()),this.quality()}resetSamples(){this.previous=null,this.elapsed=0,this.frames=0,this.slow=0,this.warmup=Vl}sample(e,t){if(!t||!Number.isFinite(e))return this.resetSamples(),this.quality();if(!this.enabled||this.requested===`low`||this.lowered)return this.quality();let n=this.previous;if(this.previous=e,n===null)return this.quality();let r=e-n;return r<=0||r>Gl?(this.resetSamples(),this.quality()):this.warmup>0?(this.warmup-=r,this.quality()):(this.elapsed+=r,this.frames++,r>Ul&&this.slow++,this.elapsed>=Hl&&(this.lowered=this.slow/this.frames>=Wl,this.elapsed=0,this.frames=0,this.slow=0),this.quality())}},$=s.siege.bomb,ql=Math.PI*2;function Jl(){let e=new Uint8Array($.textureSize*$.textureSize*4);for(let t=0;t<$.textureSize;t++)for(let n=0;n<$.textureSize;n++){let r=(n+.5)/$.textureSize*2-1,i=(t+.5)/$.textureSize*2-1,a=Math.atan2(i,r),o=Math.hypot(r,i),s=1+$.smokeTextureContrast*Math.sin(a*$.smokeLobes+o*ql),c=Math.max(0,1-o/s)**2,l=1-$.smokeTextureContrast*(.5+.5*Math.sin(r*ql*$.smokeTextureGrainFrequency)*Math.cos(i*ql*$.smokeTextureGrainFrequency)),u=(t*$.textureSize+n)*4;e[u]=e[u+1]=e[u+2]=Math.round(255*l),e[u+3]=Math.round(255*c)}let t=new v(e,$.textureSize,$.textureSize,se);return t.minFilter=t.magFilter=Pe,t.needsUpdate=!0,t}function Yl(e){let t=new p;t.name=`siege-bomb-presentation`,t.visible=!1;let n=new Set,r=e=>(n.add(e),e),i=r(new Ze({color:$.metalColor,metalness:$.metalness,roughness:$.roughness})),a=r(new Ze({color:$.brassColor,metalness:$.metalness,roughness:$.roughness,emissive:$.brassColor,emissiveIntensity:$.emissiveIntensity})),o=r(new Ze({color:$.fuseColor,roughness:1})),s=r(new Ot({color:$.glowColor,toneMapped:!1})),c=r(new ht($.radius,$.segments,$.rings)),l=r(new ue($.radius*$.bandRatio,$.bandTube,$.rings,$.segments)),u=r(new qt($.neckRadius,$.neckRadius,$.neckHeight,$.rings)),d=r(new qt($.fuseRadius,$.fuseRadius,$.fuseLength,$.rings)),f=r(new Be($.sparkRadius)),m=r(new ht(1,$.segments,$.rings)),h=r(new ue($.ringRadius,$.ringWidth,$.rings,$.segments)),g=r(new Be($.emberRadius)),_=r(new ve(1,1)),v=r(Jl()),y=new st,b=Array.from({length:$.maxCount},(e,n)=>{let y=new p;y.name=`siege-bomb-slot-${n}`,t.add(y);let b=new p;b.name=`siege-bomb-${n}`,y.add(b),b.add(new U(c,i));for(let e of[-$.bandTilt,$.bandTilt]){let t=new U(l,a);t.rotation.set(Math.PI/2,e,0),b.add(t)}let x=new U(u,a);x.position.y=$.radius,b.add(x);let S=new U(d,o);S.position.y=$.radius+$.fuseLength/2,S.rotation.z=-$.bandTilt,b.add(S);let C=new U(f,s);C.position.set($.fuseLength*Math.sin($.bandTilt)/2,$.radius+$.fuseLength,0),b.add(C);let w=r(new Ot({color:$.glowColor,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),T=new U(m,w);T.name=`siege-blast-${n}`,y.add(T);let E=r(new Ot({color:$.emberColor,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),D=new U(h,E);D.rotation.x=-Math.PI/2,y.add(D);let O=r(new Ot({color:$.emberColor,transparent:!0,depthWrite:!1,toneMapped:!1})),k=r(new V(g,O,$.emberCount));k.frustumCulled=!1,k.instanceMatrix.setUsage(F),y.add(k);let A=r(new Ot({color:$.smokeColor,map:v,transparent:!0,depthWrite:!1,side:2,toneMapped:!1})),j=r(new V(_,A,$.smokeCount));return j.name=`siege-smoke-${n}`,j.instanceMatrix.setUsage(F),j.frustumCulled=!1,j.renderOrder=$.renderOrder,y.add(j),{slot:y,bomb:b,sparkMesh:C,flash:T,flashMaterial:w,wave:D,ringMaterial:E,sparks:k,emberMaterial:O,smoke:j,smokeMaterial:A}}),x=!1;return{root:t,update(n,r,i,a=!1){if(x)return;let o=Nr(n.siege,r);t.visible=!a&&o.length>0,t.visible&&b.forEach((t,n)=>{let a=o[n];if(t.slot.visible=!!a,!a)return;let s=(n-(o.length-1)/2)*e.boardHalfWidth*$.spreadRatio;if(t.slot.position.set(s,e.lowerY+$.burstHeight,e.lowerBackZ+(e.lowerFrontZ-e.lowerBackZ)*$.bedDepthRatio),t.bomb.visible=a.bomb,t.bomb.position.y=(1-a.drop*a.drop)*$.dropHeight,t.bomb.rotation.z=r?0:(1-a.drop)*$.dropSpin*(n%2?-1:1),t.sparkMesh.visible=!r,t.flash.visible=t.wave.visible=t.sparks.visible=a.blast,a.blast){t.flash.scale.setScalar($.blastRadius*Math.sin(Math.PI*a.blastProgress)),t.flashMaterial.opacity=$.blastOpacity*(1-a.blastProgress),t.wave.scale.setScalar(1+a.blastProgress*$.ringExpansion),t.ringMaterial.opacity=1-a.blastProgress,t.emberMaterial.opacity=1-a.blastProgress;for(let e=0;e<$.emberCount;e++){let n=ql*e/$.emberCount;y.position.set(Math.cos(n)*a.blastProgress*$.emberTravel,Math.sin(Math.PI*a.blastProgress)*$.emberLift,Math.sin(n)*a.blastProgress*$.emberTravel),y.rotation.set(n,n,0),y.scale.setScalar(1-a.blastProgress/2),y.updateMatrix(),t.sparks.setMatrixAt(e,y.matrix)}t.sparks.instanceMatrix.needsUpdate=!0}if(t.smoke.visible=a.smoke>0,t.smoke.visible){t.smokeMaterial.opacity=a.smoke*(r?$.reducedOpacity:$.smokeOpacity);for(let e=0;e<$.smokeCount;e++){let n=ql*e/$.smokeCount,o=$.smokeSpread*(r?1:a.bloom),s=r?0:Math.sin(n+a.drift)*$.smokeDrift;y.position.set(Math.cos(n)*o+s,e%$.smokeRows/$.smokeRows*$.smokeRise*(r?1:a.bloom),Math.sin(n)*o),y.quaternion.copy(i),y.scale.setScalar($.smokeSize*($.smokeMinSize+e%$.smokeSizeSteps*$.smokeSizeStep)*(r?$.reducedSmokeScale:$.smokeGrowthStart+a.bloom*(1-$.smokeGrowthStart))),y.updateMatrix(),t.smoke.setMatrixAt(e,y.matrix)}t.smoke.instanceMatrix.needsUpdate=!0}})},dispose(){x||(x=!0,t.visible=!1,t.removeFromParent(),n.forEach(e=>e.dispose()))}}}function Xl(e){let t=(0,K.useRef)(null),n=(0,K.useRef)(e);n.current=e;let r=(0,K.useRef)(null),i=(0,K.useRef)(null),a=(0,K.useRef)(null),o=(0,K.useRef)(null);return(0,K.useEffect)(()=>{let c=t.current;if(!c)return;let l=e.geometry,u=l.boardHalfWidth-l.coinRadius-l.upperRailHalfThickness*2,d=s.scene,f=s.premium,p=new Jt,m,h,g,_,v,y,b,x=0,S,C,w,T,E=0,D=!1,k=[],A,j,ee=null,M=n.current.cameraView??`front`,te=!!n.current.cabinetOverview,N=Bl(te),ne=n.current.cameraResetKey,P=!1,re=!1,ie=!1,ae=e=>{e!==ie&&(ie=e,n.current.onCameraOffsetChange?.(e))},F=gl(fl(M,1)),oe=()=>!!n.current.disabled||!!n.current.cabinetOverview||!!c.closest(`[inert]`)||F.moving()||N.moving()||M!==(n.current.cameraView??`front`)||ne!==n.current.cameraResetKey,se=al({isDisabled:oe,onStart:e=>{ee=e,n.current.onSweepStart?.(e)},onAim:e=>{ee=e,n.current.onAimChange(e)},onStop:()=>{ee=null,n.current.onSweepEnd?.()}}),I=il(s.interaction.tapSlopPx,{isDisabled:oe,onBusyChange:e=>n.current.onCameraBusyChange?.(e),onPreview:e=>{ee=e,c.style.cursor=I.dragging()?`grabbing`:e===null?``:`grab`},onTap:e=>{n.current.onAimChange(e),n.current.onDropRequest?.(e)},onOrbit:(e,t)=>{let n=ol(F.sample(performance.now(),!0),e,t,Math.min(c.clientWidth,c.clientHeight));P=!0,F.start(n,performance.now(),!0),ml(R,l,R.aspect,n),ae(dl(n,fl(M,R.aspect)))}}),L=window.matchMedia(`(prefers-reduced-motion: reduce)`),ce=new Kl(n.current.quality,window.matchMedia(`(pointer: coarse)`).matches),R=new We(f.camera.fov,1,f.camera.near,f.camera.far),le=()=>{let e=se.pointerId()??I.pointerId();se.cancel(),I.cancel(),ee=null,c.style.cursor=``,e!==null&&c.hasPointerCapture(e)&&c.releasePointerCapture(e)};i.current=le;let z=e=>{e.preventDefault(),le(),n.current.onError?.(`3D 畫面暫時中斷，請重新開始。`)},ue=(e,t=!1)=>{if(oe())return null;let n=c.getBoundingClientRect();if(n.width<=0||n.height<=0||e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)return null;let r=new Nt((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);R.updateMatrixWorld();let i=new tt;i.setFromCamera(r,R),A?.computeBoundingSphere();let a=i.intersectObjects([...p.children.filter(e=>e!==j&&e!==g?.root&&e!==h?.root&&e!==v?.root&&e!==y?.root&&e!==b?.root),...h?.getOccluders()??[]],!1)[0];if(!a||!k.includes(a.object)||!g)return null;let o=a.object.name===`physical-rear-wall`&&rl(a.point,l);return!o&&(a.point.y<l.lowerY-l.coinHalfHeight||nl(a.point,l)===null)||t&&!o&&(a.point.z>l.upperFrontZ||a.point.y<l.upperY-l.coinHalfHeight)?null:_l(r.x,R,u,g.surfaceY,l.dropZ)},de=e=>{let t=se.pointerId()??I.pointerId();if(t!==null&&t!==e.pointerId){le();return}if(oe()||e.target!==w?.domElement)return;if(n.current.onSweepStart&&se.begin(e,ue(e,!0))){e.preventDefault(),c.setPointerCapture(e.pointerId);return}let r=ue(e);I.begin(e,r)&&c.setPointerCapture(e.pointerId)},B=e=>{if(oe()){le();return}if(se.pointerId()!==null){se.move(e,ue(e)),se.pointerId()===null&&c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId);return}let t=I.pointerId();(t===e.pointerId||t===null&&e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0)&&(I.move(e,t===null?ue(e):null),I.pointerId()===null&&c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId))},fe=e=>{if(se.pointerId()===e.pointerId){se.end(e),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId);return}I.pointerId()===e.pointerId&&(I.end(e,I.dragging()?null:ue(e)),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId))},pe=e=>{(I.pointerId()===e.pointerId||se.pointerId()===e.pointerId)&&le()},me=()=>{le(),o.current?.()},he=()=>{document.hidden&&me()},ge=()=>I.leave(),ve=e=>{e.target instanceof Node&&!c.contains(e.target)&&le()},ye=()=>{D||(D=!0,le(),i.current=null,cancelAnimationFrame(E),T?.disconnect(),r.current=null,a.current=null,o.current=null,F.dispose(),N.dispose(),n.current.onCameraBusyChange?.(!1),ae(!1),c.removeEventListener(`pointerdown`,de),c.removeEventListener(`pointermove`,B),c.removeEventListener(`pointerup`,fe),c.removeEventListener(`pointercancel`,pe),c.removeEventListener(`lostpointercapture`,pe),c.removeEventListener(`pointerleave`,ge),window.removeEventListener(`blur`,me),document.removeEventListener(`visibilitychange`,he),L.removeEventListener(`change`,me),window.removeEventListener(`pointerdown`,ve),window.removeEventListener(`focusin`,ve),w?.domElement.removeEventListener(`webglcontextlost`,z),m?.dispose(),h?.dispose(),g?.dispose(),v?.dispose(),y?.dispose(),b?.dispose(),S?.dispose(),C?.dispose(),_?.dispose(),n.current.onDragonBonusReady?.(!1),w?.dispose(),w?.domElement.remove())};try{w=new Rs({alpha:!0,antialias:!0,powerPreference:`high-performance`}),w.setClearColor(0,0),w.outputColorSpace=_e,w.toneMapping=4,w.toneMappingExposure=f.lighting.exposure,w.shadowMap.type=1,w.domElement.setAttribute(`aria-label`,`後方投幣區按住左右滑動連投，放開即停；其餘幣床點按投幣、拖曳轉鏡頭；回正按鈕恢復視角`),c.appendChild(w.domElement),w.domElement.addEventListener(`webglcontextlost`,z),m=ul(p,w,l),h=Sl(l),p.add(h.root),h.setOverview(te),e.dragonBonusEnabled&&(n.current.onDragonBonusReady?.(!1),_=yl(),p.add(_.root),_.ready.then(()=>{D||n.current.onDragonBonusReady?.(!0)},()=>{D||n.current.onDragonBonusReady?.(!1)})),g=hl(l),p.add(g.root),v=Tl(l),p.add(v.root),y=Dl(l),p.add(y.root);let{coins:t,pusher:i,aim:s,key:ie}=m;A=t,j=s,k.push(...m.hitTargets);let ue=R.clone(),ye=R.clone(),be=()=>{let e=performance.now(),t=F.sample(e,L.matches),n=b?.show()??0,r={yaw:t.yaw,pitch:t.pitch*(1-(1-Q.camera.pitchFactor)*n)};ml(R,l,R.aspect,r,1,b?.frameBounds(0)??[]),n>0&&b&&(ml(ye,l,R.aspect,r,Q.camera.zoom,b.frameBounds(1)),R.position.lerp(ye.position,n),R.quaternion.slerp(ye.quaternion,n),R.updateMatrixWorld());let i=N.sample(e,L.matches);i>0&&h&&(zl(ue,h.fullBounds,R.aspect),R.position.lerp(ue.position,i),R.quaternion.slerp(ue.quaternion,i),R.updateMatrixWorld()),h?.setOverview(te&&!N.moving())},xe=()=>{re=!1,ae(dl(F.sample(performance.now(),L.matches),fl(M,R.aspect))),n.current.onCameraSettled?.(M),n.current.onCameraBusyChange?.(!1)};o.current=()=>{D||(F.finish(),N.finish(),P||F.start(fl(M,R.aspect),performance.now(),!0),be(),xe())},a.current=()=>{if(D)return;let e=n.current.cameraView??`front`,t=!!n.current.cabinetOverview;(e!==M||t!==te||ne!==n.current.cameraResetKey||F.moving()||N.moving())&&(le(),M=e,ne=n.current.cameraResetKey,P=!1,re=!0,n.current.onCameraBusyChange?.(!0),te=t,N.start(te,performance.now(),L.matches),F.start(fl(e,R.aspect),performance.now(),L.matches),be(),!F.moving()&&!N.moving()&&xe())};let Se=()=>{if(D||!w)return;let e=c.clientWidth,t=c.clientHeight;e&&t&&(w.setSize(e,t),le(),R.aspect=e/t,o.current?.())},Ce,we=e=>{w&&Ce!==e&&(Ce=e,w.setPixelRatio(Math.min(window.devicePixelRatio||1,e===`high`?d.highPixelRatio:d.lowPixelRatio)),w.shadowMap.enabled=e===`high`,ie.castShadow=e===`high`,w.domElement.dataset.renderQuality=e)};r.current=e=>{w&&(we(ce.request(e)),Se())},r.current(n.current.quality),T=new ResizeObserver(Se),T.observe(c),c.addEventListener(`pointerdown`,de),c.addEventListener(`pointermove`,B),c.addEventListener(`pointerup`,fe),c.addEventListener(`pointercancel`,pe),c.addEventListener(`lostpointercapture`,pe),c.addEventListener(`pointerleave`,ge),window.addEventListener(`blur`,me),document.addEventListener(`visibilitychange`,he),L.addEventListener(`change`,me),window.addEventListener(`pointerdown`,ve),window.addEventListener(`focusin`,ve);let Te=wl([t],e=>e.kind!==`key`&&(!e.lifting||e.position.y+l.coinHalfHeight>=l.lowerY-l.lowerHalfThickness*2),e=>f.materials.coinShadeMin+e*37%101/100*f.materials.coinShadeRange),Ee=()=>{if(!D&&w)try{re&&(be(),!F.moving()&&!N.moving()&&xe());let e=n.current.readFrame();we(ce.sample(performance.now(),!document.hidden&&!n.current.disabled&&!e.dragonChoice&&!e.dragonBells&&!e.dragonBonus&&!F.moving()&&!N.moving()&&I.pointerId()===null&&se.pointerId()===null)),Te.update(e.coins),i.position.z=e.pusherZ,m?.updateHatches(e.hatches),v?.update(e,L.matches,te),y?.update(e,L.matches,te),e.wheel!==void 0&&!b&&(b=Fl(l,{keyLight:ie,ambient:p.children.find(e=>e instanceof O)}),p.add(b.root),h?.root.traverse(e=>{(e.name===`cabinet-rear-seal`||e.name.startsWith(`cabinet-rear-shield`))&&(e.visible=!1)})),b?.update(e,L.matches,te);let t=b?.show()??0;t!==x&&(x=t,re||be()),e.siege&&e.siege.phase!==`rhythm`&&!C&&(C=Yl(l),p.add(C.root)),C?.update(e,L.matches,R.quaternion,te),_?.draw(e.dragonBonus,L.matches&&!n.current.bonusFullMotion);let r=(l.pusherCenterY??l.upperY+l.pusherHalfHeight)+l.pusherHalfHeight;s.position.set(e.aim*u,Math.max(l.upperY,r)+f.effects.aimSurfaceOffset,l.dropZ),s.visible=!oe()&&!I.dragging(),g?.update(e.aim,ee,n.current.feedback,oe()||I.dragging(),performance.now(),L.matches),w.render(p,R),(e.dragonBells||e.dragonChoice)&&(S??=Rl({environment:p.environment}),e.dragonChoice?S.drawChoice(w,R.aspect,e.dragonChoice,e.bonusAutoSelection,L.matches&&!n.current.bonusFullMotion):S.draw(w,R.aspect,e.dragonBells,L.matches&&!n.current.bonusFullMotion,e.bonusAutoSelection)),E=requestAnimationFrame(Ee)}catch(e){le(),n.current.onError?.(e instanceof Error?e.message:`3D 畫面無法更新。`)}};n.current.onReady?.(),Ee()}catch(e){ye(),n.current.onError?.(e instanceof Error?e.message:`這個裝置無法啟動 3D 畫面。`)}return ye},[e.geometry,e.dragonBonusEnabled]),(0,K.useEffect)(()=>{r.current?.(e.quality)},[e.quality]),(0,K.useEffect)(()=>{a.current?.()},[e.cameraView,e.cameraResetKey,e.cabinetOverview]),(0,K.useEffect)(()=>{e.disabled&&(i.current?.(),o.current?.())},[e.disabled]),(0,q.jsx)(`div`,{ref:t,style:{width:`100%`,height:`100%`,touchAction:`none`}})}function Zl(e){let t=!1,n=null,r=0,i=!1,a=0,o=null,s=0,c=e.now??(()=>performance.now()),l=t=>{i!==t&&(i=t,e.onAutoFireChange?.(t))},u=()=>{t=!1,o=null,s=0,r+=1,n!==null&&(e.clearInterval(n),n=null)},d=()=>{u(),l(!1)},f=()=>{u()},p=()=>{let t=e.getAutoFireIntervalMs?.();return t!==void 0&&Number.isFinite(t)&&t>0?t:e.fireIntervalMs},m=(t,a)=>{o=t,s=a;let c=r;n=e.setInterval(()=>{if(r===c){if(e.isBlocked()){i?f():d();return}v(t())}},a)},h=n=>{i&&!t&&!e.isBlocked()&&e.getEngine()&&(t=!0,m(n,p()))},g=()=>{if(!i||!t||!o||s===p())return;let e=o;u(),h(e)},_=()=>{l(!0)},v=t=>{if(e.isBlocked()||!Number.isFinite(t))return!1;let n=e.getEngine();if(!n)return!1;let r=Math.max(-1,Math.min(1,t)),{draw:a}=n.dropCoin(r*e.dropMaxAbsX);return a.type===`ineligible`&&(a.reason===`no-balance`?d():a.reason===`board-full`&&(i?f():d())),e.onDrop?.(a,r),a.type!==`ineligible`};return{performDrop:v,handleFireStart:n=>{if(i){d();return}if(t||e.isBlocked()||!e.getEngine())return;t=!0,a=c();let o=r;v(n()),t&&r===o&&m(n,e.fireIntervalMs)},handleFireRelease:(n=!0)=>{i||t&&(n&&e.autoFireHoldMs!==void 0&&c()-a>=e.autoFireHoldMs&&!e.isBlocked()&&e.getEngine()?(l(!0),g()):d())},handleFireEnd:d,handleDropRequest:e=>(d(),v(e)),stopFiring:d,suspendFiring:f,resumeFiring:h,refreshAutoCadence:g,armAutoFiring:_,isFiring:()=>t,isAutoFiring:()=>i}}var Ql=G.autoChoice.scanSeconds,$l=G.autoChoice.confirmSeconds,eu=Ql+$l,tu=class{random;key=``;elapsed=0;committed=!1;pending=null;constructor(e=Math.random){this.random=e}reset(){this.key=``,this.elapsed=0,this.committed=!1,this.pending=null}pick(e){let t=this.random();return Math.min(e-1,Math.max(0,Math.floor(t*e)))}advance(e,t){let n=e.getDragonChoice(),r=e.getDragonBellState(),i=n?`tower:${n.id}`:r?.phase===`guess`?`bell:${r.id}`:``;if(i!==this.key&&(this.key=i,this.elapsed=0,this.committed=!1,this.pending=null),!i||this.committed||!Number.isFinite(t)||t<0)return null;if(this.pending){if(this.pending.elapsed=Math.min(eu,this.pending.elapsed+t),this.pending.elapsed<eu)return null;let{kind:n,eventId:r,value:i}=this.pending,a=n===`tower`?e.chooseDragonTower(r,i):e.guessDragonBell(r,i);return this.pending=null,a?(this.committed=!0,n):null}let a=n?3:5;if(this.elapsed=Math.min(a,this.elapsed+t),this.elapsed<a)return null;if(n&&n.targets.length){let e=this.pick(n.targets.length);this.pending={kind:`tower`,eventId:n.id,selectedIndex:e,value:n.targets[e].towerId,count:n.targets.length,elapsed:0}}else if(r&&r.phase===`guess`){let e=r.bellSlots;if(e.length){let t=e[this.pick(e.length)];this.pending={kind:`bell`,eventId:r.id,selectedIndex:t,value:t,count:e.length,elapsed:0}}}return null}selection(){let e=this.pending;if(!e)return null;let t=e.elapsed>=Ql;return{kind:e.kind,eventId:e.eventId,focusIndex:t?e.selectedIndex:Math.min(e.count-1,Math.floor(e.elapsed/Ql*e.count)),selectedIndex:e.selectedIndex,confirming:t,confirmProgress:t?Math.min(1,(e.elapsed-Ql)/$l):0}}remaining(e){let t=e.getDragonChoice(),n=e.getDragonBellState(),r=t?`tower:${t.id}`:n?.phase===`guess`?`bell:${n.id}`:``,i=t?3:5,a=r===this.key?Math.max(0,i-this.elapsed):i;return t?{tower:a}:n?.phase===`guess`?{bell:a}:{}}};function nu(e,t,n){if(!Number.isFinite(n))return e;let r=Math.max(-1,Math.min(1,n)),i=e.sequence+1;return t.type===`ineligible`?{kind:`blocked`,sequence:i,aim:r,reason:t.reason}:{kind:`accepted`,sequence:i,aim:r}}function ru(e,t){return Number.isFinite(t)?{kind:`aim-only`,sequence:e.sequence+1,aim:Math.max(-1,Math.min(1,t))}:e}function iu(e){return e.kind===`idle`?e:{kind:`idle`,sequence:e.sequence+1}}var au=e({App:()=>mu}),ou=150,su=250,cu=200,lu=`crusader.trial-auto-resume`;function uu(e){let t=new URLSearchParams(window.location.search).get(`dragonChance`),n=t===null?NaN:Number(t);return e&&Number.isFinite(n)&&n>=0&&n<=1?n:Pn}var du={coinRadius:sn,coinHalfHeight:pn,boardHalfWidth:rn,upperY:Nn,upperBackZ:Cn,upperFrontZ:0,upperHalfThickness:Tn,upperRailHalfHeight:An,upperRailHalfThickness:Dn,lowerY:0,lowerBackZ:0,lowerFrontZ:ln,lowerHalfThickness:gn,hatches:kn,pusherHalfHeight:vn,pusherHalfDepth:un,pusherCenterY:cn,rearWall:{centerY:yn,centerZ:mn,halfHeight:wn,halfDepth:nn},dropZ:dn,capacity:_n,towerTopY:Math.max(xn,Fn),towerEnvelopes:Sn.map(e=>({x:e.x,z:e.z,radius:Math.max(Mn,jn),topY:Math.max(xn,Fn)}))};function fu(){return!1}function pu(){return typeof crypto<`u`&&crypto.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*4294967295)}function mu({storageOwner:e=null,entryContinued:t=!1,onNavigate:n,onReady:a}={}){let[o]=(0,K.useState)(()=>Wn(e)),c=vi(),[l,u]=(0,K.useState)(!1),[d,p]=(0,K.useState)(``),m=(0,K.useRef)(new di),[h,g]=(0,K.useState)(!1),[_,v]=(0,K.useState)(!1),[y,b]=(0,K.useState)(!1),[x,S]=(0,K.useState)(null);(0,K.useEffect)(()=>{if(g(!1),!_)return;let e=window.setTimeout(()=>g(!0),s.account.inspectionHintMs);return()=>window.clearTimeout(e)},[_]);let C=(0,K.useMemo)(()=>x?[`local`,`cloud`].map(e=>{let t=e===`local`?x.local:x.remote.archive;return{id:e,label:e===`local`?`這台裝置`:`雲端進度`,balance:t.main.data.engine.ledger.balance,savedAt:t.main.data.savedAt,summary:`盤面 ${t.main.data.engine.physics.coinsById.size} 枚 · 試煉已過 ${Object.values(t.trial?.completed??{}).reduce((e,t)=>e+t.length,0)} 關`}}):void 0,[x]),w=(0,K.useRef)(new ui),[E,O]=(0,K.useState)(!1),k=(0,K.useRef)(!1),[A,ee]=(0,K.useState)(null),M=(0,K.useRef)(0),[N,ne]=(0,K.useState)(),re=(0,K.useMemo)(()=>N?.map(e=>({revision:e.revision,balance:e.archive.main.data.engine.ledger.balance,savedAt:e.archive.main.data.savedAt})),[N]),ie=(0,K.useMemo)(()=>A?.plan.choices.map(e=>{let t=e===`guest`?A.plan.guest:e===`account`?A.plan.account:A.plan.remote.archive,n=Object.values(t.trial?.completed??{}).reduce((e,t)=>e+t.length,0),r=t.main.data.engine.treasury?.state;return{id:e,label:e===`guest`?`目前訪客盤面`:e===`account`?`此帳號的本機進度`:`雲端進度`,balance:t.main.data.engine.ledger.balance,savedAt:t.main.data.savedAt,summary:`盤面 ${t.main.data.engine.physics.coinsById.size} 枚 · 鑰匙 ${r?.keys??0} · 免費 ${r?.freeRemaining??0} 次 · 試煉已過 ${n} 關`}}),[A]),[F]=(0,K.useState)(()=>new ae(t||new URLSearchParams(window.location.search).has(`fromTrial`),e===null&&new URLSearchParams(window.location.search).get(`accountChoice`)===`1`)),[oe,se]=(0,K.useState)(F.blocked);(0,K.useEffect)(()=>{let t=new URL(window.location.href);e===null&&t.searchParams.get(`accountChoice`)===`1`&&(t.searchParams.delete(`accountChoice`),history.replaceState(history.state,``,t.href))},[e]);let I=(0,K.useMemo)(fu,[]),L=(0,K.useRef)(null),ce=(0,K.useRef)(!1),R=(0,K.useRef)(!1),le=(0,K.useRef)(!1),z=(0,K.useRef)(!1),ue=(0,K.useRef)(null),de=(0,K.useRef)(0),B=(0,K.useRef)(!1),pe=(0,K.useRef)(!1),me=(0,K.useRef)(!1),ge=(0,K.useRef)(!1),[_e,ve]=(0,K.useState)(`idle`),ye=(0,K.useRef)(!1),be=(0,K.useRef)(void 0),[xe,Se]=(0,K.useState)({state:`loading`,message:`正在讀取本機進度…`}),Ce=!window.location.pathname.includes(`/qa/`)||window.location.pathname.endsWith(`/qa/local-save.html`),[Te,Ee]=(0,K.useState)(!0),[V,De]=(0,K.useState)(void 0),[ke,Ae]=(0,K.useState)(!1),[je,H]=(0,K.useState)(!1),Me=(0,K.useRef)(!1),Ne=(0,K.useRef)(null),[Pe,Fe]=(0,K.useState)(void 0),Le=V??Pe,[Re,Be]=(0,K.useState)(!1),[Ve,U]=(0,K.useState)(()=>F.phase===`intro`?{kind:`intro`,id:0}:null),He=(0,K.useRef)(Ve),[We,Ge]=(0,K.useState)(document.hidden),Ke=(0,K.useRef)(document.hidden),qe=(0,K.useRef)(new Qc),[Je,Ye]=(0,K.useState)(()=>qe.current.snapshot(0)),Ze=(0,K.useRef)(-1/0),Qe=(0,K.useRef)(0),[$e,et]=(0,K.useState)(Ie),[tt,rt]=(0,K.useState)(!1),[it,at]=(0,K.useState)(1),st=(0,K.useRef)(1),ct=(0,K.useRef)($e),[lt,dt]=(0,K.useState)(xr),ft=(0,K.useRef)(lt);ft.current=lt;let[pt,mt]=(0,K.useState)(`idle`),ht=(0,K.useRef)(0);(0,K.useEffect)(()=>()=>{ht.current++},[]);let gt=(0,K.useRef)({time:0,playing:!1}),[_t,vt]=(0,K.useState)(`high`),[yt,bt]=(0,K.useState)(0),[xt,St]=(0,K.useState)(!1),[Ct,wt]=(0,K.useState)(!1),Tt=(0,K.useRef)(!1),[Dt,Ot]=(0,K.useState)(!1),kt=(0,K.useRef)(!1),[jt,Mt]=(0,K.useState)(0),[Nt,Pt]=(0,K.useState)(0),[Ft,It]=(0,K.useState)(0),[Lt,Rt]=(0,K.useState)(0),[zt,Bt]=(0,K.useState)(null),[Vt,Ut]=(0,K.useState)(),[Wt,Kt]=(0,K.useState)(0),[qt,Jt]=(0,K.useState)(void 0),[Yt,Xt]=(0,K.useState)({kind:`idle`,sequence:0}),[Qt,$t]=(0,K.useState)(0),en=(0,K.useRef)(!1),W=(0,K.useRef)(null),tn=(0,K.useRef)(!1),[nn,rn]=(0,K.useState)(null),[an,G]=(0,K.useState)(null),[on,sn]=(0,K.useState)(null),cn=(0,K.useRef)(new tu),[ln,un]=(0,K.useState)({}),[dn,fn]=(0,K.useState)(null),[pn,mn]=(0,K.useState)(),[hn,gn]=(0,K.useState)(null),[_n,vn]=(0,K.useState)(null),[yn,bn]=(0,K.useState)(!1),xn=(0,K.useRef)(0),Sn=(0,K.useRef)(`idle`),Cn=(0,K.useRef)(`idle`),[wn,Tn]=(0,K.useState)(()=>{try{return Oe(o.cosmetics(window.localStorage))}catch{return we()}}),En=(0,K.useRef)(wn);En.current=wn,(0,K.useEffect)(()=>{try{D(wn,o.cosmetics(window.localStorage))}catch{}},[wn,o]);let[Dn,On]=(0,K.useState)(!1),kn=(0,K.useRef)(0),An=(0,K.useRef)(!1),jn=(0,K.useRef)(null),Mn=(0,K.useRef)(Re),Nn=(0,K.useRef)(Te),Pn=(0,K.useRef)(!1),Fn=(0,K.useRef)(0),In=(0,K.useRef)(null),Ln=(0,K.useRef)(null),Bn=(0,K.useRef)(null),Vn=(0,K.useRef)([]),Hn=(0,K.useRef)(null),Un=(0,K.useRef)(new Dr),Jn=(0,K.useRef)(new Pr),Yn=(0,K.useRef)(new Fr),Xn=(0,K.useRef)(new zr),Zn=(0,K.useCallback)(()=>{if(Ne.current)return Ne.current;let e=W.current,t=L.current;if(!e||!t)return Promise.reject(Error(`No live checkpoint to preserve`));let n={format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},r=t.preserveConflict(n,En.current);return Ne.current=r,r.catch(()=>{Ne.current===r&&(Ne.current=null)}),r},[]),Qn=(0,K.useCallback)(()=>{z.current=!0,B.current=!0,Pn.current=!0,W.current?.pause(),Ae(!0),De(`存檔已有較新的版本，已暫停本頁以避免覆蓋。讀取最新進度前，會先保留目前盤面的復原備份；不會開始新局。`),Se({state:`error`,message:`存檔版本不同，請使用「讀取最新進度」接續。請勿清除網站資料。`}),Zn().catch(()=>{})},[Zn]),$n=(0,K.useCallback)(async(t=!1)=>{let n=W.current,i=L.current;if(!r(e)||!At(e)||!n||!i||!ce.current||z.current||ye.current||B.current)return;if(R.current){le.current=!0;return}let a={format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},o=tl(a);if(t||o!==ue.current){R.current=!0;try{await i.write(a),ue.current=o,de.current=Date.now(),B.current||Se(e=>el(e,{state:`saved`,message:`進度已存於此瀏覽器，重新進入可接續遊玩。`}))}catch(e){B.current||Se(e=>el(e,{state:`error`,message:`進度尚未儲存，請勿關閉此頁；可在設定重試存檔。`})),e instanceof Gn&&Qn()}finally{R.current=!1,le.current&&(le.current=!1,$n())}}},[Qn]),er=(0,K.useRef)(!1),tr=f(e,async()=>{if(!At(e))throw new T(`Play permission is paused`);let t=W.current,n=L.current;if(!r(e)||z.current)throw Error(`Checkpoint owner changed`);if(!t||!n||!ce.current||ye.current||B.current&&!er.current)throw new T(`Checkpoint not ready for cloud`);try{let e={format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},r=tl(e);r!==ue.current&&(await n.write(e),ue.current=r,de.current=Date.now()),await n.assertCurrent()}catch(e){throw e instanceof Gn&&Qn(),e}}),nr=tr.status,rr=()=>{e&&r(e)&&At(e)&&!pe.current&&!z.current&&tr.retry()},ir=(0,K.useCallback)(()=>{let e=Hn.current;if(!e)return;let t=He.current;e.setMusicSuspended(F.blocked||B.current||Ke.current||Pn.current||!!W.current?.getSiegeState()&&An.current||(t?!gt.current.playing:Nn.current));let n=W.current?.getDragonChoice()||W.current?.getDragonBellState();e.setMusic(t?t.kind===`intro`?`intro`:`dragon`:W.current?.getSiegeState()?`siege`:n?`bells`:`game`,t?gt.current.time:void 0)},[]);(0,K.useEffect)(()=>{ir()},[an?.id,on?.id,ir]);let ar=(0,K.useCallback)(()=>{ht.current++,mt(`idle`),Xn.current.reset(),Hn.current?.stopAll()},[]);(0,K.useEffect)(()=>{Nn.current=Te},[Te]),(0,K.useEffect)(()=>{Pn.current=!!Le},[Le]),(0,K.useEffect)(()=>{ct.current=$e,Hn.current?.setMuted($e)},[$e]),(0,K.useEffect)(()=>{(Re||Te||Le)&&(Xt(iu),ar())},[Re,Te,Le,ar]);let or=(0,K.useCallback)(()=>(Hn.current||(Hn.current=new Tr,Hn.current.setMuted(ct.current),Hn.current.setCoinSound(ft.current.sound),Hn.current.setCoinVolume(ft.current.volume),ir()),Hn.current),[ir]),sr=(0,K.useCallback)(()=>{ht.current++,Hn.current?.stopCoinDrop(),mt(`idle`)},[]),cr=(0,K.useCallback)(e=>{sr();let t={...ft.current,...e};t.volume=br(t.volume),ft.current=t,dt(t),Sr(t),Hn.current?.setCoinSound(t.sound),Hn.current?.setCoinVolume(t.volume)},[sr]),lr=(0,K.useCallback)(async()=>{if(ct.current||Ke.current||He.current||ft.current.volume===0)return;let e=++ht.current,t=or();t.unlock(),mt(`loading`);let n=await t.prepareCoinSound();e!==ht.current||ct.current||Ke.current||He.current||mt(n&&t.play(`coin-drop`)?`ready`:`error`)},[or]),ur=(0,K.useCallback)(()=>{or().unlock(),ir()},[or,ir]),dr=(0,K.useCallback)((e,t)=>{He.current&&(gt.current={time:e,playing:t},ir())},[ir]),fr=(0,K.useCallback)(()=>{let e=!ct.current;ct.current=e,et(e),fe(e),or().setMuted(e),ur()},[or,ur]),pr=(0,K.useCallback)((e,t)=>{Xt(n=>nu(n,e,t));let n=W.current?.getHudState();if(n&&(Mt(n.ledger.balance),mn(e=>el(e,n.treasury)),G(e=>el(e,n.dragonChoice??null))),e.type!==`ineligible`){if($n(),or().play(`coin-drop`),n?.dragonChoice){Jt(`請選擇巨龍撞擊目標；盤面已暫停。`);return}if(n?.dragonBonus){Jt(`巨龍 BONUS`);return}e.type===`no-roll`?Jt(e.reason===`free-drop`?n?.treasury?.freeRemaining?`免費投幣 · 剩餘 ${n.treasury.freeRemaining} 次`:`免費已投完，等待護欄收回；再次操作才會投入一般金幣。`:e.reason===`regeneration-progress`?`已累計有效投幣，蓄能達20枚後再生幣塔。`:e.reason===`spawn-in-progress`?`幣塔升起中，可繼續投幣推進。`:`已有待建幣塔，等待可用空間；可繼續投幣推進。`):e.type===`event`&&Jt(`恭喜！觸發建塔事件，即將建造 ${e.towers} 座幣塔。`)}},[or,$n]),mr=(0,K.useMemo)(()=>Zl({getEngine:()=>W.current,isBlocked:()=>!r(e)||!At(e)||F.blocked||B.current||!!He.current||Mn.current||Nn.current||Pn.current||An.current||Tt.current||kt.current||!!W.current?.getDragonBonusState()||!!W.current?.isFeatureInputBlocked(),dropMaxAbsX:zn,fireIntervalMs:su,getAutoFireIntervalMs:()=>su/st.current,autoFireHoldMs:s.interaction.autoFireHoldMs,onAutoFireChange:rt,onDrop:pr,setInterval:(e,t)=>window.setInterval(e,t),clearInterval:e=>window.clearInterval(e)}),[pr]),hr=(0,K.useCallback)(()=>{mr.stopFiring()},[mr]),gr=(0,K.useCallback)(e=>{if(!Number.isFinite(e))return;let t=Math.max(1,Math.min(3,Math.round(e*4)/4));st.current=t,at(t),mr.refreshAutoCadence()},[mr]),_r=(0,K.useCallback)(()=>{mr.suspendFiring()},[mr]),vr=(0,K.useCallback)(()=>{let t=!At(e)||F.blocked||B.current||Ke.current||!!He.current||Nn.current||Pn.current;Mn.current=t,Be(t),Ln.current=null,t?(_r(),W.current?.pause(),qe.current.clearTransient(W.current?.getPhysicsWorld().getElapsedSeconds()??0)):W.current?.resume(),ir()},[_r,ir]),yr=(0,K.useSyncExternalStore)(Zt,ot,ot);(0,K.useEffect)(()=>{vr()},[yr,vr]),(0,K.useEffect)(()=>ze(e,{pause:()=>{_r(),Mn.current=!0,Be(!0),W.current?.pause(),ar(),Hn.current?.setMusicSuspended(!0)},preserve:async()=>{let e=W.current,t=L.current;ce.current&&e&&t&&await t.preserveConflict({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},En.current)},prepare:async()=>{let t=L.current,n=W.current;if(!e||!t||!n||!ce.current||z.current||ye.current)throw Error(`Play handoff checkpoint unavailable`);nt(e);let r={format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},i=tl(r);i!==ue.current&&(await t.write(r),ue.current=i,de.current=Date.now()),await t.assertCurrent(),nt(e)}}),[e,_r,ar,Zn]);let Cr=(0,K.useCallback)(e=>{let t=W.current?.getTreasuryState();if(W.current?.getDragonBonusState()||W.current?.getDragonChoice()||W.current?.getDragonBellState()||t&&t.phase!==`idle`)return;let n={kind:e,id:++Qe.current};He.current=n,gt.current={time:0,playing:!1},_r(),Xt(iu),vr(),U(n)},[_r,vr]),wr=(0,K.useCallback)(()=>{He.current?.kind===`intro`&&F.finishIntro(),se(F.blocked),He.current=null,U(null),vr()},[vr]);(0,K.useEffect)(()=>{Nn.current=Te,Pn.current=!!Le,vr()},[Te,Le,vr]);let Er=(0,K.useCallback)(()=>{!r(e)||B.current||Tt.current||kt.current||(or().unlock(),mr.handleFireStart(()=>Fn.current))},[or,mr]),Or=(0,K.useCallback)(()=>{mr.handleFireEnd()},[mr]),kr=(0,K.useCallback)(e=>{mr.handleFireRelease(e===`pointer`)},[mr]),Ar=(0,K.useCallback)(()=>{Mn.current||Nn.current||Pn.current||Tt.current||kt.current||(Tt.current=!0,_r(),Xt(iu),St(!0),bt(e=>e+1))},[_r]),jr=(0,K.useCallback)(e=>{Tt.current=e,e&&(_r(),Xt(iu)),St(e)},[_r]),Mr=(0,K.useCallback)(e=>{Mn.current||Nn.current||Pn.current||Tt.current||(kt.current=e,Tt.current=!0,_r(),Xt(iu),St(!0),Ot(e))},[_r]),Nr=(0,K.useCallback)(e=>{if(B.current||!Number.isFinite(e)||Tt.current||kt.current)return;or().unlock();let t=Math.max(-1,Math.min(1,e));Fn.current=t,Kt(t),mr.isAutoFiring()||mr.handleDropRequest(e)},[or,mr]),Ir=(0,K.useCallback)(()=>{In.current!==null&&(cancelAnimationFrame(In.current),In.current=null),Bn.current!==null&&(window.clearInterval(Bn.current),Bn.current=null),hr(),ar(),Ln.current=null},[hr,ar]),Rr=(0,K.useCallback)(async()=>{if(!Ce||pe.current||!At(e))return;let t=W.current,r=L.current;if(!t||!r||!ce.current||z.current||ye.current||Nn.current||Pn.current){ve(`error`);return}if(B.current=!0,pe.current=!0,ve(`saving`),mr.isAutoFiring()&&!jn.current)try{jn.current=window.crypto.randomUUID(),window.sessionStorage.setItem(lu,jn.current)}catch{jn.current=null}Ir(),vr();try{let i={format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:qe.current.saveState(),aim:Fn.current},a=new URL(`trials.html`,window.location.href);if(jn.current&&a.searchParams.set(`autoResume`,jn.current),n){await n(`trials`,a,()=>r.write(i));return}await Kn(r,i,async()=>{await Gt(e,`trials`),Ht(`trials`,window.sessionStorage),window.location.assign(a.href)})}catch(e){ve(`error`),Se({state:`error`,message:`前往試煉前未能完成存檔。盤面已暫停，請重試；原進度仍在此頁。`}),e instanceof Gn&&Qn()}finally{pe.current=!1}},[Ce,mr,Ir,vr,Qn,n]),Br=async()=>{if(!pe.current){pe.current=!0,ve(`saving`);try{if(e&&await ut(e,!0),!r(e))throw Error(`Navigation account changed`)}catch{ve(`error`);return}finally{pe.current=!1}await Rr()}},Vr=(0,K.useCallback)(()=>{let e=W.current;if(!e)return;let t=e.getHudState();!ye.current&&!tn.current&&!t.dragonChoice&&!t.dragonBells&&!t.dragonBonus&&e.setDragonBonusAvailable(!1);let n=qe.current.snapshot(t.elapsedSeconds);Ye(e=>el(e,n)),Pt(t.scoreCount),rn(e=>el(e,t.dragonBonus)),G(e=>el(e,t.dragonChoice??null)),sn(e=>el(e,t.dragonBells??null));let r=cn.current.remaining(e);un(e=>el(e,r));let i=cn.current.selection();fn(e=>el(e,i)),mn(e=>el(e,t.treasury)),gn(e=>{let n=t.wheel??null;return e?.phase===n?.phase&&e?.id===n?.id?e:n});let a=e.getSiegeState();vn(e=>el(e,a)),Mt(t.ledger.balance),t.ledger.balance<=0&&(t.treasury?.freeRemaining??0)<=0&&hr(),It(t.ledger.intactTowers),Rt(t.ledger.pendingTowerBuilds),Bt(e=>el(e,t.regeneration));let o=t.towers.find(e=>e.status!==`empty`&&e.status!==`intact`);Ut(o?{opening:`台面開洞中`,draining:`舊幣落洞中`,rising:`幣塔旋轉升起`,closing:`升塔洞口關閉中`}[o.status]:void 0),I&&(window.__crusaderDebug=Object.freeze({score:t.scoreCount,wallet:t.ledger.balance,bodies:t.activeCoinCount,pending:t.ledger.pendingTowerBuilds,towers:t.ledger.intactTowers,paused:t.paused}))},[I,hr]),Hr=(0,K.useCallback)(t=>{In.current=requestAnimationFrame(Hr);let n=W.current;if(!r(e)||!At(e)||!n||Mn.current){Ln.current=t;return}if(Ln.current===null){Ln.current=t;return}let i=(t-Ln.current)/1e3;if(Ln.current=t,An.current&&n.getSiegeState())return;n.getDragonBonusState()||n.isFeatureInputBlocked()?_r():mr.resumeFiring(()=>Fn.current);let a=n.getDragonBellState(),o=n.getSiegeState(),c=n.tick(i),l=n.getSiegeState();if(o?.id!==l?.id||o?.revision!==l?.revision){if(vn(l),ir(),l&&l.phase!==`push`){let e=l.phase===`cleared`?`siege-clear`:o?.id===l.id?l.lastHit?`siege-hit`:`siege-miss`:`siege-enter`;or().play(e)}else l?.phase===`push`&&o?.phase===`rhythm`&&or().play(l.lastHit?`siege-hit`:`siege-miss`)}for(let e of Jn.current.observe(l))or().play(e);for(let e of Yn.current.observe(n.getWheelState()))or().play(e);cn.current.advance(n,i)&&(G(n.getDragonChoice()),sn(n.getDragonBellState()),fn(null),$n());for(let e of Un.current.observe(n.getDragonChoice(),n.getDragonBellState()))or().play(e);a?.phase===`reveal`&&!n.getDragonBellState()&&Jt(a.won?`找到小龍，巨龍接近中；尚未入帳。`:`猜鐘未中，塔保留；本次沒有撞擊或加分。`),qe.current.record(c,n.getPhysicsWorld().getElapsedSeconds());let u=0,d=0,f=0,p=0;for(let e of c){u+=e.scored.length,f+=e.keysCollected?.length??0,p+=e.keysLost?.length??0;for(let t of e.dragonAwards??[])d+=t.amount}let m=(n.getTreasuryState()?.rounds??0)>xn.current;p&&Jt(`鑰匙流失 ${p} 把，未收集、不計分。`),f&&!m&&Jt(`前口收集鑰匙，目前 ${n.getTreasuryState()?.keys??0} / 3 把。鑰匙本身不計分。`);let h=n.getTreasuryState()?.phase??`idle`;if(h===`idle`&&Sn.current===`retracting`&&Jt(`護欄已收回；再次操作才會投入一般金幣。`),Sn.current=h,m){xn.current=n.getTreasuryState().rounds;let e=n.getWheelState()?.prize;Jt(e?`三把鑰匙集滿，御庫大轉盤自動轉動：停格後獎勵金幣將從塔頂灑落。`:`三把鑰匙集滿，御庫大轉盤啟動。`)}let g=n.getWheelState();g&&g.phase!==Cn.current&&(g.phase===`stopped`?Jt(g.prize===300?`聖城大獎！御庫大轉盤停在 300 枚，金幣即將從塔頂傾瀉。`:`御庫大轉盤停在 ${g.prize} 枚，金幣將從塔頂灑落。`):g.phase===`settling`&&Jt(`轉盤獎勵 ${g.poured} 枚已全部落入盤面。`),Cn.current=g.phase);let _=c.some(e=>e.towerCollapses.some(e=>e.tier===`high`));if(_&&d===0&&or().play(`tower-collapse`),(u||d||_||m)&&Tn(e=>te(e,{front:u>0,dragon:d>0,highTower:_,treasury:m})),u>0){n.addBalance(u);let e=Xn.current.record(u,t),r=or();d===0&&!(e&&r.play(`coin-big-win`))&&t-Ze.current>=s.boardFeedback.collectSoundGapMs&&(r.play(`coin-collect`),Ze.current=t)}let v=n.getTowerManager().getSlots(),y=Vn.current,b=!1,x=!1;for(let e=0;e<v.length;e++){let t=y[e],n=v[e].status;t!==`intact`&&n===`intact`&&(b=!0),t===`intact`&&n!==`intact`&&(x=!0)}Vn.current=v.map(e=>e.status),b?(or().play(`tower-ready`),Jt(`一座幣塔已經穩固站立！`)):x&&Jt(`幣塔倒塌；普通幣以前口實收計分。`),d>0&&(Jt(`巨龍命中；已結算幣不重複計分。`),or().play(`coin-big-win`)),(u||d||m||o?.revision!==l?.revision||o?.id!==l?.id||a?.phase===`reveal`&&!n.getDragonBellState())&&$n()},[or,_r,mr,$n]),Ur=(0,K.useCallback)(()=>{Ln.current=null,Vn.current=W.current?W.current.getTowerManager().getSlots().map(e=>e.status):[],In.current=requestAnimationFrame(Hr),Bn.current=window.setInterval(Vr,cu)},[Hr,Vr]),Wr=(0,K.useCallback)(async(t=!1)=>{if(!At(e)||me.current)return;let n=++kn.current;ce.current=!1,z.current=!1,ye.current=!1,ue.current=null,de.current=Date.now(),Ae(!1),Ne.current=null,window.clearTimeout(be.current),Ir(),cn.current.reset(),un({}),fn(null),vn(null),Tt.current=!1,St(!1),Ee(!0),Nn.current=!0,qe.current=new Qc,xn.current=0,Sn.current=`idle`,Cn.current=`idle`,mn(void 0),gn(null),G(null),sn(null),Ye(qe.current.snapshot(0)),Ze.current=-1/0,Xt(iu),Jt(void 0),rn(null),De(void 0),tn.current=!1,en.current=!1,vr(),$t(e=>e+1);let a=W.current;W.current=null,a?.dispose();try{let{CoinPusherEngine:a}=await i(async()=>{let{CoinPusherEngine:e}=await import(`./engine-CO6MNU1C.js`).then(e=>e.n);return{CoinPusherEngine:e}},__vite__mapDeps([2,3,4,5,6]));if(n!==kn.current)return;let l;if(Ce){L.current??=new qn(window.location.pathname.includes(`/qa/`)?`crusader-local-save-qa`:o.database);try{let e=await L.current.read();t&&(l=e)}catch{if(t)throw Error(`無法讀取單機存檔，原資料已保留。請重新整理重試，或確認後開始新局。`);Se({state:`error`,message:`本機儲存暫時不可用，這次進度可能無法保留。`})}}if(n!==kn.current)return;let u=l?await a.restoreGame(l.engine):await a.create(pu(),ou,{dragonChance:uu(I),treasuryFeatures:!0});if(n!==kn.current||me.current||!r(e)){u.dispose();return}if(W.current=u,Un.current.reset(u.getDragonChoice(),u.getDragonBellState()),Jn.current.reset(u.getSiegeState()),Yn.current.reset(u.getWheelState()),l){k.current=!0;try{ue.current=tl(l),de.current=Date.now()}catch{ue.current=null}F.restoreExisting(),se(F.blocked),w.current.continueLocally(c.signInSequence),qe.current.restoreState(l.feedback),Fn.current=l.aim,Kt(l.aim),new URLSearchParams(window.location.search).has(`fromTrial`)&&(He.current=null,U(null)),xn.current=u.getTreasuryState()?.rounds??0,Sn.current=u.getTreasuryState()?.phase??`idle`,Cn.current=u.getWheelState()?.phase??`idle`,gn(u.getWheelState()??null);let e=new URL(window.location.href),t=e.searchParams.get(`autoResume`),n=!1;try{n=!!t&&window.sessionStorage.getItem(lu)===t,t&&window.sessionStorage.removeItem(lu)}catch{}n&&mr.armAutoFiring(),(e.searchParams.has(`fromTrial`)||t)&&(e.searchParams.delete(`fromTrial`),e.searchParams.delete(`autoResume`),window.history.replaceState(window.history.state,``,e.href)),Se({state:`saved`,message:n?`已接續試煉前進度；回到可投盤面將續投。`:`已接續上次進度；自動連投保持停止。`})}let d=!!l&&!!(u.getDragonChoice()||u.getDragonBellState()||u.getDragonBonusState())&&!tn.current;ye.current=d,d||u.setDragonBonusAvailable(tn.current),d&&(be.current=window.setTimeout(()=>{ye.current&&n===kn.current&&(ye.current=!1,u.setDragonBonusAvailable(!0),Nn.current=!1,Ee(!1),vr())},s.cinematic.loadTimeoutMs)),Ee(d),Nn.current=d,ce.current=!0,Vr(),Ke.current=document.hidden||Ke.current,vr(),Ur(),$n()}catch(e){if(n!==kn.current)return;Ee(!1),De(e instanceof Error?e.message:`無法啟動遊戲引擎，請重新整理頁面。`)}},[Ur,Ir,vr,Vr,I,Ce,$n,mr]);(0,K.useEffect)(()=>(or().unlock(),Wr(!0),()=>{kn.current+=1,$n(!0),window.clearTimeout(be.current),Ir();let e=W.current;W.current=null,e?.dispose(),Hn.current?.dispose(),Hn.current=null}),[]),(0,K.useEffect)(()=>{if(!Ce)return;let e=window.setInterval(()=>{$n()},1500),t=()=>{$n(!0)};return window.addEventListener(`pagehide`,t),()=>{window.clearInterval(e),window.removeEventListener(`pagehide`,t)}},[Ce,$n]),(0,K.useEffect)(()=>{!Te&&!Le&&a?.()},[Te,Le,a]),(0,K.useEffect)(()=>{let e=e=>{Ke.current=e,Ge(e),_r(),e&&ar(),vr(),e&&$n(Date.now()-de.current>6e4)},t=()=>e(document.hidden),n=()=>{document.hidden?e(!0):_r()},r=()=>e(document.hidden);return document.addEventListener(`visibilitychange`,t),window.addEventListener(`blur`,n),window.addEventListener(`focus`,r),()=>{document.removeEventListener(`visibilitychange`,t),window.removeEventListener(`blur`,n),window.removeEventListener(`focus`,r)}},[_r,ar,vr,$n]);let Gr=(0,K.useCallback)(()=>{sr();let e=!ct.current;ct.current=e,et(e),fe(e),or().setMuted(e),ur()},[or,ur,sr]),Kr=(0,K.useCallback)(e=>{if(!Number.isFinite(e)||Mn.current||Nn.current||Pn.current||Tt.current||kt.current)return;let t=Math.max(-1,Math.min(1,e));Fn.current=t,Kt(t)},[]),qr=(0,K.useCallback)(e=>{Mn.current||Nn.current||Pn.current||Tt.current||kt.current||Xt(t=>ru(t,e))},[]),Jr=(0,K.useCallback)(e=>{if(Number.isFinite(e)){if(mr.isAutoFiring()){Kr(e);return}hr(),Kr(e),or().unlock(),mr.handleFireStart(()=>Fn.current)}},[hr,Kr,or,mr]),Yr=(0,K.useCallback)(e=>{Kr(e),qr(e)},[Kr,qr]),Xr=(0,K.useCallback)(e=>{if(B.current)return;let t=W.current;if(t)try{t.debugForceTowerEvent(e),Jt(`測試模式：已強制排入 ${e} 座幣塔建造。`)}catch{Jt(`測試模式：已有建塔事件進行中，請稍候再試。`)}},[]),Zr=(0,K.useCallback)(()=>{let e=W.current;if(!e)return{coins:[],pusherZ:0,aim:Fn.current};let t=e.getRenderState();return{coins:t.coins,pusherZ:t.pusher.position.z,aim:Fn.current,hatches:t.hatches,dragonBonus:t.dragonBonus,treasury:t.treasury,wheel:t.wheel,dragonChoice:t.dragonChoice,dragonBells:t.dragonBells,bonusAutoSelection:cn.current.selection(),siege:e.getSiegeState(),elapsedSeconds:t.elapsedSeconds,boardFeedback:qe.current.snapshot(t.elapsedSeconds),openingHatches:t.towers.filter(e=>e.status===`opening`).map(e=>e.index)}},[]),Qr=(0,K.useCallback)(e=>{if(!B.current){if(ye.current){tn.current=e,e&&(ye.current=!1,window.clearTimeout(be.current),W.current?.setDragonBonusAvailable(!0),Nn.current=!1,Ee(!1),vr());return}tn.current=e,(e||!W.current?.getDragonChoice()&&!W.current?.getDragonBellState()&&!W.current?.getDragonBonusState())&&W.current?.setDragonBonusAvailable(e)}},[vr]),$r=(0,K.useCallback)(e=>{B.current||!I||Mn.current||Pn.current||Jt(W.current?.debugForceDragon(e)?`巨龍 BONUS`:`BONUS：需素材備妥、建塔結束且場上有完整幣塔。`)},[I]),ei=(0,K.useCallback)(()=>{B.current||!I||Mn.current||Pn.current||Jt(W.current?.debugForceWheel()?`測試：御庫大轉盤自動轉動。`:`測試：此局未啟用御庫功能。`)},[I]),ti=(0,K.useCallback)(()=>{Fe(void 0)},[]),ni=(0,K.useCallback)(e=>{Fe(e),Pn.current=!0,Mn.current=!0,_r(),ar(),W.current?.pause(),Be(!0),!en.current&&!He.current&&(en.current=!0,vt(`low`),$t(e=>e+1))},[_r,ar]),ri=(0,K.useCallback)(async()=>{if(!Me.current){Me.current=!0,B.current=!0,z.current=!0,Ir(),W.current?.pause(),H(!0);try{if(ce.current&&await Zn(),me.current){let{commitAccountRoute:t}=await i(async()=>{let{commitAccountRoute:e}=await import(`./gameHost-CS01NhuW.js`).then(e=>e.r);return{commitAccountRoute:e}},__vite__mapDeps([7,3,4,5,8,9]));t(window.sessionStorage,e,null)}e&&he(window.sessionStorage,e),window.location.reload()}catch{Ae(!0),De(`目前盤面的備份尚未成功，已保留在此頁。請勿關閉或清除資料；可再按「讀取最新進度」重試。`),H(!1),Me.current=!1}}},[e,Zn,Ir]);(0,K.useEffect)(()=>j(e,()=>{ge.current||(me.current=!0,Ir(),Qn(),De(`登入身分已變更，已暫停本頁。請讀取最新進度重新確認帳號；原帳號盤面會先保留備份，不會開始新局。`))}),[e,Ir,Qn]),(0,K.useEffect)(()=>{let e=e=>{e.persisted&&Ce&&ri()};return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)},[Ce,ri]);async function ai(t){let n=W.current,r=L.current;if(e!==null||pe.current||z.current||!n||!r||!ce.current)return;pe.current=!0,B.current=!0,u(!0),O(!1),ee(null),p(`正在接續進度…`);let a=m.current.begin();v(!0),Ir(),vr();let o=++M.current,s=kn.current,c=()=>m.current.current(a)&&M.current===o&&kn.current===s&&!z.current;try{await r.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let e=await r.archive(En.current),{inspectLoginProgress:o,commitLoginProgress:l}=await i(async()=>{let{inspectLoginProgress:e,commitLoginProgress:t}=await import(`./loginProgressRuntime-5X1ycbwE.js`);return{inspectLoginProgress:e,commitLoginProgress:t}},__vite__mapDeps([10,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,18,19,20,1,21,22])),d=await o(t,e,(k.current||F.phase===`play`)&&yi(e,ou),c,()=>r.assertCurrent());if(!c())return;if(m.current.commit(a),v(!1),d.choices.length===1){await l(t,d,d.choices[0],c,()=>r.assertCurrent()),he(window.sessionStorage,t),window.location.reload();return}ee({uid:t,generation:s,plan:d}),u(!1),p(`找到不同進度，請選擇要接續的一份。`);return}catch(e){if(!m.current.current(a))return;m.current.finish(a),v(!1),e instanceof Gn?Qn():(O(!0),p(`尚未接續成功；原盤面保留，可重試或先玩。`))}pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}async function oi(){if(m.current.cancel()){M.current++,v(!1),g(!1);try{if(!L.current||z.current||!r(e))throw Error(`Local owner unavailable`);await L.current.assertCurrent(),u(!1),p(`已返回原盤面，稍後可再接續。`),O(e===null),S(null),ee(null),w.current.continueLocally(c.signInSequence),F.continue(),se(!1),pe.current=!1,B.current=!1,Ur(),vr()}catch{u(!1),pe.current=!1,Qn(),p(`本機進度需要重新確認，暫不返回遊戲。`)}}}async function si(){let t=e,n=L.current,a=W.current;if(!t||!r(t)||!n||!a||pe.current||z.current)return;pe.current=!0,B.current=!0,u(!0),p(`正在讀取兩份進度…`),Ir(),vr();let o=m.current.begin();v(!0);let s=()=>m.current.current(o)&&r(t)&&!z.current;try{await n.write({format:`crusader-session-1`,savedAt:Date.now(),engine:a.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let e=await n.archive(En.current),{transport:r}=await i(async()=>{let{transport:e}=await import(`./cloudActions-6nEk61yL.js`);return{transport:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21])),c=await(await r(t,s)).read();if(!s())return;if(!c)throw Error(`No cloud checkpoint`);if(await n.assertCurrent(),!s())return;m.current.commit(o),v(!1),S({local:e,remote:c}),u(!1),p(``)}catch(e){if(!m.current.current(o))return;m.current.finish(o),v(!1),e instanceof Gn&&Qn(),p(`無法讀取比較資料，尚未替換任何進度。`),u(!1),pe.current=!1,z.current||(B.current=!1,Ur(),vr())}}function fi(){l||(S(null),p(``),pe.current=!1,z.current||(B.current=!1,Ur(),vr()))}async function pi(t){if(!x||!e||l||z.current)return;let n=x,a=e;u(!0),p(`正在備份並接續所選進度…`);try{let{resolveCloudPreview:e}=await i(async()=>{let{resolveCloudPreview:e}=await import(`./cloudActions-6nEk61yL.js`);return{resolveCloudPreview:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));if(await e(a,n,t,()=>!z.current&&r(a))===`reload`){window.location.reload();return}p(`所選進度已備份至雲端。`)}catch(e){e instanceof Gn&&Qn(),p(`進度已變更或備份未完成，請重新比較後再選擇。`)}S(null),u(!1),pe.current=!1,z.current||(B.current=!1,Ur(),vr())}async function mi(){let t=W.current,n=L.current;if(!(pe.current||l||!t||!n||z.current)){pe.current=!0,B.current=!0,u(!0),Ir(),vr();try{if(await n.write({format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:qe.current.saveState(),aim:Fn.current}),await n.assertCurrent(),!r(e))throw Error(`Account changed`);tr.suspend(),window.location.assign(`/crusader-coin-pusher-demo/account-delete.html`)}catch(e){e instanceof Gn&&Qn(),p(`無法開啟帳號刪除頁。尚未刪除任何資料，請稍後再試。`),pe.current=!1,B.current=!1,u(!1),z.current||(tr.resume(),Ur(),vr())}}}async function hi(t=!1){let n=W.current,a=L.current;if(pe.current||l||!n||!a||z.current||t&&!y)return;pe.current=!0,B.current=!0,u(!0),b(!1),p(t?`正在確認本機備份…`:`正在備份並登出…`),Ir(),vr();let o=!1;try{let{firebaseIdentity:s}=await i(async()=>{let{firebaseIdentity:e}=await import(`./accountDeletionRecovery-fvMTc-ZG.js`).then(e=>e.m);return{firebaseIdentity:e}},__vite__mapDeps([3,4,5])),c=await s(),l=c.currentUser?.uid,d=()=>{if(!l||c.currentUser?.uid!==l||!r(e)||z.current)throw Error(`Sign-out owner changed`)};d(),await a.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:qe.current.saveState(),aim:Fn.current}),d();let f=t;if(!t){er.current=!0;try{f=await tr.beforeSignOut()}finally{er.current=!1}}if(!f||t){if(e!==l)throw Error(`No active account backup`);let{preserveSignOutProgress:n}=await i(async()=>{let{preserveSignOutProgress:e}=await import(`./signOutBackup-DflnU7vY.js`);return{preserveSignOutProgress:e}},__vite__mapDeps([23,3,4,5,11,7,8,9,12,13,2,6]));if(await n(l,await a.archive(En.current),d),await a.assertCurrent(),d(),!t){b(!0),p(``),u(!1),pe.current=!1,B.current=!1,Ur(),vr();return}}d(),await a.assertCurrent(),d(),tr.suspend(),o=!0,t?await Promise.race([Ue(e).catch(()=>{}),new Promise(e=>setTimeout(e,5e3))]):await Gt(e),ge.current=!0;let{signOut:m}=await i(async()=>{let{signOut:e}=await import(`./index.esm-D2jqCs_E.js`);return{signOut:e}},__vite__mapDeps([0,1])),{commitAccountRoute:h}=await i(async()=>{let{commitAccountRoute:e}=await import(`./gameHost-CS01NhuW.js`).then(e=>e.r);return{commitAccountRoute:e}},__vite__mapDeps([7,3,4,5,8,9]));d(),await m(c),h(window.sessionStorage,e,null),window.location.replace(new URL(`index.html?accountChoice=1`,window.location.href).href)}catch(t){ge.current=!1,r(e)||(me.current=!0,Qn()),t instanceof Gn&&Qn(),p(`登出未完成。請先重試，暫勿關閉或清除資料。`),pe.current=!1,u(!1),o&&!z.current&&tr.resume(),z.current||(B.current=!1,Ur(),vr())}}async function gi(e){let t=A,n=L.current;if(!t||!n||l||z.current)return;let r=M.current;u(!0);try{let{commitLoginProgress:a}=await i(async()=>{let{commitLoginProgress:e}=await import(`./loginProgressRuntime-5X1ycbwE.js`);return{commitLoginProgress:e}},__vite__mapDeps([10,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,18,19,20,1,21,22]));await a(t.uid,t.plan,e,()=>M.current===r&&kn.current===t.generation&&!z.current,()=>n.assertCurrent()),he(window.sessionStorage,t.uid),window.location.reload()}catch(e){ee(null),O(!0),e instanceof Gn?Qn():p(`進度已變更或接續未完成，請重試後重新確認。原盤面與備份保留。`),pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}}(0,K.useEffect)(()=>{let t=c.user;!Ce||e!==null||!t||t.isAnonymous||c.busy||Te||Ve||Le||!ce.current||pe.current||w.current.take(t.uid,c.signInSequence)&&ai(t.uid)},[c.user?.uid,c.user?.isAnonymous,c.busy,c.signInSequence,Te,Ve,Le,e,Ce]);let _i=(0,q.jsx)(ci,{...c,entry:oe,notice:l?void 0:c.notice,busy:c.busy||l,activeOwner:e,progressStatus:l?d||`正在處理進度…`:c.busy?void 0:d,syncNeedsAttention:tr.state.phase===`conflict`,sync:e?tr.state:void 0,syncRetrying:tr.retrying,onDeleteAccount:()=>{mi()},signOutWarning:y,onCancelSignOut:()=>b(!1),onSignOutLocally:()=>{hi(!0)},onCancelConnection:_&&h?()=>{oi()}:void 0,onInspectConflict:()=>{si()},onChooseCloud:e=>{pi(e)},onCancelCloud:fi,cloudChoices:C,backups:e&&c.user?.uid===e?re:void 0,onBrowseBackups:e&&c.user?.uid===e?()=>{(async()=>{if(!(pe.current||l)){u(!0);try{let{readLoginBackups:t}=await i(async()=>{let{readLoginBackups:e}=await import(`./loginBackupRecovery-BMmH1Vac.js`);return{readLoginBackups:e}},__vite__mapDeps([24,3,4,5,11,7,8,9,12,13,2,6,14])),n=await t(e);r(e)&&ne(n)}catch{p(`無法讀取備份，原進度保留。`)}finally{u(!1)}}})()}:void 0,onRestoreBackup:t=>{(async()=>{let n=N?.find(e=>e.revision===t),a=L.current,o=W.current;if(n&&e&&r(e)&&!pe.current&&!l&&a&&o&&!z.current){pe.current=!0,B.current=!0,u(!0),Ir(),vr();try{await a.write({format:`crusader-session-1`,savedAt:Date.now(),engine:o.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let t=await a.archive(wn),{restoreLoginBackup:s}=await i(async()=>{let{restoreLoginBackup:e}=await import(`./loginBackupRecovery-BMmH1Vac.js`);return{restoreLoginBackup:e}},__vite__mapDeps([24,3,4,5,11,7,8,9,12,13,2,6,14]));await s(e,t,n,()=>!z.current&&r(e)&&At(e)),window.location.reload();return}catch(e){e instanceof Gn&&Qn(),p(`備份未能還原，原進度保留；請重新確認帳號後再試。`)}pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}})()},progressChoices:ie,onChooseProgress:e=>{gi(e)},onCancelProgress:()=>{l||!A||z.current||(M.current++,ee(null),p(`已保留目前訪客盤面。`),w.current.continueLocally(c.signInSequence),F.continue(),se(!1),pe.current=!1,B.current=!1,Ur(),vr())},restartingSignIn:l,onRestartSignIn:c.googleRestartAvailable?()=>{(async()=>{if(!pe.current&&W.current&&L.current&&ce.current&&!z.current){pe.current=!0,B.current=!0,u(!0),Ir(),vr();try{await L.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:W.current.saveGame(),feedback:qe.current.saveState(),aim:Fn.current}),window.location.reload()}catch(e){e instanceof Gn&&Qn(),p(`盤面尚未保存成功，暫不重新載入。請保留此頁後重試。`),pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}}})()}:void 0,onRetryAdoption:E&&c.user?()=>{ai(c.user.uid)}:void 0,cloudEnabled:!0,onResolve:t=>{(async()=>{if(c.user&&e===c.user.uid&&!pe.current&&W.current&&L.current&&!z.current){B.current=!0,pe.current=!0,u(!0),Ir(),vr();try{let n=W.current;await L.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let r=await L.current.archive(wn),{resolveAccountProgress:a}=await i(async()=>{let{resolveAccountProgress:e}=await import(`./cloudActions-6nEk61yL.js`);return{resolveAccountProgress:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));if(await a(e,r,t,window.localStorage)===`reload`){window.location.reload();return}p(`所選本機進度已上傳；若原有雲端版本，已先保留在本機備份。`)}catch(e){e instanceof Gn?Qn():p(`操作未確認成功，或尚無可還原備份。進度與已建立的備份保留，請重新載入後重試。`)}pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}})()},onDownload:()=>{(async()=>{if(c.user&&e===null&&!pe.current&&W.current&&L.current&&!z.current){B.current=!0,pe.current=!0,u(!0),Ir(),vr();try{let e=W.current;await L.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let{downloadAccount:t}=await i(async()=>{let{downloadAccount:e}=await import(`./cloudActions-6nEk61yL.js`);return{downloadAccount:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));await t(c.user.uid,window.sessionStorage,window.localStorage),window.location.reload()}catch(e){e instanceof Gn&&Qn(),p(`未能接續雲端進度，或此帳號已有本機存檔；原資料保留。`),pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}}})()},onUpload:rr,onSignOut:()=>{hi()},onActivate:!W.current||!L.current||z.current||!ce.current?void 0:()=>{(async()=>{if(!pe.current&&!l&&c.user&&W.current&&L.current&&!z.current){pe.current=!0,B.current=!0,u(!0),Ir(),vr();try{let{firebaseIdentity:t}=await i(async()=>{let{firebaseIdentity:e}=await import(`./accountDeletionRecovery-fvMTc-ZG.js`).then(e=>e.m);return{firebaseIdentity:e}},__vite__mapDeps([3,4,5])),n=await t(),r=c.user.uid;if(n.currentUser?.uid!==r)throw Error(`Identity changed`);let a=W.current,o=L.current,s=kn.current;await o.write({format:`crusader-session-1`,savedAt:Date.now(),engine:a.saveGame(),feedback:qe.current.saveState(),aim:Fn.current});let l=await o.archive(wn);if(n.currentUser?.uid!==r)throw Error(`Identity changed`);let{activateSyncedAccount:u}=await i(async()=>{let{activateSyncedAccount:e}=await import(`./cloudActions-6nEk61yL.js`);return{activateSyncedAccount:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));await u(r,e,l,window.sessionStorage,window.localStorage,()=>kn.current===s&&L.current===o&&!z.current,()=>o.assertCurrent()),F.blocked&&he(window.sessionStorage,r),window.location.reload()}catch(e){e instanceof Gn&&Qn(),p(`帳號進度切換未完成；原存檔保留，請重試。`),pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}}})()}}),J={wheelShow:!!hn&&hn.phase!==`idle`,cloudBackup:{phase:tr.state.phase,retrying:tr.retrying,blocked:!At(e)||c.busy||l,onRetry:rr},accountSummary:[c.user?c.user.isAnonymous?`訪客身分`:`已登入`:`本機遊玩`,c.error,d,nr].filter(Boolean).join(` · `),accountPanel:oe?void 0:_i,children:!Ve&&!oe&&(0,q.jsx)(Xl,{geometry:du,readFrame:Zr,quality:_t,dragonBonusEnabled:!0,bonusFullMotion:Dn,onDragonBonusReady:Qr,cameraResetKey:yt,cabinetOverview:Dt,onCameraBusyChange:jr,onCameraOffsetChange:wt,disabled:B.current||Re||Te||!!Le||!!nn||!!an||!!on||pn?.phase===`draining`||pn?.phase===`retracting`,onAimChange:Kr,feedback:Yt,onDropRequest:Nr,onSweepStart:Jr,onSweepEnd:_r,onReady:ti,onError:ni},Qt),wallet:jt,score:Nt,boardFeedback:Je,rearSweepEnabled:!0,dragonBonus:nn,treasuryFeatures:{treasury:pn,paidDropsPerKey:Rn.paidDropsPerKey,choice:an,bells:on,choiceSecondsLeft:ln.tower,bellSecondsLeft:ln.bell,autoSelection:dn,onChoose:(t,n)=>{!At(e)||B.current||cn.current.selection()||(_r(),W.current?.chooseDragonTower(t,n)?(G(null),sn(W.current.getDragonBellState()),Jt(`目標已選定；自動換位後再選鐘，尚未入帳。`),$n()):Jt(`目標暫時無法選取，請確認場景已就緒。`))},onGuessBell:(t,n)=>{!At(e)||B.current||cn.current.selection()||(_r(),W.current?.guessDragonBell(t,n)&&(sn(W.current.getDragonBellState()),$n()))}},trophies:wn,onSelectTrophy:e=>Tn(t=>P(t,e)),bonusFullMotion:Dn,onBonusFullMotionChange:On,towerCount:Ft,pendingTowers:Lt,regeneration:zt,constructionLabel:Vt,aim:Wt,paused:Re,muted:$e,coinSound:lt.sound,coinVolume:lt.volume,coinPreviewState:pt,onCoinSoundChange:e=>cr({sound:e}),onCoinVolumeChange:e=>cr({volume:e}),onCoinPreview:()=>void lr(),onCoinPreviewCancel:sr,quality:_t,cameraMoving:xt,cameraOffset:Ct,cabinetOverview:Dt,onCabinetOverviewChange:Mr,onCameraReset:Ar,loading:Te,error:Le,message:qt,localSave:Ce?{...xe,onSave:()=>{Se({state:`loading`,message:`正在儲存單機進度…`}),$n(!0)}}:void 0,trialsNavigation:Ce?{state:_e,onOpen:()=>{Rr()}}:void 0,navigationLocked:_e!==`idle`,feedback:Yt,testMode:I,onAimChange:Yr,onFireStart:Er,onFireEnd:Or,onFireSuspend:_r,onFireRelease:kr,autoFiring:tt,autoSpeed:it,onAutoSpeedChange:gr,onSettingsOpenChange:e=>{An.current=e,bn(e),e&&_r(),ir()},onReplayIntro:()=>Cr(`intro`),onReplayHighTower:()=>{qe.current.snapshot(0).highTowerReplayAvailable&&Cr(`high-tower`)},onMute:Gr,onQualityChange:vt,progressRecovery:V?{busy:je,conflict:ke,onRecover:()=>{ri()}}:void 0,onRetryScene:Pe&&!V?()=>{_r(),vt(`low`),$t(e=>e+1)}:void 0,onNewGame:()=>{B.current||(!Ce||window.confirm(`開始新局會取代這個瀏覽器的續玩進度（金幣、盤面、鑰匙及免費次數）。確定開始？`))&&(hr(),Wr())},...I?{onTestTowers:Xr,onTestDragon:$r,onTestWheel:ei}:{}};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xe,{navigation:_e===`idle`?void 0:{destination:`trials`,failed:_e===`error`,onRetry:()=>{Br()}}}),(0,q.jsx)(`div`,{inert:!!Ve||oe&&!Le,"aria-hidden":Ve||oe&&!Le?!0:void 0,...Et(ur),children:(0,q.jsx)(ii,{...J})}),oe&&!Le&&(0,q.jsx)(li,{busy:!!A||l||c.busy&&!c.initializing,preparing:!ce.current||!W.current||!L.current,accountProgress:!!e,onContinue:()=>{(async()=>{if(!(!At(e)||pe.current||l||c.busy&&!c.initializing||!W.current||!L.current||!ce.current||z.current)){pe.current=!0,B.current=!0,u(!0),Ir(),vr();try{await L.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:W.current.saveGame(),feedback:qe.current.saveState(),aim:Fn.current}),await L.current.assertCurrent(),w.current.continueLocally(c.signInSequence),F.continue(),se(!1)}catch(e){e instanceof Gn?Qn():p(`尚未保存盤面，請再試一次。`)}finally{pe.current=!1,u(!1),z.current||(B.current=!1,Ur(),vr())}}})()},children:_i}),_n&&!Ve&&!oe&&!yn&&(0,q.jsx)(Lr,{frame:_n,suspended:Re||Te||!!Le,onAudioUnlock:ur,onStrike:(t,n)=>{let r=W.current;if(!(!At(e)||!r||Mn.current||An.current||B.current)&&r.strikeSiege(t,n)){let e=r.getSiegeState();vn(e),ir(),or().play(e?.lastHit?`siege-hit`:`siege-miss`),$n()}}}),Ve&&(0,q.jsx)(Xc,{kind:Ve.kind,suspended:We,onComplete:wr,soundEnabled:!$e,onSoundToggle:fr,onAudioUnlock:ur,onPlaybackTime:dr},Ve.id)]})}export{au as n,mu as t};