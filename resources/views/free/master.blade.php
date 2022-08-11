<div style="font-family: {{ $user_js['theme']['font'] ? $user_js['theme']['font'] : 'Gracheva' }}; background: url({{ $cosui['img'] ? $cosui['img'] : '/imgs/config/Ind/Header/0.jpg' }}); background-size:cover; background-position:center"
    class="min-h-[91vh]">
    <div style="background: {{ $cosui['bg'] }}82" class="p-4 min-h-[91vh] space-y-4">

        <div style="background: {{ $cosui['to_draw']['bg'] }}bf"
            class="sm:container sm:m-auto flex rounded-lg w-auto items-center justify-between p-2 m-0">
            <h1 class="font-bold sm:text-lg text-sm" style="color:{{ $cosui['to_draw']['text'] }}">{{ $user->name }}
                social accounts </h1>
            <label for="my-drawer" style="color:{{ $cosui['to_draw']['bg'] }}"
                class="btn btn-sm space-x-2 z-[1] right-1 top-6  drawer-button flex items-center bg-[{{ $cosui['to_draw']['button']['bg'] }}]">
                <x-carbon-network-1 class="w-4 h-8 " style="fill: {{ $cosui['to_draw']['bg'] }}" />
                <p>accounts</p>
            </label>
        </div>

        @include('content.header')

        @if (count($user_js['urls']) > 0)
            @include('content.links')
        @endif


    </div>
</div>
