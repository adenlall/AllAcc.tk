<div class="flex flex-col space-y-2 lg:container m-auto my-2 w-full">
    @php
        function checck($e, $x)
        {
            // global $user_js;
            for ($i = 0; $i < count($x); $i++) {
                if ($e === $x[$i]['grp']) {
                    return true;
                    break;
                }
            }
            return false;
        }
    @endphp
    @if (count($user_js['urls']) !== 0)
        <div class="flex items-center space-x-2">
            <x-carbon-link class="w-8 h-8 min-w-8" style="fill:{{$cosui['profile']['txt']}}"/>
            <h2 class="text-xl font-extrabold " style="color:{{$cosui['profile']['txt']}}">{{ $user->name }} links</h2>
        </div>
        <div
        style="background: {{$cosui['links']['bg']}}a1"
            class="flex flex-col items-center rounded-lg p-4 space-y-4 justify-center w-full content-center">
            @foreach ($user_js['config']['urlsGrps'] as $grp)
                @if (checck($grp[0], $user_js['urls']))
                    <div style="background:linear-gradient(180deg, {{$cosui['links']['grp']['bg']}}, {{$cosui['links']['grp']['bg']}}57)"
                        class="rounded-lg p-4 w-full">
                        <h4 class="text-xl text-white sm:text-start pl-2 text-center w-full font-bold flex space-x-2 items-center my-2">
                            <x-carbon-cics-system-group style="fill:{{$cosui['links']['grp']['txt']}}" class="w-6 h-6 min-w-6 " />
                            <span style="color:{{$cosui['links']['grp']['txt']}}" class="overflow-hidden text-ellipsis whitespace-nowrap">{{ $grp[0] }}</span>
                        </h4>
                        <div class="w-full space-y-2">
                            @foreach ($user_js['urls'] as $url)
                                @if ($url['grp'] === $grp[0])
                                    <a class="w-full block p-0 shadow-sm fade-in  shadow-gray"
                                        href="{{ $url['link'] }}">
                                        <button type="button"
                                            class="w-full m-auto {{ $user_js['theme']['button'] ? $user_js['theme']['button'] : 'purplebtn' }} ">
                                            <span style="fontFamily: 'sans-serif"
                                                class="text font-bold overflow-hidden text-ellipsis whitespace-nowrap"><span
                                                    class="m-auto text font-bold overflow-hidden  block text-ellipsis whitespace-nowrap">
                                                    {{ $url['name'] }}</span></span>
                                        </button>
                                    </a>
                                @endif
                            @endforeach
                        </div>
                    </div>
                @endif
            @endforeach
            @php($und = 0)
            @php($fold = false)
            @foreach ($user_js['urls'] as $url)
                @if ($url['grp'] === '' || $url['grp'] === null || $url['grp'] === 'none')
                    @php($und++)
                    @if ($und === 4 && count($user_js['urls']) > 8)
                        @php($fold = true)
                    @endif
                    <a class="{{ $und > 4 && count($user_js['urls']) > 8 ? 'hidden tofold ' : ' block ' }} fade-in  p-0 shadow-sm w-full shadow-gray"
                        href="{{ $url['link'] }}">
                        <button type="button"
                            class="w-full m-auto {{ $user_js['theme']['button'] ? $user_js['theme']['button'] : 'purplebtn' }} ">
                            <span style="fontFamily: 'sans-serif"
                                class="text font-bold overflow-hidden text-ellipsis whitespace-nowrap"><span
                                    class="m-auto text font-bold overflow-hidden block text-ellipsis whitespace-nowrap">
                                    {{ $url['name'] }}</span></span>
                        </button>
                    </a>
                @endif
            @endforeach
            @if ($fold === true)
                <button type="button" onclick="fold()" class="btn flex">
                    <x-carbon-text-link class="w-8 f-8 mr-2 fill-white " />
                    <spam id="butfold">show more</spam>
                </button>
            @endif
        </div>
    @else
    <div
    class="flex flex-col items-center  bg-[#23282d70] rounded-lg p-4 my-8 space-y-4 justify-center w-full content-center">
        <x-carbon-no-ticket class="w-[6em] h-[6em] fill-black" />
        <h2 class="text-2xl font-bold text-black text-center">
            No links here Yet<br>(~_~)
        </h2>
    </div>
    @endif
</div>
<script>
    function fold() {
        const oss = document.getElementById('butfold');
        const holos = document.getElementsByClassName('tofold');
        let indice = holos[0].style.display;
        if (indice === 'block') {
            for (let i = 0; i < holos.length; i++) {
                holos[i].style.display = 'none'
            }
            oss.innerHTML = 'show more';
        } else {
            for (let i = 0; i < holos.length; i++) {
                holos[i].style.display = 'block';
            }
            oss.innerHTML = 'show less';
        }
    }
</script>
