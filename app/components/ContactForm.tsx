'use client';
import { useState, useEffect } from "react";
import Title from "./globals/Title";
import Form from 'next/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faCaretSquareUp, faCircleCheck, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'underscore';

interface Reason {
    Category?: string,
    Email?: string,
    id?: number
}
interface Season {
    id: number,
    Name: string,
}

const ContactForm = () => {
    const [form, setForm] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Message: '',
        TeamName: '',
        HostClub: '',
        HostLocation: ''
    });
    const [state, setState] = useState({
        isReasonOpen: false,
        isSeasonOpen: false,
        isGendersOpen: false,
        isAgeGroupsOpen: false,
        isTournamentsOpen: false,
        reason: {} as Reason,
        index: -1,
        selectedSeason: {} as Season,
        selectedGender: '',
        selectedAgeGroup: '',
        thanks: false,
        valid: true,
    });
    const [contactEmailList, setContactEmailList] = useState([]);
    const [tournaments, setTournaments] = useState([]);
    const [ageGroups] = useState([
        'U06',
        'U07',
        'U08',
        'U09',
        'U10',
        'U11',
        'U12',
        'U13',
        'U14',
        'U15',
        'U16',
        'U17',
        'U18',
        'Adults',
    ]);
    const invalid = !state.valid;

    // MOUNT
    useEffect(() => {
        Promise.all([
            fetch(`api/tournaments`).then((res) => res.json()),
            fetch(`api/contacts`).then((res) => res.json())
        ]).then(([{ tournaments }, contacts]) => {
            setTournaments(tournaments);
            setContactEmailList(contacts);
        }).catch(() => {
            // a spinner perhaps?
        });
    }, []);

    // HANDLERS
    const handleChange = (e: any) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const onReason = (r: any) => {
        setState(prevState => ({
            ...prevState,
            reason: contactEmailList[r],
            index: r,
            isReasonOpen: false
        }));
    }
    const onSeason = (s: Season) => {
        setState(prevState => ({
            ...prevState,
            selectedSeason: s,
            isSeasonOpen: false
        }));
    }
    const onGender = (gender: string) => {
        setState(prevState => ({
            ...prevState,
            selectedGender: gender,
            isGendersOpen: false
        }));
    }
    const onAgeGroup = (ageGroup: string) => {
        setState(prevState => ({
            ...prevState,
            selectedAgeGroup: ageGroup,
            isAgeGroupsOpen: false
        }));
    }
    //

    const send = (e: any) => {
        e && e.preventDefault && e.preventDefault();
        // validations        
        let payload = {
            Name: form.Name,
            Phone: form.Phone,
            Email: form.Email,
            Reason: state.reason,
            Message: form.Message,
            Gender: state.selectedGender,
            TeamName: form.TeamName,
            AgeGroup: state.selectedAgeGroup,
            Season: _.pick(state.selectedSeason || {}, 'Id', 'id', 'Name', 'SeasonName'),
            HostClub: form.HostClub,
            HostLocation: form.HostLocation
        };

        let invalid = false;

        const requiredFields = [
            { condition: !form.Name, field: 'Name' },
            { condition: !form.Phone, field: 'Phone' },
            { condition: !form.Email, field: 'Email' },
            { condition: !state.reason, field: 'Reason' },
            { condition: !form.Message, field: 'Message' },
            { condition: !state.selectedSeason && [0, 1, 2, 4].includes(state.index ?? -1), field: 'Season' },
            { condition: [0, 1, 3, 5].includes(state.index ?? -1) && !form.TeamName, field: 'TeamName' },
            { condition: [1, 3, 5].includes(state.index ?? -1) && !state.selectedGender, field: 'Gender' },
            { condition: [1, 3, 5].includes(state.index ?? -1) && !state.selectedAgeGroup, field: 'AgeGroup' },
            { condition: [6].includes(state.index ?? -1) && !form.HostClub, field: 'HostClub' },
            { condition: [6].includes(state.index ?? -1) && !form.HostLocation, field: 'HostLocation' },
        ];

        invalid = requiredFields.some(({ condition }) => condition);

        setState(prevState => ({ ...prevState, valid: invalid ? false : true }));


        if (!invalid) {
            // API CALL
            fetch(`api/contacts`, { method: 'POST', body: JSON.stringify(payload) });
            setState(prevState => ({
                ...prevState,
                thanks: true
            }));

            // RESET
            setForm({
                Name: '',
                Phone: '',
                Email: '',
                Message: '',
                TeamName: '',
                HostClub: '',
                HostLocation: ''
            });
            setState(prevState => ({
                ...prevState,
                reason: {} as Reason,
                index: -1,
                selectedSeason: {} as Season,
                selectedGender: '',
                selectedAgeGroup: '',
            }));
            //            
        }

    }

    return <div className="w3-container bg-black">
        <div className={`w3-content flex flex-col md:flex-row gap-3 pt-8 pb-8`}>
            <div className="w-100 flex-none md:flex-1">
                <Title message="WRITE US" className="text-white" />
                <p className="mt-3 text-bold text-white montserrat">We appreciate your input and we look forward to hearing from you.</p>
                <p className="mt-3 text-white montserrat">At Challenge Sports we believe that Effective Communication is an important ingredient in the success of our events.</p>
                <p className="mt-3 text-white montserrat">While most information can be found within the pages of our site (FAQs, Event Pages, etc.), if you can't find what you're looking for, or have any other questions please feel free to use the form on the right.</p>
            </div>
            <div className="w-100 flex-none md:flex-1 montserrat">
                <Form action="/" scroll={false}>
                    {/* Name */}
                    <label htmlFor="Name" className="text-white">Full Name</label>
                    <input name="Name" className={`${(invalid && !form.Name) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.Name} onChange={handleChange} />
                    {/* Phone */}
                    <label htmlFor="Phone" className="text-white mt-3">Phone Number</label>
                    <input name="Phone" className={`${(invalid && !form.Phone) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.Phone} onChange={handleChange} />
                    {/* Email */}
                    <label htmlFor="Email" className="text-white mt-3">Email</label>
                    <input name="Email" className={`${(invalid && !form.Email) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.Email} onChange={handleChange} />
                    {/* Reason */}
                    <label className="text-white mt-3">Reason for Contact</label>
                    <Dropdown drop="up-centered" className="mt-2">
                        <Dropdown.Toggle variant="light" className={`!rounded-xs ${invalid && !state.reason?.id ? '!bg-red-400' : ''} dark text-left d-flex text-white `}>
                            {(state.reason && state.reason.Category) ? state.reason.Category : 'Please choose one'}
                            <FontAwesomeIcon icon={state.isReasonOpen ? faCaretSquareUp : faCaretSquareDown} className="fa-fw ms-auto align-self-center !text-white-100" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {contactEmailList && contactEmailList.map((reason: any, i) => <Dropdown.Item key={i} onClick={() => onReason(i)}>{reason.Category}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* Season | Tournament */}
                    {[0, 1, 2, 4].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label htmlFor="name" className="mt-3 text-white">Tournament</label>
                            <Dropdown drop="up-centered" className="mt-2">
                                <Dropdown.Toggle variant="light" className={`w3-button !rounded-xs ${invalid && !state.selectedSeason?.id ? '!bg-red-400' : ''} dark text-left d-flex text-white block`}>
                                    {(state.selectedSeason && state.selectedSeason.Name) ? state.selectedSeason.Name : 'Please choose one'}
                                    <FontAwesomeIcon icon={state.isSeasonOpen ? faCaretSquareUp : faCaretSquareDown} className="fa-fw ms-auto align-self-center !text-white-100" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {tournaments && tournaments.map((tournament: Season, i) => <Dropdown.Item key={i} onClick={() => onSeason(tournament)}>{tournament.Name}</Dropdown.Item>)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    )}
                    {/* Team */}
                    {[0, 1, 3, 5].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label htmlFor="TeamName" className="text-white mt-3">Team</label>
                            <input name="TeamName" className={`${(invalid && !form.TeamName) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.TeamName} onChange={handleChange} />
                        </>
                    )}
                    {/* Gender */}
                    {[0, 1, 3, 5].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label className="mt-3 text-white">Gender</label>
                            <Dropdown drop="up-centered" className="mt-2">
                                <Dropdown.Toggle variant="light" className={`w3-button !rounded-xs ${invalid && !state.selectedGender ? '!bg-red-400' : ''} dark text-left d-flex text-white block`}>
                                    {(state.selectedGender) ? state.selectedGender : 'Please choose one'}
                                    <FontAwesomeIcon icon={state.isGendersOpen ? faCaretSquareUp : faCaretSquareDown} className="fa-fw ms-auto align-self-center !text-white-100" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {['Male', 'Female'].map((gender: string, i) => <Dropdown.Item key={i} onClick={() => onGender(gender)}>{gender}</Dropdown.Item>)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    )}
                    {/* Age */}
                    {[0, 1, 3, 5].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label className="mt-3 text-white">Age Group</label>
                            <Dropdown drop="up-centered" className="mt-2">
                                <Dropdown.Toggle variant="light" className={`w3-button !rounded-xs ${invalid && !state.selectedAgeGroup ? '!bg-red-400' : ''} dark text-left d-flex text-white block`}>
                                    {(state.selectedAgeGroup) ? state.selectedAgeGroup : 'Please choose one'}
                                    <FontAwesomeIcon icon={state.isAgeGroupsOpen ? faCaretSquareUp : faCaretSquareDown} className="fa-fw ms-auto align-self-center !text-white-100" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {ageGroups && ageGroups.map((ageGroup: string, i) => <Dropdown.Item key={i} onClick={() => onAgeGroup(ageGroup)}>{ageGroup}</Dropdown.Item>)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    )}
                    {/* Host Club */}
                    {[6].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label htmlFor="HostClub" className="text-white mt-3">Host Club</label>
                            <input name="HostClub" className={`${(invalid && !form.HostClub) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.HostClub} onChange={handleChange} />
                        </>
                    )}
                    {/* Host Location */}
                    {[6].indexOf(state.index ?? -1) !== -1 && (
                        <>
                            <label htmlFor="HostLocation" className="text-white mt-3">Host Location</label>
                            <input name="HostLocation" className={`${(invalid && !form.HostLocation) ? '!bg-red-400' : ''} text-white dark mt-2 !rounded-xs`} type="text" maxLength={50} value={form.HostLocation} onChange={handleChange} />
                        </>
                    )}

                    <label htmlFor="Message" className="mt-3 text-white">Message</label>
                    <textarea name="Message" onChange={handleChange} className={`${(invalid && !form.Message) ? '!bg-red-400' : ''} text-white dark mt-2`} value={form.Message} />

                    {/* Submit */}
                    <button onClick={send} type="button" className="btn btn-link !text-white px-4 py-2 !border-white mt-4 !no-underline me-2">SEND MESSAGE</button>

                    {(state.thanks) && <div className="align-self-center ml-auto">
                        <span className="text-white mt-4 d-flex flex-row">
                            <FontAwesomeIcon icon={faCircleCheck}
                                className="!text-green-400 me-2 align-self-center text-[30px]" />
                            <span className="line1 align-self-center">Thanks for reaching out. Will be contacting you as soon as possible.</span></span>
                    </div>}

                    {(invalid) && <div className="align-self-center ml-auto">
                        <span className="text-white mt-4 d-flex flex-row">
                            <FontAwesomeIcon icon={faTimesCircle}
                                className="!text-red-400 me-2 align-self-center text-[30px]" />
                            <span className="line1 align-self-center">** Please complete the missing fields {invalid ? 'true' : 'false'}</span></span>
                    </div>}

                </Form>
            </div>
        </div>
    </div>
}
export default ContactForm
