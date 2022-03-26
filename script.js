const mapFrame = document.getElementById('map');
const navbar = document.getElementById('navbar');

const maps = [
    {
        url: 'https://creativemap.pcbmc.co',
        linkElement: document.getElementById('creative-link'),
    },
    {
        url: 'https://survivalmap.pcbmc.co',
        linkElement: document.getElementById('survival-link'),
    },
    {
        url: 'https://3d.pcbmc.co',
        linkElement: document.getElementById('monarch-link'),
    },
]

function setActiveLink(map) {
    maps.forEach((map) => {
        map.linkElement.classList.remove('active');
    });
    map.linkElement.classList.add('active');

    mapFrame.src = map.url;
}

function resizeMapFrame() {
    // Compensate for browser inconsistency
    const windowHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    mapFrame.height = windowHeight - navbar.offsetHeight;
}

window.onload = () => {
    resizeMapFrame();
    setActiveLink(maps[0]);
}

// Force resize as soon as possible, because onload fires quite late
document.onreadystatechange = (event) => {
    if (document.readyState === 'complete') {
        resizeMapFrame();
    }
};

window.onresize = resizeMapFrame

maps.forEach((map) => {
    map.linkElement.addEventListener('click', () => setActiveLink(map))
});