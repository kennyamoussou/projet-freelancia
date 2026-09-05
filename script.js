// Sélectionne automatiquement tous les compteurs présents dans le HTML
// (n'importe quel élément possédant l'attribut data-target)
const counterElements = document.querySelectorAll('[data-target]');

function animateCounter(element) {
    const target = parseInt(element.dataset.target, 10);
    const suffix = element.dataset.suffix || "";
    // Valeur de départ : si data-start n'est pas défini, on part de 0
    let count = element.dataset.start ? parseInt(element.dataset.start, 10) : 0;

    element.innerText = count + suffix;

    const interval = setInterval(() => {
        count++;
        element.innerText = count + suffix;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 30);
}

counterElements.forEach(animateCounter);