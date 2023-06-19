<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Sales extends Model
{
    use HasFactory;

    protected $table = "sales";

    protected $fillable = [
        'status',
        'buyNow',
        'tradeDate',
        'parcels',
        'discount',
        "paymentMethods_id",
        "coupons_id",
        "users_id",
        "addresses_id",
        "cashier_id",
        "attendant_id"
    ];

    protected $hidden = [
        "id"
    ];

    public function paymentMethods():HasMany
    {
        return $this->hasMany(PaymentMethods::class, "paymentMethods_id");
    }

    public function coupons():HasMany
    {
        return $this->hasMany(Coupons::class, "coupons_id");
    }

        public function users():BelongsTo
    {
        return $this->BelongsTo(User::class, "users_id", "id");
    }

    public function addresses():HasOne
    {
        return $this->hasOne(Addresses::class, "addresses_id");
    }
    public function cashier():BelongsTo
    {
        return $this->belongsTo(User::class, "cashier_id");
    }
    public function attendant():BelongsTo
    {
        return $this->belongsTo(User::class, "attendant_id");
    }

    public function books():BelongsToMany
    {
        return $this->belongsToMany(Books::class, 'sales_books', 'sales_id', 'books_id', "id", 'id')->withPivot("quantity", "amount");
    }
}
