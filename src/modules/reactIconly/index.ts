import { ReactNode } from 'react';
import 'react-iconly'

declare module 'react-iconly' {
    export interface IconProps {
        children?: ReactNode;
    }
}