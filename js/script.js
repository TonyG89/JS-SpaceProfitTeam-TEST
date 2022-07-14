const postUser = {};

const massange = [
  {
    m: "Здравствуйте, меня зовут Ольга Викторовна. Я врач высшей категории и кандидат медицинских наук, специализируюсь на кардиологии. Я провожу ЭКГ и занимаюсь лечением ишемической болезни сердца, постинфарктных состояний, артериальной гипертензии, нарушений сердечного ритма и сердечной недостаточности. Добро пожаловать на мой официальный сайт.",
  },
  {
    m: "Здесь я провожу бесплатную онлайн-диагностику и даю личные рекомендации, которые помогли избавиться от гипертонии сотням женщин и мужчин. Ведь гипертония коварна тем, что человек долгое время остается в неведении относительно своего состояния, не зная ее симптомы.",
  },
  {
    m: "Чтобы провести диагностику и получить мои рекомендации по восстановлению артериального давления и нормализации работы сердца, ответьте на несколько вопросов.",
  },
  {
    m: "Вы мужчина или женщина? ",
  },
  {
    m: "Когда Вы родились? ",
  },
  {
    m: "У Вас есть аллергия на продукты питания, лекарства, пыльцу растений, яд насекомых?",
  },
  {
    m: "Есть ли в списке один или несколько симптомов, наблюдающихся у Вас? ",
  },
];

var mass_id = 0;
var length_mass = 0;
var lengt_num_mas = 0;
var text = "";
var process = true;
const set = setTimeout(() => {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  const mas_inf = setInterval(function () {
    if (process == true) {
      if (lengt_num_mas != massange.length) {
        text += massange[lengt_num_mas].m[length_mass];
        length_mass++;
        scrollDown();
        $("#mass" + lengt_num_mas + "").html(text);
        if (
          lengt_num_mas === 3 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          appGender();
          process = false;
          genderNext();
          scrollDown();
        }
        if (
          lengt_num_mas === 4 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          appAge();
          process = false;
          genderNext();
          scrollDown();
        }
        if (
          lengt_num_mas === 5 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          process = false;
          YsNo();
          scrollDown();
        }
        if (
          lengt_num_mas === 6 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          process = false;
          Photofoot();
          setTimeout(() => {
            let sc_top = $("#foot1");
            $("#page_chat").animate(
              {
                scrollTop: sc_top[0].offsetTop,
              },
              500
            );
            scrollDown();
          }, 1000);
        }

        if (length_mass == massange[lengt_num_mas].m.length) {
          scrollDown();
          lengt_num_mas++;
          mass_id++;
          length_mass = 0;
          text = "";
          app();
          let proc_scroling = lengt_num_mas - 1;
          let nev_div = $("#mass" + proc_scroling + "")[0].offsetParent
            .offsetTop;
          scriplongBody(nev_div);
        }
      } else if (lengt_num_mas === 21) {
        scrollDown();
        clearInterval(mas_inf);
        $("#mass" + lengt_num_mas + "")
          .parent()
          .parent()
          .css("display", "none");
        $(".iframe-form").css("display", "block");
        scrollDown();
        clearInterval(set);
        showForm();
      }
    }
  }, 1);
}, 1000);

function app() {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  scrollDown();
}

function myMassange(userGend) {
  let mass =
    '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' +
    userGend +
    "</p></div></div></div>";
  $(".chat-content-list").append(mass);
  scrollDown();
}

function myMassang(userGend) {
  let mass =
    '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' +
    userGend +
    "</p></div></div></div>";
  $(".chat-content-list").append(mass);
}

function appGender() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Мужчина</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Женщина</span></div></div>'
  );
}

