"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9551],{72848:function(e,t,o){o.d(t,{Z:function(){return A}});var a=o(31461),n=o(7896),i=o(2784);o(13980);var r=o(34490),l=o(12468),s=o(87043),d=o(99673),c=o(68054),u=o(55403),m=o(27439),p=o(46514);let x=d.iv`
  background-image: linear-gradient(
    to right,
    #fcd000 0,
    #ff8a00 17%,
    #ff253a 34%,
    #ff37a8 51%,
    #a400e1 67%,
    #0086ff 83%,
    #00d604 100%
  );
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: top;
`,g=d.iv`
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,u.uu)("base")(e)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,f={vertical:d.iv`
    display: block;
  `,horizontal:d.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex-basis: 30%;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},h=(0,d.ZP)(m.ZP)`
  ${e=>e.isMagalu&&x}
  background-color: ${e=>(0,u.ow)("background.lighter")(e)};
  padding: 1px 10px;
  margin: 0 2px 10px;
  border-radius: 6px;
  box-shadow: ${e=>(0,u.R)("elevations.5")(e)};
  ${({displayMode:e})=>e&&f[e]}
`,b=d.ZP.h2`
  ${g}
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.medium")(e)};
  margin: 10px 12px;
`,v=d.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5px 5px 12px;
  & p {
    height: auto;
  }
`,E={vertical:d.iv`
    display: block;
  `,horizontal:d.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & svg {
      ${e=>e.isMagalu&&d.iv`
          width: 100px;
          height: auto;
        `}
    }
    & > div {
      ${({isMagalu:e})=>e&&d.iv`
          flex-grow: 1;
        `}
      flex-basis: 30%;
      flex-grow: 2;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},C=d.ZP.div`
  border-radius: 6px;
  & > div {
    margin: 8px 5px 12px;
  }
  ${({displayMode:e})=>e&&E[e]}
`,S=d.ZP.div`
  border-radius: ${({exhibition:e})=>"highlight"===e&&"4px"};
  overflow: hidden;
  ${c.Dh}
  ${c.$_}
  ${c.bK}
  ${c.Cg}
