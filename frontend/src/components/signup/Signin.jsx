import React, {useState} from 'react'
import "./Signup.css";
import HeadingCompo from "./HeadingCompo";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Signin = () => {
  const dispatch=useDispatch();
  const history=useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // const submit = async (e) => {
  //   e.preventDefault();
  //   await axios.post('http://localhost:1000/api/v1/signin',inputs).then((res) => {
  //     console.log(res.data.others._id);
  //     sessionStorage.setItem("id",res.data.others._id);
  //     dispatch(authActions.login());
  //     history('/todo');
  //   });
  // }
  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:1000/api/v1/signin',inputs)
      .then((res) => {
        console.log(res.data.others._id);
        sessionStorage.setItem("id",res.data.others._id);
        dispatch(authActions.login());
        history('/todo');
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <HeadingCompo first='Sign' second='In'/>
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                onChange={change}
              />
            <button className="btn-signup p-2" onClick={submit}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin