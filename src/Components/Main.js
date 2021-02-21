import React from 'react';
import Style from './main.module.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                squares: Array(9).fill(null), //массив элементов игового поля
                count: 1, // счетчик
                style: Style.squareItem,
                cross: Style.cross,
                zero: Style.zero
            }
    }
    //функция проверяющая условия победы;
    isWinner = () => {
        let winLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 3]
        ]

        let elem = this.state.count % 2 ===0 ? 'X' : 'O';
        for(let i = 0; i < winLine.length; i++){
            let currentLine = winLine[i];
            if(this.state.squares[currentLine[0]] === elem
                && this.state.squares[currentLine[1]] === elem
                && this.state.squares[currentLine[2]] === elem
            ){
                alert(elem + ' Win!!!');
                setTimeout(() => {
                    this.setState({squares: Array(9).fill(null)});
                    this.setState({count: 0});
                },3000);

            }
        }
    }



    // функция событий реагирующая на действия игрока(ков);
    clickHandler = (e) => {
        let data = e.target.getAttribute('data');
        /*let item = document.getElementById(this.state.squares[data]).className;
        console.log(item);*/
        let numberSquares = this.state.squares;
            if(numberSquares[data] === null){
                if(this.state.count % 2 ===0){
                    numberSquares[data]= 'X';
                }
                else {
                    numberSquares[data] = 'O';
                }
                this.setState({count: this.state.count +1});
                this.setState({squares: numberSquares});
            }
        else{
            alert('ошибка');
        }
        this.isWinner();


    }

    render() {
        return (
            <div className={Style.main}>
                <div className={Style.wrapper}>
                    <div className={Style.playingField}>
                        <div className={this.state.style} data = '0' id = '1'  onClick={this.clickHandler}>{this.state.squares[0]}</div>
                        <div className={this.state.style} data = '1' id = '2'  onClick={this.clickHandler}>{this.state.squares[1]}</div>
                        <div className={this.state.style} data = '2' id = '3'  onClick={this.clickHandler}>{this.state.squares[2]}</div>
                        <div className={this.state.style} data = '3' id = '4'  onClick={this.clickHandler}>{this.state.squares[3]}</div>
                        <div className={this.state.style} data = '4' id = '5'  onClick={this.clickHandler}>{this.state.squares[4]}</div>
                        <div className={this.state.style} data = '5' id = '6'  onClick={this.clickHandler}>{this.state.squares[5]}</div>
                        <div className={this.state.style} data = '6' id = '7'  onClick={this.clickHandler}>{this.state.squares[6]}</div>
                        <div className={this.state.style} data = '7' id = '8'  onClick={this.clickHandler}>{this.state.squares[7]}</div>
                        <div className={this.state.style} data = '8' id = '9'  onClick={this.clickHandler}>{this.state.squares[8]}</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;

