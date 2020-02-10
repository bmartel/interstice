const e=new WeakMap,t=t=>(...s)=>{const r=t(...s);return e.set(r,!0),r},s=t=>"function"==typeof t&&e.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},n={},o={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,c=new RegExp(`${a}|${l}`),h="$lit$";class d{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,l=0;const{strings:d,values:{length:u}}=e;for(;l<u;){const e=i.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let r=0;for(let e=0;e<s;e++)p(t[e].name,h)&&r++;for(;r-- >0;){const t=d[l],s=g.exec(t)[2],r=s.toLowerCase()+h,i=e.getAttribute(r);e.removeAttribute(r);const n=i.split(c);this.parts.push({type:"attribute",index:o,name:s,strings:n}),l+=n.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const r=e.parentNode,i=t.split(c),n=i.length-1;for(let t=0;t<n;t++){let s,n=i[t];if(""===n)s=m();else{const e=g.exec(n);null!==e&&p(e[2],h)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),s=document.createTextNode(n)}r.insertBefore(s,e),this.parts.push({type:"node",index:++o})}""===i[n]?(r.insertBefore(m(),e),s.push(e)):e.data=i[n],l+=n}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&o!==n||(o++,t.insertBefore(m(),e)),n=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(s.push(e),o--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),l++}}else i.currentNode=r.pop()}for(const e of s)e.parentNode.removeChild(e)}}const p=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},u=e=>-1!==e.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class f{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(n=s[o],u(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const _=` ${a} `;class v{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const n=g.exec(e);t+=null===n?e+(s?_:l):e.substr(0,n.index)+n[1]+n[2]+h+n[3]+a}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const y=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let r=0;r<t;r++){s+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(y(e)||!b(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===n||y(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=n,e(this)}this.value!==n&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n,e(this)}const e=this.__pendingValue;e!==n&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===o?(this.value=o,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof f&&this.value.template===t)this.value.update(e.values);else{const s=new f(t,e.processor,this.options),r=s._clone();s.update(e.values),this.__commitNode(r),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,r=0;for(const i of e)void 0===(s=t[r])&&(s=new x(this.options),t.push(s),0===r?s.appendIntoPart(this):s.insertAfterPart(t[r-1])),s.setValue(i),s.commit(),r++;r<t.length&&(t.length=r,this.clear(s&&s.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class z{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n,e(this)}if(this.__pendingValue===n)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=n}}class C extends w{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let N=!1;try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class k{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n,e(this)}if(this.__pendingValue===n)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=n}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const E=new class{handleAttributeExpressions(e,t,s,r){const i=t[0];return"."===i?new C(e,t.slice(1),s).parts:"@"===i?[new k(e,t.slice(1),r.eventContext)]:"?"===i?[new z(e,t.slice(1),s)]:new w(e,t,s).parts}handleTextExpression(e){return new x(e)}};function T(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(a);return void 0===(s=t.keyString.get(r))&&(s=new d(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,$=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(e,...t)=>new v(e,t,"html",E),U=133;function O(e,t){const{element:{content:s},parts:r}=e,i=document.createTreeWalker(s,U,null,!1);let n=I(r),o=r[n],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=r[n=I(r,n)]}c.forEach(e=>e.parentNode.removeChild(e))}const R=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,U,null,!1);for(;s.nextNode();)t++;return t},I=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(u(t))return s}return-1};const L=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const j=e=>t=>{const s=L(t.type,e);let r=V.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},V.set(s,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(a);if(void 0===(i=r.keyString.get(n))){const s=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(s,e),i=new d(t,s),r.keyString.set(n,i)}return r.stringsArray.set(t.strings,i),i},q=["html","svg"],F=new Set,H=(e,t,s)=>{F.add(e);const r=s?s.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{q.forEach(t=>{const s=V.get(L(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),O(e,s)})})})(e);const a=r.content;s?function(e,t,s=null){const{element:{content:r},parts:i}=e;if(null==s)return void r.appendChild(t);const n=document.createTreeWalker(r,U,null,!1);let o=I(i),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=R(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),O(s,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J},Y=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Z=32,ee="finalized";class te extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);void 0!==r&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=D){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const r=this[e];this[s]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ee)||e.finalize(),this[ee]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=J){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||W,i="function"==typeof r?r:r.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,r=t.converter;return(r&&r.toAttribute||W.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=D){const r=this.constructor,i=r._attributeNameForProperty(e,s);if(void 0!==i){const e=r._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|Q,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Q}}_attributeToProperty(e,t){if(this._updateState&Q)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(void 0!==r){const e=s._classProperties.get(r)||D;this._updateState=this._updateState|X,this[r]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||D;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,r)=>{e=s,t=r});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}te[ee]=!0;const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol();class ie{constructor(e,t){if(t!==re)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ne=(e,...t)=>{const s=t.reduce((t,s,r)=>t+(e=>{if(e instanceof ie)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[r+1],e[0]);return new ie(s,re)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const oe=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ae extends te{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){oe(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ae.finalized=!0,ae.render=((e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,n=$.has(t),o=B&&11===t.nodeType&&!!t.host,a=o&&!F.has(r),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let r=$.get(t);void 0===r&&(i(t,t.firstChild),$.set(t,r=new x(Object.assign({templateFactory:T},s))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:j(r)},s)),a){const e=$.get(l);$.delete(l);const s=e.value instanceof f?e.value.template:void 0;H(r,l,s),i(t,t.firstChild),t.appendChild(l),$.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)});const le=new WeakMap,ce=t(e=>t=>{if(!(t instanceof S)||t instanceof P||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=t,{element:r}=s;le.has(t)||(r.className=s.strings.join(" "));const{classList:i}=r,n=le.get(t);for(const t in n)t in e||i.remove(t);for(const t in e){const s=e[t];if(!n||s!==n[t]){i[s?"add":"remove"](t)}}le.set(t,e)}),he=new WeakMap,de=t(e=>t=>{const s=he.get(t);if(s!==e){if(he.set(t,e),e)for(const r in e){const i=e[r];if(i===n)continue;const o=r[0],{element:a}=t.committer;if("@"!==o)if("."!==o){if("?"!==o)s&&s[r]===i||(null!=i?a.setAttribute(r,String(i)):a.removeAttribute(r));else if(!s||s[r]!==i){const e=r.slice(1);i?a.setAttribute(e,""):a.removeAttribute(e)}}else s&&s[r]===i||(a[r.slice(1)]=i);else{const e=s&&s[r];if(!e||e!==i){const t=r.slice(1);e&&a.removeEventListener(t,e),a.addEventListener(t,i)}}}if(s)for(const r in s)if(!(e&&r in e)){const e=r[0],{element:i}=t.committer;if("@"===e){i.removeEventListener(r.slice(1),s[r]);continue}if("."===e){i[r.slice(1)]=void 0;continue}if("?"===e){i.removeAttribute(r.slice(1));continue}i.removeAttribute(r)}}}),pe=M` <style>:host{font-family:var(--z-font-family)}</style> `,ue=M` <style>@media (min-width: 640px){:host,.input-wrapper,.input:not(.check){width:var(--z-w-full)!important}}</style> `;class me extends ae{static get properties(){return{id:{type:String},name:{type:String},type:{type:String},value:{type:String},label:{type:String},hint:{type:String},placeholder:{type:String},messages:{type:Array},wide:{type:Boolean},inline:{type:Boolean},reversed:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},status:{type:String}}}static get styles(){return ne`:host{display:inline-flex}.input-wrapper{display:grid;grid-gap:var(--z-gap);grid-template-areas:'l l l' 'h h h' 'i i i' 'm m m'}.hint{grid-area:h;font-size:var(--z-message-size);color:var(--z-input-placeholder-color);flex:1;margin-bottom:var(--z-gap)}.label{grid-area:l;font-size:var(--z-label-size);color:var(--z-label-color);font-weight:var(--z-label-font-weight,600)}.messages{font-size:var(--z-message-size);margin:var(--z-gap) 0 0 0;padding:0;list-style:none;grid-area:m;display:grid}:host,.input-wrapper,.input:not(.check){width:var(--z-w-full)}:host,.input-wrapper,.label,.messages,.check,.input{box-sizing:border-box;transition:var(--z-transition)}.disabled{opacity:.6}.inline{grid-template-areas:'l i i' 'h i i' '. m m';grid-column-gap:calc(var(--z-gap) * 2.5);grid-row-gap:var(--z-gap);align-items:center}.inline .label{grid-row:span 2}.inline .hint{align-self:start}.inline .hint + .label{grid-row:span 1;align-self:end}.inline.reversed{grid-template-areas:'i i l' 'i i h' 'm m .'}.input{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;grid-area:i;font-size:var(--z-font-size);font-family:var(--z-font-family);padding:var(--z-padding);color:var(--z-input-color);background-color:var(--z-input-bg-color);border:var(--z-border-size) solid var(--z-border-color);border-radius:var(--z-round);outline-color:var(--z-outline-color)}.input::placeholder{color:var(--z-input-placeholder-color)}.input:focus{outline:0;border-color:var(--z-color-primary)}.input:hover{border-color:var(--z-color-primary);box-shadow:var(--z-color-primary) 0 0 var(--z-outline-size)}.input-wrapper.error .input:hover{border-color:var(--z-color-error);box-shadow:var(--z-color-error) 0 0 var(--z-outline-size)}.input-wrapper.success .input:hover{border-color:var(--z-color-success);box-shadow:var(--z-color-success) 0 0 var(--z-outline-size)}.input::selection{color:var(--z-color-white);background-color:var(--z-color-accent)}.error .input::selection{background-color:var(--z-color-error)}.error .label,.error .check,.error .messages{color:var(--z-color-error)}.error .input{border-color:var(--z-color-error)}.success .input::selection{background-color:var(--z-color-success)}.success .label,.success .check,.success .messages{color:var(--z-color-success)}.success .input{border-color:var(--z-color-success)}@media (min-width: 640px){:host,.input-wrapper,.input:not(.check){width:initial}}`}constructor(){super(),this.id="",this.name="",this.value=null,this.label="",this.hint="",this.placeholder="",this.messages=[],this.wide=!1,this.status="",this.inline=!1,this.reversed=!1,this.disabled=!1,this.readonly=!1}get error(){return"error"===this.status}set error(e){}get success(){return"success"===this.status}set success(e){}labelId(){return`label-${this.id}`}hintId(){return`hint-${this.id}`}inputName(){return this.name||this.id}renderLabel(){return this.label?M` <span class="label" .id="${this.labelId()}">${this.label}</span> `:null}renderHint(){return this.hint?M` <span class="hint" .id="${this.hintId()}">${this.hint}</span> `:null}renderInput(e={class:"input"}){return M` <input .id="${this.id}" .value="${this.value}" .type="${this.type}" .name="${this.inputName()}" .placeholder="${this.placeholder}" .aria-labelledby="${this.labelId()}" .aria-describedby="${this.hintId()}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ...="${de(e)}"> `}renderMessages(){return this.messages.length?M` <ul class="messages"> ${this.messages.map(e=>M`<li>${e}</li>`)} </ul> `:null}render(){return M` ${pe} ${this.wide?ue:null} <label class="${ce({"input-wrapper":!0,inline:this.inline,reversed:this.reversed,disabled:this.disabled,error:this.error,success:this.success})}"> ${this.renderHint()} ${this.renderLabel()} ${this.renderInput()} ${this.renderMessages()} </label> `}}class ge extends me{static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return ne`${me.styles}
      .input{color:var(--z-color-primary)}.check:not(.input):not(.radio){color:var(--z-color-white)}:host([checked]) input + .check{background-color:var(--z-color-primary);border-color:var(--z-color-primary)}:host([checked]) .error input + .check{background-color:var(--z-color-error);border-color:var(--z-color-error)}:host([checked]) .success input + .check{background-color:var(--z-color-success);border-color:var(--z-color-success)}.input.check{cursor:pointer;stroke:currentColor;stroke-width:4px;width:26px;height:26px}.hidden{opacity:0;-webkit-appearance:none;-moz-appearance:none;width:0;height:0;cursor:pointer}`}constructor(){super(),this.inline=!0,this.checked=!1,this.type="checkbox",this.inputUpdate=this.inputUpdate.bind(this)}inputStyles(){const e={display:"flex",cursor:"pointer"};return this.checked&&(e.padding="0"),e}inputUpdate(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("update"))}renderCheck(){return this.checked?M` <svg class="check" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"> <path fill="none" d="M6,11.3 L10.3,16 L18,6.2"></path> </svg> `:null}renderInput(){return M` ${super.renderInput({class:"hidden","?checked":this.checked,"@click":this.inputUpdate})} <div class="${ce({input:!0,check:!0,[this.type]:!0})}" style="padding: 0;"> ${this.renderCheck()} </div> `}}window.customElements.define("z-checkbox",ge);class fe extends ge{static get styles(){return ne`${ge.styles}
      .radio{fill:currentColor;border-radius:var(--z-round-full)}:host([checked]) input + .radio,:host([checked]) .error input + .radio,:host([checked]) .success input + .radio{background-color:var(--z-input-bg-color)}`}constructor(){super(),this.type="radio"}renderCheck(){return this.checked?M` <svg class="check radio" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"> <circle cx="12" cy="12" r="6"></circle> </svg> `:null}}window.customElements.define("z-radio",fe);export{fe as Radio};
