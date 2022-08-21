@extends('extra.layout.master')
@section('title')
    Contact
@endsection
@section('content')
    <div class="space-y-6">
        <h1 class="text-5xl font-extrabold text-white">Contact Us</h1>
        <div class="flex flex-col w-full p-4 space-y-4 rounded-lg bg-white text-black dark:text-white dark:bg-gray-800">
            <div class="flex flex-row w-full space-x-4">
                <a href="https://github.com/adenlall/allacc" style="background: linear-gradient(19deg, #fff, #b1c2dd);"
                    class="bg-slate-300 text-black py-[4.5em] font-bold text-center rounded-lg text-sm xs:text-lg sm:text-2xl w-2/3">
                    GitHub</a>
                <a href="/dd/support" style="background: linear-gradient(19deg, #fff, #b1c2dd);"
                    class="bg-slate-300 text-black py-[4.5em] font-bold text-center rounded-lg text-sm xs:text-lg sm:text-2xl w-1/3">
                    Support</a>
            </div>
            <div class="flex sm:flex-row flex-col w-full sm:space-x-4 space-x-0 space-y-4 sm:space-y-0">
                <a href="mailto:lalladen@naver.com" style="background: linear-gradient(19deg, #fff, #b1c2dd);" class="bg-slate-300 text-black py-[4.5em] font-bold text-center rounded-lg text-2xl w-full sm:w-1/2">
                    E-mail</a>
                <div class="flex flex-row w-full sm:w-1/2 space-x-4">
                    <a href="https://instagram.com/all___acc" style="background: linear-gradient(19deg, rgb(243, 33, 96) , #ab15d1);" class="flex items-center justify-center bg-slate-300 text-black py-[4.5em] font-bold text-center rounded-lg text-sm xs:text-xl sm:text-2xl w-full sm:w-1/2">
                        Instagram</a>
                    <a href="https://facebook.com/lallana.oxx" style="background: linear-gradient(19deg, rgb(78, 125, 255), #6ca4ff);" class="flex items-center justify-center bg-slate-300 text-black py-[4.5em] font-bold text-center rounded-lg text-sm xs:text-xl sm:text-2xl w-full sm:w-1/2">
                        Facebook</a>
                </div>
            </div>
        </div>
    </div>
@endsection
