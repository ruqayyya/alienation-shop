import React from "react";

const Delivery = () => {
  return (
    <div className="delivery">
      <p>Delivery</p>
      <input type="text" placeholder="Country" />
      <div className="name-surname row">
        <input type="text" placeholder="Nome/Name" />
        <input type="text" placeholder="Cognome/Surname" />
      </div>
      <input type="text" placeholder="adress" />
      <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      <div className="adress-info row">
        <input type="number" placeholder="Codice postale/Zip Code" />
        <input type="text" placeholder="Citta'/City" />
        <input type="text" placeholder="Provincia" />
      </div>
      <form className="num">
        <input type="text" placeholder="Phone" />
        <label className="custom-checkbox">
          <input type="checkbox" name="updates" />
          <span>Save information for next time</span>
        </label>
      </form>
      
    </div>
  );
};

export default Delivery;
