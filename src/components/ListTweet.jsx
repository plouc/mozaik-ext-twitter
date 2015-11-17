var React  = require('react');
var Media  = require('./Media');
var moment = require('moment');

var ListTweet = React.createClass({
    render() {
        var cssClasses = 'list__item';
        var entities   = this.props.tweet.entities;

        if (entities.hasOwnProperty('media')) {
            var tweetMedia = entities.media.map(media => {
                return <Media key={media.id} media={media} />
            });
        }

        return (
            <div className={cssClasses}>
                {this.props.tweet.text}
                <div>
                    <i className="fa fa-retweet" /> {this.props.tweet.retweet_count}&nbsp;
                    <i className="fa fa-star" /> {this.props.tweet.favorite_count}
                </div>
                <div>
                    {tweetMedia}
                </div>
            </div>
        );
    }
});

module.exports = ListTweet;