import React from 'react';
const AddTaskModal = ({CloseModal}) => {
  return (
    <div className="fixed  top-0 left-0 w-screen h-screen bg-black/ backdrop-blur-sm flex justify-center items-center">
      
      <div className="h-[60hv] w-[400px] bg-[#9EDDFF] rounded-md  p-5  flex flex-col gap-5 ">
      
        <input  type="text" placeholder="Enter the Todo title..." className="w-full px-2 border-1 bg-amber-50" />
      
        <textarea  placeholder= "Add a description .... "  name="" id=""  p-3="true" className="w-full h-full max-h-full  bg-amber-50 px-2 " >
      
        </textarea>
        <button onClick={CloseModal} className="border-1 py-2 rounded-sm bg-[#6499E9]  "> Add Todo </button>
      </div>
    </div>
  )
}
export default AddTaskModal;     