/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
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
	group_outros,
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

import Pager from '../components/pager.js';
import { sortByDate } from '../scripts/sort_by_date.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (25:8) {#each allProjects as project}
function create_each_block(ctx) {
	let div3;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let span;
	let t1_value = /*project*/ ctx[13].fields.category + "";
	let t1;
	let t2;
	let h3;
	let t3_value = /*project*/ ctx[13].fields.title + "";
	let t3;
	let t4;
	let a;
	let t5;
	let a_href_value;

	return {
		c() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			h3 = element("h3");
			t3 = text(t3_value);
			t4 = space();
			a = element("a");
			t5 = text("view project");
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, t3_value);
			h3_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			a = claim_element(div1_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, "view project");
			a_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "assets/" + /*project*/ ctx[13].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*project*/ ctx[13].fields.image.alt);
			attr(img, "class", "svelte-hf2rje");
			attr(div0, "class", "site-project-item-thumb svelte-hf2rje");
			attr(span, "class", "svelte-hf2rje");
			attr(h3, "class", "svelte-hf2rje");
			attr(a, "href", a_href_value = /*project*/ ctx[13].path);
			attr(a, "class", "read-more svelte-hf2rje");
			attr(div1, "class", "site-project-item-content svelte-hf2rje");
			attr(div2, "class", "site-project-item svelte-hf2rje");
			attr(div3, "class", "col-lg-6 col-md-10 mx-auto svelte-hf2rje");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, div0);
			append(div0, img);
			append(div2, t0);
			append(div2, div1);
			append(div1, span);
			append(span, t1);
			append(div1, t2);
			append(div1, h3);
			append(h3, t3);
			append(div1, t4);
			append(div1, a);
			append(a, t5);
		},
		p(ctx, dirty) {
			if (dirty & /*allProjects*/ 1 && img.src !== (img_src_value = "assets/" + /*project*/ ctx[13].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*allProjects*/ 1 && img_alt_value !== (img_alt_value = /*project*/ ctx[13].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*allProjects*/ 1 && t1_value !== (t1_value = /*project*/ ctx[13].fields.category + "")) set_data(t1, t1_value);
			if (dirty & /*allProjects*/ 1 && t3_value !== (t3_value = /*project*/ ctx[13].fields.title + "")) set_data(t3, t3_value);

			if (dirty & /*allProjects*/ 1 && a_href_value !== (a_href_value = /*project*/ ctx[13].path)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div3);
		}
	};
}

// (44:8) {:else}
function create_else_block(ctx) {
	let div;
	let a;
	let t_value = /*link*/ ctx[3].title + "";
	let t;
	let a_href_value;

	return {
		c() {
			div = element("div");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*link*/ ctx[3].url);
			attr(a, "class", "site-project-cta svelte-hf2rje");
			attr(div, "class", "col-12 text-center text-lg-left svelte-hf2rje");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, a);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*link*/ 8 && t_value !== (t_value = /*link*/ ctx[3].title + "")) set_data(t, t_value);

			if (dirty & /*link*/ 8 && a_href_value !== (a_href_value = /*link*/ ctx[3].url)) {
				attr(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (40:8) {#if full_grid}
function create_if_block(ctx) {
	let div;
	let pager;
	let current;

	pager = new Pager({
			props: {
				currentPage: /*currentProjectPage*/ ctx[4],
				totalPages: /*totalProjectPages*/ ctx[5]
			}
		});

	return {
		c() {
			div = element("div");
			create_component(pager.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(pager.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "col-12 svelte-hf2rje");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(pager, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const pager_changes = {};
			if (dirty & /*currentProjectPage*/ 16) pager_changes.currentPage = /*currentProjectPage*/ ctx[4];
			if (dirty & /*totalProjectPages*/ 32) pager_changes.totalPages = /*totalProjectPages*/ ctx[5];
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
			if (detaching) detach(div);
			destroy_component(pager);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let div3;
	let div2;
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let t4;
	let current_block_type_index;
	let if_block;
	let current;
	let each_value = /*allProjects*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*full_grid*/ ctx[6]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			section = element("section");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(/*title*/ ctx[1]);
			t1 = space();
			p = element("p");
			t2 = text(/*body*/ ctx[2]);
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			if_block.c();
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true, id: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, /*title*/ ctx[1]);
			h2_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*body*/ ctx[2]);
			p_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div2_nodes);
			}

			t4 = claim_space(div2_nodes);
			if_block.l(div2_nodes);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h2, "class", "svelte-hf2rje");
			attr(p, "class", "svelte-hf2rje");
			attr(div0, "class", "section-title svelte-hf2rje");
			attr(div1, "class", "col-12 svelte-hf2rje");
			attr(div2, "class", "row svelte-hf2rje");
			attr(div3, "class", "container svelte-hf2rje");
			attr(section, "class", "site-project svelte-hf2rje");
			attr(section, "id", "project");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div3);
			append(div3, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, h2);
			append(h2, t0);
			append(div0, t1);
			append(div0, p);
			append(p, t2);
			append(div2, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append(div2, t4);
			if_blocks[current_block_type_index].m(div2, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 2) set_data(t0, /*title*/ ctx[1]);
			if (!current || dirty & /*body*/ 4) set_data(t2, /*body*/ ctx[2]);

			if (dirty & /*allProjects*/ 1) {
				each_value = /*allProjects*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div2, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
			if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ body } = $$props,
		{ link } = $$props,
		{ allContent } = $$props,
		{ content } = $$props,
		{ currentProjectPage } = $$props,
		{ allProjects } = $$props,
		{ projectsPerPage } = $$props,
		{ totalProjects } = $$props,
		{ totalProjectPages } = $$props,
		{ projectRangeHigh } = $$props,
		{ projectRangeLow } = $$props;

	let full_grid = true;

	if (allProjects === undefined) {
		full_grid = false;
		allProjects = allContent.filter(content => content.type == "projects");
	}

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("body" in $$props) $$invalidate(2, body = $$props.body);
		if ("link" in $$props) $$invalidate(3, link = $$props.link);
		if ("allContent" in $$props) $$invalidate(7, allContent = $$props.allContent);
		if ("content" in $$props) $$invalidate(8, content = $$props.content);
		if ("currentProjectPage" in $$props) $$invalidate(4, currentProjectPage = $$props.currentProjectPage);
		if ("allProjects" in $$props) $$invalidate(0, allProjects = $$props.allProjects);
		if ("projectsPerPage" in $$props) $$invalidate(9, projectsPerPage = $$props.projectsPerPage);
		if ("totalProjects" in $$props) $$invalidate(10, totalProjects = $$props.totalProjects);
		if ("totalProjectPages" in $$props) $$invalidate(5, totalProjectPages = $$props.totalProjectPages);
		if ("projectRangeHigh" in $$props) $$invalidate(11, projectRangeHigh = $$props.projectRangeHigh);
		if ("projectRangeLow" in $$props) $$invalidate(12, projectRangeLow = $$props.projectRangeLow);
	};

	return [
		allProjects,
		title,
		body,
		link,
		currentProjectPage,
		totalProjectPages,
		full_grid,
		allContent,
		content,
		projectsPerPage,
		totalProjects,
		projectRangeHigh,
		projectRangeLow
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 1,
			body: 2,
			link: 3,
			allContent: 7,
			content: 8,
			currentProjectPage: 4,
			allProjects: 0,
			projectsPerPage: 9,
			totalProjects: 10,
			totalProjectPages: 5,
			projectRangeHigh: 11,
			projectRangeLow: 12
		});
	}
}

export default Component;