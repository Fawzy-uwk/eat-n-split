function Friends({playerslist,selected,handleSelected}) {
    
  return (
    <div className="container">
      <ul className="list" >
      {
        playerslist.map((player)=>(
        
        <li key={player.id} style={selected&&selected.id===player.id?{backgroundColor:"#ffe9bc"}:{}} >
          <img src={player.image} alt="player" />
          <div className="n_n">
            <h3>{player.name}</h3>
            {player.balance<0&&(<span style={{color:"red"}}>You owe {player.name} {Math.abs(player.balance)}</span>)}
            {player.balance>0&&(<span style={{color:"green"}}>{player.name}  owes You {Math.abs(player.balance)}</span>)}
            {player.balance===0&&(<span> You and {player.name} are even</span>)}
            </div>
            <button onClick={()=>{handleSelected(player)}} className="btn">{selected&&selected.id===player.id?"close":"select"}</button>
            </li>
        
      ))
        
      }
        
     
      </ul>
      
    </div>
  );
}

export default Friends;
