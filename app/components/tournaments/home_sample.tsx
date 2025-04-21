// This is a SSR component
import Title from "../globals/Title";
import TournamentTile from "./tile";
import _ from 'underscore';
import Link from 'next/link';

async function TournamentsHome() {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/cs/v2/tournaments/upcoming/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_API_KEY
        }
    });
    if (!response.ok) throw new Error('Failed fetching upcoming tournaments');
    const { tournaments } = await response.json();
    const top_3 = _.chain(tournaments).take(3).value();

    return (<>
        <div className="w3-content mx-auto bg-white py-4">
            <Title message="Upcoming Tournaments" sub={null} className={null} />
            <div className="d-flex gap-3 mt-4">
                {top_3 && top_3.map((t: any, index: number) => (<TournamentTile key={index} total={top_3.length} index={index} tournament={t} />
                ))}
            </div>
            <div className="block text-center">
                <Link href="/tournaments" className="btn btn-danger btn-block mt-4">VIEW ALL{tournaments && tournaments.length > 0 ? '' : ' PREVIOUS '}TOURNAMENTS</Link>
            </div>
        </div>
    </>)
}
export default TournamentsHome;