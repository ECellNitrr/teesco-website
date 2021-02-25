import React, {useState} from 'react';

import {connect} from 'react-redux'
import {FiEyeOff, FiEye} from 'react-icons/fi';
import InputField from '../BasicComponents/InputField/input_field';
import { FaSpinner } from 'react-icons/fa';
import FormError from '../BasicComponents/FormError/form_error';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from "redux";

// Actions
import { signupAction } from './../../actions/User/index';

// Selectors
import { makeSelectLoading } from '../../selectors/User';
import { makeSelectSignUpError } from '../../selectors/Alerts';

//Utility Function
import { containsLowerCase, containsNumericDigit, containsUpperCase, emailValidator, nameValidator, phoneNumberValidator } from '../../utils/Validator';

const SignUpForm=({ loading, signupAction, error:{ errorDict } })=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phoneNumber, setPhoneNumber]=useState("")
    const [institutionName, setInstitutionName]=useState("")

    const [isTermsAgreed, setIsTermsAgreed]=useState(false)
    const [isPasswordHidden, setIsPasswordHidden]=useState(true)
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        let validationResp=checkValidation();
        if((!validationResp.hasError)&&(validationResp.allFilled)){
            signupAction(
                email, password, firstName, lastName, institutionName, "+91", phoneNumber
            );
        }
    }

    let validationError={
        firstName:{
            msg:"",
            toShow:false
        },
        lastName:{
            msg:"",
            toShow:false
        },
        email:{
            msg:"",
            toShow:false
        },
        password:{
            msg:"",
            toShow:false
        },
        confirmPassword:{
            msg:"",
            toShow:false
        },
        phone:{
            msg:"",
            toShow:false
        },
        institution:{
            msg:"",
            toShow:false
        },
        tnc:{
            msg:"",
            toShow:false
        }
    };
    function checkValidation (){
        let hasError=false;    
        let allFilled=true;
        
        Object.entries(validationError).forEach((entry)=>{
            validationError[entry[0]]={
                msg:"",
                toShow:false
            }
        })

        // Backend Error
        if(errorDict){
            Object.entries(errorDict).forEach((entry)=>{
                hasError=true;
                validationError[entry[0]]={
                    msg:entry[1],
                    toShow:true
                };
            });
        }

        // Frontend Error
        
        // First Name
        if(firstName.length>0){
            if(!nameValidator(firstName)){
                hasError=true;
                validationError.firstName={
                    msg:"Invalid first name format.",
                    toShow:true
                }   
            }
        }
        else{
            allFilled=false;
        }

        // Last Name
        if(lastName.length>0){    
            if(!nameValidator(lastName)){
                hasError=true;
                validationError.lastName={
                    msg:"Invalid last name format.",
                    toShow:true
                }   
            }
        }
        else{
            allFilled=false;
        }

        // Email
        if(email.length>0){
            if(!emailValidator(email)){
                hasError=true;
                validationError.email={
                    msg:"Invalid email format",
                    toShow:true
                } 
            }
        }
        else{
            allFilled=false;
        }

        // Password
        if(password.length>0){
            // Numeric Digit.
            if(!containsNumericDigit(password)){
                validationError.password={
                    msg:"Must contains a numeric digit.",
                    toShow:true
                } 
            }

            // Upper Case Letter.
            if(!containsUpperCase(password)){
                validationError.password={
                    msg:"Must contains a Upper case letter.",
                    toShow:true
                } 
            }

            // Lower Case Letter.
            if(!containsLowerCase(password)){
                validationError.password={
                    msg:"Must contains a Lower case letter.",
                    toShow:true
                } 
            }
            
            // Length atleast 8
            if(password.length<8){
                validationError.password={
                    msg:"Must contains alteast 8 characters",
                    toShow:true
                } 
            }
        }
        else{
            allFilled=false;
        }

        // Confirm Password
        if(confirmPassword.length>0){
            if(confirmPassword!==password){
                hasError=true;
                validationError.confirmPassword={
                    msg:"Password does not match.",
                    toShow:true
                }
            }
        }
        else{
            allFilled=false;
        }

        // Phone Number
        if(phoneNumber.length>0){
            if(phoneNumberValidator(phoneNumber)){
                hasError=true;
                validationError.phone={
                    msg:"Invalid phone number.",
                    toShow:true
                }
            }
        }
        else{
            allFilled=false;
        }

        if(institutionName.length===0){
            allFilled=false;
        }

        if(!isTermsAgreed){
            if(allFilled){
                validationError.tnc={
                    msg:"You need to agree our all terms and conditions.",
                    toShow:true
                }
            }
            allFilled=false;
        }

        return {
            hasError:hasError,
            allFilled:allFilled
        }
    }
    checkValidation();

    return (
        <div className="card px-4">
            <div className="card-body py-2 px-4 my-4 mx-4">
                <form onSubmit={(e)=>onSubmit(e)}>
                    <h2 className="card-title text-center pt-2">
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
                                {validationError.firstName.toShow ? <FormError>{validationError.firstName.msg}</FormError>:""}
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
                                {validationError.lastName.toShow ? <FormError>{validationError.lastName.msg}</FormError>:""}
                            </div>
                        </div>
                    </div>
                
                    <div className="form-group">
                        <InputField 
                            value={email} 
                            label={"*Email"}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {validationError.email.toShow ? <FormError>{validationError.email.msg}</FormError>:""}
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
                        {validationError.password.toShow ? <FormError>{validationError.password.msg}</FormError>:""}
                    </div>
                    
                    <div className="form-group">
                        <InputField 
                            value={confirmPassword} 
                            type={(isPasswordHidden) ? "password":"text"}
                            label={"*Confirm Password"}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        {validationError.confirmPassword.toShow ? <FormError>{validationError.confirmPassword.msg}</FormError>:""}
                    </div>
                    
                    <div className="form-group">
                        <InputField 
                            value={phoneNumber} 
                            label={"*Phone Number"}
                            prefix={
                                <strong>+91</strong>
                            }
                            type="number"
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        {validationError.phone.toShow ? <FormError>{validationError.phone.msg}</FormError>:""}
                    </div>
                    
                    <div className="form-group">
                        <InputField 
                            value={institutionName} 
                            label={"*Institution Name"}
                            onChange={e => setInstitutionName(e.target.value)}
                        />
                        {validationError.institution.toShow ? <FormError>{validationError.institution.msg}</FormError>:""}
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value={isTermsAgreed} onChange={(e)=> setIsTermsAgreed(!isTermsAgreed)} />
                        <label className="form-check-label fntSz-13">
                            I agree to terms and conditions of Teesco and E-Cell NITRR Open Source.
                        </label>
                        {validationError.tnc.toShow ? <FormError>{validationError.tnc.msg}</FormError>:""}
                    </div>

                    <div className="d-flex justify-content-end">
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                        >
                        <span>Sign Up</span>
                        <FaSpinner className={loading ? "ml-2 spinner" : "d-none"} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectSignUpError()
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ signupAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);