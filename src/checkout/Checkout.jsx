import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const textarea = form.textarea.value;
    const phone = form.phone.value;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      phone,
      textarea,
      service_id: _id,
      service: title,
      price: price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("👌 Order Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  console.log(service);
  const { title, _id, price, img } = service;
  return (
    <div>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="form-control">
            <label className="label"></label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="name"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              name="date"
              type="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label"></label>
            <input
              defaultValue={user?.phoneNumber}
              name="phone"
              type="phone"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label"></label>
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label"></label>
            <input
              defaultValue={"$" + price}
              type="text"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <textarea
              className="input input-bordered "
              name="textarea"
              id=""
              cols="30"
              placeholder="TextArea"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;
