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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/','Homecontroller@index');
Route::get('/artist','ArtistController@index');

/////archivos 

Route::get('archivo','ArchivoController@index');
Route::get('archivos/get','ArchivoController@create');
// Route::POST('archivos/post','ArchivoController@postfile');

// Route::GET('archivos/get/{id}','ArchivoController@editget');

// Route::POST('archivos/post/{id}','uses'=>'ArchivoController@posteditfile');

// Route::delete('archivos/del/{id}','ArchivoController@deletes');
// Route::get('archivos/view/{id}','ArchivoController@viewfile');

// Route::resource('artist','ArtistController');