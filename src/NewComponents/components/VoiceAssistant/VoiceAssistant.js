import React from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VoiceAssistant = () => {
    const apiKey =`a9a218108085efb1d89942de5ab2d4ab2e956eca572e1d8b807a3e2338fdd0dc/stage`
    
    useEffect(()=>{
        alanBtn({
            key:apiKey,
            onCommand:({command})=>{
                if(command =='coursesCommand'){
                    alert('courses')
                }
                
            }
            
        })
    },[])
    
    return (
        <div >
           
        </div>
    );
};

export default VoiceAssistant;