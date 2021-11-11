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
	set_style,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div3;
	let div2;
	let div1;
	let div0;
	let h6;
	let t0;
	let t1;
	let h1;
	let t2;
	let t3;
	let ul;
	let li0;
	let a0;
	let span1;
	let span0;
	let t4_value = /*link1*/ ctx[3].title + "";
	let t4;
	let span0_data_text_value;
	let a0_href_value;
	let t5;
	let li1;
	let a1;
	let span3;
	let span2;
	let t6_value = /*link2*/ ctx[4].title + "";
	let t6;
	let span2_data_text_value;
	let a1_href_value;
	let t7;
	let a2;
	let img;
	let img_src_value;

	return {
		c() {
			section = element("section");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h6 = element("h6");
			t0 = text(/*body*/ ctx[1]);
			t1 = space();
			h1 = element("h1");
			t2 = text(/*title*/ ctx[2]);
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			span1 = element("span");
			span0 = element("span");
			t4 = text(t4_value);
			t5 = space();
			li1 = element("li");
			a1 = element("a");
			span3 = element("span");
			span2 = element("span");
			t6 = text(t6_value);
			t7 = space();
			a2 = element("a");
			img = element("img");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true, style: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h6 = claim_element(div0_nodes, "H6", { class: true });
			var h6_nodes = children(h6);
			t0 = claim_text(h6_nodes, /*body*/ ctx[1]);
			h6_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, /*title*/ ctx[2]);
			h1_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			span1 = claim_element(a0_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			span0 = claim_element(span1_nodes, "SPAN", { "data-text": true, class: true });
			var span0_nodes = children(span0);
			t4 = claim_text(span0_nodes, t4_value);
			span0_nodes.forEach(detach);
			span1_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t5 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			span3 = claim_element(a1_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			span2 = claim_element(span3_nodes, "SPAN", { "data-text": true, class: true });
			var span2_nodes = children(span2);
			t6 = claim_text(span2_nodes, t6_value);
			span2_nodes.forEach(detach);
			span3_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t7 = claim_space(section_nodes);
			a2 = claim_element(section_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			img = claim_element(a2_nodes, "IMG", { src: true, alt: true, class: true });
			a2_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h6, "class", "svelte-tnaakf");
			attr(h1, "class", "svelte-tnaakf");
			attr(span0, "data-text", span0_data_text_value = /*link1*/ ctx[3].title);
			attr(span0, "class", "svelte-tnaakf");
			attr(span1, "class", "btn-area svelte-tnaakf");
			attr(a0, "href", a0_href_value = /*link1*/ ctx[3].url);
			attr(a0, "class", "btn btn-secondary svelte-tnaakf");
			attr(li0, "class", "svelte-tnaakf");
			attr(span2, "data-text", span2_data_text_value = /*link2*/ ctx[4].title);
			attr(span2, "class", "svelte-tnaakf");
			attr(span3, "class", "btn-area svelte-tnaakf");
			attr(a1, "href", a1_href_value = /*link2*/ ctx[4].link);
			attr(a1, "class", "btn btn-primary svelte-tnaakf");
			attr(li1, "class", "svelte-tnaakf");
			attr(ul, "class", "site-hero-content-buttons svelte-tnaakf");
			attr(div0, "class", "site-hero-content text-center svelte-tnaakf");
			attr(div1, "class", "col-lg-10 mx-auto");
			attr(div2, "class", "row");
			attr(div3, "class", "container");
			if (img.src !== (img_src_value = "assets" + /*image*/ ctx[5])) attr(img, "src", img_src_value);
			attr(img, "alt", "arrow-down");
			attr(img, "class", "svelte-tnaakf");
			attr(a2, "href", "#counter");
			attr(a2, "class", "site-hero-scroll scroll-to svelte-tnaakf");
			attr(section, "class", "site-hero svelte-tnaakf");
			set_style(section, "background-image", "url('assets/" + /*background*/ ctx[0] + "')");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div3);
			append(div3, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, h6);
			append(h6, t0);
			append(div0, t1);
			append(div0, h1);
			append(h1, t2);
			append(div0, t3);
			append(div0, ul);
			append(ul, li0);
			append(li0, a0);
			append(a0, span1);
			append(span1, span0);
			append(span0, t4);
			append(ul, t5);
			append(ul, li1);
			append(li1, a1);
			append(a1, span3);
			append(span3, span2);
			append(span2, t6);
			append(section, t7);
			append(section, a2);
			append(a2, img);
		},
		p(ctx, [dirty]) {
			if (dirty & /*body*/ 2) set_data(t0, /*body*/ ctx[1]);
			if (dirty & /*title*/ 4) set_data(t2, /*title*/ ctx[2]);
			if (dirty & /*link1*/ 8 && t4_value !== (t4_value = /*link1*/ ctx[3].title + "")) set_data(t4, t4_value);

			if (dirty & /*link1*/ 8 && span0_data_text_value !== (span0_data_text_value = /*link1*/ ctx[3].title)) {
				attr(span0, "data-text", span0_data_text_value);
			}

			if (dirty & /*link1*/ 8 && a0_href_value !== (a0_href_value = /*link1*/ ctx[3].url)) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*link2*/ 16 && t6_value !== (t6_value = /*link2*/ ctx[4].title + "")) set_data(t6, t6_value);

			if (dirty & /*link2*/ 16 && span2_data_text_value !== (span2_data_text_value = /*link2*/ ctx[4].title)) {
				attr(span2, "data-text", span2_data_text_value);
			}

			if (dirty & /*link2*/ 16 && a1_href_value !== (a1_href_value = /*link2*/ ctx[4].link)) {
				attr(a1, "href", a1_href_value);
			}

			if (dirty & /*image*/ 32 && img.src !== (img_src_value = "assets" + /*image*/ ctx[5])) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*background*/ 1) {
				set_style(section, "background-image", "url('assets/" + /*background*/ ctx[0] + "')");
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { background } = $$props,
		{ body } = $$props,
		{ title } = $$props,
		{ link1 } = $$props,
		{ link2 } = $$props,
		{ image } = $$props;

	$$self.$$set = $$props => {
		if ("background" in $$props) $$invalidate(0, background = $$props.background);
		if ("body" in $$props) $$invalidate(1, body = $$props.body);
		if ("title" in $$props) $$invalidate(2, title = $$props.title);
		if ("link1" in $$props) $$invalidate(3, link1 = $$props.link1);
		if ("link2" in $$props) $$invalidate(4, link2 = $$props.link2);
		if ("image" in $$props) $$invalidate(5, image = $$props.image);
	};

	return [background, body, title, link1, link2, image];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			background: 0,
			body: 1,
			title: 2,
			link1: 3,
			link2: 4,
			image: 5
		});
	}
}

export default Component;