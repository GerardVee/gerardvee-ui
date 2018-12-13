import { connect } from 'react-redux';
import { Component } from 'react';

const mapStateToProps = ({ site }) => (
{
    projects: site.projects
});

const finishedProjects = (projects) => projects.filter(project => project.finished);
    
const pair = (array) => array.reduce((result, _, i) =>
{
    if (i % 2 === 0)
    {
        result.push(array.slice(i, i + 2));
    }
    return result;
}, []);

export default connect(mapStateToProps)(class extends Component
{
    pushUrl(url)
    {
        window.location.href = url;
    }

    render()
    {
        const { projects: allProjects } = this.props;
        const projects = finishedProjects(allProjects);
        const pairs = pair(projects);
        return (
            <>
                <div className='hidden-md hidden-lg'>
                { projects.map(project =>
                    <div className='row halign self-center'>
                        <img className='responsive site-card-opacity-hover site-card-image' onClick={ () => this.pushUrl(project.url) } src={ project.image } />
                        <h1 className='hidden-sm site-card-title'>{ project.title }</h1>
                    </div>
                )}
                </div>
                <div className='hidden-sm col'>
                { pairs.map(project_array =>
                    <div className='row halign'>
                    { project_array.map(project =>
                        <div className='col site-card-opacity-hover' onClick={ () => this.pushUrl(project.url) }>
                            <h1 className='site-card-title site-card-title-lg'>{ project.title }</h1>
                            <img className='responsive site-card-image' src={ project.image } />
                            <div className='row halign'>
                                <p className='center site-card-description'>{ project.description }</p>
                            </div>
                        </div>
                    )}
                    </div>
                )}
                </div>
            </>
        );
    }
});