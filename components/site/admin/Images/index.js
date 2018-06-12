import { Component } from 'react';

import UploadImage from './UploadImage';
import DeleteImages from './DeleteImages';

export default class extends Component
{
    render()
    {
        return (
            <>
                <UploadImage />
                <DeleteImages />
            </>
        );
    }
};