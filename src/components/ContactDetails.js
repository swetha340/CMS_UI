import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
function ContactDetails(props) {
    console.log(props);
    const location = useLocation();
    const {id,firstName,lastName,emailId}=location.state.contact;
    return (
        <div class="card" style={{width:400}}>
             <img src="https://www.w3schools.com/bootstrap4/img_avatar6.png" alt="Card image" style={{width:'100%'}} />
            <div class="card-body">
                 <h4 class="card-title">{firstName} {lastName}</h4>
                    <p class="card-text">{emailId}</p>
                    <a href="/contacts" class="btn btn-primary">Back to contacts</a>
            </div>
   
        </div>
    )
}

export default ContactDetails
