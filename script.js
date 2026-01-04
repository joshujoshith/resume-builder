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
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resume).save();
}
function updateResume() {
    document.getElementById("r-name").innerText =
        document.getElementById("name").value || "Your Name";

    document.getElementById("r-email").innerText =
        document.getElementById("email").value || "Email";

    document.getElementById("r-phone").innerText =
        document.getElementById("phone").value || "Phone";

    document.getElementById("r-objective").innerText =
        document.getElementById("objective").value;

    document.getElementById("r-education").innerText =
        document.getElementById("education").value;

    document.getElementById("r-skills").innerText =
        document.getElementById("skills").value;

    document.getElementById("r-projects").innerText =
        document.getElementById("projects").value;
}
