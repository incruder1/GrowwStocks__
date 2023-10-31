'use client';
import React from "react";
import PrimarySearchAppBar from "../../components/Navbar";
import ProductDetail from "./ProductDetail"; // Import the new component

const Products = ({ params }) => {
  const symbol = params.product || "IBM";

  return (
    <div style={{display:'flex', width:'100vw', flexDirection:'column', flexWrap:'wrap'}}>
      <PrimarySearchAppBar />
      <ProductDetail symbol={symbol} /> {/* Use the new component and pass the symbol prop */}
    </div>
  );
};

export default Products;
