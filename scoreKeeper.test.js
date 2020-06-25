const ScoreKeeper = require('./scoreKeeper');

let sk = null;

function times(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

beforeEach(() => {
  sk = new ScoreKeeper();
});

describe('keeps score for teams', () => {
  it('Scores 1 point for Team A', () => {
    sk.scoreTeamA1();
    expect(sk.teamAScore).toBe(1);
  });

  it('Scores 2 points for Team A', () => {
    sk.scoreTeamA2();
    expect(sk.teamAScore).toBe(2);
  });

  it('Scores 3 points for Team A', () => {
    sk.scoreTeamA3();
    expect(sk.teamAScore).toBe(3);
  });

  it('Scores 1 point for Team B', () => {
    sk.scoreTeamB1();
    expect(sk.teamBScore).toBe(1);
  });

  it('Scores 2 points for Team B', () => {
    sk.scoreTeamB2();
    expect(sk.teamBScore).toBe(2);
  });

  it('Scores 3 points for Team B', () => {
    sk.scoreTeamB3();
    expect(sk.teamBScore).toBe(3);
  });

  it("Get's the score for Team A and B", () => {
    sk.scoreTeamA1();
    expect(sk.getScore()).toBe('001:000');
  });

  it("Get's the score for Team A and B", () => {
    sk.scoreTeamA1();
    sk.scoreTeamB3();
    sk.scoreTeamB3();
    expect(sk.getScore()).toBe('001:006');
  });

  it("Get's the score for Team A and B to be 011:006", () => {
    sk.scoreTeamA3();
    sk.scoreTeamA3();
    sk.scoreTeamA3();
    sk.scoreTeamA2();
    sk.scoreTeamB1();
    sk.scoreTeamB2();
    sk.scoreTeamB3();
    expect(sk.getScore()).toBe('011:006');
  });

  it("Get's the score for Team A and B to be 011:010", () => {
    times(() => sk.scoreTeamA1(), 11);
    times(() => sk.scoreTeamB1(), 10);
    expect(sk.getScore()).toBe('011:010');
  });

  it("Get's the score for Team A and B to be 101:014", () => {
    times(() => sk.scoreTeamA1(), 101);
    times(() => sk.scoreTeamB1(), 14);
    expect(sk.getScore()).toBe('101:014');
  });

  it("Get's the score for Team A and B", () => {
    times(() => sk.scoreTeamA1(), 101);
    times(() => sk.scoreTeamB1(), 104);
    expect(sk.getScore()).toBe('101:104');
  });
});

describe('pad method', () => {
  it('pads out string with score length of 2', () => {
    expect(sk.pad('12', 3, '0')).toBe('012');
  });

  it('pads out string with score length of 1', () => {
    expect(sk.pad('1', 3, '0')).toBe('001');
  });

  it('pads out string with score length of 3', () => {
    expect(sk.pad('123', 3, '0')).toBe('123');
  });
});
