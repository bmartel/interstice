import{q as e,s as t,u as l,v as a,w as s,x as i,y as n}from"./storybook-preview-1dfbf81c.js";import{_ as r,a as d}from"./index-cb2823b7.js";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const o={};function u(l){let{components:r}=l,u=d(l,["components"]);return t("wrapper",m({},o,u,{components:r,mdxType:"MDXLayout"}),t(a,{title:"TextField",parameters:{component:"z-textfield",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),t("h1",null,"TextField"),t("p",null,"A form component for displaying a text input in a form with some styling and behaviour improvements."),t("h2",null,"Features:"),t("ul",null,t("li",{parentName:"ul"},"a"),t("li",{parentName:"ul"},"b"),t("li",{parentName:"ul"},"...")),t("h2",null,"How to use"),t("h3",null,"Installation"),t("pre",null,t("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),t("pre",null,t("code",m({parentName:"pre"},{className:"language-js"}),"import { TextField } from 'zephyr-elements';\n")),t(s,{withToolbar:!0,mdxType:"Preview"},t(i,{name:"Simple",mdxType:"Story"},e`
      <z-textfield id="simple"></z-textfield>
    `)),t("h2",null,"API"),t(n,{of:"z-textfield",mdxType:"Props"}),t("h2",null,"Variations"),t("h6",null,"Wide"),t(i,{name:"Wide",mdxType:"Story"},e`
    <z-textfield id="wide" wide></z-textfield>
  `),t("h6",null,"Label"),t(i,{name:"Label",mdxType:"Story"},e`
    <z-textfield id="label" label="Name"></z-textfield>
  `),t("h6",null,"Hint"),t(i,{name:"Hint",mdxType:"Story"},e`
    <z-textfield id="hint" label="Name" hint="Enter a unique username"></z-textfield>
  `),t("h6",null,"Inline Label"),t(i,{name:"Inline Label",mdxType:"Story"},e`
    <z-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></z-textfield>
  `),t("h6",null,"Placeholder"),t(i,{name:"Placeholder",mdxType:"Story"},e`
    <z-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></z-textfield>
  `),t("h6",null,"Messages"),t(i,{name:"Messages",mdxType:"Story"},e`
    <z-textfield id="messages" label="Name" .messages=${["This is a message"]}></z-textfield>
  `),t("h6",null,"Error"),t(i,{name:"Error",mdxType:"Story"},e`
    <z-textfield id="error" label="Name" status="error"></z-textfield>
  `),t("h6",null,"Success"),t(i,{name:"Success",mdxType:"Story"},e`
    <z-textfield id="success" label="Name" status="success"></z-textfield>
  `))}u.isMDXComponent=!0;const x=()=>e`
      <z-textfield id="simple"></z-textfield>
    `;(x.story={}).name="Simple",x.story.parameters={mdxSource:'html`\n      <z-textfield id="simple"></z-textfield>\n    `'};const p=()=>e`
    <z-textfield id="wide" wide></z-textfield>
  `;(p.story={}).name="Wide",p.story.parameters={mdxSource:'html`\n    <z-textfield id="wide" wide></z-textfield>\n  `'};const c=()=>e`
    <z-textfield id="label" label="Name"></z-textfield>
  `;(c.story={}).name="Label",c.story.parameters={mdxSource:'html`\n    <z-textfield id="label" label="Name"></z-textfield>\n  `'};const f=()=>e`
    <z-textfield id="hint" label="Name" hint="Enter a unique username"></z-textfield>
  `;(f.story={}).name="Hint",f.story.parameters={mdxSource:'html`\n    <z-textfield id="hint" label="Name" hint="Enter a unique username"></z-textfield>\n  `'};const b=()=>e`
    <z-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></z-textfield>
  `;(b.story={}).name="Inline Label",b.story.parameters={mdxSource:'html`\n    <z-textfield id="inline-label" label="Name" hint="Enter a unique username" inline></z-textfield>\n  `'};const h=()=>e`
    <z-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></z-textfield>
  `;(h.story={}).name="Placeholder",h.story.parameters={mdxSource:'html`\n    <z-textfield id="placeholder" label="Name" hint="Enter a unique username" placeholder="Bobby Tables"></z-textfield>\n  `'};const z=()=>e`
    <z-textfield id="messages" label="Name" .messages=${["This is a message"]}></z-textfield>
  `;(z.story={}).name="Messages",z.story.parameters={mdxSource:'html`\n    <z-textfield id="messages" label="Name" .messages=${[\'This is a message\']}></z-textfield>\n  `'};const y=()=>e`
    <z-textfield id="error" label="Name" status="error"></z-textfield>
  `;(y.story={}).name="Error",y.story.parameters={mdxSource:'html`\n    <z-textfield id="error" label="Name" status="error"></z-textfield>\n  `'};const N=()=>e`
    <z-textfield id="success" label="Name" status="success"></z-textfield>
  `;(N.story={}).name="Success",N.story.parameters={mdxSource:'html`\n    <z-textfield id="success" label="Name" status="success"></z-textfield>\n  `'};const S={title:"TextField",parameters:{component:"z-textfield",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"]},g={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Placeholder:"placeholder",Messages:"messages",Error:"error",Success:"success"};S.parameters=S.parameters||{},S.parameters.docs=r({},S.parameters.docs||{},{page:()=>t(l,{mdxStoryNameToKey:g,mdxComponentMeta:S},t(u,null))});const T=["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"];export default S;export{T as __namedExportsOrder,y as error,f as hint,b as inlineLabel,c as label,z as messages,h as placeholder,x as simple,N as success,p as wide};
//# sourceMappingURL=textfield.stories-bb5c6114.js.map
