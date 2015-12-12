var React  = require('react');

var TweetMedia = React.createClass({
    render() {
        var cssClasses = 'media';

        return (
          <img src={this.props.media.media_url} className={cssClasses} alt="" />
        );
    }
});

module.exports = TweetMedia;
