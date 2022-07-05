import{SvelteComponent,append,assign,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert,mount_component,noop,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Pager from"../components/pager.js";import{sortByDate}from"../scripts/sort_by_date.js";function get_each_context(e,t,n){const s=e.slice();return s[12]=t[n].name,s[13]=t[n].fields,s}function get_each_context_1(e,t,n){const s=e.slice();return s[16]=t[n],s[18]=n,s}function create_if_block_1(e){let r,n,c,o,_,m,t,l,O=e[16].fields.date+"",h,v,d,a,w=e[16].fields.title+"",p,x,j,i,y=e[16].fields.body[0]+"",f,b,g,s,u,C;return{c(){r=element("div"),n=element("article"),c=element("div"),o=element("img"),m=space(),t=element("div"),l=element("span"),h=text(O),v=space(),d=element("h3"),a=element("a"),p=text(w),j=space(),i=element("p"),f=text(y),b=text(".."),g=space(),s=element("a"),u=text("read more"),this.h()},l(e){r=claim_element(e,"DIV",{class:!0});var _,x,C,E,k,A,S,M,F=children(r);n=claim_element(F,"ARTICLE",{class:!0}),x=children(n),c=claim_element(x,"DIV",{class:!0}),k=children(c),o=claim_element(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(detach),m=claim_space(x),t=claim_element(x,"DIV",{class:!0}),_=children(t),l=claim_element(_,"SPAN",{class:!0}),A=children(l),h=claim_text(A,O),A.forEach(detach),v=claim_space(_),d=claim_element(_,"H3",{class:!0}),S=children(d),a=claim_element(S,"A",{href:!0,class:!0}),E=children(a),p=claim_text(E,w),E.forEach(detach),S.forEach(detach),j=claim_space(_),i=claim_element(_,"P",{class:!0}),C=children(i),f=claim_text(C,y),b=claim_text(C,".."),C.forEach(detach),g=claim_space(_),s=claim_element(_,"A",{href:!0,class:!0}),M=children(s),u=claim_text(M,"read more"),M.forEach(detach),_.forEach(detach),x.forEach(detach),F.forEach(detach),this.h()},h(){o.src!==(_=e[16].fields.image)&&attr(o,"src",_),attr(o,"alt","post-thumb"),attr(o,"class","svelte-zo927q"),attr(c,"class","site-blog-post-thumb svelte-zo927q"),attr(l,"class","svelte-zo927q"),attr(a,"href",x=e[16].path),attr(a,"class","svelte-zo927q"),attr(d,"class","svelte-zo927q"),attr(i,"class","svelte-zo927q"),attr(s,"href",C=e[16].path),attr(s,"class","read-more svelte-zo927q"),attr(t,"class","site-blog-post-content svelte-zo927q"),attr(n,"class","site-blog-post svelte-zo927q"),attr(r,"class","col-lg-6 svelte-zo927q")},m(e,y){insert(e,r,y),append(r,n),append(n,c),append(c,o),append(n,m),append(n,t),append(t,l),append(l,h),append(t,v),append(t,d),append(d,a),append(a,p),append(t,j),append(t,i),append(i,f),append(i,b),append(t,g),append(t,s),append(s,u)},p:noop,d(e){e&&detach(r)}}}function create_each_block_1(e){let n,t=e[18]>=e[8]&&e[18]<e[7]&&create_if_block_1(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,s){t&&t.m(e,s),insert(e,n,s)},p(e,s){e[18]>=e[8]&&e[18]<e[7]?t?t.p(e,s):(t=create_if_block_1(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&detach(n)}}}function create_if_block(e){let s,o,n=e[4],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,o){if(o&60){n=e[4];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_each_block(e){let t,s,o;const i=[e[13],{allContent:e[2]},{content:e[3]}];var n=e[5]["layouts_components_"+e[12]+"_svelte"];function a(){let t={};for(let e=0;e<i.length;e+=1)t=assign(t,i[e]);return{props:t}}return n&&(t=new n(a(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e,o){const r=o&28?get_spread_update(i,[o&16&&get_spread_object(e[13]),o&4&&{allContent:e[2]},o&8&&{content:e[3]}]):{};if(n!==(n=e[5]["layouts_components_"+e[12]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(a(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(r)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let o,c,p,h,a,r,b,w,l,v,y,g,m,s,j,u,i,_,d,f=sortByDate(e[9]),n=[];for(let t=0;t<f.length;t+=1)n[t]=create_each_block_1(get_each_context_1(e,f,t));i=new Pager({props:{currentPage:e[6],totalPages:e[10],base:"blog"}});let t=e[4]&&create_if_block(e);return{c(){o=element("main"),c=element("section"),p=element("div"),h=element("div"),a=element("div"),r=element("h1"),b=text(e[0]),w=space(),l=element("p"),v=text(e[1]),y=space(),g=element("section"),m=element("div"),s=element("div");for(let e=0;e<n.length;e+=1)n[e].c();j=space(),u=element("div"),create_component(i.$$.fragment),_=space(),t&&t.c(),this.h()},l(d){o=claim_element(d,"MAIN",{class:!0});var f,O,C,E,k,A,S,M,F,T,x=children(o);c=claim_element(x,"SECTION",{class:!0}),C=children(c),p=claim_element(C,"DIV",{class:!0}),E=children(p),h=claim_element(E,"DIV",{class:!0}),F=children(h),a=claim_element(F,"DIV",{class:!0}),O=children(a),r=claim_element(O,"H1",{class:!0}),k=children(r),b=claim_text(k,e[0]),k.forEach(detach),w=claim_space(O),l=claim_element(O,"P",{class:!0}),A=children(l),v=claim_text(A,e[1]),A.forEach(detach),O.forEach(detach),F.forEach(detach),E.forEach(detach),C.forEach(detach),y=claim_space(x),g=claim_element(x,"SECTION",{class:!0}),S=children(g),m=claim_element(S,"DIV",{class:!0}),M=children(m),s=claim_element(M,"DIV",{class:!0}),f=children(s);for(let e=0;e<n.length;e+=1)n[e].l(f);j=claim_space(f),u=claim_element(f,"DIV",{class:!0}),T=children(u),claim_component(i.$$.fragment,T),T.forEach(detach),_=claim_space(f),t&&t.l(f),f.forEach(detach),M.forEach(detach),S.forEach(detach),x.forEach(detach),this.h()},h(){attr(r,"class","svelte-zo927q"),attr(l,"class","svelte-zo927q"),attr(a,"class","col-lg-8 text-center svelte-zo927q"),attr(h,"class","row justify-content-center svelte-zo927q"),attr(p,"class","container svelte-zo927q"),attr(c,"class","site-blog-header svelte-zo927q"),attr(u,"class","col-12 svelte-zo927q"),attr(s,"class","row svelte-zo927q"),attr(m,"class","container svelte-zo927q"),attr(g,"class","site-blog svelte-zo927q"),attr(o,"class","svelte-zo927q")},m(e,f){insert(e,o,f),append(o,c),append(c,p),append(p,h),append(h,a),append(a,r),append(r,b),append(a,w),append(a,l),append(l,v),append(o,y),append(o,g),append(g,m),append(m,s);for(let e=0;e<n.length;e+=1)n[e].m(s,null);append(s,j),append(s,u),mount_component(i,u,null),append(s,_),t&&t.m(s,null),d=!0},p(e,[o]){if((!d||o&1)&&set_data(b,e[0]),(!d||o&2)&&set_data(v,e[1]),o&896){f=sortByDate(e[9]);let t;for(t=0;t<f.length;t+=1){const i=get_each_context_1(e,f,t);n[t]?n[t].p(i,o):(n[t]=create_each_block_1(i),n[t].c(),n[t].m(s,j))}for(;t<n.length;t+=1)n[t].d(1);n.length=f.length}const a={};o&64&&(a.currentPage=e[6]),i.$set(a),e[4]?t?(t.p(e,o),o&16&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(s,null)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(e){if(d)return;transition_in(i.$$.fragment,e),transition_in(t),d=!0},o(e){transition_out(i.$$.fragment,e),transition_out(t),d=!1},d(e){e&&detach(o),destroy_each(n,e),destroy_component(i),t&&t.d()}}}let postsPerPage=2;function instance(e,t,n){let s,o,r,{title:c}=t,{desc:l}=t,{allContent:i}=t,{content:a}=t,{components:d}=t,{allLayouts:u}=t,h=i.filter(e=>e.type=="blog_posts"),m=h.length,f=Math.ceil(m/postsPerPage);return e.$$set=e=>{"title"in e&&n(0,c=e.title),"desc"in e&&n(1,l=e.desc),"allContent"in e&&n(2,i=e.allContent),"content"in e&&n(3,a=e.content),"components"in e&&n(4,d=e.components),"allLayouts"in e&&n(5,u=e.allLayouts)},e.$$.update=()=>{if(e.$$.dirty&8)$:n(6,s=a.pager);if(e.$$.dirty&64)$:n(7,o=s*postsPerPage);if(e.$$.dirty&128)$:n(8,r=o-postsPerPage)},[c,l,i,a,d,u,s,o,r,h,f]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,desc:1,allContent:2,content:3,components:4,allLayouts:5})}}export default Component