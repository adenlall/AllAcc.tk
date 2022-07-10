<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table = "admins";
    protected $primaryKey = 'name';

    protected $fillable = [
        'id',
        'email',
        'username',
        'name',
        'visit',
        'admin_type',
    ];




    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'token',
        'secret',
    ];

    public function setPasswordAttribute($password) {
        $this->attributes['token'] = bcrypt($password);
    }

}
