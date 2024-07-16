import React from 'react'
import RecentlyCarusel from '../Carusel/RecentlyCarusel'

const RecentlySection = () => {
  return (
    <section className="recently-section">
      <div className="container">
        <div className="recently">
          <span className="title">RECENTLY SEEN</span>
          <div className="recently-slider">
            <RecentlyCarusel/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentlySection