<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
    import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<header>

    <div class="flex justify-between bg-black px-8">
        <p class="uppercase font-semibold text-white text-xs">Envía expres gratuito en pedidos superiores a 120 USDT</p>

        <div class="flex gap-3">
            <p class="uppercase font-semibold text-gray-300 text-xs">Caracas (VE) // Latam</p>
            <p class="uppercase font-semibold bg-lime-400 text-black text-xs">Edición limitada SS25</p>
        </div>
    </div>

    
    <div class="flex justify-between px-5">
        <img src="" alt="">

        <div class="flex">
            <a href="/" class="bg-gray-950 text-white px-5 py-5 uppercase">Inicio</a>
            <a href="/catalogo" class=" text-black px-5 py-5 uppercase">Catalogo</a>
            <a href="/producto" class=" text-black px-5 py-5 uppercase">Productos</a>
            <a href="/contacto" class=" text-black px-5 py-5 uppercase">Contacto</a>

        </div>
        
        <div class="py-5 px-7">
            <button>
                <Icon icon="ic:baseline-search" width={32} height={32} />
            </button>
            <button>  
                <Icon icon="bi:bag" width={32} height={32} />
            </button>
            <button>
                <Icon icon="iconamoon:profile" width={32} height={32} />
            </button>
        
        </div>
    </div>
</header>


{@render children()}

<footer>
    <!-- Superior -->
    <div> 
        <div class="flex items-center justify-start gap-20 px-10 py-5">
            <div>
               <div>
                  <img src="" alt="">
                </div>
                  <div class="flex flex-col gap-5">
                     <p class="uppercase font-semibold text-xs">Atelier // coordenadas</p>
                   <div class="text-xs flex flex-col gap-2">
                     <p>Chacao / Las Mercedes</p>
                     <p>Distrito Capital / Caracas (VE)</p>
                     <p>Latinoamerica</p>
                  </div>

                  </div>
            </div>
        
        
            <div>
             <div>
                <img src="" alt="">
             </div>
              <div class="flex flex-col gap-5">
             <p class="uppercase font-semibold text-xs">ENVIOS Y POLITICAS</p>
               <div class="text-xs flex flex-col gap-2">
                <p class="uppercase font-semibold">LIQUIDACION EN DIVISAS (USD)</p>
                <p>Despachos directos a nivel nacional via Zoom, DHL Express y Tealca asegurado. Envios express a Caracas el mismo dia</p>
                <p>USD TARIFA PLANA PAGO MOVIL / ZELLE / USDT</p>
               </div>
              </div>
           </div>
        </div>
    </div>
    <!-- Inferior  -->
    <div class="flex gap-40 text-xs uppercase px-10 py-10">
        <div>
            <p> C 2025 KULT Caracas. TODOS LOS DERECHOS RESERVADOS. IDENTIDAD URBANA SUBVERSIVA.</p>
        </div>
         <div class="flex justify-end gap-5 uppercase text-xs">
            <div>
              <p>TERMINOS DE SERVICIO</p>
            </div>
            <div>
             <p>PRIVACIDAD Y DATOS</p>
            </div>
            <div>
              <p>ESPECIFICACIONES TECNICAS</p>
            </div>
         </div>
    </div>
</footer>