'use strict';

import { StorageStack } from './StorageStack';

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'backend',
    bundle: {
      format: 'esm'
    }
  });

  app.stack(StorageStack);
}