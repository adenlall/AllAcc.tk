@php($hh = 0)
<div style="background: {{$cosui['draw']['bg']}}bf" class="space-y-2 w-[min(78%,26em)] overflow-auto p-3">
    @foreach ($services_config as $ser)
        @if ($services[$ser->name] !== null)
            @php($hh = $hh + 1)
            <form method="post" action="statistics/set" >
                @csrf
                <input type="hidden" name="service" value="{{ $ser->name }}" />
                <input type="hidden" name="for_user" value="{{ $user->username }}" />
                <input type="hidden" name="url" value="{{ $ser->website }}/{{ $services[$ser->name] }}" />
                <button type="submit" class="w-full my-1" >
                    <div style="background: {{$cosui['draw']['items']['bg']}}" class='ittem rounded-lg flex flex-row items-center space-x-3 p-2 w-full'>
                        <div class='rounded-xl'>
                            <img class='rounded-xl object-contain h-full w-[5em] min-w-auto p-2'
                                src="/imgs/icons/{{ $user_js['theme']['icons'] }}/{{ $ser->name }}.svg"
                                alt={{ $ser->name }}
                                style="background: {{$cosui['draw']['items']['img']['background']}}"
                                />
                        </div>
                        <div class='flex flex-col space-y-2 w-[70%]'>
                            <h4 style="color: {{$cosui['draw']['items']['main_txt']}}" class='sm:text-xl xs:text-lg text-sm font-bold pl-2 text-info text-start'>
                                {{ $ser->name }} :</h4>
                            <h3
                                style="background: {{$cosui['draw']['items']['username']['bg']}}; color: {{$cosui['draw']['items']['username']['txt']}}"
                                class='sm:text-2xl xs:text-xl text-lg font-bold bg-info p-1 px-2 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis'>
                                {{ '@' . $services[$ser->name] }}</h3>
                        </div>
                    </div>
                </button>
            </form>
        @endif
    @endforeach
    @if ($hh === 0)
        <div class="flex flex-col space-y-3 items-center content-center justify-center h-full w-full">
            <x-carbon-carbon-accounting class="w-[6em] h-[6em]" style="fill: {{$cosui['draw']['items']['bg']}}bf" />
            <h2 class="text-2xl font-bold text-center" style="color: {{$cosui['draw']['items']['bg']}}bf">No oxygene here!</h2>
            <div class="text-xl font-bold text-center">
                nothing here yet! add now your accounts and your links from your <a href="/dashboard">dashboard</a>
            </div>
        </div>
    @endif
</div>
