import React,{ Component } from "react";
import './index.scss'

class InputField extends Component{
    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this);
    }

    componentDidMount(){
    }

    onChange(event){
        this.props.onChange(event);
    }
    render(){
        let inputClass="form-control";
        if((this.props.prefix)&&(this.props.suffix)){
            inputClass+=" input-paddingforBoth";
        }
        else if(this.props.prefix){
            inputClass+=" input-paddingforLeft";
        }
        else if(this.props.suffix){
            inputClass+=" input-paddingforRight";
        }
        return (
            <div className="input-field_wrapper">
                {((this.props.label)&&(this.props.label.length>0)) ? 
                <label>{this.props.label}</label>
                : <div></div>}
                <div className="input_wrapper">
                    <div className="input-cover">
                        <input type="text"
                            onChange={e => this.onChange(e)}
                            type={
                                (this.props.type) ? this.props.type : 
                                "text"
                            }
                            pattern={this.props.pattern}
                            value={this.props.value}
                            className={inputClass}
                            placeholder={this.props.placeholder} />
                    </div>
                    {(this.props.prefix) ? 
                    <div className="input-prefix_wrapper">
                        {this.props.prefix}
                    </div>: <div></div>
                    }
                    {(this.props.suffix) ? 
                    <div className="input-suffix_wrapper">
                        {this.props.suffix}
                    </div>: <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default InputField;