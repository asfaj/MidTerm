document.addEventListener('DOMContentLoaded', function () {
    const targetAmount = 2000; 
    let currentLevel = 0;

    const remainedElement = document.getElementById('remained');
    const litersElement = document.getElementById('liters');
    const percentageElement = document.getElementById('percentage');
    const smallCups = document.querySelectorAll('.cup-small');

    
    function updateCupUI() {
      const percentage = (currentLevel / targetAmount) * 100;
      percentageElement.style.height = percentage + '%';
      litersElement.innerText = (targetAmount - currentLevel) / 1000 + 'L';
      remainedElement.style.height = 100 - percentage + '%';
    }

    
    smallCups.forEach((cup, index) => {
      cup.addEventListener('click', () => {
        if (!cup.classList.contains('full')) {
          cup.classList.add('full');
          currentLevel += 250; 
          updateCupUI();
        } else {
          cup.classList.remove('full');
          currentLevel -= 250; 
          updateCupUI();
        }
      });
    });

    updateCupUI();
});
