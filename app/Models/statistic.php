<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class statistic extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'page',
        'visits',
        'guest_v',
        'auth_v'
    ];

    protected $table = "statistic";
    protected $primaryKey = 'id';
}
