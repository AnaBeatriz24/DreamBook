<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Coupons extends Model
{
    use HasFactory;

    protected $table = "coupons";

    protected $fillable = [
        'name',
        'discount'
    ];

    protected $hidden = [
        "id",
        'status'
    ];

    public function sales():BelongsTo
    {
        return $this->belongsTo(Sales::class, "coupons_id");
    }
}
