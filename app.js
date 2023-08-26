const tasaInteresAnual = 159; // Tasa de interés anual efectiva del 159%

function formatNumber(number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

function calcularPrestamo() {
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);

  // Validaciones
  if (isNaN(monto) || monto <= 0) {
    alert("Por favor, ingresa un monto válido mayor que cero.");
    return;
  }

  if (isNaN(cuotas) || cuotas < 12 || cuotas > 120) {
    alert("Por favor, ingresa un número de cuotas válido entre 12 y 120.");
    return;
  }

  const tasaDecimal = tasaInteresAnual / 100;
  const cuotaMensual = monto * (tasaDecimal / 12) / (1 - Math.pow(1 + tasaDecimal / 12, -cuotas));
  const totalPrestamo = cuotaMensual * cuotas;
  const interesesTotales = totalPrestamo - monto;

  const resultadoMensaje = `
    Monto del préstamo: ${formatNumber(monto)}
    Tasa de interés anual: ${tasaInteresAnual}%
    Cuotas mensuales: ${cuotas}
    Cuota mensual: ${formatNumber(cuotaMensual.toFixed(2))}
    Total a pagar: ${formatNumber(totalPrestamo.toFixed(2))}
    Intereses totales: ${formatNumber(interesesTotales.toFixed(2))}
  `;

  alert(resultadoMensaje);
}