<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<header>
    <div>
        <p>Envía expres gratuito en pedidos superiores a 120 USDT</p>

        <div>
            <p>Caracas (VE) // Latam</p>
            <p>Edición limitada SS25</p>
        </div>
    </div>

    
    <div>
        <img src="" alt="">

        <div>
            <a href="/">Inicio</a>
            <a href="/catalogo">Catalogo</a>
            <a href="">Productos</a>
            <a href="">Contacto</a>

        </div>
        
        <div>
            <button>Buscar</button>
            <button>Bolsa</button>
            <button>Usuario</button>
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