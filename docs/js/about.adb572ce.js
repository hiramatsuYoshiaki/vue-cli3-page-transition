(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"145b":function(t,e,i){},1822:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works"},[i("div",{staticClass:"worksWrap"},[i("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"works"}}),i("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"works",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),i("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),i("WorksContent",{attrs:{msg:"WorksContent"}})],1)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"worksContent"},[i("main",[i("div",{staticClass:"main-header"},[i("section",{staticClass:"main-header-wrape"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",[t._v("WORKS COMPONENT ")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("Seamless Page Transition Demo")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("概要")])])],1)])]),i("transition",{attrs:{name:"mainCon",appear:""}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"col2-content"},[i("div",{staticClass:"col-block left-block"},[i("div",{staticClass:"section-block caption-section"},t._l(t.h1LeftArreys,function(e,o){return i("div",{key:o},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:e.tName,appear:""}},[i("div",[i("p",{style:{color:e.tColor}},[t._v(t._s(e.tText))])])])],1)])}),0)]),i("div",{staticClass:"col-block right-block"},[i("div",{staticClass:"section-block image-section"},t._l(t.h1RightArreys,function(e,o){return i("div",{key:o},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:e.tName,appear:""}},[i("div",[i("h1",{style:{color:e.tColor}},[t._v(t._s(e.tText))])])])],1)])}),0)])])])])],1),i("FooterBar",{attrs:{msg:"footerBar",navMenu:"prpject",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)},n=[],r=i("df2e"),c={name:"WorksContent",props:{msg:String},components:{FooterBar:r["a"]},data:function(){return{imgURL1:i("b748"),imgURL2:i("4f50"),imgURL3:i("7746"),imgURL4:i("7686"),logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),scrollY:0,MaxScrollY:0,innerHeight:0,menuVisible:String,mobileBarType:String,mobileBarAction:String,h1LeftArreys:[{tName:"carousel-pop-up1",tText:"Seamless Page Transitionは、シームレスなページ遷移を実装するために、テストケースとして作成したデモンストレーションサイトです。",tColor:"rgba(0,0,0,1)"},{tName:"carousel-pop-up2",tText:"ランディングページのカルーセルは、訪問者を退屈させません。その、リンクをクリックし、目的とするページへの遷移は、シームレスに行われます。訪問者は、アニメーションを気にしている瞬間に、次のページに到達しています。",tColor:"rgba(0,0,0,1)"},{tName:"carousel-pop-up3",tText:"このウェブサイトは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。Vue.jsを使いコンポーネントを、できるだけ使いやすく再利用できることをめざし、試行錯誤しています。ただ、これは完成されたものではありません、あくまで試作品であり、スキル習得のためのステップにすぎません。",tColor:"rgba(0,0,0,.6)"}],h1RightArreys:[{tName:"carousel-pop-up1",tText:"ランディングページより",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up2",tText:"シームレスに",tColor:"rgba(0,0,0,1)"},{tName:"carousel-pop-up3",tText:"訪問者の行きたい",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up4",tText:"情報へ遷移します。",tColor:"rgba(0,0,0,.6)"}],img1Arreys:[{tName:"text-pop-up1",tText:"Opportunities. Chances.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Our mission: Prime",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"products and services.",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"Focusing on your needs.",tColor:"rgba(0,0,0,.6)"}],img1Captionblock:0,img1Imageblock:0,img2Arreys:[{tName:"text-pop-up1",tText:"Expertise. Spirit.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Prime experience and",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"dedication. Focusing on",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"risk and performance.",tColor:"rgba(0,0,0,.6)"}],img2Captionblock:0,img2Imageblock:0}},computed:{page:function(){return this.$store.state.page}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.init()},methods:{handleScroll:function(){this.img1Imageblock=document.getElementById("img1Imageblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.img2Captionblock=document.getElementById("img2Captionblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.img2Imageblock=document.getElementById("img2Imageblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.innerHeight=window.innerHeight,this.scrollY=window.scrollY,this.scrollY>this.MaxScrollY&&(this.MaxScrollY=this.scrollY)},init:function(){this.$store.commit("works"),this.innerHeight=window.innerHeight,this.scrollY=window.scrollY},link_commit:function(t,e){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:e})},500)}}},l=c,p=(i("f05d"),i("2877")),u=Object(p["a"])(l,a,n,!1,null,"75c322c2",null),m=u.exports,d=i("c779"),g=i("50d0"),b=i("d4ad"),h={name:"Works",components:{WorksContent:m,HeaderBar:d["a"],BgImageFull:g["a"],TransitionScreen:b["a"]},data:function(){return{bgImage:i("4f50")}}},v=h,C=(i("ef80"),Object(p["a"])(v,o,s,!1,null,"21a84f74",null));e["default"]=C.exports},"4fca":function(t,e,i){},"62e9":function(t,e,i){"use strict";var o=i("f50a"),s=i.n(o);s.a},"7aba":function(t,e,i){"use strict";var o=i("145b"),s=i.n(o);s.a},9703:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notFound"},[i("h1",[t._v("This is an notFound page")]),i("h3",[i("router-link",{attrs:{to:"/"}},[t._v("\n         Go Back Home\n      ")])],1)])},s=[],a=i("2877"),n={},r=Object(a["a"])(n,o,s,!1,null,null,null);e["default"]=r.exports},"9d02":function(t,e,i){},"9f17":function(t,e,i){},a058:function(t,e,i){},a09e:function(t,e,i){"use strict";var o=i("9d02"),s=i.n(o);s.a},a14d:function(t,e,i){},a15c:function(t,e,i){"use strict";var o=i("a058"),s=i.n(o);s.a},acca:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects"},[t._v("\r\n    project \r\n  "),i("div",{staticClass:"projectsWrap"},[i("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"projects"}}),i("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"projects",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),i("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),i("projectsContent",{attrs:{msg:"projectsContent",pageView:"projects"}})],1)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projectsContent"},[i("main",[i("div",{staticClass:"main-header"},[i("section",{staticClass:"main-header-wrape"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",[t._v("PROJECTS COMPONENT ")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("Seamless Page Transition Demo")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("画像からのトランジション")])])],1)])]),i("transition",{attrs:{name:"mainCon",appear:""}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"historySection"},[i("div",{staticClass:"center-line"}),i("div",{staticClass:"history-header"},[i("div",{staticClass:"col-block header-block"},[i("div",{staticClass:"header-block-wrap"},[i("h1",[t._v("画像からもシームレスに")]),i("h1",[t._v("遷移できます。")])]),i("p",{staticClass:"history-menu-title"},[t._v("MENU")])])]),i("div",{staticClass:"history-altanative"},[i("div",{staticClass:"grid-container"},[i("div",{staticClass:"col2-block left-block",attrs:{id:"sec1SelectTop"}},[i("div",{staticClass:"section-block section-right"},[i("div",{staticClass:"altanative-wrap",class:{"altanative-wrap-right":!t.sec1Select}},[!t.isHidden||t.sec1Select?i("div",{staticClass:"image-group-right",class:{fullScreenImageLeft:t.sec1Select}},[i("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[2].imgURL+")"},on:{click:function(e){return t.scrollTopSec1()}}})]):t._e(),t.isHidden?t._e():i("div",{staticClass:"subscribe-group subscribe-group-right"},[i("div",{staticClass:"subscribe-wrap subscribe-wrap-right",on:{click:function(e){return t.scrollTopSec1()}}},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",{on:{click:function(e){return t.scrollTopSec1()}}},[t._v(t._s(t.contents[2].imgDate))])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",{on:{click:function(e){return t.scrollTopSec1()}}},[t._v(t._s(t.contents[2].imgTitle))])])],1)])])])])]),i("div",{staticClass:"col2-block right-block",attrs:{id:"sec2SelectTop"}},[i("div",{staticClass:"section-block section-left"},[i("div",{staticClass:"altanative-wrap altanative-wrap-left"},[!t.isHidden||t.sec2Select?i("div",{staticClass:"image-group-left",class:{fullScreenImageRight:t.sec2Select}},[i("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[0].imgURL+")"},on:{click:function(e){return t.scrollTopSec2()}}})]):t._e(),t.isHidden?t._e():i("div",{staticClass:"subscribe-group subscribe-group-left"},[i("div",{staticClass:"subscribe-wrap subscribe-wrap-left",on:{click:function(e){return t.scrollTopSec2()}}},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",{on:{click:function(e){return t.scrollTopSec2()}}},[t._v(t._s(t.contents[0].imgDate))])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",{on:{click:function(e){return t.scrollTopSec2()}}},[t._v(t._s(t.contents[0].imgTitle))])])],1)])])])])]),i("div",{staticClass:"col2-block left-block",attrs:{id:"sec3SelectTop"}},[i("div",{staticClass:"section-block section-right"},[i("div",{staticClass:"altanative-wrap",class:{"altanative-wrap-right":!t.sec3Select}},[!t.isHidden||t.sec3Select?i("div",{staticClass:"image-group-right",class:{fullScreenImageLeft3:t.sec3Select}},[i("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[4].imgURL+")"},on:{click:function(e){return t.scrollTopSec3()}}})]):t._e(),t.isHidden?t._e():i("div",{staticClass:"subscribe-group subscribe-group-right"},[i("div",{staticClass:"subscribe-wrap subscribe-wrap-right",on:{click:function(e){return t.scrollTopSec3()}}},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",{on:{click:function(e){return t.scrollTopSec3()}}},[t._v(t._s(t.contents[4].imgDate))])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",{on:{click:function(e){return t.scrollTopSec3()}}},[t._v(t._s(t.contents[4].imgTitle))])])],1)])])])])]),i("div",{staticClass:"col2-block right-block",attrs:{id:"sec4SelectTop"}},[i("div",{staticClass:"section-block section-left"},[i("div",{staticClass:"altanative-wrap altanative-wrap-left"},[!t.isHidden||t.sec4Select?i("div",{staticClass:"image-group-left",class:{fullScreenImageRight4:t.sec4Select}},[i("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[3].imgURL+")"},on:{click:function(e){return t.scrollTopSec4()}}})]):t._e(),t.isHidden?t._e():i("div",{staticClass:"subscribe-group subscribe-group-left"},[i("div",{staticClass:"subscribe-wrap subscribe-wrap-left",on:{click:function(e){return t.scrollTopSec4()}}},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",{on:{click:function(e){return t.scrollTopSec4()}}},[t._v(t._s(t.contents[3].imgDate))])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",{on:{click:function(e){return t.scrollTopSec4()}}},[t._v(t._s(t.contents[3].imgTitle))])])],1)])])])])])])]),i("div",{staticClass:"history-footer"},[i("div",{staticClass:"col-block footer-block"},[i("div",{staticClass:"footer-block-wrap"},[i("p",[t._v("Seamless Page Transition Demo")])])])]),i("transition",{attrs:{appear:"",name:"tScreen"}},[t.page===t.pageView?i("div",{staticClass:"tranScreen"}):t._e()]),i("transition",{attrs:{name:"fade500W500"}},[t.isHidden?i("div",{staticClass:"bg_filter"}):t._e()])],1)])]),i("FooterBar",{attrs:{msg:"footerBar",navMenu:"prpject",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)])},n=[],r=i("df2e"),c={name:"ProjectsContent",props:{msg:String,pageView:String},components:{FooterBar:r["a"]},data:function(){return{logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),isHidden:!1,isChengPage:!1,sec1Select:!1,sec2Select:!1,sec3Select:!1,sec4Select:!1,sec1Position:0,scrollY:0,windowH:0,scrollTopHeight:0,sec1SelectTop:0,sec2SelectTop:0,sec3SelectTop:0,sec4SelectTop:0,contents:[{id:0,title:"img1",bg_color:"#f16972",imgURL:i("4f50"),titel:"WORKS CONTENT",detail:"path:/works",link:"works",link_path:"/works",imgTitle:"WORKS CONTENT",imgDate:"Link"},{id:1,title:"img2",bg_color:"#7bbff9",imgURL:i("a485"),titel:"PROJECTS CONTENT",detail:"path:/projects",link:"projects",link_path:"/projects",imgTitle:"PROJECTS CONTENT",imgDate:"Link"},{id:2,title:"img3",bg_color:"#f16972",imgURL:i("7746"),titel:"ABOUT CONTENT ",detail:"path:/about",link:"about",link_path:"/about",imgTitle:"ABOUT CONTENT",imgDate:"Link"},{id:3,title:"img4",bg_color:"#20d2d3",imgURL:i("7686"),titel:"CONTACT CONTENT",detail:"path:/content",link:"contact",link_path:"/contact",imgTitle:"CONTACT CONTENT",imgDate:"Link"},{id:4,title:"img5",bg_color:"#7bbff9",imgURL:i("e7ee"),titel:"HOME CONTENT ",detail:"path:/",link:"home",link_path:"/",imgTitle:"HOME CONTENT",imgDate:"Link"}]}},computed:{page:function(){return this.$store.state.page}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.init()},methods:{handleScroll:function(){this.scrollY=window.scrollY,this.windowH=window.innerHeight,this.sec1SelectTop=document.getElementById("sec1SelectTop").getBoundingClientRect().top+window.scrollY,this.sec2SelectTop=document.getElementById("sec2SelectTop").getBoundingClientRect().top+window.scrollY,this.sec3SelectTop=document.getElementById("sec3SelectTop").getBoundingClientRect().top+window.scrollY,this.sec4SelectTop=document.getElementById("sec4SelectTop").getBoundingClientRect().top+window.scrollY},scrollTopSec1:function(){var t=this;this.sec1SelectTop=document.getElementById("sec1SelectTop").getBoundingClientRect().top+window.scrollY,this.scrollTopHeight=this.sec1SelectTop-window.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec1Select=!0,t.isHidden=!0,setTimeout(function(){var e="about",i="/about";t.$store.commit(e),setTimeout(function(){t.$router.push({path:i}),t.sec1Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec2:function(){var t=this;this.sec2SelectTop=document.getElementById("sec2SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec2SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec2Select=!0,t.isHidden=!0,setTimeout(function(){var e="works",i="/works";t.$store.commit(e),setTimeout(function(){t.$router.push({path:i}),t.sec2Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec3:function(){var t=this;this.sec3SelectTop=document.getElementById("sec3SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec3SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec3Select=!0,t.isHidden=!0,setTimeout(function(){var e="home",i="/";t.$store.commit(e),setTimeout(function(){t.$router.push({path:i}),t.sec3Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec4:function(){var t=this;this.sec4SelectTop=document.getElementById("sec4SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec4SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec4Select=!0,t.isHidden=!0,setTimeout(function(){var e="contact",i="/contact";t.$store.commit(e),setTimeout(function(){t.$router.push({path:i}),t.sec4Select=!1,t.isHidden=!1},500)},1500)},1e3)},link_commit:function(t,e){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:e})},500)},init:function(){this.$store.commit("projects"),this.scrollY=window.scrollY,this.windowH=window.innerHeight}}},l=c,p=(i("a09e"),i("2877")),u=Object(p["a"])(l,a,n,!1,null,"0e3f74d8",null),m=u.exports,d=i("c779"),g=i("50d0"),b=i("d4ad"),h={name:"Projects",components:{projectsContent:m,HeaderBar:d["a"],BgImageFull:g["a"],TransitionScreen:b["a"]},data:function(){return{bgImage:i("a485")}}},v=h,C=(i("62e9"),Object(p["a"])(v,o,s,!1,null,"f80439b0",null));e["default"]=C.exports},b5dd:function(t,e,i){"use strict";var o=i("4fca"),s=i.n(o);s.a},b748:function(t,e,i){t.exports=i.p+"img/page-tran-test1.32bd832b.gif"},b8fa:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("div",{staticClass:"contactWrap"},[i("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"contact"}}),i("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"contact",headerScrollType:!1,headerFixedType:!0,headerStikyType:!1}}),i("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),i("ContactContent",{attrs:{msg:"ContactContent"}})],1)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contactContent"},[i("main",[i("transition",{attrs:{name:"mainCon",appear:""}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"col2-content"},[i("div",{staticClass:"col-block left-block"},[i("div",{staticClass:"section-block left-section"},[i("div",{staticClass:"contact-title"},[i("div",{staticClass:"link-text"},[i("a",{attrs:{href:"http://tourdehdr.sakuraweb.com/h-works-website/index.html"}},[i("p",[t._v("portfolio site")]),i("p",[t._v("http://tourdehdr.sakuraweb.com/h-works-website/index.html")]),i("br"),i("h1",[t._v("HIRAMATSU WORKS")]),i("br"),i("p",[t._v("このWEBサイトは、作品をご覧いただき、デザイン、コーディング、プログラミングなどのスキルレベルをご確認いただくために作成しております。")])])])])])]),i("div",{staticClass:"col-block right-block"},[i("div",{staticClass:"section-block left-section"},[i("p",[i("i",{staticClass:"far fa-envelope"}),i("span",[t._v("hiramatsu3300@gmail.com")])]),i("p",[i("i",{staticClass:"fas fa-phone"}),i("span",[t._v("111-222-33333")])]),i("br"),i("p",[t._v("Minami 444-55")]),i("p",[t._v("Okayama ")]),i("p",[t._v("japan")])])])])])])],1)])},n=[],r={name:"ContactContent",props:{msg:String}},c=r,l=(i("a15c"),i("2877")),p=Object(l["a"])(c,a,n,!1,null,"aae3145a",null),u=p.exports,m=i("c779"),d=i("50d0"),g=i("d4ad"),b={name:"Contact",components:{ContactContent:u,HeaderBar:m["a"],BgImageFull:d["a"],TransitionScreen:g["a"]},data:function(){return{bgImage:i("7686")}}},h=b,v=(i("ff80"),Object(l["a"])(h,o,s,!1,null,"4b5d6932",null));e["default"]=v.exports},bd11:function(t,e,i){},c1ea:function(t,e,i){},df2e:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footerBar "},[i("div",{staticClass:"footerBar-Wrap"},[t.footerTop?i("div",{staticClass:"footer-top"},[i("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("home","/")}}},[i("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"h-works logo"}})])]):t._e(),t.footerSepalater?i("div",{staticClass:"footer-sepalater"},[i("div",{staticClass:"line"})]):t._e(),t.footerMenu?i("nav",{staticClass:"footer-menu"},[i("div",{staticClass:"m-menu-wrap  "},[i("div",{staticClass:"menu_items "},[i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"works"===t.page},on:{click:function(e){return t.link_commit("works","/works")}}},[t._v("\n                Works\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"projects"===t.page},on:{click:function(e){return t.link_commit("projects","/projects")}}},[t._v("\n                Projects\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"about"===t.page},on:{click:function(e){return t.link_commit("about","/about")}}},[t._v("\n                ABOUT\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"contact"===t.page},on:{click:function(e){return t.link_commit("contact","/contact")}}},[t._v("\n                CONTACT\n              ")]),i("div",{staticClass:"menu_underline"})])])])]):t._e(),t.footerBottom?i("div",{staticClass:"footer-bottom"},[t._m(0)]):t._e()])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-bottom-wrap"},[i("div",{staticClass:"copy-light"},[t._v("© 2018 h-works. All Rights Reserved")]),i("a",{attrs:{href:"#top"}},[i("div",[t._v("TOP")])])])}],a={name:"FooterBar",props:{msg:String,navMenu:String,footerTop:Boolean,footerBottom:Boolean,footerMenu:Boolean,footerSepalater:Boolean,logo:String},data:function(){return{logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),logoSvg:i("fb34")}},computed:{page:function(){return this.$store.state.page}},methods:{link_commit:function(t,e){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:e})},500)}}},n=a,r=(i("7aba"),i("2877")),c=Object(r["a"])(n,o,s,!1,null,"69736ee8",null);e["a"]=c.exports},ea78:function(t,e,i){"use strict";var o=i("bd11"),s=i.n(o);s.a},ef80:function(t,e,i){"use strict";var o=i("a14d"),s=i.n(o);s.a},f05d:function(t,e,i){"use strict";var o=i("c1ea"),s=i.n(o);s.a},f50a:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticClass:"aboutWrap"},[i("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"about"}}),i("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"about",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),i("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),i("AboutContent",{attrs:{msg:"AboutContent"}})],1)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutContent"},[i("main",[i("div",{staticClass:"main-header"},[i("section",{staticClass:"main-header-wrape"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",[t._v("ABOUT COMPONENT ")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("Seamless Page Transition Demo")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("GitHubを使う ")])])],1)])]),i("transition",{attrs:{name:"mainCon",appear:""}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"col2-content"},[i("div",{staticClass:"col-block left-block"},[i("div",{staticClass:"section-block caption-section"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[i("div",[i("p",[t._v("Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。")])])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[i("div",[i("p",[t._v("このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。")])])])],1),i("div",{staticClass:"link-text"},[i("a",{attrs:{href:"https://hiramatsuyoshiaki.github.io/vue-cli3-page-transition/"}},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up4",appear:""}},[i("div",[i("p",[i("i",{staticClass:"fab fa-github"}),i("span",[t._v("GitHub Repository")])]),i("p",[t._v("hiramatsuYoshiaki/vue-cli3-page-transition")]),i("p",[t._v("URL: https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition")])])])],1)])]),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up3",appear:""}},[i("div",{staticClass:"text-color-gray"},[i("p",[t._v("このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。")])])])],1)])]),i("div",{staticClass:"col-block right-block"},[i("div",{staticClass:"section-block image-section"},t._l(t.h1RightArreys,function(e,o){return i("div",{key:o},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:e.tName,appear:""}},[i("div",[i("h1",{style:{color:e.tColor}},[t._v(t._s(e.tText))])])])],1)])}),0)])])])]),i("FooterBar",{attrs:{msg:"footerBar",navMenu:"prpject",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)])},n=[],r=i("df2e"),c={name:"AboutContent",props:{msg:String},components:{FooterBar:r["a"]},data:function(){return{imgURL1:i("e7ee"),imgURL2:i("4f50"),imgURL3:i("7746"),imgURL4:i("7686"),logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),scrollY:0,MaxScrollY:0,innerHeight:0,menuVisible:String,mobileBarType:String,mobileBarAction:String,cardDatas:[{id:"card0",img:i("e7ee"),title:"title1",subscription:"subscription1"},{id:"card1",img:i("4f50"),title:"title2",subscription:"subscription2"},{id:"card2",img:i("7746"),title:"title3",subscription:"subscription3"},{id:"card3",img:i("7686"),title:"title4",subscription:"subscription4"}],cardSectionPosition:[],h1LeftArreys:[{tName:"carousel-pop-up1",tText:"Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up2",tText:"このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up3",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up4",tText:"4このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up5",tText:"5このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up6",tText:"6このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up7",tText:"7このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up8",tText:"8このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up9",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"}],h1RightArreys:[{tName:"carousel-pop-up1",tText:"GitHubで...",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up2",tText:"再利用が簡単",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up3",tText:"バージョンを管理",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up4",tText:"チームで活用",tColor:"rgba(0,0,0,.6)"}],img1Arreys:[{tName:"text-pop-up1",tText:"Opportunities. Chances.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Our mission: Prime",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"products and services.",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"Focusing on your needs.",tColor:"rgba(0,0,0,.6)"}],img1Captionblock:0,img1Imageblock:0,img2Arreys:[{tName:"text-pop-up1",tText:"Expertise. Spirit.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Prime experience and",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"dedication. Focusing on",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"risk and performance.",tColor:"rgba(0,0,0,.6)"}],img2Captionblock:0,img2Imageblock:0}},computed:{page:function(){return this.$store.state.page}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.init()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){for(var t=0;t<this.cardDatas.length;t++)this.cardSectionPosition[t]=document.getElementById(this.cardDatas[t].id).getBoundingClientRect().top+window.scrollY-.7*window.innerHeight;this.img1Captionblock=document.getElementById("img1Captionblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.img1Imageblock=document.getElementById("img1Imageblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.img2Captionblock=document.getElementById("img2Captionblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.img2Imageblock=document.getElementById("img2Imageblock").getBoundingClientRect().top+window.scrollY-.8*window.innerHeight,this.innerHeight=window.innerHeight,this.scrollY=window.scrollY,this.scrollY>this.MaxScrollY&&(this.MaxScrollY=this.scrollY)},init:function(){this.$store.commit("about"),this.innerHeight=window.innerHeight,this.scrollY=window.scrollY},link_commit:function(t,e){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:e})},500)}}},l=c,p=(i("b5dd"),i("2877")),u=Object(p["a"])(l,a,n,!1,null,"ea97b722",null),m=u.exports,d=i("c779"),g=i("50d0"),b=i("d4ad"),h={name:"About",components:{AboutContent:m,HeaderBar:d["a"],BgImageFull:g["a"],TransitionScreen:b["a"]},data:function(){return{bgImage:i("7746")}}},v=h,C=(i("ea78"),Object(p["a"])(v,o,s,!1,null,"29155b41",null));e["default"]=C.exports},ff80:function(t,e,i){"use strict";var o=i("9f17"),s=i.n(o);s.a}}]);
//# sourceMappingURL=about.adb572ce.js.map