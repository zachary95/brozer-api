// This is a pseudo model written with peudo code and it doesn't work at all
// Cheers

const Question = {
  text: String('Quel type de jeu préférez-vous?'),
  priotity: ?Number = 0,
  condition: {
    gaming: {
      $gte: '0.5',
    },
    bureautique: {
      $gte: '0.5',
    },
  },
  answers: [
    {
      text: String('Call Of Duty'),
      productScoreInfluence: {
        cpu: '+0.1',
        gpu: '-0.01',
        storage: '0.01',
      },
      questionScoreInfluence: {
        gaming: '-0.5',
        bureautique: '0.5',
      },
      nextQuestion: [2]
    }
  ]
};