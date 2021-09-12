window.onload = () => {
    let GetTime = () => { // Get time and seperate out time values.
        const date = new Date();
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    
        console.log(hour, minutes, seconds);

        CompileTime(hour, minutes, seconds);
    
        setTimeout(GetTime, 1000)
    }

    let CompileTime = (h, m, s) => { // 'Compile' time from GetTime function, then update hand postions on clock face.

        // New 'time incroment' should convert into degrees.
        let newSeconds = s * (360 / 60) + 90;
        let newMinutes = m * (360 / 60) + 90;
        let newHours = h * (360 / 12) + 90;

        document.getElementById("hours").style.transform = 'translate(50%, -50%) rotate('+newHours+'deg)';
        document.getElementById("minutes").style.transform = 'translate(50%, -50%) rotate('+newMinutes+'deg)';
        document.getElementById("seconds").style.transform = 'translate(50%, -50%) rotate('+newSeconds+'deg)';
        
    }
    
    GetTime();
}
