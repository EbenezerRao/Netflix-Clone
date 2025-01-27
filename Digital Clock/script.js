// Functionality of the damn clock

function clk(){
    let frt = document.getElementById("time");
    let frd = document.getElementById("date");

    const now = new Date();

    const seconds = now.getSeconds().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const hours = now.getHours().toString().padStart(2,'0');

    const date = now.getDate().toString().padStart(2,'0');
    const month = (now.getMonth() + 1).toString().padStart(2,'0');
    const year = now.getFullYear();

    const timeconstant = `${hours}:${minutes}:${seconds}`;
    const dateconstant = `${date}/${month}/${year}`;

    frt.textContent = timeconstant;
    frd.textContent = dateconstant;
}

clk();
setInterval(clk, 1000);