document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Initial story setup
    mainContent.innerHTML = `
        <p class="fade-in">You receive a mysterious letter inviting you to investigate a haunted mansion...</p>
        <button id="start-btn">Start Investigation</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("start-btn").addEventListener("click", startInvestigation);
});

function startInvestigation() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">Your first clue leads you to an old mansion. You see a locked door and a suspicious looking window.</p>
        <button id="check-door">Check Door</button>
        <button id="check-window">Check Window</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("check-door").addEventListener("click", checkDoor);
    document.getElementById("check-window").addEventListener("click", checkWindow);
}

function checkDoor() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">The door is locked. A puzzle on the door says: "You answer is x = "Oxygen"</p>
        <input type="number" id="door-answer" placeholder="Your answer">
        <button id="submit-door-answer">Submit</button>
        <button id="back">Go Back</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("submit-door-answer").addEventListener("click", () => {
        const answer = parseInt(document.getElementById("door-answer").value);
        if (answer === 8) {
            proceedToNextStage();
        } else {
            alert("Incorrect! Try again.");
        }
    });

    document.getElementById("back").addEventListener("click", startInvestigation);
}

function checkWindow() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">You find a hidden note near the window with a clue: x is more than 7 and less than 9 "now x(6x+9x)=?"</p>
        <input type="number" id="window-answer" placeholder="Your answer">
        <button id="submit-window-answer">Submit</button>
        <button id="back">Go Back</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("submit-window-answer").addEventListener("click", () => {
        const answer = parseInt(document.getElementById("window-answer").value);
        if (answer === 960) {
            proceedToNextStage();
        } else {
            alert("Incorrect! Try again.");
        }
    });

    document.getElementById("back").addEventListener("click", startInvestigation);
}

function proceedToNextStage() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">You've unlocked the door and find yourself in a dark hallway. You hear whispers saying: "solve 23.98 + 87.098"</p>
        <input type="number" id="hallway-answer" placeholder="Your answer">
        <button id="submit-hallway-answer">Submit</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("submit-hallway-answer").addEventListener("click", () => {
        const answer = parseFloat(document.getElementById("hallway-answer").value);
        if (answer === 111.08) {
            reachFinalStage();
        } else {
            alert("Incorrect! Try again.");
        }
    });
}

function reachFinalStage() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">You reach the final room. A ghostly figure appears and asks: "Is value of x is still remembered? try recall and find factorial of x, now x' + 6x = x!, solve for x'. "</p>
        <input type="number" id="final-answer" placeholder="Your answer">
        <button id="submit-final-answer">Submit</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("submit-final-answer").addEventListener("click", () => {
        const answer = parseInt(document.getElementById("final-answer").value);
        if (answer === 40272) {
            solveMystery();
        } else {
            alert("Incorrect! Try again.");
        }
    });
}

function solveMystery() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <p class="fade-in">Congratulations! You have solved the mystery and escaped the haunted mansion!</p>
        <p> Now follow me on Instagram forr more such content</p>
        <a href="https://instagram.com/shreyansh_m7">@instagram</a>
        <button id="restart">Start Over</button>
    `;

    gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0 });

    document.getElementById("restart").addEventListener("click", startInvestigation);
}
