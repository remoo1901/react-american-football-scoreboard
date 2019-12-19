//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

 const [lionsCount, lionsSetCount] = useState(0);
 const [tigersCount, tigersSetCount] = useState(0);



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> { lionsCount + 32}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ tigersCount + 32}</div>  
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() =>{ lionsSetCount(lionsCount + 7)}} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => { lionsSetCount(lionsCount + 3)}} >Home Field Goal</button>
          
            
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=> { tigersSetCount(tigersCount + 7)}} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> { tigersSetCount(tigersCount + 3)}} >Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;




 /*
 const lionsTD = () => {
  lionsSetCount(lionsCount + 6);
 }

 const lionsFG = () => {
  lionsSetCount(lionsCount + 3);
}


 const tigerTD = () => {
  tigersSetCount(tigersCount + 6);
 }

 const tigerFG = () => {
  tigersSetCount(tigersCount + 3);
 }

  const reset = () => {
   lionsSetCount(0)
   tigersSetCount(0)

 }  */
