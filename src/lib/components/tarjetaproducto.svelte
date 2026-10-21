<script lang="ts">
  import Icon from "@iconify/svelte";
  import { precioFinal, type Producto } from "#lib/productos";

  const datos: Pick<
    Producto,
    'id' | 'titulo' | 'caracteristicas' | 'imagen' | 'precio' | 'descuento'
  > = $props();

  const precioNuevo = $derived(precioFinal(datos));
</script>

<a href={'/producto/' + datos.id}>
<div>
  <div class="h-80 py-3">
    <img src={datos.imagen} alt={datos.titulo} class="h-full" />
  </div>
  <div class="flex flex-col items-start">
    <div class="flex gap-15 font-semibold uppercase px-3">
      <p>{datos.titulo}</p>
      <p class="text-xs text-gray-500">{datos.precio}</p>
      <p class="text-green-600">{datos.descuento}</p>
    </div>
    <div class="flex gap-5 text-gray py-3 px-3">
      <p>{datos.caracteristicas}</p>
      <p class="text-red-500">{precioNuevo}</p>
    </div>
    <div class="flex px-3 uppercase font-semibold justify-center">
      <p>VER DETALLES</p>
      <Icon icon="andrsrxn:arrow-end"></Icon>
    </div>
  </div>
</div>

</a>

