import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';

export interface NavbarLink<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
}

export function NavbarLink({ tag = 'a', render, ...props }: NavbarLink<HTMLElement>) {
    const className = classNames(
        'navbar-link',
        {
            ...getActiveModifiers(props),
        },
        props.className,
    );

    if (render) return render({ ...props });

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarLink);
export default HOC;
