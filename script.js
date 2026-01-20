const data = {
  name: "Habib Rehman A",
  role: "Java Full Stack Fresher",
  email: "habibrehman2923@gmail.com",
  phone: "+91 9750460849",
  location: "Madurai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/habib-rehman-92bb00293",
  summary:
    "Skilled in SQL, Core Java (OOP, Collections, Exception Handling) and Web Technologies. Built projects like Vaccination Alert System and AI-Powered Job Role Recommendation System. Passionate about continuous learning and teamwork.",
  about:
    "I am a fresher with strong fundamentals in Core Java, SQL and Web Development. I enjoy building projects that solve real-world problems and continuously improve my skills by practicing daily.",
  experience: [
    {
      company: "QSpiders (Software Development & Testing Training Institute)",
      period: "15 July 2023 – 10 Sep 2024",
      details:
        "Java Full Stack Certification training with strong practice in Java fundamentals, OOP, Collections, Multithreading, Exception handling, SQL, HTML, CSS and JavaScript."
    }
  ],
  achievements: [
    "Developed Vaccination Alert System to automate email reminders for vaccination schedules.",
    "Achieved 70% in B.Sc Computer Science.",
    "Built strong expertise in Java, SQL, Web technologies, Hibernate and Spring with consistent practice."
  ],
  skills: [
    { name: "Core Java", level: 85 },
    { name: "SQL (Oracle 10g)", level: 80 },
    { name: "HTML & CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "JDBC / J2EE", level: 65 },
    { name: "Spring / Hibernate (Basics)", level: 55 }
  ],
  projects: [
    {
      title: "Vaccination Alert System",
      desc:
        "A project model for reminding parents about children vaccination schedule using email-based alerts. Data updation is based on the child’s birthday."
    },
    {
      title: "AI-Powered Job Role Recommendation System",
      desc:
        "Built an AI system that analyzes user skills and resumes to recommend job roles. Frontend in HTML/CSS/JS, backend logic in Core Java, and database management in SQL."
    }
  ],
  education: [
    {
      title: "HSSC",
      year: "2018 – 2020",
      place: "APT Dorairaj Higher Secondary School (Madurai)"
    },
    {
      title: "B.Sc Computer Science (70%)",
      year: "2020 – 2023",
      place: "The American College (Madurai)"
    },
    {
      title: "M.Sc Computer Science (Data Analytics) - Pursuing",
      year: "2024 – 2026",
      place: "Madurai Kamaraj University"
    }
  ]
};

/* Fill dynamic content */
document.getElementById("logoName").innerText = data.name.split(" ")[0];
document.getElementById("heroName").innerText = data.name;
document.getElementById("heroTitle").innerText = data.role;
document.getElementById("heroSummary").innerText = data.summary;

document.getElementById("cardName").innerText = data.name;
document.getElementById("cardEmail").innerText = data.email;
document.getElementById("cardPhone").innerText = data.phone;
document.getElementById("cardLocation").innerText = data.location;

document.getElementById("aboutText").innerText = data.about;

/* Social links */
const socials = document.getElementById("socialLinks");
socials.innerHTML = `
  <a href="mailto:${data.email}">Email</a>
  <a href="tel:${data.phone.replace(/\s/g, "")}">Call</a>
  <a href="${data.linkedin}" target="_blank">LinkedIn</a>
`;

/* Resume button (you can change to your resume pdf file path later) */
document.getElementById("resumeBtn").href = "RehmanCV1.pdf";

/* Experience */
const expBox = document.getElementById("experienceBox");
data.experience.forEach(exp => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p><b>${exp.company}</b></p>
    <p>${exp.period}</p>
    <p>${exp.details}</p>
    <hr style="margin:12px 0; border:0; border-top:1px solid rgba(255,255,255,0.12);">
  `;
  expBox.appendChild(div);
});

/* Achievements */
const achList = document.getElementById("achievementsList");
data.achievements.forEach(a => {
  const li = document.createElement("li");
  li.innerText = a;
  achList.appendChild(li);
});

/* Skills */
const skillsGrid = document.getElementById("skillsGrid");
data.skills.forEach(s => {
  const card = document.createElement("div");
  card.className = "skill";
  card.innerHTML = `
    <div class="skill-head">
      <b>${s.name}</b>
      <span>${s.level}%</span>
    </div>
    <div class="bar">
      <div class="fill" style="width:${s.level}%"></div>
    </div>
  `;
  skillsGrid.appendChild(card);
});

/* Projects */
const projectsGrid = document.getElementById("projectsGrid");
data.projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  `;
  projectsGrid.appendChild(div);
});

/* Education */
const eduTimeline = document.getElementById("educationTimeline");
data.education.forEach(e => {
  const div = document.createElement("div");
  div.className = "edu-item";
  div.innerHTML = `
    <h3>${e.title}</h3>
    <p><b>${e.year}</b></p>
    <p>${e.place}</p>
  `;
  eduTimeline.appendChild(div);
});

/* Contact card */
document.getElementById("contactCard").innerHTML = `
  <p><b>Name:</b> ${data.name}</p>
  <p><b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></p>
  <p><b>Phone:</b> <a href="tel:${data.phone.replace(/\s/g, "")}">${data.phone}</a></p>
  <p><b>LinkedIn:</b> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
  <p><b>Location:</b> ${data.location}</p>
`;

/* Footer */
document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById("footerName").innerText = data.name;

/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

/* Active navbar on scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (pageYOffset >= secTop) current = sec.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      msg.style.color = "#88ffb1";
      msg.innerText = "✅ Message sent successfully! I will contact you soon.";
      form.reset();
    } else {
      msg.style.color = "orange";
      msg.innerText = "❌ Something went wrong. Try again!";
    }
  } catch (error) {
    msg.style.color = "red";
    msg.innerText = "❌ Network error. Please try again!";
  }
});

//done//