var components = {
    Timeline: require('./Timeline.jsx')
};

require('mozaik/browser')
    .add('twitter.timeline', components.Timeline)
;

module.exports = components;