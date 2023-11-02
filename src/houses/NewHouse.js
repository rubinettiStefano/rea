import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import House from "./House";

class NewHouse extends React.Component
{
 
  constructor(props)
  {
      super(props);

      this.state = {
        house:{
            "city": "",
            "address": "",
            "type": "",
            "smp": "",
            "area": "",
            "imgUrl": "",
            "description": ""
        },
        agent_id:""
      }
  }




  render()
  {
    return(
        <div className="p-8">
            <input type="number" name="agent_id" placeholder="Id dell'agente" onChange={(e) => this.setState({agent_id:e.target.value})} />
            <House agent_id={this.state.agent_id} house={this.state.house} wantToCreate={true} />

        </div>
    );
   

  }


}

export default NewHouse;