"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5703],{5530:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(7896),l=a(31461),o=a(2784);a(13980);var i=a(99673),r=a(87043);let d=(0,i.ZP)(r.rj).attrs(e=>Object.assign({pt:2,pb:3,px:3,backgroundColor:"background.lighter",borderRadius:"medium"},e))`
  grid-template-columns: minmax(auto, 64px) auto;
  grid-template-areas: ${({hasFigure:e})=>e?`'f c'
        'b b'`:`'c c'
        'b b'`};
`,s=(0,i.ZP)(r.kC).attrs(e=>Object.assign({my:3,mx:2},e))`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,c=(0,i.ZP)(r.xu).attrs(e=>Object.assign({my:3,mx:2,minWidth:"64px"},e))`
  grid-area: f;
`,u=(0,i.ZP)(r.Ee)``,p=(0,i.ZP)(r.xu).attrs(e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"medium",fontSize:2},e))``,m=(0,i.ZP)(r.xu).attrs(e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"regular",fontSize:1,lineHeight:"big"},e))``,f=(0,i.ZP)(r.zx)`
  width: 100%;
  text-transform: uppercase;
  grid-area: b;
`,b=e=>{let{data:t,as:a,href:i,image:r,alt:b,onButtonClick:x,buttonProps:g}=e,h=(0,l.Z)(e,["data","as","href","image","alt","onButtonClick","buttonProps"]);return o.createElement(d,(0,n.Z)({"data-testid":"card",hasFigure:Boolean(r)},h),Boolean(r)&&o.createElement(c,{"data-testid":"card-figure"},o.createElement(u,{src:r,alt:b,width:64,height:64,lazy:!0})),(Boolean(t.title)||Boolean(t.text))&&o.createElement(s,{"data-testid":"card-content"},Boolean(t.title)&&o.createElement(p,{"data-testid":"card-title"},t.title),Boolean(t.text)&&o.createElement(m,{"data-testid":"card-text"},t.text)),o.createElement(f,(0,n.Z)({"data-testid":"card-button",forwardedAs:i?"a":a,href:i,onClick:x,children:t.action},g)))};b.defaultProps={as:"button",data:{title:"",text:"",action:""},image:"",href:void 0,alt:"",onButtonClick(){}};var x=b},92877:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(2784);a(13980);var l=a(34490),o=a(70615),i=a(50616),r=a(99673),d=a(55403),s=a(63825);let c=r.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;
  border-bottom: 3px solid #eee;
