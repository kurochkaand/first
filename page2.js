document.getElementById("cal_md").onclick = function (event) {
  let Xs = document.getElementById("Xs").value;
  let Ys = document.getElementById("Ys").value;
  let Zs = document.getElementById("Zs").value;
  let vol = Xs * Ys * Zs * 1e-3 * 1e-9 * 1e-9 * 1e-3; //Volume of box in cm^3
  let den = document.getElementById("den").value;
  let n_mol_w = ((den * vol) / 18) * 6.022 * 1e23; //number of waters if nothing else in box
  let mw_solute = document.getElementById("mw_solute").value;
  let c_salt = document.getElementById("c_salt").value;
  let salt_num = c_salt * 1e-3 * vol * 1e-3 * 6.022 * 1e23; //number of salt molecules
  let mw_salt = document.getElementById("mw_salt").value;
  //final number of waters taking into account solute and salt
  let n_solv = n_mol_w - mw_solute / 18 - (salt_num * mw_salt) / 18;
  document.getElementById("result1").innerHTML = n_solv.toFixed(1);
  document.getElementById("salt_num").innerHTML = salt_num.toFixed(1);
};
