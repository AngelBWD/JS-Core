(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.btn');
    const retryButton = document.querySelector('.btn2');
    retryButton.style.display = "none";
    
    let deg = 0;
  
    startButton.addEventListener('click', () => {
        let numOfArr = 8 - 1;
        let sector = numOfArr * 20;
      
      startButton.style.pointerEvents = 'none';
      retryButton.style.pointerEvents = 'none';
      
      deg = ((Math.floor(Math.random() * 10) + 6)*360) - (1*sector - 8  + Math.floor((Math.random() * 18)));
      wheel.style.transition = 'all 5s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
  
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      retryButton.style.display = 'block';
      retryButton.style.pointerEvents = 'auto';
      startButton.style.display = 'none';
      wheel.style.transition = 'none';
       const actualDeg = deg % 360;
       wheel.style.transform = `rotate(${actualDeg}deg)`;
    });

    retryButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'auto';
        retryButton.style.display = 'none';
        startButton.style.display = 'block';

        deg = 0;
      });
  })();

