"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8621],{93837:function(e,t){let n={"pt-br":"BRL","en-US":"USD"},r=({value:e="",locale:t="pt-br",rightFilling:r=!1,decimal:i=!0})=>new Intl.NumberFormat(t,{style:"currency",currency:n[t],minimumFractionDigits:i?2:0,maximumFractionDigits:i?2:0}).format(r?parseFloat(e/100):e);t.Z=r},41544:function(e,t,n){n.d(t,{Z:function(){return l}});let r={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function i(e,t){let n;return`${"string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t)}`}let o=(e,t)=>{let n=parseInt(Math.abs(new Date(e)-new Date(t))/6e4,10),r=Math.abs((new Date(e)-new Date(t))/1e3),o=Math.abs(e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear()));if(n<2)return r<40?i("halfAMinute",null):r<60?i("lessThanXMinutes",1):i("xMinutes",n);if(n<45)return i("xMinutes",n);if(n<90)return i("aboutXHours",1);if(n<1440)return i("aboutXHours",Math.round(n/60));if(n<2520)return i("xDays",1);if(n<43200)return i("xDays",Math.round(n/1440));if(n<86400)return i("aboutXMonths",Math.round(n/43200));if(o<12)return i("xMonths",Math.round(n/43200));let l=o%12,a=Math.floor(o/12);return l<3?i("aboutXYears",a):l<9?i("overXYears",a):i("almostXYears",a+1)};var l=o},71180:function(e,t,n){n.d(t,{jL:function(){return i.Z},oB:function(){return r.Z}});var r=n(93837),i=n(41544)},8719:function(e,t){let n=(e=300)=>{let t=-window.scrollY/(e/15),n=setInterval(()=>{0!==window.scrollY?window.scrollBy(0,t):clearInterval(n)},15)};t.Z=n},50616:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(19527),d=n(99673),u=n(55403),c=n(81572);let s={text:d.iv`
    font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
    line-height: ${e=>(0,u.R)("lineHeights.plus")(e)}px;
    color: ${e=>(0,u.uu)("scratched")(e)};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${e=>e.open?d.iv`
            max-height: 54px;
            margin-bottom: 16px;
          `:d.iv`
            max-height: 0px;
          `}
  `,component:d.iv`
    max-height: ${e=>e.open?"100%":"0px"};
  `},p=(0,d.ZP)(c.Z).attrs(e=>Object.assign({cursor:"pointer",outline:"none",py:0,gap:0},e))``,f=(0,d.ZP)(p.Header)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding-right: 8px;
`,m=(0,d.ZP)(p.Content)`
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  ${e=>e.isText?s.text:s.component}
`,h=d.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
  justify-content: center;
  padding: 8px;
  grid-gap: ${e=>(0,u.R)("space.4")(e)}px;
