"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412],{38825:function(e,t,i){i.d(t,{Z:function(){return g}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(99673),l=i(34490),s=i(86349),d=i(87043);let c=(0,o.ZP)(d.Yd)``,u=(0,o.ZP)(l.Xdw).attrs(e=>Object.assign({color:"#db44a7"},e))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`,p=(0,o.ZP)(l.Xdw).attrs(e=>Object.assign({color:"transparent",stroke:"darkGray"},e))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;function h(e){let{active:t,onClick:i,width:o,height:l}=e,s=(0,n.Z)(e,["active","onClick","width","height"]);return a.createElement(c,(0,r.Z)({"data-testid":"add-wishlist-button",onClick:i},s),t?a.createElement(u,{"data-testid":"filled-icon",width:o,height:l}):a.createElement(p,{"data-testid":"empty-icon",width:o,height:l}))}h.defaultProps={active:!1,width:20,height:20};var g=h},33309:function(e,t,i){i.d(t,{V:function(){return h}});var r=i(2784);i(13980);var n=i(66762),a=i(99673),o=i(87043);let l=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,s=(0,a.ZP)(o.xv)`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`,d=(0,a.ZP)(o.xv)`
  margin-bottom: 20px;
  font-size: 14px;
`,c=(0,a.ZP)(o.zx)`
  font-size: 12px;
  text-transform: uppercase;
`;var u=function({title:e,message:t,showDialog:i,onClickOutside:a}){return r.createElement(n.Z,{type:"alert",position:"center",showClose:!1,visible:i,onClickOutside:a,portal:!0},r.createElement(l,null,r.createElement(s,null,e),r.createElement(d,null,t),r.createElement(c,{full:!0,onClick:a},"Entendi")))};let p=()=>{let[e,t]=(0,r.useState)(""),[i,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(!1),l=({title:e="Aten\xe7\xe3o",message:i})=>{t(e),n(i),o(!0)},s=()=>r.createElement(r.Fragment,null,a&&r.createElement(u,{title:e,message:i,showDialog:a,onClickOutside:()=>o(!1),width:"300px"}));return{showAlertMessage:l,Alert:s}};var h=p},52337:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(2784);i(13980);var n=i(34490),a=i(99673),o=i(55403),l=i(84546),s=i(63825);let d=(0,a.ZP)(l.Z)`
  width: 100%;
  background: ${e=>(0,o.UX)(`${e.intent}.base`)(e)};
`,c=(0,a.ZP)(s.Z)`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: ${e=>(0,o.R)("space.2")(e)}px;
  font-size: ${e=>(0,o.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,o.UX)(`${e.intent}.text`)(e)};
`;function u({message:e,intent:t,icon:i,styleContainer:a,styleMessage:o}){let l=e=>"string"!=typeof e?i:r.createElement(n.JO$,{color:(null==o?void 0:o.color)||`alert.${t}.text`,name:e,"data-testid":"alert-icon"}),s=e=>{let t=(null==e?void 0:e.icon)||i;return r.createElement(r.Fragment,null,t&&l(t),"string"==typeof e?e:(null==e?void 0:e.text)||e)};return r.createElement(d,{intent:t,"data-testid":"alert-container",style:a},Array.isArray(e)?e.map((e,i)=>r.createElement(c,{key:`alert-message-${i}`,intent:t,"data-testid":"alert-text",style:o},s(e))):r.createElement(c,{intent:t,"data-testid":"alert-text",style:o},s(e)))}u.defaultProps={message:"",intent:"info",icon:null,styleContainer:{},styleMessage:{}};var p=u},77954:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(7896),n=i(2784);i(13980);var a=i(86349),o=i(34014),l=i(7069),s=i(52337),d=i(87043);let c=({showAlert:e,message:t,icon:i,alignment:r})=>e?n.createElement(d.kC,{width:"100%",justifyContent:r},n.createElement(s.Z,{"data-testid":"warning-text",message:t,intent:"warning",icon:i,styleContainer:{maxWidth:"max-content"}})):null;c.defaultProps={showAlert:!1,message:"",icon:"",alignment:"center"};let u=({attribute:e,variations:t,onChange:i,alignment:s,showWarningText:d,warningMessage:u,iconWarningText:p})=>{var h;return n.createElement(o.Z,(0,r.Z)({},e,{alignment:s}),null==e?void 0:null==(h=e.values)?void 0:h.map((r,o)=>{let s=(0,a.KF)(t,r);return n.createElement(l.Z,{key:`${r}-${o}`,value:r,type:null==e?void 0:e.type,checked:(null==e?void 0:e.selected)&&(null==e?void 0:e.current)===r,disabled:!(null!=s&&s.isAvailable)&&!(null!=s&&s.available),onChange:i},r)}),n.createElement(c,{showAlert:d,message:u,icon:p,alignment:s}))};u.defaultProps={attribute:{},variations:[],alignment:"",showWarningText:!1,warningMessage:"",iconWarningText:""};var p=u},34014:function(e,t,i){i.d(t,{Z:function(){return m}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(34490),l=i(99673),s=i(55403),d=i(19527);let c={start:"left",end:"right",center:"center"},u=l.ZP.div`
  position: relative;
`,p=l.ZP.div`
  width: 100%;
  color: ${(0,s.uu)("attributeLabel")};
  text-align: ${({bordered:e,alignment:t})=>e?"left":c[t]};
  margin-top: 8px;
  margin-bottom: 8px;
  ${e=>{let{bordered:t}=e,i=(0,n.Z)(e,["bordered"]);return t&&l.iv`
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: ${(0,s.dF)("white")(i)};
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      border-color: ${(0,s.kJ)("light")(i)};

      ${(0,s.aK)("large")} {
        cursor: pointer;
      }
    `}}

  ${(0,s.aK)("large")} {
    svg {
      transform: rotate(90deg);
    }
  }
`,h=(0,l.ZP)(d.Z).attrs(({alignment:e,gap:t})=>({justifyContent:e,rowGap:2,columnGap:t||2}))`
  flex-flow: row wrap;

  ${({smoothable:e})=>e&&l.iv`
      overflow: hidden;
      height: 105px;
    `};
