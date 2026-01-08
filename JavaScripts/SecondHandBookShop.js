//create the request form html

   var path = './BookShop/';
   var tbl = document.createElement('table');
   var tbl1 = [];
   var tbl2 = [];
   var tr1_1;

   var img_front;
   var img_back;
   var IBAN;
   var IbAn = [];
   var idNr = [];

   var eMail;
   var Author;
   var Title;
   var Price;
   var canvasCell = [];
   var canDIVs = [];

   var n = 0;
   var count = 0;
   var uplElem = [];
   var selected = "";
   var tImg = [];
   var oImg = [];
   var sImg = [];
   var bImg = [];
   var pmImg = [];
   var dDImg = [];
   var dImg = [];
   var textEditor = [];
   var textMenEditor = [];
   var txCell = [];
   var cellTx = [];
   var spTx = [];
   var blBtn = [];

   var div1_2;
   var div2;
   var div_billing;
   var obj = new Object();
   var collector = new Object();
   var caller = '';

   var animImg = [];


   var topics = ['Alternative', 'Crime', 'Fiction', 'Nature', 'Medicine', 'Romantic', 'Technic', 'Biologic', 'Music', 'Journalism', 'Art', 'Cooking', 'EDV', 'Programming', 'Religion', 'Travel', 'History', 'Science', 'Reality'];
       topics.sort();
   var InputFormStr = ["Pay 'to' IBAN", 'e-mail', 'Topic','Title','Author','Status','Price'];
   var DeleteFormStr = ['e-mail', 'Topic','Title','Author'];
   var Topic_Topic = [2];

   var authors = [];
   var textBtn = [];
   var steerBtn = [];
   var checkbox = [];

   var calcFactor = 1;
   var Currency = '';


function transferParameter(factor,currency) {

      calcFactor = parseFloat(factor);
      Currency =  currency;

}

function SecondHandBookShop () {

   document.body.style.background ='#ffffff';
   createAnimImg(0,document.getElementById('anim'),'AnimTimer/empty.gif',45,45);

   var div0 = document.getElementById('div0');
       div0.style = "border:0px solid #46519c; width:'device-width'; height:device-height; align:center";
   var div1 = document.getElementById('div1');
       div1.style = "border:0px solid #46519c; width:'device-width'; height:device-height; align:center";

   var tbr = document.getElementById('tb1');
       tbr.style = "border:0px solid #46519c; width:'device-width'; align:center";

       tbr.appendChild(createPMImg(0,'Icons/plus_closed.png','BookInput', 25,25));
       tbr.appendChild(createPMImg(1,'Icons/empty1.png','plus_closed', 25,25));
       tbr.appendChild(createPMImg(2,'Icons/minus_closed.png','BookOutput', 25,25));

       var cell = document.createElement('td');
       cell.style = 'border:0px solid #7f7f7f; text-align:center; width:25%';
       cell.appendChild(createTImg(0,'Icons/Warenkorb_closed.png','Basket', 45,60));
       tbr.appendChild(cell);


   var tb1_1 = document.getElementById('tb1_1');
   var tr1_1 = document.createElement('tr1_1');

   var cell = document.createElement('td')
       cell.style = 'border:0px solid #7f7f7f; text-align:center; width:15%; color:blue';
       cell.appendChild(document.createTextNode('Topic'));
       tr1_1.appendChild(cell);


   var str = ['Topic_list','Author_list'];
   for(var i=0;i<str.length;i++) {

       var dCell = document.createElement('td');
       dCell.style = 'border:0px solid #7f7f7f; text-align:center; width:240px';

       dCell.appendChild(createEditField('border:0px solid 7f7f7f; width:120px; align:left', i, str[i], str[i].replace('_list','')));
       dCell.appendChild(createDImg(i,'Icons/list_closed.png',str[i], 25,25));

       tr1_1.appendChild(dCell);
   }
       tb1_1.appendChild(tr1_1);
}

function createSurface (loadedObjects) {

      var tb1_2 = document.getElementById('tb1_2');

          while (tb1_2.hasChildNodes()) {
                 tb1_2.removeChild(tb1_2.lastChild);
          }
          canRows = [];

      if(loadedObjects !== null && loadedObjects.length > 0) {

          img_front = loadedObjects.map( (item) => item.img_front );
          img_back = loadedObjects.map( (item) => item.img_back );
          IBAN =  loadedObjects.map( (item) => item.IBAN );
          eMail = loadedObjects.map( (item) => item['e-mail'] );
          Author = loadedObjects.map( (item) => item.Author );
          Title = loadedObjects.map( (item) => item.Title );
          Price = loadedObjects.map( (item) => item.Price );
          var Status = loadedObjects.map( (item) => item.Status );

          var rows = [];
          var c = -1;


          for(var i=0; i<loadedObjects.length; i++) {

               if(i == 0 || !((i/3)+'').includes('.')) {
                  c++;
                  rows[c] = document.createElement('tr');

                  var cell = document.createElement('td')
                  cell.style = 'border:0px solid #7f7f7f; text-align:left; width:25%; color:blue; top:10px';
                  cell.appendChild(document.createTextNode(textEditor[0].value));
                  rows[c].appendChild(cell);

               }

                  var rw = [];
                  var rw1 = [];

                  tbl1[i] = document.createElement('table1');
                  tbl1[i].style.width = '150px';

                  rw[0] = document.createElement('tr');
                  rw[0].appendChild(createTx(i,Author[i],'green','15%','10px','left','14px'));
                  rw[1] = document.createElement('tr');
                  rw[1].appendChild(createTx(i,Title[i],'green','15%','10px','left','14px'));

                  canDIVs[i] = document.createElement('div');
                  canDIVs[i].style = "border:0px solid #46519c; width:30%; height:180px; text-align:center";
                  canDIVs[i].appendChild(createCanvas(i, img_front[i], 120, 180));

                  tbl1[i].appendChild(rw[0]);
                  tbl1[i].appendChild(rw[1]);
                  tbl1[i].appendChild(canDIVs[i]);


                  tbl2[i] = document.createElement('table1');

                  rw1[0] = document.createElement('tr');
                  rw1[0].style = "border:0px solid #46519c; width:25px; height:25px; text-align:right";
                  rw1[0].appendChild(createSImg(i,'Icons/pictureForward.png',textEditor[0].value, 25, 25));
                  rw1[1] = document.createElement('tr');
                  rw1[1].appendChild(createSPTx(0,'Status: '+Status[i],'black','25%','20px','left','14px'));
                  rw1[2] = document.createElement('tr');
                  rw1[2].appendChild(createSPTx(1,'Price: '+Price[i]+ ' USD  - - - ','black','25%','20px','left','16px'));
                  rw1[3] = document.createElement('tr');
                  rw1[3].appendChild(createBImg(i,'Icons/WarenkorbIN_closed.png','Basket', 25,40));

                  tbl2[i].appendChild(rw1[0]);
                  tbl2[i].appendChild(rw1[1]);
                  tbl2[i].appendChild(rw1[2]);
                  tbl2[i].appendChild(rw1[3]);

                  var tbl_canvas = document.createElement('table1') ;

                  var  tbl_row = document.createElement('tr');
                       tbl_row.appendChild(tbl1[i]);
                       tbl_canvas.appendChild(tbl_row);
                  var  tbl_row = document.createElement('tr');
                       tbl_row.appendChild(tbl2[i]);
                       tbl_canvas.appendChild(tbl_row);

                  rows[c].appendChild(tbl_canvas);

                  if(loadedObjects.length == 1 || !((i/3)+'').includes('.')) {
                     tb1_2.appendChild(rows[c]);

                  }
          }

      }

}

