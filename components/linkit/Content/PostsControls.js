import { Component } from 'react';
import { connect } from 'react-redux';

import Option from '../Option';
import { getPosts, refreshPosts } from '../../../ducks/actions/linkit';

const mapStateToProps = ({ linkit }) => ({
    postOrder: linkit.postOrder
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (order) => dispatch(getPosts(order)),
    refreshPosts: (order) => dispatch(refreshPosts(order))
});

const activeClass = (postOrder, order) => postOrder === order ? 'active' : '';

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
            <div className='user-controls halign-children flex-1'>
                <Option icon='whatshot' className={ activeClass(postOrder, 'HOT') } onClick={ () => this.fetchPosts('HOT') }>
                    <p>Hot</p>
                </Option>
                <Option icon='timer' className={ activeClass(postOrder, 'NEW') } onClick={ () => this.fetchPosts('NEW') }>
                    <p>New</p>
                </Option>
                <Option icon='poll' className={ activeClass(postOrder, 'RISING') } onClick={ () => this.fetchPosts('RISING') }>
                    <p>Rising</p>
                </Option>
            </div>
        );
    }
});