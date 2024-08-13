import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products.map((product) => (
          // create responsive columns
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <h1>Latest Products</h1>
    </>
  );
};

export default HomeScreen;