function createPMImg(id,path,thema,height,width) {
    pmImg[id] = document.createElement("img");
    pmImg[id].setAttribute('id', id);
    pmImg[id].setAttribute('src', path);
    pmImg[id].setAttribute('name', thema);
    pmImg[id].setAttribute('height', height);
    pmImg[id].setAttribute('width', width);

    pmImg[id].onclick = function(event) {
         if(event.target.src.includes('closed')) {
            event.target.src = event.target.src.replace('closed','open') ;
            popupDialog ('popupDialog','block');

            createFormBlatt(event.target.name);

         } else  {div1_2
            event.target.src = event.target.src.replace('open','closed') ;
            popupDialog ('popupDialog','none');
         }


    }
    return pmImg[id];
}

function createFormBlatt(name) {


     var FormStr = InputFormStr;
     if(name == 'BookOutput') {

           FormStr = DeleteFormStr;
           caller = name;
           obj  = {
                  CalledBy: caller,
                  URI: 'mongodb+srv://wh:admin01@cluster0.kmwrpfb.mongodb.net/?retryWrites=true&w=majority',
                  Database: 'SecondHandBookShop',
                  Collection: ''
           }
     }

     var tab_1 =  document.createElement('table1');
     var row =  document.createElement('tr');
         if(name == 'BookInput')
            row.appendChild(createTx(0,'Needed Data for Book Input','blue','250px','25px','left','14px'));
         else
            row.appendChild(createTx(0,'Needed Data for Book Output','blue','250px','25px','left','14px'));
         tab_1.appendChild(row);

     var rows = [];
     if(typeof div2 !== 'undefined')
         while (div2.hasChildNodes()) {
                div2.removeChild(div2.lastChild);
         }

     var div1 =   document.getElementById('popUp');
         while (div1.hasChildNodes()) {
                div1.removeChild(div1.lastChild);
         }
         textMenEditor = new Array();
         dDImg = new Array();div1.style.top = '25%';


         //div1.style.background = '#90000000';
         div1.style.width = '300px';
         div1.style.height = '380px';
         div1.style.padding = '5px';
         div1.style.overflow = 'auto';
         div1.style.overflowX = 'hidden';
         div1.style.overflowY = 'scroll';

         for(var i=0; i<FormStr.length;i++) {
             rows[i] = document.createElement('tr');

             var cell = document.createElement('td');
                 cell.style.textAlign = 'left';

             rows[i].appendChild(createTx(i,FormStr[i] +': ','black','120px','25px','left','14px'));
             if(FormStr[i] == 'Topic') {
                 cell.appendChild(createMenEditField('border:0px solid 7f7f7f; width:100px; align:left', i, FormStr[i], ''));
                 cell.appendChild(createDDImg(0,'Icons/empty1.png','empty', '25px','25px'));
                 cell.appendChild(createDDImg(dDImg.length,'Icons/list_closed.png','Topic_list','25px','25px'));
             } else if(FormStr[i] == 'Status'){
                 cell.appendChild(createMenEditField('border:0px solid 7f7f7f; width:100px; align:left', i, FormStr[i], ''));
                 cell.appendChild(createDDImg(0,'Icons/empty1.png','empty', '25px','25px'));
                 cell.appendChild(createDDImg(dDImg.length,'Icons/list_closed.png','Status_list', '25px','25px'));
             } else if(FormStr[i] == 'Price') {
                 cell.appendChild(createMenEditField('border:0px solid 7f7f7f; width:60px; align:left', i, FormStr[i], '0.00'));
                 cell.appendChild(document.createTextNode('$ USD'));
             } else if(FormStr[i].endsWith('IBAN')) {
                 cell.appendChild(createMenEditField('border:0px solid 7f7f7f; width:180px; align:left', i, 'IBAN', ''));
             } else {
                 cell.appendChild(createMenEditField('border:0px solid 7f7f7f; width:180px; align:left', i, FormStr[i], ''));
             }
             rows[i].appendChild(cell);
             tab_1.appendChild(rows[i]);

         }

         div1.appendChild(tab_1);

         if(name == 'BookInput') {
             var cellTx = document.createElement('td');
                 cellTx.style.width = '280px';
                 cellTx.style.textAlign = 'center';
                 cellTx.style.fontSize = '14px';
                 cellTx.append(document.createTextNode('Upload two Images(720x480), FrontSide and BackSide'))

             var cell = document.createElement('td');
                 cell.style.width = '200px';
                 cell.style.textAlign = 'center';
                 cell.appendChild(createButton(0,'Load Images'));

             n = rows.length;
             rows[n] = document.createElement('tr');
             rows[n].appendChild(cellTx);
             rows[n].appendChild(cell);

             div1.appendChild(rows[n]);
         }
         var cell = document.createElement('td');
             cell.style.width = '200px';
             cell.appendChild(createButton(1,'Cancel'));
             cell.appendChild(createPMImg(pmImg.length,'Icons/empty1.png','Empty', 25,25));
             cell .appendChild(createButton(2,'Ok'));

         n = rows.length;
         rows[n] = document.createElement('tr');
         rows[n].appendChild(cell);

         var cell = document.createElement('td');
             cell.style.width = '200px';
             cell.style.textAlign = 'right'
             cell.appendChild(createAnimImg(1,document.createElement('img'),'AnimTimer/empty.gif',45,45));
          rows[n].appendChild(cell);

         div1.appendChild(rows[n]);
}

