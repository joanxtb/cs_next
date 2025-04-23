'use client';
import React from 'react';
import Link from 'next/link';
import moment from 'moment';



const TournamentTile = ({ total, index, tournament }: {
    total: number,
    index: number,
    tournament: any
}) => {

    const backgroundStyle = {
        backgroundImage: `url("/images/backgrounds/triplet/${total}_${index}.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        height: 100,
    };
    const singleBackgroundStyle = {
        backgroundImage: `url("/images/backgrounds/triplet/${total}_${index}.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
    }

    return <div className="w-100">
        {total > 1 && <div className="p-2 w-100 card bordered p-0 shadow-sm">
            <div className="w-100" style={backgroundStyle} />
            <div className="d-flex flex-column p-2">
                <img alt="" src={`${tournament.Affiliate ? tournament.Affiliate.Logo : "/images/logos/logo.png"}`} style={{ height: 50 }} className="mt-3 text-center align-self-center" />
                <span className="black font-12 toBold mt-3 text-center align-self-center">{moment(tournament.DateStart).format('MMM Do')}{(tournament.DateEnd && moment(tournament.DateEnd).isAfter(moment(tournament.DateStart))) ? (moment(tournament.DateStart).format('MMM') === moment(tournament.DateEnd).format('MMM') ? moment(tournament.DateEnd).format(' - Do, YYYY') : moment(tournament.DateEnd).format(' - MMM Do, YYYY')) : moment(tournament.DateStart).format(', YYYY')}</span>
                <span className="gray font-10 mt-1 text-center align-self-center" style={{ minHeight: 40 }}>{tournament.Name}</span>
                <Link href={`/tournament/${tournament.id}`} className="btn btn-danger btn-sm bordered text-red mt-3 text-center align-self-center">VIEW MORE</Link>
            </div>
        </div>}
        {total === 1 && <div className="p-2 w-100 card bordered p-0 shadow-sm d-flex flex-row" style={{ height: 325 }}>
            <div className="w-100" style={singleBackgroundStyle} />
            <div className="w-100 d-flex flex-column justify-content-center">
                <img alt="" src={`${tournament.Affiliate ? tournament.Affiliate.Logo : "/images/logos/logo.png"}`} style={{ height: 50 }} className="mt-3 text-center align-self-center" />
                <span className="black font-12 toBold mt-3 text-center align-self-center">{moment(tournament.DateStart).format('MMM Do')}{(tournament.DateEnd && moment(tournament.DateEnd).isAfter(moment(tournament.DateStart))) ? (moment(tournament.DateStart).format('MMM') === moment(tournament.DateEnd).format('MMM') ? moment(tournament.DateEnd).format(' - Do, YYYY') : moment(tournament.DateEnd).format(' - MMM Do, YYYY')) : moment(tournament.DateStart).format(', YYYY')}</span>
                <span className="gray font-10 mt-1 text-center align-self-center" style={{ minHeight: 40 }}>{tournament.Name}</span>
                <Link href={`/tournament/${tournament.id}`} className="btn btn-link bordered text-red mt-3 text-center align-self-center">VIEW MORE</Link>
            </div>
        </div>}
    </div>
}

export default TournamentTile;