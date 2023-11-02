import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

class Homepage extends React.Component
{
 

  constructor(props)
  {
      super(props);
  }

 
  render()
  {


    return(

      <div>
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 h-screen p-5">
          <div className="row">
            <div className="col-5">
              <h1 className="">Chi siamo?</h1>
              <p>L’Agenzia Immobiliare RealEstate si pone sul mercato come un gruppo di qualificati agenti immobiliari, esperti nei servizi immobiliari e finanziari, in grado di fornire un servizio realmente competitivo, completo e personalizzato ai propri Clienti. La casa non è un semplice bene da intermediare, ma un valore che per la famiglia tradizionalmente si colloca ai primi posti. Pertanto vendere, comprare o affittare casa non è solo un affare, ma significa anche pensare ai propri cari, soddisfare esigenze abitative, pensare al presente ed anche al futuro.</p>
              </div>
              <div className="col-5">
              <h1>Contatti</h1>
              </div> 
              <div className="row">
                <div className="col-5">
                  <h1>Dove Siamo</h1>
                  <img src="/img/map.png" alt="" />
                </div>
              <div className="blue">Ciao</div>
            </div>
          </div>
        </div>
      </div>

    );

  }


}

export default Homepage;