function createBilling() {
     div_billing = document.getElementById('popUp');

     while (div_billing.hasChildNodes()) {
            div_billing.removeChild(div_billing.lastChild);
     }
     cellTx = new Array();
     blBtn = new Array()


         div_billing.style.width = '300px';
         div_billing.style.height = '380px';
         div_billing.style.padding = '5px';

         div_billing.style.overflow = 'auto';
         div_billing.style.overflowX = 'hidden';
         div_billing.style.overflowY = 'scroll';

         var billTb = document.createElement('table1');
         var billRow = document.createElement('tr');
             billRow.appendChild(createTx(0,'Necessary INFORMATION(s) for Billing' +': ','blue','220px','25px','left','14px'));
             billRow.appendChild(createDDImg(0,'Icons/empty1.png','DDHeader', 45,45));
             billRow.appendChild(createDDImg(0,'Icons/printer.png','Printer', 72,72));
             billTb.appendChild(billRow);
             div_billing.appendChild(billTb);

         var blMainTab  = document.createElement('table1');
             while (blMainTab.hasChildNodes()) {
                    blMainTab.removeChild(div_billing.lastChild);
             }
         var blMainTabRw  = new Array();

         Object.keys(collector).forEach((ob,n) => {
             n = blMainTabRw.length;
             var sum = 0.0;
             blMainTabRw[n]  = document.createElement('tr');
             var cell = document.createElement('td') ;
                 cell.appendChild(createTx(n,'Inform the book Owner' +': ','blue','220px','25px','left','12px'));
                 cell.appendChild(createBlButton(n, 'Send Mail', JSON.stringify(ob).replaceAll('\"','')));

             blMainTabRw[n].appendChild(cell);
             blMainTab.appendChild(blMainTabRw[n]);
             for (var o=0; o<collector[ob].length; o++) {

                     IbAn[n] = collector[ob][o].IBAN;
                     idNr[n] = getRandomInt(0,10000);

                     var author = collector[ob][o].Author;
                     var title = collector[ob][o].Title;
                     var price = collector[ob][o].Price;

                     sum = sum  + parseFloat(price);

                     if(o > 0) {
                        blMainTabRw[n +o]  = document.createElement('tr');
                        blMainTabRw[n +o].appendChild(createTImg(tImg.length,'Icons/empty1.png','Empty', 25,25));
                     }
                     var cell = document.createElement('td') ;
                          cell.appendChild(createTx(cellTx.length,author+',  '+title,'black','100px','25px','left','12px'));
                     blMainTabRw[n +o].appendChild(cell);
                     var cell = document.createElement('td') ;
                          cell.appendChild(createTx(cellTx.length,price+'  USD','black','100px','25px','left','12px'));
                     blMainTabRw[n +o].appendChild(cell);
                     blMainTab.appendChild(blMainTabRw[n +o]);

                     if(o === collector[ob].length -1) {
                        blMainTabRw[n +o+1]  = document.createElement('tr');

                        var cell = document.createElement('td') ;
                             cell.appendChild(createTx(cellTx.length,'IBAN: ' +IbAn[n],'blue','100px','25px','left','12px'));

                        blMainTabRw[n +o+1].appendChild(cell);
                        var cell = document.createElement('td') ;
                            cell.appendChild(createTx(cellTx.length,'Identification: ' +idNr[n],'red','100px','25px','left','12px'));
                        blMainTabRw[n +o+1].appendChild(cell);

                        var gSum  = Number(sum.toFixed(2));

                        if((''+gSum).includes('.') &&  (''+gSum).substring((''+gSum).indexOf('.')+1).length === 1)
                            gSum = gSum +'0';
                        else  if(!(''+gSum).includes('.'))
                            gSum = gSum + '.00';

                        var curr = '';
                        if(Currency !== '' && Currency !== 'USD') {
                            var corr = Number((parseFloat(gSum) *calcFactor).toFixed(2));
                            if((''+corr).includes('.') && (''+corr).substring((''+corr).indexOf('.')+1).length == 1) corr = corr +'0';
                            else if(!(''+corr).includes('.')) corr = corr + '.00';
                            curr = '  »( ' +corr+ '  ' +Currency+ ' )« ';
                        }
                        var cell = document.createElement('td') ;
                             cell.appendChild(createTx(cellTx.length,gSum +'  USD  '+curr+' + postage','blue','100px','25px','left','14px'));
                        blMainTabRw[n +o+1].appendChild(cell);

                        blMainTab.appendChild(blMainTabRw[n +o+ 1]);

                     }

             }

         });

         div_billing.appendChild(blMainTab);


         var kindOfPayTx = ['pay with Currency via Bank Transfer', 'pay with Credit Card', 'pay with Crypto via Crypto App', 'pay with Cash in the Shop' ];
          for(var i=0; i<kindOfPayTx.length; i++) {
              var kindOfPayTb = document.createElement('tr');
                  kindOfPayTb.appendChild(createCheckBox(i,kindOfPayTx[i],'20px','20px'));
              div_billing.appendChild(kindOfPayTb);
         }

         var cell = document.createElement('td');
             cell.style.width = '200px';
             cell.style.textAlign = 'right';
             cell.appendChild(createButton(1,'Cancel'));
         var rw = document.createElement('tr');
             rw.style.width = '220px';
             rw.style.height = '25px';

             rw.appendChild(cell);

         div_billing.appendChild(rw);

}

function createAnimImg(n,img,path,height,width) {

    animImg[n] = img;

    animImg[n].setAttribute('src', path);
    animImg[n].setAttribute('height', height);
    animImg[n].setAttribute('width', width);

    return animImg[n];
}

