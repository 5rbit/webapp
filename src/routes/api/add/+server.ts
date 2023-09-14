import { json, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export async function POST({ request }) {
    const { a, b } = await request.json();
    return json(a + b);
}

