var React  = require('react');
var TweetMedia  = require('./TweetMedia');
var moment = require('moment');

var ListTweet = React.createClass({
    render() {
        var cssClasses = 'list__item';
        var entities   = this.props.tweet.entities;
        var tweetMedia;

        if (entities.hasOwnProperty('media') && entities.media.length > 0) {
          tweetMedia = entities.media.map(media => <TweetMedia key={media.id} media={media} />);
        }

        return (
            <div className={cssClasses}>
                {this.props.tweet.text}
                <div>
                    <i className="fa fa-retweet" /> {this.props.tweet.retweet_count}&nbsp;
                    <i className="fa fa-star" /> {this.props.tweet.favorite_count}
                </div>
                {tweetMedia}
            </div>
        );
    }
});

module.exports = ListTweet;