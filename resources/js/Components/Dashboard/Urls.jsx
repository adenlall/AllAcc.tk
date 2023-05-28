
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';

export default function Urls(props) {

    const { errors } = usePage().props;
    // TODO: try to make a grouped links;
    const path = JSON.parse(props.path).urls;
    const grpsNames = JSON.parse(props.path).config.urlsGrps;

    const [load, setLoad] = useState(false);

    useEffect(() => {
if(path !== undefined || path !== null ){
    for (let i = 0; i < path.length; i++) {
        let index = path[i]['id'];
        document.getElementById(`urlName${index}`).style.display = 'block';
        document.getElementById(`urlLink${index}`).style.display = 'block';
        document.getElementById(`urlGrp${index}`).style.display = 'block';
        document.getElementById(`editlink${index}`).style.display = 'none';
        document.getElementById(`editlinkName${index}`).style.display = 'none';
        if (grpsNames.length !== 0) {
            document.getElementById(`editlinkGrp${index}`).style.display = 'none';
        }

    }
}

    }, [load]);



    const grpDel = (e) => {
        Inertia.post('/urls/set?to=delgrp', { data: e }, { preserveScroll: true });
    }

    const checkGrp = (e) => {
        if (e.length < 3 || e === 'none' || e === null) {
            return false;
        }
        for (let i = 0; i < grpsNames.length; i++) {
            if (grpsNames[i][0] === e) {
                console.log('false');
                return false;
            }
        }
        return true;
    }
    const grpSav = () => {
        let val = document.getElementById(`groupName`).value;
        val = removeSpaceEnd(val);
        console.log(grpsNames.length);
        if (checkGrp(val)) {
            if(grpsNames.length < 8){
                Inertia.post('/urls/set?to=grp', { data: val }, { preserveScroll: true });
            }else{
                toast['error']('8 link groups is the max!');
            }
        } else {
            toast['error']('invalid group name');
        }
    }


    const del = (e) => {
        Inertia.post('/urls/set?to=dellink', { data: e }, { preserveScroll: true });
    }
    const edi = (i) => {

        document.getElementById(`submitbtn`).style.display = 'block';
        document.getElementById(`urlName${i}`).style.display = 'none';
        document.getElementById(`urlLink${i}`).style.display = 'none';
        document.getElementById(`urlGrp${i}`).style.display = 'none';

        document.getElementById(`editlink${i}`).style.display = 'block';
        document.getElementById(`editlinkName${i}`).style.display = 'block';
        if (grpsNames.length !== 0) {
            document.getElementById(`editlinkGrp${i}`).style.display = 'block';
        }

        document.getElementById(`editlink${i}`).value = document.getElementById(`urlLink${i}`).innerHTML;
        document.getElementById(`editlinkName${i}`).value = document.getElementById(`urlName${i}`).innerHTML;
        if (grpsNames.length !== 0) {
            document.getElementById(`editlinkGrp${i}`).value = path[i].grp;
        }

    }
    const hundelChange = (id = 0, name = '', val = '') => {
        for (let i = 0; i < path.length; i++) {
            if (path[i]['id'] === id) {
                path[i][name] = removeSpaceEnd(document.getElementById(val).value);
                break;
            }
        }
    }
    const fastCheck = (link) => {

        var pattern = '^(https?:\\/\\/)?' + // protocol
            '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])*\\.)+' + // sub-domain + domain name
                    '[a-zA-Z]{2,13})' + // extension
                            '|((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (v4) address
                                    '|localhost)' + // OR localhost
                                            '(\\:\\d{1,5})?' + // port
                                                    '(\\/[a-zA-Z\\&\\d%_.~+-:@]*)*' + // path
                                                            '(\\?[a-zA-Z\\&\\d%_.,~+-:@=;&]*)?' + // query string
                                                                    '(\\#[-a-zA-Z&\\d_]*)?$';
                                    var regex = new RegExp(pattern);
                                    return regex.test(link);
    }
    const sav = () => {
        let linkv = removeSpaceEnd(document.getElementById('linkName').value);
        let link = removeSpaceEnd(document.getElementById('link').value);
        if (linkv === '' || linkv.length < 2 || link === '' || link.length < 4) {
            toast['error']('invalid inputs');
        } else {
            if(fastCheck(link)){
                if(path.length <= 15){
                    Inertia.post('/urls/set?to=default', { name: linkv, link: link }, { preserveScroll: true })
                }else{
                    toast['error']('15 links is the max!');
                }
            }else{
                toast['error']('not a valid link');
            }
        }
    }
    const saveChange = () => {
        Inertia.post('/urls/set?to=hun', { data: JSON.stringify(path) }, { preserveScroll: true, onSuccess: () => setLoad(true) });
    }

    return (
        <>
            <h2 className="text-xl font-bold my-3 ">Add your links :</h2>
            <div>

                <DragDropContext onDragEnd={(e) => {
                    let des = e.destination.index;
                    let home = e.source.index;
                    path.splice(des, 0, path.splice(home, 1)[0]);
                    document.getElementById(`submitbtn`).style.display = 'block';
                }}>

                    <div
                        className="p-2 mb-2 bg-ap3 rounded-lg space-x-2 flex items-stretch justify-start content-center w-full"
                        style={{ marginTop: '2em' }}
                    >
                        <div className='bg-ago w-[3em] p-2 flex items-center justify-center content-center rounded-lg '>
                            <svg
                                className='w-auto h-[4em]'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 42 42"
                                xmlSpace="preserve"
                            >
                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                            </svg>
                        </div>
                        <div className='flex flex-col space-y-2 p-2 items-center justify-center content-center rounded-lg bg-ago'>
                            <svg onClick={() => { sav() }} className="h-8 w-8-500 cursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                        </div>
                        <div className='flex flex-col items-start justify-start text-black space-y-1' style={{ width: 'inherit' }} >
                            <input className='input bg-white text-black input-sm' style={{ width: 'inherit' }} type='text' placeholder='Link name' id='linkName' name='linkName' />
                            <input className='input bg-white text-black input-sm' style={{ width: 'inherit' }} type='url' placeholder='The link' id='link' name='link' />
                            {
                                errors.link ?
                                    <label className="alt alt-label text-red-700">{errors.link}</label>
                                    : ''
                            }
                        </div>
                    </div>



                    <Droppable droppableId="droppable-1">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} className='space-y-2 flex flex-col items-stretch justify-start content-center '>
                                {
                                    path.map((url, i) => (
                                        <Draggable key={url.id} draggableId={i + '' + url.id} index={i}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    className="p-2 bg-ap3 rounded-lg space-x-2 flex items-stretch justify-start content-center"
                                                >
                                                    <div {...provided.dragHandleProps} className='bg-ago h-auto flex items-center justify-center content-center rounded-lg '>
                                                        <svg
                                                            width="48px"
                                                            height="4em"
                                                            viewBox="0 0 48 48"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M19 10.307c0 2.38-1.79 4.308-4 4.308s-4-1.928-4-4.308C11 7.93 12.79 6 15 6s4 1.929 4 4.307zm-4 18.308c2.21 0 4-1.928 4-4.307C19 21.928 17.21 20 15 20s-4 1.928-4 4.308c0 2.378 1.79 4.307 4 4.307zm0 14c2.21 0 4-1.928 4-4.308C19 35.928 17.21 34 15 34s-4 1.928-4 4.307c0 2.38 1.79 4.308 4 4.308zM37 10.307c0 2.38-1.79 4.308-4 4.308s-4-1.928-4-4.308C29 7.93 30.79 6 33 6s4 1.929 4 4.307zm-4 18.308c2.21 0 4-1.928 4-4.307C37 21.928 35.21 20 33 20s-4 1.928-4 4.308c0 2.378 1.79 4.307 4 4.307zm0 14c2.21 0 4-1.928 4-4.308C37 35.928 35.21 34 33 34s-4 1.928-4 4.307c0 2.38 1.79 4.308 4 4.308z"
                                                                fill="#000"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className='flex flex-col space-y-2 p-2 items-center justify-center content-center rounded-lg bg-ago'>
                                                        <svg onClick={() => { del(url.id) }} className="h-8 w-8 cursor-polink.idnter bg-blue-100 rounded-lg p-[.2em] hover:bg-accent text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                                        <svg onClick={() => { edi(url.id) }} className="h-8 w-8 text-black polink.idursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </div>
                                                    <div className='flex flex-col items-start justify-start text-black w-[50%] sm:w-[64%]'>
                                                        <h4 id={`urlName${url.id}`} className='text-lg font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap'>{url.name}</h4>
                                                        <code id={`urlLink${url.id}`} className='w-full overflow-scroll'>{url.link}</code>
                                                        <h5 id={`urlGrp${url.id}`} className=''>url group : {url.grp === null ? 'none' : url.grp}</h5>
                                                        <input onChange={() => { hundelChange(url.id, 'name', `editlinkName${url.id}`) }} className='hidden input bg-white  md:w-auto w-inherit text-black input-xs' type='text' id={`editlinkName${url.id}`} name={`editlinkName${url.id}`} />
                                                        <input onChange={() => { hundelChange(url.id, 'link', `editlink${url.id}`) }} className='hidden input bg-white my-1 md:w-auto w-inherit  text-black input-xs' type='text' id={`editlink${url.id}`} name={`editlink${url.id}`} />
                                                        {
                                                            ((grpsNames.length === 0) || (grpsNames === null))
                                                                ?
                                                                ''
                                                                :
                                                                <select onChange={() => { hundelChange(url.id, 'grp', `editlinkGrp${url.id}`) }} id={`editlinkGrp${url.id}`} class="hidden select bg-white text-black select-sm select-primary md:w-auto w-inherit ">
                                                                    <option value={null} >none</option>
                                                                    {
                                                                        grpsNames.map((grpName, i) => (
                                                                            <option key={i} value={grpName}>{grpName}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                        }
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>

                                    ))
                                }
                                {provided.placeholder}
                            </div>

                        )}

                    </Droppable>
                </DragDropContext>

                {
                    path.length === 0 ?
                        (<h3 className="text-xl font-bold p-4 bg-ago text-black mt-0 text-center rounded-lg py-[5em]">Add your links from the input above.</h3>)
                        : ''
                }
                <button id="submitbtn" onClick={() => { saveChange() }} className="hidden my-2 btn w-full" style={{ marginTop: '.5em' }} type="button" >Save your changes</button>
                <div style={{ marginBottom: '2em' }} className=' w-full space-x-2 mt-2 p-2 text-black bg-ap3 rounded-lg  flex items-stretch justify-start content-center '>
                    <div className='flex flex-col space-y-2 p-2 items-center justify-center content-center rounded-lg bg-ago'>
                        <svg onClick={() => { grpSav() }} className="h-8 w-8-500 cursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                    </div>
                    <div className="p-2 space-y-1 w-full flex flex-col items-start justify-start content-center">
                        <h4>Groupe your links </h4>
                        <input style={{ width: 'inherit' }} className='input input-sm bg-white text-black' type="text" placeholder='groupe name' name="groupName" id="groupName" />
                        <div>current : <div className='flex w-full flex-wrap '>
                            {
                                ((grpsNames.length === 0) || (grpsNames === null))
                                    ?
                                    <p>none</p>
                                    :
                                    (
                                        grpsNames.map((grpName, i) => (
                                            <div key={i} class="badge m-2 badge-info gap-2 text-white">
                                                <svg onClick={() => { grpDel(grpName) }} style={{ cursor: 'pointer' }} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                {grpName}
                                            </div>
                                        ))
                                    )
                            }
                        </div></div>
                    </div>
                </div>

            </div>
        </>
    );
}