`,k=(0,d.ZP)(r.ZGh).attrs(e=>({color:(0,u.ow)("base")(e),width:80,height:40,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 5px;
`,w={horizontal:d.iv`
    & svg + p {
      margin-right: ${e=>(0,u.R)("fontSizes.1")(e)}px;
    }
  `},P=(0,d.ZP)(p.u0)`
  ${({displayMode:e})=>e&&w[e]}
`;var y=o(39146);let Z=e=>(null==e?void 0:e.id)===l.ig,$=({displayMode:e,offer:t,onClick:o,showSellerInDialog:a,disableSellerClick:l,onSellerClick:d,buttons:c,modal:u})=>{let{seller:m,price:x,deliveryTypes:g,error:f}=t,b=Z(m),{content:E}=u;return i.createElement(h,{isMagalu:b,displayMode:e,"data-testid":"buybox-card-container",hideLinkBorder:!1,as:"div"},i.createElement(C,{isMagalu:b,displayMode:e,"data-testid":"buybox-card-content"},b&&"vertical"===e&&i.createElement(k,{title:"Logo magalu","data-testid":"magalogo"}),i.createElement(v,null,i.createElement(y.tA,(0,n.Z)({display:"galery",isList:!0,showDiscount:!0},x))),i.createElement(v,null,m&&i.createElement(p.fP,{showDialog:a,disableSellerClick:l,onOffersClick:d,seller:m,modal:Object.assign({},u,{content:u.content&&i.createElement(E,{seller:m})})}))),g&&i.createElement(P,{displayMode:e,items:g}),i.createElement(s.zx,{"data-testid":"buybox-button",onClick:e=>o(e,t),color:"secondary",startIcon:i.createElement(r.tuM,{width:32,height:32}),m:"10px 0",disabled:Boolean(f),full:!0},f?c.buttonError:c.buttonOk))},R=e=>{let{data:t,disableSellerClick:o,onClick:n,showSellerInDialog:r,onSellerClick:l,textButtons:s,displayMode:d,modal:c}=e,u=(0,a.Z)(e,["data","disableSellerClick","onClick","showSellerInDialog","onSellerClick","textButtons","displayMode","modal"]),{buttonError:m="N\xe3o dispon\xedvel",buttonOk:p="Comprar agora",title:x="Escolha a melhor oferta"}=s;return i.createElement(S,u,i.createElement(b,{"data-testid":"buybox-title"},x),t.map((e,t)=>i.createElement($,{displayMode:d,key:t,offer:e,disableSellerClick:o,onSellerClick:l,onClick:n,buttons:{buttonError:m,buttonOk:p},showSellerInDialog:r,modal:c})))};R.defaultProps={displayMode:"vertical",data:[],onClick(){},showSellerInDialog:!1,onSellerClick(){},disableSellerClick:!1,textButtons:{},modal:{}};var A=R},15471:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(7896),n=o(31461),i=o(2784),r=o(99673),l=o(55403),s=o(87043),d=o(52337);let c={warning:"#fed34e",error:"#E41C41"},u={warning:"#1E2428E5"},m=e=>u[e.type]||(0,l.dF)("lighter")(e),p=e=>c[e.type]||(0,l.dF)("primary")(e),x=(0,r.ZP)(s.kC)`
  flex-direction: column;
  border-radius: 8px;
  gap: 24px;
  background-color: ${(0,l.R)("palette.background.lighter")};
`,g=(0,r.ZP)(x)`
  width: 100%;
  margin-top: ${({marginTop:e})=>e||"8px"};
  ${({withBorder:e})=>e&&r.iv`
      border: 1px solid #d3dadd;
    `}
`,f=(0,r.ZP)(x)`
  width: 100%;

  svg {
    min-width: 24px;
  }
`,h=(0,r.ZP)(d.Z).attrs(e=>Object.assign({styleContainer:{backgroundColor:p(e),borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},styleMessage:{fontSize:`${(0,l.R)("fontSizes.")(e)}px`,fontWeight:(0,l.R)("fontWeights.regular")(e),lineHeight:`${(0,l.R)("lineHeights.tall")(e)}px`,color:m(e),padding:"15px 24px"}},e))``,b=(0,r.ZP)(s.X6)`
  font-weight: ${(0,l.R)("fontWeights.bold")};
  font-size: ${(0,l.R)("fontSizes.2")}px;
`,v=(0,r.ZP)(s.kC)`
  flex-direction: ${({isRow:e})=>e?"row":"column"};
  width: 100%;
  gap: 24px;
`,E=(0,r.ZP)(s.kC)`
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  width: 100%;

  ${({isAlert:e})=>e&&r.iv`
      padding-top: 0;
    `}
`;var C=o(13980);let S={error:"ErrorOutline",info:"CheckCircle",warning:"WarningOutline"},k={type:"",message:""};C.string,C.node,(0,C.shape)({message:C.string,type:C.string}),C.bool;let w=({message:e,type:t})=>{let o=S[t];return e&&o?{message:e,type:t,icon:o}:null},P=e=>e?i.createElement(f,{"data-testid":"alert-content"},i.createElement(h,{message:{text:e.message},icon:e.icon,type:e.type})):null,y=e=>{let{title:t,children:o,alertContent:r,withBorder:l}=e,s=(0,n.Z)(e,["title","children","alertContent","withBorder"]),d=w(r||k);return t||o?i.createElement(g,(0,a.Z)({"data-testid":"card",withBorder:l},s),P(d),i.createElement(E,{isAlert:Boolean(d)},t&&i.createElement(b,{"data-testid":"card-title"},t),o&&i.createElement(v,{"data-testid":"card-content",isRow:s.isRow},o))):null};y.defaultProps={title:"",children:null,alertContent:k,withBorder:!1};var Z=y},33252:function(e,t,o){o.d(t,{Z:function(){return E}});var a=o(7896),n=o(2784);o(13980);var i=o(34490),r=o(99673),l=o(55403);let s=r.ZP.div`
  display: flex;
  align-items: center;
`,d=r.ZP.p`
  margin-right: 5px;
  color: ${e=>(0,l.uu)("scratched")(e)};
`,c=r.ZP.div`
  background-color: ${e=>(0,l.dF)("lighter")(e)};
  color: ${e=>(0,l.uu)("lightest")(e)};
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${e=>(0,l.R)("fontSizes.0")(e)}px;
  padding: 25px 0;
  border-bottom: 1px solid ${e=>(0,l.kJ)("light")(e)};
`,u=r.ZP.span`
  padding: ${e=>(0,l.R)("fontSizes.3")(e)}px;
  cursor: pointer;
  font-size: ${e=>(0,l.R)("fontSizes.1")(e)}px;
  fill: ${e=>(0,l.uu)("scratched")(e)};
`,m=(0,r.ZP)(u)`
  color: ${e=>(0,l.uu)("base")(e)};
`,p=(0,r.ZP)(u)`
  color: ${e=>e.count>=1?(0,l.R)("palette.primary.base"):(0,l.uu)("light")};
`,x="Filtrar";var g=o(84022),f=o(46514),h=o(78012);let b=e=>(t,o)=>n.createElement(h.Z.Item,(0,a.Z)({},t,{key:t.id||o,href:t.path||t.href,onClick:(t.path||t.href)&&(o=>{e(o,t)}),fontWeight:t.path||t.href?void 0:"bold",as:(t.path||t.href)&&"a",startIcon:t.icon,endIcon:!t.icon&&(t.path||t.href)&&"ChevronRight"}),t.label),v=({onOpen:e,onClose:t,onClear:o,onClickOutside:a,onShowDetail:r,onItemClick:l,visible:v,filters:E,count:C})=>{let{attributeFilter:S,reviewFilter:k,categoryFilter:w,priceFilter:P}=l,y=({slug:e,values:t,label:o,position:a,filterSelected:i,showFilterInput:l})=>n.createElement(f.G4,{key:e,items:t,label:o,position:a,onItemClick:S,filterSelected:i,showFilterInput:l,fullScreen:!0,onClick:r}),Z=({position:e,label:t,values:o})=>n.createElement(f.jm,{label:t,position:e,fullScreen:!0,onClick:r},n.createElement(h.Z,null,null==o?void 0:o.map(b(w)))),$=({slug:e,values:t,label:o,position:a,filterSelected:i,showFilterInput:l})=>n.createElement(f.pZ,{position:a,key:e,items:t,label:o,onItemClick:k,filterSelected:i,showFilterInput:l,fullScreen:!0,onClick:r}),R=e=>{let{position:t,slug:o,label:a,min:i,max:l,selectedMin:s,selectedMax:d}=e;return n.createElement(f.aw,{position:t,key:o,label:a,onApply:P,fullScreen:!0,onClick:r,min:i,max:l,selectedMin:s,selectedMax:d,item:e})},A={multiple:y,hierarchical:Z,unique:$,priceRange:R};return n.createElement(n.Fragment,null,n.createElement(s,{onClick:e,"data-testid":"filter-menu-button"},n.createElement(g.Z,{count:C,mr:"4px"}),n.createElement(d,null,x)),n.createElement(f.YE,{direction:"right",visible:v,onClickOutside:a},n.createElement(c,null,n.createElement(u,{onClick:t,role:"button",tabIndex:"0","data-testid":"close-menu"},n.createElement(i.x8P,{height:"20"})),n.createElement(m,null,x),n.createElement(p,{onClick:C>=1?o:null,onKeyDown:C>=1?o:null,role:"button",tabIndex:"-1","data-testid":"clear-filters",count:C},"Limpar tudo")),n.createElement(n.Fragment,null,null!=E&&E.length?E.map(e=>{let{componentType:t}=e;return A[t](e)}):null)))};v.defaultProps={onClear(){},onClose(){},onOpen(){},onClickOutside(){},visible:!1,filters:{attributeFilters:[],reviewFilter:{}},count:0,onItemClick:{attributeFilter:()=>({}),reviewFilter:()=>({})},onShowDetail(){}};var E=v},99852:function(e,t,o){o.d(t,{Z:function(){return eC}});var a=o(7896),n=o(31461),i=o(2784);o(13980);var r=o(34490);let l=`Servi\xe7os`,s="Roubo e Furto",d=`Prote\xe7\xe3o ${s}`,c="Garantia Estendida Original Ampliada",u="Formas de pagamentos",m=[{id:"rs1",title:"SEGURO PROTE\xc7\xc3O ROUBO E FURTO QUALIFICADO COM QUEBRA ACIDENTAL",content:[{text:[{content:"As Condi\xe7\xf5es Gerais desse seguro poder\xe3o ser consultadas a qualquer momento, atrav\xe9s do site "}]},{link:"http://condicoesgerais.bnpparibascardif.com.br/rf",text:"condicoesgerais.bnpparibascardif.com.br/rf"}]},{id:"rs11",title:"CARACTER\xcdSTICAS DO SEGURO",content:[{text:[{content:"Garantir a reposi\xe7\xe3o ou o reparo do bem segurado."}]}]},{id:"rs2",title:"TIPO DE COBERTURA",content:[{text:[{content:"Roubo, Furto Qualificado e Quebra Acidental de Aparelhos M\xf3veis"}]}]},{id:"rs3",title:"SINISTROS",content:[{text:[{content:"Em caso de sinistro, o Segurado dever\xe1 comunicar a ocorr\xeancia do defeito \xe0 Seguradora, atrav\xe9s do site "}]},{link:"https://luizaseg.acioneseuseguro.com.br/",text:"https://luizaseg.acioneseuseguro.com.br/"},{text:[{content:", ou entrar em contato com a Central de Atendimento atrav\xe9s do telefone informado abaixo."}]},{text:[{content:"Fica estabelecido o prazo de at\xe9 30 (trinta) dias para o pagamento de indeniza\xe7\xe3o devida pelo presente Contrato de Seguro, contados a partir da entrega de todos os documentos b\xe1sicos previstos. Caso haja solicita\xe7\xe3o de nova documenta\xe7\xe3o e/ou informa\xe7\xe3o complementar, o prazo para pagamento do sinistro ser\xe1 suspenso, voltando a correr a partir do dia \xfatil subsequente \xe0quele em que forem completamente atendidas as exig\xeancias."}]}]},{id:"rs4",title:"SORTEIO DE CAPITALIZA\xc7\xc3O",content:[{text:[{content:"Haver\xe1 sorteio Mensal durante 3 meses, no valor liquido de R$ 5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do site: www.regulamentos.bnpparibascardif.com.br"}]},{text:[{content:"Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidoria Icatu Seguros: 0800 286 0047. Modalidade Incentivo. “\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art.3\xba, I do C\xf3digo Civil "}]},{link:"http://www.icatuseguros.com.br",text:"http://www.icatuseguros.com.br"},{text:[{content:". \xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil."}]}]},{id:"rs5",title:"EXCLUS\xd5ES GERAIS",content:[{text:[{content:"Todos os riscos exclu\xeddos que constam no bilhete de seguro do bem segurado, tamb\xe9m estar\xe3o automaticamente exclu\xeddos deste seguro. Os danos causados por atos il\xedcitos dolosos ou por culpa grave equipar\xe1vel ao dolo, praticados pelo segurado, pelo benefici\xe1rio ou representante legal de um ou de outro, estar\xe3o exclu\xeddos."}]}]},{id:"rs6",title:"INFORMA\xc7\xd5ES ADICIONAIS",content:[{text:[{content:"A contrata\xe7\xe3o do Seguro \xe9 opcional e \xe9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro; O Segurado dever\xe1 guardar o certificado de garantia do fabricante; O Segurado poder\xe1 desistir do seguro no prazo de 7 dias corridos a contar da emiss\xe3o do bilhete, atrav\xe9s da Central de Atendimento informada neste documento ou representante de seguro; Caso haja a necessidade de reparo no per\xedodo de garantia do fabricante, dever\xe1 entrar em contato com o fabricante. N\xfamero de atendimento do fabricante vide manual de garantia do fabricante."}]}]},{id:"rs7",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"SAC (cancelamento, reclama\xe7\xf5es e informa\xe7\xf5es sobre seguro): 0800 545 4040. "},{content:"Abertura e acompanhamento de sinistro: 3003 4288 (Capitais e regi\xf5es metropolitanas) ou 0800 200 0940 (demais localidades). "},{content:"Deficiente auditivo:0800 727 2482 (atendimento todos os dias, 24h). Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br."}]}]},{id:"rs8",title:"SEGURADORA",content:[{text:[{content:"Cardif do Brasil Seguros e Garantias S/A, CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, N\xba1909, Torre Sul, 8\xba andar, S\xe3o Paulo/SP, CEP: 04543-907 ou https://www.bnpparibascardif.com.br/"}]}]},{id:"rs9",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706."}]}]},{id:"rs10",title:"DISPOSI\xc7\xd5ES GERAIS",content:[{text:[{content:'Ouvidoria - Finalidade e Forma de Utiliza\xe7\xe3o: 0800 727 2482 ou https://www.luizaseg.com.br/. “O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep”. “A ades\xe3o ao seguro \xe9 opcional”. “O segurado poder\xe1 consultar a situa\xe7\xe3o cadastral de seu corretor de seguros, no site www.susep.gov.br, por meio do n\xfamero de seu registro na SUSEP, nome completo, CNPJ ou CPF”. ”A aceita\xe7\xe3o do seguro estar\xe1 sujeita \xe0 an\xe1lise do risco”. “As condi\xe7\xf5es contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o n\xfamero de processo constante da ap\xf3lice/proposta e poder\xe3o ser consultadas no endere\xe7o eletr\xf4nico www.susep.gov.br”. “Em atendimento \xe0 Lei 12.741/12 informamos que incidem as al\xedquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os pr\xeamios de seguros/as contribui\xe7\xf5es a planos de car\xe1ter previdenci\xe1rio/os pagamentos destinados a planos de capitaliza\xe7\xe3o, deduzidos do estabelecido em legisla\xe7\xe3o espec\xedfica”. “O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep”. "\xc9 dever do intermedi\xe1rio disponibilizar ao cliente formal e previamente \xe0 contrata\xe7\xe3o do seguro, o montante de sua remunera\xe7\xe3o e o pr\xeamio do seguro. A distribui\xe7\xe3o dos seguros por meio do Magazine Luiza \xe9 realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como ser\xe3o mantidos em seguran\xe7a: acesse https://www.luizaseg.com.br/lgpd.php;". A FRAUDE CONTRA SEGUROS \xc9 CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP: 0800 021 8484 - Dias \xfateis das 9:30 \xe0s 17:00 Por meio do Acordo Operacional celebrado entre as empresas acima (“ SEGURADORA”) e (“REPRESENTANTE”), a SEGURADORA confere a REPRESENTANTE poderes para: Realizar a oferta e promo\xe7\xe3o de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Orientar e assistir aos corretores de seguros e seus prepostos, se for o caso; Dar apoio log\xedstico e administrativo \xe0 SEGURADORA, visando a manuten\xe7\xe3o dos contratos de seguros e outros servi\xe7os, inclusive, controle e processamento de dados das opera\xe7\xf5es pactuadas em nome da SEGURADORA.'}]}]}],p=[{id:"ce1",title:"SEGURO DE GARANTIA ESTENDIDA ORIGINAL AMPLIADA",content:[{text:[{content:"Processo Susep: 15414.900275/2014-64, garantido pela Cardif do Brasil. Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, No 1909, Torre Sul, 8o andar, S\xe3o Paulo/SP, CEP: 04543-907 ou "}]},{link:"http://www.cardif.com.br",text:"www.cardif.com.br"}]},{id:"ce2",title:"CARACTER\xcdSTICAS DO SEGURO",content:[{text:[{content:"Este seguro de Garantia Estendida Original Ampliada tem por objetivo, caso o segurado queira e possua o pagamento do seguro em dia, al\xe9m de estender a garantia de  f\xe1brica do bem, contemplar as coberturas adicionais de Danos El\xe9tricos e Oxida\xe7\xe3o."}]}]},{id:"ce3",title:"TIPO DE COBERTURA",content:[{text:[{content:"Extens\xe3o de Garantia Original."}]}]},{id:"ce4",title:"SEGURADORA",content:[{text:[{content:"Cardif do Brasil Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84 com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, N\xba1909, Torre Sul, 8\xba andar, S\xe3o Paulo/SP, CEP: 04543-907 ou www.cardif.com.br."}]}]},{id:"ce5",title:"REPRESENTANTE DE SEGURO",content:[{text:[{content:"Magazine Luiza S.A., CNPJ: 47.960.950/0001-21."}]}]},{id:"ce6",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previd\xeancia Ltda, CNPJ: 56.170.061/0001-51 e Registro SUSEP:202069682."}]}]},{id:"ce7",title:"SORTEIO DE CAPITALIZA\xc7\xc3O",content:[{text:[{content:"Haver\xe1 sorteio mensal durante 3 meses, no valor l\xedquido de R$5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do "}]},{link:"http://siteregulamentos.bnpparibascardif.com.br",text:"siteregulamentos.bnpparibascardif.com.br."},{text:[{content:`Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidora Icatu Seguros: 0800 286 0047, Modalidade Incentivo. "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3\xb0 I do C\xf3digo Civil".http://www.icatuseguros.com.br\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil.`}]}]},{id:"ce8",title:"EXCLUS\xd5ES GERAIS: SITUA\xc7\xd5ES QUE N\xc3O SER\xc3O ATENDIDAS PELO SEU SEGURO.",content:[{text:[{content:`N\xe3o estar\xe1 coberto tudo que estiver previsto ou n\xe3o abrangido no Certificado de Garantia e/ou no Manual de Garantia de f\xe1brica do bem, inclusive aquilo que deixar de ser garantido e/ou deter a cobertura oferecida durante prazo de garantia do fabricante,exceto os defeitos decorrentes de Danos El\xe9tricos Oxida\xe7\xe3o. Al\xe9m dos riscos exclu\xeddos descritos acima, tamb\xe9m s\xe3o exclu\xeddos deste seguro os atos il\xedcitos dolosos ou por culpa grave equipar\xe1vel ao dolo, que agravem intencionalmente o risco, podendo ser considerados fraude, ou m\xe1-f\xe9,por a\xe7\xe3o ou omiss\xe3o, praticados pelo segurado, pelo benefici\xe1rio ou pelo representante de um ou de outro e,caso o segurado seja uma pessoa jur\xeddica, essas exclus\xf5es aplicam-se tamb\xe9m aos s\xf3cios controladores, aos seus dirigentes e administradores legais, aos benefici\xe1rios e aos seus respectivos representantes legais. `}]}]},{id:"ce9",title:"EXCLUS\xd5ES ESPEC\xcdFICAS: SITUA\xc7\xd5ES POR COBERTURA CONTRATADA QUE N\xc3O SER\xc3O ATENDIDAS  PELO SEU SEGURO. ",content:[{text:[{content:"Danos El\xe9tricos"},{content:"a)Fus\xedveis, resist\xeancias de aquecimento, l\xe2mpadas de qualquer tipo, tubos cat\xf3dicos de equipamentos eletr\xf4nicos e quaisquer outros componentes, que,por sua natureza,necessitem de trocas peri\xf3dicas."},{content:"b)Perdas,danos ou avarias ao bem segurado por combust\xe3o e/ou aquecimento espont\xe2neo;"},{content:"c)Recomposi\xe7\xe3o de registros e documentos, arquivos, softwares de qualquer natureza, bem como seus perif\xe9ricos, configura\xe7\xf5es, formata\xe7\xf5es, backups, disquetes etc. "},{content:"d) Danos causados a programas de inform\xe1tica qualquer tipo,ficando entendido,no entanto,que nos casos de perda total de microcomputadores em virtude de evento coberto, os programas que acompanharam o equipamento quando da aquisi\xe7\xe3o estar\xe3o garantidos,exceto os programas opcionalmente adquiridos."},{content:"d) Danos causados a programas de inform\xe1tica qualquer tipo,ficando entendido,no entanto,que nos casos de perda total de microcomputadores em virtude de evento coberto, os programas que acompanharam o equipamento quando da aquisi\xe7\xe3o estar\xe3o garantidos,exceto os programas opcionalmente adquiridos."},{content:"Oxida\xe7\xe3o:"},{content:"a)Qualquer defeito coberto provocado intencionalmente;"},{content:"b)Partes,pe\xe7as e componentes que s\xe3o consum\xedveis ou sofram desgaste natural, independente da origem do problema; "},{content:"c) Produto cujo n\xfamero de identifica\xe7\xe3o, do chassi ou de s\xe9rie tenha sido removido ou adulterado;"},{content:"d) Manchas, desgastes ou de outras falhas consequentes da aplica\xe7\xe3o de produtos impermeabilizantes; "},{content:"e) Danos est\xe9ticos como riscos, quebras, trincas, amassamentos, arranhaduras etc.), mesmo decorrentes de Danos El\xe9tricos."}]}]},{id:"ce10",title:"SINISTROS",content:[{text:[{content:`Em caso de sinistro, o Segurado dever\xe1 comunicar a ocorr\xeancia do defeito \xe0 Seguradora, por meio do site www.acioneseuseguro.com.br, ou entrar em contato com  a Central de Atendimento por meio do telefone informado abaixo. Nesta ocasi\xe3o, o segurado receber\xe1 um n\xfamero de sinistro, que dever\xe1 ser informado \xe0 assist\xeancia  t\xe9cnica indicada.A seguradora ter\xe1 at\xe9 30 dias corridos para concluir o atendimento, a contar da entrega do bem segurado \xe0 assist\xeancia t\xe9cnica pelo segurado, acompanhado do Bilhete de Seguro, Documento Fiscal de Aquisi\xe7\xe3o do Bem Segurado, CPF ou outro documento de identifica\xe7\xe3o.Se o bem segurado apresentar  algum defeito funcional (chamado daqui por diante apenas de “defeito’’) durante a vig\xeancia do seguro, a indeniza\xe7\xe3o se dar\xe1 por meio do reparo do bem, que ser\xe1 feito pela  assist\xeancia t\xe9cnica. O seguro cobre o valor das pe\xe7as de reposi\xe7\xe3o e o custo da m\xe3o-de-obra. Caso o bem n\xe3o possa ser consertado, ser\xe1 feita a sua reposi\xe7\xe3o por outro  igual ou com funcionalidades semelhantes, que pode ser novo ou recondicionado. Se n\xe3o for poss\xedvel nem o reparo e nem a reposi\xe7\xe3o do bem, o segurado receber\xe1 o  pagamento do valor que pagou por ele, de acordo com a nota fiscal de compra. `}]}]},{id:"ce11",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"Central de atendimento: SAC (Cancelamentos,reclama\xe7\xf5es e informa\xe7\xf5es do seguro): 0800 545 4040. Abertura e Acompanhamento de Sinistros: 3003 4288 (Capitais e regi\xf5es metropolitanas) ou 0800 200 0940 (Demais localidades). Deficiente Auditivo: 0800 725 0645,atendimento todos os dias, 24 horas. Ouvidoria Cardif: 0800 727 2482, atendimento em dias \xfateis, das 9h \xe0s 18h (hor\xe1rio de Bras\xedlia) exceto feriados, ou ouvidoria.bnpparibascardif.com.br"}]}]},{id:"ce12",title:"DISPOSI\xc7\xd5ES GERAIS",content:[{text:[{content:`Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br e tamb\xe9m www.consumidor.gov.br. A contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago. \xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro. A comercializa\xe7\xe3o de seguros \xe9 fiscalizada pela SUSEP. www.susep.gov.br – 0800 021 8484. O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep. \xc9 dever do intermedi\xe1rio disponibilizar ao cliente formal e previamente \xe0 contrata\xe7\xe3o do seguro, o montante de sua remunera\xe7\xe3o e o pr\xeamio do seguro. A distribui\xe7\xe3o dos seguros por meio do Magazine Luiza \xe9 realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como ser\xe3o mantidos em seguran\xe7a: acesse bnpparibascardif.com.br/lei-geal-de-protecao-de-dados. O segurado poder\xe1 consultar a situa\xe7\xe3o cadastral de seu corretor de seguros, no site www.susep.gov.br por meio do n\xfamero de seu registro na SUSEP, nome completo, CNPJ ou CPF. O segurado dever\xe1 guardar o certificado de garantia do fabricante. Caso haja a necessidade de reparo no per\xedodo de garantia do fabricante, dever\xe1 entrar em contato com o fabricante. N\xfamero de atendimento do fabricante vide manual de garantia do fabricante. As condi\xe7\xf5es contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o n\xfamero de processo constante da ap\xf3lice/proposta e poder\xe3o ser consultadas no endere\xe7o eletr\xf4nico www.susep.gov.br. Em atendimento \xe0 Lei 12.741/12 informamos que incidem as al\xedquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os pr\xeamios de seguros/as contribui\xe7\xf5es a planos de car\xe1ter previdenci\xe1rio/os pagamentos destinados a planos de capitaliza\xe7\xe3o, deduzidos do estabelecido em legisla\xe7\xe3o espec\xedfica. A FRAUDE CONTRA SEGUROS \xc9 CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP:0800 021 8484 - Dias \xfateis das 9:30 \xe0s 17:00. Por meio do Acordo Operacional celebrado entre as empresas acima ("SEGURADORA") e ("REPRESENTANTE"), a SEGURADORA confere a REPRESENTANTE poderes para: Realizar a oferta e promo\xe7\xe3o de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Recepcionar propostas de seguros e/ou emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Recepcionar propostas de seguros e/ou emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA;`}]}]}],x=`${c}`,g=`Seguro ${s} Qualificado`,f=`Processo Susep: 15414.900275/2014-64, garantido pela Cardif do Brasil. Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, No 1909, Torre Sul, 8o andar, S\xe3o Paulo/SP, CEP: 04543-907 ou www.cardif.com.br. Orientamos a leitura das condi\xe7\xf5es gerais no link https://bnpparibascardif.com.br/condicoes-gerais. REPRESENTANTE DE SEGURO Magazine Luiza S.A., CNPJ: 47.960.950/0001-21. CORRETORA
  Viotto Corretora de Seguros e Previd\xeancia Ltda, CNPJ: 56.170.061/0001-51 e Registro SUSEP:202069682.
  A contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago. \xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro.
  Haver\xe1 sorteio mensal durante 3 meses, no valor l\xedquido de R$5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do siteregulamentos.bnpparibascardif.com.br. Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidora Icatu Seguros: 0800 286 0047, Modalidade Incentivo. "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3\xb0 I do C\xf3digo Civil".http://www.icatuseguros.com.br.
  \xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil.  A comercializa\xe7\xe3o de seguros \xe9 fiscalizada pela SUSEP. www.susep.gov.br – 0800 021 8484.  O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep. Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br e tamb\xe9m www.consumidor.gov.br.`,h=`Ao clicar em contratar servi\xe7o e ir para sacola voc\xea aceita as condi\xe7\xf5es do seguro`,b=`${s} e Forma de pagamento`,v=[{id:"pw1",title:"Termo de Autoriza\xe7\xe3o de cobran\xe7a de Pr\xeamio de Seguro",content:[{text:[{content:"Eu, proponente "},{content:"{description} "},{content:"autorizo que o pagamento do pr\xeamio de seguro no valor de "},{content:"{totalPrice} ",bold:!0},{content:"seja realizado em conjunto com o pagamento do(s) produto(s)/servi\xe7o(s) ora adquirido(s)."}]}]},{id:"pw2",content:[{text:[{content:"In\xedcio e T\xe9rmino da vig\xeancia do seguro: ",bold:!0},{content:"Data especificada no Bilhete de Seguro que voc\xea receber\xe1 ap\xf3s a conclus\xe3o da compra, quando o Termo estar\xe1 dispon\xedvel com os dados completos, refletindo sua op\xe7\xe3o pr\xe9via e autoriza\xe7\xe3o de cobran\xe7a de pr\xeamio."}]}]},{id:"pw3",content:[{text:[{content:"Declaro ter pr\xe9via ci\xeancia das informa\xe7\xf5es m\xednimas obrigat\xf3rias disponibilizadas antes da contrata\xe7\xe3o do seguro acompanhadas da \xedntegra das Condi\xe7\xf5es Gerais do presente Seguro e tenho conhecimento que tamb\xe9m poderei consult\xe1-la a qualquer momento atrav\xe9s do site www.luizaseg.com.br. Declaro tamb\xe9m que foram integralmente cumpridas as regras de conduta que devem ser praticadas pelos corretores de seguros e demais intermedi\xe1rios no relacionamento com o cliente, previstas na legisla\xe7\xe3o vigente."}]}]},{id:"pw4",content:[{text:[{content:"Notas :",bold:!0},{content:"O segurado poder\xe1 desistir do seguro contratado no prazo de 7 (sete) dias corridos a contar da assinatura da proposta, no caso de contrata\xe7\xe3o por ap\xf3lice individual, ou da emiss\xe3o do bilhete, no caso de contrata\xe7\xe3o por bilhete, ou do efetivo pagamento do pr\xeamio, o que ocorrer por \xfaltimo. No caso de pagamento de pr\xeamio fracionado, considera-se o pagamento da primeira parcela como o efetivo pagamento."}]}]},{id:"pw5",financialService:"extendedWarranty",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. C\xf3digo Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{extendedWarrantyPercentage} - "},{content:"{extendedWarrantyAmount} "},{content:'"A Magazine Luiza possui participa\xe7\xe3o de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remunera\xe7\xe3o: 0,03%.'}]}]},{id:"pw6",financialService:"certainExchange",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. C\xf3digo Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{certainExchangePercentage} - "},{content:"{certainExchangeAmount} "},{content:'"A Magazine Luiza possui participa\xe7\xe3o de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remunera\xe7\xe3o: 0,03%.'}]}]},{id:"pw7",financialService:"robberyAndTheft",content:[{text:[{content:"Seguradora: Cardif do Brasil Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84 C\xf3digo SUSEP: 0293-3 Processo SUSEP: 15414.900738/2014-98 Ramo: 71. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{robberyAndTheftPercentage} - "},{content:"{robberyAndTheftAmount} "},{content:"Corretora: Viotto Corretora de Seguros e Previd\xeancia LTDA. CNPJ: 56.170.061/0001-51 Registro SUSEP: 100059706. Remunera\xe7\xe3o: 0,03%."}]}]}],E=`Pode ficar tranquilo! N\xf3s protegemos por 1 ano os seus equipamentos port\xe1teis contra roubo e furto qualificado e quebra acidental.`,C=(e,t)=>e?`(${e}x de ${t})`:null,S=["incluir Prote\xe7\xe3o Roubo e Furto","qualificado com quebra acidental de 1 ano"],k=(e,t)=>e?`${e}x de ${t} sem juros`:null,w=e=>`(\xe0 vista ${e})`;var P=o(93837),y=o(99673),Z=o(68054),$=o(55403),R=o(63825);let A=y.ZP.div`
  ${e=>(0,$.aK)("large")(e)} {
    display: grid;
    grid-template-columns: 3fr 9fr;
    border-bottom: 1px solid;
    border-color: ${e=>(0,$.kJ)("light")(e)};
    padding: 17px 0;
  }
`,O=y.ZP.div`
  ${e=>(0,$.aK)("large")(e)} {
    display: flex;
    align-items: center;
    border-left: 1px solid;
    border-color: ${e=>(0,$.kJ)("light")(e)};
    & label svg {
      align-self: flex-start;
    }
  }
`,z=(0,y.ZP)(R.Z)`
  font-size: ${e=>(0,$.R)("fontSizes.1")(e)}px;
  line-height: ${e=>(0,$.R)("lineHeights.input")(e)}em;
  margin: 10px 0;

  ${e=>(0,$.aK)("large")(e)} {
    margin: 15px 0 0 0;
  }
`,I=y.ZP.span`
  color: ${e=>(0,$.uu)("base")(e)};
  font-size: ${e=>(0,$.R)("fontSizes.1")(e)}px;
  padding-left: 12px;
`,D=(0,y.ZP)(I)`
  color: ${e=>(0,$.uu)("primary")(e)};
  font-size: ${e=>(0,$.R)("fontSizes.4")(e)}px;
  font-weight: ${e=>(0,$.R)("fontWeights.medium")(e)};
  line-height: ${e=>(0,$.R)("lineHeights.fontSize")(e)};
`,j=y.ZP.div`
  border-bottom: 1px solid ${e=>(0,$.ow)("border.light")(e)};
  ${Z.Dh}
  &:first-child {
    border-top: 1px solid ${e=>(0,$.ow)("border.light")(e)};
  }

  ${e=>(0,$.aK)("large")(e)} {
    padding: 0 17px;
    border: none;
    &:first-child {
      border: none;
    }
  }
`,T=y.ZP.div`
  display: flex;
  flex-direction: column;

  ${I} {
    margin-bottom: 5px;
  }
`,L=y.ZP.span`
  color: ${e=>(0,$.uu)("primary")(e)};
  font-weight: ${e=>(0,$.R)("fontWeights.bold")(e)};
`;var M=o(87043);let N=({options:e,onChange:t,desktopMode:o,installmentQuantity:a})=>{let[n,r]=(0,i.useState)(new Map),l=(e,o)=>{var a,i;t(o,(null==(a=n.get(null==o?void 0:o.description))?void 0:a.checked)||!1);let{name:l,checked:s}=e.target;null!=(i=n.get(null==o?void 0:o.description))&&i.checked?r(e=>(e.delete(null==o?void 0:o.description),new Map(e))):r(e=>new Map(e).set(l,{checked:s,item:o}))};return e.map(e=>{var t;return i.createElement(j,{key:null==e?void 0:e.id,p:"12px 0"},i.createElement(M.XZ,{onChange:t=>l(t,e),name:null==e?void 0:e.description,checked:(null==(t=n.get(null==e?void 0:e.description))?void 0:t.checked)||!1},o?i.createElement(T,null,i.createElement(D,null,S[0],i.createElement("br",null),S[1]),i.createElement("br",null),i.createElement(I,null,"Por apenas"," ",i.createElement(L,null,k(a,(0,P.Z)({value:(null==e?void 0:e.price)/a}))),w((0,P.Z)({value:null==e?void 0:e.price})))):i.createElement(I,null,"Incluir por apenas"," ",i.createElement("b",{"data-testid":"option-price"},(0,P.Z)({value:null==e?void 0:e.price}))," ",i.createElement("span",{"data-testid":"installment-quantity"},C(a,(0,P.Z)({value:(null==e?void 0:e.price)/a})))),i.createElement("br",null)))})};N.defaultProps={options:[],onChange:()=>({}),desktopMode:!1,installmentQuantity:null};var F=o(70615);let U=(0,y.ZP)(F.$)`
  background-color: ${e=>(0,$.dF)("primary")(e)};
  color: ${e=>(0,$.uu)("lightest")(e)};
`,q=(0,y.ZP)(M.xu)`
  padding: 0 12px;
  max-width: 1366px;
  margin: auto;
`,B=(0,y.ZP)(M.kC)`
  align-items: center;
  margin: 10px 0;
`,G=(0,y.ZP)(M.Ee)`
  width: 60px;
  height: 60px;
`,W=(0,y.ZP)(M.X6)`
  color: ${e=>(0,$.uu)("scratched")(e)};
  font-size: ${e=>(0,$.R)("fontSizes.2")(e)}px;
  line-height: ${e=>(0,$.R)("lineHeights.input")(e)}em;
  margin-left: 5px;
  font-weight: ${e=>(0,$.R)("fontWeights.bold")(e)};
`,H=(0,y.ZP)(M.kC)`
  align-items: center;
  color: ${e=>(0,$.uu)("base")(e)};
`,J=(0,y.ZP)(M.X6)`
  font-size: ${e=>(0,$.R)("fontSizes.2")(e)}px;
  margin-left: 5px;
  font-weight: ${e=>(0,$.R)("fontWeights.bold")(e)};
`,K=y.ZP.div`
  padding-bottom: 10px;
  margin-bottom: 5px;
`,_=(0,y.ZP)(M.kC)`
  padding: 16px 14px;
  justify-content: space-between;
  cursor: pointer;
  p {
    color: ${e=>(0,$.uu)("base")(e)};
    font-size: ${e=>(0,$.R)("fontSizes.2")(e)}px;
  }
`,Q=(0,y.ZP)(M.xv)``,V=(0,y.ZP)(M.xv)`
  text-align: center;
  font-size: ${e=>(0,$.R)("fontSizes.1")(e)}px;
`,Y=({service:e,onChange:t,desktopMode:o,installmentQuantity:a})=>null!=e&&e.offers.length?i.createElement(A,null,i.createElement("div",null,i.createElement(H,null,o?i.createElement(r.ggJ,{width:208,height:59}):i.createElement(i.Fragment,null,i.createElement(r.Q4t,{"aria-hidden":!0}),i.createElement(J,{as:"p",mt:"10px"},null==e?void 0:e.description))),i.createElement(z,null,E)),i.createElement(O,null,i.createElement(N,{options:null==e?void 0:e.offers,onChange:t,desktopMode:o,installmentQuantity:a}))):null;Y.defaultProps={service:{offers:[]},desktopMode:!1,installmentQuantity:null};let X=[`- Mais tempo de garantia al\xe9m do fabricante`,`- Consertos utilizando pe\xe7as genu\xednas`,`- Mais de 3 mil assist\xeancias t\xe9cnicas em todo o Brasil`,"- Concorra a R$ 5.000,00 durante 3 meses"],ee=(e,t)=>`${e} por apenas ${t}`,et=(e,t)=>e?` (${e}x de ${t})`:"";var eo=o(84546);let ea=(0,y.ZP)(eo.Z)``,en=(0,y.ZP)(R.Z)`
  font-size: ${e=>(0,$.R)("fontSizes.1")(e)}px;
  line-height: ${e=>(0,$.R)("lineHeights.input")(e)}em;
`;var ei=o(65055);let er=({service:e,onChange:t,Icon:o,defaultOption:a,installmentQuantity:n})=>{var r;if(!(null!=e&&e.offers.length))return null;let[l,s]=(0,i.useState)(a[0]),d=(e,o)=>{s(o),t(e,o)},c=null==e?void 0:null==(r=e.offers)?void 0:r.map(e=>({id:null==e?void 0:e.id,value:null==e?void 0:e.id,price:null==e?void 0:e.price,label:`${ee(null==e?void 0:e.description,(0,P.Z)({value:null==e?void 0:e.price}))}${et(n,(0,P.Z)({value:(null==e?void 0:e.price)/n}))}`,description:null==e?void 0:e.description,treeId:null==e?void 0:e.treeId,wageCompensation:null==e?void 0:e.wageCompensation}));return i.createElement(i.Fragment,null,i.createElement(H,null,i.createElement(o,{"aria-hidden":!0}),i.createElement(J,{as:"p"},null==e?void 0:e.description)),i.createElement(ea,{mb:"15px",mt:"10px"},X.map((e,t)=>i.createElement(en,{key:`${e}${t}`},e))),i.createElement(ea,null,i.createElement(ei.Z,{options:c.concat(a),selectedOption:null==l?void 0:l.value,onChange:d,p:"12px 0"})))};er.defaultProps={service:{offers:[]},onChange:()=>({}),defaultOption:[],installmentQuantity:null};let el=({service:e,onChange:t,installmentQuantity:o})=>i.createElement(i.Fragment,null,i.createElement(er,{service:e,onChange:t,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],Icon:r.Jpv,installmentQuantity:o}));el.defaultProps=er.defaultProps;let es=({service:e,onChange:t,installmentQuantity:o})=>i.createElement(i.Fragment,null,i.createElement(er,{service:e,onChange:t,Icon:r.Nb3,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],installmentQuantity:o}));es.defaultProps=er.defaultProps;var ed=o(46514),ec=o(86349);let eu=e=>!!Object.values(e).find(e=>e.length>0),em=e=>Object.entries(e).reduce((e,[t,o])=>o.length?Object.assign({},e,{[t]:o}):e,{}),ep=e=>Object.values(e).reduce((e,t)=>e.concat(t),[]),ex=(0,y.ZP)(M.xu)`
  max-width: 1366px;
  margin: auto;
`,eg=(0,y.ZP)(M.X6)`
  text-align: center;
  margin: 15px;
  font-weight: ${e=>(0,$.R)("fontWeights.bold")(e)};
  font-size: ${e=>(0,$.R)("fontSizes.0")(e)};
`,ef=(0,y.ZP)(M.xv)`
  padding: 5px 0;
  line-height: ${e=>(0,$.R)("lineHeights.input")(e)}em;
`,eh=(0,y.ZP)(M.xv)`
  text-decoration: underline;
  color: ${e=>(0,$.uu)("base")(e)};
`,eb=e=>{let{terms:t,placeholders:o={}}=e,r=(0,n.Z)(e,["terms","placeholders"]),l=e=>e&&Object.entries(o).reduce((e,[t,o])=>e.replace(`{${t}}`,o),e),s=e=>Object.entries(o).find(([t,o])=>t.startsWith(e)&&o);return t.map(e=>{var t;return i.createElement(ex,(0,a.Z)({},r,{key:null==e?void 0:e.id}),i.createElement(eg,{as:"p"},l(null==e?void 0:e.title)),(!(null!=e&&e.financialService)||s(e.financialService))&&i.createElement(ef,{"data-testid":e.id},null==e?void 0:null==(t=e.content)?void 0:t.map(e=>{var t;return e.link?i.createElement(eh,{as:"a",href:null==e?void 0:e.link,key:null==e?void 0:e.link},l(null==e?void 0:e.text)):null==e?void 0:null==(t=e.text)?void 0:t.map(e=>i.createElement(ef,{as:"span",key:e.content},null!=e&&e.bold?i.createElement("b",null,l(null==e?void 0:e.content)):l(null==e?void 0:e.content)))})))})};eb.defaultProps={terms:[]};let ev=({servicesSelected:e,showRobberyTerm:t,setShowRobberyTerm:o,showExtendedWarrantyTerm:a,setShowExtendedWarrantyTerm:n,showPaymentsWay:r,setShowPaymentsWay:l})=>{let s=Object.values(e).reduce((e,t)=>(t.forEach(t=>{e+=t.price}),e),0),x=Object.values(e).reduce((e,t)=>(t.forEach(t=>{e.push(t.description)}),e),[]),g=Object.values(e).reduce((t,o,a)=>{let n=Object.keys(e)[a];return o.forEach(e=>{var o,a;Object.assign(t,{[`${n}Amount`]:null!=(o=e.wageCompensation)&&o.amount?(0,P.Z)({value:e.wageCompensation.amount}):null,[`${n}Percentage`]:null!=(a=e.wageCompensation)&&a.percentage?`${e.wageCompensation.percentage}%`:null})}),t},{});return i.createElement(i.Fragment,null,[{id:"robbery-theft-terms",show:t,terms:m,title:"fechar termos de roubo e furto",label:d,onClick:()=>o(!1)},{id:"extended-warranty-terms",show:a,terms:p,title:"fechar termos de garantia estendida",label:c,onClick:()=>n(!1)},{id:"payments-way-terms",show:r,terms:v,title:"fechar formas de pagamento de servi\xe7o",label:u,onClick:()=>l(!1)}].map(e=>i.createElement(ed.YE,{fullScreen:!0,direction:"right",key:e.id,visible:e.show,"data-testid":e.id},i.createElement(U,{leftButton:{icon:"back",title:e.title,iconColor:"#fefefe",onClick:e.onClick},label:e.label}),i.createElement(M.D_,null),i.createElement(eb,{terms:e.terms,placeholders:{totalPrice:(0,P.Z)({value:s}),description:(0,ec.zY)(x),extendedWarrantyAmount:g.extendedWarrantyAmount,extendedWarrantyPercentage:g.extendedWarrantyPercentage,certainExchangeAmount:g.certainExchangeAmount,certainExchangePercentage:g.certainExchangePercentage,robberyAndTheftAmount:g.robberyAndTheftAmount,robberyAndTheftPercentage:g.robberyAndTheftPercentage},p:"0 12px"}))))},eE=e=>{var t;let{installment:o,services:d,servicesPriority:m,onContinueClick:p,visible:v,timeTransition:E,onCloseClick:C,protectLabelAs:S,onChange:k,showCloseButton:w}=e,P=(0,n.Z)(e,["installment","services","servicesPriority","onContinueClick","visible","timeTransition","onCloseClick","protectLabelAs","onChange","showCloseButton"]),y="robberyAndTheft",Z="extendedWarranty",$="certainExchange",[R,A]=(0,i.useState)(!1),[O,z]=(0,i.useState)(!1),[I,D]=(0,i.useState)(!1),[j,T]=(0,i.useState)({[y]:[],[Z]:[],[$]:[]}),{records:L}=d,N=null!==(t=null==o?void 0:o.quantity)&&void 0!==t?t:null,[F,H,J]=(0,ec.yH)(L,m),X=(e,t)=>{let o=t?j[y].filter(t=>(null==t?void 0:t.id)!==(null==e?void 0:e.id)):j[y].concat(e);k(em(Object.assign({},j,{[y]:o}))),T(Object.assign({},j,{[y]:o}))},ee=(e,t,o)=>{let a=[t];k(em(Object.assign({},j,{[o]:(null==t?void 0:t.value)===null?[]:a}))),T(Object.assign({},j,{[o]:(null==t?void 0:t.value)===null?[]:a}))},et=()=>{ep(j).length?p(em(j)):p(null)};return i.createElement(i.Fragment,null,i.createElement(ed.YE,(0,a.Z)({visible:v,direction:"right",timeTransition:E,fullScreen:!0},P),i.createElement(M.D_,null),i.createElement(U,{leftButton:{icon:"close",title:"fechar servi\xe7os financeiros",onClick:C,iconColor:"#fefefe"},label:l,showCloseButton:w}),i.createElement(q,null,i.createElement(B,null,i.createElement(G,{src:d.image,width:60,height:60,"aria-hidden":!0}),i.createElement(W,{as:S},"Proteja o seu produto por muito mais tempo!")),i.createElement(Y,{service:F,"data-testid":"roubo-furto",onChange:X,installmentQuantity:N}),i.createElement(K,null),i.createElement(es,{service:J,"data-testid":"troca-certa",onChange:(e,t)=>ee(e,t,$),installmentQuantity:N}),i.createElement(K,null),i.createElement(el,{service:H,"data-testid":"garantia-estendida",onChange:(e,t)=>ee(e,t,Z),installmentQuantity:N}),i.createElement(M.zx,{"data-testid":"financial-services-submit",m:"10px 0",color:"secondary",width:"100%",fontSize:1,onClick:et,full:!0},eu(j)?"Contratar servi\xe7o e ir para sacola":"Ir para sacola"),i.createElement(K,null),!!ep(j).length&&i.createElement(V,null,h," ",i.createElement("b",null,b)),i.createElement(K,null),i.createElement(_,{onClick:()=>A(!0),"data-testid":"robbery-theft-term-item"},i.createElement("p",null,s),i.createElement(r.olP,{width:"12px",height:"12px"})),i.createElement(_,{onClick:()=>z(!0),"data-testid":"extended-warranty-term-item"},i.createElement("p",null,c),i.createElement(r.olP,{width:"12px",height:"12px"})),!!ep(j).length&&i.createElement(_,{onClick:()=>D(!0),"data-testid":"payments-way-term-item"},i.createElement("p",null,u),i.createElement(r.olP,{width:"12px",height:"12px"})),i.createElement(K,null),i.createElement(Q,{fontSize:0,fontWeight:"medium"},x),i.createElement(Q,{fontSize:0,color:"scratched"},f),i.createElement(K,null),i.createElement(Q,{fontSize:0,fontWeight:"medium"},g),i.createElement(Q,{fontSize:0,color:"scratched"},'Seguro Garantia Estendida Original, orientamos a leitura das condi\xe7\xf5es gerais do seguro no link www.luizaseg.com.br. Seguro garantido pela Luizaseg Seguros S/A, CNPJ: 07.746.953/0001-42, Processo Susep N\xba 15414.900276/2014-17. Representante de Seguro: Magazine Luiza S/A, CNPJ 47.960.950/0001-21. Corretora: Viotto Corretora de Seguros e Previd\xeancia LTDA, CNPJ 56.170.061/0001-51, Registro SUSEP 10.0059706. “Ades\xe3o Opcional”. "A  contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago." "\xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro." T\xedtulo de Capitaliza\xe7\xe3o garantido Capitaliza\xe7\xe3o: Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/0001-73 Processo SUSEP: 15414.900051/2018-86. Ouvidoria Icatu Seguros: 0800 286 0047. Consulte o regulamento do sorteio no site: "http://www.icatuseguros.com.br". Modalidade: Incentivo. Pr\xeamio no valor l\xedquido de R$ 5.062,50. Promo\xe7\xe3o v\xe1lida por 3 meses. Sorteios: Mensais a partir do \xfaltimo s\xe1bado do m\xeas subsequente a ades\xe3o.  Consulte o regulamento no link regulamentos.bnpparibascardif.com.br.  "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis ano - Art.3\xba, I do C\xf3digo Civil".  "A comercializa\xe7\xe3o de seguro \xe9 fiscalizada pela Susep. www.susep.gov.br - 0800 021 8484". "A aprova\xe7\xe3o do Plano pela Susep n\xe3o implica, por parte da Autarquia, em incentivo ou recomenda\xe7\xe3o \xe0 sua aquisi\xe7\xe3o. "Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria : 0800 727 2482 - Dias \xfateis, das 9h as 18 horas (hor\xe1rio de Brasilia) exceto feriados ou bnpparibascardif.com.br/ouvidoria.'))),i.createElement(ev,{servicesSelected:j,showRobberyTerm:R,setShowRobberyTerm:A,showExtendedWarrantyTerm:O,setShowExtendedWarrantyTerm:z,showPaymentsWay:I,setShowPaymentsWay:D}))};eE.defaultProps={installment:{quantity:null},services:{image:""},visible:!0,timeTransition:.3,servicesPriority:[5,3,4],protectLabelAs:"p",onContinueClick:()=>({}),onCloseClick:()=>({}),onChange:()=>({}),showCloseButton:!0};var eC=eE},49647:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(31461),n=o(2784);o(13980);var i=o(87043),r=o(99673),l=o(55403),s=o(63825),d=o(10200);let c=r.ZP.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  ${l.$_}
`,u=(0,r.ZP)(s.Z)`
  padding: 20px 8px;
  ${l.$_}
`,m=(0,r.ZP)(d.Z)`
  text-decoration: underline;
  font-size: unset;
  ${l.$_}
`,p=(0,r.ZP)(d.Z)`
  margin: 8px;
  text-decoration: underline;
  font-size: unset;
  ${l.$_}
`,x=r.ZP.address`
  padding: 20px 8px;
`,g=(0,r.ZP)(s.Z)`
  ${l.$_}
`;function f(e){let{footerData:t,strip:o,colors:r}=e,l=(0,a.Z)(e,["footerData","strip","colors"]),{rules:s="",address:d=[],policy:f={},links:h=[]}=t;return n.createElement(c,l,o&&n.createElement(i.D_,null),n.createElement(u,{"data-testid":"rules-line",color:r.rules},s),!!(null!=f&&f.label)&&!!(null!=f&&f.link)&&n.createElement(m,{"data-testid":"policy-line",target:"_blank",href:f.link,rel:null==f?void 0:f.rel,color:r.policy},f.label),!!(null!=h&&h.length)&&h.map(e=>n.createElement(p,{key:e.label,"data-testid":"link-line",target:"_blank",href:e.url,rel:null==e?void 0:e.rel,color:r.link},e.label)),n.createElement(x,null,d.map((e,t)=>n.createElement(g,{key:t,"data-testid":"address-line",color:r.address},e))))}f.defaultProps={footerData:{},bg:"background.primary",colors:{rules:"text.white",policy:"text.white",link:"text.white",address:"text.white"},strip:!0};var h=f},70385:function(e,t,o){o.d(t,{Z:function(){return F}});var a=o(7896),n=o(2784);o(13980);var i=o(39146),r=o(99673),l=o(55403),s=o(68054),d=o(87043);let c=(0,r.ZP)(d.D_)``,u=r.ZP.div.attrs(e=>Object.assign({bg:"background.primary"},e))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${l.$_}
  ${s.Dh}
`;u.ContentWrapper=r.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1312px;
`,u.Content=r.ZP.div.attrs(e=>Object.assign({pt:"4",pb:"3"},e))`
  background-color: ${(0,l.dF)("primary")};
  ${s.Dh}
`,u.Bottom=r.ZP.div`
  display: flex;
  justify-content: center;
  background-color: ${(0,l.dF)("white")};
  width: 100%;
`,u.BottomContent=r.ZP.div.attrs(e=>Object.assign({maxWidth:"1000px",p:"3",lineHeight:"fontSize"},e))`
  width: 100%;
  text-align: center;

  ${s.cp}
  ${s.bK}
  ${s.Dh}
`;let m=r.ZP.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;m.Content=r.ZP.div`
  width: 100%;
  max-width: 990px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(0,l.R)("baseColors.magablu.light")};
`,m.Title=r.ZP.p.attrs(e=>Object.assign({color:"text.lightest",fontSize:3},e))`
  text-align: center;
  margin-bottom: 20px;
  ${l.$_}
  ${s.cp}
`,m.MethodsContainer=r.ZP.div`
  display: flex;
  justify-content: center;
`,m.MethodsContent=r.ZP.ul.attrs(e=>Object.assign({maxWidth:"620px"},e))`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${s.bK}
`,m.Method=r.ZP.li`
  width: 35px;
`,m.MethodImage=(0,r.ZP)(d.Ee)``;let p=r.ZP.div`
  padding: 10px 0;
`;p.CertificatesContainer=r.ZP.div.attrs(e=>Object.assign({mb:"3"},e))`
  display: flex;
  justify-content: center;
  ${s.Dh}
`,p.CertificatesContent=r.ZP.ul.attrs(e=>Object.assign({maxWidth:"990px",minWidth:"300px"},e))`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  ${s.bK}
  ${s.cp}
`,p.Title=(0,r.ZP)(d.rU).attrs(e=>Object.assign({color:"text.lightest",p:0},e))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120px;

  & > *:not(:first-child) {
    margin-left: ${(0,l.R)("space.2")}px;
  }
`,p.TitleLabel=r.ZP.span.attrs(e=>Object.assign({color:"text.lightest",fontSize:0,maxWidth:"70px"},e))`
  ${s.bK}
  ${s.cp}
  ${l.$_}
`;let x=(0,r.ZP)(d.rU).attrs(e=>Object.assign({color:"text.lightest"},e))``,g=r.ZP.div.attrs(e=>Object.assign({mb:"3"},e))`
  display: flex;
  justify-content: center;
  ${s.Dh}
`;g.Content=r.ZP.div.attrs(e=>Object.assign({maxWidth:"620px"},e))`
  width: 100%;
  ${s.bK}
`;let f=r.ZP.div`
  display: flex;
  justify-content: center;
`;f.SectionsList=r.ZP.ul.attrs(e=>Object.assign({maxWidth:"990px"},e))`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  ${s.bK}
`,f.Column=r.ZP.li``,f.SectionTitle=r.ZP.p.attrs(e=>Object.assign({color:"text.lightest",fontSize:1,fontWeight:"regular"},e))`
  padding: 10px;
  ${l.$_}
  ${s.cp}
`,f.LinksList=r.ZP.ul`
  display: inline-flex;
  writing-mode: vertical-lr;
  flex-wrap: wrap;
  align-content: flex-start;
  max-height: 270px;
  line-height: ${(0,l.R)("lineHeights.thin")}px;

  ${x} {
    font-size: ${(0,l.R)("fontSizes.0")}px;
    color: ${(0,l.R)("colors.lightBlue")};
  }
`,f.LinkItem=r.ZP.li`
  list-style: none;
  writing-mode: horizontal-tb;
  padding: 1px 0px;
`,f.Content=r.ZP.span.attrs(e=>Object.assign({gap:"12px"},e))`
  &:not(:first-child) {
    margin-left: ${({gap:e})=>e};
  }
`,f.Text=r.ZP.div`
  ${s.bK}
  ${s.cp}
`,f.Image=(0,r.ZP)(d.Ee).attrs(e=>Object.assign({maxHeight:"12px"},e))`
  width: auto;
`;let h=(0,r.ZP)(d.xv).attrs(e=>Object.assign({fontSize:0},e))`
  padding: ${(0,l.R)("space.1")}px ${(0,l.R)("space.3")}px;
  color: ${(0,l.uu)("light")};
  ${s.cp}
  ${l.$_}
`,b=r.ZP.a`
  color: ${(0,l.uu)("light")};
`;var v=o(34490),E=o(76635),C=o.n(E);let S=r.ZP.div``,k="text.lightest",w=r.ZP.div.attrs(e=>Object.assign({color:k},e))`
  padding: 10px;
  ${l.$_}
`,P=r.ZP.p.attrs(e=>Object.assign({fontSize:5},e))`
  margin-bottom: 10px;
  line-height: 24px;
  ${s.cp}
`,y=r.ZP.p.attrs(e=>Object.assign({fontSize:0},e))`
  margin-bottom: 10px;
  ${s.cp}
`,Z=r.ZP.ul`
  list-style: none;
`,$=r.ZP.li`
  display: flex;
  margin-bottom: 20px;
`,R=(0,r.ZP)(d.rU).attrs(e=>Object.assign({color:k,pl:1},e))``,A=r.ZP.p.attrs(e=>Object.assign({color:k,fontSize:1,fontWeight:"regular"},e))`
  padding: 1rem 0 10px 0;
  ${l.$_}
  ${s.cp}
`,O=r.ZP.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.7rem;
`,z=(0,r.ZP)(d.Ee).attrs(e=>Object.assign({minHeight:"35px"},e))`
  width: auto;
`,I=r.ZP.div.attrs(e=>Object.assign({},e))`
  ${s.cp}
  margin-bottom: 10px;
`,D=r.ZP.p.attrs(e=>Object.assign({fontSize:3,color:k},e))`
  svg {
    margin-right: 2px;
  }
  ${s.cp}
  display: flex;
  align-items: center;
`,j=({phone:e,salesChannels:t,openingHours:o,accessibility:a,mobileVersion:i,links:r,social:l})=>n.createElement(S,null,n.createElement(w,null,e&&n.createElement(P,null,e),n.createElement(I,{"data-testid":"sales-channels"},null==t?void 0:t.map(e=>n.createElement(D,{key:C().uniqueId("salesChannelsContactSection")},e.icon,n.createElement("span",null,e.label)))),n.createElement(y,null,o),n.createElement(Z,null,null==r?void 0:r.map((e,t)=>n.createElement($,{key:t},n.createElement(R,{href:e.url,title:e.title,p:0},e.label))),a&&n.createElement($,null,n.createElement(v.yqN,{color:"currentColor"}),n.createElement(R,{href:a.url,title:a.title},a.label)),i&&n.createElement($,null,n.createElement(v.MPk,{color:"currentColor"}),n.createElement(R,{href:i.url,title:i.title},i.label))),null!=l&&l.links?n.createElement("div",null,n.createElement(A,null,l.title||"Siga para mais conte\xfado:"),n.createElement(O,null,l.links.map(({url:e,img:t,label:o},a)=>n.createElement($,{key:a},n.createElement(d.rU,{href:e,target:"_blank",title:o},n.createElement(z,{src:t,alt:o})))))):null));var T=o(31461);let L=(e={},t)=>{let{url:o,title:i,label:r}=e,l=(0,T.Z)(e,["url","title","label"]);return n.createElement("li",null,n.createElement(p.Title,(0,a.Z)({"data-testid":"certificates-title",title:i,href:o},l,{onClick:e=>t(e,{url:o,title:i,label:r})}),n.createElement(v.$LW,{"data-testid":"certificates-title-icon",color:"currentColor"}),r&&n.createElement(p.TitleLabel,{"data-testid":"certificates-title-label"},r)))},M=({url:e,title:t,gap:o,content:i=[],linkAttrs:r={}},l=()=>{})=>n.createElement(x,(0,a.Z)({"data-testid":"link-item",href:e,title:`Link para: ${t}`,px:"10px"},r),i.map((i,r)=>{let{label:s,img:d}=i,c=(0,T.Z)(i,["label","img","iconId"]);return n.createElement(f.Content,{"data-testid":`link-item-children-${r}`,key:r,gap:o,onClick:o=>l(o,{url:e,title:t})},s&&n.createElement(f.Text,c,s),d&&n.createElement(f.Image,(0,a.Z)({src:d,alt:t},c)))}));function N({data:e,onSubmitSubscriptionForm:t,onMenuItemClick:o,onPaymentMethodClick:r,onCertificateClick:l}){var s,d,x,v;let{paymentMethods:E={},certificatePartners:C={},linksColumns:S=[],contactSection:k={},bottomInfo:w={},subscriptionForm:P}=e;return n.createElement(u,{"data-testid":"footer-elem"},n.createElement(u.ContentWrapper,null,n.createElement(c,{size:5,position:"relative"}),n.createElement(u.Content,null,E&&n.createElement(m,{"data-testid":"payment-methods-container",href:E.link},n.createElement(m.Content,null,n.createElement(m.Title,null,E.label),n.createElement(m.MethodsContainer,null,n.createElement(m.MethodsContent,null,null==(s=E.list)?void 0:s.map((e,t)=>n.createElement(m.Method,{"data-testid":"payment-option",key:t},n.createElement(m.MethodImage,{onClick:t=>r(t,{title:e.title}),src:e.img,alt:e.title}))))))),n.createElement(p,null,n.createElement(p.CertificatesContainer,null,n.createElement(p.CertificatesContent,null,L(C.title,l),null==C?void 0:null==(d=C.certificates)?void 0:d.map((e,t)=>n.createElement("li",{"data-testid":"certificate-partner",key:t},M(e,l))),n.createElement("li",null,n.createElement("a",{id:"seloEbit",href:"http://www.ebit.com.br/552",rel:"noreferrer",target:"_blank","data-noop":"redir(this.href);"})),n.createElement("li",null,n.createElement("div",{id:"reputation-ra"}))))),P&&n.createElement(g,null,n.createElement(g.Content,null,n.createElement(i.ok,(0,a.Z)({onSubmitForm:t},P)))),n.createElement(f,null,n.createElement(f.SectionsList,null,S.map((e,t)=>n.createElement(f.Column,{"data-testid":"link-column",key:t},e.map((e,t)=>{let a=e.links;return n.createElement("div",{"data-testid":"link-section",key:t},n.createElement(f.SectionTitle,null,e.title),n.createElement(f.LinksList,null,a.map((t,a)=>n.createElement(f.LinkItem,{"data-testid":`link-item-${a}`,key:`${e}-${a}`,onClick:a=>o(a,t,null==e?void 0:e.title)},M(t)))))}))),k&&n.createElement(f.Column,{"data-testid":"link-column"},n.createElement(f.SectionTitle,null,k.label),n.createElement(j,k)))))),n.createElement(u.Bottom,null,n.createElement(u.BottomContent,null,null==(x=w.texts)?void 0:x.map((e,t)=>n.createElement(h,{key:t,"data-testid":"bottom-info-text-line"},e)),null==(v=w.links)?void 0:v.map((e,t)=>n.createElement(h,{key:t,"data-testid":"bottom-info-link-line"},e.label,": ",n.createElement(b,{href:e.url},e.url))))))}N.defaultProps={data:{certificatePartners:{},linksColumns:[],contactSection:{},bottomInfo:{}},onMenuItemClick:null,onCertificateClick:null,onPaymentMethodClick:null};var F=N},71782:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(2784);o(13980);var n=o(34490),i=o(99673),r=o(55403);let l=i.ZP.header``,s=i.ZP.div`
  background: ${e=>(0,r.R)("palette.background.primary")(e)};
  height: ${e=>(0,r.R)("sizes.header")(e)};
  color: #fff;
  padding: 5px 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    [id='logo'] {
      margin-top: 5px;
      width: 98px;
      height: 21px;
    }

    [id='button-burger'] {
      width: 22px;
      height: 22px;
    }
  }

  [id='search-container'] {
    margin-bottom: 5px;
  }
`,d=i.ZP.div`
  > a {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`,c=i.ZP.a`
  text-decoration: none;
`;i.ZP.input`
  width: 100%;
  border: 0px;
  height: 30px;
  background-color: #fff;
  color: #9b9b9b;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;

  ::-webkit-search-cancel-button {
    background-color: #818181;
    position: relative;
    right: 10px;
  }
`;var u=o(87043),m=o(1756),p=o(39146),x=o(46514);function g({isRendered:e,customSidebar:t,onMenuHeaderClick:o,onLogoClick:i,onMenuItemClick:r,onLogout:g,onSearch:f,onShoppingBagClick:h,onTypeChange:b,onHeaderSuggestionLinkClick:v,onSuggestItemClick:E,onProductItemClick:C,onTopTermItemClick:S,onInputClear:k,onInputClose:w,onInputOpen:P,initialValue:y,data:Z,linksSuggestions:$,suggestData:R,logoProps:A,sideMenuOpen:O,topTermsData:z}){var I,D,j,T,L,M;let[N,F]=(0,a.useState)(O),{menuData:U,headerData:q}=Z,B=(e,t)=>{F(!1),o(e,t)},G=(e,t,o)=>{F(!1),r(e,t,o)};return a.createElement(l,null,a.createElement(s,null,a.createElement("header",null,a.createElement(p.hU,{name:"Burger",onClick:()=>F(!N)},a.createElement(n.OWX,{role:"button","aria-label":(null==q?void 0:null==(I=q.menu)?void 0:I.ariaLabel)||"abrir o menu","data-testid":"button-burger",id:"button-burger",color:"#fff"})),a.createElement(c,{onClick(e){var t;return i(e,{url:(null==q?void 0:null==(t=q.logo)?void 0:t.url)||"/"})},href:(null==q?void 0:null==(D=q.logo)?void 0:D.url)||"/",role:"link","data-testid":"logo","aria-label":(null==q?void 0:null==(j=q.logo)?void 0:j.ariaLabel)||"ir para p\xe1gina inicial"},a.createElement(u.TR,A)),a.createElement(d,null,a.createElement(c,{href:null==q?void 0:null==(T=q.shoppingBag)?void 0:T.url,onClick:h,role:"link","aria-label":(null==q?void 0:null==(L=q.shoppingBag)?void 0:L.ariaLabel)||"ir para sacola"},a.createElement(n.CKR,{id:"shoppingBag",color:"#fff",width:24,height:24})))),a.createElement(p.Mj,{onSearch:f,onInputClear:k,onSuggestItemClick:E,onProductItemClick:C,onTopTermItemClick:S,onTypeChange:b,onInputClose:w,onInputOpen:P,placeholder:null==q?void 0:null==(M=q.search)?void 0:M.placeholder,initialValue:y,list:R,topTerms:z})),a.createElement(x.f4,{isRendered:e,data:$,onClick:v,isMobile:!0}),a.createElement(u.D_,{position:"relative"}),a.createElement(x.YE,{visible:N,bg:"base",onClickOutside:()=>F(!1)},t?(0,a.cloneElement)(t,{data:null==U?void 0:U.data}):a.createElement(m.Z,{data:null==U?void 0:U.data,onMenuHeaderClick:B,onLogout:g,onMenuItemClick:G})))}g.defaultProps={customSidebar:void 0,suggestData:[],initialValue:"",logoProps:{},data:{headerData:{},menuData:{data:{header:{label:"",url:"",helpers:[]},moreInformation:[]}}},linksSuggestions:{links:[],title:""},isRendered:!1,sideMenuOpen:!1,onCollapsedClick(){},onMenuHeaderClick(){},onMenuItemClick(){},onLogoClick(){},onLogout(){},onInputClear(){},onShoppingBagClick(){},onSuggestItemClick(){},onProductItemClick(){},onInputClose(){},onInputOpen(){}};var f=g},42887:function(e,t,o){o.d(t,{Z:function(){return q}});var a=o(7896),n=o(2784),i=o(13980),r=o(34490),l=o(99673),s=o(55403),d=o(68054),c=o(15566),u=o(39146),m=o(87043);let p=l.ZP.header.attrs(e=>Object.assign({bg:"background.primary",px:2},e))`
  display: flex;
  justify-content: center;
  width: 100%;
  ${s.$_}
  ${d.Dh}
`,x=l.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1366px;
  position: relative;
  display: grid;
  grid-template-columns: 95px 140px 1fr;
  grid-template-areas:
    '. . links'
    'lu logo widgets'
    'lu menus menus'
    'strip strip strip';
`,g=(0,l.ZP)(m.rU)`
  grid-area: lu;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,f=(0,l.ZP)(m.rU).attrs(e=>Object.assign({mr:3},e))`
  grid-area: logo;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Fine tuning: this padding aligns the logo with the search bar vertically */
  padding-bottom: 8px;

  ${d.Dh}
`,h=(0,l.ZP)(c.Z).attrs(()=>({width:138,height:30}))``,b=l.ZP.div.attrs(e=>Object.assign({my:3},e))`
  grid-area: links;
  display: flex;
  justify-content: space-between;
  ${d.Dh}
`,v=l.ZP.div.attrs(e=>Object.assign({mb:3},e))`
  grid-area: widgets;
  display: flex;
  align-items: center;

  ${d.Dh}
`,E=l.ZP.div`
  flex-grow: 1;
  margin-top: ${e=>e.hasSibling?"25px;":"0px;"};
`,C=(0,l.ZP)(u.Rs).attrs(e=>Object.assign({backgroundColor:(0,s.dF)("primary")(e),iconColor:(0,s.uu)("white")(e),fontColor:(0,s.uu)("white")(e),counterColor:"#db44a7"},e))``,S=(0,l.ZP)(u.kV).attrs(e=>Object.assign({backgroundColor:(0,s.dF)("primary")(e),iconColor:(0,s.uu)("white")(e),fontColor:(0,s.uu)("white")(e),counterColor:"#58c22e"},e))``,k=l.ZP.div`
  width: 100%;
  grid-area: menus;
`,w=l.ZP.div.attrs(e=>Object.assign({mx:3},e))`
  width: 150px;
  ${d.Dh}
`,P=(0,l.ZP)(m.rU).attrs(e=>Object.assign({mx:1},e))`
  height: 45px;
  width: 60px;
  ${d.Dh}
`,y=(0,l.ZP)(m.D_).attrs(e=>Object.assign({},e))`
  grid-area: strip;
`;var Z=o(46514),$=o(31461),R=o(86349);let A=(0,l.ZP)(m.rD).attrs(e=>Object.assign({backgroundColor:"#fffce6"},e))`
  z-index: ${(0,s.R)("zIndices.0")};
`,O=(0,l.ZP)(m.xv).attrs(e=>Object.assign({fontSize:2,fontWeight:"bold",lineHeight:"display",mb:2},e))`
  color: ${e=>(0,s.ow)("primary.dark")(e)};

  ${d.cp}
`,z=(0,l.ZP)(m.xv).attrs(e=>Object.assign({fontSize:1,lineHeight:"display"},e))`
  color: ${e=>(0,s.ow)("primary.dark")(e)};

  ${d.cp}
`,I=(0,l.ZP)(r.JO$).attrs(e=>Object.assign({fill:"primary.dark"},e))``,D=(0,l.ZP)(m.xv).attrs(e=>Object.assign({fontSize:2,fontWeight:"bold",justifySelf:"flex-end",mb:2,mt:3,mr:2},e))`
  color: ${e=>(0,s.ow)("primary.dark")(e)};

  cursor: pointer;
`,j=(0,l.ZP)(m.rj).attrs(e=>Object.assign({pl:2},e))`
  max-width: 364px;
`,T=(0,l.ZP)(m.kC).attrs(e=>Object.assign({alignItems:"center",gap:2,px:2,py:3},e))`
  color: ${e=>(0,s.ow)("primary.dark")(e)};

  max-width: 384px;
`,L=(0,l.ZP)(m.xu).attrs(e=>Object.assign({width:"fit-content"},e))`
  align-self: baseline;
  justify-self: end;
`,M=l.ZP.div.attrs(e=>Object.assign({ml:1,mr:3},e))`
  width: 200px;
  transition: all 0.2s ease-in-out;
  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
  ${d.Dh}
`;function N({onClick:e}){return n.createElement(L,{"data-testid":"close-btn",onClick:e},n.createElement(I,{name:"Close",width:24,height:24,cursor:"pointer","data-testid":"close"}))}let F=e=>{let{onZipCodeClick:t,onClickPopperBtn:o,onClosePopper:i,onHoverZipCode:r,popperDisplay:l,popper:s}=e,d=(0,$.Z)(e,["onZipCodeClick","onClickPopperBtn","onClosePopper","onHoverZipCode","popperDisplay","popper"]),c=(0,n.useRef)(null),{enabled:p,info:{title:x,content:g,buttonLabel:f}={},success:{title:h,content:b}={}}=s;return n.createElement(n.Fragment,null,n.createElement(M,{"data-testid":"zipcode-text-container",onClick:t,ref:c,onMouseEnter:r},n.createElement(u.YQ,(0,a.Z)({},d,{formatter:R.kC}))),p&&n.createElement(A,{visible:!!l,parentRef:c},"success"===l?n.createElement(T,{"data-testid":"popper-success-container"},n.createElement(I,{name:"DoneCircle",width:32,height:32,fill:"alert.success.text","data-testid":"DoneCircle"}),n.createElement(m.xu,null,n.createElement(O,null,h),n.createElement(z,null,b)),n.createElement(N,{onClick:i})):n.createElement(j,{"data-testid":"popper-info-container"},n.createElement(N,{onClick:i}),n.createElement(O,null,x),n.createElement(z,null,g),n.createElement(D,{"data-testid":"popper-btn",onClick:o},f))))};F.defaultProps={popper:{enabled:!1},onHoverZipCode(){}};let U=({data:e,searchSuggestions:t,topTermsData:o,isRendered:i,initialValue:l,linksSuggestions:s,logoProps:d,logoLuProps:c,onInputClose:m,onInputOpen:$,onSuggestItemClick:R,onProductItemClick:A,onTopTermItemClick:O,onHeaderSuggestionLinkClick:z,onZipCodeClick:I,onClickPopperBtn:D,popperDisplay:j,onClosePopper:T,onSearch:L,onTypeSearch:M,onLogout:N,onLogoClick:U,onMenuItemClick:q,customLoginMenu:B,onHorizontalLinksClick:G,onHoverZipCode:W,onClickSearchEvent:H,onUnsignedClick:J,onSignedHover:K,onSignedMenuClick:_,onClickWishlist:Q,onHoverMenuItem:V,onClickMenuItem:Y})=>{var X,ee,et,eo,ea,en;let{account:ei,headerData:er,companyLinks:el,contactLinks:es,login:ed,wishlist:ec,bag:eu,zipcode:em}=e,ep=(e,t,o,a)=>{q(e,t,o,a)};return n.createElement(p,{"data-testid":"header-elem"},n.createElement(x,null,n.createElement(g,{href:(null==er?void 0:null==(X=er.logo)?void 0:X.url)||"/",role:"link","aria-label":(null==er?void 0:null==(ee=er.logo)?void 0:ee.ariaLabel)||"ir para p\xe1gina inicial",onClick:U,"data-testid":"logo-lu-magalu"},c?n.createElement(r.RdR,c):n.createElement(r.he$,{titleAccess:"Logo Lu",width:95,height:113})),n.createElement(f,{href:(null==er?void 0:null==(et=er.logo)?void 0:et.url)||"/",role:"link","aria-label":(null==er?void 0:null==(eo=er.logo)?void 0:eo.ariaLabel)||"ir para p\xe1gina inicial",onClick:U,"data-testid":"logo-magalu"},n.createElement(h,d)),n.createElement(b,null,n.createElement(u.pl,{data:el,handleHorizontalLinksClick:G}),n.createElement(u.pl,{data:es,handleHorizontalLinksClick:G})),n.createElement(v,null,n.createElement(E,{hasSibling:(null==s?void 0:null==(ea=s.links)?void 0:ea.length)>1},n.createElement(u.Mj,{initialValue:l,onSearch:L,onTypeChange:M,onSuggestItemClick:R,onProductItemClick:A,onTopTermItemClick:O,onClickSearchEvent:H,onInputClose:m,onInputOpen:$,placeholder:null==er?void 0:null==(en=er.search)?void 0:en.placeholder,list:t.terms,products:t.products,desktopMode:!0,topTerms:o,onMenuItemClick:ep}),n.createElement(Z.f4,{isRendered:i,data:s,onClick:z})),n.createElement(w,null,B?n.createElement(n.Fragment,null,B):n.createElement(u.RG,(0,a.Z)({},ed,ei,{onLogout:N,onUnsignedClick:J,onSignedHover:K,onSignedMenuClick:_}))),(null==em?void 0:em.showZipcode)&&n.createElement(F,(0,a.Z)({},em,{popperDisplay:j,onZipCodeClick:I,onClickPopperBtn:D,onClosePopper:T,onHoverZipCode:W})),(null==ec?void 0:ec.href)&&n.createElement(P,{href:null==ec?void 0:ec.href,"data-testid":"wishlist-button-container",onClick:Q},n.createElement(C,(0,a.Z)({truncateAmountThreshold:99},ec))),n.createElement(P,{href:null==eu?void 0:eu.href,"data-testid":"bag-button-container"},n.createElement(S,(0,a.Z)({truncateAmountThreshold:99},eu)))),n.createElement(k,null,n.createElement(Z.DH,{data:e,onMenuItemClick:ep,onHoverMenuItem:V,onClickMenuItem:Y})),n.createElement(y,{size:5,position:"relative"})))};U.defaultProps={customLoginMenu:null,data:{account:{},headerData:{},companyLinks:{},contactLinks:{},categoryList:{},specialLinks:[],externalLinks:[],allCategories:{},login:{},wishlist:{},bag:{}},searchSuggestions:{terms:[],products:[]},linksSuggestions:{links:[],title:""},logoProps:{},isRendered:i.bool,initialValue:"",onInputClose(){},onInputOpen(){},onLogout(){},onSuggestItemClick(){},onProductItemClick(){},onTopTermItemClick(){},onZipCodeClick(){},onMenuItemClick(){},onHoverZipCode(){},onClickWishlist(){},onHorizontalLinksClick(){},onUnsignedClick(){},onSignedHover(){},onSignedMenuClick(){},onClickSearchEvent(){},onHeaderSuggestionLinkClick(){},onHoverMenuItem(){},onClickMenuItem(){}};var q=U},95949:function(e,t,o){o.d(t,{fh:function(){return m},X6:function(){return H},ZP:function(){return eb}});var a=o(2784);o(13980);var n=o(66762),i=o(70615),r=o(7896),l=o(31461),s=o(34490);let d=(0,a.createContext)(),c=e=>{let{children:t}=e,o=Object.assign({},e.value);return a.createElement(d.Provider,{value:Object.assign({},o)},t)},u=()=>(0,a.useContext)(d);var m=c,p=o(99673),x=o(68054),g=o(55403),f=o(7029),h=o(87043);let b=p.ZP.footer`
  background-color: ${e=>(0,g.dF)("luContentPrimary")(e)};
`,v=p.ZP.p`
  color: ${e=>(0,g.uu)("lightest")(e)};
  font-size: ${e=>(0,g.R)("fontSizes.0")(e)}px;
  text-align: center;
  padding-top: 12px;
`,E=p.ZP.div``,C=p.ZP.a`
  cursor: pointer;
`,S=p.ZP.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 16px 2em;
`,k=(0,p.ZP)(f.Z)`
  max-width: 109px;
  max-height: 20px;
`,w=(0,p.ZP)(s.s1S).attrs(e=>({color:(0,g.dF)("luContentPrimary")(e)}))``,P=(0,p.ZP)(s.tLe).attrs(e=>({color:(0,g.dF)("luContentPrimary")(e)}))``,y=(0,p.ZP)(s.mre).attrs(e=>({color:(0,g.dF)("luContentPrimary")(e)}))``,Z=(0,p.ZP)(s.nzZ).attrs(e=>({color:(0,g.dF)("luContentPrimary")(e)}))``,$=p.ZP.div`
  background-color: ${e=>(0,g.dF)("base")(e)};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 12px;
  }
