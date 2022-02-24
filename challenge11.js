const pers1 = {
    prenom: 'Bernard',
    poids: 95, 
    taille: 1.88,
    IMC:  function () {
        return (this.poids / (this.taille * this.taille)).toFixed(1);
    }
   };

   const pers2 = {
    prenom: 'Marcel',
    poids: 85, 
    taille: 1.76,
    IMC:  function () {
        return (this.poids / (this.taille * this.taille)).toFixed(1); 
    }
   };

if (pers1.IMC() > pers2.IMC()) {
    console.log(`L'IMC de ${pers1.prenom} (${pers1.IMC()}) est plus élevé que celui de ${pers2.prenom} (${pers2.IMC()})`);
} else {
    console.log(`L'IMC de ${pers2.prenom} (${pers2.IMC()}) est plus élevé que celui de ${pers1.prenom} (${pers1.IMC()})`);  
}