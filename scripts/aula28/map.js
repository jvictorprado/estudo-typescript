// LEMBRAR DE TRANSPILAR ASSIM : tsc --downlevelIteration .\map.ts
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
var nameAge = new Map();
nameAge.set("Gon", 14);
nameAge.set("Killua", 14);
console.log(nameAge);
nameAge.set("Gon", 15); // sobrescreve o valor para essa chave
console.log(nameAge);
//OUTRA MANEIRA 
var nameAge2 = new Map().set("Leorio", 16).set("Kurapika", 15);
console.log(nameAge2);
//MAIS UMA MANEIRA
var animeEpisodes = new Map([
    ["DBZ", 200], ["HXH", 190]
]);
console.log(animeEpisodes);
// * alguns metodos do MAP:
console.log(animeEpisodes.get("DBZ")); // retorna o valor referente a essa chave
console.log(animeEpisodes.has("DBZ")); //retorna se o valor existe ou n
try {
    // console.log(animeEpisodes.delete("DBZ")); //deleta o valor e retorna true
    //animeEpisodes.clear(); //Limpa tudo
    // console.log(animeEpisodes.has("DBZ"));
    //ITERANDO
    for (var _f = __values(animeEpisodes.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var k = _g.value;
        console.log(k);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_g && !_g.done && (_a = _f["return"])) _a.call(_f);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _h = __values(animeEpisodes.values()), _j = _h.next(); !_j.done; _j = _h.next()) {
        var v = _j.value;
        console.log(v);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_j && !_j.done && (_b = _h["return"])) _b.call(_h);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    for (var _k = __values(animeEpisodes.entries()), _l = _k.next(); !_l.done; _l = _k.next()) {
        var ent = _l.value;
        // console.log(ent);
        console.log("".concat(ent[0], " | ").concat(ent[1]));
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_l && !_l.done && (_c = _k["return"])) _c.call(_k);
    }
    finally { if (e_3) throw e_3.error; }
}
try {
    for (var animeEpisodes_1 = __values(animeEpisodes), animeEpisodes_1_1 = animeEpisodes_1.next(); !animeEpisodes_1_1.done; animeEpisodes_1_1 = animeEpisodes_1.next()) { // funciona da msm forma que com entries
        var ent = animeEpisodes_1_1.value;
        // console.log(ent);
        console.log("".concat(ent[0], " | ").concat(ent[1]));
    }
}
catch (e_4_1) { e_4 = { error: e_4_1 }; }
finally {
    try {
        if (animeEpisodes_1_1 && !animeEpisodes_1_1.done && (_d = animeEpisodes_1["return"])) _d.call(animeEpisodes_1);
    }
    finally { if (e_4) throw e_4.error; }
}
try {
    //DESTRUCTURING
    for (var _m = __values(animeEpisodes.entries()), _o = _m.next(); !_o.done; _o = _m.next()) {
        var _p = __read(_o.value, 2), key = _p[0], value = _p[1];
        console.log("".concat(key, " | ").concat(value));
    }
}
catch (e_5_1) { e_5 = { error: e_5_1 }; }
finally {
    try {
        if (_o && !_o.done && (_e = _m["return"])) _e.call(_m);
    }
    finally { if (e_5) throw e_5.error; }
}
