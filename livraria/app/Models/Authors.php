<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Authors extends Model
{
    use HasFactory;

    protected $table = "authors";
    protected $fillable = [
        "id",
        'name',
    ];

    public function books():BelongsToMany
    {
        return $this->belongsToMany(Books::class, "books_authors", "authors_id", "books_id");
    }

}
