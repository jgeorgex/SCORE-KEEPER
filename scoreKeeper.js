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

  getScore() {
    let scoreA = this.teamAScore.toString();
    let scoreB = this.teamBScore.toString();

    let result = '00' + scoreA + ':' + '00' + scoreB;
    return result;
  }
}

module.exports = ScoreKeeper;
