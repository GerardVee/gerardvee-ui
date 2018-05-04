import React from 'react';
import Type from 'react-type';

export default class extends React.Component
{
    render()
    {
        const { props } = this;
        if (typeof window !== 'undefined')
        {
            return (
                <Type { ...props }/>
            );
        }
        return (
            <span className={ props.className }/>
        );
    }
}
