export function limitString(texto: string, limiteCaracteres: number = 250) {
  if (texto?.length > limiteCaracteres) {
    return texto.slice(0, limiteCaracteres)
  }
  return texto
}