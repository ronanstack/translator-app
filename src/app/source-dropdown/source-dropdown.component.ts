import { Component } from '@angular/core';

@Component({
  selector: 'app-source-dropdown',
  templateUrl: './source-dropdown.component.html',
  styleUrls: ['./source-dropdown.component.css']
})
export class SourceDropdownComponent {
  
  onClickSource() {
    // Display all langs
    var dropdown = document.getElementById('dropdown')!;
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  // Language Selection
  onEnglish() {
    // Set English to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'en';
    dropdown.style.display = "none";
  }

  onJapn() {
    // Set Japanese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ja';
    dropdown.style.display = "none";
  }

  onArabic() {
    // Set Arabic to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ar';
    dropdown.style.display = "none";
  }

  onDutch() {
    // Set Dutch to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'nl';
    dropdown.style.display = "none";
  }

  onFrench() {
    // Set French to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'fr';
    dropdown.style.display = "none";
  }

  onKorean() {
    // Set Korean to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ko';
    dropdown.style.display = "none";
  }

  onSpanish() {
    // Set Spanish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'es';
    dropdown.style.display = "none";
  }

  onAf() {
    // Set Afrikaans to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'af';
    dropdown.style.display = "none";
  }

  onSq() {
    // Set Albanian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sq';
    dropdown.style.display = "none";
  }

  onAm() {
    // Set Amharic to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'am';
    dropdown.style.display = "none";
  }

  onHy() {
    // Set Armenian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'hy';
    dropdown.style.display = "none";
  }

  onAz() {
    // Set Azerbaijani to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'az';
    dropdown.style.display = "none";
  }

  onBa() {
    // Set Bashkir to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ba';
    dropdown.style.display = "none";
  }

  onEu() {
    // Set Basque to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'eu';
    dropdown.style.display = "none";
  }

  onBe() {
    // Set Belarusian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'be';
    dropdown.style.display = "none";
  }

  onBn() {
    // Set Bengali to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'bn';
    dropdown.style.display = "none";
  }

  onBs() {
    // Set Bosnian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'bs';
    dropdown.style.display = "none";
  }

  onBg() {
    // Set Bulgarian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'bg';
    dropdown.style.display = "none";
  }

  onCa() {
    // Set Catalan to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ca';
    dropdown.style.display = "none";
  }

  onCeb() {
    // Set Cebuano to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ceb';
    dropdown.style.display = "none";
  }

  onNy() {
    // Set Chichewa to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ny';
    dropdown.style.display = "none";
  }

  onCo() {
    // Set Corsican to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'co';
    dropdown.style.display = "none";
  }

  onHr() {
    // Set Croatian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'hr';
    dropdown.style.display = "none";
  }

  onCs() {
    // Set Czech to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'cs';
    dropdown.style.display = "none";
  }

  onDa() {
    // Set Danish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'da';
    dropdown.style.display = "none";
  }

  onEo() {
    // Set Esperanto to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'eo';
    dropdown.style.display = "none";
  }

  onEt() {
    // Set Estonian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'et';
    dropdown.style.display = "none";
  }

  onFi() {
    // Set Finnish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'fi';
    dropdown.style.display = "none";
  }

  onFy() {
    // Set Frisian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'fy';
    dropdown.style.display = "none";
  }

  onGl() {
    // Set Galician to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'gl';
    dropdown.style.display = "none";
  }

  onKa() {
    // Set Georgian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ka';
    dropdown.style.display = "none";
  }

  onDe() {
    // Set German to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'de';
    dropdown.style.display = "none";
  }

  onEl() {
    // Set Greek to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'el';
    dropdown.style.display = "none";
  }

  onGu() {
    // Set Gujarati to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'gu';
    dropdown.style.display = "none";
  }

  onHt() {
    // Set Haitian Creole to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ht';
    dropdown.style.display = "none";
  }

  onHa() {
    // Set Hausa to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ha';
    dropdown.style.display = "none";
  }

  onHaw() {
    // Set Hawaiian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'haw';
    dropdown.style.display = "none";
  }

  onIw() {
    // Set Hebrew to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'iw';
    dropdown.style.display = "none";
  }

  onMrj() {
    // Set Hill Mari to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mrj';
    dropdown.style.display = "none";
  }

  onHi() {
    // Set Hindi to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'hi';
    dropdown.style.display = "none";
  }

  onHmn() {
    // Set Hmong to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'hmn';
    dropdown.style.display = "none";
  }

  onHu() {
    // Set Hungarian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'hu';
    dropdown.style.display = "none";
  }

  onIs() {
    // Set Icelandic to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'is';
    dropdown.style.display = "none";
  }

  onIg() {
    // Set Igbo to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ig';
    dropdown.style.display = "none";
  }

  onId() {
    // Set Indonesian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'id';
    dropdown.style.display = "none";
  }

  onGa() {
    // Set Irish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ga';
    dropdown.style.display = "none";
  }

  onIt() {
    // Set Italian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'it';
    dropdown.style.display = "none";
  }

  onJw() {
    // Set Javanese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'jw';
    dropdown.style.display = "none";
  }

  onKn() {
    // Set Kannada to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'kn';
    dropdown.style.display = "none";
  }

  onKk() {
    // Set Kazakh to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'kk';
    dropdown.style.display = "none";
  }

  onKm() {
    // Set Khmer to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'km';
    dropdown.style.display = "none";
  }

  onKu() {
    // Set Kurdish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ku';
    dropdown.style.display = "none";
  }

  onKy() {
    // Set Kyrgyz to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ky';
    dropdown.style.display = "none";
  }

  onLo() {
    // Set Lao to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'lo';
    dropdown.style.display = "none";
  }

  onLa() {
    // Set Latin to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'la';
    dropdown.style.display = "none";
  }

  onLv() {
    // Set Latvian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'lv';
    dropdown.style.display = "none";
  }

  onLt() {
    // Set Lithuanian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'lt';
    dropdown.style.display = "none";
  }

  onLb() {
    // Set Luxembourgish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'lb';
    dropdown.style.display = "none";
  }

  onMk() {
    // Set Macedonian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mk';
    dropdown.style.display = "none";
  }

  onMg() {
    // Set Malagasy to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mg';
    dropdown.style.display = "none";
  }

  onMs() {
    // Set Malay to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ms';
    dropdown.style.display = "none";
  }

  onMl() {
    // Set Malayalam to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ml';
    dropdown.style.display = "none";
  }

  onMt() {
    // Set Maltese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mt';
    dropdown.style.display = "none";
  }

  onMi() {
    // Set Maori to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mi';
    dropdown.style.display = "none";
  }

  onMr() {
    // Set Marathi to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mr';
    dropdown.style.display = "none";
  }

  onMhr() {
    // Set Mari to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mhr';
    dropdown.style.display = "none";
  }

  onMn() {
    // Set Mongolian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'mn';
    dropdown.style.display = "none";
  }

  onNe() {
    // Set Nepali to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ne';
    dropdown.style.display = "none";
  }

  onNo() {
    // Set Norwegian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'no';
    dropdown.style.display = "none";
  }

  onPs() {
    // Set Pashto to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ps';
    dropdown.style.display = "none";
  }

  onPap() {
    // Set Papiamento to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'pap';
    dropdown.style.display = "none";
  }

  onFa() {
    // Set Persian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'fa';
    dropdown.style.display = "none";
  }

  onPl() {
    // Set Polish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'pl';
    dropdown.style.display = "none";
  }

  onPt() {
    // Set Portuguese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'pt';
    dropdown.style.display = "none";
  }

  onPa() {
    // Set Punjabi to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'pa';
    dropdown.style.display = "none";
  }

  onRo() {
    // Set Romanian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ro';
    dropdown.style.display = "none";
  }

  onRu() {
    // Set Russian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ru';
    dropdown.style.display = "none";
  }

  onSm() {
    // Set Samoan to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sm';
    dropdown.style.display = "none";
  }

  onGd() {
    // Set Scots Gaelic to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'gd';
    dropdown.style.display = "none";
  }

  onSr() {
    // Set Serbian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sr';
    dropdown.style.display = "none";
  }

  onSt() {
    // Set Sesotho to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'st';
    dropdown.style.display = "none";
  }

  onSn() {
    // Set Shona to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sn';
    dropdown.style.display = "none";
  }

  onSd() {
    // Set Sindhi to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sd';
    dropdown.style.display = "none";
  }

  onSi() {
    // Set Sinhala to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'si';
    dropdown.style.display = "none";
  }

  onSk() {
    // Set Slovak to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sk';
    dropdown.style.display = "none";
  }

  onSl() {
    // Set Slovenian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sl';
    dropdown.style.display = "none";
  }

  onSo() {
    // Set Somali to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'so';
    dropdown.style.display = "none";
  }

  onSu() {
    // Set Sundanese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'su';
    dropdown.style.display = "none";
  }

  onSw() {
    // Set Swahili to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sw';
    dropdown.style.display = "none";
  }

  onSv() {
    // Set Swedish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'sv';
    dropdown.style.display = "none";
  }

  onTl() {
    // Set Tagalog to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'tl';
    dropdown.style.display = "none";
  }

  onTg() {
    // Set Tajik to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'tg';
    dropdown.style.display = "none";
  }

  onTa() {
    // Set Tamil to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ta';
    dropdown.style.display = "none";
  }

  onTt() {
    // Set Tatar to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'tt';
    dropdown.style.display = "none";
  }

  onTe() {
    // Set Telugu to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'te';
    dropdown.style.display = "none";
  }

  onTh() {
    // Set Thai to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'th';
    dropdown.style.display = "none";
  }

  onTr() {
    // Set Turkish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'tr';
    dropdown.style.display = "none";
  }

  onUdm() {
    // Set Udmurt to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'udm';
    dropdown.style.display = "none";
  }

  onUk() {
    // Set Ukrainian to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'uk';
    dropdown.style.display = "none";
  }

  onUr() {
    // Set Urdu to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'ur';
    dropdown.style.display = "none";
  }

  onUz() {
    // Set Uzbek to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'uz';
    dropdown.style.display = "none";
  }

  onVi() {
    // Set Vietnamese to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'vi';
    dropdown.style.display = "none";
  }

  onCy() {
    // Set Welsh to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'cy';
    dropdown.style.display = "none";
  }

  onXh() {
    // Set Xhosa to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'xh';
    dropdown.style.display = "none";
  }

  onYi() {
    // Set Yiddish to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'yi';
    dropdown.style.display = "none";
  }

  onYo() {
    // Set Yoruba to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'yo';
    dropdown.style.display = "none";
  }

  onZu() {
    // Set Zulu to current
    var sourcebtn = document.getElementById('dropbtn')!;
    var dropdown = document.getElementById('dropdown')!;
    sourcebtn.innerText = 'zu';
    dropdown.style.display = "none";
  }

}