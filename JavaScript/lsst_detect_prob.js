const sigmoidParams = {
    "gr,16": { a: -0.976, b: 1.748, alpha: -0.228, shift_M_V: 3.484, shift_r_h: -2.45, k0: -0.527, k1: -0.046, k2: 1.523 },
    "gr,34": { a: -0.568, b: 0.894, alpha: -0.323, shift_M_V: 3.883, shift_r_h: -2.363, k0: -0.545, k1: -0.05, k2: 1.537 },
    "gr,73": { a: 1.615, b: -0.665, alpha: 0.324, shift_M_V: 0.781, shift_r_h: -1.939, k0: -0.685, k1: -0.09, k2: 2.191 },
    "gr,158": { a: -5.43, b: -1.145, alpha: 1.332, shift_M_V: -0.808, shift_r_h: 1.089, k0: -0.344, k1: -0.302, k2: -5.573 },
    "gr,340": { a: -1.303, b: -7.02, alpha: -3.012, shift_M_V: -2.813, shift_r_h: 1.299, k0: -0.367, k1: 0.036, k2: -6.082 },
    "gr,732": { a: -1.195, b: -5.81, alpha: -2.78, shift_M_V: -4.417, shift_r_h: 1.599, k0: -0.171, k1: 0.07, k2: -7.519 },

    "ri,16": { a: 1.228, b: -0.762, alpha: 0.237, shift_M_V: 3.806, shift_r_h: -2.802, k0: -0.558, k1: -0.039, k2: 1.631 },
    "ri,34": { a: -0.631, b: 0.822, alpha: -0.261, shift_M_V: 3.594, shift_r_h: -2.495, k0: -0.596, k1: -0.054, k2: 1.89 },
    "ri,73": { a: -0.729, b: 1.337, alpha: -0.479, shift_M_V: 0.559, shift_r_h: -0.981, k0: -0.957, k1: -0.258, k2: 0.342 },
    "ri,158": { a: -1.129, b: -5.63, alpha: -1.31, shift_M_V: -1.018, shift_r_h: 1.107, k0: -0.287, k1: -0.242, k2: -6.372 },
    "ri,340": { a: -1.271, b: -6.92, alpha: -2.848, shift_M_V: -3.09, shift_r_h: 1.299, k0: -0.367, k1: 0.033, k2: -6.102 },
    "ri,732": { a: -1.274, b: -5.899, alpha: -3.11, shift_M_V: -4.627, shift_r_h: 1.599, k0: -0.167, k1: 0.047, k2: -7.686 },

    "gri,16": { a: 2.183, b: -1.205, alpha: 0.232, shift_M_V: 3.341, shift_r_h: -2.145, k0: -0.515, k1: -0.06, k2: 1.314 },
    "gri,34": { a: -0.636, b: 0.872, alpha: -0.266, shift_M_V: 3.63, shift_r_h: -2.235, k0: -0.504, k1: -0.05, k2: 1.163 },
    "gri,73": { a: 1.622, b: -0.695, alpha: 0.31, shift_M_V: 0.498, shift_r_h: -1.719, k0: -0.619, k1: -0.097, k2: 1.131 },
    "gri,158": { a: -1.086, b: -4.926, alpha: -1.513, shift_M_V: -0.914, shift_r_h: 1.085, k0: -0.293, k1: -0.258, k2: -5.587 },
    "gri,340": { a: -1.094, b: -6.528, alpha: -2.706, shift_M_V: -2.931, shift_r_h: 1.299, k0: -0.31, k1: 0.018, k2: -6.462 },
    "gri,732": { a: -4.681, b: -0.942, alpha: 1.839, shift_M_V: -4.343, shift_r_h: 1.694, k0: -0.181, k1: 0.067, k2: -7.299 },

    "ug,16": { a: -1.035, b: 1.665, alpha: -0.216, shift_M_V: 2.954, shift_r_h: -2.13, k0: -0.396, k1: -0.071, k2: -0.033 },
    "ug,34": { a: -0.58, b: 0.667, alpha: -0.237, shift_M_V: 3.432, shift_r_h: -2.208, k0: -0.423, k1: -0.054, k2: 0.636 },
    "ug,73": { a: 1.278, b: -0.578, alpha: 0.332, shift_M_V: 0.46, shift_r_h: -1.473, k0: -0.515, k1: -0.096, k2: 0.277 },
    "ug,158": { a: -0.681, b: -3.472, alpha: -1.241, shift_M_V: -1.129, shift_r_h: 1.118, k0: -0.253, k1: -0.206, k2: -4.075 },
    "ug,340": { a: -0.798, b: -5.24, alpha: -2.681, shift_M_V: -2.873, shift_r_h: 1.298, k0: -0.24, k1: 0.065, k2: -5.863 },
    "ug,732": { a: -0.71, b: -4.338, alpha: -2.053, shift_M_V: -4.286, shift_r_h: 1.697, k0: -0.342, k1: 0.183, k2: -4.897 },

    "ugr,16": { a: -1.296, b: 2.168, alpha: -0.231, shift_M_V: 2.545, shift_r_h: -1.775, k0: -0.484, k1: -0.09, k2: 0.278 },
    "ugr,34": { a: -0.741, b: 0.965, alpha: -0.201, shift_M_V: 2.612, shift_r_h: -2.098, k0: -0.416, k1: -0.069, k2: 0.485 },
    "ugr,73": { a: -0.589, b: 1.264, alpha: -0.319, shift_M_V: 0.19, shift_r_h: -1.41, k0: -0.523, k1: -0.105, k2: 0.067 },
    "ugr,158": { a: -0.65, b: -3.811, alpha: -1.291, shift_M_V: -1.285, shift_r_h: 1.131, k0: -0.205, k1: -0.165, k2: -4.436 },
    "ugr,340": { a: -0.706, b: -5.694, alpha: -3.057, shift_M_V: -3.145, shift_r_h: 1.298, k0: -0.238, k1: 0.111, k2: -5.967 },
    "ugr,732": { a: -0.585, b: -4.224, alpha: -2.469, shift_M_V: -4.685, shift_r_h: 1.698, k0: -0.345, k1: 0.257, k2: -4.595 },

    "ugri,16": { a: -1.375, b: 2.343, alpha: -0.242, shift_M_V: 2.706, shift_r_h: -1.691, k0: -0.498, k1: -0.09, k2: 0.458 },
    "ugri,34": { a: -0.802, b: 1.099, alpha: -0.199, shift_M_V: 2.335, shift_r_h: -1.973, k0: -0.412, k1: -0.069, k2: 0.292 },
    "ugri,73": { a: -0.711, b: 0.935, alpha: -0.276, shift_M_V: 0.523, shift_r_h: -0.945, k0: -0.636, k1: -0.191, k2: -0.271 },
    "ugri,158": { a: -3.654, b: -0.674, alpha: 1.423, shift_M_V: -1.35, shift_r_h: 1.161, k0: -0.21, k1: -0.121, k2: -4.267 },
    "ugri,340": { a: -0.664, b: -5.475, alpha: -3.286, shift_M_V: -3.241, shift_r_h: 1.298, k0: -0.211, k1: 0.135, k2: -5.884 },
    "ugri,732": { a: -4.765, b: -0.503, alpha: 3.223, shift_M_V: -4.771, shift_r_h: 1.599, k0: -0.344, k1: 0.313, k2: -4.435 },
};



