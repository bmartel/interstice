const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r={},n={},i=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${i}--\x3e`,l=new RegExp(`${i}|${a}`),c="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,a=-1,h=0;const{strings:p,values:{length:_}}=t;for(;h<_;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let o=0;for(let t=0;t<s;t++)d(e[t].name,c)&&o++;for(;o-- >0;){const e=p[h],s=m.exec(e)[2],o=s.toLowerCase()+c,r=t.getAttribute(o);t.removeAttribute(o);const n=r.split(l);this.parts.push({type:"attribute",index:a,name:s,strings:n}),h+=n.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const o=t.parentNode,r=e.split(l),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=u();else{const t=m.exec(n);null!==t&&d(t[2],c)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-c.length)+t[3]),s=document.createTextNode(n)}o.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===r[n]?(o.insertBefore(u(),t),s.push(t)):t.data=r[n],h+=n}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&a!==n||(a++,e.insertBefore(u(),t)),n=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else r.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const d=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,u=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class _{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,i=0,a=0,l=r.nextNode();for(;i<o.length;)if(n=o[i],p(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));i++}else this.__parts.push(void 0),i++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}const f=` ${i} `;class g{constructor(t,e,s,o){this.strings=t,this.values=e,this.type=s,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=m.exec(t);e+=null===n?t+(s?f:a):t.substr(0,n.index)+n[1]+n[2]+c+n[3]+i}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let o=0;o<e;o++){s+=t[o];const e=this.parts[o];if(void 0!==e){const t=e.value;if(y(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||y(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof g?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===n?(this.value=n,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const s=new _(e,t.processor,this.options),o=s._clone();s.update(t.values),this.__commitNode(o),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,o=0;for(const r of t)void 0===(s=e[o])&&(s=new w(this.options),e.push(s),0===o?s.appendIntoPart(this):s.insertAfterPart(e[o-1])),s.setValue(r),s.commit(),o++;o<e.length&&(e.length=o,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class z{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class x extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class N{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,s=this.value,o=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),n=null!=t&&(null==s||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const T=new class{handleAttributeExpressions(t,e,s,o){const r=e[0];return"."===r?new x(t,e.slice(1),s).parts:"@"===r?[new N(t,e.slice(1),o.eventContext)]:"?"===r?[new z(t,e.slice(1),s)]:new b(t,e,s).parts}handleTextExpression(t){return new w(t)}};function E(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i);return void 0===(s=e.keyString.get(o))&&(s=new h(t,t.getTemplateElement()),e.keyString.set(o,s)),e.stringsArray.set(t.strings,s),s}const V=new Map,k=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(t,...e)=>new g(t,e,"html",T),U=133;function R(t,e){const{element:{content:s},parts:o}=t,r=document.createTreeWalker(s,U,null,!1);let n=q(o),i=o[n],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==i&&i.index===a;)i.index=null!==h?-1:i.index-l,i=o[n=q(o,n)]}c.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,U,null,!1);for(;s.nextNode();)e++;return e},q=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};const j=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const $=t=>e=>{const s=j(e.type,t);let o=V.get(s);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},V.set(s,o));let r=o.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(i);if(void 0===(r=o.keyString.get(n))){const s=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,t),r=new h(e,s),o.keyString.set(n,r)}return o.stringsArray.set(e.strings,r),r},B=["html","svg"],I=new Set,L=(t,e,s)=>{I.add(t);const o=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,t);const i=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}(t=>{B.forEach(e=>{const s=V.get(j(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(t);const a=o.content;s?function(t,e,s=null){const{element:{content:o},parts:r}=t;if(null==s)return void o.appendChild(e);const n=document.createTreeWalker(o,U,null,!1);let i=q(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=M(e),s.parentNode.insertBefore(e,s));-1!==i&&r[i].index===l;){if(a>0){for(;-1!==i;)r[i].index+=a,i=q(r,i);return}i=q(r,i)}}(s,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(i,a.firstChild);const t=new Set;t.add(i),R(s,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},D=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Y=32,Z="finalized";class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const o=this._attributeNameForProperty(s,e);void 0!==o&&(this._attributeToPropertyMap.set(o,s),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const o=this[t];this[s]=e,this._requestUpdate(t,o)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this[Z]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,o=e.converter||H,r="function"==typeof o?o:o.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,o=e.converter;return(o&&o.toAttribute||H.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Y,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const o=this.constructor,r=o._attributeNameForProperty(t,s);if(void 0!==r){const t=o._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,o=s._attributeToPropertyMap.get(t);if(void 0!==o){const t=s._classProperties.get(o)||J;this._updateState=this._updateState|X,this[o]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const o=this.constructor,r=o._classProperties.get(t)||J;o._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,o)=>{t=s,e=o});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Y}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt[Z]=!0;const et="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol();class ot{constructor(t,e){if(e!==st)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(et?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const s=e.reduce((e,s,o)=>e+(t=>{if(t instanceof ot)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[o+1],t[0]);return new ot(s,st)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const nt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let o=0,r=e.length;o<r;o++){const r=e[o];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class it extends tt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){nt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?et?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof g&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}it.finalized=!0,it.render=((t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,n=k.has(e),i=F&&11===e.nodeType&&!!e.host,a=i&&!I.has(r),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let r=k.get(e);void 0===r&&(o(e,e.firstChild),k.set(e,r=new w(Object.assign({templateFactory:E},s))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:$(r)},s)),a){const t=k.get(l);k.delete(l);const s=t.value instanceof _?t.value.template:void 0;L(r,l,s),o(e,e.firstChild),e.appendChild(l),k.set(e,t)}!n&&i&&window.ShadyCSS.styleElement(e.host)});class at extends it{static get properties(){return{type:{type:String},color:{type:String,reflect:!0},size:{type:String,reflect:!0},inverted:{type:Boolean,reflect:!0}}}static get styles(){return rt`:host{--z-button-padding:var(--z-padding);--z-button-font-size:var(--z-font-size);--z-button-font-family:var(--z-font-family);--z-button-color:var(--z-color-white);--z-button-bg-color:var(--z-background-color);--z-button-border-color:var(--z-border-color)}:host([size='sm']){--z-button-padding:var(--z-p-2);--z-button-font-size:var(--z-text-sm)}:host([size='md']){--z-button-padding:var(--z-p-4);--z-button-font-size:var(--z-text-md)}:host([size='lg']){--z-button-padding:var(--z-p-6);--z-button-font-size:var(--z-text-lg)}:host([size='input']){--z-button-padding:var(--z-p-6)}:host([color='default']){--z-button-color:var(--z-color)}:host([color='primary']){--z-button-bg-color:var(--z-color-primary);--z-button-border-color:var(--z-color-primary)}:host([color='accent']){--z-button-bg-color:var(--z-color-accent);--z-button-border-color:var(--z-color-accent)}:host([color='error']){--z-button-bg-color:var(--z-color-error);--z-button-border-color:var(--z-color-error)}:host([color='success']){--z-button-bg-color:var(--z-color-success);--z-button-border-color:var(--z-color-success)}:host([inverted]){--z-button-bg-color:var(--z-background-color)}:host([inverted]):host([color='primary']){--z-button-color:var(--z-color-primary)!important}:host([inverted]):host([color='accent']){--z-button-color:var(--z-color-accent)!important}:host([inverted]):host([color='error']){--z-button-color:var(--z-color-error)!important}:host([inverted]):host([color='success']){--z-button-color:var(--z-color-success)!important}button{-webkit-appearance:none;-moz-appearance:none;font-family:var(--z-button-font-family);font-size:var(--z-button-font-size);padding:calc(var(--z-button-padding)/ 2) var(--z-button-padding);border-radius:var(--z-round);transition:var(--z-transition);color:var(--z-button-color);background-color:var(--z-button-bg-color);border:var(--z-button-border-color) solid var(--z-border-size)}button:hover,button:focus{outline:0;cursor:pointer;box-shadow:var(--z-button-border-color) 0 0 0 var(--z-outline-size,2px)}`}constructor(){super(),this.type="button",this.color="default"}render(){return O` <button .type="${this.type}"><slot></slot><slot name="icon"></slot></button> `}}window.customElements.define("z-button",at);export{at as Button};
