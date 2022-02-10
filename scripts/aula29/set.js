var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var namesSet = new Set();
namesSet.add("João");
namesSet.add("Victor");
namesSet.add("João"); // Não adc pq o set é um conjunto, logo os elementos n se repetem
console.log(namesSet);
// outra forma de fazer :
var ns = new Set(["Silva", "Prado", "Moura", "Trigueiro", "Santos", "Araujo"]);
console.log(ns);
// alguns metodos
console.log(ns.has("Prado")); // checa se existe o elemento
console.log(ns["delete"]("Prado")); // deleta o elemento e retorna true(a n ser que o elemento nem exista, ai retorna false)
console.log(ns.has("Prado"));
console.log(ns.size);
try {
    // ns.clear(); // deleta td
    //iterando
    for (var ns_1 = __values(ns), ns_1_1 = ns_1.next(); !ns_1_1.done; ns_1_1 = ns_1.next()) {
        var i = ns_1_1.value;
        console.log(i);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ns_1_1 && !ns_1_1.done && (_a = ns_1["return"])) _a.call(ns_1);
    }
    finally { if (e_1) throw e_1.error; }
}
ns.forEach(function (elem) {
    console.log(elem);
});
