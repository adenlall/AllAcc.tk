<div class="p-2 w-full">
    <div class="navbar rounded-lg bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dd/support">Support</a></li>
                    <li><a href="/dd/repair">Repair</a></li>
                    <li><a href="/dd/contact">Contact</a></li>
                </ul>
            </div>
            <a href="/" class="btn btn-ghost normal-case text-xl"><img src="/AllAcc-logo-red-c.svg"
                    class="h-8 p-0 m-0" /></a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li><a href="/dd/support">Support</a></li>
                <li><a href="/dd/repair">Repair</a></li>
                <li><a href="/dd/contact">Contact</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            @auth
                <a href="/dashboard" class="btn sm:inline-flex hidden ">Dashboard</a>
            @else
                <a href="/login" class="btn sm:inline-flex hidden ">Login</a>
            @endauth
        </div>
    </div>
</div>
