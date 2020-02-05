import{q as e,s,u as a,v as c,w as t,x as o,y as r}from"./storybook-preview-1dfbf81c.js";import{_ as l,a as m}from"./index-e7146c3c.js";function n(){return(n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}const b={};function d(a){let{components:l}=a,d=m(a,["components"]);return s("wrapper",n({},b,d,{components:l,mdxType:"MDXLayout"}),s(c,{title:"CheckBox",parameters:{component:"t-checkbox",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),s("h1",null,"CheckBox"),s("p",null,"A form component for displaying a checkbox input in a form with some styling and behaviour improvements."),s("h2",null,"Features:"),s("ul",null,s("li",{parentName:"ul"},"a"),s("li",{parentName:"ul"},"b"),s("li",{parentName:"ul"},"...")),s("h2",null,"How to use"),s("h3",null,"Installation"),s("pre",null,s("code",n({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),s("pre",null,s("code",n({parentName:"pre"},{className:"language-js"}),"import { CheckBox } from 'zephyr-elements';\n")),s(t,{withToolbar:!0,mdxType:"Preview"},s(o,{name:"Simple",mdxType:"Story"},e`
      <t-checkbox id="simple"></t-checkbox>
    `)),s("h2",null,"API"),s(r,{of:"t-checkbox",mdxType:"Props"}),s("h2",null,"Variations"),s("h6",null,"Wide"),s(o,{name:"Wide",mdxType:"Story"},e`
    <t-checkbox id="wide" wide></t-checkbox>
  `),s("h6",null,"Label"),s(o,{name:"Label",mdxType:"Story"},e`
    <t-checkbox id="label" label="Name"></t-checkbox>
  `),s("h6",null,"Reversed Label"),s(o,{name:"Reversed Label",mdxType:"Story"},e`
    <t-checkbox id="label" label="Name" reversed></t-checkbox>
  `),s("h6",null,"Stacked Label"),s(o,{name:"Stacked Label",mdxType:"Story"},e`
    <t-checkbox id="stacked-label" label="Name" .inline=${!1}></t-checkbox>
  `),s("h6",null,"Messages"),s(o,{name:"Messages",mdxType:"Story"},e`
    <t-checkbox id="messages" label="Name" .messages=${["This is a message"]}></t-checkbox>
  `),s("h6",null,"Error"),s(o,{name:"Error",mdxType:"Story"},e`
    <t-checkbox id="error" label="Name" status="error" .checked=${!0}></t-checkbox>
  `),s("h6",null,"Success"),s(o,{name:"Success",mdxType:"Story"},e`
    <t-checkbox id="success" label="Name" status="success" .checked=${!0}></t-checkbox>
  `))}d.isMDXComponent=!0;const h=()=>e`
      <t-checkbox id="simple"></t-checkbox>
    `;(h.story={}).name="Simple",h.story.parameters={mdxSource:'html`\n      <t-checkbox id="simple"></t-checkbox>\n    `'};const i=()=>e`
    <t-checkbox id="wide" wide></t-checkbox>
  `;(i.story={}).name="Wide",i.story.parameters={mdxSource:'html`\n    <t-checkbox id="wide" wide></t-checkbox>\n  `'};const x=()=>e`
    <t-checkbox id="label" label="Name"></t-checkbox>
  `;(x.story={}).name="Label",x.story.parameters={mdxSource:'html`\n    <t-checkbox id="label" label="Name"></t-checkbox>\n  `'};const k=()=>e`
    <t-checkbox id="label" label="Name" reversed></t-checkbox>
  `;(k.story={}).name="Reversed Label",k.story.parameters={mdxSource:'html`\n    <t-checkbox id="label" label="Name" reversed></t-checkbox>\n  `'};const p=()=>e`
    <t-checkbox id="stacked-label" label="Name" .inline=${!1}></t-checkbox>
  `;(p.story={}).name="Stacked Label",p.story.parameters={mdxSource:'html`\n    <t-checkbox id="stacked-label" label="Name" .inline=${false}></t-checkbox>\n  `'};const u=()=>e`
    <t-checkbox id="messages" label="Name" .messages=${["This is a message"]}></t-checkbox>
  `;(u.story={}).name="Messages",u.story.parameters={mdxSource:'html`\n    <t-checkbox id="messages" label="Name" .messages=${[\'This is a message\']}></t-checkbox>\n  `'};const y=()=>e`
    <t-checkbox id="error" label="Name" status="error" .checked=${!0}></t-checkbox>
  `;(y.story={}).name="Error",y.story.parameters={mdxSource:'html`\n    <t-checkbox id="error" label="Name" status="error" .checked=${true}></t-checkbox>\n  `'};const S=()=>e`
    <t-checkbox id="success" label="Name" status="success" .checked=${!0}></t-checkbox>
  `;(S.story={}).name="Success",S.story.parameters={mdxSource:'html`\n    <t-checkbox id="success" label="Name" status="success" .checked=${true}></t-checkbox>\n  `'};const N={title:"CheckBox",parameters:{component:"t-checkbox",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},g={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};N.parameters=N.parameters||{},N.parameters.docs=l({},N.parameters.docs||{},{page:()=>s(a,{mdxStoryNameToKey:g,mdxComponentMeta:N},s(d,null))});const L=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default N;export{L as __namedExportsOrder,y as error,x as label,u as messages,k as reversedLabel,h as simple,p as stackedLabel,S as success,i as wide};
//# sourceMappingURL=checkbox.stories-c60d9fed.js.map
