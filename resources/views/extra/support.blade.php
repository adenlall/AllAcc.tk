@extends('extra.layout.master')
@section('title')
    Support
@endsection
@push('script')
    <script>
        function hundelChange() {
            let issue = document.getElementById('issue').value;
            let email = document.getElementById('email').value;
            let type = document.getElementById('type').value;
            let subb = document.getElementById('subb');
            if (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && issue.length > 8 && issue.length < 120) {
                subb.disabled = false;
            } else {
                subb.disabled = true;
            }
        }
    </script>
@endpush
@section('content')
    <div class="space-y-6">
        <h1 class="text-5xl font-extrabold text-white">Get Support</h1>
        <form method="post" action="/dd/support"
            class="space-y-2 flex flex-col w-full p-[2em] bg-white dark:bg-slate-800 rounded-lg ">
            @csrf
            <div class="form-control m-auto w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Write about your issue</span>
                </label>
                <textarea onchange="hundelChange()" id="issue" name="issue" class="textarea textarea-bordered"
                    placeholder="tell us about your issue"></textarea>
                <label class="label">
                    <span class="label-text-alt">Please try to be clear and directive while writing about your issue.</span>
                </label>
            </div>
            <div class="form-control m-auto w-full max-w-xs">
                <label class="label">
                    <span class="label-text">E-Mail</span>
                </label>
                <input onchange="hundelChange()" type="email" id="email" name="email" placeholder="user@example.com"
                    class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text-alt">We need your email to contact you after reviewing your issue.</span>
                </label>
            </div>
            <div class="form-control w-full m-auto max-w-xs">
                <label class="label">
                    <span class="label-text">Please help us by selection one of those?</span>
                </label>
                <select name="type" id="type" class="select select-bordered">
                    <option value="undefined" disabled selected>The type of your issue?</option>
                    <option value="security">Security issue</option>
                    <option value="product">Product issue</option>
                    <option value="feature">Requesting feature</option>
                    <option value="ask">Asking help</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button class="btn m-auto mt-8" id="subb" disabled>Submit</button>
        </form>
    </div>
@endsection
