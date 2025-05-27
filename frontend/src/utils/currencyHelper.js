export function formatCurrencyBR(value) {
  if (typeof value !== 'number') {
    value = parseFloat(value);
  }

  if (isNaN(value)) return 'R$ 0,00';

  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}
