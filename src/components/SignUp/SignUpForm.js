import React, {useState} from 'react';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {FiEyeOff, FiEye} from 'react-icons/fi';
import InputField from '../BasicComponents/InputField/input_field';
import { FaSpinner } from 'react-icons/fa';

const SignUpForm=()=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phoneNumber, setPhoneNumber]=useState("")
    const [isTermsAgreed, setIsTermsAgreed]=useState(true)
    const [isLoading, setIsLoding]=useState(false)
    const [isPasswordHidden, setIsPasswordHidden]=useState(true)
    
    return (
        <div className="card pl-3 pr-3">
            <div className="card-body p-5">
                <form>
                    <h2 className="card-title text-center p-2">
                        Welcome
                    </h2>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <InputField 
                                    value={firstName} 
                                    label={"*First Name"}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                        </div>
                        </div>
                        <div className="p-1 m-1"></div>
                        <div className="col-sm">
                            <div className="form-group">
                                <InputField 
                                    value={lastName} 
                                    label={"*Last Name"}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                
                    <div className="form-group">
                        <InputField 
                            value={email} 
                            label={"*Email"}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <InputField 
                            value={password} 
                            label={"*Password"}
                            type={(isPasswordHidden) ? "password":"text"}
                            suffix={
                                <div className="cursor-pointer" onClick={
                                    ()=> setIsPasswordHidden(!isPasswordHidden)
                                }>
                                    {(isPasswordHidden) ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff>}
                                </div>
                            }
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <InputField 
                            value={confirmPassword} 
                            type={(isPasswordHidden) ? "password":"text"}
                            label={"*Confirm Password"}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <InputField 
                            value={phoneNumber} 
                            label={"*Phone Number"}
                            prefix={
                                <strong>+91</strong>
                            }
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="form-check mt-4 mb-4">
                        <input className="form-check-input" type="checkbox" value={isTermsAgreed} onChange={(e)=> setIsTermsAgreed(e.target.value)} id="flexCheckDefault" />
                        <label className="form-check-label fntSz-14" for="flexCheckDefault">
                            I agree to terms and conditions of Teesco and E-Cell NITRR Open Source.
                        </label>
                    </div>

                    <div className="mt-4 d-flex justify-content-end">
                        <button
                            disabled={isLoading}
                            className="btn btn-primary">
                            <span>Sign Up</span>
                            <FaSpinner className={isLoading ? 'ml-2 spinner' : 'd-none'} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;