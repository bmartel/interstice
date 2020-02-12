import{q as e,s as a,u as r,v as s,w as o,x as l,y as d}from"./storybook-preview-1dfbf81c.js";import{_ as i,a as t}from"./index-cb2823b7.js";function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}const n={};function c(r){let{components:i}=r,c=t(r,["components"]);return a("wrapper",m({},n,c,{components:i,mdxType:"MDXLayout"}),a(s,{title:"Radio",parameters:{component:"z-radio",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"Radio"),a("p",null,"A form component for displaying a radio input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add interstice\n")),a("pre",null,a("code",m({parentName:"pre"},{className:"language-js"}),"import { Radio } from 'interstice';\n")),a(o,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <z-radio id="simple"></z-radio>
    `)),a("h2",null,"API"),a(d,{of:"z-radio",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <z-radio id="wide" wide></z-radio>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <z-radio id="label" label="Name"></z-radio>
  `),a("h6",null,"Reversed Label"),a(l,{name:"Reversed Label",mdxType:"Story"},e`
    <z-radio id="label" label="Name" reversed></z-radio>
  `),a("h6",null,"Stacked Label"),a(l,{name:"Stacked Label",mdxType:"Story"},e`
    <z-radio id="stacked-label" label="Name" .inline=${!1}></z-radio>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <z-radio id="messages" label="Name" .messages=${["This is a message"]}></z-radio>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <z-radio id="error" label="Name" status="error" .checked=${!0}></z-radio>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <z-radio id="success" label="Name" status="success" .checked=${!0}></z-radio>
  `))}c.isMDXComponent=!0;const p=()=>e`
      <z-radio id="simple"></z-radio>
    `;(p.story={}).name="Simple",p.story.parameters={mdxSource:'html`\n      <z-radio id="simple"></z-radio>\n    `'};const u=()=>e`
    <z-radio id="wide" wide></z-radio>
  `;(u.story={}).name="Wide",u.story.parameters={mdxSource:'html`\n    <z-radio id="wide" wide></z-radio>\n  `'};const b=()=>e`
    <z-radio id="label" label="Name"></z-radio>
  `;(b.story={}).name="Label",b.story.parameters={mdxSource:'html`\n    <z-radio id="label" label="Name"></z-radio>\n  `'};const z=()=>e`
    <z-radio id="label" label="Name" reversed></z-radio>
  `;(z.story={}).name="Reversed Label",z.story.parameters={mdxSource:'html`\n    <z-radio id="label" label="Name" reversed></z-radio>\n  `'};const y=()=>e`
    <z-radio id="stacked-label" label="Name" .inline=${!1}></z-radio>
  `;(y.story={}).name="Stacked Label",y.story.parameters={mdxSource:'html`\n    <z-radio id="stacked-label" label="Name" .inline=${false}></z-radio>\n  `'};const h=()=>e`
    <z-radio id="messages" label="Name" .messages=${["This is a message"]}></z-radio>
  `;(h.story={}).name="Messages",h.story.parameters={mdxSource:'html`\n    <z-radio id="messages" label="Name" .messages=${[\'This is a message\']}></z-radio>\n  `'};const S=()=>e`
    <z-radio id="error" label="Name" status="error" .checked=${!0}></z-radio>
  `;(S.story={}).name="Error",S.story.parameters={mdxSource:'html`\n    <z-radio id="error" label="Name" status="error" .checked=${true}></z-radio>\n  `'};const x=()=>e`
    <z-radio id="success" label="Name" status="success" .checked=${!0}></z-radio>
  `;(x.story={}).name="Success",x.story.parameters={mdxSource:'html`\n    <z-radio id="success" label="Name" status="success" .checked=${true}></z-radio>\n  `'};const N={title:"Radio",parameters:{component:"z-radio",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},g={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};N.parameters=N.parameters||{},N.parameters.docs=i({},N.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:g,mdxComponentMeta:N},a(c,null))});const k=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default N;export{k as __namedExportsOrder,S as error,b as label,h as messages,z as reversedLabel,p as simple,y as stackedLabel,x as success,u as wide};
//# sourceMappingURL=radio.stories-511776a1.js.map