document.querySelectorAll(".phot-option").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("phot_config").value = this.dataset.value;

        // Clear "selected" from all buttons, then mark this one
        document.querySelectorAll(".phot-option").forEach(btn => {
            btn.classList.remove("selected");
        });
        this.classList.add("selected");

        calculate();
    });
});

document.querySelectorAll(".calc-input").forEach(input => {
    input.addEventListener("input", calculate);
});

function sigmoidModel(M_V, r_h, a, b, alpha, shift_M_V, shift_r_h, k0, k1, k2) {

    const x = r_h - shift_r_h;

    const h = a * x ** 2 + (b - a) * x ** 2 * (1 / (1 + Math.exp(-alpha * x))) + shift_M_V;

    const h_prime_1 = 2 * a * x;
    const h_prime_2 = 2 * (b - a) * x / (1 + Math.exp(-alpha * x));
    const h_prime_3 = (b - a) * x ** 2 * (
        alpha * Math.exp(-alpha * x) / (1 + Math.exp(-alpha * x)) ** 2
    );

    const h_r_h_prime = h_prime_1 + h_prime_2 + h_prime_3;

    const k_r_h = k0 * x ** 2 + k1 * x + k2;

    const phi = (M_V - h) / Math.sqrt(1 + h_r_h_prime ** 2);

    return 1 / (1 + Math.exp(-k_r_h * phi));
}

function calculate() {

    const phot_config = document.getElementById("phot_config").value;

    const distanceRaw = document.getElementById("distance").value;
    const M_VRaw = document.getElementById("M_V").value;
    const r_hRaw = document.getElementById("r_h").value;

    const output = document.getElementById("output");

    // Wait until a config is chosen and all three fields are filled in
    if (!phot_config || distanceRaw === "" || M_VRaw === "" || r_hRaw === "") {
        output.textContent = "";
        return;
    }

    const distance = Number(distanceRaw);
    const M_V = Number(M_VRaw);
    const r_h = Number(r_hRaw);

    let result;

    if (distance < 10 || distance > 1000 || M_V < -8 || M_V > 2 || r_h < 1 || r_h > 1000) {
        // output.textContent = "Please enter a value within the boundaries of the study, i.e.:";
        output.innerHTML = "Please enter a value within the boundaries of the study, i.e.: $10 < d < 1000$ kpc, $-8 < M_\\mathrm{V} < 2$, $1 < r_h < 1000$ pc";
        if (window.MathJax) {
            MathJax.typesetPromise([output]);
        }
        return;
    }

    else if (phot_config === "gr") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["gr,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["gr,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["gr,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["gr,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["gr,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["gr,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    else if (phot_config === "ri") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["ri,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["ri,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["ri,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["ri,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["ri,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["ri,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    else if (phot_config === "gri") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["gri,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["gri,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["gri,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["gri,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["gri,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["gri,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    else if (phot_config === "ug") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["ug,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["ug,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["ug,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["ug,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["ug,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["ug,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    else if (phot_config === "ugr") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["ugr,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["ugr,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["ugr,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["ugr,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["ugr,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["ugr,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    else if (phot_config === "ugri") {
        if (distance >= 10 && distance < 21.5) {
            const p = sigmoidParams["ugri,16"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 21.5 && distance < 46.4) {
            const p = sigmoidParams["ugri,34"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 46.4 && distance < 100.0) {
            const p = sigmoidParams["ugri,73"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 100.0 && distance < 215.4) {
            const p = sigmoidParams["ugri,158"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 215.4 && distance < 464.2) {
            const p = sigmoidParams["ugri,340"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
        if (distance >= 464.2 && distance <= 1000.0) {
            const p = sigmoidParams["ugri,732"];
            result = sigmoidModel(M_V, Math.log10(r_h), p.a, p.b, p.alpha, p.shift_M_V, p.shift_r_h, p.k0, p.k1, p.k2);
        }
    }

    // Display the result, or a message if this config/distance isn't supported yet
    output.textContent = (result !== undefined)
        ? "Detection probability: " + result.toFixed(2)
        : "No result available for this configuration and distance";
}