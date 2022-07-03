import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,listen,noop,prevent_default,safe_not_equal,space,text}from"../web_modules/svelte/internal/index.mjs";function create_fragment(e){let m,W,t,B,I,x,R,Be,ze,L,c,U,Te,Fe,n,Me,xe,_e,ye,ge,_,pe,he,ue,ce,w,re,oe,S,l,F,se,ne,o,N,f,K,J,H,v,Z,Q,$,j,Y,q,D,g,G,X,V,u,P,ee,te,s,T,O,ie,ae,k,h,le,de,C,b,me,fe,E,y,ve,be,M,r,A,we,Oe,a,Ce,Ee,ke,Ae,Se,Pe,z,i,p,He,Ne,d,Re,De,je,Le,Ie;return{c(){m=element("footer"),W=element("div"),t=element("div"),B=element("div"),I=element("div"),x=element("a"),R=element("img"),ze=space(),L=element("div"),c=element("div"),U=element("h5"),Te=text("Contact Info"),Fe=space(),n=element("p"),Me=text("713 Elmwood St."),xe=element("br"),_e=text(`Prior Lake, MN 55372
            `),ye=element("br"),ge=space(),_=element("a"),pe=text("617-800-9511"),he=space(),ue=element("br"),ce=space(),w=element("a"),re=text("plentico@jantcu.com"),oe=space(),S=element("div"),l=element("div"),F=element("h5"),se=text("Sitemap"),ne=space(),o=element("ul"),N=element("li"),f=element("a"),K=text("About Company"),J=space(),H=element("li"),v=element("a"),Z=text("Projects"),Q=space(),$=element("li"),j=element("a"),Y=text("Blog"),q=space(),D=element("li"),g=element("a"),G=text("Contact"),X=space(),V=element("div"),u=element("div"),P=element("h5"),ee=text("Social Media"),te=space(),s=element("ul"),T=element("li"),O=element("a"),ie=text("Medium"),ae=space(),k=element("li"),h=element("a"),le=text("Behance"),de=space(),C=element("li"),b=element("a"),me=text("Dribbble"),fe=space(),E=element("li"),y=element("a"),ve=text("Instagram"),be=space(),M=element("div"),r=element("div"),A=element("h5"),we=text("We help brands:"),Oe=space(),a=element("p"),Ce=text("develop design solutions"),Ee=element("br"),ke=text("produce valuable cultural content"),Ae=element("br"),Se=text("create fresh brand experience"),Pe=space(),z=element("div"),i=element("a"),p=element("img"),Ne=space(),d=element("p"),Re=text(`I want to 
            `),De=element("br"),je=text(`
            visit again`),this.h()},l(e){m=claim_element(e,"FOOTER",{class:!0});var Et=children(m),Ot,Le,_t,ut,lt,it,Ke,Je,He,Ct,Qe,Xe,$e,Ze,Be,et,tt,nt,st,ot,Ge,at,rt,ct,We,dt,Ie,ht,mt,ft,pt,gt,vt,bt,jt,yt,qe,wt,Ve,xt,Ye,Ue;W=claim_element(Et,"DIV",{class:!0}),Ot=children(W),t=claim_element(Ot,"DIV",{class:!0}),Le=children(t),B=claim_element(Le,"DIV",{class:!0}),_t=children(B),I=claim_element(_t,"DIV",{class:!0}),ut=children(I),x=claim_element(ut,"A",{href:!0}),lt=children(x),R=claim_element(lt,"IMG",{src:!0,alt:!0}),lt.forEach(detach),ut.forEach(detach),_t.forEach(detach),ze=claim_space(Le),L=claim_element(Le,"DIV",{class:!0}),it=children(L),c=claim_element(it,"DIV",{class:!0}),Ke=children(c),U=claim_element(Ke,"H5",{class:!0}),Je=children(U),Te=claim_text(Je,"Contact Info"),Je.forEach(detach),Fe=claim_space(Ke),n=claim_element(Ke,"P",{class:!0}),He=children(n),Me=claim_text(He,"713 Elmwood St."),xe=claim_element(He,"BR",{}),_e=claim_text(He,`Prior Lake, MN 55372
            `),ye=claim_element(He,"BR",{}),ge=claim_space(He),_=claim_element(He,"A",{href:!0,class:!0}),Ct=children(_),pe=claim_text(Ct,"617-800-9511"),Ct.forEach(detach),he=claim_space(He),ue=claim_element(He,"BR",{}),ce=claim_space(He),w=claim_element(He,"A",{href:!0,class:!0}),Qe=children(w),re=claim_text(Qe,"plentico@jantcu.com"),Qe.forEach(detach),He.forEach(detach),Ke.forEach(detach),it.forEach(detach),oe=claim_space(Le),S=claim_element(Le,"DIV",{class:!0}),Xe=children(S),l=claim_element(Xe,"DIV",{class:!0}),$e=children(l),F=claim_element($e,"H5",{class:!0}),Ze=children(F),se=claim_text(Ze,"Sitemap"),Ze.forEach(detach),ne=claim_space($e),o=claim_element($e,"UL",{class:!0}),Be=children(o),N=claim_element(Be,"LI",{class:!0}),et=children(N),f=claim_element(et,"A",{href:!0,class:!0}),tt=children(f),K=claim_text(tt,"About Company"),tt.forEach(detach),et.forEach(detach),J=claim_space(Be),H=claim_element(Be,"LI",{class:!0}),nt=children(H),v=claim_element(nt,"A",{href:!0,class:!0}),st=children(v),Z=claim_text(st,"Projects"),st.forEach(detach),nt.forEach(detach),Q=claim_space(Be),$=claim_element(Be,"LI",{class:!0}),ot=children($),j=claim_element(ot,"A",{href:!0,class:!0}),Ge=children(j),Y=claim_text(Ge,"Blog"),Ge.forEach(detach),ot.forEach(detach),q=claim_space(Be),D=claim_element(Be,"LI",{class:!0}),at=children(D),g=claim_element(at,"A",{href:!0,class:!0}),rt=children(g),G=claim_text(rt,"Contact"),rt.forEach(detach),at.forEach(detach),Be.forEach(detach),$e.forEach(detach),Xe.forEach(detach),X=claim_space(Le),V=claim_element(Le,"DIV",{class:!0}),ct=children(V),u=claim_element(ct,"DIV",{class:!0}),We=children(u),P=claim_element(We,"H5",{class:!0}),dt=children(P),ee=claim_text(dt,"Social Media"),dt.forEach(detach),te=claim_space(We),s=claim_element(We,"UL",{class:!0}),Ie=children(s),T=claim_element(Ie,"LI",{class:!0}),ht=children(T),O=claim_element(ht,"A",{href:!0,class:!0}),mt=children(O),ie=claim_text(mt,"Medium"),mt.forEach(detach),ht.forEach(detach),ae=claim_space(Ie),k=claim_element(Ie,"LI",{class:!0}),ft=children(k),h=claim_element(ft,"A",{href:!0,class:!0}),pt=children(h),le=claim_text(pt,"Behance"),pt.forEach(detach),ft.forEach(detach),de=claim_space(Ie),C=claim_element(Ie,"LI",{class:!0}),gt=children(C),b=claim_element(gt,"A",{href:!0,class:!0}),vt=children(b),me=claim_text(vt,"Dribbble"),vt.forEach(detach),gt.forEach(detach),fe=claim_space(Ie),E=claim_element(Ie,"LI",{class:!0}),bt=children(E),y=claim_element(bt,"A",{href:!0,class:!0}),jt=children(y),ve=claim_text(jt,"Instagram"),jt.forEach(detach),bt.forEach(detach),Ie.forEach(detach),We.forEach(detach),ct.forEach(detach),be=claim_space(Le),M=claim_element(Le,"DIV",{class:!0}),yt=children(M),r=claim_element(yt,"DIV",{class:!0}),qe=children(r),A=claim_element(qe,"H5",{class:!0}),wt=children(A),we=claim_text(wt,"We help brands:"),wt.forEach(detach),Oe=claim_space(qe),a=claim_element(qe,"P",{class:!0}),Ve=children(a),Ce=claim_text(Ve,"develop design solutions"),Ee=claim_element(Ve,"BR",{}),ke=claim_text(Ve,"produce valuable cultural content"),Ae=claim_element(Ve,"BR",{}),Se=claim_text(Ve,"create fresh brand experience"),Ve.forEach(detach),qe.forEach(detach),yt.forEach(detach),Pe=claim_space(Le),z=claim_element(Le,"DIV",{class:!0}),xt=children(z),i=claim_element(xt,"A",{href:!0,class:!0}),Ye=children(i),p=claim_element(Ye,"IMG",{src:!0,alt:!0,class:!0}),Ne=claim_space(Ye),d=claim_element(Ye,"P",{class:!0}),Ue=children(d),Re=claim_text(Ue,`I want to 
            `),De=claim_element(Ue,"BR",{}),je=claim_text(Ue,`
            visit again`),Ue.forEach(detach),Ye.forEach(detach),xt.forEach(detach),Le.forEach(detach),Ot.forEach(detach),Et.forEach(detach),this.h()},h(){R.src!==(Be="assets/logo-footer.png")&&attr(R,"src",Be),attr(R,"alt","logo-footer"),attr(x,"href","."),attr(I,"class","site-footer-logo svelte-ga1ru3"),attr(B,"class","col-12"),attr(U,"class","site-footer-widget-title svelte-ga1ru3"),attr(_,"href","tel:617-800-9511"),attr(_,"class","svelte-ga1ru3"),attr(w,"href","mailto:plentico@jantcu.com"),attr(w,"class","svelte-ga1ru3"),attr(n,"class","site-footer-widget-description svelte-ga1ru3"),attr(c,"class","site-footer-widget"),attr(L,"class","col-lg-3 col-md-6"),attr(F,"class","site-footer-widget-title svelte-ga1ru3"),attr(f,"href","about"),attr(f,"class","svelte-ga1ru3"),attr(N,"class","svelte-ga1ru3"),attr(v,"href","portfolio"),attr(v,"class","svelte-ga1ru3"),attr(H,"class","svelte-ga1ru3"),attr(j,"href","blog"),attr(j,"class","svelte-ga1ru3"),attr($,"class","svelte-ga1ru3"),attr(g,"href","contact"),attr(g,"class","svelte-ga1ru3"),attr(D,"class","svelte-ga1ru3"),attr(o,"class","site-footer-widget-links svelte-ga1ru3"),attr(l,"class","site-footer-widget"),attr(S,"class","col-lg-2 col-md-6"),attr(P,"class","site-footer-widget-title svelte-ga1ru3"),attr(O,"href","#"),attr(O,"class","svelte-ga1ru3"),attr(T,"class","svelte-ga1ru3"),attr(h,"href","#"),attr(h,"class","svelte-ga1ru3"),attr(k,"class","svelte-ga1ru3"),attr(b,"href","#"),attr(b,"class","svelte-ga1ru3"),attr(C,"class","svelte-ga1ru3"),attr(y,"href","#"),attr(y,"class","svelte-ga1ru3"),attr(E,"class","svelte-ga1ru3"),attr(s,"class","site-footer-widget-links svelte-ga1ru3"),attr(u,"class","site-footer-widget"),attr(V,"class","col-lg-2 col-md-6"),attr(A,"class","site-footer-widget-title svelte-ga1ru3"),attr(a,"class","site-footer-widget-description svelte-ga1ru3"),attr(r,"class","site-footer-widget"),attr(M,"class","col-lg-3 col-md-6"),p.src!==(He="assets/to-top.svg")&&attr(p,"src",He),attr(p,"alt","back-to-top"),attr(p,"class","svelte-ga1ru3"),attr(d,"class","svelte-ga1ru3"),attr(i,"href","#top"),attr(i,"class","site-footer-widget-top svelte-ga1ru3"),attr(z,"class","col-lg-2 col-12"),attr(t,"class","row svelte-ga1ru3"),attr(W,"class","container"),attr(m,"class","site-footer svelte-ga1ru3")},m(He,Be){insert(He,m,Be),append(m,W),append(W,t),append(t,B),append(B,I),append(I,x),append(x,R),append(t,ze),append(t,L),append(L,c),append(c,U),append(U,Te),append(c,Fe),append(c,n),append(n,Me),append(n,xe),append(n,_e),append(n,ye),append(n,ge),append(n,_),append(_,pe),append(n,he),append(n,ue),append(n,ce),append(n,w),append(w,re),append(t,oe),append(t,S),append(S,l),append(l,F),append(F,se),append(l,ne),append(l,o),append(o,N),append(N,f),append(f,K),append(o,J),append(o,H),append(H,v),append(v,Z),append(o,Q),append(o,$),append($,j),append(j,Y),append(o,q),append(o,D),append(D,g),append(g,G),append(t,X),append(t,V),append(V,u),append(u,P),append(P,ee),append(u,te),append(u,s),append(s,T),append(T,O),append(O,ie),append(s,ae),append(s,k),append(k,h),append(h,le),append(s,de),append(s,C),append(C,b),append(b,me),append(s,fe),append(s,E),append(E,y),append(y,ve),append(t,be),append(t,M),append(M,r),append(r,A),append(A,we),append(r,Oe),append(r,a),append(a,Ce),append(a,Ee),append(a,ke),append(a,Ae),append(a,Se),append(t,Pe),append(t,z),append(z,i),append(i,p),append(i,Ne),append(i,d),append(d,Re),append(d,De),append(d,je),Le||(Ie=listen(i,"click",prevent_default(e[0])),Le=!0)},p:noop,i:noop,o:noop,d(e){e&&detach(m),Le=!1,Ie()}}}function instance(){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return[t]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export default Component