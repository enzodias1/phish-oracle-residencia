"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{99554:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(31461),a=n(2784);n(13980);var r=n(34490),i=n(99673),o=n(55403),s=n(84546),c=n(66457);let d=(0,i.ZP)(s.Z)`
  border: solid 1px ${e=>(0,o.uu)("lighter")(e)};
  border-radius: 2px;
`;var u=n(33055);let m=e=>{let{onChange:t,onClearInput:n,label:i}=e,o=(0,l.Z)(e,["onChange","onClearInput","label"]),[s,m]=(0,a.useState)(""),p=e=>{m(e.target.value),t(e)},g=e=>{m(""),n(e)};return a.createElement(d,o,a.createElement(c.xJ,null,a.createElement(r.olm,{color:"#818181","data-testid":"icon-search"}),a.createElement("form",null,a.createElement(u.Z,{text:"pesquisar por filtro",htmlFor:"search-filter"}),a.createElement(c.II,{id:`search-filter ${i}`,value:s,onChange:p,placeholder:`Busque por ${i}`})),s&&a.createElement(r.B86,{color:"#818181",onClick:g,title:"Limpar texto"})))};m.defaultProps={onChange:()=>({}),onClearInput:()=>({}),label:""};var p=m},1729:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(2784);n(13980);var a=n(34490),r=n(99673),i=n(8341);let o=(0,r.ZP)(i.Z)({gridTemplateColumns:"auto 1fr",alignItems:"center",padding:"6px 12px"}),s=r.ZP.div`
  margin-right: 7px;
`,c=r.ZP.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  text-decoration: none;
`,d=r.ZP.div``;var u=n(63825);let m=({item:e,onClick:t,children:n})=>{let{label:r,selected:i}=e,[m,p]=(0,l.useState)(i);return(0,l.useEffect)(()=>(p(i),()=>{p(!1)}),[i]),l.createElement("li",null,l.createElement(c,{onClick:n=>t(n,e),"aria-label":`Filtrar por ${e.name}`,"data-testid":"filter-item"},l.createElement(o,null,l.createElement(s,{role:"checkbox","aria-checked":i,"aria-labelledby":r},m?l.createElement(a.nvx,{"aria-hidden":"true"}):l.createElement(a.XE8,{"aria-hidden":"true"})),l.createElement(d,{children:n||l.createElement(u.Z,{fontSize:1,id:r},r)}))))};m.defaultProps={item:{selected:!1},children:null,onClick:()=>({})};var p=m},33055:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(31461),a=n(2784);n(13980);var r=n(99673);let i=r.ZP.label`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,o=e=>{let{text:t}=e,n=(0,l.Z)(e,["text"]);return a.createElement(i,n,t)};o.defaultProps={text:""};var s=o},2490:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784);n(13980);var a=n(99673),r=n(19527),i=n(84546);let o=a.iv`
  overflow-y: hidden;

  > *:not(:first-child) {
    margin-left: 8px;
  }
`,s=a.iv`
  overflow-x: hidden;

  > *:not(:first-child) {
    margin-top: 8px;
  }
`,c=({directionType:e})=>"row"===e?o:s,d=(0,a.ZP)(r.Z).attrs(({directionType:e})=>({pb:"1em",flexDirection:e}))`
  ${({directionType:e})=>"column"===e&&`
      padding: 1em;
  `}

  ${c};