`;var g=n(25610);let v=(0,o.forwardRef)((e,t)=>{let{asTitle:n,children:d,id:u,textAlign:c,openIcon:s,closeIcon:v,title:b,innerControl:x,open:$,fontSize:Z,fontWeight:w,onClick:y}=e,k=(0,i.Z)(e,["asTitle","children","id","textAlign","openIcon","closeIcon","title","innerControl","open","fontSize","fontWeight","onClick"]),[C,E]=(0,o.useState)(!1),P=u?`Category${u}`:void 0,R=()=>{E(!C),y()};return o.createElement(p,(0,r.Z)({ref:t},k),o.createElement(f,{scale:"large",fill:"background.dark",endIcon:$?v:s,onClick:R},o.createElement(a.Z,{justifyContent:"flex-start",alignItems:"center"},P&&o.createElement(h,null,o.createElement(l.JO$,{name:P,fill:"background.primary"})),o.createElement(g.Z,{as:n,fontSize:Z,fontWeight:w},b))),o.createElement(m,{open:x?C:$,isText:"string"==typeof d,textAlign:c},d))});v.defaultProps={asTitle:"h2",children:null,textAlign:"justify",openIcon:"ChevronRight",closeIcon:"ChevronRight",innerControl:!1,open:!1,fontSize:2,fontWeight:"medium"},v.displayName="Accordion";var b=v},59120:function(e,t,n){n.d(t,{W:function(){return o},z:function(){return i}});var r=n(99673);let i=r.iv`
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`,o=r.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  ${i}

  ${({noHover:e})=>!e&&r.iv`
      &:hover:not(:disabled) {
        transform: scale(1.1);
      }
    `}
`},66685:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(59120);function a(e){let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(l.W,(0,r.Z)({"data-testid":"base-button",role:"button"},n),t)}a.defaultProps={noHover:!1,onClick(){}};var d=a},84546:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784),l=n(13980),a=n(99673),d=n(55403),u=n(68054);let c=a.ZP.div({boxSizing:"border-box",cursor:({touch:e})=>e?"pointer":"inherit"},(0,u.qC)(u.Oq,u.Cg,u.bK,u.FK,u.AF,u.Dh,u.yd,u.cp,d.$_),d.Tf),s=o.forwardRef((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]);return o.createElement(c,(0,r.Z)({ref:t},l),n)});s.propTypes={children:(0,l.oneOfType)([l.element,l.string,(0,l.arrayOf)(l.element),l.node])},s.defaultProps={children:void 0},s.displayName="Box";var p=s},60861:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(99673),d=n(68054),u=n(55403);let c={auto:a.iv`
    height: auto;
    min-width: auto;
  `,small:a.iv`
    height: 32px;
    min-width: 80px;
    font-size: ${e=>(0,u.R)("fontSizes.0")(e)}px;
  `,medium:a.iv`
    height: 44px;
    min-width: 140px;
    font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  `,large:a.iv`
    height: 52px;
    min-width: 180px;
    font-size: ${e=>(0,u.R)("fontSizes.2")(e)}px;
  `},s={fill:a.iv`
    ${e=>{var t,n,r,i;return`
      background-color: 
        ${null!=(t=e.customColor)&&t.default?null==(n=e.customColor)?void 0:n.default:(0,u.ow)("base")(e)};
      color: ${(0,u.uu)("lightest")(e)};
      svg {
        fill: ${(0,u.uu)("lightest")(e)};
      }

      &:hover {
        background-color: 
        ${null!=(r=e.customColor)&&r.hover?null==(i=e.customColor)?void 0:i.hover:(0,u.ow)("dark")(e)};
        color: ${(0,u.uu)("lightest")(e)};
      }
    `}};

    ${e=>e.disabled&&`
      &,
      &:hover {
        background-color: ${(0,u.ow)("background.whisper")(e)};
        color: ${(0,u.uu)("scratched")(e)};
        svg {
          fill: ${(0,u.uu)("scratched")(e)};
        }
      }
    `};

    ${e=>{var t,n,r,i,o,l,a,d,c,s;return!e.disabled&&e.invertedColors&&`
      background-color: 
        ${null!=(t=e.customColor)&&t.default?null==(n=e.customColor)?void 0:n.default:(0,u.ow)("base")(e)};
      color:
        ${null!=(r=e.customColor)&&r.hover?null==(i=e.customColor)?void 0:i.hover:(0,u.uu)("lightest")(e)};
      svg {
        fill: ${(0,u.uu)("lightest")(e)};
      }

      &:hover {
        background-color:
          ${null!=(o=e.customColor)&&o.hover?null==(l=e.customColor)?void 0:l.hover:(0,u.uu)("lightest")(e)};
        color: ${null!=(a=e.customColor)&&a.default?null==(d=e.customColor)?void 0:d.default:(0,u.ow)("base")(e)};
        svg {
          fill: ${null!=(c=e.customColor)&&c.hover?null==(s=e.customColor)?void 0:s.hover:(0,u.ow)("base")(e)};
        }
      }
    `}};
  `,outline:a.iv`
    ${e=>{var t,n,r,i,o,l,a,d,c,s,p,f;return`
    background-color: transparent;
    box-shadow: inset 0 0 0 1px
      ${null!=(t=e.customColor)&&t.default?null==(n=e.customColor)?void 0:n.default:(0,u.ow)("base")(e)};
    color: ${null!=(r=e.customColor)&&r.default?null==(i=e.customColor)?void 0:i.default:(0,u.ow)("base")(e)};
    svg {
      fill: ${null!=(o=e.customColor)&&o.default?null==(l=e.customColor)?void 0:l.default:(0,u.ow)("base")(e)};
    }

    &:hover {
      box-shadow: inset 0 0 0 1px
        ${null!=(a=e.customColor)&&a.hover?null==(d=e.customColor)?void 0:d.hover:(0,u.ow)("dark")(e)};
      color: ${null!=(c=e.customColor)&&c.hover?null==(s=e.customColor)?void 0:s.hover:(0,u.ow)("dark")(e)};
      svg {
        fill: ${null!=(p=e.customColor)&&p.hover?null==(f=e.customColor)?void 0:f.hover:(0,u.ow)("dark")(e)};
      }
    }
  `}}

    ${e=>e.disabled&&`
      &,
      &:hover {
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${(0,u.uu)("lighter")(e)};
        color: ${(0,u.uu)("lighter")(e)};
        svg {
          fill: ${(0,u.uu)("lighter")(e)};
        }
      }
    `}
  `},p=a.ZP.span`
  grid-area: start;
  svg {
    vertical-align: middle;
    float: left;
  }
`,f=a.ZP.label`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-weight: ${e=>(0,u.R)("fontWeights.medium")(e)};
  text-align: center;
  margin-top: 1px;
  grid-area: label;
  align-self: center;
  small {
    font-weight: ${e=>(0,u.R)("fontWeights.medium")(e)};
    text-transform: none;
    display: block;
  }
`,m=a.ZP.span`
  grid-area: end;
  svg {
    vertical-align: middle;
    float: right;
  }
`,h=a.ZP.button`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-family: ${e=>(0,u.R)("fontFamily")(e)};
  outline: none;
  border: none;
  border-radius: ${e=>e.rounded?"30px":"4px"};
  padding: 0px 15px;
  width: ${e=>e.full?"100%":"auto"};
  display: grid;
  grid-column: ${e=>e.gridColumn||"unset"};
  grid-template-areas: ${e=>e.startIcon||e.endIcon?"'start label end'":"'label'"};
  ${e=>{let{centered:t}=e,n=(0,i.Z)(e,["centered"]);return t?a.iv`
          grid-template-columns: '';
          grid-gap: 0px
            ${n.startIcon||n.endIcon?(0,u.R)("space.2")(n):0}px;
        `:a.iv`
          grid-template-columns: ${n.startIcon||n.endIcon?"1fr 4fr 1fr":"auto"};
        `}}
  justify-content: center;
  align-content: center;
  text-decoration: none;
  ${f} {
    ${({uppercase:e})=>e&&a.iv`
        text-transform: uppercase;
      `}
  }
  ${e=>c[e.size]||c.medium}
  ${e=>s[e.variation]||s.fill}
  ${d.Dh}
  ${d.bK}
  ${d.cp}
`,g=e=>{let{onClick:t}=e,n=(0,i.Z)(e,["onClick"]),{startIcon:a,endIcon:d,children:u,disabled:c}=n,s=e=>"string"==typeof e?o.createElement(l.JO$,{name:e}):e;return o.createElement(h,(0,r.Z)({onClick:e=>t(e)},n),a&&o.createElement(p,null,s(a)),o.createElement(f,{disabled:c},u),d&&o.createElement(m,null,s(d)))};g.defaultProps={centered:!1,children:void 0,color:"primary",customColor:{default:null,hover:null},disabled:!1,invertedColors:!1,onClick(){},rounded:!1,size:"medium",uppercase:!0,variation:"fill"},g.displayName="Button";var v=g},27439:function(e,t,n){n.d(t,{ZP:function(){return y}});var r=n(7896),i=n(31461),o=n(2784),l=n(13980),a=n(99673),d=n(55403),u=n(68054),c=n(63825),s=n(25610),p=n(19527),f=n(7029);let m=e=>a.iv`
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e};
`,h=a.ZP.a.withConfig({shouldForwardProp:(e,t)=>!!(e.includes("ads-")||e.includes("redirect"))||t(e)}).attrs(e=>Object.assign({},e))({transition:"box-shadow ease 0.4s",textDecoration:"none",cursor:"pointer",display:"grid",overflow:"hidden",gridTemplateAreas:'"image" "body"',justifyContent:"space-between",borderRadius:(0,d.R)("radii.default")},e=>{let{enableHover:t}=e,n=(0,i.Z)(e,["enableHover"]);return t&&{":hover":{boxShadow:(0,d.R)("boxShadows.4")(n)}}},(0,u.qC)(u.Oq,d.$_,u.Dh,u.eC,u.bK,u.fU),d.Tf),g=(0,a.ZP)(f.Z).attrs(e=>Object.assign({imageWidth:"100%",imageHeight:"100%",objectFit:"cover"},e))`
  grid-area: image;
`,v=(0,a.ZP)(p.Z).attrs(e=>Object.assign({color:"inherit",background:"inherit",padding:"16px 14px",flexDirection:"column"},e))`
  grid-area: body;
`,b=(0,a.ZP)(s.Z).attrs(e=>Object.assign({fontSize:6,color:"inherit",lineHeight:"1.2em"},e))`
  ${({truncate:e,lines:t=2})=>e&&m(t)}
`,x=(0,a.ZP)(c.Z).attrs(e=>Object.assign({forwardedAs:"small",color:"inherit",display:"block",fontSize:0,marginTop:2},e))`
  ${({truncate:e,lines:t=2})=>e&&m(t)}
`,$=(0,a.ZP)(c.Z).attrs(e=>Object.assign({fontSize:2,fontWeight:"light",lineHeight:"1.5em",color:"inherit",marginTop:"3"},e))`
  ${({truncate:e,lines:t=4})=>e&&m(t)}
`,Z=o.forwardRef((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]);return o.createElement(h,(0,r.Z)({ref:t},l),n)});Z.displayName="Card",Z.Image=g,Z.Title=b,Z.Subtitle=x,Z.Text=$,Z.Body=v;let w={truncate:l.bool,lines:l.number};Z.Title.propTypes=Object.assign({},w),Z.Subtitle.propTypes=Object.assign({},w),Z.Text.propTypes=Object.assign({},w);var y=Z},18281:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(55403),d=n(19527);let u=(0,l.ZP)(d.Z).attrs(e=>{let{color:t,disabled:n}=e;return Object.assign({alignItems:"center",color:n?"text.gray":t},(0,i.Z)(e,["color","disabled"]))})``,c=l.ZP.input.attrs(()=>({type:"checkbox"}))`
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;

  &:not(:checked) {
    border-radius: ${(0,a.R)("radii.medium")};
    border: ${(0,a.R)("borders.1")};
  }

  &:checked {
    &:after {
      content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmdJZCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0ic2MtYlpReW5NIGpjVFFtYyI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiLz48L3N2Zz4=');
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${(0,a.dF)("primary")};
      border-radius: ${(0,a.R)("radii.medium")};
      box-sizing: border-box;
    }

    &:disabled {
      &:after {
        background: ${(0,a.dF)("dark")};
      }
    }
  }
`,s=(0,o.forwardRef)((e,t)=>{let{children:n,checked:l,defaultChecked:a,disabled:d,value:s,onChange:p,label:f,name:m,as:h}=e,g=(0,i.Z)(e,["children","checked","defaultChecked","disabled","value","onChange","label","name","as"]),v=o.createElement(c,{onChange:e=>p(e,s),checked:l,disabled:d,defaultChecked:a,ref:t,value:s,name:m,"data-testid":"checkbox-item"});return n||f?o.createElement(u,(0,r.Z)({forwardedAs:h,disabled:d},g,{"data-testid":"checkbox"}),v,f||n):v});s.defaultProps={children:null,disabled:!1,color:"text.base",as:"label",gap:2,onChange(){}},s.displayName="Checkbox";var p=s},17781:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(68054),d=n(55403);let u="primary",c={light:d.rS.palette.text.white,dark:d.rS.palette.text.base},s=`
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
`,p=`
  ${s}
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,f={xsmall:"18px",small:"28px",medium:"38px"},m=({props:e,variation:t,checked:n=!1})=>{let{bg:r,type:i,scales:o=c}=e,a={colorfulTransition:l.iv`
      ${s}
      background-color: ${(0,d.dF)(r||u)(e)};
      color: ${(0,d.jk)(r||u,o)(e)};
      > svg {
        ${s}
        fill: ${(0,d.jk)(r||u,o)(e)};
      }
    `,colorful:l.iv`
      ${s}
      background-color: ${(0,d.dF)(r||u)(e)};
      color: ${(0,d.jk)(r||u,o)(e)};
      > svg {
        ${s}
        fill: ${(0,d.jk)(r||u,o)(e)};
      }
    `,default:l.iv`
      background-color: ${(0,d.dF)("white")(e)};
      color: ${(0,d.jk)("white",o)(e)};
    `},p=r&&(n||!i.includes("radio","checkbox"))?"colorful":"default";return a[t||p]},h=l.ZP.div`
  ${a.e6}
  ${a.bK}
  text-decoration: none;
`,g=l.ZP.label`
  display: flex;
  justify-content: ${({justify:e})=>e};
  align-items: center;
  border: ${({hasBorder:e})=>e?"1px solid":"none"};
  scroll-snap-align: center;
  border-radius: ${e=>(0,d.R)("space.4")(e)}px;

  min-width: ${({minWidth:e})=>e};
  height: ${e=>f[null==e?void 0:e.size]};

  ${e=>m({props:e})};

  ${({autoSize:e})=>e?l.iv`
          justify-content: space-around;
          width: auto;
          min-width: auto;
          height: auto;
          padding: ${(0,d.R)("space.2")}px ${(0,d.R)("space.2")}px;
        `:l.iv`
          max-width: ${({maxWidth:e})=>e};
        `}

  ${p}
  ${s}
  ${a.E0}
  ${a.o3}
  ${a.JB}
  ${a.Ue}
  ${a.Cc}
`,v=l.ZP.p`
  max-width: ${({textMaxWidth:e})=>e};
  font-size: inherit;
  font-weight: inherit;
  line-height: ${e=>(0,d.R)("lineHeights.standard")(e)}px;
  font-stretch: normal;
  letter-spacing: normal;

  ${e=>{let{color:t}=e,n=(0,i.Z)(e,["color"]);return t&&l.iv`
      color: ${(0,d.uu)(t)(n)};
    `}}

  ${({autoSize:e})=>e&&l.iv`
      max-width: 100%;
    `};
`,b=l.ZP.input`
  ${p}
  display: none;

  &:checked + ${g} {
    ${e=>m({props:e,variation:"colorfulTransition",checked:!0})};
  }
