'use strict';

import { Table } from '@serverless-stack/resources';

export function StorageStack({ stack, app }) {
    // Create the Dynamo Table
    let table = new Table(stack, 'Notes', {
        fields: {
            userId: 'string',
            noteId: 'string'
        },
        primaryIndex: {
            partitionKey: 'userId',
            sortKey: 'noteId'
        }
    });

    return {
        table
    };
};