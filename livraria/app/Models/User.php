<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $table = "users";
    protected $fillable = [
        'name',
        'email',
        'password',
        'profiles_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profiles::class, "profiles_id");
    }

    public function addresses():BelongsTo
    {
        return $this->belongsTo(Addresses::class, "addresses_id");
    }

    public function entries():BelongsTo
    {
        return $this->belongsTo(Entries::class, "users_id");
    }

    public function sales():BelongsTo
    {
        return $this->belongsTo(Sales::class, "users_id");
    }
    public function cashier():BelongsTo
    {
        return $this->belongsTo(Sales::class, "cashier_id");
    }
    public function attendant():BelongsTo
    {
        return $this->belongsTo(Sales::class, "attendant_id");
    }
}
