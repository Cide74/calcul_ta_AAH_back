  // Coef du foyer
    function coefFoyer(
      situation, 
      majorationPlafonCouple,
      nb_personne_a_charge,
      coefPersonneACharge
      ){
    if (situation === 'couple') {
      coef_union = 1 + majorationPlafonCouple;
    }else { 
      coef_union = 1;
    }
    return (coef_union + 
      (coefPersonneACharge * nb_personne_a_charge)
    ) ;
  };
  module.exports = coefFoyer;