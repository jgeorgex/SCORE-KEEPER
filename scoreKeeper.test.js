const ScoreKeeper = require('./scoreKeeper');

describe('keeps score for teams', () => {
  const sk = new ScoreKeeper();
  it('Scores 1 point for Team A', () => {
    sk.scoreTeamA1();
    expect(sk.teamAScore).toBe(1);
  });

  it('Scores 2 points for Team A', () => {
    sk.scoreTeamA2();
    expect(sk.teamAScore).toBe(3);
  });

  it('Scores 3 points for Team A', () => {
    sk.scoreTeamA3();
    expect(sk.teamAScore).toBe(6);
  });

  it('Scores 1 point for Team B', () => {
    sk.scoreTeamB1();
    expect(sk.teamBScore).toBe(1);
  });

  it('Scores 2 points for Team B', () => {
    expect(sk.scoreTeamB2()).toBe(2);
  });

  it('Scores 3 points for Team B', () => {
    expect(sk.scoreTeamB3()).toBe(3);
  });

  it("Get's the score for Team A and B", () => {
    expect(sk.getScore()).toBe('000:000');
  });
});
