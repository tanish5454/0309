function hidediv1() {
    document.getElementById("div1").style.display = "none";
    // 
    document.getElementById("div2").style.display = "inline-block";
    document.getElementById("div2").style.animation = "sfade 2s ease";
    // 
    // document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/b24c/ukisic642rqy9rd9g.jpg)";
    // document.getElementById("div3").style.display = "none";
    // document.getElementById("div2").style.display = "none";
    // document.getElementById("div4").style.display = "inline-block";
}

function kiss() {
    document.getElementById("kissbutt").style.display = "none";
    document.getElementById("accgif").style.display = "none";
    document.getElementById("div2").style.animation = "bg_kiss 3s ease";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div3").style.animation = "ffade 4s ease";
}

function nexttomem() {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "inline-block";
}

function memna() {
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memno").style.transform = "translate(150px, 100px)";
    document.getElementById("memno").setAttribute("onclick", "memna2()");
    document.getElementById("memtext2").style.display = "block";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
    document.getElementById("askmemoryno").value = "no";
}


function memna2() {
    document.getElementById("memno").style.transform = "translate(0px, 100px)";
    document.getElementById("memno").setAttribute("onclick", "memna3()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "block";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
}


function memna3() {
    document.getElementById("memno").style.transform = "translate(160px, 230px)";
    document.getElementById("memno").setAttribute("onclick", "memna4()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "block";
    document.getElementById("memtext5").style.display = "none";
}


function memna4() {
    document.getElementById("memno").style.translate = "20px 80px";
    document.getElementById("memno").setAttribute("onclick" , "memna5()");
}

function memna5() {
    document.getElementById("memno").style.translate = "-20px -100px";
    document.getElementById("memno").setAttribute("onclick" , "memna6()");
}

function memna6() {
    document.getElementById("memno").style.translate = "-100px 0px";
    document.getElementById("memno").setAttribute("onclick" , "memna7()");
}

function memna7() {
    document.getElementById("memno").style.translate = "10px -20px";
    document.getElementById("memno").setAttribute("onclick" , "memna8()");
}

function memna8() {
    document.getElementById("memno").style.translate = "-90px -80px";
    document.getElementById("memno").setAttribute("onclick" , "memna9()");
}

function memna9() {
    document.getElementById("memno").style.translate = "40px -80px";
    document.getElementById("memno").setAttribute("onclick" , "memna10()");
}

function memna10() {
    document.getElementById("memno").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "block";
    document.getElementById("membuttarea").style.backgroundImage = "url(output-onlinegiftools.gif2)";
}

function memhm() {
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
    document.getElementById("membuttarea").style.display = "none";
    document.getElementById("selectmem").style.display = "block";
    document.getElementById("sstextarea").style.display = "block";
    document.getElementById("sstext").className = "sstextofmem";
    document.getElementById("askmemoryyes").value = "yes";
}

function selmemopa() {
    document.getElementById("selectmem").style.opacity = "0.3"
}

function mem1() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/465e/q5g0wtnb75xf3ss9g.jpg)";
    document.getElementById("sstext").innerHTML = "Jealousy 😭";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem1").value = "opened"
}

function mem2() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/6e5a/dfh0ki7a0vrf7hm9g.jpg)";
    document.getElementById("sstext").innerHTML = "iss vaali care ki Urge 😭";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem2").value = "opened"
}

function mem3() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/30f4/lh06utzcugftswv9g.jpg)";
    document.getElementById("sstext").innerHTML = "Abhi bhi tera hi hu 😭💖";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem3").value = "opened"
}

function mem4() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/db68/d8c3vudi5rxdbc0zg.jpg)";
    document.getElementById("sstext").innerHTML = "Jaan 🫠, Darr to isi din se lgne lga tha 🫠";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem4").value = "opened"
}

function mem5() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/91fe/rkkxap8urq2kvxa9g.jpg)";
    document.getElementById("sstext").innerHTML = "Par chhoti chhoti baat pe block kon krta hai 😭";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem5").value = "opened"
}

