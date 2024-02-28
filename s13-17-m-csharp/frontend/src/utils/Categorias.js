function generateUUID() {
    return crypto.randomUUID();
  }


export const categoriasTurnosMedicos = [
  { id: generateUUID(), name: "Cardiologia" },
  { id: generateUUID(), name: "Ginecologia" },
  { id: generateUUID(), name: "Dermatologia" },
  { id: generateUUID(), name: "Endocrinologia" },
  { id: generateUUID(), name: "Flebologia" },
  { id: generateUUID(), name: "Gastroenterologia" },
  { id: generateUUID(), name: "Neurologia" },
  { id: generateUUID(), name: "Nutricion infantil" },
  { id: generateUUID(), name: "Nutricion" },
  { id: generateUUID(), name: "Obstetricia" },
  { id: generateUUID(), name: "Oftalmologia" },
  { id: generateUUID(), name: "Pediatria" },
  { id: generateUUID(), name: "Psiquiatria" },
  { id: generateUUID(), name: "Traumatología cadera y pelvis" }
];