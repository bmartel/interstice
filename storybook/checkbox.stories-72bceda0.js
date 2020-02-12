import{q as e,s,u as a,v as c,w as o,x as r,y as l}from"./storybook-preview-1dfbf81c.js";import{_ as t,a as m}from"./index-cb2823b7.js";function n(){return(n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}const b={};function d(a){let{components:t}=a,d=m(a,["components"]);return s("wrapper",n({},b,d,{components:t,mdxType:"MDXLayout"}),s(c,{title:"CheckBox",parameters:{component:"z-checkbox",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),s("h1",null,"CheckBox"),s("p",null,"A form component for displaying a checkbox input in a form with some styling and behaviour improvements."),s("h2",null,"Features:"),s("ul",null,s("li",{parentName:"ul"},"a"),s("li",{parentName:"ul"},"b"),s("li",{parentName:"ul"},"...")),s("h2",null,"How to use"),s("h3",null,"Installation"),s("pre",null,s("code",n({parentName:"pre"},{className:"language-bash"}),"yarn add interstice\n")),s("pre",null,s("code",n({parentName:"pre"},{className:"language-js"}),"import { CheckBox } from 'interstice';\n")),s(o,{withToolbar:!0,mdxType:"Preview"},s(r,{name:"Simple",mdxType:"Story"},e`
      <z-checkbox id="simple"></z-checkbox>
    `)),s("h2",null,"API"),s(l,{of:"z-checkbox",mdxType:"Props"}),s("h2",null,"Variations"),s("h6",null,"Wide"),s(r,{name:"Wide",mdxType:"Story"},e`
    <z-checkbox id="wide" wide></z-checkbox>
  `),s("h6",null,"Label"),s(r,{name:"Label",mdxType:"Story"},e`
    <z-checkbox id="label" label="Name"></z-checkbox>
  `),s("h6",null,"Reversed Label"),s(r,{name:"Reversed Label",mdxType:"Story"},e`
    <z-checkbox id="label" label="Name" reversed></z-checkbox>
  `),s("h6",null,"Stacked Label"),s(r,{name:"Stacked Label",mdxType:"Story"},e`
    <z-checkbox id="stacked-label" label="Name" .inline=${!1}></z-checkbox>
  `),s("h6",null,"Messages"),s(r,{name:"Messages",mdxType:"Story"},e`
    <z-checkbox id="messages" label="Name" .messages=${["This is a message"]}></z-checkbox>
  `),s("h6",null,"Error"),s(r,{name:"Error",mdxType:"Story"},e`
    <z-checkbox id="error" label="Name" status="error" .checked=${!0}></z-checkbox>
  `),s("h6",null,"Success"),s(r,{name:"Success",mdxType:"Story"},e`
    <z-checkbox id="success" label="Name" status="success" .checked=${!0}></z-checkbox>
  `))}d.isMDXComponent=!0;const h=()=>e`
      <z-checkbox id="simple"></z-checkbox>
    `;(h.story={}).name="Simple",h.story.parameters={mdxSource:'html`\n      <z-checkbox id="simple"></z-checkbox>\n    `'};const i=()=>e`
    <z-checkbox id="wide" wide></z-checkbox>
  `;(i.story={}).name="Wide",i.story.parameters={mdxSource:'html`\n    <z-checkbox id="wide" wide></z-checkbox>\n  `'};const x=()=>e`
    <z-checkbox id="label" label="Name"></z-checkbox>
  `;(x.story={}).name="Label",x.story.parameters={mdxSource:'html`\n    <z-checkbox id="label" label="Name"></z-checkbox>\n  `'};const k=()=>e`
    <z-checkbox id="label" label="Name" reversed></z-checkbox>
  `;(k.story={}).name="Reversed Label",k.story.parameters={mdxSource:'html`\n    <z-checkbox id="label" label="Name" reversed></z-checkbox>\n  `'};const p=()=>e`
    <z-checkbox id="stacked-label" label="Name" .inline=${!1}></z-checkbox>
  `;(p.story={}).name="Stacked Label",p.story.parameters={mdxSource:'html`\n    <z-checkbox id="stacked-label" label="Name" .inline=${false}></z-checkbox>\n  `'};const u=()=>e`
    <z-checkbox id="messages" label="Name" .messages=${["This is a message"]}></z-checkbox>
  `;(u.story={}).name="Messages",u.story.parameters={mdxSource:'html`\n    <z-checkbox id="messages" label="Name" .messages=${[\'This is a message\']}></z-checkbox>\n  `'};const z=()=>e`
    <z-checkbox id="error" label="Name" status="error" .checked=${!0}></z-checkbox>
  `;(z.story={}).name="Error",z.story.parameters={mdxSource:'html`\n    <z-checkbox id="error" label="Name" status="error" .checked=${true}></z-checkbox>\n  `'};const y=()=>e`
    <z-checkbox id="success" label="Name" status="success" .checked=${!0}></z-checkbox>
  `;(y.story={}).name="Success",y.story.parameters={mdxSource:'html`\n    <z-checkbox id="success" label="Name" status="success" .checked=${true}></z-checkbox>\n  `'};const S={title:"CheckBox",parameters:{component:"z-checkbox",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},N={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};S.parameters=S.parameters||{},S.parameters.docs=t({},S.parameters.docs||{},{page:()=>s(a,{mdxStoryNameToKey:N,mdxComponentMeta:S},s(d,null))});const g=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default S;export{g as __namedExportsOrder,z as error,x as label,u as messages,k as reversedLabel,h as simple,p as stackedLabel,y as success,i as wide};
//# sourceMappingURL=checkbox.stories-72bceda0.js.map
