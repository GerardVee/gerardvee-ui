import { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts, refreshPosts } from '../../../ducks/actions/linkit';

const mapStateToProps = ({ linkit }) => (
{
    postOrder: linkit.postOrder
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (order) => dispatch(getPosts(order)),
    refreshPosts: (order) => dispatch(refreshPosts(order))
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
    fetchPosts(order)
    {
        const { postOrder } = this.props;
        if (postOrder === order)
        {
            this.props.refreshPosts(order);
        }
        else
        {
            this.props.getPosts(order);
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