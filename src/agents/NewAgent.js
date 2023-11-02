import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Agent from "./Agent";

class NewAgent extends React.Component
{
 
  constructor(props)
  {
      super(props);

      this.state = {
        agent:{
            "name": "",
            "surname": "",
            "salary": "",
            "img_url": "",
            "biography": "",
            "dob": "",
            "gender": ""
        }
      }
  }




  render()
  {
    return(
        <div className="p-8">
            <Agent agent={this.state.agent} wantToCreate={true} />
        </div>
    );
   

  }


}

export default NewAgent;