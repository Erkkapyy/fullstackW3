(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(39)},18:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(11),r=t.n(l),u=(t(18),t(2)),c=t(3),i=t.n(c),m=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,l=e.newNumber,r=e.handleNumberChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:l,onChange:r})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))))},s=function(e){var n=e.personsToShow,t=e.deletePerson;return n.map(function(e){return o.a.createElement("li",{key:e.name},e.name," ",e.number,o.a.createElement("button",{onClick:function(){return t({id:e.id,name:e.name})}},"poista"))})},f=function(e){var n=e.handleShowChange;return o.a.createElement("form",{onChange:n},o.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4 ",o.a.createElement("input",null)))},d="/api/persons",v=function(){return i.a.get(d)},g=function(e){return i.a.post(d,e)},h=function(e){var n=e.id,t=e.newObject;return i.a.put("".concat(d,"/").concat(n),t).catch(function(e){console.log("fail boi")})},b=function(e){return i.a.delete("".concat(d,"/").concat(e))},E=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"success"},n)},w=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},p=function(){var e=Object(a.useState)([{name:"Arto Hellas",number:"040-123456"},{name:"Martti Tienari",number:"040-123456"},{name:"Arto J\xe4rvinen",number:"040-123456"},{name:"Lea Kutvonen",number:"040-123456"}]),n=Object(u.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),i=c[0],d=c[1],p=Object(a.useState)(""),j=Object(u.a)(p,2),O=j[0],k=j[1],N=Object(a.useState)(""),C=Object(u.a)(N,2),S=C[0],P=C[1],T=Object(a.useState)(null),y=Object(u.a)(T,2),H=y[0],J=y[1],L=Object(a.useState)(null),x=Object(u.a)(L,2),A=x[0],B=x[1];Object(a.useEffect)(function(){console.log("effect"),v().then(function(e){l(e.data)})},[]);var D=t.filter(function(e){return e.name.toLowerCase().includes(S)});return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(E,{message:H}),o.a.createElement(w,{message:A}),o.a.createElement(f,{handleShowChange:function(e){console.log(e.target.value),P(e.target.value)}}),o.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),o.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:i,number:O};if(console.log(n),console.log(t),console.log(t.indexOf(n)),function(){var e=!1;return t.forEach(function(n,t,a){console.log(i,"verrattava1"),console.log(n.name,"verrattava2"),n.name===i&&(e=!0)}),e}()){if(window.confirm("".concat(n.name," on jo luettelossa, korvataanko vanha numero uudella?"))){var a={};t.map(function(e){return e.name===n.name&&(a={name:e.name,number:O,id:e.id}),a}),console.log("newPerson!!! ",a.id),h({id:a.id,newObject:a}).then(function(e){l(t.filter(function(e){return e.id!==a.id}).concat(e.data))}).catch(function(e){e?(B("Henkil\xf6 '".concat(a.name,"' oli jo poistettu palvelimelta")),setTimeout(function(){B(null)},5e3)):(J("Numero vaihdettu onnistuneesti"),setTimeout(function(){J(null)},5e3)),l(t.filter(function(e){return e.id!==a.id}))})}}else{var o={name:i,number:O,id:t.length+1};g(o).then(function(e){l(t.concat(e.data)),d("")}),J("Henkil\xf6 lis\xe4tty onnistuneesti"),setTimeout(function(){J(null)},5e3)}console.log(t)},newName:i,handleNameChange:function(e){console.log(e.target.value),d(e.target.value)},newNumber:O,handleNumberChange:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h2",null,"Numerot"),o.a.createElement("ul",null,o.a.createElement(s,{personsToShow:D,deletePerson:function(e){var n=e.id,a=e.name;console.log("nappi bainettu :D"),console.log("p\xe4rkk\xe4l\xe4 ",{name:a,id:n}),window.confirm("Poistetaanko ".concat(a,"?"))&&b(n);var o=t.filter(function(e){return e.id!==n});l(o),J("Henkil\xf6 poistettu onnistuneesti"),setTimeout(function(){J(null)},5e3)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.8178af89.chunk.js.map