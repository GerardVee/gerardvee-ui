export default ({ picture, children }) => (
    <div className='nav'>
        <div className='titles'>
            <h1 className='title'><span className='colored'>L</span>ink<span className='colored'>I</span>t</h1>
            <h2 className='subtitle'>Relevant linking made easy. No sub categories, no comments, no displayed stats, just links. No account required to post.</h2>
        </div>
        { picture && <img src={ picture } height='50' width='50' /> }
        <div className='options'>
            { children }
        </div>
    </div>
);