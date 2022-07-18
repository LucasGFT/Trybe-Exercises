const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const modificarLesson2 = (obj, keys, value) => {
  obj.keys = value;
};

const listarKeys = (obj) => {
  Object.keys(obj);
};

const tamanhoObject = (obj) => {
  Object.keys(obj).length;
};

const valoresObject = (obj) => {
  Object.values(obj);
};

let allLessons = {};

Object.assign(allLessons, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const numeroTotalEstudantes = () => {
  let total =
    lesson1.numeroEstudantes +
    lesson2.numeroEstudantes +
    lesson3.numeroEstudantes;

  return total;
};

console.log(numeroTotalEstudantes());

const valorChave = (obj, indice) => {
  let objeto = Object.values(obj);
  return objeto[indice];
};

console.log(valorChave(lesson1, 0));
// Output: 'Matématica'
