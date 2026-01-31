let isFlipped = false;

        // Calculate days together
        function calculateDaysTogether() {
            const startDate = new Date('2023-04-28'); // Together since 28/04/2023
            const today = new Date();
            const diffTime = Math.abs(today - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }

        // Animate the counter
        function animateCounter() {
            const targetDays = calculateDaysTogether();
            const daysElement = document.getElementById('daysNumber');
            let currentDays = 0;
            const duration = 1500; // 1.5 seconds
            const increment = targetDays / (duration / 16); // 60fps
            
            const counter = setInterval(() => {
                currentDays += increment;
                if (currentDays >= targetDays) {
                    currentDays = targetDays;
                    clearInterval(counter);
                }
                daysElement.textContent = Math.floor(currentDays);
            }, 16);
        }

        // Create floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            document.getElementById('heartBg').appendChild(heart);
            setTimeout(() => heart.remove(), 8000);
        }

        setInterval(createFloatingHeart, 800);
        for (let i = 0; i < 10; i++) {
            setTimeout(createFloatingHeart, i * 300);
        }

        function flipCard() {
            if (!isFlipped) {
                document.getElementById('card').classList.add('is-flipped');
                isFlipped = true;
                
                // Start the days counter animation after a short delay
                setTimeout(() => {
                    animateCounter();
                }, 400);
            }
        }

        // Make the "No" button run away
        const noButton = document.querySelector('.btn-no');
        // let isRunningAway = true;

        // setTimeout(() => {
        //     noButton.addEventListener('mouseenter', function(e) {
        //         if (!isRunningAway || !isFlipped) return;
                
        //         const button = e.target;
                
        //         // Add fixed positioning class on first hover
        //         if (!button.classList.contains('running')) {
        //             button.classList.add('running');
        //         }
                
        //         const buttonRect = button.getBoundingClientRect();
        //         const maxX = window.innerWidth - buttonRect.width - 20;
        //         const maxY = window.innerHeight - buttonRect.height - 20;
        //         const newX = Math.random() * maxX;
        //         const newY = Math.random() * maxY;
                
        //         button.style.left = newX + 'px';
        //         button.style.top = newY + 'px';
        //     });
        // }, 100);

        function handleYes(event) {
            event.stopPropagation();
            
            const response = document.getElementById('response');
            const hugGif = document.getElementById('hugGif');

            // setTimeout(() => {
            document.querySelector('.buttons').style.display = 'none';
            // }, 300);
            
            response.textContent = "YASSS! Thank you for being my valentine, my love, my life, my wife, my Alishbah; my everything, forever and always ❤️";
            response.className = 'response yes show';
            
            setTimeout(() => {
                hugGif.className = 'hug-gif show';
            }, 500);
            

            createConfetti();
            
            // setTimeout(() => {
            //     document.querySelector('.buttons').style.opacity = '0.3';
            //     document.querySelector('.buttons').style.pointerEvents = 'none';
            // }, 500);
        }

        function handleNo(event) {
            event.stopPropagation();
            
            isRunningAway = false;
            
            // Hide the No button
            noButton.style.display = 'none';
            
            // Get the Yes button and make it bigger and centered
            const yesButton = document.querySelector('.btn-yes');
            const buttonsContainer = document.querySelector('.buttons');
            
            // Center the buttons container
            buttonsContainer.style.justifyContent = 'center';
            
            // Make Yes button bigger
            yesButton.style.transform = 'scale(1.3)';
            yesButton.style.padding = '18px 45px';
            yesButton.style.fontSize = '1.2em';
            
            const response = document.getElementById('response');
            response.textContent = "Baby jaan! Sorry, 'No' is not an option anymore! 💕";
            response.className = 'response yes show';
            
            // Add a little shake animation to the Yes button
            yesButton.style.animation = 'shake 0.5s';
            setTimeout(() => {
                yesButton.style.animation = '';
            }, 500);
        }

        function createConfetti() {
            const celebration = document.getElementById('celebration');
            const colors = ['#ff6b9d', '#c44569', '#d4af37', '#ff8fab', '#ffc3db', '#FFD700', '#FF69B4', '#FF1493'];
            
            // Create more confetti pieces for a bigger celebration
            for (let i = 0; i < 150; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDelay = Math.random() * 0.3 + 's';
                    confetti.style.width = Math.random() * 15 + 5 + 'px';
                    confetti.style.height = Math.random() * 15 + 5 + 'px';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    celebration.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 4000);
                }, i * 20);
            }
        }