`,x=e=>{let{as:t,checked:n,clickable:l,startIcon:a,children:d,autoSize:u,endIcon:c,value:s,color:p,gridGap:f,size:m,name:x,type:$,id:Z,bg:w,scales:y,onChange:k,onClick:C,hasBorder:E,textMaxWidth:P}=e,R=(0,i.Z)(e,["as","checked","clickable","startIcon","children","autoSize","endIcon","value","color","gridGap","size","name","type","id","bg","scales","onChange","onClick","hasBorder","textMaxWidth"]),z=e=>{var t,n;k({value:null==e?void 0:null==(t=e.target)?void 0:t.value,selected:null==e?void 0:null==(n=e.target)?void 0:n.checked})};return o.createElement(h,(0,r.Z)({},R,{as:l?t||"a":t||"div","data-testid":"chip-container"}),$&&o.createElement(b,{"data-testid":"chip-input",checked:n,onChange:z,value:s,type:$,name:x,bg:w,scales:y,id:Z}),o.createElement(g,(0,r.Z)({"data-testid":"chip-label",onClick:C,gridGap:f,clickable:l,startIcon:a,autoSize:u,endIcon:c,size:m,htmlFor:Z,bg:w,type:$,hasBorder:E,scales:y},R,l&&{onChange:k}),a,o.createElement(v,{autoSize:u,clickable:l,color:p,bg:w,textMaxWidth:P},d),c))};x.defaultProps={onChange(){},onClick(){},type:"",clickable:!1,startIcon:null,size:"medium",children:null,gridGap:2,bg:"",fontSize:0,fontWeight:"regular",hasBorder:!1,endIcon:null,value:"",color:"",name:"",id:"",justify:"center",minWidth:"66px",maxWidth:"144px",textMaxWidth:"60%"};var $=x},88699:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(8341);let d=(0,l.ZP)(a.Z)`
  display: grid;
  ${({trigger:e,collapsedIn:t})=>e&&l.iv`
      > *:nth-child(n + ${t}) {
        display: none;
        overflow: hidden;
        max-height: 0;
      }
    `};
