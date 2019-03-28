<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use App\Register;

class MessagesController extends Controller
{
  //Submit messages about contact
  public function submit(Request $request){
    $this->validate($request, [
      'name' => 'required',
      'email' => 'required',
      'motivo' => 'required',
      'message' => 'required'

    ]);

    //Create new message
    $message = new Message;
    $message->name = $request->input('name');
    $message->email = $request->input('email');
    $message->motivo = $request->input('motivo');
    $message->message = $request->input('message');

    //Save Message
    $message->save();

    // Redirect
    return redirect('/')->with('success', 'Mensagem Enviada.');

  }

  public function getMessages(){
    $messages = Message::all();

    return view('messages')->with('messages', $messages);
  }

  //Register information about social families
  public function register(Request $request){
    $this->validate($request, [
      'name' => 'required',
      'email' => 'required',
      'motivo' => 'required'

    ]);

    //Create new register social family
    $register = new Register;
    $register->name = $request->input('name');
    $register->email = $request->input('email');
    $register->motivo = $request->input('motivo');
    $register->outros = $request->input('outros');
    $register->endereco = $request->input('endereco', 'numero');
    $register->telefone = $request->input('telefone', 'celular');
    $register->estado = $request->input('estado');
    $register->cidade = $request->input('cidade');
    $register->residencia = $request->input('residencia');
    $register->mensagem = $request->input('message');

    $register->save();

    return redirect('/')->with('success', 'Cadastro Enviado.');
  }
}
