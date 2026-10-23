export type Producto = {
    id: string;
    titulo: string;
    caracteristicas: string;
    imagen: string;
    precio: number;
    descuento: number; // porcentaje 0 - 100
};

export const productos: Producto[] = [
    {
        id: 'pantalones-baggy',
        titulo: 'Pantalones Baggy',
        caracteristicas: 'Pantalones color negro',
        imagen:
            'https://dcdn-us.mitiendanube.com/stores/004/409/776/products/whatsapp-image-2024-05-21-at-18-55-52-3c8b9919b57ae6313117163347085404-640-0.webp',
        precio: 145,
        descuento: 20
    },
    {
        id: 'zapatos',
        titulo: 'Zapatos',
        caracteristicas: 'Zapatos marca adidas',
        imagen:
            'https://www.atmosmovement.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_atmos/default/dwa133cac9/images/hi-res/Lookbok_Renombradas/Tenis-Adidas-Para-Hombre-32720150-1283_5.jpg?sw=600&sh=720',
        precio: 70,
        descuento: 15
    },
    {
        id: 'franela-oversize',
        titulo: 'Franela Oversize',
        caracteristicas: 'Franela negra oversize',
        imagen: 'https://fanaticosvenezuela.com/wp-content/uploads/2026/02/na20.jpg',
        precio: 35,
        descuento: 5
    },
    {
        id: 'sudadera-hoodie-oversize',
        titulo: 'Sudadera Hoodie Oversize',
        caracteristicas: 'Sudadera negra con capucha y bolsillo canguro',
        imagen: 'https://image.made-in-china.com/202f0j00lJYkwOtqlCou/Men-s-Hoodies-Streetwear-Drop-Shoulder-Heavyweight-Cotton-Pullover-Oversize-Sweatshirts-Vintage-Hoodie-for-Men.webp',
        precio: 89,
        descuento: 15
    },
    {
        id: 'camiseta-boxy',
        titulo: 'Camiseta Boxy',
        caracteristicas: 'Camiseta boxy de cotton negro',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFwlIyZOnCoqntvo6vLY2x-tmtJ3RxTTFYPb1-P1hIw&s',
        precio: 35,
        descuento: 10
    },
    {
        id: 'chaqueta-bomber',
        titulo: 'Chaqueta Bomber',
        caracteristicas: 'Bomber negro con ribete elastico',
        imagen: 'https://lscoglobal.scene7.com/is/image/lscoglobal/MT_005AL-0001_GLO_CM_DA?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500',
        precio: 120,
        descuento: 20
    },
    {
        id: 'short-cargo',
        titulo: 'Short Cargo',
        caracteristicas: 'Short cargo militar verde oliva',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoF1iI-3KDuk2gvYbLV8MbuQprR-qs5Nsn3l3xsqDFONUtPGK4yFuo_w&s=10',
        precio: 65,
        descuento: 12
    },
    {
        id: 'gorra-trucker',
        titulo: 'Gorra Trucker',
        caracteristicas: 'Gorra trucker negra bordada',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST513CaTgAA5gIjwxTRZg-X8w7ljD5iL5LEulup3zA9tJAHuW-DVGELFTg&s=10',
        precio: 25,
        descuento: 5
    },
    {
        id: 'zapatillas-running',
        titulo: 'Zapatillas Running',
        caracteristicas: 'Zapatillas running blancas con suela alta',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZKZvhtZzgNRxvYMkIVjXh4SpEZJRkDDIcbjO9DW6EDVcUaOdUOwbt2Ax&s=10',
        precio: 110,
        descuento: 12
    },
    {
        id: 'medias-pack',
        titulo: 'Medias Pack x3',
        caracteristicas: 'Pack de tres pares de medias negras',
        imagen: 'https://solocononce.com/cdn/shop/products/PACK-DE-3-MEDIAS-TRIO-DE-MEDIAS-BLANCO-NEGRO-GRIS-JASPE-UNISEX-ONCE-PIJAMAS2.jpg?v=1657812155',
        precio: 12,
        descuento: 8
    },
    {
        id: 'rinonera-crossbody',
        titulo: 'Riñonera Crossbody',
        caracteristicas: 'Riñonera crossbody negra impermeable',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWq4JZwQvmu6VU6m0_5E5bNoBrRX7eu4Ow9raIqZWP3AhB0wII4lVP8Y&s=10',
        precio: 55,
        descuento: 10
    },
    {
        id: 'lentes-oversize',
        titulo: 'Lentes Oversize',
        caracteristicas: 'Lentes de sol oversize negros',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_906542-MLV114767145062_082026-O.webp',
        precio: 45,
        descuento: 5
    },
    {
        id: 'camisa-oversize',
        titulo: 'Camisa Oversize',
        caracteristicas: 'Camisa oversize de rayas grises',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8u_8cgCRbJ5s_HIrY3vYioBQuGVCLRbfh6yntBNVazLdPAUrmu2YCfUoa&s=10',
        precio: 70,
        descuento: 15
    },
    {
        id: 'gorro-punto',
        titulo: 'Gorro de Punto',
        caracteristicas: 'Gorro de punto negro canalado',
        imagen: 'https://i5-mx.walmartimages.com/asr/2c770a9f-67d8-404a-bb0a-66e53235e646.89e885d7ffc309d3a0db4e4b1d9354a2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        precio: 22,
        descuento: 10
    },
    {
        id: 'sling-bag',
        titulo: 'Sling Bag',
        caracteristicas: 'Bolso slingbelt tecnico con cierre hidden',
        imagen: 'https://www.markrydenusa.com/cdn/shop/collections/sling_bag_2.jpg?v=1755692555',
        precio: 75,
        descuento: 18
    },
    {
        id: 'pantalon-sudadera',
        titulo: 'Pantalon Sudadera',
        caracteristicas: 'Pantalon sudadera gris perla con cintura elasticada',
        imagen: '/imagenes/productos/pantalon-sudadera.svg',
        precio: 95,
        descuento: 20
    },
    {
        id: 'polo-boxy',
        titulo: 'Polo Boxy',
        caracteristicas: 'Polo boxy negro con bordado al pecho',
        imagen: '/imagenes/productos/polo-boxy.svg',
        precio: 58,
        descuento: 12
    },
    {
        id: 'puffer-liviano',
        titulo: 'Puffer Liviano',
        caracteristicas: 'Puffer liviano negro con capucha',
        imagen: '/imagenes/productos/puffer-liviano.svg',
        precio: 160,
        descuento: 25
    },
    {
        id: 'jean-cargo',
        titulo: 'Jean Cargo',
        caracteristicas: 'Jean cargo azul con bolsillos laterales',
        imagen: '/imagenes/productos/jean-cargo.svg',
        precio: 110,
        descuento: 15
    },
    {
        id: 'bufanda-lana',
        titulo: 'Bufanda de Lana',
        caracteristicas: 'Bufanda de lana gris de trama gruesa',
        imagen: '/imagenes/productos/bufanda-lana.svg',
        precio: 48,
        descuento: 10
    },
    {
        id: 'botines-chelsea',
        titulo: 'Botines Chelsea',
        caracteristicas: 'Botines chelsea negros con suela gruesa',
        imagen: '/imagenes/productos/botines-chelsea.svg',
        precio: 130,
        descuento: 20
    },
    {
        id: 'camiseta-manga-larga',
        titulo: 'Camiseta Manga Larga',
        caracteristicas: 'Camiseta manga larga con estampa al frente',
        imagen: '/imagenes/productos/camiseta-manga-larga.svg',
        precio: 40,
        descuento: 10
    },
    {
        id: 'set-buzo-short',
        titulo: 'Set Buzo + Short',
        caracteristicas: 'Set buzo con short negro oversize',
        imagen: '/imagenes/productos/set-buzo-short.svg',
        precio: 130,
        descuento: 22
    }
];

/** Precio final tras aplicar el descuento porcentual. */
export function precioFinal(producto: Pick<Producto, 'precio' | 'descuento'>): number {
    return producto.precio - (producto.precio * producto.descuento) / 100;
}
