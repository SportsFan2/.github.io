const canvas = document.getElementById("sineCanvas");
const ctx = canvas.getContext("2d");

// Set canvas width and height based on the viewport
canvas.width = window.innerWidth * 0.8;  // 80% of the viewport width
canvas.height = window.innerHeight * 0.5; // 50% of the viewport height

let t = 0; // Time variable
let animationId; // To store the animation frame ID

function drawSineWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    
    const amplitude = 50; // Height of the sine wave
    const frequency = 0.05; // Frequency of the sine wave

    for (let x = 0; x < canvas.width; x++) {
        // Calculate y position of each point
        const y = canvas.height / 2 + amplitude * Math.sin((x + t) * frequency);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "#0077be";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    t += 5; // Update time for animation
    animationId = requestAnimationFrame(drawSineWave); // Recursive call to animate
}

// Start the animation
drawSineWave();

// Stop the animation after 5 seconds (5000 milliseconds)
setTimeout(() => {
    cancelAnimationFrame(animationId);
    console.log("Animation stopped");
}, 5000);
