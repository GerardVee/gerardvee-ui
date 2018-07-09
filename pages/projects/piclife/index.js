import { BrowserRouter as Router, Route } from 'react-router-dom';

import Page from '../../../components/piclife/Page';

const likesPosts = () =>
{

}

/*<Page>
        {/* require FB sign in to use,
            sign on first time by providing a unique username
            PiclifePost{ _id: ObjectID, OP: '[OP's unique name]', picture: 'https://api.gerardvee.com/public/piclife/[FB_ID]_[generated_name].[ext]',
                         caption: '[caption text]', likes: [Number], tags: [array of strings parsed by taking each word from (#word)s in caption ] }
            PiclifeUser { id: [FacebookId used to make account], name: '[unique username]', posts: [array of PiclifePost _id's],
                         likes: [array of PiclifePost _id's they've liked], following: [array of PiclifeUser id's], followers: [array of PiclifeUser id's]  }
            liking a post adds it to the user's liked array, then increments the Post's liked count
         }
        <Link href='/projects/piclife/user?id=345' as='/projects/piclife/user/345'><a>Go</a></Link>
        <div class='feed'>
            <div className='example-post'>
                <img>{/*The obvious image, which when clicked on PC likes the post, and if double click on mobile, likes}</img>
                <icon onClick={ () => likesPosts() }>heart</icon> <p to='user/[OP]'>OP's username (unique)</p>
                <caption>limit to 100 characters, no emojis allowed</caption>
            </div>
        </div>
    </Page>*/

export default () => (
    <Router>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#001148' }}>
            <img src='https://api.gerardvee.com/public/images/1531090596198.svg' />
        </div>
    </Router>
);