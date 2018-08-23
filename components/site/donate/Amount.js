export default ({ payment, paymentUpdate, formatWell }) => (
    <div className='row halign'>
        <div className='site-donate-input'>
            <span className='site-donate-input-dollar-sign'>$</span>
            <input className='site-donate-input-payment' value={ payment }
                onChange={ ({ target }) => paymentUpdate(target.value) } onBlur={ () => formatWell() } />
        </div>
    </div>
);