{{-- @php($usconf = json_decode($user->json_config, true)) --}}
@php($usconf = ['moreinfo' => ['locations' => ['loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl', 'loauej sterry 23 sofio neywprl'], 'phones' => [98798687876, 2320923221, 98798687876, 2320923221, 98798687876, 2320923221], 'emails' => ['dhhhi@hioh.do', 'dspok@ko.de', 'dhhhi@hioh.do', 'dspok@ko.de']]])
<div class="flex flex-col sm:flex-row items-center-justify-center content-center my-3">

    <div class="m-auto">
        <div class="rounded-full m-auto bg-[aliceblue] flex items-center justify-center content-center w-36 h-36">
            <h4 class=" text-black text-3xl font-extrabold ">AL</h4>
        </div>
        <h1 class="text-black text-xl font-extrabold m-auto w-fit">{{ $user->name }}</h1>
        <div class="flex items-center space-x-2 justify-center">
            @if ($user->email !== null)
                <x-carbon-email onclick="swi('eemail')" class="w-6 h-6 cursor-pointer fill-black" />
            @endif
            @isset($usconf['moreinfo']['phones'])
                <x-carbon-phone onclick="swi('pphone')" class="w-6 h-6 cursor-pointer fill-black" />
            @endisset
            @if ($user->country !== null || !empty($usconf['moreinfo']['locations']))
                <x-carbon-location onclick="swi('llocation')" class="w-6 h-6 cursor-pointer fill-black" />
            @endif
        </div>
    </div>

        <div id="detailsdiv"
        class="rounded-lg sm:m-0 mt-[3em] m-auto max-h-[12.5em] w-full h-[12em] sm:max-h-[12.5em] bg-[aliceblue] sm:w-[75%] text-black hidden items-center justify-center content-center p-2">
        
        <div class="hidden tohidd max-h-[9em]" id="eemail">
            <div class="bg-[#33494d6c] p-2 my-2 rounded-lg text-xl font-bold flex sm:flex-row flex-col justify-between items-center">
                <div class="flex w-full">
                    <x-carbon-star class="w-5 h-6 mr-2 fill-black" /> <code class="overflow-scroll">{{ $user->email }}</code>
                </div>
                <button class="btn btn-sm sm:m-0 m-2"> email him </button>
            </div>
            @isset($usconf['moreinfo']['emails'])
                <div class=" my-1 overflow-scroll bg-[#33494d6c] rounded-lg p-2 max-h-[4.4em] sm:max-h-[7em] space-y-[0.31em]"
                    style="box-shadow: inset 0px -8px 9px #00000087, inset 0 8px 9px #00000087;">
                    @forelse ($usconf['moreinfo']['emails'] as $email)
                        <div class="bg-[#33494d6c] p-2 rounded-lg text-lg font-bold flex justify-between items-center">
                            <div class="flex w-full">
                                <x-carbon-email class="w-5 h-6 mr-2 fill-black" /> <code class="overflow-scroll">{{ $email }}</code>
                            </div>
                            <button class="btn btn-sm sm:block hidden"> messege </button>
                        </div>
                    @empty
                        none
                    @endforelse
                </div>
            @endisset
        </div>

        <div class="hidden tohidd h-full" id="llocation">
            @isset($usconf['moreinfo']['locations'])
                <div class="my-1 overflow-scroll rounded-lg p-2 max-h-[10.8em] space-y-[0.31em]">
                    @isset($user->country)
                        <div class="bg-[#33494d6c] p-2 rounded-lg text-xl font-bold flex justify-between items-center">
                            <x-carbon-star class="w-5 h-6 mr-2 fill-black" /> <code class="overflow-scroll">{{ $user->country }}</code>
                        </div>
                    @endisset
                    @forelse ($usconf['moreinfo']['locations'] as $location)
                        <div class="bg-[#33494d6c] p-2 rounded-lg text-lg font-bold flex items-center">
                            <x-carbon-location class="w-5 h-6 mr-2 fill-black" /> <code class="overflow-scroll">{{ $location }}</code>
                        </div>
                    @empty
                    @endforelse
                </div>
            @endisset
        </div>

        <div class="hidden tohidd" id="pphone">
            @isset($usconf['moreinfo']['phones'])
                <div class=" my-1 overflow-scroll bg-[#33494d6c] rounded-lg p-2  max-h-[10.8em] space-y-[0.31em]">
                    @forelse ($usconf['moreinfo']['phones'] as $phone)
                        <div class="bg-[#33494d6c] p-2 rounded-lg text-lg font-bold flex justify-between items-center">
                            <div class="flex sm:w-full w-[66%]">
                                <x-carbon-phone class="w-5 h-6 mr-2 fill-black" /> <code class="overflow-scroll">{{ $phone }}</code>
                            </div>
                            <button class="btn btn-sm p-[0.1] min-h-[1.8em] text-sm font-bold sm:text-lg sm:p-auto sm:min-h-auto"> copy </button>
                        </div>
                    @empty
                        none
                    @endforelse
                </div>
            @endisset

        </div>
    </div>

</div>

</div>
</div>
