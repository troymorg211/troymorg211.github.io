const projects = [  
    {  
      title: "Network Scanner",  
      tech: ["Python", "Scapy", "Nmap"],  
      github: "https://github.com/yourusername/network-scanner",  
      demo: "#",  
      description: "Scans local networks for open ports and vulnerabilities."  
    },  
    // Add more projects  
  ];  
  
  function renderProjects() {  
    const grid = document.getElementById("projects-grid");  
    projects.forEach(project => {  
      grid.innerHTML += `  
        <div class="project-card bg-gray-800 p-6 rounded-lg" data-aos="fade-up">  
          <h3 class="text-teal text-xl mb-2">${project.title}</h3>  
          <p class="mb-4">${project.description}</p>  
          <div class="flex gap-2 mb-4">  
            ${project.tech.map(t => `<span class="bg-teal/20 text-teal px-3 py-1 rounded-full">${t}</span>`).join('')}  
          </div>  
          <a href="${project.github}" class="text-teal hover:underline">GitHub →</a>  
        </div>  
      `;  
    });  
  }  
  renderProjects();  