function createTImg(id,path,thema,height,width) {
    tImg[id] = document.createElement("img");
    tImg[id].setAttribute('id', id);
    tImg[id].setAttribute('src', path);
    tImg[id].setAttribute('name', thema);
    tImg[id].setAttribute('height', height);
    tImg[id].setAttribute('width', width);

    tImg[id].onclick = function(event) {

        if(event.target.src.includes('closed') && event.target.src.includes('WarenkorbLoaded')  && !isEmpty(collector)) {
           event.target.src = event.target.src.replace('closed','open');
           event.target.style.width = '60px'
           popupDialog ('popupDialog','block');
           createBilling();
        } else if(event.target.src.includes('open') && event.target.src.includes('WarenkorbLoaded')) {
           event.target.src = event.target.src.replace('open','closed');
           event.target.style.width = '60px'
           popupDialog ('popupDialog','none');
        }
	 //scrollTo(0, document. body. scrollHeight);
    };

  return tImg[id];
}

function createCanvas(id,BASE64STR,width,height) {

        canvasCell[id] = document.createElement('td1');
        canvasCell[id].style.width = width+'px';
        canvasCell[id].style.height = height+'px';
        canvasCell[id].style.margin = '10px'
        canvasCell[id].textAlign = 'center';


    var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
    var context = canvas.getContext('2d');
    var img = new Image();

    img.onload = function() {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    img.src = BASE64STR;

    canvasCell[id].appendChild(canvas);
    return canvasCell[id];

}

function createLupe (n, width, height, xPos, yPos) {

     var div5 = document.createElement('div');
         div5.id = 'div5';
         div5.style.width = width+'px';
         div5.style.height = height+'px';
         div5.style.padding = '10px';
         div5.style.border = '0px solid #ccd';
         div5.style.position = 'absolute';
         div5.style.top = yPos+'px';
         div5.style.left = xPos+'px';
         div5.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1); z-index: 1000;';

         div5.onclick = function(event) {
              
              while (div5.hasChildNodes()) {
                     div5.removeChild(div5.lastChild);
              }
              div5.remove();
         }

         div5.appendChild(createCanvas(n, img_back[n], width, height));

    canDIVs[n].appendChild(div5);

}

function createSImg(id,path,thema,height,width) {

    sImg[id] = document.createElement("img");
    sImg[id].setAttribute('id', 'sImg_' +id);
    sImg[id].setAttribute('src', path);
    sImg[id].setAttribute('name', thema);
    sImg[id].setAttribute('height', height);
    sImg[id].setAttribute('width', width);

    sImg[id].onclick = function(event) {
         var n = parseInt(event.target.id.substring(event.target.id.lastIndexOf('_') +1));
         var pos = getOffset(canDIVs[n]);
         var x = parseInt(pos.left);
         var y = parseInt(pos.top);

         let myClick = function (e) {
                       let div = e.target.closest('div');
                       if (!div) { return; }

                       //popupDialog('popupDialog_3','block') ;
                       createLupe(n, 240, 360, x, y);
                     };



         for(var i=0;i<cellTx.length;i++)
             cellTx[i].style.color = 'green';
         cellTx[n].style.color = 'blue';

         if(event.target.src.includes('Forward')) {
            event.target.src = event.target.src.replace('Forward','Back');
            //change canvas
            canDIVs[n].removeChild(canDIVs[n].lastChild)
            canDIVs[n].appendChild(createCanvas(n, img_back[n], 120, 180));

            canDIVs[n].addEventListener('click',myClick);

         } else {
              event.target.src = event.target.src.replace('Back','Forward');
              for(var i=0;i<cellTx.length;i++)
                    cellTx[i].style.color = 'green';

              canDIVs[n].removeChild(canDIVs[n].lastChild)
              canDIVs[n].appendChild(createCanvas(n, img_front[n], 120, 180));
              //change canvas
              canDIVs[n].removeEventListener('click', myClick);

         }

    };


  return sImg[id];
}

function createBImg(id,path,thema,height,width) {
    bImg[id] = document.createElement("img");
    bImg[id].setAttribute('id', id);
    bImg[id].setAttribute('src', path);
    bImg[id].setAttribute('name', thema);
    bImg[id].setAttribute('height', height);
    bImg[id].setAttribute('width', width);

    bImg[id].onclick = function(event) {
        var c = parseInt(event.target.id);
        if(event.target.src.includes('closed') && event.target.src.includes('WarenkorbIN')) {
           event.target.src = event.target.src.replace('closed','open');
           if(!tImg[0].src.includes('WarenkorbLoaded'))
              tImg[0].src = tImg[0].src.replace('Warenkorb','WarenkorbLoaded');

           if(eMail[c] in collector)  {
               var collArr = {
                    IBAN: IBAN[c],
                    Author: Author[c],
                    Title: Title[c],
                    Price: Price[c]
               }
               function insertObject(n, arr, obj) {

                                let index = arr.length;
                                // appending object to end of array
                                arr.splice(index, n, obj);

                            };

               insertObject(0,collector[eMail[c]],collArr);

           } else {

               Object.assign(collector, {

                      [eMail[c]]: [{
                            IBAN: IBAN[c],
                            Author: Author[c],
                            Title: Title[c],
                            Price: Price[c]
                      }]

               });
           }

        } else if(event.target.src.includes('open') && event.target.src.includes('WarenkorbIN')) {
           event.target.src = event.target.src.replace('open','closed');
           event.target.style.width = '40px';

           collector[eMail[c]].forEach((e,x) =>{ if(e.Author === Author[c] && e.Title === Title[c]) collector[eMail[c]].splice(x, 1)});
           if(collector[eMail[c]].length === 0)
              delete collector[eMail[c]];


           if(isEmpty(collector))
              tImg[0].src = tImg[0].src.replace('WarenkorbLoaded','Warenkorb');


        }

    };

  return bImg[id];
}

function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

  return true;
}


