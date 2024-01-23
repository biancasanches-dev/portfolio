document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.menu-list a');
    const sections = document.querySelectorAll('section');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const targetId = entry.target.getAttribute('id');
            const correspondingLink = document.querySelector(`.menu-list a[href="#${targetId}"]`);
            
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('selected'));
                correspondingLink.classList.add('selected');
            }
        });
    });
  
    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
        
            const sectionId = link.getAttribute('href').substring(1);
    
            scrollToElement(sectionId)
            
            navLinks.forEach(link => link.classList.remove('selected'));
            link.classList.add('selected');
        });
    });

    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);

        if (element) {
            const navbarHeight = 110;

            const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({ top: offset, behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${elementId} not found`);
        }
    }
});   

function menu(e) {
    e.classList.toggle("change");

    let openMobileMenu = document.querySelector(".menu-list");
    let blur = document.querySelector(".blurBackground")
  
    if(e.classList.contains("change")) {
        openMobileMenu.style.display = 'grid';
        blur.style.display = 'flex';
    }else{
        openMobileMenu.style.display = 'none';
        blur.style.display = 'none';
    }
}