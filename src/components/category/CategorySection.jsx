import React from 'react'
import CategoryHeader from '../Header/CategoryHeader'
import random from '../../assets/images/glow_tee_dark_800x.webp'
import { filter } from '../../db/filterDb'

const CategorySection = () => {
  return (
    <section className='category-section'>
        <div className="container">
            <div className="main-filter">
                <CategoryHeader/>
                <div className="collection-part row">
                    <aside className=' filter'>
                        <span>Filters</span>
                        <ul>
                            {filter.map((item)=>(
                                <li> {item.title}</li>
                            ))}
                        </ul>
                    </aside>
                    <div className="collection">
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
                        <img src={random} alt="" />
            
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection