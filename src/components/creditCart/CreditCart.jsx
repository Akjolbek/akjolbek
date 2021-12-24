import React from "react"; 
import Card from "react-credit-cards"; 
import './CreditCart.css'; 
import SupportedCards from "./Credit"; 
import { Link } from "react-router-dom";
 
import { 
  formatCreditCardNumber, 
  formatCVC, 
  formatExpirationDate, 
  formatFormData 
} from "./utilits"; 
 
import "react-credit-cards/es/styles-compiled.css"; 
 
export default class App extends React.Component { 
  state = { 
    number: "", 
    name: "", 
    expiry: "", 
    cvc: "", 
    issuer: "", 
    focused: "", 
    formData: null 
  }; 
 
  handleCallback = ({ issuer }, isValid) => { 
    if (isValid) { 
      this.setState({ issuer }); 
    } 
  }; 
 
  handleInputFocus = ({ target }) => { 
    this.setState({ 
      focused: target.name 
    }); 
  }; 
 
  handleInputChange = ({ target }) => { 
    if (target.name === "number") { 
      target.value = formatCreditCardNumber(target.value); 
    } else if (target.name === "expiry") { 
      target.value = formatExpirationDate(target.value); 
    } else if (target.name === "cvc") { 
      target.value = formatCVC(target.value); 
    } 
 
    this.setState({ [target.name]: target.value }); 
  }; 
 
  handleSubmit = e => { 
    e.preventDefault(); 
    const { issuer } = this.state; 
    const formData = [...e.target.elements] 
      .filter(d => d.name) 
      .reduce((acc, d) => { 
        acc[d.name] = d.value; 
        return acc; 
      }, {}); 
 
    this.setState({ formData }); 
    this.form.reset(); 
  }; 
 
  render() { 
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state; 
 
    return ( 
      <div key="Payment"> 
        <div className="App-payment" style={{marginTop:"20px"}}> 
          <Card  
            number={number} 
            name={name} 
            expiry={expiry} 
            cvc={cvc} 
            focused={focused} 
            callback={this.handleCallback} 
          /> 
          <form className="inputCard"  ref={c => (this.form = c)} onSubmit={this.handleSubmit}> 
            <div className="col-6"> 
              <input 
                type="tel" 
                name="number" 
                className="form-control" 
                placeholder="Card Number" 
                maxLength={19} 
                required 
                onChange={this.handleInputChange} 
                onFocus={this.handleInputFocus} 
              /> 
            </div> 
            <div className="col-6"> 
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Name" 
                required 
                onChange={this.handleInputChange} 
                onFocus={this.handleInputFocus} 
              /> 
            </div> 
            <div className="row"> 
              <div className="col-6"> 
                <input 
                  type="tel" 
                  name="expiry" 
                  className="form-control" 
                  placeholder="Valid Thru" 
                  maxLength={3}
                  pattern="\d\d/\d\d" 
                  required 
                  // onChange={this.handleInputChange} 
                  onFocus={this.handleInputFocus} 
                  maxLength={4}
                  onChange={this.handleInputChange} 
                  // onFocus={this.handleInputFocus} 
                /> 
              </div> 
              <div className="col-6"> 
                <input 
                  type="tel" 
                  name="cvc" 
                  className="form-control" 
                  placeholder="CVC" 
                  maxLength={3}
                  required 
                  onChange={this.handleInputChange} 
                  onFocus={this.handleInputFocus} 
                /> 
              </div> 
            </div> 
            <input type="hidden" name="issuer" value={issuer} /> 
            <div className="form-actions"> 
            <Link to="/successCredit">
              <button className="button" style={{marginTop:"10px"}}>Оплатить покупку</button> 
              </Link>
            </div> 
          </form> 
           
 
          <SupportedCards /> 
        </div> 
 
      </div> 
    ); 
  } 
}