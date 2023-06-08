<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Genders extends Model
{
    use HasFactory;

    protected $table = "genders";

    protected $fillable = [
        "id", 'name',
    ];

    public function books():BelongsToMany
    {
        return $this->belongsToMany(Books::class, 'books_genders', 'genders_id', 'books_id');
    }
}