`,R=e=>{let{onBlogClick:t,onSocialMediaClick:o}=e,n=(0,l.Z)(e,["onBlogClick","onSocialMediaClick"]),{images:{blogImage:i}={},links:{blog:r,facebook:s,twitter:d,instagram:c,pinterest:m}}=u();return a.createElement(b,n,a.createElement(v,null,a.createElement("strong",null,"Lu do Magalu")," ","nas redes sociais"," ",""),a.createElement(S,null,i&&a.createElement(E,{onClick:t},a.createElement(C,{href:r},a.createElement(k,{src:i,alt:"Blog da Lu",lazy:!0}))),a.createElement(a.Fragment,null,[{id:"facebook",icon:w,link:s},{id:"twitter",icon:P,link:d},{id:"instagram",icon:y,link:c},{id:"pinterest",icon:Z,link:m}].filter(({link:e})=>Boolean(e)).map(({icon:e,link:t,id:n})=>a.createElement(E,{key:n},a.createElement(C,{"data-testid":"social-links",href:t,onClick:e=>o(e,{id:n,link:t})},a.createElement($,null,a.createElement(e,{titleAccess:`${n} logo`}))))))))};R.defaultProps={blogImage:"",blogLabel:"Blog da Lu",onBlogClick(){},onSocialMediaClick(){}};let A=p.iv`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${(0,g.aK)("medium")} {
    border-radius: 4px;
  }
`,O=(0,p.ZP)(h.rj).attrs(()=>({bg:"background.luContentPrimary",w:1}))`
  min-height: 83px;
  ${e=>!e.showBackButton&&!e.borderRadius&&A}
  grid-template-columns: 1fr 4fr 1fr;

  ${(0,g.aK)("medium")} {
    display: flex;
    align-items: center;
    min-height: 80px;
  }

  ${x.Cg}
  ${x.E0}
`,z=(0,p.ZP)(h.xu)`
  margin-top: 14px;
  margin-left: 10px;

  ${(0,g.aK)("large")} {
    margin-top: 0;
  }
`,I=(0,p.ZP)(h.kC).attrs(()=>({pl:[null,null,null,3]}))`
  ${(0,g.aK)("small")} {
    align-items: flex-end;
    align-self: flex-end;
    width: 100%;
  }
`,D=(0,p.ZP)(R)`
  ${(0,g.aK)("medium")} {
    margin: 1em ${(0,g.R)("space.3")}px 1em auto;
    min-width: 269px;

    > p {
      display: none;
    }

    > div {
      padding: unset;
    }
  }
`,j=(0,p.ZP)(f.Z)`
  width: 75px;
  max-height: 87px;
  margin-top: -5px;
`,T=(0,p.ZP)(h.kC).attrs({flexDirection:"column",justifyContent:"center",ml:"10px"})`
  ${(0,g.aK)("medium")} {
    align-self: center;
  }
