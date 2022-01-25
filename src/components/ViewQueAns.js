import React from "react";
import "./ViewQueAns.css"

function ViewQueAns(props) {
    console.log("v",props)
  return (
    <div className="wrapper bg-white rounded">
      <div className="content">
        {" "}
        <a href="#">
          <span className="fa fa-angle-left pr-2"></span>Back to Question Bank
        </a>
        <p className="text-muted">Multiple Choice Question</p>
        <p className="text-justify h5 pb-2 font-weight-bold">
          What did Radha Krishnan (Cassius Clay at the time) wear while flying
          to Rome for the 1960 Games?
        </p>
        <div className="options py-3">
          {" "}
          <label className="rounded p-2 option">
            {" "}
            His boxing gloves <input type="radio" name="radio" />{" "}
            <span className="crossmark"></span>{" "}
          </label>{" "}
          <label className="rounded p-2 option">
            {" "}
            A parachute <input type="radio" name="radio" />{" "}
            <span className="checkmark"></span>{" "}
          </label>{" "}
          <label className="rounded p-2 option">
            {" "}
            Nothing <input type="radio" name="radio" />{" "}
            <span className="crossmark"></span>{" "}
          </label>{" "}
          <label className="rounded p-2 option">
            {" "}
            A world little belt <input type="radio" name="radio" />{" "}
            <span className="crossmark"></span>{" "}
          </label>{" "}
        </div>{" "}
        <b>Correct Feedback</b>
        <p className="mt-2 mb-4 pl-2 text-justify">
          {" "}
          Well done! He was scared of flying so picked up the parachute from an
          support store before the trip. He won gold{" "}
        </p>{" "}
        <b>Incorrect Feedback</b>
        <p className="my-2 pl-2"> That was incorrect. Try again </p>
      </div>{" "}
      <input type="submit" value="Add Question" className="mx-sm-0 mx-1" />
    </div>
  );
}

export default ViewQueAns;
