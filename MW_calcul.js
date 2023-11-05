var ptable = {
  H: 1.0,
  He: 4.0,
  Li: 6.9,
  Be: 9.0,
  B: 10.8,
  C: 12.0,
  N: 14.0,
  O: 16.0,
  F: 19.0,
  Ne: 20.2,
  Na: 22.9,
  Mg: 24.3,
  Al: 26.9,
  Si: 28.1,
  P: 31.0,
  S: 32.1,
  Cl: 35.5,
  K: 39.1,
  Ar: 39.9,
  Ca: 40.1,
  Sc: 44.9,
  Ti: 47.9,
  V: 50.9,
  Cr: 52.0,
  Mn: 54.9,
  Fe: 55.8,
  Ni: 58.7,
  Co: 58.9,
  Cu: 63.5,
  Zn: 65.4,
  Ga: 69.7,
  Ge: 72.6,
  As: 74.9,
  Se: 79.0,
  Br: 79.9,
  Kr: 83.8,
  Rb: 85.5,
  Sr: 87.6,
  Y: 88.9,
  Zr: 91.2,
  Nb: 92.9,
  Mo: 95.9,
  Tc: 98.0,
  Ru: 101.1,
  Rh: 102.9,
  Pd: 106.4,
  Ag: 107.9,
  Cd: 112.4,
  In: 114.8,
  Sn: 118.7,
  Sb: 121.8,
  I: 126.9,
  Te: 127.6,
  Xe: 131.3,
  Cs: 132.9,
  Ba: 137.3,
  La: 138.9,
  Ce: 140.1,
  Pr: 140.9,
  Nd: 144.2,
  Pm: 145.0,
  Sm: 150.4,
  Eu: 152.0,
  Gd: 157.3,
  Tb: 158.9,
  Dy: 162.5,
  Ho: 164.9,
  Er: 167.3,
  Tm: 168.9,
  Yb: 173.0,
  Lu: 175.0,
  Hf: 178.5,
  Ta: 180.9,
  W: 183.8,
  Re: 186.2,
  Os: 190.2,
  Ir: 192.2,
  Pt: 195.1,
  Au: 197.0,
  Hg: 200.6,
  Tl: 204.4,
  Pb: 207.2,
  Bi: 208.9,
  Th: 232.0,
  Pa: 231.0,
  U: 238.0,
  Np: 237.0,
  Pu: 244.0,
  Am: 243.0,
  Cm: 247.0,
  Bk: 247.0,
  Cf: 251.0,
  Es: 252.0,
  Fm: 257.0,
  Md: 258.0,
  No: 259.0,
  Lr: 262.0,
  Rf: 267.0,
  Db: 270.0,
  Sg: 271.0,
  Bh: 270.0,
  Hs: 277.0,
  Mt: 276.0,
  Ds: 281.0,
  Rg: 280.0,
  Cn: 285.0,
  Nh: 284.0,
  Fl: 289.0,
  Mc: 288.0,
  Lv: 293.0,
  Ts: 294.0,
  Og: 294.0,
};
// L2O+45gorn+Fea2Ge+Ca2(OH)=wi
function recognizer(formula) {
  const perm = formula; //permanent
  let txt = formula; //changing
  let a = 0; // coma counter
  for (let i = 1; i < perm.length; i++) {
    if (!isNaN(parseInt(perm[i])) && !isNaN(parseInt(perm[i - 1]))) {
      //first and second are numbers (long number case)
      continue;
    } else if (perm[i] === perm[i].toUpperCase()) {
      //second is capital or a number
      txt = txt.slice(0, i + a) + "," + txt.slice(i + a);
      a++;
    }
  }
  const arr = txt.split(",");
  //  document.getElementById("result").innerHTML += arr;
  return arr;
}

function mass_counter(arr) {
  let ele = "";
  let result = 0;
  let fir_num = 1;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) {
      // is NOT a number
      ele = arr[i];
      if (ptable.hasOwnProperty(ele)) {
        result += ptable[ele];
      } else {
        document.getElementById("result").innerHTML = `unrecognized "${ele}" !`;
        return 0;
      }
    } else if (!isNaN(parseInt(arr[i])) && i == 0) {
      // first is a number
      fir_num = arr[0];
    } else {
      // is a number
      result += ptable[ele] * (parseInt(arr[i]) - 1);
    }
  }
  return result * fir_num;
}

document.getElementById("sbm").onclick = function (event) {
  let user_inp = document.getElementById("formula").value;
  formula = user_inp.trim();

  let g_result = 0; //Global result
  if (!formula.includes("(")) {
    g_result = mass_counter(recognizer(formula));
  } else {
    const tmp_a1 = formula.split("(");
    g_result = mass_counter(recognizer(tmp_a1[0])); //counted before bracet
    const tmp_a2 = tmp_a1[1].split(")");
    let insider = mass_counter(recognizer(tmp_a2[0]));
    const tmp_a3 = recognizer(tmp_a2[1]);
    g_result += insider * parseInt(tmp_a3[0]); //counted incide bracet*index
    g_result += mass_counter(tmp_a3.slice(1)); //counted after bracet omiting first index
  }
  if (!isNaN(g_result) && g_result > 0) {
    document.getElementById("result").innerHTML = g_result.toFixed(1);
  } else {
    document.getElementById("result").innerHTML = "Wrong input!";
  }
};

// INteractive periodic table
const elements = document.querySelectorAll(".element");

function eleClicked(ind) {}
