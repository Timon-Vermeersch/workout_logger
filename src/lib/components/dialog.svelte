<script>
    export let dialog


</script>


<dialog bind:this={dialog} on:close>
    <slot/>
</dialog>

<style>

dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: var(--border-radius);
    border-width:0px;
    transition: all 2s;
    animation: vanish 1s;
    
}

dialog[open]{
    animation: appear 1s;
    
    
}
dialog[open]::backdrop{
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
    
    
    
}


@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes vanish {
    from {
        display: block;
        opacity: 1;
    }
    to {
        display:none;
        opacity: 0;
    }
}
</style>