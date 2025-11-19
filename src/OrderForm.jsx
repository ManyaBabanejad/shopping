import React, { useState } from "react";
import  loadingGif from "./animation/loading.gif"; 

const OrderForm = ({ closeModal, totalPrice , clearCart }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !phone || !address) {
 
      alert("لطفاً همه فیلدها را پر کنید!")
      
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(`سفارش ثبت شد!\nنام: ${name}\nشماره: ${phone}\nآدرس: ${address}`);
      clearCart()
      closeModal();
    }, 3000);
  };

  return (
    <div className="modal">
      <h2>فرم ثبت سفارش</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>نام:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
        </div>
        <div>
          <label>شماره تلفن:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
           
          />
        </div>
        <div>
          <label>آدرس:</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
           
          />
        </div>
        <h3>جمع کل: {totalPrice} تومان</h3>
        {isLoading && (
          <div className="gif-loader">
            <img src={loadingGif} alt="در حال بارگذاری..." />
          </div>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "...در حال ثبت سفارش" : "ثبت سفارش"}
        </button>
        <button type="button" onClick={closeModal} disabled={isLoading}>
          بستن
        </button>


      </form>
    </div>
  );
};

export default OrderForm;
