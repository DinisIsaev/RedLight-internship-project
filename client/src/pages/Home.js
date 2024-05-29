import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import video from "../media/francesinhavid.mp4";
import image from "../media/francesinha.jpg";

function Home() {
  return (
    <>
      <div class="banner">
        <div class="banner-video">
          <video src={video} autoplay="true" loop="true" muted="true" />
        </div>
        <div class="banner-text">
          <p>By francesinha lovers</p>
          <p>to</p>
          <p>francesinha lovers</p>
        </div>
      </div>
      <p>test</p>
    </>
  );
}

export default Home;
