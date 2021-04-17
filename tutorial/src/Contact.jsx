import React, { useState } from "react";
const Contact = () => {
  const[data,setdata]=useState({
    name:"",
    phone:"",
    email:"",
    text:"",

  });
  const inputevent=(event)=>{
      const{name,value}=event.target;
      setdata((preval)=>{
        return{
          ...preval,
          [name]:value,
        };

      });

  };

  const formsubmit=(e)=>{
    e.preventDeafault();
  };


  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-sm-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={inputevent}
                  placholder="Arihant Jain"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="Phone Number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputevent}
                  placeholder="8855443322"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputevent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="text"
                  value={data.text}
                  onChange={inputevent}
                  rows="3"
                ></textarea>
              </div>
              <div className="dre">
              <input className="btn btn-outline-primary " type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
