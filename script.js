function sayHello() {
    let name = document.getElementById("nameInput").value;
    let output = document.getElementById("output");
    if (name) {
        output.innerText = `Hello، ${name}!`;
    } else {
        output.innerText = "Please Enter Your Name!";
    }
}
