import React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import small1 from '../images/500/image1.png'
import small2 from '../images/500/image2.png'
import small3 from '../images/500/image3.png'
import small4 from '../images/500/image4.png'
import small5 from '../images/500/image5.png'


import medium1 from '../images/768/image1.png'
import medium2 from '../images/768/image2.png'
import medium3 from '../images/768/image3.png'
import medium4 from '../images/768/image4.png'
import medium5 from '../images/768/image5.png'

const Section = () => {
    return(
            <div className="sectionWrapper">
                <div className="sectionItem">
                <a href="#">
                <img src={medium1} srcSet={`${small1} 500w, ${medium1} 1100w`} />
                </a>
                </div>
            
                <div className="sectionItem">
                <a href="#">
                <img src={medium2} srcSet={`${small2} 500w, ${medium2} 1100w`} />
                </a>
                </div>
                
                <div className="sectionItem">
                <a href="#">
                <img src={medium3} srcSet={`${small3} 500w, ${medium3} 1100w`} />
                </a>
                </div>
                <div className="sectionItem">
                <a href="#">
                <img src={medium4} srcSet={`${small4} 500w, ${medium4} 1100w`} />
                </a>
                </div>
            </div>

    )
}

export default Section;