function createDImg(id,path,thema,height,width) {

    dImg[id] = document.createElement("img");
    dImg[id].setAttribute('id', id);
    dImg[id].setAttribute('src', path);
    dImg[id].setAttribute('name', thema);
    dImg[id].setAttribute('height', height);
    dImg[id].setAttribute('width', width);

    if(thema.startsWith('Author')) {
       dImg[id].style.visibility = 'hidden';
    }

    dImg[id].onclick = function(event) {

        if(event.target.src.includes('closed')) {
            event.target.src  = event.target.src.replace('closed','open');

            if(event.target.name.startsWith('Topic')) {
                  var pos = getOffset(event.target);
                  var x = parseInt(pos.left) -60;
                  var y = parseInt(pos.top) +30;

                 createDialogList(topics,'div3','Topic',x,y);
            } else if(event.target.name.startsWith('Author')) {
                 collector = new Object();
                 caller = 'RequestAuthors';
                 obj  = {

                        CalledBy: caller,
                        URI: 'mongodb+srv://wh:admin01@cluster0.kmwrpfb.mongodb.net/?retryWrites=true&w=majority',
                        Database: 'SecondHandBookShop',
                        Collection: 'Topic_' +textEditor[0].value
                 }

                 animImg[0].src = 'AnimTimer/timer_black.gif';
                 //dataUpload ('http://localhost:3030/Shop',obj);
                 dataUpload('https://secondhandshop-rmpy.onrender.com/Shop', obj);
            }
        } else {
            event.target.src  = event.target.src.replace('open','closed');
            if(typeof div1_2 !== 'undefined') {
                while (div1_2.hasChildNodes()) {
                       div1_2.removeChild(div1_2.lastChild);
                }
                div1_2.style = 'none';
                txCell = new Array();
            }
        }
    };

  return dImg[id];
}

function createDDImg(id,path,thema,height,width) {
    dDImg[id] = document.createElement("img");
    dDImg[id].setAttribute('id', id);
    dDImg[id].setAttribute('src', path);
    dDImg[id].setAttribute('name', thema);
    dDImg[id].style.height = height;
    dDImg[id].style.width = width;

    dDImg[id].onclick = function(event) {
        if(event.target.name === 'Printer') {

             if (Currency === '')
                 PrintElem('popUp');
             else {
                 // resize(div_billing);
                 elementPrint.print('Recipe/Formula');
             }
             return;
        } else if(event.target.name === 'Crypto') {

             if(event.target.style.width === '42px') {
                 event.target.style.width = '144px';
                 event.target.style.height = '144px';

             } else if(event.target.style.width === '144px') {
                 event.target.style.width = '42px';
                 event.target.style.height = '42px';

             }
           return;
        }

        if(event.target.src.includes('closed')) {
            event.target.src  = event.target.src.replace('closed','open');
            var pos = getOffset(event.target);
            var x = parseInt(pos.left) -120;
            var y = parseInt(pos.top) +20;
            var addPos = getOffset(document.getElementById('popupDialog'));
            var addX = parseInt(addPos.left);
            var addY = parseInt(addPos.top);
            x = x - addX;
            y = y - addY;

            if(event.target.name.includes('Topic')) {
                 createDialogList(topics,'box','Topic',x,y);
            } else if(event.target.name.includes('Status')) {
                 var status = ['new','nearly new', 'moderat used', 'used', 'strongly used'];
                 createDialogList(status,'box','Status',x,y);
            }
        } else {
            event.target.src  = event.target.src.replace('open','closed');
            if(typeof div1_2 !== 'undefined') {
                while (div1_2.hasChildNodes()) {
                       div1_2.removeChild(div1_2.lastChild);
                }
                div1_2.style = 'none';
                txCell = new Array();
            }
        }
    };

  return dDImg[id];
}

function resize(div){
    var width = parseInt(div.style.width.substring(0,div.style.width.indexOf('px'))),
        height = parseInt(div.style.height.substring(0,div.style.height.indexOf('px')));

    let maxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        maxHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    let scale,
         isMax = maxWidth >= width && maxHeight >= height;

    scale = Math.min(maxWidth/width, maxHeight/height);

    div.style.width = isMax?'':maxWidth * scale;
    div.style.height = isMax?'':maxHeight * scale;

}

