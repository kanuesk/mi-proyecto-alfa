<script lang="ts">
    import { enhance } from '$app/forms';
    import { page } from '$app/state';
    import type { SubmitFunction } from '$app/forms';

    let enviando = $state(false);

    const handleSubmit: SubmitFunction = () => {
        enviando = true;

        return async ({ update }) => {
            try {
                await update();
            } finally {
                enviando = false;
            }
        };
    };
</script>

<div class="bg-black text-white py-6 mx-8 my-3 flex-1">
    <div class="flex justify-between px-10 py-7 font-Mono">
        <div class="flex items-center gap-2">
            <span class="block bg-lime-400 w-2 h-2"></span>
            <p>FORMULARIO DE ENTRADA INDUSTRIAL</p>
        </div>
        <p class="bg-lime-500 text-black px-2 font-semibold font-Mono">
            SLOT ABIERTO
        </p>
    </div>

    <form method="POST" action="?/handlerSubmit" use:enhance={handleSubmit}>
        <div class="flex flex-col px-10 py-5">
            <span class="text-xs py-1 font-Mono">NOMBRE COMPLETO</span>
            <input class="text-black"
                type="text"
                name="nombre"
                placeholder="Alejandro Silva"
                value={page.form?.values?.nombre ?? ''}
                autocomplete="name"
                required
            />
        </div>
        <div class="flex flex-col px-10 py-5">
            <span class="text-xs py-1 font-Mono">CORREO ELECTRÓNICO</span>
            <input class="text-black"
                type="email"
                name="correo"
                placeholder="nombre@ejemplo.com"
                value={page.form?.values?.correo ?? ''}
                autocomplete="email"
                required
            />
        </div>
        <div class="flex flex-col px-10 py-5">
            <span class="text-xs py-1 font-Mono">MENSAJE</span>
            <input class="text-black"
                type="text"
                name="mensaje"
                placeholder="Escriba su consulta o solicitud de cita..."
                value={page.form?.values?.mensaje ?? ''}
                required
            />
        </div>

        {#if page.form?.message}
            <p
                class="mx-10 my-2 px-4 py-2 text-xs font-Mono border"
                class:bg-lime-500={page.form.success}
                class:text-black={page.form.success}
                class:border-lime-500={page.form.success}
                class:bg-red-900={!page.form.success}
                class:border-red-500={!page.form.success}
                role="status"
            >
                {page.form.message}
            </p>
        {/if}

        <div
            class="border border-white flex justify-start px-10 py-3 bg-white text-black mx-10 font-Mono transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
        >
            <button type="submit" disabled={enviando}>
                {enviando ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
        </div>
    </form>
</div>
