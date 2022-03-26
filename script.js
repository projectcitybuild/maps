const mapFrame = document.getElementById('map');
const navbar = document.getElementById('navbar');
const creativeLink = document.getElementById('creative-link');
const survivalLink = document.getElementById('survival-link');

function resizeMapFrame() {
    // Compensate for browser inconsistency
    const windowHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    mapFrame.height = windowHeight - navbar.offsetHeight;
}

function setActiveLink(element) {
    survivalLink.classList.remove('active');
    creativeLink.classList.remove('active');

    element.classList.add('active');
}

window.onload = () => {
    mapFrame.src = 'https://pcbmc.co:8123';
    resizeMapFrame();
    setActiveLink(creativeLink);
}

// Force resize as soon as possible, because onload fires quite late
document.onreadystatechange = (event) => {
    if (document.readyState === 'complete') {
        resizeMapFrame();
    }
};

window.onresize = resizeMapFrame

creativeLink.addEventListener('click', () => {
    mapFrame.src = 'https://pcbmc.co:8123';
    setActiveLink(creativeLink);
})

survivalLink.addEventListener('click', () => {
    mapFrame.src= 'http://pcbmc.co:8124';
    setActiveLink(survivalLink);
})
