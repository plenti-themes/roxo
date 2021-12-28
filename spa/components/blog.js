/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Pager from './pager.js';
import { sortByDate } from '../scripts/sort_by_date.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	child_ctx[12] = i;
	return child_ctx;
}

// (34:10) {#if i >= postRangeLow && i < postRangeHigh}
function create_if_block(ctx) {
	let div2;
	let article;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let span;
	let t1_value = /*post*/ ctx[10].fields.date + "";
	let t1;
	let t2;
	let h3;
	let a0;
	let t3_value = /*post*/ ctx[10].fields.title + "";
	let t3;
	let a0_href_value;
	let t4;
	let p;
	let t5_value = /*post*/ ctx[10].fields.body[0] + "";
	let t5;
	let t6;
	let t7;
	let a1;
	let t8;
	let a1_href_value;

	return {
		c() {
			div2 = element("div");
			article = element("article");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			h3 = element("h3");
			a0 = element("a");
			t3 = text(t3_value);
			t4 = space();
			p = element("p");
			t5 = text(t5_value);
			t6 = text("..");
			t7 = space();
			a1 = element("a");
			t8 = text("read more");
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			article = claim_element(div2_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			div0 = claim_element(article_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach);
			t0 = claim_space(article_nodes);
			div1 = claim_element(article_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			a0 = claim_element(h3_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, t3_value);
			a0_nodes.forEach(detach);
			h3_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, t5_value);
			t6 = claim_text(p_nodes, "..");
			p_nodes.forEach(detach);
			t7 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "read more");
			a1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			article_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "assets/" + /*post*/ ctx[10].fields.image)) attr(img, "src", img_src_value);
			attr(img, "alt", "post-thumb");
			attr(img, "class", "svelte-1jffqyb");
			attr(div0, "class", "site-blog-post-thumb svelte-1jffqyb");
			attr(span, "class", "svelte-1jffqyb");
			attr(a0, "href", a0_href_value = /*post*/ ctx[10].path);
			attr(a0, "class", "svelte-1jffqyb");
			attr(h3, "class", "svelte-1jffqyb");
			attr(p, "class", "svelte-1jffqyb");
			attr(a1, "href", a1_href_value = /*post*/ ctx[10].path);
			attr(a1, "class", "read-more svelte-1jffqyb");
			attr(div1, "class", "site-blog-post-content svelte-1jffqyb");
			attr(article, "class", "site-blog-post svelte-1jffqyb");
			attr(div2, "class", "col-lg-6 svelte-1jffqyb");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, article);
			append(article, div0);
			append(div0, img);
			append(article, t0);
			append(article, div1);
			append(div1, span);
			append(span, t1);
			append(div1, t2);
			append(div1, h3);
			append(h3, a0);
			append(a0, t3);
			append(div1, t4);
			append(div1, p);
			append(p, t5);
			append(p, t6);
			append(div1, t7);
			append(div1, a1);
			append(a1, t8);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

// (33:8) {#each sortByDate(allPosts) as post, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[12] >= /*postRangeLow*/ ctx[4] && /*i*/ ctx[12] < /*postRangeHigh*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*i*/ ctx[12] >= /*postRangeLow*/ ctx[4] && /*i*/ ctx[12] < /*postRangeHigh*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let main;
	let section0;
	let div2;
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let section1;
	let div5;
	let div4;
	let t4;
	let div3;
	let pager;
	let current;
	let each_value = sortByDate(/*allPosts*/ ctx[5]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	pager = new Pager({
			props: {
				currentPage: /*currentPage*/ ctx[2],
				totalPages: /*totalPages*/ ctx[6]
			}
		});

	return {
		c() {
			main = element("main");
			section0 = element("section");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text(/*desc*/ ctx[1]);
			t3 = space();
			section1 = element("section");
			div5 = element("div");
			div4 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			div3 = element("div");
			create_component(pager.$$.fragment);
			this.h();
		},
		l(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			section0 = claim_element(main_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div2 = claim_element(section0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*desc*/ ctx[1]);
			p_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t3 = claim_space(main_nodes);
			section1 = claim_element(main_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div5 = claim_element(section1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div4_nodes);
			}

			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(pager.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			main_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "svelte-1jffqyb");
			attr(p, "class", "svelte-1jffqyb");
			attr(div0, "class", "col-lg-8 text-center svelte-1jffqyb");
			attr(div1, "class", "row justify-content-center svelte-1jffqyb");
			attr(div2, "class", "container svelte-1jffqyb");
			attr(section0, "class", "site-blog-header svelte-1jffqyb");
			attr(div3, "class", "col-12 svelte-1jffqyb");
			attr(div4, "class", "row svelte-1jffqyb");
			attr(div5, "class", "container svelte-1jffqyb");
			attr(section1, "class", "site-blog svelte-1jffqyb");
			attr(main, "class", "svelte-1jffqyb");
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, section0);
			append(section0, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, h1);
			append(h1, t0);
			append(div0, t1);
			append(div0, p);
			append(p, t2);
			append(main, t3);
			append(main, section1);
			append(section1, div5);
			append(div5, div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div4, null);
			}

			append(div4, t4);
			append(div4, div3);
			mount_component(pager, div3, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);
			if (!current || dirty & /*desc*/ 2) set_data(t2, /*desc*/ ctx[1]);

			if (dirty & /*sortByDate, allPosts, postRangeLow, postRangeHigh*/ 56) {
				each_value = sortByDate(/*allPosts*/ ctx[5]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div4, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const pager_changes = {};
			if (dirty & /*currentPage*/ 4) pager_changes.currentPage = /*currentPage*/ ctx[2];
			pager.$set(pager_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pager.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pager.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(main);
			destroy_each(each_blocks, detaching);
			destroy_component(pager);
		}
	};
}

let postsPerPage = 2;

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let postRangeHigh;
	let postRangeLow;

	let { title } = $$props,
		{ desc } = $$props,
		{ allContent } = $$props,
		{ content } = $$props;

	let allPosts = allContent.filter(content => content.type == "blog_posts");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("desc" in $$props) $$invalidate(1, desc = $$props.desc);
		if ("allContent" in $$props) $$invalidate(7, allContent = $$props.allContent);
		if ("content" in $$props) $$invalidate(8, content = $$props.content);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 256) {
			$: $$invalidate(2, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 4) {
			$: $$invalidate(3, postRangeHigh = currentPage * postsPerPage);
		}

		if ($$self.$$.dirty & /*postRangeHigh*/ 8) {
			$: $$invalidate(4, postRangeLow = postRangeHigh - postsPerPage);
		}
	};

	return [
		title,
		desc,
		currentPage,
		postRangeHigh,
		postRangeLow,
		allPosts,
		totalPages,
		allContent,
		content
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			desc: 1,
			allContent: 7,
			content: 8
		});
	}
}

export default Component;