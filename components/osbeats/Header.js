export default ({ search, updateSearch, searchOnEnter, query }) => (
    <header className='osbeats-header space-evenly'>
        <div></div>
        <div className='row halign valign'>
            <input className='osbeats-header-searchbar' placeholder='Search' value={ search }
                onChange={ (e) => updateSearch(e) } onKeyPress={ (e) => searchOnEnter(e) } />
            <i className='osbeats-header-search-icon fas fa-search' onClick={ () => query() }></i>
        </div>
        <div className='osbeats-logo-container col halign'>
            <img className='osbeats-logo' src='https://api.gerardvee.com/public/images/1535300648896.png' />
        </div>
    </header>
);