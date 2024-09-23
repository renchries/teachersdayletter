<script>
    document.addEventListener('DOMContentLoaded', () => {
        function playAudio() {
            let audio = new Audio('CityGirl.mp3'); // Adjust this if needed
            audio.play().catch(error => {
                console.log('Autoplay prevented or error occurred:', error);
            });
        }

        // Automatically play audio on page load
        playAudio({ once: true });
    });
</script>
