/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
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

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (11:12) {#each body as p}
function create_each_block(ctx) {
	let p;
	let t_value = /*p*/ ctx[4] + "";
	let t;

	return {
		c() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(p, "class", "svelte-1penw77");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t);
		},
		p(ctx, dirty) {
			if (dirty & /*body*/ 2 && t_value !== (t_value = /*p*/ ctx[4] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let div6;
	let div5;
	let div4;
	let div3;
	let h1;
	let t0;
	let t1;
	let div0;
	let t2;
	let div1;
	let img0;
	let img0_src_value;
	let img0_alt_value;
	let t3;
	let div2;
	let a;
	let span1;
	let span0;
	let t4;
	let t5;
	let img1;
	let img1_src_value;
	let each_value = /*body*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			section = element("section");
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			div1 = element("div");
			img0 = element("img");
			t3 = space();
			div2 = element("div");
			a = element("a");
			span1 = element("span");
			span0 = element("span");
			t4 = text("More Projects");
			t5 = space();
			img1 = element("img");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div6 = claim_element(section_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(div3_nodes);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			t2 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true });
			div1_nodes.forEach(detach);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a = claim_element(div2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			span1 = claim_element(a_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			span0 = claim_element(span1_nodes, "SPAN", { "data-text": true, class: true });
			var span0_nodes = children(span0);
			t4 = claim_text(span0_nodes, "More Projects");
			span0_nodes.forEach(detach);
			span1_nodes.forEach(detach);
			t5 = claim_space(a_nodes);
			img1 = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
			a_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "svelte-1penw77");
			attr(div0, "class", "site-project-single-description");
			if (img0.src !== (img0_src_value = "assets/" + /*image*/ ctx[2].src)) attr(img0, "src", img0_src_value);
			attr(img0, "alt", img0_alt_value = /*image*/ ctx[2].alt);
			attr(div1, "class", "site-project-single-image");
			attr(span0, "data-text", "Here We Go");
			attr(span0, "class", "svelte-1penw77");
			attr(span1, "class", "link-area svelte-1penw77");
			if (img1.src !== (img1_src_value = "assets/to-top.svg")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", "next project");
			attr(img1, "class", "svelte-1penw77");
			attr(a, "href", "portfolio");
			attr(a, "class", "svelte-1penw77");
			attr(div2, "class", "site-project-single-action svelte-1penw77");
			attr(div3, "class", "site-project-single");
			attr(div4, "class", "col-lg-8 mx-auto");
			attr(div5, "class", "row");
			attr(div6, "class", "container");
			attr(section, "class", "site-project-single-section svelte-1penw77");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div6);
			append(div6, div5);
			append(div5, div4);
			append(div4, div3);
			append(div3, h1);
			append(h1, t0);
			append(div3, t1);
			append(div3, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append(div3, t2);
			append(div3, div1);
			append(div1, img0);
			append(div3, t3);
			append(div3, div2);
			append(div2, a);
			append(a, span1);
			append(span1, span0);
			append(span0, t4);
			append(a, t5);
			append(a, img1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*body*/ 2) {
				each_value = /*body*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*image*/ 4 && img0.src !== (img0_src_value = "assets/" + /*image*/ ctx[2].src)) {
				attr(img0, "src", img0_src_value);
			}

			if (dirty & /*image*/ 4 && img0_alt_value !== (img0_alt_value = /*image*/ ctx[2].alt)) {
				attr(img0, "alt", img0_alt_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ body } = $$props,
		{ image } = $$props,
		{ category } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("body" in $$props) $$invalidate(1, body = $$props.body);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("category" in $$props) $$invalidate(3, category = $$props.category);
	};

	return [title, body, image, category];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, body: 1, image: 2, category: 3 });
	}
}

export default Component;