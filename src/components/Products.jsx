import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../RTK/slices/sliceCart";
import { fetchProduct } from "../RTK/slices/sliceProduct";
const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productSlice.products);
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <Container className="py-5">
      <Row>
        {productsData.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem",height:"970px",marginBottom:"10px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                 {product.price} $
                </Card.Text>
                <Card.Text>
                 {product.description}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
