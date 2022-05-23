import React from "react";
import {start as randomlineStart, stop as randomlineStop} from './sketches/randomline.js';
import {start as joydivisionStart, stop as joydivisionStop} from './sketches/joydivision.js';
import {start as simplexStart, stop as simplexStop} from './sketches/simplex.js';
import {start as simplexoctavesStart, stop as simplexoctavesStop} from './sketches/simplexoctaves.js';
import {start as start2d, stop as stop2d} from './sketches/2d.js';
import {start as simplex2dStart, stop as simplex2dStop} from './sketches/simplexoctaves2d.js';

let sketches = {
  randomline: {
    start: randomlineStart,
    stop: randomlineStop
  },
  joydivision: {
    start: joydivisionStart,
    stop: joydivisionStop
  },
  simplex: {
    start: simplexStart,
    stop: simplexStop
  },
  simplexoctaves: {
    start: simplexoctavesStart,
    stop: simplexoctavesStop
  },
  '2d': {
    start: start2d,
    stop: stop2d
  },
  'simplexoctaves2d': {
    start: simplex2dStart,
    stop: simplex2dStop
  }
}

export default class CanvasSlide extends React.Component {
  componentDidMount() {
    const canvas = document.createElement("canvas");

    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", window.innerWidth);
    canvas.style.position = "static";
    canvas.style.top = 0;
    canvas.style.left = 0;

    this.canvas = canvas;
    this._output.appendChild(canvas);

    document.body.classList.add("show-controls");

    let {controls, sketch} = this.props;
    sketches[sketch].start(canvas, controls);
  }

  componentWillUnmount() {
    sketches[this.props.sketch].stop();
    this._output.removeChild(this.canvas);
    document.body.classList.remove("show-controls");
  }

  render() {
    return <div ref={el => (this._output = el)} />;
  }
}
