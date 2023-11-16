import React from 'react'
import './works.css'
import Pf1 from '../../assets/portfolio-1.png';
import Pf2 from '../../assets/portfolio-2.png';
import Pf3 from '../../assets/portfolio-3.png';
import Pf4 from '../../assets/portfolio-4.png';
import Pf5 from '../../assets/portfolio-5.png';
import Pf6 from '../../assets/portfolio-5.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="worksDesc"></span>
        <div className="worksImgs">
            <img src={Pf1} alt="" className="worksImg" />
            <img src={Pf2} alt="" className="worksImg" />
            <img src={Pf3} alt="" className="worksImg" />
            <img src={Pf4} alt="" className="worksImg" />
            <img src={Pf5} alt="" className="worksImg" />
            <img src={Pf6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works