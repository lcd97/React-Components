import { render } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe('Pruebas en <GifItem />', () => {
const title = 'Saitama';
const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        render( <GifItem title={title} url={url} /> );

        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();
    });
});
