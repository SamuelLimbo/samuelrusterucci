console.log("plot_transmission.js is loaded");

const configurations = {
    gr: ["g", "r"],
    ri: ["r", "i"],
    gri: ["g", "r", "i"],
    ug: ["u", "g"],
    ugr: ["u", "g", "r"],
    ugri: ["u", "g", "r", "i"]
};


const colours = {
    u: "purple",
    g: "green",
    r: "red",
    i: "blue"
};


const options = document.querySelectorAll(".phot-option");


options.forEach(option => {

    option.addEventListener("mouseenter", function () {

        const config = this.dataset.value;

        plotConfiguration(config);

    });

});


async function plotConfiguration(config) {

    const filters = configurations[config];

    const traces = [];

    for (const filter of filters) {

        const response = await fetch("https://github.com/SamuelLimbo/samuelrusterucci/tree/main/Datahttps://raw.githubusercontent.com/SamuelLimbo/samuelrusterucci/main/Data/" + filter + ".txt");

        const text = await response.text();

        const rows = text
            .trim()
            .split("\n")
            .filter(row => !row.trim().startsWith("#"));

        const wavelength = [];
        const transmission = [];

        for (const row of rows) {

            const columns = row.trim().split(/\s+/);

            wavelength.push(Number(columns[0]));
            transmission.push(Number(columns[1]));

        }

        traces.push({
            x: wavelength,
            y: transmission,

            mode: "lines",

            name: filter,

            line: {
                color: colours[filter]
            }
        });
    }


    const layout = {

        title: config,

        xaxis: {
            title: "Wavelength"
        },

        yaxis: {
            title: "Transmission"
        }

    };


    Plotly.newPlot(
        "filterPlot",
        traces,
        layout
    );
}