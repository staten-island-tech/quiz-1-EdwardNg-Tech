const massRob = 78;
const heightRob = 1.69;
const massDejon = 92;
const heightDejon = 1.95;
const bmiRob = massRob / (heightRob * heightRob);
const bmiDejon = massDejon / (heightDejon * heightDejon);
const answer = bmiRob > bmiDejon;
console.log(`Does Rob have a greater BMI than Dejon? ${answer}.`);