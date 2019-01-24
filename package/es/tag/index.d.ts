import * as React from 'react';
import CheckableTag from './CheckableTag';
export { CheckableTagProps } from './CheckableTag';
export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
    className?: string;
    type?: string;
    size?: string;
    ghost?: boolean;
    color?: string;
    /** 标签是否可以关闭 */
    closable?: boolean;
    visible?: boolean;
    /** 关闭时的回调 */
    onClose?: Function;
    /** 动画关闭后的回调 */
    afterClose?: Function;
    style?: React.CSSProperties;
}
export interface TagState {
    closing: boolean;
    closed: boolean;
    visible: boolean;
    mounted: boolean;
}
declare class Tag extends React.Component<TagProps, TagState> {
    static CheckableTag: typeof CheckableTag;
    static defaultProps: {
        prefixCls: string;
        closable: boolean;
        size: string;
        ghost: boolean;
    };
    static getDerivedStateFromProps(nextProps: TagProps, state: TagState): Partial<TagState> | null;
    state: {
        closing: boolean;
        closed: boolean;
        visible: boolean;
        mounted: boolean;
    };
    componentDidUpdate(_prevProps: TagProps, prevState: TagState): void;
    handleIconClick: (e: React.MouseEvent<HTMLElement>) => void;
    close: () => void;
    show: () => void;
    animationEnd: (_: string, existed: boolean) => void;
    isPresetColor(color?: string): boolean;
    getTagStyleColor(type: string): "#00B600" | "#EFBC23" | "#3296FA";
    render(): JSX.Element;
}
export default Tag;
