exports.onRouteUpdate = function({ location }) {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.yaCounter !== `undefined` &&
    typeof window.yaCounter.hit === 'function'
  ) {
    window.yaCounter.hit((location || {}).pathname);
  }
};
