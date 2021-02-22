import React,{ Component } from "react";
import './index.scss'

class InputField extends Component{
    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this);
        this.onInput=this.onInput.bind(this);
    }

    componentDidMount(){
    }

    onChange(event){
        this.props.onChange(event);
    }

    onInput(e){
        if(this.props.type==="number"){
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        }
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

        let finalInputType="text";
        if(this.props.type==="password"){
            finalInputType=this.props.type;
        }

        return (
            <div className="input-field_wrapper">
                {((this.props.label)&&(this.props.label.length>0)) ? 
                <label className="input_label">{this.props.label}</label>
                : <div></div>}
                <div className="input_wrapper">
                    <div className="input-cover">
                        <input
                            onChange={e => this.onChange(e)}
                            type={finalInputType}
                            onInput={this.onInput}
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