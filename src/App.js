import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')//lebelil value adikkumbol change akunnath ariyan vendi

  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
        toDos.map((objValue,index)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(objValue)
                  setToDos(toDos.filter(obj=>{
                    if (obj.id===objValue.id){
                       obj.status = e.target.checked
                    }
                    return obj
                  }))
                }} value={objValue.status} type="checkbox" name="" id="" />
                <p>{objValue.text}</p>
              </div>
              <div className="right"
                 onClick={()=>{
                  setToDos(toDos.filter(obj=>{
                    if (obj.id !== objValue.id){
                     return obj
                    }
                    else{
                      return false
                    }
                  }))
                }}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })
       } 
       {
         toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
         })
       }
      </div>
    </div>
  );
}

export default App;