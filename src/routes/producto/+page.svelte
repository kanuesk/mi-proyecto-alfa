<script lang="ts">
    import Tarjetaproducto from "#lib/components/tarjetaproducto.svelte";
    import { productos } from "#lib/productos";
</script>

<section class="grid grid-cols-1 gap-8 px-5 py-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each productos as producto (producto.id)}
        <Tarjetaproducto
            id={producto.id}
            titulo={producto.titulo}
            caracteristicas={producto.caracteristicas}
            imagen={producto.imagen}
            precio={producto.precio}
            descuento={producto.descuento}
        />
    {/each}
</section>