`,u=(0,a.ZP)(i.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  text-decoration: underline;
  cursor: pointer;
`;var m=n(39471);let p=({items:e,onItemClick:t,directionType:n,limitItems:a})=>{let[r,i]=(0,l.useState)(a),o=e.length,s=(0,l.useMemo)(()=>a?e.slice(0,r):e,[a,e,r]);return l.createElement(d,{"data-testid":"hot-links",directionType:n},s.map((e,a)=>l.createElement(m.Z,{key:a,item:e,onClick:t,directionType:n,borderColor:e.borderColor})),!!a&&r<o&&l.createElement(u,{onClick:()=>i(o),"data-testid":"show-more",role:"button"},"Ver mais"))};p.defaultProps={items:[],directionType:"row",limitItems:null,onItemClick(){}};var g=p},15309:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(2784);n(13980);var a=n(99673);let r=a.ZP.div`
  border: 0;
  background: transparent;
  display: flex;
`;var i=function({onClick:e,children:t}){return l.createElement(r,{onClick(t){var n,l;e(t)}},t)}},97769:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(71180),o=n(99673),s=n(55403),c=n(68054),d=n(63825);let u=(0,o.ZP)(d.Z).attrs(({isList:e,sellerPage:t})=>({fontSize:[e||t?0:1],fontWeight:"regular",lineHeight:["fontSize","display"]}))`
  ${c.cp}
  margin-bottom: ${()=>(0,s.R)("space.2")}px;
`,m=o.ZP.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,p=e=>{let{information:t,isList:n,minimumInstallment:o,format:s,sellerPage:c,showTotalAmount:d}=e,p=(0,a.Z)(e,["information","isList","minimumInstallment","format","sellerPage","showTotalAmount"]),{quantity:g,amount:f,paymentMethodDescription:h,totalAmount:b}=t,v=(0,i.oB)({value:f}),x=(0,i.oB)({value:b}),E=`${g}x de ${v} ${h}`,Z=`${x} em ${g}x de ${v} ${h}`,$=`${g} vez de ${v} ${h}`,P=`${b} em ${g} vezes de ${v} ${h}`,y="full"===s||"short"!==s&&g>1&&!n;return 0===o?r.createElement(r.Fragment,null,r.createElement(u,(0,l.Z)({isList:n,sellerPage:c,"data-testid":"installment","aria-hidden":"true"},p),d&&y?Z:E),r.createElement(m,null,d&&y?P:$)):r.createElement(r.Fragment,null,r.createElement(u,(0,l.Z)({isList:n,sellerPage:c,"data-testid":"installment","aria-hidden":"true"},p),d?Z:E),r.createElement(m,null,d?P:$))};p.defaultProps={information:{amount:"",isList:!1,sellerPage:!1,format:"",paymentMethodDescription:"",quantity:"",totalAmount:""},minimumInstallment:1};var g=p},78012:function(e,t,n){n.d(t,{Z:function(){return B}});var l=n(7896),a=n(31461),r=n(2784);n(13980);let i=(e,t,n)=>Array.isArray(e)&&"string"==typeof n&&n?null==e?void 0:e.filter(e=>{var l,a;return null==(l=e[n])?void 0:null==(a=l.toUpperCase())?void 0:a.includes(t.toUpperCase())}):e,o=(e,t)=>t instanceof Function?null==e?void 0:e.sort(t):e;var s=({searchTerm:e,dataSource:t,sortBy:n,searchProperty:l})=>o(i(t,e,l),n);let c=(0,r.createContext)(!1),d=e=>{let{children:t,value:{disableGutters:n}}=e,l=(0,a.Z)(e.value,["disableGutters"]);return r.createElement(c.Provider,{value:Object.assign({basis:n?32:40,gutters:n?0:3},l)},t)},u=()=>(0,r.useContext)(c);var m=n(99673),p=n(55403),g=n(81572),f=n(88699),h=n(87043);let b=({gutters:e,basis:t=0,inset:n=0,props:l})=>(0,p.R)(`space.${e}`)(l)+parseInt(t,10)*Number(n),v=({horizontal:e})=>e&&m.iv`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
    justify-content: space-between;
  `,x=m.iv`
  > *:not(:last-child) {
    border-bottom: ${(0,p.R)("borders.0")};
  }
`,E=m.ZP.li({listStyle:"none",position:"relative"}),Z=(0,m.ZP)(g.Z).attrs(e=>{let{inset:t,basis:n,gutters:l,content:r,horizontal:i}=e,o=(0,a.Z)(e,["inset","basis","gutters","content","horizontal"]);return Object.assign({position:"relative",gap:0,rowGap:2,px:0,py:r?2:0,pl:t?b({gutters:l,basis:n,inset:t,props:o}):b({gutters:l,props:o}),pr:b({gutters:l,props:o})},i&&{textAlign:"center",pl:0,pr:0},o)})`
  cursor: pointer;
  ${({selectable:e})=>e&&m.iv`
      &:hover {
        background: ${(0,p.dF)("darker")};
      }
    `};

  ${({horizontal:e})=>e&&m.iv`
      > span {
        position: unset;
        transform: unset;
        left: 0;
      }
    `}

  ${({divided:e,isCollapsed:t})=>e&&!t&&m.iv`
      border-top: ${(0,p.R)("borders.0")};
    `}
`,$=(0,m.ZP)(h.rj)`
  ${({divided:e})=>e&&x}
  ${v}
`,P=(0,m.ZP)(f.Z)`
  ${({divided:e})=>e&&x}
  ${v}
`,y=e=>{let{as:t,children:n,color:i,fill:o,startIcon:s,endIcon:c,onClick:d}=e,m=(0,a.Z)(e,["as","children","color","fill","startIcon","endIcon","onClick"]),{variant:p,divided:g,scale:f,gutters:h,isCollapsed:b}=u();return r.createElement(Z,(0,l.Z)({forwardedAs:t,variant:p,startIcon:s,endIcon:c,gutters:h,scale:f,color:i,fill:o,divided:g,isCollapsed:b,onClick:d,"data-testid":"list-action"},m),n)};y.defaultProps={as:"div",centered:!1,children:null,fontWeight:"medium",gap:1},y.displayName="ListAction";var k=n(19527),w=n(18281);let C=e=>{let t=t=>{let{as:n}=t,i=(0,a.Z)(t,["as"]),{type:o}=u();return["ul","ol"].includes(o)&&"a"===n?r.createElement(E,null,r.createElement(e,(0,l.Z)({as:n},i))):r.createElement(e,(0,l.Z)({as:["ul","ol"].includes(o)?"li":"div"},i))};return t.defaultProps={as:""},t},z=e=>{let{as:t,checked:n,children:i,content:o,defaultChecked:s,description:c,endIcon:d,fill:m,value:p,onClick:g}=e,f=(0,a.Z)(e,["as","checked","children","content","defaultChecked","description","endIcon","fill","value","onClick"]),[h,b]=(0,r.useState)(n),{variant:v,scale:x,basis:E,gutters:$,selectable:P}=u(),y=e=>{b(!h),g(e)};return(0,r.useEffect)(()=>{b(n)},[n]),r.createElement(Z,(0,l.Z)({forwardedAs:t,variant:v,startIcon:r.createElement(k.Z,{width:E},r.createElement(w.Z,{checked:h,defaultChecked:s,value:p})),endIcon:d,description:c,content:o,selectable:P,scale:x,gutters:$,fill:m,onClick:y,"data-testid":"list-checkbox"},f),i)};z.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onClick(){}};var S=C(z);let I=e=>{let{as:t,children:n}=e,i=(0,a.Z)(e,["as","children","onClick"]),{variant:o,scale:s,gutters:c}=u();return r.createElement(Z,(0,l.Z)({forwardedAs:t,variant:o,scale:s,gutters:c,"data-testid":"list-header"},i),n)};I.defaultProps={children:null,fontSize:2,fontWeight:"medium"},I.displayName="ListHeader";var R=C(I),O=n(34490);let F=e=>{let{as:t,children:n,content:i,description:o,endIcon:s,fill:c,inset:d,onClick:m,startIcon:p}=e,g=(0,a.Z)(e,["as","children","content","description","endIcon","fill","inset","onClick","startIcon"]),{variant:f,basis:h,scale:b,gutters:v,selectable:x,horizontal:E}=u();return r.createElement(Z,(0,l.Z)({forwardedAs:t,variant:f,startIcon:p&&!d&&r.createElement(k.Z,{width:h},"string"==typeof p?r.createElement(O.JO$,{name:p,color:c,fill:c}):p),endIcon:s&&("string"==typeof s?r.createElement(k.Z,{width:h,justifyContent:"flex-end"},r.createElement(O.JO$,{name:s,color:c,fill:c})):s),description:o,content:i,selectable:x,gutters:v,basis:h,inset:d,scale:b,fill:c,horizontal:E,onClick:m,"data-testid":"list-item"},g),n)};F.defaultProps={children:null,endIcon:"",fill:"currentColor",inset:!1,startIcon:""},F.displayName="ListItem";var j=C(F),M=n(70715);let L=e=>{let{as:t,children:n,href:i,label:o,value:s,selected:c,description:d,endIcon:m,fill:p,onChange:g,position:f,eventLabel:h,filterLabel:b}=e,v=(0,a.Z)(e,["as","children","href","label","value","selected","description","endIcon","fill","selectedOption","onChange","position","eventLabel","filterLabel"]),{name:x,variant:E,basis:$,scale:P,gutters:y,selectable:w}=u(),C=e=>{e.preventDefault(),g(e,{label:h,href:i,value:s,selected:c,filterLabel:b,position:f})};return r.createElement(Z,(0,l.Z)({forwardedAs:t,variant:E,onClick:C,startIcon:r.createElement(k.Z,{width:$},r.createElement(M.Z,{readOnly:!0,name:x,label:o,checked:c,value:s,width:1})),endIcon:m,description:d,selectable:w,scale:P,gutters:y,fill:p,"data-testid":"list-radio-group",href:i},v),n)};L.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onChange(){}};var A=C(L);let D=({children:e,dataSource:t,renderItem:n,searchProperty:l,searchTerm:a,sortBy:i})=>{let o=(0,r.useMemo)(()=>s({dataSource:t,searchProperty:l,searchTerm:a,sortBy:i}),[t,a]);return Array.isArray(o)&&n instanceof Function?null==o?void 0:o.map((e,t)=>n(Object.assign({key:t},e))):e},W=e=>{let{as:t,children:n,dataSource:i,disableGutters:o,horizontal:s,divided:c,name:u,renderItem:m,scale:p,searchProperty:g,searchTerm:f,selectable:h,sortBy:b,variant:v,renderAction:x,trigger:E,collapsedIn:Z,collapse:y}=e,k=(0,a.Z)(e,["as","children","dataSource","disableGutters","horizontal","divided","name","renderItem","scale","searchProperty","searchTerm","selectable","sortBy","variant","renderAction","trigger","collapsedIn","collapse"]),[w,C]=(0,r.useState)(i),[z,S]=(0,r.useState)(f);return(0,r.useEffect)(()=>{S(f)},[f]),(0,r.useEffect)(()=>{C(i)},[JSON.stringify(i)]),r.createElement(d,{value:{divided:c,disableGutters:o,horizontal:s,name:u,selectable:h,scale:p,variant:v,type:t,isCollapsed:E}},r.createElement(y?P:$,(0,l.Z)({forwardedAs:t,divided:c,trigger:E,collapsedIn:Z,horizontal:s,"data-testid":"list"},k),r.createElement(D,{searchTerm:z,dataSource:w,sortBy:b,searchProperty:g,renderItem:m,children:n})),x)};W.defaultProps={as:"ul",children:null,dataSource:[],disableGutters:!1,divided:!1,scale:"medium",searchProperty:"",searchTerm:"",selectable:!1,variant:"transparent",horizontal:!1},W.Collapse=e=>r.createElement(W,(0,l.Z)({collapse:!0},e)),W.Header=R,W.Item=j,W.Action=y,W.Checkbox=S,W.Radio=A,W.Collapse.displayName="ListCollapse";var B=W},33359:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784);n(13980);var a=n(34490),r=n(99673),i=n(19527);let o=(0,r.ZP)(i.Z)`
  cursor: pointer;
`,s=[{id:"gallery",label:"Galeria",icon:l.createElement(a.qiR,{height:"20",color:"#818181"})},{id:"list",label:"Lista",icon:l.createElement(a.OWX,{height:"18",color:"#818181"})},{id:"miniature",label:"Miniatura",icon:l.createElement(a.DxU,{height:"16",color:"#818181"})}];function c({onChange:e,defaultMode:t}){let[n,a]=(0,l.useState)(s.find(e=>e.id===t)),[r,i]=(0,l.useState)(s.findIndex(e=>e.id===t)+1);return(0,l.useEffect)(()=>{if(n.id!==t){let l=s.findIndex(e=>e.id===t);i(l+1),a(s[l]);let r=Object.assign({},s[l]);e(r)}},[t]),l.createElement(o,{onClick:function(){(function(e){if(e>=s.length-1){i(0);return}i(e+1)})(r),a(s[r]);let t=Object.assign({},s[r]);delete t.icon,e(t)},p:1,"data-testid":"display-type"},n.label," ",n.icon)}c.defaultProps={defaultMode:"gallery"};var d=c},41065:function(e,t,n){n.d(t,{Z:function(){return x}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(71180),o=n(99673),s=n(55403),c=n(84546),d=n(7029);let u=o.ZP.li`
  display: flex;
  align-items: center;
  padding: ${e=>(0,s.R)(`space.${e.desktopMode?1:2}`)(e)}px;
  ${e=>e.desktopMode&&o.iv`
      cursor: pointer;
      ${({borderBottom:e})=>e&&o.iv`
          border-bottom: 1px solid #e5e5e5;
        `}

      :hover {
        background-color: #dcebf4;
      }
    `}
`,m=(0,o.ZP)(c.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)(`fontSizes.${e.desktopMode?0:2}`)(e)}px;
  color: ${e=>(0,s.uu)("scratched")(e)};
`,p=(0,o.ZP)(c.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,s.uu)("primary")(e)};
  font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  text-align: initial;
`,g=(0,o.ZP)(d.Z)``,f=o.ZP.div`
  width: 59px;
  height: 44px;
`,h=(e,t,n)=>{var l;let a=null==e?void 0:null==(l=e.toLowerCase())?void 0:l.trim(),i=t.toLowerCase().indexOf(a);return 0===i?r.createElement("span",{key:n},a,r.createElement("strong",null,t.substring(i+a.length,t.length))):r.createElement("span",{key:n},r.createElement("strong",null,t.substring(0,i)),a,r.createElement("strong",null,t.substring(i+a.length,t.length)))},b=({query:e,suggestionItem:t})=>{if(e===t.term)return e;let n=e.split(" "),l=t.term.split(" ");return l.filter(e=>Boolean(e)).map((e,t)=>{let l=n.find(t=>e.toLowerCase().includes(t.toLowerCase()));return l?l===e?e:h(l,e,t):r.createElement("strong",{key:t.toString()},e)}).reduce((e,t)=>[e," ",t])},v=e=>{let{item:t,term:n,desktopMode:o,onSearchSubmit:s}=e,c=(0,a.Z)(e,["item","term","desktopMode","onSearchSubmit"]),[d,h]=(0,r.useState)(n);return(0,r.useEffect)(()=>{h(n)},[n]),r.createElement(u,(0,l.Z)({"data-testid":"suggestion-item",key:t.count||t.id,onClick:s,desktopMode:o},c),t.img&&r.createElement(f,null,r.createElement(g,{src:t.img})),c.prefix&&!t.img?c.prefix:r.createElement(r.Fragment,null),r.createElement("div",null,r.createElement(m,(0,l.Z)({"data-testid":"suggestion-text",desktopMode:o},c),b({query:d,suggestionItem:t}),o&&t.count?` (${t.count})`:""),t.price&&r.createElement(p,{"data-testid":"suggestion-price"},(0,i.oB)({value:t.price}))))};var x=v;v.defaultProps={item:{},desktopMode:!1,borderBottom:!1,onSearchSubmit:null}},97949:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(34490),o=n(99673),s=n(10200);let c=(0,o.ZP)(s.Z).attrs(e=>Object.assign({},e))`
  width: ${e=>e.width||"90px"};
  height: ${e=>e.height||"90px"};
  background: url(${e=>e.mediaUrl}) no-repeat center lightgray;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=e=>{let{children:t,media:n,onClick:o,width:s,height:d}=e,u=(0,a.Z)(e,["children","media","onClick","width","height"]),{mediaType:m,mediaUrl:p}=n;return r.createElement(c,(0,l.Z)({"data-testid":`media-card-${p}`,mediaUrl:p,onClick:o,width:s,height:d},u),"video"===m&&r.createElement(i.JO$,{name:"VideoCircle",width:"40px",height:"40px"}),t)};var u=d},48919:function(e,t,n){n.d(t,{Z:function(){return C}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(99673),o=n(68054),s=n(55403),c=n(10200),d=n(19527);let u=i.ZP.nav`
  background-color: ${e=>(0,s.dF)("white")(e)};
  width: fit-content;
  padding: 20px;
`,m=i.ZP.ul`
  list-style: none;
  display: flex;
`,p=i.ZP.li.attrs(()=>({mr:3}))`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: max-content;

  ${o.Dh}
`,g=(0,i.ZP)(c.Z)``,f=(0,i.ZP)(d.Z).attrs(e=>Object.assign({color:"text.primary",m:0},e))``,h=({data:e,onMenuFooterClick:t})=>{let{linksList:n}=e;return r.createElement(u,{"data-testid":"header-menu-footer-elem"},n?r.createElement(m,null,n.map((e,n)=>r.createElement(p,{key:`footer-item-${n}`},e.img&&e.img.component&&r.createElement(f,{"data-testid":"image-elem",width:e.img.width},e.img.component),r.createElement(g,{onClick:n=>t(n,e),href:e.url,px:2},e.label)))):r.createElement(r.Fragment,null))};h.defaultProps={data:{},onMenuFooterClick:()=>({})};let b=i.ZP.div.attrs(e=>Object.assign({bg:"background.white"},e))`
  border-bottom: ${e=>e.borderColor?`5px solid ${e.borderColor}`:""};
  max-height: fit-content;
  width: fit-content;
  ${s.$_}
`,v=i.ZP.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`,x=i.ZP.div.attrs(e=>Object.assign({p:3},e))`
  display: flex;
  flex-direction: column;
  ${o.Dh}
`,E=i.ZP.div.attrs(e=>Object.assign({m:3},e))`
  /* let external project to define banner's width */
  ${o.bK}
  ${o.Dh}
`,Z=i.ZP.ul`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${e=>e.lines}, auto);
`,$=i.ZP.li.attrs(e=>Object.assign({mr:5},e))`
  list-style: none;
  line-height: 24px;
  ${o.Dh}
`,P=(0,i.ZP)(c.Z)``,y=i.ZP.li.attrs(e=>Object.assign({color:"primary.base",fontSize:1,fontWeight:"bold",px:2},e))`
  list-style: none;
  line-height: 24px;
  ${s.$_}
  ${o.cp}
  ${o.Dh}
`;var k=n(87043);let w=e=>{let{data:t}=e,n=(0,a.Z)(e,["data"]),{subcategoriesList:i,url:o,label:s,borderColor:c,banner:d,footerData:u,linePerCol:m=16,subsections:p}=t,{onMenuItemClick:g}=n;return r.createElement(b,{"data-testid":"menu-box-elem",borderColor:c},r.createElement(v,null,i?r.createElement(x,null,r.createElement(Z,{lines:m},i.map((e,t)=>r.createElement($,{key:`link-item-${t}`},r.createElement(P,(0,l.Z)({},e.highlight?{color:c}:{},{href:e.url,onClick:t=>g(t,e,"departamento")}),e.label))),p?p.map((e,t)=>r.createElement(r.Fragment,{key:`subsection-${t}`},r.createElement("div",null),r.createElement(y,{key:`subsection-title-${t}`},e.label),e.linksList.map((e,n)=>r.createElement($,{key:`subsection-link-item-${t}-${n}`},r.createElement(P,{onClick:t=>g(t,e,"subsection"),href:e.url},e.label))))):r.createElement(r.Fragment,null)),o&&"#"!==o&&s?r.createElement(P,{color:c,href:o},"+ ",s):r.createElement(r.Fragment,null)):r.createElement(r.Fragment,null),d&&d.component&&r.createElement(E,{"data-testid":"banner-elem",width:d.width},d.component)),u?r.createElement(r.Fragment,null,r.createElement(k.bo,null),r.createElement(h,{data:u,onMenuFooterClick:(e,t)=>g(e,t,"footer")})):r.createElement(r.Fragment,null))};w.defaultProps={onMenuItemClick:()=>({}),data:{}};var C=w},28982:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(2784);n(13980);var a=n(99673),r=n(55403),i=n(19527);let o=(0,a.ZP)(i.Z).attrs(()=>({flexDirection:["column","row","row"],justifyContent:"space-evenly",left:0,lineHeight:"big",padding:3,position:"fixed",top:["0","inherit","inherit"],width:"100%",zIndex:3}))`
  background-color: ${e=>(0,r.R)("baseColors.overlay.dark")(e)};
  ${(0,r.aK)("small")} {
    bottom: 0;
    max-height: 100px;
  }
`,s=({children:e})=>l.createElement(o,null,e);s.defaultProps={children:void 0};var c=s},3310:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),a=n(31461),r=n(2784),i=n(34490);n(13980);var o=n(87043),s=n(86349),c=n(12468),d=n(99673),u=n(55403);let m=(0,d.ZP)(o.kC)`
  background-color: ${e=>(0,u.dF)(e.bg)(e)};
  max-width: 208px;
`,p=e=>{let{restrictions:t={},height:n,fontSize:d,displayMode:u,text:p,bg:g}=e,f=(0,a.Z)(e,["restrictions","height","fontSize","displayMode","text","bg"]),[h,b]=(0,r.useState)(""),[v,x]=(0,r.useState)(!1),E=u===c.IY;return((0,r.useEffect)(()=>{let e=()=>{let e=(0,s.bd)(),{show:n,timeRemainingFormatted:l}=(0,s.lb)(t,e);x(n),n&&b(l)},n=setInterval(e,1e3);return e(),()=>clearInterval(n)},[t]),v)?r.createElement(m,(0,l.Z)({"data-testid":"offer-timer",borderRadius:2,justifyContent:"center",alignItems:"center",bg:g,height:n,mt:[E&&1,2],mr:E?"10px":0},f),r.createElement(i.JO$,{color:"#FFF5F0",height:["12px","14px"],width:["12px","14px"],name:"Timer",mr:1}),r.createElement(o.xv,{fontSize:d},r.createElement(o.xv,{color:"white",as:"span"},p)," ",r.createElement(o.xv,{color:"white",as:"time",fontWeight:"bold",dateTime:(0,s.J5)(h)},h))):null};p.defaultProps={height:"20px",fontSize:"10px",displayMode:c.IY,bg:"#9110C2",text:"Oferta termina em"};var g=p},19620:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),a=n(2784);n(13980);let r=(e,t)=>Array.from({length:t-e+1},(t,n)=>e+n),i=(e,t)=>{let n=`page=${t}`;if(e.includes("page=")){let[l]=e.split("page=");return 1===t?l.substring(0,l.length-1):`${l}${n}`}return 1===t?e:e.includes("?")?`${e}&${n}`:`${e}?${n}`};var o=n(99673);let s=o.ZP.nav``,c=o.ZP.ul`
  list-style: none;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  & > li {
    margin-right: 8px;
  }
`;o.ZP.li`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 26px;
  min-width: 26px;
  height: 30px;
  border-radius: 2px;
  border: 0;
  font-weight: normal;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
`;var d=n(81484);function u(e){let{items:t}=function(e={}){let{boundaryCount:t=1,count:n=1,disabled:l,path:a="",page:o=1,onChange:s,siblingCount:c=1}=e,d=(e,t)=>{s(e,t)},u=t-1,m=r(1,Math.min(u+1,n)),p=r(Math.max(n-u,u+2),n),g=Math.max(Math.min(o-c,n-u-2*c-2),u+3),f=Math.min(Math.max(o+c,u+2*c+3),p[0]-2),h=["previous",...m,...g>u+3?["ellipsis"]:2+u<n-u-1?[2+u]:[],...r(g,f),...f<n-u-2?["ellipsis"]:n-u-1>u+1?[n-u-1]:[],...p,"next"],b={first:1,previous:o-1,next:o+1,last:n},v=h.map(e=>"number"==typeof e?{onClick(t){d(t,e)},type:"page",page:e,selected:e===o,disabled:l,href:i(a,e),"aria-current":e===o?"true":void 0}:{onClick(t){d(t,b[e])},type:e,page:b[e]||null,disabled:"next"===e?o>=n:o<=1});return{items:v}}(e);return a.createElement(s,(0,l.Z)({},e,{"aria-label":"pagination navigation"}),a.createElement(c,null,null==t?void 0:t.map((e,t)=>{var n,r,i;let o=Object.assign({},e,{"aria-label":(n=e.type,r=e.page,i=e.selected,"page"===n?`${i?"":"Go to "}page ${r}`:`Go to ${n} page`)});return a.createElement("li",{key:t},a.createElement(d.Z,(0,l.Z)({},o,{"data-testid":"pagination-item"})))})))}u.defaultProps={boundaryCount:1,count:1,disabled:!1,page:1,siblingCount:1,onChange(){}}},81484:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),a=n(2784);n(13980);var r=n(99673),i=n(34490),o=n(55403);let s=r.ZP.div``,c=r.ZP.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  background-color: ${e=>e.selected&&(0,o.ow)("base")};
  color: ${e=>(0,o.ow)(e.selected?"text":"text.dark")(e)};
  padding: 5px;
  min-height: 26px;
  height: 30px;
  min-width: 26px;
  border: 0;
  border-radius: 2px;
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  font-family: ${e=>(0,o.R)("fontFamily")(e)};
  text-decoration: none;
