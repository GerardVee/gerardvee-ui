const aboutMe = `
I develop. I build. I maintain. I visualize and establish.
My passion has always been solving problems, and
development has always been about solving problems. Large problems, small, technical, logical, resource-oriented problems.
All these problems are like puzzles that I can solve in my own way, striving for efficiency, speed and beauty in the solution.
`;

const furtherAboutMe = `
As a creative, I cultivate ideas and use my life as inspiratios for tech I'd like to implement. Useful things for the public and me.
I like to innovate, and as a self-taught developer, honing and practicing my craft is essential. I currently reside in Kern County, California,
but I work remotely, and can travel and relocate if the opportunity arises. Contact me for any inquiries.
`;

export default () => (
    <>
        <div className='site-about-row col-sm-row-md halign valign space-evenly'>
            <span className='site-about-column-description'>{ aboutMe }</span>
            <img className='site-about-column-image' src='https://s3.amazonaws.com/gerardvee/site/20180329-131223.jpg' />
        </div>
        <div className='site-about-row col-sm-row-md halign valign space-evenly'>
            <img className='site-about-column-image' src='https://image.ibb.co/k0aMfz/smonica.jpg' />
            <span className='site-about-column-description'>{ furtherAboutMe }</span>
        </div>
    </>
);