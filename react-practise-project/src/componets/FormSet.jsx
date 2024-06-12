import { useState } from "react"


const FormSet = () => {
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        passWord:""
    });

const handleChange =((e)=>{
  const  {name , value} =e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value,
    }))
})
const submitHandler =((e)=>{
    e.preventDefault();
   console.log(formData)
})
  return (
    <>
    <form onSubmit={submitHandler}> 
    <input type="text"  value={formData.name} placeholder="name" name="name" onChange={handleChange}/>
     <input type="text"  value={formData.email} placeholder="email" name="email" onChange={handleChange}/>
     <input type="passsword"  value={formData.passWord} placeholder="password" name="passWord" onChange={handleChange}/>
     <button type="submit">Submit </button>
     </form>
    </>
  )
}

export default FormSet