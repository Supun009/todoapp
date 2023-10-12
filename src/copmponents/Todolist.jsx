import styles from "./todolist.module.css"
import Todoitem from "./Todoitem";
export default function Todolist({todos, setTodos}) {
const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))

function handleDelete(item){
    
    setTodos("");

}


    return (
        <>
        <div>
    
    </div>
    <div className={styles.list}>
         {sortedTodos.map((item)=>(
            <Todoitem 
            key={item.name}
            item={item} 
            todos={todos}
            setTodos={setTodos}/>
        ))}
    </div>
    
    </>
    )
    
}