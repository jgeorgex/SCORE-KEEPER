A Kata challenge orginally taken from [Kata-Log](https://kata-log.rocks/score-keeper-kata)

## Problem

We need software to deliver the proper data to the scoreboard for a basketball team. Unfortunately the people using our software are not the brightest lights under the sun, so they need six buttons (each team can score either 1, 2 or 3 points with a single shot).

## Your Task

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

## TDD Approach/Plan

create ScoreKeeper class. <br>
create scoreTeamA1() function. <br>
create scoreTeamA2() function. <br>
create scoreTeamA3() function. <br>
create scoreTeamB1() function. <br>
create scoreTeamB2() function. <br>
create scoreTeamB3() function. <br>
create getScore() function.

## Notes / TBC

Task is completed acording to spec given. Things of note / to do / improve when time allows...

1. Add user guide including how to run tests.
2. Edge case test - what if score goes in to 4 digits? <br>
3. Move pad method out of ScoreKeeper class (S.R.P) <br>
4. Naming and use of describe blocks in tests. <br>
5. Naming in ScoreKeeper class. <br>
