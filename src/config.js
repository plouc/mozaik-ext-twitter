var convict = require('convict');

var config = convict({
    twitter: {
        consumerKey: {
            doc:     'The twitter oauth consumer key.',
            default: null,
            format:  String,
            env:    'TWITTER_CONSUMER_KEY'
        },
        consumerSecret: {
            doc:     'The twitter oauth consumer secret.',
            default: null,
            format:  String,
            env:    'TWITTER_CONSUMER_SECRET'
        },
        accessTokenKey: {
            doc:     'The twitter oauth access token key.',
            default: null,
            format:  String,
            env:    'TWITTER_ACCESS_TOKEN_KEY'
        },
        accessTokenSecret: {
            doc:     'The twitter oauth access token secret.',
            default: null,
            format:  String,
            env:    'TWITTER_ACCESS_TOKEN_SECRET'
        }
    }
});

module.exports = config;