`,u=e=>{let{children:t,trigger:n,collapsedIn:l}=e,a=(0,i.Z)(e,["children","trigger","collapsedIn"]);return o.createElement(d,(0,r.Z)({trigger:n,collapsedIn:l+1,"data-testid":"collapse"},a),o.Children.toArray(t).map(e=>o.isValidElement(e)&&o.cloneElement(e)))};u.defaultProps={trigger:!1,children:null,collapsedIn:0},u.displayName="Collapse";var c=u},58331:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(19527),d=n(63825);let u={like:{icon:"Like"},dislike:{icon:"Dislike"}};var c=function(e){let{type:t,label:n,onClick:c,color:s}=e,p=(0,i.Z)(e,["type","label","onClick","color"]),{icon:f}=u[t];return o.createElement(a.Z,(0,r.Z)({alignItems:"center",onClick:c},p),o.createElement(l.JO$,{name:f,color:s,cursor:"pointer"}),o.createElement(d.Z,{ml:"6px"},n))}},37270:function(e,t,n){n.d(t,{Dx:function(){return m},W2:function(){return f},Xk:function(){return v},aV:function(){return p},bo:function(){return g},f:function(){return x},h4:function(){return b},yW:function(){return h}});var r=n(99673),i=n(55403),o=n(86349),l=n(84546),a=n(19527),d=n(63825);let u={top:r.iv`
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    animation: ${o.ie} 0.3s ease-in-out;
  `,center:r.iv`
    margin: 15px;
    animation: ${o.Ji} 0.3s ease-in;
  `,bottom:r.iv`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    animation: ${o.$7} 0.3s ease-in-out;
  `},c=({type:e,fullScreen:t})=>t?r.iv`
      width: 100%;
      border-radius: ${(0,i.R)("radii.default")};
    `:"alert"===e?r.iv`
      width: 300px;
      border-radius: ${(0,i.R)("radii.medium")};
    `:"responsive"===e?r.iv`
      padding: ${(0,i.R)("space.4")}px;
      border-radius: ${(0,i.R)("radii.default")};
      overflow-x: hidden;
    `:"full"===e?r.iv`
      max-width: 1366px;
      width: 100%;
    `:r.iv`
    width: 85%;
    max-width: 1366px;
    border-radius: ${(0,i.R)("radii.default")};
  `,s={top:r.iv`
    justify-content: flex-start;
  `,center:r.iv`
    justify-content: center;
  `,bottom:r.iv`
    justify-content: flex-end;
  `},p=(0,r.ZP)(l.Z).attrs(()=>({bg:"background.overlay"}))`
  animation: ${o.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
`,f=(0,r.ZP)(a.Z).attrs(e=>({zIndex:4,padding:e.fullScreen?4:void 0}))`
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${e=>s[e.position]}
  visibility: ${({visible:e})=>e?"visible":"hidden"};
`,m=(0,r.ZP)(d.Z).attrs(e=>Object.assign({color:"text.dark",fontSize:3,p:2},e.titleStyle))`
  margin: 6px 0;
  width: 100%;
`,h=(0,r.ZP)(a.Z)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,g=r.ZP.hr`
  height: ${({size:e})=>`${e}px`};
  width: 100vh;
  border: none;
  ${i.$_}
`,v=(0,r.ZP)(l.Z).attrs(e=>Object.assign({p:3,bg:"background.base",zIndex:1},e))`
  overflow-x: auto;
  ${e=>u[e.position]}
  ${e=>c(e)}
`,b=(0,r.ZP)(a.Z)`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,x=r.ZP.div`
  padding-right: 8px;
  margin-left: auto;
  cursor: pointer;
`},66762:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(75851),d=n(37270);let u=e=>o.createElement(a.Z,{id:"portal-dialog"},e),c=e=>{let{portal:t=!1}=e,n=(0,i.Z)(e,["portal"]),r=o.createElement(s,n);return t?u(r):r},s=e=>{let{title:t,showClose:n,onClickOutside:a,children:u,visible:c,position:s,fullScreen:p,type:f,titleStyle:m,ruleSize:h,bgRule:g,showHorizontalRule:v}=e,b=(0,i.Z)(e,["title","showClose","onClickOutside","children","visible","position","fullScreen","type","titleStyle","ruleSize","bgRule","showHorizontalRule"]);return(0,o.useEffect)(()=>{let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=c?"hidden":e,()=>{document.body.style.overflow=e}},[c]),o.createElement(d.W2,{position:s,visible:c,fullScreen:p,"data-testid":"dialog"},o.createElement(d.aV,{onClick:a,role:"dialog","data-testid":"dialog-overlay"}),o.createElement(d.Xk,(0,r.Z)({position:s,"data-testid":"dialog-content",type:f,fullScreen:p},b),o.createElement(d.h4,null,o.createElement(d.yW,null,t&&o.createElement(d.Dx,{titleStyle:m,"data-testid":"dialog-title"},t),n&&o.createElement(d.f,null,o.createElement(l.x8P,{color:"#999","aria-label":"Close",onClick:a,"data-testid":"dialog-close"}))),v&&o.createElement(d.bo,{size:h,bg:g,"data-testid":"horizontal-rule"})),u))};s.defaultProps={children:void 0,title:void 0,fullScreen:!1,position:"bottom",type:"dialog",showClose:!1,titleStyle:{},visible:!0,ruleSize:1,bgRule:"border.light",showHorizontalRule:!1};var p=c},74822:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(86349),a=n(99673),d=n(55403),u=n(34490),c=n(10200),s=n(84546),p=n(19527);let f=(0,a.ZP)(p.Z).attrs(e=>Object.assign({color:"text.base",alignItems:"center",p:3},e))``,m=(0,a.ZP)(s.Z).attrs(e=>Object.assign({display:"inline-block"},e))``,h=(0,a.ZP)(c.Z).attrs(e=>{let{pointing:t}=e;return Object.assign({position:"relative",fontSize:1,py:t?3:2,gridGap:1},(0,i.Z)(e,["isOpen","pointing"]))})``,g=(0,a.ZP)(s.Z).attrs(e=>Object.assign({position:"absolute",color:"text.base",bg:"background.lighter",borderRadius:"medium",zIndex:1,minWidth:"10rem",maxHeight:"20rem",forwardedAs:"ul"},(0,i.Z)(e,["pointing"])))`
  border: ${(0,d.R)("borders.0")};

  ${({pointing:e})=>e&&a.iv`
      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 19px;
        border: 11px solid transparent;
        border-bottom-color: ${(0,d.R)("borders.0")};
      }

      &::after {
        left: 20px;
        border: 10px solid transparent;
        border-bottom-color: ${(0,d.dF)("lighter")};
      }
    `}
`,v=(0,a.ZP)(f)`
  gap: ${(0,d.R)("space.1")}px;
  ${({disableHover:e})=>!e&&a.iv`
      &:hover {
        background-color: ${(0,d.dF)("darker")};
      }
    `}
`,b=(0,a.ZP)(f)`
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
`,x=(0,a.ZP)(u._ME)`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease-out;
  transform: ${({rotated:e})=>e&&"rotate(-180deg)"};
  ${d.$_}
`,$=(0,o.createContext)(!1),Z=({children:e,value:t})=>o.createElement($.Provider,{value:t},e),w=()=>(0,o.useContext)($),y=e=>{let{children:t,fill:n}=e,l=(0,i.Z)(e,["children","fill"]),{isOpen:a,handleOnClick:d,pointing:u}=w();return o.createElement(h,(0,r.Z)({},l,{isOpen:a,pointing:u,onClick:d,"data-testid":"dropdown-title"}),t,o.createElement(x,{fill:n,rotated:a}))};y.defaultProps={children:null,fill:"text.base",underlineOnHover:!1},y.displayName="DropdownTitle";let k=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]),{isOpen:l,pointing:a}=w();return l?o.createElement(g,(0,r.Z)({},n,{pointing:a,"data-testid":"dropdown-menu"}),t):null};k.defaultProps={children:null,fontSize:1,forwardedAs:"ul"},k.displayName="DropdownMenu";let C=e=>{let{children:t,startIcon:n,endIcon:r}=e,l=(0,i.Z)(e,["children","startIcon","endIcon"]);return o.createElement(b,l,n,t,r)};C.defaultProps={children:null,startIcon:null,endIcon:null,forwardedAs:"li"},C.displayName="DropdownLabel";let E=e=>{let{children:t,value:n,startIcon:l,endIcon:a}=e,d=(0,i.Z)(e,["children","value","startIcon","endIcon","onClick"]),{setIsOpen:u,handleOnChange:c}=w(),s=e=>{u(!1),c(e,{value:n})};return o.createElement(v,(0,r.Z)({},d,{role:"option",onClick:s,"data-testid":"dropdown-item"}),l,t,a)};E.defaultProps={children:null,value:null,startIcon:null,endIcon:null,disableHover:!1,forwardedAs:"li"},E.displayName="DropdownItem";var P=n(97600);let R=e=>o.createElement(P.Z,e),z=e=>{let{title:t,children:n,options:a,onClick:d,onChange:u,mouseenter:c,pointing:s}=e,p=(0,i.Z)(e,["title","children","options","onClick","onChange","mouseenter","pointing"]),f=(0,o.useRef)(),[h,g]=(0,o.useState)(!1);c?(0,l.Ay)(f,g):(0,l.t$)(f,()=>g(!1));let v=e=>{c||g(!h),d(e)},b=(e,{value:t})=>{u(e,{value:t})};return o.createElement(Z,{value:{isOpen:h,setIsOpen:g,handleOnClick:v,handleOnChange:b,pointing:s}},o.createElement(m,{ref:f,"data-testid":"dropdown"},(()=>{let e=o.Children.toArray(n).find(({type:{displayName:e}})=>"DropdownTitle"===e);return e?o.isValidElement(e)&&e:o.createElement(y,p,t)})(),a?o.createElement(k,{mouseenter:c,pointing:s},null==a?void 0:a.map(e=>{let{key:t,text:n,value:l,startIcon:a,endIcon:d}=e,u=(0,i.Z)(e,["key","text","value","startIcon","endIcon"]);return o.createElement(E,(0,r.Z)({key:t,value:l,startIcon:a,endIcon:d},u),n)})):o.Children.toArray(n).find(({type:{displayName:e}})=>"DropdownMenu"===e)))};z.defaultProps={children:null,mouseenter:!1,pointing:!1,onChange(){},onClick(){}},z.Title=y,z.Menu=k,z.Label=C,z.Divider=R,z.Item=E,R.displayName="DropdownDivider";var S=z},19527:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784),l=n(13980),a=n(99673),d=n(55403),u=n(68054);let c=a.ZP.div({display:"flex"},(0,u.qC)(u.GQ,u.Oq,u.Cg,u.bK,u.FK,u.AF,u.Dh,u.yd,u.cp,d.$_,d.oc),d.SG),s=(0,o.forwardRef)((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]);return o.createElement(c,(0,r.Z)({ref:t},l),n)});s.propTypes={children:(0,l.oneOfType)([l.element,l.string,(0,l.arrayOf)(l.element),l.node])},s.defaultProps={children:void 0},s.displayName="Flex";var p=s},8341:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7896),i=n(2784),o=n(99673),l=n(55403),a=n(68054),d=n(84546);let u=(0,o.ZP)(d.Z)({display:"grid"},(0,a.qC)(a.eC,a.cp,l.$_,a.Dh,l.SG)),c=(0,i.forwardRef)((e,t)=>i.createElement(u,(0,r.Z)({ref:t},e)));c.displayName="Grid";var s=c},25610:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7896),i=n(31461),o=n(2784),l=n(13980),a=n(63825);let d=o.forwardRef((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]);return o.createElement(a.Z,(0,r.Z)({ref:t,as:"h3","data-testid":"main-title"},l),n)});d.propTypes={children:l.string.isRequired},d.displayName="Heading";var u=d},97600:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2784);n(13980);var i=n(99673),o=n(55403);let l=i.ZP.hr`
  height: ${({size:e})=>`${e}px`};
  width: 100%;
  border: none;
  ${o.$_}
`,a=e=>r.createElement(l,e);a.defaultProps={size:1,bg:"border.light"};var d=a},39471:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(2784);n(13980);var i=n(99673),o=n(55403),l=n(7029),a=n(84546),d=n(19527),u=n(63825);let c=(0,i.ZP)(a.Z)`
  border-radius: 50%;
  width: ${e=>(0,o.R)("sizes.hotLinks.width")(e)};
  height: ${e=>(0,o.R)("sizes.hotLinks.height")(e)};
  margin-bottom: 8px;
`,s=i.ZP.a`
  display: block;
  text-decoration: none;
  width: 100%;
`,p=(0,i.ZP)(l.Z)``,f=i.iv`
  flex-flow: wrap;
  background: ${e=>(0,o.R)("palette.background.lighter")(e)};
  padding: 0 8px;
  border-left: 4px solid ${({borderColor:e})=>e||"transparent"};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${e=>(0,o.R)("boxShadows.4")(e)};

  p {
    font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
    color: ${e=>(0,o.uu)("scratched")(e)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    text-align: left;
  }

  ${c} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: ${e=>(0,o.R)("borders.0")(e)};
    margin: 4px 7px 4px 0;

    ${p} {
      width: 100%;
      border-radius: 50%;
    }
  }
`,m=(0,i.ZP)(d.Z)`
  flex-direction: column;
  align-items: center;

  ${({directionType:e})=>"column"===e&&f}
`,h=(0,i.ZP)(u.Z).attrs(()=>({color:"base",fontSize:[0,1,2]}))`
  text-align: center;
  line-height: ${e=>(0,o.R)("lineHeights.plus")(e)}px;
`,g=({item:e,onClick:t,directionType:n,imgLazyLoading:i})=>{let{link:o,image:l,text:a,borderColor:d}=e;return r.createElement(s,{href:o,onClick:n=>t(n,e),"data-testid":"hotlink-link",borderColor:d},r.createElement(m,{directionType:n,borderColor:d,"data-testid":`title-${a}`},r.createElement(c,null,r.createElement(p,{alt:a,src:l,lazy:i})),r.createElement(h,null,a)))};g.defaultProps={item:{},onClick(){},directionType:"row",imgLazyLoading:!0};var v=g},29869:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(55403);let d=l.iv`
  border: 1px solid;
  border-color: ${e=>{let{hasError:t}=e,n=(0,i.Z)(e,["hasError"]);return(0,a.ow)(t?"error.base":"border.light")(n)}};
  border-radius: 4px;
  width: 100%;

  padding: ${(0,a.R)("space.2")}px;
  line-height: ${(0,a.R)("lineHeights.input")};
  font-size: ${(0,a.R)("fontSizes.1")}px;

  ::placeholder {
    color: ${(0,a.uu)("light")};
  }
`,u=l.ZP.input`
  ${d}
`,c=l.ZP.textarea.attrs(e=>({rows:e.rows||"5",cols:e.cols||"40"}))`
  ${d}
  resize: none;
  font-family: ${(0,a.R)("fontFamily")};
`,s=(0,o.forwardRef)((e,t)=>{let{children:n,value:l,onChange:a}=e,d=(0,i.Z)(e,["children","value","onChange"]),s=d.multiline?c:u;return o.createElement(s,(0,r.Z)({ref:t},d,{value:l,onChange:e=>a(e,l)}),n)});s.defaultProps={multiline:!1,hasError:!1,onChange(){}},s.displayName="Input";var p=s},81572:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(55403),d=n(63825),u=n(19527),c=n(84546);let s=(0,l.ZP)(u.Z).attrs(e=>{let{justifyContent:t,centered:n}=e,r=(0,i.Z)(e,["justifyContent","centered"]);return Object.assign({width:"100%",alignItems:"center",justifyContent:n?"center":t,flexWrap:"wrap",gap:2,px:2},!(null!=r&&r.scale)&&{py:2},r)})({textDecoration:"none"},a.bU,a.bA),p=(0,l.ZP)(d.Z).attrs(e=>{let{textAlign:t,centered:n,justifyContent:r}=e;return Object.assign({forwardedAs:"span",fontSize:1,flex:n||"space-between"!==r?"unset":1,color:"inherit",position:"center"===t?"absolute":"initial",transform:"center"===t?"translateX(-50%)":"initial",left:"center"===t?"50%":"initial"},(0,i.Z)(e,["textAlign","centered","justifyContent"]))})``,f=(0,l.ZP)(c.Z).attrs(e=>Object.assign({fontSize:1,color:"text.scratched",fontWeight:"regular",lineHeight:"display"},e))({flexBasis:"100%",textAlign:"justify",textAlignLast:"left"});var m=n(34490);let h=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(d.Z,(0,r.Z)({},n,{"data-testid":"item-description"}),t)};h.defaultProps={color:"inherit",fontWeight:"normal",display:"block",as:"small",fontSize:0,mt:1},h.displayName="ItemDescription";let g=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(f,(0,r.Z)({},n,{"data-testid":"item-content"}),t)};g.displayName="ItemContent";let v=e=>{let{centered:t,description:n,content:l,endIcon:a,fill:u,fontSize:c,hint:f,onClick:v,startIcon:b,textAlign:x,title:$,ellipsis:Z,as:w,titleAs:y,justifyContent:k}=e,C=(0,i.Z)(e,["centered","description","content","endIcon","fill","fontSize","hint","onClick","startIcon","textAlign","title","ellipsis","as","titleAs","justifyContent"]),E=o.Children.toArray(null==C?void 0:C.children),P=e=>e&&"string"==typeof e?o.createElement(m.JO$,{name:e,fill:u,"data-testid":"item-icon"}):e,R=()=>n&&"string"==typeof n?o.createElement(h,null,n):n;return o.createElement(s,(0,r.Z)({forwardedAs:w,centered:t,textAlign:x,onClick:v,"data-testid":"item",justifyContent:k},C),P(b),($&&"string"==typeof $?o.createElement(p,{fontSize:c,textAlign:x,centered:t,"data-testid":"item-title",forwardedAs:y},$,R()):$)||(()=>{let e=R(),n=Z?{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}:null;return e?o.createElement(o.Fragment,null,o.createElement(p,{fontSize:c,textAlign:x,centered:t,style:n,"data-testid":"item-title",forwardedAs:y},E,e)):o.createElement(o.Fragment,null,o.createElement(p,{fontSize:c,textAlign:x,centered:t,style:n,"data-testid":"item-title",forwardedAs:y,justifyContent:k},null==E?void 0:E.filter(({type:{displayName:e}={}})=>"ItemContent"!==e)))})(),(f&&"string"==typeof f?o.createElement(d.Z,{as:"label",fontSize:1,fontWeight:"normal","data-testid":"item-hint"},f):f)||P(a),(()=>{let e=null==E?void 0:E.find(({type:{displayName:e}={}})=>"ItemContent"===e);return e||(l?o.createElement(g,null,l):null)})())};v.defaultProps={title:"",children:null,justifyContent:"space-between",startIcon:null,endIcon:null,hint:null,centered:!1,fill:"currentColor",ellipsis:!1};let b=(0,o.forwardRef)((e,t)=>{let{as:n,onClick:l}=e,a=(0,i.Z)(e,["as","onClick"]),d=o.Children.toArray(null==a?void 0:a.children),u=null==d?void 0:d.find(({type:{displayName:e}={}})=>null==e?void 0:e.includes("ItemHeader"));return u?o.createElement(s,(0,r.Z)({ref:t,forwardedAs:n,onClick:l,"data-testid":"item-container"},a),d):o.createElement(v,(0,r.Z)({ref:t,as:n,onClick:l},a))});b.defaultProps={title:"",children:null},b.Content=g,b.Description=h,b.Header=e=>o.createElement(v,(0,r.Z)({px:0,py:0},e)),b.Header.displayName="ItemHeader",b.displayName="Item";var x=b},66228:function(e,t,n){n.d(t,{ij:function(){return r.ij},ZP:function(){return l},I1:function(){return r.I1},Iy:function(){return r.Iy}});var r=n(93088),i=n(2784);n(13980);let o=({type:e,schema:t})=>{let n=Array.isArray(t)?{"@context":"https://schema.org/","@graph":t}:Object.assign({"@context":"https://schema.org/","@type":e},t);return i.createElement("script",{type:"application/ld+json","data-testid":"jsonld-script",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}})};var l=o},93088:function(e,t,n){n.d(t,{H9:function(){return i},ij:function(){return a},I1:function(){return u},NI:function(){return s},Iy:function(){return v},$5:function(){return x}});let r=(e,t)=>{var n,r,i,o,l,a,d;return e&&0!==Object.keys(e).length&&(null==e?void 0:e.count)!==0||t&&null!=t&&t.general&&0!==Object.keys(null==t?void 0:t.general).length&&(null==t?void 0:null==(n=t.general)?void 0:n.reviewCount)!==0?{"@type":"AggregateRating",ratingValue:(null==e?void 0:e.count)>0?null==e?void 0:null==(r=e.score)?void 0:r.toString():null==t?void 0:null==(i=t.general)?void 0:null==(o=i.rating)?void 0:o.toFixed(0),reviewCount:(null==e?void 0:e.count)>0?null==e?void 0:null==(l=e.count)?void 0:l.toString():null==t?void 0:null==(a=t.general)?void 0:null==(d=a.reviewCount)?void 0:d.toString()}:null};var i=r,o=n(12468);let l=(e,t=o.RW)=>{if(!e||0===e.length)return{};let n=[{name:"magalu.com",position:1,url:""},...e].map(e=>({"@type":"ListItem",position:e.position,item:{"@id":`${t}${null==e?void 0:e.url}`,name:e.name}}));return{itemListElement:n}};var a=l;let d=e=>{if(!e||0===Object.keys(e).length||0===e.count)return null;let t=e.filter(e=>e.question&&e.answer).map(e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}));return{mainEntity:t}};var u=d;let c=(e,t)=>{var n,r,i,o;return e&&0!==Object.keys(e).length&&t&&e.price&&(null!=e&&null!=(n=e.price)&&n.bestPrice||null!=e&&null!=(r=e.price)&&r.price)?{"@type":"Offer",price:(null==e?void 0:null==(i=e.price)?void 0:i.bestPrice)||(null==e?void 0:null==(o=e.price)?void 0:o.price),priceCurrency:"BRL",availability:"http://schema.org/InStock",url:(null==e?void 0:e.offer)||t}:null};var s=c;let p=e=>{let t=new Date(e);return e?`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`:""},f=(e,t,n)=>{var r,l;let a=`${n}${null==e?void 0:e.url}`,d=i(e.rating,t),u=s(e,a);return Object.assign({"@context":"https://schema.org","@type":"Product"},d?{aggregateRating:d}:{},{name:e.title,image:null==(r=e.image)?void 0:r.replace("{w}",o.w.width).replace("{h}",o.w.height),brand:null==(l=e.brand)?void 0:l.label,sku:e.id,description:e.description||e.title},u?{offers:u}:{})},m=(e="",t="")=>e?`${e} > ${t}`:"",h=(e,t)=>{var n,r,i,o,l;let a=null==t?void 0:null==(n=t.userReviews)?void 0:null==(r=n.items)?void 0:r.map(e=>x(e)).filter(e=>e),d=null==e?void 0:null==(i=e.attributes)?void 0:i.find(e=>"color"===e.type);return Object.assign({description:e.description||e.title,category:m(null==e?void 0:null==(o=e.category)?void 0:o.name,null==e?void 0:null==(l=e.subcategory)?void 0:l.name),color:null==d?void 0:d.current,itemCondition:"https://schema.org/NewCondition",sku:null==e?void 0:e.id},a?{review:a}:{})},g=({product:e={},productRating:t={},isList:n=!1},r=o.RW)=>{if(!e||0===Object.keys(e).length)return{};let i=f(e,t,r),l=n?{}:h(e,t);return Object.assign({},i,l)};var v=g;let b=e=>{var t;return e&&0!==Object.keys(e).length&&e.userData&&null!=(t=e.userData)&&t.name?{"@type":"Review",author:{"@type":"Person",name:e.userData.name},datePublished:p(e.submissionDate),reviewBody:e.description,name:e.title,reviewRating:{"@type":"Rating",bestRating:"5",ratingValue:e.rating.toString(),worstRating:"1"}}:null};var x=b},91785:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7896),i=n(2784),o=n(97704);n(13980);var l=n(84546);let a="0px 0px 250px",d=({children:e,options:t,layout:n})=>{let{delay:d=500,threshold:u=0,rootMargin:c=a}=t||{},[s,p]=(0,i.useState)(!1),[f,m]=(0,i.useState)(n),[h,g]=(0,o.YD)({triggerOnce:!0,threshold:u,rootMargin:c});return(0,i.useEffect)(()=>{let e;return g&&!s&&(p(!0),e=setTimeout(()=>m({}),d)),()=>e&&clearTimeout(e)},[g]),i.createElement(l.Z,(0,r.Z)({},f,{"data-testid":"lazyload-container",ref:h}),s&&e)};d.defaultProps={children:void 0,layout:{},options:{delay:500,rootMargin:a,threshold:0}};var u=d},10200:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980),n(21302);var l=n(99673),a=n(68054),d=n(55403);let u={a:l.iv`
    text-decoration: none;
  `,button:l.iv`
    font-size: inherit;
    font-family: inherit;
    border: 0;
    margin: 0;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `},c=l.ZP.a.attrs(e=>{let{color:t}=e;return Object.assign({color:t||"text.base",fontSize:1},(0,i.Z)(e,["color"]))})`
  cursor: pointer;

  ${({as:e})=>u[e]}
  ${({textAlign:e})=>e?l.iv`
          display: block;
        `:l.iv`
          ${{display:"inline-flex"}}
          ${a.GQ}
          align-items: center;
        `}
  ${({underline:e})=>e&&l.iv`
      text-decoration: underline;
    `}
  ${({hover:e})=>e&&l.iv`
      &:hover {
        text-decoration: ${e=>null!=e&&e.underlineOnHover?"underline":!(null!=e&&e.underline)&&"none"};
        color: ${e=>e.colorOnHover||(0,d.ow)(e.color)(e)||e.color};
      }
    `}
  ${a.Oq}
  ${a.Cg}
  ${a.bK}
  ${d.$_}
  ${a.Dh}
  ${a.yd}
  ${a.cp}
  ${a.eC}
  ${d.SG}
`,s=(0,o.forwardRef)((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]),a=null!=l&&l.href?"a":"button";return o.createElement(c,(0,r.Z)({ref:t,"data-testid":"link",as:a},l),n)});s.defaultProps={hover:!0,underline:!1,underlineOnHover:!0,bg:"transparent"},s.displayName="Link";var p=s},15566:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2784);n(13980);var i=n(34490),o=n(23076);let l=({storeName:e,width:t,height:n,src:l,alt:a,prefix:d})=>e?r.createElement(o.Z,{name:e,prefix:d}):l?r.createElement("img",{id:"logo",width:`${t}px`,src:l,alt:a}):r.createElement(i.ZGh,{id:"logo",color:"#fff",width:t,height:n,viewBox:"0 0 60 13",titleAccess:"Logo Magalu"});l.defaultProps={storeName:void 0,prefix:void 0,width:87,height:19,src:"",alt:""};var a=(0,r.memo)(l)},23076:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2784);n(13980);var i=n(99673),o=n(55403);let l=i.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${e=>(0,o.ow)("primary.text")(e)};
`,a=i.ZP.strong`
  color: ${e=>(0,o.ow)("primary.dark")(e)};
  margin-right: 2px;
