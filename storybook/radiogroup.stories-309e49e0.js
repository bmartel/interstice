import{q as e,s as a,u as r,v as o,w as s,x as l,y as t}from"./storybook-preview-1dfbf81c.js";import{_ as n,a as d}from"./index-e7146c3c.js";function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const p={};function u(r){let{components:n}=r,u=d(r,["components"]);return a("wrapper",i({},p,u,{components:n,mdxType:"MDXLayout"}),a(o,{title:"RadioGroup",parameters:{component:"t-radiogroup",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"RadioGroup"),a("p",null,"A form component for displaying a radiogroup input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",i({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",i({parentName:"pre"},{className:"language-js"}),"import { RadioGroup } from 'zephyr-elements';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <t-radiogroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></t-radiogroup>
    `)),a("h2",null,"API"),a(t,{of:"t-radiogroup",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <t-radiogroup id="wide" wide></t-radiogroup>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <t-radiogroup id="label" label="Name"></t-radiogroup>
  `),a("h6",null,"Reversed Label"),a(l,{name:"Reversed Label",mdxType:"Story"},e`
    <t-radiogroup id="label" label="Name" reversed></t-radiogroup>
  `),a("h6",null,"Stacked Label"),a(l,{name:"Stacked Label",mdxType:"Story"},e`
    <t-radiogroup id="stacked-label" label="Name" .inline=${!1}></t-radiogroup>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <t-radiogroup id="messages" label="Name" .messages=${["This is a message"]}></t-radiogroup>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <t-radiogroup id="error" label="Name" status="error" .checked=${!0}></t-radiogroup>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <t-radiogroup id="success" label="Name" status="success" .checked=${!0}></t-radiogroup>
  `))}u.isMDXComponent=!0;const m=()=>e`
      <t-radiogroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></t-radiogroup>
    `;(m.story={}).name="Simple",m.story.parameters={mdxSource:"html`\n      <t-radiogroup id=\"simple\" .options=${[{\n  label: 'Apple',\n  value: 'apple'\n}, {\n  label: 'Banana',\n  value: 'banana'\n}, {\n  label: 'Orange',\n  value: 'orange'\n}]}></t-radiogroup>\n    `"};const c=()=>e`
    <t-radiogroup id="wide" wide></t-radiogroup>
  `;(c.story={}).name="Wide",c.story.parameters={mdxSource:'html`\n    <t-radiogroup id="wide" wide></t-radiogroup>\n  `'};const g=()=>e`
    <t-radiogroup id="label" label="Name"></t-radiogroup>
  `;(g.story={}).name="Label",g.story.parameters={mdxSource:'html`\n    <t-radiogroup id="label" label="Name"></t-radiogroup>\n  `'};const b=()=>e`
    <t-radiogroup id="label" label="Name" reversed></t-radiogroup>
  `;(b.story={}).name="Reversed Label",b.story.parameters={mdxSource:'html`\n    <t-radiogroup id="label" label="Name" reversed></t-radiogroup>\n  `'};const y=()=>e`
    <t-radiogroup id="stacked-label" label="Name" .inline=${!1}></t-radiogroup>
  `;(y.story={}).name="Stacked Label",y.story.parameters={mdxSource:'html`\n    <t-radiogroup id="stacked-label" label="Name" .inline=${false}></t-radiogroup>\n  `'};const h=()=>e`
    <t-radiogroup id="messages" label="Name" .messages=${["This is a message"]}></t-radiogroup>
  `;(h.story={}).name="Messages",h.story.parameters={mdxSource:'html`\n    <t-radiogroup id="messages" label="Name" .messages=${[\'This is a message\']}></t-radiogroup>\n  `'};const S=()=>e`
    <t-radiogroup id="error" label="Name" status="error" .checked=${!0}></t-radiogroup>
  `;(S.story={}).name="Error",S.story.parameters={mdxSource:'html`\n    <t-radiogroup id="error" label="Name" status="error" .checked=${true}></t-radiogroup>\n  `'};const v=()=>e`
    <t-radiogroup id="success" label="Name" status="success" .checked=${!0}></t-radiogroup>
  `;(v.story={}).name="Success",v.story.parameters={mdxSource:'html`\n    <t-radiogroup id="success" label="Name" status="success" .checked=${true}></t-radiogroup>\n  `'};const x={title:"RadioGroup",parameters:{component:"t-radiogroup",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},N={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};x.parameters=x.parameters||{},x.parameters.docs=n({},x.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:N,mdxComponentMeta:x},a(u,null))});const k=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default x;export{k as __namedExportsOrder,S as error,g as label,h as messages,b as reversedLabel,m as simple,y as stackedLabel,v as success,c as wide};
//# sourceMappingURL=radiogroup.stories-309e49e0.js.map
