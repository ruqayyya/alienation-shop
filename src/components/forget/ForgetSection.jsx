import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgetSection = () => {
  return (
    <section className="forget">
      <div className="container">
        <div className="forget-part">
          <h1 className="forget-tag">PASSWORD RECOVERY</h1>
          <p>Insert your email:</p>
          <form>
            <input type="email" placeholder="E-mail" />
            <button type="submit">Recover</button>
          </form>
          <p className="create-account row">
          Do you remember your password?{" "}
            <NavLink to={'/login'}>
              <p>Back to login</p>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ForgetSection