`,L=(0,p.ZP)(f.Z)`
  ${(0,g.aK)("medium")} {
    height: 32px;
    width: auto;
  }
`,M=(0,p.ZP)(h.xv).attrs(()=>({color:"text.lightest",fontWeight:"bold",fontSize:3,lineHeight:"display",forwardedAs:"h2"}))`
  text-align: center;
  margin-top: 8px;

  ${e=>e.tiny&&p.iv`
      font-size: ${(0,g.R)("fontSizes.0")(e)}px;
      text-align: left;
      width: 190px;
      ${(0,g.aK)("medium")} {
        font-size: ${(0,g.R)("fontSizes.2")(e)}px;
        width: 100%;
      }
    `}
`,N=(0,p.ZP)(h.rU).attrs(()=>({color:"text.lightest",fontSize:0}))`
  margin-top: 10px;
  text-decoration: underline;
`,F=e=>{let{title:t,subtitle:o,showBackButton:n,onBackButtonClick:i,linkToMoreContentLabel:d,showLinkToMoreContent:c,showSocialMedias:m,onSocialMediaClick:p,iconName:x}=e,g=(0,l.Z)(e,["title","subtitle","showBackButton","onBackButtonClick","linkToMoreContentLabel","showLinkToMoreContent","showSocialMedias","onSocialMediaClick","iconName"]),f=o||t,{images:{luImage:h,luExplainImage:b}={},linkToMoreContent:v}=u()||{};return a.createElement(a.Fragment,null,a.createElement(O,(0,r.Z)({showBackButton:n,"data-testid":"lu-explain-header-container"},g),a.createElement(z,null,n&&a.createElement(s.JO$,{name:x,color:"#ffffff","data-testid":"lu-header-close",role:"button",title:"Voltar",tabIndex:"1",onClick:i,cursor:"pointer"})),a.createElement(I,null,a.createElement(j,{src:h,alt:"personagem Lu do magazineluiza apontando para o logo lu explica",width:60,height:80,lazy:!0}),a.createElement(T,null,a.createElement(L,{src:b,alt:"Lu Explica",width:127,height:24,lazy:!0}),f&&a.createElement(M,{tiny:!!o},f),c&&a.createElement(N,{"data-testid":"lu-explain-more-content",href:v},d)),m&&a.createElement(D,{onSocialMediaClick:p}))))};F.defaultProps={title:"",subtitle:null,showBackButton:!1,onBackButtonClick(){},linkToMoreContentLabel:"+ Veja outros conte\xfados",showLinkToMoreContent:!1,showSocialMedias:!1,onSocialMediaClick(){},iconName:"ArrowBack"};var U=o(84546);let q=U.Z,B=(0,p.ZP)(U.Z)`
  padding: 0 14px 14px 14px;
  img {
    width: 100% !important;
    height: auto !important;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: 20px;
  }
  a {
    color: ${e=>(0,g.uu)("primary")(e)};
    text-decoration: none;
  }
