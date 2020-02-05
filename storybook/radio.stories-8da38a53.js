import{q as e,s as a,u as r,v as s,w as t,x as o,y as l}from"./storybook-preview-1dfbf81c.js";import{_ as d,a as i}from"./index-e7146c3c.js";function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}const n={};function c(r){let{components:d}=r,c=i(r,["components"]);return a("wrapper",m({},n,c,{components:d,mdxType:"MDXLayout"}),a(s,{title:"Radio",parameters:{component:"t-radio",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"Radio"),a("p",null,"A form component for displaying a radio input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",m({parentName:"pre"},{className:"language-js"}),"import { Radio } from 'zephyr-elements';\n")),a(t,{withToolbar:!0,mdxType:"Preview"},a(o,{name:"Simple",mdxType:"Story"},e`
      <t-radio id="simple"></t-radio>
    `)),a("h2",null,"API"),a(l,{of:"t-radio",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(o,{name:"Wide",mdxType:"Story"},e`
    <t-radio id="wide" wide></t-radio>
  `),a("h6",null,"Label"),a(o,{name:"Label",mdxType:"Story"},e`
    <t-radio id="label" label="Name"></t-radio>
  `),a("h6",null,"Reversed Label"),a(o,{name:"Reversed Label",mdxType:"Story"},e`
    <t-radio id="label" label="Name" reversed></t-radio>
  `),a("h6",null,"Stacked Label"),a(o,{name:"Stacked Label",mdxType:"Story"},e`
    <t-radio id="stacked-label" label="Name" .inline=${!1}></t-radio>
  `),a("h6",null,"Messages"),a(o,{name:"Messages",mdxType:"Story"},e`
    <t-radio id="messages" label="Name" .messages=${["This is a message"]}></t-radio>
  `),a("h6",null,"Error"),a(o,{name:"Error",mdxType:"Story"},e`
    <t-radio id="error" label="Name" status="error" .checked=${!0}></t-radio>
  `),a("h6",null,"Success"),a(o,{name:"Success",mdxType:"Story"},e`
    <t-radio id="success" label="Name" status="success" .checked=${!0}></t-radio>
  `))}c.isMDXComponent=!0;const p=()=>e`
      <t-radio id="simple"></t-radio>
    `;(p.story={}).name="Simple",p.story.parameters={mdxSource:'html`\n      <t-radio id="simple"></t-radio>\n    `'};const u=()=>e`
    <t-radio id="wide" wide></t-radio>
  `;(u.story={}).name="Wide",u.story.parameters={mdxSource:'html`\n    <t-radio id="wide" wide></t-radio>\n  `'};const b=()=>e`
    <t-radio id="label" label="Name"></t-radio>
  `;(b.story={}).name="Label",b.story.parameters={mdxSource:'html`\n    <t-radio id="label" label="Name"></t-radio>\n  `'};const y=()=>e`
    <t-radio id="label" label="Name" reversed></t-radio>
  `;(y.story={}).name="Reversed Label",y.story.parameters={mdxSource:'html`\n    <t-radio id="label" label="Name" reversed></t-radio>\n  `'};const h=()=>e`
    <t-radio id="stacked-label" label="Name" .inline=${!1}></t-radio>
  `;(h.story={}).name="Stacked Label",h.story.parameters={mdxSource:'html`\n    <t-radio id="stacked-label" label="Name" .inline=${false}></t-radio>\n  `'};const S=()=>e`
    <t-radio id="messages" label="Name" .messages=${["This is a message"]}></t-radio>
  `;(S.story={}).name="Messages",S.story.parameters={mdxSource:'html`\n    <t-radio id="messages" label="Name" .messages=${[\'This is a message\']}></t-radio>\n  `'};const x=()=>e`
    <t-radio id="error" label="Name" status="error" .checked=${!0}></t-radio>
  `;(x.story={}).name="Error",x.story.parameters={mdxSource:'html`\n    <t-radio id="error" label="Name" status="error" .checked=${true}></t-radio>\n  `'};const N=()=>e`
    <t-radio id="success" label="Name" status="success" .checked=${!0}></t-radio>
  `;(N.story={}).name="Success",N.story.parameters={mdxSource:'html`\n    <t-radio id="success" label="Name" status="success" .checked=${true}></t-radio>\n  `'};const g={title:"Radio",parameters:{component:"t-radio",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},k={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};g.parameters=g.parameters||{},g.parameters.docs=d({},g.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:k,mdxComponentMeta:g},a(c,null))});const L=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default g;export{L as __namedExportsOrder,x as error,b as label,S as messages,y as reversedLabel,p as simple,h as stackedLabel,N as success,u as wide};
//# sourceMappingURL=radio.stories-8da38a53.js.map
