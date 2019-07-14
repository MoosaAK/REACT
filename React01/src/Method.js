import React, { Component } from 'react';
import './App.css';


class Method extends Component{
    myFaceboockLink(){
        return 'https://www.facebook.com/moosaak.ak.5'
    }

    facebookUser(){
        return 'Moosa A.K'
    }

    render(){
        return(
            <div>
                <p>
                    My Facebook Id is: <a href={this.myFaceboockLink()} id="MAK">{this.facebookUser()}</a> 
                </p>
            </div>
        )
    }
}
export default Method;