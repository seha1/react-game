import React from 'react';
import Style from './main.module.css';


class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={Style.main}>
                <div className={Style.wrapper}>
                    <div className={Style.playingField}>
                <div className={Style.squareItem} id = '1' data = '1'>1</div>
                <div className={Style.squareItem} id = '2' data = '2'>2</div>
                <div className={Style.squareItem} id = '3' data = '3'>3</div>
                <div className={Style.squareItem} id = '4' data = '4'>4</div>
                <div className={Style.squareItem} id = '5' data = '5'>5</div>
                <div className={Style.squareItem} id = '6' data = '6'>6</div>
                <div className={Style.squareItem} id = '7' data = '7'>7</div>
                <div className={Style.squareItem} id = '8' data = '8'>8</div>
                <div className={Style.squareItem} id = '9' data = '9'>9</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;

