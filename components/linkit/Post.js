import 'isomorphic-fetch';
import { Component } from 'react';
import Link from 'next/link';
import post from '../../lib/post';

const api = 'https://api.gerardvee.com/';

export default class extends Component
{
    constructor(props)
    {
        super(props);
        const { me, id } = props;
        if (!!me)
        {
            this.state = { upvote: me.upvotes.includes(id), downvote: me.downvotes.includes(id) };
        }
        else
        {
            this.state = { upvote: false, downvote: false };
        }
    }

    async onUpvote()
    {
        const { id, token } = this.props;
        const res = await fetch(api + `linkit/upvote/${ id }`, post({ token }));
        const upvoted = await res.json();
        if (upvoted.error)
        {
            alert(upvoted.error);
            return;
        }
        this.setState(upvoted);
    }

    async onDownvote()
    {
        const { id, token } = this.props;
        const res = await fetch(api + `linkit/downvote/${ id }`, post({ token }));
        const downvoted = await res.json();
        if (downvoted.error)
        {
            alert(downvoted.error);
            return;
        }
        this.setState(downvoted);
    }

    render()
    {
        const { upvote, downvote } = this.state;
        const { title, link, stats, date, className } = this.props;
        return (
            <div className={ className ? className : '' }>
                <div className='voting-options'>
                    <h1 className={ `upvote ${ upvote ? 'upvoted' : '' }` } onClick={ () => this.onUpvote() }>&#11165;</h1>
                    <h1 className={ `downvote ${ downvote ? 'downvoted' : '' }` } onClick={ () => this.onDownvote() }>&#11167;</h1>
                </div>
                <a href={ !/^((http|https|ftp):\/\/)/.test(link) ? `http://${ link }` : link }><h1 className='linkit-link'>{ title }</h1></a>
            </div>
        );
    }
}