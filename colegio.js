let intentos = 3;

const usuarios = [
    {
        documento: "111",
        rol: "director"
    },
    {
        documento: "222",
        rol: "docente"
    },
    {
        documento: "333",
        rol: "padres"
    },
    {
        documento: "444",
        rol: "comite"
    }
];

let menuActivo = "";

function ingresar() {

    const documento =
        document.getElementById("documento").value;

    const rol =
        document.getElementById("rol").value;

    const usuario = usuarios.find(
        u =>
        u.documento === documento &&
        u.rol === rol
    );

    if (usuario) {

        document.getElementById("login").style.display = "none";

        if (rol === "director") {
            document.getElementById("menuDirector").style.display = "block";
            menuActivo = "menuDirector";
        }

        if (rol === "docente") {
            document.getElementById("menuDocente").style.display = "block";
            menuActivo = "menuDocente";
        }

        if (rol === "padres") {
            document.getElementById("menuPadres").style.display = "block";
            menuActivo = "menuPadres";
        }

        if (rol === "comite") {
            document.getElementById("menuComite").style.display = "block";
            menuActivo = "menuComite";
        }

    } else {

        intentos--;

        if (intentos > 0) {

            alert(
                "Usuario no encontrado. Te quedan " +
                intentos +
                " intentos."
            );

        } else {

            alert("Acceso bloqueado");

        }
    }
}

function volverInicio() {

    document.getElementById("menuDirector").style.display = "none";
    document.getElementById("menuDocente").style.display = "none";
    document.getElementById("menuPadres").style.display = "none";
    document.getElementById("menuComite").style.display = "none";
    document.getElementById("modulo").style.display = "none";

    document.getElementById("login").style.display = "block";

    document.getElementById("documento").value = "";
    document.getElementById("rol").value = "";
}

function abrirModulo(nombre) {

    document.getElementById("menuDirector").style.display = "none";
    document.getElementById("menuDocente").style.display = "none";
    document.getElementById("menuPadres").style.display = "none";
    document.getElementById("menuComite").style.display = "none";

    document.getElementById("modulo").style.display = "block";

    document.getElementById("tituloModulo").innerHTML = nombre;

    let contenido = "";

    if (nombre === "Profesores") {

        contenido = `

        <h2>🔍 Buscar Alumno</h2>

        <input
        type="text"
        placeholder="Nombre del alumno">

        <button>
        Buscar Alumno
        </button>

        <img
        class="fotoAlumno"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">

        <h2>Juan Pérez</h2>

        <p><strong>Edad:</strong> 5A</p>
        <p><strong>Tipo de Sangre:</strong> O+</p>
        <p><strong>Teléfono:</strong> 3000000000</p>
        <p><strong>Padre:</strong> Pendiente</p>
        <p><strong>Madre:</strong> Pendiente</p>
        <p><strong>Acudiente:</strong> Pendiente</p>

        <hr><br>

        <h2>📚 Materias</h2>

        <input type="number" placeholder="Matemáticas">
        <input type="number" placeholder="Español">
        <input type="number" placeholder="Ciencias">
        <input type="number" placeholder="Inglés">
        <input type="number" placeholder="Sociales">
        <input type="number" placeholder="Informática">

        <button>Guardar Notas</button>

        <br><br>

        <h2>📝 Recomendaciones</h2>

        <textarea rows="5"></textarea>

        <button>Guardar Recomendación</button>

        <br><br>

        <h2>📩 Citaciones</h2>

        <textarea rows="4"></textarea>

        <button>Guardar Citación</button>

        <br><br>

        <h2>✅ Asistencia</h2>

        <select>
            <option>Alumno en Clase</option>
            <option>Alumno Ausente</option>
        </select>

        <button>Guardar Asistencia</button>

        <br><br>

        <h2>🚌 Salidas Pedagógicas</h2>

        <textarea rows="4"></textarea>

        <button>Guardar Salida</button>

        <br><br>

        <h2>📄 Autorizaciones</h2>

        <textarea rows="4"></textarea>

        <button>Guardar Autorización</button>

        <br><br>

        <h2>🏠 Entrega del Alumno</h2>

        <input
        type="text"
        placeholder="Nombre de quien recibe">

        <input
        type="time">

        <button>Guardar Entrega</button>

        `;
    }

    else if (nombre === "Alumnos") {

        contenido = `

        <img
        class="fotoAlumno"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">

        <h2>Mi Información</h2>

ad: 10 años</p>
        <p>Grado: 5A</p>

        <hr><br>

        <h2>📚 Materias</h2>

        <p>Matemáticas</p>
        <p>Español</p>
        <p>Inglés</p>
        <p>Ciencias</p>

        <hr><br>

        <h2>📊 Calificaciones</h2>

        <p>Matemáticas: 4.5</p>
        <p>Español: 4.7</p>

        <hr><br>

        <h2>🚌 Salidas Pedagógicas</h2>

        <p>Museo Interactivo</p>

        <hr><br>

        <h2>✉️ Mensaje al Profesor</h2>

        <textarea rows="5"></textarea>

        <button>Enviar Mensaje</button>

        `;
    }

    else if (nombre === "Director") {

        contenido = `

        <h2>🔍 Buscar Alumno</h2>

        <input
        type="text"
        placeholder="Nombre o documento">

        <button>Buscar</button>

        <hr><br>

        <h2>📣 Aviso General</h2>

        <textarea rows="5"></textarea>

        <button>Publicar Aviso</button>

        <hr><br>

        <h2>🕐 Horarios de Atención</h2>

        <textarea rows="4"></textarea>

        <button>Guardar Horarios</button>

        `;
    }

    else if (nombre === "Padres") {

        contenido = `

        <h2>📅 Solicitar Atención</h2>

        <input
        type="text"
        placeholder="Profesor">

        <input
        type="date">

        <input
        type="time">

        <textarea
        rows="4"
        placeholder="Motivo">
        </textarea>

        <button>
        Solicitar Atención
        </button>

        `;
    }

    else if (nombre === "Comité Estudiantil") {

        contenido = `

        <h2>📅 Eventos</h2>

        <textarea rows="4"></textarea>

        <button>Publicar Evento</button>

        <br><br>

        <h2>📢 Novedades</h2>

        <textarea rows="4"></textarea>

        <button>Publicar Novedad</button>

        <br><br>

        <h2>📌 Cartelera</h2>

        <textarea rows="4"></textarea>

        <button>Publicar Cartelera</button>

        <br><br>

        <h2>🚌 Salidas Pedagógicas</h2>

        <textarea rows="4"></textarea>

        <button>Publicar Salida</button>

        `;
    }

    else {

        contenido = `
        <h2>${nombre}</h2>
        <p>Módulo en construcción.</p>
        `;
    }

    document.getElementById("contenidoModulo").innerHTML =
        contenido;
}

function cerrarModulo() {

    document.getElementById("modulo").style.display = "none";

    if (menuActivo !== "") {
        document.getElementById(menuActivo).style.display = "block";
    }
}