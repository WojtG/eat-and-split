import { useState } from "react";
import FriendElement from "./FriendElement";

function FriendsList({ friends, onSelectedFriends, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendElement
          onSelectedFriends={onSelectedFriends}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
