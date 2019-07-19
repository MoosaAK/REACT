import React from 'react';

function AnalogClock(props) {
    console.log(props.time);

    let time = new Date(props.time)



    let clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 2000,
        borderStyle: 'dotted',
        borderColor: 'black',


    }

    let secondHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: "40%",
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg',
        transformOrigin: ' 0% 0%',
        backgroundColor: 'red'

    }

    let minuteHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: "40%",
        height: 3,
        transform: 'rotate(' + ((time.getMinutes() / 60) * 360 - 90).toString() + 'deg',
        transformOrigin: ' 0% 0%',
        backgroundColor: 'grey'
    }

    let hourHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: "25%",
        height: 2,
        transform: 'rotate(' + ((time.getHours() / 60) * 360 - 90).toString() + 'deg',
        transformOrigin: ' 0% 0%',
        backgroundColor: 'grey'
    }



    return (
        <div style={clockContainer}>
            {/* <h1>ANALOG CLOCK</h1> */}

            <div style={secondHand}></div>
            <div style={minuteHand}></div>
            <div style={hourHand}></div>


        </div>
    )
}
export default AnalogClock;