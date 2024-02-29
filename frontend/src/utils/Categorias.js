function generateUUID() {
    return crypto.randomUUID();
  }


export const categoriasTurnosMedicos = [
  { id: generateUUID(), name: "Cardiología" },
  { id: generateUUID(), name: "Ginecología" },
  { id: generateUUID(), name: "Dermatología" },
  { id: generateUUID(), name: "Endocrinología" },
  { id: generateUUID(), name: "Flebología" },
  { id: generateUUID(), name: "Gastroenterología" },
  { id: generateUUID(), name: "Neurología" },
  { id: generateUUID(), name: "Nutrición infantil" },
  { id: generateUUID(), name: "Nutrición" },
  { id: generateUUID(), name: "Obstetricia" },
  { id: generateUUID(), name: "Oftalmología" },
  { id: generateUUID(), name: "Pediatría" },
  { id: generateUUID(), name: "Psiquiatría" },
  { id: generateUUID(), name: "Traumatología cadera y pelvis" }
];