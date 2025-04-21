'use client';
const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
    return (<html><body><h2>Global error: {error.message}</h2></body></html>)
}
export default GlobalError;