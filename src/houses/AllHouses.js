import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery"
import House from "./House";
import { Link } from "react-router-dom";

class AllHouses extends React.Component
{

    componentDidMount()
    {
      $.getJSON("/api/houses", (data) => this.setState({loaded:true,houses:data,housesToShow:data}));
    }

  constructor(props)
  {
      super(props);

      this.state = {loaded:false}
  }


 deleteHouse = (id) =>
 {
    let newStateHouse = this.state.houses;
    
    for(let house of this.state.houses )
    {
          if(house.flicker===undefined || house.flicker==null)
            house.flicker = true;
          else
            house.flicker = !house.flicker;
    }
    
    let spliceId = newStateHouse.findIndex(house => house.id === id)
    
    console.log(newStateHouse);
    newStateHouse.splice(spliceId, 1);

    this.setState({houses: newStateHouse, housesToShow:newStateHouse});
 }

 search = (e) =>
 {

    let city= e.target.value.toLowerCase();

    for(let house of this.state.houses )
    {
          if(house.flicker===undefined || house.flicker==null)
            house.flicker = true;
          else
            house.flicker = !house.flicker;
    }

    let newHousesToShow = this.state.houses.filter(house => house.city.toLowerCase().includes(city));

    this.setState({housesToShow:newHousesToShow});

 }

  render()
  {
    if(!this.state.loaded)
        return (<div></div>);

    return(
      <div className="flex justify-center p-10">
        
        <div className="flex justify-around flex-wrap">
        <div>
          <Link to="/newhouse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> Aggiungi Nuova Casa
          </Link><br/>
          <input type="text" placeholder="Cerca per città" onChange={this.search} />
        </div>
          {this.state.housesToShow.map(house => <div className="p-4"><House key={house.flicker} notifyDelete={this.deleteHouse} house={house} /></div> )}
        </div>
      </div>

    );

  }


}

export default AllHouses;