import React from 'react'
import { Link } from 'react-router-dom';

function ContactCard(props) {
    const {id,firstName,lastName,emailId} = props.contact;
    return (
        <div className="card">
            
              <div className="card-header">
                  <div className='row'>
                      <div className='col-10'>
                        <Link to={{pathname:`/contacts/${id}`,state:{contact:props.contact}}}>
                            <i className="bi bi-person-circle" style={{ fontSize: 50}}></i>
                            <h1 style={{display:'inline-block'}}>{firstName} {lastName}</h1>
                        </Link>
                            <p>
                                <i className="bi bi-envelope-fill"></i>  {emailId}   
                                {/* <i class="bi bi-telephone-fill"></i> */}
                            </p>
                      </div>
                      <div className='col-2'>
                      <i className="bi bi-trash" style={{ fontSize: 30,float:'right',color:'red' }} onClick={()=>props.removeContactHandler(id)}></i>
                      <Link to='/edit' state={{contact:props.contact}}>
                      <i class="bi bi-pencil-square" style={{ fontSize: 30,float:'right',color:'blue' }}></i>
                      </Link>
                     </div>
                  </div>
              </div>
              
        </div>
    )
}

export default ContactCard
