class ScoreKeeper {
  constructor() {
    this.teamAScore = 0;
    this.teamBScore = 0;
  }

  scoreTeamA1() {
    this.teamAScore += 1;
  }
  scoreTeamA2() {
    this.teamAScore += 2;
  }
  scoreTeamA3() {
    this.teamAScore += 3;
  }
  scoreTeamB1() {
    this.teamBScore += 1;
  }
  scoreTeamB2() {
    this.teamBScore += 2;
  }
  scoreTeamB3() {
    this.teamBScore += 3;
  }

  pad(score, length, filler) {
    if (score.length <= length) {
      let padLength = length - score.length;
      let newFiller = filler.repeat(padLength);
      let newScore = newFiller.concat(score);
      return newScore;
    }
  }

  getScore() {
    let scoreA = this.teamAScore.toString();
    let scoreB = this.teamBScore.toString();

    let newScoreA = this.pad(scoreA, 3, '0');
    let newScoreB = this.pad(scoreB, 3, '0');

    let result = newScoreA + ':' + newScoreB;

    return result;
  }
}

module.exports = ScoreKeeper;
