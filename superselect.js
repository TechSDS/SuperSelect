//Autor Ivan Shabanov 2015

//Инициализация SuperSelect у елемента
function InitSuperSelect(el) {
  $(el).click(function (){
    SuperSelect(el);
  });
}

function SuperSelect(el) {
  var afterel = '<div class ="SuperSelectChoose"><div><div class ="SuperSelectChooseBG"  onclick="SuperSelectChooseThis(this, false)"></div></div><div class="SuperSelectChooseDiv" onmouse>';
  var title = $(el).attr('title');
  var val = '';
  afterel += '<div class="SuperSelectCloseButton" onclick="SuperSelectChooseThis(this, false)">&times;</div>';
  if (title != undefined) {
    afterel += '<h1>' + title + '</h1>';
  }
  $(el).find('option').each(function(){
     afterel += '<p ';
     if ($(this).prop('selected') == true) {
       afterel += 'class="SuperSelectChoosedP"';   
     } else {
       afterel += 'class="SuperSelectChooseP"';
     }
     if ($(this).html() != '') {
       val = $(this).html();
     } else {
       val = $(this).val();
     }
     afterel += 'onclick="SuperSelectChooseThis(this, true)">' + val + '</p>'; 
  });

  afterel = afterel + '</div></div>';
  $(el).after(afterel);
  $(el).hide();
  $(el).next('.SuperSelectChoose').show('normal');
}

function SuperSelectChooseThis(el, selected) {
  var sel = $(el).html();
  var val = '[SuperSelecNotChoosed]';
  var select = $(el).parent('div').parent('div').prev('select');
  if (selected == true) {
    $(select).find('option').each(function(){
     //Найдем то значение которое выбрали
     if ($(this).html() == sel) {
       val = $(this).val();
     }
     if ($(this).val() == sel) {
       val = $(this).val();
     }
    });
  }
  $(el).parent('div').parent('div').hide('fast', function () {
    this.remove() ; 
    $(select).show();
    if (val != '[SuperSelecNotChoosed]') {
      //Проставим Выбранное значение и dызовим Change
      $(select).val(val).prop('selected', true).change();
    }
  });
}

///
function ToogleSelectValuesResurs(el) {
  if ($(el).val() == 'table') {  
     $(el).next('select').show();
     $(el).next('select').prop('disabled', false);
     $(el).next('select').next('textarea').hide();
     $(el).next('select').next('textarea').prop('disabled', true);
  } else {
     $(el).next('select').next('textarea').show();
     $(el).next('select').next('textarea').prop('disabled', false);
     $(el).next('select').hide();
     $(el).next('select').prop('disabled', true);
  };
};