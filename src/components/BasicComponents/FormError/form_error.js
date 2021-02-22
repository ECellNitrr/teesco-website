import React,{ Component } from "react";

class FormError extends Component{
    render(){
        return (<div className="text-danger fntSz-12 mt-1">
            This is field is required.
        </div>);
    }
}

export default FormError;