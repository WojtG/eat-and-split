import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriends }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendName || !friendImg) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name: friendName,
      image: `${friendImg}?=${id}`,
      balance: 0,
    };

    onAddFriends(newFriend);

    setFriendImg("https://i.pravatar.cc/48");
    setFriendName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label for="friend-name"> Friend name:</label>
      <input
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        type="text"
        id="friend-name"
        name="friend-name"
      />

      <label for="image-url">Image url</label>
      <input
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
        type="text"
        id="image-url"
        name="image-url"
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
