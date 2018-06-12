export default ({ people }) => (
    <Page>
    { people.map(p =>
        <div onClick={ () => <Link to={ `/projects/piclife/user?id=${ p.username }` } as={ `/projects/piclife/user/${ p.username }` }></Link> }>
            <img className='circular small'>profile picture of OP</img>
            <p>OP's username</p>
        </div>
    )}
    </Page>
);