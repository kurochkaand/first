// Calculate button of the first calculator
document.getElementById("conc").onclick = function (event) {
  let ab = document.getElementById("ab").value;
  let ec = document.getElementById("ec").value;
  let pl = document.getElementById("pl").value;
  let con1 = document.getElementById("concentration1").value;
  let c1_unit = document.getElementById("c1_unit").value;
  let mult = -2;
  if (c1_unit === "nM") {
    mult = 1e9;
  } else if (c1_unit === "μM") {
    mult = 1e6;
  } else if (c1_unit === "mM") {
    mult = 1e3;
  }

  if (ab === "") {
    ab = (ec * con1 * pl) / mult;
    document.getElementById("ab").value = ab.toFixed(3);
  } else if (ec === "") {
    ec = (ab * pl * mult) / con1;
    document.getElementById("ec").value = ec.toFixed(3);
  } else if (pl === "") {
    pl = (ab * mult) / (con1 * ec);
    document.getElementById("pl").value = pl.toFixed(3);
  } else {
    con1 = (ab * pl * mult) / ec;
    document.getElementById("concentration1").value = con1.toFixed(3);
  }
};
// Reset button of the first calculator
document.getElementById("reset1").onclick = function (event) {
  var ab = document.getElementById("ab");
  ab.value = ab.defaultValue;
  var ec = document.getElementById("ec");
  ec.value = ec.defaultValue;
  var pl = document.getElementById("pl");
  pl.value = pl.defaultValue;
  var c1_unit = document.getElementById("c1_unit");
  c1_unit.value = "μM";
  document.getElementById("concentration1").value = null;
};
// Calculate button of the second calculator
document.getElementById("calculate2").onclick = function (event) {
  let mass = document.getElementById("mass").value;
  let m_unit = document.getElementById("m_unit").value;
  let mass_mult;
  if (m_unit == "mg") {
    mass_mult = 1e-3;
  } else if (m_unit == "g") {
    mass_mult = 1;
  } else if (m_unit == "kg") {
    mass_mult = 1e3;
  }

  let vol = document.getElementById("vol").value;
  let v_unit = document.getElementById("v_unit").value;
  let vol_mult;
  if (v_unit == "μL") {
    vol_mult = 1e-6;
  } else if (v_unit == "mL") {
    vol_mult = 1e-3;
  } else if (v_unit == "L") {
    vol_mult = 1;
  }

  let mw = document.getElementById("mw").value;
  let mw_unit = document.getElementById("mw_unit").value;
  let mw_mult;
  if (mw_unit == "kDa") {
    mw_mult = 1e3;
  } else if (mw_unit == "Da") {
    mw_mult = 1;
  }

  let prec_2 = document.getElementById("prec_2").value;

  let con2 = document.getElementById("concentration2").value;
  let c2_unit = document.getElementById("c2_unit").value;
  let con_mult2;
  if (c2_unit == "nM") {
    con_mult2 = 1e-9;
  } else if (c2_unit == "μM") {
    con_mult2 = 1e-6;
  } else if (c2_unit == "mM") {
    con_mult2 = 1e-3;
  } else if (c2_unit == "M") {
    con_mult2 = 1;
  }

  document.getElementById("mass").style.backgroundColor = "white";
  document.getElementById("vol").style.backgroundColor = "white";
  document.getElementById("mw").style.backgroundColor = "white";
  document.getElementById("concentration2").style.backgroundColor = "white";

  if (mass === "") {
    mass = vol * con2 * mw;
    document.getElementById("mass").value = mass.toFixed(3);
    document.getElementById("mass").style.backgroundColor = "rgba(106, 90, 205, 0.5)";
  } else if (vol === "") {
    vol = mass / (con2 * mw);
    document.getElementById("vol").value = vol.toFixed(3);
    document.getElementById("vol").style.backgroundColor = "rgba(106, 90, 205, 0.5)";
  } else if (mw === "") {
    mw = mass / (vol * con2);
    document.getElementById("mw").value = mw.toFixed(3);
    document.getElementById("mw").style.backgroundColor = "rgba(106, 90, 205, 0.5)";
  } else {
    con2 = (mass * mass_mult) / (vol * vol_mult * mw * mw_mult * con_mult2);
    document.getElementById("concentration2").value = con2;
    document.getElementById("concentration2").style.backgroundColor = "rgba(106, 90, 205, 0.5)";
  }
};

// Reset button of the second calculator
document.getElementById("reset2").onclick = function (event) {
  var mass = document.getElementById("mass");
  mass.value = mass.defaultValue;
  mass.style.backgroundColor = "white";
  var m_unit = document.getElementById("m_unit");
  m_unit.value = "mg";
  var vol = document.getElementById("vol");
  vol.value = vol.defaultValue;
  vol.style.backgroundColor = "white";
  var v_unit = document.getElementById("v_unit");
  v_unit.value = "mL";
  var mw = document.getElementById("mw");
  mw.value = mw.defaultValue;
  mw.style.backgroundColor = "white";
  var mw_unit = document.getElementById("mw_unit");
  mw_unit.value = "Da";
  var prec_2 = document.getElementById("prec_2");
  prec_2.value = prec_2.defaultValue;
  var con2 = document.getElementById("concentration2");
  con2.value = con2.defaultValue;
  con2.style.backgroundColor = "white";
  var c2_unit = document.getElementById("c2_unit");
  c2_unit.value = "mM";
};

//const form = document.querySelector("form");
//form.addEventListener("submit", (e) => {
// e.preventDefault();
// form.checkValidity();
// form.classList.add("was-validated");
//});

//Responce to the feedback button
//document.getElementById("feedbackForm").onsubmit = function (event) {
// event.preventDefault();
// window.alert("Thank you!");
// document.getElementById("feedbackForm").innerHTML = ''
//};
