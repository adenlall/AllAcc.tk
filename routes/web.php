<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminPagesController;
use App\Http\Controllers\AnilistController;
use App\Http\Controllers\AnilistPrepareController;
use App\Http\Controllers\AsSeemController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeleteItemController;
use App\Http\Controllers\SevicesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileUpdateController;
use App\Http\Controllers\SoungController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

Route::get('/', HomeController::class)->name('home');
Route::get('about', AboutController::class)->name('about');




Route::middleware('auth', 'toAdminDash')->group(function () {

    Route::get('profile', ProfileController::class, 'show')->name('profile');
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::post('soung', SoungController::class);
    Route::post('profile', ProfileUpdateController::class);
    Route::post('setting', SevicesController::class);
    Route::post('deleteItem', DeleteItemController::class);
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
    Route::post('password', PasswordController::class);
});

Route::middleware('guest')->group(function () {
    // Route::get('login/admin', [LoginController::class, 'admin']);
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
    Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
});

Route::middleware('auth', 'admin', 'adminRequ')->group(function () {

    Route::get('admin', [AdminController::class, 'index'])->name('adminauth');
    Route::get('admin/verify', [AdminController::class, 'verify'])->name('adminVerify');

});

Route::middleware('auth','admin', 'adminAccess')->group(function () {
    Route::get('admin/{admin}/app', [AdminPagesController::class, 'app']);
    Route::get('admin/{admin}/activities', [AdminPagesController::class, 'activities']);
    Route::get('admin/{admin}/statistic', [AdminPagesController::class, 'statistic']);
    Route::get("admin/{admin}/dashboard", [AdminController::class, 'dashboard']);
});

Route::get('{username}', AsSeemController::class)->name('AsSeem');;


Route::post('logout', function(){
    Session::flush();
    Auth::logout();
    return redirect('/');
});