`,G=({children:e,title:t,visible:o,onBackButtonClick:r,direction:l})=>"center"===l?a.createElement(n.Z,{title:t,visible:o,onClickOutside:r,position:"center",p:"unset",my:"4em"},a.createElement("div",{style:{width:"100%"}},e)):a.createElement(i.Z,{direction:l,title:t,visible:o,onClickOutside:r,fullScreen:!0},e),W=({direction:e,title:t,subtitle:o,content:n,onBackButtonClick:i,images:r,visible:l,iconHeaderClose:s})=>a.createElement(m,{value:{images:r}},a.createElement(G,{direction:e,title:t,visible:l,onBackButtonClick:i},a.createElement(F,{title:t,subtitle:o,showBackButton:!0,onBackButtonClick:i,iconName:s}),a.createElement(B,{"data-testid":"lu-detail-content"},a.createElement(q,{dangerouslySetInnerHTML:{__html:n}}))));W.defaultProps={direction:"right",content:"",images:{},onBackButtonClick(){},subtitle:null,title:"",visible:!1,iconHeaderClose:"ArrowBack"};var H=W,J=o(19527);let K=p.ZP.div`
  ${({isVerticalView:e})=>e&&p.iv`
      margin: 36px 8px 20px;
      box-shadow: rgb(0 0 0 / 11%) 0px 1px 10px 0px;
    `}
`,_=(0,p.ZP)(J.Z).attrs(e=>Object.assign({bg:"background.white"},e))``;var Q=o(39146),V=o(63825),Y=o(25610);let X=p.ZP.a`
  text-decoration: none;
  cursor: pointer;
  ${e=>e.hide&&"display: none;"}
  ${(0,g.aK)("medium")} {
    width: calc(25% - ${7}px);
    &:not(:last-child) {
      margin-right: ${28}px;
    }
  }
`,ee=p.ZP.article`
  background-color: ${e=>(0,g.dF)("lighter")(e)};
  border-top: 1px solid ${e=>(0,g.dF)("darker")(e)};
  display: grid;
  padding: 16px;
  width: 100%;
  ${({vertical:e})=>!e&&"grid-template-columns: auto 1fr;"}
  ${({vertical:e})=>e&&p.iv`
      justify-items: left;
      padding: 16px 0px;
    `}
`,et=p.ZP.div`
  width: 100%;
  ${({vertical:e})=>!e&&"margin-right: 20px;"}
`,eo=(0,p.ZP)(f.Z)`
  width: 77px;
  border-radius: 4px;
  border: 1px solid ${e=>(0,g.uu)("lighter")(e)};

  ${({cover:e})=>e&&p.iv`
      object-fit: cover;
      height: 77px;
    `}

  ${({vertical:e})=>e&&p.iv`
      min-width: 300px;
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: fill;

      ${(0,g.aK)("medium")} {
        max-height: 500px;
        min-height: 168px;
        min-width: 224px;
        height: calc(
          900px /
            ${({variation:e,itemsSize:t})=>"horizontal-highlight"===e?t:4}
        );
        border-radius: 8px;
        object-fit: cover;
      }
    `}
