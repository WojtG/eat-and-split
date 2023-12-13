import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPaid, setWhoPaid] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";
  return (
    <form className="form-split-bill">
      <h2>Split a will with {selectedFriend.name}</h2>
      <label for="bill">Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        type="text"
        id="bill"
        name="bill"
      />

      <label for="y-expense">Your expense</label>
      <input
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser((curr) =>
            +e.target.value <= bill ? +e.target.value : curr
          )
        }
        type="text"
        id="y-expense"
        name="y-expense"
      />

      <label for="f-expense">{selectedFriend.name} expense</label>
      <input
        value={paidByFriend}
        disabled
        type="text"
        id="f-expense"
        name="f-expense"
      />

      <label for="personpaying">Who is paying?</label>
      <select
        value={whoPaid}
        onChange={(e) => setWhoPaid(e.target.value)}
        id="personpaying"
        name="personpaying"
      >
        <option value="user">Me</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
