import { useState } from "react";

function SplitBill({ selected, handleSplit,setSelected }) {
  const [bill, setBill] = useState("");
  const [userExpanse, setUserExpanse] = useState("");
  const [whoPay, setWhoPay] = useState("you");
  const friendExpanse = bill ? bill - userExpanse : "";
  const handleSplitBill = (e) => {
    e.preventDefault();
    if (!bill || !userExpanse) return;
    handleSplit(whoPay === "you" ? friendExpanse : -userExpanse);
    setSelected(null)
    
  };
  return (
    <div>
      <form className="bill" onSubmit={handleSplitBill}>
        <h3>Split A bill with {selected.name}</h3>
        <div className="form-control">
          <label aria-label="name">💰bill value</label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label aria-label="img">🧍‍♀️ Your expense</label>
          <input
            type="text"
            value={userExpanse}
            onChange={(e) =>
              setUserExpanse(
                Number(e.target.value) > bill
                  ? userExpanse
                  : Number(e.target.value)
              )
            }
          />
        </div>

        <div className="form-control">
          <label aria-label="img">👫 {selected.name} expense</label>
          <input type="text" disabled value={friendExpanse} />
        </div>

        <div className="form-control">
          <label aria-label="img">🤑 Who is paying</label>
          <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
            <option value="you">YOU</option>
            <option value="player">{selected.name}</option>
          </select>
        </div>
        <button type="submit">split bill</button>
      </form>
    </div>
  );
}

export default SplitBill;