`,ea=p.iv`
  margin-top: 10px;
  width: 250px;

  ${(0,g.aK)("large")} {
    max-width: 224px;
  }
`,en=p.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: ${({cover:e})=>e?"8px":"0px"};
  ${({vertical:e})=>e&&ea}
`,ei=p.ZP.div``,er=(0,p.ZP)(Y.Z).attrs(()=>({fontSize:[1,1,3,3]}))`
  color: ${e=>(0,g.uu)("luContentLink")(e)};
  font-weight: ${e=>(0,g.R)("fontWeights.medium")(e)};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`,el=(0,p.ZP)(V.Z).attrs(()=>({fontSize:[0,0,1,1]}))`
  margin-top: 8px;
  color: ${e=>(0,g.uu)("base")(e)};
  line-height: ${e=>(0,g.R)("lineHeights.plus")(e)}px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  ${x.cp}
`,es={article:"Blog",video:"Video",podcast:"Podcast"},ed=({data:e,cover:t,vertical:o,hide:n,onItemClick:i,onSubItemClick:r,dataTestId:l,itemsSize:d,variation:c})=>{let{type:u="article",title:m,subtitle:p,category:x,subcategory:g,image:f,url:b,urlPostSubcategory:v}=e;if(!m||!p)return a.createElement(a.Fragment,null);let E=es[u]||"Blog";return a.createElement(X,{role:"button",href:b,target:b&&"_blank","data-testid":l||"lu-item",onClick:t=>i(t,e),"aria-label":`Abre o conte\xfado do post ${m}`,hide:n},a.createElement(ee,{"data-testid":"lu-item-content",vertical:o},a.createElement(et,{vertical:o},a.createElement(eo,{src:f,alt:m,vertical:o,cover:t,itemsSize:d,variation:c,lazy:!0})),a.createElement(en,{vertical:o,cover:t,"data-testid":"article-content"},a.createElement(s.JO$,{title:`logo ${u}`,name:E}),a.createElement(ei,null,a.createElement(er,{as:"h3"},m),a.createElement(el,null,p),x&&g&&a.createElement(h.rU,{p:"8px 0",color:"text.base",fontWeight:"bold",onClick:e=>r(e,x,g),href:v},g.title)))))};ed.defaultProps={data:{},vertical:!1,cover:null,onItemClick(){},onSubItemClick(){},hide:!1,dataTestId:"",itemsSize:1};let ec=(e=[])=>Array.isArray(e)&&0!==e.length?e.reduce((e,t=[],o)=>[...e,...t.map((e,t)=>Object.assign({},e,{parentIdx:o,idx:t}))],[]):[],eu=({onItemClick:e})=>{let[t,o]=a.useState(0),{data:n}=u(),i=ec(n),r=i.filter(e=>0===e.idx);return a.createElement(a.Fragment,null,a.createElement(Q.lr,{bg:"background.lighter",slidesPerView:1,showPartial:!0,transitionDuration:700,auto:!1,showControls:!1,gutter:16,onChange:e=>o(e)},r.map(t=>a.createElement(ed,{key:t.id,vertical:!0,data:t,onItemClick:e}))),i.filter(e=>0!==e.idx).map(o=>{let n=o.parentIdx!==t;return a.createElement(ed,{key:o.id,data:o,hide:n,dataTestId:n?"item-hidden":"",cover:!0,onItemClick:e})}))};var em=o(60861);let ep=({onItemClick:e,onLoadMoreClick:t})=>{let{data:o,linkToMoreContent:n}=u(),i=ec(o),r=i.filter(e=>0===e.idx),l=i.filter(e=>0!==e.idx),s=e=>l.filter(t=>t.parentIdx===e.parentIdx);return a.createElement(U.Z,{bg:"background.lighter"},a.createElement(_,{itemsSize:r.length,padding:"0 10px"},r.map((t,o)=>a.createElement(U.Z,{key:t.id,marginRight:r.length-1===o?"0px":"28px",width:"100%"},a.createElement(ed,{vertical:!0,itemsSize:r.length,data:t,onItemClick:e,variation:"horizontal-highlight"}),s(t).map(t=>a.createElement(ed,{key:t.id,data:t,cover:!0,onItemClick:e,variation:"horizontal-highlight"}))))),a.createElement(J.Z,{justifyContent:"center",p:3},a.createElement(em.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:n,onClick:t},"Veja outros conte\xfados")))},ex=({onItemClick:e,onLoadMoreClick:t})=>{let{data:o,linkToMoreContent:n,hide:i}=u(),r=ec(o);return a.createElement(a.Fragment,null,a.createElement(_,{itemsSize:r.length},r.map(t=>a.createElement(ed,{key:t.id,vertical:!0,data:t,onItemClick:e,itemsSize:r.length}))),a.createElement(J.Z,{justifyContent:"center",p:3},a.createElement(em.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:n,onClick:t,hide:i},"Veja outros conte\xfados")))},eg=({onItemClick:e})=>{let{data:t}=u(),o=ec(t);return a.createElement(a.Fragment,null,null==o?void 0:o.map(t=>a.createElement(ed,{key:t.id,data:t,onItemClick:e})))},ef={carousel:eu,horizontal:ex,"horizontal-highlight":ep,vertical:eg},eh=({variation:e,title:t,linkToMoreContent:o,showLinkToMoreContent:n,data:i,assets:l,onItemClick:s,onSocialMediaClick:d,onLoadMoreClick:c,showHeaderSocialMedia:u})=>{let p="carousel"===e,{links:x,images:g}=l,f=(null==ef?void 0:ef[e])||eg;return a.createElement(m,{value:{images:g,data:i,links:x,linkToMoreContent:o}},a.createElement(K,{isVerticalView:"vertical"===e},a.createElement(F,(0,r.Z)({},p?{subtitle:t,borderRadius:0}:{title:t},{showLinkToMoreContent:n,onSocialMediaClick:d,showSocialMedias:u})),a.createElement(f,{onItemClick:s,onLoadMoreClick:c,variation:e}),p&&a.createElement(R,{onSocialMediaClick:d})))};eh.defaultProps={showDetailModal:!0,showLinkToMoreContent:!1,data:{articles:[],videos:[],podcasts:[]},detailDirection:"right",assets:{images:{luImage:"",luExplainImage:"",blogImage:""}},onSocialMediaClick(){},showHeaderSocialMedia:!1};var eb=eh},4294:function(e,t,o){o.d(t,{Z:function(){return S}});var a=o(7896),n=o(2784);o(13980);var i=o(87043),r=o(46514),l=o(99673),s=o(55403),d=o(84546),c=o(7029),u=o(63825);let m=l.ZP.div`
  background-color: ${e=>(0,s.dF)("white")(e)};
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(0,s.aK)("large")} {
    padding: 0;
  }
`,p=(0,l.ZP)(d.Z)`
  border-bottom: 3px solid ${e=>(0,s.kJ)("light")(e)};
  width: 100%;
`,x=(0,l.ZP)(d.Z)`
  display: flex;
  align-items: center;

  ${(0,s.aK)("large")} {
    &,
    & + div {
      display: none;
    }
  }
`,g=(0,l.ZP)(u.Z)`
  margin-bottom: 16px;
  font-size: ${e=>(0,s.R)("fontSizes.3")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};

  ${(0,s.aK)("large")} {
    align-self: self-start;
  }
`,f=(0,l.ZP)(d.Z)`
  ${(0,s.aK)("large")} {
    align-self: self-end;
    padding: 12px;
  }
`,h=l.ZP.ul`
  width: 100%;
`,b=l.ZP.button`
  outline: none;
  border-radius: 2px;
  padding: 10px 15px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  width: 250px;
  margin-bottom: 10px;

  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  background-color: ${e=>(0,s.dF)("white")(e)};
  border-color: ${e=>(0,s.kJ)("base")(e)};
  color: ${e=>(0,s.uu)("base")(e)};
  text-transform: uppercase;
  border: 1px solid ${e=>(0,s.kJ)("light")(e)};
`,v=(0,l.ZP)(u.Z)`
  max-width: 200px;
  margin-left: 10px;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,s.uu)("base")(e)};
  line-height: ${e=>(0,s.R)("lineHeights.plus")(e)}px;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
`,E=(0,l.ZP)(c.Z)`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
`;function C({productData:e,reviewsData:t,onViewMoreClick:o,onChangeSort:l,showDesktop:s}){let{title:d,image:c}=e||{},{stats:u={},reviews:C=[],sorts:S=[],pagination:k={}}=t||{},w=null==S?void 0:S.map(({label:e,type:t,orientation:o,selected:a})=>({label:e,selected:a,value:`${t}-${o}`})),P=e=>{if(e){let[t,o]=e.split("-"),a=null==S?void 0:S.find(({type:e,orientation:a})=>e===t&&a===o);l(a)}};return n.createElement(n.Fragment,null,n.createElement(x,{p:"16px"},n.createElement(E,{src:c,width:50,height:50}),n.createElement(v,null,d)),n.createElement(p,null),n.createElement(m,null,n.createElement(p,{m:"16px 0px",display:["none","block"]}),n.createElement(g,null,"Avalia\xe7\xe3o geral"),n.createElement(r.Ym,u),n.createElement(p,{m:"16px 0px"}),!s&&n.createElement(f,null,n.createElement(i.Ph,{id:"review-result",options:w,onChange:P,mb:20,"data-testid":"review-sort"})),s&&n.createElement(f,null,n.createElement(i.Ph,{id:"review-result",options:w,onChange:P,mb:20,"data-testid":"review-sort",desktopMode:!0,textLabel:"Ordenar avalia\xe7\xf5es:"})),n.createElement(h,null,null==C?void 0:C.map((e,t)=>n.createElement(r.Ak,(0,a.Z)({key:`review-${t}`},e)))),(null==k?void 0:k.page)<(null==k?void 0:k.pages)&&n.createElement(b,{"data-testid":"review-more",onClick:o},"Carregar Mais")))}C.defaultProps={showDesktop:!1};var S=C},1756:function(e,t,o){o.d(t,{Z:function(){return P}});var a=o(2784);o(13980);var n=o(76635),i=o.n(n),r=o(2490),l=o(78012),s=o(87043),d=o(55403),c=o(99673),u=o(68054),m=o(84546),p=o(10200);let x=(0,c.ZP)(m.Z).attrs(()=>({backgroundColor:"background.base",paddingBottom:5}))``,g=c.ZP.nav`
  ${u.e6}
  padding: 0 ${e=>(0,d.R)("space.2")(e)}px;
`,f=(0,c.ZP)(p.Z).attrs(()=>({backgroundColor:"primary.base",color:"text.lightest",paddingTop:3,paddingBottom:5,marginBottom:-5}))``,h=c.ZP.small`
  font-family: ${(0,d.R)("fontFamily")};
  display: block;
  margin: ${e=>(0,d.R)("space.1")(e)}px
    ${e=>(0,d.R)("space.2")(e)}px;
`,b=c.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
  justify-content: center;
  grid-gap: ${e=>(0,d.R)("space.4")(e)}px;
`,v=c.ZP.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,E=c.ZP.p`
  svg {
    margin-right: 2px;
  }
  display: flex;
  align-items: center;
`,C=c.ZP.div`
  padding: 10px 16px;
`;var S=o(93168);let k=({data:e,onMenuHeaderClick:t})=>{var o,n;let i=(null==(o=e.subtitles)?void 0:o.length)>0;return a.createElement(s.xu,{bg:"background.primary","data-testid":"sidebar-header"},a.createElement(s.ck,{scale:"medium",endIcon:"ChevronRight",fontWeight:"medium",variant:"primary",as:"a",ellipsis:null==e?void 0:e.ellipsis,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,onClick:o=>t(o,{url:null==e?void 0:e.url})},null==e?void 0:e.label),i&&e.subtitles.map(e=>a.createElement(h,{key:e},e)),a.createElement(S.Z,{variant:"primary"},null==e?void 0:null==(n=e.helpers)?void 0:n.map((e,o)=>a.createElement(S.Z.Item,{key:o,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:null==e?void 0:e.id,onClick:o=>t(o,e)},null==e?void 0:e.label))))};k.defaultProps={onMenuHeaderClick(){}};let w=e=>{var t,o,n,d,c,u,m;let{account:p,actionButtons:h,categoryList:S,externalLinks:w,header:P,helperText:y,salesChannels:Z,moreInformation:$,services:R,showcaseLinks:A,groupedLinks:O,social:z}=(null==e?void 0:e.data)||{},{onCollapsedClick:I,onMenuHeaderClick:D,onMenuItemClick:j,onLogout:T}=e,[L,M]=(()=>{if(Array.isArray(y)){let[e,...t]=y;return[e,t]}return[y||"",[]]})(),[N,F]=(0,a.useState)(!0),U=()=>{I(),F(!N)},[q,B]=(0,a.useState)([]),G=e=>{q.includes(e)?B(q.filter(t=>t!==e)):B([...q,e])};return a.createElement(x,null,P&&a.createElement(k,{data:P,onMenuHeaderClick:D}),a.createElement(g,null,!!(null!=A&&A.length)&&a.createElement(r.Z,{directionType:"column",items:A}),(null==O?void 0:O.map((e,t)=>a.createElement(s.xu,{bg:"white",borderRadius:4,marginBottom:10,marginTop:10,key:t},a.createElement(l.Z,{divided:!0},e.map((e,t)=>a.createElement(l.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,onClick:t=>j(t,e),startIcon:e.startIcon,fill:"background.primary","data-testid":"menu-item"},null==e?void 0:e.label))))))||null,(null==S?void 0:null==(t=S.list)?void 0:t.length)&&a.createElement(s.xu,{bg:"white"},a.createElement(l.Z.Collapse,{trigger:N,bg:"white",fill:"background.primary",collapsedIn:null==S?void 0:S.show,renderAction:N&&a.createElement(l.Z.Action,{endIcon:"ChevronDown",fontWeight:"medium",onClick:U},null==S?void 0:S.collapseText),divided:!0,"data-testid":"category-list"},null==S?void 0:null==(o=S.list)?void 0:o.map((e,t)=>{var o;return a.createElement(s.xu,{key:t,bg:"white",borderRadius:4},(null==e?void 0:e.subcategoriesList)&&a.createElement(s.UQ,{id:null==e?void 0:e.id,title:e.label,closeIcon:"ChevronUp",open:q.includes(t),onClick:()=>G(t),fontWeight:"regular",openIcon:"ChevronDown",mb:"1px"},a.createElement(s.xu,{bg:"#F4F4F4",borderRadius:4,height:"350px",overflow:"scroll"},null==e?void 0:null==(o=e.subcategoriesList)?void 0:o.map((e,t)=>a.createElement(C,{key:t},a.createElement(s.rU,{as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,color:e.highlight?"rgb(164, 0, 225)":null,onClick:t=>j(t,e,"subcategoria:")},null==e?void 0:e.label))))),!(null!=e&&e.subcategoriesList)&&a.createElement(l.Z,{divided:!0},a.createElement(l.Z.Item,{key:t,as:"a",href:(null==e?void 0:e.path)||(null==e?void 0:e.url),rel:null==e?void 0:e.rel,onClick:t=>j(t,e),startIcon:null!=e&&e.id?`Category${null==e?void 0:e.id}`:void 0,fill:"background.primary","data-testid":"menu-item",mb:"1px"},null==e?void 0:e.label)))}))),(null==w?void 0:null==(n=w.list)?void 0:n.length)&&a.createElement(s.xu,{mt:3},a.createElement(s.xv,{fontWeight:"medium",px:3,py:3},null==w?void 0:w.title),a.createElement(l.Z,{bg:"white",borderRadius:4,divided:!0},null==w?void 0:null==(d=w.list)?void 0:d.map((e,t)=>a.createElement(l.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:(null==e?void 0:e.id)&&`Logo${null==e?void 0:e.id}`,endIcon:null==e?void 0:e.endIcon,fontWeight:null==e?void 0:e.fontWeight,onClick:t=>j(t,e,"nossas-marcas:")},null==e?void 0:e.label)))),(null==R?void 0:null==(c=R.list)?void 0:c.length)&&a.createElement(s.xu,{mt:3},a.createElement(s.xv,{fontWeight:"medium",px:3,py:3},null==R?void 0:R.title),a.createElement(l.Z,{bg:"white",borderRadius:4,divided:!0},null==R?void 0:null==(u=R.list)?void 0:u.map((e,t)=>a.createElement(l.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:`Service${null==e?void 0:e.id}`,fill:"gray",onClick:t=>j(t,e,"servicos:")},null==e?void 0:e.label)))),(null==$?void 0:$.length)&&a.createElement(s.xu,{mt:2},a.createElement(l.Z,{bg:"white",borderRadius:4,divided:!0},null==$?void 0:$.map((e,t)=>a.createElement(l.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:null==e?void 0:e.id,fill:"gray",onClick:t=>j(t,e)},null==e?void 0:e.label)))),(null==h?void 0:h.length)&&a.createElement(s.xu,{mt:3},null==h?void 0:h.map((e,t)=>a.createElement(s.zx,{key:t,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,as:"a",color:"primary",startIcon:null==e?void 0:e.id,uppercase:!1,mb:2,centered:!0,full:!0,onClick:t=>j(t,e,"contato:")},null==e?void 0:e.label)))),L&&a.createElement(s.xu,{mt:4},a.createElement(s.xv,{fontSize:1,textAlign:"center",color:"darkGray"},L),a.createElement(v,{"data-testid":"sales-channels"},null==Z?void 0:Z.map(e=>a.createElement(E,{key:i().uniqueId("salesChannelsSideBar")},e.icon,a.createElement(s.xv,{fontSize:3,color:"darkGray"},e.label)))),null==M?void 0:M.map((e,t)=>a.createElement(s.xv,{key:t,fontSize:1,textAlign:"center",color:"darkGray",fontWeight:"medium"},e))),!!(null!=z&&null!=(m=z.links)&&m.length)&&a.createElement(s.xu,{m:3},a.createElement(s.xv,{fontSize:"small",py:2,textAlign:"center"},null==z?void 0:z.title),a.createElement(s.bo,{style:{margin:"0 auto 12px",width:"50%"}}),a.createElement(b,null,z.links.map((e,t)=>a.createElement("a",{key:t,rel:"noreferrer",href:null==e?void 0:e.url,target:"_blank",title:null==e?void 0:e.label},a.createElement(s.Ee,{src:null==e?void 0:e.img,alt:null==e?void 0:e.label}))))),(null==p?void 0:p.name)&&a.createElement(f,{"data-testid":"logout-link",onClick:T,href:null==p?void 0:p.signOutUrl,bg:"primary",underlineOnHover:!1,textAlign:"center",underline:!0,mt:4,py:3},"N\xe3o \xe9 ",null==p?void 0:p.name,"? Sair"))};w.defaultProps={onLogout(){},onMenuHeaderClick(){},onCollapsedClick(){},onMenuItemClick:()=>({}),groupedLinks:[]};var P=w},91061:function(e,t,o){o.d(t,{Z:function(){return g}});var a=o(2784);o(13980);var n=o(87043),i=o(39146),r=o(46514),l=o(33252),s=o(99673),d=o(55403),c=o(84546),u=o(63825);let m=(0,s.ZP)(c.Z)`
  display: flex;
  height: 40px;
  justify-content: space-around;
  box-shadow: -1px 2px 4px 0 rgba(0, 0, 0, 0.14);
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  background-color: ${e=>(0,d.ow)("background.base")(e)};
  color: ${e=>(0,d.ow)("text.scratched")(e)};

  > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${e=>(0,d.R)("colors.whisper")(e)};
  }

  > div:first-child {
    border-left-style: none;
  }
