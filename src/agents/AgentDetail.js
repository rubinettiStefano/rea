import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import { useParams } from 'react-router-dom';
import Agent from "./Agent";
import House from "../houses/House";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class AgentDetail extends React.Component
{
    componentDidMount()
    {
        let id = this.props.match.params.id;
        $.getJSON("/api/agents/"+id, (data) => this.setState({loaded:true,agent:data,error:false}))
        .fail((response) => {
            
            let stampaErrore = response.status + " " +response.responseText;
            
            this.setState({loaded:true, error:stampaErrore})
         } );
    }

  constructor(props)
  {
      super(props);
      this.state = {loaded:false,error:false}
  }

 
  render()
  {

    if(!this.state.loaded)
        return (<div></div>);

    if(this.state.loaded && this.state.error)
        return (<div>{this.state.error}</div>);


    return(

      <div>
        <div className="flex flex-wrap mt-20">
          <div className="w-[20%] h-[20%] flex justify-center mt-5">
            <Agent detail="true" agent={this.state.agent} />
          </div>
          <div className="w-[75%] h-[600px]">
            <h3 className="text-center">Case Gestite</h3>
            <div className="border-emerald-950 border-2 rounded-lg p-5">
              <div className="flex justify-evenly flex-wrap">
                {this.state.agent.houses.map(house => <House house={house} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }


}

export default withRouter(AgentDetail);