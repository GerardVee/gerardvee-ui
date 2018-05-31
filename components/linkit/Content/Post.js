import { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { sendError } from '../../../ducks/actions/linkit';
import post from '../../../lib/post';

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ linkit }) => (
{
    me: linkit.me
});

const mapDispatchToProps = (dispatch) => (
{
    setError: (error) => dispatch(sendError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        upvote: false,
        downvote: false
    };

    async componentDidUpdate(_props, _state, snapshot)
    {
        const { me, id } = this.props;
        if (_props.me === me)
        {
            return;
        }
        else
        {
            if (!!me)
            {
                this.setState({ upvote: me.upvotes.includes(id), downvote: me.downvotes.includes(id) });
            }
        }
    }

    async onUpvote()
    {
        const { id, token, err } = this.props;
        const res = await fetch(api + `linkit/upvote/${ id }`, post({ token }));
        const upvoted = await res.json();
        if (upvoted.error)
        {
            this.props.setError(upvoted.error);
            return;
        }
        this.setState(upvoted);
    }

    async onDownvote()
    {
        const { id, token, err } = this.props;
        const res = await fetch(api + `linkit/downvote/${ id }`, post({ token }));
        const downvoted = await res.json();
        if (downvoted.error)
        {
            this.props.setError(downvoted.error);
            return;
        }
        this.setState(downvoted);
    }

    render()
    {
        const { upvote, downvote } = this.state;
        const { title, link, date, className } = this.props;
        return (
            <div className='linkit-post col halign-children'>
                <a href={ !/^((http|https|ftp):\/\/)/.test(link) ? `http://${ link }` : link }>
                    <h1 className='linkit-post-title center'>{ title }</h1>
                </a>
                <div className='row halign-children'>
                    <div className='row valign flex-1'>
                        <div className='linkit-post-action upvote' onClick={ () => this.onUpvote() }>
                            <i className={ (upvote ? 'upvoted ' : '') + 'material-icons' }>keyboard_arrow_up</i>
                            Upvote
                        </div>
                    </div>
                    <div className='row valign flex-1'>
                        <div className='linkit-post-action downvote' onClick={ () => this.onDownvote() }>
                            <i className={ (downvote ? 'downvoted ' : '') + 'material-icons' }>keyboard_arrow_down</i>
                            Downvote
                        </div>
                    </div>
                    <div className='row valign flex-1'>
                        <div className='linkit-post-action report'>
                            <i className='material-icons'>error_outline</i>
                            Report
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});