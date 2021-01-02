import React from "react";
import ReactDOM from "react-dom";

import Card from './Cards';

import './index.css'
ReactDOM.render(
  <>
    <Card
      imgsrc="https://picsum.photos/id/1/200/300"
      title="GOT"
      sname="got"
      link="https://dendigital.denonline.in/Transaction/Home.aspx"
    />
    <Card
      imgsrc="https://picsum.photos/id/1/200/300"
      title="Dark"
      sname="dark"
      link="https://dendigital.denonline.in/Transaction/Home.aspx"
    />
    <Card
      imgsrc="https://picsum.photos/id/1/200/300"
      title="Umbrella"
      sname="umbrella"
      link="https://dendigital.denonline.in/Transaction/Home.aspx"
    />
  </>,

  document.getElementById("root")
);
