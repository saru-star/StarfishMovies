import React from 'react';

import './Nav.css'
import {useState,useEffect} from 'react';
const Nav=()=>{
    //use state is a variable and function combo to set a value to variable using the function
    const [show,setShow]=useState(false);  //setShow is a function to update show variable. 

    const scrollHandler=()=>{ // function to set show variable value
        
            if(window.scrollY>10){
                setShow(true); // show is set true
            }
            else{
                setShow(false); // show is set false
            }
    }
    useEffect( ()=>{ // to use event listeners to our react project
        window.addEventListener('scroll',scrollHandler); // scroll handler is a function for event listener 'scroll'
        return()=>{ //to remove event listener as soon page renders
            window.removeEventListener('scroll',scrollHandler);
        };
    },[])

    


    return (
        <nav style={{backgroundColor:show?'black':'transparent'}}>  {/*to set black if scroll is greater than 10*/}
        <section>
            <div className="navleft">
                <img className="navlogo" alt="logo" src="https://t4.ftcdn.net/jpg/03/12/62/41/360_F_312624115_GBdbzBnBVaRdUt2Ky2EBoKv0OLueYc1f.jpg"/>
                <div className="navlinks">
                    <a href="/">Home</a>
                    
                    
                </div>
            </div>
            <div className="navright">
                <img className="navavatar"  
                src="https://cdn-icons-png.flaticon.com/128/6318/6318076.png"
                alt="avatar"/>
                <p>
                    children
                </p>
                <img className="bell" src="https://cdn-icons-png.flaticon.com/128/3541/3541850.png" alt="bell icon"/>
                
            </div>

        </section>
    </nav>
    );
};
export default Nav