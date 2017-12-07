import React from 'react';
import {renderToString} from 'react-dom/server';
import View from "./src/components/AddBug.js";

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const renderedApp = renderToString(<View />);

  callback(null, {
    name,
    staticPath,
    app: renderedApp
  });
};
