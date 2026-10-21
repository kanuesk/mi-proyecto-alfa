<script lang="ts">
    import { page } from "$app/state";
</script>

<div class="px-5 py-16 flex flex-col items-center gap-4 text-center">
    <p class="text-xs font-Mono uppercase text-gray-500">Error {page.status}</p>
    <p class="text-4xl font-bold uppercase font-Mango">Producto no encontrado</p>
    <a
        href="/producto"
        class="bg-black text-white uppercase font-Mono px-6 py-3 border-2 border-black transition-colors duration-300 ease-in-out hover:bg-lime-400 hover:text-black"
    >
        Volver a productos
    </a>
</div>
