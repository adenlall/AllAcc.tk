<div class="sm:container flex flex-col sm:flex-row items-center-justify-center content-center my-3 m-auto">

    <div class="m-auto">
        <div style="background: {{$cosui['profile']['img']['bg']}}" class="rounded-full m-auto flex items-center justify-center content-center w-36 h-36">
            <h4 style="color: {{$cosui['bg']}}" class="text-3xl font-extrabold uppercase">{{$user->name[0] . $user->name[1]}}</h4>
        </div>
        <h1 style="color: {{$cosui['profile']['txt']}}" class=" text-xl font-extrabold m-auto my-2 w-fit">{{ $user->name }}</h1>
        <div class="flex items-center space-x-2 justify-center">
            @if ($user->email !== null)
                <x-carbon-email onclick="swi('eemail')" style="fill: {{$cosui['profile']['txt']}}"  class="w-6 h-6 cursor-pointer" />
            @endif
            @isset($user_js['moreinfo']['phones'])
                <x-carbon-phone onclick="swi('pphone')" style="fill: {{$cosui['profile']['txt']}}"  class="w-6 h-6 cursor-pointer" />
            @endisset
            @if (($user->country !== null && $user->country !== '') || !empty($user_js['moreinfo']['locations']))
                <x-carbon-location onclick="swi('llocation')" class="w-6 h-6 cursor-pointer" style="fill: {{$cosui['profile']['txt']}}"  />
            @endif
        </div>
    </div>

    <div id="detailsdiv"
    style="background: {{$cosui['profile']['img']['bg']}}a1"
        class="slide-in-blurred-top rounded-lg sm:m-0 mt-[3em] m-auto max-h-[12.5em] w-full h-[12em] sm:max-h-[12.5em] sm:w-[75%] text-black hidden items-center justify-center content-center p-2">

        <div class="hidden tohidd max-h-[9em]" id="eemail">
            <div
            style="background: {{$cosui['profile']['txt']}}"
                class=" p-2 my-2 rounded-lg text-xl font-bold flex sm:flex-row flex-col justify-between items-start sm:items-center">
                <div class="flex w-full">
                    <x-carbon-star class="w-5 h-6 mr-2" style="fill: {{$cosui['bg']}}" /> <code
                        class="overflow-auto" style="color: {{$cosui['bg']}}">{{ $user->email }}</code>
                </div>
                <button type="button" onclick='emailIt("{{ $user->email }}")' style="background: {{$cosui['to_draw']['bg']}}; color: {{$cosui['to_draw']['text']}}" class="btn border-none btn-sm sm:m-0 m-2">send email</button>
            </div>
            @isset($user_js['moreinfo']['emails'])
                <div style="background: {{$cosui['profile']['txt']}}" class=" my-1 overflow-auto rounded-lg p-2 max-h-[4.4em] sm:max-h-[7em] space-y-[0.31em]"
                    style="box-shadow: inset 0px -8px 9px {{$cosui['bg']}}87, inset 0 8px 9px {{$cosui['bg']}}87;">
                    @forelse ($user_js['moreinfo']['emails'] as $email)
                        <div style="background: {{$cosui['profile']['img']['bg']}}50" class="p-2 rounded-lg text-lg font-bold flex justify-between items-center">
                            <div class="flex w-full">
                                <x-carbon-email class="w-5 h-6 mr-2" style="fill: {{$cosui['bg']}}" /> <code
                                    class="overflow-auto whitespace-nowrap" style="color: {{$cosui['bg']}}">{{ $email }}</code>
                            </div>
                            <button type="button" onclick='emailIt("{{ $email }}")' style="background: {{$cosui['to_draw']['bg']}}; color: {{$cosui['to_draw']['text']}}" class="btn border-none btn-sm sm:block hidden"> messege
                            </button>
                        </div>
                    @empty
                    @endforelse
                </div>
            @endisset
        </div>

        <div class="hidden tohidd h-full" id="llocation">
            <div class="my-1 overflow-auto rounded-lg p-2 max-h-[10.8em] space-y-[0.31em]">
                @isset($user->country)
                    <div style="background: {{$cosui['profile']['txt']}}" class=" p-2 rounded-lg text-xl font-bold flex items-center">
                        <x-carbon-star class="w-5 h-6 mr-2 " style="fill: {{$cosui['bg']}}" /> <code
                            class="overflow-auto" style="color: {{$cosui['bg']}}">{{ $user->country }}</code>
                    </div>
                @endisset
                @isset($user_js['moreinfo']['locations'])
                    @forelse ($user_js['moreinfo']['locations'] as $location)
                        <div style="background: {{$cosui['profile']['txt']}}" class="p-2 rounded-lg text-lg font-bold flex items-center">
                            <x-carbon-location class="w-5 h-6 mr-2" style="fill: {{$cosui['bg']}}" /> <code
                                class="overflow-auto whitespace-nowrap" style="color: {{$cosui['bg']}}">{{ $location }}</code>
                        </div>
                    @empty
                    @endforelse
                @endisset
            </div>
        </div>

        <div class="hidden tohidd" id="pphone">
            @isset($user_js['moreinfo']['phones'])
                <div class=" my-1 overflow-auto rounded-lg p-2  max-h-[10.8em] space-y-[0.31em]">
                    @forelse ($user_js['moreinfo']['phones'] as $phone)
                        <div  style="background: {{$cosui['profile']['txt']}}"  class=" p-2 rounded-lg text-lg font-bold flex justify-between items-center">
                            <div class="flex sm:w-full w-[66%]">
                                <x-carbon-phone class="w-5 h-6 mr-2" style="fill: {{$cosui['bg']}}" /> <code
                                    class="overflow-auto whitespace-nowrap" style="color: {{$cosui['bg']}}">{{ $phone }}</code>
                            </div>
                            <button type="button" onclick='copyPhoneNumber("{{ $phone }}")'
                                style="background: {{$cosui['bg']}}; color: {{$cosui['profile']['img']['bg']}}"
                                class="btn border-none btn-copy btn-sm p-[0.1] min-h-[1.8em] text-sm font-bold sm:text-lg sm:p-auto sm:min-h-auto">
                                copy </button>
                        </div>
                    @empty
                    @endforelse
                </div>
            @endisset

        </div>

    </div>

</div>

@push('js1')
<script>
    function swi(ex) {
        const mm = document.getElementById(ex);
        const ele = document.getElementById('detailsdiv');
        const eles = document.getElementsByClassName('tohidd');
        for (let i = 0; i < eles.length; i++) {
            eles[i].style.display = 'none';
        }
        ele.style.display = 'block'
        mm.style.display = 'block'
    }
    function copyPhoneNumber(e) {
        navigator.clipboard.writeText(e);
        // toasttt('success','the text has been saved into your clipboard!')
    }
    function emailIt(e) {
        window.location.href = `mailto:${e}`
    }
</script>
@endpush
