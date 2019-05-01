import React, {Component} from 'react';
import Cards from '../components/Cards';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    state = {
        countArray: []
    };
    handleClick = () => {
        // console.log(this.state.countArray);
        this.setState(oldState => ({
            countArray: [...oldState.countArray, +this.state.countArray.length],
        }));
    };

    render() {
        // console.log(this.state.countArray.length);
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="col-xl-12 my-5">
                        <button onClick={this.handleClick} className="btn btn-outline-info d-block mx-auto">Add
                            Cards {this.state.countArray.length <= 0 ? 0 : +this.state.countArray.length }
                        </button>
                    </div>
                    <div className="row">
                        {this.state.countArray.map((key) => {
                            return (
                                <Cards key={key}/>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    // addCard = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
}

export default App;
