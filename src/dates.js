function get_duration(y, m, d) {
    var now = new Date();
    var start = new Date(y, m, d);
    var diff = new Date(now.getTime() - start.getTime());
    var years = diff.getUTCFullYear() - 1970;
    var month = diff.getUTCMonth();
    var result = years + " yr " + month + " mos";
    document.getElementById("years").innerText = result;
   }
