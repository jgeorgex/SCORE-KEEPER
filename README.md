This is a Kata challenge originally taken from [Kata-Log](https://kata-log.rocks/score-keeper-kata) and completed using:

1.  JavaScript
2.  Jest
3.  Github
4.  Visual Studio Code

## Problem

We need software to deliver the proper data to the scoreboard for a basketball team. Unfortunately, the people using our software are not the brightest lights under the sun, so they need six buttons (each team can score either 1, 2 or 3 points with a single shot).

## Task

Write a class ScoreKeeper which offers following methods:

void scoreTeamA1() <br>
void scoreTeamA2() <br>
void scoreTeamA3() <br>
void scoreTeamB1() <br>
void scoreTeamB2() <br>
void scoreTeamB3() <br>
String getScore() <br>

## Rules

The returned String always has seven characters. An example would be 000:000

## User Guide

### Setup

1. Clone or download the repository to your local machine.
2. In the route directory of the project run '\$ npm install' to install required dependencies.

### Tests

1. In the route directory of the project run '\$ npm test' to run tests written with Jest.

### Running the program

1.  Create a new score keeper: <br>
    `sk = new ScoreKeeper();`

2.  Score 1 point for Team A: <br>
    `sk.scoreTeamA1();`

3.  You can check the state and that the score has been saved: <br>
    `sk` <br>
    This will display: <br>
    `ScoreKeeper {teamAScore: 1, teamBScore: 0}`

4.  Score 3 points for Team B: <br>
    `sk.scoreTeamB3();`

5.  Get the score in the correct format:
    `sk.getScore()`
    This will display: <br>
    `"001:003"`

## My TDD Approach/Plan

create ScoreKeeper class. <br>
create scoreTeamA1() function. <br>
create scoreTeamA2() function. <br>
create scoreTeamA3() function. <br>
create scoreTeamB1() function. <br>
create scoreTeamB2() function. <br>
create scoreTeamB3() function. <br>
create getScore() function.

## Notes / TBC

The Kata is completed according to specification given.

Things of note/to do/improve when time allows...

1. Edge case test - what if score goes into 4 digits? <br>
2. Move pad method out of ScoreKeeper class (S.R.P) <br>
3. Naming and use of describe blocks in tests. <br>
4. Naming in ScoreKeeper class. <br>