function mem6() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/f498/up5jd1ud85xackv9g.jpg)";
    document.getElementById("sstext").innerHTML = "Sachme abhi bhi kr rha hai 😭";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem6").value = "opened"
}

function mem7() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/68ae/y5q0uxuahrsspaj9g.jpg)";
    document.getElementById("sstext").innerHTML = "Laure 😭?";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem7").value = "opened"
}

function mem8() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/f511/xupxdn2uaj5cj7b9g.jpg)";
    document.getElementById("sstext").innerHTML = "Ohhh, kartik bhai kuch to krooo yaaarrrr 😭";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem8").value = "opened"
}

function mem9() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/eaca/tw7p5dbq2lxewzr9g.jpg)";
    document.getElementById("sstext").innerHTML = "Ahhh 🙂💔, vo sorry !!!";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "numareanext()");
    document.getElementById("mem9").value = "opened"
}

function mem10() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/b2c6/ivjxm8p7h6nu57w9g.jpg)";
    document.getElementById("sstext").innerHTML = "Main bhi ??? 😭";
    document.getElementById("mem10").value = "opened"
}

function mem11() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/d437/xj59kh7noizlk1x9g.jpg)";
    document.getElementById("sstext").innerHTML = "Kash mumma ko pata chal jata uss din 🫠";
    document.getElementById("mem11").value = "opened"
}

function mem12() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/88b5/imn59tnx4waxlqp9g.jpg)";
    document.getElementById("sstext").innerHTML = "jhel rhe ho ??? Merko abhi bhi aur jhelna haiii 😭🫠";
    document.getElementById("mem12").value = "opened"
}

function mem13() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/72e7/bkdbxp34r0h072i9g.jpg)";
    document.getElementById("sstext").innerHTML = "Par baal na ban ne pe kon bhagta hai ??? 😭";
    document.getElementById("mem13").value = "opened"
}

function mem14() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/4193/ggwhhp3egbsf4kq9g.jpg)";
    document.getElementById("sstext").innerHTML = "Fir aau ??? 🫠";
    document.getElementById("mem14").value = "opened"
}

function mem15() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/f9fc/5clycjytwh5dq72zg.jpg)";
    document.getElementById("sstext").innerHTML = "Ab aapka inhi time mein last seen milta hai 🫠💔";
    document.getElementById("mem15").value = "opened"
}

function mem16() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/8493/6msi27o8ulv8mj69g.jpg)";
    document.getElementById("sstext").innerHTML = "Ye kya baat hoti hai ??? 😭";
    document.getElementById("mem16").value = "opened"
}

function mem17() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/9b65/ldysmty69zwcyps9g.jpg)";
    document.getElementById("sstext").innerHTML = "Good gurlll, gndi chije nhi dekhte 🥰";
    document.getElementById("mem17").value = "opened"
}

function mem18() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/fb45/sjo4bwb4c7gg3qo9g.jpg)";
    document.getElementById("sstext").innerHTML = "Majak hi to banke rhe gaya 😭💔";
    document.getElementById("mem18").value = "opened"
}

function numareanext0() {
    document.getElementById("sstext").innerHTML = "At least select just one number 🥺";
    document.getElementById("memtryskip").value = "she tried to skip"
}

function numareanext() {
    document.getElementById("selnumarea1").style.display = "none";
    document.getElementById("selnumarea2").style.display = "block";
    document.getElementById("numareanextbutt").innerHTML = "Nextttttt";
    document.getElementById("numareanextbutt").setAttribute("onclick" , "nexttofmm()");
}

function nexttofmm() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/b24c/ukisic642rqy9rd9g.jpg)";
    document.getElementById("selectmem").style.display = "none";
    document.getElementById("sstext").style.display = "none";
    document.getElementById("sstextarea").style.display  = "none";
    document.getElementById("div5").style.display= "block";
    document.getElementById("div5").style.animation = "sfade 0.5s ease";
}

