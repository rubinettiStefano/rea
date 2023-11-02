import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import { useParams } from 'react-router-dom';
import House from "./House";
import Agent from "../agents/Agent";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class HouseDetail extends React.Component
{
    componentDidMount()
    {
        let id = this.props.match.params.id;
        $.getJSON("/api/houses/"+id, (data) => this.setState({loaded:true,house:data,error:false}))
        .fail((response) => {
            
            let stampaErrore = response.status + " " +response.responseText;
            
            this.setState({loaded:true,error:stampaErrore})
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
            <Agent agent={this.state.house.agent} />
            <House house={this.state.house} noModifica={true} />
      </div>

    );

  }


}

export default withRouter(HouseDetail);