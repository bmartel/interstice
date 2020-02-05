import{q as e,s as a,u as r,v as t,w as n,x as s,y as l}from"./storybook-preview-1dfbf81c.js";import{_ as m,a as i}from"./index-e7146c3c.js";function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}const p={};function u(r){let{components:m}=r,u=i(r,["components"]);return a("wrapper",o({},p,u,{components:m,mdxType:"MDXLayout"}),a(t,{title:"Range",parameters:{component:"t-range",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"Range"),a("p",null,"A form component for displaying a range input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",o({parentName:"pre"},{className:"language-js"}),"import { Range } from 'zephyr-elements';\n")),a(n,{withToolbar:!0,mdxType:"Preview"},a(s,{name:"Simple",mdxType:"Story"},e`
      <t-range id="simple"></t-range>
    `)),a("h2",null,"API"),a(l,{of:"t-range",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(s,{name:"Wide",mdxType:"Story"},e`
    <t-range id="wide" wide></t-range>
  `),a("h6",null,"Label"),a(s,{name:"Label",mdxType:"Story"},e`
    <t-range id="label" label="Temperature"></t-range>
  `),a("h6",null,"Hint"),a(s,{name:"Hint",mdxType:"Story"},e`
    <t-range id="hint" label="Temperature" hint="What is the weather like?"></t-range>
  `),a("h6",null,"Inline Label"),a(s,{name:"Inline Label",mdxType:"Story"},e`
    <t-range id="inline-label" label="Temperature" inline></t-range>
  `),a("h6",null,"Messages"),a(s,{name:"Messages",mdxType:"Story"},e`
    <t-range id="messages" label="Temperature" .messages=${["This is a message"]}></t-range>
  `),a("h6",null,"Error"),a(s,{name:"Error",mdxType:"Story"},e`
    <t-range id="error" label="Temperature" status="error" .checked=${!0}></t-range>
  `),a("h6",null,"Success"),a(s,{name:"Success",mdxType:"Story"},e`
    <t-range id="success" label="Temperature" status="success" .checked=${!0}></t-range>
  `))}u.isMDXComponent=!0;const c=()=>e`
      <t-range id="simple"></t-range>
    `;(c.story={}).name="Simple",c.story.parameters={mdxSource:'html`\n      <t-range id="simple"></t-range>\n    `'};const g=()=>e`
    <t-range id="wide" wide></t-range>
  `;(g.story={}).name="Wide",g.story.parameters={mdxSource:'html`\n    <t-range id="wide" wide></t-range>\n  `'};const d=()=>e`
    <t-range id="label" label="Temperature"></t-range>
  `;(d.story={}).name="Label",d.story.parameters={mdxSource:'html`\n    <t-range id="label" label="Temperature"></t-range>\n  `'};const h=()=>e`
    <t-range id="hint" label="Temperature" hint="What is the weather like?"></t-range>
  `;(h.story={}).name="Hint",h.story.parameters={mdxSource:'html`\n    <t-range id="hint" label="Temperature" hint="What is the weather like?"></t-range>\n  `'};const y=()=>e`
    <t-range id="inline-label" label="Temperature" inline></t-range>
  `;(y.story={}).name="Inline Label",y.story.parameters={mdxSource:'html`\n    <t-range id="inline-label" label="Temperature" inline></t-range>\n  `'};const b=()=>e`
    <t-range id="messages" label="Temperature" .messages=${["This is a message"]}></t-range>
  `;(b.story={}).name="Messages",b.story.parameters={mdxSource:'html`\n    <t-range id="messages" label="Temperature" .messages=${[\'This is a message\']}></t-range>\n  `'};const T=()=>e`
    <t-range id="error" label="Temperature" status="error" .checked=${!0}></t-range>
  `;(T.story={}).name="Error",T.story.parameters={mdxSource:'html`\n    <t-range id="error" label="Temperature" status="error" .checked=${true}></t-range>\n  `'};const x=()=>e`
    <t-range id="success" label="Temperature" status="success" .checked=${!0}></t-range>
  `;(x.story={}).name="Success",x.story.parameters={mdxSource:'html`\n    <t-range id="success" label="Temperature" status="success" .checked=${true}></t-range>\n  `'};const S={title:"Range",parameters:{component:"t-range",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","messages","error","success"]},w={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Messages:"messages",Error:"error",Success:"success"};S.parameters=S.parameters||{},S.parameters.docs=m({},S.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:w,mdxComponentMeta:S},a(u,null))});const f=["simple","wide","label","hint","inlineLabel","messages","error","success"];export default S;export{f as __namedExportsOrder,T as error,h as hint,y as inlineLabel,d as label,b as messages,c as simple,x as success,g as wide};
//# sourceMappingURL=range.stories-431abad4.js.map
