import{q as e,s as a,u as r,v as o,w as s,x as l,y as n}from"./storybook-preview-1dfbf81c.js";import{_ as d,a as i}from"./index-cb2823b7.js";function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const t={};function u(r){let{components:d}=r,u=i(r,["components"]);return a("wrapper",p({},t,u,{components:d,mdxType:"MDXLayout"}),a(o,{title:"RadioGroup",parameters:{component:"z-radiogroup",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"RadioGroup"),a("p",null,"A form component for displaying a radiogroup input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",p({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",p({parentName:"pre"},{className:"language-js"}),"import { RadioGroup } from 'zephyr-elements';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <z-radiogroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></z-radiogroup>
    `)),a("h2",null,"API"),a(n,{of:"z-radiogroup",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <z-radiogroup id="wide" wide></z-radiogroup>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <z-radiogroup id="label" label="Name"></z-radiogroup>
  `),a("h6",null,"Reversed Label"),a(l,{name:"Reversed Label",mdxType:"Story"},e`
    <z-radiogroup id="label" label="Name" reversed></z-radiogroup>
  `),a("h6",null,"Stacked Label"),a(l,{name:"Stacked Label",mdxType:"Story"},e`
    <z-radiogroup id="stacked-label" label="Name" .inline=${!1}></z-radiogroup>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <z-radiogroup id="messages" label="Name" .messages=${["This is a message"]}></z-radiogroup>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <z-radiogroup id="error" label="Name" status="error" .checked=${!0}></z-radiogroup>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <z-radiogroup id="success" label="Name" status="success" .checked=${!0}></z-radiogroup>
  `))}u.isMDXComponent=!0;const m=()=>e`
      <z-radiogroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></z-radiogroup>
    `;(m.story={}).name="Simple",m.story.parameters={mdxSource:"html`\n      <z-radiogroup id=\"simple\" .options=${[{\n  label: 'Apple',\n  value: 'apple'\n}, {\n  label: 'Banana',\n  value: 'banana'\n}, {\n  label: 'Orange',\n  value: 'orange'\n}]}></z-radiogroup>\n    `"};const c=()=>e`
    <z-radiogroup id="wide" wide></z-radiogroup>
  `;(c.story={}).name="Wide",c.story.parameters={mdxSource:'html`\n    <z-radiogroup id="wide" wide></z-radiogroup>\n  `'};const g=()=>e`
    <z-radiogroup id="label" label="Name"></z-radiogroup>
  `;(g.story={}).name="Label",g.story.parameters={mdxSource:'html`\n    <z-radiogroup id="label" label="Name"></z-radiogroup>\n  `'};const b=()=>e`
    <z-radiogroup id="label" label="Name" reversed></z-radiogroup>
  `;(b.story={}).name="Reversed Label",b.story.parameters={mdxSource:'html`\n    <z-radiogroup id="label" label="Name" reversed></z-radiogroup>\n  `'};const z=()=>e`
    <z-radiogroup id="stacked-label" label="Name" .inline=${!1}></z-radiogroup>
  `;(z.story={}).name="Stacked Label",z.story.parameters={mdxSource:'html`\n    <z-radiogroup id="stacked-label" label="Name" .inline=${false}></z-radiogroup>\n  `'};const y=()=>e`
    <z-radiogroup id="messages" label="Name" .messages=${["This is a message"]}></z-radiogroup>
  `;(y.story={}).name="Messages",y.story.parameters={mdxSource:'html`\n    <z-radiogroup id="messages" label="Name" .messages=${[\'This is a message\']}></z-radiogroup>\n  `'};const h=()=>e`
    <z-radiogroup id="error" label="Name" status="error" .checked=${!0}></z-radiogroup>
  `;(h.story={}).name="Error",h.story.parameters={mdxSource:'html`\n    <z-radiogroup id="error" label="Name" status="error" .checked=${true}></z-radiogroup>\n  `'};const S=()=>e`
    <z-radiogroup id="success" label="Name" status="success" .checked=${!0}></z-radiogroup>
  `;(S.story={}).name="Success",S.story.parameters={mdxSource:'html`\n    <z-radiogroup id="success" label="Name" status="success" .checked=${true}></z-radiogroup>\n  `'};const v={title:"RadioGroup",parameters:{component:"z-radiogroup",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},x={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};v.parameters=v.parameters||{},v.parameters.docs=d({},v.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:x,mdxComponentMeta:v},a(u,null))});const N=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default v;export{N as __namedExportsOrder,h as error,g as label,y as messages,b as reversedLabel,m as simple,z as stackedLabel,S as success,c as wide};
//# sourceMappingURL=radiogroup.stories-3c8608b0.js.map
