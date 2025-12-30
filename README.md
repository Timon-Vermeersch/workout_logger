notepad

session -> completedProgramDaysHistory
session exports: plannedExercise
completedProgramDaysHistory expects: DayHistory

------------------------------------------------------------------------------------
## /Builder

delete:
drizzle.config.ts
hooks.server.ts
lib/server->
auth.ts
index.ts
schema.ts

check -> dayhistory.ts , exerciseHistory.ts


-------------------
GetexerciseFun
const getExerciseById = (id) => exercises.find(exercise => exercise.id === id);
const exerciseId = 1;
const exercise = getExerciseById(exerciseId);
-------------------
# Todo

## Fix existing structure

- [x] Replace `ExerciseHistory.exercise` with `exerciseId: number`
- [x] Update all usages of `ExerciseHistory` accordingly
- [x] Add `sessionId: string` to:
  - `ExerciseHistoryEntry`
  - `DayHistory`
- [ ] Clean up any leftover circular refs or stale types

## Add new features

- [ ] `flushSessionToHistory()`:

  - [ ] Generate `sessionId` (uuid)
  - [ ] Push full day to `completedProgramDaysHistory`
  - [ ] Push each exercise to `exerciseHistory` using same `sessionId`

- [ ] `updateSetInHistory({ exerciseId, sessionId, setNumber, newData })`:

  - [ ] Edit the matching set in both stores

- [ ] `deleteSession(sessionId)`:
  - [ ] Remove full session from both stores

## Check these files

- [ ] `exerciseHistory.ts`
- [ ] `exerciseHistoryEntry.ts`
- [ ] `dayHistory.ts`

## Optional (later)

- [ ] Derive `exerciseHistory` from `completedProgramDaysHistory`
- [ ] Add UI for editing past sessions
- [ ] Add import/export for backup


