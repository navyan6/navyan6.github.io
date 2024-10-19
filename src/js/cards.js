const projects = [
    {
        title: "Banned Books Week",
        image: "bannedbooks.jpeg",
        descriptionMarkdown: `Milton Amnesty hosted a Banned Books week art/writing competition to celebrate our freedom to read!
         The submission prompt was "The Power of Literacy." We also hosted trivia and created displays in the media center,
          encouraging Milton students to explore banned literature and celebrate diversity in books.
        `
    },
    {
        title: "Sustainability Workshops",
        image: "upcycling.jpg",
        descriptionMarkdown: `Milton Amnesty hosted a workshop with ~30 attendees, in which members presented
         research on climate change and the right to housing/sanitation, global effects, and marginalized groups.
          The human rights violations within the fast fashion industry were focused on, and upcycling was introduced
           as a way to be more sustainable. Attendees turned old shirts into bags, designed jeans with iron on patches,
            and added patterns to clothing, giving them a new life rather than throwing them away.
        `
    },
    {
        title: "Women's Homeless Shelter Donations",
        image: "clothesdonation.avif",
        descriptionMarkdown: `Milton Amnesty participated in a clothing drive for the Drake House,
         a homeless women and children's shelter. We collaborated with other clubs to donate $500 worth
          of coats and other clothing items to the shelter, helping many families in need.`
    }
    // Add more project data as needed
];

function createProjectCard(project) {
    console.log('creating card')
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `
        <div class="flex flex-col w-full h-full bg-transparent">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <img class="h-full object-cover" src="src/img/${project.image}" alt="${project.title}">
        </div>
    `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    
    const descriptionHtml = marked.parse(project.descriptionMarkdown)
    cardBack.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <div class="px-5 pb-5">${descriptionHtml}</div>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

function addProjectsToContainer() {
    const projectContainer = document.getElementById("projectContainer");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate project cards
addProjectsToContainer();