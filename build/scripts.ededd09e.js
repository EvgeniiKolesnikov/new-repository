// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"FlCp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавль',
  species: 'Grus grus',
  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ласточка',
  species: 'Delichon urbicum',
  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Кукушка',
  species: 'Cuculus canorus',
  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синица',
  species: 'Parus major',
  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Воробей',
  species: 'Passer domesticus',
  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грач',
  species: 'Corvus frugilegus',
  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Певчий дрозд',
  species: 'Turdus philomelos',
  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клёст',
  species: 'Loxia curvirostra',
  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлица',
  species: 'Streptopelia turtur',
  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жаворонок',
  species: 'Alauda arvensis',
  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Скворец',
  species: 'Sturnus vulgaris',
  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Иволга',
  species: 'Oriolus oriolus',
  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Свиристель',
  species: 'Bombycilla garrulus',
  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орёл',
  species: 'Aquila nipalensis',
  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокол',
  species: 'Falco peregrinus',
  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Ястреб',
  species: 'Accipiter gentilis',
  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Филин',
  species: 'Bubo bubo',
  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревестник',
  species: 'Puffinus griseus',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пеликан',
  species: 'Pelecanus',
  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
  image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пингвин',
  species: 'Aptenodytes forsteri',
  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
var _default = birdsData;
exports.default = _default;
},{}],"Xg7f":[function(require,module,exports) {
module.exports = "Lucky - The End.003f66cb.mp3";
},{}],"eHea":[function(require,module,exports) {
// import birdsData from './birds';

// const url2 = '../sounds/Lucky - The End.mp3';
// const url1 = birdsData[0][0].audio;
// const name = birdsData[0][0].name;

// const playBtn = document.querySelector('.player__button');

// const muteButton = document.querySelector('.muteButton');
// const soundVolume = document.querySelector('.soundVolume');

// const playerTitle = document.querySelector('.player-title');
// const timeline = document.querySelector('.timeline');
// const progress = document.querySelector('.progress');
// const currentTime = document.querySelector('.time-currentTime');
// const durationTime = document.querySelector('.time-durationTime');

// const playListElem = document.querySelector('.play-list');

// const cardName = document.querySelector('.card__name');

// let isPlay = false;
// let isSound = true;
// let volume = 0.2;
// let playNum = 0;

// const audio = new Audio(url1);
// console.log(audio);

// audio.addEventListener("loadeddata", () => {
//   cardName.textContent = name;
//   durationTime.textContent = audio.duration;
// });

// const playAudio = async () => {
//   audio.play();
//   playBtn.classList.add('pause');
//   playListElem.children[playNum].classList.add('item-active');
//   isPlay = true;
//   // await setAudio();
// };

// const pauseAudio = async () => {
//   audio.pause();
//   playBtn.classList.remove('pause');
//   playListElem.children[playNum].classList.remove('item-active');
//   isPlay = false;
// };

// const switchAudio = async (e) => {
//   isPlay ? pauseAudio() : playAudio();
// };

// const getTimeCodeFromNum = (num) => {
//   let s = parseInt(num);
//   let m = parseInt(s / 60);
//   s -= m * 60;
//   const h = parseInt(m / 60);
//   m -= h * 60;
//   if (h === 0) return `${m}:${String(s % 60).padStart(2, 0)}`;
//   return `${String(h).padStart(2, 0)}:${m}:${String(s % 60).padStart(2, 0)}`;
// };

// const audioProgress = async () => {
//   setInterval(() => {
//     if (audio.currentTime >= audio.duration) nextAudio();
//     progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
//     currentTime.textContent = getTimeCodeFromNum(audio.currentTime);
//   }, 100);
// };

// const timelineClick = async () => {
//   timeline.addEventListener('click', (e) => {
//     const timelineWidth = window.getComputedStyle(timeline).width;
//     const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
//     audio.currentTime = timeToSeek;
//   });
// };

// const pauseAllAudios = async (e) => {
//   playList.forEach((el, i) => {
//     playListElem.children[i].classList.remove('item-active');
//   });
// };

// const clickAudio = async (e) => {
//   if (playNum !== e.target.value) {
//     playNum = e.target.value
//     audio.src = playList[playNum].src;
//     pauseAllAudios();
//     playAudio();
//     return;
//   }
//   pauseAllAudios();
//   switchAudio();
// };

// const addList = async () => {
//     const li = document.createElement('li');
//     li.classList.add('play-item');
//     playListElem.append(li);
//     li.addEventListener('click', (e) => clickAudio(e));
// };

// const changeVolume = async (e) => {
//   volume = e.target.value;
//   if (isSound) audio.volume = volume;
// };

// const toggleSound = async () => {
//   if (isSound) {
//     isSound = false;
//     muteButton.style.opacity = 0.3;
//     audio.volume = 0;
//   } else {
//     isSound = true;
//     muteButton.style.opacity = 1;
//     audio.volume = volume;
//   }
// };

// const init = async () => {
//   audio.src = url;
//   audio.volume = volume;
// };

// // init();
// // addList();
// // audioProgress();
// // timelineClick();

// // playBtn.addEventListener('click', switchAudio);
// // muteButton.addEventListener('click', toggleSound);
// // soundVolume.addEventListener('change', (e) => changeVolume(e));
},{}],"kEka":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const getData = async url => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  console.log('getData', url);
  let response = await fetch(url, {
    mode: "no-cors"
  });
  if (response.ok) {
    let audioData = await response.arrayBuffer();
    audioCtx.decodeAudioData(audioData).then(buffer => {
      console.log(buffer);
      // console.log(buffer.getChannelData(0));
      addDiv(buffer);
    }).catch(err => {
      console.error('Error with decoding audio data' + err);
    });
  }
};

