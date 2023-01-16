import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Wynwood.css";

const Wynwood = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1593839745217-d514b8821450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
    "https://images.unsplash.com/photo-1621369929981-a2ca4fa55f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1608135003575-9b587f3b0cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1529326353831-df2fd0f44a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  ];
  return (
    <div className="wynwood">
      <Slider imgArr={imgArr} />
      <h2>Wynwood</h2>
      <div>
        <p>
          Wynwood is an eclectic district in the urban core of Miami, Florida.
          It is home to art galleries, retail stores, antique shops, eclectic
          bars, artisanal eateries and one of the largest open-air street-art
          installations in the world. Throughout the mid-to-late 1900s, Wynwood
          was an enclave for Caribbean immigrants and home to Miami’s Garment
          District. Following a decade of economic exodus and depression, in the
          early 2000s, forward thinking developers and property owners
          rehabilitated neglected warehouses, shuttered factories, and other
          unused buildings, transforming them into the innovative businesses
          that are visible today. However, it is street art that helped spark
          Wynwood’s renaissance. Since the introduction of Second Saturday Art
          Walk and the arrival of Art Basel (2002), the influence and relevance
          of the arts community in Wynwood has become undeniable. Artists from
          around the world have sought inspiration in the area’s windowless
          facades and used them as canvases to showcase their work, leading to
          the vivid murals that adorn the district. Today, Wynwood is recognized
          globally as a premier destination for art, fashion, innovation and
          creative enterprise. It is one of the largest and most prominent
          creative communities in the United States, and where a new generation
          of creative and entrepreneurs want to live, work, eat, play and learn.
        </p>
      </div>
    </div>
  );
};

export default Wynwood;