function genderNext() {
  $(".chooseGenderM").click(() => {
    postUser.gender = "Мужчина";
    localStorage.setItem("gender", "Мужчина");
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMassange("Мужчина");
    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
  $(".chooseGenderW").click(() => {
    postUser.gender = "Женщина";
    localStorage.setItem("gender", "Женщина");
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMassange("Женщина");
    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
}

function appAge() {
  scrollDown();

  let days = "",
    years = "";
  for (let i = 1; i <= 31; i++) {
    days += `<option value="${i}">${i}</option>`;
  }
  for (let i = 1940; i <= new Date().getFullYear(); i++) {
    years += `<option value="${i}">${i}</option>`;
  }

  $(".chat-content-list").append(
    `<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">День</option>${days}</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Месяц</option>undefined<option value="1">январь</option><option value="2">февраль</option><option value="3">март</option><option value="4">апрель</option><option value="5">май</option><option value="6">июнь</option><option value="7">июль</option><option value="8">август</option><option value="9">сентябрь</option><option value="10">октябрь</option><option value="11">ноябрь</option><option value="12">декабрь</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Год</option>${years}</select></div></div></form>`
  );

  let data = setInterval(() => {
    let empty_field = $(".select-day").val();
    let full_month = $(".select-month").val();
    let year = $(".select-year").val();
    if (empty_field != "" && full_month != "" && year != "") {
      let selectS = "" + empty_field + "." + full_month + "." + year + "";
      postUser.age = selectS;
      localStorage.setItem("age", selectS);
      myMassange(selectS);
      $(this).css("display", "none");
      process = true;
      clearInterval(data);
    }
  }, 500);
}

function YsNo() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM" id="yeas">ДА</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW" id="no">Нет</span></div></div>'
  );
  $("#yeas").click(() => {
    postUser.allergy = "Да";
    localStorage.setItem("allergy", "Да");
    $(".chat-content-buttons-gender").css("display", "none");
    myMassange("Да");
    process = true;
    scrollDown();
  });
  $("#no").click(() => {
    postUser.allergy = "Нет";
    localStorage.setItem("allergy", "Нет");
    $(".chat-content-buttons-gender").css("display", "none");
    myMassange("Нет");
    process = true;
    scrollDown();
  });
}

function Photofoot() {
  $(".chat-content-list").append(
    '<div class="chat-content-desc-item manager"><img class="symptomsImg" style="max-width: 625px;" src="images/symptomsFull.png" id="foot1"><img class="symptoms-mobile" src="images/symptoms.png"></div>'
  );
  setTimeout(() => {
    addArray();
    process = true;
  }, 8500);
}

function addArray() {
  end_massange1 = {
    m: 'У большинства людей с гипертонией не проявляется никаких симптомов, поэтому ее называют "молчаливым убийцей" А если у Вас уже наблюдаться выше перечисленные симптомы это сигнализирует о больших проблемах с сердцем.',
  };
  end_massange2 = {
    m: "Повышенное кровяное давление очень опасно. Чем выше кровяное давление, тем выше риск повреждения сердца или кровеносных сосудов в основных органах, таких как мозг или почки. Неконтролируемая гипертония может привести к инфаркту, увеличению сердца и, в конечном итоге, к сердечной недостаточности. В кровеносных сосудах могут развиваться расширения (аневризмы) и появляться уязвимые места, в которых сосуды с большей вероятностью могут закупориваться и разрываться. Давление в кровеносных сосудах может привести к кровоизлиянию в мозг и развитию инсульта. Гипертония может также приводить к почечной недостаточности, слепоте и когнитивным нарушениям.",
  };
  end_massange3 = {
    m: "Первая рекомендация - вести здоровый образ жизни и уделять особое внимание надлежащему питанию. Также следует уменьшать потребление соли до менее 5г в день (чуть менее одной чайной ложки).",
  };
  end_massange4 = {
    m: "Вторая рекомендация - управлять стрессом такими здоровыми способами, как медитация, надлежащие физические упражнения и позитивные социальные контакты.",
  };
  end_massange5 = {
    m: "В Вашем случае обязательно нужно чистить сосуды и организм в целом. Для этого вам помогут вытяжки из плодов боярышника, цветков календулы, цветков липы, листьев мать-и-мачехи, травы мелиссы, травы пустырника, травы зверобоя, травы тысячелистника, плодов софоры, плодов шиповника, комплекс из 12-ти витаминов. Это самые необходимые средства, которые помогут Вам избавиться от гипертонии.",
  };
  end_massange6 = {
    m: "Для избавления от головной боли и восстановления давления достаточно принимать капсулы «GiperoPlus» 2 раза в день по 1 штуке, независимо от приема пищи, главное запивать большим количеством воды.",
  };
  end_massange7 = {
    m: "Абсолютно каждый компонент из состава «GiperoPlus» оказывает комплексное положительное воздействие на работу всех внутренних органов и систем. Также он снимает негативное влияние стрессов и переживаний, делает организм более выносливым и активным. Огромный перечень натуральных компонентов способствует быстрому и бережному восстановлению сердечно-сосудистой системы.",
  };
  end_massange8 = {
    m: "Вот так он выглядит: ",
  };
  end_massange9 = {
    m: '<img src="images/offer.png">',
  };
  end_massange10 = {
    m: "Оптимальная продолжительность курса, которая учитывает Ваш возраст, образ жизни и текущее состояние здоровья, составляет от 30 дней.",
  };
  end_massange11 = {
    m: "Доказано, что даже продолжительное использование показывает значительные результаты. Лекарство оказывает следующее действие:",
  };
  end_massange12 = {
    m: "- улучшает химический состав крови; </br> - приводит уровень артериального давления в норму; </br> - избавляет от застойных явлений; </br> - очищает от шлаков и токсинов; </br> - избавляет от атеросклеротических бляшек; </br> - улучшает мозговое кровообращение; </br> - повышает выносливость и активность; </br> - препятствует возникновению осложнений; </br> - способствует оздоровлению поврежденных тканей.",
  };
  end_massange13 = {
    m: "А ещё у меня для Вас отличные новости. Вы прошли онлайн-диагностику и тем самым стали участником розыгрыша этого препарата, который является нашим спонсором. Только сегодня, у Вас есть возможность получить «GiperoPlus» -  <span style='color: red;'>бесплатно</span>.",
  };
  end_massange14 = {
    m: "Чтобы получить «GiperoPlus», впишите своё имя и номер телефона в форму заказа ниже. Ваши данные отправляются напрямую производителю, больше никто не имеет к ним доступа. Вам перезвонит специалист и после уточнения всех необходимых деталей, в тот же день Вам будет отправлена посылка с курсом «GiperoPlus».",
  };
  massange.push(
    end_massange1,
    end_massange2,
    end_massange3,
    end_massange4,
    end_massange5,
    end_massange6,
    end_massange7,
    end_massange8,
    end_massange9,
    end_massange10,
    end_massange11,
    end_massange12,
    end_massange13,
    end_massange14
  );
}

let top_scroling = 0;

function scriplongBody(x) {
  let ekac_x = x + 70;
  top_scroling += ekac_x;
  var set = setTimeout(() => {
    $("#page_chat").animate(
      {
        scrollTop: top_scroling,
      },
      1000
    );
  }, 300);
}

function showForm() {
  $(".iframe-form").addClass("show"),
    $(".btn-top").addClass("show"),
    $(".reviews").removeClass("hide");
}

function scrollDown() {
  var wrap = $(".content"),
    wrapHeight = wrap.height(),
    currentHeight = wrap.scrollTop(),
    wrapScrollHeight = wrap.prop("scrollHeight"),
    desiredHeight = wrapScrollHeight - wrapHeight;
  if (currentHeight < desiredHeight) {
    wrap.scrollTop(desiredHeight);
  }
}

// scrollDown Button #scroll_id
$("#scroll_id").on("click", () => {
  scrollDown();
});

// получить данные
const message = {
  loading: "Ожидайте, запрос отправляется",
  success: "Спасибо, с вами свяжутся в ближайшее время для консультации",
  failure: "Ошибка сервера, запрос не отправлен",
};

const json = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(postUser), // поставить postUser
};

const postData = (url) => {
  fetch(url, json)
    .then((data) => {
      console.log(data);
      $(".chat-content-list").append(myMassang(message.success));
    })
    .catch(() => {
      $(".chat-content-list").append(myMassang(message.failure));
    })
    .finally(() => {
      $(".iframe-form").removeClass("show");
      $(".btn-top").removeClass("show");
      $(".reviews").removeClass("hide");
    });
};

// отправка формы
function subm() {
  console.log(message.loading);
  const uName = document.getElementById("input-name").value;
  const uTel = document.getElementById("input-phone").value;
  postUser.name = uName;
  postUser.phone = uTel;
  localStorage.setItem = ("name", uName);
  localStorage.setItem = ("phone", uTel);
  console.log(postUser);
  postData("server-url"); // указать сервер для пост данных(возможно имелось в виду путь /order/cpa/)
}

// открыть все комментарии
$(".glow-button").on("click", (e) => {
  e.preventDefault();
  $(".glow-button").hide();
  $(".comment-item").addClass("comment-item-show");
});
