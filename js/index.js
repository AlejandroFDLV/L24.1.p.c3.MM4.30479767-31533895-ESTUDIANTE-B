//Estudiantes B
let estudiantes = [
    {nombre: "Jeiker", semestre: 4, nota: 20},
    {nombre: "Alejandro", semestre: 5, nota: 10},
    {nombre: "Morillo", semestre: 5, nota: 10},
    {nombre: "Jesus", semestre: 7, nota: 9},
    {nombre: "Santiago", semestre: 6, nota: 7},
    {nombre: "Roberto", semestre: 7, nota: 2},
    {nombre: "Andrés", semestre: 6, nota: 14},
    {nombre: "María", semestre: 3, nota: 17},
    {nombre: "Paula", semestre: 7, nota: 1},
    {nombre: "Daniel", semestre: 1, nota: 19}
];
let nombresDeAprobados = (estudiantes, nota) => {
    let estAPROB = [];
    estudiantes.forEach((estudiante) => {
        if(estudiante.nota > 9) estAPROB.push(estudiante);
    });
    return estAPROB;
}
let salida = document.getElementById("salida");
let estudiantesAprobados = nombresDeAprobados(estudiantes, 9);
salida.innerHTML = `Estudiantes Aprobados en total: <br>`;
estudiantesAprobados.forEach((estudiante) => {
    salida.innerHTML += `Nombre del estudiante: ${estudiante.nombre}<br>` 
});