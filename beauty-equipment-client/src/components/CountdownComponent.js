import React from "react";

function Countdown () {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const resetDeadline = () => {
        let deadline = new Date();
        deadline.setDate(deadline.getDate() + 14);
        window.localStorage.setItem('deadline', deadline);
    }
    
    const getTime = () => {
        let deadline = window.localStorage.getItem('deadline');
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    React.useEffect(() => {
        resetDeadline();

        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (hours === 0) {
            resetDeadline();
        }
    }, [hours]);

    return (
        <span>
            {days} days {hours}:{minutes < 10? '0' + minutes : minutes}:{seconds < 10? '0' + seconds : seconds}
        </span>
    );
}

export default Countdown;