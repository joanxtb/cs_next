// This is a SSR component
'use client';
import React, { useEffect, useState } from 'react';
import Title from "../globals/Title";
import TournamentTile from "./tile";
import _ from 'underscore';
import Link from 'next/link';
import Lottie from "lottie-react";
import spinner from "../../lottie.json";

const TournamentsHome = () => {

    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Component mount
    useEffect(() => {
        fetch(`api/tournaments/3`)
            .then((res) => res.json(), not_ok => {
                throw new Error('Failed fetching upcoming tournaments');
            })
            .then((tournaments) => {
                setTournaments(tournaments);
                setLoading(false);
            }).catch(() => setLoading(false));
    }, []);

    return (<div className="pattern">
        <div className="w3-content mx-auto py-4">
            <Title message="Upcoming Tournaments" />
            {loading && <div style={{ height: 330 }} className="d-flex flex-row justify-content-center">
                <Lottie animationData={spinner} />
            </div>}
            {!loading && <div className="d-flex gap-3 mt-4">
                {tournaments && tournaments.map((t: any, index: number) => (<TournamentTile key={index} total={tournaments.length} index={index} tournament={t} />
                ))}
            </div>}
            <div className="block text-center">
                <Link href="/tournaments" className="btn btn-link bg-white !no-underline !border-red-400 mt-4 !text-red-400">VIEW ALL{tournaments && tournaments.length > 0 ? '' : ' PREVIOUS '}TOURNAMENTS</Link>
            </div>
        </div>
    </div>)
}
export default TournamentsHome;