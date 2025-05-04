import React from "react";
const TodoCard = () => {
    return (
        <div className="h-[300px] w-[300px] bg-amber-50 rounded-lg p-3   ">
            <div className=" flex  justify-between items-center" >
                <h2 className="font-semibold justify-center"> TodoCard</h2>
                <div className="h-5 w-5 border border-black "></div>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aliquam, voluptatibus, culpa fugiat voluptates, ad officia nisi quo corporis repellat ex modi? Itaque minima eos cumque assumenda suscipit impedit ipsa.</p>
        </div>
    )

}
export default TodoCard;