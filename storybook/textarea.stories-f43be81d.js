import{q as e,s as a,u as t,v as r,w as s,x as l,y as n}from"./storybook-preview-1dfbf81c.js";import{_ as i,a as o}from"./index-cb2823b7.js";function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const c={};function p(t){let{components:i}=t,p=o(t,["components"]);return a("wrapper",m({},c,p,{components:i,mdxType:"MDXLayout"}),a(r,{title:"TextArea",parameters:{component:"z-textarea",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"TextArea"),a("p",null,"A form component for displaying a text input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add interstice\n")),a("pre",null,a("code",m({parentName:"pre"},{className:"language-js"}),"import { TextArea } from 'interstice';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <z-textarea id="simple"></z-textarea>
    `)),a("h2",null,"API"),a(n,{of:"z-textarea",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <z-textarea id="wide" wide></z-textarea>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <z-textarea id="label" label="Description"></z-textarea>
  `),a("h6",null,"Hint"),a(l,{name:"Hint",mdxType:"Story"},e`
    <z-textarea id="hint" label="Description" hint="maximum 144 characters"></z-textarea>
  `),a("h6",null,"Inline Label"),a(l,{name:"Inline Label",mdxType:"Story"},e`
    <z-textarea id="inline-label" label="Description" inline></z-textarea>
  `),a("h6",null,"Placeholder"),a(l,{name:"Placeholder",mdxType:"Story"},e`
    <z-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></z-textarea>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <z-textarea id="messages" label="Description" .messages=${["This is a message"]}></z-textarea>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <z-textarea id="error" label="Description" status="error"></z-textarea>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <z-textarea id="success" label="Description" status="success"></z-textarea>
  `))}p.isMDXComponent=!0;const x=()=>e`
      <z-textarea id="simple"></z-textarea>
    `;(x.story={}).name="Simple",x.story.parameters={mdxSource:'html`\n      <z-textarea id="simple"></z-textarea>\n    `'};const d=()=>e`
    <z-textarea id="wide" wide></z-textarea>
  `;(d.story={}).name="Wide",d.story.parameters={mdxSource:'html`\n    <z-textarea id="wide" wide></z-textarea>\n  `'};const u=()=>e`
    <z-textarea id="label" label="Description"></z-textarea>
  `;(u.story={}).name="Label",u.story.parameters={mdxSource:'html`\n    <z-textarea id="label" label="Description"></z-textarea>\n  `'};const h=()=>e`
    <z-textarea id="hint" label="Description" hint="maximum 144 characters"></z-textarea>
  `;(h.story={}).name="Hint",h.story.parameters={mdxSource:'html`\n    <z-textarea id="hint" label="Description" hint="maximum 144 characters"></z-textarea>\n  `'};const z=()=>e`
    <z-textarea id="inline-label" label="Description" inline></z-textarea>
  `;(z.story={}).name="Inline Label",z.story.parameters={mdxSource:'html`\n    <z-textarea id="inline-label" label="Description" inline></z-textarea>\n  `'};const b=()=>e`
    <z-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></z-textarea>
  `;(b.story={}).name="Placeholder",b.story.parameters={mdxSource:'html`\n    <z-textarea id="placeholder" label="Description" hint="maximum 144 characters" placeholder="important text goes here ..."></z-textarea>\n  `'};const y=()=>e`
    <z-textarea id="messages" label="Description" .messages=${["This is a message"]}></z-textarea>
  `;(y.story={}).name="Messages",y.story.parameters={mdxSource:'html`\n    <z-textarea id="messages" label="Description" .messages=${[\'This is a message\']}></z-textarea>\n  `'};const g=()=>e`
    <z-textarea id="error" label="Description" status="error"></z-textarea>
  `;(g.story={}).name="Error",g.story.parameters={mdxSource:'html`\n    <z-textarea id="error" label="Description" status="error"></z-textarea>\n  `'};const S=()=>e`
    <z-textarea id="success" label="Description" status="success"></z-textarea>
  `;(S.story={}).name="Success",S.story.parameters={mdxSource:'html`\n    <z-textarea id="success" label="Description" status="success"></z-textarea>\n  `'};const D={title:"TextArea",parameters:{component:"z-textarea",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"]},T={Simple:"simple",Wide:"wide",Label:"label",Hint:"hint","Inline Label":"inlineLabel",Placeholder:"placeholder",Messages:"messages",Error:"error",Success:"success"};D.parameters=D.parameters||{},D.parameters.docs=i({},D.parameters.docs||{},{page:()=>a(t,{mdxStoryNameToKey:T,mdxComponentMeta:D},a(p,null))});const w=["simple","wide","label","hint","inlineLabel","placeholder","messages","error","success"];export default D;export{w as __namedExportsOrder,g as error,h as hint,z as inlineLabel,u as label,y as messages,b as placeholder,x as simple,S as success,d as wide};
//# sourceMappingURL=textarea.stories-f43be81d.js.map
