document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        // Event listener for autofill triggering
        input.addEventListener('animationstart', function () {
            setTimeout(() => {
                input.style.backgroundColor = 'transparent';  // Reset background to transparent
            }, 100);
        });

        // Fallback: force background transparent when focused
        input.addEventListener('focus', function () {
            input.style.backgroundColor = 'transparent';  // Ensure it's transparent on focus
        });

        // Listen for autofill triggers and reset background if necessary
        input.addEventListener('input', function() {
            if (input.value && input.style.backgroundColor !== 'transparent') {
                input.style.backgroundColor = 'transparent';  // Reset background to transparent
            }
        });
    });
});
