// import { async } from '@firebase/util';
import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Razorpay() {
  const [amount, setamount] = useState('');
  const navigate = useNavigate();
  const cancelHandle = () => {
    navigate("/Home")
  }


//   const rzp = new window.Razorpay({});
// rzp.createPayment(Option); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      let options = {
        key: "rzp_test_eS6Pkl8qqMfjgQ",
        key_secret: "iYtA5jCl0WLI5waxaYrRgLpk",
        amount: amount * 100,
        currency: "INR",
        name: "Transfer International",
        description: "for testing purpose",
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          navigate("/Netflix")
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            transactionid: response.razorpay_payment_id,
            transactionamount: amount,
          }
          console.log(values);

          updatePaymentOnServer(response.razorpay_payment_id, response.razorpay_order_id, "paid");

          Axios.post('http://localhost:8080/api/orders', values)
            .then(res => { alert("Success") })
            .catch(e => console.log(e))


        },
        prefill: {
          name: "Enter-10",
          email: "Enter-10@gmail.com",
          contact: "8412867582"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      Axios.post('http://localhost:8080/api/orders', { amount: amount })
        .then(res => {
          options.order_id = res.data.id;
          options.amount = res.data.amount;
            console.log(options)
            const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        })
        .catch(e => console.log(e))


    }   
    function updatePaymentOnServer(payment_id, order_id, status) {
      Axios.post('http://localhost:8080/api/updateorders', { payment_id: payment_id, order_id: order_id, status: status })
        .then(res => {
  
          console.log("payment Successfullllll");
        })
        .catch(e => console.log(e))
      console.log("sommmmmeething went wrong!!!!!!!!")
    }
  }
  
  return (
    <div className="razorpay">
      <h2>Razorpay Payment </h2>
      <br />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={cancelHandle}>Cancel</button>
    </div>
  )
}