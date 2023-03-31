import React__default from 'react';
import { Spacing } from '@dse/foundation';
import '@dse/scss/lib/Utilities.css';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React__default.createElement("div", { className: className, style: { backgroundColor: hexCode } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
