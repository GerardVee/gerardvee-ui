export default ({ page, suggestions, songDetails, setSongFromSearch }) => (
    <>
    { page === 'search' && <div className='osbeats-list col'>
        <div className='row halign valign'>
            <h1 className='osbeats-main-list-results-title'>Results</h1>
        </div>
        <div className='osbeats-main-list row space-evenly wrap'>
        { suggestions.length > 0 && suggestions.map((details) =>
            <div className='osbeats-suggestions-suggestion col halign' onClick={ () => setSongFromSearch(details) }>
                <div className='row halign valign'>
                    <img className='osbeats-suggestions-image' src={ details.src } />
                    <h2 className={ `osbeats-suggestions-title${ details.title === songDetails.title ? ' osbeats-active-blue' : '' }` }>{ details.title }</h2>
                </div>
            </div>)}
        { suggestions.length === 0 && <div className='col halign valign'>
                <h1 className='osbeats-main-list-results-none'>No Results</h1>
            </div>}
        </div>
    </div>}
    </>
);