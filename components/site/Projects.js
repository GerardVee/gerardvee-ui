const api = 'https://api.gerardvee.com/';

/*
 * New database:
 *  projects: (below)
 *   @schema: { _id, title, description: (put technologies used and achievements here too, as well as purpose), url, image, finished }
 *  images:
 *   @schema: { _id, location: /images/name_of_img.jgp or png }
 *   @description: upload one, and get back an id, which is _id, that can be embedded into any db as a supporting img (or just return the url)
 */

/*
 const projects =
 [
    {
        "title": "LocalWeather",
        "description": "A weather stats viewer. Syncs up to your location non-intrusively, or you can choose to use geolocation.",
        "url": "https://gerardvee.com/projects/localweather",
        "image": "https://api.gerardvee.com/images/20171115_145900.png",
        "finished": true
    },
    {
        "title": "RandomQuote",
        "description": "A quote generator. Interact and share the quotes you enjoy!",
        "url": "https://gerardvee.com/projects/randomquote",
        "image": "https://api.gerardvee.com/images/20171115_145901.png",
        "finished": true
    },
    {
        "title": "WikiViewer",
        "description": "A Google of sorts for Wikipedia. Feel free to search up anything and everything!",
        "url": "https://gerardvee.com/projects/wikiviewer",
        "image": "https://api.gerardvee.com/images/20171115_145902.png",
        "finished": true
    },
    {
        "title": "Calculated",
        "description": "A simple calculator inspired by the Samsung Galaxy 8's calculator.",
        "url": "https://play.google.com/store/apps/details?id=com.calculated",
        "image": "https://api.gerardvee.com/20171205_153913.jpg",
        "finished": true
    }
 ];*/

const pairs = (array) => array.reduce((result, _, i) =>
{
    if (i % 2 === 0)
    {
        result.push(array.slice(i, i + 2));
    }
    return result;
}, []);

export default ({ content, images }) => (
    <div className='col'>
        { pairs(content.find(item => item.type === 'projects-list').content).map((pair, i) => (
            <div className='row center halign' key={ `projects-${ i }` }>
                { pair.map((item, i) => (
                    <div className='col center' key={ `project-item-${ i }` }>
                        <img src={ `${ api + 'public' }` + images.find(img => img.name === item.title).location } />
                    </div>
                    ))
                }
            </div>
            ))
        }
        {/* content.find(item => item.type === 'projects-list').content.map((item, index) => (
            <div className='row center' key={ `projects-${ index }` }>
                <div className='col center'>
                    <h1>{ item.title }</h1>
                    <p>{ item.description }</p>
                    <img className='hidden-md hidden-lg' src={ 'https://gerardvee.com' + images.find(img => img.name === item.title).location } width="50%" />
                    { item.finished && <button>Visit</button> }
                    { !item.finished && <button disabled>Not Ready</button> }
                </div>
                <div className='col hidden-sm center' key={ `projects-picture-${ index }` }>
                    <img src={ 'https://gerardvee.com' + images.find(img => img.name === item.title).location } width="33%" />
                </div>
            </div>
            ))
        */}
    </div>
);