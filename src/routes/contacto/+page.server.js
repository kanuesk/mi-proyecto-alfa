import { fail } from '@sveltejs/kit';
import { CONTACT_EMAIL, CONTACT_FROM, RESEND_TOKEN } from '$app/env/private';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Evita inyección de HTML en el correo que se envía al atelier.
 * @param {string} value
 */
function escapeHtml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

export const actions = {
	// @ts-ignore
	handlerSubmit: async ({ request }) => {
		const data = await request.formData();

		const nombre = String(data.get('nombre') ?? '').trim();
		const correo = String(data.get('correo') ?? '').trim();
		const mensaje = String(data.get('mensaje') ?? '').trim();

		const values = { nombre, correo, mensaje };

		if (!nombre || !correo || !mensaje) {
			return fail(400, {
				success: false,
				message: 'Todos los campos son obligatorios.',
				values
			});
		}

		if (!EMAIL_REGEX.test(correo)) {
			return fail(400, {
				success: false,
				message: 'Ingresa un correo electrónico válido.',
				values
			});
		}

		if (!RESEND_TOKEN) {
			console.error('[contacto] Falta RESEND_TOKEN en las variables de entorno.');
			return fail(500, {
				success: false,
				message: 'El envío de correos no está configurado. Intenta más tarde.',
				values
			});
		}

		const resend = new Resend(RESEND_TOKEN);
		const to = CONTACT_EMAIL;
		const from = CONTACT_FROM;

		const nombreSeguro = escapeHtml(nombre);
		const correoSeguro = escapeHtml(correo);
		const mensajeSeguro = escapeHtml(mensaje).replaceAll('\n', '<br />');

		try {
			const { error } = await resend.emails.send({
				from,
				to,
				replyTo: correo,
				subject: `Nuevo contacto: ${nombre}`,
				text: [
					'Nuevo mensaje desde el formulario de contacto de KULT.',
					'',
					`Nombre: ${nombre}`,
					`Correo: ${correo}`,
					'',
					'Mensaje:',
					mensaje
				].join('\n'),
				html: `
					<div style="font-family: monospace; background: #000; color: #fff; padding: 32px;">
						<p style="color: #a3e635; margin: 0 0 8px;">CARACAS // ATELIER CENTRAL</p>
						<h1 style="font-size: 22px; margin: 0 0 24px;">NUEVO MENSAJE DE CONTACTO</h1>
						<p style="color: #9ca3af; margin: 0 0 4px;">NOMBRE COMPLETO</p>
						<p style="margin: 0 0 16px;">${nombreSeguro}</p>
						<p style="color: #9ca3af; margin: 0 0 4px;">CORREO ELECTRÓNICO</p>
						<p style="margin: 0 0 16px;">${correoSeguro}</p>
						<p style="color: #9ca3af; margin: 0 0 4px;">MENSAJE</p>
						<p style="margin: 0 0 16px;">${mensajeSeguro}</p>
						<hr style="border-color: #374151;" />
						<p style="color: #6b7280; font-size: 12px; margin: 0;">
							Enviado desde kult-apparel.com
						</p>
					</div>
				`
			});

			if (error) {
				console.error('[contacto] Resend devolvió un error:', error);
				return fail(502, {
					success: false,
					message: 'No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.',
					values
				});
			}
		} catch (error) {
			console.error('[contacto] Error enviando el correo:', error);
			return fail(502, {
				success: false,
				message: 'No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.',
				values
			});
		}

		return {
			success: true,
			message: 'Mensaje enviado. Te responderemos en menos de 24h.'
		};
	}
};
