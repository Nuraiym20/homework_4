
import React, { useState } from "react";
function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName,
      phoneNumber,
      birthYear,
    };
    alert(JSON.stringify(userData));
    console.log(userData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ФИО:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Номер телефона:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Год рождения:
        <input
          type="text"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
export default RegistrationForm;






