import{q as e,s as n,u as r,v as t,w as s,x as a,y as m}from"./storybook-preview-1dfbf81c.js";import{_ as o,a as i}from"./index-cb2823b7.js";function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}const u={};function p(r){let{components:o}=r,p=i(r,["components"]);return n("wrapper",l({},u,p,{components:o,mdxType:"MDXLayout"}),n(t,{title:"FormInput",parameters:{component:"z-forminput",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),n("h1",null,"FormInput"),n("p",null,"A form component for displaying a basic input in a form with some styling and behaviour improvements."),n("h2",null,"Features:"),n("ul",null,n("li",{parentName:"ul"},"a"),n("li",{parentName:"ul"},"b"),n("li",{parentName:"ul"},"...")),n("h2",null,"How to use"),n("h3",null,"Installation"),n("pre",null,n("code",l({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),n("pre",null,n("code",l({parentName:"pre"},{className:"language-js"}),"import { FormInput } from 'zephyr-elements';\n")),n(s,{withToolbar:!0,mdxType:"Preview"},n(a,{name:"Simple",mdxType:"Story"},e`
      <z-forminput id="simple"></z-forminput>
    `)),n("h2",null,"API"),n(m,{of:"z-forminput",mdxType:"Props"}),n("h2",null,"Variations"),n("h6",null,"Wide"),n(a,{name:"Wide",mdxType:"Story"},e`
    <z-forminput id="wide" wide></z-forminput>
  `),n("h6",null,"Label"),n(a,{name:"Label",mdxType:"Story"},e`
    <z-forminput id="label" label="Name"></z-forminput>
  `),n("h6",null,"Hint"),n(a,{name:"Hint",mdxType:"Story"},e`
    <z-forminput id="label" label="Name" hint="Enter a unique username"></z-forminput>
  `),n("h6",null,"Inline Label"),n(a,{name:"Inline Label",mdxType:"Story"},e`
    <z-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></z-forminput>
  `),n("h6",null,"Messages"),n(a,{name:"Messages",mdxType:"Story"},e`
    <z-forminput id="messages" label="Name" .messages=${["This is a message"]}></z-forminput>
  `),n("h6",null,"Error"),n(a,{name:"Error",mdxType:"Story"},e`
    <z-forminput id="error" label="Name" status="error"></z-forminput>
  `),n("h6",null,"Success"),n(a,{name:"Success",mdxType:"Story"},e`
    <z-forminput id="success" label="Name" status="success"></z-forminput>
  `))}p.isMDXComponent=!0;const d=()=>e`
      <z-forminput id="simple"></z-forminput>
    `;(d.story={}).name="Simple",d.story.parameters={mdxSource:'html`\n      <z-forminput id="simple"></z-forminput>\n    `'};const c=()=>e`
    <z-forminput id="wide" wide></z-forminput>
  `;(c.story={}).name="Wide",c.story.parameters={mdxSource:'html`\n    <z-forminput id="wide" wide></z-forminput>\n  `'};const f=()=>e`
    <z-forminput id="label" label="Name"></z-forminput>
  `;(f.story={}).name="Label",f.story.parameters={mdxSource:'html`\n    <z-forminput id="label" label="Name"></z-forminput>\n  `'};const b=()=>e`
    <z-forminput id="label" label="Name" hint="Enter a unique username"></z-forminput>
  `;(b.story={}).name="Hint",b.story.parameters={mdxSource:'html`\n    <z-forminput id="label" label="Name" hint="Enter a unique username"></z-forminput>\n  `'};const z=()=>e`
    <z-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></z-forminput>
  `;(z.story={}).name="Inline Label",z.story.parameters={mdxSource:'html`\n    <z-forminput id="inline-label" label="Name" hint="Enter a unique username" inline></z-forminput>\n  `'};const y=()=>e`
    <z-forminput id="messages" label="Name" .messages=${["This is a message"]}></z-forminput>
  `;(y.story={}).name="Messages",y.story.parameters={mdxSource:'html`\n    <z-forminput id="messages" label="Name" .messages=${[\'This is a message\']}></z-forminput>\n  `'};const h=()=>e`
    <z-forminput id="error" label="Name" status="error"></z-forminput>
  `;(h.story={}).name="Error",h.story.parameters={mdxSource:'html`\n    <z-forminput id="error" label="Name" status="error"></z-forminput>\n  `'};const x=()=>e`
    <z-forminput id="success" label="Name" status="success"></z-forminput>
  `;(x.story={}).name="Success",x.story.parameters={mdxSource:'html`\n    <z-forminput id="success" label="Name" status="success"></z-forminput>\n  `'};const N={title:"FormInput",parameters:{component:"z-forminput",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","messages","error","success"]},g={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Messages:"messages",Error:"error",Success:"success"};N.parameters=N.parameters||{},N.parameters.docs=o({},N.parameters.docs||{},{page:()=>n(r,{mdxStoryNameToKey:g,mdxComponentMeta:N},n(p,null))});const S=["simple","wide","label","hint","inlineLabel","messages","error","success"];export default N;export{S as __namedExportsOrder,h as error,b as hint,z as inlineLabel,f as label,y as messages,d as simple,x as success,c as wide};
//# sourceMappingURL=index.stories-c7b18b5f.js.map
