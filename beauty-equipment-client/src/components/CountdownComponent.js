import React from "react";

function Countdown () {
    const [timer, setTimer] = React.useState({ days: 99, hours: 99, minutes: 99, seconds: 99 });

    const setDeadline = (reset = false) => {        
        // const value = 'remove';
        // window.localStorage.setItem('deadline', value);
        // console.log(window.localStorage.getItem('deadline'));
        // window.localStorage.removeItem('deadline');

        const deadline = window.localStorage.getItem('deadline');

        if (!deadline || reset) {
            let newDeadline = new Date();
            newDeadline.setDate(newDeadline.getDate() + 14);
            window.localStorage.setItem('deadline', newDeadline);
        }
    }
    
    const getTime = () => {
        let deadline = window.localStorage.getItem('deadline');
        const time = Date.parse(deadline) - Date.now();

        setTimer({
            days:    Math.floor(time / (1000 * 60 * 60 * 24)),
            hours:   Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        })
    };

    React.useEffect(() => {
        setDeadline();

        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (Object.values(timer).every(value => value === 0)) {
            setDeadline(true);
        }
    }, [timer.days]);

    return (
        <span>
            {timer.days} days {timer.hours}:{timer.minutes < 10? '0' + timer.minutes : timer.minutes}:{timer.seconds < 10? '0' + timer.seconds : timer.seconds}
        </span>
    );
}

export default Countdown;