`,u=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,p=(0,r.ZP)(s.Z)`
  text-align: center;
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
`;function m({label:e,content:t,detailTitle:a,fullScreen:r,children:d,open:s,onCloseSidebar:m,onChangeOpen:f}){let[b,x]=(0,n.useState)(s);function g(){x(!1),f(!1),m()}return(0,n.useEffect)(()=>{x(s),f(s)},[s]),n.createElement(n.Fragment,null,n.createElement(i.Z,{title:e,open:!!t,onClick(){x(!b),f(!b)}},t),n.createElement(o.Z,{direction:"right",visible:b,onClickOutside:g,fullScreen:r},n.createElement(c,null,n.createElement(l.xhZ,{color:"text.light","data-testid":"arrow-back",role:"button",title:"Fechar detalhes",onClick:g}),n.createElement(u,null,n.createElement(p,{"data-testid":"detail-title"},a))),d))}m.defaultProps={content:null,open:!1,onCloseSidebar(){},onChangeOpen(){}};var f=m},36103:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7896),l=a(31461),o=a(2784);a(13980);var i=a(19527),r=a(77954),d=a(5086),s=a(2575);let c={color:d.Z,size:r.Z,voltage:r.Z,volume:s.Z},u=e=>null==e?void 0:e.reduce((e,t)=>{var a;return e[t.type]=Object.assign({},e[t.type],{[t.value]:[...(null==(a=(null==e?void 0:e[t.type])||{})?void 0:a[t.value])||[],t]}),e},{}),p=(e,t)=>e.map((a,n)=>{var l,o,i,r;let d=u(t);return Object.assign({},a,{variations:null==(l=(null==d?void 0:null==(o=d[null==(i=e[n-1])?void 0:i.type])?void 0:o[null==(r=e[n-1])?void 0:r.current])||t)?void 0:l.reduce((e,t)=>Array(...new Set([...e,t.id])),[])})}),m=e=>{let{onAttributeChange:t,attributes:a,variations:d,title:s,alignment:u,colorMinLength:m,colorVariant:f,fullWidth:b,showTitle:x,style:g,onVariationClick:h,showWarningText:v,warningMessage:Z,iconWarningText:E}=e,k=(0,l.Z)(e,["onAttributeChange","attributes","variations","title","alignment","colorMinLength","colorVariant","fullWidth","showTitle","style","onVariationClick","showWarningText","warningMessage","iconWarningText"]),y={color:m},P={color:f},C=p(a,d);return o.createElement(i.Z,{flexDirection:"column",width:1,rowGap:3},C.map((e,a)=>{let l=c[null==e?void 0:e.type]||r.Z,i=d.filter(t=>e.variations.includes(t.id)&&t.type===e.type);return o.createElement(l,(0,n.Z)({fullWidth:b,key:`${null==e?void 0:e.type}-${a}`,attribute:e,variations:i,onChange:t,onVariationClick:h,title:s,alignment:u,minLength:y[null==e?void 0:e.type],variant:P[null==e?void 0:e.type],showTitle:x,style:g,showWarningText:v,warningMessage:Z,iconWarningText:E},k))}))};m.defaultProps={attributes:[],alignment:"center",colorVariant:"smooth",fullWidth:!1,variations:[],showTitle:!0,style:{},onVariationClick:null,showWarningText:!1,warningMessage:"",iconWarningText:""};var f=m},88586:function(e,t,a){var n=a(31461),l=a(2784);a(13980);var o=a(34490),i=a(71180),r=a(68054),d=a(99673),s=a(55403),c=a(19527),u=a(8341),p=a(63825);let m=d.ZP.section`
  padding: 12px;
  border: solid 1px ${e=>(0,s.dF)("whisper")(e)};
  border-radius: 4px;
  ${r.Dh}
`,f=(0,d.ZP)(c.Z)`
  justify-content: space-between;
`,b=(0,d.ZP)(p.Z)`
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
  cursor: pointer;
  text-decoration: underline;
`,x=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  line-height: ${e=>(0,s.R)("lineHeights.input")(e)}em;
`,g=(0,d.ZP)(u.Z)`
  padding: 12px;
  border-bottom: 1px solid ${e=>(0,s.dF)("darker")(e)};
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  margin-bottom: 20px;
`,h=(0,d.ZP)(p.Z)`
  font-size: ${e=>(0,s.R)("fontSizes.2")(e)}px;
`,v=`Cart\xe3o de cr\xe9dito`;var Z=a(563),E=a(70615);let k=e=>{let{plan:t,payments:a,onClick:r,onClose:d,onPaymentMethodChange:s}=e,c=(0,n.Z)(e,["plan","payments","onClick","onClose","onPaymentMethodChange"]),[u,p]=(0,l.useState)(!1),k=()=>{p(!0),r(t)},y=()=>{p(!1),d()},{paymentMethodDescription:P,totalAmount:C,quantity:w,amount:z}=t;return l.createElement(m,c,l.createElement(f,null,l.createElement("div",null,l.createElement(b,{onClick:k,role:"button","aria-hidden":!0,"aria-label":"abrir m\xe9todos de pagamento"},v),l.createElement(x,null,P)),l.createElement("div",null,l.createElement(x,{textAlign:"right"},(0,i.oB)({value:C})),l.createElement(x,{fontWeight:"500"},w,"x ",(0,i.oB)({value:z})))),l.createElement(E.Z,{visible:u,direction:"right",onClickOutside:y,"data-testid":"sidebar-payments"},l.createElement(g,null,l.createElement(o.x8P,{color:"#bcbcbc",onClick:y,role:"button",title:"fechar m\xe9todos de pagamento"}),l.createElement(h,{fontWeight:"normal"},"Formas de pagamento")),l.createElement(Z.Z,{payments:a,onChange:s})))};k.defaultProps={plan:{},payments:{},onClick:()=>({}),onClose:()=>({}),onPaymentMethodChange:()=>({})}},18559:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(31461),l=a(2784);a(13980);var o=a(99673),i=a(55403),r=a(87043);let d=(0,o.ZP)(r.xu)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0,i.R)("space.3")}px;
`,s=(0,o.ZP)(r.xu)`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 8px;
`,c=(0,o.ZP)(r.xu)`
  display: flex;
  justify-content: end;
  flex: ${e=>e.sizeFraction?e.sizeFraction:"1"} 1 0;
  min-width: 170px;
