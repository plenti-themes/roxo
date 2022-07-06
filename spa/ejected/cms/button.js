import{SvelteComponent,attr,children,claim_element,claim_text,detach,element,init,insert,listen,noop,prevent_default,safe_not_equal,set_data,text}from"../../web_modules/svelte/internal/index.mjs";import{publish}from"./publish.js";function create_else_block(e){let t;return{c(){t=text(e[0])},l(n){t=claim_text(n,e[0])},m(e,n){insert(e,t,n)},p(e,n){n&1&&set_data(t,e[0])},d(e){e&&detach(t)}}}function create_if_block_2(){let t;return{c(){t=text("Changes committed.")},l(e){t=claim_text(e,"Changes committed.")},m(e,n){insert(e,t,n)},p:noop,d(e){e&&detach(t)}}}function create_if_block_1(){let t;return{c(){t=text("Could not commit the changes.")},l(e){t=claim_text(e,"Could not commit the changes.")},m(e,n){insert(e,t,n)},p:noop,d(e){e&&detach(t)}}}function create_if_block(){let t;return{c(){t=text("Sending...")},l(e){t=claim_text(e,"Sending...")},m(e,n){insert(e,t,n)},p:noop,d(e){e&&detach(t)}}}function create_fragment(e){let t,o,i;function a(e){return e[1]=="sending"?create_if_block:e[1]=="failed"?create_if_block_1:e[1]=="sent"?create_if_block_2:create_else_block}let s=a(e,-1),n=s(e);return{c(){t=element("button"),n.c(),this.h()},l(e){t=claim_element(e,"BUTTON",{type:!0});var s=children(t);n.l(s),s.forEach(detach),this.h()},h(){attr(t,"type","submit"),t.disabled=e[1]},m(s,a){insert(s,t,a),n.m(t,null),o||(i=listen(t,"click",prevent_default(e[2])),o=!0)},p(e,[o]){s===(s=a(e,o))&&n?n.p(e,o):(n.d(1),n=s(e),n&&(n.c(),n.m(t,null))),o&2&&(t.disabled=e[1])},i:noop,o:noop,d(e){e&&detach(t),n.d(),o=!1,i()}}}function instance(e,t,n){let{commitList:o}=t,{buttonText:r}=t,{action:i}=t,{encoding:a}=t,s;const l=async()=>{n(1,s="sending");try{await publish(o,i,a),n(1,s="sent"),c()}catch(e){throw n(1,s="failed"),c(),e}},c=()=>{setTimeout(()=>{n(1,s=""),n(3,o=[])},700)};return e.$$set=e=>{"commitList"in e&&n(3,o=e.commitList),"buttonText"in e&&n(0,r=e.buttonText),"action"in e&&n(4,i=e.action),"encoding"in e&&n(5,a=e.encoding)},[r,s,l,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{commitList:3,buttonText:0,action:4,encoding:5})}}export default Component