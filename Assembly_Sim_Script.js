const motherboard = document.getElementById("motherboard");
const motherboardSlot = document.querySelector(".motherboard-slot");
const cpu = document.getElementById("cpu");
const cpuCooler = document.getElementById("cpu-cooler");


// =========================
// MOTHERBOARD DRAG
// =========================

motherboard.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "motherboard");
});


// =========================
// CPU DRAG
// =========================

cpu.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "cpu");
});


// =========================
// CPU COOLER DRAG
// =========================

cpuCooler.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "cpu-cooler");
});


// =========================
// CLICK SYSTEM
// =========================

let selectedPart = null;

motherboard.addEventListener("click", function () {
    selectedPart = "motherboard";
});

cpu.addEventListener("click", function () {
    selectedPart = "cpu";
});

cpuCooler.addEventListener("click", function () {
    selectedPart = "cpu-cooler";
});


// =========================
// MOTHERBOARD DROP
// =========================

motherboardSlot.addEventListener("dragover", function (event) {
    event.preventDefault();
});

motherboardSlot.addEventListener("drop", function (event) {

    event.preventDefault();

    const part = event.dataTransfer.getData("text/plain");

    if (part === "motherboard") {
        installMotherboard();
    }

});


// =========================
// MOTHERBOARD CLICK
// =========================

motherboardSlot.addEventListener("click", function () {

    if (selectedPart === "motherboard") {
        installMotherboard();
    }

});


// =========================
// INSTALL MOTHERBOARD
// =========================

function installMotherboard() {

    const image = motherboard.querySelector("img").cloneNode(true);

    image.classList.add("installed-motherboard");

    motherboardSlot.innerHTML = "";

    motherboardSlot.appendChild(image);

    motherboard.style.display = "none";

    selectedPart = null;


    // =========================
    // CREATE CPU SLOT
    // =========================

    const cpuSlot = document.createElement("div");

    cpuSlot.className = "cpu-slot";

    cpuSlot.textContent = "Drag CPU here";

    motherboardSlot.appendChild(cpuSlot);


    // =========================
    // CPU AREA
    // =========================

    cpuSlot.addEventListener("dragover", function (event) {
        event.preventDefault();
    });


    cpuSlot.addEventListener("drop", function (event) {

        event.preventDefault();

        const part = event.dataTransfer.getData("text/plain");


        // =========================
        // PLACE CPU
        // =========================

        if (part === "cpu") {

            const cpuImage = cpu.querySelector("img").cloneNode(true);

            cpuSlot.innerHTML = "";

            cpuSlot.appendChild(cpuImage);

            cpu.style.display = "none";

            selectedPart = null;

            createCoolerSlot(cpuSlot);
        }

    });


    // =========================
    // CPU CLICK
    // =========================

    cpuSlot.addEventListener("click", function () {

        if (selectedPart === "cpu") {

            const cpuImage = cpu.querySelector("img").cloneNode(true);

            cpuSlot.innerHTML = "";

            cpuSlot.appendChild(cpuImage);

            cpu.style.display = "none";

            selectedPart = null;

            createCoolerSlot(cpuSlot);
        }

    });

}


// =========================
// CREATE CPU COOLER SLOT
// =========================

function createCoolerSlot(cpuSlot) {

    const coolerSlot = document.createElement("div");

    coolerSlot.className = "cooler-slot";

    coolerSlot.textContent = "CPU Cooler";

    cpuSlot.appendChild(coolerSlot);


    // =========================
    // COOLER DRAG
    // =========================

    coolerSlot.addEventListener("dragover", function (event) {
        event.preventDefault();
    });


    coolerSlot.addEventListener("drop", function (event) {

        event.preventDefault();

        const part = event.dataTransfer.getData("text/plain");

        if (part === "cpu-cooler") {

            installCooler(coolerSlot);

        }

    });


    // =========================
    // COOLER CLICK
    // =========================

    coolerSlot.addEventListener("click", function () {

        if (selectedPart === "cpu-cooler") {

            installCooler(coolerSlot);

        }

    });

}


// =========================
// INSTALL CPU COOLER
// =========================

function installCooler(coolerSlot) {

    coolerSlot.innerHTML = "";

    const coolerImage = document.createElement("img");

    coolerImage.src = "CPU_Fan.png";

    coolerImage.alt = "CPU Cooler";

    coolerImage.className = "installed-cooler-image";

    coolerSlot.appendChild(coolerImage);

    cpuCooler.style.display = "none";

    selectedPart = null;

}
