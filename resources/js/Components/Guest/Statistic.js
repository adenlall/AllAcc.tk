import { Link } from '@inertiajs/inertia-react';
import React from 'react'

function Statistic() {
    return (
        <div className="bg-ago">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:items-center lg:flex-row">
                    <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
                        <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-ap3 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
                            <svg
                                className="w-8 text-deep-purple-accent-400 sm:w-12 sm:h-12 xl:w-16 xl:h-16 fill-ap1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 330.001 330.001"
                                xmlSpace="preserve"
                            >
                                <path d="M320.462 1.031a14.999 14.999 0 00-16.484 3.796L192.625 125.459l-49.229-32.495-.025-.017-.107-.071c-.18-.119-.367-.218-.55-.328-.205-.123-.404-.254-.614-.367-.4-.215-.806-.411-1.218-.587-.173-.074-.354-.131-.53-.199-.262-.1-.522-.204-.788-.289-.183-.059-.372-.103-.559-.155-.27-.075-.539-.149-.811-.209-.184-.04-.371-.07-.559-.103a14.913 14.913 0 00-.861-.131 16.034 16.034 0 00-1.467-.099c-.104-.002-.204-.016-.308-.016-.072 0-.142.01-.213.011-.315.005-.629.023-.943.048-.171.013-.342.021-.511.039-.316.036-.629.089-.941.144-.198.035-.396.066-.592.109-.391.085-.779.182-1.162.299-.211.063-.414.144-.621.216-.231.081-.463.16-.691.253-.202.082-.397.176-.594.267-.227.104-.453.209-.676.326-.184.096-.363.2-.543.304-.226.13-.448.263-.667.405a15.635 15.635 0 00-1.606 1.203c-.195.168-.385.342-.573.521-.155.147-.308.296-.456.45-.069.072-.144.135-.212.208l-120 129.472A15.022 15.022 0 000 234.868v80.133c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15v-300a14.998 14.998 0 00-9.538-13.97zM120 300.001H90V176.014l30-32.369v156.356zm30-166.731l30 19.803v146.928h-30V133.27zm60 17.595l30-32.5V300h-30V150.865zM30 240.75l30-32.368v91.619H30V240.75zm270 59.251h-30V85.866l30-32.5v246.635z" />
                            </svg>
                        </div>
                        <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl text-ap3">
                            2 435
                        </h3>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-[#042b28]">
                            That number above present the number of actions in the whole website, white actions we mean the number of the accounts & the number of services add by users & how many our pages had fetched... We collect data without any information can specify the user identity, you can read <Link href="/privacy" className="text-white">Privacy Policy</Link> for more informations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Statistic;
