import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import axios from "axios";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Delivery = () => {
  const [countries, setCountries] = useState([]);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const getCounties = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      const modifiedResponse = res.data?.map((item) => ({
        id: item?.cca2,
        label: item?.name?.common,
      }));
      setCountries(modifiedResponse);
    };
    getCounties();
  }, []);

  return (
    <div className="delivery">
      <p>Delivery</p>
      <select>
        <option value="">Country</option>
        {countries.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="name-surname row">
        <input type="text" placeholder="Nome/Name" />
        <input type="text" placeholder="Cognome/Surname" />
      </div>
      <input type="text" placeholder="adress" />
      <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      <div className="adress-info row">
        <input type="text" placeholder="Citta'/City" />
      </div>
      <form className="num">
        <PhoneInput
          country={"az"}
          value={phone}
          onChange={(value) => setPhone(value)}
        />
        <label className="custom-checkbox">
          <input type="checkbox" name="updates" />
          <span>Save information for next time</span>
        </label>
      </form>
    </div>
  );
};

export default Delivery;
