/* eslint-disable */
import React from "react";
import "./tstack.css";
import c from "./../../images/c_lang.png";
import cpp from "./../../images/cpp_lang.png";
import py from "./../../images/py_lang.png";
import hml from "./../../images/html_lang.png";
import cs from "./../../images/css_lang.png";
import js from "./../../images/js_lang.png";
import dj from "./../../images/dj_lang.png";
import rjs from "./../../images/react_lang.png";
import mll from "./../../images/ml_lang.png";
import jav from './../../images/java_lang.png'

const Tstack = () => {
  return (
    <section id="tstack">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container tstack_container">
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={c} alt="C Logo"></img>
          </div>
          <h3>C</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={cpp} alt="C++ Logo"></img>
          </div>
          <h3>C++</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={py} alt="Python Logo"></img>
          </div>
          <h3>Python</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={js} alt="Javascript Logo"></img>
          </div>
          <h3>JS</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image jav">
            <img src={jav} alt="Javascript Logo"></img>
          </div>
          <h3>Java</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image hml">
            <img src={hml} alt="HTML Logo"></img>
          </div>
          <h3>HTML</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={cs} alt="CSS Logo"></img>
          </div>
          <h3>CSS</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={dj} alt="Django Logo"></img>
          </div>
          <h3>Django</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={rjs} alt="ReactJS Logo"></img>
          </div>
          <h3>ReactJs</h3>
        </article>
        <article className="tstack_item">
          <div className="tstack_item-image">
            <img src={mll} alt="ML Logo"></img>
          </div>
          <h3>Machine Learning</h3>
        </article>
      </div>
    </section>
  );
};

export default Tstack;
