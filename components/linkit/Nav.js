export default ({ picture, children }) => (
    <div className='nav'>
        <div className='heading'>
            <h1 className='title'><span className='colored'>L</span>ink<span className='colored'>I</span>t</h1>
            { picture && <img className='linkit-fb-picture' src={ picture } height='50' width='50' /> }
            <div className='options'>
                { children }
            </div>
        </div>
        <div className='more'>
            <h2 className='subtitle'>Relevant linking made easy.</h2>
            <p className='undertitle'>No sub categories, comments, stats, account to post, just links.</p>
        </div>
    </div>
);