import{W as e,h as c,t as o,s as d,b as l}from"./vendor.9197f5fa.js";import"./index.4c7a3ac0.js";import"./admin-docs.33d13590.js";import"./index.a0325b2c.js";import"./container.6d9a1e70.js";import"./___vite-browser-external_commonjs-proxy.6940f468.js";var n=Object.defineProperty,a=Object.getOwnPropertyDescriptor;let t=class extends e{install(){}render(){return c("code-demo-container",null,c("code-demo",{title:"复选框",describe:"基础演示",code:"\n```jsx\n<o-checkbox label='Label'> </o-checkbox>\n\n<o-checkbox checked={true} label='checked'> </o-checkbox>\n\n<o-checkbox id=\"myCheckbox\" indeterminate={true} label='indeterminate'> </o-checkbox>\n\n<o-checkbox disabled={true} label='disabled'> </o-checkbox>\n\n<o-checkbox disabled={true} checked={true} label='disabled checked={true}'> </o-checkbox>\n```\n          "},c("div",{slot:"demo",class:o`flex flex-col justify-around  px-5 py-5`},c("div",null,c("o-checkbox",{label:"Label"}," ")),c("div",null,c("o-checkbox",{checked:!0,label:"checked"}," ")),c("div",null,c("o-checkbox",{id:"myCheckbox",indeterminate:!0,label:"indeterminate"}," ")),c("div",null,c("o-checkbox",{disabled:!0,label:"disabled"}," ")),c("div",null,c("o-checkbox",{disabled:!0,checked:!0,label:"disabled checked"}," ")))))}};t.css=d.target,t=((e,c,o,d)=>{for(var l,t=d>1?void 0:d?a(c,o):c,b=e.length-1;b>=0;b--)(l=e[b])&&(t=(d?l(c,o,t):l(t))||t);return d&&t&&n(c,o,t),t})([l("checkbox-component")],t);export{t as default};