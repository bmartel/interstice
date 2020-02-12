import{q as e,s as a,u as o,v as r,w as s,x as l,y as c}from"./storybook-preview-1dfbf81c.js";import{_ as n,a as p}from"./index-cb2823b7.js";function t(){return(t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}const u={};function m(o){let{components:n}=o,m=p(o,["components"]);return a("wrapper",t({},u,m,{components:n,mdxType:"MDXLayout"}),a(r,{title:"CheckBoxGroup",parameters:{component:"z-checkboxgroup",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),a("h1",null,"CheckBoxGroup"),a("p",null,"A form component for displaying a checkboxgroup input in a form with some styling and behaviour improvements."),a("h2",null,"Features:"),a("ul",null,a("li",{parentName:"ul"},"a"),a("li",{parentName:"ul"},"b"),a("li",{parentName:"ul"},"...")),a("h2",null,"How to use"),a("h3",null,"Installation"),a("pre",null,a("code",t({parentName:"pre"},{className:"language-bash"}),"yarn add interstice\n")),a("pre",null,a("code",t({parentName:"pre"},{className:"language-js"}),"import { CheckBoxGroup } from 'interstice';\n")),a(s,{withToolbar:!0,mdxType:"Preview"},a(l,{name:"Simple",mdxType:"Story"},e`
      <z-checkboxgroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></z-checkboxgroup>
    `)),a("h2",null,"API"),a(c,{of:"z-checkboxgroup",mdxType:"Props"}),a("h2",null,"Variations"),a("h6",null,"Wide"),a(l,{name:"Wide",mdxType:"Story"},e`
    <z-checkboxgroup id="wide" wide></z-checkboxgroup>
  `),a("h6",null,"Label"),a(l,{name:"Label",mdxType:"Story"},e`
    <z-checkboxgroup id="label" label="Name"></z-checkboxgroup>
  `),a("h6",null,"Reversed Label"),a(l,{name:"Reversed Label",mdxType:"Story"},e`
    <z-checkboxgroup id="label" label="Name" reversed></z-checkboxgroup>
  `),a("h6",null,"Stacked Label"),a(l,{name:"Stacked Label",mdxType:"Story"},e`
    <z-checkboxgroup id="stacked-label" label="Name" .inline=${!1}></z-checkboxgroup>
  `),a("h6",null,"Messages"),a(l,{name:"Messages",mdxType:"Story"},e`
    <z-checkboxgroup id="messages" label="Name" .messages=${["This is a message"]}></z-checkboxgroup>
  `),a("h6",null,"Error"),a(l,{name:"Error",mdxType:"Story"},e`
    <z-checkboxgroup id="error" label="Name" status="error" .checked=${!0}></z-checkboxgroup>
  `),a("h6",null,"Success"),a(l,{name:"Success",mdxType:"Story"},e`
    <z-checkboxgroup id="success" label="Name" status="success" .checked=${!0}></z-checkboxgroup>
  `))}m.isMDXComponent=!0;const b=()=>e`
      <z-checkboxgroup id="simple" .options=${[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}></z-checkboxgroup>
    `;(b.story={}).name="Simple",b.story.parameters={mdxSource:"html`\n      <z-checkboxgroup id=\"simple\" .options=${[{\n  label: 'Apple',\n  value: 'apple'\n}, {\n  label: 'Banana',\n  value: 'banana'\n}, {\n  label: 'Orange',\n  value: 'orange'\n}]}></z-checkboxgroup>\n    `"};const d=()=>e`
    <z-checkboxgroup id="wide" wide></z-checkboxgroup>
  `;(d.story={}).name="Wide",d.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="wide" wide></z-checkboxgroup>\n  `'};const h=()=>e`
    <z-checkboxgroup id="label" label="Name"></z-checkboxgroup>
  `;(h.story={}).name="Label",h.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="label" label="Name"></z-checkboxgroup>\n  `'};const i=()=>e`
    <z-checkboxgroup id="label" label="Name" reversed></z-checkboxgroup>
  `;(i.story={}).name="Reversed Label",i.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="label" label="Name" reversed></z-checkboxgroup>\n  `'};const g=()=>e`
    <z-checkboxgroup id="stacked-label" label="Name" .inline=${!1}></z-checkboxgroup>
  `;(g.story={}).name="Stacked Label",g.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="stacked-label" label="Name" .inline=${false}></z-checkboxgroup>\n  `'};const x=()=>e`
    <z-checkboxgroup id="messages" label="Name" .messages=${["This is a message"]}></z-checkboxgroup>
  `;(x.story={}).name="Messages",x.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="messages" label="Name" .messages=${[\'This is a message\']}></z-checkboxgroup>\n  `'};const k=()=>e`
    <z-checkboxgroup id="error" label="Name" status="error" .checked=${!0}></z-checkboxgroup>
  `;(k.story={}).name="Error",k.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="error" label="Name" status="error" .checked=${true}></z-checkboxgroup>\n  `'};const z=()=>e`
    <z-checkboxgroup id="success" label="Name" status="success" .checked=${!0}></z-checkboxgroup>
  `;(z.story={}).name="Success",z.story.parameters={mdxSource:'html`\n    <z-checkboxgroup id="success" label="Name" status="success" .checked=${true}></z-checkboxgroup>\n  `'};const y={title:"CheckBoxGroup",parameters:{component:"z-checkboxgroup",options:{selectedPanel:"storybookjs/knobs/panel"}},includeStories:["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"]},S={Simple:"simple",Wide:"wide",Label:"label","Reversed Label":"reversedLabel","Stacked Label":"stackedLabel",Messages:"messages",Error:"error",Success:"success"};y.parameters=y.parameters||{},y.parameters.docs=n({},y.parameters.docs||{},{page:()=>a(o,{mdxStoryNameToKey:S,mdxComponentMeta:y},a(m,null))});const v=["simple","wide","label","reversedLabel","stackedLabel","messages","error","success"];export default y;export{v as __namedExportsOrder,k as error,h as label,x as messages,i as reversedLabel,b as simple,g as stackedLabel,z as success,d as wide};
//# sourceMappingURL=checkboxgroup.stories-7dfc9a40.js.map
