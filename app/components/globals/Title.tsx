const Title = ({ message, className, sub }: { message: string, className: string, sub: string }) => {
    return <div>
        <h1 className={` ${className} hind toBold p-0 m-0 text-uppercase `} style={{ lineHeight: 1 }}>{message} {sub && <span className="font-14">{sub}</span>}</h1>
        <section style={{ width: 61, borderBottom: '4px solid #f44336', margin: 0, padding: 0 }} />
    </div>
}
export default Title;