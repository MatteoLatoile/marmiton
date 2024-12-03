// on donne l'url du site a appeller
fetch('data.json')
.then ((rep)=>{
    return rep.json()

})
.then (donnee=>{
    console.log(donnee);
    donnee.forEach(recette => {
        afficher(recette)
    });
    
})
function afficher(laRecetteActuelle){
    //afficher dans le dom les petite cartes
    let nom = laRecetteActuelle.nom
    let img = laRecetteActuelle.img
    let difficult = laRecetteActuelle.difficulte
    let tempsP = laRecetteActuelle.tempPreparation
    let tempsC = laRecetteActuelle.tempCuisson
    let proportion = laRecetteActuelle.portions


    
   console.log(laRecetteActuelle.ingredients)
   let listIngr = ""

   laRecetteActuelle.ingredients.forEach(ingredient => {

    let quant = ingredient.quantite
    let unit= ingredient.unite
    let alim= ingredient.aliment
    listIngr += `<li>${quant}${unit}${alim}</li>`


   });
   let listEtape = ""

   laRecetteActuelle.etapes.forEach(etapes => {

    let descEtape = etapes.descEtape
    let numeroE = etapes.numeroEtape
    listEtape += `<li>${numeroE}${descEtape}</li>`
   });
   let template = `<div class="marginCard borderDiv">
                <h3>${nom}</h3>
                <ul class="flex spaceBetween width70 marginElement listNone">
                    <li><span class="bold">Difficulté: </span>${difficult}</li>
                    <li><span class="bold">Portions: </span>${proportion}</li>
                    <li><span class="bold">Temps de préparation: </span>${tempsP}</li>
                    <li><span class="bold">Temps de cuisson: </span>${tempsC}</li>
                </ul>
                <div class="flex alignItem spaceBetween">
                    <div class="width30">
                        <h4>Ingrédient</h4>
                        <div class="marginElement displayBlock">
                            <ul class="fontSizeLi">
                             ${listIngr}
                            </ul>
                        </div>
                    </div>
                    <div class="width30">
                        <h4>étapes</h4>
                        <ol class="fontSizeLi listNone ">
                        ${listEtape}
                            </ol>
                    </div>

                    <div class="width30">
                        <img src="${img}" class="imgCard" alt="">
                    </div>
                </div>
            </div>`
            let Affichage = document.querySelector("#containerCard")
Affichage.innerHTML += template
}

