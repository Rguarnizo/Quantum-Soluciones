import React from "react";
import "../Styles/imagesCarousel.scss";

const ImagesCarousel = (props) => {
  // console.log(props);
  return (
    <div className="container">
      {/* {props.mobile ? (
        <>
          <input
            type="radio"
            name="slider"
            id="item-1"
            disabled
            defaultChecked
          />
          <input type="radio" name="slider" id="item-2" disabled />
          <input type="radio" name="slider" id="item-3" disabled />
        </>
      ) : (
        <>
          <input type="radio" name="slider" id="item-1" defaultChecked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
        </>
      )} */}
      <input type="radio" name="slider" id="item-1" defaultChecked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />

      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img
            src="https://static.wixstatic.com/media/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1440,h_672,al_c,q_85,usm_0.66_1.00_0.01/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.webp"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img
            src="https://static.wixstatic.com/media/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1440,h_672,al_c,q_85,usm_0.66_1.00_0.01/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.webp"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img
            src="https://static.wixstatic.com/media/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1440,h_672,al_c,q_85,usm_0.66_1.00_0.01/670b16_9aebd7aac8c04b848c9c529d065d3790~mv2_d_6000_3376_s_4_2.webp"
            alt="song"
          />
        </label>
      </div>
    </div>
  );
};

export default ImagesCarousel;