`,d=i.ZP.span`
  display: block;
  margin-bottom: 5px;
  font-size: ${e=>(0,o.R)("fontSizes.4")(e)}px;
  font-weight: ${e=>(0,o.R)("fontWeights.bold")(e)};
  line-height: ${e=>(0,o.R)("lineHeights.fontSize")(e)};
`,u=i.ZP.div`
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  margin-bottom: 5px;
`,c=({name:e,prefix:t})=>{let n=0===e.indexOf(t)?e.replace(t,""):e;return r.createElement(l,null,r.createElement(d,null,r.createElement(a,null,t),n),r.createElement(u,null,"uma loja parceira do ",r.createElement("strong",null,"Magalu")))};c.defaultProps={prefix:"magazine"};var s=(0,r.memo)(c)},54934:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(99673),d=n(55403),u=n(84546),c=n(63825);let s={primary:a.iv`
    background-color: ${e=>(0,d.dF)("primary")(e)};
    color: ${e=>(0,d.uu)("lightest")(e)};
    font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  `,secondary:a.iv`
    color: ${e=>(0,d.uu)("light")(e)};
  `},p=a.ZP.div`
  ${({noBorder:e})=>!e&&a.iv`
      border-bottom: 1px solid #ededed;
    `}
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 12px 12px;
  ${e=>s[e.variation]}
