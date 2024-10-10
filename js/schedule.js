/**
 * schedule.js
 * 
 *  ------- Website Kelas ------
 * 
 * Name: website-ipa-sepuluh-satu
 * Author: Nizar (@Zarxdoffical)
 * Source Code: https://github.com/Khuirul-Huda/website-ipa-sepuluh-satu
 * 
 * ------------------------------
**/


const schedule = {
  "Senin": [
    "apa lu? aku utamen🗿",
    "Matematika",
    "Matematika",
    "prakrya",
    "prakrya",
    "Fisika",
    "Fisika",
    "Fisika"
    ],
"Selasa": [
  "sosiologi",
  "sosiologi",
  "Matematika",
  "Matematika",
  "sosiologi",
  "sejarah",
  "sejarah", 
  "sejarah",
  
  ],
"Rabu": [
  "pjok",
  "pjok",
  "pjok",
  "Agama",
  "Agama",
  "Agama",
  "geografi",
  "geografi",
  "geografi"
],
"Kamis": [
  "Bahasa Inggris",
  "Bahasa Inggris",
  "Bahasa Inggris",
  "ekonomi",
  "ekonomi",
  "ekonomi",
  "biologi",
  "biologi",
  "biologi"
],
"Jumat": [
  "kimia",
  "komputer",
  "komputer",
  "pkn",
  "pkn"
],
"sabtu": [
  "kesenian",
  "kesenian",
  "bahasa indonesia",
  "bahasa indonesi",
  "kimia",
  "kimia",
  "bahasa indonesia",
  "bahasa indonesia"
  
  ]
  
}

let jadwalInner = document.getElementById('jadwal').innerHTML;
document.getElementById('jadwal').innerHTML = null


let str = ""



for (let day in schedule) {
  str = ""
  
  for (let hrs = 0; hrs < schedule[day].length; hrs++ ) {
    str += `${schedule[day][hrs]} <br>`
    
    if (hrs == schedule[day].length - 1) {
      document.getElementById('jadwal').innerHTML += jadwalInner.replace('harii', day).replace('jdwll', str)
    }
  }
}

/**
for (let h = 0; h < schedule.senin.length; h++) {
  str += `${schedule.senin[h]} <br>`
  if (h == schedule.senin.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Senin')
  document.getElementById('jadwal').innerHTML = tmp
}

str = ""
for (let h = 0; h < schedule.selasa.length; h++) {
  str += `${schedule.selasa[h]} <br>`
  if (h == schedule.selasa.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Selasa')
  document.getElementById('jadwal').innerHTML = tmp
}


**/
