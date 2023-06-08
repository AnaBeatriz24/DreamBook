<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookAuthor extends Model
{
    use HasFactory;

    public function books():HasMany
    {
        return $this->hasMany(User::class, "books_id");
    }

    public function authors():HasMany
    {
        return $this->hasMany(User::class, "authors_id");
    }
}
