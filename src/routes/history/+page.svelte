<script lang="ts">
    import { exerciseHistory } from '../../lib/stores/data_store';
    import { derived } from 'svelte/store';
    import type { ExerciseHistory, ExerciseHistoryEntry } from '$lib/interfaces';
  
    function groupByDate(histories: ExerciseHistory[]) {
      const grouped: Record<string, { date: string; entries: { exerciseName: string; sets: any[] }[] }> = {};
  
      for (const history of histories) {
        for (const entry of history.historyArray) {
          const dateKey = entry.performedAt?.split('T')[0] ?? 'Unknown Date';
          if (!grouped[dateKey]) grouped[dateKey] = { date: dateKey, entries: [] };
  
          grouped[dateKey].entries.push({
            exerciseName: history.exercise.name,
            sets: entry.sets
          });
        }
      }
  
      return Object.values(grouped).sort((a, b) => b.date.localeCompare(a.date)); // latest first
    }
  
    const groupedHistory = derived(exerciseHistory, $eh => groupByDate($eh));
  </script>
  
  <div class="bg-gray-700 min-h-dvh p-4 space-y-4 text-white">
    <h1 class="text-2xl font-bold mb-4">Workout History</h1>
  
    {#if $groupedHistory.length === 0}
      <p>No history yet.</p>
    {:else}
      {#each $groupedHistory as group}
        <div class="bg-gray-800 p-4 rounded space-y-2 shadow">
          <div class="text-lg font-semibold">{group.date}</div>
          <div class="space-y-2">
            {#each group.entries as entry}
              <div>
                <div class="font-medium">{entry.exerciseName}</div>
                <div class="flex flex-wrap gap-2 mt-1">
                  {#each entry.sets as set}
                    <span class="bg-gray-600 px-2 py-1 rounded text-sm">
                      {set.weight ?? '-'}kg x {set.reps ?? '-'}
                    </span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    {/if}
  </div>
  