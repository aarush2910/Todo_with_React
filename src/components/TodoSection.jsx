import React from 'react';
import TodoCard from './TodoCard'; // Importing the TodoCard component   
const TodoSection = ({ openModal }) => {
     return (

          <div className=" h-64 border border-black flex flex-col justify-start p-5 gap-4 bg-[#7AC6D2] items-center ">
               <h2 className="text-center text-2xl font-semibold
"  >TODO</h2>
               <button onClick={openModal} className="border border-black p-2 bg-[#3D90D7]
   rounded-md ">Create Task</button>
               <div className="flex gap-4 flex-wrap justify-center" >
                    {Array.from({ length: 5 }, (_, index) => (
                         <TodoCard key={index} /> // Rendering multiple TodoCard components using map
                    ))}
               </div>

          </div>

     )

}
export default TodoSection;