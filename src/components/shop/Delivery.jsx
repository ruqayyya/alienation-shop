import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Delivery = () => {
  const [countries, setCountries] = useState([]);
  const { nameError,phoneError, setPhoneNumber, surnameError, adressError, setNameError, setSurnameError, setAdressError,setAddress, setName, setSurname } = useContext(MainContext);
  const [phone, setPhone] = useState("");

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
        <option value="" >Country</option>
        {countries.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="name-surname row">
        <div>
          <input
            type="text"
            placeholder="Nome/Name "
            className={nameError ? "errorInput" : ""}
            onChange={(e) => setName(e.target.value)}
            required
            pattern="^[a-zA-Z\s]+$"
            title="Name should only contain letters and spaces."
          />
          {nameError && (
            <p className="error-text">Please, fill in the blank </p>
          )}
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Cognome/Surname"
            onChange={(e) => setSurname(e.target.value)}
            className={surnameError ? "errorInput" : ""}
            required
          />
          {surnameError && (
            <p className="error-text">Please, fill in the blank </p>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="adress"
          onChange={(e) => setAddress(e.target.value)}
          className={adressError ? "errorInput" : ""}
          required
        />
        {adressError && (
          <p className="error-text">Please, fill in the blank </p>
        )}
      </div>
      <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      <form className="num">
        <PhoneInput
          required
          country={"az"}
          value={phone}
          className={phoneError ? "errorInput" : ""}
          onChange={(value) => setPhoneNumber(value)}
        />
           {phoneError && (
            <p className="error-text">Please, fill in the phone number </p>
          )}
        <label className="custom-checkbox">
          <input type="checkbox" name="updates" />
          <span>Save information for next time</span>
        </label>
      </form>
    </div>
  );
};

export default Delivery;
