import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery"
import Agent from "./Agent";
import { Link } from "react-router-dom";

class AllAgents extends React.Component
{

    componentDidMount()
    {
        $.getJSON("/api/agents", (data) => {this.setState({loaded:true,agents:data,agentsToShow:data}); console.log(data)});
    }

  constructor(props)
  {
      super(props);

      this.state = {loaded:false}
  }

  deleteAgent = (id) =>
 {
    let newStateAgent = this.state.agents;
      
    for(let agent of this.state.agents )
    {
          if(agent.flicker==undefined || agent.flicker==null)
            agent.flicker = true;
          else
            agent.flicker = !agent.flicker;
    }
    
    let spliceId = newStateAgent.findIndex(agent => agent.id === id)
    
    console.log(newStateAgent);
    newStateAgent.splice(spliceId, 1);

    this.setState({houses: newStateAgent, agentsToShow:newStateAgent});
 }
 
  render()
  {
    if(!this.state.loaded)
        return (<div></div>);

    return(
      <div className="p-10">
        <div className="flex justify-around flex-wrap">
        <div>
          <Link to="/newagent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> Aggiungi Nuovo Agente
          </Link>
        </div>
                {this.state.agents.map(agent => 

                        <div className="flex justify-center">
                          <Agent notifyDelete={this.deleteAgent} agent={agent} /> 
                        </div>

                )}
          
        </div>
      </div>
    );

  }


}

export default AllAgents;