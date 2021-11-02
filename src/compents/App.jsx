import React, {Component} from 'react';
import './App.css'
import BookViewer from './BookViewer/BookViewer';
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

    goToPreviousBook = () => {

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
                <BookViewer book={this.books[this.state.bookNumber]}  nextBook={ this.goToNextBook}  previousBook={this.goToPreviousBook} />
                
             </div>
        )
    }
}

export default App;