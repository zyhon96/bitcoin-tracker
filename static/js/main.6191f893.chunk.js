(this["webpackJsonpbitcoin-tracker"]=this["webpackJsonpbitcoin-tracker"]||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},39:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),i=t(13),r=t.n(i),s=(t(19),t(4)),o=(t(20),t(14)),l=t.n(o),j=(t(39),t(0)),p=function(e){var c=e.name,t=e.image,n=e.symbol,a=e.price,i=e.volume,r=e.priceChange,s=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["#",a.toLocaleString()," "]}),Object(j.jsxs)("p",{className:"coin-volume",children:["#",i.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: #",s.toLocaleString()]})]})]})})};var m=function(){var e=Object(n.useState)([]),c=Object(s.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(""),r=Object(s.a)(i,2),o=r[0],m=r[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var u=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){m(e.target.value)}})})]}),u.map((function(e){return Object(j.jsx)(p,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),u()}},[[41,1,2]]]);
//# sourceMappingURL=main.6191f893.chunk.js.map