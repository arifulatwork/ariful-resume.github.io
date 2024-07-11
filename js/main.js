const portfolioItems = [
    {
        img: './assets/images/addarapp.png',
        title: 'Addar Beauty Application',
        description: 'In September 2022, I was assigned to a freelance project with Rubysoft Sdn Bhd to develop an application called Addar Beauty. During this project, I created numerous features for the app and authored a comprehensive user manual for primary users.',
        demoLink: 'https://addarapp.com/docs/addar-manual-110.pdf'
    },
    {
        img: './assets/images/hitech.jpeg',
        title: 'Hi-Tech Web Application',
        description: 'During the COVID-19 pandemic in 2020, despite juggling university classes, I successfully developed this freelance project—a website completed within just 25 days.',
        demoLink: 'https://hi-techengineering.com/management/'
    },
    // Add more portfolio items as needed
];

let currentIndex = 0;

function showPortfolioItem(index) {
    const portfolioImage = document.querySelector('.portfolio-image');
    const portfolioDescription = document.querySelector('.portfolio-description');
    
    portfolioImage.src = portfolioItems[index].img;
    portfolioDescription.innerHTML = `
        <h3>${portfolioItems[index].title}</h3>
        <p>${portfolioItems[index].description}</p>
        <a href="${portfolioItems[index].demoLink}" class="demo-button">Demo</a>
    `;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : portfolioItems.length - 1;
    showPortfolioItem(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < portfolioItems.length - 1) ? currentIndex + 1 : 0;
    showPortfolioItem(currentIndex);
});

// Initialize the first portfolio item
showPortfolioItem(currentIndex);
