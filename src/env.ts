import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	RESEND_TOKEN: {
		description: 'API key de Resend usada por el formulario de contacto.',
		schema: (value) => value ?? ''
	},
	CONTACT_EMAIL: {
		description: 'Bandeja que recibe los mensajes del formulario de contacto.',
		schema: (value) => value ?? 'pedidos@kult-apparel.com'
	},
	CONTACT_FROM: {
		description: 'Remitente verificado en Resend (dominio verificado).',
		schema: (value) => value ?? 'KULT Atelier <onboarding@resend.dev>'
	}
});
