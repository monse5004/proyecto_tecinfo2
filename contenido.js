function scanItem() {
  const input = document.getElementById('scan-input').value.trim().toLowerCase();
  const resultSection = document.getElementById('result');
  const footprintBox = document.getElementById('carbon-footprint');

  if (!input) {
    alert("Por favor, introduce un producto o lugar.");
    return;
  }

  // Simulando resultados
  let level = '';
  let message = '';

  if (input.includes("plástico") || input.includes("auto") || input.includes("vuelo")) {
    level = 'high';
    message = 'Alta huella de carbono 🌍🔥';
  } else if (input.includes("papel") || input.includes("ciudad") || input.includes("ropa")) {
    level = 'medium';
    message = 'Huella de carbono media 🌍⚠️';
  } else {
    level = 'low';
    message = 'Baja huella de carbono 🌿💚';
  }

  // Actualizar resultado
  resultSection.classList.remove('hidden');
  footprintBox.className = 'footprint-box ' + level;
  footprintBox.innerHTML = `<p>${message}</p><p><strong>${input}</strong></p>`;
}