`,d=r.ZP.button`
  visibility: ${e=>e.disabled?"hidden":"visible"};
  border: 0;
  background: none;
  display: flex;
`,u=e=>({width:30,height:30,color:e.disabled?"#ccc":"#333",cursor:e.disabled?"not-allowed":"pointer"}),m=(0,r.ZP)(i.s$$).attrs(u)``,p=(0,r.ZP)(i._Qn).attrs(u)``;function g(e){let{onClick:t,type:n,page:r,disabled:i,href:o}=e,u=["previous","next"].includes(n);return"ellipsis"===n?a.createElement(s,null,"..."):"page"===n?a.createElement(c,(0,l.Z)({href:o,role:"button",title:`p\xe1gina ${r}`,onClick:!e.selected&&t},e),r):a.createElement(d,(0,l.Z)({onClick:t},e),u&&("previous"===n?a.createElement(m,{disabled:i}):a.createElement(p,{disabled:i})))}g.defaultProps={disabled:!1,href:null,onClick(){},page:null,selected:!1}},563:function(e,t,n){n.d(t,{Z:function(){return G}});var l=n(7896),a=n(2784);n(13980);var r=n(34490),i=n(71180),o=n(86349),s=n(55403),c=n(99673),d=n(84546),u=n(19527),m=n(63825),p=n(60861),g=n(87043);(0,c.ZP)(d.Z)``;let f=(0,c.ZP)(u.Z)`
  padding: 2px;
  border: solid 2px
    ${({selected:e})=>e?(0,s.dF)("primary"):(0,s.dF)("darker")};
  border-radius: 2px;
  width: 50px;
  justify-content: center;
  margin: 0 2px;
`,h=(0,c.ZP)(g.td)`
  display: flex;
  margin: 0 10px;
`,b=c.ZP.table`
  width: 100%;
  border-spacing: unset;

  & tr:nth-child(n + 13) {
    display: ${({allVisible:e})=>e?"table-row":"none"};
  }
`,v=c.ZP.thead`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.R)("colors.darkSilver")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,x=c.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.light")(e)};
  font-style: italic;
`,E=c.ZP.th`
  text-align: left;
  padding: 0 10px;
`,Z=c.ZP.td`
  padding: 8px 10px;
  text-align: left;
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,$=c.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,P=c.ZP.th`
  text-align: right;
  padding: 0 10px;
`,y=c.ZP.td`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.uu)("base")(e)};
  padding: 0px 10px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  text-align: right;
`,k=c.ZP.tr`
  background-color: ${e=>e.index%2==0?(0,s.dF)("darker")(e):null};
`,w=c.ZP.p`
  margin-top: 4px;
  margin-bottom: 8px;
`,C=c.ZP.span`
  display: flex;
  align-items: center;
  color: ${e=>(0,s.ow)("primary.base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  margin: 10px;
  font-weight: ${e=>(0,s.R)("fontWeight.normal")(e)};
`,z=c.ZP.span`
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,S=(0,c.ZP)(m.Z)`
  color: #429502;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  margin-left: 4px;
