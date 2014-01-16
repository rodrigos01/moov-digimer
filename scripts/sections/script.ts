$('./head') {
	remove(".//script[@language='Javascript']")

	insert_javascript("

function mostraOcultaCampoAgencia()
{
    var bancoEmissor = document.getElementById('banco_emissor').value;
    if (bancoEmissor == 0)
    {
        document.getElementById('agencia').style.display='none';
        document.getElementById('campo_agencia').style.display='none';
    }
    else
    {
        document.getElementById('agencia').style.display='';
        document.getElementById('campo_agencia').style.display='';
    }
}

var url = '/handler.php?module=site&action=view&ajax=true';

function redimensiona_conteudo(id)
{
    if (screen.width<=1024)
    {
        document.getElementById(id).style.width = '994px';
        document.getElementById('conteudo_left1').style.width = '0px';
        document.getElementById('conteudo_left2').style.width = '0px';
        document.getElementById('conteudo_left3').style.width = '0px';
    }

    if (screen.width<=800)
    {
        if( document.getElementById('table_right1') )
            document.getElementById('table_right1').innerHTML = '';
        if( document.getElementById('table_right2') )
            document.getElementById('table_right2').innerHTML = '';
        if( document.getElementById('table_right3') )
            document.getElementById('table_right3').innerHTML = '';
        document.getElementById(id).style.width = '768px';
        document.getElementById('conteudo_right1').style.width = '0px';
        document.getElementById('conteudo_right2').style.width = '0px';
        document.getElementById('conteudo_right3').style.width = '0px';
        document.getElementById('conteudo_right4').style.padding = '0px';
    }
}

function redimensiona_rodape(id)
{
    var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if (screen.width<=1024)
    {
        if(chrome)
            document.getElementById(id).style.width = '1001px';
        else
            document.getElementById(id).style.width = '999px';
        var row = document.getElementById('rodape_left1').style.width = '0px';
        var row = document.getElementById('rodape_left2').style.width = '0px';
    }

    if (screen.width<=800)
    {
        if(chrome)
            document.getElementById(id).style.width = '740px';
        else
            document.getElementById(id).style.width = '738px';
        var row = document.getElementById('rodape_right1').style.width = '0px';
        var row = document.getElementById('rodape_right2').style.width = '0px';
    }
}

function menuAtalho(newLoc)
{
   nextPage = newLoc.options[newLoc.selectedIndex].value

   if (nextPage != '')
   {
      document.location.href = nextPage
   }
}

var aberto = '0';
function verificarMarcas(afinidade, e)
{
    if ( aberto == afinidade )
    {
        esconderMarcas(aberto);
    }
    else
    {
        posLoading(e);
        mostrarMarcas(afinidade)
    }
}

function mostrarMarcas(afinidade)
{
    if ( aberto != '0' )
    {
        esconderMarcas(aberto);
    }
    subMenuMarcas(afinidade);
    document.getElementById('afinidade'+afinidade).style.display = 'block';
    aberto = afinidade;
}

function esconderMarcas(afinidade)
{
    document.getElementById('afinidade'+afinidade).style.display = 'none';
    aberto = '0';
}

function trocaDestaque(destaque)
{
    for ( i = 1; i <= totalDestaque; i++ )
    {
        if ( i == destaque )
        {
            document.getElementById('destaque_principal'+destaque).style.display = 'block';
            document.getElementById('tipoProduto'+destaque).style.display = 'block';
            document.getElementById('destaque_site'+destaque).style.color = 'orange';
        }
        else
        {
            document.getElementById('destaque_principal'+i).style.display = 'none';
            document.getElementById('tipoProduto'+i).style.display = 'none';
            document.getElementById('destaque_site'+i).style.color = '#004467';
        }

    }
    var prev = destaque == 1 ? totalDestaque : parseInt(destaque) - 1;
    var next = destaque == totalDestaque ? 1 : parseInt(destaque) + 1;
    document.getElementById('destaque_site_nav1').href = 'javascript:trocaDestaque('+prev+')';
    document.getElementById('destaque_site_nav2').href = 'javascript:trocaDestaque('+next+')';

    document.getElementById('destaque_comprar').href = 'javascript:document.destaque_comprar'+destaque+'.submit()';
}

function validaCadastro(form)
{
    if (form.nome.value == '')
    {
        alert('Digite seu nome.');
        form.nome.focus();
        form.nome.style.background = 'red';
        return false;
    }
    else
    {
        form.nome.style.background = '#FFFFFF';
    }

    if (form.email.value.indexOf('@', 0) == -1 ||
        form.email.value.indexOf('.', 0) == -1)
    {
        alert('Confira seu e-mail.');
        form.email.focus();
        form.email.style.background = 'red';
        return false;
    }
    else
    {
        form.email.style.background = '#FFFFFF';
    }

    if (form.datanasc1.value =='' || form.datanasc1.value > 31 || form.datanasc1.value < 0)
    {
        alert('Confira sua data de nascimento.');
        form.datanasc1.focus();
        form.datanasc1.style.background = 'red';
        return false;
    }
    else
    {
        form.datanasc1.style.background = '#FFFFFF';
    }

        if (form.datanasc2.value == '' || form.datanasc2.value > 12 || form.datanasc2.value < 0)
    {
        alert('Confira sua data de nascimento.');
        form.datanasc2.focus();
        form.datanasc2.style.background = 'red';
        return false;
    }
    else
    {
        form.datanasc2.style.background = '#FFFFFF';
    }

    if (form.datanasc3.value == '' || form.datanasc3.value < 1900)
    {
        alert('Confira sua data de nascimento.');
        form.datanasc3.focus();
        form.datanasc3.style.background = 'red';
        return false;
    }
    else
    {
        form.datanasc3.style.background = '#FFFFFF';
    }

    if (form.telefone.value =='')
    {
        alert('Confira seu telefone.');
        form.telefone.focus();
        form.telefone.style.background = 'red';
        return false;
    }
    else
    {
        form.telefone.style.background = '#FFFFFF';
    }

    if (form.cpf.value =='')
    {
        alert('Confira seu cpf/cnpj.');
        form.cpf.focus();
        form.cpf.style.background = 'red';
        return false;
    }
    else
    {
        form.cpf.style.background = '#FFFFFF';
    }

    if (form.cpf.value !='')
    {
        var cpf = form.cpf.value;
        if (cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' || cpf == '44444444444' || cpf == '55555555555'
            || cpf == '66666666666' || cpf == '77777777777' || cpf == '88888888888' || cpf == '99999999999' || cpf == '00000000000000' || cpf.length < 11 || cpf.length > 14)
        {
            alert('Confira seu cpf/cnpj.');
            form.cpf.focus();
            form.cpf.style.background = 'red';
            return false;
        }
    }

    if (form.bairro.value =='')
    {
        alert('Confira seu bairro.');
        form.bairro.focus();
        form.bairro.style.background = 'red';
        return false;
    }
    else
    {
        form.bairro.style.background = '#FFFFFF';
    }

    if (form.rua.value =='')
    {
        alert('Confira seu endereÃ§o.');
        form.rua.focus();
        form.rua.style.background = 'red';
        return false;
    }
    else
    {
        form.rua.style.background = '#FFFFFF';
    }
    
    if (form.numero.value =='')
    {
        alert('Confira seu nÃºmero.');
        form.numero.focus();
        form.numero.style.background = 'red';
        return false;
    }
    else
    {
        form.numero.style.background = '#FFFFFF';
    }

    if (form.cep.value =='')
    {
        alert('Confira seu cep.');
        form.cep.focus();
        form.cep.style.background = 'red';
        return false;
    }
    else
    {
        form.cep.style.background = '#FFFFFF';
    }

    if (form.apelido.value =='')
    {
        alert('Confira seu apelido.');
        form.apelido.focus();
        form.apelido.style.background = 'red';
        return false;
    }
    else
    {
        form.apelido.style.background = '#FFFFFF';
    }

    if (form.senha.value =='')
    {
        alert('Confira sua senha.');
        form.senha.focus();
        form.senha.style.background = 'red';
        return false;
    }
    else
    {
        form.cep.style.background = '#FFFFFF';
    }

    return true;
}

function limparCadastro(form)
{
    form.nome.value = '';
    form.nome.style.background = '#FFFFFF';

    form.email.value = '';
    form.email.style.background = '#FFFFFF';

    form.datanasc1.value = '';
    form.datanasc1.style.background = '#FFFFFF';

    form.datanasc2.value = '';
    form.datanasc2.style.background = '#FFFFFF';

    form.datanasc3.value = '';
    form.datanasc3.style.background = '#FFFFFF';

    form.telefone1.value = '';
    form.telefone1.style.background = '#FFFFFF';

    form.telefone2.value = '';
    form.telefone2.style.background = '#FFFFFF';

    form.fax1.value = '';
    form.fax1.style.background = '#FFFFFF';

    form.fax2.value = '';
    form.fax2.style.background = '#FFFFFF';

    form.cpf.value = '';
    form.cpf.style.background = '#FFFFFF';

    form.rg.value = '';
    form.rg.style.background = '#FFFFFF';

    form.bairro.value = '';
    form.bairro.style.background = '#FFFFFF';

    form.rua.value = '';
    form.rua.style.background = '#FFFFFF';

    form.cep.value = '';
    form.cep.style.background = '#FFFFFF';
    
    form.profissao.value = '';
    form.profissao.style.background = '#FFFFFF';
    
    form.apelido.value = '';
    form.apelido.style.background = '#FFFFFF';

    form.senha.value = '';
    form.cep.style.background = '#FFFFFF';
}

function formatar_maskara(src, mask)
{
    var i = src.value.length;
    var saida = mask.substring(0,1);
    var texto = mask.substring(i);

    if (texto.substring(0,1) != saida)
    {
        src.value += texto.substring(0,1);
    }
}

function editar(url)
{
    win = window.open(url,'','width=700,height=600,top=100,left=100,resizable=yes,scrollbars=yes,status=yes');
}

function ampliar(url)
{
    win = window.open(url,'ampliada','top=100,left=100,menubar=0,status=0,toolbar=0');
}

function radioChange(obj)
{
    if( obj.value == 'sedex' )
    {
        calculaValorSedex(document.pedido.sedex_local.value);
    }
    else
    {
        calculaValorEntrega(document.pedido.telentrega_local.value);
    }
}

function calculaValorSedex(local)
{
    document.pedido.entrega[0].checked = true;
    local = document.pedido.sedex_local.value;
    cpaint_call(url,'POST','freteSedex',local,setValor);
}

function calculaValorEntrega(local)
{
    document.pedido.entrega[1].checked = true;
    document.pedido.entrega.value = 'telentrega';
}

function trocaUF(uf)
{
    uf = document.pedido.uf.value;
    forma = document.pedido.forma_envio.value;
    cpaint_call(url,'POST','trocaUF',uf,setCidade);
}

function atualizaValores()
{
    if( document.pedido.trocar_endereco.checked )
    {
        cod_cidade = document.pedido.cod_cidade.value;
    }
    else
    {
        cod_cidade = document.pedido.endereco.options[document.pedido.endereco.selectedIndex].attributes['cod_cidade'].value;
    }
    
    var inputs = document.pedido.forma_envio;

    for ( i = 0; i < inputs.length; i++ )
    {
        if ( inputs[i].checked )
        {
            forma_envio = inputs[i].value;
        }
    }
    if ( inputs.length != 2 )
    {
    	forma_envio = inputs.value;
    }
    //forma_envio = document.pedido.forma_envio.value;
    cpaint_call(url,'POST','freteSedex',cod_cidade,forma_envio,setValores);
}

function atualizaFormaEnvio()
{
    forma_pag = document.pedido.forma_pagamento.value;
    if( document.pedido.trocar_endereco.checked )
    {
        cod_cidade = document.pedido.cod_cidade.value;
    }
    else
    {
        cod_cidade = document.pedido.endereco.options[document.pedido.endereco.selectedIndex].attributes['cod_cidade'].value;
    }
    cpaint_call(url,'POST','tipoEntrega',cod_cidade,forma_pag,setTipoEntrega);
}

function mostraCartao(cod_forma)
{
    // so faz ajax se nao ta fazendo ajax do cartao, dava problema no IE 6
    if ( carregadocartao == true )
    {
        carregadocartao = false;
        document.getElementById('loading').style.display = 'block';
        if ( document.getElementById('aEfetuarCompra') )
        {
            document.getElementById('aEfetuarCompra').onchange = document.getElementById('aEfetuarCompra').onclick;
            document.getElementById('aEfetuarCompra').onclick  = function() { return false; };
        }
        cpaint_call(url,'POST','mostraCartao',cod_forma,setCartao);
    }
}

function setCartao(result)
{
    if( result )
    {
        result = result.split(';');
        sel    = document.getElementById('operador');
        sel.options.length = 0;
        for( i = 0; i < result.length; i++)
        {
            op = document.createElement('option');
            op.text  = op.value = result[i];
            sel.options.add(op);
        }
        document.getElementById('cartao').style.display = 'block';
    }
    else
    {
        document.getElementById('cartao').style.display = 'none';
    }
    document.getElementById('aEfetuarCompra').onclick = document.getElementById('aEfetuarCompra').onchange;
    document.getElementById('loading').style.display = 'none';
    carregadocartao = true;
}

function trocaCidadeCadastrada()
{
    document.getElementById('novo_endereco').style.display='none';
    document.pedido.trocar_endereco.checked=false;
    atualizaFormaEnvio();
}

function trocaCidade()
{
    atualizaFormaEnvio();
}

function trocaCadastroUF(uf)
{
    uf = document.cadastro.uf.value;
    cpaint_call(url,'POST','trocaCadastroUF',uf,setCadastroCidade);
}


function setCidade(result)
{
    document.getElementById('troca_cidade').innerHTML=result;
    cod_cidade = document.pedido.cod_cidade.value;
    document.pedido.cod_cidade.onchange();
//    cpaint_call(url,'POST','valorTotal',cod_cidade,forma,setValor);
//    cpaint_call(url,'POST','tipoEntrega',cod_cidade,setTipoEntrega);
//    cpaint_call(url,'POST','freteSedex',cod_cidade,setValorSedex);
}

function setTipoEntrega(result)
{
    document.getElementById('select_forma_envio').innerHTML=result;
    atualizaValores();
}

function setValores(result)
{
    valores = result.split('|');
    document.getElementById('frete_carrinho').innerHTML= valores[0];
    document.getElementById('valor_total').innerHTML   = valores[1];
}

function setCadastroCidade(result)
{
    document.getElementById('cidade_cadastro').innerHTML=result;
}
var carregadocartao = true;
function validaCompra(form)
{
    //alert(carregadocartao);
    // carregado Ã© setado no mostraCartao e setCartao
    if ( !carregadocartao )
    {
        alert('Aguarde o carregamento dos dados do cartÃ£o para confirmar a compra!');
        return false;
    }
    if (form.forma_envio =='')
    {
        alert('Confira a forma de envio. Se nÃ£o existirem opÃ§Ãµes, verifique a forma de pagamento.');
        form.forma_envio.focus();
        //form.forma_envio.style.background = 'red';
        return false;
    }
    else
    {
        //form.forma_envio.style.background = '#FFFFFF';
    }
    if(document.pedido.trocar_endereco.checked)
    {
        if (form.bairro.value =='')
        {
            alert('Confira seu bairro.');
            form.bairro.focus();
            form.bairro.style.background = 'red';
            return false;
        }
        else
        {
            form.bairro.style.background = '#FFFFFF';
        }

        if (form.rua.value =='')
        {
            alert('Confira seu endereÃ§o.');
            form.rua.focus();
            form.rua.style.background = 'red';
            return false;
        }
        else
        {
            form.rua.style.background = '#FFFFFF';
        }

        if (form.cep.value =='')
        {
            alert('Confira seu CEP.');
            form.cep.focus();
            form.cep.style.background = 'red';
            return false;
        }
        else
        {
            form.cep.style.background = '#FFFFFF';
        }

//        return true;
    }
    if(document.getElementById('cartao').style.display == 'block')
    {
        var bancoEmissor = document.getElementById('banco_emissor').value;

        if( form.operadora.value == '' || form.titular.value == '' || form.validade_cartao_mm.value == '' || form.validade_cartao_aa.value == '' || form.numero_cartao.value == '' || form.codigo_seguranca.value == '' )
        {
            alert('Confira os dados do cartÃ£o!');
            return false;
        }
    }

    return true;
}

function enderecoChange()
{
    if(document.pedido.trocar_endereco.checked)
    {
        getElementById('novo_endereco').style.display='block';
    }
    else
    {
        getElementById('novo_endereco').style.display='none';
    }
}

function atualizaSedex(result)
{
   sel = document.pedido.forma_envio;
   for(i=0;i<sel.options.length;i++)
   {
       if( sel.options[i].value = 'sedex' )
       {
           sel.remove(i);
           break;
       }
   }
   if( result == '1' )
   {
       op = document.createElement('option');
       op.text  = 'SEDEX';
       op.value = 'sedex';
       sel.options.add(op);
   }

}
function changePagamento()
{
    if( typeof(document.pedido) != 'undefined' && typeof(document.pedido.forma_pagamento) != 'undefined')
    {
        document.pedido.forma_pagamento.onchange();
    }
}

function carregarAfinidade(e,cod)
{
    posLoading(e);
	//top.location.hash = '#afinidade:'+cod; // Pode ser trocado por um link com hash
	//document.location.hash = '#afinidade:'+cod; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
        makeHistory('afinidade:'+cod);
    else
    {
        cpaint_call(url,'POST','carregarAfinidade',cod,listagemRet);
    }
}

function carregarMarca(e,cod)
{
    posLoading(e);
	//top.location.hash = '#marca:'+cod; // Pode ser trocado por um link com hash
	//document.location.hash = '#marca:'+cod; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
        makeHistory('marca:'+cod);
    else
    {
        cpaint_call(url,'POST','carregarMarca',cod,listagemRet);
    }
}

function buscar(e)
{
    posLoading(e);
    var palavra = document.getElementById('palavra_chave').value;
    var onde    = document.getElementById('onde_procurar').value;
    var marca   = document.getElementById('marca').value;
	//top.location.hash = '#buscar:'+palavra+':'+onde; // Pode ser trocado por um link com hash
	//document.location.hash = '#buscar:'+palavra+':'+onde; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
        makeHistory('buscar:'+palavra+':'+onde+':'+marca);
    else
        cpaint_call(url,'POST','buscar',palavra,onde,marca,listagemRet);
}

function subMenuMarcas(afinidade)
{
    cpaint_call(url,'POST','subMenuMarcas',afinidade,subMenuMarcasRet);
}

function subMenuMarcasRet(res)
{
    resArray = res.split('|||');
    document.getElementById('afinidade'+resArray[1]).innerHTML = resArray[0];
    document.getElementById('loading').style.display = 'none';
}

function buscarMarcaAfinidade(e, marca, afinidade)
{
    posLoading(e);
    var palavra = '';
    var onde    = afinidade;
    var marca   = marca;
	//top.location.hash = '#buscar:'+palavra+':'+onde; // Pode ser trocado por um link com hash
	//document.location.hash = '#buscar:'+palavra+':'+onde; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
        makeHistory('buscar:'+palavra+':'+onde+':'+marca);
    else
        cpaint_call(url,'POST','buscar',palavra,onde,marca,listagemRet);
}

function marcaBusca(afinidade)
{
    posLoading(undefined);
    cpaint_call(url,'POST','marca',afinidade,marcaRet);
}

function marcaRet(res)
{
    document.getElementById('marca_busca').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    document.body.scrollTop = 0;
}

function aviseMe()
{
    posLoading(undefined);
    var email = document.getElementById('aviseMeEmail').value;
    var nome = document.getElementById('aviseMeNome').value;
    var produto = document.getElementById('produto_codigo').value;
    cpaint_call(url,'POST','aviseMe',email,nome,produto,aviseMeRet);
}

function aviseMeRet(res)
{
    document.getElementById('aviseMeDiv').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    document.body.scrollTop = 0;
}

function exibeLancamentos()
{
    posLoading(undefined);
    cpaint_call(url,'POST','exibeLancamentos',exibeLancamentosRet);
}

function exibeLancamentosRet(res)
{
    document.getElementById('listagem').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    document.body.scrollTop = 0;
}

function posLoading(e)
{
    if ( e != undefined )
    {
        var posx = 0, posy = 0;
        if ( e.pageX == undefined ) // IE
        {
            //posx = e.x;
            posx = event.clientX+document.body.scrollLeft;
            posy = event.clientY+document.body.scrollTop;
            //posy = e.y;
        }
        else
        {
            posx = e.pageX;
            posy = e.pageY;
        }
        posx = posx + 10;
        posy = posy - 5;
        document.getElementById('loading').style.top     = posy;
        document.getElementById('loading').style.left    = posx;
    }
    document.getElementById('loading').style.display = 'block';
}

function abrirProduto(e,cod)
{
    posLoading(e);

	//top.location.hash = '#produto:'+cod; // Pode ser trocado por um link com hash
	//document.location.hash = '#produto:'+cod; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
    {
        makeHistory('produto:'+cod);
    }
    else
    {
        cpaint_call(url,'POST','abrirProduto',cod,produtoRet);
    }
}
var image_set;
function produtoRet(res)
{
    extraiScript(res);
    document.getElementById('central').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    //document.location.hash = '#alistagem';
    document.body.scrollTop = 0;
}

function abrirPedido(e)
{
    posLoading(e);
	//top.location.hash = '#pedido'; // Pode ser trocado por um link com hash
	//document.location.hash = '#pedido'; // Pode ser trocado por um link com hash
	//history(true); // Chama a funÃ§Ã£o de histÃ³rico
    if ( e != undefined )
    {
        makeHistory('pedido');
    }
    else
    {
        cpaint_call(url,'POST','abrirPedido',pedidoRet);
    }
}

function pedidoRet(res)
{
    document.getElementById('central').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    changePagamento();
}

function removerItem(e,cod)
{
    posLoading(e);
    cpaint_call(url,'POST','removerItem',cod,listagemRet);
}

function listagemRet(res)
{
    extraiScript(res);
    document.getElementById('central').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
    //document.location.hash = '#alistagem';
    document.body.scrollTop = 0;
}

function esqueciMinhaSenha(e,email)
{
    posLoading(e);
    cpaint_call(url,'POST','esqueciMinhaSenha',email,esqueciMinhaSenhaRet);
}

function esqueciMinhaSenhaRet(res)
{
    document.getElementById('central').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
}

function alterarQtde(e,cod,qtde)
{
    posLoading();
    if ( document.getElementById('aEfetuarCompra') )
    {
        document.getElementById('aEfetuarCompra').onchange = document.getElementById('aEfetuarCompra').onclick;
        document.getElementById('aEfetuarCompra').onclick  = function() { return false; };
    }
    cpaint_call(url,'POST','alterarQtde',cod,qtde,listagemRet);
}

function abrirSituacao(e)
{
    posLoading(e);
    if ( e != undefined )
    {
        makeHistory('situacao');
    }
    else
    {
        cpaint_call(url,'POST','abrirSituacao',pedidoRet);
    }
}

function situacaoRet(res)
{
    document.getElementById('central').innerHTML = res;
    document.getElementById('loading').style.display = 'none';
}

function extraiScript(result)
{
    var ini = 0;
    while (ini != -1)
    {
        ini = result.indexOf('<script', ini);
        if (ini >= 0)
        {
            ini     = result.indexOf('>', ini)+1;
            var fim = result.indexOf('</script', ini);
            codigo  = result.substring(ini, fim);
            //alert(codigo);
            eval(codigo);
        }
    }
}

//abaixo novo cod
var cont = 0;
var appHash = '';
var appIndex = 'home';
var appDefault = 1;
var appFunction = function(newHash) {
  // Sua funÃ§Ã£o para fazer a navegaÃ§Ã£o

        if(hash.indexOf(':') > 0)
        {
            hash = newHash.split(':');
            tipo = hash[0];
        }
        else
        {
            tipo = hash;
        }

        //document.getElementById('loading').style.top     = 200;
        //document.getElementById('loading').style.left    = 400;
        //adicionado cont para controlar pagina inicial
        if ( hash == appDefault && cont > appDefault )
        {
            go2index();
        }
        if ( tipo == 'produto' )
        {
            abrirProduto(undefined,hash[1]);
        }
        else if ( tipo == 'pedido' )
        {
            abrirPedido(undefined);
        }
        else if ( tipo == 'afinidade' )
        {
            carregarAfinidade(undefined,hash[1]);
        }
        else if ( tipo == 'marca' )
        {
            carregarMarca(undefined,hash[1]);
        }
        else if ( tipo == 'situacao' )
        {
            abrirSituacao(undefined,hash[1]);
        }
        else if ( tipo == 'lancamentos' )
        {
            exibeLancamentos();
        }
        else if ( tipo == 'buscar' )
        {
            document.getElementById('palavra_chave').value = hash[1];
            document.getElementById('onde_procurar').value = hash[2];
            document.getElementById('marca').value = hash[3];
            buscar(undefined);
        }
}
var isIe = (navigator.userAgent.toLowerCase().indexOf('msie') > -1) ? true : false;
function $(id) { return document.getElementById(id); }
function makeHistory(newHash) {
  if(isIe === true)
  {
      cont++;
    $('control-iframe').setAttribute('src', 'control.htm?id=' + newHash);
  }
  else if(newHash != appIndex)
  {
      //adicionado para controlar pagina inicial
      cont++;
    window.location.hash = newHash;
  }
  else
    go2index();
}
function handleHistory() {
  var browserHash = (hash = window.location.href.split('#')[1]) ? hash : '';
  if(browserHash != appHash) {
    if(browserHash != '') {
      appFunction(browserHash);
      appHash = browserHash;
      makeHistory(browserHash);
	}
	else {
	  clearInterval(checkInterval);
	  window.location.hash = appHash;
	  makeHistory(appIndex);
	}
  }
}
function createIFrame() {
  var iFrame = document.createElement('iframe');
  var browserHash = (hash = window.location.href.split('#')[1]) ? hash : '';
  if ( browserHash == '' )
  {
    iFrame.setAttribute('src', 'control.htm?id=1');
  }
  else
  {
    iFrame.setAttribute('src', 'control.htm?id='+browserHash);
  }
  iFrame.setAttribute('id', 'control-iframe');
  iFrame.style.display = 'none';
  document.getElementsByTagName('body')[0].appendChild(iFrame);
//  document.body.appendChild(iFrame);
//  document.getElementById('bodyid').appendChild(iFrame);
}
function initialize() {
  if(isIe === true)
    createIFrame();
  checkBookmark();
  checkInterval = setInterval(handleHistory, 100);
}
function checkBookmark() {
  var browserHash = (hash = window.location.href.split('#')[1]) ? hash : '';
  window.location.hash = (browserHash == '') ? appDefault : browserHash;
}
function go2index() {
  window.location = window.location.href.split('#')[0] + '#';
  //window.location = window.location.href.split('#')[0];
  window.location.reload();
}
//document.onload = initialize();");
}