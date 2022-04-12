import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function AddContact(props) {
        const initialContact={firstName:"",lastName:"",emailId:""}
        const [contact,setContact]=useState(initialContact)
        let navigate = useNavigate();
       let addContact=(e)=>{
           e.preventDefault()
           if(contact.firstName===""||contact.lastName===""||contact.emailId===""){
               alert("Please enter all the fields")
           }else{
            props.addContactHandler(contact);
            setContact(initialContact)
            navigate('/');
           }
        }
        let changeHandler=(e)=>{
                const {name,value}=e.target
                setContact({...contact,[name]:value})
        }
    return (
        <div className='container'>
            <h1>Add Contact</h1>
            <form className='col-6'>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="firstname" className='form-control' onChange={changeHandler} value={contact.firstName}/>
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="lastname" className='form-control' onChange={changeHandler} value={contact.lastName}/>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="text" name="emailId" placeholder="email" className='form-control' onChange={changeHandler} value={contact.emailId}/>
                </div>
                <button className='btn btn-primary mt-2' onClick={addContact}>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact
