function solucao(pesos) {
  const diferenca = Math.abs(pesos[0] - pesos[1]);
  if (diferenca <= 5) {
    return "PODEM LUTAR";
  } else {
    return "NAO PODEM LUTAR";
  }
}

console.log(solucao([60, 65]));
