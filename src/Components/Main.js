import React from 'react';
import Style from './main.module.css';
import Sound from '../sound/sound.mp3';
import Win from '../sound/win.mp3';


class Main extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                squares: Array(9).fill(null), //массив элементов игового поля
                count: 1, // счетчик
                style: Style.squareItem,
                onOf: 1,
                color: ''
            }

            this.isMute = this.isMute.bind(this);
    }



    //функция проверяющая условия победы;
    isWinner = () => {
        // массив с выигрышными комбинациямиж
        let winLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // горизонтальные линии;

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],// вертикальные линии;

            [0, 4, 8],
            [6, 4, 2]// диогональные линии;
        ]
        let win = new Audio(Win);



            // проверка полей на выигрыш;
        let elem = this.state.count % 2 === 0 ? 'X' : 'O';
        for(let i = 0; i < winLine.length; i++){
            let currentLine = winLine[i];



            if(!this.state.squares.includes(null)){
                // вывод сообщениия о ничьей;
                setTimeout( () => {
                    alert('Игра завершилась ничьей!');
                },100);  // вывод сообщениия о ничьей;

                setTimeout(() => {
                    this.setState({squares: Array(9).fill(null)});
                    this.setState({count: 0});
                },2000);
                break;// обнуление данных в стейте;
            }


            if(this.state.squares[currentLine[0]] === elem
                && this.state.squares[currentLine[1]] === elem
                && this.state.squares[currentLine[2]] === elem
            ){
                //действия, при победе какой-либо каманды;
                if(this.state.onOf != 0){
                    win.play();
                }


                setTimeout( () => {
                    alert(elem + ' Win!!!');
                },100);  // вывод сообщениия о победе;

                setTimeout(() => {
                    this.setState({squares: Array(9).fill(null)});
                    this.setState({count: 0});
                },2000);
                break;// обнуление данных в стейте;
            }


        }
    }

    isMute = () => {
        let elem = document.getElementById('sound').value;
       this.setState((state) => {
            return {onOf: elem}
        });
        console.log(this.state.onOf + ' : ' + elem);

    }


    // функция событий реагирующая на действия игрока(ков);
    clickHandler = (e) => {
        let data = e.target.getAttribute('data');
        let sound = new Audio(Sound);
        /*let item = document.getElementById(this.state.squares[data]).className;
        console.log(item);*/
        let numberSquares = this.state.squares;
            if(numberSquares[data] === null){
                if(this.state.count % 2 ===0){
                    numberSquares[data]= 'X';
                    // музыка хода;
                    /*this.state.onOf === 1 ? sound.play() : sound.volume = 0;*/
                   if(this.state.onOf != 0){
                        sound.play();
                    }

                }
                else {
                    numberSquares[data] = 'O';
                    // музыка хода;

                    if(this.state.onOf != 0){
                        sound.play();
                    }


                }
                this.setState({count: this.state.count +1});
                this.setState({squares: numberSquares});
            }
        else{
            alert('ошибка');
        }
        this.isWinner();
    }

    isChange =() =>{
        let color = document.getElementById('color').value;
        this.setState({color: color})
        console.log(this.state.color);
        document.getElementById('main').style.backgroundColor = this.state.color;
        document.getElementById('sound').style.backgroundColor = this.state.color;
        document.getElementById('newGameButton').style.backgroundColor = this.state.color;
    }

    isNewGame =() => {
        setTimeout(() => {
            this.setState({squares: Array(9).fill(null)});
            this.setState({count: 0});
        },100);
    }


    render() {
        return (
            <div className={Style.main} id = 'main'>
                <div className={Style.wrapper}>
                    <div className={Style.header}>
                        <h1>tic tac toe</h1>
                    </div>
                    <div className={Style.field}>
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
                            <div className={Style.setting}>
                                <div className={Style.sound}>
                                    <span className={Style.span}>Sound</span><i>off</i><input type="range"  id = 'sound' onChange = {this.isMute} min = '0' max = '1' step = "1" /><i>on</i>
                                </div>
                                <div className={Style.color}>
                                    <span className={Style.span}>Color</span><input type="color" id= 'color' onChange={this.isChange} defaultValue= '#bfa479' />
                                </div>
                                <div className={Style.newGameButton} onClick={this.isNewGame} id = 'newGameButton'>
                                    <span>Start new game</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main;

