import React,{ Component } from "react";

class FormError extends Component{
    render(){
        return (<div className="text-danger fntSz-12 mt-1">
            {this.props.children}
        </div>);
    }
}

export default FormError;