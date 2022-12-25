import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Clear, deleteFromCaret } from "../RTK/slices/sliceCart";

const Cart = () => {
  const carts = useSelector((state) => state.cartSlice.Carts);
  const dispatch = useDispatch();
  const totalPrice=carts.reduce((acc,cart)=>{
    acc+=cart.price*cart.quntaty
    return acc
  },0)
  return (
    <Container className="py-5">
      <h2>Hello In Cart</h2>
      <Button variant="primary" onClick={() => dispatch(Clear())}>
        Clear Cart
      </Button>
      <h2>Total Price :{totalPrice.toFixed(2)}$</h2>
      <Table striped bordered hover variant="dark" className="my-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quntaty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.title}</td>
              <td>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={cart.image}
                />
              </td>
              <td>{cart.price}$</td>
              <td>{cart.quntaty}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCaret(cart))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
