(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{146:function(e,t,n){e.exports=n.p+"static/media/person.50b4fd3e.png"},188:function(e,t,n){e.exports=n(379)},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(29),c=n.n(r),i=(n(193),n(17)),l=(n(98),n(194),n(195),n(4));function o(e){return s.a.createElement("button",Object.assign({},e,{className:l("tab-button",e.className)}),e.tab)}var u=n(144),m=n(6),v=(n(200),n(146)),E=n.n(v);n(201);var b=function(e){return s.a.createElement("div",{className:"avatar-container"},s.a.createElement("img",{className:"avatar-image",src:E.a}))};function d(e){var t=Object(m.c)((function(e){return e.user})),n=t.savingsGoal,a=t.investments?n/t.investments.savings:"MISSING";return s.a.createElement("div",{id:"top-bar"},s.a.createElement(b,null),s.a.createElement("div",{className:"top-bar-element"},"Savings Goal: ",a,"%"),s.a.createElement("div",{className:"top-bar-element"},"Savings: ",t.investments&&t.investments.savings),s.a.createElement("div",{className:"top-bar-element"},"Debts: ",t.debts&&function(){if(0===t.debts.length)return 0;var e,n=0,a=Object(u.a)(t.debts);try{for(a.s();!(e=a.n()).done;){n+=e.value.total}}catch(s){a.e(s)}finally{a.f()}return n}()),s.a.createElement("div",{className:"top-bar-element"},"Spirit: ",t.spirit),s.a.createElement("div",{className:"top-bar-element"},"Salary: ",t.salary),s.a.createElement("div",{className:"top-bar-element"},"ShareSplit: ",t.investments.shareSplit),s.a.createElement("div",{className:"top-bar-element"},"settings: ",t.investments.setting),s.a.createElement(o,{tab:"home",onClick:function(){return e.setScreen("home")}}))}var h=n(91);function p(e){var t=Object(m.b)(),n=h.events[e.eventIndex%h.events.length].branches[0];return s.a.createElement("div",{className:"choice"},s.a.createElement("h4",null,n.title),s.a.createElement("p",null,n.description),"action"===n.type&&s.a.createElement("div",null,n.choices.map((function(e,a){return s.a.createElement("button",{onClick:function(){return function(e){var a=n.choices[e];t(function(e){var t=e.event,n=e.choice;return function(e){var a=n.outcome;a.spirit&&e({type:"UPDATE_SPIRIT",payload:a.spirit}),a.asset&&e({type:"UPDATE_SAVINGS",asset:a.asset}),e({type:"PLAYER_MAKE_CHOICE",event:t,choice:n,payload:a.cash})}}({event:n,choice:a})),console.log(a.outcome),console.log("LET OTHER ELEMENTS KNOW CHOICE WAS MADE")}(a)},key:"choice-button-"+a},e.title)}))))}function f(){var e=Object(m.c)((function(e){return e.user})),t=Object(m.b)(),n=e.lastChoice;return s.a.createElement("div",null,s.a.createElement("h2",null,"Outcome"),s.a.createElement("h4",null,n.title),s.a.createElement("h4",null,n.description),s.a.createElement("div",null,"You're savings changed by ",n.outcome.cash),s.a.createElement("div",null,"You're spirit changed by ",n.outcome.spirit),s.a.createElement("p",null,n.outcome.description),s.a.createElement("button",{onClick:function(){return t((function(e){e({type:"FINISH_OUTCOME"})}))}},"Continue"))}function O(e){var t=Object(m.c)((function(e){return e.user}));Object(m.b)();return s.a.createElement("div",null,"choice"===t.roundType?s.a.createElement(p,{eventIndex:0}):s.a.createElement(f,null))}function y(e){Object(m.c)((function(e){return e.user})),Object(m.b)();return s.a.createElement("div",{className:"center"},"Your time.")}function g(e){Object(m.c)((function(e){return e.user})),Object(m.b)();return s.a.createElement("div",{className:"center"},"Your assets")}function j(e){var t=Object(m.c)((function(e){return e.user}));Object(m.b)();return s.a.createElement("div",{className:"center"},s.a.createElement("h1",null,"Debts"),t.debts.map((function(e){return s.a.createElement("div",null,s.a.createElement("h3",null,e.name),s.a.createElement("h4",null,e.total),s.a.createElement("h5",null,"at ",100*e.interestRate,"% APR"))})))}function S(e){Object(m.c)((function(e){return e.user})),Object(m.b)();return s.a.createElement("div",{className:"center"},"Your skills.")}var T=n(158),_=n(36);n(65);function N(e){var t=Object(m.c)((function(e){return e.user})),n=Object(m.b)();return s.a.createElement("div",null,s.a.createElement("p",null,"Use the slider to indicate what percent of your income you'll use on the stock marker."),s.a.createElement("input",{type:"range",className:"custom-range",id:"slider",max:100,min:0,defaultValue:t.investments.shareSplit,onChange:function(e){!function(e){var t;n((t=e.target.value,function(e){e({type:"UPDATE_SHARE_SPLIT",payload:t})}))}(e)}}))}function A(e){var t=Object(m.c)((function(e){return e.user})),n=Object(m.b)();return s.a.createElement("div",null,s.a.createElement("p",null,"Use the slider to indicate how much of your currently owned shares you'd like to sell."),s.a.createElement("input",{type:"range",className:"custom-range",id:"slider",max:100,min:0,defaultValue:t.investments.sharesToSell,onChange:function(e){!function(e){var t;n((t=e.target.value,function(e){e({type:"UPDATE_MARK_SHARES_SELL",payload:t})}))}(e)}}))}function C(e){Object(m.c)((function(e){return e.user})),Object(m.b)();return s.a.createElement("div",null,s.a.createElement("p",null,"You will maintain the current amount of shares for next turn."))}var k=n(21);function w(e){var t=Object(m.c)((function(e){return e.user})),n=Object(m.b)(),r=Object(a.useState)("buy"),c=Object(i.a)(r,2),l=c[0],o=c[1],u=[{name:t.event-4,pv:t.event-4<0?0:t.investments.history[t.event-4]},{name:t.event-3,pv:t.event-3<0?0:t.investments.history[t.event-3]},{name:t.event-2,pv:t.event-2<0?0:t.investments.history[t.event-2]},{name:t.event-1,pv:t.event-1<0?0:t.investments.history[t.event-1]},{name:t.event,pv:t.investments.history[t.event]}];return s.a.createElement("div",{className:"center"},"Your shares: ",t.investments.shares,s.a.createElement("br",null),s.a.createElement("p",null,"Current value of investment: ",t.investments.shares*t.investments.value),s.a.createElement("br",null),s.a.createElement("p",null,"Profit: ",t.investments.shares*t.investments.value-t.investments.amountSpent),s.a.createElement(k.d,{width:500,height:300,data:u,margin:{top:5,right:30,left:20,bottom:5}},s.a.createElement(k.a,{strokeDasharray:"3 3"}),s.a.createElement(k.f,{dataKey:"name"}),s.a.createElement(k.g,null),s.a.createElement(k.e,null),s.a.createElement(k.b,null),s.a.createElement(k.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}})),s.a.createElement("div",{id:"align"},s.a.createElement(s.a.Fragment,null,s.a.createElement(T.a,{type:"radio",name:"options",defaultValue:t.investments.setting,onChange:function(e){!function(e){var a;console.log(t.event),n((a=e,function(e){e({type:"UPDATE_INVEST_SETTING",switch:a})})),o(e)}(e)}},s.a.createElement(_.a,{variant:"light",value:"buy"},"Buy shares"),s.a.createElement(_.a,{variant:"light",value:"sell"},"Sell shares"),s.a.createElement(_.a,{variant:"light",value:"hold"},"Hold"))),function(){switch(l){case"buy":return s.a.createElement(N,null);case"sell":return s.a.createElement(A,null);case"hold":return s.a.createElement(C,null)}}()))}n(4);var I=function(e){return s.a.createElement("div",{className:"screen "+e.screen},s.a.createElement("h2",{className:"screen-text"},e.screen),function(){switch(e.screen){case"home":return s.a.createElement(O,null);case"time":return s.a.createElement(y,null);case"skills":return s.a.createElement(S,null);case"debt":return s.a.createElement(j,null);case"inventory":return s.a.createElement(g,null);case"investments":return s.a.createElement(w,null);default:return s.a.createElement(O,null)}}())},D=n(63);n(377);function P(){var e=Object(a.useState)("doctor"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(D.careers[0]),l=Object(i.a)(c,2),o=l[0],u=l[1],v=Object(m.b)();return s.a.createElement("div",{className:"screen"},s.a.createElement("div",{className:"choice-body"},s.a.createElement("h3",null,"Choose a Starting Career"),s.a.createElement("label",{htmlFor:"career"},"What career would you like to start with?"),s.a.createElement("select",{onChange:function(e){var t;console.log(e.target.value),r(e.target.value),u((t=e.target.value,D.careers.find((function(e){return e.name===t}))))},value:n,name:"career",id:"career"},D.careers.map((function(e){return s.a.createElement("option",{value:e.name,label:e.name})}))),s.a.createElement("span",null," ",s.a.createElement("h4",null,"Starting Debt")," ",o.debt.total," at ",100*o.debt.interestRate," "),s.a.createElement("span",null," ",s.a.createElement("h4",null,"Starting Salary")," ",o.salaries[0]," "),s.a.createElement("button",{onClick:function(){return v(function(e){return function(t){t({type:"SELECT_CAREER",payload:e})}}(o))}},"Choose This Career")))}n(378);var R=function(){var e=Object(a.useState)("home"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("home"),l=Object(i.a)(c,2),u=(l[0],l[1]),v=Object(a.useState)(0),E=Object(i.a)(v,2),b=E[0],h=E[1],p=Object(m.c)((function(e){return e.user})),f=function(e){console.log(e),u(e),r(e)};return s.a.createElement("div",{className:"app"},s.a.createElement(d,{setScreen:r}),s.a.createElement("div",{id:"game-body"},0===p.unit?s.a.createElement(P,null):s.a.createElement(I,{screen:n,years:b,setYears:h}),s.a.createElement("div",{id:"side-bar"},s.a.createElement(o,{disabled:0===p.unit,className:"side-tab",tab:"time",onClick:function(){f("time")}}),s.a.createElement(o,{disabled:0===p.unit,className:"side-tab",tab:"skills",onClick:function(){f("skills")}}),s.a.createElement(o,{disabled:0===p.unit,className:"side-tab",tab:"investments",onClick:function(){f("investments")}}),s.a.createElement(o,{disabled:0===p.unit,className:"side-tab",tab:"debt",onClick:function(){f("debt")}}),s.a.createElement(o,{disabled:0===p.unit,className:"side-tab",tab:"inventory",onClick:function(){f("inventory")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(13),x=n(157),L=n(5),Y={salary:0,career:"no career",skills:{types:[]},savingsGoal:0,investments:{shares:0,amountSpent:0,savings:1e3,value:10,history:[10,8,8.5,9,10.5,9,12,13,8,20,15,16,17,18,10,8,7,5,8,8.5,9,10,11,15,12,18,20,21,22,28,21,20,20.5,18,30],shareSplit:30,setting:"buy",sharesToSell:0},debts:[],assets:[{name:"Apartment",monthlyExpense:1600,percentageExpense:0},{name:"Transportation",monthlyExpense:200,percentageExpense:0},{name:"Food",monthlyExpense:400,percentageExpense:0},{name:"Taxes",percentageExpense:.4,monthlyExpense:0}],spirit:50,lastChoice:{},roundType:"choice",unit:0,choice:0,event:0},M={elementsLoading:{}},G={},H=[x.a],V=Object(U.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SHARE_SPLIT":return Object(L.a)(Object(L.a)({},e),{},{investments:Object(L.a)(Object(L.a)({},e.investments),{},{shareSplit:t.payload})});case"UPDATE_INVEST_SETTING":return Object(L.a)(Object(L.a)({},e),{},{investments:Object(L.a)(Object(L.a)({},e.investments),{},{setting:t.switch})});case"UPDATE_MARK_SHARES_SELL":return Object(L.a)(Object(L.a)({},e),{},{investments:Object(L.a)(Object(L.a)({},e.investments),{},{sharesToSell:t.payload})});case"UPDATE_SALARY":return Object(L.a)(Object(L.a)({},e),{},{salary:e.salary+t.payload});case"UPDATE_SAVINGS":return console.log("Update savings",t.payload),Object(L.a)(Object(L.a)({},e),{},{investments:Object(L.a)(Object(L.a)({},e.investments),{},{savings:e.investments.savings+t.payload})});case"UPDATE_SAVINGS_GOAL":return Object(L.a)(Object(L.a)({},e),{},{savingsGoal:e.investments.savingsGoal+t.payload});case"UPDATE_ASSETS":return Object(L.a)(Object(L.a)({},e),{},{assets:e.assets.push(t.item)});case"UPDATE_CAREER":return Object(L.a)(Object(L.a)({},e),{},{career:t.info});case"UPDATE_INVESTMENTS":return Object(L.a)(Object(L.a)({},e),{},{investments:Object(L.a)(Object(L.a)({},e.investments),{},{shares:e.investments.shares+t.invests,savings:e.investments.savings})});case"UPDATE_SKILLS":return Object(L.a)(Object(L.a)({},e),{},{skills:e.skills.types.push(t.skill)});case"UPDATE_SPIRIT":return Object(L.a)(Object(L.a)({},e),{},{spirit:Math.min(Math.max(e.spirit+t.payload,0),100)});case"UPDATE_ASSETS_DEBTS":for(var n=[],a=0;a<e.assets.types.length;a++)e.assets.types[a].debt>0&&n.push(e.assets.types[a].debt-1);return Object(L.a)(Object(L.a)({},e),{},{assets:n});case"PLAYER_MAKE_CHOICE":function s(t){for(var n=0,a=t;n<e.assets.length-1;)console.log(e.assets[n]),a-e.assets[n].monthlyExpense>0&&(a-=e.assets[n].monthlyExpense),a-t*e.assets[n].percentageExpense>0&&(a-=e.assets[n].percentageExpense),n++;return a}var r=t.choice.outcome.cash,c=0,i=0,l=0;t.choice.outcome.asset;r>0&&(console.log("P"+e.investments.setting),"sell"===e.investments.setting?c=e.investments.shares*(e.investments.sharesToSell/100)*e.investments.value:"buy"===e.investments.setting&&(i=r*(e.investments.shareSplit/100)/e.investments.value),l=r*(1-e.investments.shareSplit/100));var o=e.assets;return void 0!==t.asset&&o.push(t.asset),c=s(l),Object(L.a)(Object(L.a)({},e),{},{lastChoice:t.choice,roundType:"outcome",event:e.event+1,investments:Object(L.a)(Object(L.a)({},e.investments),{},{amountSpent:e.investments.amountSpent+r*(e.investments.shareSplit/100),shares:e.investments.shares+i,savings:e.investments.savings+c,value:e.investments.history[e.event+1]}),assets:o});case"FINISH_OUTCOME":return Object(L.a)(Object(L.a)({},e),{},{roundType:"choice"});case"SELECT_CAREER":return Object(L.a)(Object(L.a)({},e),{},{career:t.payload,debts:e.debts.concat(t.payload.debt),salary:t.payload.salaries[0],unit:1});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SALARY":return Object(L.a)(Object(L.a)({},e),{},{elementsLoading:Object(L.a)(Object(L.a)({},e.elementsLoading),{},{salary:!0})});default:return e}}}),W=window.__REDUX_DEVTOOLS_EXTENSION__?Object(U.e)(V,G,Object(U.d)(U.a.apply(void 0,H),window.__REDUX_DEVTOOLS_EXTENSION__())):Object(U.e)(V,G,Object(U.d)(U.a.apply(void 0,H)));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m.a,{store:W},s.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){t.careers=[{name:"Doctor",salaries:[14e4,18e4,24e4],debt:{total:4e5,interestRate:.06,name:"Medical School"},skills:["science","communication","dexterity"],certification:"doctor",requiredCertification:"doctor"},{name:"Programmer",salaries:[6e4,9e4,12e4,16e4],debt:{total:14e4,interestRate:.06,name:"University Loans"},skills:["science","communication","dexterity"],certification:"programmer"},{name:"Construction Worker",salaries:[45e3,65e3,8e4,1e5],debt:{total:0,interestRate:0},skills:["management","dexterity","endurance"]}]},65:function(e,t,n){},91:function(e,t){t.events=[{name:"out-with-friends",required:function(){return!0},branches:[{title:"Want to go out?",description:"Your friends want to go out! What will you do tonight?",type:"action",choices:[{title:"Stay In",outcome:{spirit:-2,cash:100,description:"A lonely night in. You saved some cash but you miss your friends."}},{title:"Go Out",outcome:{cash:-60,spirit:1,description:"You had a great time! Wallet feels a little lighter though..."}},{title:"Buy a Round!",outcome:{cash:-120,spirit:2,description:"You were the life of the party! How much did those wings cost?"}}]}]}]}},[[188,1,2]]]);
//# sourceMappingURL=main.7c2a29e8.chunk.js.map