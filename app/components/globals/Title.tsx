import React from 'react';

interface TitleProps {
    message: string,
    className?: string,
    sub?: string
}

const Title: React.FC<TitleProps> = ({ message, className, sub }: { message: string, className: string, sub: string }) => {
    return <div className="px-3">
        <h1 className={`title montserrat ${className} line1`}>{message} {sub && <span className="font-14">{sub}</span>}</h1>
        <section style={{ width: 61, borderBottom: '4px solid #f44336', margin: 0, padding: 0 }} />
    </div>
}
export default Title;