`,I=(0,c.ZP)(m.Z)``,R=(0,c.ZP)(m.Z)`
  color: ${e=>e.luizaCard?"#429502":(0,s.ow)("darkSilver")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,O=c.ZP.div`
  margin: 10px;
`,F=(0,c.ZP)(p.Z)`
  width: 100%;
`,j=(0,c.ZP)(m.Z)`
  padding: 8px 4px 8px 10px;
  font-size: 12px;
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: #8c8c8c;
  font-style: italic;
`,M=({onChange:e,payments:t})=>a.createElement(h,{"data-testid":"payments-list",onChange:e},["luizaCard","creditCard","pix","bankSlip"].map(e=>{var n;return!!(null!=t&&null!=(n=t[e])&&n.installmentPlans)&&a.createElement(g.OK,{value:t[e].id,key:`${e}-tab`,"data-testid":`${e}-tab`},a.createElement(f,null,a.createElement(r.JO$,{name:(0,o.kC)(e)})))}));M.defaultProps={payments:{}};let L=`Cart\xe3o Luiza`,A=`Cart\xe3o de cr\xe9dito`,D=`Boleto banc\xe1rio`,W="% de desconto",B=`No boleto banc\xe1rio, que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,T=`No PIX, com o c\xf3digo que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,_=e=>parseInt(e,10)>=10?`${e}x de`:`0${e}x de`;var H=n(31461);let N=e=>{let{installments:t,showAll:n,showMoreLabel:r,luizaCard:o}=e,s=(0,H.Z)(e,["installments","showAll","showMoreLabel","luizaCard"]),[c,d]=(0,a.useState)(n),u=e=>Boolean(Number((null==e?void 0:e.interestAmount)||0)),m=t.some(e=>!!Number(e.interestAmount)),p=e=>{let t=u(e);return(!t||o)&&(t||null===o)?null:a.createElement(R,{luizaCard:!t&&o},t?"com juros":"sem juros")};return a.createElement(a.Fragment,null,a.createElement(b,(0,l.Z)({allVisible:c},s),a.createElement(v,null,a.createElement("tr",null,a.createElement(E,null,a.createElement(x,null,"(Produto + Frete)"),a.createElement(w,null,"Numero de parcelas")),a.createElement(P,null,"Total"))),a.createElement("tbody",null,t.map((e,t)=>{let n=u(e);return a.createElement(k,{index:t,key:null==e?void 0:e.installment},a.createElement(Z,null,a.createElement("span",null,Number(null==e?void 0:e.installment)>1&&_(null==e?void 0:e.installment)," ",a.createElement($,null,(0,i.oB)({value:null==e?void 0:e.installmentAmount}),n&&o&&"*")),1===Number(null==e?void 0:e.installment)&&a.createElement(a.Fragment,null,!!Number((null==e?void 0:e.discount)||0)&&a.createElement(a.Fragment,null,a.createElement(S,{as:"span"},Number(null==e?void 0:e.discount),W))),p(e)),a.createElement(y,null,Number(null==e?void 0:e.installment)>1&&(0,i.oB)({value:null==e?void 0:e.totalAmount})))}))),m&&o&&a.createElement(j,{"data-testid":"legal-text"},"*Juros: Todos os encargos da opera\xe7\xe3o, como juros, custo de parcelamento e outras tarifas est\xe3o inclu\xeddas neste valor."),(t||[]).length>12&&!c&&a.createElement(F,{"data-testid":"show-more",size:"small",onClick:()=>d(!0)},r))};N.defaultProps={installments:[],showAll:!0,luizaCard:!1,showMoreLabel:"veja mais"};let J=e=>Object.values(e).reduce((e,t)=>Object.assign({},e,{[t.id]:t}),{}),U=({asTab:e,showMoreLabel:t,onChange:n,payments:o})=>{var s,c,d,m,p,f,h,b,v,x,E,Z;let{luizaCard:$,creditCard:P,bankSlip:y,pix:k}=o,[w,R]=(0,a.useState)((null==$?void 0:$.id)||(null==P?void 0:P.id)||(null==k?void 0:k.id)||(null==y?void 0:y.id)||""),F=J(o),j=(e,t)=>{R(t),n(F[t])},_=e?g.x4:u.Z,H=e?{width:"100%"}:{display:"block",flex:"1 1"};return a.createElement(g.q5,{value:w},e&&a.createElement(M,{onChange:j,payments:o}),a.createElement(u.Z,{justifyContent:"space-between",gap:2,flexWrap:"wrap"},(null==$?void 0:$.installmentPlans)&&a.createElement(_,(0,l.Z)({},H,{"data-testid":"luizaCard-panel",value:null==$?void 0:$.id}),a.createElement(C,null,!e&&a.createElement(r.OTZ,{mr:2})," ",L),a.createElement(N,{luizaCard:null==$?void 0:$.installmentPlans,showAll:e,"data-testid":"luizaCard-table",showMoreLabel:t,installments:$.installmentPlans})),(null==P?void 0:P.installmentPlans)&&a.createElement(_,(0,l.Z)({},H,{"data-testid":"creditCard-panel",value:null==P?void 0:P.id}),a.createElement(C,null,!e&&a.createElement(r.aBT,{mr:2})," ",A),a.createElement(a.Fragment,null,a.createElement(N,{showAll:e,"data-testid":"creditCard-table",showMoreLabel:t,installments:P.installmentPlans}))),k&&a.createElement(_,(0,l.Z)({},H,{"data-testid":"pix-panel",value:null==k?void 0:k.id}),a.createElement(C,null,!e&&a.createElement(r.wrL,{mr:2})," ","Pix"),a.createElement(O,null,a.createElement(z,null,(0,i.oB)({value:null==k?void 0:null==(s=k.installmentPlans)?void 0:null==(c=s[0])?void 0:c.installmentAmount})),!!Number(null==k?void 0:null==(d=k.installmentPlans)?void 0:null==(m=d[0])?void 0:m.discount)&&a.createElement(S,{as:"span"},Number(null==k?void 0:null==(p=k.installmentPlans)?void 0:null==(f=p[0])?void 0:f.discount),W),a.createElement(I,{fontSize:0},T))),y&&a.createElement(_,(0,l.Z)({},H,{"data-testid":"bankSlip-panel",value:null==y?void 0:y.id}),a.createElement(C,null,!e&&a.createElement(r.c4o,{mr:2})," ",D),a.createElement(O,null,a.createElement(z,null,(0,i.oB)({value:null==y?void 0:null==(h=y.installmentPlans)?void 0:null==(b=h[0])?void 0:b.installmentAmount})),!!Number(null==y?void 0:null==(v=y.installmentPlans)?void 0:null==(x=v[0])?void 0:x.discount)&&a.createElement(S,{as:"span"},Number(null==y?void 0:null==(E=y.installmentPlans)?void 0:null==(Z=E[0])?void 0:Z.discount),W),a.createElement(I,{fontSize:0},B)))))};U.defaultProps={asTab:!0,showMoreLabel:"veja mais",onChange:()=>({}),payments:{}};var G=U},23458:function(e,t,n){n.d(t,{Z:function(){return M}});var l=n(2784);n(13980);var a=n(71180),r=n(99673),i=n(68054),o=n(55403),s=n(84546),c=n(31461),d=n(12468),u=n(63825);let m=r.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,p={[d.Co]:r.iv`
    padding: 4px 4px;
  `,[d.IY]:r.iv`
    padding: 12px 35px;
  `,DEFAULT:r.iv`
    padding: 12px 12px;
  `},g=r.ZP.span`
  font-size: ${e=>(0,o.R)("fontSizes.1")(e)}px;
  border-radius: 4px;
  color: ${e=>(0,o.uu)("light")(e)};
  display: inline-block;
  background-color: ${e=>(0,o.ow)("background.secondary")(e)};
  ${e=>p[e.display]||p.DEFAULT}
`,f=e=>e?3:5,h=(0,r.ZP)(s.Z).attrs(e=>({fontSize:[f(e.isList),5],lineHeight:"fontSize"}))`
  color: ${e=>(0,o.uu)("base")(e)};
  font-weight: ${e=>(0,o.R)("fontWeights.medium")(e)};
  align-self: end;
  position: relative;
  span {
    font-size: ${e=>{let{isList:t}=e,n=(0,c.Z)(e,["isList"]);return t?(0,o.R)("fontSizes.0")(n):(0,o.R)("fontSizes.1")(n)}}px;
    font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
    line-height: ${e=>(0,o.R)("lineHeights.thin")(e)}px;
  }
  ${i.Dh}
  ${i.cp}
`,b=(0,r.ZP)(s.Z).attrs(e=>Object.assign({mt:"8px"},Object.assign({},e)))`
  line-height: ${e=>(0,o.R)("lineHeights.big")(e)};
  ${i.cp}
`,v=(0,r.ZP)(u.Z)`
  color: ${e=>(0,o.ow)("secondary.base")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
`,x=(0,r.ZP)(u.Z).attrs(({isList:e})=>({fontSize:[e?0:1,1],lineHeight:"fontSize",fontWeight:e?null:"regular",color:e?"text.scratched":"text.light"}))`
  margin: 0;
  text-align: left;
  text-decoration: line-through;
  ${i.cp}
  ${o.$_}
`,E=r.ZP.span`
  margin-left: ${({sellerPage:e})=>e?"0":"0.3rem"};
`,Z=(0,r.ZP)(u.Z)``,$=r.ZP.p`
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,o.R)("lineHeights.standard")(e)}px;
`,P=(0,r.ZP)(h)`
  text-align: center;
  line-height: ${e=>(0,o.R)("lineHeights.small")(e)};
  letter-spacing: normal;
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  p {
    padding: 3px 0px 0px;
  }
`,y=(0,r.ZP)(s.Z).attrs(e=>Object.assign({mt:"8px"},Object.assign({},e)))`
  line-height: 6px;
  ${i.Dh}
`,k=r.ZP.div``,w="no Pix",C=({price:e,paymentMethodDescription:t,showInCashInfo:n,style:r})=>e?l.createElement(y,r,l.createElement(P,{"data-testid":"price-miniature"},(0,a.oB)({value:e})," ",n&&l.createElement($,null,t||w))):l.createElement(k,{"data-testid":"empty-price-miniature"});C.defaultProps={price:"",paymentMethodDescription:"",showInCashInfo:!1,style:{}};var z=n(19527),S=n(97769);let I=({installment:e,minimumInstallment:t})=>{let n=null==e?void 0:e.totalAmount,l=!!(null!=e&&e.amount&&(null==e?void 0:e.quantity)>t&&null!=e&&e.totalAmount),a=(null==e?void 0:e.paymentMethodDescription)!=="com juros";return{hasInstallment:l,installmentPrice:n,isInstallmentWithoutInterest:a}},R=({finalPrice:e,hideOriginalPrice:t,installmentPrice:n,isInstallmentWithoutInterest:l,price:a})=>{let r=parseFloat(a)!==parseFloat(n)&&parseFloat(a)!==parseFloat(e);return{showOriginalPrice:r&&l&&!t}},O=({finalPrice:e,installmentPrice:t,showDiscount:n,showDiscountOnlyCashInfo:l,showInCashInfo:a})=>{let r=parseFloat(e)<parseFloat(t);return{showDiscountValue:a&&n&&(!l||!t||r)}},F=({discount:e,finalPrice:t,hideOriginalPrice:n,installment:r,isList:i,minimumInstallment:o,installmentFormat:s,paymentMethodDescription:c,price:d,showDiscount:u,showDiscountOnlyCashInfo:m,showInCashInfo:p,showTotalAmount:g,style:f,sellerPage:$})=>{let{hasInstallment:P,installmentPrice:y,isInstallmentWithoutInterest:k}=I({installment:r,minimumInstallment:o}),{showOriginalPrice:C}=R({finalPrice:t,hideOriginalPrice:n,installmentPrice:y,isInstallmentWithoutInterest:k,price:d}),{showDiscountValue:F}=O({finalPrice:t,installmentPrice:y,showDiscount:u,showDiscountOnlyCashInfo:m,showInCashInfo:p});return l.createElement(b,f,l.createElement(h,{"data-testid":"price-default",isList:i},l.createElement(l.Fragment,null,$&&l.createElement(z.Z,{alignItems:"left",flexDirection:"column",mt:3,mb:2},l.createElement(Z,{"data-testid":"price-value",mb:3},(0,a.oB)({value:t})),c?l.createElement(E,{sellerPage:$,"data-testid":"in-cash"},c," "):l.createElement(l.Fragment,null,(!y||parseFloat(t)<parseFloat(y))&&l.createElement(E,{sellerPage:$,"data-testid":"in-cash"},w))),C&&l.createElement(x,{"data-testid":"price-original",isList:i},(0,a.oB)({value:d})),P&&l.createElement(S.Z,{mt:2,information:r,minimumInstallment:o,isList:i,format:s,sellerPage:$,showTotalAmount:g}),!$&&l.createElement(z.Z,{alignItems:"center"},l.createElement(Z,{"data-testid":"price-value"},P&&l.createElement("span",null,"ou "),(0,a.oB)({value:t})),c?l.createElement(E,{"data-testid":"in-cash"},c," "):l.createElement(l.Fragment,null,(!y||parseFloat(t)<parseFloat(y))&&l.createElement(E,{"data-testid":"in-cash"},w))),F&&l.createElement(v,{as:"span"},"(",`${Number(e)}% de desconto no pix`,")"))))};F.defaultProps={hideOriginalPrice:!1,sellerPage:!1};let j=({display:e,price:t,paymentMethodDescription:n,bestPrice:a,fullPrice:r,discount:i,installment:o,showInCashInfo:s,showDiscount:c,showDiscountOnlyCashInfo:u,showTotalAmount:p,isList:f,minimumInstallment:h,installmentFormat:b,style:v,hideOriginalPrice:x,sellerPage:E})=>{let Z=a||r||t,$=Boolean(s&&t!==Z&&Number(i));return Z?e===d.Co?l.createElement(C,{style:v,price:Z,showInCashInfo:$,paymentMethodDescription:n}):l.createElement(F,{style:v,price:t,finalPrice:Z,discount:i,installment:o,showInCashInfo:$,showDiscount:c,showDiscountOnlyCashInfo:u,paymentMethodDescription:n,isList:f,minimumInstallment:h,installmentFormat:b,hideOriginalPrice:x,sellerPage:E,showTotalAmount:p}):l.createElement(m,{"data-testid":"price-unavailable"},l.createElement(g,{display:e},"Xiii, j\xe1 foi tudo :("))};j.defaultProps={display:d.yg,isList:!0,price:"",bestPrice:"",discount:"",hideOriginalPrice:!1,installment:{amount:"",paymentMethodDescription:"",quantity:"",totalAmount:"",interest:""},installmentFormat:"",minimumInstallment:1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showTotalAmount:!1,sellerPage:!1};var M=j},58125:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(2784);n(13980);var a=n(71180),r=n(87043),i=n(63113),o=n(99673),s=n(55403);let c=(0,o.ZP)(r.rj).attrs(e=>Object.assign({my:3,mx:2,rowGap:3},e))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'input-values input-values'
    'slider-input slider-input'
    'apply-button apply-button';
