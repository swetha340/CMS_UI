import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'
function ContactList(props) {
    const input1=useRef("");
    const renderContactList=props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} removeContactHandler={props.removeContactHandler} key={contact.id}/>
        );
    })

    const getSearchTerm=(e)=>{
            props.searchKeyword(e.target.value)
    }
    return (
        <div className='container' >
            <h1>Contact List
                <Link to='/add'>
                    <div  style={{display:'inline-block',float:'right'}}>
                        <button className='btn btn-primary'>Add Contact</button>
                    </div>
                </Link>
            </h1>
            <div className="input-group">
    <input ref={input1} type="text" placeholder="Search Contacts" className="form-control" value={props.term} onChange={getSearchTerm}/>
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button">
      <i className='bi bi-search col-3' style={{ fontSize: 20 }}></i>
      </button>
    </div>
  </div>
            {/* <div className='form-group'>
                    <input ref={input1} type="text" placeholder="Search Contacts" className="form-control" value={props.term} onChange={getSearchTerm}/>
                    <i className='bi bi-search col-3' style={{ fontSize: 30 }}></i>
            </div> */}
           {renderContactList}
        </div>
    )
}

export default ContactList