function createButton(id,text) {
        textBtn[id] = document.createElement('button');
        textBtn[id].innerText = text;
        textBtn[id].id = id;
        textBtn[id].style.color = 'black';
        if(text == 'Ok' && caller !== 'BookOutput')
            textBtn[id].setAttribute("disabled",true);
        if(text !== 'Load Images' && text !== 'Ok' && text !== 'Cancel')
           textBtn[id].setAttribute('style','border:0px solid #7f7f7f; background-color: #fff; color: #280');
        else
            textBtn[id].onclick = function(event) {
                
                var n1 = 0;
                if(event.target.innerText == 'Ok') {

                    var datum = getActualDate(1,new Date());

                    for(var i=0;i<textMenEditor.length;i++)
                        if(textMenEditor[i].value == '' || textMenEditor[i].value.length < 3 ||
                            (textMenEditor[i].name.startsWith('e-mail') && !textMenEditor[i].value.includes('@')) ||
                            (textMenEditor[i].name.startsWith('Price') && !textMenEditor[i].value.includes('.'))) {
                           break;
                        } else
                             n1++;
                    if(n1 == textMenEditor.length) {
                        Object.assign(obj, {
                              InputDate: datum
                        })
                        for(var i=0;i<textMenEditor.length;i++) {
                            if(textMenEditor[i].name.includes('IBAN'))
                               textMenEditor[i].value = textMenEditor[i].value.replaceAll(' ','');
                            if(textMenEditor[i].name.startsWith('Topic'))
                               obj['Collection'] = 'Topic_' +textMenEditor[i].value;
                            Object.assign(obj, {
                                     [textMenEditor[i].name]: textMenEditor[i].value.trim()
                            })
                        }

                        animImg[1].src = 'AnimTimer/timer_grey.gif';
                        //dataUpload ('http://localhost:3030/Shop',obj);
                        dataUpload('https://secondhandshop-rmpy.onrender.com/Shop', obj);
                    } else {

                       popupDialog('popupDialog_1','block') ;
                       createDialogMsg('Some Data is wrong or missing',5000,'popupDialog_1','popUp_1','red');

                    }
                } else if(event.target.innerText.startsWith('Load Image')) {

                     var uplElements = document.getElementById('fileInput');
                     if(uplElements !== null) {

                         var uplEle = uplElements.files;
                             uplElem[count] = uplEle[0];

                         count++;
                         if(count <3)
                            event.target.innerText = 'Load Image_' +count;


                         if(count == 3) {
                             caller = 'BookInput';

                            obj  = {
                                   CalledBy: caller,
                                   URI: 'mongodb+srv://wh:admin01@cluster0.kmwrpfb.mongodb.net/?retryWrites=true&w=majority',
                                   Database: 'SecondHandBookShop',
                                   Collection: ''
                            }

                             while (div2_1.hasChildNodes()) {
                                     div2_1.removeChild(div2_1.lastChild);
                             }

                             imageToBase64(uplElem);
                             
                             count = 0;
                             uplElem = new Array();
                             event.target.style.color = 'black';
                             event.target.disabled = 'true';
                             event.target.innerText = 'Load Images';

                             for(btn of textBtn) {

                                 if(btn.innerText == 'Ok')
                                     btn.removeAttribute("disabled");
                             }

                         }
                     } else {

                            var pos = getOffset(event.target);
                            var x = parseInt(pos.left);
                            var y = parseInt(pos.top) +20;
                            var pos = getOffset(document.getElementById('popupDialog'));
                            var x1 = parseInt(pos.left);
                            var y1 = parseInt(pos.top);
                            x = x -x1;
                            y = y -y1;

                            div2_1 = document.getElementById('div2_1');

                            var uplEl = document.createElement('input') ;
                                uplEl.id = 'fileInput'
                                uplEl.type = 'file';
                                uplEl.accept = 'Images/*';
                                uplEl.style.position = 'absolute';
                                uplEl.style.top = y+'px';
                                uplEl.style.left = x+'px';

                            div2_1.appendChild(uplEl);
                            event.target.style.color = 'green';
                            count++;
                            event.target.innerText = 'Load Image_' +count;

                     }

                } else  {
                    if(div2_1 !== null && typeof div2_1 !== 'undefined')
                        while (div2_1.hasChildNodes()) {
                               div2_1.removeChild(div2_1.lastChild);
                        }
                    popupDialog ('popupDialog','none');
                    pmImg[0].src = pmImg[0].src.replace('open','closed') ;
                    pmImg[2].src = pmImg[2].src.replace('open','closed') ;
                    tImg[0].src = tImg[0].src.replace('open','closed') ;
                }
            }

    return textBtn[id];
}

function createBlButton(id,text,name) {
        blBtn[id] = document.createElement('button');
        blBtn[id].innerText = text;
        blBtn[id].id = id;
        blBtn[id].name = name;
        blBtn[id].style.color = 'black';
        if(name.includes('@'))
            blBtn[id].onclick = function(event) {
               var name = event.target.name.substring(0,event.target.name.indexOf('@'));
               var n = parseInt(event.target.id);
               var iban = '',
                   identify = '',
                   publicKey  = '';
               if(caller.includes('Bank Transfer') || caller.includes('Credit Card')) {
                    iban = 'IBAN : \n' +IbAn[n]+ '\n';
                    identify = ' with the Identifier: \t'+ idNr[n];
               } else if(caller.includes('Crypto')) {
                       publicKey = 'your BlockChainNetwork:  with the AccountKey(PublicKey):  '; iban = 'BlockChainAccount';
               };

               var body = "Hi\nI'm interested in buying your book(s):\n\tI'll prefer to " +caller+ "\n\n\tThe Details could you find\n\tin the attached 'PDF' ( Print of the Receipt ) \n\n\tPlease give me an email back\n\tincludes the Postage\n\t" +
                          publicKey +"\n\tand the date when you can send the package\n\n\t"+
                          "My Address is:\n\n\tSo long I'll got the Postage\n\tI'll transfer the money to your " + iban + identify;

               if (Currency === '')
                   sendEmail(event.target.name,'Interest on your Book(s)',body);
               else
                   sendMail.sendTo(event.target.name, 'Interest on your Book(s)', body);

            };


     return blBtn[id];
}

function sendEmail(recipient,subject,body,attachment) {
    // Create a Blob containing the file data
    const fileData = attachment;
    const blob = new Blob([fileData], { type: 'application/pdf' });

    // Create a data URL for the Blob
    const fileDataURL = URL.createObjectURL(blob);

    // Compose the email link with the data URL as an attachment
    const emailLink = 'mailto:'+recipient+'?subject='+subject+'&body='+body;

    // Open the email client
    window.location.href = emailLink;
}

function createEditField (style, n, name, value) {
    var cell = document.createElement('td1');

    textEditor[n] = document.createElement('input');

	textEditor[n].type = "text";
	textEditor[n].name = name;
	textEditor[n].value = value;
    textEditor[n].id = 'txEd_'+n;
    textEditor[n].style = style;
    textEditor[n].readonly = false;
    textEditor[n].disabled = false;

    if(name.includes('Topic') || name.includes('Author')) {
       textEditor[n].readonly = true;
       textEditor[n].disabled = true;
    }


    cell.appendChild(textEditor[n]);

    return cell;
}

function createMenEditField (style, n, name, value) {
    var cell = document.createElement('td1');

    textMenEditor[n] = document.createElement('input');

	textMenEditor[n].type = "text";
	textMenEditor[n].name = name;
	textMenEditor[n].value = value;
    textMenEditor[n].id = 'txEd_'+n;
    textMenEditor[n].style = style;
    textMenEditor[n].readonly = false;
    textMenEditor[n].disabled = false;
    if(value == '0.00')
         textMenEditor[n].onclick = function(event) {
             event.target.value = '';
         }

    if(name.includes('Topic') || name.includes('Status')) {
       textMenEditor[n].readonly = true;
       textMenEditor[n].disabled = true;
    }


    cell.appendChild(textMenEditor[n]);

    return cell;
}

