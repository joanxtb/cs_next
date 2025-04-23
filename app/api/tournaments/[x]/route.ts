import _ from 'underscore';
export async function GET(request: Request, context: { params: { x: number } }) {
    try {
        const { x } = await context.params;
        // Call REST API
        // TODO: create an endpoint that just returns X tournaments
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

        await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay

        if (!response.ok) { return Response.json({ error: 'Could not fetch!' }); }
        const { tournaments } = await response.json();
        return Response.json(_.take(tournaments, x));
    } catch (err) {
        console.error('API error:', err);
        return Response.json({ error: 'Internal server error' });
    }
}