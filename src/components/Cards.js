import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Cards extends Component {
    state = {
        color:randomColor(),
    };

    render() {
        return (
            <div className="card w-25 text-center">
                <div className="card-title mt-3">
                    <h5 style={this.state}> <b>Hello World!</b></h5>
                </div>
                <div className="card-body">
                    <button className="btn btn-outline-danger" onClick={this.handleClick}>
                        Change color
                    </button>
                </div>

            </div>
        )
    }

    handleClick = () => {
        this.setState({
            color: randomColor()
        })
    };
}
let randomColor = () =>{
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};
export default Cards;
