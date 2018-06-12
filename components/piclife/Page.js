export default ({ children }) =>
(
    <div className='col' style={{ padding: 0 }}>
        { children }
        <footer>
            <icon to='self'>Profile</icon>
            <icon to='search'>Search to search tags (#$tag) or people ($people)</icon>
            <icon to='../piclife'>Home</icon>
            <icon action='take_picture/upload_picture'>Camera</icon>
        </footer>
    </div>
);