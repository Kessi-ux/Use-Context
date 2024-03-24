export type ButtonProps = {
    onClick: () => void,
    children: React.ReactNode,
    theme: 'light' | 'dark',
};

const baseStyle = {
    borderRadius: '5px',
    transition: 'all .2s',
};

const lightStyle = {
    ...baseStyle,
    background: '#fff', color: '#000'
};

const darkStyle = {
    ...baseStyle,
    background: '#000', color: '#fff'
};

export const Button = (props: ButtonProps) => {
    return (
        <button style = {props.theme == 'light' ? lightStyle : darkStyle} onClick = {props.onClick}>
            {props.children}
        </button>
    )
}