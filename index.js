// Calculate button of the first calculator
document.getElementById("conc").onclick = function (event) {
  let ab = document.getElementById("ab").value;
  let ec = document.getElementById("ec").value;
  let pl = document.getElementById("pl").value;
  let result1 = (ab / ec) * pl;
  let c1_unit = document.getElementById("c1_unit").value;
  if (c1_unit == "nM") {
    result1 *= 1e9;
  } else if (c1_unit == "μM") {
    result1 *= 1e6;
  } else if (c1_unit == "mM") {
    result1 *= 1e3;
  }
  document.getElementById("result1").innerHTML = result1.toFixed(3);
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
  document.getElementById("result1").innerHTML = null;
};
// Calculate button of the second calculator
document.getElementById("calculate2").onclick = function (event) {
  let mass = document.getElementById("mass").value;
  let m_unit = document.getElementById("m_unit").value;
  if (m_unit == "mg") {
    mass = mass / 1e3;
  } else if (m_unit == "kg") {
    mass = mass * 1e3;
  }
  let vol = document.getElementById("vol").value;
  let v_unit = document.getElementById("v_unit").value;
  if (v_unit == "μL") {
    vol = vol / 1e6;
  } else if (v_unit == "mL") {
    vol = vol / 1e3;
  }
  let mw = document.getElementById("mw").value;
  let mw_unit = document.getElementById("mw_unit").value;
  if (mw_unit == "kDa") {
    mw = mw * 1e3;
  }
  let prec_2 = document.getElementById("prec_2").value;
  //Equation is here
  let result2 = mass / (mw * vol);
  //Units of second result
  let c2_unit = document.getElementById("c2_unit").value;
  if (c2_unit == "nM") {
    result2 *= 1e9;
  } else if (c2_unit == "μM") {
    result2 *= 1e6;
  } else if (c2_unit == "mM") {
    result2 *= 1e3;
  }
  document.getElementById("result2").innerHTML = result2.toFixed(prec_2);
};

// Reset button of the second calculator
document.getElementById("reset2").onclick = function (event) {
  var mass = document.getElementById("mass");
  mass.value = mass.defaultValue;
  var m_unit = document.getElementById("m_unit");
  m_unit.value = "mg";
  var vol = document.getElementById("vol");
  vol.value = vol.defaultValue;
  var v_unit = document.getElementById("v_unit");
  v_unit.value = "mL";
  var mw = document.getElementById("mw");
  mw.value = mw.defaultValue;
  var mw_unit = document.getElementById("mw_unit");
  mw_unit.value = "Da";
  var prec_2 = document.getElementById("prec_2");
  prec_2.value = prec_2.defaultValue;
  var c2_unit = document.getElementById("c2_unit");
  c2_unit.value = "mM";
  document.getElementById("result2").innerHTML = null;
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    e.preventDefault();
  }
  form.classList.add("was-validated");
});

//Responce to the feedback button
document.getElementById("submit").onclick = function (event) {
  window.alert("Thank you!");
};
