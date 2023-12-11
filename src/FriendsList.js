import { useState } from "react";
import FriendElement from "./FriendElement";

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendElement friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;
