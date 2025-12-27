import { useState } from "react";

export default function player({ initialName, symbol }) {
  const[isedit, setIsEdit] =useState(false);
  const [playName, setplayName] = useState(initialName);  


    const handleEdit = () =>{
        setIsEdit((isedit) => !isedit);
        console.log(isedit)
    }
    const handleChnage = (event) =>{
        console.log(event);
     setplayName(event.target.value);
    }

    let playername = <span className="player-name">{playName}</span>

    if(isedit){
       playername = <input type="text" required value={playName} onChange={handleChnage}/> 
    }

  return (
    <li>
      <span className="player">
       {playername}      
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={()=> handleEdit()}>{isedit ? "save" : "edit"}</button>
    </li>
  );
}
