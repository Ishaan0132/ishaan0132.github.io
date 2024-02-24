const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
eventListener();
function eventListener() {
menu.addEventListener('click', () => {
    navbar.classList.toggle('nav-toggle');
});
}

async function fetchData() {
    let response = await fetch("skills.json");
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="skill">
              <div class="skillImg">
                <img src=${skill.icon} alt=${skill.name} />
              </div>
              <p>${skill.name}</p>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});