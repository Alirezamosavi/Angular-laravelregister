<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class userlog extends Model
{
    protected $fillable = [
        'name', 'email', 'password',
    ];
}
