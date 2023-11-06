import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardData.js";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  const filteritems = (curitems) => {
    const updateitems = CardsData.filter((cur,index) => {
        return cur.category === curitems;
    });
    setCartData(updateitems);
};

  return (
    <>
        <section className="iteam_section mt-4 container">
          <h2 className="px-4" style={{ fontWeight: 400 , textAlign: 'center' }}>
            Grocery On The Way
          </h2> <br /><br />
          {/* <h6 className="text-center mb-2" style={{ fontWeight: 400, border: '2 solid black'  }}>
          Search Your Food
        </h6> */}
        <div className="btn-container d-flex justify-content-around mt-2">
          <button variant="primary" onClick={()=>setCartData(CardsData)}>All</button>
          <button variant="primary" onClick={()=>filteritems("Aata")}>Aata</button>
          <button variant="success" onClick={()=>filteritems("Biscuit")}>Biscuit</button>
          <button variant="danger" onClick={()=>filteritems("Dryfruits")}>Dryfruits</button>
          <button variant="primary" onClick={()=>filteritems("Ghee")}>Ghee</button>
          <button variant="primary" onClick={()=>filteritems("Chocalate")}>Chocalate</button>
        </div>
          <div className="row mt-2 d-flex justify-content-around align-items-center">
            {cartData.map((element, index) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="hove mb-4"
                  >
                    <Card.Img
                      variant="top"
                      className="cd"
                      src={element.imgdata}
                    />

                    <div className="card_body">
                      <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className="mt-2">{element.dish}</h4>
                        {/* <span>{element.rating}&nbsp;★</span> */}
                      </div>

                      <div className="lower_data d-flex justify-content-between ">
                        {/* <h5>{element.address}</h5> */}
                        <span>₹ {element.price}</span>
                      </div>
                      <div className="extra"></div>

                      <div className="last_data d-flex justify-content-between align-items-center">
                        <img src={element.arrimg} className="limg" alt="" />
                        <Button
                          style={{
                            width: "150px",
                            background: "#ff3054db",
                            border: "none",
                          }}
                          variant="outline-light"
                          className="mt-2 mb-2"
                          onClick={() => send(element)}
                        >
                          Add TO Cart
                        </Button>
                        <img src={element.delimg} className="laimg" alt="" />
                      </div>
                    </div>
                  </Card>
                </>
              );
            })}
          </div>
        </section>
      
    </>
  );
};

export default Home;
