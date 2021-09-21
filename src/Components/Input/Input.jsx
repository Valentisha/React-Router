import React, {Component} from 'react';


export class Input extends Component {
    // constructor(){
    //     super()
    // }
 
    
    render() {
        return <>
        {<input value={this.props.value} 
        onChange={this.props.onChange}
         placeholder={this.props.placeholder}>
             </input>}
        
        </>
    }
} 