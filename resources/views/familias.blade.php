@extends('layouts.app')

@section('content')


    <section id="content" class="main">
      <h2>Famílias Socializadoras</h2>
      <p>Caso você tenha interesse em ser uma família socializadora ou receber um cão-guia, preencha as informações abaixo, ou envie um e-mail para: ctcaesguia.camboriu@ifc.edu.br</p>

        <h3>Cadastro para Famílias Socializadoras</h3>
        {!! Form::open(['url' => 'familias/submit']) !!}
            <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                    {{Form::text('name', '', ['class' => 'form-control', 'placeholder' => 'Nome'])}}
                </div>

                <div class="6u$ 12u$(xsmall)">
                    {{Form::text('email', '', ['class' => 'form-control', 'placeholder' => 'E-mail'])}}
                </div>

                <div class="12u$">
                      {!!  Form::select('motivo',['placeholder' => '- Motivo de interesse pelo projeto -',
                              'Ser família socializadora' => 'Ser família socializadora',
                              'Ser aluno do curso' => 'Ser aluno do curso',
                              'Outros' => 'Outros',
                            ],
                            ['class' => 'form-control']
                          ); !!}

                </div>

                <div class="12u 12u$(xsmall)">
                    {{Form::text('outros', '', ['class' => 'form-control', 'placeholder' => 'Se a opção for outros, descreva seus motivos'])}}
                </div>

                <div class="8u 12u$(xsmall)">
                    {{Form::text('endereco', '', ['class' => 'form-control', 'placeholder' => 'Endereço'])}}
                </div>

                <div class="4u$ 12u$(xsmall)">
                    {{Form::text('numero', '', ['class' => 'form-control', 'placeholder' => 'Número'])}}
                </div>

                <div class="6u 12u$(xsmall)">
                    {{Form::text('telefone', '', ['class' => 'form-control', 'placeholder' => 'Telefone'])}}
                </div>

                <div class="6u$ 12u$(xsmall)">
                    {{Form::text('celular', '', ['class' => 'form-control', 'placeholder' => 'Celular'])}}
                </div>


                <div class="12u$">
                  {!!  Form::select('estado',['placeholder' => '- Estado -',
                          'AC' => 'Acre',
                          'AL' => 'Alagoas',

                        ],
                        ['class' => 'form-control']
                      ); !!}
                </div>

                <div class="12u$">
                  {!!  Form::select('cidade',['placeholder' => '- Cidade -',
                          'AC' => 'Acre',
                          'AL' => 'Alagoas',

                        ],
                        ['class' => 'form-control']
                      ); !!}
                </div>

                <div class="6u$">
                  {!!  Form::select('residencia',['placeholder' => 'Sua residência é:',
                          'Casa' => 'Casa',
                          'Apartamento' => 'Apartamento',
                        ],
                        ['class' => 'form-control']
                      ); !!}
                </div>

                <div class="12u$">
                    {{Form::textarea('message', '', ['class' => 'form-control', 'placeholder' => 'Escreva sua mensagem se desejar'])}}
                </div>
                <div class="12u$">
                    <ul class="actions">
                        <li>{{Form::submit('Enviar', ['class' => 'special'])}}</li>
                    </ul>
                </div>
            </div>
      {!! Form::close() !!}
      </section>

  @endsection
