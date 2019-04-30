import React , {Component} from 'react';
import Cards from '../components/Cards';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
 render() {

   return (
       <div className="container-fluid">
           <div className="container">
                <div className="row">
                    <button onClick={this.addCard} className="btn btn-outline-info d-block mx-auto mt-5">Add Cards</button>
                    <div id="Cards" className="col-xl-12">
                            <Cards/>
                    </div>
                </div>
           </div>
       </div>
   )
 }
 addCard = () => {
     // document.getElementById("Cards").
 }
}
export default App;