`,g=a.forwardRef((e,t)=>{let{children:i,label:l,current:s,selected:d,bordered:c,onClick:g,onBlur:m,alignment:f,smoothable:b,showTitle:x}=e,v=(0,n.Z)(e,["children","label","current","selected","bordered","onClick","onBlur","alignment","smoothable","showTitle"]);return a.createElement(u,{ref:t,onBlur:m,tabIndex:1,"data-testid":"attribute-container"},x?a.createElement(p,{bordered:c,alignment:f,onClick:g,"data-testid":"attribute-label"},d?a.createElement("span",null,l,": ",a.createElement("strong",null,s)):`Selecionar ${l}`,c&&a.createElement(o.olP,{width:8,height:12})):null,a.createElement(h,(0,r.Z)({alignment:f,smoothable:b},v),i))});g.defaultProps={label:"",current:"",selected:!1,bordered:!1,alignment:"center",smoothable:!1,showTitle:!0},g.displayName="AttributeBase";var m=g},5086:function(e,t,i){i.d(t,{Z:function(){return v}});var r=i(31461),n=i(7896),a=i(2784);i(13980);var o=i(34490),l=i(86349),s=i(19527),d=i(7029),c=i(34014),u=i(7069),p=i(99673),h=i(55403);let g=(0,p.ZP)(s.Z).attrs(e=>Object.assign({},e))`
  ${({shouldHover:e})=>e&&p.iv`
      &:hover {
        border-color: ${(0,h.dF)("primary")};
      }
    `}
`,m=({onClick:e,show:t})=>t&&a.createElement(s.Z,{"data-testid":"attribute-color-more",position:"absolute",justifyContent:"center",background:"linear-gradient(0deg, #ffffff, transparent 80%)",color:"text.primary",fontWeight:"bold",cursor:"pointer",width:1,bottom:0,height:36,padding:1,onClick:e},"ver mais cores"),f=({attributesLength:e,onClick:t,show:i,style:r})=>i&&a.createElement(g,(0,n.Z)({"data-testid":"attribute-color-more",fontSize:4,borderRadius:"default",alignItems:"center",justifyContent:"center",cursor:"pointer",borderWidth:1,borderColor:"#e5e5e5",borderStyle:"solid",onClick:t},r),"+ ",e),b={smooth:m,button:f},x=e=>{let{attribute:t,variations:i,onChange:s,onVariationClick:p,title:h,alignment:g,minLength:m,variant:f,showTitle:x,style:v}=e,w=(0,r.Z)(e,["attribute","variations","onChange","onVariationClick","title","alignment","minLength","variant","showTitle","style"]),$=["smooth","button"].includes(f)?f:"smooth",Z=null==b?void 0:b[$],[y,k]=(0,a.useState)("smooth"===$),[E,C]=(0,a.useState)("button"===$),[P,S]=(0,a.useState)([]),j=(0,l.hY)(t)(i),z=(0,a.useMemo)(()=>{var e;let r=j.reduce((e,r)=>[...e,Object.assign({},(0,l.KF)(i,r),{selected:E&&(null==t?void 0:t.selected)&&(null==t?void 0:t.current)===r})],[]);return null==(e=(0,l.gf)(r))?void 0:e.map(e=>e.value)},[t,i]),R=(0,a.useMemo)(()=>z.length>m,[]);(0,a.useEffect)(()=>z.length>m&&"button"===$?S(z.slice(0,m-1)):S(j),[z]);let O=()=>y?k(!y):(C(!E),S(P));return a.createElement(c.Z,(0,n.Z)({},t,{smoothable:R&&y,alignment:g,showTitle:x},w),null==P?void 0:P.map((e,r)=>{let{image:n,path:c}=(0,l.KF)(i,e)||{},g=(0,l.lm)(i,e);return a.createElement(u.Z,{key:`${e}-${r}`,value:e,type:t.type,path:c,checked:t.selected&&t.current===e,disabled:!g,onChange:s,onVariationClick:p,style:v},n?a.createElement(d.Z,{alt:`${h} ${e}`,title:e,src:n,width:50,height:50}):a.createElement(o.JO$,{name:"Camera",width:29,height:25,color:"lightGray"}))}),R&&a.createElement(Z,{show:y||E,attributesLength:t.values.length-(m-1),style:v,onClick:x?O:s}))};x.defaultProps={attribute:{},disabled:!1,variations:[],title:"",alignment:"",minLength:5,variant:"smooth",showTitle:!0,onVariationClick:null,style:{width:"70px",height:"70px",bg:"background.base",fontWeight:"bold",color:"text.base"}};var v=x},7069:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(19527),l=i(99673),s=i(55403);let d=l.ZP.input`
  display: none;

  &:checked ~ label {
    background-color: ${(0,s.dF)("primary")};
    border-color: ${(0,s.dF)("primary")};
    color: ${(0,s.uu)("white")};
    cursor: default;
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("white")};
    color: ${(0,s.uu)("light")};
    cursor: not-allowed;

    img {
      filter: grayscale(1);
      opacity: 0.2;
    }
  }

  &[name='color'] {
    & ~ label {
      background-color: ${(0,s.dF)("white")};
      height: ${({height:e})=>`${e}`};
      width: ${({width:e})=>`${e}`};

      & img {
        width: 57px;
        height: 100%;
      }

      &:hover {
        border-color: ${(0,s.dF)("primary")};
      }
    }

    &:checked ~ label {
      border-width: 2px;
    }
  }
`,c=l.ZP.div`
  position: relative;
  display: inline-flex;

  ${(0,s.aK)("large")} {
    &:first-child {
      margin-left: 0;

      label {
        ${({type:e})=>"volume"===e&&"border-top-width: 0px"};
      }
    }
  }
