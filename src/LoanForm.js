import { useState } from "react";
import "./FormStyles.css";
import Modal from "./modal";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNomber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNomber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("the edge is not allowed");
    } else if (phoneNomber.length < 10 || phoneNomber.length > 12) {
      setErrorMessage("the nomber is not allowed");
    }
    setShowModel(true);
  }
  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.phoneNomber === "" ||
    loanInputs.age === "";

  function handleDivClick() {
    if (showModel) setShowModel(false);
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form className="flex" style={{ flexDirection: "column" }} id="loan-form">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        <label>Phone Nomber:</label>
        <input
          value={loanInputs.phoneNomber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNomber: event.target.value });
          }}
        />
        <label>age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />
        <label>are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />
        <label>slalry:</label>

        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>apove 2000$</option>
        </select>
        <button
          onClick={handleFormSubmit}
          id="submit-button"
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
        >
          submit
        </button>
      </form>
      <Modal isVisible={showModel} errorMessage={errorMessage} />
    </div>
  );
}
