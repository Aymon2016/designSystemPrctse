import React__default from 'react';
import { FontSize } from '@dse/foundation';
import '@dse/scss/lib/text.css';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React__default.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=text.js.map
