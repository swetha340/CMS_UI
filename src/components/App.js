import React, {useEffect, useState} from 'react';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import api from '../api/contact';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';

function App() {
  const [contacts,setContacts]=useState([])
  const [searchTerm,setSearchterm]= useState("");
  const [searchResult,setSearchresult]=useState([]);


  const retrieveContacts=async()=>{
    const response = await api.get('/contacts');
    return response.data;
  }


  const removeContactHandler=async(id)=>{
    await api.delete(`/contacts/${id}`)
    const newContacts = contacts.filter(item => item.id !== id)
    setContacts(newContacts);
  }
  const addContactHandler= async(contact)=>{
    const request = {
      id:uuid(),
      ...contact
    }
    const response =await api.post("/contacts",request)
    setContacts([...contacts,response.data]);
  }
  const updateContactHandler= async(contact)=>{
    await api.put(`/contacts/${contact.id}`,contact)
    let contacts =await retrieveContacts();
    setContacts(contacts);
  }
  useEffect(()=>{
    const getAllContacts=async()=>{
      const allContacts=await retrieveContacts();
      if(allContacts){
        setContacts(allContacts)
      }
    }
    getAllContacts();
  },[])
  const searchHandler = async (searchTerm)=>{
    //console.log(searchTerm)
    setSearchterm(searchTerm)
    if(searchTerm!==""){
      const newContactList=contacts.filter((contact)=>{
       return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchresult(newContactList)
      console.log(searchResult)
    }else{
      setSearchresult(contacts)
    }
  }
  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])
  return (
    <div className='container' style={{width:'50%'}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/contacts" exact element={<ContactList contacts={searchTerm.length<1?contacts:searchResult} term={searchTerm} removeContactHandler={removeContactHandler}  searchKeyword={searchHandler}/>} />
          <Route path="/contacts/:id" exact element={<ContactDetails />} />
          <Route path="/edit" exact element={<EditContact updateContactHandler={updateContactHandler}/>} />
          <Route path="/" exact element={<ContactList contacts={searchTerm.length<1?contacts:searchResult} term={searchTerm} removeContactHandler={removeContactHandler} searchKeyword={searchHandler}/>} />
        </Routes>
           {/* <AddContact addContactHandler={addContactHandler}/>
          <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
