 const Colours = {
	"Amount" : 7,
	"Palletes" : [
		{
			"Name" : "Daylight",
			"Main": "#e1c7a5",
			"Light": "#d3e3e2",
			"Dark" : "#eab875",
			"Contrast" : "#7bc5c1"
		},
		{
			"Name" : "Twilight",
			"Main": "#fcaa82",
			"Light": "#73a2ac",
			"Dark" : "#0b5d69",
			"Contrast" : "#ff8d70"
		},
		{
			"Name" : "Midnight",
			"Main" : "#58626e",
			"Light" : "#9db3be",
			"Dark" : "#314657",
			"Contrast" : "#cca152",
		},
		{
			"Name" : "Lagoon",
			"Main" : "#24afc1",
			"Light" : "#f8f8f8",
			"Dark" : "#1795a8",
			"Contrast" : "#fccf47",
		},
		{
			"Name" : "Ocean",
			"Main" : "#189ab4",
			"Light" : "#d4f2f4",
			"Dark" : "#04445f",
			"Contrast" : "#74e7da",
		},
		{
			"Name" : "Reef",
			"Main" : "#1fbabf",
			"Light" : "#60d3aa",
			"Dark" : "#0b759d",
			"Contrast" : "#9cee8c",
		},
		{
			"Name" : "Island",
			"Main" : "#0ab68b",
			"Light" : "#92de8b",
			"Dark" : "#028174",
			"Contrast" : "#ffe3b3",
		},
	]
}

let Active = []

function ChangeColour() {
	let colour = localStorage.getItem("Colour")
	if (!colour) {
		colour = 0
	} else if (colour >= Colours["Amount"]) {
		colour = 0
	}
	document.documentElement.style.setProperty('--main', Colours["Palletes"][colour]["Main"]);
	document.documentElement.style.setProperty('--light', Colours["Palletes"][colour]["Light"]);
	document.documentElement.style.setProperty('--dark', Colours["Palletes"][colour]["Dark"]);
	document.documentElement.style.setProperty('--contrast', Colours["Palletes"][colour]["Contrast"]);
    var background = Colours["Palletes"][colour]["Light"]
    document.body.style.backgroundColor = background
}

function Submit() {
    localStorage.setItem("Colour", Color.value)
    ChangeColour()
}

function RandInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Roll() {
    var Times = RandInt(21) + 1
    var Number = document.getElementById("Number")
    var a = 0
    while (a != Times) {
        Number.textContent = RandInt(100) + 1
        await sleep(10)
        a++
    }
    var Final = RandInt(100) + 1
    var b = 0
    var length = Active.length
    if (!length) {
        Length = 0
    }
    while (b != length) {
        if (Final == Active[b]) {
            Roll()
        }
        b++
    }
    Number.textContent = Final
    document.getElementById(Final.toString()).classList.add("active");
    Active.push(Final)
}

async function Restart() {
    var a = 0
    var length = Active.length
    if (!length) {
        length = 0
    }
    while (a != length) {
        document.getElementById(Active[a]).classList.remove("active")
        await sleep(10)
        a++
    }
}

ChangeColour()