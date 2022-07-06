import{SvelteComponent,add_flush_callback,add_render_callback,append,attr,bind,binding_callbacks,bubble,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_bidirectional_transition,create_component,destroy_component,detach,element,group_outros,init,insert,is_function,listen,mount_component,noop,null_to_empty,prevent_default,run_all,safe_not_equal,space,stop_propagation,subscribe,svg_element,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import JSONEditor from"./json_editor.js";import MediaBrowser from"./media_browser.js";import FileUpload from"./file_upload.js";import VisualEditor from"./visual_editor.js";import AddContent from"./add_content.js";import allAssets from"./assets.js";import{env}from"../env.js";function create_else_block_2(){let t,s,o,n,i;return{c(){t=svg_element("svg"),s=svg_element("path"),o=svg_element("path"),n=svg_element("line"),i=text(`
    Edit`),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=children(t);s=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(s).forEach(detach),o=claim_element(a,"path",{d:!0},1),children(o).forEach(detach),n=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(n).forEach(detach),a.forEach(detach),i=claim_text(e,`
    Edit`),this.h()},h(){attr(s,"stroke","none"),attr(s,"d","M0 0h24v24H0z"),attr(s,"fill","none"),attr(o,"d","M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"),attr(n,"x1","13.5"),attr(n,"y1","6.5"),attr(n,"x2","17.5"),attr(n,"y2","10.5"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-pencil svelte-zkzdmz"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,a){insert(e,t,a),append(t,s),append(t,o),append(t,n),insert(e,i,a)},d(e){e&&detach(t),e&&detach(i)}}}function create_if_block_5(){let t,n,s,o,i;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("circle"),o=svg_element("path"),i=text(`
    View`),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=children(t);n=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(n).forEach(detach),s=claim_element(a,"circle",{cx:!0,cy:!0,r:!0},1),children(s).forEach(detach),o=claim_element(a,"path",{d:!0},1),children(o).forEach(detach),a.forEach(detach),i=claim_text(e,`
    View`),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"cx","12"),attr(s,"cy","12"),attr(s,"r","2"),attr(o,"d","M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-eye svelte-zkzdmz"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,a){insert(e,t,a),append(t,n),append(t,s),append(t,o),insert(e,i,a)},d(e){e&&detach(t),e&&detach(i)}}}function create_if_block_3(e){let l,O,s,_,v,g,R,c,b,r,n,j,E,x,p,z,C,D,A,N,a,t,y,d,m,h,u,F,k,M,S,T,i,o,w,L,H;const P=[create_if_block_4,create_else_block_1],f=[];function I(e){return e[4]==="library"?0:1}return i=I(e,-1),o=f[i]=P[i](e),{c(){l=element("div"),O=element("div"),s=svg_element("svg"),_=svg_element("path"),v=svg_element("line"),g=svg_element("line"),R=space(),c=element("div"),b=element("div"),r=element("div"),n=svg_element("svg"),j=svg_element("path"),E=svg_element("path"),x=svg_element("polyline"),p=svg_element("line"),z=space(),C=element("span"),D=text("Upload"),N=space(),a=element("div"),t=svg_element("svg"),y=svg_element("path"),d=svg_element("rect"),m=svg_element("rect"),h=svg_element("rect"),u=svg_element("rect"),F=space(),k=element("span"),M=text("Library"),T=space(),o.c(),this.h()},l(e){l=claim_element(e,"DIV",{class:!0});var i,f,w,A,S,L,P,I,B,V,H=children(l);O=claim_element(H,"DIV",{class:!0}),I=children(O),s=claim_element(I,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),w=children(s),_=claim_element(w,"path",{stroke:!0,d:!0,fill:!0},1),children(_).forEach(detach),v=claim_element(w,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(v).forEach(detach),g=claim_element(w,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(g).forEach(detach),w.forEach(detach),I.forEach(detach),R=claim_space(H),c=claim_element(H,"DIV",{class:!0}),P=children(c),b=claim_element(P,"DIV",{class:!0}),A=children(b),r=claim_element(A,"DIV",{class:!0}),S=children(r),n=claim_element(S,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),f=children(n),j=claim_element(f,"path",{stroke:!0,d:!0,fill:!0},1),children(j).forEach(detach),E=claim_element(f,"path",{d:!0},1),children(E).forEach(detach),x=claim_element(f,"polyline",{points:!0},1),children(x).forEach(detach),p=claim_element(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(p).forEach(detach),f.forEach(detach),z=claim_space(S),C=claim_element(S,"SPAN",{}),B=children(C),D=claim_text(B,"Upload"),B.forEach(detach),S.forEach(detach),N=claim_space(A),a=claim_element(A,"DIV",{class:!0}),L=children(a),t=claim_element(L,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),i=children(t),y=claim_element(i,"path",{stroke:!0,d:!0,fill:!0},1),children(y).forEach(detach),d=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(d).forEach(detach),m=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(m).forEach(detach),h=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(h).forEach(detach),u=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(u).forEach(detach),i.forEach(detach),F=claim_space(L),k=claim_element(L,"SPAN",{}),V=children(k),M=claim_text(V,"Library"),V.forEach(detach),L.forEach(detach),A.forEach(detach),T=claim_space(P),o.l(P),P.forEach(detach),H.forEach(detach),this.h()},h(){attr(_,"stroke","none"),attr(_,"d","M0 0h24v24H0z"),attr(_,"fill","none"),attr(v,"x1","18"),attr(v,"y1","6"),attr(v,"x2","6"),attr(v,"y2","18"),attr(g,"x1","6"),attr(g,"y1","6"),attr(g,"x2","18"),attr(g,"y2","18"),attr(s,"xmlns","http://www.w3.org/2000/svg"),attr(s,"class","icon icon-tabler icon-tabler-x svelte-zkzdmz"),attr(s,"width","35"),attr(s,"height","35"),attr(s,"viewBox","5 5 14 14"),attr(s,"stroke-width","1.5"),attr(s,"stroke","white"),attr(s,"fill","none"),attr(s,"stroke-linecap","round"),attr(s,"stroke-linejoin","round"),attr(O,"class","modal-close svelte-zkzdmz"),attr(j,"stroke","none"),attr(j,"d","M0 0h24v24H0z"),attr(j,"fill","none"),attr(E,"d","M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"),attr(x,"points","7 9 12 4 17 9"),attr(p,"x1","12"),attr(p,"y1","4"),attr(p,"x2","12"),attr(p,"y2","16"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-upload svelte-zkzdmz"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(r,"class",A="selector "+(e[4]==="upload"?"active":"")+" svelte-zkzdmz"),attr(y,"stroke","none"),attr(y,"d","M0 0h24v24H0z"),attr(y,"fill","none"),attr(d,"x","4"),attr(d,"y","4"),attr(d,"width","6"),attr(d,"height","6"),attr(d,"rx","1"),attr(m,"x","14"),attr(m,"y","4"),attr(m,"width","6"),attr(m,"height","6"),attr(m,"rx","1"),attr(h,"x","4"),attr(h,"y","14"),attr(h,"width","6"),attr(h,"height","6"),attr(h,"rx","1"),attr(u,"x","14"),attr(u,"y","14"),attr(u,"width","6"),attr(u,"height","6"),attr(u,"rx","1"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-layout-grid svelte-zkzdmz"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(a,"class",S="selector "+(e[4]==="library"?"active":"")+" svelte-zkzdmz"),attr(b,"class","selectors svelte-zkzdmz"),attr(c,"class","modal svelte-zkzdmz"),attr(l,"class","modal-wrapper svelte-zkzdmz")},m(o,A){insert(o,l,A),append(l,O),append(O,s),append(s,_),append(s,v),append(s,g),append(l,R),append(l,c),append(c,b),append(b,r),append(r,n),append(n,j),append(n,E),append(n,x),append(n,p),append(r,z),append(r,C),append(C,D),append(b,N),append(b,a),append(a,t),append(t,y),append(t,d),append(t,m),append(t,h),append(t,u),append(a,F),append(a,k),append(k,M),append(c,T),f[i].m(c,null),w=!0,L||(H=[listen(r,"click",e[17]),listen(a,"click",e[18]),listen(c,"click",stop_propagation(e[15])),listen(l,"click",e[9])],L=!0)},p(e,t){(!w||t&16&&A!==(A="selector "+(e[4]==="upload"?"active":"")+" svelte-zkzdmz"))&&attr(r,"class",A),(!w||t&16&&S!==(S="selector "+(e[4]==="library"?"active":"")+" svelte-zkzdmz"))&&attr(a,"class",S);let n=i;i=I(e,t),i===n?f[i].p(e,t):(group_outros(),transition_out(f[n],1,1,()=>{f[n]=null}),check_outros(),o=f[i],o?o.p(e,t):(o=f[i]=P[i](e),o.c()),transition_in(o,1),o.m(c,null))},i(){if(w)return;transition_in(o),w=!0},o(){transition_out(o),w=!1},d(e){e&&detach(l),f[i].d(),L=!1,run_all(H)}}}function create_else_block_1(e){let t,s,n;function i(t){e[20](t)}let o={};return e[2]!==void 0&&(o.assets=e[2]),t=new FileUpload({props:o}),binding_callbacks.push(()=>bind(t,"assets",i)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const o={};!s&&n&4&&(s=!0,o.assets=e[2],add_flush_callback(()=>s=!1)),t.$set(o)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_4(e){let t,s,n;function i(t){e[19](t)}let o={};return e[2]!==void 0&&(o.assets=e[2]),t=new MediaBrowser({props:o}),binding_callbacks.push(()=>bind(t,"assets",i)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const o={};!s&&n&4&&(s=!0,o.assets=e[2],add_flush_callback(()=>s=!1)),t.$set(o)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_2(e){let s,c,t,r,o,i,m,a,n,p,u,h,l,f,g;function v(t){e[21](t)}function b(t){e[22](t)}function j(t){e[23](t)}let d={};return e[7]!==void 0&&(d.showAdd=e[7]),e[5]!==void 0&&(d.showEditor=e[5]),e[0]!==void 0&&(d.content=e[0]),n=new AddContent({props:d}),binding_callbacks.push(()=>bind(n,"showAdd",v)),binding_callbacks.push(()=>bind(n,"showEditor",b)),binding_callbacks.push(()=>bind(n,"content",j)),{c(){s=element("div"),c=element("div"),t=svg_element("svg"),r=svg_element("path"),o=svg_element("line"),i=svg_element("line"),m=space(),a=element("div"),create_component(n.$$.fragment),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var l,u,h,d=children(s);c=claim_element(d,"DIV",{class:!0}),u=children(c),t=claim_element(u,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),l=children(t),r=claim_element(l,"path",{stroke:!0,d:!0,fill:!0},1),children(r).forEach(detach),o=claim_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(o).forEach(detach),i=claim_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(i).forEach(detach),l.forEach(detach),u.forEach(detach),m=claim_space(d),a=claim_element(d,"DIV",{class:!0}),h=children(a),claim_component(n.$$.fragment,h),h.forEach(detach),d.forEach(detach),this.h()},h(){attr(r,"stroke","none"),attr(r,"d","M0 0h24v24H0z"),attr(r,"fill","none"),attr(o,"x1","18"),attr(o,"y1","6"),attr(o,"x2","6"),attr(o,"y2","18"),attr(i,"x1","6"),attr(i,"y1","6"),attr(i,"x2","18"),attr(i,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x svelte-zkzdmz"),attr(t,"width","35"),attr(t,"height","35"),attr(t,"viewBox","5 5 14 14"),attr(t,"stroke-width","1.5"),attr(t,"stroke","white"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(c,"class","modal-close svelte-zkzdmz"),attr(a,"class","modal small svelte-zkzdmz"),attr(s,"class","modal-wrapper svelte-zkzdmz")},m(d,u){insert(d,s,u),append(s,c),append(c,t),append(t,r),append(t,o),append(t,i),append(s,m),append(s,a),mount_component(n,a,null),l=!0,f||(g=[listen(a,"click",stop_propagation(e[14])),listen(s,"click",e[24])],f=!0)},p(e,t){const s={};!p&&t&128&&(p=!0,s.showAdd=e[7],add_flush_callback(()=>p=!1)),!u&&t&32&&(u=!0,s.showEditor=e[5],add_flush_callback(()=>u=!1)),!h&&t&1&&(h=!0,s.content=e[0],add_flush_callback(()=>h=!1)),n.$set(s)},i(e){if(l)return;transition_in(n.$$.fragment,e),l=!0},o(e){transition_out(n.$$.fragment,e),l=!1},d(e){e&&detach(s),destroy_component(n),f=!1,run_all(g)}}}function create_if_block(e){let s,m,a,t,p,c,u,d,M,v,A,O,C,r,n,g,y,b,E,j,x,w,k,i,o,_,h,f,S,T;const F=[create_if_block_1,create_else_block],l=[];function z(e){return e[6]==="code"?0:1}return i=z(e,-1),o=l[i]=F[i](e),{c(){s=element("div"),m=element("div"),a=element("div"),t=svg_element("svg"),p=svg_element("path"),c=svg_element("rect"),u=svg_element("line"),d=svg_element("line"),M=space(),v=element("span"),A=text("Visual"),C=space(),r=element("div"),n=svg_element("svg"),g=svg_element("path"),y=svg_element("path"),b=svg_element("path"),E=space(),j=element("span"),x=text("Code"),k=space(),o.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var i,l,h,f,_,O,S,w=children(s);m=claim_element(w,"DIV",{class:!0}),h=children(m),a=claim_element(h,"DIV",{class:!0}),f=children(a),t=claim_element(f,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),i=children(t),p=claim_element(i,"path",{stroke:!0,d:!0,fill:!0},1),children(p).forEach(detach),c=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(c).forEach(detach),u=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(u).forEach(detach),d=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(d).forEach(detach),i.forEach(detach),M=claim_space(f),v=claim_element(f,"SPAN",{}),O=children(v),A=claim_text(O,"Visual"),O.forEach(detach),f.forEach(detach),C=claim_space(h),r=claim_element(h,"DIV",{class:!0}),_=children(r),n=claim_element(_,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),l=children(n),g=claim_element(l,"path",{stroke:!0,d:!0,fill:!0},1),children(g).forEach(detach),y=claim_element(l,"path",{d:!0},1),children(y).forEach(detach),b=claim_element(l,"path",{d:!0},1),children(b).forEach(detach),l.forEach(detach),E=claim_space(_),j=claim_element(_,"SPAN",{}),S=children(j),x=claim_text(S,"Code"),S.forEach(detach),_.forEach(detach),h.forEach(detach),k=claim_space(w),o.l(w),w.forEach(detach),this.h()},h(){attr(p,"stroke","none"),attr(p,"d","M0 0h24v24H0z"),attr(p,"fill","none"),attr(c,"x","4"),attr(c,"y","4"),attr(c,"width","16"),attr(c,"height","16"),attr(c,"rx","2"),attr(u,"x1","4"),attr(u,"y1","10"),attr(u,"x2","20"),attr(u,"y2","10"),attr(d,"x1","10"),attr(d,"y1","4"),attr(d,"x2","10"),attr(d,"y2","20"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-table svelte-zkzdmz"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(a,"class",O="selector "+(e[6]==="visual"?"active":"")+" svelte-zkzdmz"),attr(g,"stroke","none"),attr(g,"d","M0 0h24v24H0z"),attr(g,"fill","none"),attr(y,"d","M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2"),attr(b,"d","M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-braces svelte-zkzdmz"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(r,"class",w="selector "+(e[6]==="code"?"active":"")+" svelte-zkzdmz"),attr(m,"class","selectors svelte-zkzdmz"),attr(s,"class",_=""+(null_to_empty(e[5]?"sidenav":"")+" svelte-zkzdmz"))},m(o,h){insert(o,s,h),append(s,m),append(m,a),append(a,t),append(t,p),append(t,c),append(t,u),append(t,d),append(a,M),append(a,v),append(v,A),append(m,C),append(m,r),append(r,n),append(n,g),append(n,y),append(n,b),append(r,E),append(r,j),append(j,x),append(s,k),l[i].m(s,null),f=!0,S||(T=[listen(a,"click",e[25]),listen(r,"click",e[26])],S=!0)},p(e,t){(!f||t&64&&O!==(O="selector "+(e[6]==="visual"?"active":"")+" svelte-zkzdmz"))&&attr(a,"class",O),(!f||t&64&&w!==(w="selector "+(e[6]==="code"?"active":"")+" svelte-zkzdmz"))&&attr(r,"class",w);let n=i;i=z(e,t),i===n?l[i].p(e,t):(group_outros(),transition_out(l[n],1,1,()=>{l[n]=null}),check_outros(),o=l[i],o?o.p(e,t):(o=l[i]=F[i](e),o.c()),transition_in(o,1),o.m(s,null)),(!f||t&32&&_!==(_=""+(null_to_empty(e[5]?"sidenav":"")+" svelte-zkzdmz")))&&attr(s,"class",_)},i(t){if(f)return;transition_in(o),t&&add_render_callback(()=>{h||(h=create_bidirectional_transition(s,e[13],{},!0)),h.run(1)}),f=!0},o(t){transition_out(o),t&&(h||(h=create_bidirectional_transition(s,e[13],{},!1)),h.run(0)),f=!1},d(e){e&&detach(s),l[i].d(),e&&h&&h.end(),S=!1,run_all(T)}}}function create_else_block(e){let t,s,n;function i(t){e[28](t)}let o={};return e[0]!==void 0&&(o.content=e[0]),t=new VisualEditor({props:o}),binding_callbacks.push(()=>bind(t,"content",i)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const o={};!s&&n&1&&(s=!0,o.content=e[0],add_flush_callback(()=>s=!1)),t.$set(o)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(e){let t,s,n;function i(t){e[27](t)}let o={};return e[0]!==void 0&&(o.content=e[0]),t=new JSONEditor({props:o}),binding_callbacks.push(()=>bind(t,"content",i)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const o={};!s&&n&1&&(s=!0,o.content=e[0],add_flush_callback(()=>s=!1)),t.$set(o)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let E,H,a,g,r,w,N,M,Y,U,u,B,T,G,p,i,_,y,b,j,q,V,m,o,O,v,f,D,S,K,I,l,c,x,A,z,$,P,k,C,h,L,F,W,Q;function X(e){return e[5]?create_if_block_5:create_else_block_2}let R=X(e,-1),d=R(e),s=e[3]&&create_if_block_3(e),n=e[7]&&create_if_block_2(e),t=e[5]&&create_if_block(e);return{c(){E=element("div"),H=space(),a=element("nav"),g=element("a"),r=svg_element("svg"),w=svg_element("path"),N=svg_element("polyline"),M=svg_element("path"),Y=text(`
    Home`),U=space(),u=element("a"),d.c(),B=space(),T=element("span"),G=space(),p=element("a"),i=svg_element("svg"),_=svg_element("path"),y=svg_element("circle"),b=svg_element("line"),j=svg_element("line"),q=text(`
    Add`),V=space(),m=element("a"),o=svg_element("svg"),O=svg_element("path"),v=svg_element("line"),f=svg_element("rect"),D=svg_element("path"),S=svg_element("path"),K=text(`
    Media`),I=space(),l=element("a"),c=svg_element("svg"),x=svg_element("path"),A=svg_element("path"),z=svg_element("path"),$=text(`
    Logout`),P=space(),s&&s.c(),k=space(),n&&n.c(),C=space(),h=element("div"),t&&t.c(),this.h()},l(e){E=claim_element(e,"DIV",{class:!0}),children(E).forEach(detach),H=claim_space(e),a=claim_element(e,"NAV",{class:!0});var L,R,W,X,Q,Z,J,F=children(a),te,ee,ne;g=claim_element(F,"A",{href:!0,id:!0,class:!0}),J=children(g),r=claim_element(J,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),W=children(r),w=claim_element(W,"path",{stroke:!0,d:!0,fill:!0},1),children(w).forEach(detach),N=claim_element(W,"polyline",{points:!0},1),children(N).forEach(detach),M=claim_element(W,"path",{d:!0},1),children(M).forEach(detach),W.forEach(detach),Y=claim_text(J,`
    Home`),J.forEach(detach),U=claim_space(F),u=claim_element(F,"A",{href:!0,class:!0}),te=children(u),d.l(te),te.forEach(detach),B=claim_space(F),T=claim_element(F,"SPAN",{class:!0}),children(T).forEach(detach),G=claim_space(F),p=claim_element(F,"A",{href:!0,class:!0}),Q=children(p),i=claim_element(Q,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),R=children(i),_=claim_element(R,"path",{stroke:!0,d:!0,fill:!0},1),children(_).forEach(detach),y=claim_element(R,"circle",{cx:!0,cy:!0,r:!0},1),children(y).forEach(detach),b=claim_element(R,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(b).forEach(detach),j=claim_element(R,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(j).forEach(detach),R.forEach(detach),q=claim_text(Q,`
    Add`),Q.forEach(detach),V=claim_space(F),m=claim_element(F,"A",{href:!0,class:!0}),Z=children(m),o=claim_element(Z,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),L=children(o),O=claim_element(L,"path",{stroke:!0,d:!0,fill:!0},1),children(O).forEach(detach),v=claim_element(L,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(v).forEach(detach),f=claim_element(L,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(f).forEach(detach),D=claim_element(L,"path",{d:!0},1),children(D).forEach(detach),S=claim_element(L,"path",{d:!0},1),children(S).forEach(detach),L.forEach(detach),K=claim_text(Z,`
    Media`),Z.forEach(detach),I=claim_space(F),l=claim_element(F,"A",{href:!0,class:!0}),ee=children(l),c=claim_element(ee,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),X=children(c),x=claim_element(X,"path",{stroke:!0,d:!0,fill:!0},1),children(x).forEach(detach),A=claim_element(X,"path",{d:!0},1),children(A).forEach(detach),z=claim_element(X,"path",{d:!0},1),children(z).forEach(detach),X.forEach(detach),$=claim_text(ee,`
    Logout`),ee.forEach(detach),F.forEach(detach),P=claim_space(e),s&&s.l(e),k=claim_space(e),n&&n.l(e),C=claim_space(e),h=claim_element(e,"DIV",{class:!0}),ne=children(h),t&&t.l(ne),ne.forEach(detach),this.h()},h(){attr(E,"class","spacer svelte-zkzdmz"),attr(w,"stroke","none"),attr(w,"d","M0 0h24v24H0z"),attr(w,"fill","none"),attr(N,"points","5 12 3 12 12 3 21 12 19 12"),attr(M,"d","M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"),attr(r,"xmlns","http://www.w3.org/2000/svg"),attr(r,"class","icon icon-tabler icon-tabler-home-2 svelte-zkzdmz"),attr(r,"width","30"),attr(r,"height","30"),attr(r,"viewBox","0 0 24 24"),attr(r,"stroke-width","2"),attr(r,"stroke","#2c3e50"),attr(r,"fill","none"),attr(r,"stroke-linecap","round"),attr(r,"stroke-linejoin","round"),attr(g,"href","."),attr(g,"id","home"),attr(g,"class","svelte-zkzdmz"),attr(u,"href","."),attr(u,"class","svelte-zkzdmz"),attr(T,"class","gap svelte-zkzdmz"),attr(_,"stroke","none"),attr(_,"d","M0 0h24v24H0z"),attr(_,"fill","none"),attr(y,"cx","12"),attr(y,"cy","12"),attr(y,"r","9"),attr(b,"x1","9"),attr(b,"y1","12"),attr(b,"x2","15"),attr(b,"y2","12"),attr(j,"x1","12"),attr(j,"y1","9"),attr(j,"x2","12"),attr(j,"y2","15"),attr(i,"xmlns","http://www.w3.org/2000/svg"),attr(i,"class","icon icon-tabler icon-tabler-circle-plus svelte-zkzdmz"),attr(i,"width","30"),attr(i,"height","30"),attr(i,"viewBox","0 0 24 24"),attr(i,"stroke-width","2"),attr(i,"stroke","#2c3e50"),attr(i,"fill","none"),attr(i,"stroke-linecap","round"),attr(i,"stroke-linejoin","round"),attr(p,"href","."),attr(p,"class","svelte-zkzdmz"),attr(O,"stroke","none"),attr(O,"d","M0 0h24v24H0z"),attr(O,"fill","none"),attr(v,"x1","15"),attr(v,"y1","8"),attr(v,"x2","15.01"),attr(v,"y2","8"),attr(f,"x","4"),attr(f,"y","4"),attr(f,"width","16"),attr(f,"height","16"),attr(f,"rx","3"),attr(D,"d","M4 15l4 -4a3 5 0 0 1 3 0l5 5"),attr(S,"d","M14 14l1 -1a3 5 0 0 1 3 0l2 2"),attr(o,"xmlns","http://www.w3.org/2000/svg"),attr(o,"class","icon icon-tabler icon-tabler-photo svelte-zkzdmz"),attr(o,"width","30"),attr(o,"height","30"),attr(o,"viewBox","0 0 24 24"),attr(o,"stroke-width","2"),attr(o,"stroke","#2c3e50"),attr(o,"fill","none"),attr(o,"stroke-linecap","round"),attr(o,"stroke-linejoin","round"),attr(m,"href","."),attr(m,"class","svelte-zkzdmz"),attr(x,"stroke","none"),attr(x,"d","M0 0h24v24H0z"),attr(x,"fill","none"),attr(A,"d","M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"),attr(z,"d","M7 12h14l-3 -3m0 6l3 -3"),attr(c,"xmlns","http://www.w3.org/2000/svg"),attr(c,"class","icon icon-tabler icon-tabler-logout svelte-zkzdmz"),attr(c,"width","30"),attr(c,"height","30"),attr(c,"viewBox","0 0 24 24"),attr(c,"stroke-width","2"),attr(c,"stroke","#2c3e50"),attr(c,"fill","none"),attr(c,"stroke-linecap","round"),attr(c,"stroke-linejoin","round"),attr(l,"href","."),attr(l,"class","svelte-zkzdmz"),attr(a,"class","svelte-zkzdmz"),attr(h,"class",L=""+(null_to_empty(e[5]?"sidenav-wrapper":"")+" svelte-zkzdmz"))},m(L,R){insert(L,E,R),insert(L,H,R),insert(L,a,R),append(a,g),append(g,r),append(r,w),append(r,N),append(r,M),append(g,Y),append(a,U),append(a,u),d.m(u,null),append(a,B),append(a,T),append(a,G),append(a,p),append(p,i),append(i,_),append(i,y),append(i,b),append(i,j),append(p,q),append(a,V),append(a,m),append(m,o),append(o,O),append(o,v),append(o,f),append(o,D),append(o,S),append(m,K),append(a,I),append(a,l),append(l,c),append(c,x),append(c,A),append(c,z),append(l,$),insert(L,P,R),s&&s.m(L,R),insert(L,k,R),n&&n.m(L,R),insert(L,C,R),insert(L,h,R),t&&t.m(h,null),F=!0,W||(Q=[listen(u,"click",prevent_default(e[11])),listen(p,"click",prevent_default(e[16])),listen(m,"click",prevent_default(e[9])),listen(l,"click",prevent_default(function(){is_function(e[8].logout)&&e[8].logout.apply(this,arguments)}))],W=!0)},p(o,[i]){e=o,R!==(R=X(e,i))&&(d.d(1),d=R(e),d&&(d.c(),d.m(u,null))),e[3]?s?(s.p(e,i),i&8&&transition_in(s,1)):(s=create_if_block_3(e),s.c(),transition_in(s,1),s.m(k.parentNode,k)):s&&(group_outros(),transition_out(s,1,1,()=>{s=null}),check_outros()),e[7]?n?(n.p(e,i),i&128&&transition_in(n,1)):(n=create_if_block_2(e),n.c(),transition_in(n,1),n.m(C.parentNode,C)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros()),e[5]?t?(t.p(e,i),i&32&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(h,null)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),(!F||i&32&&L!==(L=""+(null_to_empty(e[5]?"sidenav-wrapper":"")+" svelte-zkzdmz")))&&attr(h,"class",L)},i(){if(F)return;transition_in(s),transition_in(n),transition_in(t),F=!0},o(){transition_out(s),transition_out(n),transition_out(t),F=!1},d(e){e&&detach(E),e&&detach(H),e&&detach(a),d.d(),e&&detach(P),s&&s.d(e),e&&detach(k),n&&n.d(e),e&&detach(C),e&&detach(h),t&&t.d(),W=!1,run_all(Q)}}}function instance(e,t,n){let m,u=noop,f=()=>(u(),u=subscribe(r,e=>n(8,m=e)),r);e.$$.on_destroy.push(()=>u());let{user:r}=t,{content:s}=t;f();let j=env.local?"/":env.baseurl,o=allAssets.map(e=>j+e),d=!1;const b=()=>{n(3,d=!d)};let h="upload";const l=e=>{n(4,h=e)};let a=!1;const v=()=>{n(5,a=!a)};let p="visual";const c=e=>{n(6,p=e)};let i=!1;const g=()=>({delay:0,duration:100,css:e=>"width: "+e*500+"px;"});function y(t){bubble.call(this,e,t)}function _(t){bubble.call(this,e,t)}const w=()=>{n(7,i=!0)},O=()=>l("upload"),x=()=>l("library");function C(e){o=e,n(2,o)}function E(e){o=e,n(2,o)}function k(e){i=e,n(7,i)}function A(e){a=e,n(5,a)}function S(e){s=e,n(0,s)}const M=()=>{n(7,i=!1)},F=()=>c("visual"),T=()=>c("code");function z(e){s=e,n(0,s)}function D(e){s=e,n(0,s)}return e.$$set=e=>{"user"in e&&f(n(1,r=e.user)),"content"in e&&n(0,s=e.content)},[s,r,o,d,h,a,p,i,m,b,l,v,c,g,y,_,w,O,x,C,E,k,A,S,M,F,T,z,D]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{user:1,content:0})}}export default Component