(this["webpackJsonpsiddha-news"]=this["webpackJsonpsiddha-news"]||[]).push([[0],{10:function(e,n,t){e.exports={navbar:"navigationBar_navbar__129u1",dropdown:"navigationBar_dropdown__1Zvkq",dropbtn:"navigationBar_dropbtn__39fKh","dropdown-content":"navigationBar_dropdown-content__2FY-1",active:"navigationBar_active__U7sCb"}},16:function(e,n,t){e.exports={newsContent:"newsContent_newsContent__7KLZJ",content:"newsContent_content__1qrJi"}},18:function(e,n,t){e.exports={card:"newsCard_card__cVb3e",container:"newsCard_container__2xa_v"}},19:function(e,n,t){e.exports={news:"news_news__3lfl7"}},21:function(e,n,t){e.exports={newsList:"newsList_newsList__2yBb9"}},22:function(e,n,t){e.exports={header:"header_header__2WPSP"}},27:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(17),r=t.n(s),i=(t(27),t(9)),o=t(18),l=t.n(o),j=t(0),d=function(e){return Object(j.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),onClick:e.onClick,children:e.children})},u=t(19),b=t.n(u),h=t(2),O=function(e){var n=e.news,t=Object(h.f)(),c=function(){e.onClick(e.news),t.push("/news")};return Object(j.jsxs)(d,{className:b.a.news,onClick:c,children:[Object(j.jsx)("img",{src:n.image,onClick:c,alt:""}),Object(j.jsx)("h2",{onClick:c,children:n.title}),Object(j.jsx)("p",{children:n.source.name})]})},x=t(21),p=t.n(x),f=function(e){var n=Object(c.useState)([]),t=Object(i.a)(n,2),a=t[0],s=t[1],r=e.url;return Object(c.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){return s(e.articles)})).catch((function(e){return alert("Daily limit reached")}))}),[r]),a.length>0?Object(j.jsx)("div",{className:p.a.newsList,children:a.map((function(n){return Object(j.jsx)(O,{news:n,onClick:e.onClick},n.title)}))}):Object(j.jsx)("p",{children:"Loading..."})},v=t(16),w=t.n(v),_=function(e){var n=e.news;return Object(j.jsxs)("div",{className:w.a.newsContent,children:[Object(j.jsx)("h2",{children:Object(j.jsx)("span",{children:n.source.name})}),Object(j.jsx)("h1",{children:Object(j.jsx)("u",{children:n.title})}),Object(j.jsxs)("p",{children:[n.publishedAt.replace("T",", ").replace("Z","")," UTC"]}),Object(j.jsxs)("figure",{children:[" ",Object(j.jsx)("img",{src:n.image,alt:"Unabel to load Image"}),Object(j.jsxs)("figcaption",{children:["\xa9 Provided by ",n.source.name]})]}),Object(j.jsxs)("div",{className:w.a.content,children:[Object(j.jsx)("p",{children:n.description}),Object(j.jsxs)("p",{children:[n.content," ",Object(j.jsx)("a",{href:n.url,children:"Read More"})," "]})]})]})},m=t(22),g=t.n(m),C=function(e){var n=Object(c.useRef)(),t=Object(h.f)();return Object(j.jsxs)("div",{className:g.a.header,children:[Object(j.jsx)("h1",{children:"Siddha News"}),Object(j.jsxs)("form",{onSubmit:function(c){c.preventDefault(),0!==n.current.value.trim().length?(e.searchValueHandler(n.current.value),t.push("/search")):alert("Please Enter Valid Value")},children:[Object(j.jsx)("input",{type:"text",placeholder:"Search News..",ref:n}),Object(j.jsx)("button",{type:"submit",children:"Search"})]})]})},k=t(10),S=t.n(k),N=t(7),y=function(e){var n=Object(h.f)(),t=function(t){e.changeCountry(t),n.push("/")};return Object(j.jsxs)("div",{className:S.a.navbar,children:[Object(j.jsx)(N.b,{activeClassName:S.a.active,to:"/",children:"Home"}),Object(j.jsxs)("div",{className:S.a.dropdown,children:[Object(j.jsxs)("button",{className:S.a.dropbtn,children:[e.countryName," \u23ec"]}),Object(j.jsxs)("div",{className:S.a["dropdown-content"],children:[Object(j.jsx)("p",{onClick:function(){return t("India")},children:"India"}),Object(j.jsx)("p",{onClick:function(){return t("USA")},children:"US"}),Object(j.jsx)("p",{onClick:function(){return t("Australia")},children:"Australia"})]})]})]})};var I=function(){var e=Object(c.useState)(null),n=Object(i.a)(e,2),t=n[0],a=n[1],s=function(e){a(e)},r=Object(h.f)(),o=Object(c.useState)(null),l=Object(i.a)(o,2),d=l[0],u=l[1],b=Object(c.useState)("in"),O=Object(i.a)(b,2),x=O[0],p=O[1],v=Object(c.useState)("India"),w=Object(i.a)(v,2),m=w[0],g=w[1],k="259cee6b1b6c04daf9b2232665759184";return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{searchValueHandler:function(e){u(encodeURIComponent(e))}}),Object(j.jsx)(y,{changeCountry:function(e){switch(console.log(e),e){case"India":p("in"),g("India");break;case"USA":p("us"),g("USA");break;case"Australia":p("au"),g("Australia");break;default:p("in"),g("India")}},countryName:m}),Object(j.jsxs)(h.c,{children:[Object(j.jsxs)(h.a,{path:"/",exact:!0,children:[Object(j.jsxs)("p",{style:{margin:"20px",fontSize:"24px"},children:["Trending in ",m,"..."]}),Object(j.jsx)(f,{onClick:s,url:"https://gnews.io/api/v4/top-headlines?token=".concat(k,"&country=").concat(x,"&lang=en")})]}),Object(j.jsx)(h.a,{path:"/news",children:t?Object(j.jsx)(_,{news:t}):r.push("/")}),Object(j.jsx)(h.a,{path:"/search",children:Object(j.jsx)(f,{onClick:s,url:"https://gnews.io/api/v4/search?q=".concat(d,"&token=").concat(k)})})]})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N.a,{children:Object(j.jsx)(I,{})})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.6c86113a.chunk.js.map