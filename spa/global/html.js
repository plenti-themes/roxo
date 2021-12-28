/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Head from './head.js';
import Nav from './nav.js';
import Footer from './footer.js';

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let body;
	let nav;
	let t1;
	let switch_instance;
	let t2;
	let footer;
	let current;

	head = new Head({
			props: {
				title: /*content*/ ctx[0].filename,
				env: /*env*/ ctx[4]
			}
		});

	nav = new Nav({});

	const switch_instance_spread_levels = [
		/*content*/ ctx[0].fields,
		{ allLayouts: /*allLayouts*/ ctx[3] },
		{ allContent: /*allContent*/ ctx[1] },
		{ content: /*content*/ ctx[0] }
	];

	var switch_value = /*layout*/ ctx[2];

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

	footer = new Footer({});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			body = element("body");
			create_component(nav.$$.fragment);
			t1 = space();
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", {});
			var body_nodes = children(body);
			claim_component(nav.$$.fragment, body_nodes);
			t1 = claim_space(body_nodes);
			if (switch_instance) claim_component(switch_instance.$$.fragment, body_nodes);
			t2 = claim_space(body_nodes);
			claim_component(footer.$$.fragment, body_nodes);
			body_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(html, "lang", "en");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, body);
			mount_component(nav, body, null);
			append(body, t1);

			if (switch_instance) {
				mount_component(switch_instance, body, null);
			}

			append(body, t2);
			mount_component(footer, body, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*content*/ 1) head_changes.title = /*content*/ ctx[0].filename;
			if (dirty & /*env*/ 16) head_changes.env = /*env*/ ctx[4];
			head.$set(head_changes);

			const switch_instance_changes = (dirty & /*content, allLayouts, allContent*/ 11)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 1 && get_spread_object(/*content*/ ctx[0].fields),
					dirty & /*allLayouts*/ 8 && { allLayouts: /*allLayouts*/ ctx[3] },
					dirty & /*allContent*/ 2 && { allContent: /*allContent*/ ctx[1] },
					dirty & /*content*/ 1 && { content: /*content*/ ctx[0] }
				])
			: {};

			if (switch_value !== (switch_value = /*layout*/ ctx[2])) {
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
					mount_component(switch_instance, body, t2);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(nav.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(nav.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(nav);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props,
		{ allContent } = $$props,
		{ layout } = $$props,
		{ allLayouts } = $$props,
		{ env } = $$props;

	$$self.$$set = $$props => {
		if ("content" in $$props) $$invalidate(0, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(1, allContent = $$props.allContent);
		if ("layout" in $$props) $$invalidate(2, layout = $$props.layout);
		if ("allLayouts" in $$props) $$invalidate(3, allLayouts = $$props.allLayouts);
		if ("env" in $$props) $$invalidate(4, env = $$props.env);
	};

	return [content, allContent, layout, allLayouts, env];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			content: 0,
			allContent: 1,
			layout: 2,
			allLayouts: 3,
			env: 4
		});
	}
}

export default Component;