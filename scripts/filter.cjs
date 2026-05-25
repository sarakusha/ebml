const fs = require('fs');
const path = require('path');

const valid = ['@_id', '@_name', '@_type', '@_default', '@_path'];

const makeFinder = name => es => path.join(`../build/${es ? 'module' : 'main'}`, `${name}.js`);

['ebml', 'matroska'].forEach(name => {
  const getFilename = makeFinder(name);
  const filename = getFilename();
  const { default: root } = require(filename);
  root.EBMLSchema.element = root.EBMLSchema.element.map(props => {
    const clone = { ...props };
    for (k in clone) {
      if (!valid.includes(k)) delete clone[k];
    }
    return clone;
  });
  const text = JSON.stringify(root, null, 2);
  fs.writeFileSync(getFilename(), `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ${text};`);
  fs.writeFileSync(getFilename(true), `export default ${text};`);
});
