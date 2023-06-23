import {useState} from 'react'

function Counter(){
    console.log('Counter rendering ')
    const [number, setnumber]= useState(0);
    function handleClick(e){
        e.stopPropagation();
        setnumber(number => number+1);

        console.log(number);
    }
    return(
        <>
            <h1 style={{color:'white'}}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;