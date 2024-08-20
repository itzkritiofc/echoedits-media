document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatFrame = document.getElementById('chatFrame');
    const closeChat = document.getElementById('closeChat');

    chatButton.addEventListener('click', function() {
        if (chatFrame.style.display === 'none' || chatFrame.style.display === '') {
            chatFrame.style.display = 'block';
            setTimeout(() => chatFrame.style.transform = 'translateY(0)', 10); // Delay transform for smooth effect
        } else {
            chatFrame.style.transform = 'translateY(100%)';
            setTimeout(() => chatFrame.style.display = 'none', 300); // Delay hide until transition ends
        }
    });

    closeChat.addEventListener('click', function() {
        chatFrame.style.transform = 'translateY(100%)';
        setTimeout(() => chatFrame.style.display = 'none', 300); // Delay hide until transition ends
    });
});
