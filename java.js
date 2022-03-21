window.addEventListener("load", init);
var kepek = [{
        cim: "01-es kép",
        eleresiut: "./kepek/_DSC7025.jpg",
        leírás: "Nature",
    },
    {
        cim: "02-es kép",
        eleresiut: "./kepek/_DSC7365.jpg",
        leírás: "Nature",
    },
    {
        cim: "03-es kép",
        eleresiut: "./kepek/_DSC7371_1.jpg",
        leírás: "Nature",
    },
    {
        cim: "04-es kép",
        eleresiut: "./kepek/_DSC7444.jpg",
        leírás: "Nature",
    },
    {
        cim: "05-es kép",
        eleresiut: "./kepek/_DSC7515.jpg",
        leírás: "Nature",
    }
]

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem)
}

function $(elem) {
    return document.querySelectorAll(elem)
}
var aktualiskepIndex = 0;

function init() {
    kiirKepek()
    kepkeret()
    kepMegjelenit()
    $("#bal")[0].addEventListener("click", bal)
    $("#jobb")[0].addEventListener("click", jobb)
}

function kiirKepek() {
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>" + kepek[i].cim + "</h3>" + "<img src='" + kepek[i].eleresiut + "' class='kepek' id='" + i + "' alt='cicás képek'/>" +
            "<p>" + kepek[i].leírás + "</p> </div>"
    }
    ID("galeria").innerHTML = txt;

}

function kepkeret() {
    for (let index = 0; index < kepek.length; index++) {
        $("#galeria div img")[index].addEventListener("click", kattintás)
    }
}

function kattintás(event) {
    //console.log(event.target.id)
    aktualiskepIndex = event.target.id
    kepMegjelenit();
}

function kepMegjelenit() {
    var txt = "<img src='" + kepek[aktualiskepIndex].eleresiut + "' alt='nagykep'/>"
    ID("nagykep").innerHTML = txt;

}

function bal() {
    aktualiskepIndex--;
    if (aktualiskepIndex < 0) {
        aktualiskepIndex = kepek.length - 1
    }
    kepMegjelenit()
}

function jobb() {
    aktualiskepIndex++;
    if (aktualiskepIndex > kepek.length - 1) {
        aktualiskepIndex = 0
    }
    kepMegjelenit()
}