//declaro una constante que se encargara de almacenar la direccion del link de la API
const linkRepository = 'https://api.github.com/users/eduardoGarce/repos';
const username = 'eduardoGarce';
const listRepository = document.querySelector('#list-repository');

const css = `<svg fill="currentColor" class="technology-icons css-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	                            height="800px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                <g id="c133de6af664cd4f011a55de6b001b19">
                                    <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302
		                                H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606
		                                l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062
		                                l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z">
                                    </path>
                                </g>
                            </svg>`;
const html = `<svg width="800px" class="technology-icons html-icon" height="800px" viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="currentColor">
                                        <g transform="translate(56.000000, 160.000000)">
                                            <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>`;
const js = `<svg width="800px" class="technology-icons js-icon" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                    <g transform="translate(-420.000000, -7479.000000)" fill="currentColor">
                                        <g transform="translate(56.000000, 160.000000)">
                                            <path d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>`;

//creo la funcion que se va a encargar de traer los repositorios, extraer sus nombres, sus descripciones, las tecnologias de cada repositorio y renderizar todo
//se declara como una funcion de flecha pero se incluye la palabra async para indicar a la maquina que es una funcion asincrona
const renderRepository = async () => {
    //se utiliza try porque puede que el codigo genere errores y en ese caso el control pasara a ser del bloque catch
    try {
        //declaro una constante en la que almaceno la respuesta del llamado a la API encargada de traer los repositorios con sus nombres y descripciones, tambien se transforma a json
        const responseRepository = await(await fetch(linkRepository)).json();

        //declaro un array que va a contener todos los objetos de repositorios
        let repositorys = [];

        //vacio la lista antes de empezar a añadir elementos
        listRepository.innerHTML = '';
        
        //creo un forEach para acceder al nombre de cada repositorio e ir añadiendo su nombre al array que contiene los nombres, lo mismo para las descripciones
        for (const repo of responseRepository) {
            //creo una constante en la cual guardo la respuesta del llamado de la api que trae las tecnologias del repositorio sin transformar a json
            const responseTechnology = await fetch(`https://api.github.com/repos/${username}/${repo.name}/languages`);
            
            //creo un if para detectar si la respuesta llego o no
            //en la comprobacion se accede a una propiedad http llamada ok y se comprueba que sea diferente de true
            if (!responseTechnology.ok) {
                //se instancia un nuevo error con new error y ademas se agrega como mensaje el error encontrado
                //trhow se encarga de detener la ejecucion del codigo y redirige la lectura al catch mas cercano
                throw new Error(data.message);
            }

            //se convierte el json que se obtuvo como respuesta de la llamada de las tecnologias y a su vez se almacena en una nueva constante;
            const dataTechnologys = await responseTechnology.json();

            //declaro una variable en donde voy a almacenar las tecnologias que tenga el repositorio
            let technologys = '';

            //compruebo una a una cada tecnologia para ver si se encuentra en el repositorio, en el caso de ser verdadero, la almaceno en la variable technologys
            if (dataTechnologys.HTML) {
                technologys += html;
            } if (dataTechnologys.CSS) {
                technologys += css;
            } if (dataTechnologys.JavaScript) {
                technologys += js;
            }

            //creo el li en el que voy a almacenar el repositorio
            const liRepository = document.createElement('li');

            //selecciono el ultimo hijo de la lista y lo guardo en una constante
            const lastChildren = listRepository.lastElementChild;

            //compruebo si existe un hijo en la lista y de no ser asi le agrego la primera clase al liRepository
            if (!lastChildren) {
                liRepository.classList.add('first-repository');
            } else if (lastChildren.classList.contains('first-repository')) {
                liRepository.classList.add('second-repository');
            } else {
                liRepository.classList.add('first-repository');
            }

            //se le añade toda la estructura que ira dentro del li 
            liRepository.innerHTML = `
                <div class="repository">
                        <h3 class="repository-title"><a href="${repo.html_url}">${repo.name.replace(/-/g, ' ')}</a></h3>
                        <p class="repository-description">${repo.description}</p>
                        <div class="technology-icons-container">
                            ${technologys}
                        </div>
                    </div>
            `;

            //se añade el li como ultimo hijo de la lista 
            listRepository.appendChild(liRepository);
        }
        
    }catch  (error){
        console.log(error);
        alert(error);
    }
}

// Función que inicia los procesos asincronos
const init = async () => {
    await renderRepository();

    const listItems = document.querySelectorAll("#list-repository li");

    const loadRepository = (entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                if (entrada.target.classList.contains('first-repository')) {
                    entrada.target.children[0].classList.add('first');
                } else {
                    entrada.target.children[0].classList.add('second');
                }
            }
        })
    }

    const observador = new IntersectionObserver(loadRepository, {
        threshold: 0.1
    });

    listItems.forEach(Item => {
        observador.observe(Item);
    })
};

init();

// const observador = new IntersectionObserver()

//este evento se ejecuta cada vez que se recarga la pagina
window.onload = () => {
    //este bloque de codigo se ejecutara despues de que pase la cantidad de milisegundos especificados al final de la misma
    setTimeout(() => {
        //compruebo si no hay scroll vertical en la pagina
        if (!window.scrollY) {
            //esta funcion permite controlar el desplazamiento de la pagina basandose en pixeles
            window.scrollBy({
            top: 40,
            left: 0,
            //smooth sirve para suavizar el desplazamiento creando una transicion
            behavior: 'smooth'
            });
        }
    //esta funcion se ejecutara despues de 3.5 segundos
    }, 3500);
};