function createCheckBox(id,text,width,height) {
    var row = document.createElement("tr");

    var cell = document.createElement("td1");
        cell.style.width = '25px';

    checkbox[id] = document.createElement('input');
	checkbox[id].type = "checkbox";
	checkbox[id].name = text;
	checkbox[id].value = "value";
    checkbox[id].checked = false;
	checkbox[id].id = id;
	checkbox[id].style.width = width;
	checkbox[id].style.height = height;
	if(id == 0) {
	   checkbox[id].checked = true;
	   caller = text;
	}
    checkbox[id].addEventListener('click', (e) => {
          for(ch of checkbox)
             ch.checked = false;
          e.target.checked = true;

          caller = e.target.name;

    })

    cell.appendChild(checkbox[id]);
    row.appendChild(cell);
    var cell = document.createElement("td1");
        cell.appendChild(createTx(0,text,'black','220px','25px','center','12px'));
    if(text.includes('Crypto'))
        cell.appendChild(createDDImg(dDImg.length,'Icons/QR_Code_CryptoWallet.png','Crypto','42px','42px'));

    row.appendChild(cell);
    return row;
}

function createTx(n,name,color,width,height,align,txSize) {
    cellTx[n] = document.createElement('td');

    cellTx[n].style.color = color;
    cellTx[n].style.width = width;
    cellTx[n].style.height = height;
    cellTx[n].style.textAlign = align;
    cellTx[n].style.fontSize = txSize;
    if(n == 0 && name.includes('Data')) {
        cellTx[n].style.fontSize = '14px';
        cellTx[n].style.width = '250px';
    }

    var txtNode = document.createTextNode(name);
	txtNode.type = "txtNode_"+n;
	txtNode.name = name;


    cellTx[n].appendChild(txtNode);

    return cellTx[n];
}

function createSPTx(n,name,color,width,height,align,txSize) {
    spTx[n] = document.createElement('td');

    spTx[n].style.color = color;
    spTx[n].style.width = width;
    spTx[n].style.height = height;
    spTx[n].style.textAlign = align;
    spTx[n].style.fontSize = txSize;

    var txtNode = document.createTextNode(name);
	txtNode.type = "txtNode_"+n;
	txtNode.name = name;


    spTx[n].appendChild(txtNode);

    return spTx[n];
}

function createListTx (n,name,kindOf,size,width,height) {

    txCell[n] = document.createElement('td');
    txCell[n].style.width = width;
    txCell[n].style.height = height;
    txCell[n].style.textAlign = 'left';
    txCell[n].style.fontSize = size;
    txCell[n].name = name +'°'+ kindOf;
    txCell[n].onclick = function(event) {

        var kindOf = event.target.name.substring(event.target.name.indexOf('°')+1, event.target.name.indexOf('_'));

        if(event.target.name.endsWith('main')) {

           dImg[1].style.visibility = 'visible';

           for(var i=0;i<textEditor.length;i++) {

               if(textEditor[i].name.includes(kindOf)) {
                  textEditor[i].value =  event.target.name.substring(0,event.target.name.indexOf('°'));
               }
           }
           for(var i=0;i<dImg.length;i++) {

               if(dImg[i].name.includes(kindOf)) {
                   dImg[i].src  = dImg[i].src.replace('open','closed');
               }
           }

           if(kindOf == 'Author') {
               var indexA = event.target.name.substring(0,event.target.name.indexOf('°'));
               caller = 'RequestBooks';
               if(indexA == 'All Authors') indexA = 'All Authors';

               obj  = {

                      CalledBy: caller,
                      URI: 'mongodb+srv://wh:admin01@cluster0.kmwrpfb.mongodb.net/?retryWrites=true&w=majority',
                      Database: 'SecondHandBookShop',
                      Collection: 'Topic_' +textEditor[0].value,
                      Author: indexA
               }

               animImg[0].src = 'AnimTimer/timer_black.gif';
               //dataUpload ('http://localhost:3030/Shop',obj);
               dataUpload('https://secondhandshop-rmpy.onrender.com/Shop', obj);
           }

        } else {
           for(var i=0;i<textMenEditor.length;i++)
               if(textMenEditor[i].name.includes(kindOf)) {
                  textMenEditor[i].value =  event.target.name.substring(0,event.target.name.indexOf('°'));
               }
           for(var i=0;i<dDImg.length;i++) {
               if(dDImg[i].name.includes(kindOf)) {
                   dDImg[i].src  = dDImg[i].src.replace('open','closed');
               }
           }
        }
        while (div1_2.hasChildNodes()) {
               div1_2.removeChild(div1_2.lastChild);
        }
        div1_2.style = 'none';
        txCell = new Array();
    }

    var txtNode = document.createTextNode(name);

    txCell[n].appendChild(txtNode);

    return txCell[n];
}

function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          var erg = ''+Math.floor(Math.random() * (max - min + 1));
          var z = '000000000'

          if(erg.length < (""+max).length)
             erg = erg + z.substring(0,(""+max).length - erg.length);
          return erg;
}

function PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

async function getData(url) {
    let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        fetch(url, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Authorization failed: ' + error.message));
}

function popupDialog(kindOf,kind) {
        document.getElementById(
            kindOf
        ).style.display = kind;
}

function createDialogMsg(msg, tim, kindOf, kind, color) {
     var div1_1 =   document.getElementById(kind);
     while (div1_1.hasChildNodes()) {
            div1_1.removeChild(div1_1.lastChild);
     }
     //div1_1.style.background = '#90000000';
     div1_1.style.width = '200px';
     div1_1.style.height = '40px';
     div1_1.style.padding = '10px';

     div1_1.appendChild(createTx(cellTx.length,msg,color,'420px','20px','left','14px'));
     timer = setTimeout(() => {
       popupDialog(kindOf,'none');
       if(msg.includes('was successful')) {
          popupDialog('popupDialog','none');
          pmImg[0].src = pmImg[0].src.replace('open','closed') ;
          pmImg[2].src = pmImg[2].src.replace('open','closed') ;
       }
     }, tim)


}

function createDialogList(arr, kind, kindOf, xPos, yPos) {

     if(kind == 'box') kindOf = kindOf +'_dialog';
     else  kindOf = kindOf +'_main';

     div1_2 = document.getElementById(kind);
     div1_2.style.width = '120px';
     div1_2.style.height = '160px';
     div1_2.style.padding = '10px';
     div1_2.style.background = '#ccd';
     div1_2.style.border = '2px solid #ccd';
     div1_2.style.position = 'absolute';
     div1_2.style.top = yPos+'px';
     div1_2.style.left = xPos+'px';
     div1_2.style.overflow = 'auto';
     div1_2.style.overflowX = 'hidden';
     div1_2.style.overflowY = 'scroll';
     div1_2.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1); z-index: 1000;'


     while (div1_2.hasChildNodes()) {
            div1_2.removeChild(div1_2.lastChild);
     }
     txNodes = new Array();

     var tab = document.createElement('table1');

     for(var i=0;i<arr.length;i++) {
         var row = document.createElement('tr');

             row.appendChild(createListTx(txCell.length, arr[i], kindOf, '16px', '120px', '14px'));

         tab.appendChild(row);
     }
     div1_2.appendChild(tab);

}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function resizeImage(base64Str, maxWidth, maxHeight) {
    return new Promise((resolve) => {
        let img = new Image()
        img.src = base64Str
        img.onload = () => {
          let canvas = document.createElement('canvas')
          const MAX_WIDTH = maxWidth
          const MAX_HEIGHT = maxHeight
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }
          canvas.width = width
          canvas.height = height
          let ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          resolve(canvas.toDataURL())
        }
    })
}

