import Base from '../Layouts/Base'
import axios from 'axios';
import { usePage } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Kitsu() {

    const { auth } = usePage().props;
    useEffect(() => {

    });


    // def50200863dc343f089ac1443fd6b8a6edec44ef254d13e8109ba682a394cddda8a3e1c678aec7add0f71e47e2d58ec6c9be5783b70c43c4c2a6d4b9ea3e046dd84bcd3cd06a9b9c0b9d52afe32c683d9892917b840eebddd649daf11dfeaf29559ef9959c3c74aeb73feeda1375d330ea565664f2edb9268d1a23b263523c8cc168175aa52e1974138a878fbd974ba9e84474edc7091c7d01043b3794a245a429ebff354a7756acf320bffc7047501fc71c202964eedb1216b08afd17fbc2bce5831f799cce0c0f6f9928ddfa87c746b2492cc3a3544c67730e0960d9d45becff92c9b4e57964b7eb8fccc0bcccc7d9dfa844e55834aaa347d370c4af745e114cc145f248a037ab416e3d41434844d74634fbc24696b064842118cc284e2add79aceb61eebf3e4a68794fafaae65649d477ebc192d86217eae253d6a0506d888d55ac2a7ca97163761e680f54d9b90ac5bca8eb2e9813e1ba1cd8fccef1a8f51f8bb52bdbb83be
    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full flex flex-col'>

                <div className="container-fluid p-4 w-full">
                    <h1 className='text-2xl font-extrabold text-accent'>Tell your followers your the best anime ever for you!</h1>
                </div>

            </div>
        </>
    );
}

Kitsu.layout = (page) => <Base children={page} title={"AniList"} />
