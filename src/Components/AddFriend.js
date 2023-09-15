import { useState } from "react";

function AddFriend({newFriend,addPlayer}) {
    const [name,setName]=useState("");
    const[image,setImage]=useState("")
    const handleInsert=(e)=>{
        e.preventDefault();
        if(!name||!image) return;
        const id=crypto.randomUUID();
        const newPlayer={name,image,balance:0,id};
        addPlayer(newPlayer);
        setImage("");
        setName("")
        
    }
  return (
    <div>
      <form onSubmit={handleInsert}>
        <div className="form-control">
          <label aria-label="name" >👫Freind Name</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label aria-label="img">🌄 Img URL</label>
          <input type="text" value={image} onChange={(e)=> setImage(e.target.value)}/>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddFriend;
