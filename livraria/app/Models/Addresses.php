<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Addresses extends Model
{
    use HasFactory;

    protected $table = "addresses";
    protected $fillable = [
        'name',
        'cep',
        'number',
        'complement'
    ];

    protected $hidden = [
        "id"
    ];

    public function users():HasMany
    {
        return $this->hasMany(User::class, "addresses_id");
    }
}
