import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import $ from 'jquery';


class Agent extends React.Component
{
 

  constructor(props)
  {
      super(props);

      this.state = props.agent;
  }

  handleChange = (e) =>
  {
        let newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
  }

  handleSubmit = (e) =>
  {
        e.preventDefault();

        var settings = {
            "url": "/api/agents/"+this.state.id,
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(this.state)
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });

        this.setState({ToModifyAll:false});
  }
 
  create = (e) =>
  {

        let toCreate = this.state;

        toCreate.agent_id = this.props.agent_id;
        var settings = {
            "url": "/api/agents",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(toCreate)
          };
          
          $.ajax(settings).done(function (response) {
            window.location.replace("/agents");
          }).fail(()=>this.setState({error:true}));

         
  }

  delete = (e) =>
  {
    var settings = {
      "url": "/api/agents/"+this.state.id,
      "method": "DELETE",
      "timeout": 0,
      "headers": {
      "Content-Type": "application/json"
      }
    };
    
    $.ajax(settings).done(() => {
      this.props.notifyDelete(this.state.id)
    }).fail(()=> alert("NO"));
  }

 
  render()
  {
    // CARD CON MODIFICA ALLAGENTS
    if(this.state.ToModifyAll)
    return(
        <div className="card p-2" style={{width:"12rem"}}>
          <div className="flex justify-around">
          <input type="text" name="img_url" value={this.state.img_url} placeholder="Inserire Url Immagine" onChange={this.handleChange} />
          </div> 
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <h5 className="card-title">
                  <input type="text" name="name" value={this.state.name} placeholder="Inserire Nome" onChange={this.handleChange} />, 
                  <input type="text" name="surname" value= {this.state.surname}  placeholder="Inserire Nome" onChange={this.handleChange} />
                </h5>
                <input type="submit" value="Salva cambiamenti" /> 
            </form>
          </div>
        </div>
    );

    
    // CARD MODICA DETTAGLI
    if(this.state.ToModifyDetail)
    return(
        <div className="card p-2" style={{width:"12rem"}}>
          <div className="flex justify-around">
            <input type="text" name="img_url" value={this.state.img_url} placeholder="Inserire Url Immagine" onChange={this.handleChange} />
          </div> 
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <h5 className="card-title">
                  <input type="text" name="name" value={this.state.name} placeholder="Inserire Nome" onChange={this.handleChange} />, 
                  <input type="text" name="surname" value= {this.state.surname}  placeholder="Inserire Cognome" onChange={this.handleChange} />
                </h5>
                <p><input type="text" name="biography" value= {this.state.biography}  placeholder="Inserire Biografia" onChange={this.handleChange} /></p>
                <span><input type="text" name="gender" value= {this.state.gender}  placeholder="Inserire Sesso" onChange={this.handleChange} /></span>
                <input type="submit" value="Salva cambiamenti" /> 
            </form>
          </div>
        </div>
    );

    // CARD NEW AGENT
    if(this.props.wantToCreate)
    return(
        <div className="card p-2" style={{width:"12rem"}}>
          <div className="flex justify-around">
          <input type="text" name="img_url"  placeholder="Inserire Url Immagine" onChange={this.handleChange} />
          </div> 
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <h5 className="card-title">
                  <input type="text" name="name" placeholder="Inserire Nome" onChange={this.handleChange} />, 
                  <input type="text" name="surname" placeholder="Inserire Cognome" onChange={this.handleChange} />
                </h5>
                <input type="number" name="salary" placeholder="Inserire Salario" onChange={this.handleChange} />
                <input type="date" name="dob" placeholder="Inserire Data di Nascita" onChange={this.handleChange} />
                <p><textarea type="text" name="biography" placeholder="Inserire Biografia" onChange={this.handleChange} /></p>
                <span><input type="text" name="gender" placeholder="Inserire Genere" onChange={this.handleChange} /></span>
                <input type="button" value="Crea nuovo agente" onClick={this.create}/>
            </form>
          </div>
        </div>
    );
    // CARD AGENT DETAIL
    if(this.props.detail)
    return(
      <div className="card p-2" style={{width:"12rem"}}>
        <input type="button" value="modifica" onClick={() => this.setState({ToModifyDetail:true})} /><br/>
        <div className="flex justify-around">
          <img className="w-[100px] h-[100px] rounded-lg" src={this.state.img_url} alt="" />
        </div> 
        <div className="card-body">
          <h5 className="card-title">{this.state.name} {this.state.surname}</h5>
          <p>{this.state.biography}</p>
          <span>{this.state.gender}</span>
        </div>
      </div>
    );


    // CARD ALL AGENTS
    return(
      <div className="card p-2" style={{width:"12rem"}}>
        <input type="button" value="cancella" onClick={this.delete} /><br/>
        <div className="flex justify-around items-start">
          <img className="w-[100px] h-[100px] rounded-lg" src={this.state.img_url} alt="" />
          <button onClick={() => this.setState({ToModifyAll:true})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </button>
          <Link to={"/agents/"+this.state.id} >
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </button>
          </Link>
        </div> 
        <div className="card-body">
            <h5 className="card-title">{this.state.name} {this.state.surname}</h5>
        </div>
      </div>
    );

  }

}

export default Agent;