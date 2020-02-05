import{q as e,s as a,u as r,v as n,w as s,x as t,y as l}from"./storybook-preview-1dfbf81c.js";import{_ as m,a as i}from"./index-cb2823b7.js";function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const p={};function u(r){let{components:m}=r,u=i(r,["components"]);return a("wrapper",o({},p,u,{components:m,mdxType:"MDXLayout"}),a(n,{title:"Range",parameters:{component:"z-range",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"Range"),a("p",null,"A form component for displaying a range input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add zephyr-elements\n")),a("pre",null,a("code",o({parentName:"pre"},{className:"language-js"}),"import { Range } from 'zephyr-elements';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(t,{name:"Simple",mdxType:"Story"},e`
      <z-range id="simple"></z-range>
    `)),a("h2",null,"API"),a(l,{of:"z-range",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(t,{name:"Wide",mdxType:"Story"},e`
    <z-range id="wide" wide></z-range>
  `),a("h6",null,"Label"),a(t,{name:"Label",mdxType:"Story"},e`
    <z-range id="label" label="Temperature"></z-range>
  `),a("h6",null,"Hint"),a(t,{name:"Hint",mdxType:"Story"},e`
    <z-range id="hint" label="Temperature" hint="What is the weather like?"></z-range>
  `),a("h6",null,"Inline Label"),a(t,{name:"Inline Label",mdxType:"Story"},e`
    <z-range id="inline-label" label="Temperature" inline></z-range>
  `),a("h6",null,"Messages"),a(t,{name:"Messages",mdxType:"Story"},e`
    <z-range id="messages" label="Temperature" .messages=${["This is a message"]}></z-range>
  `),a("h6",null,"Error"),a(t,{name:"Error",mdxType:"Story"},e`
    <z-range id="error" label="Temperature" status="error" .checked=${!0}></z-range>
  `),a("h6",null,"Success"),a(t,{name:"Success",mdxType:"Story"},e`
    <z-range id="success" label="Temperature" status="success" .checked=${!0}></z-range>
  `))}u.isMDXComponent=!0;const g=()=>e`
      <z-range id="simple"></z-range>
    `;(g.story={}).name="Simple",g.story.parameters={mdxSource:'html`\n      <z-range id="simple"></z-range>\n    `'};const c=()=>e`
    <z-range id="wide" wide></z-range>
  `;(c.story={}).name="Wide",c.story.parameters={mdxSource:'html`\n    <z-range id="wide" wide></z-range>\n  `'};const d=()=>e`
    <z-range id="label" label="Temperature"></z-range>
  `;(d.story={}).name="Label",d.story.parameters={mdxSource:'html`\n    <z-range id="label" label="Temperature"></z-range>\n  `'};const h=()=>e`
    <z-range id="hint" label="Temperature" hint="What is the weather like?"></z-range>
  `;(h.story={}).name="Hint",h.story.parameters={mdxSource:'html`\n    <z-range id="hint" label="Temperature" hint="What is the weather like?"></z-range>\n  `'};const z=()=>e`
    <z-range id="inline-label" label="Temperature" inline></z-range>
  `;(z.story={}).name="Inline Label",z.story.parameters={mdxSource:'html`\n    <z-range id="inline-label" label="Temperature" inline></z-range>\n  `'};const b=()=>e`
    <z-range id="messages" label="Temperature" .messages=${["This is a message"]}></z-range>
  `;(b.story={}).name="Messages",b.story.parameters={mdxSource:'html`\n    <z-range id="messages" label="Temperature" .messages=${[\'This is a message\']}></z-range>\n  `'};const y=()=>e`
    <z-range id="error" label="Temperature" status="error" .checked=${!0}></z-range>
  `;(y.story={}).name="Error",y.story.parameters={mdxSource:'html`\n    <z-range id="error" label="Temperature" status="error" .checked=${true}></z-range>\n  `'};const T=()=>e`
    <z-range id="success" label="Temperature" status="success" .checked=${!0}></z-range>
  `;(T.story={}).name="Success",T.story.parameters={mdxSource:'html`\n    <z-range id="success" label="Temperature" status="success" .checked=${true}></z-range>\n  `'};const x={title:"Range",parameters:{component:"z-range",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","messages","error","success"]},S={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Messages:"messages",Error:"error",Success:"success"};x.parameters=x.parameters||{},x.parameters.docs=m({},x.parameters.docs||{},{page:()=>a(r,{mdxStoryNameToKey:S,mdxComponentMeta:x},a(u,null))});const w=["simple","wide","label","hint","inlineLabel","messages","error","success"];export default x;export{w as __namedExportsOrder,y as error,h as hint,z as inlineLabel,d as label,b as messages,g as simple,T as success,c as wide};
//# sourceMappingURL=range.stories-562719b7.js.map
