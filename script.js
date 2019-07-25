const calculation = ( ) => {
    var aSquared = document.getElementById("varA").value;
    var bSquared = document.getElementById("varB").value;
    var a1 = Math.sqrt(aSquared);
    var b1 = Math.sqrt(bSquared);
    var a = Math.round(a1);
    var b = Math.round(b1);
    if (aSquared <= 0 || bSquared <= 0) {
        return "Please enter valid numbers";
    } else
    return "( " + a + " x - " + b + " )" + "( " + a + " x + " + b + " )";
}
const answer = ( ) => {
    document.getElementById("demo1").innerHTML = calculation( );
};
