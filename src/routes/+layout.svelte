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

    
        
        <div class="flex items-center gap-2 py-1">
            <span class="block bg-lime-400 w-2 h-2"></span>
            <p class="uppercase font-semibold text-white text-xs font-mono">Envía expres gratuito en pedidos superiores a 120 USDT</p>
        </div>

        <div class="flex gap-3 py-1 px-2">
            <p class="uppercase font-semibold text-gray-300 text-xs font-mono">Caracas (VE) // Latam</p>
            <p class="uppercase font-semibold bg-lime-400 text-black text-xs px-2 font-mono">Edición limitada SS25</p>
        </div>
    </div>

    
    <div class="flex justify-between gap-3 px-5 border-2 border-black">
        <div class="px-5 py-5">
            <div class="flex items-center gap-3 border-b-2 border-black pb-1">
                <span class="block bg-lime-400 w-3 h-3"></span>
                <p class="font-Mango font-bold text-4xl"> KULT </p>
            </div>
        </div>
        <div class="flex">
            <a href="/" class="bg-white text-black px-7 py-7 uppercase font-Mono border-1 border-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">Inicio</a>
            <a href="/catalogo" class="bg-white text-black px-5 py-7 uppercase font-Mono border-1 border-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">Catalogo</a>
            <a href="/producto" class="bg-white text-black px-5 py-7 uppercase font-Mono border-1 border-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">Productos</a>
            <a href="/contacto" class="bg-white text-black px-5 py-7 uppercase font-Mono border-1 border-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">Contacto</a>

        </div>
        
        <div class="flex py-5 px-7 gap-3">
            <button>
                <Icon icon="ic:baseline-search" width={32} height={32} />
            </button>
            <button>  
            <p class="bg-lime-300 py-2 px-5 font-semibold font-mono border-2 border-black">BOLSA</p>
            </button>
            <div class="bg-black text-white">
                    <button class="py-1 px-1">
                <Icon icon="iconamoon:profile" width={30} height={30} />
            </button>
            </div>

        
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
                     <div class="flex items-center gap-2">
                        <span class="block bg-lime-400 w-2 h-2"></span>
                        <p class="uppercase font-semibold text-xs font-Mono">Atelier // coordenadas</p>
                     </div>
                   <div class="text-xs flex flex-col gap-2">
                     <p class="font-Mango">Chacao / Las Mercedes</p>
                     <p class="font-Mango">Distrito Capital / Caracas (VE)</p>
                     <p class="font-Mango">Latinoamerica</p>
                  </div>

                  </div>
            </div>
        
        
            <div>
             <div>
                <img src="" alt="">
             </div>
              <div class="flex flex-col gap-5">
             <div class="flex items-center gap-2">
                <span class="block bg-black w-2 h-2"></span>
                <p class="uppercase font-semibold text-xs font-Mono">ENVIOS Y POLITICAS</p>
             </div>
               <div class="text-xs flex flex-col gap-2">
                <p class="uppercase font-semibold font-Mono">LIQUIDACION EN DIVISAS (USD)</p>
                <p class="font-Mango">Despachos directos a nivel nacional via Zoom, DHL Express y Tealca asegurado. Envios express a Caracas el mismo dia</p>
                <p class="font-Mono">USD TARIFA PLANA PAGO MOVIL / ZELLE / USDT</p>
               </div>
              </div>
           </div>
        </div>
    </div>
    <!-- Separador -->
    <div class="mx-7 mt-8 border-t-2 border-black"></div>
    <!-- Inferior  -->
    <div class="flex gap-40 text-xs uppercase px-10 py-10">
        <div>
            <p class="font-Mono"> C 2025 KULT Caracas. TODOS LOS DERECHOS RESERVADOS. IDENTIDAD URBANA SUBVERSIVA.</p>
        </div>
         <div class="flex justify-end gap-5 uppercase text-xs">
            <div>
              <p class="font-Mono">TERMINOS DE SERVICIO</p>
            </div>
            <div>
             <p class="font-Mono">PRIVACIDAD Y DATOS</p>
            </div>
            <div>
              <p class="font-Mono">ESPECIFICACIONES TECNICAS</p>
            </div>
         </div>
    </div>
</footer>