`,f=(0,a.ZP)(u.Z)`
  flex: 1;
`,m=(0,a.ZP)(c.Z).attrs(({isLink:e,chevronRight:t})=>({fontSize:1,fontWeight:e||!t?"regular":"medium"}))`
  ${e=>s[e.variation]}
  line-height: ${e=>(0,d.R)("lineHeights.tall")(e)}px;
  padding-left: ${e=>e.icon?"8px":"0px"};
`;function h(e){let{icon:t,text:n,testId:a,onClick:d}=e,u=(0,i.Z)(e,["icon","text","testId","onClick"]),{chevronRight:c,href:s,variation:h}=u,g="primary"===h?"#FFF":"#999",v=Array.isArray(n)?n[0]:n||"",b=Array.isArray(n)?n.slice(1):[];return o.createElement(p,(0,r.Z)({"data-testid":a,as:s?"a":"div",href:s,onClick:d},u),t&&o.createElement(l.JO$,{name:t,color:t.startsWith("Category")?"#0086FF":g}),o.createElement(f,null,o.createElement(m,(0,r.Z)({isLink:!!s,icon:t},u),v),b.map(e=>o.createElement(m,{key:e,isLink:!!s,icon:t,variation:"secondary"},e))),c&&o.createElement(l.JO$,{name:"ChevronRight",color:g}))}h.defaultProps={chevronRight:!0,href:null,icon:null,testId:"",variation:"",onClick(){}};var g=h},97851:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2784);n(13980);var i=n(99673),o=n(55403);let l=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,a=i.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({maxWidth:e})=>`${e}px`};
  max-height: ${({maxHeight:e})=>`${e}px`};
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`,d=i.ZP.div`
  ${o.$_}

  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 3px solid ${({borderColor:e})=>e};

  font-size: 12px;
  font-weight: bold;
`,u=({children:e,amount:t=0,nullable:n=!0,truncateAmountThreshold:i,maxWidth:o=60,maxHeight:u=46,backgroundColor:c="#ccc",counterColor:s="#fff",fontColor:p="#000",onClick:f})=>r.createElement(l,null,r.createElement(a,{maxWidth:o,maxHeight:u,onClick:f},e,(t||n)&&r.createElement(d,{"data-testid":"numbered-btn-counter",bg:s,borderColor:c,color:p},i&&t>i?`${i}+`:t)));var c=u},26527:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2784),i=n(34490),o=n(99673),l=n(55403);let a=o.ZP.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(4px);
  z-index: ${e=>(0,l.R)("zIndices.4")(e)};

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${(0,l.ow)("background.lighter")};
    opacity: 0.7;
    position: absolute;
    z-index: -1;
  }
`,d=()=>r.createElement(a,null,r.createElement(i.JO$,{name:"AnimatedLoadingColorful2",width:50,height:50}));var u=d},7121:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(35741),a=n(99673),d=n(68054),u=n(55403),c=n(86349);let s=a.ZP.div.attrs(e=>Object.assign({},e))`
  border-radius: ${e=>(0,u.R)("radii.default")(e)};
  background-color: ${e=>e.backgroundColor||"white"};
  animation: ${c.Ji} 0.2s ease-in;

  #arrow {
    position: absolute;
    width: 16px;
    height: 16px;
    &:after {
      content: ' ';
      background-color: ${e=>e.backgroundColor||"white"};
      position: absolute;
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      ${u.$_}
    }
  }

  &[data-popper-placement^='bottom'] > #arrow {
    top: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='right'] > #arrow {
    left: -6px;
  }

  &[data-popper-placement^='left'] > #arrow {
    right: -6px;
  }

  ${d.Dh}
  ${d.cp}
  ${u.$_}
`;var p=n(84546),f=function(e){let{backgroundColor:t,children:n,parentRef:a,placement:d="bottom",visible:u}=e,c=(0,i.Z)(e,["backgroundColor","children","parentRef","placement","visible"]),[f,m]=(0,o.useState)(null),h=(0,o.useRef)(null),{styles:g,attributes:v}=(0,l.D)(a.current,h.current,{placement:d,modifiers:[{name:"arrow",options:{element:f}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{flipVariations:!1}}]});return o.createElement(o.Fragment,null,u?o.createElement(s,(0,r.Z)({"data-testid":"popper-container",ref:h,style:g.popper},v.popper,{backgroundColor:t},c),o.createElement("div",{ref:m,style:g.arrow,id:"arrow"}),o.createElement(p.Z,{"data-testid":"popper-children-container",m:1},n)):null)}},75851:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2784),i=n(28316);let o=({id:e,children:t})=>{if("object"!=typeof window)return r.Fragment;let n=(0,r.useRef)(document.getElementById(e)||document.createElement("div")),[o]=(0,r.useState)(!n.current.parentElement);return(0,r.useEffect)(()=>(o&&(n.current.id=e,document.querySelector("main")?document.querySelector("main").appendChild(n.current):document.body.appendChild(n.current)),()=>{o&&n.current.parentElement&&n.current.parentElement.removeChild(n.current)}),[e]),(0,i.createPortal)(t,n.current)};var l=(0,r.memo)(o)},70715:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(99673),a=n(55403),d=n(8341);let u=(0,l.ZP)(d.Z).attrs(e=>Object.assign({forwardedAs:"label",color:"text.base",gridTemplateColumns:"min-content auto",gridGap:3,py:3},e))`
  cursor: pointer;
  align-items: center;
`,c=l.ZP.input.attrs(e=>Object.assign({type:"radio"},e))`
  pointer-events: ${({pointerNone:e})=>e?"none":"auto"};
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  border: ${(0,a.R)("borders.1")};
  border-radius: ${(0,a.R)("radii.circle")};
  cursor: pointer;

  &:checked {
    border-color: ${(0,a.dF)("primary")};

    &:before {
      content: '';
      display: block;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: ${(0,a.R)("radii.circle")};
      background: ${(0,a.dF)("primary")};
    }
  }
`,s=e=>{let{pointerNone:t,label:n,onChange:l}=e,a=(0,i.Z)(e,["pointerNone","label","onChange"]),d=o.createElement(c,(0,r.Z)({pointerNone:t},a,{onChange:l,"data-testid":"radio-input"}));return n?o.createElement(u,(0,r.Z)({},a,{"data-testid":"radio"}),d,n):d};s.defaultProps={fontSize:1,pointerNone:""};var p=s},7029:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(12468),a=n(99673),d=n(68054),u=n(55403);let c=a.ZP.img`
  width: 100%;
  height: inherit;
  object-fit: ${({objectFit:e})=>e||"contain"};
  ${d.FK}
  ${d.Dh}
  ${d.bK}
  ${d.Cg}
  ${u.oc}
