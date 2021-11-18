import React from "react";import { Card, CardImg,CardText, CardBody,CardTitle } from 'reactstrap';


   
  function RenderTicket({ticket,onClick}){
        return(
            <Card onClick = {()=>onClick(ticket.id)}> 
                <CardImg top src={ticket.image} alt ={ticket.name}/>
                  <CardBody>
                <CardTitle>{ticket.name}</CardTitle>
                <CardText>{ticket.description}</CardText>
              </CardBody>
            </Card>
            )

        }


    const ETicket = (props)=>{

        const ticket = props.tickets.map((ticket) => {
            return(
                <div key ={ticket.id}className="col-12 col-md-5 m-1">
                 <RenderTicket ticket={ticket} onClick={props.onClick}></RenderTicket>
                </div>
            )
        });

            return(
            
                <div className="container">
                <div className="row">
                    {ticket}
                </div>
               </div>
            )
      
      
    }
    
       

    


export default ETicket;