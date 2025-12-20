document.addEventListener('DOMContentLoaded', function() {
    const shades = document.getElementById('shades');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    shades.addEventListener('click', function() {
        shades.classList.add('clicked');
        
        setTimeout(() => {
            introScreen.classList.add('fade-out');
            
            setTimeout(() => {
                mainContent.classList.add('visible');
                introScreen.style.display = 'none';
                initEmailModal();
            }, 400);
        }, 400);
    });
    
    function initEmailModal() {
        const emailIcon = document.getElementById('email-icon');
        const emailModal = document.getElementById('email-modal');
        const closeModal = document.querySelector('.close-modal');
        
        if (emailIcon && emailModal && closeModal) {
            emailIcon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                emailModal.style.display = 'flex';
                setTimeout(() => {
                    emailModal.classList.add('show');
                }, 10);
            });
            
            closeModal.addEventListener('click', function() {
                emailModal.classList.remove('show');
                setTimeout(() => {
                    emailModal.style.display = 'none';
                }, 300);
            });
            
            emailModal.addEventListener('click', function(e) {
                if (e.target === emailModal) {
                    emailModal.classList.remove('show');
                    setTimeout(() => {
                        emailModal.style.display = 'none';
                    }, 300);
                }
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && emailModal.classList.contains('show')) {
                    emailModal.classList.remove('show');
                    setTimeout(() => {
                        emailModal.style.display = 'none';
                    }, 300);
                }
            });
        }
    }
});