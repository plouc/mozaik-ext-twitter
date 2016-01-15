import React        from 'react/addons';
const { TestUtils } = React.addons;
import { expect }   from 'chai';
import Favorites     from '../components/Favorites.jsx';


describe('Twitter — Favorites', () => {
    it('should no display count when it\'s 0', () => {
        let favorites = TestUtils.renderIntoDocument(<Favorites tweet={{ favorite_count: 0 }}/>);
        let render    = TestUtils.findRenderedDOMComponentWithClass(favorites, 'twitter__favorites');
        expect(render.getDOMNode().className).to.contain('twitter__favorites--none');
        expect(render.getDOMNode().textContent).to.not.contain('0');
    });

    it('should no display count greater than 0', () => {
        let favorites = TestUtils.renderIntoDocument(<Favorites tweet={{ favorite_count: 12 }}/>);
        let render    = TestUtils.findRenderedDOMComponentWithClass(favorites, 'twitter__favorites');
        expect(render.getDOMNode().className).to.not.contain('twitter__favorites--none');
        expect(render.getDOMNode().textContent).to.contain('12');
    });
});