function chtreqno() {
    document.getElementById("whlchttext").innerHTML = "Are you Sureee ???";
    document.getElementById("chtreqno").innerHTML = "Yesss, i'm";
    document.getElementById("chtreqyes").innerHTML = "NO, i Want!!!"
    document.getElementById("chtreqno").setAttribute("onclick" , "nxttorop()");
    document.getElementById("wannawholechat1").value = "no"
}

function chtreqyes$() {
    document.getElementById("whlchttext").innerHTML = "OH, you want 🫠";
    document.getElementById("chtreqno").style.display = "none";
    document.getElementById("chtreqyes").style.display = "none";
    document.getElementById("chtdnbutt1").style.display = "block";
    document.getElementById("chtdnbutt2").style.display = "block";
    document.getElementById("nxt1").style.display = "block";
    document.getElementById("wannawholechat1").value = "She wantt"
}

function nxttorop() {
    document.getElementById("div5").style.display = "none";
    document.getElementById("rop").style.display = "block";
}

function ussure() {
    document.getElementById("ropq").innerHTML = "Rate out of ?/10";
    document.getElementById("ussurebutt").style.display = "none";
    document.getElementById("rop").style.backgroundImage = "url(https://www.mediafire.com/convkey/bb6d/vjq7ukdd5c3cgkn9g.jpg)";
    document.getElementById("ropinput").style.display = "block";
    document.getElementById("nexttotd").style.display = "block";
}

function nexttotd() {
    document.getElementById("rop").style.display = "none";
    document.getElementById("tnd").style.display = "block";
}

function truthbutt() {
    document.getElementById("tndtitle").innerHTML = "<br>Truth & Dare";
    document.getElementById("truthbutt").style.display = "none";
    document.getElementById("darebutt").style.display = "none";
    document.getElementById("tndqt").innerHTML = "Aaoge vaapisss ??? 🫠";
    document.getElementById("comebackmaybe").style.display = "inline-block";
    document.getElementById("comebacknever").style.display = "inline-block";
    document.getElementById("tord").value = "truth";
}

function darebutt() {
    document.getElementById("tndtitle").innerHTML = "<br>Truth & Dare";
    document.getElementById("truthbutt").style.display = "none";
    document.getElementById("darebutt").style.display = "none";
    document.getElementById("tndqt").innerHTML = "Please kuch Photussss bhej do apniiiii 😭<br>meri jannn meri bachiii ";
    document.getElementById("nexttomess").style.display = "inline-block";
    document.getElementById("tord").value = "dare";
}

function comebackmaybe() {
    document.getElementById("tndqt").innerHTML = "intezaarrr rhega aapka 😭🫶"
    document.getElementById("comebackmaybe").style.display = "none";
    document.getElementById("comebacknever").style.display = "none";
    document.getElementById("nexttomess").style.display = "inline-block";
}

function comebacknever() {
    document.getElementById("tndqt").innerHTML = "beta ji intezaar kiya hai apka <br> bhale aapka last option banke rhena pade <br> rahunga to aapka hi 🫠";
    document.getElementById("comebackmaybe").style.display = "none";
    document.getElementById("comebacknever").style.display = "none";
    document.getElementById("nexttomess").style.display = "inline-block";
}

function nexttomess() {
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/77e9/txrjhjsqm356y5z9g.jpg)";
    document.getElementById("tnd").style.display = "none";
    document.getElementById("messarea").style.display = "block";
    document.getElementById("mess").style.animation = "textc1 3s ease";
    document.getElementById("messarea").style.animation = "sfade 1s ease";
}

function closemem() {
    document.getElementById("messarea").style.display = "none";
    document.getElementById("div4").style.backgroundImage = "url(https://www.mediafire.com/convkey/b24c/ukisic642rqy9rd9g.jpg)";
    document.getElementById("submitbutt").style.display = "inline-block";
}

function chatdown1() {
        document.getElementById("chatdownload1").value = "chat1downloaded";
}

function chatdown2() {
        document.getElementById("chatdownload2").value = "chat2downloaded";
}
