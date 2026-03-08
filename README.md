notepad

session -> completedProgramDaysHistory
session exports: plannedExercise
completedProgramDaysHistory expects: DayHistory

------------------------------------------------------------------------------------

#todo LOGIC FIXES:

- []   adding set, shouldnt add to 'previous series'
      ![alt text](image-2.png)
- []  Derive `exerciseHistory` from `completedProgramDaysHistory`
- []  Add import/export for backup\
- []
- []
- []
- []
- []
- []
- []

#todo UI FIXES: 

- []  selected but still grey on hover - should be green
        ![alt text](image-1.png)
- []  Add UI for editing past sessions
- []
- []
- []
- []
- []
- []
- []


maybe?

- [] deleteSession(sessionId)?
- []
- []
- []
- []
- []
- []
- []

HowtoFixFailedNPM RUN DEV:
delete:
  drizzle.config.ts
  hooks.server.ts
  lib/server->
  auth.ts
  index.ts
  schema.ts