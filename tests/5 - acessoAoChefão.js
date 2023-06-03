function solucao(
  itensColetados,
  itemNecessario1,
  itemNecessario2,
  itemNecessario3
) {
  if (
    itensColetados.includes(itemNecessario1) &&
    itensColetados.includes(itemNecessario2) &&
    itensColetados.includes(itemNecessario3)
  ) {
    return "PODE ENFRENTAR";
  } else {
    return "NAO PODE ENFRENTAR";
  }
}