`,u=e=>{let{checked:t,disabled:i,type:l,value:s,children:u,onChange:p,style:h,path:g,onVariationClick:m}=e,f=(0,n.Z)(e,["checked","disabled","type","value","children","onChange","style","path","onVariationClick"]);return a.createElement(c,{type:l,onClick:e=>m?m(e,{value:s,type:l,path:g}):null},a.createElement(d,(0,r.Z)({},f,{"data-testid":"attribute-input",type:"radio",name:l,value:s,id:`${l}-${s}`,checked:t,disabled:i,onChange:e=>p(e,{value:s,type:l}),height:(null==h?void 0:h.height)||"70px",width:(null==h?void 0:h.width)||"70px"})),a.createElement(o.Z,{as:"label","data-testid":"attribute-item",borderWidth:1,borderColor:"whisper",borderStyle:"solid",borderRadius:"default",padding:2,color:"text.base",fontSize:2,fontWeight:"medium",alignItems:"center",justifyContent:"center",cursor:"pointer",htmlFor:`${l}-${s}`},u))};var p=u},2575:function(e,t,i){i.d(t,{Z:function(){return E}});var r=i(7896),n=i(2784);i(13980);var a=i(34014),o=i(98047),l=i(99673),s=i(55403),d=i(34490),c=i(86349),u=i(84546),p=i(19527),h=i(7069);let g=l.ZP.div`
  background-color: rgba(0, 0, 0, 0.63);
  animation: ${c.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,m=(0,l.ZP)(p.Z)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(0,s.R)("zIndices.2")};
  justify-content: flex-end;

  ${(0,s.aK)("large")} {
    z-index: ${(0,s.R)("zIndices.0")};
    overflow: hidden;
    position: absolute;
    height: auto;
    top: 56px;
    bottom: unset;
  }
`,f=(0,l.ZP)(p.Z)`
  width: ${e=>null!=e&&e.fullWidth?"100%":"85%"};
  overflow: hidden;
  flex-direction: column;
  animation: ${c.$7} 0.3s ease-in-out;
  z-index: ${(0,s.R)("zIndices.1")};

  ${(0,s.aK)("large")} {
    width: 100%;
    position: relative;
    animation: ${c.ie} 0.3s ease-in-out;
  }
`,b=(0,l.ZP)(u.Z)`
  background-color: ${(0,s.dF)("white")};
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  ${(0,s.aK)("large")} {
    border-radius: 6px;
    border: 1px solid;
    border-color: ${(0,s.kJ)("light")};
  }
