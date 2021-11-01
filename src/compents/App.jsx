import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Randall Hammond"},
            {title: "Where the Dogs At", author: "Rashad Hammond"},
            {title: 'What Are You Doing', author: 'Anthony Racks'}
        ]
        this.state = {
            bookNumber: 1
        };

    }
    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber ++;
        if (tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPerviousBook = () => {

        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --; 
        if(tempBookNumber <0){
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }



    render(){
        return(
            <div className= "container-fluid">
                <TitleBar/>
             <div className="row">
                    <div className="col-md-4">

                         {/* Button here to move to the pervious book viewed  */}
                         <button onClick= {this.goToPerviousBook}>Pervious Book</button>
                     </div>

                     <div className="col-md-4">
                         {/*display book with cover here  */}
                         <h1>{this.books[this.state.bookNumber].title}</h1>
                         <h4>{this.books[this.state.bookNumber].author}</h4>
                      </div>

                     <div className="col-md-4">
                        {/* Button here to move to the pervious book viewed  */}
                        <button onClick={this.goToNextBook}> Next Book</button>
                     </div>

                </div>
                
             </div>
        )
    }
}

export default App;