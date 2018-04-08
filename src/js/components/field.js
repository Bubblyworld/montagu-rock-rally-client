import React from 'react';
import classname from 'classname';

import cssWrapper from './css_wrapper.js';

// Intended to encapsulate a combination of a label and input item,
// for use within login, register and submission forms.
export var Field = cssWrapper('field');
export var Label = cssWrapper('field__label');
export var Input = cssWrapper('field__input');
