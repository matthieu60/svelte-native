import{b as t,c as a,d as s,e,f as n,g as r,h as o,r as i,s as c,i as p,u,t as f,v as h,k as d,l,m,p as v,q as b,J as E,S as g,a as k}from"./chunk.b6ff97e8.js";import{a as y,b as T}from"./chunk.b4fdaabd.js";function j(t){var a,s,e,n,r,o,i,c,p,y,T,j,x,L,A,N,$,H,M,R=t.post.metadata.author,S=t.post.metadata.dateString,w=t.post.metadata.title,I=t.post.metadata.description,P=t.post.html;return document.title=a=t.post.metadata.title,{c:function(){s=u("\r\n\r\n"),e=f("article"),n=f("p"),r=f("a"),o=u(R),c=u(" "),p=f("time"),y=u(S),j=u("\r\n\r\n\t"),x=f("h1"),L=u(w),A=u("\r\n\t"),N=f("p"),$=u(I),H=u("\r\n\r\n\t"),M=f("noscript"),this.h()},l:function(t){s=h(t,"\r\n\r\n"),e=d(t,"ARTICLE",{class:!0},!1);var a=l(e);n=d(a,"P",{class:!0},!1);var i=l(n);r=d(i,"A",{href:!0},!1);var u=l(r);o=h(u,R),u.forEach(m),c=h(i," "),p=d(i,"TIME",{datetime:!0},!1);var v=l(p);y=h(v,S),v.forEach(m),i.forEach(m),j=h(a,"\r\n\r\n\t"),x=d(a,"H1",{class:!0},!1);var b=l(x);L=h(b,w),b.forEach(m),A=h(a,"\r\n\t"),N=d(a,"P",{class:!0},!1);var E=l(N);$=h(E,I),E.forEach(m),H=h(a,"\r\n\r\n\t"),M=f("noscript"),a.forEach(m),this.h()},h:function(){r.href=i=t.post.metadata.authorURL,p.dateTime=T=t.post.metadata.pubdate,n.className="byline svelte-1356h7s",x.className="svelte-1356h7s",N.className="standfirst svelte-1356h7s",e.className="post linkify listify svelte-1356h7s"},m:function(t,a){v(t,s,a),v(t,e,a),b(e,n),b(n,r),b(r,o),b(n,c),b(n,p),b(p,y),b(e,j),b(e,x),b(x,L),b(e,A),b(e,N),b(N,$),b(e,H),b(e,M),M.insertAdjacentHTML("afterend",P)},p:function(t,s){t.post&&a!==(a=s.post.metadata.title)&&(document.title=a),t.post&&R!==(R=s.post.metadata.author)&&E(o,R),t.post&&i!==(i=s.post.metadata.authorURL)&&(r.href=i),t.post&&S!==(S=s.post.metadata.dateString)&&E(y,S),t.post&&T!==(T=s.post.metadata.pubdate)&&(p.dateTime=T),t.post&&w!==(w=s.post.metadata.title)&&E(L,w),t.post&&I!==(I=s.post.metadata.description)&&E($,I),t.post&&P!==(P=s.post.html)&&(g(M),M.insertAdjacentHTML("afterend",P))},i:k,o:k,d:function(t){t&&(m(s),m(e))}}}function x(t){return L.apply(this,arguments)}function L(){return(L=y(T.mark(function t(a){var s,e;return T.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.params,t.next=3,this.fetch("api/blog/".concat(s.slug)).then(function(t){return t.json()}).catch(function(t){return console.log(t)});case 3:return e=t.sent,t.abrupt("return",{post:e});case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,a,s){var e=a.post;return t.$set=function(t){"post"in t&&s("post",e=t.post)},{post:e}}export default(function(u){function f(t){var i;return a(this,f),i=s(this,e(f).call(this)),n(r(i),t,A,j,o),i}return t(f,p),i(f,[{key:"post",get:function(){return this.$$.ctx.post},set:function(t){this.$set({post:t}),c()}}]),f}());export{x as preload};
//# sourceMappingURL=chunk.5360161d.js.map