`,u=(0,o.ZP)(r.Ph)`
  display: flex;
  width: 100%;
  select {
    border-radius: 12px;
    font-size: ${(0,i.R)("fontSizes.1")}px;
    color: ${(0,i.R)("colors.gray")};
    padding: 11px 16px;
  }

  select:disabled {
    cursor: not-allowed;
  }

  select option {
    color: black;
  }

  select:has(option:checked:not([value])),
  select:has(option:checked:not([value=''])) {
    color: black;
  }

  select:has(option:checked:not([value])) option,
  select:has(option:checked:not([value=''])) option {
    color: black;
  }
`,p=(0,o.ZP)(r.zx)`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  padding: 12px 16px;
  ${({border:e})=>!e&&o.iv`
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    `}
`;function m(e){let{plateButton:t,submitButton:a,handleFieldChange:o}=e,i=(0,n.Z)(e,["plateButton","submitButton","handleFieldChange"]),r=(e,t,a)=>{let n=Array.isArray(t)?t.map(e=>({label:null==e?void 0:e.name,selected:(null==e?void 0:e.value)===a,value:null==e?void 0:e.value})):[];return[{label:e,selected:""===a,value:"",isPlaceholder:!0},...n]};return l.createElement(d,{as:"form","data-testid":"cardan-form"},l.createElement(s,null,["brand","model","year","version"].map(e=>{let t=`cardan-${e}`,a=i[e],n=r(a.label,a.options,a.value);return l.createElement(c,{key:t},l.createElement(u,{id:t,options:n,onChange:t=>o(e,t),disabled:a.disabled,"data-testid":t}))})),l.createElement(s,null,l.createElement(c,{sizeFraction:"0.25"}),l.createElement(c,{sizeFraction:"0.25"}),l.createElement(c,{sizeFraction:"0.25"},t.isAvailable&&l.createElement(p,{variation:t.variation||"fill",border:"outline"===t.variation,disabled:t.disabled,onClick:t.onClick,uppercase:!1,size:"small","data-testid":"cardan-form-button-plateButton"},t.label)),l.createElement(c,{sizeFraction:"0.25"},l.createElement(p,{variation:a.variation||"fill",border:"outline"===a.variation,disabled:a.disabled,onClick:a.onClick,uppercase:!1,size:"small","data-testid":"cardan-form-button-submitButton"},a.label))))}m.defaultProps={plateButton:{disabled:!1,isAvailable:!0,onClick:null,label:"Busca por placa",variation:"outline"},submitButton:{disabled:!1,onClick:null,label:"Procurar",variation:"fill"},brand:{label:"Todas as marcas",options:[],value:"",disabled:!1},model:{label:"Todos os modelos",options:[],value:"",disabled:!0},year:{label:"Todos os anos",options:[],value:"",disabled:!0},version:{label:"Todas as vers\xf5es",options:[],value:"",disabled:!0},handleFieldChange:null};var f=m},37331:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(2784);a(13980);var l=a(68609),o=a(63825),i=a(99673),r=a(55403),d=a(87043);let s=i.iv`
  font-size: ${(0,r.R)("fontSizes.1")}px;
  border-radius: 12px;
  padding: 12px 16px;
  height: 40px;
`,c=(0,i.ZP)(d.kC).attrs(()=>({as:"form"}))`
  width: 100%;
`,u=(0,i.ZP)(d.kC)`
  width: 100%;
  gap: ${(0,r.R)("space.3")}px;
  margin-bottom: ${(0,r.R)("space.3")}px;
  min-height: 14px;
