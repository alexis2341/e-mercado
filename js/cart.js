
function showCartInfo(array){
    for (let i = 0; i < array.articles.length; i++) {
        let carrito = array.articles[i]
    

        document.getElementById("cart").innerHTML += 
        `<h3>`+ "nombre ñeri:  " + carrito.name + `<br>` + "cantidad ñeri:  " + carrito.count + `</h3>`


    }}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            array = resultObj.data;

            showCartInfo(array);




}})});
/// ESTO ES JESUCRISTO //// array.articles[0].name