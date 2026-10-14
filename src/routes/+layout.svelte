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
        <div>
            <div>
                <img src="" alt="">
                <p>Telier // coordenadas</p>
            </div>
            <p>Chacao / Las Mercedes</p>
            <p></p>
        </div>
        <div>
            <div>
                <img src="" alt="">
                <p>ENVIOS Y POLITICAS</p>
            </div>
            <p>LIQUIDACION EN DIVISAS</p>
            <p>Despachos directos a nivel nacional via Zoom, DHL Express y Tealca asegurado. Envios express a Caracas el mismo dia</p>
            <p>USD TARIFA PLANA PAGO MOVIL / ZELLE / USDT</p>
        </div>
    </div>
    <!-- Inferior  -->
    <div>
        <div>
            <p> C 2025 KULT Caracas. TODOS LOS DERECHOS RESERVADOS. IDENTIDAD URBANA SUBVERSIVA.</p>
        </div>
        <div>
            <p>TERMINOS DE SERVICIO PRIVACIDAD Y DATOS ESPECIFICACIONES TECNICAS</p>
        </div>
    </div>
</footer>