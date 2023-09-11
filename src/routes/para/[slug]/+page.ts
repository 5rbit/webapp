import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load: PageLoad = ({ params }) => {
    if (params.slug === 'equip') {
        return {
            title: 'Equip Parameters',
            content: '',
        };

    }
    else if(params.slug === 'drive'){
        return {
            title: 'Drive Parameters',
            content: '',
        };
    }

    throw error(404, 'Not found');
};