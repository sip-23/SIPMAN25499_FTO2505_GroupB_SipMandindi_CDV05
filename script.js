document.addEventListener('DOMContentLoaded', function() {
    // Function to handle like button clicks
    function setupLikeButton(buttonId, counterId) {
        const likeButton = document.getElementById(buttonId);
        const likeCounter = document.getElementById(counterId);
        
        // Check if already liked in this session
        if (sessionStorage.getItem(buttonId) === 'liked') {
            likeButton.classList.add('liked');
        }
        
        likeButton.addEventListener('click', function() {
            // Prevent multiple likes from the same user in one session
            if (sessionStorage.getItem(buttonId) !== 'liked') {
                let currentCount = parseInt(likeCounter.textContent);
                likeCounter.textContent = currentCount + 1;
                likeButton.classList.add('liked');
                sessionStorage.setItem(buttonId, 'liked');
            }
        });
    }
    
    // Set up like buttons for all projects
    setupLikeButton('p1-btn-like', 'love-p1');
    setupLikeButton('p2-btn-like', 'love-p2');
    setupLikeButton('p3-btn-like', 'love-p3');
});