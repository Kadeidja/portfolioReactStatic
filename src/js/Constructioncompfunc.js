import { click } from "@testing-library/user-event/dist/click";

const btnSwitch = document.getElementById("switchBtn");
const scndTtl = document.getElementById('constrTtl');
const msg = document.getElementById('constrMsg');
    
//import React, { useEffect, useState, useRef } from "react";
/*
useEffect(() => {
    // Define your async function
    const constructionFunc = async () => {
        btnSwitch.preventDefault();
        btnSwitch.addEventListener('click', function(){
            console.log("bouton cliqué");
            for (const vertical in verticalTtl) {
                    vertical.innerText=`In Progress`;
            }
            scndTtl.innerText = "Sorry";
            msg.innerText = `This portfolio is not finished...`
        });
        
    }
  
    // Call the async function
    constructionFunc();
  }, []);

const btnSwitch = document.getElementById("switchBtn");
    //const verticalTtl = document.getElementsByClassName('divSectionTtl').h1;
    const scndTtl = document.getElementById('constrTtl');
    const msg = document.getElementById('constrMsg');
    
function constructionFunc(btnSwitch){
    btnSwitch.preventDefault();
    btnSwitch.addEventListener('click', function(){
        console.log("bouton cliqué");
        for (const vertical in verticalTtl) {
                vertical.innerText=`In Progress`;
        }
        scndTtl.innerText = "Sorry";
        msg.innerText = `This portfolio is not finished...`
    });
    
}
constructionFunc();

function handleClick(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    scndTtl.innerText = "Sorry";
  };
  handleClick();*/

 /* 
  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(<Toggle />);

*/
//import React from 'react';


//const scndTtl = document.getElementById('constrTtl');
/*
  const sayHello = () => {
    console.log('Clicked')
  };
sayHello();*/

  function sayHelloFunc(element,event){
    console.log('Clicked function');
    //scndTtl.innerText = "Sorry";
    //msg.innerText = `This portfolio is not finished...`
        
  };
  sayHelloFunc(btnSwitch, click);

  