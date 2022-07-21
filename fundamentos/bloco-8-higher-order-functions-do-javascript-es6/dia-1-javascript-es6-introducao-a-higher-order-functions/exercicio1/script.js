const obj = (nomeCompleto, email) => {
//   console.log({ 'nomeCompleto': nomeCompleto, 'email': email });
  return { 'nomeCompleto': nomeCompleto, 'email': email };
};
// obj('testeee', 'test')
const newEmployees = (nome1, nome2, nome3, email) => {
  const employees = {
    id1: obj(nome1 , email),
    id2: obj(nome2 , email),
    id3: obj(nome3 , email),

  };
//   console.log(employees);
  return employees
};

console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva', 'test@gmail.com'))