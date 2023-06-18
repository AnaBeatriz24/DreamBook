<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Entries extends Model
{
    use HasFactory;

    protected $table = "entries";

    protected $fillable = [
        'dateBuy',
        'users_id',
        "suppliers_id",
        "id"
    ];

    public function suppliers():HasMany
    {
        return $this->hasMany(Suppliers::class, "suppliers_id");
    }

    public function users():HasMany
    {
        return $this->hasMany(User::class, "users_id");
    }

    public function books():BelongsToMany
    {
        return $this->belongsToMany(Books::class, 'entries_books', 'entries_id', 'books_id', "id", 'id')->withPivot("quantity", "amount");
    }

}
