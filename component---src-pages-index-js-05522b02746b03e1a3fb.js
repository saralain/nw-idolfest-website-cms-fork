(self.webpackChunknw_idolfest_website=self.webpackChunknw_idolfest_website||[]).push([[678],{1446:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/97b65/socal_test.png","srcSet":"/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/591d3/socal_test.png 33w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/a6003/socal_test.png 67w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/97b65/socal_test.png 133w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/7b8df/socal_test.png 266w","sizes":"(min-width: 133px) 133px, 100vw"},"sources":[{"srcSet":"/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/18f5f/socal_test.webp 33w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/f7a94/socal_test.webp 67w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/0f5e4/socal_test.webp 133w,\\n/nw-idolfest-website-cms-fork/static/2ed145dd599d561ba9a42eb699912d6e/c13f8/socal_test.webp 266w","type":"image/webp","sizes":"(min-width: 133px) 133px, 100vw"}]},"width":133,"height":50}')},9851:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),r=a(7095),i=a(5583),o=a(6273),l=a(6924),s=a(5954),c=a(5444),d=a(920),p=a(3332),u=a(7627),m=a(7676),f=(0,u.Z)((function(e){return{carouselSlider:{width:"100%",maxWidth:"800px",height:"400px",position:"relative",overflow:"hidden","@media (max-width: 800px)":{width:"calc(100vw - 4em)",height:"200px","& img":{objectFit:"scale-down !important"}}},carouselSlide:{width:"100%",maxWidth:"100vw",height:"400px",position:"absolute",textAlign:"center","& > div":{height:"400px",objectFit:"cover"},"@media (max-width: 800px)":{"& > div":{height:"200px"},height:"auto"}},btn:{position:"absolute",width:"40px",height:"40px",padding:"10px",border:"none",borderRadius:"50%",zIndex:10,cursor:"pointer",backgroundColor:e.palette.light_pink,fontSize:"18px",lineHeight:"18px",top:"45%","@media (max-width: 800px)":{top:"40%"},"&:active":{transform:"scale(1.1)",backgroundColor:e.palette.dark_pink}},btnPrev:{left:"2%"},btnNext:{right:"2%"}}})),b=function(e){var t=f(),a=(0,n.createRef)(),r=(0,n.useState)(0),i=r[0],o=r[1],l=(0,n.useState)(!1),s=l[0],c=l[1],d=(0,n.useState)(!1),p=d[0],u=d[1];(0,n.useEffect)((function(){s?a.current.querySelectorAll("."+t.carouselSlide).forEach((function(e,t){e.style.transform="translateX("+100*(t-i)+"%)",e.style.transition="all 0.5s"})):document.querySelectorAll("."+t.carouselSlide).forEach((function(e,t){e.style.transform="translateX("+100*t+"%)"}))}),[s,c,t,i,a]),(0,n.useEffect)((function(){var e=setInterval((function(){p||b()}),4e3);return function(){return clearInterval(e)}}));var b=(0,n.useCallback)((function(){c(!0),i<e.images.length-1?o(i+1):o(0)}),[i,o,e]),g=(0,n.useCallback)((function(){u(!0),b()}),[u,b]),h=(0,n.useCallback)((function(){c(!0),u(!0),o(i>0?i-1:e.images.length-1)}),[i,o,e]),w=e.images;return n.createElement("div",{className:""+t.carouselSlider,ref:a},w.map((function(a){return n.createElement("div",{className:""+t.carouselSlide,style:{animationDuration:e.animationDuration},key:a.relativePath},n.createElement(m.G,{image:a.childImageSharp.gatsbyImageData,placeholder:"blurred",alt:"Prior event"}))})),n.createElement("button",{className:t.btn+" "+t.btnNext,onClick:g},">"),n.createElement("button",{className:t.btn+" "+t.btnPrev,onClick:h},"<"))},g=(0,u.Z)((function(e){return{banner:{fontSize:"20px",lineHeight:"45px",border:"1px solid #aaa",borderRadius:"10px",marginBottom:"16px",padding:"5px","& a":{boxShadow:"none"},"& img":{paddingRight:"20px"},"@media (max-width: 800px)":{fontSize:"16px",lineHeight:"32px",textAlign:"center"}}}})),h=n.createElement(m.S,{layout:"constrained",alt:"",height:50,transformOptions:{fit:"contain"},src:"../images/logo/socal_test.png",placeholder:"none",backgroundColor:"transparent",__imageData:a(1446)}),w=function(e){var t=g();(0,c.useStaticQuery)("3869074493").site;return n.createElement("div",{className:t.banner},n.createElement("a",{href:"https://scidolfest.com",target:"_blank",rel:"noreferrer"},h,"SoCal IdolFest is coming to LA on August 12! Click here to find out more!"))},x=(0,d.Z)((function(e){return{introWrapper:{position:"relative"},introText:{position:"absolute",backgroundColor:"#fff",borderRadius:"5px",opacity:"0.85",top:"calc(50% - 8px)",left:"50%",transform:"translate(-50%, -50%)",padding:"4px 16px",textAlign:"center"},introLine:{width:"100%",backgroundColor:"#fff",height:"4px"},carouselHolder:{margin:"auto",display:"grid",placeItems:"center",marginBottom:"24px"},buttonHolder:{display:"flex",flexWrap:"wrap","& > a":{flexGrow:1,margin:"4px 32px",width:"200px",flexBasis:"200px",marginTop:"24px",textAlign:"center"},"& > .MuiButton-sizeLarge":{fontSize:"150%"}}}})),v=function(){var e=x(),t=(0,c.useStaticQuery)("1184905760").images.nodes;return n.createElement(r.Z,null,n.createElement(i.Z,{title:"Home"}),n.createElement(s.Z,{title:"Announcing NW IdolFest 2023!"}),n.createElement(o.Z,null,n.createElement(w,null),n.createElement("div",{className:e.carouselHolder},n.createElement(b,{images:t})),n.createElement("p",null,"Get ready for NW IdolFest 2023!"),n.createElement("br",null),n.createElement("p",null,"Back for our third year, Northwest IdolFest is a three day convention all about idols, anisong, and j-pop! Featuring your favorite idol performers, vendors, and tons of amazing panels, join us in Seattle, WA from October 20-22, 2023."),n.createElement("div",{className:e.buttonHolder},n.createElement(p.Z,{variant:"contained",size:"large",className:"cta",href:"/register"},"Buy a Badge")),n.createElement("div",{className:e.buttonHolder},n.createElement(p.Z,{variant:"contained",className:"cta",href:"https://idolfe.st/vendorapp"},"Apply as a Vendor"),n.createElement(p.Z,{variant:"contained",className:"cta",href:"https://idolfe.st/panelapp"},"Apply as a Panelist or Performer"),n.createElement(p.Z,{variant:"contained",className:"cta",href:"https://idolfe.st/nlapp"},"Apply for a Northern Lights performance")),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"Sign up for our email list below to get notifications for future announcements."),n.createElement(l.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-05522b02746b03e1a3fb.js.map