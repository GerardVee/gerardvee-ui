import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';
import Link from 'next/link';

import Nav from '../components/site/Nav';
import Hello from '../components/site/Hello';
import Projects from '../components/site/Projects';
import { sendProjects, sendImages } from '../ducks/actions/site';
import '../styles/index.scss';

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
    
    render()
    {
        const { projects, images } = this.props;
        return (
            <div className='col' style={{ padding: 0 }}>
                <title>GerardVee</title>
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