import React from "react";
import "./Intro.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Star from "./stars/Star";
const Intro = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <>
      <div className="intobg">
        <Star />
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span className="neon">
                <Typewriter
                  words={["Hello Stranger"]}
                  cursor
                  cursorStyle="❤️️"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={4000}
                  onLoopDone={handleDone}
                />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <span className="neon">I am very glad to see you 😄</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <span className="neon">
                Are you looking for quality service to improve your business 😎
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: "30px", color: "white" }}>
                <NavLink activeClassName="active" to="/home">
                  <button className="btn" type="button" name="button">
                    <h4 class="neon1"> Lets visit CODENRS</h4>
                  </button>
                </NavLink>
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};

export default Intro;
