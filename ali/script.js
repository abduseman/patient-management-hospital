let patients = [];

function addPatient() {
  let id = document.getElementById("patientId").value;
  let name = document.getElementById("patientName").value;
  let age = document.getElementById("age").value;
  let disease = document.getElementById("disease").value;

  if (id === "" || name === "") {
    alert("Please fill all required fields");
    return;
  }

  let patient = {
    id: id,
    name: name,
    age: age,
    disease: disease
  };

  patients.push(patient);
  displayPatients();
}

function displayPatients() {
  let output = document.getElementById("output");
  output.innerHTML = "";

  patients.forEach(p => {
    output.innerHTML += `
      <div class="card">
        <p><b>ID:</b> ${p.id}</p>
        <p><b>Name:</b> ${p.name}</p>
        <p><b>Age:</b> ${p.age}</p>
        <p><b>Disease:</b> ${p.disease}</p>
        <hr>
      </div>
    `;
  });
}

function searchPatient() {
  let searchId = document.getElementById("search").value;
  let result = patients.find(p => p.id === searchId);

  let output = document.getElementById("output");

  if (result) {
    output.innerHTML = `
      <p><b>ID:</b> ${result.id}</p>
      <p><b>Name:</b> ${result.name}</p>
      <p><b>Age:</b> ${result.age}</p>
      <p><b>Disease:</b> ${result.disease}</p>
    `;
  } else {
    output.innerHTML = "Patient not found";
  }
}