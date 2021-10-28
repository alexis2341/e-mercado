var productsArray = [];
var minCost;
var maxCost;

function sortProductos(criterio, array){
    let result = [];

    if (criterio === 1){
        result = array.sort(
            function (a, b){
                if (a.cost < b.cost) {return -1;}
                if (a.cost > b.cost) {return 1;}
                return 0;
            });
    }else if  (criterio === 2){
        result = array.sort(
            function (a, b){
                if (a.cost > b.cost) {return -1;}
                if (a.cost < b.cost) {return 1;}
                return 0;
            });
}else if (criterio === 3){
    result = array.sort(
        function (a, b){
            if (a.soldCount > b.soldCount) {return -1;}
            if (a.soldCount < b.soldCount) {return 1;}
            return 0;
        }
    );
}
return result;
}



function showProductsList(productsArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray.length; i++){
        let producto = productsArray[i];

     if(((minCost == undefined) || (minCost != undefined && parseInt(producto.cost) >= minCost)) && ((maxCost == undefined) || (maxCost != undefined && parseInt(producto.cost) <= maxCost))) {

        htmlContentToAppend += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
        <div class="list-group-item list-group-item-action">
            <div class="d-inline-flex">
            
                <div class="col-3">
                    <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ producto.name +`</h4>
                        <p>`+ producto.description +`</p>
                        </div>
                        <small class="text-muted">` + producto.cost + " " + producto.currency + `</small>
                    </div>

                </div>
            </div>
        </div>
        </a>
        `
     }

        document.getElementById("productos").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });
});


document.getElementById("ascendentePrecio").addEventListener("click", function(){
    productsArray = sortProductos(1, productsArray);
    showProductsList(productsArray);
});
document.getElementById("descendentePrecio").addEventListener("click", function(){
    productsArray = sortProductos(2, productsArray);
    showProductsList(productsArray);
});
document.getElementById("descendenteRelevancia").addEventListener("click", function(){
    productsArray = sortProductos(3, productsArray);
    showProductsList(productsArray);
});





document.getElementById("filtrar").addEventListener("click", function() {

minCost = document.getElementById("rangomin").value;
maxCost = document.getElementById("rangomax").value;

if((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
    minCost = parseInt(minCost);
}else{
    minCost = undefined;
}
if((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
    maxCost = parseInt(maxCost);
}else{
    maxCost = undefined;
}
 showProductsList(productsArray);
});
document.getElementById("limpiar").addEventListener("click", function(){
    minCost = document.getElementById("rangomin").value;
    maxCost = document.getElementById("rangomax").value;

    minCost = undefined;
    maxCost = undefined;
    showProductsList(productsArray);
})