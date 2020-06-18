const ScoreKeeper = require('./scoreKeeper');

describe('keeps score for teams', () => {
  const sk = new ScoreKeeper();
  it('Scores 1 point for Team A', () => {
    expect(sk.scoreTeamA1()).toBe(1);
  });

  it('Scores 2 points for Team A', () => {
    expect(sk.scoreTeamA2()).toBe(2);
  });

  it('Scores 3 points for Team A', () => {
    expect(sk.scoreTeamA3()).toBe(3);
  });
});
