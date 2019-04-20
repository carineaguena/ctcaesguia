<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('home', function () {
    return view('home');
});

Route::get('/apresentacao', function () {
    return view('apresentacao');
});

Route::get('/curso', function () {
    return view('curso');
});

Route::get('/familias', function () {
    return view('familias');
});

Route::get('/contato', function () {
    return view('contato');
});

Route::post('/contact/submit', 'MessagesController@submit');

Route::post('/familias/submit', 'MessagesController@register');

Route::get('/familias','MessagesController@getState');

Route::get('/get-cidades', 'MessagesController@getCidades');

Route::get('/api/get-city-list','MessagesController@getCityList');

//Route::get('/familias{state_id}', 'MessagesController@getCidades');
