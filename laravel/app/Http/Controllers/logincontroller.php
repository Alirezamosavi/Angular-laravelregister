<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use\App\userlog;

class logincontroller extends Controller
{
    public function store(Request $request){  //  save the register of user
        $data = $request->input();
        $student = new userlog;
        $student->name = $data['name'];
        $student->email = $data['email'];
        $student->password = Hash::make($data['password']); 
        $student->save();
        return $student;
}
}
