<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
    export let headerText;

    let expanded = false
</script>

<style>
.collapsible {
  border-bottom: 1px solid var(--gray-600, #4b5563);
  margin-bottom: 0.5em;
}

h3 {
  margin: 0;
  font-size: 1.1em;
  color: white;
}

button {
  background-color: var(--gray-700, #374151);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  margin: 0;
  padding: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  border-radius: 4px;
}

button:hover {
  background-color: var(--gray-500, #4b5563);
}

button[aria-expanded="true"] {
  border-bottom: 1px solid var(--gray-400, #6b7280);
}

button[aria-expanded="true"] .vert {
  display: none;
}

button:focus svg {
  outline: 2px solid var(--gray-500, #6b7280);
  outline-offset: 2px;
}

button[aria-expanded="true"] rect {
  fill: currentColor;
}

svg {
  height: 1em;
  width: 1em;
  flex-shrink: 0;
  color: white;
}
</style>

<div class="collapsible">
    <h3>
        <button aria-expanded={expanded} on:click={() => expanded = !expanded}>{headerText}
<svg viewBox="0 0 20 20" fill="none" >
<path class="vert" d="M10 1V19" stroke="black" stroke-width="2"/>
<path d="M1 10L19 10" stroke="black" stroke-width="2"/>
</svg>
        </button>
    </h3>
    
    <div class='contents' hidden={!expanded}>
        <slot></slot>
    </div>
</div>