// const source = audioCtx.createMediaElementSource(sound1);

// playBtn.addEventListener('click', () => {
//   if (audioCtx.state === 'suspended') {
//     audioCtx.resume();
//   }
//   sound1.play();
// });

// pauseBtn.addEventListener('click', () => {
//   sound1.pause();
// });

// getData(url1);
// getData(url2);
// getData(url3);
// getData(url4);
exports.getData = getData;
const addDiv = buffer => {
  const audioList = document.querySelector('.audio-list');
  const channel = buffer.getChannelData(0);
  const lines = 60;
  const WIDTH = 200;
  const HEIGHT = 50;
  const div = document.createElement('div');
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  var xGap = WIDTH / lines;
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.strokeRect(0, 0, WIDTH, HEIGHT);
  ctx.translate(5, HEIGHT / 2);
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#111';
  ctx.lineCap = 'round';
  for (var i = 0; i <= lines; i++) {
    let buffIndex = Math.floor(channel.length / lines) * i;
    let x = i * xGap;
    let y = channel[buffIndex] * HEIGHT / 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x, -y);
  }
  ctx.stroke();
  ctx.restore();
  audioList.append(canvas);
};
},{}],"J1qk":[function(require,module,exports) {
"use strict";

var _birds = _interopRequireDefault(require("./birds"));
var _LuckyTheEnd = _interopRequireDefault(require("../sounds/Lucky - The End.mp3"));
require("./player");
var _waveform = require("./waveform");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { getData } from './waveform';

const url1 = _birds.default[0][0].audio;
const name = _birds.default[0][0].name;
const url2 = '../sounds/Lucky - The End.mp3';
const audio = new Audio(url1);
// const source = audioCtx.createMediaElementSource(audio);

const playBtn = document.querySelector('.player__button');
const timeline = document.querySelector('.player__timeline');
const progress = document.querySelector('.player__progress');
let mouseDownOnSlider = false;
console.log(url1);
console.log(url2);
console.log(audio);
console.log(_LuckyTheEnd.default);
audio.addEventListener('loadeddata', () => {
  (0, _waveform.getData)(url1);
  (0, _waveform.getData)(url2);
  (0, _waveform.getData)(_LuckyTheEnd.default);
  progress.style.width = 0;
});
audio.addEventListener('timeupdate', () => {
  if (!mouseDownOnSlider) {
    progress.style.width = audio.currentTime / audio.duration * 100 + '%';
  }
});
audio.addEventListener('ended', () => {
  playBtn.className = 'player__button player__button_play';
});
playBtn.addEventListener('click', () => {
  audio.paused ? audio.play() : audio.pause();
  audio.paused ? playBtn.className = 'player__button player__button_play' : playBtn.className = 'player__button player__button_pause';
});
timeline.addEventListener('click', e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  // console.dir(timeline.style.width);
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
});
},{"./birds":"FlCp","../sounds/Lucky - The End.mp3":"Xg7f","./player":"eHea","./waveform":"kEka"}]},{},["J1qk"], null)
//# sourceMappingURL=scripts.ededd09e.js.map