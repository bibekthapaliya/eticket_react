import React,{ useState } from 'react';
import Eticket from './EticketComponent';
import {TICKETS} from '../shared/tickets';
import { Navbar,NavbarBrand } from 'reactstrap';

function  Main (){

const[tickets,setTicket]=useState(TICKETS);
const[selectedTicket,selectTicket]=useState(null);





const onTicketSelect=(ticketId)=>{
    selectTicket(ticketId)
}





  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ETicketing System</NavbarBrand>
        </div>
      </Navbar>
      <Eticket tickets= {tickets}
      onClick={(ticketId)=>onTicketSelect({ticketId})}/>
    </div>
)
};
  


 



export default Main;
