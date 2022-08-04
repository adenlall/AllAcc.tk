<div class="bg-[url(/imgs/config/Ind/Header/0.jpg)] bg-cover h-screen">
<div class="p-4 bg-[#00ffff8a] h-screen">

@include('content.header')

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
        dd(ele,mm,'fffs')
    }
</script>


@endpush
{{-- @dd($user) --}}
