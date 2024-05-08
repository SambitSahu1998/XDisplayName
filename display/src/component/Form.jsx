import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName.trim()!=='' && lastName.trim()!==''){
        const fullName=`${firstName} ${lastName}`;
        setFullName(fullName);
        setIsSubmitted(true);
    } 
    else{
        alert('Please Fill In Both First Name And Last Name');
    }
  };

  return (
    <React.Fragment>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            title="Please fill out this field"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            title="Please fill out this field"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default Form;
