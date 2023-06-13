import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [time, setTime] = useState(10)
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(time > 0) setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(interval);
    }, [time])
    
    
    return (
        <div>
            {time}
        </div>
    )
}

export default Timer
