import { useState } from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a will with NameOfTheFriend</h2>
      <label for="bill">Bill value</label>
      <input type="text" id="bill" name="bill" />

      <label for="y-expense">Your expense</label>
      <input type="text" id="y-expense" name="y-expense" />

      <label for="f-expense">FriendNAME expense</label>
      <input disabled type="text" id="f-expense" name="f-expense" />

      <label for="personpaying">Who is paying?</label>
      <select id="personpaying" name="personpaying">
        <option value="user">Me</option>
        <option value="friend">FriendsName</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
