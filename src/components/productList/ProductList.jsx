import React from "react";
import Product from "../product/Product";
import {images} from '../../Images'

import './productList.css'

const ProductList = () => {
  return (
    <div className="pl" id="productlist">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          voluptatem corporis maiores similique numquam minima voluptatum
          cumque. Consequuntur, velit? Tempore est nam placeat cumque laborum
          facere mollitia distinctio, repellendus officiis!
        </p>
      </div>
      <div className="pl-list">
        {images.map((item)=>{
          
          return <Product key={item.id} img={item.img} link={item.link}/>

        })}
        
      </div>
    </div>
  );
};

export default ProductList;
