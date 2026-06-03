<script lang="ts">
    import { enhance } from '$app/forms';

    let {form} = $props();


</script>

<h1 class="text-4xl">CHATBOT CIHUY</h1>
<form method="POST" action="?/test" use:enhance>
{#if form?.missing}
    <p class="text-red-500">inputan tidak boleh kosog</p>
{/if }
{#if form?.success }
    <p class="text-green-500">{form?.msg}</p>
{/if}
    <label > 
        Input 
        <input type="text" name="testing">
    </label>

<button >submit</button>
</form>
