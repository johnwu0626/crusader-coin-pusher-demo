const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-D2jqCs_E.js","assets/index.esm-5hTPqsnb.js","assets/engine-D9xr9Izo.js","assets/accountDeletionRecovery-fvMTc-ZG.js","assets/checkpointCodec-CtcDVfT_.js","assets/accountDeletionRecovery-B6-itbSk.css","assets/towerStructures-CBVbmO_i.js","assets/gameHost-m7_8YWH9.js","assets/gameStorageScope-5jy167aW.js","assets/gameHost-ddLCKsNx.css","assets/loginProgressRuntime-DOz7gxp_.js","assets/gameArchive-DHe0HyaI.js","assets/session-DfeHMTyO.js","assets/session-CwnimWgw.css","assets/accountRecovery-DP_T_sL1.js","assets/accountRepositories-3j0vQHw7.js","assets/localGameStore-CQXSqBJb.js","assets/sharedRepository-GUIkixdm.js","assets/cloudActions-wbrkYwGq.js","assets/cloudDatabase-BFFXrDVW.js","assets/index.esm-D8oeDOV7.js","assets/firestoreCheckpoint-DAkmyfYN.js","assets/autoSyncRuntime-DFNEpLVI.js","assets/signOutBackup-9J_XE54b.js","assets/loginBackupRecovery-BdIkU3tX.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,_ as n,f as r,g as i,p as a,v as o,y as s}from"./accountDeletionRecovery-fvMTc-ZG.js";import{$ as c,$n as l,A as u,An as d,B as f,Bn as p,C as m,Cn as h,Ct as g,D as _,Dt as v,E as y,En as b,F as x,Fn as S,Fr as C,Gn as w,Gr as T,H as E,Hn as D,Hr as O,I as k,In as A,Ir as j,J as M,Jn as N,Jr as ee,K as te,Kn as P,L as ne,Ln as F,Lr as re,M as ie,Mn as ae,Mt as oe,N as I,Nn as se,O as ce,On as L,P as R,Pn as le,Pr as ue,Q as de,Qn as z,R as B,Rn as fe,Rr as pe,S as me,Sn as he,St as ge,T as _e,Tn as ve,Tt as ye,U as be,Un as xe,Ur as Se,V as Ce,W as we,Wn as Te,Wr as Ee,X as De,Xn as Oe,Xr as ke,Y as V,Yn as Ae,Yr as je,Z as Me,Zn as Ne,Zr as H,_ as Pe,_r as Fe,_t as Ie,ar as Le,at as U,b as Re,br as ze,bt as Be,c as Ve,cn as He,cr as Ue,ct as We,d as Ge,dn as Ke,dr as qe,dt as Je,er as Ye,et as Xe,f as Ze,fr as Qe,ft as $e,g as et,gn as tt,gr as nt,gt as rt,h as it,hn as at,hr as ot,ht as st,ir as ct,it as lt,j as ut,jn as dt,jt as ft,k as pt,kn as mt,kr as ht,l as gt,ln as _t,lr as vt,lt as yt,mn as bt,mr as xt,mt as St,nr as Ct,nt as wt,o as Tt,or as Et,ot as Dt,p as Ot,pn as kt,pt as At,q as jt,qn as W,qr as Mt,rr as Nt,rt as Pt,sr as Ft,st as It,tr as Lt,tt as Rt,u as zt,un as Bt,ur as Vt,ut as Ht,v as Ut,vt as Wt,w as Gt,wn as Kt,wt as qt,x as Jt,xn as Yt,xt as Xt,y as Zt,yr as Qt,yt as $t,zr as G}from"./gameHost-m7_8YWH9.js";import{$ as en,A as tn,C as nn,D as K,E as rn,F as an,G as on,H as sn,J as cn,L as ln,O as un,P as dn,Q as fn,T as pn,U as mn,W as hn,Y as gn,Z as _n,at as vn,ct as yn,dt as bn,et as xn,ft as Sn,ht as Cn,k as wn,m as Tn,mt as En,n as Dn,ot as On,pt as kn,s as An,t as jn,w as Mn,x as Nn,z as Pn}from"./towerStructures-CBVbmO_i.js";/* empty css                     */import{n as Fn,o as In,r as Ln,t as Rn}from"./nativeGoogleSignIn-Cp5WVpTN.js";import{t as zn}from"./gameStorageScope-5jy167aW.js";import{n as Bn,r as Vn,t as Hn}from"./localGameStore-CQXSqBJb.js";import{n as Un}from"./checkpointCodec-CtcDVfT_.js";var q=t(),Wn=[`bell-enter`,`bell-select`,`bell-cover`,`bell-swap`,`bell-prompt`,`bell-found`,`bell-miss`],Gn=e=>Wn.includes(e),Kn=Math.PI*2;function qn(e,t){let n=e===`bell-miss`?1.25:e===`bell-found`?.95:e===`bell-enter`?.9:.42,r=new Float32Array(Math.ceil(t*n)),i=0,a=7413,o=0,s={"bell-enter":146.83,"bell-select":220,"bell-cover":98,"bell-swap":180,"bell-prompt":293.66,"bell-found":293.66,"bell-miss":155.56}[e];for(let c=0;c<r.length;c++){let l=c/t,u=l/n,d=Math.min(1,l/.035)*Math.max(0,1-u)**1.7;a=Math.imul(a,1664525)+1013904223>>>0,o=o*.96+(a/4294967295*2-1)*.04;let f=e===`bell-miss`?s*(1-.38*u)*(1+.009*Math.sin(Kn*4*l)):e===`bell-found`?s*(u<.28?1:u<.55?1.25:1.5):s;i+=Kn*f/t;let p=Math.sin(i)*.65+Math.sin(i*2)*.2+Math.sin(i*3)*.1,m=e===`bell-swap`?o*1.8+Math.sin(i)*.18:e===`bell-cover`?p*.6+o*.8:e===`bell-miss`?p+Math.sin(i*1.006)*.15:p+Math.sin(i*2.76)*.08;r[c]=m*d*(e===`bell-swap`?.12:.22)}return r}function Jn(e=22050){let t=Math.round(24*e),n=[new Float32Array(t),new Float32Array(t)],r=[[146.83,174.61,220],[130.81,174.61,220],[130.81,164.81,196],[110,146.83,164.81]],i=(r,i,a,o,s,c)=>{for(let l=0;l<i*e;l++){let u=l/e,d=u/i,f=(Math.round(r*e)+l)%t,p=c?Math.min(1,u/.012)*Math.exp(-4*d)*(1-d):Math.sin(Math.PI*d)**2,m=Kn*a*u,h=Math.sin(m)*.7+Math.sin(m*2+.08*Math.sin(Kn*.7*u))*.16+Math.sin(m*3)*.045;n[0][f]+=h*p*o*Math.sqrt((1-s)/2),n[1][f]+=h*p*o*Math.sqrt((1+s)/2)}};for(let e=0;e<4;e++){let t=r[e];t.forEach((t,n)=>i(e*6,8,t/2,.075,(n-1)*.6,!1));for(let n=0;n<8;n++)i(e*6+n*.75,1.4,t[[0,2,1,2,0,1,2,1][n]]*2,.065,n%2?.4:-.4,!0);i(e*6,1.8,55,.09,0,!0),i(e*6+3,1.2,73.415,.04,0,!0)}return[...n]}var Yn=[`siege-enter`,`siege-hit`,`siege-miss`,`siege-push`,`siege-clear`,`siege-blast`],Xn=e=>Yn.includes(e);function Zn(e,t){if(e===`siege-blast`)return Qn(t);let n=e===`siege-clear`?1.4:e===`siege-enter`?1.2:.65,r=new Float32Array(Math.ceil(n*t)),i=0,a=81537,o=0;for(let s=0;s<r.length;s++){let c=s/t,l=c/n;a=Math.imul(a,1664525)+1013904223>>>0,o=.9*o+.1*(a/4294967295*2-1);let u=e===`siege-hit`||e===`siege-clear`;i+=Math.PI*2*(u?98:65)*(1+.8*Math.exp(-c*30))/t;let d=Math.sin(i)*Math.exp(-c*7)+o*.8*Math.exp(-c*22),f=u?(Math.sin(c*2*Math.PI*196)+.45*Math.sin(c*2*Math.PI*293.66))*.22*Math.exp(-c*2):0;r[s]=(d*.45+f)*Math.min(1,c/.006)*(1-l)**1.5*.7}return r}function Qn(e){let t=1.15,n=new Float32Array(Math.ceil(t*e)),r=97291,i=0,a=0,o=1-Math.exp(-2*Math.PI*650/e);for(let s=0;s<n.length;s++){let c=s/e;r=Math.imul(r,1664525)+1013904223>>>0;let l=r/4294967295*2-1;i+=o*(l-i),a+=2*Math.PI*(45+80*Math.exp(-c*18))/e;let u=Math.sin(a)*Math.exp(-c*9)*.42,d=i*Math.exp(-c*4)*.68,f=l*Math.max(0,Math.sin(c*2*Math.PI*31))*Math.exp(-c*7)*.12,p=Math.min(1,c/.007)*(1-c/t)**2;n[s]=(u+d+f)*p*.62}return n}function $n(e=22050){let t=Math.round(9.6*e),n=new Float32Array(t),r=new Float32Array(t),i=Zn(`siege-push`,e);for(let a=0;a<16;a++)for(let o=0;o<i.length;o++){let s=(Math.round(a*.6*e)+o)%t,c=i[o]*(a%4==0?.55:.25);n[s]+=c,r[s]+=c}for(let i=0;i<t;i++){let t=i/e,a=[73.415,65.406,58.27,65.406][Math.floor(t/2.4)],o=Math.sin(t%2.4*Math.PI/2.4)**2,s=(Math.sin(2*Math.PI*a*t)+.3*Math.sin(2*Math.PI*a*1.5*t))*.06*o;n[i]+=s,r[i]+=s*.94}return[n,r]}var er=e=>e===`game`||e===`bells`||e===`siege`,tr={game:40},nr=(e,t)=>Math.min(t.duration,tr[e]??t.duration),rr={intro:`./assets/audio/treasury-intro-v1.m4a`,game:`./assets/audio/treasury-game-loop-v1.m4a`,dragon:`./assets/audio/treasury-dragon-v1.m4a`},ir=class{ctx;output;buffers=new Map;loading=new Set;failed=new Set;active=null;retiring=new Set;track=null;offset=0;suspended=!1;muted=!1;ducked=!1;disposed=!1;constructor(e,t){this.ctx=e,this.output=t}setTrack(e,t){this.disposed||(e!==this.track&&(this.fadeOut(),this.track=e,this.offset=0),t!==void 0&&Number.isFinite(t)&&(this.offset=Math.max(0,t),this.active&&Math.abs(this.position()-this.offset)>.3&&this.stopCurrent()),e&&!this.buffers.has(e)&&this.load(e),this.refresh())}async load(e){if(!(this.loading.has(e)||this.failed.has(e))){this.loading.add(e);try{if(e===`bells`||e===`siege`){let t=e===`siege`?$n():Jn(),n=this.ctx.createBuffer(2,t[0].length,22050);t.forEach((e,t)=>n.getChannelData(t).set(e)),this.buffers.set(e,n),this.refresh();return}let t=await fetch(rr[e]);if(!t.ok)throw Error(`Music asset unavailable`);let n=await t.arrayBuffer();if(this.disposed)return;let r=await this.ctx.decodeAudioData(n);if(this.disposed)return;this.buffers.set(e,r),this.refresh()}catch{this.disposed||this.failed.add(e)}finally{this.loading.delete(e)}}}setSuspended(e){e!==this.suspended&&(e&&this.freeze(),this.suspended=e,this.refresh())}setMuted(e){e!==this.muted&&(e&&this.freeze(),this.muted=e,this.refresh())}setDucked(e){this.ducked=e,this.active&&this.ramp(this.active,this.volume(),.12)}volume(){return(this.track===`siege`?.45:this.track===`bells`||this.track===`game`?.38:.8)*(this.ducked?.23:1)}position(){if(!this.active)return this.offset;let e=this.active.offset+Math.max(0,this.ctx.currentTime-this.active.started),t=this.buffers.get(this.active.track);return er(this.active.track)&&t?e%nr(this.active.track,t):e}ramp(e,t,n){let r=e.gain.gain,i=this.ctx.currentTime;r.cancelScheduledValues(i),r.setValueAtTime(r.value,i),r.linearRampToValueAtTime(t,i+n)}cleanup(e,t=!0){if(e.source.onended=null,t)try{e.source.stop()}catch{}e.source.disconnect(),e.gain.disconnect(),this.retiring.delete(e),this.active===e&&(this.active=null)}stopCurrent(){this.active&&this.cleanup(this.active)}fadeOut(){for(let e of[...this.retiring])this.cleanup(e);let e=this.active;if(e){this.active=null,this.retiring.add(e),this.ramp(e,0,.22);try{e.source.stop(this.ctx.currentTime+.23)}catch{this.cleanup(e)}}}freeze(){this.offset=this.position(),this.stopCurrent();for(let e of[...this.retiring])this.cleanup(e)}refresh(){if(this.disposed||this.muted||this.suspended||!this.track||this.active||this.ctx.state!==`running`)return;let e=this.buffers.get(this.track);if(!e||!er(this.track)&&this.offset>=e.duration)return;let t=this.ctx.createBufferSource(),n=this.ctx.createGain(),r=er(this.track)?this.offset%nr(this.track,e):this.offset;t.buffer=e,t.loop=er(this.track),t.loop&&(t.loopEnd=nr(this.track,e)),t.connect(n),n.connect(this.output),n.gain.value=0;let i={source:t,gain:n,track:this.track,offset:r,started:this.ctx.currentTime};this.active=i,t.onended=()=>{this.active===i&&(this.offset=er(i.track)?this.position():e.duration),this.cleanup(i,!1)};try{t.start(0,r),this.ramp(i,this.volume(),.3)}catch{this.cleanup(i)}}getState(){return{track:this.track,playing:this.active?.track??null,offset:this.position(),voices:Number(!!this.active)+this.retiring.size,suspended:this.suspended,muted:this.muted,ducked:this.ducked,loaded:[...this.buffers.keys()],failed:[...this.failed]}}dispose(){this.disposed||(this.disposed=!0,this.freeze(),this.buffers.clear())}};function ar(e){let t=new Float32Array(Math.ceil(e*1.15)),n=7123,r=0,i=0;for(let a=0;a<t.length;a++){let o=a/e;n=Math.imul(n,1664525)+1013904223>>>0,r+=(n/4294967295*2-1-r)*.06,i+=2*Math.PI*(42+48*Math.exp(-o*6))/e;let s=Math.min(1,o/.012),c=Math.min(1,(1.15-o)/.15);t[a]=s*c*(.09*Math.sin(i)*Math.exp(-o*5)+.12*r*Math.exp(-o*3))}return t}var or=[{id:`soft`,label:`柔和落槽`,sample:`coin-soft`,file:`./assets/audio/coin-soft-slot-v1.wav`},{id:`dry`,label:`乾脆短點`,sample:`coin-dry-click`,file:`./assets/audio/coin-dry-click-v1.wav`},{id:`metal`,label:`原金屬聲（低音量）`,sample:`coin-drop`,file:`./assets/audio/coin-insert-v2.wav`}],sr=.32,cr={sound:`soft`,volume:.5},lr=`crusader.coin-audio.v1`,ur=e=>or.some(t=>t.id===e),dr=e=>Number.isFinite(e)?Math.max(0,Math.min(1,e)):cr.volume;function fr(){try{let e=JSON.parse(localStorage.getItem(lr)??`null`);return{sound:ur(e?.sound)?e.sound:cr.sound,volume:typeof e?.volume==`number`?dr(e.volume):cr.volume}}catch{return{...cr}}}function pr(e){try{localStorage.setItem(lr,JSON.stringify(e))}catch{}}var mr={"coin-drop":`./assets/audio/coin-insert-v2.wav`,"coin-collect":`./assets/audio/coin-collect.wav`,"tower-ready":`./assets/audio/tower-ready.wav`,"coin-big-win":`./assets/audio/coin-big-win-c.m4a`,"coin-soft":`./assets/audio/coin-soft-slot-v1.wav`,"coin-dry-click":`./assets/audio/coin-dry-click-v1.wav`},hr=6,gr=class{ctx=null;masterGain=null;buffers=new Map;loadPromise=null;coinSound=cr.sound;coinVolume=cr.volume;loadStarted=!1;voices=new Map;muted=!1;disposed=!1;music=null;musicTrack=null;musicPosition;musicSuspended=!1;dropVariant=0;syncContextState=()=>{if(this.disposed||!this.ctx)return;let e=this.ctx.state===`running`;e||this.stopAll(),this.music?.setSuspended(this.musicSuspended||!e),e&&this.music?.refresh()};unlock(){if(!this.disposed){if(!this.ctx)try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=+!this.muted,this.masterGain.connect(this.ctx.destination),this.music=new ir(this.ctx,this.masterGain),this.ctx.onstatechange=this.syncContextState,this.music.setMuted(this.muted),this.music.setSuspended(this.musicSuspended||this.ctx.state!==`running`),this.music.setTrack(this.musicTrack,this.musicPosition)}catch{this.ctx=null,this.masterGain=null;return}if(this.syncContextState(),this.ctx.state!==`running`&&this.ctx.state!==`closed`){let e=this.ctx;e.resume().then(()=>{!this.disposed&&this.ctx===e&&this.syncContextState()}).catch(()=>{})}this.loadStarted||(this.loadStarted=!0,this.loadPromise=this.loadAll().catch(()=>{}))}}setMuted(e){this.muted=e,this.masterGain&&(this.masterGain.gain.value=+!e),e&&this.stopAll(),this.music?.setMuted(e)}setCoinSound(e){ur(e)&&e!==this.coinSound&&(this.stopCoinDrop(),this.coinSound=e)}setCoinVolume(e){this.coinVolume=dr(e);let t=[...this.voices.values()].some(e=>e.name===`coin-big-win`);this.voices.forEach(e=>{e.name===`coin-drop`&&(e.gain.gain.value=this.coinVolume*sr*(t?.3:1))})}stopCoinDrop(){for(let[e,t]of this.voices)t.name===`coin-drop`&&this.stopVoice(e)}async prepareCoinSound(){if(!this.ctx||this.disposed)return!1;if(this.buffers.has(or.find(e=>e.id===this.coinSound).sample))return!0;let e;try{return await Promise.race([this.loadPromise,new Promise(t=>{e=setTimeout(t,4e3)})]),!this.disposed&&this.buffers.has(or.find(e=>e.id===this.coinSound).sample)}finally{clearTimeout(e)}}setMusic(e,t){this.musicTrack=e,this.musicPosition=t,this.music?.setTrack(e,t)}setMusicSuspended(e){this.musicSuspended=e,this.music?.setSuspended(e||this.ctx?.state!==`running`)}async loadAll(){let e=this.ctx;e&&await Promise.all(Object.keys(mr).map(async t=>{try{let n=await fetch(mr[t]);if(!n.ok)return;let r=await n.arrayBuffer();if(this.disposed)return;let i=await e.decodeAudioData(r);if(this.disposed)return;this.buffers.set(t,i)}catch{}}))}play(e){if(this.disposed||this.muted||!this.ctx||!this.masterGain||this.ctx.state!==`running`||e===`coin-drop`&&this.coinVolume===0)return!1;if((e===`tower-collapse`||Gn(e)||Xn(e))&&!this.buffers.has(e))try{let t=e===`tower-collapse`?ar(this.ctx.sampleRate):Xn(e)?Zn(e,this.ctx.sampleRate):qn(e,this.ctx.sampleRate),n=this.ctx.createBuffer(1,t.length,this.ctx.sampleRate);n.getChannelData(0).set(t),this.buffers.set(e,n)}catch{return!1}let t=this.buffers.get(e===`coin-drop`?or.find(e=>e.id===this.coinSound).sample:e);if(!t)return!1;let n=[...this.voices.values()].some(e=>e.name===`coin-big-win`);if(n&&e!==`coin-drop`)return!1;if(e===`coin-drop`){let e=[...this.voices].filter(([,e])=>e.name===`coin-drop`);for(;e.length>=2;)this.stopVoice(e.shift()[0])}if(e===`coin-big-win`)this.stopAll();else if(this.voices.size>=hr)return!1;let r=this.ctx.createBufferSource(),i=this.ctx.createGain();r.buffer=t,e===`coin-drop`&&(r.playbackRate.value=[1,.97,1.035,1.015][this.dropVariant++%4]),i.gain.value=e===`coin-drop`?this.coinVolume*sr*(n?.3:1):1,r.connect(i),i.connect(this.masterGain),this.voices.set(r,{name:e,gain:i}),r.onended=()=>{this.voices.delete(r)&&(r.disconnect(),i.disconnect(),e===`coin-big-win`&&this.music?.setDucked(!1))};try{return r.start(),e===`coin-big-win`&&this.music?.setDucked(!0),!0}catch{return this.stopVoice(r),!1}}stopVoice(e){let t=this.voices.get(e);if(t){this.voices.delete(e),e.onended=null;try{e.stop()}catch{}e.disconnect(),t.gain.disconnect()}}stopAll(){for(let e of this.voices.keys())this.stopVoice(e);this.music?.setDucked(!1)}getPlaybackState(){return{loaded:[...this.buffers.keys()],playing:[...this.voices.values()].map(e=>e.name),contextState:this.ctx?.state??`locked`,muted:this.muted,music:this.music?.getState()??null,coinSound:this.coinSound,coinVolume:this.coinVolume,coinGain:this.coinVolume*sr}}dispose(){this.disposed=!0,this.stopAll(),this.music?.dispose(),this.music=null,this.ctx&&(this.ctx.onstatechange=null),this.ctx?.close().catch(()=>{}),this.ctx=null,this.masterGain=null,this.buffers.clear(),this.loadStarted=!1}},_r=(e,t)=>t?`${t.id}:${t.phase}:${t.bellSlots.join()}:${t.swap?.a}:${t.swap?.b}`:e?`choice:${e.id}`:``,vr=class{previous=``;pendingResult=null;reset(e,t){this.previous=_r(e,t),this.pendingResult=null}observe(e,t){let n=_r(e,t),r=[];return n!==this.previous&&(this.previous=n,this.pendingResult=null,!t&&e?r.push(`bell-enter`):t?.phase===`show`?r.push(`bell-select`):t?.phase===`cover`?r.push(`bell-cover`):t?.phase===`shuffle`?r.push(`bell-swap`):t?.phase===`guess`?r.push(`bell-prompt`):t?.phase===`reveal`&&(this.pendingResult=t.id)),t?.phase===`reveal`&&this.pendingResult===t.id&&t.elapsed>=.24&&t.won!==null&&(r.push(t.won?`bell-found`:`bell-miss`),this.pendingResult=null),r}},yr=s.siege.bomb,br=e=>Math.max(0,Math.min(1,e)),xr=e=>{let t=br(e);return t*t*(3-2*t)},Sr=e=>Math.max(1,Math.min(yr.maxCount,Math.floor(e))),Cr=e=>yr.anticipationSeconds+yr.dropSeconds+e*yr.staggerSeconds;function wr(e,t=!1){if(!e||e.phase===`rhythm`)return[];let n=e.phase===`cleared`;return Array.from({length:Sr(e.hits)},(r,i)=>{let a=yr.anticipationSeconds+i*yr.staggerSeconds,o=e.elapsed-Cr(i),s=n?1:xr(o/yr.smokeBloomSeconds);return{index:i,bomb:!n&&o<0&&(t||e.elapsed>=a),drop:t?1:br((e.elapsed-a)/yr.dropSeconds),blast:!t&&!n&&o>=0&&o<yr.blastSeconds,blastProgress:br(o/yr.blastSeconds),smoke:s*(n?1-xr(e.elapsed/yr.fadeSeconds):1),bloom:s,drift:t||n?0:Math.max(0,o)*yr.smokeDriftRate}})}var Tr=class{id=null;consumed=0;elapsed=0;reset(e){this.id=e?.id??null,this.elapsed=e?.phase===`push`?e.elapsed:0,this.consumed=e?.phase===`push`?this.due(e):0}due(e){let t=0;for(;t<Sr(e.hits)&&e.elapsed>=Cr(t);)t++;return t}observe(e){if(!e||e.phase!==`push`||(this.id!==e.id&&(this.id=e.id,this.consumed=0,this.elapsed=0),e.elapsed<this.elapsed))return this.reset(e),[];this.elapsed=e.elapsed;let t=this.due(e),n=[];for(let r=this.consumed;r<t;r++)e.elapsed-Cr(r)<=s.siege.bomb.audioFreshSeconds&&n.push(`siege-blast`);return this.consumed=t,n}},J=n(),Er=o({...s.customProperties,...s.siege.css});function Dr({frame:e,suspended:t,onStrike:n,onAudioUnlock:r}){let i=(0,q.useRef)(null),a=(0,q.useRef)(null),o=(0,q.useRef)({frame:e,suspended:t,at:performance.now()});return o.current={frame:e,suspended:t,at:performance.now()},(0,q.useEffect)(()=>{let e=()=>{let e=o.current;if(!i.current)return;let t=e.frame.elapsed+(e.suspended?0:Math.min(s.siege.interpolationLimit,(performance.now()-e.at)/1e3));i.current.style.left=`${wn.needle(t)*100}%`};return je.ticker.add(e),()=>je.ticker.remove(e)},[]),(0,q.useEffect)(()=>{if(!a.current||t||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let n=je.fromTo(a.current,{scale:e.lastHit?s.siege.hitScale:1},{scale:1,duration:s.siege.hitSeconds,ease:`power2.out`});return()=>{n.kill()}},[e.revision,t]),e.phase===`rhythm`?(0,J.jsxs)(`section`,{className:`siege-panel`,style:Er,"data-phase":e.phase,"data-suspended":t,"aria-label":`攻城疏通任務`,children:[(0,J.jsxs)(`header`,{children:[(0,J.jsx)(`span`,{className:`siege-panel__seal`,"aria-hidden":`true`,children:`✠`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`small`,{children:`免費疏通 · 不扣幣`}),(0,J.jsx)(`h2`,{children:`攻城戰鼓`})]}),(0,J.jsx)(`span`,{className:`siege-panel__stars`,"aria-label":`命中 ${e.hits} 次`,children:[0,1,2].map(t=>(0,J.jsx)(`i`,{"data-lit":t<e.hits,children:`◆`},t))})]}),(0,J.jsxs)(`div`,{className:`siege-panel__play`,children:[(0,J.jsxs)(`button`,{ref:a,type:`button`,className:`siege-panel__drum`,disabled:t,"aria-label":`敲響戰鼓`,onPointerDown:()=>r?.(),onClick:()=>{r?.(),n(e.id,e.attempt)},children:[(0,J.jsx)(`span`,{"aria-hidden":`true`,children:`✠`}),(0,J.jsx)(`b`,{children:`敲鼓`})]}),(0,J.jsxs)(`div`,{className:`siege-panel__timing`,children:[(0,J.jsx)(`p`,{children:`指針進入金色區時敲鼓`}),(0,J.jsxs)(`div`,{className:`siege-panel__track`,"aria-hidden":`true`,children:[(0,J.jsx)(`b`,{style:{left:`${(.5-un.hitWindow)*100}%`,width:`${un.hitWindow*200}%`}}),(0,J.jsx)(`span`,{ref:i})]}),(0,J.jsxs)(`p`,{children:[(0,J.jsxs)(`strong`,{children:[`剩餘 `,3-e.attempt,` 次`]}),` · `,Math.max(0,Math.ceil(un.attemptSeconds-e.elapsed)),` 秒`]}),(0,J.jsx)(`p`,{children:e.lastHit===null?`等待敲鼓`:`第 ${e.attempt} 拍：${e.lastHit?`命中`:`錯過`}`})]})]}),(0,J.jsx)(`p`,{className:`siege-panel__note`,children:`命中可強化推進；未操作自動使用基本推進。`}),(0,J.jsx)(`footer`,{children:`普通幣以前口實收計分，演出本身不加分。`})]}):(0,J.jsx)(`div`,{className:`siege-panel__status`,style:Er,role:`status`,"aria-live":`polite`,"data-phase":e.phase,children:e.phase===`cleared`?`空間已釋放`:`${e.hits?`強化疏通`:`基本疏通`}，${Sr(e.hits)} 顆炸彈，疏通中。`})}var Or=Object.freeze({threshold:100,windowMs:3e3,quietGapMs:1200}),kr=class{receipts=[];total=0;lastAt=null;celebrated=!1;record(e,t){if(!Number.isSafeInteger(e)||e<=0||!Number.isFinite(t)||t<0)return!1;for(this.lastAt!==null&&(t<this.lastAt||t-this.lastAt>=Or.quietGapMs)&&this.reset(),this.lastAt=t;this.receipts.length&&this.receipts[0].at<t-Or.windowMs;)this.total-=this.receipts.shift().count;let n=this.receipts[this.receipts.length-1];return n?.at===t?n.count+=e:this.receipts.push({at:t,count:e}),this.total+=e,!this.celebrated&&this.total>=Or.threshold&&(this.celebrated=!0,!0)}reset(){this.receipts=[],this.total=0,this.lastAt=null,this.celebrated=!1}},Ar=class{isDisabled;onStart;onEnd;onRelease;owner=null;constructor(e,t,n,r){this.isDisabled=e,this.onStart=t,this.onEnd=n,this.onRelease=r}press(e){return this.isDisabled()||this.owner?!1:(this.owner=e,this.onStart(),!0)}release(e){this.matches(e)&&(this.owner=null,this.isDisabled()?this.onEnd():this.onRelease?this.onRelease(e):this.onEnd())}matches(e){return this.owner?.kind===`pointer`&&e.kind===`pointer`?this.owner.id===e.id:this.owner?.kind===`keyboard`&&e.kind===`keyboard`&&this.owner.key===e.key}cancelSource(e){this.matches(e)&&this.cancel()}cancel(){this.owner&&(this.owner=null,this.onEnd())}},jr={"feature-wait":`請先完成選塔或等候護欄收回；沒有扣幣。`,"no-balance":`金幣已用盡，開始新局吧！`,"board-full":`場面已滿，請稍候金幣清空。`,"invalid-position":`落點無效，請重新選擇。`,"drop-blocked":`落點暫時被金幣擋住，請稍等或改變落點。`};function Mr(e){if(e.error)return{kind:`unavailable`,symbol:`!`,label:`暫時無法進入寶庫`};if(e.loading)return{kind:`unavailable`,symbol:`…`,label:`正在準備金幣與機台`};if(e.paused)return{kind:`unavailable`,symbol:`—`,label:`返回遊戲後自動接續`};if(e.settingsOpen)return{kind:`unavailable`,symbol:`—`,label:`設定與玩法`};let t=e.feedback?.sequence===e.dismissedSequence?void 0:e.feedback;return e.wallet<=0&&!e.freeRemaining&&(t?.kind!==`blocked`||t.reason!==`no-balance`)?{kind:`unavailable`,symbol:`—`,label:jr[`no-balance`]}:t?.kind===`accepted`?{kind:`accepted`,symbol:`✓`,label:`已投幣`}:t?.kind===`aim-only`?{kind:`aim-only`,symbol:`↔`,label:`僅瞄準・未投幣`}:t?.kind===`blocked`?{kind:`blocked`,symbol:`!`,label:`受阻・未扣幣`,detail:jr[t.reason]}:{kind:`idle`,symbol:`↔`,label:e.rearSweepEnabled?`後方按住滑投・其餘盤面拖曳轉鏡頭`:`點擊幣床投幣・拖曳轉動鏡頭`}}function Nr(e,t){return e&&t?.kind===`blocked`&&t.reason===`drop-blocked`}var Pr=class{changed;visible=!1;active=!1;timer;constructor(e){this.changed=e}update(e){e!==this.active&&(this.active=e,this.timer!==void 0&&clearTimeout(this.timer),this.timer=void 0,this.visible=!1,e&&(this.timer=setTimeout(()=>{this.timer=void 0,this.active&&(this.visible=!0,this.changed())},800)))}dispose(){this.update(!1)}};function Fr(e,t){let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=je.context(()=>{!n.matches&&!document.hidden&&t()},e),i=()=>r.revert(),a=()=>{document.hidden&&i()};return n.addEventListener(`change`,i),document.addEventListener(`visibilitychange`,a),window.addEventListener(`blur`,i),()=>{n.removeEventListener(`change`,i),document.removeEventListener(`visibilitychange`,a),window.removeEventListener(`blur`,i),r.revert()}}function Ir(){let e=s.motion,t=s.interaction.feedbackPulseMs/1e3,n={scale:e.restScale,opacity:e.visibleOpacity},r=je.timeline({paused:!0}).fromTo(n,{scale:e.restScale,opacity:e.visibleOpacity},{scale:s.interaction.feedbackPulseScale,opacity:e.expiredOpacity,duration:t,ease:e.ringEase,immediateRender:!1}),i=!1;return{sample(t,a){let o=!i&&t>=0&&t<s.interaction.feedbackPulseMs;return o&&r.seek(t/1e3,!0),{active:o,scale:o&&!a?n.scale:e.restScale,opacity:o?a?e.visibleOpacity:n.opacity:e.expiredOpacity}},dispose(){i||(i=!0,r.kill())}}}function Lr(e){let t=(0,q.useRef)(null),n=(0,q.useRef)(e.score),r=s.motion;return(0,q.useLayoutEffect)(()=>{if(!t.current)return;let e=t.current.querySelector(`.crusader-game__brand`),n=t.current.querySelector(`.crusader-game__console-inner`);return Fr(t.current,()=>{je.timeline({defaults:{duration:r.entranceSeconds,ease:r.ease}}).fromTo(e,{y:-r.entranceY},{y:r.restY},0).fromTo(n,{y:r.entranceY},{y:r.restY},0)})},[r]),(0,q.useLayoutEffect)(()=>{if(!t.current||e.feedbackKind!==`accepted`&&e.feedbackKind!==`blocked`)return;let n=t.current.querySelector(`.crusader-game__feedback-label`);if(n)return Fr(t.current,()=>{je.fromTo(n,{scale:e.feedbackKind===`accepted`?r.acceptedScale:r.blockedScale},{scale:r.restScale,duration:r.feedbackSeconds,ease:r.ease})})},[e.feedbackKind,e.sequence,r]),(0,q.useLayoutEffect)(()=>{let i=e.score>n.current;if(n.current=e.score,!t.current||!i||e.overlay||e.settingsOpen)return;let a=t.current.querySelector(`.crusader-game__stat--win strong`);return Fr(t.current,()=>{je.fromTo(a,{scale:r.collectScale},{scale:r.restScale,duration:r.collectSeconds,ease:r.ease})})},[e.score,e.overlay,e.settingsOpen,r]),(0,q.useLayoutEffect)(()=>{if(!t.current||!e.overlay&&!e.settingsOpen)return;let n=t.current.querySelector(e.settingsOpen?`.crusader-game__settings`:`.crusader-game__overlay-card`);return Fr(t.current,()=>{je.fromTo(n,{y:r.panelY},{y:r.restY,duration:r.panelSeconds,ease:r.ease})})},[e.overlay,e.settingsOpen,r]),t}function Rr({moving:e,disabled:t,onReset:n}){let r=!!(t||e);return(0,J.jsx)(`div`,{className:`camera-controls`,role:`group`,"aria-label":`遊戲視角`,"aria-busy":!!e,children:(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button camera-controls__reset`,disabled:r,title:`鏡頭回正`,"aria-label":`鏡頭回正`,onClick:()=>{r||n()},children:`回正`})})}function zr({value:e,disabled:t,onChange:n}){let[r,i]=(0,q.useState)(!1),a=(0,q.useRef)(null),o=(0,q.useRef)(null),s=(0,q.useRef)(null),c=(0,q.useId)(),l=r&&!t;return(0,q.useEffect)(()=>{t&&i(!1)},[t]),(0,q.useEffect)(()=>{if(!l)return;s.current?.focus({preventScroll:!0});let e=e=>{e.target instanceof Node&&!a.current?.contains(e.target)&&i(!1)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[l]),(0,J.jsxs)(`div`,{ref:a,className:`speed-control`,onPointerDown:e=>e.stopPropagation(),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||i(!1)},onKeyDown:e=>{e.key===`Escape`&&l&&(e.preventDefault(),e.stopPropagation(),i(!1),o.current?.focus())},children:[(0,J.jsxs)(`button`,{ref:o,type:`button`,className:`speed-control__trigger`,disabled:t,"aria-label":`自動投幣速度 ${e} 倍`,"aria-expanded":l,"aria-controls":c,onClick:()=>{t||i(e=>!e)},children:[(0,J.jsx)(`span`,{"aria-hidden":`true`,children:`⚡`}),(0,J.jsxs)(`span`,{children:[e,`×`]})]}),l&&(0,J.jsxs)(`div`,{id:c,className:`speed-control__panel`,role:`group`,"aria-label":`調整自動投幣速度`,children:[(0,J.jsxs)(`label`,{htmlFor:`${c}-range`,children:[`自動投幣速度 `,(0,J.jsxs)(`output`,{children:[e,`×`]})]}),(0,J.jsx)(`input`,{ref:s,id:`${c}-range`,type:`range`,min:`1`,max:`3`,step:`0.25`,value:e,"aria-label":`自動投幣速度`,"aria-valuetext":`${e} 倍`,disabled:t,onChange:e=>{let r=Number(e.target.value);!t&&Number.isFinite(r)&&n(Math.max(1,Math.min(3,r)))}}),(0,J.jsxs)(`div`,{className:`speed-control__ticks`,"aria-hidden":`true`,children:[(0,J.jsx)(`span`,{children:`1×`}),(0,J.jsx)(`span`,{children:`2×`}),(0,J.jsx)(`span`,{children:`3×`})]})]})]})}function Br({treasury:e,paidDropsPerKey:t,choice:n,bells:r,autoSelection:i,disabled:a,onChoose:o,onGuessBell:s}){let c=(0,q.useRef)(null),l=(0,q.useRef)(null);(0,q.useEffect)(()=>{n&&!a&&c.current?.querySelector(`button:not(:disabled)`)?.focus()},[n?.id,a]),(0,q.useEffect)(()=>{r&&!a&&(l.current?.querySelector(`button:not(:disabled)`)??l.current)?.focus()},[r?.id,r?.phase,a]),(0,q.useEffect)(()=>{i?.kind===`tower`?c.current?.focus():i?.kind===`bell`&&l.current?.focus()},[i?.kind,i?.eventId]);let u=i?.kind===`tower`&&i.eventId===n?.id?i:null,d=i?.kind===`bell`&&i.eventId===r?.id?i:null;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${K.art.background}`}),(0,J.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${K.art.metal}`}),e&&!r&&(0,J.jsxs)(`div`,{className:`treasury-feature-status`,"aria-label":`御庫鑰匙與護欄`,role:`status`,children:[(0,J.jsxs)(`span`,{children:[(0,J.jsxs)(`svg`,{className:`treasury-key-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,J.jsx)(`circle`,{cx:`8`,cy:`7`,r:`5`}),(0,J.jsx)(`path`,{d:`m11 11 9 9m-5-5 3-3m-1 5 3-3`})]}),`鑰匙 `,e.keys,` / 3`]}),e.phase===`active`?(0,J.jsxs)(`strong`,{children:[`聖盾護欄 · 免費 `,e.freeRemaining,` 次`]}):e.phase===`draining`?(0,J.jsx)(`strong`,{children:`免費已投完 · 護欄保留至完整推進`}):e.phase===`retracting`?(0,J.jsx)(`strong`,{children:`護欄收回中 · 未扣幣`}):(0,J.jsx)(`span`,{children:e.pendingKeys?`鑰匙待送出 ${e.pendingKeys} 把`:`送鑰匙進度 ${e.paidProgress}${t?` / ${t}`:``}`})]}),n&&(0,J.jsx)(`div`,{className:`treasury-choice-backdrop`,style:K.css,children:(0,J.jsx)(`div`,{ref:c,className:`treasury-choice`,role:`dialog`,"aria-modal":`true`,"aria-label":`選擇撞擊目標`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=c.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:(0,J.jsx)(`div`,{className:`treasury-choice-targets`,children:n.targets.map((e,t)=>(0,J.jsxs)(`button`,{type:`button`,className:`treasury-target`,"aria-label":`${[`左`,`中`,`右`][e.slot]}塔：塔內 ${e.coins} 枚，猜中才撞塔`,"data-auto-focus":u?.focusIndex===t||void 0,"data-auto-confirmed":u?.confirming&&u.selectedIndex===t||void 0,"aria-current":u?.confirming&&u.selectedIndex===t?`true`:void 0,disabled:a||!!u||!o,onClick:()=>o?.(n.id,e.towerId),children:[(0,J.jsx)(`span`,{className:`treasury-target-auto-mark`,"aria-hidden":`true`,children:`✓`}),(0,J.jsxs)(`span`,{className:`treasury-target-details`,children:[(0,J.jsxs)(`span`,{className:`treasury-target-count`,children:[`塔內 `,(0,J.jsx)(`b`,{children:e.coins}),` 枚`]}),(0,J.jsx)(`span`,{className:`treasury-target-rule`,children:`猜中才撞塔`})]})]},e.towerId))})})}),r&&(0,J.jsxs)(`div`,{ref:l,className:`dragon-bell-game`,"data-phase":r.phase,style:K.css,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dragon-bell-title`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=l.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:[(0,J.jsxs)(`div`,{className:`dragon-bell-caption`,"aria-live":`polite`,children:[(0,J.jsx)(`span`,{className:`dragon-bell-ordinal`,"aria-hidden":`true`,children:`II`}),(0,J.jsxs)(`h2`,{id:`dragon-bell-title`,children:[`三鐘尋龍 · `,{high:`高塔`,mid:`中塔`,low:`低塔`}[r.target.tier]]}),(0,J.jsx)(`p`,{className:r.phase===`show`?`dragon-bell-intro-hint`:void 0,children:r.phase===`show`?(0,J.jsxs)(J.Fragment,{children:[`記住 `,r.dragonCount,` 隻小龍的位置`,(0,J.jsxs)(`small`,{children:[K.showSeconds,` 秒後自動換位`]})]}):r.phase===`cover`?`鐘罩落下，請留意位置。`:r.phase===`shuffle`?`三鐘換位中，跟住小龍。`:r.phase===`guess`?`命中可獲得 ${r.target.coins.toLocaleString()} 枚金幣`:r.won?`找到小龍！接著撞塔，尚未入帳。`:`沒有找到小龍，本次不撞塔、不加分。`})]}),r.phase===`guess`&&(0,J.jsx)(`div`,{className:`dragon-bell-picks`,children:[`左`,`中`,`右`].map((e,t)=>(0,J.jsx)(`button`,{type:`button`,className:`dragon-bell-pick`,"aria-label":`選擇${e}鐘`,"data-auto-focus":d?.focusIndex===t||void 0,"data-auto-confirmed":d?.confirming&&d.selectedIndex===t||void 0,"aria-current":d?.confirming&&d.selectedIndex===t?`true`:void 0,disabled:a||!!d||!s,onClick:()=>s?.(r.id,t),children:(0,J.jsxs)(`span`,{className:`crusader-game__small-button`,children:[e,`鐘`]})},t))})]})]})}var Vr={collector:`collector.webp`,tower:`tower.webp`,dragon:`dragon.webp`,treasury:`treasury.webp`,"trial-pairs":`trial-pairs.webp`,"trial-bells":`trial-bells.webp`,"trial-lock":`trial-lock.webp`,"trial-path":`trial-path.webp`,"trial-mint":`trial-mint.webp`,"trial-stack":`trial-stack.webp`,"trial-seals":`trial-seals.webp`,"trial-orb":`trial-orb.webp`,"trial-mirrors":`trial-mirrors.webp`,"trial-vault":`trial-vault.webp`,"trial-mines":`trial-mines.webp`};function Hr({trophy:e}){return e===`crusader`?(0,J.jsxs)(`svg`,{className:`treasury-trophy`,"data-trophy":e,viewBox:`0 0 40 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,J.jsx)(`path`,{d:`M3 4 20 1 37 4 35 27Q31 40 20 46 9 40 5 27Z`,fill:`currentColor`,fillOpacity:`.12`}),(0,J.jsx)(`path`,{d:`M17 10h6v10h9v6h-9v13h-6V26H8v-6h9Z`})]}):(0,J.jsx)(`img`,{className:`treasury-trophy`,"data-trophy":e,src:`./assets/trophies/${Vr[e]}`,alt:``,loading:`lazy`,decoding:`async`,draggable:!1})}var Ur=o(s.customProperties),Wr={front:`前口收集`,dragon:`巨龍入帳`,hatch:`洞內流失`,side:`側落／盤外流失`},Gr={crusader:`遠征盾徽`,collector:`前口初收`,tower:`高塔擊破`,dragon:`巨龍命中`,treasury:`御庫開啟`,"trial-pairs":`聖印對對牌`,"trial-bells":`鐘樓聖序`,"trial-lock":`王庫密鎖`,"trial-path":`聖光迴廊`,"trial-mint":`御庫鑄幣`,"trial-stack":`聖塔疊金`,"trial-seals":`騎士破印`,"trial-orb":`龍珠入庫`,"trial-mirrors":`聖光折鏡`,"trial-vault":`寶庫移陣`,"trial-mines":`龍穴探金`};function Kr({name:e}){return(0,J.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e===`settings`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`circle`,{cx:`12`,cy:`12`,r:`7`}),(0,J.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.6`}),(0,J.jsx)(`path`,{d:`M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2`})]}):e===`pause`?(0,J.jsx)(`path`,{d:`M8 5v14M16 5v14`}):e===`play`?(0,J.jsx)(`path`,{d:`m8 4 11 8-11 8Z`}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`path`,{d:`M3 9h4l5-5v16l-5-5H3Z`}),e===`muted`?(0,J.jsx)(`path`,{d:`m17 9 5 6m0-6-5 6`}):(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(`path`,{d:`M16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14`})})]})})}function qr(e){if(e.key!==`Tab`)return;let t=Array.from(e.currentTarget.querySelectorAll(`button:not(:disabled), select:not(:disabled), input:not(:disabled), summary, a[href], textarea:not(:disabled)`)).filter(e=>e.getClientRects().length>0&&!e.closest(`[hidden], [inert]`)),n=t[0],r=t[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&(e.target===n||e.target===e.currentTarget)&&(e.preventDefault(),r?.focus()),!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())}function Jr(e){let[t,n]=(0,q.useState)(!1),[r,i]=(0,q.useState)(`game`),a=(0,q.useRef)(null),[o,c]=(0,q.useState)(null),l=e.treasuryFeatures?.treasury?.freeRemaining??0,u=e.treasuryFeatures?.choice,d=e.treasuryFeatures?.bells,f=!!u||!!d,p=[`draining`,`retracting`].includes(e.treasuryFeatures?.treasury?.phase??`idle`),m=e.wallet<=0&&l<=0,h=e.navigationLocked||e.loading||!!e.error||e.paused||m||t||e.cameraMoving||e.cabinetOverview||!!e.dragonBonus||f||p,g=e.loading||!!e.error,_=!!g;(0,q.useEffect)(()=>{(g||e.paused||t||e.wallet<=0&&e.feedback?.kind!==`blocked`)&&e.feedback&&e.feedback.kind!==`idle`&&c(e.feedback.sequence)},[g,e.paused,e.wallet,e.feedback,t]);let v=Mr({...e,freeRemaining:l,settingsOpen:t,dismissedSequence:o}),[,y]=(0,q.useState)(0),b=(0,q.useRef)(null);b.current||=new Pr(()=>y(e=>e+1));let x=v.kind===`blocked`&&Nr(!!e.autoFiring,e.feedback);(0,q.useEffect)(()=>(b.current.update(x&&!h),()=>b.current.dispose()),[x,h]);let S=v.kind===`blocked`&&(!x||!h&&b.current.visible),C=Lr({feedbackKind:x&&!S?`idle`:v.kind,sequence:e.feedback?.sequence,score:e.score,overlay:e.error?`error`:e.loading?`loading`:null,settingsOpen:t}),w=(0,q.useRef)({disabled:h,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease});w.current={disabled:h,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease};let T=(0,q.useRef)(null);T.current||=new Ar(()=>!!w.current.disabled,()=>w.current.onStart(),()=>w.current.onEnd(),e=>w.current.onRelease?w.current.onRelease(e.kind):w.current.onEnd());let E=T.current,D=(0,q.useCallback)(()=>{E.cancel(),w.current.onEnd()},[E]);(0,q.useEffect)(()=>{h&&D()},[h,D]),(0,q.useEffect)(()=>()=>D(),[D]);let O=!!e.autoFiring,k=(0,q.useRef)(null),A=(0,q.useRef)(null),j=(0,q.useRef)(`game`),M=(0,q.useRef)(null),N=(0,q.useRef)(_),te=(0,q.useRef)(t),P=(0,q.useRef)(f);(0,q.useEffect)(()=>{!f&&P.current&&!t&&!_&&!e.paused&&k.current?.focus(),P.current=f},[f,t,_,e.paused]);let ne=()=>{e.onCoinPreviewCancel?.(),e.onSettingsOpenChange?.(!1),n(!1)};(0,q.useEffect)(()=>{e.progressRecovery&&t&&(e.onCoinPreviewCancel?.(),e.onSettingsOpenChange?.(!1),n(!1))},[!!e.progressRecovery,t,e.onCoinPreviewCancel,e.onSettingsOpenChange]),(0,q.useEffect)(()=>{t?(i(j.current),j.current=`game`,A.current?.focus()):te.current&&!_&&k.current?.focus(),te.current=t},[t,_]),(0,q.useEffect)(()=>{_&&!t&&document.hasFocus()&&M.current?.focus(),!_&&N.current&&document.hasFocus()&&k.current?.focus(),N.current=_},[_,t]);let F=e=>e>=1e4?new Intl.NumberFormat(`zh-TW`,{notation:`compact`,maximumFractionDigits:1}).format(e):e.toLocaleString();return(0,J.jsxs)(`main`,{ref:C,className:`crusader-game`,style:Ur,children:[(0,J.jsxs)(`header`,{className:`crusader-game__header`,inert:t||_||f,children:[(0,J.jsxs)(`div`,{className:`crusader-game__brand`,children:[!e.trophies||e.trophies.selected===`crusader`?(0,J.jsx)(`img`,{src:`./assets/treasury-crest.svg`,alt:``,className:`crusader-game__crest`}):(0,J.jsx)(`span`,{title:`收藏盾徽：${Gr[e.trophies.selected]}`,children:(0,J.jsx)(Hr,{trophy:e.trophies.selected})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h1`,{children:`聖城幣塔`}),(0,J.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`CRUSADER COIN PUSHER`})]})]}),(0,J.jsxs)(`nav`,{className:`crusader-game__tools`,"aria-label":`遊戲設定`,children:[e.onCameraReset&&e.cameraOffset&&(0,J.jsx)(Rr,{moving:e.cameraMoving,disabled:e.navigationLocked||g||e.paused||t||e.cabinetOverview,onReset:()=>{D(),e.onCameraReset?.()}}),e.trialsNavigation&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__trial-entry`,disabled:g||e.trialsNavigation.state===`saving`||e.localSave?.state===`loading`,onClick:()=>{D(),e.trialsNavigation?.onOpen()},"aria-label":e.trialsNavigation.state===`saving`?`正在儲存並前往御庫試煉`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試前往御庫試煉`:`前往御庫試煉`,children:e.trialsNavigation.state===`saving`?`儲存中…`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試御庫試煉`:`御庫試煉`}),(0,J.jsx)(`button`,{ref:k,type:`button`,className:`crusader-game__tool`,disabled:e.navigationLocked,onClick:()=>{D(),e.onSettingsOpenChange?.(!t),n(!t)},"aria-label":`設定與玩法`,title:`設定與玩法`,"aria-expanded":t,"aria-controls":`game-settings`,children:(0,J.jsx)(Kr,{name:`settings`})})]})]}),t&&(0,J.jsx)(`button`,{type:`button`,tabIndex:-1,className:`crusader-game__settings-backdrop`,"aria-label":`關閉設定遮罩`,onClick:ne}),t&&(0,J.jsxs)(`aside`,{ref:A,id:`game-settings`,className:`crusader-game__settings`,role:`dialog`,"aria-modal":`true`,"aria-label":`設定與玩法`,tabIndex:-1,onKeyDown:e=>{e.key===`Escape`&&(e.preventDefault(),ne()),qr(e)},children:[(0,J.jsxs)(`div`,{className:`crusader-game__settings-heading`,children:[(0,J.jsx)(`h2`,{children:`設定與玩法`}),(0,J.jsx)(`button`,{className:`crusader-game__small-button`,type:`button`,onClick:ne,children:`關閉`})]}),(0,J.jsx)(`nav`,{className:`crusader-game__settings-categories`,"aria-label":`設定分類`,children:[[`game`,`遊戲設定`,`menu-game-v1.webp`],[`account`,`帳號與進度`,`menu-account-v1.webp`],[`records`,`收藏與紀錄`,`menu-records-v1.webp`],[`help`,`玩法說明`,`menu-help-v1.webp`]].map(([t,n,o])=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":r===t,onClick:()=>{e.onCoinPreviewCancel?.(),i(t),a.current?.scrollTo(0,0)},children:[(0,J.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/settings/${o}`,width:`144`,height:`144`,alt:``,"aria-hidden":`true`,decoding:`async`}),(0,J.jsx)(`span`,{children:n})]},t))}),(0,J.jsxs)(`div`,{ref:a,className:`crusader-game__settings-content`,children:[(0,J.jsx)(`div`,{hidden:r!==`account`,children:e.accountPanel}),e.trophies&&(0,J.jsxs)(`section`,{hidden:r!==`records`,"aria-label":`騎士戰利品收藏`,children:[(0,J.jsx)(`h3`,{children:`騎士戰利品收藏`}),(0,J.jsx)(`p`,{children:`主場事件與每款御庫試煉第 15 關可解鎖對應盾徽；只改外觀，不影響機率或得分。保存在本機瀏覽器。`}),(0,J.jsx)(`h4`,{children:`聖城戰利品`}),(0,J.jsx)(`div`,{className:`treasury-collection`,children:pe.map(t=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===t,disabled:!e.trophies.unlocked.includes(t)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(t),children:[(0,J.jsx)(Hr,{trophy:t}),Gr[t],!e.trophies.unlocked.includes(t)&&` · 未解鎖`]},t))}),(0,J.jsx)(`h4`,{children:`御庫試煉 · 第 15 關紀念`}),(0,J.jsx)(`div`,{className:`treasury-collection`,children:G.map(t=>{let n=`trial-${t}`;return(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===n,disabled:!e.trophies.unlocked.includes(n)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(n),children:[(0,J.jsx)(Hr,{trophy:n}),Gr[n],!e.trophies.unlocked.includes(n)&&` · 第 15 關解鎖`]},n)})})]}),(0,J.jsx)(`div`,{hidden:r!==`help`,children:(0,J.jsxs)(`details`,{children:[(0,J.jsx)(`summary`,{children:`鑰匙、免費投幣與巨龍`}),e.treasuryFeatures&&(0,J.jsxs)(`section`,{"aria-label":`御庫特色規則`,children:[(0,J.jsx)(`h3`,{children:`御庫鑰匙與聖盾`}),(0,J.jsxs)(`p`,{children:[e.treasuryFeatures.paidDropsPerKey?`每成功投入${e.treasuryFeatures.paidDropsPerKey}枚一般金幣，`:`一般金幣達標後，`,`送出1把實體鑰匙；落點受阻時延後。鑰匙須真正推入前口，收齊3把換100次免費投幣；鑰匙本身不計分，側落或落洞不返還。`]}),(0,J.jsx)(`p`,{children:`免費投幣不扣可用金幣、不累積再生、不抽新塔／巨龍，也不生成新鑰匙。普通幣仍以前口實收計分。若自動連投已啟動，免費投完會先等待護欄收回；盤面可投後，才接續使用一般金幣。`}),(0,J.jsx)(`p`,{children:`免費期間升起側護欄；最後一枚投出後保留至下一次完整推進，再收回。護欄不保證全收，前口與洞口規則不變。`}),(0,J.jsx)(`p`,{children:`巨龍觸發時暫停盤面：先選塔、記住小龍，再猜三鐘。高塔有1隻小龍，中／低塔有2隻，分藏不同鐘；只能選一次，選塔三秒、選鐘五秒未操作會隨機選取，不額外扣幣。猜中才撞塔，命中才入帳；猜錯保留塔並恢復盤面。倒塌光影與收藏解鎖不另加分。`})]})]})}),(0,J.jsx)(`div`,{className:`crusader-game__menu-actions`,hidden:r!==`game`,children:(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onMute,"aria-pressed":e.muted,children:[(0,J.jsx)(Kr,{name:e.muted?`muted`:`sound`}),e.muted?`開啟音效`:`關閉音效`]})}),(0,J.jsxs)(`div`,{className:`crusader-game__menu-actions`,hidden:r!==`records`,children:[e.onReplayIntro&&(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:g||!!e.dragonBonus||!!u||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`,onClick:()=>{E.cancel(),ne(),e.onReplayIntro?.()},children:[(0,J.jsx)(Kr,{name:`play`}),`重看序章`]}),e.onReplayHighTower&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:g||!!e.dragonBonus||!!u||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`||!e.boardFeedback?.highTowerReplayAvailable,onClick:()=>{D(),ne(),e.onReplayHighTower?.()},children:`重看最高塔演出`})]}),e.boardFeedback&&(0,J.jsxs)(`section`,{hidden:r!==`records`,className:`crusader-game__records`,"aria-label":`本局來源與近期紀錄`,children:[(0,J.jsx)(`h3`,{children:`本局已入帳`}),(0,J.jsx)(`dl`,{children:[`front`,`dragon`].map(t=>(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`dt`,{children:Wr[t]}),(0,J.jsxs)(`dd`,{children:[e.boardFeedback.totals[t].toLocaleString(),` 分`]})]},t))}),(0,J.jsx)(`p`,{children:`前緣燈帶：前口收集；側邊警示紋：側落不計分；洞口叉紋：開洞不計分；藍色輪廓環：巨龍已結算幣，不重複計分。倒塔與故事演出本身不加分。`}),(0,J.jsx)(`h3`,{children:`近期紀錄`}),e.boardFeedback.records.length===0?(0,J.jsx)(`p`,{children:`尚無收集或流失紀錄。`}):(0,J.jsx)(`ol`,{children:e.boardFeedback.records.map(e=>(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`span`,{children:Wr[e.source]}),(0,J.jsx)(`strong`,{children:e.source===`front`||e.source===`dragon`?`+${e.amount.toLocaleString()} 分`:`${e.amount.toLocaleString()} 枚 · 不計分`})]},e.id))}),(0,J.jsxs)(`p`,{children:[`本局來源總計保留整局；近期紀錄僅顯示最近 `,s.boardFeedback.recordLimit,` 筆合併事件，不是淨獲利。`]})]}),(0,J.jsxs)(`div`,{hidden:r!==`game`,children:[e.onCoinSoundChange&&(0,J.jsxs)(`section`,{className:`crusader-game__coin-audio`,"aria-label":`投幣聲設定`,children:[(0,J.jsxs)(`label`,{className:`crusader-game__quality`,children:[`投幣音色`,(0,J.jsx)(`select`,{"aria-label":`投幣音色`,value:e.coinSound??`soft`,disabled:g,onChange:t=>e.onCoinSoundChange?.(t.target.value),children:or.map(e=>(0,J.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,J.jsxs)(`label`,{className:`crusader-game__coin-volume`,children:[`投幣音量 `,(0,J.jsx)(`input`,{"aria-label":`投幣音量`,type:`range`,min:`0`,max:`100`,step:`1`,value:Math.round((e.coinVolume??.5)*100),disabled:g||!e.onCoinVolumeChange,onChange:t=>e.onCoinVolumeChange?.(Number(t.target.value)/100)}),(0,J.jsxs)(`output`,{children:[Math.round((e.coinVolume??.5)*100),`%`]})]}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:g||e.paused||e.muted||e.coinVolume===0||e.coinPreviewState===`loading`||!e.onCoinPreview,onClick:e.onCoinPreview,children:e.coinPreviewState===`loading`?`音效準備中…`:`試聽投幣聲`}),(0,J.jsx)(`p`,{role:`status`,children:e.muted?`請先開啟音效，再進行試聽。`:e.coinPreviewState===`error`?`音效暫時無法播放，請再試一次。`:`試聽不會投幣或扣幣；此音量不影響配樂與大獎音效。`})]}),(0,J.jsxs)(`label`,{className:`crusader-game__quality`,children:[`畫質`,(0,J.jsxs)(`select`,{"aria-label":`畫質`,value:e.quality,onChange:t=>e.onQualityChange(t.target.value),children:[(0,J.jsx)(`option`,{value:`low`,children:`流暢`}),(0,J.jsx)(`option`,{value:`high`,children:`精緻`})]})]}),e.onBonusFullMotionChange&&(0,J.jsxs)(`label`,{children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:!!e.bonusFullMotion,onChange:t=>e.onBonusFullMotionChange?.(t.target.checked)}),`完整 BONUS 飛行動態（覆蓋系統減少動態偏好）`]})]}),(0,J.jsxs)(`div`,{hidden:r!==`help`,children:[(0,J.jsxs)(`details`,{children:[(0,J.jsx)(`summary`,{children:`投幣與鏡頭操作`}),(0,J.jsx)(`p`,{children:`後方投幣區按住可左右滑動連投，放開即停。其餘幣床點按投入 1 枚，拖曳則轉動鏡頭、放開不投幣；「回正」恢復視角。硬幣皆從後方推板投入。`}),e.onFireRelease&&(0,J.jsxs)(`p`,{children:[`投幣鈕點按投入一枚；按住會連投，長按至少 `,s.interaction.autoFireHoldMs/1e3,` 秒後在按鈕內放開，會持續自動連投。閃電滑桿只調整自動投幣速度，最高 3 倍，推板速度不變。再按一次停止，不會多扣幣。選塔、猜鐘、動畫、設定與御庫試煉期間暫停扣幣，回到可投的盤面自動續投；按停止、開新局、金幣與免費次數皆用盡或關閉頁面才結束。`]})]}),(0,J.jsxs)(`details`,{children:[(0,J.jsx)(`summary`,{children:`建塔與計分規則`}),(0,J.jsx)(`p`,{children:`每局以隨機散幣、零座幣塔開場；成功投入20枚喚醒首塔。每座塔獨立等機會抽高／中／低，可重複，不綁定塔位。前方收集的金幣會回收為可用金幣，可以繼續投入。`}),(0,J.jsx)(`p`,{children:`一般硬幣在前方收集計分，兩側及升塔洞內落幣不返還、不計分。巨龍 BONUS 命中時，每枚尚未結算的塔幣計 1 分並加入可用金幣；這批幣後續落點不再加分或扣回。有效投幣且有完整幣塔、無升塔或其他演出時才抽選 BONUS；目前為可調機率的單機測試版，非正式機率。`}),(0,J.jsx)(`p`,{children:`可抽選投幣有 4% 建塔機會；觸發後單塔 70%、雙塔 23%、三塔 7%。等待空位或建塔期間不進行新抽選。`}),(0,J.jsx)(`p`,{children:`場上幣塔全倒後，成功投入20枚即可排入補塔；蓄能期間不抽新事件，已獲得的待建塔保留。台面開洞後，舊幣落入洞內，新塔旋轉升起，關洞後可繼續推動。`})]})]}),(0,J.jsx)(`div`,{hidden:r!==`account`,children:e.localSave&&e.localSave.state!==`saved`&&(0,J.jsxs)(`section`,{"aria-label":`存檔狀態`,children:[(0,J.jsx)(`p`,{role:`status`,children:e.localSave.message}),e.localSave.state===`error`&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:g,onClick:e.localSave.onSave,children:`重試存檔`})]})}),(0,J.jsxs)(`div`,{hidden:r!==`game`,children:[(0,J.jsx)(`div`,{className:`crusader-game__new-game-section`,children:(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button crusader-game__new-game-button`,disabled:e.loading||e.navigationLocked,onClick:()=>{E.cancel(),e.onNewGame(),ne()},children:`開始新局`})}),e.testMode&&(0,J.jsxs)(`section`,{className:`crusader-game__debug`,"aria-label":`測試模式`,children:[(0,J.jsx)(`strong`,{children:`測試模式`}),(0,J.jsx)(`span`,{children:`強制建塔，不代表自然中獎機率`}),(0,J.jsx)(`div`,{children:[1,2,3].map(t=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:g||e.paused||!e.onTestTowers,onClick:()=>e.onTestTowers?.(t),children:[t,` 塔`]},t))})]}),e.testMode&&e.onTestDragon&&(0,J.jsx)(`div`,{className:`crusader-game__debug`,children:[`left`,`center`,`right`].map((t,n)=>(0,J.jsxs)(`button`,{className:`crusader-game__small-button`,type:`button`,disabled:g||e.paused||!!e.dragonBonus,onClick:()=>{E.cancel(),e.onTestDragon?.(t),ne()},children:[`BONUS `,[`左斜入`,`正衝`,`右斜入`][n]]},t))})]})]})]}),(0,J.jsxs)(`section`,{className:`crusader-game__stage`,"aria-label":`3D 推幣機`,inert:t||_,children:[e.localSave?.state===`error`&&(0,J.jsx)(`p`,{className:`crusader-game__save-warning`,role:`alert`,children:e.localSave.message}),e.cloudBackup&&e.localSave?.state!==`error`&&!f&&!_&&!e.navigationLocked&&(0,J.jsx)(ee,{...e.cloudBackup,className:`crusader-game__save-warning`,buttonClassName:`crusader-game__small-button`,onInspect:()=>{j.current=`account`,D(),e.onSettingsOpenChange?.(!0),n(!0)}}),!e.cloudBackup&&e.cloudWarning&&e.localSave?.state!==`error`&&!f&&!_&&!e.navigationLocked&&(0,J.jsxs)(`div`,{className:`crusader-game__save-warning`,role:`alert`,children:[(0,J.jsxs)(`span`,{children:[e.cloudWarning,` `]}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:()=>{j.current=`account`,D(),e.onSettingsOpenChange?.(!0),n(!0)},children:`查看帳號與進度`})]}),e.children,(0,J.jsx)(`div`,{className:`crusader-game__feedback-channel`,role:`status`,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,children:S&&!f&&(0,J.jsxs)(`p`,{className:`crusader-game__feedback crusader-game__feedback--blocked`,children:[(0,J.jsxs)(`span`,{className:`crusader-game__feedback-label`,children:[(0,J.jsx)(`span`,{"aria-hidden":`true`,children:v.symbol}),v.label]}),(0,J.jsx)(`span`,{className:`crusader-game__feedback-detail`,children:v.detail})]})}),e.treasuryFeatures&&(0,J.jsx)(Br,{...e.treasuryFeatures,disabled:e.navigationLocked||g||e.paused||t||e.treasuryFeatures.disabled}),e.dragonBonus&&(0,J.jsxs)(`div`,{className:`crusader-game__bonus`,role:`status`,children:[(0,J.jsx)(`span`,{children:`巨龍 BONUS`}),(0,J.jsx)(`strong`,{children:e.dragonBonus.phase===`hit`?`已命中`:e.dragonBonus.phase===`miss`?`目標已失效 · 未入帳`:`接近中 · 尚未入帳`})]}),!g&&!e.paused&&!t&&!e.cabinetOverview&&e.boardFeedback&&(0,J.jsxs)(`div`,{className:`crusader-game__receipts`,"aria-label":`已確認盤面結果`,role:`status`,"aria-live":`polite`,children:[e.boardFeedback.receipts.map(e=>(0,J.jsxs)(`p`,{"data-source":e.source,children:[(0,J.jsx)(`span`,{children:e.source===`front`?`金幣掉落`:`${Wr[e.source]} · 已入帳`}),(0,J.jsxs)(`strong`,{children:[e.source===`front`?``:`+`,e.amount.toLocaleString(),` 枚`]})]},e.source)),!e.dragonBonus&&e.boardFeedback.highTower&&(0,J.jsxs)(`p`,{className:`crusader-game__collapse`,children:[(0,J.jsx)(`span`,{children:`最高塔倒塌`}),(0,J.jsx)(`small`,{children:`倒塔不加分，普通幣以前口實收計分`})]})]})]}),_&&!t&&(0,J.jsx)(`div`,{className:`crusader-game__overlay`,children:(0,J.jsxs)(`div`,{ref:M,className:`crusader-game__overlay-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`game-recovery-title`,tabIndex:-1,onKeyDown:qr,children:[(0,J.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`聖城幣塔`}),(0,J.jsx)(`h2`,{id:`game-recovery-title`,children:e.progressRecovery?.conflict?`需要重新接續進度`:e.error?`暫時無法進入寶庫`:`正在準備金幣與機台`}),e.error&&(0,J.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.error&&(e.progressRecovery?(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.progressRecovery.busy,onClick:e.progressRecovery.onRecover,children:e.progressRecovery.busy?`正在保留盤面…`:`讀取最新進度`}):e.onRetryScene&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.navigationLocked,onClick:e.onRetryScene,children:`重新載入畫面`}))]})}),(0,J.jsx)(`section`,{className:`crusader-game__console`,"aria-label":`投幣控制`,inert:t||_||f,children:(0,J.jsxs)(`div`,{className:`crusader-game__console-inner`,children:[(0,J.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--win`,children:[(0,J.jsx)(`span`,{children:`本局獲得金幣`}),(0,J.jsx)(`strong`,{"aria-label":`${e.score} 枚`,title:String(e.score),children:F(e.score)})]}),(0,J.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--wallet`,children:[(0,J.jsx)(`span`,{children:`可用金幣`}),(0,J.jsx)(`strong`,{"aria-label":`${e.wallet} 枚`,title:String(e.wallet),children:F(e.wallet)})]}),!m&&e.onAutoSpeedChange&&(0,J.jsx)(zr,{value:e.autoSpeed??1,disabled:g||e.navigationLocked||e.paused||t||f||!!e.dragonBonus,onChange:e.onAutoSpeedChange}),(0,J.jsxs)(`div`,{className:`crusader-game__fire-wrap${m?` crusader-game__fire-wrap--empty`:``}`,children:[(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__fire`,disabled:h,onPointerDown:e=>{e.button===0&&e.isPrimary&&(e.pointerType===`touch`&&e.preventDefault(),E.press({kind:`pointer`,id:e.pointerId})&&e.currentTarget.setPointerCapture(e.pointerId))},onPointerUp:e=>{let t=e.currentTarget.getBoundingClientRect(),n={kind:`pointer`,id:e.pointerId};e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom?E.cancelSource(n):E.release(n)},onPointerCancel:e=>E.cancelSource({kind:`pointer`,id:e.pointerId}),onLostPointerCapture:e=>E.cancelSource({kind:`pointer`,id:e.pointerId}),onKeyDown:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),e.repeat||E.press({kind:`keyboard`,key:e.key}))},onKeyUp:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),E.release({kind:`keyboard`,key:e.key}))},onBlur:D,onContextMenu:e=>e.preventDefault(),"aria-pressed":e.onFireRelease?O:void 0,"aria-label":O?`停止自動連投`:e.onFireRelease?`投入金幣，點按一枚，長按後放開自動連投，再按停止`:`投入金幣，點按一枚，長按連投`,children:[(0,J.jsx)(`span`,{children:m?`已用盡`:O?`停 止`:l>0?`免 費`:`投 幣`}),(0,J.jsx)(`small`,{children:O?h?`自動待續`:`自動連投中`:`長按自動`})]}),m&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__restart`,disabled:e.loading||t||e.navigationLocked,onClick:e.onNewGame,children:`開始新局`})]})]})})]})}function Yr(e){let t=(0,q.useId)(),[n,r]=(0,q.useState)(``),[i,a]=(0,q.useState)(``),[o,s]=(0,q.useState)(``),[c,l]=(0,q.useState)(!1),[u,d]=(0,q.useState)(null),f=(0,q.useRef)(null),p=(0,q.useRef)(0),m=(0,q.useRef)(!1),h=(0,q.useRef)(!1),g=(0,q.useRef)(null),_=(0,q.useRef)(null),v=(0,q.useRef)(!1),y=e.screen===`register`,b=e.disabled||c||!!u;(0,q.useEffect)(()=>(m.current=!0,()=>{m.current=!1,p.current++,f.current=null}),[]),(0,q.useEffect)(()=>{u&&g.current&&!g.current.open&&g.current.showModal(),!u&&!b&&v.current&&(v.current=!1,_.current?.focus())},[u,b]);function x(){h.current||(p.current++,f.current=null,v.current=!0,d(null),r(``),a(``))}async function S(t,n,i,o){if(e.disabled||h.current)return;let c=++p.current;h.current=!0,l(!0),s(``),r(``),a(``);try{let r=await e.onSubmit(t,n,i,o);if(!m.current||c!==p.current)return;!i&&r?.kind===`registration-offer`?(f.current={email:t,password:n,guard:{expectedUid:r.expectedUid,expectedAnonymous:r.expectedAnonymous}},d(r.reason)):r?.kind===`error`&&s(r.message)}catch{m.current&&c===p.current&&s(`帳號操作未確認成功，請重新輸入後再試。`)}finally{h.current=!1,m.current&&c===p.current&&l(!1)}}return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`form`,{className:`account-panel__credentials`,"aria-label":y?`建立帳號表單`:`登入表單`,onSubmit:t=>{if(t.preventDefault(),!b){if(y&&n!==i){s(`兩次輸入的密碼不一致，請重新確認。`);return}S(e.email.trim(),n,y)}},children:[(0,J.jsx)(`label`,{htmlFor:`${t}-email`,children:`Email`}),(0,J.jsx)(`input`,{id:`${t}-email`,name:`email`,type:`email`,autoComplete:`email`,required:!0,disabled:b,value:e.email,onChange:t=>e.onEmailChange(t.target.value)}),(0,J.jsx)(`label`,{htmlFor:`${t}-password`,children:y?`設定密碼`:`密碼`}),(0,J.jsx)(`input`,{id:`${t}-password`,name:`password`,type:`password`,autoComplete:y?`new-password`:`current-password`,required:!0,disabled:b,value:n,onChange:e=>{r(e.target.value),s(``)}}),y&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`label`,{htmlFor:`${t}-confirmation`,children:`確認密碼`}),(0,J.jsx)(`input`,{id:`${t}-confirmation`,name:`password-confirmation`,type:`password`,autoComplete:`new-password`,required:!0,disabled:b,"aria-invalid":!!o,"aria-describedby":o?`${t}-error`:void 0,value:i,onChange:e=>{a(e.target.value),s(``)}})]}),o&&(0,J.jsx)(`p`,{id:`${t}-error`,className:`crusader-game__error`,role:`alert`,children:o}),(0,J.jsx)(`button`,{ref:_,className:`crusader-game__small-button account-panel__primary`,disabled:b,type:`submit`,children:y?`建立帳號`:`登入`})]}),u&&(0,J.jsxs)(`dialog`,{ref:g,className:`account-panel__confirm`,"aria-labelledby":`${t}-confirm-title`,"aria-describedby":`${t}-confirm-detail`,onCancel:e=>{e.preventDefault(),x()},children:[(0,J.jsx)(`h3`,{id:`${t}-confirm-title`,children:`是否建立帳號？`}),(0,J.jsx)(`p`,{id:`${t}-confirm-detail`,children:u===`not-found`?`此 Email 尚未註冊。是否使用剛才輸入的 Email 與密碼建立帳號？`:`登入未成功，可能是 Email 或密碼有誤。若你尚未註冊，是否使用剛才輸入的資料建立帳號？`}),(0,J.jsx)(`p`,{children:`只有確認後才會註冊；原本遊戲進度會保留。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,autoFocus:!0,disabled:c,onClick:x,children:`返回檢查登入資料`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__primary`,disabled:e.disabled||c,onClick:()=>{if(e.disabled||h.current)return;let t=f.current;f.current=null,d(null),t&&S(t.email,t.password,!0,t.guard)},children:`確認註冊並登入`})]})]})}function Xr({kind:e}){let[t,n]=(0,q.useState)(!1);return(0,J.jsx)(`div`,{className:`account-panel__art`,"aria-hidden":`true`,children:(0,J.jsx)(`img`,{className:t?`account-panel__art-image is-unavailable`:`account-panel__art-image`,src:`/crusader-coin-pusher-demo/assets/account/${e===`login`?`treasury-login-v1.webp`:`treasury-register-v1.webp`}`,alt:``,width:2172,height:724,decoding:`async`,loading:`lazy`,draggable:!1,onError:()=>n(!0)})})}function Zr(e){let[t,n]=(0,q.useState)(!1);return(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__provider`,"aria-label":e.label,"aria-expanded":e.expanded,"aria-controls":e.controls,disabled:e.disabled,onClick:e.onSelect,children:[(0,J.jsx)(`span`,{className:`account-panel__provider-seal`,"aria-hidden":`true`,children:e.kind===`google`?(0,J.jsx)(`span`,{className:`account-panel__provider-google-backing`,style:{background:s.premium.colors.white},children:(0,J.jsx)(`img`,{alt:``,width:200,height:204,draggable:!1,decoding:`async`,className:t?`account-panel__provider-image is-unavailable`:`account-panel__provider-image`,src:`/crusader-coin-pusher-demo/assets/account/google-g-official-v1.png`,onError:()=>n(!0)})}):(0,J.jsx)(`svg`,{className:`account-panel__provider-color`,viewBox:`0 0 24 24`,focusable:`false`,children:e.kind===`email`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`rect`,{className:`account-panel__icon-blue`,x:`1`,y:`4`,width:`22`,height:`16`,rx:`3`}),(0,J.jsx)(`path`,{className:`account-panel__icon-light`,d:`m2 5 10 9L22 5Z`}),(0,J.jsx)(`path`,{className:`account-panel__icon-blue`,d:`m2 19 7-7 3 3 3-3 7 7Z`}),(0,J.jsx)(`path`,{className:`account-panel__icon-gold`,d:`m1.5 6 10.5 8.5L22.5 6v2L12 16.5 1.5 8Z`})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`circle`,{className:`account-panel__icon-blue`,cx:`12`,cy:`12`,r:`11`}),(0,J.jsx)(`path`,{className:`account-panel__icon-red`,d:`M3.5 19c.5-4.3 4-6 8.5-6s8 1.7 8.5 6A11 11 0 0 1 3.5 19Z`}),(0,J.jsx)(`path`,{className:`account-panel__icon-gold`,d:`M9 12h6v3l-3 2-3-2Z`}),(0,J.jsx)(`circle`,{className:`account-panel__icon-light`,cx:`12`,cy:`8`,r:`4.5`})]})})}),(0,J.jsx)(`span`,{className:`account-panel__provider-label`,children:e.label}),(0,J.jsx)(`span`,{className:`account-panel__provider-trailing`,"aria-hidden":`true`,children:(0,J.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,focusable:`false`,children:e.kind===`email`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`path`,{d:`M5 12h14`}),!e.expanded&&(0,J.jsx)(`path`,{d:`M12 5v14`})]}):(0,J.jsx)(`path`,{d:`m9 5 7 7-7 7`})})})]})}function Qr(e){let t=(0,J.jsx)(`a`,{className:`account-panel__legal`,href:`https://johnwu0626.github.io/crusader-coin-pusher-demo/privacy/`,target:e.externalLinkTarget??`_blank`,rel:`noopener noreferrer`,children:`隱私權政策`}),[n,r]=(0,q.useState)(``),[i,a]=(0,q.useState)(`login`),[o,s]=(0,q.useState)(!1),[c,l]=(0,q.useState)(!1),[u,d]=(0,q.useState)(null),f=(0,q.useId)(),p=(0,q.useRef)(null),[m,h]=(0,q.useState)(!0),[g,_]=(0,q.useState)(null),[v,y]=(0,q.useState)(null),[b,x]=(0,q.useState)(null);(0,q.useEffect)(()=>{x(null)},[e.backups,e.user?.uid]),(0,q.useEffect)(()=>{y(null)},[e.progressChoices]),(0,q.useEffect)(()=>{d(null)},[e.cloudChoices]);let S=(0,q.useRef)(null),C=(0,q.useRef)(!1),w=!e.enabled||e.busy,T=!e.user||e.user.isAnonymous,E=T&&i===`register`,D=T&&(!!e.entry||c),O=e.user?.email?.replace(/^(.)([^@]*)(@.*)$/,`$1＊＊＊$3`);(0,q.useEffect)(()=>{C.current&&=(S.current?.focus(),!1)},[i]),(0,q.useEffect)(()=>{T||(a(`login`),s(!1),h(!0))},[T]),(0,q.useEffect)(()=>{o&&!E&&p.current?.querySelector(`input`)?.focus()},[o,E]);function k(e){w||(C.current=!0,h(!1),s(!1),a(e))}let A=(0,J.jsx)(Yr,{screen:i,email:n,disabled:w,onEmailChange:r,onSubmit:(t,n,r,i)=>(h(!0),e.onEmail(t,n,r,i))},`${i}:${e.user?.uid??``}:${!!e.user?.isAnonymous}`);return e.busy&&!E&&!D?(0,J.jsxs)(`section`,{className:`account-panel`,"aria-label":`帳號與進度`,"aria-busy":`true`,children:[(0,J.jsxs)(`div`,{className:`account-panel__status-card`,role:`status`,children:[(0,J.jsx)(`span`,{className:`account-panel__loading`,"aria-hidden":`true`}),(0,J.jsx)(`h3`,{children:e.progressStatus||`正在登入…`})]}),e.onCancelConnection&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`p`,{children:`連線較久，可先返回遊戲。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelConnection,children:`先返回遊戲`})]}),e.onRestartSignIn&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.restartingSignIn,onClick:e.onRestartSignIn,children:`保存盤面並重新載入登入`}),e.error&&(0,J.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),t]}):E?(0,J.jsxs)(`section`,{className:`account-panel`,"aria-label":`建立帳號`,"aria-busy":e.busy,children:[(0,J.jsx)(Xr,{kind:`register`},`register`),(0,J.jsx)(`h3`,{ref:S,tabIndex:-1,children:`建立帳號`}),(0,J.jsx)(`p`,{children:`使用 Email 建立帳號，原進度會保留。`}),e.busy&&(0,J.jsx)(`p`,{role:`status`,children:`正在建立帳號…`}),m&&e.error&&(0,J.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),!e.enabled&&!e.busy&&(0,J.jsx)(`p`,{children:`登入尚未啟用；你仍可繼續本機遊玩。`}),A,(0,J.jsxs)(`div`,{className:`account-panel__navigation`,children:[(0,J.jsx)(`p`,{children:`已有帳號？`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>k(`login`),children:`返回登入`})]}),t]}):(0,J.jsxs)(`section`,{className:`account-panel`,"aria-label":`帳號與雲端存檔`,"aria-busy":e.busy,children:[D&&(0,J.jsx)(Xr,{kind:`login`},`login`),(0,J.jsx)(`h3`,{ref:S,tabIndex:-1,children:T?e.entry?`或登入帳號`:`綁定／登入帳號`:`帳號與存檔`}),!T&&(0,J.jsxs)(`div`,{className:`account-panel__identity`,children:[(0,J.jsx)(`strong`,{children:`已登入`}),(0,J.jsx)(`span`,{children:O||`已綁定帳號`}),!e.progressChoices&&!e.cloudChoices&&!e.signOutWarning&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onSignOut,children:`登出`})]}),e.busy&&D&&(0,J.jsx)(`p`,{role:`status`,children:`正在登入…`}),e.notice&&(T||e.notice.startsWith(`註冊完成`))&&(0,J.jsx)(`p`,{role:`status`,children:e.notice}),!e.entry&&T&&(0,J.jsx)(`p`,{children:`綁定帳號，換裝置也能接著玩。`}),!e.enabled&&(0,J.jsx)(`p`,{children:`登入尚未啟用；你仍可繼續本機遊玩。`}),(m||!T)&&e.error&&(0,J.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.onRestartSignIn&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.restartingSignIn,onClick:e.onRestartSignIn,children:e.restartingSignIn?`正在保存盤面…`:`保存盤面並重新載入登入`}),e.progressStatus&&(0,J.jsx)(`p`,{role:`status`,children:e.progressStatus}),!T&&e.sync&&(0,J.jsxs)(`div`,{className:`account-panel__status-card`,role:e.syncNeedsAttention?`alert`:`status`,children:[e.syncNeedsAttention?(0,J.jsx)(`p`,{children:`發現不同進度，需要你確認。`}):(0,J.jsx)(`p`,{children:e.sync.phase===`syncing`?`正在備份…`:e.sync.phase===`offline`?`目前離線，雲端備份未完成。`:e.sync.phase===`error`?`雲端備份未完成。`:e.sync.phase===`slow`?`雲端仍未確認，請檢查連線。`:e.sync.phase===`pending`?`有新進度待備份。`:e.sync.confirmedAt?`遊玩時會自動備份。`:`尚未確認雲端備份。`}),e.sync.confirmedAt&&(0,J.jsxs)(`small`,{children:[`上次雲端確認：`,new Date(e.sync.confirmedAt).toLocaleString(`zh-TW`)]}),e.syncNeedsAttention&&!e.cloudChoices&&e.onInspectConflict&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onInspectConflict,children:`選擇接續進度`}),!e.syncNeedsAttention&&(e.syncRetrying||[`error`,`offline`,`slow`].includes(e.sync.phase))&&e.onUpload&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||e.syncRetrying||e.sync.phase===`slow`||e.sync.phase===`syncing`,onClick:e.onUpload,children:e.sync.phase===`slow`?`等待雲端確認…`:e.syncRetrying?`正在重試…`:`重試備份`})]}),e.signOutWarning&&(0,J.jsxs)(`div`,{className:`account-panel__status-card`,role:`alert`,children:[(0,J.jsx)(`h3`,{children:`最新進度尚未確認上雲端`}),(0,J.jsx)(`p`,{children:`本機備份已確認；換裝置可能讀到較早進度。仍要登出嗎？`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onSignOut,children:`重試同步再登出`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelSignOut,children:`先留在遊戲`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onSignOutLocally,children:`仍要登出`})]}),e.onRetryAdoption&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onRetryAdoption,children:`重試接續進度`}),e.cloudChoices&&(0,J.jsxs)(`div`,{className:`account-panel__choices`,role:`group`,"aria-label":`選擇雲端或本機進度`,children:[(0,J.jsx)(`h3`,{children:`要接著玩哪一份？`}),(0,J.jsx)(`p`,{children:`確認後先備份，再切換進度；金幣不合併。`}),e.cloudChoices.map(e=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__choice`,"aria-pressed":u===e.id,onClick:()=>d(e.id),children:[(0,J.jsx)(`strong`,{children:e.label}),(0,J.jsxs)(`span`,{children:[`金幣 `,e.balance.toLocaleString(`zh-TW`),` 枚`]}),(0,J.jsx)(`small`,{children:e.summary}),(0,J.jsxs)(`small`,{children:[`盤面保存：`,new Date(e.savedAt).toLocaleString(`zh-TW`)]})]},e.id)),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:!u,onClick:()=>{u&&e.onChooseCloud?.(u)},children:`使用所選進度`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onCancelCloud,children:`取消，保留目前盤面`})]}),e.progressChoices&&(0,J.jsxs)(`div`,{className:`account-panel__choices`,role:`group`,"aria-label":`選擇接續進度`,children:[(0,J.jsx)(`h3`,{children:`要接著玩哪份進度？`}),(0,J.jsx)(`p`,{children:`不合併金幣；確認後會先備份。`}),e.progressChoices.map(e=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__choice`,disabled:w,"aria-pressed":v===e.id,onClick:()=>y(e.id),children:[e.label,` · 金幣 `,e.balance.toLocaleString(`zh-TW`),(0,J.jsx)(`br`,{}),`盤面保存：`,new Date(e.savedAt).toLocaleString(`zh-TW`),e.summary&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`br`,{}),e.summary]})]},e.id)),v&&(0,J.jsx)(`p`,{children:`將使用所選進度更新此帳號；其他版本先保留備份。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||!v,onClick:()=>{v&&e.onChooseProgress?.(v)},children:`確認接續`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.busy,onClick:e.onCancelProgress,children:`取消，保留目前盤面`})]}),!e.entry&&!e.progressChoices&&!e.cloudChoices&&!T&&!e.signOutWarning&&(0,J.jsxs)(`details`,{className:`account-panel__details`,children:[(0,J.jsx)(`summary`,{children:`更多帳號選項`}),e.onDeleteAccount&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onDeleteAccount,children:`刪除帳號`}),e.onBrowseBackups&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:e.onBrowseBackups,children:`查看綁定前備份`}),e.backups&&(0,J.jsxs)(`div`,{role:`group`,"aria-label":`綁定前備份`,children:[e.backups.length===0&&(0,J.jsx)(`p`,{children:`這台裝置尚無綁定前備份。`}),e.backups.map(e=>(0,J.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,"aria-pressed":b===e.revision,onClick:()=>x(e.revision),children:[`備份 `,e.revision,` · 金幣 `,e.balance.toLocaleString(`zh-TW`),` · `,new Date(e.savedAt).toLocaleString(`zh-TW`)]},e.revision)),b!==null&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`p`,{children:`還原到本機；目前盤面會先備份，不合併金幣。雲端若有不同進度，仍需確認。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>e.onRestoreBackup?.(b),children:`確認還原備份`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>x(null),children:`取消還原`})]})]}),e.user&&(0,J.jsxs)(`p`,{children:[`玩家 ID：`,(0,J.jsx)(`span`,{children:e.user.uid}),(0,J.jsx)(`br`,{}),e.user.email]}),(0,J.jsx)(`p`,{children:e.cloudEnabled?`確認時間指此裝置最近一次收到雲端回覆，不是目前盤面全部上傳的保證。`:`雲端同步尚未開放。登入不會上傳或替換存檔。`}),(0,J.jsxs)(`details`,{children:[(0,J.jsx)(`summary`,{children:`進度修復`}),e.user&&e.activeOwner===e.user.uid&&e.onResolve&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`p`,{children:`版本衝突時不合併金幣。請選擇要接著玩的進度；被替換的版本會先備份。`}),e.cloudEnabled&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`local`),children:`保留本機，更新雲端`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`cloud`),children:`改用雲端進度`})]}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(`backup`),children:`還原最近一次替換前備份`}),g&&(0,J.jsxs)(`div`,{role:`group`,"aria-label":`確認進度來源`,children:[(0,J.jsx)(`p`,{children:g===`local`?`將以目前本機進度更新雲端，先保留原雲端備份。`:g===`cloud`?`將以雲端進度替換本機，先保留目前本機備份。`:`將還原最近一次替換前備份，目前進度也會先備份。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>{let t=g;_(null),e.onResolve?.(t)},children:`確認使用此版本`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>_(null),children:`取消`})]})]}),e.user&&e.cloudEnabled&&e.activeOwner===e.user.uid&&(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w||e.syncRetrying||e.sync?.phase===`syncing`||e.sync?.phase===`slow`||e.activeOwner!==e.user.uid,onClick:()=>{h(!0),e.onUpload?.()},children:`上傳目前進度`})}),e.user&&e.activeOwner!==e.user.uid&&e.onActivate&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`p`,{children:`啟用此帳號進度；新裝置優先接續既有雲端存檔，否則複製目前訪客進度。原訪客存檔保留，不合併金幣。`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>{h(!0),e.onActivate?.()},children:`使用此帳號進度`})]})]})]}),!e.entry&&T&&!D&&(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button account-panel__primary`,disabled:w,onClick:()=>l(!0),children:`綁定／登入帳號`}),!e.progressChoices&&D&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Zr,{kind:`google`,label:`Google 登入`,disabled:w||!e.googleEnabled,onSelect:()=>{s(!1),h(!0),e.onGoogle()}}),e.enabled&&!e.googleEnabled&&(0,J.jsx)(`p`,{children:`此版本尚未支援 Android Google 登入。`}),(0,J.jsx)(Zr,{kind:`email`,label:`Email 登入`,expanded:o,controls:f,disabled:w,onSelect:()=>{w||(s(!o),h(!1))}}),(0,J.jsx)(`div`,{id:f,ref:p,className:`account-panel__email`,hidden:!o,children:o&&(0,J.jsxs)(J.Fragment,{children:[A,(0,J.jsxs)(`div`,{className:`account-panel__navigation`,children:[(0,J.jsx)(`p`,{children:`還沒有帳號？`}),(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:w,onClick:()=>k(`register`),children:`前往註冊`})]})]})})]}),t]})}function $r(e){let t=(0,q.useRef)(null);return(0,q.useEffect)(()=>{t.current?.focus()},[]),(0,J.jsx)(`div`,{className:`crusader-game account-entry`,style:o(s.customProperties),children:(0,J.jsxs)(`div`,{className:`account-entry__card`,role:`dialog`,"aria-modal":`true`,"aria-label":`進入聖城幣塔`,tabIndex:-1,ref:t,onKeyDown:e=>{if(e.stopPropagation(),e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),select:not(:disabled),[tabindex="0"]`)].filter(e=>e.getClientRects().length>0),n=t[0],r=t.at(-1);if(!n){e.preventDefault();return}e.shiftKey&&(e.target===n||e.target===e.currentTarget)?(e.preventDefault(),r?.focus()):!e.shiftKey&&(e.target===r||e.target===e.currentTarget)&&(e.preventDefault(),n.focus())},onKeyUp:e=>e.stopPropagation(),children:[(0,J.jsx)(`h2`,{children:`進入聖城幣塔`}),e.preparing&&(0,J.jsx)(`p`,{role:`status`,children:`正在準備盤面…`}),(0,J.jsxs)(`div`,{className:`account-entry__continue`,children:[(0,J.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.busy||e.preparing,onClick:e.onContinue,children:e.accountProgress?`繼續遊戲`:`立即遊玩`}),(0,J.jsx)(`p`,{children:`訪客進度保存在這台裝置，之後可綁定帳號。`})]}),e.children]})})}var ei=class{localSequence=null;attempts=new Set;continueLocally(e){this.localSequence=e}take(e,t){if(this.localSequence!==null&&t<=this.localSequence)return!1;let n=JSON.stringify([e,t]);return!this.attempts.has(n)&&(this.attempts.add(n),!0)}},ti=class{serial=0;reading=!1;begin(){return this.reading=!0,++this.serial}current(e){return e===this.serial}commit(e){if(!this.current(e))throw Error(`Account operation cancelled`);this.reading=!1}cancel(){return this.reading?(this.reading=!1,this.serial++,!0):!1}finish(e){this.current(e)&&(this.reading=!1)}};function ni(e,t){let n=new t.GoogleAuthProvider;return n.setCustomParameters({prompt:`select_account`}),e.currentUser?.isAnonymous?t.linkWithPopup(e.currentUser,n):t.signInWithPopup(e,n)}function ri(e,t=2e4){let n=setTimeout(e,t);return()=>clearTimeout(n)}function ii(e){let t=typeof e==`object`&&e&&`code`in e?e.code:``;return t===`auth/credential-already-in-use`||t===`auth/email-already-in-use`?`此帳號已存在。訪客進度未合併；請先保留本機進度，再登入既有帳號。`:t===`auth/popup-closed-by-user`||t===`auth/cancelled-popup-request`?`已取消登入，本機進度未變更。`:t===`auth/popup-blocked`?`登入視窗被瀏覽器阻擋，請允許彈出視窗後再按 Google 登入。本機進度未變更。`:t===`auth/web-storage-unsupported`?`瀏覽器無法保存登入狀態。請使用一般瀏覽模式重試，勿清除遊戲網站資料。`:`登入操作未成功，請確認網路及帳號資料後再試。本機進度未變更。`}function ai(e){return typeof e==`object`&&e&&`code`in e&&typeof e.code==`string`?e.code:``}function oi(e){return e===`auth/email-already-in-use`||e===`auth/credential-already-in-use`?`此 Email 已有帳號，未建立新帳號。請返回登入，確認密碼或改用原本的登入方式。`:e===`auth/weak-password`||e===`auth/password-does-not-meet-requirements`?`密碼不符合安全要求，請設定較長的密碼後重試。`:e===`auth/network-request-failed`?`網路連線未成功，請稍後重試。本機進度未變更。`:e===`auth/too-many-requests`?`嘗試次數過多，請稍後再試。本機進度未變更。`:e===`auth/user-disabled`?`此帳號目前無法登入，請聯絡開發者。本機進度未變更。`:`登入操作未成功，請確認 Email、密碼與網路後重試。本機進度未變更。`}async function si(e,t,n,r,i){let a=e.current(),o=a?.uid??null,s=!!a?.isAnonymous;if(i&&(i.expectedUid!==o||i.expectedAnonymous!==s))return{kind:`error`,message:`登入身分已變更，請重新輸入後再試。本機進度未變更。`};try{let i=await(r?s&&o?e.link(o,t,n):e.create(t,n):e.login(t,n));return e.current()?.uid===i.uid?{kind:`success`,registered:r}:{kind:`error`,message:`登入身分已變更，請重新確認帳號。本機進度未變更。`}}catch(t){let n=ai(t);return!r&&(e.current()?.uid??null)===o&&!!e.current()?.isAnonymous===s&&(n===`auth/user-not-found`||n===`auth/invalid-credential`)?{kind:`registration-offer`,reason:n===`auth/user-not-found`?`not-found`:`unconfirmed`,expectedUid:o,expectedAnonymous:s}:{kind:`error`,message:oi(n)}}}function ci(){let[e,t]=(0,q.useState)(!1),[n,r]=(0,q.useState)(!1),[o,s]=(0,q.useState)(null),[c,l]=(0,q.useState)(null),[u,d]=(0,q.useState)(``),[f,p]=(0,q.useState)(0),[m,h]=(0,q.useState)(!1),g=(0,q.useRef)(null),_=(0,q.useRef)(null),v=(0,q.useRef)(0),y=(0,q.useRef)(void 0),b=(0,q.useRef)(!1),x=(0,q.useRef)(!1);(0,q.useEffect)(()=>{x.current=!0;let e=!1,n;return(async()=>{try{let r=await i(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1]));if(e)return;let o=await a();if(e)return;g.current=o,_.current=r,n=r.onAuthStateChanged(o,n=>{e||(s(n),t(!0))})}catch{e||l(`登入初始化失敗；本機進度未變更。請稍後再試。`)}})(),()=>{e=!0,x.current=!1,v.current++,y.current?.(),n?.(),g.current=null,_.current=null}},[!0]);async function S(e,t=!1){if(!g.current||!_.current||b.current)return;let n=++v.current;b.current=!0,r(!0),l(null),d(``),h(!1),t&&(y.current=ri(()=>{x.current&&v.current===n&&(h(!0),l(`Google 登入尚未完成。若登入視窗停在錯誤頁，可返回這裡，保存盤面後重新載入登入。`))}));try{await e(g.current,_.current,()=>x.current&&v.current===n),x.current&&v.current===n&&t&&p(e=>e+1)}catch(e){x.current&&v.current===n&&l(ii(e))}finally{v.current===n&&(y.current?.(),b.current=!1,x.current&&(r(!1),h(!1)))}}async function C(e,t,n,a){let o=g.current;if(!o||b.current)return{kind:`error`,message:`帳號服務尚未準備完成，請稍後再試。`};let s=o.currentUser?.uid??null,c=!!o.currentUser?.isAnonymous;b.current=!0,r(!0),l(null),d(``);try{let r=await i(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1]));if(!x.current||o!==g.current||(o.currentUser?.uid??null)!==s||!!o.currentUser?.isAnonymous!==c)return{kind:`error`,message:`登入身分已變更，請重新確認帳號。`};let l=await si({current:()=>o.currentUser,login:async(e,t)=>(await r.signInWithEmailAndPassword(o,e,t)).user,create:async(e,t)=>(await r.createUserWithEmailAndPassword(o,e,t)).user,link:async(e,t,n)=>{if(o.currentUser?.uid!==e||!o.currentUser.isAnonymous)throw Error(`Identity changed`);return(await r.linkWithCredential(o.currentUser,r.EmailAuthProvider.credential(t,n))).user}},e,t,n,a);return x.current&&l.kind===`success`&&(d(l.registered?`註冊完成，已登入。`:`已登入。`),p(e=>e+1)),l}catch{return{kind:`error`,message:`登入操作未成功，請稍後再試。本機進度未變更。`}}finally{b.current=!1,x.current&&r(!1)}}return{externalLinkTarget:In.isNativePlatform()?`_self`:`_blank`,signInSequence:f,googleRestartAvailable:m,enabled:e,googleEnabled:Ln()!==`unsupported`,busy:n||!e&&!c,initializing:!e&&!n,user:o?{uid:o.uid,email:o.email,isAnonymous:o.isAnonymous}:null,error:c,notice:u,onGoogle:()=>{let e=Ln();e!==`unsupported`&&S(e===`android`?Rn:ni,!0)},onEmail:C,onGuest:()=>{S((e,t)=>t.signInAnonymously(e))},onSignOut:()=>{S(async(e,t,n)=>{let r=e.currentUser?.uid??null;if(Ln()===`android`&&e.currentUser?.providerData.some(e=>e.providerId===`google.com`)&&await Fn(),!n()||(e.currentUser?.uid??null)!==r)throw Error(`Identity changed`);await t.signOut(e)})}}}function li(e,t){let n=e.main.data;if(n.engine.ledger.balance!==t||n.feedback.sequence>0||n.feedback.records.length>0||e.trophies.unlocked.length>1)return!0;let r=e.trial;return!!r&&(r.spent>0||r.rewards>0||r.sequence>0)}var Y={asset:`assets/human-study/human-walk-knight-v2.json`,timeoutMs:3e4,sceneReadyTimeoutMs:35e3,fps:60,sceneHeight:4.46,cycle:{startFrame:5,frameCount:184,distance:.980941,seamBlend:.16},reachStart:2.7,reachEnd:3.8,releaseStart:4.55,releaseEnd:5.25,braceStart:2.9,braceEnd:3.3,braceRelease:4.35,palmOffset:[0,-.035,.025],elbowPole:[.35,-.8,-.18],stanceX:.175,stanceZ:.16,lean:.1,envIntensity:.65,envBlur:.04,reachFraction:.82,maximumAdvance:.48,pushPeak:4.4,sideAlign:.3,pelvisDrop:.09,stanceForward:.13,carryReach:.93,doorImpulseEnd:5.1,doorImpulseFraction:.35,sword:{handX:.29,handY:1.02,handZ:-.055,tipDistance:1.32,tipClearance:.008,bladeStart:.1,bladeWidth:.082,bladeThickness:.011,bladeRoll:.6,guardWidth:.32,guardRadius:.015,gripRadius:.023,gripLength:.15,pommelRadius:.032,gripCurl:[.55,1.05,.7]}};function ui(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function di(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var fi={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},X={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new P(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new P(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},pi={basic:{uniforms:Le([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:fi.meshbasic_vert,fragmentShader:fi.meshbasic_frag},lambert:{uniforms:Le([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:fi.meshlambert_vert,fragmentShader:fi.meshlambert_frag},phong:{uniforms:Le([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fi.meshphong_vert,fragmentShader:fi.meshphong_frag},standard:{uniforms:Le([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fi.meshphysical_vert,fragmentShader:fi.meshphysical_frag},toon:{uniforms:Le([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new Zt(0)}}]),vertexShader:fi.meshtoon_vert,fragmentShader:fi.meshtoon_frag},matcap:{uniforms:Le([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:fi.meshmatcap_vert,fragmentShader:fi.meshmatcap_frag},points:{uniforms:Le([X.points,X.fog]),vertexShader:fi.points_vert,fragmentShader:fi.points_frag},dashed:{uniforms:Le([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fi.linedashed_vert,fragmentShader:fi.linedashed_frag},depth:{uniforms:Le([X.common,X.displacementmap]),vertexShader:fi.depth_vert,fragmentShader:fi.depth_frag},normal:{uniforms:Le([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:fi.meshnormal_vert,fragmentShader:fi.meshnormal_frag},sprite:{uniforms:Le([X.sprite,X.fog]),vertexShader:fi.sprite_vert,fragmentShader:fi.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fi.background_vert,fragmentShader:fi.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:fi.backgroundCube_vert,fragmentShader:fi.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fi.cube_vert,fragmentShader:fi.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fi.equirect_vert,fragmentShader:fi.equirect_frag},distance:{uniforms:Le([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fi.distance_vert,fragmentShader:fi.distance_frag},shadow:{uniforms:Le([X.lights,X.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:fi.shadow_vert,fragmentShader:fi.shadow_frag}};pi.physical={uniforms:Le([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new P(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new P},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new P},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:fi.meshphysical_vert,fragmentShader:fi.meshphysical_frag};var mi={r:0,b:0,g:0},hi=new lt,gi=new Pt;gi.set(-1,0,0,0,1,0,0,0,1);function _i(e,t,n,r,i,a){let o=new Zt(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new U(new Ge(1,1,1),new Kt({name:`BackgroundCubeMaterial`,uniforms:z(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hi.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gi),l.material.toneMapped=Re.getTransfer(i.colorSpace)!==he,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new Xt(2,2),new Kt({name:`BackgroundMaterial`,uniforms:z(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Re.getTransfer(i.colorSpace)!==he,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(mi,Nt(e)),n.buffers.color.setClear(mi.r,mi.g,mi.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function vi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function yi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function bi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ft(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ft(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function xi(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Be,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Si=4,Ci=6,wi=20,Ti=256,Ei=new Wt,Di=new Zt,Oi=null,ki=0,Ai=0,ji=!1,Mi=new W,Ni=new W,Pi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Mi}=i;Oi=this._renderer.getRenderTarget(),ki=this._renderer.getActiveCubeFace(),Ai=this._renderer.getActiveMipmapLevel(),ji=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oi,ki,Ai),this._renderer.xr.enabled=ji,e.scissorTest=!1,Li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oi=this._renderer.getRenderTarget(),ki=this._renderer.getActiveCubeFace(),Ai=this._renderer.getActiveMipmapLevel(),ji=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:Ce,format:ft,colorSpace:Xe,depthBuffer:!1},r=Ii(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ii(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fi(r)),this._blurMaterial=zi(r,e,t),this._ggxMaterial=Ri(r,e,t)}return r}_compileMaterial(e){let t=new U(new Ot,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,r,i){let a=new $t(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Di),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new Ge,new Dt({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Di),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Li(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Li(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ei)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Si?n-d+Si:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Li(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ei),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Li(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ei)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Li(t,3*l*(r>this._lodMax-Si?r-this._lodMax+Si:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ei)}};function Fi(e){let t=[],n=[],r=e,i=e-Si+1+Ci;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ni.set(1,r,n):e===1?Ni.set(-n,1,-r):e===2?Ni.set(-n,r,1):e===3?Ni.set(-1,r,-n):e===4?Ni.set(-n,-1,r):Ni.set(n,r,-1),Ni.toArray(l,(e*6+t)*3)}}let u=new Ot;u.setAttribute(`position`,new Ze(c,3)),u.setAttribute(`outputDirection`,new Ze(l,3)),n.push(new U(u,null)),r>Si&&r--}return{lodMeshes:n,sizeLods:t}}function Ii(e,t,n){let r=new Oe(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Li(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ri(e,t,n){return new Kt({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zi(e,t,n){return new Kt({name:`SphericalGaussianBlur`,defines:{SAMPLES:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bi(){return new Kt({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Hi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vi(){return new Kt({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hi(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ui=class extends Oe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new m(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ge(5,5,5),i=new Kt({name:`CubemapFromEquirect`,uniforms:z(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Me),new Jt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Wi(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ui(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Pi(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Pi(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ue(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ki(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?A:S)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qi(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ji(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Lt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Yi(e,t,n){let r=new WeakMap,i=new N;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new y(h,p,m,u);g.type=ne,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new P(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xi(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zi={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qi(e,t,n,r,i,a){let o=new Oe(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ot;l.setAttribute(`position`,new k([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new k([0,2,0,0,2,0],2));let u=new Bt({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new U(l,u),f=new Wt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Oe(t,n,{type:Ce,depthBuffer:!1,stencilBuffer:!1}),c=new Oe(t,n,{type:Ce,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Re.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Zi[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var $i=new dt,ea=new u(1,1),ta=new y,na=new _e,ra=new m,ia=[],aa=[],oa=new Float32Array(16),sa=new Float32Array(9),ca=new Float32Array(4);function la(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ia[i];if(a===void 0&&(a=new Float32Array(i),ia[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ua(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function da(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fa(e,t){let n=aa[t];n===void 0&&(n=new Int32Array(t),aa[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2fv(this.addr,t),da(n,t)}}function ha(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ua(n,t))return;e.uniform3fv(this.addr,t),da(n,t)}}function ga(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4fv(this.addr,t),da(n,t)}}function _a(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;ca.set(r),e.uniformMatrix2fv(this.addr,!1,ca),da(n,r)}}function va(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;sa.set(r),e.uniformMatrix3fv(this.addr,!1,sa),da(n,r)}}function ya(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;oa.set(r),e.uniformMatrix4fv(this.addr,!1,oa),da(n,r)}}function ba(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2iv(this.addr,t),da(n,t)}}function Sa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ua(n,t))return;e.uniform3iv(this.addr,t),da(n,t)}}function Ca(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4iv(this.addr,t),da(n,t)}}function wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2uiv(this.addr,t),da(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ua(n,t))return;e.uniform3uiv(this.addr,t),da(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4uiv(this.addr,t),da(n,t)}}function Oa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ea.compareFunction=n.isReversedDepthBuffer()?518:515,a=ea):a=$i,n.setTexture2D(t||a,i)}function ka(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||na,i)}function Aa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ra,i)}function ja(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ta,i)}function Ma(e){switch(e){case 5126:return pa;case 35664:return ma;case 35665:return ha;case 35666:return ga;case 35674:return _a;case 35675:return va;case 35676:return ya;case 5124:case 35670:return ba;case 35667:case 35671:return xa;case 35668:case 35672:return Sa;case 35669:case 35673:return Ca;case 5125:return wa;case 36294:return Ta;case 36295:return Ea;case 36296:return Da;case 35678:case 36198:case 36298:case 36306:case 35682:return Oa;case 35679:case 36299:case 36307:return ka;case 35680:case 36300:case 36308:case 36293:return Aa;case 36289:case 36303:case 36311:case 36292:return ja}}function Na(e,t){e.uniform1fv(this.addr,t)}function Pa(e,t){let n=la(t,this.size,2);e.uniform2fv(this.addr,n)}function Fa(e,t){let n=la(t,this.size,3);e.uniform3fv(this.addr,n)}function Ia(e,t){let n=la(t,this.size,4);e.uniform4fv(this.addr,n)}function La(e,t){let n=la(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ra(e,t){let n=la(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function za(e,t){let n=la(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ba(e,t){e.uniform1iv(this.addr,t)}function Va(e,t){e.uniform2iv(this.addr,t)}function Ha(e,t){e.uniform3iv(this.addr,t)}function Ua(e,t){e.uniform4iv(this.addr,t)}function Wa(e,t){e.uniform1uiv(this.addr,t)}function Ga(e,t){e.uniform2uiv(this.addr,t)}function Ka(e,t){e.uniform3uiv(this.addr,t)}function qa(e,t){e.uniform4uiv(this.addr,t)}function Ja(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ea:$i;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ya(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||na,a[e])}function Xa(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ra,a[e])}function Za(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ta,a[e])}function Qa(e){switch(e){case 5126:return Na;case 35664:return Pa;case 35665:return Fa;case 35666:return Ia;case 35674:return La;case 35675:return Ra;case 35676:return za;case 5124:case 35670:return Ba;case 35667:case 35671:return Va;case 35668:case 35672:return Ha;case 35669:case 35673:return Ua;case 5125:return Wa;case 36294:return Ga;case 36295:return Ka;case 36296:return qa;case 35678:case 36198:case 36298:case 36306:case 35682:return Ja;case 35679:case 36299:case 36307:return Ya;case 35680:case 36300:case 36308:case 36293:return Xa;case 36289:case 36303:case 36311:case 36292:return Za}}var $a=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ma(t.type)}},eo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qa(t.type)}},to=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},no=/(\w+)(\])?(\[|\.)?/g;function ro(e,t){e.seq.push(t),e.map[t.id]=t}function io(e,t,n){let r=e.name,i=r.length;for(no.lastIndex=0;;){let a=no.exec(r),o=no.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ro(n,l===void 0?new $a(s,e,t):new eo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new to(s),ro(n,e)),n=e}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);io(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function oo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var so=37297,co=0;function lo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var uo=new Pt;function fo(e){Re._getMatrix(uo,Re.workingColorSpace,e);let t=`mat3( ${uo.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(e)){case Rt:return[t,`LinearTransferOETF`];case he:return[t,`sRGBTransferOETF`];default:return Ft(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function po(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+lo(e.getShaderSource(t),r)}return i}function mo(e,t){let n=fo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ho={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function go(e,t){let n=ho[t];return n===void 0?(Ft(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var _o=new W;function vo(){return Re.getLuminanceCoefficients(_o),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${_o.x.toFixed(4)}, ${_o.y.toFixed(4)}, ${_o.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function yo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(So).join(`
`)}function bo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function So(e){return e!==``}function Co(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var To=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(e){return e.replace(To,Oo)}var Do=new Map;function Oo(e,t){let n=fi[t];if(n===void 0){let e=Do.get(t);if(e!==void 0)n=fi[e],Ft(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Eo(n)}var ko=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(e){return e.replace(ko,jo)}function jo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Mo(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var No={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Po(e){return No[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Fo={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Io(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Fo[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Lo={302:`ENVMAP_MODE_REFRACTION`};function Ro(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Lo[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var zo={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Bo(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:zo[e.combine]||`ENVMAP_BLENDING_NONE`}function Vo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ho(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Po(n),l=Io(n),u=Ro(n),d=Bo(n),f=Vo(n),p=yo(n),m=bo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(So).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(So).join(`
`),_.length>0&&(_+=`
`)):(g=[Mo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(So).join(`
`),_=[Mo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:fi.tonemapping_pars_fragment,n.toneMapping===0?``:go(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,fi.colorspace_pars_fragment,mo(`linearToOutputTexel`,n.outputColorSpace),vo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(So).join(`
`)),o=Eo(o),o=Co(o,n),o=wo(o,n),s=Eo(s),s=Co(s,n),s=wo(s,n),o=Ao(o),s=Ao(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=oo(i,i.VERTEX_SHADER,y),S=oo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=po(i,x,`vertex`),n=po(i,S,`fragment`);Lt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ft(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ao(i,h),T=xo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,so)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=co++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Uo=0,Wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Go(e),t.set(e,n)),n}},Go=class{constructor(e){this.id=Uo++,this.code=e,this.usedTimes=0}};function Ko(e){return e===1030||e===37490||e===36285}function qo(e,t,n,r,i,a){let o=new jt,s=new Wo,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Ft(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=pi[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,F=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,se=!!i.metalnessMap,ce=!!i.roughnessMap,L=i.anisotropy>0,R=i.clearcoat>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,z=i.sheen>0,B=i.transmission>0,fe=L&&!!i.anisotropyMap,pe=R&&!!i.clearcoatMap,me=R&&!!i.clearcoatNormalMap,he=R&&!!i.clearcoatRoughnessMap,ge=de&&!!i.iridescenceMap,_e=de&&!!i.iridescenceThicknessMap,ve=z&&!!i.sheenColorMap,ye=z&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=B&&!!i.transmissionMap,we=B&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,V=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(V=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:F,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Ko(i.normalMap.format),metalnessMap:se,roughnessMap:ce,anisotropy:L,anisotropyMap:fe,clearcoat:R,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:z,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:B,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:F&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:I&&m(i.emissiveMap.channel),metalnessMapUv:se&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:we&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||L),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:V,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Re.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&Re.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=pi[t];n=F.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ho(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Jo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Yo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Yo),r.length>1&&r.sort(t||Xo),i.length>1&&i.sort(t||Xo)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Qo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Zo,e.set(t,[i])):n>=r.length?(i=new Zo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function $o(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new Zt};break;case`SpotLight`:n={position:new W,direction:new W,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new Zt,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new Zt,groundColor:new Zt};break;case`RectAreaLight`:n={color:new Zt,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function es(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ts=0;function ns(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function rs(e){let t=new $o,n=es(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new lt,o=new lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ns);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ts++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function is(e){let t=new rs(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function as(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new is(e),t.set(n,[a])):r>=i.length?(a=new is(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var os=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ss=`uniform sampler2D shadow_pass;
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
}`,cs=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ls=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],us=new lt,ds=new W,fs=new W;function ps(e,t,n){let r=new B,i=new P,a=new P,o=new N,s=new It,c=new We,l={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new P},radius:{value:4}},vertexShader:os,fragmentShader:ss}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ot;h.setAttribute(`position`,new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new U(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(Ft(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],f=l.shadow;if(f===void 0){Ft(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let h=f.getFrameExtents();i.multiply(h),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/h.x),i.x=a.x*h.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/h.y),i.y=a.y*h.y,f.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(l.isPointLight){Ft(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new Oe(i.x,i.y,{format:He,type:Ce,minFilter:Me,magFilter:Me,generateMipmaps:!1}),f.map.texture.name=l.name+`.shadowMap`,f.map.depthTexture=new u(i.x,i.y,ne),f.map.depthTexture.name=l.name+`.shadowMapDepth`,f.map.depthTexture.format=ce,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=At,f.map.depthTexture.magFilter=At}else l.isPointLight?(f.map=new Ui(i.x),f.map.depthTexture=new me(i.x,D)):(f.map=new Oe(i.x,i.y),f.map.depthTexture=new u(i.x,i.y,D)),f.map.depthTexture.name=l.name+`.shadowMap`,f.map.depthTexture.format=ce,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=Me,f.map.depthTexture.magFilter=Me):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=At,f.map.depthTexture.magFilter=At);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let _=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();l.isPointLight!==!0&&f.updateMatrices(l,s);for(let t=0;t<_;t++){let i=f.getCamera(t);if(l.isPointLight){let e=f.camera,n=f.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ds.setFromMatrixPosition(l.matrixWorld),e.position.copy(ds),fs.copy(e.position),fs.add(cs[t]),e.up.copy(ls[t]),e.lookAt(fs),e.updateMatrixWorld(),n.makeTranslation(-ds.x,-ds.y,-ds.z),us.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(us,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=f.getFrustum(t),x(n,s,i,l,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,s),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Oe(i.x,i.y,{format:He,type:Ce}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ms(e,t){function n(){let t=!1,n=new N,r=null,i=new N(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Zt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(P)[1]),ee=te>=1);let ne=null,F={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new N().fromArray(re),oe=new N().fromArray(ie);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),ce(e.CULL_FACE),B(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function R(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let z={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function B(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(L(e.BLEND),g=!1);return}if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Lt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Lt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Lt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(z[r],z[i],z[o],z[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?L(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?B(0):B(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?L(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function _e(t){t?ce(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function ye(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function be(){let t=F[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function V(){try{e.texImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,F={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Zt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:L,bindFramebuffer:R,drawBuffers:le,useProgram:ue,setBlending:B,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:V,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:Me,viewport:Ne,reset:Fe}}function hs(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new P,d=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):Ye(`canvas`)}function _(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ft(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ft(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ft(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Ft(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Rt:Re.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ft(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t)}function E(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&D(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function D(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function O(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let k=0;function A(){k=0}function j(){return k}function M(e){k=e}function N(){let e=k;return e>=i.maxTextures&&Ft(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),k+=1,e}function ee(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&xe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ft(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ft(`WebGLRenderer: Texture marked for update but image is incomplete`);else{R(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){R(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){R(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[bt]:e.REPEAT,[Ut]:e.CLAMP_TO_EDGE,[$e]:e.MIRRORED_REPEAT},ae={[At]:e.NEAREST,[st]:e.NEAREST_MIPMAP_NEAREST,[St]:e.NEAREST_MIPMAP_LINEAR,[Me]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[de]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function I(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Ft(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=ee(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&D(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function L(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ce(n.start,r.width,4),c=ce(t.start,r.width,4);n.start<=i+1&&a===c&&ce(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function R(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Re.getPrimaries(Re.workingColorSpace),r=o.colorSpace===``?null:Re.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=Se(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);I(c,o);let h,g=o.mipmaps,b=o.isVideoTexture!==!0,w=d.__version===void 0||l===!0,T=u.dataReady,E=C(o,t);if(o.isDepthTexture)m=S(o.format===pt,o.type),w&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&L(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(b){if(T){if(o.layerUpdates.size>0){let t=Ct(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ct(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&w){let t=Ce(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(w){let r=Ce(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Re.getPrimaries(Re.workingColorSpace),r=o.colorSpace===``?null:Re.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Se(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,g,b,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(o,h);I(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?Ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ce(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),be(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;be(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);be(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function B(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),I(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)be(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)be(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)B(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?B(i.__webglFramebuffer[0],t,0):B(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),z(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),z(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&be(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),z(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),I(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),I(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),I(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(be(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ge.push(c),_e.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function be(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function xe(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Se(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Re.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ft(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Lt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=A,this.getTextureUnits=j,this.setTextureUnits=M,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=F,this.setTextureCube=re,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gs(e,t){function n(n,r=``){let i,a=Re.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var _s=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vs=`
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

}`,ys=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new R(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:_s,fragmentShader:vs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bs=class extends I{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new ys,y={},b=t.getContextAttributes(),x=null,S=null,C=[],w=[],T=new P,E=null,O=null,k=new $t;k.viewport=new N;let A=new $t;A.viewport=new N;let j=[k,A],M=new Ve,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Ne,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Ne,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Ne,C[e]=t),t.getHandSpace()};function ne(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ee=null,te=null,_.reset();for(let e in y)delete y[e];if(e.setRenderTarget(x),m=null,f=null,d=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ft(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ft(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?m:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?pt:ce,a=b.stencil?p:D);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Oe(f.textureWidth,f.textureHeight,{format:ft,type:fe,depthTexture:new u(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Oe(m.framebufferWidth,m.framebufferHeight,{format:ft,type:fe,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new W,ae=new W;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=A.near=k.near=t,M.far=A.far=k.far=n,(ee!==M.near||te!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ee=M.near,te=M.far),M.layers.mask=e.layers.mask|6,k.layers.mask=M.layers.mask&-5,A.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;I(M,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?oe(M,k,A):M.projectionMatrix.copy(k.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=v*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||m!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return y[e]};let L=null;function le(t,i){if(l=i.getViewerPose(c||a),h=i,l!==null){let t=l.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(m!==null)a=m.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=j[n];o===void 0&&(o=new $t,o.layers.enable(n),o.viewport=new N,j[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new R,y[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}L&&L(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ue=new ui;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},xs=new lt,Ss=new Pt;Ss.set(-1,0,0,0,1,0,0,0,1);function Cs(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Nt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(xs.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ss),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ws(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Lt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ft(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ft(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ts=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Es=null;function Ds(){return Es===null&&(Es=new _(Ts,16,16,He,Ce),Es.name=`DFG_LUT`,Es.minFilter=Me,Es.magFilter=Me,Es.wrapS=Ut,Es.wrapT=Ut,Es.generateMipmaps=!1,Es.needsUpdate=!0),Es}var Os=class{constructor(e={}){let{canvas:t=l(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=fe}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let g=m,_=new Set([oe,_t,kt]),v=new Set([fe,D,w,p,xe,Te]),y=new Uint32Array(4),b=new Int32Array(4),x=new W,S=null,C=null,T=[],E=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,A=!1,j=null,M=null,ee=null,te=null;this._outputColorSpace=Yt;let P=0,ne=0,F=null,re=-1,ie=null,ae=new N,I=new N,se=null,ce=new Zt(0),L=0,R=t.width,le=t.height,ue=1,z=null,pe=null,me=new N(0,0,R,le),he=new N(0,0,R,le),ge=!1,_e=new B,ve=!1,ye=!1,be=new lt,Se=new W,we=new N,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function ke(){return F===null?ue:1}let V=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,H,Pe,Fe,Ie,Le,U,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),V===null){let t=`webgl2`;if(V=je(t,e),V===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}et()}catch(e){throw t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),Lt(`WebGLRenderer: `+e.message),e}function et(){Me=new Gi(V),Me.init(),Ze=new gs(V,Me),Ne=new bi(V,Me,e,Ze),H=new ms(V,Me),Ne.reversedDepthBuffer&&f&&H.buffers.depth.setReversed(!0),M=V.createFramebuffer(),ee=V.createFramebuffer(),te=V.createFramebuffer(),Pe=new Ji(V),Fe=new Jo,Ie=new hs(V,Me,H,Fe,Ne,Ze,Pe),Le=new Wi(k),U=new di(V),Qe=new vi(V,U),ze=new Ki(V,U,Pe,Qe),Be=new Xi(V,ze,U,Qe,Pe),Je=new Yi(V,Ne,Ie),Ge=new xi(Fe),Ve=new qo(k,Le,Me,Ne,Qe,Ge),He=new Cs(k,Fe),Ue=new Qo,We=new as(Me),qe=new _i(k,Le,H,Be,h,s),Ke=new ps(k,Be,Ne),$e=new ws(V,Pe,Ne,H),Ye=new yi(V,Me,Pe),Xe=new qi(V,Me,Pe),Pe.programs=Ve.programs,k.capabilities=Ne,k.extensions=Me,k.properties=Fe,k.renderLists=Ue,k.shadowMap=Ke,k.state=H,k.info=Pe}g!==1009&&(O=new Qi(g,t.width,t.height,o,r,i));let tt=new bs(k,V);this.xr=tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(R,le,!1))},this.getSize=function(e){return e.set(R,le)},this.setSize=function(e,n,r=!0){if(tt.isPresenting){Ft(`WebGLRenderer: Can't change size while VR device is presenting.`);return}R=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(R*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){R=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){Lt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ft(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}O.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),H.viewport(ae.copy(me).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),H.scissor(I.copy(he).multiplyScalar(ue).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){H.setScissorTest(ge=e)},this.setOpaqueSort=function(e){z=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=_.has(t)}if(e){let e=F.texture.type,t=v.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,V.clearBufferuiv(V.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,V.clearBufferiv(V.COLOR,0,b))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),qe.dispose(),Ue.dispose(),We.dispose(),Fe.dispose(),Le.dispose(),Be.dispose(),Qe.dispose(),$e.dispose(),Ve.dispose(),tt.dispose(),tt.removeEventListener(`sessionstart`,pt),tt.removeEventListener(`sessionend`,mt),ht.stop()};function nt(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),A=!0}function rt(){ct(`WebGLRenderer: Context Restored.`),A=!1;let e=Pe.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;et(),Pe.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function it(e){Lt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),Fe.remove(e)}function st(e){let t=Fe.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Qe.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=U.get(c),g=Xe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*ke()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?U.get(c).bytesPerElement:1,o=Fe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),ve===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),C=We.get(n),C.init(t),E.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),j!==null&&j.updateLights(C.state.lightsArray),ye=this.localClippingEnabled,ve=Ge.init(this.clippingPlanes,ye),ve===!0&&Ge.setGlobalState(this.clippingPlanes,t),j!==null&&Ke.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),C=E.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Fe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new ui;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,tt.setAnimationLoop(e),e===null?ht.stop():ht.start()},tt.addEventListener(`sessionstart`,pt),tt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Lt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;j!==null&&j.renderStart(e,t);let n=tt.enabled===!0&&tt.isPresenting===!0,r=O!==null&&(F===null||n)&&O.begin(k,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(t),t=tt.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,F),C=We.get(e,E.length),C.init(t),C.state.textureUnits=Ie.getTextureUnits(),E.push(C),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(be,Ae,t.reversedDepth),ye=this.localClippingEnabled,ve=Ge.init(this.clippingPlanes,ye),S=Ue.get(e,T.length),S.init(),T.push(S),tt.enabled===!0&&tt.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,k.sortObjects)}gt(e,t,0,k.sortObjects),S.finish(),j!==null&&j.updateLights(C.state.lightsArray),k.sortObjects===!0&&S.sort(z,pe),De=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,De&&qe.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Ge.beginShadows();let i=C.state.shadowsArray;if(Ke.render(i,e,t),ve===!0&&Ge.endShadows(),(r&&O.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}De&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(S,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),De&&qe.render(e),vt(S,e,t)}F!==null&&ne===0&&(Ie.updateMultisampleRenderTarget(F),Ie.updateRenderTargetMipmap(F)),r&&O.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),Qe.resetDefaultState(),re=-1,ie=null,E.pop(),E.length>0?(C=E[E.length-1],Ie.setTextureUnits(C.state.textureUnits),ve===!0&&Ge.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,T.pop(),S=T.length>0?T[T.length-1]:null,j!==null&&j.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(_e)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let i=Be.update(e),a=e.material;a.visible&&S.push(e,i,a,n,we.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(_e))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,we.z,s,t)}}else a.visible&&S.push(e,i,a,n,we.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),ve===!0&&Ge.setGlobalState(k.clippingPlanes,n),r&&H.viewport(ae.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new Oe(1,1,{generateMipmaps:!0,type:e?Ce:fe,minFilter:de,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(ce),L=k.getClearAlpha(),L<1&&k.setClearColor(16777215,.5),k.clear(),De&&qe.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),ve===!0&&Ge.setGlobalState(k.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(ce,L),d!==void 0&&(r.viewport=d),k.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Ee);let r=Fe.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ve.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,k),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),wt(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ao.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=Fe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?k.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Re.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Fe.get(r),y=C.state.lights;if(ve===!0&&(ye===!0||e!==ie)){let t=e===ie&&r.id===re;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(H.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==re&&(re=r.id,w=!0),v.needsLights){let e=Tt(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||ie!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(V,`projectionMatrix`,e.projectionMatrix),E.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(V,Se.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(V,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(V,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(V,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(V,i,`bindMatrix`),E.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(V,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(V,i,`batchingTexture`),E.setValue(V,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(V,i,`batchingIdTexture`),E.setValue(V,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(V,`batchingColorTexture`,i._colorsTexture,Ie));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Je.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Ds()),w){if(E.setValue(V,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&Ot(D,T),a&&r.fog===!0&&He.refreshFogUniforms(D,a),He.refreshMaterialUniforms(D,r,ue,le,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}ao.upload(V,Ct(v),D,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ao.upload(V,Ct(v),D,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(V,`center`,i.center),E.setValue(V,`modelViewMatrix`,i.modelViewMatrix),E.setValue(V,`normalMatrix`,i.normalMatrix),E.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];$e.update(n,x),$e.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=Fe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Fe.get(e.texture).__webglTexture=t,Fe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Fe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,P=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=Fe.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),I.copy(e.scissor),se=e.scissorTest,H.viewport(ae),H.scissor(I),H.setScissorTest(se),re=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,Fe.get(e.texture).__webglTexture,Fe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Fe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Fe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?Fe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),I.copy(e.scissor),se=e.scissorTest}else ae.copy(me).multiplyScalar(ue).floor(),I.copy(he).multiplyScalar(ue).floor(),se=ge;if(n!==0&&(r=M),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(ae),H.scissor(I),H.setScissorTest(se),i){let r=Fe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Fe.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Fe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}re=-1};function jt(e){let t=Fe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Fe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Ze.convert(c),Ze.convert(l),a)}finally{let e=F===null?null:Fe.get(F).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Fe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Ze.convert(l),Ze.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=F===null?null:Fe.get(F).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Et(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ze.convert(t.format),_=Ze.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Fe.get(e),r=Fe.get(t),h=Fe.get(n.__renderTarget),g=Fe.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Fe.has(e)){let n=Fe.get(e),r=Fe.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,ee),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){Fe.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){P=0,ne=0,F=null,H.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ae}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),t.unpackColorSpace=Re._getUnpackColorSpace()}};function ks(e){let t=s.treasuryScene.surface,n=[new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4)],r=(e,n,r=1)=>{let i=Math.abs(e/r),a=Math.abs(n/r);return i<t.crossStroke&&a<t.crossArm||a<t.crossStroke&&i<t.crossArm||i<t.crossTip&&Math.abs(a-t.crossArm)<t.crossTipDepth||a<t.crossTip&&Math.abs(i-t.crossArm)<t.crossTipDepth};for(let i=0;i<t.size;i++)for(let a=0;a<t.size;a++){let o=(a+.5)/t.size*2-1,s=(i+.5)/t.size*2-1,c=Math.hypot(o,s),l=Math.atan2(s,o),u=Math.sin(i*t.grainFrequency)*t.grainAmplitude,d=!1;if(e===`coin`){let e=Math.round(l*t.beadCount/(Math.PI*2))*Math.PI*2/t.beadCount;d=Math.abs(c-t.rimRadius)<t.rimWidth||Math.abs(c-t.innerRadius)<t.innerWidth||Math.hypot(o-Math.cos(e)*t.beadRadius,s-Math.sin(e)*t.beadRadius)<t.beadSize||r(o,s)||r(Math.abs(o)-t.satelliteOffset,Math.abs(s)-t.satelliteOffset,t.satelliteScale)}let f=e===`coin`?[(d?t.reliefAlbedo:t.fieldAlbedo)+u,(d?t.reliefHeight:t.fieldHeight)+u,(d?t.reliefRoughness:t.fieldRoughness)+u]:[t.reliefAlbedo+u,t.fieldHeight+u,t.fieldRoughness+u];for(let e=0;e<n.length;e++){let r=n[e],o=(i*t.size+a)*4,s=Math.round(wt.clamp(f[e],0,1)*255);r[o]=r[o+1]=r[o+2]=s,r[o+3]=255}}let i=n.map((n,r)=>{let i=new _(n,t.size,t.size,ft);return i.name=`${e}-${[`albedo`,`height`,`roughness`][r]}`,i.colorSpace=r===0?Yt:``,i.magFilter=Me,i.minFilter=de,i.generateMipmaps=!0,e===`steel`&&(i.wrapS=i.wrapT=bt),i.needsUpdate=!0,i});return{albedo:i[0],height:i[1],roughness:i[2]}}function As(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function js(e){let{doors:t,fov:n}=s.cinematic,r=Number.isFinite(e)&&e>0?e:1,i=n*Math.PI/360;return Math.max(t.height+t.frameWidth*2,(t.width+t.frameWidth*2)/r)/(2*Math.tan(i))*t.cameraMargin+t.frameDepth}function Ms(e,t,n=`gentle`){let{doors:r,introSeconds:i}=s.cinematic,a=Number.isFinite(e)?Math.max(0,Math.min(i,e)):0,o=n===`push`?As(a,r.openStart,Y.doorImpulseEnd)*Y.doorImpulseFraction+As(a,Y.doorImpulseEnd,r.openEnd)*(1-Y.doorImpulseFraction):As(a,r.openStart,r.openEnd),c=As(a,r.pushStart,i),l=js(t),u=l*(1-r.approachFraction*o);return{angle:o*r.openDegrees*Math.PI/180,opening:o,cameraZ:u+(r.endCameraZ-u)*c,cameraY:r.startCameraY+(r.endCameraY-r.startCameraY)*c,fitZ:l,light:r.lightStart+(r.lightEnd-r.lightStart)*o}}function Ns(e=`gentle`){let t=s.cinematic.doors,n=s.premium,r=new f;r.name=`vault-door-portal`;let i=new Set,a=new Set,o=new Set,c=new Set([`door`,`wall`]),l=!1,u,p=()=>{},m=new Promise(e=>{p=e}),h=()=>{},g=new Promise(e=>{h=e}),v=e=>(i.add(e),e),y=e=>(a.add(e),e),b=()=>{l||(l=!0,clearTimeout(u),p(),h(),i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),o.forEach(e=>e.dispose()),r.clear())};try{let i=v(new Ge),a=y(new Je({color:n.colors.champagne,metalness:n.materials.metalness,roughness:n.materials.goldRoughness})),s=y(new Je({color:n.colors.coinSide,metalness:t.faceMetalness,roughness:t.faceRoughness})),x=new Uint8Array(t.stoneSize*t.stoneSize*4),S=t.stoneSize/t.stoneRows,C=t.stoneSize/t.stoneColumns;for(let e=0;e<t.stoneSize;e++)for(let n=0;n<t.stoneSize;n++){let r=Math.floor(e/S),i=(n+r%2*C/2)%C,a=e%S<t.stoneGroutPx||i<t.stoneGroutPx,o=Math.sin(n*t.goldenAngle+e)*Math.cos(e*t.goldenAngle-n),s=Math.round(255*(a?t.stoneGroutValue:t.stoneValue+o*t.stoneNoise)),c=(e*t.stoneSize+n)*4;x[c]=x[c+1]=x[c+2]=s,x[c+3]=255}let w=new _(x,t.stoneSize,t.stoneSize);w.wrapS=w.wrapT=bt,w.magFilter=Me,w.minFilter=de,w.generateMipmaps=!0,w.needsUpdate=!0,o.add(w);let T=y(new Je({color:t.stoneColor,metalness:0,roughness:t.stoneRoughness,map:w,bumpMap:w,bumpScale:t.stoneBump})),E=y(new Dt({color:n.colors.white,toneMapped:!1,visible:!1})),D=y(new Dt({color:n.colors.white,toneMapped:!1,visible:!1})),O=y(new Je({color:n.colors.edge,metalness:n.materials.metalness,roughness:n.materials.goldRoughness,emissive:n.colors.coinSide,emissiveIntensity:t.sealEmissive})),k=(e,t,n,r)=>{let a=new U(i,r);return a.scale.set(...t),a.position.set(...n),e.add(a),a},A=t.width/2,j=t.height/2,M=(e,n,i,a,o,s)=>{let c=v(new Xt(n-e,a-i)),l=c.getAttribute(`position`),u=c.getAttribute(`uv`);for(let r=0;r<u.count;r++){let o=l.getX(r)+(e+n)/2,c=l.getY(r)+(i+a)/2;u.setXY(r,s?o/t.wallArtWidth+.5:o/t.stoneRepeatWorld,s?(c-t.wallArtCenterY)/t.wallArtHeight+.5:c/t.stoneRepeatWorld)}let d=new U(c,o);d.name=s?`vault-facade-wall`:`vault-stone-wall`,d.position.set((e+n)/2,(i+a)/2,t.thickness/2+t.faceLift*(s?2:1)),r.add(d)};for(let e of[-1,1])k(r,[t.wallExtent,t.height+t.wallExtent*2,t.thickness],[e*(A+t.wallExtent/2),0,0],T),k(r,[t.width,t.wallExtent,t.thickness],[0,e*(j+t.wallExtent/2),0],T),k(r,[t.frameWidth,t.height+t.frameWidth*2,t.frameDepth],[e*(A+t.frameWidth/2),0,t.frameDepth/2],a),k(r,[t.width,t.frameWidth,t.frameDepth],[0,e*(j+t.frameWidth/2),t.frameDepth/2],a);M(-t.wallExtent,-A,-t.wallExtent,t.wallExtent,T,!1),M(A,t.wallExtent,-t.wallExtent,t.wallExtent,T,!1),M(-A,A,j,t.wallExtent,T,!1),M(-A,A,-t.wallExtent,-j,T,!1);let N=t.wallArtCenterY-t.wallArtHeight/2,ee=t.wallArtCenterY+t.wallArtHeight/2;M(-t.wallArtWidth/2,-A,N,ee,E,!0),M(A,t.wallArtWidth/2,N,ee,E,!0),M(-A,A,j,ee,E,!0),M(-A,A,N,-j,E,!0);let te=v(new Gt(t.pillarRadius,t.pillarRadius,t.pillarHeight,t.pillarSegments)),P=v(new Gt(t.pillarRadius*t.pillarRimScale,t.pillarRadius*t.pillarRimScale,t.pillarRimHeight,t.pillarSegments)),ne=v(new d(t.sconceRadius,t.boltSegments,t.boltSegments)),F=y(new Dt({color:n.colors.light,toneMapped:!1}));for(let e of[-1,1]){let i=e*(A+t.pillarOffset),o=new U(te,T);o.position.set(i,0,t.frameDepth),r.add(o);for(let e of[-1,1]){let n=new U(P,a);n.position.set(i,e*(t.pillarHeight/2-t.pillarRimHeight),t.frameDepth),r.add(n)}let s=new U(ne,F);s.position.set(i,t.sconceY,t.sconceZ),r.add(s);let c=new ge(n.colors.light,t.sconceIntensity,t.sconceDistance,t.sconceDecay);c.position.copy(s.position),r.add(c)}let re=v(new Gt(t.hingeRadius,t.hingeRadius,t.hingeHeight,t.hingeSegments)),ie=v(new d(t.boltRadius,t.boltSegments,t.boltSegments)),oe=v(new se(t.sealRadius,t.sealTube,t.hingeSegments,t.sealSegments,Math.PI)),I=[];for(let e of[-1,1]){let n=new f;n.name=e<0?`vault-left-hinge`:`vault-right-hinge`,n.position.x=e*A,r.add(n),I.push(n);let i=-e*A/2;k(n,[A+t.seamOverlap,t.height,t.thickness],[i,0,0],s);let o=v(new Xt(A+t.seamOverlap,t.height)),c=o.getAttribute(`uv`);for(let t=0;t<c.count;t++)c.setX(t,c.getX(t)/2+(e>0?.5:0));let l=new U(o,D);l.position.set(i,0,t.thickness/2+t.faceLift),n.add(l);let u=t.thickness/2+t.innerRail/2+t.faceLift;for(let e of[-1,1]){k(n,[t.innerRail,t.height-t.railInset*2,t.innerRail],[i+e*(A/2-t.railInset),0,u],a),k(n,[A-t.railInset*2,t.innerRail,t.innerRail],[i,e*(j-t.railInset),u],a);for(let r=0;r<t.boltRows;r++){let o=new U(ie,a);o.position.set(i+e*(A/2-t.boltInset),-j+t.boltInset+(t.height-t.boltInset*2)*r/(t.boltRows-1),u),n.add(o)}}for(let e of[-1,0,1]){let r=new U(re,a);r.position.set(0,e*t.hingeSpacing,t.thickness/2),n.add(r)}let d=new U(oe,O);d.position.set(-e*A,t.sealY,u+t.sealLift),d.rotation.z=e<0?Math.PI/2:-Math.PI/2,n.add(d)}let ce=new ge(n.colors.light,t.lightStart,t.lightDistance,t.lightDecay);ce.position.set(t.lightPosition[0],t.lightPosition[1],t.lightPosition[2]),r.add(ce);let L=e=>{c.delete(e),e===`door`&&h(),c.size===0&&(clearTimeout(u),p())};u=setTimeout(()=>{c.clear(),h(),p()},t.textureTimeoutMs);let R=(e,t,r)=>{let i=new ae().load(t,t=>{if(l){t.dispose();return}t.colorSpace=Yt,t.anisotropy=n.texture.anisotropy,r.map=t,r.visible=!0,r.needsUpdate=!0,L(e)},void 0,()=>L(e));o.add(i)};return R(`door`,t.faceAsset,D),R(`wall`,t.wallAsset,E),{root:r,ready:m,frontReady:g,draw(t,n){let i=Ms(t,n,e);return I[0].rotation.y=i.angle,I[1].rotation.y=-i.angle,ce.intensity=i.light,r.updateMatrixWorld(!0),i},dispose:b}}catch(e){throw b(),e}}var Ps={height:1.8,colors:{background:`#171c24`,body:`#aab0b3`,floor:`#30363e`,grid:`#58626d`,light:`#fff3e1`,fill:`#adc8ec`,text:`#e4e8ef`},material:{roughness:.68,metalness:.04},camera:{fov:38,near:.05,far:60,distance:3.1,height:1.2,targetY:.95},light:{ambient:2,key:3.2,fill:1.3,shadowSize:1024},floor:{size:30,divisions:60,y:-.015},knight:{startFrame:181,frameCount:421,elbowBendScale:.55,elbowMin:.24,elbowMax:.48,fingerCurl:[.3,.42,.25]},pixelRatio:1.5,timeoutMs:12e3};function Fs(e){let t=new f,n=new Ot;n.setAttribute(`position`,new k(e.positions,3)),n.setAttribute(`skinIndex`,new S(e.skinIndex,4)),n.setAttribute(`skinWeight`,new k(e.skinWeight,4)),n.setIndex(e.indices),n.computeVertexNormals();let r=new Je({color:Ps.colors.body,...Ps.material}),i=new mt(n,r);i.name=`makehuman-continuous-body`,i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let a=e.bones.map(e=>{let t=new gt;return t.name=e.name,t});e.bones.forEach((t,n)=>{a[n].position.fromArray(t.head),t.parent>=0?(a[n].position.sub(new W().fromArray(e.bones[t.parent].head)),a[t.parent].add(a[n])):i.add(a[n])}),t.add(i),t.updateMatrixWorld(!0);let o=new L(a);i.bind(o);let s=(e.frames.length-1)/e.fps,c=new ye,l=new ye,u=e.positions.reduce((t,n,r)=>(r%3==1&&e.positions[r]<.16&&t.push((r-1)/3),t),[]),d=0,p=!1;function m(n){if(p)return;let r=wt.clamp(Number.isFinite(n)?n:0,0,s)*e.fps,i=Math.floor(r),o=e.frames[i],u=e.frames[Math.min(i+1,e.frames.length-1)],f=r-i;a.forEach((e,t)=>{c.fromArray(o.q,t*4),l.fromArray(u.q,t*4),e.quaternion.copy(c).slerp(l,f).normalize()}),t.position.fromArray(o.root).lerp(new W().fromArray(u.root),f),t.position.y+=d,t.updateMatrixWorld(!0)}m(0);let h=new W,g=1/0;for(let e of u)i.getVertexPosition(e,h),g=Math.min(g,h.y);return d=e.groundOffset??-g,m(0),{root:t,mesh:i,bones:a,skeleton:o,duration:s,draw:m,dispose(){p||(p=!0,n.dispose(),r.dispose(),o.dispose())}}}var Z={colors:{mail:`#56616a`,steel:`#a9b4bb`,brass:`#b49a57`,linen:`#dad0b6`,red:`#622b34`,leather:`#30221c`,dark:`#111419`},material:{mail:{roughness:.84,metalness:.35},steel:{roughness:.38,metalness:.78},brass:{roughness:.48,metalness:.72},cloth:{roughness:.96,metalness:0},leather:{roughness:.86,metalness:.02}},assets:{mail:`assets/knight/chainmail-v1.webp`,steel:`assets/knight/forged-steel-v1.webp`,linen:`assets/knight/ivory-linen-v1.webp`},texture:{timeoutMs:3e4,repeatPerMetre:7,anisotropy:4,mailBump:.0014,clothBump:5e-4},surface:{mailOffset:.008,gloveOffset:.005,handThreshold:.4,mailMinY:.24,mailMaxY:1.58,coveredMinY:.65,coveredMaxY:1.28,coveredMaxX:.24,slitInnerX:.105},coat:{segments:48,folds:12,foldDepth:.003,armholeY:1.32,armholeWidth:.8,rows:[[.96,.194,.158,.023],[1.04,.178,.152,.034],[1.12,.178,.154,.04],[1.22,.2,.162,.034],[1.32,.221,.152,.03],[1.41,.238,.131,.024],[1.47,.213,.1,.02],[1.51,.148,.082,.027],[1.525,.071,.065,.027]],hemY:.61,split:.025,hemFlare:.08,skirtRows:12,legBlendHeight:.12},belt:{y:1.058,height:.04,x:.181,z:.155,centerZ:.035,buckleWidth:.059,buckleHeight:.048,buckleTube:.004},helmet:{segments:32,rows:[[1.548,.105,.125,.055],[1.61,.117,.14,.055],[1.71,.116,.143,.055],[1.785,.112,.137,.046],[1.818,.072,.096,.038],[1.825,.001,.001,.038]],eyeY:1.7,eyeHeight:.012,eyeWidth:.072,eyeX:.049,browY:1.715,browHeight:.009,noseWidth:.017,noseHeight:.135,rivetRadius:.003,ventRadius:.0024},cross:{centerY:1.338,width:.175,height:.225,stroke:.044,offset:.003},cape:{width:.49,flare:.08,topY:1.47,length:.77,topZ:-.145,bottomZ:-.28,columns:20,rows:24,folds:5,foldDepth:.014,physics:{fps:60,gravity:9.81,damping:.991,drag:2.8,iterations:7,relaxFrames:35,shear:.55,bend:.13,gust:1.2,gustFrequency:3.8,ripple:.35,lateralGust:1.4,lateralFrequency:2.8,bodyRadius:.185,thighRadius:.087,collisionMargin:.007}},boot:{height:.3,ankleWidth:.047,calfWidth:.057,footWidth:.061,toeZ:.205,heelZ:-.071,soleY:.008,instepY:.087,segments:32},clothMotion:{amplitude:.01,frequency:5.4},fitting:{neighbours:3,epsilon:1e-4,torsoMaxX:.235,thighRadius:.124,clothClearance:.008,waistPinY:.947,collisionIterations:3,slitTopY:.82,capeBands:40,capeLowY:.45,capeHighY:1.58,capeGarmentGap:.022},mantle:{segments:64,rows:8,neckX:.075,neckZ:.074,neckY:1.535,shoulderX:.26,frontZ:.165,rearZ:.155,centerZ:.01,edgeY:1.42,backRise:.05,overlap:.015},detail:{tubeSides:6,curveSegments:32,buttonRadius:.011},studio:{environmentIntensity:.75,environmentBlur:.04,ambient:.9,key:2,fill:.9,exposure:.95}},Is=Z.cape,Ls=Is.physics,Rs=wt.clamp,zs=new WeakMap;function Bs(e){let t=(e-.5)*Is.width,n=Math.sqrt(Math.max(0,1-(t/Z.mantle.shoulderX)**2));return new W(t,Z.mantle.edgeY+Z.mantle.backRise*n,Z.mantle.centerZ-Z.mantle.rearZ*n)}function Vs(){let e=new Float32Array((Is.columns+1)*(Is.rows+1)*3),t=[],n=[];for(let r=0;r<=Is.rows;r++)for(let i=0;i<=Is.columns;i++){let a=r/Is.rows,o=i/Is.columns,s=(r*(Is.columns+1)+i)*3,c=Bs(o);if(e[s]=c.x+(o-.5)*Is.flare*a,e[s+1]=wt.lerp(c.y,Is.topY-Is.length,a),e[s+2]=wt.lerp(c.z,Is.bottomZ,a)+Math.cos(o*Math.PI*2*Is.folds)*Is.foldDepth*a,t.push(o,a),r<Is.rows&&i<Is.columns){let e=s/3,t=e+1,r=e+Is.columns+1,i=r+1;n.push(e,r,t,t,r,i)}}return{positions:e,uv:t,indices:n}}function Hs(e){let t=[`spine01`,`spine03`,`spine05`,`upperleg01.L`,`upperleg01.R`,`lowerleg01.L`,`lowerleg01.R`],n=new Set;for(let r of t){let t=e.bones.findIndex(e=>e.name===r);if(t<0)throw Error(`Missing cape collider bone: `+r);for(;t>=0;)n.add(t),t=e.bones[t].parent}let r=[...n].sort((e,t)=>e-t),i=e.bones.map(()=>new lt),a=new lt,o=new ye,s=new ye,c=new W,l=new W(1,1,1),u=t=>e.bones.findIndex(e=>e.name===t),d=u(`spine01`),f=new lt,p=new W,m=new W().fromArray(e.bones[d].head);return t=>{let n=Rs(t*e.fps,0,e.frames.length-1),h=Math.floor(n),g=e.frames[h],_=e.frames[Math.min(h+1,e.frames.length-1)],v=n-h;p.fromArray(g.root).lerp(new W().fromArray(_.root),v);for(let t of r){let n=e.bones[t];c.fromArray(n.head),n.parent>=0&&c.sub(new W().fromArray(e.bones[n.parent].head)),o.fromArray(g.q,t*4),s.fromArray(_.q,t*4),o.slerp(s,v).normalize(),a.compose(c,o,l),n.parent>=0?i[t].multiplyMatrices(i[n.parent],a):i[t].copy(a)}f.copy(i[d]).multiply(new lt().makeTranslation(-m.x,-m.y,-m.z));let y=e=>new W().setFromMatrixPosition(i[u(e)]).add(p),b=[{a:y(`spine05`),b:y(`spine01`),radius:Ls.bodyRadius}];for(let e of[`L`,`R`])b.push({a:y(`upperleg01.`+e),b:y(`lowerleg01.`+e),radius:Ls.thighRadius});return{skin:f.clone(),root:p.clone(),capsules:b}}}function Us(e){let t=Vs(),n=t.positions.length/3,r=Is.columns+1,i=new Float64Array(t.positions.length),a=new Float64Array(i.length),o=[],s=Hs(e),c=1/Ls.fps,l=c*c,u=(e.frames.length-1)/e.fps;function d(e,n,r){let i=t.positions[e*3]-t.positions[n*3],a=t.positions[e*3+1]-t.positions[n*3+1],s=t.positions[e*3+2]-t.positions[n*3+2];o.push({a:e,b:n,length:Math.hypot(i,a,s),strength:r})}for(let e=0;e<=Is.rows;e++)for(let t=0;t<=Is.columns;t++){let n=e*r+t;t<Is.columns&&d(n,n+1,1),e<Is.rows&&d(n,n+r,1),t<Is.columns&&e<Is.rows&&(d(n,n+r+1,Ls.shear),d(n+1,n+r,Ls.shear)),t+2<=Is.columns&&d(n,n+2,Ls.bend),e+2<=Is.rows&&d(n,n+r*2,Ls.bend)}let f=s(0),p=new W;for(let e=0;e<n;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(i,e*3);a.set(i);let m=new Float64Array(r*3),h=new W,g=new W,_=new W;function v(u,d=!1){let f=s(u);for(let e=0;e<r;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(m,e*3);let v=e.heading??0,y=Math.sin(v),b=Math.cos(v);for(let e=r;e<n;e++){let t=Math.floor(e/r)/Is.rows,n=e%r/Is.columns,o=d?0:Math.sin(u*Ls.gustFrequency-t*2+n)*Ls.gust+Math.sin(u*7+n*5-t*4)*Ls.ripple,s=d?0:Math.sin(u*Ls.lateralFrequency-t+n)*Ls.lateralGust;for(let t=0;t<3;t++){let n=e*3+t,r=i[n],u=r-a[n],d=t===1?-Ls.gravity:o*(t===0?y:b)+s*(t===0?b:-y);i[n]=r+u*Ls.damping+(d-Ls.drag*u/c)*l,a[n]=r}}let x=()=>{for(let e=0;e<m.length;e++)i[e]=m[e]};x();for(let e=0;e<Ls.iterations;e++){for(let e of o){let t=e.a*3,n=e.b*3,a=i[n]-i[t],o=i[n+1]-i[t+1],s=i[n+2]-i[t+2],c=Math.hypot(a,o,s);if(c<1e-9)continue;let l=+(e.a>=r),u=+(e.b>=r),d=l+u;if(!d)continue;let f=(c-e.length)/c*e.strength/d,p=a*f,m=o*f,h=s*f;i[t]=i[t]+p*l,i[t+1]=i[t+1]+m*l,i[t+2]=i[t+2]+h*l,i[n]=i[n]-p*u,i[n+1]=i[n+1]-m*u,i[n+2]=i[n+2]-h*u}for(let e of f.capsules){h.copy(e.b).sub(e.a);let t=h.lengthSq(),a=e.radius+Ls.collisionMargin;for(let o=r;o<n;o++){let n=o*3;p.fromArray(i,n),g.copy(p).sub(e.a),_.copy(e.a).addScaledVector(h,Rs(g.dot(h)/t,0,1)),g.copy(p).sub(_);let r=g.length();r<a&&r>1e-9&&(p.copy(_).addScaledVector(g,a/r),p.toArray(i,n))}}x()}for(let e=0;e<m.length;e++)a[e]=m[e];return f}for(let e=0;e<Ls.relaxFrames;e++)v(0,!0);a.set(i);let y=[];function b(e){let t=new Float32Array(i.length);for(let r=0;r<n;r++)t[r*3]=i[r*3]-e.x,t[r*3+1]=i[r*3+1]-e.y,t[r*3+2]=i[r*3+2]-e.z;y.push(t)}b(f.root);for(let e=1;e<=Math.ceil(u*Ls.fps);e++)b(v(Math.min(u,e/Ls.fps)).root);return{frames:y,duration:u,fps:Ls.fps,pinCount:r,pattern:t}}function Ws(e){let t=zs.get(e);t||(t=Us(e),zs.set(e,t));let{frames:n,duration:r,fps:i}=t;return{...t,sample(e,t){let a=Rs(Number.isFinite(e)?e:0,0,r)*i,o=Math.floor(a),s=Math.min(o+1,n.length-1),c=a-o;for(let e=0;e<t.length;e++)t[e]=wt.lerp(n[o][e],n[s][e],c)}}}function Gs(e){let t=[`L`,`R`].map(t=>({upper:e.bones.find(e=>e.name===`upperleg01.`+t),lower:e.bones.find(e=>e.name===`lowerleg01.`+t),a:new W,b:new W,radius:Z.fitting.thighRadius+Z.fitting.clothClearance})),n=e.bones.map(()=>new lt),r=new lt,i=new lt,a=new lt,o=new W,s=new W,c=new W,l=new W,u=new W,d=new W;return{capsules:t,update(){a.copy(e.mesh.matrixWorld).invert(),t.forEach(e=>{e.a.setFromMatrixPosition(e.upper.matrixWorld).applyMatrix4(a),e.b.setFromMatrixPosition(e.lower.matrixWorld).applyMatrix4(a)}),n.forEach((t,n)=>t.multiplyMatrices(e.bones[n].matrixWorld,e.skeleton.boneInverses[n]))},project(e,a){let f=e.geometry.getAttribute(`position`);if(f.getY(a)>=Z.fitting.waistPinY)return;let p=e.geometry.getAttribute(`skinIndex`),m=e.geometry.getAttribute(`skinWeight`);r.elements.fill(0);for(let e=0;e<4;e++){let t=m.array[a*4+e];if(!t)continue;let i=n[p.array[a*4+e]].elements;for(let e=0;e<16;e++)r.elements[e]=r.elements[e]+i[e]*t}i.copy(e.bindMatrixInverse).multiply(r).multiply(e.bindMatrix),u.set(f.getX(a),0,f.getZ(a)-Z.coat.rows[0][3]).normalize().transformDirection(i),o.fromBufferAttribute(f,a).applyMatrix4(i);let h=!1;for(let e=0;e<Z.fitting.collisionIterations;e++)for(let e of t){s.copy(e.b).sub(e.a),c.copy(o).sub(e.a),l.copy(e.a).addScaledVector(s,wt.clamp(c.dot(s)/s.lengthSq(),0,1)),c.copy(o).sub(l);let t=c.length();if(t<e.radius&&t>1e-8){let t=t=>(d.copy(o).addScaledVector(u,t),c.copy(d).sub(e.a),l.copy(e.a).addScaledVector(s,wt.clamp(c.dot(s)/s.lengthSq(),0,1)),d.distanceToSquared(l)>=e.radius*e.radius),n=0,r=e.radius*2;for(let e=0;e<8&&!t(r);e++)r*=2;for(let e=0;e<14;e++){let e=(n+r)/2;t(e)?r=e:n=e}o.addScaledVector(u,r),h=!0}}h&&(o.applyMatrix4(i.invert()),f.setXYZ(a,o.x,o.y,o.z))}}}function Ks(e,t){let n=Z.fitting,r=n.capeBands,i=Array.from({length:r},()=>({minX:1/0,maxX:-1/0,back:1/0})),a=e.bones.find(e=>e.name===`root`),o=new lt,s=new lt,c=new W,l=e=>wt.clamp((e-n.capeLowY)/(n.capeHighY-n.capeLowY)*(r-1),0,r-1);function u(){o.copy(a.matrixWorld).multiply(e.skeleton.boneInverses[e.bones.indexOf(a)]).invert().multiply(e.root.matrixWorld),s.copy(o).invert(),i.forEach(e=>{e.minX=1/0,e.maxX=-1/0,e.back=1/0});for(let e of t){let t=e.geometry.getAttribute(`position`);for(let n=0;n<t.count;n++){e.getVertexPosition(n,c),c.applyMatrix4(o);let t=l(c.y),a=Math.max(0,Math.floor(t)-1),s=Math.min(r-1,Math.ceil(t)+1);for(let e=a;e<=s;e++){let t=i[e];t.minX=Math.min(t.minX,c.x),t.maxX=Math.max(t.maxX,c.x),t.back=Math.min(t.back,c.z)}}}}function d(e,t){u();for(let a=t;a<e.count;a++){c.fromBufferAttribute(e,a).applyMatrix4(o);let t=l(c.y),u=i[Math.floor(t)],d=i[Math.min(r-1,Math.ceil(t))],f=Math.min(u.back,d.back),p=Math.min(u.minX,d.minX),m=Math.max(u.maxX,d.maxX);Number.isFinite(f)&&c.x>=p-n.capeGarmentGap&&c.x<=m+n.capeGarmentGap&&c.z>f-n.capeGarmentGap&&(c.z=f-n.capeGarmentGap,c.applyMatrix4(s),e.setXYZ(a,c.x,c.y,c.z))}}return{project:d}}var qs=wt.clamp,Js=wt.lerp;function Ys(e,t){let n=new f;n.name=`knight-outfit`,e.root.add(n);let r=new Set,i=new Set,a=[],o=[],s=[],c=!1,l=!0,u=Gs(e),p=e=>{let n=t.bones.findIndex(t=>t.name===e);if(n<0)throw Error(`Missing outfit bone: `+e);return n},m=(e,t)=>{let n=new Je({color:e,...t,side:2});return i.add(n),n},h=m(Z.colors.mail,Z.material.mail),g=m(Z.colors.steel,Z.material.steel),_=m(Z.colors.brass,Z.material.brass),v=m(Z.colors.linen,Z.material.cloth),y=m(Z.colors.red,Z.material.cloth),b=m(Z.colors.leather,Z.material.leather),x=m(Z.colors.dark,Z.material.cloth),C=[`spine05`,`spine04`,`spine03`,`spine02`,`spine01`];function w(e){for(let n=0;n<C.length-1;n++){let r=p(C[n]),i=p(C[n+1]),a=t.bones[r].head[1],o=t.bones[i].head[1];if(e<=o){let t=qs((e-a)/(o-a),0,1);return[[r,1-t],[i,t]]}}return[[p(`spine01`),1]]}function T(e){return Array.from({length:4},(n,r)=>[t.skinIndex[e*4+r],t.skinWeight[e*4+r]])}function E(t,i,a,s){let c=new Ot,l=[],u=[],d=[],f=[];i.forEach(e=>{l.push(...e.position.toArray()),f.push(...e.uv);let t=new Map;e.weights.forEach(([e,n])=>t.set(e,(t.get(e)??0)+n));let n=[...t].filter(([,e])=>e>0).sort((e,t)=>t[1]-e[1]).slice(0,4),r=n.reduce((e,t)=>e+t[1],0);for(let e=0;e<4;e++)d.push(n[e]?.[0]??0),u.push((n[e]?.[1]??0)/r)}),c.setAttribute(`position`,new k(l,3)),c.setAttribute(`uv`,new k(f,2)),c.setAttribute(`skinIndex`,new S(d,4)),c.setAttribute(`skinWeight`,new k(u,4)),c.setIndex(a),c.computeVertexNormals(),r.add(c);let p=new mt(c,s);return p.name=t,p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1,p.bind(e.skeleton,e.mesh.bindMatrix),n.add(p),o.push(p),p}let D=(e,t,n=(e,t)=>!0)=>{let r=[];for(let i=0;i<t;i++)for(let t=0;t<e;t++)if(n(t,i)){let n=i*(e+1)+t,a=n+1,o=n+e+1,s=o+1;r.push(n,o,a,a,o,s)}return r};function O(n,r,i,a){let o=e.mesh.geometry.getAttribute(`normal`),s=[],c=[];for(let e=0;e<t.positions.length/3;e++){let n=new W().fromArray(t.positions,e*3).addScaledVector(new W().fromBufferAttribute(o,e),i);s.push({position:n,weights:T(e),uv:[n.x*Z.texture.repeatPerMetre,n.y*Z.texture.repeatPerMetre]})}for(let e=0;e<t.indices.length;e+=3){let n=t.indices.slice(e,e+3);n.some(a)&&c.push(...n)}return E(n,s,c,r)}let A=e=>T(e).reduce((e,[n,r])=>e+(/^(wrist|finger)/.test(t.bones[n].name)?r:0),0);O(`continuous-chainmail`,h,Z.surface.mailOffset,e=>{let n=t.positions[e*3+1],r=Math.abs(t.positions[e*3]),i=n>Z.surface.coveredMinY&&n<Z.surface.coveredMaxY&&r<Z.surface.coveredMaxX,a=n<Z.fitting.slitTopY&&r<Z.surface.slitInnerX;return(!i||a)&&n>=Z.surface.mailMinY&&n<=Z.surface.mailMaxY&&A(e)<Z.surface.handThreshold}),O(`articulated-leather-gloves`,b,Z.surface.gloveOffset,e=>A(e)>=Z.surface.handThreshold);function j(e){let t=Z.coat.rows;for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(e<=i[0]){let t=qs((e-r[0])/(i[0]-r[0]),0,1);return r.map((e,n)=>Js(e,i[n],t))}}return t.at(-1)}function M(e,t,n=0){let r=j(e),i=Math.sin(t*Z.coat.folds)*Z.coat.foldDepth;return new W(Math.sin(t)*(r[1]+i+n),e,r[3]+Math.cos(t)*(r[2]+i+n))}let N=[];Z.coat.rows.forEach(e=>{for(let t=0;t<=Z.coat.segments;t++){let n=t/Z.coat.segments*Math.PI*2;N.push({position:M(e[0],n),weights:w(e[0]),uv:[t/Z.coat.segments,e[0]]})}}),E(`tailored-sleeveless-surcoat`,N,D(Z.coat.segments,Z.coat.rows.length-1,(e,t)=>{let n=(e+.5)/Z.coat.segments*Math.PI*2,r=Z.coat.rows[t][0];return r<Z.coat.armholeY||r>Z.coat.rows.at(-3)[0]||Math.abs(Math.sin(n))<Z.coat.armholeWidth}),v);for(let e=0;e<4;e++){let t=Z.coat.segments/4,n=[];for(let r=0;r<=Z.coat.skirtRows;r++)for(let i=0;i<=t;i++){let a=r/Z.coat.skirtRows,o=Js(Z.coat.rows[0][0],Z.coat.hemY,a),s=(e+i/t)*Math.PI/2,c=Z.coat.rows[0],l=c[1]+Z.coat.hemFlare*a,u=Math.sin(s*Z.coat.folds)*Z.coat.foldDepth*(1+a),d=Math.sin(s)*(l+u),f=qs((Z.fitting.slitTopY-o)/(Z.fitting.slitTopY-Z.coat.hemY),0,1);Math.abs(Math.sin(s))<Z.coat.split&&(d+=(e<2?1:-1)*Z.coat.split*f);let m=new W(d,o,c[3]+Math.cos(s)*(c[2]+u)),h=p(`upperleg02.`+(d>=0?`L`:`R`)),g=qs((Z.fitting.slitTopY-o)/Z.coat.legBlendHeight,0,1);n.push({position:m,weights:[[p(`spine05`),1-g],[h,g]],uv:[d,o]})}let r=E(`split-surcoat-panel-`+e,n,D(t,Z.coat.skirtRows),v);s.push({mesh:r,rest:new Float32Array(r.geometry.getAttribute(`position`).array),kind:`skirt`})}function ee(e,t,n,r,i,a){let o=[];for(let e=0;e<=8;e++)for(let a=0;a<=8;a++){let s=Js(t,n,a/8),c=Js(r,i,e/8),l=j(c),u=M(c,Math.asin(qs(s/l[1],-1,1)),Z.cross.offset);u.x=s,o.push({position:u,weights:w(c),uv:[s,c]})}return E(e,o,D(8,8),a)}ee(`embroidered-cross-stem`,-Z.cross.stroke/2,Z.cross.stroke/2,Z.cross.centerY-Z.cross.height/2,Z.cross.centerY+Z.cross.height/2,y);for(let e of[-1,1])ee(`embroidered-cross-arm-`+e,e<0?-Z.cross.width/2:Z.cross.stroke/2,e<0?-Z.cross.stroke/2:Z.cross.width/2,Z.cross.centerY-Z.cross.stroke/2,Z.cross.centerY+Z.cross.stroke/2,y);let te=[];for(let e of[Z.belt.y-Z.belt.height/2,Z.belt.y+Z.belt.height/2])for(let t=0;t<=Z.coat.segments;t++){let n=t/Z.coat.segments*Math.PI*2;te.push({position:new W(Math.sin(n)*Z.belt.x,e,Z.belt.centerZ+Math.cos(n)*Z.belt.z),weights:w(e),uv:[t/Z.coat.segments,e]})}E(`leather-waist-belt`,te,D(Z.coat.segments,1),b);function P(n,i,s,c,l){r.add(i);let u=new U(i,s),d=p(c);return u.name=n,u.position.copy(l).sub(new W().fromArray(t.bones[d].head)),u.castShadow=!0,u.receiveShadow=!0,e.bones[d].add(u),a.push(u),o.push(u),u}function ne(e,t,n,r,i){return P(e,new le(new et(t),Z.detail.curveSegments,n,Z.detail.tubeSides,!1),r,i,new W)}let F=Z.belt.y,re=Z.belt.centerZ+Z.belt.z+Z.belt.buckleTube,ie=Z.belt.buckleWidth/2,ae=Z.belt.buckleHeight/2;ne(`brass-belt-buckle`,[new W(-ie,F-ae,re),new W(ie,F-ae,re),new W(ie,F+ae,re),new W(-ie,F+ae,re),new W(-ie,F-ae,re)],Z.belt.buckleTube,_,`spine04`);let oe=[];Z.helmet.rows.forEach(e=>{for(let t=0;t<=Z.helmet.segments;t++){let n=t/Z.helmet.segments*Math.PI*2;oe.push({position:new W(Math.sin(n)*e[1],e[0],e[3]+Math.cos(n)*e[2]),weights:[[p(`head`),1]],uv:[t/Z.helmet.segments,e[0]]})}}),E(`fitted-great-helm`,oe,D(Z.helmet.segments,Z.helmet.rows.length-1),g);function I(e,t,n){let r=Z.helmet.rows,i=r[0];for(let e=0;e<r.length-1;e++){let n=r[e],a=r[e+1];if(t<=a[0]){let e=qs((t-n[0])/(a[0]-n[0]),0,1);i=n.map((t,n)=>Js(t,a[n],e));break}}return new W(e,t,i[3]+i[2]*Math.sqrt(Math.max(0,1-(e/i[1])**2))+n)}function se(e,t,n,r,i,a,o){let s=[];for(let e=0;e<=1;e++)for(let a=0;a<=12;a++){let c=Js(t,n,a/12),l=Js(r,i,e);s.push({position:I(c,l,o),weights:[[p(`head`),1]],uv:[a/12,e]})}E(e,s,D(12,1),a)}for(let e of[-1,1]){let t=e*Z.helmet.eyeX;se(`helmet-eye-aperture-`+e,t-Z.helmet.eyeWidth/2,t+Z.helmet.eyeWidth/2,Z.helmet.eyeY-Z.helmet.eyeHeight/2,Z.helmet.eyeY+Z.helmet.eyeHeight/2,x,.0015)}se(`helmet-brow-band`,-.11,.11,Z.helmet.browY-Z.helmet.browHeight/2,Z.helmet.browY+Z.helmet.browHeight/2,_,.002),se(`helmet-nasal-band`,-Z.helmet.noseWidth/2,Z.helmet.noseWidth/2,Z.helmet.browY-Z.helmet.noseHeight,Z.helmet.browY,_,.003);for(let e of[-1,1])for(let t=0;t<3;t++)for(let n=0;n<4;n++){let r=e*(.038+n*.014),i=1.612+t*.015,a=P(`helmet-breathing-aperture`,new Pe(Z.helmet.ventRadius,8),x,`head`,I(r,i,.002));a.rotation.y=e*.4}for(let e of[-.095,-.045,0,.045,.095])P(`helmet-rivet`,new d(Z.helmet.rivetRadius,8,6),_,`head`,I(e,Z.helmet.browY,.004));let ce=[];for(let e=0;e<=Z.mantle.rows;e++)for(let t=0;t<=Z.mantle.segments;t++){let n=e/Z.mantle.rows,r=t/Z.mantle.segments*Math.PI*2,i=Math.cos(r),a=Math.max(0,-i),o=Math.sin(r)*Js(Z.mantle.neckX,Z.mantle.shoulderX,n),s=Z.mantle.centerZ+i*Js(Z.mantle.neckZ,i>=0?Z.mantle.frontZ:Z.mantle.rearZ,n),c=Z.mantle.edgeY+Z.mantle.backRise*a-Z.mantle.overlap*a,l=Js(Z.mantle.neckY,c,n)+Math.sin(r*Z.cape.folds)*Z.cape.foldDepth*n*(1-n);ce.push({position:new W(o,l,s),weights:[[p(`spine01`),1]],uv:[t/Z.mantle.segments,n]})}E(`shoulder-draped-cloak-mantle`,ce,D(Z.mantle.segments,Z.mantle.rows),y);let L=Ws(t),R=new Ot;R.setAttribute(`position`,new k(L.pattern.positions,3)),R.setAttribute(`uv`,new k(L.pattern.uv,2)),R.setIndex(L.pattern.indices);let ue=new U(R,y);ue.name=`inertial-cloth-cape`,ue.castShadow=!0,ue.receiveShadow=!0,ue.frustumCulled=!1,r.add(R),o.push(ue),n.add(ue);let de=Ks(e,o.filter(e=>e instanceof mt&&e.name.includes(`surcoat`)));for(let e of[-1,1])P(`cloak-clasp`,new d(Z.detail.buttonRadius,12,8),_,`spine01`,new W(e*.052,1.47,.136));for(let e of[`L`,`R`]){let n=e===`L`?1:-1,r=p(`foot.`+e),i=p(`lowerleg02.`+e),a=t.bones[r].head,o=[[Z.boot.soleY,Z.boot.footWidth,(Z.boot.toeZ-Z.boot.heelZ)/2,(Z.boot.toeZ+Z.boot.heelZ)/2],[Z.boot.instepY,Z.boot.footWidth*.87,(Z.boot.toeZ-Z.boot.heelZ)*.41,(Z.boot.toeZ+Z.boot.heelZ)*.35],[.135,Z.boot.ankleWidth,.056,0],[Z.boot.height,Z.boot.calfWidth,.06,0]],s=[];o.forEach(([e,t,o,c])=>{for(let l=0;l<=Z.boot.segments;l++){let u=l/Z.boot.segments*Math.PI*2,d=qs((e-.08)/.12,0,1),f=a[0]-n*(e-.08)*.16;s.push({position:new W(f+Math.sin(u)*t,e,c+Math.cos(u)*o),weights:[[r,1-d],[i,d]],uv:[l/Z.boot.segments,e]})}}),E(`fitted-leather-boot-`+e,s,D(Z.boot.segments,o.length-1),b)}function z(t){c||(l=t,n.visible=t,a.forEach(e=>e.visible=t),e.mesh.material.visible=!t)}function B(t){if(c)return;let n=qs(Number.isFinite(t)?t:0,0,e.duration);u.update();for(let{mesh:e,rest:t}of s){let r=e.geometry.getAttribute(`position`);for(let i=0;i<r.count;i++){let a=t[i*3],o=t[i*3+1],s=t[i*3+2],c=qs((Z.coat.rows[0][0]-o)/(Z.coat.rows[0][0]-Z.coat.hemY),0,1);r.setXYZ(i,a,o,s+Math.sin(n*Z.clothMotion.frequency+a*8)*Z.clothMotion.amplitude*c*c),u.project(e,i)}r.needsUpdate=!0,e.geometry.computeVertexNormals()}let r=R.getAttribute(`position`);L.sample(n,r.array),de.project(r,L.pinCount),r.needsUpdate=!0,R.computeVertexNormals()}return z(!0),B(0),{group:n,meshes:o,materials:i,moving:s,cape:ue,capeMotion:L,draw:B,setVisible:z,setTextures(e){if(!c)for(let[t,n,r]of[[h,e.mail,Z.texture.mailBump],[g,e.steel,0],[v,e.linen,Z.texture.clothBump],[y,e.linen,Z.texture.clothBump]])t.map=n??null,t.bumpMap=r?n??null:null,t.bumpScale=r,t.needsUpdate=!0},wireframe(e){c||i.forEach(t=>t.wireframe=e)},dispose(){c||(c=!0,n.removeFromParent(),a.forEach(e=>e.removeFromParent()),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),l&&(e.mesh.material.visible=!0))}}}function Xs(e,t=`normal`,n=new ae){let r=[`mail`,`steel`,`linen`],i=new Set(r),a=new Set,o=new Set,s={},c=!1,l=0,u=0,d,f=new Promise(e=>{d=e}),p=e=>{o.has(e)||(o.add(e),a.delete(e),e.dispose())},m=setTimeout(()=>{u+=i.size,i.clear(),d({loaded:l,failed:u})},Z.texture.timeoutMs),h=(e,t)=>{i.delete(e)&&(t?l++:u++,i.size||(clearTimeout(m),d({loaded:l,failed:u})))};if(t!==`slow`)for(let l of r){let r;try{let u=t===`missing`?`assets/knight/qa-missing-${l}.png`:Z.assets[l];r=n.load(`/crusader-coin-pusher-demo/${u}`,t=>{if(c||!i.has(l)){p(t);return}a.add(t),t.colorSpace=Yt,t.wrapS=t.wrapT=bt,t.anisotropy=Z.texture.anisotropy,s[l]=t,e({...s}),h(l,!0)},void 0,()=>{r&&p(r),h(l,!1)}),o.has(r)||a.add(r)}catch{h(l,!1)}}return{ready:f,dispose(){c||(c=!0,clearTimeout(m),i.clear(),a.forEach(p),d({loaded:l,failed:u}))}}}var Zs={assets:{steel:`./assets/knight/forged-steel-v1.webp`,linen:`./assets/knight/ivory-linen-v1.webp`},colors:{steel:`#b1b8bf`,mail:`#747b80`,gold:`#a78952`,linen:`#d9cdb4`,cloak:`#631e2a`,leather:`#302821`,black:`#0f1217`,floor:`#9c9d99`},material:{steelMetalness:.82,steelRoughness:.46,steelBump:.004,clothRoughness:.92,clothBump:.009,mailRoughness:.54},rig:{floorY:-3.5,pelvisY:2.19,chestY:3.09,headY:3.98,helmetHeight:.58,height:4.46,shoulderY:3.68,shoulderX:.55,upperArm:.77,forearm:.72,thigh:1.08,shin:1.08,hipX:.235,ankleY:.14,stanceDrop:.065,handY:-.19,contactInset:.62,palmDepth:.045,palmY:-.13},motion:{walkEnd:3.3,reachStart:2.7,reachEnd:3.8,releaseStart:6.35,releaseEnd:7.18,clearStart:7.1,clearEnd:11,strideSeconds:1.36,startZ:3.9,braceZ:1.3,endZ:-4.5,exitX:-1.65,lean:.18,clothWave:.024,stepLift:.18,heelRoll:.15,rootBob:.024,hipSway:.026},path:[[0,0,3.9],[.65,0,3.58],[1.45,0,2.73],[2.25,0,1.91],[3.3,0,1.3],[4,0,1.3],[5,0,1.01],[6,0,-.26],[6.35,0,-.67],[7.1,-.08,-1.5],[8,-.55,-2.47],[9.2,-1.25,-3.55],[11,-1.65,-4.5]],footsteps:{left:[[.1,.75],[1.45,2.15],[2.68,3.3],[4.58,5.24],[5.96,6.62],[7.28,7.94],[8.64,9.3],[9.94,10.6]],right:[[.8,1.43],[2.18,2.82],[3.32,3.8],[5.28,5.94],[6.64,7.26],[7.98,8.62],[9.32,9.92],[10.62,11.22]]},geometry:{radialSegments:32,clothRows:32,clothColumns:28,cloakBoneRows:7,cloakBoneColumns:5,mailRows:18,mailColumns:24},garment:{capeTop:3.72,capeLength:2.15,capeTopWidth:.94,capeBottomWidth:1.15,capeTopDepth:.24,capeBottomDepth:.37,capeFoldDepth:.04,capeFoldCount:7,hemUneven:.035},floor:{asset:`./assets/knight/limestone-floor-v2.webp`,interiorAsset:`./assets/knight/treasury-floor-v2.webp`,width:36,depth:32,doorZ:0,tileWorld:6,size:256,rows:4,columns:3,grout:.026,roughness:.88,bump:.055,fallbackNoise:.05,interiorColor:`#a4a09a`,interiorRoughness:.32,interiorBump:.016,interiorMetalness:.08},textureTimeoutMs:4e3,lighting:{shadowSize:1024,keyIntensity:3.6,fillIntensity:1.2}},Qs=(e,t,n)=>wt.smootherstep(e,t,n),$s=e=>Number.isFinite(e)?wt.clamp(e,0,s.cinematic.introSeconds):0;function ec(e,t){let n=Zs.path;if(e<=n[0][0])return n[0][t];if(e>=n[n.length-1][0])return n[n.length-1][t];let r=e=>{if(e===0||e===n.length-1)return 0;let r=n[e-1],i=n[e],a=n[e+1],o=(i[t]-r[t])/(i[0]-r[0]),s=(a[t]-i[t])/(a[0]-i[0]);return o*s<=0?0:2*o*s/(o+s)},i=n.findIndex((t,r)=>r<n.length-1&&e>=t[0]&&e<n[r+1][0]),a=n[i],o=n[i+1],s=o[0]-a[0],c=(e-a[0])/s;return(2*c**3-3*c**2+1)*a[t]+(c**3-2*c**2+c)*s*r(i)+(-2*c**3+3*c**2)*o[t]+(c**3-c**2)*s*r(i+1)}function tc(e){return{x:ec(e,1),z:ec(e,2),yaw:.43*Qs(e,6.65,8.25)*(1-Qs(e,9.6,11.4))}}function nc(e,t){let n=$s(e),r=t<0?Zs.footsteps.left:Zs.footsteps.right,i=new W(t*Zs.rig.hipX,Zs.rig.floorY+Zs.rig.ankleY,Zs.motion.startZ+(t>0?.16:-.1)),a=0;for(let[e,o]of r){if(n<e)break;let r=tc(Math.min(Zs.motion.clearEnd,o+.24)),s=o>=3&&o<=4,c=new W(t*Zs.rig.hipX,0,s&&t>0?.36:-.14);c.applyAxisAngle(new W(0,1,0),r.yaw);let l=new W(r.x+c.x,i.y,r.z+c.z);if(n<o){let t=(n-e)/(o-e),s=Qs(t,0,1),c=i.distanceTo(l),u=Math.sin(Math.PI*t)**2;return i.lerp(l,s),i.y+=u*Math.min(Zs.motion.stepLift,c*.25),{point:i,yaw:wt.lerp(a,r.yaw,s),swing:u,roll:Math.sin(t*Math.PI*2)*Math.sin(t*Math.PI)**2*Zs.motion.heelRoll,planted:!1}}i=l,a=r.yaw}return{point:i,yaw:a,swing:0,roll:0,planted:!0}}function rc(e){let t=Zs.motion,n=$s(e),r=tc(n),i=nc(n,-1),a=nc(n,1),o=Qs(n,t.releaseStart,t.clearEnd),s=Math.max(i.swing,a.swing);return{time:n,...r,reach:Qs(n,t.reachStart,t.reachEnd),release:Qs(n,t.releaseStart,t.releaseEnd),lean:t.lean*Qs(n,3.55,4.8)*(1-Qs(n,6.35,7.45)),stride:n/t.strideSeconds*Math.PI*2,leave:o,walking:s,bob:-t.rootBob*s,sway:t.hipSway*(i.swing-a.swing),twist:.035*(i.swing-a.swing)}}function ic(e,t,n,r,i){let a=t.clone().sub(e),o=wt.clamp(a.length(),Math.abs(r-i)+1e-5,r+i-1e-5);a.lengthSq()<1e-10?a.set(0,-1,0):a.normalize();let s=n.clone().addScaledVector(a,-n.dot(a));s.lengthSq()<1e-8&&s.set(1,0,0).addScaledVector(a,-a.x),s.lengthSq()<1e-8&&s.set(0,0,1),s.normalize();let c=(r*r-i*i+o*o)/(2*o);return{elbow:e.clone().addScaledVector(a,c).addScaledVector(s,Math.sqrt(Math.max(0,r*r-c*c))),end:e.clone().addScaledVector(a,o)}}function ac(e,t){let n=n=>new W().fromArray(e.bones.find(e=>e.name===n+`.`+t).head),r=n(`wrist`),i=n(`finger3-1`).sub(r),a=i.clone().normalize(),o=n(`finger5-1`).sub(n(`finger2-1`)),s=new W().crossVectors(o,a).normalize().multiplyScalar(t===`R`?-1:1),c=new W().crossVectors(a,s).normalize(),l=new ye().setFromRotationMatrix(new lt().makeBasis(c,a,s)).invert();return{palmOffset:i.clone().multiplyScalar(.5).addScaledVector(s,.007),gripOffset:e=>i.clone().multiplyScalar(.95).addScaledVector(s,e+.008),fingerAxis:a.clone(),curlAxis:c.clone(),fitFinger(n,a,o){let l=i.clone().multiplyScalar(.95).addScaledVector(s,o+.008),u=[1,2,3].map(r=>e.bones.find(e=>e.name===`finger${n}-${r}.${t}`));for(let e=40;e>=0;e--){let t=e/40,n=new W().fromArray(u[0].head).sub(r),i=0,s=!0;for(let e=0;e<3;e++){i+=a[e]*t;let r=u[e],d=new W().fromArray(r.tail).sub(new W().fromArray(r.head)).applyAxisAngle(c,i);for(let e=0;e<=8;e++){let t=n.clone().addScaledVector(d,e/8).sub(l);t.addScaledVector(c,-t.dot(c)),t.length()<o+.005&&(s=!1)}n.add(d)}if(s)return a.map(e=>e*t)}return[0,0,0]},rotation(e,t){let n=e.clone().normalize(),r=t.clone().addScaledVector(n,-t.dot(n)).normalize(),i=new W().crossVectors(n,r).normalize();return new ye().setFromRotationMatrix(new lt().makeBasis(i,n,r)).multiply(l)}}}var oc=new WeakMap;function sc(e,t,n){let r=t===`L`?-1:1,i=s.cinematic.doors,a=-r*Ms(e,1,`push`).angle,o=i.width/2,c=-r*(o-Zs.rig.contactInset),l=i.thickness/2+i.faceLift,u=new W(r*o+c*Math.cos(a)+l*Math.sin(a),Zs.rig.handY,-c*Math.sin(a)+l*Math.cos(a));return new W(-u.x/n,(u.y-Zs.rig.floorY)/n,-u.z/n)}function cc(e){let t=oc.get(e);if(t)return t;let n=Fs(e),r=Y.sceneHeight/e.height,i={L:ac(e,`L`),R:ac(e,`R`)},a=Array.from({length:4},(e,t)=>i.L.fitFinger(t+2,Y.sword.gripCurl,Y.sword.gripRadius)),o=[],c=new W(0,1,0),l=new ye,u=new ye,d=e=>{let t=n.bones.find(t=>t.name===e);if(!t)throw Error(`Missing intro bone `+e);return t},f=e=>e.getWorldPosition(new W);function p(e,t){e.parent.getWorldQuaternion(u).invert(),e.quaternion.copy(u).multiply(t),e.updateWorldMatrix(!1,!0)}function m(e,t,n){let r=f(e),i=f(t).sub(r).normalize(),a=n.clone().sub(r).normalize(),o=new ye().setFromUnitVectors(i,a);e.getWorldQuaternion(l),p(e,o.multiply(l))}function h(e,t,r,i,a,o){if(o<=0)return;let s=e.quaternion.clone(),c=t.quaternion.clone(),l=f(e),u=f(t),d=f(r),p=ic(l,i,a,l.distanceTo(u),u.distanceTo(d));m(e,t,p.elbow),m(t,r,p.end),e.quaternion.copy(s.slerp(e.quaternion,o)),t.quaternion.copy(c.slerp(t.quaternion,o)),n.root.updateMatrixWorld(!0)}let g=0,_=rc(0),v=new Map;function y(e){let t=-Ms(Math.min(e,Y.releaseStart),1,`push`).angle;return i.R.rotation(c,new W(0,0,1).applyAxisAngle(c,t))}try{for(let t=0;t<=Math.round(s.cinematic.introSeconds*Y.fps);t++){let s=t/Y.fps,u=rc(s);g+=Math.hypot(u.x-_.x,u.z-_.z)/r,_=u;let m=g/Y.cycle.distance%1,b=(Y.cycle.startFrame+m*Y.cycle.frameCount)/e.fps;if(n.draw(b),m>1-Y.cycle.seamBlend){let t=n.bones.map(e=>e.quaternion.clone());n.draw(Y.cycle.startFrame/e.fps);let r=Qs(m,1-Y.cycle.seamBlend,1);n.bones.forEach((e,n)=>e.quaternion.copy(t[n].slerp(e.quaternion,r)))}let x=n.root.position.y;n.root.position.set(-u.x/r,x,-u.z/r),d(`root`).quaternion.premultiply(new ye().setFromAxisAngle(c,u.yaw));let S=Qs(s,Y.reachEnd,Y.pushPeak)*(1-Qs(s,Y.releaseStart,Y.releaseEnd));d(`spine03`).quaternion.multiply(new ye().setFromAxisAngle(new W(1,0,0),Y.lean*S)),n.root.updateMatrixWorld(!0);let C=Qs(s,Y.reachStart,Y.reachEnd)*(1-Qs(s,Y.releaseStart,Y.releaseEnd));n.root.position.x-=Y.sideAlign*C,n.root.position.y-=Y.pelvisDrop*S,n.root.updateMatrixWorld(!0);let w=0;for(let e of[`R`]){let t=f(d(`upperarm01.`+e)),n=f(d(`lowerarm01.`+e)),a=f(d(`wrist.`+e)),o=Math.min(s,Y.releaseStart),c=y(s),l=sc(o,e,r).sub(i.R.palmOffset.clone().applyQuaternion(c)).sub(t),u=(t.distanceTo(n)+n.distanceTo(a))*Y.reachFraction,p=Math.sqrt(Math.max(0,u*u-l.x*l.x-l.y*l.y));w=Math.max(w,l.z-p)}n.root.position.z+=Math.min(Y.maximumAdvance,Math.max(0,w))*C,n.root.updateMatrixWorld(!0);let T=Qs(s,Y.braceStart,Y.braceEnd)*(1-Qs(s,Y.releaseStart,Y.releaseEnd));for(let t of[`L`,`R`]){let o=t===`L`?1:-1,m=d(`foot.`+t),g=new W(o*Y.stanceX,e.bones[n.bones.indexOf(m)].head[1],-o*Y.stanceZ).add(new W(n.root.position.x,0,n.root.position.z+Y.stanceForward));if(!v.has(t)&&s>=Y.braceEnd&&v.set(t,g),h(d(`upperleg01.`+t),d(`lowerleg01.`+t),m,v.get(t)??g,new W(0,0,1),T),T>0&&(m.getWorldQuaternion(l),p(m,l.clone().slerp(new ye().setFromAxisAngle(c,u.yaw),T))),t===`L`){let e=new W(Y.sword.handX,Y.sword.handY,Y.sword.handZ).applyAxisAngle(c,u.yaw).add(n.root.position),t=d(`wrist.L`),r=f(d(`upperarm01.L`)),o=f(d(`lowerarm01.L`)),s=(r.distanceTo(o)+o.distanceTo(f(t)))*Y.carryReach;e.distanceTo(r)>s&&e.sub(r).setLength(s).add(r),h(d(`upperarm01.L`),d(`lowerarm01.L`),t,e,new W(.25,0,-1),1);let l=f(t).sub(f(d(`lowerarm01.L`))).normalize(),m=i.L.curlAxis.clone().cross(i.L.fingerAxis).applyQuaternion(t.getWorldQuaternion(new ye));p(t,i.L.rotation(l,new W(-1,0,0).applyAxisAngle(c,u.yaw)));for(let e=0;e<2;e++){let n=t.localToWorld(i.L.gripOffset(Y.sword.gripRadius)).y-Y.sword.tipClearance,r=Math.sqrt(Math.max(0,Y.sword.tipDistance**2-n**2)),a=new W(0,-n,-r).applyAxisAngle(c,u.yaw).normalize(),o=new W(1,0,0).applyAxisAngle(c,u.yaw);o.addScaledVector(a,-o.dot(a)).normalize();let s=new W().crossVectors(o,a).normalize();s.dot(l)<0&&(s.negate(),o.negate());let h=i.L.rotation(s,o);if(e===0){let e=e=>e.addScaledVector(l,-e.dot(l)).normalize(),n=e(m),r=e(o.clone()),i=Math.atan2(l.dot(new W().crossVectors(n,r)),n.dot(r));for(let e of[`lowerarm01.L`,`lowerarm02.L`]){let n=d(e),r=f(t).sub(f(n)).normalize();p(n,new ye().setFromAxisAngle(r,i/2).multiply(n.getWorldQuaternion(new ye)))}}p(t,h)}for(let e of n.bones.filter(e=>/^finger[2-5]-[123]\.L$/.test(e.name))){let t=Number(e.name.split(`-`)[1][0])-1,n=Number(e.name[6])-2;e.quaternion.setFromAxisAngle(i.L.curlAxis,a[n][t])}d(`finger1-1.L`).quaternion.setFromAxisAngle(i.L.fingerAxis,-.55).multiply(new ye().setFromAxisAngle(i.L.curlAxis,.35)),d(`finger1-2.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.55),d(`finger1-3.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.4);continue}let _=Qs(s,Y.reachStart,Y.reachEnd)*(1-Qs(s,Y.releaseStart,Y.releaseEnd)),b=d(`wrist.`+t),x=Math.min(s,Y.releaseStart),S=y(s),C=sc(x,t,r).sub(i.R.palmOffset.clone().applyQuaternion(S)),w=new W(o*Y.elbowPole[0],Y.elbowPole[1],Y.elbowPole[2]);h(d(`upperarm01.`+t),d(`lowerarm01.`+t),b,C,w,_),b.getWorldQuaternion(l),p(b,l.clone().slerp(S,_));for(let e of n.bones.filter(e=>e.name.startsWith(`finger`)&&e.name.endsWith(`.`+t)))e.quaternion.slerp(new ye,_)}n.root.updateMatrixWorld(!0),o.push({root:n.root.position.toArray(),q:n.bones.flatMap(e=>e.quaternion.toArray())})}}finally{n.dispose()}let b={...e,source:e.source+` + authored door-contact choreography`,fps:Y.fps,groundOffset:0,frames:o};return oc.set(e,b),b}function lc(e,t){let n=Y.sword,r=new f;r.name=`battle-worn-dragged-sword`,e.root.add(r);let i=new Je({color:Z.colors.steel,...Z.material.steel}),a=new Je({color:Z.colors.leather,...Z.material.leather}),o=new Je({color:Z.colors.brass,...Z.material.brass}),s=[];function c(e,t,n=0){s.push(e);let i=new U(e,t);return i.position.y=n,i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}let l=new Ot,u=n.bladeWidth/2,p=n.bladeThickness;l.setAttribute(`position`,new k([-u,-n.bladeStart,0,0,-n.bladeStart,p,u,-n.bladeStart,0,0,-n.bladeStart,-p,-u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,p*.6,u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,-p*.6,0,-n.tipDistance,0],3));let m=[];for(let e=0;e<4;e++){let t=(e+1)%4;m.push(e,t,e+4,t,t+4,e+4,e+4,t+4,8)}m.push(0,2,1,0,3,2),l.setIndex(m),l.computeVertexNormals(),c(l,i),c(new Gt(n.gripRadius,n.gripRadius,n.gripLength,12),a);let h=c(new Gt(n.guardRadius,n.guardRadius,n.guardWidth,12),o,-n.bladeStart);h.rotation.z=Math.PI/2,c(new d(n.pommelRadius,16,10),i,n.gripLength/2+n.pommelRadius);let g=e.bones.find(e=>e.name===`wrist.L`),_=e.bones.find(e=>e.name===`root`),v=ac(t,`L`),y=new lt,b=new W,x=new W,S=!1;function C(){if(S)return;e.root.updateMatrixWorld(!0),y.copy(e.root.matrixWorld).invert(),r.position.copy(g.localToWorld(v.gripOffset(n.gripRadius)).applyMatrix4(y)),b.set(0,0,1).transformDirection(_.matrixWorld).transformDirection(y),b.y=0,b.normalize();let t=n.tipClearance-e.root.position.y,i=Math.max(0,r.position.y-t),a=Math.sqrt(Math.max(0,n.tipDistance*n.tipDistance-i*i));x.copy(r.position).addScaledVector(b,-a),x.y=Math.max(t,r.position.y-n.tipDistance),r.quaternion.setFromUnitVectors(new W(0,-1,0),x.sub(r.position).normalize()),r.quaternion.multiply(new ye().setFromAxisAngle(new W(0,1,0),n.bladeRoll)),r.updateMatrixWorld(!0)}return C(),{root:r,draw:C,setSteelMap(e){S||(i.map=e??null,i.needsUpdate=!0)},tipPosition(){return r.localToWorld(new W(0,-n.tipDistance,0))},dispose(){S||(S=!0,r.removeFromParent(),s.forEach(e=>e.dispose()),i.dispose(),a.dispose(),o.dispose())}}}function uc(){let e=new f;e.name=`human-vault-knight`,e.rotation.y=Math.PI,e.position.y=Zs.rig.floorY;let t,n,r,i,a,o=!1,s=0,c=new AbortController,l,u=new Promise(e=>{l=e}),d,p=new Promise((e,t)=>{d=t}),m=setTimeout(()=>{c.abort(),d(Error(`Human knight loading timed out`))},Y.timeoutMs),h=e=>{o||(s=e,t?.draw(e),n?.draw(e),r?.draw())};i=Xs(e=>{o||(a=e,n?.setTextures(e),r?.setSteelMap(e.steel),h(s))});let g=(async()=>{let l=await fetch(`/crusader-coin-pusher-demo/${Y.asset}`,{signal:c.signal});if(!l.ok)throw Error(`Human knight HTTP `+l.status);let u=await l.json();if(o||c.signal.aborted)return;clearTimeout(m);let d=cc(u);t=Fs(d),e.scale.setScalar(Y.sceneHeight/d.height),e.add(t.root),e.updateMatrixWorld(!0),n=Ys(t,d),r=lc(t,d),a&&(n.setTextures(a),r.setSteelMap(a.steel)),h(s);let f=await i.ready;if(!o){if(f.failed>0)throw Error(`Human knight materials incomplete`);h(s)}})();return{root:e,ready:Promise.race([g,p,u]).finally(()=>clearTimeout(m)),draw:h,dispose(){o||(o=!0,clearTimeout(m),c.abort(),l(),i?.dispose(),r?.dispose(),n?.dispose(),t?.dispose(),e.clear())}}}var dc=class extends h{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Ge;e.deleteAttribute(`uv`);let t=new Je({side:1}),n=new Je,r=new ge(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new U(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new we(e,n,6),o=new rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new U(e,fc(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new U(e,fc(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new U(e,fc(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new U(e,fc(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new U(e,fc(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new U(e,fc(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function fc(e){return new yt({color:0,emissive:16777215,emissiveIntensity:e})}function pc(){let e=mc(!1),t=mc(!0),n=new f;return n.name=`vault-threshold-floors`,n.add(e.root,t.root),{root:n,ready:Promise.all([e.ready,t.ready]).then(()=>{}),dispose(){e.dispose(),t.dispose()}}}function mc(e){let t=Zs.floor,n=new Uint8Array(t.size*t.size*4);for(let r=0;r<t.size;r++)for(let i=0;i<t.size;i++){let a=r/t.size*(e?t.columns:t.rows),o=e?0:Math.floor(a)%2*.5,s=i/t.size*t.columns+o,c=s%1,l=a%1,u=Math.min(c,1-c,l,1-l),d=wt.smoothstep(u,t.grout*.4,t.grout*1.5),f=Math.sin(i*12.93+r*7.71)*Math.sin(r*4.12-i*3.31)*t.fallbackNoise,p=Math.sin(Math.floor(a)*19.7+Math.floor(s)*17.3)*.04,m=Math.round(255*(e?.3-d*(.16+f+p):.28+d*(.4+f+p))),h=(r*t.size+i)*4;n[h]=m,n[h+1]=m,n[h+2]=e?m*.88:m,n[h+3]=255}let r=new _(n,t.size,t.size),i=new Set([r]),a=new Set,o=e=>{e.wrapS=e.wrapT=bt,e.repeat.set(t.width/t.tileWorld,t.depth/2/t.tileWorld),e.anisotropy=4,e.colorSpace=Yt,e.generateMipmaps=!0,e.minFilter=de,e.magFilter=Me,e.needsUpdate=!0};o(r);let s=new Je({color:e?t.interiorColor:Zs.colors.floor,map:r,bumpMap:r,bumpScale:e?t.interiorBump:t.bump,roughness:e?t.interiorRoughness:t.roughness,metalness:e?t.interiorMetalness:0}),c=new Xt(t.width,t.depth/2),l=new U(c,s);l.name=e?`vault-interior-marble-floor`:`vault-exterior-limestone-floor`,l.rotation.x=-Math.PI/2,l.position.set(0,Zs.rig.floorY-.008,t.doorZ+(e?-1:1)*t.depth/4),l.receiveShadow=!0;let u=!1,d=!1,f,p=new Promise(e=>{f=e}),m=setTimeout(()=>{d=!0,f()},Zs.textureTimeoutMs),h=()=>{d=!0,clearTimeout(m),f()},g=e=>{a.has(e)||(a.add(e),i.delete(e),e.dispose())};try{let n=new ae().load(`/crusader-coin-pusher-demo/${(e?t.interiorAsset:t.asset).replace(/^\.\//,``)}`,e=>{if(u||d){g(e);return}i.add(e),o(e),s.map=s.bumpMap=e,s.needsUpdate=!0,h()},void 0,h);a.has(n)||i.add(n)}catch{h()}return{root:l,ready:p,dispose(){u||(u=!0,h(),c.dispose(),s.dispose(),[...i].forEach(g))}}}function hc(e){let t=s.cinematic,n=t.doors,r=s.premium,i=new Set,a=e=>(i.add(e),e),o,c,l,u,d,f=!1,p=()=>{f||(f=!0,c?.disconnect(),l?.dispose(),u?.dispose(),d?.dispose(),i.forEach(e=>e.dispose()),o?.dispose(),o?.forceContextLoss(),o?.domElement.remove())};try{u=uc(),l=Ns(`push`),o=new Os({alpha:!0,antialias:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),o.setClearColor(0,0),o.toneMapping=4,o.toneMappingExposure=n.exposure,o.shadowMap.enabled=!0,o.shadowMap.type=1;let i=new h,s=new $t(t.fov,1,t.near,t.far);i.add(l.root,u.root);let m=new dc,_=new Pi(o);try{i.environment=a(_.fromScene(m,Y.envBlur)).texture,i.environmentIntensity=Y.envIntensity}finally{m.dispose(),_.dispose()}d=pc(),i.add(d.root),i.add(new E(r.colors.light,r.colors.gunmetal,n.ambient));let v=new ut(r.colors.light,n.keyIntensity);v.position.set(n.keyPosition[0],n.keyPosition[1],n.keyPosition[2]),i.add(v),v.castShadow=!0,v.shadow.mapSize.setScalar(Zs.lighting.shadowSize),a(v.shadow),Object.assign(v.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:22}),v.shadow.bias=-4e-4,v.shadow.normalBias=.035;let y=new ut(r.colors.fill,n.rimIntensity);y.position.set(n.rimPosition[0],n.rimPosition[1],n.rimPosition[2]),i.add(y);let b=new ut(r.colors.fill,Zs.lighting.fillIntensity);b.position.set(1,2,5),i.add(b);let x=a(new Ot),S=new Float32Array(n.sparkCount*3);for(let e=0;e<n.sparkCount;e++)S[e*3]=Math.sin(e*n.goldenAngle)*n.sparkSpreadX,S[e*3+1]=Math.cos(e*n.goldenAngle)*n.sparkSpreadY,S[e*3+2]=n.sparkZ+Math.sin(e)*n.sparkSpreadZ;x.setAttribute(`position`,new Ze(S,3));let C=a(new qt({color:r.colors.edge,size:n.sparkSize,transparent:!0,opacity:0,depthWrite:!1})),w=new g(x,C);i.add(w);let T=0;function D(e){if(f)return;T=Number.isFinite(e)?Math.max(0,Math.min(t.introSeconds,e)):0;let r=l.draw(T,s.aspect);u.draw(T),s.position.set(0,r.cameraY,r.cameraZ),s.lookAt(0,r.cameraY,r.cameraZ-n.lookDistance),w.rotation.z=T*n.sparkRotation,w.position.y=T*n.sparkRise,C.opacity=wt.smoothstep(T,n.sparkFadeStart,n.sparkFadeEnd)*n.sparkOpacity,o.render(i,s)}let O=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);o.setSize(t,n),s.aspect=t/n,s.updateProjectionMatrix(),D(T)};return e.appendChild(o.domElement),c=new ResizeObserver(O),c.observe(e),O(),{draw:D,dispose:p,ready:Promise.all([l.frontReady,u.ready]).then(()=>{f||D(T)})}}catch(e){throw p(),e}}var gc={assets:{scales:`./assets/dragon-study/bronze-scales-v1.webp`,membrane:`./assets/dragon-study/burgundy-membrane-v1.webp`},colors:{skin:`#b89761`,belly:`#d0a76b`,wing:`#752e28`,horn:`#b79a6d`,claw:`#382c23`,mouth:`#2b1010`,eye:`#ffd27b`,pupil:`#150d08`,background:`#141921`,floor:`#242a31`,light:`#ffe5b4`,rim:`#7cafd2`,accent:`#ddbb7c`,white:`#ffffff`},material:{skinRoughness:.67,skinMetalness:.24,bump:.032,wingRoughness:.84,wingMetalness:.02,wingBump:.013,eyeEmission:1.7},geometry:{bodyRings:100,bodySides:32,wingStrips:16,wingSpans:8,limbSides:16,curveRings:30,hornSides:12},motion:{duration:8,wingHz:.75,downAngle:-.32,upAngle:.82,elbowPhase:.38,wristPhase:.68,tailPhase:.54,bodyBob:.1,bodyPitch:.06,diveStart:2.7,diveEnd:4.9,recoverEnd:6.8},camera:{fov:37,near:.1,far:120,targetY:.25,radius:15.5,portraitRadius:22,heroAzimuth:-.78,heroElevation:.3,maxPixelRatio:1.5},lighting:{exposure:1.05,ambient:1.35,key:3.6,fill:1.1,rim:3.2,shadowSize:1024},textureTimeoutMs:12e3,css:{"--ds-bg":`#141921`,"--ds-panel":`#1a2029`,"--ds-text":`#f0e7d5`,"--ds-muted":`#b8b9bc`,"--ds-accent":`#ddbb7c`,"--ds-line":`#48505b`,"--ds-selected":`#453a29`,"--ds-error":`#edb5a5`,"--ds-space-xs":`4px`,"--ds-space-sm":`8px`,"--ds-space-md":`12px`,"--ds-space-lg":`20px`,"--ds-space-xl":`28px`,"--ds-radius":`8px`,"--ds-target":`44px`,"--ds-text-sm":`12px`,"--ds-text-md":`14px`,"--ds-text-lg":`19px`,"--ds-text-title":`25px`,"--ds-stage-min":`200px`,"--ds-border":`1px`,"--ds-outline":`2px`,"--ds-disabled":`0.42`,"--ds-track":`130px`,"--ds-font":`'Segoe UI', 'Microsoft JhengHei', sans-serif`}};function _c(e,t){if(!t.length)throw Error(`A skinning chain requires at least one joint.`);if(t.length===1)return{indices:[t[0].index,0,0,0],weights:[1,0,0,0]};let n=1/0,r=0,i=0,a=new W,o=new W,s=new W;for(let c=0;c<t.length-1;c++){let l=t[c].position,u=t[c+1].position;a.subVectors(u,l),o.subVectors(e,l);let d=wt.clamp(o.dot(a)/Math.max(a.lengthSq(),1e-8),0,1),f=s.copy(l).addScaledVector(a,d).distanceToSquared(e);f<n&&(n=f,r=c,i=d)}return{indices:[t[r].index,t[r+1].index,0,0],weights:[1-i,i,0,0]}}function vc(e,t,n,r,i=2){let a=new et(e.map(e=>new W(...e.center))),o=[],s=[],c=[],l=[],u=[],d=new W(0,1,0),f=new W,p=new W;for(let m=0;m<=n;m++){let h=m/n,g=a.getPoint(h),_=a.getTangent(h).normalize();f.crossVectors(d,_).normalize(),f.lengthSq()<.01&&f.set(1,0,0),p.crossVectors(_,f).normalize();let v=h*(e.length-1),y=Math.min(e.length-2,Math.floor(v)),b=v-y,x=b*b*(3-2*b),S=wt.lerp(e[y].width,e[y+1].width,x),C=wt.lerp(e[y].height,e[y+1].height,x),w=_c(g,t);for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,a=g.clone().addScaledVector(f,Math.cos(t)*S).addScaledVector(p,Math.sin(t)*C);if(o.push(a.x,a.y,a.z),s.push(e/r*i,h*i*2.5),l.push(...w.indices),u.push(...w.weights),m<n&&e<r){let t=m*(r+1)+e,n=t+r+1;c.push(t,t+1,n,n,t+1,n+1)}}}return yc(o,s,c,l,u)}function yc(e,t,n,r,i){let a=new Ot;return a.setAttribute(`position`,new k(e,3)),a.setAttribute(`uv`,new k(t,2)),a.setAttribute(`skinIndex`,new S(r,4)),a.setAttribute(`skinWeight`,new k(i,4)),a.setIndex(n),a.computeVertexNormals(),a}function bc(e,t,n,r,i,a){let o=[],s=[],c=[],l=[],u=[],d=(i+1)*(a+1);for(let f=0;f<t.length-1;f++){let p=t[f],m=t[f+1],h=o.length/3;for(let t=0;t<2;t++)for(let g=0;g<=i;g++)for(let _=0;_<=a;_++){let v=g/i,y=_/a,b=1-.17*Math.sin(y*Math.PI)**.75*v*v,x=p.clone().lerp(m,y).sub(e).multiplyScalar(v*b).add(e);x.y+=Math.sin(v*Math.PI)*Math.sin(y*Math.PI)*.13+(t===0?.004:-.004),o.push(x.x,x.y,x.z),s.push(Math.abs(x.x)/4,x.z/3);let S=wt.smoothstep(v,.03,.75);if(l.push(n,r[f],r[f+1],0),u.push(1-S,S*(1-y),S*y,0),g<i&&_<a){let e=h+t*d+g*(a+1)+_,n=e+a+1;t===0?c.push(e,n,e+1,n,n+1,e+1):c.push(e,e+1,n,n,e+1,n+1)}}let g=(e,t)=>c.push(h+e,h+t,h+e+d,h+t,h+t+d,h+e+d);for(let e=0;e<i;e++)g(e*(a+1),(e+1)*(a+1)),g(e*(a+1)+a,(e+1)*(a+1)+a);for(let e=0;e<a;e++)g(i*(a+1)+e,i*(a+1)+e+1)}return yc(o,s,c,l,u)}var xc=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Sc(e,t){let n=gc.motion,r=Number.isFinite(e)?Math.max(0,e)%n.duration:0,i=r*n.wingHz*Math.PI*2,a=t===`dive`?xc(r,n.diveStart,n.diveStart+.6)*(1-xc(r,n.diveEnd,n.recoverEnd)):0,o=t===`turn`?Math.sin(r/n.duration*Math.PI*2):0,s=e=>Math.sin(e)*.55+Math.sin(e*2+.2)*.09;return{time:r,phase:i,fold:a,shoulder:.16+s(i)*(1-a*.86)+a*.25,elbow:-.04+s(i-n.elbowPhase)*.46*(1-a)-a*.85,wrist:.08+s(i-n.wristPhase)*.38*(1-a)+a*.45,sweep:a*1,pitch:Math.cos(i-.3)*n.bodyPitch*(1-a)-a*.67,bob:-Math.sin(i-.4)*n.bodyBob*(1-a)-a*.55,yaw:o*.78,bank:-o*.15,neck:Math.cos(i-.55)*.045+a*.12,jaw:-.1-a*.16,tail:Array.from({length:8},(e,t)=>({yaw:Math.sin(i*.5-t*n.tailPhase)*(.045+t*.013)-o*.055,pitch:Math.sin(i-t*.36)*.024+a*.045}))}}function Cc(){let e=new f;e.name=`original-treasury-dragon`;let t=[],n=[],r=[],i=new Set,a=new Set,o=(r,i,a)=>{let o=new gt;o.name=r;let s=new W(...i);o.position.copy(s),a!==void 0&&o.position.sub(n[a]),(a===void 0?e:t[a]).add(o);let c=t.length;return t.push(o),n.push(s),c},s=e=>({index:e,position:n[e]}),c=e=>e.map(s),l=(e,t,n=t)=>({center:e,width:t,height:n}),u=e=>{let t=new Je(e);return a.add(t),t},p=u({color:gc.colors.skin,roughness:gc.material.skinRoughness,metalness:gc.material.skinMetalness}),m=u({color:gc.colors.belly,roughness:.57,metalness:.2}),h=u({color:gc.colors.wing,roughness:gc.material.wingRoughness,metalness:gc.material.wingMetalness,side:2}),g=u({color:gc.colors.horn,roughness:.49,metalness:.12}),_=u({color:gc.colors.claw,roughness:.46,metalness:.12}),v=u({color:gc.colors.mouth,roughness:.9}),y=u({color:gc.colors.eye,emissive:gc.colors.eye,emissiveIntensity:gc.material.eyeEmission,roughness:.19}),b=u({color:gc.colors.pupil,roughness:.23}),x=(t,n,a=p)=>{i.add(n);let o=new mt(n,a);return o.name=t,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,e.add(o),r.push(o),o},S=o(`pelvis`,[0,-.05,1.05],o(`root`,[0,0,0])),C=o(`chest`,[0,.18,-.45],S),w=o(`neck-base`,[0,.45,-1.15],C),T=o(`neck-middle`,[0,.82,-1.9],w),E=o(`head`,[0,1.02,-2.65],T),D=o(`jaw`,[0,.79,-2.7],E),O=[];for(let e=0;e<8;e++)O.push(o(`tail-${e}`,[0,-.1-e*.025,1.5+e*.63],e?O[e-1]:S));let k=c([E,T,w,C,S,...O]);x(`neck-thorax-abdomen-tail`,vc([l([0,1.01,-2.57],.24,.29),l([0,.91,-2.04],.255,.31),l([0,.57,-1.39],.32,.4),l([0,.23,-.85],.58,.66),l([0,.12,-.27],.65,.68),l([0,.02,.42],.52,.53),l([0,-.03,1.06],.43,.45),l([0,-.1,1.63],.29,.3),l([0,-.13,2.2],.205,.22),l([0,-.17,2.88],.145,.16),l([0,-.2,3.6],.1,.12),l([0,-.25,4.3],.075,.09),l([0,-.28,5.05],.045,.06),l([0,-.3,5.86],.008,.009)],k,gc.geometry.bodyRings,gc.geometry.bodySides,2.5)),x(`sculpted-cranium-and-snout`,vc([l([0,1.02,-2.34],.2,.24),l([0,1.04,-2.62],.4,.36),l([0,1.02,-2.95],.365,.26),l([0,.96,-3.18],.265,.18),l([0,.92,-3.48],.23,.135),l([0,.92,-3.68],.175,.11),l([0,.92,-3.75],.015,.035)],c([E]),32,24,1)),x(`lower-jaw`,vc([l([0,.77,-2.6],.22,.1),l([0,.77,-2.89],.3,.115),l([0,.78,-3.23],.215,.07),l([0,.79,-3.58],.16,.045),l([0,.8,-3.67],.012,.015)],c([D]),24,20,1)),x(`mouth-interior`,vc([l([0,.8,-2.72],.21,.025),l([0,.82,-3.08],.24,.028),l([0,.83,-3.52],.16,.022),l([0,.83,-3.62],.01,.006)],c([E]),15,12,1),v);let A=(e,t,n,r,i=g,a=gc.geometry.hornSides)=>x(e,vc(t.map((e,t)=>l(e,n[t])),r,Math.max(9,t.length*5),a,1),i),j=(e,r,a,o,s)=>{let c=new d(1,16,10);i.add(c);let l=new U(c,s);return l.name=e,l.scale.set(...o),l.position.set(...a).sub(n[r]),l.castShadow=!0,t[r].add(l),l};for(let e of[-1,1]){let t=t=>[t[0]*e,t[1],t[2]];A(`crown-horn-${e}`,[[.27,1.29,-2.53],[.43,1.51,-2.32],[.53,1.69,-1.94],[.49,1.79,-1.61]].map(e=>t(e)),[.13,.1,.052,.001],c([E])),A(`temple-horn-${e}`,[[.34,1.09,-2.57],[.6,1.17,-2.39],[.72,1.24,-2.14]].map(e=>t(e)),[.1,.072,.001],c([E])),A(`jaw-spike-${e}`,[[.24,.73,-2.71],[.43,.65,-2.47],[.53,.66,-2.26]].map(e=>t(e)),[.075,.052,.001],c([D])),A(`eye-brow-${e}`,[[.25,1.18,-3.14],[.36,1.25,-2.94],[.41,1.25,-2.71]].map(e=>t(e)),[.025,.09,.025],c([E]),p),j(`orbital-socket-${e}`,E,t([.324,1.115,-2.96]),[.08,.12,.15],v),j(`amber-eye-${e}`,E,t([.376,1.12,-2.99]),[.044,.067,.095],y),j(`vertical-pupil-${e}`,E,t([.413,1.12,-3.005]),[.009,.052,.014],b),j(`nostril-${e}`,E,t([.177,.985,-3.51]),[.018,.028,.06],v);for(let n=0;n<6;n++){let r=-3.46+n*.117,i=.18+n*.017;A(`tooth-${e}-${n}`,[t([i,.83,r]),t([i,.735-n%2*.025,r+.02])],[.027,.001],c([E]),g,7)}}for(let e=0;e<18;e++){let t=-1.92+e*.36,n=t<-1?.99:t<.5?.77-(t+.5)*.08:t<1.6?.46:.18-(t-1.6)*.062,r=.27*(1-e/24);A(`dorsal-scutum-${e}`,[[0,n,t],[0,n+r*.8,t+.09],[0,n+r,t+.22]],[.09-e*.003,.055-e*.002,.001],k)}for(let e=0;e<12;e++){let t=-1.55+e*.24,n=t<-.8?.24+(t+1.55)*.3:.48-Math.max(0,t+.1)*.15,r=t<-.8?.2-(t+1.55)*.7:-.5+Math.max(0,t)*.1;x(`ventral-plate-${e}`,vc([l([0,r,t-.11],n*.68,.035),l([0,r-.035,t],n,.055),l([0,r,t+.105],n*.76,.012)],k,6,14,1),m)}let M=[];for(let e of[!1,!0])for(let t of[-1,1]){let n=e?[[t*.36,-.04,1],[t*.73,-.49,1.34],[t*.64,-.92,.95],[t*.65,-1.03,.54]]:[[t*.5,.08,-.67],[t*.79,-.52,-.26],[t*.62,-.98,-.87],[t*.61,-1.04,-1.13]],r=o(`${e?`hind`:`fore`}-upper-${t}`,n[0],e?S:C),i=o(`${e?`hind`:`fore`}-lower-${t}`,n[1],r),a=o(`${e?`hind`:`fore`}-foot-${t}`,n[2],i),s=c([r,i,a]);x(`limb-${e}-${t}`,vc(n.map((t,n)=>l(t,[e?.255:.22,.175,.105,.025][n],[e?.27:.23,.185,.1,.02][n])),s,26,gc.geometry.limbSides,1.3));for(let r=0;r<3;r++){let i=n[3],o=i[0]+(r-1)*.095;A(`finger-${e}-${t}-${r}`,[[i[0],i[1],i[2]+.15],[o,i[1]-.035,i[2]-.03],[o,i[1]-.08,i[2]-.16]],[.055,.04,.026],c([a]),p,9),A(`talon-${e}-${t}-${r}`,[[o,i[1]-.08,i[2]-.12],[o,i[1]-.1,i[2]-.23],[o,i[1]-.18,i[2]-.25]],[.037,.025,.001],c([a]),_,9)}M.push({upper:r,lower:i,foot:a,side:t,rear:e})}let N=[];for(let e of[-1,1]){let t=[e*.48,.49,-.56],n=[e*1.5,.56,-.93],r=[e*2.65,.43,-1.21],i=o(`wing-shoulder-${e}`,t,C),a=o(`wing-elbow-${e}`,n,i),s=o(`wing-wrist-${e}`,r,a),u=c([i,a,s]);x(`wing-leading-arm-${e}`,vc([l(t,.2,.22),l(n,.115,.135),l(r,.087,.09)],u,28,16,1.3));let d=[[e*5,.38,-.98],[e*4.27,.2,.32],[e*3.35,.08,1.46],[e*2.26,.01,2.05],[e*1.25,.04,1.69],[e*.59,.1,1.02]],f=d.map((t,n)=>o(`wing-finger-${e}-${n}`,r,s));for(let t=0;t<d.length;t++){let n=d[t],i=new W(...r),a=new W(...n),o=i.clone().lerp(a,.53);o.y+=.045;let l=A(`wing-ray-${e}-${t}`,[r,o.toArray(),n],[.073-t*.006,.047-t*.004,.008],c([s]),p,10),u=l.geometry.getAttribute(`skinIndex`),m=l.geometry.getAttribute(`skinWeight`);for(let e=0;e<m.count;e++){let n=Math.floor(e/11)/15,r=wt.smoothstep(n,.03,.75);u.setXYZW(e,s,t===d.length-1?C:f[t],0,0),m.setXYZW(e,1-r,r,0,0)}}let m=[...f.slice(0,-1),C],_=bc(new W(...r),d.map(e=>new W(...e)),s,m,gc.geometry.wingStrips,gc.geometry.wingSpans);x(`deforming-wing-membrane-${e}`,_,h),x(`wing-root-web-${e}`,bc(new W(...r),[n,t,d[d.length-1]].map(e=>new W(...e)),s,[a,i,C],gc.geometry.wingStrips,gc.geometry.wingSpans),h),A(`wing-thumb-${e}`,[r,[e*2.76,.62,-1.47],[e*2.88,.59,-1.61]],[.09,.063,.001],c([s]),g),N.push({shoulder:i,elbow:a,wrist:s,fingers:f,side:e})}e.updateMatrixWorld(!0);let ee=new L(t);for(let e of r)e.bind(ee),e.normalizeSkinWeights();let te=t.map(e=>({position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone()})),P=!1;return{root:e,skeleton:ee,bones:t,meshes:r,materials:{skin:p,wing:h,belly:m,horn:g},stats:()=>{let n=0,i=0,a=0;return e.traverse(e=>{e instanceof U&&(a++,i+=e.geometry.getAttribute(`position`).count,n+=(e.geometry.index?.count??e.geometry.getAttribute(`position`).count)/3)}),{bones:t.length,skinnedMeshes:r.length,meshes:a,vertices:i,triangles:n}},draw:(n,r)=>{if(P)return;let i=Sc(n,r);t.forEach((e,t)=>{e.position.copy(te[t].position),e.quaternion.copy(te[t].rotation),e.scale.copy(te[t].scale)}),e.position.y=i.bob,e.rotation.set(i.pitch,i.yaw,i.bank),t[C].rotation.x=Math.sin(i.phase-.4)*.025,t[w].rotation.x=i.neck,t[T].rotation.x=-i.neck*.6,t[E].rotation.x=-i.pitch*.22,t[E].rotation.y=-i.yaw*.12,t[D].rotation.x=i.jaw,O.forEach((e,n)=>{t[e].rotation.y=i.tail[n].yaw,t[e].rotation.x=i.tail[n].pitch});for(let e of N)t[e.shoulder].rotation.z=e.side*i.shoulder,t[e.shoulder].rotation.y=-e.side*i.sweep*.4,t[e.elbow].rotation.z=e.side*i.elbow,t[e.elbow].rotation.y=-e.side*i.sweep*.72,t[e.wrist].rotation.z=e.side*i.wrist,t[e.wrist].rotation.y=e.side*i.sweep*.13,e.fingers.forEach((n,r)=>{t[n].rotation.x=Math.sin(i.phase-.8-r*.13)*.032*(1-i.fold)+i.fold*.08,t[n].rotation.y=e.side*i.fold*(r-2)*.07});for(let e of M)t[e.upper].rotation.x=-.13+i.fold*.35+Math.sin(i.phase-.6)*.03,t[e.upper].rotation.z=e.side*.04,t[e.lower].rotation.x=.16+i.fold*.18,t[e.foot].rotation.x=-.17;return e.updateMatrixWorld(!0),ee.update(),i},setWireframe(e){a.forEach(t=>{t instanceof Je&&(t.wireframe=e)})},setTextures(e,t){p.map=e,p.bumpMap=e,p.bumpScale=gc.material.bump,h.map=t,h.bumpMap=t,h.bumpScale=gc.material.wingBump,p.color.set(e?gc.colors.white:gc.colors.skin),h.color.set(t?gc.colors.white:gc.colors.wing),p.needsUpdate=h.needsUpdate=!0},dispose(){P||(P=!0,i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),ee.dispose(),e.clear())}}}var wc=s.cinematic.dragon,Tc=e=>Math.max(0,Math.min(1,e)),Ec=e=>{let t=Tc(e);return t*t*(3-2*t)},Dc=(e,t,n)=>e+(t-e)*n;function Oc(e){let t=Number.isFinite(e)?Math.max(0,e):0,n=Tc((t-wc.enterSeconds)/(wc.impactSeconds-wc.enterSeconds)),r=Tc((t-wc.impactSeconds)/(wc.exitSeconds-wc.impactSeconds)),i=Math.max(0,t-wc.impactSeconds),a=n*n;return{skeletonTime:i?Dc(wc.hitPoseTime,wc.exitPoseTime,r):Dc(wc.startPoseTime,wc.hitPoseTime,n),yaw:i?Dc(wc.hitYaw,wc.exitYaw,Ec(r)):Dc(wc.startYaw,wc.hitYaw,Ec(n)),bank:i?Dc(0,wc.exitBank,Ec(r)):Dc(wc.startBank,0,Ec(n)),x:i?Dc(wc.hitX,wc.exitX,r):Dc(wc.startX,wc.hitX,a),y:i?Dc(wc.hitY,wc.exitY,r*r):Dc(wc.startY,wc.hitY,a),z:i?Dc(wc.hitZ,wc.exitZ,r):Dc(wc.startZ,wc.hitZ,a),scale:i?Dc(wc.hitScale,wc.exitScale,r):Dc(wc.startScale,wc.hitScale,a),opacity:Ec((t-wc.enterSeconds)/.25)*(1-Ec((r-.55)/.45)),flight:i,impact:i>0?Math.exp(-i*wc.shakeDecay):0,shake:i>0?Math.sin(i*wc.shakeFrequency)*Math.exp(-i*wc.shakeDecay)*wc.cameraShake:0,fade:1-Ec((t-wc.settleSeconds)/(s.cinematic.winSeconds-wc.settleSeconds))}}function kc(){let e=s.cinematic.dragon,t=new f;t.name=`treasury-skinned-dragon-flight`;let n=new f;t.add(n);let r=Cc();n.add(r.root);let i=r.bones.find(e=>e.name===`head`),a=new rt;a.name=`muzzle-contact`,a.position.set(e.muzzleLocal[0],e.muzzleLocal[1],e.muzzleLocal[2]),i.add(a);let o=new Set;r.root.traverse(e=>{e instanceof U&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.transparent=!0,o.add(e)})});let c=new Set,l=new Set,u={},d=!1,p=!1,m,h,g=e=>{l.has(e)||(l.add(e),c.delete(e),e.dispose())},_=new Promise((e,t)=>{m=n=>{p||(p=!0,clearTimeout(h),n?t(n):e())}});_.catch(()=>{}),h=setTimeout(()=>m(Error(`Dragon textures timed out`)),s.cinematic.doors.textureTimeoutMs);let v=new ae;for(let e of[`scales`,`membrane`]){if(p)break;try{let t=v.load(`/crusader-coin-pusher-demo/${gc.assets[e].replace(/^\.\//,``)}`,t=>{if(d||p){g(t);return}c.add(t),t.colorSpace=Yt,t.wrapS=t.wrapT=bt,t.anisotropy=s.premium.texture.anisotropy,u[e]=t,u.scales&&u.membrane&&(r.setTextures(u.scales,u.membrane),m())},void 0,()=>m(Error(`Dragon textures unavailable`)));l.has(t)||c.add(t)}catch{m(Error(`Dragon textures unavailable`))}}let y=new W,b=new lt,x=e=>{d||(r.draw(e.skeletonTime,`dive`),n.rotation.set(0,e.yaw,e.bank),t.scale.setScalar(e.scale),t.updateWorldMatrix(!0,!0),b.copy(t.matrixWorld).invert(),a.getWorldPosition(y).applyMatrix4(b).multiplyScalar(e.scale),t.position.set(e.x,e.y,e.z).sub(y),t.visible=e.opacity>0,o.forEach(t=>{t.opacity=e.opacity}),t.updateWorldMatrix(!0,!0),r.skeleton.update())},S=e=>x(Oc(e));return S(0),{root:t,ready:_,draw:S,drawPose:x,dispose:()=>{d||(d=!0,m(),clearTimeout(h),r.dispose(),[...c].forEach(g),t.clear())},strikePoint:a,model:r}}function Ac(e,t){if(t===`intro`)return hc(e);let n=s.cinematic,r=n.dragon,i=s.premium,a=new Os({alpha:!0,antialias:!0}),o=new Set,c=e=>(o.add(e),e),l,u=!1,d=()=>{u||(u=!0,l?.disconnect(),o.forEach(e=>e.dispose()),a.dispose(),a.forceContextLoss(),a.domElement.remove())};try{a.setPixelRatio(Math.min(window.devicePixelRatio||1,n.pixelRatio)),a.setClearColor(0,0),a.toneMapping=4,a.toneMappingExposure=1.15;let t=new h,o=new f;t.add(o);let s=new $t(n.fov,1,n.near,n.far),p=ks(`coin`);Object.values(p).forEach(c);let m=c(new Je({color:r.coinColor,metalness:n.doors.coinMetalness,roughness:i.materials.coinRoughness,map:p.albedo,bumpMap:p.height,bumpScale:.012,roughnessMap:p.roughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),_=c(new Je({color:i.colors.coinSide,metalness:n.doors.coinMetalness,roughness:i.materials.goldRoughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),v=c(new Gt(n.coinRadius,n.coinRadius,n.coinHeight,n.coinSegments)),y=n.towerLayers*n.towerRing,b=c(new we(v,[_,m,m],y));b.frustumCulled=!1,o.add(b);let x=c(kc());o.add(x.root),t.add(new E(i.colors.light,i.colors.gunmetal,r.ambient));let S=new ut(i.colors.light,r.keyIntensity);S.position.set(-3,5,4),t.add(S);let C=new ut(i.colors.fill,r.rimIntensity);C.position.set(3,2,-2),t.add(C);let w=new ge(i.colors.edge,0,r.flashDistance);w.position.set(r.towerX,.4,1.8),o.add(w);let T=c(new Dt({color:i.colors.edge,transparent:!0,opacity:.5})),D=c(new se(1.2,.008,6,96)),O=new f;for(let e=0;e<3;e++){let t=new U(D,T);t.scale.setScalar(1+e*.12),t.rotation.x=e*.16,O.add(t)}o.add(O);let k=c(new Ot),A=new Float32Array(540);for(let e=0;e<180;e++)A[e*3]=Math.sin(e*12.31)*7,A[e*3+1]=Math.cos(e*9.7)*5,A[e*3+2]=-2+Math.sin(e)*2;k.setAttribute(`position`,new Ze(A,3));let j=c(new qt({color:i.colors.edge,size:.022,transparent:!0,opacity:.6})),M=new g(k,j);o.add(M);let N=new rt,ee=0;function te(e){if(u)return;ee=e;let i=Oc(e);x.draw(e);let c=s.aspect<.8;o.scale.setScalar(c?r.portraitScale:1),s.position.set(i.shake,.25+i.shake*.5,(c?n.portraitCameraZ:n.cameraZ)-e*.06),s.lookAt(0,.2,0),M.rotation.z=e*.035,M.position.y=e*.06;{let t=i.flight;m.opacity=_.opacity=i.fade;for(let i=0;i<y;i++){let a=Math.floor(i/n.towerRing),o=(i%n.towerRing+a%2*.5)*Math.PI*2/n.towerRing,s=Math.max(0,t-(1-a/n.towerLayers)*.12),c=o+a*.43,l=.6+a/n.towerLayers;N.position.set(r.towerX+Math.cos(o)*n.ringRadius+s*(r.towerPush*l+Math.cos(c)*r.towerSpread),-1.3+a*n.towerPitch+s*(.45+Math.sin(i*2.3)*.55)-s*s*r.gravity,Math.sin(o)*n.ringRadius+Math.sin(c)*s*r.towerSpread),N.rotation.set(i%7*s,e*.1+i%9*s,i%5*s),N.scale.setScalar(1),N.updateMatrix(),b.setMatrixAt(i,N.matrix)}T.opacity=i.impact*.7,O.scale.setScalar(.8+t*3.5),w.intensity=i.impact*r.flashIntensity}O.rotation.z=e*.13,b.instanceMatrix.needsUpdate=!0,a.render(t,s)}let P=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);a.setSize(t,n),s.aspect=t/n,s.updateProjectionMatrix(),te(ee)};return e.appendChild(a.domElement),l=new ResizeObserver(P),l.observe(e),P(),{draw:te,ready:x.ready,dispose:d}}catch(e){throw d(),e}}var jc=[[`遠征歸來`,`聖城御庫，仍在沉睡。`],[`誓印之幣`,`每一枚金幣，都是喚醒機關的鑰匙。`],[`聖城幣塔`,`推動金幣，揭開御庫的封印。`]],Mc=[`御庫封印解除`,`最高幣塔擊破`];function Nc(e,t=!1){return e===`high-tower`&&t?s.cinematic.reducedWinSeconds:e===`intro`?s.cinematic.introSeconds:s.cinematic.winSeconds}function Pc(e,t){return!t||e===`high-tower`}function Fc(e,t){return e===`intro`?t<s.cinematic.introCuts[0]?0:t<s.cinematic.introCuts[1]?1:2:0}function Ic(e,t,n,r){let i=!1,a=e=>{i||(i=!0,clearTimeout(o),n(e))},o=setTimeout(()=>a(Error(`Cinematic scene loading timed out`)),r);return Promise.resolve(e).then(()=>{if(!i){try{t()}catch(e){a(e);return}a()}},e=>a(e)),()=>{i=!0,clearTimeout(o)}}var Lc=o({...s.customProperties,...s.cinematic.css});function Rc(e){let[t]=(0,q.useState)(()=>`/crusader-coin-pusher-demo/${window.innerHeight>window.innerWidth?s.introVideo.portrait:s.introVideo.wide}`),[n,r]=(0,q.useState)(!1),[i,a]=(0,q.useState)(!1),[o,c]=(0,q.useState)(!1),l=(0,q.useRef)(null),u=(0,q.useRef)(null),d=(0,q.useRef)(null),f=(0,q.useRef)(!1),p=(0,q.useRef)(0),m=(0,q.useRef)(e);m.current=e;let h=()=>{f.current||(f.current=!0,l.current?.pause(),m.current.onComplete())},g=async()=>{let e=l.current,t=p.current;if(!(!e||m.current.suspended||f.current)){try{await e.play()}catch{if(t!==p.current||l.current!==e||m.current.suspended||f.current)return;e.muted=!0,c(!!m.current.soundEnabled);try{await e.play()}catch{}}t===p.current&&(m.current.suspended||f.current||l.current!==e)&&e.pause()}},_=()=>{m.current.onAudioUnlock?.(),l.current&&m.current.soundEnabled&&!m.current.suspended&&(l.current.muted=!1,c(!1),g())};return(0,q.useEffect)(()=>{let e=document.activeElement;return d.current?.focus({preventScroll:!0}),m.current.onPlaybackTime?.(0,!1),()=>{e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,q.useEffect)(()=>{let e=l.current;if(e)return e.src=t,()=>{p.current++,e.pause(),e.removeAttribute(`src`),e.load()}},[t]),(0,q.useEffect)(()=>{let t=l.current;t&&(t.muted=!e.soundEnabled,e.suspended||i?t.pause():g())},[e.suspended,e.soundEnabled,i]),(0,q.useEffect)(()=>{if(i||e.suspended)return;let t=-1,n=0,r=window.setInterval(()=>{let e=l.current?.currentTime??0;n=e>t?0:n+s.introVideo.pollMs,t=e,n>=s.introVideo.stallTimeoutMs&&a(!0)},s.introVideo.pollMs);return()=>window.clearInterval(r)},[i,e.suspended]),(0,q.useEffect)(()=>{if(!i||e.suspended)return;let t=window.setTimeout(h,s.introVideo.errorReturnMs);return()=>window.clearTimeout(t)},[i,e.suspended]),(0,J.jsxs)(`div`,{ref:u,className:`vault-film vault-film--video`,style:Lc,role:`dialog`,"aria-modal":`true`,"aria-label":`御庫序章`,"data-kind":`intro`,"data-motion":`full`,"data-state":i?`fallback`:n?`ready`:`loading`,onPointerDownCapture:e=>{e.target.closest(`button`)||_()},onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),h()),e.key===`Tab`){let t=u.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[(0,J.jsx)(`video`,{ref:l,className:`vault-film__video`,src:t,autoPlay:!e.suspended&&!i,playsInline:!0,preload:`auto`,onPlaying:()=>r(!0),onEnded:h,onError:()=>a(!0)}),!n&&(0,J.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,J.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,J.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,J.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,J.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,J.jsxs)(`div`,{className:`vault-film__top`,children:[(0,J.jsx)(`span`,{children:`聖城御庫 · 序章`}),(0,J.jsxs)(`div`,{className:`vault-film__actions`,children:[e.onSoundToggle&&(0,J.jsx)(`button`,{type:`button`,disabled:e.suspended,"aria-pressed":!!e.soundEnabled&&!o,onClick:()=>{o&&e.soundEnabled?_():e.onSoundToggle?.()},children:e.soundEnabled&&!o?`關閉音效`:`開啟音效`}),(0,J.jsx)(`button`,{ref:d,type:`button`,onClick:t=>{t.stopPropagation(),e.onAudioUnlock?.(),h()},children:`跳過開場 ›`})]})]}),(i||!n)&&(0,J.jsxs)(`div`,{className:`vault-film__caption`,children:[!i&&(0,J.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),i&&(0,J.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]})]})}var zc=o({...s.customProperties,...s.cinematic.css});function Bc(e){return e.kind===`intro`&&s.introVideo.enabled?(0,J.jsx)(Rc,{...e}):(0,J.jsx)(Vc,{...e})}function Vc({kind:e,suspended:t,onComplete:n,soundEnabled:r,onSoundToggle:i,onAudioUnlock:a,onPlaybackTime:o}){let[c,l]=(0,q.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),[u,d]=(0,q.useState)(!1),f=c&&!u,p=!f||e===`high-tower`,[m,h]=(0,q.useState)(0),[g,_]=(0,q.useState)(!1),[v,y]=(0,q.useState)(!1),[b,x]=(0,q.useState)(),[S,C]=(0,q.useState)(!1),[w,T]=(0,q.useState)(!1),E=(0,q.useRef)(null),D=(0,q.useRef)(null),O=(0,q.useRef)(null),k=(0,q.useRef)(null),A=(0,q.useRef)(null),j=(0,q.useRef)(null),M=(0,q.useRef)(!1),N=(0,q.useRef)({suspended:t,onComplete:n,onPlaybackTime:o});N.current={suspended:t,onComplete:n,onPlaybackTime:o};let ee=()=>{M.current||(M.current=!0,j.current?.kill(),N.current.onComplete())},te=(0,q.useRef)(ee);te.current=ee,(0,q.useEffect)(()=>{let e=document.activeElement;A.current?.focus({preventScroll:!0});let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n=()=>l(t.matches);return t.addEventListener(`change`,n),()=>{t.removeEventListener(`change`,n),e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,q.useEffect)(()=>{if(S||g)return;let e=window.setTimeout(()=>_(!0),s.cinematic.loadTimeoutMs);return()=>window.clearTimeout(e)},[S,g]),(0,q.useEffect)(()=>{if(!D.current||f&&e===`intro`)return;let t=!1;T(!1),y(!1),x(void 0);let n;try{n=Ac(D.current,e)}catch(e){x(e instanceof Error?e.message:`Scene initialization failed`),y(!0)}let r=D.current.querySelector(`canvas`),i=e=>{e.preventDefault(),x(`WebGL context lost`),y(!0),n?.dispose(),n=void 0,T(!0)};r?.addEventListener(`webglcontextlost`,i);let a={time:0},o=-1,c=Nc(e,f),l=je.timeline({paused:!0,onComplete:()=>te.current()});l.data=`vault-film`,j.current=l,l.to(a,{time:c,duration:c,ease:`none`,onUpdate:()=>{if(f)return;let t=a.time;N.current.onPlaybackTime?.(t,!N.current.suspended);try{n?.draw(t)}catch(e){n?.dispose(),n=void 0,x(e instanceof Error?e.message:`Scene draw failed`),y(!0)}if(e===`high-tower`&&E.current){let e=s.cinematic.dragon;E.current.style.setProperty(`--film-win-caption-opacity`,String(Math.max(0,Math.min(1,(t-e.captionStart)/(e.captionEnd-e.captionStart)))))}let r=Fc(e,t);r!==o&&(o=r,h(r)),O.current&&(O.current.style.transform=`scale(${1+Math.max(0,(t-(e===`intro`?9:0))/c)*.24})`),k.current&&(k.current.style.transform=`scaleX(${t/c})`)}});let u=Ic(n&&`ready`in n?n.ready:void 0,()=>n?.draw(f?s.cinematic.dragon.stillSeconds:0),r=>{t||(r&&(n?.dispose(),n=void 0,x(r instanceof Error?r.message:`Scene asset loading failed`),y(!0)),T(!0),!Pc(e,f)||N.current.suspended?l.pause():l.resume())},e===`intro`?Y.sceneReadyTimeoutMs:s.cinematic.loadTimeoutMs);return()=>{t=!0,u(),N.current.onPlaybackTime?.(l.time(),!1),l.kill(),j.current===l&&(j.current=null),r?.removeEventListener(`webglcontextlost`,i),n?.dispose()}},[e,f]),(0,q.useEffect)(()=>{let n=!t&&w&&Pc(e,f);n?j.current?.resume():j.current?.pause(),N.current.onPlaybackTime?.(j.current?.time()??0,n&&!f)},[e,t,w,f]);let P=e===`intro`?jc[f?2:m]:Mc;return(0,J.jsxs)(`div`,{ref:E,className:`vault-film`,role:`dialog`,"aria-modal":`true`,"aria-label":e===`intro`?`御庫序章`:`最高幣塔擊破演出`,"data-kind":e,"data-beat":m,"data-state":g||v?`fallback`:S&&(!p||w)?`ready`:`loading`,"data-motion":f?`reduced`:`full`,"data-scene-ready":w,"data-scene-error":b,style:zc,...Tt(()=>a?.()),onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),a?.(),ee()),e.key===`Tab`){let t=E.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[(0,J.jsx)(`img`,{ref:O,className:`vault-film__plate`,src:s.cinematic.treasureAsset,alt:``,onLoad:()=>{C(!0),_(!1)},onError:()=>_(!0)}),(0,J.jsx)(`div`,{ref:D,className:`vault-film__scene`,"aria-hidden":`true`}),e===`intro`&&!f&&!w&&(0,J.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,J.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,J.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,J.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,J.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,J.jsx)(`div`,{className:`vault-film__shade`}),(0,J.jsxs)(`div`,{className:`vault-film__top`,children:[(0,J.jsx)(`span`,{children:e===`intro`?`聖城御庫 · 序章`:`聖城御庫 · 封印解放`}),(0,J.jsxs)(`div`,{className:`vault-film__actions`,children:[i&&(0,J.jsx)(`button`,{type:`button`,disabled:t,"aria-pressed":!!r,onClick:i,children:r?`關閉音效`:`開啟音效`}),(0,J.jsxs)(`button`,{ref:A,type:`button`,onClick:e=>{e.stopPropagation(),a?.(),ee()},children:[e===`intro`?f?`進入御庫`:`跳過開場`:`返回機台`,` `,(0,J.jsx)(`span`,{"aria-hidden":`true`,children:` ›`})]})]})]}),(0,J.jsxs)(`div`,{className:`vault-film__caption`,children:[(0,J.jsx)(`p`,{className:`vault-film__kicker`,children:e===`intro`?`THE OATH OF THE TREASURY`:`THE SEAL IS BROKEN`}),(0,J.jsx)(`h2`,{children:P[0]}),(0,J.jsx)(`p`,{children:P[1]}),f&&e===`intro`&&(0,J.jsx)(`p`,{className:`vault-film__note`,children:`遠征歸來，以誓印之幣喚醒古老機關。最高幣塔崩落之時，御庫重見天光。`}),e===`high-tower`&&(0,J.jsx)(`p`,{className:`vault-film__note`,children:`得分依實際收集計算`}),(!S||p&&!w)&&!g&&!v&&(0,J.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),f&&(0,J.jsx)(`button`,{type:`button`,disabled:t,onClick:()=>{a?.(),d(!0),A.current?.focus()},children:`播放完整動畫`}),(g||v)&&(0,J.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]},`${e}-${f?`still`:m}`),!f&&(0,J.jsx)(`div`,{className:`vault-film__progress`,"aria-hidden":`true`,children:(0,J.jsx)(`span`,{ref:k})})]})}var Hc=class{totals={front:0,dragon:0,hatch:0,side:0};records=[];settled=new Set;awards=new Set;collapsed=new Set;paid=new Set;sequence=0;frontAt=null;highTower=null;replay=!1;transientAfter=-1/0;add(e,t,n){if(!Number.isSafeInteger(t)||t<=0)return;this.totals[e]+=t;let r=this.records[0],i=s.boardFeedback;e!==`dragon`&&r?.source===e&&r.at>this.transientAfter&&(n-r.at)*1e3<=i.mergeGapMs&&(n-r.startedAt)*1e3<=i.mergeMaxMs?this.records[0]={...r,amount:r.amount+t,at:n}:(this.records.unshift({id:++this.sequence,source:e,amount:t,startedAt:n,at:n}),this.records.length=Math.min(this.records.length,i.recordLimit)),e===`front`&&(this.frontAt=n)}record(e,t){if(Number.isFinite(t))for(let n of e){for(let e of n.dragonAwards??[])this.awards.has(e.eventId)||(this.awards.add(e.eventId),e.coinIds.forEach(e=>{this.settled.add(e),this.paid.add(e)}),this.add(`dragon`,e.amount,t));let e=0,r=0,i=0;for(let t of n.scored)this.settled.has(t)||(this.settled.add(t),e++);for(let e of n.lost)this.settled.has(e.id)||e.zone!==`score`&&(this.settled.add(e.id),e.zone===`loss-hatch`?r++:i++);this.add(`front`,e,t),this.add(`hatch`,r,t),this.add(`side`,i,t);for(let e of n.towerCollapses){if(this.collapsed.has(e.id)||(this.collapsed.add(e.id),e.tier!==`high`))continue;this.replay=!0;let n=this.highTower&&(t-this.highTower.at)*1e3<s.boardFeedback.collapseMs?[...new Set([...this.highTower.slots,e.slotIndex])]:[e.slotIndex];this.highTower={slots:n,at:t}}}}snapshot(e){let t=(t,n)=>t>this.transientAfter&&(e-t)*1e3<n,n=[`front`,`dragon`].flatMap(e=>{let n=this.records.find(t=>t.source===e);return n&&t(n.at,s.boardFeedback.receiptMs)?[{...n}]:[]});return{totals:{...this.totals},records:this.records.map(e=>({...e})),receipts:n,frontAt:this.frontAt!==null&&t(this.frontAt,s.boardFeedback.frontPulseMs)?this.frontAt:null,highTower:this.highTower&&t(this.highTower.at,s.boardFeedback.collapseMs)?this.highTower:null,highTowerReplayAvailable:this.replay,paidCoinIds:this.paid}}clearTransient(e){this.transientAfter=e}saveState(){return structuredClone({totals:this.totals,records:this.records,settled:this.settled,awards:this.awards,collapsed:this.collapsed,paid:this.paid,sequence:this.sequence,replay:this.replay})}restoreState(e){let t=structuredClone(e);this.totals=t.totals,this.records=t.records,this.settled=t.settled,this.awards=t.awards,this.collapsed=t.collapsed,this.paid=t.paid,this.sequence=t.sequence,this.replay=t.replay,this.frontAt=null,this.highTower=null,this.transientAfter=Math.max(0,...t.records.map(e=>e.at))}};function Uc(e,t){if(Object.is(e,t))return!0;if(!e||!t||typeof e!=`object`||typeof t!=`object`)return!1;if(e instanceof Set||t instanceof Set)return e instanceof Set&&t instanceof Set&&e.size===t.size&&[...e].every(e=>t.has(e));if(Array.isArray(e)||Array.isArray(t))return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((e,n)=>Uc(e,t[n]));if(Object.getPrototypeOf(e)!==Object.prototype||Object.getPrototypeOf(t)!==Object.prototype)return!1;let n=e,r=t,i=Object.keys(n);return i.length===Object.keys(r).length&&i.every(e=>Object.prototype.hasOwnProperty.call(r,e)&&Uc(n[e],r[e]))}function Wc(e,t){return Uc(e,t)?e:t}function Gc(e){let t=e.engine,{rapier:n,elapsedSeconds:r,...i}=t.physics??{};return Un({engine:{...t,physics:i},feedback:e.feedback,aim:e.aim})}function Kc(e,t){let n=t.boardHalfWidth-t.coinRadius-t.upperRailHalfThickness*2;return![e.x,e.y,e.z,n].every(Number.isFinite)||n<=0||Math.abs(e.x)>t.boardHalfWidth||e.z<t.upperBackZ||e.z>t.lowerFrontZ?null:Math.max(-1,Math.min(1,e.x/n))}function qc(e,t){let n=t.rearWall;if(!n||![e.x,e.y,e.z].every(Number.isFinite))return!1;let r=1e-6;return Math.abs(e.x)<=t.boardHalfWidth+r&&Math.abs(e.y-n.centerY)<=n.halfHeight+r&&Math.abs(e.z-n.centerZ)<=n.halfDepth+r}function Jc(e,t){let n=null,r=e=>Number.isFinite(e.clientX)&&Number.isFinite(e.clientY),i=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,a=()=>{let e=n!==null;n=null,t.onPreview(null),e&&t.onBusyChange(!1)},o=r=>{if(!n||(Math.hypot(r.clientX-n.x,r.clientY-n.y)>e&&(n.dragged=!0),!n.dragged))return;let i=r.clientX-n.lastX,a=r.clientY-n.lastY;n.lastX=r.clientX,n.lastY=r.clientY,t.onPreview(null),(i||a)&&t.onOrbit(i,a)};return{pointerId:()=>n?.id??null,dragging:()=>n?.dragged??!1,cancel:a,begin(e,o){return n?(n.id!==e.pointerId&&a(),!1):t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==1||!r(e)||!i(o)?!1:(n={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,dragged:!1},t.onBusyChange(!0),t.onPreview(o),!0)},move(e,s){if(t.isDisabled()){a();return}if(!n){e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0&&t.onPreview(i(s)?s:null);return}if(n.id===e.pointerId){if(!e.isPrimary||e.buttons!==1||!r(e)){a();return}o(e),n.dragged||t.onPreview(i(s)?s:null)}},end(e,s){if(!n||n.id!==e.pointerId)return;if(t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==0||!r(e)){a();return}o(e);let c=!n.dragged&&i(s);a(),c&&s!==null&&!t.isDisabled()&&t.onTap(s)},leave(){n||t.onPreview(null)}}}function Yc(e){let t=null,n=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,r=()=>{t!==null&&(t=null,e.onStop())};return{pointerId:()=>t,cancel:r,begin(i,a){return t===null?e.isDisabled()||!i.isPrimary||i.button!==0||i.buttons!==1||!n(a)?!1:(t=i.pointerId,e.onStart(a),!0):(t!==i.pointerId&&r(),!1)},move(i,a){if(t===i.pointerId){if(e.isDisabled()||i.buttons!==1||!n(a)){r();return}e.onAim(a)}},end(e){t===e.pointerId&&r()}}}function Xc(e,t,n,r){if(![e.yaw,e.pitch,t,n,r].every(Number.isFinite)||r<=0)return{yaw:e.yaw,pitch:e.pitch};let i=s.cameraOrbit,a=Math.max(r,i.minDragExtent),o=(e,t,n)=>Math.max(t,Math.min(n,e));return{yaw:o(e.yaw-t/a*i.yawSensitivity,-i.yawLimit,i.yawLimit),pitch:Math.tan(o(Math.atan(e.pitch)-n/a*i.elevationSensitivity,i.minElevation,i.maxElevation))}}var Zc=new W;function Qc(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Zc.copy(t),Zc[r]=0,Zc.normalize();let l=.5*o/(o+s),u=1-Zc.angleTo(e)/c;return Math.sign(Zc[n])===1?u*l:s/(o+s)+l+l*(1-u)}var $c=class e extends Ge{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new W,c=new W,l=new W(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new W,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Qc(m,c,`z`,`y`,i,n),f[a+1]=1-Qc(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Qc(m,c,`z`,`y`,i,n),f[a+1]=1-Qc(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Qc(m,c,`x`,`z`,i,e),f[a+1]=Qc(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Qc(m,c,`x`,`z`,i,e),f[a+1]=1-Qc(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Qc(m,c,`x`,`y`,i,e),f[a+1]=1-Qc(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Qc(m,c,`x`,`y`,i,e),f[a+1]=1-Qc(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function el(e,t,n){let r=s.premium,i=r.geometry,a=s.treasuryScene,o=a.geometry,c=[],l=[],u=[],p=!1,m,g,_=[],v,y=()=>{p||(p=!0,c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),u.forEach(e=>e.dispose()),_.forEach(e=>e.dispose()),v?.dispose(),m?.dispose(),e.environment=null,g?.dispose())};try{m=new Pi(t);let S=new h;S.background=new Zt(r.studio.background),v=new Dt({color:new Zt(r.colors.light).multiplyScalar(r.studio.panelIntensity),side:2});for(let e of r.studio.panels){let t=new Ge(e.size[0],e.size[1],e.size[2]);_.push(t);let n=new U(t,v);n.position.fromArray(e.position),n.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),S.add(n)}g=m.fromScene(S,r.lighting.environmentBlur),e.environment=g.texture,e.environmentIntensity=r.materials.envIntensity,_.splice(0).forEach(e=>e.dispose()),v.dispose(),v=void 0,m.dispose(),m=void 0;let C=e=>{let n=new ae().load(`./assets/${e}`,e=>{p&&e.dispose()});return n.colorSpace=Yt,n.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),u.push(n),n},w=document.createElement(`canvas`);w.width=w.height=r.texture.brushSize;let T=w.getContext(`2d`);if(T){T.fillStyle=r.colors.brushBase,T.fillRect(0,0,w.width,w.height),T.strokeStyle=r.colors.brushLine,T.globalAlpha=r.texture.brushOpacity;for(let e=0;e<r.texture.brushLines;e++){let t=e*73%r.texture.brushLines/r.texture.brushLines*w.height;T.beginPath(),T.moveTo(0,t),T.lineTo(w.width,t),T.stroke()}}let D=new it(w);D.colorSpace=Yt,D.wrapS=D.wrapT=bt,D.repeat.set(r.texture.brushRepeat,r.texture.brushRepeat),u.push(D);let O=(e,t,n,i=r.materials.metalness)=>{let a=new Je({color:e,roughness:t,metalness:i,...n?{map:n}:{}});return l.push(a),a},k=O(r.colors.champagne,r.materials.goldRoughness),A=O(r.colors.edge,r.materials.goldRoughness),j=O(r.colors.steel,r.materials.steelRoughness,D),N=O(r.colors.gunmetal,r.materials.darkRoughness,void 0,r.materials.darkMetalness),ee=O(r.colors.black,r.materials.darkRoughness,void 0,r.materials.darkMetalness),te=new Ht({map:C(`premium-enamel-v1.webp`),color:r.colors.white,metalness:r.materials.enamelMetalness,roughness:r.materials.enamelRoughness,clearcoat:r.materials.clearcoat}),P=new Ht({color:r.colors.glass,transparent:!0,opacity:r.materials.glassOpacity,roughness:r.materials.glassRoughness,metalness:0,depthWrite:!1,side:2});l.push(te,P);let ne=ks(`steel`);u.push(...Object.values(ne)),j.bumpMap=ne.height,j.bumpScale=a.surface.steelBump,j.roughnessMap=ne.roughness,j.roughness=a.materials.etchedRoughness,j.metalness=a.materials.etchedMetalness,j.envMap=g.texture,j.envMapIntensity=a.materials.etchedEnvironmentIntensity;let F=new ae().load(`./assets/${a.assets.etchedSteel}`,e=>{if(p){e.dispose();return}j.map=e,j.needsUpdate=!0},void 0,()=>{});F.colorSpace=Yt,F.wrapS=F.wrapT=bt,F.repeat.set(o.steelRepeat,o.steelRepeat),F.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),u.push(F);let re=O(a.colors.ivory,a.materials.ivoryRoughness,void 0,a.materials.shieldMetalness),oe=O(a.colors.cross,a.materials.crossRoughness,void 0,a.materials.shieldMetalness),I=O(a.colors.recess,a.materials.recessRoughness,void 0,r.materials.darkMetalness),ce=O(a.colors.warmTrim,a.materials.trimRoughness),L=(t,n,r,a,o,s,l,u=!0)=>{let d=u?new $c(t,n,r,i.bevelSegments,Math.min(i.bevel,t/2,n/2,r/2)):new Ge(t,n,r);c.push(d);let f=new U(d,l);return f.position.set(a,o,s),f.castShadow=l!==P,f.receiveShadow=!0,e.add(f),f},R=(t,n,r,a,o,s,l=Math.PI*2)=>{let u=new se(t,n,i.boltSegments,i.archSegments,l);c.push(u);let d=new U(u,s);return d.position.set(r,a,o),e.add(d),d},le=n.boardHalfWidth*2,ue=n.lowerFrontZ-n.upperBackZ,de=(n.lowerFrontZ+n.upperBackZ)/2,z=n.upperBackZ-i.rearOffset,B=[],fe=n.hatches??[];for(let e of rn(n.boardHalfWidth,n.lowerBackZ,n.lowerFrontZ,fe)){let t=L(e.halfWidth*2,n.lowerHalfThickness*2,e.halfDepth*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,j,!1);t.name=`physical-lower-bed`,B.push(t)}let pe=fe.map((e,t)=>{let r=L(e.halfSize*2,n.lowerHalfThickness*2,e.halfSize*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,j,!1);r.name=`physical-hatch-lid-${t}`,B.push(r);for(let t of[-1,1])L(i.stripeThickness,i.stripeThickness,e.halfSize*2,e.x+t*(e.halfSize+i.stripeThickness/2),n.lowerY-i.stripeThickness/2,e.z,ce,!1).name=`hatch-inset-frame`,L(e.halfSize*2,i.stripeThickness,i.stripeThickness,e.x,n.lowerY-i.stripeThickness/2,e.z+t*(e.halfSize+i.stripeThickness/2),ce,!1).name=`hatch-inset-frame`;return r}),me=e=>{e||pe.forEach((e,t)=>{let r=fe[t];e.position.set(r.x,n.lowerY-n.lowerHalfThickness,r.z),e.quaternion.identity()});for(let t of e??[]){let e=pe[t.index];e&&(e.position.set(t.position.x,t.position.y,t.position.z),e.quaternion.set(t.rotation.x,t.rotation.y,t.rotation.z,t.rotation.w))}},he=L(le,n.upperHalfThickness*2,n.upperFrontZ-n.upperBackZ,0,n.upperY-n.upperHalfThickness,(n.upperBackZ+n.upperFrontZ)/2,j,!1);he.name=`physical-upper-deck`,B.push(he);let ge=L(le,n.pusherHalfHeight*2,n.pusherHalfDepth*2,0,n.pusherCenterY??n.upperY+n.pusherHalfHeight,n.upperBackZ,j,!1);if(ge.name=`physical-pusher`,B.push(ge),n.rearWall){let e=L(le,n.rearWall.halfHeight*2,n.rearWall.halfDepth*2,0,n.rearWall.centerY,n.rearWall.centerZ,j,!1);e.name=`physical-rear-wall`,B.push(e)}for(let e of rn(n.boardHalfWidth+o.frameWidth,n.upperBackZ,n.lowerFrontZ+i.trayDepth,fe))L(e.halfWidth*2,i.bodyDepth,e.halfDepth*2,e.x,n.lowerY-i.bodyDepth,e.z,ee,!1).name=`treasury-chassis`;let _e=L(le,i.rim,i.trayDepth,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth/2,j);_e.name=`collection-tray`,L(le+o.frameWidth*2,i.rim*2,i.rim,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth,N);for(let e of[-1,1])L(le+o.frameWidth*2,o.frameTrim,o.frameTrim,0,n.lowerY-i.trayDrop+e*i.rim,n.lowerFrontZ+i.trayDepth+i.rim/2,A);L(le,i.stripeThickness,i.stripeThickness,0,n.lowerY-i.stripeThickness/2,n.lowerFrontZ+i.stripeThickness/2,A,!1),L(le+o.frameWidth*2,o.rearFasciaHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight/2,z,N).name=`treasury-low-rear-fascia`,L(le,o.rearFasciaHeight-o.frameInset*2,o.frameTrim,0,n.lowerY+o.rearFasciaHeight/2,z+o.rearFasciaDepth/2,j),L(le+o.frameWidth*2,o.rearCopingHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight,z,ce);let ye=new d(o.bossRadius,o.bossSegments,o.bossSegments);c.push(ye);let be=(t,n,r)=>{let i=new U(ye,A);return i.position.set(t,n,r),i.scale.z=o.bossHeight/o.bossRadius,e.add(i),i},xe=new ve,Se=o.shieldWidth,Ce=o.shieldHeight;xe.moveTo(-Se/2,Ce/2),xe.lineTo(Se/2,Ce/2),xe.lineTo(Se/2,Ce*o.shieldShoulderY),xe.bezierCurveTo(Se/2,-Ce*o.shieldShoulderControl,Se*o.shieldTipControl,-Ce*o.shieldTipControl,0,-Ce/2),xe.bezierCurveTo(-Se*o.shieldTipControl,-Ce*o.shieldTipControl,-Se/2,-Ce*o.shieldShoulderControl,-Se/2,Ce*o.shieldShoulderY),xe.closePath();let Te=new x(xe,{depth:o.shieldDepth,bevelEnabled:!0,bevelSegments:i.bevelSegments,steps:1,bevelSize:o.shieldBevel,bevelThickness:o.shieldBevel,curveSegments:o.ornamentSegments});c.push(Te);let Ee=new d(1,o.ornamentSegments,o.ornamentSegments);c.push(Ee);for(let t of[-1,1]){let r=o.frameWidth-i.glassOffset,s=t*(n.boardHalfWidth+i.glassOffset+r/2),u=ue+i.trayDepth,d=de+i.trayDepth/2;L(r,o.frameHeight,u,s,n.lowerY-o.frameHeight/2,d,N).name=`treasury-side-chassis-${t}`,L(r-o.frameInset*2,o.frameTrim,u-o.frameInset*2,s,n.lowerY,d,te).name=`treasury-side-enamel-${t}`;for(let e of[-1,1])L(o.frameTrim,o.frameTrim,u,s+e*(r-o.frameTrim)/2,n.lowerY+o.frameTrim/2,d,ce).name=`treasury-side-trim-${t}-${e}`;let f=t*(n.boardHalfWidth+o.frameWidth-o.columnWidth/2),p=n.upperBackZ+ue*o.columnForwardFraction,m=p+o.columnDepth/2,h=a.sideGutter.columnClearance,g=o.columnHeight-h;L(r-o.frameTrim*2,h,o.columnDepth,s,n.lowerY+h/2,p,N).name=`treasury-column-pedestal-${t}`,L(o.columnWidth,g,o.columnDepth,f,n.lowerY+h+g/2,p,N).name=`treasury-column-${t}`,L(o.columnChannelWidth,g-o.columnCap*2,o.columnChannelDepth,f,n.lowerY+h+g/2,m,I);for(let e of[-1,1])L(o.frameTrim,g,o.columnChannelDepth,f+e*(o.columnWidth-o.frameTrim)/2,n.lowerY+h+g/2,m,ce),L(o.columnWidth+o.frameTrim,o.columnCap,o.columnDepth+o.frameTrim,f,n.lowerY+(e<0?h+o.columnCap/2:o.columnHeight),p,k);let _=m+o.columnChannelDepth,v=new U(Te,A);v.position.set(f,n.lowerY+o.shieldY,_),v.name=`treasury-shield-outline-${t}`,v.castShadow=!0,e.add(v);let y=new U(Te,re);y.scale.set(o.shieldFaceScale,o.shieldFaceScale,1),y.position.set(f,n.lowerY+o.shieldY,_+o.shieldFaceLift),y.name=`treasury-shield-ivory-${t}`,y.castShadow=!0,e.add(y);let x=_+o.shieldFaceLift+o.shieldDepth+o.crossRelief/2;L(o.crossStroke,o.crossHeight,o.crossRelief,f,n.lowerY+o.shieldY,x,oe).name=`treasury-cross-upright-${t}`,L(o.crossWidth,o.crossStroke,o.crossRelief,f,n.lowerY+o.shieldY+o.crossArmY,x,oe).name=`treasury-cross-arm-${t}`;for(let t of[-1,1]){for(let r=0;r<o.leafCount;r++){let i=new U(Ee,ce);i.scale.set(o.leafWidth,o.leafLength,o.leafDepth),i.rotation.z=-t*o.laurelAngle,i.position.set(f+t*o.laurelWidth,n.lowerY+o.laurelY+r*o.laurelStep,_),i.name=`treasury-laurel-relief`,e.add(i)}let r=R(o.scrollRadius,o.scrollTube,f+t*o.scrollRadius,n.lowerY+o.columnHeight+o.scrollHeight,m,k,o.scrollAngle);r.rotation.z=t*Math.PI/2,r.name=`treasury-scroll-finial`}be(f,n.lowerY+o.columnHeight,m+o.columnChannelDepth),be(f,n.lowerY+h+o.columnCap/2,m+o.columnChannelDepth);let S=new ve;S.moveTo(n.upperBackZ,0),S.lineTo(n.lowerFrontZ,0),S.lineTo(n.lowerFrontZ,o.guardFrontHeight),S.lineTo(n.upperBackZ+o.guardInset,o.guardHeight+o.guardRearLift),S.lineTo(n.upperBackZ,o.guardHeight),S.closePath();let C=new b(S);c.push(C);let w=new U(C,P);w.rotation.y=-Math.PI/2,w.position.set(t*(n.boardHalfWidth+i.glassOffset),n.lowerY,0),w.name=`treasury-glass-guard-${t}`,e.add(w);let T=new Ot().setFromPoints([new W(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardFrontHeight,n.lowerFrontZ),new W(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight+o.guardRearLift,n.upperBackZ+o.guardInset),new W(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight,n.upperBackZ)]);c.push(T);let E=new V({color:a.colors.edgeLight});l.push(E);let D=new M(T,E);D.name=`treasury-glass-edge`,D.raycast=()=>{},e.add(D),L(n.upperRailHalfThickness*2,n.upperRailHalfHeight*2,n.upperFrontZ-n.upperBackZ,t*(n.boardHalfWidth-n.upperRailHalfThickness),n.upperY+n.upperRailHalfHeight,(n.upperBackZ+n.upperFrontZ)/2,j,!1).name=`physical-upper-rail-${t}`,L(i.glassOffset,o.frameTrim,n.lowerFrontZ-n.lowerBackZ,t*(n.boardHalfWidth+i.glassOffset/2),n.lowerY-a.sideGutter.depth-o.frameTrim/2,(n.lowerBackZ+n.lowerFrontZ)/2,ee,!1).name=`treasury-side-loss-channel-${t}`;for(let e=0;e<o.sideBoltCount;e++){let t=be(s,n.lowerY+o.frameTrim,n.upperBackZ+o.boltInset+e*(u-o.boltInset*2)/(o.sideBoltCount-1));t.rotation.x=-Math.PI/2}}let De=new d(i.boltRadius,i.boltSegments,i.boltSegments);c.push(De);for(let t=0;t<i.boltCount;t++){let r=new U(De,A);r.position.set(-n.boardHalfWidth+le*t/(i.boltCount-1),n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth+i.rim/2),e.add(r)}let Oe=new Gt(n.coinRadius,n.coinRadius,n.coinHalfHeight*2,i.segments,i.coinHeightSegments),ke=Oe.getAttribute(`position`);for(let e=0;e<ke.count;e++)Math.abs(ke.getY(e))>n.coinHalfHeight*i.coinBevelThreshold&&(ke.setX(e,ke.getX(e)*i.coinBevelRadius),ke.setZ(e,ke.getZ(e)*i.coinBevelRadius));Oe.computeVertexNormals(),c.push(Oe);let Ae=ks(`coin`);u.push(...Object.values(Ae));for(let e of Object.values(Ae))e.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy());let je=O(a.surface.coinColor,a.surface.coinRoughness,Ae.albedo);je.bumpMap=Ae.height,je.bumpScale=a.surface.coinBump,je.roughnessMap=Ae.roughness,je.envMap=g.texture,je.envMapIntensity=a.surface.coinEnvironmentIntensity;let Me=C(`coin-edge.svg`);Me.wrapS=bt,Me.repeat.x=r.texture.coinEdgeRepeat;let Ne=O(r.colors.coinSide,r.materials.coinRoughness,Me);Ne.roughness=a.materials.coinSideRoughness;let H=new we(Oe,[Ne,je,je],n.capacity);H.count=0,H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,H.instanceMatrix.setUsage(ie),e.add(H),B.push(H);let Pe=new Dt({color:s.interaction.aimColor,transparent:!0,opacity:r.effects.aimOpacity,depthWrite:!1});l.push(Pe);let Fe=new f;Fe.name=`rear-drop-indicator`,e.add(Fe);let Ie=n.coinRadius*r.effects.aimRadiusScale,Le=R(Ie,r.effects.aimTube,0,0,0,Pe);Le.rotation.x=-Math.PI/2,Fe.add(Le);for(let e of[!1,!0]){let t=L(e?Ie*2:r.effects.aimTube,r.effects.aimTube,e?r.effects.aimTube:Ie*2,0,0,0,Pe,!1);t.castShadow=!1,t.receiveShadow=!1,Fe.add(t)}e.add(new E(r.colors.light,r.colors.gunmetal,r.lighting.ambient));let Re=new ut(r.colors.light,r.lighting.key);Re.position.fromArray(r.lighting.keyPosition),Re.shadow.mapSize.set(s.scene.shadowMapSize,s.scene.shadowMapSize),Re.shadow.camera.left=Re.shadow.camera.bottom=-r.effects.shadowExtent,Re.shadow.camera.right=Re.shadow.camera.top=r.effects.shadowExtent,Re.shadow.bias=r.effects.shadowBias,Re.shadow.normalBias=r.effects.shadowNormalBias,e.add(Re);let ze=new ut(r.colors.fill,r.lighting.fill);ze.position.fromArray(r.lighting.fillPosition),e.add(ze);let Be=new ut(r.colors.white,r.lighting.rim);return Be.position.fromArray(r.lighting.rimPosition),e.add(Be),{coins:H,pusher:ge,aim:Fe,key:Re,hitTargets:B,updateHatches:me,dispose:y}}catch(e){throw y(),e}}function tl(e,t){return Math.abs(e.yaw-t.yaw)>1e-6||Math.abs(e.pitch-t.pitch)>1e-6}function nl(e,t){let n=s.cameraViews;return e===`overhead`?{yaw:0,pitch:n.overheadPitch}:e===`left`||e===`right`?{yaw:e===`left`?-n.sideYaw:n.sideYaw,pitch:n.sidePitch}:{yaw:0,pitch:t<s.premium.camera.portraitAspect?s.premium.camera.portraitPitch:s.premium.camera.pitch}}function rl(e,t=!1){let n=s.premium,r=s.treasuryScene.geometry,i=e.boardHalfWidth+(t?n.camera.portraitFrameSideExtra:n.camera.frameSideExtra),a=[-i,i].flatMap(t=>[new W(t,e.lowerY,e.upperBackZ),new W(t,e.lowerY,e.lowerFrontZ),new W(t,e.lowerY-n.geometry.trayDrop,e.lowerFrontZ+n.geometry.trayDepth+n.geometry.rim)]);if(t)for(let t of[-i,i])a.push(new W(t,e.lowerY-n.geometry.bodyDepth-n.geometry.bodyDepth/2,e.lowerFrontZ+n.geometry.trayDepth));let o=e.upperBackZ+(e.lowerFrontZ-e.upperBackZ)*r.columnForwardFraction,c=e.lowerY+r.columnHeight+r.scrollHeight+r.scrollRadius+r.scrollTube;for(let e of[-i,i])a.push(new W(e,c,o+r.columnDepth/2));for(let t of[-e.boardHalfWidth,e.boardHalfWidth]){for(let n of[e.upperBackZ,e.upperFrontZ])a.push(new W(t,e.upperY+e.upperRailHalfHeight*2,n));e.rearWall&&a.push(new W(t,e.rearWall.centerY+e.rearWall.halfHeight,e.rearWall.centerZ))}if(e.towerEnvelopes?.length)for(let t of e.towerEnvelopes)for(let e of[t.x-t.radius,t.x+t.radius])for(let n of[t.z-t.radius,t.z+t.radius])a.push(new W(e,t.topY,n));else for(let t of[-e.boardHalfWidth,e.boardHalfWidth])for(let r of[e.lowerBackZ,e.lowerFrontZ])a.push(new W(t,e.towerTopY??e.lowerY+n.camera.frameTop,r));return a}function il(e,t,n,r=nl(`front`,n)){let i=s.premium;e.aspect=n;let{pitch:a,yaw:o}=r,c=new W(Math.sin(o),a,Math.cos(o)).normalize(),l=new W(Math.cos(o),0,-Math.sin(o)),u=new W().crossVectors(c,l).normalize(),d=(t.lowerFrontZ+t.upperBackZ)/2,f=new W(0,t.lowerY+i.camera.targetY,d+i.camera.targetZBias),p=rl(t,n<i.camera.portraitAspect),m=p.map(e=>e.clone().sub(f).dot(u));f.addScaledVector(u,(Math.min(...m)+Math.max(...m))/2);let h=p.map(e=>e.clone().sub(f).dot(l));f.addScaledVector(l,(Math.min(...h)+Math.max(...h))/2);let g=Math.tan(wt.degToRad(e.fov/2)),_=g*n,v=e.near;for(let t of p){let n=t.clone().sub(f),r=n.dot(c);v=Math.max(v,Math.abs(n.dot(l))/_+r,Math.abs(n.dot(u))/g+r,e.near+r)}let y=v*i.camera.margin;if(n<i.camera.portraitAspect){let e=s.treasuryScene.camera,t=y*g*e.portraitCenterOffset;for(let n of p){let r=n.clone().sub(f),i=y-r.dot(c);t=Math.min(t,r.dot(u)+(1-e.portraitBottomPadding)*i*g)}f.addScaledVector(u,Math.max(0,t))}e.position.copy(f).addScaledVector(c,y),e.lookAt(f),e.updateProjectionMatrix(),e.updateMatrixWorld()}function al(e){let t=s.interaction,n=s.premium,r=e.boardHalfWidth-e.coinRadius-e.upperRailHalfThickness*2,i=e.coinRadius*n.effects.aimRadiusScale,a=(e.pusherCenterY??e.upperY+e.pusherHalfHeight)+e.pusherHalfHeight,o=Math.max(e.upperY,a)+n.effects.aimSurfaceOffset,c=new f;c.name=`rear-entry-guides`,c.position.set(0,o,e.dropZ);let l=[],u=[],d=(e,t)=>{let n=new Dt({color:e,transparent:!0,opacity:t,depthWrite:!1});return u.push(n),n},p=(e,t,n)=>{let r=new se(e,t,s.scene.rivetSegments,s.scene.ringSegments);l.push(r);let i=new U(r,n);return i.rotation.x=-Math.PI/2,i},m=p(i*t.aimOutlineScale,t.aimOutlineTube,d(t.aimOutlineColor,n.effects.aimOpacity));m.name=`selected-aim-outline`,c.add(m);let h=p(i,n.effects.aimTube,d(t.aimColor,t.previewOpacity));h.name=`aim-preview-ring`,h.visible=!1,c.add(h);let g=new Ot().setFromPoints([new W(-r,0,0),new W(r,0,0),new W(-r,0,-i),new W(-r,0,i),new W(r,0,-i),new W(r,0,i)]);l.push(g);let _=new V({color:t.aimColor,transparent:!0,opacity:t.previewOpacity,depthWrite:!1});u.push(_);let v=new De(g,_);v.name=`rear-entry-range`,c.add(v);let y=d(t.acceptedColor,n.effects.aimOpacity),b=p(i*t.aimOutlineScale,t.aimOutlineTube,y);b.name=`accepted-drop-ring`,b.visible=!1,c.add(b);let x=new Ot().setFromPoints([new W(-i,0,-i),new W(i,0,i),new W(-i,0,i),new W(i,0,-i)]);l.push(x);let S=new V({color:t.blockedColor,transparent:!0,opacity:n.effects.aimOpacity,depthWrite:!1});u.push(S);let C=new De(x,S);C.name=`blocked-drop-cross`,C.visible=!1,c.add(C);let w,T=-1/0,E=!1,D=Ir();return{root:c,surfaceY:o,update(e,t,i,a,o,s){if(E)return;c.visible=!a,m.position.x=e*r,h.visible=!a&&t!==null,t!==null&&(h.position.x=t*r),i?.sequence!==w&&(w=i?.sequence,T=o),a&&(T=-1/0);let l=o-T,u=D.sample(l,s),d=!a&&u.active;b.visible=d&&i?.kind===`accepted`,C.visible=d&&i?.kind===`blocked`,i&&i.kind!==`idle`&&(b.position.x=C.position.x=i.aim*r),b.scale.setScalar(u.scale),y.opacity=n.effects.aimOpacity*u.opacity},dispose(){E||(E=!0,D.dispose(),c.removeFromParent(),l.forEach(e=>e.dispose()),u.forEach(e=>e.dispose()))}}}function ol(e){let t={...e},n={...e},r,i=0,a=!1,o=()=>{r?.kill(),r=void 0,Object.assign(t,n)};return{start(e,c,l){if(!a){if(r?.kill(),n={...e},i=c,l){o();return}r=je.timeline({paused:!0}).to(t,{...n,duration:s.cameraViews.transitionSeconds,ease:s.motion.ease})}},sample(e,n){if(r){let t=Math.max(0,(e-i)/1e3);n||t>=s.cameraViews.transitionSeconds?o():r.seek(t,!0)}return t},moving:()=>!!r,finish:o,dispose(){a||(a=!0,o())}}}function sl(e,t,n,r,i){if(![e,n,r,i].every(Number.isFinite)||n<=0)return null;t.updateMatrixWorld();let a=e=>new N(e,r,i,1).applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix),o=a(-n),s=a(n);if(o.w<=0||s.w<=0)return null;let c=o.x/o.w,l=s.x/s.w;if(![c,l].every(Number.isFinite)||l<=c)return null;let u=wt.clamp(e,c,l),d=u*(s.w-o.w)-(s.x-o.x);if(!Number.isFinite(d)||Math.abs(d)<2**-52)return null;let f=(o.x-u*o.w)/d;return Number.isFinite(f)?wt.clamp(f*2-1,-1,1):null}function cl(){let e={approach:0,exit:0},t=je.timeline({paused:!0,data:`dragon-board-bonus`});return t.to(e,{approach:1,duration:pn.impactSeconds,ease:`power2.in`},0).to(e,{exit:1,duration:pn.durationSeconds-pn.impactSeconds,ease:`power1.out`},pn.impactSeconds),{sample(n,r=!1){let i=Math.max(0,Math.min(pn.durationSeconds,n.elapsed));t.totalTime(i,!0);let a=n.direction===`left`?1:n.direction===`right`?-1:0,o=new W(a,0,1).normalize(),s=r?-pn.reducedDistance:-pn.approachDistance*(1-e.approach)+pn.exitDistance*e.exit;return{x:n.target.x+o.x*s,y:n.target.y+(r?pn.reducedHeight:pn.approachHeight*(1-e.approach)+pn.exitHeight*e.exit),z:n.target.z+o.z*s,yaw:Math.atan2(-o.x,-o.z),bank:r?0:-a*pn.bank*(1-e.exit),scale:pn.modelScale,skeletonTime:r?0:i,opacity:r?1:Math.min(1,i/pn.fadeInSeconds,(pn.durationSeconds-i)/pn.fadeOutSeconds)}},dispose(){t.kill()}}}function ll(){let e=kc(),t=cl(),n=new f;n.name=`live-board-dragon-bonus`,n.add(e.root),n.visible=!1;let r=new tt(pn.impactRadius*.8,pn.impactRadius,40),i=new Dt({color:pn.impactColor,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1}),a=new U(r,i);n.add(a);let o=!1,s=!1,c=e.ready.then(()=>{o=!0});return c.catch(()=>{}),{root:n,ready:c,draw(r,c=!1){if(s||(n.visible=o&&!!r,!r||!o))return;e.drawPose(t.sample(r,c));let l=r.elapsed-pn.impactSeconds,u=l/pn.impactLife;a.visible=r.phase===`hit`&&l>=0&&u<1,a.position.copy(r.target),a.scale.setScalar(c?1:1+pn.impactExpansion*Math.max(0,u)),a.rotation.y=r.direction===`left`?Math.PI/4:r.direction===`right`?-Math.PI/4:0,i.opacity=pn.impactOpacity*(1-Math.max(0,u))},dispose(){s||(s=!0,t.dispose(),e.dispose(),r.dispose(),i.dispose(),n.clear())}}}var ul=s.cabinetHousing,Q=ul.geometry,dl=s.premium.colors;function fl(e){let t=new f;t.name=`complete-cabinet`;let n=new f;n.name=`cabinet-exterior-only`,t.add(n);let r=new Set,i=new Set,a=new Set,o=new Set,c=e=>{o.has(e)||(o.add(e),e.dispose())},l=[],u=!1,p=e=>(r.add(e),e),m=e=>(i.add(e),e),h=m(new Je({color:dl.gunmetal,metalness:ul.materials.bodyMetalness,roughness:ul.materials.bodyRoughness})),g=m(new Je({color:dl.black,metalness:ul.materials.bodyMetalness,roughness:ul.materials.bodyRoughness})),_=m(new Je({color:dl.champagne,metalness:s.premium.materials.metalness,roughness:ul.materials.brassRoughness})),v=m(new Je({color:dl.edge,metalness:s.premium.materials.metalness,roughness:ul.materials.brassRoughness})),y=m(new Ht({color:dl.enamel,metalness:ul.materials.enamelMetalness,roughness:ul.materials.enamelRoughness,clearcoat:s.premium.materials.clearcoat})),b=m(new Je({color:dl.light,metalness:ul.materials.enamelMetalness,roughness:ul.materials.enamelRoughness})),S=m(new Je({color:ul.materials.bannerColor,roughness:ul.materials.bannerRoughness,metalness:ul.materials.bannerMetalness,emissive:ul.materials.bannerColor,emissiveIntensity:ul.materials.bannerEmissiveIntensity})),C=m(new Je({color:dl.light,emissive:dl.edge,emissiveIntensity:ul.materials.lightIntensity,toneMapped:!1})),w=m(new Ht({color:dl.glass,transparent:!0,opacity:ul.materials.glassOpacity,roughness:ul.materials.glassRoughness,side:2,depthWrite:!1})),T=p(new Ge(1,1,1)),E=p(new d(Q.rivetRadius,Q.curveSegments/2,Q.curveSegments/2)),D=(e,n,r,i=t,a=!0)=>{let o=new U(n,r);return o.name=e,o.castShadow=r!==w&&r!==C,o.receiveShadow=!0,i.add(o),a?l.push(o):o.raycast=()=>{},o},O=(e,n,r,i,a,o,s,c,l=t)=>{let u=D(e,T,c,l,c!==w);return u.scale.set(n,r,i),u.position.set(a,o,s),u},k=(e,t=Q.shieldDepth)=>p(new x(e,{depth:t,bevelEnabled:!0,bevelSize:Q.bevel,bevelThickness:Q.bevel,bevelSegments:Q.bevelSegments,curveSegments:Q.curveSegments,steps:1})),A=(e,t,n)=>{let r=new ve;return r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(e/2,t),r.bezierCurveTo(e/3,t+n*.6,e/6,t+n,0,t+n),r.bezierCurveTo(-e/6,t+n,-e/3,t+n*.6,-e/2,t),r.closePath(),r},j=new ve;j.moveTo(-.5,.45),j.lineTo(0,.58),j.lineTo(.5,.45),j.quadraticCurveTo(.5,-.25,0,-.58),j.quadraticCurveTo(-.5,-.25,-.5,.45);let M=k(j),N=(e,n,r,i,a,o=t)=>{let s=D(`${e}-rim`,M,_,o);s.position.set(n,r,i),s.scale.set(a,a,1);let c=D(`${e}-ivory`,M,b,o);c.position.set(n,r,i+Q.shieldDepth),c.scale.set(a*.86,a*.86,1),O(`${e}-cross-vertical`,a*.15,a*.72,Q.shieldDepth,n,r,i+Q.shieldDepth*3,y,o),O(`${e}-cross-horizontal`,a*.57,a*.15,Q.shieldDepth,n,r+a*.1,i+Q.shieldDepth*3,y,o)},ee=e.boardHalfWidth+Q.sideClearance,te=e.upperBackZ-Q.backSetback,P=e.lowerFrontZ+Q.frontExtension,ne=P-te,F=Q.baseTopY-Q.floorY,re=(Q.baseTopY+Q.floorY)/2;O(`cabinet-plinth`,ee*2,F,ne,0,re,(P+te)/2,h),O(`cabinet-base-enamel`,ee*2-Q.postWidth*2,F-Q.footHeight*2,Q.panelThickness,0,re,P+Q.panelThickness/2,y);for(let e of[Q.baseTopY,Q.floorY+Q.footHeight])O(`cabinet-plinth-gold-band`,ee*2+Q.trim*2,Q.trim,ne+Q.trim*2,0,e,(te+P)/2,_);for(let e of[-1,1]){for(let t of[te+Q.postDepth,P-Q.postDepth])O(`cabinet-leveling-foot`,Q.postWidth*2,Q.footHeight,Q.postDepth*2,e*(ee-Q.postWidth),Q.floorY-Q.footHeight/2,t,g);O(`cabinet-base-corner`,Q.postWidth,F,Q.postDepth,e*(ee-Q.postWidth/2),re,P,_),D(`cabinet-arched-service-inset`,k(A(Q.bannerWidth*1.5,F*.55,Q.archRise/2)),g).position.set(e*ee*.65,Q.floorY+Q.footHeight*2,P+Q.panelThickness);for(let t=0;t<Q.ventCount;t++)O(`cabinet-service-vent`,Q.ventWidth,Q.trim/3,Q.trim,e*ee*.65,Q.floorY+Q.footHeight*3+t*Q.ventSpacing,P+Q.panelThickness*2,_);for(let t of[Q.floorY+Q.footHeight*2,Q.baseTopY-Q.footHeight])D(`cabinet-service-rivet`,E,v).position.set(e*ee*.9,t,P+Q.postDepth/2)}let ie=D(`cabinet-front-medallion`,p(new Gt(Q.medallionRadius,Q.medallionRadius,Q.panelThickness,Q.curveSegments*2)),_);ie.rotation.x=Math.PI/2,ie.position.set(0,re,P+Q.panelThickness),N(`cabinet-front-shield`,0,re,P+Q.panelThickness*2,Q.medallionRadius*1.4),O(`cabinet-control-shelf`,ee*2+Q.postWidth,Q.ledgeHeight,Q.ledgeDepth,0,Q.baseTopY+Q.ledgeHeight/2,P+Q.ledgeDepth/2,g,n),O(`cabinet-control-shelf-trim`,ee*2+Q.postWidth,Q.trim,Q.ledgeDepth,0,Q.baseTopY+Q.ledgeHeight,P+Q.ledgeDepth/2,_,n);for(let t of[-1,1]){for(let e of[te,P])O(`cabinet-glass-post`,Q.postWidth,Q.chamberTopY-Q.baseTopY,Q.postDepth,t*ee,(Q.chamberTopY+Q.baseTopY)/2,e,h),O(`cabinet-post-inlay`,Q.trim*2,Q.chamberTopY-Q.baseTopY,Q.trim,t*ee,(Q.chamberTopY+Q.baseTopY)/2,e+Q.postDepth/2,_),O(`cabinet-post-light`,Q.lightWidth,Q.chamberTopY,Q.trim/2,t*(ee-Q.postWidth/2),Q.chamberTopY/2,e+Q.postDepth/2,C);O(`cabinet-side-glazing`,Q.trim/3,Q.chamberTopY-e.lowerY,ne,t*ee,(Q.chamberTopY+e.lowerY)/2,(te+P)/2,w),O(`cabinet-side-canopy-rail`,Q.postWidth,Q.trim*3,ne,t*ee,Q.chamberTopY,(te+P)/2,_,n)}O(`cabinet-front-glazing`,ee*2,Q.chamberTopY,Q.trim/3,0,Q.chamberTopY/2,P,w,n),O(`cabinet-canopy`,ee*2+Q.postWidth,Q.panelThickness,ne+Q.postDepth,0,Q.chamberTopY,(te+P)/2,g,n),O(`cabinet-rear-panel`,ee*2,Q.chamberTopY-e.lowerY,Q.panelThickness,0,(Q.chamberTopY+e.lowerY)/2,te,y),D(`cabinet-rear-seal`,p(new se(Q.rearSealRadius,Q.trim,Q.curveSegments/2,Q.curveSegments*3)),_).position.set(0,Q.rearSealY,te+Q.panelThickness),N(`cabinet-rear-shield`,0,Q.rearSealY,te+Q.panelThickness,Q.rearSealRadius*1.25);let oe=new ve;oe.moveTo(-Q.bannerWidth/2,Q.bannerHeight/2),oe.lineTo(Q.bannerWidth/2,Q.bannerHeight/2),oe.lineTo(Q.bannerWidth/2,-Q.bannerHeight/2+Q.bannerHeight*Q.bannerPointRatio),oe.lineTo(0,-Q.bannerHeight/2),oe.lineTo(-Q.bannerWidth/2,-Q.bannerHeight/2+Q.bannerHeight*Q.bannerPointRatio),oe.closePath();let I=k(oe,Q.trim/2);for(let e of[-1,1]){D(`cabinet-banner-border`,I,_).position.set(e*Q.bannerOffset,Q.bannerCenterY,te+Q.panelThickness);let t=D(`cabinet-rear-banner`,I,S);t.scale.set(Q.bannerFaceScale,Q.bannerFaceScale,1),t.position.set(e*Q.bannerOffset,Q.bannerCenterY,te+Q.panelThickness+Q.trim),N(`cabinet-banner-shield`,e*Q.bannerOffset,Q.bannerCenterY,te+Q.panelThickness*2,Q.bannerWidth*Q.bannerShieldScale)}D(`cabinet-arched-marquee`,k(A(ee*2+Q.postWidth,Q.marqueeHeight,Q.archRise),Q.marqueeDepth),_,n).position.set(0,Q.chamberTopY,P-Q.marqueeDepth),D(`cabinet-marquee-enamel`,k(A(ee*2-Q.trim*2,Q.marqueeHeight-Q.trim*2,Q.archRise-Q.trim),Q.trim),y,n).position.set(0,Q.chamberTopY+Q.trim,P+Q.trim),N(`cabinet-crown`,0,Q.chamberTopY+Q.marqueeHeight+Q.archRise,P+Q.trim,Q.medallionRadius,n);let ce=document.createElement(`canvas`);ce.width=Q.labelWidth,ce.height=Q.labelHeight;let L=ce.getContext(`2d`);if(L){L.textAlign=`center`,L.textBaseline=`middle`,L.fillStyle=dl.edge,L.font=`700 ${ul.label.titleSize}px "Noto Serif TC", "Microsoft JhengHei", serif`,L.fillText(`聖 城 幣 塔`,ce.width/2,ce.height*ul.label.titleY),L.font=`${ul.label.subtitleSize}px Georgia, serif`,L.fillText(`C R U S A D E R   C O I N   P U S H E R`,ce.width/2,ce.height*ul.label.subtitleY);let e=new it(ce);e.colorSpace=Yt,a.add(e);let t=m(new Je({map:e,transparent:!0,depthWrite:!1,emissive:dl.edge,emissiveMap:e,emissiveIntensity:ul.materials.labelIntensity,roughness:ul.materials.brassRoughness}));D(`cabinet-marquee-lettering`,p(new Xt(ee*1.5,Q.marqueeHeight)),t,n,!1).position.set(0,Q.chamberTopY+Q.marqueeHeight/2+Q.trim,P+Q.trim*3)}let R=new ae,le=(e,t,n,r)=>{let i=t.color.clone();try{let o=R.load(`/crusader-coin-pusher-demo/${e.replace(/^\.\//,``)}`,e=>{if(u){c(e);return}t.color.set(dl.white),t.needsUpdate=!0},void 0,()=>{u||(t.map=null,t.color.copy(i),t.needsUpdate=!0)});a.add(o),o.colorSpace=Yt,o.wrapS=o.wrapT=bt,o.repeat.set(n,r),t.map=o,t.needsUpdate=!0}catch{}};le(`./assets/premium-enamel-v1.webp`,y,2,2),le(`./assets/treasury-etched-steel-v1.webp`,h,2,1),t.updateMatrixWorld(!0);let ue=new zt().setFromObject(t),de=[ue.min.x,ue.max.x].flatMap(e=>[ue.min.y,ue.max.y].flatMap(t=>[ue.min.z,ue.max.z].map(n=>new W(e,t,n)))),z=e=>{n.visible=e};return z(!1),{root:t,fullBounds:de,setOverview:z,getOccluders:()=>l.filter(e=>e.parent!==n||n.visible),dispose(){u||(u=!0,t.removeFromParent(),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),a.forEach(c))}}}function pl(e,t,n){if(n<t)return;let r=t*e.itemSize,i=(n+1)*e.itemSize;for(let t of e.updateRanges)r=Math.min(r,t.start),i=Math.max(i,t.start+t.count);e.clearUpdateRanges(),e.addUpdateRange(r,i-r),e.needsUpdate=!0}function ml(e,t,n){let r=Math.min(...e.map(e=>e.instanceMatrix.count)),i=new Float64Array(r),a=new Float64Array(r*7),o=new lt,s=new W,c=new ye,l=new W(1,1,1),u=new Zt,d=0;for(let t of e)t.instanceMatrix.setUsage(ie);return{update(f){let p=0,m=r,h=-1,g=r,_=-1;for(let v of f){if(p>=r)break;if(!t(v))continue;let f=p++,y=f*7,b=v.position,x=v.rotation,S=f>=d||i[f]!==v.id;if(S||a[y]!==b.x||a[y+1]!==b.y||a[y+2]!==b.z||a[y+3]!==x.x||a[y+4]!==x.y||a[y+5]!==x.z||a[y+6]!==x.w){s.set(b.x,b.y,b.z),c.set(x.x,x.y,x.z,x.w),o.compose(s,c,l);for(let t of e)t.setMatrixAt(f,o);a[y]=b.x,a[y+1]=b.y,a[y+2]=b.z,a[y+3]=x.x,a[y+4]=x.y,a[y+5]=x.z,a[y+6]=x.w,m=Math.min(m,f),h=f}if(S&&n){let t=n(v.id);u.setRGB(t,t,t);for(let t of e)t.setColorAt(f,u);g=Math.min(g,f),_=f}i[f]=v.id}for(let t of e)t.count=p,pl(t.instanceMatrix,m,h),t.instanceColor&&n&&pl(t.instanceColor,g,_);d=p}}}function hl(e){let t=s.boardFeedback,n=new f;n.name=`board-result-guides`;let r=new Set,i=e=>(r.add(e),e),a=(e,n=t.idleOpacity)=>i(new Dt({color:e,transparent:!0,opacity:n,depthWrite:!1})),o=a(t.frontColor),c=new U(i(new Ge(e.boardHalfWidth*2,t.lineWidth,t.lineWidth)),o);c.name=`confirmed-front-collection-edge`,c.position.set(0,e.lowerY+t.lineLift,e.lowerFrontZ),n.add(c);let l=Math.max(0,e.lowerFrontZ-e.lowerBackZ-t.sideEndInset*2),u=i(new Ge(t.sideBandWidth,t.lineWidth,l)),d=a(s.premium.colors.gunmetal,t.sideBandOpacity),p=[],m=t.sideBandWidth/2;for(let e=-l/2;e+t.sideStripeSlant+t.sideStripeDepth<=l/2;e+=t.sideStripePitch){let n=[-m,t.lineWidth,e],r=[-m,t.lineWidth,e+t.sideStripeDepth],i=[m,t.lineWidth,e+t.sideStripeSlant+t.sideStripeDepth],a=[m,t.lineWidth,e+t.sideStripeSlant];p.push(...n,...r,...a,...r,...i,...a)}let h=i(new Ot);h.setAttribute(`position`,new k(p,3));let g=a(t.lossColor,t.lossOpacity);for(let r of[-1,1]){let i=new f;i.name=r<0?`side-loss-warning-left`:`side-loss-warning-right`,i.position.set(r*(e.boardHalfWidth-m),e.lowerY+t.lineLift,(e.lowerBackZ+e.lowerFrontZ)/2),i.add(new U(u,d),new U(h,g)),n.add(i)}let _=i(new V({color:t.lossColor,transparent:!0,opacity:t.lossOpacity})),v=(e.hatches??[]).map((r,a)=>{let o=r.halfSize,s=[[-o,-o],[o,-o],[o,-o],[o,o],[o,o],[-o,o],[-o,o],[-o,-o],[-o,-o],[o,o],[-o,o],[o,-o]].map(([e,t])=>new W(e,0,t)),c=new De(i(new Ot().setFromPoints(s)),_);return c.name=`opening-hatch-warning-${a}`,c.position.set(r.x,e.lowerY+t.lineLift,r.z),c.visible=!1,n.add(c),c}),y=i(new se(e.coinRadius*t.paidRingScale,t.paidRingTube,s.scene.rivetSegments,s.scene.ringSegments));y.rotateX(-Math.PI/2);let b=new we(y,a(t.paidColor,t.activeOpacity),e.capacity);b.name=`already-settled-dragon-coin-rims`,b.count=0,b.frustumCulled=!1,n.add(b),r.add(b);let x=a(t.frontColor,t.activeOpacity),S=(e.towerEnvelopes??[]).map(r=>{let a=i(new se(r.radius,t.lineWidth/2,s.scene.rivetSegments,s.scene.ringSegments));a.rotateX(-Math.PI/2);let o=new U(a,x);return o.position.set(r.x,e.lowerY+t.lineLift,r.z),o.visible=!1,n.add(o),o}),C={glow:0,scale:1},w=je.timeline({paused:!0,data:`confirmed-board-feedback`}).fromTo(C,{glow:1,scale:t.collapseScale},{glow:0,scale:1,duration:1,ease:`power2.out`}),T,E=ml([b],t=>!!T?.has(t.id)&&t.position.y>=e.lowerY-e.lowerHalfThickness*2),D=!1;return{root:n,update(e,r,i=!1){if(D)return;n.visible=!i;let a=e.boardFeedback,s=e.elapsedSeconds??0,c=a?.frontAt==null?1:Math.max(0,(s-a.frontAt)*1e3/t.frontPulseMs);w.totalTime(Math.min(1,c),!0),o.opacity=a?.frontAt!=null&&r?t.activeOpacity:t.idleOpacity+(t.activeOpacity-t.idleOpacity)*C.glow,v.forEach((t,n)=>{t.visible=!!e.openingHatches?.includes(n)||(e.hatches?.find(e=>e.index===n)?.open??0)>0}),S.forEach((n,i)=>{n.visible=!e.dragonBonus&&!!a?.highTower?.slots.includes(i);let o=a?.highTower?(s-a.highTower.at)*1e3/t.collapseMs:1;w.totalTime(Math.max(0,Math.min(1,o)),!0),n.scale.setScalar(r?1:C.scale)}),T=a?.paidCoinIds,E.update(e.coins)},dispose(){D||(D=!0,w.kill(),n.removeFromParent(),r.forEach(e=>e.dispose()))}}}var gl={keyColor:`#3e98aa`,keyMetal:`#fff0ae`,railColor:`#74e6ff`,railOpacity:.62,keyMetalness:.75,keyRoughness:.28,segments:24,tubeSegments:8,railEmissive:.25,railMetalness:.5,railRoughness:.25,keyBowRadius:.009,keyBowTube:.002,keyBowZ:-.014,keyStemWidth:.004,keyStemLength:.028,keyStemZ:.009,keyToothWidth:.009,keyToothDepth:.004,keyToothZ:.019,keyReliefY:.006,keyReliefHeight:.002,choiceTube:.004,choiceRadius:.142,choiceY:.009,momentSeconds:2,momentIntensity:3,momentDistance:2.2,momentHeight:.6,shadowColor:`#15121b`,shadowOpacity:.35,shadowScale:.42,shadowHeight:.011,shadowStartX:-1.2,shadowEndX:1.2};function _l(e){let t=new f;t.name=`treasury-features`;let n=new Set,r=e=>(n.add(e),e),i=r(new Je({color:gl.keyMetal,metalness:gl.keyMetalness,roughness:gl.keyRoughness})),a=r(new Je({color:gl.keyColor,metalness:gl.keyMetalness,roughness:gl.keyRoughness})),o=r(new Gt(e.coinRadius,e.coinRadius,e.coinHalfHeight*2,gl.segments)),s=r(new se(gl.keyBowRadius,gl.keyBowTube,gl.tubeSegments,gl.segments));s.rotateX(-Math.PI/2),s.translate(0,gl.keyReliefY,gl.keyBowZ);let c=r(new Ge(gl.keyStemWidth,gl.keyReliefHeight,gl.keyStemLength));c.translate(0,gl.keyReliefY,gl.keyStemZ);let l=r(new Ge(gl.keyToothWidth,gl.keyReliefHeight,gl.keyToothDepth));l.translate(gl.keyStemWidth,gl.keyReliefY,gl.keyToothZ);let u=[o,s,c,l].map((n,o)=>{let s=r(new we(n,o?i:a,e.capacity));return s.name=o?`key-relief-${o}`:`physical-key-medallions`,s.count=0,s.frustumCulled=!1,t.add(s),s}),d=r(new Je({color:gl.railColor,emissive:gl.railColor,emissiveIntensity:gl.railEmissive,transparent:!0,opacity:gl.railOpacity,metalness:gl.railMetalness,roughness:gl.railRoughness})),p=r(new Ge(nn.halfWidth*2,nn.halfHeight*2,nn.halfDepth*2)),m=[-1,1].map(e=>{let n=new U(p,d);return n.name=`physical-shield-${e}`,n.position.set(e*nn.x,Mn(0),nn.z),t.add(n),n}),h=r(new se(gl.choiceRadius,gl.choiceTube,gl.tubeSegments,gl.segments));h.rotateX(-Math.PI/2);let g=r(new Dt({color:gl.railColor})),_=(e.hatches??[]).map((e,n)=>{let r=new U(h,g);return r.name=`dragon-target-${n}`,r.position.set(e.x,gl.choiceY,e.z),r.visible=!1,t.add(r),r}),v=new ge(gl.keyMetal,0,gl.momentDistance);v.name=`high-tower-local-light`,t.add(v);let y=new ve;[[0,-.65],[-.1,-.18],[-.3,-.4],[-1,-.3],[-.65,0],[-.4,.1],[-.15,.06],[-.08,.3],[0,.5],[.08,.3],[.15,.06],[.4,.1],[.65,0],[1,-.3],[.3,-.4],[.1,-.18],[0,-.65]].forEach(([e,t],n)=>n?y.lineTo(e,t):y.moveTo(e,t));let x=r(new Dt({color:gl.shadowColor,transparent:!0,opacity:0,depthWrite:!1,side:2})),S=new U(r(new b(y)),x);S.name=`high-tower-dragon-shadow`,S.rotation.x=-Math.PI/2,S.scale.setScalar(gl.shadowScale),t.add(S);let C={light:0,shadow:0,x:gl.shadowStartX},w=je.timeline({paused:!0,data:`high-tower-local-moment`}).fromTo(C,{light:gl.momentIntensity},{light:0,duration:gl.momentSeconds,ease:`power2.out`},0).fromTo(C,{x:gl.shadowStartX},{x:gl.shadowEndX,duration:gl.momentSeconds,ease:`power1.inOut`},0).fromTo(C,{shadow:0},{shadow:gl.shadowOpacity,duration:gl.momentSeconds/3,yoyo:!0,repeat:1,ease:`sine.inOut`},0),T=ml(u,e=>e.kind===`key`),E=!1;return{root:t,update(n,r,i=!1){if(E)return;t.visible=!i,T.update(n.coins);for(let e of m)e.visible=(n.treasury?.shield??0)>0,e.position.y=Mn(n.treasury?.shield??0);_.forEach((e,t)=>{e.visible=!!n.dragonChoice?.targets.some(e=>e.slot===t)});let a=n.boardFeedback?.highTower,o=a?Math.max(0,(n.elapsedSeconds??0)-a.at):gl.momentSeconds;w.totalTime(Math.min(gl.momentSeconds,o),!0);let s=!!a&&!n.dragonBonus&&!n.dragonChoice&&o<gl.momentSeconds&&!r,c=e.hatches?.[a?.slots[0]??0];v.position.set(c?.x??0,gl.momentHeight,c?.z??0),v.intensity=s?C.light:0,S.visible=s,x.opacity=C.shadow,S.position.set(C.x,e.lowerY+gl.shadowHeight,(e.lowerBackZ+e.lowerFrontZ)/2)},dispose(){E||(E=!0,w.kill(),t.removeFromParent(),n.forEach(e=>e.dispose()))}}}function vl(){let e={progress:0},t=je.timeline({paused:!0,data:`dragon-bells`}).to(e,{progress:1,duration:1,ease:`sine.inOut`});return{sample(n,r,i=!1){let a=n.bellSlots[r],o=n.swap;if(!o||r!==o.a&&r!==o.b)return{slot:a,arc:0,spin:0};t.totalTime(o.progress,!0);let s=r===o.a?o.b:o.a,c=e.progress;return{slot:a+(n.bellSlots[s]-a)*c,arc:i?0:Math.sin(c*Math.PI)*(r===o.a?1:-1)*K.arcHeight,spin:i?0:c*K.spinRadians}},dispose(){t.kill()}}}function yl(){let e={scale:1},t=je.timeline({paused:!0,data:`dragon-auto-choice`}).to(e,{scale:K.autoChoice.ringScale,duration:1,ease:`sine.out`});return{sample(n,r){return t.totalTime(n.confirming?n.confirmProgress:0,!0),r&&n.confirming?K.autoChoice.ringScale:e.scale},dispose(){t.kill()}}}function bl(e={}){let t=K.art,n=new h,r=new Wt(-K.layoutWidth/2,K.layoutWidth/2,K.layoutHeight/2,-K.layoutHeight/2,K.camera.near,K.camera.far);r.position.set(0,K.camera.y,K.camera.z),r.lookAt(0,0,0),n.add(r),n.environment=e.environment??null,n.environmentIntensity=t.environmentIntensity,n.add(new E(K.gold,K.shadow,K.ambientIntensity));let i=new ut(K.gold,K.keyIntensity);i.position.fromArray(K.lightPosition),n.add(i);let a=new ut(t.rim,t.fillIntensity);a.position.fromArray(t.fillPosition),n.add(a);let o=vl(),s=yl(),c=new Set,l=new Set,u=new Set,p=new WeakSet,m=e=>{p.has(e)||(p.add(e),e.dispose())},g=e=>{let t=new Je({color:e,metalness:K.metalness,roughness:K.roughness});return l.add(t),t},_=g(K.brass),v=g(K.gold),y=g(K.enamel),b=new Ht({color:t.gem,metalness:t.gemMetalness,roughness:t.gemRoughness,clearcoat:t.gemClearcoat});l.add(b);let x=(e,t,n,r=0)=>{c.add(e);let i=new U(e,t);return i.position.y=r,n.add(i),i},S=(e,t,n)=>{let r=x(new se(t,K.ringTube,K.ringSegments,K.bellSegments),v,e,n);return r.rotation.x=Math.PI/2,r},C=new Dt({color:K.gold,transparent:!0,opacity:K.autoChoice.ringOpacity,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(C);let w=x(new se(t.shadowRadius,K.ringTube,K.ringSegments,K.bellSegments),C,n);w.name=`auto-choice-focus`,w.rotation.x=Math.PI/2,w.renderOrder=100,w.visible=!1;let T=new be(t.gemRadius,1),D=new d(t.beadRadius,K.ringSegments,K.ringSegments),O=e=>{let n=x(new Gt(K.platformRadius,K.platformRadius,t.padDepth,K.bellSegments),y,e,K.padY);for(let n of t.padTrimY)S(e,K.platformRadius,n);S(e,K.platformRadius*t.shadowFalloff,t.padTop);let r=new Dt({color:K.shadow,transparent:!0,opacity:t.shadowOpacity/t.shadowLayers,depthWrite:!1});l.add(r);for(let n=0;n<t.shadowLayers;n++){let i=x(new Pe(t.shadowRadius*(1-n/t.shadowLayers*(1-t.shadowFalloff)),K.bellSegments),r,e,t.shadowY+n*t.shadowLayerY);i.rotation.x=-Math.PI/2}return n},k=K.profile.map(([e,t])=>new P(e*K.bellRadius,t*K.bellHeight)),A=Array.from({length:3},(e,r)=>{let i=new f,a=new f;i.name=`bell-${r}`,i.add(a),n.add(i),x(new te(k,K.bellSegments),_,a).name=`engraved-bell-shell`;for(let{y:e,radiusScale:t}of K.rings)S(a,K.bellRadius*t,e);let o=x(new se(K.handleRadius,K.handleTube,K.handleRadialSegments,K.handleSegments),v,a,K.bellHeight+K.handleRadius);o.rotation.y=0;for(let e=0;e<t.beadCount;e++){let n=x(D,v,a,t.beadY),r=e/t.beadCount*Math.PI*2;n.position.x=Math.sin(r)*t.beadRing,n.position.z=Math.cos(r)*t.beadRing}let s=x(new Gt(t.medallionRadius,t.medallionRadius,t.medallionDepth,K.bellSegments),v,a,t.gemY);s.rotation.x=Math.PI/2,s.position.z=t.gemZ;let c=x(T,b,a,t.gemY);return c.position.z=t.gemZ+t.medallionDepth,{root:i,lid:a,pad:O(i)}}),j=Array.from({length:2},()=>{let e=new f,t=Cc();return e.add(t.root),n.add(e),e.scale.setScalar(K.dragonScale),e.rotation.y=K.dragonYaw,{holder:e,model:t}}),M=new Dt({color:t.fallback,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(M);let N=x(new Xt(1,1),M,r);N.position.z=-t.backdropDepth,N.renderOrder=-100;let ee=ks(`coin`);Object.values(ee).forEach(e=>u.add(e));let ne=g(K.gold);ne.map=ee.albedo,ne.bumpMap=ee.height,ne.bumpScale=t.coinBump;let F=g(t.coinEdge);F.roughness=t.coinEdgeRoughness;let re=new Gt(t.coinRadius,t.coinRadius,1,t.coinSegments);c.add(re);let ie=Array.from({length:3},()=>{let e=new f;return n.add(e),{root:e,pad:O(e),coins:null}}),oe=!1,I=``,ce=null,L=null,R=null,le={pending:e.loadTextures===!1?0:4,failed:0};if(e.loadTextures!==!1){let e=new ae,n=(n,r)=>{let i=e.load(`/crusader-coin-pusher-demo/${n}`,e=>{if(oe){m(e);return}le.pending--,e.colorSpace=Yt,e.anisotropy=t.textureAnisotropy,r(e)},void 0,()=>{oe||(le.pending--,le.failed++)});u.add(i)};n(t.background,e=>{ce=e,M.map=e,M.color.set(t.white),M.needsUpdate=!0}),n(t.metal,e=>{e.wrapS=e.wrapT=bt,e.repeat.fromArray(t.metalRepeat),_.map=e,_.color.set(t.white),_.needsUpdate=!0});let r=()=>j.forEach(e=>e.model.setTextures(L,R));n(t.scales,e=>{L=e,r()}),n(t.membrane,e=>{R=e,r()})}let ue=e=>{let n=Math.max(K.layoutWidth,K.layoutHeight*e),i=n/e;if(r.left=-n/2,r.right=n/2,r.top=i/2,r.bottom=-i/2,r.updateProjectionMatrix(),N.scale.set(n,i,1),ce){let n=ce.image,r=n?.width&&n?.height?n.width/n.height:t.backgroundAspect,i=Math.min(1,e/r),a=Math.min(1,r/e);ce.repeat.set(i,a),ce.offset.set((1-i)/2,(1-a)/2)}return{width:n,baseY:-i*t.baseFraction,x:(e,r=3)=>((e+.5)/r-.5)*n*t.columnWidth}},de=e=>{let t=e.autoClear;try{e.autoClear=!1,e.clearDepth(),e.render(n,r)}finally{e.autoClear=t}},z=(e,n,r,i,a,o)=>{w.visible=!!n&&n.kind===r&&n.eventId===i&&n.focusIndex>=0&&n.focusIndex<a,w.visible&&n&&(w.position.set(e.x(n.focusIndex,a),e.baseY+t.padTrimY[1]+K.ringTube,0),w.scale.setScalar(s.sample(n,o)))};return{scene:n,bells:A,dragons:j,towers:ie,artState:le,drawChoice(e,n,r,i,a=!1){if(oe)return;let o=ue(n),s=JSON.stringify(r);A.forEach(e=>{e.root.visible=!1}),j.forEach(e=>{e.holder.visible=!1}),I!==s&&(I=s,ie.forEach((e,n)=>{e.coins&&=(e.root.remove(e.coins),e.coins.dispose(),null);let i=r.targets[n];if(!i)return;let a=Math.min(t.towerCapacity,Math.max(0,i.coins)),o=new we(re,[F,ne,ne],a);e.coins=o,e.root.add(o);let s=i.structure===`double`?6:7,c=Math.ceil(a/s),l=t.towerHeights[i.tier]/Math.max(1,c),u=new rt;for(let e=0;e<a;e++){let n=Math.floor(e/s),r=e%s,a=i.structure===`double`,d=r/(a?3:s)*Math.PI*2+n%2*Math.PI/s,f=i.structure===`tiered`&&n/c>t.tieredThreshold?t.tieredUpperScale:1,p=a?t.doubleOrbit:t.towerOrbit;u.position.set(Math.cos(d)*p*f+(a?(r<3?-1:1)*t.doubleOffset:0),t.padTop+(n+.5)*l,Math.sin(d)*p*f),u.rotation.y=d,u.scale.set(f,l*t.coinThickness,f),u.updateMatrix(),o.setMatrixAt(e,u.matrix)}o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()})),ie.forEach((e,t)=>{e.root.visible=t<r.targets.length,e.root.position.set(o.x(t,r.targets.length),o.baseY,0)}),z(o,i,`tower`,r.id,r.targets.length,a),de(e)},draw(e,t,n,r,i){if(!n||oe)return;let a=ue(t);ie.forEach(e=>{e.root.visible=!1});let s=n.phase===`show`?1:n.phase===`cover`?Math.max(0,1-n.elapsed/K.coverSeconds):n.phase===`reveal`?Math.min(1,n.elapsed/K.coverSeconds):0;A.forEach((e,t)=>{let i=o.sample(n,t,r);e.root.visible=!0,e.root.position.set(a.x(i.slot),a.baseY,i.arc),e.lid.position.y=s*K.bellLift,e.lid.rotation.y=i.spin}),j.forEach(({holder:e,model:t},i)=>{let o=n.visibleDragonBells[i];e.visible=o!==void 0&&s>K.visibleLift,o!==void 0&&(e.position.set(a.x(n.bellSlots[o]),a.baseY+K.dragonHeight,K.dragonZ),t.draw(r?0:n.elapsed,`flight`))}),z(a,i,`bell`,n.id,n.bellSlots.length,r),de(e)},dispose(){oe||(oe=!0,o.dispose(),s.dispose(),ie.forEach(e=>e.coins?.dispose()),j.forEach(e=>e.model.dispose()),c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),u.forEach(m),n.environment=null,n.clear())}}}function xl(e,t,n){let r=s.cabinetHousing.camera,i=new W(Math.sin(r.yaw),r.pitch,Math.cos(r.yaw)).normalize(),a=new W(Math.cos(r.yaw),0,-Math.sin(r.yaw)),o=new W().crossVectors(i,a).normalize(),c=new zt().setFromPoints([...t]).getCenter(new W),l=Math.tan(wt.degToRad(e.fov/2)),u=e.near;for(let r of t){let t=r.clone().sub(c),s=t.dot(i);u=Math.max(u,Math.abs(t.dot(a))/(l*n)+s,Math.abs(t.dot(o))/l+s,e.near+s)}e.aspect=n,e.position.copy(c).addScaledVector(i,u*r.margin),e.lookAt(c),e.updateProjectionMatrix(),e.updateMatrixWorld()}function Sl(e){let t={value:+!!e},n=t.value,r=0,i,a=!1,o=()=>{i?.kill(),i=void 0,t.value=n};return{start(e,c,l){if(!a){if(i?.kill(),n=+!!e,r=c,l||t.value===n){o();return}i=je.timeline({paused:!0}).to(t,{value:n,duration:s.cabinetHousing.camera.transitionSeconds,ease:s.motion.ease})}},sample(e,n){if(i){let t=Math.max(0,(e-r)/1e3);n||t>=s.cabinetHousing.camera.transitionSeconds?o():i.seek(t,!0)}return t.value},moving:()=>!!i,finish:o,dispose(){a||(a=!0,o())}}}var Cl=3e3,wl=3e3,Tl=1e3/30,El=.6,Dl=1e3,Ol=class{enabled;requested;lowered=!1;previous=null;elapsed=0;warmup=Cl;frames=0;slow=0;constructor(e,t){this.enabled=t,this.requested=e}quality(){return this.requested===`low`||this.lowered?`low`:`high`}request(e){return e!==this.requested&&(this.requested=e,this.lowered=!1,this.resetSamples()),this.quality()}resetSamples(){this.previous=null,this.elapsed=0,this.frames=0,this.slow=0,this.warmup=Cl}sample(e,t){if(!t||!Number.isFinite(e))return this.resetSamples(),this.quality();if(!this.enabled||this.requested===`low`||this.lowered)return this.quality();let n=this.previous;if(this.previous=e,n===null)return this.quality();let r=e-n;return r<=0||r>Dl?(this.resetSamples(),this.quality()):this.warmup>0?(this.warmup-=r,this.quality()):(this.elapsed+=r,this.frames++,r>Tl&&this.slow++,this.elapsed>=wl&&(this.lowered=this.slow/this.frames>=El,this.elapsed=0,this.frames=0,this.slow=0),this.quality())}},$=s.siege.bomb,kl=Math.PI*2;function Al(){let e=new Uint8Array($.textureSize*$.textureSize*4);for(let t=0;t<$.textureSize;t++)for(let n=0;n<$.textureSize;n++){let r=(n+.5)/$.textureSize*2-1,i=(t+.5)/$.textureSize*2-1,a=Math.atan2(i,r),o=Math.hypot(r,i),s=1+$.smokeTextureContrast*Math.sin(a*$.smokeLobes+o*kl),c=Math.max(0,1-o/s)**2,l=1-$.smokeTextureContrast*(.5+.5*Math.sin(r*kl*$.smokeTextureGrainFrequency)*Math.cos(i*kl*$.smokeTextureGrainFrequency)),u=(t*$.textureSize+n)*4;e[u]=e[u+1]=e[u+2]=Math.round(255*l),e[u+3]=Math.round(255*c)}let t=new _(e,$.textureSize,$.textureSize,ft);return t.minFilter=t.magFilter=Me,t.needsUpdate=!0,t}function jl(e){let t=new f;t.name=`siege-bomb-presentation`,t.visible=!1;let n=new Set,r=e=>(n.add(e),e),i=r(new Je({color:$.metalColor,metalness:$.metalness,roughness:$.roughness})),a=r(new Je({color:$.brassColor,metalness:$.metalness,roughness:$.roughness,emissive:$.brassColor,emissiveIntensity:$.emissiveIntensity})),o=r(new Je({color:$.fuseColor,roughness:1})),s=r(new Dt({color:$.glowColor,toneMapped:!1})),c=r(new d($.radius,$.segments,$.rings)),l=r(new se($.radius*$.bandRatio,$.bandTube,$.rings,$.segments)),u=r(new Gt($.neckRadius,$.neckRadius,$.neckHeight,$.rings)),p=r(new Gt($.fuseRadius,$.fuseRadius,$.fuseLength,$.rings)),m=r(new Ie($.sparkRadius)),h=r(new d(1,$.segments,$.rings)),g=r(new se($.ringRadius,$.ringWidth,$.rings,$.segments)),_=r(new Ie($.emberRadius)),v=r(new Xt(1,1)),y=r(Al()),b=new rt,x=Array.from({length:$.maxCount},(e,n)=>{let d=new f;d.name=`siege-bomb-slot-${n}`,t.add(d);let b=new f;b.name=`siege-bomb-${n}`,d.add(b),b.add(new U(c,i));for(let e of[-$.bandTilt,$.bandTilt]){let t=new U(l,a);t.rotation.set(Math.PI/2,e,0),b.add(t)}let x=new U(u,a);x.position.y=$.radius,b.add(x);let S=new U(p,o);S.position.y=$.radius+$.fuseLength/2,S.rotation.z=-$.bandTilt,b.add(S);let C=new U(m,s);C.position.set($.fuseLength*Math.sin($.bandTilt)/2,$.radius+$.fuseLength,0),b.add(C);let w=r(new Dt({color:$.glowColor,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),T=new U(h,w);T.name=`siege-blast-${n}`,d.add(T);let E=r(new Dt({color:$.emberColor,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),D=new U(g,E);D.rotation.x=-Math.PI/2,d.add(D);let O=r(new Dt({color:$.emberColor,transparent:!0,depthWrite:!1,toneMapped:!1})),k=r(new we(_,O,$.emberCount));k.frustumCulled=!1,k.instanceMatrix.setUsage(ie),d.add(k);let A=r(new Dt({color:$.smokeColor,map:y,transparent:!0,depthWrite:!1,side:2,toneMapped:!1})),j=r(new we(v,A,$.smokeCount));return j.name=`siege-smoke-${n}`,j.instanceMatrix.setUsage(ie),j.frustumCulled=!1,j.renderOrder=$.renderOrder,d.add(j),{slot:d,bomb:b,sparkMesh:C,flash:T,flashMaterial:w,wave:D,ringMaterial:E,sparks:k,emberMaterial:O,smoke:j,smokeMaterial:A}}),S=!1;return{root:t,update(n,r,i,a=!1){if(S)return;let o=wr(n.siege,r);t.visible=!a&&o.length>0,t.visible&&x.forEach((t,n)=>{let a=o[n];if(t.slot.visible=!!a,!a)return;let s=(n-(o.length-1)/2)*e.boardHalfWidth*$.spreadRatio;if(t.slot.position.set(s,e.lowerY+$.burstHeight,e.lowerBackZ+(e.lowerFrontZ-e.lowerBackZ)*$.bedDepthRatio),t.bomb.visible=a.bomb,t.bomb.position.y=(1-a.drop*a.drop)*$.dropHeight,t.bomb.rotation.z=r?0:(1-a.drop)*$.dropSpin*(n%2?-1:1),t.sparkMesh.visible=!r,t.flash.visible=t.wave.visible=t.sparks.visible=a.blast,a.blast){t.flash.scale.setScalar($.blastRadius*Math.sin(Math.PI*a.blastProgress)),t.flashMaterial.opacity=$.blastOpacity*(1-a.blastProgress),t.wave.scale.setScalar(1+a.blastProgress*$.ringExpansion),t.ringMaterial.opacity=1-a.blastProgress,t.emberMaterial.opacity=1-a.blastProgress;for(let e=0;e<$.emberCount;e++){let n=kl*e/$.emberCount;b.position.set(Math.cos(n)*a.blastProgress*$.emberTravel,Math.sin(Math.PI*a.blastProgress)*$.emberLift,Math.sin(n)*a.blastProgress*$.emberTravel),b.rotation.set(n,n,0),b.scale.setScalar(1-a.blastProgress/2),b.updateMatrix(),t.sparks.setMatrixAt(e,b.matrix)}t.sparks.instanceMatrix.needsUpdate=!0}if(t.smoke.visible=a.smoke>0,t.smoke.visible){t.smokeMaterial.opacity=a.smoke*(r?$.reducedOpacity:$.smokeOpacity);for(let e=0;e<$.smokeCount;e++){let n=kl*e/$.smokeCount,o=$.smokeSpread*(r?1:a.bloom),s=r?0:Math.sin(n+a.drift)*$.smokeDrift;b.position.set(Math.cos(n)*o+s,e%$.smokeRows/$.smokeRows*$.smokeRise*(r?1:a.bloom),Math.sin(n)*o),b.quaternion.copy(i),b.scale.setScalar($.smokeSize*($.smokeMinSize+e%$.smokeSizeSteps*$.smokeSizeStep)*(r?$.reducedSmokeScale:$.smokeGrowthStart+a.bloom*(1-$.smokeGrowthStart))),b.updateMatrix(),t.smoke.setMatrixAt(e,b.matrix)}t.smoke.instanceMatrix.needsUpdate=!0}})},dispose(){S||(S=!0,t.visible=!1,t.removeFromParent(),n.forEach(e=>e.dispose()))}}}function Ml(e){let t=(0,q.useRef)(null),n=(0,q.useRef)(e);n.current=e;let r=(0,q.useRef)(null),i=(0,q.useRef)(null),a=(0,q.useRef)(null),o=(0,q.useRef)(null);return(0,q.useEffect)(()=>{let c=t.current;if(!c)return;let l=e.geometry,u=l.boardHalfWidth-l.coinRadius-l.upperRailHalfThickness*2,d=s.scene,f=s.premium,p=new h,m,g,_,v,y,b,x,S,C,w,T=0,E=!1,D=[],O,k,A=null,j=n.current.cameraView??`front`,M=!!n.current.cabinetOverview,N=Sl(M),ee=n.current.cameraResetKey,te=!1,ne=!1,F=!1,re=e=>{e!==F&&(F=e,n.current.onCameraOffsetChange?.(e))},ie=ol(nl(j,1)),ae=()=>!!n.current.disabled||!!n.current.cabinetOverview||!!c.closest(`[inert]`)||ie.moving()||N.moving()||j!==(n.current.cameraView??`front`)||ee!==n.current.cameraResetKey,oe=Yc({isDisabled:ae,onStart:e=>{A=e,n.current.onSweepStart?.(e)},onAim:e=>{A=e,n.current.onAimChange(e)},onStop:()=>{A=null,n.current.onSweepEnd?.()}}),I=Jc(s.interaction.tapSlopPx,{isDisabled:ae,onBusyChange:e=>n.current.onCameraBusyChange?.(e),onPreview:e=>{A=e,c.style.cursor=I.dragging()?`grabbing`:e===null?``:`grab`},onTap:e=>{n.current.onAimChange(e),n.current.onDropRequest?.(e)},onOrbit:(e,t)=>{let n=Xc(ie.sample(performance.now(),!0),e,t,Math.min(c.clientWidth,c.clientHeight));te=!0,ie.start(n,performance.now(),!0),il(L,l,L.aspect,n),re(tl(n,nl(j,L.aspect)))}}),se=window.matchMedia(`(prefers-reduced-motion: reduce)`),ce=new Ol(n.current.quality,window.matchMedia(`(pointer: coarse)`).matches),L=new $t(f.camera.fov,1,f.camera.near,f.camera.far),R=()=>{let e=oe.pointerId()??I.pointerId();oe.cancel(),I.cancel(),A=null,c.style.cursor=``,e!==null&&c.hasPointerCapture(e)&&c.releasePointerCapture(e)};i.current=R;let le=e=>{e.preventDefault(),R(),n.current.onError?.(`3D 畫面暫時中斷，請重新開始。`)},ue=(e,t=!1)=>{if(ae())return null;let n=c.getBoundingClientRect();if(n.width<=0||n.height<=0||e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)return null;let r=new P((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);L.updateMatrixWorld();let i=new Ke;i.setFromCamera(r,L),O?.computeBoundingSphere();let a=i.intersectObjects([...p.children.filter(e=>e!==k&&e!==_?.root&&e!==g?.root&&e!==y?.root&&e!==b?.root),...g?.getOccluders()??[]],!1)[0];if(!a||!D.includes(a.object)||!_)return null;let o=a.object.name===`physical-rear-wall`&&qc(a.point,l);return!o&&(a.point.y<l.lowerY-l.coinHalfHeight||Kc(a.point,l)===null)||t&&!o&&(a.point.z>l.upperFrontZ||a.point.y<l.upperY-l.coinHalfHeight)?null:sl(r.x,L,u,_.surfaceY,l.dropZ)},de=e=>{let t=oe.pointerId()??I.pointerId();if(t!==null&&t!==e.pointerId){R();return}if(ae()||e.target!==C?.domElement)return;if(n.current.onSweepStart&&oe.begin(e,ue(e,!0))){e.preventDefault(),c.setPointerCapture(e.pointerId);return}let r=ue(e);I.begin(e,r)&&c.setPointerCapture(e.pointerId)},z=e=>{if(ae()){R();return}if(oe.pointerId()!==null){oe.move(e,ue(e)),oe.pointerId()===null&&c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId);return}let t=I.pointerId();(t===e.pointerId||t===null&&e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0)&&(I.move(e,t===null?ue(e):null),I.pointerId()===null&&c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId))},B=e=>{if(oe.pointerId()===e.pointerId){oe.end(e),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId);return}I.pointerId()===e.pointerId&&(I.end(e,I.dragging()?null:ue(e)),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId))},fe=e=>{(I.pointerId()===e.pointerId||oe.pointerId()===e.pointerId)&&R()},pe=()=>{R(),o.current?.()},me=()=>{document.hidden&&pe()},he=()=>I.leave(),ge=e=>{e.target instanceof Node&&!c.contains(e.target)&&R()},_e=()=>{E||(E=!0,R(),i.current=null,cancelAnimationFrame(T),w?.disconnect(),r.current=null,a.current=null,o.current=null,ie.dispose(),N.dispose(),n.current.onCameraBusyChange?.(!1),re(!1),c.removeEventListener(`pointerdown`,de),c.removeEventListener(`pointermove`,z),c.removeEventListener(`pointerup`,B),c.removeEventListener(`pointercancel`,fe),c.removeEventListener(`lostpointercapture`,fe),c.removeEventListener(`pointerleave`,he),window.removeEventListener(`blur`,pe),document.removeEventListener(`visibilitychange`,me),se.removeEventListener(`change`,pe),window.removeEventListener(`pointerdown`,ge),window.removeEventListener(`focusin`,ge),C?.domElement.removeEventListener(`webglcontextlost`,le),m?.dispose(),g?.dispose(),_?.dispose(),y?.dispose(),b?.dispose(),x?.dispose(),S?.dispose(),v?.dispose(),n.current.onDragonBonusReady?.(!1),C?.dispose(),C?.domElement.remove())};try{C=new Os({alpha:!0,antialias:!0,powerPreference:`high-performance`}),C.setClearColor(0,0),C.outputColorSpace=Yt,C.toneMapping=4,C.toneMappingExposure=f.lighting.exposure,C.shadowMap.type=1,C.domElement.setAttribute(`aria-label`,`後方投幣區按住左右滑動連投，放開即停；其餘幣床點按投幣、拖曳轉鏡頭；回正按鈕恢復視角`),c.appendChild(C.domElement),C.domElement.addEventListener(`webglcontextlost`,le),m=el(p,C,l),g=fl(l),p.add(g.root),g.setOverview(M),e.dragonBonusEnabled&&(n.current.onDragonBonusReady?.(!1),v=ll(),p.add(v.root),v.ready.then(()=>{E||n.current.onDragonBonusReady?.(!0)},()=>{E||n.current.onDragonBonusReady?.(!1)})),_=al(l),p.add(_.root),y=hl(l),p.add(y.root),b=_l(l),p.add(b.root);let{coins:t,pusher:i,aim:s,key:h}=m;O=t,k=s,D.push(...m.hitTargets);let P=L.clone(),F=()=>{let e=performance.now();il(L,l,L.aspect,ie.sample(e,se.matches));let t=N.sample(e,se.matches);t>0&&g&&(xl(P,g.fullBounds,L.aspect),L.position.lerp(P.position,t),L.quaternion.slerp(P.quaternion,t),L.updateMatrixWorld()),g?.setOverview(M&&!N.moving())},ue=()=>{ne=!1,re(tl(ie.sample(performance.now(),se.matches),nl(j,L.aspect))),n.current.onCameraSettled?.(j),n.current.onCameraBusyChange?.(!1)};o.current=()=>{E||(ie.finish(),N.finish(),te||ie.start(nl(j,L.aspect),performance.now(),!0),F(),ue())},a.current=()=>{if(E)return;let e=n.current.cameraView??`front`,t=!!n.current.cabinetOverview;(e!==j||t!==M||ee!==n.current.cameraResetKey||ie.moving()||N.moving())&&(R(),j=e,ee=n.current.cameraResetKey,te=!1,ne=!0,n.current.onCameraBusyChange?.(!0),M=t,N.start(M,performance.now(),se.matches),ie.start(nl(e,L.aspect),performance.now(),se.matches),F(),!ie.moving()&&!N.moving()&&ue())};let _e=()=>{if(E||!C)return;let e=c.clientWidth,t=c.clientHeight;e&&t&&(C.setSize(e,t),R(),L.aspect=e/t,o.current?.())},ve,ye=e=>{C&&ve!==e&&(ve=e,C.setPixelRatio(Math.min(window.devicePixelRatio||1,e===`high`?d.highPixelRatio:d.lowPixelRatio)),C.shadowMap.enabled=e===`high`,h.castShadow=e===`high`,C.domElement.dataset.renderQuality=e)};r.current=e=>{C&&(ye(ce.request(e)),_e())},r.current(n.current.quality),w=new ResizeObserver(_e),w.observe(c),c.addEventListener(`pointerdown`,de),c.addEventListener(`pointermove`,z),c.addEventListener(`pointerup`,B),c.addEventListener(`pointercancel`,fe),c.addEventListener(`lostpointercapture`,fe),c.addEventListener(`pointerleave`,he),window.addEventListener(`blur`,pe),document.addEventListener(`visibilitychange`,me),se.addEventListener(`change`,pe),window.addEventListener(`pointerdown`,ge),window.addEventListener(`focusin`,ge);let be=ml([t],e=>e.kind!==`key`&&(!e.lifting||e.position.y+l.coinHalfHeight>=l.lowerY-l.lowerHalfThickness*2),e=>f.materials.coinShadeMin+e*37%101/100*f.materials.coinShadeRange),xe=()=>{if(!E&&C)try{ne&&(F(),!ie.moving()&&!N.moving()&&ue());let e=n.current.readFrame();ye(ce.sample(performance.now(),!document.hidden&&!n.current.disabled&&!e.dragonChoice&&!e.dragonBells&&!e.dragonBonus&&!ie.moving()&&!N.moving()&&I.pointerId()===null&&oe.pointerId()===null)),be.update(e.coins),i.position.z=e.pusherZ,m?.updateHatches(e.hatches),y?.update(e,se.matches,M),b?.update(e,se.matches,M),e.siege&&e.siege.phase!==`rhythm`&&!S&&(S=jl(l),p.add(S.root)),S?.update(e,se.matches,L.quaternion,M),v?.draw(e.dragonBonus,se.matches&&!n.current.bonusFullMotion);let t=(l.pusherCenterY??l.upperY+l.pusherHalfHeight)+l.pusherHalfHeight;s.position.set(e.aim*u,Math.max(l.upperY,t)+f.effects.aimSurfaceOffset,l.dropZ),s.visible=!ae()&&!I.dragging(),_?.update(e.aim,A,n.current.feedback,ae()||I.dragging(),performance.now(),se.matches),C.render(p,L),(e.dragonBells||e.dragonChoice)&&(x??=bl({environment:p.environment}),e.dragonChoice?x.drawChoice(C,L.aspect,e.dragonChoice,e.bonusAutoSelection,se.matches&&!n.current.bonusFullMotion):x.draw(C,L.aspect,e.dragonBells,se.matches&&!n.current.bonusFullMotion,e.bonusAutoSelection)),T=requestAnimationFrame(xe)}catch(e){R(),n.current.onError?.(e instanceof Error?e.message:`3D 畫面無法更新。`)}};n.current.onReady?.(),xe()}catch(e){_e(),n.current.onError?.(e instanceof Error?e.message:`這個裝置無法啟動 3D 畫面。`)}return _e},[e.geometry,e.dragonBonusEnabled]),(0,q.useEffect)(()=>{r.current?.(e.quality)},[e.quality]),(0,q.useEffect)(()=>{a.current?.()},[e.cameraView,e.cameraResetKey,e.cabinetOverview]),(0,q.useEffect)(()=>{e.disabled&&(i.current?.(),o.current?.())},[e.disabled]),(0,J.jsx)(`div`,{ref:t,style:{width:`100%`,height:`100%`,touchAction:`none`}})}function Nl(e){let t=!1,n=null,r=0,i=!1,a=0,o=null,s=0,c=e.now??(()=>performance.now()),l=t=>{i!==t&&(i=t,e.onAutoFireChange?.(t))},u=()=>{t=!1,o=null,s=0,r+=1,n!==null&&(e.clearInterval(n),n=null)},d=()=>{u(),l(!1)},f=()=>{u()},p=()=>{let t=e.getAutoFireIntervalMs?.();return t!==void 0&&Number.isFinite(t)&&t>0?t:e.fireIntervalMs},m=(t,a)=>{o=t,s=a;let c=r;n=e.setInterval(()=>{if(r===c){if(e.isBlocked()){i?f():d();return}v(t())}},a)},h=n=>{i&&!t&&!e.isBlocked()&&e.getEngine()&&(t=!0,m(n,p()))},g=()=>{if(!i||!t||!o||s===p())return;let e=o;u(),h(e)},_=()=>{l(!0)},v=t=>{if(e.isBlocked()||!Number.isFinite(t))return!1;let n=e.getEngine();if(!n)return!1;let r=Math.max(-1,Math.min(1,t)),{draw:a}=n.dropCoin(r*e.dropMaxAbsX);return a.type===`ineligible`&&(a.reason===`no-balance`?d():a.reason===`board-full`&&(i?f():d())),e.onDrop?.(a,r),a.type!==`ineligible`};return{performDrop:v,handleFireStart:n=>{if(i){d();return}if(t||e.isBlocked()||!e.getEngine())return;t=!0,a=c();let o=r;v(n()),t&&r===o&&m(n,e.fireIntervalMs)},handleFireRelease:(n=!0)=>{i||t&&(n&&e.autoFireHoldMs!==void 0&&c()-a>=e.autoFireHoldMs&&!e.isBlocked()&&e.getEngine()?(l(!0),g()):d())},handleFireEnd:d,handleDropRequest:e=>(d(),v(e)),stopFiring:d,suspendFiring:f,resumeFiring:h,refreshAutoCadence:g,armAutoFiring:_,isFiring:()=>t,isAutoFiring:()=>i}}var Pl=K.autoChoice.scanSeconds,Fl=K.autoChoice.confirmSeconds,Il=Pl+Fl,Ll=class{random;key=``;elapsed=0;committed=!1;pending=null;constructor(e=Math.random){this.random=e}reset(){this.key=``,this.elapsed=0,this.committed=!1,this.pending=null}pick(e){let t=this.random();return Math.min(e-1,Math.max(0,Math.floor(t*e)))}advance(e,t){let n=e.getDragonChoice(),r=e.getDragonBellState(),i=n?`tower:${n.id}`:r?.phase===`guess`?`bell:${r.id}`:``;if(i!==this.key&&(this.key=i,this.elapsed=0,this.committed=!1,this.pending=null),!i||this.committed||!Number.isFinite(t)||t<0)return null;if(this.pending){if(this.pending.elapsed=Math.min(Il,this.pending.elapsed+t),this.pending.elapsed<Il)return null;let{kind:n,eventId:r,value:i}=this.pending,a=n===`tower`?e.chooseDragonTower(r,i):e.guessDragonBell(r,i);return this.pending=null,a?(this.committed=!0,n):null}let a=n?3:5;if(this.elapsed=Math.min(a,this.elapsed+t),this.elapsed<a)return null;if(n&&n.targets.length){let e=this.pick(n.targets.length);this.pending={kind:`tower`,eventId:n.id,selectedIndex:e,value:n.targets[e].towerId,count:n.targets.length,elapsed:0}}else if(r&&r.phase===`guess`){let e=r.bellSlots;if(e.length){let t=e[this.pick(e.length)];this.pending={kind:`bell`,eventId:r.id,selectedIndex:t,value:t,count:e.length,elapsed:0}}}return null}selection(){let e=this.pending;if(!e)return null;let t=e.elapsed>=Pl;return{kind:e.kind,eventId:e.eventId,focusIndex:t?e.selectedIndex:Math.min(e.count-1,Math.floor(e.elapsed/Pl*e.count)),selectedIndex:e.selectedIndex,confirming:t,confirmProgress:t?Math.min(1,(e.elapsed-Pl)/Fl):0}}remaining(e){let t=e.getDragonChoice(),n=e.getDragonBellState(),r=t?`tower:${t.id}`:n?.phase===`guess`?`bell:${n.id}`:``,i=t?3:5,a=r===this.key?Math.max(0,i-this.elapsed):i;return t?{tower:a}:n?.phase===`guess`?{bell:a}:{}}};function Rl(e,t,n){if(!Number.isFinite(n))return e;let r=Math.max(-1,Math.min(1,n)),i=e.sequence+1;return t.type===`ineligible`?{kind:`blocked`,sequence:i,aim:r,reason:t.reason}:{kind:`accepted`,sequence:i,aim:r}}function zl(e,t){return Number.isFinite(t)?{kind:`aim-only`,sequence:e.sequence+1,aim:Math.max(-1,Math.min(1,t))}:e}function Bl(e){return e.kind===`idle`?e:{kind:`idle`,sequence:e.sequence+1}}var Vl=e({App:()=>Xl}),Hl=150,Ul=250,Wl=200,Gl=`crusader.trial-auto-resume`;function Kl(e){let t=new URLSearchParams(window.location.search).get(`dragonChance`),n=t===null?NaN:Number(t);return e&&Number.isFinite(n)&&n>=0&&n<=1?n:An}var ql={coinRadius:an,coinHalfHeight:dn,boardHalfWidth:tn,upperY:kn,upperBackZ:bn,upperFrontZ:0,upperHalfThickness:Sn,upperRailHalfHeight:En,upperRailHalfThickness:Cn,lowerY:0,lowerBackZ:0,lowerFrontZ:sn,lowerHalfThickness:mn,hatches:Tn,pusherHalfHeight:gn,pusherHalfDepth:cn,pusherCenterY:on,rearWall:{centerY:_n,centerZ:fn,halfHeight:xn,halfDepth:en},dropZ:ln,capacity:hn,towerTopY:Math.max(vn,jn),towerEnvelopes:yn.map(e=>({x:e.x,z:e.z,radius:Math.max(On,Dn),topY:Math.max(vn,jn)}))};function Jl(){return!1}function Yl(){return typeof crypto<`u`&&crypto.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*4294967295)}function Xl({storageOwner:e=null,entryContinued:t=!1,onNavigate:n,onReady:a}={}){let[o]=(0,q.useState)(()=>zn(e)),c=ci(),[l,u]=(0,q.useState)(!1),[d,f]=(0,q.useState)(``),p=(0,q.useRef)(new ti),[m,h]=(0,q.useState)(!1),[g,_]=(0,q.useState)(!1),[v,y]=(0,q.useState)(!1),[b,x]=(0,q.useState)(null);(0,q.useEffect)(()=>{if(h(!1),!g)return;let e=window.setTimeout(()=>h(!0),s.account.inspectionHintMs);return()=>window.clearTimeout(e)},[g]);let S=(0,q.useMemo)(()=>b?[`local`,`cloud`].map(e=>{let t=e===`local`?b.local:b.remote.archive;return{id:e,label:e===`local`?`這台裝置`:`雲端進度`,balance:t.main.data.engine.ledger.balance,savedAt:t.main.data.savedAt,summary:`盤面 ${t.main.data.engine.physics.coinsById.size} 枚 · 試煉已過 ${Object.values(t.trial?.completed??{}).reduce((e,t)=>e+t.length,0)} 關`}}):void 0,[b]),w=(0,q.useRef)(new ei),[E,D]=(0,q.useState)(!1),k=(0,q.useRef)(!1),[A,M]=(0,q.useState)(null),N=(0,q.useRef)(0),[ee,te]=(0,q.useState)(),P=(0,q.useMemo)(()=>ee?.map(e=>({revision:e.revision,balance:e.archive.main.data.engine.ledger.balance,savedAt:e.archive.main.data.savedAt})),[ee]),ne=(0,q.useMemo)(()=>A?.plan.choices.map(e=>{let t=e===`guest`?A.plan.guest:e===`account`?A.plan.account:A.plan.remote.archive,n=Object.values(t.trial?.completed??{}).reduce((e,t)=>e+t.length,0),r=t.main.data.engine.treasury?.state;return{id:e,label:e===`guest`?`目前訪客盤面`:e===`account`?`此帳號的本機進度`:`雲端進度`,balance:t.main.data.engine.ledger.balance,savedAt:t.main.data.savedAt,summary:`盤面 ${t.main.data.engine.physics.coinsById.size} 枚 · 鑰匙 ${r?.keys??0} · 免費 ${r?.freeRemaining??0} 次 · 試煉已過 ${n} 關`}}),[A]),[F]=(0,q.useState)(()=>new j(t||new URLSearchParams(window.location.search).has(`fromTrial`),e===null&&new URLSearchParams(window.location.search).get(`accountChoice`)===`1`)),[ie,ae]=(0,q.useState)(F.blocked);(0,q.useEffect)(()=>{let t=new URL(window.location.href);e===null&&t.searchParams.get(`accountChoice`)===`1`&&(t.searchParams.delete(`accountChoice`),history.replaceState(history.state,``,t.href))},[e]);let oe=(0,q.useMemo)(Jl,[]),I=(0,q.useRef)(null),se=(0,q.useRef)(!1),ce=(0,q.useRef)(!1),L=(0,q.useRef)(!1),R=(0,q.useRef)(!1),le=(0,q.useRef)(null),de=(0,q.useRef)(0),z=(0,q.useRef)(!1),B=(0,q.useRef)(!1),fe=(0,q.useRef)(!1),pe=(0,q.useRef)(!1),[me,he]=(0,q.useState)(`idle`),ge=(0,q.useRef)(!1),_e=(0,q.useRef)(void 0),[ve,ye]=(0,q.useState)({state:`loading`,message:`正在讀取本機進度…`}),be=!window.location.pathname.includes(`/qa/`)||window.location.pathname.endsWith(`/qa/local-save.html`),[xe,Ce]=(0,q.useState)(!0),[we,Te]=(0,q.useState)(void 0),[De,Oe]=(0,q.useState)(!1),[V,Ae]=(0,q.useState)(!1),je=(0,q.useRef)(!1),Me=(0,q.useRef)(null),[Ne,Pe]=(0,q.useState)(void 0),Ie=we??Ne,[Le,U]=(0,q.useState)(!1),[Re,Be]=(0,q.useState)(()=>F.phase===`intro`?{kind:`intro`,id:0}:null),Ve=(0,q.useRef)(Re),[He,Ue]=(0,q.useState)(document.hidden),We=(0,q.useRef)(document.hidden),Ge=(0,q.useRef)(new Hc),[Ke,Je]=(0,q.useState)(()=>Ge.current.snapshot(0)),Ye=(0,q.useRef)(-1/0),Xe=(0,q.useRef)(0),[Ze,$e]=(0,q.useState)(ke),[et,tt]=(0,q.useState)(!1),[rt,it]=(0,q.useState)(1),at=(0,q.useRef)(1),st=(0,q.useRef)(Ze),[ct,lt]=(0,q.useState)(fr),ut=(0,q.useRef)(ct);ut.current=ct;let[dt,ft]=(0,q.useState)(`idle`),pt=(0,q.useRef)(0);(0,q.useEffect)(()=>()=>{pt.current++},[]);let mt=(0,q.useRef)({time:0,playing:!1}),[gt,_t]=(0,q.useState)(`high`),[yt,bt]=(0,q.useState)(0),[St,Ct]=(0,q.useState)(!1),[wt,Et]=(0,q.useState)(!1),Dt=(0,q.useRef)(!1),[Ot,kt]=(0,q.useState)(!1),At=(0,q.useRef)(!1),[jt,W]=(0,q.useState)(0),[Nt,Pt]=(0,q.useState)(0),[Ft,It]=(0,q.useState)(0),[Lt,Rt]=(0,q.useState)(0),[zt,Bt]=(0,q.useState)(null),[Ht,Ut]=(0,q.useState)(),[Wt,Gt]=(0,q.useState)(0),[Kt,qt]=(0,q.useState)(void 0),[Jt,Yt]=(0,q.useState)({kind:`idle`,sequence:0}),[Xt,Zt]=(0,q.useState)(0),$t=(0,q.useRef)(!1),G=(0,q.useRef)(null),en=(0,q.useRef)(!1),[tn,nn]=(0,q.useState)(null),[K,rn]=(0,q.useState)(null),[an,on]=(0,q.useState)(null),sn=(0,q.useRef)(new Ll),[cn,ln]=(0,q.useState)({}),[un,dn]=(0,q.useState)(null),[fn,pn]=(0,q.useState)(),[mn,hn]=(0,q.useState)(null),[gn,_n]=(0,q.useState)(!1),vn=(0,q.useRef)(0),yn=(0,q.useRef)(`idle`),[bn,xn]=(0,q.useState)(()=>{try{return Se(o.cosmetics(window.localStorage))}catch{return O()}}),Sn=(0,q.useRef)(bn);Sn.current=bn,(0,q.useEffect)(()=>{try{Ee(bn,o.cosmetics(window.localStorage))}catch{}},[bn,o]);let[Cn,wn]=(0,q.useState)(!1),Tn=(0,q.useRef)(0),En=(0,q.useRef)(!1),Dn=(0,q.useRef)(null),On=(0,q.useRef)(Le),kn=(0,q.useRef)(xe),An=(0,q.useRef)(!1),jn=(0,q.useRef)(0),Mn=(0,q.useRef)(null),Fn=(0,q.useRef)(null),In=(0,q.useRef)(null),Ln=(0,q.useRef)([]),Rn=(0,q.useRef)(null),Un=(0,q.useRef)(new vr),Wn=(0,q.useRef)(new Tr),Gn=(0,q.useRef)(new kr),Kn=(0,q.useCallback)(()=>{if(Me.current)return Me.current;let e=G.current,t=I.current;if(!e||!t)return Promise.reject(Error(`No live checkpoint to preserve`));let n={format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},r=t.preserveConflict(n,Sn.current);return Me.current=r,r.catch(()=>{Me.current===r&&(Me.current=null)}),r},[]),qn=(0,q.useCallback)(()=>{R.current=!0,z.current=!0,An.current=!0,G.current?.pause(),Oe(!0),Te(`存檔已有較新的版本，已暫停本頁以避免覆蓋。讀取最新進度前，會先保留目前盤面的復原備份；不會開始新局。`),ye({state:`error`,message:`存檔版本不同，請使用「讀取最新進度」接續。請勿清除網站資料。`}),Kn().catch(()=>{})},[Kn]),Jn=(0,q.useCallback)(async(t=!1)=>{let n=G.current,i=I.current;if(!r(e)||!Qe(e)||!n||!i||!se.current||R.current||ge.current||z.current)return;if(ce.current){L.current=!0;return}let a={format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},o=Gc(a);if(t||o!==le.current){ce.current=!0;try{await i.write(a),le.current=o,de.current=Date.now(),z.current||ye(e=>Wc(e,{state:`saved`,message:`進度已存於此瀏覽器，重新進入可接續遊玩。`}))}catch(e){z.current||ye(e=>Wc(e,{state:`error`,message:`進度尚未儲存，請勿關閉此頁；可在設定重試存檔。`})),e instanceof Bn&&qn()}finally{ce.current=!1,L.current&&(L.current=!1,Jn())}}},[qn]),Yn=(0,q.useRef)(!1),Xn=ht(e,async()=>{if(!Qe(e))throw new ue(`Play permission is paused`);let t=G.current,n=I.current;if(!r(e)||R.current)throw Error(`Checkpoint owner changed`);if(!t||!n||!se.current||ge.current||z.current&&!Yn.current)throw new ue(`Checkpoint not ready for cloud`);try{let e={format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},r=Gc(e);r!==le.current&&(await n.write(e),le.current=r,de.current=Date.now()),await n.assertCurrent()}catch(e){throw e instanceof Bn&&qn(),e}}),Zn=Xn.status,Qn=()=>{e&&r(e)&&Qe(e)&&!B.current&&!R.current&&Xn.retry()},$n=(0,q.useCallback)(()=>{let e=Rn.current;if(!e)return;let t=Ve.current;e.setMusicSuspended(F.blocked||z.current||We.current||An.current||!!G.current?.getSiegeState()&&En.current||(t?!mt.current.playing:kn.current));let n=G.current?.getDragonChoice()||G.current?.getDragonBellState();e.setMusic(t?t.kind===`intro`?`intro`:`dragon`:G.current?.getSiegeState()?`siege`:n?`bells`:`game`,t?mt.current.time:void 0)},[]);(0,q.useEffect)(()=>{$n()},[K?.id,an?.id,$n]);let er=(0,q.useCallback)(()=>{pt.current++,ft(`idle`),Gn.current.reset(),Rn.current?.stopAll()},[]);(0,q.useEffect)(()=>{kn.current=xe},[xe]),(0,q.useEffect)(()=>{An.current=!!Ie},[Ie]),(0,q.useEffect)(()=>{st.current=Ze,Rn.current?.setMuted(Ze)},[Ze]),(0,q.useEffect)(()=>{(Le||xe||Ie)&&(Yt(Bl),er())},[Le,xe,Ie,er]);let tr=(0,q.useCallback)(()=>(Rn.current||(Rn.current=new gr,Rn.current.setMuted(st.current),Rn.current.setCoinSound(ut.current.sound),Rn.current.setCoinVolume(ut.current.volume),$n()),Rn.current),[$n]),nr=(0,q.useCallback)(()=>{pt.current++,Rn.current?.stopCoinDrop(),ft(`idle`)},[]),rr=(0,q.useCallback)(e=>{nr();let t={...ut.current,...e};t.volume=dr(t.volume),ut.current=t,lt(t),pr(t),Rn.current?.setCoinSound(t.sound),Rn.current?.setCoinVolume(t.volume)},[nr]),ir=(0,q.useCallback)(async()=>{if(st.current||We.current||Ve.current||ut.current.volume===0)return;let e=++pt.current,t=tr();t.unlock(),ft(`loading`);let n=await t.prepareCoinSound();e!==pt.current||st.current||We.current||Ve.current||ft(n&&t.play(`coin-drop`)?`ready`:`error`)},[tr]),ar=(0,q.useCallback)(()=>{tr().unlock(),$n()},[tr,$n]),or=(0,q.useCallback)((e,t)=>{Ve.current&&(mt.current={time:e,playing:t},$n())},[$n]),sr=(0,q.useCallback)(()=>{let e=!st.current;st.current=e,$e(e),H(e),tr().setMuted(e),ar()},[tr,ar]),cr=(0,q.useCallback)((e,t)=>{Yt(n=>Rl(n,e,t));let n=G.current?.getHudState();if(n&&(W(n.ledger.balance),pn(e=>Wc(e,n.treasury)),rn(e=>Wc(e,n.dragonChoice??null))),e.type!==`ineligible`){if(Jn(),tr().play(`coin-drop`),n?.dragonChoice){qt(`請選擇巨龍撞擊目標；盤面已暫停。`);return}if(n?.dragonBonus){qt(`巨龍 BONUS`);return}e.type===`no-roll`?qt(e.reason===`free-drop`?n?.treasury?.freeRemaining?`免費投幣 · 剩餘 ${n.treasury.freeRemaining} 次`:`免費已投完，等待護欄收回；再次操作才會投入一般金幣。`:e.reason===`regeneration-progress`?`已累計有效投幣，蓄能達20枚後再生幣塔。`:e.reason===`spawn-in-progress`?`幣塔升起中，可繼續投幣推進。`:`已有待建幣塔，等待可用空間；可繼續投幣推進。`):e.type===`event`&&qt(`恭喜！觸發建塔事件，即將建造 ${e.towers} 座幣塔。`)}},[tr,Jn]),lr=(0,q.useMemo)(()=>Nl({getEngine:()=>G.current,isBlocked:()=>!r(e)||!Qe(e)||F.blocked||z.current||!!Ve.current||On.current||kn.current||An.current||En.current||Dt.current||At.current||!!G.current?.getDragonBonusState()||!!G.current?.isFeatureInputBlocked(),dropMaxAbsX:Pn,fireIntervalMs:Ul,getAutoFireIntervalMs:()=>Ul/at.current,autoFireHoldMs:s.interaction.autoFireHoldMs,onAutoFireChange:tt,onDrop:cr,setInterval:(e,t)=>window.setInterval(e,t),clearInterval:e=>window.clearInterval(e)}),[cr]),ur=(0,q.useCallback)(()=>{lr.stopFiring()},[lr]),mr=(0,q.useCallback)(e=>{if(!Number.isFinite(e))return;let t=Math.max(1,Math.min(3,Math.round(e*4)/4));at.current=t,it(t),lr.refreshAutoCadence()},[lr]),hr=(0,q.useCallback)(()=>{lr.suspendFiring()},[lr]),_r=(0,q.useCallback)(()=>{let t=!Qe(e)||F.blocked||z.current||We.current||!!Ve.current||kn.current||An.current;On.current=t,U(t),Fn.current=null,t?(hr(),G.current?.pause(),Ge.current.clearTransient(G.current?.getPhysicsWorld().getElapsedSeconds()??0)):G.current?.resume(),$n()},[hr,$n]),yr=(0,q.useSyncExternalStore)(ze,ot,ot);(0,q.useEffect)(()=>{_r()},[yr,_r]),(0,q.useEffect)(()=>nt(e,{pause:()=>{hr(),On.current=!0,U(!0),G.current?.pause(),er(),Rn.current?.setMusicSuspended(!0)},preserve:async()=>{let e=G.current,t=I.current;se.current&&e&&t&&await t.preserveConflict({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},Sn.current)},prepare:async()=>{let t=I.current,n=G.current;if(!e||!t||!n||!se.current||R.current||ge.current)throw Error(`Play handoff checkpoint unavailable`);qe(e);let r={format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},i=Gc(r);i!==le.current&&(await t.write(r),le.current=i,de.current=Date.now()),await t.assertCurrent(),qe(e)}}),[e,hr,er,Kn]);let br=(0,q.useCallback)(e=>{let t=G.current?.getTreasuryState();if(G.current?.getDragonBonusState()||G.current?.getDragonChoice()||G.current?.getDragonBellState()||t&&t.phase!==`idle`)return;let n={kind:e,id:++Xe.current};Ve.current=n,mt.current={time:0,playing:!1},hr(),Yt(Bl),_r(),Be(n)},[hr,_r]),xr=(0,q.useCallback)(()=>{Ve.current?.kind===`intro`&&F.finishIntro(),ae(F.blocked),Ve.current=null,Be(null),_r()},[_r]);(0,q.useEffect)(()=>{kn.current=xe,An.current=!!Ie,_r()},[xe,Ie,_r]);let Sr=(0,q.useCallback)(()=>{!r(e)||z.current||Dt.current||At.current||(tr().unlock(),lr.handleFireStart(()=>jn.current))},[tr,lr]),Cr=(0,q.useCallback)(()=>{lr.handleFireEnd()},[lr]),wr=(0,q.useCallback)(e=>{lr.handleFireRelease(e===`pointer`)},[lr]),Er=(0,q.useCallback)(()=>{On.current||kn.current||An.current||Dt.current||At.current||(Dt.current=!0,hr(),Yt(Bl),Ct(!0),bt(e=>e+1))},[hr]),Or=(0,q.useCallback)(e=>{Dt.current=e,e&&(hr(),Yt(Bl)),Ct(e)},[hr]),Ar=(0,q.useCallback)(e=>{On.current||kn.current||An.current||Dt.current||(At.current=e,Dt.current=!0,hr(),Yt(Bl),Ct(!0),kt(e))},[hr]),jr=(0,q.useCallback)(e=>{if(z.current||!Number.isFinite(e)||Dt.current||At.current)return;tr().unlock();let t=Math.max(-1,Math.min(1,e));jn.current=t,Gt(t),lr.isAutoFiring()||lr.handleDropRequest(e)},[tr,lr]),Mr=(0,q.useCallback)(()=>{Mn.current!==null&&(cancelAnimationFrame(Mn.current),Mn.current=null),In.current!==null&&(window.clearInterval(In.current),In.current=null),ur(),er(),Fn.current=null},[ur,er]),Nr=(0,q.useCallback)(async()=>{if(!be||B.current||!Qe(e))return;let t=G.current,r=I.current;if(!t||!r||!se.current||R.current||ge.current||kn.current||An.current){he(`error`);return}if(z.current=!0,B.current=!0,he(`saving`),lr.isAutoFiring()&&!Dn.current)try{Dn.current=window.crypto.randomUUID(),window.sessionStorage.setItem(Gl,Dn.current)}catch{Dn.current=null}Mr(),_r();try{let i={format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:Ge.current.saveState(),aim:jn.current},a=new URL(`trials.html`,window.location.href);if(Dn.current&&a.searchParams.set(`autoResume`,Dn.current),n){await n(`trials`,a,()=>r.write(i));return}await Vn(r,i,async()=>{await Fe(e,`trials`),vt(`trials`,window.sessionStorage),window.location.assign(a.href)})}catch(e){he(`error`),ye({state:`error`,message:`前往試煉前未能完成存檔。盤面已暫停，請重試；原進度仍在此頁。`}),e instanceof Bn&&qn()}finally{B.current=!1}},[be,lr,Mr,_r,qn,n]),Pr=async()=>{if(!B.current){B.current=!0,he(`saving`);try{if(e&&await xt(e,!0),!r(e))throw Error(`Navigation account changed`)}catch{he(`error`);return}finally{B.current=!1}await Nr()}},Fr=(0,q.useCallback)(()=>{let e=G.current;if(!e)return;let t=e.getHudState();!ge.current&&!en.current&&!t.dragonChoice&&!t.dragonBells&&!t.dragonBonus&&e.setDragonBonusAvailable(!1);let n=Ge.current.snapshot(t.elapsedSeconds);Je(e=>Wc(e,n)),Pt(t.scoreCount),nn(e=>Wc(e,t.dragonBonus)),rn(e=>Wc(e,t.dragonChoice??null)),on(e=>Wc(e,t.dragonBells??null));let r=sn.current.remaining(e);ln(e=>Wc(e,r));let i=sn.current.selection();dn(e=>Wc(e,i)),pn(e=>Wc(e,t.treasury));let a=e.getSiegeState();hn(e=>Wc(e,a)),W(t.ledger.balance),t.ledger.balance<=0&&(t.treasury?.freeRemaining??0)<=0&&ur(),It(t.ledger.intactTowers),Rt(t.ledger.pendingTowerBuilds),Bt(e=>Wc(e,t.regeneration));let o=t.towers.find(e=>e.status!==`empty`&&e.status!==`intact`);Ut(o?{opening:`台面開洞中`,draining:`舊幣落洞中`,rising:`幣塔旋轉升起`,closing:`升塔洞口關閉中`}[o.status]:void 0),oe&&(window.__crusaderDebug=Object.freeze({score:t.scoreCount,wallet:t.ledger.balance,bodies:t.activeCoinCount,pending:t.ledger.pendingTowerBuilds,towers:t.ledger.intactTowers,paused:t.paused}))},[oe,ur]),Ir=(0,q.useCallback)(t=>{Mn.current=requestAnimationFrame(Ir);let n=G.current;if(!r(e)||!Qe(e)||!n||On.current){Fn.current=t;return}if(Fn.current===null){Fn.current=t;return}let i=(t-Fn.current)/1e3;if(Fn.current=t,En.current&&n.getSiegeState())return;n.getDragonBonusState()||n.isFeatureInputBlocked()?hr():lr.resumeFiring(()=>jn.current);let a=n.getDragonBellState(),o=n.getSiegeState(),c=n.tick(i),l=n.getSiegeState();if(o?.id!==l?.id||o?.revision!==l?.revision){if(hn(l),$n(),l&&l.phase!==`push`){let e=l.phase===`cleared`?`siege-clear`:o?.id===l.id?l.lastHit?`siege-hit`:`siege-miss`:`siege-enter`;tr().play(e)}else l?.phase===`push`&&o?.phase===`rhythm`&&tr().play(l.lastHit?`siege-hit`:`siege-miss`)}for(let e of Wn.current.observe(l))tr().play(e);sn.current.advance(n,i)&&(rn(n.getDragonChoice()),on(n.getDragonBellState()),dn(null),Jn());for(let e of Un.current.observe(n.getDragonChoice(),n.getDragonBellState()))tr().play(e);a?.phase===`reveal`&&!n.getDragonBellState()&&qt(a.won?`找到小龍，巨龍接近中；尚未入帳。`:`猜鐘未中，塔保留；本次沒有撞擊或加分。`),Ge.current.record(c,n.getPhysicsWorld().getElapsedSeconds());let u=0,d=0,f=0,p=0;for(let e of c){u+=e.scored.length,f+=e.keysCollected?.length??0,p+=e.keysLost?.length??0;for(let t of e.dragonAwards??[])d+=t.amount}let m=(n.getTreasuryState()?.rounds??0)>vn.current;p&&qt(`鑰匙流失 ${p} 把，未收集、不計分。`),f&&!m&&qt(`前口收集鑰匙，目前 ${n.getTreasuryState()?.keys??0} / 3 把。鑰匙本身不計分。`);let h=n.getTreasuryState()?.phase??`idle`;h===`idle`&&yn.current===`retracting`&&qt(`護欄已收回；再次操作才會投入一般金幣。`),yn.current=h,m&&(vn.current=n.getTreasuryState().rounds,qt(`御庫已開啟：免費剩餘 ${n.getTreasuryState().freeRemaining} 次，聖盾護欄啟動。`));let g=c.some(e=>e.towerCollapses.some(e=>e.tier===`high`));if(g&&d===0&&tr().play(`tower-collapse`),(u||d||g||m)&&xn(e=>Mt(e,{front:u>0,dragon:d>0,highTower:g,treasury:m})),u>0){n.addBalance(u);let e=Gn.current.record(u,t),r=tr();d===0&&!(e&&r.play(`coin-big-win`))&&t-Ye.current>=s.boardFeedback.collectSoundGapMs&&(r.play(`coin-collect`),Ye.current=t)}let _=n.getTowerManager().getSlots(),v=Ln.current,y=!1,b=!1;for(let e=0;e<_.length;e++){let t=v[e],n=_[e].status;t!==`intact`&&n===`intact`&&(y=!0),t===`intact`&&n!==`intact`&&(b=!0)}Ln.current=_.map(e=>e.status),y?(tr().play(`tower-ready`),qt(`一座幣塔已經穩固站立！`)):b&&qt(`幣塔倒塌；普通幣以前口實收計分。`),d>0&&(qt(`巨龍命中；已結算幣不重複計分。`),tr().play(`coin-big-win`)),(u||d||m||o?.revision!==l?.revision||o?.id!==l?.id||a?.phase===`reveal`&&!n.getDragonBellState())&&Jn()},[tr,hr,lr,Jn]),Lr=(0,q.useCallback)(()=>{Fn.current=null,Ln.current=G.current?G.current.getTowerManager().getSlots().map(e=>e.status):[],Mn.current=requestAnimationFrame(Ir),In.current=window.setInterval(Fr,Wl)},[Ir,Fr]),Rr=(0,q.useCallback)(async(t=!1)=>{if(!Qe(e)||fe.current)return;let n=++Tn.current;se.current=!1,R.current=!1,ge.current=!1,le.current=null,de.current=Date.now(),Oe(!1),Me.current=null,window.clearTimeout(_e.current),Mr(),sn.current.reset(),ln({}),dn(null),hn(null),Dt.current=!1,Ct(!1),Ce(!0),kn.current=!0,Ge.current=new Hc,vn.current=0,yn.current=`idle`,pn(void 0),rn(null),on(null),Je(Ge.current.snapshot(0)),Ye.current=-1/0,Yt(Bl),qt(void 0),nn(null),Te(void 0),en.current=!1,$t.current=!1,_r(),Zt(e=>e+1);let a=G.current;G.current=null,a?.dispose();try{let{CoinPusherEngine:a}=await i(async()=>{let{CoinPusherEngine:e}=await import(`./engine-D9xr9Izo.js`).then(e=>e.n);return{CoinPusherEngine:e}},__vite__mapDeps([2,3,4,5,6]));if(n!==Tn.current)return;let l;if(be){I.current??=new Hn(window.location.pathname.includes(`/qa/`)?`crusader-local-save-qa`:o.database);try{let e=await I.current.read();t&&(l=e)}catch{if(t)throw Error(`無法讀取單機存檔，原資料已保留。請重新整理重試，或確認後開始新局。`);ye({state:`error`,message:`本機儲存暫時不可用，這次進度可能無法保留。`})}}if(n!==Tn.current)return;let u=l?await a.restoreGame(l.engine):await a.create(Yl(),Hl,{dragonChance:Kl(oe),treasuryFeatures:!0});if(n!==Tn.current||fe.current||!r(e)){u.dispose();return}if(G.current=u,Un.current.reset(u.getDragonChoice(),u.getDragonBellState()),Wn.current.reset(u.getSiegeState()),l){k.current=!0;try{le.current=Gc(l),de.current=Date.now()}catch{le.current=null}F.restoreExisting(),ae(F.blocked),w.current.continueLocally(c.signInSequence),Ge.current.restoreState(l.feedback),jn.current=l.aim,Gt(l.aim),new URLSearchParams(window.location.search).has(`fromTrial`)&&(Ve.current=null,Be(null)),vn.current=u.getTreasuryState()?.rounds??0,yn.current=u.getTreasuryState()?.phase??`idle`;let e=new URL(window.location.href),t=e.searchParams.get(`autoResume`),n=!1;try{n=!!t&&window.sessionStorage.getItem(Gl)===t,t&&window.sessionStorage.removeItem(Gl)}catch{}n&&lr.armAutoFiring(),(e.searchParams.has(`fromTrial`)||t)&&(e.searchParams.delete(`fromTrial`),e.searchParams.delete(`autoResume`),window.history.replaceState(window.history.state,``,e.href)),ye({state:`saved`,message:n?`已接續試煉前進度；回到可投盤面將續投。`:`已接續上次進度；自動連投保持停止。`})}let d=!!l&&!!(u.getDragonChoice()||u.getDragonBellState()||u.getDragonBonusState())&&!en.current;ge.current=d,d||u.setDragonBonusAvailable(en.current),d&&(_e.current=window.setTimeout(()=>{ge.current&&n===Tn.current&&(ge.current=!1,u.setDragonBonusAvailable(!0),kn.current=!1,Ce(!1),_r())},s.cinematic.loadTimeoutMs)),Ce(d),kn.current=d,se.current=!0,Fr(),We.current=document.hidden||We.current,_r(),Lr(),Jn()}catch(e){if(n!==Tn.current)return;Ce(!1),Te(e instanceof Error?e.message:`無法啟動遊戲引擎，請重新整理頁面。`)}},[Lr,Mr,_r,Fr,oe,be,Jn,lr]);(0,q.useEffect)(()=>(tr().unlock(),Rr(!0),()=>{Tn.current+=1,Jn(!0),window.clearTimeout(_e.current),Mr();let e=G.current;G.current=null,e?.dispose(),Rn.current?.dispose(),Rn.current=null}),[]),(0,q.useEffect)(()=>{if(!be)return;let e=window.setInterval(()=>{Jn()},1500),t=()=>{Jn(!0)};return window.addEventListener(`pagehide`,t),()=>{window.clearInterval(e),window.removeEventListener(`pagehide`,t)}},[be,Jn]),(0,q.useEffect)(()=>{!xe&&!Ie&&a?.()},[xe,Ie,a]),(0,q.useEffect)(()=>{let e=e=>{We.current=e,Ue(e),hr(),e&&er(),_r(),e&&Jn(Date.now()-de.current>6e4)},t=()=>e(document.hidden),n=()=>{document.hidden?e(!0):hr()},r=()=>e(document.hidden);return document.addEventListener(`visibilitychange`,t),window.addEventListener(`blur`,n),window.addEventListener(`focus`,r),()=>{document.removeEventListener(`visibilitychange`,t),window.removeEventListener(`blur`,n),window.removeEventListener(`focus`,r)}},[hr,er,_r,Jn]);let zr=(0,q.useCallback)(()=>{nr();let e=!st.current;st.current=e,$e(e),H(e),tr().setMuted(e),ar()},[tr,ar,nr]),Br=(0,q.useCallback)(e=>{if(!Number.isFinite(e)||On.current||kn.current||An.current||Dt.current||At.current)return;let t=Math.max(-1,Math.min(1,e));jn.current=t,Gt(t)},[]),Vr=(0,q.useCallback)(e=>{On.current||kn.current||An.current||Dt.current||At.current||Yt(t=>zl(t,e))},[]),Hr=(0,q.useCallback)(e=>{if(Number.isFinite(e)){if(lr.isAutoFiring()){Br(e);return}ur(),Br(e),tr().unlock(),lr.handleFireStart(()=>jn.current)}},[ur,Br,tr,lr]),Ur=(0,q.useCallback)(e=>{Br(e),Vr(e)},[Br,Vr]),Wr=(0,q.useCallback)(e=>{if(z.current)return;let t=G.current;if(t)try{t.debugForceTowerEvent(e),qt(`測試模式：已強制排入 ${e} 座幣塔建造。`)}catch{qt(`測試模式：已有建塔事件進行中，請稍候再試。`)}},[]),Gr=(0,q.useCallback)(()=>{let e=G.current;if(!e)return{coins:[],pusherZ:0,aim:jn.current};let t=e.getRenderState();return{coins:t.coins,pusherZ:t.pusher.position.z,aim:jn.current,hatches:t.hatches,dragonBonus:t.dragonBonus,treasury:t.treasury,dragonChoice:t.dragonChoice,dragonBells:t.dragonBells,bonusAutoSelection:sn.current.selection(),siege:e.getSiegeState(),elapsedSeconds:t.elapsedSeconds,boardFeedback:Ge.current.snapshot(t.elapsedSeconds),openingHatches:t.towers.filter(e=>e.status===`opening`).map(e=>e.index)}},[]),Kr=(0,q.useCallback)(e=>{if(!z.current){if(ge.current){en.current=e,e&&(ge.current=!1,window.clearTimeout(_e.current),G.current?.setDragonBonusAvailable(!0),kn.current=!1,Ce(!1),_r());return}en.current=e,(e||!G.current?.getDragonChoice()&&!G.current?.getDragonBellState()&&!G.current?.getDragonBonusState())&&G.current?.setDragonBonusAvailable(e)}},[_r]),qr=(0,q.useCallback)(e=>{z.current||!oe||On.current||An.current||qt(G.current?.debugForceDragon(e)?`巨龍 BONUS`:`BONUS：需素材備妥、建塔結束且場上有完整幣塔。`)},[oe]),Yr=(0,q.useCallback)(()=>{Pe(void 0)},[]),Xr=(0,q.useCallback)(e=>{Pe(e),An.current=!0,On.current=!0,hr(),er(),G.current?.pause(),U(!0),!$t.current&&!Ve.current&&($t.current=!0,_t(`low`),Zt(e=>e+1))},[hr,er]),Zr=(0,q.useCallback)(async()=>{if(!je.current){je.current=!0,z.current=!0,R.current=!0,Mr(),G.current?.pause(),Ae(!0);try{if(se.current&&await Kn(),fe.current){let{commitAccountRoute:t}=await i(async()=>{let{commitAccountRoute:e}=await import(`./gameHost-m7_8YWH9.js`).then(e=>e.r);return{commitAccountRoute:e}},__vite__mapDeps([7,3,4,5,8,9]));t(window.sessionStorage,e,null)}e&&re(window.sessionStorage,e),window.location.reload()}catch{Oe(!0),Te(`目前盤面的備份尚未成功，已保留在此頁。請勿關閉或清除資料；可再按「讀取最新進度」重試。`),Ae(!1),je.current=!1}}},[e,Kn,Mr]);(0,q.useEffect)(()=>C(e,()=>{pe.current||(fe.current=!0,Mr(),qn(),Te(`登入身分已變更，已暫停本頁。請讀取最新進度重新確認帳號；原帳號盤面會先保留備份，不會開始新局。`))}),[e,Mr,qn]),(0,q.useEffect)(()=>{let e=e=>{e.persisted&&be&&Zr()};return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)},[be,Zr]);async function ni(t){let n=G.current,r=I.current;if(e!==null||B.current||R.current||!n||!r||!se.current)return;B.current=!0,z.current=!0,u(!0),D(!1),M(null),f(`正在接續進度…`);let a=p.current.begin();_(!0),Mr(),_r();let o=++N.current,s=Tn.current,c=()=>p.current.current(a)&&N.current===o&&Tn.current===s&&!R.current;try{await r.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let e=await r.archive(Sn.current),{inspectLoginProgress:o,commitLoginProgress:l}=await i(async()=>{let{inspectLoginProgress:e,commitLoginProgress:t}=await import(`./loginProgressRuntime-DOz7gxp_.js`);return{inspectLoginProgress:e,commitLoginProgress:t}},__vite__mapDeps([10,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,18,19,20,1,21,22])),d=await o(t,e,(k.current||F.phase===`play`)&&li(e,Hl),c,()=>r.assertCurrent());if(!c())return;if(p.current.commit(a),_(!1),d.choices.length===1){await l(t,d,d.choices[0],c,()=>r.assertCurrent()),re(window.sessionStorage,t),window.location.reload();return}M({uid:t,generation:s,plan:d}),u(!1),f(`找到不同進度，請選擇要接續的一份。`);return}catch(e){if(!p.current.current(a))return;p.current.finish(a),_(!1),e instanceof Bn?qn():(D(!0),f(`尚未接續成功；原盤面保留，可重試或先玩。`))}B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}async function ri(){if(p.current.cancel()){N.current++,_(!1),h(!1);try{if(!I.current||R.current||!r(e))throw Error(`Local owner unavailable`);await I.current.assertCurrent(),u(!1),f(`已返回原盤面，稍後可再接續。`),D(e===null),x(null),M(null),w.current.continueLocally(c.signInSequence),F.continue(),ae(!1),B.current=!1,z.current=!1,Lr(),_r()}catch{u(!1),B.current=!1,qn(),f(`本機進度需要重新確認，暫不返回遊戲。`)}}}async function ii(){let t=e,n=I.current,a=G.current;if(!t||!r(t)||!n||!a||B.current||R.current)return;B.current=!0,z.current=!0,u(!0),f(`正在讀取兩份進度…`),Mr(),_r();let o=p.current.begin();_(!0);let s=()=>p.current.current(o)&&r(t)&&!R.current;try{await n.write({format:`crusader-session-1`,savedAt:Date.now(),engine:a.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let e=await n.archive(Sn.current),{transport:r}=await i(async()=>{let{transport:e}=await import(`./cloudActions-wbrkYwGq.js`);return{transport:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21])),c=await(await r(t,s)).read();if(!s())return;if(!c)throw Error(`No cloud checkpoint`);if(await n.assertCurrent(),!s())return;p.current.commit(o),_(!1),x({local:e,remote:c}),u(!1),f(``)}catch(e){if(!p.current.current(o))return;p.current.finish(o),_(!1),e instanceof Bn&&qn(),f(`無法讀取比較資料，尚未替換任何進度。`),u(!1),B.current=!1,R.current||(z.current=!1,Lr(),_r())}}function ai(){l||(x(null),f(``),B.current=!1,R.current||(z.current=!1,Lr(),_r()))}async function oi(t){if(!b||!e||l||R.current)return;let n=b,a=e;u(!0),f(`正在備份並接續所選進度…`);try{let{resolveCloudPreview:e}=await i(async()=>{let{resolveCloudPreview:e}=await import(`./cloudActions-wbrkYwGq.js`);return{resolveCloudPreview:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));if(await e(a,n,t,()=>!R.current&&r(a))===`reload`){window.location.reload();return}f(`所選進度已備份至雲端。`)}catch(e){e instanceof Bn&&qn(),f(`進度已變更或備份未完成，請重新比較後再選擇。`)}x(null),u(!1),B.current=!1,R.current||(z.current=!1,Lr(),_r())}async function si(){let t=G.current,n=I.current;if(!(B.current||l||!t||!n||R.current)){B.current=!0,z.current=!0,u(!0),Mr(),_r();try{if(await n.write({format:`crusader-session-1`,savedAt:Date.now(),engine:t.saveGame(),feedback:Ge.current.saveState(),aim:jn.current}),await n.assertCurrent(),!r(e))throw Error(`Account changed`);Xn.suspend(),window.location.assign(`/crusader-coin-pusher-demo/account-delete.html`)}catch(e){e instanceof Bn&&qn(),f(`無法開啟帳號刪除頁。尚未刪除任何資料，請稍後再試。`),B.current=!1,z.current=!1,u(!1),R.current||(Xn.resume(),Lr(),_r())}}}async function Y(t=!1){let n=G.current,a=I.current;if(B.current||l||!n||!a||R.current||t&&!v)return;B.current=!0,z.current=!0,u(!0),y(!1),f(t?`正在確認本機備份…`:`正在備份並登出…`),Mr(),_r();let o=!1;try{let{firebaseIdentity:s}=await i(async()=>{let{firebaseIdentity:e}=await import(`./accountDeletionRecovery-fvMTc-ZG.js`).then(e=>e.m);return{firebaseIdentity:e}},__vite__mapDeps([3,4,5])),c=await s(),l=c.currentUser?.uid,d=()=>{if(!l||c.currentUser?.uid!==l||!r(e)||R.current)throw Error(`Sign-out owner changed`)};d(),await a.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:Ge.current.saveState(),aim:jn.current}),d();let p=t;if(!t){Yn.current=!0;try{p=await Xn.beforeSignOut()}finally{Yn.current=!1}}if(!p||t){if(e!==l)throw Error(`No active account backup`);let{preserveSignOutProgress:n}=await i(async()=>{let{preserveSignOutProgress:e}=await import(`./signOutBackup-9J_XE54b.js`);return{preserveSignOutProgress:e}},__vite__mapDeps([23,3,4,5,11,7,8,9,12,13,2,6]));if(await n(l,await a.archive(Sn.current),d),await a.assertCurrent(),d(),!t){y(!0),f(``),u(!1),B.current=!1,z.current=!1,Lr(),_r();return}}d(),await a.assertCurrent(),d(),Xn.suspend(),o=!0,t?await Promise.race([Qt(e).catch(()=>{}),new Promise(e=>setTimeout(e,5e3))]):await Fe(e),pe.current=!0;let{signOut:m}=await i(async()=>{let{signOut:e}=await import(`./index.esm-D2jqCs_E.js`);return{signOut:e}},__vite__mapDeps([0,1])),{commitAccountRoute:h}=await i(async()=>{let{commitAccountRoute:e}=await import(`./gameHost-m7_8YWH9.js`).then(e=>e.r);return{commitAccountRoute:e}},__vite__mapDeps([7,3,4,5,8,9]));d(),await m(c),h(window.sessionStorage,e,null),window.location.replace(new URL(`index.html?accountChoice=1`,window.location.href).href)}catch(t){pe.current=!1,r(e)||(fe.current=!0,qn()),t instanceof Bn&&qn(),f(`登出未完成。請先重試，暫勿關閉或清除資料。`),B.current=!1,u(!1),o&&!R.current&&Xn.resume(),R.current||(z.current=!1,Lr(),_r())}}async function ui(e){let t=A,n=I.current;if(!t||!n||l||R.current)return;let r=N.current;u(!0);try{let{commitLoginProgress:a}=await i(async()=>{let{commitLoginProgress:e}=await import(`./loginProgressRuntime-DOz7gxp_.js`);return{commitLoginProgress:e}},__vite__mapDeps([10,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,18,19,20,1,21,22]));await a(t.uid,t.plan,e,()=>N.current===r&&Tn.current===t.generation&&!R.current,()=>n.assertCurrent()),re(window.sessionStorage,t.uid),window.location.reload()}catch(e){M(null),D(!0),e instanceof Bn?qn():f(`進度已變更或接續未完成，請重試後重新確認。原盤面與備份保留。`),B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}}(0,q.useEffect)(()=>{let t=c.user;!be||e!==null||!t||t.isAnonymous||c.busy||xe||Re||Ie||!se.current||B.current||w.current.take(t.uid,c.signInSequence)&&ni(t.uid)},[c.user?.uid,c.user?.isAnonymous,c.busy,c.signInSequence,xe,Re,Ie,e,be]);let di=(0,J.jsx)(Qr,{...c,entry:ie,notice:l?void 0:c.notice,busy:c.busy||l,activeOwner:e,progressStatus:l?d||`正在處理進度…`:c.busy?void 0:d,syncNeedsAttention:Xn.state.phase===`conflict`,sync:e?Xn.state:void 0,syncRetrying:Xn.retrying,onDeleteAccount:()=>{si()},signOutWarning:v,onCancelSignOut:()=>y(!1),onSignOutLocally:()=>{Y(!0)},onCancelConnection:g&&m?()=>{ri()}:void 0,onInspectConflict:()=>{ii()},onChooseCloud:e=>{oi(e)},onCancelCloud:ai,cloudChoices:S,backups:e&&c.user?.uid===e?P:void 0,onBrowseBackups:e&&c.user?.uid===e?()=>{(async()=>{if(!(B.current||l)){u(!0);try{let{readLoginBackups:t}=await i(async()=>{let{readLoginBackups:e}=await import(`./loginBackupRecovery-BdIkU3tX.js`);return{readLoginBackups:e}},__vite__mapDeps([24,3,4,5,11,7,8,9,12,13,2,6,14])),n=await t(e);r(e)&&te(n)}catch{f(`無法讀取備份，原進度保留。`)}finally{u(!1)}}})()}:void 0,onRestoreBackup:t=>{(async()=>{let n=ee?.find(e=>e.revision===t),a=I.current,o=G.current;if(n&&e&&r(e)&&!B.current&&!l&&a&&o&&!R.current){B.current=!0,z.current=!0,u(!0),Mr(),_r();try{await a.write({format:`crusader-session-1`,savedAt:Date.now(),engine:o.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let t=await a.archive(bn),{restoreLoginBackup:s}=await i(async()=>{let{restoreLoginBackup:e}=await import(`./loginBackupRecovery-BdIkU3tX.js`);return{restoreLoginBackup:e}},__vite__mapDeps([24,3,4,5,11,7,8,9,12,13,2,6,14]));await s(e,t,n,()=>!R.current&&r(e)&&Qe(e)),window.location.reload();return}catch(e){e instanceof Bn&&qn(),f(`備份未能還原，原進度保留；請重新確認帳號後再試。`)}B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}})()},progressChoices:ne,onChooseProgress:e=>{ui(e)},onCancelProgress:()=>{l||!A||R.current||(N.current++,M(null),f(`已保留目前訪客盤面。`),w.current.continueLocally(c.signInSequence),F.continue(),ae(!1),B.current=!1,z.current=!1,Lr(),_r())},restartingSignIn:l,onRestartSignIn:c.googleRestartAvailable?()=>{(async()=>{if(!B.current&&G.current&&I.current&&se.current&&!R.current){B.current=!0,z.current=!0,u(!0),Mr(),_r();try{await I.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:G.current.saveGame(),feedback:Ge.current.saveState(),aim:jn.current}),window.location.reload()}catch(e){e instanceof Bn&&qn(),f(`盤面尚未保存成功，暫不重新載入。請保留此頁後重試。`),B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}}})()}:void 0,onRetryAdoption:E&&c.user?()=>{ni(c.user.uid)}:void 0,cloudEnabled:!0,onResolve:t=>{(async()=>{if(c.user&&e===c.user.uid&&!B.current&&G.current&&I.current&&!R.current){z.current=!0,B.current=!0,u(!0),Mr(),_r();try{let n=G.current;await I.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let r=await I.current.archive(bn),{resolveAccountProgress:a}=await i(async()=>{let{resolveAccountProgress:e}=await import(`./cloudActions-wbrkYwGq.js`);return{resolveAccountProgress:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));if(await a(e,r,t,window.localStorage)===`reload`){window.location.reload();return}f(`所選本機進度已上傳；若原有雲端版本，已先保留在本機備份。`)}catch(e){e instanceof Bn?qn():f(`操作未確認成功，或尚無可還原備份。進度與已建立的備份保留，請重新載入後重試。`)}B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}})()},onDownload:()=>{(async()=>{if(c.user&&e===null&&!B.current&&G.current&&I.current&&!R.current){z.current=!0,B.current=!0,u(!0),Mr(),_r();try{let e=G.current;await I.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let{downloadAccount:t}=await i(async()=>{let{downloadAccount:e}=await import(`./cloudActions-wbrkYwGq.js`);return{downloadAccount:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));await t(c.user.uid,window.sessionStorage,window.localStorage),window.location.reload()}catch(e){e instanceof Bn&&qn(),f(`未能接續雲端進度，或此帳號已有本機存檔；原資料保留。`),B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}}})()},onUpload:Qn,onSignOut:()=>{Y()},onActivate:!G.current||!I.current||R.current||!se.current?void 0:()=>{(async()=>{if(!B.current&&!l&&c.user&&G.current&&I.current&&!R.current){B.current=!0,z.current=!0,u(!0),Mr(),_r();try{let{firebaseIdentity:t}=await i(async()=>{let{firebaseIdentity:e}=await import(`./accountDeletionRecovery-fvMTc-ZG.js`).then(e=>e.m);return{firebaseIdentity:e}},__vite__mapDeps([3,4,5])),n=await t(),r=c.user.uid;if(n.currentUser?.uid!==r)throw Error(`Identity changed`);let a=G.current,o=I.current,s=Tn.current;await o.write({format:`crusader-session-1`,savedAt:Date.now(),engine:a.saveGame(),feedback:Ge.current.saveState(),aim:jn.current});let l=await o.archive(bn);if(n.currentUser?.uid!==r)throw Error(`Identity changed`);let{activateSyncedAccount:u}=await i(async()=>{let{activateSyncedAccount:e}=await import(`./cloudActions-wbrkYwGq.js`);return{activateSyncedAccount:e}},__vite__mapDeps([18,3,4,5,7,8,9,11,12,13,2,6,14,15,16,17,19,20,1,21]));await u(r,e,l,window.sessionStorage,window.localStorage,()=>Tn.current===s&&I.current===o&&!R.current,()=>o.assertCurrent()),F.blocked&&re(window.sessionStorage,r),window.location.reload()}catch(e){e instanceof Bn&&qn(),f(`帳號進度切換未完成；原存檔保留，請重試。`),B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}}})()}}),fi={cloudBackup:{phase:Xn.state.phase,retrying:Xn.retrying,blocked:!Qe(e)||c.busy||l,onRetry:Qn},accountSummary:[c.user?c.user.isAnonymous?`訪客身分`:`已登入`:`本機遊玩`,c.error,d,Zn].filter(Boolean).join(` · `),accountPanel:ie?void 0:di,children:!Re&&!ie&&(0,J.jsx)(Ml,{geometry:ql,readFrame:Gr,quality:gt,dragonBonusEnabled:!0,bonusFullMotion:Cn,onDragonBonusReady:Kr,cameraResetKey:yt,cabinetOverview:Ot,onCameraBusyChange:Or,onCameraOffsetChange:Et,disabled:z.current||Le||xe||!!Ie||!!tn||!!K||!!an||fn?.phase===`draining`||fn?.phase===`retracting`,onAimChange:Br,feedback:Jt,onDropRequest:jr,onSweepStart:Hr,onSweepEnd:hr,onReady:Yr,onError:Xr},Xt),wallet:jt,score:Nt,boardFeedback:Ke,rearSweepEnabled:!0,dragonBonus:tn,treasuryFeatures:{treasury:fn,paidDropsPerKey:Nn.paidDropsPerKey,choice:K,bells:an,choiceSecondsLeft:cn.tower,bellSecondsLeft:cn.bell,autoSelection:un,onChoose:(t,n)=>{!Qe(e)||z.current||sn.current.selection()||(hr(),G.current?.chooseDragonTower(t,n)?(rn(null),on(G.current.getDragonBellState()),qt(`目標已選定；自動換位後再選鐘，尚未入帳。`),Jn()):qt(`目標暫時無法選取，請確認場景已就緒。`))},onGuessBell:(t,n)=>{!Qe(e)||z.current||sn.current.selection()||(hr(),G.current?.guessDragonBell(t,n)&&(on(G.current.getDragonBellState()),Jn()))}},trophies:bn,onSelectTrophy:e=>xn(t=>T(t,e)),bonusFullMotion:Cn,onBonusFullMotionChange:wn,towerCount:Ft,pendingTowers:Lt,regeneration:zt,constructionLabel:Ht,aim:Wt,paused:Le,muted:Ze,coinSound:ct.sound,coinVolume:ct.volume,coinPreviewState:dt,onCoinSoundChange:e=>rr({sound:e}),onCoinVolumeChange:e=>rr({volume:e}),onCoinPreview:()=>void ir(),onCoinPreviewCancel:nr,quality:gt,cameraMoving:St,cameraOffset:wt,cabinetOverview:Ot,onCabinetOverviewChange:Ar,onCameraReset:Er,loading:xe,error:Ie,message:Kt,localSave:be?{...ve,onSave:()=>{ye({state:`loading`,message:`正在儲存單機進度…`}),Jn(!0)}}:void 0,trialsNavigation:be?{state:me,onOpen:()=>{Nr()}}:void 0,navigationLocked:me!==`idle`,feedback:Jt,testMode:oe,onAimChange:Ur,onFireStart:Sr,onFireEnd:Cr,onFireSuspend:hr,onFireRelease:wr,autoFiring:et,autoSpeed:rt,onAutoSpeedChange:mr,onSettingsOpenChange:e=>{En.current=e,_n(e),e&&hr(),$n()},onReplayIntro:()=>br(`intro`),onReplayHighTower:()=>{Ge.current.snapshot(0).highTowerReplayAvailable&&br(`high-tower`)},onMute:zr,onQualityChange:_t,progressRecovery:we?{busy:V,conflict:De,onRecover:()=>{Zr()}}:void 0,onRetryScene:Ne&&!we?()=>{hr(),_t(`low`),Zt(e=>e+1)}:void 0,onNewGame:()=>{z.current||(!be||window.confirm(`開始新局會取代這個瀏覽器的續玩進度（金幣、盤面、鑰匙及免費次數）。確定開始？`))&&(ur(),Rr())},...oe?{onTestTowers:Wr,onTestDragon:qr}:{}};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Vt,{navigation:me===`idle`?void 0:{destination:`trials`,failed:me===`error`,onRetry:()=>{Pr()}}}),(0,J.jsx)(`div`,{inert:!!Re||ie&&!Ie,"aria-hidden":Re||ie&&!Ie?!0:void 0,...Tt(ar),children:(0,J.jsx)(Jr,{...fi})}),ie&&!Ie&&(0,J.jsx)($r,{busy:!!A||l||c.busy&&!c.initializing,preparing:!se.current||!G.current||!I.current,accountProgress:!!e,onContinue:()=>{(async()=>{if(!(!Qe(e)||B.current||l||c.busy&&!c.initializing||!G.current||!I.current||!se.current||R.current)){B.current=!0,z.current=!0,u(!0),Mr(),_r();try{await I.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:G.current.saveGame(),feedback:Ge.current.saveState(),aim:jn.current}),await I.current.assertCurrent(),w.current.continueLocally(c.signInSequence),F.continue(),ae(!1)}catch(e){e instanceof Bn?qn():f(`尚未保存盤面，請再試一次。`)}finally{B.current=!1,u(!1),R.current||(z.current=!1,Lr(),_r())}}})()},children:di}),mn&&!Re&&!ie&&!gn&&(0,J.jsx)(Dr,{frame:mn,suspended:Le||xe||!!Ie,onAudioUnlock:ar,onStrike:(t,n)=>{let r=G.current;if(!(!Qe(e)||!r||On.current||En.current||z.current)&&r.strikeSiege(t,n)){let e=r.getSiegeState();hn(e),$n(),tr().play(e?.lastHit?`siege-hit`:`siege-miss`),Jn()}}}),Re&&(0,J.jsx)(Bc,{kind:Re.kind,suspended:He,onComplete:xr,soundEnabled:!Ze,onSoundToggle:sr,onAudioUnlock:ar,onPlaybackTime:or},Re.id)]})}export{Vl as n,Xl as t};