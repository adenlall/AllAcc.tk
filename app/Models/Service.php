<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Service extends Model
{
    use HasFactory;

    protected $table = "user_services";
    protected $primaryKey = 'username';
    protected $fillable = [
        'id',
        'username',
        'instagram',
        'facebook',
        'telegram',
        'twitter',
        'deviantArt',
        'devto',
        'youtube',
        'pinterest',
        'github',
        'whatsapp',
        'vk',
    ];

}
