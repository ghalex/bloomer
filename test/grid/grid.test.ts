import * as React from 'react';
import * as Grid from './../../src/grid/grid';

describe('removeProps functions', () => {
    const props = {
        href: '#',
        onClick: f => f,
    }

    it('should remove Grid.HorizontalSize props', () => {
        const horizontalSizeProps: any = {
            isSize: 12
        }
        expect(Grid.removeGridSizesProps({ ...props, ...horizontalSizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Size props', () => {
        const sizeProps = {
            isSize: 12
        }
        expect(Grid.removeSizeProps({ ...props, ...sizeProps }))
            .toEqual(props);
    });

    it('should remove Grid.Offset props', () => {
        const offsetProps: any = {
            isOffset: 1,
        }
        expect(Grid.removeOffsetProps({ ...props, ...offsetProps }))
            .toEqual(props);
    });
});

describe('get*Modifiers functions', () => {

    it('should getSizeModifiers', () => {
        expect(Grid.getSizeModifiers({ isSize: 1 })).toEqual({ 'is-1': true });
        expect(Grid.getSizeModifiers({ isSize: 12 })).toEqual({ 'is-12': true });

        expect(Grid.getSizeModifiers({ isSize: '1/2' })).toEqual({ 'is-half': true });
        expect(Grid.getSizeModifiers({ isSize: 'narrow' })).toEqual({ 'is-narrow': true });

        expect(
            Grid.getSizeModifiers({ isSize: { mobile: 'narrow', s: 12, desktop: 10 } })
        ).toEqual({ 'is-narrow-mobile': true, 'is-10-desktop': true, });

        expect(Grid.getSizeModifiers({ isSize: false })).toEqual({});
        expect(Grid.getSizeModifiers({ isSize: true })).toEqual({});
    });

    it('should getOffsetModifiers', () => {
        expect(Grid.getOffsetModifiers({ isOffset: 1 })).toEqual({ 'is-offset-1': true });
        expect(Grid.getOffsetModifiers({ isOffset: 12 })).toEqual({ 'is-offset-12': true });

        expect(Grid.getOffsetModifiers({ isOffset: '1/2' })).toEqual({ 'is-offset-half': true });
        expect(Grid.getOffsetModifiers({ isOffset: 'narrow' })).toEqual({});

        expect(
            Grid.getOffsetModifiers({ isOffset: { mobile: 'narrow', s: 12, desktop: 10 } })
        ).toEqual({ 'is-offset-10-desktop': true, });

        expect(Grid.getOffsetModifiers({ isOffset: false })).toEqual({});
        expect(Grid.getOffsetModifiers({ isOffset: true })).toEqual({});
    });


})