`,d=(0,o.ZP)(r.rj).attrs(e=>Object.assign({gap:2},e))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-area: input-values;
`,u=o.ZP.div`
  z-index: 0;
  grid-area: slider-input;
  position: relative;
`,m=(0,o.ZP)(r.xv)`
  color: ${e=>(0,s.uu)("scratched")(e)};
`,p=(0,o.ZP)(r.zx)`
  grid-area: apply-button;
`;var g=n(86349);let f=({item:e,onApply:t,min:n,max:o,initialMin:s,initialMax:f})=>{let[h,b]=(0,l.useState)(),[v,x]=(0,l.useState)(),[E,Z]=(0,l.useState)(),[$,P]=(0,l.useState)();(0,l.useEffect)(()=>{b(100*s),Z((0,i.Z)(100*s).currency)},[s]),(0,l.useEffect)(()=>{x(100*f),P((0,i.Z)(100*f).currency)},[f]);let y=h/100,k=v/100,w=y===s&&k===f||!(0,g.Z4)(y,k,n,o)||!(0,g.rx)(k,y,n,o),C=(e,t=!0)=>{let{amount:n,currency:l}=(0,i.Z)(t?100*e:e);x(n),P(l)},z=(e,t=!0)=>{let{amount:n,currency:l}=(0,i.Z)(t?100*e:e);b(n),Z(l)},S=({currentMax:e,currentMin:t})=>{C(e),z(t)};return l.createElement(c,{"data-testid":"price"},l.createElement(d,null,l.createElement(r.kC,{flexDirection:"column",gap:1},l.createElement(m,{"data-testid":"price-range-min-label",fontSize:0},l.createElement(r.xv,{color:"inherit"},"M\xednimo:"),l.createElement(r.xv,{color:"inherit"},(0,a.oB)({value:100*n,rightFilling:!0}))),l.createElement(r.II,{"data-testid":"price-range-min-input",value:E,placeholder:"Ex: R$ 250,00",maxLength:15,onChange:e=>z(e.target.value,!1)})),l.createElement(r.kC,{flexDirection:"column",gap:1},l.createElement(m,{"data-testid":"price-range-max-label",fontSize:0},l.createElement(r.xv,{color:"inherit"},"M\xe1ximo:"),l.createElement(r.xv,{color:"inherit"},(0,a.oB)({value:100*o,rightFilling:!0}))),l.createElement(r.II,{"data-testid":"price-range-max-input",value:$,placeholder:"Ex: R$ 500,00",maxLength:15,onChange:e=>C(e.target.value,!1)}))),l.createElement(u,null,l.createElement(r.U2,{maxAllowed:parseFloat(o),minAllowed:parseFloat(n),currentMax:parseFloat(k),currentMin:parseFloat(y),onChange:S})),l.createElement(p,{"data-testid":"price-range-apply-btn",full:!0,onClick:n=>t(n,{min:parseFloat(h/100),max:parseFloat(v/100)},e),disabled:w},"Aplicar filtro"))};f.defaultProps={item:{},onApply(){}};var h=f},65055:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(70715),o=n(99673),s=n(55403),c=n(87043);let d=(0,o.ZP)(c.xu)`
  > *:not(:last-child) {
    border-bottom: ${(0,s.R)("borders.0")};
  }
`,u=e=>{let{options:t,selectedOption:n,onChange:o}=e,s=(0,a.Z)(e,["options","selectedOption","onChange"]);return r.createElement(d,null,null==t?void 0:t.map(e=>{let{value:t,label:a,selected:c}=e;return r.createElement(i.Z,(0,l.Z)({key:t||a,value:t||a,label:a,checked:c||void 0!==t&&t===n||void 0===t&&a===n,onChange:t=>o(t,e)},s))}))};u.defaultProps={options:[],selectedOption:"",onChange(){}};var m=u},11151:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784);n(13980);var a=n(87043),r=n(99673),i=n(34490),o=n(55403),s=n(63825);let c=r.ZP.li`
  display: flex;
  align-items: center;
  column-gap: ${({columnGap:e})=>e||"8"}px;
`,d=(0,r.ZP)(s.Z)``,u=(0,r.ZP)(s.Z)`
  color: ${({color:e})=>(0,o.uu)(e||"light")};
`,m=(0,r.ZP)(i.Uxw)`
  margin-bottom: 1px;
`;function p({id:e,score:t,count:n,max:r,starColor:i,lineColor:o,fontweightScore:s,countColor:p,widthProgress:g,heightProgress:f,starSize:h,scoreFontSize:b,columnGap:v,as:x}){return l.createElement(c,{columnGap:v,as:x},l.createElement(a.kC,{alignItems:"center"},l.createElement(d,{fontSize:b,fontWeight:s},e),l.createElement(m,{width:h,height:h,color:i})),l.createElement(a.uk,{height:f,width:g,value:t,max:r,color:o}),l.createElement(u,{"data-testid":"rating-value",fontSize:b,color:p},n))}p.defaultProps={id:0,score:0,count:"0",widthProgress:"90px",heightProgress:"6px",as:"li",starSize:15,scoreFontSize:0,columnGap:8};var g=p},73172:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(34490),o=n(99673),s=n(68054),c=n(55403),d=n(63825);let u=o.ZP.div`
  display: flex;
  align-items: center;
`,m=(0,o.ZP)(d.Z).attrs(e=>({fontSize:[e.fontSize||0,1,1],fontWeight:"regular",as:"span",color:"text.scratched"}))`
  display: inline-block;
  margin-left: 5px;
  ${e=>"label"===e.format&&o.iv`
      margin-bottom: 2px;
    `}
  ${s.cp}
  ${c.$_}
`,p=(e,t,n)=>{let l=Number.isInteger(e),a=e&&e<=t;return l||t!==Math.floor(e)?!a&&n?"StarOutline":a?"StarOutline":"Star":"StarHalf"},g=(e,t)=>0!==e||t?"stars.base":"stars.disabled",f=(e,t,n,l,a)=>{let r={count:t,label:l,"score-count":a?`${t}`:`${n.toFixed(1)||0} (${t})`};return r[e]},h=e=>{let{min:t,max:n,count:o,emptyOutline:s,minCount:c,score:d=0,format:h,label:b,fontSize:v,onClick:x,sellerPage:E}=e,Z=(0,a.Z)(e,["min","max","count","emptyOutline","minCount","score","format","label","fontSize","onClick","sellerPage"]),$=Array.from(Array(n-t).keys()),P=g(d,s),y=`${d.toFixed(1)||0} de ${n} estrelas, ${o} classifica\xe7\xf5es`;return r.createElement(u,{onClick:x,"data-testid":"review","aria-label":y},$.map(e=>{let t=p(d,e,s);return r.createElement(i.JO$,(0,l.Z)({name:t,key:`star-id-${e}`,"data-testid":`star-${d&&d<=e?"placeholder":"item"}`,color:P},Z))}),("label"===h||o>=c)&&r.createElement(m,{format:h,fontSize:v},f(h,o,d,b,E)))};h.defaultProps={count:0,minCount:.1,min:0,max:5,score:0,format:"count",emptyOutline:!1,sellerPage:!1};var b=h},27408:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(19527),o=n(76328),s=n(63825),c=n(29869),d=n(2761);let u={rating:o.Z,text:c.Z,recommendation:d.Z},m=(0,r.forwardRef)((e,t)=>{let{label:n,type:o,error:d,flexDirection:m,fontSize:p,fontWeight:g,alignItems:f,textAlign:h,gap:b}=e,v=(0,a.Z)(e,["label","type","error","flexDirection","fontSize","fontWeight","alignItems","textAlign","gap"]),x=u[o]||c.Z;return r.createElement(i.Z,{"data-testid":"review-input-wrapper",flexDirection:m,gap:b,width:1},r.createElement(s.Z,{"data-testid":"review-input-label",flex:"0.75",textAlign:h,fontSize:p,fontWeight:g,lineHeight:"input",paddingY:"2"},n),r.createElement(i.Z,{gap:"2",flex:"1",alignItems:f,flexDirection:["column",["recommendation","rating"].includes(o)?"row":"column"],"data-testid":"review-input-container"},r.createElement(x,(0,l.Z)({ref:t},!["rating","recommendation"].includes(o)&&{hasError:!!d},"textarea"===o&&{multiline:!0},v)),d&&r.createElement(s.Z,{color:"error.base"},d)))});m.defaultProps={error:null,flexDirection:null,fontSize:2,fontWeight:"regular",gap:30,label:null,textAlign:"right",alignItems:"start"},m.displayName="ReviewInput";var p=m},66457:function(e,t,n){n.d(t,{II:function(){return u},W1:function(){return c},xJ:function(){return d}});var l=n(31461),a=n(99673),r=n(55403),i=n(68054),o=n(34490),s=n(19527);let c=(0,a.ZP)(o.olm)`
  fill: ${(0,r.R)("palette.primary.base")};
  ${({desktopMode:e})=>e?a.iv`
          width: 22px;
          height: 22px;
          min-width: unset;
        `:a.iv`
          width: 30px;
        `}
`,d=(0,a.ZP)(s.Z)`
  align-items: center;
  width: 100%;
  border: 0;
  padding: ${(0,r.R)("space.1")}px ${(0,r.R)("space.2")}px;

  svg {
    cursor: pointer;
    min-width: 18px;
  }
  ${({desktopMode:e})=>!e&&a.iv`
      background-color: ${e=>(0,r.dF)("white")(e)};
      border-radius: ${(0,r.R)("radii.default")};
    `}
  ${({inputChange:e})=>e&&a.iv`
      ${({desktopMode:e})=>e?a.iv`
              border-bottom: 1px solid ${(0,r.kJ)("whisper")};
            `:a.iv`
              box-shadow: ${(0,r.R)("boxShadows.4")};
              z-index: ${(0,r.R)("zIndices.3")};
              border-radius: unset;
            `};
    `}
  form {
    width: 100%;
    ${({desktopMode:e})=>!e&&a.iv`
        padding-left: ${(0,r.R)("space.1")}px;
      `};
  }
`,u=a.ZP.input.attrs(e=>Object.assign({fontSize:1},e))`
  color: ${e=>{let{isChanging:t,desktopMode:n}=e,a=(0,l.Z)(e,["isChanging","desktopMode"]);return(0,r.uu)(t&&!n?"primary":"light")(a)}};
  caret-color: ${(0,r.uu)("light")};
  width: 100%;
  border: 0px;
  -webkit-appearance: textfield;

  ::placeholder {
    color: ${(0,r.uu)("light")};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  ${i.cp}
`},37222:function(e,t,n){n.d(t,{Z:function(){return F}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(34490),o=n(99673),s=n(55403),c=n(68054),d=n(87043);let u=(0,o.ZP)(d.kC).attrs(e=>Object.assign({bg:"background.lighter"},e))`
  position: relative;
  border-radius: ${({desktopMode:e})=>e?2:6}px;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({inputChange:e})=>e&&o.iv`
      align-items: baseline;
      left: 0;
      z-index: ${(0,s.R)("zIndices.3")};

      ${({desktopMode:e})=>e?o.iv`
              top: 0;
              border: 1px solid ${(0,s.kJ)("whisper")};
            `:o.iv`
              top: 3px;
              margin-left: -9px;
              width: calc(100% + 18px);
              border-radius: 0;
              padding: ${(0,s.R)("space.1")}px 0;
            `};
    `}

  ${s.$_}
`,m=o.ZP.div.attrs(e=>Object.assign({bg:"background.overlay",zIndex:1,top:40,left:0},e))`
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 'block';
  display: 'block';
  ${s.$_}
  ${c.FK}
`,p=(0,o.ZP)(d.xu).attrs(e=>Object.assign({fontSize:1,color:"text.scratched"},e))`
  ${c.cp}
  ${s.$_}
`;var g=n(41065),f=n(84546);let h=o.ZP.div.attrs(e=>Object.assign({bg:"background.lighter",p:3},e))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${c.Dh}
    `}
`,b=o.ZP.div.attrs(e=>Object.assign({mb:e.isEmpty?0:3,zIndex:2},e))`
  ${c.Dh};
`,v=(0,o.ZP)(f.Z).attrs(e=>Object.assign({fontSize:2,fontWeight:"bold",color:"text.primary",pb:2,mb:1},e))`
  width: fit-content;
  border-bottom: 1px solid ${(0,s.kJ)("whisper")};

  ${s.$_}
  ${c.cp}
`,x=({desktopMode:e,handleClickProduct:t,handleClickSuggest:n,products:l,productsSuggestions:a,suggestions:i,suggestionsPrefix:o,term:s})=>r.createElement(h,{desktopMode:e,isEmpty:0===Object.values(i).length&&0===Object.values(l).length},r.createElement(b,{isEmpty:0===Object.values(i).length&&0===Object.values(l).length},e&&Object.values(i).length>0&&r.createElement(v,{"data-testid":"suggestion-title"},"sugest\xf5es de resultados"),r.createElement("ul",null,Object.values(i).map(t=>r.createElement(g.Z,{desktopMode:e,prefix:o,term:s,key:t.count,item:t,onSearchSubmit:e=>n(e,null==t?void 0:t.term,"clickSuggestion")})))),e&&a&&Object.values(a).length>0&&r.createElement(r.Fragment,null,r.createElement(v,{"data-testid":"suggestion-title"},"sugest\xf5es de produtos"),r.createElement("ul",null,Object.values(a).map(n=>r.createElement(g.Z,{desktopMode:e,term:s,key:n.id,item:n,borderBottom:!0,onSearchSubmit:e=>t(e,n)})))));x.defaultProps={autocompleteRef:{},desktopMode:!1,products:[],suggestions:[],suggestionsPrefix:"",term:""};var E=n(39146);let Z=(0,o.ZP)(d.xu).attrs(e=>Object.assign({bg:"background.lighter",p:2,zIndex:2},e))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${c.Dh}
    `}
`,$=o.ZP.div.attrs(e=>Object.assign({mb:e.isEmpty?0:3},e))`
  ${c.Dh};
`,P=e=>r.createElement(d.xu,{bg:"background.primary",p:2,borderRadius:2},e),y=({desktopMode:e,list:t,label:n,handleClickTopTerm:l})=>r.createElement(Z,{"data-testid":"top-terms-container",desktopMode:e,isEmpty:0===t.length},r.createElement($,{isEmpty:0===t.length},t.length>0&&r.createElement(E.aV,{divided:!0},r.createElement(E.aV.Header,{"data-testid":"top-terms-header",fontSize:1,fontWeight:"bold",color:"text.scratched",pb:2,mb:1},n),t.map((e,t)=>r.createElement(E.aV.Item,{"data-testid":"top-terms-item",key:`top-term-${t}`,startIcon:P(t+1),fill:"red",onClick:t=>l(t,e),fontSize:2},e.term)))));y.defaultProps={desktopMode:!1};var k=n(33055),w=n(66457);let C=e=>{let{desktopMode:t,handleClear:n,handleClose:o,handleOpen:s,handleSubmit:c,handleType:d,inputChange:u,handleClickEvent:m,keypressHandler:p,term:g,disableClear:f}=e,h=(0,a.Z)(e,["desktopMode","handleClear","handleClose","handleOpen","handleSubmit","handleType","inputChange","handleClickEvent","keypressHandler","term","disableClear"]);return r.createElement(w.xJ,{"data-testid":"input-container",inputChange:u,desktopMode:t},!t&&u&&r.createElement(i.xhZ,{color:"#818181","data-testid":"arrow-back",onClick:o}),r.createElement("form",{"data-testid":"form-search",onSubmit:e=>c(e,"submit"),autoComplete:"off"},r.createElement(k.Z,{text:"Procure no magalu",htmlFor:"input-search"}),r.createElement(w.II,(0,l.Z)({},h,{onChange:e=>d(e),onClick:s,value:g,id:"input-search",type:"search",isChanging:u,desktopMode:t,onKeyDown:p,"data-testid":"input-search",accessKey:"s"}))),(!f||!t&&u&&""!==g)&&r.createElement(i.B86,{"data-testid":"close-circle",color:"#818181",onClick:n,width:17,height:17,margin:f?"unset":"0 16px",marginRight:2,marginBottom:"1px"}),r.createElement(w.W1,{"aria-label":"Buscar produto","data-testid":"search-submit",desktopMode:t,onClick(e){c(e,"icon"),m()},role:"button",tabIndex:"0"}))};C.defaultProps={desktopMode:!1,inputChange:!1,disableClear:!0,term:""};var z=n(86349);let S=(e,t)=>e&&""===t,I=e=>e?r.createElement(p,null,"+"):r.createElement(i.olm,{color:"#818181"}),R=(e,t)=>{27===e.keyCode&&t()},O=e=>{let{onSearch:t,onTypeChange:n,onInputClear:i,onInputClose:o,onInputOpen:s,onSuggestItemClick:c,onProductItemClick:d,onTopTermItemClick:p,initialValue:g,onClickSearchEvent:f,list:h,products:b,desktopMode:v,topTerms:E}=e,Z=(0,a.Z)(e,["onSearch","onTypeChange","onInputClear","onInputClose","onInputOpen","onSuggestItemClick","onProductItemClick","onTopTermItemClick","initialValue","onClickSearchEvent","list","products","desktopMode","topTerms"]),[$,P]=(0,r.useState)(g),[k,w]=(0,r.useState)(!1),[O,F]=(0,r.useState)(h),[j,M]=(0,r.useState)(b),L=I(v),{shouldDisplay:A,list:D}=E;(0,r.useEffect)(()=>{F(h||[])},[h]),(0,r.useEffect)(()=>{M(b)},[b]),(0,r.useEffect)(()=>{P(g)},[g]);let W=(e,n)=>{if(!$.trim()){e.preventDefault();return}w(!1),t(e,$,n)},B=e=>{let t=e.target.value;w(!S(v,t)),P(t),n(t)},T=(e,n,l)=>{c(n,l),w(!1),P(n),t(e,n,l)},_=(e,n)=>{let{term:l}=n;p(n),w(!1),P(l),t(e,l)},H=(e,t)=>{w(!1),P(""),d(e,t)},N=()=>{i(),P("")},J=()=>{o(),w(!1)},U=()=>{s(),w(!0)},G=(0,r.useRef)();return(0,z.t$)(G,()=>{(k||A)&&J()}),r.createElement(r.Fragment,null,r.createElement(u,{inputChange:k,desktopMode:v,ref:G,id:"search-container","data-testid":"search-input-container"},r.createElement(C,(0,l.Z)({desktopMode:v,handleClear:N,handleClose:J,handleClickEvent:f,handleOpen:U,handleSubmit:W,handleType:B,inputChange:k,keypressHandler:e=>R(e,J),term:$},Z)),A?D?r.createElement(y,(0,l.Z)({},E,{desktopMode:v,handleClickTopTerm:_})):r.createElement(r.Fragment,null):k&&h?r.createElement(x,{desktopMode:v,handleClickProduct:H,handleClickSuggest:T,handleClose:J,products:b,productsSuggestions:j,suggestions:O,suggestionsPrefix:L,term:$}):r.createElement(r.Fragment,null),!v&&k&&r.createElement(m,{"data-testid":"input-overlay",onTouchMove:J,onClick:J})))};O.defaultProps={list:[],products:[],initialValue:"",onInputClear(){},onSuggestItemClick(){},onProductItemClick(){},onTopTermItemClick(){},onInputClose(){},onInputOpen(){},desktopMode:!1,topTerms:{shouldDisplay:!1,label:"Mais Buscados",list:[]}};var F=O},57991:function(e,t,n){n.d(t,{Z:function(){return E}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(99673),o=n(68054),s=n(34490),c=n(55403),d=n(19527),u=n(63825);let m=(0,i.ZP)(d.Z).attrs(e=>Object.assign({bg:"background.base",borderRadius:"medium"},e))`
  position: relative;
  padding: 16px 12px;
  align-items: center;
  cursor: pointer;

  ${o.Cg}
  ${c.$_}
`,p=(0,i.ZP)(d.Z).attrs(e=>Object.assign({bg:"background.base",borderRadius:"medium",zIndex:4},e))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

  ${o.Cg}
  ${c.$_}
`,g=(0,i.ZP)(s.hq5).attrs({width:24,height:24})``,f=(0,i.ZP)(s.lO8)`
  margin-right: 12px;
  flex-grow: 0;
  width: 18px;
  height: 18px;
  ${c.$_}
`,h=(0,i.ZP)(u.Z)`
  flex-grow: 1;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
`,b=(0,i.ZP)(u.Z)`
  flex-grow: 0;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,c.ow)("primary.base")(e)};
`;var v=n(86349);let x=e=>{let{placeholder:t,changeLabel:n,actionLabel:i,disabled:o,done:s,loading:c,onClick:d,location:u,maxCityLength:x}=e,E=(0,a.Z)(e,["placeholder","changeLabel","actionLabel","disabled","done","loading","onClick","location","maxCityLength"]),Z=u&&Object.keys(u).length?(0,v.RZ)(Object.assign({},u,{maxCityLength:x,includeAddress:!1})):"";return r.createElement(m,(0,l.Z)({},E,{onClick:c||o?()=>{}:d,"data-testid":"shipping-button"}),(c||o)&&r.createElement(p,{"data-testid":"shipping-disabled"},c&&r.createElement(g,null)),r.createElement(f,{fill:"primary.base"}),r.createElement(h,{as:"span"},Z||t),!!Z&&r.createElement(b,{as:"span"},s?n:i))};x.defaultProps={placeholder:"Calcular frete e prazo",changeLabel:"alterar",actionLabel:"calcular",disabled:!1,loading:!1,done:!1,onClick(){},location:{},maxCityLength:24};var E=x},15185:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(2784);n(13980);var a=n(34490),r=n(87043),i=n(99673);let o=i.ZP.div`
  & > svg {
    transform: scale(2.5);
  }
`,s=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:i,fontColor:s="#fff",counterColor:c="#58c22e",iconColor:d="#fff",onClick:u})=>l.createElement(r.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:i,counterColor:c,fontColor:s,onClick:u},l.createElement(o,null,l.createElement(a.JO$,{name:"ShoppingBag",color:d})));s.defaultProps={amount:0,onClick(){},nullable:!0};var c=s},51382:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(34490),o=n(99673),s=n(55403);let c=o.ZP.a`
  position: relative;
  cursor: pointer;
`,d=o.ZP.div`
  background-color: ${e=>(0,s.dF)("lighter")(e)};
  border-radius: 6px;
  padding: 10px;
  width: 190px;
  display: ${e=>e.open?"flex":"none"};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 110%;
  right: 0px;
  position: absolute;
  z-index: ${e=>(0,s.R)("zIndices.0")(e)};
  box-shadow: ${e=>(0,s.R)("elevations.4")(e)};
`,u=o.ZP.a`
  background-color: ${e=>(0,s.dF)("primary")(e)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 16px;
  }
`;function m(e){let{socialItems:t,onItemClick:n}=e,o=(0,a.Z)(e,["socialItems","onItemClick"]),[s,m]=(0,r.useState)(!1),p=()=>{m(!s)},g=e=>{("Enter"===e.key||13===e.keyCode)&&p()};return r.createElement(c,(0,l.Z)({},o,{"aria-label":"Compartilhar",role:"button","aria-haspopup":"true","aria-expanded":s,onClick:p,onKeyDown:g,tabIndex:"0"}),r.createElement(i.mBz,{height:"24",color:"#818181","data-testid":"social-share","aria-hidden":"true"}),r.createElement(d,{open:s,"data-testid":"social-content"},t.map(({title:e,url:t,Icon:l})=>r.createElement(u,{key:e,href:t,target:"_blank",onClick:t=>n(t,e),"aria-label":e},l))))}m.defaultProps={socialItems:[],onItemClick(){}};var p=m},50919:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(31461),a=n(2784);n(13980);var r=n(99673),i=n(55403),o=n(87043);let s=(0,r.ZP)(o.xu).attrs(e=>Object.assign({forwardedAs:"table"},e))`
  list-style: none;

  tbody > tr > td {
    padding: 5px;
  }
`,c=r.ZP.td`
  font-weight: bold;
  color: ${e=>(0,i.R)("colors.darkSilver")(e)};
  background: ${e=>(0,i.dF)("base")(e)};
  display: ${({layout:e})=>"horizontal"===e?"table-cell":"list-item"};
  width: ${({layout:e})=>"horizontal"===e?"20%":"100%"};
`,d=r.ZP.td`
  display: list-item;
  width: 100%;
  padding: 5px;
`,u=r.ZP.td`
  width: 40%;
`,m=r.ZP.table`
  width: 100%;
  td:first-child {
    display: table-cell;
  }
  tr {
    display: table-row;
    vertical-align: middle;
  }
`,p=(0,r.ZP)(o.rU)`
  text-decoration: underline;
  font-size: inherit;

  &:hover {
    color: ${e=>(0,i.uu)("primary")(e)};
  }
`;function g(e){var t;let{data:n,layout:r}=e,i=(0,l.Z)(e,["data","layout"]),o=e=>e.isLink?a.createElement(p,{href:e.path},null==e?void 0:e.value):null==e?void 0:e.value;return a.createElement(s,i,a.createElement("tbody",null,null==n?void 0:null==(t=n.elements)?void 0:t.map(e=>{var t;return a.createElement("tr",{key:e.slug},a.createElement(c,{layout:r},e.keyName),a.createElement(d,null,a.createElement(m,null,a.createElement("tbody",null,null==e?void 0:null==(t=e.elements)?void 0:t.map((e,t)=>a.createElement("tr",{key:t},e.keyName&&a.createElement(u,null,e.keyName),a.createElement("td",null,o(e))))))))})))}g.defaultProps={color:"text.base",fontSize:0,layout:"vertical"};var f=g},62458:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(87043),o=n(86349),s=n(99673),c=n(55403),d=n(34490);let u=(0,s.ZP)(i.kC).attrs(()=>({fontSize:0,borderRadius:4,fontWeight:"600",padding:"2px 4px"}))`
  width: fit-content;
  align-items: center;
  background-color: ${(0,c.dF)("limeGreen")};
`,m=(0,s.ZP)(d.JO$).attrs(()=>({}))`
  color: ${(0,c.uu)("dark")};
`;function p(e){let{tags:t,showIcon:n}=e,s=(0,a.Z)(e,["tags","showIcon"]),c=(0,o.Qd)(t);return c&&r.createElement(u,(0,l.Z)({},s,{"data-testid":"productCard-coupon","aria-label":`Cupom de ${c.toLowerCase()}`}),n&&r.createElement(m,{"data-testid":"coupon-icon",color:"dark",name:"LocalActivity",mr:1,height:12,width:12}),r.createElement(i.xv,{color:"dark"},"Cupom ",c))}p.defaultProps={tags:{},showIcon:!0};var g=p},93168:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(7896),a=n(31461),r=n(2784);n(13980);var i=n(99673),o=n(55403),s=n(87043);let c=(0,i.ZP)(s.kC).attrs({position:"relative",justifyContent:"space-between",alignItems:"stretch",width:"100%",px:2})(({count:e})=>3===e&&{"& > *:nth-child(2)":{position:"absolute",left:"50%",top:"50%",height:"100%",transform:"translate(-50%,-50%)"}},o.bU,o.bA);var d=n(34490),u=n(10200);let m=e=>{let{children:t,endIcon:n,startIcon:i}=e,o=(0,a.Z)(e,["children","endIcon","startIcon"]),s=e=>e&&"string"==typeof e?r.createElement(d.JO$,{name:e}):e;return r.createElement(u.Z,(0,l.Z)({"data-testid":"toolbar-item"},o),s(i),t,s(n))};m.defaultProps={children:null,color:"inherit",underlineOnHover:!1,fontSize:1,fontWeight:"medium",gap:1};let p=e=>{let{onChange:t}=e,n=(0,a.Z)(e,["onChange"]),l=r.Children.toArray(null==n?void 0:n.children),[i,o]=(0,r.useState)(0),s=()=>{if(i>=l.length-1){o(0);return}o(i+1)};(0,r.useEffect)(()=>{let{props:{value:e,children:n}}=l[i];t({id:e,label:n})},[i]);let c=l.map(e=>r.cloneElement(e,{onClick:s}));return c[i]},g=e=>{let{children:t}=e,n=(0,a.Z)(e,["children"]);return r.createElement(c,(0,l.Z)({count:r.Children.count(t),"data-testid":"toolbar"},n),t)};g.defaultProps={children:null,variant:"transparent",scale:"medium"},g.Item=m,g.Toggle=p;var f=g},41237:function(e,t,n){n.d(t,{Z:function(){return Z}});var l=n(2784);n(13980);var a=n(19527),r=n(31461),i=n(99673),o=n(55403),s=n(34490),c=n(60861),d=n(29869),u=n(63825);let m=i.ZP.form`
  position: relative;
`,p=i.ZP.label`
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  color: ${e=>{let{hasError:t}=e,n=(0,r.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
`,g=(0,i.ZP)(d.Z)`
  border: 0;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid;
  border-color: ${e=>{let{hasError:t}=e,n=(0,r.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
  padding: 0 0 ${e=>(0,o.R)("space.2")(e)}px;
  line-height: ${e=>(0,o.R)("lineHeights.input")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  background-color: transparent;
  margin-top: 4px;
  &::placeholder {
    color: ${e=>(0,o.uu)("greyish")(e)};
  }
`,f=i.ZP.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  background-color: ${e=>(0,o.dF)("base")(e)};
  z-index: ${e=>(0,o.R)("zIndices.0")(e)};
`,h=(0,i.ZP)(s.gXO).attrs(e=>({color:(0,o.ow)("primary")(e)}))`
  height: 40px;
`,b=(0,i.ZP)(c.Z).attrs(()=>({m:"14px 0"}))`
  width: 70%;
`,v=(0,i.ZP)(u.Z).attrs(()=>({forwardedAs:"span",color:"text.primary",fontSize:1,fontWeight:"medium",textAlign:"center",textTransform:"uppercase"}))`
  cursor: pointer;
  margin: 14px;
  text-transform: uppercase;
  width: 70%;
`;var x=n(7874);function E({errorText:e,hasError:t,initialValue:n,labelText:r,loading:i,locationButtonText:o,onChange:s,placeholder:c,showButton:d,inputButtonText:u,onClickLocationButton:E}){let[Z,$]=(0,l.useState)((0,x.Z)(n)),P=e=>{e.preventDefault();let{value:t}=e.target;$((0,x.Z)(t)),s(e,e.target.value)},y=e=>{e.preventDefault(),$((0,x.Z)(Z)),s(e,Z)};return l.createElement(m,{onSubmit:y},l.createElement(p,{"data-testid":"zipcode-label",hasError:t,htmlFor:"zipcode"},t?e:r),i&&l.createElement(f,{"data-testid":"zipcode-loading"},l.createElement(h,null)),l.createElement(g,{"data-testid":"zipcode-input",hasError:t,autoFocus:!0,id:"zipcode",name:"zipcode",type:"text",inputMode:"numeric",maxLength:9,placeholder:c,onChange:P,value:Z,onInput:P,disabled:i}),d&&l.createElement(a.Z,{flexDirection:"column",alignItems:"center",my:2},u&&l.createElement(b,{disabled:9!==Z.length,"data-testid":"zipcode-button"},u),o&&l.createElement(v,{"data-testid":"location-button",variation:"outline",boxShadow:"none",onClick:E},o)))}E.defaultProps={hasError:!1,initialValue:"",loading:!1,locationButtonText:void 0,onChange:void 0,showButton:!1,inputButtonText:void 0,onClickLocationButton(){}};var Z=E},1587:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(2784);n(13980);var a=n(99673),r=n(55403),i=n(34490),o=n(19527);let s=(0,a.ZP)(o.Z)`
  align-items: center;
  max-height: 44px;
  cursor: pointer;
`,c=(0,a.ZP)(o.Z).attrs(()=>({alignItems:["center","flex-start","flex-start"],color:"text.lightest",flexDirection:["row","column","column"],fontSize:0,fontWeight:"normal"}))``,d=(0,a.ZP)(c).attrs(()=>({ml:[1,0,0],fontWeight:"bold"}))``,u=(0,a.ZP)(o.Z)`
  ${(0,r.aK)("small")} {
    max-height: 44px;
    max-width: 44px;
    width: 100%;
  }
`,m=(0,a.ZP)(i.lO8).attrs(e=>({color:(0,r.uu)("lightest")(e)}))``;var p=n(86349);let g=({city:e,defaultText:t,formatter:n,iconHeight:a,iconWidth:r,state:i,text:o,zipcode:g})=>{let f=(0,p.RZ)({formatter:n,zipCode:g,zipCodeCity:e,zipCodeState:i,includeAddress:!1});return l.createElement(s,null,l.createElement(u,null,l.createElement(m,{width:r,height:a})),l.createElement(c,{"data-testid":"text-line"},g&&i&&e?l.createElement(l.Fragment,null,o," ",n?l.createElement(d,null,f):f):t))};g.defaultProps={city:void 0,formatter:void 0,iconHeight:void 0,iconWidth:void 0,state:void 0,zipcode:void 0};var f=g},39146:function(e,t,n){n.d(t,{iG:function(){return ek.Z},QP:function(){return l.Z},Ct:function(){return r.Z},lr:function(){return i.Z},F7:function(){return o.Z},g0:function(){return s.Z},HS:function(){return c.Z},L2:function(){return d.Z},pl:function(){return eE},hU:function(){return m.Z},aV:function(){return E.Z},RG:function(){return ec},mY:function(){return w},dV:function(){return a.Z},tA:function(){return C.Z},MS:function(){return z.Z},lF:function(){return eR},Ee:function(){return eZ.Z},me:function(){return S.Z},Cq:function(){return I.Z},qr:function(){return eC.Z},Mj:function(){return R.Z},KI:function(){return V},kV:function(){return K.Z},ok:function(){return ey},rE:function(){return eO.Z},Rs:function(){return em},YQ:function(){return ew.Z}}),n(33309);var l=n(52337),a=n(3310);n(78045),n(96504);var r=n(98460);n(67619),n(94296),n(72720);var i=n(49542);n(2761),n(84022),n(12241);var o=n(57142);n(18822);var s=n(16618),c=n(99554),d=n(1729),u=n(33055);n(2490);var m=n(15309);n(97769);var p=n(2784),g=n(13980),f=n(34490),h=n(99673),b=n(55403),v=n(63825);h.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;let x={normal:h.iv`
    font-size: ${e=>(0,b.R)("fontSizes.2")(e)}px;
  `,big:h.iv`
    font-size: ${e=>(0,b.R)("fontSizes.4")(e)}px;
    font-weight: ${e=>(0,b.R)("fontWeights.bold")(e)};
  `};(0,h.ZP)(v.Z)`
  color: ${e=>(0,b.uu)("base")(e)};
  margin-bottom: 5px;

  ${e=>x[e.type]}
`;var E=n(78012);n(33359),n(41065);var Z=n(71180);let $=h.ZP.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.color||"#fff"};
  border-radius: 6px;
  padding: 3px 5px;
  cursor: default;
`,P=h.ZP.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0px;
`,y=h.ZP.p`
  font-size: ${e=>(0,b.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,b.R)("fontWeights.bold")(e)};
  color: ${e=>e.color||"#fff"};
  margin: 0 5px;
`,k=({value:e,color:t,icon:n,textColor:l,onClick:a,hasInfo:r})=>p.createElement($,{color:t,"data-testid":"loyalty",onClick(e){e.preventDefault(),e.stopPropagation()}},n&&p.createElement(f.JO$,{"data-testid":`${n}Icon`,name:n,width:"12px",height:"12px",color:"#fff"}),p.createElement(y,{color:l,"data-testid":"loyalty-value"},(0,Z.oB)({value:parseFloat(e)})),r&&p.createElement(P,{"data-testid":"loyalty-info-button",onClick:a},p.createElement(f.JO$,{name:"HelpOutline",color:"none",width:"12px",height:"12px"})));k.defaultProps={hasInfo:!1,color:void 0};var w=k;n(28982),n(19620),n(81484),n(563);var C=n(23458),z=n(58125),S=n(11151),I=n(73172),R=n(37222);n(57991);var O=n(7896),F=n(31461),j=n(97728),M=n(87043);let L=h.iv`
  margin-right: 12px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
`,A=(0,h.ZP)(M.kC)`
  padding: 16px 12px;
  align-items: center;
`,D=(0,h.ZP)(f._Ps)`
  ${L}
  ${b.$_}
`,W=(0,h.ZP)(f.XqY)`
  ${L}
  ${b.$_}
`,B=(0,h.ZP)(f.Gb7)`
  ${L}
  ${b.$_}
`,T=(0,h.ZP)(f.f9j)`
  ${L}
  ${b.$_}
`,_=(0,h.ZP)(f.Ju)`
  ${L}
  ${b.$_}
`,H=(0,h.ZP)(f.oFb)`
  ${L}
  ${b.$_}
  min-width: 30px;
`,N=(0,h.ZP)(f.gbh)`
  ${L}
  ${b.$_}
  min-width: 30px;
`,J=(0,h.ZP)(v.Z)`
  flex: 4;
  font-size: ${e=>(0,b.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,b.R)("fontWeights.medium")(e)};
  line-height: ${e=>(0,b.R)("lineHeights.big")(e)};
`,U=(0,h.ZP)(v.Z)`
  display: block;
  font-size: ${e=>(0,b.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,b.R)("fontWeights.regular")(e)};
  padding-right: 15px;
`,G=(0,h.ZP)(v.Z)`
  flex: 1;
  font-size: ${e=>(0,b.R)("fontSizes.1")(e)}px;
  text-align: center;
  color: ${e=>{let{free:t}=e,n=(0,F.Z)(e,["free"]);return t?(0,b.ow)("secondary.base")(n):(0,b.ow)("text.base")(n)}};
  display: contents;
`,q=e=>{let{complement:t,description:n,price:l,currency:a,time:r,type:i,unit:o,freeShippingLabel:s}=e,c=(0,F.Z)(e,["complement","description","price","currency","time","type","unit","freeShippingLabel"]);return p.createElement(A,(0,O.Z)({"data-testid":"shipping-item"},c),["store_pickup","pickup_point"].includes(i)&&p.createElement(W,{fill:"background.dark"})||(e=>{let t=(0,j.Z)({currency:a});return t?p.createElement(N,{fill:e}):"hours"===o&&r<=2?p.createElement(H,{fill:e}):"days"===o&&0===r?p.createElement(B,{fill:e}):"days"===o&&1===r?p.createElement(T,{fill:e}):"working_days"===o&&1===r?p.createElement(_,{fill:e}):!t&&p.createElement(D,{fill:e})})("background.dark"),p.createElement(J,null,n,p.createElement(U,{as:"span"},t)),!!Number(l)&&p.createElement(G,null,(0,Z.oB)({value:l}))||p.createElement(G,{free:!0},s))};q.defaultProps={freeShippingLabel:"Frete Gr\xe1tis",unit:""};var V=q,K=n(15185);n(50919);var X=n(84546);let Y=h.ZP.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`,Q=(0,h.ZP)(v.Z).attrs({fontWeight:"bold",fontSize:3,color:"primary",mb:2})``,ee=({recommends:e,title:t})=>p.createElement(X.Z,null,p.createElement(v.Z,{fontSize:4,mb:4},t),p.createElement(Y,null,e.map((e,t)=>p.createElement(X.Z,{key:t},p.createElement(Q,null,e.name),p.createElement(v.Z,null,e.city),p.createElement(I.Z,{score:e.score}),p.createElement(v.Z,{lineHeight:1},e.text)))));ee.defaultProps={recommends:[],title:""};var et=n(68054);let en=h.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  ${et.$_}
  ${et.GQ}
`,el=(0,h.ZP)(X.Z)``,ea=(0,h.ZP)(X.Z).attrs(e=>Object.assign({color:"text.white",fontWeight:"bold",fontSize:0},e))`
  ${b.$_}
`,er=(0,h.ZP)(M.rU).attrs(e=>Object.assign({color:"text.white",fontSize:0,p:0},e))``,ei=e=>{let{message:{text:t=""}={},loginLink:{text:n="Entre ou cadastre-se",url:l="#"}={},handleUnsignedClick:a}=e,r=(0,F.Z)(e.message,["text"]),i=(0,F.Z)(e.loginLink,["text","url"]);return p.createElement(el,{"data-testid":"stereo-login_menu-unsigned_user_state-container"},t&&p.createElement(ea,r,t),p.createElement(er,(0,O.Z)({onClick(){a()},href:l},i),n))};ei.defaultProps={message:{},loginLink:{},handleEventClick:g.func.isRequired};let eo=({username:e,welcomeMessage:t,logoutMessage:n,signOutUrl:l,menuLinks:a=[],onLogout:r,handleSignedHover:i,handleSignedMenuClick:o})=>p.createElement(M.Lt,{mouseenter:!0,pointing:!0},p.createElement(M.Lt.Title,{color:"text.white",fill:"background.lighter",onMouseEnter:i},t||p.createElement("span",null,"Ol\xe1, ",p.createElement("b",null,e))),p.createElement(M.Lt.Menu,{pointing:!0,fontSize:0,p:2},a.map(({icon:e,label:t,url:n},l)=>p.createElement(M.Lt.Item,{key:l,startIcon:e,p:1,my:2},p.createElement(M.rU,{onClick:()=>o(t),href:n,fontSize:0,"data-testid":`link-${l}`},t))),p.createElement(M.Lt.Divider,null),p.createElement(M.Lt.Item,{p:1,my:2,disableHover:!0},n||`N\xe3o \xe9 ${e}? `,p.createElement(M.rU,{underline:!0,px:0,fontSize:0,href:l,onClick(){r(),o("sair")},"data-testid":"link-logout"},"Sair"))));eo.defaultProps={welcomeMessage:"",logoutMessage:"",signOutUrl:"",handleSignedHover(){},handleSignedMenuClick(){}};let es=({isSignedIn:e,unsignedConfig:t,signedConfig:n,signOutUrl:l,onLogout:a,onUnsignedClick:r,onSignedHover:i,onSignedMenuClick:o})=>p.createElement(en,null,e?p.createElement(eo,(0,O.Z)({},n,{signOutUrl:l,onLogout:a,handleSignedHover:i,handleSignedMenuClick:o})):p.createElement(ei,(0,O.Z)({},t,{handleUnsignedClick:r})));es.defaultProps={isSignedIn:!1,unsignedConfig:{},signedConfig:{},onLogout(){},onUnsignedClick(){},onSignedHover(){},onSignedMenuClick(){},signOutUrl:""};var ec=es;let ed=h.ZP.div`
  & > svg {
    transform: scale(1.2);
  }
`,eu=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:a="#db44a7",fontColor:r="#fff",iconColor:i="#fff",onClick:o})=>p.createElement(M.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:a,fontColor:r,onClick:o},p.createElement(ed,null,p.createElement(f.Xdw,{color:i})));eu.defaultProps={amount:0,onClick(){},nullable:!0};var em=eu,ep=n(10200);let eg=h.ZP.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: ${(0,b.R)("space.3")}px;
  margin-right: 8px;
`,ef=h.ZP.li`
  list-style: none;
`,eh={color:"text.greyishBlue",fontSize:[0,0,0,1],fontWeight:["bold","bold","bold","regular"]},eb=(0,h.ZP)(ep.Z).attrs(e=>Object.assign({p:0},eh,e))`
  ${b.$_}
  ${et.cp}
`,ev=h.ZP.span.attrs(e=>Object.assign({},eh,e))`
  ${b.$_}
  ${et.cp}
`,ex=({data:e,handleHorizontalLinksClick:t})=>{let{linksList:n=[]}=e;return p.createElement(eg,{"data-testid":"horizontal-links-elem"},n.map((e,n)=>p.createElement(ef,{key:`link-item-${n}`},e.url?p.createElement("div",{onClick:()=>t(e.label)},p.createElement(eb,{href:e.url},e.label)):p.createElement(ev,null,e.label))))};ex.defaultProps={data:{linksList:[]},handleHorizontalLinksClick(){}};var eE=ex,eZ=n(65055);n(51382);let e$=h.ZP.form``;e$.Link=(0,h.ZP)(M.rU).attrs(e=>Object.assign({color:"text.lightest"},e))`
  ${b.$_}
`,e$.Header=h.ZP.div.attrs(e=>Object.assign({color:"text.lightest",fontSize:0},e))`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(0,b.R)("space.1")}px;
  }

  ${e$.Link} {
    color: ${(0,b.R)("colors.lightBlue")};
    ${et.cp}
  }

  ${b.$_};
`,e$.Title=h.ZP.h2.attrs(e=>Object.assign({fontSize:2,fontWeight:"medium",color:"text.lightest"},e))`
  ${b.$_}
  ${et.cp}
`,e$.InputWrapper=h.ZP.div.attrs(e=>Object.assign({p:"1"},e))`
  display: flex;
  align-items: center;
  ${et.Dh}
`,e$.Input=(0,h.ZP)(M.II).attrs(e=>Object.assign({mr:"2"},e))`
  ${et.Dh}
`,e$.SubmitBtn=(0,h.ZP)(M.zx).attrs(e=>Object.assign({color:"secondary",size:"small",m:"10px 0"},e))``;let eP=({title:e,policy:t,onSubmitForm:n})=>{let[l,a]=(0,p.useState)(""),[r,i]=(0,p.useState)(""),o=(e,t)=>{t(e,{name:l,email:r})};return p.createElement(e$,{"data-testid":"subscription-form-elem",onSubmit:e=>o(e,n)},p.createElement(e$.Header,null,p.createElement(f.TbV,{"data-testid":"link-icon",color:"currentColor",width:25}),p.createElement(e$.Title,null,e),p.createElement(e$.Link,{"data-testid":"link-policy",underline:!0,href:null==t?void 0:t.url},null==t?void 0:t.label)),p.createElement(e$.InputWrapper,null,p.createElement(u.Z,{text:"digite o seu nome",htmlFor:"input-name"}),p.createElement(e$.Input,{id:"input-name","data-testid":"input-name",placeholder:"digite o seu nome",value:l,onChange:e=>a(e.target.value)}),p.createElement(u.Z,{text:"digite o seu email",htmlFor:"input-email"}),p.createElement(e$.Input,{id:"input-email","data-testid":"input-email",placeholder:"digite o seu email",type:"email",value:r,onChange:e=>i(e.target.value)}),p.createElement(e$.SubmitBtn,{"data-testid":"submit-btn",disabled:!r||!l,type:"submit",onClick:e=>o(e,n)},"Enviar")))};var ey=eP,ek=n(38825);n(41237);var ew=n(1587),eC=n(27408);let ez=(0,h.ZP)(M.xv)`
  font-size: ${e=>(0,b.R)("fontSizes.0")(e)}px;
  color: ${(0,b.uu)("scratched")};
  text-align: ${({textAlign:e})=>e};

  span {
    color: ${(0,b.R)("palette.secondary.dark")};
    font-weight: ${(0,b.R)("fontWeights.bold")};
  }
`;var eS=n(12468);let eI=()=>p.createElement("span",null,"Frete gr\xe1tis");var eR=function({cost:e,displayMode:t,costDescription:n}){return p.createElement(p.Fragment,null,e?p.createElement(ez,{"data-testid":"shipping-cost",textAlign:t===eS.Co?"center":null},0===Number(e)?p.createElement(eI,null):n):null)};n(97949);var eO=n(62458)}}]);
//# sourceMappingURL=9457-a6dcede3de12299a.js.map