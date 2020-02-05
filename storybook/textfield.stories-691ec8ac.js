import{q as e,s as t,u as l,v as a,w as s,x as i,y as n}from"./storybook-preview-1dfbf81c.js";import{_ as r,a as d}from"./index-e7146c3c.js";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const o={};function u(l){let{components:r}=l,u=d(l,["components"]);return t("wrapper",m({},o,u,{components:r,mdxType:"MDXLayout"}),t(a,{title:"TextField",parameters:{component:"t-textfield",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),t("h1",null,"TextField"),t("p",null,"A form component for displaying a text input in a form with some styling and behaviour improvements."),t("h2",null,"Features:"),t("ul",null,t("li",{parentName:"ul"},"a"),t("li",{parentName:"ul"},"b"),t("li",{parentName:"ul"},"...")),t("h2",null,"How to use"),t("h3",null,"Installation"),t("pre",null,t("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),t("pre",null,t("code",m({parentName:"pre"},{className:"language-js"}),"import { TextField } from 'zephyr-elements';\n")),t(s,{withToolbar:!0,mdxType:"Preview"},t(i,{name:"Simple",mdxType:"Story"},e`
      <t-textfield id="simple"></t-textfield>
    `)),t("h2",null,"API"),t(n,{of:"t-textfield",mdxType:"Props"}),t("h2",null,"Variations"),t("h6",null,"Wide"),t(i,{name:"Wide",mdxType:"Story"},e`
    <t-textfield id="wide" wide></t-textfield>
  `),t("h6",null,"Label"),t(i,{name:"Label",mdxType:"Story"},e`
    <t-textfield id="label" label="Name"></t-textfield>
  `),t("h6",null,"Hint"),t(i,{name:"Hint",mdxType:"Story"},e`
    <t-textfield id="hint" label="Name" hint="Enter a unique username"></t-textfield>
  `),t("h6",null,"Inline Label"),t(i,{name:"Inline Label",mdxType:"Story"},e`
    <t-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></t-textfield>
  `),t("h6",null,"Placeholder"),t(i,{name:"Placeholder",mdxType:"Story"},e`
    <t-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></t-textfield>
  `),t("h6",null,"Messages"),t(i,{name:"Messages",mdxType:"Story"},e`
    <t-textfield id="messages" label="Name" .messages=${["This is a message"]}></t-textfield>
  `),t("h6",null,"Error"),t(i,{name:"Error",mdxType:"Story"},e`
    <t-textfield id="error" label="Name" status="error"></t-textfield>
  `),t("h6",null,"Success"),t(i,{name:"Success",mdxType:"Story"},e`
    <t-textfield id="success" label="Name" status="success"></t-textfield>
  `))}u.isMDXComponent=!0;const x=()=>e`
      <t-textfield id="simple"></t-textfield>
    `;(x.story={}).name="Simple",x.story.parameters={mdxSource:'html`\n      <t-textfield id="simple"></t-textfield>\n    `'};const p=()=>e`
    <t-textfield id="wide" wide></t-textfield>
  `;(p.story={}).name="Wide",p.story.parameters={mdxSource:'html`\n    <t-textfield id="wide" wide></t-textfield>\n  `'};const c=()=>e`
    <t-textfield id="label" label="Name"></t-textfield>
  `;(c.story={}).name="Label",c.story.parameters={mdxSource:'html`\n    <t-textfield id="label" label="Name"></t-textfield>\n  `'};const f=()=>e`
    <t-textfield id="hint" label="Name" hint="Enter a unique username"></t-textfield>
  `;(f.story={}).name="Hint",f.story.parameters={mdxSource:'html`\n    <t-textfield id="hint" label="Name" hint="Enter a unique username"></t-textfield>\n  `'};const h=()=>e`
    <t-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></t-textfield>
  `;(h.story={}).name="Inline Label",h.story.parameters={mdxSource:'html`\n    <t-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></t-textfield>\n  `'};const b=()=>e`
    <t-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></t-textfield>
  `;(b.story={}).name="Placeholder",b.story.parameters={mdxSource:'html`\n    <t-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></t-textfield>\n  `'};const y=()=>e`
    <t-textfield id="messages" label="Name" .messages=${["This is a message"]}></t-textfield>
  `;(y.story={}).name="Messages",y.story.parameters={mdxSource:'html`\n    <t-textfield id="messages" label="Name" .messages=${[\'This is a message\']}></t-textfield>\n  `'};const N=()=>e`
    <t-textfield id="error" label="Name" status="error"></t-textfield>
  `;(N.story={}).name="Error",N.story.parameters={mdxSource:'html`\n    <t-textfield id="error" label="Name" status="error"></t-textfield>\n  `'};const S=()=>e`
    <t-textfield id="success" label="Name" status="success"></t-textfield>
  `;(S.story={}).name="Success",S.story.parameters={mdxSource:'html`\n    <t-textfield id="success" label="Name" status="success"></t-textfield>\n  `'};const g={title:"TextField",parameters:{component:"t-textfield",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"]},T={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Placeholder:"placeholder",Messages:"messages",Error:"error",Success:"success"};g.parameters=g.parameters||{},g.parameters.docs=r({},g.parameters.docs||{},{page:()=>t(l,{mdxStoryNameToKey:T,mdxComponentMeta:g},t(u,null))});const w=["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"];export default g;export{w as __namedExportsOrder,N as error,f as hint,h as inlineLabel,c as label,y as messages,b as placeholder,x as simple,S as success,p as wide};
//# sourceMappingURL=textfield.stories-691ec8ac.js.map
