var inp = document.getElementById('res');
var eq = '';

function display(n) {
    inp.value += n;

    if (n == 'x') {
        n = "*";
        eq += n;
    } else {
        eq += n;
    }
}

function div() {
    inp.value += '÷';
    eq += "/";
}

function eql() {
    var a = eq;
    inp.value = eval(a);
}

function clr() {
    inp.value = "";
    eq = "";
}

function back() {
    inp.value = inp.value.slice(0, -1);  // Remove last character from input
    eq = eq.slice(0, -1);  // Remove last character from the equation string
}
