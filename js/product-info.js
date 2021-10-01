var product = {};
var commentsArray = [];
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showRelatedProducts(rpArray, productsArray){
    //let htmlContentToAppend = "";
    for( let i=0;  i<rpArray.length; i++){
      // let product = productsArray;
        document.getElementById("relatedProducts").innerHTML += `<h1><br>` + rpArray[productsArray[i]].name +`</h1><br> `;
       // htmlContentToAppend += `<h4>`+ product.name +`</h4>`;
        

    }
}



function showComments(commentsArray){
    let htmlContentToAppend = "";
    for(let i=0; i<commentsArray.length; i++){
        let comment = commentsArray[i];

        htmlContentToAppend += `
        <p><b> ` + comment.user + " " + comment.score +`</b></p> 
        <p> ` + comment.description + `</p> 
        <p> ` + comment.dateTime + `</p> <br><hr>`
    }
    document.getElementById("comments").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            relatedproduct = product.relatedProducts;
            console.log(product);
            console.log(relatedproduct);
           
            let productNameHTML = document.getElementById("productName");
            let productDesHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency")
            let productSoldCountHTML = document.getElementById("productSoldCount");

            productNameHTML.innerHTML = product.name;
            productDesHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;


            showImagesGallery(product.images);
         
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
                    productsArray = resultObj.data;
                    rpArray = resultObj.data;
    
             console.log(rpArray)
                    
    
                }
                showRelatedProducts(rpArray, relatedproduct);
            })
        }



        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                commentsArray = resultObj.data;
               
                showComments(commentsArray);
            }
        });
    });
});