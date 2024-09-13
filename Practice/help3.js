<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Effect with Sound</title>
    <style>
        #typing-container {
            font-family: monospace;
            font-size: 24px;
            white-space: pre;
        }
    </style>
</head>
<body>
    <div id="typing-container"></div>

    <!-- Add your typing sound file here -->
    <audio id="typing-sound" src="typing.mp3" preload="auto"></audio>

    <script>
        const typingText = "This is a typing effect with sound!";
        let index = 0;
        const typingContainer = document.getElementById('typing-container');
        const typingSound = document.getElementById('typing-sound');

        function typeEffect() {
            if (index < typingText.length) {
                typingContainer.textContent += typingText.charAt(index);
                typingSound.currentTime = 0; // Rewind to the start
                typingSound.play(); // Play the typing sound
                index++;
                setTimeout(typeEffect, 100); // Adjust typing speed here
            }
        }

        typeEffect();
    </script>
</body>
</html>
