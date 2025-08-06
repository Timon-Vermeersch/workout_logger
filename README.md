# Todo


## /Builder

delete:
    drizzle.config.ts
    hooks.server.ts
        lib/server->
            auth.ts
            index.ts
            schema.ts 

check -> dayhistory.ts , exerciseHistory.ts , 

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
  - [ ] Push full day to `completedProgramDays`
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

- [ ] Derive `exerciseHistory` from `completedProgramDays`
- [ ] Add UI for editing past sessions
- [ ] Add import/export for backup