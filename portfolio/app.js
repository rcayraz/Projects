/*
 * Archivo principal de la aplicación Vue.  Define los componentes para
 * cada sección del portafolio (Inicio, Sobre mí, Proyectos y
 * Contacto), configura el enrutador y monta la aplicación.
 *
 * Este enfoque utiliza Vue 3 y Vue Router 4 a través de sus CDN
 * (referenciados en index.html).  La aplicación se construye como
 * SPA pero navega sin recargar la página, proporcionando una
 * experiencia fluida.  Cada componente se define inline y se
 * alimenta de datos declarados en la función data() o a través de
 * constantes, facilitando modificaciones posteriores.
 */

// Componente de la página de inicio.  Muestra una hero con nombre y
// eslogan, seguido de un breve mensaje de bienvenida.
const Home = {
  name: 'Home',
  data() {
    return {
      name: 'Tu Nombre',
      tagline: 'Desarrollador web en Lima, Perú',
    };
  },
  template: `
    <div>
      <div class="hero">
        <h1>{{ name }}</h1>
        <p>{{ tagline }}</p>
        <router-link class="cta" to="/contacto">Contáctame</router-link>
      </div>
      <section>
        <h2>Bienvenido a mi portafolio</h2>
        <p>
          Este sitio ha sido construido con Vue.js para presentar mis
          habilidades, proyectos y experiencia profesional. Explora las
          distintas secciones para saber más sobre mí y el trabajo que
          realizo.
        </p>
      </section>
    </div>
  `,
};

// Componente para la sección "Sobre mí".  Presenta una breve biografía
// y una lista de habilidades principales.
const About = {
  name: 'About',
  data() {
    return {
      about:
        'Soy un desarrollador de software con experiencia en el diseño y desarrollo de aplicaciones web modernas. Actualmente resido en San Isidro, Lima, Perú. Me apasiona crear soluciones elegantes y funcionales utilizando tecnologías de vanguardia.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'Vue.js',
        'Node.js',
        'Python',
      ],
    };
  },
  template: `
    <section>
      <h2>Sobre mí</h2>
      <p>{{ about }}</p>
      <h3>Habilidades</h3>
      <ul class="skills">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  `,
};

// Lista de proyectos que se mostrarán en la sección de proyectos.
const projectList = [
  {
    title: 'Proyecto Uno',
    description:
      'Descripción breve del proyecto uno. Explica los objetivos y las tecnologías utilizadas.',
    technologies: 'Vue.js, Node.js',
    image: './assets/project1.png',
    link: '#',
  },
  {
    title: 'Proyecto Dos',
    description:
      'Descripción breve del proyecto dos. Este proyecto demuestra habilidades de frontend y diseño.',
    technologies: 'Vue.js, HTML, CSS',
    image: './assets/project2.png',
    link: '#',
  },
  {
    title: 'Proyecto Tres',
    description:
      'Descripción breve del proyecto tres. Aquí se integran servicios de terceros y APIs.',
    technologies: 'Vue.js, APIs externas',
    image: './assets/project3.png',
    link: '#',
  },
];

// Componente de proyectos.  Recorre la lista de proyectos y crea
// tarjetas para cada uno.  Las imágenes se cargan desde la carpeta
// assets.
const Projects = {
  name: 'Projects',
  data() {
    return {
      projects: projectList,
    };
  },
  template: `
    <section>
      <h2>Proyectos</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.title">
          <img :src="project.image" :alt="project.title" />
          <div class="project-content">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
            <p class="tech">Tecnologías: {{ project.technologies }}</p>
            <a :href="project.link" target="_blank">Ver proyecto</a>
          </div>
        </div>
      </div>
    </section>
  `,
};

// Componente de contacto.  Muestra información básica de contacto y
// anima al usuario a enviar un correo.  Puedes modificar el correo
// electrónico por el tuyo real.
const Contact = {
  name: 'Contact',
  data() {
    return {
      email: 'tu.email@example.com',
      message:
        '¿Tienes algún proyecto o propuesta? No dudes en escribirme y con gusto responderé a la brevedad.',
    };
  },
  template: `
    <section>
      <h2>Contacto</h2>
      <div class="contact-info">
        <p>{{ message }}</p>
        <p>
          Puedes enviarme un correo a:
          <a :href="'mailto:' + email">{{ email }}</a>
        </p>
      </div>
    </section>
  `,
};

// Componente raíz de la aplicación.  Contiene la barra de navegación,
// el contenedor principal donde se renderiza el contenido mediante
// <router-view> y el pie de página.
const App = {
  name: 'App',
  template: `
    <div>
      <nav>
        <router-link to="/" exact>Inicio</router-link>
        <router-link to="/sobre">Sobre mí</router-link>
        <router-link to="/proyectos">Proyectos</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        &copy; 2025 Tu Nombre. Todos los derechos reservados.
      </footer>
    </div>
  `,
};

// Definición de rutas para el enrutador.  Se utiliza el modo
// hash (#) para evitar problemas de configuración en servidores
// estáticos.  Cada ruta asocia una URL con un componente.
const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: About },
  { path: '/proyectos', component: Projects },
  { path: '/contacto', component: Contact },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// Crear y montar la aplicación.  Se registra el enrutador en la
// instancia de Vue.
Vue.createApp(App).use(router).mount('#app');