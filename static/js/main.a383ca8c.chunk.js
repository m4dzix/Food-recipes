(this["webpackJsonpfood-recipes"]=this["webpackJsonpfood-recipes"]||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,s,u,d,p,l,b,x,m,f,j,h,g,O,w,v,y,k,L,R,M,z,C,A,S,B,I,E,F,V,U,T,N,D,J,P,Y,H,G,q,K,Q,W,X,Z,$,_,ee,ne,te,re,ie,ae,ce,oe=t(1),se=t.n(oe),ue=t(25),de=t.n(ue),pe=function(e){return"/recipe-list-by-area/".concat(e)},le=function(e){return"/recipe-list-by-category/".concat(e)},be=function(e){return"/recipe/".concat(e)},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},n=e.id;return"/myRecipe/".concat(n)},me=function(){return"/"},fe=t.p+"static/media/logo.e8ea20de.png",je=t(4),he=t(3),ge=he.d.nav(r||(r=Object(je.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 20px;\n  margin: 0;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  @media (max-width: ","px) {\n    padding: 0px;\n  }\n"])),(function(e){return e.theme.colors.galleryTransparent}),(function(e){return e.theme.breakpoints.smallMobile})),Oe=he.d.img(i||(i=Object(je.a)(["\n  width: 250px;\n  @media (max-width: ","px) and (orientation: landscape) {\n    width: 150px;\n  }\n  @media (max-width: ","px) {\n    width: 200px;\n    padding: 5px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.smallMobile})),we=t(12),ve=t(8),ye=t(14),ke=Object(ye.b)({name:"areas",initialState:{status:"initial",hideMenuList:!1},reducers:{toggleHideMenuList:function(e){e.hideMenuList=!e.hideMenuList},fetchAreas:function(){return{status:"loading"}},fetchAreasSuccess:function(e,n){var t=n.payload;e.status="success",e.meals=t},fetchAreasError:function(){return{status:"error"}}}}),Le=ke.actions,Re=Le.toggleHideMenuList,Me=Le.fetchAreas,ze=Le.fetchAreasSuccess,Ce=Le.fetchAreasError,Ae=function(e){return e.areas},Se=function(e){return Ae(e).meals},Be=function(e){return Ae(e).hideMenuList},Ie=function(e){return Ae(e).status},Ee=ke.reducer,Fe=t(58),Ve=t(59),Ue="active",Te=he.d.section(a||(a=Object(je.a)(["\n  width: 30vw;\n  height: 100vh;\n  background-color: ",";\n  filter: sepia(100%);\n  position: fixed;\n  z-index: 1;\n  right: -30vw;\n  top: 0px;\n  transition: 1s;\n  overflow: scroll;\n  ","\n  @media (max-width: ","px) and (orientation: landscape) {\n    width: 100vw;\n    right: -100vw;\n    ","\n  }\n  @media (max-width: ","px) {\n    width: 100vw;\n    right: -100vw;\n    ","\n  }\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.hideMenuList&&Object(he.c)(c||(c=Object(je.a)(["\n      right: 0px;\n    "])))}),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.hideMenuList&&Object(he.c)(o||(o=Object(je.a)(["\n        right: 0px;\n      "])))}),(function(e){return e.theme.breakpoints.smallMobile}),(function(e){return e.hideMenuList&&Object(he.c)(s||(s=Object(je.a)(["\n        right: 0px;\n      "])))})),Ne=Object(he.c)(u||(u=Object(je.a)(["\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  top: 20px;\n  color: ",";\n  box-shadow: 0px 3px 10px #111;\n  height: 50px;\n  cursor: pointer;\n  @media (max-width: ","px) {\n    height: 30px;\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.breakpoints.mobileLandscape})),De=Object(he.d)(Fe.a)(d||(d=Object(je.a)(["\n  ","\n"])),Ne),Je=Object(he.d)(Ve.a)(p||(p=Object(je.a)(["\n  ","\n  right: 90px;\n"])),Ne),Pe=he.d.ul(l||(l=Object(je.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 40px;\n  list-style: none;\n  @media (max-width: ","px) and (orientation: landscape) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape})),Ye=he.d.li(b||(b=Object(je.a)(["\n  position: relative;\n  font-weight: 200;\n  margin-top: 20px;\n  font-size: 25px;\n  font-weight: 500;\n  transition: 0.5s ease;\n  opacity: 1;\n  &:hover {\n    font-weight: bold;\n  }\n  @media (max-width: ","px) and (orientation: landscape) {\n    font-size: 25px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape})),He=Object(he.d)(we.c).attrs((function(){return{activeClassName:Ue}}))(x||(x=Object(je.a)(["\n  text-decoration: none;\n  color: ",";\n  &."," {\n    text-decoration: underline;\n  }\n"])),(function(e){return e.theme.colors.black}),Ue),Ge=he.d.section(m||(m=Object(je.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: ",";\n  padding: 40px;\n"])),(function(e){return e.theme.colors.white})),qe=he.d.h2(f||(f=Object(je.a)(["\n  font-weight: bold;\n  font-size: 50px;\n"]))),Ke=he.d.h3(j||(j=Object(je.a)(["\n  font-size: 20px;\n"]))),Qe=he.d.button(h||(h=Object(je.a)(["\n  padding: 16px 24px;\n  color: ",";\n  background-color: ",";\n  font-weight: bold;\n  font-size: 15px;\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.theme.colors.raisinBlack})),We=t.p+"static/media/danger.1a50ec90.svg",Xe=t(0),Ze=function(){return Object(Xe.jsxs)(Ge,{children:[Object(Xe.jsx)("img",{src:We,alt:"Error"}),Object(Xe.jsx)(qe,{children:"Ooops! Something went wrong..."}),Object(Xe.jsx)(Ke,{children:" Please check your network connection and try again"}),Object(Xe.jsx)(Qe,{children:"Back to home page"})]})},$e=function(){var e=Object(ve.b)(),n=Object(ve.c)(Be),t=Object(ve.c)(Se),r=Object(ve.c)(Ie);return Object(oe.useEffect)((function(){e(Me())}),[e]),Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)(De,{onClick:function(){e(Re())}}),Object(Xe.jsx)(we.b,{to:"/toAddRecipe",children:Object(Xe.jsx)(Je,{addRecipe:!0})}),Object(Xe.jsx)(Te,{hideMenuList:n,children:"success"===r?Object(Xe.jsxs)(Pe,{children:[Object(Xe.jsx)(He,{to:"/myRecipeList",children:Object(Xe.jsx)(Ye,{onClick:function(){e(Re())},children:"My recipes"})}),t.map((function(n){return Object(Xe.jsx)(He,{activeClassName:"active",onClick:function(){e(Re())},href:"",to:pe(n.strArea),children:Object(Xe.jsx)(Ye,{children:n.strArea})},n.strArea)}))]}):Object(Xe.jsx)(Ze,{})})]})},_e=function(){return Object(Xe.jsxs)(ge,{children:[Object(Xe.jsx)(we.b,{to:me,children:Object(Xe.jsx)(Oe,{src:fe})}),Object(Xe.jsx)($e,{})]})},en=t(19),nn=he.d.div(g||(g=Object(je.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(e){return e.theme.breakpoints.smallMobile})),tn=he.d.div(O||(O=Object(je.a)(["\n  height: 100vh;\n  transition: 1s ease;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  filter: brightness(60%);\n  ","\n"])),(function(e){return e.backgroundImage}),(function(e){return e.imageSmall&&Object(he.c)(w||(w=Object(je.a)(["\n      border-left: 5px solid whitesmoke;\n      @media (max-width: ","px) {\n        display: none;\n      }\n    "])),(function(e){return e.theme.breakpoints.smallMobile}))})),rn=he.d.h1(v||(v=Object(je.a)(["\n  font-size: 150px;\n  position: fixed;\n  width: 66vw;\n  top: 30%;\n  margin-left: 70px;\n  color: ",";\n  text-shadow: 1px 0px 15px ",";\n  letter-spacing: 5px;\n  line-height: 1.1;\n  @media (max-width: ","px) {\n    font-size: 120px;\n  }\n  @media (max-width: ","px) and (orientation: landscape) {\n    display: none;\n  }\n  @media (max-width: ","px) {\n    display: none;\n  }\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.theme.colors.chineseBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.smallMobile})),an=t.p+"static/media/greekFood.c44953f7.jpg",cn=t.p+"static/media/greekLandscape.41938a50.jpg",on=t.p+"static/media/italyFood.dd1c8384.jpg",sn=t.p+"static/media/italyLandscape.0576de9e.jpg",un=t.p+"static/media/mexicoFood.7a5c73b7.jpg",dn=t.p+"static/media/mexicoLandscape.34a0bb55.jpg",pn=t.p+"static/media/asiaFood.576c4278.jpg",ln=t.p+"static/media/asiaLandscape.bce3e271.jpg",bn=[an,un,pn,on],xn=[cn,dn,ln,sn],mn=function(){var e=function(){var e=Object(oe.useState)(0),n=Object(en.a)(e,2),t=n[0],r=n[1];return Object(oe.useEffect)((function(){var e=setInterval((function(){r((function(e){return e<3?e+1:e=0}))}),5e3);return function(){return clearInterval(e)}}),[]),t}();return Object(Xe.jsxs)(nn,{children:[Object(Xe.jsx)(tn,{backgroundImage:bn[e],alt:""}),Object(Xe.jsx)(tn,{imageSmall:!0,backgroundImage:xn[e]}),Object(Xe.jsxs)(rn,{children:["Eat & ",Object(Xe.jsx)("br",{}),"Enjoy the food"]})]})},fn=he.d.section(y||(y=Object(je.a)(["\n  background-color: #1118;\n  padding: 50px;\n  @media (max-width: ","px) {\n    padding: 10px;\n  }\n  ","\n  ","\n"])),(function(e){return e.theme.breakpoints.smallMobile}),(function(e){return e.list&&Object(he.c)(k||(k=Object(je.a)(["\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));\n      grid-template-rows: repeat(auto-fill, minmax(324px, 1fr));\n      grid-gap: 24px;\n      align-items: center;\n      justify-content: center;\n      @media (max-width: ","px) and (orientation: landscape) {\n        grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));\n        grid-template-rows: auto 1fr;\n      }\n      @media (max-width: ","px) {\n        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n        grid-template-rows: auto 1fr;\n      }\n      @media (max-width: ","px) {\n        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        padding: 10px;\n      }\n    "])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.breakpoints.smallMobile}))}),(function(e){return e.myRecipe&&Object(he.c)(L||(L=Object(je.a)(["\n      height: 100vh;\n    "])))})),jn=function(e){var n=e.children,t=e.list,r=e.myRecipe;return Object(Xe.jsx)(fn,{list:t,myRecipe:r,children:n})},hn=Object(he.e)(R||(R=Object(je.a)([" \nto {\n  transform: rotate(360deg)\n}\n"]))),gn=he.d.section(M||(M=Object(je.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: ",";\n  padding: 40px;\n"])),(function(e){return e.theme.colors.white})),On=(he.d.img(z||(z=Object(je.a)(["\n  animation: "," 1s linear infinite;\n"])),hn),he.d.h2(C||(C=Object(je.a)(["\n  font-weight: bold;\n  font-size: 50px;\n  @media (max-width: ","px) and (orientation: landscape) {\n    font-size: 20px;\n  }\n  @media (max-width: ","px) {\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.mobile}))),wn=t.p+"static/media/loader.17b2cd24.svg",vn=function(){return Object(Xe.jsxs)(gn,{children:[Object(Xe.jsx)("img",{src:wn,alt:"Loader"}),Object(Xe.jsx)(On,{children:"Loading..."})]})},yn=Object(he.d)(we.b)(A||(A=Object(je.a)(["\n  padding: 16px;\n  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n  background-color: ",";\n  display: grid;\n  grid-gap: 16px;\n  grid-template-rows: 334px auto;\n  height: 100%;\n  color: ",";\n  text-decoration: none;\n  transition: 0.5s;\n  @media (max-width: ","px) and (orientation: landscape) {\n    grid-template-rows: 150px auto;\n  }\n  @media (max-width: ","px) and (orientation: portrait) {\n    grid-template-rows: 150px auto;\n    padding: 10px;\n  }\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.smallMobile})),kn=he.d.div(S||(S=Object(je.a)(['\n  border-radius: 5px;\n  background: url("','");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n'])),(function(e){return e.url})),Ln=he.d.header(B||(B=Object(je.a)(["\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: ","px) and (orientation: landscape) {\n    font-size: 20px;\n  }\n  @media (max-width: ","px) and (orientation: portrait) {\n    font-size: 15px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.smallMobile})),Rn=function(e){var n=e.recipe;return Object(Xe.jsxs)(yn,{to:be(n.idMeal),children:[Object(Xe.jsx)(kn,{url:n.strMealThumb}),Object(Xe.jsx)(Ln,{children:n.strMeal})]})},Mn=t(11),zn=function(e){var n=e.fetchRecipeList,t=e.recipeList,r=e.recipeListStatus,i=Object(ve.b)(),a=Object(Mn.f)().id;return Object(oe.useEffect)((function(){i(n(a))}),[i,a]),"success"===r?Object(Xe.jsx)(jn,{list:!0,children:t.map((function(e){return Object(Xe.jsx)(Rn,{recipe:e},e)}))}):"error"===r?Object(Xe.jsx)(jn,{list:!1,children:Object(Xe.jsx)(Ze,{})}):Object(Xe.jsx)(jn,{list:!1,children:Object(Xe.jsx)(vn,{})})},Cn=Object(ye.b)({name:"recipeListByArea",initialState:{status:"initial"},reducers:{fetchRecipeListByArea:function(){return{status:"loading"}},fetchRecipeListByAreaSuccess:function(e,n){var t=n.payload;e.status="success",e.recipeListByArea=t},fetchRecipeListByAreaError:function(){return{status:"error"}}}}),An=Cn.actions,Sn=An.fetchRecipeListByArea,Bn=An.fetchRecipeListByAreaSuccess,In=An.fetchRecipeListByAreaError,En=function(e){return e.recipeListByArea},Fn=function(e){return En(e).recipeListByArea},Vn=function(e){return En(e).status},Un=Cn.reducer,Tn=function(){var e=Object(ve.c)(Fn),n=Object(ve.c)(Vn);return Object(Xe.jsx)(zn,{recipeList:e,recipeListStatus:n,fetchRecipeList:Sn})},Nn=Object(ye.b)({name:"recipeListByCategory",initialState:{status:"initial"},reducers:{fetchRecipeListByCategory:function(){return{status:"loading"}},fetchRecipeListByCategorySuccess:function(e,n){var t=n.payload;e.status="success",e.recipeListByCategory=t},fetchrecipeListByCategoryError:function(){return{status:"error"}}}}),Dn=Nn.actions,Jn=Dn.fetchRecipeListByCategory,Pn=Dn.fetchRecipeListByCategorySuccess,Yn=Dn.fetchRecipeListByCategoryError,Hn=function(e){return e.recipeListByCategory},Gn=function(e){return Hn(e).recipeListByCategory},qn=function(e){return Hn(e).status},Kn=Nn.reducer,Qn=function(){var e=Object(ve.c)(Gn),n=Object(ve.c)(qn);return Object(Xe.jsx)(zn,{recipeList:e,recipeListStatus:n,fetchRecipeList:Jn})},Wn=he.d.div(I||(I=Object(je.a)(['\n  display: grid;\n  grid-template-areas:\n    "title title"\n    "image details"\n    "ingridiens recipe";\n  grid-template-rows: auto minmax(320px, 420px) auto;\n  grid-template-columns: minmax(500px, 600px) auto;\n  grid-gap: 20px;\n  max-width: 1500px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: ',";\n  ",'\n  @media (max-width: 430px) {\n    grid-template-areas:\n      "title "\n      "image"\n      "details"\n      "ingridiens"\n      "recipe";\n    grid-template-rows: auto minmax(auto, 320px) auto auto auto;\n    grid-template-columns: none;\n    padding: 10px;\n  }\n  @media (max-width: ','px) and (orientation: landscape) {\n    grid-template-areas:\n      "title "\n      "image"\n      "details"\n      "ingridiens"\n      "recipe";\n    grid-template-rows: auto minmax(auto, 220px) auto auto auto;\n    grid-template-columns: none;\n    padding: 10px;\n    ',"\n  }\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.myRecipe&&Object(he.c)(E||(E=Object(je.a)(['\n      grid-template-areas:\n        "title title"\n        "ingridiens details"\n        "recipe recipe";\n      grid-template-rows: auto;\n      grid-template-columns: auto;\n    '])))}),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.MyRecipe&&Object(he.c)(F||(F=Object(je.a)(["\n        grid-template-rows: auto minmax(auto, 80px) auto auto auto;\n      "])))})),Xn=he.d.h2(V||(V=Object(je.a)(["\n  grid-area: title;\n  justify-self: center;\n  font-size: 50px;\n  color: teal;\n  text-shadow: 0px 0px 1px black;\n  @media (max-width: ","px) and (orientation: landscape) {\n    font-size: 30px;\n  }\n  @media (max-width: ","px) {\n    font-size: 35px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.middleMobile})),Zn=he.d.div(U||(U=Object(je.a)(['\n  grid-area: image;\n  max-width: 600px;\n  max-height: 420px;\n  background: url("','");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n'])),(function(e){return e.url})),$n=he.d.div(T||(T=Object(je.a)(["\n  grid-area: ingridiens;\n  padding: 10px;\n"]))),_n=he.d.dl(N||(N=Object(je.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: repeat(auto-fill, minmax(auto, 30px));\n  grid-gap: 7px;\n  font-size: 20px;\n  list-style: none;\n  text-transform: capitalize;\n  padding: 10px;\n  @media (max-width: ","px) {\n    font-size: 15px;\n    grid-template-rows: repeat(auto-fill, 20px);\n  }\n  ",";\n"])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.details&&Object(he.c)(D||(D=Object(je.a)(["\n      grid-area: details;\n      font-size: 30px;\n      font-weight: bold;\n      align-items: top;\n      grid-template-rows: repeat(auto-fill, 50px);\n      @media (max-width: ","px) and (orientation: landscape) {\n        grid-template-rows: repeat(auto-fill, 20px);\n      }\n      @media (max-width: ","px) {\n        font-size: 15px;\n        grid-template-rows: repeat(auto-fill, 20px);\n      }\n    "])),(function(e){return e.theme.breakpoints.mobileLandscape}),(function(e){return e.theme.breakpoints.smallMobile}))})),et=he.d.h3(J||(J=Object(je.a)(["\n  margin: 25px 0px;\n  color: ",";\n  font-size: 25px;\n  text-shadow: 0px 0px 0.5px ",";\n  @media (max-width: ","px) and (orientation: landscape) {\n    font-size: 15px;\n  }\n"])),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.breakpoints.mobileLandscape})),nt=he.d.dt(P||(P=Object(je.a)(["\n  display: inline;\n"]))),tt=he.d.dd(Y||(Y=Object(je.a)(["\n  display: inline;\n  margin-left: 40px;\n"]))),rt=he.d.div(H||(H=Object(je.a)(["\n  grid-area: recipe;\n  font-size: 23px;\n  padding: 10px;\n  text-align: justify;\n  @media (max-width: ","px) {\n    font-size: 15px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobileLandscape})),it=function(e){var n=e.userRecipe,t=e.mealRecipe,r=e.array;return Object(Xe.jsxs)(Wn,{myRecipe:n,children:[Object(Xe.jsx)(Xn,{children:t.strMeal}),n?null:Object(Xe.jsx)(Zn,{url:t.strMealThumb}),Object(Xe.jsxs)(_n,{details:!0,children:[Object(Xe.jsx)(nt,{children:"Category:"}),n?Object(Xe.jsx)(tt,{children:t.strCategory}):Object(Xe.jsxs)(tt,{as:we.b,to:le(t.strCategory),children:[" ",t.strCategory]}),Object(Xe.jsx)(nt,{children:"Area:"}),n?Object(Xe.jsx)(tt,{children:t.strArea}):Object(Xe.jsx)(tt,{as:we.b,to:pe(t.strArea),children:t.strArea}),n?null:Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)(nt,{children:"See on youtube:"}),Object(Xe.jsx)(tt,{as:"a",href:t.strYoutube,children:"YOUTUBE"})]})]}),Object(Xe.jsxs)($n,{children:[Object(Xe.jsx)(et,{children:" Ingredients: "}),Object(Xe.jsx)(_n,{children:r.map((function(e){var n=Object(en.a)(e,2),t=n[0],r=n[1];return Object(Xe.jsxs)(se.a.Fragment,{children:[Object(Xe.jsx)(nt,{children:t}),Object(Xe.jsx)(tt,{children:r})]},t)}))})]}),Object(Xe.jsxs)(rt,{children:[" ",Object(Xe.jsx)(et,{children:" Recipe: "}),t.strInstructions]})]})},at=Object(ye.b)({name:"mealRecipe",initialState:{status:"initial"},reducers:{fetchMealRecipe:function(){return{status:"loading"}},fetchMealRecipeSuccess:function(e,n){var t=n.payload;e.status="success",e.mealRecipe=t[0]},fetchMealRecipeError:function(){return{status:"error"}}}}),ct=at.actions,ot=ct.fetchMealRecipe,st=ct.fetchMealRecipeSuccess,ut=ct.fetchMealRecipeError,dt=function(e){return e.mealRecipe},pt=function(e){return dt(e).mealRecipe},lt=function(e){return dt(e).status},bt=at.reducer,xt=function(){return function(e,n){return Object.entries(Object.fromEntries(e.map((function(t,r){return[e[r],n[r]]}))))}},mt=function(){var e=Object(ve.c)(pt),n=Object(ve.c)(lt),t=function(e,n){return Object.entries(e).map((function(e){for(var t=0;t<=20;t++)if(e[0]==="".concat(n).concat(t))return e})).filter((function(e){return void 0!==e}))},r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.filter((function(e){return Object(en.a)(e,1)[0]})).map((function(e){return e[n]}))},i=xt(),a=Object(ve.b)(),c=Object(Mn.f)().id;if(Object(oe.useEffect)((function(){a(ot(c))}),[a,c]),"success"===n){var o=i(r(t(e,"strIngredient")),r(t(e,"strMeasure")));return Object(Xe.jsx)(jn,{list:!1,children:Object(Xe.jsx)(it,{mealRecipe:e,array:o})})}return"success"!==n?Object(Xe.jsx)(Ze,{}):Object(Xe.jsx)(vn,{})},ft=function(){return Object(Xe.jsx)(mt,{})},jt=he.d.form(G||(G=Object(je.a)(["\n  padding: 30px;\n  display: grid;\n  background-color: ",";\n  max-width: 1000px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, 1fr);\n"])),(function(e){return e.theme.colors.whitesmoke})),ht=he.d.label(q||(q=Object(je.a)(["\n  color: ",";\n  font-weight: bold;\n  text-shadow: 0.3px 0.3px #222;\n  font-size: 25px;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  margin: 10px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  ","\n  ","\n"])),(function(e){return e.theme.colors.teal}),(function(e){return e.ingredient&&Object(he.c)(K||(K=Object(je.a)(["\n      grid-column-start: 1;\n      grid-column-end: 2;\n    "])))}),(function(e){return e.measure&&Object(he.c)(Q||(Q=Object(je.a)(["\n      grid-column-start: 2;\n      grid-column-end: 3;\n    "])))})),gt=he.d.input(W||(W=Object(je.a)(["\n  padding: 5px;\n  font-size: 20px;\n  margin: 5px;\n  border: 2px solid #111;\n  border-radius: 5px;\n"]))),Ot=he.d.textarea(X||(X=Object(je.a)(["\n  padding: 5px;\n  margin: 5px;\n  resize: vertical;\n  font-size: 20px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  border: 2px solid #111;\n  border-radius: 5px;\n"]))),wt=he.d.button(Z||(Z=Object(je.a)(["\n  border: 3px solid #111;\n  padding: 5px 15px;\n  justify-self: end;\n  color: ",";\n  background-color: ",";\n  grid-column-start: 2;\n  font-size: 20px;\n  margin-right: 15px;\n  font-weight: bold;\n  border-radius: 5px;\n  transition: 0.3s;\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.teal})),vt="recipe",yt=function(e){return localStorage.setItem(vt,JSON.stringify(e))},kt=Object(ye.b)({name:"myRecipe",initialState:{recipes:JSON.parse(localStorage.getItem(vt)||[]),ingredients:[{ingredientValue:"",id:0}],measures:[{measureValue:"",id:0}]},reducers:{addRecipe:function(e,n){var t=n.payload;e.recipes.push(t)},addIngredient:function(e,n){var t=n.payload;e.ingredients.push(t)},addMeasure:function(e,n){var t=n.payload;e.measures.push(t)},changeIngredientInputValue:function(e,n){var t=e.ingredients,r=n.payload;t[r[1]].ingredientValue=r[0]},changeMeasureInputValue:function(e,n){var t=e.measures,r=n.payload;t[r[1]].measureValue=r[0]},clearIngredients:function(e){e.ingredients=[{ingredientValue:"",id:0}]},clearMeasures:function(e){e.measures=[{measureValue:"",id:0}]},removeRecipe:function(e,n){var t=e.recipes,r=n.payload,i=t.findIndex((function(e){return e.name===r}));t.splice(i,1)}}}),Lt=kt.actions,Rt=Lt.addRecipe,Mt=Lt.addIngredient,zt=Lt.changeIngredientInputValue,Ct=Lt.addMeasure,At=Lt.changeMeasureInputValue,St=Lt.clearIngredients,Bt=Lt.clearMeasures,It=Lt.removeRecipe,Et=function(e){return e.myRecipe},Ft=function(e){return Et(e).recipes},Vt=function(e){return Et(e).ingredients},Ut=function(e){return Et(e).measures},Tt=kt.reducer,Nt=function(){var e=Object(ve.c)(Vt),n=Object(ve.c)(Ut),t=Object(ve.b)();return Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsxs)(ht,{ingredient:!0,children:["Ingredients",e.map((function(e){var n=e.id;return Object(Xe.jsx)(gt,{name:"ingredient",type:"text",onChange:function(e){return t(zt([e.target.value,n]))}},"ing".concat(n))}))]}),Object(Xe.jsxs)(ht,{measure:!0,children:["Measures",n.map((function(e){var n=e.id;return Object(Xe.jsx)(gt,{name:"measure",type:"text",onChange:function(e){return t(At([e.target.value,n]))}},"mea".concat(n))}))]}),Object(Xe.jsx)(wt,{type:"button",onClick:function(){t(Mt({ingredientValue:"",id:e.length})),t(Ct({measureValue:"",id:e.length}))},children:"Add Ingredient"})]})},Dt=function(){var e=Object(oe.useState)(""),n=Object(en.a)(e,2),t=n[0],r=n[1],i=Object(oe.useState)(""),a=Object(en.a)(i,2),c=a[0],o=a[1],s=Object(oe.useState)(""),u=Object(en.a)(s,2),d=u[0],p=u[1],l=Object(oe.useState)(""),b=Object(en.a)(l,2),x=b[0],m=b[1],f=Object(ve.b)(),j=Object(ve.c)(Vt),h=Object(ve.c)(Ut);return Object(Xe.jsx)(jn,{myRecipe:"true",children:Object(Xe.jsxs)(jt,{onSubmit:function(e){return e.preventDefault(),f(Rt({id:Object(ye.c)(),strCategory:"".concat(t.charAt(0).toUpperCase()).concat(t.substring(1)),strArea:"".concat(c.charAt(0).toUpperCase()).concat(c.substring(1)),strMeal:"".concat(d.charAt(0).toUpperCase()).concat(d.substring(1)),ingredients:j.map((function(e){return"".concat(e.ingredientValue.charAt(0).toUpperCase()).concat(e.ingredientValue.substring(1))})),measures:h.map((function(e){return"".concat(e.measureValue.charAt(0).toUpperCase()).concat(e.measureValue.substring(1))})),strInstructions:"".concat(x.charAt(0).toUpperCase()).concat(x.substring(1))})),r(""),o(""),p(""),f(St()),f(Bt()),m("")},children:[Object(Xe.jsxs)(ht,{children:["Category",Object(Xe.jsx)(gt,{type:"text",name:"category",value:t,onChange:function(e){return r(e.target.value)}})]}),Object(Xe.jsxs)(ht,{children:["Area",Object(Xe.jsx)(gt,{type:"text",name:"area",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(Xe.jsxs)(ht,{children:["Name",Object(Xe.jsx)(gt,{type:"text",name:"name",value:d,onChange:function(e){return p(e.target.value)}})]}),Object(Xe.jsx)(Nt,{}),Object(Xe.jsxs)(ht,{children:["Description",Object(Xe.jsx)(Ot,{rows:"10",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(Xe.jsx)(wt,{children:" Add new recipe !"})]})})},Jt=he.d.h1($||($=Object(je.a)(["\n  font-size: 50px;\n  text-shadow: 2px 2px 3px ",";\n  color: ",";\n  font-weight: bold;\n  background-color: ",";\n  margin-bottom: 0;\n  padding: 50px 30px 25px;\n  @media (max-width: ","px) {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.theme.breakpoints.mobile})),Pt=he.d.div(_||(_=Object(je.a)(["\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: ",";\n  background-position: fixed;\n  list-style: none;\n  padding: 50px 30px;\n  height: 100vh;\n  overflow: scroll;\n  ","\n"])),(function(e){return e.theme.colors.whitesmoke}),(function(e){return e.list&&Object(he.c)(ee||(ee=Object(je.a)(["\n      list-style: none;\n      overflow: scroll;\n      align-items: center;\n      padding: 25px 30px 50px;\n    "])))})),Yt=he.d.p(ne||(ne=Object(je.a)(["\n  position: static;\n  font-size: 35px;\n  align-self: end;\n  font-weight: bold;\n  padding-left: 15px;\n  margin: 10px;\n  width: fit-content;\n  transition: 0.5s ease;\n  padding-bottom: 2px;\n  background-image: linear-gradient(\n    ",",\n    ","\n  );\n  background-position: left bottom;\n  background-size: 0% 3px;\n  background-repeat: no-repeat;\n  transition: 0.5s;\n  @media (max-width: ","px) {\n    font-size: 30px;\n  }\n  ","\n"])),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.noRecipe&&Object(he.c)(te||(te=Object(je.a)(["\n      align-self: unset;\n    "])))})),Ht=he.d.li(re||(re=Object(je.a)(["\n  border: 2px solid ",";\n  box-shadow: 0px 0px 5px ",";\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  transition: 0.5s;\n  position: static;\n  margin-bottom: 20px;\n  width: 100%;\n  &:hover {\n    border: 4px solid ",";\n    transform: scale(1.005);\n  }\n  &:hover "," {\n    background-size: 100% 3px;\n    font-size: 35px;\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.colors.teal}),Yt),Gt=he.d.div(ie||(ie=Object(je.a)(["\n  display: flex;\n  justify-self: end;\n  align-items: end;\n  margin: 10px;\n  @media (max-width: ","px) {\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.breakpoints.mobile})),qt=he.d.button(ae||(ae=Object(je.a)(["\n  border: none;\n  background-color: unset;\n  font-size: 20px;\n  padding: 0px 10px;\n  transition: 0.5s;\n  position: static;\n  &:hover {\n    color: teal;\n    font-size: 22px;\n  }\n  @media (max-width: ","px) {\n    font-size: 18px;\n    &:hover {\n      font-size: 20px;\n    }\n  }\n  ","\n"])),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.noRecipe&&Object(he.c)(ce||(ce=Object(je.a)(["\n      align-self: unset;\n      border: 1px solid ",";\n      border-radius: 5px;\n      background-color: ",";\n      padding: 5px 10px;\n      &:hover {\n        color: ",";\n      }\n    "])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.teal}),(function(e){return e.theme.colors.white}))})),Kt=function(){var e=Object(ve.c)(Ft),n=Object(ve.b)();return Object(Xe.jsx)(jn,{myRecipe:"true",children:0!==e.length?Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)(Jt,{children:"My recipe list"}),Object(Xe.jsx)(Pt,{list:"true",as:"ul",children:e.map((function(e){return Object(Xe.jsxs)(Ht,{children:[Object(Xe.jsx)(Yt,{children:e.strMeal}),Object(Xe.jsxs)(Gt,{children:[Object(Xe.jsxs)(we.b,{to:xe({id:e.id}),children:[" ",Object(Xe.jsxs)(qt,{children:["Go to recipe",Object(Xe.jsxs)("span",{as:"img",alt:"aria-label",children:[" ","\u27a1\ufe0f"," "]})]})]}),Object(Xe.jsxs)(qt,{onClick:function(){n(It(e.strMeal))},children:["Delete",Object(Xe.jsxs)("span",{as:"img",alt:"aria-label",children:[" ","\ud83d\udeab"," "]})]})]})]},e.strMeal)}))})]}):Object(Xe.jsxs)(Pt,{children:[Object(Xe.jsxs)(Jt,{children:["You dont have any recipe..."," ",Object(Xe.jsxs)("span",{as:"img",alt:"aria-label",children:[" ","\ud83d\ude33"," "]})]}),Object(Xe.jsxs)(Yt,{noRecipe:"true",children:["Click on button to add recipe:"," "]}),Object(Xe.jsx)(we.b,{to:"/toAddRecipe",children:Object(Xe.jsxs)(qt,{noRecipe:"true",children:["Add recipe",Object(Xe.jsxs)("span",{as:"img",alt:"aria-label",children:[" ","\ud83d\udcc3 \ud83e\udd58"," "]})]})})]})})},Qt=function(){var e=Object(Mn.f)().id,n=Object(ve.c)((function(n){return function(e,n){return Ft(e).find((function(e){return e.id===n}))}(n,e)})),t=xt()(n.ingredients,n.measures);return Object(Xe.jsx)(jn,{myRecipe:!0,children:Object(Xe.jsx)(it,{userRecipe:!0,mealRecipe:n,array:t})})},Wt=function(){return Object(Xe.jsx)(Qt,{})};var Xt,Zt=function(){return Object(Xe.jsxs)(we.a,{children:[Object(Xe.jsx)(mn,{}),Object(Xe.jsx)(_e,{}),Object(Xe.jsxs)(Mn.c,{children:[Object(Xe.jsx)(Mn.a,{path:pe(":id"),children:Object(Xe.jsx)(Tn,{})}),Object(Xe.jsx)(Mn.a,{path:le(":id"),children:Object(Xe.jsx)(Qn,{})}),Object(Xe.jsx)(Mn.a,{path:be(":id"),children:Object(Xe.jsx)(ft,{})}),Object(Xe.jsx)(Mn.a,{path:"/toAddRecipe",children:Object(Xe.jsx)(Dt,{})}),Object(Xe.jsx)(Mn.a,{path:"/myRecipeList",children:Object(Xe.jsx)(Kt,{})}),Object(Xe.jsx)(Mn.a,{path:xe(),children:Object(Xe.jsx)(Wt,{})})]})]})},$t=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),a(e),c(e)}))},_t=Object(he.b)(Xt||(Xt=Object(je.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');\nhtml{\n  box-sizing: border-box;\n}\n*,::before, ::after{\n  box-sizing: inherit;\n}\nbody{\n  font-family: 'Montserrat', sans-serif;\n  padding: 0;\n  margin: 0;\n}\na{\n  text-decoration: none;\n  color:black;\n}\n"]))),er=t(39),nr=t(9),tr=t.n(nr),rr=t(10),ir=t(40),ar=t(38),cr=function(e,n){var t=new URLSearchParams(n);for(var r in e){var i=e[r];void 0===i?t.delete(r):t.set(r,i)}return t.toString()},or=function(){var e=Object(ar.a)(tr.a.mark((function e(n){var t,r,i,a,c;return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.path,r=n.parameters,i=Object(ir.a)({},r||{}),e.next=4,fetch("".concat("https://www.themealdb.com/api/json/v1/1/").concat(t).concat(cr(i)));case 4:if((a=e.sent).ok){e.next=7;break}throw new Error(a.statusText);case 7:return e.next=9,a.json();case 9:return c=e.sent,e.abrupt("return",c.meals);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),sr=function(){return or({path:"/list.php?a=list"})},ur=tr.a.mark(pr),dr=tr.a.mark(lr);function pr(){var e;return tr.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(rr.b)(sr);case 3:return e=n.sent,n.next=6,Object(rr.c)(ze(e));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(rr.c)(Ce());case 12:case"end":return n.stop()}}),ur,null,[[0,8]])}function lr(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.e)(Me.type,pr);case 2:case"end":return e.stop()}}),dr)}var br=function(e){return or({path:"/filter.php?a=".concat(e)})},xr=tr.a.mark(fr),mr=tr.a.mark(jr);function fr(e){var n,t;return tr.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(rr.b)(br,n);case 4:return t=r.sent,r.next=7,Object(rr.c)(Bn(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(rr.c)(In);case 13:case"end":return r.stop()}}),xr,null,[[1,9]])}function jr(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.f)(Sn.type,fr);case 2:case"end":return e.stop()}}),mr)}var hr=function(e){return or({path:"/lookup.php?i=".concat(e)})},gr=tr.a.mark(wr),Or=tr.a.mark(vr);function wr(e){var n,t;return tr.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(rr.b)(hr,n);case 4:return t=r.sent,r.next=7,Object(rr.c)(st(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(rr.c)(ut);case 13:case"end":return r.stop()}}),gr,null,[[1,9]])}function vr(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.f)(ot.type,wr);case 2:case"end":return e.stop()}}),Or)}var yr=function(e){return or({path:"filter.php?c=".concat(e)})},kr=tr.a.mark(Rr),Lr=tr.a.mark(Mr);function Rr(e){var n,t;return tr.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(rr.b)(yr,n);case 4:return t=r.sent,r.next=7,Object(rr.c)(Pn(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(rr.c)(Yn);case 13:case"end":return r.stop()}}),kr,null,[[1,9]])}function Mr(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.f)(Jn.type,Rr);case 2:case"end":return e.stop()}}),Lr)}var zr=tr.a.mark(Ar),Cr=tr.a.mark(Sr);function Ar(){var e;return tr.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(rr.d)(Ft);case 2:return e=n.sent,n.next=5,Object(rr.b)(yt,e);case 5:case"end":return n.stop()}}),zr)}function Sr(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.e)("*",Ar);case 2:case"end":return e.stop()}}),Cr)}var Br=tr.a.mark(Ir);function Ir(){return tr.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rr.a)([lr(),jr(),Mr(),vr(),Sr()]);case 2:case"end":return e.stop()}}),Br)}var Er=Object(er.a)(),Fr=Object(ye.a)({reducer:{areas:Ee,recipeListByArea:Un,mealRecipe:bt,recipeListByCategory:Kn,myRecipe:Tt},middleware:[Er]});Er.run(Ir);var Vr=Fr;de.a.render(Object(Xe.jsx)(se.a.StrictMode,{children:Object(Xe.jsx)(ve.a,{store:Vr,children:Object(Xe.jsxs)(he.a,{theme:{colors:{white:"#FFF",whitesmoke:"#F5F5F5",galleryTransparent:"#EEE8",raisinBlack:"#222",chineseBlack:"#111",black:"#000",teal:"#008080"},breakpoints:{tablet:1025,mobileLandscape:830,mobile:767,middleMobile:600,smallMobile:430}},children:[Object(Xe.jsx)(_t,{}),Object(Xe.jsx)(Zt,{})]})})}),document.getElementById("root")),$t()}},[[55,1,2]]]);
//# sourceMappingURL=main.a383ca8c.chunk.js.map