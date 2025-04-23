import _ from 'underscore';
// Get all the upcoming tournaments (SSR Api component)
export async function GET() {
    try {
        // Call REST API        
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/cs/v2/tournaments/upcoming/all`,
            {
                next: {
                    revalidate: 3600, // every hour cache
                },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(process.env.REACT_APP_API_KEY && { 'Authorization': process.env.REACT_APP_API_KEY })
                }
            });

        // Simulate a delay. TODO: remove this
        //await new Promise((resolve) => setTimeout(resolve, 3000));

        if (!response.ok) {
            return Response.json({ error: 'Internal server error' });
        }
        const data = await response.json();        
        return Response.json(data);
    } catch (err) {
        console.error('API error:', err);
        return Response.json({ error: 'Internal server error' });
    }
}