import React from 'react';
import { Spacing } from '@dse/foundation';
import '@dse/scss/lib/Utilities.css';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
