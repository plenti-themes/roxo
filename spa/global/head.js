/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let head;
	let meta0;
	let t0;
	let meta1;
	let t1;
	let meta2;
	let t2;
	let title_1;
	let t3;
	let t4;
	let link0;
	let t5;
	let script0;
	let script0_src_value;
	let t6;
	let script1;
	let script1_src_value;
	let t7;
	let link1;
	let t8;
	let link2;
	let t9;
	let link3;
	let t10;
	let link4;
	let t11;
	let link5;
	let t12;
	let link6;

	return {
		c() {
			head = element("head");
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			meta2 = element("meta");
			t2 = space();
			title_1 = element("title");
			t3 = text(/*title*/ ctx[0]);
			t4 = space();
			link0 = element("link");
			t5 = space();
			script0 = element("script");
			t6 = space();
			script1 = element("script");
			t7 = space();
			link1 = element("link");
			t8 = space();
			link2 = element("link");
			t9 = space();
			link3 = element("link");
			t10 = space();
			link4 = element("link");
			t11 = space();
			link5 = element("link");
			t12 = space();
			link6 = element("link");
			this.h();
		},
		l(nodes) {
			head = claim_element(nodes, "HEAD", {});
			var head_nodes = children(head);
			meta0 = claim_element(head_nodes, "META", { charset: true });
			t0 = claim_space(head_nodes);
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			t1 = claim_space(head_nodes);
			meta2 = claim_element(head_nodes, "META", { name: true, content: true });
			t2 = claim_space(head_nodes);
			title_1 = claim_element(head_nodes, "TITLE", {});
			var title_1_nodes = children(title_1);
			t3 = claim_text(title_1_nodes, /*title*/ ctx[0]);
			title_1_nodes.forEach(detach);
			t4 = claim_space(head_nodes);

			link0 = claim_element(head_nodes, "LINK", {
				rel: true,
				href: true,
				integrity: true,
				crossorigin: true
			});

			t5 = claim_space(head_nodes);
			script0 = claim_element(head_nodes, "SCRIPT", { type: true, src: true });
			var script0_nodes = children(script0);
			script0_nodes.forEach(detach);
			t6 = claim_space(head_nodes);
			script1 = claim_element(head_nodes, "SCRIPT", { src: true, crossorigin: true });
			var script1_nodes = children(script1);
			script1_nodes.forEach(detach);
			t7 = claim_space(head_nodes);
			link1 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			t8 = claim_space(head_nodes);
			link2 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t9 = claim_space(head_nodes);
			link3 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t10 = claim_space(head_nodes);
			link4 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t11 = claim_space(head_nodes);
			link5 = claim_element(head_nodes, "LINK", { rel: true, href: true, crossorigin: true });
			t12 = claim_space(head_nodes);
			link6 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			head_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta0, "charset", "utf-8");
			attr(meta1, "name", "viewport");
			attr(meta1, "content", "width=device-width,initial-scale=1");
			attr(meta2, "name", "generator");
			attr(meta2, "content", "Plenti");
			attr(link0, "rel", "stylesheet");
			attr(link0, "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
			attr(link0, "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T");
			attr(link0, "crossorigin", "anonymous");
			attr(script0, "type", "module");
			if (script0.src !== (script0_src_value = "spa/ejected/main.js")) attr(script0, "src", script0_src_value);
			if (script1.src !== (script1_src_value = "https://kit.fontawesome.com/5e65b06481.js")) attr(script1, "src", script1_src_value);
			attr(script1, "crossorigin", "anonymous");
			attr(link1, "rel", "icon");
			attr(link1, "type", "image/svg+xml");
			attr(link1, "href", "/assets/logo.svg");
			attr(link2, "rel", "stylesheet");
			attr(link2, "href", "spa/bundle.css");
			attr(link3, "rel", "stylesheet");
			attr(link3, "href", "assets/global.css");
			attr(link4, "rel", "preconnect");
			attr(link4, "href", "https://fonts.googleapis.com");
			attr(link5, "rel", "preconnect");
			attr(link5, "href", "https://fonts.gstatic.com");
			attr(link5, "crossorigin", "");
			attr(link6, "href", "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&display=swap");
			attr(link6, "rel", "stylesheet");
		},
		m(target, anchor) {
			insert(target, head, anchor);
			append(head, meta0);
			append(head, t0);
			append(head, meta1);
			append(head, t1);
			append(head, meta2);
			append(head, t2);
			append(head, title_1);
			append(title_1, t3);
			append(head, t4);
			append(head, link0);
			append(head, t5);
			append(head, script0);
			append(head, t6);
			append(head, script1);
			append(head, t7);
			append(head, link1);
			append(head, t8);
			append(head, link2);
			append(head, t9);
			append(head, link3);
			append(head, t10);
			append(head, link4);
			append(head, t11);
			append(head, link5);
			append(head, t12);
			append(head, link6);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t3, /*title*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(head);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	return [title];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
	}
}

export default Component;