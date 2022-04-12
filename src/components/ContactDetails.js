import React from 'react'

function ContactDetails(props) {
    console.log(props.location);
    return (
        <div class="card" style={{width:400}}>
             <img src="https://www.w3schools.com/bootstrap4/img_avatar6.png" alt="Card image" style={{width:'100%'}} />
            <div class="card-body">
                 <h4 class="card-title">Jane Doe</h4>
                    <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
            </div>
   
        </div>
    )
}

export default ContactDetails
