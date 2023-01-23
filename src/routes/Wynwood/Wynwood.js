import React from "react";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import "./Wynwood.css";

const Wynwood = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1593839745217-d514b8821450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
    "https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1621369929981-a2ca4fa55f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1560319469-77fc0e9c39c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1529326353831-df2fd0f44a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  ];
  let infoArr = ["Wynwood", "One of the most happening districts in Miami"];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div className="wynwood">
      <Slider data={props} />
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
      <Footer />
    </div>
  );
};

export default Wynwood;

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);

//bubble up
//find its parent, index -1 divide by 2 and floor
//compare the value at that index to parent
//find what ones bigger, if last index is bigger then swap with parent