`,s=e=>{let{src:t,srcSetDensity:n,imageWidth:l,imageHeight:a,width:d,height:u,lazy:s}=e,p=(0,i.Z)(e,["src","srcSetDensity","imageWidth","imageHeight","width","height","lazy"]);if(!t)return o.createElement(o.Fragment,null);let f=Object.assign({},p,{width:l,height:a,src:t.replace("{w}",d).replace("{h}",u)}),m=n.map(e=>{let n=t.replace("{w}",d*e).replace("{h}",u*e),r=e>1?` ${e}x`:"";return`${n}${r}`}).join(", ");return m&&(f.srcSet=m),s&&(f.loading="lazy"),o.createElement(c,(0,r.Z)({"data-testid":"image"},f))};s.defaultProps={height:l.w.height,lazy:!0,src:"",srcSetDensity:[],width:l.w.width,imageWidth:"",imageHeight:""};var p=s},73002:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(31461),i=n(2784);n(13980);var o=n(34490),l=n(99673),a=n(55403),d=n(84546);let u=(0,l.ZP)(d.Z)`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    margin-right: ${e=>(0,a.R)("space.2")(e)}px;

    ${({desktopMode:e})=>e&&l.iv`
        font-size: ${e=>(0,a.R)("fontSizes.1")(e)}px;
      `};
  }

  select {
    appearance: none;
    display: block;
    background-color: ${e=>(0,a.R)("colors.white")(e)};
    cursor: pointer;
    border: 1px solid ${e=>(0,a.kJ)("base")(e)};
    border-radius: ${e=>(0,a.R)("radii.default")(e)};

    ${({desktopMode:e})=>e?l.iv`
            font-size: ${e=>(0,a.R)("fontSizes.1")(e)}px;
            padding: 8px 32px 8px 12px;
          `:l.iv`
            width: 100%;
            padding: 16px 32px 16px 12px;
            border-radius: 4px;
          `};

    &:focus {
      outline: none;
      background: ${e=>(0,a.R)("baseColors.wildsand.base")(e)};
    }
    ::-ms-expand {
      display: none;
    }
  }

  svg {
    outline: none;
    pointer-events: none;

    flex: 0 0 auto;
    margin-left: -32px;
  }
`;function c(e){let{id:t,textLabel:n,options:l,onChange:a,disabled:d}=e,c=(0,r.Z)(e,["id","textLabel","options","onChange","disabled"]),s=l.find(e=>e.selected);return i.createElement(u,c,n&&i.createElement("label",{htmlFor:`select-${t}`,"data-testid":"select-label"},n),i.createElement("select",{id:`select-${t}`,onChange:e=>a(e.target.value),value:null==s?void 0:s.value,"data-testid":`select-${t}`,disabled:d},null==l?void 0:l.map(e=>i.createElement("option",{key:e.value,selected:e.selected,value:e.value,hidden:null==e?void 0:e.isPlaceholder,"data-testid":"select-option"},e.label))),i.createElement(o._ME,{width:20,height:20}))}c.defaultProps={desktopMode:!1,onChange(){},options:[]};var s=c},76328:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7896),i=n(31461),o=n(2784);n(13980);var l=n(34490),a=n(19527),d=n(63825),u=n(99673);let c=u.ZP.input`
  height: 0;
  width: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`,s=[1,2,3,4,5],p={1:"uma",2:"duas",3:"tr\xeas",4:"quatro",5:"cinco"},f=(0,o.forwardRef)((e,t)=>{let{onChange:n,emptyOutline:u,showLabel:f,labelOptions:m,value:h,name:g}=e,v=(0,i.Z)(e,["onChange","emptyOutline","showLabel","labelOptions","value","name"]),[b,x]=(0,o.useState)(h),$=u?"StarOutline":"Star",Z=m[b]||"";(0,o.useEffect)(()=>(x(h),()=>x(0)),[h]);let w=e=>b>=e||u?"stars.base":"stars.disabled";return o.createElement(a.Z,{justifyContent:"space-between",alignItems:"center"},o.createElement(a.Z,{ref:t,"data-testid":"select-rating",justifyContent:"start",role:"radiogroup",onMouseLeave:()=>x(h)},s.map(e=>o.createElement(o.Fragment,{key:e},o.createElement(c,{type:"radio",name:g,value:e,id:`${g}${e}`,onChange:()=>n({target:{value:e}})}),o.createElement("label",{htmlFor:`${g}${e}`},o.createElement(l.JO$,(0,r.Z)({name:b>=e?"Star":$,cursor:"pointer",color:w(e),onMouseOver:()=>x(e),"aria-label":`${p[e]} ${1===e?"estrela":"estrelas"}`,onClick:()=>n({target:{value:e}})},v)))))),f&&o.createElement(d.Z,{fontSize:[1,2],minWidth:80,textAlign:"center",fontWeight:"medium"},Z))});f.defaultProps={emptyOutline:!1,showLabel:!1,value:"",name:"rating",labelOptions:{1:"P\xe9ssimo",2:"Ruim",3:"Regular",4:"Bom",5:"Excelente"}},f.displayName="SelectRating";var m=f},85737:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7896),i=n(2784);n(13980);var o=n(99673);let l=o.ZP.hr`
  float: left;
  height: ${({size:e})=>`${e}px`};
  position: ${({position:e})=>e};
  width: 100%;
  overflow: hidden;
  border: none;
  background-image: linear-gradient(
    to right,
    #ffff4a 0,
    #fcd000 4%,
    #ffc112 8%,
    #ffc112 11%,
    #ff8a00 16%,
    #ff5f5f 22%,
    #ff253a 28%,
    #ff37a8 37%,
    #c739ff 49%,
    #a400e1 56%,
    #2eceff 72%,
    #0086ff 80%,
    #72f772 94%,
    #00d604
  );
`,a=e=>i.createElement(l,(0,r.Z)({"data-testid":"strip"},e));a.defaultProps={position:"absolute",size:5};var d=(0,i.memo)(a)},63825:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784),l=n(13980),a=n(99673),d=n(68054),u=n(55403);let c=a.ZP.p.attrs(e=>({color:e.color?(0,u.uu)(e.color)(e)||e.color:(0,u.uu)("base")(e)}))`
  ${(0,d.qC)(d.cp,d.Dh,u.$_,d.bK,d.FK,d.GQ,u.SG)}
  ${(0,d.By)({transform:!0})}
`,s=o.forwardRef((e,t)=>{let{children:n}=e,l=(0,i.Z)(e,["children"]);return o.createElement(c,(0,r.Z)({ref:t},l),n)});s.propTypes={children:(0,l.oneOfType)([l.string,l.node,(0,l.arrayOf)(l.element)])},s.defaultProps={children:""},s.displayName="Text";var p=s},87043:function(e,t,n){n.d(t,{UQ:function(){return r.Z},Yd:function(){return o.Z},xu:function(){return i.Z},gN:function(){return w},zx:function(){return y.Z},XZ:function(){return k.Z},Af:function(){return C.Z},Vq:function(){return E.Z},Lt:function(){return P.Z},cx:function(){return I},kC:function(){return p.Z},rj:function(){return O.Z},X6:function(){return A.Z},bo:function(){return M.Z},Ee:function(){return U.Z},II:function(){return D.Z},ck:function(){return T.Z},uk:function(){return _},rU:function(){return K.Z},TR:function(){return Y.Z},fG:function(){return J.Z},SX:function(){return V.Z},rD:function(){return ey.Z},U2:function(){return ew},Ph:function(){return G.Z},jv:function(){return eh.Z},D_:function(){return Q.Z},OK:function(){return et},q5:function(){return ed},td:function(){return es},x4:function(){return ef},xv:function(){return em.Z}});var r=n(50616),i=n(84546),o=n(66685),l=n(7896),a=n(31461),d=n(2784);n(13980);var u=n(99673),c=n(55403),s=n(34490),p=n(19527);let f=(0,u.ZP)(p.Z)`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: ${e=>(0,c.R)("space.2")(e)}px 0;
`,m=u.ZP.span`
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,c.uu)("light")(e)};
`,h=u.ZP.span`
  font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
  color: ${e=>(0,c.uu)("base")(e)};
`,g=(0,u.ZP)(p.Z)`
  align-items: center;
  height: 100%;
`,v=(0,u.ZP)(s._Qn).attrs(e=>({color:(0,c.uu)("lighter")(e)}))``,b=u.ZP.a`
  text-decoration: none;
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,c.uu)("lighter")(e)};
`,x=u.ZP.span`
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,c.uu)("scratched")(e)};
`,$=u.ZP.span`
  display: flex;
