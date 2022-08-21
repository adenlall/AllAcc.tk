@extends('extra.layout.master')
@section('title')
    Repair
@endsection
@push('script')
    <script>
        function subCheck() {
            const eles = document.getElementsByClassName('check');
            for (let i = 0; i < eles.length; i++) {
                if (!eles[i].checked) {
                    return true;
                }
            }
            return false;
        }

        function check() {
            if (subCheck()) {
                document.getElementById('check_all').checked = false;
            } else {
                document.getElementById('check_all').checked = true;
            }
        }

        function checkAll() {
            let order = document.getElementById('check_all').checked ? true : false;
            const eles = document.getElementsByClassName('check');
            for (let i = 0; i < eles.length; i++) {
                eles[i].checked = order;
            }
        }
    </script>
@endpush
@section('content')
    <div class="space-y-6">
        <h1 class="text-5xl font-extrabold text-white">Repair your account</h1>
        @auth
            <form method="post" action="/dd/repair"
                class="m-auto w-full flex flex-col items-center justify-center content-center space-y-4 p-[2em] rounded-lg bg-white dark:bg-slate-800">
                @csrf
                <div class="">
                    <h2 class="text-2xl font-bold">Pages able to Repair :</h2>
                    <div class=" max-h-[20em] w-auto md:container m-auto overflow-auto p-2 flex flex-col space-y-2 ">
                        <div class="form-control rounded-lg w-auto bg-[#272700] p-2">
                            <label class="label cursor-pointer">
                                <span class="label-text text-black">All</span>
                                <input onclick="checkAll()" type="checkbox" name="all" id="check_all" class="checkbox" />
                            </label>
                        </div>
                        <div class="form-control rounded-lg w-auto bg-[#f5f5dc] p-2">
                            <label class="label cursor-pointer">
                                <span class="label-text text-black">Dashboard</span>
                                <input onclick="check()" type="checkbox" name="dashboard" class="checkbox check" />
                            </label>
                        </div>
                        <div class="form-control rounded-lg w-auto bg-[#f5f5dc] p-2">
                            <label class="label cursor-pointer">
                                <span class="label-text text-black">Analitycs</span>
                                <input onclick="check()" type="checkbox" name="analitycs" class="checkbox check" />
                            </label>
                        </div>
                        <div class="form-control rounded-lg w-auto bg-[#f5f5dc] p-2">
                            <label class="label cursor-pointer">
                                <span class="label-text text-black">Advanced</span>
                                <input onclick="check()" type="checkbox" name="advanced" class="checkbox check" />
                            </label>
                        </div>
                        <div class="form-control rounded-lg w-auto bg-[#f5f5dc] p-2">
                            <label class="label cursor-pointer">
                                <span class="label-text text-black">Skins</span>
                                <input onclick="check()" type="checkbox" name="skins" class="checkbox check" />
                            </label>
                        </div>

                    </div>
                </div>
                <span class="text-lg">By repairing your account you will lost all your data related to the pages selected</span>
                <button type="submit" class="btn m-auto w-full sm:container mt-[1em]">Repair</button>
            </form>
            <div
                class="m-auto flex flex-col items-center justify-center content-center space-y-4 p-[2em] rounded-lg bg-white">
                <h2 class="text-2xl font-bold ">Your Data is your mine!</h2>
                <div class="flex space-x-2 ">
                    <a href="/dd/info" class="btn">General Data</a>
                    <a href="/dd/locate" class="btn">Locate Data</a>
                </div>
            </div>
        @else
            <div
                class="m-auto p-4 flex flex-col items-center justify-center content-center space-y-4 py-[2em] rounded-lg bg-white">
                <h2 class="text-2xl font-bold ">Login First before Reapir your Account!</h2>
                <button class="btn m-auto mt-[1em]">LOGIN</button>
            </div>
        @endauth
    </div>
@endsection
