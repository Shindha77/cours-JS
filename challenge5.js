const note = prompt("Montant de la note");
let tips = 0;

note > 50 && note <300 ? tips = (note * 0.15) : tips = (note * 0.2);

noteTotale = parseInt(note) + parseInt(tips);

console.log("La note était de " + note + ", le pourboire de " + tips + " et la valeur totale était de " + noteTotale + ".");