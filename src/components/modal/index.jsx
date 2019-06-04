const React = require("react");

function onClick() {
    fetch("http://localhost:8082/", {
        method: "POST",
        body: "qwqweqwe"
    }).then((data) => console.log).catch((err) => {
        console.log(err.message)
    })
}

module.exports = function Modal() {
    return <section id="modal">
        <h2>My bird</h2>
        <img src={require('../../img/1558957916720.jpg')} alt="" />
        <button onClick={onClick}>Click</button>
    </section>
}

