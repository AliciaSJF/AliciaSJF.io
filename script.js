document.addEventListener("DOMContentLoaded", () => {
    // Datos de los proyectos
    const projects = [
      {
        title: "Gestor de Tareas con IA",
        description:
          "Una aplicación de gestión de tareas inteligente que utiliza NLP para categorizar y priorizar tareas.",
        image: "https://source.unsplash.com/random/800x600/?ai",
        github: "https://github.com/tuusuario/ai-task-manager",
        demo: "https://ai-task-manager-demo.com",
      },
      {
        title: "Sistema de Votación Blockchain",
        description: "Un sistema de votación seguro y transparente construido con tecnología blockchain.",
        image: "https://source.unsplash.com/random/800x600/?blockchain",
        github: "https://github.com/tuusuario/blockchain-voting",
        demo: "https://blockchain-voting-demo.com",
      },
      // Agrega más proyectos aquí
    ]
  
    // Función para crear las tarjetas de proyectos
    function createProjectCards() {
      const projectList = document.getElementById("project-list")
      projects.forEach((project) => {
        const projectCard = `
                  <div class="col-md-4">
                      <div class="card project-card">
                          <img src="${project.image}" class="card-img-top" alt="${project.title}">
                          <div class="card-body">
                              <h5 class="card-title">${project.title}</h5>
                              <p class="card-text">${project.description}</p>
                              <a href="${project.github}" class="btn btn-primary" target="_blank">GitHub</a>
                              <a href="${project.demo}" class="btn btn-secondary" target="_blank">Demo</a>
                          </div>
                      </div>
                  </div>
              `
        projectList.innerHTML += projectCard
      })
    }
  
    // Llamar a la función para crear las tarjetas de proyectos
    createProjectCards()
  
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  })
  
  