import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Navbar from "./navbar/Navbar";
import AllHouses from "./houses/AllHouses";
import AllAgents from "./agents/AllAgents";
import AgentDetail from "./agents/AgentDetail";
import HouseDetail from "./houses/HouseDetail";
import NewHouse from "./houses/NewHouse";
import NewAgent from "./agents/NewAgent";

class App extends React.Component
{
  constructor(props)
  {
      super(props);
  }

 
  render()
  {


    return(

      
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Homepage />} />
                  <Route path="/agents" element={<AllAgents />} />
                  <Route path="/houses" element={<AllHouses />} />
                  <Route path="/agents/:id" element={<AgentDetail />} />
                  <Route path="/houses/:id" element={<HouseDetail />} />
                  <Route path="/newhouse" element={<NewHouse/>} />
                  <Route path="/newagent" element={<NewAgent/>} />
              </Route>
            </Routes>
          </BrowserRouter>

        </div>

    );

  }


}

export default App;