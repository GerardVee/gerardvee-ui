import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ site }) => ({ projects: site.projects });

export default connect(mapStateToProps)(({ projects }) => (
    <>
        <div className='row halign'>
            <h1 className='site-projects-page-title'>Projects</h1>
        </div>
        <div className='col halign'>
            { projects.sort((p1, p2) => p1.priority - p2.priority).map(project => (
                <div key={ 'sm_' + project.url } className='col-sm-row-md halign self-center site-projects-project'>
                    <div className='col halign'>
                        <img className='site-projects-project-image' src={ project.image } />
                        <div className='row halign wrap site-projects-project-tags'>
                            { project.tags.split(',').map(tag => (
                                <p className='site-projects-project-tags-text' key={ project.url + '-' + tag }>{ tag }</p>
                            )) }
                        </div>
                        <div className='row halign self-center'>
                            <a className='site-projects-project-link' href={ project.url }>Link</a>
                            { project.source_url && <a className='site-projects-project-link' href={ project.source_url }>Github</a> }
                        </div>
                    </div>
                    <div className='col halign'>
                        <h1 className='self-center site-projects-project-title'>{ project.title }</h1>
                        <p className='center site-projects-project-description'>{ project.description }</p>
                    </div>
                </div> ))}
        </div>
    </>
));