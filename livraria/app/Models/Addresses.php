<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Addresses extends Model
{
    use HasFactory;

    protected $table = "addresses";
    protected $fillable = [
        'name',
        'cep',
        'number',
        'complement',
        "users_id",
        "district",
        "city",
        "uf",
        "id"
    ];

    public function users():HasMany
    {
        return $this->hasMany(User::class, "users_id");
    }

    public function sales():BelongsTo
    {
        return $this->belongsTo(Sales::class, "addresses_id");
    }
}
