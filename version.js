 $(".button-collapse").sideNav(); $(".dropdown-button").dropdown(); $(function(){ $(".wrapper1").scroll(function(){ $(".wrapper2") .scrollLeft($(".wrapper1").scrollLeft()); }); $(".wrapper2").scroll(function(){ $(".wrapper1") .scrollLeft($(".wrapper2").scrollLeft()); }); }); /*var link nuevo (Revistas);*/ let linkn; function dateTime(){ const format2 = "YYYY/MM/DD"; let fecha = document.getElementById('fecha'); let fechaMoment = moment().format(format2); fecha.innerText = fechaMoment; /*Fecha navbar*/ fechaMoment = fechaMoment.split('/').join(''); return fechaMoment; } function dateTimeGestion(){ const format2 = "YYYY/MM/DD"; let fecha = document.getElementById('fecha'); let momentWeek = moment().weekday(); let fechaMoment = moment().format(format2); let fechaMomentGestSat = moment().subtract(1, 'days').format(format2); let fechaMomentGestSun = moment().subtract(2, 'days').format(format2); let fechaNueva = ""; if( momentWeek === 6){ fecha.innerText = "Ultima edición: "+fechaMomentGestSat; fechaMomentGestSat = fechaMomentGestSat.split('/').join(''); fechaNueva=fechaMomentGestSat; } else if(momentWeek === 0){ fecha.innerText = "Ultima edición: "+fechaMomentGestSun; fechaMomentGestSun=fechaMomentGestSun.split('/').join(''); fechaNueva=fechaMomentGestSun; } else if(momentWeek != 6 || 0) { fecha.innerText = "Edición: "+fechaMomentGestSun; fecha.innerText = fechaMoment; fechaMoment=fechaMoment.split('/').join(''); fechaNueva=fechaMoment; } return fechaNueva; } function dateTimeRepublica(){ const format2 = "YYYY/MM/DD"; let fecha = document.getElementById('fecha'); let fechaMoment = moment().format(format2); fecha.innerText = fechaMoment; /*Fecha navbar*/ return fechaMoment; } let paginas = document.getElementsByClassName('contenido'); let banner = document.querySelector('.banner'); let logo = document.querySelector('.logo'); let link= ""; $(document).ready(function init() { if (window.location.href.indexOf("elcomercio") > -1) { banner.style.backgroundColor='#F7C600'; for (var i = 1; i < 100; i++) { link= 'https://i.prcdn.co/img?file=eaaj'; paginas[0].children[i].setAttribute("src", " "+link+"" +dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); } } else if (window.location.href.indexOf("gestion") > -1){ link= 'https://i.prcdn.co/img?file=eag6'; banner.style.backgroundColor='antiquewhite'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src", " "+link+""+dateTimeGestion()+"00000000001001&page="+i+"&scale=179&ticket="); PageErrorGestion(); } } else if (window.location.href.indexOf("peru21") > -1){ link='https://i.prcdn.co/img?file=eag1'; logo.style.width='70%'; banner.style.backgroundColor='#0C70BF'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src"," "+link+""+dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); } } else if (window.location.href.indexOf("correo") > -1){ link= 'https://i.prcdn.co/img?file=eagb'; banner.style.backgroundColor='#ED1C24'; logo.style.width='30%'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src"," "+link+""+dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); } } else if (window.location.href.indexOf("trome") > -1){ link='https://i.prcdn.co/img?file=eag8'; banner.style.backgroundColor='#F75924'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src",+dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); PageErrorTrome(); } } else if (window.location.href.indexOf("ojo") > -1){ link= 'https://i.prcdn.co/img?file=eags'; logo.style.width='50%'; banner.style.backgroundColor='#5FBB46'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src"," "+link+""+dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); } } else if (window.location.href.indexOf("depor") > -1){ link = 'https://i.prcdn.co/img?file=eag2'; logo.style.transform='scale(1)'; banner.style.backgroundColor='#CEDB31'; for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src"," "+link+""+dateTime()+"00000000001001&page="+i+"&scale=179&ticket="); } } else if (window.location.href.indexOf("republica") > -1){ logo.style.transform='scale(2)'; banner.style.backgroundColor='#FF0102'; logo.style.width='50%'; if(paginas[0].children[1].naturalWidth == 0){ for (var i = 1; i < 10; i++) { paginas[0].children[i].setAttribute("src","https://larepublica.cronosmedia.glr.pe/printed/"+dateTimeRepublica()+"/lima/pages/0"+i+".jpeg"); } for (var i = 10; i < 100; i++) { paginas[0].children[i].setAttribute("src","https://larepublica.cronosmedia.glr.pe/printed/"+dateTimeRepublica()+"/lima/pages/"+i+".jpeg"); } larepDom(); } } }); function larepDom(){ let larep = paginas[0].children[1]; setTimeout(function(){ if(larep.naturalWidth == 0){ for(var i=1; i<100; i++){ larep[i].setAttribute("src", "https://larepublica.cronosmedia.glr.pe/printed/"+dateTimeRepublica()+"/domingo/pages/0"+i+".jpeg"); } } },2000); } function MonthInterval(){ setTimeout(function(){ let pagecover = paginas[0].children[2]; if(pagecover.naturalWidth == 0){ for(var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src","https://t.prcdn.co/img?file=37922021072200000000001001&page="+i+"&scale=130"); } } },1500); } setTimeout(function(){let box = document.getElementsByClassName('materialbox'); for(var i = 1; i < 100; i++) { if(box[i].naturalWidth == 0){box[i].style.visibility = 'hidden';}}}, 9000); function PageError(){ let p1 = paginas[0].children[1]; let p2 = paginas[0].children[2]; let p3 = paginas[0].children[3]; let p4 = paginas[0].children[4]; let p5 = paginas[0].children[5]; let p6 = paginas[0].children[6]; let p7 = paginas[0].children[7]; let p8 = paginas[0].children[8]; let p9 = paginas[0].children[9]; let p10 = paginas[0].children[10]; let p11 = paginas[0].children[11]; let p12 = paginas[0].children[12]; let p13 = paginas[0].children[13]; let p14 = paginas[0].children[14]; let p15 = paginas[0].children[15]; let p16 = paginas[0].children[16]; let p17 = paginas[0].children[17]; let p18 = paginas[0].children[18]; let p19 = paginas[0].children[19]; let p20 = paginas[0].children[20]; let p21 = paginas[0].children[21]; let p22 = paginas[0].children[22]; let p23 = paginas[0].children[23]; let p24 = paginas[0].children[24]; let p25 = paginas[0].children[25]; let p26 = paginas[0].children[26]; let p27 = paginas[0].children[27]; let p28 = paginas[0].children[28]; let p29 = paginas[0].children[39]; let p30 = paginas[0].children[30]; let p31 = paginas[0].children[31]; let p32 = paginas[0].children[32]; let p33 = paginas[0].children[33]; let p34 = paginas[0].children[34]; let p35 = paginas[0].children[35]; let p36= paginas[0].children[36]; let nodeList = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36]; setTimeout(function(){ for (let i = 1; i < nodeList.length; i++) { if(nodeList[i].naturalWidth == 0){ nodeList[i-1].setAttribute("src", " "+link+""+dateTime()+"00000000001001&page="+i+"&scale=125"); } } },1500); } function PageErrorTrome(){ setTimeout(function(){ let pagecover = paginas[0].children[3]; if(pagecover.naturalWidth == 0){ for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src", " "+link+""+dateTime()+"00000000001001&page="+i+"&scale=144&ticket="); } } },1500); } function PageErrorGestion(){ setTimeout(function(){ let pagecover = paginas[0].children[3]; if(pagecover.naturalWidth == 0){ for (var i = 1; i < 100; i++) { paginas[0].children[i].setAttribute("src", " "+link+""+dateTimeGestion()+"00000000001001&page="+i+"&scale=125"); } } },1500); }