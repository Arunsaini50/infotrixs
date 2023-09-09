
document.addEventListener('DOMContentLoaded', function () {
   
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('h3'); 
        const answer = item.querySelector('.faq-answer'); 

        
        question.addEventListener('click', () => {
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

