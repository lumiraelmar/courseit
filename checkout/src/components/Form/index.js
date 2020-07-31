import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faUserCircle, faHome, faCity, faGlobeAmericas, faPen } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

class Form extends React.Component {
  render() {
    return(
      <div className='formWrapper'>
        <div className='contactInformation'>
          <h2 className='sectionTitle'>Contact information</h2>
          <div className='inputWrapper'>
            <p className='inputName'>Email</p>
            <div className='relative'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <input type='text' placeholder='Enter your email...' className='input email'></input>
            </div>
          </div>
          <div className='inputWrapper'>
            <p className='inputName'>Phone</p>
            <div className='relative'>
              <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
              <input type='text' placeholder='Enter your phone...' className='input phone'></input>
            </div>
          </div>
        </div>
        
        <div className='shippingAddress'>
          <h2 className='sectionTitle'>Shipping Address</h2>
          <div className='inputWrapper'>
            <p className='inputName'>Full name</p>
            <div className='relative'>
              <FontAwesomeIcon className='icon' icon={faUserCircle} />
              <input type='text' placeholder='Enter your full name...' className='input name'></input>
            </div>
          </div>
          <div className='inputWrapper'>
            <p className='inputName'>Address</p>
            <div className='relative'>
              <FontAwesomeIcon className='icon' icon={faHome} />
              <input type='text' placeholder='Enter your address...' className='input address'></input>
            </div>
          </div>
          <div className='inputWrapper'>
            <p className='inputName'>City</p>
            <div className='relative'>
              <FontAwesomeIcon className='icon' icon={faCity} />
              <input type='text' placeholder='Enter your city...' className='input city'></input>
            </div>
          </div>
          <div className='section'>
            <div className='inputWrapper'>
              <p className='inputName'>Country</p>
              <div className='relative'>
                <FontAwesomeIcon className='icon' icon={faGlobeAmericas} />
                <select className='input country' defaultValue='country'>
                  <option value='country' disabled hidden className='country'>Country...</option>
                  <option value='argentina'>Argentina</option>
                  <option value='españa'>España</option>
                  <option value='francia'>Francia</option>
                  <option value='uruguay'>Uruguay</option>
                </select>
              </div>
            </div>
            <div className='inputWrapper'>
              <p className='inputName'>Postal Code</p>
              <div className='relative'>
                <FontAwesomeIcon className='icon' icon={faPen} />
                <input type='text' placeholder='Postal code...' className='input zipcode'></input>
              </div>
            </div>
          </div>
          <div className='checkboxButton'>
            <input type="checkbox" value="save" className='checkbox'></input>
            <label className='checkboxText'>Save this information for next time</label>
            <button className='formButton'>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
