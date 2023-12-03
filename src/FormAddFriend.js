import { useState } from "react";
import Button from "./Button";

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label for="friend-name"> Friend name:</label>
      <input type="text" id="friend-name" name="friend-name" />

      <label for="image-url">Image url</label>
      <input type="text" id="image-url" name="image-url" />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
