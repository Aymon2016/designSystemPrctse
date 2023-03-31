import React from 'react';
import { FontSize } from '@dse/foundation';
import '@dse/scss/lib/Text.css';
interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
