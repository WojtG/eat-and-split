import { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {" "}
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
