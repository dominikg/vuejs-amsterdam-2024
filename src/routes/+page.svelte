<script>
    import LogoLargeOutline from "../components/LogoLargeOutline.svelte";
</script>
<div class="wrapper">
    <div class="center">
        <h1>Customizing Vite</h1>
        <LogoLargeOutline/>
    </div>
</div>
<style>
    h1 {
        font-size: 4rem;
    }
    .wrapper {
        height: 100%;
        overflow: hidden;
    }
    .center {
        height: 100%;
        display: flex;
        flex-direction: column;
        place-items: center;
        justify-content: center;
        gap: 5rem;
        fill-opacity: 0;
        stroke-width: 2;
    }
</style>
