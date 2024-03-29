<?php

use App\Models\User;
use App\Helpers\DBhelper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Pages\Guest\LangController;
use App\Http\Controllers\Pages\Guest\HomeController;
use App\Http\Controllers\Pages\Guest\AboutController;
use App\Http\Controllers\Pages\Guest\AsSeemController;
use App\Http\Controllers\Pages\Guest\PrivacyController;
use App\Http\Controllers\Pages\Guest\SupportController;

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminPagesController;

use App\Http\Controllers\Pages\Auth\Advanced\AdvancedController;
use App\Http\Controllers\Pages\Auth\Advanced\SetAdvancedController;
use App\Http\Controllers\Pages\Auth\Advanced\UIController;

use App\Http\Controllers\Pages\Auth\Dashboard\DeleteItemController;
use App\Http\Controllers\Pages\Auth\Dashboard\DashboardController;
use App\Http\Controllers\Pages\Auth\Dashboard\SevicesController;
use App\Http\Controllers\Pages\Auth\Dashboard\UrlsControllerr;
use App\Http\Controllers\Pages\Auth\Dashboard\SoungController;

use App\Http\Controllers\Pages\Auth\Profile\PasswordController;
use App\Http\Controllers\Pages\Auth\Profile\ProfileController;
use App\Http\Controllers\Pages\Auth\Profile\ProfileUpdateController;

use App\Http\Controllers\Pages\Auth\UI\SetSkinsController;
use App\Http\Controllers\Pages\Auth\UI\SettingController;

use App\Http\Controllers\Pages\Auth\Statistic\SetStatisticsController;
use App\Http\Controllers\Pages\Auth\Statistic\StatisticsController;

use App\Http\Controllers\Keys\RepairController;



Route::middleware('translated')->group(function () {
    Route::get('/', HomeController::class)->name('home');
});

Route::post('set/lang', LangController::class);

Route::get('about', AboutController::class)->name('about');

Route::get('privacy', PrivacyController::class)->name('privacy');


Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store'])->name('login');

Route::get('register', [RegisterController::class, 'create'])->name('register');
Route::post('register', [RegisterController::class, 'store']);

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);

Route::middleware('auth', 'is_admin')->group(function () {

    Route::get('profile', ProfileController::class, 'show')->name('profile');
    Route::get('setting', SettingController::class)->name('setting');
    Route::get('statistics', StatisticsController::class)->name('statistics');
    Route::get('advanced', AdvancedController::class)->name('advanced');
    Route::get('advanced/ui', UIController::class)->name('advancedui');
    Route::get('dashboard', DashboardController::class)->name('dashboard');


    Route::post('dd/repair', RepairController::class);

    Route::get('dd/info', function () {
        dd(json_decode(Auth::user()->json_config, true));
    });
    Route::get('dd/locate', function () {
        dd(json_decode(Auth::user()->json_locate, true));
    });


    Route::post('urls/set', UrlsControllerr::class);
    Route::post('advanced/set', SetAdvancedController::class);
    Route::post('setting/set', SetSkinsController::class);
    Route::post('soung', SoungController::class);
    Route::post('profile', ProfileUpdateController::class);
    Route::post('setting', SevicesController::class);
    Route::post('deleteItem', DeleteItemController::class);
    Route::post('password', PasswordController::class);
});


Route::middleware('auth', 'admin', 'admin_max_tries')->group(function () {

    Route::get('admin', [AdminController::class, 'index'])->name('adminauth');
    Route::get('admin/verify', [AdminController::class, 'verify'])->name('adminVerify');
});

Route::middleware('auth', 'admin', 'adminAccess')->group(function () {
    Route::get('admin/{admin}/app', [AdminPagesController::class, 'app']);
    Route::get('admin/{admin}/activities', [AdminPagesController::class, 'activities']);
    Route::get('admin/{admin}/statistic', [AdminPagesController::class, 'statistic']);
    Route::get("admin/{admin}/dashboard", [AdminController::class, 'dashboard']);
});

Route::post('statistics/set', SetStatisticsController::class)->name('stts');

Route::get('dd/repair', function () {
    return view('extra.repair');
});
Route::get('dd/support', function () {
    return view('extra.support');
});
Route::get('dd/contact', function () {
    return view('extra.contact');
});

Route::post('dd/support', SupportController::class);

Route::post('logout', function () {
    Auth::logout();
    return back();
});


Route::get('{username}', AsSeemController::class)->name('AsSeem');
