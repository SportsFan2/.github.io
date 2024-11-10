const canvas = document.getElementById("sineCanvas");
const ctx = canvas.getContext("2d");

let t = 0; // Time variable

function drawSineWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    
    const amplitude = 35; // Height of the sine wave
    const frequency = 0.10; // Frequency of the sine wave

    for (let x = 0; x < canvas.width; x++) {
        // Calculate y position of each point
        const y = canvas.height / 2 + amplitude * Math.sin((x + t) * frequency);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "#242424";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    
    t += 5; // Update time for animation
    requestAnimationFrame(drawSineWave); // Recursive call to animate
}

// Start the animation
drawSineWave();