`,x=(0,l.ZP)(p.Z)`
  justify-content: ${e=>e.hasContentLabel?"space-between":"flex-end"};
  align-items: center;
  background-color: ${(0,s.dF)("base")};
  height: 47px;
  font-size: 20px;
  font-weight: 500;
  color: #515151;
  padding: 0 12px;
  line-height: 39px;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,v=(0,l.ZP)(p.Z)`
  flex-direction: column;
  padding-bottom: 44px;
  overflow-y: auto;
  height: calc(100% - 39px);

  ${(0,s.aK)("large")} {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    max-height: 250px;
  }
`,w=(0,l.ZP)(u.Z)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 45%);
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,$=(0,l.ZP)(d.x8P).attrs(e=>({color:(0,s.uu)("primary")(e)}))`
  ${(0,s.aK)("large")} {
    display: none;
  }
`,Z=(0,l.ZP)(h.Z)`
  & ~ label {
    width: 100%;
    height: 46px;
    border: 0px;
    padding: 0 12px;
    border-radius: 0px;
    border-top-width: 1px;
    border-style: solid;
    border-color: ${(0,s.kJ)("light")};
    color: ${(0,s.uu)("light")};
    justify-content: space-between;
    font-weight: normal;
    line-height: 22px;
  }

  &:checked ~ label {
    background-color: transparent;
    background-color: ${(0,s.dF)("opacityBlue")};
    border-color: ${(0,s.kJ)("light")};
    font-weight: 500;
    color: ${(0,s.uu)("base")};

    &::before {
      content: '';
      width: 5px;
      height: 100%;
      background-color: ${(0,s.dF)("primary")};
      left: 0;
      position: absolute;
    }
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("base")};
    color: ${(0,s.uu)("lighter")};
  }

  ${(0,s.aK)("large")} {
    &:not(:checked, :disabled) ~ label:hover {
      color: ${(0,s.uu)("primary")};
    }

    &:disabled ~ label {
      cursor: not-allowed;
    }
  }
`,y=({label:e,values:t,current:i,selected:r,type:a,variations:l,onChange:s,onClose:d,fullWidth:c})=>n.createElement(m,null,n.createElement(g,{onClick:d}),n.createElement(f,{fullWidth:c,"data-testid":"attribute-list-wrapper"},n.createElement(b,null,n.createElement(x,{hasContentLabel:!!e},e,n.createElement($,{onClick:d,"data-testid":"attribute-close"})),n.createElement(v,null,null==t?void 0:t.map((e,t)=>{let d=(0,o.Z)(l,e);return n.createElement(Z,{key:`${e}-${t}`,value:e,type:a,checked:r&&i===e,disabled:!(null!=d&&d.isAvailable)&&!(null!=d&&d.available),onChange:s},e)})),n.createElement(w,null)))),k=({attribute:e,variations:t,onChange:i,alignment:o,fullWidth:l})=>{let[s,d]=(0,n.useState)(!1),c=(0,n.useRef)(),u=(0,n.useCallback)((e,t)=>{i(e,t),c.current.blur()},[s]);return n.createElement(a.Z,(0,r.Z)({},e,{onClick:()=>d(!s),onBlur:()=>d(!1),alignment:o,ref:c,bordered:!0}),!!s&&n.createElement(y,(0,r.Z)({},e,{fullWidth:l,variations:t,onChange:u,onClose:()=>d(!1)})))};k.defaultProps={attribute:{},disabled:!1,variations:[],alignment:""};var E=k},78045:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(7896),n=i(31461),a=i(2784),o=i(34490);i(13980);var l=i(7029),s=i(99673),d=i(87043);let c=(0,s.ZP)(d.xu).attrs({borderRadius:"circle",width:"24px",height:"24px",overflow:"hidden"})``,u=e=>{let{src:t,alt:i,fill:s,dataTesteIdImage:d,dataTesteIdIcon:u,iconName:p}=e,h=(0,n.Z)(e,["src","alt","fill","dataTesteIdImage","dataTesteIdIcon","iconName"]);return a.createElement(c,(0,r.Z)({"data-testid":"avatar"},h),t?a.createElement(l.Z,{src:t,alt:i,"data-testid":d}):a.createElement(o.JO$,{fill:s,name:p,"data-testid":u}))};u.defaultProps={src:"",alt:"",fill:"#2FA0FD",iconName:"UserReviewIcon"};var p=u},96504:function(e,t,i){i.d(t,{Z:function(){return d}});var r=i(2784);i(13980);var n=i(8719),a=i(99673),o=i(34490);let l=(0,a.ZP)(o.zuq)`
  position: fixed;
  width: 63px;
  height: 63px;
  bottom: 75px;
  right: 26px;
  z-index: 99;
`;function s({onClick:e,show:t}){let[i,a]=(0,r.useState)(t),o=window&&window.innerHeight,s=()=>{(0,n.Z)(),e()},d=()=>{let e=window.pageYOffset;!i&&e>o?a(!0):i&&e<=o&&a(!1)};return(0,r.useEffect)(()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}),[i]),i?r.createElement(l,{"data-testid":"back-to-top",onClick:s}):r.createElement(r.Fragment,null)}s.defaultProps={onClick(){},show:!1},s.displayName="BackToTop";var d=s},98460:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(7896),n=i(2784);i(13980);var a=i(7029),o=i(99673),l=i(55403);let s={miniature:o.iv`
    margin-top: -25px;
    width: 42px;
    height: 32px;
  `,list:o.iv`
    margin-top: -5px;
    width: 50px;
    height: 36px;
  `,gallery:o.iv`
    margin-top: -25px;
    width: 55px;
    height: 40px;
    position: absolute;
    ${(0,l.aK)("small")} {
      width: 55px;
      height: 40px;
    }
  `,productPage:o.iv`
    margin-top: 0px;
    width: 55px;
    height: 40px;
  `},d=o.ZP.div`
  position: relative;
  ${({displayMode:e})=>s[e]||"margin-top: -25px;"}
`,c=e=>{let{width:t,height:i,url:o,tooltip:l}=e,s=o&&o.replace("{w}",t).replace("{h}",i);return o?n.createElement(d,(0,r.Z)({},e,{"data-testid":"wrapper-badge"}),n.createElement(a.Z,(0,r.Z)({src:s,alt:l,"data-testid":"badge"},e))):null};c.defaultProps={tooltip:"",width:"65",height:"50"};var u=c},67619:function(e,t,i){i.d(t,{Z:function(){return m}});var r=i(2784);i(13980);var n=i(55403),a=i(34490),o=i(12468),l=i(99673),s=i(19527);let d=l.ZP.div`
  background-color: ${e=>e.isTransparent?"transparent":(0,n.dF)("lighter")(e)};
`,c=(0,l.ZP)(s.Z)`
  position: relative;
  flex: 0;
  flex-basis: auto;
  height: 32px;
  overflow-y: hidden;
  width: max-content;
  direction: rtl;
  background-color: ${e=>e.isTransparent?"transparent":(0,n.dF)("lighter")(e)};
`,u=(0,l.ZP)(s.Z)`
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 ${e=>(0,n.R)("space.4")(e)}px 0
    ${e=>(0,n.R)("space.2")(e)}px;
  direction: ltr;
`;var p=i(66228),h=i(87043);let g=({isTransparent:e,items:t,seller:i,onLogoClick:o,onClickItem:l,domain:s,logo:g})=>{let{url:m="/",icon:f="LogoMagalu",title:b="p\xe1gina inicial magalu",styles:x={color:n.rS.colors.blue,height:"14px",marginTop:"6px",width:"60px"}}=g||{},v={url:m,icon:r.createElement(a.JO$,{name:f,style:x}),title:b};v.handleClick=o,t.forEach(e=>Object.assign(e,{handleClick:l}));let w=[!i&&v,...t];return r.createElement(d,{isTransparent:e},r.createElement(c,{isTransparent:e},r.createElement(u,null,i&&r.createElement(h.gN,{seller:i}),!i&&w.map((e,i)=>{var n,a;return r.createElement(h.gN,{"data-testid":"breadcrumb-item",key:i,item:Object.assign({},e,{position:i}),active:(n=t.length,1!==i&&n===i),onClick:e.handleClick})}))),r.createElement(p.ZP,{schema:(0,p.ij)(t,s),type:"BreadcrumbList"}))};g.defaultProps={isTransparent:!1,items:[],seller:void 0,onClickItem(){},onLogoClick(){},domain:o.RW};var m=g},94296:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(99673),l=i(87043);let s=(0,o.ZP)(l.xu)`
  display: flex;
  justify-content: end;
  gap: 16px;
  width: ${({isRow:e})=>e?"auto":"100%"};
  flex-direction: ${({isRow:e})=>e?"row":"column"};
`,d=(0,o.ZP)(l.zx)`
  height: 48px;
  min-width: 140px;
  border-radius: 12px;
  padding: 12px 16px;
  width: ${({isRow:e})=>e?"auto":"100%"};
  ${({border:e})=>!e&&o.iv`
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    `}
`;function c(e){let{buttons:t,isRow:i}=e,o=(0,n.Z)(e,["buttons","isRow"]);return a.createElement(s,(0,r.Z)({"data-testid":"cardan-alter-button-box",isRow:i},o),t.map((e,t)=>a.createElement(d,{key:`button-${e.label}-${t}`,onClick:e.onClick,border:e.border,variation:"outline",uppercase:!1,size:"large",isRow:i,"data-testid":`cardan-alter-button-${t}`},e.label)))}c.defaultProps={buttons:[{label:"Alterar ve\xedculo",onClick(){}}],isRow:!1};var u=c},72720:function(e,t,i){i.d(t,{Z:function(){return g}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(99673),l=i(87043);let s=(0,o.ZP)(l.rj).attrs(e=>Object.assign({display:"flex",px:3,py:"10px",backgroundColor:"background.lighter",border:"1px solid #B8C1C4",borderRadius:"8px"},e))`
  width: 100%;
  gap: 14px;
  grid-template-columns: minmax(auto, 42px) auto;
  grid-template-areas: 'f c';
`,d=(0,o.ZP)(l.kC)`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,c=(0,o.ZP)(l.xu).attrs(e=>Object.assign({mr:2,height:"32px"},e))`
  grid-area: f;
`,u=(0,o.ZP)(l.Ee)``,p=(0,o.ZP)(l.xu).attrs(e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"500",fontSize:"14px",lineHeight:"16px"},e))``,h=e=>{let{text:t,alt:i,imageUrl:o}=e,l=(0,n.Z)(e,["text","alt","imageUrl"]);return a.createElement(s,(0,r.Z)({"data-testid":"car-info-container"},l),a.createElement(c,{"data-testid":"info-figure-container"},a.createElement(u,{src:o,alt:i,width:64,height:64,lazy:!0})),a.createElement(d,{"data-testid":"info-container"},a.createElement(p,{"data-testid":"info-text"},t)))};h.defaultProps={text:"",imageUrl:void 0,alt:""};var g=h},49542:function(e,t,i){i.d(t,{Z:function(){return O}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(28249);let l=({direction:e,slides:t,slideIndex:i,showSlideCount:r,infinity:n})=>{let a=i+("next"===e?1:-1),o=null==t?void 0:t.length;return n&&(a=(a+o)%o),r?Math.min(Math.max(a,0),o-1):a},s=({lazy:e=!1,length:t=0,slidesPerView:i=1,active:r=0}={})=>{let n=Array.from(Array(t).keys());if(!e)return n;let a=Math.ceil(t/i),o=t%i||i,l=Math.ceil((r+1)/i),s=l+1;s>a&&(s=1);let d=l-1;d<1&&(d=a);let c=e=>{let t=e*i-i;return n.slice(t,e===a?t+o:t+i)};return[...c(d),...c(l),...c(s)].sort()};function d(e,t){switch(t.type){case"jump":return Object.assign({},e,{desired:t.desired*t.slidesPerView});case"next":var i,r,n;return Object.assign({},e,{desired:(i=t.indicators,r=e.active,(r+(n=t.slidesPerView))%(i*n))});case"prev":return Object.assign({},e,{desired:function(e,t,i){let r=e*i;return(t-i+r)%r}(t.indicators,e.active,t.slidesPerView)});case"done":return Object.assign({},e,{offset:NaN,active:e.desired,visible:t.lazy?Array.from(new Set([...e.visible,...s(Object.assign({},t,{active:e.desired}))])):e.visible});case"drag":return Object.assign({},e,{offset:t.offset});default:return e}}let c={offset:0,desired:0,active:0};function u(e,t,i,r,n){let a=function(e){let t=e.clientWidth;return t/5}(e.event.target),o=-(r*e.deltaX);t(o>=a?{type:r>0?"next":"prev",indicators:i,slidesPerView:n}:{type:"drag",offset:0})}let p=(e,t,i)=>{let r=100/t/3;return r>10&&(r=10),i&&e>1?100-r:100};var h=i(99673),g=i(68054),m=i(55403),f=i(34490),b=i(84546),x=i(63825),v=i(59120);let w={color:"primary.base",width:40,height:40},$=(0,h.ZP)(b.Z)`
  position: relative;
  overflow: hidden;
`,Z=h.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;

  ${({showControls:e})=>e&&h.iv`
      padding-bottom: ${e=>e.insideControls?"0":"25"}px;
    `};

  max-height: ${({itemHeight:e})=>e?`${e}px`:null};
`,y=(0,h.ZP)(b.Z).attrs(({gutter:e,alignContent:t})=>({pr:e?`${e}px`:null,va:t?`${t}`:null}))`
  width: ${({width:e="50%"})=>e};
  &:first-child {
    padding-left: ${({gutter:e})=>e?`${e}px`:null};
  }
  transition: box-shadow 0.4s ease 0s;
  align-content: ${({alignContent:e=null})=>e};
`,k=h.ZP.div`
  overflow: hidden;

  ${({showArrowControls:e})=>e&&h.iv`
      margin: ${e=>e.insideControls?"0px":"0px 40px"};
    `};
`,E=h.ZP.button`
  ${v.z}

  background: rgba(255, 255, 255, 0.5);
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: calc((100% - 40px) / 2);
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  ${e=>e.left&&h.iv`
      left: 0;
    `}

  ${e=>e.right&&h.iv`
      right: 0;
    `}
  
  ${e=>e.insideControls&&h.iv`
      z-index: 2;
    `}

  ${g.AF}
  ${m.$_}
`,C=(0,h.ZP)(f.s$$).attrs(e=>Object.assign({},w,e))`
  ${m.$_}
`,P=(0,h.ZP)(f._Qn).attrs(e=>Object.assign({},w,e))`
  ${m.$_}
`,S=h.ZP.ol`
  position: absolute;
  right: 0;
  bottom: ${e=>e.insideControls?(0,m.R)("space.3")(e):0}px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: auto;
`,j=h.ZP.li`
  position: relative;
  flex: 0 1 auto;
  width: 8px;
  height: 8px;
  margin: 0 0.3em;
  cursor: pointer;
  border: solid 1.2px;
  border-radius: 4px;

  ${e=>e.active?`
        background: ${(0,m.ow)("text.scratched")(e)};
        border-color: ${(0,m.ow)("text.scratched")(e)};
      `:`
        background: ${(0,m.ow)("background.lighter")(e)};
        border-color: ${(0,m.ow)("text.scratched")(e)};
      `}

  ${(0,m.aK)("small")} {
    width: 10px;
    height: 10px;
    border-radius: 8px;
  }
`,z=(0,h.ZP)(x.Z)`
  margin-top: 10px;
  color: #697277;
  display: flex;
  justify-content: center;
`,R=e=>{let{children:t,slidesPerView:i,showPartial:h,showPartialNextSlide:g,interval:m,transitionDuration:f,auto:b,showArrowControls:x,showControls:v,showSlideCount:w,infinity:R,insideControls:O,onChange:F,gutter:T,itemHeight:A,isProductCarousel:I,lazy:M,goTo:N,verticalAlign:K}=e,W=(0,n.Z)(e,["children","slidesPerView","showPartial","showPartialNextSlide","interval","transitionDuration","auto","showArrowControls","showControls","showSlideCount","infinity","insideControls","onChange","gutter","itemHeight","isProductCarousel","lazy","goTo","verticalAlign"]),V=a.Children.toArray(t),L=null==V?void 0:V.length,B=Math.min(L,i),{handlers:Q,style:U,cardWidth:X,indicators:D,setActive:J,active:q,visible:G}=function({length:e,interval:t,transitionDuration:i,auto:r,slidesPerView:n,showPartial:l,showPartialNextSlide:h,lazy:g}){let m=p(e,n,l||h),f=`${m/n}%`,b=Math.ceil(e/n),x=`transform ${i}ms ease`,[v,w]=(0,a.useReducer)(d,Object.assign({},c,{visible:s({lazy:g,length:e,active:0,slidesPerView:n})})),$=(0,o.QS)({onSwiping(e){w({type:"drag",offset:e.deltaX})},onSwipedLeft(e){u(e,w,b,1,n)},onSwipedRight(e){u(e,w,b,-1,n)},trackMouse:!1,trackTouch:!0});(0,a.useEffect)(()=>{let e=r&&setTimeout(()=>w({type:"next",indicators:b,slidesPerView:n}),t);return()=>clearTimeout(e)},[r,v.offset,v.active]),(0,a.useEffect)(()=>{let t=setTimeout(()=>w({type:"done",lazy:g,length:e,slidesPerView:n}),i);return()=>clearTimeout(t)},[v.desired]);let Z=l?(100-m)/2:0,y=0!==v.active?Z:0,k={transform:"translateX(0)",width:`${m*(e/n)}%`,left:`-${v.active*(m/n)-y}%`};if(v.desired!==v.active){let E=Math.abs(v.active-v.desired)/n,C=Math.sign(v.offset||0),P=-1*Math.sign(v.desired-v.active),S=0;0===v.active&&(S=Z/e/n),0===v.desired&&(S=-(Z/(e/n)*1)),k.transition=x,k.transform=`translateX(${100*(C||P)/(e/n)*E+S}%)`}else Number.isNaN(v.offset)||(k.transform=`translateX(${v.offset}px)`);return{active:v.active,setActive:e=>w({type:"jump",desired:e,slidesPerView:n}),handlers:$,style:k,cardWidth:f,indicators:b,visible:v.visible}}({length:L,interval:m,transitionDuration:f,auto:b,slidesPerView:B,showPartial:h,showPartialNextSlide:g,lazy:M}),[_,H]=(0,a.useState)(0);return(0,a.useEffect)(()=>{H(N),J(N)},[N]),(0,a.useEffect)(()=>{F(q)},[q]),L>1?a.createElement($,(0,r.Z)({"data-testid":"carousel"},W),x&&a.createElement(E,{"data-testid":"arrow-previous-button","aria-label":"Ver elemento da esquerda",disabled:!R&&_-1<0,left:!0,insideControls:O,onFocus(e){e.currentTarget.style.boxShadow="0 0 0 3px #000"},onBlur(e){e.currentTarget.style.boxShadow=""},onClick(){let e=l({direction:"previous",slides:V,slideIndex:_,showSlideCount:w,infinity:R});H(e),J(e)}},a.createElement(C,null)),a.createElement(k,{showArrowControls:x,insideControls:O},a.createElement(Z,(0,r.Z)({showControls:v,showSlideCount:w,insideControls:O,itemHeight:A},Q,{style:U}),V.map((e,t)=>a.createElement(y,{"data-testid":"carousel-item",width:X,isProductCarousel:I,gutter:h||g||i>1?T:0,alignContent:K,index:t,key:`carousel-item-${V.length}-${t+1}`},G.includes(t)&&e))),v&&V.length>B&&a.createElement(S,{insideControls:O,"data-testid":"carousel-indicators"},Array(D).fill().map((e,t)=>a.createElement(j,{"data-testid":"carousel-indicator",active:q/i===t,onClick(){J(t),H(t)},key:`carousel-indicator-${V.length}-${t+1}`}))),w&&a.createElement(z,{"data-testid":"slide-count"},Math.min(_+1,L)," / ",L)),x&&a.createElement(E,{"data-testid":"arrow-next-button","aria-label":"Ver elemento da direita",disabled:!R&&_+1===D,insideControls:O,onFocus(e){e.currentTarget.style.boxShadow="0 0 0 3px #000"},onBlur(e){e.currentTarget.style.boxShadow=""},onClick(){let e=l({direction:"next",slides:V,slideIndex:_,showSlideCount:w,infinity:R});H(e),J(e)},right:!0},a.createElement(P,null))):t};R.defaultProps={slidesPerView:1,showPartial:!1,showPartialNextSlide:!1,interval:500,transitionDuration:400,auto:!0,showArrowControls:!1,showControls:!0,showSlideCount:!1,onChange(){},gutter:4,infinity:!1,isProductCarousel:!1,insideControls:!1,lazy:!1,goTo:0,verticalAlign:""},R.CarouselItem=y;var O=R},2761:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(2784);i(13980);var n=i(58331),a=i(8341);let o="icons.disabled",l=(0,r.forwardRef)(({value:e,onChange:t},i)=>{let[l,s]=(0,r.useState)(o),[d,c]=(0,r.useState)(o);return(0,r.useEffect)(()=>(s("like"===e?"icons.like":o),c("dislike"===e?"icons.dislike":o),()=>{s(o),c(o)}),[e]),r.createElement(a.Z,{ref:i,gridTemplateColumns:"1fr 1fr",gap:30},r.createElement(n.Z,{type:"like",label:"Sim",color:l,onClick(){c(o),t({target:{value:"like"}})},onMouseOver:()=>s("icons.like"),onMouseLeave:()=>s(t=>"like"===e?t:o),"data-testid":"btn-like"}),r.createElement(n.Z,{type:"dislike",label:"N\xe3o",color:d,onClick(){s(o),t({target:{value:"dislike"}})},onMouseOver:()=>c("icons.dislike"),onMouseLeave:()=>c(t=>"dislike"===e?t:o),"data-testid":"btn-dislike"}))});l.displayName="Confirm";var s=l},12241:function(e,t,i){i.d(t,{Z:function(){return f}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(34490),l=i(99673),s=i(55403),d=i(29869),c=i(60861);let u=(0,l.ZP)(d.Z)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${e=>(0,s.uu)("scratched")(e)};
  height: 52px;
`,p=(0,l.ZP)(c.Z)`
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  height: 52px;
  min-width: 64px;
  padding: ${e=>(0,s.R)("space.1")(e)}px;
`;var h=i(19527),g=i(86349);function m(e){let{value:t}=e,i=(0,n.Z)(e,["value"]),{color:l,"data-testid":s,disabled:d,uppercase:c,variation:m,delay:f}=i,b=(0,n.Z)(i,["color","data-testid","disabled","uppercase","variation","delay"]),[x,v]=(0,a.useState)(!1),[w,$]=(0,a.useState)(d),Z=e=>(v(!0),$(!0),(0,g.vQ)(e),setTimeout(()=>{v(!1),$(!1)},f));return a.createElement(h.Z,null,a.createElement(u,(0,r.Z)({"data-testid":`${s}-input`,readOnly:!0,value:t},b)),a.createElement(p,{color:l,"data-testid":`${s}-button`,disabled:w,onClick:()=>Z(t),startIcon:a.createElement(o.CKM,{width:25,height:21}),uppercase:c,variation:m},x?"Copiado":"Copiar"))}m.defaultProps={color:"primary","data-testid":"copy-to-clipboard",delay:3e3,disabled:!1,uppercase:!1,value:"",variation:"fill"},m.displayName="CopyToClipboard";var f=m},84022:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(31461),n=i(2784);i(13980);var a=i(99673),o=i(55403),l=i(19527);let s=(0,a.ZP)(l.Z)``,d=a.ZP.span`
  background-color: ${e=>e.color||(0,o.dF)("primary")(e)};
  border-radius: 50%;
  color: ${e=>(0,o.uu)("lightest")(e)};
  min-width: ${e=>(0,o.R)("space.3")(e)}px;
  min-height: ${e=>(0,o.R)("space.3")(e)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`,c=e=>{let{count:t}=e,i=(0,r.Z)(e,["count"]);return n.createElement(n.Fragment,null,t>=1&&n.createElement(s,i,n.createElement(d,i,t)))};c.defaultProps={count:0};var u=c},57142:function(e,t,i){i.d(t,{Z:function(){return Z}});var r=i(7896),n=i(31461),a=i(2784);i(13980);var o=i(34490),l=i(19527),s=i(86349),d=i(99673),c=i(55403),u=i(29869),p=i(60861);let h=(0,d.ZP)(l.Z).attrs(e=>Object.assign({},e,{alignItems:"center"}))`
  background-color: ${(0,c.dF)("limeGreen")};
  border-radius: 8px;
  height: 40px;
  padding: 6px;
  width: 100%;
  margin-bottom: 12px;
`,g=(0,d.ZP)(l.Z).attrs(e=>Object.assign({alignItems:"center"},e))`
  color: ${e=>(0,c.R)("colors.black")(e)};
  flex-shrink: 0;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  padding: 0 6px;
  width: fit-content;

  > strong {
    font-weight: 600;
  }

  > svg {
    margin-right: 4px;
  }
`,m=(0,d.ZP)(l.Z)`
  width: 100%;
  position: relative;
`,f=(0,d.ZP)(u.Z)`
  border: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  color: ${e=>(0,c.R)("colors.darkGray")(e)};
  font-weight: 600;
  height: 28px;
`,b=(0,d.ZP)(p.Z).attrs(e=>Object.assign({uppercase:!1},e))`
  align-items: center;
  background-color: ${(0,c.dF)("white")};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  color: ${e=>(0,c.R)("colors.blue")(e)};
  display: flex;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: 600;
  height: 28px;
  min-width: 74px;
  padding: ${e=>(0,c.R)("space.1")(e)}px;

  svg {
    margin-right: 4px;
    fill: ${e=>(0,c.R)("colors.blue")(e)};
  }

  &:hover {
    color: ${e=>(0,c.R)("colors.blue")(e)};
    background-color: ${(0,c.dF)("white")};
  }
`,x=d.ZP.div`
  align-items: center;
  background-color: ${e=>(0,c.R)("colors.deepGreen")(e)};
  border-radius: 4px;
  color: ${e=>(0,c.R)("colors.white")(e)};
  display: flex;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: 600;
  height: 28px;
  justify-content: center;
  opacity: ${({isActive:e})=>e?1:0};
  pointer-events: ${({isActive:e})=>e?"auto":"none"};
  position: absolute;
  transition: opacity 0.2s ease-in;
  width: 100%;
  > svg {
    fill: ${e=>(0,c.R)("colors.white")(e)};
    margin-right: 4px;
  }
`,v=d.ZP.div`
  color: ${e=>(0,c.R)("colors.greyishBrown")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
`,w=({type:e,value:t})=>e&&t?"percentage"===e?`${t}% OFF`:`R$ ${t} OFF`:"";function $(e){let{auxiliaryText:t,code:i,discountType:d,discountValue:c,delay:u=3e3,expirationDate:p,onCopySuccess:$}=e,Z=(0,n.Z)(e,["auxiliaryText","code","discountType","discountValue","delay","expirationDate","onCopySuccess"]),y=Object.assign({},Z),[k,E]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e;return k&&(e=setTimeout(()=>E(!1),u)),()=>{e&&clearTimeout(e)}},[k,u]);let C=async e=>{let t=await (0,s.vQ)(e);t&&(E(!0),$(e))},P=w({type:d,value:c});return a.createElement(l.Z,{flexDirection:"column","data-testid":"coupon-code-copy"},a.createElement(h,null,a.createElement(g,null,a.createElement(o.XVb,{width:16,height:16})," ",a.createElement("strong",null,P)),a.createElement(m,null,a.createElement(f,(0,r.Z)({"data-testid":"coupon-code-input",readOnly:!0,value:i},y)),a.createElement(x,{"data-testid":"coupon-code-copied",isActive:k},a.createElement(o.NGQ,{width:17,height:13})," ",a.createElement("span",null,"Copiado")),a.createElement(b,{"data-testid":"coupon-code-button",startIcon:a.createElement(o.CKM,{width:12,height:14}),onClick:()=>C(i)},"Copiar"))),a.createElement(v,null,t," ",p))}$.defaultProps={auxiliaryText:"Copie o cupom e aplique na sacola. V\xe1lido at\xe9",code:"",discountType:"",discountValue:"",expirationDate:"",onCopySuccess(){}},$.displayName="CouponCodeCopy";var Z=$},18822:function(e,t,i){var r=i(2784);i(13980);var n=i(34490),a=i(99673),o=i(55403),l=i(63825),s=i(19527);(0,a.ZP)(s.Z)`
  display: flex;
  justify-content: ${e=>e.carousel?"start":"center"};
  align-content: center;
  padding: 12px;
  overflow-x: scroll;
`,(0,a.ZP)(l.Z)`
  color: ${e=>(0,o.uu)("scratched")(e)};
  display: block;
  margin-bottom: 8px;
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
`,(0,a.ZP)(s.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`;let d=(0,a.ZP)(s.Z)`
  scroll-snap-align: center;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  line-height: 1.17;
  color: ${e=>e.selected?(0,o.uu)("base")(e):(0,o.uu)("lightest")(e)};
  margin-right: 8px;
  background-color: ${e=>e.selected?(0,o.dF)("primary")(e):(0,o.dF)("lighter")(e)};
  border-radius: 20px;
  height: 38px;

  > svg {
    margin-right: 4px;
    fill: ${e=>e.selected?(0,o.uu)("lightest")(e):(0,o.uu)("base")(e)};
  }
  max-width: 144px;
`,c=(0,a.ZP)(l.Z)`
  width: 81px;
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  font-stretch: normal;
  font-style: normal;
  line-height: ${e=>(0,o.R)("lineHeights.standard")(e)}px;
  letter-spacing: normal;
  height: auto;
  color: ${e=>e.selected?(0,o.uu)("lightest")(e):(0,o.uu)("base")(e)};
`},16618:function(e,t,i){i.d(t,{Z:function(){return d}});var r=i(7896),n=i(2784);i(13980);var a=i(87043),o=i(99673);let l=(0,o.ZP)(a.rU).attrs(()=>({fontSize:2,fontWeight:"900",underlineOnHover:!0,hover:!0,padding:0,color:"primary.base"}))``,s=({data:e,handleClickLink:t})=>n.createElement(n.Fragment,null,null==e?void 0:e.map((e,i)=>"string"==typeof e?e:null!=e&&e.href?n.createElement(l,(0,r.Z)({key:i,"data-testid":"dynamic-text-link",href:null==e?void 0:e.href,onClick:i=>t(i,e)},e),null==e?void 0:e.value):n.createElement(a.xv,(0,r.Z)({key:i},e,{as:"span"}),null==e?void 0:e.value)));s.defaultProps={data:[],handleClickLink(){}};var d=s},80001:function(e,t,i){i.d(t,{Z:function(){return d}});var r=i(2784);i(13980);var n=i(99673),a=i(87043);let o=(0,n.ZP)(a.UQ)`
  div + div:last-child {
    -webkit-line-clamp: unset;
    max-height: 100%;
    ${e=>e.open?`
            max-height: 100%;
          `:`
            max-height: 0px;
          `}
  }
`;var l=i(66228);let s=({faq:e,initialOpen:t,maxQuestions:i,showMoreQuestions:n,showLessQuestions:a,questionAs:s})=>{let[d,c]=(0,r.useState)(e.map(e=>Object.assign({},e,{isOpen:t}))),[u,p]=(0,r.useState)(i),h=e=>{c(t=>t.map((t,i)=>e===i?Object.assign({},t,{isOpen:!t.isOpen}):t))},g=()=>{p(e.length)},m=()=>{p(i)};return r.createElement(r.Fragment,null,d.map((e,t)=>r.createElement(o,{"data-testid":"item-question",display:t>=u?"none":"block",key:`faq-accordion-${t}`,title:e.question,asTitle:s,open:e.isOpen,onClick(){h(t)},openIcon:"ChevronRight",closeIcon:"ChevronUp"},e.answer)),n&&u<d.length&&r.createElement(o,{"data-testid":"show-more",title:n,open:!1,onClick:g,openIcon:"ChevronDown",closeIcon:"ChevronDown",fontWeight:"100"}),a&&u===d.length&&r.createElement(o,{"data-testid":"show-less",title:a,open:!1,onClick:m,openIcon:"ChevronUp",closeIcon:"ChevronUp",fontWeight:"100"}),r.createElement(l.ZP,{schema:(0,l.I1)(d),type:"FAQPage"}))};s.defaultProps={questionAs:"h3",faq:[],initialOpen:!1,maxQuestions:void 0,showLessQuestions:"",showMoreQuestions:""};var d=s}}]);
//# sourceMappingURL=412-a5df32f9d151976a.js.map