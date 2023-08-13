import { Component } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { TranslateData } from '../models/translate.model';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {

  constructor(private translatorService: TranslatorService) {}

  translation?: TranslateData;
  
  translate(text: string) {
    // Send text to API
    var source = document.getElementById('dropbtn')!.innerText; // Source select text
    var target = document.getElementById('target-dropbtn')!.innerText; // Target select text
    this.translatorService.translateLang(text, source, target)
    .subscribe({
      next: (response) => {
        // Receive translation data from API
        this.translation = response
        console.log(response)
        // Set output to display the translated text
        // API's translated_text field changes dependent on the language
        if (target == "ja") {
          document.getElementById('output')!.innerText = response.translated_text.ja
        } else if (target == "es") {
          document.getElementById('output')!.innerText = response.translated_text.es
        } else if (target == "en") {
          document.getElementById('output')!.innerText = response.translated_text.en
        } else if (target == "ar") {
          document.getElementById('output')!.innerText = response.translated_text.ar
        } else if (target == "fr") {
          document.getElementById('output')!.innerText = response.translated_text.fr
        } else if (target == "nl") {
          document.getElementById('output')!.innerText = response.translated_text.nl
        } else if (target == "ko") {
          document.getElementById('output')!.innerText = response.translated_text.ko
        } else if (target == "af") {
          document.getElementById('output')!.innerText = response.translated_text.af
        } else if (target == "sq") {
          document.getElementById('output')!.innerText = response.translated_text.sq
        } else if (target == "am") {
          document.getElementById('output')!.innerText = response.translated_text.am
        } else if (target == "ar") {
          document.getElementById('output')!.innerText = response.translated_text.ar
        } else if (target == "hy") {
          document.getElementById('output')!.innerText = response.translated_text.hy
        } else if (target == "az") {
          document.getElementById('output')!.innerText = response.translated_text.az
        } else if (target == "ba") {
          document.getElementById('output')!.innerText = response.translated_text.ba
        } else if (target == "eu") {
          document.getElementById('output')!.innerText = response.translated_text.eu
        } else if (target == "be") {
          document.getElementById('output')!.innerText = response.translated_text.be
        } else if (target == "bn") {
          document.getElementById('output')!.innerText = response.translated_text.bn
        } else if (target == "bs") {
          document.getElementById('output')!.innerText = response.translated_text.bs
        } else if (target == "bg") {
          document.getElementById('output')!.innerText = response.translated_text.bg
        } else if (target == "my") {
          document.getElementById('output')!.innerText = response.translated_text.my
        } else if (target == "ca") {
          document.getElementById('output')!.innerText = response.translated_text.ca
        } else if (target == "ceb") {
          document.getElementById('output')!.innerText = response.translated_text.ceb
        } else if (target == "ny") {
          document.getElementById('output')!.innerText = response.translated_text.ny
        } else if (target == "co") {
          document.getElementById('output')!.innerText = response.translated_text.co
        } else if (target == "hr") {
          document.getElementById('output')!.innerText = response.translated_text.hr
        } else if (target == "cs") {
          document.getElementById('output')!.innerText = response.translated_text.cs
        } else if (target == "da") {
          document.getElementById('output')!.innerText = response.translated_text.da
        } else if (target == "nl") {
          document.getElementById('output')!.innerText = response.translated_text.nl
        } else if (target == "eo") {
          document.getElementById('output')!.innerText = response.translated_text.eo
        } else if (target == "et") {
          document.getElementById('output')!.innerText = response.translated_text.et
        } else if (target == "fi") {
          document.getElementById('output')!.innerText = response.translated_text.fi
        } else if (target == "fr") {
          document.getElementById('output')!.innerText = response.translated_text.fr
        } else if (target == "fy") {
          document.getElementById('output')!.innerText = response.translated_text.fy
        } else if (target == "gl") {
          document.getElementById('output')!.innerText = response.translated_text.gl
        } else if (target == "ka") {
          document.getElementById('output')!.innerText = response.translated_text.ka
        } else if (target == "de") {
          document.getElementById('output')!.innerText = response.translated_text.de
        } else if (target == "el") {
          document.getElementById('output')!.innerText = response.translated_text.el
        } else if (target == "gu") {
          document.getElementById('output')!.innerText = response.translated_text.gu
        } else if (target == "ht") {
          document.getElementById('output')!.innerText = response.translated_text.ht
        } else if (target == "ha") {
          document.getElementById('output')!.innerText = response.translated_text.ha
        } else if (target == "haw") {
          document.getElementById('output')!.innerText = response.translated_text.haw
        } else if (target == "iw") {
          document.getElementById('output')!.innerText = response.translated_text.iw
        } else if (target == "mrj") {
          document.getElementById('output')!.innerText = response.translated_text.mrj
        } else if (target == "hi") {
          document.getElementById('output')!.innerText = response.translated_text.hi
        } else if (target == "hmn") {
          document.getElementById('output')!.innerText = response.translated_text.hmn
        } else if (target == "hu") {
          document.getElementById('output')!.innerText = response.translated_text.hu
        } else if (target == "is") {
          document.getElementById('output')!.innerText = response.translated_text.is
        } else if (target == "ig") {
          document.getElementById('output')!.innerText = response.translated_text.ig
        } else if (target == "id") {
          document.getElementById('output')!.innerText = response.translated_text.id
        } else if (target == "ga") {
          document.getElementById('output')!.innerText = response.translated_text.ga
        } else if (target == "it") {
          document.getElementById('output')!.innerText = response.translated_text.it
        } else if (target == "jw") {
          document.getElementById('output')!.innerText = response.translated_text.jw
        } else if (target == "kn") {
          document.getElementById('output')!.innerText = response.translated_text.kn
        } else if (target == "kk") {
          document.getElementById('output')!.innerText = response.translated_text.kk
        } else if (target == "km") {
          document.getElementById('output')!.innerText = response.translated_text.km
        } else if (target == "ku") {
          document.getElementById('output')!.innerText = response.translated_text.ku
        } else if (target == "ky") {
          document.getElementById('output')!.innerText = response.translated_text.ky
        } else if (target == "lo") {
          document.getElementById('output')!.innerText = response.translated_text.lo
        } else if (target == "la") {
          document.getElementById('output')!.innerText = response.translated_text.la
        } else if (target == "lv") {
          document.getElementById('output')!.innerText = response.translated_text.lv
        } else if (target == "lt") {
          document.getElementById('output')!.innerText = response.translated_text.lt
        } else if (target == "lb") {
          document.getElementById('output')!.innerText = response.translated_text.lb
        } else if (target == "mk") {
          document.getElementById('output')!.innerText = response.translated_text.mk
        } else if (target == "mg") {
          document.getElementById('output')!.innerText = response.translated_text.mg
        } else if (target == "ms") {
          document.getElementById('output')!.innerText = response.translated_text.ms
        } else if (target == "ml") {
          document.getElementById('output')!.innerText = response.translated_text.ml
        } else if (target == "mt") {
          document.getElementById('output')!.innerText = response.translated_text.mt
        } else if (target == "mi") {
          document.getElementById('output')!.innerText = response.translated_text.mi
        } else if (target == "mr") {
          document.getElementById('output')!.innerText = response.translated_text.mr
        } else if (target == "mhr") {
          document.getElementById('output')!.innerText = response.translated_text.mhr
        } else if (target == "mn") {
          document.getElementById('output')!.innerText = response.translated_text.mn
        } else if (target == "ne") {
          document.getElementById('output')!.innerText = response.translated_text.ne
        } else if (target == "no") {
          document.getElementById('output')!.innerText = response.translated_text.no
        } else if (target == "ps") {
          document.getElementById('output')!.innerText = response.translated_text.ps
        } else if (target == "pap") {
          document.getElementById('output')!.innerText = response.translated_text.pap
        } else if (target == "fa") {
          document.getElementById('output')!.innerText = response.translated_text.fa
        } else if (target == "pl") {
          document.getElementById('output')!.innerText = response.translated_text.pl
        } else if (target == "pt") {
          document.getElementById('output')!.innerText = response.translated_text.pt
        } else if (target == "pa") {
          document.getElementById('output')!.innerText = response.translated_text.pa
        } else if (target == "ro") {
          document.getElementById('output')!.innerText = response.translated_text.ro
        } else if (target == "ru") {
          document.getElementById('output')!.innerText = response.translated_text.ru
        } else if (target == "sm") {
          document.getElementById('output')!.innerText = response.translated_text.sm
        } else if (target == "gd") {
          document.getElementById('output')!.innerText = response.translated_text.gd
        } else if (target == "sr") {
          document.getElementById('output')!.innerText = response.translated_text.sr
        } else if (target == "st") {
          document.getElementById('output')!.innerText = response.translated_text.st
        } else if (target == "sn") {
          document.getElementById('output')!.innerText = response.translated_text.sn
        } else if (target == "sd") {
          document.getElementById('output')!.innerText = response.translated_text.sd
        } else if (target == "si") {
          document.getElementById('output')!.innerText = response.translated_text.si
        } else if (target == "sk") {
          document.getElementById('output')!.innerText = response.translated_text.sk
        } else if (target == "sl") {
          document.getElementById('output')!.innerText = response.translated_text.sl
        } else if (target == "so") {
          document.getElementById('output')!.innerText = response.translated_text.so
        } else if (target == "su") {
          document.getElementById('output')!.innerText = response.translated_text.su
        } else if (target == "sw") {
          document.getElementById('output')!.innerText = response.translated_text.sw
        } else if (target == "sv") {
          document.getElementById('output')!.innerText = response.translated_text.sv
        } else if (target == "tl") {
          document.getElementById('output')!.innerText = response.translated_text.tl
        } else if (target == "tg") {
          document.getElementById('output')!.innerText = response.translated_text.tg
        } else if (target == "ta") {
          document.getElementById('output')!.innerText = response.translated_text.ta
        } else if (target == "tt") {
          document.getElementById('output')!.innerText = response.translated_text.tt
        } else if (target == "te") {
          document.getElementById('output')!.innerText = response.translated_text.te
        } else if (target == "th") {
          document.getElementById('output')!.innerText = response.translated_text.th
        } else if (target == "tr") {
          document.getElementById('output')!.innerText = response.translated_text.tr
        } else if (target == "udm") {
          document.getElementById('output')!.innerText = response.translated_text.udm
        } else if (target == "uk") {
          document.getElementById('output')!.innerText = response.translated_text.uk
        } else if (target == "ur") {
          document.getElementById('output')!.innerText = response.translated_text.ur
        } else if (target == "uz") {
          document.getElementById('output')!.innerText = response.translated_text.uz
        } else if (target == "vi") {
          document.getElementById('output')!.innerText = response.translated_text.vi
        } else if (target == "cy") {
          document.getElementById('output')!.innerText = response.translated_text.cy
        } else if (target == "xh") {
          document.getElementById('output')!.innerText = response.translated_text.xh
        } else if (target == "yi") {
          document.getElementById('output')!.innerText = response.translated_text.yi
        } else if (target == "yo") {
          document.getElementById('output')!.innerText = response.translated_text.yo
        } else if (target == "zu") {
          document.getElementById('output')!.innerText = response.translated_text.zu
        }
      }
    })
  }
}