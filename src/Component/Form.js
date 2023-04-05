import React,{useState} from 'react'

const Form = () => {
  const [store,setStore]=useState({
   name:'',
   department:'',
   rating:''
  });
  const [show,setshow]=useState(false);

  const [out,setOut]=useState([]);
  const input1= (e)=>{
    const name= e.target.name;
    const value = e.target.value;

    setStore({...store,[name]:[value]});
  }
  const submitted = (e)=>{
    e.preventDefault();
    setOut([...out,{...store,id:out.length}])
    setshow(true)
  }
  return (
    <>
   {
    show ? null :  <div className='bg'>
    <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>

  <form onSubmit={submitted} >
    <label className='name'>
      Name:
    <input  className='box' type="text" name="name" placeholder="Name" value={store.name} onChange={input1} />
    <br/> <br/>
    </label>
    <label  className='name'> 
    Department:
      <input  className='box' type="text" name="department" placeholder='Department' value={store.department}  onChange={input1} />
      <br/> <br/>
      </label>
      <label className='name'>
        Rating:
    <input  className='box' type="number" name="rating" placeholder='Rating' value={store.rating} onChange={input1}/><br/> <br/>
    </label>
      <input  className='submit' type="submit" />
  </form>
  </div> 
   }
    {
      
      show ? 
      <>
      <div className="main-box">
      {out.map(ele=>(<h4 className='output'>Name: {ele.name} |  Department:  {ele.department} | Rating: {ele.rating} </h4>))}
    </div> <br/> <br/>
    <button onClick={()=>{setshow(false)}}>Go Back</button>
    </>  
    : null
    }
  </>
  )
}

export default Form