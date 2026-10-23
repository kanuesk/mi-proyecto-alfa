<script lang="ts">
    import { precioFinal } from "#lib/productos";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    const producto = $derived(data.producto);
    const precio = $derived(precioFinal(producto));

    const micarrito = () => {
    }
</script>

<section class="px-5 py-8">
    <a href="/producto" class="text-xs font-Mono uppercase text-gray-500 hover:text-black">
        &larr; Volver a productos
    </a>

    <div class="mt-5 grid gap-8 md:grid-cols-2">
        <div class="border-2 border-black">
            <img src={producto.imagen} alt={producto.titulo} class="h-96 w-full object-cover" />
        </div>

        <div class="flex flex-col gap-5">
            <h1 class="text-3xl font-bold uppercase font-Mango">{producto.titulo}</h1>

            <p class="text-gray-500 font-Mango">{producto.caracteristicas}</p>

            <div class="flex items-center gap-3 font-Mono">
                <span class="text-gray-400 line-through">${producto.precio}</span>
                <span class="bg-lime-400 border-2 border-black px-2 py-1 text-xs font-semibold">
                    -{producto.descuento}%
                </span>
                <span class="text-2xl font-bold text-red-500">${precio.toFixed(2)}</span>
            </div>

            <div class="flex flex-col gap-2 text-xs font-Mono text-gray-500">
                <p>Envio express gratuito en pedidos superiores a 120 USDT</p>
                <p>Edicion limitada SS25 // Lote N* 4</p>
            </div>

            <button
                class="bg-black text-white uppercase font-Mono px-6 py-3 border-2 border-black transition-colors duration-300 ease-in-out hover:bg-lime-400 hover:text-black" onclick={micarrito}
            >
                Agregar a la bolsa
            </button>
        </div>
    </div>
</section>
