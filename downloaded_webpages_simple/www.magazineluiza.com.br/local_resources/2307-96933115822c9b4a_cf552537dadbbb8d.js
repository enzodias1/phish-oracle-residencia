"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2307],{28426:function(e,t,i){i.d(t,{Z:function(){return w}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(12468),o=i(87043),s=i(70615),d=i(99673),c=i(55403),u=i(63825);let m=(0,d.ZP)(u.Z)`
  color: ${e=>(0,c.uu)("scratched")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
`,p=(0,d.ZP)(u.Z)`
  margin-top: 16px;
  line-height: 1.25;
`,h=(0,d.ZP)(u.Z)`
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  color: ${e=>(0,c.ow)("text.primary")(e)};
  line-height: 1.25;
`,g=e=>{let{isMagaluCompany:t,onLinkClick:i}=e,l=(0,n.Z)(e,["isMagaluCompany","onLinkClick"]),r=()=>null==i?void 0:i();return t?a.createElement(o.xu,l,a.createElement(m,{"data-testid":"guaranteelabel"},"Empresa do"," ",a.createElement(o.rU,{underline:!0,display:"inline",color:"text.scratched",onClick:r},"Grupo Magalu")," ","que garante sua compra do pedido \xe0 entrega.")):a.createElement(o.xu,l,a.createElement(m,{"data-testid":"guaranteelabel"},"O Magalu garante a sua compra, do pedido \xe0 entrega."," ",a.createElement(o.rU,{underline:!0,display:"inline",color:"text.scratched","data-testid":"learn-more",onClick:r},"Saiba mais")))};g.defaultProps={id:"magazineluiza",delivery:"magazineluiza",isMagaluCompany:!1};var f=i(34490);let x=({text:e,title:t})=>a.createElement(o.xu,{p:16},a.createElement(o.kC,null,a.createElement(f.hzV,{mr:16,width:45,height:35}),a.createElement(h,{"data-testid":"details-title"},t)),a.createElement(o.xu,{p:1},null==e?void 0:e.map((e,t)=>a.createElement(p,{key:t},e))));x.defaultProps={title:"",text:[]};let v=e=>{let{seller:t,showDialog:i,detailsText:d,detailsTitle:c,isMagaluCompany:u,onDetailsOpen:m,onDetailsClose:p}=e,h=(0,n.Z)(e,["seller","showDialog","detailsText","detailsTitle","isMagaluCompany","onDetailsOpen","onDetailsClose"]),{id:f}=t,[v,w]=(0,a.useState)(!1),b=e=>{m(e),w(!0)},y=e=>{p(e),w(!1)};return f===r.ig?null:a.createElement(a.Fragment,null,a.createElement(g,(0,l.Z)({isMagaluCompany:u,onLinkClick:b},h)),!i&&a.createElement(s.Z,{direction:"right",visible:v,onClickOutside:y,fullScreen:!1},a.createElement(s.$,{label:u?"Empresa do Grupo Magalu":"Entrega e compra garantida",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:y}}),a.createElement(x,{text:d,title:c})),i&&a.createElement(o.Vq,{visible:v,onClickOutside:y,type:"responsive",position:"center",width:"350px",titleStyle:{textAlign:"center"},showClose:!0},a.createElement(x,{text:d,title:c})))};v.defaultProps={seller:{id:"magazineluiza"},detailsText:[],detailsTitle:"",showDialog:!1,isMagaluCompany:!1,onDetailsOpen(){},onDetailsClose(){}};var w=v},90713:function(e,t,i){i.d(t,{Z:function(){return x}});var l=i(2784);i(13980);var n=i(97704),a=i(99673),r=i(55403),o=i(19527),s=i(87043);let d=a.ZP.div`
  width: 100%;
  padding: ${e=>(0,r.R)("space.2")(e)}px;
  ${({desktopMode:e})=>!e&&a.iv`
      display: flex;
      justify-content: start;
      overflow-x: scroll;
      scrollbar-width: none;
    `};
`,c=(0,a.ZP)(s.xv)`
  font-size: ${e=>(0,r.R)(e.desktopMode?"fontSizes.2":"fontSizes.0")(e)}px;
  white-space: nowrap;
  color: #8f8f8f;
`,u=(0,a.ZP)(o.Z)`
  padding: ${e=>(0,r.R)("space.2")(e)}px;
`,m=(0,a.ZP)(o.Z)`
  justify-content: ${e=>e.desktopMode?"flex-start":"center"};
  align-items: center;
`,p=a.ZP.a`
  text-decoration: none;
  cursor: default;
  justify-content: center;
  display: flex;
`,h=a.ZP.label`
  ${(0,r.aK)("small")} {
    min-width: 134px;
  }
  min-width: 90px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  border: ${(0,r.R)("borders.0")};
  border-radius: ${(0,r.R)("radii.large")};
  align-items: center;
  background: ${e=>(0,r.dF)("white")(e)};
  height: ${({height:e})=>`${e}px`};
  width: fit-content;
  & > img {
    padding: ${(0,r.R)("space.2")}px
      ${e=>(0,r.R)(e.desktopMode?"space.3":"space.2")}px;
    aspect-ratio: 1/1;
    max-width: 100%;
    max-height: 100%;
  }
`;var g=i(39146);function f({filters:e={},onItemClick:t,onView:i,desktopMode:a,itemHeight:r,slidesPerView:o}){let{attributeFilters:f}=e,[x,v]=(0,n.YD)({triggerOnce:!0,threshold:0,delay:1e3});(0,l.useEffect)(()=>{v&&i({filters:e})},[v]);let w=({children:e,filter:t})=>a&&t.values.length>o?l.createElement(g.lr,{auto:!1,showControls:!1,showArrowControls:!0,showPartial:!1,showPartialNextSlide:!1,gutter:0,slidesPerView:o,"data-testid":"carousel"},e):l.createElement(m,{"data-testid":"m-carousel",desktopMode:a,gap:a?12:2},e);return l.createElement(l.Fragment,null,f.map((e,i)=>l.createElement(l.Fragment,null,l.createElement(u,null,l.createElement(s.X6,{"data-testid":"header-label",as:"h2",fontSize:a?18:14,color:"text.attributeLabel"},e.label)),l.createElement(d,{ref:x,"data-testid":"filter-item-container",key:i,desktopMode:a},l.createElement(w,{filter:e},null==e?void 0:e.values.map(e=>l.createElement(p,{key:e.id,role:"button",onClick:i=>t(i,e),href:e.url||e.href,"data-testid":"filter-item-link"},l.createElement(h,{"data-testid":"filter-item-label",height:r,desktopMode:a},"icon"===e.filterType?l.createElement(s.Ee,{alt:e.label,title:e.label,"data-testid":"filter-item-image",src:e.icon}):l.createElement(c,{px:2,desktopMode:a,"data-testid":"filter-item-text"},e.label)))))))))}f.defaultProps={filters:{},onItemClick(){},onView(){},slidesPerView:5};var x=f},63486:function(e,t,i){i.d(t,{Z:function(){return u}});var l=i(2784);i(13980);var n=i(34490),a=i(99673),r=i(19527);let o=(0,a.ZP)(r.Z)`
  display: flex;
  align-content: center;
  justify-content: ${({carousel:e})=>e?"start":"center"};
  padding: 12px;
  overflow-x: ${({scrollOff:e})=>e?"hidden":"scroll"};
`,s=(0,a.ZP)(r.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;var d=i(17781);let c=({filters:e,onChange:t,hasBorder:i,scrollOff:a})=>{let r=e=>l.createElement(n.JO$,{name:{"24c":"DeliveryRTomorrow",delivery_plus_1:"FastDelivery",store_pickup:"PickupStore",delivery_1h:"Delivery1h",delivery_24h:"Delivery24h","magalu-entregas":"DeliveryM","magalu-partner":"Pin",free_shipping:"DeliveryFree",today:"ExpressDelivery",magalu_indica:"FastDelivery",promocao_sazonal_1:"Christmas",promocao_sazonal_2:"CupomPromotion",promocao_sazonal_3:"Offers",promocao_sazonal_4:"Offers"}[e]||"FastDelivery"});return l.createElement(o,{"data-testid":"delivery-filter-container",carousel:(null==e?void 0:e.length)>2,scrollOff:a},l.createElement(s,null,null==e?void 0:e.map(({label:e,slug:n,selected:a,href:o})=>l.createElement(d.Z,{as:"a",type:"checkbox",name:"DeliveryFilter",startIcon:r(n),onChange:i=>t(Object.assign({},i,{href:o,label:e,slug:n})),checked:a,href:o,value:n,key:n,id:n,hasBorder:i,textMaxWidth:"100%",minWidth:"135px",maxWidth:"150px",padding:"4px",gridGap:"6px"},e))))};c.defaultProps={filters:[],onChange(){},scrollOff:!1,hasBorder:!1};var u=c},66608:function(e,t,i){i.d(t,{Z:function(){return $}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(86349),o=i(70615),s=i(37215),d=i(71180),c=i(87043),u=i(99673),m=i(55403),p=i(37270);let h=(0,u.ZP)(c.xv)`
  color: ${e=>(0,m.uu)("scratched")(e)};
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.bold")(e)};
  margin-bottom: 5px;
`,g=(0,u.ZP)(c.xv)`
  color: ${e=>(0,m.uu)("scratched")(e)};
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
`,f=(0,u.ZP)(c.xv).attrs({fontSize:3})`
  line-height: normal;
  font-weight: normal;
  color: ${e=>(0,m.R)("colors.greyishBrown")(e)};
`,x=u.ZP.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: normal;
  font-size: ${e=>(0,m.R)("fontSizes.3")(e)}px;

  color: ${e=>(0,m.R)("colors.greyishBrown")(e)};
  line-height: 18.7px;

  b {
    font-weight: 500;
  }
`,v=(0,u.ZP)(c.zx)`
  border-radius: 12px;
  padding: 11px 100px;
`;(0,u.ZP)(c.xv)`
  font-weight: ${e=>(0,m.R)("fontWeights.bold")(e)};
  color: ${e=>(0,m.ow)("text.scratched")(e)};
  line-height: 1.25;
`;let w=u.ZP.br``,b=(0,u.ZP)(c.Vq).attrs({titleStyle:{fontSize:"22px",color:"#424A52",fontWeight:700}})`
  max-width: 724px;
  overflow-x: hidden;
`,y=(0,u.ZP)(p.bo)`
  height: 1px;
  max-width: 724px;
  transform: translateX(-16px);
  margin: 24px 0 18px;
`,E=e=>{let{onLinkClick:t,isIncludeTaxes:i,totalValueImportTax:r,totalValueICMS:o}=e,s=(0,n.Z)(e,["onLinkClick","isIncludeTaxes","totalValueImportTax","totalValueICMS"]),u=()=>null==t?void 0:t();return a.createElement(c.xu,(0,l.Z)({"data-testid":"content-box"},s),i&&a.createElement(a.Fragment,null,a.createElement(h,{"data-testid":"titletaxeslabel"},"+ Imposto de importa\xe7\xe3o ",(0,d.oB)({value:r})," e ICMS ",(0,d.oB)({value:o}),"."),a.createElement(g,{"data-testid":"texttaxeslabel"},"Os impostos s\xe3o calculados de acordo com o ",a.createElement(w,null),"Remessa Conforme."," ",a.createElement(c.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:u},"Saiba mais"))),!i&&a.createElement(g,{"data-testid":"texttaxeslabel"},"Impostos de importa\xe7\xe3o ser\xe3o adicionados ao seguir ",a.createElement(w,null),"com a compra."," ",a.createElement(c.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:u},"Saiba mais")))};E.defaultProps={onLinkClick:void 0,isIncludeTaxes:!1};var Z=i(34490);let C=({closeDetails:e,isMobile:t})=>a.createElement(c.kC,{flexDirection:"column","data-testid":"detail-text"},a.createElement(c.xu,{p:16},a.createElement(c.kC,{flexDirection:t?"column":"row"},a.createElement(c.kC,null,a.createElement(Z.qGg,{mr:16,width:66,height:67})),a.createElement(c.kC,null,a.createElement(f,null,"[PRODUTO INTERNACIONAL/COMPRA INTERNACIONAL] Toda mercadoria proveniente do exterior (importada) deve ser objeto de declara\xe7\xe3o de importa\xe7\xe3o e est\xe1 sujeita a tributos federal e estadual."))),a.createElement(c.kC,null,a.createElement(x,null,a.createElement("span",null,"Com o Remessa Conforme, o programa do governo brasileiro que simplifica o processo de importa\xe7\xe3o, voc\xea sabe de forma clara o que pagar:"),a.createElement("span",null,"• Para compras ",a.createElement("b",null,"at\xe9 50 d\xf3lares"),", voc\xea paga 20% de taxa de importa\xe7\xe3o e o ICMS*, sem taxas extras na alf\xe2ndega."),a.createElement("span",null,"• Para compras ",a.createElement("b",null,"acima de 50,01 d\xf3lares"),", a taxa de importa\xe7\xe3o \xe9 de 60%, com um desconto de 20 d\xf3lares, al\xe9m do ICMS*. E n\xe3o h\xe1 taxas extras na alf\xe2ndega."),a.createElement("span",null,a.createElement("b",null,"*ICMS:")," Imposto estadual sobre a circula\xe7\xe3o de produtos e servi\xe7os no Brasil. Al\xedquota de 17% ou 20% calculada automaticamente de acordo com o estado de destino da mercadoria. Em caso de d\xfavidas sobre a al\xedquota consulte a Secretaria da Fazenda do seu estado.")))),a.createElement(c.kC,{justifyContent:"center",flexDirection:"column"},a.createElement(y,{ruleSize:1,bg:"border.light"}),a.createElement(c.kC,{justifyContent:"center"},a.createElement(v,{onClick:e},"Entendi"))));C.defaultProps={closeDetails(){},isMobile:!1};let P=e=>{let{product:t,onDetailsOpen:i,onDetailsClose:d,isIncludeTaxes:c,isMobile:u}=e,m=(0,n.Z)(e,["product","onDetailsOpen","onDetailsClose","isIncludeTaxes","isMobile"]),[p,h]=(0,a.useState)(!1),g=(0,r.xx)(null==t?void 0:t.price),f=e=>{i(e),h(!0)},x=e=>{d(e),h(!1)};return g?a.createElement(a.Fragment,null,a.createElement(s.Z,{variant:"small"}),a.createElement(E,(0,l.Z)({onLinkClick:f,isIncludeTaxes:c},m)),u&&a.createElement(o.Z,{direction:"right",visible:p,onClickOutside:x,fullScreen:!1},a.createElement(o.$,{label:"Compra Internacional",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a p\xe1gina do produto",onClick:x}}),a.createElement(C,{isMobile:!0,closeDetails:x})),!u&&a.createElement(b,{visible:p,onClickOutside:x,position:"center",showHorizontalRule:!0,title:"Compra Internacional",showClose:!0},a.createElement(C,{closeDetails:x}))):null};P.defaultProps={product:{},isMobile:!1,isIncludeTaxes:!1,onDetailsOpen(){},onDetailsClose(){}};var $=P},75057:function(e,t,i){i.d(t,{Z:function(){return y}});var l=i(31461),n=i(2784);i(13980);var a=i(15312),r=i(13111),o=i(84546),s=i(60861),d=i(18281),c=i(19527),u=i(10200),m=i(63825),p=i(29869),h=i(99673),g=i(25610);let f=(0,h.ZP)(g.Z).attrs({fontSize:5,fontWeight:"light"})``,x=(0,h.ZP)(o.Z).attrs({fontSize:[0,1,2,2],display:"contents",color:"text.light",mY:3})``,v=(0,h.ZP)(m.Z).attrs({mt:3,mb:1})``,w=(0,h.ZP)(m.Z).attrs({color:"error",mt:1})``;function b({errorEmail:e,errorName:t,labelEmail:i,labelName:h,labelNewsletter:g,noticeMeLabel:b,noticeMeLink:y,onSubmit:E,placeholderEmail:Z,placeholderName:C,subtitle:P,textSubmitButton:$,title:k}){let[S,z]=(0,n.useState)(!0),[I,D]=(0,n.useState)(""),[R,O]=(0,n.useState)(""),[M,A]=(0,n.useState)({}),L=n.useCallback(()=>{let e=(0,a.Z)(I)?void 0:{fullName:t};return A(t=>Object.assign({},(0,l.Z)(t,["fullName"]),e)),e},[I]),T=n.useCallback(t=>{let i=(0,r.Z)(t)?void 0:{email:e};return A(e=>Object.assign({},(0,l.Z)(e,["email"]),i)),i},[R]),j=(0,n.useCallback)(()=>{D(""),O(""),z(!0)},[I,R]),W=e=>{let t=Object.assign({},L(I),T(R));Object.entries(t).length||E({fullName:I,email:R,newsletter:S},j),e.preventDefault()};return n.createElement(n.Fragment,null,n.createElement(c.Z,{alignItems:"baseline",gap:"2",mb:"3"},n.createElement(f,{"data-testid":"let-me-know-title"},k),n.createElement(u.Z,{href:y,target:"_blank",underline:!0,color:"text.light",fontSize:[0,1,2,2]},b)),n.createElement(x,{"data-testid":"let-me-know-description"},P),n.createElement("form",null,n.createElement(v,{"data-testid":"let-me-know-input-label-name"},h),n.createElement(p.Z,{"data-testid":"let-me-know-input-name",placeholder:C,hasError:!!M.fullName,value:I,onChange:e=>D(e.target.value),onFocus:()=>A(e=>(0,l.Z)(e,["fullName"])),onBlur:e=>L(e.target.value)}),n.createElement(w,{"data-testid":"let-me-know-error-name"},M.fullName),n.createElement(v,{"data-testid":"let-me-know-input-label-email"},i),n.createElement(p.Z,{"data-testid":"let-me-know-input-email",placeholder:Z,type:"email",hasError:!!M.email,value:R,onChange:e=>O(e.target.value),onFocus:()=>A(e=>(0,l.Z)(e,["email"])),onBlur:e=>T(e.target.value)}),n.createElement(w,{"data-testid":"let-me-know-error-email"},M.email)),n.createElement(o.Z,{mt:15},n.createElement(d.Z,{as:m.Z,fontSize:[1,2],checked:S,onChange:e=>z(e.target.checked)},g)),n.createElement(o.Z,{mt:15},n.createElement(s.Z,{"data-testid":"let-me-know-submit",full:!0,onClick:W},$)))}b.defaultProps={errorEmail:"Insira o e-mail corretamente.",errorName:"Insira o nome completo corretamente.",labelEmail:"E-mail",labelName:"Nome",labelNewsletter:"Quero receber ofertas e conte\xfados por e-mail",noticeMeLabel:"Ver produtos similares",onSubmit:void 0,placeholderEmail:"Digite seu e-mail",placeholderName:"Digite seu nome",subtitle:"Avise-me quando estiver dispon\xedvel",textSubmitButton:"Avise-me",title:"N\xe3o dispon\xedvel"};var y=b},99075:function(e,t,i){i.d(t,{Z:function(){return p}});var l=i(2784);i(13980);var n=i(34490),a=i(86349),r=i(87043),o=i(39146),s=i(99673),d=i(55403);let c=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
`,u=s.ZP.h2`
  font-size: ${e=>(0,d.R)("fontSizes.4")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.fontSize")(e)};
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  color: ${e=>e.color};
  margin: 10px;
`,m=s.ZP.p`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.display")(e)};
  color: ${e=>(0,d.uu)("base")(e)};
  margin: 15px 0;
  width: 80%;
`;function p({label:e,description:t,value:i,productUrl:s,attributes:{color:d,icon:p,textColor:h}}){let g={coin:"Coin",lightning:"Lightning"}[p]||"Coin",[f,x]=(0,l.useState)(!1),[v,w]=(0,l.useState)(!1),b=e=>{e.stopPropagation(),e.preventDefault(),w(!v)},y=e=>!f&&(x(!0),(0,a.vQ)(e),setTimeout(()=>x(!1),3e3));return l.createElement(l.Fragment,null,l.createElement(o.mY,{hasInfo:!0,onClick:b,color:d,icon:g,textColor:h,value:i}),l.createElement(r.Vq,{visible:v,onClickOutside:b,position:"center",showClose:!0,type:"alert"},l.createElement(c,{onClick(e){e.stopPropagation(),e.preventDefault()}},l.createElement(r.kC,{alignItems:"center",flexDirection:"column"},l.createElement(n.JO$,{name:g,"data-testid":"loyalty-commission-icon",width:"25px",height:"25px",color:d}),l.createElement(u,{id:"loyaltyDialogTitle",color:d},e)),l.createElement(o.mY,{value:i,color:d,Icon:n.JO$,textColor:h}),l.createElement(m,{id:"loyaltyDialogDesc"},t),l.createElement(r.zx,{rounded:!0,variation:f?null:"outline",full:!0,onClick:()=>y(s),"data-testid":"loyalty-commission-button"},f?"Copiado":"Copiar Link"))))}},60857:function(e,t,i){i.d(t,{Z:function(){return f}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(34490),o=i(19527),s=i(7029),d=i(99673);let c=(0,d.ZP)(o.Z).attrs(e=>({borderWidth:e.selected?2:1,borderColor:e.selected?"blue":"whisper",borderStyle:"solid",borderRadius:"default",padding:2,width:e.smallThumbnails?"84px":"110px",height:e.smallThumbnails?"66px":"110px",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}))`
  & img {
    height: ${e=>e.smallThumbnails?"70px":"90px"};
  }
`,u=e=>{let{alt:t,title:i,audio:d,images:u,video:m,imgWidth:p,imgHeight:h,imgMaxHeight:g,onImageClick:f,onAudioClick:x,onVideoClick:v,showMedia:w,showMoreTooltip:b,smallThumbnails:y,preload:E}=e,Z=(0,n.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","onImageClick","onImageChange","onAudioClick","onVideoClick","showMedia","showMoreTooltip","smallThumbnails","preload"]),[C,P]=(0,a.useState)({image:u[0],index:0}),$=e=>{f(e)};return(0,a.useEffect)(()=>{P({image:u[0],index:0})},[u]),a.createElement(o.Z,(0,l.Z)({columnGap:4,maxHeight:614,"data-testid":"media-gallery"},Z),a.createElement(o.Z,{rowGap:3,flexDirection:"column",width:"fit-content"},u.slice(0,u.length>5?4:u.length).map((e,l)=>a.createElement(c,{key:`gallery-img-${l}`,selected:l===C.index,smallThumbnails:y},a.createElement(s.Z,{alt:t,title:i,"data-testid":"media-gallery-image",src:e,width:90,height:90,onClick:()=>P({image:e,index:l}),onMouseOver:()=>P({image:e,index:l})}))),u.length>5&&a.createElement(o.Z,{"data-testid":"media-gallery-image-more",fontSize:5,fontWeight:"bold",borderRadius:"default",width:y?"84px":"110px",height:y?"66px":"110px",title:b,alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:()=>f(4)},"+ ",u.length-4)),a.createElement(o.Z,{flex:1,maxHeight:614,position:"relative"},a.createElement(s.Z,{"data-testid":"image-selected-thumbnail",src:C.image,maxHeight:g,width:p,height:h,alt:t,title:i,lazy:!E||0!==C.index,onClick:()=>$(C.index),cursor:"pointer"}),w&&a.createElement(o.Z,{gap:2,position:"absolute",bottom:0,left:0,"data-testid":"media-gallery-icons"},!!m&&a.createElement(r.JO$,{name:"VideoCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-video-icon",onClick:v}),!!d&&a.createElement(r.JO$,{name:"PodcastCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-audio-icon",onClick:x}))))};u.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:600,imgHeight:600,imgMaxHeight:"40vh",alt:"",title:"",showMoreTooltip:"",smallThumbnails:!1,preload:!1};var m=i(87043),p=i(39146);let h=e=>{let{alt:t,title:i,audio:o,images:s,video:d,imgWidth:c,imgHeight:u,imgMaxHeight:h,counterSeparator:g,showCounter:f,onImageChange:x,onImageClick:v,onAudioClick:w,onVideoClick:b,showMedia:y,lazy:E,preload:Z}=e,C=(0,n.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showMedia","lazy","preload"]),[P,$]=(0,a.useState)(1),[k,S]=(0,a.useState)(),z={audio:w,video:b},I={video:a.createElement(m.cx,{"data-testid":"media-embed",src:d}),audio:a.createElement("audio",{"data-testid":"media-audio",controls:!0,src:o})},D=e=>{let t="string"==typeof e&&["video","audio"].includes(e)?e:null;S(t)},R=e=>{let t=z[e];t(),D(e)},O=e=>{$(e+1),x(s[e])};return a.createElement(a.Fragment,null,a.createElement(m.xu,(0,l.Z)({"data-testid":"media-gallery",fontSize:0,position:"relative"},C),a.createElement(p.lr,{lazy:E,onChange:O,showControls:!1,auto:!1},s.map((e,l)=>a.createElement(m.xu,{height:h,key:`gallery-img-${l}`},a.createElement(m.Ee,{alt:t,title:i,"data-testid":"media-gallery-image",key:`gallery-img-${l}`,src:e,m:"auto",width:c,height:u,maxHeight:h,lazy:!Z||0!==l,onClick:()=>v(l)})))),y&&a.createElement(m.kC,{"data-testid":"media-gallery-icons",position:"absolute",bottom:"16px",left:"16px",columnGap:2},!!d&&a.createElement(r.JO$,{name:"VideoCircle",width:"40px",height:"40px",onClick:()=>R("video"),"data-testid":"media-gallery-video-icon"}),!!o&&a.createElement(r.JO$,{name:"PodcastCircle",width:"40px",height:"40px",onClick:()=>R("audio"),"data-testid":"media-gallery-audio-icon"})),f&&!!s.length&&a.createElement(m.xu,{"data-testid":"media-gallery-counter",bg:"background.dark",color:"text.lightest",position:"absolute",bottom:"16px",right:"16px",paddingX:2,paddingY:1,borderRadius:"default",opacity:"85%"},P,g,s.length)),k&&a.createElement(m.Vq,{title:null,position:"center",showClose:!0,onClickOutside:D,visible:!0},I[k]))};h.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",lazy:!1,preload:!1};let g=e=>{let{alt:t,title:i,audios:r,images:o,podcasts:s,videos:d,imgWidth:c,imgHeight:m,imgMaxHeight:p,onImageChange:g,onImageClick:f,onAudioClick:x,onVideoClick:v,showThumbnail:w,showMoreTooltip:b,smallThumbnails:y,preload:E}=e,Z=(0,n.Z)(e,["alt","title","audios","images","podcasts","videos","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showThumbnail","showMoreTooltip","smallThumbnails","lazy","preload"]),C=w?u:h,[P]=d,[$]=[...s,...r];return a.createElement(C,(0,l.Z)({alt:t,title:i,audio:$,video:P,images:o,imgWidth:c,imgHeight:m,imgMaxHeight:p,onImageClick:f,onAudioClick:x,onVideoClick:v,onImageChange:g,showMedia:!!P||!!$,showMoreTooltip:b,smallThumbnails:y,preload:E},Z))};g.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",onImageChange(){},onImageClick(){},onVideoClick(){},onAudioClick(){},showThumbnail:!1,showMoreTooltip:"",smallThumbnails:!1,lazy:!1,preload:!1};var f=g},56337:function(e,t,i){i.d(t,{Z:function(){return Z}});var l=i(2784),n=i(71180);i(13980);var a=i(84546),r=i(78045),o=i(97949),s=i(73172),d=i(46514);let c=(e=[],t)=>e.map(e=>({mediaUrl:e,mediaType:t,original:e.includes("original"),processed:e.includes("processed"),thumbnails:e.includes("thumbnails")}));var u=i(99673),m=i(55403),p=i(87043);let h=(0,u.ZP)(p.kC)`
  align-items: center;
  padding: 0 0 ${e=>(0,m.R)("space.2")(e)}px;

  ${(0,m.aK)("large")} {
    padding: 0 0 ${e=>(0,m.R)("space.3")(e)}px;
  }
`,g=u.ZP.span`
  width: 80px;
`,f=(0,u.ZP)(p.xv).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,m.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,m.R)("space.2")(e)}px;
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;
`,x=(0,u.ZP)(p.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;
`,v=(0,u.ZP)(p.xu).attrs(()=>({fontSize:3}))`
  color: ${e=>(0,m.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: 24px;
  padding: ${e=>(0,m.R)("space.3")(e)}px 0
    ${e=>(0,m.R)("space.3")(e)}px;
  word-break: break-word;
`,w=(0,u.ZP)(p.xu).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,b=(0,u.ZP)(p.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${e=>(0,m.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.tall")(e)}px;
`,y=(e,t)=>e.map(e=>l.createElement(o.Z,{key:`gallery-media-${e.mediaUrl}`,media:e,onClick:()=>t(e.mediaUrl.split("/").reverse()[0]),width:"124px",height:"124px"})),E=({review:e,charLimit:t})=>{let[i,o]=(0,l.useState)(!1),{rating:u,description:m,submissionDate:p,attributes:E,userData:Z,product:C}=e,P=(null==m?void 0:m.length)<=t,[$,k]=(0,l.useState)(!1),[S,z]=(0,l.useState)(0),I=/^\d+$/.test(p),D=p&&!I&&(0,n.jL)(new Date(p),new Date),R=(null==E?void 0:E.map((e,t)=>0===t?`${e.label}: ${e.value}`:` | ${e.label}: ${e.value}`))||[],O=c(null==C?void 0:C.images,"image"),M=c(null==C?void 0:C.videos,"video"),A=O.filter(e=>e.processed).concat(M.filter(e=>e.processed)),L=O.filter(e=>e.thumbnails).concat(M.filter(e=>e.thumbnails)),T=e=>{let t=A.findIndex(t=>t.mediaUrl.includes(e.split(".")[0]));z(t>0?t:0),k(!0)};return l.createElement(a.Z,null,l.createElement(h,null,l.createElement(r.Z,null),l.createElement(f,null,null==Z?void 0:Z.name),l.createElement(g,null,l.createElement(s.Z,{score:u}))),R.length>0&&l.createElement(x,{"data-testid":"review-sub-title"},R),m&&l.createElement(v,{"data-testid":"review-description"},i||P?m:`${m.substring(0,t)}...`,"\xa0",!P&&l.createElement(w,{onClick:()=>o(!i),"data-testid":"see-more-btn",role:"button"},i?"ver menos":"ver mais")),D&&l.createElement(b,{"data-testid":"review-date"},`h\xe1 ${D}`),L.length>0&&l.createElement(d.zT,null,y(L,T)),$&&l.createElement(d.Qp,{review:e,charLimit:t,mediaProps:O.concat(M),selectedMedia:S,closePopup:()=>k(!1)}))};E.defaultProps={charLimit:110,mediaReview:null};var Z=E},1939:function(e,t,i){i.d(t,{Z:function(){return g}});var l=i(2784),n=i(84546),a=i(71180);i(13980);var r=i(99673),o=i(55403),s=i(87043);let d=(0,r.ZP)(s.xv).attrs(()=>({fontSize:0,fontWeight:"regular",marginTop:1}))`
  color: ${(0,o.uu)("scratched")};
`,c=r.ZP.div``;var u=i(57862),m=i(37215),p=i(86349);let h=({showShippingTags:e,shippingTag:t,price:i})=>{let{time:r,cost:o,complement:s}=t,h=(0,p.xx)(i),g=0===o?"Frete gr\xe1tis":`Frete: ${(0,a.oB)({value:o})}`,f=()=>0===o?l.createElement(u.dO,null,g):l.createElement(d,null,g);return l.createElement(n.Z,{marginTop:1},h&&l.createElement(m.Z,null),e&&l.createElement(c,{"data-testid":"productCard-shipping-tag"},null!=o&&l.createElement(f,null),r&&l.createElement(u.dO,null,r),s&&l.createElement(u.dO,null,s)))};h.defaultProps={showShippingTags:!1,shippingTag:{},price:{}};var g=h},43125:function(e,t,i){i.d(t,{Z:function(){return M}});var l=i(7896),n=i(31461),a=i(2784),r=i(97704);i(13980);var o=i(34490),s=i(57862),d=i(39146),c=i(46514),u=i(7029),m=i(12468),p=i(99673),h=i(55403),g=i(87043);let f=(0,p.ZP)(g.rj)`
  grid-template-columns: 1fr ${({displayMode:e,sponsored:t,isMagaluIndica:i})=>e!==m.IY&&i||e===m.Co&&t?"20px":""};
  margin-bottom: ${(0,h.R)("space.1")}px;
  ${e=>e.displayMode===m.IY&&`
    grid-column-start: 3;
    grid-row-start: 1;
    align-self: start;
  `}
`,x=(0,p.ZP)(g.Af).attrs(e=>Object.assign({},e))`
  justify-self: start;
`,v=(0,p.ZP)(d.iG).attrs(e=>Object.assign({width:20,height:20},e))`
  justify-self: end;
  max-width: 20px;
`,w=({displayMode:e,sponsored:t,showWishBtn:i,isLiked:l,handleAddToWishlist:n,isMagaluIndica:r,isMercadoFull:d})=>a.createElement(f,{isMagaluIndica:r||d,displayMode:e,sponsored:t},t&&e===m.Co&&a.createElement(s.lK,{place:"header"},"Patrocinado"),(r||d)&&e===m.yg&&a.createElement(x,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,startIcon:r?a.createElement(o.JO$,{name:"FastDelivery",fill:"#fff",width:"16px",height:"16px"}):a.createElement(o.JO$,{name:"FastMarket",fill:"#fff",width:"16px",height:"16px"}),fontWeight:"bold",gridGap:1,minWidth:"unset",borderRadius:6},r?"Full":"Mercado Full"),i&&a.createElement(v,{active:l,onClick:n}));var b=i(19527),y=i(63825);let E=({geoLocTags:e,displayMode:t})=>null!=e&&e.title?a.createElement(b.Z,{alignItems:"center",justifyContent:t===m.Co?"center":null,gap:1},a.createElement("div",null,a.createElement(o.JO$,{name:e.icon||"FastDelivery",color:"text.primary",width:30,height:30})),a.createElement("div",null,a.createElement(y.Z,{color:"text.primary",fontSize:[1,1,2,2],fontWeight:"medium"},e.title))):null,Z={miniature:p.iv`
    justify-self: center;
    align-self: center;
  `,list:p.iv`
    justify-self: left;
  `},C=p.ZP.div`
  ${({displayMode:e})=>e&&Z[e]};
  max-height: 20px;
`,P=({displayMode:e,count:t,score:i,allowEmptyRating:l,showRating:n,format:r,sellerPage:o})=>(l||i)&&n?a.createElement(C,{displayMode:e},a.createElement(d.Cq,{format:r,score:i,count:t,width:o?"20px":"12px",height:o?"20px":"12px",sellerPage:o})):null,$=({allGeoLocTags:e,displayMode:t})=>e.length>0&&a.createElement(b.Z,{display:"none","data-testid":"allGeoLocTags",flexDirection:"column"},e.map((e,i)=>e.title&&a.createElement(b.Z,{key:i,alignItems:"center",display:t===m.Co?"none":null,color:"text.primary",fontSize:"0",fontWeight:"medium"},e.title)));$.defaultProps={allGeoLocTags:[]};var k=i(1939),S=i(99075);let z={sales_commission:S.Z,sales_dynamic_commission:S.Z},I=({displayMode:e,loyalty:t,productUrl:i})=>{let n=z[null==t?void 0:t.type];return t?a.createElement(s.RJ,{displayMode:e},n&&a.createElement(n,(0,l.Z)({},t,{productUrl:i}))):null};I.defaultProps={displayMode:m.IY,loyalty:{},productUrl:""};var D=i(12795);let R=({domain:e,url:t,adsSellerId:i})=>{let l=/^https?:\/\//.test(t),n=new URL(l?t:e+t);i&&n.searchParams.append("seller_id",i);let a=n.toString(),r=l?a:a.replace(n.origin,"");return{absoluteUrl:a,href:r}},O=e=>{let{hideLinkBorder:t,onClick:i,onMouseDown:p,onView:h,domain:g,imgLazyLoading:f,index:x,lazyLoadingOffset:v,showInCashInfo:b,enableShadow:y,enableHover:Z,geoLocTags:C,allGeoLocTags:S,hidePriceMode:z,hidePrice:O,hidePriceButtonAction:M,showPreview:A,previewAction:L,showWishBtn:T,onClickWishBtn:j,fullHeight:W,showRating:B,showDiscount:F,showDiscountOnlyCashInfo:H,allowEmptyRating:V,containerWidth:_,onThumbnailClick:K,colorMinLength:N,attributeStyle:q,offerTimerProps:G}=e,U=(0,n.Z)(e,["adId","hideLinkBorder","onClick","onMouseDown","onView","domain","imgLazyLoading","index","lazyLoadingOffset","showInCashInfo","enableShadow","enableHover","geoLocTags","allGeoLocTags","hidePriceMode","hidePrice","hidePriceButtonAction","showPreview","previewAction","showWishBtn","onClickWishBtn","fullHeight","showRating","percentBadge","showDiscount","showDiscountOnlyCashInfo","allowEmptyRating","containerWidth","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]),{displayMode:Y,title:J,price:X,image:Q,installment:ee,badges:et,rating:ei,variationId:el,url:en,titleAs:ea,loyalty:er,imageAltPrefix:eo,isOnWishlist:es,imageWidth:ed,imageHeight:ec,shippingCost:eu,shippingTag:em,brand:ep,offerTags:eh,ads:eg,adsSellerId:ef,thumbnails:ex,restrictions:ev,parsedAttributes:ew,reward:eb,tagCoupon:ey,sellerPage:eE,slider:eZ}=U,{absoluteUrl:eC,href:eP}=R({domain:g,url:en,adsSellerId:ef}),{count:e$,score:ek}=ei,eS=null==eh?void 0:eh.includes("magalu_indica"),ez=null==eh?void 0:eh.includes("mercado_full"),eI=null==et?void 0:et.slice(-1)[0],eD=e=>{e.stopPropagation(),e.preventDefault(),j(e)},[eR,eO]=(0,r.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,a.useEffect)(()=>{eO&&h(Object.assign({index:x,geoLocTags:C},U))},[eO]);let eM=eo?`${eo}${U.title}`:U.title,eA=(null==eg?void 0:eg.id)||void 0,eL={autoSize:!0,bg:"primary",borderRadius:6,fontSize:1,fontWeight:"medium",gridGap:1,mb:1,minWidth:"unset",padding:"2px 8px"};return a.createElement(s.W2,{ref:eR,href:eP,onClick:e=>i(e,Object.assign({},U,{index:x})),onMouseDown:e=>p(e,Object.assign({},U,{index:x})),displayMode:Y,"data-testid":"product-card-container","ads-click-event":eA,"ads-view-event":eA,"ads-impression-event":eA,redirect:eP,hideLinkBorder:t,enableShadow:y,enableHover:Z,fullHeight:W,containerWidth:_,index:x,"data-brand":null==ep?void 0:ep.slug,sellerPage:eE,slider:eZ},a.createElement(w,{displayMode:Y,sponsored:null==eg?void 0:eg.sponsored,showWishBtn:T,isLiked:es,handleAddToWishlist:eD,isMagaluIndica:eS,isMercadoFull:ez}),a.createElement(s.mo,{displayMode:Y,sellerPage:eE},Y===m.IY&&a.createElement(a.Fragment,null,eS&&a.createElement(s.Tl,(0,l.Z)({},eL,{startIcon:a.createElement(o.JO$,{name:"FastDelivery",fill:"#fff",width:"16px",height:"16px"})}),"Full"),ez&&a.createElement(s.Lq,(0,l.Z)({},eL,{startIcon:a.createElement(o.JO$,{name:"FastMarket",fill:"#fff",width:"16px",height:"16px"})}),"Mercado Full")),a.createElement(u.Z,{src:Q,alt:eM,width:ed,height:ec,title:J,lazy:f,offset:v,mb:1}),a.createElement(I,{displayMode:Y,loyalty:er,productUrl:eC}),!!eI&&a.createElement(d.Ct,{key:`${el}-badge-${eI.id}`,url:eI.imageUrl,tooltip:eI.tooltip,displayMode:Y,borderRadius:"medium"}),Y===m.IY&&ew&&a.createElement(c.dO,{attributes:ew,variations:ex,colorVariant:"button",showTitle:!1,colorMinLength:N,gap:1,style:q,onVariationClick:K})),A&&a.createElement(s.Mn,{"data-testid":"button-preview-container"},a.createElement(s.AH,{size:"small",m:"10px 0","data-testid":"button-preview",onClick(e){e.preventDefault(),L(U)}},"Conferir")),a.createElement(s.VY,{displayMode:Y,"data-testid":"product-card-content"},Y!==m.IY&&ew&&a.createElement(c.dO,{attributes:ew,variations:ex,onVariationClick:K,colorVariant:"button",showTitle:!1,gap:1,colorMinLength:N,style:q}),Y!==m.Co&&a.createElement(d.dV,(0,l.Z)({height:20,fontSize:["10px",1],restrictions:ev,displayMode:Y},G)),(null==eg?void 0:eg.sponsored)&&Y!==m.Co&&a.createElement(s.lK,{place:"content"},"Patrocinado"),Y!==m.Co&&a.createElement(s.Dx,{as:ea,displayMode:Y,"data-testid":"product-title"},J),P({displayMode:Y,count:e$,score:ek,allowEmptyRating:V,showRating:B,format:"score-count",sellerPage:eE}),a.createElement(E,{geoLocTags:C,displayMode:Y}),a.createElement(D.Z,(0,l.Z)({},{hide:"hide"===z,hiddenPrice:O,displayMode:Y,installment:ee,showInCashInfo:b,showDiscount:F,showDiscountOnlyCashInfo:H,price:X,hidePriceButtonAction:M,product:U},{sellerPage:eE})),a.createElement(d.rE,{mt:1,tags:ey}),a.createElement(d.lF,{displayMode:Y,costDescription:eu.costDescription,cost:eu.cost}),a.createElement($,{allGeoLocTags:S,displayMode:Y}),a.createElement(k.Z,{showShippingTags:Y!==m.Co,shippingTag:em,price:X}),!!eb&&!!(null!=eb&&eb.active)&&a.createElement(d.QP,{icon:null==eb?void 0:eb.icon,message:null==eb?void 0:eb.message,intent:null==eb?void 0:eb.intent,styleContainer:null==eb?void 0:eb.styleContainer,styleMessage:null==eb?void 0:eb.styleMessage})))};var M=O;O.defaultProps={variationId:"",url:"",displayMode:m.IY,domain:m.RW,title:"",image:"",index:0,price:{},installment:{},geoLocTags:{},allGeoLocTags:[],rating:{},badges:[],brand:{},onClick(){},onMouseDown(){},onView(){},imgLazyLoading:!1,fullHeight:!1,percentBadge:30,lazyLoadingOffset:50,showInCashInfo:!0,hideLinkBorder:!1,titleAs:"h2",enableShadow:!0,enableHover:!1,imageAltPrefix:"",hidePriceMode:"blur",hidePrice:!1,hidePriceButtonAction:null,showPreview:!1,previewAction(){},isOnWishlist:!1,showWishBtn:!1,onClickWishBtn(){},showRating:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,shippingCost:{},ads:{},shippingTag:{},allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{width:"42px",height:"42px",bg:"background.lighter",color:"background.primary",shouldHover:!0},offerTimerProps:{},sellerPage:!1,slider:!1}},57862:function(e,t,i){i.d(t,{AH:function(){return b},Dx:function(){return x},Lq:function(){return E},Mn:function(){return w},RJ:function(){return f},Tl:function(){return y},VY:function(){return v},W2:function(){return m},dO:function(){return Z},lK:function(){return u},mo:function(){return h}});var l=i(99673),n=i(68054),a=i(55403),r=i(39146),o=i(12468),s=i(27439),d=i(87043);let c=(e,t)=>{let i={miniature:l.iv`
      display: grid;
      padding: 8px 2px;
    `,list:l.iv`
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      ${t>=500&&l.iv`
        ${(0,a.aK)("small")} {
          grid-template-columns: 180px 2fr;
          grid-column-gap: 20px;
        }
      `}
      padding: 16px;
    `,gallery:l.iv`
      grid-template-rows: auto auto 1fr;
    `};return i[e]},u=(0,l.ZP)(d.xv).attrs(e=>Object.assign({fontSize:13,fontWeight:"regular",lineHeight:"display"},e))`
  justify-self: left;
  color: ${(0,a.uu)("light")};

  ${n.cp}
`;(0,l.ZP)(r.iG).attrs(e=>Object.assign({width:20,height:20},e))`
  justify-self: end;
  max-width: 20px;
`;let m=(0,l.ZP)(s.ZP)`
  position: relative;
  padding: 10px;
  justify-content: unset;
  background-color: ${e=>e.hideLinkBorder?"unset":(0,a.ow)("background.lighter")(e)};
  ${({displayMode:e,containerWidth:t})=>e&&c(e,t)};
  display: grid;

  ${({fullHeight:e})=>e&&`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
  ${({sellerPage:e,slider:t})=>e&&!t?`
        width: 263.59px !important;
        min-width: 263.59px !important;
        max-width: 263.59px !important;
        border: 1px solid #D3DADD;
      `:e&&t?`
        width: 218px;
        min-width: 218px;
        max-width: 218px;
        border: 1px solid #D3DADD;
      `:e?"border: 1px solid #D3DADD;":""}
`,p={miniature:l.iv`
    height: 20vw;
    justify-content: flex-end;
    ${(0,a.aK)("small")} {
      height: 120px;
    }
  `,list:l.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
    & > img {
      max-height: 160px;
    }
    ${(0,a.aK)("small")} {
      min-height: initial;
      max-height: 210px;
    }
  `,gallery:l.iv`
    height: 32vw;
    justify-content: flex-end;
    ${(0,a.aK)("small")} {
      max-height: 210px;
    }
  `},h=l.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({displayMode:e})=>e&&p[e]}
  ${({sellerPage:e})=>e&&`
    width: 100%;
    height: 144px;
  `}
`,g={miniature:l.iv`
    justify-content: center;
  `,list:l.iv`
    justify-content: flex-start;
  `,gallery:l.iv`
    justify-content: flex-end;
  `},f=l.ZP.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5%;
  ${({displayMode:e})=>e&&g[e]}
`,x=(0,l.ZP)(d.xv).attrs(e=>Object.assign({fontSize:[1,1,1],lineHeight:"display",fontWeight:"regular"},e))`
  ${({displayMode:e})=>e!==o.IY?"height: 52px;":"height: 32px;"};
  color: ${(0,a.uu)("base")};
  -webkit-line-clamp: ${({displayMode:e})=>e!==o.IY?3:2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 4px 0 4px 0;
  ${(0,a.aK)("small")} {
    ${({displayMode:e})=>e===o.IY&&"height: 40px;"};
  }
  ${n.cp}
`,v=l.ZP.div`
  ${({displayMode:e})=>e===o.IY&&"padding-left: 8px"}
  ${({displayMode:e})=>e!==o.IY&&`
    display: grid;
    padding-top: 8px;
  `}
`,w=l.ZP.div`
  width: 100%;
  height: 15px;
  position: relative;
`,b=(0,l.ZP)(d.zx)`
  opacity: 0.7;
  visibility: hidden;
  position: absolute;
  width: 50%;
  min-width: 90px;

  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${m}:hover & {
    visibility: visible;
  }
`,y=(0,l.ZP)(d.Af).attrs(e=>Object.assign({},e))`
  width: 66px;
`,E=(0,l.ZP)(d.Af).attrs(e=>Object.assign({},e))`
  width: 126px;
`,Z=(0,l.ZP)(d.xv).attrs(()=>({fontSize:0,fontWeight:"medium",marginTop:1}))`
  color: ${(0,a.uu)("primary")};
`},3018:function(e,t,i){i.d(t,{Z:function(){return E}});var l=i(7896),n=i(31461),a=i(2784),r=i(97704),o=i(13980),s=i(87043),d=i(3310),c=i(62458),u=i(99673),m=i(55403),p=i(68054);let h=u.ZP.a`
  display: flex;
  cursor: pointer;
  padding: 16px;
  border-radius: 12px;
  height: 100%;
  background-color: #fff;
  max-width: 560px;
  text-decoration: none;
  ${({showBorder:e})=>e&&u.iv`
      &,
      &:active,
      &:focus,
      &:hover {
        border: solid 1px ${(0,m.dF)("primary")};
      }
    `}
`,g=(0,u.ZP)(s.kC)`
  flex-direction: column;
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`,f=(0,u.ZP)(s.kC)`
  padding-left: 12px;
  flex-basis: 70%;
  flex-direction: column;
  justify-content: center;
`,x=(0,u.ZP)(s.xv).attrs(e=>Object.assign({fontSize:[1,1,1],lineHeight:"big",fontWeight:"regular"},e))`
  max-height: 44px;
  color: ${(0,m.uu)("base")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  ${(0,m.aK)("small")} {
    max-height: 44px;
  }
  ${p.cp}
`,v=(0,u.ZP)(s.zx).attrs(e=>Object.assign({},e))`
  background-color: #4ea900;
  border-radius: 8px;
  margin-top: 12px;
  max-width: 264px;
  height: 40px;

  ${({empty:e})=>e&&`
    pointer-events: none;
  `}
`;var w=i(1939),b=i(12795);function y(e){let{imgLazyLoading:t,showInCashInfo:i,showDiscount:o,showOfferTimer:u,onView:m,index:p,onClick:y,onMouseDown:E,showDiscountOnlyCashInfo:Z,lazyLoadingOffset:C,hidePriceButtonAction:P,showBorder:$,restrictions:k,buttonProps:S,showButton:z,hideOriginalPrice:I}=e,D=(0,n.Z)(e,["imgLazyLoading","showInCashInfo","showDiscount","showOfferTimer","onView","index","geoLocTags","onClick","onMouseDown","showDiscountOnlyCashInfo","lazyLoadingOffset","hidePriceButtonAction","showBorder","restrictions","buttonProps","showButton","hideOriginalPrice"]),{title:R,price:O,image:M,installment:A,url:L,titleAs:T,shippingTag:j,imageWidth:W,imageHeight:B,imageAltPrefix:F,hidePrice:H,tagCoupon:V}=D,_=F?`${F}${D.title}`:D.title,K=Boolean((null==k?void 0:k.timer_start_date)&&(null==k?void 0:k.timer_end_date)),N=Boolean(V&&(null==V?void 0:V.discountValue)),[q,G]=(0,r.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,a.useEffect)(()=>{G&&m(Object.assign({index:p},D))},[G]);let U=!!(null!=A&&A.amount&&null!=A&&A.totalAmount&&(null==A?void 0:A.quantity)>1);return a.createElement(h,{ref:q,href:L,index:p,onClick:e=>y(e,Object.assign({},D,{index:p})),onMouseDown:e=>E(e,Object.assign({},D,{index:p})),"data-testid":"product-card-horizontal",showBorder:$},a.createElement(g,{width:W,height:B},a.createElement(s.Ee,{src:M,alt:_,width:W,height:B,title:R,lazy:t,offset:C})),a.createElement(f,null,a.createElement(x,{as:T,"data-testid":"product-title"},R),u&&K&&!N&&a.createElement(d.Z,{mt:1,mr:0,mb:0,restrictions:{timer_start_date:null==k?void 0:k.timer_start_date,timer_end_date:null==k?void 0:k.timer_end_date},height:"20px",fontSize:"14px"}),a.createElement(s.xu,{mt:U?0:2},a.createElement(b.Z,{hiddenPrice:H,displayMode:"list",installment:A,showInCashInfo:i,showDiscount:o,showDiscountOnlyCashInfo:Z,price:O,hidePriceButtonAction:P,hideOriginalPrice:I,product:D})),a.createElement(c.Z,{mt:1,tags:V}),a.createElement(w.Z,{showShippingTags:!0,shippingTag:{cost:null==j?void 0:j.cost},price:O}),z&&a.createElement(v,(0,l.Z)({},S,{empty:!(null!=S&&S.onClick),onClick:null==S?void 0:S.onClick,uppercase:!1,"data-testid":"better-offer-btn"}),(null==S?void 0:S.title)||"Ver oferta")))}y.defaultProps={imgLazyLoading:!1,showInCashInfo:!0,showDiscount:!1,url:"",onClick(){},onMouseDown(){},onView(){},geoLocTags:{},index:0,showDiscountOnlyCashInfo:!0,lazyLoadingOffset:50,hidePriceButtonAction(){},showBorder:!1,restrictions:{timer_end_date:o.string,timer_start_date:o.string},showButton:!1,hideOriginalPrice:!1};var E=y},12795:function(e,t,i){i.d(t,{Z:function(){return m}});var l=i(7896),n=i(2784);i(13980);var a=i(12468),r=i(39146),o=i(99673),s=i(87043);let d=o.ZP.div`
  position: relative;

  span {
    filter: blur(3px);
  }
`,c=(0,o.ZP)(s.zx)`
  visibility: hidden;
  position: absolute;
  bottom: 0;

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${d}:hover & {
    visibility: visible;
  }
`,u=({hide:e,hiddenPrice:t,displayMode:i,installment:a,showInCashInfo:o,showDiscount:s,showDiscountOnlyCashInfo:u,price:m,hidePriceButtonAction:p,hideOriginalPrice:h,product:g,sellerPage:f})=>e?null:n.createElement(n.Fragment,null,!t&&n.createElement(r.tA,(0,l.Z)({style:{mt:"0px"},display:i,installment:a,showInCashInfo:o,showDiscount:s,showDiscountOnlyCashInfo:u,hideOriginalPrice:h,sellerPage:f},m)),t&&n.createElement(d,null,n.createElement("span",{"data-testid":"hided-price"},n.createElement(r.tA,{style:{mt:"0px"},display:i,installment:null,price:0,showInCashInfo:o})),p&&n.createElement(c,{full:!0,size:"small",m:"10px 0","data-testid":"show-price-button",onClick(e){e.preventDefault(),p(g)}},"Ver Pre\xe7o")));var m=u;u.defaultProps={hide:!1,hiddenPrice:!1,displayMode:a.IY,installment:{},showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,price:{},hidePriceButtonAction:null,product:{},hideOriginalPrice:!1,sellerPage:!1}},4720:function(e,t,i){i.d(t,{Z:function(){return s}});var l=i(7896),n=i(2784);i(13980);var a=i(43125),r=i(39146),o=i(3018);function s({products:e,displayMode:t,onClick:i,onMouseDown:s,onProductView:d,onChange:c,gutter:u,showInCashInfo:m,slidesPerView:p,interval:h,auto:g,showPartialNextSlide:f,transitionDuration:x,productTitleAs:v,imageAltPrefix:w,imgLazyLoading:b,imageWidth:y,imageHeight:E,showControls:Z,showArrowControls:C,showRating:P,enableHover:$,showPreview:k,showDiscount:S,showOfferTimer:z,showDiscountOnlyCashInfo:I,fullHeight:D,previewAction:R,cardType:O,offerTimerProps:M,showBorder:A,showButton:L,buttonProps:T,hideOriginalPrice:j,sellerPage:W,slider:B}){let F=t=>{let i=Array(p).fill().map((i,l)=>e[l+t]);c(i)},H=C&&p<=(null==e?void 0:e.length),V={horizontal:o.Z,vertical:a.Z},_=V[O];return n.createElement(r.lr,{onChange:F,slidesPerView:p,gutter:u,auto:g,interval:h,showPartialNextSlide:f,transitionDuration:x,isProductCarousel:!0,showControls:Z,showArrowControls:H},null==e?void 0:e.map((e,a)=>n.createElement(_,(0,l.Z)({},e,{displayMode:t,onClick:i,onMouseDown:s,onView:d,showInCashInfo:m,titleAs:v,fullHeight:D,imageAltPrefix:w,imgLazyLoading:b,imageWidth:y,imageHeight:E,showRating:P,showOfferTimer:z,key:`product-carousel-${e.variationId||e.id}-${a}`,enableHover:$,showPreview:k,previewAction:R,showDiscount:S,showDiscountOnlyCashInfo:I,offerTimerProps:M,showBorder:A,showButton:L,buttonProps:T,hideOriginalPrice:j,sellerPage:W,slider:B}))))}s.defaultProps={displayMode:"gallery",onClick(){},onMouseDown(){},onProductView(){},onChange(){},showInCashInfo:!0,showPartialNextSlide:!0,auto:!0,slidesPerView:2,interval:5e3,fullHeight:!0,transitionDuration:400,gutter:2,productTitleAs:"h2",imageAltPrefix:"",imgLazyLoading:!0,showControls:!0,showArrowControls:!1,showRating:!0,enableHover:!0,showPreview:!1,showDiscount:!1,showDiscountOnlyCashInfo:!1,previewAction(){},cardType:"vertical",showBorder:!1,showOfferTimer:!1,showButton:!1,buttonProps:{},hideOriginalPrice:!1,sellerPage:!1,slider:!1}},98284:function(e,t,i){i.d(t,{Z:function(){return k}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(43125),o=i(99673),s=i(34490),d=i(55403),c=i(68054),u=i(19527),m=i(84546),p=i(78012);let h=({displayMode:e,slider:t,sellerPage:i})=>{if(t)return o.iv`
      display: flex;
      flex-direction: row;
      gap: 16px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    `;if(i&&!t)return o.iv`
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: flex-start;
    `;let l={gallery:o.iv`
      grid-template-columns: 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      }
    `,list:o.iv`
      grid-template-columns: 1fr;
    `,miniature:o.iv`
      grid-template-columns: 1fr 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    `};return l[e]},g=(0,o.ZP)(u.Z).attrs(e=>Object.assign({fontSize:[1,2,2,2],py:3,px:2,color:"text.scratched",borderRadius:"medium",bg:"transparent",textAlign:["center","left","left","left"],boxShadow:[4,"none","none","none"]},e))`
  min-width: 280px;
  margin: 0 auto;
  border-radius: 4px;
  transition: width 0.2s ease;
  word-break: break-word;

  ${c.AF}
  ${d.$_}
  ${c.Dh}
  ${c.cp}
`,f=o.ZP.h1.attrs(e=>Object.assign({fontSize:[3,5,5,5],fontWeight:"regular"},e))`
  text-align: center;
  color: ${e=>(0,d.uu)("base")(e)};
  line-height: normal;
  margin-bottom: 18px;
  span {
    color: ${e=>(0,d.ow)("primary.base")(e)};
    display: inline-flex;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
  }

  ${(0,d.aK)("small")} {
    text-align: left;
  }

  ${c.cp}
`,x=o.ZP.span.attrs(()=>({mr:3}))`
  display: none;

  ${(0,d.aK)("small")} {
    display: block;
  }

  ${c.Dh}
`,v=(0,o.ZP)(s.olm).attrs(e=>Object.assign({width:60,height:60,color:"primary.base"},e))`
  ${d.$_}
`,w=(0,o.ZP)(m.Z).attrs(e=>Object.assign({},e))`
  margin: 0;
  overflow: ${e=>e.slider?"visible":"hidden"};
  transition: width 0.2s ease;
`,b=(0,o.ZP)(p.Z).attrs(e=>Object.assign({gridGap:e.slider?0:["2px","1px","1px"]},e))`
  ${({displayMode:e,slider:t,sellerPage:i})=>h({displayMode:e,slider:t,sellerPage:i})}
  ${c.eC}
`,y=(0,o.ZP)(b.Action).attrs(()=>({fontWeight:"regular",color:"background.primary",fill:"background.primary"}))`
  border-top: ${(0,d.R)("borders.0")};
`,E=o.ZP.li`
  list-style: none;
  ${e=>{if(e.slider){let t=e.sellerPage?"218px":"280px";return o.iv`
        flex: 0 0 auto;
        min-width: ${t};
        max-width: ${t};
        width: ${t};
      `}return e.sellerPage&&!e.slider?o.iv`
        flex: 0 0 auto;
        width: 263.59px;
        min-width: 263.59px;
        max-width: 263.59px;
      `:""}}
  > * {
    min-height: 100%;
  }
`,Z=({message:e,messageSecondary:t})=>a.createElement(g,{"data-testid":"product-list-empty"},a.createElement(x,null,a.createElement(v,null)),a.createElement("div",null,a.createElement(f,null,e),t||""));Z.defaultProps={messageSecondary:"",message:""};var C=i(66228),P=i(12468);let $=(0,a.forwardRef)(function(e,t){var i;let{slider:o,sellerPage:s,hidePriceButtonAction:d,lazyLoadingOffset:c,onClickLoadMore:u,imgLazyLoading:m,showInCashInfo:p,showDiscount:h,showDiscountOnlyCashInfo:g,imageAltPrefix:f,imageWidth:x,imageHeight:v,onClickWishBtn:$,previewAction:k,showFullListBtn:S,enableShadow:z,displayMode:I,enableHover:D,showPreview:R,showWishBtn:O,showMoreBtn:M,hidePrice:A,notFound:L,onClick:T,onMouseDown:j,onProductView:W,partial:B,titleAs:F,domain:H,jsonLD:V,allowEmptyRating:_,data:K,gridGap:N,onThumbnailClick:q,colorMinLength:G,attributeStyle:U,offerTimerProps:Y}=e,J=(0,n.Z)(e,["slider","sellerPage","hidePriceButtonAction","lazyLoadingOffset","onClickLoadMore","imgLazyLoading","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","imageAltPrefix","imageWidth","imageHeight","onClickWishBtn","previewAction","showFullListBtn","enableShadow","displayMode","enableHover","showPreview","showWishBtn","showMoreBtn","hidePrice","notFound","onClick","onMouseDown","onProductView","partial","titleAs","domain","jsonLD","allowEmptyRating","data","gridGap","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]);null!==(i=t)&&void 0!==i||(t=(0,a.useRef)(null));let[X,Q]=(0,a.useState)(0),[ee,et]=(0,a.useState)(Boolean(B));if(a.useEffect(()=>{var e;return null!=(e=t)&&e.current&&Q(t.current.clientWidth),et(Boolean(B)),()=>et(!1)},[B]),L)return a.createElement(Z,L);let ei=null==K?void 0:K.map((e,t)=>a.createElement(E,{key:`product-item-${t}`,slider:o,sellerPage:s},a.createElement(r.Z,(0,l.Z)({key:`product-${e.variationId||e.id}-${t}`,hidePriceButtonAction:d,lazyLoadingOffset:c,imgLazyLoading:m,showInCashInfo:p,imageAltPrefix:f,imageWidth:x,imageHeight:v,enableShadow:z,displayMode:I,domain:H,enableHover:D,showPreview:R,showWishBtn:O,hidePrice:A,onClick:T,onMouseDown:j,onView:W,titleAs:F,index:t,showDiscount:h,showDiscountOnlyCashInfo:g,onClickWishBtn:t=>$(t,e),previewAction:()=>k(e),allowEmptyRating:_,containerWidth:X,onThumbnailClick:q,colorMinLength:G,attributeStyle:U,offerTimerProps:Y,sellerPage:s,slider:o},e)))),el=S?{label:P.dz,props:P.Bl}:{label:P.K9,props:P.Uh};return a.createElement(w,(0,l.Z)({ref:t,"data-testid":"product-list"},J),a.createElement(b,(0,l.Z)({},B&&!S&&{collapse:!0,trigger:ee,collapsedIn:B},{variant:"light",displayMode:I,gridGap:N,slider:o,sellerPage:s,renderAction:!o&&(ee||S||M)&&B<K.length&&a.createElement(y,(0,l.Z)({onClick(){u(),et(!ee)}},el.props),el.label)}),ei),V&&K&&a.createElement(C.ZP,{schema:K.filter(e=>{var t;return null==(t=e.price)?void 0:t.price}).map(e=>(0,C.Iy)({product:e,isList:!0},H)),type:"ItemList"}))});$.defaultProps={slider:!1,sellerPage:!1,hidePriceButtonAction:null,showFullListBtn:!1,displayMode:"gallery",domain:P.RW,lazyLoadingOffset:50,showInCashInfo:!0,imgLazyLoading:!0,showWishBtn:!1,showPreview:!1,showMoreBtn:!1,imageAltPrefix:"",hidePrice:!1,showDiscountOnlyCashInfo:!1,showDiscount:!1,titleAs:"h2",jsonLD:!0,partial:0,allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{},onClickLoadMore(){},onClickWishBtn(){},previewAction(){},onClick(){},onMouseDown(){},onProductView(){}};var k=$},99970:function(e,t,i){i.d(t,{Z:function(){return c}});var l=i(2784),n=i(49542);i(13980);var a=i(99673),r=i(87043);let o=(0,a.ZP)(r.rj)`
  overflow-x: auto;
  padding: 16px 0;
`,s=(0,a.ZP)(r.rj)`
  gap: 12px;
  display: flex;
  flex-wrap: nowrap;
`,d=({children:e,isMobile:t})=>{let[i,a]=(0,l.useState)(2);if((0,l.useEffect)(()=>{t||a(5)},[]),e.length>i){var r;return l.createElement(n.Z,{showArrowControls:!0,showControls:!1,auto:!1,slidesPerView:i},e)}return l.createElement(o,{"data-testid":"gallery-without-carousel"},l.createElement(s,null,e))};var c=d},77576:function(e,t,i){i.d(t,{Z:function(){return ea}});var l=i(2784);i(13980);var n=i(99673),a=i(7029);let r=(0,n.ZP)("video")`
  width: 100%;
  margin: auto;
  max-height: 55vh;
  border-radius: 15px;

  @media screen and (max-width: 499px) {
    max-height: 60vh;
  }
`,o=n.ZP.div`
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 499px) {
    border-radius: 12px;
  }
`,s=(0,n.ZP)(a.Z)`
  display: block;
  max-height: 55vh;
  width: auto;
  max-width: 100%;
  height: fit-content;
  border-radius: 15px;
  transform-origin: center center;
  object-fit: contain;

  @media screen and (max-width: 499px) {
    max-height: 60vh;
  }
`,d=n.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,c=({media:e,alt:t,currentSlide:i,index:n,rotation:a})=>{let c=(0,l.useRef)(null),u=(0,l.useRef)(null),m=(0,l.useRef)(null),[p,h]=(0,l.useState)({transform:"rotate(0deg) scale(1)",overflow:"hidden"}),[g,f]=(0,l.useState)({}),[x,v]=(0,l.useState)(null),[w,b]=(0,l.useState)(null);(0,l.useEffect)(()=>{c.current&&i!==n&&(c.current.pause(),c.current.currentTime=0)},[i,n]),(0,l.useLayoutEffect)(()=>{u.current&&b(u.current.getBoundingClientRect())},[x,i,n]);let y=e=>{v({width:e.target.offsetWidth,height:e.target.offsetHeight})};return(0,l.useLayoutEffect)(()=>{let{containerWidth:e,dynamicHeight:t,scale:l}=function({renderedDimensions:e,containerSize:t,rotation:i,currentSlide:l,index:n}){if(!e||!t||l!==n||0===i||180===i)return{containerWidth:"auto",dynamicHeight:"auto",scale:1};let a=e.width,r=e.height;if(!(r>a))return{containerWidth:"auto",dynamicHeight:`${a}px`,scale:1};let o=t.width,s=t.height,d=1;return(r>o||a>s)&&(d=.95*Math.min(o/r,s/a,1)),{containerWidth:"100%",dynamicHeight:"auto",scale:d}}({renderedDimensions:x,containerSize:w,rotation:a,currentSlide:i,index:n});h({transform:`rotate(${a}deg) scale(${l})`,height:t,overflow:"visible",transformOrigin:"center center"}),f({width:e,display:"flex",alignItems:"center",justifyContent:"center",height:"100%"})},[a,x,w,i,n]),l.createElement(d,{ref:u,style:g},"image"===e.mediaType?l.createElement(o,{style:p},l.createElement(s,{ref:m,alt:t,src:e.mediaUrl,onLoad:y})):l.createElement(r,{ref:c,muted:!0,controls:!0,type:"video/mp4",src:e.mediaUrl,"disablePictureIn-picture":"true",controlsList:"nodownload noplaybackrate"}))};c.defaultProps={rotation:0};var u=i(34490),m=i(60861),p=i(78045),h=i(49542),g=i(73172),f=i(55403),x=i(84546),v=i(19527),w=i(63825);let b=n.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 16px;
  z-index: ${(0,f.R)("zIndices.4")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 500px) {
    display: none;
  }
`,y=n.ZP.div`
  color: white;
  text-align: start;
  width: 100%;
`;n.ZP.div`
  margin: auto;
  ${(0,f.aK)("medium")} {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 720px;
    gap: 30px;
  }
`;let E=n.ZP.div`
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
`,Z=n.ZP.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,C=(0,n.ZP)(x.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,P=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 80px);
  margin: auto;
  ${(0,f.aK)("medium")} {
    max-width: 280px;
  }
`,$=(0,n.ZP)(x.Z)``,k=(0,n.ZP)(v.Z)`
  padding: 0 0 ${e=>(0,f.R)("space.2")(e)}px;
  ${(0,f.aK)("large")} {
    padding: 0 0 ${e=>(0,f.R)("space.3")(e)}px;
  }
`,S=(0,n.ZP)(w.Z).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,f.uu)("white")(e)};
  font-weight: ${e=>(0,f.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,f.R)("space.2")(e)}px;
  line-height: ${e=>(0,f.R)("lineHeights.plus")(e)}px;
`,z=n.ZP.span`
  width: 80px;
`,I=(0,n.ZP)(v.Z)`
  width: 100%;
  height: 32px;
  margin: 18px 0 0;
`;var D=i(71180);let R=(e,t)=>(null==e?void 0:e.length)<=t,O=(e,t)=>null==e?void 0:e.substring(0,t).concat("..."),M=e=>/^\d+$/.test(e),A=e=>e&&!M(e)&&(0,D.jL)(new Date(e),new Date),L=e=>(null==e?void 0:e.map((e,t)=>0===t?`${e.label}: ${e.value}`:` | ${e.label}: ${e.value}`))||[],T=({charLimit:e,children:t,closePopup:i,selectedMedia:n,review:a,changeCaroulsel:r,showRotateButton:o,onRotateImage:s})=>{let[d,c]=(0,l.useState)(!1),{rating:f,description:x,userData:v}=a,w=R(x,e),D=O(x,e);return l.createElement(b,null,l.createElement(E,null,l.createElement(Z,{"data-testid":"close-popup","aria-label":"fechar popup",onClick:i},l.createElement(u.JO$,{name:"Close",color:"#FFF"}))),l.createElement(P,null,l.createElement(h.Z,{auto:!1,goTo:n,verticalAlign:"center",onChange:r},t),l.createElement(I,{justifyContent:"center",alignItems:"center"},o&&l.createElement(m.Z,{variation:"outline",size:"small",onClick:s,startIcon:l.createElement(u.tnm,{width:20,height:20}),centered:!0},"Girar imagem"))),l.createElement($,{container:!0},l.createElement(k,null,l.createElement(p.Z,null),l.createElement(S,null,v.name),l.createElement(z,null,l.createElement(g.Z,{score:f}))),l.createElement(y,{"data-testid":"review-description"},d||w?x:D,"\xa0",!w&&l.createElement(C,{onClick:()=>c(!d),role:"button"},d?"ver menos":"ver mais"))))};T.defaultProps={charLimit:110,changeCaroulsel:()=>0};var j=i(97949),W=i(99970),B=i(66762);let F=(0,n.ZP)(v.Z)`
  align-items: center;
  padding: 0 0 ${e=>(0,f.R)("space.2")(e)}px;

  ${(0,f.aK)("large")} {
    padding: 0 0 ${e=>(0,f.R)("space.3")(e)}px;
  }
`,H=(0,n.ZP)(w.Z).attrs(()=>({fontSize:2}))`
  color: ${e=>(0,f.R)("colors.darkSilver")(e)};
  font-weight: ${e=>(0,f.R)("fontWeights.regular")(e)};
  padding: ${e=>(0,f.R)("space.2")(e)}px;
  line-height: ${e=>(0,f.R)("lineHeights.plus")(e)}px;
`,V=(0,n.ZP)(x.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,f.uu)("davysGray")};
  font-weight: ${e=>(0,f.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,f.R)("lineHeights.plus")(e)}px;
`,_=(0,n.ZP)(x.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,f.uu)("davysGray")};
  font-weight: ${e=>(0,f.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,f.R)("lineHeights.tall")(e)}px;
`,K=(0,n.ZP)(x.Z).attrs(()=>({fontSize:3}))`
  color: ${(0,f.R)("colors.black")};
  font-weight: ${(0,f.R)("fontWeights.regular")};
  line-height: 24px;
  padding: ${(0,f.R)("space.3")}px 0 ${(0,f.R)("space.3")}px;
  word-break: break-word;
  width: 100%;
`,N=n.ZP.div`
  margin: 25px 0;
  display: flex;
  width: 100%;
  gap: 40px;
`,q=(0,n.ZP)(x.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,G=n.ZP.span`
  width: 80px;
`,U=(0,n.ZP)(v.Z)`
  gap: 18px;
  width: 50%;
`,Y=(0,n.ZP)(x.Z)`
  width: 50%;
`,J=(0,n.ZP)(B.Z)`
  width: 720px;
  background-color: ${(0,f.ow)("background.lighter")};
  padding: 20px;
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`,X=(0,n.ZP)(v.Z)`
  min-height: 400px;
`,Q=(0,n.ZP)(x.Z)`
  width: 100%;
`,ee=(0,n.ZP)(m.Z)`
  width: 50%;
`,et=(0,n.ZP)(v.Z)`
  width: 100%;
  height: 32px;
`,ei={color:"#51585C",fontWeight:"bold"},el=({changeCaroulsel:e,charLimit:t,children:i,closePopup:n,review:a,selectedMedia:r,thumbnails:o,showRotateButton:s,onRotateImage:d})=>{let[c,m]=(0,l.useState)(!1),[f,x]=(0,l.useState)(r),{rating:v,description:w,submissionDate:b,attributes:y,userData:E}=a,Z=R(w,t),C=O(w,t),P=A(b),$=L(y);return l.createElement(J,{position:"center",showClose:!0,type:"responsive",onClickOutside:n,title:"Avalia\xe7\xf5es com m\xeddias",titleStyle:ei},l.createElement(X,{flexDirection:"column",justifyContent:"space-between"},l.createElement(N,null,l.createElement(U,{flexDirection:"column",justifyContent:"center",alignItems:"center"},l.createElement(h.Z,{showSlideCount:!0,showArrowControls:!0,showControls:!1,auto:!1,goTo:f,verticalAlign:"center",onChange:e},i),l.createElement(et,{justifyContent:"center",alignItems:"center"},s&&l.createElement(ee,{variation:"outline",size:"small",onClick:d,startIcon:l.createElement(u.tnm,{width:20,height:20}),centered:!0},"Girar imagem"))),l.createElement(Y,{container:!0},l.createElement(F,null,l.createElement(p.Z,null),l.createElement(H,null,E.name),l.createElement(G,null,l.createElement(g.Z,{score:v}))),$.length>0&&l.createElement(V,{"data-testid":"review-sub-title"},$),l.createElement(K,{"data-testid":"review-description"},c||Z?w:C,"\xa0",!Z&&l.createElement(q,{onClick:()=>m(!c),role:"button"},c?"ver menos":"ver mais")),P&&l.createElement(_,{"data-testid":"review-date"},`h\xe1 ${P}`))),l.createElement(Q,null,(()=>{let e=o.map((e,t)=>l.createElement(j.Z,{key:`caroulsel-card-${e.mediaUrl}`,media:e,onClick:()=>x(t)}));return l.createElement(W.Z,null,e)})())))};el.defaultProps={charLimit:110,reviewDate:null,subtitle:""};let en=({review:e,charLimit:t,mediaProps:i,selectedMedia:n,closePopup:a,changeCaroulsel:r})=>{let[o,s]=(0,l.useState)(n),[d,u]=(0,l.useState)(!1),[m,p]=(0,l.useState)({}),h=i.filter(e=>e.thumbnails),g=i.filter(e=>e.processed),f=e=>{g[e]&&u("video"!==g[e].mediaType)};(0,l.useEffect)(()=>{f(o)},[g,o]);let x=e=>{s(e),f(e),r(e)},v=()=>{var e;let t=null==(e=g[o])?void 0:e.mediaUrl;t&&p(e=>{let i=e[t]||0,l=i+90;return l>=360&&(l=0),Object.assign({},e,{[t]:l})})},w=(0,l.useCallback)(()=>g.map((e,t)=>{let i=m[e.mediaUrl]||0;return l.createElement(c,{key:`slide-item-${e.mediaUrl}`,media:e,alt:"",currentSlide:o,index:t,rotation:i})}),[g,o,m]),b=()=>{a()};return window.innerWidth>=500?l.createElement(el,{charLimit:t,closePopup:a,review:e,selectedMedia:n,changeCaroulsel:x,thumbnails:h,showRotateButton:d,onRotateImage:v},w()):l.createElement(T,{charLimit:t,closePopup:b,review:e,selectedMedia:n,changeCaroulsel:x,showRotateButton:d,onRotateImage:v},w())};en.defaultProps={charLimit:110,changeCaroulsel:()=>0};var ea=en},79534:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(31461),n=i(2784);i(13980);var a=i(87043),r=i(39146),o=i(99673),s=i(55403),d=i(63825),c=i(84546);let u=(0,o.ZP)(c.Z)`
  padding-bottom: ${(0,s.R)("space.2")}px;
`;function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p({agreedError:e,agreedLabel:t,buttonLabel:i,onSubmit:o,ratingError:s,ratingLabel:d,recommendedError:c,recommendedLabel:p,reviewCharacteristics:h,minTextSize:g,textError:f,textLabel:x,textPlaceholder:v,titleError:w,titleLabel:b,titlePlaceholder:y,focus:E}){let[Z,C]=(0,n.useState)(!1),[P,$]=(0,n.useState)(""),[k,S]=(0,n.useState)(""),[z,I]=(0,n.useState)(""),[D,R]=(0,n.useState)(""),[O,M]=(0,n.useState)(h||[]),[A,L]=(0,n.useState)({}),T=Object.assign({rating:(0,n.useRef)(),title:(0,n.useRef)(),text:(0,n.useRef)(),recommended:(0,n.useRef)()},O.reduce((e,{id:t})=>Object.assign({},e,{[t]:(0,n.useRef)()}),{}),{agreed:(0,n.useRef)()}),j=(0,n.useCallback)((e,t,i=E)=>{L(n=>{let a=(0,l.Z)(n,[e].map(m)),r=Object.assign({},a,t),o=Object.keys(r);if(i&&o.includes(e)&&t){let{current:s}=T[o[0]];window.scroll({top:s.offsetTop-35,left:0,behavior:"smooth"})}return r})},[A]),W=(0,n.useCallback)((e,t,i,l,n)=>{let a=e.length<i?{[t]:l}:void 0;return j(t,a,n),a},[k,z,D,P,O,Z]),B=(0,n.useCallback)((e,t,i,l)=>{let n=e?void 0:{[t]:i};return j(t,n,l),n},[k,z,D,P,O,Z]),F=(0,n.useCallback)(()=>{S(""),I(""),R(""),$(""),C(!1),M(h.map(e=>(0,l.Z)(e,["value"])))},[h]),H=(0,n.useCallback)(t=>{let i=Object.assign({},B(k,"rating",s),B(z,"title",w),W(D,"text",g,f),B(P,"recommended",c),O.reduce((e,t)=>Object.assign({},e,B(t.value,t.id,s)),{}),B(Z,"agreed",e));Object.keys(i).length||o({rating:k,title:z,text:D,recommended:P,characteristics:O},F),t.preventDefault()},[k,z,D,P,Z,O]);return n.createElement(a.xu,{as:"form","data-testid":"review-form"},n.createElement(u,null,n.createElement(r.qr,{onChange(e){B(e.target.value,"rating",s,!1),S(e.target.value)},ref:T.rating,value:k,error:A.rating,type:"rating",label:d,height:[40,30],width:[40,30],gap:[0,30],fontSize:[4,2],fontWeight:["bold","regular"],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"],name:"rating"})),n.createElement(u,null,n.createElement(r.qr,{onChange:e=>I(e.target.value),onFocus:()=>L(e=>(0,l.Z)(e,["title"])),onBlur:e=>B(e.target.value,"title",w,!1),ref:T.title,value:z,error:A.title,type:"text",label:b,placeholder:y,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"]})),n.createElement(u,null,n.createElement(r.qr,{onChange:e=>R(e.target.value),onFocus:()=>L(e=>(0,l.Z)(e,["text"])),onBlur:e=>W(e.target.value,"text",50,f,!1),ref:T.text,value:D,error:A.text,type:"textarea",label:x,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"],placeholder:v})),n.createElement(u,{borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},n.createElement(r.qr,{onChange(e){B(e.target.value,"recommended",c,!1),$(e.target.value)},ref:T.recommended,value:P,error:A.recommended,type:"recommendation",label:p,gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),null==O?void 0:O.map(({id:e,label:t,value:i})=>n.createElement(u,{key:e,borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},n.createElement(r.qr,{onChange(t){B(t.target.value,e,s,!1),M(O.map(i=>i.id===e?Object.assign({},i,{value:t.target.value}):i))},name:e,ref:T[e],value:i,error:A[e],label:t,type:"rating",height:[30,24],width:[30,24],gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]}))),n.createElement(a.kC,{m:20,flexDirection:["column","row"],gap:[0,30]},n.createElement(a.kC,{flex:"0.75"}),n.createElement(a.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},n.createElement(a.XZ,{ref:T.agreed,checked:Z,onChange(t){B(t.target.checked,"agreed",e,!1),C(t.target.checked)}},t),A.agreed&&n.createElement(a.xv,{color:"error.base"},A.agreed))),n.createElement(a.kC,{mY:20,flexDirection:["column","row"],gap:[0,30]},n.createElement(a.kC,{flex:"0.75"}),n.createElement(a.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},n.createElement(a.zx,{onClick:H,full:!0},i))))}(0,o.ZP)(d.Z)`
  text-decoration: underline;
  cursor: pointer;
`,p.defaultProps={agreedError:"Por favor verifique os termos.",agreedLabel:"Concordo com os termos e condi\xe7\xf5es",buttonLabel:"Enviar avalia\xe7\xe3o",ratingError:"Clique nas estrelas para classificar!",ratingLabel:"Avalia\xe7\xe3o Geral",recommendedError:"Por favor selecione uma op\xe7\xe3o.",recommendedLabel:"Voc\xea recomenda esse produto?",minTextSize:50,textError:"M\xednimo de 50 caracteres.",textLabel:"Avalia\xe7\xe3o",titleError:"Insira o t\xedtulo completo corretamente.",titleLabel:"T\xedtulo da avalia\xe7\xe3o",titlePlaceholder:"Ex. Produto Maravilhoso",textPlaceholder:"Ex: Escreva exclusivamente sobre o produto. Para sugest\xf5es, reclama\xe7\xf5es ou problemas em geral, acesse nossa Central de Atendimento",focus:!0};var h=p},4506:function(e,t,i){i.d(t,{Z:function(){return v}});var l=i(2784);i(13980);var n=i(34490),a=i(99673),r=i(55403),o=i(19527),s=i(84546),d=i(63825);let c=(0,a.ZP)(o.Z)`
  display: flex;
  justify-content: center;
  align-items: center;
`,u=(0,a.ZP)(o.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`,m=(0,a.ZP)(d.Z)`
  font-weight: ${e=>(0,r.R)("fontWeights.bold")(e)};
  font-size: ${e=>(0,r.R)("fontSizes.7")(e)}px;
`,p=(0,a.ZP)(d.Z)`
  font-size: ${e=>(0,r.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,r.uu)("light")(e)};
`,h=(0,a.ZP)(s.Z)`
  border-left: 3px solid ${e=>(0,r.kJ)("light")(e)};
  height: 90px;
  margin: 0px 24px;
`;var g=i(60861),f=i(39146);function x({average:e,count:t,distribution:i,actionLabel:a,onReviewButtonClick:r}){let o=t>1?`${t} avalia\xe7\xf5es`:`${t} avalia\xe7\xe3o`;return i.sort((e,t)=>t.value-e.value),l.createElement(l.Fragment,null,l.createElement(c,{mb:[3,3,3]},l.createElement(u,null,l.createElement("div",null,l.createElement(m,{"data-testid":"stat-score"},e.toFixed(1)),l.createElement(n.Uxw,{width:"50px",height:"50px",color:"#FFCC03"})),l.createElement(p,{"data-testid":"stat-desc"},o)),l.createElement(h,null),l.createElement("ul",null,null==i?void 0:i.map(e=>l.createElement(f.me,{key:e.value,id:e.value,score:e.count,count:e.count,max:t})))),!!a&&l.createElement(g.Z,{full:!0,variation:"fill",size:"medium",color:"primary",onClick:l=>r(l,{average:e,distribution:i,desc:o,total:t})},a))}x.defaultProps={actionLabel:"Quero avaliar",average:0,count:0,distribution:[],onReviewButtonClick:()=>({})};var v=x},30143:function(e,t,i){i.d(t,{Z:function(){return R}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(34490),o=i(46514),s=i(87043),d=i(99673),c=i(55403),u=i(63825);let m=(0,d.ZP)(u.Z)`
  color: ${e=>e.color||(0,c.uu)("scratched")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
  margin-right: 4px;
  line-height: ${e=>e.lineHeight||"20px"};
`,p=d.ZP.label`
  color: ${e=>(0,c.uu)("base")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  text-decoration: ${({disableClick:e})=>e?"none":"underline"};
  cursor: ${({disableClick:e})=>e?"default":"pointer"};
`,h=d.ZP.a`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`,g=(0,d.ZP)(r.ZGh).attrs(e=>({color:`${e.logoIconColor||(0,c.ow)("base")(e)}`,width:60,height:14,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 4px;
`,f=d.ZP.div`
  padding: 15px 15px;
`,x=(0,d.ZP)(u.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
`,v=d.ZP.a`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 28px 0;
  text-decoration: none;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  color: ${e=>(0,c.uu)("primary")(e)};
  cursor: pointer;
`,w=(0,d.ZP)(r._Qn).attrs(e=>({color:(0,c.uu)("primary")(e)}))`
  vertical-align: middle;
  width: 20px;
  height: 20px;
`,b=d.ZP.div`
  margin: 0 0 15px;
`,y=(0,d.ZP)(u.Z)`
  font-size: ${e=>(0,c.R)("fontSizes.3")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  padding: 0 0 5px;
`,E=d.ZP.p`
  font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
  color: ${e=>(0,c.uu)("greyish")(e)};
  padding: 0 0 5px;
`,Z={bg:"#f0f0f2",borderRadius:8,p:2,mb:2,alignItems:"center"},C=e=>{let{id:t,delivery:i,handleLabelName:r,internationalPartner:o,partnerColor:d}=e,c=(0,n.Z)(e,["id","delivery","handleLabelName","internationalPartner","partnerColor"]);return i||t?i&&(null==t?void 0:t.toUpperCase())!==(null==i?void 0:i.toUpperCase())?a.createElement(s.xu,c,a.createElement(m,{"data-testid":"label"},"Vendido por ",r(t)),a.createElement(m,{"data-testid":"label"},"Entregue por ",r(i))):a.createElement(s.xu,o?Z:c,a.createElement(m,(0,l.Z)({},o?{color:d,lineHeight:"16px"}:{},{"data-testid":"label"}),"Vendido e entregue por ",r(i))):null};C.defaultProps={id:"magazineluiza",delivery:"magazineluiza",handleLabelName(){},internationalPartner:!1};var P=i(86349);let $=e=>{let{address:t,number:i,district:l,city:n,state:a,zipcode:r}=e,o=[];return t&&i&&o.push(`${t}, ${i}`),n&&a&&o.push(`${l?`${l} - `:""}${n}/${a}`),r&&o.push(`CEP: ${r}`),o},k=({seller:e,product:t,onOffersClick:i})=>{let{id:l,description:n,deliveryId:r,details:o,href:s}=e,d=(0,P.xx)(null==t?void 0:t.price),c=$((null==o?void 0:o.address)||{}),u=[(null==o?void 0:o.legalName)&&{label:"Raz\xe3o Social",id:"legalName",value:null==o?void 0:o.legalName},d?{label:"ID do Lojista",id:"shippingDocumentNumber",value:null==o?void 0:o.shippingDocumentNumber}:{label:"CNPJ",id:"documentNumber",value:null==o?void 0:o.documentNumber},c.length&&{label:"Endere\xe7o",id:"address",value:$(null==o?void 0:o.address)}];return a.createElement(f,null,a.createElement(x,null,n),a.createElement(v,{href:s,onClick:e=>i(e,{id:l,delivery:r}),"data-testid":"offers-link"},"Veja todas as ofertas dessa loja ",a.createElement(w,null)),u.map((e,t)=>a.createElement(b,{key:`seller-detail-${t}`,"data-testid":"details"},a.createElement(y,null,null==e?void 0:e.label),Array.isArray(null==e?void 0:e.value)?null==e?void 0:e.value.map(e=>a.createElement(E,{"data-testid":"details-value",key:`seller-value-${e}`},e)):a.createElement(E,null,null==e?void 0:e.value))))};k.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu",details:{}},product:{},onOffersClick(){}};var S={zattini:{id:"zattini",logo:r.fOR},netshoes:{id:"netshoes",logo:r.fOD},kabum:{id:"kabum",logo:r.M0M},"epocacosmeticos-integra":{id:"epoca",logo:r.uE5}},z=i(12468),I=i(83179);let D=e=>{let{showSellerDetailContent:t,onCloseModalContent:i,seller:d,product:c,onSellerClick:u,onOffersClick:m,disableSellerClick:f,disableSellerDetails:x,logoIconColor:v,showDialog:w,modal:b,internationalPartner:y,partnerColor:E,partnerLogo:Z}=e,P=(0,n.Z)(e,["showSellerDetailContent","onCloseModalContent","seller","product","onSellerClick","onOffersClick","disableSellerClick","disableSellerDetails","logoIconColor","showDialog","modal","internationalPartner","partnerColor","partnerLogo"]),{id:$,description:D,deliveryId:R}=d,[O,M]=(0,a.useState)(t),A=e=>{u(e,{id:$,delivery:R}),M(!x)},L=()=>{M(!1),i()};a.useEffect(()=>{M(t)},[t]);let T=e=>{if(y&&Z)return a.createElement(h,{title:`Logo ${R}`,"data-testid":`${R}logo`,children:a.createElement(r.RdR,{href:Z,width:77,height:16}),onClick:f?null:A});if(e===z.ig)return a.createElement(g,{title:"Logo magalu","data-testid":"magalogo",logoIconColor:v});if(S[e]){let{id:t,logo:i}=S[e];return a.createElement(h,{title:`Logo ${t}`,"data-testid":`${t}logo`,children:a.createElement(i,{preserveAspectRatio:!0}),onClick:f?null:A})}return a.createElement(p,{onClick:f?null:A,disableClick:f,children:D||R,"data-testid":"link"})};return a.createElement(a.Fragment,null,a.createElement(C,(0,l.Z)({id:$,delivery:R,handleLabelName:T,internationalPartner:y,partnerColor:E},P)),!f&&!w&&a.createElement(o.YE,{direction:"right",visible:O,onClickOutside:L,fullScreen:!0,portal:!0},a.createElement(I.Z,{label:b.title||"Informa\xe7\xf5es da loja parceira",align:"left",leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:L}}),b.content||a.createElement(k,{seller:d,product:c,onOffersClick:m})),!f&&!x&&w&&a.createElement(s.Vq,{visible:O,onClickOutside:L,position:"center",type:"responsive",showClose:!0,title:b.title,titleStyle:b.titleStyle},b.content||a.createElement(k,{seller:d,product:c,onOffersClick:m})))};D.defaultProps={product:{},seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu"},onSellerClick(){},onOffersClick(){},disableSellerClick:!1,onCloseModalContent:()=>({}),showSellerDetailContent:!1,disableSellerDetails:!1,logoIconColor:"",showDialog:!1,modal:{title:""},internationalPartner:!1};var R=D},2334:function(e,t,i){i.d(t,{Z:function(){return d}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(39146),o=i(87043);let s=e=>{let{items:t,currency:i}=e,s=(0,n.Z)(e,["items","currency"]);return a.createElement(o.xu,s,t.map((e,t)=>a.createElement(o.xu,{key:`shipping-item-${t}`},!!t&&a.createElement(o.bo,null),a.createElement(r.KI,(0,l.Z)({currency:i},e)))))};s.defaultProps={items:[],currency:"BRL"};var d=s},75335:function(e,t,i){i.d(t,{Z:function(){return H}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(99673),o=i(68054),s=i(55403),d=i(19527),c=i(63825),u=i(27439);let m=r.iv`
  color: ${e=>(0,s.uu)("base")(e)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,p={miniature:r.iv`
    display: grid;
    padding: 8px 2px;
  `,list:r.iv`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 16px;
  `,gallery:r.iv``,none:r.iv`
    display: contents;
  `,button:r.iv`
    display: block;
    padding: 16px 16px 6px;
  `},h={miniature:r.iv`
    height: 20vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,list:r.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
  `,gallery:r.iv`
    height: 32vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `},g=(0,r.ZP)(u.ZP)`
  background-color: ${e=>(0,s.ow)("background.lighter")(e)};
  padding: 0;
  ${({displayMode:e})=>e&&p[e]}
`,f=r.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${e=>(0,s.R)("space.2")(e)}px;
  ${({displayMode:e})=>e&&h[e]}
`,x=r.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  grid-column-start: ${({betterOffer:e})=>e&&2};
  ${({highlight:e,highlightType:t,sponsored:i})=>e&&!t?r.iv`
          margin: ${(0,s.R)("space.0")}px ${(0,s.R)("space.2")}px;
        `:r.iv`
          margin-bottom: ${i?(0,s.R)("space.2"):(0,s.R)("space.3")}px;
        `};
`,v=(0,r.ZP)(c.Z).attrs(({highlight:e,fontSize:t})=>({fontSize:null!=t?t:[e?1:2,4,5],lineHeight:"display",fontWeight:"medium"}))`
  ${m}
  ${o.cp}

  & > span {
    font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  }
`,w=r.ZP.h2`
  ${m}
  height: 32px;
  line-height: ${e=>(0,s.R)("lineHeights.plus")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.regular")(e)};
  margin: 0 0 4px 0;
`,b=r.ZP.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,y=(0,r.ZP)(c.Z).attrs(()=>({fontSize:[1,4,5],lineHeight:"display",fontWeight:"regular"}))`
  ${m}
  ${o.cp}
`,E=r.ZP.div`
  display: grid;
`,Z=r.ZP.div`
  box-shadow: ${({exhibition:e})=>"highlight"===e?"0 4px 10px 0 rgba(0, 0, 0, 0.11)":"unset"};
  border-radius: ${({exhibition:e})=>"highlight"===e&&"4px"};
  overflow: hidden;
  ${({exhibition:e})=>"betteroffer"===e&&r.iv`
      display: grid;
      grid-template-rows: auto auto;
      padding: 24px 0;
      grid-template-columns: 1fr minmax(auto, 1376px) 1fr;
    `}
  ${o.Dh}
  ${o.$_}
  ${o.bK}
  ${o.Cg}
`,C=(0,r.ZP)(d.Z)`
  flex: 1;
  flex: 0 0 calc(100% / 4);
  border-right: ${(0,s.R)("borders.0")};
  border-width: 2px;
`,P=(0,r.ZP)(c.Z).attrs(()=>({fontSize:0,color:"light",marginTop:1}))``,$=r.ZP.div`
  grid-column-start: 2;
`;var k=i(98284);let S=({title:e,titleAs:t,titleSize:i,highlightType:l,showSponsoredSubTitle:n,betterOffer:r})=>{let[o,s="",d=""]=e.split('"'),c=d.replace(", ","");return a.createElement(x,{highlight:s,highlightType:l,sponsored:n,betterOffer:r},l?a.createElement(v,{as:t,fontSize:i,"data-testid":"product-title-head"},o," ",a.createElement("span",null,s)," ",c):a.createElement(a.Fragment,null,a.createElement(v,{as:t,fontSize:i,highlight:s,"data-testid":"product-title-head"},o),!!s&&a.createElement(y,{as:t,fontSize:i,"data-testid":"text-highlight"},s),!!c&&a.createElement(v,{as:t,fontSize:i,"data-testid":"text-suffix"},c)),n&&a.createElement(P,{"data-testid":"sponsored-tag"},"Patrocinados"))};S.defaultProps={title:"",titleAs:"h2",highlightType:!1,showSponsoredSubTitle:!1,betterOffer:!1};let z=e=>{let{data:t,title:i,titleAs:r,titleSize:o,imageAltPrefix:s,productTitleAs:d,showDiscountOnlyCashInfo:c,showDiscount:u}=e,m=(0,n.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscountOnlyCashInfo","showDiscount"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:i,titleSize:o,titleAs:r}),a.createElement(k.Z,(0,l.Z)({data:t,displayMode:"list",enableShadow:!1,exhibition:"rank",imageAltPrefix:s,titleAs:d,showInCashInfo:!0,showDiscountOnlyCashInfo:c,showDiscount:u},m)))},I=e=>{let{data:t,title:i,titleAs:r,titleSize:o,imageAltPrefix:s,productTitleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showDiscountOnlyCashInfo:p,showDiscount:h,showSponsoredSubTitle:g}=e,f=(0,n.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showDiscountOnlyCashInfo","showDiscount","showSponsoredSubTitle"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:i,titleSize:o,titleAs:r,showSponsoredSubTitle:g}),a.createElement(k.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"list",imageAltPrefix:s,titleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showInCashInfo:!0,showDiscount:h,showDiscountOnlyCashInfo:p},f)))};var D=i(7029);let R=e=>{let{data:t,highlight:i,title:r,titleAs:o,titleSize:s,imageAltPrefix:d,productTitleAs:c,showDiscount:u,showDiscountOnlyCashInfo:m}=e,p=(0,n.Z)(e,["data","highlight","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscount","showDiscountOnlyCashInfo"]),h=d?`${d}${i.title}`:i.title;return a.createElement(a.Fragment,null,a.createElement(g,{as:"div",displayMode:"list","data-testid":"product-card-container",hideLinkBorder:!1},a.createElement(f,{displayMode:"list"},a.createElement(D.Z,{src:i.image,alt:h,lazy:!0,offset:2})),a.createElement(E,{displayMode:"gallery","data-testid":"product-card-content"},a.createElement(S,{title:r,titleAs:o,titleSize:s}))),a.createElement(k.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"highlight",imageAltPrefix:d,titleAs:c,showInCashInfo:!0,showDiscountOnlyCashInfo:m,showDiscount:u},p)))};var O=i(34490),M=i(87043);let A=({data:e,button:t,title:i,titleAs:l,titleSize:n,imageAltPrefix:r,productTitleAs:o,onClick:s,onMouseDown:d})=>{let[c]=e,u=r?`${r}${c.title}`:null==c?void 0:c.title;return a.createElement(g,{displayMode:"button","data-testid":"product-card-container",hideLinkBorder:!1,as:"div"},a.createElement(S,{title:i,titleAs:l,titleSize:n}),a.createElement(b,null,a.createElement(f,{displayMode:"list"},a.createElement(D.Z,{src:null==c?void 0:c.image,alt:u,lazy:!0,offset:2})),a.createElement(E,{displayMode:"none","data-testid":"product-card-content"},a.createElement(x,{as:o},a.createElement(w,null,null==c?void 0:c.title)))),a.createElement(M.zx,{"data-testid":"showcase-button",onClick:e=>s(e,c),onMouseDown:e=>d(e,c),color:"secondary",startIcon:a.createElement(O.tuM,{width:32,height:32}),m:"10px 0",full:!0},(null==t?void 0:t.label)||"RETOMAR SUA COMPRA"))};A.defaultProps={onMouseDown(){}};var L=i(4720),T=i(43125);let j=e=>{let{title:t,titleAs:i,titleSize:r,data:o,highlight:s,slidesPerView:c,showDiscount:u,showDiscountOnlyCashInfo:m,showSponsoredSubTitle:p,offerTimerProps:h}=e,g=(0,n.Z)(e,["title","titleAs","titleSize","data","highlight","slidesPerView","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","offerTimerProps"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:t,titleAs:i,titleSize:r,highlightType:!!s,showSponsoredSubTitle:p}),a.createElement(d.Z,null,s&&a.createElement(C,{slidesPerView:c},a.createElement(T.Z,(0,l.Z)({},s,{displayMode:"gallery",showInCashInfo:!0,titleAs:"h3",fullHeight:!0,imageAltPrefix:"",imgLazyLoading:!0,imageWidth:g.imageWidth,imageHeight:g.imageHeight,showRating:!1,showDiscountOnlyCashInfo:m,showDiscount:u,key:`product-hightlight${s.variationId||s.id}`,offerTimerProps:h,enableHover:!0}))),a.createElement(L.Z,(0,l.Z)({products:o,slidesPerView:s?c-1:c,enableHover:!s,showDiscountOnlyCashInfo:m,showDiscount:u,offerTimerProps:h},g))))};j.defaultProps={slidesPerView:4};let W=e=>{let{title:t,titleAs:i,titleSize:r,data:o,highlight:s,slidesPerViewBetterOffer:d,showSponsoredSubTitle:c,showButton:u,buttonProps:m}=e,p=(0,n.Z)(e,["title","titleAs","titleSize","data","highlight","slidesPerViewBetterOffer","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","showButton","buttonProps"]);return a.createElement(a.Fragment,null,a.createElement(S,{title:t,titleAs:i,titleSize:r,highlightType:!!s,showSponsoredSubTitle:c,betterOffer:!0}),a.createElement($,null,a.createElement(L.Z,(0,l.Z)({products:o,slidesPerView:d,enableHover:!s,showDiscountOnlyCashInfo:!1,showDiscount:!1,fullHeight:!1,exhibition:"betteroffer",gutter:24,displayMode:"list",showRating:!1,showOfferTimer:!0,showPartialNextSlide:!0,cardType:"horizontal",show:!0,showBorder:!0,showButton:u,buttonProps:m,hideOriginalPrice:!0},p))))};W.defaultProps={slidesPerViewBetterOffer:2,showButton:!1,buttonProps:{}};var B={rank:z,list:I,highlight:R,button:A,carousel:j,betteroffer:W};let F=(0,a.forwardRef)((e,t)=>{var i;let{data:r,onClick:o,onMouseDown:s,onProductView:d,jsonLD:c,exhibition:u,titleAs:m,titleSize:p,imageAltPrefix:h,productTitleAs:g,showFullListBtn:f,showMoreBtn:x,onClickLoadMore:v,showInCashInfo:w,showDiscount:b,showDiscountOnlyCashInfo:y,showSponsoredSubTitle:E,slidesPerViewBetterOffer:C,showButton:P,buttonProps:$}=e,k=(0,n.Z)(e,["data","onClick","onMouseDown","onProductView","jsonLD","exhibition","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","slidesPerViewBetterOffer","showButton","buttonProps"]);null!==(i=t)&&void 0!==i||(t=(0,a.useRef)(null));let S=void 0===B[u]?B.rank:B[u];return a.createElement(Z,(0,l.Z)({ref:t,exhibition:u},k),a.createElement(S,(0,l.Z)({data:r.products,title:r.title,highlight:r.highlight,button:r.button,onClick:o,onMouseDown:s,onProductView:d,jsonLD:c,titleAs:m,titleSize:p,productTitleAs:g,imageAltPrefix:h,showFullListBtn:f,slidesPerViewBetterOffer:C,showMoreBtn:x,onClickLoadMore:v,showInCashInfo:w,showDiscount:b,showDiscountOnlyCashInfo:y,showSponsoredSubTitle:E,showButton:P,buttonProps:$},k)))});F.defaultProps={data:{title:null,products:[]},onClick:()=>!1,onMouseDown:()=>!1,onProductView(){},exhibition:"rank",jsonLD:!0,titleAs:"h2",productTitleAs:"h3",imageAltPrefix:"",showFullListBtn:!1,showMoreBtn:!1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showSponsoredSubTitle:!1,slidesPerViewBetterOffer:2,showButton:!1,buttonProps:{}},F.displayName="Showcase";var H=F},83179:function(e,t,i){i.d(t,{Z:function(){return x}});var l=i(7896),n=i(31461),a=i(2784),r=i(34490);i(13980);var o=i(99673),s=i(55403),d=i(68054),c=i(63825);let u={left:o.iv`
    grid-template-columns: auto repeat(1, auto) 1fr;
  `,right:o.iv`
    grid-template-columns: 1fr repeat(1, auto) auto;
  `,default:o.iv`
    grid-template-columns: 1fr repeat(1, auto) 1fr;
  `},m=(0,o.ZP)(c.Z)`
  align-self: center;
  font-weight: 500;
`,p=o.ZP.div`
  margin-right: auto;
`,h=o.ZP.div`
  display: grid;
  ${e=>u[null==e?void 0:e.align]||u.default}
  gap: 0 10px;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,s.dF)("darker")(e)};
  ${d.Dh}
  ${d.$_}
  ${d.bK}
  ${d.Cg}
  ${d.J4}
  ${d.$u}
`,g={close:r.x8P,back:r.xhZ},f=e=>{let{label:t,align:i,fontSize:r,leftButton:o,showCloseButton:s}=e,d=(0,n.Z)(e,["label","align","fontSize","leftButton","showCloseButton"]),{icon:c,title:u,onClick:f,iconColor:x="#8c8c8c"}=o,v=g[c||"close"];return a.createElement(h,(0,l.Z)({},d,{align:i,"data-testid":"sidebar-header"}),a.createElement(p,null,s&&a.createElement(v,{color:x,role:"button",title:u,"data-testid":`${c}-button`,onClick:f})),a.createElement(m,(0,l.Z)({fontSize:r},d,{"data-testid":"title"}),t))};f.defaultProps={align:"center",fontSize:1,leftButton:{icon:"close",onClick(){}},showCloseButton:!0};var x=f},70615:function(e,t,i){i.d(t,{$:function(){return v.Z},Z:function(){return C}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(39879),o=i(99673),s=i(68054),d=i(55403),c=i(81572),u=i(84546);let m={left:o.iv`
    left: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(-100%)"};
  `,right:o.iv`
    right: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(100%)"};
  `},p=o.ZP.aside`
  z-index: ${e=>(0,d.R)("zIndices.2")(e)};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
`,h=(0,o.ZP)(c.Z).attrs(e=>({borderBottom:`1px solid ${(0,d.dF)("darker")(e)}`}))``,g=(0,o.ZP)(u.Z).attrs(e=>{let{fullScreen:t}=e,i=(0,n.Z)(e,["visible","fullScreen"]);return{backgroundColor:(0,d.dF)((null==i?void 0:i.bg)||"lighter")(i),zIndex:(0,d.R)("zIndices.3")(i),width:t?"100%":"80%",overflowX:"hidden",position:"fixed",overflowY:"auto",textAlign:"left",display:"block",height:"100vh",height:"100svh",top:0}})`
  ${s.$_}

  ${({direction:e})=>m[e]||m.right}
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: ${({timeTransition:e})=>`transform ${e}s ease-in-out`};

  /* mobile native toolbar */
  padding-bottom: 54px;
`,f=(0,o.ZP)(u.Z).attrs(e=>{let{visible:t}=e,i=(0,n.Z)(e,["visible"]);return{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:(0,d.R)("zIndices.2")(i),opacity:Number(t),position:"fixed",bottom:0,right:0,left:0,top:0}})`
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: visibility 0s, opacity 0.3s linear;
`;var x=i(75851),v=i(83179),w=i(34490);let b=e=>{let{children:t,variant:i,startIcon:r,fontSize:o,fontWeight:s,textAlign:d,ariaLabel:c,fill:u,onClick:m}=e,p=(0,n.Z)(e,["children","variant","startIcon","fontSize","fontWeight","textAlign","ariaLabel","fill","onClick"]);return a.createElement(h,(0,l.Z)({variant:i,scale:"large",startIcon:r&&a.createElement(w.JO$,{name:r,"aria-label":c,fill:u,onClick:m,"data-testid":"sidebar-header-icon"}),textAlign:d,fontSize:o,fontWeight:s,"data-testid":"sidebar-header"},p),t)};b.defaultProps={children:null,variant:"transparent",startIcon:"ArrowBack",fontSize:1,fontWeight:"medium",textAlign:"center",ariaLabel:"fechar sidebar",fill:"currentColor",onClick(){}};let y=e=>a.createElement(x.Z,{id:"portal-sidebar"},e),E=e=>{let{portal:t=!1}=e,i=(0,n.Z)(e,["portal"]),l=a.createElement(Z,i);return t?y(l):l},Z=e=>{let{children:t,visible:i,direction:o,timeTransition:s,onClickOutside:d,headerTitle:c,fullScreen:u}=e,m=(0,n.Z)(e,["children","visible","direction","timeTransition","onClickOutside","headerTitle","fullScreen"]),h=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var e;let t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=i?"hidden":t,null!=h&&null!=(e=h.current)&&e.scrollTop&&(h.current.scrollTop=0),()=>{document.body.style.overflow=t}},[i]),(0,a.useEffect)(()=>{(0,r.Iq)()},[t]),a.createElement(p,{visible:i,"data-testid":"sidebar"},a.createElement(g,(0,l.Z)({forwardRef:h,visible:i,direction:o,timeTransition:s,fullScreen:u,"data-testid":"content"},m),c&&a.createElement(v.Z,{label:c,leftButton:{onClick:d}}),t),a.createElement(f,{"aria-hidden":"true",visible:i,onClick:d,"data-testid":"overlay"}))};Z.defaultProps={direction:"left",timeTransition:.3,headerTitle:null,fullScreen:!1,visible:!1,onClickOutside(){}},E.Header=b;var C=E},37215:function(e,t,i){i.d(t,{Z:function(){return c}});var l=i(2784);i(13980);var n=i(34490),a=i(99673),r=i(17781);let o={xsmall:{size:"xsmall",width:"15px",height:"15px",minWidth:"152px",maxWidth:"152px",fontSize:0},small:{size:"small",width:"17px",height:"17px",minWidth:"153px",maxWidth:"153px",fontSize:1},medium:{size:"medium",width:"20px",height:"18px",minWidth:"160px",maxWidth:"160px",fontSize:1}},s=(0,a.ZP)(r.Z).attrs(({variant:e,startIcon:t})=>({bg:"magabluLight",fontSize:0,startIcon:t,fontWeight:"medium",gridGap:1,borderRadius:8,mb:2,mt:2,color:"primary",justify:"start",padding:"2px 8px",minWidth:o[e].minWidth,maxWidth:o[e].maxWidth,textMaxWidth:"auto",size:o[e].size}))``;function d({variant:e}){return l.createElement(s,{variant:e,"data-testid":"productCard-international-tag",startIcon:l.createElement(n.JO$,{name:"Airplane",fill:"#0086FF",width:o[e].width,height:o[e].height})},"Compra Internacional")}d.defaultProps={variant:"xsmall"};var c=d},35306:function(e,t,i){i.d(t,{Z:function(){return w}});var l=i(7896),n=i(31461);i(13980);var a=i(2784),r=i(39146),o=i(87043),s=i(99673),d=i(55403);let c={default:s.iv`
    flex-direction: column;
    word-break: break-word;
    min-width: 280px;
  `,flex:s.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    ${(0,d.aK)("small")} {
      justify-content: left;
    }
  `,inline:s.iv`
    display: inline;
    font-size: inherit;
    line-height: normal;
  `},u={flex:s.iv`
    display: inline-block;
    padding: ${(0,d.R)("space.3")}px ${(0,d.R)("space.2")}px;
    ${(0,d.aK)("small")} {
      width: 150px;
      padding: unset;
    }
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.4")}px;
    font-size: inherit;
    & a {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
    }
  `},m={default:s.iv`
    color: ${e=>(0,d.uu)("base")(e)};
    padding-bottom: ${(0,d.R)("space.3")}px;
    line-height: normal;
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.3")}px;
    font-size: inherit;
  `},p=(0,s.ZP)(o.xu).attrs(e=>Object.assign({p:3,textAlign:"left",borderRadius:"default"},e))``,h=(0,s.ZP)(o.X6)`
  ${e=>m[e.variation]||m.default};
`,g=(0,s.ZP)(o.bo)`
  ${(0,d.aK)("small")} {
    display: none;
  }
`,f=s.ZP.ul`
  list-style-position: inside;
  display: flex;
  justify-content: space-around;
  ${e=>c[e.variation]||c.default};
`,x=(0,s.ZP)(o.xv).attrs(()=>({forwardedAs:"li",fontSize:2,color:"scratched",lineHeight:"big"}))`
  list-style-type: ${({hideListPoint:e})=>e?"none":"disc"};
  ${e=>u[e.variation]||u.default};
`,v=e=>{let{hideListPoint:t,limitListItems:i,list:s,handleClickLink:d,showAllItems:c,showMoreLabel:u,title:m,titleAs:v,typeList:w}=e,b=(0,n.Z)(e,["hideListPoint","limitListItems","list","handleClickLink","showAllItems","showMoreLabel","title","titleAs","typeList"]),[y,E]=(0,a.useState)(c),[Z,C]=(0,a.useState)(s.slice(0,i)),P=()=>{E(!0),C(s)};return a.createElement(p,(0,l.Z)({"data-testid":"text-list-container"},b,{variation:w}),m&&a.createElement(a.Fragment,null,a.createElement(h,{"data-testid":"text-list-title",as:v,variation:w},m),"inline"!==w&&a.createElement(g,{variation:w})),a.createElement(f,{"data-testid":"text-list-ul",variation:w},Z.map((e,l)=>a.createElement(x,{variation:w,hide:!y&&l>=i,key:l,"data-testid":"text-list-text",hideListPoint:t},a.createElement(r.g0,{data:e,handleClickLink:d})))),!y&&Z.length>=i&&a.createElement(a.Fragment,null,a.createElement(g,null),a.createElement(o.ck,{fontWeight:"medium",fontSize:1,color:"text.primary",fill:"text.primary",startIcon:"ChevronDownCircle",variant:"transparent",gap:1,centered:!0,onClick:P,"data-testid":"term-list-more"},u)))};v.defaultProps={hideListPoint:!1,limitListItems:20,list:[],handleClickLink(){},showAllItems:!0,showMoreLabel:"veja mais",title:null,titleAs:"h1",typeList:"default"};var w=v},41323:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(7896),n=i(31461),a=i(2784);i(13980);var r=i(1587),o=i(99673),s=i(55403),d=i(34490),c=i(19527);let u=(0,o.ZP)(c.Z).attrs(()=>({alignItems:"center",justifyContent:"space-between",backgroundColor:"background.primaryDark",padding:1}))``,m=(0,o.ZP)(d._Qn).attrs(e=>({color:(0,s.uu)("lightest")(e)}))``,p=e=>{let{text:t,defaultText:i,zipcode:o,state:s,city:d,onClick:c}=e,p=(0,n.Z)(e,["text","defaultText","zipcode","state","city","onClick"]);return a.createElement(u,(0,l.Z)({onClick:c,"data-testid":"container"},p),a.createElement(r.Z,{city:d,defaultText:i,state:s,text:t,zipcode:o,iconHeight:18,iconWidth:20}),a.createElement(m,null))};p.defaultProps={zipcode:void 0,state:void 0,city:void 0};var h=p},46514:function(e,t,i){i.d(t,{dO:function(){return l.Z},G4:function(){return $},jm:function(){return E},aw:function(){return O},pZ:function(){return I},f4:function(){return Q},DH:function(){return q},Il:function(){return G.Z},zT:function(){return eZ.Z},Qp:function(){return eb.Z},Ak:function(){return ew},Ym:function(){return ed},fP:function(){return ey.Z},u0:function(){return eE.Z},YE:function(){return d.Z}}),i(5530),i(92877);var l=i(36103);i(88586),i(18559),i(37331),i(28426),i(63486);var n=i(7896),a=i(31461),r=i(2784);i(13980);var o=i(1729),s=i(34490),d=i(70615),c=i(99554),u=i(99673),m=i(55403),p=i(84546),h=i(63825);let g=(0,u.ZP)(p.Z)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>(0,m.dF)("lighter")(e)};
  border-bottom: 1px solid ${e=>(0,m.dF)("darker")(e)};
  border-top: 1px solid ${e=>(0,m.dF)("darker")(e)};
  padding: 14px 16px;
`,f=u.ZP.div``,x=(0,u.ZP)(h.Z)``,v=(0,u.ZP)(h.Z)`
  margin: 4px 0;
  color: ${e=>(0,m.uu)("scratched")(e)};
`,w=u.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,m.dF)("darker")(e)};
  margin-bottom: 0.5em;
`,b=u.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,y=e=>{let{onClick:t,label:i,position:l,filterSelected:o,fullScreen:u,showFilterInput:m,onChangeFilterInput:p,onClearInput:h,children:y}=e,E=(0,a.Z)(e,["onClick","label","position","filterSelected","fullScreen","showFilterInput","onChangeFilterInput","onClearInput","children"]),[Z,C]=(0,r.useState)(!1),P=()=>{C(!0),t({label:i,position:l})};return r.createElement(r.Fragment,null,r.createElement(g,(0,n.Z)({},E,{onClick:P,"data-testid":"filter-item-container"}),r.createElement(f,null,r.createElement(x,{fontSize:1,"data-testid":"filter-item-container"},i),o&&r.createElement(v,{as:"string"!=typeof o?"div":"p",fontSize:0,"data-testid":"filter-item-selected"},o)),r.createElement(f,null,r.createElement(s.olP,{width:"12px",height:"12px"}))),r.createElement(f,null,r.createElement(d.Z,{direction:"right",visible:Z,onClickOutside:()=>C(!1),fullScreen:u},r.createElement(f,null,r.createElement(w,null,r.createElement(f,null,r.createElement(s.xhZ,{color:"#8c8c8c","data-testid":"close-filter-detail",role:"button",title:"Fechar filtro",onClick:()=>C(!1)})),r.createElement(b,null,r.createElement(x,{fontSize:1,textAlign:"center",fontWeight:"500"},i))),r.createElement("div",null,m&&r.createElement(c.Z,{m:"20px",onChange:p,onClearInput:h,label:i})),y))))};y.defaultProps={filterSelected:"",onClick:()=>({}),fullScreen:!1};var E=y,Z=i(41869);let C=(e="",t=[])=>t.filter(t=>{var i,l;return null==(i=t.label)?void 0:null==(l=i.toUpperCase())?void 0:l.includes(e.toUpperCase())}),P=e=>{let{fullScreen:t,label:i,position:l,filterSelected:s,items:d,showFilterInput:c,onItemClick:u}=e,m=(0,a.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[p,h]=(0,r.useState)((0,Z.Z)(d));(0,r.useEffect)(()=>(h((0,Z.Z)(d)),()=>h([])),[d]);let g=()=>{h(d)},f=e=>{h((0,Z.Z)(C(e.target.value,d)))};return r.createElement(E,(0,n.Z)({},m,{label:i,position:l,fullScreen:t,onChangeFilterInput:f,onClearInput:g,filterSelected:s,showFilterInput:c}),r.createElement("ul",null,p.map((e,t)=>r.createElement(o.Z,{item:e,key:(null==e?void 0:e.slug)||t,onClick:u}))))};P.defaultProps={label:"",filterSelected:"",items:[],showFilterInput:!1,onItemClick:()=>({})};var $=P,k=i(39146),S=i(82260);let z=e=>{let{fullScreen:t,label:i,position:l,filterSelected:o,items:s,onItemClick:d}=e,c=(0,a.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[u,m]=(0,r.useState)((0,S.Z)(s));return(0,r.useEffect)(()=>(m(s),()=>m({})),[s]),r.createElement(E,(0,n.Z)({position:l,label:i,fullScreen:t,filterSelected:o&&Object.keys(o).length?r.createElement(k.Cq,{min:0,max:5,score:null==o?void 0:o.value,label:null==o?void 0:o.hint,format:"label",fontSize:"14px",width:"20px",height:"20px"}):void 0},c),u.map((e,t)=>r.createElement("ul",{key:(null==e?void 0:e.slug)||t},r.createElement(k.L2,{onClick:d,item:e},r.createElement(k.Cq,{min:0,max:5,score:null==e?void 0:e.value,label:null==e?void 0:e.hint,format:"label",fontSize:"14px",width:"20px",height:"20px","data-testid":"review-item"})))))};z.defaultProps={filterSelected:[],items:[],showFilterInput:!1,onItemClick(){},onClick(){}};var I=z,D=i(71180);let R=e=>{let{fullScreen:t,label:i,position:l,onApply:o,min:s,max:d,selectedMin:c,selectedMax:u,item:m}=e,p=(0,a.Z)(e,["fullScreen","label","position","onApply","min","max","selectedMin","selectedMax","item"]);return r.createElement(E,(0,n.Z)({id:"filter-item-price-container",position:l,label:i,fullScreen:t,filterSelected:c||u?`${(0,D.oB)({value:c})} - ${(0,D.oB)({value:u})}`:void 0},p),r.createElement(k.MS,{min:s,max:d,initialMin:c,initialMax:u,onApply:o,item:m}))};R.defaultProps={onApply(){},onClick(){},item:{}};var O=R;i(66608),i(75057);var M=i(86349),A=i(68054),L=i(10200);let T=u.ZP.nav.attrs(e=>Object.assign({bg:"background.primary"},e))`
  text-align: left;

  ${m.$_}
`,j=u.ZP.ul.attrs(e=>Object.assign({my:0,pl:0},e))`
  display: flex;
  align-items: center;
  line-height: 45px;
  list-style: none;
  white-space: nowrap;
  justify-content: space-between;

  ${A.Dh}
`,W=(0,u.ZP)(L.Z).attrs(e=>Object.assign({color:"text.white",px:"10px",underlineOnHover:!1},e))`
  ${m.$_}
`,B=u.ZP.div`
  position: absolute;
  background-color: ${e=>(0,m.dF)("white")(e)};
  z-index: ${e=>(0,m.R)("zIndices.4")(e)};
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?1:0};
  pointer-events: ${e=>e.show?"auto":"none"};
  transition: opacity 0;
`,F=u.ZP.li`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: ${e=>e.selected?(0,m.R)("zIndices.1")(e):"auto"};
  background-color: ${e=>e.selected?(0,m.dF)("white")(e):"transparent"};

  border-top-left-radius: ${e=>e.selected?"6px":"0"};
  border-top-right-radius: ${e=>e.selected?"6px":"0"};

  &:hover path {
    fill: ${e=>e.colorOnHover||(0,m.uu)("base")(e)};
  }

  &:hover > div > a {
    color: ${e=>e.colorOnHover||(0,m.uu)("base")(e)};
  }

  ${e=>e.selected&&u.iv`
      & path {
        fill: ${e.colorOnHover||(0,m.uu)("base")(e)} !important;
      }

      > div > a {
        color: ${e.colorOnHover||(0,m.uu)("base")(e)} !important;
      }
    `}
`,H=u.ZP.div`
  background: rgba(0, 0, 0, 0.6);
  animation: ${M.Ji} 0.2s linear;

  position: fixed;
  z-index: ${e=>(0,m.R)("zIndices.0")(e)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${e=>e.show?u.iv`
          display: block;
        `:u.iv`
          display: none;
        `};
`;var V=i(19527),_=i(48919);let K=e=>{let{banner:t,subcategoriesList:i}=e||{},{component:l}=t||{},{props:n}=l||{},{static:a}=n||{},r=Boolean(null==a?void 0:a.path),o=Boolean(null==a?void 0:a.slot),s=Array.isArray(i)&&i.length>0;return r||o||s},N=({data:e,enableHoverDelay:t,onMenuItemClick:i,onHoverMenuItem:l,onClickMenuItem:n})=>{let{categoryList:a,specialLinks:o,externalLinks:d,allCategories:c}=e,{orderBy:u=[],list:m=[],show:p}=a,h=(0,M.IC)(m,u),g=h.slice(0,p||u.length),f=(0,r.useRef)(null),x={},v={},[w,b]=(0,r.useState)(0),[y,E]=(0,r.useState)(null),[Z,C]=(0,r.useState)(null);(0,M.O)(x,f,"inline-block");let P=e=>{var t;let i=null==(t=v[e])?void 0:t.current;if(i){i.style.display="block";let l=i.clientWidth,n=x[e].current.offsetLeft,a=f.current.offsetWidth+f.current.offsetLeft,r=n+l-a;b(r>=0?-r:0),i.style.display=null}},$=(e,i,l,n="mouse")=>{let a=K(i);a&&("open"===e&&t?(P(l),E(l),C(n)):"close"===e&&(E(null),C(null)))},k=(e,t,i)=>{if(e.currentTarget!==e.target)return;let l=K(t);if("Enter"===e.key){if(!l)return;$("open",t,i,"keyboard")}if("Escape"===e.key&&y===i){var n;e.preventDefault(),$("close",t,i),null!=(n=x[i])&&n.current&&x[i].current.focus()}},S=(e={},t)=>{let l=i=>{i.currentTarget.contains(i.relatedTarget)||$("close",e,t)};return r.createElement(B,{marginLeft:w,show:y===t,"data-testid":"nav-submenu",ref:v[t],onBlur:l,tabIndex:-1,onKeyDown(i){if("Escape"===i.key&&y===t){var l;i.preventDefault(),$("close",e,t),null!=(l=x[t])&&l.current&&x[t].current.focus()}}},r.createElement(_.Z,{data:e,onMenuItemClick(l,n,a){i(l,n,e.label,a),$("close",e,t)}}))},z=({menuType:e,index:t,menu:i,icon:a,chevronDown:o=!1})=>{let{color:d,label:c,url:u}=i,m=`${e}-item-${t}`;x[m]=(0,r.useRef)(null),v[m]=(0,r.useRef)(null);let p=K(i);return r.createElement(F,{tabIndex:0,selected:p&&y===m,"data-testid":"link-menu-item",key:m,colorOnHover:p?"":d,onMouseEnter(e){e.stopPropagation(),"keyboard"!==Z&&$("open",i,m,"mouse"),l(i)},onMouseLeave(){"mouse"===Z&&$("close",i,m)},onKeyDown:e=>k(e,i,m),ref:x[m]},r.createElement(V.Z,{mx:"2px",justifyContent:"center",alignItems:"center"},a&&r.createElement(s.JO$,{name:a,"data-testid":`link-icon-${t}`,color:"text.lightest"}),r.createElement(W,{href:u,tabIndex:0,onClick(e){e.stopPropagation(),n(c)},onKeyDown(e){("Enter"===e.key||13===e.keyCode)&&K(i)&&(e.preventDefault(),$("open",i,m,"keyboard"))}},c),o&&r.createElement(s.JO$,{name:"ChevronDown",color:"text.lightest"})),S(i,m))};return r.createElement(T,{"data-testid":"links-menu",ref:f},r.createElement(j,null,z({menuType:"main",index:0,icon:"Burger",menu:c,chevronDown:!0}),o.map((e,t)=>z({menuType:"special",index:t,menu:e})),g.map((e,t)=>z({menuType:"category",index:t,menu:e})),d.map((e,t)=>z({menuType:"external",index:t,menu:e,icon:e.id}))),r.createElement(H,{"data-testid":"menu-overlay",show:!!y}))};N.defaultProps={data:{categoryList:{},specialLinks:[],externalLinks:[],allCategories:{}},enableHoverDelay:!0};var q=N;i(99075),i(60857),i(56337);var G=i(43125);i(4720),i(98284);let U={height:"auto",fontSize:0,flexWrap:"no-wrap",mt:0,overflow:"auto",px:"9px",pb:"5px"},Y={height:"16px",fontSize:1,flexWrap:"wrap",mt:1,overflow:"hidden"},J=(0,u.ZP)(V.Z).attrs(e=>Object.assign({bg:"background.primary"},e.isMobile?Object.assign({},U):Object.assign({},Y),e))`
  white-space: pre;
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;

  a {
    font-size: inherit;
  }
`,X=e=>{let{data:t,onClick:i,isMobile:l,isRendered:o}=e,s=(0,a.Z)(e,["data","onClick","isMobile","isRendered"]),{links:d,title:c}=t;return(null==d?void 0:d.length)>=1&&c?r.createElement(J,(0,n.Z)({display:o?"flex":"none","data-testid":"header-links-list",isMobile:l},s,{color:"text.lightest"}),r.createElement(h.Z,{color:"text.lightest"},`${c}: `),null==d?void 0:d.map((e,t)=>{let l=0!==t&&r.createElement("span",null," | ");return r.createElement(r.Fragment,null,l,r.createElement(L.Z,{"data-testid":"header-link",key:e.value,href:e.href,onClick:t=>i(t,e),hover:!1,color:"text.lightest"},(0,M.kC)(e.value)))})):null};X.defaultProps={data:{links:[],title:""},onClick(){},isMobile:!1,isRendered:!0};var Q=X,ee=i(41544),et=i(87043);let ei=u.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    margin-top: 20px;
  }

  ${(0,m.aK)("large")} {
    flex-direction: row;
    width: 100%;

    > ul {
      width: ${({showScoreDesc:e})=>e?"50%":"100%"};
    }
  }
`,el=u.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(0,m.aK)("large")} {
    flex-direction: column-reverse;
    flex: 1;
  }
`,en=u.ZP.div`
  margin-left: 8px;

  > div {
    margin-left: -4px;
  }
`,ea=u.ZP.li`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  align-items: center;
  grid-gap: 8px;

  & > p:first-child {
    font-size: ${(0,m.R)("fontSizes.1")}px;
    line-height: ${(0,m.R)("lineHeights.display")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: ${e=>(0,m.R)("fontWeights.bold")(e)};
  }

  ${(0,m.aK)("large")} {
    grid-template-columns: 1fr 2fr auto;
  }
`,er=(0,u.ZP)(h.Z)`
  font-weight: ${e=>(0,m.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,m.R)("fontSizes.7")(e)}px;

  & > span {
    display: none;
  }

  ${(0,m.aK)("large")} {
    line-height: ${e=>(0,m.R)("lineHeights.fontSize")(e)};

    & > span {
      display: inline-block;
    }
  }
`,eo=(0,u.ZP)(h.Z)`
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,m.uu)("light")(e)};

  ${(0,m.aK)("large")} {
    margin-top: ${e=>(0,m.R)("space.3")(e)}px;
  }
`;function es({average:e,count:t,characteristics:i,showScoreDesc:l}){let n=t>1?`${t} avalia\xe7\xf5es`:`${t} avalia\xe7\xe3o`;return r.createElement(ei,{showScoreDesc:l},l&&r.createElement(el,null,r.createElement(er,{"data-testid":"stat-score"},r.createElement("span",null,"Nota:"),` ${e.toFixed(1)}`),r.createElement(en,null,r.createElement(k.Cq,{score:e,width:"20px",height:"20px"}),r.createElement(eo,{"data-testid":"stat-desc"},n))),r.createElement("ul",null,null==i?void 0:i.map(e=>r.createElement(ea,{key:e.label},r.createElement(h.Z,null,e.label),r.createElement(et.uk,{height:"8px",color:"#0086ff",value:e.value,max:5}),r.createElement(h.Z,null,e.value.toFixed(1))))))}es.defaultProps={average:0,count:0,characteristics:[],showScoreDesc:!0};var ed=es;let ec=u.ZP.div`
  ${(0,m.aK)("large")} {
    display: flex;
  }
`,eu=(0,u.ZP)(h.Z)`
  margin-top: 4px;
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)(e.bold?"fontWeights.medium":"fontWeights.regular")(e)};
  color: ${e=>(0,m.uu)("base")(e)};

  > span {
    color: ${e=>(0,m.uu)("lighter")(e)};
  }
`,em=(0,u.ZP)(h.Z)`
  margin-top: 12px;
  font-size: ${e=>(0,m.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.medium")(e)};
  color: ${e=>(0,m.uu)("base")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.display")(e)};
`,ep=(0,u.ZP)(h.Z)`
  margin: 12px 0;
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,m.uu)("scratched")(e)};
  line-height: ${e=>(0,m.R)("lineHeights.plus")(e)}px;
  text-align: justify;
`,eh=(0,u.ZP)(p.Z)`
  border-bottom: 3px solid ${e=>(0,m.kJ)("light")(e)};
  margin: 16px 0px;
  width: 100%;
`,eg=(0,u.ZP)(h.Z)`
  font-size: ${e=>(0,m.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,m.R)("fontWeights.medium")(e)};

  color: ${e=>e.reviewOK?(0,m.R)("baseColors.lima.base")(e):(0,m.R)("baseColors.vermillion.base")(e)};
`,ef=(0,u.ZP)(p.Z)`
  ${(0,m.aK)("large")} {
    width: 50%;
    flex: 1;
    margin-right: 32px;
  }
`,ex=(0,u.ZP)(p.Z)`
  ${(0,m.aK)("large")} {
    align-self: center;
    width: 50%;
  }
`;function ev({title:e,text:t,rating:i,recommended:l,user:n,date:a,characteristics:o,showScoreDesc:s}){let d=a&&(0,ee.Z)(new Date(a),new Date);return r.createElement(r.Fragment,null,r.createElement(ec,{"data-testid":"review-card"},r.createElement(ef,null,r.createElement(k.Cq,{score:i,width:"20px",height:"20px"}),r.createElement(eu,null,(null==n?void 0:n.name)||"An\xf4nimo"," - ",r.createElement("span",null,"H\xe1 ",d)),r.createElement(em,{bold:!0},e),r.createElement(ep,null,t),r.createElement(eg,{reviewOK:l},l?"Sim, eu recomendo esse produto":"N\xe3o, eu n\xe3o recomendo esse produto")),r.createElement(ex,null,r.createElement(ed,{characteristics:o,showScoreDesc:s}))),r.createElement(eh,null))}ev.defaultProps={user:{name:"An\xf4nimo"},showScoreDesc:!1};var ew=ev;i(4506);var eb=i(77576),ey=i(30143),eE=i(2334);i(75335),i(35306),i(41323),i(90713),i(37215);var eZ=i(99970);i(3018)}}]);
//# sourceMappingURL=2307-96933115822c9b4a.js.map