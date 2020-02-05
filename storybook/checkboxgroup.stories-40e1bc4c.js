import{q as e,s as a,u as o,v as r,w as s,x as l,y as c}from"./storybook-preview-1dfbf81c.js";import{_ as t,a as n}from"./index-e7146c3c.js";function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}const u={};function m(o){let{components:t}=o,m=n(o,["components"]);return a("wrapper",p({},u,m,{components:t,mdxType:"MDXLayout"}),a(r,{title:"CheckBoxGroup",parameters:{component:"t-checkboxgroup",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"CheckBoxGroup"),a("p",null,"A form component for displaying a checkboxgroup input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",p({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",p({parentName:"pre"},{className:"language-js"}),"import { CheckBoxGroup } from 'zephyr-elements';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <t-checkboxgroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></t-checkboxgroup>
    `)),a("h2",null,"API"),a(c,{of:"t-checkboxgroup",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <t-checkboxgroup id="wide" wide></t-checkboxgroup>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <t-checkboxgroup id="label" label="Name"></t-checkboxgroup>
  `),a("h6",null,"Reversed Label"),a(l,{name:"Reversed Label",mdxType:"Story"},e`
    <t-checkboxgroup id="label" label="Name" reversed></t-checkboxgroup>
  `),a("h6",null,"Stacked Label"),a(l,{name:"Stacked Label",mdxType:"Story"},e`
    <t-checkboxgroup id="stacked-label" label="Name" .inline=${!1}></t-checkboxgroup>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <t-checkboxgroup id="messages" label="Name" .messages=${["This is a message"]}></t-checkboxgroup>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <t-checkboxgroup id="error" label="Name" status="error" .checked=${!0}></t-checkboxgroup>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <t-checkboxgroup id="success" label="Name" status="success" .checked=${!0}></t-checkboxgroup>
  `))}m.isMDXComponent=!0;const b=()=>e`
      <t-checkboxgroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></t-checkboxgroup>
    `;(b.story={}).name="Simple",b.story.parameters={mdxSource:"html`\n      <t-checkboxgroup id=\"simple\" .options=${[{\n  label: 'Apple',\n  value: 'apple'\n}, {\n  label: 'Banana',\n  value: 'banana'\n}, {\n  label: 'Orange',\n  value: 'orange'\n}]}></t-checkboxgroup>\n    `"};const d=()=>e`
    <t-checkboxgroup id="wide" wide></t-checkboxgroup>
  `;(d.story={}).name="Wide",d.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="wide" wide></t-checkboxgroup>\n  `'};const h=()=>e`
    <t-checkboxgroup id="label" label="Name"></t-checkboxgroup>
  `;(h.story={}).name="Label",h.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="label" label="Name"></t-checkboxgroup>\n  `'};const i=()=>e`
    <t-checkboxgroup id="label" label="Name" reversed></t-checkboxgroup>
  `;(i.story={}).name="Reversed Label",i.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="label" label="Name" reversed></t-checkboxgroup>\n  `'};const g=()=>e`
    <t-checkboxgroup id="stacked-label" label="Name" .inline=${!1}></t-checkboxgroup>
  `;(g.story={}).name="Stacked Label",g.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="stacked-label" label="Name" .inline=${false}></t-checkboxgroup>\n  `'};const x=()=>e`
    <t-checkboxgroup id="messages" label="Name" .messages=${["This is a message"]}></t-checkboxgroup>
  `;(x.story={}).name="Messages",x.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="messages" label="Name" .messages=${[\'This is a message\']}></t-checkboxgroup>\n  `'};const k=()=>e`
    <t-checkboxgroup id="error" label="Name" status="error" .checked=${!0}></t-checkboxgroup>
  `;(k.story={}).name="Error",k.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="error" label="Name" status="error" .checked=${true}></t-checkboxgroup>\n  `'};const y=()=>e`
    <t-checkboxgroup id="success" label="Name" status="success" .checked=${!0}></t-checkboxgroup>
  `;(y.story={}).name="Success",y.story.parameters={mdxSource:'html`\n    <t-checkboxgroup id="success" label="Name" status="success" .checked=${true}></t-checkboxgroup>\n  `'};const S={title:"CheckBoxGroup",parameters:{component:"t-checkboxgroup",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},v={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};S.parameters=S.parameters||{},S.parameters.docs=t({},S.parameters.docs||{},{page:()=>a(o,{mdxStoryNameToKey:v,mdxComponentMeta:S},a(m,null))});const N=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default S;export{N as __namedExportsOrder,k as error,h as label,x as messages,i as reversedLabel,b as simple,g as stackedLabel,y as success,d as wide};
//# sourceMappingURL=checkboxgroup.stories-40e1bc4c.js.map
