const Cities = {
    "آذربايجان شرقي": ["آذر شهر", "اسكو", "اهر", "بستان آباد", "بناب", "بندر شرفخانه", "تبريز", "تسوج", "جلفا", "سراب", "شبستر", "صوفیان", "عجبشير", "قره آغاج", "كليبر", "كندوان", "مراغه", "مرند", "ملكان", "ممقان", "ميانه", "هاديشهر", "هريس", "هشترود", "ورزقان"],
    "آذربايجان غربي": ["اروميه", "اشنويه", "بازرگان", "بوكان", "پلدشت", "پيرانشهر", "تكاب", "خوي", "سردشت", "سلماس", "سيه چشمه- چالدران", "سیمینه", "شاهين دژ", "شوط", "ماكو", "مهاباد", "مياندوآب", "نقده"],
    "اردبيل": ["اردبيل", "بيله سوار", "پارس آباد", "خلخال", "سرعين", "كيوي (كوثر)", "گرمي (مغان)", "مشگين شهر", "مغان (سمنان)", "نمين", "نير"],
    "اصفهان": ["آران و بيدگل", "اردستان", "اصفهان", "باغ بهادران", "تيران", "خميني شهر", "خوانسار", "دهاقان", "دولت آباد-اصفهان", "زرين شهر", "زيباشهر (محمديه)", "سميرم", "شاهين شهر", "شهرضا", "فريدن", "فريدون شهر", "فلاورجان", "فولاد شهر", "قهدریجان", "كاشان", "گلپايگان", "گلدشت اصفهان", "گلدشت مركزی", "مباركه اصفهان", "مهاباد-اصفهان", "نايين", "نجف آباد", "نطنز", "هرند"],
    "البرز": ["آسارا", "اشتهارد", "شهر جديد هشتگرد", "طالقان", "كرج", "گلستان تهران", "نظرآباد", "هشتگرد"],
    "ايلام": ["آبدانان", "ايلام", "ايوان", "دره شهر", "دهلران", "سرابله", "شيروان چرداول", "مهران"],
    "بوشهر": ["آبپخش", "اهرم", "برازجان", "بندر دير", "بندر ديلم", "بندر كنگان", "بندر گناوه", "بوشهر", "تنگستان", "جزيره خارك", "جم (ولايت)", "خورموج", "دشتستان - شبانکاره", "دلوار", "عسلویه"],
    "تهران": ["اسلامشهر", "بومهن", "پاكدشت", "تهران", "چهاردانگه", "دماوند", "رودهن", "ري", "شريف آباد", "شهر رباط كريم", "شهر شهريار", "فشم", "فيروزكوه", "قدس", "كهريزك", "لواسان بزرگ", "ملارد", "ورامين"],
    "چهارمحال بختياري": ["اردل", "بروجن", "چلگرد (كوهرنگ)", "سامان", "شهركرد", "فارسان", "لردگان"],
    "خراسان جنوبي": ["بشرویه", "بيرجند", "خضری", "خوسف", "سرایان", "سربيشه", "طبس", "فردوس", "قائن", "نهبندان"],
    "خراسان رضوي": ["بجستان", "بردسكن", "تايباد", "تربت جام", "تربت حيدريه", "جغتای", "جوین", "چناران", "خلیل آباد", "خواف", "درگز", "رشتخوار", "سبزوار", "سرخس", "طبس", "طرقبه", "فريمان", "قوچان", "كاشمر", "كلات", "گناباد", "مشهد", "نيشابور"],
    "خراسان شمالي": ["آشخانه، مانه و سمرقان", "اسفراين", "بجنورد", "جاجرم", "شيروان", "فاروج"],
    "خوزستان": ["آبادان", "اميديه", "انديمشك", "اهواز", "ايذه", "باغ ملك", "بستان", "بندر ماهشهر", "بندرامام خميني", "بهبهان", "خرمشهر", "دزفول", "رامشیر", "رامهرمز", "سوسنگرد", "شادگان", "شوش", "شوشتر", "لالي", "مسجد سليمان", "هنديجان", "هويزه"],
    "زنجان": ["آب بر (طارم)", "ابهر", "خرمدره", "زرین آباد (ایجرود)", "زنجان", "قیدار (خدا بنده)", "ماهنشان"],
    "سمنان": ["ايوانكي", "بسطام", "دامغان", "سرخه", "سمنان", "شاهرود", "شهمیرزاد", "گرمسار", "مهدیشهر"],
    "سيستان و بلوچستان": ["ايرانشهر", "چابهار", "خاش", "راسك", "زابل", "زاهدان", "سراوان", "سرباز", "ميرجاوه", "نيكشهر"],
    "فارس": ["آباده", "آباده طشك", "اردكان", "ارسنجان", "استهبان", "اشكنان", "اقليد", "اوز", "ایج", "ایزد خواست", "باب انار", "بالاده", "بنارويه", "بهمن", "بوانات", "بيرم", "بیضا", "جنت شهر", "جهرم", "حاجي آباد-زرین دشت", "خاوران", "خرامه", "خشت", "خفر", "خنج", "خور", "داراب", "رونيز عليا", "زاهدشهر", "زرقان", "سده", "سروستان", "سعادت شهر", "سورمق", "ششده", "شيراز", "صغاد", "صفاشهر", "علاء مرودشت", "عنبر", "فراشبند", "فسا", "فيروز آباد", "قائميه", "قادر آباد", "قطب آباد", "قير", "كازرون", "كنار تخته", "گراش", "لار", "لامرد", "لپوئی", "لطيفي", "مبارك آباد ديز", "مرودشت", "مشكان", "مصير", "مهر فارس(گله دار)", "ميمند", "نوبندگان", "نودان", "نورآباد", "ني ريز", "کوار"],
    "قزوين": ["آبيك", "البرز", "بوئين زهرا", "تاكستان", "قزوين", "محمود آباد نمونه"],
    "قم": ["قم"],
    "كردستان": ["بانه", "بيجار", "دهگلان", "ديواندره", "سقز", "سنندج", "قروه", "كامياران", "مريوان"],
    "كرمان": ["بابك", "بافت", "بردسير", "بم", "جيرفت", "راور", "رفسنجان", "زرند", "سيرجان", "كرمان", "كهنوج", "منوجان"],
    "كرمانشاه": ["اسلام آباد غرب", "پاوه", "تازه آباد- ثلاث باباجانی", "جوانرود", "سر پل ذهاب", "سنقر كليائي", "صحنه", "قصر شيرين", "كرمانشاه", "كنگاور", "گيلان غرب", "هرسين"],
    "كهكيلويه و بويراحمد": ["دهدشت", "دوگنبدان", "سي سخت- دنا", "گچساران", "ياسوج"],
    "گلستان": ["آزاد شهر", "آق قلا", "انبارآلوم", "اینچه برون", "بندر گز", "تركمن", "جلین", "خان ببین", "راميان", "سرخس کلاته", "سیمین شهر", "علي آباد كتول", "فاضل آباد", "كردكوي", "كلاله", "گالیکش", "گرگان", "گمیش تپه", "گنبد كاووس", "مراوه تپه", "مينو دشت", "نگین شهر", "نوده خاندوز", "نوکنده"],
    "گيلان": ["آستارا", "آستانه اشرفيه", "املش", "بندرانزلي", "خمام", "رشت", "رضوان شهر", "رود سر", "رودبار", "سياهكل", "شفت", "صومعه سرا", "فومن", "كلاچاي", "لاهيجان", "لنگرود", "لوشان", "ماسال", "ماسوله", "منجيل", "هشتپر"],
    "لرستان": ["ازنا", "الشتر", "اليگودرز", "بروجرد", "پلدختر", "خرم آباد", "دورود", "سپید دشت", "كوهدشت", "نورآباد (خوزستان)"],
    "مازندران": ["آمل", "بابل", "بابلسر", "بلده", "بهشهر", "پل سفيد", "تنكابن", "جويبار", "چالوس", "خرم آباد", "رامسر", "رستم کلا", "ساري", "سلمانشهر", "سواد كوه", "فريدون كنار", "قائم شهر", "گلوگاه", "محمودآباد", "مرزن آباد", "نكا", "نور", "نوشهر"],
    "مركزي": ["آشتيان", "اراك", "تفرش", "خمين", "دليجان", "ساوه", "شازند", "محلات", "کمیجان"],
    "هرمزگان": ["ابوموسي", "انگهران", "بستك", "بندر جاسك", "بندر لنگه", "بندرعباس", "پارسیان", "حاجي آباد", "دشتی", "دهبارز (رودان)", "قشم", "كيش", "ميناب"],
    "همدان": ["اسدآباد", "بهار", "تويسركان", "رزن", "كبودر اهنگ", "ملاير", "نهاوند", "همدان"],
    "يزد": ["ابركوه", "اردكان", "اشكذر", "بافق", "تفت", "مهريز", "ميبد", "هرات", "يزد"]
}
module.exports = Cities