`,Z=e=>{let{seller:t,item:n,onClick:r,active:i}=e,o=(0,a.Z)(e,["seller","item","onClick","active"]);return t?d.createElement(g,{"data-testid":"breadcrumb-item-list"},d.createElement(f,{"data-testid":"breadcrumb-item"},d.createElement(m,null,t.text),d.createElement(h,{"data-testid":"breadcrumb-item-name"},d.createElement("b",null,t.name)))):d.createElement(g,{"data-testid":"breadcrumb-item-list"},n.position>0&&d.createElement(v,{width:20,height:20}),d.createElement(i?x:b,(0,l.Z)({"data-testid":"breadcrumb-item",onClick:i?null:e=>r(e,n),active:i,href:n.url},o),d.createElement($,null,n.icon||n.name)))};Z.defaultProps={seller:void 0,item:void 0,active:!0,onClick(){}};var w=Z,y=n(60861);n(27439);var k=n(18281),C=n(17781);n(88699);var E=n(66762),P=n(74822);let R=u.ZP.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({padding:e})=>e}%;
`,z=u.ZP.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;var S=n(86349);let j=e=>{let{src:t,ratio:n}=e,r=(0,a.Z)(e,["src","ratio"]),[i,o]=(n&&"string"==typeof n?n:"16:9").split(":"),u=i&&o?o/i:null,c=u&&!Number.isNaN(u)?(100*u).toFixed(2):"56.25";return d.createElement(R,(0,l.Z)({"data-testid":"embed",padding:c},r),d.createElement(z,{src:(0,S.qJ)(t)}))};j.defaultProps={ratio:"16:9"};var I=j;n(58331);var O=n(8341),A=n(25610),M=n(97600);n(39471);var D=n(29869),T=n(81572);n(66228),n(93088),n(91785);let F=({quantity:e=0,size:t=6,color:n="rgba(0, 0, 0, 0.3)"})=>u.iv`
  width: ${t}px;
  height: ${t}px;
  background-color: ${n};
  border-radius: 50%;
  margin-right: calc((100% / ${e}) - ${t}px);

  &:last-child {
    margin-right: ${t}px;
  }
`,N=u.ZP.div`
  position: relative;
  height: ${({height:e})=>e};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${({bullets:e})=>F(e)}
  }
`,W=u.ZP.div`
  position: relative;
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"auto"};
`,H=u.ZP.progress`
  position: absolute;
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"auto"};
  border-radius: ${(0,c.R)("radii.big")};
  appearance: none;
  border: none;

  &::-webkit-progress-bar {
    height: ${({height:e})=>e};
    border-radius: ${(0,c.R)("radii.big")};
    background-color: ${e=>(0,c.dF)("whisper")(e)};
  }

  &::-webkit-progress-value {
    height: ${({height:e})=>e};
    border-radius: ${(0,c.R)("radii.big")};
    background-color: ${({color:e})=>e};
  }

  &::-moz-progress-bar {
    height: ${({height:e})=>e};
    border-radius: ${(0,c.R)("radii.big")};
    background-color: ${({color:e})=>e};
  }
`,L=u.ZP.span`
  font-size: ${e=>(0,c.R)("fontSizes.3")(e)}px;
  color: ${({color:e})=>(0,c._j)(e,15)};
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};

  position: absolute;
  left: ${({value:e})=>e&&`calc(${e}% - 22px)`};
  top: -25px;
`,q=({quantity:e})=>e&&Array.from(Array(e).keys()).map(e=>d.createElement("div",{key:e,"data-testid":"linear-progress-bullet"})),X=e=>Boolean(Object.keys(e).length),B=({bullets:e,value:t,max:n,color:r,label:i,height:o,width:l}={})=>d.createElement(W,{color:r,width:l,height:o,"data-testid":"linear-progress"},i&&d.createElement(L,{color:r,value:t,"data-testid":"linear-progress-label"},i),d.createElement(H,{max:n,color:r,width:l,height:o,value:t,"data-label":i},i),X(e)&&d.createElement(N,{bullets:e,height:o},q(e)));B.defaultProps={max:100,label:"",color:"#FFCC03",width:"100%",height:"10px",bullets:{}};var _=B,Y=n(15566);n(23076),n(54934);var G=n(73002),J=n(97851),K=n(10200),V=n(26527);n(75851),n(70715);var U=n(7029),Q=n(85737);let ee=(0,d.forwardRef)(function(e,t){let{onChange:n,onClick:r,value:i,children:o}=e,l=(0,a.Z)(e,["onChange","onClick","value","children"]),u=e=>{n(e,i),r(e)};if(!d.isValidElement(o))return null;let c=d.cloneElement(o,Object.assign({},l));return d.createElement("div",{onClick:u,ref:t},c)});ee.defaultProps={onClick:()=>({})};var et=ee;let en=(0,d.createContext)(null);en.displayName="TabContext";let er=()=>{let[e,t]=d.useState(null);return d.useEffect(()=>{t(`stereo-id-${Math.round(1e5*Math.random())}`)},[]),e},ei=({children:e,value:t})=>{let n=er(),r=(0,d.useMemo)(()=>({idPrefix:n,value:t}),[t]);return d.createElement(en.Provider,{value:r},e)},eo=()=>(0,d.useContext)(en),el=(e,t)=>{let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-P-${t}`},ea=(e,t)=>{let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-T-${t}`};var ed=ei;let eu=d.forwardRef(function(e,t){let{onChange:n,value:r,children:i}=e,o=(0,a.Z)(e,["onChange","value","children"]),u=d.Children.map(i,e=>{let t=e.props.value;return void 0===t?null:d.cloneElement(e,{value:t,onChange:n,selected:t===r})});return d.createElement("div",(0,l.Z)({},o,{ref:t,role:"tablist"}),u)}),ec=d.forwardRef(function(e,t){let{children:n}=e,r=(0,a.Z)(e,["children"]),i=eo();if(null===i)throw TypeError("No TabContext provided");let o=d.Children.map(n,e=>d.isValidElement(e)?d.cloneElement(e,{"aria-controls":el(i,e.props.value),id:ea(i,e.props.value)}):null);return d.createElement(eu,(0,l.Z)({},r,{ref:t,value:i.value}),o)});var es=ec;let ep=d.forwardRef(function(e,t){let{children:n,value:r}=e,o=(0,a.Z)(e,["children","value"]),u=eo();if(null===u)throw TypeError("No TabContext provided");let c=el(u,r),s=ea(u,r);return void 0===r?null:d.createElement(i.Z,(0,l.Z)({ref:t,hidden:u.value!==r,id:c,"aria-labelledby":s,role:"tabpanel"},o),n)});var ef=ep,em=n(63825),eh=n(76328);let eg=(0,u.ZP)(p.Z).attrs({alignItems:"center",justifyContent:"center",backgroundColor:"background.lighter"})`
  height: 24px;
`,ev=(0,u.ZP)(i.Z)`
  width: 100%;
`,eb=(0,u.ZP)(i.Z).attrs(e=>Object.assign({},e,{borderRadius:"medium",zIndex:0}))`
  background-color: ${e=>(0,c.R)("baseColors.wildsand.base")(e)};
  position: absolute;
  height: 3px;
  width: 100%;
`,ex=(0,u.ZP)(i.Z).attrs({bg:"background.primary",borderRadius:"medium",zIndex:1})`
  position: absolute;
  height: 3px;
`,e$=u.ZP.input.attrs({type:"range"})`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  z-index: ${e=>e.overlapIndex?(0,c.R)(`zIndices.${e.overlapIndex}`)(e):(0,c.R)("zIndices.3")(e)};

  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
    background-color: ${(0,c.dF)("lighter")};
    border: ${e=>(0,c.R)("borders.0")(e)};
    border-radius: ${e=>(0,c.R)("radii.circle")(e)};
    box-shadow: ${e=>(0,c.R)("boxShadows.2")(e)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: ${(0,c.dF)("lighter")};
    border: ${e=>(0,c.R)("borders.0")(e)};
    border-radius: ${e=>(0,c.R)("radii.circle")(e)};
    box-shadow: ${e=>(0,c.R)("boxShadows.2")(e)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`,eZ=({minAllowed:e,maxAllowed:t,currentMin:n,currentMax:r,onChange:i})=>{let[o,l]=(0,d.useState)(n),[a,u]=(0,d.useState)(r),c=(0,d.useRef)(null),s=(0,d.useRef)(null),p=(0,d.useRef)(null),f=(0,d.useCallback)(n=>Math.round((n-e)/(t-e)*100),[n,r]),m=n=>(0,S.Z4)(n,r,e,t),h=r=>(0,S.rx)(r,n,e,t);(0,d.useEffect)(()=>{if(s.current){let e=f(o),t=f(+s.current.value);p.current&&(p.current.style.left=`${e}%`,p.current.style.width=`${t-e}%`)}},[o,f]),(0,d.useEffect)(()=>{if(c.current){let e=f(+c.current.value),t=f(a);p.current&&(p.current.style.width=`${t-e}%`)}},[a,f]),(0,d.useEffect)(()=>{l(m(n)?n:e),u(h(r)?r:t)},[n,r]);let g=(e,t)=>{i({currentMin:e,currentMax:t})};return d.createElement(eg,null,d.createElement(e$,{"data-testid":"slider-input-min",type:"range",min:e,max:t,value:o,ref:c,step:.01,overlapIndex:o>t-100?4:2,onChange:function(e){let t=Math.min(+e.target.value,a-1);l(t),g(t,a)}}),d.createElement(e$,{"data-testid":"slider-input-max",type:"range",min:e,max:t,value:a,ref:s,step:.01,onChange:function(e){let t=Math.max(+e.target.value,o+1);u(t),g(o,t)}}),d.createElement(ev,null,d.createElement(eb,null),d.createElement(ex,{ref:p})))};var ew=eZ,ey=n(7121)},12468:function(e,t,n){n.d(t,{Bl:function(){return c},Co:function(){return r},IY:function(){return o},K9:function(){return s},RW:function(){return l},Uh:function(){return p},dz:function(){return u},ig:function(){return d},w:function(){return a},wp:function(){return f},yg:function(){return i}});let r="miniature",i="gallery",o="list",l="https://www.magazineluiza.com.br",a={width:"186",height:"140"},d="magazineluiza",u="Descubra outras ofertas aqui",c={endIcon:"ChevronRight",justifyContent:"flex-start"},s="Mostrar mais produtos",p={startIcon:"ChevronDownCircle",centered:!0},f="BRL"},87302:function(e,t,n){n.d(t,{CKO:function(){return o.CK},Eep:function(){return r.Ee},VqE:function(){return r.Vq},X6q:function(){return r.X6},YE2:function(){return i.YE},bdZ:function(){return o.bd},kCb:function(){return r.kC},lbA:function(){return o.lb},rUS:function(){return r.rU},rjZ:function(){return r.rj},t$X:function(){return o.t$},ukE:function(){return r.uk},xuv:function(){return r.xu},xvT:function(){return r.xv}});var r=n(87043);n(39146);var i=n(46514);n(82709);var o=n(86349);n(12468)}}]);
//# sourceMappingURL=8621-cd86c1b33b2ece71.js.map