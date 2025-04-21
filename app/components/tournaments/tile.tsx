'use client';
import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const TournamentTile = ({ total, index, tournament }: {
    total: number,
    index: number,
    tournament: any
}) => {    
    return <div className="w-100">
        {total > 1 && <div className="p-2 w-100 card bordered p-0">
            <div className="w-100 card-triplet" style={{ backgroundSize: 'cover', height: 100, background: `url("/images/backgrounds/triplet/${total}_${index}.jpg") no-repeat center bottom` }} />
            <div className="d-flex flex-column p-2">
                <img alt="" src={`${tournament.Affiliate ? tournament.Affiliate.Logo : "/images/logos/logo.png"}`} style={{ height: 50 }} className="margin-top text-center align-self-center" />
                <span className="black font-12 toBold margin-top text-center align-self-center">{moment(tournament.DateStart).format('MMM Do')}{(tournament.DateEnd && moment(tournament.DateEnd).isAfter(moment(tournament.DateStart))) ? (moment(tournament.DateStart).format('MMM') === moment(tournament.DateEnd).format('MMM') ? moment(tournament.DateEnd).format(' - Do, YYYY') : moment(tournament.DateEnd).format(' - MMM Do, YYYY')) : moment(tournament.DateStart).format(', YYYY')}</span>
                <span className="gray font-10 margin-top-half text-center align-self-center" style={{ minHeight: 40 }}>{tournament.Name}</span>
                <Link href={`/tournament/${tournament.id}`} className="btn-view-more margin-top text-center align-self-center margin-bottom-double red">VIEW MORE</Link>
            </div>
        </div>}
        {total === 1 && <div className="w3-card d-flex flex-row" style={{ height: 325 }}>
            <div className="w-100" style={{ background: `url("/images/backgrounds/triplet/${total}_${index}.jpg") no-repeat center bottom`, backgroundSize: 'cover' }} />
            <div className="w-100 d-flex flex-column justify-content-center">
                <img alt="" src={`${tournament.Affiliate ? tournament.Affiliate.Logo : "/images/logos/logo.png"}`} style={{ height: 50 }} className="margin-top text-center align-self-center" />
                <span className="black font-12 toBold margin-top text-center align-self-center">{moment(tournament.DateStart).format('MMM Do')}{(tournament.DateEnd && moment(tournament.DateEnd).isAfter(moment(tournament.DateStart))) ? (moment(tournament.DateStart).format('MMM') === moment(tournament.DateEnd).format('MMM') ? moment(tournament.DateEnd).format(' - Do, YYYY') : moment(tournament.DateEnd).format(' - MMM Do, YYYY')) : moment(tournament.DateStart).format(', YYYY')}</span>
                <span className="gray font-10 margin-top-half text-center align-self-center" style={{ minHeight: 40 }}>{tournament.Name}</span>
                <Link href={`/tournament/${tournament.id}`} className="btn-view-more margin-top text-center align-self-center red">VIEW MORE</Link>
            </div>
        </div>}
    </div>
}

export default TournamentTile;