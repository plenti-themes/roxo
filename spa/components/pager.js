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
	empty,
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
	child_ctx[2] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (14:8) {:else}
function create_else_block_1(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("««");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("«");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "««");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "«");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", "blog");
			attr(a0, "class", "page-link svelte-1yv8z3q");
			attr(a0, "aria-label", "First");
			attr(li0, "class", "page-item disabled svelte-1yv8z3q");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "blog/" + (/*currentPage*/ ctx[0] - 1));
			attr(a1, "class", "page-link svelte-1yv8z3q");
			attr(a1, "aria-label", "Previous");
			attr(li1, "class", "page-item disabled svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a1_href_value !== (a1_href_value = "blog/" + (/*currentPage*/ ctx[0] - 1))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (7:8) {#if currentPage > 1}
function create_if_block_3(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("««");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("«");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "««");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "«");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", "blog/");
			attr(a0, "class", "page-link svelte-1yv8z3q");
			attr(a0, "aria-label", "First");
			attr(li0, "class", "page-item svelte-1yv8z3q");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "blog/" + (/*currentPage*/ ctx[0] - 1));
			attr(a1, "class", "page-link svelte-1yv8z3q");
			attr(a1, "aria-label", "Previous");
			attr(li1, "class", "page-item svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a1_href_value !== (a1_href_value = "blog/" + (/*currentPage*/ ctx[0] - 1))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (24:12) {#if currentPage - i > 0}
function create_if_block_2(ctx) {
	let li;
	let a;
	let t_value = /*currentPage*/ ctx[0] - /*i*/ ctx[4] + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "page-link svelte-1yv8z3q");
			attr(a, "href", a_href_value = "blog/" + (/*currentPage*/ ctx[0] - /*i*/ ctx[4]));
			attr(li, "class", "page-item svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && t_value !== (t_value = /*currentPage*/ ctx[0] - /*i*/ ctx[4] + "")) set_data(t, t_value);

			if (dirty & /*currentPage*/ 1 && a_href_value !== (a_href_value = "blog/" + (/*currentPage*/ ctx[0] - /*i*/ ctx[4]))) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (23:8) {#each [3,2,1] as i}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let if_block = /*currentPage*/ ctx[0] - /*i*/ ctx[4] > 0 && create_if_block_2(ctx);

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
			if (/*currentPage*/ ctx[0] - /*i*/ ctx[4] > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
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

// (30:12) {#if currentPage + (i+1) <= totalPages}
function create_if_block_1(ctx) {
	let li;
	let a;
	let t_value = /*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1) + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "page-link svelte-1yv8z3q");
			attr(a, "href", a_href_value = "blog/" + (/*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1)));
			attr(li, "class", "page-item svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && t_value !== (t_value = /*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1) + "")) set_data(t, t_value);

			if (dirty & /*currentPage*/ 1 && a_href_value !== (a_href_value = "blog/" + (/*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1)))) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (29:8) {#each Array(3) as _, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1) <= /*totalPages*/ ctx[1] && create_if_block_1(ctx);

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
			if (/*currentPage*/ ctx[0] + (/*i*/ ctx[4] + 1) <= /*totalPages*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
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

// (42:8) {:else}
function create_else_block(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let a0_href_value;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("»");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("»»");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "»");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "»»");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", a0_href_value = "blog/" + (/*currentPage*/ ctx[0] + 1));
			attr(a0, "class", "page-link svelte-1yv8z3q");
			attr(a0, "aria-label", "Next");
			attr(li0, "class", "page-item disabled svelte-1yv8z3q");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "blog/" + /*totalPages*/ ctx[1]);
			attr(a1, "class", "page-link svelte-1yv8z3q");
			attr(a1, "aria-label", "Last");
			attr(li1, "class", "page-item disabled svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a0_href_value !== (a0_href_value = "blog/" + (/*currentPage*/ ctx[0] + 1))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*totalPages*/ 2 && a1_href_value !== (a1_href_value = "blog/" + /*totalPages*/ ctx[1])) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (35:8) {#if currentPage < totalPages}
function create_if_block(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let a0_href_value;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("»");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("»»");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "»");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "»»");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", a0_href_value = "blog/" + (/*currentPage*/ ctx[0] + 1));
			attr(a0, "class", "page-link svelte-1yv8z3q");
			attr(a0, "aria-label", "Next");
			attr(li0, "class", "page-item svelte-1yv8z3q");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "blog/" + /*totalPages*/ ctx[1]);
			attr(a1, "class", "page-link svelte-1yv8z3q");
			attr(a1, "aria-label", "Last");
			attr(li1, "class", "page-item svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a0_href_value !== (a0_href_value = "blog/" + (/*currentPage*/ ctx[0] + 1))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*totalPages*/ 2 && a1_href_value !== (a1_href_value = "blog/" + /*totalPages*/ ctx[1])) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let ul;
	let t0;
	let t1;
	let li;
	let a;
	let t2;
	let t3;
	let t4;

	function select_block_type(ctx, dirty) {
		if (/*currentPage*/ ctx[0] > 1) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let each_value_1 = [3, 2, 1];
	let each_blocks_1 = [];

	for (let i = 0; i < 3; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = Array(3);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	function select_block_type_1(ctx, dirty) {
		if (/*currentPage*/ ctx[0] < /*totalPages*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_1(ctx, -1);
	let if_block1 = current_block_type_1(ctx);

	return {
		c() {
			div = element("div");
			ul = element("ul");
			if_block0.c();
			t0 = space();

			for (let i = 0; i < 3; i += 1) {
				each_blocks_1[i].c();
			}

			t1 = space();
			li = element("li");
			a = element("a");
			t2 = text(/*currentPage*/ ctx[0]);
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			if_block1.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if_block0.l(ul_nodes);
			t0 = claim_space(ul_nodes);

			for (let i = 0; i < 3; i += 1) {
				each_blocks_1[i].l(ul_nodes);
			}

			t1 = claim_space(ul_nodes);
			li = claim_element(ul_nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, /*currentPage*/ ctx[0]);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			t3 = claim_space(ul_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			t4 = claim_space(ul_nodes);
			if_block1.l(ul_nodes);
			ul_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "page-link svelte-1yv8z3q");
			attr(a, "href", "/blog/");
			attr(li, "class", "page-item active svelte-1yv8z3q");
			attr(ul, "class", "pagination svelte-1yv8z3q");
			attr(div, "class", "site-blog-pagination svelte-1yv8z3q");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, ul);
			if_block0.m(ul, null);
			append(ul, t0);

			for (let i = 0; i < 3; i += 1) {
				each_blocks_1[i].m(ul, null);
			}

			append(ul, t1);
			append(ul, li);
			append(li, a);
			append(a, t2);
			append(ul, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append(ul, t4);
			if_block1.m(ul, null);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(ul, t0);
				}
			}

			if (dirty & /*currentPage*/ 1) {
				each_value_1 = [3, 2, 1];
				let i;

				for (i = 0; i < 3; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(ul, t1);
					}
				}

				for (; i < 3; i += 1) {
					each_blocks_1[i].d(1);
				}
			}

			if (dirty & /*currentPage*/ 1) set_data(t2, /*currentPage*/ ctx[0]);

			if (dirty & /*currentPage, totalPages*/ 3) {
				each_value = Array(3);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx, dirty)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(ul, null);
				}
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			if_block0.d();
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { currentPage } = $$props, { totalPages } = $$props;

	$$self.$$set = $$props => {
		if ("currentPage" in $$props) $$invalidate(0, currentPage = $$props.currentPage);
		if ("totalPages" in $$props) $$invalidate(1, totalPages = $$props.totalPages);
	};

	return [currentPage, totalPages];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { currentPage: 0, totalPages: 1 });
	}
}

export default Component;