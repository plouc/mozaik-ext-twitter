var React  = require('react');

var Media = React.createClass({
    render() {
        var cssClasses = 'media';

        return (
          <img src={this.props.media.media_url} className={cssClasses} alt="" />
        );
    }
});

module.exports = Media;
