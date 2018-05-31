export default ({ children, icon, className, ...props }) => (
    <div className='row valign' { ...props }>
        <div className={ `linkit-action${ !!className ? ' ' + className : '' }` }>
            <i className='material-icons'>{ icon }</i>
            { children }
        </div>
    </div>
);