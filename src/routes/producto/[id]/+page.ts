import { error } from '@sveltejs/kit';
import { productos } from '#lib/productos';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const producto = productos.find((p) => p.id === params.id);

    if (!producto) {
        error(404, 'Producto no encontrado');
    }

    return { producto };
};
