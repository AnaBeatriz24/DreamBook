<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Coupons extends Model
{
    use HasFactory;

    protected $table = "coupons";

    protected $fillable = [
        'name',
        'discount',
        "id",
        'status'
    ];

    public function sales():HasMany
    {
        return $this->hasMany(Sales::class, "coupons_id");
    }
}