`,p=(0,s.ZP)(u.Z).attrs(e=>({color:(0,d.ow)("text.scratched")(e)}))``;var x=o(33359);function g({defaultDisplayMode:e,onChangeDisplayMode:t,onChangeSort:o,onFiltersClear:s,onFilterClick:d,onFilterItemClick:c,onFilterTypeClick:u,sortOptions:g,sortLabel:f,showSelectedOptionLabel:h,filters:b,showFilters:v,filtersCount:E,showDisplayType:C}){var S;let[k,w]=(0,a.useState)(!1),[P,y]=(0,a.useState)(!1),Z=()=>{y(!P),s()},$=()=>{d(!P),y(!P)};return a.createElement(a.Fragment,null,a.createElement(m,{fontSize:1},C&&!!t&&a.createElement(x.Z,{onChange:t,defaultMode:e}),null!=g&&g.length?a.createElement(n.xu,{p:1,onClick:()=>w(!k),"data-testid":"orderby-btn"},a.createElement(p,{"data-testid":"sort-label"},h&&(null==(S=g.find(e=>e.selected))?void 0:S.label)||f)):a.createElement(a.Fragment,null),v&&a.createElement(l.Z,{visible:P,filters:b,count:E,onItemClick:c,onOpen:$,onClickOutside:$,onClose:$,onClear:Z,onShowDetail:u})),null!=g&&g.length?a.createElement(r.YE,{headerTitle:f,visible:k,direction:"right",onClickOutside:()=>w(!1)},a.createElement(i.Ee,{options:g,onChange:function(e,t){o(t),w(!1)},p:"12px 0 12px 20px"})):a.createElement(a.Fragment,null))}g.defaultProps={defaultDisplayMode:"gallery",onChangeSort(){},onFiltersClear:()=>({}),onFilterClick:()=>({}),onFilterItemClick:{},sortLabel:"Ordenar por",sortOptions:[],showSelectedOptionLabel:!0,filters:{},filtersCount:0,showFilters:!1,showDisplayType:!1}},82709:function(e,t,o){o(72848),o(33252),o(15471),o(99852),o(70385),o(49647),o(42887),o(71782),o(95949),o(4294),o(1756),o(91061)},68609:function(e,t){let o={handleInitialLetters:e=>/[a-zA-Z]/.test(e)?e.toUpperCase():"",handleFirstDigit:e=>/[0-9]/.test(e)?`-${e}`:"",handleDigitOrLetter:e=>/[a-zA-Z0-9]/.test(e)?e.toUpperCase():"",handleFinalDigits:e=>/[0-9]/.test(e)?e:"",stop:()=>""},a=e=>e<3?"handleInitialLetters":3===e?"handleFirstDigit":4===e?"handleDigitOrLetter":e<7?"handleFinalDigits":"stop",n=e=>{let t=String(e).replace(/[^a-zA-Z0-9]/g,""),n="",i=0;for(let r=0;r<t.length&&!(n.length>=8);r+=1){let l=a(i),s=o[l](t[r]);s&&(n+=s,i+=1)}return n};t.Z=n},13111:function(e,t){let o=e=>/^[\w-]+(\.[\w-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,20})$/i.test(e);t.Z=o},15312:function(e,t){t.Z=e=>e&&e.trim().split(" ").length>1||!1},98047:function(e,t){let o=(e,t)=>e.find(e=>(null==e?void 0:e.value)===t);t.Z=o},86349:function(e,t,o){o.d(t,{kC:function(){return n},lb:function(){return M},vQ:function(){return i},qJ:function(){return l},Ji:function(){return G},bd:function(){return F},Qd:function(){return j},J5:function(){return N},lm:function(){return z},KF:function(){return s.Z},xx:function(){return y.Z},rx:function(){return g},Z4:function(){return x},RZ:function(){return m},zY:function(){return h},az:function(){return W},$7:function(){return B},ie:function(){return q},hY:function(){return w},gf:function(){return P.Z},IC:function(){return S},yH:function(){return v},O:function(){return $},t$:function(){return R},Ay:function(){return A},CK:function(){return c.Z}});let a=e=>"string"!=typeof e?"":e.toLowerCase().charAt(0).toUpperCase()+e.slice(1);var n=a;async function i(e){var t,o;if(null!=(t=navigator)&&null!=(o=t.clipboard)&&o.writeText)try{return await navigator.clipboard.writeText(e),!0}catch(a){return console.error("Erro ao copiar para a \xe1rea de transfer\xeancia:",a),!1}let n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select();let i=!1;try{i=document.execCommand("copy")}catch(r){console.error("Erro ao copiar o texto usando fallback:",r)}return document.body.removeChild(n),i}let r=e=>{if(!e||"string"!=typeof e||!e.includes("www.youtube.com/v/"))return e;let t=e.match(/v\/([a-zA-Z0-9_-]+)&?/),o=null!=t&&t.length?t[1]:null;return o?`https://www.youtube.com/embed/${o}`:e};var l=r,s=o(98047);let d=(e,t="")=>{let o=e;return t.length<o?t:(3===o&&(o+=3),`${t.substr(0,o-3)}...`)};var c=o(7874);let u=({zipCode:e="",zipCodeCity:t="",zipCodeState:o="",maxCityLength:a=24,formatter:n=(e,t)=>`${e.toUpperCase()}, ${t.toUpperCase()}`,includeAddress:i=!0}={})=>{let r=t&&"string"==typeof t?d(a,t):"",l=e&&"string"==typeof e?e:"",s=n(r,o&&"string"==typeof o?o:"");return i?`${s} - ${(0,c.Z)(l)}`:(0,c.Z)(l)};var m=u;o(63113);let p=(e,t,o)=>t<=e&&e<=o,x=(e,t,o,a)=>p(e,o,a)&&e<t,g=(e,t,o,a)=>p(e,o,a)&&e>t,f=e=>{let t=(null==e?void 0:e.length)>1?"dos seguros":"do seguro",o=e.join(", ").replace(/, ([^,]*)$/," e $1").toLowerCase();return`${t} ${o}`};var h=f;let b=(e=[],t=[])=>t.map(t=>e.find(e=>Number(null==e?void 0:e.id)===t));var v=b;let E=(e=[],t=null)=>{if(!t)throw Error("Invalid parameter [key]");return e.length?e.reduce((e,o)=>Object.assign({},e,{[o[t]]:o}),{}):{}},C=(e=[],t=[])=>{if(!t.length||!e.length)return e;if(!t.every(e=>"string"==typeof e))throw Error("Invalid parameter [orderBy]");let o=E(e,"id"),a=Object.keys(o).filter(e=>!t.includes(e)),n=t.map(e=>o[e]).slice(0,e.length),i=a.map(e=>o[e]);return[...n,...i]};var S=C;let k=(e={})=>(t=[])=>{var o;let a=(null==e?void 0:null==(o=e.values)?void 0:o.reduce((e,o)=>{let a=(0,s.Z)(t,o);return Object.assign({},e,{[o]:null==a?void 0:a.available})},{}))||{};return Object.entries(a).sort(([,e],[,t])=>t-e).map(([e])=>e)};var w=k,P=o(41869),y=o(97728),Z=o(2784),$=(e,t,o="block")=>{(0,Z.useEffect)(()=>{let a=()=>{Object.values(e).forEach(e=>{e.current.style.display=o}),Object.values(e).filter(e=>e.current.offsetLeft+e.current.offsetWidth>t.current.offsetWidth+t.current.offsetLeft).forEach(e=>{e.current.style.display="none"})};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[t.current])},R=(e,t)=>{(0,Z.useEffect)(()=>{let o=o=>{!(!e.current||e.current.contains(o.target))&&t(o)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,t])},A=(e,t)=>{(0,Z.useEffect)(()=>{let o=()=>t(!0),a=()=>t(!1),n=null==e?void 0:e.current;if(n)return n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",a),()=>{n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",a)}},[e])};let O=(e,t)=>e.some(e=>(null==e?void 0:e.value)===t&&(null==e?void 0:e.available)===!0);var z=O,I=o(71180);let D=e=>{let{discountValue:t,discountType:o}=e||{};if("number"!=typeof t||t<=0)return null;let a=Math.trunc(t),n={percentage:`${a}% OFF`,absolute:`${(0,I.oB)({value:a,decimal:!1,locale:"pt-br"}).replace(/\u00A0/g," ")} OFF`};return n[o]||null};var j=D;let T=36e5,L=e=>String(e).padStart(2,"0");function M(e,t){if(!e)return{show:!1,timeRemainingFormatted:"00:00:00"};let{timer_start_date:o,timer_end_date:a}=e||{},n=new Date(t).getTime(),i=new Date(o).getTime(),r=new Date(a).getTime();if(!i||!r||n<i||r<=n)return{show:!1,timeRemainingFormatted:"00:00:00"};let{hours:l,minutes:s,seconds:d}=function(e){let t=Math.floor(e/T);e%=T;let o=Math.floor(e/6e4);e%=6e4;let a=Math.floor(e/1e3),n=void 0===t||void 0===o||void 0===a||Number.isNaN(t)||Number.isNaN(o)||Number.isNaN(a);return n?"":{hours:t,minutes:o,seconds:a}}(r-n),c=`${L(l)}:${L(s)}:${L(d)}`;return{show:!0,timeRemainingFormatted:c}}function N(e){if("string"!=typeof e||!e.trim())return"";let[t,o]=e.split(":").map(Number),a=void 0===t||void 0===o||Number.isNaN(t)||Number.isNaN(o);return a?"":`PT${t}H${o}M`}function F(){let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/Sao_Paulo"})),o=t.getFullYear(),a=L(t.getMonth()+1),n=L(t.getDate()),i=L(t.getHours()),r=L(t.getMinutes()),l=L(t.getSeconds());return`${o}-${a}-${n}T${i}:${r}:${l}`}o(68609);var U=o(99673);let q=U.F4`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`,B=U.F4`
  from { transform: translateY(100%);}
  to { transform: translateY(0); }
`,G=U.F4`
  from { opacity: 0; }
  to { opacity: 1; }
`,W=U.F4`
  from { opacity: 0.5; -webkit-transform: scale(0.5); transform: scale(0.5); }
  to { opacity: 1; -webkit-transform: scale(0.5); transform: scale(1); }
`},97728:function(e,t,o){var a=o(12468);t.Z=({currency:e=a.wp}={})=>e!==a.wp},63113:function(e,t,o){var a=o(71180);let n=e=>{let t=e;"string"==typeof e&&(t=e.replace(".","").replace(",","").replace(/\D/g,""));let o=Number.isNaN(t)||""===t?0:t,n=(0,a.oB)({value:o,rightFilling:!0});return{amount:o,currency:n}};t.Z=n},41869:function(e,t){let o=(e=[])=>e.sort((e,t)=>(null==t?void 0:t.selected)-(null==e?void 0:e.selected));t.Z=o},82260:function(e,t){let o=(e=[])=>e.sort((e,t)=>parseFloat(e.value)-parseFloat(t.value)).reverse();t.Z=o},7874:function(e,t){let o=e=>e.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(\d{5})(\d{3})/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1");t.Z=o},36631:function(e,t,o){o.d(t,{Z:function(){return r}});var a=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function n(e,t){return!!(e===t||a(e)&&a(t))}function i(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!n(e[o],t[o]))return!1;return!0}function r(e,t){void 0===t&&(t=i);var o=null;function a(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];if(o&&o.lastThis===this&&t(a,o.lastArgs))return o.lastResult;var i=e.apply(this,a);return o={lastResult:i,lastArgs:a,lastThis:this},i}return a.clear=function(){o=null},a}}}]);
//# sourceMappingURL=9551-1ad85aa94c8d0dbf.js.map