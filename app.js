const btn = document.querySelectorAll(".btn");
const equation = document.querySelector(".display-equation");
const result = document.querySelector(".display-result");

function solveEq(target) {
    equation.value += target;
    result.textContent = eval(parseFloat(equation.value));
}

btn.forEach((element) => {
    element.addEventListener("click", (e) => {
        result.classList.remove("result-equal");
        equation.classList.remove("equation-equal");
        switch (e.target.value) {
            case "C":
                equation.value = "";
                result.textContent = "0";
                break;
            case "Del":
                if (equation.value.length > 1) {
                    equation.value = equation.value.slice(0, -1);
                    const lastChar = equation.value.charAt(equation.value.length - 1);
                    if (
                        lastChar === "+" ||
                        lastChar === "-" ||
                        lastChar === "*" ||
                        lastChar === "/"
                    ) {
                        result.textContent = eval(equation.value.slice(0, -1));
                    } else {
                        result.textContent = eval(equation.value);
                    }
                } else {
                    equation.value = "";
                    result.textContent = "0";
                }
                break;
            case "%":
                equation.value = parseFloat((equation.value / 100).toFixed(4));
                result.textContent = equation.value.toString();
                break;
            case "=":
                if (typeof eval(equation.value) === "number") {
                    equation.value = parseFloat(eval(equation.value).toFixed(4));
                    result.textContent = parseFloat(eval(equation.value).toFixed(4));
                    result.classList.add("result-equal");
                    equation.classList.add("equation-equal");
                } else {
                    result.textContent = equation.value.slice(0, -1);
                }
                break;
            default:
                if (e.target.value === ".") {
                    equation.value += e.target.value;
                    e.target.disabled = true;
                } else if (
                    e.target.value === "*" ||
                    (e.target.value === "/" && equation.value.length === 0)
                ) {
                    equation.value += "0" + e.target.value;
                } else {
                    equation.value += e.target.value;
                }

                if (
                    e.target.value === "+" ||
                    e.target.value === "-" ||
                    e.target.value === "*" ||
                    e.target.value === "/"
                ) {
                    document.getElementById("decimal").disabled = false;
                }
                if (
                    typeof eval(equation.value) === "number" &&
                    eval(equation.value) != Infinity &&
                    !isNaN(eval(equation.value))
                ) {
                    result.textContent = parseFloat(eval(equation.value).toFixed(4));
                    console.log("heloo");
                } else if (equation.value === "0") {
                    result.textContent = "0";
                    equation.value = "";
                } else if (
                    eval(equation.value) === Infinity ||
                    isNaN(eval(equation.value))
                ) {
                    result.textContent = "ERROR";
                    equation.value = "";
                } else {
                    result.textContent = equation.value.slice(0, -1);
                }

                break;
        }
    });
});

function activeDecimal(params) {}

function desableDecimal() {}