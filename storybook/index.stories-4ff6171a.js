import{q as e,s as t,u as n,v as r,w as s,x as a,y as m}from"./storybook-preview-1dfbf81c.js";import{_ as o,a as i}from"./index-e7146c3c.js";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const u={};function p(n){let{components:o}=n,p=i(n,["components"]);return t("wrapper",l({},u,p,{components:o,mdxType:"MDXLayout"}),t(r,{title:"FormInput",parameters:{component:"t-forminput",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),t("h1",null,"FormInput"),t("p",null,"A form component for displaying a basic input in a form with some styling and behaviour improvements."),t("h2",null,"Features:"),t("ul",null,t("li",{parentName:"ul"},"a"),t("li",{parentName:"ul"},"b"),t("li",{parentName:"ul"},"...")),t("h2",null,"How to use"),t("h3",null,"Installation"),t("pre",null,t("code",l({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),t("pre",null,t("code",l({parentName:"pre"},{className:"language-js"}),"import { FormInput } from 'zephyr-elements';\n")),t(s,{withToolbar:!0,mdxType:"Preview"},t(a,{name:"Simple",mdxType:"Story"},e`
      <t-forminput id="simple"></t-forminput>
    `)),t("h2",null,"API"),t(m,{of:"t-forminput",mdxType:"Props"}),t("h2",null,"Variations"),t("h6",null,"Wide"),t(a,{name:"Wide",mdxType:"Story"},e`
    <t-forminput id="wide" wide></t-forminput>
  `),t("h6",null,"Label"),t(a,{name:"Label",mdxType:"Story"},e`
    <t-forminput id="label" label="Name"></t-forminput>
  `),t("h6",null,"Hint"),t(a,{name:"Hint",mdxType:"Story"},e`
    <t-forminput id="label" label="Name" hint="Enter a unique username"></t-forminput>
  `),t("h6",null,"Inline Label"),t(a,{name:"Inline Label",mdxType:"Story"},e`
    <t-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></t-forminput>
  `),t("h6",null,"Messages"),t(a,{name:"Messages",mdxType:"Story"},e`
    <t-forminput id="messages" label="Name" .messages=${["This is a message"]}></t-forminput>
  `),t("h6",null,"Error"),t(a,{name:"Error",mdxType:"Story"},e`
    <t-forminput id="error" label="Name" status="error"></t-forminput>
  `),t("h6",null,"Success"),t(a,{name:"Success",mdxType:"Story"},e`
    <t-forminput id="success" label="Name" status="success"></t-forminput>
  `))}p.isMDXComponent=!0;const d=()=>e`
      <t-forminput id="simple"></t-forminput>
    `;(d.story={}).name="Simple",d.story.parameters={mdxSource:'html`\n      <t-forminput id="simple"></t-forminput>\n    `'};const c=()=>e`
    <t-forminput id="wide" wide></t-forminput>
  `;(c.story={}).name="Wide",c.story.parameters={mdxSource:'html`\n    <t-forminput id="wide" wide></t-forminput>\n  `'};const f=()=>e`
    <t-forminput id="label" label="Name"></t-forminput>
  `;(f.story={}).name="Label",f.story.parameters={mdxSource:'html`\n    <t-forminput id="label" label="Name"></t-forminput>\n  `'};const b=()=>e`
    <t-forminput id="label" label="Name" hint="Enter a unique username"></t-forminput>
  `;(b.story={}).name="Hint",b.story.parameters={mdxSource:'html`\n    <t-forminput id="label" label="Name" hint="Enter a unique username"></t-forminput>\n  `'};const y=()=>e`
    <t-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></t-forminput>
  `;(y.story={}).name="Inline Label",y.story.parameters={mdxSource:'html`\n    <t-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></t-forminput>\n  `'};const h=()=>e`
    <t-forminput id="messages" label="Name" .messages=${["This is a message"]}></t-forminput>
  `;(h.story={}).name="Messages",h.story.parameters={mdxSource:'html`\n    <t-forminput id="messages" label="Name" .messages=${[\'This is a message\']}></t-forminput>\n  `'};const x=()=>e`
    <t-forminput id="error" label="Name" status="error"></t-forminput>
  `;(x.story={}).name="Error",x.story.parameters={mdxSource:'html`\n    <t-forminput id="error" label="Name" status="error"></t-forminput>\n  `'};const N=()=>e`
    <t-forminput id="success" label="Name" status="success"></t-forminput>
  `;(N.story={}).name="Success",N.story.parameters={mdxSource:'html`\n    <t-forminput id="success" label="Name" status="success"></t-forminput>\n  `'};const g={title:"FormInput",parameters:{component:"t-forminput",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","messages","error","success"]},S={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Messages:"messages",Error:"error",Success:"success"};g.parameters=g.parameters||{},g.parameters.docs=o({},g.parameters.docs||{},{page:()=>t(n,{mdxStoryNameToKey:S,mdxComponentMeta:g},t(p,null))});const w=["simple","wide","label","hint","inlineLabel","messages","error","success"];export default g;export{w as __namedExportsOrder,x as error,b as hint,y as inlineLabel,f as label,h as messages,d as simple,N as success,c as wide};
//# sourceMappingURL=index.stories-4ff6171a.js.map
