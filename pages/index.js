import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';
import FacebookAuth from 'react-facebook-auth';
/* only use Link if they use the same styling (import 'x.scss'), otherwise, don't */
import Link from 'next/link';
import Router from 'next/router'

import post from '../lib/post';
import Nav from '../components/site/Nav';
import Hello from '../components/site/Hello';
// import Projects from '../components/site/Projects';
import { sendProjects, sendImages } from '../ducks/actions/site';
import '../styles/index.scss';

const appId = process.env.FB_APP_ID;

const api = 'https://api.gerardvee.com/';

const Footer = () => (
    <div>
        <h3>Keep in touch</h3>
        <div className='row'>
            <button>Github</button>
            <button>LinkedIn</button>
            <button>CodePen</button>
        </div>
        <p>Crafted by me ©, 2017 </p>
    </div>
);

const mapStateToProps = ({ site }) => (
{
    projects: site.projects,
    images: site.images
});

const mapDispatchToProps = (dispatch) => (
{
});

const pair = (array) => array.reduce((result, _, i) =>
{
    if (i % 2 === 0)
    {
        result.push(array.slice(i, i + 2));
    }
    return result;
}, []);

class Projects extends Component
{
    pushUrl(url)
    {
        Router.push(url);
    }

    render()
    {
        const { projects } = this.props;
        const pairs = pair(projects);
        return (
            <>
                <div className='hidden-md hidden-lg col' style={{ justifyContent: 'center' }}>
                { projects.map(project =>
                    <div>
                        <img className='responsive opacity-hover' src={ project.image } />
                        <h1>{ project.title }</h1>
                    </div>
                )}
                </div>
                <div className='hidden-sm col'>
                { pairs.map(project_array =>
                    <div className='row' style={{ justifyContent: 'center' }}>
                    { project_array.map(project =>
                        <div className='opacity-hover' onClick={ () => this.pushUrl(project.url) }>
                            <img className='responsive' src={ project.image } />
                            <h1 style={{ position: 'relative', top: '-65%', textAlign: 'center' }}>{ project.title }</h1>
                        </div>
                    )}
                    </div>
                )}
                </div>
            </>
        );
    }
}

const extensionCapture = (file) => /(?:\.([^.]+))?$/.exec(file)[1];

class UploadImage extends Component
{
    state =
    {
        imageUrl: ''
    };

    async handleUpload(e)
    {
        e.preventDefault();

        const data = new FormData();
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        console.log(data.values());

        const imageUpload = await fetch(api + 'site/image/upload',
        {
            body: data,
            method: 'POST'
        });
        const imageUploaded = await imageUpload.json();

        if (imageUploaded.success)
        {
            alert('image url: ' + imageUploaded.success);
        }
        else
        {
            alert('error: ' + imageUploaded.error);
        }
    }

    render()
    {
        return (
            <div>
                <input ref={(ref) => { this.uploadInput = ref; }} type='file' />
                <button onClick={ (e) => this.handleUpload(e) }>Upload</button>
            </div>
        );
    }
}

class DeleteImage extends Component
{
    state =
    {
        imageUrl: ''
    };

    async deleteImage(fileName)
    {
        console.log(fileName);

        const imageDelete = await fetch(api + 'site/image/delete', post({ fileName }));
        const imageDeleted = await imageDelete.json();
        if (imageDeleted.success)
        {
            alert('success: ' + imageDeleted.success);
        }
        else
        {
            alert('error: ' + imageDeleted.error);
        }
    }

    render()
    {
        const { images } = this.props;
        return (
            <div>
            { images.map(({ location }) =>
                <div>
                    <img src={ location } />
                    <button onClick={ () => this.deleteImage(location.substr(location.lastIndexOf('/') + 1)) }>Delete</button>
                </div>
            )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    static async getInitialProps({ store, req })
    {
        const projectsReq = await fetch(api + 'site/projects');
        const imagesReq = await fetch(api + 'site/images');
        const projects = await projectsReq.json();
        const images = await imagesReq.json();
        store.dispatch(sendProjects(projects));
        store.dispatch(sendImages(images));
        return {};
    }
    
    login(user)
    {
        console.log(user);
    }

    render()
    {
        const { projects, images } = this.props;
        return (
            <div className='col' style={{ padding: 0 }}>
                <title>GerardVee</title>
                <Nav />
                <UploadImage />
                <DeleteImage images={ images } />
                {/* <Projects projects={ projects } /> */}
                { /* projects are pointing to the wrong location it's public/images, not just images 
                    also site and admin due today, along with home
                <form ref='uploadForm' 
                id='uploadForm' 
                action='https://api.gerardvee.com/site/upload/image' 
                method='post' 
                encType='multipart/form-data'>
                    <input type='file' name='image' />
                    <input type='submit' value='Upload!' />
                </form>*/ }
                {/*<Nav />
                <Hello header={ content.filter(item => item.type === 'header')[0] } cycle={ content.find(item => item.type === 'cycle') }/>
                <Projects content={ content } images={ images } />
                <Footer />*/}
            </div>
        );
    }
});