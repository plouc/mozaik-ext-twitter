var Twitter = require('twitter');
var Promise = require('bluebird');
var _       = require('lodash');
var config  = require('config');

/**
 * @param {Mozaik} context
 */
var client = function (context) {

    // load and validate config
    config.load(context.config.api);
    try {
        config.validate();
    } catch (e) {
        context.logger.error(chalk.red(e.message));
        process.exit(1);
    }

    var twitter = new Twitter({
        consumer_key:        config.get('consumerKey'),
        consumer_secret:     config.get('consumerSecret'),
        access_token_key:    config.get('accessTokenKey'),
        access_token_secret: config.get('accessTokenSecret')
    });

    function _get(op, q) {
        var def = Promise.defer();

        q = q || {};

        twitter.get(op, q, function (err, params, response) {
            if (!err) { def.resolve(params); }
            else      { def.reject(err);     }
        });

        return def.promise;
    }

    return  {
        userTimeline() {
            return _get('statuses/user_timeline');
        },

        searchByHashtags(params) {
            var hashtagsText     = [];
            var hashtagsNormText = [];

            params.hashtags.forEach(function (hashtag) {
                hashtag.normText = hashtag.text.toLowerCase();
                hashtag.count    = 0;

                hashtagsText.push(hashtag.text);
                hashtagsNormText.push(hashtag.normText);
            });

            return _get('search/tweets', {
                q: '#' + hashtagsText.join(' OR #')
            })
                .then(function (res) {
                    var startDate = _.last(res.statuses).created_at;
                    var endDate   = _.first(res.statuses).created_at;

                    // Build aggregation by tag text
                    res.statuses.forEach(function (tweet) {
                        tweet.entities.hashtags.forEach(function (hashtag) {
                            var normText = hashtag.text.toLowerCase();
                            if (_.indexOf(hashtagsNormText, normText) > -1) {
                                _.find(params.hashtags, { normText: normText }).count += 1;
                            }
                        });
                    });

                    return {
                        hashtags:  params.hashtags,
                        dateRange: {
                            start: startDate,
                            end:   endDate
                        }
                    };
                })
                .catch(function (err) {
                    console.log(err);
                })
            ;
        }
    }
};

module.exports = client;