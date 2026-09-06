/* ============================================
   1. COMPTEURS ANIMÉS (fade-in-up des chiffres)
   ============================================ */
const counterElements = document.querySelectorAll('[data-target]');

function animateCounter(element) {
    const target = parseInt(element.dataset.target, 10);
    const suffix = element.dataset.suffix || "";
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

if (counterElements.length > 0) {
    counterElements.forEach(animateCounter);
}


/* ============================================
   2. CALCULATEUR DE REVENUS
   ============================================ */
const RATES = { USD: 1, EUR: 0.92, FCFA: 600 };
const SYMBOLS = { USD: '$', EUR: '€', FCFA: 'F CFA' };
const COMMISSION = 0.05;

let currency = 'USD';

function fmt(n) {
    return n.toLocaleString('fr-FR').replace(/\s/g, '.') + ' ' + SYMBOLS[currency];
}

function updateCalculator() {
    const slider = document.getElementById('calc-slider');
    if (!slider) return;

    const ca = parseInt(slider.value, 10);
    const caConverted = ca * RATES[currency];
    const net = caConverted * (1 - COMMISSION);

    document.getElementById('calc-result').textContent = fmt(Math.round(net));
    document.getElementById('calc-ca-display').textContent = fmt(Math.round(caConverted));
}

function setCurrency(newCurrency, button) {
    currency = newCurrency;

    document.querySelectorAll('.curr-btn').forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    updateCalculator();
}

const calcSlider = document.getElementById('calc-slider');
if (calcSlider) {
    document.querySelectorAll('.curr-btn').forEach(btn => {
        btn.addEventListener('click', () => setCurrency(btn.dataset.currency, btn));
    });

    calcSlider.addEventListener('input', updateCalculator);

    updateCalculator();
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-header-custom').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
});