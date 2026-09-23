// @ts-check
import Slugger from 'github-slugger';
import { defineHastPlugin } from 'satteri';

export default () => {
  const slugger = new Slugger();
  return defineHastPlugin({
    name: 'loka-heading-anchors',
    element: {
      filter: ['h2', 'h3'],
      visit(node, ctx) {
        const text = ctx.textContent(node);
        const existing = node.properties?.id;
        const id = typeof existing === 'string' && existing ? existing : slugger.slug(text);
        if (id !== existing) ctx.setProperty(node, 'id', id);
        ctx.appendChild(node, {
          type: 'element',
          tagName: 'a',
          properties: { className: ['anchor'], href: `#${id}`, ariaLabel: `Link to section: ${text}` },
          children: [],
        });
      },
    },
  });
};
