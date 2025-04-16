function getBotResponse() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const responseBox = document.getElementById("chatResponse");
  
    let response = "I'm not sure how to answer that. Try asking about my work experience, projects, or skills.";
  
    if (input.includes("experience")) {
      response = "I have 4+ years of Salesforce experience, including work at Workday and Verzeo across healthcare, insurance, and hospitality sectors.";
    } else if (input.includes("projects")) {
      response = "I've worked on Lightning Datatable with Picklist Inline Editing and a Dynamic Territory Manager tool using Apex and LWC.";
    } else if (input.includes("skills")) {
      response = "My skills include Apex, Visualforce, Lightning Web Components, SOQL, JavaScript, HTML/CSS, and Salesforce Clouds.";
    } else if (input.includes("certification")) {
      response = "I'm certified in Salesforce Administrator, Platform Developer I & II, AI Associate, and AI Specialist.";
    } else if (input.includes("contact")) {
      response = "You can reach me at dhanushkautilya@gmail.com or on LinkedIn: dhanush-kammaripalle.";
    }
  
    responseBox.innerText = response;
    document.getElementById("userInput").value = "";
  }
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger once on load
});
  