async function  imageToBase64(uplElem) {

     var kind = ['front','back'];

     for(var i=1;i<uplElem.length;i++) {
          var h = 180, w = 120;
          const reader = new FileReader();
          reader.readAsDataURL(uplElem[i]);
          const data= await new Promise((resolve, reject) => {

            reader.onload = () => resolve(reader.result);

            reader.onerror = error => reject(error);

           });
           if(kind[i-1] == 'back') {
              h = 720; w = 480;
           }
           let res = await resizeImage(data,h,w)
                             .then(res => {

                                  Object.assign(obj, {
                                        ['img_'+kind[i-1]]: res
                                  });
                             })
     }

}

function base64ToFile(base64String, mimeType, fileName) {
            // Remove data URL scheme if present
            const base64Data = base64String.toString().replace(/^data:.+;base64,/, '');
            const byteCharacters = atob(base64Data); // Decode Base64 string
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mimeType });
            const url = URL.createObjectURL(blob);

            // Create a link element to download the file
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.click();

            // Cleanup
            URL.revokeObjectURL(url);
}

function generateToken() {
    return Math.random().toString(36).slice(2);
}

function getActualDate(kind, date) {
    var today = date;
    var dd = +(String(today.getDate()).padStart('2,0'));
    var mm = +(String(today.getMonth() +1).padStart('2,0'));
    var yyyy = +(today.getFullYear());

    var hh = +(String(today.getHours()).padStart('2,0'));
    var min = +(String(today.getMinutes()).padStart('2,0'));

    yyyy = String(yyyy);
    if(mm < 10) mm = "0"+String(mm);
    else mm = String(mm);
    if(dd < 10) dd = "0"+String(dd);
    else dd = String(dd);

    if(hh < 10) hh = "0"+String(hh);
    else hh = String(hh);
    if(min < 10) min = "0"+String(min);
    else min = String(min);

    if(kind == 0)
        return yyyy+mm+dd;
    else if(kind == 1)
         return dd+"-"+mm+"-"+yyyy;
    else
         return dd+"."+mm+"."+yyyy+'--'+hh+':'+min+' Uhr';
}


async function dataUpload(url, data) {

          var result;
          await fetch(url, {
              method: "POST",
              headers: {
              	      "Content-Type": "application/json"
              	    },
              body: JSON.stringify(data),

          })
              .then(res => res.json())
              .then(data => {

                  result = data.body;

              })
              .catch(() => {popupDialog('popupDialog_1','block') ; createDialogMsg('Upload Error occurred',5000,'popupDialog_1','popUp_1','red')});


          if(result !== null && typeof result !== 'undefined' && result.length > 3) {

              const json = JSON.stringify(result);
              const unquoted = json.replace(/"([^"]+)":/g, '$1:');


              if(caller == 'BookInput' || caller == 'BookOutput') {
                  result = unquoted;

                  var tx = 'Upload';
                  if(caller == 'BookOutput') tx = 'Delete';

                  if(result.includes('was successful')) {

                      textMenEditor = new Array();
                      dDImg = new Array();

                      popupDialog('popupDialog_1','block') ;
                      createDialogMsg('The '+tx+' of your Book was successful !',5000,'popupDialog_1','popUp_1','green');

                  }
                  else if(result.includes('InputDataControl')) {
                      popupDialog('popupDialog_1','block') ;
                      createDialogMsg(data.error || tx +' failed !! Control the Data Input',5000,'popupDialog_1','popUp_1','red');

                  } else  {
                      popupDialog('popupDialog_1','block') ;
                      createDialogMsg(data.error || tx +' failed !! Something went wrong',5000,'popupDialog_1','popUp_1','red');
                  }

              } else if(caller == 'RequestBooks') {

                    const jsonArray = JSON.parse(result);
                    createSurface(jsonArray);

              } else if(caller == 'RequestAuthors') {
                    var pos = getOffset(dImg[1]);
                    var x = parseInt(pos.left) -60;
                    var y = parseInt(pos.top) +30;

                    var res = result.toString().replace('[','').replace(']','').replaceAll('\"','').split(',');
                    authors = ['All Authors'];
                    var str = '';
                    var c = 1;
                    for( var i=0;i<res.length;i++) {

                        if (!str.includes(res[i])) {
                            authors[c] = res[i];
                            c++;
                        }
                        str = str + res[i] + ',';
                    }
                    authors.sort();

                    createDialogList(authors,'div3','Author',x,y);
              }

              animImg[0].src = 'AnimTimer/empty.gif';
              if(typeof animImg[i] !== 'undefined')
                 animImg[1].src = 'AnimTimer/empty.gif';
          } else {

               popupDialog('popupDialog_2','block') ;
               createDialogMsg('According your search criteria\nno Data where found',5000,'popupDialog_2','popUp_2','red');

               for (var i=0; i<dImg.length; i++)
                   dImg[i].src = dImg[i].src.replace('open','closed');

          }

          animImg[0].src = 'AnimTimer/empty.gif';
          if(typeof animImg[i] !== 'undefined')
             animImg[1].src = 'AnimTimer/empty.gif';
}

