import { useState } from "react";

const PasswordValidator = () => {
 
  const [strength, setStrength] = useState("");

  const validator = (input) => {
    const medium = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"
    );
    const strong = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$"
    );

    if (strong.test(input)) {
      setStrength("Strong");
    } else if (medium.test(input)) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const handleChange = (e) => {
    validator(e.target.value);
  };
  return (
    <div>
      <input type="password" onChange={handleChange} />
      <h1>Password Strength:{strength}</h1>
    </div>
  );
};

export default PasswordValidator;
