import { useState } from "react";

export default function Player({
  inititalName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(inititalName);
  const [isEditing, setIsEditing] = useState(false);

  //
  const handleEditPlayerInfo = function () {
    setIsEditing(editing => !editing);
    isEditing && onChangeName(symbol, playerName);
  };

  const handleChange = function (event) {
    setPlayerName(event.target.value);
  };

  const editablePlayerName = !isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    /*
     * At first, when try to update value of input field, then value property use in input field override that.
     * But now add an event listener, which will trigger when user press a key to update value, and then event listener is called
     * and after that state change function also called, to update value, and then through value property, updated value of input
     * field is displayed, and when save button is pressed, then value is permanently updated.
     * This way of setting the value of input field is called Two Way binding.
     */

    <input type="text" required value={playerName} onChange={handleChange} />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditPlayerInfo}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
