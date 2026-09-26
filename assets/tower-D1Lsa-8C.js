const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-D2jqCs_E.js","assets/index.esm-5hTPqsnb.js","assets/engine-C8jZNlCW.js","assets/bootstrapAccount-CQqubWkx.js","assets/accountIdentity-DYasy5kD.js","assets/towerStructures-CYt98D3g.js","assets/cloudActions-BP09TQPR.js","assets/localGameStore-C-rWveFv.js","assets/sharedRepository-BTK_hai8.js","assets/session-CLofTDMA.js","assets/session-Ccisi1bx.css","assets/gameArchive-Eb5_i5fC.js","assets/accountRecovery-CQYIwWck.js","assets/autoSyncRuntime-BN13JcC2.js"])))=>i.map(i=>d[i]);
import{C as e,E as t,O as n,S as r,T as i,_ as a,a as o,b as s,d as c,f as l,g as u,h as d,i as f,o as p,s as m,t as h,u as g,v as _,w as v,x as y}from"./bootstrapAccount-CQqubWkx.js";import{$ as b,A as x,C as S,D as C,E as w,F as T,G as E,H as D,J as O,L as k,O as A,P as j,Q as M,T as N,U as P,W as F,Y as I,Z as L,at as R,ct as ee,dt as te,et as z,ft as ne,ht as B,k as re,m as ie,mt as ae,n as oe,ot as se,pt as ce,s as le,t as ue,w as de,x as fe,z as pe}from"./towerStructures-CYt98D3g.js";import{n as me,r as he,t as ge}from"./localGameStore-C-rWveFv.js";var V=n(t(),1),_e=i(),ve=[`bell-enter`,`bell-select`,`bell-cover`,`bell-swap`,`bell-prompt`,`bell-found`,`bell-miss`],ye=e=>ve.includes(e),H=Math.PI*2;function be(e,t){let n=e===`bell-miss`?1.25:e===`bell-found`?.95:e===`bell-enter`?.9:.42,r=new Float32Array(Math.ceil(t*n)),i=0,a=7413,o=0,s={"bell-enter":146.83,"bell-select":220,"bell-cover":98,"bell-swap":180,"bell-prompt":293.66,"bell-found":293.66,"bell-miss":155.56}[e];for(let c=0;c<r.length;c++){let l=c/t,u=l/n,d=Math.min(1,l/.035)*Math.max(0,1-u)**1.7;a=Math.imul(a,1664525)+1013904223>>>0,o=o*.96+(a/4294967295*2-1)*.04;let f=e===`bell-miss`?s*(1-.38*u)*(1+.009*Math.sin(H*4*l)):e===`bell-found`?s*(u<.28?1:u<.55?1.25:1.5):s;i+=H*f/t;let p=Math.sin(i)*.65+Math.sin(i*2)*.2+Math.sin(i*3)*.1,m=e===`bell-swap`?o*1.8+Math.sin(i)*.18:e===`bell-cover`?p*.6+o*.8:e===`bell-miss`?p+Math.sin(i*1.006)*.15:p+Math.sin(i*2.76)*.08;r[c]=m*d*(e===`bell-swap`?.12:.22)}return r}function xe(e=22050){let t=Math.round(24*e),n=[new Float32Array(t),new Float32Array(t)],r=[[146.83,174.61,220],[130.81,174.61,220],[130.81,164.81,196],[110,146.83,164.81]],i=(r,i,a,o,s,c)=>{for(let l=0;l<i*e;l++){let u=l/e,d=u/i,f=(Math.round(r*e)+l)%t,p=c?Math.min(1,u/.012)*Math.exp(-4*d)*(1-d):Math.sin(Math.PI*d)**2,m=H*a*u,h=Math.sin(m)*.7+Math.sin(m*2+.08*Math.sin(H*.7*u))*.16+Math.sin(m*3)*.045;n[0][f]+=h*p*o*Math.sqrt((1-s)/2),n[1][f]+=h*p*o*Math.sqrt((1+s)/2)}};for(let e=0;e<4;e++){let t=r[e];t.forEach((t,n)=>i(e*6,8,t/2,.075,(n-1)*.6,!1));for(let n=0;n<8;n++)i(e*6+n*.75,1.4,t[[0,2,1,2,0,1,2,1][n]]*2,.065,n%2?.4:-.4,!0);i(e*6,1.8,55,.09,0,!0),i(e*6+3,1.2,73.415,.04,0,!0)}return[...n]}var Se=[`siege-enter`,`siege-hit`,`siege-miss`,`siege-push`,`siege-clear`],Ce=e=>Se.includes(e);function we(e,t){let n=e===`siege-clear`?1.4:e===`siege-enter`?1.2:.65,r=new Float32Array(Math.ceil(n*t)),i=0,a=81537,o=0;for(let s=0;s<r.length;s++){let c=s/t,l=c/n;a=Math.imul(a,1664525)+1013904223>>>0,o=.9*o+.1*(a/4294967295*2-1);let u=e===`siege-hit`||e===`siege-clear`;i+=Math.PI*2*(u?98:65)*(1+.8*Math.exp(-c*30))/t;let d=Math.sin(i)*Math.exp(-c*7)+o*.8*Math.exp(-c*22),f=u?(Math.sin(c*2*Math.PI*196)+.45*Math.sin(c*2*Math.PI*293.66))*.22*Math.exp(-c*2):0;r[s]=(d*.45+f)*Math.min(1,c/.006)*(1-l)**1.5*.7}return r}function Te(e=22050){let t=Math.round(9.6*e),n=new Float32Array(t),r=new Float32Array(t),i=we(`siege-push`,e);for(let a=0;a<16;a++)for(let o=0;o<i.length;o++){let s=(Math.round(a*.6*e)+o)%t,c=i[o]*(a%4==0?.55:.25);n[s]+=c,r[s]+=c}for(let i=0;i<t;i++){let t=i/e,a=[73.415,65.406,58.27,65.406][Math.floor(t/2.4)],o=Math.sin(t%2.4*Math.PI/2.4)**2,s=(Math.sin(2*Math.PI*a*t)+.3*Math.sin(2*Math.PI*a*1.5*t))*.06*o;n[i]+=s,r[i]+=s*.94}return[n,r]}var Ee=e=>e===`game`||e===`bells`||e===`siege`,De={intro:`./assets/audio/treasury-intro-v1.wav`,game:`./assets/audio/treasury-game-loop-v1.wav`,dragon:`./assets/audio/treasury-dragon-v1.wav`},Oe=class{ctx;output;buffers=new Map;loading=new Set;failed=new Set;active=null;retiring=new Set;track=null;offset=0;suspended=!1;muted=!1;ducked=!1;disposed=!1;constructor(e,t){this.ctx=e,this.output=t}setTrack(e,t){this.disposed||(e!==this.track&&(this.fadeOut(),this.track=e,this.offset=0),t!==void 0&&Number.isFinite(t)&&(this.offset=Math.max(0,t),this.active&&Math.abs(this.position()-this.offset)>.3&&this.stopCurrent()),e&&!this.buffers.has(e)&&this.load(e),this.refresh())}async load(e){if(!(this.loading.has(e)||this.failed.has(e))){this.loading.add(e);try{if(e===`bells`||e===`siege`){let t=e===`siege`?Te():xe(),n=this.ctx.createBuffer(2,t[0].length,22050);t.forEach((e,t)=>n.getChannelData(t).set(e)),this.buffers.set(e,n),this.refresh();return}let t=await fetch(De[e]);if(!t.ok)throw Error(`Music asset unavailable`);let n=await t.arrayBuffer();if(this.disposed)return;let r=await this.ctx.decodeAudioData(n);if(this.disposed)return;this.buffers.set(e,r),this.refresh()}catch{this.disposed||this.failed.add(e)}finally{this.loading.delete(e)}}}setSuspended(e){e!==this.suspended&&(e&&this.freeze(),this.suspended=e,this.refresh())}setMuted(e){e!==this.muted&&(e&&this.freeze(),this.muted=e,this.refresh())}setDucked(e){this.ducked=e,this.active&&this.ramp(this.active,this.volume(),.12)}volume(){return(this.track===`siege`?.45:this.track===`bells`||this.track===`game`?.38:.8)*(this.ducked?.23:1)}position(){if(!this.active)return this.offset;let e=this.active.offset+Math.max(0,this.ctx.currentTime-this.active.started),t=this.buffers.get(this.active.track)?.duration??1;return Ee(this.active.track)?e%t:e}ramp(e,t,n){let r=e.gain.gain,i=this.ctx.currentTime;r.cancelScheduledValues(i),r.setValueAtTime(r.value,i),r.linearRampToValueAtTime(t,i+n)}cleanup(e,t=!0){if(e.source.onended=null,t)try{e.source.stop()}catch{}e.source.disconnect(),e.gain.disconnect(),this.retiring.delete(e),this.active===e&&(this.active=null)}stopCurrent(){this.active&&this.cleanup(this.active)}fadeOut(){for(let e of[...this.retiring])this.cleanup(e);let e=this.active;if(e){this.active=null,this.retiring.add(e),this.ramp(e,0,.22);try{e.source.stop(this.ctx.currentTime+.23)}catch{this.cleanup(e)}}}freeze(){this.offset=this.position(),this.stopCurrent();for(let e of[...this.retiring])this.cleanup(e)}refresh(){if(this.disposed||this.muted||this.suspended||!this.track||this.active||this.ctx.state!==`running`)return;let e=this.buffers.get(this.track);if(!e||!Ee(this.track)&&this.offset>=e.duration)return;let t=this.ctx.createBufferSource(),n=this.ctx.createGain(),r=Ee(this.track)?this.offset%e.duration:this.offset;t.buffer=e,t.loop=Ee(this.track),t.connect(n),n.connect(this.output),n.gain.value=0;let i={source:t,gain:n,track:this.track,offset:r,started:this.ctx.currentTime};this.active=i,t.onended=()=>{this.active===i&&(this.offset=Ee(i.track)?this.position():e.duration),this.cleanup(i,!1)};try{t.start(0,r),this.ramp(i,this.volume(),.3)}catch{this.cleanup(i)}}getState(){return{track:this.track,playing:this.active?.track??null,offset:this.position(),voices:Number(!!this.active)+this.retiring.size,suspended:this.suspended,muted:this.muted,ducked:this.ducked,loaded:[...this.buffers.keys()],failed:[...this.failed]}}dispose(){this.disposed||(this.disposed=!0,this.freeze(),this.buffers.clear())}};function ke(e){let t=new Float32Array(Math.ceil(e*1.15)),n=7123,r=0,i=0;for(let a=0;a<t.length;a++){let o=a/e;n=Math.imul(n,1664525)+1013904223>>>0,r+=(n/4294967295*2-1-r)*.06,i+=2*Math.PI*(42+48*Math.exp(-o*6))/e;let s=Math.min(1,o/.012),c=Math.min(1,(1.15-o)/.15);t[a]=s*c*(.09*Math.sin(i)*Math.exp(-o*5)+.12*r*Math.exp(-o*3))}return t}var Ae=[{id:`soft`,label:`柔和落槽`,sample:`coin-soft`,file:`./assets/audio/coin-soft-slot-v1.wav`},{id:`dry`,label:`乾脆短點`,sample:`coin-dry-click`,file:`./assets/audio/coin-dry-click-v1.wav`},{id:`metal`,label:`原金屬聲（低音量）`,sample:`coin-drop`,file:`./assets/audio/coin-insert-v2.wav`}],je=.32,Me={sound:`soft`,volume:.5},Ne=`crusader.coin-audio.v1`,Pe=e=>Ae.some(t=>t.id===e),Fe=e=>Number.isFinite(e)?Math.max(0,Math.min(1,e)):Me.volume;function Ie(){try{let e=JSON.parse(localStorage.getItem(Ne)??`null`);return{sound:Pe(e?.sound)?e.sound:Me.sound,volume:typeof e?.volume==`number`?Fe(e.volume):Me.volume}}catch{return{...Me}}}function Le(e){try{localStorage.setItem(Ne,JSON.stringify(e))}catch{}}var Re={"coin-drop":`./assets/audio/coin-insert-v2.wav`,"coin-collect":`./assets/audio/coin-collect.wav`,"tower-ready":`./assets/audio/tower-ready.wav`,"coin-big-win":`./assets/audio/coin-big-win-c.wav`,"coin-soft":`./assets/audio/coin-soft-slot-v1.wav`,"coin-dry-click":`./assets/audio/coin-dry-click-v1.wav`},ze=6,Be=class{ctx=null;masterGain=null;buffers=new Map;loadPromise=null;coinSound=Me.sound;coinVolume=Me.volume;loadStarted=!1;voices=new Map;muted=!1;disposed=!1;music=null;musicTrack=null;musicPosition;musicSuspended=!1;dropVariant=0;syncContextState=()=>{if(this.disposed||!this.ctx)return;let e=this.ctx.state===`running`;e||this.stopAll(),this.music?.setSuspended(this.musicSuspended||!e),e&&this.music?.refresh()};unlock(){if(!this.disposed){if(!this.ctx)try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=+!this.muted,this.masterGain.connect(this.ctx.destination),this.music=new Oe(this.ctx,this.masterGain),this.ctx.onstatechange=this.syncContextState,this.music.setMuted(this.muted),this.music.setSuspended(this.musicSuspended||this.ctx.state!==`running`),this.music.setTrack(this.musicTrack,this.musicPosition)}catch{this.ctx=null,this.masterGain=null;return}if(this.syncContextState(),this.ctx.state!==`running`&&this.ctx.state!==`closed`){let e=this.ctx;e.resume().then(()=>{!this.disposed&&this.ctx===e&&this.syncContextState()}).catch(()=>{})}this.loadStarted||(this.loadStarted=!0,this.loadPromise=this.loadAll().catch(()=>{}))}}setMuted(e){this.muted=e,this.masterGain&&(this.masterGain.gain.value=+!e),e&&this.stopAll(),this.music?.setMuted(e)}setCoinSound(e){Pe(e)&&e!==this.coinSound&&(this.stopCoinDrop(),this.coinSound=e)}setCoinVolume(e){this.coinVolume=Fe(e);let t=[...this.voices.values()].some(e=>e.name===`coin-big-win`);this.voices.forEach(e=>{e.name===`coin-drop`&&(e.gain.gain.value=this.coinVolume*je*(t?.3:1))})}stopCoinDrop(){for(let[e,t]of this.voices)t.name===`coin-drop`&&this.stopVoice(e)}async prepareCoinSound(){if(!this.ctx||this.disposed)return!1;if(this.buffers.has(Ae.find(e=>e.id===this.coinSound).sample))return!0;let e;try{return await Promise.race([this.loadPromise,new Promise(t=>{e=setTimeout(t,4e3)})]),!this.disposed&&this.buffers.has(Ae.find(e=>e.id===this.coinSound).sample)}finally{clearTimeout(e)}}setMusic(e,t){this.musicTrack=e,this.musicPosition=t,this.music?.setTrack(e,t)}setMusicSuspended(e){this.musicSuspended=e,this.music?.setSuspended(e||this.ctx?.state!==`running`)}async loadAll(){let e=this.ctx;e&&await Promise.all(Object.keys(Re).map(async t=>{try{let n=await fetch(Re[t]);if(!n.ok)return;let r=await n.arrayBuffer();if(this.disposed)return;let i=await e.decodeAudioData(r);if(this.disposed)return;this.buffers.set(t,i)}catch{}}))}play(e){if(this.disposed||this.muted||!this.ctx||!this.masterGain||this.ctx.state!==`running`||e===`coin-drop`&&this.coinVolume===0)return!1;if((e===`tower-collapse`||ye(e)||Ce(e))&&!this.buffers.has(e))try{let t=e===`tower-collapse`?ke(this.ctx.sampleRate):Ce(e)?we(e,this.ctx.sampleRate):be(e,this.ctx.sampleRate),n=this.ctx.createBuffer(1,t.length,this.ctx.sampleRate);n.getChannelData(0).set(t),this.buffers.set(e,n)}catch{return!1}let t=this.buffers.get(e===`coin-drop`?Ae.find(e=>e.id===this.coinSound).sample:e);if(!t)return!1;let n=[...this.voices.values()].some(e=>e.name===`coin-big-win`);if(n&&e!==`coin-drop`)return!1;if(e===`coin-drop`){let e=[...this.voices].filter(([,e])=>e.name===`coin-drop`);for(;e.length>=2;)this.stopVoice(e.shift()[0])}if(e===`coin-big-win`)this.stopAll();else if(this.voices.size>=ze)return!1;let r=this.ctx.createBufferSource(),i=this.ctx.createGain();r.buffer=t,e===`coin-drop`&&(r.playbackRate.value=[1,.97,1.035,1.015][this.dropVariant++%4]),i.gain.value=e===`coin-drop`?this.coinVolume*je*(n?.3:1):1,r.connect(i),i.connect(this.masterGain),this.voices.set(r,{name:e,gain:i}),r.onended=()=>{this.voices.delete(r)&&(r.disconnect(),i.disconnect(),e===`coin-big-win`&&this.music?.setDucked(!1))};try{return r.start(),e===`coin-big-win`&&this.music?.setDucked(!0),!0}catch{return this.stopVoice(r),!1}}stopVoice(e){let t=this.voices.get(e);if(t){this.voices.delete(e),e.onended=null;try{e.stop()}catch{}e.disconnect(),t.gain.disconnect()}}stopAll(){for(let e of this.voices.keys())this.stopVoice(e);this.music?.setDucked(!1)}getPlaybackState(){return{loaded:[...this.buffers.keys()],playing:[...this.voices.values()].map(e=>e.name),contextState:this.ctx?.state??`locked`,muted:this.muted,music:this.music?.getState()??null,coinSound:this.coinSound,coinVolume:this.coinVolume,coinGain:this.coinVolume*je}}dispose(){this.disposed=!0,this.stopAll(),this.music?.dispose(),this.music=null,this.ctx&&(this.ctx.onstatechange=null),this.ctx?.close().catch(()=>{}),this.ctx=null,this.masterGain=null,this.buffers.clear(),this.loadStarted=!1}},Ve=(e,t)=>t?`${t.id}:${t.phase}:${t.bellSlots.join()}:${t.swap?.a}:${t.swap?.b}`:e?`choice:${e.id}`:``,He=class{previous=``;pendingResult=null;reset(e,t){this.previous=Ve(e,t),this.pendingResult=null}observe(e,t){let n=Ve(e,t),r=[];return n!==this.previous&&(this.previous=n,this.pendingResult=null,!t&&e?r.push(`bell-enter`):t?.phase===`show`?r.push(`bell-select`):t?.phase===`cover`?r.push(`bell-cover`):t?.phase===`shuffle`?r.push(`bell-swap`):t?.phase===`guess`?r.push(`bell-prompt`):t?.phase===`reveal`&&(this.pendingResult=t.id)),t?.phase===`reveal`&&this.pendingResult===t.id&&t.elapsed>=.24&&t.won!==null&&(r.push(t.won?`bell-found`:`bell-miss`),this.pendingResult=null),r}},U={siege:{css:{"--siege-drum-art":`url('./assets/siege/war-drum-v1.png')`,"--siege-width":`440px`,"--siege-drum":`104px`,"--siege-bottom":`clamp(106px, 15vh, 164px)`,"--siege-track":`16px`,"--siege-layer":`35`},hitScale:1.045,hitSeconds:.24,interpolationLimit:.25},introVideo:{enabled:!0,wide:`assets/cinematics/treasury-intro-wide-v1.mp4`,portrait:`assets/cinematics/treasury-intro-portrait-v1.mp4`,stallTimeoutMs:8e3,errorReturnMs:1600,pollMs:250},boardFeedback:{recordLimit:16,mergeGapMs:1200,mergeMaxMs:3e3,receiptMs:2600,collapseMs:2e3,frontPulseMs:500,collectSoundGapMs:160,lineLift:.006,lineWidth:.008,sideBandWidth:.032,sideEndInset:.035,sideBandOpacity:.85,sideStripePitch:.055,sideStripeDepth:.012,sideStripeSlant:.018,idleOpacity:.38,activeOpacity:.95,lossOpacity:.55,frontColor:`#fff0ae`,paidColor:`#74e6ff`,lossColor:`#dca97c`,paidRingScale:1.12,paidRingTube:.0018,collapseScale:1.25},cabinetHousing:{geometry:{sideClearance:.15,postWidth:.105,postDepth:.115,backSetback:.17,frontExtension:.24,floorY:-1.06,baseTopY:-.29,chamberTopY:1.12,marqueeHeight:.36,marqueeDepth:.16,archRise:.18,trim:.014,panelThickness:.04,footHeight:.06,ledgeDepth:.2,ledgeHeight:.065,bevel:.008,bevelSegments:2,curveSegments:20,medallionRadius:.2,shieldDepth:.018,lightWidth:.008,rearSealRadius:.24,rearSealY:.65,bannerWidth:.24,bannerHeight:.22,bannerOffset:.7,bannerCenterY:.47,bannerPointRatio:.22,bannerFaceScale:.86,bannerShieldScale:.53,ventCount:7,ventSpacing:.032,ventWidth:.21,rivetRadius:.006,labelWidth:1024,labelHeight:256},materials:{bodyMetalness:.7,bodyRoughness:.36,brassRoughness:.3,enamelMetalness:.38,enamelRoughness:.26,glassOpacity:.065,glassRoughness:.12,lightIntensity:2,labelIntensity:.45,sealIntensity:.12,bannerColor:`#8c2635`,bannerRoughness:.8,bannerMetalness:.05,bannerEmissiveIntensity:.28},camera:{yaw:.22,pitch:.19,margin:1.09,transitionSeconds:.8},label:{titleSize:116,subtitleSize:26,titleY:.49,subtitleY:.86}},cinematic:{loadTimeoutMs:3e4,dragon:{impactSeconds:1.9,enterSeconds:.2,exitSeconds:3.85,settleSeconds:4.65,captionStart:2.65,captionEnd:3.2,startX:-3.8,startY:2.1,startZ:-4.5,hitX:-.52,hitY:.78,hitZ:.04,hitScale:.52,exitX:7.5,exitY:2.1,exitZ:3,startScale:.34,exitScale:.6,startYaw:-2.55,hitYaw:-1.92,exitYaw:-1.95,startBank:-.08,exitBank:.12,startPoseTime:.3,hitPoseTime:3.7,exitPoseTime:7.5,muzzleLocal:[0,-.1,-1.1],stillSeconds:1.35,cameraShake:.055,shakeDecay:7,shakeFrequency:55,towerX:.18,towerPush:2.2,towerSpread:.9,gravity:2.5,coinColor:`#dbad56`,coinEmissive:`#755021`,coinEmissiveIntensity:.3,ambient:1.65,keyIntensity:2.8,rimIntensity:1.6,portraitScale:.8,flashIntensity:6,flashDistance:9},doors:{faceAsset:`./assets/cinematics/vault-door-face-v1.lossless.webp`,wallAsset:`./assets/treasury-vault-v1.lossless.webp`,wallArtWidth:21,wallArtHeight:11.82,wallArtCenterY:-1.47,stoneColor:`#887359`,stoneSize:128,stoneRepeatWorld:3.2,stoneRows:4,stoneColumns:2,stoneGroutPx:2,stoneGroutValue:.43,stoneValue:.86,stoneNoise:.12,stoneRoughness:.92,stoneBump:.045,pillarRadius:.3,pillarOffset:.8,pillarHeight:7.8,pillarSegments:16,pillarRimHeight:.15,pillarRimScale:1.25,sconceY:.4,sconceZ:.95,sconceRadius:.095,sconceIntensity:4.2,sconceDistance:8,sconceDecay:1.5,openStart:4,openEnd:9,pushStart:9,openDegrees:96,width:6.8,height:7.2,thickness:.28,seamOverlap:.006,frameWidth:.23,frameDepth:.48,wallExtent:45,cameraMargin:1.08,approachFraction:.16,endCameraZ:-1.1,startCameraY:0,endCameraY:-.4,lookDistance:7,faceLift:.006,innerRail:.065,railInset:.12,hingeRadius:.075,hingeHeight:.52,hingeSpacing:2.4,sealRadius:1.25,sealY:.85,sealTube:.025,sealLift:.03,hingeSegments:12,sealSegments:48,boltRadius:.04,boltSegments:8,boltInset:.24,boltRows:7,faceRoughness:.63,faceMetalness:.54,sealEmissive:.17,lightStart:1.5,lightEnd:5.2,lightDistance:18,lightPosition:[0,1.4,-3.2],lightDecay:1.5,treasureCoinCount:240,treasureCoinScale:.68,treasureFloor:-3.38,treasureZ:-6.4,treasureSpreadX:2.2,treasureSpreadZ:1.5,treasurePileHeight:1.35,treasureTilt:.3,sparkFadeStart:5,sparkFadeEnd:8,textureTimeoutMs:4e3,coinEnterStart:1.8,coinEnterEnd:3,coinSealStart:3.5,coinSealEnd:4.4,keyCoinScale:2.4,keyCoinFrontZ:1.6,keyCoinSealZ:.3,goldenAngle:2.399963,pileJitter:.06,coinMetalness:.55,exposure:1.1,ambient:2,keyIntensity:3.2,keyPosition:[-3,5,4],rimIntensity:2,rimPosition:[3,2,-2],sparkCount:120,sparkSize:.022,sparkOpacity:.5,sparkSpreadX:5,sparkSpreadY:3,sparkSpreadZ:2,sparkZ:-3,sparkRotation:.035,sparkRise:.06},introSeconds:13.5,winSeconds:5.2,reducedWinSeconds:3.2,introCuts:[4,8.5],returnAsset:`./assets/cinematics/vault-return-v1.lossless.webp`,revealAsset:`./assets/cinematics/vault-reveal-v1.lossless.webp`,treasureAsset:`./assets/cinematics/vault-treasure-v2.lossless.webp`,doorAsset:`./assets/cinematics/vault-door-face-v1.lossless.webp`,fov:38,near:.1,far:60,cameraZ:8,portraitCameraZ:12,coinRadius:.22,coinHeight:.038,coinSegments:32,ringRadius:.48,towerLayers:64,towerRing:6,towerPitch:.043,pixelRatio:1.5,css:{"--film-knight-caption-top":`clamp(80px, 18vh, 170px)`,"--film-knight-shade":`linear-gradient(180deg, #080a0d60, transparent 32%, #080a0d12 65%, #080a0d66)`,"--film-title":`clamp(28px, 5.5vw, 68px)`,"--film-copy":`clamp(15px, 2vw, 21px)`,"--film-pad":`clamp(16px, 3vw, 40px)`,"--film-touch":`48px`,"--film-caption-width":`840px`,"--film-z":`100`,"--film-letter":`0.13em`,"--film-shadow":`0 2px 18px #000, 0 1px 4px #000`,"--film-compact-title":`26px`,"--film-compact-copy":`14px`,"--film-compact-space":`5px`,"--film-compact-bottom":`12px`,"--film-shade":`linear-gradient(180deg, #080a0d60, transparent 30%, #080a0d33 55%, #080a0df5)`,"--film-button":`#090c10c9`,"--film-space":`12px`,"--film-caption-bottom":`clamp(20px, 6vh, 64px)`}},layout:{mobileBreakpoint:`760px`,desktopBreakpoint:`761px`,tabletBreakpoint:`1080px`,compactBreakpoint:`360px`,shortLandscapeHeight:`500px`},treasuryHUD:{aimNudge:.1,aimMinimum:-1,aimMaximum:1,aimRangeStep:.02},cameraViews:{overheadPitch:4.8,sidePitch:1.3,sideYaw:.48,transitionSeconds:.48},cameraOrbit:{yawLimit:.82,minElevation:.5,maxElevation:1.37,yawSensitivity:2.2,elevationSensitivity:1.8,minDragExtent:320},motion:{entranceSeconds:.38,panelSeconds:.22,feedbackSeconds:.24,collectSeconds:.36,entranceY:8,panelY:6,acceptedScale:1.04,blockedScale:.97,collectScale:1.08,restScale:1,restY:0,visibleOpacity:1,expiredOpacity:0,ease:`power2.out`,ringEase:`power1.out`},interaction:{autoFireHoldMs:700,tapSlopPx:8,feedbackPulseMs:240,feedbackPulseScale:1.18,previewOpacity:.45,aimOutlineScale:1.22,aimOutlineTube:.0045,aimColor:`#74e6ff`,aimOutlineColor:`#082b38`,acceptedColor:`#fff0ae`,blockedColor:`#ffb6a8`},premium:{colors:{champagne:`#a58a57`,edge:`#eed6a5`,coin:`#ffeab4`,coinSide:`#b78a43`,steel:`#797f85`,gunmetal:`#252931`,black:`#090d12`,enamel:`#4b1220`,glass:`#a0c7dc`,light:`#fff0d5`,fill:`#c3d0e5`,white:`#ffffff`,brushBase:`#a9aaa8`,brushLine:`#d3d1c9`},materials:{metalness:.93,darkMetalness:.45,crestMetalness:.3,goldRoughness:.31,steelRoughness:.3,darkRoughness:.4,coinRoughness:.34,coinBump:55e-5,glassOpacity:.14,glassRoughness:.08,enamelRoughness:.22,enamelMetalness:.25,clearcoat:.85,envIntensity:1.25,coinShadeMin:.94,coinShadeRange:.06},geometry:{rim:.024,bevel:.006,bevelSegments:2,segments:32,coinHeightSegments:4,coinBevelRadius:.94,coinBevelThreshold:.75,bodyDepth:.2,trayDepth:.16,trayDrop:.14,wingWidth:.13,wingHeight:.62,rearHeight:.72,rearOffset:.065,postWidth:.055,glassOffset:.065,glassThickness:.008,glassHeight:.33,boltRadius:.009,boltSegments:8,boltCount:11,badgeRadius:.062,badgeTube:.005,badgeStep:.22,badgeY:.51,badgeOffset:.028,emblemWidth:.07,emblemHeight:.11,emblemOffset:.015,archRadius:.5,archTube:.009,archY:.15,archSegments:64,stripeThickness:.004,insetDepth:.008,panelInset:.07,sideCrestScale:1.65,sideCrestY:.4},lighting:{ambient:.9,key:2.1,fill:1.05,rim:1.15,exposure:.96,keyPosition:[-1.5,3.5,1.8],fillPosition:[2,1.7,.8],rimPosition:[0,2,-2],environmentBlur:.1},camera:{fov:34,pitch:.82,portraitPitch:1.15,near:.05,far:30,margin:1.025,targetY:.17,targetZBias:.04,portraitAspect:1,frameTop:.45,frameSideExtra:.18,portraitFrameSideExtra:.15},studio:{background:`#746a5b`,panelIntensity:2.2,panels:[{size:[3.2,2,.02],position:[0,3,0],rotation:[-1.570796,0,0]},{size:[.9,2.5,.02],position:[-2,1,.5],rotation:[0,1.1,0]},{size:[1.2,2,.02],position:[2,1,-.5],rotation:[0,-1.1,0]},{size:[3.6,1.6,.02],position:[0,1.8,2],rotation:[-.5,0,0]}]},texture:{brushSize:256,brushLines:1100,brushOpacity:.11,brushRepeat:5,anisotropy:4,coinEdgeRepeat:3},effects:{aimTube:.0025,aimRadiusScale:1.3,aimOpacity:.9,shadowBias:-25e-5,shadowNormalBias:.007,shadowExtent:2.2,aimSurfaceOffset:.003}},treasuryScene:{colors:{ivory:`#ddd3b4`,cross:`#7c1726`,recess:`#111720`,steelInset:`#777a7d`,warmTrim:`#b49a69`,edgeLight:`#83b8ce`},materials:{etchedBump:.0022,etchedRoughness:.4,etchedMetalness:.76,etchedEnvironmentIntensity:.65,trimRoughness:.34,ivoryRoughness:.56,crossRoughness:.3,shieldMetalness:.26,recessRoughness:.6,coinSideRoughness:.43},geometry:{rearFasciaHeight:.14,rearFasciaDepth:.042,rearCopingHeight:.016,frameWidth:.145,frameHeight:.17,frameTrim:.01,frameInset:.024,columnWidth:.125,columnDepth:.13,columnHeight:.43,columnForwardFraction:.72,columnCap:.024,columnChannelWidth:.072,columnChannelDepth:.012,shieldWidth:.14,shieldHeight:.2,shieldY:.26,shieldDepth:.009,shieldBevel:.003,shieldFaceScale:.82,shieldFaceLift:.012,shieldTipControl:.32,shieldShoulderControl:.08,shieldShoulderY:.2,crossWidth:.085,crossHeight:.14,crossStroke:.023,crossArmY:.026,crossRelief:.007,bossRadius:.008,bossSegments:12,bossHeight:.004,boltInset:.022,sideBoltCount:6,leafLength:.026,leafWidth:.01,leafDepth:.006,leafCount:5,laurelWidth:.05,laurelY:.1,laurelStep:.025,laurelAngle:.55,scrollRadius:.027,scrollTube:.004,scrollAngle:4.4,scrollHeight:.054,guardInset:.035,guardHeight:.29,guardRearLift:.08,guardFrontHeight:.11,steelRepeat:1.25,ornamentSegments:12},sideGutter:{depth:.075,columnClearance:.09},camera:{portraitCenterOffset:.04,portraitBottomPadding:.08},surface:{size:256,coinColor:`#d5aa56`,coinEnvironmentIntensity:.85,coinBump:.0011,coinRoughness:.52,steelBump:35e-5,rimRadius:.91,rimWidth:.027,innerRadius:.7,innerWidth:.012,beadRadius:.8,beadCount:48,beadSize:.025,crossArm:.46,crossStroke:.075,crossTip:.135,crossTipDepth:.055,satelliteOffset:.29,satelliteScale:.2,fieldHeight:.26,reliefHeight:.77,fieldRoughness:.94,reliefRoughness:.55,fieldAlbedo:.85,reliefAlbedo:.98,grainAmplitude:.015,grainFrequency:170},assets:{etchedSteel:`treasury-etched-steel-v1.lossless.webp`}},scene:{gold:`#9d793c`,goldLight:`#f4d28a`,stone:`#c4a77c`,wood:`#352317`,felt:`#655645`,iron:`#241f19`,ivory:`#eee0bc`,ember:`#ffb34f`,cool:`#b3c3e0`,rim:.035,railHeight:.045,pillarWidth:.15,pillarHeight:.72,backboardHeight:.7,backOffset:.12,trayDepth:.26,trayDrop:.28,bannerWidth:.2,bannerHeight:.28,bannerY:.52,bannerOffset:.025,coinSegments:24,ringSegments:32,metalness:.72,roughness:.3,stoneRoughness:.85,fov:37,cameraNear:.05,cameraFar:40,cameraPitch:.9,cameraMargin:1.07,cameraTargetY:.25,crestWidth:.2,crestHeight:.25,crestY:.52,crestOffset:.028,crenelCount:7,crenelWidth:.11,crenelHeight:.07,rivetRadius:.013,rivetSegments:8,ambientIntensity:2.5,keyIntensity:4,fillIntensity:2,exposure:1.3,keyPosition:[-2,4,3],fillPosition:[3,2,-1],shadowMapSize:1024,shadowExtent:3,shadowBias:-.001,highPixelRatio:1.75,lowPixelRatio:1,emitterHeight:.3,aimRingTube:.008,aimRingScale:1.1,aimOpacity:.7},customProperties:{"--focus-console-columns":`minmax(0, 1fr) minmax(0, 1fr) auto`,"--focus-console-areas":`"wallet win fire"`,"--focus-root-areas":`"header" "stage" "controls"`,"--focus-short-areas":`"header header" "stage controls"`,"--focus-rail-areas":`"wallet" "win" "fire"`,"--focus-rail-width":`104px`,"--focus-dock-max":`880px`,"--focus-toast-max":`440px`,"--focus-chip-top":`32px`,"--focus-brand-size":`20px`,"--focus-number-size":`clamp(20px, 2vw, 26px)`,"--receipt-max-width":`min(360px, 70%)`,"--receipt-inset":`clamp(8px, 2vw, 20px)`,"--loading-vault-background":`radial-gradient(ellipse at 50% 42%, #80633f 0%, #3e3023 42%, #17191c 85%)`,"--safe-left":`env(safe-area-inset-left, 0px)`,"--safe-right":`env(safe-area-inset-right, 0px)`,"--safe-bottom":`env(safe-area-inset-bottom, 0px)`,"--ux-console-columns":`minmax(100px, 1fr) minmax(240px, 2fr) minmax(100px, 1fr) auto auto`,"--ux-phone-columns":`repeat(4, minmax(0, 1fr))`,"--ux-desktop-areas":`"wallet aim win cost fire"`,"--ux-phone-areas":`"wallet wallet win win" "toggle toggle cost fire" "aim aim aim aim"`,"--ux-stage-min":`32px`,"--ux-number-size":`24px`,"--ux-overlay-max":`440px`,"--ux-short-rail":`140px`,"--ux-short-safe-rail":`calc(var(--ux-short-rail) + var(--safe-right))`,"--ux-short-number":`20px`,"--ux-short-label-width":`2em`,"--ux-short-areas":`"header header" "stage controls" "feedback feedback" "footer footer"`,"--ux-short-control-areas":`"wallet wallet" "win win" "cost cost" "toggle fire"`,"--ux-short-aim-max":`420px`,"--treasury-gold":`#cbb17d`,"--treasury-highlight":`#fff0c9`,"--treasury-gold-dark":`#665034`,"--treasury-ink":`#090c10`,"--treasury-steel":`#202328`,"--treasury-muted":`#b7ab91`,"--treasury-panel":`linear-gradient(160deg, #202022e8, #0b0d10f5 48%, #121518f5)`,"--treasury-tool":`radial-gradient(circle at 35% 18%, #31312e, #111316 58%, #050608)`,"--treasury-crimson":`radial-gradient(ellipse at 34% 12%, #d16d64, #8b1e2e 30%, #5a0c20 65%, #260710)`,"--treasury-etch":`repeating-linear-gradient(38deg, transparent 0 11px, #cbb17d06 11px 12px, transparent 12px 23px), repeating-linear-gradient(-38deg, transparent 0 11px, #cbb17d05 11px 12px, transparent 12px 23px)`,"--treasury-bevel":`inset 0 1px 0 #fff0c980, inset 0 -2px 2px #000000, 0 0 0 1px #493d29, 0 2px 8px #00000080`,"--treasury-inset":`inset 0 0 0 3px #080a0c, inset 0 0 0 4px #aa895d55`,"--treasury-fire-rim":`0 0 0 2px #1a1512, 0 0 0 4px #cbb17d, 0 0 0 6px #59452e, 0 5px 12px #000000b3, inset 0 2px 5px #fff0c980, inset 0 -4px 8px #240610`,"--treasury-header-glow":`linear-gradient(180deg, #030405bf, #06090e1a)`,"--treasury-console-base":`linear-gradient(180deg, #242322, #090b0edb 18%, #101115)`,"--treasury-status-bg":`#0b1014e8`,"--treasury-frame-radius":`10px`,"--treasury-corner-size":`23px`,"--treasury-corner-inset":`-3px`,"--treasury-icon-size":`28px`,"--treasury-brand-size":`30px`,"--treasury-brand-mobile":`23px`,"--treasury-brand-compact":`19px`,"--treasury-number-size":`28px`,"--treasury-console-gutter":`clamp(12px, 2vw, 32px)`,"--treasury-console-columns":`minmax(0, 1fr) minmax(0, 1.35fr) minmax(0, 1fr) auto`,"--treasury-phone-columns":`repeat(4, minmax(0, 1fr))`,"--treasury-short-columns":`minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr) auto`,"--treasury-phone-fire":`80px`,"--treasury-track-height":`8px`,"--treasury-thumb-size":`24px`,"--treasury-track":`repeating-linear-gradient(90deg, #d7bd8633 0 1px, transparent 1px 12px), linear-gradient(180deg, #050608, #31312d)`,"--treasury-thumb":`radial-gradient(circle at 35% 25%, #fff0c9, #d0a865 50%, #795627)`,"--treasury-min-phone":`520px`,"--treasury-flip":`-1`,"--treasury-vault-art":`url('./assets/treasury-vault-v1.lossless.webp')`,"--treasury-etched-art":`url('./assets/treasury-etched-steel-v1.lossless.webp')`,"--treasury-vault-shade":`linear-gradient(180deg, #05070a12, #05070a05 48%, #05070a59)`,"--treasury-vault-position":`50% 46%`,"--treasury-vault-phone-position":`50% 35%`,"--treasury-etch-scale":`320px`,"--compact-console-fire":`64px`,"--compact-console-height":`96px`,"--c-aim":`#74e6ff`,"--c-feedback-accepted":`#fff0ae`,"--feedback-min-height":`24px`,"--feedback-duration":`240ms`,"--feedback-scale":`1.04`,"--background-art":`url('./assets/fortress-background.lossless.webp')`,"--c-bg":`#06090e`,"--c-panel":`#10151df2`,"--c-panel-soft":`#10151dc9`,"--c-text":`#f4e8cc`,"--c-muted":`#b9a888`,"--c-gold":`#d8ad62`,"--c-gold-bright":`#ffe0a2`,"--c-line":`#c6a16542`,"--c-red":`#8f2527`,"--c-red-hover":`#ad3431`,"--c-error":`#ffb6a8`,"--c-black":`#000000`,"--c-transparent":`transparent`,"--c-shadow":`#00000088`,"--font-body":`Inter, 'Noto Sans TC', 'Microsoft JhengHei', sans-serif`,"--font-display":`'Noto Serif TC', 'PMingLiU', Georgia, serif`,"--font-xs":`11px`,"--font-sm":`13px`,"--font-md":`15px`,"--font-lg":`20px`,"--font-mobile-title":`18px`,"--font-xl":`30px`,"--font-number":`36px`,"--weight-normal":`400`,"--weight-medium":`600`,"--weight-bold":`700`,"--s-0":`0`,"--s-1":`4px`,"--s-2":`8px`,"--s-3":`12px`,"--s-4":`16px`,"--s-5":`24px`,"--s-6":`32px`,"--s-7":`48px`,"--line-thin":`1px`,"--line-focus":`2px`,"--radius-sm":`4px`,"--radius-md":`12px`,"--radius-pill":`999px`,"--camera-select-width":`88px`,"--touch":`48px`,"--button-height":`62px`,"--control-width":`620px`,"--sidebar-width":`190px`,"--stage-min":`400px`,"--stage-mobile":`clamp(350px, calc(100dvh - 350px), 560px)`,"--stage-height":`calc(100dvh - 430px)`,"--stage-max":`820px`,"--stage-width":`1040px`,"--stat-width":`660px`,"--stat-divider":`linear-gradient(180deg, transparent, #c6a16560, transparent)`,"--stage-glow":`radial-gradient(ellipse at 50% 65%, #c5913c16, transparent 65%)`,"--shell-width":`1440px`,"--full":`100%`,"--viewport":`100dvh`,"--half":`50%`,"--opacity-disabled":`0.45`,"--line-height":`1.6`,"--tracking-wide":`0.18em`,"--tracking-tight":`0.06em`,"--shadow-panel":`0 16px 48px #00000066`,"--shadow-button":`inset 0 1px 0 #ffffff22, 0 8px 20px #00000055`,"--transition":`140ms ease`,"--overlay-gradient":`linear-gradient(180deg, #130f0b99 0%, #130f0bb8 55%, #130f0bf5 100%)`,"--enamel-art":`url('./assets/premium-enamel-v1.lossless.webp')`,"--metal-gradient":`linear-gradient(135deg, #392a18, #d7ba7a 20%, #705632 42%, #f9e7b1 52%, #9c7541 72%, #3c2b1c)`,"--console-gradient":`linear-gradient(180deg, #1b2029f5, #070a0f)`,"--enamel-gradient":`linear-gradient(130deg, #600f27cc, #260710dd)`,"--coin-button-gradient":`radial-gradient(circle at 45% 20%, #b42c49, #740f29 52%, #260b14 92%)`,"--button-rim":`0 0 0 3px #594322, 0 0 0 5px #ead298, 0 8px 25px #000000b3, inset 0 3px 5px #ffdf9999, inset 0 -5px 12px #160209`,"--nameplate-gradient":`linear-gradient(180deg, #2c1617f5, #130b0cf5)`,"--hud-border":`#b19259`,"--hud-glow":`0 2px 9px #000000, 0 1px 1px #000000`,"--inset-metal":`inset 0 1px 0 #efd6a766, inset 0 -1px 0 #3e321f`,"--frame-inset":`10px`,"--nameplate-height":`64px`,"--brand-size":`32px`,"--brand-mobile":`24px`,"--control-height":`132px`,"--control-mobile-height":`186px`,"--fire-diameter":`102px`,"--fire-mobile-diameter":`78px`,"--tool-size":`44px`,"--icon-size":`21px`,"--badge-size":`50px`,"--badge-mobile-size":`32px`,"--stage-full":`calc(100dvh - 150px)`,"--stage-portrait":`calc(100dvh - 200px)`,"--game-min-height":`560px`,"--stage-small-min":`360px`,"--panel-max":`380px`,"--panel-top":`76px`,"--panel-max-height":`calc(100dvh - 230px)`,"--stat-icon":`28px`,"--console-columns":`1fr 0.8fr 1fr auto`,"--console-mobile-columns":`1fr 1fr 1fr`,"--aim-width":`420px`,"--aim-height":`38px`,"--z-hud":`3`,"--z-menu":`5`,"--hud-outline":`3px`,"--circle":`50%`,"--pressed-shift":`2px`,"--modal-blur":`6px`,"--stat-desktop-number":`32px`,"--stat-mobile-number":`22px`,"--console-gutter":`clamp(16px, 5vw, 96px)`,"--footer-size":`10px`,"--desktop-shell":`1600px`,"--button-gradient":`linear-gradient(180deg, #a63331, #711d20)`,"--z-overlay":`2`,"--hud-min-height":`320px`,"--hud-stage-min":`160px`,"--hud-mobile-fire":`64px`,"--hud-compact-number":`18px`,"--hud-status-dot":`8px`,"--hud-title-leading":`1.1`,"--hud-number-leading":`1.15`,"--hud-console-short-columns":`minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) auto`}};function Ue(e,t=`/crusader-coin-pusher-demo/`,n=globalThis.document?.baseURI??`http://localhost/`){let r=new URL(t,n).pathname;return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,t.replace(/url\((['"]?)(?:\.\/)?assets\/([^)'"\s]+)\1\)/g,(e,t,n)=>`url("${r}assets/${n}")`)]))}var W=y(),We=Ue({...U.customProperties,...U.siege.css});function Ge({frame:e,suspended:t,onStrike:n,onAudioUnlock:i}){let a=(0,V.useRef)(null),o=(0,V.useRef)(null),s=(0,V.useRef)({frame:e,suspended:t,at:performance.now()});return s.current={frame:e,suspended:t,at:performance.now()},(0,V.useEffect)(()=>{let e=()=>{let e=s.current;if(!a.current)return;let t=e.frame.elapsed+(e.suspended?0:Math.min(U.siege.interpolationLimit,(performance.now()-e.at)/1e3));a.current.style.left=`${re.needle(t)*100}%`};return r.ticker.add(e),()=>r.ticker.remove(e)},[]),(0,V.useEffect)(()=>{if(!o.current||t||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let n=r.fromTo(o.current,{scale:e.lastHit?U.siege.hitScale:1},{scale:1,duration:U.siege.hitSeconds,ease:`power2.out`});return()=>{n.kill()}},[e.revision,t]),(0,W.jsxs)(`section`,{className:`siege-panel`,style:We,"data-phase":e.phase,"data-suspended":t,"aria-label":`攻城疏通任務`,children:[(0,W.jsxs)(`header`,{children:[(0,W.jsx)(`span`,{className:`siege-panel__seal`,"aria-hidden":`true`,children:`✠`}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`small`,{children:`免費疏通 · 不扣幣`}),(0,W.jsx)(`h2`,{children:e.phase===`rhythm`?`攻城戰鼓`:e.phase===`cleared`?`空間已釋放`:e.cycles>=3?`機台自動疏通中`:`攻城推進`})]}),(0,W.jsx)(`span`,{className:`siege-panel__stars`,"aria-label":`命中 ${e.hits} 次`,children:[0,1,2].map(t=>(0,W.jsx)(`i`,{"data-lit":t<e.hits,children:`◆`},t))})]}),e.phase===`rhythm`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`siege-panel__play`,children:[(0,W.jsxs)(`button`,{ref:o,type:`button`,className:`siege-panel__drum`,disabled:t,"aria-label":`敲響戰鼓`,onPointerDown:()=>i?.(),onClick:()=>{i?.(),n(e.id,e.attempt)},children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`✠`}),(0,W.jsx)(`b`,{children:`敲鼓`})]}),(0,W.jsxs)(`div`,{className:`siege-panel__timing`,children:[(0,W.jsx)(`p`,{children:`指針進入金色區時敲鼓`}),(0,W.jsxs)(`div`,{className:`siege-panel__track`,"aria-hidden":`true`,children:[(0,W.jsx)(`b`,{style:{left:`${(.5-A.hitWindow)*100}%`,width:`${A.hitWindow*200}%`}}),(0,W.jsx)(`span`,{ref:a})]}),(0,W.jsxs)(`p`,{children:[(0,W.jsxs)(`strong`,{children:[`剩餘 `,3-e.attempt,` 次`]}),` · `,Math.max(0,Math.ceil(A.attemptSeconds-e.elapsed)),` 秒`]}),(0,W.jsx)(`p`,{children:e.lastHit===null?`等待敲鼓`:`第 ${e.attempt} 拍：${e.lastHit?`命中`:`錯過`}`})]})]}),(0,W.jsx)(`p`,{className:`siege-panel__note`,children:`命中可強化推進；未操作自動使用基本推進。`})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`siege-panel__note`,children:e.phase===`cleared`?`即將恢復可投；已啟用的自動連投會續投。`:`第 3 拍：${e.lastHit?`命中`:`錯過`} · ${e.hits?`強化推進`:`基本推進`}`}),(0,W.jsx)(`div`,{className:`siege-panel__strokes`,"aria-hidden":`true`,children:[0,1,2].map(t=>(0,W.jsx)(`span`,{"data-lit":e.phase===`cleared`||t<e.cycles,children:`➤`},t))})]}),(0,W.jsx)(`footer`,{children:`普通幣以前口實收計分，演出本身不加分。`})]})}var Ke=Object.freeze({threshold:100,windowMs:3e3,quietGapMs:1200}),qe=class{receipts=[];total=0;lastAt=null;celebrated=!1;record(e,t){if(!Number.isSafeInteger(e)||e<=0||!Number.isFinite(t)||t<0)return!1;for(this.lastAt!==null&&(t<this.lastAt||t-this.lastAt>=Ke.quietGapMs)&&this.reset(),this.lastAt=t;this.receipts.length&&this.receipts[0].at<t-Ke.windowMs;)this.total-=this.receipts.shift().count;let n=this.receipts[this.receipts.length-1];return n?.at===t?n.count+=e:this.receipts.push({at:t,count:e}),this.total+=e,!this.celebrated&&this.total>=Ke.threshold&&(this.celebrated=!0,!0)}reset(){this.receipts=[],this.total=0,this.lastAt=null,this.celebrated=!1}},Je=class{isDisabled;onStart;onEnd;onRelease;owner=null;constructor(e,t,n,r){this.isDisabled=e,this.onStart=t,this.onEnd=n,this.onRelease=r}press(e){return this.isDisabled()||this.owner?!1:(this.owner=e,this.onStart(),!0)}release(e){this.matches(e)&&(this.owner=null,this.isDisabled()?this.onEnd():this.onRelease?this.onRelease(e):this.onEnd())}matches(e){return this.owner?.kind===`pointer`&&e.kind===`pointer`?this.owner.id===e.id:this.owner?.kind===`keyboard`&&e.kind===`keyboard`&&this.owner.key===e.key}cancelSource(e){this.matches(e)&&this.cancel()}cancel(){this.owner&&(this.owner=null,this.onEnd())}},Ye={"feature-wait":`請先完成選塔或等候護欄收回；沒有扣幣。`,"no-balance":`金幣已用盡，開始新局吧！`,"board-full":`場面已滿，請稍候金幣清空。`,"invalid-position":`落點無效，請重新選擇。`,"drop-blocked":`落點暫時被金幣擋住，請稍等或改變落點。`};function Xe(e){if(e.error)return{kind:`unavailable`,symbol:`!`,label:`暫時無法進入寶庫`};if(e.loading)return{kind:`unavailable`,symbol:`…`,label:`正在準備金幣與機台`};if(e.paused)return{kind:`unavailable`,symbol:`—`,label:`返回遊戲後自動接續`};if(e.settingsOpen)return{kind:`unavailable`,symbol:`—`,label:`設定與玩法`};let t=e.feedback?.sequence===e.dismissedSequence?void 0:e.feedback;return e.wallet<=0&&!e.freeRemaining&&(t?.kind!==`blocked`||t.reason!==`no-balance`)?{kind:`unavailable`,symbol:`—`,label:Ye[`no-balance`]}:t?.kind===`accepted`?{kind:`accepted`,symbol:`✓`,label:`已投幣`}:t?.kind===`aim-only`?{kind:`aim-only`,symbol:`↔`,label:`僅瞄準・未投幣`}:t?.kind===`blocked`?{kind:`blocked`,symbol:`!`,label:`受阻・未扣幣`,detail:Ye[t.reason]}:{kind:`idle`,symbol:`↔`,label:e.rearSweepEnabled?`後方按住滑投・其餘盤面拖曳轉鏡頭`:`點擊幣床投幣・拖曳轉動鏡頭`}}function Ze(e,t){let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),i=r.context(()=>{!n.matches&&!document.hidden&&t()},e),a=()=>i.revert(),o=()=>{document.hidden&&a()};return n.addEventListener(`change`,a),document.addEventListener(`visibilitychange`,o),window.addEventListener(`blur`,a),()=>{n.removeEventListener(`change`,a),document.removeEventListener(`visibilitychange`,o),window.removeEventListener(`blur`,a),i.revert()}}function Qe(){let e=U.motion,t=U.interaction.feedbackPulseMs/1e3,n={scale:e.restScale,opacity:e.visibleOpacity},i=r.timeline({paused:!0}).fromTo(n,{scale:e.restScale,opacity:e.visibleOpacity},{scale:U.interaction.feedbackPulseScale,opacity:e.expiredOpacity,duration:t,ease:e.ringEase,immediateRender:!1}),a=!1;return{sample(t,r){let o=!a&&t>=0&&t<U.interaction.feedbackPulseMs;return o&&i.seek(t/1e3,!0),{active:o,scale:o&&!r?n.scale:e.restScale,opacity:o?r?e.visibleOpacity:n.opacity:e.expiredOpacity}},dispose(){a||(a=!0,i.kill())}}}function $e(e){let t=(0,V.useRef)(null),n=(0,V.useRef)(e.score),i=U.motion;return(0,V.useLayoutEffect)(()=>{if(!t.current)return;let e=t.current.querySelector(`.crusader-game__brand`),n=t.current.querySelector(`.crusader-game__console-inner`);return Ze(t.current,()=>{r.timeline({defaults:{duration:i.entranceSeconds,ease:i.ease}}).fromTo(e,{y:-i.entranceY},{y:i.restY},0).fromTo(n,{y:i.entranceY},{y:i.restY},0)})},[i]),(0,V.useLayoutEffect)(()=>{if(!t.current||e.feedbackKind!==`accepted`&&e.feedbackKind!==`blocked`)return;let n=t.current.querySelector(`.crusader-game__feedback-label`);if(n)return Ze(t.current,()=>{r.fromTo(n,{scale:e.feedbackKind===`accepted`?i.acceptedScale:i.blockedScale},{scale:i.restScale,duration:i.feedbackSeconds,ease:i.ease})})},[e.feedbackKind,e.sequence,i]),(0,V.useLayoutEffect)(()=>{let a=e.score>n.current;if(n.current=e.score,!t.current||!a||e.overlay||e.settingsOpen)return;let o=t.current.querySelector(`.crusader-game__stat--win strong`);return Ze(t.current,()=>{r.fromTo(o,{scale:i.collectScale},{scale:i.restScale,duration:i.collectSeconds,ease:i.ease})})},[e.score,e.overlay,e.settingsOpen,i]),(0,V.useLayoutEffect)(()=>{if(!t.current||!e.overlay&&!e.settingsOpen)return;let n=t.current.querySelector(e.settingsOpen?`.crusader-game__settings`:`.crusader-game__overlay-card`);return Ze(t.current,()=>{r.fromTo(n,{y:i.panelY},{y:i.restY,duration:i.panelSeconds,ease:i.ease})})},[e.overlay,e.settingsOpen,i]),t}function et({name:e}){let t=(0,V.useId)();return(0,W.jsxs)(`svg`,{className:`crusader-game__treasury-icon`,viewBox:`0 0 32 32`,"aria-hidden":`true`,focusable:`false`,children:[(0,W.jsx)(`defs`,{children:(0,W.jsxs)(`linearGradient`,{id:t,x1:`0`,x2:`1`,y1:`0`,y2:`1`,children:[(0,W.jsx)(`stop`,{offset:`0`,className:`crusader-game__gold-stop-light`}),(0,W.jsx)(`stop`,{offset:`0.46`,className:`crusader-game__gold-stop`}),(0,W.jsx)(`stop`,{offset:`1`,className:`crusader-game__gold-stop-dark`})]})}),(0,W.jsx)(`g`,{fill:`url(#${t})`,children:e===`coins`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`path`,{d:`M7 8h18v17c0 5-18 5-18 0Z`}),(0,W.jsx)(`ellipse`,{cx:`16`,cy:`8`,rx:`9`,ry:`4`}),(0,W.jsx)(`path`,{d:`M7 13c1 5 17 5 18 0M7 18c1 5 17 5 18 0M7 23c1 5 17 5 18 0`,fill:`none`}),(0,W.jsx)(`ellipse`,{cx:`16`,cy:`8`,rx:`5`,ry:`2`,fill:`none`})]}):e===`trophy`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`path`,{d:`M9 5h14v8c0 6-3 8-7 8s-7-2-7-8ZM14 21h4v5h5v3H9v-3h5Z`}),(0,W.jsx)(`path`,{d:`M9 8H4v4c0 5 5 6 7 6M23 8h5v4c0 5-5 6-7 6`,fill:`none`})]}):(0,W.jsx)(`path`,{d:e===`left`?`M20 7 9 16l11 9Z`:`m12 7 11 9-11 9Z`})})]})}function tt({moving:e,disabled:t,onReset:n}){let r=!!(t||e);return(0,W.jsx)(`div`,{className:`camera-controls`,role:`group`,"aria-label":`遊戲視角`,"aria-busy":!!e,children:(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button camera-controls__reset`,disabled:r,title:`鏡頭回正`,"aria-label":`鏡頭回正`,onClick:()=>{r||n()},children:`回正`})})}function nt({treasury:e,paidDropsPerKey:t,choice:n,bells:r,choiceSecondsLeft:i,bellSecondsLeft:a,autoSelection:o,disabled:s,onChoose:c,onGuessBell:l}){let u=(0,V.useRef)(null),d=(0,V.useRef)(null);(0,V.useEffect)(()=>{n&&!s&&u.current?.querySelector(`button:not(:disabled)`)?.focus()},[n?.id,s]),(0,V.useEffect)(()=>{r&&!s&&(d.current?.querySelector(`button:not(:disabled)`)??d.current)?.focus()},[r?.id,r?.phase,s]),(0,V.useEffect)(()=>{o?.kind===`tower`?u.current?.focus():o?.kind===`bell`&&d.current?.focus()},[o?.kind,o?.eventId]);let f=o?.kind===`tower`&&o.eventId===n?.id?o:null,p=o?.kind===`bell`&&o.eventId===r?.id?o:null;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${C.art.background}`}),(0,W.jsx)(`link`,{rel:`preload`,as:`image`,href:`/crusader-coin-pusher-demo/${C.art.metal}`}),e&&!r&&(0,W.jsxs)(`div`,{className:`treasury-feature-status`,"aria-label":`御庫鑰匙與護欄`,role:`status`,children:[(0,W.jsxs)(`span`,{children:[(0,W.jsxs)(`svg`,{className:`treasury-key-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,W.jsx)(`circle`,{cx:`8`,cy:`7`,r:`5`}),(0,W.jsx)(`path`,{d:`m11 11 9 9m-5-5 3-3m-1 5 3-3`})]}),`鑰匙 `,e.keys,` / 3`]}),e.phase===`active`?(0,W.jsxs)(`strong`,{children:[`聖盾護欄 · 免費 `,e.freeRemaining,` 次`]}):e.phase===`draining`?(0,W.jsx)(`strong`,{children:`免費已投完 · 護欄保留至完整推進`}):e.phase===`retracting`?(0,W.jsx)(`strong`,{children:`護欄收回中 · 未扣幣`}):(0,W.jsx)(`span`,{children:e.pendingKeys?`鑰匙待送出 ${e.pendingKeys} 把`:`送鑰匙進度 ${e.paidProgress}${t?` / ${t}`:``}`})]}),n&&(0,W.jsx)(`div`,{className:`treasury-choice-backdrop`,style:C.css,children:(0,W.jsxs)(`div`,{ref:u,className:`treasury-choice`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dragon-choice-title`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=u.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:[(0,W.jsxs)(`div`,{className:`dragon-bell-caption`,children:[(0,W.jsx)(`span`,{className:`dragon-bell-ordinal`,"aria-hidden":`true`,children:`I`}),(0,W.jsx)(`h2`,{id:`dragon-choice-title`,children:`巨龍 BONUS · 選擇撞擊目標`}),(0,W.jsxs)(`p`,{children:[`先選塔，再猜鐘。猜中才撞塔，命中後才結算`,f?`。`:`；${Math.ceil(i??5)} 秒後自動選塔。`]})]}),(0,W.jsx)(`div`,{className:`treasury-choice-targets`,children:n.targets.map((e,t)=>(0,W.jsxs)(`button`,{type:`button`,className:`treasury-target`,"data-auto-focus":f?.focusIndex===t||void 0,"data-auto-confirmed":f?.confirming&&f.selectedIndex===t||void 0,"aria-current":f?.confirming&&f.selectedIndex===t?`true`:void 0,disabled:s||!!f||!c,onClick:()=>c?.(n.id,e.towerId),children:[(0,W.jsx)(`span`,{className:`treasury-target-auto-mark`,"aria-hidden":`true`,children:`✓`}),(0,W.jsxs)(`span`,{className:`treasury-target-heading`,children:[(0,W.jsxs)(`strong`,{children:[[`左`,`中`,`右`][e.slot],`塔 · `,{high:`高塔`,mid:`中塔`,low:`低塔`}[e.tier]]}),e.structure&&(0,W.jsx)(`span`,{children:{ring:`環形`,tiered:`分層`,double:`雙柱`}[e.structure]})]}),(0,W.jsxs)(`span`,{className:`treasury-target-details`,children:[(0,W.jsxs)(`span`,{className:`treasury-target-count`,children:[`塔內 `,(0,W.jsx)(`b`,{children:e.coins}),` 枚 · 尚未入帳`]}),(0,W.jsxs)(`span`,{className:`treasury-target-rule`,children:[e.tier===`high`?1:2,` 支小龍／3 個鐘 · 猜中才撞塔`]})]})]},e.towerId))})]})}),r&&(0,W.jsxs)(`div`,{ref:d,className:`dragon-bell-game`,"data-phase":r.phase,style:C.css,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dragon-bell-title`,tabIndex:-1,onKeyDown:e=>{if(e.key!==`Tab`)return;let t=d.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())},children:[(0,W.jsxs)(`div`,{className:`dragon-bell-caption`,"aria-live":`polite`,children:[(0,W.jsx)(`span`,{className:`dragon-bell-ordinal`,"aria-hidden":`true`,children:`II`}),(0,W.jsxs)(`h2`,{id:`dragon-bell-title`,children:[`三鐘尋龍 · `,{high:`高塔`,mid:`中塔`,low:`低塔`}[r.target.tier]]}),(0,W.jsx)(`p`,{className:r.phase===`show`?`dragon-bell-intro-hint`:void 0,children:r.phase===`show`?(0,W.jsxs)(W.Fragment,{children:[`記住 `,r.dragonCount,` 支小龍的位置`,(0,W.jsxs)(`small`,{children:[C.showSeconds,` 秒後自動換位`]})]}):r.phase===`cover`?`鐘罩落下，請留意位置。`:r.phase===`shuffle`?`三鐘換位中，跟住小龍。`:r.phase===`guess`?p?`${r.dragonCount} 個鐘裡有小龍`:`選一個鐘 · ${r.dragonCount} 個鐘裡有小龍 · ${Math.ceil(a??5)} 秒後自動選鐘`:r.won?`找到小龍！接著撞塔，尚未入帳。`:`沒有找到小龍，本次不撞塔、不加分。`})]}),r.phase===`guess`&&(0,W.jsx)(`div`,{className:`dragon-bell-picks`,children:[`左`,`中`,`右`].map((e,t)=>(0,W.jsx)(`button`,{type:`button`,className:`dragon-bell-pick`,"aria-label":`選擇${e}鐘`,"data-auto-focus":p?.focusIndex===t||void 0,"data-auto-confirmed":p?.confirming&&p.selectedIndex===t||void 0,"aria-current":p?.confirming&&p.selectedIndex===t?`true`:void 0,disabled:s||!!p||!l,onClick:()=>l?.(r.id,t),children:(0,W.jsxs)(`span`,{className:`crusader-game__small-button`,children:[e,`鐘`]})},t))})]})]})}var rt={collector:`collector.png`,tower:`tower.png`,dragon:`dragon.png`,treasury:`treasury.png`,"trial-pairs":`trial-pairs.png`,"trial-bells":`trial-bells.png`,"trial-lock":`trial-lock.png`,"trial-path":`trial-path.png`,"trial-mint":`trial-mint.png`,"trial-stack":`trial-stack.png`,"trial-seals":`trial-seals.png`,"trial-orb":`trial-orb.png`,"trial-mirrors":`trial-mirrors.png`,"trial-vault":`trial-vault.png`,"trial-mines":`trial-mines.png`};function it({trophy:e}){return e===`crusader`?(0,W.jsxs)(`svg`,{className:`treasury-trophy`,"data-trophy":e,viewBox:`0 0 40 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,W.jsx)(`path`,{d:`M3 4 20 1 37 4 35 27Q31 40 20 46 9 40 5 27Z`,fill:`currentColor`,fillOpacity:`.12`}),(0,W.jsx)(`path`,{d:`M17 10h6v10h9v6h-9v13h-6V26H8v-6h9Z`})]}):(0,W.jsx)(`img`,{className:`treasury-trophy`,"data-trophy":e,src:`./assets/trophies/${rt[e]}`,alt:``,loading:`lazy`,decoding:`async`,draggable:!1})}var at=Ue(U.customProperties),ot={front:`前口收集`,dragon:`巨龍入帳`,hatch:`洞內流失`,side:`側落／盤外流失`},st={crusader:`遠征盾徽`,collector:`前口初收`,tower:`高塔擊破`,dragon:`巨龍命中`,treasury:`御庫開啟`,"trial-pairs":`聖印對對牌`,"trial-bells":`鐘樓聖序`,"trial-lock":`王庫密鎖`,"trial-path":`聖光迴廊`,"trial-mint":`御庫鑄幣`,"trial-stack":`聖塔疊金`,"trial-seals":`騎士破印`,"trial-orb":`龍珠入庫`,"trial-mirrors":`聖光折鏡`,"trial-vault":`寶庫移陣`,"trial-mines":`龍穴探金`};function ct({name:e}){return(0,W.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e===`settings`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`circle`,{cx:`12`,cy:`12`,r:`7`}),(0,W.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.6`}),(0,W.jsx)(`path`,{d:`M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2`})]}):e===`pause`?(0,W.jsx)(`path`,{d:`M8 5v14M16 5v14`}):e===`play`?(0,W.jsx)(`path`,{d:`m8 4 11 8-11 8Z`}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`path`,{d:`M3 9h4l5-5v16l-5-5H3Z`}),e===`muted`?(0,W.jsx)(`path`,{d:`m17 9 5 6m0-6-5 6`}):(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(`path`,{d:`M16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14`})})]})})}function lt(e){if(e.key!==`Tab`)return;let t=e.currentTarget.querySelectorAll(`button:not(:disabled), select:not(:disabled), input:not(:disabled)`),n=t[0],r=t[t.length-1];if(!n){e.preventDefault();return}e.shiftKey&&(e.target===n||e.target===e.currentTarget)&&(e.preventDefault(),r?.focus()),!e.shiftKey&&e.target===r&&(e.preventDefault(),n.focus())}function ut(e){let[t,n]=(0,V.useState)(!1),[r,i]=(0,V.useState)(null),a=e.treasuryFeatures?.treasury?.freeRemaining??0,o=e.treasuryFeatures?.choice,s=e.treasuryFeatures?.bells,u=!!o||!!s,d=[`draining`,`retracting`].includes(e.treasuryFeatures?.treasury?.phase??`idle`),f=e.wallet<=0&&a<=0,p=e.navigationLocked||e.loading||!!e.error||e.paused||f||t||e.cameraMoving||e.cabinetOverview||!!e.dragonBonus||u||d,m=e.loading||!!e.error,h=!!m;(0,V.useEffect)(()=>{(m||e.paused||t||e.wallet<=0&&e.feedback?.kind!==`blocked`)&&e.feedback&&e.feedback.kind!==`idle`&&i(e.feedback.sequence)},[m,e.paused,e.wallet,e.feedback,t]);let g=Xe({...e,freeRemaining:a,settingsOpen:t,dismissedSequence:r}),_=$e({feedbackKind:g.kind,sequence:e.feedback?.sequence,score:e.score,overlay:e.error?`error`:e.loading?`loading`:null,settingsOpen:t}),v=(0,V.useRef)({disabled:p,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease});v.current={disabled:p,onStart:e.onFireStart,onEnd:e.onFireSuspend??e.onFireEnd,onRelease:e.onFireRelease};let y=(0,V.useRef)(null);y.current||=new Je(()=>!!v.current.disabled,()=>v.current.onStart(),()=>v.current.onEnd(),e=>v.current.onRelease?v.current.onRelease(e.kind):v.current.onEnd());let b=y.current,x=(0,V.useCallback)(()=>{b.cancel(),v.current.onEnd()},[b]);(0,V.useEffect)(()=>{p&&x()},[p,x]),(0,V.useEffect)(()=>()=>x(),[x]);let S=!!e.autoFiring,C=(0,V.useRef)(null),w=(0,V.useRef)(null),T=(0,V.useRef)(null),E=(0,V.useRef)(h),D=(0,V.useRef)(t),O=(0,V.useRef)(u);(0,V.useEffect)(()=>{!u&&O.current&&!t&&!h&&!e.paused&&C.current?.focus(),O.current=u},[u,t,h,e.paused]);let k=()=>{e.onCoinPreviewCancel?.(),e.onSettingsOpenChange?.(!1),n(!1)};(0,V.useEffect)(()=>{t?w.current?.focus():D.current&&!h&&C.current?.focus(),D.current=t},[t,h]),(0,V.useEffect)(()=>{h&&!t&&document.hasFocus()&&T.current?.focus(),!h&&E.current&&document.hasFocus()&&C.current?.focus(),E.current=h},[h,t]);let A=e=>e>=1e4?new Intl.NumberFormat(`zh-TW`,{notation:`compact`,maximumFractionDigits:1}).format(e):e.toLocaleString();return(0,W.jsxs)(`main`,{ref:_,className:`crusader-game`,style:at,children:[(0,W.jsxs)(`header`,{className:`crusader-game__header`,inert:t||h||u,children:[(0,W.jsxs)(`div`,{className:`crusader-game__brand`,children:[!e.trophies||e.trophies.selected===`crusader`?(0,W.jsx)(`img`,{src:`./assets/treasury-crest.svg`,alt:``,className:`crusader-game__crest`}):(0,W.jsx)(`span`,{title:`收藏盾徽：${st[e.trophies.selected]}`,children:(0,W.jsx)(it,{trophy:e.trophies.selected})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h1`,{children:`聖城幣塔`}),(0,W.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`CRUSADER COIN PUSHER`})]})]}),(0,W.jsxs)(`nav`,{className:`crusader-game__tools`,"aria-label":`遊戲設定`,children:[e.trialsNavigation&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__trial-entry`,disabled:m||e.trialsNavigation.state===`saving`||e.localSave?.state===`loading`,onClick:()=>{x(),e.trialsNavigation?.onOpen()},"aria-label":e.trialsNavigation.state===`saving`?`正在儲存並前往御庫試煉`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試前往御庫試煉`:`前往御庫試煉`,children:e.trialsNavigation.state===`saving`?`儲存中…`:e.trialsNavigation.state===`error`||e.localSave?.state===`error`?`重試御庫試煉`:`御庫試煉`}),e.onCameraReset&&(0,W.jsx)(tt,{moving:e.cameraMoving,disabled:e.navigationLocked||m||e.paused||t||e.cabinetOverview,onReset:()=>{x(),e.onCameraReset?.()}}),(0,W.jsx)(`button`,{ref:C,type:`button`,className:`crusader-game__tool`,disabled:e.navigationLocked,onClick:()=>{x(),e.onSettingsOpenChange?.(!t),n(!t)},"aria-label":`設定與玩法`,title:`設定與玩法`,"aria-expanded":t,"aria-controls":`game-settings`,children:(0,W.jsx)(ct,{name:`settings`})})]})]}),t&&(0,W.jsx)(`button`,{type:`button`,tabIndex:-1,className:`crusader-game__settings-backdrop`,"aria-label":`關閉設定遮罩`,onClick:k}),t&&(0,W.jsxs)(`aside`,{ref:w,id:`game-settings`,className:`crusader-game__settings`,role:`dialog`,"aria-modal":`true`,"aria-label":`設定與玩法`,tabIndex:-1,onKeyDown:e=>{e.key===`Escape`&&(e.preventDefault(),k()),lt(e)},children:[(0,W.jsxs)(`div`,{className:`crusader-game__settings-heading`,children:[(0,W.jsx)(`h2`,{children:`設定與玩法`}),(0,W.jsx)(`button`,{className:`crusader-game__small-button`,type:`button`,onClick:k,children:`關閉`})]}),e.accountPanel,S&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onFireEnd,children:`停止自動連投`}),e.trophies&&(0,W.jsxs)(`section`,{"aria-label":`騎士戰利品收藏`,children:[(0,W.jsx)(`h3`,{children:`騎士戰利品收藏`}),(0,W.jsx)(`p`,{children:`主場事件與每款御庫試煉第 15 關可解鎖對應盾徽；只改外觀，不影響機率或得分。保存在本機瀏覽器。`}),(0,W.jsx)(`h4`,{children:`聖城戰利品`}),(0,W.jsx)(`div`,{className:`treasury-collection`,children:c.map(t=>(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===t,disabled:!e.trophies.unlocked.includes(t)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(t),children:[(0,W.jsx)(it,{trophy:t}),st[t],!e.trophies.unlocked.includes(t)&&` · 未解鎖`]},t))}),(0,W.jsx)(`h4`,{children:`御庫試煉 · 第 15 關紀念`}),(0,W.jsx)(`div`,{className:`treasury-collection`,children:l.map(t=>{let n=`trial-${t}`;return(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,"aria-pressed":e.trophies.selected===n,disabled:!e.trophies.unlocked.includes(n)||!e.onSelectTrophy,onClick:()=>e.onSelectTrophy?.(n),children:[(0,W.jsx)(it,{trophy:n}),st[n],!e.trophies.unlocked.includes(n)&&` · 第 15 關解鎖`]},n)})})]}),e.treasuryFeatures&&(0,W.jsxs)(`section`,{"aria-label":`御庫特色規則`,children:[(0,W.jsx)(`h3`,{children:`御庫鑰匙與聖盾`}),(0,W.jsxs)(`p`,{children:[e.treasuryFeatures.paidDropsPerKey?`每成功投入${e.treasuryFeatures.paidDropsPerKey}枚一般金幣，`:`一般金幣達標後，`,`送出1把實體鑰匙；落點受阻時延後。鑰匙須真正推入前口，收齊3把換100次免費投幣；鑰匙本身不計分，側落或落洞不返還。`]}),(0,W.jsx)(`p`,{children:`免費投幣不扣可用金幣、不累積再生、不抽新塔／巨龍，也不生成新鑰匙。普通幣仍以前口實收計分。若自動連投已啟動，免費投完會先等待護欄收回；盤面可投後，才接續使用一般金幣。`}),(0,W.jsx)(`p`,{children:`免費期間升起側護欄；最後一枚投出後保留至下一次完整推進，再收回。護欄不保證全收，前口與洞口規則不變。`}),(0,W.jsx)(`p`,{children:`巨龍觸發時暫停盤面：先選塔、記住小龍，再猜三鐘。高塔有1支小龍，中／低塔有2支，分藏不同鐘；只能選一次，五秒未選會隨機選塔／鐘，不額外扣幣。猜中才撞塔，命中才入帳；猜錯保留塔並恢復盤面。倒塌光影與收藏解鎖不另加分。`})]}),(0,W.jsxs)(`div`,{className:`crusader-game__menu-actions`,children:[(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,onClick:e.onMute,"aria-pressed":e.muted,children:[(0,W.jsx)(ct,{name:e.muted?`muted`:`sound`}),e.muted?`開啟音效`:`關閉音效`]}),e.onReplayIntro&&(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:m||!!e.dragonBonus||!!o||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`,onClick:()=>{b.cancel(),k(),e.onReplayIntro?.()},children:[(0,W.jsx)(ct,{name:`play`}),`重看序章`]}),e.onReplayHighTower&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:m||!!e.dragonBonus||!!o||!!e.treasuryFeatures?.treasury&&e.treasuryFeatures.treasury.phase!==`idle`||!e.boardFeedback?.highTowerReplayAvailable,onClick:()=>{x(),k(),e.onReplayHighTower?.()},children:`重看最高塔演出`})]}),e.boardFeedback&&(0,W.jsxs)(`section`,{className:`crusader-game__records`,"aria-label":`本局來源與近期紀錄`,children:[(0,W.jsx)(`h3`,{children:`本局已入帳`}),(0,W.jsx)(`dl`,{children:[`front`,`dragon`].map(t=>(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`dt`,{children:ot[t]}),(0,W.jsxs)(`dd`,{children:[e.boardFeedback.totals[t].toLocaleString(),` 分`]})]},t))}),(0,W.jsx)(`p`,{children:`前緣燈帶：前口收集；側邊警示紋：側落不計分；洞口叉紋：開洞不計分；藍色輪廓環：巨龍已結算幣，不重複計分。倒塔與故事演出本身不加分。`}),(0,W.jsx)(`h3`,{children:`近期紀錄`}),e.boardFeedback.records.length===0?(0,W.jsx)(`p`,{children:`尚無收集或流失紀錄。`}):(0,W.jsx)(`ol`,{children:e.boardFeedback.records.map(e=>(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`span`,{children:ot[e.source]}),(0,W.jsx)(`strong`,{children:e.source===`front`||e.source===`dragon`?`+${e.amount.toLocaleString()} 分`:`${e.amount.toLocaleString()} 枚 · 不計分`})]},e.id))}),(0,W.jsxs)(`p`,{children:[`本局來源總計保留整局；近期紀錄僅顯示最近 `,U.boardFeedback.recordLimit,` 筆合併事件，不是淨獲利。`]})]}),e.onCoinSoundChange&&(0,W.jsxs)(`section`,{className:`crusader-game__coin-audio`,"aria-label":`投幣聲設定`,children:[(0,W.jsxs)(`label`,{className:`crusader-game__quality`,children:[`投幣音色`,(0,W.jsx)(`select`,{"aria-label":`投幣音色`,value:e.coinSound??`soft`,disabled:m,onChange:t=>e.onCoinSoundChange?.(t.target.value),children:Ae.map(e=>(0,W.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,W.jsxs)(`label`,{className:`crusader-game__coin-volume`,children:[`投幣音量 `,(0,W.jsx)(`input`,{"aria-label":`投幣音量`,type:`range`,min:`0`,max:`100`,step:`1`,value:Math.round((e.coinVolume??.5)*100),disabled:m||!e.onCoinVolumeChange,onChange:t=>e.onCoinVolumeChange?.(Number(t.target.value)/100)}),(0,W.jsxs)(`output`,{children:[Math.round((e.coinVolume??.5)*100),`%`]})]}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:m||e.paused||e.muted||e.coinVolume===0||e.coinPreviewState===`loading`||!e.onCoinPreview,onClick:e.onCoinPreview,children:e.coinPreviewState===`loading`?`音效準備中…`:`試聽投幣聲`}),(0,W.jsx)(`p`,{role:`status`,children:e.muted?`請先開啟音效，再進行試聽。`:e.coinPreviewState===`error`?`音效暫時無法播放，請再試一次。`:`試聽不會投幣或扣幣；此音量不影響配樂與大獎音效。`})]}),(0,W.jsxs)(`label`,{className:`crusader-game__quality`,children:[`畫質`,(0,W.jsxs)(`select`,{"aria-label":`畫質`,value:e.quality,onChange:t=>e.onQualityChange(t.target.value),children:[(0,W.jsx)(`option`,{value:`low`,children:`流暢`}),(0,W.jsx)(`option`,{value:`high`,children:`精緻`})]})]}),e.onBonusFullMotionChange&&(0,W.jsxs)(`label`,{children:[(0,W.jsx)(`input`,{type:`checkbox`,checked:!!e.bonusFullMotion,onChange:t=>e.onBonusFullMotionChange?.(t.target.checked)}),`完整 BONUS 飛行動態（覆蓋系統減少動態偏好）`]}),(0,W.jsx)(`p`,{children:`後方投幣區按住可左右滑動連投，放開即停。其餘幣床點按投入 1 枚，拖曳則轉動鏡頭、放開不投幣；「回正」恢復視角。硬幣皆從後方推板投入。`}),e.onFireRelease&&(0,W.jsxs)(`p`,{children:[`投幣鈕點按投入一枚；按住會連投，長按至少 `,U.interaction.autoFireHoldMs/1e3,` 秒後在按鈕內放開，會持續自動連投。閃電滑桿只調整自動投幣速度，最高 3 倍，推板速度不變。再按一次停止，不會多扣幣。選塔、猜鐘、動畫、設定與御庫試煉期間暫停扣幣，回到可投的盤面自動續投；按停止、開新局、金幣與免費次數皆用盡或關閉頁面才結束。`]}),(0,W.jsx)(`p`,{children:`每局以隨機散幣、零座幣塔開場；成功投入20枚喚醒首塔。每座塔獨立等機會抽高／中／低，可重複，不綁定塔位。前方收集的金幣會回收為可用金幣，可以繼續投入。`}),(0,W.jsx)(`p`,{children:`一般硬幣在前方收集計分，兩側及升塔洞內落幣不返還、不計分。巨龍 BONUS 命中時，每枚尚未結算的塔幣計 1 分並加入可用金幣；這批幣後續落點不再加分或扣回。有效投幣且有完整幣塔、無升塔或其他演出時才抽選 BONUS；目前為可調機率的單機測試版，非正式機率。`}),(0,W.jsx)(`p`,{children:`可抽選投幣有 4% 建塔機會；觸發後單塔 70%、雙塔 23%、三塔 7%。等待空位或建塔期間不進行新抽選。`}),(0,W.jsx)(`p`,{children:`場上幣塔全倒後，成功投入20枚即可排入補塔；蓄能期間不抽新事件，已獲得的待建塔保留。台面開洞後，舊幣落入洞內，新塔旋轉升起，關洞後可繼續推動。`}),e.localSave&&(0,W.jsxs)(`section`,{"aria-label":`單機存檔`,children:[(0,W.jsx)(`h3`,{children:`單機續玩`}),(0,W.jsx)(`p`,{role:`status`,children:e.localSave.message}),(0,W.jsx)(`p`,{children:`遊戲會先儲存在這個瀏覽器。清除網站資料會移除本機進度；跨裝置接續須啟用同一帳號，並確認雲端同步成功。突然關閉可能失去最近一次成功同步後尚未上傳的進度。`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:m||e.localSave.state===`loading`,onClick:e.localSave.onSave,children:`立即存檔`})]}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.loading||e.navigationLocked,onClick:()=>{b.cancel(),e.onNewGame(),k()},children:`開始新局`}),e.testMode&&(0,W.jsxs)(`section`,{className:`crusader-game__debug`,"aria-label":`測試模式`,children:[(0,W.jsx)(`strong`,{children:`測試模式`}),(0,W.jsx)(`span`,{children:`強制建塔，不代表自然中獎機率`}),(0,W.jsx)(`div`,{children:[1,2,3].map(t=>(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:m||e.paused||!e.onTestTowers,onClick:()=>e.onTestTowers?.(t),children:[t,` 塔`]},t))})]}),e.testMode&&e.onTestDragon&&(0,W.jsx)(`div`,{className:`crusader-game__debug`,children:[`left`,`center`,`right`].map((t,n)=>(0,W.jsxs)(`button`,{className:`crusader-game__small-button`,type:`button`,disabled:m||e.paused||!!e.dragonBonus,onClick:()=>{b.cancel(),e.onTestDragon?.(t),k()},children:[`BONUS `,[`左斜入`,`正衝`,`右斜入`][n]]},t))})]}),(0,W.jsxs)(`section`,{className:`crusader-game__stage`,"aria-label":`3D 推幣機`,inert:t||h,children:[e.localSave?.state===`error`&&(0,W.jsx)(`p`,{className:`crusader-game__save-warning`,role:`alert`,children:e.localSave.message}),(0,W.jsx)(`div`,{className:`crusader-game__stage-info`,children:(0,W.jsxs)(`div`,{className:`crusader-game__tower-status`,"aria-label":`場上 ${e.towerCount} 座幣塔`,children:[(0,W.jsx)(et,{name:`coins`}),(0,W.jsx)(`p`,{children:e.regeneration?`再生蓄能 ${e.regeneration.progress} / ${e.regeneration.required}`:e.constructionLabel??(e.pendingTowers>0?`待建 ${e.pendingTowers} 座`:`場上幣塔 ${e.towerCount} / 3`)})]})}),e.children,(0,W.jsx)(`div`,{className:`crusader-game__feedback-channel`,role:`status`,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,children:g.kind===`blocked`&&!u&&(0,W.jsxs)(`p`,{className:`crusader-game__feedback crusader-game__feedback--blocked`,children:[(0,W.jsxs)(`span`,{className:`crusader-game__feedback-label`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:g.symbol}),g.label]}),(0,W.jsx)(`span`,{className:`crusader-game__feedback-detail`,children:g.detail})]})}),e.treasuryFeatures&&(0,W.jsx)(nt,{...e.treasuryFeatures,disabled:e.navigationLocked||m||e.paused||t||e.treasuryFeatures.disabled}),e.dragonBonus&&(0,W.jsxs)(`div`,{className:`crusader-game__bonus`,role:`status`,children:[(0,W.jsx)(`span`,{children:`巨龍 BONUS`}),(0,W.jsx)(`strong`,{children:e.dragonBonus.phase===`hit`?`已命中`:e.dragonBonus.phase===`miss`?`目標已失效 · 未入帳`:`接近中 · 尚未入帳`})]}),!m&&!e.paused&&!t&&!e.cabinetOverview&&e.boardFeedback&&(0,W.jsxs)(`div`,{className:`crusader-game__receipts`,"aria-label":`已確認盤面結果`,role:`status`,"aria-live":`polite`,children:[e.boardFeedback.receipts.map(e=>(0,W.jsxs)(`p`,{"data-source":e.source,children:[(0,W.jsxs)(`span`,{children:[ot[e.source],` · 已入帳`]}),(0,W.jsxs)(`strong`,{children:[`+`,e.amount.toLocaleString(),` 分`]})]},e.source)),!e.dragonBonus&&e.boardFeedback.highTower&&(0,W.jsxs)(`p`,{className:`crusader-game__collapse`,children:[(0,W.jsx)(`span`,{children:`最高塔倒塌`}),(0,W.jsx)(`small`,{children:`倒塔不加分，普通幣以前口實收計分`})]})]})]}),h&&!t&&(0,W.jsx)(`div`,{className:`crusader-game__overlay`,children:(0,W.jsxs)(`div`,{ref:T,className:`crusader-game__overlay-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`game-recovery-title`,tabIndex:-1,onKeyDown:lt,children:[(0,W.jsx)(`p`,{className:`crusader-game__eyebrow`,children:`聖城幣塔`}),(0,W.jsx)(`h2`,{id:`game-recovery-title`,children:e.error?`暫時無法進入寶庫`:`正在準備金幣與機台`}),e.error&&(0,W.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.error&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:e.navigationLocked,onClick:e.onRetryScene??e.onNewGame,children:`重新開始`})]})}),(0,W.jsx)(`section`,{className:`crusader-game__console`,"aria-label":`投幣控制`,inert:t||h||u,children:(0,W.jsxs)(`div`,{className:`crusader-game__console-inner`,children:[(0,W.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--wallet`,children:[(0,W.jsx)(`span`,{children:`可用金幣`}),(0,W.jsx)(`strong`,{"aria-label":`${e.wallet} 枚`,title:String(e.wallet),children:A(e.wallet)})]}),(0,W.jsxs)(`div`,{className:`crusader-game__stat crusader-game__stat--win`,children:[(0,W.jsx)(`span`,{children:`本局已入帳`}),(0,W.jsx)(`strong`,{"aria-label":`${e.score} 分`,title:String(e.score),children:A(e.score)})]}),(0,W.jsxs)(`div`,{className:`crusader-game__fire-wrap${f?` crusader-game__fire-wrap--empty`:``}`,children:[!f&&e.onAutoSpeedChange&&(0,W.jsxs)(`label`,{className:`crusader-game__auto-speed`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`⚡`}),(0,W.jsx)(`input`,{type:`range`,min:`1`,max:`3`,step:`0.25`,value:e.autoSpeed??1,"aria-label":`自動投幣速度`,"aria-valuetext":`${e.autoSpeed??1} 倍`,disabled:m||e.navigationLocked||t||u,onChange:t=>e.onAutoSpeedChange?.(Number(t.target.value))}),(0,W.jsxs)(`output`,{children:[e.autoSpeed??1,`×`]})]}),(0,W.jsxs)(`button`,{type:`button`,className:`crusader-game__fire`,disabled:p,onPointerDown:e=>{e.button===0&&e.isPrimary&&(e.pointerType===`touch`&&e.preventDefault(),b.press({kind:`pointer`,id:e.pointerId})&&e.currentTarget.setPointerCapture(e.pointerId))},onPointerUp:e=>{let t=e.currentTarget.getBoundingClientRect(),n={kind:`pointer`,id:e.pointerId};e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom?b.cancelSource(n):b.release(n)},onPointerCancel:e=>b.cancelSource({kind:`pointer`,id:e.pointerId}),onLostPointerCapture:e=>b.cancelSource({kind:`pointer`,id:e.pointerId}),onKeyDown:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),e.repeat||b.press({kind:`keyboard`,key:e.key}))},onKeyUp:e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),b.release({kind:`keyboard`,key:e.key}))},onBlur:x,onContextMenu:e=>e.preventDefault(),"aria-pressed":e.onFireRelease?S:void 0,"aria-label":S?`停止自動連投`:e.onFireRelease?`投入金幣，點按一枚，長按後放開自動連投，再按停止`:`投入金幣，點按一枚，長按連投`,children:[(0,W.jsx)(`span`,{children:f?`已用盡`:S?`停 止`:a>0?`免 費`:`投 幣`}),(0,W.jsx)(`small`,{children:S?p?`自動待續`:`自動連投中`:`長按自動`})]}),f&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__restart`,disabled:e.loading||t||e.navigationLocked,onClick:e.onNewGame,children:`開始新局`})]})]})})]})}function dt(e){let[t,n]=(0,V.useState)(``),[r,i]=(0,V.useState)(``),[a,o]=(0,V.useState)(!1),[s,c]=(0,V.useState)(null),l=!e.enabled||e.busy;return(0,W.jsxs)(`section`,{className:`account-panel`,"aria-label":`帳號與雲端存檔`,"aria-busy":e.busy,children:[(0,W.jsx)(`h3`,{children:`帳號與雲端存檔`}),(0,W.jsx)(`p`,{role:`status`,children:e.busy?`正在處理登入…`:e.user?e.user.isAnonymous?`訪客帳號`:`已登入`:`尚未登入`}),e.user&&(0,W.jsxs)(`p`,{children:[`玩家 ID：`,(0,W.jsx)(`span`,{children:e.user.uid}),(0,W.jsx)(`br`,{}),e.user.email]}),(0,W.jsx)(`p`,{children:e.cloudEnabled?`啟用帳號進度後會定期自動同步。請確認顯示已同步，再到另一台裝置接續；版本衝突時不會自動覆蓋。`:`雲端同步尚未開放。目前進度仍保存在這台裝置；登入不會上傳或替換存檔。`}),!e.enabled&&(0,W.jsx)(`p`,{children:`登入尚未啟用；你仍可繼續本機遊玩。`}),e.error&&(0,W.jsx)(`p`,{className:`crusader-game__error`,role:`alert`,children:e.error}),e.progressStatus&&(0,W.jsx)(`p`,{role:`status`,children:e.progressStatus}),e.user&&e.activeOwner===e.user.uid&&e.onResolve&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{children:`版本衝突時不合併金幣。請選擇要接著玩的進度；被替換的版本會先備份。`}),e.cloudEnabled&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:()=>c(`local`),children:`保留本機，更新雲端`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:()=>c(`cloud`),children:`改用雲端進度`})]}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:()=>c(`backup`),children:`還原最近一次替換前備份`}),s&&(0,W.jsxs)(`div`,{role:`group`,"aria-label":`確認進度來源`,children:[(0,W.jsx)(`p`,{children:s===`local`?`將以目前本機進度更新雲端，先保留原雲端備份。`:s===`cloud`?`將以雲端進度替換本機，先保留目前本機備份。`:`將還原最近一次替換前備份，目前進度也會先備份。`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:()=>{let t=s;c(null),e.onResolve?.(t)},children:`確認使用此版本`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:()=>c(null),children:`取消`})]})]}),e.user&&e.cloudEnabled&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l||e.activeOwner!==e.user.uid,onClick:e.onUpload,children:`上傳目前進度`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l||e.activeOwner!==null,onClick:e.onDownload,children:`從雲端接續（本機無此帳號存檔）`})]}),e.user&&e.activeOwner!==e.user.uid&&e.onActivate&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{children:`啟用此帳號進度；新裝置優先接續既有雲端存檔，否則複製目前訪客進度。原訪客存檔保留，不合併金幣。`}),(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:e.onActivate,children:`使用此帳號進度`})]}),(!e.user||e.user.isAnonymous)&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l||!e.googleEnabled,onClick:e.onGoogle,children:`Google 登入`}),e.enabled&&!e.googleEnabled&&(0,W.jsx)(`p`,{children:`此版本尚未支援 Android Google 登入。`}),(0,W.jsxs)(`form`,{onSubmit:n=>{n.preventDefault(),!l&&(e.onEmail(t.trim(),r,a),i(``))},children:[(0,W.jsxs)(`label`,{children:[`Email`,(0,W.jsx)(`input`,{type:`email`,autoComplete:`email`,required:!0,disabled:l,value:t,onChange:e=>n(e.target.value)})]}),(0,W.jsxs)(`label`,{children:[`密碼`,(0,W.jsx)(`input`,{type:`password`,autoComplete:a?`new-password`:`current-password`,required:!0,disabled:l,value:r,onChange:e=>i(e.target.value)})]}),(0,W.jsxs)(`label`,{children:[(0,W.jsx)(`input`,{type:`checkbox`,checked:a,disabled:l,onChange:e=>o(e.target.checked)}),`建立新帳號`]}),(0,W.jsx)(`button`,{className:`crusader-game__small-button`,disabled:l,type:`submit`,children:a?`Email 註冊`:`Email 登入`})]}),!e.user&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:e.onGuest,children:`建立訪客帳號`})]}),e.user&&(0,W.jsx)(`button`,{type:`button`,className:`crusader-game__small-button`,disabled:l,onClick:e.onSignOut,children:`登出帳號`})]})}var ft;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(ft||={});var pt=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},mt=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,ht=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?mt(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new pt(`"${e}" plugin is not implemented on ${c}`,ft.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new pt(`"${e}.${t}()" is not implemented on ${c}`,ft.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=pt,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},gt=(e=>e.Capacitor=ht(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),_t=gt.registerPlugin,vt=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new gt.Exception(e,ft.Unimplemented)}unavailable(e=`not available`){return new gt.Exception(e,ft.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},yt=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),bt=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),xt=class extends vt{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=bt(n).trim(),r=bt(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=yt(e.key),n=yt(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};_t(`CapacitorCookies`,{web:()=>new xt});var St=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),Ct=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},wt=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,Tt=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=Ct(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},Et=class extends vt{async request(e){let t=Tt(e,e.webFetchExtra),n=wt(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await St(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};_t(`CapacitorHttp`,{web:()=>new Et});var Dt;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(Dt||={});var Ot;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(Ot||={});var kt=class extends vt{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};_t(`SystemBars`,{web:()=>new kt});function At(){let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(!1),[i,a]=(0,V.useState)(null),[o,s]=(0,V.useState)(null),c=(0,V.useRef)(null),l=(0,V.useRef)(!1),u=(0,V.useRef)(!1);(0,V.useEffect)(()=>{u.current=!0;let e=!1,n;return(async()=>{try{let r=await g(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1]));if(e)return;let i=await m();if(e)return;c.current=i,n=r.onAuthStateChanged(i,n=>{e||(a(n),t(!0))})}catch{e||s(`登入初始化失敗；本機進度未變更。請稍後再試。`)}})(),()=>{e=!0,u.current=!1,n?.(),c.current=null}},[!0]);async function d(e){if(c.current&&!l.current){l.current=!0,r(!0),s(null);try{await e(c.current,await g(()=>import(`./index.esm-D2jqCs_E.js`),__vite__mapDeps([0,1])))}catch(e){let t=typeof e==`object`&&e&&`code`in e?e.code:``;u.current&&s(t===`auth/credential-already-in-use`||t===`auth/email-already-in-use`?`此帳號已存在。訪客進度未合併；請先保留本機進度，再登入既有帳號。`:t===`auth/popup-closed-by-user`?`已取消登入，本機進度未變更。`:`登入操作未成功，請確認網路及帳號資料後再試。本機進度未變更。`)}finally{l.current=!1,u.current&&r(!1)}}}return{enabled:e,googleEnabled:!gt.isNativePlatform(),busy:n||!e&&!o,user:i?{uid:i.uid,email:i.email,isAnonymous:i.isAnonymous}:null,error:o,onGoogle:()=>{gt.isNativePlatform()||d((e,t)=>e.currentUser?.isAnonymous?t.linkWithPopup(e.currentUser,new t.GoogleAuthProvider):t.signInWithPopup(e,new t.GoogleAuthProvider))},onEmail:(e,t,n)=>{d((r,i)=>r.currentUser?.isAnonymous&&n?i.linkWithCredential(r.currentUser,i.EmailAuthProvider.credential(e,t)):n?i.createUserWithEmailAndPassword(r,e,t):i.signInWithEmailAndPassword(r,e,t))},onGuest:()=>{d((e,t)=>t.signInAnonymously(e))},onSignOut:()=>{d((e,t)=>t.signOut(e))}}}var G={asset:`assets/human-study/human-walk-knight-v2.json`,timeoutMs:3e4,sceneReadyTimeoutMs:35e3,fps:60,sceneHeight:4.46,cycle:{startFrame:5,frameCount:184,distance:.980941,seamBlend:.16},reachStart:2.7,reachEnd:3.8,releaseStart:4.55,releaseEnd:5.25,braceStart:2.9,braceEnd:3.3,braceRelease:4.35,palmOffset:[0,-.035,.025],elbowPole:[.35,-.8,-.18],stanceX:.175,stanceZ:.16,lean:.1,envIntensity:.65,envBlur:.04,reachFraction:.82,maximumAdvance:.48,pushPeak:4.4,sideAlign:.3,pelvisDrop:.09,stanceForward:.13,carryReach:.93,doorImpulseEnd:5.1,doorImpulseFraction:.35,sword:{handX:.29,handY:1.02,handZ:-.055,tipDistance:1.32,tipClearance:.008,bladeStart:.1,bladeWidth:.082,bladeThickness:.011,bladeRoll:.6,guardWidth:.32,guardRadius:.015,gripRadius:.023,gripLength:.15,pommelRadius:.032,gripCurl:[.55,1.05,.7]}},jt=`attached`,Mt=1e3,Nt=1001,Pt=1002,Ft=1003,It=1004,Lt=1005,Rt=1006,zt=1007,Bt=1008,Vt=1009,Ht=1010,Ut=1011,Wt=1012,Gt=1013,Kt=1014,qt=1015,Jt=1016,Yt=1017,Xt=1018,Zt=1020,Qt=35902,$t=35899,en=1021,tn=1022,nn=1023,rn=1026,an=1027,on=1028,sn=1029,cn=1030,ln=1031,un=1033,dn=33776,fn=33777,pn=33778,mn=33779,hn=35840,gn=35841,_n=35842,vn=35843,yn=36196,bn=37492,xn=37496,Sn=37488,Cn=37489,wn=37490,Tn=37491,En=37808,Dn=37809,On=37810,kn=37811,An=37812,jn=37813,Mn=37814,Nn=37815,Pn=37816,Fn=37817,In=37818,Ln=37819,Rn=37820,zn=37821,Bn=36492,Vn=36494,Hn=36495,Un=36283,Wn=36284,Gn=36285,Kn=36286,qn=2300,Jn=2301,Yn=2302,Xn=2303,Zn=2400,Qn=2401,$n=2402,er=3200,tr=`srgb`,nr=`srgb-linear`,rr=`linear`,ir=`srgb`,ar=7680,or=35044,sr=35048,cr=2e3;function lr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ur(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function dr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function fr(){let e=dr(`canvas`);return e.style.display=`block`,e}var pr={};function mr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function hr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=hr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function gr(...e){e=hr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function _r(...e){let t=e.join(` `);t in pr||(pr[t]=!0,K(...e))}function vr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var yr={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Sr=1234567,Cr=Math.PI/180,wr=180/Math.PI;function Tr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xr[e&255]+xr[e>>8&255]+xr[e>>16&255]+xr[e>>24&255]+`-`+xr[t&255]+xr[t>>8&255]+`-`+xr[t>>16&15|64]+xr[t>>24&255]+`-`+xr[n&63|128]+xr[n>>8&255]+`-`+xr[n>>16&255]+xr[n>>24&255]+xr[r&255]+xr[r>>8&255]+xr[r>>16&255]+xr[r>>24&255]).toLowerCase()}function Er(e,t,n){return Math.max(t,Math.min(n,e))}function Dr(e,t){return(e%t+t)%t}function Or(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function kr(e,t,n){return e===t?0:(n-e)/(t-e)}function Ar(e,t,n){return(1-n)*e+n*t}function jr(e,t,n,r){return Ar(e,t,1-Math.exp(-n*r))}function Mr(e,t=1){return t-Math.abs(Dr(e,t*2)-t)}function Nr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Pr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Fr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ir(e,t){return e+Math.random()*(t-e)}function Lr(e){return e*(.5-Math.random())}function Rr(e){e!==void 0&&(Sr=e);let t=Sr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zr(e){return e*Cr}function Br(e){return e*wr}function Vr(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Hr(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ur(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Wr(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Gr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Kr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var qr={DEG2RAD:Cr,RAD2DEG:wr,generateUUID:Tr,clamp:Er,euclideanModulo:Dr,mapLinear:Or,inverseLerp:kr,lerp:Ar,damp:jr,pingpong:Mr,smoothstep:Nr,smootherstep:Pr,randInt:Fr,randFloat:Ir,randFloatSpread:Lr,seededRandom:Rr,degToRad:zr,radToDeg:Br,isPowerOfTwo:Vr,ceilPowerOfTwo:Hr,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:Wr,normalize:Kr,denormalize:Gr},q=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Er(this.x,e.x,t.x),this.y=Er(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Er(this.x,e,t),this.y=Er(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Er(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Er(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Er(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Er(this.x,e.x,t.x),this.y=Er(this.y,e.y,t.y),this.z=Er(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Er(this.x,e,t),this.y=Er(this.y,e,t),this.z=Er(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Er(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Er(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr=new J,Xr=new Jr,Zr=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return _r(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return _r(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return _r(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new Zr,$r=new Zr().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ei=new Zr().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ti(){let e={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=ri(e.r),e.g=ri(e.g),e.b=ri(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ii(e.r),e.g=ii(e.g),e.b=ii(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?rr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return _r(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return _r(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[nr]:{primaries:t,whitePoint:r,transfer:rr,toXYZ:$r,fromXYZ:ei,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tr},outputColorSpaceConfig:{drawingBufferColorSpace:tr}},[tr]:{primaries:t,whitePoint:r,transfer:ir,toXYZ:$r,fromXYZ:ei,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tr}}}),e}var ni=ti();function ri(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ii(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ai,oi=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ai===void 0&&(ai=dr(`canvas`)),ai.width=e.width,ai.height=e.height;let t=ai.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=dr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ri(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ri(t[e]/255)*255):t[e]=ri(t[e]);return{data:t,width:e.width,height:e.height}}return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},si=0,ci=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:si++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(li(r[t].image)):e.push(li(r[t]))}else e=li(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function li(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?oi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var ui=0,di=new J,fi=class e extends br{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Nt,i=Nt,a=Rt,o=Bt,s=nn,c=Vt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ui++}),this.uuid=Tr(),this.name=``,this.source=new ci(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zr,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(di).x}get height(){return this.source.getSize(di).y}get depth(){return this.source.getSize(di).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mt:e.x-=Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Pt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Mt:e.y-=Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Pt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null,fi.DEFAULT_MAPPING=300,fi.DEFAULT_ANISOTROPY=1;var pi=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Er(this.x,e.x,t.x),this.y=Er(this.y,e.y,t.y),this.z=Er(this.z,e.z,t.z),this.w=Er(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Er(this.x,e,t),this.y=Er(this.y,e,t),this.z=Er(this.z,e,t),this.w=Er(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Er(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mi=class extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pi(0,0,e,t),this.scissorTest=!1,this.viewport=new pi(0,0,e,t),this.textures=[];let r=new fi({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ci(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},hi=class extends mi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gi=class extends fi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},_i=class extends fi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},vi=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),i=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xi,e,Si)}lookAt(e,t,n){let r=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ci.crossVectors(n,Ti),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ci.crossVectors(n,Ti)),Ci.normalize(),wi.crossVectors(Ti,Ci),r[0]=Ci.x,r[4]=wi.x,r[8]=Ti.x,r[1]=Ci.y,r[5]=wi.y,r[9]=Ti.y,r[2]=Ci.z,r[6]=wi.z,r[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=yi.set(r[0],r[1],r[2]).length(),o=yi.set(r[4],r[5],r[6]).length(),s=yi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),bi.copy(this);let c=1/a,l=1/o,u=1/s;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=l,bi.elements[5]*=l,bi.elements[6]*=l,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=cr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=cr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yi=new J,bi=new vi,xi=new J(0,0,0),Si=new J(1,1,1),Ci=new J,wi=new J,Ti=new J,Ei=new vi,Di=new Jr,Oi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Er(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Er(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Er(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Er(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Er(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Er(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ei.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ei,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Di.setFromEuler(this),this.setFromQuaternion(Di,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER=`XYZ`;var ki=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Ai=0,ji=new J,Mi=new Jr,Ni=new vi,Pi=new J,Fi=new J,Ii=new J,Li=new Jr,Ri=new J(1,0,0),zi=new J(0,1,0),Bi=new J(0,0,1),Vi={type:`added`},Hi={type:`removed`},Ui={type:`childadded`,child:null},Wi={type:`childremoved`,child:null},Gi=class e extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ai++}),this.uuid=Tr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Oi,r=new Jr,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vi},normalMatrix:{value:new Zr}}),this.matrix=new vi,this.matrixWorld=new vi,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Ri,e)}rotateY(e){return this.rotateOnAxis(zi,e)}rotateZ(e){return this.rotateOnAxis(Bi,e)}translateOnAxis(e,t){return ji.copy(e).applyQuaternion(this.quaternion),this.position.add(ji.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ri,e)}translateY(e){return this.translateOnAxis(zi,e)}translateZ(e){return this.translateOnAxis(Bi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pi.copy(e):Pi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Fi,Pi,this.up):Ni.lookAt(Pi,Fi,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Ni),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(gr(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vi),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):gr(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hi),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vi),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,Ii),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Li,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Gi.DEFAULT_UP=new J(0,1,0),Gi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=class extends Gi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},qi={type:`move`},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Qi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var $i=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ni.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ni.workingColorSpace){return this.r=e,this.g=t,this.b=n,ni.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ni.workingColorSpace){if(e=Dr(e,1),t=Er(t,0,1),n=Er(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Qi(i,r,e+1/3),this.g=Qi(i,r,e),this.b=Qi(i,r,e-1/3)}return ni.colorSpaceToWorking(this,r),this}setStyle(e,t=tr){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tr){let n=Yi[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tr){return ni.workingToColorSpace(ea.copy(this),e),Math.round(Er(ea.r*255,0,255))*65536+Math.round(Er(ea.g*255,0,255))*256+Math.round(Er(ea.b*255,0,255))}getHexString(e=tr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ni.workingColorSpace){ni.workingToColorSpace(ea.copy(this),t);let n=ea.r,r=ea.g,i=ea.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=ni.workingColorSpace){return ni.workingToColorSpace(ea.copy(this),t),e.r=ea.r,e.g=ea.g,e.b=ea.b,e}getStyle(e=tr){ni.workingToColorSpace(ea.copy(this),e);let t=ea.r,n=ea.g,r=ea.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Zi);let n=Ar(Xi.h,Zi.h,t),r=Ar(Xi.s,Zi.s,t),i=Ar(Xi.l,Zi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ea=new $i;$i.NAMES=Yi;var ta=class extends Gi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},na=new J,ra=new J,ia=new J,aa=new J,oa=new J,sa=new J,ca=new J,la=new J,ua=new J,da=new J,fa=new pi,pa=new pi,ma=new pi,ha=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),na.subVectors(e,t),r.cross(na);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){na.subVectors(r,t),ra.subVectors(n,t),ia.subVectors(e,t);let a=na.dot(na),o=na.dot(ra),s=na.dot(ia),c=ra.dot(ra),l=ra.dot(ia),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,aa)!==null&&aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,aa)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,aa.x),s.addScaledVector(a,aa.y),s.addScaledVector(o,aa.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fa,i.x),a.addScaledVector(pa,i.y),a.addScaledVector(ma,i.z),a}static isFrontFacing(e,t,n,r){return na.subVectors(n,t),ra.subVectors(e,t),na.cross(ra).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),na.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;oa.subVectors(r,n),sa.subVectors(i,n),la.subVectors(e,n);let s=oa.dot(la),c=sa.dot(la);if(s<=0&&c<=0)return t.copy(n);ua.subVectors(e,r);let l=oa.dot(ua),u=sa.dot(ua);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(oa,a);da.subVectors(e,i);let f=oa.dot(da),p=sa.dot(da);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(sa,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ca.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ca,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(oa,a).addScaledVector(sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ga=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(va.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(va.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=va.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,va):va.fromBufferAttribute(r,t),va.applyMatrix4(e.matrixWorld),this.expandByPoint(va);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,va),va.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Da.subVectors(this.max,Ea),ba.subVectors(e.a,Ea),xa.subVectors(e.b,Ea),Sa.subVectors(e.c,Ea),Ca.subVectors(xa,ba),wa.subVectors(Sa,xa),Ta.subVectors(ba,Sa);let t=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-Ta.z,Ta.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,Ta.z,0,-Ta.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-Ta.y,Ta.x,0];return!Aa(t,ba,xa,Sa,Da)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,ba,xa,Sa,Da))?!1:(Oa.crossVectors(Ca,wa),t=[Oa.x,Oa.y,Oa.z],Aa(t,ba,xa,Sa,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,va).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(va).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_a=[new J,new J,new J,new J,new J,new J,new J,new J],va=new J,ya=new ga,ba=new J,xa=new J,Sa=new J,Ca=new J,wa=new J,Ta=new J,Ea=new J,Da=new J,Oa=new J,ka=new J;function Aa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ka.fromArray(e,a);let o=i.x*Math.abs(ka.x)+i.y*Math.abs(ka.y)+i.z*Math.abs(ka.z),s=t.dot(ka),c=n.dot(ka),l=r.dot(ka);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ja=new J,Ma=new q,Na=0,Pa=class extends br{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Na++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=or,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXYZ(t,ja.x,ja.y,ja.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix4(e),this.setXYZ(t,ja.x,ja.y,ja.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyNormalMatrix(e),this.setXYZ(t,ja.x,ja.y,ja.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.transformDirection(e),this.setXYZ(t,ja.x,ja.y,ja.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kr(t,this.array),n=Kr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kr(t,this.array),n=Kr(n,this.array),r=Kr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Kr(t,this.array),n=Kr(n,this.array),r=Kr(r,this.array),i=Kr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Fa=class extends Pa{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ia=class extends Pa{constructor(e,t,n){super(new Uint32Array(e),t,n)}},La=class extends Pa{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ra=new ga,za=new J,Ba=new J,Va=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ra.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);let t=za.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(za,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(Ba)),this.expandByPoint(za.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ha=0,Ua=new vi,Wa=new Gi,Ga=new J,Ka=new ga,qa=new ga,Ja=new J,Ya=class e extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ha++}),this.uuid=Tr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(lr(e)?Ia:Fa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Zr().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ua.makeRotationFromQuaternion(e),this.applyMatrix4(Ua),this}rotateX(e){return Ua.makeRotationX(e),this.applyMatrix4(Ua),this}rotateY(e){return Ua.makeRotationY(e),this.applyMatrix4(Ua),this}rotateZ(e){return Ua.makeRotationZ(e),this.applyMatrix4(Ua),this}translate(e,t,n){return Ua.makeTranslation(e,t,n),this.applyMatrix4(Ua),this}scale(e,t,n){return Ua.makeScale(e,t,n),this.applyMatrix4(Ua),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ga).negate(),this.translate(Ga.x,Ga.y,Ga.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new La(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gr(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ka.setFromBufferAttribute(n),this.morphTargetsRelative?(Ja.addVectors(this.boundingBox.min,Ka.min),this.boundingBox.expandByPoint(Ja),Ja.addVectors(this.boundingBox.max,Ka.max),this.boundingBox.expandByPoint(Ja)):(this.boundingBox.expandByPoint(Ka.min),this.boundingBox.expandByPoint(Ka.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gr(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gr(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(Ka.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qa.setFromBufferAttribute(n),this.morphTargetsRelative?(Ja.addVectors(Ka.min,qa.min),Ka.expandByPoint(Ja),Ja.addVectors(Ka.max,qa.max),Ka.expandByPoint(Ja)):(Ka.expandByPoint(qa.min),Ka.expandByPoint(qa.max))}Ka.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ja.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ja));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ja.fromBufferAttribute(a,t),o&&(Ga.fromBufferAttribute(e,t),Ja.add(Ga)),r=Math.max(r,n.distanceToSquared(Ja))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gr(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gr(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Pa(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Pa(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ja.fromBufferAttribute(e,t),Ja.normalize(),e.setXYZ(t,Ja.x,Ja.y,Ja.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Pa(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xa=new J,Za=new J,Qa=new Zr,$a=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xa.subVectors(n,t).cross(Za.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Xa),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qa.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},eo=0,to=class extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=Tr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $i(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $i().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new $a().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},no=new J,ro=new J,io=new J,ao=new J,oo=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,no)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=no.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(no.copy(this.origin).addScaledVector(this.direction,t),no.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ro.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(ro);let i=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=ao.dot(this.direction),s=-ao.dot(io),c=ao.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ro).addScaledVector(io,d),f}intersectSphere(e,t){if(e.radius<0)return null;no.subVectors(e.center,this.origin);let n=no.dot(this.direction),r=no.dot(no)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,no)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,z=j-P*N,ne=M-F*N,B=z*te-ne*ee,re=L*ne-R*z,ie=ee*R-te*L;if(r){if(B<0||re<0||ie<0)return null}else if((B<0||re<0||ie<0)&&(B>0||re>0||ie>0))return null;let ae=B+re+ie;if(ae===0)return null;let oe=I*(B*D+re*A+ie*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},so=class extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new $i(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},co=new vi,lo=new oo,uo=new Va,fo=new J,po=new J,mo=new J,ho=new J,go=new J,_o=new J,vo=new J,yo=new J,Y=class extends Gi{constructor(e=new Ya,t=new so){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_o.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(go.fromBufferAttribute(s,e),a?_o.addScaledVector(go,r):_o.addScaledVector(go.sub(t),r))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),lo.copy(e.ray).recast(e.near),!(uo.containsPoint(lo.origin)===!1&&(lo.intersectSphere(uo,fo)===null||lo.origin.distanceToSquared(fo)>(e.far-e.near)**2))&&(co.copy(i).invert(),lo.copy(e.ray).applyMatrix4(co),(n.boundingBox===null||lo.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,lo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function bo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yo.copy(s),yo.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yo);return l<n.near||l>n.far?null:{distance:l,point:yo.clone(),object:e}}function xo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,po),e.getVertexPosition(c,mo),e.getVertexPosition(l,ho);let u=bo(e,t,n,r,po,mo,ho,vo);if(u){let e=new J;ha.getBarycoord(vo,po,mo,ho,e),i&&(u.uv=ha.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=ha.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=ha.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};ha.getNormal(po,mo,ho,t.normal),u.face=t,u.barycoord=e}return u}var So=new pi,Co=new pi,wo=new pi,To=new pi,Eo=new vi,Do=new J,Oo=new Va,ko=new vi,Ao=new oo,jo=class extends Y{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=jt,this.bindMatrix=new vi,this.bindMatrixInverse=new vi,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ga),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Do),this.boundingBox.expandByPoint(Do)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Va),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Do),this.boundingSphere.expandByPoint(Do)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(r),e.ray.intersectsSphere(Oo)!==!1&&(ko.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(ko),(this.boundingBox===null||Ao.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pi,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():K(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Co.fromBufferAttribute(r.attributes.skinIndex,e),wo.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(So.copy(t),t.set(0,0,0,0)):(So.set(...t,1),t.set(0,0,0)),So.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=wo.getComponent(e);if(r!==0){let i=Co.getComponent(e);Eo.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(To.copy(So).applyMatrix4(Eo),r)}}return t.isVector4&&(t.w=So.w),t.applyMatrix4(this.bindMatrixInverse)}},Mo=class extends Gi{constructor(){super(),this.isBone=!0,this.type=`Bone`}},No=class extends fi{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ft,l=Ft,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Po=new vi,Fo=new vi,Io=class e{constructor(e=[],t=[]){this.uuid=Tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){K(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new vi)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new vi;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Fo;Po.multiplyMatrices(i,t[r]),Po.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new No(t,e,e,nn,qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(K(`Skeleton: No bone found with UUID:`,r),i=new Mo),this.bones.push(i),this.boneInverses.push(new vi().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Lo=class extends Pa{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ro=new vi,zo=new vi,Bo=[],Vo=new ga,Ho=new vi,Uo=new Y,Wo=new Va,Go=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ho)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ga),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Vo.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Vo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Wo.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),e.ray.intersectsSphere(Wo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ro),zo.multiplyMatrices(n,Ro),Uo.matrixWorld=zo,Uo.raycast(e,Bo);for(let e=0,n=Bo.length;e<n;e++){let n=Bo[e];n.instanceId=i,n.object=this,t.push(n)}Bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(r*this.count),r,this.count,on,qt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ko=new Va,qo=new q(.5,.5),Jo=new J,Yo=class{constructor(e=new $a,t=new $a,n=new $a,r=new $a,i=new $a,a=new $a){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ko.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ko.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ko)}intersectsSprite(e){return Ko.center.set(0,0,0),Ko.radius=.7071067811865476+qo.distanceTo(e.center),Ko.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ko)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Jo.x=r.normal.x>0?e.max.x:e.min.x,Jo.y=r.normal.y>0?e.max.y:e.min.y,Jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xo=class extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new $i(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zo=new J,Qo=new J,$o=new vi,es=new oo,ts=new Va,ns=new J,rs=new J,is=class extends Gi{constructor(e=new Ya,t=new Xo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Zo.fromBufferAttribute(t,e-1),Qo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Zo.distanceTo(Qo);e.setAttribute(`lineDistance`,new La(n,1))}else K(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),ts.radius+=i,e.ray.intersectsSphere(ts)===!1)return;$o.copy(r).invert(),es.copy(e.ray).applyMatrix4($o);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=as(this,e,es,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=as(this,e,es,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=as(this,e,es,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=as(this,e,es,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function as(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Zo.fromBufferAttribute(s,i),Qo.fromBufferAttribute(s,a),n.distanceSqToSegment(Zo,Qo,ns,rs)>r)return;ns.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ns);if(!(c<t.near||c>t.far))return{distance:c,point:rs.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var os=new J,ss=new J,cs=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)os.fromBufferAttribute(t,e),ss.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+os.distanceTo(ss);e.setAttribute(`lineDistance`,new La(n,1))}else K(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ls=class extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new $i(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},us=new vi,ds=new oo,fs=new Va,ps=new J,ms=class extends Gi{constructor(e=new Ya,t=new ls){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),fs.radius+=i,e.ray.intersectsSphere(fs)===!1)return;us.copy(r).invert(),ds.copy(e.ray).applyMatrix4(us);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ps.fromBufferAttribute(l,n),hs(ps,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ps.fromBufferAttribute(l,a),hs(ps,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hs(e,t,n,r,i,a,o){let s=ds.distanceSqToPoint(e);if(s<n){let n=new J;ds.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gs=class extends fi{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_s=class extends fi{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vs=class extends fi{constructor(e,t,n=Kt,r,i,a,o=Ft,s=Ft,c,l=rn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ci(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ys=class extends vs{constructor(e,t=Kt,n=301,r,i,a=Ft,o=Ft,s,c=rn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bs=class extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class e extends Ya{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new La(c,3)),this.setAttribute(`normal`,new La(l,3)),this.setAttribute(`uv`,new La(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ss=class e extends Ya{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new q;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new La(a,3)),this.setAttribute(`normal`,new La(o,3)),this.setAttribute(`uv`,new La(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cs=class e extends Ya{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new La(u,3)),this.setAttribute(`normal`,new La(d,3)),this.setAttribute(`uv`,new La(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new q,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ws=class e extends Ya{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new La(i,3)),this.setAttribute(`normal`,new La(i.slice(),3)),this.setAttribute(`uv`,new La(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new J,r=new J,i=new J;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new J;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new J;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new J,t=new J,n=new J,r=new J,o=new q,s=new q,c=new q;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ts=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){K(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new q:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new J,r=[],i=[],a=[],o=new J,s=new vi;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Er(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Er(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Es=class extends Ts{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new q){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ds=class extends Es{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Os(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ks=new J,As=new J,js=new Os,Ms=new Os,Ns=new Os,Ps=class extends Ts{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(As.subVectors(r[0],r[1]).add(r[0]),c=As);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ks.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ks),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),js.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ms.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ns.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(js.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ms.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ns.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(js.calc(s),Ms.calc(s),Ns.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fs(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Is(e,t){let n=1-e;return n*n*t}function Ls(e,t){return 2*(1-e)*e*t}function Rs(e,t){return e*e*t}function zs(e,t,n,r){return Is(e,t)+Ls(e,n)+Rs(e,r)}function Bs(e,t){let n=1-e;return n*n*n*t}function Vs(e,t){let n=1-e;return 3*n*n*e*t}function Hs(e,t){return 3*(1-e)*e*e*t}function Us(e,t){return e*e*e*t}function Ws(e,t,n,r,i){return Bs(e,t)+Vs(e,n)+Hs(e,r)+Us(e,i)}var Gs=class extends Ts{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ws(e,r.x,i.x,a.x,o.x),Ws(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends Ts{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ws(e,r.x,i.x,a.x,o.x),Ws(e,r.y,i.y,a.y,o.y),Ws(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qs=class extends Ts{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Ts{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ys=class extends Ts{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(zs(e,r.x,i.x,a.x),zs(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends Ts{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(zs(e,r.x,i.x,a.x),zs(e,r.y,i.y,a.y),zs(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zs=class extends Ts{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new q){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Fs(o,s.x,c.x,l.x,u.x),Fs(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}},Qs=Object.freeze({__proto__:null,ArcCurve:Ds,CatmullRomCurve3:Ps,CubicBezierCurve:Gs,CubicBezierCurve3:Ks,EllipseCurve:Es,LineCurve:qs,LineCurve3:Js,QuadraticBezierCurve:Ys,QuadraticBezierCurve3:Xs,SplineCurve:Zs}),$s=class extends Ts{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Qs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Qs[n.type]().fromJSON(n))}return this}},ec=class extends $s{constructor(e){super(),this.type=`Path`,this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qs(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ys(this.currentPoint.clone(),new q(e,t),new q(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Gs(this.currentPoint.clone(),new q(e,t),new q(n,r),new q(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Zs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Es(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tc=class extends ec{constructor(e){super(e),this.uuid=Tr(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ec().fromJSON(n))}return this}};function nc(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=rc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=uc(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ac(a,o,n,s,c,l,0),o}function rc(e,t,n,r,i){let a;if(i===Pc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=jc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=jc(i/r|0,e[i],e[i+1],a);return a&&Cc(a,a.next)&&(Mc(a),a=a.next),a}function ic(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Cc(n,n.next)||Sc(n.prev,n,n.next)===0)){if(Mc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ac(e,t,n,r,i,a,o){if(!e)return;!o&&a&&hc(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?sc(e,r,i,a):oc(e)){t.push(c.i,e.i,l.i),Mc(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=cc(ic(e),t),ac(e,t,n,r,i,a,2)):o===2&&lc(e,t,n,r,i,a):ac(ic(e),t,n,r,i,a,1);break}}}function oc(e){let t=e.prev,n=e,r=e.next;if(Sc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&bc(i,s,a,c,o,l,m.x,m.y)&&Sc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Sc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=_c(p,m,t,n,r),v=_c(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&bc(s,u,c,d,l,f,y.x,y.y)&&Sc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&bc(s,u,c,d,l,f,b.x,b.y)&&Sc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&bc(s,u,c,d,l,f,y.x,y.y)&&Sc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&bc(s,u,c,d,l,f,b.x,b.y)&&Sc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function cc(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Cc(r,i)&&wc(r,n,n.next,i)&&Oc(r,i)&&Oc(i,r)&&(t.push(r.i,n.i,i.i),Mc(n),Mc(n.next),n=e=i),n=n.next}while(n!==e);return ic(n)}function lc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&xc(o,e)){let s=Ac(o,e);o=ic(o,o.next),s=ic(s,s.next),ac(o,t,n,r,i,a,0),ac(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function uc(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=rc(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(vc(o))}i.sort(dc);for(let e=0;e<i.length;e++)n=fc(i[e],n);return n}function dc(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function fc(e,t){let n=pc(e,t);if(!n)return t;let r=Ac(n,e);return ic(r,r.next),ic(n,n.next)}function pc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Cc(e,n))return n;do{if(Cc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&yc(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Oc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&mc(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function mc(e,t){return Sc(e.prev,e,t.prev)<0&&Sc(t.next,e,e.next)<0}function hc(e,t,n,r){let i=e;do i.z===0&&(i.z=_c(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,gc(i)}function gc(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function _c(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function vc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function yc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function bc(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&yc(e,t,n,r,i,a,o,s)}function xc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Dc(e,t)&&(Oc(e,t)&&Oc(t,e)&&kc(e,t)&&(Sc(e.prev,e,t.prev)||Sc(e,t.prev,t))||Cc(e,t)&&Sc(e.prev,e,e.next)>0&&Sc(t.prev,t,t.next)>0)}function Sc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Cc(e,t){return e.x===t.x&&e.y===t.y}function wc(e,t,n,r){let i=Ec(Sc(e,t,n)),a=Ec(Sc(e,t,r)),o=Ec(Sc(n,r,e)),s=Ec(Sc(n,r,t));return!!(i!==a&&o!==s||i===0&&Tc(e,n,t)||a===0&&Tc(e,r,t)||o===0&&Tc(n,e,r)||s===0&&Tc(n,t,r))}function Tc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ec(e){return e>0?1:e<0?-1:0}function Dc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&wc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Oc(e,t){return Sc(e.prev,e,e.next)<0?Sc(e,t,e.next)>=0&&Sc(e,e.prev,t)>=0:Sc(e,t,e.prev)<0||Sc(e,e.next,t)<0}function kc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ac(e,t){let n=Nc(e.i,e.x,e.y),r=Nc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function jc(e,t,n,r){let i=Nc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Mc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Nc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Fc=class{static triangulate(e,t,n=2){return nc(e,t,n)}},Ic=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Lc(e),Rc(n,e);let a=e.length;t.forEach(Lc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Rc(n,t[e]);let o=Fc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Lc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Rc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var zc=class e extends Ya{constructor(e=new tc([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new La(r,3)),this.setAttribute(`uv`,new La(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Bc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new J,b=new J,x=new J}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ic.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ic.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||gr(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new q(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new q(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Ic.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);z(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);z(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Ic.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),z(x.x,x.y,x.z)):z(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),z(x.x,x.y,x.z)):z(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);z(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?z(i.x,i.y+g[s-1].y,g[s-1].x+n):z(i.x,i.y,c+n)}}}R(),ee();function R(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ne(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ne(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ne(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ne(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ee(){let e=r.length/3,t=0;te(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];te(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function te(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);B(t+r+n,t+i+n,t+i+a,t+r+a)}}}function z(e,t,n){a.push(e),a.push(t),a.push(n)}function ne(e,t,i){re(e),re(t),re(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ie(o[0]),ie(o[1]),ie(o[2])}function B(e,t,i,a){re(e),re(t),re(a),re(t),re(i),re(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ie(s[0]),ie(s[1]),ie(s[3]),ie(s[1]),ie(s[2]),ie(s[3])}function re(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ie(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qs[i.type]().fromJSON(i)),new e(r,t.options)}},Bc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new q(a,o),new q(s,c),new q(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new q(o,1-c),new q(l,1-d),new q(f,1-m),new q(h,1-_)]:[new q(s,1-c),new q(u,1-d),new q(p,1-m),new q(g,1-_)]}};function Vc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Hc=class e extends ws{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Uc=class e extends Ya{constructor(e=[new q(0,-.5),new q(.5,0),new q(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Er(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new J,d=new q,f=new J,p=new J,m=new J,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new La(a,3)),this.setAttribute(`uv`,new La(o,2)),this.setAttribute(`normal`,new La(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Wc=class e extends Ya{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new La(p,3)),this.setAttribute(`normal`,new La(m,3)),this.setAttribute(`uv`,new La(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Gc=class e extends Ya{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new J,p=new q;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new La(s,3)),this.setAttribute(`normal`,new La(c,3)),this.setAttribute(`uv`,new La(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Kc=class e extends Ya{constructor(e=new tc([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new La(r,3)),this.setAttribute(`normal`,new La(i,3)),this.setAttribute(`uv`,new La(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ic.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ic.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ic.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function qc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Jc=class e extends Ya{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new La(p,3)),this.setAttribute(`normal`,new La(m,3)),this.setAttribute(`uv`,new La(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Yc=class e extends Ya{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new J,f=new J,p=new J;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new La(c,3)),this.setAttribute(`normal`,new La(l,3)),this.setAttribute(`uv`,new La(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Xc=class e extends Ya{constructor(e=new Xs(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new J,s=new J,c=new q,l=new J,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new La(u,3)),this.setAttribute(`normal`,new La(d,3)),this.setAttribute(`uv`,new La(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Qs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if($c(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if($c(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Qc(e){let t={};for(let n=0;n<e.length;n++){let r=Zc(e[n]);for(let e in r)t[e]=r[e]}return t}function $c(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function el(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function tl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ni.workingColorSpace}var nl={clone:Zc,merge:Qc},rl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,il=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,al=class extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rl,this.fragmentShader=il,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zc(e.uniforms),this.uniformsGroups=el(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new $i().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new pi().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Zr().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new vi().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ol=class extends al{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},sl=class extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new $i(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $i(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cl=class extends sl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Er(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $i(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $i(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $i(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ll=class extends to{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new $i(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $i(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ul=class extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=er,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function pl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ml=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},hl=class extends ml{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zn,endingEnd:Zn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qn:i=e,o=2*t-n;break;case $n:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Qn:a=e,s=2*n-t;break;case $n:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},gl=class extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},_l=class extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},vl=class extends ml{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=xl(n,t,g,y,r);i[p]=yl(x,o,_,b,m)}return i}};function yl(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function bl(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function xl(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=yl(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=bl(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Sl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fl(t,this.TimeBufferType),this.values=fl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fl(e.times,Array),values:fl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),pl(e.settings)&&(n.settings={inTangents:fl(e.settings.inTangents,Array),outTangents:fl(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qn:t=this.InterpolantFactoryMethodDiscrete;break;case Jn:t=this.InterpolantFactoryMethodLinear;break;case Yn:t=this.InterpolantFactoryMethodSmooth;break;case Xn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qn;case this.InterpolantFactoryMethodLinear:return Jn;case this.InterpolantFactoryMethodSmooth:return Yn;case this.InterpolantFactoryMethodBezier:return Xn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;pl(this.settings)&&(Cl(this.settings.inTangents,e),Cl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gr(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(gr(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){gr(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){gr(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ur(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){gr(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,pl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Cl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Sl.prototype.ValueTypeName=``,Sl.prototype.TimeBufferType=Float32Array,Sl.prototype.ValueBufferType=Float32Array,Sl.prototype.DefaultInterpolation=Jn;var wl=class extends Sl{constructor(e,t,n){super(e,t,n)}};wl.prototype.ValueTypeName=`bool`,wl.prototype.ValueBufferType=Array,wl.prototype.DefaultInterpolation=qn,wl.prototype.InterpolantFactoryMethodLinear=void 0,wl.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}};Tl.prototype.ValueTypeName=`color`;var El=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}};El.prototype.ValueTypeName=`number`;var Dl=class extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Jr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ol=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};Ol.prototype.ValueTypeName=`quaternion`,Ol.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Sl{constructor(e,t,n){super(e,t,n)}};kl.prototype.ValueTypeName=`string`,kl.prototype.ValueBufferType=Array,kl.prototype.DefaultInterpolation=qn,kl.prototype.InterpolantFactoryMethodLinear=void 0,kl.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Sl{constructor(e,t,n,r){super(e,t,n,r)}};Al.prototype.ValueTypeName=`vector`;var jl={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ml(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ml(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ml(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Nl=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Pl=class{constructor(e){this.manager=e===void 0?Nl:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pl.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Fl=new WeakMap,Il=class extends Pl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=jl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Fl.get(a);e===void 0&&(e=[],Fl.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=dr(`img`);function s(){l(),t&&t(this);let n=Fl.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Fl.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),jl.remove(`image:${e}`);let n=Fl.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Fl.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jl.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Ll=class extends Pl{constructor(e){super(e)}load(e,t,n,r){let i=new fi,a=new Il(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Rl=class extends Gi{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new $i(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zl=class extends Rl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Gi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $i(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bl=new vi,Vl=new J,Hl=new J,Ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new vi,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new pi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=new J,Gl=new Jr,Kl=new J,ql=class extends Gi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new vi,this.projectionMatrix=new vi,this.projectionMatrixInverse=new vi,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Gl,Kl),Kl.x===1&&Kl.y===1&&Kl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Gl,Kl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wl,Gl,Kl),Kl.x===1&&Kl.y===1&&Kl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Gl,Kl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jl=new J,Yl=new q,Xl=new q,Zl=class extends ql{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jl.x,Jl.y).multiplyScalar(-e/Jl.z),Jl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jl.x,Jl.y).multiplyScalar(-e/Jl.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Xl),t.subVectors(Xl,Yl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ql=class extends Ul{constructor(){super(new Zl(90,1,.5,500)),this.isPointLightShadow=!0}},$l=class extends Rl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},eu=class extends ql{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tu=class extends Ul{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nu=class extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Gi.DEFAULT_UP),this.updateMatrix(),this.target=new Gi,this.shadow=new tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ru=-90,iu=1,au=class extends Gi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zl(ru,iu,e,t);r.layers=this.layers,this.add(r);let i=new Zl(ru,iu,e,t);i.layers=this.layers,this.add(i);let a=new Zl(ru,iu,e,t);a.layers=this.layers,this.add(a);let o=new Zl(ru,iu,e,t);o.layers=this.layers,this.add(o);let s=new Zl(ru,iu,e,t);s.layers=this.layers,this.add(s);let c=new Zl(ru,iu,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ou=class extends Zl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},su=`\\[\\]\\.:\\/`,cu=RegExp(`[\\[\\]\\.:\\/]`,`g`),lu=`[^\\[\\]\\.:\\/]`,uu=`[^`+su.replace(`\\.`,``)+`]`,du=`((?:WC+[\\/:])*)`.replace(`WC`,lu),fu=`(WCOD+)?`.replace(`WCOD`,uu),pu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,lu),mu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,lu),hu=RegExp(`^`+du+fu+pu+mu+`$`),gu=[`material`,`materials`,`bones`,`map`],_u=class{constructor(e,t,n){let r=n||vu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(cu,``)}static parseTrackName(e){let t=hu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);gu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){gr(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){gr(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){gr(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){gr(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){gr(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){gr(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){gr(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;gr(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){gr(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){gr(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vu.Composite=_u,vu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vu.prototype.GetterByBindingType=[vu.prototype._getValue_direct,vu.prototype._getValue_array,vu.prototype._getValue_arrayElement,vu.prototype._getValue_toArray],vu.prototype.SetterByBindingTypeAndVersioning=[[vu.prototype._setValue_direct,vu.prototype._setValue_direct_setNeedsUpdate,vu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vu.prototype._setValue_array,vu.prototype._setValue_array_setNeedsUpdate,vu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vu.prototype._setValue_arrayElement,vu.prototype._setValue_arrayElement_setNeedsUpdate,vu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vu.prototype._setValue_fromArray,vu.prototype._setValue_fromArray_setNeedsUpdate,vu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yu=new vi,bu=class{constructor(e,t,n=0,r=1/0){this.ray=new oo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gr(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(e,t=!0,n=[]){return Su(e,this,n,t),n.sort(xu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Su(e[r],this,n,t);return n.sort(xu),n}};function xu(e,t){return e.distance-t.distance}function Su(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Su(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Cu(e,t,n,r){let i=wu(r);switch(n){case en:return e*t;case on:return e*t/i.components*i.byteLength;case sn:return e*t/i.components*i.byteLength;case cn:return e*t*2/i.components*i.byteLength;case ln:return e*t*2/i.components*i.byteLength;case tn:return e*t*3/i.components*i.byteLength;case nn:return e*t*4/i.components*i.byteLength;case un:return e*t*4/i.components*i.byteLength;case dn:case fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pn:case mn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gn:case vn:return Math.max(e,16)*Math.max(t,8)/4;case hn:case _n:return Math.max(e,8)*Math.max(t,8)/2;case yn:case bn:case Sn:case Cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xn:case wn:case Tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case On:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case kn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case An:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case jn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Mn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Nn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case In:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ln:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Bn:case Vn:case Hn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Un:case Wn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gn:case Kn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function wu(e){switch(e){case Vt:case Ht:return{byteLength:1,components:1};case Wt:case Ut:case Jt:return{byteLength:2,components:1};case Yt:case Xt:return{byteLength:2,components:4};case Kt:case Gt:case qt:return{byteLength:4,components:1};case Qt:case $t:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Tu(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Eu(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Du={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},X={common:{diffuse:{value:new $i(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zr},alphaMap:{value:null},alphaMapTransform:{value:new Zr},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zr}},envmap:{envMap:{value:null},envMapRotation:{value:new Zr},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zr}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zr}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zr},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zr},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zr},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zr}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zr}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zr}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $i(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new $i(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zr},alphaTest:{value:0},uvTransform:{value:new Zr}},sprite:{diffuse:{value:new $i(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zr},alphaMap:{value:null},alphaMapTransform:{value:new Zr},alphaTest:{value:0}}},Ou={basic:{uniforms:Qc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Du.meshbasic_vert,fragmentShader:Du.meshbasic_frag},lambert:{uniforms:Qc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new $i(0)},envMapIntensity:{value:1}}]),vertexShader:Du.meshlambert_vert,fragmentShader:Du.meshlambert_frag},phong:{uniforms:Qc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new $i(0)},specular:{value:new $i(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Du.meshphong_vert,fragmentShader:Du.meshphong_frag},standard:{uniforms:Qc([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new $i(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Du.meshphysical_vert,fragmentShader:Du.meshphysical_frag},toon:{uniforms:Qc([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new $i(0)}}]),vertexShader:Du.meshtoon_vert,fragmentShader:Du.meshtoon_frag},matcap:{uniforms:Qc([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Du.meshmatcap_vert,fragmentShader:Du.meshmatcap_frag},points:{uniforms:Qc([X.points,X.fog]),vertexShader:Du.points_vert,fragmentShader:Du.points_frag},dashed:{uniforms:Qc([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Du.linedashed_vert,fragmentShader:Du.linedashed_frag},depth:{uniforms:Qc([X.common,X.displacementmap]),vertexShader:Du.depth_vert,fragmentShader:Du.depth_frag},normal:{uniforms:Qc([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Du.meshnormal_vert,fragmentShader:Du.meshnormal_frag},sprite:{uniforms:Qc([X.sprite,X.fog]),vertexShader:Du.sprite_vert,fragmentShader:Du.sprite_frag},background:{uniforms:{uvTransform:{value:new Zr},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Du.background_vert,fragmentShader:Du.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zr}},vertexShader:Du.backgroundCube_vert,fragmentShader:Du.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Du.cube_vert,fragmentShader:Du.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Du.equirect_vert,fragmentShader:Du.equirect_frag},distance:{uniforms:Qc([X.common,X.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Du.distance_vert,fragmentShader:Du.distance_frag},shadow:{uniforms:Qc([X.lights,X.fog,{color:{value:new $i(0)},opacity:{value:1}}]),vertexShader:Du.shadow_vert,fragmentShader:Du.shadow_frag}};Ou.physical={uniforms:Qc([Ou.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zr},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zr},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zr},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zr},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zr},sheen:{value:0},sheenColor:{value:new $i(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zr},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zr},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zr},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zr},attenuationDistance:{value:0},attenuationColor:{value:new $i(0)},specularColor:{value:new $i(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zr},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zr},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zr}}]),vertexShader:Du.meshphysical_vert,fragmentShader:Du.meshphysical_frag};var ku={r:0,b:0,g:0},Au=new vi,ju=new Zr;ju.set(-1,0,0,0,1,0,0,0,1);function Mu(e,t,n,r,i,a){let o=new $i(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Y(new xs(1,1,1),new al({name:`BackgroundCubeMaterial`,uniforms:Zc(Ou.backgroundCube.uniforms),vertexShader:Ou.backgroundCube.vertexShader,fragmentShader:Ou.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Au.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ju),l.material.toneMapped=ni.getTransfer(i.colorSpace)!==ir,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new Wc(2,2),new al({name:`BackgroundMaterial`,uniforms:Zc(Ou.background.uniforms),vertexShader:Ou.background.vertexShader,fragmentShader:Ou.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ni.getTransfer(i.colorSpace)!==ir,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ku,tl(e)),n.buffers.color.setClear(ku.r,ku.g,ku.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Nu(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Pu(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Fu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Iu(e){let t=this,n=null,r=0,i=!1,a=!1,o=new $a,s=new Zr,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Lu=4,Ru=6,zu=20,Bu=256,Vu=new eu,Hu=new $i,Uu=null,Wu=0,Gu=0,Ku=!1,qu=new J,Ju=new J,Yu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=qu}=i;Uu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Wu,Gu),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Qu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Jt,format:nn,colorSpace:nr,depthBuffer:!1},r=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xu(r)),this._blurMaterial=ed(r,e,t),this._ggxMaterial=$u(r,e,t)}return r}_compileMaterial(e){let t=new Y(new Ya,e);this._renderer.compile(t,Vu)}_sceneToCubeUV(e,t,n,r,i){let a=new Zl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Hu),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new xs,new so({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Hu),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Qu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Qu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Vu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Lu?n-d+Lu:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Qu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Vu),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Qu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Vu)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Qu(t,3*l*(r>this._lodMax-Lu?r-this._lodMax+Lu:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Vu)}};function Xu(e){let t=[],n=[],r=e,i=e-Lu+1+Ru;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ju.set(1,r,n):e===1?Ju.set(-n,1,-r):e===2?Ju.set(-n,r,1):e===3?Ju.set(-1,r,-n):e===4?Ju.set(-n,-1,r):Ju.set(n,r,-1),Ju.toArray(l,(e*6+t)*3)}}let u=new Ya;u.setAttribute(`position`,new Pa(c,3)),u.setAttribute(`outputDirection`,new Pa(l,3)),n.push(new Y(u,null)),r>Lu&&r--}return{lodMeshes:n,sizeLods:t}}function Zu(e,t,n){let r=new hi(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Qu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function $u(e,t,n){return new al({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Bu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ed(e,t,n){return new al({name:`SphericalGaussianBlur`,defines:{SAMPLES:zu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function td(){return new al({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function nd(){return new al({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var id=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xs(5,5,5),i=new al({name:`CubemapFromEquirect`,uniforms:Zc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Rt),new au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ad(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new id(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Yu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Yu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function od(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_r(`WebGLRenderer: `+e+` extension not supported.`),t}}}function sd(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ia:Fa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function cd(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ld(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:gr(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ud(e,t,n){let r=new WeakMap,i=new pi;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new gi(h,p,m,u);g.type=qt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function dd(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var fd={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function pd(e,t,n,r,i,a){let o=new hi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ya;l.setAttribute(`position`,new La([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new La([0,2,0,0,2,0],2));let u=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Y(l,u),f=new eu(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new hi(t,n,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),c=new hi(t,n,{type:Jt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},ni.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=fd[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var md=new fi,hd=new vs(1,1),gd=new gi,_d=new _i,vd=new gs,yd=[],bd=[],xd=new Float32Array(16),Sd=new Float32Array(9),Cd=new Float32Array(4);function wd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yd[i];if(a===void 0&&(a=new Float32Array(i),yd[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Td(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ed(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Dd(e,t){let n=bd[t];n===void 0&&(n=new Int32Array(t),bd[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Od(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Td(n,t))return;e.uniform2fv(this.addr,t),Ed(n,t)}}function Ad(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Td(n,t))return;e.uniform3fv(this.addr,t),Ed(n,t)}}function jd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Td(n,t))return;e.uniform4fv(this.addr,t),Ed(n,t)}}function Md(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Td(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ed(n,t)}else{if(Td(n,r))return;Cd.set(r),e.uniformMatrix2fv(this.addr,!1,Cd),Ed(n,r)}}function Nd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Td(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ed(n,t)}else{if(Td(n,r))return;Sd.set(r),e.uniformMatrix3fv(this.addr,!1,Sd),Ed(n,r)}}function Pd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Td(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ed(n,t)}else{if(Td(n,r))return;xd.set(r),e.uniformMatrix4fv(this.addr,!1,xd),Ed(n,r)}}function Fd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Id(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Td(n,t))return;e.uniform2iv(this.addr,t),Ed(n,t)}}function Ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Td(n,t))return;e.uniform3iv(this.addr,t),Ed(n,t)}}function Rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Td(n,t))return;e.uniform4iv(this.addr,t),Ed(n,t)}}function zd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Td(n,t))return;e.uniform2uiv(this.addr,t),Ed(n,t)}}function Vd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Td(n,t))return;e.uniform3uiv(this.addr,t),Ed(n,t)}}function Hd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Td(n,t))return;e.uniform4uiv(this.addr,t),Ed(n,t)}}function Ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(hd.compareFunction=n.isReversedDepthBuffer()?518:515,a=hd):a=md,n.setTexture2D(t||a,i)}function Wd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_d,i)}function Gd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vd,i)}function Kd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gd,i)}function qd(e){switch(e){case 5126:return Od;case 35664:return kd;case 35665:return Ad;case 35666:return jd;case 35674:return Md;case 35675:return Nd;case 35676:return Pd;case 5124:case 35670:return Fd;case 35667:case 35671:return Id;case 35668:case 35672:return Ld;case 35669:case 35673:return Rd;case 5125:return zd;case 36294:return Bd;case 36295:return Vd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Kd}}function Jd(e,t){e.uniform1fv(this.addr,t)}function Yd(e,t){let n=wd(t,this.size,2);e.uniform2fv(this.addr,n)}function Xd(e,t){let n=wd(t,this.size,3);e.uniform3fv(this.addr,n)}function Zd(e,t){let n=wd(t,this.size,4);e.uniform4fv(this.addr,n)}function Qd(e,t){let n=wd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $d(e,t){let n=wd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ef(e,t){let n=wd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function tf(e,t){e.uniform1iv(this.addr,t)}function nf(e,t){e.uniform2iv(this.addr,t)}function rf(e,t){e.uniform3iv(this.addr,t)}function af(e,t){e.uniform4iv(this.addr,t)}function of(e,t){e.uniform1uiv(this.addr,t)}function sf(e,t){e.uniform2uiv(this.addr,t)}function cf(e,t){e.uniform3uiv(this.addr,t)}function lf(e,t){e.uniform4uiv(this.addr,t)}function uf(e,t,n){let r=this.cache,i=t.length,a=Dd(n,i);Td(r,a)||(e.uniform1iv(this.addr,a),Ed(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?hd:md;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function df(e,t,n){let r=this.cache,i=t.length,a=Dd(n,i);Td(r,a)||(e.uniform1iv(this.addr,a),Ed(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_d,a[e])}function ff(e,t,n){let r=this.cache,i=t.length,a=Dd(n,i);Td(r,a)||(e.uniform1iv(this.addr,a),Ed(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vd,a[e])}function pf(e,t,n){let r=this.cache,i=t.length,a=Dd(n,i);Td(r,a)||(e.uniform1iv(this.addr,a),Ed(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gd,a[e])}function mf(e){switch(e){case 5126:return Jd;case 35664:return Yd;case 35665:return Xd;case 35666:return Zd;case 35674:return Qd;case 35675:return $d;case 35676:return ef;case 5124:case 35670:return tf;case 35667:case 35671:return nf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return of;case 36294:return sf;case 36295:return cf;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}var hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qd(t.type)}},gf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mf(t.type)}},_f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vf=/(\w+)(\])?(\[|\.)?/g;function yf(e,t){e.seq.push(t),e.map[t.id]=t}function bf(e,t,n){let r=e.name,i=r.length;for(vf.lastIndex=0;;){let a=vf.exec(r),o=vf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){yf(n,l===void 0?new hf(s,e,t):new gf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _f(s),yf(n,e)),n=e}}}var xf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bf(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Sf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cf=37297,wf=0;function Tf(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ef=new Zr;function Df(e){ni._getMatrix(Ef,ni.workingColorSpace,e);let t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(ni.getTransfer(e)){case rr:return[t,`LinearTransferOETF`];case ir:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Of(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Tf(e.getShaderSource(t),r)}return i}function kf(e,t){let n=Df(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Af={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jf(e,t){let n=Af[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Mf=new J;function Nf(){return ni.getLuminanceCoefficients(Mf),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Mf.x.toFixed(4)}, ${Mf.y.toFixed(4)}, ${Mf.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pf(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Lf).join(`
`)}function Ff(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function If(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Lf(e){return e!==``}function Rf(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(e){return e.replace(Bf,Uf)}var Hf=new Map;function Uf(e,t){let n=Du[t];if(n===void 0){let e=Hf.get(t);if(e!==void 0)n=Du[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Vf(n)}var Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(e){return e.replace(Wf,Kf)}function Kf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function qf(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Jf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yf(e){return Jf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Zf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Xf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Qf={302:`ENVMAP_MODE_REFRACTION`};function $f(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Qf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ep={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tp(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ep[e.combine]||`ENVMAP_BLENDING_NONE`}function np(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function rp(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yf(n),l=Zf(n),u=$f(n),d=tp(n),f=np(n),p=Pf(n),m=Ff(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lf).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lf).join(`
`),_.length>0&&(_+=`
`)):(g=[qf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Lf).join(`
`),_=[qf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Du.tonemapping_pars_fragment,n.toneMapping===0?``:jf(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Du.colorspace_pars_fragment,kf(`linearToOutputTexel`,n.outputColorSpace),Nf(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Lf).join(`
`)),o=Vf(o),o=Rf(o,n),o=zf(o,n),s=Vf(s),s=Rf(s,n),s=zf(s,n),o=Gf(o),s=Gf(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Sf(i,i.VERTEX_SHADER,y),S=Sf(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Of(i,x,`vertex`),n=Of(i,S,`fragment`);gr(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new xf(i,h),T=If(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Cf)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ip=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}},op=class{constructor(e){this.id=ip++,this.code=e,this.usedTimes=0}};function sp(e){return e===1030||e===37490||e===36285}function cp(e,t,n,r,i,a){let o=new ki,s=new ap,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ou[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,ne=!!i.displacementMap,B=!!i.emissiveMap,re=!!i.metalnessMap,ie=!!i.roughnessMap,ae=i.anisotropy>0,oe=i.clearcoat>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ae&&!!i.anisotropyMap,pe=oe&&!!i.clearcoatMap,me=oe&&!!i.clearcoatNormalMap,he=oe&&!!i.clearcoatRoughnessMap,ge=le&&!!i.iridescenceMap,V=le&&!!i.iridescenceThicknessMap,_e=ue&&!!i.sheenColorMap,ve=ue&&!!i.sheenRoughnessMap,ye=!!i.specularMap,H=!!i.specularColorMap,be=!!i.specularIntensityMap,xe=de&&!!i.transmissionMap,Se=de&&!!i.thicknessMap,Ce=!!i.gradientMap,we=!!i.alphaMap,Te=i.alphaTest>0,Ee=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ni.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:z,displacementMap:ne,emissiveMap:B,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&sp(i.normalMap.format),metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:fe,clearcoat:oe,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:V,sheen:ue,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:H,specularIntensityMap:be,transmission:de,transmissionMap:xe,thicknessMap:Se,gradientMap:Ce,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:ne&&m(i.displacementMap.channel),emissiveMapUv:B&&m(i.emissiveMap.channel),metalnessMapUv:re&&m(i.metalnessMap.channel),roughnessMapUv:ie&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:V&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(i.sheenRoughnessMap.channel),specularMapUv:ye&&m(i.specularMap.channel),specularColorMapUv:H&&m(i.specularColorMap.channel),specularIntensityMapUv:be&&m(i.specularIntensityMap.channel),transmissionMapUv:xe&&m(i.transmissionMap.channel),thicknessMapUv:Se&&m(i.thicknessMap.channel),alphaMapUv:we&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||ae),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||we),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&ni.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&ni.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ou[t];n=nl.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new rp(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function lp(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function up(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fp(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||up),r.length>1&&r.sort(t||dp),i.length>1&&i.sort(t||dp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pp(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new fp,e.set(t,[i])):n>=r.length?(i=new fp,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function mp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new $i};break;case`SpotLight`:n={position:new J,direction:new J,color:new $i,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new $i,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new $i,groundColor:new $i};break;case`RectAreaLight`:n={color:new $i,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function hp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var gp=0;function _p(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vp(e){let t=new mp,n=hp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new vi,o=new vi;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(_p);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=gp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function yp(e){let t=new vp(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function bp(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new yp(e),t.set(n,[a])):r>=i.length?(a=new yp(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
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
}`,Cp=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],wp=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tp=new vi,Ep=new J,Dp=new J;function Op(e,t,n){let r=new Yo,i=new q,a=new q,o=new pi,s=new ul,c=new dl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new al({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:xp,fragmentShader:Sp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ya;m.setAttribute(`position`,new Pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Y(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new hi(i.x,i.y,{format:cn,type:Jt,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new vs(i.x,i.y,qt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=rn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ft,d.map.depthTexture.magFilter=Ft}else l.isPointLight?(d.map=new id(i.x),d.map.depthTexture=new ys(i.x,Kt)):(d.map=new hi(i.x,i.y),d.map.depthTexture=new vs(i.x,i.y,Kt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=rn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Rt,d.map.depthTexture.magFilter=Rt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ft,d.map.depthTexture.magFilter=Ft);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ep.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ep),Dp.copy(e.position),Dp.add(Cp[t]),e.up.copy(wp[t]),e.lookAt(Dp),e.updateMatrixWorld(),n.makeTranslation(-Ep.x,-Ep.y,-Ep.z),Tp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Tp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new hi(i.x,i.y,{format:cn,type:Jt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function kp(e,t){function n(){let t=!1,n=new pi,r=null,i=new pi(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?re(e.DEPTH_TEST):ie(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=yr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?re(e.STENCIL_TEST):ie(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $i(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new pi().fromArray(R),z=new pi().fromArray(ee);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),re(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),re(e.CULL_FACE),ue(0);function re(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ie(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ae(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ie(e.BLEND),g=!1);return}if(g===!1&&(re(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:gr(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:gr(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:gr(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:gr(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?ie(e.CULL_FACE):re(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):ie(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?ie(e.CULL_FACE):(re(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(re(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ie(e.POLYGON_OFFSET_FILL)}function ge(t){t?re(e.SCISSOR_TEST):ie(e.SCISSOR_TEST)}function V(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function _e(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function ve(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function H(){try{e.compressedTexImage3D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function be(){try{e.texSubImage2D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function xe(){try{e.texSubImage3D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage2D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function De(){try{e.texImage3D(...arguments)}catch(e){gr(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function je(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $i(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:re,disable:ie,bindFramebuffer:ae,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:V,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:H,texImage2D:Ee,texImage3D:De,pixelStorei:ke,getParameter:Oe,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Te,texSubImage2D:be,texSubImage3D:xe,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ce,scissor:Ae,viewport:je,reset:Pe}}function Ap(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):dr(`canvas`)}function g(e,t,n){let r=1,i=ye(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?rr:ni.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&_e(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ie(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ie(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ae(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let R={[Mt]:e.REPEAT,[Nt]:e.CLAMP_TO_EDGE,[Pt]:e.MIRRORED_REPEAT},ee={[Ft]:e.NEAREST,[It]:e.NEAREST_MIPMAP_NEAREST,[Lt]:e.NEAREST_MIPMAP_LINEAR,[Rt]:e.LINEAR,[zt]:e.LINEAR_MIPMAP_NEAREST,[Bt]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ne(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function B(e,t,n){return Math.floor(Math.floor(e/n)/t)}function re(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=B(n.start,r.width,4),c=B(t.start,r.width,4);n.start<=i+1&&a===c&&B(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ie(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ne(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=ni.getPrimaries(ni.workingColorSpace),r=o.colorSpace===``?null:ni.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=ve(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);z(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===an,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&re(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Cu(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Cu(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ye(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ye(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,o,s){if(o.image.length!==6)return;let c=ne(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=ni.getPrimaries(ni.workingColorSpace),r=o.colorSpace===``?null:ni.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ve(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);z(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ye(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ge(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),z(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=ge(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function le(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ce(i.__webglFramebuffer[0],t,0):ce(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,i){let a=r.get(t);n!==void 0&&oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&le(t)}function de(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&V(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ge(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),z(c,a),oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),z(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&le(t)}function fe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let pe=[],me=[];function he(t){if(t.samples>0){if(V(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(pe.length=0,me.length=0,pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(pe.push(l),me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ge(e){return Math.min(i.maxSamples,e.samples)}function V(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function _e(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ve(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ni.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):gr(`WebGLTextures: Unsupported texture color space:`,n)),t}function ye(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=V,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jp(e,t){function n(n,r=``){let i,a=ni.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Mp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Np=`
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

}`,Pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new al({vertexShader:Mp,fragmentShader:Np,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new Wc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fp=class extends br{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Pp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new q,C=null,w=null,T=new Zl;T.viewport=new pi;let E=new Zl;E.viewport=new pi;let D=[T,E],O=new ou,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ji,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ji,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ji,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?an:rn,a=_.stencil?Zt:Kt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hi(d.textureWidth,d.textureHeight,{format:nn,type:Vt,depthTexture:new vs(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hi(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new J,F=new J;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;L(O,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),R(e,O,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=wr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ee=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Zl,o.layers.enable(n),o.viewport=new pi,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new bs,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ee&&ee(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let z=new Tu;z.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}},Ip=new vi,Lp=new Zr;Lp.set(-1,0,0,0,1,0,0,0,1);function Rp(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,tl(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Lp),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zp(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return gr(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Bp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vp=null;function Hp(){return Vp===null&&(Vp=new No(Bp,16,16,cn,Jt),Vp.name=`DFG_LUT`,Vp.minFilter=Rt,Vp.magFilter=Rt,Vp.wrapS=Nt,Vp.wrapT=Nt,Vp.generateMipmaps=!1,Vp.needsUpdate=!0),Vp}var Up=class{constructor(e={}){let{canvas:t=fr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Vt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([un,ln,sn]),g=new Set([Vt,Kt,Wt,Zt,Yt,Xt]),_=new Uint32Array(4),v=new Int32Array(4),y=new J,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=tr;let j=0,M=0,N=null,P=-1,F=null,I=new pi,L=new pi,R=null,ee=new $i(0),te=0,z=t.width,ne=t.height,B=1,re=null,ie=null,ae=new pi(0,0,z,ne),oe=new pi(0,0,z,ne),se=!1,ce=new Yo,le=!1,ue=!1,de=new vi,fe=new J,pe=new pi,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return N===null?B:1}let V=n;function _e(e,n){return t.getContext(e,n)}let ve,ye,H,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,U,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),V===null){let t=`webgl2`;if(V=_e(t,e),V===null)throw _e(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Be()}catch(e){throw t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,U,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),gr(`WebGLRenderer: `+e.message),e}function Be(){ve=new od(V),ve.init(),Le=new jp(V,ve),ye=new Fu(V,ve,e,Le),H=new kp(V,ve),ye.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),O=V.createFramebuffer(),k=V.createFramebuffer(),A=V.createFramebuffer(),be=new ld(V),xe=new lp,Se=new Ap(V,ve,H,xe,ye,Le,be),Ce=new ad(T),we=new Eu(V),Re=new Nu(V,we),Te=new sd(V,we,be,Re),Ee=new dd(V,Te,we,Re,be),Pe=new ud(V,ye,Se),je=new Iu(xe),De=new cp(T,Ce,ve,ye,Re,je),Oe=new Rp(T,xe),ke=new pp,Ae=new bp(ve),Ne=new Mu(T,Ce,H,Ee,p,s),Me=new Op(T,Ee,ye),ze=new zp(V,be,ye,H),Fe=new Pu(V,ve,be),Ie=new cd(V,ve,be),be.programs=De.programs,T.capabilities=ye,T.extensions=ve,T.properties=xe,T.renderLists=ke,T.shadowMap=Me,T.state=H,T.info=be}m!==1009&&(w=new pd(m,t.width,t.height,o,r,i));let Ve=new Fp(T,V);this.xr=Ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(e){e!==void 0&&(B=e,this.setSize(z,ne,!1))},this.getSize=function(e){return e.set(z,ne)},this.setSize=function(e,n,r=!0){if(Ve.isPresenting){K(`WebGLRenderer: Can't change size while VR device is presenting.`);return}z=e,ne=n,t.width=Math.floor(e*B),t.height=Math.floor(n*B),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(z*B,ne*B).floor()},this.setDrawingBufferSize=function(e,n,r){z=e,ne=n,B=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){gr(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ae)},this.setViewport=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),H.viewport(I.copy(ae).multiplyScalar(B).round())},this.getScissor=function(e){return e.copy(oe)},this.setScissor=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),H.scissor(L.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(e){H.setScissorTest(se=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){ie=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,V.clearBufferiv(V.COLOR,0,v))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,U,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Ne.dispose(),ke.dispose(),Ae.dispose(),xe.dispose(),Ce.dispose(),Ee.dispose(),Re.dispose(),ze.dispose(),De.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Ye),Ve.removeEventListener(`sessionend`,Xe),Ze.stop()};function He(e){e.preventDefault(),mr(`WebGLRenderer: Context Lost.`),E=!0}function U(){mr(`WebGLRenderer: Context Restored.`),E=!1;let e=be.autoReset,t=Me.enabled,n=Me.autoUpdate,r=Me.needsUpdate,i=Me.type;Be(),be.autoReset=e,Me.enabled=t,Me.autoUpdate=n,Me.needsUpdate=r,Me.type=i}function Ue(e){gr(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function W(e){let t=e.target;t.removeEventListener(`dispose`,W),We(t)}function We(e){Ge(e),xe.remove(e)}function Ge(e){let t=xe.get(e).programs;t!==void 0&&(t.forEach(function(e){De.releaseProgram(e)}),e.isShaderMaterial&&De.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=st(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Te.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Fe;if(c!==null&&(h=we.get(c),g=Ie,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*ge()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*ge()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(ve.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?we.get(c).bytesPerElement:1,o=xe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ke(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),le===!0&&je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,r),e.side=0,e.needsUpdate=!0,rt(e,t,r),e.side=2):rt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ae.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ue=this.localClippingEnabled,le=je.init(this.clippingPlanes,ue),le===!0&&je.setGlobalState(this.clippingPlanes,t),D!==null&&Me.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ke(o,n,t,e),r.add(o)}else Ke(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=xe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ve.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let qe=null;function Je(e){qe&&qe(e)}function Ye(){Ze.stop()}function Xe(){Ze.start()}let Ze=new Tu;Ze.setAnimationLoop(Je),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){qe=e,Ve.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},Ve.addEventListener(`sessionstart`,Ye),Ve.addEventListener(`sessionend`,Xe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){gr(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ve.enabled===!0&&Ve.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ae.get(e,C.length),x.init(t),x.state.textureUnits=Se.getTextureUnits(),C.push(x),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ce.setFromProjectionMatrix(de,cr,t.reversedDepth),ue=this.localClippingEnabled,le=je.init(this.clippingPlanes,ue),b=ke.get(e,S.length),b.init(),S.push(b),Ve.enabled===!0&&Ve.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Qe(e,t,-1/0,T.sortObjects)}Qe(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(re,ie),he=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,he&&Ne.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&je.beginShadows();let i=x.state.shadowsArray;if(Me.render(i,e,t),le===!0&&je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];et(n,r,e,a)}he&&Ne.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];$e(b,e,n,n.viewport)}}else r.length>0&&et(n,r,e,t),he&&Ne.render(e),$e(b,e,t)}N!==null&&M===0&&(Se.updateMultisampleRenderTarget(N),Se.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Re.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],Se.setTextureUnits(x.state.textureUnits),le===!0&&je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ce)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let i=Ee.update(e),a=e.material;a.visible&&b.push(e,i,a,n,pe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ce))){let i=Ee.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,pe.z,s,t)}}else a.visible&&b.push(e,i,a,n,pe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Qe(i[e],t,n,r)}function $e(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),le===!0&&je.setGlobalState(T.clippingPlanes,n),r&&H.viewport(I.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ve.has(`EXT_color_buffer_half_float`)||ve.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new hi(1,1,{generateMipmaps:!0,type:e?Jt:Vt,minFilter:Bt,samples:Math.max(4,ye.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ni.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ee),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),he&&Ne.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),le===!0&&je.setGlobalState(T.clippingPlanes,r),tt(e,n,r),Se.updateMultisampleRenderTarget(a),Se.updateRenderTargetMipmap(a),ve.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,nt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Se.updateMultisampleRenderTarget(a),Se.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ee,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=me);let r=xe.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=De.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=De.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ce.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,W),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return at(e,s),d}else s.uniforms=De.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=De.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=je.uniform),at(e,s),r.needsLights=lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=xe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function st(e,t,n,r,i){t.isScene!==!0&&(t=me),Se.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ni.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ce.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=xe.get(r),y=x.state.lights;if(le===!0&&(ue===!0||e!==F)){let t=e===F&&r.id===P;je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==je.numPlanes||v.numIntersection!==je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=rt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(V,`projectionMatrix`,e.projectionMatrix),O.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(V,fe.setFromMatrixPosition(e.matrixWorld)),ye.logarithmicDepthBuffer&&O.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(V,`sunShadowMap`,y.state.sunShadowMap,Se),y.state.directionalShadowMap.length>0&&O.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,Se),y.state.spotShadowMap.length>0&&O.setValue(V,`spotShadowMap`,y.state.spotShadowMap,Se),y.state.pointShadowMap.length>0&&O.setValue(V,`pointShadowMap`,y.state.pointShadowMap,Se)),i.isSkinnedMesh){O.setOptional(V,i,`bindMatrix`),O.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(V,`boneTexture`,e.boneTexture,Se))}i.isBatchedMesh&&(O.setOptional(V,i,`batchingTexture`),O.setValue(V,`batchingTexture`,i._matricesTexture,Se),O.setOptional(V,i,`batchingIdTexture`),O.setValue(V,`batchingIdTexture`,i._indirectTexture,Se),O.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(V,`batchingColorTexture`,i._colorsTexture,Se));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Pe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Hp()),w){if(O.setValue(V,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ct(k,E),a&&r.fog===!0&&Oe.refreshFogUniforms(k,a),Oe.refreshMaterialUniforms(k,r,B,ne,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}xf.upload(V,it(v),k,Se)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xf.upload(V,it(v),k,Se),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(V,`center`,i.center),O.setValue(V,`modelViewMatrix`,i.modelViewMatrix),O.setValue(V,`normalMatrix`,i.normalMatrix),O.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,S),ze.bind(n,S)}}return S}function ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=xe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),xe.get(e.texture).__webglTexture=t,xe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=xe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=xe.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest,H.viewport(I),H.scissor(L),H.setScissorTest(R),P=-1;return}if(o.__webglFramebuffer===void 0)Se.setupRenderTarget(e);else if(o.__hasExternalTextures)Se.rebindTextures(e,xe.get(e.texture).__webglTexture,xe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&xe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Se.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=xe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Se.useMultisampledRTT(e)===!1?xe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest}else I.copy(ae).multiplyScalar(B).floor(),L.copy(oe).multiplyScalar(B).floor(),R=se;if(n!==0&&(r=O),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(I),H.scissor(L),H.setScissorTest(R),i){let r=xe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=xe.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=xe.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}P=-1};function ut(e){let t=xe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ye.textureFormatReadable(e.format),t.__typeReadable=ye.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){gr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=xe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=ut(o);if(u.__formatReadable===!1){gr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){gr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a)}finally{let e=N===null?null:xe.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=xe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=ut(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=N===null?null:xe.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vr(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Se.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(Se.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Se.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(Se.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=xe.get(e),r=xe.get(t),h=xe.get(n.__renderTarget),g=xe.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xe.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xe.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||xe.has(e)){let n=xe.get(e),r=xe.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,k),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){xe.get(e).__webglFramebuffer===void 0&&Se.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Se.setTextureCube(e,0):e.isData3DTexture?Se.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Se.setTexture2DArray(e,0):Se.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,H.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ni._getDrawingBufferColorSpace(e),t.unpackColorSpace=ni._getUnpackColorSpace()}};function Wp(e){let t=U.treasuryScene.surface,n=[new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4),new Uint8Array(t.size*t.size*4)],r=(e,n,r=1)=>{let i=Math.abs(e/r),a=Math.abs(n/r);return i<t.crossStroke&&a<t.crossArm||a<t.crossStroke&&i<t.crossArm||i<t.crossTip&&Math.abs(a-t.crossArm)<t.crossTipDepth||a<t.crossTip&&Math.abs(i-t.crossArm)<t.crossTipDepth};for(let i=0;i<t.size;i++)for(let a=0;a<t.size;a++){let o=(a+.5)/t.size*2-1,s=(i+.5)/t.size*2-1,c=Math.hypot(o,s),l=Math.atan2(s,o),u=Math.sin(i*t.grainFrequency)*t.grainAmplitude,d=!1;if(e===`coin`){let e=Math.round(l*t.beadCount/(Math.PI*2))*Math.PI*2/t.beadCount;d=Math.abs(c-t.rimRadius)<t.rimWidth||Math.abs(c-t.innerRadius)<t.innerWidth||Math.hypot(o-Math.cos(e)*t.beadRadius,s-Math.sin(e)*t.beadRadius)<t.beadSize||r(o,s)||r(Math.abs(o)-t.satelliteOffset,Math.abs(s)-t.satelliteOffset,t.satelliteScale)}let f=e===`coin`?[(d?t.reliefAlbedo:t.fieldAlbedo)+u,(d?t.reliefHeight:t.fieldHeight)+u,(d?t.reliefRoughness:t.fieldRoughness)+u]:[t.reliefAlbedo+u,t.fieldHeight+u,t.fieldRoughness+u];for(let e=0;e<n.length;e++){let r=n[e],o=(i*t.size+a)*4,s=Math.round(qr.clamp(f[e],0,1)*255);r[o]=r[o+1]=r[o+2]=s,r[o+3]=255}}let i=n.map((n,r)=>{let i=new No(n,t.size,t.size,nn);return i.name=`${e}-${[`albedo`,`height`,`roughness`][r]}`,i.colorSpace=r===0?tr:``,i.magFilter=Rt,i.minFilter=Bt,i.generateMipmaps=!0,e===`steel`&&(i.wrapS=i.wrapT=Mt),i.needsUpdate=!0,i});return{albedo:i[0],height:i[1],roughness:i[2]}}function Gp(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function Kp(e){let{doors:t,fov:n}=U.cinematic,r=Number.isFinite(e)&&e>0?e:1,i=n*Math.PI/360;return Math.max(t.height+t.frameWidth*2,(t.width+t.frameWidth*2)/r)/(2*Math.tan(i))*t.cameraMargin+t.frameDepth}function qp(e,t,n=`gentle`){let{doors:r,introSeconds:i}=U.cinematic,a=Number.isFinite(e)?Math.max(0,Math.min(i,e)):0,o=n===`push`?Gp(a,r.openStart,G.doorImpulseEnd)*G.doorImpulseFraction+Gp(a,G.doorImpulseEnd,r.openEnd)*(1-G.doorImpulseFraction):Gp(a,r.openStart,r.openEnd),s=Gp(a,r.pushStart,i),c=Kp(t),l=c*(1-r.approachFraction*o);return{angle:o*r.openDegrees*Math.PI/180,opening:o,cameraZ:l+(r.endCameraZ-l)*s,cameraY:r.startCameraY+(r.endCameraY-r.startCameraY)*s,fitZ:c,light:r.lightStart+(r.lightEnd-r.lightStart)*o}}function Jp(e=`gentle`){let t=U.cinematic.doors,n=U.premium,r=new Ki;r.name=`vault-door-portal`;let i=new Set,a=new Set,o=new Set,s=new Set([`door`,`wall`]),c=!1,l,u=()=>{},d=new Promise(e=>{u=e}),f=()=>{},p=new Promise(e=>{f=e}),m=e=>(i.add(e),e),h=e=>(a.add(e),e),g=()=>{c||(c=!0,clearTimeout(l),u(),f(),i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),o.forEach(e=>e.dispose()),r.clear())};try{let i=m(new xs),a=h(new sl({color:n.colors.champagne,metalness:n.materials.metalness,roughness:n.materials.goldRoughness})),_=h(new sl({color:n.colors.coinSide,metalness:t.faceMetalness,roughness:t.faceRoughness})),v=new Uint8Array(t.stoneSize*t.stoneSize*4),y=t.stoneSize/t.stoneRows,b=t.stoneSize/t.stoneColumns;for(let e=0;e<t.stoneSize;e++)for(let n=0;n<t.stoneSize;n++){let r=Math.floor(e/y),i=(n+r%2*b/2)%b,a=e%y<t.stoneGroutPx||i<t.stoneGroutPx,o=Math.sin(n*t.goldenAngle+e)*Math.cos(e*t.goldenAngle-n),s=Math.round(255*(a?t.stoneGroutValue:t.stoneValue+o*t.stoneNoise)),c=(e*t.stoneSize+n)*4;v[c]=v[c+1]=v[c+2]=s,v[c+3]=255}let x=new No(v,t.stoneSize,t.stoneSize);x.wrapS=x.wrapT=Mt,x.magFilter=Rt,x.minFilter=Bt,x.generateMipmaps=!0,x.needsUpdate=!0,o.add(x);let S=h(new sl({color:t.stoneColor,metalness:0,roughness:t.stoneRoughness,map:x,bumpMap:x,bumpScale:t.stoneBump})),C=h(new so({color:n.colors.white,toneMapped:!1,visible:!1})),w=h(new so({color:n.colors.white,toneMapped:!1,visible:!1})),T=h(new sl({color:n.colors.edge,metalness:n.materials.metalness,roughness:n.materials.goldRoughness,emissive:n.colors.coinSide,emissiveIntensity:t.sealEmissive})),E=(e,t,n,r)=>{let a=new Y(i,r);return a.scale.set(...t),a.position.set(...n),e.add(a),a},D=t.width/2,O=t.height/2,k=(e,n,i,a,o,s)=>{let c=m(new Wc(n-e,a-i)),l=c.getAttribute(`position`),u=c.getAttribute(`uv`);for(let r=0;r<u.count;r++){let o=l.getX(r)+(e+n)/2,c=l.getY(r)+(i+a)/2;u.setXY(r,s?o/t.wallArtWidth+.5:o/t.stoneRepeatWorld,s?(c-t.wallArtCenterY)/t.wallArtHeight+.5:c/t.stoneRepeatWorld)}let d=new Y(c,o);d.name=s?`vault-facade-wall`:`vault-stone-wall`,d.position.set((e+n)/2,(i+a)/2,t.thickness/2+t.faceLift*(s?2:1)),r.add(d)};for(let e of[-1,1])E(r,[t.wallExtent,t.height+t.wallExtent*2,t.thickness],[e*(D+t.wallExtent/2),0,0],S),E(r,[t.width,t.wallExtent,t.thickness],[0,e*(O+t.wallExtent/2),0],S),E(r,[t.frameWidth,t.height+t.frameWidth*2,t.frameDepth],[e*(D+t.frameWidth/2),0,t.frameDepth/2],a),E(r,[t.width,t.frameWidth,t.frameDepth],[0,e*(O+t.frameWidth/2),t.frameDepth/2],a);k(-t.wallExtent,-D,-t.wallExtent,t.wallExtent,S,!1),k(D,t.wallExtent,-t.wallExtent,t.wallExtent,S,!1),k(-D,D,O,t.wallExtent,S,!1),k(-D,D,-t.wallExtent,-O,S,!1);let A=t.wallArtCenterY-t.wallArtHeight/2,j=t.wallArtCenterY+t.wallArtHeight/2;k(-t.wallArtWidth/2,-D,A,j,C,!0),k(D,t.wallArtWidth/2,A,j,C,!0),k(-D,D,O,j,C,!0),k(-D,D,A,-O,C,!0);let M=m(new Cs(t.pillarRadius,t.pillarRadius,t.pillarHeight,t.pillarSegments)),N=m(new Cs(t.pillarRadius*t.pillarRimScale,t.pillarRadius*t.pillarRimScale,t.pillarRimHeight,t.pillarSegments)),P=m(new Jc(t.sconceRadius,t.boltSegments,t.boltSegments)),F=h(new so({color:n.colors.light,toneMapped:!1}));for(let e of[-1,1]){let i=e*(D+t.pillarOffset),o=new Y(M,S);o.position.set(i,0,t.frameDepth),r.add(o);for(let e of[-1,1]){let n=new Y(N,a);n.position.set(i,e*(t.pillarHeight/2-t.pillarRimHeight),t.frameDepth),r.add(n)}let s=new Y(P,F);s.position.set(i,t.sconceY,t.sconceZ),r.add(s);let c=new $l(n.colors.light,t.sconceIntensity,t.sconceDistance,t.sconceDecay);c.position.copy(s.position),r.add(c)}let I=m(new Cs(t.hingeRadius,t.hingeRadius,t.hingeHeight,t.hingeSegments)),L=m(new Jc(t.boltRadius,t.boltSegments,t.boltSegments)),R=m(new Yc(t.sealRadius,t.sealTube,t.hingeSegments,t.sealSegments,Math.PI)),ee=[];for(let e of[-1,1]){let n=new Ki;n.name=e<0?`vault-left-hinge`:`vault-right-hinge`,n.position.x=e*D,r.add(n),ee.push(n);let i=-e*D/2;E(n,[D+t.seamOverlap,t.height,t.thickness],[i,0,0],_);let o=m(new Wc(D+t.seamOverlap,t.height)),s=o.getAttribute(`uv`);for(let t=0;t<s.count;t++)s.setX(t,s.getX(t)/2+(e>0?.5:0));let c=new Y(o,w);c.position.set(i,0,t.thickness/2+t.faceLift),n.add(c);let l=t.thickness/2+t.innerRail/2+t.faceLift;for(let e of[-1,1]){E(n,[t.innerRail,t.height-t.railInset*2,t.innerRail],[i+e*(D/2-t.railInset),0,l],a),E(n,[D-t.railInset*2,t.innerRail,t.innerRail],[i,e*(O-t.railInset),l],a);for(let r=0;r<t.boltRows;r++){let o=new Y(L,a);o.position.set(i+e*(D/2-t.boltInset),-O+t.boltInset+(t.height-t.boltInset*2)*r/(t.boltRows-1),l),n.add(o)}}for(let e of[-1,0,1]){let r=new Y(I,a);r.position.set(0,e*t.hingeSpacing,t.thickness/2),n.add(r)}let u=new Y(R,T);u.position.set(-e*D,t.sealY,l+t.sealLift),u.rotation.z=e<0?Math.PI/2:-Math.PI/2,n.add(u)}let te=new $l(n.colors.light,t.lightStart,t.lightDistance,t.lightDecay);te.position.set(t.lightPosition[0],t.lightPosition[1],t.lightPosition[2]),r.add(te);let z=e=>{s.delete(e),e===`door`&&f(),s.size===0&&(clearTimeout(l),u())};l=setTimeout(()=>{s.clear(),f(),u()},t.textureTimeoutMs);let ne=(e,t,r)=>{let i=new Ll().load(t,t=>{if(c){t.dispose();return}t.colorSpace=tr,t.anisotropy=n.texture.anisotropy,r.map=t,r.visible=!0,r.needsUpdate=!0,z(e)},void 0,()=>z(e));o.add(i)};return ne(`door`,t.faceAsset,w),ne(`wall`,t.wallAsset,C),{root:r,ready:d,frontReady:p,draw(t,n){let i=qp(t,n,e);return ee[0].rotation.y=i.angle,ee[1].rotation.y=-i.angle,te.intensity=i.light,r.updateMatrixWorld(!0),i},dispose:g}}catch(e){throw g(),e}}var Yp={height:1.8,colors:{background:`#171c24`,body:`#aab0b3`,floor:`#30363e`,grid:`#58626d`,light:`#fff3e1`,fill:`#adc8ec`,text:`#e4e8ef`},material:{roughness:.68,metalness:.04},camera:{fov:38,near:.05,far:60,distance:3.1,height:1.2,targetY:.95},light:{ambient:2,key:3.2,fill:1.3,shadowSize:1024},floor:{size:30,divisions:60,y:-.015},knight:{startFrame:181,frameCount:421,elbowBendScale:.55,elbowMin:.24,elbowMax:.48,fingerCurl:[.3,.42,.25]},pixelRatio:1.5,timeoutMs:12e3};function Xp(e){let t=new Ki,n=new Ya;n.setAttribute(`position`,new La(e.positions,3)),n.setAttribute(`skinIndex`,new Fa(e.skinIndex,4)),n.setAttribute(`skinWeight`,new La(e.skinWeight,4)),n.setIndex(e.indices),n.computeVertexNormals();let r=new sl({color:Yp.colors.body,...Yp.material}),i=new jo(n,r);i.name=`makehuman-continuous-body`,i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;let a=e.bones.map(e=>{let t=new Mo;return t.name=e.name,t});e.bones.forEach((t,n)=>{a[n].position.fromArray(t.head),t.parent>=0?(a[n].position.sub(new J().fromArray(e.bones[t.parent].head)),a[t.parent].add(a[n])):i.add(a[n])}),t.add(i),t.updateMatrixWorld(!0);let o=new Io(a);i.bind(o);let s=(e.frames.length-1)/e.fps,c=new Jr,l=new Jr,u=e.positions.reduce((t,n,r)=>(r%3==1&&e.positions[r]<.16&&t.push((r-1)/3),t),[]),d=0,f=!1;function p(n){if(f)return;let r=qr.clamp(Number.isFinite(n)?n:0,0,s)*e.fps,i=Math.floor(r),o=e.frames[i],u=e.frames[Math.min(i+1,e.frames.length-1)],p=r-i;a.forEach((e,t)=>{c.fromArray(o.q,t*4),l.fromArray(u.q,t*4),e.quaternion.copy(c).slerp(l,p).normalize()}),t.position.fromArray(o.root).lerp(new J().fromArray(u.root),p),t.position.y+=d,t.updateMatrixWorld(!0)}p(0);let m=new J,h=1/0;for(let e of u)i.getVertexPosition(e,m),h=Math.min(h,m.y);return d=e.groundOffset??-h,p(0),{root:t,mesh:i,bones:a,skeleton:o,duration:s,draw:p,dispose(){f||(f=!0,n.dispose(),r.dispose(),o.dispose())}}}var Z={colors:{mail:`#56616a`,steel:`#a9b4bb`,brass:`#b49a57`,linen:`#dad0b6`,red:`#622b34`,leather:`#30221c`,dark:`#111419`},material:{mail:{roughness:.84,metalness:.35},steel:{roughness:.38,metalness:.78},brass:{roughness:.48,metalness:.72},cloth:{roughness:.96,metalness:0},leather:{roughness:.86,metalness:.02}},assets:{mail:`assets/knight/chainmail-v1.lossless.webp`,steel:`assets/knight/forged-steel-v1.lossless.webp`,linen:`assets/knight/ivory-linen-v1.lossless.webp`},texture:{timeoutMs:3e4,repeatPerMetre:7,anisotropy:4,mailBump:.0014,clothBump:5e-4},surface:{mailOffset:.008,gloveOffset:.005,handThreshold:.4,mailMinY:.24,mailMaxY:1.58,coveredMinY:.65,coveredMaxY:1.28,coveredMaxX:.24,slitInnerX:.105},coat:{segments:48,folds:12,foldDepth:.003,armholeY:1.32,armholeWidth:.8,rows:[[.96,.194,.158,.023],[1.04,.178,.152,.034],[1.12,.178,.154,.04],[1.22,.2,.162,.034],[1.32,.221,.152,.03],[1.41,.238,.131,.024],[1.47,.213,.1,.02],[1.51,.148,.082,.027],[1.525,.071,.065,.027]],hemY:.61,split:.025,hemFlare:.08,skirtRows:12,legBlendHeight:.12},belt:{y:1.058,height:.04,x:.181,z:.155,centerZ:.035,buckleWidth:.059,buckleHeight:.048,buckleTube:.004},helmet:{segments:32,rows:[[1.548,.105,.125,.055],[1.61,.117,.14,.055],[1.71,.116,.143,.055],[1.785,.112,.137,.046],[1.818,.072,.096,.038],[1.825,.001,.001,.038]],eyeY:1.7,eyeHeight:.012,eyeWidth:.072,eyeX:.049,browY:1.715,browHeight:.009,noseWidth:.017,noseHeight:.135,rivetRadius:.003,ventRadius:.0024},cross:{centerY:1.338,width:.175,height:.225,stroke:.044,offset:.003},cape:{width:.49,flare:.08,topY:1.47,length:.77,topZ:-.145,bottomZ:-.28,columns:20,rows:24,folds:5,foldDepth:.014,physics:{fps:60,gravity:9.81,damping:.991,drag:2.8,iterations:7,relaxFrames:35,shear:.55,bend:.13,gust:1.2,gustFrequency:3.8,ripple:.35,lateralGust:1.4,lateralFrequency:2.8,bodyRadius:.185,thighRadius:.087,collisionMargin:.007}},boot:{height:.3,ankleWidth:.047,calfWidth:.057,footWidth:.061,toeZ:.205,heelZ:-.071,soleY:.008,instepY:.087,segments:32},clothMotion:{amplitude:.01,frequency:5.4},fitting:{neighbours:3,epsilon:1e-4,torsoMaxX:.235,thighRadius:.124,clothClearance:.008,waistPinY:.947,collisionIterations:3,slitTopY:.82,capeBands:40,capeLowY:.45,capeHighY:1.58,capeGarmentGap:.022},mantle:{segments:64,rows:8,neckX:.075,neckZ:.074,neckY:1.535,shoulderX:.26,frontZ:.165,rearZ:.155,centerZ:.01,edgeY:1.42,backRise:.05,overlap:.015},detail:{tubeSides:6,curveSegments:32,buttonRadius:.011},studio:{environmentIntensity:.75,environmentBlur:.04,ambient:.9,key:2,fill:.9,exposure:.95}},Zp=Z.cape,Qp=Zp.physics,$p=qr.clamp,em=new WeakMap;function tm(e){let t=(e-.5)*Zp.width,n=Math.sqrt(Math.max(0,1-(t/Z.mantle.shoulderX)**2));return new J(t,Z.mantle.edgeY+Z.mantle.backRise*n,Z.mantle.centerZ-Z.mantle.rearZ*n)}function nm(){let e=new Float32Array((Zp.columns+1)*(Zp.rows+1)*3),t=[],n=[];for(let r=0;r<=Zp.rows;r++)for(let i=0;i<=Zp.columns;i++){let a=r/Zp.rows,o=i/Zp.columns,s=(r*(Zp.columns+1)+i)*3,c=tm(o);if(e[s]=c.x+(o-.5)*Zp.flare*a,e[s+1]=qr.lerp(c.y,Zp.topY-Zp.length,a),e[s+2]=qr.lerp(c.z,Zp.bottomZ,a)+Math.cos(o*Math.PI*2*Zp.folds)*Zp.foldDepth*a,t.push(o,a),r<Zp.rows&&i<Zp.columns){let e=s/3,t=e+1,r=e+Zp.columns+1,i=r+1;n.push(e,r,t,t,r,i)}}return{positions:e,uv:t,indices:n}}function rm(e){let t=[`spine01`,`spine03`,`spine05`,`upperleg01.L`,`upperleg01.R`,`lowerleg01.L`,`lowerleg01.R`],n=new Set;for(let r of t){let t=e.bones.findIndex(e=>e.name===r);if(t<0)throw Error(`Missing cape collider bone: `+r);for(;t>=0;)n.add(t),t=e.bones[t].parent}let r=[...n].sort((e,t)=>e-t),i=e.bones.map(()=>new vi),a=new vi,o=new Jr,s=new Jr,c=new J,l=new J(1,1,1),u=t=>e.bones.findIndex(e=>e.name===t),d=u(`spine01`),f=new vi,p=new J,m=new J().fromArray(e.bones[d].head);return t=>{let n=$p(t*e.fps,0,e.frames.length-1),h=Math.floor(n),g=e.frames[h],_=e.frames[Math.min(h+1,e.frames.length-1)],v=n-h;p.fromArray(g.root).lerp(new J().fromArray(_.root),v);for(let t of r){let n=e.bones[t];c.fromArray(n.head),n.parent>=0&&c.sub(new J().fromArray(e.bones[n.parent].head)),o.fromArray(g.q,t*4),s.fromArray(_.q,t*4),o.slerp(s,v).normalize(),a.compose(c,o,l),n.parent>=0?i[t].multiplyMatrices(i[n.parent],a):i[t].copy(a)}f.copy(i[d]).multiply(new vi().makeTranslation(-m.x,-m.y,-m.z));let y=e=>new J().setFromMatrixPosition(i[u(e)]).add(p),b=[{a:y(`spine05`),b:y(`spine01`),radius:Qp.bodyRadius}];for(let e of[`L`,`R`])b.push({a:y(`upperleg01.`+e),b:y(`lowerleg01.`+e),radius:Qp.thighRadius});return{skin:f.clone(),root:p.clone(),capsules:b}}}function im(e){let t=nm(),n=t.positions.length/3,r=Zp.columns+1,i=new Float64Array(t.positions.length),a=new Float64Array(i.length),o=[],s=rm(e),c=1/Qp.fps,l=c*c,u=(e.frames.length-1)/e.fps;function d(e,n,r){let i=t.positions[e*3]-t.positions[n*3],a=t.positions[e*3+1]-t.positions[n*3+1],s=t.positions[e*3+2]-t.positions[n*3+2];o.push({a:e,b:n,length:Math.hypot(i,a,s),strength:r})}for(let e=0;e<=Zp.rows;e++)for(let t=0;t<=Zp.columns;t++){let n=e*r+t;t<Zp.columns&&d(n,n+1,1),e<Zp.rows&&d(n,n+r,1),t<Zp.columns&&e<Zp.rows&&(d(n,n+r+1,Qp.shear),d(n+1,n+r,Qp.shear)),t+2<=Zp.columns&&d(n,n+2,Qp.bend),e+2<=Zp.rows&&d(n,n+r*2,Qp.bend)}let f=s(0),p=new J;for(let e=0;e<n;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(i,e*3);a.set(i);let m=new Float64Array(r*3),h=new J,g=new J,_=new J;function v(u,d=!1){let f=s(u);for(let e=0;e<r;e++)p.fromArray(t.positions,e*3).applyMatrix4(f.skin).add(f.root),p.toArray(m,e*3);let v=e.heading??0,y=Math.sin(v),b=Math.cos(v);for(let e=r;e<n;e++){let t=Math.floor(e/r)/Zp.rows,n=e%r/Zp.columns,o=d?0:Math.sin(u*Qp.gustFrequency-t*2+n)*Qp.gust+Math.sin(u*7+n*5-t*4)*Qp.ripple,s=d?0:Math.sin(u*Qp.lateralFrequency-t+n)*Qp.lateralGust;for(let t=0;t<3;t++){let n=e*3+t,r=i[n],u=r-a[n],d=t===1?-Qp.gravity:o*(t===0?y:b)+s*(t===0?b:-y);i[n]=r+u*Qp.damping+(d-Qp.drag*u/c)*l,a[n]=r}}let x=()=>{for(let e=0;e<m.length;e++)i[e]=m[e]};x();for(let e=0;e<Qp.iterations;e++){for(let e of o){let t=e.a*3,n=e.b*3,a=i[n]-i[t],o=i[n+1]-i[t+1],s=i[n+2]-i[t+2],c=Math.hypot(a,o,s);if(c<1e-9)continue;let l=+(e.a>=r),u=+(e.b>=r),d=l+u;if(!d)continue;let f=(c-e.length)/c*e.strength/d,p=a*f,m=o*f,h=s*f;i[t]=i[t]+p*l,i[t+1]=i[t+1]+m*l,i[t+2]=i[t+2]+h*l,i[n]=i[n]-p*u,i[n+1]=i[n+1]-m*u,i[n+2]=i[n+2]-h*u}for(let e of f.capsules){h.copy(e.b).sub(e.a);let t=h.lengthSq(),a=e.radius+Qp.collisionMargin;for(let o=r;o<n;o++){let n=o*3;p.fromArray(i,n),g.copy(p).sub(e.a),_.copy(e.a).addScaledVector(h,$p(g.dot(h)/t,0,1)),g.copy(p).sub(_);let r=g.length();r<a&&r>1e-9&&(p.copy(_).addScaledVector(g,a/r),p.toArray(i,n))}}x()}for(let e=0;e<m.length;e++)a[e]=m[e];return f}for(let e=0;e<Qp.relaxFrames;e++)v(0,!0);a.set(i);let y=[];function b(e){let t=new Float32Array(i.length);for(let r=0;r<n;r++)t[r*3]=i[r*3]-e.x,t[r*3+1]=i[r*3+1]-e.y,t[r*3+2]=i[r*3+2]-e.z;y.push(t)}b(f.root);for(let e=1;e<=Math.ceil(u*Qp.fps);e++)b(v(Math.min(u,e/Qp.fps)).root);return{frames:y,duration:u,fps:Qp.fps,pinCount:r,pattern:t}}function am(e){let t=em.get(e);t||(t=im(e),em.set(e,t));let{frames:n,duration:r,fps:i}=t;return{...t,sample(e,t){let a=$p(Number.isFinite(e)?e:0,0,r)*i,o=Math.floor(a),s=Math.min(o+1,n.length-1),c=a-o;for(let e=0;e<t.length;e++)t[e]=qr.lerp(n[o][e],n[s][e],c)}}}function om(e){let t=[`L`,`R`].map(t=>({upper:e.bones.find(e=>e.name===`upperleg01.`+t),lower:e.bones.find(e=>e.name===`lowerleg01.`+t),a:new J,b:new J,radius:Z.fitting.thighRadius+Z.fitting.clothClearance})),n=e.bones.map(()=>new vi),r=new vi,i=new vi,a=new vi,o=new J,s=new J,c=new J,l=new J,u=new J,d=new J;return{capsules:t,update(){a.copy(e.mesh.matrixWorld).invert(),t.forEach(e=>{e.a.setFromMatrixPosition(e.upper.matrixWorld).applyMatrix4(a),e.b.setFromMatrixPosition(e.lower.matrixWorld).applyMatrix4(a)}),n.forEach((t,n)=>t.multiplyMatrices(e.bones[n].matrixWorld,e.skeleton.boneInverses[n]))},project(e,a){let f=e.geometry.getAttribute(`position`);if(f.getY(a)>=Z.fitting.waistPinY)return;let p=e.geometry.getAttribute(`skinIndex`),m=e.geometry.getAttribute(`skinWeight`);r.elements.fill(0);for(let e=0;e<4;e++){let t=m.array[a*4+e];if(!t)continue;let i=n[p.array[a*4+e]].elements;for(let e=0;e<16;e++)r.elements[e]=r.elements[e]+i[e]*t}i.copy(e.bindMatrixInverse).multiply(r).multiply(e.bindMatrix),u.set(f.getX(a),0,f.getZ(a)-Z.coat.rows[0][3]).normalize().transformDirection(i),o.fromBufferAttribute(f,a).applyMatrix4(i);let h=!1;for(let e=0;e<Z.fitting.collisionIterations;e++)for(let e of t){s.copy(e.b).sub(e.a),c.copy(o).sub(e.a),l.copy(e.a).addScaledVector(s,qr.clamp(c.dot(s)/s.lengthSq(),0,1)),c.copy(o).sub(l);let t=c.length();if(t<e.radius&&t>1e-8){let t=t=>(d.copy(o).addScaledVector(u,t),c.copy(d).sub(e.a),l.copy(e.a).addScaledVector(s,qr.clamp(c.dot(s)/s.lengthSq(),0,1)),d.distanceToSquared(l)>=e.radius*e.radius),n=0,r=e.radius*2;for(let e=0;e<8&&!t(r);e++)r*=2;for(let e=0;e<14;e++){let e=(n+r)/2;t(e)?r=e:n=e}o.addScaledVector(u,r),h=!0}}h&&(o.applyMatrix4(i.invert()),f.setXYZ(a,o.x,o.y,o.z))}}}function sm(e,t){let n=Z.fitting,r=n.capeBands,i=Array.from({length:r},()=>({minX:1/0,maxX:-1/0,back:1/0})),a=e.bones.find(e=>e.name===`root`),o=new vi,s=new vi,c=new J,l=e=>qr.clamp((e-n.capeLowY)/(n.capeHighY-n.capeLowY)*(r-1),0,r-1);function u(){o.copy(a.matrixWorld).multiply(e.skeleton.boneInverses[e.bones.indexOf(a)]).invert().multiply(e.root.matrixWorld),s.copy(o).invert(),i.forEach(e=>{e.minX=1/0,e.maxX=-1/0,e.back=1/0});for(let e of t){let t=e.geometry.getAttribute(`position`);for(let n=0;n<t.count;n++){e.getVertexPosition(n,c),c.applyMatrix4(o);let t=l(c.y),a=Math.max(0,Math.floor(t)-1),s=Math.min(r-1,Math.ceil(t)+1);for(let e=a;e<=s;e++){let t=i[e];t.minX=Math.min(t.minX,c.x),t.maxX=Math.max(t.maxX,c.x),t.back=Math.min(t.back,c.z)}}}}function d(e,t){u();for(let a=t;a<e.count;a++){c.fromBufferAttribute(e,a).applyMatrix4(o);let t=l(c.y),u=i[Math.floor(t)],d=i[Math.min(r-1,Math.ceil(t))],f=Math.min(u.back,d.back),p=Math.min(u.minX,d.minX),m=Math.max(u.maxX,d.maxX);Number.isFinite(f)&&c.x>=p-n.capeGarmentGap&&c.x<=m+n.capeGarmentGap&&c.z>f-n.capeGarmentGap&&(c.z=f-n.capeGarmentGap,c.applyMatrix4(s),e.setXYZ(a,c.x,c.y,c.z))}}return{project:d}}var cm=qr.clamp,lm=qr.lerp;function um(e,t){let n=new Ki;n.name=`knight-outfit`,e.root.add(n);let r=new Set,i=new Set,a=[],o=[],s=[],c=!1,l=!0,u=om(e),d=e=>{let n=t.bones.findIndex(t=>t.name===e);if(n<0)throw Error(`Missing outfit bone: `+e);return n},f=(e,t)=>{let n=new sl({color:e,...t,side:2});return i.add(n),n},p=f(Z.colors.mail,Z.material.mail),m=f(Z.colors.steel,Z.material.steel),h=f(Z.colors.brass,Z.material.brass),g=f(Z.colors.linen,Z.material.cloth),_=f(Z.colors.red,Z.material.cloth),v=f(Z.colors.leather,Z.material.leather),y=f(Z.colors.dark,Z.material.cloth),b=[`spine05`,`spine04`,`spine03`,`spine02`,`spine01`];function x(e){for(let n=0;n<b.length-1;n++){let r=d(b[n]),i=d(b[n+1]),a=t.bones[r].head[1],o=t.bones[i].head[1];if(e<=o){let t=cm((e-a)/(o-a),0,1);return[[r,1-t],[i,t]]}}return[[d(`spine01`),1]]}function S(e){return Array.from({length:4},(n,r)=>[t.skinIndex[e*4+r],t.skinWeight[e*4+r]])}function C(t,i,a,s){let c=new Ya,l=[],u=[],d=[],f=[];i.forEach(e=>{l.push(...e.position.toArray()),f.push(...e.uv);let t=new Map;e.weights.forEach(([e,n])=>t.set(e,(t.get(e)??0)+n));let n=[...t].filter(([,e])=>e>0).sort((e,t)=>t[1]-e[1]).slice(0,4),r=n.reduce((e,t)=>e+t[1],0);for(let e=0;e<4;e++)d.push(n[e]?.[0]??0),u.push((n[e]?.[1]??0)/r)}),c.setAttribute(`position`,new La(l,3)),c.setAttribute(`uv`,new La(f,2)),c.setAttribute(`skinIndex`,new Fa(d,4)),c.setAttribute(`skinWeight`,new La(u,4)),c.setIndex(a),c.computeVertexNormals(),r.add(c);let p=new jo(c,s);return p.name=t,p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1,p.bind(e.skeleton,e.mesh.bindMatrix),n.add(p),o.push(p),p}let w=(e,t,n=(e,t)=>!0)=>{let r=[];for(let i=0;i<t;i++)for(let t=0;t<e;t++)if(n(t,i)){let n=i*(e+1)+t,a=n+1,o=n+e+1,s=o+1;r.push(n,o,a,a,o,s)}return r};function T(n,r,i,a){let o=e.mesh.geometry.getAttribute(`normal`),s=[],c=[];for(let e=0;e<t.positions.length/3;e++){let n=new J().fromArray(t.positions,e*3).addScaledVector(new J().fromBufferAttribute(o,e),i);s.push({position:n,weights:S(e),uv:[n.x*Z.texture.repeatPerMetre,n.y*Z.texture.repeatPerMetre]})}for(let e=0;e<t.indices.length;e+=3){let n=t.indices.slice(e,e+3);n.some(a)&&c.push(...n)}return C(n,s,c,r)}let E=e=>S(e).reduce((e,[n,r])=>e+(/^(wrist|finger)/.test(t.bones[n].name)?r:0),0);T(`continuous-chainmail`,p,Z.surface.mailOffset,e=>{let n=t.positions[e*3+1],r=Math.abs(t.positions[e*3]),i=n>Z.surface.coveredMinY&&n<Z.surface.coveredMaxY&&r<Z.surface.coveredMaxX,a=n<Z.fitting.slitTopY&&r<Z.surface.slitInnerX;return(!i||a)&&n>=Z.surface.mailMinY&&n<=Z.surface.mailMaxY&&E(e)<Z.surface.handThreshold}),T(`articulated-leather-gloves`,v,Z.surface.gloveOffset,e=>E(e)>=Z.surface.handThreshold);function D(e){let t=Z.coat.rows;for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(e<=i[0]){let t=cm((e-r[0])/(i[0]-r[0]),0,1);return r.map((e,n)=>lm(e,i[n],t))}}return t.at(-1)}function O(e,t,n=0){let r=D(e),i=Math.sin(t*Z.coat.folds)*Z.coat.foldDepth;return new J(Math.sin(t)*(r[1]+i+n),e,r[3]+Math.cos(t)*(r[2]+i+n))}let k=[];Z.coat.rows.forEach(e=>{for(let t=0;t<=Z.coat.segments;t++){let n=t/Z.coat.segments*Math.PI*2;k.push({position:O(e[0],n),weights:x(e[0]),uv:[t/Z.coat.segments,e[0]]})}}),C(`tailored-sleeveless-surcoat`,k,w(Z.coat.segments,Z.coat.rows.length-1,(e,t)=>{let n=(e+.5)/Z.coat.segments*Math.PI*2,r=Z.coat.rows[t][0];return r<Z.coat.armholeY||r>Z.coat.rows.at(-3)[0]||Math.abs(Math.sin(n))<Z.coat.armholeWidth}),g);for(let e=0;e<4;e++){let t=Z.coat.segments/4,n=[];for(let r=0;r<=Z.coat.skirtRows;r++)for(let i=0;i<=t;i++){let a=r/Z.coat.skirtRows,o=lm(Z.coat.rows[0][0],Z.coat.hemY,a),s=(e+i/t)*Math.PI/2,c=Z.coat.rows[0],l=c[1]+Z.coat.hemFlare*a,u=Math.sin(s*Z.coat.folds)*Z.coat.foldDepth*(1+a),f=Math.sin(s)*(l+u),p=cm((Z.fitting.slitTopY-o)/(Z.fitting.slitTopY-Z.coat.hemY),0,1);Math.abs(Math.sin(s))<Z.coat.split&&(f+=(e<2?1:-1)*Z.coat.split*p);let m=new J(f,o,c[3]+Math.cos(s)*(c[2]+u)),h=d(`upperleg02.`+(f>=0?`L`:`R`)),g=cm((Z.fitting.slitTopY-o)/Z.coat.legBlendHeight,0,1);n.push({position:m,weights:[[d(`spine05`),1-g],[h,g]],uv:[f,o]})}let r=C(`split-surcoat-panel-`+e,n,w(t,Z.coat.skirtRows),g);s.push({mesh:r,rest:new Float32Array(r.geometry.getAttribute(`position`).array),kind:`skirt`})}function A(e,t,n,r,i,a){let o=[];for(let e=0;e<=8;e++)for(let a=0;a<=8;a++){let s=lm(t,n,a/8),c=lm(r,i,e/8),l=D(c),u=O(c,Math.asin(cm(s/l[1],-1,1)),Z.cross.offset);u.x=s,o.push({position:u,weights:x(c),uv:[s,c]})}return C(e,o,w(8,8),a)}A(`embroidered-cross-stem`,-Z.cross.stroke/2,Z.cross.stroke/2,Z.cross.centerY-Z.cross.height/2,Z.cross.centerY+Z.cross.height/2,_);for(let e of[-1,1])A(`embroidered-cross-arm-`+e,e<0?-Z.cross.width/2:Z.cross.stroke/2,e<0?-Z.cross.stroke/2:Z.cross.width/2,Z.cross.centerY-Z.cross.stroke/2,Z.cross.centerY+Z.cross.stroke/2,_);let j=[];for(let e of[Z.belt.y-Z.belt.height/2,Z.belt.y+Z.belt.height/2])for(let t=0;t<=Z.coat.segments;t++){let n=t/Z.coat.segments*Math.PI*2;j.push({position:new J(Math.sin(n)*Z.belt.x,e,Z.belt.centerZ+Math.cos(n)*Z.belt.z),weights:x(e),uv:[t/Z.coat.segments,e]})}C(`leather-waist-belt`,j,w(Z.coat.segments,1),v);function M(n,i,s,c,l){r.add(i);let u=new Y(i,s),f=d(c);return u.name=n,u.position.copy(l).sub(new J().fromArray(t.bones[f].head)),u.castShadow=!0,u.receiveShadow=!0,e.bones[f].add(u),a.push(u),o.push(u),u}function N(e,t,n,r,i){return M(e,new Xc(new Ps(t),Z.detail.curveSegments,n,Z.detail.tubeSides,!1),r,i,new J)}let P=Z.belt.y,F=Z.belt.centerZ+Z.belt.z+Z.belt.buckleTube,I=Z.belt.buckleWidth/2,L=Z.belt.buckleHeight/2;N(`brass-belt-buckle`,[new J(-I,P-L,F),new J(I,P-L,F),new J(I,P+L,F),new J(-I,P+L,F),new J(-I,P-L,F)],Z.belt.buckleTube,h,`spine04`);let R=[];Z.helmet.rows.forEach(e=>{for(let t=0;t<=Z.helmet.segments;t++){let n=t/Z.helmet.segments*Math.PI*2;R.push({position:new J(Math.sin(n)*e[1],e[0],e[3]+Math.cos(n)*e[2]),weights:[[d(`head`),1]],uv:[t/Z.helmet.segments,e[0]]})}}),C(`fitted-great-helm`,R,w(Z.helmet.segments,Z.helmet.rows.length-1),m);function ee(e,t,n){let r=Z.helmet.rows,i=r[0];for(let e=0;e<r.length-1;e++){let n=r[e],a=r[e+1];if(t<=a[0]){let e=cm((t-n[0])/(a[0]-n[0]),0,1);i=n.map((t,n)=>lm(t,a[n],e));break}}return new J(e,t,i[3]+i[2]*Math.sqrt(Math.max(0,1-(e/i[1])**2))+n)}function te(e,t,n,r,i,a,o){let s=[];for(let e=0;e<=1;e++)for(let a=0;a<=12;a++){let c=lm(t,n,a/12),l=lm(r,i,e);s.push({position:ee(c,l,o),weights:[[d(`head`),1]],uv:[a/12,e]})}C(e,s,w(12,1),a)}for(let e of[-1,1]){let t=e*Z.helmet.eyeX;te(`helmet-eye-aperture-`+e,t-Z.helmet.eyeWidth/2,t+Z.helmet.eyeWidth/2,Z.helmet.eyeY-Z.helmet.eyeHeight/2,Z.helmet.eyeY+Z.helmet.eyeHeight/2,y,.0015)}te(`helmet-brow-band`,-.11,.11,Z.helmet.browY-Z.helmet.browHeight/2,Z.helmet.browY+Z.helmet.browHeight/2,h,.002),te(`helmet-nasal-band`,-Z.helmet.noseWidth/2,Z.helmet.noseWidth/2,Z.helmet.browY-Z.helmet.noseHeight,Z.helmet.browY,h,.003);for(let e of[-1,1])for(let t=0;t<3;t++)for(let n=0;n<4;n++){let r=e*(.038+n*.014),i=1.612+t*.015,a=M(`helmet-breathing-aperture`,new Ss(Z.helmet.ventRadius,8),y,`head`,ee(r,i,.002));a.rotation.y=e*.4}for(let e of[-.095,-.045,0,.045,.095])M(`helmet-rivet`,new Jc(Z.helmet.rivetRadius,8,6),h,`head`,ee(e,Z.helmet.browY,.004));let z=[];for(let e=0;e<=Z.mantle.rows;e++)for(let t=0;t<=Z.mantle.segments;t++){let n=e/Z.mantle.rows,r=t/Z.mantle.segments*Math.PI*2,i=Math.cos(r),a=Math.max(0,-i),o=Math.sin(r)*lm(Z.mantle.neckX,Z.mantle.shoulderX,n),s=Z.mantle.centerZ+i*lm(Z.mantle.neckZ,i>=0?Z.mantle.frontZ:Z.mantle.rearZ,n),c=Z.mantle.edgeY+Z.mantle.backRise*a-Z.mantle.overlap*a,l=lm(Z.mantle.neckY,c,n)+Math.sin(r*Z.cape.folds)*Z.cape.foldDepth*n*(1-n);z.push({position:new J(o,l,s),weights:[[d(`spine01`),1]],uv:[t/Z.mantle.segments,n]})}C(`shoulder-draped-cloak-mantle`,z,w(Z.mantle.segments,Z.mantle.rows),_);let ne=am(t),B=new Ya;B.setAttribute(`position`,new La(ne.pattern.positions,3)),B.setAttribute(`uv`,new La(ne.pattern.uv,2)),B.setIndex(ne.pattern.indices);let re=new Y(B,_);re.name=`inertial-cloth-cape`,re.castShadow=!0,re.receiveShadow=!0,re.frustumCulled=!1,r.add(B),o.push(re),n.add(re);let ie=sm(e,o.filter(e=>e instanceof jo&&e.name.includes(`surcoat`)));for(let e of[-1,1])M(`cloak-clasp`,new Jc(Z.detail.buttonRadius,12,8),h,`spine01`,new J(e*.052,1.47,.136));for(let e of[`L`,`R`]){let n=e===`L`?1:-1,r=d(`foot.`+e),i=d(`lowerleg02.`+e),a=t.bones[r].head,o=[[Z.boot.soleY,Z.boot.footWidth,(Z.boot.toeZ-Z.boot.heelZ)/2,(Z.boot.toeZ+Z.boot.heelZ)/2],[Z.boot.instepY,Z.boot.footWidth*.87,(Z.boot.toeZ-Z.boot.heelZ)*.41,(Z.boot.toeZ+Z.boot.heelZ)*.35],[.135,Z.boot.ankleWidth,.056,0],[Z.boot.height,Z.boot.calfWidth,.06,0]],s=[];o.forEach(([e,t,o,c])=>{for(let l=0;l<=Z.boot.segments;l++){let u=l/Z.boot.segments*Math.PI*2,d=cm((e-.08)/.12,0,1),f=a[0]-n*(e-.08)*.16;s.push({position:new J(f+Math.sin(u)*t,e,c+Math.cos(u)*o),weights:[[r,1-d],[i,d]],uv:[l/Z.boot.segments,e]})}}),C(`fitted-leather-boot-`+e,s,w(Z.boot.segments,o.length-1),v)}function ae(t){c||(l=t,n.visible=t,a.forEach(e=>e.visible=t),e.mesh.material.visible=!t)}function oe(t){if(c)return;let n=cm(Number.isFinite(t)?t:0,0,e.duration);u.update();for(let{mesh:e,rest:t}of s){let r=e.geometry.getAttribute(`position`);for(let i=0;i<r.count;i++){let a=t[i*3],o=t[i*3+1],s=t[i*3+2],c=cm((Z.coat.rows[0][0]-o)/(Z.coat.rows[0][0]-Z.coat.hemY),0,1);r.setXYZ(i,a,o,s+Math.sin(n*Z.clothMotion.frequency+a*8)*Z.clothMotion.amplitude*c*c),u.project(e,i)}r.needsUpdate=!0,e.geometry.computeVertexNormals()}let r=B.getAttribute(`position`);ne.sample(n,r.array),ie.project(r,ne.pinCount),r.needsUpdate=!0,B.computeVertexNormals()}return ae(!0),oe(0),{group:n,meshes:o,materials:i,moving:s,cape:re,capeMotion:ne,draw:oe,setVisible:ae,setTextures(e){if(!c)for(let[t,n,r]of[[p,e.mail,Z.texture.mailBump],[m,e.steel,0],[g,e.linen,Z.texture.clothBump],[_,e.linen,Z.texture.clothBump]])t.map=n??null,t.bumpMap=r?n??null:null,t.bumpScale=r,t.needsUpdate=!0},wireframe(e){c||i.forEach(t=>t.wireframe=e)},dispose(){c||(c=!0,n.removeFromParent(),a.forEach(e=>e.removeFromParent()),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),l&&(e.mesh.material.visible=!0))}}}function dm(e,t=`normal`,n=new Ll){let r=[`mail`,`steel`,`linen`],i=new Set(r),a=new Set,o=new Set,s={},c=!1,l=0,u=0,d,f=new Promise(e=>{d=e}),p=e=>{o.has(e)||(o.add(e),a.delete(e),e.dispose())},m=setTimeout(()=>{u+=i.size,i.clear(),d({loaded:l,failed:u})},Z.texture.timeoutMs),h=(e,t)=>{i.delete(e)&&(t?l++:u++,i.size||(clearTimeout(m),d({loaded:l,failed:u})))};if(t!==`slow`)for(let l of r){let r;try{let u=t===`missing`?`assets/knight/qa-missing-${l}.png`:Z.assets[l];r=n.load(`/crusader-coin-pusher-demo/${u}`,t=>{if(c||!i.has(l)){p(t);return}a.add(t),t.colorSpace=tr,t.wrapS=t.wrapT=Mt,t.anisotropy=Z.texture.anisotropy,s[l]=t,e({...s}),h(l,!0)},void 0,()=>{r&&p(r),h(l,!1)}),o.has(r)||a.add(r)}catch{h(l,!1)}}return{ready:f,dispose(){c||(c=!0,clearTimeout(m),i.clear(),a.forEach(p),d({loaded:l,failed:u}))}}}var fm={assets:{steel:`./assets/knight/forged-steel-v1.lossless.webp`,linen:`./assets/knight/ivory-linen-v1.lossless.webp`},colors:{steel:`#b1b8bf`,mail:`#747b80`,gold:`#a78952`,linen:`#d9cdb4`,cloak:`#631e2a`,leather:`#302821`,black:`#0f1217`,floor:`#9c9d99`},material:{steelMetalness:.82,steelRoughness:.46,steelBump:.004,clothRoughness:.92,clothBump:.009,mailRoughness:.54},rig:{floorY:-3.5,pelvisY:2.19,chestY:3.09,headY:3.98,helmetHeight:.58,height:4.46,shoulderY:3.68,shoulderX:.55,upperArm:.77,forearm:.72,thigh:1.08,shin:1.08,hipX:.235,ankleY:.14,stanceDrop:.065,handY:-.19,contactInset:.62,palmDepth:.045,palmY:-.13},motion:{walkEnd:3.3,reachStart:2.7,reachEnd:3.8,releaseStart:6.35,releaseEnd:7.18,clearStart:7.1,clearEnd:11,strideSeconds:1.36,startZ:3.9,braceZ:1.3,endZ:-4.5,exitX:-1.65,lean:.18,clothWave:.024,stepLift:.18,heelRoll:.15,rootBob:.024,hipSway:.026},path:[[0,0,3.9],[.65,0,3.58],[1.45,0,2.73],[2.25,0,1.91],[3.3,0,1.3],[4,0,1.3],[5,0,1.01],[6,0,-.26],[6.35,0,-.67],[7.1,-.08,-1.5],[8,-.55,-2.47],[9.2,-1.25,-3.55],[11,-1.65,-4.5]],footsteps:{left:[[.1,.75],[1.45,2.15],[2.68,3.3],[4.58,5.24],[5.96,6.62],[7.28,7.94],[8.64,9.3],[9.94,10.6]],right:[[.8,1.43],[2.18,2.82],[3.32,3.8],[5.28,5.94],[6.64,7.26],[7.98,8.62],[9.32,9.92],[10.62,11.22]]},geometry:{radialSegments:32,clothRows:32,clothColumns:28,cloakBoneRows:7,cloakBoneColumns:5,mailRows:18,mailColumns:24},garment:{capeTop:3.72,capeLength:2.15,capeTopWidth:.94,capeBottomWidth:1.15,capeTopDepth:.24,capeBottomDepth:.37,capeFoldDepth:.04,capeFoldCount:7,hemUneven:.035},floor:{asset:`./assets/knight/limestone-floor-v2.lossless.webp`,interiorAsset:`./assets/knight/treasury-floor-v2.lossless.webp`,width:36,depth:32,doorZ:0,tileWorld:6,size:256,rows:4,columns:3,grout:.026,roughness:.88,bump:.055,fallbackNoise:.05,interiorColor:`#a4a09a`,interiorRoughness:.32,interiorBump:.016,interiorMetalness:.08},textureTimeoutMs:4e3,lighting:{shadowSize:1024,keyIntensity:3.6,fillIntensity:1.2}},pm=(e,t,n)=>qr.smootherstep(e,t,n),mm=e=>Number.isFinite(e)?qr.clamp(e,0,U.cinematic.introSeconds):0;function hm(e,t){let n=fm.path;if(e<=n[0][0])return n[0][t];if(e>=n[n.length-1][0])return n[n.length-1][t];let r=e=>{if(e===0||e===n.length-1)return 0;let r=n[e-1],i=n[e],a=n[e+1],o=(i[t]-r[t])/(i[0]-r[0]),s=(a[t]-i[t])/(a[0]-i[0]);return o*s<=0?0:2*o*s/(o+s)},i=n.findIndex((t,r)=>r<n.length-1&&e>=t[0]&&e<n[r+1][0]),a=n[i],o=n[i+1],s=o[0]-a[0],c=(e-a[0])/s;return(2*c**3-3*c**2+1)*a[t]+(c**3-2*c**2+c)*s*r(i)+(-2*c**3+3*c**2)*o[t]+(c**3-c**2)*s*r(i+1)}function gm(e){return{x:hm(e,1),z:hm(e,2),yaw:.43*pm(e,6.65,8.25)*(1-pm(e,9.6,11.4))}}function _m(e,t){let n=mm(e),r=t<0?fm.footsteps.left:fm.footsteps.right,i=new J(t*fm.rig.hipX,fm.rig.floorY+fm.rig.ankleY,fm.motion.startZ+(t>0?.16:-.1)),a=0;for(let[e,o]of r){if(n<e)break;let r=gm(Math.min(fm.motion.clearEnd,o+.24)),s=o>=3&&o<=4,c=new J(t*fm.rig.hipX,0,s&&t>0?.36:-.14);c.applyAxisAngle(new J(0,1,0),r.yaw);let l=new J(r.x+c.x,i.y,r.z+c.z);if(n<o){let t=(n-e)/(o-e),s=pm(t,0,1),c=i.distanceTo(l),u=Math.sin(Math.PI*t)**2;return i.lerp(l,s),i.y+=u*Math.min(fm.motion.stepLift,c*.25),{point:i,yaw:qr.lerp(a,r.yaw,s),swing:u,roll:Math.sin(t*Math.PI*2)*Math.sin(t*Math.PI)**2*fm.motion.heelRoll,planted:!1}}i=l,a=r.yaw}return{point:i,yaw:a,swing:0,roll:0,planted:!0}}function vm(e){let t=fm.motion,n=mm(e),r=gm(n),i=_m(n,-1),a=_m(n,1),o=pm(n,t.releaseStart,t.clearEnd),s=Math.max(i.swing,a.swing);return{time:n,...r,reach:pm(n,t.reachStart,t.reachEnd),release:pm(n,t.releaseStart,t.releaseEnd),lean:t.lean*pm(n,3.55,4.8)*(1-pm(n,6.35,7.45)),stride:n/t.strideSeconds*Math.PI*2,leave:o,walking:s,bob:-t.rootBob*s,sway:t.hipSway*(i.swing-a.swing),twist:.035*(i.swing-a.swing)}}function ym(e,t,n,r,i){let a=t.clone().sub(e),o=qr.clamp(a.length(),Math.abs(r-i)+1e-5,r+i-1e-5);a.lengthSq()<1e-10?a.set(0,-1,0):a.normalize();let s=n.clone().addScaledVector(a,-n.dot(a));s.lengthSq()<1e-8&&s.set(1,0,0).addScaledVector(a,-a.x),s.lengthSq()<1e-8&&s.set(0,0,1),s.normalize();let c=(r*r-i*i+o*o)/(2*o);return{elbow:e.clone().addScaledVector(a,c).addScaledVector(s,Math.sqrt(Math.max(0,r*r-c*c))),end:e.clone().addScaledVector(a,o)}}function bm(e,t){let n=n=>new J().fromArray(e.bones.find(e=>e.name===n+`.`+t).head),r=n(`wrist`),i=n(`finger3-1`).sub(r),a=i.clone().normalize(),o=n(`finger5-1`).sub(n(`finger2-1`)),s=new J().crossVectors(o,a).normalize().multiplyScalar(t===`R`?-1:1),c=new J().crossVectors(a,s).normalize(),l=new Jr().setFromRotationMatrix(new vi().makeBasis(c,a,s)).invert();return{palmOffset:i.clone().multiplyScalar(.5).addScaledVector(s,.007),gripOffset:e=>i.clone().multiplyScalar(.95).addScaledVector(s,e+.008),fingerAxis:a.clone(),curlAxis:c.clone(),fitFinger(n,a,o){let l=i.clone().multiplyScalar(.95).addScaledVector(s,o+.008),u=[1,2,3].map(r=>e.bones.find(e=>e.name===`finger${n}-${r}.${t}`));for(let e=40;e>=0;e--){let t=e/40,n=new J().fromArray(u[0].head).sub(r),i=0,s=!0;for(let e=0;e<3;e++){i+=a[e]*t;let r=u[e],d=new J().fromArray(r.tail).sub(new J().fromArray(r.head)).applyAxisAngle(c,i);for(let e=0;e<=8;e++){let t=n.clone().addScaledVector(d,e/8).sub(l);t.addScaledVector(c,-t.dot(c)),t.length()<o+.005&&(s=!1)}n.add(d)}if(s)return a.map(e=>e*t)}return[0,0,0]},rotation(e,t){let n=e.clone().normalize(),r=t.clone().addScaledVector(n,-t.dot(n)).normalize(),i=new J().crossVectors(n,r).normalize();return new Jr().setFromRotationMatrix(new vi().makeBasis(i,n,r)).multiply(l)}}}var xm=new WeakMap;function Sm(e,t,n){let r=t===`L`?-1:1,i=U.cinematic.doors,a=-r*qp(e,1,`push`).angle,o=i.width/2,s=-r*(o-fm.rig.contactInset),c=i.thickness/2+i.faceLift,l=new J(r*o+s*Math.cos(a)+c*Math.sin(a),fm.rig.handY,-s*Math.sin(a)+c*Math.cos(a));return new J(-l.x/n,(l.y-fm.rig.floorY)/n,-l.z/n)}function Cm(e){let t=xm.get(e);if(t)return t;let n=Xp(e),r=G.sceneHeight/e.height,i={L:bm(e,`L`),R:bm(e,`R`)},a=Array.from({length:4},(e,t)=>i.L.fitFinger(t+2,G.sword.gripCurl,G.sword.gripRadius)),o=[],s=new J(0,1,0),c=new Jr,l=new Jr,u=e=>{let t=n.bones.find(t=>t.name===e);if(!t)throw Error(`Missing intro bone `+e);return t},d=e=>e.getWorldPosition(new J);function f(e,t){e.parent.getWorldQuaternion(l).invert(),e.quaternion.copy(l).multiply(t),e.updateWorldMatrix(!1,!0)}function p(e,t,n){let r=d(e),i=d(t).sub(r).normalize(),a=n.clone().sub(r).normalize(),o=new Jr().setFromUnitVectors(i,a);e.getWorldQuaternion(c),f(e,o.multiply(c))}function m(e,t,r,i,a,o){if(o<=0)return;let s=e.quaternion.clone(),c=t.quaternion.clone(),l=d(e),u=d(t),f=d(r),m=ym(l,i,a,l.distanceTo(u),u.distanceTo(f));p(e,t,m.elbow),p(t,r,m.end),e.quaternion.copy(s.slerp(e.quaternion,o)),t.quaternion.copy(c.slerp(t.quaternion,o)),n.root.updateMatrixWorld(!0)}let h=0,g=vm(0),_=new Map;function v(e){let t=-qp(Math.min(e,G.releaseStart),1,`push`).angle;return i.R.rotation(s,new J(0,0,1).applyAxisAngle(s,t))}try{for(let t=0;t<=Math.round(U.cinematic.introSeconds*G.fps);t++){let l=t/G.fps,p=vm(l);h+=Math.hypot(p.x-g.x,p.z-g.z)/r,g=p;let y=h/G.cycle.distance%1,b=(G.cycle.startFrame+y*G.cycle.frameCount)/e.fps;if(n.draw(b),y>1-G.cycle.seamBlend){let t=n.bones.map(e=>e.quaternion.clone());n.draw(G.cycle.startFrame/e.fps);let r=pm(y,1-G.cycle.seamBlend,1);n.bones.forEach((e,n)=>e.quaternion.copy(t[n].slerp(e.quaternion,r)))}let x=n.root.position.y;n.root.position.set(-p.x/r,x,-p.z/r),u(`root`).quaternion.premultiply(new Jr().setFromAxisAngle(s,p.yaw));let S=pm(l,G.reachEnd,G.pushPeak)*(1-pm(l,G.releaseStart,G.releaseEnd));u(`spine03`).quaternion.multiply(new Jr().setFromAxisAngle(new J(1,0,0),G.lean*S)),n.root.updateMatrixWorld(!0);let C=pm(l,G.reachStart,G.reachEnd)*(1-pm(l,G.releaseStart,G.releaseEnd));n.root.position.x-=G.sideAlign*C,n.root.position.y-=G.pelvisDrop*S,n.root.updateMatrixWorld(!0);let w=0;for(let e of[`R`]){let t=d(u(`upperarm01.`+e)),n=d(u(`lowerarm01.`+e)),a=d(u(`wrist.`+e)),o=Math.min(l,G.releaseStart),s=v(l),c=Sm(o,e,r).sub(i.R.palmOffset.clone().applyQuaternion(s)).sub(t),f=(t.distanceTo(n)+n.distanceTo(a))*G.reachFraction,p=Math.sqrt(Math.max(0,f*f-c.x*c.x-c.y*c.y));w=Math.max(w,c.z-p)}n.root.position.z+=Math.min(G.maximumAdvance,Math.max(0,w))*C,n.root.updateMatrixWorld(!0);let T=pm(l,G.braceStart,G.braceEnd)*(1-pm(l,G.releaseStart,G.releaseEnd));for(let t of[`L`,`R`]){let o=t===`L`?1:-1,h=u(`foot.`+t),g=new J(o*G.stanceX,e.bones[n.bones.indexOf(h)].head[1],-o*G.stanceZ).add(new J(n.root.position.x,0,n.root.position.z+G.stanceForward));if(!_.has(t)&&l>=G.braceEnd&&_.set(t,g),m(u(`upperleg01.`+t),u(`lowerleg01.`+t),h,_.get(t)??g,new J(0,0,1),T),T>0&&(h.getWorldQuaternion(c),f(h,c.clone().slerp(new Jr().setFromAxisAngle(s,p.yaw),T))),t===`L`){let e=new J(G.sword.handX,G.sword.handY,G.sword.handZ).applyAxisAngle(s,p.yaw).add(n.root.position),t=u(`wrist.L`),r=d(u(`upperarm01.L`)),o=d(u(`lowerarm01.L`)),c=(r.distanceTo(o)+o.distanceTo(d(t)))*G.carryReach;e.distanceTo(r)>c&&e.sub(r).setLength(c).add(r),m(u(`upperarm01.L`),u(`lowerarm01.L`),t,e,new J(.25,0,-1),1);let l=d(t).sub(d(u(`lowerarm01.L`))).normalize(),h=i.L.curlAxis.clone().cross(i.L.fingerAxis).applyQuaternion(t.getWorldQuaternion(new Jr));f(t,i.L.rotation(l,new J(-1,0,0).applyAxisAngle(s,p.yaw)));for(let e=0;e<2;e++){let n=t.localToWorld(i.L.gripOffset(G.sword.gripRadius)).y-G.sword.tipClearance,r=Math.sqrt(Math.max(0,G.sword.tipDistance**2-n**2)),a=new J(0,-n,-r).applyAxisAngle(s,p.yaw).normalize(),o=new J(1,0,0).applyAxisAngle(s,p.yaw);o.addScaledVector(a,-o.dot(a)).normalize();let c=new J().crossVectors(o,a).normalize();c.dot(l)<0&&(c.negate(),o.negate());let m=i.L.rotation(c,o);if(e===0){let e=e=>e.addScaledVector(l,-e.dot(l)).normalize(),n=e(h),r=e(o.clone()),i=Math.atan2(l.dot(new J().crossVectors(n,r)),n.dot(r));for(let e of[`lowerarm01.L`,`lowerarm02.L`]){let n=u(e),r=d(t).sub(d(n)).normalize();f(n,new Jr().setFromAxisAngle(r,i/2).multiply(n.getWorldQuaternion(new Jr)))}}f(t,m)}for(let e of n.bones.filter(e=>/^finger[2-5]-[123]\.L$/.test(e.name))){let t=Number(e.name.split(`-`)[1][0])-1,n=Number(e.name[6])-2;e.quaternion.setFromAxisAngle(i.L.curlAxis,a[n][t])}u(`finger1-1.L`).quaternion.setFromAxisAngle(i.L.fingerAxis,-.55).multiply(new Jr().setFromAxisAngle(i.L.curlAxis,.35)),u(`finger1-2.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.55),u(`finger1-3.L`).quaternion.setFromAxisAngle(i.L.curlAxis,.4);continue}let y=pm(l,G.reachStart,G.reachEnd)*(1-pm(l,G.releaseStart,G.releaseEnd)),b=u(`wrist.`+t),x=Math.min(l,G.releaseStart),S=v(l),C=Sm(x,t,r).sub(i.R.palmOffset.clone().applyQuaternion(S)),w=new J(o*G.elbowPole[0],G.elbowPole[1],G.elbowPole[2]);m(u(`upperarm01.`+t),u(`lowerarm01.`+t),b,C,w,y),b.getWorldQuaternion(c),f(b,c.clone().slerp(S,y));for(let e of n.bones.filter(e=>e.name.startsWith(`finger`)&&e.name.endsWith(`.`+t)))e.quaternion.slerp(new Jr,y)}n.root.updateMatrixWorld(!0),o.push({root:n.root.position.toArray(),q:n.bones.flatMap(e=>e.quaternion.toArray())})}}finally{n.dispose()}let y={...e,source:e.source+` + authored door-contact choreography`,fps:G.fps,groundOffset:0,frames:o};return xm.set(e,y),y}function wm(e,t){let n=G.sword,r=new Ki;r.name=`battle-worn-dragged-sword`,e.root.add(r);let i=new sl({color:Z.colors.steel,...Z.material.steel}),a=new sl({color:Z.colors.leather,...Z.material.leather}),o=new sl({color:Z.colors.brass,...Z.material.brass}),s=[];function c(e,t,n=0){s.push(e);let i=new Y(e,t);return i.position.y=n,i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}let l=new Ya,u=n.bladeWidth/2,d=n.bladeThickness;l.setAttribute(`position`,new La([-u,-n.bladeStart,0,0,-n.bladeStart,d,u,-n.bladeStart,0,0,-n.bladeStart,-d,-u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,d*.6,u*.78,-n.tipDistance*.82,0,0,-n.tipDistance*.82,-d*.6,0,-n.tipDistance,0],3));let f=[];for(let e=0;e<4;e++){let t=(e+1)%4;f.push(e,t,e+4,t,t+4,e+4,e+4,t+4,8)}f.push(0,2,1,0,3,2),l.setIndex(f),l.computeVertexNormals(),c(l,i),c(new Cs(n.gripRadius,n.gripRadius,n.gripLength,12),a);let p=c(new Cs(n.guardRadius,n.guardRadius,n.guardWidth,12),o,-n.bladeStart);p.rotation.z=Math.PI/2,c(new Jc(n.pommelRadius,16,10),i,n.gripLength/2+n.pommelRadius);let m=e.bones.find(e=>e.name===`wrist.L`),h=e.bones.find(e=>e.name===`root`),g=bm(t,`L`),_=new vi,v=new J,y=new J,b=!1;function x(){if(b)return;e.root.updateMatrixWorld(!0),_.copy(e.root.matrixWorld).invert(),r.position.copy(m.localToWorld(g.gripOffset(n.gripRadius)).applyMatrix4(_)),v.set(0,0,1).transformDirection(h.matrixWorld).transformDirection(_),v.y=0,v.normalize();let t=n.tipClearance-e.root.position.y,i=Math.max(0,r.position.y-t),a=Math.sqrt(Math.max(0,n.tipDistance*n.tipDistance-i*i));y.copy(r.position).addScaledVector(v,-a),y.y=Math.max(t,r.position.y-n.tipDistance),r.quaternion.setFromUnitVectors(new J(0,-1,0),y.sub(r.position).normalize()),r.quaternion.multiply(new Jr().setFromAxisAngle(new J(0,1,0),n.bladeRoll)),r.updateMatrixWorld(!0)}return x(),{root:r,draw:x,setSteelMap(e){b||(i.map=e??null,i.needsUpdate=!0)},tipPosition(){return r.localToWorld(new J(0,-n.tipDistance,0))},dispose(){b||(b=!0,r.removeFromParent(),s.forEach(e=>e.dispose()),i.dispose(),a.dispose(),o.dispose())}}}function Tm(){let e=new Ki;e.name=`human-vault-knight`,e.rotation.y=Math.PI,e.position.y=fm.rig.floorY;let t,n,r,i,a,o=!1,s=0,c=new AbortController,l,u=new Promise(e=>{l=e}),d,f=new Promise((e,t)=>{d=t}),p=setTimeout(()=>{c.abort(),d(Error(`Human knight loading timed out`))},G.timeoutMs),m=e=>{o||(s=e,t?.draw(e),n?.draw(e),r?.draw())};i=dm(e=>{o||(a=e,n?.setTextures(e),r?.setSteelMap(e.steel),m(s))});let h=(async()=>{let l=await fetch(`/crusader-coin-pusher-demo/${G.asset}`,{signal:c.signal});if(!l.ok)throw Error(`Human knight HTTP `+l.status);let u=await l.json();if(o||c.signal.aborted)return;clearTimeout(p);let d=Cm(u);t=Xp(d),e.scale.setScalar(G.sceneHeight/d.height),e.add(t.root),e.updateMatrixWorld(!0),n=um(t,d),r=wm(t,d),a&&(n.setTextures(a),r.setSteelMap(a.steel)),m(s);let f=await i.ready;if(!o){if(f.failed>0)throw Error(`Human knight materials incomplete`);m(s)}})();return{root:e,ready:Promise.race([h,f,u]).finally(()=>clearTimeout(p)),draw:m,dispose(){o||(o=!0,clearTimeout(p),c.abort(),l(),i?.dispose(),r?.dispose(),n?.dispose(),t?.dispose(),e.clear())}}}var Em=class extends ta{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new xs;e.deleteAttribute(`uv`);let t=new sl({side:1}),n=new sl,r=new $l(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Y(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Go(e,n,6),o=new Gi;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Y(e,Dm(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Y(e,Dm(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Y(e,Dm(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Y(e,Dm(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Y(e,Dm(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Y(e,Dm(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Dm(e){return new ll({color:0,emissive:16777215,emissiveIntensity:e})}function Om(){let e=km(!1),t=km(!0),n=new Ki;return n.name=`vault-threshold-floors`,n.add(e.root,t.root),{root:n,ready:Promise.all([e.ready,t.ready]).then(()=>{}),dispose(){e.dispose(),t.dispose()}}}function km(e){let t=fm.floor,n=new Uint8Array(t.size*t.size*4);for(let r=0;r<t.size;r++)for(let i=0;i<t.size;i++){let a=r/t.size*(e?t.columns:t.rows),o=e?0:Math.floor(a)%2*.5,s=i/t.size*t.columns+o,c=s%1,l=a%1,u=Math.min(c,1-c,l,1-l),d=qr.smoothstep(u,t.grout*.4,t.grout*1.5),f=Math.sin(i*12.93+r*7.71)*Math.sin(r*4.12-i*3.31)*t.fallbackNoise,p=Math.sin(Math.floor(a)*19.7+Math.floor(s)*17.3)*.04,m=Math.round(255*(e?.3-d*(.16+f+p):.28+d*(.4+f+p))),h=(r*t.size+i)*4;n[h]=m,n[h+1]=m,n[h+2]=e?m*.88:m,n[h+3]=255}let r=new No(n,t.size,t.size),i=new Set([r]),a=new Set,o=e=>{e.wrapS=e.wrapT=Mt,e.repeat.set(t.width/t.tileWorld,t.depth/2/t.tileWorld),e.anisotropy=4,e.colorSpace=tr,e.generateMipmaps=!0,e.minFilter=Bt,e.magFilter=Rt,e.needsUpdate=!0};o(r);let s=new sl({color:e?t.interiorColor:fm.colors.floor,map:r,bumpMap:r,bumpScale:e?t.interiorBump:t.bump,roughness:e?t.interiorRoughness:t.roughness,metalness:e?t.interiorMetalness:0}),c=new Wc(t.width,t.depth/2),l=new Y(c,s);l.name=e?`vault-interior-marble-floor`:`vault-exterior-limestone-floor`,l.rotation.x=-Math.PI/2,l.position.set(0,fm.rig.floorY-.008,t.doorZ+(e?-1:1)*t.depth/4),l.receiveShadow=!0;let u=!1,d=!1,f,p=new Promise(e=>{f=e}),m=setTimeout(()=>{d=!0,f()},fm.textureTimeoutMs),h=()=>{d=!0,clearTimeout(m),f()},g=e=>{a.has(e)||(a.add(e),i.delete(e),e.dispose())};try{let n=new Ll().load(`/crusader-coin-pusher-demo/${(e?t.interiorAsset:t.asset).replace(/^\.\//,``)}`,e=>{if(u||d){g(e);return}i.add(e),o(e),s.map=s.bumpMap=e,s.needsUpdate=!0,h()},void 0,h);a.has(n)||i.add(n)}catch{h()}return{root:l,ready:p,dispose(){u||(u=!0,h(),c.dispose(),s.dispose(),[...i].forEach(g))}}}function Am(e){let t=U.cinematic,n=t.doors,r=U.premium,i=new Set,a=e=>(i.add(e),e),o,s,c,l,u,d=!1,f=()=>{d||(d=!0,s?.disconnect(),c?.dispose(),l?.dispose(),u?.dispose(),i.forEach(e=>e.dispose()),o?.dispose(),o?.forceContextLoss(),o?.domElement.remove())};try{l=Tm(),c=Jp(`push`),o=new Up({alpha:!0,antialias:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),o.setClearColor(0,0),o.toneMapping=4,o.toneMappingExposure=n.exposure,o.shadowMap.enabled=!0,o.shadowMap.type=1;let i=new ta,p=new Zl(t.fov,1,t.near,t.far);i.add(c.root,l.root);let m=new Em,h=new Yu(o);try{i.environment=a(h.fromScene(m,G.envBlur)).texture,i.environmentIntensity=G.envIntensity}finally{m.dispose(),h.dispose()}u=Om(),i.add(u.root),i.add(new zl(r.colors.light,r.colors.gunmetal,n.ambient));let g=new nu(r.colors.light,n.keyIntensity);g.position.set(n.keyPosition[0],n.keyPosition[1],n.keyPosition[2]),i.add(g),g.castShadow=!0,g.shadow.mapSize.setScalar(fm.lighting.shadowSize),a(g.shadow),Object.assign(g.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:22}),g.shadow.bias=-4e-4,g.shadow.normalBias=.035;let _=new nu(r.colors.fill,n.rimIntensity);_.position.set(n.rimPosition[0],n.rimPosition[1],n.rimPosition[2]),i.add(_);let v=new nu(r.colors.fill,fm.lighting.fillIntensity);v.position.set(1,2,5),i.add(v);let y=a(new Ya),b=new Float32Array(n.sparkCount*3);for(let e=0;e<n.sparkCount;e++)b[e*3]=Math.sin(e*n.goldenAngle)*n.sparkSpreadX,b[e*3+1]=Math.cos(e*n.goldenAngle)*n.sparkSpreadY,b[e*3+2]=n.sparkZ+Math.sin(e)*n.sparkSpreadZ;y.setAttribute(`position`,new Pa(b,3));let x=a(new ls({color:r.colors.edge,size:n.sparkSize,transparent:!0,opacity:0,depthWrite:!1})),S=new ms(y,x);i.add(S);let C=0;function w(e){if(d)return;C=Number.isFinite(e)?Math.max(0,Math.min(t.introSeconds,e)):0;let r=c.draw(C,p.aspect);l.draw(C),p.position.set(0,r.cameraY,r.cameraZ),p.lookAt(0,r.cameraY,r.cameraZ-n.lookDistance),S.rotation.z=C*n.sparkRotation,S.position.y=C*n.sparkRise,x.opacity=qr.smoothstep(C,n.sparkFadeStart,n.sparkFadeEnd)*n.sparkOpacity,o.render(i,p)}let T=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);o.setSize(t,n),p.aspect=t/n,p.updateProjectionMatrix(),w(C)};return e.appendChild(o.domElement),s=new ResizeObserver(T),s.observe(e),T(),{draw:w,dispose:f,ready:Promise.all([c.frontReady,l.ready]).then(()=>{d||w(C)})}}catch(e){throw f(),e}}var jm={assets:{scales:`./assets/dragon-study/bronze-scales-v1.lossless.webp`,membrane:`./assets/dragon-study/burgundy-membrane-v1.lossless.webp`},colors:{skin:`#b89761`,belly:`#d0a76b`,wing:`#752e28`,horn:`#b79a6d`,claw:`#382c23`,mouth:`#2b1010`,eye:`#ffd27b`,pupil:`#150d08`,background:`#141921`,floor:`#242a31`,light:`#ffe5b4`,rim:`#7cafd2`,accent:`#ddbb7c`,white:`#ffffff`},material:{skinRoughness:.67,skinMetalness:.24,bump:.032,wingRoughness:.84,wingMetalness:.02,wingBump:.013,eyeEmission:1.7},geometry:{bodyRings:100,bodySides:32,wingStrips:16,wingSpans:8,limbSides:16,curveRings:30,hornSides:12},motion:{duration:8,wingHz:.75,downAngle:-.32,upAngle:.82,elbowPhase:.38,wristPhase:.68,tailPhase:.54,bodyBob:.1,bodyPitch:.06,diveStart:2.7,diveEnd:4.9,recoverEnd:6.8},camera:{fov:37,near:.1,far:120,targetY:.25,radius:15.5,portraitRadius:22,heroAzimuth:-.78,heroElevation:.3,maxPixelRatio:1.5},lighting:{exposure:1.05,ambient:1.35,key:3.6,fill:1.1,rim:3.2,shadowSize:1024},textureTimeoutMs:12e3,css:{"--ds-bg":`#141921`,"--ds-panel":`#1a2029`,"--ds-text":`#f0e7d5`,"--ds-muted":`#b8b9bc`,"--ds-accent":`#ddbb7c`,"--ds-line":`#48505b`,"--ds-selected":`#453a29`,"--ds-error":`#edb5a5`,"--ds-space-xs":`4px`,"--ds-space-sm":`8px`,"--ds-space-md":`12px`,"--ds-space-lg":`20px`,"--ds-space-xl":`28px`,"--ds-radius":`8px`,"--ds-target":`44px`,"--ds-text-sm":`12px`,"--ds-text-md":`14px`,"--ds-text-lg":`19px`,"--ds-text-title":`25px`,"--ds-stage-min":`200px`,"--ds-border":`1px`,"--ds-outline":`2px`,"--ds-disabled":`0.42`,"--ds-track":`130px`,"--ds-font":`'Segoe UI', 'Microsoft JhengHei', sans-serif`}};function Mm(e,t){if(!t.length)throw Error(`A skinning chain requires at least one joint.`);if(t.length===1)return{indices:[t[0].index,0,0,0],weights:[1,0,0,0]};let n=1/0,r=0,i=0,a=new J,o=new J,s=new J;for(let c=0;c<t.length-1;c++){let l=t[c].position,u=t[c+1].position;a.subVectors(u,l),o.subVectors(e,l);let d=qr.clamp(o.dot(a)/Math.max(a.lengthSq(),1e-8),0,1),f=s.copy(l).addScaledVector(a,d).distanceToSquared(e);f<n&&(n=f,r=c,i=d)}return{indices:[t[r].index,t[r+1].index,0,0],weights:[1-i,i,0,0]}}function Nm(e,t,n,r,i=2){let a=new Ps(e.map(e=>new J(...e.center))),o=[],s=[],c=[],l=[],u=[],d=new J(0,1,0),f=new J,p=new J;for(let m=0;m<=n;m++){let h=m/n,g=a.getPoint(h),_=a.getTangent(h).normalize();f.crossVectors(d,_).normalize(),f.lengthSq()<.01&&f.set(1,0,0),p.crossVectors(_,f).normalize();let v=h*(e.length-1),y=Math.min(e.length-2,Math.floor(v)),b=v-y,x=b*b*(3-2*b),S=qr.lerp(e[y].width,e[y+1].width,x),C=qr.lerp(e[y].height,e[y+1].height,x),w=Mm(g,t);for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,a=g.clone().addScaledVector(f,Math.cos(t)*S).addScaledVector(p,Math.sin(t)*C);if(o.push(a.x,a.y,a.z),s.push(e/r*i,h*i*2.5),l.push(...w.indices),u.push(...w.weights),m<n&&e<r){let t=m*(r+1)+e,n=t+r+1;c.push(t,t+1,n,n,t+1,n+1)}}}return Pm(o,s,c,l,u)}function Pm(e,t,n,r,i){let a=new Ya;return a.setAttribute(`position`,new La(e,3)),a.setAttribute(`uv`,new La(t,2)),a.setAttribute(`skinIndex`,new Fa(r,4)),a.setAttribute(`skinWeight`,new La(i,4)),a.setIndex(n),a.computeVertexNormals(),a}function Fm(e,t,n,r,i,a){let o=[],s=[],c=[],l=[],u=[],d=(i+1)*(a+1);for(let f=0;f<t.length-1;f++){let p=t[f],m=t[f+1],h=o.length/3;for(let t=0;t<2;t++)for(let g=0;g<=i;g++)for(let _=0;_<=a;_++){let v=g/i,y=_/a,b=1-.17*Math.sin(y*Math.PI)**.75*v*v,x=p.clone().lerp(m,y).sub(e).multiplyScalar(v*b).add(e);x.y+=Math.sin(v*Math.PI)*Math.sin(y*Math.PI)*.13+(t===0?.004:-.004),o.push(x.x,x.y,x.z),s.push(Math.abs(x.x)/4,x.z/3);let S=qr.smoothstep(v,.03,.75);if(l.push(n,r[f],r[f+1],0),u.push(1-S,S*(1-y),S*y,0),g<i&&_<a){let e=h+t*d+g*(a+1)+_,n=e+a+1;t===0?c.push(e,n,e+1,n,n+1,e+1):c.push(e,e+1,n,n,e+1,n+1)}}let g=(e,t)=>c.push(h+e,h+t,h+e+d,h+t,h+t+d,h+e+d);for(let e=0;e<i;e++)g(e*(a+1),(e+1)*(a+1)),g(e*(a+1)+a,(e+1)*(a+1)+a);for(let e=0;e<a;e++)g(i*(a+1)+e,i*(a+1)+e+1)}return Pm(o,s,c,l,u)}var Im=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};function Lm(e,t){let n=jm.motion,r=Number.isFinite(e)?Math.max(0,e)%n.duration:0,i=r*n.wingHz*Math.PI*2,a=t===`dive`?Im(r,n.diveStart,n.diveStart+.6)*(1-Im(r,n.diveEnd,n.recoverEnd)):0,o=t===`turn`?Math.sin(r/n.duration*Math.PI*2):0,s=e=>Math.sin(e)*.55+Math.sin(e*2+.2)*.09;return{time:r,phase:i,fold:a,shoulder:.16+s(i)*(1-a*.86)+a*.25,elbow:-.04+s(i-n.elbowPhase)*.46*(1-a)-a*.85,wrist:.08+s(i-n.wristPhase)*.38*(1-a)+a*.45,sweep:a*1,pitch:Math.cos(i-.3)*n.bodyPitch*(1-a)-a*.67,bob:-Math.sin(i-.4)*n.bodyBob*(1-a)-a*.55,yaw:o*.78,bank:-o*.15,neck:Math.cos(i-.55)*.045+a*.12,jaw:-.1-a*.16,tail:Array.from({length:8},(e,t)=>({yaw:Math.sin(i*.5-t*n.tailPhase)*(.045+t*.013)-o*.055,pitch:Math.sin(i-t*.36)*.024+a*.045}))}}function Rm(){let e=new Ki;e.name=`original-treasury-dragon`;let t=[],n=[],r=[],i=new Set,a=new Set,o=(r,i,a)=>{let o=new Mo;o.name=r;let s=new J(...i);o.position.copy(s),a!==void 0&&o.position.sub(n[a]),(a===void 0?e:t[a]).add(o);let c=t.length;return t.push(o),n.push(s),c},s=e=>({index:e,position:n[e]}),c=e=>e.map(s),l=(e,t,n=t)=>({center:e,width:t,height:n}),u=e=>{let t=new sl(e);return a.add(t),t},d=u({color:jm.colors.skin,roughness:jm.material.skinRoughness,metalness:jm.material.skinMetalness}),f=u({color:jm.colors.belly,roughness:.57,metalness:.2}),p=u({color:jm.colors.wing,roughness:jm.material.wingRoughness,metalness:jm.material.wingMetalness,side:2}),m=u({color:jm.colors.horn,roughness:.49,metalness:.12}),h=u({color:jm.colors.claw,roughness:.46,metalness:.12}),g=u({color:jm.colors.mouth,roughness:.9}),_=u({color:jm.colors.eye,emissive:jm.colors.eye,emissiveIntensity:jm.material.eyeEmission,roughness:.19}),v=u({color:jm.colors.pupil,roughness:.23}),y=(t,n,a=d)=>{i.add(n);let o=new jo(n,a);return o.name=t,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,e.add(o),r.push(o),o},b=o(`pelvis`,[0,-.05,1.05],o(`root`,[0,0,0])),x=o(`chest`,[0,.18,-.45],b),S=o(`neck-base`,[0,.45,-1.15],x),C=o(`neck-middle`,[0,.82,-1.9],S),w=o(`head`,[0,1.02,-2.65],C),T=o(`jaw`,[0,.79,-2.7],w),E=[];for(let e=0;e<8;e++)E.push(o(`tail-${e}`,[0,-.1-e*.025,1.5+e*.63],e?E[e-1]:b));let D=c([w,C,S,x,b,...E]);y(`neck-thorax-abdomen-tail`,Nm([l([0,1.01,-2.57],.24,.29),l([0,.91,-2.04],.255,.31),l([0,.57,-1.39],.32,.4),l([0,.23,-.85],.58,.66),l([0,.12,-.27],.65,.68),l([0,.02,.42],.52,.53),l([0,-.03,1.06],.43,.45),l([0,-.1,1.63],.29,.3),l([0,-.13,2.2],.205,.22),l([0,-.17,2.88],.145,.16),l([0,-.2,3.6],.1,.12),l([0,-.25,4.3],.075,.09),l([0,-.28,5.05],.045,.06),l([0,-.3,5.86],.008,.009)],D,jm.geometry.bodyRings,jm.geometry.bodySides,2.5)),y(`sculpted-cranium-and-snout`,Nm([l([0,1.02,-2.34],.2,.24),l([0,1.04,-2.62],.4,.36),l([0,1.02,-2.95],.365,.26),l([0,.96,-3.18],.265,.18),l([0,.92,-3.48],.23,.135),l([0,.92,-3.68],.175,.11),l([0,.92,-3.75],.015,.035)],c([w]),32,24,1)),y(`lower-jaw`,Nm([l([0,.77,-2.6],.22,.1),l([0,.77,-2.89],.3,.115),l([0,.78,-3.23],.215,.07),l([0,.79,-3.58],.16,.045),l([0,.8,-3.67],.012,.015)],c([T]),24,20,1)),y(`mouth-interior`,Nm([l([0,.8,-2.72],.21,.025),l([0,.82,-3.08],.24,.028),l([0,.83,-3.52],.16,.022),l([0,.83,-3.62],.01,.006)],c([w]),15,12,1),g);let O=(e,t,n,r,i=m,a=jm.geometry.hornSides)=>y(e,Nm(t.map((e,t)=>l(e,n[t])),r,Math.max(9,t.length*5),a,1),i),k=(e,r,a,o,s)=>{let c=new Jc(1,16,10);i.add(c);let l=new Y(c,s);return l.name=e,l.scale.set(...o),l.position.set(...a).sub(n[r]),l.castShadow=!0,t[r].add(l),l};for(let e of[-1,1]){let t=t=>[t[0]*e,t[1],t[2]];O(`crown-horn-${e}`,[[.27,1.29,-2.53],[.43,1.51,-2.32],[.53,1.69,-1.94],[.49,1.79,-1.61]].map(e=>t(e)),[.13,.1,.052,.001],c([w])),O(`temple-horn-${e}`,[[.34,1.09,-2.57],[.6,1.17,-2.39],[.72,1.24,-2.14]].map(e=>t(e)),[.1,.072,.001],c([w])),O(`jaw-spike-${e}`,[[.24,.73,-2.71],[.43,.65,-2.47],[.53,.66,-2.26]].map(e=>t(e)),[.075,.052,.001],c([T])),O(`eye-brow-${e}`,[[.25,1.18,-3.14],[.36,1.25,-2.94],[.41,1.25,-2.71]].map(e=>t(e)),[.025,.09,.025],c([w]),d),k(`orbital-socket-${e}`,w,t([.324,1.115,-2.96]),[.08,.12,.15],g),k(`amber-eye-${e}`,w,t([.376,1.12,-2.99]),[.044,.067,.095],_),k(`vertical-pupil-${e}`,w,t([.413,1.12,-3.005]),[.009,.052,.014],v),k(`nostril-${e}`,w,t([.177,.985,-3.51]),[.018,.028,.06],g);for(let n=0;n<6;n++){let r=-3.46+n*.117,i=.18+n*.017;O(`tooth-${e}-${n}`,[t([i,.83,r]),t([i,.735-n%2*.025,r+.02])],[.027,.001],c([w]),m,7)}}for(let e=0;e<18;e++){let t=-1.92+e*.36,n=t<-1?.99:t<.5?.77-(t+.5)*.08:t<1.6?.46:.18-(t-1.6)*.062,r=.27*(1-e/24);O(`dorsal-scutum-${e}`,[[0,n,t],[0,n+r*.8,t+.09],[0,n+r,t+.22]],[.09-e*.003,.055-e*.002,.001],D)}for(let e=0;e<12;e++){let t=-1.55+e*.24,n=t<-.8?.24+(t+1.55)*.3:.48-Math.max(0,t+.1)*.15,r=t<-.8?.2-(t+1.55)*.7:-.5+Math.max(0,t)*.1;y(`ventral-plate-${e}`,Nm([l([0,r,t-.11],n*.68,.035),l([0,r-.035,t],n,.055),l([0,r,t+.105],n*.76,.012)],D,6,14,1),f)}let A=[];for(let e of[!1,!0])for(let t of[-1,1]){let n=e?[[t*.36,-.04,1],[t*.73,-.49,1.34],[t*.64,-.92,.95],[t*.65,-1.03,.54]]:[[t*.5,.08,-.67],[t*.79,-.52,-.26],[t*.62,-.98,-.87],[t*.61,-1.04,-1.13]],r=o(`${e?`hind`:`fore`}-upper-${t}`,n[0],e?b:x),i=o(`${e?`hind`:`fore`}-lower-${t}`,n[1],r),a=o(`${e?`hind`:`fore`}-foot-${t}`,n[2],i),s=c([r,i,a]);y(`limb-${e}-${t}`,Nm(n.map((t,n)=>l(t,[e?.255:.22,.175,.105,.025][n],[e?.27:.23,.185,.1,.02][n])),s,26,jm.geometry.limbSides,1.3));for(let r=0;r<3;r++){let i=n[3],o=i[0]+(r-1)*.095;O(`finger-${e}-${t}-${r}`,[[i[0],i[1],i[2]+.15],[o,i[1]-.035,i[2]-.03],[o,i[1]-.08,i[2]-.16]],[.055,.04,.026],c([a]),d,9),O(`talon-${e}-${t}-${r}`,[[o,i[1]-.08,i[2]-.12],[o,i[1]-.1,i[2]-.23],[o,i[1]-.18,i[2]-.25]],[.037,.025,.001],c([a]),h,9)}A.push({upper:r,lower:i,foot:a,side:t,rear:e})}let j=[];for(let e of[-1,1]){let t=[e*.48,.49,-.56],n=[e*1.5,.56,-.93],r=[e*2.65,.43,-1.21],i=o(`wing-shoulder-${e}`,t,x),a=o(`wing-elbow-${e}`,n,i),s=o(`wing-wrist-${e}`,r,a),u=c([i,a,s]);y(`wing-leading-arm-${e}`,Nm([l(t,.2,.22),l(n,.115,.135),l(r,.087,.09)],u,28,16,1.3));let f=[[e*5,.38,-.98],[e*4.27,.2,.32],[e*3.35,.08,1.46],[e*2.26,.01,2.05],[e*1.25,.04,1.69],[e*.59,.1,1.02]],h=f.map((t,n)=>o(`wing-finger-${e}-${n}`,r,s));for(let t=0;t<f.length;t++){let n=f[t],i=new J(...r),a=new J(...n),o=i.clone().lerp(a,.53);o.y+=.045;let l=O(`wing-ray-${e}-${t}`,[r,o.toArray(),n],[.073-t*.006,.047-t*.004,.008],c([s]),d,10),u=l.geometry.getAttribute(`skinIndex`),p=l.geometry.getAttribute(`skinWeight`);for(let e=0;e<p.count;e++){let n=Math.floor(e/11)/15,r=qr.smoothstep(n,.03,.75);u.setXYZW(e,s,t===f.length-1?x:h[t],0,0),p.setXYZW(e,1-r,r,0,0)}}let g=[...h.slice(0,-1),x],_=Fm(new J(...r),f.map(e=>new J(...e)),s,g,jm.geometry.wingStrips,jm.geometry.wingSpans);y(`deforming-wing-membrane-${e}`,_,p),y(`wing-root-web-${e}`,Fm(new J(...r),[n,t,f[f.length-1]].map(e=>new J(...e)),s,[a,i,x],jm.geometry.wingStrips,jm.geometry.wingSpans),p),O(`wing-thumb-${e}`,[r,[e*2.76,.62,-1.47],[e*2.88,.59,-1.61]],[.09,.063,.001],c([s]),m),j.push({shoulder:i,elbow:a,wrist:s,fingers:h,side:e})}e.updateMatrixWorld(!0);let M=new Io(t);for(let e of r)e.bind(M),e.normalizeSkinWeights();let N=t.map(e=>({position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone()})),P=!1;return{root:e,skeleton:M,bones:t,meshes:r,materials:{skin:d,wing:p,belly:f,horn:m},stats:()=>{let n=0,i=0,a=0;return e.traverse(e=>{e instanceof Y&&(a++,i+=e.geometry.getAttribute(`position`).count,n+=(e.geometry.index?.count??e.geometry.getAttribute(`position`).count)/3)}),{bones:t.length,skinnedMeshes:r.length,meshes:a,vertices:i,triangles:n}},draw:(n,r)=>{if(P)return;let i=Lm(n,r);t.forEach((e,t)=>{e.position.copy(N[t].position),e.quaternion.copy(N[t].rotation),e.scale.copy(N[t].scale)}),e.position.y=i.bob,e.rotation.set(i.pitch,i.yaw,i.bank),t[x].rotation.x=Math.sin(i.phase-.4)*.025,t[S].rotation.x=i.neck,t[C].rotation.x=-i.neck*.6,t[w].rotation.x=-i.pitch*.22,t[w].rotation.y=-i.yaw*.12,t[T].rotation.x=i.jaw,E.forEach((e,n)=>{t[e].rotation.y=i.tail[n].yaw,t[e].rotation.x=i.tail[n].pitch});for(let e of j)t[e.shoulder].rotation.z=e.side*i.shoulder,t[e.shoulder].rotation.y=-e.side*i.sweep*.4,t[e.elbow].rotation.z=e.side*i.elbow,t[e.elbow].rotation.y=-e.side*i.sweep*.72,t[e.wrist].rotation.z=e.side*i.wrist,t[e.wrist].rotation.y=e.side*i.sweep*.13,e.fingers.forEach((n,r)=>{t[n].rotation.x=Math.sin(i.phase-.8-r*.13)*.032*(1-i.fold)+i.fold*.08,t[n].rotation.y=e.side*i.fold*(r-2)*.07});for(let e of A)t[e.upper].rotation.x=-.13+i.fold*.35+Math.sin(i.phase-.6)*.03,t[e.upper].rotation.z=e.side*.04,t[e.lower].rotation.x=.16+i.fold*.18,t[e.foot].rotation.x=-.17;return e.updateMatrixWorld(!0),M.update(),i},setWireframe(e){a.forEach(t=>{t instanceof sl&&(t.wireframe=e)})},setTextures(e,t){d.map=e,d.bumpMap=e,d.bumpScale=jm.material.bump,p.map=t,p.bumpMap=t,p.bumpScale=jm.material.wingBump,d.color.set(e?jm.colors.white:jm.colors.skin),p.color.set(t?jm.colors.white:jm.colors.wing),d.needsUpdate=p.needsUpdate=!0},dispose(){P||(P=!0,i.forEach(e=>e.dispose()),a.forEach(e=>e.dispose()),M.dispose(),e.clear())}}}var zm=U.cinematic.dragon,Bm=e=>Math.max(0,Math.min(1,e)),Vm=e=>{let t=Bm(e);return t*t*(3-2*t)},Hm=(e,t,n)=>e+(t-e)*n;function Um(e){let t=Number.isFinite(e)?Math.max(0,e):0,n=Bm((t-zm.enterSeconds)/(zm.impactSeconds-zm.enterSeconds)),r=Bm((t-zm.impactSeconds)/(zm.exitSeconds-zm.impactSeconds)),i=Math.max(0,t-zm.impactSeconds),a=n*n;return{skeletonTime:i?Hm(zm.hitPoseTime,zm.exitPoseTime,r):Hm(zm.startPoseTime,zm.hitPoseTime,n),yaw:i?Hm(zm.hitYaw,zm.exitYaw,Vm(r)):Hm(zm.startYaw,zm.hitYaw,Vm(n)),bank:i?Hm(0,zm.exitBank,Vm(r)):Hm(zm.startBank,0,Vm(n)),x:i?Hm(zm.hitX,zm.exitX,r):Hm(zm.startX,zm.hitX,a),y:i?Hm(zm.hitY,zm.exitY,r*r):Hm(zm.startY,zm.hitY,a),z:i?Hm(zm.hitZ,zm.exitZ,r):Hm(zm.startZ,zm.hitZ,a),scale:i?Hm(zm.hitScale,zm.exitScale,r):Hm(zm.startScale,zm.hitScale,a),opacity:Vm((t-zm.enterSeconds)/.25)*(1-Vm((r-.55)/.45)),flight:i,impact:i>0?Math.exp(-i*zm.shakeDecay):0,shake:i>0?Math.sin(i*zm.shakeFrequency)*Math.exp(-i*zm.shakeDecay)*zm.cameraShake:0,fade:1-Vm((t-zm.settleSeconds)/(U.cinematic.winSeconds-zm.settleSeconds))}}function Wm(){let e=U.cinematic.dragon,t=new Ki;t.name=`treasury-skinned-dragon-flight`;let n=new Ki;t.add(n);let r=Rm();n.add(r.root);let i=r.bones.find(e=>e.name===`head`),a=new Gi;a.name=`muzzle-contact`,a.position.set(e.muzzleLocal[0],e.muzzleLocal[1],e.muzzleLocal[2]),i.add(a);let o=new Set;r.root.traverse(e=>{e instanceof Y&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.transparent=!0,o.add(e)})});let s=new Set,c=new Set,l={},u=!1,d=!1,f,p,m=e=>{c.has(e)||(c.add(e),s.delete(e),e.dispose())},h=new Promise((e,t)=>{f=n=>{d||(d=!0,clearTimeout(p),n?t(n):e())}});h.catch(()=>{}),p=setTimeout(()=>f(Error(`Dragon textures timed out`)),U.cinematic.doors.textureTimeoutMs);let g=new Ll;for(let e of[`scales`,`membrane`]){if(d)break;try{let t=g.load(`/crusader-coin-pusher-demo/${jm.assets[e].replace(/^\.\//,``)}`,t=>{if(u||d){m(t);return}s.add(t),t.colorSpace=tr,t.wrapS=t.wrapT=Mt,t.anisotropy=U.premium.texture.anisotropy,l[e]=t,l.scales&&l.membrane&&(r.setTextures(l.scales,l.membrane),f())},void 0,()=>f(Error(`Dragon textures unavailable`)));c.has(t)||s.add(t)}catch{f(Error(`Dragon textures unavailable`))}}let _=new J,v=new vi,y=e=>{u||(r.draw(e.skeletonTime,`dive`),n.rotation.set(0,e.yaw,e.bank),t.scale.setScalar(e.scale),t.updateWorldMatrix(!0,!0),v.copy(t.matrixWorld).invert(),a.getWorldPosition(_).applyMatrix4(v).multiplyScalar(e.scale),t.position.set(e.x,e.y,e.z).sub(_),t.visible=e.opacity>0,o.forEach(t=>{t.opacity=e.opacity}),t.updateWorldMatrix(!0,!0),r.skeleton.update())},b=e=>y(Um(e));return b(0),{root:t,ready:h,draw:b,drawPose:y,dispose:()=>{u||(u=!0,f(),clearTimeout(p),r.dispose(),[...s].forEach(m),t.clear())},strikePoint:a,model:r}}function Gm(e,t){if(t===`intro`)return Am(e);let n=U.cinematic,r=n.dragon,i=U.premium,a=new Up({alpha:!0,antialias:!0}),o=new Set,s=e=>(o.add(e),e),c,l=!1,u=()=>{l||(l=!0,c?.disconnect(),o.forEach(e=>e.dispose()),a.dispose(),a.forceContextLoss(),a.domElement.remove())};try{a.setPixelRatio(Math.min(window.devicePixelRatio||1,n.pixelRatio)),a.setClearColor(0,0),a.toneMapping=4,a.toneMappingExposure=1.15;let t=new ta,o=new Ki;t.add(o);let d=new Zl(n.fov,1,n.near,n.far),f=Wp(`coin`);Object.values(f).forEach(s);let p=s(new sl({color:r.coinColor,metalness:n.doors.coinMetalness,roughness:i.materials.coinRoughness,map:f.albedo,bumpMap:f.height,bumpScale:.012,roughnessMap:f.roughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),m=s(new sl({color:i.colors.coinSide,metalness:n.doors.coinMetalness,roughness:i.materials.goldRoughness,transparent:!0,emissive:r.coinEmissive,emissiveIntensity:r.coinEmissiveIntensity})),h=s(new Cs(n.coinRadius,n.coinRadius,n.coinHeight,n.coinSegments)),g=n.towerLayers*n.towerRing,_=s(new Go(h,[m,p,p],g));_.frustumCulled=!1,o.add(_);let v=s(Wm());o.add(v.root),t.add(new zl(i.colors.light,i.colors.gunmetal,r.ambient));let y=new nu(i.colors.light,r.keyIntensity);y.position.set(-3,5,4),t.add(y);let b=new nu(i.colors.fill,r.rimIntensity);b.position.set(3,2,-2),t.add(b);let x=new $l(i.colors.edge,0,r.flashDistance);x.position.set(r.towerX,.4,1.8),o.add(x);let S=s(new so({color:i.colors.edge,transparent:!0,opacity:.5})),C=s(new Yc(1.2,.008,6,96)),w=new Ki;for(let e=0;e<3;e++){let t=new Y(C,S);t.scale.setScalar(1+e*.12),t.rotation.x=e*.16,w.add(t)}o.add(w);let T=s(new Ya),E=new Float32Array(540);for(let e=0;e<180;e++)E[e*3]=Math.sin(e*12.31)*7,E[e*3+1]=Math.cos(e*9.7)*5,E[e*3+2]=-2+Math.sin(e)*2;T.setAttribute(`position`,new Pa(E,3));let D=new ms(T,s(new ls({color:i.colors.edge,size:.022,transparent:!0,opacity:.6})));o.add(D);let O=new Gi,k=0;function A(e){if(l)return;k=e;let i=Um(e);v.draw(e);let s=d.aspect<.8;o.scale.setScalar(s?r.portraitScale:1),d.position.set(i.shake,.25+i.shake*.5,(s?n.portraitCameraZ:n.cameraZ)-e*.06),d.lookAt(0,.2,0),D.rotation.z=e*.035,D.position.y=e*.06;{let t=i.flight;p.opacity=m.opacity=i.fade;for(let i=0;i<g;i++){let a=Math.floor(i/n.towerRing),o=(i%n.towerRing+a%2*.5)*Math.PI*2/n.towerRing,s=Math.max(0,t-(1-a/n.towerLayers)*.12),c=o+a*.43,l=.6+a/n.towerLayers;O.position.set(r.towerX+Math.cos(o)*n.ringRadius+s*(r.towerPush*l+Math.cos(c)*r.towerSpread),-1.3+a*n.towerPitch+s*(.45+Math.sin(i*2.3)*.55)-s*s*r.gravity,Math.sin(o)*n.ringRadius+Math.sin(c)*s*r.towerSpread),O.rotation.set(i%7*s,e*.1+i%9*s,i%5*s),O.scale.setScalar(1),O.updateMatrix(),_.setMatrixAt(i,O.matrix)}S.opacity=i.impact*.7,w.scale.setScalar(.8+t*3.5),x.intensity=i.impact*r.flashIntensity}w.rotation.z=e*.13,_.instanceMatrix.needsUpdate=!0,a.render(t,d)}let j=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);a.setSize(t,n),d.aspect=t/n,d.updateProjectionMatrix(),A(k)};return e.appendChild(a.domElement),c=new ResizeObserver(j),c.observe(e),j(),{draw:A,ready:v.ready,dispose:u}}catch(e){throw u(),e}}var Km=[[`遠征歸來`,`聖城御庫，仍在沉睡。`],[`誓印之幣`,`每一枚金幣，都是喚醒機關的鑰匙。`],[`聖城幣塔`,`推動金幣，揭開御庫的封印。`]],qm=[`御庫封印解除`,`最高幣塔擊破`];function Jm(e,t=!1){return e===`high-tower`&&t?U.cinematic.reducedWinSeconds:e===`intro`?U.cinematic.introSeconds:U.cinematic.winSeconds}function Ym(e,t){return!t||e===`high-tower`}function Xm(e,t){return e===`intro`?t<U.cinematic.introCuts[0]?0:t<U.cinematic.introCuts[1]?1:2:0}function Zm(e,t,n,r){let i=!1,a=e=>{i||(i=!0,clearTimeout(o),n(e))},o=setTimeout(()=>a(Error(`Cinematic scene loading timed out`)),r);return Promise.resolve(e).then(()=>{if(!i){try{t()}catch(e){a(e);return}a()}},e=>a(e)),()=>{i=!0,clearTimeout(o)}}var Qm=Ue({...U.customProperties,...U.cinematic.css});function $m(e){let[t,n]=(0,V.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),[r,i]=(0,V.useState)(!1),a=t&&!r,[o]=(0,V.useState)(()=>`/crusader-coin-pusher-demo/${window.innerHeight>window.innerWidth?U.introVideo.portrait:U.introVideo.wide}`),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(!1),p=(0,V.useRef)(null),m=(0,V.useRef)(null),h=(0,V.useRef)(null),g=(0,V.useRef)(!1),_=(0,V.useRef)(0),v=(0,V.useRef)(e);v.current=e;let y=()=>{g.current||(g.current=!0,p.current?.pause(),v.current.onComplete())},b=async()=>{let e=p.current,t=_.current;if(!(!e||v.current.suspended||g.current)){try{await e.play()}catch{if(t!==_.current||p.current!==e||v.current.suspended||g.current)return;e.muted=!0,f(!!v.current.soundEnabled);try{await e.play()}catch{}}t===_.current&&(v.current.suspended||g.current||p.current!==e)&&e.pause()}},x=()=>{v.current.onAudioUnlock?.(),p.current&&v.current.soundEnabled&&!v.current.suspended&&(p.current.muted=!1,f(!1),b())};return(0,V.useEffect)(()=>{let e=document.activeElement;h.current?.focus({preventScroll:!0});let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=()=>n(t.matches);return t.addEventListener(`change`,r),v.current.onPlaybackTime?.(0,!1),()=>{t.removeEventListener(`change`,r),e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,V.useEffect)(()=>{let e=p.current;if(e)return e.src=o,()=>{_.current++,e.pause(),e.removeAttribute(`src`),e.load()}},[a,o]),(0,V.useEffect)(()=>{let t=p.current;t&&(t.muted=!e.soundEnabled,e.suspended||l?t.pause():b())},[e.suspended,e.soundEnabled,a,l]),(0,V.useEffect)(()=>{if(a||l||e.suspended)return;let t=-1,n=0,r=window.setInterval(()=>{let e=p.current?.currentTime??0;n=e>t?0:n+U.introVideo.pollMs,t=e,n>=U.introVideo.stallTimeoutMs&&u(!0)},U.introVideo.pollMs);return()=>window.clearInterval(r)},[a,l,e.suspended]),(0,V.useEffect)(()=>{if(!l||e.suspended)return;let t=window.setTimeout(y,U.introVideo.errorReturnMs);return()=>window.clearTimeout(t)},[l,e.suspended]),(0,W.jsxs)(`div`,{ref:m,className:`vault-film vault-film--video`,style:Qm,role:`dialog`,"aria-modal":`true`,"aria-label":`御庫序章`,"data-kind":`intro`,"data-motion":a?`reduced`:`full`,"data-state":l?`fallback`:s||a?`ready`:`loading`,onPointerDownCapture:e=>{e.target.closest(`button`)||x()},onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),y()),e.key===`Tab`){let t=m.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[!a&&(0,W.jsx)(`video`,{ref:p,className:`vault-film__video`,src:o,playsInline:!0,preload:`auto`,onPlaying:()=>c(!0),onEnded:y,onError:()=>u(!0)}),!a&&!s&&(0,W.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,W.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,W.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,W.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,W.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,W.jsxs)(`div`,{className:`vault-film__top`,children:[(0,W.jsx)(`span`,{children:`聖城御庫 · 序章`}),(0,W.jsxs)(`div`,{className:`vault-film__actions`,children:[e.onSoundToggle&&(0,W.jsx)(`button`,{type:`button`,disabled:e.suspended,"aria-pressed":!!e.soundEnabled&&!d,onClick:()=>{d&&e.soundEnabled?x():e.onSoundToggle?.()},children:e.soundEnabled&&!d?`關閉音效`:`開啟音效`}),(0,W.jsxs)(`button`,{ref:h,type:`button`,onClick:t=>{t.stopPropagation(),e.onAudioUnlock?.(),y()},children:[a?`進入御庫`:`跳過開場`,` ›`]})]})]}),(a||l||!s)&&(0,W.jsxs)(`div`,{className:`vault-film__caption`,children:[a&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`p`,{className:`vault-film__kicker`,children:`THE OATH OF THE TREASURY`}),(0,W.jsx)(`h2`,{children:`聖城幣塔`}),(0,W.jsx)(`button`,{type:`button`,disabled:e.suspended,onClick:()=>{i(!0),e.onAudioUnlock?.()},children:`播放完整動畫`})]}),!a&&!l&&(0,W.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),l&&(0,W.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]})]})}var eh=Ue({...U.customProperties,...U.cinematic.css});function th(e){return e.kind===`intro`&&U.introVideo.enabled?(0,W.jsx)($m,{...e}):(0,W.jsx)(nh,{...e})}function nh({kind:e,suspended:t,onComplete:n,soundEnabled:i,onSoundToggle:a,onAudioUnlock:o,onPlaybackTime:s}){let[c,l]=(0,V.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),[u,d]=(0,V.useState)(!1),p=c&&!u,m=!p||e===`high-tower`,[h,g]=(0,V.useState)(0),[_,v]=(0,V.useState)(!1),[y,b]=(0,V.useState)(!1),[x,S]=(0,V.useState)(),[C,w]=(0,V.useState)(!1),[T,E]=(0,V.useState)(!1),D=(0,V.useRef)(null),O=(0,V.useRef)(null),k=(0,V.useRef)(null),A=(0,V.useRef)(null),j=(0,V.useRef)(null),M=(0,V.useRef)(null),N=(0,V.useRef)(!1),P=(0,V.useRef)({suspended:t,onComplete:n,onPlaybackTime:s});P.current={suspended:t,onComplete:n,onPlaybackTime:s};let F=()=>{N.current||(N.current=!0,M.current?.kill(),P.current.onComplete())},I=(0,V.useRef)(F);I.current=F,(0,V.useEffect)(()=>{let e=document.activeElement;j.current?.focus({preventScroll:!0});let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n=()=>l(t.matches);return t.addEventListener(`change`,n),()=>{t.removeEventListener(`change`,n),e?.isConnected&&e.focus({preventScroll:!0})}},[]),(0,V.useEffect)(()=>{if(C||_)return;let e=window.setTimeout(()=>v(!0),U.cinematic.loadTimeoutMs);return()=>window.clearTimeout(e)},[C,_]),(0,V.useEffect)(()=>{if(!O.current||p&&e===`intro`)return;let t=!1;E(!1),b(!1),S(void 0);let n;try{n=Gm(O.current,e)}catch(e){S(e instanceof Error?e.message:`Scene initialization failed`),b(!0)}let i=O.current.querySelector(`canvas`),a=e=>{e.preventDefault(),S(`WebGL context lost`),b(!0),n?.dispose(),n=void 0,E(!0)};i?.addEventListener(`webglcontextlost`,a);let o={time:0},s=-1,c=Jm(e,p),l=r.timeline({paused:!0,onComplete:()=>I.current()});l.data=`vault-film`,M.current=l,l.to(o,{time:c,duration:c,ease:`none`,onUpdate:()=>{if(p)return;let t=o.time;P.current.onPlaybackTime?.(t,!P.current.suspended);try{n?.draw(t)}catch(e){n?.dispose(),n=void 0,S(e instanceof Error?e.message:`Scene draw failed`),b(!0)}if(e===`high-tower`&&D.current){let e=U.cinematic.dragon;D.current.style.setProperty(`--film-win-caption-opacity`,String(Math.max(0,Math.min(1,(t-e.captionStart)/(e.captionEnd-e.captionStart)))))}let r=Xm(e,t);r!==s&&(s=r,g(r)),k.current&&(k.current.style.transform=`scale(${1+Math.max(0,(t-(e===`intro`?9:0))/c)*.24})`),A.current&&(A.current.style.transform=`scaleX(${t/c})`)}});let u=Zm(n&&`ready`in n?n.ready:void 0,()=>n?.draw(p?U.cinematic.dragon.stillSeconds:0),r=>{t||(r&&(n?.dispose(),n=void 0,S(r instanceof Error?r.message:`Scene asset loading failed`),b(!0)),E(!0),!Ym(e,p)||P.current.suspended?l.pause():l.resume())},e===`intro`?G.sceneReadyTimeoutMs:U.cinematic.loadTimeoutMs);return()=>{t=!0,u(),P.current.onPlaybackTime?.(l.time(),!1),l.kill(),M.current===l&&(M.current=null),i?.removeEventListener(`webglcontextlost`,a),n?.dispose()}},[e,p]),(0,V.useEffect)(()=>{let n=!t&&T&&Ym(e,p);n?M.current?.resume():M.current?.pause(),P.current.onPlaybackTime?.(M.current?.time()??0,n&&!p)},[e,t,T,p]);let L=e===`intro`?Km[p?2:h]:qm;return(0,W.jsxs)(`div`,{ref:D,className:`vault-film`,role:`dialog`,"aria-modal":`true`,"aria-label":e===`intro`?`御庫序章`:`最高幣塔擊破演出`,"data-kind":e,"data-beat":h,"data-state":_||y?`fallback`:C&&(!m||T)?`ready`:`loading`,"data-motion":p?`reduced`:`full`,"data-scene-ready":T,"data-scene-error":x,style:eh,...f(()=>o?.()),onKeyDown:e=>{if(e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),o?.(),F()),e.key===`Tab`){let t=D.current?.querySelectorAll(`button:not(:disabled)`),n=t?.[0],r=t?.[t.length-1];e.shiftKey&&e.target===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&e.target===r&&(e.preventDefault(),n?.focus())}},children:[(0,W.jsx)(`img`,{ref:k,className:`vault-film__plate`,src:U.cinematic.treasureAsset,alt:``,onLoad:()=>{w(!0),v(!1)},onError:()=>v(!0)}),(0,W.jsx)(`div`,{ref:O,className:`vault-film__scene`,"aria-hidden":`true`}),e===`intro`&&!p&&!T&&(0,W.jsx)(`div`,{className:`vault-film__loading-gate`,"aria-hidden":`true`,children:(0,W.jsxs)(`div`,{className:`vault-film__loading-gate-frame`,children:[(0,W.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,W.jsx)(`span`,{className:`vault-film__loading-gate-leaf`}),(0,W.jsx)(`img`,{src:`/crusader-coin-pusher-demo/assets/treasury-crest.svg`,alt:``})]})}),(0,W.jsx)(`div`,{className:`vault-film__shade`}),(0,W.jsxs)(`div`,{className:`vault-film__top`,children:[(0,W.jsx)(`span`,{children:e===`intro`?`聖城御庫 · 序章`:`聖城御庫 · 封印解放`}),(0,W.jsxs)(`div`,{className:`vault-film__actions`,children:[a&&(0,W.jsx)(`button`,{type:`button`,disabled:t,"aria-pressed":!!i,onClick:a,children:i?`關閉音效`:`開啟音效`}),(0,W.jsxs)(`button`,{ref:j,type:`button`,onClick:e=>{e.stopPropagation(),o?.(),F()},children:[e===`intro`?p?`進入御庫`:`跳過開場`:`返回機台`,` `,(0,W.jsx)(`span`,{"aria-hidden":`true`,children:` ›`})]})]})]}),(0,W.jsxs)(`div`,{className:`vault-film__caption`,children:[(0,W.jsx)(`p`,{className:`vault-film__kicker`,children:e===`intro`?`THE OATH OF THE TREASURY`:`THE SEAL IS BROKEN`}),(0,W.jsx)(`h2`,{children:L[0]}),(0,W.jsx)(`p`,{children:L[1]}),p&&e===`intro`&&(0,W.jsx)(`p`,{className:`vault-film__note`,children:`遠征歸來，以誓印之幣喚醒古老機關。最高幣塔崩落之時，御庫重見天光。`}),e===`high-tower`&&(0,W.jsx)(`p`,{className:`vault-film__note`,children:`得分依實際收集計算`}),(!C||m&&!T)&&!_&&!y&&(0,W.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`御庫畫面準備中，可隨時略過。`}),p&&(0,W.jsx)(`button`,{type:`button`,disabled:t,onClick:()=>{o?.(),d(!0),j.current?.focus()},children:`播放完整動畫`}),(_||y)&&(0,W.jsx)(`p`,{className:`vault-film__note`,role:`status`,children:`部分畫面載入失敗，可直接進入機台。`})]},`${e}-${p?`still`:h}`),!p&&(0,W.jsx)(`div`,{className:`vault-film__progress`,"aria-hidden":`true`,children:(0,W.jsx)(`span`,{ref:A})})]})}var rh=class{totals={front:0,dragon:0,hatch:0,side:0};records=[];settled=new Set;awards=new Set;collapsed=new Set;paid=new Set;sequence=0;frontAt=null;highTower=null;replay=!1;transientAfter=-1/0;add(e,t,n){if(!Number.isSafeInteger(t)||t<=0)return;this.totals[e]+=t;let r=this.records[0],i=U.boardFeedback;e!==`dragon`&&r?.source===e&&r.at>this.transientAfter&&(n-r.at)*1e3<=i.mergeGapMs&&(n-r.startedAt)*1e3<=i.mergeMaxMs?this.records[0]={...r,amount:r.amount+t,at:n}:(this.records.unshift({id:++this.sequence,source:e,amount:t,startedAt:n,at:n}),this.records.length=Math.min(this.records.length,i.recordLimit)),e===`front`&&(this.frontAt=n)}record(e,t){if(Number.isFinite(t))for(let n of e){for(let e of n.dragonAwards??[])this.awards.has(e.eventId)||(this.awards.add(e.eventId),e.coinIds.forEach(e=>{this.settled.add(e),this.paid.add(e)}),this.add(`dragon`,e.amount,t));let e=0,r=0,i=0;for(let t of n.scored)this.settled.has(t)||(this.settled.add(t),e++);for(let e of n.lost)this.settled.has(e.id)||e.zone!==`score`&&(this.settled.add(e.id),e.zone===`loss-hatch`?r++:i++);this.add(`front`,e,t),this.add(`hatch`,r,t),this.add(`side`,i,t);for(let e of n.towerCollapses){if(this.collapsed.has(e.id)||(this.collapsed.add(e.id),e.tier!==`high`))continue;this.replay=!0;let n=this.highTower&&(t-this.highTower.at)*1e3<U.boardFeedback.collapseMs?[...new Set([...this.highTower.slots,e.slotIndex])]:[e.slotIndex];this.highTower={slots:n,at:t}}}}snapshot(e){let t=(t,n)=>t>this.transientAfter&&(e-t)*1e3<n,n=[`front`,`dragon`].flatMap(e=>{let n=this.records.find(t=>t.source===e);return n&&t(n.at,U.boardFeedback.receiptMs)?[{...n}]:[]});return{totals:{...this.totals},records:this.records.map(e=>({...e})),receipts:n,frontAt:this.frontAt!==null&&t(this.frontAt,U.boardFeedback.frontPulseMs)?this.frontAt:null,highTower:this.highTower&&t(this.highTower.at,U.boardFeedback.collapseMs)?this.highTower:null,highTowerReplayAvailable:this.replay,paidCoinIds:this.paid}}clearTransient(e){this.transientAfter=e}saveState(){return structuredClone({totals:this.totals,records:this.records,settled:this.settled,awards:this.awards,collapsed:this.collapsed,paid:this.paid,sequence:this.sequence,replay:this.replay})}restoreState(e){let t=structuredClone(e);this.totals=t.totals,this.records=t.records,this.settled=t.settled,this.awards=t.awards,this.collapsed=t.collapsed,this.paid=t.paid,this.sequence=t.sequence,this.replay=t.replay,this.frontAt=null,this.highTower=null,this.transientAfter=Math.max(0,...t.records.map(e=>e.at))}};function ih(e,t){let n=t.boardHalfWidth-t.coinRadius-t.upperRailHalfThickness*2;return![e.x,e.y,e.z,n].every(Number.isFinite)||n<=0||Math.abs(e.x)>t.boardHalfWidth||e.z<t.upperBackZ||e.z>t.lowerFrontZ?null:Math.max(-1,Math.min(1,e.x/n))}function ah(e,t){let n=t.rearWall;if(!n||![e.x,e.y,e.z].every(Number.isFinite))return!1;let r=1e-6;return Math.abs(e.x)<=t.boardHalfWidth+r&&Math.abs(e.y-n.centerY)<=n.halfHeight+r&&Math.abs(e.z-n.centerZ)<=n.halfDepth+r}function oh(e,t){let n=null,r=e=>Number.isFinite(e.clientX)&&Number.isFinite(e.clientY),i=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,a=()=>{let e=n!==null;n=null,t.onPreview(null),e&&t.onBusyChange(!1)},o=r=>{if(!n||(Math.hypot(r.clientX-n.x,r.clientY-n.y)>e&&(n.dragged=!0),!n.dragged))return;let i=r.clientX-n.lastX,a=r.clientY-n.lastY;n.lastX=r.clientX,n.lastY=r.clientY,t.onPreview(null),(i||a)&&t.onOrbit(i,a)};return{pointerId:()=>n?.id??null,dragging:()=>n?.dragged??!1,cancel:a,begin(e,o){return n?(n.id!==e.pointerId&&a(),!1):t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==1||!r(e)||!i(o)?!1:(n={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,dragged:!1},t.onBusyChange(!0),t.onPreview(o),!0)},move(e,s){if(t.isDisabled()){a();return}if(!n){e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0&&t.onPreview(i(s)?s:null);return}if(n.id===e.pointerId){if(!e.isPrimary||e.buttons!==1||!r(e)){a();return}o(e),n.dragged||t.onPreview(i(s)?s:null)}},end(e,s){if(!n||n.id!==e.pointerId)return;if(t.isDisabled()||!e.isPrimary||e.button!==0||e.buttons!==0||!r(e)){a();return}o(e);let c=!n.dragged&&i(s);a(),c&&s!==null&&!t.isDisabled()&&t.onTap(s)},leave(){n||t.onPreview(null)}}}function sh(e){let t=null,n=e=>e!==null&&Number.isFinite(e)&&Math.abs(e)<=1,r=()=>{t!==null&&(t=null,e.onStop())};return{pointerId:()=>t,cancel:r,begin(i,a){return t===null?e.isDisabled()||!i.isPrimary||i.button!==0||i.buttons!==1||!n(a)?!1:(t=i.pointerId,e.onStart(a),!0):(t!==i.pointerId&&r(),!1)},move(i,a){if(t===i.pointerId){if(e.isDisabled()||i.buttons!==1||!n(a)){r();return}e.onAim(a)}},end(e){t===e.pointerId&&r()}}}function ch(e,t,n,r){if(![e.yaw,e.pitch,t,n,r].every(Number.isFinite)||r<=0)return{yaw:e.yaw,pitch:e.pitch};let i=U.cameraOrbit,a=Math.max(r,i.minDragExtent),o=(e,t,n)=>Math.max(t,Math.min(n,e));return{yaw:o(e.yaw-t/a*i.yawSensitivity,-i.yawLimit,i.yawLimit),pitch:Math.tan(o(Math.atan(e.pitch)-n/a*i.elevationSensitivity,i.minElevation,i.maxElevation))}}var lh=new J;function uh(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;lh.copy(t),lh[r]=0,lh.normalize();let l=.5*o/(o+s),u=1-lh.angleTo(e)/c;return Math.sign(lh[n])===1?u*l:s/(o+s)+l+l*(1-u)}var dh=class e extends xs{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new J,c=new J,l=new J(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new J,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=uh(m,c,`z`,`y`,i,n),f[a+1]=1-uh(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-uh(m,c,`z`,`y`,i,n),f[a+1]=1-uh(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-uh(m,c,`x`,`z`,i,e),f[a+1]=uh(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-uh(m,c,`x`,`z`,i,e),f[a+1]=1-uh(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-uh(m,c,`x`,`y`,i,e),f[a+1]=1-uh(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=uh(m,c,`x`,`y`,i,e),f[a+1]=1-uh(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function fh(e,t,n){let r=U.premium,i=r.geometry,a=U.treasuryScene,o=a.geometry,s=[],c=[],l=[],u=!1,d,f,p=[],m,h=()=>{u||(u=!0,s.forEach(e=>e.dispose()),c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),p.forEach(e=>e.dispose()),m?.dispose(),d?.dispose(),e.environment=null,f?.dispose())};try{d=new Yu(t);let g=new ta;g.background=new $i(r.studio.background),m=new so({color:new $i(r.colors.light).multiplyScalar(r.studio.panelIntensity),side:2});for(let e of r.studio.panels){let t=new xs(e.size[0],e.size[1],e.size[2]);p.push(t);let n=new Y(t,m);n.position.fromArray(e.position),n.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),g.add(n)}f=d.fromScene(g,r.lighting.environmentBlur),e.environment=f.texture,e.environmentIntensity=r.materials.envIntensity,p.splice(0).forEach(e=>e.dispose()),m.dispose(),m=void 0,d.dispose(),d=void 0;let _=e=>{let n=new Ll().load(`./assets/${e}`,e=>{u&&e.dispose()});return n.colorSpace=tr,n.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),l.push(n),n},v=document.createElement(`canvas`);v.width=v.height=r.texture.brushSize;let y=v.getContext(`2d`);if(y){y.fillStyle=r.colors.brushBase,y.fillRect(0,0,v.width,v.height),y.strokeStyle=r.colors.brushLine,y.globalAlpha=r.texture.brushOpacity;for(let e=0;e<r.texture.brushLines;e++){let t=e*73%r.texture.brushLines/r.texture.brushLines*v.height;y.beginPath(),y.moveTo(0,t),y.lineTo(v.width,t),y.stroke()}}let b=new _s(v);b.colorSpace=tr,b.wrapS=b.wrapT=Mt,b.repeat.set(r.texture.brushRepeat,r.texture.brushRepeat),l.push(b);let x=(e,t,n,i=r.materials.metalness)=>{let a=new sl({color:e,roughness:t,metalness:i,...n?{map:n}:{}});return c.push(a),a},S=x(r.colors.champagne,r.materials.goldRoughness),C=x(r.colors.edge,r.materials.goldRoughness),T=x(r.colors.steel,r.materials.steelRoughness,b),E=x(r.colors.gunmetal,r.materials.darkRoughness,void 0,r.materials.darkMetalness),D=x(r.colors.black,r.materials.darkRoughness,void 0,r.materials.darkMetalness),O=new cl({map:_(`premium-enamel-v1.lossless.webp`),color:r.colors.white,metalness:r.materials.enamelMetalness,roughness:r.materials.enamelRoughness,clearcoat:r.materials.clearcoat}),k=new cl({color:r.colors.glass,transparent:!0,opacity:r.materials.glassOpacity,roughness:r.materials.glassRoughness,metalness:0,depthWrite:!1,side:2});c.push(O,k);let A=Wp(`steel`);l.push(...Object.values(A)),T.bumpMap=A.height,T.bumpScale=a.surface.steelBump,T.roughnessMap=A.roughness,T.roughness=a.materials.etchedRoughness,T.metalness=a.materials.etchedMetalness,T.envMap=f.texture,T.envMapIntensity=a.materials.etchedEnvironmentIntensity;let j=new Ll().load(`./assets/${a.assets.etchedSteel}`,e=>{if(u){e.dispose();return}T.map=e,T.needsUpdate=!0},void 0,()=>{});j.colorSpace=tr,j.wrapS=j.wrapT=Mt,j.repeat.set(o.steelRepeat,o.steelRepeat),j.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy()),l.push(j);let M=x(a.colors.ivory,a.materials.ivoryRoughness,void 0,a.materials.shieldMetalness),N=x(a.colors.cross,a.materials.crossRoughness,void 0,a.materials.shieldMetalness),P=x(a.colors.recess,a.materials.recessRoughness,void 0,r.materials.darkMetalness),F=x(a.colors.warmTrim,a.materials.trimRoughness),I=(t,n,r,a,o,c,l,u=!0)=>{let d=u?new dh(t,n,r,i.bevelSegments,Math.min(i.bevel,t/2,n/2,r/2)):new xs(t,n,r);s.push(d);let f=new Y(d,l);return f.position.set(a,o,c),f.castShadow=l!==k,f.receiveShadow=!0,e.add(f),f},L=(t,n,r,a,o,c,l=Math.PI*2)=>{let u=new Yc(t,n,i.boltSegments,i.archSegments,l);s.push(u);let d=new Y(u,c);return d.position.set(r,a,o),e.add(d),d},R=n.boardHalfWidth*2,ee=n.lowerFrontZ-n.upperBackZ,te=(n.lowerFrontZ+n.upperBackZ)/2,z=n.upperBackZ-i.rearOffset,ne=[],B=n.hatches??[];for(let e of w(n.boardHalfWidth,n.lowerBackZ,n.lowerFrontZ,B)){let t=I(e.halfWidth*2,n.lowerHalfThickness*2,e.halfDepth*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,T,!1);t.name=`physical-lower-bed`,ne.push(t)}let re=B.map((e,t)=>{let r=I(e.halfSize*2,n.lowerHalfThickness*2,e.halfSize*2,e.x,n.lowerY-n.lowerHalfThickness,e.z,T,!1);r.name=`physical-hatch-lid-${t}`,ne.push(r);for(let t of[-1,1])I(i.stripeThickness,i.stripeThickness,e.halfSize*2,e.x+t*(e.halfSize+i.stripeThickness/2),n.lowerY-i.stripeThickness/2,e.z,F,!1).name=`hatch-inset-frame`,I(e.halfSize*2,i.stripeThickness,i.stripeThickness,e.x,n.lowerY-i.stripeThickness/2,e.z+t*(e.halfSize+i.stripeThickness/2),F,!1).name=`hatch-inset-frame`;return r}),ie=e=>{e||re.forEach((e,t)=>{let r=B[t];e.position.set(r.x,n.lowerY-n.lowerHalfThickness,r.z),e.quaternion.identity()});for(let t of e??[]){let e=re[t.index];e&&(e.position.set(t.position.x,t.position.y,t.position.z),e.quaternion.set(t.rotation.x,t.rotation.y,t.rotation.z,t.rotation.w))}},ae=I(R,n.upperHalfThickness*2,n.upperFrontZ-n.upperBackZ,0,n.upperY-n.upperHalfThickness,(n.upperBackZ+n.upperFrontZ)/2,T,!1);ae.name=`physical-upper-deck`,ne.push(ae);let oe=I(R,n.pusherHalfHeight*2,n.pusherHalfDepth*2,0,n.pusherCenterY??n.upperY+n.pusherHalfHeight,n.upperBackZ,T,!1);if(oe.name=`physical-pusher`,ne.push(oe),n.rearWall){let e=I(R,n.rearWall.halfHeight*2,n.rearWall.halfDepth*2,0,n.rearWall.centerY,n.rearWall.centerZ,T,!1);e.name=`physical-rear-wall`,ne.push(e)}for(let e of w(n.boardHalfWidth+o.frameWidth,n.upperBackZ,n.lowerFrontZ+i.trayDepth,B))I(e.halfWidth*2,i.bodyDepth,e.halfDepth*2,e.x,n.lowerY-i.bodyDepth,e.z,D,!1).name=`treasury-chassis`;let se=I(R,i.rim,i.trayDepth,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth/2,T);se.name=`collection-tray`,I(R+o.frameWidth*2,i.rim*2,i.rim,0,n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth,E);for(let e of[-1,1])I(R+o.frameWidth*2,o.frameTrim,o.frameTrim,0,n.lowerY-i.trayDrop+e*i.rim,n.lowerFrontZ+i.trayDepth+i.rim/2,C);I(R,i.stripeThickness,i.stripeThickness,0,n.lowerY-i.stripeThickness/2,n.lowerFrontZ+i.stripeThickness/2,C,!1),I(R+o.frameWidth*2,o.rearFasciaHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight/2,z,E).name=`treasury-low-rear-fascia`,I(R,o.rearFasciaHeight-o.frameInset*2,o.frameTrim,0,n.lowerY+o.rearFasciaHeight/2,z+o.rearFasciaDepth/2,T),I(R+o.frameWidth*2,o.rearCopingHeight,o.rearFasciaDepth,0,n.lowerY+o.rearFasciaHeight,z,F);let ce=new Jc(o.bossRadius,o.bossSegments,o.bossSegments);s.push(ce);let le=(t,n,r)=>{let i=new Y(ce,C);return i.position.set(t,n,r),i.scale.z=o.bossHeight/o.bossRadius,e.add(i),i},ue=new tc,de=o.shieldWidth,fe=o.shieldHeight;ue.moveTo(-de/2,fe/2),ue.lineTo(de/2,fe/2),ue.lineTo(de/2,fe*o.shieldShoulderY),ue.bezierCurveTo(de/2,-fe*o.shieldShoulderControl,de*o.shieldTipControl,-fe*o.shieldTipControl,0,-fe/2),ue.bezierCurveTo(-de*o.shieldTipControl,-fe*o.shieldTipControl,-de/2,-fe*o.shieldShoulderControl,-de/2,fe*o.shieldShoulderY),ue.closePath();let pe=new zc(ue,{depth:o.shieldDepth,bevelEnabled:!0,bevelSegments:i.bevelSegments,steps:1,bevelSize:o.shieldBevel,bevelThickness:o.shieldBevel,curveSegments:o.ornamentSegments});s.push(pe);let me=new Jc(1,o.ornamentSegments,o.ornamentSegments);s.push(me);for(let t of[-1,1]){let r=o.frameWidth-i.glassOffset,l=t*(n.boardHalfWidth+i.glassOffset+r/2),u=ee+i.trayDepth,d=te+i.trayDepth/2;I(r,o.frameHeight,u,l,n.lowerY-o.frameHeight/2,d,E).name=`treasury-side-chassis-${t}`,I(r-o.frameInset*2,o.frameTrim,u-o.frameInset*2,l,n.lowerY,d,O).name=`treasury-side-enamel-${t}`;for(let e of[-1,1])I(o.frameTrim,o.frameTrim,u,l+e*(r-o.frameTrim)/2,n.lowerY+o.frameTrim/2,d,F).name=`treasury-side-trim-${t}-${e}`;let f=t*(n.boardHalfWidth+o.frameWidth-o.columnWidth/2),p=n.upperBackZ+ee*o.columnForwardFraction,m=p+o.columnDepth/2,h=a.sideGutter.columnClearance,g=o.columnHeight-h;I(r-o.frameTrim*2,h,o.columnDepth,l,n.lowerY+h/2,p,E).name=`treasury-column-pedestal-${t}`,I(o.columnWidth,g,o.columnDepth,f,n.lowerY+h+g/2,p,E).name=`treasury-column-${t}`,I(o.columnChannelWidth,g-o.columnCap*2,o.columnChannelDepth,f,n.lowerY+h+g/2,m,P);for(let e of[-1,1])I(o.frameTrim,g,o.columnChannelDepth,f+e*(o.columnWidth-o.frameTrim)/2,n.lowerY+h+g/2,m,F),I(o.columnWidth+o.frameTrim,o.columnCap,o.columnDepth+o.frameTrim,f,n.lowerY+(e<0?h+o.columnCap/2:o.columnHeight),p,S);let _=m+o.columnChannelDepth,v=new Y(pe,C);v.position.set(f,n.lowerY+o.shieldY,_),v.name=`treasury-shield-outline-${t}`,v.castShadow=!0,e.add(v);let y=new Y(pe,M);y.scale.set(o.shieldFaceScale,o.shieldFaceScale,1),y.position.set(f,n.lowerY+o.shieldY,_+o.shieldFaceLift),y.name=`treasury-shield-ivory-${t}`,y.castShadow=!0,e.add(y);let b=_+o.shieldFaceLift+o.shieldDepth+o.crossRelief/2;I(o.crossStroke,o.crossHeight,o.crossRelief,f,n.lowerY+o.shieldY,b,N).name=`treasury-cross-upright-${t}`,I(o.crossWidth,o.crossStroke,o.crossRelief,f,n.lowerY+o.shieldY+o.crossArmY,b,N).name=`treasury-cross-arm-${t}`;for(let t of[-1,1]){for(let r=0;r<o.leafCount;r++){let i=new Y(me,F);i.scale.set(o.leafWidth,o.leafLength,o.leafDepth),i.rotation.z=-t*o.laurelAngle,i.position.set(f+t*o.laurelWidth,n.lowerY+o.laurelY+r*o.laurelStep,_),i.name=`treasury-laurel-relief`,e.add(i)}let r=L(o.scrollRadius,o.scrollTube,f+t*o.scrollRadius,n.lowerY+o.columnHeight+o.scrollHeight,m,S,o.scrollAngle);r.rotation.z=t*Math.PI/2,r.name=`treasury-scroll-finial`}le(f,n.lowerY+o.columnHeight,m+o.columnChannelDepth),le(f,n.lowerY+h+o.columnCap/2,m+o.columnChannelDepth);let x=new tc;x.moveTo(n.upperBackZ,0),x.lineTo(n.lowerFrontZ,0),x.lineTo(n.lowerFrontZ,o.guardFrontHeight),x.lineTo(n.upperBackZ+o.guardInset,o.guardHeight+o.guardRearLift),x.lineTo(n.upperBackZ,o.guardHeight),x.closePath();let w=new Kc(x);s.push(w);let A=new Y(w,k);A.rotation.y=-Math.PI/2,A.position.set(t*(n.boardHalfWidth+i.glassOffset),n.lowerY,0),A.name=`treasury-glass-guard-${t}`,e.add(A);let j=new Ya().setFromPoints([new J(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardFrontHeight,n.lowerFrontZ),new J(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight+o.guardRearLift,n.upperBackZ+o.guardInset),new J(t*(n.boardHalfWidth+i.glassOffset),n.lowerY+o.guardHeight,n.upperBackZ)]);s.push(j);let R=new Xo({color:a.colors.edgeLight});c.push(R);let z=new is(j,R);z.name=`treasury-glass-edge`,z.raycast=()=>{},e.add(z),I(n.upperRailHalfThickness*2,n.upperRailHalfHeight*2,n.upperFrontZ-n.upperBackZ,t*(n.boardHalfWidth-n.upperRailHalfThickness),n.upperY+n.upperRailHalfHeight,(n.upperBackZ+n.upperFrontZ)/2,T,!1).name=`physical-upper-rail-${t}`,I(i.glassOffset,o.frameTrim,n.lowerFrontZ-n.lowerBackZ,t*(n.boardHalfWidth+i.glassOffset/2),n.lowerY-a.sideGutter.depth-o.frameTrim/2,(n.lowerBackZ+n.lowerFrontZ)/2,D,!1).name=`treasury-side-loss-channel-${t}`;for(let e=0;e<o.sideBoltCount;e++){let t=le(l,n.lowerY+o.frameTrim,n.upperBackZ+o.boltInset+e*(u-o.boltInset*2)/(o.sideBoltCount-1));t.rotation.x=-Math.PI/2}}let he=new Jc(i.boltRadius,i.boltSegments,i.boltSegments);s.push(he);for(let t=0;t<i.boltCount;t++){let r=new Y(he,C);r.position.set(-n.boardHalfWidth+R*t/(i.boltCount-1),n.lowerY-i.trayDrop,n.lowerFrontZ+i.trayDepth+i.rim/2),e.add(r)}let ge=new Cs(n.coinRadius,n.coinRadius,n.coinHalfHeight*2,i.segments,i.coinHeightSegments),V=ge.getAttribute(`position`);for(let e=0;e<V.count;e++)Math.abs(V.getY(e))>n.coinHalfHeight*i.coinBevelThreshold&&(V.setX(e,V.getX(e)*i.coinBevelRadius),V.setZ(e,V.getZ(e)*i.coinBevelRadius));ge.computeVertexNormals(),s.push(ge);let _e=Wp(`coin`);l.push(...Object.values(_e));for(let e of Object.values(_e))e.anisotropy=Math.min(r.texture.anisotropy,t.capabilities.getMaxAnisotropy());let ve=x(a.surface.coinColor,a.surface.coinRoughness,_e.albedo);ve.bumpMap=_e.height,ve.bumpScale=a.surface.coinBump,ve.roughnessMap=_e.roughness,ve.envMap=f.texture,ve.envMapIntensity=a.surface.coinEnvironmentIntensity;let ye=_(`coin-edge.svg`);ye.wrapS=Mt,ye.repeat.x=r.texture.coinEdgeRepeat;let H=x(r.colors.coinSide,r.materials.coinRoughness,ye);H.roughness=a.materials.coinSideRoughness;let be=new Go(ge,[H,ve,ve],n.capacity);be.count=0,be.castShadow=!0,be.receiveShadow=!0,be.frustumCulled=!1,be.instanceMatrix.setUsage(sr),e.add(be),ne.push(be);let xe=new so({color:U.interaction.aimColor,transparent:!0,opacity:r.effects.aimOpacity,depthWrite:!1});c.push(xe);let Se=new Ki;Se.name=`rear-drop-indicator`,e.add(Se);let Ce=n.coinRadius*r.effects.aimRadiusScale,we=L(Ce,r.effects.aimTube,0,0,0,xe);we.rotation.x=-Math.PI/2,Se.add(we);for(let e of[!1,!0]){let t=I(e?Ce*2:r.effects.aimTube,r.effects.aimTube,e?r.effects.aimTube:Ce*2,0,0,0,xe,!1);t.castShadow=!1,t.receiveShadow=!1,Se.add(t)}e.add(new zl(r.colors.light,r.colors.gunmetal,r.lighting.ambient));let Te=new nu(r.colors.light,r.lighting.key);Te.position.fromArray(r.lighting.keyPosition),Te.shadow.mapSize.set(U.scene.shadowMapSize,U.scene.shadowMapSize),Te.shadow.camera.left=Te.shadow.camera.bottom=-r.effects.shadowExtent,Te.shadow.camera.right=Te.shadow.camera.top=r.effects.shadowExtent,Te.shadow.bias=r.effects.shadowBias,Te.shadow.normalBias=r.effects.shadowNormalBias,e.add(Te);let Ee=new nu(r.colors.fill,r.lighting.fill);Ee.position.fromArray(r.lighting.fillPosition),e.add(Ee);let De=new nu(r.colors.white,r.lighting.rim);return De.position.fromArray(r.lighting.rimPosition),e.add(De),{coins:be,pusher:oe,aim:Se,key:Te,hitTargets:ne,updateHatches:ie,dispose:h}}catch(e){throw h(),e}}function ph(e,t){let n=U.cameraViews;return e===`overhead`?{yaw:0,pitch:n.overheadPitch}:e===`left`||e===`right`?{yaw:e===`left`?-n.sideYaw:n.sideYaw,pitch:n.sidePitch}:{yaw:0,pitch:t<U.premium.camera.portraitAspect?U.premium.camera.portraitPitch:U.premium.camera.pitch}}function mh(e,t=!1){let n=U.premium,r=U.treasuryScene.geometry,i=e.boardHalfWidth+(t?n.camera.portraitFrameSideExtra:n.camera.frameSideExtra),a=[-i,i].flatMap(t=>[new J(t,e.lowerY,e.upperBackZ),new J(t,e.lowerY,e.lowerFrontZ),new J(t,e.lowerY-n.geometry.trayDrop,e.lowerFrontZ+n.geometry.trayDepth+n.geometry.rim)]);if(t)for(let t of[-i,i])a.push(new J(t,e.lowerY-n.geometry.bodyDepth-n.geometry.bodyDepth/2,e.lowerFrontZ+n.geometry.trayDepth));let o=e.upperBackZ+(e.lowerFrontZ-e.upperBackZ)*r.columnForwardFraction,s=e.lowerY+r.columnHeight+r.scrollHeight+r.scrollRadius+r.scrollTube;for(let e of[-i,i])a.push(new J(e,s,o+r.columnDepth/2));for(let t of[-e.boardHalfWidth,e.boardHalfWidth]){for(let n of[e.upperBackZ,e.upperFrontZ])a.push(new J(t,e.upperY+e.upperRailHalfHeight*2,n));e.rearWall&&a.push(new J(t,e.rearWall.centerY+e.rearWall.halfHeight,e.rearWall.centerZ))}if(e.towerEnvelopes?.length)for(let t of e.towerEnvelopes)for(let e of[t.x-t.radius,t.x+t.radius])for(let n of[t.z-t.radius,t.z+t.radius])a.push(new J(e,t.topY,n));else for(let t of[-e.boardHalfWidth,e.boardHalfWidth])for(let r of[e.lowerBackZ,e.lowerFrontZ])a.push(new J(t,e.towerTopY??e.lowerY+n.camera.frameTop,r));return a}function hh(e,t,n,r=ph(`front`,n)){let i=U.premium;e.aspect=n;let{pitch:a,yaw:o}=r,s=new J(Math.sin(o),a,Math.cos(o)).normalize(),c=new J(Math.cos(o),0,-Math.sin(o)),l=new J().crossVectors(s,c).normalize(),u=(t.lowerFrontZ+t.upperBackZ)/2,d=new J(0,t.lowerY+i.camera.targetY,u+i.camera.targetZBias),f=mh(t,n<i.camera.portraitAspect),p=f.map(e=>e.clone().sub(d).dot(l));d.addScaledVector(l,(Math.min(...p)+Math.max(...p))/2);let m=f.map(e=>e.clone().sub(d).dot(c));d.addScaledVector(c,(Math.min(...m)+Math.max(...m))/2);let h=Math.tan(qr.degToRad(e.fov/2)),g=h*n,_=e.near;for(let t of f){let n=t.clone().sub(d),r=n.dot(s);_=Math.max(_,Math.abs(n.dot(c))/g+r,Math.abs(n.dot(l))/h+r,e.near+r)}let v=_*i.camera.margin;if(n<i.camera.portraitAspect){let e=U.treasuryScene.camera,t=v*h*e.portraitCenterOffset;for(let n of f){let r=n.clone().sub(d),i=v-r.dot(s);t=Math.min(t,r.dot(l)+(1-e.portraitBottomPadding)*i*h)}d.addScaledVector(l,Math.max(0,t))}e.position.copy(d).addScaledVector(s,v),e.lookAt(d),e.updateProjectionMatrix(),e.updateMatrixWorld()}function gh(e){let t=U.interaction,n=U.premium,r=e.boardHalfWidth-e.coinRadius-e.upperRailHalfThickness*2,i=e.coinRadius*n.effects.aimRadiusScale,a=(e.pusherCenterY??e.upperY+e.pusherHalfHeight)+e.pusherHalfHeight,o=Math.max(e.upperY,a)+n.effects.aimSurfaceOffset,s=new Ki;s.name=`rear-entry-guides`,s.position.set(0,o,e.dropZ);let c=[],l=[],u=(e,t)=>{let n=new so({color:e,transparent:!0,opacity:t,depthWrite:!1});return l.push(n),n},d=(e,t,n)=>{let r=new Yc(e,t,U.scene.rivetSegments,U.scene.ringSegments);c.push(r);let i=new Y(r,n);return i.rotation.x=-Math.PI/2,i},f=d(i*t.aimOutlineScale,t.aimOutlineTube,u(t.aimOutlineColor,n.effects.aimOpacity));f.name=`selected-aim-outline`,s.add(f);let p=d(i,n.effects.aimTube,u(t.aimColor,t.previewOpacity));p.name=`aim-preview-ring`,p.visible=!1,s.add(p);let m=new Ya().setFromPoints([new J(-r,0,0),new J(r,0,0),new J(-r,0,-i),new J(-r,0,i),new J(r,0,-i),new J(r,0,i)]);c.push(m);let h=new Xo({color:t.aimColor,transparent:!0,opacity:t.previewOpacity,depthWrite:!1});l.push(h);let g=new cs(m,h);g.name=`rear-entry-range`,s.add(g);let _=u(t.acceptedColor,n.effects.aimOpacity),v=d(i*t.aimOutlineScale,t.aimOutlineTube,_);v.name=`accepted-drop-ring`,v.visible=!1,s.add(v);let y=new Ya().setFromPoints([new J(-i,0,-i),new J(i,0,i),new J(-i,0,i),new J(i,0,-i)]);c.push(y);let b=new Xo({color:t.blockedColor,transparent:!0,opacity:n.effects.aimOpacity,depthWrite:!1});l.push(b);let x=new cs(y,b);x.name=`blocked-drop-cross`,x.visible=!1,s.add(x);let S,C=-1/0,w=!1,T=Qe();return{root:s,surfaceY:o,update(e,t,i,a,o,c){if(w)return;s.visible=!a,f.position.x=e*r,p.visible=!a&&t!==null,t!==null&&(p.position.x=t*r),i?.sequence!==S&&(S=i?.sequence,C=o),a&&(C=-1/0);let l=o-C,u=T.sample(l,c),d=!a&&u.active;v.visible=d&&i?.kind===`accepted`,x.visible=d&&i?.kind===`blocked`,i&&i.kind!==`idle`&&(v.position.x=x.position.x=i.aim*r),v.scale.setScalar(u.scale),_.opacity=n.effects.aimOpacity*u.opacity},dispose(){w||(w=!0,T.dispose(),s.removeFromParent(),c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()))}}}function _h(e){let t={...e},n={...e},i,a=0,o=!1,s=()=>{i?.kill(),i=void 0,Object.assign(t,n)};return{start(e,c,l){if(!o){if(i?.kill(),n={...e},a=c,l){s();return}i=r.timeline({paused:!0}).to(t,{...n,duration:U.cameraViews.transitionSeconds,ease:U.motion.ease})}},sample(e,n){if(i){let t=Math.max(0,(e-a)/1e3);n||t>=U.cameraViews.transitionSeconds?s():i.seek(t,!0)}return t},moving:()=>!!i,finish:s,dispose(){o||(o=!0,s())}}}function vh(e,t,n,r,i){if(![e,n,r,i].every(Number.isFinite)||n<=0)return null;t.updateMatrixWorld();let a=e=>new pi(e,r,i,1).applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix),o=a(-n),s=a(n);if(o.w<=0||s.w<=0)return null;let c=o.x/o.w,l=s.x/s.w;if(![c,l].every(Number.isFinite)||l<=c)return null;let u=qr.clamp(e,c,l),d=u*(s.w-o.w)-(s.x-o.x);if(!Number.isFinite(d)||Math.abs(d)<2**-52)return null;let f=(o.x-u*o.w)/d;return Number.isFinite(f)?qr.clamp(f*2-1,-1,1):null}function yh(){let e={approach:0,exit:0},t=r.timeline({paused:!0,data:`dragon-board-bonus`});return t.to(e,{approach:1,duration:N.impactSeconds,ease:`power2.in`},0).to(e,{exit:1,duration:N.durationSeconds-N.impactSeconds,ease:`power1.out`},N.impactSeconds),{sample(n,r=!1){let i=Math.max(0,Math.min(N.durationSeconds,n.elapsed));t.totalTime(i,!0);let a=n.direction===`left`?1:n.direction===`right`?-1:0,o=new J(a,0,1).normalize(),s=r?-N.reducedDistance:-N.approachDistance*(1-e.approach)+N.exitDistance*e.exit;return{x:n.target.x+o.x*s,y:n.target.y+(r?N.reducedHeight:N.approachHeight*(1-e.approach)+N.exitHeight*e.exit),z:n.target.z+o.z*s,yaw:Math.atan2(-o.x,-o.z),bank:r?0:-a*N.bank*(1-e.exit),scale:N.modelScale,skeletonTime:r?0:i,opacity:r?1:Math.min(1,i/N.fadeInSeconds,(N.durationSeconds-i)/N.fadeOutSeconds)}},dispose(){t.kill()}}}function bh(){let e=Wm(),t=yh(),n=new Ki;n.name=`live-board-dragon-bonus`,n.add(e.root),n.visible=!1;let r=new Gc(N.impactRadius*.8,N.impactRadius,40),i=new so({color:N.impactColor,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1}),a=new Y(r,i);n.add(a);let o=!1,s=!1,c=e.ready.then(()=>{o=!0});return c.catch(()=>{}),{root:n,ready:c,draw(r,c=!1){if(s||(n.visible=o&&!!r,!r||!o))return;e.drawPose(t.sample(r,c));let l=r.elapsed-N.impactSeconds,u=l/N.impactLife;a.visible=r.phase===`hit`&&l>=0&&u<1,a.position.copy(r.target),a.scale.setScalar(c?1:1+N.impactExpansion*Math.max(0,u)),a.rotation.y=r.direction===`left`?Math.PI/4:r.direction===`right`?-Math.PI/4:0,i.opacity=N.impactOpacity*(1-Math.max(0,u))},dispose(){s||(s=!0,t.dispose(),e.dispose(),r.dispose(),i.dispose(),n.clear())}}}var xh=U.cabinetHousing,Q=xh.geometry,Sh=U.premium.colors;function Ch(e){let t=new Ki;t.name=`complete-cabinet`;let n=new Ki;n.name=`cabinet-exterior-only`,t.add(n);let r=new Set,i=new Set,a=new Set,o=new Set,s=e=>{o.has(e)||(o.add(e),e.dispose())},c=[],l=!1,u=e=>(r.add(e),e),d=e=>(i.add(e),e),f=d(new sl({color:Sh.gunmetal,metalness:xh.materials.bodyMetalness,roughness:xh.materials.bodyRoughness})),p=d(new sl({color:Sh.black,metalness:xh.materials.bodyMetalness,roughness:xh.materials.bodyRoughness})),m=d(new sl({color:Sh.champagne,metalness:U.premium.materials.metalness,roughness:xh.materials.brassRoughness})),h=d(new sl({color:Sh.edge,metalness:U.premium.materials.metalness,roughness:xh.materials.brassRoughness})),g=d(new cl({color:Sh.enamel,metalness:xh.materials.enamelMetalness,roughness:xh.materials.enamelRoughness,clearcoat:U.premium.materials.clearcoat})),_=d(new sl({color:Sh.light,metalness:xh.materials.enamelMetalness,roughness:xh.materials.enamelRoughness})),v=d(new sl({color:xh.materials.bannerColor,roughness:xh.materials.bannerRoughness,metalness:xh.materials.bannerMetalness,emissive:xh.materials.bannerColor,emissiveIntensity:xh.materials.bannerEmissiveIntensity})),y=d(new sl({color:Sh.light,emissive:Sh.edge,emissiveIntensity:xh.materials.lightIntensity,toneMapped:!1})),b=d(new cl({color:Sh.glass,transparent:!0,opacity:xh.materials.glassOpacity,roughness:xh.materials.glassRoughness,side:2,depthWrite:!1})),x=u(new xs(1,1,1)),S=u(new Jc(Q.rivetRadius,Q.curveSegments/2,Q.curveSegments/2)),C=(e,n,r,i=t,a=!0)=>{let o=new Y(n,r);return o.name=e,o.castShadow=r!==b&&r!==y,o.receiveShadow=!0,i.add(o),a?c.push(o):o.raycast=()=>{},o},w=(e,n,r,i,a,o,s,c,l=t)=>{let u=C(e,x,c,l,c!==b);return u.scale.set(n,r,i),u.position.set(a,o,s),u},T=(e,t=Q.shieldDepth)=>u(new zc(e,{depth:t,bevelEnabled:!0,bevelSize:Q.bevel,bevelThickness:Q.bevel,bevelSegments:Q.bevelSegments,curveSegments:Q.curveSegments,steps:1})),E=(e,t,n)=>{let r=new tc;return r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(e/2,t),r.bezierCurveTo(e/3,t+n*.6,e/6,t+n,0,t+n),r.bezierCurveTo(-e/6,t+n,-e/3,t+n*.6,-e/2,t),r.closePath(),r},D=new tc;D.moveTo(-.5,.45),D.lineTo(0,.58),D.lineTo(.5,.45),D.quadraticCurveTo(.5,-.25,0,-.58),D.quadraticCurveTo(-.5,-.25,-.5,.45);let O=T(D),k=(e,n,r,i,a,o=t)=>{let s=C(`${e}-rim`,O,m,o);s.position.set(n,r,i),s.scale.set(a,a,1);let c=C(`${e}-ivory`,O,_,o);c.position.set(n,r,i+Q.shieldDepth),c.scale.set(a*.86,a*.86,1),w(`${e}-cross-vertical`,a*.15,a*.72,Q.shieldDepth,n,r,i+Q.shieldDepth*3,g,o),w(`${e}-cross-horizontal`,a*.57,a*.15,Q.shieldDepth,n,r+a*.1,i+Q.shieldDepth*3,g,o)},A=e.boardHalfWidth+Q.sideClearance,j=e.upperBackZ-Q.backSetback,M=e.lowerFrontZ+Q.frontExtension,N=M-j,P=Q.baseTopY-Q.floorY,F=(Q.baseTopY+Q.floorY)/2;w(`cabinet-plinth`,A*2,P,N,0,F,(M+j)/2,f),w(`cabinet-base-enamel`,A*2-Q.postWidth*2,P-Q.footHeight*2,Q.panelThickness,0,F,M+Q.panelThickness/2,g);for(let e of[Q.baseTopY,Q.floorY+Q.footHeight])w(`cabinet-plinth-gold-band`,A*2+Q.trim*2,Q.trim,N+Q.trim*2,0,e,(j+M)/2,m);for(let e of[-1,1]){for(let t of[j+Q.postDepth,M-Q.postDepth])w(`cabinet-leveling-foot`,Q.postWidth*2,Q.footHeight,Q.postDepth*2,e*(A-Q.postWidth),Q.floorY-Q.footHeight/2,t,p);w(`cabinet-base-corner`,Q.postWidth,P,Q.postDepth,e*(A-Q.postWidth/2),F,M,m),C(`cabinet-arched-service-inset`,T(E(Q.bannerWidth*1.5,P*.55,Q.archRise/2)),p).position.set(e*A*.65,Q.floorY+Q.footHeight*2,M+Q.panelThickness);for(let t=0;t<Q.ventCount;t++)w(`cabinet-service-vent`,Q.ventWidth,Q.trim/3,Q.trim,e*A*.65,Q.floorY+Q.footHeight*3+t*Q.ventSpacing,M+Q.panelThickness*2,m);for(let t of[Q.floorY+Q.footHeight*2,Q.baseTopY-Q.footHeight])C(`cabinet-service-rivet`,S,h).position.set(e*A*.9,t,M+Q.postDepth/2)}let I=C(`cabinet-front-medallion`,u(new Cs(Q.medallionRadius,Q.medallionRadius,Q.panelThickness,Q.curveSegments*2)),m);I.rotation.x=Math.PI/2,I.position.set(0,F,M+Q.panelThickness),k(`cabinet-front-shield`,0,F,M+Q.panelThickness*2,Q.medallionRadius*1.4),w(`cabinet-control-shelf`,A*2+Q.postWidth,Q.ledgeHeight,Q.ledgeDepth,0,Q.baseTopY+Q.ledgeHeight/2,M+Q.ledgeDepth/2,p,n),w(`cabinet-control-shelf-trim`,A*2+Q.postWidth,Q.trim,Q.ledgeDepth,0,Q.baseTopY+Q.ledgeHeight,M+Q.ledgeDepth/2,m,n);for(let t of[-1,1]){for(let e of[j,M])w(`cabinet-glass-post`,Q.postWidth,Q.chamberTopY-Q.baseTopY,Q.postDepth,t*A,(Q.chamberTopY+Q.baseTopY)/2,e,f),w(`cabinet-post-inlay`,Q.trim*2,Q.chamberTopY-Q.baseTopY,Q.trim,t*A,(Q.chamberTopY+Q.baseTopY)/2,e+Q.postDepth/2,m),w(`cabinet-post-light`,Q.lightWidth,Q.chamberTopY,Q.trim/2,t*(A-Q.postWidth/2),Q.chamberTopY/2,e+Q.postDepth/2,y);w(`cabinet-side-glazing`,Q.trim/3,Q.chamberTopY-e.lowerY,N,t*A,(Q.chamberTopY+e.lowerY)/2,(j+M)/2,b),w(`cabinet-side-canopy-rail`,Q.postWidth,Q.trim*3,N,t*A,Q.chamberTopY,(j+M)/2,m,n)}w(`cabinet-front-glazing`,A*2,Q.chamberTopY,Q.trim/3,0,Q.chamberTopY/2,M,b,n),w(`cabinet-canopy`,A*2+Q.postWidth,Q.panelThickness,N+Q.postDepth,0,Q.chamberTopY,(j+M)/2,p,n),w(`cabinet-rear-panel`,A*2,Q.chamberTopY-e.lowerY,Q.panelThickness,0,(Q.chamberTopY+e.lowerY)/2,j,g),C(`cabinet-rear-seal`,u(new Yc(Q.rearSealRadius,Q.trim,Q.curveSegments/2,Q.curveSegments*3)),m).position.set(0,Q.rearSealY,j+Q.panelThickness),k(`cabinet-rear-shield`,0,Q.rearSealY,j+Q.panelThickness,Q.rearSealRadius*1.25);let L=new tc;L.moveTo(-Q.bannerWidth/2,Q.bannerHeight/2),L.lineTo(Q.bannerWidth/2,Q.bannerHeight/2),L.lineTo(Q.bannerWidth/2,-Q.bannerHeight/2+Q.bannerHeight*Q.bannerPointRatio),L.lineTo(0,-Q.bannerHeight/2),L.lineTo(-Q.bannerWidth/2,-Q.bannerHeight/2+Q.bannerHeight*Q.bannerPointRatio),L.closePath();let R=T(L,Q.trim/2);for(let e of[-1,1]){C(`cabinet-banner-border`,R,m).position.set(e*Q.bannerOffset,Q.bannerCenterY,j+Q.panelThickness);let t=C(`cabinet-rear-banner`,R,v);t.scale.set(Q.bannerFaceScale,Q.bannerFaceScale,1),t.position.set(e*Q.bannerOffset,Q.bannerCenterY,j+Q.panelThickness+Q.trim),k(`cabinet-banner-shield`,e*Q.bannerOffset,Q.bannerCenterY,j+Q.panelThickness*2,Q.bannerWidth*Q.bannerShieldScale)}C(`cabinet-arched-marquee`,T(E(A*2+Q.postWidth,Q.marqueeHeight,Q.archRise),Q.marqueeDepth),m,n).position.set(0,Q.chamberTopY,M-Q.marqueeDepth),C(`cabinet-marquee-enamel`,T(E(A*2-Q.trim*2,Q.marqueeHeight-Q.trim*2,Q.archRise-Q.trim),Q.trim),g,n).position.set(0,Q.chamberTopY+Q.trim,M+Q.trim),k(`cabinet-crown`,0,Q.chamberTopY+Q.marqueeHeight+Q.archRise,M+Q.trim,Q.medallionRadius,n);let ee=document.createElement(`canvas`);ee.width=Q.labelWidth,ee.height=Q.labelHeight;let te=ee.getContext(`2d`);if(te){te.textAlign=`center`,te.textBaseline=`middle`,te.fillStyle=Sh.edge,te.font=`700 ${xh.label.titleSize}px "Noto Serif TC", "Microsoft JhengHei", serif`,te.fillText(`聖 城 幣 塔`,ee.width/2,ee.height*xh.label.titleY),te.font=`${xh.label.subtitleSize}px Georgia, serif`,te.fillText(`C R U S A D E R   C O I N   P U S H E R`,ee.width/2,ee.height*xh.label.subtitleY);let e=new _s(ee);e.colorSpace=tr,a.add(e);let t=d(new sl({map:e,transparent:!0,depthWrite:!1,emissive:Sh.edge,emissiveMap:e,emissiveIntensity:xh.materials.labelIntensity,roughness:xh.materials.brassRoughness}));C(`cabinet-marquee-lettering`,u(new Wc(A*1.5,Q.marqueeHeight)),t,n,!1).position.set(0,Q.chamberTopY+Q.marqueeHeight/2+Q.trim,M+Q.trim*3)}let z=new Ll,ne=(e,t,n,r)=>{let i=t.color.clone();try{let o=z.load(`/crusader-coin-pusher-demo/${e.replace(/^\.\//,``)}`,e=>{if(l){s(e);return}t.color.set(Sh.white),t.needsUpdate=!0},void 0,()=>{l||(t.map=null,t.color.copy(i),t.needsUpdate=!0)});a.add(o),o.colorSpace=tr,o.wrapS=o.wrapT=Mt,o.repeat.set(n,r),t.map=o,t.needsUpdate=!0}catch{}};ne(`./assets/premium-enamel-v1.lossless.webp`,g,2,2),ne(`./assets/treasury-etched-steel-v1.lossless.webp`,f,2,1),t.updateMatrixWorld(!0);let B=new ga().setFromObject(t),re=[B.min.x,B.max.x].flatMap(e=>[B.min.y,B.max.y].flatMap(t=>[B.min.z,B.max.z].map(n=>new J(e,t,n)))),ie=e=>{n.visible=e};return ie(!1),{root:t,fullBounds:re,setOverview:ie,getOccluders:()=>c.filter(e=>e.parent!==n||n.visible),dispose(){l||(l=!0,t.removeFromParent(),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),a.forEach(s))}}}function wh(e){let t=U.boardFeedback,n=new Ki;n.name=`board-result-guides`;let i=new Set,a=e=>(i.add(e),e),o=(e,n=t.idleOpacity)=>a(new so({color:e,transparent:!0,opacity:n,depthWrite:!1})),s=o(t.frontColor),c=new Y(a(new xs(e.boardHalfWidth*2,t.lineWidth,t.lineWidth)),s);c.name=`confirmed-front-collection-edge`,c.position.set(0,e.lowerY+t.lineLift,e.lowerFrontZ),n.add(c);let l=Math.max(0,e.lowerFrontZ-e.lowerBackZ-t.sideEndInset*2),u=a(new xs(t.sideBandWidth,t.lineWidth,l)),d=o(U.premium.colors.gunmetal,t.sideBandOpacity),f=[],p=t.sideBandWidth/2;for(let e=-l/2;e+t.sideStripeSlant+t.sideStripeDepth<=l/2;e+=t.sideStripePitch){let n=[-p,t.lineWidth,e],r=[-p,t.lineWidth,e+t.sideStripeDepth],i=[p,t.lineWidth,e+t.sideStripeSlant+t.sideStripeDepth],a=[p,t.lineWidth,e+t.sideStripeSlant];f.push(...n,...r,...a,...r,...i,...a)}let m=a(new Ya);m.setAttribute(`position`,new La(f,3));let h=o(t.lossColor,t.lossOpacity);for(let r of[-1,1]){let i=new Ki;i.name=r<0?`side-loss-warning-left`:`side-loss-warning-right`,i.position.set(r*(e.boardHalfWidth-p),e.lowerY+t.lineLift,(e.lowerBackZ+e.lowerFrontZ)/2),i.add(new Y(u,d),new Y(m,h)),n.add(i)}let g=a(new Xo({color:t.lossColor,transparent:!0,opacity:t.lossOpacity})),_=(e.hatches??[]).map((r,i)=>{let o=r.halfSize,s=[[-o,-o],[o,-o],[o,-o],[o,o],[o,o],[-o,o],[-o,o],[-o,-o],[-o,-o],[o,o],[-o,o],[o,-o]].map(([e,t])=>new J(e,0,t)),c=new cs(a(new Ya().setFromPoints(s)),g);return c.name=`opening-hatch-warning-${i}`,c.position.set(r.x,e.lowerY+t.lineLift,r.z),c.visible=!1,n.add(c),c}),v=a(new Yc(e.coinRadius*t.paidRingScale,t.paidRingTube,U.scene.rivetSegments,U.scene.ringSegments));v.rotateX(-Math.PI/2);let y=new Go(v,o(t.paidColor,t.activeOpacity),e.capacity);y.name=`already-settled-dragon-coin-rims`,y.count=0,y.frustumCulled=!1,n.add(y),i.add(y);let b=o(t.frontColor,t.activeOpacity),x=(e.towerEnvelopes??[]).map(r=>{let i=a(new Yc(r.radius,t.lineWidth/2,U.scene.rivetSegments,U.scene.ringSegments));i.rotateX(-Math.PI/2);let o=new Y(i,b);return o.position.set(r.x,e.lowerY+t.lineLift,r.z),o.visible=!1,n.add(o),o}),S={glow:0,scale:1},C=r.timeline({paused:!0,data:`confirmed-board-feedback`}).fromTo(S,{glow:1,scale:t.collapseScale},{glow:0,scale:1,duration:1,ease:`power2.out`}),w=new vi,T=new J,E=new Jr,D=new J(1,1,1),O=!1;return{root:n,update(r,i,a=!1){if(O)return;n.visible=!a;let o=r.boardFeedback,c=r.elapsedSeconds??0,l=o?.frontAt==null?1:Math.max(0,(c-o.frontAt)*1e3/t.frontPulseMs);C.totalTime(Math.min(1,l),!0),s.opacity=o?.frontAt!=null&&i?t.activeOpacity:t.idleOpacity+(t.activeOpacity-t.idleOpacity)*S.glow,_.forEach((e,t)=>{e.visible=!!r.openingHatches?.includes(t)||(r.hatches?.find(e=>e.index===t)?.open??0)>0}),x.forEach((e,n)=>{e.visible=!r.dragonBonus&&!!o?.highTower?.slots.includes(n);let a=o?.highTower?(c-o.highTower.at)*1e3/t.collapseMs:1;C.totalTime(Math.max(0,Math.min(1,a)),!0),e.scale.setScalar(i?1:S.scale)});let u=0;for(let t of r.coins)!o?.paidCoinIds.has(t.id)||u>=e.capacity||t.position.y<e.lowerY-e.lowerHalfThickness*2||(T.set(t.position.x,t.position.y,t.position.z),E.set(t.rotation.x,t.rotation.y,t.rotation.z,t.rotation.w),w.compose(T,E,D),y.setMatrixAt(u++,w));y.count=u,y.instanceMatrix.needsUpdate=!0},dispose(){O||(O=!0,C.kill(),n.removeFromParent(),i.forEach(e=>e.dispose()))}}}var $={keyColor:`#3e98aa`,keyMetal:`#fff0ae`,railColor:`#74e6ff`,railOpacity:.62,keyMetalness:.75,keyRoughness:.28,segments:24,tubeSegments:8,railEmissive:.25,railMetalness:.5,railRoughness:.25,keyBowRadius:.009,keyBowTube:.002,keyBowZ:-.014,keyStemWidth:.004,keyStemLength:.028,keyStemZ:.009,keyToothWidth:.009,keyToothDepth:.004,keyToothZ:.019,keyReliefY:.006,keyReliefHeight:.002,choiceTube:.004,choiceRadius:.142,choiceY:.009,momentSeconds:2,momentIntensity:3,momentDistance:2.2,momentHeight:.6,shadowColor:`#15121b`,shadowOpacity:.35,shadowScale:.42,shadowHeight:.011,shadowStartX:-1.2,shadowEndX:1.2};function Th(e){let t=new Ki;t.name=`treasury-features`;let n=new Set,i=e=>(n.add(e),e),a=i(new sl({color:$.keyMetal,metalness:$.keyMetalness,roughness:$.keyRoughness})),o=i(new sl({color:$.keyColor,metalness:$.keyMetalness,roughness:$.keyRoughness})),s=i(new Cs(e.coinRadius,e.coinRadius,e.coinHalfHeight*2,$.segments)),c=i(new Yc($.keyBowRadius,$.keyBowTube,$.tubeSegments,$.segments));c.rotateX(-Math.PI/2),c.translate(0,$.keyReliefY,$.keyBowZ);let l=i(new xs($.keyStemWidth,$.keyReliefHeight,$.keyStemLength));l.translate(0,$.keyReliefY,$.keyStemZ);let u=i(new xs($.keyToothWidth,$.keyReliefHeight,$.keyToothDepth));u.translate($.keyStemWidth,$.keyReliefY,$.keyToothZ);let d=[s,c,l,u].map((n,r)=>{let s=i(new Go(n,r?a:o,e.capacity));return s.name=r?`key-relief-${r}`:`physical-key-medallions`,s.count=0,s.frustumCulled=!1,t.add(s),s}),f=i(new sl({color:$.railColor,emissive:$.railColor,emissiveIntensity:$.railEmissive,transparent:!0,opacity:$.railOpacity,metalness:$.railMetalness,roughness:$.railRoughness})),p=i(new xs(S.halfWidth*2,S.halfHeight*2,S.halfDepth*2)),m=[-1,1].map(e=>{let n=new Y(p,f);return n.name=`physical-shield-${e}`,n.position.set(e*S.x,de(0),S.z),t.add(n),n}),h=i(new Yc($.choiceRadius,$.choiceTube,$.tubeSegments,$.segments));h.rotateX(-Math.PI/2);let g=i(new so({color:$.railColor})),_=(e.hatches??[]).map((e,n)=>{let r=new Y(h,g);return r.name=`dragon-target-${n}`,r.position.set(e.x,$.choiceY,e.z),r.visible=!1,t.add(r),r}),v=new $l($.keyMetal,0,$.momentDistance);v.name=`high-tower-local-light`,t.add(v);let y=new tc;[[0,-.65],[-.1,-.18],[-.3,-.4],[-1,-.3],[-.65,0],[-.4,.1],[-.15,.06],[-.08,.3],[0,.5],[.08,.3],[.15,.06],[.4,.1],[.65,0],[1,-.3],[.3,-.4],[.1,-.18],[0,-.65]].forEach(([e,t],n)=>n?y.lineTo(e,t):y.moveTo(e,t));let b=i(new so({color:$.shadowColor,transparent:!0,opacity:0,depthWrite:!1,side:2})),x=new Y(i(new Kc(y)),b);x.name=`high-tower-dragon-shadow`,x.rotation.x=-Math.PI/2,x.scale.setScalar($.shadowScale),t.add(x);let C={light:0,shadow:0,x:$.shadowStartX},w=r.timeline({paused:!0,data:`high-tower-local-moment`}).fromTo(C,{light:$.momentIntensity},{light:0,duration:$.momentSeconds,ease:`power2.out`},0).fromTo(C,{x:$.shadowStartX},{x:$.shadowEndX,duration:$.momentSeconds,ease:`power1.inOut`},0).fromTo(C,{shadow:0},{shadow:$.shadowOpacity,duration:$.momentSeconds/3,yoyo:!0,repeat:1,ease:`sine.inOut`},0),T=new J,E=new Jr,D=new J(1,1,1),O=new vi,k=!1;return{root:t,update(n,r,i=!1){if(k)return;t.visible=!i;let a=0;for(let t of n.coins)if(!(t.kind!==`key`||a>=e.capacity)){T.copy(t.position),E.copy(t.rotation),O.compose(T,E,D);for(let e of d)e.setMatrixAt(a,O);a++}for(let e of d)e.count=a,e.instanceMatrix.needsUpdate=!0;for(let e of m)e.visible=(n.treasury?.shield??0)>0,e.position.y=de(n.treasury?.shield??0);_.forEach((e,t)=>{e.visible=!!n.dragonChoice?.targets.some(e=>e.slot===t)});let o=n.boardFeedback?.highTower,s=o?Math.max(0,(n.elapsedSeconds??0)-o.at):$.momentSeconds;w.totalTime(Math.min($.momentSeconds,s),!0);let c=!!o&&!n.dragonBonus&&!n.dragonChoice&&s<$.momentSeconds&&!r,l=e.hatches?.[o?.slots[0]??0];v.position.set(l?.x??0,$.momentHeight,l?.z??0),v.intensity=c?C.light:0,x.visible=c,b.opacity=C.shadow,x.position.set(C.x,e.lowerY+$.shadowHeight,(e.lowerBackZ+e.lowerFrontZ)/2)},dispose(){k||(k=!0,w.kill(),t.removeFromParent(),n.forEach(e=>e.dispose()))}}}function Eh(){let e={progress:0},t=r.timeline({paused:!0,data:`dragon-bells`}).to(e,{progress:1,duration:1,ease:`sine.inOut`});return{sample(n,r,i=!1){let a=n.bellSlots[r],o=n.swap;if(!o||r!==o.a&&r!==o.b)return{slot:a,arc:0,spin:0};t.totalTime(o.progress,!0);let s=r===o.a?o.b:o.a,c=e.progress;return{slot:a+(n.bellSlots[s]-a)*c,arc:i?0:Math.sin(c*Math.PI)*(r===o.a?1:-1)*C.arcHeight,spin:i?0:c*C.spinRadians}},dispose(){t.kill()}}}function Dh(){let e={scale:1},t=r.timeline({paused:!0,data:`dragon-auto-choice`}).to(e,{scale:C.autoChoice.ringScale,duration:1,ease:`sine.out`});return{sample(n,r){return t.totalTime(n.confirming?n.confirmProgress:0,!0),r&&n.confirming?C.autoChoice.ringScale:e.scale},dispose(){t.kill()}}}function Oh(e={}){let t=C.art,n=new ta,r=new eu(-C.layoutWidth/2,C.layoutWidth/2,C.layoutHeight/2,-C.layoutHeight/2,C.camera.near,C.camera.far);r.position.set(0,C.camera.y,C.camera.z),r.lookAt(0,0,0),n.add(r),n.environment=e.environment??null,n.environmentIntensity=t.environmentIntensity,n.add(new zl(C.gold,C.shadow,C.ambientIntensity));let i=new nu(C.gold,C.keyIntensity);i.position.fromArray(C.lightPosition),n.add(i);let a=new nu(t.rim,t.fillIntensity);a.position.fromArray(t.fillPosition),n.add(a);let o=Eh(),s=Dh(),c=new Set,l=new Set,u=new Set,d=new WeakSet,f=e=>{d.has(e)||(d.add(e),e.dispose())},p=e=>{let t=new sl({color:e,metalness:C.metalness,roughness:C.roughness});return l.add(t),t},m=p(C.brass),h=p(C.gold),g=p(C.enamel),_=new cl({color:t.gem,metalness:t.gemMetalness,roughness:t.gemRoughness,clearcoat:t.gemClearcoat});l.add(_);let v=(e,t,n,r=0)=>{c.add(e);let i=new Y(e,t);return i.position.y=r,n.add(i),i},y=(e,t,n)=>{let r=v(new Yc(t,C.ringTube,C.ringSegments,C.bellSegments),h,e,n);return r.rotation.x=Math.PI/2,r},b=new so({color:C.gold,transparent:!0,opacity:C.autoChoice.ringOpacity,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(b);let x=v(new Yc(t.shadowRadius,C.ringTube,C.ringSegments,C.bellSegments),b,n);x.name=`auto-choice-focus`,x.rotation.x=Math.PI/2,x.renderOrder=100,x.visible=!1;let S=new Hc(t.gemRadius,1),w=new Jc(t.beadRadius,C.ringSegments,C.ringSegments),T=e=>{let n=v(new Cs(C.platformRadius,C.platformRadius,t.padDepth,C.bellSegments),g,e,C.padY);for(let n of t.padTrimY)y(e,C.platformRadius,n);y(e,C.platformRadius*t.shadowFalloff,t.padTop);let r=new so({color:C.shadow,transparent:!0,opacity:t.shadowOpacity/t.shadowLayers,depthWrite:!1});l.add(r);for(let n=0;n<t.shadowLayers;n++){let i=v(new Ss(t.shadowRadius*(1-n/t.shadowLayers*(1-t.shadowFalloff)),C.bellSegments),r,e,t.shadowY+n*t.shadowLayerY);i.rotation.x=-Math.PI/2}return n},E=C.profile.map(([e,t])=>new q(e*C.bellRadius,t*C.bellHeight)),D=Array.from({length:3},(e,r)=>{let i=new Ki,a=new Ki;i.name=`bell-${r}`,i.add(a),n.add(i),v(new Uc(E,C.bellSegments),m,a).name=`engraved-bell-shell`;for(let{y:e,radiusScale:t}of C.rings)y(a,C.bellRadius*t,e);let o=v(new Yc(C.handleRadius,C.handleTube,C.handleRadialSegments,C.handleSegments),h,a,C.bellHeight+C.handleRadius);o.rotation.y=0;for(let e=0;e<t.beadCount;e++){let n=v(w,h,a,t.beadY),r=e/t.beadCount*Math.PI*2;n.position.x=Math.sin(r)*t.beadRing,n.position.z=Math.cos(r)*t.beadRing}let s=v(new Cs(t.medallionRadius,t.medallionRadius,t.medallionDepth,C.bellSegments),h,a,t.gemY);s.rotation.x=Math.PI/2,s.position.z=t.gemZ;let c=v(S,_,a,t.gemY);return c.position.z=t.gemZ+t.medallionDepth,{root:i,lid:a,pad:T(i)}}),O=Array.from({length:2},()=>{let e=new Ki,t=Rm();return e.add(t.root),n.add(e),e.scale.setScalar(C.dragonScale),e.rotation.y=C.dragonYaw,{holder:e,model:t}}),k=new so({color:t.fallback,depthTest:!1,depthWrite:!1,toneMapped:!1});l.add(k);let A=v(new Wc(1,1),k,r);A.position.z=-t.backdropDepth,A.renderOrder=-100;let j=Wp(`coin`);Object.values(j).forEach(e=>u.add(e));let M=p(C.gold);M.map=j.albedo,M.bumpMap=j.height,M.bumpScale=t.coinBump;let N=p(t.coinEdge);N.roughness=t.coinEdgeRoughness;let P=new Cs(t.coinRadius,t.coinRadius,1,t.coinSegments);c.add(P);let F=Array.from({length:3},()=>{let e=new Ki;return n.add(e),{root:e,pad:T(e),coins:null}}),I=!1,L=``,R=null,ee=null,te=null,z={pending:e.loadTextures===!1?0:4,failed:0};if(e.loadTextures!==!1){let e=new Ll,n=(n,r)=>{let i=e.load(`/crusader-coin-pusher-demo/${n}`,e=>{if(I){f(e);return}z.pending--,e.colorSpace=tr,e.anisotropy=t.textureAnisotropy,r(e)},void 0,()=>{I||(z.pending--,z.failed++)});u.add(i)};n(t.background,e=>{R=e,k.map=e,k.color.set(t.white),k.needsUpdate=!0}),n(t.metal,e=>{e.wrapS=e.wrapT=Mt,e.repeat.fromArray(t.metalRepeat),m.map=e,m.color.set(t.white),m.needsUpdate=!0});let r=()=>O.forEach(e=>e.model.setTextures(ee,te));n(t.scales,e=>{ee=e,r()}),n(t.membrane,e=>{te=e,r()})}let ne=e=>{let n=Math.max(C.layoutWidth,C.layoutHeight*e),i=n/e;if(r.left=-n/2,r.right=n/2,r.top=i/2,r.bottom=-i/2,r.updateProjectionMatrix(),A.scale.set(n,i,1),R){let n=R.image,r=n?.width&&n?.height?n.width/n.height:t.backgroundAspect,i=Math.min(1,e/r),a=Math.min(1,r/e);R.repeat.set(i,a),R.offset.set((1-i)/2,(1-a)/2)}return{width:n,baseY:-i*t.baseFraction,x:(e,r=3)=>((e+.5)/r-.5)*n*t.columnWidth}},B=e=>{let t=e.autoClear;try{e.autoClear=!1,e.clearDepth(),e.render(n,r)}finally{e.autoClear=t}},re=(e,n,r,i,a,o)=>{x.visible=!!n&&n.kind===r&&n.eventId===i&&n.focusIndex>=0&&n.focusIndex<a,x.visible&&n&&(x.position.set(e.x(n.focusIndex,a),e.baseY+t.padTrimY[1]+C.ringTube,0),x.scale.setScalar(s.sample(n,o)))};return{scene:n,bells:D,dragons:O,towers:F,artState:z,drawChoice(e,n,r,i,a=!1){if(I)return;let o=ne(n),s=JSON.stringify(r);D.forEach(e=>{e.root.visible=!1}),O.forEach(e=>{e.holder.visible=!1}),L!==s&&(L=s,F.forEach((e,n)=>{e.coins&&=(e.root.remove(e.coins),e.coins.dispose(),null);let i=r.targets[n];if(!i)return;let a=Math.min(t.towerCapacity,Math.max(0,i.coins)),o=new Go(P,[N,M,M],a);e.coins=o,e.root.add(o);let s=i.structure===`double`?6:7,c=Math.ceil(a/s),l=t.towerHeights[i.tier]/Math.max(1,c),u=new Gi;for(let e=0;e<a;e++){let n=Math.floor(e/s),r=e%s,a=i.structure===`double`,d=r/(a?3:s)*Math.PI*2+n%2*Math.PI/s,f=i.structure===`tiered`&&n/c>t.tieredThreshold?t.tieredUpperScale:1,p=a?t.doubleOrbit:t.towerOrbit;u.position.set(Math.cos(d)*p*f+(a?(r<3?-1:1)*t.doubleOffset:0),t.padTop+(n+.5)*l,Math.sin(d)*p*f),u.rotation.y=d,u.scale.set(f,l*t.coinThickness,f),u.updateMatrix(),o.setMatrixAt(e,u.matrix)}o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()})),F.forEach((e,t)=>{e.root.visible=t<r.targets.length,e.root.position.set(o.x(t,r.targets.length),o.baseY,0)}),re(o,i,`tower`,r.id,r.targets.length,a),B(e)},draw(e,t,n,r,i){if(!n||I)return;let a=ne(t);F.forEach(e=>{e.root.visible=!1});let s=n.phase===`show`?1:n.phase===`cover`?Math.max(0,1-n.elapsed/C.coverSeconds):n.phase===`reveal`?Math.min(1,n.elapsed/C.coverSeconds):0;D.forEach((e,t)=>{let i=o.sample(n,t,r);e.root.visible=!0,e.root.position.set(a.x(i.slot),a.baseY,i.arc),e.lid.position.y=s*C.bellLift,e.lid.rotation.y=i.spin}),O.forEach(({holder:e,model:t},i)=>{let o=n.visibleDragonBells[i];e.visible=o!==void 0&&s>C.visibleLift,o!==void 0&&(e.position.set(a.x(n.bellSlots[o]),a.baseY+C.dragonHeight,C.dragonZ),t.draw(r?0:n.elapsed,`flight`))}),re(a,i,`bell`,n.id,n.bellSlots.length,r),B(e)},dispose(){I||(I=!0,o.dispose(),s.dispose(),F.forEach(e=>e.coins?.dispose()),O.forEach(e=>e.model.dispose()),c.forEach(e=>e.dispose()),l.forEach(e=>e.dispose()),u.forEach(f),n.environment=null,n.clear())}}}function kh(e,t,n){let r=U.cabinetHousing.camera,i=new J(Math.sin(r.yaw),r.pitch,Math.cos(r.yaw)).normalize(),a=new J(Math.cos(r.yaw),0,-Math.sin(r.yaw)),o=new J().crossVectors(i,a).normalize(),s=new ga().setFromPoints([...t]).getCenter(new J),c=Math.tan(qr.degToRad(e.fov/2)),l=e.near;for(let r of t){let t=r.clone().sub(s),u=t.dot(i);l=Math.max(l,Math.abs(t.dot(a))/(c*n)+u,Math.abs(t.dot(o))/c+u,e.near+u)}e.aspect=n,e.position.copy(s).addScaledVector(i,l*r.margin),e.lookAt(s),e.updateProjectionMatrix(),e.updateMatrixWorld()}function Ah(e){let t={value:+!!e},n=t.value,i=0,a,o=!1,s=()=>{a?.kill(),a=void 0,t.value=n};return{start(e,c,l){if(!o){if(a?.kill(),n=+!!e,i=c,l||t.value===n){s();return}a=r.timeline({paused:!0}).to(t,{value:n,duration:U.cabinetHousing.camera.transitionSeconds,ease:U.motion.ease})}},sample(e,n){if(a){let t=Math.max(0,(e-i)/1e3);n||t>=U.cabinetHousing.camera.transitionSeconds?s():a.seek(t,!0)}return t.value},moving:()=>!!a,finish:s,dispose(){o||(o=!0,s())}}}function jh(e){let t=(0,V.useRef)(null),n=(0,V.useRef)(e);n.current=e;let r=(0,V.useRef)(null),i=(0,V.useRef)(null),a=(0,V.useRef)(null),o=(0,V.useRef)(null);return(0,V.useEffect)(()=>{let s=t.current;if(!s)return;let c=e.geometry,l=c.boardHalfWidth-c.coinRadius-c.upperRailHalfThickness*2,u=U.scene,d=U.premium,f=new ta,p,m,h,g,_,v,y,b,x,S=0,C=!1,w=[],T,E,D=null,O=n.current.cameraView??`front`,k=!!n.current.cabinetOverview,A=Ah(k),j=n.current.cameraResetKey,M=!1,N=!1,P=_h(ph(O,1)),F=()=>!!n.current.disabled||!!n.current.cabinetOverview||!!s.closest(`[inert]`)||P.moving()||A.moving()||O!==(n.current.cameraView??`front`)||j!==n.current.cameraResetKey,I=sh({isDisabled:F,onStart:e=>{D=e,n.current.onSweepStart?.(e)},onAim:e=>{D=e,n.current.onAimChange(e)},onStop:()=>{D=null,n.current.onSweepEnd?.()}}),L=oh(U.interaction.tapSlopPx,{isDisabled:F,onBusyChange:e=>n.current.onCameraBusyChange?.(e),onPreview:e=>{D=e,s.style.cursor=L.dragging()?`grabbing`:e===null?``:`grab`},onTap:e=>{n.current.onAimChange(e),n.current.onDropRequest?.(e)},onOrbit:(e,t)=>{let n=ch(P.sample(performance.now(),!0),e,t,Math.min(s.clientWidth,s.clientHeight));M=!0,P.start(n,performance.now(),!0),hh(ee,c,ee.aspect,n)}}),R=window.matchMedia(`(prefers-reduced-motion: reduce)`),ee=new Zl(d.camera.fov,1,d.camera.near,d.camera.far),te=()=>{let e=I.pointerId()??L.pointerId();I.cancel(),L.cancel(),D=null,s.style.cursor=``,e!==null&&s.hasPointerCapture(e)&&s.releasePointerCapture(e)};i.current=te;let z=e=>{e.preventDefault(),te(),n.current.onError?.(`3D 畫面暫時中斷，請重新開始。`)},ne=(e,t=!1)=>{if(F())return null;let n=s.getBoundingClientRect();if(n.width<=0||n.height<=0||e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)return null;let r=new q((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);ee.updateMatrixWorld();let i=new bu;i.setFromCamera(r,ee),T?.computeBoundingSphere();let a=i.intersectObjects([...f.children.filter(e=>e!==E&&e!==h?.root&&e!==m?.root&&e!==_?.root&&e!==v?.root),...m?.getOccluders()??[]],!1)[0];if(!a||!w.includes(a.object)||!h)return null;let o=a.object.name===`physical-rear-wall`&&ah(a.point,c);return!o&&(a.point.y<c.lowerY-c.coinHalfHeight||ih(a.point,c)===null)||t&&!o&&(a.point.z>c.upperFrontZ||a.point.y<c.upperY-c.coinHalfHeight)?null:vh(r.x,ee,l,h.surfaceY,c.dropZ)},B=e=>{let t=I.pointerId()??L.pointerId();if(t!==null&&t!==e.pointerId){te();return}if(F()||e.target!==b?.domElement)return;if(n.current.onSweepStart&&I.begin(e,ne(e,!0))){e.preventDefault(),s.setPointerCapture(e.pointerId);return}let r=ne(e);L.begin(e,r)&&s.setPointerCapture(e.pointerId)},re=e=>{if(F()){te();return}if(I.pointerId()!==null){I.move(e,ne(e)),I.pointerId()===null&&s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId);return}let t=L.pointerId();(t===e.pointerId||t===null&&e.isPrimary&&e.pointerType===`mouse`&&e.buttons===0)&&(L.move(e,t===null?ne(e):null),L.pointerId()===null&&s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId))},ie=e=>{if(I.pointerId()===e.pointerId){I.end(e),s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId);return}L.pointerId()===e.pointerId&&(L.end(e,L.dragging()?null:ne(e)),s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId))},ae=e=>{(L.pointerId()===e.pointerId||I.pointerId()===e.pointerId)&&te()},oe=()=>{te(),o.current?.()},se=()=>{document.hidden&&oe()},ce=()=>L.leave(),le=e=>{e.target instanceof Node&&!s.contains(e.target)&&te()},ue=()=>{C||(C=!0,te(),i.current=null,cancelAnimationFrame(S),x?.disconnect(),r.current=null,a.current=null,o.current=null,P.dispose(),A.dispose(),n.current.onCameraBusyChange?.(!1),s.removeEventListener(`pointerdown`,B),s.removeEventListener(`pointermove`,re),s.removeEventListener(`pointerup`,ie),s.removeEventListener(`pointercancel`,ae),s.removeEventListener(`lostpointercapture`,ae),s.removeEventListener(`pointerleave`,ce),window.removeEventListener(`blur`,oe),document.removeEventListener(`visibilitychange`,se),R.removeEventListener(`change`,oe),window.removeEventListener(`pointerdown`,le),window.removeEventListener(`focusin`,le),b?.domElement.removeEventListener(`webglcontextlost`,z),p?.dispose(),m?.dispose(),h?.dispose(),_?.dispose(),v?.dispose(),y?.dispose(),g?.dispose(),n.current.onDragonBonusReady?.(!1),b?.dispose(),b?.domElement.remove())};try{b=new Up({alpha:!0,antialias:!0,powerPreference:`high-performance`}),b.setClearColor(0,0),b.outputColorSpace=tr,b.toneMapping=4,b.toneMappingExposure=d.lighting.exposure,b.shadowMap.type=1,b.domElement.setAttribute(`aria-label`,`後方投幣區按住左右滑動連投，放開即停；其餘幣床點按投幣、拖曳轉鏡頭；回正按鈕恢復視角`),s.appendChild(b.domElement),b.domElement.addEventListener(`webglcontextlost`,z),p=fh(f,b,c),m=Ch(c),f.add(m.root),m.setOverview(k),e.dragonBonusEnabled&&(n.current.onDragonBonusReady?.(!1),g=bh(),f.add(g.root),g.ready.then(()=>{C||n.current.onDragonBonusReady?.(!0)},()=>{C||n.current.onDragonBonusReady?.(!1)})),h=gh(c),f.add(h.root),_=wh(c),f.add(_.root),v=Th(c),f.add(v.root);let{coins:t,pusher:i,aim:I,key:ne}=p;T=t,E=I,w.push(...p.hitTargets);let ue=ee.clone(),de=()=>{let e=performance.now();hh(ee,c,ee.aspect,P.sample(e,R.matches));let t=A.sample(e,R.matches);t>0&&m&&(kh(ue,m.fullBounds,ee.aspect),ee.position.lerp(ue.position,t),ee.quaternion.slerp(ue.quaternion,t),ee.updateMatrixWorld()),m?.setOverview(k&&!A.moving())},fe=()=>{N=!1,n.current.onCameraSettled?.(O),n.current.onCameraBusyChange?.(!1)};o.current=()=>{C||(P.finish(),A.finish(),M||P.start(ph(O,ee.aspect),performance.now(),!0),de(),fe())},a.current=()=>{if(C)return;let e=n.current.cameraView??`front`,t=!!n.current.cabinetOverview;(e!==O||t!==k||j!==n.current.cameraResetKey||P.moving()||A.moving())&&(te(),O=e,j=n.current.cameraResetKey,M=!1,N=!0,n.current.onCameraBusyChange?.(!0),k=t,A.start(k,performance.now(),R.matches),P.start(ph(e,ee.aspect),performance.now(),R.matches),de(),!P.moving()&&!A.moving()&&fe())};let pe=()=>{if(C||!b)return;let e=s.clientWidth,t=s.clientHeight;e&&t&&(b.setSize(e,t),te(),ee.aspect=e/t,o.current?.())};r.current=e=>{b&&(b.setPixelRatio(Math.min(window.devicePixelRatio||1,e===`high`?u.highPixelRatio:u.lowPixelRatio)),b.shadowMap.enabled=e===`high`,ne.castShadow=e===`high`,pe())},r.current(n.current.quality),x=new ResizeObserver(pe),x.observe(s),s.addEventListener(`pointerdown`,B),s.addEventListener(`pointermove`,re),s.addEventListener(`pointerup`,ie),s.addEventListener(`pointercancel`,ae),s.addEventListener(`lostpointercapture`,ae),s.addEventListener(`pointerleave`,ce),window.addEventListener(`blur`,oe),document.addEventListener(`visibilitychange`,se),R.addEventListener(`change`,oe),window.addEventListener(`pointerdown`,le),window.addEventListener(`focusin`,le);let me=new vi,he=new J,ge=new Jr,V=new J(1,1,1),_e=new $i,ve=()=>{if(!C&&b)try{N&&(de(),!P.moving()&&!A.moving()&&fe());let e=n.current.readFrame(),r=e.coins.filter(e=>e.kind!==`key`&&(!e.lifting||e.position.y+c.coinHalfHeight>=c.lowerY-c.lowerHalfThickness*2));t.count=Math.min(r.length,c.capacity);for(let e=0;e<t.count;e++){let n=r[e];he.set(n.position.x,n.position.y,n.position.z),ge.set(n.rotation.x,n.rotation.y,n.rotation.z,n.rotation.w),me.compose(he,ge,V),t.setMatrixAt(e,me);let i=d.materials.coinShadeMin+n.id*37%101/100*d.materials.coinShadeRange;t.setColorAt(e,_e.setRGB(i,i,i))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),i.position.z=e.pusherZ,p?.updateHatches(e.hatches),_?.update(e,R.matches,k),v?.update(e,R.matches,k),g?.draw(e.dragonBonus,R.matches&&!n.current.bonusFullMotion);let a=(c.pusherCenterY??c.upperY+c.pusherHalfHeight)+c.pusherHalfHeight;I.position.set(e.aim*l,Math.max(c.upperY,a)+d.effects.aimSurfaceOffset,c.dropZ),I.visible=!F()&&!L.dragging(),h?.update(e.aim,D,n.current.feedback,F()||L.dragging(),performance.now(),R.matches),b.render(f,ee),(e.dragonBells||e.dragonChoice)&&(y??=Oh({environment:f.environment}),e.dragonChoice?y.drawChoice(b,ee.aspect,e.dragonChoice,e.bonusAutoSelection,R.matches&&!n.current.bonusFullMotion):y.draw(b,ee.aspect,e.dragonBells,R.matches&&!n.current.bonusFullMotion,e.bonusAutoSelection)),S=requestAnimationFrame(ve)}catch(e){te(),n.current.onError?.(e instanceof Error?e.message:`3D 畫面無法更新。`)}};n.current.onReady?.(),ve()}catch(e){ue(),n.current.onError?.(e instanceof Error?e.message:`這個裝置無法啟動 3D 畫面。`)}return ue},[e.geometry,e.dragonBonusEnabled]),(0,V.useEffect)(()=>{r.current?.(e.quality)},[e.quality]),(0,V.useEffect)(()=>{a.current?.()},[e.cameraView,e.cameraResetKey,e.cabinetOverview]),(0,V.useEffect)(()=>{e.disabled&&(i.current?.(),o.current?.())},[e.disabled]),(0,W.jsx)(`div`,{ref:t,style:{width:`100%`,height:`100%`,touchAction:`none`}})}function Mh(e){let t=!1,n=null,r=0,i=!1,a=0,o=null,s=0,c=e.now??(()=>performance.now()),l=t=>{i!==t&&(i=t,e.onAutoFireChange?.(t))},u=()=>{t=!1,o=null,s=0,r+=1,n!==null&&(e.clearInterval(n),n=null)},d=()=>{u(),l(!1)},f=()=>{u()},p=()=>{let t=e.getAutoFireIntervalMs?.();return t!==void 0&&Number.isFinite(t)&&t>0?t:e.fireIntervalMs},m=(t,a)=>{o=t,s=a;let c=r;n=e.setInterval(()=>{if(r===c){if(e.isBlocked()){i?f():d();return}v(t())}},a)},h=n=>{i&&!t&&!e.isBlocked()&&e.getEngine()&&(t=!0,m(n,p()))},g=()=>{if(!i||!t||!o||s===p())return;let e=o;u(),h(e)},_=()=>{l(!0)},v=t=>{if(e.isBlocked()||!Number.isFinite(t))return!1;let n=e.getEngine();if(!n)return!1;let r=Math.max(-1,Math.min(1,t)),{draw:a}=n.dropCoin(r*e.dropMaxAbsX);return a.type===`ineligible`&&(a.reason===`no-balance`?d():a.reason===`board-full`&&(i?f():d())),e.onDrop?.(a,r),a.type!==`ineligible`};return{performDrop:v,handleFireStart:n=>{if(i){d();return}if(t||e.isBlocked()||!e.getEngine())return;t=!0,a=c();let o=r;v(n()),t&&r===o&&m(n,e.fireIntervalMs)},handleFireRelease:(n=!0)=>{i||t&&(n&&e.autoFireHoldMs!==void 0&&c()-a>=e.autoFireHoldMs&&!e.isBlocked()&&e.getEngine()?(l(!0),g()):d())},handleFireEnd:d,handleDropRequest:e=>(d(),v(e)),stopFiring:d,suspendFiring:f,resumeFiring:h,refreshAutoCadence:g,armAutoFiring:_,isFiring:()=>t,isAutoFiring:()=>i}}var Nh=C.autoChoice.scanSeconds,Ph=C.autoChoice.confirmSeconds,Fh=Nh+Ph,Ih=class{random;key=``;elapsed=0;committed=!1;pending=null;constructor(e=Math.random){this.random=e}reset(){this.key=``,this.elapsed=0,this.committed=!1,this.pending=null}pick(e){let t=this.random();return Math.min(e-1,Math.max(0,Math.floor(t*e)))}advance(e,t){let n=e.getDragonChoice(),r=e.getDragonBellState(),i=n?`tower:${n.id}`:r?.phase===`guess`?`bell:${r.id}`:``;if(i!==this.key&&(this.key=i,this.elapsed=0,this.committed=!1,this.pending=null),!i||this.committed||!Number.isFinite(t)||t<0)return null;if(this.pending){if(this.pending.elapsed=Math.min(Fh,this.pending.elapsed+t),this.pending.elapsed<Fh)return null;let{kind:n,eventId:r,value:i}=this.pending,a=n===`tower`?e.chooseDragonTower(r,i):e.guessDragonBell(r,i);return this.pending=null,a?(this.committed=!0,n):null}if(this.elapsed=Math.min(5,this.elapsed+t),this.elapsed<5)return null;if(n&&n.targets.length){let e=this.pick(n.targets.length);this.pending={kind:`tower`,eventId:n.id,selectedIndex:e,value:n.targets[e].towerId,count:n.targets.length,elapsed:0}}else if(r&&r.phase===`guess`){let e=r.bellSlots;if(e.length){let t=e[this.pick(e.length)];this.pending={kind:`bell`,eventId:r.id,selectedIndex:t,value:t,count:e.length,elapsed:0}}}return null}selection(){let e=this.pending;if(!e)return null;let t=e.elapsed>=Nh;return{kind:e.kind,eventId:e.eventId,focusIndex:t?e.selectedIndex:Math.min(e.count-1,Math.floor(e.elapsed/Nh*e.count)),selectedIndex:e.selectedIndex,confirming:t,confirmProgress:t?Math.min(1,(e.elapsed-Nh)/Ph):0}}remaining(e){let t=e.getDragonChoice(),n=e.getDragonBellState(),r=(t?`tower:${t.id}`:n?.phase===`guess`?`bell:${n.id}`:``)===this.key?Math.max(0,5-this.elapsed):5;return t?{tower:r}:n?.phase===`guess`?{bell:r}:{}}};function Lh(e,t,n){if(!Number.isFinite(n))return e;let r=Math.max(-1,Math.min(1,n)),i=e.sequence+1;return t.type===`ineligible`?{kind:`blocked`,sequence:i,aim:r,reason:t.reason}:{kind:`accepted`,sequence:i,aim:r}}function Rh(e,t){return Number.isFinite(t)?{kind:`aim-only`,sequence:e.sequence+1,aim:Math.max(-1,Math.min(1,t))}:e}function zh(e){return e.kind===`idle`?e:{kind:`idle`,sequence:e.sequence+1}}var Bh=150,Vh=250,Hh=200,Uh=`crusader.trial-auto-resume`;function Wh(e){let t=new URLSearchParams(window.location.search).get(`dragonChance`),n=t===null?NaN:Number(t);return e&&Number.isFinite(n)&&n>=0&&n<=1?n:le}var Gh={coinRadius:T,coinHalfHeight:j,boardHalfWidth:x,upperY:ce,upperBackZ:te,upperFrontZ:0,upperHalfThickness:ne,upperRailHalfHeight:ae,upperRailHalfThickness:B,lowerY:0,lowerBackZ:0,lowerFrontZ:D,lowerHalfThickness:P,hatches:ie,pusherHalfHeight:I,pusherHalfDepth:O,pusherCenterY:E,rearWall:{centerY:L,centerZ:M,halfHeight:z,halfDepth:b},dropZ:k,capacity:F,towerTopY:Math.max(R,ue),towerEnvelopes:ee.map(e=>({x:e.x,z:e.z,radius:Math.max(se,oe),topY:Math.max(R,ue)}))};function Kh(){return!1}function qh(){return typeof crypto<`u`&&crypto.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*4294967295)}function Jh({storageOwner:t=null}={}){let[n]=(0,V.useState)(()=>o(t)),r=At(),i=p(t),[c,l]=(0,V.useState)(!1),[m,h]=(0,V.useState)(``),y=(0,V.useMemo)(Kh,[]),b=(0,V.useRef)(null),x=(0,V.useRef)(!1),S=(0,V.useRef)(!1),C=(0,V.useRef)(!1),w=(0,V.useRef)(!1),T=(0,V.useRef)(!1),E=(0,V.useRef)(!1),[D,O]=(0,V.useState)(`idle`),k=(0,V.useRef)(!1),A=(0,V.useRef)(void 0),[j,M]=(0,V.useState)({state:`loading`,message:`正在讀取本機進度…`}),N=!window.location.pathname.includes(`/qa/`)||window.location.pathname.endsWith(`/qa/local-save.html`),[P,F]=(0,V.useState)(!0),[I,L]=(0,V.useState)(void 0),[R,ee]=(0,V.useState)(void 0),te=I??R,[z,ne]=(0,V.useState)(!1),[B,re]=(0,V.useState)(()=>new URLSearchParams(window.location.search).has(`fromTrial`)?null:{kind:`intro`,id:0}),ie=(0,V.useRef)(B),[ae,oe]=(0,V.useState)(document.hidden),se=(0,V.useRef)(document.hidden),ce=(0,V.useRef)(new rh),[le,ue]=(0,V.useState)(()=>ce.current.snapshot(0)),de=(0,V.useRef)(-1/0),_e=(0,V.useRef)(0),[ve,ye]=(0,V.useState)(e),[H,be]=(0,V.useState)(!1),[xe,Se]=(0,V.useState)(1),Ce=(0,V.useRef)(1),we=(0,V.useRef)(ve),[Te,Ee]=(0,V.useState)(Ie),De=(0,V.useRef)(Te);De.current=Te;let[Oe,ke]=(0,V.useState)(`idle`),Ae=(0,V.useRef)(0);(0,V.useEffect)(()=>()=>{Ae.current++},[]);let je=(0,V.useRef)({time:0,playing:!1}),[Me,Ne]=(0,V.useState)(`high`),[Pe,Re]=(0,V.useState)(0),[ze,Ve]=(0,V.useState)(!1),Ue=(0,V.useRef)(!1),[We,Ke]=(0,V.useState)(!1),Je=(0,V.useRef)(!1),[Ye,Xe]=(0,V.useState)(0),[Ze,Qe]=(0,V.useState)(0),[$e,et]=(0,V.useState)(0),[tt,nt]=(0,V.useState)(0),[rt,it]=(0,V.useState)(null),[at,ot]=(0,V.useState)(),[st,ct]=(0,V.useState)(0),[lt,ft]=(0,V.useState)(void 0),[pt,mt]=(0,V.useState)({kind:`idle`,sequence:0}),[ht,gt]=(0,V.useState)(0),_t=(0,V.useRef)(!1),vt=(0,V.useRef)(null),yt=(0,V.useRef)(!1),[bt,xt]=(0,V.useState)(null),[St,Ct]=(0,V.useState)(null),[wt,Tt]=(0,V.useState)(null),Et=(0,V.useRef)(new Ih),[Dt,Ot]=(0,V.useState)({}),[kt,G]=(0,V.useState)(null),[jt,Mt]=(0,V.useState)(),[Nt,Pt]=(0,V.useState)(null),[Ft,It]=(0,V.useState)(!1),Lt=(0,V.useRef)(0),Rt=(0,V.useRef)(`idle`),[zt,Bt]=(0,V.useState)(()=>{try{return u(n.cosmetics(window.localStorage))}catch{return d()}});(0,V.useEffect)(()=>{try{a(zt,n.cosmetics(window.localStorage))}catch{}},[zt,n]);let[Vt,Ht]=(0,V.useState)(!1),Ut=(0,V.useRef)(0),Wt=(0,V.useRef)(!1),Gt=(0,V.useRef)(null),Kt=(0,V.useRef)(z),qt=(0,V.useRef)(P),Jt=(0,V.useRef)(!1),Yt=(0,V.useRef)(0),Xt=(0,V.useRef)(null),Zt=(0,V.useRef)(null),Qt=(0,V.useRef)(null),$t=(0,V.useRef)([]),en=(0,V.useRef)(null),tn=(0,V.useRef)(new He),nn=(0,V.useRef)(new qe),rn=(0,V.useCallback)(async()=>{let e=vt.current,t=b.current;if(e&&t&&x.current&&!w.current&&!k.current&&!T.current){if(S.current){C.current=!0;return}S.current=!0;try{let n={format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:ce.current.saveState(),aim:Yt.current};await t.write(n),T.current||M({state:`saved`,message:`進度已存於此瀏覽器，重新進入可接續遊玩。`})}catch(e){T.current||M({state:`error`,message:`進度尚未儲存，請勿關閉此頁；可在設定重試存檔。`}),e instanceof me&&(w.current=!0,L(`另一個分頁已更新進度。本頁已停止，請重新整理以讀取最新存檔。`))}finally{S.current=!1,C.current&&(C.current=!1,rn())}}},[]),an=(0,V.useCallback)(()=>{let e=en.current;if(!e)return;let t=ie.current;e.setMusicSuspended(T.current||se.current||Jt.current||!!vt.current?.getSiegeState()&&Wt.current||(t?!je.current.playing:qt.current));let n=vt.current?.getDragonChoice()||vt.current?.getDragonBellState();e.setMusic(t?t.kind===`intro`?`intro`:`dragon`:vt.current?.getSiegeState()?`siege`:n?`bells`:`game`,t?je.current.time:void 0)},[]);(0,V.useEffect)(()=>{an()},[St?.id,wt?.id,an]);let on=(0,V.useCallback)(()=>{Ae.current++,ke(`idle`),nn.current.reset(),en.current?.stopAll()},[]);(0,V.useEffect)(()=>{qt.current=P},[P]),(0,V.useEffect)(()=>{Jt.current=!!te},[te]),(0,V.useEffect)(()=>{we.current=ve,en.current?.setMuted(ve)},[ve]),(0,V.useEffect)(()=>{(z||P||te)&&(mt(zh),on())},[z,P,te,on]);let sn=(0,V.useCallback)(()=>(en.current||(en.current=new Be,en.current.setMuted(we.current),en.current.setCoinSound(De.current.sound),en.current.setCoinVolume(De.current.volume),an()),en.current),[an]),cn=(0,V.useCallback)(()=>{Ae.current++,en.current?.stopCoinDrop(),ke(`idle`)},[]),ln=(0,V.useCallback)(e=>{cn();let t={...De.current,...e};t.volume=Fe(t.volume),De.current=t,Ee(t),Le(t),en.current?.setCoinSound(t.sound),en.current?.setCoinVolume(t.volume)},[cn]),un=(0,V.useCallback)(async()=>{if(we.current||se.current||ie.current||De.current.volume===0)return;let e=++Ae.current,t=sn();t.unlock(),ke(`loading`);let n=await t.prepareCoinSound();e!==Ae.current||we.current||se.current||ie.current||ke(n&&t.play(`coin-drop`)?`ready`:`error`)},[sn]),dn=(0,V.useCallback)(()=>{sn().unlock(),an()},[sn,an]),fn=(0,V.useCallback)((e,t)=>{ie.current&&(je.current={time:e,playing:t},an())},[an]),pn=(0,V.useCallback)(()=>{let e=!we.current;we.current=e,ye(e),v(e),sn().setMuted(e),dn()},[sn,dn]),mn=(0,V.useCallback)((e,t)=>{mt(n=>Lh(n,e,t));let n=vt.current?.getRenderState();if(n&&(Xe(n.ledger.balance),Mt(n.treasury),Ct(n.dragonChoice??null)),e.type!==`ineligible`){if(rn(),sn().play(`coin-drop`),n?.dragonChoice){ft(`請選擇巨龍撞擊目標；盤面已暫停。`);return}if(n?.dragonBonus){ft(`巨龍 BONUS`);return}e.type===`no-roll`?ft(e.reason===`free-drop`?n?.treasury?.freeRemaining?`免費投幣 · 剩餘 ${n.treasury.freeRemaining} 次`:`免費已投完，等待護欄收回；再次操作才會投入一般金幣。`:e.reason===`regeneration-progress`?`已累計有效投幣，蓄能達20枚後再生幣塔。`:e.reason===`spawn-in-progress`?`幣塔升起中，可繼續投幣推進。`:`已有待建幣塔，等待可用空間；可繼續投幣推進。`):e.type===`event`&&ft(`恭喜！觸發建塔事件，即將建造 ${e.towers} 座幣塔。`)}},[sn,rn]),hn=(0,V.useMemo)(()=>Mh({getEngine:()=>vt.current,isBlocked:()=>T.current||!!ie.current||Kt.current||qt.current||Jt.current||Wt.current||Ue.current||Je.current||!!vt.current?.getDragonBonusState()||!!vt.current?.isFeatureInputBlocked(),dropMaxAbsX:pe,fireIntervalMs:Vh,getAutoFireIntervalMs:()=>Vh/Ce.current,autoFireHoldMs:U.interaction.autoFireHoldMs,onAutoFireChange:be,onDrop:mn,setInterval:(e,t)=>window.setInterval(e,t),clearInterval:e=>window.clearInterval(e)}),[mn]),gn=(0,V.useCallback)(()=>{hn.stopFiring()},[hn]),_n=(0,V.useCallback)(e=>{if(!Number.isFinite(e))return;let t=Math.max(1,Math.min(3,Math.round(e*4)/4));Ce.current=t,Se(t),hn.refreshAutoCadence()},[hn]),vn=(0,V.useCallback)(()=>{hn.suspendFiring()},[hn]),yn=(0,V.useCallback)(()=>{let e=T.current||se.current||!!ie.current||qt.current||Jt.current;Kt.current=e,ne(e),Zt.current=null,e?(vn(),vt.current?.pause(),ce.current.clearTransient(vt.current?.getPhysicsWorld().getElapsedSeconds()??0)):vt.current?.resume(),an()},[vn,an]),bn=(0,V.useCallback)(e=>{let t=vt.current?.getTreasuryState();if(vt.current?.getDragonBonusState()||vt.current?.getDragonChoice()||vt.current?.getDragonBellState()||t&&t.phase!==`idle`)return;let n={kind:e,id:++_e.current};ie.current=n,je.current={time:0,playing:!1},vn(),mt(zh),yn(),re(n)},[vn,yn]),xn=(0,V.useCallback)(()=>{ie.current=null,re(null),yn()},[yn]);(0,V.useEffect)(()=>{qt.current=P,Jt.current=!!te,yn()},[P,te,yn]);let Sn=(0,V.useCallback)(()=>{T.current||Ue.current||Je.current||(sn().unlock(),hn.handleFireStart(()=>Yt.current))},[sn,hn]),Cn=(0,V.useCallback)(()=>{hn.handleFireEnd()},[hn]),wn=(0,V.useCallback)(e=>{hn.handleFireRelease(e===`pointer`)},[hn]),Tn=(0,V.useCallback)(()=>{Kt.current||qt.current||Jt.current||Ue.current||Je.current||(Ue.current=!0,vn(),mt(zh),Ve(!0),Re(e=>e+1))},[vn]),En=(0,V.useCallback)(e=>{Ue.current=e,e&&(vn(),mt(zh)),Ve(e)},[vn]),Dn=(0,V.useCallback)(e=>{Kt.current||qt.current||Jt.current||Ue.current||(Je.current=e,Ue.current=!0,vn(),mt(zh),Ve(!0),Ke(e))},[vn]),On=(0,V.useCallback)(e=>{if(T.current||!Number.isFinite(e)||Ue.current||Je.current)return;sn().unlock();let t=Math.max(-1,Math.min(1,e));Yt.current=t,ct(t),hn.isAutoFiring()||hn.handleDropRequest(e)},[sn,hn]),kn=(0,V.useCallback)(()=>{Xt.current!==null&&(cancelAnimationFrame(Xt.current),Xt.current=null),Qt.current!==null&&(window.clearInterval(Qt.current),Qt.current=null),gn(),on(),Zt.current=null},[gn,on]),An=(0,V.useCallback)(async()=>{if(!N||E.current)return;let e=vt.current,t=b.current;if(!e||!t||!x.current||w.current||k.current||qt.current||Jt.current){O(`error`);return}if(T.current=!0,E.current=!0,O(`saving`),hn.isAutoFiring()&&!Gt.current)try{Gt.current=window.crypto.randomUUID(),window.sessionStorage.setItem(Uh,Gt.current)}catch{Gt.current=null}kn(),yn();try{let n={format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:ce.current.saveState(),aim:Yt.current};await he(t,n,()=>{let e=new URL(`trials.html`,window.location.href);Gt.current&&e.searchParams.set(`autoResume`,Gt.current),window.location.assign(e.href)})}catch(e){O(`error`),M({state:`error`,message:`前往試煉前未能完成存檔。盤面已暫停，請重試；原進度仍在此頁。`}),e instanceof me&&(w.current=!0,L(`另一個分頁已更新進度。本頁已停止，請重新整理以讀取最新存檔。`))}finally{E.current=!1}},[N,hn,kn,yn]),jn=(0,V.useCallback)(()=>{let e=vt.current;if(!e)return;let t=e.getRenderState();!k.current&&!yt.current&&!t.dragonChoice&&!t.dragonBells&&!t.dragonBonus&&e.setDragonBonusAvailable(!1),ue(ce.current.snapshot(t.elapsedSeconds)),Qe(t.scoreCount),xt(t.dragonBonus),Ct(t.dragonChoice??null),Tt(t.dragonBells??null),Ot(Et.current.remaining(e)),G(Et.current.selection()),Mt(t.treasury),Pt(e.getSiegeState()),Xe(t.ledger.balance),t.ledger.balance<=0&&(t.treasury?.freeRemaining??0)<=0&&gn(),et(t.ledger.intactTowers),nt(t.ledger.pendingTowerBuilds),it(t.regeneration);let n=t.towers.find(e=>e.status!==`empty`&&e.status!==`intact`);ot(n?{opening:`台面開洞中`,draining:`舊幣落洞中`,rising:`幣塔旋轉升起`,closing:`升塔洞口關閉中`}[n.status]:void 0),y&&(window.__crusaderDebug=Object.freeze({score:t.scoreCount,wallet:t.ledger.balance,bodies:t.activeCoinCount,pending:t.ledger.pendingTowerBuilds,towers:t.ledger.intactTowers,paused:t.paused}))},[y,gn]),Mn=(0,V.useCallback)(e=>{Xt.current=requestAnimationFrame(Mn);let t=vt.current;if(!t||Kt.current){Zt.current=e;return}if(Zt.current===null){Zt.current=e;return}let n=(e-Zt.current)/1e3;if(Zt.current=e,Wt.current&&t.getSiegeState())return;t.getDragonBonusState()||t.isFeatureInputBlocked()?vn():hn.resumeFiring(()=>Yt.current);let r=t.getDragonBellState(),i=t.getSiegeState(),a=t.tick(n),o=t.getSiegeState();if((i?.id!==o?.id||i?.revision!==o?.revision)&&(Pt(o),an(),o)){let e=o.phase===`cleared`?`siege-clear`:o.phase===`push`?`siege-push`:i?.id===o.id?o.lastHit?`siege-hit`:`siege-miss`:`siege-enter`;sn().play(e)}Et.current.advance(t,n)&&(Ct(t.getDragonChoice()),Tt(t.getDragonBellState()),G(null),rn());for(let e of tn.current.observe(t.getDragonChoice(),t.getDragonBellState()))sn().play(e);r?.phase===`reveal`&&!t.getDragonBellState()&&ft(r.won?`找到小龍，巨龍接近中；尚未入帳。`:`猜鐘未中，塔保留；本次沒有撞擊或加分。`),ce.current.record(a,t.getPhysicsWorld().getElapsedSeconds());let c=0,l=0,u=0,d=0;for(let e of a){c+=e.scored.length,u+=e.keysCollected?.length??0,d+=e.keysLost?.length??0;for(let t of e.dragonAwards??[])l+=t.amount}let f=(t.getTreasuryState()?.rounds??0)>Lt.current;d&&ft(`鑰匙流失 ${d} 把，未收集、不計分。`),u&&!f&&ft(`前口收集鑰匙，目前 ${t.getTreasuryState()?.keys??0} / 3 把。鑰匙本身不計分。`);let p=t.getTreasuryState()?.phase??`idle`;p===`idle`&&Rt.current===`retracting`&&ft(`護欄已收回；再次操作才會投入一般金幣。`),Rt.current=p,f&&(Lt.current=t.getTreasuryState().rounds,ft(`御庫已開啟：免費剩餘 ${t.getTreasuryState().freeRemaining} 次，聖盾護欄啟動。`));let m=a.some(e=>e.towerCollapses.some(e=>e.tier===`high`));if(m&&l===0&&sn().play(`tower-collapse`),(c||l||m||f)&&Bt(e=>s(e,{front:c>0,dragon:l>0,highTower:m,treasury:f})),c>0){t.addBalance(c);let n=nn.current.record(c,e),r=sn();l===0&&!(n&&r.play(`coin-big-win`))&&e-de.current>=U.boardFeedback.collectSoundGapMs&&(r.play(`coin-collect`),de.current=e)}let h=t.getTowerManager().getSlots(),g=$t.current,_=!1,v=!1;for(let e=0;e<h.length;e++){let t=g[e],n=h[e].status;t!==`intact`&&n===`intact`&&(_=!0),t===`intact`&&n!==`intact`&&(v=!0)}$t.current=h.map(e=>e.status),_?(sn().play(`tower-ready`),ft(`一座幣塔已經穩固站立！`)):v&&ft(`幣塔倒塌；普通幣以前口實收計分。`),l>0&&(ft(`巨龍命中；已結算幣不重複計分。`),sn().play(`coin-big-win`)),(c||l||f||i?.revision!==o?.revision||i?.id!==o?.id||r?.phase===`reveal`&&!t.getDragonBellState())&&rn()},[sn,vn,hn,rn]),Nn=(0,V.useCallback)(()=>{Zt.current=null,$t.current=vt.current?vt.current.getTowerManager().getSlots().map(e=>e.status):[],Xt.current=requestAnimationFrame(Mn),Qt.current=window.setInterval(jn,Hh)},[Mn,jn]),Pn=(0,V.useCallback)(async(e=!1)=>{let t=++Ut.current;x.current=!1,w.current=!1,k.current=!1,window.clearTimeout(A.current),kn(),Et.current.reset(),Ot({}),G(null),Pt(null),Ue.current=!1,Ve(!1),F(!0),qt.current=!0,ce.current=new rh,Lt.current=0,Rt.current=`idle`,Mt(void 0),Ct(null),Tt(null),ue(ce.current.snapshot(0)),de.current=-1/0,mt(zh),ft(void 0),xt(null),L(void 0),yt.current=!1,_t.current=!1,yn(),gt(e=>e+1);let r=vt.current;vt.current=null,r?.dispose();try{let{CoinPusherEngine:r}=await g(async()=>{let{CoinPusherEngine:e}=await import(`./engine-C8jZNlCW.js`).then(e=>e.n);return{CoinPusherEngine:e}},__vite__mapDeps([2,3,4,5]));if(t!==Ut.current)return;let i;if(N){b.current??=new ge(window.location.pathname.includes(`/qa/`)?`crusader-local-save-qa`:n.database);try{let t=await b.current.read();e&&(i=t)}catch{if(e)throw Error(`無法讀取單機存檔，原資料已保留。請重新整理重試，或確認後開始新局。`);M({state:`error`,message:`本機儲存暫時不可用，這次進度可能無法保留。`})}}if(t!==Ut.current)return;let a=i?await r.restoreGame(i.engine):await r.create(qh(),Bh,{dragonChance:Wh(y),treasuryFeatures:!0});if(t!==Ut.current){a.dispose();return}if(vt.current=a,tn.current.reset(a.getDragonChoice(),a.getDragonBellState()),i){ce.current.restoreState(i.feedback),Yt.current=i.aim,ct(i.aim),new URLSearchParams(window.location.search).has(`fromTrial`)&&(ie.current=null,re(null)),Lt.current=a.getTreasuryState()?.rounds??0,Rt.current=a.getTreasuryState()?.phase??`idle`;let e=new URL(window.location.href),t=e.searchParams.get(`autoResume`),n=!1;try{n=!!t&&window.sessionStorage.getItem(Uh)===t,t&&window.sessionStorage.removeItem(Uh)}catch{}n&&hn.armAutoFiring(),(e.searchParams.has(`fromTrial`)||t)&&(e.searchParams.delete(`fromTrial`),e.searchParams.delete(`autoResume`),window.history.replaceState(window.history.state,``,e.href)),M({state:`saved`,message:n?`已接續試煉前進度；回到可投盤面將續投。`:`已接續上次進度；自動連投保持停止。`})}let o=!!i&&!!(a.getDragonChoice()||a.getDragonBellState()||a.getDragonBonusState())&&!yt.current;k.current=o,o||a.setDragonBonusAvailable(yt.current),o&&(A.current=window.setTimeout(()=>{k.current&&t===Ut.current&&(k.current=!1,a.setDragonBonusAvailable(!0),qt.current=!1,F(!1),yn())},U.cinematic.loadTimeoutMs)),F(o),qt.current=o,x.current=!0,jn(),se.current=document.hidden||se.current,yn(),Nn(),rn()}catch(e){if(t!==Ut.current)return;F(!1),L(e instanceof Error?e.message:`無法啟動遊戲引擎，請重新整理頁面。`)}},[Nn,kn,yn,jn,y,N,rn,hn]);(0,V.useEffect)(()=>(sn().unlock(),Pn(!0),()=>{Ut.current+=1,rn(),window.clearTimeout(A.current),kn();let e=vt.current;vt.current=null,e?.dispose(),en.current?.dispose(),en.current=null}),[]),(0,V.useEffect)(()=>{if(!N)return;let e=window.setInterval(()=>{rn()},1500),t=()=>{rn()};return window.addEventListener(`pagehide`,t),()=>{window.clearInterval(e),window.removeEventListener(`pagehide`,t)}},[N,rn]),(0,V.useEffect)(()=>{let e=e=>{se.current=e,oe(e),vn(),e&&on(),yn(),e&&rn()},t=()=>e(document.hidden),n=()=>{document.hidden?e(!0):vn()},r=()=>e(document.hidden);return document.addEventListener(`visibilitychange`,t),window.addEventListener(`blur`,n),window.addEventListener(`focus`,r),()=>{document.removeEventListener(`visibilitychange`,t),window.removeEventListener(`blur`,n),window.removeEventListener(`focus`,r)}},[vn,on,yn,rn]);let Fn=(0,V.useCallback)(()=>{cn();let e=!we.current;we.current=e,ye(e),v(e),sn().setMuted(e),dn()},[sn,dn,cn]),In=(0,V.useCallback)(e=>{if(!Number.isFinite(e)||Kt.current||qt.current||Jt.current||Ue.current||Je.current)return;let t=Math.max(-1,Math.min(1,e));Yt.current=t,ct(t)},[]),Ln=(0,V.useCallback)(e=>{Kt.current||qt.current||Jt.current||Ue.current||Je.current||mt(t=>Rh(t,e))},[]),Rn=(0,V.useCallback)(e=>{if(Number.isFinite(e)){if(hn.isAutoFiring()){In(e);return}gn(),In(e),sn().unlock(),hn.handleFireStart(()=>Yt.current)}},[gn,In,sn,hn]),zn=(0,V.useCallback)(e=>{In(e),Ln(e)},[In,Ln]),Bn=(0,V.useCallback)(e=>{if(T.current)return;let t=vt.current;if(t)try{t.debugForceTowerEvent(e),ft(`測試模式：已強制排入 ${e} 座幣塔建造。`)}catch{ft(`測試模式：已有建塔事件進行中，請稍候再試。`)}},[]),Vn=(0,V.useCallback)(()=>{let e=vt.current;if(!e)return{coins:[],pusherZ:0,aim:Yt.current};let t=e.getRenderState();return{coins:t.coins,pusherZ:t.pusher.position.z,aim:Yt.current,hatches:t.hatches,dragonBonus:t.dragonBonus,treasury:t.treasury,dragonChoice:t.dragonChoice,dragonBells:t.dragonBells,bonusAutoSelection:Et.current.selection(),elapsedSeconds:t.elapsedSeconds,boardFeedback:ce.current.snapshot(t.elapsedSeconds),openingHatches:t.towers.filter(e=>e.status===`opening`).map(e=>e.index)}},[]),Hn=(0,V.useCallback)(e=>{if(!T.current){if(k.current){yt.current=e,e&&(k.current=!1,window.clearTimeout(A.current),vt.current?.setDragonBonusAvailable(!0),qt.current=!1,F(!1),yn());return}yt.current=e,(e||!vt.current?.getDragonChoice()&&!vt.current?.getDragonBellState()&&!vt.current?.getDragonBonusState())&&vt.current?.setDragonBonusAvailable(e)}},[yn]),Un=(0,V.useCallback)(e=>{T.current||!y||Kt.current||Jt.current||ft(vt.current?.debugForceDragon(e)?`巨龍 BONUS`:`BONUS：需素材備妥、建塔結束且場上有完整幣塔。`)},[y]),Wn=(0,V.useCallback)(()=>{ee(void 0)},[]),Gn=(0,V.useCallback)(e=>{ee(e),Jt.current=!0,Kt.current=!0,vn(),on(),vt.current?.pause(),ne(!0),!_t.current&&!ie.current&&(_t.current=!0,Ne(`low`),gt(e=>e+1))},[vn,on]),Kn={accountPanel:(0,W.jsx)(dt,{...r,busy:r.busy||c,activeOwner:t,progressStatus:[m,i].filter(Boolean).join(` `),cloudEnabled:!0,onResolve:e=>{(async()=>{if(r.user&&t===r.user.uid&&!E.current&&vt.current&&b.current&&!w.current){T.current=!0,E.current=!0,l(!0),kn(),yn();try{let n=vt.current;await b.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:n.saveGame(),feedback:ce.current.saveState(),aim:Yt.current});let r=await b.current.archive(zt),{resolveAccountProgress:i}=await g(async()=>{let{resolveAccountProgress:e}=await import(`./cloudActions-BP09TQPR.js`);return{resolveAccountProgress:e}},__vite__mapDeps([6,3,4,7,8,9,10,1,11,2,5,12]));if(await i(t,r,e,window.localStorage)===`reload`){window.location.reload();return}h(`所選本機進度已上傳；若原有雲端版本，已先保留在本機備份。`)}catch{h(`操作未確認成功，或尚無可還原備份。進度與已建立的備份保留，請重新載入後重試。`)}T.current=!1,E.current=!1,l(!1),Nn(),yn()}})()},onDownload:()=>{(async()=>{if(r.user&&t===null&&!E.current&&vt.current&&b.current&&!w.current){T.current=!0,E.current=!0,l(!0),kn(),yn();try{let e=vt.current;await b.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:ce.current.saveState(),aim:Yt.current});let{downloadAccount:t}=await g(async()=>{let{downloadAccount:e}=await import(`./cloudActions-BP09TQPR.js`);return{downloadAccount:e}},__vite__mapDeps([6,3,4,7,8,9,10,1,11,2,5,12]));await t(r.user.uid,window.sessionStorage,window.localStorage),window.location.reload()}catch{h(`未能接續雲端進度，或此帳號已有本機存檔；原資料保留。`),T.current=!1,E.current=!1,l(!1),Nn(),yn()}}})()},onUpload:()=>{(async()=>{if(r.user&&t===r.user.uid&&!E.current&&vt.current&&b.current&&!w.current){T.current=!0,E.current=!0,l(!0),kn(),yn();try{let e=vt.current;await b.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:ce.current.saveState(),aim:Yt.current});let n=await b.current.archive(zt),{uploadAccount:r}=await g(async()=>{let{uploadAccount:e}=await import(`./cloudActions-BP09TQPR.js`);return{uploadAccount:e}},__vite__mapDeps([6,3,4,7,8,9,10,1,11,2,5,12]));await r(t,n,window.localStorage),h(`目前進度已上傳。`)}catch{h(`上傳未確認成功：可能離線或版本衝突。本機進度保留，未強制覆蓋雲端。`)}finally{T.current=!1,E.current=!1,l(!1),Nn(),yn()}}})()},onSignOut:()=>{(async()=>{if(!(E.current||c||!vt.current||!b.current||w.current)){E.current=!0,T.current=!0,l(!0),kn(),yn();try{let e=vt.current;await b.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:e.saveGame(),feedback:ce.current.saveState(),aim:Yt.current});let{firebaseIdentity:n}=await g(async()=>{let{firebaseIdentity:e}=await import(`./bootstrapAccount-CQqubWkx.js`).then(e=>e.c);return{firebaseIdentity:e}},__vite__mapDeps([3,4])),{signOut:r}=await g(async()=>{let{signOut:e}=await import(`./index.esm-D2jqCs_E.js`);return{signOut:e}},__vite__mapDeps([0,1])),{commitAccountRoute:i}=await g(async()=>{let{commitAccountRoute:e}=await import(`./bootstrapAccount-CQqubWkx.js`).then(e=>e.n);return{commitAccountRoute:e}},__vite__mapDeps([3,4]));await r(await n()),i(window.sessionStorage,t,null),window.location.reload()}catch{h(`登出未完成；進度已保留，請重試。`),T.current=!1,E.current=!1,l(!1),Nn(),yn()}}})()},onActivate:()=>{(async()=>{if(!E.current&&!c&&r.user&&vt.current&&b.current&&!w.current){E.current=!0,T.current=!0,l(!0),kn(),yn();try{let{firebaseIdentity:e}=await g(async()=>{let{firebaseIdentity:e}=await import(`./bootstrapAccount-CQqubWkx.js`).then(e=>e.c);return{firebaseIdentity:e}},__vite__mapDeps([3,4])),n=await e(),i=r.user.uid;if(n.currentUser?.uid!==i)throw Error(`Identity changed`);let a=vt.current;await b.current.write({format:`crusader-session-1`,savedAt:Date.now(),engine:a.saveGame(),feedback:ce.current.saveState(),aim:Yt.current});let o=await b.current.archive(zt);if(n.currentUser?.uid!==i)throw Error(`Identity changed`);let{activateSyncedAccount:s}=await g(async()=>{let{activateSyncedAccount:e}=await import(`./cloudActions-BP09TQPR.js`);return{activateSyncedAccount:e}},__vite__mapDeps([6,3,4,7,8,9,10,1,11,2,5,12]));await s(i,t,o,window.sessionStorage,window.localStorage),window.location.reload()}catch{h(`帳號進度切換未完成；原存檔保留，請重試。`),T.current=!1,E.current=!1,l(!1),Nn(),yn()}}})()}}),children:!B&&(0,W.jsx)(jh,{geometry:Gh,readFrame:Vn,quality:Me,dragonBonusEnabled:!0,bonusFullMotion:Vt,onDragonBonusReady:Hn,cameraResetKey:Pe,cabinetOverview:We,onCameraBusyChange:En,disabled:T.current||z||P||!!te||!!bt||!!St||!!wt||jt?.phase===`draining`||jt?.phase===`retracting`,onAimChange:In,feedback:pt,onDropRequest:On,onSweepStart:Rn,onSweepEnd:vn,onReady:Wn,onError:Gn},ht),wallet:Ye,score:Ze,boardFeedback:le,rearSweepEnabled:!0,dragonBonus:bt,treasuryFeatures:{treasury:jt,paidDropsPerKey:fe.paidDropsPerKey,choice:St,bells:wt,choiceSecondsLeft:Dt.tower,bellSecondsLeft:Dt.bell,autoSelection:kt,onChoose:(e,t)=>{T.current||Et.current.selection()||(vn(),vt.current?.chooseDragonTower(e,t)?(Ct(null),Tt(vt.current.getDragonBellState()),ft(`目標已選定；自動換位後再選鐘，尚未入帳。`),rn()):ft(`目標暫時無法選取，請確認場景已就緒。`))},onGuessBell:(e,t)=>{T.current||Et.current.selection()||(vn(),vt.current?.guessDragonBell(e,t)&&(Tt(vt.current.getDragonBellState()),rn()))}},trophies:zt,onSelectTrophy:e=>Bt(t=>_(t,e)),bonusFullMotion:Vt,onBonusFullMotionChange:Ht,towerCount:$e,pendingTowers:tt,regeneration:rt,constructionLabel:at,aim:st,paused:z,muted:ve,coinSound:Te.sound,coinVolume:Te.volume,coinPreviewState:Oe,onCoinSoundChange:e=>ln({sound:e}),onCoinVolumeChange:e=>ln({volume:e}),onCoinPreview:()=>void un(),onCoinPreviewCancel:cn,quality:Me,cameraMoving:ze,cabinetOverview:We,onCabinetOverviewChange:Dn,onCameraReset:Tn,loading:P,error:te,message:lt,localSave:N?{...j,onSave:()=>{M({state:`loading`,message:`正在儲存單機進度…`}),rn()}}:void 0,trialsNavigation:N?{state:D,onOpen:()=>{An()}}:void 0,navigationLocked:D!==`idle`,feedback:pt,testMode:y,onAimChange:zn,onFireStart:Sn,onFireEnd:Cn,onFireSuspend:vn,onFireRelease:wn,autoFiring:H,autoSpeed:xe,onAutoSpeedChange:_n,onSettingsOpenChange:e=>{Wt.current=e,It(e),e&&vn(),an()},onReplayIntro:()=>bn(`intro`),onReplayHighTower:()=>{ce.current.snapshot(0).highTowerReplayAvailable&&bn(`high-tower`)},onMute:Fn,onQualityChange:Ne,onRetryScene:R&&!I?()=>{vn(),Ne(`low`),gt(e=>e+1)}:void 0,onNewGame:()=>{T.current||(!N||window.confirm(`開始新局會取代這個瀏覽器的續玩進度（金幣、盤面、鑰匙及免費次數）。確定開始？`))&&(gn(),Pn())},...y?{onTestTowers:Bn,onTestDragon:Un}:{}};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{inert:!!B,"aria-hidden":B?!0:void 0,...f(dn),children:(0,W.jsx)(ut,{...Kn})}),Nt&&!B&&!Ft&&(0,W.jsx)(Ge,{frame:Nt,suspended:z||P||!!te,onAudioUnlock:dn,onStrike:(e,t)=>{let n=vt.current;if(!(!n||Kt.current||Wt.current||T.current)&&n.strikeSiege(e,t)){let e=n.getSiegeState();Pt(e),an(),sn().play(e?.lastHit?`siege-hit`:`siege-miss`),rn()}}}),B&&(0,W.jsx)(th,{kind:B.kind,suspended:ae,onComplete:xn,soundEnabled:!ve,onSoundToggle:pn,onAudioUnlock:dn,onPlaybackTime:fn},B.id)]})}var Yh=document.getElementById(`root`);if(!Yh)throw Error(`#root element not found`);var Xh=()=>{Yh.textContent=`登入初始化失敗；本機進度未變更。請稍後再試。`};try{h(e=>(0,_e.createRoot)(Yh).render((0,W.jsx)(V.StrictMode,{children:(0,W.jsx)(Jh,{storageOwner:e},e??`guest`)})),Xh,window.sessionStorage,void 0,async e=>{if(e){let{hydrateRecoveredTrophies:t}=await g(async()=>{let{hydrateRecoveredTrophies:e}=await import(`./accountRecovery-CQYIwWck.js`);return{hydrateRecoveredTrophies:e}},__vite__mapDeps([12,3,4,9,10,11,2,5]));await t(e,window.localStorage)}if(e&&navigator.onLine){let{synchronizeAccount:t}=await g(async()=>{let{synchronizeAccount:e}=await import(`./autoSyncRuntime-BN13JcC2.js`);return{synchronizeAccount:e}},__vite__mapDeps([13,3,4,11,9,10,2,5,12,6,7,8,1]));await t(e,!0)}})}catch{Xh()}