import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import oldAnchors from './old-anchors.json' with { type: 'json' };

// The three long pages were split into a folder of pages each. Old links such as /resources/nightShifts/#exports
// are in chat histories, so each overview carries a small script, in the head so that it runs before the first paint,
// that sends a visitor with an old hash to the page that now holds the heading. The map only lists ids that moved,
// so an id that stayed on the overview is never touched. No other page carries it.
export const redirectScript = map =>
  `(function(){var m=${JSON.stringify(map)};var h=location.hash.slice(1);if(!h)return;var id;try{id=decodeURIComponent(h)}catch(e){id=h}` +
  `if(Object.prototype.hasOwnProperty.call(m,id))location.replace(m[id])})();`;

export const onRequest = defineRouteMiddleware(context => {
  const { starlightRoute } = context.locals;
  const id = starlightRoute.entry.id;
  const product = id.startsWith('resources/') ? id.slice('resources/'.length) : '';
  const map = Object.hasOwn(oldAnchors, product) ? oldAnchors[product] : null;
  if (map) starlightRoute.head.unshift({ tag: 'script', content: redirectScript(map) });
});
