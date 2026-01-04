function generateResume() {
    document.getElementById("r-name").innerText =
        document.getElementById("name").value;

    document.getElementById("r-email").innerText =
        document.getElementById("email").value;

    document.getElementById("r-phone").innerText =
        document.getElementById("phone").value;

    document.getElementById("r-objective").innerText =
        document.getElementById("objective").value;

    document.getElementById("r-education").innerText =
        document.getElementById("education").value;

    document.getElementById("r-skills").innerText =
        document.getElementById("skills").value;

    document.getElementById("r-projects").innerText =
        document.getElementById("projects").value;
}
function downloadPDF() {
    const resume = document.getElementById("resume");

    const options = {
    margin: [0.5, 0.5],
    filename: 'ATS_Resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
};


    html2pdf().set(options).from(resume).save();
}
function updateResume() {
    document.getElementById("r-name").innerText =
        document.getElementById("name").value || "Your Name";

    document.getElementById("r-email").innerText =
        document.getElementById("email").value || "email@example.com";

    document.getElementById("r-phone").innerText =
        document.getElementById("phone").value || "+91XXXXXXXXXX";

    document.getElementById("r-linkedin").innerText =
        document.getElementById("linkedin").value || "linkedin.com/in/yourname";

    document.getElementById("r-summary").innerText =
        document.getElementById("summary").value;

    // Skills
    const skills = document.getElementById("skills").value.split(",");
    const skillsList = document.getElementById("r-skills");
    skillsList.innerHTML = "";
    skills.forEach(skill => {
        if (skill.trim()) {
            const li = document.createElement("li");
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        }
    });

    // Experience
    const exp = document.getElementById("experience").value.split("\n");
    const expList = document.getElementById("r-experience");
    expList.innerHTML = "";
    exp.forEach(e => {
        if (e.trim()) {
            const li = document.createElement("li");
            li.innerText = e.trim();
            expList.appendChild(li);
        }
    });

    // Projects
    const proj = document.getElementById("projects").value.split("\n");
    const projList = document.getElementById("r-projects");
    projList.innerHTML = "";
    proj.forEach(p => {
        if (p.trim()) {
            const li = document.createElement("li");
            li.innerText = p.trim();
            projList.appendChild(li);
        }
    });

    document.getElementById("r-education").innerText =
        document.getElementById("education").value;

    // Certifications
    const certs = document.getElementById("certifications").value.split("\n");
    const certList = document.getElementById("r-certifications");
    certList.innerHTML = "";
    certs.forEach(c => {
        if (c.trim()) {
            const li = document.createElement("li");
            li.innerText = c.trim();
            certList.appendChild(li);
        }
    });
}
