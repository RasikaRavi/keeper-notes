import React from 'react';

function Display({note,updatenote})
{
    const handleDelete=(id)=>{
        var list=note;
        list.splice(id,1)
        updatenote([...list]);
    }
    return(
        <div>
        {note.map((data,id) => {return(
                   <div className="card_div" key={id}>
                   <p><strong>{data.newTitle}</strong></p>
                   <p>{data.newContent}</p>
                   <button className="del_btn" onClick={()=>handleDelete(id)}> DELETE </button>
                   </div>
                 )})} 
       </div>
    )


}

export default Display