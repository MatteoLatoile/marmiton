// on donne l'url du site a appeller
fetch('data.json')
.then ((rep)=>{
    return rep.json()

})
.then (donnee=>{
    console.log(donnee);
    donnee.forEach(prod => {
        afficher(prod)
    });
    
})
function afficher(produit){
    //afficher dans le dom les petite cartes
    console.log(produit.title)}