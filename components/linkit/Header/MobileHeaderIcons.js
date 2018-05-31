import { Component } from 'react';
import { connect } from 'react-redux';

import { sendUser, sendMe, sendPostOrder, sendPosts } from '../../../ducks/actions/linkit';

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ linkit }) => (
{
    postOrder: linkit.postOrder
});

const mapDispatchToProps = (dispatch) => (
{
    setPostOrder: (order) => dispatch(sendPostOrder(order)),
    setPosts: (posts) => dispatch(sendPosts(posts))
});

const icons =
[
    { order: 'HOT', icon: 'whatshot' },
    { order: 'NEW', icon: 'timer' },
    { order: 'RISING', icon: 'poll' },
];

const activeClass = (postOrder, order) => postOrder === order ? 'active' : 'md-light';

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async fetchPosts(order)
    {
        const { postOrder } = this.props;
        const res = order === 'HOT' ? await fetch(api + 'linkit/posts') : await fetch(api + 'linkit/posts?order=' + order.toLowerCase());
        const posts = await res.json();
        this.props.setPosts(posts);
        if (postOrder !== order)
        {
            this.props.setPostOrder(order);
        }
    }

    render()
    {
        const { postOrder } = this.props;
        return (
            <>
            { icons.map(({ order, icon }) => (
                <i className={ 'material-icons md-36 center thirds ' + activeClass(postOrder, order) }
                    onClick={ () => this.fetchPosts(order) } key={ `mobile-${ order }` }>
                    { icon }
                </i>
            ))}
            </>
        );
    }
});