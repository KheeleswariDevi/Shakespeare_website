// Responsive hamburger menu

let mobile = document.querySelector('#mobile');
let navbar = document.querySelector('#navbar');

mobile.onclick = () => {
    navbar.classList.toggle('open')
}

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.newstext', {delay:200});
sr.reveal ('.form', {delay:200});

sr.reveal ('.follow', {delay:300});

sr.reveal ('#content h2', {delay:200});
sr.reveal ('#content p', {delay:300});
sr.reveal ('#content li', {delay:300});
sr.reveal ('#content img', {});
sr.reveal ('#content iframe', {});

sr.reveal ('#contact-details', {delay:300});
sr.reveal ('.map', {});
sr.reveal ('#contact-form', {delay:300});

// Newsletter button message

document.getElementsByClassName('news-btn')[0].addEventListener("click", newsButtonClicked);

function newsButtonClicked(){
    alert('You are now a part of our newsletter')
}


// Get all flip notes
const flipNotes = document.querySelectorAll('.flip-note');

// Add click event listener to each flip note
flipNotes.forEach(note => {
  note.addEventListener('click', () => {
    note.classList.toggle('flip');
  });
});

