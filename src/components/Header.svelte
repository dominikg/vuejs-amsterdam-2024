<script>
    import HeaderLink from "./HeaderLink.svelte";
    import dg from '../assets/dg.svg?raw'
</script>
<header>
    <div class="container">
        <nav>
            <HeaderLink svg={dg} href="/" label="home" />
        </nav>
        <div class="right">
            Customizing Vite - VueJS Amsterdam 2024
        </div>
    </div>
</header>
<style>
    .container {
        display: flex;
        font-size: 1rem;
        padding: 0.5rem 0;
    }
    .right {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem 0;
        flex-grow: 1;
    }
</style>
