import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class House extends React.Component
{


 
  constructor(props)
  {
      super(props);

      this.state = props.house;
  }




  handleChange = (e) =>
  {
        let newState = this.state;
        // e = evento generato del cambiamento del valore in una casellina
        //prendo nello stato l'attributo con lo stesso nome della casellina modificata
        newState[e.target.name] = e.target.value;

        this.setState(newState);//aggiorno lo stato

  }
 

  handleSubmit = (e) =>
  {
        e.preventDefault();//Non refreshare la pagina

        //manda il PUT

        var settings = {
            "url": "/api/houses/"+this.state.id,
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

        //riporta il render a quello di view
        this.setState({wantToModify:false});
  }

  create = (e) =>
  {

        let toCreate = this.state;

        toCreate.agent_id = this.props.agent_id;
        var settings = {
            "url": "/api/houses",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(toCreate)
          };
          
          $.ajax(settings).done(function (response) {
            window.location.replace("/houses");
          }).fail(()=>this.setState({error:true}));

         
  }

  delete = () =>
  {

    var settings = {
      "url": "/api/houses/"+this.state.id,
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

    if(this.state.wantToModify || this.props.wantToCreate)
        return(
            <div className="card" style={{width: "18rem"}}>
                <form onSubmit={this.handleSubmit}>
                {this.state.error ?  <h3 style={{color:"red"}}>PROBLEMA CASA, non è valida</h3> :""}
               <input type="text" name="imgUrl" value={this.state.imgUrl} placeholder="immagine" onChange={this.handleChange} />
                    <div className="card-body">
                        <h5 className="card-title">
                         <input type="text" name="address" value={this.state.address} placeholder="indirizzo" onChange={this.handleChange} />, 
                         <input type="text" name="city" value= {this.state.city}  placeholder="città" onChange={this.handleChange} />
                        </h5>
                        <p className="card-text">
                            <textarea name="description" value= {this.state.description}  placeholder="descrizione" onChange={this.handleChange} />
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Tipo: <input type="text" name="type" value={this.state.type}  placeholder="tipo" onChange={this.handleChange} /> </li>
                            <li className="list-group-item">Metri quadrati:<input type="number" name="area" value={this.state.area}  placeholder="area" onChange={this.handleChange} /></li>
                            <li className="list-group-item">Prezzo al m^2: <input type="number" name="smp" value={this.state.smp}  placeholder="prezzo al metro quadro" onChange={this.handleChange} /></li>
                        </ul>
                       {this.state.wantToModify ? <input type="submit" value="Salva cambiamenti" />: <input type="button" value="Crea nuova casa" onClick={this.create}/>}
                    </div>
                </form>
            </div>

        );


    return(
              <div className="card" style={{width: "18rem"}}>
                <input type="button" value="modifica" onClick={() => this.setState({wantToModify:true})} /><br/>
                <input type="button" value="cancella" onClick={this.delete} /><br/>
                  <img className="card-img-top" src={this.state.imgUrl} alt={{}} />
                  <div className="card-body">
                      <h5 className="card-title">{this.state.address}, {this.state.city}</h5>
                      <p className="card-text">
                          {this.state.description}
                      </p>
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">Tipo: {this.state.type}</li>
                          <li className="list-group-item">Metri quadrati: {this.state.area}</li>
                          <li className="list-group-item">Prezzo al m^2: {this.state.smp}</li>
                          <li className="list-group-item">Prezzo Totale: {this.state.totalPrice} €</li>
                      </ul>
                  </div>
              </div>
    );

  }


}

export default House;