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
    return 1;
  }
  scoreTeamB2() {
    return 2;
  }
  scoreTeamB3() {
    return 3;
  }

  getScore() {
    return '000:000';
  }
}

module.exports = ScoreKeeper;
