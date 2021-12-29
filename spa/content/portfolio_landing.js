/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	assign,
	check_outros,
	claim_component,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	empty,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i].name;
	child_ctx[11] = list[i].fields;
	return child_ctx;
}

// (13:0) {#if components}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*components*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*allLayouts, components, allContent, content, currentProjectPage, allProjects, totalProjectPages, projectRangeHigh, projectRangeLow*/ 511) {
				each_value = /*components*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (14:0) {#each components as {name, fields}}
function create_each_block(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		/*fields*/ ctx[11],
		{ allContent: /*allContent*/ ctx[2] },
		{ content: /*content*/ ctx[3] },
		{
			currentProjectPage: /*currentProjectPage*/ ctx[4]
		},
		{ allProjects: /*allProjects*/ ctx[7] },
		{
			totalProjectPages: /*totalProjectPages*/ ctx[8]
		},
		{
			projectRangeHigh: /*projectRangeHigh*/ ctx[5]
		},
		{
			projectRangeLow: /*projectRangeLow*/ ctx[6]
		}
	];

	var switch_value = /*allLayouts*/ ctx[1]["layouts_components_" + /*name*/ ctx[10] + "_svelte"];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = (dirty & /*components, allContent, content, currentProjectPage, allProjects, totalProjectPages, projectRangeHigh, projectRangeLow*/ 509)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*components*/ 1 && get_spread_object(/*fields*/ ctx[11]),
					dirty & /*allContent*/ 4 && { allContent: /*allContent*/ ctx[2] },
					dirty & /*content*/ 8 && { content: /*content*/ ctx[3] },
					dirty & /*currentProjectPage*/ 16 && {
						currentProjectPage: /*currentProjectPage*/ ctx[4]
					},
					dirty & /*allProjects*/ 128 && { allProjects: /*allProjects*/ ctx[7] },
					dirty & /*totalProjectPages*/ 256 && {
						totalProjectPages: /*totalProjectPages*/ ctx[8]
					},
					dirty & /*projectRangeHigh*/ 32 && {
						projectRangeHigh: /*projectRangeHigh*/ ctx[5]
					},
					dirty & /*projectRangeLow*/ 64 && {
						projectRangeLow: /*projectRangeLow*/ ctx[6]
					}
				])
			: {};

			if (switch_value !== (switch_value = /*allLayouts*/ ctx[1]["layouts_components_" + /*name*/ ctx[10] + "_svelte"])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*components*/ ctx[0] && create_if_block(ctx);

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
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*components*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*components*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

let projectsPerPage = 4;

function instance($$self, $$props, $$invalidate) {
	let currentProjectPage;
	let projectRangeHigh;
	let projectRangeLow;

	let { components } = $$props,
		{ allLayouts } = $$props,
		{ allContent } = $$props,
		{ content } = $$props;

	let allProjects = allContent.filter(content => content.type == "projects");
	let totalProjects = allProjects.length;
	let totalProjectPages = Math.ceil(totalProjects / projectsPerPage);

	$$self.$$set = $$props => {
		if ("components" in $$props) $$invalidate(0, components = $$props.components);
		if ("allLayouts" in $$props) $$invalidate(1, allLayouts = $$props.allLayouts);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
		if ("content" in $$props) $$invalidate(3, content = $$props.content);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 8) {
			$: $$invalidate(4, currentProjectPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentProjectPage*/ 16) {
			$: $$invalidate(5, projectRangeHigh = currentProjectPage * projectsPerPage);
		}

		if ($$self.$$.dirty & /*projectRangeHigh*/ 32) {
			$: $$invalidate(6, projectRangeLow = projectRangeHigh - projectsPerPage);
		}
	};

	return [
		components,
		allLayouts,
		allContent,
		content,
		currentProjectPage,
		projectRangeHigh,
		projectRangeLow,
		allProjects,
		totalProjectPages
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			components: 0,
			allLayouts: 1,
			allContent: 2,
			content: 3
		});
	}
}

export default Component;