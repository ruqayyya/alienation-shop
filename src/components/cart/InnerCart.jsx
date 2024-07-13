import React from 'react'
import random from '../../assets/images/glow_tee_dark_800x.webp'

const InnerCart = () => {
  return (
    <div className='inner-cart'>
        <div className="container">
            <div className="shop-info row">
                <div>
                    <img src={random} alt="" />
                </div>
                <div className='clothes-info'>
                    <span className="name">
                        bonner
                    </span>
                    <span className="size"> m</span>
                    <span className="between">ESTIMATED BETWEEN: JUL 14 AND JUL 17</span>
                    <span className="offer-identity"></span>
                    <span className="price"></span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default InnerCart