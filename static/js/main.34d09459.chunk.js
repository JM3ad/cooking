(this.webpackJsonpcooking=this.webpackJsonpcooking||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(20),r=n.n(c),s=(n(26),n(7)),o=n(2),l=(n(12),[{name:"Katsu Curry Sauce",url:"http://allrecipes.co.uk/recipe/29578/chicken-katsu-curry.aspx",ingredients:["3 onions","7 garlic cloves","3 carrots","3 tbsp plain flour","2 tbsp curry powder","900ml veg stock","1 tbsp honey","2 tbsp soy sauce","1 bay leaf","1 tsp garam masala"],method:["Fry the onions and garlic until soft","Add carrots and cook until soft (approx 10 mins)","Add flour and curry powder, cook for 1 minute","Add stock gradually, then add honey, soy sauce and bay leaf","Bring to the boil, then reduce to a simmer until sauce is thick but can be poured - around 20 mins","Stir in garam masala. Serve with breaded vegetables or tofu & rice"]},{name:"Chilli",url:"https://www.bbcgoodfood.com/recipes/burnt-aubergine-veggie-chilli",ingredients:["3 aubergines","1 red onion, diced","2 carrots, diced","70g green lentils","30g red lentils","2 400g can kidney beans","400g can chopped tomatoes","3 tbsp soy sauce","20g dark chocolate, finely chopped","1 tsp chilli powder","2 tsp dried oregano","2 tsp ground cumin","2 tsp paprika","1 tsp ground coriander","1 tsp garam masala","400ml veg stock - double concentration","half a lime, juiced"],method:["Grill or roast the aubergine in small chunks","Fry onion & carrot with salt in large pan for 15-20 mins until softened","Add the aubergine, lentils, beans (including liquid), tomatoes, soy sauce, chocolate, spices and herbs","Stir and pour in the stock","Bring to the boil then turn down heat low","Cover with a lid and simmer for 1.5 hours, stirring occasionally","Remove lid and let simmer for 15 mins","Add lime juice, and serve over rice or roasted sweet potato"]},{name:"Dal Makhani",url:"https://cookieandkate.com/quick-dal-makhani-recipe/",ingredients:["2 onions diced","6 garlic clove minced","2 tbsp ginger, finely chopped","2 chillis, finely chopped","3 tsp garam masala","1 tsp ground cumin","1 tsp ground coriander","1 tsp salt","2 cans chopped tomatoes","400g black lentils","2 cans kidney beans, rinsed and drained","8 cups water","1 bay leaf","2 tbsp lime juice","Optional: can of coconut milk"],method:["Fry the onion, garlic, ginger and chillis until softened","Stir in the spices, and season generously with black pepper. Cook while stirring for 1 minute","Add the tomatoes and cook for 1 more minute","Add the lentils, beans, water and bay leaf","Bring the mixture to a boil, and then reduce the heat to a simmer until the lentils are tender; about 35 mins","Remove the bay leaf, and transfer 2 cups of the mixture to a blender and blend until smooth","Combine the blended mixture with the remainder, add the lime juice and add salt to taste","Optionally, add in coconut milk, and then serve with rice or naan"]}]),d=function(){return l},u=n(0),h=function(){var e=d();return Object(u.jsxs)("div",{className:"app-page",children:[Object(u.jsx)("h1",{children:"Recipes"}),e.map((function(e){return Object(u.jsx)(s.b,{className:"recipe-link",to:"/recipe/".concat(e.name),children:e.name},e.name)}))]})},b=(n(33),function(e){return e.ingredients?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Ingredients"}),Object(u.jsx)("ul",{children:e.ingredients.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]}):null}),j=function(e){return e.method?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Method"}),Object(u.jsx)("ul",{children:e.method.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]}):null},m=function(e){var t=e.recipe;return Object(u.jsx)("div",{className:"app-page",children:Object(u.jsxs)("div",{className:"recipe",children:[Object(u.jsx)("h1",{className:"recipe-title",children:t.name}),Object(u.jsx)("a",{href:t.url,className:"recessive-link",children:"Click for original recipe"}),Object(u.jsx)(b,{ingredients:t.ingredients}),Object(u.jsx)(j,{method:t.method})]})})},p=n(9),g=n(14),O=function(e){var t=e.label,n=e.state,i=e.setState;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{children:t}),n.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:e,onChange:function(e){return function(e,t){var a=Object(g.a)(n);a[e]=t.target.value,i(a)}(t,e)}}),Object(u.jsx)("button",{className:"small-action-button",onClick:function(){return e=t,n.splice(e,1),void i(Object(g.a)(n));var e},"data-testid":"delete",children:"-"})]},t)})),Object(u.jsx)("button",{onClick:function(){var e=[].concat(Object(g.a)(n),[""]);i(e)},className:"small-action-button","data-testid":"add",children:"+"})]})},f=function(){var e=Object(i.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),r=Object(p.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)([]),d=Object(p.a)(l,2),h=d[0],b=d[1],j=Object(i.useState)([]),m=Object(p.a)(j,2),g=m[0],f=m[1],x=Object(i.useState)(""),v=Object(p.a)(x,2),k=v[0],y=v[1],w=function(){var e={name:n,url:s,ingredients:h.filter((function(e){return e.trim().length>0})),method:g.filter((function(e){return e.trim().length>0}))};return JSON.stringify(e)};return Object(u.jsxs)("div",{className:"app-page",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{value:n,onChange:function(e){a(e.target.value)}}),Object(u.jsx)("label",{children:"URL"}),Object(u.jsx)("input",{value:s,onChange:function(e){o(e.target.value)}}),Object(u.jsx)(O,{label:"Ingredients",state:h,setState:b}),Object(u.jsx)(O,{label:"Method",state:g,setState:f}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"action-button",onClick:function(){y(w())},children:"Display JSON"}),Object(u.jsx)("button",{className:"action-button",onClick:function(){navigator.clipboard.writeText(w())},children:"Copy to clipboard"})]}),Object(u.jsx)("div",{children:k})]})},x=function(){return Object(u.jsxs)("div",{className:"app-page",children:[Object(u.jsx)("h1",{children:"404"}),Object(u.jsx)("p",{children:"Hmm, looks like that page wasn't found. Return to the homepage?"}),Object(u.jsx)(s.b,{className:"home-link",to:"/",children:"Home"})]})},v=n.p+"static/media/home.6660b146.svg",k=n.p+"static/media/edit-doc.7f53e506.svg",y=(n(34),function(){return Object(u.jsxs)("div",{className:"nav-bar",children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("img",{src:v,className:"icon",alt:"Home icon"})}),Object(u.jsx)(s.b,{to:"/recipe-generator",children:Object(u.jsx)("img",{src:k,className:"icon",alt:"Edit icon"})})]})}),w=function(){var e=sessionStorage.redirect;return delete sessionStorage.redirect,e&&e!=location.href&&history.replaceState(null,"cooking",e),Object(u.jsxs)(s.a,{basename:"cooking",children:[Object(u.jsx)(y,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(h,{})}),Object(u.jsx)(o.a,{path:"/recipe/:recipeId",render:function(e){var t=function(e){var t=d().filter((function(t){return t.name.toLowerCase()===e.toLowerCase()}));return t.length>0?t[0]:null}(e.match.params.recipeId);return t?Object(u.jsx)(m,{recipe:t}):Object(u.jsx)(x,{})}}),Object(u.jsx)(o.a,{path:"/recipe-generator",children:Object(u.jsx)(f,{})}),Object(u.jsx)(o.a,{children:Object(u.jsx)(x,{})})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.34d09459.chunk.js.map