`,p=(0,i.ZP)(d.II)`
  border-radius: 8px;
  padding: 12px 16px;
  height: 40px;
  width: auto;
  color: ${(0,r.R)("colors.gray")};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(0,r.R)("colors.gray")};
  }
`,m=(0,i.ZP)(d.zx)`
  ${s}
`,f=(0,i.ZP)(d.zx)`
  ${s}
`;function b({onSubmit:e,onRedirect:t,submitButtonLabel:a,redirectButtonLabel:i,inputLabel:r,inputValue:d="",errorMsg:s}){let[b,x]=(0,n.useState)((0,l.Z)(d)),[g,h]=(0,n.useState)(!1),v=e=>{x((0,l.Z)(e.target.value)),h(!1)},Z=(0,n.useCallback)(t=>{t.preventDefault(),h(!0),e({licensePlateNumber:b})},[b,e]),E=(0,n.useCallback)(e=>{e.preventDefault(),t()},[t]);return n.createElement(c,{as:"form","data-testid":"cardan-form"},n.createElement(u,null,n.createElement(o.Z,{fontSize:1},"Digite a placa do ve\xedculo")),n.createElement(u,{style:{marginBottom:"13px"}},n.createElement(p,{placeholder:r,onChange:v,value:b,"data-testid":"cardan-number-license-plate"}),n.createElement(m,{disabled:8!==b.length,onClick:Z,uppercase:!1,"data-testid":"cardan-form-submit-button"},a),t&&n.createElement(f,{onClick:E,uppercase:!1,size:"small",variation:"outline","data-testid":"cardan-form-redirect-button"},i)),n.createElement(u,{style:{marginBottom:"0px"}},n.createElement(o.Z,{fontSize:1,color:"red"},g&&s)))}b.defaultProps={submitButtonLabel:"Buscar ve\xedculo",redirectButtonLabel:"Buscar sem placa",inputLabel:"N\xfamero da Placa"};var x=b},704:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7896),l=a(31461),o=a(2784);a(13980);var i=a(55403),r=a(99673);let d=r.ZP.div`
  background: ${e=>(0,i.dF)("white")(e)};
  border-radius: ${e=>(0,i.R)("space.2")(e)}px;
  padding: 20px 28px;
  text-align: left;
  max-width: 421px;
  width: 100%;
  height: 137px;
  position: relative;
  border: 1px solid #e0e0e0;
  padding-bottom: 30px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 20px;
    background: #f5f5f5;
    border-radius: 0 15px 15px 0;
    border: 1px solid #e0e0e0;
  }

  &::before {
    top: 30px;
    left: -1px;
    border-left-color: #f5f5f5;
  }

  &::after {
    bottom: 30px;
    left: -1px;
    border-left-color: #f5f5f5;
  }
`,s=r.ZP.div`
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 20px;
    background: #f5f5f5;
    border-radius: 15px 0 0 15px;
    border: 1px solid #e0e0e0;
  }

  &::before {
    top: 30px;
    right: -1px;
    border-right-color: #f5f5f5;
  }

  &::after {
    bottom: 30px;
    right: -1px;
    border-right-color: #f5f5f5;
  }
`,c=r.ZP.div`
  position: absolute;
  top: 40px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  border-top: 1px dashed #e0e0e0;
`,u=r.ZP.div`
  font-weight: bold;
  font-size: ${e=>(0,i.R)("fontSizes.2")(e)}px;
  margin-bottom: 12px;
  color: ${e=>(0,i.R)("colors.black")(e)};
  text-align: left;
`,p=r.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 0;
  gap: ${e=>(0,i.R)("space.2")(e)}px;
`,m=e=>{let{headerText:t,children:a}=e,i=(0,l.Z)(e,["headerText","children"]);return o.createElement(d,(0,n.Z)({"data-testid":"coupon-card"},i),o.createElement(s,null),t&&o.createElement(u,{"data-testid":"coupon-header"},t),o.createElement(c,{"data-testid":"coupon-dashed-line"}),o.createElement(p,{"data-testid":"coupon-content"},a))};m.defaultProps={headerText:""};var f=m}}]);
//# sourceMappingURL=5703-133a5e8eaca2a737.js.map