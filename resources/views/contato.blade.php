@extends('layouts.app')

@section('content')

<section id="content" class="main">
    <h2>Contato</h2>
    {!! Form::open(['url' => 'contact/submit']) !!}
    <div class="form-group">
        <div class="row uniform">
            <div class="6u 12u$">
              {{Form::text('name', '', ['class' => 'form-control', 'placeholder' => 'Nome'])}}
            </div>
            <div class="6u$ 12u$(xsmall)">
              {{Form::text('email', '', ['class' => 'form-control', 'placeholder' => 'E-mail'])}}
            </div>
            <div class="12u$">
                <div class="select-wrapper">
                {!!  Form::select('motivo',['placeholder' => '- Motivo para o contato -',
                        'Elogio' => 'Elogio',
                        'Reclamação' => 'Reclamação',
                        'Sugestão' => 'Sugestão',
                        'Outros' => 'Outros',
                      ],
                      ['class' => 'form-control']
                    ); !!}

                </div>
            </div>

            <div class="12u$">
                {{Form::textarea('message', '', ['class' => 'form-control', 'placeholder' => 'Escreva sua mensagem'])}}
            </div>
            <div class="12u$">
                <ul class="actions">
                    <li>{{Form::submit('Enviar', ['class' => 'special'])}}</li>
                </ul>
            </div>
        </div>
      </div>
    {!! Form::close() !!}
</section>

@endsection
