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
    let result;
    if (scoreA.length === 2 && scoreB.length === 1) {
      result = '0' + scoreA + ':' + '00' + scoreB;
    } else if (scoreA.length === 2 && scoreB.length === 2)
      result = '0' + scoreA + ':' + '0' + scoreB;
    else if (scoreA.length === 3 && scoreB.length === 2)
      result = scoreA + ':' + '0' + scoreB;
    else if (scoreA.length === 3 && scoreB.length === 3)
      result = scoreA + ':' + scoreB;
    else {
      result = '00' + scoreA + ':' + '00' + scoreB;
    }
    return result;
  }
}

module.exports = ScoreKeeper;
