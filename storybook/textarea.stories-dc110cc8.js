import{q as e,s as t,u as a,v as r,w as s,x as l,y as n}from"./storybook-preview-1dfbf81c.js";import{_ as i,a as o}from"./index-e7146c3c.js";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const c={};function p(a){let{components:i}=a,p=o(a,["components"]);return t("wrapper",m({},c,p,{components:i,mdxType:"MDXLayout"}),t(r,{title:"TextArea",parameters:{component:"t-textarea",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),t("h1",null,"TextArea"),t("p",null,"A form component for displaying a text input in a form with some styling and behaviour improvements."),t("h2",null,"Features:"),t("ul",null,t("li",{parentName:"ul"},"a"),t("li",{parentName:"ul"},"b"),t("li",{parentName:"ul"},"...")),t("h2",null,"How to use"),t("h3",null,"Installation"),t("pre",null,t("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),t("pre",null,t("code",m({parentName:"pre"},{className:"language-js"}),"import { TextArea } from 'zephyr-elements';\n")),t(s,{withToolbar:!0,mdxType:"Preview"},t(l,{name:"Simple",mdxType:"Story"},e`
      <t-textarea id="simple"></t-textarea>
    `)),t("h2",null,"API"),t(n,{of:"t-textarea",mdxType:"Props"}),t("h2",null,"Variations"),t("h6",null,"Wide"),t(l,{name:"Wide",mdxType:"Story"},e`
    <t-textarea id="wide" wide></t-textarea>
  `),t("h6",null,"Label"),t(l,{name:"Label",mdxType:"Story"},e`
    <t-textarea id="label" label="Description"></t-textarea>
  `),t("h6",null,"Hint"),t(l,{name:"Hint",mdxType:"Story"},e`
    <t-textarea id="hint" label="Description" hint="maximum 144 characters"></t-textarea>
  `),t("h6",null,"Inline Label"),t(l,{name:"Inline Label",mdxType:"Story"},e`
    <t-textarea id="inline-label" label="Description" inline></t-textarea>
  `),t("h6",null,"Placeholder"),t(l,{name:"Placeholder",mdxType:"Story"},e`
    <t-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></t-textarea>
  `),t("h6",null,"Messages"),t(l,{name:"Messages",mdxType:"Story"},e`
    <t-textarea id="messages" label="Description" .messages=${["This is a message"]}></t-textarea>
  `),t("h6",null,"Error"),t(l,{name:"Error",mdxType:"Story"},e`
    <t-textarea id="error" label="Description" status="error"></t-textarea>
  `),t("h6",null,"Success"),t(l,{name:"Success",mdxType:"Story"},e`
    <t-textarea id="success" label="Description" status="success"></t-textarea>
  `))}p.isMDXComponent=!0;const x=()=>e`
      <t-textarea id="simple"></t-textarea>
    `;(x.story={}).name="Simple",x.story.parameters={mdxSource:'html`\n      <t-textarea id="simple"></t-textarea>\n    `'};const d=()=>e`
    <t-textarea id="wide" wide></t-textarea>
  `;(d.story={}).name="Wide",d.story.parameters={mdxSource:'html`\n    <t-textarea id="wide" wide></t-textarea>\n  `'};const u=()=>e`
    <t-textarea id="label" label="Description"></t-textarea>
  `;(u.story={}).name="Label",u.story.parameters={mdxSource:'html`\n    <t-textarea id="label" label="Description"></t-textarea>\n  `'};const h=()=>e`
    <t-textarea id="hint" label="Description" hint="maximum 144 characters"></t-textarea>
  `;(h.story={}).name="Hint",h.story.parameters={mdxSource:'html`\n    <t-textarea id="hint" label="Description" hint="maximum 144 characters"></t-textarea>\n  `'};const y=()=>e`
    <t-textarea id="inline-label" label="Description" inline></t-textarea>
  `;(y.story={}).name="Inline Label",y.story.parameters={mdxSource:'html`\n    <t-textarea id="inline-label" label="Description" inline></t-textarea>\n  `'};const b=()=>e`
    <t-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></t-textarea>
  `;(b.story={}).name="Placeholder",b.story.parameters={mdxSource:'html`\n    <t-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></t-textarea>\n  `'};const g=()=>e`
    <t-textarea id="messages" label="Description" .messages=${["This is a message"]}></t-textarea>
  `;(g.story={}).name="Messages",g.story.parameters={mdxSource:'html`\n    <t-textarea id="messages" label="Description" .messages=${[\'This is a message\']}></t-textarea>\n  `'};const S=()=>e`
    <t-textarea id="error" label="Description" status="error"></t-textarea>
  `;(S.story={}).name="Error",S.story.parameters={mdxSource:'html`\n    <t-textarea id="error" label="Description" status="error"></t-textarea>\n  `'};const D=()=>e`
    <t-textarea id="success" label="Description" status="success"></t-textarea>
  `;(D.story={}).name="Success",D.story.parameters={mdxSource:'html`\n    <t-textarea id="success" label="Description" status="success"></t-textarea>\n  `'};const T={title:"TextArea",parameters:{component:"t-textarea",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"]},w={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Placeholder:"placeholder",Messages:"messages",Error:"error",Success:"success"};T.parameters=T.parameters||{},T.parameters.docs=i({},T.parameters.docs||{},{page:()=>t(a,{mdxStoryNameToKey:w,mdxComponentMeta:T},t(p,null))});const f=["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"];export default T;export{f as __namedExportsOrder,S as error,h as hint,y as inlineLabel,u as label,g as messages,b as placeholder,x as simple,D as success,d as wide};
//# sourceMappingURL=textarea.stories-dc110cc8.js.map
