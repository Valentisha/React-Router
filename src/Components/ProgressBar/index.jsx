import React from "react";
import './style.scss';

export default function ProgressBar({completedCategory}){
    return (
        <div className='progress'>


            {
                (completedCategory === 0) ? 
                <div className='progress-bar'> </div> : 
                <div className='progress-bar' style={{width: `${completedCategory}%`}}></div>
            }
            

        </div>
    )
}     
